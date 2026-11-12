// Sources checked (internal, never shown): site/src/blocks/legal/terms.html (practice tutor: an automated program; AI output
// can be inaccurate; recordings not stored), site/src/blocks/legal/gdpr.html (tutor providers, retention, under 16),
// api/_lib/tutor-brain.js (instructions: no homework done for the student), js/app/tutor.js, js/translations.js app_tu_*,
// app_cl_lesson_p; CLAUDE.md (AI wording allowed for the tutor).
export default {
  slug: 'is-the-tutor-a-person',
  lang: 'en',
  kind: 'answer',
  subject: 'tutor',
  audience: 'student',
  title: 'Is the tutor a real person?',
  summary: 'No. The tutor is an AI that practises with you between classes; your teacher is a real person, and the tutor can make mistakes.',
  words: ['is the tutor real', 'is it a person', 'ai', 'robot', 'bot', 'human tutor', 'who am I talking to', 'teacher or ai'],
  updated: '2026-11-12',
  body: [
    { p: 'No. The tutor in your dashboard is an AI: an automated program that writes on a board, sets exercises, listens to you and speaks. Its voice is generated too. Your teacher, who runs your live classes and marks your homework, is a real person.' },
    { p: 'The tutor can explain grammar on its whiteboard, set exercises where you need them most, talk with you, check your pronunciation, remember what you did together and leave practice for you afterwards. It can also go over a class lesson with you once your teacher has published the notes, and help you prepare your homework without doing it for you.' },
    { p: 'It cannot replace your teacher: it does not mark your homework, cannot change your plan, classes or account, and does not see your payments. Like any AI it can sometimes be wrong or incomplete, so if something it says looks odd, check it with your teacher.' },
    { p: 'What you write or say is used only to hold the conversation, turn your speech into text or score your pronunciation; recordings of your voice are not stored. The Privacy Policy explains which providers are used and how long conversations are kept, and you can delete what the tutor remembers with **Forget everything** on the Tutor page. Learners under 16 may use the tutor only with a parent\'s authorisation.' }
  ],
  related: ['using-the-tutor', 'tutor-minutes'],
  missing: [
    'EU AI Act: the dashboard\'s Tutor page and call do not themselves say the tutor is an AI; see using-the-tutor.',
    '"Does not see your payments" and "cannot change your plan, classes or account" are inferred from api/_lib/tutor-brain.js (the brief has no payment data and the tutor has no account actions); confirm the owner is happy with that wording.'
  ]
};
