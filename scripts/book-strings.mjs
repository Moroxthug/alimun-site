// Lists a course book's explanations for translators (docs/BOOKS.md):
//   node scripts/book-strings.mjs English-B1 es   -> prints { "<English text>": "<existing translation or empty>" }
import { readFileSync, existsSync } from 'fs';
import { loadBook, explainVisit, dir } from './book-lib.mjs';
const [id, lang] = process.argv.slice(2);
const { book } = await loadBook(id);
const visit = await explainVisit();
const file = `${dir}i18n/${id}.${lang}.json`;
const have = existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : {};
const out = {};
visit(book, (text) => { out[text] = have[text] || ''; });
console.log(JSON.stringify(out, null, 2));
