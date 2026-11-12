// Sources checked (internal, never shown): api/pricing.js handleQuote (already_have, one running pack or subscription per product; double click refused), api/_lib/entitlements.js (monthly packs: subscription schedule of 3 payments; moveUpCredit ends only open classes), api/_lib/pricing.js PRODUCTS, js/translations.js app_pay_reserve_mo, app_pp_open_p, app_pp_level_p, app_st_manage_p, Terms section 6
export default {
  slug: 'charged-twice',
  lang: 'en',
  kind: 'problem',
  subject: 'plans',
  audience: 'student',
  title: 'I was charged twice',
  summary: "Tell expected payments (monthly pack payments, separate products) apart from a real double charge, which a person then looks at.",
  words: ['charged twice', 'double charge', 'two payments', 'duplicate payment', 'paid twice', 'extra charge', 'unexpected charge'],
  updated: '2026-11-12',
  body: [
    { p: "This check helps you tell expected payments apart from a real double charge. A real double charge is always looked at by a person." }
  ],
  check: {
    start: 'pack',
    steps: {
      pack: { auto: 'payment', ask: 'Are the two payments for a level or exam pack you pay monthly, about a month apart?', yes: 'is-monthly', no: 'app' },
      'is-monthly': { solved: 'That is expected. A pack paid monthly is three payments: the first on the day your room opens, then once a month.' },
      app: { ask: 'Is one payment for the app and the other for an open class or a pack?', yes: 'fix-app', no: 'same' },
      'fix-app': { fix: "The open class and the packs already include the app. If you also pay for the app on its own, that is a separate subscription and it keeps renewing until you cancel it: open Settings, choose Manage billing and cancel it there if you no longer need it. Payments already made are covered by the Terms.", next: 'still' },
      same: { ask: 'Are both payments for exactly the same purchase, made at the same time or close together?', yes: 'person', no: 'fix-other' },
      'fix-other': { fix: "Look at the name of each payment on your bank statement, or on Stripe's billing page through Manage billing in Settings. Voice practice minutes, the trial class and the help class are each a separate payment, and the app can be paid monthly or yearly.", next: 'still' },
      still: { ask: 'Do you still see two payments for the same thing?', yes: 'person', no: 'done' },
      person: { fix: "Please talk to a person and give the date and amount of both payments as your bank shows them. Never send your card number.", handover: true },
      done: { solved: 'Good, the payments are explained.' }
    }
  },
  related: ['refunds', 'invoices-and-receipts', 'change-plan', 'cancel-plan'],
  missing: [
    "Whether a reservation makes the bank show a temporary card check was not confirmed, so it is not mentioned.",
    "An app subscription is not ended when the learner later buys an open class or a pack (code); the owner may want to end or credit it automatically, or to confirm the wording.",
    "No refund is promised for a real double charge: refunds are manual and the Terms do not cover this case explicitly."
  ]
};
