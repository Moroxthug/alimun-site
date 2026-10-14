# Phase 2 audit: Admin (ADM)

Scope: `admin.html` (all 2949 lines), `js/view-as.js` (all 140 lines). Every `fetch('/api/...')` cross-checked against its handler: `api/admin/teacher.js` (all), `api/send-admin-email.js` (all), `api/ai.js` (`action=usage` and the router). Every Supabase call checked against `supabase/migrations/202610141800_phase1_db_lockdown.sql` and `supabase/2026-10-14_admin_role_hardening.sql`.

Summary of what holds up:
- **Admin gate (client).** `admin.html:1449-1475` uses `getUser()`, which the server verifies, and checks `app_metadata.role === 'admin'` only. No data is loaded before the gate passes.
- **Admin gate (server and database).** RLS is the real barrier, and every table admin.html touches is `is_admin()`-gated. A non-admin who skips the client gate gets only their own rows.
  - `set-status` and `ai?action=usage` check `app_metadata` server-side.
  - `send-admin-email` is the exception: see ADM-01.
- **Stored XSS into the admin browser.** Every value from the database (teacher applications, bios, names, reviews, settings, AI-usage keys) passes through `escapeHtml` before it reaches `innerHTML`.
  - Room URLs go through a https check and are also escaped.
  - IDs inside `onclick` strings are uuid primary keys, and `tier` is limited by a CHECK constraint.
  - No unescaped sink was found in admin.html or view-as.js.
- **CSV exports.** None exist, so formula injection does not apply.

---

### ADM-01: send-admin-email authorises on user_metadata.role as a fallback
- Severity: Medium
- Location: api/send-admin-email.js:51-54
- Category: authz
- Confidence: high
- Scenario: The check is `const role = user.app_metadata?.role || user.user_metadata?.role || ''`. This breaks the CLAUDE.md rule that admin comes from `app_metadata` only. `user_metadata` is writable by the user (`supabase.auth.updateUser({ data: { role: 'admin' } })`), so any account whose `app_metadata.role` is empty or missing passes the check. Such an account can then:
  1. Call `POST /api/send-admin-email` with `emailType: 'promo'`, any `targetId` (student or teacher profile id) and any `customSubject`/`customBody`.
  2. Have that HTML sent unescaped (line 168) to that user's real address under the Alimun name. That is phishing as Alimun, sent to every user.

  Today the risk is reduced: the `trg_set_app_role` trigger and the Phase 1 backfill give every account an `app_metadata.role`, so the fallback is not reached. It becomes exploitable as soon as that trigger is dropped or bypassed, for example by an account created through a path that writes `raw_app_meta_data` with no role.
- Fix: `if (user.app_metadata?.role !== 'admin') return 403`. Remove the `user_metadata` fallback.

### ADM-02: Admin emails are sent from `onboarding@resend.dev`, so memos and tier emails do not reach users
- Severity: Medium
- Location: api/send-admin-email.js:198; admin.html:1739-1757, 1846-1881
- Category: bug
- Confidence: high
- Scenario: The handler hard-codes `from: 'Alimun <onboarding@resend.dev>'` and ignores `EMAIL_FROM_ADDRESS`, which `api/admin/teacher.js:107` uses. Resend's shared test sender only delivers to the Resend account owner's own address.
  - **"Dispatch Mail".** For any real student or teacher, Resend rejects the send. The admin sees `Mail delivery error: Resend delivery failed: {...raw Resend JSON...}`, which also leaks the provider's error body into the UI.
  - **Tier-change email.** In `saveStudentDetail`, the fetch result is never checked (`await fetch(...)` with no `resp.ok`). The failure is silent and the toast says the update succeeded.
- Fix: use `process.env.EMAIL_FROM_ADDRESS || 'Alimun <no-reply@alimun.com>'`, as in teacher.js. In `saveStudentDetail`, check `resp.ok` and tell the admin when the email fails. Return a generic error instead of `errText`.

