// A library shelf as static JSON, one file per explanation language: /data/library/<shelf>.<lang>.json
// (lang = en es fr de pt zh ar it; Moroccan pages use fr). Loaded by the Library screen (js/app/library.js).
// Source: src/data/library/<shelf>.js and src/data/library/i18n/<shelf>.<lang>.json (docs/LIBRARY.md).
import { localize } from '../../../data/books/explain.js';
import { allShelves } from '../../../data/library/load.js';

const strings = import.meta.glob('../../../data/library/i18n/*.json', { eager: true });
const LANGS = ['en', 'es', 'fr', 'de', 'pt', 'zh', 'ar', 'it'];

export function getStaticPaths() {
  return allShelves().flatMap((s) => LANGS.map((lang) => ({ params: { shelf: `${s.id}.${lang}` } })));
}

export function GET({ params }) {
  const [id, lang] = params.shelf.split('.');
  const shelf = allShelves().find((s) => s.id === id);
  const file = Object.entries(strings).find(([p]) => p.endsWith(`/${id}.${lang}.json`));
  const out = localize(shelf, file ? file[1].default : null);
  out.explainLang = lang;
  return new Response(JSON.stringify(out), { headers: { 'Content-Type': 'application/json' } });
}
