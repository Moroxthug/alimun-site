/**
 * ============================================================
 *  ALIMUN — /api/speech
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Voices for the course material (docs/DASHBOARD_PLAN.md, step 5).
 *    ?action=status  (GET)  — { configured, cloudAccount } : is GOOGLE_AI_API_KEY set, and does GOOGLE_CLOUD_TTS_KEY hold
 *                     a service account's JSON key (yes or no only). No cost.
 *    ?action=generate (POST, admin JWT) — { book }: makes the next missing course audio
 *                     files of a book (plan /data/audio/<book>.json, site/src/data/books/audio.js)
 *                     as MP3 in Supabase Storage course-audio/<book>/<hash>.mp3, with
 *                     <book>/manifest.json listing the files made; sentences of one block with the same
 *                     voice are spoken in one request and cut at the pauses; about 75 s per call, one request
 *                     every 6.7 s (TTS_PER_MINUTE, default 9) for Google's per-minute limit; a 429 ends the
 *                     call with retryAfter (seconds), and daily + resetAt when it is Google's daily limit, for the
 *                     admin page to wait (minutes) or stop until the reset (hours).
 *    ?action=cloud-test (POST, admin JWT) — { model, voice }: one sentence in a Gemini voice through Google Cloud
 *                     (Vertex AI, then Cloud Text-to-Speech; no daily limit), with GOOGLE_CLOUD_TTS_KEY if set, else
 *                     GOOGLE_AI_API_KEY; returns audio/mpeg (X-Alimun-Via says which route worked), or each route's
 *                     refusal so the owner's set-up can be checked (docs/CLOUD_TTS_SETUP.md).
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

/* Google's rate limit. Two kinds: per minute (Tier 1: 10 requests a minute for the TTS models), which passes in
   seconds, and per day (Tier 1: 100 requests a day), which passes at the daily reset, hours away. The wait comes from
   Google's RetryInfo (retryDelay "80727s") or its message ("retry in 22h25m27s" or "retry in 41.2s"); a daily limit is
   recognised by its quota id or message, or by a wait over 15 minutes. Stop at once and say when to try again. */
