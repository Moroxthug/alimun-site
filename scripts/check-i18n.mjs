// node scripts/check-i18n.mjs <book> <lang> (from the repo root): a book's explanation translations (docs/BOOKS.md). Reports missing, empty, extra keys and unbalanced markers.
import { execFileSync } from 'child_process';
import { readFileSync, existsSync } from 'fs';
const [id, lang] = process.argv.slice(2);
const want = JSON.parse(execFileSync('node', ['scripts/book-strings.mjs', id, lang], { maxBuffer: 1 << 28 }).toString());
const file = `site/src/data/books/i18n/${id}.${lang}.json`;
if (!existsSync(file)) { console.log(`${id}.${lang}: file missing`); process.exit(1); }
const have = JSON.parse(readFileSync(file, 'utf8'));
let bad = 0;
const count = (s, re) => (String(s).match(re) || []).length;
for (const k of Object.keys(want)) {
  const v = have[k];
  if (!v || !String(v).trim()) { bad++; console.log('MISSING', JSON.stringify(k).slice(0, 120)); continue; }
  if (count(k, /\*\*/g) !== count(v, /\*\*/g)) { bad++; console.log('BOLD', JSON.stringify(k).slice(0, 100)); }
  const it = (s) => count(String(s).replace(/\*\*/g, ''), /\*/g);
  if (it(k) % 2 !== it(v) % 2 || (it(k) > 0 && it(v) === 0)) { bad++; console.log('ITALIC', JSON.stringify(k).slice(0, 100)); }
  if (count(k, /___/g) !== count(v, /___/g)) { bad++; console.log('GAP', JSON.stringify(k).slice(0, 100)); }
}
const extra = Object.keys(have).filter((k) => !(k in want)).length;
console.log(`${id}.${lang}: ${Object.keys(want).length} strings, ${bad} problems, ${extra} unused keys`);
process.exit(bad ? 1 : 0);
