// Checked 2026-11-16 against: js/app/bell.js (dot for unread, opening marks as read, links, notification keys, offers), js/app/shell.js (bell in the top bar), supabase/migrations/202611071500_notifications.sql (what creates a notification), api/cron-reminders.js (the three reminders; email only to people who asked for news and offers), js/translations.js (app_notifications, app_nt_*).
export default {
  slug: 'notifications-bell',
  section: 'help',
  subject: 'dashboard',
  audience: 'student',
  updated: '2026-11-16',
  status: 'draft',
  title: 'What does the bell show?',
  summary: 'The bell at the top of your dashboard shows your notifications: marked homework, changes to your classes, class notes, places offered to you, reminders and offers.',
  body: [
    'The bell at the top of your dashboard holds your notifications. A dot on it means something new, and opening it marks what it shows as read. Tap a notification to go to the page it is about.',
    'You get a notification when your homework has been marked, when a place opens for you in a class (with the time it is held until), when one of your class sessions moves or is cancelled, and when the notes from a class are ready. Offers from Alimun can appear there too.',
    'There are also a few reminders: when a week has gone by since you last practised, when you have taken the level test but not yet chosen a class or plan, and when your free tutor minutes are used up. If you agreed to receive news and offers, these reminders also come by email.',
    'When there is nothing for you, the bell says Nothing new yet.',
  ],
  related: ['homework-marks-and-feedback', 'find-your-way-around-the-dashboard'],
};
