// Sources checked (internal, never shown): js/app/messages.js (one conversation per class and one with each class teacher,
// MAX 4000 characters, polling, plain text), app_ms_* keys, js/app/classroom.js (Chat tab is the class conversation),
// js/app/classes.js (app_cl_no_slots "Send your teacher a message").
export default {
  slug: 'message-your-teacher',
  lang: 'en',
  kind: 'answer',
  subject: 'classes',
  audience: 'student',
  title: 'How do I send a message to my teacher?',
  summary: 'Open Messages: there is a conversation with your whole class and a private one with your teacher, available once you are in a class.',
  words: ['message teacher', 'contact teacher', 'write to teacher', 'chat', 'ask my teacher', 'private message', 'class chat', 'talk to teacher'],
  updated: '2026-11-12',
  body: [
    { p: 'Open **Messages**. Once you are in a class you have two conversations: one with your class, which everyone in the class and your teacher can read, and one with your teacher, which only you and your teacher can read. Choose one, write in **Write a message** and press **Send**.' },
    { p: 'The class conversation is the same as the **Chat** in the classroom, so what is written during a class is still there afterwards. New messages show a count next to the conversation.' },
    { p: 'Messages are plain text. A very long message has to be split in two, and if you send many messages very fast you are asked to wait a moment.' },
    { p: 'Your teacher answers when they can; there is no set reply time. For questions about your account or payments, write to us from the Contact page instead.' },
    { shot: '#/messages', alt: 'The Messages page with the class and teacher conversations' }
  ],
  related: ['missed-a-class', 'class-size-and-level', 'your-first-live-class'],
  missing: [
    'Whether teachers get an email or bell notification for a new message was not checked, so the answer does not say the teacher is notified.',
    'Whether students are notified (bell or email) of a teacher\'s reply was not checked.',
    'Trial and help-class pass holders are not enrolled in the class, so they probably have no conversations; not confirmed.'
  ]
};
