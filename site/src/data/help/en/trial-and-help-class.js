// Sources checked (internal, never shown): js/app/plans.js (trial and help_class go through the picker, class dates),
// app_pp_trial_* / app_pp_help_* / app_pay_trial_used keys, api/_lib/rooms.js (seatProblem: trial in a running room,
// help class in an open or running help-class room, at least one hour ahead, places), api/join-session.js (one-date pass),
// api/_lib/pricing.js and docs/PRICING_ENGINE_SPEC.md (trial markers: email and card), docs/PROGRESS.md 12 Nov 2026.
export default {
  slug: 'trial-and-help-class',
  lang: 'en',
  kind: 'answer',
  subject: 'classes',
  audience: 'student',
  title: 'What are the trial class and the help class?',
  summary: 'The trial class is one live class in a running room, once per person; the help class is a 30-minute live class in a small group on the week’s units. Both are bought for one class date from Plans and prices.',
  words: ['trial', 'trial class', 'try a class', 'test class', 'free trial', 'help class', 'extra class', 'one class', 'single class', 'drop in'],
  updated: '2026-11-12',
  body: [
    { p: 'The **trial class** lets you take part in one live class in a room that is already running, so you can see how classes work before you choose a plan. It can be taken once per person: if the email address or card was used for a trial before, it is refused.' },
    { p: 'The **help class** is a 30-minute live class in a small group on the week’s units, for when you want extra time with a teacher.' },
    { p: 'You buy both in **Plans and prices**. After choosing one you pick a class date from the list, which shows the time, the level and the places left, and press **Choose**. Dates that start within the next hour or are full cannot be chosen. You pay for it at once, and the place is for that one date only.' },
    { p: 'On the day, you join like any other class, from 15 minutes before the start.' }
  ],
  related: ['rooms-and-start-dates', 'join-live-class', 'getting-started'],
  missing: [
    'How a trial or help-class buyer sees the class date and the Join button in the dashboard: classes and the next class are loaded from enrolments only (js/app/data.js), and a pass is not an enrolment. The last paragraph needs confirming on a real account before publishing.',
    'Whether the trial is free or paid: it is a paid product in the price book; the answer avoids prices and does not say "free".',
    'Whether the help class is included in a level pack: the spec lists it as later work; not mentioned.',
    'Whether Messages and class notes are available to a pass holder for that date (they are tied to enrolment) is not confirmed.'
  ]
};
