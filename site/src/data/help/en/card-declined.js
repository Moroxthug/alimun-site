// Checked 2026-11-16 against: js/app/pay.js (errorText: declined, Moroccan card hint, bank check through handleNextAction, Use another card), js/translations.js / js/i18n/en.app.js (app_pay_declined, app_pay_ma, app_pay_err, app_pay_change_card, app_pay_expired), api/pricing.js (purchase returns declined with moroccanCard; a payment the bank must confirm returns next), docs/PRICING_ENGINE_SPEC.md section 13 (Moroccan cards).
export default {
  slug: 'card-declined',
  section: 'support',
  subject: 'plans',
  audience: 'student',
  updated: '2026-11-16',
  status: 'approved',
  title: 'My card was declined at checkout. What can I do?',
  summary: 'The decision comes from your bank, so check with your bank or try another card with Use another card.',
  body: [
    'When the checkout says "Your bank declined the card.", the card was refused by your bank, not by Alimun. Nothing is charged when a card is declined. You can check with your bank and try again, or choose Use another card on the same page.',
    'Some banks ask you to confirm a payment, for example in their app. When that happens the checkout opens your bank\'s check; finish it there and the payment goes through.',
    'Moroccan cards need online international payments switched on, usually in your bank\'s app. Please also check your yearly allowance for payments abroad, then try again.',
    'If the checkout says the payment did not go through and you do not know why, check your card details and try again. If it keeps failing, write to us from Support in your dashboard, or email support@alimun.com.',
  ],
  related: ['payment-failed', 'invoices-and-payment-details', 'price-in-my-country'],
};
