// Checked 2026-11-16 against: js/app/settings.js and js/app/teach-account.js (Your account: "Ask us to delete your account" links to the Contact page; Manage billing opens Stripe's portal to cancel a plan), api/tutor.js (forget action), site/src/blocks/legal/gdpr.html (section 7 retention: deleted or anonymised within 90 days after closing, payment records kept as tax law requires; section 10 rights, privacy@alimun.com, answer within one month), site/src/blocks/legal/terms.html (section 13: you may close your account at any time), js/translations.js en (app_st_delete, app_st_manage, app_st_manage_p, app_tu_forget). No self-service data download exists in the code.
export default {
  slug: 'download-or-delete-my-data',
  section: 'help',
  subject: 'account',
  audience: 'all',
  updated: '2026-11-16',
  status: 'draft',
  title: "How do I get a copy of my data or delete my account?",
  summary: "Email privacy@alimun.com for a copy of your data, and use Ask us to delete your account in Settings, or the same address, to close your account.",
  body: [
    "You can close your account at any time. Open Settings in your dashboard and, under Your account, press Ask us to delete your account. It opens our Contact page, where you send us the request. You can also email privacy@alimun.com from the address of your account.",
    "If you pay for a plan, you can cancel it yourself with Manage billing in Settings, which opens the billing page where you can change your card, see your invoices, change plan or cancel.",
    "To get a copy of the personal information we hold about you, in a format you can take elsewhere, email privacy@alimun.com. We check that the request comes from you and answer within one month, or sooner where the law requires it.",
    "When an account is closed, its account, profile and learning data are deleted or anonymised within 90 days. Payment and invoice records are kept as long as tax and accounting law requires. If you only want the tutor to forget you, press Forget everything on the Tutor page: this deletes what the tutor remembers and every past tutor session.",
  ],
  related: ['what-data-does-alimun-keep', 'does-the-tutor-keep-my-conversations', 'cancel-your-plan'],
};
