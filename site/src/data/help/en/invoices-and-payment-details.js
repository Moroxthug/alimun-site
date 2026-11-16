// Checked 2026-11-16 against: api/pricing.js (setup: SetupIntent with payment_method_types card; voice minutes, trial and help class paid on an invoice), js/app/pay.js (Stripe Payment Element, card first, Use another card), js/app/settings.js (Manage billing shown on the plan card of a paid plan with a subscription), js/translations.js / js/i18n/en.app.js (app_st_manage, app_st_manage_p, app_pay_safe, app_pay_change_card), docs/PROGRESS.md 2026-10-16 (billing portal: update payment method, invoice history), Terms sections 5 and 10.
export default {
  slug: 'invoices-and-payment-details',
  section: 'help',
  subject: 'plans',
  audience: 'student',
  updated: '2026-11-16',
  status: 'draft',
  title: 'How do I pay, change my card or find my invoices?',
  summary: 'You pay by card through Stripe, and you change your card or see your invoices with Manage billing in Settings.',
  body: [
    'Payments on Alimun are handled by Stripe, and your card details never reach Alimun. At checkout you add a card first; if you want to pay with a different one, choose Use another card.',
    'To change the card on your plan or see your invoices, go to Settings in your dashboard and choose Manage billing on your plan card. It opens Stripe\'s billing page, where you can change your card, see your invoices, change plan or cancel.',
    'If you cannot find an invoice you need, write to us from Support in your dashboard, or email support@alimun.com.',
  ],
  related: ['change-your-plan', 'payment-failed', 'card-declined'],
};
