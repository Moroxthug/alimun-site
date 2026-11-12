// Run with: node --no-experimental-require-module --test 'tests/unit/*.test.js'
// Rooms (api/_lib/rooms.js): the 10-day decision, the daily job from publishing to the start day, and seats.
const test = require('node:test');
const assert = require('node:assert');
const crypto = require('crypto');
const R = require('../../api/_lib/rooms.js');
const { fakeDb } = require('./_fake-db.js');

const uid = () => crypto.randomUUID();
const day = (n) => new Date(Date.now() + n * 86400000).toISOString().slice(0, 10);

test('10-day decision: full rooms open, small rooms merge where that makes one open, the rest are cancelled', () => {
  const room = (id, seats, extra) => Object.assign({ id, product_key: 'level_en', level: 'B1', starts_on: '2027-02-01', max_students: 12, min_learners: 8, seats }, extra || {});
  let p = R.planDecisions([room('a', 9), room('b', 3), room('c', 2)]);
  assert.deepStrictEqual(p.merges, [{ from: 'c', into: 'a', seats: 2 }]);
  assert.deepStrictEqual(p.open, ['a']);
  assert.deepStrictEqual(p.cancel, ['b'], 'a (now 11) has no room for b too');
  p = R.planDecisions([room('a', 5), room('b', 4)]);
  assert.deepStrictEqual(p.merges, [{ from: 'b', into: 'a', seats: 4 }]);
  assert.deepStrictEqual(p.open, ['a']);
  p = R.planDecisions([room('a', 3), room('b', 2)]);
  assert.deepStrictEqual(p.merges, []);
  assert.deepStrictEqual(p.cancel.sort(), ['a', 'b']);
  p = R.planDecisions([room('a', 5), room('b', 5, { level: 'B2' })]);
  assert.deepStrictEqual(p.merges, [], 'different levels never merge');
  p = R.planDecisions([room('a', 0)]);
  assert.deepStrictEqual(p.cancel, ['a']);
});

function world() {
  const T1 = uid(), T2 = uid();
  const tables = {
    cohorts: [], sessions: [], entitlements: [], enrollments: [], student_profiles: [], price_book: [],
  };
  const rpcs = {
    room_seats: (a) => ({ data: tables.entitlements.filter((e) => e.cohort_id === a.p_cohort && !e.session_id && ['pending_room', 'active', 'paused'].includes(e.status)).length, error: null }),
    session_seats: (a) => ({ data: tables.entitlements.filter((e) => e.session_id === a.p_session && e.status === 'active').length, error: null }),
    sync_access: () => ({ data: null, error: null }),
  };
  const told = [], charged = [];
  const stripe = {
    subscriptionSchedules: { create: async (p) => { charged.push(['schedule', p]); return { id: 'sub_sched_' + charged.length, subscription: null }; }, cancel: async () => ({}) },
    paymentIntents: { create: async (p) => { charged.push(['pi', p]); return { id: 'pi_' + charged.length, status: 'succeeded', amount: p.amount, amount_received: p.amount, metadata: p.metadata }; } },
  };
  const ctx = { sb: fakeDb(tables, rpcs), stripe, markerSecret: 's',
    notify: { paymentFailed: async (u) => told.push(['payfail', u]), owner: async () => {} },
    tell: { learner: async (u, k, r) => told.push(['learner', k, u, r.id]), teacher: async (t, k, r) => told.push(['teacher', k, t, r.id]), owner: async (lines) => told.push(['owner', lines]) } };
  return { tables, ctx, told, charged, T1, T2 };
}
function addRoom(w, extra) {
  const r = Object.assign({ id: uid(), product_key: 'level_en', language: 'English', level: 'B1', max_students: 12, min_learners: 8, room_state: 'draft', status: 'closed',
    teacher_id: w.T1, substitute_teacher_id: w.T2, starts_on: day(9), schedule_days: ['Monday', 'Tuesday', 'Thursday'], schedule_time: '19:00', timezone: 'Europe/Rome' }, extra || {});
  w.tables.cohorts.push(r);
  w.tables.sessions.push({ id: uid(), cohort_id: r.id, scheduled_at: new Date(Date.parse(r.starts_on) + 84 * 86400000).toISOString(), status: 'scheduled' });
  return r;
}
function reserve(w, room, n, cadence) {
  for (let i = 0; i < n; i++) {
    const user = uid();
    w.tables.student_profiles.push({ id: uid(), user_id: user, stripe_customer_id: 'cus_' + i, enrolled_cohort_id: null });
    w.tables.entitlements.push({ id: uid(), user_id: user, product_key: room.product_key, variant: 'list', band: 'B', currency: 'mad', cadence: cadence || 'upfront',
      status: 'pending_room', cohort_id: room.id, session_id: null, stripe_payment_method_id: 'pm_' + i });
  }
}

