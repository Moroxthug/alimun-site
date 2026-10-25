/**
 * ============================================================
 *  ALIMUN — /api/speech
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Voices for the course material (docs/DASHBOARD_PLAN.md, step 5).
 *    ?action=status  (GET)  — { configured } : is GOOGLE_AI_API_KEY set. No cost.
 *    ?action=generate (POST, admin JWT) — { book }: makes the next missing course audio
 *                     files of a book (plan /data/audio/<book>.json, site/src/data/books/audio.js)
 *                     as MP3 in Supabase Storage course-audio/<book>/<hash>.mp3, with
 *                     <book>/manifest.json listing the files made; about 40 s per call, one request
 *                     every 6.7 s (TTS_PER_MINUTE, default 9) for Google's per-minute limit; a 429 ends the
 *                     call with retryAfter (seconds) for the admin page to wait.
 *    ?action=sample  (POST, admin JWT) — one sentence, or a two-speaker dialogue,
 *                     spoken by Gemini text-to-speech; returns audio/wav.
 *        { text, voice, model?: 'flash' | 'lite', style? }
 *        { lines: [{ speaker: 'A' | 'B', text }], voices: { A, B }, model?, style? }
 *  Admin only for now: it is how the owner picks the voices. Course audio will
 *  be generated once per sentence and stored, never spoken live for students.
 *  The key is GOOGLE_AI_API_KEY (not GEMINI_API_KEY, which would move the
 *  text features in api/ai.js from Groq to Gemini).
 * ============================================================
 */

const { createClient } = require('@supabase/supabase-js');

const MODELS = { flash: 'gemini-3.8-flash-tts', lite: 'gemini-3.8-flash-lite-tts' };
const VOICES = ['Zephyr', 'Puck', 'Charon', 'Kore', 'Fenrir', 'Leda', 'Orus', 'Aoede', 'Callirrhoe', 'Autonoe', 'Enceladus', 'Iapetus',
  'Umbriel', 'Algieba', 'Despina', 'Erinome', 'Algenib', 'Rasalgethi', 'Laomedeia', 'Achernar', 'Alnilam', 'Schedar', 'Gacrux',
  'Pulcherrima', 'Achird', 'Zubenelgenubi', 'Vindemiatrix', 'Sadachbia', 'Sadaltager', 'Sulafat'];
const MAX_TEXT = 400;
const BASE = 'https://generativelanguage.googleapis.com/v1beta';

/* A small per-instance limit, on top of the admin check */
const recent = [];
function tooMany() {
  const now = Date.now();
  while (recent.length && recent[0] < now - 60000) recent.shift();
  if (recent.length >= 40) return true;
  recent.push(now);
  return false;
}

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
}

function parseBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  try { return JSON.parse(req.body || '{}'); } catch (e) { return null; }
}

function cleanText(s) {
  return String(s || '').replace(/[\u0000-\u001f]+/g, ' ').trim().slice(0, MAX_TEXT);
}

/* 16-bit mono PCM -> WAV */
function wav(pcm, rate) {
  const h = Buffer.alloc(44);
  h.write('RIFF', 0); h.writeUInt32LE(36 + pcm.length, 4); h.write('WAVE', 8);
  h.write('fmt ', 12); h.writeUInt32LE(16, 16); h.writeUInt16LE(1, 20); h.writeUInt16LE(1, 22);
  h.writeUInt32LE(rate, 24); h.writeUInt32LE(rate * 2, 28); h.writeUInt16LE(2, 32); h.writeUInt16LE(16, 34);
  h.write('data', 36); h.writeUInt32LE(pcm.length, 40);
  return Buffer.concat([h, pcm]);
}

/* The audio part of a response, wherever the API puts it: { type: 'audio', data, mime_type } (Interactions)
   or { inlineData: { mimeType, data } } (generateContent) */
