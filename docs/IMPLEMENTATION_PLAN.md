# Alimun — Implementation Plan (cloud sessions)

_Written 14 October 2026. Supersedes `docs/LAUNCH_PLAN.md` as the plan of record; that file stays as background (architecture ideas, matching engine design, curriculum spine)._

Every phase below is designed to be run in a **fresh Claude Code cloud session** (claude.ai/code) against the GitHub repo `Moroxthug/alimun-site`. Each phase has a goal, a scope list, acceptance checks, and a **kickoff prompt** to paste as the first message of the new session. Run phases in order unless marked parallel. Standing rules for every session live in `CLAUDE.md` at the repo root; cloud sessions read it automatically.

---

## 0. Where things stand (verified 14 Oct 2026)

**Live in production**
- Static site + 12 Vercel serverless functions in `api/` (exactly the Vercel Hobby cap; one more function breaks the deploy unless the plan is Pro or functions are merged).
- Stripe in live mode, 9 live prices with multi-currency (EUR/USD/CAD/AUD/MAD), webhook registered (6 events) but `webhook_logs` is empty: no real event has ever been processed.
- Admin: teacher approve/reject/suspend/reinstate with emails (`POST /api/admin/teacher?action=set-status`), bulk actions, pending badge; "view as" switcher on admin/teacher/student dashboards (`js/view-as.js`). Commit `ad23a75`.
- Database: `is_admin()` reads `app_metadata` only; trigger stops non-admins changing teacher status/rate/tier/rating; `bchysfpol@gmail.com` is the admin login. Applied 14 Oct via the SQL editor.

**Not done / broken (inputs to Phases 1–3)**
| # | Problem | Evidence |
|---|---|---|
| 1 | `supabase/2026-09-security-hardening.sql` was **never applied**. None of its objects exist: no `ai_usage`, no `decrement_enrollment`, no student/cohort guard triggers, no signup role-copy trigger on `auth.users`. The code deployed since September expects them. | read-only query 14 Oct |
| 2 | Students can `UPDATE` their own `enrollments` rows (incl. `status`) | `enrollments_update` policy |
| 3 | 9 SECURITY DEFINER functions executable by `anon` via `/rest/v1/rpc/*` (`increment_enrollment`, `generate_cohort_sessions`, `process_expired_offers`, `is_student_user`, …) | Supabase security advisor |
| 4 | `anon` and `authenticated` hold every table privilege incl. `TRUNCATE`; RLS is the only barrier | `information_schema.role_table_grants` |
| 5 | `teacher_profiles` readable by anyone for approved rows, all columns (`hourly_rate`, `user_id`) | `teacher_profiles_select` policy |
| 6 | 2 SECURITY DEFINER views, 11 functions with mutable `search_path`, leaked-password protection off | advisor |
| 7 | Seed/test data live and public: approved teachers Sofía Martínez, Lukas Bauer, noaiscj, Test Teacher; 4 cohorts, 11 sessions, 5 enrollments | DB |
| 8 | `app_settings.api_url = http://localhost:3000` (waitlist offer trigger calls it) | DB |
| 9 | Storage bucket `session-notes-pdfs` does not exist | DB |
| 10 | `/api/generate-notes-pdf` returns 500 `FUNCTION_INVOCATION_FAILED` in production | live probe 14 Oct |
| 11 | Resend: alimun.com has no DKIM/SPF records; transactional email will not deliver | DNS |
| 12 | Unknown in Vercel prod env: `CRON_SECRET`, `ADMIN_SECRET`, `RESEND_API_KEY`, AI key, `AI_DAILY_*`; dead `STRIPE_PRICE_ONEONONE_SESSION`, `_CERTIFICATE`, `*_AUD`, `*_MAD` | memory/env audit |
| 13 | Homepage claims "100 students have already joined" / "6 teachers"; real data is 18 student profiles, 1 real teacher applicant | `index.html` founding-cohort section vs DB |
| 14 | Webflow forms on the homepage and footer ("Reserve your spot", newsletter) post nowhere; the "Thank you! / Oops!" Webflow states are still in the markup | `index.html` |
| 15 | Locale pages: `<title>` and meta in English on most locales (`de`, `ma`, …); `ma` uses invalid `lang="ma"`; client-side geo redirect | `*/index.html`, `js/i18n.js` |
| 16 | No CI, no tests, no secret scanning, no dependency audit | repo |
| 17 | Teacher availability is timezone-naive | schema |
| 18 | "View as" uses the admin's own JWT: server endpoints that check the caller (join session, enroll) will act as admin or refuse | by design, documented |

---

## 1. How to run this plan in the cloud

