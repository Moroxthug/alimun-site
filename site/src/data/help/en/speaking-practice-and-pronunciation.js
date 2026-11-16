// Checked 2026-11-16 against: api/tutor.js (voice turns up to about 30 seconds, pronounce action scored by Azure, recordings dropped), api/ai.js (transcribe: Practice speaking, Groq Whisper, not stored, plan or tutor set, daily caps, no tutor minutes used), js/app/exercises.js (getUserMedia, 15-second recording per sentence), js/app/tutor.js (Speak, Say it, Hear it slowly, accuracy/fluency/completeness), js/app/tutor-live.js (microphone, supported browsers), site/src/blocks/legal/gdpr.html (section 4), js/translations.js en (app_tu_speak, app_tu_rec_stop, app_tu_pron_h, app_tu_pron_say, app_tu_pron_slow, app_tu_pron_acc, app_tu_pron_flu, app_tu_pron_comp, app_tu_pron_key, app_pr_speak_h, app_pr_speak_p, app_ex_speak_hint, app_ex_speak_plan, app_ex_speak_limit, app_ex_speak_mic, app_tu_err_mic, app_tu_err_unheard, app_tl_mic, app_tl_unsupported, app_tl_mute).
export default {
  slug: 'speaking-practice-and-pronunciation',
  section: 'help',
  subject: 'tutor',
  audience: 'student',
  updated: '2026-11-16',
  status: 'approved',
  title: "How do speaking practice and pronunciation checks work, and how do I allow the microphone?",
  summary: "You speak to the tutor or record sentences in Practice, an AI turns your voice into text or scores your pronunciation, and your recordings are never kept.",
  body: [
    "With the tutor, press Speak, say what you want (up to about 30 seconds) and press Stop and send; your words appear as your message. Sometimes the tutor puts a sentence on the board under Say this sentence aloud. Press Say it, read it out, and an AI pronunciation check scores how you said it: words in green were said well, words underlined in coral were said a little differently, and you see your accuracy, fluency and completeness. Hear it slowly plays the sentence slowly, and the tutor asks you to try again until it is right.",
    "In Practice, Speaking lets you pick your tutor, listen, then tap Record and say each sentence. Your recording is turned into text by AI and compared with the sentence. Speaking practice comes with a plan, has a daily limit that resets at midnight UTC, and does not use your tutor minutes.",
    "The first time you speak, your browser asks whether Alimun may use your microphone: choose Allow. If you refused by mistake, allow the microphone for alimun.com in your browser's site settings and reload the page. In a call you can press Mute at any time. Calls need a recent Chrome, Safari, Edge or Firefox; if yours cannot make the call, you can always write to your tutor instead. If nothing was heard, speak a little closer to the microphone.",
    "Your recordings are never stored. They are sent to our AI providers only to turn them into text (Groq) or to score your pronunciation (Microsoft Azure, servers in the European Union), and are then discarded; for pronunciation we keep only the scores. In a live call your voice goes to Google's Gemini API to hold the call, and the audio is not stored.",
  ],
  related: ['what-is-the-tutor', 'how-tutor-minutes-work', 'does-the-tutor-keep-my-conversations'],
};
