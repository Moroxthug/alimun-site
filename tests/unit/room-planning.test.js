// Run with: node --no-experimental-require-module --test 'tests/unit/*.test.js'
// Room planning (api/_lib/rooms.js planProposals, suggestRooms, announceRoom; api/pricing.js availability, room-me,
// interest, assign, admin-proposal): teachers' availability and learners' demand become suggested rooms the owner
// approves; learners who asked, and room-less pack reservations, are told when a room at their level is published.
const test = require('node:test');
const assert = require('node:assert');
const path = require('path');
const R = require('../../api/_lib/rooms.js');
const { fakeDb } = require('./_fake-db.js');

const TODAY = '2026-11-12';
const avail = (teacher, extra) => Object.assign({ teacher_id: teacher, starts_on: TODAY, kinds: ['level_pack', 'open_class'], language: 'English',
  levels: ['A1', 'A2'], days: ['Monday', 'Tuesday', 'Thursday'], schedule_time: '19:00', timezone: 'Europe/Rome', substitute: true }, extra || {});

test('pack start dates: the first Monday of each month that leaves 14 days to fill the room', () => {
  assert.deepStrictEqual(R.packStarts(TODAY, 3), ['2026-12-07', '2027-01-04', '2027-02-01']);
  assert.deepStrictEqual(R.packStarts('2026-11-24', 1), ['2027-01-04'], '7 December is only 13 days away');
  assert.deepStrictEqual(R.packStarts('2026-11-23', 1), ['2026-12-07']);
});

test('suggestions: the earliest start a teacher can take, with another teacher as substitute', () => {
  const p = R.planProposals({ today: TODAY, minDemand: 5, taken: [],
    availability: [avail('t1'), avail('t2', { schedule_time: '09:00' })], demand: { 'level_en|A1': 6, 'level_en|B2': 9, 'level_de|A1': 7 } });
  assert.strictEqual(p.length, 1, 'B2 has no teacher, German has none at all');
  assert.deepStrictEqual(p[0], { product_key: 'level_en', level: 'A1', starts_on: '2026-12-07', schedule_days: ['Monday', 'Tuesday', 'Thursday'],
    schedule_time: '09:00', timezone: 'Europe/Rome', teacher_id: 't2', substitute_teacher_id: 't1', demand: 6 });
});

test('suggestions: below the minimum, already planned, dismissed dates and one teacher alone', () => {
  const base = { today: TODAY, minDemand: 5, availability: [avail('t1')], demand: { 'level_en|A1': 6 } };
  assert.strictEqual(R.planProposals(Object.assign({}, base, { demand: { 'level_en|A1': 4 }, taken: [] })).length, 0, 'below the minimum');
  assert.strictEqual(R.planProposals(Object.assign({}, base, { taken: ['level_en|A1'] })).length, 0, 'a room or a pending suggestion exists');
  const later = R.planProposals(Object.assign({}, base, { taken: ['level_en|A1|2026-12-07'] }));
  assert.strictEqual(later[0].starts_on, '2027-01-04', 'the owner dismissed 7 December: the next start is suggested');
  const alone = R.planProposals(Object.assign({}, base, { taken: [] }));
  assert.strictEqual(alone[0].substitute_teacher_id, null, 'no other teacher: suggested without a substitute, the owner adds one');
  const from = R.planProposals(Object.assign({}, base, { taken: [], availability: [avail('t1', { starts_on: '2026-12-20' })] }));
  assert.strictEqual(from[0].starts_on, '2027-01-04', 'a teacher free from 20 December takes the January start');
});

test('suggestions: open classes start on the teacher\'s first day a week ahead; big demand gets a second room', () => {
  const p = R.planProposals({ today: TODAY, minDemand: 5, taken: [], availability: [avail('t1', { days: ['Wednesday'] })], demand: { 'open_en|A2': 5 } });
  assert.deepStrictEqual([p[0].starts_on, p[0].schedule_days], ['2026-11-25', ['Wednesday']], '19 November is under 7 days away');
  const two = R.planProposals({ today: TODAY, minDemand: 5, taken: [], availability: [avail('t1'), avail('t2', { schedule_time: '09:00' })], demand: { 'level_en|A1': 15 } });
  assert.deepStrictEqual(two.map((x) => x.teacher_id).sort(), ['t1', 't2'], '15 learners: two rooms of up to 12');
});

