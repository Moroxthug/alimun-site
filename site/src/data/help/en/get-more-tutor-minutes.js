// Checked 2026-11-16 against: api/_lib/tutor-packs.js (packs of 30 and 120 minutes), api/_lib/pricing.js (minutes_30, minutes_120, paid once), api/stripe.js (tutor_time checkout returns to the Tutor), js/app/plans.js (Voice practice minutes card, Tutor out-of-time card), js/app/tutor.js (part 6: offer only when time is used up), api/tutor.js (feedback: after 3 minutes, 300 seconds added once), docs/AI_TUTOR_PLAN.md (part 6), js/translations.js en (app_tu_out_h, app_tu_out_renews, app_tu_out_plans, app_tu_out_packs, app_tu_see_plans, app_pp_min_h, app_pp_min_p, app_tu_back_adding, app_tu_back_slow, app_tf_q, app_tf_sub).
export default {
  slug: 'get-more-tutor-minutes',
  section: 'help',
  subject: 'tutor',
  audience: 'student',
  updated: '2026-11-16',
  status: 'draft',
  title: "How do I get more tutor minutes?",
  summary: "You can buy a pack of 30 or 120 voice practice minutes once, which stay yours for 12 months, or choose a plan that adds minutes every month.",
  body: [
    "When your time is used up, the Tutor page shows \"Your tutor time is used up\", the date your plan's minutes come back if you have a plan, the plans with the minutes each one adds every month, and packs of minutes you can buy once. The packs are 30 or 120 minutes. The plans page in your dashboard also lists them under Voice practice minutes. The prices are shown there.",
    "A pack is paid once through Stripe's secure checkout, not as a subscription. After paying you come back to the Tutor, and the minutes are added to your tutor time. It can take a minute: if your minutes do not show yet, open the Tutor again shortly. Bought minutes stay yours for 12 months from the purchase.",
    "After you have spent a few minutes with the tutor, it asks how it is going and what we could improve. If you answer, we add extra minutes to your tutor time. This happens once.",
    "If you paid and the minutes do not appear after a while, write to us from Support in your dashboard, or email support@alimun.com.",
  ],
  related: ['how-tutor-minutes-work', 'what-is-the-tutor'],
};
