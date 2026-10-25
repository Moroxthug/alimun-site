-- ============================================================
--  Teacher dashboard, part 2 (docs/DASHBOARD_PLAN.md, step 15). Owner's yes, 25 Oct 2026.
--  Class dates (sessions): guard_session_columns already lets a browser change only the status;
--  a teacher could still mark their class cancelled or completed directly. Nothing in the browser
--  does that: the server (join-session, notes publishing, cron, admin operations) changes status
--  with the service role. The teacher's update rule goes.
--  Class notes (session_notes): already protected by guard_session_note_columns (published time and
--  PDF link only from the server). A second trigger added on 25 Oct 2026 did the same and is removed.
--  No data is changed. Idempotent. Ends with a verify query.
-- ============================================================

drop policy if exists sessions_update_teacher on public.sessions;

drop trigger if exists trg_guard_session_notes_publish on public.session_notes;
drop function if exists public.guard_session_notes_publish();

-- Verify: no update rule for teachers on sessions; the original notes guard alone
select
  (select count(*) from pg_policies where schemaname = 'public' and tablename = 'sessions' and policyname = 'sessions_update_teacher') as teacher_update_policy,
  (select string_agg(tgname, ', ') from pg_trigger where tgrelid = 'public.session_notes'::regclass and not tgisinternal) as notes_triggers;
