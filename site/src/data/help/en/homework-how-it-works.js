// Sources checked (internal, never shown): js/app/homework.js (header), js/app/teach-homework.js (drafted feedback the
// teacher edits), supabase/migrations/202610260900_teacher_homework.sql (material homework marked by itself),
// supabase/migrations/202611071500_notifications.sql (homework_graded notification), api/ai.js (homework-check needs a plan),
// site/src/blocks/legal/terms.html (AI-drafted grades checked by the teacher), js/translations.js app_hw_*, app_nt_homework_graded*.
export default {
  slug: 'homework-how-it-works',
  lang: 'en',
  kind: 'answer',
  subject: 'learning',
  audience: 'student',
  title: 'How does homework work, and who corrects it?',
  summary: 'Your teacher sets homework, you write or record your answer and hand it in, and your teacher marks it; you see the mark and feedback on the Homework page.',
  words: ['homework', 'essay', 'hand in', 'submit homework', 'who marks', 'grade', 'feedback', 'correction', 'due date', 'change my answer', 'check before I hand it in'],
  updated: '2026-11-12',
  body: [
    { p: 'Homework is set by your teacher for your class or for you, and appears on the **Homework** page with its due date, under **To do**. Open it and press **Start**. For a written task you write in the editor, which counts your words against the minimum your teacher asked for; your draft is kept in this browser as you write, so you can stop and come back. For a speaking task you record your answer (up to three minutes); your words are written down and handed in as text, and the recording is not kept, so correct anything that was misheard first. When you are ready, press **Hand it in**.' },
    { p: 'Some homework is a lesson from your course book, a library piece or a mock test paper. Open it and finish it: it counts as handed in, with your score, as soon as you are done.' },
    { p: 'Before handing in a written task, students with a plan can press **Check before I hand it in** for a few pointers on the text. It does not rewrite your work and it is not your mark.' },
    { shot: '#/homework', alt: 'The Homework page with To do, Waiting for your teacher and Marked' },
    { p: 'Your teacher corrects and marks your homework. Teachers can start from feedback and a mark drafted by AI, which they read and change before anything is sent to you, so what you receive is always your teacher\'s decision. Until your teacher marks it, your homework sits under **Waiting for your teacher** and you can still change it with **See or change** and **Hand in the new version**.' },
    { p: 'Once it is marked it moves to **Marked**, where **See the feedback** shows your mark out of 100 and **Feedback from your teacher**. You also get a notification on the bell when your homework has been marked.' }
  ],
  related: ['practice-and-mistake-memory', 'track-progress', 'using-the-tutor'],
  missing: [
    'How long a teacher has to mark homework: nothing in the code or Terms; left out.',
    '"Check before I hand it in" uses AI (api/ai.js homework-check) but the dashboard does not call it AI, and it is not in CLAUDE.md\'s list of features that may be named AI; described without the word. Owner to decide.',
    'Whether marked homework can be resubmitted after marking: the database blocks changes after marking, but the page does not say so explicitly.'
  ]
};
