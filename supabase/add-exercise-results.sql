-- =============================================================
--  ALIMUN — Migration: exercise_results
--  Stores every graded practice-exercise completion so teacher
--  dashboards can show real per-student / per-skill analytics.
--  Run AFTER schema.sql and add-availability-assignments.sql.
-- =============================================================

create table if not exists public.exercise_results (
  id           uuid primary key default uuid_generate_v4(),
  student_id   uuid not null references public.student_profiles(id) on delete cascade,
  category     text not null
                 check (category in ('grammar','vocabulary','listening','speaking','writing','homework','assessment')),
  ex_type      text,
  title        text,
  score        int not null check (score between 0 and 100),
  created_at   timestamptz not null default now()
);

create index if not exists idx_exercise_results_student
  on public.exercise_results(student_id, created_at desc);

alter table public.exercise_results enable row level security;

create policy "exresults_select"
  on public.exercise_results for select
  using (
    public.is_admin()
    or exists ( -- the student themself
      select 1 from public.student_profiles sp
      where sp.id = exercise_results.student_id and sp.user_id = auth.uid()
    )
    or exists ( -- a teacher whose cohort the student is enrolled in
      select 1 from public.enrollments e
      join public.cohorts c on c.id = e.cohort_id
      join public.teacher_profiles tp on tp.id = c.teacher_id
      where e.student_id = exercise_results.student_id
        and e.status = 'active'
        and tp.user_id = auth.uid()
    )
  );

create policy "exresults_insert_student"
  on public.exercise_results for insert
  with check (
    public.is_admin()
    or exists (
      select 1 from public.student_profiles sp
      where sp.id = exercise_results.student_id and sp.user_id = auth.uid()
    )
  );

-- Students may also update their CEFR level after the placement test
-- (student_profiles update policy already allows own-row updates).

-- =============================================================
--  END OF MIGRATION
-- =============================================================
