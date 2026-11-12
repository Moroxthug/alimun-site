// Sources checked (internal, never shown): js/app/settings.js (name field, email field disabled, saveProfile), js/app/teach-account.js, js/translations.js (app_st_name, app_st_email_p, app_tst_*), Privacy §10
export default {
  slug: "change-email-or-name",
  lang: "en",
  kind: "answer",
  subject: "account",
  audience: "all",
  title: "How do I change my name or email address?",
  summary: "Change your name in Settings and press Save changes; the email address cannot be changed from the dashboard, so write to Alimun through the Contact page.",
  words: ["change name", "change email", "wrong name", "new email address", "update details", "edit profile"],
  updated: "2026-11-12",
  body: [
    { p: "Your name is in **Settings**, in the **About you** card. Change it under **Your name** and press **Save changes**. The name cannot contain the characters < or >. Your teacher and your class see the new name; teachers' names appear to their students." },
    { p: "Your email address is shown in the same card but cannot be edited there: it is the address you sign in with. If you need to use a different address, write to us through the **Contact** page from the address you have now, and tell us the new one." },
    { p: "Teachers can also change where they teach from, what they specialise in and the few sentences students read about them in **Settings**. The languages you teach are set by Alimun; to change them, write to us." }
  ],
  related: ["sign-in-and-password", "your-data-and-privacy"],
  missing: [
    "Whether staff change a sign-in email on request, and how (no admin action for it was found in the code). The answer only says to write to us.",
    "Whether a changed name is updated on live-class video tiles straight away (the meeting token carries the name) was not checked."
  ]
};
