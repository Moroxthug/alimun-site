// Sources checked (internal, never shown): api/_lib/one-on-one.js (follow-up 20 min, private class 60 min, from the class teacher's availability, students cancel until 2 h before, note marks it completed), api/join-session.js (1:1 open 10 min before until 15 min after the end), js/app/teach-classes.js (otoOpen, oto note), js/app/teach-account.js (1:1s on Payouts), js/translations.js (app_t_oto_*, app_tc_oto_*, app_tp_oto_line)
export default {
  slug: "one-on-one-sessions",
  lang: "en",
  kind: "answer",
  subject: "teaching",
  audience: "teacher",
  title: "How do 1:1 sessions work for teachers?",
  summary: "Students of your classes book 1:1 follow-ups and private classes in your free time; you join from Classes from 10 minutes before, and write a note after each one, which the student sees.",
  words: ["1:1", "one to one", "one on one", "private class", "follow-up", "booking", "1:1 note"],
  updated: "2026-11-12",
  body: [
    { p: "Students in your classes can book two kinds of 1:1 with you: a **follow-up** of 20 minutes on that week's lesson, for students whose plan includes one, and a **private class** of 60 minutes, which students buy. They book them in the free time you have entered under **Your availability**, at times that do not clash with your classes, and they can cancel until two hours before. Booked 1:1s appear on Today and in your Classes calendar as **Follow-up with** or **Private class with** the student's name." },
    { p: "Press **Join** on the 1:1 to open the room. It opens 10 minutes before the start and stays open until 15 minutes after the end." },
    { p: "After the 1:1, choose **Write the note** and say what you worked on and what to do next, in up to 4,000 characters. You can write it once the 1:1 has started. When you press **Save the note**, the student sees it in their dashboard, and the 1:1 counts as completed on your Payouts page. Today reminds you of follow-up notes still to write." }
  ],
  related: ["teacher-classes-and-schedule", "course-contracts-and-pay", "cannot-start-session"],
  missing: [
    "Students who have only 1:1s with a teacher may not appear on the Students page (open question in docs/DASHBOARD_PLAN.md part 3); not mentioned.",
    "Whether a teacher can cancel or move a booked 1:1 is not in the code; left out."
  ]
};
