// Run with: node --no-experimental-require-module --test 'tests/unit/*.test.js'
// Admin class operations (api/_lib/admin-ops.js) against a fake Supabase.
const test = require('node:test');
const assert = require('node:assert');
const path = require('path');

const S1 = '11111111-1111-1111-1111-111111111111';
const C1 = '22222222-2222-2222-2222-222222222222';
const C2 = '33333333-3333-3333-3333-333333333333';
const ST = '44444444-4444-4444-4444-444444444444';

let state;
function reset() {
  state = {
    role: 'admin',
    session: { id: S1, status: 'scheduled', scheduled_at: '2026-11-02T17:00:00Z', cohort_id: C1,
      cohorts: { id: C1, language: 'Spanish', level: 'B1', timezone: 'Europe/Madrid', teacher_profiles: { full_name: 'T', user_id: 'u-t' } } },
    enrolled: [{ student_profiles: { full_name: 'A', user_id: 'u-a', timezone: 'UTC' } }, { student_profiles: { full_name: 'B', user_id: 'u-b', timezone: 'America/Toronto' } }],
    student: { id: ST, user_id: 'u-s', full_name: 'S', language: 'Spanish', tier: 'focused', enrolled_cohort_id: C1 },
    cohort: { id: C2, language: 'Spanish', level: 'B2', tier: 'focused', status: 'open', max_students: 17, teacher_profiles: { full_name: 'T2' } },
    active: [{ id: 'e1', cohorts: { language: 'Spanish', level: 'B1' } }],
    updates: [], emails: [], rpcs: [],
  };
}

function query(table) {
  const st = { op: 'select', filters: {} };
  const b = {
    select() { return b; },
    update(v) { st.op = 'update'; st.values = v; return b; },
    insert(v) { st.op = 'insert'; st.values = v; return b; },
    delete() { st.op = 'delete'; return b; },
    eq(k, v) { st.filters[k] = v; return b; },
    in() { return b; },
    maybeSingle() { return b.then((r) => ({ data: Array.isArray(r.data) ? r.data[0] : r.data, error: null })); },
    single() { return b.maybeSingle(); },
    then(resolve) {
      if (st.op === 'update') state.updates.push({ table, values: st.values, filters: st.filters });
      const r = (data) => resolve({ data, error: null });
      if (table === 'sessions') return r(st.op === 'update' ? [{ id: S1 }] : state.session);
      if (table === 'student_profiles') return r(st.op === 'select' ? state.student : null);
      if (table === 'cohorts') return r(state.cohort);
      if (table === 'enrollments' && st.op === 'select') {
        if (st.filters.cohort_id) return r(state.enrolled);
        if ('student_id' in st.filters && st.filters.status === 'active') return r(state.active);
      }
      if (table === 'enrollments' && st.op === 'insert') return r({ id: 'new' });
      return r(null);
    },
  };
  return b;
}
const fakeClient = {
  auth: {
    getUser: async () => ({ data: { user: { id: 'admin', app_metadata: { role: state.role } } }, error: null }),
    admin: { getUserById: async (id) => ({ data: { user: { email: `${id}@example.com` } } }) },
  },
  from: query,
  rpc: async (name) => { state.rpcs.push(name); return { data: name === 'increment_enrollment' ? 3 : null, error: null }; },
};
const sbPath = require.resolve('@supabase/supabase-js', { paths: [path.join(__dirname, '../../api')] });
require.cache[sbPath] = { id: sbPath, filename: sbPath, loaded: true, exports: { createClient: () => fakeClient } };
process.env.SUPABASE_URL = 'http://fake';
process.env.SUPABASE_SERVICE_ROLE_KEY = 'fake';
process.env.RESEND_API_KEY = 'test';
global.fetch = async (url, opts) => { state.emails.push(JSON.parse(opts.body)); return { ok: true }; };
const ops = require('../../api/_lib/admin-ops.js');

async function call(fn, body, method = 'POST') {
  const res = { code: 0, body: null, setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; } };
  await fn({ method, headers: { authorization: 'Bearer t' }, body }, res);
  return res;
}

test('non-admins and GET are refused', async () => {
  reset(); state.role = 'teacher';
  assert.strictEqual((await call(ops.sessionUpdate, { session_id: S1, op: 'cancel' })).code, 403);
  reset();
  assert.strictEqual((await call(ops.sessionUpdate, {}, 'GET')).code, 405);
});

