// Run with: node --no-experimental-require-module --test 'tests/unit/*.test.js'
// /api/speech: finding the audio in either Gemini response shape, WAV output, and the status action.
const test = require('node:test');
const assert = require('node:assert');
const handler = require('../../api/speech.js');
const { findAudio, toWav, speak } = handler._test;

const pcm = Buffer.alloc(480, 1);
function res() {
  const r = { code: 0, body: null, headers: {} };
  r.status = (c) => { r.code = c; return r; };
  r.json = (b) => { r.body = b; return r; };
  r.send = (b) => { r.body = b; return r; };
  r.setHeader = (k, v) => { r.headers[k] = v; };
  return r;
}

test('finds audio in an Interactions response and wraps raw PCM in a WAV header', () => {
  const a = findAudio({ steps: [{ type: 'model_output', content: [{ type: 'audio', data: pcm.toString('base64'), mime_type: 'audio/l16' }] }] });
  assert.ok(a);
  const w = toWav(a);
  assert.strictEqual(w.slice(0, 4).toString(), 'RIFF');
  assert.strictEqual(w.readUInt32LE(24), 24000);
  assert.strictEqual(w.length, 44 + pcm.length);
});

test('finds audio in a generateContent response and keeps the sample rate from the mime type', () => {
  const a = findAudio({ candidates: [{ content: { parts: [{ inlineData: { mimeType: 'audio/L16;codec=pcm;rate=16000', data: pcm.toString('base64') } }] } }] });
  assert.strictEqual(toWav(a).readUInt32LE(24), 16000);
});

test('a WAV from the API is passed through unchanged', () => {
  const w = handler._test.wav(pcm, 24000);
  assert.deepStrictEqual(toWav({ data: w.toString('base64'), mime: 'audio/wav' }), w);
});

test('a single voice falls back to generateContent when the Interactions call fails', async () => {
  const calls = [];
  global.fetch = async (url, opt) => {
    calls.push({ url, body: JSON.parse(opt.body) });
    if (url.endsWith('/interactions')) return { ok: false, status: 404, text: async () => '{"error":"not found"}' };
    return { ok: true, status: 200, text: async () => JSON.stringify({ candidates: [{ content: { parts: [{ inlineData: { mimeType: 'audio/L16;rate=24000', data: pcm.toString('base64') } }] } }] }) };
  };
  const out = await speak({ model: 'gemini-3.8-flash-tts', turns: [{ text: 'Hallo' }], voices: { _: 'Orus' }, style: '' });
  assert.strictEqual(out.slice(0, 4).toString(), 'RIFF');
  assert.strictEqual(calls.length, 2);
  assert.strictEqual(calls[1].body.generationConfig.speechConfig.voiceConfig.prebuiltVoiceConfig.voiceName, 'Orus');
});

test('a dialogue is sent without "mode", and spoken line by line if the two-speaker request is refused', async () => {
  const calls = [];
  global.fetch = async (url, opt) => {
    const body = JSON.parse(opt.body);
    calls.push(body);
    if (url.endsWith('/interactions') && !Array.isArray(body.generation_config.speech_config)) return { ok: false, status: 400, text: async () => '{"error":"no"}' };
    const voice = body.generation_config.speech_config[0].voice;
    return { ok: true, status: 200, text: async () => JSON.stringify({ steps: [{ content: [{ type: 'audio', data: Buffer.alloc(voice === 'Charon' ? 100 : 200, 1).toString('base64'), mime_type: 'audio/l16' }] }] }) };
  };
  const out = await speak({ model: 'gemini-3.8-flash-tts', turns: [{ speaker: 'A', text: 'Hallo' }, { speaker: 'B', text: 'Hi' }], voices: { A: 'Charon', B: 'Orus' }, style: '' });
  assert.strictEqual(calls[0].generation_config.speech_config.mode, undefined);
  assert.deepStrictEqual(calls[0].generation_config.speech_config.speakers.map((x) => x.voice), ['Charon', 'Orus']);
  assert.deepStrictEqual(calls.slice(1).map((c) => c.generation_config.speech_config[0].voice), ['Charon', 'Orus']);
  const gap = Math.round(24000 * 0.35) * 2;
  assert.strictEqual(out.length, 44 + 100 + gap + 200);
});

test('status says whether the key is set, and sample refuses without it', async () => {
  delete process.env.GOOGLE_AI_API_KEY;
  const r = res();
  await handler({ query: { action: 'status' }, method: 'GET', headers: {} }, r);
  assert.strictEqual(r.body.configured, false);
  const r2 = res();
  await handler({ query: { action: 'sample' }, method: 'POST', headers: {} }, r2);
  assert.strictEqual(r2.code, 503);
});

test('MP3 encoding of a WAV: a smaller file and the length in seconds', async () => {
  const pcm2 = Buffer.alloc(24000 * 2 * 2);
  for (let i = 0; i < pcm2.length / 2; i++) pcm2.writeInt16LE(Math.round(Math.sin(i / 8) * 6000), i * 2);
  const m = await handler._test.mp3(handler._test.wav(pcm2, 24000));
  assert.strictEqual(m.seconds, 2);
  assert.ok(m.buf.length > 1000 && m.buf.length < pcm2.length / 4);
  assert.ok(m.buf[0] === 0xff || m.buf.slice(0, 3).toString() === 'ID3');
});

test('a 429 from Google stops at once with the wait it asks for, without trying the fallback', async () => {
  let calls = 0;
  global.fetch = async () => { calls++; return { ok: false, status: 429, text: async () => '{"error":{"message":"Rate limit exceeded ... Please retry in 42s or upgrade"}}' }; };
  await assert.rejects(speak({ model: 'gemini-3.8-flash-tts', turns: [{ text: 'Hallo' }], voices: { _: 'Orus' }, style: '' }), (e) => e.rateLimited && e.retryAfter === 42);
  assert.strictEqual(calls, 1);
});
