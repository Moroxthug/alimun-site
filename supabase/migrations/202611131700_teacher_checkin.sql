-- Owner, 13 Nov 2026: teachers check in before each class (at least 5 minutes before it starts), with reminders 1 hour
-- and 5 minutes before; a missing check-in 5 minutes before the start is reported to the owner; the late alert after the
-- start is switched to live ("include alerts ... if I am late as well"). Classes the owner teaches count as real.
-- Check-in is written only by the server (api/ops.js, api/join-session.js). Idempotent; ends with a verify query.

alter table public.sessions add column if not exists teacher_checked_in_at timestamptz;
alter table public.sessions add column if not exists teacher_checkin_via text;
alter table public.sessions drop constraint if exists sessions_checkin_via_check;
alter table public.sessions add constraint sessions_checkin_via_check
  check (teacher_checkin_via is null or teacher_checkin_via in ('button', 'email', 'room', 'admin'));

insert into public.automations (name, label, about, enabled, dry_run, daily_cap) values
  ('teacher-reminders', 'Teacher reminders', '1 hour and 5 minutes before each class: an email and a dashboard note to the teacher, with a one-click check-in.', true, false, 400),
  ('checkin-missing', 'Missing check-in', '5 minutes before a class: if the teacher has not checked in or joined, an email to you.', true, false, 100)
on conflict (name) do nothing;
update public.automations set dry_run = false, updated_at = now() where name = 'teacher-late' and dry_run;

select
  (select count(*) from information_schema.columns where table_schema = 'public' and table_name = 'sessions' and column_name in ('teacher_checked_in_at', 'teacher_checkin_via')) as checkin_columns,
  (select count(*) from public.automations where name in ('teacher-reminders', 'checkin-missing')) as new_automations,
  (select dry_run from public.automations where name = 'teacher-late') as late_dry_run;
