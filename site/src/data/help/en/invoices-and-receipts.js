// Sources checked (internal, never shown): js/app/settings.js planHtml (Manage billing shown only with a subscription status), api/stripe.js billing-portal, api/pricing.js handlePurchase (one-off purchases on an invoice), js/app/plans.js view() (Change your plan), js/translations.js app_st_manage, app_st_manage_p, app_pl_change_p, app_st_portal_error
export default {
  slug: 'invoices-and-receipts',
  lang: 'en',
  kind: 'answer',
  subject: 'plans',
  audience: 'student',
  title: 'Where do I find my invoices?',
  summary: "Learners with an active plan find their invoices on Stripe's billing page through Manage billing in Settings; others can ask through the Contact page.",
  words: ['invoice', 'receipt', 'bill', 'VAT invoice', 'download invoice', 'payment history', 'billing history'],
  updated: '2026-11-12',
  body: [
    { p: "If you have an active plan, open **Settings** and choose **Manage billing**. It opens Stripe's billing page, where you can see your invoices, change your card, change your plan or cancel. If the page does not open, try again in a moment." },
    { p: "Every payment made at the checkout, including the trial class, the help class and voice practice minutes, is made on an invoice. A reserved pack has no invoice until your card is charged on the day your room opens." },
    { p: "If Settings does not show Manage billing, for example because you only bought voice practice minutes, write to us from the Contact page and ask for a copy of your invoice." }
  ],
  related: ['payment-methods', 'charged-twice', 'cancel-plan'],
  missing: [
    "Whether Stripe emails a receipt after each payment depends on the Stripe account's email settings, which are not in the repo; left out.",
    "Which invoices the Stripe customer portal lists (subscriptions only or one-off invoices too) and whether it offers download depends on portal settings; the answer only says invoices are there, as the dashboard text does.",
    "What business details (company name, tax number) appear on invoices and whether a learner can add their own tax number were not confirmed."
  ]
};
