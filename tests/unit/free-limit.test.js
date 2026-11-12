// The free limit (docs/APP_PLAN.md): who gets the complete course material, and which paths /api/material serves.
const test = require('node:test');
const assert = require('node:assert');
const { PATH_RE, fullAccess, readPrivate } = require('../../api/_lib/material.js');
const { FREE } = require('../../api/_lib/free-limit.js');

function fakeDb(student, teacher) {
  return {
    from(table) {
      const row = table === 'student_profiles' ? student : table === 'teacher_profiles' ? teacher : null;
      const q = { select() { return q; }, eq() { return q; }, maybeSingle() { return Promise.resolve({ data: row || null, error: null }); } };
      return q;
    },
  };
}

test('the owner\'s numbers: 3 units, 2 library texts, 3 exercise kinds, 1 test paper', () => {
  assert.deepStrictEqual(FREE, { bookUnits: 3, libraryPieces: 2, practiceBlocks: 3, testPapers: 1 });
});

test('only course material paths are served', () => {
  for (const ok of ['books/English-A1.en.json', 'library/English-B1-library.zh.json', 'tests/English-B2-first.json', 'practice/German-B1-types.de.json', 'audio/English-A1.json']) assert.ok(PATH_RE.test(ok), ok);
  for (const bad of ['books/../api/ai.js', '../private/material/books/x.json', 'books/English-A1.en.json.gz', 'level-test/English.json', 'books/English A1.en.json', '/books/English-A1.en.json']) assert.ok(!PATH_RE.test(bad), bad);
  assert.strictEqual(readPrivate('../../package.json'), null);
});

test('an active plan, a plan given until later, an approved teacher and an admin get everything', async () => {
  const user = { id: 'u', app_metadata: {} };
  assert.strictEqual(await fullAccess(fakeDb({ stripe_subscription_status: 'active' }), user), true);
  assert.strictEqual(await fullAccess(fakeDb({ plan_given_until: new Date(Date.now() + 86400000).toISOString() }), user), true);
  assert.strictEqual(await fullAccess(fakeDb(null, { status: 'approved' }), user), true);
  assert.strictEqual(await fullAccess(fakeDb(null, null), { id: 'a', app_metadata: { role: 'admin' } }), true);
});

test('free accounts, ended plans, pending teachers and user_metadata roles get the free part only', async () => {
  const user = { id: 'u', app_metadata: {} };
  assert.strictEqual(await fullAccess(fakeDb({ stripe_subscription_status: null }), user), false);
  assert.strictEqual(await fullAccess(fakeDb({ stripe_subscription_status: 'canceled', plan_given_until: '2026-01-01T00:00:00Z' }), user), false);
  assert.strictEqual(await fullAccess(fakeDb(null, { status: 'pending' }), user), false);
  assert.strictEqual(await fullAccess(fakeDb(null, null), { id: 'u', app_metadata: {}, user_metadata: { role: 'admin' } }), false);
  assert.strictEqual(await fullAccess(fakeDb(null, null), null), false);
});
