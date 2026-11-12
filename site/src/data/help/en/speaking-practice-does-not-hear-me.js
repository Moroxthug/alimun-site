// Sources checked (internal, never shown): js/app/exercises.js (getUserMedia and MediaRecorder; refused microphone shows
// app_ex_speak_mic; 15-second recording per sentence), js/app/practice.js (transcribe: sign-in, plan, daily limit),
// js/app/tutor.js (Speak, 30 seconds, app_tu_err_mic, app_tu_err_unheard, app_tu_err_listen), js/app/tutor-live.js (speech gate,
// app_tl_mic, app_tl_unsupported, Mute), api/ai.js (transcribe needs a plan, daily caps), js/translations.js app_ex_speak_*,
// app_tu_err_*, app_tl_*.
export default {
  slug: 'speaking-practice-does-not-hear-me',
  lang: 'en',
  kind: 'problem',
  subject: 'learning',
  audience: 'student',
  title: 'Speaking practice does not hear me',
  summary: 'What to check when Speaking in Practice, Speak in the tutor or a call with the tutor does not pick up your voice: the browser, the microphone permission, the daily limits and how you speak.',
  words: ['microphone not working', 'mic', 'does not hear me', 'speaking not working', 'record button', 'nothing was heard', 'allow microphone', 'tutor cannot hear me', 'voice not recognised'],
  updated: '2026-11-12',
  body: [
    { p: 'This covers **Speaking** in Practice, the **Speak** button in a written session with the tutor and a call with the tutor. Each check takes a moment.' }
  ],
  check: {
    start: 'browser',
    steps: {
      browser: { auto: 'browser', ask: 'Are you using a recent version of Chrome, Safari, Edge or Firefox?', yes: 'mic', no: 'fix-browser' },
      'fix-browser': { fix: 'Speaking needs a recent browser that can record sound. Open Alimun in an up-to-date Chrome, Safari, Edge or Firefox, sign in and try again. If you opened Alimun from inside another app, such as a messaging app, open it in your normal browser instead.', next: 'browser' },
      mic: { auto: 'mic', ask: 'When you speak, does the microphone level move?', yes: 'limit', no: 'fix-permission' },
      'fix-permission': { fix: 'Your browser has to be allowed to use the microphone. Click the icon beside the address bar, allow the microphone for alimun.com and reload the page. Check that the right microphone is chosen in your device settings, that it is not muted, and close other apps that may be using it, such as a video call. In a call with the tutor, also check that you have not pressed Mute.', next: 'mic' },
      limit: { ask: 'Does the page say that speaking comes with a plan, or that you have reached today\'s limit?', yes: 'fix-limit', no: 'heard' },
      'fix-limit': { fix: 'Speaking in Practice needs you to be signed in and comes with a plan, and it has a daily limit that resets at midnight UTC. With the tutor, voice practice is up to 30 minutes a day and uses your tutor minutes, which the Tutor page shows. Plans and minutes are on the Plans and prices page in Settings. If you think the limit is wrong, talk to a person.', handover: true },
      heard: { ask: 'Do your words appear, but with some words wrong or missing, or does it say nothing was heard?', yes: 'fix-clarity', no: 'person' },
      'fix-clarity': { fix: 'Speak a little closer to the microphone, in a quiet place, at your normal pace. Start speaking just after you press Record or Speak, say the whole sentence and then stop: a recording only lasts a short time, and the tutor shows the seconds left. Taps, rustling and moving the phone in your hand can cover your voice. If a word was misheard, try again; in homework you can correct the text before you hand it in.', next: 'again' },
      again: { ask: 'Does it hear you now?', yes: 'done', no: 'person' },
      person: { fix: 'Something else is getting in the way. Talk to a person and say which page you were on and what the page showed.', handover: true },
      done: { solved: 'Glad it works. Your recordings are only used to check what you said and are not kept.' }
    }
  },
  related: ['practice-and-mistake-memory', 'using-the-tutor', 'tutor-minutes', 'sound-does-not-play-in-lesson'],
  missing: [
    'The exact recording length in Practice (15 seconds, js/app/exercises.js) is not shown on the page; written as "a short time".'
  ]
};
