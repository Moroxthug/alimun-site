# Privacy page: draft changes (7 Nov 2026), approved and published

Approved by the owner on 7 Nov 2026 and published in `site/src/blocks/legal/gdpr.html` and its seven translations (the live page is the locked Astro block, not the root `gdpr.html`). The live page already had the card-number, AI-training and sub-processor points right; the additions were fitted into its sections 2, 3, 5, 7, 10 and 12. The notes below are kept as the record of the draft.

Was not live when written. `gdpr.html` changes only after the owner approves this wording; then it is translated into the eight
other languages (the legal pages are owner-flagged "legal translations later").

Why: growth steps 1–3 (docs/GROWTH_PLAN.md) added Cloudflare Turnstile, the country question, the news-and-offers
consent with the 16+ check, and the activity record. The page must say so. Everything below is true of the code
as of today; numbers (24 months) match what the system does.

---

## 1. Personal Data We Collect: add

- **Country and age check:** the country you live in, which you choose when you sign up and can change in Settings,
  and whether you confirmed that you are 16 or older.
- **Your news-and-offers choice:** whether you asked to receive news and offers from Alimun, with the date of each
  change and where you made it (sign-up, Settings or the link in an email).
- **What you do in your dashboard:** when you open your dashboard and which sections you open, together with what
  you do there (exercises and their results, practice, flashcards, sessions with the tutor, homework, live classes
  you join, messages you send, and payment events such as subscribing or a failed payment). We record that you
  sent a message, not its text, for this purpose.
- **Security check:** when you send a form, sign up or sign in, Cloudflare Turnstile checks that the request comes
  from a person. Cloudflare receives technical information about your browser and your IP address for this check.

## 2. Lawful Basis for Processing: replace the "Consent" and "Legitimate Interests" items

- **Consent:** we send news and offers only to people who are 16 or older and ask for them, by ticking "Send me news
  and offers from Alimun" when they sign up or in Settings. You can withdraw your consent at any time in Settings or
  with the link at the bottom of every one of these emails; it takes effect straight away. Optional analytics and
  marketing cookies also need your consent (see the Cookie Policy). We keep a record of each choice to show when you
  gave or withdrew consent.
- **Legitimate interests:** to run and improve Alimun, for example to see which parts of the dashboard are used, to
  help you when you contact us, to notice when a learner has stopped practising, and to protect the service from
  abuse and fraud (including the Cloudflare security check). We do not use what you do in your dashboard for news
  and offers unless you have asked to receive them.

## 3. How We Use Your Information: add

- Showing prices and offers that apply in your country.
- Sending news and offers, only if you are 16 or older and asked for them.
- Understanding how Alimun is used, so we can improve courses and the dashboard and help learners who have stopped.

## 4. Data Retention: add

- The record of when you open your dashboard and which sections you open, and payment events, is deleted
  automatically after 24 months.
- Your news-and-offers choices are kept while your account exists, as proof of consent, and deleted with it.

## 5. Your GDPR Rights: add after "Right to Object"

- You can object to news and offers at any time, without giving a reason, with the link in any of these emails or in
  Settings.

## 6. Third-Party Services: add

- **Cloudflare (Turnstile):** for checking that forms, sign-ups and sign-ins come from people, not automated
  programs.

## Last Updated

Change "June 24, 2026" to the date the page is published.

---

## Existing lines that look inaccurate (not changed; for the owner to decide)

- Section 1 says Alimun collects "Credit card numbers". Card numbers go to Stripe and are never seen or stored by
  Alimun; suggest "Payment details are entered on Stripe's pages; Alimun receives the subscription status and
  transaction history, never your card number."
- Section 2 says data is used to "train our AI essay-feedback models". As far as the code shows, Alimun does not
  train models; it sends answers to an AI provider to get feedback. If that is right, the line should go.
- Section 6 does not list Vercel (hosting the site and its server functions), the AI providers used for feedback
  and the tutor, or Google (voices for the course audio and the tutor). The owner knows which providers and
  contracts apply; `[COPY NEEDED]` for their names and roles.
- Section 1 names an internal database table (`teacher_profiles`); suggest removing it.
