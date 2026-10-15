// Run with: node --no-experimental-require-module --test 'tests/unit/*.test.js'
const test = require('node:test');
const assert = require('node:assert');
const TZ = require('../../js/tz.js');

const iso = (d) => d.toISOString().slice(0, 16);

test('zonedToUtc handles summer and winter offsets', () => {
  assert.strictEqual(iso(TZ.zonedToUtc(2026, 7, 6, 18 * 60, 'Europe/Madrid')), '2026-07-06T16:00'); // CEST +2
  assert.strictEqual(iso(TZ.zonedToUtc(2026, 11, 2, 18 * 60, 'Europe/Madrid')), '2026-11-02T17:00'); // CET +1
  assert.strictEqual(iso(TZ.zonedToUtc(2026, 11, 2, 18 * 60, 'America/Toronto')), '2026-11-02T23:00'); // EST -5
  assert.strictEqual(iso(TZ.zonedToUtc(2026, 11, 2, 9 * 60, 'UTC')), '2026-11-02T09:00');
});

test('zonedParts reads weekday and minutes in the target zone', () => {
  const p = TZ.zonedParts(new Date('2026-11-02T23:30:00Z'), 'Asia/Tokyo'); // Tue 08:30 JST
  assert.deepStrictEqual([p.weekday, p.minutes, p.d], [2, 8 * 60 + 30, 3]);
});

test('scheduleOccurrences matches generate_cohort_sessions dates (84 days from tomorrow)', () => {
  const occ = TZ.scheduleOccurrences([1, 4], '18:00', 'Europe/Madrid', new Date('2026-10-15T12:00:00Z'));
  assert.strictEqual(occ.length, 24);
  assert.strictEqual(iso(occ[0]), '2026-10-19T16:00'); // Mon, still CEST
  assert.strictEqual(iso(occ[3]), '2026-10-29T17:00'); // Thu, after the 25 Oct change
});

test('a class fits a slot in the same zone across DST', () => {
  const slots = [{ day_of_week: 1, start_time: '17:00:00', end_time: '20:00:00', timezone: 'Europe/Madrid' }];
  const occ = TZ.scheduleOccurrences([1], '18:00', 'Europe/Madrid', new Date('2026-10-15T00:00:00Z'));
  assert.ok(occ.every((o) => TZ.fitsSlot(o, 60, slots)));
});

test('a slot in another zone is converted, and DST mismatch weeks are caught', () => {
  // Teacher availability in Toronto, Mon 12:00-14:00. Class in Madrid at 18:00:
  // 12:00 Toronto while both are on summer time, but in the week of
  // 26 Oct (Europe has changed, North America changes on 1 Nov) it is 13:00 Toronto
  // and from 2 Nov it is 12:00 again. 13:00-14:00 still fits; a slot ending at 13:00 does not.
  const slots = [{ day_of_week: 1, start_time: '12:00:00', end_time: '14:00:00', timezone: 'America/Toronto' }];
  const from = new Date('2026-10-15T00:00:00Z');
  const occ = TZ.scheduleOccurrences([1], '18:00', 'Europe/Madrid', from);
  assert.ok(occ.every((o) => TZ.fitsSlot(o, 60, slots)));

  const tight = [{ day_of_week: 1, start_time: '12:00:00', end_time: '13:00:00', timezone: 'America/Toronto' }];
  const bad = occ.filter((o) => !TZ.fitsSlot(o, 60, tight)).map(iso);
  assert.deepStrictEqual(bad, ['2026-10-26T17:00']);
});

test('fitsSlot rejects the wrong weekday and midnight crossings, accepts ending at midnight', () => {
  const late = [{ day_of_week: 1, start_time: '22:00:00', end_time: '24:00:00', timezone: 'UTC' }];
  assert.ok(TZ.fitsSlot(new Date('2026-11-02T23:00:00Z'), 60, late)); // Mon 23:00-24:00
  assert.ok(!TZ.fitsSlot(new Date('2026-11-02T23:30:00Z'), 60, late)); // runs into Tuesday
  assert.ok(!TZ.fitsSlot(new Date('2026-11-03T22:00:00Z'), 60, late)); // Tuesday
});

test('convertWeekly uses the real next date, not a fixed summer week', () => {
  const from = new Date('2026-11-10T00:00:00Z');
  // Madrid 18:00 Monday in November = 17:00 UTC (the old June-based helper said 16:00).
  assert.strictEqual(TZ.convertWeekly('Monday', '18:00:00', 'Europe/Madrid', 'UTC', from).time, '17:00:00');
  const r = TZ.convertWeekly('Monday', '20:00:00', 'Europe/Madrid', 'Asia/Tokyo', from);
  assert.deepStrictEqual([r.dayName, r.time], ['Tuesday', '04:00:00']);
  assert.strictEqual(TZ.convertWeekly('Funday', '10:00', 'UTC', 'UTC'), null);
});

test('isValidTimezone', () => {
  assert.ok(TZ.isValidTimezone('Europe/Rome'));
  assert.ok(TZ.isValidTimezone('UTC'));
  assert.ok(!TZ.isValidTimezone('Mars/Olympus'));
  assert.ok(!TZ.isValidTimezone(''));
});
