-- ============================================================
--  Practice progress for built-in exercises (library and exam prep),
--  so a finished exercise stays finished on every device.
--  One row per student and exercise; ex_key = "<course language>:<title>".
--  Teacher-graded homework keeps using assignment_submissions.
--  Idempotent.
-- ============================================================

create table if not exists public.practice_progress (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.student_profiles(id) on delete cascade,
  ex_key text not null check (length(ex_key) between 1 and 300),
  done boolean not null default false,
  user_answer jsonb,
  graded_score integer check (graded_score between 0 and 100),
  feedback text check (length(feedback) <= 8000),
  updated_at timestamptz not null default now(),
  unique (student_id, ex_key)
);

alter table public.practice_progress enable row level security;
revoke all on public.practice_progress from anon;
grant select, insert, update on public.practice_progress to authenticated;
revoke delete, truncate, references, trigger on public.practice_progress from authenticated;

drop policy if exists practice_progress_select on public.practice_progress;
create policy practice_progress_select on public.practice_progress for select to authenticated
  using (public.is_admin() or student_id = public.my_student_profile_id() or public.teaches_student(student_id));
drop policy if exists practice_progress_insert on public.practice_progress;
create policy practice_progress_insert on public.practice_progress for insert to authenticated
  with check (student_id = public.my_student_profile_id());
drop policy if exists practice_progress_update on public.practice_progress;
create policy practice_progress_update on public.practice_progress for update to authenticated
  using (student_id = public.my_student_profile_id())
  with check (student_id = public.my_student_profile_id());

-- Verify
select relrowsecurity as rls_on,
  (select count(*) from pg_policies where schemaname = 'public' and tablename = 'practice_progress') as policies
from pg_class where oid = 'public.practice_progress'::regclass;
