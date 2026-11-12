// Sources checked (internal, never shown): signup.html (teacher application and account), signin.html (pending and suspended screens, au_teach_*), js/app/teach.js (routes, Today, pending view), js/app/teach-account.js (Settings), js/app/teach-classes.js (availability), api/_lib/email-text/en.json (approved, rejected, suspended, invite), Terms §7, js/translations.js (au_teach_*, app_t_*, app_tst_*)
export default {
  slug: "teacher-getting-started",
  lang: "en",
  kind: "guide",
  subject: "teaching",
  audience: "teacher",
  title: "Getting started as an Alimun teacher",
  summary: "How applying to teach works, what happens once you are approved, the pages of the teacher dashboard, and setting up your profile and availability.",
  words: ["become a teacher", "apply to teach", "teacher application", "approved", "teacher dashboard", "teacher profile", "availability", "getting started teacher"],
  updated: "2026-11-12",
  body: [
    { h: "Applying to teach" },
    { p: "Choose **Apply as a teacher** on the sign-in page. The application asks for the language you teach, your years of teaching experience, your specialty and a short bio, which is shown to your students. Then you create your teacher account with your name, email address, a password and the country you live in, and press **Submit application**. Confirm your email address with the link we send you." },
    { p: "Alimun reads every application and replies by email. Until then, signing in shows **Your application is being reviewed**. When you are approved you receive a welcome email, and the teacher dashboard opens the next time you sign in. Teachers work with Alimun as independent contractors, under the separate teacher agreement. Sometimes Alimun opens a teacher account for you instead; then an email asks you to choose your password and takes you straight to the dashboard." },
    { h: "Your teacher dashboard" },
    { p: "**Today** shows your next class with **Start the class**, what needs doing (notes to write, homework to mark, unread messages and follow-up notes after 1:1s), the next seven days, your classes and the homework waiting longest." },
    { shot: "#/today", alt: "The teacher dashboard's Today page with the next class and the to do list" },
    { p: "Under Teaching, **Classes** holds your timetable, the classroom, class notes, 1:1s and course contracts; **Students** shows each class and each student, with those who need attention first; **Homework** is where you set homework and mark it. Under Create, **Lessons** has the class lessons Alimun prepares for each course and **Material** your own exercise sets. Under Account are **Messages**, **Payouts** and **Settings**. The bell at the top tells you, for example, when a new student joins one of your classes." },
    { h: "Your profile" },
    { p: "Open **Settings** and fill in **About you**: your name, where you teach from, what you specialise in, and a few sentences students read when they choose a class. Press **Save changes**. The languages you teach are set by Alimun; to change them, write to us. Settings is also where you choose the dashboard language on this device and change your password." },
    { h: "Your availability" },
    { p: "Classes are planned inside the times you are free to teach. In **Classes**, open **Your availability** and add your free time for each day of the week, in the time zone of the device you are using. You can add the same time for Monday to Friday or every day at once. Students who book a 1:1 with you choose from these times too." }
  ],
  related: ["teaching-your-first-class", "teacher-classes-and-schedule", "marking-homework", "course-contracts-and-pay"],
  missing: [
    "The site promises a reply to applications within 48 hours (au_teach_lead, au_pending_lead); left out under the no-response-times rule. Owner to confirm.",
    "The approved email says new teachers start on the Focused tier; what that means for a teacher is not explained anywhere, so it is left out.",
    "Where the teacher agreement can be read is not stated in the code or Terms."
  ]
};
