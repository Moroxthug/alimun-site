// Practice sets as static JSON, one file per set and explanation language: /data/practice/<set>.<lang>.json
// (lang = en es fr de pt zh ar it; Moroccan pages use fr). Loaded by the Practice screen (js/app/practice.js).
// Source: src/data/practice/<set>.js and src/data/practice/i18n/<set>.<lang>.json (docs/BOOKS.md).
import { localize } from '../../../data/books/explain.js';
import { allSets } from '../../../data/practice/load.js';

const strings = import.meta.glob('../../../data/practice/i18n/*.json', { eager: true });
const LANGS = ['en', 'es', 'fr', 'de', 'pt', 'zh', 'ar', 'it'];

export function getStaticPaths() {
  return allSets().flatMap((s) => LANGS.map((lang) => ({ params: { set: `${s.id}.${lang}` } })));
}

export function GET({ params }) {
  const [id, lang] = params.set.split('.');
  const set = allSets().find((s) => s.id === id);
  const file = Object.entries(strings).find(([p]) => p.endsWith(`/${id}.${lang}.json`));
  const out = localize(set, file ? file[1].default : null);
  out.explainLang = lang;
  return new Response(JSON.stringify(out), { headers: { 'Content-Type': 'application/json' } });
}
