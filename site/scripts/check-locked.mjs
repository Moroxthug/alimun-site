// Fails the build if an approved (locked) block was changed.
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';

const here = resolve(import.meta.dirname, '..');
const locked = JSON.parse(readFileSync(resolve(here, 'locked.json'), 'utf8'));
let bad = 0;
for (const [file, { sha256 }] of Object.entries(locked)) {
  if (file.startsWith('_')) continue;
  const got = createHash('sha256').update(readFileSync(resolve(here, file))).digest('hex');
  if (got !== sha256) { console.error(`Locked block changed: ${file}`); bad++; }
}
if (bad) process.exit(1);
console.log(`Locked blocks unchanged (${Object.keys(locked).length - 1}).`);
