# SQL audit (supabase/) — Phase 2

Effective state assumed: repo history (schema.sql, waitlist-fill-system.sql, add-*.sql, generate-sessions-function.sql, fix-tier-constraint.sql, 2026-10-14_admin_role_hardening.sql) followed by `migrations/202610141800_phase1_db_lockdown.sql` (applied 14 Oct), plus the owner actions recorded in docs/PROGRESS.md (seed teachers suspended, cohorts closed, nothing deleted; admin@alimun.com demoted to student). Nothing was run against any database.

Summary of what the lockdown gets right (verified, no finding): `is_admin()` reads only `app_metadata`; every RLS helper is SECURITY DEFINER with `search_path ''` and answers only about `auth.uid()`, so calling it with someone else's id leaks one boolean at most; `cohort_classmates()` checks enrollment/teaching/admin before returning rows; server RPCs (increment/decrement_enrollment, generate_cohort_sessions, process_expired_offers) are service_role only; anon holds only SELECT on `teachers_public`; the signup trigger maps any `user_metadata.role` other than `teacher` to `student` and never overwrites an existing app role, so `role=admin` at signup does nothing; students cannot UPDATE tier/stripe_*/enrolled_cohort_id; teachers cannot change room URLs, times, pdf_url/published_at, status/hourly_rate/tier_level/rating; `app_settings` (holding admin_secret) is readable by admins and the service role only; views are security_invoker; trigger functions losing EXECUTE does not break them (EXECUTE is checked only at CREATE TRIGGER).

### SQL-01: Seed and test accounts with passwords committed to the repo still exist in production, several with `stripe_subscription_status = 'active'`
- Severity: High
- Location: supabase/seed.sql:22-173 (password `AlimunDev2026!` for admin@alimun.com, sofia@, lukas@, aisha@/marco@/yuki@/omar@/camille@example.com), supabase/seed.sql:275-320 (students with `stripe_subscription_status 'active'`, tiers up to `intensive`); supabase/seed-test-video-session.js:30-32,85 (test-teacher@/test-student@alimun.com, password `AlimunTest123!`, student set `active`); docs/PROGRESS.md:19-22
- Category: stripe
- Confidence: medium
- Scenario: PROGRESS.md confirms the production database still holds the seed students (`@example.com`), `test-student@alimun.com` and `admin@alimun.com` (demoted, not deleted); option A suspended teachers and closed cohorts but did not touch these student rows or their passwords. The seed rows use fixed auth ids `00000000-…-0004…0008`, so they were created by seed.sql's own `insert into auth.users` with the committed bcrypt password, and `email_confirmed_at = now()`. Anyone who reads the repo signs in as `omar@example.com` / `AlimunDev2026!` (tier `intensive`, subscription `active`, fake `sub_test_omar001`), updates their own `student_profiles.language` (not guarded) to match a target class, and calls `/api/enroll` with `switch: true`. enroll.js:139 only checks `stripe_subscription_status === 'active'` and tier weight, so they join any open paid class and get Daily tokens without paying. No Stripe webhook will ever cancel them because the subscription does not exist. The suspended seed teachers (sofia@, lukas@, test-teacher@) can also still sign in; see SQL-03 for what they can still reach.
- Fix: In production, delete these auth users. If they must stay, ban them (`banned_until`), reset their passwords to random values, and set `stripe_subscription_status = null, tier = 'waitlist'` on their student_profiles. Remove the literal passwords from seed.sql and seed-test-video-session.js (generate random ones at run time). Confirm with `select email, last_sign_in_at from auth.users where email like '%@example.com' or email like '%@alimun.com'`.