function retrySeconds(text, json) {
  const details = (json && json.error && json.error.details) || [];
  for (const d of details) {
    const m = d && d.retryDelay && /^([\d.]+)s$/.exec(String(d.retryDelay));
    if (m) return Math.ceil(+m[1]);
  }
  const m = /retry in\s+((?:[\d.]+h)?\s*(?:[\d.]+m)?\s*(?:[\d.]+s)?)/i.exec(text || '');
  if (!m || !m[1].trim()) return 0;
  const part = (u) => { const x = new RegExp('([\\d.]+)' + u).exec(m[1]); return x ? +x[1] : 0; };
  return Math.ceil(part('h') * 3600 + part('m') * 60 + part('s'));
}
function limited(r) {
  if (r.status !== 429) return;
  const err = new Error('rate_limited');
  err.rateLimited = true;
  let msg = '';
  try { msg = r.json.error.message || ''; } catch (e) { msg = String(r.text || ''); }
  err.limitMessage = String(msg).slice(0, 300);
  const wait = retrySeconds(r.text, r.json);
  const quotaIds = JSON.stringify((r.json && r.json.error && r.json.error.details) || []);
  err.daily = /per ?day/i.test(msg) || /PerDay/.test(quotaIds) || wait > 15 * 60;
  err.retryAfter = err.daily ? Math.max(wait, 60) : wait ? Math.min(120, Math.max(wait, 10)) : 60;
  if (err.daily && !wait) err.retryAfter = 3600;
  err.resetAt = new Date(Date.now() + err.retryAfter * 1000).toISOString();
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

/* ---------- Google Cloud voices (step by step with the owner, 26 Oct 2026) ----------
   The key in Vercel is bound to a service account, and such keys only reach the Gemini API and Vertex AI (Agent
   Platform), so the Gemini voices are tried through Vertex AI generateContent (per-minute limits, no daily cap),
   at the project's global endpoint and then the publisher endpoint; Cloud Text-to-Speech is tried last. */
const CLOUD_MODELS = ['gemini-2.5-flash-tts', 'gemini-3.1-flash-tts-preview', 'gemini-2.5-pro-tts'];
const GCP_PROJECT = process.env.GOOGLE_CLOUD_PROJECT || 'gen-lang-client-0145644888';
const TEST_TEXT = 'Hi, I\u2019m calling about the flat on Park Road. Is it still available? I\u2019d love to see it this week, maybe on Thursday after work.';
const TEST_STYLE = 'Speak naturally, at a normal conversational pace, clearly and warmly.';

/* GOOGLE_CLOUD_TTS_KEY can hold a service account's JSON key (docs/CLOUD_TTS_SETUP.md): the server then signs in as
   that account (a signed JWT exchanged for an access token, kept for 50 minutes), which Vertex AI and Cloud
   Text-to-Speech both accept, unlike API keys. The key never leaves the server. */
let cloudToken = null;
function serviceAccount() {
  const raw = process.env.GOOGLE_CLOUD_TTS_KEY || '';
  if (!/^\s*\{/.test(raw)) return null;
  try { const j = JSON.parse(raw); return j.client_email && j.private_key ? j : null; } catch (e) { return null; }
}
async function accessToken(sa) {
  if (cloudToken && cloudToken.exp > Date.now() + 60000) return cloudToken.value;
  const crypto = require('crypto');
  const b64 = (o) => Buffer.from(typeof o === 'string' ? o : JSON.stringify(o)).toString('base64url');
  const now = Math.floor(Date.now() / 1000);
  const head = b64({ alg: 'RS256', typ: 'JWT' });
  const claim = b64({ iss: sa.client_email, scope: 'https://www.googleapis.com/auth/cloud-platform', aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600 });
  const sig = crypto.createSign('RSA-SHA256').update(head + '.' + claim).sign(sa.private_key).toString('base64url');
  const r = await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: head + '.' + claim + '.' + sig }).toString() });
  const j = await r.json().catch(() => ({}));
  if (!r.ok || !j.access_token) throw new Error('Google sign-in for the service account failed: ' + (j.error_description || j.error || r.status));
  cloudToken = { value: j.access_token, exp: Date.now() + 50 * 60000 };
  return cloudToken.value;
}
/* The headers for a Google Cloud call: the service account's token when its key is set, else the API key */
async function cloudHeaders() {
  const sa = serviceAccount();
  if (sa) return { 'Content-Type': 'application/json', Authorization: 'Bearer ' + await accessToken(sa), 'x-goog-user-project': sa.project_id || GCP_PROJECT };
  return { 'Content-Type': 'application/json', 'x-goog-api-key': process.env.GOOGLE_CLOUD_TTS_KEY || process.env.GOOGLE_AI_API_KEY };
}
async function cloudTest(res, body) {
  const model = CLOUD_MODELS.includes(body.model) ? body.model : CLOUD_MODELS[0];
  const voice = VOICES.includes(body.voice) ? body.voice : 'Orus';
  const sa = serviceAccount(), project = sa && sa.project_id || GCP_PROJECT;
  const headers = await cloudHeaders();
  const vertexBody = { contents: [{ role: 'user', parts: [{ text: TEST_STYLE + '\n' + TEST_TEXT }] }],
    generationConfig: { responseModalities: ['AUDIO'], speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voice } } } } };
  const tries = [
    ['vertex-global', 'https://aiplatform.googleapis.com/v1/projects/' + project + '/locations/global/publishers/google/models/' + model + ':generateContent', vertexBody],
    ['vertex-publisher', 'https://aiplatform.googleapis.com/v1/publishers/google/models/' + model + ':generateContent', vertexBody],
    ['cloud-tts', 'https://texttospeech.googleapis.com/v1/text:synthesize', { input: { prompt: TEST_STYLE, text: TEST_TEXT },
      voice: { languageCode: 'en-US', name: voice, modelName: model }, audioConfig: { audioEncoding: 'LINEAR16' } }],
  ];
  const refused = [];
  for (const [via, url, payload] of tries) {
    const r = await fetch(url, { method: 'POST', headers, body: JSON.stringify(payload) });
    const text = await r.text();
    let json = null;
    try { json = JSON.parse(text); } catch (e) { /* not JSON */ }
    const audio = r.ok && json && (json.audioContent ? { data: json.audioContent, mime: 'audio/wav' } : findAudio(json));
    if (audio) {
      const m = await mp3(toWav(audio));
      res.setHeader('Content-Type', 'audio/mpeg');
      res.setHeader('Cache-Control', 'no-store');
      res.setHeader('X-Alimun-Via', via);
      return res.status(200).send(m.buf);
    }
    const g = json && json.error || {};
    const reason = (g.details || []).map((d) => d.reason).filter(Boolean).join(', ');
    refused.push({ via, status: r.status, message: String(g.message || text).slice(0, 300), reason });
  }
  return res.status(502).json({ error: 'cloud_refused', model, voice, signedIn: !!sa, refused });
}

