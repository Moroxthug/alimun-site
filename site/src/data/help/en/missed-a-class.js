// Sources checked (internal, never shown): Terms (blocks/legal/terms.html: "Missed classes are not refunded or rescheduled
// unless your plan says otherwise", "Alimun does not record live classes"), api/join-session.js (enable_recording false;
// window 90 min after start), js/app/classes.js (Class notes, PDF, board from the class, words to flashcards, tutor lesson
// review until the next class), js/app/messages.js, api/_lib/email-text/en.json (notes ready email).
export default {
  slug: 'missed-a-class',
  lang: 'en',
  kind: 'answer',
  subject: 'classes',
  audience: 'student',
  title: 'I missed a class. What happens now?',
  summary: 'Classes are not recorded, and missed classes are not refunded or rescheduled unless your plan says otherwise, but your teacher’s notes, the words and the homework are on the Classes page.',
  words: ['missed class', 'missed lesson', 'could not attend', 'absent', 'recording', 'replay', 'catch up', 'make up class', 'reschedule', 'late'],
  updated: '2026-11-12',
  body: [
    { p: 'If you are late, you can still come in: the **Join** button stays on until 90 minutes after the start.' },
    { p: 'Alimun does not record live classes, so there is no recording to watch. Missed classes are not refunded or rescheduled unless your plan says otherwise.' },
    { p: 'You can still catch up. After each class your teacher’s notes appear under **Class notes** on the Classes page: what was done in class, the homework and its due date, and the words, sometimes with a PDF and the board from the class. We email you when they are ready, and the words go into your **Flashcards** by themselves.' },
    { p: 'Until your next class you can also go over the lesson with the tutor, an AI that recaps the grammar, practises the words and helps you prepare the homework; the button is in the latest notes. If you know in advance that you cannot come, tell your teacher in **Messages**.' }
  ],
  related: ['message-your-teacher', 'join-live-class', 'class-schedule-and-time-zone'],
  missing: [
    'No plan in the current catalogue was found that "says otherwise" (makes up or refunds missed classes); if one does, the answer should name it.',
    'Whether notes and homework are visible to students who did not attend: Classes loads notes for the class, not per attendance, so they appear to be; not tested on a real account.',
    'Whether the teacher can mark a missed class or offer a catch-up 1:1 is not described in the code for the new plans.'
  ]
};
