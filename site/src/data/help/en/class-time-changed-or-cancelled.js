// Checked 2026-11-16 against: api/_lib/admin-ops.js (session-update is admin only: cancel or reschedule; emails the class's active students and
// its teacher by default, with the reason when given, and for a move that the classroom opens 15 minutes before the new time; a new time must be
// at least 15 minutes ahead), js/app/teach-classes.js (no cancel or move control for teachers), api/_lib/email-text/en.json (session.*, class_late.*),
// api/ops.js (teacher-late automation: learners told the teacher is on the way). docs/OPERATIONS_PLAN.md.
// Not stated: how much notice a teacher must give, what happens to pay for a cancelled class, substitute arrangements (not confirmed).
export default {
  slug: 'class-time-changed-or-cancelled',
  section: 'support',
  subject: 'teachers',
  audience: 'teacher',
  updated: '2026-11-16',
  status: 'approved',
  title: 'I can’t teach a class: how do I cancel or move it, and what are my students told?',
  summary: 'Class dates are cancelled or moved by Alimun, not from the teacher dashboard, so write to us as early as you can; your students and you are then emailed the change.',
  body: [
    'There is no button in your dashboard to cancel or move a class date. If you cannot teach a class, email support@alimun.com, or use “Contact us” in your dashboard, as early as you can, with the class and the date.',
    'When Alimun cancels or moves a class date, the class’s students and you normally get an email: “Session cancelled” or “Session moved”, with the old and the new time and the reason when one is given. For a moved class, the email says the classroom opens in the dashboard 15 minutes before the new start time. Cancelled dates disappear from your timetable.',
    'If you are simply running late, join as soon as you can. If you are not in the room a few minutes after the start, Alimun may email you, and your learners may be told that you are running a few minutes late and are on your way.',
  ],
  related: ['cant-start-my-class', 'availability-classes-and-contracts', 'start-your-live-class'],
};
