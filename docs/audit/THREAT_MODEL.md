# Threat model (Phase 2)

Written 14 Oct 2026. Scope: alimun.com (static pages + 12 Vercel functions), Supabase project `dgaiasmefcbrtzqwdyri`, Stripe (live), Daily.co, Resend, the AI provider.

## Assets

| Asset | Where it lives | Why it matters |
|---|---|---|
| Student PII (name, email, level, goals, progress, homework, grades, AI feedback) | `student_profiles`, `enrollments`, homework / exercise tables, storage | GDPR; minors may sign up |
| Teacher PII and terms (rate, payout data, application answers, CV links) | `teacher_profiles`, applications | confidentiality, payouts |
| Payment state and entitlements (tier, credits, Stripe customer/subscription IDs) | `student_profiles.stripe_*`, `tier`, credits, `webhook_logs` | revenue; a self-upgrade is theft |
| Class access (Daily rooms, meeting tokens, join window) | Daily, `sessions`, `api/join-session.js` | unpaid access, privacy of minors on video |
| AI budget | AI provider key, `ai_usage` | direct cost |
| Admin authority | `app_metadata.role = 'admin'`, `is_admin()`, `ADMIN_SECRET` | full control of all of the above |
| Server secrets | Vercel env: service role key, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `DAILY_API_KEY`, `RESEND_API_KEY`, AI keys, `CRON_SECRET`, `ADMIN_SECRET` | each one bypasses a boundary |
| Sender reputation of `alimun.com` | Resend | phishing in our name |

## Actors

| Actor | Holds | Trust |
|---|---|---|
| Anonymous visitor | publishable Supabase key (role `anon`) | none |
| Student | own JWT (`authenticated`, `app_metadata.role = student`) | own rows only |
| Teacher | own JWT (`role = teacher`) | own profile, own cohorts and their students' learning data |
| Admin | JWT with `role = admin` | everything; "view as" reuses the admin JWT |
| Stripe | webhook signature | events only, verified by signature |
| Database trigger (waitlist) | calls `app_settings.api_url` with `admin_secret` | as trusted as `ADMIN_SECRET` |
| Vercel cron | `Authorization: Bearer CRON_SECRET` | cron endpoints only |
| AI model | its output | untrusted text (can be steered by student input) |
| Email recipient | links in emails (approve/reject, offers) | the link is the credential |

## Trust boundaries

1. **Browser → Supabase REST/RPC/Storage.** Only RLS, column-guard triggers and EXECUTE grants protect data. Anything the dashboards do client-side can be replayed by the user with their own JWT and arbitrary values.
2. **Browser → `api/*`.** Each handler must verify the JWT with Supabase, read role from `app_metadata`, check ownership, and never trust ids, prices, amounts, currencies or URLs from the body.
3. **Handlers → service role.** Every handler bypasses RLS, so its own checks are the only barrier.
4. **Stripe → webhook.** Signature over the raw body; idempotent on event id.
5. **Database → `api_url`.** The trigger carries `admin_secret`; whoever can read `app_settings` or change `api_url` holds that secret or redirects it.
6. **Data → DOM.** Anything written by one user (names, bios, homework, notes, chat, file names, application answers) or by the AI and rendered for another user (teacher, classmates, admin) crosses a boundary and must be escaped.
7. **Email links → API.** Links that act without a session must be single-purpose, expiring and unguessable.

## Abuse cases and where they are checked

| # | Abuse case | Controls to verify | Reviewer |
|---|---|---|---|
| A1 | Student self-upgrades tier, adds credits or sets `stripe_*` | column guard trigger on `student_profiles`; no client write path; webhook is the only writer | SQL, STU |
| A2 | Join a class without paying / for a cohort not enrolled in | `api/enroll.js` entitlement check; `api/join-session.js` enrollment + window check; Daily rooms private + token | APIP |
| A3 | Change price, amount, currency, success URL at checkout | price allow-list server-side; redirect allow-list | APIP |
| A4 | Forge or replay a Stripe webhook | raw-body signature; `webhook_logs` idempotency | APIP |
| A5 | Scrape teachers / students | `teachers_public` columns only; no anon read of profiles; enumeration via signup/reset | SQL, AUTH |
| A6 | Spend the AI budget | auth on every action, per-user and global caps in `ai_usage`, input size limits | APIO |
| A7 | Stored XSS into another user's dashboard (especially admin) | `escapeHtml` on every `innerHTML` sink fed by data | STU, TEA, ADM |
| A8 | Become admin or teacher | signup role trigger ignores `user_metadata.role`; `is_admin()` reads `app_metadata`; teacher approval admin-only | SQL, AUTH, APIO |
| A9 | Teacher acts on other teachers' cohorts/students, edits own rate/status | RLS on cohorts/sessions/enrollments; guard trigger on `teacher_profiles` | SQL, TEA |
| A10 | Forge cron or waitlist calls | fail closed without `CRON_SECRET` / `ADMIN_SECRET`; constant-time compare | APIO |
| A11 | Use send-admin-email as an open relay / phishing from alimun.com; HTML injection into emails | admin-only, fixed recipients, escaped templates | APIO |
| A12 | Open redirect via `redirect` / `next` / `returnTo` / Stripe return URLs | same-origin path allow-list | AUTH, APIP |
| A13 | CSRF | API uses bearer JWT from `localStorage` (no cookies), so classic CSRF does not apply; check no handler accepts a GET with side effects or a cookie | APIP, APIO |
| A14 | Clickjacking | `X-Frame-Options: SAMEORIGIN` set globally; add `frame-ancestors` via CSP | APIO |
| A15 | Read another student's notes PDF / uploads | private buckets, path-scoped storage policies, signed URLs | SQL, APIO |
| A16 | Leak internals through errors | handlers return generic messages, log details server-side | all API |
| A17 | Leak secrets in client bundles or git history | only publishable keys in the browser; history scanned (clean, see `INVENTORY.md`) | WEB, all |
| A18 | Re-running an old SQL file undoes the lockdown | stale files marked or removed | SQL |

## Out of scope for this phase

Vendor platforms themselves (Supabase, Vercel, Stripe, Daily, Resend), DNS/email authentication (Phase 3, item 1), denial-of-service beyond application-level rate limits (Phase 2 step 6).
