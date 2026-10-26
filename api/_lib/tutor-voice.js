/**
 * The tutor's ears and voice (docs/AI_TUTOR_PLAN.md, part 3), used by api/tutor.js.
 *  - listen: the student's recording (at most about 30 seconds) to text with Groq Whisper in the language being
 *    learned. The recording is sent to Groq and dropped: it is never stored. Cost in ai_usage as tutor_listen.
 *  - speak: one tutor message's text in the tutor's voice (Orus, or Sulafat when the admin sets app_settings
 *    tutor_voice to compare), through Google Cloud with the course audio's set-up (api/_lib/google-voice.js), as MP3.
 *    Cost in ai_usage as tutor_voice. Both count against the tutor's daily budget (tutor-brain.js reserve).
 * Neither has its own clock: the turn's time already counts listening and speaking (plan, section 8).
 */

const gv = require('./google-voice.js');
const brain = require('./tutor-brain.js');

// ── Listening ───────────────────────────────────────────────

const WHISPER_MODEL = 'whisper-large-v3-turbo';
const WHISPER_USD_PER_SEC = 0.04 / 3600;   // Groq: $0.04 an hour of audio, at least 10 seconds a request
const LISTEN_MIMES = { 'audio/webm': 'webm', 'audio/mp4': 'mp4', 'audio/ogg': 'ogg', 'audio/wav': 'wav', 'audio/mpeg': 'mp3' };
const LISTEN_LANGS = { English: 'en', German: 'de', French: 'fr', Spanish: 'es', Italian: 'it', Portuguese: 'pt' };
const MAX_AUDIO_BYTES = 1024 * 1024;       // about 30 seconds at the browser's usual bitrates, with room to spare

function listenConfigured() { return !!process.env.GROQ_API_KEY; }

/** Checks a recording sent by the browser. Returns { audio: Buffer, mime } or { reason } for a 400/413. */
function readAudio(body) {
  const mime = String(body.mime || '').split(';')[0].trim().toLowerCase();
  if (!LISTEN_MIMES[mime]) return { reason: 'audio_type' };
  const b64 = String(body.audio || '');
  if (b64.length > Math.ceil(MAX_AUDIO_BYTES / 3) * 4 + 8) return { reason: 'audio_long' };
  const audio = Buffer.from(b64, 'base64');
  if (audio.length < 800) return { reason: 'audio_short' };
  if (audio.length > MAX_AUDIO_BYTES) return { reason: 'audio_long' };
  return { audio, mime };
}

/** The recording to text. Throws { code: 'budget' | 'unavailable' | 'listen' }. */
async function listen(supabase, userId, { audio, mime, language }) {
  const row = await brain.reserve(supabase, userId, 'tutor_listen', 30 * WHISPER_USD_PER_SEC);
  const t0 = Date.now();
  try {
    const form = new FormData();
    form.append('file', new Blob([audio], { type: mime }), 'speech.' + LISTEN_MIMES[mime]);
    form.append('model', WHISPER_MODEL);
    form.append('language', LISTEN_LANGS[language] || 'en');
    form.append('response_format', 'verbose_json');
    form.append('temperature', '0');
    const r = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
      method: 'POST', headers: { Authorization: `Bearer ${process.env.GROQ_API_KEY}` }, body: form, signal: AbortSignal.timeout(20000),
    });
    const d = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error('Groq transcription ' + r.status + ': ' + JSON.stringify(d).slice(0, 200));
    const seconds = Math.max(10, Number(d.duration) || 10);
    await supabase.from('ai_usage').update({
      provider: 'groq', model: WHISPER_MODEL, input_tokens: 0, output_tokens: 0,
      cost_usd: Math.round(seconds * WHISPER_USD_PER_SEC * 1e6) / 1e6, latency_ms: Date.now() - t0, success: true, error: null,
    }).eq('id', row.id);
    return String(d.text || '').trim();
  } catch (e) {
    await supabase.from('ai_usage').update({ success: false, cost_usd: 0, latency_ms: Date.now() - t0, error: String(e.message).slice(0, 300) }).eq('id', row.id);
    throw { code: 'listen', message: e.message };
  }
}

// ── The voice ───────────────────────────────────────────────

