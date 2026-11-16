// Checked 2026-11-16 against: js/app/reader.js (header, PASS = 70, explanation language switch, unit test, best score), js/app/exercises.js (lesson mode: checked at once, "Show the answer" after two wrong tries; test mode), js/app/practice.js (mistakes from lessons and tests come back), docs/APP_PLAN.md (free limit: first 3 units), js/translations.js (app_book_*, app_lock_*, app_nav_book).
export default {
  slug: 'your-course-book',
  section: 'help',
  subject: 'dashboard',
  audience: 'student',
  updated: '2026-11-16',
  status: 'approved',
  title: 'How does my course book work?',
  summary: 'Course book takes you through your course unit by unit: each lesson teaches on a few pages and checks you with exercises, and every unit ends with a unit test you pass with 70%.',
  body: [
    'Open Course book in the menu (Learn on the bottom bar of a phone). You see the book for your course and level, its units and where you left off, with Start or Continue. Each unit has lessons, and each lesson is a few pages that you turn like a book: a page explains something, then checks it with exercises.',
    'Exercises in lessons are checked as soon as you answer. If an answer is wrong you can try again, and after two wrong tries Show the answer appears. The next page opens when the exercises on the page you are on are done.',
    'Every unit ends with a Unit test. Nothing is marked until you check the whole test at the end, and you need 70% to pass and finish the unit. If you do not pass yet, go back over the lessons and take it again; your best score is kept. Answers you get wrong in lessons and tests come back later in your practice rounds.',
    'Explanations are in the language your dashboard is set to, where the book has it. The Explanations switch lets you read them in the language you are learning instead; example sentences, exercises and texts are always in the language you are learning. Some courses also have A second book for your goal, with real situations for what you want to do with the language.',
    'Without a plan, the first three units of each book are open, and the rest shows Comes with a plan; any paid plan opens the whole book. Units that are still being written show Being written and open as soon as they are ready.',
  ],
  related: ['practice-rounds-and-quizzes', 'install-the-app-and-use-offline', 'track-your-progress'],
};
