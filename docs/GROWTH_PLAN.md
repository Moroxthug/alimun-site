# Growth plan: captcha, country, consent, activity, notifications and campaigns

Owner, 6 Nov 2026: "we need to ask the users country on onboarding, we need to put captcha, we need to know exactly what
each user does with his account, and we need to start pushing users with promo material, marketing emails and
communications through notifications." Decisions the same day: this order; one consent tick box for news and offers;
no marketing at all to anyone under 16. Each step is shown to the owner before the next starts.

## Step 1. Captcha (Cloudflare Turnstile) (live 7 Nov 2026: site, Vercel and Supabase)

- Browser: `js/captcha.js` (`window.AlimunCaptcha.token()`), loaded by `js/nav-account.js` on every page with the
  header and directly by sign-in, sign-up and forgot-password. It adds an `X-Captcha-Token` header to same-origin POSTs
  to `/api/send-admin-email?action=contact|subscribe` and `/api/auth?action=reset`, so the forms (some in locked
  blocks) are unchanged. Supabase Auth calls pass `captchaToken`: sign in, sign up, resend sign-up email, reset request.
  Cloudflare's script loads only when a protected form is sent; the widget is invisible unless Cloudflare is unsure.
- Server: `api/_lib/captcha.js` `verify(req)` in contact, subscribe and the reset endpoint.
- Dormant until the keys exist: `SITE_KEY` empty in `js/captcha.js` and no `TURNSTILE_SECRET_KEY` in Vercel.
- To switch on, in this order: (1) site key into `SITE_KEY` and deploy; (2) `TURNSTILE_SECRET_KEY` in Vercel production
  and redeploy; (3) Supabase → Authentication → Attack Protection → captcha on, provider Turnstile, same secret.
  Supabase last, because once it is on every sign-in and sign-up without a token fails.
- Tested with Cloudflare's test keys: tokens reach the protected endpoints and no others; the server accepts a valid
  token and refuses a missing or failed one.

## Step 2. Country and consent at onboarding (built 7 Nov 2026, see PROGRESS)

- As built: the country menu and both tick boxes sit on the sign-up account forms (learners and teachers), not in the welcome steps, so everyone is asked at the same moment.

- Country: a picker in the welcome steps (`welcome.html`), pre-selected from the browser time zone, stored as an
  ISO 3166 code on `student_profiles.country` and `teacher_profiles.country` (and `email_signups.country` when known).
  Teachers pick it in the application form. Existing users are asked once, in the dashboard.
- Consent: one unticked box at sign-up, "Send me news and offers from Alimun" (translated), stored with time, wording
  version and source in a `marketing_consents` table (history kept, latest row wins), plus a switch in Settings.
  Birth year or an "I am 16 or older" check is needed to apply the under-16 rule: the box is hidden and marketing is
  never sent below 16 (decision: no marketing under 16; the tutor plan already requires parental authorisation).
- Every marketing email carries a one-click unsubscribe link (`List-Unsubscribe` header and a footer link) that works
  without signing in, signed with a server secret.

## Step 3. Activity (built 7 Nov 2026, see PROGRESS)

- `activity_events` table: user id, event name, a small JSON detail, page, time; written by the dashboards (signed
  in, opened a lesson, finished an exercise, used the tutor, opened homework) and by the server (joined a class, paid,
  cancelled, payment failed). Row rules: users insert their own events and cannot read others; admins read all.
- Admin: a timeline on each student's and teacher's file; an overview of active in the last 7 and 30 days, people
  slipping away (no activity for 14 days), and where sign-up stops (level test done, no account; account, no class).
- Product activity is used to run and improve the service. Using it for marketing or tracking the public site needs
  consent: the cookie banner's analytics and marketing switches decide that. The Privacy page is updated to say so.
- Retention: events older than 24 months are deleted by the daily cron.

## Step 4. Notifications and campaigns (4a bell, 4b campaigns and 4c reminders built 7 Nov 2026)

- In-app: a `notifications` table and a bell in the student and teacher dashboards; service messages (class moved,
  homework graded, place open) for everyone, offers only for people with consent.
- Campaigns from the admin panel: audience by language, level, country, plan, last activity and consent; message in
  the email design (`api/_lib/email.js`), optionally also in-app; test send to the owner first; sending in batches with
  Resend; opens and clicks counted per campaign. Marketing sends skip anyone without consent or under 16.
- Automatic nudges (each one approved by the owner before it runs): no practice for 7 days, free plan ending, level
  test done but no plan, a class place opened.
- Sending identity: marketing from a separate address (e.g. `news@alimun.com`) so service emails keep their reputation.

## Campaigns on request (built 7 Nov 2026)

Owner, 7 Nov 2026: "i want to tell you or something else send campaign about half price for example, and you send it among existing users and newsletter subs". Chosen: test first, the owner says go; newsletter sign-ups from the footer form are included from now on.

How it runs. The owner tells a Claude session what the campaign is about (offer, dates, link). Claude writes the email in English and in each dashboard language that has people in the audience (`/api/campaigns?action=audience` with `include_newsletter: true` returns `by_language`), then calls `?action=test` with `{ messages: { en, fr, ... } }`: every version goes to the admin accounts only, subject "[Test FR] ...". Nothing goes to customers until the owner replies "go". Claude then calls `?action=send` with the same messages, `channels: ['email', 'inapp']`, `include_newsletter: true` and `confirm` set to the count from the audience call. Prices and dates come from the owner, never invented.

Access. The calls carry the owner's campaign key: Vercel env `CAMPAIGN_AGENT_KEY` (at least 32 characters), given to the session through the secure credential form for alimun.com, never in chat or code. The key can read the audience count, send tests to admins and send at most 3 campaigns a day; it cannot do anything else. Campaigns sent with it are saved with `sent_via = 'agent'` and show in Admin, Campaigns. Removing the variable in Vercel switches it off.

Who receives it. Account holders whose latest news-and-offers choice is yes (16+ only, as before), and footer sign-ups with `email_signups.offers_consent` who have not unsubscribed and have no account (the account's own choice counts). The footer form says from 7 Nov 2026 that it brings news and offers, that you must be 16 or older and that every email can be unsubscribed; only sign-ups after that change have `offers_consent`, so the 6 earlier sign-ups get no campaigns. Each person gets the version in their dashboard language (sign-ups: the language of the page they signed up on; ma falls back to fr), else English. Newsletter emails carry their own signed unsubscribe link (`/api/auth?action=unsubscribe&n=`). Filters on role, level, country, plan or activity leave sign-ups out, since they have none of these.

## Open for the owner

- Turnstile keys (step 1).
- The consent wording and the age question (step 2).
- The first campaign and the first nudge (step 4).
