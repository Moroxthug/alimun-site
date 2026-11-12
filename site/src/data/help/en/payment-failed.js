// Sources checked (internal, never shown): js/app/pay.js, api/pricing.js (declined, quote expiry), api/_lib/entitlements.js (onInvoiceFailed, onPaymentIntent, startPack), supabase/migrations/202611121300_pricing_access.sql pause_unpaid_entitlements (3 days), api/webhooks/stripe.js sendPricingPaymentEmail, api/_lib/email-text/en.json pay_failed, js/translations.js app_pay_declined, app_pay_ma, app_pay_expired, app_pay_change_card, app_st_s_past_due, Terms section 5
export default {
  slug: 'payment-failed',
  lang: 'en',
  kind: 'problem',
  subject: 'plans',
  audience: 'student',
  title: 'My payment failed',
  summary: "What to do when the checkout says your bank declined the card, or when you get an email that a renewal or your room's first payment did not go through.",
  words: ['payment failed', 'card declined', 'declined', 'payment did not go through', 'cannot pay', 'renewal failed', 'update payment method', 'bank refused'],
  updated: '2026-11-12',
  body: [
    { p: "This check helps when a payment at the checkout was refused, or when a renewal or the charge on your room's first day did not go through." }
  ],
  check: {
    start: 'where',
    steps: {
      where: { ask: 'Did the payment fail while you were paying, on the checkout page?', yes: 'morocco', no: 'status' },
      morocco: { ask: 'Was your card issued in Morocco?', yes: 'fix-morocco', no: 'fix-declined' },
      'fix-morocco': { fix: "Moroccan cards need online international payments switched on, usually in your bank's app. Please also check your yearly allowance for online payments abroad, then add your card again or choose Use another card.", next: 'retry' },
      'fix-declined': { fix: "When the checkout says your bank declined the card, the decision was your bank's. Check the card number, expiry date and security code, that the card allows online payments, and approve the payment in your bank's app if it asks you to. Then try again, or choose Use another card. If the checkout says your price was held for 15 minutes, add your card again.", next: 'retry' },
      retry: { ask: 'Did the payment go through this time?', yes: 'done', no: 'person' },
      status: { auto: 'payment', ask: 'Did you get an email saying your payment did not go through?', yes: 'fix-update', no: 'person' },
      'fix-update': { fix: "That email is about a renewal or the first payment for your room. Use the Update payment method button in the email, or open Settings and choose Manage billing to change your card on Stripe's billing page. For a monthly payment we also try again automatically in a few days. Your seat is held for 3 days; if the payment is still missing after that, your plan is paused and your place is no longer held.", next: 'fixed' },
      fixed: { ask: 'Has the payment gone through now?', yes: 'done', no: 'person' },
      person: { fix: "Please talk to a person. Say which purchase it is and what the page or the email said, but never send your card number.", handover: true },
      done: { solved: 'Good, your payment went through. It can take a short while for the dashboard to show it.' }
    }
  },
  related: ['payment-methods', 'paid-but-no-access', 'reserved-seat-card-saved'],
  missing: [
    "For an upfront pack whose first-day charge fails, Stripe does not retry by itself and the email's button leads to Settings, where Manage billing is not shown until the plan is active; the learner can only be helped by a person. The owner may want a self-service path.",
    "What the auto 'payment' check reports is defined in Part 2; the step falls back to the question."
  ]
};