### SQL-02: Re-running `2026-09-security-hardening.sql` (labelled "safe to re-run" and cited by api/enroll.js) undoes parts of the lockdown
- Severity: Medium
- Location: supabase/2026-09-security-hardening.sql:3,53-56,176-232,337-346; api/enroll.js:17-18
- Category: authz
- Confidence: high
- Scenario: The file has its own begin/commit, and every statement in it still succeeds on the current schema (it drops all policies by name before recreating them, and the RPCs it revokes exist). An operator who follows the header ("Idempotent: safe to re-run") or the enroll.js comment and runs it would (1) drop the Phase 1 cohort policies and recreate `cohorts_insert` (approved teacher), `cohorts_update` and `cohorts_delete` (own cohort). A teacher could then insert cohorts directly with any enrolled_count, max_students, tier or status, bypassing /api/create-cohort, and could DELETE their cohort, which cascades to the enrollments, sessions, notes and attendance of paying students. (2) Replace `guard_cohort_columns` and `guard_student_profile_columns` with versions whose triggers fire only on UPDATE, so the Phase 1 INSERT branches are lost. (3) Recreate `v_ai_spend_daily` without `security_invoker`. CREATE OR REPLACE VIEW resets reloptions, so the view would run as its owner and every authenticated user could read platform-wide AI calls and spend. (4) Rewrite `app_metadata.role` for every non-admin from `user_metadata.role`, which the user controls.
- Fix: Move the file to `supabase/archive/` (or delete it) with a header saying "SUPERSEDED by migrations/202610141800 — DO NOT RUN". Update the enroll.js comment to point at the migration.

### SQL-03: RLS helpers ignore teacher status, so a suspended teacher keeps full access to their cohorts' students
- Severity: Medium
- Location: supabase/migrations/202610141800_phase1_db_lockdown.sql:77-80, 93-133 (my_teacher_profile_id, teaches_cohort, teaches_student, teaches_session); policies at 429-430, 458-459, 464-467, 472-481, 484-490, 525-546, 551-556, 573-574
- Category: authz
- Confidence: high
- Scenario: Suspending a teacher (`teacher_profiles.status = 'suspended'`) only removes them from `teachers_public` and from /api/create-cohort. Every helper checks only `tp.user_id = auth.uid()`. A suspended teacher (for example the seed teachers from SQL-01, or a real teacher suspended for misconduct) can still read the full `student_profiles` rows (including stripe_* columns) and feedback, exercise results and submissions of every student actively enrolled in their cohorts. They can also mark sessions cancelled or completed, publish notes, create assignments, write feedback and upload or read session files. Closing their cohorts does not help, because enrollments stay `active`.
- Fix: Add `and tp.status = 'approved'` to my_teacher_profile_id(), teaches_cohort(), teaches_student() and teaches_session(). Keep a separate unrestricted helper for the teacher's own teacher_profiles/payouts rows, so a pending or suspended teacher can still see their own profile. Add rls.sql cases for a suspended teacher.

### SQL-04: Teachers can self-edit public "trust" fields (sessions_delivered, experience_years, badges) shown on teachers_public
- Severity: Medium
- Location: supabase/2026-10-14_admin_role_hardening.sql:47-63 (guard covers only status, hourly_rate, tier_level, rating, user_id); migrations/202610141800_phase1_db_lockdown.sql:61-62 (adds `badges`), 444-446, 594-608
- Category: authz
- Confidence: high
- Scenario: An approved teacher calls `supabase.from('teacher_profiles').update({ sessions_delivered: 5000, experience_years: 30, badges: ['Top rated','Verified'] }).eq('user_id', me)`. The update policy allows their own row and the guard does not cover these columns. `public_teacher_rows()` publishes them to anon and students through `teachers_public`, and the student dashboard renders `sessions_delivered` (student-dashboard.html:3292). The platform ends up showing invented counters and badges as if Alimun had verified them, which the house rules forbid. The guard is also a deny-list, so any live-only column added later is writable by default.
- Fix: Turn the guard into an allow-list. For client writes on UPDATE, permit only full_name, bio, specialty, languages and location, and raise if anything else changes. On INSERT, also force sessions_delivered = 0, badges = null and experience_years to a sane bound. Apply the same allow-list approach to guard_student_profile_columns (allow only full_name, language, level, goal_track) and guard_session_columns (allow only status).

