// Checked 2026-11-16 against: api/_lib/email-text/en.json (pay_failed: "Update payment method", "We will try again automatically in a few days"), api/webhooks/stripe.js (sendPricingPaymentEmail: link to Stripe's payment page or the dashboard settings), api/_lib/entitlements.js (onInvoiceFailed, onPaymentIntent failed, seat held), api/pricing.js (cron-billing pauses what stayed unpaid), js/translations.js / js/i18n/en.app.js (app_st_s_past_due, app_st_manage), Terms section 5 ("If a payment fails, we may retry it, pause your access to live classes or downgrade your account until payment is made").
export default {
  slug: 'payment-failed',
  section: 'support',
  subject: 'plans',
  audience: 'student',
  updated: '2026-11-16',
  status: 'approved',
  title: 'My payment did not go through. What should I do?',
  summary: 'Update your payment method from the email we sent you or with Manage billing in Settings, so your place in your class is kept.',
  body: [
    'When a monthly payment or the first-day payment of your pack fails, or your bank needs you to confirm it, we email you with an Update payment method button. In your dashboard, your plan card in Settings then says that your last payment did not go through. Use the button in the email, or go to Settings and choose Manage billing, to pay or change your card.',
    'Your seat is held for a short time while you sort it out, and we try the payment again automatically in a few days. If it still cannot be taken, your access to live classes may be paused and your place in the room released, as the Terms allow, until the payment is made.',
    'If your card was declined, see the article on declined cards. If you have updated your card and something still looks wrong, write to us from Support in your dashboard, or email support@alimun.com.',
  ],
  related: ['card-declined', 'invoices-and-payment-details', 'cancel-your-plan'],
};
