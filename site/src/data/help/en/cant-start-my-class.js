// Checked 2026-11-16 against: js/app/teach-classes.js (join: "The classroom did not open." followed by the server's message; sample message;
// Start opens 15 minutes before), api/join-session.js (messages: too early, already ended, cancelled, could not create the video room,
// could not authorize video access; only the class's approved teacher; 1:1 window 10 minutes before), js/app/teach.js (sample notes when signed
// out or not a teacher account), js/translations.js (app_tc_*, app_t_sample_*).
// Not stated: microphone or camera troubleshooting steps inside Daily's room (not in our code), any guaranteed response time from support.
export default {
  slug: 'cant-start-my-class',
  section: 'support',
  subject: 'teachers',
  audience: 'teacher',
  updated: '2026-11-16',
  status: 'draft',
  title: 'I can’t start my class, or my students can’t see or hear me',
  summary: 'Most problems come from opening the class too early, from being signed in with the wrong account, or from a video room that did not open the first time; the message on the classroom page tells you which.',
  body: [
    'If there is no “Start the class” button, it is probably too early: it appears 15 minutes before the start (10 minutes before for a 1:1). When the classroom cannot open, the page says “The classroom did not open.” followed by the reason, for example that the classroom opens 15 minutes before the session starts, that the session has already ended, or that it was cancelled.',
    'If your dashboard shows a note saying it is a sample teacher, you are signed out or signed in with an account that is not your teacher account, and there is no real classroom. Sign in with the email address you teach with.',
    'If the reason says the video room could not be created or video access could not be authorised, wait a moment and press “Start the class” again. If your students cannot see or hear you once you are in, leave the room and join again from the same button while the class is on.',
    'If it still does not work, email support@alimun.com, or use “Contact us” in your dashboard, with the class and its time, and tell your students in the class conversation under Messages.',
  ],
  related: ['start-your-live-class', 'class-time-changed-or-cancelled'],
};