### ADM-03: Approve/reject email links change state on GET and can be reused for 7 days
- Severity: Medium
- Location: api/admin/teacher.js:37, 125-239 (approve), 361-475 (reject), 523-531 (both links in one email)
- Category: authz
- Confidence: medium
- Scenario: The new-application email contains both an approve URL and a reject URL. Each is a plain GET that changes `teacher_profiles.status` and emails the teacher. Each HMAC token stays valid for 7 days, and nothing marks it as used.
  - **Link scanners.** Mail security scanners such as Microsoft Safe Links, corporate gateways and some antivirus products open every link in a message. If one sits in front of `ADMIN_EMAIL`, it calls approve and then reject. The teacher ends up approved-then-suspended (or the reverse) and receives both emails.
  - **Replay.** The admin approves a teacher, then suspends them from the dashboard. Within 7 days, anyone holding the original email (forwarded, shared mailbox) can click "Approve" and reinstate the teacher. `handleApprove` only short-circuits when the status is already `approved`.

  To confirm: check whether the `ADMIN_EMAIL` mailbox sits behind a link-prefetching scanner. The replay part does not depend on that.
- Fix: make the GET render a confirmation page whose button sends a POST, so the change happens on POST only. Also make tokens single-use:
  - only allow the action while `status = 'pending'`; or
  - store a nonce or `decided_at` and reject tokens issued before it.

### ADM-04: Provisioning a cohort probably fails because `goal_track` is NOT NULL and is not sent
- Severity: Medium
- Location: admin.html:2372-2417 (insert at 2403-2417)
- Category: bug
- Confidence: medium
- Scenario: `saveNewCohort` inserts into `cohorts` with `teacher_id, language, level, tier, max_students, schedule_days, schedule_time, status, timezone` but no `goal_track`.
  - In `supabase/schema.sql:47-48`, `cohorts.goal_track` is `text not null` with a CHECK constraint and no default.
  - `supabase/tests/rls.sql` always supplies it on cohort inserts.
  - `api/create-cohort.js:86` requires it.

  If production matches the schema, "Provision Cohort & Sessions" always fails with a not-null violation, so the admin cannot create cohorts. The modal has no goal-track field. To confirm: `select column_default, is_nullable from information_schema.columns where table_name='cohorts' and column_name='goal_track'`.
- Fix: add a goal-track `<select>` built from `GOAL_TRACKS` to `openCreateCohortModal` and include `goal_track` in the insert.

### ADM-05: Create and payout actions have no double-submit guard; cohort creation can leave half-made records
- Severity: Low
- Location: admin.html:2372-2451 (saveNewCohort), 2910-2940 (saveNewPayout), 2852-2864 (markPayoutPaid), 1819-1844, 2245-2278
- Category: bug
- Confidence: high
- Scenario:
  - **Double-click.** None of these handlers disables its button while the request is running, except the teacher-status modal and the promo mail. Double-clicking "Record Transaction" inserts two `teacher_payouts` rows, so the pending payout total is doubled. Double-clicking "Provision Cohort & Sessions" creates two cohorts with 12 sessions each.
  - **Half-made cohort.** If the cohort insert succeeds but the sessions insert fails (2442-2444), the modal stays open. Retrying creates a second cohort, and the first is left with no sessions.
  - **Mark Paid.** "Mark Paid" marks money as paid in one click, with no confirmation.
- Fix: disable the submit button until the request finishes. Add `confirm()` (or a modal) to Mark Paid. Make cohort and session creation atomic, for example through `/api/create-cohort` or an RPC that inserts both in one transaction. Alternatively, on session failure, delete the new cohort or close the modal and reload.

### ADM-06: "Add Faculty Directly" creates an approved profile the user cannot use
- Severity: Low
- Location: admin.html:2245-2278; teacher-dashboard.html:3625-3629
- Category: bug
- Confidence: high
- Scenario: The admin enters an existing user's UUID, usually a student-role account, and inserts an `approved` `teacher_profiles` row. The account's `app_metadata.role` stays `student`, and only the service role can change it.
  - The teacher dashboard checks `app_metadata.role || user_metadata.role` and requires `'teacher'`, so it sends this user to the student dashboard.
  - The UUID is also not validated, so a typo returns a raw FK or uuid error.

  The profile appears as approved faculty, can be assigned cohorts, and shows publicly, but the person can never open the teacher dashboard.
- Fix: move this to a server action, for example `POST /api/admin/teacher?action=create`. It should verify the admin, check that the user exists, set `app_metadata.role='teacher'` with `auth.admin.updateUserById`, and then insert the profile. At minimum, validate the UUID client-side and warn the admin.

