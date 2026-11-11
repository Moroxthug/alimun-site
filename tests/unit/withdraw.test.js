// Run with: node --no-experimental-require-module --test 'tests/unit/*.test.js'
// The online withdrawal function (api/withdraw.js): checking a submission and labelling the purchase.
const test = require('node:test');
const assert = require('node:assert');
const path = require('path');

const sbPath = require.resolve('@supabase/supabase-js', { paths: [path.join(__dirname, '../../api')] });
require.cache[sbPath] = { id: sbPath, filename: sbPath, loaded: true, exports: { createClient: () => ({}) } };
delete process.env.STRIPE_SECRET_KEY;
const { validate, labelOf, clean } = require('../../api/withdraw.js');

const contracts = [
  { ref: 'sub_123', kind: 'subscription', name: 'Level pack', amount: 6400, currency: 'eur', date: '2026-11-02T10:00:00.000Z' },
  { ref: 'pi_456', kind: 'payment', name: 'tutor_time', amount: 299, currency: 'eur', date: '2026-11-05T09:30:00.000Z' },
];

test('a known purchase is accepted with its details', () => {
  const r = validate({ contractRef: 'sub_123', name: '  Sara  Benali ', email: 'SARA@Example.com', reason: 'Changed plans' }, contracts);
  assert.strictEqual(r.ok, true);
  assert.strictEqual(r.value.name, 'Sara Benali');
  assert.strictEqual(r.value.email, 'sara@example.com');
  assert.strictEqual(r.value.contract.ref, 'sub_123');
  assert.strictEqual(r.value.reason, 'Changed plans');
});

test('a purchase that is not on the account is refused', () => {
  assert.deepStrictEqual(validate({ contractRef: 'sub_other', name: 'Sara' }, contracts), { ok: false, error: 'contract_unknown' });
});

test('without a listed purchase, a description is required', () => {
  assert.deepStrictEqual(validate({ name: 'Sara' }, contracts), { ok: false, error: 'contract_required' });
  const r = validate({ name: 'Sara', otherText: 'Pack paid on 12 January' }, []);
  assert.strictEqual(r.ok, true);
  assert.strictEqual(r.value.contract.kind, 'other');
  assert.strictEqual(r.value.contract.ref, null);
});

test('name is required and email must be valid when given', () => {
  assert.deepStrictEqual(validate({ contractRef: 'sub_123', name: '   ' }, contracts), { ok: false, error: 'name_required' });
  assert.deepStrictEqual(validate({ contractRef: 'sub_123', name: 'Sara', email: 'not-an-email' }, contracts), { ok: false, error: 'email_invalid' });
  assert.strictEqual(validate({ contractRef: 'sub_123', name: 'Sara' }, contracts).value.email, '');
});

test('text is cleaned of markup, control characters and length', () => {
  assert.strictEqual(clean('<b>Sara</b>\n\tB', 120), 'b Sara /b B');
  assert.strictEqual(clean('x'.repeat(300), 200).length, 200);
  const r = validate({ contractRef: 'sub_123', name: 'Sara', reason: 'y'.repeat(2000) }, contracts);
  assert.strictEqual(r.value.reason.length, 1000);
});

test('labels for the owner name the purchase, amount and day', () => {
  assert.strictEqual(labelOf(contracts[0]), 'Level pack 64.00 EUR 2026-11-02');
  assert.strictEqual(labelOf(contracts[1]), 'tutor_time 2.99 EUR 2026-11-05');
  assert.strictEqual(labelOf({ kind: 'other', label: 'Pack paid on 12 January' }), 'Pack paid on 12 January');
});
