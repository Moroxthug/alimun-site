// Lists a course book's explanations for translators (docs/BOOKS.md):
//   node scripts/book-strings.mjs English-B1 es   -> prints { "<English text>": "<existing translation or empty>" }
import { readFileSync, existsSync } from 'fs';
import { pathToFileURL } from 'url';
const [id, lang] = process.argv.slice(2);
const dir = new URL('../site/src/data/books/', import.meta.url);
const { BOOK } = await import(pathToFileURL(new URL(`${id}.js`, dir).pathname).href);
const { visit } = await import(new URL('explain.js', dir).href);
const file = new URL(`i18n/${id}.${lang}.json`, dir);
const have = existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : {};
const out = {};
visit(BOOK, (text) => { out[text] = have[text] || ''; });
console.log(JSON.stringify(out, null, 2));
