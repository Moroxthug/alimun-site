/**
 * Pronunciation (docs/AI_TUTOR_PLAN.md, part 4), used by api/tutor.js.
 *  - The tutor sets a sentence to say aloud (tutor_messages.pron, written by the server from the tutor's checked reply).
 *  - score: the student's recording of that sentence, scored by Azure AI Speech pronunciation assessment (scripted,
 *    REST for short audio, at most 30 seconds, the Speech resource in North Europe, Ireland,
 *    named by AZURE_SPEECH_REGION): accuracy, fluency and completeness,
 *    and for each word of the sentence whether it was said well, said differently or missed, with the sound that was
 *    off where Azure names it. The recording is sent to Azure and dropped: it is never stored. Cost in ai_usage as
 *    tutor_pron, under the tutor's daily budget (tutor-brain.js reserve).
 * The browser sends 16 kHz mono 16-bit WAV (converted in the page), which Azure takes as it is.
 * No clock of its own: the attempt is a turn and the turn's time counts it (plan, section 8).
 */

const brain = require('./tutor-brain.js');

/* The course languages as Azure locales: the course voices speak US English and European Portuguese */
const LOCALES = { English: 'en-US', German: 'de-DE', French: 'fr-FR', Spanish: 'es-ES', Italian: 'it-IT', Portuguese: 'pt-PT' };
/* Azure names the sounds in IPA for US English only; elsewhere a sound is named when Azure gives a name */
const IPA_LOCALES = ['en-US'];
/* Billed as standard real-time speech to text, about $1.00 an hour (EU regions), plus up to $0.30 an hour for the assessment */
const PRON_USD_PER_SEC = 1.3 / 3600;
const MAX_SECONDS = 30;
const MAX_BYTES = 44 + 16000 * 2 * MAX_SECONDS + 1024; // 30 seconds of 16 kHz mono 16-bit, with room for the header
const TIMEOUT_MS = 20000;
const WELL = 80, OFF = 60;                              // a word under 60 was said differently; a sound under 60 was off
const MAX_SAY_CHARS = 200, MAX_SAY_WORDS = 25;

function configured() { return !!(process.env.AZURE_SPEECH_KEY && process.env.AZURE_SPEECH_REGION); }
function region() { return String(process.env.AZURE_SPEECH_REGION || '').trim().toLowerCase().replace(/[^a-z0-9]/g, ''); }

