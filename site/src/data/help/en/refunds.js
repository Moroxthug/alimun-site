// Sources checked (internal, never shown): Terms sections 4, 6, the changes paragraph and section 17 (site/src/blocks/legal/terms.html), js/app/settings.js (Withdraw from contract here), js/translations.js app_wd_*, api/_lib/email-text/en.json withdrawal, room_cancelled, docs/PROGRESS.md 11 Nov 2026 (withdrawal function; refunds stay manual)
export default {
  slug: 'refunds',
  lang: 'en',
  kind: 'answer',
  subject: 'plans',
  audience: 'student',
  title: 'Can I get a refund?',
  summary: "Refunds follow the Terms: payments are generally not refunded, with exceptions when Alimun cancels or reduces a service, and EU and UK consumers can withdraw within 14 days from Settings.",
  words: ['refund', 'money back', 'withdraw', 'withdrawal', 'cooling off', '14 days', 'right of withdrawal', 'cancel and refund'],
  updated: '2026-11-12',
  body: [
    { p: "Under the Terms, payments are not refunded except where the law requires it or the Terms say otherwise. There are no refunds or credits for part of a period, for unused classes or for time you did not use, and missed classes are not refunded or rescheduled unless your plan says otherwise." },
    { p: "The Terms do give a refund of the unused part of your current billing period if we cancel a class and do not offer a replacement, if we end your plan for a reason other than a breach of the Terms, or if we change the service in a way that significantly reduces what you paid for and you cancel." },
    { p: "If you are a consumer in the EU or the EEA, you can withdraw from a purchase within 14 days without giving a reason. Open **Settings**, choose **Withdraw from contract here**, pick the purchase and check your details, then choose **Confirm withdrawal**. We email you a confirmation with the date and time. If you asked for classes to start during those 14 days, you pay for what was already provided, and the rest is refunded within 14 days to the payment method you used. Consumers in the UK have the same 14-day right, and consumers in Morocco can withdraw from a distance contract within 7 days." },
    { p: "Consumer rights in your own country, for example in Australia or Quebec, apply in addition; the full wording is in the Terms and Conditions. If a reserved room does not open, nothing has been charged, so there is nothing to refund." }
  ],
  related: ['cancel-plan', 'charged-twice', 'reserved-seat-card-saved'],
  missing: [
    "Refunds are made by hand by the owner (PROGRESS 11 Nov 2026); no further refund policy (for example for voice practice minutes or a trial class) exists beyond the Terms, so none is stated.",
    "The spec's after-14-days options (a pause or a move to the next start date) and the exam pack guarantee are not in the Terms or the code, so they are left out.",
    "Whether the Moroccan 7-day withdrawal can also be made through the Settings function was not confirmed; the dashboard text names only EU residents.",
    "The Terms' withdrawal paragraph speaks of a paid subscription; whether it covers one-off purchases (voice minutes, help class) the same way is for the owner or a lawyer to confirm."
  ]
};
