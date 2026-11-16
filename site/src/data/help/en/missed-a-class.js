// Checked 2026-11-16 against: Terms section 4 (missed classes not refunded or rescheduled unless the plan says otherwise),
// api/join-session.js (classroom open until 90 minutes after the start), js/app/classes.js and js/translations.js
// (Class notes, PDF, Class words copied to flashcards, "See the board from this class", "you were there",
// app_cl_lesson_p tutor recap), api/_lib/email-text/en.json (notes.* email).
export default {
  slug: 'missed-a-class',
  section: 'help',
  subject: 'classes',
  audience: 'student',
  updated: '2026-11-16',
  status: 'approved',
  title: 'What happens if I miss a class?',
  summary: 'Missed classes are not refunded or moved, but your teacher\'s notes, the class words and the board stay in your dashboard so you can catch up.',
  body: [
    'If you are only running late, you can still come in: the classroom stays open until 90 minutes after the start of the class.',
    'If you miss a class completely, it is not refunded or rescheduled, unless your plan says otherwise. This is set out in section 4 of our Terms and Conditions.',
    'You can still catch up. After each class your teacher writes notes, which appear under Class notes on your Classes page with the grammar, the new words, what was done in class and any homework, and you get a notification when they are ready. Where your teacher adds a PDF, you can download it. The class words are added to your flashcards, and you can open the board from that class with See the board from this class.',
    'Until your next class you can also go over the lesson with your tutor, which recaps the grammar, practises the words and helps you prepare the homework. In the calendar, the classes you attended are marked "you were there".',
  ],
  related: ['class-notes-and-recordings', 'join-your-live-class'],
};
