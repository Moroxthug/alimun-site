// Checked 2026-11-16 against: js/app/plans.js (picker, "Reserve without choosing a room", moving a reservation, room interest), js/app/pay.js (card first, Reserve my seat), js/translations.js / js/i18n/en.app.js (app_pp_room, app_pp_pick_lead_pack, app_pp_pick_later*, app_pp_reserved_*, app_pp_move, app_pay_reserve*, app_pl_back_reserved, app_pp_notify*), api/_lib/email-text/en.json (room_cancelled), api/pricing.js (purchase: packs reserved, nothing charged), api/_lib/entitlements.js (startPack, releasePack), docs/PRICING_ENGINE_SPEC.md section 14 steps 4 and 7.
export default {
  slug: 'reserve-a-place-in-a-pack',
  section: 'help',
  subject: 'plans',
  audience: 'student',
  updated: '2026-11-16',
  status: 'draft',
  title: 'What does it mean to reserve a place in a pack?',
  summary: 'When you reserve a place in a level, intensive or exam pack, your card is saved but nothing is charged until the day your room opens, and if the room does not open you are not charged at all.',
  body: [
    'In your dashboard, go to Settings, then Plans and prices, and choose a pack. You see the rooms on offer with their start date, days, time and the real number of places left, and you pick one with Choose. You then add your card and see your exact price, and Reserve my seat saves your place. Nothing is charged that day: your card is charged on the day your room opens, either once for the 12 weeks or once a month for three months, depending on how you chose to pay.',
    'A room opens when at least 8 learners join. If not enough people join, the room does not start, your reservation ends and nothing is charged. We email you, and you can choose another time or the next start date.',
    'If no room suits you yet, you can choose Reserve without choosing a room and pick your room when the next start dates are published. When a room at your level is published we email you, and on the same page you choose Move my reservation here. If you would rather not reserve anything yet, Tell me when a room opens sends you one email when a room at your level opens; nothing is reserved or charged.',
  ],
  related: ['monthly-or-upfront', 'founding-price', 'plans-and-prices'],
};
