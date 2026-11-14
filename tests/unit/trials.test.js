// Run with: node --test tests/unit/trials.test.js
// Teacher hiring, step 2: the trial class (api/_lib/trials.js, js/match.js trialPick); owner, 13 Nov 2026.
const test = require('node:test');
const assert = require('node:assert');
const TR = require('../../api/_lib/trials.js');
const M = require('../../js/match.js');

const MIN = 60000, HOUR = 3600000, DAY = 86400000;
/* Saturday 14 Nov 2026, 12:00 UTC */
const NOW = Date.parse('2026-11-14T12:00:00Z');
const madridMon = { day_of_week: 1, start_time: '09:00:00', end_time: '11:00:00', timezone: 'Europe/Madrid' };

test('trial times: half hours inside the teacher\'s range, in their zone, 48 hours to 21 days ahead', () => {
  const slots = TR.trialSlots({ availability: [madridMon], now: NOW });
  /* Mondays 16, 23, 30 Nov and 7 Dec are within 21 days; Monday 16 Nov 09:00 Madrid is only 45 hours ahead */
  assert.ok(!slots.includes('2026-11-16T08:00:00.000Z'), 'less than 48 hours ahead');
  assert.ok(slots.includes('2026-11-23T08:00:00.000Z'), '09:00 Madrid in winter is 08:00 UTC');
  assert.ok(slots.includes('2026-11-23T09:30:00.000Z'), '10:30 to 11:00 still fits');
  assert.ok(!slots.includes('2026-11-23T10:00:00.000Z'), '11:00 would end after the range');
  assert.strictEqual(slots.filter((s) => s.startsWith('2026-11-23')).length, 4);
  assert.ok(slots.every((s) => Date.parse(s) <= NOW + 21 * DAY));
  assert.deepStrictEqual(slots, slots.slice().sort());
});

test('trial times: busy times are left out, odd ranges round to the half hour, bad rows are ignored', () => {
  const busy = [[Date.parse('2026-11-23T08:15:00Z'), Date.parse('2026-11-23T08:45:00Z')]];
  const slots = TR.trialSlots({ availability: [madridMon, { day_of_week: 9, start_time: '09:00', end_time: '10:00', timezone: 'Europe/Madrid' }, { day_of_week: 1, start_time: '09:00', end_time: '10:00', timezone: 'Not/AZone' }], now: NOW, busy });
  const mon = slots.filter((s) => s.startsWith('2026-11-23'));
  assert.deepStrictEqual(mon, ['2026-11-23T09:00:00.000Z', '2026-11-23T09:30:00.000Z'], 'the 08:00 and 08:30 starts overlap 08:15 to 08:45');
  const odd = TR.trialSlots({ availability: [{ day_of_week: 2, start_time: '06:10', end_time: '07:30', timezone: 'Europe/Madrid' }], now: NOW });
  assert.deepStrictEqual(odd.filter((s) => s.startsWith('2026-11-24')), ['2026-11-24T05:30:00.000Z', '2026-11-24T06:00:00.000Z'], '06:30 and 07:00 Madrid');
  assert.deepStrictEqual(TR.trialSlots({ availability: [], now: NOW }), []);
});

test('trial times: overlapping rows give each start once', () => {
  const slots = TR.trialSlots({ availability: [madridMon, Object.assign({}, madridMon, { start_time: '10:00' })], now: NOW });
  assert.strictEqual(slots.filter((s) => s.startsWith('2026-11-23')).length, 4);
});

test('the one-date class keeps the weekday and time in the teacher\'s zone', () => {
  assert.deepStrictEqual(TR.wallClock(Date.parse('2026-11-23T23:30:00Z'), 'Asia/Tokyo'), { day: 'Tuesday', time: '08:30' });
  assert.deepStrictEqual(TR.wallClock(Date.parse('2026-11-23T08:00:00Z'), 'Europe/Madrid'), { day: 'Monday', time: '09:00' });
});

