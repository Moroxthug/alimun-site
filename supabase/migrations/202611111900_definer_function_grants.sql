-- Tighten EXECUTE on SECURITY DEFINER functions (Supabase security advisor, 11 Nov 2026).
--
-- Why: seven definer functions created after the phase 1 lockdown kept Postgres's built-in
-- "EXECUTE to PUBLIC", so anon could call them through /rest/v1/rpc. Two service-role-only
-- functions and one internal helper were also callable by any signed-in user.
--
-- What stays exposed on purpose (checked 11 Nov 2026):
--   anon:          public_teacher_rows()   -- behind the security_invoker view teachers_public
--                                             (approved teachers' public fields only).
--   authenticated: RLS helpers used in policies (is_admin, my_*_profile_id, is_enrolled_in,
--                  teaches_*, attends_session, was_taught_by, can_read_set, can_see_thread,
--                  can_use_session_files, can_join_waitlist, session_cohort) -- policies run as
--                  the caller, so the caller needs EXECUTE; and dashboard RPCs that check
--                  is_admin() or the caller's own rows inside (admin_activity_overview,
--                  admin_activity_timeline, admin_signup_sources, cohort_classmates,
--                  complete_material_homework, my_threads, open_thread, set_cohort_lesson_start,
--                  set_session_lesson, submit_welcome_poll).
--
-- Idempotent: REVOKE of a privilege that is not held is a no-op.

-- 1. Trigger functions: never callable as RPCs. Triggers still fire (EXECUTE is only checked
--    when a trigger is created).
revoke execute on function public.cohorts_assign_lessons()  from public, anon, authenticated;
revoke execute on function public.sessions_assign_lessons() from public, anon, authenticated;
revoke execute on function public.messages_before_insert()  from public, anon, authenticated;
revoke execute on function public.messages_after_insert()   from public, anon, authenticated;

-- 2. cohort_course: only called inside set_session_lesson (definer, runs as owner).
revoke execute on function public.cohort_course(uuid) from public, anon, authenticated;

-- 3. session_cohort: used by session_boards / session_board_work policies for signed-in users.
--    Signed-out visitors have no use for it.
revoke execute on function public.session_cohort(uuid) from public, anon;
grant  execute on function public.session_cohort(uuid) to authenticated, service_role;

-- 4. Called only by api/campaigns.js and api/cron-reminders.js with the service role key.
revoke execute on function public.campaign_audience(jsonb) from public, anon, authenticated;
revoke execute on function public.reminders_due()          from public, anon, authenticated;

-- 5. Stop new functions in the future from getting EXECUTE to PUBLIC by default. Functions
--    the dashboards call must be granted explicitly (as the phase 1 lockdown already does).
alter default privileges for role postgres revoke execute on functions from public;

-- Verify: anon should list only public_teacher_rows; authenticated should not list the
-- trigger functions, cohort_course, campaign_audience or reminders_due.
select p.proname,
       has_function_privilege('anon', p.oid, 'execute')          as anon,
       has_function_privilege('authenticated', p.oid, 'execute') as authenticated
from pg_proc p join pg_namespace n on n.oid = p.pronamespace
where n.nspname = 'public' and p.prosecdef
  and (has_function_privilege('anon', p.oid, 'execute') or has_function_privilege('authenticated', p.oid, 'execute'))
order by anon desc, p.proname;
