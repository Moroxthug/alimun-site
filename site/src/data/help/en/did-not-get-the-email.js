// Sources checked (internal, never shown): signup.html (Check your email screen, b-resend with 60-second wait, use a different email), forgot-password.html, api/auth.js (reset email through Resend, 3 per address and 10 per connection an hour, always answers 200), js/translations.js (au_check_*, au_resend*, au_reset_sent*)
export default {
  slug: "did-not-get-the-email",
  lang: "en",
  kind: "problem",
  subject: "account",
  audience: "all",
  title: "I did not get the email",
  summary: "A guided check for a confirmation or password email that has not arrived: spam, the address, sending it again.",
  words: ["no email", "email not received", "confirmation email", "verification email", "reset email missing", "check spam", "resend email"],
  updated: "2026-11-12",
  body: [
    { p: "Emails from Alimun usually arrive within a minute or two. This check covers the email to confirm a new account and the email to choose a new password." }
  ],
  check: {
    start: "spam",
    steps: {
      spam: { ask: "Have you waited a few minutes and looked in your spam, junk and other inbox folders?", yes: "address", no: "fix-spam" },
      "fix-spam": { fix: "Look in spam or junk, and in tabs such as Promotions or Updates. Search your mailbox for Alimun. If you find it there, mark it as not spam so that later emails arrive normally.", next: "spam" },
      address: { ask: "Is the email address you typed exactly right?", yes: "confirmed", no: "fix-address" },
      "fix-address": { fix: "For a new account, press use a different email on the Check your email page and sign up again with the right address. For a new password, choose Forgot your password? again and type the address of your account carefully.", next: "spam" },
      confirmed: { auto: "email_confirmed", ask: "Have you already confirmed this account and signed in before?", yes: "reset", no: "resend" },
      resend: { fix: "On the Check your email page, press Send the email again. You can send it once a minute. Open the link on the device you want to use.", next: "arrived" },
      reset: { fix: "Then the email you are waiting for is the one to choose a new password. Request it again with Forgot your password? on the sign-in page. Only a few can be sent to one address in an hour, so wait a little between tries.", next: "arrived" },
      arrived: { ask: "Has the email arrived now?", yes: "done", no: "handover" },
      handover: { fix: "A person can check whether our emails reach your address. Tell us the address you used and which email you are waiting for.", handover: true },
      done: { solved: "Good. The link in it works once, so request a new one if it has expired." }
    }
  },
  related: ["cannot-sign-in", "sign-in-and-password", "notifications-and-emails"],
  missing: [
    "The sender address to add to contacts or a safe-senders list is not stated in the repo's help text; left out.",
    "Someone who has left the Check your email page has no way in the code to resend the confirmation email (signing up again says the email already has an account); the check sends them to a person."
  ]
};
