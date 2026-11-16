// Checked 2026-11-16 against: js/app/classes.js trialHtml and js/translations.js (app_tr_inv_h, app_tr_inv_p, app_tr_accept,
// app_tr_decline, app_tr_accepted, app_tr_leave, app_tr_full, app_tr_rate_*, app_tr_rated), api/_lib/email-text/en.json
// (trial.cancelled_*_l), docs/PROGRESS.md 2026-11-14 (teacher hiring step 2: learner invitation and rating),
// api/join-session.js (the class is joined like any other, 15 minutes before).
export default {
  slug: 'free-class-with-a-new-teacher',
  section: 'help',
  subject: 'classes',
  audience: 'student',
  updated: '2026-11-16',
  status: 'approved',
  title: 'I was invited to a free class with a new teacher. What is it?',
  summary: 'It is a free 30-minute class given by a teacher who is joining Alimun; you can take a place, and afterwards tell us how it went with one tap.',
  body: [
    'Before a new teacher starts teaching at Alimun, they give a free 30-minute class to a few learners. When your language and level fit, you may see "You are invited to a free class" on your Classes page, with the day and time in your time zone.',
    'Press Take a place to join, or No, thank you if it does not suit you. Once your place is saved, the class appears in your list on the Classes page and you join it from there, like any other class. If your plans change, use Give up my place so someone else can have it. If all places are taken, the page tells you.',
    'The class is recorded so that Alimun can review the new teacher. Only Alimun staff watch the recording.',
    'After the class you are asked "How was the class?" with three answers: Very good, Good and Not good. Tap one; your answer helps us choose our teachers. If a free class is cancelled, we email you, and you do not need to do anything.',
  ],
  related: ['join-your-live-class', 'trial-class-and-help-class'],
};
