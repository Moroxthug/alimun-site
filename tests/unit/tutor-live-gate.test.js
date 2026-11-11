// Run with: node --no-experimental-require-module --test 'tests/unit/*.test.js'
// The live call's speech gate (js/app/tutor-live.js speechGate): what reaches Google from the microphone. Taps and
// rustling (the phone touched or moved) were transcribed as words; only sound that lasts like a voice gets through,
// with the start of the word kept, and a louder voice is needed while the tutor is speaking.
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const win = {};
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../../js/app/tutor-live.js'), 'utf8'), { window: win });
const { speechGate } = win.AlimunTutorLive;

const RATE = 16000, FRAME = 320;
let seed = 7;
function rnd() { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648 * 2 - 1; }
const silence = (ms) => new Float32Array(RATE * ms / 1000).map(() => rnd() * 0.0005);
const hiss = (ms, amp) => new Float32Array(RATE * ms / 1000).map(() => rnd() * amp);
function vowel(ms, amp) {
  return new Float32Array(RATE * ms / 1000).map((_, i) => {
    let v = 0; for (let h = 1; h <= 12; h++) v += Math.sin(2 * Math.PI * 150 * h * i / RATE) / h;
    return v * amp / 2;
  });
}
function tap() { return new Float32Array(RATE * 0.04).map((_, i) => Math.exp(-i / 60) * 0.7 * (i % 2 ? 1 : -1)); }
function join(...parts) { const n = parts.reduce((a, p) => a + p.length, 0), out = new Float32Array(n); let o = 0; parts.forEach((p) => { out.set(p, o); o += p.length; }); return out; }

/* Runs a signal through a gate; returns the kept milliseconds and the first kept sample's position */
function run(signal, busy) {
  const gate = speechGate(() => !!busy), out = [];
  const padded = join(signal, silence(1000));
  for (let i = 0; i + FRAME <= padded.length; i += FRAME) gate(Array.from(padded.subarray(i, i + FRAME))).forEach((x) => out.push(x));
  const firstKept = out.findIndex((x) => x.keep);
  return { keptMs: out.filter((x) => x.keep).length * 20, firstKeptMs: firstKept < 0 ? -1 : firstKept * 20 };
}

test('silence and a tap on the phone send nothing', () => {
  assert.strictEqual(run(silence(1500)).keptMs, 0);
  assert.strictEqual(run(join(silence(800), tap(), silence(400), tap(), silence(800))).keptMs, 0);
});

test('rustling (the phone moving in the hand) sends nothing', () => {
  assert.strictEqual(run(join(silence(800), hiss(600, 0.08), silence(500))).keptMs, 0);
});

test('a spoken vowel gets through, from its start', () => {
  const r = run(join(silence(800), vowel(500, 0.1), silence(300)));
  assert.ok(r.keptMs >= 500, 'kept ' + r.keptMs);
  assert.ok(r.firstKeptMs <= 800, 'first kept at ' + r.firstKeptMs);
});

test('a word starting with a hissing sound keeps the hiss', () => {
  const r = run(join(silence(800), hiss(100, 0.05), vowel(300, 0.1)));
  assert.ok(r.firstKeptMs <= 800, 'first kept at ' + r.firstKeptMs);
});

test('while the tutor speaks, a quiet sound is ignored and a clear voice gets through', () => {
  assert.strictEqual(run(join(silence(800), vowel(500, 0.012), silence(300)), true).keptMs, 0);
  assert.ok(run(join(silence(800), vowel(500, 0.1), silence(300)), true).keptMs >= 500);
});

test('a short answer like "sí" gets through', () => {
  assert.ok(run(join(silence(800), hiss(80, 0.05), vowel(140, 0.1), silence(300))).keptMs >= 200);
  assert.ok(run(join(silence(800), vowel(160, 0.1), silence(300))).keptMs >= 160);
});
