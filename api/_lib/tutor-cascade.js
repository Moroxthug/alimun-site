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
/* The call's thinking: Google's Flash on the key the live call already uses (owner's test, 10 Nov 2026: the written
   tutor's cheaper model taught wrong sounds and grammar). Google discounts the part of each request it has read
   before in this call (the instructions and earlier turns), so the instructions stay the same from turn to turn and
   the time left goes in a note at the end. If Google fails, the written tutor's model answers. */
const CALL_MODEL = process.env.TUTOR_CALL_MODEL || 'gemini-3.8-flash';
const CALL_PRICE = { 'gemini-3.8-flash': [0.75, 0.075, 3.75], 'gemini-3.6-flash': [0.75, 0.075, 3.75], 'gemini-3.5-flash-lite': [0.30, 0.03, 2.50] };
function callKey() { return process.env.GOOGLE_AI_API_KEY || process.env.GEMINI_API_KEY || ''; }

function configured() { return !!(process.env.AZURE_SPEECH_KEY && process.env.AZURE_SPEECH_REGION && process.env.GROQ_API_KEY); }

/** USD of one Gemini answer: new input, input read before (cached) and output with thinking */
function callCost(model, u) {
  const [inp, cached, out] = CALL_PRICE[model] || CALL_PRICE['gemini-3.8-flash'];
  const c = u.cachedContentTokenCount || 0, p = Math.max(0, (u.promptTokenCount || 0) - c);
  return (p * inp + c * cached + ((u.candidatesTokenCount || 0) + (u.thoughtsTokenCount || 0)) * out) / 1e6;
}
async function askGemini(system, messages, thinking) {
  const body = {
    systemInstruction: { parts: [{ text: system }] },
    contents: messages.map((m) => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] })),
    generationConfig: Object.assign({ maxOutputTokens: 2000, temperature: 0.5, responseMimeType: 'application/json' }, thinking ? { thinkingConfig: { thinkingLevel: 'low' } } : {}),
  };
  const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${CALL_MODEL}:generateContent`, {
    method: 'POST', headers: { 'Content-Type': 'application/json', 'x-goog-api-key': callKey() }, body: JSON.stringify(body), signal: AbortSignal.timeout(15000),
  });
  const d = await r.json().catch(() => ({}));
  return { r, d };
}
/**
 * The tutor's answer for one turn: { reply object (JSON), model }. Recorded in ai_usage as tutor_turn under the daily
 * budget. Throws { code: 'budget' | 'provider' | 'unreadable' }.
 */
async function think(supabase, userId, system, messages) {
  if (!callKey()) return { raw: await brain.callModel(supabase, userId, 'tutor_turn', system, messages, { maxTokens: 2000, temperature: 0.6 }), model: 'fallback' };
  const chars = system.length + messages.reduce((n, m) => n + m.content.length, 0);
  const row = await brain.reserve(supabase, userId, 'tutor_turn', (chars / 4) * 0.75 / 1e6 + 400 * 3.75 / 1e6);
  const t0 = Date.now();
  let r, d;
  try {
    ({ r, d } = await askGemini(system, messages, true));
    /* A model that does not take the thinking level answers without it */
    if (r.status === 400 && /thinking/i.test(JSON.stringify(d))) ({ r, d } = await askGemini(system, messages, false));
    if (!r.ok) throw new Error('Gemini ' + r.status + ': ' + JSON.stringify(d).slice(0, 300));
  } catch (e) {
    await supabase.from('ai_usage').update({ success: false, cost_usd: 0, latency_ms: Date.now() - t0, error: String(e && e.message || e).slice(0, 300) }).eq('id', row.id);
    console.error('[Tutor] cascade think, falling back:', e && e.message);
    return { raw: await brain.callModel(supabase, userId, 'tutor_turn', system, messages, { maxTokens: 2000, temperature: 0.6 }), model: 'fallback' };
  }
  const u = d.usageMetadata || {};
  await supabase.from('ai_usage').update({ provider: 'gemini', model: CALL_MODEL, input_tokens: u.promptTokenCount || 0, output_tokens: (u.candidatesTokenCount || 0) + (u.thoughtsTokenCount || 0),
    cost_usd: Math.round(callCost(CALL_MODEL, u) * 1e6) / 1e6, latency_ms: Date.now() - t0, success: true, error: u.cachedContentTokenCount ? 'cached ' + u.cachedContentTokenCount : null }).eq('id', row.id);
  const text = (d.candidates?.[0]?.content?.parts || []).filter((p) => !p.thought).map((p) => p.text || '').join('');
  try { return { raw: JSON.parse(String(text).replace(/^\s*```(json)?|```\s*$/g, '').trim()), model: CALL_MODEL }; } catch (e) { throw { code: 'unreadable' }; }
}
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
function systemFor(session, studentBrief, tutor, pron) {
  const ui = brain.LANG_NAMES[session.ui] || 'English';
  /* No time left in here (it changes every turn and would stop Google reusing what it read): see timeNote */
  const rules = live.instructionsFor(session, studentBrief, tutor, '', pron, null)
    .replace(/the call lasts until the student's tutor time runs out/, 'the time left is told to you in a note with each turn')
    .replace(/\bboard_write\b/g, 'the "board" field').replace(/\bset_exercise\b/g, 'the "exercise" field').replace(/\bsay_this\b/g, 'the "say_aloud" field')
    .replace(/\(op spell\)/g, '(the "spell" operation)');
  return rules + `

How you answer in this call: every reply is one JSON object, as below. "say" is what your voice says aloud at once, so write it as natural speech: no ** or other markup, no lists and no counting out points ("one, two, three" or "1)"), numbers written as words, one to three sentences in conversation and at most about 80 words when you teach. The board, an exercise or a sentence to record appear on the screen while you speak: refer to them ("look at the board") instead of reading them out. Lines inside <school> tags come from Alimun's system: follow them.
What the student says reaches you as text from speech recognition, not as sound:
- Spelling, capitals and punctuation are the recogniser's, not the student's: never comment on them, and never treat British and American spellings (favourite and favorite) as different words or sounds.
- You cannot hear how a word was pronounced. Never say a sound was wrong on your own judgement; speak about pronunciation only from the speech checker's notes, or from a score on the card. Without a note, a word was fine.
- When a line has a word that does not fit (a name nobody mentioned, a strange word in an otherwise right sentence), it was most likely misheard: treat the sentence as what the student most probably said, or ask; never correct the student for it.
- Teach only rules, sounds and examples you are certain are right for standard ${session.language}. A wrong rule is worse than none.
${brain.replyFormat(ui, pron)}`;
}

/** The time left, as the last note of each turn */
function timeNote(secondsLeft) {
  const m = Math.max(0, Math.round((secondsLeft || 0) / 60));
  return m >= 1 ? `Time left in this call: about ${m} minute${m === 1 ? '' : 's'}.` : 'Time left in this call: under a minute.';
}

module.exports = { configured, think, callCost, timeNote, CALL_MODEL, pickVoice, pieces, speakable, ssml, speak, systemFor, LOCALE, TTS_USD_PER_CHAR };
