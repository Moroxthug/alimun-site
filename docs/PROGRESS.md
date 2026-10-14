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
