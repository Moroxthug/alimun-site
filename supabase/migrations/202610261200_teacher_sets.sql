-- ============================================================
--  Teacher dashboard, part 5: material (docs/DASHBOARD_PLAN.md, step 15). Owner's yes, 26 Oct 2026.
--  teacher_sets: exercise sets a teacher makes (the course book's exercise format, js/app/exercises.js),
--    private to the teacher (owner: no sharing between teachers for now).
--  teacher_set_targets: who a set was sent to, a class or one student. A student can read a set only
--    once it has been sent to them or to a class they are in.
--  assignments.material may also be a set ({kind: 'set', key: 'set:<id>'}); complete_material_homework()
--    already records it from the student's practice_progress row with the same key.
--  No data is changed. Idempotent. Ends with a verify query.
-- ============================================================

create table if not exists public.teacher_sets (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references public.teacher_profiles(id) on delete cascade,
  title text not null check (char_length(btrim(title)) between 1 and 200),
  language text not null check (language ~ '^[A-Za-z][A-Za-z ]{1,39}$'),
  level text not null check (level in ('A1', 'A2', 'B1', 'B2', 'C1', 'C2')),
  blocks jsonb not null default '[]'::jsonb check (jsonb_typeof(blocks) = 'array' and jsonb_array_length(blocks) <= 40 and pg_column_size(blocks) <= 262144),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists teacher_sets_teacher on public.teacher_sets (teacher_id, updated_at desc);

create table if not exists public.teacher_set_targets (
  id uuid primary key default gen_random_uuid(),
  set_id uuid not null references public.teacher_sets(id) on delete cascade,
  cohort_id uuid references public.cohorts(id) on delete cascade,
  student_id uuid references public.student_profiles(id) on delete cascade,
  sent_at timestamptz not null default now(),
  check ((cohort_id is null) <> (student_id is null))
);
create unique index if not exists teacher_set_targets_once on public.teacher_set_targets (set_id, coalesce(cohort_id, student_id));
create index if not exists teacher_set_targets_cohort on public.teacher_set_targets (cohort_id) where cohort_id is not null;
create index if not exists teacher_set_targets_student on public.teacher_set_targets (student_id) where student_id is not null;

-- Who may read a set: its teacher, admins, and the students it was sent to
create or replace function public.can_read_set(p_set uuid) returns boolean
language sql stable security definer set search_path = '' as $$
  select public.is_admin()
    or exists (select 1 from public.teacher_sets s where s.id = p_set and s.teacher_id = public.my_teacher_profile_id())
    or exists (select 1 from public.teacher_set_targets x where x.set_id = p_set
      and ((x.cohort_id is not null and public.is_enrolled_in(x.cohort_id)) or (x.student_id is not null and x.student_id = public.my_student_profile_id())));
$$;
revoke all on function public.can_read_set(uuid) from public, anon;
grant execute on function public.can_read_set(uuid) to authenticated;

alter table public.teacher_sets enable row level security;
alter table public.teacher_set_targets enable row level security;
revoke all on public.teacher_sets, public.teacher_set_targets from anon;
grant select, insert, update, delete on public.teacher_sets to authenticated;
grant select, insert, delete on public.teacher_set_targets to authenticated;
revoke update, truncate, references, trigger on public.teacher_set_targets from authenticated;

drop policy if exists teacher_sets_select on public.teacher_sets;
create policy teacher_sets_select on public.teacher_sets for select to authenticated using (public.can_read_set(id));
drop policy if exists teacher_sets_insert on public.teacher_sets;
create policy teacher_sets_insert on public.teacher_sets for insert to authenticated with check (teacher_id = public.my_teacher_profile_id());
drop policy if exists teacher_sets_update on public.teacher_sets;
create policy teacher_sets_update on public.teacher_sets for update to authenticated
  using (teacher_id = public.my_teacher_profile_id()) with check (teacher_id = public.my_teacher_profile_id());
drop policy if exists teacher_sets_delete on public.teacher_sets;
create policy teacher_sets_delete on public.teacher_sets for delete to authenticated using (teacher_id = public.my_teacher_profile_id() or public.is_admin());

drop policy if exists teacher_set_targets_select on public.teacher_set_targets;
create policy teacher_set_targets_select on public.teacher_set_targets for select to authenticated using (
  public.is_admin()
  or exists (select 1 from public.teacher_sets s where s.id = set_id and s.teacher_id = public.my_teacher_profile_id())
  or (cohort_id is not null and public.is_enrolled_in(cohort_id))
  or (student_id is not null and student_id = public.my_student_profile_id()));
drop policy if exists teacher_set_targets_insert on public.teacher_set_targets;
create policy teacher_set_targets_insert on public.teacher_set_targets for insert to authenticated with check (
  exists (select 1 from public.teacher_sets s where s.id = set_id and s.teacher_id = public.my_teacher_profile_id())
  and ((cohort_id is not null and public.teaches_cohort(cohort_id)) or (student_id is not null and public.teaches_student(student_id))));
drop policy if exists teacher_set_targets_delete on public.teacher_set_targets;
create policy teacher_set_targets_delete on public.teacher_set_targets for delete to authenticated using (
  exists (select 1 from public.teacher_sets s where s.id = set_id and s.teacher_id = public.my_teacher_profile_id()));

-- Homework from a set
alter table public.assignments drop constraint if exists assignments_material_chk;
alter table public.assignments add constraint assignments_material_chk check (
  material is null or (
    jsonb_typeof(material) = 'object' and pg_column_size(material) <= 2048
    and material->>'kind' in ('book', 'lib', 'mock', 'set')
    and (material->>'key') like (material->>'kind') || ':%'
  ));

-- Verify
select (select count(*) from pg_class where relname in ('teacher_sets', 'teacher_set_targets') and relrowsecurity) as tables_with_rls,
       (select count(*) from pg_policies where tablename in ('teacher_sets', 'teacher_set_targets')) as policies,
       (select pg_get_constraintdef(oid) like '%''set''%' from pg_constraint where conname = 'assignments_material_chk') as homework_from_sets;
