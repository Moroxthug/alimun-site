// Checked 2026-11-16 against: js/app/progress.js (header: level, skills as share of answers with what they rest on, not enough answers yet, lessons to work on and strongest, last twelve weeks, milestones, tutor sessions), js/app/shell.js (needsNet: progress needs a connection), docs/DASHBOARD_PLAN.md (step 12), js/translations.js (app_pg_*, app_off_needs_*).
export default {
  slug: 'track-your-progress',
  section: 'help',
  subject: 'dashboard',
  audience: 'student',
  updated: '2026-11-16',
  status: 'approved',
  title: 'Where can I see my progress?',
  summary: 'Progress shows your level, your skills, your lessons and your weeks, counted only from what you have actually done.',
  body: [
    'Open Progress, under With your teacher in the menu. Everything on it is counted from what you have done; nothing is estimated.',
    'At the top you see your course level, the level your level test placed you at, how many course book lessons you have done and unit tests you have passed, and how many words you have learned out of your flashcards.',
    'Skills shows the share of your answers that were right in listening, speaking, reading, writing, and grammar and words, from practice, the library, mock tests and marked homework, and says what each one is based on. When there are not enough answers yet, it says so instead of showing a number.',
    'Lessons to work on and Your strongest lessons point to course book lessons, with Practise these. Your weeks shows the days you practised, read, took a class or handed in homework in each of the last twelve weeks, and Lately lists what you finished recently. Sessions with your tutor lists your latest sessions with the tutor.',
    'Progress needs a connection. When you are offline it says This needs a connection and opens again when you are back online.',
  ],
  related: ['find-your-way-around-the-dashboard', 'practice-rounds-and-quizzes', 'progress-or-homework-missing'],
};