### SQL-05: `bulk-approve-teachers.sql` approves pending AND suspended teachers if re-run
- Severity: Medium
- Location: supabase/bulk-approve-teachers.sql:6-8
- Category: authz
- Confidence: high
- Scenario: `update teacher_profiles set status = 'approved' where status != 'approved'` includes `suspended`. If anyone runs it again (it is a loose file next to the migrations with no warning), every suspended teacher becomes approved and public again. That includes the seed and test teachers with known passwords (SQL-01). It also approves every pending applicant without review, and they can then create cohorts through /api/create-cohort.
- Fix: Delete the file, or restrict it to `where status = 'pending' and id in (...)` with an explicit list and a "one-off, already run" header.

### SQL-06: Student can pick any `tier` when inserting their own student_profiles row
- Severity: Low
- Location: supabase/migrations/202610141800_phase1_db_lockdown.sql:223-229 (INSERT branch nulls stripe_* and enrolled_cohort_id but not tier), 431-432; signup.html:703-710, 765-772, 903-910
- Category: authz
- Confidence: high
- Scenario: At signup the client inserts its own profile with any tier (for example `private`). The guard keeps the value. Impact is limited today: /api/enroll also requires `stripe_subscription_status = 'active'`, which is nulled on insert, and the subscription webhook overwrites tier at checkout (api/webhooks/stripe.js:389-396). Any future feature that trusts `tier` alone (UI gating, AI quotas, 1:1 booking) would inherit the bypass. A founding-member purchase is one-time and leaves the client-chosen tier in place.
- Fix: In the INSERT branch of guard_student_profile_columns, force `new.tier` to one of the unpaid values (`waitlist`/`founding_member`) or to a server default, and let the webhook set the paid tier.

### SQL-07: Waitlist insert has no eligibility check, so free accounts can hold a released seat empty indefinitely
- Severity: Low
- Location: supabase/migrations/202610141800_phase1_db_lockdown.sql:497-498; supabase/waitlist-fill-system.sql:79-100 (auto_close keeps a cohort `full` while any waitlist row exists), 103-149
- Category: authz
- Confidence: high
- Scenario: Any signed-in student, without a subscription and with any language or tier, can insert themselves into the waitlist of any cohort, including closed cohorts and cohorts they cannot see. An attacker with N free accounts joins a popular full cohort's waitlist. Each freed seat is offered to the queue head for 48 h and ignored. While waitlist rows exist, `auto_close_full_cohort` keeps the cohort `full`, so the seat stays empty for N × 48 h. Real waitlisted students are delayed the same way.
- Fix: Tighten `waitlist_insert` with check: the caller's profile has `stripe_subscription_status = 'active'`, and the cohort is `status = 'full'` with matching language and allowed tier (via a SECURITY DEFINER helper). Optionally cap pending waitlist rows per student.

### SQL-08: ADMIN_SECRET is stored in plaintext in `app_settings` and reused as the HMAC key for teacher approval links and cron auth
- Severity: Low
- Location: supabase/waitlist-fill-system.sql:27-31, 129-138, 176-177, 209-214; api/admin/teacher.js:132-139, 368-375; api/waitlist/cron-expire-offers.js:28; docs/phase-1-db-lockdown.md "ADMIN_SECRET" (value generated in the DB and copied to Vercel)
- Category: secrets
- Confidence: high
- Scenario: RLS keeps the secret from students and teachers (only `is_admin()` and the service role can read app_settings, and no view or definer function returns it). The same value, however, signs approve/reject links (verifyActionToken), authorizes the cron and authorizes send-offer. It also sits in the database, in every pg_net request (`net.http_request_queue` holds the Authorization header until it is sent) and in database backups. The secret goes to whatever `app_settings.api_url` contains, so an admin session that is hijacked through XSS in admin.html can repoint api_url and collect it. Anyone holding the value can mint teacher-approval links. The committed default `secret123` is only inserted when the key is missing.
- Fix: Use a dedicated `WAITLIST_HOOK_SECRET` for the pg_net → /api/waitlist/send-offer call. Keep ADMIN_SECRET (HMAC for approval links) only in Vercel. Optionally move the stored secret to Supabase Vault and read it inside a SECURITY DEFINER function.

