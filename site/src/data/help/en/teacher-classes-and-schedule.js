// Sources checked (internal, never shown): js/app/teach-classes.js (timetable, calendar, create a class, availability), api/create-cohort.js (teacher's languages, availability, 12 weeks, at most 4 active classes), docs/DASHBOARD_PLAN.md step 15 part 2 (teachers cannot cancel or move a class), js/translations.js (app_tc_*, app_t_*)
export default {
  slug: "teacher-classes-and-schedule",
  lang: "en",
  kind: "answer",
  subject: "teaching",
  audience: "teacher",
  title: "Where do I see my classes, and how do I create one?",
  summary: "The Classes page holds your timetable and calendar; you create a class of twelve weeks inside your availability, up to four open classes at a time, and Alimun moves or cancels class dates when needed.",
  words: ["my classes", "timetable", "schedule", "calendar", "create a class", "new class", "availability", "move a class", "cancel a class", "reschedule"],
  updated: "2026-11-12",
  body: [
    { p: "**Classes** shows your next class with **Start the class** and a countdown, a month **Calendar** with your classes and 1:1s, what is **Coming up**, and **The last four weeks** with how many students joined each class and whether its notes are written. Today shows the next seven days. Times are shown in the time zone of the device you are using." },
    { p: "To create a class, first add your free time under **Your availability**. Then press **Create a class** and choose the language and level, the goal, the plan and how many students it allows, the days and a time. Only days and times that fit your availability in every one of the next twelve weeks are offered. You can add a short description that students see when they choose a class. **Create the class** sets up twelve weeks of class dates at once. You can have up to four open classes at a time." },
    { p: "You cannot move or cancel a class date from your dashboard. If you need a date changed, write to Alimun through the Contact page in good time; Alimun moves or cancels it, and your students are told by email and on their bell." }
  ],
  related: ["teaching-your-first-class", "one-on-one-sessions", "course-contracts-and-pay", "teacher-getting-started"],
  missing: [
    "How much notice Alimun needs to move or cancel a teacher's class is not stated anywhere.",
    "Whether teacher-created classes (the older tier classes) and Alimun's rooms both stay in use under the new price list is not settled in the docs; both are described as the code has them."
  ]
};
