// One mock test (/data/tests/<id>.json), as written in src/data/tests/<id>.js (docs/TESTS.md). Read by js/app/tests.js.
import { allTests } from '../../../data/tests/load.js';

export function getStaticPaths() {
  return allTests().map((T) => ({ params: { id: T.id } }));
}

export function GET({ params }) {
  const T = allTests().find((x) => x.id === params.id);
  return new Response(JSON.stringify(T), { headers: { 'Content-Type': 'application/json' } });
}
