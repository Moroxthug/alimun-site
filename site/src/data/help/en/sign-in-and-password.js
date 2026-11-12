// Sources checked (internal, never shown): signin.html, forgot-password.html, reset-password.html, api/auth.js (reset, rate limits), js/app/settings.js (savePw), js/app/teach-account.js, js/translations.js (au_*, app_st_*), Privacy §2 (security check)
export default {
  slug: "sign-in-and-password",
  lang: "en",
  kind: "answer",
  subject: "account",
  audience: "all",
  title: "How do I sign in, and what if I forget my password?",
  summary: "You sign in with your email address and password; Forgot your password? on the sign-in page emails you a link to choose a new one, and Settings lets you change it while signed in.",
  words: ["sign in", "log in", "login", "password", "forgot password", "reset password", "change password", "new password"],
  updated: "2026-11-12",
  body: [
    { p: "Alimun accounts sign in with the **email address and password** you chose when you created the account. Students and teachers use the same sign-in page, and it takes each of you to your own dashboard. When you sign in, sign up or send a form, a short security check confirms that a person is sending it." },
    { p: "If you have forgotten your password, choose **Forgot your password?** on the sign-in page, enter the email address of your account and press **Send the link**. We email you a link to choose a new password. Open it, type the new password twice and press **Save the new password**. The link works once and only for a limited time; if it has expired or was already used, request a new one from the same page. Saving a new password signs you out on your other devices." },
    { p: "A password needs **at least 8 characters, with a lowercase letter, a capital letter and a number**." },
    { p: "To change your password while you are signed in, open **Settings**, write it under **New password** in the **Your account** card and press **Change password**. **Sign out** is in the same card." }
  ],
  related: ["cannot-sign-in", "did-not-get-the-email", "change-email-or-name"],
  missing: [
    "No other sign-in method (Google, Apple, magic link) exists in the code; confirm none is planned before translating.",
    "How long the reset link stays valid is set in Supabase, not in the repo, so no time is given."
  ]
};
