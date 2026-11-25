-- A finished place keeps its class's homework and notes (owner, 25 Nov 2026: "fix the free-class places homework check").
-- A place marked 'completed' (a free first class that is over, or a class that ended) used to lose the class's
-- homework, notes, board and dates at once, because every read rule asked for an 'active' place. Now:
--   was_in_cohort(cohort)   = the learner has an active or completed place in that class
--   was_in_session(session) = the same for the class of that date
-- are used for reading the class's dates, homework, notes, shared board and teacher sets, and for handing in that
-- class's homework. Chat, classmates, opening threads, joining a class and session files still need an active place
-- (is_enrolled_in / attends_session are unchanged). Cancelled places get nothing, as before. Idempotent.

create or replace function public.was_in_cohort(p_cohort_id uuid)
returns boolean language sql stable security definer set search_path to '' as $$
  select exists (
    select 1 from public.enrollments e
    join public.student_profiles sp on sp.id = e.student_id
    where e.cohort_id = p_cohort_id and e.status in ('active', 'completed') and sp.user_id = auth.uid()
  );
$$;

create or replace function public.was_in_session(p_session_id uuid)
returns boolean language sql stable security definer set search_path to '' as $$
  select exists (
    select 1 from public.sessions s
    join public.enrollments e on e.cohort_id = s.cohort_id and e.status in ('active', 'completed')
    join public.student_profiles sp on sp.id = e.student_id
    where s.id = p_session_id and sp.user_id = auth.uid()
  );
$$;

revoke all on function public.was_in_cohort(uuid) from public, anon;
revoke all on function public.was_in_session(uuid) from public, anon;
grant execute on function public.was_in_cohort(uuid) to authenticated, service_role;
grant execute on function public.was_in_session(uuid) to authenticated, service_role;

alter policy assignments_select on public.assignments using (
  is_admin() or (teacher_id = my_teacher_profile_id())
  or ((student_id is null) and was_in_cohort(cohort_id))
  or ((student_id is not null) and (student_id = my_student_profile_id())));

alter policy submissions_insert on public.assignment_submissions with check (
  is_admin() or ((student_id = my_student_profile_id()) and exists (
    select 1 from public.assignments a
    where a.id = assignment_submissions.assignment_id
      and (((a.student_id is null) and was_in_cohort(a.cohort_id)) or (a.student_id = my_student_profile_id())))));

alter policy sessions_select on public.sessions using (
  is_admin() or teaches_cohort(cohort_id) or was_in_cohort(cohort_id));

alter policy session_notes_select on public.session_notes using (
  is_admin() or teaches_session(session_id) or ((published_at is not null) and was_in_session(session_id)));

alter policy session_boards_read on public.session_boards using (
  is_admin() or teaches_cohort(session_cohort(session_id)) or (shared and was_in_cohort(session_cohort(session_id))));

alter policy teacher_set_targets_select on public.teacher_set_targets using (
  is_admin()
  or exists (select 1 from public.teacher_sets s where s.id = teacher_set_targets.set_id and s.teacher_id = my_teacher_profile_id())
  or ((cohort_id is not null) and was_in_cohort(cohort_id))
  or ((student_id is not null) and (student_id = my_student_profile_id())));

create or replace function public.can_read_set(p_set uuid)
returns boolean language sql stable security definer set search_path to '' as $$
  select public.is_admin()
    or exists (select 1 from public.teacher_sets s where s.id = p_set and s.teacher_id = public.my_teacher_profile_id())
    or exists (select 1 from public.teacher_set_targets x where x.set_id = p_set
      and ((x.cohort_id is not null and public.was_in_cohort(x.cohort_id)) or (x.student_id is not null and x.student_id = public.my_student_profile_id())));
$$;

create or replace function public.complete_material_homework(p_assignment uuid)
returns jsonb language plpgsql security definer set search_path to '' as $$
declare
  me uuid := public.my_student_profile_id();
  a public.assignments%rowtype;
  pp record;
begin
  if me is null then raise exception 'not a student' using errcode = '42501'; end if;
  select * into a from public.assignments x where x.id = p_assignment and x.material is not null
    and ((x.student_id is null and public.was_in_cohort(x.cohort_id)) or x.student_id = me);
  if not found then raise exception 'not allowed' using errcode = '42501'; end if;
  select done, graded_score into pp from public.practice_progress where student_id = me and ex_key = a.material->>'key';
  if not found or not pp.done then return jsonb_build_object('done', false); end if;
  insert into public.assignment_submissions (assignment_id, student_id, submission_text, status, score, submitted_at, graded_at)
    values (a.id, me, '', 'graded', pp.graded_score, now(), now())
    on conflict (assignment_id, student_id) do nothing;
  return jsonb_build_object('done', true, 'score', pp.graded_score);
end;
$$;

-- Verify: the six rules use the new functions, and only signed-in users and the service role may run them
select policyname, coalesce(qual, '') || coalesce(with_check, '') ~ 'was_in_(cohort|session)' as uses_new_rule
from pg_policies where schemaname = 'public'
  and policyname in ('assignments_select', 'submissions_insert', 'sessions_select', 'session_notes_select', 'session_boards_read', 'teacher_set_targets_select')
union all
select 'anon may run was_in_cohort', has_function_privilege('anon', 'public.was_in_cohort(uuid)', 'execute');
