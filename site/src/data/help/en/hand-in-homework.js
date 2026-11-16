// Checked 2026-11-16 against: js/app/homework.js (list sections, editor, draft kept in this browser, word count and minimum, hand-in confirmation, change until marked, speaking up to three minutes transcribed and not kept, course material homework, "Check before I hand it in" from 15 words via /api/ai?action=homework-check for students with a plan, offline hand-in), api/ai.js (homework-check is an AI action), docs/DASHBOARD_PLAN.md (step 11 decisions), docs/APP_PLAN.md (step 2: homework handed in offline), js/translations.js (app_hw_*).
export default {
  slug: 'hand-in-homework',
  section: 'help',
  subject: 'practice',
  audience: 'student',
  updated: '2026-11-16',
  status: 'approved',
  title: 'How do I hand in my homework?',
  summary: 'Open Homework, choose the task, write or record your answer and press Hand it in; you can still change it until your teacher marks it.',
  body: [
    'Homework shows what your teacher has set, under To do, Waiting for your teacher and Marked. Each task shows its type and due date, and late ones say so. Press Start, or Continue if you have already begun, to open it.',
    'For written homework, write your answer under The task. The word count shows how many words you have against your teacher’s minimum. Your draft is kept on this device as you type, so you can stop and come back to it on the same device. Press Hand it in and confirm with Yes, hand it in. If your text is shorter than your teacher asked, you are asked whether to hand it in anyway.',
    'For speaking homework, record your answer, up to three minutes. Your words are written down and handed in as text, and the recording is not kept. Read what we heard and correct anything that was misheard before you hand it in.',
    'Some homework is a lesson from your course book, a library piece or a mock test paper. Open it with the button on the task and finish it: it counts as handed in, with your score, as soon as you are done.',
    'Once handed in, you can still change your answer until your teacher marks it: open it, edit it and press Hand in the new version. With a plan, Check before I hand it in gives you a few pointers on a written text of at least 15 words, drafted by AI; it does not rewrite your text or give a mark. If you are offline, your homework is kept on the device and handed in when you are back online.',
  ],
  related: ['homework-marks-and-feedback', 'progress-or-homework-missing', 'install-the-app-and-use-offline'],
};