test('cancel: conditional update and an email to each student and the teacher', async () => {
  reset();
  const r = await call(ops.sessionUpdate, { session_id: S1, op: 'cancel', reason: 'Teacher ill' });
  assert.strictEqual(r.code, 200, JSON.stringify(r.body));
  assert.deepStrictEqual(state.updates[0], { table: 'sessions', values: { status: 'cancelled' }, filters: { id: S1, status: 'scheduled' } });
  assert.deepStrictEqual([r.body.emailed, r.body.notEmailed], [3, 0]);
  const toB = state.emails.find((e) => e.to === 'u-b@example.com');
  assert.match(toB.html, /12:00 \(America\/Toronto\)/); // B sees their own zone
  const toA = state.emails.find((e) => e.to === 'u-a@example.com');
  assert.match(toA.html, /18:00 \(Europe\/Madrid\)/); // A is on the UTC default: class zone
  assert.match(toA.html, /Teacher ill/);
});

test('reschedule: wall-clock time in the class zone becomes the right UTC instant', async () => {
  reset();
  const r = await call(ops.sessionUpdate, { session_id: S1, op: 'reschedule', date: '2027-01-11', time: '19:30', notify: false });
  assert.strictEqual(r.code, 200, JSON.stringify(r.body));
  assert.strictEqual(state.updates[0].values.scheduled_at, '2027-01-11T18:30:00.000Z'); // CET = UTC+1
  assert.strictEqual(state.emails.length, 0);
});

test('reschedule: rejects a time that does not exist (DST gap), the past and bad input', async () => {
  reset();
  assert.match((await call(ops.sessionUpdate, { session_id: S1, op: 'reschedule', date: '2027-03-28', time: '02:30' })).body.error, /does not exist/);
  assert.strictEqual((await call(ops.sessionUpdate, { session_id: S1, op: 'reschedule', date: '2020-01-01', time: '10:00' })).code, 400);
  assert.strictEqual((await call(ops.sessionUpdate, { session_id: S1, op: 'reschedule', date: '2027-1-1', time: '10:00' })).code, 400);
  assert.strictEqual(state.updates.length, 0);
});

test('only scheduled sessions can be changed', async () => {
  reset(); state.session.status = 'completed';
  assert.strictEqual((await call(ops.sessionUpdate, { session_id: S1, op: 'cancel' })).code, 409);
});

test('move: claims the new seat, frees the old one, emails the student', async () => {
  reset();
  const r = await call(ops.enrollmentMove, { student_id: ST, cohort_id: C2 });
  assert.strictEqual(r.code, 200, JSON.stringify(r.body));
  assert.deepStrictEqual(r.body.seats, { enrolled: 3, max: 17 });
  assert.strictEqual(state.rpcs[0], 'increment_enrollment');
  assert.ok(state.updates.some((u) => u.table === 'enrollments' && u.values.status === 'cancelled'), 'old seat released');
  assert.strictEqual(state.emails[0].to, 'u-s@example.com');
});

test('move: refuses another language, a closed class and the same class; warns on a higher tier', async () => {
  reset(); state.cohort.language = 'French';
  assert.strictEqual((await call(ops.enrollmentMove, { student_id: ST, cohort_id: C2 })).code, 409);
  reset(); state.cohort.status = 'closed';
  assert.strictEqual((await call(ops.enrollmentMove, { student_id: ST, cohort_id: C2 })).code, 409);
  reset(); state.cohort.id = C1;
  assert.strictEqual((await call(ops.enrollmentMove, { student_id: ST, cohort_id: C1 })).code, 409);
  reset(); state.cohort.tier = 'intensive';
  const r = await call(ops.enrollmentMove, { student_id: ST, cohort_id: C2, notify: false });
  assert.strictEqual(r.code, 200);
  assert.match(r.body.warning, /does not normally include intensive/);
});

test('remove: cancels the active enrollment; refuses when not enrolled', async () => {
  reset();
  const r = await call(ops.enrollmentRemove, { student_id: ST });
  assert.strictEqual(r.code, 200, JSON.stringify(r.body));
  assert.ok(state.updates.some((u) => u.table === 'enrollments' && u.values.status === 'cancelled'));
  assert.ok(state.updates.some((u) => u.table === 'student_profiles' && u.values.enrolled_cohort_id === null));
  assert.match(state.emails[0].html, /no longer in the <strong>Spanish B1/);
  reset(); state.active = [];
  assert.strictEqual((await call(ops.enrollmentRemove, { student_id: ST })).code, 409);
});
