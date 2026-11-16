// Checked 2026-11-16 against: Terms sections 5 and 6 (site/src/blocks/legal/terms.html, last updated 23 Oct 2026), site/src/blocks/tiers/faq.html ("Can I stop at any time?"), js/app/settings.js (Manage billing, Stripe billing portal), js/translations.js / js/i18n/en.app.js (app_st_manage_p, app_st_s_canceled), docs/PROGRESS.md 2026-10-16 (portal: cancel at period end), api/_lib/entitlements.js (onSchedule: a cancelled pack runs to the end of the month already paid).
export default {
  slug: 'cancel-your-plan',
  section: 'help',
  subject: 'plans',
  audience: 'student',
  updated: '2026-11-16',
  status: 'draft',
  title: 'How do I cancel my plan?',
  summary: 'Go to Settings in your dashboard and choose Manage billing; cancelling stops the next payment and you keep access until the end of the period you already paid for.',
  body: [
    'In your dashboard, go to Settings and choose Manage billing on your plan card. This opens Stripe\'s billing page, where you can cancel. You can also cancel by writing to us from Support in your dashboard, or by emailing support@alimun.com.',
    'Cancelling stops the next renewal. You keep access until the end of the period you have already paid for, and your plan card in Settings then shows that your plan has been cancelled. The app and the open class can be stopped at any time this way. A level or exam pack paid monthly can be stopped before its next month, and you leave the room then.',
    'Under the Terms, payments are not refunded for part of a period, unused classes or time you did not use, except where the law or the Terms say otherwise. If you live in the EU, the UK or another place with a legal right to withdraw from online contracts, you may also be able to withdraw from a recent purchase; see the article on refunds and withdrawal.',
  ],
  related: ['end-of-a-paid-period', 'refunds-and-withdrawal', 'change-your-plan'],
};