1. **Environment.** In claude.ai/code create an environment for `Moroxthug/alimun-site` with these secrets (Settings → Environment variables), only the ones a phase needs:
   - `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` (Phases 1–3, for scripted checks; never commit),
   - `SUPABASE_ACCESS_TOKEN` (personal access token, only if the Supabase MCP or CLI is used from the cloud),
   - `STRIPE_SECRET_KEY` **test-mode key only** (`sk_test_…`) for Phase 3 test checkouts,
   - `AHREFS_API_KEY` if the Ahrefs MCP is not connected to the cloud session (Phases 6–10).
   Connectors (Supabase, Vercel, Ahrefs, GitHub) are attached per session in the claude.ai UI; check with the session at kickoff which are available.
2. **Branches.** `main` deploys to production on push. Every cloud session works on its own branch `phase-N-<slug>` and opens a PR. Merge to `main` only after the phase's acceptance checks pass. Never force-push `main`.
3. **Database changes.** Write every change as a new file `supabase/migrations/YYYYMMDDHHMM_<name>.sql` (idempotent, `create or replace`, `if exists`). Apply with the Supabase MCP `apply_migration` if the session has it; if it is blocked, the owner pastes the file into Supabase → SQL Editor. After applying, re-run the verify query that every migration file ends with.
4. **Generated files.** Root HTML pages are the source of truth. `npm run build` regenerates `ar de es fr it ma pt zh` copies from them; always run it and commit the result with the source change. Hand-maintained locale-only pages are listed in `build.js`'s skip list.
5. **Hand-off.** Each session ends by appending a dated entry to `docs/PROGRESS.md` (what shipped, commit, what is left, anything the owner must click) and updating the status column in §3 of this file.
6. **Owner actions** are marked **[OWNER]**. They are things only the account holder can do (DNS, billing, dashboard toggles, API keys, legal decisions).

---

## 2. Global rules (also in `CLAUDE.md`)

- **Design lock.** New designs may only reuse what the current homepage already has: Coolvetica Condensed (display) and Satoshi (body) from `fonts/`, ink `#080808`, lime `#ceff65`, white, bone `#eeeeec` / `#f0efe9`, the existing radius values (`3.125rem` hero/CTA, `3.5rem` player, pill buttons `5rem`), existing images in `images/`, existing logo files, existing copy. No new colours, fonts, illustrations, icons sets, stock photos, gradients or decorative elements unless the owner approves them.
- **Banned in UI copy and markup:** emojis; eyebrow/kicker labels above headings (small uppercase "OUR SERVICES"-style lines added to new sections); filler badges ("New", "AI-powered", "Trusted by"), invented statistics, testimonials, logos or counters; "✨ / 🚀"-style flourishes; lorem ipsum. Numbers on the site must come from the database or be removed.
- **Security:** never trust `user_metadata` for roles; every API route authenticates with the Supabase JWT and authorises from `app_metadata` or DB ownership; escape every interpolation into `innerHTML`; no secrets in client code; service-role key only in `api/`.
- **Every change** keeps `npm run build` passing, keeps the smoke test (§5) green, and does not add a 13th serverless function unless the owner has upgraded Vercel to Pro.

---

## 3. Phase overview

| Phase | Name | Depends on | Status |
|---|---|---|---|
| 1 | Production reconciliation & database lockdown | — | applied to production 14 Oct (105/105 RLS, advisor 0 errors); owner items open (`docs/phase-1-db-lockdown.md`) |
| 2 | Full code audit, threat model and automated safeguards | 1 | done (see `docs/PROGRESS.md`; CI checks, semgrep, unit + smoke tests) |
| 3 | Functional platform end-to-end | 1, 2 (can overlap with 2) | done except owner-blocked items, see "Phase 3 status" below |
| 4 | Design: Astro 1:1 rebuild of the public site (replaces the mockup approach, see `docs/REBUILD_PLAN.md`) | — (parallel with 1–3) | homepage approved and locked; Tiers in progress |
| 5 | Implement approved designs | 3, 4 + owner approval | not started |
| 6 | SEO foundations (all markets) | 3 | not started |
| 7 | SEO — Canada (EN + FR) | 6 | not started |
| 8 | SEO — United States | 6 | not started |
| 9 | SEO — Italy | 6 | not started |
| 10 | SEO — Germany | 6 | not started |
| 11 | SEO — Morocco | 6 | not started |
| 12 | Operate: monitoring, content cadence, iteration | 3 | ongoing |

Phases 4 and 1–3 can run in separate cloud sessions at the same time; they touch different files (mockups live in `mockups/`).

---

## Phase 1 — Production reconciliation & database lockdown

**Goal:** the live database matches what the code expects, nobody can read or write data they should not, and the platform holds no fake data.

