// Run with: node --test tests/unit/assign.test.js
// Teacher hiring, step 3: assignment to rooms (js/assign.js); owner, 13 Nov 2026.
const test = require('node:test');
const assert = require('node:assert');
const AS = require('../../js/assign.js');

const NOW = Date.parse('2026-11-14T12:00:00Z');
/* A level pack from Monday 7 December, Monday Tuesday Thursday 19:00 Paris (18:00 UTC in winter) */
const room = { id: 'r1', product_key: 'level_en', language: 'English', level: 'A2', room_state: 'draft', starts_on: '2026-12-07',
  schedule_days: ['Monday', 'Tuesday', 'Thursday'], schedule_time: '19:00:00', timezone: 'Europe/Paris', class_minutes: 60,
  teacher_id: 'owner', substitute_teacher_id: null };
const ana = { id: 'ana', full_name: 'Ana', languages: ['English'], status: 'approved', hiring_stage: 'approved' };
/* Ana in Madrid (same clock as Paris), free 18:00 to 21:00 on weekdays */
const anaWeek = [1, 2, 3, 4, 5].map((d) => ({ day_of_week: d, start_time: '18:00:00', end_time: '21:00:00', timezone: 'Europe/Madrid' }));

test('needs: placeholder, declined, not approved, handover, substitute', () => {
  const ctx = { approved: { owner: true, ana: true }, admins: { owner: true } };
  assert.deepStrictEqual(AS.needs(room, ctx).map((n) => [n.role, n.auto]), [['teacher', true], ['substitute', true]], 'held by the owner, contract not accepted');
  const taught = Object.assign({}, room, { contract_accepted_at: '2026-11-10', substitute_teacher_id: 'ana' });
  assert.deepStrictEqual(AS.needs(taught, ctx).map((n) => [n.role, n.auto, n.handover]), [['teacher', false, true]], 'the owner teaches it: a handover only, never automatic');
  assert.strictEqual(AS.needs(Object.assign({}, room, { teacher_id: 'gone' }), ctx)[0].why, 'its teacher is no longer approved');
  assert.strictEqual(AS.needs(Object.assign({}, room, { teacher_id: 'ana', contract_declined_at: '2026-11-12' }), ctx)[0].why, 'its teacher declined the course contract');
  assert.deepStrictEqual(AS.needs(Object.assign({}, room, { teacher_id: 'ana', substitute_teacher_id: 'owner' }), ctx), [], 'a teacher and a substitute: nothing');
  assert.deepStrictEqual(AS.needs(Object.assign({}, room, { room_state: 'cancelled' }), ctx), []);
});

test('fit: language, free at every class time in their own zone, sure', () => {
  const f = AS.fit(room, ana, { weekly: anaWeek, now: NOW });
  assert.strictEqual(f.ok, true);
  assert.strictEqual(f.sure, true);
  assert.ok(f.why.includes('free at every class time'));
  assert.strictEqual(AS.fit(Object.assign({}, room, { language: 'German' }), ana, { weekly: anaWeek, now: NOW }).no, 'does not teach German');
  /* Not free on Thursdays */
  const noThu = anaWeek.filter((r) => r.day_of_week !== 4);
  assert.strictEqual(AS.fit(room, ana, { weekly: noThu, now: NOW }).no, 'not free on Monday at 19:00 their time'.replace('Monday', 'Thursday'));
  /* In Vancouver, 19:00 Paris is 10:00: free 18:00 to 21:00 there does not fit */
  const van = anaWeek.map((r) => Object.assign({}, r, { timezone: 'America/Vancouver' }));
  assert.strictEqual(AS.fit(room, ana, { weekly: van, now: NOW }).ok, false);
  /* No times at all: possible but not sure */
  const unk = AS.fit(room, ana, { now: NOW });
  assert.strictEqual(unk.ok, true);
  assert.strictEqual(unk.sure, false);
});

test('fit: offered levels and kinds, an exact offered time, clashes with their rooms', () => {
  const offer = { language: 'English', kinds: ['level_pack'], levels: ['B1'], days: ['Monday', 'Tuesday', 'Thursday'], schedule_time: '19:00', timezone: 'Europe/Paris', starts_on: '2026-12-01', substitute: true };
  assert.strictEqual(AS.fit(room, ana, { offers: [offer], weekly: anaWeek, now: NOW }).no, 'did not offer level pack A2');
  const exact = AS.fit(room, ana, { offers: [Object.assign({}, offer, { levels: ['A2'] })], now: NOW, role: 'substitute' });
  assert.strictEqual(exact.ok, true);
  assert.strictEqual(exact.sure, true, 'an exact offered time is enough without weekly hours');
  assert.ok(exact.why.includes('willing to stand in'));
  const other = { id: 'r2', product_key: 'open_en', language: 'English', level: 'B1', room_state: 'open', starts_on: '2026-11-20', schedule_days: ['Tuesday'], schedule_time: '19:30', timezone: 'Europe/Paris', class_minutes: 60 };
  assert.strictEqual(AS.fit(room, ana, { weekly: anaWeek, rooms: [other], now: NOW }).no, 'teaches English B1 at the same time');
  const later = Object.assign({}, other, { schedule_time: '20:00' });
  assert.strictEqual(AS.fit(room, ana, { weekly: anaWeek, rooms: [later], now: NOW }).no, 'teaches English B1 at the same time', 'needs 15 minutes between classes');
  const ok = Object.assign({}, other, { schedule_time: '20:15' });
  assert.strictEqual(AS.fit(room, ana, { weekly: anaWeek, rooms: [ok], now: NOW }).ok, true);
});

test('plan: the best sure teacher first, admins and dismissed teachers left out', () => {
  const ben = { id: 'ben', full_name: 'Ben', languages: ['English'], status: 'approved', rating: 4.8 };
  const cal = { id: 'cal', full_name: 'Cal', languages: ['English'], status: 'approved' };
  const owner = { id: 'owner', full_name: 'Owner', languages: ['English'], status: 'approved' };
  const p = AS.plan({ rooms: [room], teachers: [ana, ben, cal, owner], admins: { owner: true }, now: NOW,
    weekly: { ana: anaWeek, ben: anaWeek }, dismissed: { 'r1|ben|substitute': true } });
  assert.deepStrictEqual(p.map((n) => n.role), ['teacher', 'substitute']);
  assert.deepStrictEqual(p[0].candidates.map((c) => c.teacher.id), ['ana', 'ben', 'cal'], 'sure first; newly approved Ana before rated Ben; Cal (times unknown) last');
  assert.deepStrictEqual(p[1].candidates.map((c) => c.teacher.id), ['ana', 'cal'], 'Ben was dismissed for the substitute');
});
