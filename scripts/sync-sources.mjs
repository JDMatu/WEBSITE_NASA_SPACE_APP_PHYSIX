#!/usr/bin/env node
// Copies the game's generated docs/SOURCES.md into src/content/sources.json, so the /sources/ page
// and the constant counts always match the game. The game repository is only read.
//
//   node scripts/sync-sources.mjs /path/to/NASA        (or: npm run sync:sources -- /path/to/NASA)
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const game = process.argv[2];
if (!game) {
  console.error('Usage: node scripts/sync-sources.mjs <path to the game repository>');
  process.exit(1);
}
const md = readFileSync(path.join(game, 'docs/SOURCES.md'), 'utf8');

const cells = (line) => line.replace(/^\|/, '').replace(/\|\s*$/, '').split(/(?<!\\)\|/).map((c) => c.trim());
const link = (cell) => {
  const m = cell.match(/^\[(.+?)\]\((.+?)\)$/);
  return m ? { text: m[1], url: m[2] } : cell && cell !== '—' ? { text: cell, url: null } : null;
};
const code = (cell) => cell.replace(/`/g, '');

/** Returns { title, count, rows: string[][] } for every "## Title (N)" section that holds a table. */
const sections = {};
for (const block of md.split(/^## /m).slice(1)) {
  const [head, ...rest] = block.split('\n');
  const m = head.match(/^(.*?)(?:\s*\((\d+)\))?\s*$/);
  const rows = rest.filter((l) => l.startsWith('|')).slice(2).map(cells);
  sections[m[1].trim()] = { count: m[2] ? Number(m[2]) : rows.length, rows };
}
const need = (name) => {
  if (!sections[name]) throw new Error(`Section "${name}" not found in SOURCES.md: its format changed, update this script.`);
  return sections[name];
};

const constant = ([id, value, unit, source, status, note]) => ({ id: code(id), value, unit, source: link(source), status, note });
const event = ([id, name, sites, affects, , duration, warning, effects, source]) => ({ id: code(id), name, sites, affects, duration, warning, effects, source: link(source) });

const measured = need('Measured constants');
const derived = need('Derived constants');
const design = need('Game design constants');
const real = need('Events that really happened');
const training = need('Game design events (training scenarios)');
const citations = need('Citations');

const out = {
  syncedFrom: 'docs/SOURCES.md of the game repository',
  dataPack: (md.match(/Data pack version ([\d.]*\d)/) ?? [])[1] ?? null,
  counts: {
    measured: measured.count,
    derived: derived.count,
    sourced: measured.count + derived.count,
    gameDesign: design.count,
    total: measured.count + derived.count + design.count,
    citations: citations.count,
  },
  measured: measured.rows.map(constant),
  derived: derived.rows.map(constant),
  gameDesign: design.rows.map(([id, value, unit, why]) => ({ id: code(id), value, unit, why })),
  eventsReal: real.rows.map(event),
  eventsTraining: training.rows.map(event),
  citations: citations.rows.map(([id, title, organisation, year, url]) => ({ id: code(id), title, organisation, year, url })),
};
for (const [key, n] of [['measured', measured.count], ['derived', derived.count], ['gameDesign', design.count], ['citations', citations.count]]) {
  if (out[key].length !== n) throw new Error(`${key}: heading says ${n}, table has ${out[key].length} rows.`);
}
const file = new URL('../src/content/sources.json', import.meta.url);
writeFileSync(file, JSON.stringify(out, null, 2) + '\n');
console.log(`Wrote src/content/sources.json: ${JSON.stringify(out.counts)}`);
console.log('If these counts changed, update facts.constants in src/content/site.ts (the build checks they match).');
