// Sources checked (internal, never shown): js/app/settings.js planHtml (Manage billing), api/stripe.js billing-portal, api/_lib/entitlements.js (onSubscription, onSchedule, releasePack), Terms section 6 (site/src/blocks/legal/terms.html), js/translations.js app_st_manage, app_st_manage_p, tiers2_faq_a1, api/_lib/email-text/en.json room_merged
export default {
  slug: 'cancel-plan',
  lang: 'en',
  kind: 'answer',
  subject: 'plans',
  audience: 'student',
  title: 'How do I cancel my plan?',
  summary: "Cancel the app or an open class from Manage billing in Settings and keep access to the end of the paid period; packs paid monthly can be stopped before the next month.",
  words: ['cancel', 'cancel subscription', 'stop paying', 'end plan', 'unsubscribe', 'stop renewal', 'cancel reservation'],
  updated: '2026-11-12',
  body: [
    { p: "The app and the open class renew by themselves, the open class every month and the app every month or year. To stop one, open **Settings** and choose **Manage billing**. It opens Stripe's billing page, where you can cancel. Cancelling stops the next renewal, and you keep access until the end of the period you have already paid for." },
    { p: "A level or exam pack paid monthly is three payments. You can stop it before its next month, and you leave the room then. A pack paid once for the 12 weeks has no further payments to stop." },
    { p: "If you reserved a pack and your room has not opened yet, nothing has been charged. To cancel the reservation, write to us from the Contact page." },
    { p: "Under the Terms, payments are not refunded for part of a period, for unused classes or for time you did not use, except where the law or the Terms say otherwise. If you live in the EU, you can also withdraw from a purchase within 14 days; see **Can I get a refund?**" }
  ],
  related: ['refunds', 'change-plan', 'reserved-seat-card-saved'],
  missing: [
    "Whether the Stripe customer portal allows cancelling a monthly pack (it runs on a subscription schedule) depends on portal settings not in the repo; the public FAQ (tiers2_faq_a1) says it can be stopped before its next month, but how is not confirmed.",
    "There is no self-service cancel for a reservation that has not started; the answer points to the Contact page.",
    "The spec's cancel offers (pause for up to a month, move down a step, Germany's direct cancel button) were not found in the code, so they are left out.",
    "Settings shows Manage billing only when the profile has a subscription status; a reserved pack does not set one until the room opens."
  ]
};
