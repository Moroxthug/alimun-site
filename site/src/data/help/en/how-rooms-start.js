// Checked 2026-11-16 against: js/app/plans.js and js/translations.js (app_pp_level_p, app_pp_intensive_p, app_pp_open_p,
// app_pp_pick_lead_pack "A room opens when at least 8 learners join", app_pp_room, app_pp_pick_later*, app_pp_notify*,
// app_pp_reserved_*), api/_lib/rooms.js (publish 21 days before with a teacher and a substitute; 10 days before merge,
// open or cancel; charge on the start day), api/_lib/email-text/en.json (room_cancelled, room_merged, room_published),
// docs/PRICING_ENGINE_SPEC.md sections 5 and 14 (step 7, room planning).
export default {
  slug: 'how-rooms-start',
  section: 'help',
  subject: 'classes',
  audience: 'student',
  updated: '2026-11-16',
  status: 'approved',
  title: 'When does my class start, and what if it does not open?',
  summary: 'A pack room opens on its start date once at least 8 learners have joined; until then nothing is charged, and if it does not open your reservation ends with nothing charged.',
  body: [
    'Group classes with a pack meet in a room: a fixed group with its own teacher, level, start date, days and time. A level pack is 12 weeks with three live classes a week, the intensive pack is 12 weeks with a class every weekday, and an exam pack is 12 weeks of classes that prepare you for the exam. When you choose a pack in Plans and prices, you see the rooms you can join with their start date, days, time, teacher and places left. An open class is one live class a week in a room of up to 20.',
    'A pack room opens when at least 8 learners have joined. When you reserve, your card is saved and charged on the day your room opens, not before. You can also reserve without choosing a room and pick one when the next start dates are published; we email you when a room at your level is published. If no room is open at your level yet, press Tell me when a room opens and we email you once when one opens. Nothing is reserved or charged by that.',
    'About ten days before the start date we look at each room. If a room is short of learners, it may join another room at the same level and start date so that it can open. If that happens we email you the new days and time, and if they do not suit you, reply to that email before the first day and we cancel your reservation.',
    'If a room still does not have enough learners, it does not open. We email you, your reservation ends and nothing is charged. You can then choose another time or the next start date, and a founding price you had stays yours.',
  ],
  related: ['reserve-a-place-in-a-pack', 'class-times-and-time-zones', 'trial-class-and-help-class', 'leave-or-switch-class'],
};
