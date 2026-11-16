// Checked 2026-11-16 against: Terms section 5 (automatic renewal, 30 days' notice of a price increase), api/_lib/entitlements.js (packs: monthly is a 3-payment schedule that ends by itself; upfront covers 12 weeks; access runs to the end of the last paid month), js/app/settings.js and js/translations.js / js/i18n/en.app.js (app_st_plan_free_h, app_st_plan_free_p, app_pay_then_month, app_pay_then_year, app_pay_reserve_mo), api/_lib/email-text/en.json (founding_notice).
export default {
  slug: 'end-of-a-paid-period',
  section: 'help',
  subject: 'plans',
  audience: 'student',
  updated: '2026-11-16',
  status: 'approved',
  title: 'What happens when my paid period or my pack ends?',
  summary: 'The app and the open class renew by themselves until you cancel, while a 12-week pack simply ends after its last paid month and nothing more is charged.',
  body: [
    'The app and the open class are subscriptions. They renew automatically for the same period, monthly or yearly, until you cancel. If a price goes up, we tell you by email at least 30 days before, and you can cancel before it takes effect.',
    'A level, intensive or exam pack is 12 weeks. Paid monthly, it is three payments and then it stops by itself; paid upfront, the one payment covers the 12 weeks. Either way nothing more is charged when the pack is over. To keep learning with a teacher, choose your next pack or an open class in Plans and prices.',
    'When nothing you have paid for is running any more, your account goes back to the free plan. Your book, practice and flashcards stay in your dashboard; classes with a teacher come with a plan.',
  ],
  related: ['cancel-your-plan', 'monthly-or-upfront', 'plans-and-prices'],
};
