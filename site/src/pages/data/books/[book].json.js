// Course books as static JSON, one file per book and explanation language: /data/books/<book>.<lang>.json
// (lang = en es fr de pt zh ar it; Moroccan pages use fr). Loaded by the dashboard reader (js/app/reader.js).
// Source: src/data/books/<book>.js, src/data/books/units/<book>/<unit>.js and src/data/books/i18n/<book>.<lang>.json (docs/BOOKS.md).
import { localize } from '../../../data/books/explain.js';
import { allBooks } from '../../../data/books/load.js';

const strings = import.meta.glob('../../../data/books/i18n/*.json', { eager: true });
const LANGS = ['en', 'es', 'fr', 'de', 'pt', 'zh', 'ar', 'it'];

export function getStaticPaths() {
  return allBooks().flatMap((b) => LANGS.map((lang) => ({ params: { book: `${b.id}.${lang}` } })));
}

export function GET({ params }) {
  const [id, lang] = params.book.split('.');
  const book = allBooks().find((b) => b.id === id);
  const file = Object.entries(strings).find(([p]) => p.endsWith(`/${id}.${lang}.json`));
  const out = localize(book, file ? file[1].default : null);
  out.explainLang = lang;
  return new Response(JSON.stringify(out), { headers: { 'Content-Type': 'application/json' } });
}
