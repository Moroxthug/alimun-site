// Sources checked (internal, never shown): js/app/progress.js (header: level, skills, lessons, history, words, tutor
// sessions; MIN_ANSWERS), js/app/data.js (streakFrom), js/translations.js app_pg_*, app_home_streak*.
export default {
  slug: 'track-progress',
  lang: 'en',
  kind: 'answer',
  subject: 'learning',
  audience: 'student',
  title: 'Where can I see my progress?',
  summary: 'The Progress page shows your level, your skills, the lessons to work on, your weeks and recent milestones, all counted from what you have actually done.',
  words: ['progress', 'my level', 'skills', 'statistics', 'streak', 'how am I doing', 'weak points', 'history', 'words learned'],
  updated: '2026-11-12',
  body: [
    { p: 'Open **Progress** in the menu. Everything there is counted from what you have done; nothing is estimated. At the top you see your course level, the level your level test placed you at, how many lessons and unit tests of your course book you have done, and how many words you have learned out of your flashcards.' },
    { p: '**Skills** shows the share of your answers that were right in listening, speaking, reading, writing, and grammar and words, from practice, the library, mock tests and homework marked by your teacher. Each skill says how many answers it is based on; when there are not enough answers yet, it says so instead of showing a number.' },
    { shot: '#/progress', alt: 'The Progress page with the level, skills and the lessons to work on' },
    { p: '**Lessons to work on** and **Your strongest lessons** come from your answers in the course book; **Practise these** starts a round. **Your weeks** shows the days you practised, read, took a class or handed in homework in each of the last twelve weeks, and **Lately** lists what you finished, such as unit tests, mock test papers, library pieces, marked homework and classes. Your sessions with the tutor are listed there too.' },
    { p: 'The streak on Home counts the days in a row on which you did something. Practise today to keep it going.' }
  ],
  related: ['tests-and-level', 'practice-and-mistake-memory', 'progress-not-saved'],
  missing: []
};
