// Checked 2026-11-16 against: js/app/teach.js (nextCard, checkIn: check-in from 1 hour before), js/app/teach-classes.js (liveView, join,
// isOpen 15 min before to 90 min after, otoOpen 10 min before), js/app/classroom.js (panel, recording notice), api/join-session.js
// (OPEN_BEFORE_MIN 15, CLOSE_AFTER_MIN 90, 1:1 window, teacher pass manages participants, no record button),
// api/ops.js and api/_lib/email-text/en.json (class_remind.*, class_late.*), docs/OPERATIONS_PLAN.md, js/translations.js (app_t_*, app_tc_*, app_cr_*).
// Reminder and late emails run through automations the owner can switch off or to dry run, so they are described with "may".
export default {
  slug: 'start-your-live-class',
  section: 'help',
  subject: 'teachers',
  audience: 'teacher',
  updated: '2026-11-16',
  status: 'approved',
  title: 'How do I check in and start my live class?',
  summary: 'Check in on Today from an hour before your class, at least 5 minutes before it starts, then press “Start the class” from 15 minutes before to open the classroom in your dashboard.',
  body: [
    'From an hour before your class, Today shows “Check in”. Please check in at least 5 minutes before the start, so we know you are there; Today then shows the time you checked in. You may also get reminder emails an hour and 5 minutes before the class, with a “Check in” button and an “Open the classroom” button.',
    '“Start the class” appears 15 minutes before the start, on Today and on Classes. It opens the classroom inside your dashboard: the video call, the “Board” button, and a side panel with Chat (the class conversation, which everyone in the class can read), Notes (your notes for this class, saved as you type) and Words (the words from the last class, when there were any). On a phone the side panel opens from a button. If you leave by mistake, you can join again from the same button while the class is on.',
    'In the room you can mute or remove participants. Nobody can record from the room, teachers and learners included. Alimun records a few short moments of each group class, and Alimun staff may record a whole class if a concern is raised; the classroom shows this notice.',
    'If you are not in the room a few minutes after the start, Alimun may email you and tell your learners that you are on your way. For a 1:1, “Join” opens 10 minutes before and the room stays open until 15 minutes after the 1:1 ends.',
  ],
  related: ['lessons-and-the-classroom-board', 'class-notes-after-class', 'cant-start-my-class'],
};
