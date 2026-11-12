// Sources checked (internal, never shown): js/app/shell.js stripeNote, tutorBack, js/app/pay.js, api/pricing.js (purchase, confirm, already_have), api/_lib/entitlements.js (fulfil: reserved packs pending_room, open class enrolled at once, minutes added; fulfilLate from the webhook), api/join-session.js (trial and help-class pass), js/translations.js app_pl_confirming, app_pl_back_reserved, app_tu_back_slow, app_pay_have, app_st_s_active
export default {
  slug: 'paid-but-no-access',
  lang: 'en',
  kind: 'problem',
  subject: 'plans',
  audience: 'student',
  title: 'I paid but I do not have access',
  summary: "Find out whether what you bought is still being confirmed, is a reserved pack waiting for its room, or needs a person to look at it.",
  words: ['paid but no access', 'no access', 'plan not active', 'payment taken', 'still free plan', 'minutes not added', 'cannot see my class', 'bought but'],
  updated: '2026-11-12',
  body: [
    { p: "This check helps when you paid, or think you paid, and the dashboard does not show what you bought." }
  ],
  check: {
    start: 'reserved',
    steps: {
      reserved: { ask: 'Did you reserve a level or exam pack whose room has not started yet?', yes: 'is-reserved', no: 'minutes' },
      'is-reserved': { solved: 'That is expected. A reserved pack becomes active on the day your room opens; nothing has been charged yet, and your card is charged on that day. Your classes appear from then.' },
      minutes: { ask: 'Did you buy voice practice minutes?', yes: 'fix-minutes', no: 'fix-wait' },
      'fix-minutes': { fix: 'Minutes are added as soon as the payment goes through, but it can take a minute. Open the Tutor again shortly and look at Time left.', next: 'minutes-check' },
      'minutes-check': { ask: 'Do you see the minutes now?', yes: 'done', no: 'payment' },
      'fix-wait': { fix: "After paying, the dashboard can take a short while to confirm your plan, and the page checks again by itself. If your bank asked you to approve the payment, finish that first. Then reload the dashboard.", next: 'access' },
      access: { auto: 'access', ask: 'Does Settings now say your plan is active?', yes: 'use', no: 'payment' },
      use: { auto: 'seat', ask: 'Can you now use what you bought, for example see your open class on the Classes page?', yes: 'done', no: 'person' },
      payment: { auto: 'payment', ask: 'Do you see the payment on your card or bank statement?', yes: 'person', no: 'fix-unpaid' },
      'fix-unpaid': { fix: "Then the payment may not have finished, for example if the checkout closed before your bank's check came back. Go back to Plans and prices and try again. If the purchase did go through, the checkout tells you that you already have it.", next: 'access' },
      person: { fix: "Please talk to a person. Say what you bought and when, and what Settings shows.", handover: true },
      done: { solved: 'Good, everything is in place.' }
    }
  },
  related: ['payment-failed', 'reserved-seat-card-saved', 'minutes-packs', 'charged-twice'],
  missing: [
    "Where a trial class or help-class pass appears in the dashboard (the Classes page code does not mention passes; only /api/join-session admits them) was not confirmed, so it is not described.",
    "Settings shows the new tiers by their internal key (app, open, pack, exam) because js/app/settings.js PLANS does not list them, although app_tier_* names exist: a small dashboard fix for the owner.",
    "Whether the Classes page shows anything for the app on its own was not checked; the check asks a general question."
  ]
};
