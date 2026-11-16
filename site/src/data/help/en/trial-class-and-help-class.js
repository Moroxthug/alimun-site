// Checked 2026-11-16 against: js/app/plans.js and js/translations.js (app_pp_trial_*, app_pp_help_*, app_pp_pick_*,
// app_pay_trial_used, app_pay_room_full), api/_lib/rooms.js seatProblem (trial: a class date in a running room;
// help class: a help-class room; at least one hour before the class; places checked), api/join-session.js (a pass for
// that one date lets you join), docs/PRICING_ENGINE_SPEC.md step 7, docs/PROGRESS.md 2026-11-12 (rooms; trial and help
// class on sale). Prices not stated: they depend on the card's country (Plans and prices).
export default {
  slug: 'trial-class-and-help-class',
  section: 'help',
  subject: 'classes',
  audience: 'student',
  updated: '2026-11-16',
  status: 'approved',
  title: 'What are the trial class and the help class?',
  summary: 'The trial class is one live class in a group that is already running, once per person; the help class is a 30-minute live class in a small group on the week\'s units.',
  body: [
    'Both are single classes that you buy once, from Plans and prices in your dashboard (in Settings, under See the plans). Instead of choosing a group, you choose a class date: the page lists the times that are open, in your time zone, with the real number of places left. A date has to be at least an hour away to be booked.',
    'The trial class lets you take part in one live class of a group that is already running, so you can see what a class with a teacher is like before you choose a plan. It can be taken once per person.',
    'The help class is a 30-minute live class in a small group, on the units of the week.',
    'Once you have paid, the class appears on your Classes page and you join it like any other class, with the Join button that opens 15 minutes before the start. Your place is for that one date only. The price depends on the country your card was issued in, and you see the exact amount before anything is charged.',
  ],
  related: ['plans-and-prices', 'join-your-live-class', 'how-rooms-start', 'free-class-with-a-new-teacher'],
};