function findAudio(node) {
  if (!node || typeof node !== 'object') return null;
  if (node.inlineData && node.inlineData.data) return { data: node.inlineData.data, mime: node.inlineData.mimeType || '' };
  if (node.type === 'audio' && node.data) return { data: node.data, mime: node.mime_type || node.mimeType || '', rate: node.sample_rate };
  for (const k of Object.keys(node)) {
    const found = findAudio(node[k]);
    if (found) return found;
  }
  return null;
}
function toWav(a) {
  const buf = Buffer.from(a.data, 'base64');
  if (buf.slice(0, 4).toString() === 'RIFF') return buf;
  const m = /rate=(\d+)/.exec(a.mime);
  return wav(buf, +(m && m[1]) || a.rate || 24000);
}

async function callJSON(url, body) {
  const r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-goog-api-key': process.env.GOOGLE_AI_API_KEY }, body: JSON.stringify(body) });
  const text = await r.text();
  let json = null;
  try { json = JSON.parse(text); } catch (e) { /* not JSON */ }
  return { ok: r.ok, status: r.status, json, text };
}

/* PCM samples of a WAV (the "data" chunk) */
function pcmOf(w) {
  let at = 12;
  while (at + 8 <= w.length) {
    const id = w.toString('ascii', at, at + 4), size = w.readUInt32LE(at + 4);
    if (id === 'data') return { pcm: w.slice(at + 8, at + 8 + size), rate: w.readUInt32LE(24) };
    at += 8 + size + (size % 2);
  }
  return { pcm: w.slice(44), rate: 24000 };
}

/* Google's rate limit (Tier 1: 10 requests a minute for the TTS models): stop at once and say when to try again,
   instead of spending the next request on the fallback */
function limited(r) {
  if (r.status !== 429) return;
  const m = /retry in ([\d.]+)\s*s/i.exec(r.text || '');
  const err = new Error('rate_limited');
  err.rateLimited = true;
  let msg = '';
  try { msg = JSON.parse(r.text).error.message; } catch (e) { msg = String(r.text || ''); }
  err.limitMessage = String(msg).slice(0, 300);
  err.retryAfter = Math.min(120, Math.ceil(m ? +m[1] : 60));
  throw err;
}

/* One request: Interactions API first, generateContent as a fallback (single voice) */
async function once({ model, turns, voices, style }, errors) {
  const multi = turns.length > 1 || !!turns[0].speaker;
  const interaction = {
    model,
    input: [{ type: 'user_input', content: turns.map((t) => {
      const meta = { type: 'speech_metadata' };
      if (t.speaker) meta.speaker = t.speaker;
      if (style) meta.style = style;
      return { type: 'text', text: t.text, annotations: [meta] };
    }) }],
    response_format: { type: 'audio', mime_type: 'audio/wav' },
    generation_config: {
      speech_config: multi
        ? { speakers: Object.keys(voices).map((s) => ({ speaker: s, voice: voices[s] })) }
        : [{ voice: voices._ }],
    },
  };
  let r = await callJSON(BASE + '/interactions', interaction);
  let audio = r.ok && findAudio(r.json);
  if (audio) return toWav(audio);
  limited(r);
  errors.push('interactions ' + r.status + ' ' + String(r.text).slice(0, 300));
  if (multi) return null;

  const prompt = (style ? 'Say in a ' + style + ' way:\n' : '') + turns[0].text;
  r = await callJSON(BASE + '/models/' + model + ':generateContent', {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { responseModalities: ['AUDIO'], speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voices._ } } } },
  });
  audio = r.ok && findAudio(r.json);
  if (audio) return toWav(audio);
  limited(r);
  errors.push('generateContent ' + r.status + ' ' + String(r.text).slice(0, 300));
  return null;
}

/* A dialogue goes in one two-speaker request; if that is refused, each line is spoken with its own voice and joined */
async function speak({ model, turns, voices, style }) {
  const errors = [];
  let out = await once({ model, turns, voices, style }, errors);
  if (!out && turns[0].speaker) {
    const parts = [];
    for (const t of turns) {
      const w = await once({ model, turns: [{ text: t.text }], voices: { _: voices[t.speaker] }, style }, errors);
      if (!w) { parts.length = 0; break; }
      parts.push(pcmOf(w));
    }
    if (parts.length) {
      const rate = parts[0].rate, gap = Buffer.alloc(Math.round(rate * 0.35) * 2);
      out = wav(Buffer.concat(parts.flatMap((p, i) => (i ? [gap, p.pcm] : [p.pcm]))), rate);
    }
  }
  if (out) return out;
  const err = new Error('Speech request failed');
  err.detail = errors;
  throw err;
}

