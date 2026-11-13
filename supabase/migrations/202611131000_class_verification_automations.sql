-- Owner, 13 Nov 2026 (docs/OPERATIONS_PLAN.md, part 1): verify that each class date really happened, from Daily's own
-- records (who connected, when, for how long), and run automations that are safe to leave alone: on and off switch,
-- dry run, a daily cap, never the same action twice, a log line for every action, and a pause after repeated failures.
-- Written only by the server (api/ops.js, service role); admins read everything. Idempotent; ends with a verify query.

-- ---------- What Daily saw for each class date ----------
alter table public.sessions add column if not exists actual_start timestamptz;      -- first person in the room
alter table public.sessions add column if not exists actual_end timestamptz;        -- last person out
alter table public.sessions add column if not exists teacher_joined_at timestamptz; -- the teacher's first join
alter table public.sessions add column if not exists teacher_seconds integer;       -- teacher's time inside the scheduled slot
alter table public.sessions add column if not exists minutes_late integer;          -- teacher's first join after the start
alter table public.sessions add column if not exists learners_present integer;      -- learners who joined (test accounts not counted)
alter table public.sessions add column if not exists peak_people integer;           -- most people in the room at once
alter table public.sessions add column if not exists outcome text;
alter table public.sessions add column if not exists verified_at timestamptz;
alter table public.sessions drop constraint if exists sessions_outcome_check;
alter table public.sessions add constraint sessions_outcome_check
  check (outcome is null or outcome in ('held', 'ended_early', 'teacher_absent', 'no_learners', 'not_held'));
create index if not exists sessions_verify_idx on public.sessions (scheduled_at) where outcome is null;

-- Each person's time in a class date (from Daily's meetings and participants)
create table if not exists public.class_presence (
  session_id uuid not null references public.sessions(id) on delete cascade,
  user_id uuid not null,
  role text not null check (role in ('teacher', 'learner', 'staff', 'unknown')),
  name text,
  is_test boolean not null default false,
  first_join timestamptz,
  last_leave timestamptz,
  seconds integer not null default 0,
  in_slot_seconds integer not null default 0,   -- time inside the scheduled slot
  joins integer not null default 0,
  updated_at timestamptz not null default now(),
  primary key (session_id, user_id)
);
alter table public.class_presence enable row level security;
drop policy if exists class_presence_admin_read on public.class_presence;
create policy class_presence_admin_read on public.class_presence for select to authenticated using (public.is_admin());
revoke insert, update, delete on public.class_presence from anon, authenticated;
grant select on public.class_presence to authenticated;

-- Daily's meetings, kept as Daily sent them (for checking a disputed class)
create table if not exists public.video_meetings (
  meeting_id text primary key,
  room text not null,
  session_id uuid references public.sessions(id) on delete set null,
  started_at timestamptz,
  duration_seconds integer,
  ongoing boolean,
  participants jsonb,
  fetched_at timestamptz not null default now()
);
create index if not exists video_meetings_session_idx on public.video_meetings (session_id);
alter table public.video_meetings enable row level security;
drop policy if exists video_meetings_admin_read on public.video_meetings;
create policy video_meetings_admin_read on public.video_meetings for select to authenticated using (public.is_admin());
revoke insert, update, delete on public.video_meetings from anon, authenticated;
grant select on public.video_meetings to authenticated;

-- ---------- Automations ----------
create table if not exists public.automations (
  name text primary key,
  label text not null,
  about text,
  enabled boolean not null default false,
  dry_run boolean not null default true,
  daily_cap integer not null default 50 check (daily_cap between 0 and 10000),
  consecutive_failures integer not null default 0,
  paused_at timestamptz,
  paused_reason text,
  updated_at timestamptz not null default now(),
  updated_by uuid
);
alter table public.automations enable row level security;
drop policy if exists automations_admin_read on public.automations;
create policy automations_admin_read on public.automations for select to authenticated using (public.is_admin());
revoke insert, update, delete on public.automations from anon, authenticated;
grant select on public.automations to authenticated;

create table if not exists public.automation_log (
  id bigint generated always as identity primary key,
  automation text not null references public.automations(name) on delete cascade,
  key text not null,             -- what the action is about; one successful action per automation and key
  action text not null,
  target text,
  session_id uuid,
  detail jsonb,
  dry_run boolean not null default false,
  ok boolean not null default true,
  error text,
  created_at timestamptz not null default now()
);
create unique index if not exists automation_log_once on public.automation_log (automation, key) where ok and not dry_run;
create index if not exists automation_log_recent on public.automation_log (automation, created_at desc);
alter table public.automation_log enable row level security;
drop policy if exists automation_log_admin_read on public.automation_log;
create policy automation_log_admin_read on public.automation_log for select to authenticated using (public.is_admin());
revoke insert, update, delete on public.automation_log from anon, authenticated;
grant select on public.automation_log to authenticated;

-- The first automations. Class outcomes only write Alimun's own records: on and live. The teacher-late alert writes
-- to people: on, in dry run until the owner has checked a few. The digest only writes to the owner: on and live.
insert into public.automations (name, label, about, enabled, dry_run, daily_cap) values
  ('class-outcomes', 'Class outcomes', 'Every 5 minutes: reads Daily''s records of each class date that has ended and sets who was there, minutes late and the outcome.', true, false, 500),
  ('teacher-late', 'Teacher late alert', '5 minutes after a class should start, if the teacher is not in the room: an email to you, the teacher and the learners, and a dashboard note to the teacher and learners.', true, true, 60),
  ('daily-digest', 'Morning digest', 'Every morning: yesterday''s classes, sign-ups, tutor use, payments, failures and what each automation did, by email to you.', true, false, 2)
on conflict (name) do nothing;

-- ---------- Verify ----------
select
  (select count(*) from information_schema.columns where table_schema = 'public' and table_name = 'sessions' and column_name in ('actual_start', 'outcome', 'verified_at', 'teacher_seconds')) as session_columns,
  (select count(*) from public.automations) as automations,
  (select relrowsecurity from pg_class where oid = 'public.class_presence'::regclass) as presence_rls,
  (select relrowsecurity from pg_class where oid = 'public.automation_log'::regclass) as log_rls;
