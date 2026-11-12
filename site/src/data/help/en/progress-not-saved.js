// Sources checked (internal, never shown): js/app/reader.js (practice_progress when signed in, this browser otherwise; save
// errors only in the console), js/app/practice.js (practice_items merged with this browser's copy on the first visit),
// js/app/cards.js, js/app/library.js, js/app/tests.js (answers in progress kept in this browser), js/app/homework.js (drafts in
// this browser), js/app/settings.js (course and level change the book), js/app/shell.js (sample modes),
// js/translations.js app_sample_*, app_book_local, app_pr_local, app_fc_local, app_lb_local, app_mt_local, app_st_course_p.
export default {
  slug: 'progress-not-saved',
  lang: 'en',
  kind: 'problem',
  subject: 'learning',
  audience: 'student',
  title: 'My progress was not saved',
  summary: 'What to check when finished lessons, scores, flashcards or practice seem to be missing.',
  words: ['progress lost', 'progress not saved', 'lessons reset', 'scores gone', 'start again', 'lost my work', 'different device', 'sample data', 'flashcards gone'],
  updated: '2026-11-12',
  body: [
    { p: 'When you are signed in, finished lessons, unit tests, practice, flashcards, library pieces and mock test papers are saved to your account. These checks find the usual reasons something seems missing.' }
  ],
  check: {
    start: 'sample',
    steps: {
      sample: { ask: 'Does the page say you are looking at sample data or sample progress?', yes: 'fix-sample', no: 'signed' },
      'fix-sample': { fix: 'Sample data shows when the address ends in ?sample=1, when your data could not be loaded, or when you are not signed in. Press Show my own or Sign in, or reload the page if your data did not load. Nothing you do in the sample is saved.', next: 'sample' },
      signed: { ask: 'Did you do the work while signed in to the same account you are using now?', yes: 'course', no: 'fix-signed' },
      'fix-signed': { fix: 'Without an account, progress is kept in that browser only, and the page says so. It does not move to another phone or browser. Practice answers are added to your account the first time you open Practice signed in on that browser; book progress made while signed out stays in that browser. If you have more than one account, sign in with the one you used.', next: 'course' },
      course: { ask: 'Have you changed the language you are learning or your level in Settings?', yes: 'fix-course', no: 'connection' },
      'fix-course': { fix: 'Each course book keeps its own progress. Changing the language or level gives you a different book, practice and library, so the new book starts at the beginning. Switch back in Settings to see the progress in the other book.', next: 'connection' },
      connection: { auto: 'connection', ask: 'Was your connection working when you finished the work?', yes: 'browser-only', no: 'fix-connection' },
      'fix-connection': { fix: 'Progress is saved as you go, so work done while offline may not have reached your account. Check your connection, reload the page and finish the lesson or exercise again. Your best score is always kept, so redoing it never lowers it.', next: 'browser-only' },
      'browser-only': { ask: 'Is what is missing a homework draft or a mock test paper you had not finished?', yes: 'fix-drafts', no: 'person' },
      'fix-drafts': { fix: 'Homework drafts and answers in a mock test paper you have not finished are kept in the browser you were writing in, until you hand the homework in or finish the paper. Open the same page on that same device and browser to carry on.', next: 'done' },
      person: { fix: 'Talk to a person and say what is missing and roughly when you did it.', handover: true },
      done: { solved: 'Glad you found it. Once handed in or finished, your work is saved to your account.' }
    }
  },
  related: ['using-the-book', 'track-progress', 'practice-and-mistake-memory'],
  missing: [
    'Whether clearing browser data or private browsing loses homework drafts: implied by the code (localStorage), not stated in the dashboard.'
  ]
};