### SQL-09: Column guards are deny-lists, and live-only columns are unguarded
- Severity: Low
- Location: supabase/migrations/202610141800_phase1_db_lockdown.sql:230-235, 257-260, 278-280, 321-324; migration header line 59 (live drift acknowledged)
- Category: authz
- Confidence: medium
- Scenario: The guards list the columns clients may not change. The migration itself admits that live tables have columns not in the repo (teacher_profiles.location/badges; teacher_reviews.review_text is used by the dashboards but the repo schema has `comment`). Any live-only column on student_profiles, sessions or session_attendance, such as a credits, trial or recording column, can be written by its owner or teacher. To confirm, compare `supabase/tests/live_inventory.sql` block 7 against each guard.
- Fix: Rewrite the guards as allow-lists (see SQL-04) and add the live columns to schema files so the repo matches production.

### SQL-10: Other stale SQL files that are unsafe or misleading to re-run
- Severity: Low
- Location: supabase/schema.sql:288-294 (is_admin trusts `user_metadata.role`), 671-718 (definer views); supabase/SETUP_GUIDE.md:43-58 (tells a new environment to run schema.sql only); supabase/fix-rls-student-profiles.sql:14-55; supabase/waitlist-fill-system.sql:34-49, 159-163; supabase/add-availability-assignments.sql, add-exercise-results.sql, add-webhook-and-credits.sql
- Category: other
- Confidence: high
- Scenario: (a) A staging or new environment built from SETUP_GUIDE gets schema.sql's `is_admin()`, where any user becomes admin through `updateUser({data:{role:'admin'}})`, plus security-definer views that expose every enrollment and room URL. Re-running schema.sql on production fails at the first `create trigger` and is rolled back, so production itself is safe. (b) Re-running fix-rls-student-profiles.sql drops the Phase 1 student_profiles policies, and admin and teacher reads of students stop working. (c) Re-running waitlist-fill-system.sql succeeds and recreates `increment_enrollment` and `process_expired_offers` as SECURITY DEFINER without `search_path` (grants are kept). It also drops the `status in ('open','full')` check from increment_enrollment, so a closed or completed cohort can be incremented. (d) The add-*.sql files would fail on name conflicts with Phase 1 policies and roll back if run as one batch. Run statement by statement, they would recreate the old permissive policies: any teacher could insert feedback for any student, students could review teachers who never taught them, and students could submit to assignments outside their cohort.
- Fix: Move every pre-migration SQL file into `supabase/archive/` with a DO-NOT-RUN header. Generate a fresh `schema.sql` from production (`supabase db dump`) and update SETUP_GUIDE to apply `migrations/` in order.

### SQL-11: `sync_teacher_rating` does not recompute the old teacher when a review is moved
- Severity: Low
- Location: supabase/add-availability-assignments.sql:286-303; migrations/202610141800_phase1_db_lockdown.sql:566-568
- Category: bug
- Confidence: high
- Scenario: `reviews_update` lets a student change `teacher_id` on their review to another teacher who taught them. The trigger recalculates only `coalesce(new.teacher_id, old.teacher_id)`, which is the new teacher, so the old teacher keeps a rating that still includes the moved review.
- Fix: On UPDATE, recompute both `old.teacher_id` and `new.teacher_id`, or forbid changing teacher_id in a guard trigger.

