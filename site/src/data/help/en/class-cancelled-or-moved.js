// Checked 2026-11-16 against: api/_lib/admin-ops.js and api/_lib/email-text/en.json (session.cancelled, session.moved,
// session.reason, session.opens), js/app/bell.js and js/translations.js (app_nt_session_moved, app_nt_session_cancelled),
// api/ops.js and email-text class_late.*_l (teacher running late), Terms sections 6 and 12 (refund of the unused part
// when Alimun cancels a class without a replacement; changes to schedules and teachers).
export default {
  slug: 'class-cancelled-or-moved',
  section: 'support',
  subject: 'classes',
  audience: 'student',
  updated: '2026-11-16',
  status: 'approved',
  title: 'My class was cancelled or moved, or my teacher is late',
  summary: 'We tell you by email and on the bell in your dashboard when a class is cancelled or moved, and by email when your teacher is running late.',
  body: [
    'If a class is cancelled or moved to another time, we email you and show it on the bell in your dashboard, with the new time in your time zone and, when there is one, the reason. A moved class appears at its new time on your Classes page, and the classroom opens 15 minutes before the new start.',
    'If your teacher has not arrived when the class should start, you may get an email saying your teacher is running a few minutes late and has been told. Please stay in the classroom or come back in a few minutes.',
    'Schedules and teachers can change, for example when a teacher is unavailable. Under our Terms and Conditions, if we cancel a class and do not offer a replacement, we refund the unused part of your current billing period.',
    'If you have questions about a cancelled class, write to us from Support in your dashboard, or email support@alimun.com.',
  ],
  related: ['cant-join-my-class', 'missed-a-class', 'how-rooms-start'],
};
