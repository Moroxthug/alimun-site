# Phase 1 — Database lockdown: plan of changes and owner steps

_Written 14 Oct 2026. Nothing in this file has been applied to production yet._

This cloud session had **no Supabase access** (no connector, no `SUPABASE_*` secrets), so the live database could not be queried. The migration is written to work whatever the live state is: it drops and recreates every policy on the app tables instead of patching individual ones. It was tested on a local Postgres 16 rebuilt from the repo's SQL history plus a stand-in for Supabase's `auth`/`storage` schemas.

## Files

| File | What it is |
|---|---|
| `supabase/tests/live_inventory.sql` | Read-only snapshot of the live DB: tables, row counts, policies, function grants, triggers, views, columns, settings (secrets masked), buckets, role counts, seed-data candidates. Run before and after. |
| `supabase/migrations/202610141800_phase1_db_lockdown.sql` | The migration. One transaction, idempotent, ends with verify queries. |
| `supabase/tests/rls.sql` | 105 RLS checks (anon, student, teacher, pending teacher, forged admin, admin, signup trigger). Runs in a transaction that is rolled back, so it is safe on production. It fails loudly if any check fails. |
| `supabase/tests/run-local.sh`, `supabase_shim.sql` | Rebuild a local test DB, apply the migrations twice (idempotency), run `rls.sql`. |
| `supabase/maintenance/remove_test_data.sql` | Seed-data cleanup: preview, then option A (suspend + close) or B (delete). Manual only. |

Local results: before the migration, 51 of 105 checks fail. After it, all 105 pass, and a second run of the migration also succeeds.

## What the migration changes

1. **Pre-flight.** Aborts if no account has `app_metadata.role = 'admin'`, so the admin cannot be locked out.
2. **Helpers.** `my_student_profile_id`, `my_teacher_profile_id`, `is_enrolled_in`, `teaches_cohort`, `teaches_student`, `teaches_session`, `attends_session`, `was_taught_by`, `can_use_session_files`, `cohort_classmates`. They are SECURITY DEFINER with `search_path = ''`, which removes RLS recursion. Each one answers only about the caller (`auth.uid()`), so calling it with arbitrary IDs leaks nothing.
3. **Signup trigger** on `auth.users`. It copies `user_metadata.role` (student/teacher only) into `app_metadata` and never overwrites an existing role. Existing accounts without an app role are backfilled. A self-granted `user_metadata.role = admin` is reset to student.
4. **Column guards** (triggers). Admins, the service role and SQL bypass them.
   - `student_profiles`: a student cannot change `tier`, `stripe_*` or `enrolled_cohort_id`.
   - `cohorts`: `enrolled_count`, `max_students`, `tier` and `teacher_id` are server-only.
   - `sessions`: a teacher may change only `status`. Room URLs and times are server/admin only.
   - `session_notes`: `pdf_url` and `published_at` are set only by `/api/generate-notes-pdf`.
   - `session_attendance`: a student can set only `left_at`.
   - `cohort_waitlist`: a client insert cannot pre-set `offered_at` or `offer_expires_at`. Before this, a student could forge a waitlist offer and join a full class.
   - `assignment_submissions`: students cannot grade, and teachers cannot edit a student's text.
5. **Policies.** Every policy on 19 app tables is dropped and recreated, all `to authenticated`. anon gets none.
   - **Enrollments:** admin-only writes. `/api/enroll` (service role) covers join, switch, waitlist claim and leave.
   - **Cohorts:** admin-only writes. Teachers create cohorts through `/api/create-cohort`.
   - **Sessions:** insert and delete are admin-only. Teachers can update the sessions they teach.
   - **Attendance:** rows are inserted by `/api/join-session`, not by students.
   - **Teacher availability:** visible only to the teacher and admin.
6. **Public teacher data.** `teacher_profiles` is now readable only by admin and the teacher themself; `hourly_rate`, `user_id`, `tier_level` and `status` no longer reach students.
   - `public.teachers_public` (security_invoker view) shows approved teachers only, with these columns: id, full_name, languages, specialty, bio, rating, experience_years, sessions_delivered, location.
   - The computed relationship `teacher_public(cohorts | student_feedback)` lets dashboards embed it.
   - The student dashboard now uses `teacher_profiles:teacher_public(...)`, so the response keys are unchanged.
7. **Classmates.** `cohort_classmates(cohort_id)` returns names only. Before this, the chat member list read classmates' full rows, Stripe IDs included.
8. **Views.** `ai_usage` and `v_ai_spend_daily` are created. `v_active_enrollments`, `v_upcoming_sessions` and `v_ai_spend_daily` are all `security_invoker = on`.
9. **Function EXECUTE.**
   - Revoked from `public`, `anon` and `authenticated` on every public function, including `increment_enrollment`, `decrement_enrollment`, `generate_cohort_sessions`, `process_expired_offers`, `sync_teacher_rating` and the trigger functions.
   - Granted back to `authenticated` only for the helpers above.
   - Functions that exist only in the live database and are still used by a policy the migration does not rewrite (for example, a storage policy) keep authenticated EXECUTE. A NOTICE names each one.
   - Future functions get no implicit client EXECUTE.
