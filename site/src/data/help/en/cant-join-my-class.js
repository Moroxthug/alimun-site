// Checked 2026-11-16 against: api/join-session.js (messages: too early, ended, cancelled, not enrolled, subscription not
// active, could not create the video room; window 15 minutes before to 90 minutes after), js/app/classes.js
// (app_cl_join_error, the server's message is shown under the video), js/translations.js (app_cl_*, app_st_manage_p),
// site/src/data/course-faq.js (camera, microphone, stable connection, in the browser).
// Not confirmed anywhere: a list of supported browsers for the classroom, so none is named.
export default {
  slug: 'cant-join-my-class',
  section: 'support',
  subject: 'classes',
  audience: 'student',
  updated: '2026-11-16',
  status: 'draft',
  title: 'I can\'t join my class, or my camera or microphone is not working',
  summary: 'Check the time, your plan and your browser\'s camera and microphone permission, then try Join again; if it still fails, write to us.',
  body: [
    'If the Join button is greyed out, the classroom is not open yet: it opens 15 minutes before the start and stays open until 90 minutes after. If the classroom could not open, a message under the video says why. "This session was cancelled" or "This session has already ended" means there is no class to join at that time. "You are not enrolled in this class" means your account does not have a place in it. "Your subscription is not active" means a payment did not go through: open Manage billing in Settings to update your card, then join again.',
    'If you see "The classroom could not open. Try again, or come back closer to the start", reload the page and press Join again. The classroom runs in your browser, so a stable internet connection matters; closing other tabs and apps that use the camera or the connection can help.',
    'If others cannot see or hear you, check that your browser is allowed to use your camera and microphone for alimun.com, that no other app is using them, and that they are not switched off in the video window. Then leave the classroom and join again.',
    'If you still cannot get in, write to us from Support in your dashboard, or email support@alimun.com, with the class and the time, and the message you saw.',
  ],
  related: ['join-your-live-class', 'class-cancelled-or-moved'],
};
