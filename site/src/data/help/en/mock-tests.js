// Checked 2026-11-16 against: js/app/tests.js (header, FORMATS, timer that can be hidden, answers in progress kept in this browser, finish confirmation, mark-mock for students with a plan), docs/TESTS.md (scoring, play counts, no predicted grade, Goethe and telc pass marks), docs/DASHBOARD_PLAN.md (step 8 decisions), docs/APP_PLAN.md (free limit: first paper of each mock test), api/ai.js (mark-mock is an AI action), js/translations.js (app_nav_tests, app_mt_*).
export default {
  slug: 'mock-tests',
  section: 'help',
  subject: 'practice',
  audience: 'student',
  updated: '2026-11-16',
  status: 'approved',
  title: 'How do the mock tests work?',
  summary: 'Mock tests are full practice tests in the format of real exams, plus Alimun’s own end-of-level tests, taken one paper at a time and marked when you finish the paper.',
  body: [
    'Open Mock tests in the menu (Tests on a phone). Depending on your course you find practice tests in the format of B2 First, C1 Advanced, IELTS Academic, the Goethe-Zertifikat or telc Deutsch, and the Alimun test for your level. They are written by Alimun in each exam’s format; they are not official exam material, and Alimun is not affiliated with Cambridge English, IELTS, the Goethe-Institut or telc.',
    'A test is made of papers, such as Reading, Writing, Listening and Speaking. Take them in any order, one at a time. Each paper has the time of the real exam, and you can tap the time to hide or show it; when time is up you can still finish your answers. You can leave a paper and come back to it, and your answers are kept on the device you are using until you finish it. In Listening, each recording can be played as often as the real exam allows.',
    'Nothing is marked until you press Finish the paper, and you cannot change your answers after that. You then see every answer with its explanation, your score part by part and the transcripts of the recordings.',
    'Writing and speaking answers get Drafted marks against the exam’s criteria, drafted automatically by AI as a guide, and every task shows a model answer. Pronunciation is not marked. Marking writing and speaking comes with a plan and has a daily limit; if you reach it, open the results again the next day to mark the rest. Your score is never turned into a predicted exam grade, and for Goethe and telc the page shows the pass mark the real exam publishes.',
    'Without a plan, the first paper of each mock test is open and the other papers come with a plan.',
  ],
  related: ['practice-rounds-and-quizzes', 'install-the-app-and-use-offline', 'track-your-progress'],
};
