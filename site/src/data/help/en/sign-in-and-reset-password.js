// Checked 2026-11-16 against: signin.html (email and password, unconfirmed and role messages, captcha), forgot-password.html (/api/auth?action=reset, fallback to Supabase), reset-password.html, api/auth.js (reset: link to reset-password.html, same answer whether or not the account exists), api/_lib/email-text/en.json (reset email subject, button and note), js/app/settings.js (Your account: New password, Change password), js/app/teach-account.js (same card for teachers), js/translations.js en (au_signin_title, au_forgot, au_forgot_title, au_forgot_lead, au_send_link, au_reset_sent, au_reset_title, au_reset_lead, au_save_password, au_err_link, au_new_link, au_err_pw, app_st_acc_h, app_st_pw, app_st_pw_save, app_st_pw_done, app_st_signout).
export default {
  slug: 'sign-in-and-reset-password',
  section: 'help',
  subject: 'account',
  audience: 'all',
  updated: '2026-11-16',
  status: 'approved',
  title: "How do I sign in, and how do I reset my password?",
  summary: "Sign in with your email and password; if you forgot the password, use Forgot your password? on the Sign in page and follow the link we email you.",
  body: [
    "Sign in on the Sign in page with the email address and password of your account. Learners and teachers use the same page.",
    "If you forgot your password, press Forgot your password? on the Sign in page, enter the email address of your account and press Send the link. We email you a link to choose a new password; in English its subject is \"Choose a new Alimun password\". It can take a minute or two to arrive. Open it, type your new password twice and press Save the new password. The link works once and only for a limited time; if it has expired, press Request a new link. Saving a new password signs you out on your other devices.",
    "If you know your password and want to change it, open Settings in your dashboard and go to Your account. Type the new password under New password and press Change password.",
    "A password needs at least 8 characters, with a lowercase letter, a capital letter and a number. To sign out, press Sign out in the same Your account card.",
  ],
  related: ['cant-sign-in-or-no-reset-email', 'change-name-email-or-time-zone'],
};
