// Checked 2026-11-16 against: js/app/classes.js (Join window, Classes page, classroom), js/app/classroom.js (class panel),
// api/join-session.js (15 minutes before to 90 minutes after, plan or pass required), js/translations.js (app_cl_*, app_cr_*,
// app_nav_classes), api/_lib/email-text/en.json (enrolled.opens), site/src/data/course-faq.js (camera, microphone, browser).
export default {
  slug: 'join-your-live-class',
  section: 'help',
  subject: 'classes',
  audience: 'student',
  updated: '2026-11-16',
  status: 'approved',
  title: 'How do I join my live class?',
  summary: 'Open Classes in your dashboard and press Join, which opens 15 minutes before your class starts.',
  body: [
    'Your live classes are on the Classes page of your dashboard. The card at the top shows your next class, its day and time, your teacher and how long until it starts. The Join button is greyed out until the classroom opens, 15 minutes before the start, and the page tells you so.',
    'When the classroom is open, press Join. The classroom opens inside your dashboard, in your browser, so there is nothing to install. You need a computer or another device with a camera, a microphone and a stable connection. If your browser asks whether the page may use your camera and microphone, allow it.',
    'Beside the video there is a class panel with the chat and the words from the class. Anything you write in the chat is seen by the whole class. When your teacher opens the board, it appears next to the video.',
    'You can still join if you are late: the classroom stays open until 90 minutes after the start. To join, you need an active plan that includes the class, or a trial or help-class place for that date. Use Add to my calendar on the same card to put the class in your own calendar.',
  ],
  related: ['class-times-and-time-zones', 'cant-join-my-class', 'missed-a-class'],
};
