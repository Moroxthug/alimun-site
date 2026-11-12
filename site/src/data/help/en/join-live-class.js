// Sources checked (internal, never shown): js/app/classes.js (joinable(), OPEN_BEFORE 15, CLOSE_AFTER 90, Join button,
// liveView, join()), js/app/shell.js (Home "Join class"), api/join-session.js (enrolment or one-date pass, active plan,
// window 15 min before to 90 min after; 1:1 bookings 10 min before to 15 min after the end), app_cl_* keys, Terms §5.
export default {
  slug: 'join-live-class',
  lang: 'en',
  kind: 'answer',
  subject: 'classes',
  audience: 'student',
  title: 'How do I join my live class?',
  summary: 'Press Join on the Classes page or Join class on Home; it switches on 15 minutes before the start and the classroom opens inside your dashboard.',
  words: ['join class', 'class link', 'video call', 'enter class', 'where is the link', 'join button', 'start class', 'zoom link', 'how to join'],
  updated: '2026-11-12',
  body: [
    { p: 'Sign in and open **Classes**. Your next class is at the top with its day, time and teacher. The **Join** button switches on 15 minutes before the start and stays on until 90 minutes after it. Before that it is greyed out and the page says you can join 15 minutes before the start. **Home** has the same button, called **Join class**, once the class is open.' },
    { p: 'Press it and the classroom opens inside your dashboard, with the video and, when your teacher uses it, the board. There is no separate link or app to install: the class always starts from your dashboard, and your browser may ask to use your camera and microphone.' },
    { p: 'To join, you need to be in that class with an active plan, or hold a trial or help-class pass for that date. A 1:1 with your teacher appears in the same list; its room opens 10 minutes before it starts.' },
    { shot: '#/classes', alt: 'The Classes page with the next class and its Join button' },
    { p: 'If the button stays grey at the time of your class, or the classroom does not open, follow the check in **I cannot join my class**.' }
  ],
  related: ['cannot-join-class', 'your-first-live-class', 'class-schedule-and-time-zone', 'camera-or-microphone-in-class'],
  missing: [
    '1:1 join window mismatch: js/app/classes.js shows the Join button for a 1:1 from 15 minutes before, but api/join-session.js only opens 1:1 rooms 10 minutes before (and closes 15 minutes after the end). The answer gives the server rule; the page may let people press Join too early and get an error.',
    'How a trial or help-class pass holder sees the class date and the Join button: js/app/data.js loads classes only from enrolments, so a one-date pass may not appear on Classes or Home. Not confirmed; needs checking before publishing.',
    'Whether reminder emails with a link are sent before each class: no class reminder email exists in api/_lib/email-text; not mentioned.'
  ]
};
