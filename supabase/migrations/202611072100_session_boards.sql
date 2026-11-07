-- The class board saved (docs/LESSONS_PLAN.md, step L5). Owner, 7 Nov 2026: "go on with L5"; the class digest has
-- "notes from the teacher and the board content if necessary".
--   session_boards       one per class date: the lesson, every page's marks, the solo exercises run, and whether the
--                        teacher shares it with the class notes. Written by the class's teacher (their browser saves it
--                        during and after class), read by the teacher, admins, and the class's students when shared.
--   session_board_work   each student's work in each "Everyone solves this": read by that student and the teacher.
-- Idempotent.

create or replace function public.session_cohort(p_session uuid)
 returns uuid
 language sql
 stable security definer
 set search_path to ''
as $function$
  select cohort_id from public.sessions where id = p_session;
$function$;

create table if not exists public.session_boards (
  session_id uuid primary key references public.sessions(id) on delete cascade,
  course text check (course is null or course ~ '^[A-Za-z]+-[A-C][12]$'),
  lesson text check (lesson is null or lesson ~ '^c[0-9]{2,3}$'),
  pages jsonb not null default '{}'::jsonb check (jsonb_typeof(pages) = 'object' and octet_length(pages::text) < 3000000),
  solos jsonb not null default '[]'::jsonb check (jsonb_typeof(solos) = 'array' and octet_length(solos::text) < 100000),
  shared boolean not null default true,
  updated_at timestamptz not null default now()
);
alter table public.session_boards enable row level security;
drop policy if exists session_boards_read on public.session_boards;
create policy session_boards_read on public.session_boards for select to authenticated using (
  public.is_admin() or public.teaches_cohort(public.session_cohort(session_id))
  or (shared and public.is_enrolled_in(public.session_cohort(session_id))));
drop policy if exists session_boards_write on public.session_boards;
create policy session_boards_write on public.session_boards for insert to authenticated
  with check (public.is_admin() or public.teaches_cohort(public.session_cohort(session_id)));
drop policy if exists session_boards_update on public.session_boards;
create policy session_boards_update on public.session_boards for update to authenticated
  using (public.is_admin() or public.teaches_cohort(public.session_cohort(session_id)))
  with check (public.is_admin() or public.teaches_cohort(public.session_cohort(session_id)));
drop policy if exists session_boards_delete on public.session_boards;
create policy session_boards_delete on public.session_boards for delete to authenticated using (public.is_admin());

create table if not exists public.session_board_work (
  session_id uuid not null references public.sessions(id) on delete cascade,
  solo_id text not null check (solo_id ~ '^[a-z0-9]{1,16}$'),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text check (name is null or char_length(name) <= 100),
  page integer not null default 0 check (page between 0 and 50),
  items jsonb not null default '[]'::jsonb check (jsonb_typeof(items) = 'array' and octet_length(items::text) < 500000),
  sent_at timestamptz not null default now(),
  primary key (session_id, solo_id, user_id)
);
alter table public.session_board_work enable row level security;
drop policy if exists session_board_work_read on public.session_board_work;
create policy session_board_work_read on public.session_board_work for select to authenticated using (
  user_id = (select auth.uid()) or public.is_admin() or public.teaches_cohort(public.session_cohort(session_id)));
drop policy if exists session_board_work_write on public.session_board_work;
create policy session_board_work_write on public.session_board_work for insert to authenticated
  with check (public.is_admin() or public.teaches_cohort(public.session_cohort(session_id)));
drop policy if exists session_board_work_update on public.session_board_work;
create policy session_board_work_update on public.session_board_work for update to authenticated
  using (public.is_admin() or public.teaches_cohort(public.session_cohort(session_id)))
  with check (public.is_admin() or public.teaches_cohort(public.session_cohort(session_id)));
drop policy if exists session_board_work_delete on public.session_board_work;
create policy session_board_work_delete on public.session_board_work for delete to authenticated using (public.is_admin());

-- Verify
select (select count(*) from pg_policies where schemaname = 'public' and tablename = 'session_boards') as board_policies,
       (select count(*) from pg_policies where schemaname = 'public' and tablename = 'session_board_work') as work_policies,
       (select relrowsecurity from pg_class where oid = 'public.session_boards'::regclass) as boards_rls,
       (select relrowsecurity from pg_class where oid = 'public.session_board_work'::regclass) as work_rls;