/* ---------- Course audio: files for the sentences of a book ---------- */
const BUCKET = 'course-audio';
/* Milliseconds between two requests to Google: 6.5 s keeps under 10 a minute (raise TTS_PER_MINUTE after a tier upgrade) */
const GAP = Math.ceil(60000 / Math.max(1, +(process.env.TTS_PER_MINUTE || 9)));
function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }
const BOOK_RE = /^[A-Z][a-z]+-[ABC][12](-[a-z]+)?$/;

async function mp3(w) {
  const { pcm, rate } = pcmOf(w);
  const lame = await import('@breezystack/lamejs');
  const samples = new Int16Array(pcm.length >> 1);
  for (let i = 0; i < samples.length; i++) samples[i] = pcm.readInt16LE(i * 2);
  const enc = new lame.Mp3Encoder(1, rate, 40);
  const out = [];
  for (let i = 0; i < samples.length; i += 1152 * 20) { const b = enc.encodeBuffer(samples.subarray(i, i + 1152 * 20)); if (b.length) out.push(Buffer.from(b)); }
  const end = enc.flush();
  if (end.length) out.push(Buffer.from(end));
  return { buf: Buffer.concat(out), seconds: Math.round(samples.length / rate * 10) / 10 };
}

async function ensureBucket(supabase) {
  const { data } = await supabase.storage.getBucket(BUCKET);
  if (data) return;
  const { error } = await supabase.storage.createBucket(BUCKET, { public: true, allowedMimeTypes: ['audio/mpeg', 'application/json'], fileSizeLimit: '20MB' });
  if (error && !/exists/i.test(error.message)) throw error;
}
async function readManifest(supabase, book) {
  const { data } = await supabase.storage.from(BUCKET).download(book + '/manifest.json');
  if (!data) return { done: {} };
  try { const j = JSON.parse(Buffer.from(await data.arrayBuffer()).toString('utf8')); return j && j.done ? j : { done: {} }; } catch (e) { return { done: {} }; }
}

/* Makes the next missing files of a book, for up to about 40 seconds: { book, total, done, made, failed, seconds } */
async function generate(req, res, supabase, body) {
  const book = String(body.book || '');
  if (!BOOK_RE.test(book)) return res.status(400).json({ error: 'Unknown book' });
  const t0 = Date.now();
  try {
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'alimun.com';
    const pr = await fetch('https://' + host + '/data/audio/' + encodeURIComponent(book) + '.json');
    if (!pr.ok) return res.status(404).json({ error: 'No audio plan for ' + book });
    const plan = await pr.json();
    await ensureBucket(supabase);
    const manifest = await readManifest(supabase, book);
    const todo = [], seen = new Set();
    Object.values(plan.items).forEach((it) => { if (!manifest.done[it[0]] && !seen.has(it[0])) { seen.add(it[0]); todo.push(it); } });
    const made = [], failed = [];
    let retryAfter = 0, last = 0, limitMessage = '';
    /* One request at a time, at most one every GAP ms, to stay under Google's requests-per-minute limit */
    for (const [h, voice, style, text] of todo) {
      if (Date.now() - t0 > 38000) break;
      const wait = last + GAP - Date.now();
      if (wait > 0) await sleep(wait);
      last = Date.now();
      try {
        const w = await speak({ model: plan.model || MODELS.flash, turns: [{ text }], voices: { _: voice }, style });
        const m = await mp3(w);
        const up = await supabase.storage.from(BUCKET).upload(book + '/' + h + '.mp3', m.buf, { contentType: 'audio/mpeg', cacheControl: '31536000', upsert: true });
        if (up.error) throw up.error;
        manifest.done[h] = m.seconds;
        made.push(h);
      } catch (e) {
        if (e.rateLimited) { retryAfter = e.retryAfter; limitMessage = e.limitMessage; break; }
        failed.push({ h, error: String(e.message || e).slice(0, 200), detail: e.detail || null });
      }
    }
    /* The next call may start right away: keep the gap after this call's last request too */
    const rest = last + GAP - Date.now();
    if (!retryAfter && rest > 0) await sleep(rest);
    if (made.length) {
      manifest.updated = new Date().toISOString();
      const up = await supabase.storage.from(BUCKET).upload(book + '/manifest.json', Buffer.from(JSON.stringify(manifest)), { contentType: 'application/json', cacheControl: '30', upsert: true });
      if (up.error) throw up.error;
    }
    const total = new Set(Object.values(plan.items).map((it) => it[0])).size;
    const seconds = Object.values(manifest.done).reduce((a, b) => a + b, 0);
    return res.status(200).json({ book, total, done: Object.keys(manifest.done).length, made: made.length, failed, seconds: Math.round(seconds), retryAfter, limitMessage });
  } catch (e) {
    console.error('[speech generate] ' + book + ': ' + e.message);
    return res.status(500).json({ error: 'generate_failed', detail: String(e.message || e).slice(0, 300) });
  }
}

