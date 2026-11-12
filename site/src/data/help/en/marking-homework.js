// Sources checked (internal, never shown): js/app/teach-homework.js (queue oldest first, markView, drafted, sendMark, set, edit, delete), api/ai.js (grade-submission: approved teacher who set it or teaches the class, usage limits), supabase/migrations/202611071500_notifications.sql (homework_graded), Terms §3, Privacy §4, js/translations.js (app_th_*, app_nt_homework_graded), docs/DASHBOARD_PLAN.md step 15 part 4
export default {
  slug: "marking-homework",
  lang: "en",
  kind: "guide",
  subject: "teaching",
  audience: "teacher",
  title: "Setting and marking homework",
  summary: "Setting homework for a class or one student, the queue of work to mark oldest first, and marking with a grade and feedback drafted by AI that you check and change before sending.",
  words: ["mark homework", "grade homework", "marking", "feedback", "AI feedback", "set homework", "homework queue", "essay marking", "speaking homework"],
  updated: "2026-11-12",
  body: [
    { h: "Setting homework" },
    { p: "Open **Homework** and press **Set homework**. Choose who it is for, a whole class or one student, and what kind of homework it is: **A task to write or say**, **A course book lesson**, **A library piece** or **A mock test paper**. For a task you write the title and exactly what the student should do, and can set a minimum number of words. **Draft a task for me** writes a task in the language your students are learning, at their level, from a topic you give; it only fills the form, so check it before you press **Set the homework**. Students see the homework in their dashboard straight away." },
    { p: "A course book lesson, library piece or mock test paper is marked by itself when the student finishes it, with the score of their answers. You can change the title, task, due date and minimum words of homework later, and delete it while nobody has handed it in." },
    { h: "What is waiting to be marked" },
    { p: "The Homework page starts with what is waiting for your mark, oldest first, and **Mark the oldest first** opens the piece that has waited longest. Today shows the same count. Under **Homework you have set**, each piece shows who has handed it in, who is late and who has not handed it in yet." },
    { shot: "#/homework", alt: "The teacher's Homework page with the pieces waiting to be marked" },
    { h: "Marking a piece" },
    { p: "The marking page shows the task and the student's answer side by side; for spoken homework you read what the student said. Press **Draft the feedback** to get a suggested mark and feedback drafted by AI: an overall view, what went well, what to work on next and one sentence corrected. The draft only fills the form. Nothing is sent until you send it, and the mark and feedback the student receives are yours, so read the work and change anything you disagree with." },
    { p: "Give a **Mark out of 100**, which students see as a percentage, and write or edit the **Feedback**. You can also mark entirely by hand without a draft. Press **Send to the student**: the student sees the mark and your feedback, and their bell tells them it has been marked. **Next to mark** takes you to the next piece. If you change a mark later, press **Send the changes**." },
    { p: "Drafts are limited to a number in a short time. If you see that there have been too many drafts, wait a few minutes or carry on marking by hand." }
  ],
  related: ["teaching-material", "teacher-getting-started", "teaching-your-first-class"],
  missing: [
    "The exact draft limit (per teacher and per day) is a server setting in api/ai.js, not stated here."
  ]
};