/* ---------- Course audio: files for the sentences of a book ---------- */
const BUCKET = 'course-audio';
/* Milliseconds between two requests to Google: 6.5 s keeps under 10 a minute (raise TTS_PER_MINUTE after a tier upgrade) */
const GAP = Math.ceil(60000 / Math.max(1, +(process.env.TTS_PER_MINUTE || 9)));
function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }
const BOOK_RE = /^[A-Z][a-z]+-[ABC][12](-[a-z]+)?$/;

async function mp3(w) { const { pcm, rate } = pcmOf(w); return mp3Pcm(pcm, rate); }
async function mp3Pcm(pcm, rate) {
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

/* ---------- Several sentences in one request, cut apart at the pauses ----------
   Google allows few requests a day on Tier 1, so the sentences of one block that share a voice and a style are
   spoken in one request with long pauses between them, then cut at the N-1 longest silences. The cut is used only
   when it is clear: the chosen pauses are much longer than any pause inside a sentence, and each piece's length fits
   its text. Otherwise the sentences are spoken one by one. */
const FRAME = 0.02;
function frames(pcm, rate) {
  const n = Math.floor(rate * FRAME), out = [];
  for (let f = 0; (f + 1) * n * 2 <= pcm.length; f++) {
    let sum = 0;
    for (let i = 0; i < n; i++) { const v = pcm.readInt16LE((f * n + i) * 2); sum += v * v; }
    out.push(Math.sqrt(sum / n));
  }
  return { rms: out, n };
}
function splitPcm(pcm, rate, texts) {
  const N = texts.length;
  if (N < 2) return [pcm];
  const { rms, n } = frames(pcm, rate);
  if (!rms.length) return null;
  const max = Math.max.apply(null, rms), thr = Math.max(200, max * 0.04);
  const quiet = rms.map((v) => v < thr);
  /* Silent runs inside the speech (not the silence before the first word or after the last) */
  let first = quiet.indexOf(false), last = quiet.lastIndexOf(false);
  if (first < 0) return null;
  const runs = [];
  for (let f = first; f <= last; f++) {
    if (!quiet[f]) continue;
    let e = f;
    while (e <= last && quiet[e]) e++;
    runs.push({ a: f, b: e, len: e - f });
    f = e;
  }
  const byLen = runs.slice().sort((x, y) => y.len - x.len);
  const cuts = byLen.slice(0, N - 1);
  if (cuts.length < N - 1 || cuts[cuts.length - 1].len < 15) return null;              /* pauses of 0.3 s at least */
  const next = byLen[N - 1];
  if (next && cuts[cuts.length - 1].len < next.len * 1.4) return null;                 /* not clearly longer than the rest */
  cuts.sort((x, y) => x.a - y.a);
  const pad = Math.round(0.12 / FRAME);
  const bounds = [];
  let from = first;
  cuts.forEach((c) => { bounds.push([from, c.a]); from = c.b; });
  bounds.push([from, last + 1]);
  const pieces = bounds.map(([a, b]) => pcm.slice(Math.max(0, a - pad) * n * 2, Math.min(rms.length, b + pad) * n * 2));
  /* Each piece's share of the time should be close to its share of the text */
  const chars = texts.map((t) => Math.max(8, t.length)), totalC = chars.reduce((x, y) => x + y, 0);
  const secs = bounds.map(([a, b]) => (b - a) * FRAME), totalS = secs.reduce((x, y) => x + y, 0);
  for (let i = 0; i < N; i++) {
    const r = (secs[i] / totalS) / (chars[i] / totalC);
    if (r < 0.45 || r > 2.2) return null;
  }
  return pieces;
}
/* The sentences to speak together: same block, voice and style, at most 8 and 2,500 characters */
function chunks(entries) {
  const groups = new Map();
  entries.forEach(([key, it]) => {
    const g = key.split(':').slice(0, 3).join(':') + '|' + it[1] + '|' + it[2];
    if (!groups.has(g)) groups.set(g, []);
    groups.get(g).push(it);
  });
  const out = [];
  groups.forEach((list) => {
    let cur = [], len = 0;
    list.forEach((it) => {
      if (cur.length && (cur.length >= 8 || len + it[3].length > 2500)) { out.push(cur); cur = []; len = 0; }
      cur.push(it); len += it[3].length;
    });
    if (cur.length) out.push(cur);
  });
  return out;
}

/* Makes the next missing files of a book, for up to about 75 seconds: { book, total, done, made, failed, seconds } */
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
    const entries = [], seen = new Set();
    Object.entries(plan.items).forEach(([k, it]) => { if (!manifest.done[it[0]] && !seen.has(it[0])) { seen.add(it[0]); entries.push([k, it]); } });
    const queue = chunks(entries);
    const made = [], failed = [];
    let retryAfter = 0, last = 0, limitMessage = '', requests = 0, splitFailed = 0, daily = false, resetAt = null;
    const save = async (h, pcm, rate) => {
      const m = await mp3Pcm(pcm, rate);
      const up = await supabase.storage.from(BUCKET).upload(book + '/' + h + '.mp3', m.buf, { contentType: 'audio/mpeg', cacheControl: '31536000', upsert: true });
      if (up.error) throw up.error;
      manifest.done[h] = m.seconds;
      made.push(h);
    };
    /* One request at a time, at most one every GAP ms, to stay under Google's requests-per-minute limit */
    while (queue.length && Date.now() - t0 < 75000) {
      const group = queue.shift();
      const wait = last + GAP - Date.now();
      if (wait > 0) await sleep(wait);
      last = Date.now();
      requests++;
      const style = group[0][2], voice = group[0][1];
      try {
        const text = group.map((it) => it[3]).join('\n\n');
        const w = await speak({ model: plan.model || MODELS.flash, turns: [{ text }], voices: { _: voice },
          style: group.length > 1 ? style + ', with a long pause of about two seconds after each sentence' : style });
        const { pcm, rate } = pcmOf(w);
        const pieces = splitPcm(pcm, rate, group.map((it) => it[3]));
        /* Not clearly cut: try again in two halves (two requests) rather than one request per sentence */
        if (!pieces) {
          splitFailed++;
          if (group.length >= 4) { const h = Math.ceil(group.length / 2); queue.unshift(group.slice(0, h), group.slice(h)); }
          else group.slice().reverse().forEach((it) => queue.unshift([it]));
          continue;
        }
        for (let i = 0; i < group.length; i++) await save(group[i][0], pieces[i], rate);
      } catch (e) {
        if (e.rateLimited) { retryAfter = e.retryAfter; limitMessage = e.limitMessage; daily = e.daily; resetAt = e.resetAt; break; }
        failed.push({ h: group[0][0], error: String(e.message || e).slice(0, 200), detail: e.detail || null });
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
    return res.status(200).json({ book, total, done: Object.keys(manifest.done).length, made: made.length, failed, seconds: Math.round(seconds), retryAfter, limitMessage, daily, resetAt, requests, splitFailed });
  } catch (e) {
    console.error('[speech generate] ' + book + ': ' + e.message);
    return res.status(500).json({ error: 'generate_failed', detail: String(e.message || e).slice(0, 300) });
  }
}

module.exports = async function handler(req, res) {
  const action = String((req.query && req.query.action) || '');
  if (action === 'status') return res.status(200).json({ configured: !!process.env.GOOGLE_AI_API_KEY, cloudAccount: !!serviceAccount(), models: MODELS, voices: VOICES, bucket: BUCKET });
  if (action !== 'sample' && action !== 'generate' && action !== 'cloud-test') return res.status(404).json({ error: 'Unknown action' });
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
  if (action === 'cloud-test') {
    if (tooMany()) return res.status(429).json({ error: 'Too many requests, wait a minute' });
    try { return await cloudTest(res, body); } catch (e) { return res.status(502).json({ error: 'cloud_failed', message: String(e.message || e).slice(0, 300) }); }
  }
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

module.exports._test = { findAudio, toWav, speak, wav, pcmOf, mp3, splitPcm, chunks, retrySeconds, limited, cloudTest, serviceAccount };
