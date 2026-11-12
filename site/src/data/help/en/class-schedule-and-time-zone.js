// Sources checked (internal, never shown): js/app/classes.js (zone(): student_profiles.timezone, else the device's;
// "Times in {zone}"; calendar; Add to my calendar .ics), js/app/settings.js (Time zone field, app_st_zone_p),
// js/app/plans.js (room picker shows the room's own time zone), js/tz.js (daylight saving per date), api/_lib/email-text/en.json (session moved/cancelled).
export default {
  slug: 'class-schedule-and-time-zone',
  lang: 'en',
  kind: 'answer',
  subject: 'classes',
  audience: 'student',
  title: 'Where do I see my class times, and in which time zone?',
  summary: 'Classes shows your class times, a calendar and what is coming up, in the time zone saved in Settings; you can change it there.',
  words: ['schedule', 'timetable', 'class time', 'time zone', 'timezone', 'wrong time', 'calendar', 'daylight saving', 'when is my class', 'add to calendar'],
  updated: '2026-11-12',
  body: [
    { p: 'Open **Classes**. Your next class is at the top, **Coming up** lists the classes after it, and the **Calendar** marks each day with classes, homework due and 1:1s; choose a day to see what is on it. The days you attended say “you were there”.' },
    { p: 'All times on Classes and Home are shown in the time zone saved in **Settings** (if none is saved, the one your device uses). The page says which one under its title, for example “Times in Europe/Berlin”. If the times look wrong, open **Settings**, choose your **Time zone** and press **Save changes**. Changes for summer and winter time are taken into account by date.' },
    { p: 'When you choose a room in **Plans and prices**, its days and time are shown in the room’s own time zone, which is named beside the time. After you join, Classes shows them in yours.' },
    { p: '**Add to my calendar** on Classes downloads your upcoming classes as a calendar file to open in your own calendar app. If a class is moved or cancelled, we email you with the new time.' },
    { shot: '#/classes', alt: 'The Classes page with the time zone line and the calendar' }
  ],
  related: ['dashboard-language-and-time-zone', 'join-live-class', 'rooms-and-start-dates', 'getting-started'],
  missing: [
    'Whether the downloaded calendar file updates by itself when a class moves: it is a one-time download (.ics), so it does not; the answer does not promise updates, and does not say this either.',
    'Whether the moved/cancelled session email goes to every student in the class: the email texts exist (session.moved, session.cancelled) but the sender was not checked.'
  ]
};
