#!/usr/bin/env node
// Takes the English game screenshots used on the site, from the running game, without modifying it.
// It drives the game through its own data-testid hooks (the same ones the game's
// scripts/playthrough.mjs uses) and waits for each panel to finish fading in.
//
// Needs the game served locally with LLM_PROVIDER=none (see README, "Regenerating the images").
//
//   node scripts/capture-shots.mjs --game /path/to/NASA --url http://localhost:8790 --out /tmp/shots
//
// Output: <rank>-briefing.png, <rank>-plan.png for the four ranks; trainee-predict, trainee-run-N,
// trainee-review; specialist text-accepted and text-refused (rules interpreter, no AI).
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const opt = { game: '', url: 'http://localhost:8790', out: './shots-out', seed: '1', scale: '2', only: '' };
for (let i = 0; i < args.length; i++) if (args[i].startsWith('--')) opt[args[i].slice(2)] = args[++i];
if (!opt.game) {
  console.error('Missing --game <path to the game repository>');
  process.exit(1);
}
const require = createRequire(path.join(path.resolve(opt.game), 'package.json'));
const { chromium } = require('playwright-core');
mkdirSync(opt.out, { recursive: true });

const ACCEPTED_TEXT = 'Build a regolith berm around the habitat';
const REFUSED_TEXT = 'Give us infinite oxygen';
const SETTLE = 2600;

const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH ?? '/usr/bin/google-chrome',
  headless: true,
  args: ['--enable-unsafe-swiftshader', '--use-angle=swiftshader', '--ignore-gpu-blocklist', '--no-sandbox'],
});
const tid = (id) => `[data-testid="${id}"]`;

async function session(rank, run) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: Number(opt.scale) });
  const page = await context.newPage();
  const shot = async (name) => {
    await page.waitForTimeout(SETTLE);
    await page.screenshot({ path: path.join(opt.out, `${name}.png`) });
    console.log(name);
  };
  const click = async (id, timeout = 90000) => {
    await page.waitForSelector(`${tid(id)}:not([disabled])`, { state: 'visible', timeout });
    await page.click(tid(id), { timeout: 15000 });
  };
  const exists = async (id) => (await page.$(tid(id))) !== null;
  await page.goto(`${opt.url}/?debug=1&seed=${opt.seed}&rank=${rank}&lang=en&autostart=1`, { waitUntil: 'load' });
  await page.waitForSelector(`${tid('to-plan')}:not([disabled])`, { state: 'visible', timeout: 120000 });
  try {
    await run({ page, shot, click, exists });
  } catch (e) {
    console.error(`${rank}: ${e.message.split('\n')[0]}`);
  }
  await context.close();
}

const submitText = async ({ page, click }, text) => {
  await page.fill(tid('plan-text-input'), text);
  await click('plan-text-submit');
  await page
    .waitForFunction(() => !document.querySelector('[data-testid="plan-text-submit"]')?.hasAttribute('disabled'), null, { timeout: 60000 })
    .catch(() => {});
  // Bring the interpreter's answer into view inside the plan panel.
  await page.waitForTimeout(800);
  await page.evaluate(() => {
    const hit = [...document.querySelectorAll('*')].find(
      (el) => el.children.length === 0 && /UNDERSTOOD/i.test(el.textContent ?? ''),
    );
    hit?.scrollIntoView({ block: 'start' });
  });
};

const RUNS = {
  trainee: async (h) => {
    for (const sol of [1, 2]) {
      await h.shot(`trainee-sol${sol}-briefing`);
      await h.click('to-plan');
      await h.page.waitForSelector(tid('confirm-plan'), { state: 'visible', timeout: 30000 });
      await h.shot(`trainee-sol${sol}-plan`);
      await h.click('option-card-0');
      await h.shot(`trainee-sol${sol}-plan-picked`);
      await h.click('confirm-plan');
      await h.page.waitForSelector(tid('lock-prediction'), { state: 'visible', timeout: 30000 });
      const groups = await h.page.$$eval('[data-testid^="predict-"][data-testid$="-same"]', (els) => els.map((e) => e.getAttribute('data-testid')));
      for (const id of groups) await h.click(id);
      await h.shot(`trainee-sol${sol}-predict`);
      await h.click('lock-prediction');
      await h.page.waitForSelector(tid('resolving-next'), { state: 'visible', timeout: 30000 });
      for (let step = 1; step <= 12; step++) {
        if (step <= 3) await h.shot(`trainee-sol${sol}-run-${step}`);
        await h.page.click(tid('resolving-next'), { timeout: 15000 }).catch(() => {});
        await h.page.waitForTimeout(400);
        if ((await h.exists('next-sol')) || (await h.exists('to-debrief'))) break;
      }
      await h.page.waitForFunction(() => document.querySelector('[data-testid="next-sol"]'), null, { timeout: 90000 });
      await h.shot(`trainee-sol${sol}-review`);
      await h.click('next-sol');
      await h.page.waitForSelector(`${tid('to-plan')}:not([disabled])`, { state: 'visible', timeout: 120000 });
    }
  },
  cadet: async (h) => {
    await h.shot('cadet-briefing');
    await h.click('to-plan');
    await h.page.waitForSelector(tid('confirm-plan'), { state: 'visible', timeout: 30000 });
    await h.shot('cadet-plan');
  },
  specialist: async (h) => {
    await h.click('to-plan');
    await h.page.waitForSelector(tid('confirm-plan'), { state: 'visible', timeout: 30000 });
    await h.shot('specialist-plan');
    await h.click('tab-text');
    await submitText(h, ACCEPTED_TEXT);
    await h.shot('text-accepted');
    await submitText(h, REFUSED_TEXT);
    await h.shot('text-refused');
  },
  commander: async (h) => {
    await h.click('to-plan');
    await h.page.waitForSelector(tid('confirm-plan'), { state: 'visible', timeout: 30000 });
    await h.shot('commander-plan');
  },
};

for (const [rank, run] of Object.entries(RUNS)) {
  if (opt.only && !opt.only.split(',').includes(rank)) continue;
  await session(rank, run);
}
await browser.close();
