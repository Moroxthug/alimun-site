// Checked 2026-11-16 against: signin.html (error messages: au_err_login, au_err_unconfirmed, au_err_rate, au_err_role; teacher pending and suspended screens), forgot-password.html, api/auth.js (reset: same answer whether or not the account exists, limit of 3 emails per address an hour, 10 requests per connection an hour, captcha), api/_lib/email-text/en.json (reset subject), reset-password.html (au_err_link, au_new_link), js/translations.js en (au_* keys named below), docs/GROWTH_PLAN.md (step 1, captcha).
export default {
  slug: 'cant-sign-in-or-no-reset-email',
  section: 'support',
  subject: 'account',
  audience: 'all',
  updated: '2026-11-16',
  status: 'draft',
  title: "I can't sign in, or I didn't get the password reset email",
  summary: "Check the message on the Sign in page, look in your spam folder for the reset email, and make sure you used the address of your account; if it still fails, write to us.",
  body: [
    "If the Sign in page says \"The email or password is not right\", check that you typed the address you signed up with, then reset your password with Forgot your password?. If it says \"Please confirm your email first\", open the confirmation link we sent when you created your account. If it says \"Too many attempts right now\", wait a few minutes and try again.",
    "If the reset email does not arrive, wait a couple of minutes and look in your spam or junk folder for an email with the subject \"Choose a new Alimun password\". We only send it to an address that has an Alimun account, but the page shows the same message either way, so check that you typed the address of your account. Asking many times in a row does not help: after a few requests for the same address within an hour, no more emails are sent for a while.",
    "If the link in the email says \"This link has expired or was already used\", press Request a new link and use the newest email. Each link works only once.",
    "Teachers whose application is still being reviewed see \"Your application is being reviewed\" instead of their dashboard. If you still cannot get in, write to us from Support in your dashboard, or email support@alimun.com, from the address of your account if you can.",
  ],
  related: ['sign-in-and-reset-password', 'change-name-email-or-time-zone'],
};
