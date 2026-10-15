// Run with: node --no-experimental-require-module --test 'tests/unit/*.test.js'
// Public email signup (api/_lib/subscribe.js via /api/send-admin-email?action=subscribe).
const test = require('node:test');
const assert = require('node:assert');
const path = require('path');

let state;
function reset() { state = { mine: 0, all: 0, insertError: null, inserted: [], updates: 0 }; }
function query(table) {
  const st = { op: 'select', head: false, filters: {} };
  const b = {
    select(_c, opts) { st.head = !!(opts && opts.head); return b; },
    insert(v) { state.inserted.push(v); return Promise.resolve({ error: state.insertError }); },
    update() { st.op = 'update'; return b; },
    eq(k, v) { st.filters[k] = v; return b; }, gte() { return b; }, lt() { return b; }, not() { return b; },
    then(resolve) {
      if (st.op === 'update') { state.updates++; return resolve({ error: null }); }
      return resolve({ count: st.filters.ip_hash ? state.mine : state.all, error: null });
    },
  };
  return b;
}
const sbPath = require.resolve('@supabase/supabase-js', { paths: [path.join(__dirname, '../../api')] });
require.cache[sbPath] = { id: sbPath, filename: sbPath, loaded: true, exports: { createClient: () => ({ from: query }) } };
process.env.SUPABASE_URL = 'http://fake';
process.env.SUPABASE_SERVICE_ROLE_KEY = 'fake';
const handler = require('../../api/send-admin-email.js');

async function call(body, { method = 'POST', ip = '203.0.113.7' } = {}) {
  const res = { code: 0, body: null, setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() { return this; } };
  await handler({ method, query: { action: 'subscribe' }, headers: { 'x-forwarded-for': `${ip}, 10.0.0.1` }, body }, res);
  return res;
}

test('stores a valid signup with source, locale and a hashed IP (never the IP itself)', async () => {
  reset();
  const r = await call({ email: ' learner@example.com ', source: 'footer', locale: 'fr', page: '/fr/' });
  assert.deepStrictEqual([r.code, r.body], [200, { ok: true }]);
  const row = state.inserted[0];
  assert.deepStrictEqual([row.email, row.source, row.locale, row.page], ['learner@example.com', 'footer', 'fr', '/fr/']);
  assert.match(row.ip_hash, /^[0-9a-f]{32}$/);
  assert.ok(!JSON.stringify(row).includes('203.0.113.7'));
  assert.strictEqual(state.updates, 1, 'old IP hashes are cleared');
});

test('unknown source and locale fall back safely', async () => {
  reset();
  await call({ email: 'a@b.co', source: 'evil', locale: '<script>' });
  assert.deepStrictEqual([state.inserted[0].source, state.inserted[0].locale], ['home', null]);
});

test('rejects invalid emails without touching the database', async () => {
  reset();
  for (const email of ['', 'no-at-sign', 'a@b', 'a b@c.de', 'x'.repeat(250) + '@e.co']) {
    assert.strictEqual((await call({ email })).code, 400, email);
  }
  assert.strictEqual(state.inserted.length, 0);
});

test('an address already on the list gets the same answer', async () => {
  reset(); state.insertError = { code: '23505', message: 'duplicate' };
  const r = await call({ email: 'dup@example.com' });
  assert.deepStrictEqual([r.code, r.body], [200, { ok: true }]);
});

test('rate limits per address and overall', async () => {
  reset(); state.mine = 5;
  assert.strictEqual((await call({ email: 'a@b.co' })).code, 429);
  reset(); state.all = 300;
  assert.strictEqual((await call({ email: 'a@b.co' })).code, 429);
  assert.strictEqual(state.inserted.length, 0);
});

test('database errors become a generic 500; GET is refused', async () => {
  reset(); state.insertError = { code: 'XX000', message: 'boom' };
  const r = await call({ email: 'a@b.co' });
  assert.strictEqual(r.code, 500);
  assert.ok(!JSON.stringify(r.body).includes('boom'));
  assert.strictEqual((await call({}, { method: 'GET' })).code, 405);
});