### ADM-07: Times labelled "UTC" are shown in the admin's local timezone
- Severity: Low
- Location: admin.html:1016 + 1590; 1157 + 2483; 2528; 1570-1572
- Category: bug
- Confidence: high
- Scenario: The column headers say "Scheduled Time (UTC)" and "Scheduled Date (UTC)", and cohort creation asks for a UTC time (2361). The values, however, are rendered with `new Date(...).toLocaleString()`, which uses the browser's local time.
  - An admin in Morocco or Spain (UTC+1/+2) sees an 18:00 UTC class as 19:00 or 20:00 under a "UTC" header.
  - The Manage modal (2528) shows the raw ISO UTC string, so the same session shows two different times on one screen.
  - "Today" in `loadLiveSessions` is the local day, not the UTC day.

  The likely result is wrong manual edits of `scheduled_at`.
- Fix: render with `toLocaleString(undefined, { timeZone: 'UTC' })`, or relabel the headers as local time and convert the edit field consistently. Use a `datetime-local` input with explicit UTC conversion.

### ADM-08: Overview shows invented figures (static trend chart, "Estimated Monthly Volume" = payouts × 1.5)
- Severity: Low
- Location: admin.html:948-1006 (chart path at 969-976), 1551, 1499-1501
- Category: bug
- Confidence: high
- Scenario:
  - **Trend chart.** "Signups & Activity Trend" is a hard-coded SVG path (Week 1 … Current) that does not come from any data.
  - **Monthly volume.** "Estimated Monthly Volume" is `(paid + pending teacher payouts) * 1.5`. That is all-time teacher cost times a made-up multiplier, not revenue and not monthly.
  - **Derived figures.** The 38.93% operating costs, 9% tax and net margin are derived from that number.

  The admin sees revenue and profit figures that look real but are not. CLAUDE.md says "numbers come from the database or are removed".
- Fix: remove the static chart and the derived financial block. Alternatively, compute volume from real data (Stripe or `webhook_logs` / active subscriptions × price) and label the period correctly.

### ADM-09: Counts and lists silently stop at the PostgREST row limit
- Severity: Low
- Location: admin.html:1536-1539, 1563 (stats), 1603, 1889, 2282, 2455, 2576, 2815; api/ai.js:458 (`limit(5000)`)
- Category: bug
- Confidence: medium
- Scenario: The stats count rows by fetching every `id` and reading `.length`. The lists fetch whole tables with no paging.
  - Supabase's default `max_rows` is 1000. Once there are more than 1000 students or sessions, "Total Students" reads 1000 and older rows disappear from the tables and search, with no indication.
  - AI-spend totals are cut off at 5000 rows in the window.

  To confirm: the project's API `max_rows` setting.
- Fix: use `select('id', { count: 'exact', head: true })` for counts. Add range paging to the lists. Aggregate AI usage in SQL (for example `v_ai_spend_daily`) instead of in JS over a capped set.

### ADM-10: Teacher status endpoint reports "emailed" when no email was sent; large bulk actions can time out
- Severity: Low
- Location: api/admin/teacher.js:101-121, 684-696; admin.html:2059-2062
- Category: bug
- Confidence: high (emailed flag), medium (timeout)
- Scenario:
  - **False "emailed".** `sendEmail` returns early when `RESEND_API_KEY` is missing. It also never checks `response.ok` and swallows errors. `handleSetStatus` still sets `emailed = true`, so the toast says "· N email(s) sent" when nothing was delivered. That is likely today, given the open DKIM/SPF item 11 and the unconfirmed `RESEND_API_KEY`.
  - **Timeout.** Bulk actions process up to 50 teachers one after another, each with a DB update plus `getUserById` plus a Resend call. On the Hobby plan's 10 s limit, a large batch can be killed partway. The client then shows "Status update failed" although some rows were changed and emailed. To confirm: function `maxDuration` in vercel.json or the plan limit.
- Fix: have `sendEmail` return `true` only when `response.ok`, and set `emailed` from that. Cap the bulk size at around 10, or run emails with `Promise.allSettled` after all updates.

