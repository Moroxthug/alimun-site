// Sources checked (internal, never shown): api/_lib/rooms.js (KINDS, runRoomJob: publish 21 days before, 10-day merge /
// open / cancel, start-day charges, release unpaid seats after 3 days; seatProblem), js/app/plans.js (picker, "Reserve
// without choosing a room"), app_pp_* / app_pay_* keys (app_pp_pick_lead_pack "opens when at least 8 learners join",
// app_pay_reserve_mo, app_pp_open_p "up to 20"), api/_lib/email-text/en.json (room_cancelled, room_merged),
// docs/PRICING_ENGINE_SPEC.md §5 and §13 step 7, docs/PROGRESS.md 12 Nov 2026 (rooms).
export default {
  slug: 'rooms-and-start-dates',
  lang: 'en',
  kind: 'answer',
  subject: 'classes',
  audience: 'student',
  title: 'How do rooms and start dates work?',
  summary: 'A room is a live class with its own level, days, time and start date; a pack room opens when at least 8 learners join, and nothing is charged before its first day.',
  words: ['room', 'start date', 'when does my class start', 'minimum students', 'room not opening', 'room cancelled', 'reserve', 'reservation', 'level pack', 'exam pack', 'open class', 'merged room', 'new time'],
  updated: '2026-11-12',
  body: [
    { p: 'Live classes take place in rooms. Each room has its own level, days, time and teacher. You choose one in **Plans and prices** after picking a product, where each room shows its days and time, its start date for a pack, how many learners have joined and the places left.' },
    { p: '**Level and exam packs** run for 12 weeks from a fixed start date. You reserve your seat with your card and nothing is charged before the room’s first day. A pack room opens when at least 8 learners join. If you are not ready to choose, press **Reserve without choosing a room** and choose when the next start dates are published.' },
    { p: 'About ten days before the start date we decide each pack room. If it has enough learners, it opens and your card is charged on its first day (once for the 12 weeks, or monthly, three payments in all). If a room is short, it may be joined with another room at the same level and start date; we email you the new days and time, and if they do not suit you, you can reply before the first day to cancel your reservation. If a room cannot open, we email you, your reservation ends and nothing is charged; you can choose another time or the next start date.' },
    { p: '**Open classes** already run every week, so you pay when you join and are in the room straight away. Trial and help classes are for one class date in a running room.' },
    { p: 'If the payment on a pack’s first day does not go through, we email you a link to pay. A seat that stays unpaid for 3 days is released.' }
  ],
  related: ['reserved-seat-card-saved', 'getting-started', 'trial-and-help-class', 'class-size-and-level', 'leave-or-change-class'],
  missing: [
    'The 10-day decision is the daily job rule; the learner-facing texts do not state "ten days", so the owner should confirm it may be promised.',
    'What happens to the founding price when a room is cancelled: the room_cancelled email says it "stays yours"; left out of the answer to keep prices out of Help.',
    'What happens if the teacher has not accepted the course contract on the start day (nothing charged, owner told) is internal and left out; the learner experience in that case is not described anywhere.',
    'Exact email wording of the first-day payment failure ("seat held, email with Stripe payment link") was not checked; the answer says "we email you a link to pay".',
    'Whether a learner can join a pack room after it started (spec: "joining a running pack at its second or third month" left for later) is not covered.'
  ]
};
