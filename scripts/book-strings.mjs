// Lists a course book's explanations for translators (docs/BOOKS.md):
//   node scripts/book-strings.mjs English-B1 es   -> prints { "<English text>": "<existing translation or empty>" }
//   node scripts/book-strings.mjs --set English-B1-types es   (a practice set)
import { readFileSync, existsSync } from 'fs';
import { loadBook, loadSet, explainVisit, dir, setDir } from './book-lib.mjs';
const argv = process.argv.slice(2);
const isSet = argv[0] === '--set';
const [id, lang] = isSet ? argv.slice(1) : argv;
const book = isSet ? await loadSet(id) : (await loadBook(id)).book;
const visit = await explainVisit();
const file = `${isSet ? setDir : dir}i18n/${id}.${lang}.json`;
const have = existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : {};
const out = {};
visit(book, (text) => { out[text] = have[text] || ''; });
console.log(JSON.stringify(out, null, 2));