### ADM-11: Admin emails insert raw HTML and say "upgraded" for any tier change
- Severity: Low
- Location: api/send-admin-email.js:105-133, 166-168; admin.html:1739-1753
- Category: bug
- Confidence: high
- Scenario: `fullName` (set by the user), `tierName` and `customBody` are put into the email HTML without escaping.
  - A student whose name contains markup gets that markup rendered in their own email (self only).
  - An admin memo containing `<` or `&` is mangled.
  - Any tier change, including a downgrade to `community` or `waitlist`, sends "Your classroom tier has been upgraded to … active without requiring credit card registration or subscription payments. Enjoy your live classes", which is false for `waitlist`.

  The admin's manual tier change also does not touch Stripe. `api/webhooks/stripe.js:274-284` sets `tier` back to the subscription's tier on the next `customer.subscription.updated`.
- Fix: escape `fullName`, `tierName` and `customBody` (keep `white-space: pre-wrap`). Send the email only for real upgrades, or use neutral "tier changed" wording. Show a warning in the student modal when the student has an active Stripe subscription.

### ADM-12: Secret values in app_settings are shown in plain text in the Settings panel
- Severity: Low
- Location: admin.html:2642-2651, 2704-2730
- Category: info-leak
- Confidence: high
- Scenario: `app_settings` holds `admin_secret`, which `docs/phase-1-db-lockdown.md` asks to keep equal to Vercel's `ADMIN_SECRET`. That value is the HMAC key behind the approve/reject links (ADM-03). The Settings tab prints every value in clear text, so anyone who sees the admin's screen gets the key. That includes screen shares, screenshots in bug reports and recordings. With the key, anyone can create approve links for any teacher.
- Fix: mask values whose key matches `/secret|key|token|password/i`, with an explicit reveal or copy control. Consider moving `admin_secret` out of a table that the browser reads.

### ADM-13: Admin page loads an unpinned supabase-js major version from a CDN without SRI
- Severity: Low
- Location: admin.html:11 (also js/supabase/config.js:24 comment)
- Category: other
- Confidence: high
- Scenario: The page loads `https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js` with a floating `@2` and no `integrity` attribute. The admin session, including its refresh token, is stored in `localStorage` (`alimun-auth`) on the same origin as every marketing page. A compromised or typosquatted npm release, or a CDN compromise, therefore runs with full admin rights: `is_admin()` gives read and write on every table.
- Fix: pin an exact version (for example `@supabase/supabase-js@2.x.y`) with an `integrity=` hash and `crossorigin`, or self-host it. Add a CSP (Phase 2 step 6) that limits `script-src` on admin.html.

### ADM-14: "View as" runs the teacher and student dashboards with the admin JWT, so stored XSS there would take over the admin account
- Severity: Info
- Location: js/view-as.js:42-58, 93-131; admin.html:1991-1996; teacher-dashboard.html:3618-3660
- Category: xss
- Confidence: high
- Scenario: View-as opens the teacher and student dashboards in the admin's own session. This is known item 18, and the bar warns "Edits save to this account". The bar itself is safe: `esc()` is applied to every label and href, and `?as=` only selects a row through RLS. The consequences are:
  1. Any unescaped `innerHTML` sink in those dashboards becomes admin-context code execution. The affected data is written by students and teachers: names, bios, submissions, chat and notes, and AI feedback. The script can read `localStorage['alimun-auth']` and take full control of the database through `is_admin()`. The dashboard reviewers should rate any stored XSS reachable through view-as as Critical.
  2. Admin writes skip every column guard (`is_client_write()` is false for admins). Dashboard code that relies on the database to refuse a write, such as session room URL, `scheduled_at`, cohort tier or student tier, will succeed when used in view-as.
  3. Server endpoints called from the dashboards (join-session, enroll, AI) act as the admin, not as the person being viewed.
- Fix: no change needed in view-as.js itself. Make sure the dashboard audits close every unescaped sink. Consider making view-as read-only, by turning off writes in the dashboards when `viewAs` is set, until it uses a real impersonation token.

---

## Coverage

