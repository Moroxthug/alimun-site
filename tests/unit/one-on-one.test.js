// Run with: node --no-experimental-require-module --test 'tests/unit/*.test.js'
// 1:1 bookings (api/_lib/one-on-one.js): slot rules and the actions against a fake Supabase.
const test = require('node:test');
const assert = require('node:assert');
const oto = require('../../api/_lib/one-on-one.js');
const { weekOf, followupWindow, candidateSlots, overlaps } = oto._test;

const MIN = 60000;
// Teacher available Monday-Friday 09:00-13:00 Madrid time.
const AVAIL = [1, 2, 3, 4, 5].map((d) => ({ day_of_week: d, start_time: '09:00:00', end_time: '13:00:00', timezone: 'Europe/Madrid' }));

test('weekOf gives the Monday of the lesson week (UTC)', () => {
  assert.strictEqual(weekOf(new Date('2030-01-07T18:00:00Z')), '2030-01-07'); // Monday
  assert.strictEqual(weekOf(new Date('2030-01-10T18:00:00Z')), '2030-01-07'); // Thursday
  assert.strictEqual(weekOf(new Date('2030-01-13T23:00:00Z')), '2030-01-07'); // Sunday
});

test('the follow-up window runs from the end of the lesson to 3 days after it started', () => {
  const w = followupWindow('2030-01-07T18:00:00Z');
  assert.strictEqual(w.from.toISOString(), '2030-01-07T19:00:00.000Z');
  assert.strictEqual(w.to.toISOString(), '2030-01-10T18:00:00.000Z');
});

test('slots respect availability in the teacher time zone, the 20-minute grid and busy times', () => {
  const now = Date.parse('2030-01-07T19:00:00Z');
  const slots = candidateSlots({
    from: new Date('2030-01-07T19:00:00Z'), to: new Date('2030-01-08T23:00:00Z'), minutes: 20, step: 20,
    availability: AVAIL, busy: [{ start: Date.parse('2030-01-08T09:00:00Z'), minutes: 20 }], now,
  });
  // Tuesday 09:00-13:00 Madrid = 08:00-12:00 UTC in January -> 12 slots, minus the busy 09:00 one.
  assert.strictEqual(slots.length, 11);
  assert.strictEqual(slots[0], '2030-01-08T08:00:00.000Z');
  assert.ok(!slots.includes('2030-01-08T09:00:00.000Z'));
  assert.strictEqual(slots[slots.length - 1], '2030-01-08T11:40:00.000Z'); // last 20 min before 13:00
  assert.ok(slots.every((s) => new Date(s).getUTCMinutes() % 20 === 0));
});

test('no slot is offered less than 2 hours ahead', () => {
  const now = Date.parse('2030-01-08T08:30:00Z');
  const slots = candidateSlots({ from: new Date(now), to: new Date('2030-01-08T12:00:00Z'), minutes: 20, step: 20, availability: AVAIL, busy: [], now });
  assert.strictEqual(slots[0], '2030-01-08T10:40:00.000Z');
});

test('a 60-minute credit slot must fit entirely inside availability', () => {
  const now = Date.parse('2030-01-07T00:00:00Z');
  const slots = candidateSlots({ from: new Date('2030-01-08T00:00:00Z'), to: new Date('2030-01-08T23:59:00Z'), minutes: 60, step: 30, availability: AVAIL, busy: [], now });
  assert.deepStrictEqual(slots, ['2030-01-08T08:00:00.000Z', '2030-01-08T08:30:00.000Z', '2030-01-08T09:00:00.000Z',
    '2030-01-08T09:30:00.000Z', '2030-01-08T10:00:00.000Z', '2030-01-08T10:30:00.000Z', '2030-01-08T11:00:00.000Z']);
});

test('overlap check treats touching intervals as free', () => {
  const t = Date.parse('2030-01-08T10:00:00Z');
  assert.strictEqual(overlaps(t, 20, t + 20 * MIN, 20), false);
  assert.strictEqual(overlaps(t, 20, t + 10 * MIN, 20), true);
});

// ── Actions against a fake Supabase ──────────────────────────────
const IDS = { student: '00000000-0000-0000-0000-0000000000b1', teacher: '00000000-0000-0000-0000-0000000000a1',
  cohort: '00000000-0000-0000-0000-0000000000c1', lesson: '00000000-0000-0000-0000-0000000000d1', booking: '00000000-0000-0000-0000-0000000000e1' };

