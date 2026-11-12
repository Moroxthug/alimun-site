// Sources checked (internal, never shown): js/app/tests.js (header: papers, timer, marking with a plan),
// js/app/reader.js (unit test), js/app/progress.js (level section), js/app/shell.js (focusCard: /level-test),
// js/app/settings.js (level), js/translations.js app_mt_*, app_book_test_*, app_pg_*, app_home_focus_*, app_st_course_p.
export default {
  slug: 'tests-and-level',
  lang: 'en',
  kind: 'answer',
  subject: 'learning',
  audience: 'student',
  title: 'Which tests can I take, and how is my level set?',
  summary: 'The level test places you, unit tests finish each unit of your book, and Mock tests give full practice papers in the format of real exams; your course level is set in Settings.',
  words: ['mock test', 'practice exam', 'IELTS', 'B2 First', 'C1 Advanced', 'Goethe', 'telc', 'level test', 'placement', 'my level', 'change level', 'unit test', 'exam results'],
  updated: '2026-11-12',
  body: [
    { p: 'Your **level test** places you at a level and points to the topics to work on first; Home shows the result under **Your focus topics**, with **Take the test again** if you want to retake it. Your course level is the one in **Settings**, under **Language you are learning** and **Level**. Changing the language or level there changes your book, practice and library. **Progress** shows your course level, the level your test placed you at, and how many lessons and unit tests of your book you have done.' },
    { p: 'Each unit of your course book ends with a **Unit test**. You see the answers when you check it, and you need the score the page shows to finish the unit. You can take it again, and your best score is kept.' },
    { p: '**Mock tests** in the menu are full practice tests in the format of real exams, such as IELTS, B2 First, C1 Advanced, Goethe and telc, plus Alimun tests for each level. They are written by Alimun and are not official exam material. For now they exist for English and German. A test has papers such as Reading, Writing, Listening and Speaking; you take one paper at a time, in any order, with the time of the real exam. You can leave and come back, and your answers are kept. Nothing is marked until you press **Finish the paper**.' },
    { shot: '#/tests', alt: 'The Mock tests page with exam-format tests and Alimun tests' },
    { p: 'After a paper you see every answer with its explanation and your score part by part. Writing and speaking tasks get drafted marks against the exam\'s criteria, as a guide, for students with a plan, and every task shows a model answer. If you reach the daily limit for marking, open the results again the next day to mark the rest.' },
    { p: 'Mock test and unit test scores count towards your skills on the **Progress** page. They do not change your course level by themselves.' }
  ],
  related: ['track-progress', 'using-the-book', 'practice-and-mistake-memory'],
  missing: [
    'Whether retaking the level test updates the course level in Settings: not confirmed from the dashboard code; left out.',
    'Which exams exist for which language changes with the content files; the text names only what the dashboard text names.',
    'Mock test drafted marks use AI (api/ai.js mark-mock); the dashboard says "Drafted automatically" and the text follows it without the word AI.'
  ]
};
