// Run with: node --no-experimental-require-module --test 'tests/unit/*.test.js'
// Matching engine (js/match.js, Admin → Matching): learners' weeks in UTC, compatibility, groups, readiness.
const test = require('node:test');
const assert = require('node:assert');
const M = require('../../js/match.js');

const NOW = new Date('2026-11-12T18:00:00Z'); // winter time: Paris +1, Istanbul +3, Vancouver -8
const L = (id, level, tz, extra) => Object.assign({ id, user_id: 'u' + id, name: id, language: 'English', level, placement: { level, language: 'English' },
  goal: 'relocation', timezone: tz, days: [], role: 'student' }, extra || {});

test('a learner with no times gets weekday evenings and weekend mornings in their own zone, marked assumed', () => {
  const l = M.normalise(L('a', 'A1', 'Europe/Paris'), NOW);
  assert.strictEqual(l.times, 'assumed');
  assert.ok(l.slots.has(M.toSlot(1, 18 * 60, 'Europe/Paris', NOW)), 'Monday 18:00 Paris');
  assert.ok(l.slots.has(M.toSlot(1, 20 * 60, 'Europe/Paris', NOW)), 'Monday 20:00 Paris: ends at 21:00');
  assert.ok(!l.slots.has(M.toSlot(1, 20 * 60 + 30, 'Europe/Paris', NOW)), 'Monday 20:30 would end after 21:00');
  assert.ok(l.slots.has(M.toSlot(6, 10 * 60, 'Europe/Paris', NOW)), 'Saturday 10:00');
  assert.strictEqual(M.toSlot(1, 18 * 60, 'Europe/Paris', NOW), 48 + 34, 'Monday 17:00 UTC');
});

test('stated days and times are used as given; UTC counts as an unknown zone', () => {
  const l = M.normalise(L('b', 'A1', 'Europe/Paris', { days: [6, 0], time_start: '11:00:00', time_end: '12:00:00' }), NOW);
  assert.strictEqual(l.times, 'stated');
  assert.deepStrictEqual([...l.slots].sort((x, y) => x - y), [M.toSlot(0, 660, 'Europe/Paris', NOW), M.toSlot(6, 660, 'Europe/Paris', NOW)].sort((x, y) => x - y), 'only Saturday and Sunday 11:00');
  const u = M.normalise(L('c', 'B1', 'UTC', { placement: null }), NOW);
  assert.strictEqual(u.tz, null);
  assert.strictEqual(u.slots.size, 0);
  assert.ok(u.incomplete, 'no level test and no time zone');
});

test('the level comes from the level test, not the level chosen', () => {
  const l = M.normalise(L('d', 'B2', 'Europe/Paris', { level: 'C1', placement: { level: 'B2', language: 'English' } }), NOW);
  assert.strictEqual(l.level, 'B2');
  assert.ok(l.tested);
});

test('compatibility: same level and times beat a level apart; no shared time caps the score', () => {
  const a = M.normalise(L('a', 'A1', 'Europe/Paris'), NOW);
  const b = M.normalise(L('b', 'A1', 'Europe/Berlin'), NOW);
  const c = M.normalise(L('c', 'A2', 'Europe/Madrid'), NOW);
  const far = M.normalise(L('f', 'A1', 'Asia/Taipei'), NOW);
  assert.ok(M.compat(a, b).score > M.compat(a, c).score);
  assert.ok(M.compat(a, far).score <= 45, 'Taipei evenings never meet Paris evenings');
  assert.ok(M.compat(a, far).why.indexOf('no class time in common') > -1);
});

test('teacher preferences that clash lower the style part', () => {
  const p = (teacher) => ({ time: 'h1_3', teacher, explain: 'target' });
  const a = M.normalise(L('a', 'A1', 'Europe/Paris', { poll: p('native') }), NOW);
  const b = M.normalise(L('b', 'A1', 'Europe/Paris', { poll: p('home') }), NOW);
  const c = M.normalise(L('c', 'A1', 'Europe/Paris', { poll: p('native') }), NOW);
  assert.ok(M.compat(a, c).style > M.compat(a, b).style);
});

test('groups: one per level and time, members from compatible zones, the rest explained', () => {
  const data = { learners: [
    L('p1', 'A1', 'Europe/Paris'), L('p2', 'A1', 'Europe/Berlin'), L('p3', 'A1', 'Europe/Madrid'),
    L('v1', 'A1', 'America/Vancouver'), L('v2', 'A1', 'America/Los_Angeles'),
    L('t1', 'A1', 'Asia/Taipei'),
    L('b1', 'B2', 'Europe/Paris'),
    L('x', 'B1', 'UTC', { placement: null }), L('admin', 'B1', 'Europe/Paris', { role: 'admin' })
  ], availability: [], rooms: [] };
  const r = M.run(data, { now: NOW });
  assert.strictEqual(r.summary.total, 9);
  assert.strictEqual(r.pool.length, 7, 'the admin and the incomplete account are left out');
  const ids = r.groups.map((g) => g.members.map((m) => m.learner.id).sort().join(','));
  assert.ok(ids.includes('p1,p2,p3'), 'the European A1 learners together: ' + ids);
  assert.ok(ids.includes('v1,v2'), 'the North American A1 learners together: ' + ids);
  const eu = r.groups.find((g) => g.members.some((m) => m.learner.id === 'p1'));
  assert.strictEqual(eu.productKey, 'level_en');
  assert.strictEqual(eu.need, 5, 'a level pack needs 8');
  const left = Object.fromEntries(r.unplaced.map((u) => [u.learner.id, u.reason]));
  assert.match(left.t1, /shared with another A1 learner/);
  assert.match(left.b1, /nobody else at B2/);
});

