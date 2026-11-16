// Checked 2026-11-16 against: Terms (site/src/blocks/legal/terms.html, last updated 23 Oct 2026) sections 6, 12 and 17 (EU/EEA, UK, Morocco, Australia), js/app/settings.js ("Withdraw from contract here" link on the plan card), js/translations.js / js/i18n/en.app.js (app_wd_* texts), api/_lib/email-text/en.json (withdrawal confirmation and refund wording, room_cancelled), api/_lib/entitlements.js (refunds issued by an admin end access), docs/PRICING_ENGINE_SPEC.md section 14 step 1.
export default {
  slug: 'refunds-and-withdrawal',
  section: 'support',
  subject: 'plans',
  audience: 'student',
  updated: '2026-11-16',
  status: 'approved',
  title: 'I was charged and want a refund. Can I get one?',
  summary: 'Payments are not refunded except where the law or the Terms say so, but if you live in the EU or the UK you can withdraw from a purchase within 14 days from Settings in your dashboard.',
  body: [
    'Under the Terms, payments are not refundable, and there are no refunds or credits for part of a period, unused classes or time you did not use, except where the law requires it or the Terms say otherwise. If we cancel a class and do not offer a replacement, or we end your plan for a reason other than a breach of the Terms, we refund the unused part of your current billing period. The same applies if we change the service in a way that significantly reduces what you paid for and you choose to cancel.',
    'If you live in the EU or the EEA, you can withdraw from a purchase within 14 days of buying it, without giving a reason. In your dashboard, go to Settings and choose Withdraw from contract here on your plan card, pick the purchase, check your details and choose Confirm withdrawal. We email you a confirmation with the date and time. We refund what you paid within 14 days, to the payment method you used. If you asked for classes to start during the withdrawal period, the classes already given are deducted. If the purchase is a subscription, we end it for you.',
    'People living in the UK have the same 14-day right. In Morocco the right to withdraw from a distance contract is 7 days, and in Australia the guarantees of the Australian Consumer Law apply. You can also withdraw by email to legal@alimun.com.',
    'A reserved pack whose room does not open is never charged, so there is nothing to refund. For any other question about a charge, write to us from Support in your dashboard, or email support@alimun.com.',
  ],
  related: ['cancel-your-plan', 'reserve-a-place-in-a-pack', 'payment-failed'],
};
