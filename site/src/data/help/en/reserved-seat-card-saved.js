// Sources checked (internal, never shown): api/pricing.js handlePurchase (charge 'reserve'), api/_lib/entitlements.js (fulfil pending_room, startPack, releasePack), api/_lib/rooms.js, js/app/plans.js pickView, js/translations.js app_pp_room, app_pp_pick_lead_pack, app_pp_pick_later_p, app_pay_reserve, app_pay_reserve_up, app_pay_reserve_mo, app_pl_back_reserved, api/_lib/email-text/en.json room_cancelled, room_merged, docs/PROGRESS.md 12 Nov 2026 step 4
export default {
  slug: 'reserved-seat-card-saved',
  lang: 'en',
  kind: 'answer',
  subject: 'plans',
  audience: 'student',
  title: 'I reserved a seat: when is my card charged?',
  summary: "A level or exam pack is reserved with your card saved and nothing charged; the card is charged on the day the room opens, and nothing is charged if it does not open.",
  words: ['reserved', 'reservation', 'card saved', 'not charged', 'when am I charged', 'room opens', 'start date', 'founding seat', 'reserve my seat'],
  updated: '2026-11-12',
  body: [
    { p: "When you reserve a level or exam pack, your card is saved and nothing is charged that day. Before you confirm with **Reserve my seat**, the checkout shows the price and when it will be charged." },
    { p: "A room opens when at least 8 learners have joined. Your card is charged on the day your room opens: once for the 12 weeks if you chose to pay upfront, or on that day and then once a month, three payments in all, if you chose to pay monthly." },
    { p: "If not enough learners join, the room does not open. We email you, nothing is charged and your reservation ends; you can then choose another time or the next start date. If your room is joined with another room at the same level so that it can open, we email you the new time, and if it does not suit you, reply to that email before the first day and we cancel your reservation." },
    { p: "If the founding price was open when you reserved, your founding seat is yours from the day you reserve, even though the room starts and is charged later, and it stays yours if your room does not open." }
  ],
  related: ['rooms-and-start-dates', 'founding-price', 'cancel-plan', 'payment-methods'],
  missing: [
    "A pack reserved with Reserve without choosing a room: how and when the learner is asked to choose a room later is not clear from the code, so it is not explained.",
    "Where a learner sees their reservation in the dashboard was not found (Settings shows the free plan until the room opens, because pending_room does not set a tier).",
    "What a learner should do if the saved card expires or changes before the room opens is not covered by any self-service flow."
  ]
};
