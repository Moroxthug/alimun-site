// Checked 2026-11-16 against: site/src/blocks/tiers/plans.html (founding line), js/translations.js / js/i18n/en.app.js (app_pp_founding, app_pay_founding), api/_lib/pricing.js (founding prices only for level and exam packs, while the window is open and seats remain, or while the learner's lock runs), api/_lib/finance.js (foundingJob: notice within 30 days of the end, lock closed on its date), api/_lib/email-text/en.json (founding_notice, room_cancelled), docs/LAUNCH_PRICING_SPEC.md section 3, docs/PRICING_ENGINE_SPEC.md section 14 steps 4 and 8.
export default {
  slug: 'founding-price',
  section: 'help',
  subject: 'plans',
  audience: 'student',
  updated: '2026-11-16',
  status: 'approved',
  title: 'What is the founding price?',
  summary: 'The founding price is a lower price on level, intensive and exam packs for the first 500 learners who join before 1 January 2027, kept for 12 months.',
  body: [
    'While founding places remain, the Plans and prices page and the checkout show the founding price on packs, together with the usual price. You get it by reserving or buying a pack before 1 January 2027 and while places are left; reserving with your card counts, even if your room starts and is charged later. If your room does not open, your founding price stays yours for another time or start date.',
    'Your founding price is kept for 12 months. Before it ends we email you with the date. Nothing changes before then, and a pack you are already in keeps its price to its end. After that date, new purchases are at the usual price shown in Plans and prices.',
  ],
  related: ['reserve-a-place-in-a-pack', 'plans-and-prices', 'price-in-my-country'],
};