**Scope**
1. Diff `supabase/2026-09-security-hardening.sql` against the live schema (it was never applied). Re-issue it as `supabase/migrations/…_reconcile_sep_hardening.sql`, reconciled with what was applied on 14 Oct (`is_admin()` already fixed; `guard_teacher_profile_admin_fields` trigger exists). Keep: `ai_usage` + `v_ai_spend_daily` (as `security_invoker`), `decrement_enrollment`, signup trigger copying role to `app_metadata` (student/teacher only, never admin), guard triggers on `student_profiles` (tier, stripe_*, enrolled_cohort_id) and `cohorts` (enrolled_count, teacher_id, max_students, tier), RLS recursion helpers.
2. `enrollments`: remove student `INSERT/UPDATE` policies; all enrollment writes go through `/api/enroll` with the service role. Confirm `api/enroll.js` covers join / switch / claim / leave before removing.
3. Revoke `EXECUTE` from `anon` (and from `authenticated` where only the server calls them) on: `increment_enrollment`, `decrement_enrollment`, `generate_cohort_sessions`, `process_expired_offers`, `sync_teacher_rating`. Keep RLS helpers (`is_admin`, `is_student_user`, `is_teacher_of_student`, `is_active_member_of_cohort`, `can_student_access_session_notes`) callable but make sure they leak nothing when called directly with arbitrary IDs (return false unless the caller is the subject or admin).
4. Grants: revoke `TRUNCATE, REFERENCES, TRIGGER` from `anon, authenticated` on all public tables; revoke `INSERT/UPDATE/DELETE` from `anon` everywhere.
5. Public teacher data: create view `public.teachers_public` (`security_invoker`, columns: id, full_name, languages, specialty, bio, rating, location) and point public pages at it; restrict `teacher_profiles` SELECT to admin, the teacher themself, and teachers of a student's own cohort.
6. Fix the 2 security-definer views (`v_active_enrollments`, `v_upcoming_sessions` → `security_invoker = on`) and set `search_path = ''` on the 11 flagged functions (qualify names).
7. Data: run `supabase/cleanup-test-data.sql` logic for the seed teachers (Sofía Martínez, Lukas Bauer, noaiscj, Test Teacher), their cohorts, sessions, enrollments, and the test video cohort from July. **[OWNER]** confirm before deletion; offer "suspend + close cohorts" as the reversible alternative.
8. `app_settings.api_url` → `https://alimun.com`; create Storage bucket `session-notes-pdfs` (private) with policies matching `api/generate-notes-pdf.js`.
9. **[OWNER]** Supabase → Auth → enable leaked-password protection; decide email confirmation on/off.
10. **[OWNER]** Vercel → Environment Variables (Production + Preview): set or confirm `CRON_SECRET`, `ADMIN_SECRET` (and the same value in `app_settings.admin_secret`), `RESEND_API_KEY`, `EMAIL_FROM_ADDRESS`, one AI key, `AI_DAILY_CALL_CAP`, `AI_DAILY_BUDGET_USD`; delete or replace the dead `STRIPE_PRICE_*` IDs. The session lists exactly which are missing by calling each endpoint's health path or reading Vercel env names (not values).

**Acceptance**
- Supabase security advisor: 0 errors; remaining warnings documented with a reason.
- RLS test script (`supabase/tests/rls.sql`, pgTAP or plain SQL with `set local role` + `request.jwt.claims`) proves: anon cannot write anything; a student cannot change tier/enrollment/cohort counts or read another student; a teacher cannot change status/rate or read students outside their cohorts; a forged `user_metadata.role = admin` gets no admin rows; admin reads everything.
- `select count(*)` of test teachers/cohorts = 0 (or all suspended/closed if the owner chose that).

**Kickoff prompt**
> Read CLAUDE.md and docs/IMPLEMENTATION_PLAN.md (Phase 1 and §0). Work on branch `phase-1-db-lockdown`. Start read-only: list live tables, policies, functions, grants, triggers, advisors for Supabase project `dgaiasmefcbrtzqwdyri`, and diff them against `supabase/2026-09-security-hardening.sql` and `supabase/2026-10-14_admin_role_hardening.sql`. Then write the reconciliation migration(s) and the RLS test script described in Phase 1, show me the plan of changes before applying anything to production, and list the [OWNER] steps I still need to do. Do not delete data without my explicit yes.

---

## Phase 2 — Full code audit, threat model and automated safeguards

**Goal:** every line of first-party code has been read for security issues and bugs, everything found is fixed, and automation stops regressions.