| File | Lines read |
|---|---|
| admin.html | 1-2949 (all: CSS 21-796, markup 798-1331, module script 1333-2947) |
| js/view-as.js | 1-140 (all) |
| api/admin/teacher.js | 1-727 (all; cross-check for `?action=set-status` and the email-link flows) |
| api/send-admin-email.js | 1-218 (all; target of the memo and tier-change fetches) |
| api/ai.js | 440-520 (`handleUsage` + router; target of `/api/ai?action=usage`) |
| api/webhooks/stripe.js | 205-300, 376-405 (tier writes, for ADM-11) |
| teacher-dashboard.html | 3600-3660 (role gate and view-as boot, for ADM-06/14) |
| supabase/migrations/202610141800_phase1_db_lockdown.sql | 1-300, 420-600, 700-800 (helpers, guards, policies, grants) |
| supabase/2026-10-14_admin_role_hardening.sql | all |
| supabase/schema.sql | 40-130 (cohorts / student_profiles / sessions columns) |
| js/supabase/config.js | 1-80 |
| vercel.json | 1-80 |

## RLS assumptions

All admin.html calls run with the admin's JWT (`app_metadata.role = 'admin'`), so `is_admin()` is true. The column guards (`is_client_write()`, `guard_teacher_profile_admin_fields`) let admins through.

| query location | table/rpc | operation | what it needs | allowed under Phase 1? |
|---|---|---|---|---|
| admin.html:1536 | student_profiles | select id | admin read all | yes (`student_profiles_select` is_admin) |
| admin.html:1537 | teacher_profiles | select id where approved | admin read all | yes (`teacher_profiles_select` is_admin) |
| admin.html:1538 | cohorts | select id where status in open/full | read | yes (`cohorts_select`) |
| admin.html:1539, 2815 | teacher_payouts (+ teacher_profiles embed) | select | admin read all | yes (`payouts_select` + teacher_profiles is_admin) |
| admin.html:1573 | sessions + cohorts embed | select today | admin read | yes (`sessions_select`, `cohorts_select`) |
| admin.html:1603 | student_profiles | select * | admin read all (incl. stripe_* cols) | yes |
| admin.html:1645 | enrollments + cohorts(*) | select by student | admin read | yes (`enrollments_select`) |
| admin.html:1728 | student_profiles | update level/goal_track/tier | admin update; tier guard bypass | yes (policy is_admin; guard skips admin) |
| admin.html:1832 | student_profiles | insert any user_id | admin insert | yes (`student_profiles_insert` is_admin; guard skips) |
| admin.html:1889 | teacher_profiles | select * | admin read all | yes |
| admin.html:2079 | cohorts | select by teacher_id | read | yes |
| admin.html:2080 | teacher_availability | select by teacher_id | admin read | yes (`availability_select` is_admin) |
| admin.html:2191 | teacher_profiles | update specialty/exp/rating/rate/tier_level | admin update of guarded cols | yes (policy is_admin; admin-fields trigger skips admin) |
| admin.html:2257 | teacher_profiles | insert status=approved, any user_id | admin insert | yes (but see ADM-06) |
| admin.html:2282 | cohorts + teacher_profiles embed | select | admin read | yes |
| admin.html:2403 | cohorts | insert | admin write | yes (`cohorts_admin_write`); likely fails on NOT NULL goal_track (ADM-04) |
| admin.html:2442 | sessions | insert x12 | admin write | yes (`sessions_admin_write`) |
| admin.html:2455 | sessions + cohorts + teacher_profiles embed | select | admin read | yes |
| admin.html:2560 | sessions | update scheduled_at/room/status | admin write; session guard bypass | yes (guard skips admin) |
| admin.html:2576 | teacher_reviews + teacher/student embeds | select | read | yes (`reviews_select` true; embeds is_admin) |
| admin.html:2610 | teacher_reviews | delete | admin delete | yes (`reviews_delete` is_admin) |
| admin.html:2625 / 2691 / 2735 / 2752 | app_settings | select / insert / update / delete | admin all | yes (`app_settings_admin`) |
| admin.html:2853 | teacher_payouts | update status/paid_at | admin write | yes (`payouts_admin_write`) |
| admin.html:2922 | teacher_payouts | insert | admin write | yes |
| view-as.js:48, 51 | teacher_profiles / student_profiles | select * by id / latest | admin read any | yes; a non-admin never reaches it (`isAdmin` gate), and RLS would return only their own row |
| view-as.js:62, 65 | teacher_profiles / student_profiles | select list | admin read all | yes |

Non-admin check: a non-admin who skips the client redirect and calls these from the console gets only their own `student_profiles`/`teacher_profiles` row. They see open cohorts, all reviews (`reviews_select` is `true` by design), and sessions they are enrolled in or teach. Every write above is denied, except writes to their own profile, which the column guards still limit.
