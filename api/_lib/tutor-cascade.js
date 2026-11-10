/**
 * The spoken tutor call, cascade engine (owner, 10 Nov 2026: a test version beside the live call, admins only for now).
 * The owner's 10-minute live call cost about $1.32, mostly Google re-reading the whole call's audio on every turn. Here
 * each turn is three cheap steps on the server (api/tutor.js ?action=cascade-turn):
 *  - the student's words to text: Groq Whisper, forced to the course language (tutor-voice.js listen);
 *  - the tutor's reply: the written tutor's model, with the live call's rules and the written tutor's JSON reply (board,
 *    exercise, sentence to record), so the screen works as in the live call;
 *  - the reply spoken: Azure neural text to speech on the same Speech resource as the pronunciation checks, as 24 kHz
 *    PCM that the call page plays and lip-syncs like Google's voice (js/app/tutor-live.js cascadeLink).
 * Estimated about $0.08 to $0.15 for the same 10 minutes. Costs in ai_usage: tutor_listen, tutor_turn, tutor_voice.
 */

const brain = require('./tutor-brain.js');
const live = require('./tutor-live.js');

const LOCALE = { English: 'en-US', German: 'de-DE', French: 'fr-FR', Spanish: 'es-ES', Italian: 'it-IT', Portuguese: 'pt-PT' };
/* The six tutors (js/app/cast3.js): women and men, each given a different voice of their own gender */
const GENDER = { lena: 'Female', mei: 'Female', sofia: 'Female', arthur: 'Male', kofi: 'Male', omar: 'Male' };
/* Azure neural voices, about $15 a million characters (HD voices, with ":" in the name, cost more and are not used) */
const TTS_USD_PER_CHAR = 15 / 1e6;
const TTS_TIMEOUT_MS = 12000;

function configured() { return !!(process.env.AZURE_SPEECH_KEY && process.env.AZURE_SPEECH_REGION && process.env.GROQ_API_KEY); }
function region() { return String(process.env.AZURE_SPEECH_REGION || '').trim().toLowerCase().replace(/[^a-z0-9]/g, ''); }

/* The voices this Speech resource offers, read once an hour */
let voiceCache = null;
async function voiceList() {
  if (voiceCache && voiceCache.at > Date.now() - 3600000) return voiceCache.list;
  const r = await fetch(`https://${region()}.tts.speech.microsoft.com/cognitiveservices/voices/list`, {
    headers: { 'Ocp-Apim-Subscription-Key': process.env.AZURE_SPEECH_KEY }, signal: AbortSignal.timeout(8000),
  });
  const d = await r.json().catch(() => null);
  if (!r.ok || !Array.isArray(d)) throw new Error('Azure voices ' + r.status);
  voiceCache = { at: Date.now(), list: d.map((v) => ({ name: String(v.ShortName || ''), gender: String(v.Gender || ''), locale: String(v.Locale || '') })).filter((v) => v.name && !v.name.includes(':')) };
  return voiceCache.list;
}

/**
 * The tutor's voice for a course language, from the voices offered: same gender, a multilingual voice of the course
 * language first (native accent, and it can explain in the student's own language), then any multilingual voice, then
 * any voice of the course language. The three tutors of a gender get different voices where there are enough.
 */
function pickVoice(list, tutor, language) {
  const gender = GENDER[tutor] || 'Female', locale = LOCALE[language] || 'en-US';
  const nth = Object.keys(GENDER).filter((k) => GENDER[k] === gender).indexOf(tutor);
  const mine = (list || []).filter((v) => v.gender === gender).sort((a, b) => a.name.localeCompare(b.name));
  const multi = (v) => /Multilingual/i.test(v.name);
  const tiers = [mine.filter((v) => v.locale === locale && multi(v)), mine.filter(multi).sort((a, b) => (b.locale === 'en-US') - (a.locale === 'en-US')), mine.filter((v) => v.locale === locale)];
  for (const t of tiers) if (t.length) return t[Math.max(0, nth) % t.length].name;
  return null;
}

