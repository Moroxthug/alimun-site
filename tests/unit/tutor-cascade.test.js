// Run with: node --no-experimental-require-module --test 'tests/unit/*.test.js'
// The cascade call, the owner's test version (api/_lib/tutor-cascade.js): the voice chosen for each tutor and course
// language, the reply spoken in parallel pieces, and the live call's rules with the written tutor's JSON reply.
const test = require('node:test');
const assert = require('node:assert');
const path = require('path');
const cascade = require(path.join(__dirname, '../../api/_lib/tutor-cascade.js'));

const VOICES = [
  { name: 'en-US-AvaMultilingualNeural', gender: 'Female', locale: 'en-US' },
  { name: 'en-US-EmmaMultilingualNeural', gender: 'Female', locale: 'en-US' },
  { name: 'en-US-AndrewMultilingualNeural', gender: 'Male', locale: 'en-US' },
  { name: 'es-ES-ArabellaMultilingualNeural', gender: 'Female', locale: 'es-ES' },
  { name: 'es-ES-ElviraNeural', gender: 'Female', locale: 'es-ES' },
  { name: 'pt-PT-RaquelNeural', gender: 'Female', locale: 'pt-PT' },
];

test('a tutor gets a voice of their gender, native to the course language and multilingual when there is one', () => {
  assert.strictEqual(cascade.pickVoice(VOICES, 'lena', 'Spanish'), 'es-ES-ArabellaMultilingualNeural');
  assert.strictEqual(cascade.pickVoice(VOICES, 'arthur', 'Spanish'), 'en-US-AndrewMultilingualNeural');
  assert.strictEqual(cascade.pickVoice(VOICES, 'lena', 'English'), 'en-US-AvaMultilingualNeural');
  assert.strictEqual(cascade.pickVoice(VOICES, 'mei', 'English'), 'en-US-EmmaMultilingualNeural');
  assert.strictEqual(cascade.pickVoice([VOICES[5]], 'sofia', 'Portuguese'), 'pt-PT-RaquelNeural');
  assert.strictEqual(cascade.pickVoice([], 'lena', 'German'), null);
});

test('a reply is spoken in at most three pieces of whole sentences, without board markup', () => {
  const p = cascade.pieces('One. Two? Three! Four.');
  assert.strictEqual(p.length, 3);
  assert.strictEqual(p.join(' '), 'One. Two? Three! Four.');
  assert.deepStrictEqual(cascade.pieces('No full stop'), ['No full stop']);
  assert.strictEqual(cascade.speakable('Say **ich bin** <b>now</b>'), 'Say ich bin bnow/b');
  assert.match(cascade.ssml('Tom & "Jerry"', 'v', 'en-US', true), /Tom &amp; &quot;Jerry&quot;/);
  assert.match(cascade.ssml('x', 'v', 'en-US', true), /rate="-12%"/);
  assert.doesNotMatch(cascade.ssml('x', 'v', 'en-US', false), /prosody/);
});

test('the call keeps the live rules and answers in the written tutor JSON, without Google tool names', () => {
  const s = cascade.systemFor({ language: 'French', level: 'A2', ui: 'ar' }, 'Name: Sam', 'omar', true, 600);
  assert.match(s, /Teach, then involve the student/);
  assert.match(s, /about 10 minutes of tutor time left/);
  assert.match(s, /Reply with one JSON object only/);
  assert.match(s, /"say_aloud"/);
  assert.match(s, /no \*\* or other markup/);
  assert.doesNotMatch(s, /board_write|set_exercise|say_this/);
});
