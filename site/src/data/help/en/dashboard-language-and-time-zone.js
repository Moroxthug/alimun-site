// Sources checked (internal, never shown): js/app/settings.js (UI select, alimun-lang, timezone field), js/app/data.js (rememberUiLang), js/app/classes.js and js/app/find.js (profile time zone), js/app/teach.js and js/app/teach-classes.js (device time zone, availability), api/enroll.js, api/generate-notes-pdf.js, js/translations.js (app_st_ui_*, app_st_zone*, app_tc_in_zone)
export default {
  slug: "dashboard-language-and-time-zone",
  lang: "en",
  kind: "answer",
  subject: "account",
  audience: "all",
  title: "How do I change the dashboard language or my time zone?",
  summary: "Choose the dashboard language in Settings (it applies on that device and to your emails); students set the time zone their class times are shown in under Settings, and the teacher dashboard uses the time zone of the device.",
  words: ["language", "change language", "dashboard language", "time zone", "timezone", "wrong time", "class time wrong", "translate"],
  updated: "2026-11-12",
  body: [
    { p: "The language of the buttons and explanations in your dashboard is chosen in **Settings**, in the **Dashboard language** card. You can choose English, Spanish, French, German, Portuguese, Italian, Chinese, Arabic or French for Morocco. The page reloads in the new language. The choice is kept on the device you made it on, so set it again on another phone or computer." },
    { p: "Emails from Alimun are written in the language you last used in your dashboard. The language you are learning is a different setting: students change it under **Language you are learning** in Settings, which also changes their book, practice and library." },
    { p: "Students choose their **Time zone** in Settings, in the **About you** card, and press **Save changes**. Class times on the Classes page and in your class emails are shown in that time zone. It starts as the time zone of the device you signed up on, so change it if you move or signed up while travelling." },
    { p: "The teacher dashboard shows times in the time zone of the device you are using. Free time you add under **Your availability** is saved in that time zone, and new classes are planned in it." }
  ],
  related: ["notifications-and-emails", "teacher-classes-and-schedule"],
  missing: [
    "The public website's language (the folder in the address) is separate from the dashboard language; not explained here."
  ]
};