function xml(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;'); }
/** What is said, as speech: no board markup */
function speakable(s) { return String(s || '').replace(/\*\*|__|[*_`#|~^<>{}[\]]/g, '').replace(/\s+/g, ' ').trim(); }
/** At most three pieces of whole sentences, spoken in parallel so a long reply is not slower to start */
function pieces(text) {
  const sentences = text.match(/[^.!?…。！？]+[.!?…。！？]*["'»)]?\s*/g) || [text];
  const n = Math.min(3, sentences.length), size = Math.ceil(text.length / n), out = [];
  let cur = '';
  sentences.forEach((x) => { if (cur && cur.length + x.length > size && out.length < n - 1) { out.push(cur.trim()); cur = ''; } cur += x; });
  if (cur.trim()) out.push(cur.trim());
  return out;
}
function ssml(text, voice, locale, slow) {
  const body = slow ? `<prosody rate="-12%">${xml(text)}</prosody>` : xml(text);
  return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="${locale}"><voice name="${voice}">${body}</voice></speak>`;
}

/**
 * The reply in the tutor's voice: { audio: base64 of 24 kHz 16-bit mono PCM, voice, chars }.
 * Slower at A1 and A2. Throws { code: 'budget' | 'voice' }.
 */
async function speak(supabase, userId, { text, tutor, language, level }) {
  const say = speakable(text).slice(0, 1200);
  if (!say) return { audio: '', voice: null, chars: 0 };
  const row = await brain.reserve(supabase, userId, 'tutor_voice', say.length * TTS_USD_PER_CHAR);
  const t0 = Date.now();
  let voice = null;
  try {
    voice = pickVoice(await voiceList(), tutor, language);
    if (!voice) throw new Error('no voice for ' + language);
    const locale = LOCALE[language] || 'en-US', slow = ['A1', 'A2'].includes(level);
    const parts = await Promise.all(pieces(say).map(async (p) => {
      const r = await fetch(`https://${region()}.tts.speech.microsoft.com/cognitiveservices/v1`, {
        method: 'POST',
        headers: { 'Ocp-Apim-Subscription-Key': process.env.AZURE_SPEECH_KEY, 'Content-Type': 'application/ssml+xml', 'X-Microsoft-OutputFormat': 'raw-24khz-16bit-mono-pcm', 'User-Agent': 'alimun' },
        body: ssml(p, voice, locale, slow), signal: AbortSignal.timeout(TTS_TIMEOUT_MS),
      });
      if (!r.ok) throw new Error('Azure voice ' + r.status + ' ' + (await r.text().catch(() => '')).slice(0, 200));
      return Buffer.from(await r.arrayBuffer());
    }));
    const audio = Buffer.concat(parts);
    await supabase.from('ai_usage').update({ provider: 'azure', model: 'tts:' + voice, input_tokens: say.length, output_tokens: 0,
      cost_usd: Math.round(say.length * TTS_USD_PER_CHAR * 1e6) / 1e6, latency_ms: Date.now() - t0, success: true, error: null }).eq('id', row.id);
    return { audio: audio.toString('base64'), voice, chars: say.length };
  } catch (e) {
    await supabase.from('ai_usage').update({ success: false, cost_usd: 0, latency_ms: Date.now() - t0, error: String(e && e.message || e).slice(0, 300) }).eq('id', row.id);
    throw { code: 'voice', message: e && e.message };
  }
}

/**
 * The call's instructions: the live call's rules (level, teach then involve, taking turns, accents, honesty,
 * time, the speech checker) with the board used through the written tutor's JSON reply instead of Google's tools.
 */
function systemFor(session, studentBrief, tutor, pron, secondsLeft) {
  const ui = brain.LANG_NAMES[session.ui] || 'English';
  const rules = live.instructionsFor(session, studentBrief, tutor, '', pron, secondsLeft)
    .replace(/\bboard_write\b/g, 'the "board" field').replace(/\bset_exercise\b/g, 'the "exercise" field').replace(/\bsay_this\b/g, 'the "say_aloud" field')
    .replace(/\(op spell\)/g, '(the "spell" operation)');
  return rules + `

How you answer in this call: every reply is one JSON object, as below. "say" is what your voice says aloud at once, so write it as natural speech: no ** or other markup, no lists, numbers written as words, one to three sentences in conversation and at most about 80 words when you teach. The board, an exercise or a sentence to record appear on the screen while you speak: refer to them ("look at the board") instead of reading them out. Lines inside <school> tags come from Alimun's system: follow them. A student line was said aloud and written down by speech recognition: ignore its spelling and punctuation; if it seems misheard, ask.
${brain.replyFormat(ui, pron)}`;
}

module.exports = { configured, pickVoice, pieces, speakable, ssml, speak, systemFor, LOCALE, TTS_USD_PER_CHAR };
