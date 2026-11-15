#!/usr/bin/env node
// Renders the storm-sequence frames from the game's own 3D scene (its `?harness=scene` test bench).
// Nothing in the game is modified: this drives the harness sliders in headless Chrome and takes
// screenshots with the debug panel hidden.
//
// Needs the game served locally (see README, "Regenerating the images") and playwright-core,
// which is resolved from the game repository so this site keeps no browser dependency.
//
//   node scripts/capture-frames.mjs --game /path/to/NASA --url http://localhost:8790 --out /tmp/frames
//
// Values per sol come from `npm run play -- --rank trainee --policy first_option --seed 1 --locale en`
// in the game repository (rules director), mapped with the same formulas as apps/web/src/game/sceneView.ts.
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const opt = { game: '', url: 'http://localhost:8790', out: './frames-out', only: '', seconds: '7' };
for (let i = 0; i < args.length; i++) if (args[i].startsWith('--')) opt[args[i].slice(2)] = args[++i];
if (!opt.game) {
  console.error('Missing --game <path to the game repository>');
  process.exit(1);
}
const require = createRequire(path.join(path.resolve(opt.game), 'package.json'));
const { chromium } = require('playwright-core');
mkdirSync(opt.out, { recursive: true });

const storm = (tau) => Math.min(1, Math.max(0, Math.pow(Math.max(0, tau - 0.5) / 10.3, 0.7)));
const sun = (tau) => Math.exp(-0.328 * (tau - 0.5)) * 0.95;

// One entry per frame. Battery is the end-of-sol charge over the 150 kWh capacity.
const FRAMES = [
  { id: 'sol01', tau: 0.5, battery: 1.0, lights: 1, panelDust: 0.08, shielding: 0.0, growth: 0.53 },
  { id: 'sol02', tau: 2.2, battery: 0.82, lights: 1, panelDust: 0.2, shielding: 0.17, growth: 0.65 },
  { id: 'sol03', tau: 3.1, battery: 0.52, lights: 1, panelDust: 0.35, shielding: 0.3, growth: 0.78 },
  { id: 'sol04', tau: 4.0, battery: 0.13, lights: 0.72, panelDust: 0.5, shielding: 0.41, growth: 0.9, solarEvent: 0.8 },
  { id: 'sol05', tau: 4.0, battery: 0.0, lights: 0.3, panelDust: 0.55, shielding: 0.41, growth: 0.92, labOff: true },
  { id: 'sol08', tau: 0.5, battery: 0.18, lights: 0.82, panelDust: 0.05, shielding: 0.41, growth: 0.13 },
];

const VIEWS = [
  // The insets tell the game's camera which part of the screen our text covers.
  { id: 'wide', width: 1920, height: 1080, insets: '0.06,0,0.04,0.3' },
  { id: 'tall', width: 900, height: 1600, insets: '0.08,0,0.5,0' },
];

const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH ?? '/usr/bin/google-chrome',
  headless: true,
  args: ['--enable-unsafe-swiftshader', '--use-angle=swiftshader', '--ignore-gpu-blocklist', '--no-sandbox'],
});

for (const view of VIEWS) {
  for (const f of FRAMES) {
    if (opt.only && !`${f.id}-${view.id}`.includes(opt.only)) continue;
    const context = await browser.newContext({ viewport: { width: view.width, height: view.height }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
    const page = await context.newPage();
    await page.goto(`${opt.url}/?harness=scene&preset=clear-day&low=0&insets=${view.insets}`, { waitUntil: 'load' });
    await page.waitForSelector('canvas', { state: 'attached', timeout: 60000 });
    await page.waitForTimeout(1500);
    await page.evaluate((v) => {
      const rows = [...document.querySelectorAll('aside label')];
      const row = (name) => rows.find((r) => r.firstElementChild?.textContent === name);
      const setRange = (name, value) => {
        const input = row(name)?.querySelector('input[type=range]');
        if (!input) throw new Error(`no slider ${name}`);
        Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(input, String(value));
        input.dispatchEvent(new Event('input', { bubbles: true }));
      };
      const setCheck = (name, value) => {
        const input = row(name)?.querySelector('input[type=checkbox]');
        if (!input) throw new Error(`no checkbox ${name}`);
        if (input.checked !== value) input.click();
      };
      setRange('tau', v.tau);
      setRange('sunlight', v.sunlight);
      setRange('stormIntensity', v.storm);
      setRange('solarEvent', v.solarEvent ?? 0);
      setRange('shielding', v.shielding);
      setRange('battery', v.battery);
      setRange('panelDust', v.panelDust);
      setRange('lights', v.lights);
      setRange('growth', v.growth);
      if (v.labOff) setCheck('lab online', false);
    }, { ...f, storm: storm(f.tau), sunlight: sun(f.tau) });
    await page.addStyleTag({ content: 'aside{display:none !important}' });
    // Let the scene ease to the new values. A fresh page per frame and a fixed wait keep the slow
    // camera orbit at (nearly) the same angle in every frame.
    await page.waitForTimeout(Number(opt.seconds) * 1000);
    const file = path.join(opt.out, `${f.id}-${view.id}.png`);
    await page.screenshot({ path: file });
    console.log(file);
    await context.close();
  }
}
await browser.close();
