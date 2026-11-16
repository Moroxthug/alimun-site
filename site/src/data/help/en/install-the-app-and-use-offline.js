// Checked 2026-11-16 against: js/app/offline.js (Settings card, install prompt where the browser offers it, Safari Share steps on iPhone and iPad, downloads of course book, goal book, library shelf and mock tests, Download all, Remove, size, cover button, offline note, answers sent when back online, resync on plan change), js/app/settings.js (card placement), app-sw.js, js/app/shell.js (needsNet), docs/APP_PLAN.md (steps 1 and 2, free limit), js/translations.js (app_off_*, app_hw_queued_p).
export default {
  slug: 'install-the-app-and-use-offline',
  section: 'help',
  subject: 'dashboard',
  audience: 'student',
  updated: '2026-11-16',
  status: 'draft',
  title: 'How do I install Alimun and use it offline?',
  summary: 'In Settings, Use Alimun offline lets you put Alimun on your home screen and download your course book, library and mock tests to use without a connection.',
  body: [
    'Go to Settings and find Use Alimun offline. When your browser offers it, as on Android phones and in Chrome or Edge on a computer, press Install the app: Alimun goes on your home screen and opens full screen, straight to your course. On iPhone and iPad, open your dashboard in Safari, tap Share, then Add to Home Screen. Once it is installed, the card says Alimun is installed on this device.',
    'In the same card you can download your course book, the book for your goal, the listening and reading of your course and the mock tests at your level, with their recordings. Press Download for one item or Download all for everything. Each download shows its size on the device, and Remove deletes it. The cover of your course book also has Download for offline.',
    'Offline, your downloaded books, practice, flashcards and library still work, and your exercises are marked on your device. Your answers are kept and sent when you are back online, and a note tells you once they have been sent. Homework you hand in offline is handed in when the connection is back.',
    'Live classes, the tutor, messages, progress and plans in Settings need a connection; while you are offline they say This needs a connection.',
    'Without a plan, downloads hold the free parts only. When you take a plan, your downloads are completed the next time Alimun opens with a connection, and when a plan ends they go back to the free parts.',
  ],
  related: ['app-not-loading-or-offline', 'your-course-book', 'library'],
};