### SQL-12: Session file uploads have no MIME/extension restriction and no owner delete
- Severity: Low
- Location: supabase/migrations/202610141800_phase1_db_lockdown.sql:763-785
- Category: other
- Confidence: medium
- Scenario: `session-notes-pdfs` sets no `allowed_mime_types`. Any student in a session can upload `.html` or `.svg` files to `shared/<session>/`, and classmates and the teacher can read them. Opened through a signed URL, active content runs on the Supabase storage origin. That is not alimun.com, so no session theft, but it allows phishing pages hosted on a trusted-looking link. Uploaders also cannot delete their own files, because there is no DELETE or UPDATE policy for non-admins. To confirm, check whether the Supabase storage CDN serves `text/html` inline for this project.
- Fix: Set `allowed_mime_types` to the expected list (pdf, png, jpeg, docx, mp3/m4a) on the bucket. Optionally add an owner-only delete policy (`owner = auth.uid()`).

### SQL-13: Teachers can read their students' Stripe identifiers (already known)
- Severity: Info
- Location: supabase/migrations/202610141800_phase1_db_lockdown.sql:429-430; teacher-dashboard.html:2089-2090, 2849-2850
- Category: info-leak
- Confidence: high
- Scenario: `student_profiles_select` grants teachers whole rows, including stripe_customer_id, stripe_subscription_id and subscription status. This is already listed in docs/phase-1-db-lockdown.md. Repeated here because RLS cannot restrict columns.
- Fix: Expose a `teacher_students` view or definer function that returns only id, full_name, level, language and goal_track, and drop `teaches_student(id)` from the table policy.

### SQL-14: tests/rls.sql coverage gaps
- Severity: Low
- Location: supabase/tests/rls.sql:139-264
- Category: other
- Confidence: high
- Scenario: The suite has none of these checks, so the issues above would pass CI: (1) a new user inserting a student_profiles row with `tier='private'` or stripe fields (SQL-06); (2) a teacher updating sessions_delivered, badges or experience_years (SQL-04), or a student inserting their own teacher_profiles row with status `approved`; (3) any suspended-teacher actor (SQL-03); (4) a student updating a graded submission, a teacher editing submission_text, a teacher grading another teacher's submission, or a student submitting to another cohort's assignment; (5) exercise_results insert for another student, session_credits insert by a student, teacher_availability write for another teacher, a reviews update moving teacher_id, cross-teacher student_feedback reads; (6) a student updating their own waitlist row (offered_at), deleting another student's waitlist row, or joining a waitlist without a subscription; (7) storage SELECT of another session's files, uploads to the legacy `session-notes` bucket, `cohort_<id>/` reads by students; (8) a student reading `v_ai_spend_daily`, `v_upcoming_sessions` or `v_active_enrollments` for others (only an admin read of one view is tested); (9) an automated check that the set of functions executable by `authenticated`/`anon` equals the expected list (verify query (c) in the migration is manual); (10) the signup trigger when `raw_app_meta_data.role` is pre-set; (11) attendance UPDATE by a student on a classmate's row. In addition, `denied` accepts "zero rows", so a write blocked by RLS filtering and a write blocked by the guard look the same.
- Fix: Add these cases. Add an `expect='error'` mode for guard checks, and a final assertion that compares `has_function_privilege` results against an explicit allow-list.

## Coverage

| File | Lines read |
|---|---|
| supabase/migrations/202610141800_phase1_db_lockdown.sql | 1-838 (all) |
| supabase/schema.sql | 1-731 (all) |
| supabase/2026-09-security-hardening.sql | 1-385 (all) |
| supabase/2026-10-14_admin_role_hardening.sql | 1-71 (all) |
| supabase/waitlist-fill-system.sql | 1-234 (all) |
| supabase/add-availability-assignments.sql | 1-307 (all) |
| supabase/add-exercise-results.sql | 1-57 (all) |
| supabase/add-webhook-and-credits.sql | 1-74 (all) |
| supabase/fix-rls-student-profiles.sql | 1-66 (all) |
| supabase/fix-tier-constraint.sql | 1-50 (all) |
| supabase/generate-sessions-function.sql | 1-52 (all) |
| supabase/bulk-approve-teachers.sql | 1-8 (all) |
| supabase/cleanup-test-data.sql | 1-33 (all) |
| supabase/maintenance/remove_test_data.sql | 1-70 (all) |
| supabase/seed.sql | 1-330 in full; 330-581 skimmed (sessions/notes/attendance/payout data literals, no DDL or auth) |
| supabase/seed-test-video-session.js | 1-148 (all) |
| supabase/setup-stripe-prices.js | 1-66 (all) |
| supabase/tests/rls.sql | 1-279 (all) |
| supabase/tests/supabase_shim.sql | 1-68 (all) |
| supabase/tests/run-local.sh | 1-38 (all) |
| supabase/tests/live_inventory.sql | 1-81 (all) |
| supabase/DASHBOARD_GUIDE.md | 1-42 (all) |
| supabase/SETUP_GUIDE.md | grep for SQL/secret/role/admin lines (43-58, 36-39, 110, 230-233, 401-402, 449-472) |

