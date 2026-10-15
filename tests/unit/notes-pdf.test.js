// Run with: node --no-experimental-require-module --test 'tests/unit/*.test.js'
// The flag mimics a runtime without require(esm), where a top-level
// require('@react-pdf/renderer') crashed /api/generate-notes-pdf at cold start.
const test = require('node:test');
const assert = require('node:assert');

test('notes PDF handler loads under strict CommonJS', () => {
  const handler = require('../../api/generate-notes-pdf.js');
  assert.strictEqual(typeof handler, 'function');
});

test('rejects a missing session_notes_id with 400 before touching the PDF stack', async () => {
  const handler = require('../../api/generate-notes-pdf.js');
  let status;
  const res = { setHeader() {}, status(c) { status = c; return this; }, json() { return this; }, end() { return this; } };
  await handler({ method: 'POST', headers: {}, body: {} }, res);
  assert.strictEqual(status, 400);
});

test('renders a session notes PDF', async () => {
  const { _test } = require('../../api/generate-notes-pdf.js');
  await _test.loadPdfKit();
  const out = await _test.renderPdf({
    sessionDate: '2026-10-15', teacherName: 'Teacher', cohortLang: 'English', cohortLevel: 'B1',
    cohortGoal: 'General', sessionNum: 3, vocabulary: [{ word: 'w', definition: 'd', example: 'e' }],
    grammarTitle: 'Present perfect', grammarExplanation: 'Explanation', exercises: '1. Fill the gaps',
    homework: 'Read page 4', dueDate: '2026-10-20', teacherNote: 'Note', sessionNotesId: '00000000-0000-0000-0000-000000000000',
  });
  let bytes;
  if (Buffer.isBuffer(out)) bytes = out;
  else { const parts = []; for await (const c of out) parts.push(c); bytes = Buffer.concat(parts); }
  assert.ok(bytes.length > 1000, `PDF too small: ${bytes.length}`);
  assert.strictEqual(bytes.subarray(0, 5).toString(), '%PDF-');
});
