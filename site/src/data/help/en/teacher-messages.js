// Sources checked (internal, never shown): js/app/teach-messages.js, js/app/classroom.js (class conversation in the classroom), js/app/teach-students.js (Message button), js/app/teach.js (unread count on Today), js/translations.js (app_tm_*, app_ms_*, app_ts_message)
export default {
  slug: "teacher-messages",
  lang: "en",
  kind: "answer",
  subject: "teaching",
  audience: "teacher",
  title: "How do I message my classes and students?",
  summary: "Messages has one conversation for each class you teach, read by everyone in it, and a private conversation with each student; you can write to a student first.",
  words: ["messages", "chat", "message a student", "class chat", "write to student", "conversation", "unread messages"],
  updated: "2026-11-12",
  body: [
    { p: "**Messages** has one conversation for each class you teach, which everyone in that class can read, and a private conversation with each student, which only you and that student can read. It covers the students of your classes and your 1:1 students. The class conversation is the same one you see under **Chat** in the classroom, so messages written during a class stay there afterwards." },
    { p: "To start a private conversation, press **Write to a student**, or **Message** on a student's page under Students. Messages are plain text. Very long messages need to be split in two, and if you send many very quickly you are asked to wait a moment." },
    { p: "Today shows how many messages are unread. Keep conversations with students on Alimun: the Terms do not allow taking learners or payments off the platform." }
  ],
  related: ["teaching-your-first-class", "teacher-getting-started"],
  missing: [
    "Whether teachers or students get an email or bell notification for a new message: none was found in the code, so none is promised."
  ]
};
