// Level test question banks as static JSON (/data/level-test/<Language>.json), loaded by the test page
// only for the language the visitor picks. Source: src/data/level-test/<Language>.js (docs/LEVEL_TEST.md).
const banks = import.meta.glob('../../../data/level-test/*.js', { eager: true });
// Topic names in each interface language (es, fr, de, pt, it, zh, ar), by test language.
import topicsI18n from '../../../data/level-test/topics-i18n.json';

export function getStaticPaths() {
  return Object.keys(banks).map((p) => ({ params: { lang: p.split('/').pop().replace(/\.js$/, '') } }));
}

export function GET({ params }) {
  const bank = Object.entries(banks).find(([p]) => p.endsWith(`/${params.lang}.js`))[1];
  return new Response(JSON.stringify({
    topics: bank.TOPICS,
    topicsI18n: Object.fromEntries(Object.entries(topicsI18n).map(([ui, byTest]) => [ui, byTest[params.lang] || {}])),
    items: bank.ITEMS,
  }), { headers: { 'Content-Type': 'application/json' } });
}
