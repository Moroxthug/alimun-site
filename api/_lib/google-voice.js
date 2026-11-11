/**
 * Google voices shared by the course audio (api/speech.js) and the tutor (api/tutor.js): one Google Cloud set-up
 * (docs/CLOUD_TTS_SETUP.md, GOOGLE_CLOUD_TTS_KEY holding a service account's JSON key), the Vertex AI request for one
 * sentence in a Gemini voice, the WAV and MP3 helpers, and the reading of Google's rate limits. Nothing here reaches
 * the browser.
 */

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

const GCP_PROJECT = process.env.GOOGLE_CLOUD_PROJECT || 'gen-lang-client-0145644888';
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
/* One sentence in a Gemini voice through Vertex AI, signed in as the service account. The route that answered is
   remembered for the next sentences. Google's limits come back as rate_limited errors (see limited()). */
let vertexRoute = 0;
async function speakVertex({ model, voice, style, text, timeoutMs }) {
  const sa = serviceAccount(), project = sa && sa.project_id || GCP_PROJECT;
  const headers = await cloudHeaders();
  const urls = ['https://aiplatform.googleapis.com/v1/projects/' + project + '/locations/global/publishers/google/models/' + model + ':generateContent',
    'https://aiplatform.googleapis.com/v1/publishers/google/models/' + model + ':generateContent'];
  const body = JSON.stringify({ contents: [{ role: 'user', parts: [{ text: (style ? 'Read this aloud (style: ' + style + '):\n' : '') + text }] }],
    generationConfig: { responseModalities: ['AUDIO'], speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voice } } } } });
  const errors = [];
  for (let n = 0; n < urls.length; n++) {
    const i = (vertexRoute + n) % urls.length;
    /* timeoutMs (the tutor): each route gets that long, so a slow Google leaves the reply written only */
    const r = await fetch(urls[i], { method: 'POST', headers, body, signal: timeoutMs ? AbortSignal.timeout(timeoutMs) : undefined });
    const raw = await r.text();
    let json = null;
    try { json = JSON.parse(raw); } catch (e) { /* not JSON */ }
    const audio = r.ok && findAudio(json);
    if (audio) { vertexRoute = i; return toWav(audio); }
    limited({ status: r.status, text: raw, json });
    errors.push(r.status + ' ' + String(json && json.error && json.error.message || raw).slice(0, 200));
  }
  const err = new Error('Speech request failed');
  err.detail = errors;
  throw err;
}

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

module.exports = { GCP_PROJECT, wav, findAudio, toWav, pcmOf, retrySeconds, limited, serviceAccount, accessToken, cloudHeaders, speakVertex, mp3, mp3Pcm };
