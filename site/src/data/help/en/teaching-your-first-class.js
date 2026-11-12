// Sources checked (internal, never shown): js/app/teach-classes.js (isOpen 15 before / 90 after, liveView, join, lessonCard, notes, publish), api/join-session.js, api/generate-notes-pdf.js (publish, email first time, marks the session completed), js/app/classroom.js, js/app/board.js, js/app/teach-lessons.js, js/translations.js (app_t_*, app_tc_*, app_cr_*, app_bd_*, app_tp_month_note), docs/LESSONS_PLAN.md, docs/DASHBOARD_PLAN.md step 15
export default {
  slug: "teaching-your-first-class",
  lang: "en",
  kind: "guide",
  subject: "teaching",
  audience: "teacher",
  title: "Teaching your first class",
  summary: "Preparing the lesson, starting the class from 15 minutes before, the classroom with its chat, notes and board, and publishing the class notes afterwards.",
  words: ["first class", "start class", "classroom", "board", "whiteboard", "class notes", "publish notes", "live class teacher", "lesson plan"],
  updated: "2026-11-12",
  body: [
    { h: "Before the class" },
    { p: "Each class date has its own page: choose **Prepare the notes** next to it on the Classes page. At the top, **Lesson for this class** shows the prepared lesson that comes next in the course, where Alimun has written one, with what the class is for. **Open the lesson** shows its tips, a timed plan, the board pages, activities for your class size and the homework. To teach something else, choose another lesson under **Change the lesson**, or **No prepared lesson**; the following classes continue from your choice." },
    { h: "Starting the class" },
    { p: "**Start the class** appears on Today and on the Classes page 15 minutes before the class begins, with a countdown until then. It stays available until 90 minutes after the start. Pressing it opens the classroom inside your dashboard. Allow your browser to use the camera and microphone when it asks. You join as the host of the room, and a short notice tells you each time a student joins or leaves." },
    { shot: "#/classes", alt: "The Classes page with Start the class on the next class" },
    { h: "In the classroom" },
    { p: "Beside the video is the class panel. **Chat** is the class conversation, which everyone in the class can read, also after the class. **Notes** lets you write the class notes while you teach; they are saved as you type. **Words** shows the words from the last class. Screen sharing is in the video's own controls." },
    { p: "Press **Board** to open the board next to the video. It holds the lesson's board pages and blank pages, and your students see everything you draw, type and show. Exercise answers stay hidden until you press **Show the answers**. Under **Who can write** you choose whether only you, everyone or one student can write on the board. With **Everyone solves this** each student works on a page on their own for the time you set and sends it to you; you can open any student's work, show it to the class, and **End the exercise** to bring everyone back to the shared board. The board is saved as you go." },
    { h: "After the class" },
    { p: "Open the class date from Today or Classes and choose **Write the notes**. Add up to ten words with their meaning, which go into your students' flashcards, the grammar point, what you did, the homework with its due date and a note to the class. Only the grammar point is needed to publish. When you press **Publish the notes**, students see them in their dashboard and the class gets an email with the PDF. You can correct and **Publish the changes** later; nobody is emailed a second time." },
    { p: "Publishing the notes also marks the class as done: that is when it counts on your Payouts page, and the classroom for that date closes. On the same page, **The board from this class** shows what was written on the board and your students' own work, and you can let students see the board with the class notes." }
  ],
  related: ["teacher-getting-started", "cannot-start-session", "teacher-classes-and-schedule", "marking-homework", "teaching-material"],
  missing: [
    "Prepared class lessons exist only for the English courses in the code (js/app/teach-lessons.js); the guide says where Alimun has written one.",
    "Whether students are told when a teacher is late or the class has not started was not found."
  ]
};
