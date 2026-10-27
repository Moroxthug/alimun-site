// Run with: node --no-experimental-require-module --test 'tests/unit/*.test.js'
// Spanish accents in typed answers (js/app/exercises.js accepts): owner, 27 Oct 2026. Up to B1 an answer without
// written accents counts as right; from B2 it counts as wrong ("almost"); other languages and ñ are unchanged.
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const win = {};
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../../js/app/exercises.js'), 'utf8'), { window: Object.assign(win, { addEventListener() {} }), document: { addEventListener() {} } });
const A = { t: (k) => k, data: () => ({ profile: {} }), Cast: { book: () => '' } };
function result(lang, level, answers, typed) {
  const S = win.AlimunEx.create({ A, blocks: [{ t: 'ex', kind: 'gap', h: '', items: [{ q: 'La ___', a: answers, why: '' }] }], test: true, level, ta: ' lang="' + lang + '"', root: () => null });
  S.state[0].items[0].value = typed;
  S.submit();
  return S.results()[0].ok;
}

test('Spanish A1 to B1: an answer without accents counts', () => {
  for (const lv of ['A1', 'A2', 'B1']) assert.strictEqual(result('es', lv, ['razón'], 'razon'), true, lv);
  assert.strictEqual(result('es', 'A2', ['trabajé'], 'trabaje'), true);
  assert.strictEqual(result('es', 'B1', ['pingüino'], 'pinguino'), true);
});
test('Spanish B2 and up: without accents is wrong', () => {
  assert.strictEqual(result('es', 'B2', ['razón'], 'razon'), false);
  assert.strictEqual(result('es', 'C1', ['razón'], 'razón'), true);
});
test('ñ is a letter, not an accent', () => {
  assert.strictEqual(result('es', 'A1', ['año'], 'ano'), false);
});
test('other languages are unchanged', () => {
  assert.strictEqual(result('de', 'A1', ['schön'], 'schon'), false);
  assert.strictEqual(result('fr', 'A1', ['été'], 'ete'), false);
});
