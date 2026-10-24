// Level test question banks as static JSON (/data/level-test/<Language>.json), loaded by the test page
// only for the language the visitor picks. Source: src/data/level-test/<Language>.js (docs/LEVEL_TEST.md).
const banks = import.meta.glob('../../../data/level-test/*.js', { eager: true });

export function getStaticPaths() {
  return Object.keys(banks).map((p) => ({ params: { lang: p.split('/').pop().replace(/\.js$/, '') } }));
}

export function GET({ params }) {
  const bank = Object.entries(banks).find(([p]) => p.endsWith(`/${params.lang}.js`))[1];
  return new Response(JSON.stringify({ topics: bank.TOPICS, items: bank.ITEMS }), { headers: { 'Content-Type': 'application/json' } });
}
