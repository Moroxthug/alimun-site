// Checked 2026-11-16 against: js/app/classes.js (zone(): student_profiles.timezone, else the device's; "Times in {zone}"),
// js/app/settings.js and js/translations.js (Settings, About you, Time zone: "Class times are shown in this time zone"),
// js/app/find.js (app_fd_class_time), api/enroll.js (enrolment email in the student's zone), api/_lib/admin-ops.js
// (moved or cancelled session emails in the person's zone), site/src/data/course-faq.js (same days and time each week).
export default {
  slug: 'class-times-and-time-zones',
  section: 'help',
  subject: 'classes',
  audience: 'student',
  updated: '2026-11-16',
  status: 'approved',
  title: 'Which time zone are my class times in?',
  summary: 'Class times are shown in the time zone set in your Settings, or in your device\'s time zone if you have not set one.',
  body: [
    'Each class meets on fixed days at the same time every week, with the same teacher and the same group. The Classes page shows every time in your own time zone, and says which one at the top of the page ("Times in" followed by the zone).',
    'The time zone comes from Settings, under About you, in the Time zone field. If you have not chosen one, the dashboard uses the time zone of the device you are on. If the times look wrong, for example after you move or travel, choose the right time zone there and press Save changes.',
    'When you look at a class before joining it, the class\'s own time zone is shown beside your time if the two are different. The emails we send about your class, such as the one confirming your place or telling you a class has moved, also use your time zone when you have set one.',
  ],
  related: ['join-your-live-class', 'how-rooms-start'],
};
