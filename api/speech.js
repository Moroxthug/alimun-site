/**
 * ============================================================
 *  ALIMUN — /api/speech
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Voices for the course material (docs/DASHBOARD_PLAN.md, step 5).
 *    ?action=status  (GET)  — { configured } : is GOOGLE_AI_API_KEY set. No cost.
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

/* Interactions API first; generateContent as a fallback */
async function speak({ model, turns, voices, style }) {
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
        ? { mode: 'conversational', speakers: Object.keys(voices).map((s) => ({ speaker: s, voice: voices[s] })) }
        : [{ voice: voices._ }],
    },
  };
  let r = await callJSON(BASE + '/interactions', interaction);
  let audio = r.ok && findAudio(r.json);
  if (audio) return toWav(audio);
  const first = r;

  const prompt = (style ? 'Say in a ' + style + ' way:\n' : '') + turns.map((t) => (t.speaker ? t.speaker + ': ' : '') + t.text).join('\n');
  const speechConfig = multi
    ? { multiSpeakerVoiceConfig: { speakerVoiceConfigs: Object.keys(voices).map((s) => ({ speaker: s, voiceConfig: { prebuiltVoiceConfig: { voiceName: voices[s] } } })) } }
    : { voiceConfig: { prebuiltVoiceConfig: { voiceName: voices._ } } };
  r = await callJSON(BASE + '/models/' + model + ':generateContent', {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { responseModalities: ['AUDIO'], speechConfig },
  });
  audio = r.ok && findAudio(r.json);
  if (audio) return toWav(audio);
  const err = new Error('Speech request failed');
  err.detail = { interactions: first.status + ' ' + String(first.text).slice(0, 300), generateContent: r.status + ' ' + String(r.text).slice(0, 300) };
  throw err;
}

module.exports = async function handler(req, res) {
  const action = String((req.query && req.query.action) || '');
  if (action === 'status') return res.status(200).json({ configured: !!process.env.GOOGLE_AI_API_KEY, models: MODELS, voices: VOICES });
  if (action !== 'sample') return res.status(404).json({ error: 'Unknown action' });
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ error: 'Method not allowed' }); }
  if (!process.env.GOOGLE_AI_API_KEY) return res.status(503).json({ error: 'speech_not_configured' });

  const supabase = getSupabaseAdmin();
  if (!supabase) return res.status(500).json({ error: 'Server database connection error' });
  const auth = req.headers.authorization || '';
  const { data, error } = auth.startsWith('Bearer ') ? await supabase.auth.getUser(auth.slice(7)) : { data: null, error: true };
  if (error || !data || !data.user) return res.status(401).json({ error: 'Unauthorized' });
  if (!data.user.app_metadata || data.user.app_metadata.role !== 'admin') return res.status(403).json({ error: 'Admins only' });
  if (tooMany()) return res.status(429).json({ error: 'Too many requests, wait a minute' });

  const body = parseBody(req);
  if (!body) return res.status(400).json({ error: 'Invalid JSON' });
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

module.exports._test = { findAudio, toWav, speak, wav };
