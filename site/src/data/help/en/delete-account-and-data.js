// Sources checked (internal, never shown): js/app/settings.js (app_st_delete links to /contact), js/app/teach-account.js, js/translations.js (app_st_delete, app_st_manage_p), Privacy §4 (tutor memory), §7, §10, Terms §6, §13
export default {
  slug: "delete-account-and-data",
  lang: "en",
  kind: "answer",
  subject: "account",
  audience: "all",
  title: "How do I delete my account and my data?",
  summary: "Use Ask us to delete your account in Settings, which opens the Contact page, or email privacy@alimun.com; account and learning data are deleted or anonymised within 90 days, while payment records are kept as tax law requires.",
  words: ["delete account", "close account", "remove my data", "erase", "deactivate", "GDPR delete", "right to be forgotten"],
  updated: "2026-11-12",
  body: [
    { p: "In **Settings**, the **Your account** card has the link **Ask us to delete your account**. It opens the Contact page, where you send us the request. You can also email **privacy@alimun.com** from the address of your account. We check that the request comes from you before we act on it." },
    { p: "If you pay for a plan, deleting the account is a separate step from the subscription. Cancel the plan first with **Manage billing** in Settings, so that it does not renew." },
    { p: "Once the account is closed, your account, profile and learning data are deleted or anonymised within 90 days. Payment and invoice records are kept for as long as tax and accounting law requires. What you told the practice tutor to remember can be deleted earlier, on the Tutor page." }
  ],
  related: ["your-data-and-privacy", "cancel-plan", "change-email-or-name", "notifications-and-emails"],
  missing: [
    "The Privacy Policy (§10) says you can close your account from your dashboard, but the dashboard only offers a link to the Contact page. Owner to decide which is right.",
    "Whether a deletion request also cancels an active Stripe subscription is not in the code; the answer tells people to cancel first.",
    "How teachers with payouts or running course contracts close their account is not described anywhere."
  ]
};
