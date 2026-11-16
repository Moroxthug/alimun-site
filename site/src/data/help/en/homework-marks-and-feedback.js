// Checked 2026-11-16 against: js/app/homework.js (Marked list, score out of 100, feedback, teacher's general feedback notes, course material homework marked from the score), js/app/teach-homework.js (marking: optional drafted feedback via /api/ai?action=grade-submission that the teacher edits before sending, or marked by hand), supabase/migrations/202611071500_notifications.sql (homework_graded notification on marking), js/app/bell.js, js/app/progress.js (marked homework counts for writing), js/translations.js (app_hw_*, app_nt_homework_graded, app_pg_*).
export default {
  slug: 'homework-marks-and-feedback',
  section: 'help',
  subject: 'practice',
  audience: 'student',
  updated: '2026-11-16',
  status: 'approved',
  title: 'Who marks my homework, and when do I see my mark?',
  summary: 'Your teacher marks your homework; when they send the mark, it moves to Marked with a score out of 100 and their feedback, and a notification appears on the bell.',
  body: [
    'Your teacher marks the homework you hand in. While it waits, it is under Waiting for your teacher on the Homework page, and you can still change it.',
    'When marking, your teacher can ask for a draft of the score and comments written by AI, then reads it, changes it as they see fit and sends it themselves. They can also mark without a draft. Nothing reaches you until your teacher sends the mark.',
    'Once it is marked, the homework moves to Marked and a notification on the bell tells you. Press See the feedback to read Marked by your teacher, your score out of 100, your teacher’s comments and your own answer.',
    'Homework that is a course book lesson, a library piece or a mock test paper is marked from your score as soon as you finish it. Lower on the Homework page, Feedback from your teacher holds the general notes your teacher writes about how you are doing. Marked written homework also counts towards your writing skill in Progress.',
  ],
  related: ['hand-in-homework', 'notifications-bell', 'track-your-progress'],
};
