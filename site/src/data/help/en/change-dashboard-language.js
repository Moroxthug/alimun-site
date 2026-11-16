// Checked 2026-11-16 against: js/app/settings.js and js/app/teach-account.js (Dashboard language select, stored in this browser as alimun-lang, page reloads), js/app/data.js (rememberUiLang: the dashboard language is saved on the profile as ui_lang), api/_lib/email-i18n.js (emails in the person's dashboard language, English otherwise), js/translations.js en (app_st_ui_h, app_st_ui_p).
export default {
  slug: 'change-dashboard-language',
  section: 'help',
  subject: 'account',
  audience: 'all',
  updated: '2026-11-16',
  status: 'draft',
  title: "How do I change the language of my dashboard?",
  summary: "Open Settings and choose a language under Dashboard language; it applies on the device you are using.",
  body: [
    "Open Settings in your dashboard and choose a language under Dashboard language. The dashboard reloads straight away in that language. You can choose English, Español, Français, Deutsch, Português, Italiano, 中文, العربية or Français (Maroc).",
    "This changes the language of the buttons and explanations in your dashboard on this device. On another phone or computer, choose it there too.",
    "Our emails to you are written in the language you use your dashboard in, so after you change it, new emails follow. This does not change the language you are learning, which is under About you in Settings.",
  ],
  related: ['change-name-email-or-time-zone', 'news-offers-and-emails'],
};
