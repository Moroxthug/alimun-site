// Checked 2026-11-16 against: js/app/settings.js (plan card, Manage billing opens Stripe's billing page), js/app/plans.js (Change your plan card for paying learners, picker), js/translations.js / js/i18n/en.app.js (app_st_manage, app_st_manage_p, app_pl_change, app_pl_change_p, app_pay_have), api/pricing.js (already_have: one running pack or subscription per product), api/_lib/entitlements.js (moveUpCredit: open class ends on the pack's first day, unused share of the month credited in the same currency), docs/PRICING_ENGINE_SPEC.md section 14 step 9, docs/PROGRESS.md 2026-10-16 (billing portal set-up).
export default {
  slug: 'change-your-plan',
  section: 'help',
  subject: 'plans',
  audience: 'student',
  updated: '2026-11-16',
  status: 'draft',
  title: 'How do I change my plan?',
  summary: 'You add a new plan from Plans and prices in Settings, and you manage an existing subscription with Manage billing on your plan card in Settings.',
  body: [
    'In your dashboard, go to Settings. If you have a plan, your plan card has a Manage billing button, which opens Stripe\'s billing page, where you can change your card, see your invoices, change plan or cancel. The Plans and prices page also shows a Change your plan button that leads to the same place.',
    'To add something new, such as a pack, voice practice minutes or a help class, choose it in Plans and prices. You cannot buy the same pack or subscription twice while you hold it; the checkout tells you "You already have this."',
    'If you are in an open class and move up to a level or exam pack, you reserve the pack as usual. On the pack\'s first day your open class ends, and the part of the open-class month you had not used yet is taken off the pack\'s first payment, when both are in the same currency.',
    'If something does not look right, write to us from Support in your dashboard, or email support@alimun.com.',
  ],
  related: ['cancel-your-plan', 'plans-and-prices', 'invoices-and-payment-details'],
};
