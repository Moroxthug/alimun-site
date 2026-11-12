// Sources checked (internal, never shown): js/app/plans.js minutesCard, tutorPacks, buyTutor, api/_lib/pricing.js PRODUCTS (minutes_30, minutes_120), api/_lib/entitlements.js fulfil (tutor_add_credit), supabase/migrations/202611121600_finance.sql tutor_charge (plan, then free, then bought; 30-minute daily cap), supabase/migrations/202611121400_pricing_abuse.sql (bought time expires after 12 months), js/translations.js app_pp_min_*, app_pay_minutes_p, app_tu_*, docs/PROGRESS.md 12 Nov 2026 step 5
export default {
  slug: 'minutes-packs',
  lang: 'en',
  kind: 'answer',
  subject: 'plans',
  audience: 'student',
  title: 'How do voice practice minutes work, and how do I buy more?',
  summary: "Voice practice with the tutor uses minutes from your plan, your free minutes and minutes you buy in packs of 30 or 120, which last 12 months.",
  words: ['minutes', 'tutor minutes', 'voice minutes', 'buy minutes', 'out of minutes', 'time left', 'top up', 'minute pack'],
  updated: '2026-11-12',
  body: [
    { p: "Voice practice with the AI tutor uses minutes. New accounts get free minutes once, after confirming their email address, and plans add minutes every month: the app on its own includes 60 minutes a month. The Tutor page shows your **Time left**." },
    { p: "You can buy extra minutes once, in a pack of 30 or 120 minutes, under **Voice practice minutes** on **Plans and prices**, or from the Tutor when it says **Your tutor time is used up**. They are paid at once and added straight away; it can take a minute, so if they do not show yet, open the Tutor again shortly." },
    { p: "Minutes you buy stay yours for 12 months. The tutor uses your plan's minutes for the month first, then your free minutes, then the minutes you bought. Whatever you have, voice practice is limited to 30 minutes a day." }
  ],
  related: ['tutor-minutes', 'choosing-a-plan', 'paid-but-no-access'],
  missing: [
    "The Tutor page text app_tu_credit says bought minutes never run out, but the database expires bought time after 12 months and the checkout says yours for 12 months: the dashboard text needs fixing (owner).",
    "Monthly minutes for the open class and the packs (spec: 40 and 120) are not in the dashboard text, so only the app's 60 is stated.",
    "Whether unused plan minutes carry over to the next month was not confirmed from the code; not stated.",
    "What happens to bought minutes on a refund (the remaining share is taken back, per entitlements.js) is not stated, as refunds are manual."
  ]
};
