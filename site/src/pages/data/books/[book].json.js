// Course books as static JSON, one file per book and explanation language: /data/books/<Language>-<Level>.<lang>.json
// (lang = en es fr de pt zh ar it; Moroccan pages use fr). Loaded by the dashboard reader (js/app/reader.js).
// Source: src/data/books/<Language>-<Level>.js and src/data/books/i18n/<book>.<lang>.json (docs/BOOKS.md).
import { localize } from '../../../data/books/explain.js';

const books = import.meta.glob('../../../data/books/*-*.js', { eager: true });
const strings = import.meta.glob('../../../data/books/i18n/*.json', { eager: true });
const LANGS = ['en', 'es', 'fr', 'de', 'pt', 'zh', 'ar', 'it'];

export function getStaticPaths() {
  return Object.values(books).flatMap((m) => LANGS.map((lang) => ({ params: { book: `${m.BOOK.id}.${lang}` } })));
}

export function GET({ params }) {
  const [id, lang] = params.book.split('.');
  const book = Object.values(books).find((m) => m.BOOK.id === id).BOOK;
  const file = Object.entries(strings).find(([p]) => p.endsWith(`/${id}.${lang}.json`));
  const out = localize(book, file ? file[1].default : null);
  out.explainLang = lang;
  return new Response(JSON.stringify(out), { headers: { 'Content-Type': 'application/json' } });
}
