// Sources checked (internal, never shown): js/app/plans.js (view(), portal()), api/pricing.js handleQuote (already_have), api/_lib/entitlements.js (startPack, moveUpCredit), js/app/shell.js fillOffers, js/translations.js app_pl_change, app_pl_change_p, app_pay_have, app_home_moveup_p, app_pp_*_p
export default {
  slug: 'change-plan',
  lang: 'en',
  kind: 'answer',
  subject: 'plans',
  audience: 'student',
  title: 'How do I change my plan?',
  summary: "Choose the new product on Plans and prices; moving up from an open class to a pack credits the unused part of the open class month, and subscriptions are managed on Stripe's billing page.",
  words: ['change plan', 'switch plan', 'upgrade', 'move up', 'downgrade', 'open class to level pack', 'change subscription'],
  updated: '2026-11-12',
  body: [
    { p: "Each product at Alimun is its own purchase, so changing usually means choosing the new one on **Plans and prices** (open **Settings**, then **See the plans**). You can hold one of each product at a time; if you already have it, the checkout tells you **You already have this.**" },
    { p: "To move up from an open class to a level or exam pack, choose the pack and a room. On the day the pack starts, your open class ends by itself and the unused part of its current month comes off the pack's first payment, as long as both are paid in the same currency." },
    { p: "The open class and the packs already include the app. If you also pay for the app on its own, that is a separate subscription and it keeps renewing until you cancel it." },
    { p: "If you have a subscription, Plans and prices shows **Change your plan**, which opens Stripe's billing page. Your subscription, your invoices and cancelling are there; the same page opens from **Manage billing** in Settings. If the change you want is not offered there, write to us from the Contact page." }
  ],
  related: ['choosing-a-plan', 'cancel-plan', 'reserved-seat-card-saved'],
  missing: [
    "What the Stripe billing page lets a learner change (for example the app from monthly to yearly, or switching between products) depends on the Stripe customer portal settings, which are not in the repo.",
    "No self-service way was found to move down (for example from a pack to an open class) or to change a pack's language or room; the answer points to the Contact page.",
    "An app subscription bought before a pack is not ended when the pack starts (only open classes are, in moveUpCredit). The owner may want to confirm this is intended.",
    "The move-up credit applies only to an open class paid in the same currency as the pack (code); whether the owner wants this said is to confirm."
  ]
};
