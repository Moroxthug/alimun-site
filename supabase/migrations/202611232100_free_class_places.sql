-- Free first class places (23 Nov 2026).
--
-- 1. enrollments.status may be 'completed': a place in a one-session free class whose date is over. It no longer
--    counts against uq_enrollments_one_active_per_student (one active place per learner), so a learner who took a
--    free class can sign up for the next one or for a paying class. The enrolled_count trigger ignores
--    active -> completed, so the teacher's past class still shows how many learners it had.
-- 2. public.recount_enrollment(cohort): sets cohorts.enrolled_count to the class's active and completed places.
--    The free class registration (api/_lib/launch.js) and room places (api/_lib/entitlements.js enrol/unenrol) call it
--    after every change, because inserts were never counted there (the teacher saw "0 students").
-- Idempotent.

do $$
begin
  alter table public.enrollments drop constraint if exists enrollments_status_check;
  alter table public.enrollments add constraint enrollments_status_check
    check (status = any (array['active'::text, 'cancelled'::text, 'completed'::text]));
end $$;

create or replace function public.recount_enrollment(p_cohort uuid)
returns int language plpgsql security definer set search_path = '' as $$
declare n int;
begin
  -- Lock the class first so two sign-ups at the same moment count one after the other.
  perform 1 from public.cohorts where id = p_cohort for update;
  update public.cohorts c
  set enrolled_count = (select count(*) from public.enrollments e
                        where e.cohort_id = p_cohort and e.status in ('active', 'completed'))
  where c.id = p_cohort
  returning c.enrolled_count into n;
  return n;
end;
$$;

revoke all on function public.recount_enrollment(uuid) from public, anon, authenticated;
grant execute on function public.recount_enrollment(uuid) to service_role;

-- Verify: the constraint allows 'completed'; the function exists and only the server may run it.
select pg_get_constraintdef(oid) as status_check from pg_constraint
where conrelid = 'public.enrollments'::regclass and conname = 'enrollments_status_check';
select proname, has_function_privilege('authenticated', oid, 'execute') as client_can_run,
       has_function_privilege('service_role', oid, 'execute') as server_can_run
from pg_proc where proname = 'recount_enrollment' and pronamespace = 'public'::regnamespace;
