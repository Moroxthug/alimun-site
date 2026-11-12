// Sources checked (internal, never shown): js/app/tutor.js and js/app/tutor-live.js (headers, error keys),
// api/tutor.js (status, turn, written message limit), api/_lib/tutor-brain.js (explanation language),
// site/src/blocks/legal/terms.html (practice tutor: an automated program) and gdpr.html (tutor data, 90 days),
// js/translations.js app_tu_*, app_tl_*, app_lesson_go, app_cl_lesson_p; docs/AI_TUTOR_PLAN.md parts 1 to 7.
export default {
  slug: 'using-the-tutor',
  lang: 'en',
  kind: 'guide',
  subject: 'tutor',
  audience: 'student',
  title: 'Practising with your AI tutor',
  summary: 'How the AI tutor works: writing or talking to it, the whiteboard, exercises and pronunciation, going over a class lesson, what it remembers and how its time is counted.',
  words: ['tutor', 'ai tutor', 'talk with tutor', 'voice call', 'write to tutor', 'whiteboard', 'pronunciation', 'say it', 'tutor memory', 'forget everything', 'go over lesson'],
  updated: '2026-11-12',
  body: [
    { h: 'An AI, not a person' },
    { p: 'The tutor in your dashboard is an AI: an automated program that writes on a board, sets exercises, listens to you and speaks. It is not your teacher and no person reads along while you practise. Your live classes with a teacher stay at the heart of the course; the tutor is for practice between them.' },
    { h: 'Starting a session' },
    { p: 'Open **Tutor** in the menu. The page shows your **Time left**, your past sessions and what your tutor remembers. You can **Write to your tutor**, which opens a written session beside a whiteboard, or, when the call is available, choose one of the tutors, each with their own voice, and press **Talk with** and their name for a live conversation.' },
    { shot: '#/tutor', alt: 'The Tutor page with the time left and the choice of tutors' },
    { h: 'Writing and speaking' },
    { p: 'In a written session you type your message and press **Send**, or press **Speak** to record what you want to say; your words are written down and sent as your message. The tutor answers mostly in the language you are learning, at your level, and writes on the whiteboard: explanations, corrections, small tables and exercises you answer right there. At the lower levels it explains grammar in your dashboard language when that helps. Its replies are read aloud; you can **Turn the voice off** and the replies stay written.' },
    { p: 'In a call you simply talk. What you and the tutor say appears under **What was said**, and the board slides in when the tutor writes something or sets an exercise. Use **Mute** to turn your microphone off and **End the call** when you are done. If nobody speaks for a while, the tutor asks **Are you still there?** and then hangs up, so your minutes do not run on.' },
    { h: 'Pronunciation' },
    { p: 'Sometimes the tutor sets a sentence to say aloud. Press **Say it**, or **Hear it slowly** first. Your pronunciation is checked automatically: words said well turn green, words said a little differently are underlined, and you see scores for accuracy, fluency and completeness. The tutor then helps you say it again until it is right.' },
    { h: 'Going over a class lesson' },
    { p: 'After a live class, once your teacher has published the notes, Home and Classes offer **Go over it with your tutor**. The tutor then starts from your teacher\'s notes: it recaps the grammar, practises the words and helps you prepare the homework without doing it for you. This is open until your class has had its next lesson, and it uses your tutor minutes like any session.' },
    { h: 'After a session' },
    { p: 'When you press **End the session** or end the call, you get a summary. The words you worked on go into your flashcards, marked **From your tutor**, and the tutor leaves practice for you in **Practice** under **From your tutor**. Your past sessions and their summaries are on the Tutor page and on **Progress**.' },
    { h: 'What it remembers' },
    { p: 'Under **What your tutor remembers** you see the short notes it keeps about you, such as mistakes to keep an eye on and what to do next time. **Forget everything** deletes those notes and every past session; this cannot be undone. Conversations are kept for 90 days and summaries until you delete them, as the Privacy Policy explains. Recordings of your voice are never stored.' },
    { h: 'Time' },
    { p: 'Your tutor time is counted by Alimun\'s servers while a session is active, and the tutor stops when your minutes run out. How minutes are given, renewed and bought is explained in the answer on tutor minutes.' }
  ],
  related: ['tutor-minutes', 'is-the-tutor-a-person', 'speaking-practice-does-not-hear-me', 'tutor-minutes-run-out-or-wrong', 'flashcards'],
  missing: [
    'EU AI Act: the Tutor page in the dashboard does not itself say that the tutor is an AI (no app_tu_* or app_tl_* text says so; only the Terms call it "an automated program" and the homepage says "AI tutor"). Owner to decide whether a sentence should be added on the Tutor page and at the start of a call.',
    'Whether the live call is open to every student is an app setting (tutor_live); written as "when the call is available".',
    'The 90-day transcript retention is from the Privacy Policy (gdpr.html); confirm it is still the owner\'s choice.'
  ]
};
