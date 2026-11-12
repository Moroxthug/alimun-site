// Sources checked (internal, never shown): signin.html (signInWithPassword, au_err_unconfirmed, au_err_rate, au_err_login, au_err_role, pending and suspended screens), signup.html (resend), forgot-password.html, reset-password.html, api/auth.js, js/translations.js (au_*)
export default {
  slug: "cannot-sign-in",
  lang: "en",
  kind: "problem",
  subject: "account",
  audience: "all",
  title: "I cannot sign in",
  summary: "A guided check for sign-in problems: an unconfirmed email, a wrong or forgotten password, too many attempts, or the browser.",
  words: ["cannot sign in", "can't log in", "login not working", "wrong password", "email not confirmed", "locked out", "sign in error"],
  updated: "2026-11-12",
  body: [
    { p: "Most sign-in problems come from an email address that is not confirmed yet or a password that does not match. This check goes through them one at a time." }
  ],
  check: {
    start: "confirmed",
    steps: {
      confirmed: { auto: "email_confirmed", ask: "Did you open the confirmation link we emailed when you created your account?", yes: "message", no: "fix-confirm" },
      "fix-confirm": { fix: "A new account needs its email address confirmed before you can sign in; until then the sign-in page says Please confirm your email first. Find the email from Alimun, check your spam or junk folder too, and open the link on the device you want to use. If you cannot find it, the check for missing emails can help.", next: "confirmed" },
      message: { ask: "Does the sign-in page say that the email or password is not right, or that there have been too many attempts?", yes: "fix-password", no: "browser" },
      "fix-password": { fix: "Check that the email address is the one you signed up with and that Caps Lock is off. If you are not sure of the password, choose Forgot your password? on the sign-in page and press Send the link to choose a new one. After several tries in a row, signing in pauses for a short time to protect your account, so wait a few minutes before you try again.", next: "message" },
      browser: { auto: "browser", ask: "Are you using a recent version of Chrome, Edge, Firefox or Safari, without blocking cookies for alimun.com?", yes: "role", no: "fix-browser" },
      "fix-browser": { fix: "Update your browser, or try another one. Allow cookies and site data for alimun.com, and turn off extensions that block scripts for this site, because the sign-in and its security check need them. A private window is a quick way to test this.", next: "browser" },
      role: { ask: "Does the page open but say this account cannot sign in here, or that your teacher application is still being reviewed or suspended?", yes: "handover", no: "works" },
      works: { ask: "Can you sign in now?", yes: "done", no: "handover" },
      handover: { fix: "This needs a person to look at your account. Tell us the email address you sign in with and what the page says.", handover: true },
      done: { solved: "Glad you are in. If it happens again, Forgot your password? is the quickest way back." }
    }
  },
  related: ["sign-in-and-password", "did-not-get-the-email"],
  missing: [
    "How long sign-in is paused after too many attempts is set in Supabase, not the repo, so no time is given.",
    "The email_confirmed check runs only for a signed-in person, which someone who cannot sign in is not; Part 2 may need a server check by email address for this problem."
  ]
};
