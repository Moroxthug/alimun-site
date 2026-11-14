-- Teacher hiring, step 2: the 30-minute trial class (docs/TEACHER_HIRING_PLAN.md; owner, 13 Nov 2026).
-- A pre-approved teacher gives a free 30-minute taster to real learners at a level they teach, at a time from their
-- availability. The class is a one-date class (a closed cohort with one 30-minute session, like the launch class's free
-- first class); learners invited from Matching accept a free place (an entitlement on the date and a place in the class);
-- the existing verification, check-in, reminders and admin-only recording apply; learners rate it with one tap; the
-- owner approves or rejects from the scorecard. Written only by the server (api/ops.js); admins read everything, a
-- teacher reads their own trials, a learner reads their own invitations and ratings.
-- Idempotent; ends with a verify query.

create table if not exists public.teacher_trials (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references public.teacher_profiles(id) on delete cascade,
  cohort_id uuid references public.cohorts(id) on delete set null,
  session_id uuid references public.sessions(id) on delete set null,
  language text not null check (char_length(language) between 2 and 40),
  level text not null check (level in ('A1', 'A2', 'B1', 'B2', 'C1', 'C2')),
  scheduled_at timestamptz not null,
  minutes integer not null default 30 check (minutes between 15 and 90),
  teacher_tz text,
  status text not null default 'scheduled' check (status in ('scheduled', 'done', 'approved', 'rejected', 'cancelled')),
  note text check (note is null or char_length(note) <= 2000),
  done_at timestamptz,
  decided_at timestamptz,
  decided_by uuid,
  created_by uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
-- One trial in progress per teacher
create unique index if not exists teacher_trials_one_open on public.teacher_trials (teacher_id) where status in ('scheduled', 'done');
create index if not exists teacher_trials_session on public.teacher_trials (session_id);
create index if not exists teacher_trials_due on public.teacher_trials (scheduled_at) where status = 'scheduled';

create table if not exists public.trial_invites (
  id uuid primary key default gen_random_uuid(),
  trial_id uuid not null references public.teacher_trials(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  student_id uuid references public.student_profiles(id) on delete set null,
  status text not null default 'invited' check (status in ('invited', 'accepted', 'declined', 'cancelled')),
  sent_at timestamptz,
  answered_at timestamptz,
  created_by uuid,
  created_at timestamptz not null default now(),
  unique (trial_id, user_id)
);
create index if not exists trial_invites_user on public.trial_invites (user_id);

create table if not exists public.trial_ratings (
  id uuid primary key default gen_random_uuid(),
  trial_id uuid not null references public.teacher_trials(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  score smallint not null check (score between 1 and 3),
  via text check (via is null or via in ('dashboard', 'email')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (trial_id, user_id)
);
create index if not exists trial_ratings_user on public.trial_ratings (user_id);

alter table public.teacher_trials enable row level security;
alter table public.trial_invites enable row level security;
alter table public.trial_ratings enable row level security;

drop policy if exists teacher_trials_admin_read on public.teacher_trials;
create policy teacher_trials_admin_read on public.teacher_trials for select to authenticated using (public.is_admin());
drop policy if exists teacher_trials_own_read on public.teacher_trials;
create policy teacher_trials_own_read on public.teacher_trials for select to authenticated
  using (teacher_id in (select id from public.teacher_profiles where user_id = (select auth.uid())));

drop policy if exists trial_invites_admin_read on public.trial_invites;
create policy trial_invites_admin_read on public.trial_invites for select to authenticated using (public.is_admin());
drop policy if exists trial_invites_own_read on public.trial_invites;
create policy trial_invites_own_read on public.trial_invites for select to authenticated using (user_id = (select auth.uid()));

drop policy if exists trial_ratings_admin_read on public.trial_ratings;
create policy trial_ratings_admin_read on public.trial_ratings for select to authenticated using (public.is_admin());
drop policy if exists trial_ratings_own_read on public.trial_ratings;
create policy trial_ratings_own_read on public.trial_ratings for select to authenticated using (user_id = (select auth.uid()));

revoke insert, update, delete on public.teacher_trials, public.trial_invites, public.trial_ratings from anon, authenticated;
revoke select on public.teacher_trials, public.trial_invites, public.trial_ratings from anon;
grant select on public.teacher_trials, public.trial_invites, public.trial_ratings to authenticated;

-- Invitations and rating requests email learners: both start in dry run until the owner switches them to live
insert into public.automations (name, label, about, enabled, dry_run, daily_cap) values
  ('trial-invites', 'Trial class invitations', 'Emails and dashboard notes inviting the learners you chose to a new teacher''s free 30-minute trial class, and telling them if it is cancelled.', true, true, 60),
  ('trial-ratings', 'Trial class ratings', 'After a trial class: an email and a dashboard note asking each learner who took a place to rate the class with one tap.', true, true, 100)
on conflict (name) do nothing;

-- Verify
select
  (select count(*) from pg_class where relname in ('teacher_trials', 'trial_invites', 'trial_ratings') and relrowsecurity) as tables_with_rls,
  (select count(*) from pg_policies where tablename in ('teacher_trials', 'trial_invites', 'trial_ratings')) as policies,
  has_table_privilege('authenticated', 'public.trial_ratings', 'insert') as learners_can_write,
  (select string_agg(name || ':' || case when dry_run then 'dry run' else 'live' end, ', ') from public.automations where name like 'trial-%') as automations;