let st;
function reset(over = {}) {
  st = Object.assign({
    student: { id: IDS.student, user_id: 'u-s', full_name: 'S', tier: 'intensive', stripe_subscription_status: 'active', enrolled_cohort_id: IDS.cohort },
    cohort: { id: IDS.cohort, tier: 'intensive', teacher_id: IDS.teacher, teacher_profiles: { id: IDS.teacher, user_id: 'u-t', full_name: 'Teach', status: 'approved' } },
    lesson: { id: IDS.lesson, scheduled_at: '2030-01-07T18:00:00Z', status: 'completed' },
    existing: null, credits: [], bookings: [], booking: null, teacherRow: { id: IDS.teacher },
    rpc: [], updates: [], rpcError: null,
  }, over);
}
function from(table) {
  const q = { op: 'select', f: {} };
  const b = {
    select() { return b; }, update(v) { q.op = 'update'; q.v = v; return b; },
    eq(k, v) { q.f[k] = v; return b; }, neq() { return b; }, in() { return b; }, lte() { return b; }, gte() { return b; },
    order() { return b; }, limit() { return b; },
    maybeSingle() { return b.then((r) => ({ data: Array.isArray(r.data) ? r.data[0] || null : r.data, error: null })); },
    then(res) {
      const r = (data) => res({ data, error: null });
      if (q.op === 'update') { st.updates.push({ table, v: q.v }); return r(null); }
      if (table === 'student_profiles') return r(st.student);
      if (table === 'teacher_profiles') return r(st.teacherRow);
      if (table === 'cohorts') return r(q.f.id ? st.cohort : [{ id: IDS.cohort }]);
      if (table === 'sessions') return r(q.f.cohort_id && 'scheduled_at' in q.f ? [] : (st.lesson ? [st.lesson] : []));
      if (table === 'session_credits') return r(st.credits);
      if (table === 'teacher_availability') return r(AVAIL);
      if (table === 'one_on_one_bookings') {
        if (q.f.id) return r(st.booking);
        if (q.f.week_of) return r(st.existing);
        return r(st.bookings);
      }
      return r(null);
    },
  };
  return b;
}
const supabase = { from, rpc: async (name, args) => { st.rpc.push({ name, args }); return st.rpcError ? { data: null, error: st.rpcError } : { data: name === 'book_one_on_one' ? IDS.booking : true, error: null }; } };
function resObj() { return { code: 0, body: null, status(c) { this.code = c; return this; }, json(x) { this.body = x; return this; } }; }
const NOW = Date.parse('2030-01-07T19:05:00Z');
async function call(fn, body, user = { id: 'u-s' }) { const res = resObj(); await oto[fn]({}, res, { supabase, user, body, now: NOW }); return res; }

test('status: an Intensive student after a lesson can book, with free slots', async () => {
  reset();
  const r = await call('status', { kind: 'followup' });
  assert.strictEqual(r.code, 200);
  assert.strictEqual(r.body.followup.canBook, true);
  assert.strictEqual(r.body.followup.lesson.week, '2030-01-07');
  assert.ok(r.body.slots.length > 0 && r.body.slots[0] >= '2030-01-08T08:00:00.000Z');
});

test('status: Focused students get no follow-up; closed windows and existing bookings say why', async () => {
  reset({ student: { ...st?.student, id: IDS.student, user_id: 'u-s', tier: 'focused', stripe_subscription_status: 'active', enrolled_cohort_id: IDS.cohort } });
  assert.strictEqual((await call('status', {})).body.followup, null);
  reset({ lesson: { id: IDS.lesson, scheduled_at: '2030-01-01T18:00:00Z', status: 'completed' } });
  let r = await call('status', { kind: 'followup' });
  assert.strictEqual(r.body.followup.canBook, false); assert.match(r.body.followup.reason, /window has closed/);
  reset({ existing: { id: IDS.booking, scheduled_at: '2030-01-08T09:00:00Z', status: 'booked' } });
  r = await call('status', { kind: 'followup' });
  assert.strictEqual(r.body.followup.canBook, false); assert.strictEqual(r.body.followup.booking.id, IDS.booking);
  reset({ lesson: null });
  r = await call('status', {}); assert.match(r.body.followup.reason, /after your first lesson/);
  reset({ student: { id: IDS.student, user_id: 'u-s', tier: 'intensive', stripe_subscription_status: 'past_due', enrolled_cohort_id: IDS.cohort } });
  r = await call('status', {}); assert.strictEqual(r.body.followup.canBook, false);
});

