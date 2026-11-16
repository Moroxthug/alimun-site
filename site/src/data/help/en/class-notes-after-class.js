// Checked 2026-11-16 against: js/app/teach-classes.js (notesFields, notesView, publish, oto note, nextDue), js/app/teach.js (notesDue: classes
// ended an hour ago without published notes appear in To do), api/_lib/email-text/en.json (notes.*: email to the class with the PDF),
// js/translations.js (app_tc_*, app_cr_notes_*). Who receives the notes email: "the class gets an email with the PDF" (app_tc_pub_p).
export default {
  slug: 'class-notes-after-class',
  section: 'help',
  subject: 'teachers',
  audience: 'teacher',
  updated: '2026-11-16',
  status: 'approved',
  title: 'How do I write and publish the notes after a class?',
  summary: 'Open the class date from Today or Classes, fill in the words and the grammar point, and press “Publish the notes”: your students see them in their dashboard, the words go into their flashcards and the class gets an email with the PDF.',
  body: [
    'Each class date has a notes page, which you open with “Prepare the notes” on Today, from the To do list once the class has ended, or with “Write the notes” under “The last four weeks” on Classes. You can also write in the Notes panel during the class. Everything you type is saved as a draft as you go.',
    'The page has Words (up to ten, each with its meaning and an example sentence if you like), the grammar point and its explanation, what you did in class, the homework with its due date (the next class date unless you change it), and a note to the class. Only the grammar point is needed to publish; everything else is optional. Each word needs its meaning, or remove it.',
    'Press “Publish the notes” when you are ready. Your students see the notes in their dashboard, the words go into their flashcards, and the class gets an email with the notes as a PDF, which you can open with “Open the PDF”. If you correct something later, press “Publish the changes”: students see the corrected notes, and nobody is emailed a second time.',
    'After a 1:1, write your note with “Write the note” on Classes. Say what you worked on and what to do next; the student sees it in their dashboard. You can write it once the 1:1 has started, up to 4,000 characters.',
  ],
  related: ['lessons-and-the-classroom-board', 'set-and-mark-homework', 'teacher-dashboard-at-a-glance'],
};
