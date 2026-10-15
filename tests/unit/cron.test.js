// Run with: node --no-experimental-require-module --test 'tests/unit/*.test.js'
// Vercel cron endpoints: fail closed without CRON_SECRET, record each run in cron_runs.
const test = require('node:test');
const assert = require('node:assert');
const path = require('path');

const runs = [];
const updates = [];
function query(table) {
  const st = { op: 'select' };
  const b = {
    select() { return b; }, eq() { return b; }, in() { return b; }, lt() { return b; }, gte() { return b; }, lte() { return b; },
    update(v) { st.op = 'update'; updates.push({ table, v }); return b; },
    insert(v) { if (table === 'cron_runs') runs.push(v); return Promise.resolve({ error: null }); },
    then(resolve) {
      if (table === 'sessions' && st.op === 'update') return resolve({ data: [{ id: 's1' }, { id: 's2' }], error: null });
      return resolve({ data: [], error: null });
    },
  };
  return b;
}
const fakeClient = { from: query, rpc: async () => ({ data: { expired_offers_removed: 1 }, error: null }) };
const sbPath = require.resolve('@supabase/supabase-js', { paths: [path.join(__dirname, '../../api')] });
require.cache[sbPath] = { id: sbPath, filename: sbPath, loaded: true, exports: { createClient: () => fakeClient } };
process.env.SUPABASE_URL = 'http://fake';
process.env.SUPABASE_SERVICE_ROLE_KEY = 'fake';
delete process.env.DAILY_API_KEY;

const rooms = require('../../api/cron-create-rooms.js');
const waitlist = require('../../api/waitlist/cron-expire-offers.js');

async function call(fn, auth) {
  const res = { code: 0, body: null, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; } };
  await fn({ method: 'GET', headers: auth ? { authorization: auth } : {} }, res);
  return res;
}

test('fail closed: no CRON_SECRET configured means every call is refused', async () => {
  delete process.env.CRON_SECRET;
  assert.strictEqual((await call(rooms, 'Bearer ')).code, 401);
  assert.strictEqual((await call(waitlist, 'Bearer undefined')).code, 401);
  assert.strictEqual(runs.length, 0);
});

test('wrong or missing secret is refused', async () => {
  process.env.CRON_SECRET = 's3cret';
  assert.strictEqual((await call(rooms)).code, 401);
  assert.strictEqual((await call(waitlist, 'Bearer nope')).code, 401);
  assert.strictEqual(runs.length, 0);
});

test('room cron completes past sessions and records the run', async () => {
  process.env.CRON_SECRET = 's3cret';
  const r = await call(rooms, 'Bearer s3cret');
  assert.strictEqual(r.code, 200);
  assert.strictEqual(r.body.completed, 2);
  assert.deepStrictEqual(updates.at(-1), { table: 'sessions', v: { status: 'completed' } });
  assert.strictEqual(runs.at(-1).job, 'vercel:cron-create-rooms');
  assert.strictEqual(runs.at(-1).result.completed, 2);
});

test('waitlist cron records its result', async () => {
  process.env.CRON_SECRET = 's3cret';
  const r = await call(waitlist, 'Bearer s3cret');
  assert.strictEqual(r.code, 200);
  assert.deepStrictEqual(runs.at(-1), { job: 'vercel:cron-expire-offers', ok: true, result: { expired_offers_removed: 1 } });
});
