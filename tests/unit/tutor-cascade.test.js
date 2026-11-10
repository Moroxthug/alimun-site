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
  const s = cascade.systemFor({ language: 'French', level: 'A2', ui: 'ar' }, 'Name: Sam', 'omar', true);
  assert.match(s, /Teach, then involve the student/);
  assert.match(s, /the time left is told to you in a note with each turn/);
  assert.match(s, /never treat British and American spellings/);
  assert.match(s, /You cannot hear how a word was pronounced/);
  assert.strictEqual(s, cascade.systemFor({ language: 'French', level: 'A2', ui: 'ar' }, 'Name: Sam', 'omar', true), 'the same every turn');
  assert.match(s, /Reply with one JSON object only/);
  assert.match(s, /"say_aloud"/);
  assert.match(s, /no \*\* or other markup/);
  assert.doesNotMatch(s, /board_write|set_exercise|say_this/);
});

const voice = require(path.join(__dirname, '../../api/_lib/tutor-voice.js'));

test('Whisper words made up from silence are dropped in the call, kept elsewhere', () => {
  const d = { text: 'Thank you. I have been to Switzerland.', segments: [
    { text: ' Thank you.', no_speech_prob: 0.8, avg_logprob: -0.9, compression_ratio: 1 },
    { text: ' I have been to Switzerland.', no_speech_prob: 0.05, avg_logprob: -0.2, compression_ratio: 1.1 }] };
  assert.strictEqual(voice.heardText(d, true), 'I have been to Switzerland.');
  assert.strictEqual(voice.heardText(d, false), 'Thank you. I have been to Switzerland.');
  assert.strictEqual(voice.heardText({ text: ' Thank you.', segments: [d.segments[0]] }, true), '');
});

test('the time left is a note, and a turn costs less when Google has read most of it before', () => {
  assert.strictEqual(cascade.timeNote(130), 'Time left in this call: about 2 minutes.');
  assert.strictEqual(cascade.timeNote(20), 'Time left in this call: under a minute.');
  const fresh = cascade.callCost('gemini-3.8-flash', { promptTokenCount: 4000, candidatesTokenCount: 150 });
  const cached = cascade.callCost('gemini-3.8-flash', { promptTokenCount: 4000, cachedContentTokenCount: 3500, candidatesTokenCount: 150 });
  assert.ok(Math.abs(fresh - 0.0035625) < 1e-9, String(fresh));
  assert.ok(cached < fresh / 2, cached + ' vs ' + fresh);
});

function fakeSupabase() {
  const rows = [];
  const chain = { eq() { return chain; }, like() { return chain; }, gte() { return chain; }, order() { return chain; }, select() { return chain; },
    range() { return Promise.resolve({ data: [] }); }, single() { return Promise.resolve({ data: { id: 1 } }); }, then(f) { return Promise.resolve({}).then(f); } };
  return { rows, from() { return { insert(r) { rows.push(r); return chain; }, update(r) { rows.push(r); return chain; }, select() { return chain; }, delete() { return chain; } }; } };
}
test('Gemini answers the call; a model without the thinking setting is asked again without it', async () => {
  const real = global.fetch, sent = [];
  process.env.GOOGLE_AI_API_KEY = 'test-key';
  global.fetch = async (url, opts) => {
    const b = JSON.parse(opts.body); sent.push(b);
    if (b.generationConfig.thinkingConfig) return { ok: false, status: 400, json: async () => ({ error: { message: 'thinking_level is not supported' } }) };
    return { ok: true, status: 200, json: async () => ({ candidates: [{ content: { parts: [{ text: '{"say":"Hello","board":[]}' }] } }], usageMetadata: { promptTokenCount: 100, candidatesTokenCount: 10 } }) };
  };
  try {
    const out = await cascade.think(fakeSupabase(), 'u1', 'system', [{ role: 'user', content: 'hi' }]);
    assert.deepStrictEqual(out.raw, { say: 'Hello', board: [] });
    assert.strictEqual(out.model, cascade.CALL_MODEL);
    assert.strictEqual(sent.length, 2);
  } finally { global.fetch = real; }
});

test('the spoken text is read from the reply while it streams, with escapes decoded', () => {
  assert.deepStrictEqual(cascade.sayOf('{"say": "Hello, Youssef. Let\\u2019s look at \\"been\\". No'), { text: 'Hello, Youssef. Let’s look at "been". No', closed: false });
  assert.deepStrictEqual(cascade.sayOf('{"say":"Done.","board":[]}'), { text: 'Done.', closed: true });
  assert.deepStrictEqual(cascade.sayOf('{"board":[]'), { text: '', closed: false });
  assert.deepStrictEqual(cascade.sayOf('{"say":"Half \\'), { text: 'Half ', closed: false });
});

test('the first sentence is spoken on its own, then whole sentences, then the rest once complete', () => {
  const t = 'Hello, Youssef. Let us look at been. Now';
  assert.strictEqual(cascade.cutAt(t, 0, false), 15);
  assert.strictEqual(cascade.cutAt(t, 15, false), 36);
  assert.strictEqual(cascade.cutAt(t, 36, false), -1);
  assert.strictEqual(cascade.cutAt(t, 36, true), 40);
  assert.strictEqual(cascade.cutAt('Hi. Ok', 0, false), -1, 'too short to start on');
});

test('Gemini streams: what is said arrives piece by piece, the reply is parsed at the end', async () => {
  const real = global.fetch;
  process.env.GOOGLE_AI_API_KEY = 'test-key';
  const enc = new TextEncoder();
  const sse = ['{"say":"Good. You used ', 'the past participle. ', 'Now try another.","board":[{"op":"title","text":"Have you ever"}]}']
    .map((x, i) => 'data: ' + JSON.stringify(Object.assign({ candidates: [{ content: { parts: [{ text: x }] } }] }, i === 2 ? { usageMetadata: { promptTokenCount: 3000, cachedContentTokenCount: 2500, candidatesTokenCount: 40 } } : {})) + '\r\n\r\n');
  global.fetch = async () => ({ ok: true, status: 200, body: (async function* () { for (const x of sse) yield enc.encode(x); })() });
  const said = [];
  try {
    const out = await cascade.streamThink(fakeSupabase(), 'u1', 'system', [{ role: 'user', content: 'hi' }], (text, closed) => said.push([text, closed]));
    assert.strictEqual(out.raw.say, 'Good. You used the past participle. Now try another.');
    assert.strictEqual(out.raw.board[0].text, 'Have you ever');
    assert.deepStrictEqual(said[0], ['Good. You used ', false]);
    assert.deepStrictEqual(said[said.length - 1], ['Good. You used the past participle. Now try another.', true]);
  } finally { global.fetch = real; }
});