10. **Table grants.**
    - anon loses everything except `SELECT` on `teachers_public`.
    - authenticated loses `TRUNCATE`, `REFERENCES` and `TRIGGER`.
    - Default privileges match, so new tables get the same treatment.
11. **search_path.**
    - Functions the migration rewrites get `''`.
    - All other public functions still without a pinned path get `pg_catalog, public, pg_temp`. Their live bodies are not in the repo, so `''` could break them.
12. **Settings and storage.**
    - `app_settings.api_url` is set to `https://alimun.com`, and `pg_net` is enabled if available.
    - A private bucket `session-notes-pdfs` (10 MB limit) is created.
    - Storage policies: clients can read and upload only under `shared/<session_id>/` for sessions they teach or attend. Generated PDFs are written by the service role and served through signed URLs.

Not touched: user data (apart from the role metadata in step 3), `sync_cohort_enrolled_count`, the waitlist trigger, and the Stripe/Daily code.

## How to apply (order matters)

1. **Inventory.** Run `supabase/tests/live_inventory.sql` in the SQL Editor. Check two things:
   - Query 9 lists `bchysfpol@gmail.com` as the admin.
   - Query 8 shows whether `admin_secret` is still the 9-character default `secret123`.
2. **Migration.** Run `supabase/migrations/202610141800_phase1_db_lockdown.sql` as one script, and read the verify result sets at the end.
3. **Tests.** Run `supabase/tests/rls.sql`. Expect `failed = 0`. Every change it makes is rolled back.
4. **Advisor.** Supabase → Advisors → Security should show 0 errors. Expected warnings:
   - `public_teacher_rows()` is a SECURITY DEFINER function executable by anon/authenticated. This is intended: it returns approved teachers' public columns only.
   - Leaked-password protection, until the owner step below is done.
5. **Merge the PR.** The dashboards embed `teacher_public` and call `cohort_classmates`, which exist only after step 2.
   - If the PR is merged first, class discovery on the student dashboard errors (PGRST200, seen in a local preview against production).
   - If the migration runs first and the PR is merged later, the old dashboard degrades in the meantime but does not crash: teacher names are blank and the member list shows only the student.
6. **Smoke test.** Sign in as a student, a teacher and the admin, then run the production smoke test in `docs/IMPLEMENTATION_PLAN.md` §5.

**Rollback.** The migration runs in one transaction, so a failed run changes nothing. To undo it after a successful run, restore from Supabase's daily backup or point-in-time recovery. The previous policies are recorded in the `live_inventory.sql` output from step 1, so keep that output.

## Owner steps [OWNER]

1. **Apply it.** Run steps 1–4 above, or connect the Supabase MCP to a cloud session and have it run them. Paste the inventory and verify output back into the session if anything looks off.
2. **Test data (item 7).** Run STEP 1 of `supabase/maintenance/remove_test_data.sql` and check the list. Then choose:
   - **A, suspend + close:** reversible. Recommended until you are sure.
   - **B, delete:** irreversible. Needs your explicit yes.
   Nothing is deleted until you choose.
3. **Auth settings.** In Supabase → Authentication:
   - Enable **leaked-password protection**.
   - Decide on **email confirmation**. If you turn it on, the signup page's profile insert runs without a session and will fail. Profile creation would then have to move to the server, which is Phase 3 work. Leave it off until then.
4. **`admin_secret`.** If the inventory shows the default, set `app_settings.admin_secret` to the same value as Vercel's `ADMIN_SECRET`:
   ```sql
   update public.app_settings set value = '<ADMIN_SECRET>' where key = 'admin_secret';
   ```
   Until they match, waitlist offer emails are rejected with 401.
5. **Vercel → Environment Variables** (Production and Preview). Set or confirm:
   - `CRON_SECRET`
   - `ADMIN_SECRET`
   - `RESEND_API_KEY`
   - `EMAIL_FROM_ADDRESS`
   - one AI key
   - `AI_DAILY_CALL_CAP`
   - `AI_DAILY_BUDGET_USD`

   Delete the dead `STRIPE_PRICE_ONEONONE_SESSION`, `STRIPE_PRICE_CERTIFICATE`, `*_AUD` and `*_MAD` entries. This session could not read Vercel, so it does not know which are missing.
6. **Optional access for future sessions:** add `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` and `SUPABASE_ACCESS_TOKEN` to the cloud environment, or attach the Supabase connector, so a later session can run the inventory and tests itself.

## Found while doing this, left for Phase 2/3

- **XSS:** the classroom file upload inserts `file.name` into `innerHTML` without escaping (`student-dashboard.html` `uploadClassroomFile`, and the same in `teacher-dashboard.html`).
- **Teachers see Stripe IDs:** the teacher dashboard selects `*` from its students' `student_profiles`, which includes their `stripe_*` columns. RLS allows the rows; narrowing the columns is a client change.
- **`user_metadata.role` fallbacks:** signup, the student and teacher dashboards and `js/supabase/config.js` fall back to `user_metadata.role` for routing only. Every account will have an `app_metadata.role` after the backfill.
- **`/api/generate-notes-pdf` 500 (item 10):** the migration creates the bucket it uploads to, but the reported failure is `FUNCTION_INVOCATION_FAILED`, which happens before any upload. It is not diagnosed here; that is Phase 3 work.
- **Dead helpers:** the query helpers in `js/supabase/config.js` are unused.
