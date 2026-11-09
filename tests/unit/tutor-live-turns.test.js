// Run with: node --no-experimental-require-module --test 'tests/unit/*.test.js'
// The live call's turns (js/app/tutor-live.js turnTaker, api/_lib/tutor-live.js activityFor) and the speech check of
// each turn (api/_lib/tutor-pron.js forLive). Owner, 9 Nov 2026: the tutor heard words that were never said while the
// student was silent, and did not correct pronunciation mistakes.
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const win = {};
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../../js/app/tutor-live.js'), 'utf8'), { window: win });
const { turnTaker, wav16 } = win.AlimunTutorLive;
const live = require(path.join(__dirname, '../../api/_lib/tutor-live.js'));
const pron = require(path.join(__dirname, '../../api/_lib/tutor-pron.js'));

const F = () => new Array(320).fill(0.1);
const frames = (n, keep, v) => Array.from({ length: n }, () => ({ f: F(), keep, v }));
function run(seq, busy) {
  const step = turnTaker(1200, () => !!busy), out = [];
  seq.forEach((x) => step(x).forEach((o) => out.push(o)));
  return { starts: out.filter((o) => o.start).length, ends: out.filter((o) => o.end).length, audio: out.filter((o) => o.audio).length };
}

test('silence and noise between turns send nothing at all', () => {
  assert.deepStrictEqual(run(frames(200, false, false)), { starts: 0, ends: 0, audio: 0 });
});

test('a short sound the gate let through (a cough, a "hm") is dropped, not sent', () => {
  const r = run([].concat(frames(12, true, false), frames(6, true, true), frames(50, false, false)));
  assert.deepStrictEqual(r, { starts: 0, ends: 0, audio: 0 });
});

test('speech makes one turn, with its start kept, ended after the silence', () => {
  const r = run([].concat(frames(12, true, false), frames(25, true, true), frames(80, false, false)));
  assert.strictEqual(r.starts, 1);
  assert.strictEqual(r.ends, 1);
  assert.ok(r.audio >= 37 + 59, 'audio frames ' + r.audio);
});

test('a pause to find a word inside the turn does not end it', () => {
  const r = run([].concat(frames(20, true, true), frames(40, false, false), frames(20, true, true), frames(80, false, false)));
  assert.strictEqual(r.starts, 1);
  assert.strictEqual(r.ends, 1);
});

test('while the tutor speaks, a longer voice is needed to start a turn', () => {
  assert.strictEqual(run([].concat(frames(13, true, true), frames(50, false, false)), true).starts, 0);
  assert.strictEqual(run([].concat(frames(13, true, true), frames(50, false, false)), false).starts, 1);
});

test('a turn as WAV is 16 kHz mono 16-bit and passes the server check', () => {
  const w = wav16(new Array(16000).fill(0.2));
  const r = pron.readWav({ mime: 'audio/wav', audio: Buffer.from(w).toString('base64') });
  assert.ok(!r.reason, r.reason);
  assert.strictEqual(r.seconds, 1);
});

test('the pass asks for manual turns, with Google detection as the fallback', () => {
  assert.deepStrictEqual(live.activityFor('A2', true), { automaticActivityDetection: { disabled: true } });
  assert.strictEqual(live.activityFor('A2', false).automaticActivityDetection.silenceDurationMs, 1500);
  assert.strictEqual(live.silenceFor('C1'), 900);
});

test('the instructions trust the speech checker and never praise a wrong word', () => {
  const s = live.instructionsFor({ language: 'Spanish', level: 'A2', ui: 'en' }, '', 'lena', '', true);
  assert.match(s, /"les" for "lees"/);
  assert.match(s, /The speech checker/);
  assert.doesNotMatch(live.instructionsFor({ language: 'Spanish', level: 'A2', ui: 'en' }, '', 'lena', '', false), /The speech checker/);
});

const scored = (words, extra) => Object.assign({ sentence: 'lees libros', accuracy: 70, completeness: 100, words }, extra || {});
test('a word said differently becomes a note for the tutor; a clean turn says nothing', () => {
  const n = pron.forLive(scored([{ t: 'lees', s: 'diff', score: 41, sound: 'e' }, { t: 'libros', s: 'ok', score: 92 }]));
  assert.match(n, /"lees" \(41 of 100, the sound \/e\/\)/);
  assert.strictEqual(pron.forLive(scored([{ t: 'lees', s: 'ok', score: 90 }, { t: 'libros', s: 'ok', score: 92 }])), null);
});

test('another language or noise (the turn does not match its transcript) gives no note', () => {
  assert.strictEqual(pron.forLive(scored([{ t: 'lees', s: 'diff', score: 20 }], { accuracy: 30 })), null);
  assert.strictEqual(pron.forLive(scored([{ t: 'lees', s: 'diff', score: 50 }], { completeness: 40 })), null);
  assert.strictEqual(pron.cleanTurn('<>'), '');
  assert.strictEqual(pron.cleanTurn('¿Comes pan?'), '¿Comes pan?');
});
