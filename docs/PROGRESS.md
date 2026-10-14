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