function jobWorld() {
  const tables = {
    room_availability: [avail('t1'), avail('t2', { schedule_time: '09:00', substitute: false })],
    teacher_profiles: [{ id: 't1', full_name: 'Ana', status: 'approved' }, { id: 't2', full_name: 'Ben', status: 'approved' }],
    app_settings: [{ key: 'room_suggest_min', value: '3' }],
    room_interest: [], room_proposals: [], cohorts: [], entitlements: [], student_profiles: [],
  };
  for (let i = 0; i < 2; i++) { tables.room_interest.push({ user_id: 'i' + i, product_key: 'level_en', level: 'A1', notified_at: null }); }
  tables.room_interest.push({ user_id: 'b2', product_key: 'level_en', level: 'B2', notified_at: null });
  tables.entitlements.push({ id: 'e1', user_id: 'r1', product_key: 'level_en', status: 'pending_room', cohort_id: null, session_id: null });
  tables.entitlements.push({ id: 'e2', user_id: 'i0', product_key: 'level_en', status: 'pending_room', cohort_id: null, session_id: null });
  tables.student_profiles.push({ user_id: 'r1', level: 'A1' }, { user_id: 'i0', level: 'A1' });
  const told = [];
  const ctx = { sb: fakeDb(tables, {}), tell: { learner: async (u, k, r) => told.push([u, k, r.id]) } };
  return { tables, ctx, told };
}

test('daily job part: demand counts each learner once; a suggestion is stored and the owner told', async () => {
  const w = jobWorld();
  assert.deepStrictEqual(await R.demandOf(w.ctx.sb), { 'level_en|A1': 3, 'level_en|B2': 1 }, 'i0 asked and reserved: counted once');
  const s = await R.suggestRooms(w.ctx, new Date(TODAY + 'T05:00:00Z'));
  assert.strictEqual(s.made.length, 1);
  assert.strictEqual(w.tables.room_proposals.length, 1);
  assert.match(s.lines[0], /level_en A1 from 2026-12-07 .*3 learners asking, teacher Ben, substitute Ana/);
  w.tables.room_proposals[0].status = 'pending';
  const again = await R.suggestRooms(w.ctx, new Date(TODAY + 'T05:00:00Z'));
  assert.strictEqual(again.made.length, 0, 'a pending suggestion is not repeated');
  w.tables.teacher_profiles[1].status = 'suspended';
  w.tables.room_proposals.length = 0;
  const only = await R.suggestRooms(w.ctx, new Date(TODAY + 'T05:00:00Z'));
  assert.strictEqual(only.made[0].teacher_id, 't1', 'a teacher who is no longer approved is never suggested');
});

test('published room: learners who asked at that level and room-less reservations are told once', async () => {
  const w = jobWorld();
  const room = { id: 'c1', product_key: 'level_en', level: 'A1' };
  assert.strictEqual(await R.announceRoom(w.ctx, room), 3);
  assert.deepStrictEqual(w.told.map((x) => x[0]).sort(), ['i0', 'i1', 'r1']);
  assert.ok(w.tables.room_interest.filter((r) => r.level === 'A1').every((r) => r.notified_at), 'asked once, told once');
  assert.strictEqual(w.tables.room_interest.find((r) => r.level === 'B2').notified_at, null, 'other levels wait');
  w.told.length = 0;
  assert.strictEqual(await R.announceRoom(w.ctx, room), 2, 'the reservations are reminded by the next room; askers are not');
});

test('the daily job publishes a room and tells the learners waiting for it', async () => {
  const w = jobWorld();
  w.tables.room_availability.length = 0;
  w.tables.sessions = [];
  w.tables.cohorts.push({ id: 'c9', product_key: 'level_en', language: 'English', level: 'A1', room_state: 'draft', teacher_id: 't1', substitute_teacher_id: 't2',
    starts_on: R.addDays(R.ymd(new Date()), 20), schedule_days: ['Monday'], schedule_time: '19:00', timezone: 'Europe/Rome', max_students: 12, min_learners: 8 });
  const ctx = Object.assign({}, w.ctx, { tell: Object.assign({}, w.ctx.tell, { teacher: async () => {}, owner: async () => {} }) });
  const out = await R.runRoomJob(ctx, new Date());
  assert.strictEqual(out.published, 1);
  assert.strictEqual(out.announced, 3);
});

