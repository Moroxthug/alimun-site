// Checked 2026-11-16 against: js/app/prefs.js (News and offers card: I am 16 or older, Send me news and offers from Alimun, the second box off until the first is ticked, saved as consent history), js/app/settings.js and js/app/teach-account.js (the card in both Settings), api/auth.js (unsubscribe link works without signing in), api/_lib/email-i18n.js (unsub_line, reminder_footer), site/src/blocks/legal/gdpr.html (sections 2, 3, 7 and 12), docs/GROWTH_PLAN.md (step 2, no marketing under 16), js/translations.js en (app_st_news_h, app_st_news_p, app_st_age16, app_st_news, app_st_saved).
export default {
  slug: 'news-offers-and-emails',
  section: 'help',
  subject: 'account',
  audience: 'all',
  updated: '2026-11-16',
  status: 'approved',
  title: "Which emails will I get, and how do I stop news and offers?",
  summary: "You always get emails about your account, classes and payments; news, offers and reminders come only if you are 16 or older and ask for them, and you can stop them in Settings or from any of those emails.",
  body: [
    "Emails about your account, your classes, your payments and changes to our terms are part of the service, so they are always sent. News, offers and reminder emails are different: we send them only to people who are 16 or older and ask for them.",
    "To choose, open Settings in your dashboard and go to News and offers. Tick I am 16 or older, then tick or untick Send me news and offers from Alimun. Your choice is saved straight away and you see \"Saved.\". The second box can only be ticked once the first one is.",
    "Every news, offers or reminder email also has a link at the bottom to stop them, which works without signing in, and the stop takes effect straight away. We keep a record of each choice you make, with its date, to show when you gave or withdrew your consent. The Privacy page at alimun.com/gdpr has the details.",
  ],
  related: ['change-dashboard-language', 'what-data-does-alimun-keep'],
};
