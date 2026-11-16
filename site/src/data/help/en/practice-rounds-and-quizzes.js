// Checked 2026-11-16 against: js/app/practice.js (header, ROUND = 6, BOXES spaced return of wrong answers, homeView, quizHome, teacherSection, speaking via /api/ai?action=transcribe, saving to practice_items / this browser), docs/DASHBOARD_PLAN.md (steps 5 and 7, speaking notes), docs/APP_PLAN.md (free limit: first 3 exercise kinds), js/translations.js (app_pr_*, app_qz_*, app_lock_types).
export default {
  slug: 'practice-rounds-and-quizzes',
  section: 'help',
  subject: 'practice',
  audience: 'student',
  updated: '2026-11-16',
  status: 'approved',
  title: 'How does Practice work, and why do my mistakes come back?',
  summary: 'Practice gives you short rounds and quizzes from the units of your course book you have reached, and the answers you got wrong come back first until you know them.',
  body: [
    'A quick round is six exercises from the units of your course book you have reached, mixed in new ways so the same item rarely looks the same twice. Press Start a round on the Practice screen. A finished round counts for your streak.',
    'The Your mistakes card shows how many answers are waiting for you. Anything you get wrong in a lesson, a unit test, a quiz or a round comes back first in your next rounds, and each time you get it right it waits a little longer before it comes back again. Items you have not seen yet come after your mistakes.',
    'Under Quizzes you find Beat the clock, 90 seconds to give as many right answers as you can, a Mixed quiz of 15 questions from every unit you have reached, and, Unit by unit, a 12-question Quiz or a Long practice set with help along the way. Quizzes are checked at the end, your best score is kept, and the questions you missed come back in your rounds.',
    'There is also a Listening round with the voices of your course book once its recordings are ready, and Speaking, where you pick your tutor, listen and then say the sentences yourself; your recording is turned into text by speech recognition, compared word by word and not kept. Every kind of exercise lets you try each type of exercise once: the first three kinds are free and every kind comes with a plan. Sets your teacher sends you appear under From your teacher, with Do it again and Just my mistakes.',
    'When you are signed in, your practice is saved to your account. Without an account it is kept in that browser only.',
  ],
  related: ['your-course-book', 'mock-tests', 'speaking-practice-and-pronunciation'],
};
