// Sources checked (internal, never shown): signup.html (a-adult / ta-adult only gate the news box; no date of birth), js/app/prefs.js, js/app/data.js (saveConsent), Terms §1, Privacy §2, §3, §4, §9
export default {
  slug: "age-requirement",
  lang: "en",
  kind: "answer",
  subject: "account",
  audience: "all",
  title: "How old do I need to be to use Alimun?",
  summary: "You need to be 18 (or the age of majority where you live) to create an account and pay; learners aged 13 to 17 need a parent's consent; the I am 16 or older box only decides whether you can receive news and offers.",
  words: ["age", "how old", "minimum age", "under 18", "teenager", "child", "parent consent", "16 or older"],
  updated: "2026-11-12",
  body: [
    { p: "To create an account and pay, you need to be at least 18 years old, or the age of majority where you live. Learners aged 13 to 17 may use Alimun only with the consent and supervision of a parent or legal guardian, who accepts the Terms for them. Where local law sets a higher age for consenting to the use of personal data, for example 16 in some EU countries or 14 in Italy, that age applies. Alimun is not for children under 13." },
    { p: "The box **I am 16 or older** on the sign-up form and in Settings is about news and offers: we send them only to people who tick it and ask for them. Leaving it unticked does not stop you from creating an account." },
    { p: "Learners under 16 may use the practice tutor only with a parent's authorisation. If you believe a child has given us personal information without that consent, write to **privacy@alimun.com** and we will delete it." }
  ],
  related: ["your-data-and-privacy", "notifications-and-emails"],
  missing: [
    "Nothing in the sign-up checks age (no date of birth; the 16+ box only enables news and offers), so the 18+ and parental-consent rules in the Terms rely on people reading them. Owner may want a check.",
    "The Terms (18+ to create an account) and the Privacy Policy (under 18 with a parent's consent) say slightly different things; the answer follows the Terms."
  ]
};
