// Checked 2026-11-16 against: js/app/teach-students.js (header: attention rules, class page, student page, private notes),
// js/app/teach-messages.js (one conversation per class, one per student, plain text, sending limit), js/translations.js (app_ts_*, app_tm_*, app_ms_*).
// Not stated: whether students or teachers are emailed or notified when a new message arrives (not confirmed).
export default {
  slug: 'students-and-messages',
  section: 'help',
  subject: 'teachers',
  audience: 'teacher',
  updated: '2026-11-16',
  status: 'approved',
  title: 'How do I follow my students’ progress and message them?',
  summary: 'Students shows each class and each student from what they actually do between classes, with those who need attention first, and Messages holds one conversation per class and a private one per student.',
  body: [
    'Students lists the students of your classes, class by class, with those who need attention first: a student who has not practised for 7 days, has missed the last two classes, or has homework past its due date that is not handed in.',
    'Open a class with “See the class” to see who came to class over the last eight weeks, where the class struggles (the course book lessons with the most wrong answers in practice), how far each student is in the course book, and the homework with its marks. Open a student to see the same figures they see on their own Progress page, their homework with marks, and the notes about them.',
    'You can add a note to a student. Students can read a note in their dashboard, unless you tick “Private”: then only teachers and Alimun see it.',
    'Messages has one conversation per class you teach, which everyone in that class can read, and a private conversation with each student, which only you and that student can read. To start one, choose the student under “Write to a student”; “Message” on a student’s page also takes you to Messages. Messages are plain text. If a message is too long, split it in two; if you send very fast, wait a moment and try again. Unread messages also show on Today.',
  ],
  related: ['set-and-mark-homework', 'teacher-dashboard-at-a-glance'],
};
