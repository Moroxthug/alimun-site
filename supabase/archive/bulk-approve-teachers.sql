-- ============================================================
--  DO NOT RUN — superseded by migrations/202610141800_phase1_db_lockdown.sql
--  and migrations/202610142200_phase2_audit_fixes.sql.
--  One-off, already run. Re-running it approves every PENDING and
--  SUSPENDED teacher (including seed/test accounts) and makes them
--  public. Approve teachers one by one from admin.html. (SQL-05)
--  Kept as history only.
-- ============================================================

-- =============================================================
--  ALIMUN — Bulk Approval of Existing Teachers
--  One-time SQL script to approve all existing teachers
-- =============================================================

UPDATE public.teacher_profiles
SET status = 'approved'
WHERE status != 'approved';
