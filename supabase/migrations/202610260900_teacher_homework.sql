-- ============================================================
--  Teacher dashboard, part 4: homework (docs/DASHBOARD_PLAN.md, step 15). Owner's yes, 26 Oct 2026.
--  1. 1:1 students: a teacher also teaches the students who have a 1:1 (booked or done) with them, so the
--     teacher can see their progress, write notes and set them homework (teaches_student).
--  2. Homework for one student: assignments.student_id (optional). Set, only that student and the teacher
--     see it. A 1:1-only student's homework has no class (cohort_id may be empty when student_id is set).
--  3. Homework from material: assignments.material (optional) {kind: book|lib|mock, key, title}: a course
--     book lesson, a library piece or a mock test paper. The student finishes it in their dashboard and
--     complete_material_homework() records it as handed in and marked with the score of their practice
--     (practice_progress), so there is nothing for the teacher to mark.
--  4. Teachers may change the title, task, due date and minimum words of their homework, nothing else,
--     and delete it only while nobody has handed it in.
--  No data is changed. Idempotent. Ends with a verify query.
-- ============================================================

-- 1. Who a teacher teaches
create or replace function public.teaches_student(p_student_id uuid)
returns boolean language sql stable security definer set search_path to '' as $$
  select exists (
    select 1 from public.enrollments e
    join public.cohorts c on c.id = e.cohort_id
    join public.teacher_profiles tp on tp.id = c.teacher_id
    where e.student_id = p_student_id and e.status = 'active'
      and tp.user_id = auth.uid() and tp.status = 'approved'
  ) or exists (
    select 1 from public.one_on_one_bookings b
    join public.teacher_profiles tp on tp.id = b.teacher_id
    where b.student_id = p_student_id and b.status in ('booked', 'completed')
      and tp.user_id = auth.uid() and tp.status = 'approved'
  );
$$;

-- 2 and 3. New columns
alter table public.assignments add column if not exists student_id uuid references public.student_profiles(id) on delete cascade;
alter table public.assignments add column if not exists material jsonb;
alter table public.assignments alter column cohort_id drop not null;
do $$ begin
  if not exists (select 1 from pg_constraint where conname = 'assignments_target_chk') then
    alter table public.assignments add constraint assignments_target_chk check (cohort_id is not null or student_id is not null);
  end if;
  if not exists (select 1 from pg_constraint where conname = 'assignments_material_chk') then
    alter table public.assignments add constraint assignments_material_chk check (
      material is null or (
        jsonb_typeof(material) = 'object' and pg_column_size(material) <= 2048
        and material->>'kind' in ('book', 'lib', 'mock')
        and (material->>'key') like (material->>'kind') || ':%'
      ));
  end if;
end $$;
create index if not exists assignments_student on public.assignments (student_id) where student_id is not null;

-- Who sees homework, and who may set it
alter policy assignments_select on public.assignments
  using (public.is_admin()
      or teacher_id = public.my_teacher_profile_id()
      or (student_id is null and public.is_enrolled_in(cohort_id))
      or (student_id is not null and student_id = public.my_student_profile_id()));
alter policy assignments_write on public.assignments
  using (public.is_admin() or teacher_id = public.my_teacher_profile_id())
  with check (public.is_admin() or (
    teacher_id = public.my_teacher_profile_id()
    and (cohort_id is null or public.teaches_cohort(cohort_id))
    and (student_id is null or public.teaches_student(student_id))));

-- A student hands in homework set for their class or for them
alter policy submissions_insert on public.assignment_submissions
  with check (public.is_admin() or (
    student_id = public.my_student_profile_id()
    and exists (select 1 from public.assignments a where a.id = assignment_submissions.assignment_id
      and ((a.student_id is null and public.is_enrolled_in(a.cohort_id)) or a.student_id = public.my_student_profile_id()))));

-- 4. What a teacher may change, and when homework may be deleted
create or replace function public.guard_assignment_changes() returns trigger
language plpgsql set search_path = '' as $$
begin
  if not public.is_client_write() then return coalesce(new, old); end if;
  if tg_op = 'DELETE' then
    if exists (select 1 from public.assignment_submissions s where s.assignment_id = old.id) then
      raise exception 'homework someone has handed in cannot be deleted' using errcode = '42501';
    end if;
    return old;
  end if;
  if tg_op = 'UPDATE' and (new.cohort_id is distinct from old.cohort_id or new.student_id is distinct from old.student_id
     or new.teacher_id is distinct from old.teacher_id or new.type is distinct from old.type
     or new.material is distinct from old.material or new.created_at is distinct from old.created_at) then
    raise exception 'only the title, task, due date and minimum words can be changed' using errcode = '42501';
  end if;
  return new;
end;
$$;
revoke all on function public.guard_assignment_changes() from public, anon, authenticated;
drop trigger if exists trg_guard_assignment_changes on public.assignments;
create trigger trg_guard_assignment_changes before update or delete on public.assignments
  for each row execute function public.guard_assignment_changes();

-- 3. Homework from material, recorded when the student has finished it
create or replace function public.complete_material_homework(p_assignment uuid) returns jsonb
language plpgsql security definer set search_path = '' as $$
declare
  me uuid := public.my_student_profile_id();
  a public.assignments%rowtype;
  pp record;
begin
  if me is null then raise exception 'not a student' using errcode = '42501'; end if;
  select * into a from public.assignments x where x.id = p_assignment and x.material is not null
    and ((x.student_id is null and public.is_enrolled_in(x.cohort_id)) or x.student_id = me);
  if not found then raise exception 'not allowed' using errcode = '42501'; end if;
  select done, graded_score into pp from public.practice_progress where student_id = me and ex_key = a.material->>'key';
  if not found or not pp.done then return jsonb_build_object('done', false); end if;
  insert into public.assignment_submissions (assignment_id, student_id, submission_text, status, score, submitted_at, graded_at)
    values (a.id, me, '', 'graded', pp.graded_score, now(), now())
    on conflict (assignment_id, student_id) do nothing;
  return jsonb_build_object('done', true, 'score', pp.graded_score);
end;
$$;
revoke all on function public.complete_material_homework(uuid) from public, anon;
grant execute on function public.complete_material_homework(uuid) to authenticated;

-- Verify
select
  (select count(*) from information_schema.columns where table_name = 'assignments' and column_name in ('student_id', 'material')) as new_columns,
  (select is_nullable from information_schema.columns where table_name = 'assignments' and column_name = 'cohort_id') as cohort_optional,
  (select count(*) from pg_trigger where tgname = 'trg_guard_assignment_changes') as guard,
  (select count(*) from pg_proc where proname = 'complete_material_homework') as complete_fn,
  (select position('one_on_one_bookings' in prosrc) > 0 from pg_proc where proname = 'teaches_student') as oto_taught;
