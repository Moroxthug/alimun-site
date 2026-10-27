// Run with: node --no-experimental-require-module --test 'tests/unit/*.test.js'
// The live tutor's setup (api/_lib/tutor-live.js): speaking at the student's level, waiting for a learner who pauses
// (Google's voice activity detection, less sensitive than its defaults) and honest pronunciation checks on the card.
const test = require('node:test');
const assert = require('node:assert');
const path = require('path');
const live = require(path.join(__dirname, '../../api/_lib/tutor-live.js'));

const session = (level, extra) => Object.assign({ language: 'Spanish', level, ui: 'en' }, extra || {});

test('a beginner gets short everyday sentences and English help, whatever the goals in the brief', () => {
  const s = live.instructionsFor(session('A2'), 'Goal: Spanish for work', 'lena', '', true);
  assert.match(s, /beginner \(A2\)/);
  assert.match(s, /5 to 8 words/);
  assert.match(s, /No professional, abstract or idiomatic language/);
  assert.match(s, /meaning in English/);
  assert.doesNotMatch(s, /natural pace/);
});

test('each level speaks differently', () => {
  assert.match(live.levelRules('B1', 'Spanish', 'English'), /up to about 15 words/);
  assert.match(live.levelRules('C1', 'Spanish', 'English'), /natural pace/);
  assert.match(live.levelRules(null, 'Spanish', 'English'), /not known/);
});

test('turn-taking and honest pronunciation are in the instructions', () => {
  const s = live.instructionsFor(session('B1'), '', 'mei', '', true);
  assert.match(s, /do not change the subject/);
  assert.match(s, /Never call an attempt good, correct or great when a word or sound in it was wrong/);
  assert.match(s, /for the rest of the call/);
  assert.match(s, /say_this and tell them to tap the record button/);
  const noCard = live.instructionsFor(session('B1'), '', 'mei', '', false);
  assert.doesNotMatch(noCard, /say_this/);
});

test('the pass waits longer after a learner stops speaking and ignores small sounds', () => {
  const a2 = live.setupFor('x', 'lena', '', true, 'A2').realtimeInputConfig.automaticActivityDetection;
  assert.strictEqual(a2.startOfSpeechSensitivity, 'START_SENSITIVITY_LOW');
  assert.strictEqual(a2.endOfSpeechSensitivity, 'END_SENSITIVITY_LOW');
  assert.strictEqual(a2.silenceDurationMs, 1500);
  assert.strictEqual(live.activityFor('B1').automaticActivityDetection.silenceDurationMs, 1200);
  assert.strictEqual(live.activityFor('C1').automaticActivityDetection.silenceDurationMs, 900);
  assert.strictEqual(live.activityFor(null).automaticActivityDetection.silenceDurationMs, 900);
});

test('if Google refuses the voice activity settings, the pass is asked for again without them', async () => {
  const real = global.fetch, sent = [];
  process.env.GOOGLE_AI_API_KEY = process.env.GOOGLE_AI_API_KEY || 'test-key';
  global.fetch = async (url, opts) => {
    const b = JSON.parse(opts.body); sent.push(b);
    if (b.bidiGenerateContentSetup.realtimeInputConfig) return { ok: false, status: 400, json: async () => ({ error: { message: 'Invalid JSON payload received. Unknown name "realtime_input_config"' } }) };
    return { ok: true, status: 200, json: async () => ({ name: 'auth_tokens/abc' }) };
  };
  try {
    const pass = await live.token({ instructions: 'x', tutor: 'lena', handle: '', seconds: 300, pronDrill: true, level: 'A2' });
    assert.strictEqual(pass.token, 'auth_tokens/abc');
    assert.strictEqual(sent.length, 2);
  } finally { global.fetch = real; }
});