/** The sentence a tutor reply sets to say aloud, or '' (no markup, one short sentence or two, with letters in it). */
function cleanSentence(v) {
  if (typeof v !== 'string') return '';
  const s = v.replace(/\*\*|__|[<>{}[\]#*_`|~^]/g, '').replace(/[\u0000-\u001f]+/g, ' ').replace(/\s+/g, ' ').trim();
  if (!s || s.length > MAX_SAY_CHARS || s.split(' ').length > MAX_SAY_WORDS || !/\p{L}/u.test(s)) return '';
  return s;
}

/** Checks the browser's WAV: RIFF/WAVE, PCM, mono, 16 kHz, 16-bit, 0.5 to 30 seconds. Returns { audio, seconds } or { reason }. */
function readWav(body) {
  if (String(body.mime || '').split(';')[0].trim().toLowerCase() !== 'audio/wav') return { reason: 'audio_type' };
  const b64 = String(body.audio || '');
  if (b64.length > Math.ceil(MAX_BYTES / 3) * 4 + 8) return { reason: 'audio_long' };
  const audio = Buffer.from(b64, 'base64');
  if (audio.length < 44 || audio.toString('ascii', 0, 4) !== 'RIFF' || audio.toString('ascii', 8, 12) !== 'WAVE') return { reason: 'audio_type' };
  // The chunks after the header: "fmt " must say PCM mono 16 kHz 16-bit; "data" holds the samples
  let fmt = null, dataLen = 0;
  for (let p = 12; p + 8 <= audio.length;) {
    const id = audio.toString('ascii', p, p + 4), len = audio.readUInt32LE(p + 4);
    if (id === 'fmt ' && p + 24 <= audio.length) fmt = { tag: audio.readUInt16LE(p + 8), ch: audio.readUInt16LE(p + 10), rate: audio.readUInt32LE(p + 12), bits: audio.readUInt16LE(p + 22) };
    if (id === 'data') { dataLen = Math.min(len, audio.length - p - 8); break; }
    p += 8 + len + (len % 2);
  }
  if (!fmt || fmt.tag !== 1 || fmt.ch !== 1 || fmt.rate !== 16000 || fmt.bits !== 16) return { reason: 'audio_type' };
  const seconds = dataLen / 32000;
  if (seconds < 0.5) return { reason: 'audio_short' };
  if (seconds > MAX_SECONDS + 0.5 || audio.length > MAX_BYTES) return { reason: 'audio_long' };
  return { audio, seconds };
}

/* Azure gives the scores flat on NBest and Words (REST) or under PronunciationAssessment (SDK shape): read both */
function pa(x) { return (x && x.PronunciationAssessment) || x || {}; }
function num(v) { const n = Number(v); return Number.isFinite(n) ? Math.max(0, Math.min(100, Math.round(n))) : null; }
function bare(s) { return String(s || '').normalize('NFC').toLocaleLowerCase().replace(/[’‘ʼ`´]/g, "'").replace(/[^\p{L}\p{N}']+/gu, ''); }

/**
 * Azure's answer as the board shows it: the overall scores and each word of the sentence as written, marked
 * ok (said well), diff (said differently, with the sound that was off when Azure names it) or missed. Words Azure
 * cannot line up with the sentence are left unmarked rather than guessed.
 */
function readResult(sentence, d) {
  const best = (d && Array.isArray(d.NBest) && d.NBest[0]) || null;
  if (!best) return null;
  const top = pa(best);
  const said = (Array.isArray(best.Words) ? best.Words : []).filter((w) => pa(w).ErrorType !== 'Insertion');
  const extra = (Array.isArray(best.Words) ? best.Words : []).filter((w) => pa(w).ErrorType === 'Insertion').length;
  const tokens = sentence.split(' ');
  let j = 0;
  const words = tokens.map((t) => {
    const key = bare(t);
    if (!key) return { t };
    // The next of Azure's words that matches this one, looking at most three ahead
    let k = -1;
    for (let n = j; n < Math.min(said.length, j + 3); n++) if (bare(said[n].Word) === key) { k = n; break; }
    if (k < 0) return { t };
    j = k + 1;
    const w = said[k], s = pa(w), score = num(s.AccuracyScore);
    if (s.ErrorType === 'Omission') return { t, s: 'missed' };
    const out = { t, s: s.ErrorType === 'Mispronunciation' || (score != null && score < OFF) ? 'diff' : 'ok', score };
    if (out.s === 'diff') {
      const ph = (Array.isArray(w.Phonemes) ? w.Phonemes : []).map((p) => ({ name: String(p.Phoneme || '').trim(), score: num(pa(p).AccuracyScore) }))
        .filter((p) => p.name && p.score != null && p.score < OFF && p.name.length <= 6).sort((a, b) => a.score - b.score);
      if (ph[0]) out.sound = ph[0].name;
    }
    return out;
  });
  const result = {
    sentence, accuracy: num(top.AccuracyScore), fluency: num(top.FluencyScore), completeness: num(top.CompletenessScore), score: num(top.PronScore),
    heard: String(best.Display || d.DisplayText || '').replace(/[\u0000-\u001f]+/g, ' ').trim().slice(0, 300),
    words, extra,
  };
  if (result.accuracy == null) return null;
  if (result.score == null) result.score = Math.round((result.accuracy + (result.fluency ?? result.accuracy) + (result.completeness ?? 100)) / 3);
  return result;
}

/** How the attempt went, for the tutor (the browser shows the same in its own words) */
function forTutor(r) {
  const diff = r.words.filter((w) => w.s === 'diff'), missed = r.words.filter((w) => w.s === 'missed');
  return `I said the sentence "${r.sentence || ''}" aloud. Pronunciation score ${r.score} out of 100 (accuracy ${r.accuracy}, fluency ${r.fluency ?? '?'}, completeness ${r.completeness ?? '?'}).` +
    (diff.length ? ' Said differently: ' + diff.map((w) => `"${bare(w.t) || w.t}"${w.sound ? ' (the sound /' + w.sound + '/)' : ''}`).join(', ') + '.' : '') +
    (missed.length ? ' Missed: ' + missed.map((w) => `"${bare(w.t) || w.t}"`).join(', ') + '.' : '') +
    (!diff.length && !missed.length ? ' Every word was said well.' : '');
}

/**
 * Scores one recording against the sentence. Throws { code: 'budget' | 'unavailable' | 'unheard' | 'pron' }.
 */
async function score(supabase, userId, { audio, seconds, sentence, language }) {
  const locale = LOCALES[language] || 'en-US';
  const row = await brain.reserve(supabase, userId, 'tutor_pron', Math.max(1, seconds) * PRON_USD_PER_SEC);
  const t0 = Date.now();
  const settle = (patch) => supabase.from('ai_usage').update(Object.assign({ latency_ms: Date.now() - t0 }, patch)).eq('id', row.id);
  let d;
  try {
    const params = { ReferenceText: sentence, GradingSystem: 'HundredMark', Granularity: 'Phoneme', Dimension: 'Comprehensive', EnableMiscue: 'True' };
    if (IPA_LOCALES.includes(locale)) params.PhonemeAlphabet = 'IPA';
    const url = `https://${region()}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=${locale}&format=detailed`;
    const r = await fetch(url, {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.AZURE_SPEECH_KEY,
        'Content-Type': 'audio/wav; codecs=audio/pcm; samplerate=16000',
        'Pronunciation-Assessment': Buffer.from(JSON.stringify(params), 'utf8').toString('base64'),
        Accept: 'application/json',
      },
      body: audio, signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    d = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error('Azure ' + r.status + ': ' + JSON.stringify(d).slice(0, 200));
  } catch (e) {
    await settle({ success: false, cost_usd: 0, error: String(e && e.message || e).slice(0, 300) });
    throw { code: 'pron', message: e && e.message };
  }
  // Azure bills the audio it received, heard or not
  const cost = Math.round(Math.max(1, seconds) * PRON_USD_PER_SEC * 1e6) / 1e6;
  const base = { provider: 'azure', model: 'pronunciation-assessment:' + locale, input_tokens: 0, output_tokens: 0, cost_usd: cost };
  const result = d && d.RecognitionStatus === 'Success' ? readResult(sentence, d) : null;
  if (!result) {
    await settle(Object.assign(base, { success: false, error: 'unheard: ' + String(d && d.RecognitionStatus || 'no result').slice(0, 60) }));
    throw { code: 'unheard' };
  }
  await settle(Object.assign(base, { success: true, error: null }));
  return result;
}

module.exports = { configured, cleanSentence, readWav, readResult, forTutor, score, LOCALES, WELL, OFF };
