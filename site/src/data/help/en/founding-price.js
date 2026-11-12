// Sources checked (internal, never shown): api/_lib/pricing.js (founding only for level and exam packs, foundingWindowOpen), api/pricing.js lockPricing (claim_founding_seat at reservation), supabase/migrations/202611111300_pricing_engine.sql claim_founding_seat (founding_months, default 12), api/_lib/finance.js (notices 30 days ahead), js/translations.js tiers2_founding, app_pp_founding, app_pay_founding, api/_lib/email-text/en.json founding_notice, room_cancelled, docs/LAUNCH_PRICING_SPEC.md section 3
export default {
  slug: 'founding-price',
  lang: 'en',
  kind: 'answer',
  subject: 'plans',
  audience: 'student',
  title: 'What is the founding price?',
  summary: "A lower price on level and exam packs for the first 500 learners who join before 1 January 2027, kept for 12 months, with an email before it ends.",
  words: ['founding price', 'founding member', 'founding seat', 'launch price', 'early price', 'discount', 'first 500'],
  updated: '2026-11-12',
  body: [
    { p: "The founding price is a lower price on level and exam packs for the first 500 learners who join before 1 January 2027. Joining means reserving a pack with your card or buying before that date, even if your room starts and is charged later. While it is open, **Plans and prices** and the checkout show the founding price next to the usual price." },
    { p: "Your founding price is kept for 12 months. We email you 30 days before it ends, and nothing is charged because of that email. After that date, new purchases are at the usual price; a pack you are already in keeps its price to its end." },
    { p: "If you reserved at the founding price and your room does not open, the founding price stays yours for another time or the next start date." }
  ],
  related: ['reserved-seat-card-saved', 'choosing-a-plan', 'prices-in-my-currency'],
  missing: [
    "The spec's longer rule (kept until the end of the learner's path, never more than 18 months, and lost after a gap of more than one month) was not found in the code, which uses founding_months (12 by default); only 12 months is stated.",
    "The cap and closing date come from app_settings (founding_cap, founding_closes_at) and the public /tiers text; if the owner changes them, this answer must change too."
  ]
};
