// Sources checked (internal, never shown): api/tutor.js (status, renews_at = first of next month UTC, written message
// limit for paying learners, outOfTime), supabase/migrations/202611121400_pricing_abuse.sql (tutor_refresh: free grant once,
// plan minutes reset each calendar month UTC and unused ones expire, bought lots expire after 12 months),
// supabase/migrations/202611121600_finance.sql (tutor_charge: plan, then free, then bought; daily cap per UTC day),
// js/app/tutor.js (time card, out-of-time offer, #/settings/plans), site/src/blocks/legal/terms.html,
// js/translations.js app_tu_* (free, plan, credit, daily_cap, daily_messages, out_*, back_*), app_pp_min_*; docs/PROGRESS.md 12 Nov 2026.
export default {
  slug: 'tutor-minutes',
  lang: 'en',
  kind: 'answer',
  subject: 'tutor',
  audience: 'student',
  title: 'How do tutor minutes work?',
  summary: 'Tutor time comes from free minutes given once, your plan\'s minutes each month and minutes you buy; plan minutes renew on the first of the month and do not carry over, and there are daily limits.',
  words: ['tutor minutes', 'tutor time', 'minutes left', 'voice minutes', 'buy minutes', 'more minutes', 'end of month', 'minutes reset', 'daily limit', 'free minutes', 'voice practice minutes'],
  updated: '2026-11-12',
  body: [
    { p: 'The **Tutor** page shows your **Time left** and where it comes from. **Your free minutes, given once** are added the first time you open the Tutor after confirming your email address. **Your plan\'s minutes for this month** come with a paid plan and show the date they are renewed. Minutes you buy show separately, with the date the oldest ones last until. Home shows your tutor time left as well.' },
    { p: 'Your time is counted by Alimun\'s servers while a session is active: a call counts the time you are on the call, and a session you speak in counts the time between your turns. On a paid plan, written messages to the tutor do not use your minutes; instead there is a daily limit on written messages. Without a plan, written sessions use your minutes too. When you use the tutor, your plan\'s minutes are used first, then your free minutes, then the minutes you bought.' },
    { p: 'Plan minutes are renewed on the first day of each month (UTC). Unused plan minutes do not carry over to the next month, and a plan that is no longer active stops adding minutes. Minutes you buy stay yours for 12 months from the purchase, whatever happens to your plan. Minutes Alimun adds to your account, for example when the tutor could not answer a turn and the time was given back, do not expire.' },
    { p: 'There are also daily limits: voice practice with the tutor is up to 30 minutes a day, and the daily limit on written messages applies to plan holders. Both reset at midnight UTC. When you reach one, the tutor tells you and you can come back the next day.' },
    { p: 'To get more time, the Tutor shows the plans with their monthly minutes and packs of minutes to buy once when your time is used up; **See the plans** opens **Plans and prices** in Settings, where **Voice practice minutes** are also on sale. Bought minutes are added as soon as the payment goes through, which can take a minute.' }
  ],
  related: ['minutes-packs', 'using-the-tutor', 'tutor-minutes-run-out-or-wrong', 'is-the-tutor-a-person'],
  missing: [
    'Contradiction for the owner: the dashboard text app_tu_credit says "Minutes added or bought, which never run out", but bought minutes expire 12 months after purchase (tutor_refresh, app_tu_out_packs "stay yours for 12 months", app_tu_credit_until). The text here follows the code.',
    'The number of free minutes (10 in tutor_refresh and the plan) and each plan\'s monthly minutes are not shown as text in the Tutor page before they are used; left out. They are config values (tutor_plan_minutes, entitlements).',
    'The written message limit (written_tutor_daily_messages, 60) is a setting and not shown in the dashboard; left as "a daily limit".',
    'The 30-minute daily cap (tutor_user_daily_minutes) applies to all charged time, including written sessions without a plan, while the dashboard text calls it voice practice; the help text follows the dashboard wording.',
    'Free minutes are given once per inbox and not to throwaway email domains (pricing_abuse migration); not mentioned.',
    'Whether App Store or Google Play purchases (api/webhooks/revenuecat.js) exist for students yet: no app found; left out.'
  ]
};