test('book: only a free slot from the list is accepted and the database function does the booking', async () => {
  reset();
  let r = await call('book', { kind: 'followup', start: '2030-01-08T03:00:00Z' }); // outside availability
  assert.strictEqual(r.code, 409); assert.strictEqual(st.rpc.length, 0);
  r = await call('book', { kind: 'followup', start: '2030-01-08T08:00:00Z' });
  assert.strictEqual(r.code, 200);
  assert.deepStrictEqual(st.rpc[0].args, { p_student: IDS.student, p_teacher: IDS.teacher, p_kind: 'followup', p_start: '2030-01-08T08:00:00.000Z',
    p_minutes: 20, p_cohort: IDS.cohort, p_after_session: IDS.lesson, p_week: '2030-01-07' });
});

test('book: database conflicts become clear messages', async () => {
  reset({ rpcError: { message: 'slot_taken' } });
  let r = await call('book', { kind: 'followup', start: '2030-01-08T08:00:00Z' });
  assert.strictEqual(r.code, 409); assert.strictEqual(r.body.error, 'slot_taken');
  reset({ rpcError: { code: '23505', message: 'duplicate key' } });
  r = await call('book', { kind: 'followup', start: '2030-01-08T08:00:00Z' });
  assert.strictEqual(r.body.error, 'duplicate');
});

test('credits: a paid credit books 60 minutes with the class teacher, any plan', async () => {
  reset({ student: { id: IDS.student, user_id: 'u-s', tier: 'community', stripe_subscription_status: 'active', enrolled_cohort_id: IDS.cohort },
    cohort: { id: IDS.cohort, tier: 'community', teacher_id: IDS.teacher, teacher_profiles: { id: IDS.teacher, user_id: 'u-t', full_name: 'Teach', status: 'approved' } },
    credits: [{ credits: 1 }] });
  const s = await call('status', { kind: 'credit' });
  assert.strictEqual(s.body.credit.credits, 1); assert.ok(s.body.slots.length > 0);
  const r = await call('book', { kind: 'credit', start: s.body.slots[0] });
  assert.strictEqual(r.code, 200); assert.strictEqual(st.rpc[0].args.p_minutes, 60); assert.strictEqual(st.rpc[0].args.p_week, null);
  reset({ credits: [] });
  assert.strictEqual((await call('book', { kind: 'credit', start: '2030-01-08T08:00:00Z' })).code, 403);
});

test('cancel: own booking only, until 2 hours before', async () => {
  reset({ booking: { id: IDS.booking, student_id: IDS.student, status: 'booked', scheduled_at: '2030-01-08T08:00:00Z', kind: 'followup' } });
  assert.strictEqual((await call('cancel', { id: IDS.booking })).code, 200);
  reset({ booking: { id: IDS.booking, student_id: 'someone-else', status: 'booked', scheduled_at: '2030-01-08T08:00:00Z' } });
  assert.strictEqual((await call('cancel', { id: IDS.booking })).code, 404);
  reset({ booking: { id: IDS.booking, student_id: IDS.student, status: 'booked', scheduled_at: '2030-01-07T20:00:00Z' } });
  assert.strictEqual((await call('cancel', { id: IDS.booking })).code, 409);
});

test('note: only the booking teacher, once it has started; marks it completed', async () => {
  reset({ booking: { id: IDS.booking, teacher_id: IDS.teacher, status: 'booked', scheduled_at: '2030-01-07T19:00:00Z' } });
  let r = await call('note', { id: IDS.booking, note: 'Work on past tense.' }, { id: 'u-t' });
  assert.strictEqual(r.code, 200); assert.strictEqual(st.updates[0].v.status, 'completed');
  reset({ booking: { id: IDS.booking, teacher_id: 'other', status: 'booked', scheduled_at: '2030-01-07T19:00:00Z' } });
  assert.strictEqual((await call('note', { id: IDS.booking, note: 'x' }, { id: 'u-t' })).code, 404);
  reset({ booking: { id: IDS.booking, teacher_id: IDS.teacher, status: 'booked', scheduled_at: '2030-01-09T19:00:00Z' } });
  assert.strictEqual((await call('note', { id: IDS.booking, note: 'x' }, { id: 'u-t' })).code, 409);
});
