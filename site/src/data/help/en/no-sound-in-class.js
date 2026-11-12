// Sources checked (internal, never shown): js/app/classes.js (Daily Prebuilt frame in the dashboard), js/app/classroom.js
// (notice chime), docs/HELP_PLAN.md §1 (device check: speaker test, browser, connection).
export default {
  slug: 'no-sound-in-class',
  lang: 'en',
  kind: 'problem',
  subject: 'classes',
  audience: 'student',
  title: 'I cannot hear anything in class',
  summary: 'A guided check for when you cannot hear your teacher or the group in a live class.',
  words: ['no sound', 'cannot hear', 'can\'t hear teacher', 'audio not working', 'silent', 'speaker', 'headphones', 'volume', 'sound problem'],
  updated: '2026-11-12',
  body: [
    { p: 'Answer one question at a time. The page plays a test sound in your browser first.' }
  ],
  check: {
    start: 'speaker',
    steps: {
      speaker: { auto: 'speaker', ask: 'Do you hear the test sound?', yes: 'others', no: 'fix-volume' },
      'fix-volume': { fix: 'Turn up the volume on your device and check that it is not on silent. If you use headphones, check they are connected and chosen as the sound output in your device’s sound settings. On a computer, make sure the browser tab is not muted.', next: 'speaker' },
      others: { ask: 'In the class, can you hear some people but not your teacher or one person?', yes: 'fix-other', no: 'output' },
      'fix-other': { fix: 'That person’s microphone is probably off or not working. Write to them in **Chat** in the side panel so they know.', next: 'done-ask' },
      output: { ask: 'Do you hear nothing at all from the class, although the test sound plays?', yes: 'fix-rejoin', no: 'connection' },
      'fix-rejoin': { fix: 'Leave the class and press **Join** again. On a phone or tablet, tap the video once after it opens, as some browsers only play sound after a tap. If you changed headphones during the class, rejoin so the class uses them.', next: 'done-ask' },
      connection: { auto: 'connection', ask: 'Is your internet connection working well?', yes: 'browser', no: 'fix-connection' },
      'fix-connection': { fix: 'Sound that cuts in and out is usually the connection. Move closer to your router or switch networks, close other apps that use a lot of internet, then rejoin.', next: 'done-ask' },
      browser: { auto: 'browser', ask: 'Is your browser up to date?', yes: 'person', no: 'fix-browser' },
      'fix-browser': { fix: 'Update your browser, or open the class in another up-to-date browser, and join again.', next: 'done-ask' },
      'done-ask': { ask: 'Can you hear the class now?', yes: 'done', no: 'connection' },
      person: { fix: 'Your device plays sound, but the class still does not. A person will help.', handover: true },
      done: { solved: 'Glad you can hear the class now.' }
    }
  },
  related: ['camera-or-microphone-in-class', 'cannot-join-class', 'class-page-blank-or-stuck'],
  missing: [
    'The advice that some mobile browsers only play sound after a tap is general browser behaviour, not something seen in Alimun\'s code; the owner may prefer to drop it.'
  ]
};
