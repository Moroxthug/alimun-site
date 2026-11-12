// Sources checked (internal, never shown): api/_lib/rooms.js (KINDS: packs min 8 max 12, three 60-minute classes a week;
// open class min 12 max 20, one 60-minute class a week; help class min 3 max 8, 30 minutes), app_pp_* keys (app_pp_open_p
// "room of up to 20", app_pp_level_p "three live classes a week", app_pp_pick_lead_pack "at least 8 learners", picker shows
// level and places), js/app/shell.js (Home offers the next room at your level), js/app/settings.js (course language and level).
export default {
  slug: 'class-size-and-level',
  lang: 'en',
  kind: 'answer',
  subject: 'classes',
  audience: 'student',
  title: 'How big are the classes, and how is my level chosen?',
  summary: 'Each room has one level; pack rooms have 8 to 12 learners, open classes up to 20, help classes a small group. You choose a room at your level, set from your level test or Settings.',
  words: ['class size', 'how many students', 'group size', 'level', 'my level', 'wrong level', 'too easy', 'too hard', 'A1', 'B2', 'small group'],
  updated: '2026-11-12',
  body: [
    { p: 'Every room teaches one level, from A1 to C2, and shows it beside its days and time when you choose it. Your own level comes from the level test or from the level you chose when you signed up, and you can change your course in **Settings**. Home suggests the next room at your level.' },
    { p: 'Level and exam pack rooms open with at least 8 learners and take up to 12, with three live classes a week for 12 weeks. An open class is one live class a week in a room of up to 20. The help class is a 30-minute class in a small group. The picker in **Plans and prices** always shows how many places are left.' },
    { p: 'If the level feels too easy or too hard after your first classes, tell your teacher in **Messages**. You can also take the level test again from your dashboard.' }
  ],
  related: ['tests-and-level', 'rooms-and-start-dates', 'leave-or-change-class', 'message-your-teacher', 'getting-started'],
  missing: [
    'The room sizes are the defaults in api/_lib/rooms.js; admins can set max_students and min_learners per room, so a room may differ. Confirm with the owner that these numbers can be promised.',
    'Lesson length for pack and open classes (60 minutes) is in the code but not in the dashboard texts; left out.',
    'Where exactly the level test is retaken from inside the dashboard (route and button name) was not confirmed.',
    'Whether the picker filters rooms by the learner\'s level or shows all levels was not checked in /api/pricing?action=rooms.'
  ]
};
