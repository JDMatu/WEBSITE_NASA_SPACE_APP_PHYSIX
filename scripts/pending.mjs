#!/usr/bin/env node
// Lists what the team still has to fill in: every `null` inside the `pending` block of the content file.
import { readFileSync } from 'node:fs';

const file = new URL('../src/content/site.ts', import.meta.url);
const src = readFileSync(file, 'utf8');
const start = src.indexOf('export const pending');
const end = src.indexOf('// 2. FACTS');
const block = src.slice(start, end);
const before = src.slice(0, start).split('\n').length;
const missing = [];
block.split('\n').forEach((line, i) => {
  const single = line.match(/^\s*(\w+): null\b/);
  if (single) missing.push(`  src/content/site.ts:${before + i}  ${single[1]}`);
  const member = line.match(/\{ name: null/);
  if (member) missing.push(`  src/content/site.ts:${before + i}  team member (name, role, built, photo)`);
});
if (missing.length === 0) {
  console.log('Nothing pending: every placeholder in src/content/site.ts is filled.');
} else {
  console.log(`${missing.length} placeholders still pending:\n${missing.join('\n')}`);
  console.log('\nThe site shows a visible marker for each one. Fill them in the `pending` block and rebuild.');
}
