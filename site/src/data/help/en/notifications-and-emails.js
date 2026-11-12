// Sources checked (internal, never shown): js/app/bell.js, js/app/prefs.js, api/cron-reminders.js, api/auth.js (unsubscribe), api/_lib/email.js, api/_lib/email-text/en.json, js/translations.js (app_nt_*, app_st_news_*), Privacy §3, §7, §12
export default {
  slug: "notifications-and-emails",
  lang: "en",
  kind: "answer",
  subject: "account",
  audience: "all",
  title: "What do the bell and Alimun's emails tell me, and how do I stop news and offers?",
  summary: "The bell shows class changes, marked homework, notes and reminders; emails about your account and classes always arrive, and news and offers come only if you are 16 or older and asked for them, with a link in each to stop them.",
  words: ["notifications", "bell", "emails", "unsubscribe", "stop emails", "newsletter", "news and offers", "marketing", "reminders", "too many emails"],
  updated: "2026-11-12",
  body: [
    { p: "The bell at the top of your dashboard opens **Notifications**. A dot on it means something is new. It tells you when your homework has been marked, when a class session has moved or been cancelled, when the notes from a class are ready, when a place opens in a class you were waiting for, and, for teachers, when a new student joins your class. It also shows short reminders, for example after a week without practice, and offers you asked for. Opening the panel marks what it shows as read, and tapping an item takes you to the right page. Notifications are deleted after 12 months." },
    { p: "Some emails are part of the service and are sent to everyone they concern: confirming a new account, choosing a new password, joining or leaving a class, a session that has moved or been cancelled, class notes, a place that has opened, your plan and payments, and, for teachers, your application, new students and course contract offers. These cannot be switched off while you have an account." },
    { p: "**News and offers** are different. We send them only to people who are 16 or older and ask for them. In **Settings**, the **News and offers** card has two boxes: **I am 16 or older** and **Send me news and offers from Alimun**. The second box only works once the first is ticked. The reminder emails are sent only to people who asked for news and offers; everyone else sees the reminders on the bell." },
    { p: "To stop news and offers, untick **Send me news and offers from Alimun** in Settings, or use the link at the bottom of any of these emails and press **Stop news and offers**. It takes effect straight away, and emails about your account and your classes still arrive. You can turn news and offers back on in Settings at any time." }
  ],
  related: ["your-data-and-privacy", "dashboard-language-and-time-zone", "did-not-get-the-email"],
  missing: [
    "The exact list of who receives which service email (for example whether teachers get the session moved or cancelled email) was not traced; the answer names the email kinds only.",
    "The bell refreshes every two minutes while the dashboard is open; not mentioned."
  ]
};
