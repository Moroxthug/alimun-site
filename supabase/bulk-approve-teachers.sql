-- =============================================================
--  ALIMUN — Bulk Approval of Existing Teachers
--  One-time SQL script to approve all existing teachers
-- =============================================================

UPDATE public.teacher_profiles
SET status = 'approved'
WHERE status != 'approved';