test('daily job: publish with a teacher and substitute only; open at 8, cancel below, merge where it helps', async () => {
  const w = world();
  w.tables.price_book.push({ product_key: 'level_en', band: 'B', variant: 'list', cadence: 'upfront', currency: 'mad', unit_amount: 211900, stripe_price_id: 'price_x', active: true });
  const noSub = addRoom(w, { substitute_teacher_id: null, starts_on: day(15) });
  const big = addRoom(w, { room_state: 'published' });
  const small = addRoom(w, { room_state: 'published', schedule_time: '09:00' });
  const lonely = addRoom(w, { room_state: 'published', level: 'C1' });
  reserve(w, big, 7); reserve(w, small, 2); reserve(w, lonely, 3);
  const out = await R.runRoomJob(w.ctx, new Date());
  assert.strictEqual(noSub.room_state, 'draft');
  assert.strictEqual(big.room_state, 'open');
  assert.ok(big.contract_offered_at);
  assert.strictEqual(small.room_state, 'cancelled');
  assert.strictEqual(small.merged_into, big.id);
  assert.strictEqual(lonely.room_state, 'cancelled');
  assert.strictEqual(w.tables.entitlements.filter((e) => e.cohort_id === big.id && e.status === 'pending_room').length, 9);
  assert.strictEqual(w.tables.entitlements.filter((e) => e.cohort_id === lonely.id && e.status === 'ended').length, 3, 'reservations end, nothing charged');
  assert.strictEqual(w.charged.length, 0);
  assert.ok(w.told.some((x) => x[0] === 'teacher' && x[1] === 'contract_offer' && x[3] === big.id));
  assert.strictEqual(w.told.filter((x) => x[1] === 'room_merged').length, 2);
  assert.strictEqual(w.told.filter((x) => x[1] === 'room_cancelled').length, 3);
  assert.ok(w.told.some((x) => x[0] === 'owner' && /substitute/.test(x[1].join(' '))));
  assert.deepStrictEqual([out.opened, out.merged, out.cancelled], [1, 1, 1]);
});

test('start day: nothing is charged before the teacher accepts; then packs are charged and learners enrolled', async () => {
  const w = world();
  w.tables.price_book.push({ product_key: 'level_en', band: 'B', variant: 'list', cadence: 'upfront', currency: 'mad', unit_amount: 211900, stripe_price_id: 'price_up', active: true },
    { product_key: 'level_en', band: 'B', variant: 'list', cadence: 'month', currency: 'mad', unit_amount: 76900, stripe_price_id: 'price_mo', active: true });
  const room = addRoom(w, { room_state: 'open', starts_on: day(0), contract_offered_at: new Date().toISOString() });
  reserve(w, room, 5, 'upfront'); reserve(w, room, 3, 'month');
  await R.runRoomJob(w.ctx, new Date());
  assert.strictEqual(w.charged.length, 0);
  assert.strictEqual(room.room_state, 'open');
  assert.ok(w.told.some((x) => x[0] === 'owner' && /not accepted/.test(x[1].join(' '))));
  room.contract_accepted_at = new Date().toISOString();
  const out = await R.runRoomJob(w.ctx, new Date());
  assert.strictEqual(room.room_state, 'running');
  assert.strictEqual(w.charged.filter((c) => c[0] === 'pi').length, 5);
  assert.strictEqual(w.charged.filter((c) => c[0] === 'schedule').length, 3);
  assert.strictEqual(out.charged, 8);
  assert.strictEqual(w.tables.enrollments.filter((e) => e.cohort_id === room.id && e.status === 'active').length, 8);
  assert.ok(w.tables.student_profiles.every((s) => s.enrolled_cohort_id === room.id));
});

test('open and help classes open at publication; a finished room is closed', async () => {
  const w = world();
  const open = addRoom(w, { product_key: 'open_en', starts_on: day(5), max_students: 20, min_learners: 12 });
  const done = addRoom(w, { room_state: 'running', starts_on: day(-90) });
  w.tables.sessions.filter((s) => s.cohort_id === done.id).forEach((s) => { s.scheduled_at = new Date(Date.now() - 3 * 86400000).toISOString(); });
  await R.runRoomJob(w.ctx, new Date());
  assert.strictEqual(open.room_state, 'open');
  assert.ok(open.contract_offered_at);
  assert.strictEqual(done.room_state, 'finished');
  assert.strictEqual(done.status, 'completed');
});

test('seats: packs reserve in published rooms, open classes need a room, trials need a date in a running room', async () => {
  const w = world();
  const pack = addRoom(w, { room_state: 'published', max_students: 2 });
  const running = addRoom(w, { room_state: 'running' });
  const s = { id: uid(), cohort_id: running.id, scheduled_at: new Date(Date.now() + 2 * 86400000).toISOString(), status: 'scheduled' };
  w.tables.sessions.push(s);
  assert.strictEqual(await R.seatProblem(w.ctx.sb, 'level_en', null, null), null, 'a pack can be reserved for the next start');
  assert.strictEqual(await R.seatProblem(w.ctx.sb, 'level_en', pack.id, null), null);
  reserve(w, pack, 2);
  assert.strictEqual(await R.seatProblem(w.ctx.sb, 'level_en', pack.id, null), 'room_full');
  assert.strictEqual(await R.seatProblem(w.ctx.sb, 'level_de', pack.id, null), 'room_unavailable');
  assert.strictEqual(await R.seatProblem(w.ctx.sb, 'open_en', null, null), 'room_required');
  assert.strictEqual(await R.seatProblem(w.ctx.sb, 'trial', null, s.id), null);
  assert.strictEqual(await R.seatProblem(w.ctx.sb, 'trial', null, null), 'session_required');
  assert.strictEqual(await R.seatProblem(w.ctx.sb, 'help_class', null, s.id), 'session_unavailable', 'help passes are for help-class rooms');
});
