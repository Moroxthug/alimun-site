// Sources checked (internal, never shown): api/pricing.js handleSetup (payment_method_types card), js/app/pay.js (card first, Use another card), js/app/settings.js (Manage billing), js/translations.js app_pay_card_p, app_pay_safe, app_pay_change_card, app_pay_ma, app_st_manage_p
export default {
  slug: 'payment-methods',
  lang: 'en',
  kind: 'answer',
  subject: 'plans',
  audience: 'student',
  title: 'How can I pay, and how do I change my card?',
  summary: "Alimun takes card payments through Stripe; you change the card for a plan in Manage billing in Settings.",
  words: ['payment method', 'pay by card', 'credit card', 'debit card', 'change card', 'update card', 'new card', 'Stripe', 'Moroccan card'],
  updated: '2026-11-12',
  body: [
    { p: "You pay by card. The checkout asks for your card first, because the country it was issued in sets your price. Payments are handled by Stripe, and your card details never reach Alimun." },
    { p: "To pay with a different card at the checkout, choose **Use another card**. To change the card used for a plan you already have, open **Settings**, choose **Manage billing** and change it on Stripe's billing page." },
    { p: "Moroccan cards need online international payments switched on, usually in your bank's app. Please also check your yearly allowance for online payments abroad before you try again." }
  ],
  related: ['payment-failed', 'prices-in-my-currency', 'invoices-and-receipts'],
  missing: [
    "Whether wallets such as Apple Pay or Google Pay appear in the card form depends on Stripe's settings and the device; not stated.",
    "Store purchases (App Store, Google Play) are not mentioned: no store app is linked and the RevenueCat setup is still with the owner.",
    "How a learner with a reserved pack (no Manage billing button yet) changes the card that will be charged when the room opens was not found."
  ]
};