/* Owner, question 7: Orus in every language; Sulafat is the alternative to compare by ear (app_settings tutor_voice) */
const VOICES = ['Orus', 'Sulafat'];
const DEFAULT_VOICE = 'Orus';
/* The course audio's model on Google Cloud (owner, 26 Oct 2026); TUTOR_TTS_MODEL can switch to gemini-2.5-flash-tts */
const VOICE_MODEL = process.env.TUTOR_TTS_MODEL || 'gemini-3.1-flash-tts-preview';
/* USD per second of speech: audio tokens at 25 a second ($20 a million for 3.1 preview, $10 for 2.5), text tokens apart */
const VOICE_USD_PER_SEC = { 'gemini-3.1-flash-tts-preview': 20 * 25 / 1e6, 'gemini-2.5-flash-tts': 10 * 25 / 1e6, 'gemini-2.5-pro-tts': 20 * 25 / 1e6 };
const VOICE_USD_PER_TEXT_TOKEN = 1 / 1e6;
const VOICE_STYLE = 'a warm, patient language teacher speaking clearly, at a natural conversational pace';
/* Part 4: the sentence to say aloud, slowly, so the student can hear each sound and repeat it */
const SLOW_STYLE = 'a patient language teacher modelling pronunciation: slowly and very clearly, with a short pause between words, natural sounds and stress';
const VOICE_TIMEOUT_MS = 15000;
const MAX_SAY = 800;

function voiceConfigured() { return !!gv.serviceAccount(); }

let voiceCache = null;
/** The voice the admin chose (read at most once a minute); anything other than Sulafat is Orus */
async function voiceName(supabase) {
  if (voiceCache && voiceCache.at > Date.now() - 60000) return voiceCache.name;
  let name = DEFAULT_VOICE;
  try {
    const { data } = await supabase.from('app_settings').select('value').eq('key', 'tutor_voice').maybeSingle();
    const v = String(data && data.value || '').trim().toLowerCase();
    name = VOICES.find((x) => x.toLowerCase() === v) || DEFAULT_VOICE;
  } catch (e) { /* the default */ }
  voiceCache = { at: Date.now(), name };
  return name;
}

/** The tutor's text as MP3; opts.slow says it slowly (part 4). Throws { code: 'budget' | 'unavailable' | 'voice' }. */
async function speak(supabase, userId, text, opts) {
  const slow = !!(opts && opts.slow);
  const say = String(text || '').replace(/\*\*/g, '').replace(/\s+/g, ' ').trim().slice(0, MAX_SAY);
  const rate = VOICE_USD_PER_SEC[VOICE_MODEL] || 20 * 25 / 1e6;
  // About 14 characters a second of speech, half that when slow
  const row = await brain.reserve(supabase, userId, 'tutor_voice', Math.ceil(say.length / (slow ? 7 : 14) + 2) * rate);
  const voice = await voiceName(supabase);
  const t0 = Date.now();
  try {
    const w = await gv.speakVertex({ model: VOICE_MODEL, voice, style: slow ? SLOW_STYLE : VOICE_STYLE, text: say, timeoutMs: VOICE_TIMEOUT_MS });
    const m = await gv.mp3(w);
    const textTokens = Math.ceil(say.length / 4);
    await supabase.from('ai_usage').update({
      provider: 'google-cloud', model: VOICE_MODEL + ':' + voice, input_tokens: textTokens, output_tokens: Math.round(m.seconds * 25),
      cost_usd: Math.round((m.seconds * rate + textTokens * VOICE_USD_PER_TEXT_TOKEN) * 1e6) / 1e6, latency_ms: Date.now() - t0, success: true, error: null,
    }).eq('id', row.id);
    return { mp3: m.buf, seconds: m.seconds, voice };
  } catch (e) {
    const why = e && e.rateLimited ? 'rate_limited' : String(e && e.message || e) + (e && e.detail ? ' ' + JSON.stringify(e.detail) : '');
    await supabase.from('ai_usage').update({ success: false, cost_usd: 0, latency_ms: Date.now() - t0, error: why.slice(0, 300) }).eq('id', row.id);
    throw { code: 'voice', message: why };
  }
}

module.exports = { listenConfigured, readAudio, listen, voiceConfigured, voiceName, speak, VOICES, VOICE_MODEL, LISTEN_LANGS };
