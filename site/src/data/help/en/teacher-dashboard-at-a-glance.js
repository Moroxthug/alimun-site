// Checked 2026-11-16 against: js/app/teach.js (ROUTES, groups, phone bar, Today cards: next class, To do, the next seven days,
// your classes, homework waiting longest; refresh every five minutes), js/translations.js (app_t_nav_*, app_t_group_*, app_t_*, app_nav_more),
// teacher-dashboard.html (forwards to /app/teach).
export default {
  slug: 'teacher-dashboard-at-a-glance',
  section: 'help',
  subject: 'teachers',
  audience: 'teacher',
  updated: '2026-11-16',
  status: 'approved',
  title: 'What is on my teacher dashboard?',
  summary: 'Your teacher dashboard at alimun.com/app/teach opens on Today, with your next class and what needs doing, and has sections for your classes, students, homework, lessons, material, messages, payouts and settings.',
  body: [
    'Your teacher dashboard is at alimun.com/app/teach. On a computer the sections are in the menu on the left, grouped as Teaching (Today, Classes, Students, Homework), Create (Lessons, Material) and Account (Messages, Payouts, Settings). On a phone, Today, Classes, Students and Homework are in the bar at the bottom, and the other sections are under “More”.',
    'Today shows your next class with its day, time and number of students. From an hour before it you can press “Check in”, and from 15 minutes before “Start the class” opens your classroom. “Prepare the notes” takes you to that class’s notes page.',
    'Below it, To do lists what is waiting for you: notes to write for classes that have ended, homework to mark (the student who has waited longest first), unread messages and notes to write after 1:1 follow-ups. When everything is done it says “All caught up”. You also see the next seven days, your classes with how many places are taken, and the homework that has waited longest. Today refreshes itself every few minutes while it is open.',
  ],
  related: ['start-your-live-class', 'class-notes-after-class', 'set-and-mark-homework'],
};
