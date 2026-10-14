# First-party code inventory (Phase 2)

Taken 14 Oct 2026 on branch `phase-2-audit-safeguards` (base `cf05ec5`). Vendored code is not listed: `js/webflow.js`, `fonts/`, `images/`, `videos/`, the Webflow CSS. Locale folders (`ar de es fr it ma pt zh`) are generated from the root HTML by `build.js` and are reviewed through their source; only the hand-made locale pages in `build.js`'s skip list are first-party in their own right.

Risk: **H** = handles auth, money, PII of other users, or runs with the service role; **M** = authenticated UI that reads or writes user data under RLS; **L** = public/static.

Reviewer area codes match the finding IDs in `FINDINGS.md`.

## Serverless functions (`api/`, 12 of 12 Hobby slots)

| File | Lines | Surface / callers | Privilege | Risk | Area |
|---|---:|---|---|---|---|
| `api/stripe.js` | 335 | `?action=config \| create-checkout \| retrieve-session \| billing-portal`; tiers page, signup, student dashboard | Stripe secret key, service role | H | APIP |
| `api/webhooks/stripe.js` | 568 | Stripe webhook (6 events) | Stripe webhook secret, service role | H | APIP |
| `api/enroll.js` | 316 | join / switch / claim / `leave`; student dashboard | service role | H | APIP |
| `api/join-session.js` | 219 | Daily room join + meeting token; both dashboards | Daily API key, service role | H | APIP |
| `api/create-cohort.js` | 266 | cohort + sessions creation; admin / teacher | service role | H | APIP |
| `api/ai.js` | 530 | `?action=grade \| generate-exercises \| usage` (+ rewrites `/api/grade`, `/api/generate-exercises`, `/api/ai-usage`) | AI provider key, service role | H | APIO |
| `api/admin/teacher.js` | 726 | `?action=approve \| reject \| notify \| set-status`; admin dashboard, emailed links | `ADMIN_SECRET`, Resend, service role | H | APIO |
| `api/send-admin-email.js` | 218 | generic admin email | Resend, service role | H | APIO |
| `api/generate-notes-pdf.js` | 344 | session notes PDF to storage | service role | H | APIO |
| `api/cron-create-rooms.js` | 156 | Vercel cron daily 00:00 | `CRON_SECRET`, Daily, service role | H | APIO |
| `api/waitlist/send-offer.js` | 199 | called by DB trigger via `app_settings.api_url` | `ADMIN_SECRET`, Resend, service role | H | APIO |
| `api/waitlist/cron-expire-offers.js` | 56 | Vercel cron daily 00:30 | `CRON_SECRET`, service role | H | APIO |
| `vercel.json` | 105 | routes, rewrites, security headers, denylist of repo files, crons | n/a | H | APIO |

## Authenticated pages (inline scripts, publishable key + user JWT)

| File | Lines | Surface | Risk | Area |
|---|---:|---|---|---|
| `student-dashboard.html` | 7008 | student home, classroom, homework, AI exercises, billing | M | STU |
| `teacher-dashboard.html` | 3700 | teacher cohorts, notes, grading, availability | M | TEA |
| `admin.html` | 2949 | admin overview, faculty approvals, students, AI spend | H (admin browser is the highest-value XSS target) | ADM |
| `js/view-as.js` | 140 | admin "view as" switcher on all three dashboards | M | ADM |

## Auth and conversion pages

| File | Lines | Surface | Risk | Area |
|---|---:|---|---|---|
| `signup.html` | 1205 | 3-step signup + placement, role choice | H | AUTH |
| `signin.html` | 348 | sign-in, role routing | H | AUTH |
| `forgot-password.html` / `reset-password.html` | 179 / 189 | password reset | H | AUTH |
| `signup-success.html` | 250 | post-signup / post-checkout | M | AUTH |
| `tiers.html` | 436 | pricing, checkout start | M | AUTH |
| `careers.html`, `careers-teachers-section.html` | 667 / 489 | teacher application | M | AUTH |
| `js/supabase/config.js` | 345 | Supabase client, role helpers | M | AUTH |
| `js/stripe/config.js` | 420 | client Stripe helpers | M | APIP |
| `js/currency.js` | 135 | currency detection / display | L | AUTH |

## Marketing, i18n, build

| File | Lines | Risk | Area |
|---|---:|---|---|
| `index.html`, `about-us.html`, `services.html`, `corporate.html`, `contact.html`, `cookies.html`, `gdpr.html`, `terms.html`, `404.html` | 52–943 | L | WEB |
| `js/i18n.js` | 684 | M (writes translated strings into the DOM on every page) | WEB |
| `js/translations.js` | 6402 | L | WEB |
| `js/cookies-banner.js` | 449 | L | WEB |
| `build.js`, `verify.js` | — | L (build-time only; denied by `vercel.json`) | WEB |
| `robots.txt`, `sitemap.xml` | — | L | WEB |

## Database (`supabase/`, never served: denied by `vercel.json`)

| File | Status | Risk | Area |
|---|---|---|---|
| `migrations/202610141800_phase1_db_lockdown.sql` | applied 14 Oct, current truth | H | SQL |
| `2026-10-14_admin_role_hardening.sql` | applied 14 Oct | H | SQL |
| `schema.sql`, `2026-09-security-hardening.sql`, `waitlist-fill-system.sql`, `add-*.sql`, `fix-*.sql`, `generate-sessions-function.sql`, `bulk-approve-teachers.sql`, `cleanup-test-data.sql` | historical; partially superseded | H if re-run | SQL |
| `seed.sql`, `seed-test-video-session.js`, `setup-stripe-prices.js`, `maintenance/` | operator scripts | M | SQL / APIP |
| `tests/rls.sql`, `tests/run-local.sh`, `tests/supabase_shim.sql`, `tests/live_inventory.sql` | tests | L | SQL |

## Repository history

Full history (57 commits, all branches) scanned with gitleaks 8.24.3 and a manual grep for `sk_live_`, `sk_test_`, `rk_`, `whsec_`, Resend `re_`, JWTs, `sb_secret_`, Google/Groq/Anthropic keys. Result: no secret keys. All 83 gitleaks hits are publishable keys allowed in the browser (`sb_publishable_…` ×64, Stripe `pk_test_…` ×18) and one placeholder JWT in `supabase/SETUP_GUIDE.md`.
