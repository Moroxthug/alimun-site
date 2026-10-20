# Progress log

Append one entry per session: date, phase, branch/commit, what shipped, what is left, owner actions.

## 2026-10-14 — pre-plan (local session)
- Shipped `ad23a75` to `main`: admin teacher approve/reject/suspend/reinstate with emails and bulk actions; "view as" switcher (`js/view-as.js`) on admin, teacher and student dashboards; fixed admin reject (`rejected` violated the status check) and tier select (invalid values).
- Database (applied in SQL editor): `is_admin()` reads `app_metadata` only; trigger `trg_guard_teacher_profile_admin_fields`; `bchysfpol@gmail.com` promoted to admin. File: `supabase/2026-10-14_admin_role_hardening.sql`.
- Found: `supabase/2026-09-security-hardening.sql` was never applied (see plan §0). Wrote `docs/IMPLEMENTATION_PLAN.md` and `CLAUDE.md`.
- Next: Phase 1 (database lockdown) and Phase 4 (mockups) in parallel cloud sessions.

## 2026-10-14 — Phase 1 (cloud session)
- Branch `ccr-1ad0304f-to81sw` (the session's assigned branch, used instead of `phase-1-db-lockdown`). No Supabase access in this session, so the live DB was not queried; nothing applied to production.
- Shipped in the branch: `supabase/migrations/202610141800_phase1_db_lockdown.sql` (re-issues the Sept hardening, reconciled with 14 Oct; full policy rewrite on 19 tables, column guards, signup role trigger, `teachers_public` + `teacher_public()` embed, `cohort_classmates()`, EXECUTE/grant lockdown, search_path, security_invoker views, `ai_usage`, private `session-notes-pdfs` bucket + storage policies, `api_url`).
- Tests: `supabase/tests/rls.sql` (105 checks; 51 fail on the pre-Phase-1 schema, 0 after), `run-local.sh` + shim for local Postgres, `live_inventory.sql` (read-only). Migration re-runs cleanly.
- Client: student dashboard reads teachers via `teacher_public` and classmates via `cohort_classmates`; teacher dashboard feedback embed likewise. `npm run build` regenerated the locale copies.
- Left / owner: apply in the order in `docs/phase-1-db-lockdown.md` (migration BEFORE merging), choose A/B for test data, leaked-password protection, `admin_secret`, Vercel env audit. Phase 2 notes are at the end of that doc.
- Applied to production the same day (owner ran the migration in the SQL editor after the MCP confirmations kept timing out). Verified on production: `rls.sql` 105/105 pass (run as one rolled-back statement, no test rows left); security advisor 0 errors (remaining warnings: RLS helpers executable by `authenticated` by design, `public_teacher_rows` public by design, leaked-password protection off); anon REST probe: `teachers_public` readable, `teacher_profiles` / `student_profiles` / `increment_enrollment` denied. Every account now has `app_metadata.role`.
- From the live inventory: `teacher_profiles.badges` added to `teachers_public`; the legacy public bucket `session-notes` (empty, unused, writable by any signed-in user) is now private and admin-only.
- Still open [OWNER]: test data A/B (seed teachers are still approved and public); `app_settings.admin_secret` still holds the old placeholder and must match Vercel `ADMIN_SECRET`; leaked-password protection; Vercel env audit; second admin account `admin@alimun.com` (created June, never signed in): keep or remove.
- Follow-up (same day, by Claude at the owner's request):
  - Seed data, option A (reversible): the teachers Sofía Martínez, Lukas Bauer, noaiscj and Test Teacher are suspended, their 4 classes closed and 5 upcoming sessions cancelled. Nothing was deleted. Their enrolled students were all seed accounts (`@example.com`, `test-student@alimun.com`). Real applicant Passant Aal (pending) untouched.
  - `admin@alimun.com` (created June, never signed in) demoted to student. Undo: `update auth.users set raw_app_meta_data = raw_app_meta_data || '{"role":"admin"}' where email = 'admin@alimun.com';`
  - `app_settings.admin_secret` replaced with a random 64-character value generated inside the DB (never displayed). Live probe showed Vercel `ADMIN_SECRET` did not match the old placeholder, so waitlist offer emails were being rejected. [OWNER] copy it into Vercel (see `docs/phase-1-db-lockdown.md`).
  - Leaked-password protection is a Supabase Pro feature; the org is on Free. Accepted as a known advisor warning.
  - Live probes: cron endpoints, `/api/ai`, `/api/waitlist/send-offer` refuse unauthenticated calls; Stripe config is set.

## 2026-10-14 — Phase 2 (cloud session)
- Branch `phase-2-audit-safeguards`. Docs: `docs/audit/INVENTORY.md`, `THREAT_MODEL.md`, `FINDINGS.md` (123 unique findings: 1 Critical, 8 High, 33 Medium, 70 Low, 11 Info), `raw/` (per-area write-ups), `fixes/` (per-fixer logs), `production-changes.md`.
- Fixed: 96 (all Critical and High), Partial 8, Deferred 17, Not an issue 2. Highlights: stored XSS from teacher/student data into the admin's browser through view-as (TEA-01, now also read-only view-as), XSS across both dashboards, Stripe double subscription on plan change, entitlements on unpaid checkouts, webhook raw body, enroll race, AI caps and paid check, single-use emailed approve/reject links, escaped emails, notes PDF font (the 500), language redirect keeping query strings, vvkey.io script removed, supabase-js pinned with SRI, `.vercelignore` no longer drops `js/supabase/config.js`.
- DB: `supabase/migrations/202610142200_phase2_audit_fixes.sql`, applied to production on 14 Oct at the owner's request (in sections; verify all pass). Local run: both migrations twice, `rls.sql` 162/162. Stale SQL moved to `supabase/archive/` (do not run).
- Production change (owner chose option A): seed students `aisha@`, `marco@`, `omar@`, `yuki@example.com` and `test-student@alimun.com` banned, sessions revoked, fake subscriptions cleared, enrollments cancelled. Undo values in `docs/audit/production-changes.md`.
- CI: `.github/workflows/ci.yml` (node --check incl. inline scripts, build no-diff, function cap, link check, gitleaks full history, npm audit, Semgrep house rules + registry packs, Playwright smoke), `post-deploy.yml` (§5 smoke on production deploys and every 6h, opens an issue), `supabase-advisors.yml` (weekly, needs `SUPABASE_ACCESS_TOKEN` repo secret), Dependabot. Local results: gitleaks 0, Semgrep 0, smoke 14/14.
- [OWNER]: set Vercel `WAITLIST_WEBHOOK_SECRET` and `APPROVAL_LINK_SECRET`, then follow verify (g) in the migration to move off `admin_secret`; add the `SUPABASE_ACCESS_TOKEN` GitHub secret; on the preview deploy run `stripe trigger checkout.session.completed` to confirm the webhook; the `ADMIN_SECRET` copy from Phase 1 is still pending.
- Not done from step 6 (runtime protections): rate limiting beyond the AI caps, Turnstile on public forms (forms are Phase 3 item 8), CSP enforcement (report-only is in place).
- Post-merge (14 Oct): PR #2 deployed as `b08c654`; production smoke test all pass, `js/supabase/config.js` served, repo paths 404, CSP report-only present, vvkey.io script gone. (Logged by the Phase 3 session; the Phase 2 session's push was blocked.)

## 2026-10-15 — Phase 3 (cloud session, in progress)
- PR #10 (merged, `f860bb8`): `/api/generate-notes-pdf` crashed at cold start on Vercel (`ERR_REQUIRE_ESM`: `@react-pdf/renderer` v4 is ESM-only, `yoga-layout` uses top-level await). Now loaded with `import()` on first render. Production: empty POST returns 400, unauthenticated 401 (was 500). Unit tests in `tests/unit/` run in CI under `--no-experimental-require-module`.
- Branch `phase-3-timezone` (§0 #17, timezone-aware availability):
  - `supabase/migrations/202610150200_phase3_availability_timezone.sql`: `teacher_availability.timezone` (default 'UTC', backfilled from the teacher's latest class zone, validated by Phase 2's `validate_cohort_timezone()`). Local: all migrations twice + `rls.sql` 162/162; backfill and bad-zone rejection checked.
  - `js/tz.js`: shared DST-correct helpers (browser + `api/`). `scheduleOccurrences` produces the same dates as `generate_cohort_sessions()` (checked against SQL for Madrid, Toronto, Tokyo, Sydney).
  - `/api/create-cohort`: checks all 12 weeks of sessions against the slots, each read in its own zone (a DST-mismatch week that leaves a slot is rejected with the dates).
  - Teacher dashboard: slots saved with the browser zone and shown with it; warning when slots are in another zone; class created in the availability's zone (was: the browser's zone); time picker offers only times that fit all 12 weeks.
  - Student dashboard: class times converted on the real next date (the old helper used a fixed June week, so times were an hour off from late October to March); profiles still on the 'UTC' default show times in the browser zone.
  - Smoke test fix: `serve` redirected `*.html?preview=1` to the clean URL and dropped the query, so the dashboard checks had only ever loaded `/signin`. They now use clean URLs, assert the final page, and stub Supabase REST (no live DB calls from tests).
  - Not changed: admin "create cohort" still stores 'UTC' and builds sessions in the browser; handled with the admin operations item.
  - Merged as PR #11 (`2328b53`). The migration was applied by the owner in the SQL Editor after the merge (the connector timed out three times); for a few minutes adding slots and creating classes failed. Verified afterwards: column present, seed slots backfilled (Madrid ×5, Berlin ×2), bad zone rejected, REST API sees the column.
- Branch `phase-3-admin-ops` (plan item 7, admin operations):
  - Create class: the admin form now goes through `/api/create-cohort` in a new admin mode (`teacher_id`, optional `max_students` 1-35, optional `skip_availability` reported back as a warning). Same validation, timezone, `generate_cohort_sessions()` and Daily rooms as teachers get. The old path stored 'UTC' and built sessions in the browser.
  - Class list: timezone shown; Manage opens the roster with Move (to another open class in the same language) and Remove, plus Close to new students / Reopen.
  - Sessions: times shown in the class zone; Manage reschedules (date + time in the class zone, DST gaps and past times rejected) or cancels, with an optional message, emailing the active students (in their own zone when set) and the teacher. Replaces editing raw ISO timestamps and status.
  - Server: `api/_lib/admin-ops.js` (`session-update`, `enrollment-move`, `enrollment-remove` on `/api/admin/teacher?action=`; admin JWT, conditional updates). The seat transaction moved from `api/enroll.js` to `api/_lib/seat.js` unchanged and is shared by students and admin. Still 12 functions.
  - Tests: `tests/unit/seat.test.js`, `admin-ops.test.js`, admin cases in `create-cohort.test.js` (31 unit tests). Browser check of the admin screens with a fake admin session and stubbed APIs: no console errors, correct request bodies.
  - View as: already read-only since Phase 2 (ADM-14), with a "Read-only preview" note in the bar; nothing to change.
  - Payouts list: already present (log payout, mark paid); unchanged.
  - Not verified on production: emails (Resend not configured yet; responses say "No email sent").
  - Merged as PR #12 (`1c13c75`) and deployed; production smoke test passes, the new admin actions answer 401 without a token.
- Branch `phase-3-cron` (plan item 9, scheduled jobs):
  - `supabase/migrations/202610150400_phase3_cron.sql`: `pg_cron` runs `run_lifecycle_jobs()` every 15 minutes (expire waitlist offers via `process_expired_offers()`, mark sessions completed 90 minutes after start). Vercel Hobby only allows daily crons, so offers could hold a seat up to 24 h longer before.
  - `public.cron_runs` records every run (database and both Vercel crons via `api/_lib/cron-log.js`), admin-read only, kept 30 days. A `vercel:*` row after 00:00 UTC is the proof that `CRON_SECRET` is set in Vercel.
  - Local: all migrations twice, `rls.sql` 162/162; lifecycle job on seeded data (past session completed, live and future untouched, expired offer removed, second run changes nothing, a student cannot read runs). Unit tests for the Vercel crons (fail closed, run recorded).
  - Merged as PR #13 (`819de3c`). The owner applied the migration; verified: `alimun-lifecycle` scheduled every 15 minutes and active, the manual run logged both steps ok.
- Branch `phase-3-honesty` (plan item 8, honesty pass). Owner decisions 15 Oct: remove the founding offer from the site; make the email forms real.
  - Removed the false claims (real data on 15 Oct: 0 paying students, 0 approved teachers, no 200 cap in the code): the homepage founding-cohort section ("100 students joined", "6 teachers ready", "100 spots left", 100/200 bar, founding price table), the "save 40% forever as a founding member" line in the homepage and pricing-page meta tags, the founding text in the FAQ (page, FAQ schema and all 9 translations), the "Founding cohort — 200 spots" eyebrow, counters and progress bar on sign-in and sign-up, and "founding price discounts" in the footer text (all languages). The hero "Learn more" button now scrolls to the FAQ.
  - Not changed (owner to decide): the €29 Founding Member checkout in signup for languages that are not live yet (tier `founding_member`, Stripe price, webhook), and the careers page offer of 25% commission for the first 10 founding teachers.
  - Email forms: `js/subscribe.js` takes over the "Reserve your spot" and footer forms on the 8 pages that have them and shows the real result; `/api/send-admin-email?action=subscribe` (`api/_lib/subscribe.js`) stores into `public.email_signups` (migration `202610150500_phase3_email_signups.sql`, admin-only read/delete). Limits: 5 per address per hour, 300 per hour overall, keyed by an HMAC of the IP that is cleared after a day; duplicates get the same answer. Admin → Students → Email signups lists them with CSV export (formula-safe). Turnstile not added (needs a site key from the owner).
  - Tests: `tests/unit/subscribe.test.js` (6); browser check of `/` and `/fr/` (founding section gone, error then success shown for real); local DB: duplicate (any case) and bad format rejected, anon has no access, a student sees nothing and cannot insert.
  - Merged as PR #14 (`811d471`). The owner applied the email-signup migration (second attempt; the first paste was a different file). Verified live: table with RLS, admin-only policies, no anon access; a test signup through alimun.com was stored once (a repeat in capitals was deduplicated), with a hashed IP only; the test row was then deleted by the owner.
- Branch `phase-3-remove-founding` (owner decision 15 Oct: remove the EUR 29 Founding Member checkout too). No one had bought it (0 `founding_member` profiles, empty `webhook_logs`).
  - Signup: a language that is not live yet now goes straight to a single waitlist step (no EUR 29 option). Also removed the "10% off coupon" (e.g. `japanese10off`) from the waitlist card and confirmation: the Alimun Stripe account has no promotion codes, so the code would have been rejected at checkout. "Your spot is reserved" removed for the same reason.
  - Server: the founding price is no longer in the checkout allow-list or `/api/stripe?action=config`; `js/stripe/config.js` and the student dashboard no longer read it; admin can no longer set the `founding_member` tier. The webhook keeps its `founding_member` branch (comment added) so a checkout opened before the deploy is still recorded.
  - [OWNER] optional: archive the founding price in Stripe and remove `STRIPE_PRICE_FOUNDING_MEMBER` from Vercel. The DB tier check still allows `founding_member`; no rows use it.

## 2026-10-15 — Careers: founding-teacher offer removed
- `careers.html` slide `careers_sim_sub_3` said "standard is 30% or 25% locked forever for our first 10 founding teachers". That offer does not exist in the code, so the slide now only states the standard 30%, in every language (`js/translations.js`, regenerated locales, and the hand-made `it/careers.html`).
- Checks: build, inline scripts, function count, links, 41 unit tests, 14 Playwright smoke tests.

## 2026-10-15 — Italian homepage: founding offer removed
- `it/index.html` is hand-made (build.js skips it), so the earlier honesty pass missed it. Removed the founding-cohort section (100 joined, 6 teachers, 100/200 spots, 40% forever), pointed "Scopri di più" at the FAQ, and replaced the founding FAQ answer (page and schema) with the existing Italian `faq_a6` text.
- The four hand-made Italian pages (`index`, `careers`, `services`, `careers-teachers-section`) now load `js/subscribe.js`, so their email forms save for real like the other languages.
- Owner decision: Claude merges its own PRs once CI is green, then checks production.

## 2026-10-15 — Italian course pages: founding offer removed
- `it/corsi-{inglese,spagnolo,francese,tedesco,portoghese}-online.html` (hand-made): removed the founding-cohort section (100 joined, 6 teachers, 100/200 spots, 40% off), the founding FAQ (page and schema), the "Prezzo fondatore bloccato" comparison row, the "bloccati per sempre" pricing subtitle and labels, and the struck-through prices.
- Owner decision: show the normal price. Stripe live charges EUR 24 / 59 / 109 / 269 a month, so those stay; the struck-through 34 / 79 / 149 / 349 were never charged and are gone.
- Not changed, flagged to the owner: the 7-day trial and money-back wording, the student testimonials and the stats on these pages, the "sconti esclusivi per il lancio" newsletter line, and the struck-through prices on `tiers.html` in every language.

## 2026-10-15 — Unbacked claims removed (Italian course pages, tiers)
- `it/corsi-*-online.html` (hand-made): removed the 7-day free trial and money-back guarantee claims (Stripe prices have no trial; terms have no guarantee), the invented student testimonials and the fake `aggregateRating` 4.8/142 + `review` schema, the "docenti madrelingua" section (Sarah Thompson, Jessica Novak, Martina Rojas, Kevin O'Connor are not in `teacher_profiles`), outside statistics (stats bar now shows only price and A1–C2; the English page's statistics-only section 3; salary and job-offer percentages), claims about Alimun students' results (95% pass rate, "most of our students"), and "sconti esclusivi per il lancio" in the newsletter line.
- `tiers.html` (all languages): crossed-out prices removed; the real prices stay.
- Not changed, flagged to the owner: the same four invented teachers appear on `about-us.html` and `careers-teachers-section.html` in every language.

## 2026-10-15 — Invented teacher team removed
- Removed the "Meet our teachers" section (Sarah, Jessica, Martina, Kevin; not in `teacher_profiles`) from `about-us.html` and `careers-teachers-section.html` in every language (root, regenerated locales, hand-made `it/careers-teachers-section.html`). The `about_staff_*` translation keys are now unused. The teacher dashboard's preview-mode placeholder name is unchanged (only shown with `?preview=1` or before the real name loads).

## 2026-10-16 — Stripe Customer Portal and webhook events (live account, no code change)
- Vercel crons confirmed: `vercel:cron-create-rooms` and `vercel:cron-expire-offers` logged ok in `cron_runs` at about 00:40 UTC, so `CRON_SECRET` is set. Plan item 9 is done.
- The live account had no Customer Portal configuration, so "Manage subscription" (`/api/stripe?action=billing-portal`) failed for every subscriber. Created `bpc_1UR6GQBg8L561PwNBlrWbcaI` ("Alimun default", is_default): update payment method, invoice history, cancel at period end with a reason, switch between the eight EUR prices (prorated), no customer detail edits (the email must stay in sync with Supabase), terms and privacy links, return to the student dashboard. The webhook maps the new price to the tier on `customer.subscription.updated`.
- Live webhook `we_1TmNJLBg8L561PwNsSNLJ8VV` now also sends `charge.refunded` and `charge.dispute.created` (the handler logs them in `webhook_logs` for the admin).
- Owner, still open: AI key, Vercel bypass secret for previews, Alimun Stripe sandbox for test-mode payments; Resend later.

## 2026-10-17 — AI key and 1:1 session price (Vercel and Stripe, no code change)
- Owner chose Groq. `GROQ_API_KEY` (sensitive) and `AI_DAILY_BUDGET_USD=5` added to the Vercel project `alimun-site` (team youssefbouchtaoui-4103s-projects, serves alimun.com), production and preview; redeployed. Key and default model `openai/gpt-oss-120b` tested directly against Groq. Not yet seen through `/api/ai` (needs a signed-in eligible user); check `ai_usage` after the owner's first use.
- Found: `STRIPE_PRICE_ONEONONE_SESSION`, `STRIPE_PRICE_CERTIFICATE` and the eight `*_AUD` / `*_MAD` price variables point to prices from another Stripe account (`...BSEHl9NbpE...`), so the dashboard's EUR 60 "1:1 session" checkout failed. Created live product `prod_VSIfjgh0dLciQ7` "1:1 session credit", price `price_1URO45Bg8L561PwNjj13qHNh` (EUR 60; USD 66, CAD 96, AUD 99, MAD 648 to match `js/currency.js`), set the variable, redeployed (owner approved), verified in `/api/stripe?action=config`.
- Not changed: the regional AUD/MAD variables are unused by the site (tiers charge in local currency through each EUR price's `currency_options`, which exist); the certificate is not sold anywhere yet.

## 2026-10-19 — Cleanup and admin usability
- Vercel (owner approved): removed 10 dead variables (`STRIPE_PRICE_FOUNDING_MEMBER`, `STRIPE_PRICE_CERTIFICATE`, the eight `*_MONTHLY_AUD/MAD`; all pointed to another Stripe account) and redeployed. Dashboard upgrades in AUD/MAD now fall back to the EUR price, whose `currency_options` charge in the local currency. Stripe: founding product `prod_VQhjlLg7kdkTtO` archived.
- `supabase/migrations/202610190100_cleanup_test_accounts.sql` (owner: "delete A and B, fix C"): deletes 11 junk and 11 demo accounts plus the Test Teacher's closed demo class; owner accounts `bchysfca@`, `bchysfpol@` lose unpaid tiers. MCP timed out (nothing applied); owner runs it in the SQL editor.
- Admin: "View as teacher" opened an empty page because no teacher is approved; it now falls back to any teacher. "Create class" with no approved teacher explains what to do. Class screen has "Add a student" (any student learning that language; uses `enrollment-move`).

## 2026-10-20 — Rebuild proof done, plan written
- Branch `rebuild-astro`, folder `site/`: the homepage rebuilt in Astro from verbatim Webflow blocks, approved element by element by the owner (nav, hero, email section, cards, FAQ, banner, footer) and locked in `site/locked.json`. Pixel comparisons match on desktop and phone. Preview: https://alimun-rebuild-preview.vercel.app (separate Vercel project).
- `docs/REBUILD_PLAN.md`: steps 0-5 (language meta tags now; other pages; languages; switch-over; course pages; Search Console). Waiting for the owner's decisions listed at the end.
