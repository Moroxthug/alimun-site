// Run with: node --test tests/unit/operations.test.js
// Verified classes (api/_lib/class-verify.js) and the automation guard (api/_lib/automation.js); owner, 13 Nov 2026.
const test = require('node:test');
const assert = require('node:assert');
const CV = require('../../api/_lib/class-verify.js');
const AUTO = require('../../api/_lib/automation.js');

const START = Date.parse('2026-11-12T18:00:00Z'), MIN = 60000;
const at = (m) => START + m * MIN;
const who = { t: { role: 'teacher', name: 'Teacher' }, a: { role: 'learner', name: 'Ana' }, b: { role: 'learner', name: 'Ben' }, x: { role: 'learner', name: 'Test', test: true }, s: { role: 'staff', name: 'Admin' } };
const run = (intervals, extra) => CV.summarise(Object.assign({ start: START, minutes: 60, intervals, who, now: at(120), ongoing: false }, extra || {}));

test('held: the teacher for at least 90% of the slot and one learner', () => {
  const r = run([{ userId: 't', join: at(-2), leave: at(61) }, { userId: 'a', join: at(1), leave: at(60) }, { userId: 'b', join: at(10), leave: at(30) }]);
  assert.strictEqual(r.outcome, 'held');
  assert.strictEqual(r.learnersPresent, 2);
  assert.strictEqual(r.minutesLate, 0);
  assert.strictEqual(r.teacherSeconds, 3600, 'time before the start does not count, capped at the slot');
  assert.strictEqual(r.peak, 3);
});

test('ended early: teacher 7 minutes late is under 90%', () => {
  const r = run([{ userId: 't', join: at(7), leave: at(60) }, { userId: 'a', join: at(0), leave: at(60) }]);
  assert.strictEqual(r.outcome, 'ended_early');
  assert.strictEqual(r.minutesLate, 7);
});

test('a dropped connection: both pieces of the teacher’s time count, rejoins are counted', () => {
  const r = run([{ userId: 't', join: at(0), leave: at(30) }, { userId: 't', join: at(31), leave: at(60) }, { userId: 'a', join: at(0), leave: at(60) }]);
  assert.strictEqual(r.outcome, 'held');
  const t = r.people.find((p) => p.userId === 't');
  assert.strictEqual(t.joins, 2);
  assert.strictEqual(t.inSlot, 59 * 60);
});

test('teacher absent, no learners, did not happen; test accounts and staff are not learners', () => {
  assert.strictEqual(run([{ userId: 'a', join: at(0), leave: at(20) }]).outcome, 'teacher_absent');
  assert.strictEqual(run([{ userId: 't', join: at(0), leave: at(60) }, { userId: 'x', join: at(0), leave: at(60) }, { userId: 's', join: at(5), leave: at(10) }]).outcome, 'no_learners');
  assert.strictEqual(run([]).outcome, 'not_held');
  assert.strictEqual(run([{ userId: 's', join: at(0), leave: at(10) }]).outcome, 'not_held', 'only an admin looked in');
});

test('no outcome while the class is still on, or less than 20 minutes after its end', () => {
  const iv = [{ userId: 't', join: at(0), leave: at(60) }, { userId: 'a', join: at(0), leave: at(60) }];
  assert.strictEqual(run(iv, { now: at(70) }).outcome, null);
  assert.strictEqual(run(iv, { ongoing: true }).outcome, null);
  assert.strictEqual(run(iv, { now: at(81) }).outcome, 'held');
});

test('the video room of a class date, or of the date it was merged into', () => {
  assert.strictEqual(CV.roomName({ id: '11111111-1111-4111-8111-111111111111' }), 'alimun-11111111-1111-4111-8111-111111111111');
  assert.strictEqual(CV.roomName({ id: '11111111-1111-4111-8111-111111111111', room_session_id: '22222222-2222-4222-8222-222222222222' }), 'alimun-22222222-2222-4222-8222-222222222222');
});

/* A small stand-in for the database, enough for the automation guard */
function db() {
  const T = { automations: [], automation_log: [] };
  function q(name) {
    const st = { f: [], op: 'select', count: false };
    const rows = () => T[name];
    const api = {
      select(cols, o) { if (o && o.count) st.count = true; return api; },
      eq(k, v) { st.f.push((r) => r[k] === v); return api; },
      gte(k, v) { st.f.push((r) => r[k] >= v); return api; },
      limit() { return api; },
      maybeSingle() { st.one = true; return api; },
      insert(row) {
        if (name === 'automation_log' && row.ok && !row.dry_run && T.automation_log.some((r) => r.automation === row.automation && r.key === row.key && r.ok && !r.dry_run)) return Promise.resolve({ error: { code: '23505', message: 'duplicate' } });
        T[name].push(Object.assign({ created_at: new Date().toISOString() }, row)); return Promise.resolve({ error: null });
      },
      update(p) { st.op = 'update'; st.p = p; return api; },
      then(ok, no) {
        const list = rows().filter((r) => st.f.every((f) => f(r)));
        if (st.op === 'update') { list.forEach((r) => Object.assign(r, st.p)); return Promise.resolve({ error: null }).then(ok, no); }
        return Promise.resolve(st.count ? { count: list.length } : { data: st.one ? list[0] || null : list }).then(ok, no);
      },
    };
    return api;
  }
  return { T, from: q };
}
const autoRow = (o) => Object.assign({ name: 'demo', label: 'Demo', enabled: true, dry_run: false, daily_cap: 2, consecutive_failures: 0 }, o);

test('automation: off does nothing, dry run logs without acting, an action is never done twice', async () => {
  const sb = db(); let calls = 0; const job = async () => { calls++; return {}; };
  assert.strictEqual(await AUTO.act(sb, autoRow({ enabled: false }), { key: 'k', action: 'a' }, job), 'off');
  assert.strictEqual(await AUTO.act(sb, autoRow({ dry_run: true }), { key: 'k', action: 'a' }, job), 'dry_run');
  assert.strictEqual(calls, 0);
  assert.strictEqual(sb.T.automation_log.length, 1);
  const live = autoRow();
  assert.strictEqual(await AUTO.act(sb, live, { key: 'k', action: 'a' }, job), 'done');
  assert.strictEqual(await AUTO.act(sb, live, { key: 'k', action: 'a' }, job), 'done_before');
  assert.strictEqual(calls, 1);
});

test('automation: the daily cap stops it and tells the owner once', async () => {
  const sb = db(), told = []; const a = autoRow({ daily_cap: 2 });
  for (const k of ['1', '2', '3', '4']) await AUTO.act(sb, a, { key: k, action: 'a' }, async () => ({}), async (t) => { told.push(t); });
  assert.strictEqual(sb.T.automation_log.filter((r) => r.action === 'a').length, 2);
  assert.strictEqual(told.length, 1);
});

test('automation: three failures in a row pause it and tell the owner', async () => {
  const sb = db(), told = [];
  sb.T.automations.push(autoRow());
  const a = autoRow();
  for (const k of ['1', '2', '3']) assert.strictEqual(await AUTO.act(sb, a, { key: k, action: 'a' }, async () => { throw new Error('boom'); }, async (t) => { told.push(t); }), 'failed');
  assert.strictEqual(a.enabled, false);
  assert.strictEqual(sb.T.automations[0].enabled, false);
  assert.match(sb.T.automations[0].paused_reason, /3 failures/);
  assert.strictEqual(told.length, 1);
  assert.strictEqual(await AUTO.act(sb, a, { key: '4', action: 'a' }, async () => ({})), 'off');
});