test('a learner alone at their level joins a group one level away when the time suits', () => {
  const data = { learners: [L('a', 'A1', 'Europe/Paris'), L('b', 'A1', 'Europe/Paris'), L('c', 'A2', 'Europe/Paris')] };
  const r = M.run(data, { now: NOW });
  assert.strictEqual(r.groups.length, 1);
  const c = r.groups[0].members.find((m) => m.learner.id === 'c');
  assert.strictEqual(c && c.stretch, 'one level apart');
});

test('a teacher’s offered time is preferred and named on the group', () => {
  const data = { learners: [L('a', 'B1', 'Europe/Paris'), L('b', 'B1', 'Europe/Rome'), L('c', 'B1', 'Europe/Madrid')],
    availability: [{ teacher_id: 't', teacher: 'Teacher', language: 'English', levels: ['B1'], kinds: ['level_pack'], days: ['Monday', 'Wednesday', 'Friday'], schedule_time: '19:00', timezone: 'Europe/Rome' }] };
  const r = M.run(data, { now: NOW });
  assert.strictEqual(r.groups.length, 1);
  assert.strictEqual(r.groups[0].teacher.teacher_id, 't');
  const t = M.timesIn(r.groups[0].slot, 'Europe/Paris', NOW);
  assert.deepStrictEqual([t.days.join(','), t.time], ['Monday,Wednesday,Friday', '19:00']);
});

test('products follow focus: exams at B1 and above, pleasure to the open class', () => {
  assert.strictEqual(M.productKind({ goal: 'academic', level: 'B2' }), 'exam_pack');
  assert.strictEqual(M.productKind({ goal: 'academic', level: 'A2' }), 'level_pack');
  assert.strictEqual(M.productKind({ goal: 'pleasure', level: 'A1' }), 'open_class');
  assert.strictEqual(M.productKind({ goal: 'relocation', level: 'A1', poll: { prefer: ['conversation'] } }), 'level_pack');
});

test('readiness counts real signals and says why', () => {
  const hot = M.normalise(L('h', 'A1', 'Europe/Paris', { last_active: '2026-11-12T10:00:00Z', days_active: 5, tutor_min: 20, quotes: 1, timeframe: '3_months',
    poll: { prefer: ['classes'], time: 'h3_5' } }), NOW);
  const cold = M.normalise(L('c', 'A1', 'Europe/Paris', { timeframe: 'no_deadline' }), NOW);
  assert.strictEqual(hot.ready.stage, 'ready');
  assert.ok(hot.ready.why.indexOf('looked at a price') > -1);
  assert.strictEqual(cold.ready.score, 0);
  assert.strictEqual(cold.ready.stage, 'cold');
});

test('heat map and start dates', () => {
  const ls = [M.normalise(L('a', 'A1', 'Europe/Paris'), NOW), M.normalise(L('b', 'A1', 'Europe/Istanbul'), NOW)];
  const h = M.heat(ls, 'Europe/Paris', NOW);
  assert.strictEqual(h[1][18].length, 2, 'Monday 18:00 Paris is 20:00 Istanbul: both');
  assert.strictEqual(h[1][20].length, 1, 'Monday 20:00 Paris is 22:00 Istanbul: only Paris');
  assert.strictEqual(M.startDate('level_pack', [1, 2, 4], NOW), '2026-12-07');
  assert.strictEqual(M.startDate('open_class', [3], NOW), '2026-11-25');
});

test('a group is shown in the zone most of its members live in, not the first zone in the alphabet', () => {
  // Owner, 12 Nov 2026: two Turkish learners were shown in Karachi time. One had Asia/Karachi saved, one Europe/Istanbul
  // (country TR); on a tie the member with a known country wins, never "Asia" sorting before "Europe".
  const R = M.run({ learners: [L('k', 'A1', 'Asia/Karachi'), L('i', 'A1', 'Europe/Istanbul', { country: 'TR' })] }, { now: NOW });
  assert.strictEqual(R.groups.length, 1);
  assert.strictEqual(R.groups[0].zone, 'Europe/Istanbul');
  const R2 = M.run({ learners: [L('k', 'A1', 'Asia/Karachi'), L('i', 'A1', 'Europe/Istanbul'), L('j', 'A1', 'Europe/Istanbul')] }, { now: NOW });
  assert.strictEqual(R2.groups[0].zone, 'Europe/Istanbul', 'two of three live in Istanbul');
});

test('the owner’s test accounts stay out of the groups unless asked for', () => {
  const data = { learners: [L('a', 'A1', 'Europe/Paris'), L('b', 'A1', 'Europe/Paris'), L('t', 'A1', 'Europe/Paris', { test: true })] };
  assert.strictEqual(M.run(data, { now: NOW }).pool.length, 2);
  assert.strictEqual(M.run(data, { now: NOW }).summary.tests, 1);
  assert.strictEqual(M.run(data, { now: NOW, includeTests: true }).pool.length, 3);
});
