// Sources checked (internal, never shown): js/app/teach-lessons.js (Lessons: prepared class lessons, courses in the code), js/app/teach-material.js (sets, sixteen kinds, drafts through /api/ai?action=draft-set, Try it, send as practice or homework), js/app/teach-classes.js (lesson for a class date), docs/LESSONS_PLAN.md, Terms §3, js/translations.js (app_tl_*, app_tm2_*, app_tc_lesson_*)
export default {
  slug: "teaching-material",
  lang: "en",
  kind: "answer",
  subject: "teaching",
  audience: "teacher",
  title: "What teaching material is there, and can I make my own?",
  summary: "Lessons has the class lessons Alimun prepares for each course, with a plan, tips and board pages; Material is where you make your own exercise sets and send them as practice or homework.",
  words: ["teaching material", "lesson plan", "class lessons", "exercises", "make exercises", "worksheet", "material", "practice set", "quiz"],
  updated: "2026-11-12",
  body: [
    { p: "**Lessons** has every class of the course, prepared by Alimun: what the class is for, tips, a timed plan, the board pages, activities for one student, small groups or larger groups, and the homework. You can try the board exercises there as your students will see them, and use each lesson as it is or adapt it. Lessons still being written are marked **Being written**. Where a course has prepared lessons, each class date follows the next one, and you can choose another on that class date's notes page." },
    { p: "**Material** holds your own exercise sets for a class or one student. Press **Make a set** and choose who it is for first, so the language and level are right. You can write sixteen kinds of exercise, from multiple choice and gap fills to matching, word order and crosswords. **Draft exercises for me** drafts three at a time with AI, from a topic, a text you paste or the course book lessons where your students get most answers wrong; check and change them before you save. Every exercise must pass the same checks as the course book before the set can be saved, and **Try it** shows the set as your students will see it." },
    { p: "Only you see a set until you send it. Send it to a class or student and it appears in their Practice; tick **Also set it as homework, marked by itself from their score** to make it homework too. You can **Take it back** later, and see how many students have done each set." }
  ],
  related: ["marking-homework", "teaching-your-first-class"],
  missing: [
    "Prepared class lessons exist in the code only for the English courses (A1 to C2); the answer does not name the courses.",
    "Whether the owner wants exercise drafts described as AI on public pages (they do use /api/ai); the answer says so in line with the AI rule."
  ]
};
