// Checked 2026-11-16 against: js/app/settings.js and js/app/teach-account.js (Your account: "Delete your account" opens #/settings/delete, js/app/delete-account.js and api/account.js; teachers' "Ask us to delete your account" links to the Contact page; Manage billing opens Stripe's portal to cancel a plan), api/tutor.js (forget action), site/src/blocks/legal/gdpr.html (section 7 retention: deleted or anonymised within 90 days after closing, payment records kept as tax law requires; section 10 rights, privacy@alimun.com, answer within one month), site/src/blocks/legal/terms.html (section 13: you may close your account at any time), js/translations.js en (app_st_delete, app_st_manage, app_st_manage_p, app_tu_forget). No self-service data download exists in the code.
export default {
  slug: 'download-or-delete-my-data',
  section: 'help',
  subject: 'account',
  audience: 'all',
  updated: '2026-11-17',
  status: 'approved',
  title: "How do I get a copy of my data or delete my account?",
  summary: "Delete your account yourself with Delete your account in Settings, and email privacy@alimun.com for a copy of your data.",
  body: [
    "You can delete your account at any time. Open Settings in your dashboard and, under Your account, press Delete your account. We first show what you can do instead, such as cancelling your plan and keeping your progress. If you still want to go, type your email address to confirm. Your account is deleted straight away, any plan you pay for on alimun.com is cancelled, and we email you a confirmation. If you pay through the App Store or Google Play, cancel it there too. Teachers ask us through the Contact page, so that their classes and payouts are handed over.",
    "If you pay for a plan, you can cancel it yourself with Manage billing in Settings, which opens the billing page where you can change your card, see your invoices, change plan or cancel.",
    "To get a copy of the personal information we hold about you, in a format you can take elsewhere, email privacy@alimun.com. We check that the request comes from you and answer within one month, or sooner where the law requires it.",
    "When an account is closed, its account, profile and learning data are deleted or anonymised within 90 days. Payment and invoice records are kept as long as tax and accounting law requires. If you only want the tutor to forget you, press Forget everything on the Tutor page: this deletes what the tutor remembers and every past tutor session.",
  ],
  related: ['what-data-does-alimun-keep', 'does-the-tutor-keep-my-conversations', 'cancel-your-plan'],
};
