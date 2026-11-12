// Sources checked (internal, never shown): js/app/practice.js (header: rounds, mistake memory, listening, speaking,
// quizzes, teacher and tutor sets), js/app/progress.js (Practise these), api/ai.js (transcribe needs a plan, daily caps),
// js/translations.js app_pr_*, app_qz_*, app_ex_speak_*, app_soon_practice_text; docs/DASHBOARD_PLAN.md steps 5 and 7.
export default {
  slug: 'practice-and-mistake-memory',
  lang: 'en',
  kind: 'guide',
  subject: 'learning',
  audience: 'student',
  title: 'Practice and your mistakes',
  summary: 'How Practice works: quick rounds from your course book, your mistakes coming back until you know them, listening, speaking, quizzes and sets from your teacher or tutor.',
  words: ['practice', 'practise', 'quick round', 'mistakes', 'wrong answers', 'quiz', 'beat the clock', 'listening round', 'speaking practice', 'exercises from teacher', 'streak'],
  updated: '2026-11-12',
  body: [
    { h: 'Quick rounds from your book' },
    { p: 'Open **Practice** in the menu and press **Start a round**. A quick round takes exercises from the units of your course book you have already reached and mixes them in new ways: a gap exercise can come back as a word bank, matching as memory cards or a crossword, so the same item rarely looks the same twice. Rounds come from your course book, so start the first lesson of your book before your first round.' },
    { shot: '#/practice', alt: 'The Practice page with A quick round and Your mistakes' },
    { h: 'Your mistakes come back' },
    { p: 'Every answer you get wrong, in lessons, unit tests or rounds, is remembered. Those answers come back first in your next rounds, and then again at growing intervals until you know them; items you have not seen yet come next. The **Your mistakes** card shows how many answers are waiting to be tried again.' },
    { p: 'The **Progress** page also lists the **Lessons to work on**, with a **Practise these** button that starts a round.' },
    { h: 'Listening and speaking' },
    { p: 'When the recordings of your course book are ready, a **Listening round** gives you exercises with the voices of the book: listen and choose, fill the gap or write what you hear. Until then, the page says so.' },
    { p: 'In **Speaking**, you pick a tutor voice, listen to sentences from your book, press **Record** and say them yourself. Your recording is turned into text by speech recognition (an AI service) and compared word by word; it is checked and not kept. Speaking practice needs you to be signed in and comes with a plan, and there is a daily limit that resets at midnight UTC.' },
    { h: 'Quizzes' },
    { p: 'Under **Quizzes** you find **Beat the clock**, quick questions against the timer; a **Mixed quiz** from every unit you have reached; and, **Unit by unit**, a **Quiz** checked at the end or a **Long practice** set with help along the way. Your best scores are kept, and the questions you miss come back in your practice rounds.' },
    { h: 'From your teacher and your tutor' },
    { p: 'Exercise sets your teacher sends you appear under **From your teacher**. After a session with the tutor, its practice for you appears under **From your tutor**: exercises, a listening, sentences to say and a writing task. For both you can press **Do it again**, or **Just my mistakes** to replay only what you got wrong.' },
    { p: 'When you are signed in, everything is saved to your account, and a finished round counts towards your streak on Home. Without an account, practice is kept in this browser only.' }
  ],
  related: ['flashcards', 'using-the-book', 'speaking-practice-does-not-hear-me', 'track-progress', 'progress-not-saved'],
  missing: [
    'The requested topic "focus rounds" does not exist as a feature in the code; the closest are Progress → Lessons to work on → Practise these, and the level test focus topics that start practice. Left out.',
    'The exact daily limit for speaking practice is a server setting (AI_DAILY_CALL_CAP and a per-user budget in api/ai.js); left as "a daily limit".'
  ]
};
