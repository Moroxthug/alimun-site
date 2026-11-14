-- Teacher hiring, step 3: assignment (docs/TEACHER_HIRING_PLAN.md; owner, 13 Nov 2026: "the owner confirms each
-- assignment at first, then it can run by itself"). Approved teachers are proposed for the rooms that need a teacher or
-- a substitute (js/assign.js); the owner confirms with one click (the teacher then gets the course contract as before) or
-- dismisses. The teacher-assign automation runs each morning with the room job: in dry run it only proposes and tells the
-- owner; live, it confirms the best sure teacher by itself (never for a room the owner teaches with an accepted contract).
-- Written only by the server (api/pricing.js); admins read. Idempotent; ends with a verify query.

create table if not exists public.teacher_assignments (
  id uuid primary key default gen_random_uuid(),
  cohort_id uuid not null references public.cohorts(id) on delete cascade,
  teacher_id uuid not null references public.teacher_profiles(id) on delete cascade,
  role text not null check (role in ('teacher', 'substitute')),
  status text not null default 'proposed' check (status in ('proposed', 'confirmed', 'dismissed', 'superseded')),
  score integer,
  sure boolean not null default false,
  why text check (why is null or char_length(why) <= 500),
  via text check (via is null or via in ('admin', 'automation')),
  proposed_at timestamptz not null default now(),
  decided_at timestamptz,
  decided_by uuid,
  unique (cohort_id, teacher_id, role)
);
create index if not exists teacher_assignments_teacher on public.teacher_assignments (teacher_id);
create index if not exists teacher_assignments_open on public.teacher_assignments (cohort_id, role) where status = 'proposed';

alter table public.teacher_assignments enable row level security;
drop policy if exists teacher_assignments_admin_read on public.teacher_assignments;
create policy teacher_assignments_admin_read on public.teacher_assignments for select to authenticated using (public.is_admin());
revoke insert, update, delete on public.teacher_assignments from anon, authenticated;
revoke select on public.teacher_assignments from anon;
grant select on public.teacher_assignments to authenticated;

insert into public.automations (name, label, about, enabled, dry_run, daily_cap) values
  ('teacher-assign', 'Teacher assignment', 'Each morning: the best-fitting approved teacher is given a room that needs a teacher or a substitute. In dry run it only proposes them to you; live, it assigns them and the teacher gets the course contract. Never for a room you teach with an accepted contract.', true, true, 10)
on conflict (name) do nothing;

-- Verify
select
  (select relrowsecurity from pg_class where oid = 'public.teacher_assignments'::regclass) as rls,
  has_table_privilege('authenticated', 'public.teacher_assignments', 'insert') as clients_can_write,
  (select name || ':' || case when dry_run then 'dry run' else 'live' end from public.automations where name = 'teacher-assign') as automation;