test('scorecard: before verification, after it, ratings and the recording', () => {
  const trial = { scheduled_at: '2026-11-23T08:00:00Z', minutes: 30 };
  const early = TR.scorecard({ trial, session: {}, now: Date.parse('2026-11-23T08:10:00Z') });
  assert.strictEqual(early.ended, false);
  assert.strictEqual(early.teacherMinutes, null);
  assert.strictEqual(early.learnersPresent, null);
  assert.strictEqual(early.ratings.mean, null);
  const s = { verified_at: '2026-11-23T09:30:00Z', minutes_late: 2, teacher_seconds: 1700, learners_present: 4, outcome: 'held', teacher_checked_in_at: '2026-11-23T07:48:00Z', teacher_checkin_via: 'button' };
  const recs = [{ id: 'p', kind: 'proof', daily_recording_id: 'x' }, { id: 'gone', kind: 'full', daily_recording_id: 'y', deleted_at: '2026-11-24' }, { id: 'f', kind: 'full', daily_recording_id: 'z', duration_seconds: 1830 }];
  const c = TR.scorecard({ trial, session: s, accepted: 5, ratings: [3, 3, 2, 1, 9], recordings: recs, now: Date.parse('2026-11-23T10:00:00Z') });
  assert.strictEqual(c.ended, true);
  assert.strictEqual(c.minutesLate, 2);
  assert.deepStrictEqual(c.checkin, { at: '2026-11-23T07:48:00.000Z', via: 'button', minutesBefore: 12 });
  assert.strictEqual(c.teacherMinutes, 28);
  assert.strictEqual(c.learnersPresent, 4);
  assert.strictEqual(c.learnersBooked, 5);
  assert.deepStrictEqual(c.ratings, { n: 4, counts: { 3: 2, 2: 1, 1: 1 }, mean: 2.3 }, 'a score outside 1 to 3 is ignored');
  assert.deepStrictEqual(c.recording, { id: 'f', minutes: 31 }, 'the full recording that still exists, not proof clips');
});

test('trial learners: language, level within one, time fit, never test or staff accounts', () => {
  const at = Date.parse('2026-11-23T18:00:00Z'); /* Monday 19:00 Paris */
  const base = { language: 'English', timezone: 'Europe/Paris', created_at: '2026-11-01T00:00:00Z' };
  const data = { learners: [
    Object.assign({}, base, { id: 'a', user_id: 'ua', name: 'Ana', level: 'A2' }),
    Object.assign({}, base, { id: 'b', user_id: 'ub', name: 'Ben', level: 'B1' }),
    Object.assign({}, base, { id: 'c', user_id: 'uc', name: 'Cleo', level: 'A2', timezone: 'Asia/Tokyo' }),
    Object.assign({}, base, { id: 'd', user_id: 'ud', name: 'Dan', level: 'C1' }),
    Object.assign({}, base, { id: 'e', user_id: 'ue', name: 'Eva', level: 'A2', language: 'German' }),
    Object.assign({}, base, { id: 'f', user_id: 'uf', name: 'Test', level: 'A2' }),
    Object.assign({}, base, { id: 'g', user_id: 'ug', name: 'Gus', level: 'A2', email: 'bchysf+x@gmail.com' }),
    Object.assign({}, base, { id: 'h', user_id: 'uh', name: 'Hal', level: 'A2', role: 'teacher' }),
    Object.assign({}, base, { id: 'i', user_id: 'ui', name: 'Ida', level: 'A2', test: true }),
  ] };
  const list = M.trialPick(data, { language: 'English', level: 'A2', at, now: at - 9 * DAY });
  assert.deepStrictEqual(list.map((l) => l.userId), ['ua', 'uc', 'ub'], 'same level and a good time first; one level apart last; C1, German, tests and staff left out');
  assert.strictEqual(list[0].fits, true);
  assert.strictEqual(list[1].fits, false, '03:00 in Tokyo');
  assert.match(list[1].why, /outside their usual hours/);
  assert.match(list[2].why, /one level apart/);
});
