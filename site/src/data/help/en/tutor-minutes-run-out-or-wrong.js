// Sources checked (internal, never shown): api/tutor.js (status: email confirmed, plan minutes counted only while the plan is
// active, renews_at; daily_cap vs no_time; daily_messages; refund when the tutor does not answer; budget), migrations
// 202611121400_pricing_abuse.sql (tutor_refresh) and 202611121600_finance.sql (tutor_charge, daily cap per UTC day),
// js/app/tutor.js (error keys, time card, purchase return app_tu_back_*), js/translations.js app_tu_*.
export default {
  slug: 'tutor-minutes-run-out-or-wrong',
  lang: 'en',
  kind: 'problem',
  subject: 'tutor',
  audience: 'student',
  title: 'My tutor minutes ran out or look wrong',
  summary: 'What to check when the tutor stops, says your time is used up, or shows fewer minutes than you expected.',
  words: ['tutor minutes wrong', 'minutes missing', 'no tutor time', 'tutor stopped', 'time used up', 'bought minutes not showing', 'plan minutes missing', 'tutor resting', 'free minutes not given'],
  updated: '2026-11-12',
  body: [
    { p: 'Your tutor time is counted by Alimun\'s servers, and the **Tutor** page shows exactly what is left and where it comes from. These checks go through the usual reasons.' }
  ],
  check: {
    start: 'email',
    steps: {
      email: { auto: 'email_confirmed', ask: 'Have you confirmed your email address?', yes: 'today', no: 'fix-email' },
      'fix-email': { fix: 'The free minutes are given once your email address is confirmed. Open the confirmation email from Alimun and follow its link, then open the Tutor again.', next: 'email' },
      today: { ask: 'Does the tutor say that is all the voice practice or all the written messages for today, or that it is resting for today?', yes: 'fix-today', no: 'bought' },
      'fix-today': { fix: 'These are daily limits, not your minutes running out. Voice practice is up to 30 minutes a day, plan holders have a daily limit on written messages, and the tutor as a whole can rest for the day when it is very busy. The limits reset at midnight UTC, and the minutes you did not use stay yours. Come back tomorrow.', next: 'done' },
      bought: { ask: 'Did you just buy minutes that do not show yet?', yes: 'fix-bought', no: 'plan' },
      'fix-bought': { fix: 'Minutes are added as soon as the payment goes through, which can take a minute. Wait a moment and open the Tutor again. If they still do not show after a few minutes, talk to a person; your payment is checked from our side.', next: 'bought-check' },
      'bought-check': { auto: 'payment', ask: 'Do the minutes show now?', yes: 'done', no: 'person' },
      plan: { auto: 'access', ask: 'Do you expected plan minutes this month that are missing?', yes: 'fix-plan', no: 'used' },
      'fix-plan': { fix: 'Plan minutes are given only while your plan is active, and they are renewed on the first day of each month (UTC); unused plan minutes from last month do not carry over. If a payment failed, your plan may be paused, so check your plan under Plans and prices in Settings. Bought minutes last 12 months from the purchase.', next: 'used' },
      used: { ask: 'Do the minutes left still look wrong to you?', yes: 'person', no: 'done' },
      person: { fix: 'Talk to a person and say what the Tutor page shows and what you expected. Every change to your tutor time is recorded, so it can be checked.', handover: true },
      done: { solved: 'Glad that is clear. The Tutor page always shows your time left and when your plan\'s minutes come back.' }
    }
  },
  related: ['tutor-minutes', 'using-the-tutor'],
  missing: [
    'Whether "a failed payment pauses the plan" applies to every product: from docs/PROGRESS.md (unpaid for 3 days pauses access) and api/_lib/entitlements.js summary, not verified line by line; worded as "may be paused".',
    'Free minutes are withheld for an inbox that already had them or a throwaway domain; not mentioned, the person check covers it.'
  ]
};
