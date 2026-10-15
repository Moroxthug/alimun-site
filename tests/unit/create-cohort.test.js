// Run with: node --no-experimental-require-module --test 'tests/unit/*.test.js'
// /api/create-cohort against a fake Supabase client: the availability check
// must read each slot in its own timezone.
const test = require('node:test');
const assert = require('node:assert');
const path = require('path');

let SLOTS = [];
let ROLE = 'teacher';
const inserted = [];

// Minimal chainable stand-in for the supabase-js query builder.
function query(table) {
  const q = {
    _table: table, _head: false,
    select(_c, opts) { if (opts && opts.head) q._head = true; return q; },
    eq() { return q; }, in() { return q; }, delete() { return q; },
    insert(row) { inserted.push(row); q._row = { id: 'cohort-1', ...row }; return q; },
    maybeSingle() { return Promise.resolve({ data: { id: 'teacher-1', status: 'approved', languages: ['English'] }, error: null }); },
    single() { return Promise.resolve({ data: q._row, error: null }); },
    then(resolve) {
      if (table === 'teacher_availability') return resolve({ data: SLOTS, error: null });
      if (table === 'cohorts' && q._head) return resolve({ count: 0, error: null });
      return resolve({ data: [], error: null });
    },
  };
  return q;
}
const fakeClient = {
  auth: { getUser: async () => ({ data: { user: { id: 'user-1', app_metadata: { role: ROLE } } }, error: null }) },
  from: query,
  rpc: async () => ({ data: 12, error: null }),
};
const sbPath = require.resolve('@supabase/supabase-js', { paths: [path.join(__dirname, '../../api')] });
require.cache[sbPath] = { id: sbPath, filename: sbPath, loaded: true, exports: { createClient: () => fakeClient } };
process.env.SUPABASE_URL = 'http://fake';
process.env.SUPABASE_SERVICE_ROLE_KEY = 'fake';
delete process.env.DAILY_API_KEY;
const handler = require('../../api/create-cohort.js');

async function call(body) {
  const res = { code: 0, body: null, setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() { return this; } };
  await handler({ method: 'POST', headers: { authorization: 'Bearer t' }, body }, res);
  return res;
}
const base = { language: 'English', level: 'B1', goal_track: 'foundations', tier: 'focused', schedule_days: ['Monday'] };

test('accepts a class inside a slot in the same zone', async () => {
  SLOTS = [{ day_of_week: 1, start_time: '17:00:00', end_time: '20:00:00', timezone: 'Europe/Madrid' }];
  const r = await call({ ...base, schedule_time: '18:00', timezone: 'Europe/Madrid' });
  assert.strictEqual(r.code, 201, JSON.stringify(r.body));
  assert.strictEqual(inserted.at(-1).timezone, 'Europe/Madrid');
});

test('rejects a class whose zone puts it outside the slot (was accepted before)', async () => {
  // Slot is 17:00-20:00 Madrid; 18:00 in Toronto is 23:00/00:00 Madrid.
  SLOTS = [{ day_of_week: 1, start_time: '17:00:00', end_time: '20:00:00', timezone: 'Europe/Madrid' }];
  const r = await call({ ...base, schedule_time: '18:00', timezone: 'America/Toronto' });
  assert.strictEqual(r.code, 400);
  assert.match(r.body.error, /Schedule conflicts with your availability/);
});

test('accepts a class in another zone when it converts into the slot', async () => {
  // 12:00-14:00 Toronto slot; 18:00 Madrid is 12:00 Toronto, or 13:00 in the week the clocks differ.
  SLOTS = [{ day_of_week: 1, start_time: '12:00:00', end_time: '14:00:00', timezone: 'America/Toronto' }];
  const r = await call({ ...base, schedule_time: '18:00', timezone: 'Europe/Madrid' });
  assert.strictEqual(r.code, 201, JSON.stringify(r.body));
});

test('slots without a zone (pre-migration rows) are read as UTC', async () => {
  SLOTS = [{ day_of_week: 1, start_time: '09:00:00', end_time: '11:00:00' }];
  assert.strictEqual((await call({ ...base, schedule_time: '09:00', timezone: 'UTC' })).code, 201);
  assert.strictEqual((await call({ ...base, schedule_time: '09:00', timezone: 'Asia/Tokyo' })).code, 400);
});

const TEACHER = '11111111-2222-3333-4444-555555555555';

test('a non-admin cannot create a class for another teacher', async () => {
  ROLE = 'teacher';
  const r = await call({ ...base, schedule_time: '09:00', timezone: 'UTC', teacher_id: TEACHER });
  assert.strictEqual(r.code, 403);
});

test('admin: availability still applies unless explicitly overridden', async () => {
  ROLE = 'admin';
  SLOTS = [{ day_of_week: 1, start_time: '09:00:00', end_time: '11:00:00', timezone: 'UTC' }];
  const blocked = await call({ ...base, schedule_time: '15:00', timezone: 'UTC', teacher_id: TEACHER });
  assert.strictEqual(blocked.code, 400);

  const forced = await call({ ...base, schedule_time: '15:00', timezone: 'UTC', teacher_id: TEACHER, skip_availability: true, max_students: 8 });
  assert.strictEqual(forced.code, 201, JSON.stringify(forced.body));
  assert.strictEqual(forced.body.availabilityOverridden, 12);
  assert.match(forced.body.warning, /admin override/);
  assert.strictEqual(inserted.at(-1).max_students, 8);
  ROLE = 'teacher';
});

test('admin: bad max_students and bad teacher_id are rejected', async () => {
  ROLE = 'admin';
  assert.strictEqual((await call({ ...base, schedule_time: '09:00', timezone: 'UTC', teacher_id: TEACHER, max_students: 99 })).code, 400);
  assert.strictEqual((await call({ ...base, schedule_time: '09:00', timezone: 'UTC', teacher_id: 'nope' })).code, 400);
  ROLE = 'teacher';
});