// ── the API actions ──
function load(tables) {
  const sbPath = require.resolve('@supabase/supabase-js', { paths: [path.join(__dirname, '../../api')] });
  const stPath = require.resolve('stripe', { paths: [path.join(__dirname, '../../api')] });
  const handlerPath = require.resolve('../../api/pricing.js');
  delete require.cache[handlerPath];
  const db = fakeDb(tables, {
    generate_room_sessions: () => ({ data: 36, error: null }),
    room_seats: (a) => ({ data: tables.entitlements.filter((e) => e.cohort_id === a.p_cohort && !e.session_id && ['pending_room', 'active', 'paused'].includes(e.status)).length, error: null }),
  });
  require.cache[sbPath] = { id: sbPath, filename: sbPath, loaded: true, exports: { createClient: () => db } };
  require.cache[stPath] = { id: stPath, filename: stPath, loaded: true, exports: () => ({}) };
  process.env.STRIPE_SECRET_KEY = 'sk_test_x';
  process.env.SUPABASE_URL = 'https://x.supabase.co';
  process.env.SUPABASE_SERVICE_ROLE_KEY = 'service';
  return require(handlerPath);
}
function call(handler, action, body, opts) {
  const o = opts || {};
  return new Promise((resolve) => {
    const res = { code: 200, headers: {}, setHeader(k, v) { this.headers[k] = v; }, status(c) { this.code = c; return this; },
      json(j) { resolve({ code: this.code, body: j }); return this; }, end() { resolve({ code: this.code }); return this; } };
    handler({ method: o.method || 'POST', query: Object.assign({ action }, o.query || {}), headers: { authorization: o.auth === false ? '' : 'Bearer good' }, body }, res);
  });
}

test('teacher availability: approved teachers add and remove their own, checked field by field', async () => {
  const tables = { teacher_profiles: [{ id: 't1', user_id: 'u1', languages: ['English', 'Spanish'], status: 'approved' }], room_availability: [] };
  const h = load(tables);
  const good = { starts_on: R.addDays(R.ymd(new Date()), 3), kinds: ['level_pack'], language: 'English', levels: ['A1', 'A2'], days: ['Monday', 'Thursday'],
    schedule_time: '19:00', timezone: 'Europe/Rome', substitute: true };
  const ok = await call(h, 'availability', good);
  assert.strictEqual(ok.code, 200);
  assert.strictEqual(tables.room_availability[0].teacher_id, 't1');
  for (const [bad, code] of [[{ language: 'Spanish' }, 'bad_language'], [{ kinds: ['yoga'] }, 'bad_kinds'], [{ levels: [] }, 'bad_levels'],
    [{ schedule_time: '7pm' }, 'bad_time'], [{ timezone: 'Mars/Base' }, 'bad_timezone'], [{ starts_on: '2020-01-01' }, 'bad_start'], [{ days: ['Monday', 'Monday'] }, 'bad_days']]) {
    const r = await call(h, 'availability', Object.assign({}, good, bad));
    assert.deepStrictEqual([r.code, r.body.error], [400, code]);
  }
  const list = await call(h, 'availability', null, { method: 'GET' });
  assert.deepStrictEqual([list.body.languages, list.body.items.length, list.body.starts.length], [['English'], 1, 4]);
  await call(h, 'availability', { id: tables.room_availability[0].id, remove: true });
  assert.strictEqual(tables.room_availability.length, 0);
  tables.teacher_profiles[0].status = 'pending';
  assert.strictEqual((await call(h, 'availability', good)).body.error, 'not_approved');
  tables.teacher_profiles.length = 0;
  assert.strictEqual((await call(h, 'availability', good)).code, 403, 'learners are not teachers');
  assert.strictEqual((await call(h, 'availability', good, { auth: false })).code, 401);
});

