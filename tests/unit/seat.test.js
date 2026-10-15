// Run with: node --no-experimental-require-module --test 'tests/unit/*.test.js'
// The seat transaction shared by /api/enroll and the admin move action.
const test = require('node:test');
const assert = require('node:assert');
const { takeSeat } = require('../../api/_lib/seat.js');

// Fake supabase-js that logs every operation and lets a test fail chosen steps.
function fakeDb({ full = false, insertError = null, activeAfter = 1, prevRows = [{ id: 'old-enr' }] } = {}) {
  const log = [];
  const q = (table) => {
    const st = { table, op: 'select', filters: [] };
    const b = {
      select() { return b; },
      update(v) { st.op = 'update'; st.values = v; return b; },
      insert(v) { st.op = 'insert'; st.values = v; return b; },
      delete() { st.op = 'delete'; return b; },
      eq(k, v) { st.filters.push([k, v]); return b; },
      in(k, v) { st.filters.push([k, v]); return b; },
      single() { return b.then((r) => r); },
      then(resolve) {
        log.push(`${st.op} ${table}${st.values && st.values.status ? ':' + st.values.status : ''}`);
        if (table === 'enrollments' && st.op === 'insert') {
          return resolve(insertError ? { data: null, error: insertError } : { data: { id: 'new-enr' }, error: null });
        }
        if (table === 'enrollments' && st.op === 'select') {
          const n = log.filter((l) => l === 'insert enrollments').length ? activeAfter : prevRows.length;
          return resolve({ data: Array.from({ length: n }, (_, i) => ({ id: 'e' + i })), error: null });
        }
        return resolve({ data: null, error: null });
      },
    };
    return b;
  };
  return {
    log,
    from: q,
    rpc: async (name) => { log.push(`rpc ${name}`); return name === 'increment_enrollment' ? { data: full ? null : 5, error: null } : { data: null, error: null }; },
  };
}

test('first enrollment: claims the seat, inserts, points the profile at the class', async () => {
  const db = fakeDb();
  const r = await takeSeat(db, { studentId: 's1', cohortId: 'c2' });
  assert.deepStrictEqual(r, { ok: true, newCount: 5 });
  assert.deepStrictEqual(db.log, [
    'rpc increment_enrollment', 'delete enrollments', 'insert enrollments:active',
    'select enrollments', 'update student_profiles',
  ]);
});

test('full class: nothing else is touched', async () => {
  const db = fakeDb({ full: true });
  const r = await takeSeat(db, { studentId: 's1', cohortId: 'c2', previousCohortId: 'c1', replaceCurrent: true });
  assert.strictEqual(r.error, 'cohort_full');
  assert.deepStrictEqual(db.log, ['rpc increment_enrollment']);
});

test('switch: new seat is claimed BEFORE the old one is released', async () => {
  const db = fakeDb();
  const r = await takeSeat(db, { studentId: 's1', cohortId: 'c2', previousCohortId: 'c1', replaceCurrent: true });
  assert.ok(r.ok);
  const claim = db.log.indexOf('rpc increment_enrollment');
  const release = db.log.indexOf('update enrollments:cancelled');
  assert.ok(claim >= 0 && release > claim, db.log.join(' | '));
});

test('switch that fails to insert gives the seat back and restores the old enrollment', async () => {
  const db = fakeDb({ insertError: { code: 'XX000', message: 'boom' } });
  const r = await takeSeat(db, { studentId: 's1', cohortId: 'c2', previousCohortId: 'c1', replaceCurrent: true });
  assert.strictEqual(r.status, 500);
  assert.ok(db.log.includes('rpc decrement_enrollment'), db.log.join(' | '));
  assert.ok(db.log.includes('update enrollments:active'), 'previous enrollment re-activated');
});

test('a parallel duplicate (unique index) is reported as already enrolled', async () => {
  const db = fakeDb({ insertError: { code: '23505' } });
  const r = await takeSeat(db, { studentId: 's1', cohortId: 'c2' });
  assert.deepStrictEqual([r.status, r.error], [409, 'already_enrolled']);
  assert.ok(db.log.includes('rpc decrement_enrollment'));
});