module.exports = async function handler(req, res) {
  const action = String((req.query && req.query.action) || '');
  if (action === 'status') return res.status(200).json({ configured: !!process.env.GOOGLE_AI_API_KEY, models: MODELS, voices: VOICES, bucket: BUCKET });
  if (action !== 'sample' && action !== 'generate') return res.status(404).json({ error: 'Unknown action' });
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ error: 'Method not allowed' }); }
  if (!process.env.GOOGLE_AI_API_KEY) return res.status(503).json({ error: 'speech_not_configured' });

  const supabase = getSupabaseAdmin();
  if (!supabase) return res.status(500).json({ error: 'Server database connection error' });
  const auth = req.headers.authorization || '';
  const { data, error } = auth.startsWith('Bearer ') ? await supabase.auth.getUser(auth.slice(7)) : { data: null, error: true };
  if (error || !data || !data.user) return res.status(401).json({ error: 'Unauthorized' });
  if (!data.user.app_metadata || data.user.app_metadata.role !== 'admin') return res.status(403).json({ error: 'Admins only' });
  const body = parseBody(req);
  if (!body) return res.status(400).json({ error: 'Invalid JSON' });
  if (action === 'generate') return generate(req, res, supabase, body);
  if (tooMany()) return res.status(429).json({ error: 'Too many requests, wait a minute' });
  const model = MODELS[body.model] || MODELS.flash;
  const style = cleanText(body.style).slice(0, 80);
  let turns, voices;
  if (Array.isArray(body.lines)) {
    turns = body.lines.slice(0, 8).map((l) => ({ speaker: l.speaker === 'B' ? 'B' : 'A', text: cleanText(l.text) })).filter((l) => l.text);
    voices = { A: body.voices && body.voices.A, B: body.voices && body.voices.B };
    if (!VOICES.includes(voices.A) || !VOICES.includes(voices.B)) return res.status(400).json({ error: 'Unknown voice' });
    if (turns.map((t) => t.text).join(' ').length > MAX_TEXT * 2) return res.status(400).json({ error: 'Too long' });
  } else {
    turns = [{ text: cleanText(body.text) }];
    voices = { _: body.voice };
    if (!VOICES.includes(voices._)) return res.status(400).json({ error: 'Unknown voice' });
  }
  if (!turns.length || !turns[0].text) return res.status(400).json({ error: 'No text' });

  try {
    const audio = await speak({ model, turns, voices, style });
    res.setHeader('Content-Type', 'audio/wav');
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).send(audio);
  } catch (e) {
    console.error('[speech] ' + e.message, JSON.stringify(e.detail || {}));
    return res.status(502).json({ error: 'speech_failed', detail: e.detail || null });
  }
};

module.exports._test = { findAudio, toWav, speak, wav, pcmOf, mp3 };