**Scope**
1. **Inventory** every first-party file: `api/**/*.js`, `js/*.js` (excluding vendored `webflow.js`), every root `*.html` with inline `<script>` (dashboards, auth pages, admin, marketing), `build.js`, `verify.js`, `vercel.json`, `supabase/*.sql`. Record in `docs/audit/INVENTORY.md` with owner surface and risk level.
2. **Threat model** (`docs/audit/THREAT_MODEL.md`): assets (student PII, payments, teacher payouts, class video access, AI budget, admin), actors (anon visitor, student, teacher, admin, Stripe/Daily/Resend webhooks, cron), trust boundaries, and abuse cases (self-upgrade tier, join class without paying, scrape teachers, spend AI budget, inject HTML into another user's dashboard, forge webhooks, open redirect, email spoofing, enumeration, CSRF on cookie-less JWT flows, clickjacking).
3. **Line-by-line review**, split across parallel sub-agents by area (API, student dashboard, teacher dashboard, admin, auth/signup/signin, marketing + i18n, SQL). Each finding: file:line, severity, exploit or failure scenario, fix. Tracked in `docs/audit/FINDINGS.md`. Classes to check explicitly:
   - authn/authz on every API action (JWT verified server-side, role from `app_metadata`, ownership checks), method checks, input validation (UUIDs, enums, lengths), error messages that leak internals;
   - XSS: every `innerHTML`, `insertAdjacentHTML`, template string into DOM, `href`/`src` from data (only https), `onclick` strings built from data;
   - secrets: grep history (`git log -p`) for keys; client bundles must only contain the publishable key;
   - Stripe: signature verification with raw body, idempotency via `webhook_logs`, price allow-list, redirect URL allow-list, amount/currency never from client;
   - Daily: room privacy, meeting tokens scoped to user + room + expiry, no room URLs to unpaid users;
   - AI: auth, per-user and global caps, prompt injection from user content into system prompt, output escaping;
   - crons: fail closed without `CRON_SECRET`; idempotent;
   - Supabase: no service role in browser; RLS assumptions written down for every client query in the dashboards;
   - broken stuff: dead buttons, Webflow forms posting nowhere, console errors, 404 assets, missing translation keys, timezone bugs, double-submit, loading/empty/error states.
4. **Fix everything** found, highest severity first, in small commits with tests where possible.
5. **Safeguards (automation)** — GitHub Actions on every PR and on `main`:
   - `gitleaks` secret scan (repo + history on first run);
   - `npm audit --omit=dev --audit-level=high` and Dependabot for `package.json`;
   - Semgrep (`p/javascript`, `p/xss`, `p/secrets`, custom rule: `innerHTML` with template literals must use `escapeHtml`);
   - `node --check` on every `api/**/*.js` and every inline script extracted from HTML (the extractor used on 14 Oct);
   - `npm run build` must succeed and produce no diff in committed locale files (`git diff --exit-code`);
   - Function count check: fail if `api/**/*.js` > 12 while on Hobby;
   - Playwright smoke: home, pricing, signup step 1, signin, each dashboard in `?preview=1` mode with zero console errors; link checker over the sitemap;
   - Post-deploy job: the §5 smoke test against production, alert on failure (GitHub issue or email).
   - Weekly scheduled job: Supabase advisors (security + performance) via the Management API → open an issue if new findings.
6. **Runtime protections:** rate limiting on auth-adjacent and AI endpoints (Upstash or a Postgres token bucket; no new function), Cloudflare Turnstile on public forms, security headers review (add a CSP in report-only first, then enforce), `X-Frame-Options` already set.

**Acceptance**
- `FINDINGS.md` has every finding closed or explicitly accepted by the owner with a reason.
- CI green on `main`; a deliberately bad PR (unescaped `innerHTML`, fake secret, 13th function) fails CI.
- Semgrep and gitleaks report 0 unresolved high findings.

**Kickoff prompt**
> Read CLAUDE.md and docs/IMPLEMENTATION_PLAN.md (Phase 2). Branch `phase-2-audit-safeguards`. Build the inventory and threat model first, then review every first-party file line by line using parallel sub-agents split by area as listed in Phase 2 step 3, writing findings to docs/audit/FINDINGS.md with file:line, severity and a concrete failure scenario. Verify each finding before fixing it. Then add the GitHub Actions safeguards in step 5. Show me the findings summary before the fix commits, and do not change production data.

---

## Phase 3 — Functional platform end-to-end

**Goal:** a real person can find Alimun, sign up, pay, be placed in a class, attend it on video, receive notes and homework, and be graded; teachers and admin can run it all without touching the database.

**Scope**
1. **Email:** **[OWNER]** add Resend's DKIM/SPF (and DMARC `p=none` to start) records for `alimun.com` at the DNS provider; session verifies with `dig` and a test send to the owner. Then confirm every transactional email: signup confirmation, teacher application to admin, approve/reject/suspend, welcome after payment, class reminders, notes published, payment failed, waitlist offer.
2. **Notes PDF 500:** read Vercel runtime logs for `/api/generate-notes-pdf`, fix (likely `@react-pdf/renderer` ESM/bundle size or missing bucket), add a test.
3. **Payments:** with the Stripe **test** key on a Preview deployment, run every product (each tier × currency, 1:1 credit, founding fee); confirm webhook rows in `webhook_logs`, entitlements in `student_profiles`, cancellation frees the seat, failed payment path. Then one real live purchase by the owner, refunded. **[OWNER]** Stripe Customer Portal configured.
4. **Enrollment and placement:** `/api/enroll` join/switch/claim/leave against real cohorts; waitlist offers end to end (the trigger now calls a real `api_url`); timezone-aware teacher availability (migration adding `timezone` to `teacher_availability` and conversion in cohort creation).
5. **Live class:** teacher starts, students join with Daily meeting tokens, attendance written server-side, join window −15/+90 min, recording off unless the owner enables it.
6. **AI:** key configured, caps enforced, `ai_usage` filling, admin AI-spend panel showing real numbers.
7. **Admin operations:** create cohort with sessions, move/remove student, cancel/reschedule session with emails, teacher approval (done), payouts list; "view as" limitations (§0 #18) either documented in the UI or handled by giving view-as read-only API behaviour.
8. **Honesty pass on public pages:** replace hardcoded counters ("100 students joined", "6 teachers") with live counts from a cached public endpoint or remove them; wire or remove the dead Webflow forms (reserve spot, newsletter) — real handler via an existing function (e.g. extend `api/send-admin-email.js` with an action) plus Turnstile.
9. **Cron jobs:** session lifecycle, room creation, waitlist expiry: authenticated, idempotent, scheduled in `vercel.json`, observed once in logs.

**Acceptance (owner can run it)**
- The §5 smoke test passes.
- Scripted E2E (Playwright, Preview deployment, Stripe test mode): new student → placement → pay → enrolled → sees next session → joins room (token issued) → admin publishes notes → student gets email with PDF link.
- One real teacher applies, is approved from the admin panel, receives the email, signs in, sees their cohort.

**Kickoff prompt**
> Read CLAUDE.md and docs/IMPLEMENTATION_PLAN.md (Phase 3 and §0). Branch `phase-3-functional`. Start by listing which of the Phase 3 items are blocked on [OWNER] steps and tell me exactly what to click. Then fix /api/generate-notes-pdf using Vercel runtime logs, and work through payments → enrollment → live class → emails → admin ops → honesty pass, verifying each on a Preview deployment with Stripe test mode before moving on.

### Phase 3 status (20 Oct 2026)

Done and live: notes PDF fix, cron jobs (observed in `cron_runs`), timezone-aware availability, enrollment/waitlist, live class tokens and attendance, admin operations (create class, move/add students, view-as with demo teacher/student), Stripe Customer Portal and 1:1 credit product, Intensive weekly 1:1 follow-ups, honesty pass (fake stats, teachers, testimonials, transcripts and dashboard numbers removed), dashboards translated (en/fr/de/es/ma), vocabulary review, weekly plan, exam prep (English, German), practice progress in the DB, translation files split per language.

Still open (owner-blocked or owner-deferred):
1. **Email (item 1):** Resend DNS records for alimun.com. Owner parked it.
2. **Payments (item 3):** owner chose no Stripe sandbox; one live purchase + refund still to do. The scripted E2E acceptance (Stripe test mode on a Preview) is therefore not run.
3. **AI (item 6):** `ai_usage` filling to be confirmed after the first real AI call.
4. **Acceptance:** one real teacher applies and is approved end to end; not yet observed.
5. **Supabase Auth:** leaked-password protection is off (Authentication → Policies).
6. Owner copy/decisions: teacher vetting copy (`[COPY NEEDED]`), Community "small group" vs 35 seats, Focused weekly feedback, homepage language list, About timeline, paid follow-up price for lower tiers, AI taste for free accounts, review of `js/exam-prep.js`.

---

## Phase 4 — Design

**Current approach (owner, 19–20 Oct 2026):** rebuild the public site in Astro with the same design, element by element, each element approved by the owner and then locked. Plan and rules: `docs/REBUILD_PLAN.md`. Branch `rebuild-astro`, folder `site/` (main merged in on 20 Oct). Preview: Vercel project `alimun-rebuild-preview` (https://alimun-rebuild-preview.vercel.app), deployed with the Vercel CLI from a copy of `site/dist` with `vercel.json` (cleanUrls, `X-Robots-Tag: noindex`); the session needs a Vercel token from the owner. No pull requests: work on `rebuild-astro`, nothing replaces the live site until a whole step is approved.

State on 20 Oct:
- Homepage: all 7 blocks approved and locked (`site/locked.json`).
- Tiers page: navigation + first section built (`site/src/blocks/tiers/`), waiting for the owner's OK; then the banner and footer, then the remaining pages (REBUILD_PLAN step 1).
- Homepage content mockups (how a class works, plans, factual FAQ) at `/mockup-home`, waiting for the owner's feedback.
- To ask the owner: the locked `src/blocks/head.html` (and the Tiers head) still load `js/translations.js`; main now loads `js/i18n/en.js` (+ the folder language). Swapping the tag changes no visible text but touches a locked block, so it needs the owner's OK.

The original mockup brief below is kept for reference.

## Phase 4 (original brief) — Design mockups (locked to the current homepage)

**Goal:** a set of static HTML mockups the owner can review, built only from elements that already exist on alimun.com.

**Locked inventory (extract first, into `mockups/LOCKED_ELEMENTS.md`):**
- Fonts: `fonts/coolvetica-condensed-rg.otf` (display, uppercase headings), `fonts/Satoshi-Variable.ttf` (body). JetBrains Mono only where it already appears (dashboards data).
- Colours: `#080808` ink, `#ceff65` lime, `#ffffff`, `#eeeeec`, `#f0efe9`, and the existing CSS variables in `css/youssefs-wondrous-site-e70724.webflow.css` (`--colors--*`). Nothing else.
- Shapes: hero video radius `3.125rem`, player `3.5rem`, bottom CTA `3.125rem`, pill buttons `5rem` radius.
- Assets: `images/alimun-logo.svg`, `images/alimun.svg`, the `alimun-square-*`, `alimun-image-*`, `alimun-location-*` photos, the hero video in `videos/`, OG image.
- Homepage section order and copy as it exists: hero ("Learn with confidence" video), "Let's learn together. For less." CTA, Services/tiers ("Your Path to Fluency: Choose Your Access", Community / Focused / Intensive / Private cards), founding cohort, FAQ, bottom CTA ("Ready to learn?"), footer with nav and newsletter.
- Navigation items: Tiers, Services, Corporate, About, Careers, Contact.

**Rules:** no emojis; no eyebrow labels (and remove the existing "OUR SERVICES"-style ones in the mockups rather than copying them); no invented sections, badges, testimonials, logos, stats or icons; no new colours or fonts; copy reused verbatim or marked `[COPY NEEDED]` for the owner; mobile and desktop for each screen.

**Deliverables** in `mockups/2026-10/` (one self-contained HTML per screen, sharing one CSS file built from the locked tokens):
1. Homepage (refined layout of the same sections).
2. Tiers / pricing page with the real Stripe prices per currency.
3. Course landing template (used for every SEO landing in Phases 7–11) — modelled on `it/corsi-*.html` content structure.
4. Signup / placement flow (3 steps).
5. Student dashboard home and classroom view.
6. Teacher dashboard home.
7. Admin overview and Faculty tab.
8. `mockups/2026-10/index.html` linking all of them with a one-line note per screen.

Publish the index as a private claude.ai Artifact for review if the session can; otherwise the owner opens it from the PR preview deployment.

**Acceptance:** the owner approves or comments per screen; a reviewer check (separate sub-agent with only `LOCKED_ELEMENTS.md` and the mockups) finds zero elements outside the locked inventory, zero emojis, zero eyebrow labels.

**Kickoff prompt (current)**
> Read CLAUDE.md, docs/IMPLEMENTATION_PLAN.md (Phase 4) and docs/REBUILD_PLAN.md. Work on branch `rebuild-astro` (folder `site/`), no pull requests. Show me the Tiers navigation and first section on the preview for approval, then continue element by element, locking each approved block in site/locked.json. Nothing invented: no new elements, eyebrow labels, emojis or stats; missing copy is [COPY NEEDED].

**Kickoff prompt (original, superseded)**
> Read CLAUDE.md and docs/IMPLEMENTATION_PLAN.md (Phase 4). Branch `phase-4-mockups`. First extract the locked element inventory from the live homepage (index.html, css/, fonts/, images/) into mockups/LOCKED_ELEMENTS.md and show it to me. Then build the mockups listed in Phase 4 using only those elements — no emojis, no eyebrow labels, no invented sections, stats or icons; where copy is missing write [COPY NEEDED]. Finish with an independent sub-agent check against the inventory and fix anything it flags.

---

## Phase 5 — Implement approved designs

**Goal:** ship the approved mockups to production without breaking SEO, i18n or the dashboards.

**Scope**
1. Decide the delivery stack with the owner: stay on the static site (fastest, keeps `build.js` i18n) or start the Next.js migration described in `LAUNCH_PLAN.md` §9. Default: **stay static for Phase 5**, extract shared CSS into `css/alimun.css` built from the locked tokens, remove Webflow runtime (`js/webflow.js`, jQuery, IX2 attributes, `opacity:0` animation stubs) page by page.
2. Implement page by page behind no flags (static), each PR: before/after screenshots desktop + mobile, Lighthouse mobile ≥ 90 performance and accessibility, same URLs, same `data-i18n` keys (add new keys to `js/translations.js` for every locale).
3. Dashboards: apply the approved dashboard mockups to the three dashboards incrementally (shared shell first), keeping all element IDs the scripts use.
4. Media: hero video ≤ 1.5 MB or poster-only on mobile; AVIF/WebP with explicit sizes.

**Acceptance:** each page matches its approved mockup; no console errors; Lighthouse targets met; GSC shows no coverage drop two weeks after release.

**Kickoff prompt**
> Read CLAUDE.md and docs/IMPLEMENTATION_PLAN.md (Phase 5) and the approved mockups in mockups/2026-10/. Branch `phase-5-design`. Propose the page order and the shared CSS plan, then implement one page per PR with desktop and mobile screenshots and Lighthouse scores, keeping URLs, element IDs and i18n keys intact.

---

## Phase 6 — SEO foundations (all markets)

**Goal:** the technical base every market depends on.

**Scope**
1. **Locales and hreflang.** Current folders: root `en`, `ar de es fr it ma pt zh`. Fix `ma` (invalid `lang="ma"`): decide with the owner between `fr-MA` and `ar-MA` content for `/ma/` and set `lang` and hreflang accordingly. Add regional variants only where content differs (Phase 7: `en-CA`, `fr-CA`; Phase 8: `en-US` may stay as `en`). Generate hreflang + canonical per page in `build.js` instead of hand-editing.
2. **Per-locale metadata:** translated `<title>`, meta description, OG/Twitter tags for every locale page (today most locales carry English titles). Add the strings to `js/translations.js` and have `build.js` write them.
3. **Remove the client-side geo redirect** in `js/i18n.js` (bad for crawlers); replace with a dismissible language suggestion banner.
4. **Sitemaps:** split into `sitemap-index.xml` + one sitemap per locale with `xhtml:link` alternates and real `lastmod`; exclude app pages (already disallowed in robots).
5. **Structured data:** `Organization`, `WebSite`, `Course` + `CourseInstance` (online, real price and currency from Stripe, real schedule), `FAQPage` only where the FAQ is visible on the page, `BreadcrumbList`. No fake `AggregateRating`.
6. **Performance:** Core Web Vitals green on mobile for home and landing template (overlaps Phase 5 media work).
7. **Measurement:** Google Search Console properties (domain property) and Bing Webmaster Tools; submit sitemaps; Ahrefs project with rank tracking per market. **[OWNER]** verify DNS TXT for GSC domain property if not already.
8. **Landing template:** one reusable template (from Phase 4 mockup 3) driven by a data file per landing (`content/landings/<market>/<slug>.json`: title, h1, intro, sections, FAQs, price block, internal links) rendered by `build.js`, so Phases 7–11 add content files, not hand-built pages.

**Acceptance:** zero hreflang errors in Ahrefs Site Audit; every indexable page has a unique translated title and description; sitemap validates; GSC coverage shows all landing pages "Indexed" within 3 weeks.

**Kickoff prompt**
> Read CLAUDE.md and docs/IMPLEMENTATION_PLAN.md (Phase 6). Branch `phase-6-seo-foundations`. Audit the current hreflang, canonicals, titles, sitemap, robots, structured data and i18n redirect behaviour across all locale folders, then implement the Phase 6 scope, making build.js generate metadata and hreflang. Use the Ahrefs site audit and GSC data if connected. Ask me to decide the /ma/ language before changing it.

---

## Phases 7–11 — Market SEO

Shared method for every market:
1. **Keyword research** (Ahrefs Keywords Explorer, country = market): seed terms per course language × intent (`learn <lang> online`, `<lang> classes online`, `<lang> course for <goal>`, exam prep, relocation), filter by volume ≥ 50, KD, and **only intents Alimun actually serves** (live small-group online classes; tracks relocation / professional / academic / pleasure / foundations; tiers community / focused / intensive / private). Output `docs/seo/<market>/keywords.csv` and a cluster map.
2. **Competitor gap** (Ahrefs organic competitors + content gap) for 5 competitors per market.
3. **Page plan:** one landing per (course language × market locale) plus goal-specific pages where volume justifies them; every page in `content/landings/<market>/`. Prices shown in local currency from Stripe (`CAD`, `USD`, `EUR`, `MAD` already configured).
4. **Content rules:** written for that market (spelling, currency, local institutions only when factual), no invented claims, no fake reviews, every claim traceable to the product; FAQ answers true today.
5. **Internal links:** home → market hub → landings; landings cross-link by language; footer links per locale. (The September zero-traffic diagnosis showed orphaned landings never get indexed.)
6. **Off-page (owner-led):** directory listings and partnerships listed per market with contact targets; no paid link schemes.
7. **Tracking:** Ahrefs rank tracker keywords per market; GSC performance filtered by country; monthly report in `docs/seo/<market>/report-YYYY-MM.md`.

**Acceptance per market:** pages live and indexed; rank tracking set up; first monthly report written; 0 technical errors for that market in Ahrefs Site Audit.

### Phase 7 — Canada (first)
- Locales: `en-CA` (English site with Canadian spelling and CAD prices) and `fr-CA` (Québec French; reuse `/fr/` content where valid, adapt vocabulary and prices). Decide URL scheme with the owner: `/ca/` and `/ca-fr/` subfolders (recommended, clean hreflang) vs query/region switch.
- Research focus: French for English-speaking Canadians and newcomers (federal bilingualism, Québec), English for French speakers and newcomers, Spanish as the leading leisure language. Relocation track maps to newcomers. Exam-prep pages (e.g. TEF Canada / TCF Canada for French, CELPIP / IELTS General for English) **only if** the owner confirms Alimun teaches to those exams; otherwise exclude those keywords.
- Kickoff prompt:
> Read CLAUDE.md and docs/IMPLEMENTATION_PLAN.md (Phase 6 must be done; then Phase 7). Branch `phase-7-seo-canada`. Run keyword research with Ahrefs for Canada (EN and FR) following the shared method, propose the URL scheme and page list with volumes, and wait for my approval before writing pages. Ask me which exams, if any, Alimun prepares for.

### Phase 8 — United States
- Locale: `en` (root) with USD prices; consider `es-US` only if research shows meaningful volume for English classes searched in Spanish.
- Research focus: Spanish online classes (largest US demand), French/Italian/German for travel and heritage, English for Spanish speakers.
- Kickoff prompt:
> Read CLAUDE.md and docs/IMPLEMENTATION_PLAN.md (Phases 6–8). Branch `phase-8-seo-usa`. Run US keyword research with Ahrefs following the shared method, propose the page list with volumes, wait for approval, then build the landings from the template.

### Phase 9 — Italy
- Locale: `it`. Existing assets: `it/corsi-inglese-online.html`, `corsi-spagnolo-online.html`, `corsi-francese-online.html`, `corsi-tedesco-online.html`, `corsi-portoghese-online.html`, `it/services.html` SEO cross-links (in the build skip list). Migrate them to the landing template without losing their content or URLs; fill gaps (e.g. business English, certifications only if taught), EUR prices.
- Kickoff prompt:
> Read CLAUDE.md and docs/IMPLEMENTATION_PLAN.md (Phases 6 and 9). Branch `phase-9-seo-italy`. Pull GSC and Ahrefs data for the existing it/corsi-* pages first, report their current positions, then follow the shared method; keep existing URLs and content.

### Phase 10 — Germany
- Locale: `de` (today: English titles, ~185 translation keys falling back to English). Complete the German translation first (human-quality review), then landings: Englischkurs online, Spanischkurs online, Italienischkurs online, Französischkurs online; EUR prices; Impressum and Datenschutz requirements checked with the owner (legal, not invented).
- Kickoff prompt:
> Read CLAUDE.md and docs/IMPLEMENTATION_PLAN.md (Phases 6 and 10). Branch `phase-10-seo-germany`. Finish the German translations in js/translations.js and per-page metadata first, list the German legal pages that need the owner's input, then follow the shared method.

### Phase 11 — Morocco
- Locale: `/ma/` fixed in Phase 6 (`fr-MA` and/or `ar-MA`), MAD prices. Research focus: English and German for study and work abroad, French and Spanish; Darija UI only if the owner wants it.
- Kickoff prompt:
> Read CLAUDE.md and docs/IMPLEMENTATION_PLAN.md (Phases 6 and 11). Branch `phase-11-seo-morocco`. Run Ahrefs research for Morocco in French and Arabic following the shared method, confirm with me which language /ma/ serves and which exams if any, then build the landings with MAD prices.

---

## Phase 12 — Operate

- Weekly: CI green, advisors clean, Stripe webhook deliveries 200, error rate (Vercel logs / Sentry if added), AI spend vs budget.
- Monthly: SEO report per market, content refresh of the top 10 landing pages, Lighthouse re-run, dependency updates.
- Quarterly: re-run the Phase 2 audit on files changed since the last audit (`git diff --stat <last-audit-commit>`).

---

## 5. Production smoke test (run after every deploy)

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://alimun.com/                         # 200
curl -s -o /dev/null -w "%{http_code}\n" https://alimun.com/supabase/schema.sql      # 404
curl -s -o /dev/null -w "%{http_code}\n" https://alimun.com/docs/IMPLEMENTATION_PLAN.md  # 404
curl -s -o /dev/null -w "%{http_code}\n" https://alimun.com/api/cron-create-rooms    # 401
curl -s -o /dev/null -w "%{http_code}\n" -X POST https://alimun.com/api/admin/teacher?action=set-status  # 401
curl -s -o /dev/null -w "%{http_code}\n" -X POST https://alimun.com/api/ai?action=grade -H 'content-type: application/json' -d '{}'  # 401
curl -s https://alimun.com/api/stripe?action=config | head -c 200                      # pk_live_… and price ids
curl -sI https://alimun.com/ | grep -i strict-transport-security                       # present
```

## 6. Decisions the owner still owes

1. Vercel plan: stay Hobby (12-function cap, keep merging endpoints) or Pro ($20/month).
2. Delete or suspend the seed teachers and their cohorts.
3. `/ma/` language: French, Arabic, or both.
4. Canada URL scheme: `/ca/` + `/ca-fr/` (recommended) or other.
5. Which exams (if any) Alimun prepares students for — gates exam-prep SEO pages in every market.
6. Founding-cohort offer: keep (with real counters) or remove.
7. Recording classes: yes/no (affects Daily plan and privacy text).
8. Email confirmation on signup: on/off.
