// Checked 2026-11-16 against: api/tutor.js (status, turn charging MIN_CHARGE 5 / MAX_CHARGE 90, IDLE_MS 10 minutes, written messages for paying learners, daily_cap, refunds when the tutor cannot answer, nextMonthUtc), supabase/migrations/202611121400_pricing_abuse.sql (tutor_refresh: 600 free seconds once per inbox, none for throwaway domains, plan minutes per UTC calendar month and expiring, bought time expiring after 12 months), docs/PROGRESS.md (tutor_charge order: plan, then free, then bought), docs/AI_TUTOR_PLAN.md (parts 1, 6, 7), js/app/tutor-live.js (silence: 2 minutes, 5 with an exercise or sentence card), js/translations.js en (app_tu_left_h, app_tu_free, app_tu_plan, app_tu_credit, app_tu_credit_until, app_tu_email, app_tu_daily_cap, app_tu_daily_messages, app_tl_idle_warn, app_tl_still_here, app_tf_sub).
export default {
  slug: 'how-tutor-minutes-work',
  section: 'help',
  subject: 'tutor',
  audience: 'student',
  updated: '2026-11-16',
  status: 'approved',
  title: "How do my tutor minutes work, and what happens at the end of the month?",
  summary: "You get 10 free minutes once, a plan adds minutes every calendar month that do not carry over, and minutes you buy last 12 months.",
  body: [
    "Every new learner gets 10 free minutes with the tutor, given once, the first time you open the Tutor after confirming your email address. They are given once per email inbox. A plan adds more minutes every month; how many depends on your plan, and the Tutor page shows them. Under Time left you see your free minutes, your plan's minutes for this month with the date they are renewed, and any minutes added or bought.",
    "Time is counted by our servers while you are in a session. Each turn counts the time since your previous turn, at least 5 seconds and at most 90 seconds, so stepping away does not use up your minutes, and a session with no turn for 10 minutes ends by itself. In a call, the time runs while the call is on; if nobody speaks for 2 minutes (5 while an exercise or a sentence to say is open), the tutor asks \"Are you still there?\" and the call then ends. If the tutor cannot answer a turn, the seconds of that turn are given back to you.",
    "On a paid plan, written messages to the tutor do not use your minutes; instead there is a daily limit on written messages, and you can keep practising by voice when you reach it. Voice practice is limited to 30 minutes a day, whatever minutes you have left.",
    "Your plan's minutes come first, then your free minutes, then minutes you bought, starting with those that expire soonest. Plan minutes are renewed on the first day of each month (UTC), and plan minutes you did not use do not carry over. Free minutes and bought minutes stay until you use them, except that bought minutes expire 12 months after the purchase. Minutes Alimun adds for you, for example as a thank-you for answering the short question about the tutor, do not expire. If your plan is no longer active, it stops adding minutes.",
  ],
  related: ['get-more-tutor-minutes', 'what-is-the-tutor'],
};
