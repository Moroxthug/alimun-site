-- Teacher hiring, step 1: the interview (docs/TEACHER_HIRING_PLAN.md; owner, 13 Nov 2026). A teacher's stage in hiring,
-- the owner's interview hours (app_settings.interview_hours), and the interviews: a private, unrecorded video room for
-- the owner and the teacher. Written only by the server (api/ops.js); admins read all, a teacher reads their own.
-- Idempotent; ends with a verify query.

alter table public.teacher_profiles add column if not exists hiring_stage text;
alter table public.teacher_profiles drop constraint if exists teacher_profiles_hiring_stage_check;
alter table public.teacher_profiles add constraint teacher_profiles_hiring_stage_check check (hiring_stage is null or hiring_stage in
  ('applied', 'interview_invited', 'interview_booked', 'pre_approved', 'trial_scheduled', 'trial_done', 'approved', 'assigned', 'rejected'));
update public.teacher_profiles set hiring_stage = case status when 'pending' then 'applied' when 'approved' then 'approved' else hiring_stage end
  where hiring_stage is null and status in ('pending', 'approved');

create table if not exists public.teacher_interviews (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references public.teacher_profiles(id) on delete cascade,
  scheduled_at timestamptz not null,
  minutes integer not null default 30 check (minutes between 10 and 120),
  status text not null default 'booked' check (status in ('booked', 'done', 'no_show', 'cancelled')),
  teacher_tz text,
  teacher_checked_in_at timestamptz,
  result text check (result is null or result in ('pre_approved', 'rejected')),
  note text check (note is null or char_length(note) <= 2000),
  decided_at timestamptz,
  decided_by uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
-- One time, one interview; one booked interview per teacher
create unique index if not exists teacher_interviews_slot_once on public.teacher_interviews (scheduled_at) where status = 'booked';
create unique index if not exists teacher_interviews_one_booked on public.teacher_interviews (teacher_id) where status = 'booked';
alter table public.teacher_interviews enable row level security;
drop policy if exists teacher_interviews_admin_read on public.teacher_interviews;
create policy teacher_interviews_admin_read on public.teacher_interviews for select to authenticated using (public.is_admin());
drop policy if exists teacher_interviews_own_read on public.teacher_interviews;
create policy teacher_interviews_own_read on public.teacher_interviews for select to authenticated
  using (teacher_id in (select id from public.teacher_profiles where user_id = (select auth.uid())));
revoke insert, update, delete on public.teacher_interviews from anon, authenticated;
grant select on public.teacher_interviews to authenticated;

-- The owner's weekly interview hours, set in Admin (empty until then)
insert into public.app_settings (key, value) values ('interview_hours', '{"tz":"America/Vancouver","minutes":30,"days":{}}')
on conflict (key) do nothing;

insert into public.automations (name, label, about, enabled, dry_run, daily_cap) values
  ('interview-reminders', 'Interview reminders', '1 hour and 5 minutes before each teacher interview: an email to the teacher and to you.', true, false, 100)
on conflict (name) do nothing;

select
  (select count(*) from public.teacher_profiles where hiring_stage is not null) as staged_teachers,
  (select relrowsecurity from pg_class where oid = 'public.teacher_interviews'::regclass) as interviews_rls,
  (select count(*) from public.app_settings where key = 'interview_hours') as hours_setting;

-- A new teacher always starts at "applied" (the dashboard cannot choose its own stage; updates were already limited
-- to the teacher's own fields by this guard)
do $do$ declare d text; begin
  d := pg_get_functiondef('public.guard_teacher_profile_admin_fields()'::regprocedure);
  if position('hiring_stage' in d) = 0 then
    d := replace(d, $r$    new.notified_at        := null;$r$, $r$    new.notified_at        := null;
    new.hiring_stage       := 'applied';$r$);
    if position('hiring_stage' in d) = 0 then raise exception 'pattern not found'; end if;
    execute d;
  end if;
end $do$;
select position('hiring_stage' in pg_get_functiondef('public.guard_teacher_profile_admin_fields()'::regprocedure)) > 0 as guarded;
