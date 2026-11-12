// Sources checked (internal, never shown): js/app/reader.js (Listen and play buttons only when the book's recordings exist;
// player.play().catch stops quietly), js/app/exercises.js (hear, Slower), js/app/library.js and js/app/tests.js (recording
// still being made, transcript instead; limited plays in mock tests), js/app/tutor.js (voice off remembered in this browser,
// app_tu_voice_failed), js/translations.js app_book_listen, app_ex_hear, app_lb_no_audio, app_mt_no_audio, app_mt_plays_none,
// app_pr_listen_none, app_tu_voice_*.
export default {
  slug: 'sound-does-not-play-in-lesson',
  lang: 'en',
  kind: 'problem',
  subject: 'learning',
  audience: 'student',
  title: 'Sound does not play in a lesson',
  summary: 'What to check when a recording in the book, practice, the library or a mock test, or the tutor\'s voice, does not play.',
  words: ['no sound', 'audio not playing', 'cannot hear', 'listen button', 'recording does not play', 'tutor voice', 'silent', 'volume', 'play button missing'],
  updated: '2026-11-12',
  body: [
    { p: 'This covers the **Listen** and play buttons in your course book, practice, the library and mock tests, and the tutor\'s voice.' }
  ],
  check: {
    start: 'button',
    steps: {
      button: { ask: 'Is there a Listen or play button where you expect the sound?', yes: 'sound', no: 'fix-no-recording' },
      'fix-no-recording': { fix: 'Recordings are added to the course as they are made. Where a recording does not exist yet, the book shows no Listen button, and the library and mock tests say the recording is still being made and offer the transcript to read instead. Listening rounds in Practice start once your course book\'s recordings are ready. Nothing is wrong on your side.', next: 'done' },
      sound: { auto: 'speaker', ask: 'Do you hear the test sound?', yes: 'press', no: 'fix-volume' },
      'fix-volume': { fix: 'Turn the volume up on your device and check it is not muted or set to silent; on a phone, the silent switch can mute sound in the browser. If you use headphones or a Bluetooth speaker, check they are connected, or unplug them and try the device\'s own speaker. Then reload the page.', next: 'sound' },
      press: { ask: 'When you press Listen, does the button change but you still hear nothing?', yes: 'fix-browser', no: 'mock' },
      'fix-browser': { fix: 'Some browsers block sound until you tap the page. Tap the button once more and wait a second. If it still stays silent, reload the page, close other tabs or apps that are playing sound, and check your connection. A recent Chrome, Safari, Edge or Firefox works best.', next: 'connection' },
      connection: { auto: 'connection', ask: 'Does the sound play now?', yes: 'done', no: 'person' },
      mock: { ask: 'Is this the tutor\'s voice, or a recording in a mock test?', yes: 'fix-limits', no: 'person' },
      'fix-limits': { fix: 'In a mock test, each recording can be played only as often as the real exam allows, and the page tells you when you have heard it enough times. With the tutor, check that the voice has not been turned off: the button says Turn the voice on when it is off, and that choice is remembered in this browser. If the tutor\'s voice is not available for a moment, its replies stay written, and the voice also stops when your tutor time runs out.', next: 'connection' },
      person: { fix: 'Talk to a person and say which page and which exercise or piece has no sound.', handover: true },
      done: { solved: 'Glad that is sorted. Press Slower where it is offered to hear a sentence more slowly.' }
    }
  },
  related: ['speaking-practice-does-not-hear-me', 'using-the-book', 'library-reading'],
  missing: []
};
