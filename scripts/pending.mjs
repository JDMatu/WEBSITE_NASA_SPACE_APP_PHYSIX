#!/usr/bin/env node
// Lists what the team still has to fill in: every `null` inside the `pending` block of the content file.
import { readdirSync, readFileSync } from 'node:fs';

const file = new URL('../src/content/site.ts', import.meta.url);
const src = readFileSync(file, 'utf8');
const start = src.indexOf('export const pending');
const end = src.indexOf('// 2. FACTS');
const block = src.slice(start, end);
const before = src.slice(0, start).split('\n').length;
const missing = [];
// Team photos are found by file name (juan-diego-matute.jpg) in src/assets/team/.
const photoFiles = readdirSync(new URL('../src/assets/team/', import.meta.url)).map((f) => f.replace(/\.\w+$/, '').toLowerCase());
const slug = (name) => name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
block.split('\n').forEach((line, i) => {
  const single = line.match(/^\s*(\w+): null\b/);
  if (single) missing.push(`  src/content/site.ts:${before + i}  ${single[1]}`);
  const member = line.match(/\{ name: (null|'([^']*)'), role: (null|'[^']*'), built: (null|'[^']*'), photo: (null|'[^']*') \}/);
  if (member) {
    const hasPhoto = member[5] !== 'null' || (member[2] && photoFiles.includes(slug(member[2])));
    const gaps = ['name', 'role', 'built'].filter((_, k) => [member[1], member[3], member[4]][k] === 'null');
    if (!hasPhoto) gaps.push(member[2] ? `photo (src/assets/team/${slug(member[2])}.jpg)` : 'photo');
    if (gaps.length) missing.push(`  src/content/site.ts:${before + i}  team member ${member[2] ?? ''}: ${gaps.join(', ')}`);
  }
});
if (missing.length === 0) {
  console.log('Nothing pending: every placeholder in src/content/site.ts is filled.');
} else {
  console.log(`${missing.length} placeholders still pending:\n${missing.join('\n')}`);
  console.log('\nThe site shows a visible marker for each one. Fill them in the `pending` block and rebuild.');
}
