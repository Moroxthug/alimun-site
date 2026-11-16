// Checked 2026-11-16 against: js/app/settings.js (About you: Your name, Email shown but not editable, Language you are learning, Level, Country you live in, Time zone, Save changes; a change of language or level reloads the dashboard), js/app/teach-account.js (teacher Settings: name, location, specialty, bio; no time zone field), js/app/data.js (only password changes through updateUser; no email change anywhere in the code), js/translations.js en (app_st_me_h, app_st_name, app_st_email, app_st_email_p, app_st_course_p, app_st_country, app_st_zone, app_st_zone_p, app_st_save, app_st_saved).
export default {
  slug: 'change-name-email-or-time-zone',
  section: 'help',
  subject: 'account',
  audience: 'all',
  updated: '2026-11-16',
  status: 'draft',
  title: "How do I change my name, email address or time zone?",
  summary: "Change your name and time zone in Settings under About you; your email address cannot be changed there, so write to us if you need a new one.",
  body: [
    "Open Settings in your dashboard. Under About you, change Your name, then press Save changes; you see \"Saved.\" when it is done. Learners can also change their country, the language they are learning and their level there. Changing the language or level changes your book, practice and library, and the dashboard reloads.",
    "In the student dashboard, Time zone is also under About you. Class times are shown in this time zone, so pick the one where you are and press Save changes.",
    "Your email address is shown under Email, because it is the address you sign in with, but it cannot be changed in Settings. If you need to use a different address, write to us from Support in your dashboard, or email support@alimun.com.",
  ],
  related: ['change-dashboard-language', 'sign-in-and-reset-password', 'class-times-and-time-zones'],
};