Cross-checked callers: api/enroll.js:17-18, 90-250; api/webhooks/stripe.js:270-296, 375-430; api/stripe.js:160-180; api/admin/teacher.js:120-160, 360-380, 480-500, 627-643; api/waitlist/send-offer.js:25-60; signup.html:700-772, 901-910; student-dashboard.html (queries listed below); teacher-dashboard.html:2040, 2089, 3131-3149.

## RLS assumptions

SQL-relevant client calls checked against the Phase 1 policies. The dashboard reviewers own the full tables.

| query location | table/rpc | operation | what it needs | allowed under Phase 1? |
|---|---|---|---|---|
| signup.html:702, 764, 903 | student_profiles | insert own row (tier chosen by client) | insert with user_id = auth.uid() | Yes (tier not reset, see SQL-06) |
| signup.html:1085 | teacher_profiles | insert own row | insert with user_id = auth.uid(); guard forces pending/22/community/0 | Yes |
| student-dashboard.html:5142 | student_profiles | update level | own row; level not guarded | Yes |
| student-dashboard.html:3286, 3573, 5943 | cohorts + teacher_public() | select with embed | cohort visible (open/full/own/enrolled); EXECUTE teacher_public + SELECT teachers_public | Yes |
| student-dashboard.html:3177, 3376 | sessions (+ session_notes) | select | is_enrolled_in(cohort); published notes only | Yes |
| student-dashboard.html:6098, 6112 | cohort_waitlist | select / insert own | student_id = my_student_profile_id() | Yes (no eligibility check, see SQL-07) |
| student-dashboard.html:6224 | cohort_waitlist + cohorts embed | select own offer | own row; cohort embed needs cohort visible (full cohorts visible) | Yes |
| student-dashboard.html:6349 | teacher_reviews + student_profiles embed | select | reviews using(true); embedded student names only for own row | Partially: other reviewers' names come back null ("Anonymous") |
| student-dashboard.html:6473 | teacher_reviews | insert (column `review_text`) | was_taught_by(teacher_id) | Yes for the policy; repo schema has `comment`, not `review_text` (live drift, SQL-09) |
| student-dashboard.html:6997 | session_attendance | update left_at | own row; guard allows only left_at | Yes |
| student-dashboard.html | rpc cohort_classmates | execute | EXECUTE granted; enrolled/teacher/admin check | Yes |
| teacher-dashboard.html:2040 | teacher_profiles | update full_name, location | own row; columns not guarded | Yes |
| teacher-dashboard.html:2089, 2849 | student_profiles | select * | teaches_student(id) (active enrollment) | Yes (stripe_* exposed, SQL-13) |
| teacher-dashboard.html:3131 | session_notes | insert | teaches_session; guard nulls pdf_url/published_at | Yes |
| teacher-dashboard.html:3148 | sessions | update status | teaches_cohort; guard allows status | Yes |
| (pg trigger) waitlist-fill-system.sql:103-149 | app_settings via process_opened_spot (invoker) | select | runs as service_role or admin (only they change enrolled_count) | Yes |
