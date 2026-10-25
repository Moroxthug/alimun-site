// Loads a course book with its unit files from site/src/data/books (docs/BOOKS.md), for the scripts.
import { existsSync, readdirSync } from 'fs';
import { pathToFileURL, fileURLToPath } from 'url';
export const dir = fileURLToPath(new URL('../site/src/data/books/', import.meta.url));
const url = (p) => pathToFileURL(dir + p).href + '?t=' + Date.now();
export async function loadBook(id) {
  const { BOOK } = await import(url(`${id}.js`));
  const { assemble } = await import(url('explain.js'));
  const units = {};
  const ud = dir + 'units/' + id;
  if (existsSync(ud)) for (const f of readdirSync(ud).filter((f) => f.endsWith('.js'))) units[f.slice(0, -3)] = (await import(url(`units/${id}/${f}`))).UNIT;
  return { book: assemble(BOOK, units), raw: BOOK, units };
}
export async function explainVisit() { return (await import(url('explain.js'))).visit; }
// Practice sets (site/src/data/practice/<set>.js), for the scripts.
export const setDir = fileURLToPath(new URL('../site/src/data/practice/', import.meta.url));
export async function loadSet(id) {
  const { SET } = await import(pathToFileURL(setDir + `${id}.js`).href + '?t=' + Date.now());
  return SET;
}
export function setIds() { return readdirSync(setDir).filter((f) => /^[A-Z].*-.*\.js$/.test(f)).map((f) => f.slice(0, -3)); }