test('learners: ask to be told, then move a room-less reservation into a published room', async () => {
  const tables = { student_profiles: [{ id: 'sp1', user_id: 'u1', level: 'A1' }], room_interest: [],
    entitlements: [{ id: 'e1', user_id: 'u1', product_key: 'level_en', status: 'pending_room', cohort_id: null, session_id: null }],
    cohorts: [{ id: '11111111-1111-4111-8111-111111111111', product_key: 'level_en', room_state: 'published', max_students: 12 },
      { id: '22222222-2222-4222-8222-222222222222', product_key: 'level_en', room_state: 'draft', max_students: 12 }] };
  const h = load(tables);
  assert.strictEqual((await call(h, 'interest', { product: 'level_en', on: true })).body.interested, true);
  assert.deepStrictEqual(tables.room_interest.map((r) => [r.user_id, r.product_key, r.level]), [['u1', 'level_en', 'A1']]);
  assert.strictEqual((await call(h, 'interest', { product: 'help_class', on: true })).code, 400, 'help classes are dates, not rooms');
  const me = await call(h, 'room-me', null, { method: 'GET', query: { product: 'level_en' } });
  assert.deepStrictEqual([me.body.interested, me.body.reserved], [true, true]);
  assert.strictEqual((await call(h, 'assign', { product: 'level_en', cohortId: '22222222-2222-4222-8222-222222222222' })).body.error, 'room_unavailable', 'a draft is not on offer');
  const ok = await call(h, 'assign', { product: 'level_en', cohortId: '11111111-1111-4111-8111-111111111111' });
  assert.strictEqual(ok.code, 200);
  assert.strictEqual(tables.entitlements[0].cohort_id, '11111111-1111-4111-8111-111111111111');
  assert.strictEqual(tables.room_interest.length, 0, 'no longer waiting');
  assert.strictEqual((await call(h, 'assign', { product: 'level_en', cohortId: '11111111-1111-4111-8111-111111111111' })).body.error, 'no_reservation');
  await call(h, 'interest', { product: 'level_en', on: true });
  await call(h, 'interest', { product: 'level_en', on: false });
  assert.strictEqual(tables.room_interest.length, 0);
});

test('owner: approving a suggestion creates the draft room with the same checks; dismissing keeps it from coming back', async () => {
  const T1 = '33333333-3333-4333-8333-333333333333', T2 = '44444444-4444-4444-8444-444444444444';
  const start = R.packStarts(R.ymd(new Date()), 1)[0];
  const tables = { teacher_profiles: [{ id: T1, status: 'approved' }, { id: T2, status: 'approved' }], cohorts: [], entitlements: [],
    room_proposals: [
      { id: '55555555-5555-4555-8555-555555555555', product_key: 'level_en', level: 'A1', starts_on: start, schedule_days: ['Monday', 'Tuesday', 'Thursday'], schedule_time: '19:00', timezone: 'Europe/Rome', teacher_id: T1, substitute_teacher_id: null, status: 'pending' },
      { id: '66666666-6666-4666-8666-666666666666', product_key: 'open_en', level: 'A2', starts_on: start, schedule_days: ['Wednesday'], schedule_time: '19:00', timezone: 'Europe/Rome', teacher_id: T1, substitute_teacher_id: null, status: 'pending' }] };
  const h = load(tables);
  const admin = (body) => new Promise((resolve) => {
    const res = { code: 200, setHeader() {}, status(c) { this.code = c; return this; }, json(j) { resolve({ code: this.code, body: j }); return this; } };
    h({ method: 'POST', query: { action: 'admin-proposal' }, headers: { authorization: 'Bearer good' }, body }, res);
  });
  assert.strictEqual((await admin({ id: '55555555-5555-4555-8555-555555555555', approve: true })).code, 403, 'admins only');
  const sbPath = require.resolve('@supabase/supabase-js', { paths: [path.join(__dirname, '../../api')] });
  const db = require.cache[sbPath].exports.createClient();
  db.auth.getUser = () => Promise.resolve({ data: { user: { id: 'a1', app_metadata: { role: 'admin' } } }, error: null });
  const ok = await admin({ id: '55555555-5555-4555-8555-555555555555', approve: true, substitute_teacher_id: T2 });
  assert.strictEqual(ok.code, 200);
  assert.deepStrictEqual([tables.cohorts.length, tables.cohorts[0].room_state, tables.cohorts[0].substitute_teacher_id, tables.cohorts[0].starts_on], [1, 'draft', T2, start]);
  assert.deepStrictEqual([tables.room_proposals[0].status, tables.room_proposals[0].cohort_id], ['approved', ok.body.id]);
  assert.strictEqual((await admin({ id: '55555555-5555-4555-8555-555555555555', approve: true })).body.error, 'already_answered');
  assert.strictEqual((await admin({ id: '66666666-6666-4666-8666-666666666666', approve: false })).code, 200);
  assert.strictEqual(tables.room_proposals[1].status, 'dismissed');
  assert.strictEqual(tables.cohorts.length, 1);
});
