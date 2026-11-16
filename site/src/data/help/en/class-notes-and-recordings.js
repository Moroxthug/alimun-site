// Checked 2026-11-16 against: js/translations.js app_cr_rec_note (shown in the classroom: Alimun records short moments,
// staff only, deleted after 30 days or 90 for a whole class; teachers and learners cannot record), api/join-session.js
// (no record button for anyone), Terms section 4 (learners must not record or screenshot others without consent),
// js/app/classes.js (Class notes, PDF, Class words, board from a class), api/generate-notes-pdf.js and
// supabase/migrations/202611071500_notifications.sql (notes-ready email and notification), course-faq.js.
// Note for the owner: Terms section 4 and the course FAQ still say "Alimun does not record live classes".
export default {
  slug: 'class-notes-and-recordings',
  section: 'help',
  subject: 'classes',
  audience: 'student',
  updated: '2026-11-16',
  status: 'draft',
  title: 'Can I watch a recording of my class?',
  summary: 'No, there are no class recordings for learners to watch; after each class you get your teacher\'s notes, the class words and the board instead.',
  body: [
    'Classes are live and are not made available as videos afterwards. What you keep from each class is on your Classes page: under Class notes, what your teacher wrote after the class (the grammar, the new words, what was done in class, the homework and a note from your teacher), with a PDF to download when your teacher adds one. You get a notification when the notes are ready.',
    'The words from each class are added to your flashcards so you can review them, and you can open the board your teacher wrote on with See the board from this class.',
    'As the classroom explains, Alimun records a few short moments of each group class, and Alimun staff may record a whole class if a concern is raised, to check quality and keep everyone safe. Only Alimun staff can see these recordings, and they are deleted after 30 days (90 days for a whole class). Teachers and learners cannot record.',
    'Please do not record, photograph or screenshot a class, your teacher or other learners yourself without the consent of everyone shown. This is part of our Terms and Conditions.',
  ],
  related: ['missed-a-class', 'join-your-live-class'],
};
