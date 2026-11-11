-- AI tutor, part 2: sessions, transcripts and memory (docs/AI_TUTOR_PLAN.md, section 4; owner: "go ahead with part 2",
-- 26 Oct 2026). Question 6 taken as proposed until the owner answers: transcripts kept 90 days, summaries and the memory
-- until the student clears them; teachers see nothing of it.
-- Students read their own rows; nothing is written from the browser (the server writes with the service role).
-- A daily job deletes sessions past keep_until with their messages. Idempotent.

begin;

-- 1. Sessions: at most one open session per student
create table if not exists public.tutor_sessions (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.student_profiles(id) on delete cascade,
  language text not null,
  level text,
  ui text not null default 'en' check (ui in ('en', 'es', 'fr', 'ma', 'de', 'pt', 'zh', 'ar', 'it')),
  started_at timestamptz not null default now(),
  last_turn_at timestamptz not null default now(),
  ended_at timestamptz,
  seconds_used integer not null default 0 check (seconds_used >= 0),
  turns integer not null default 0 check (turns >= 0),
  title text check (title is null or char_length(title) <= 160),
  summary text check (summary is null or char_length(summary) <= 2000),
  topics jsonb not null default '[]' check (jsonb_typeof(topics) = 'array' and pg_column_size(topics) <= 4096),
  words jsonb not null default '[]' check (jsonb_typeof(words) = 'array' and pg_column_size(words) <= 8192),
  board jsonb not null default '[]' check (jsonb_typeof(board) = 'array' and pg_column_size(board) <= 32768),
  keep_until timestamptz not null default now() + interval '90 days'
);
create index if not exists tutor_sessions_student on public.tutor_sessions (student_id, started_at desc);
create unique index if not exists tutor_sessions_one_open on public.tutor_sessions (student_id) where ended_at is null;
create index if not exists tutor_sessions_keep on public.tutor_sessions (keep_until);

-- 2. Messages (the transcript)
create table if not exists public.tutor_messages (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.tutor_sessions(id) on delete cascade,
  student_id uuid not null references public.student_profiles(id) on delete cascade,
  role text not null check (role in ('student', 'tutor')),
  text text check (text is null or char_length(text) <= 4000),
  board jsonb check (board is null or (jsonb_typeof(board) = 'array' and pg_column_size(board) <= 16384)),
  exercise jsonb check (exercise is null or (jsonb_typeof(exercise) = 'object' and pg_column_size(exercise) <= 16384)),
  result jsonb check (result is null or (jsonb_typeof(result) = 'object' and pg_column_size(result) <= 4096)),
  created_at timestamptz not null default now()
);
create index if not exists tutor_messages_session on public.tutor_messages (session_id, created_at);
create index if not exists tutor_messages_student on public.tutor_messages (student_id);

-- 3. What the tutor remembers between sessions
create table if not exists public.tutor_memory (
  student_id uuid primary key references public.student_profiles(id) on delete cascade,
  notes jsonb not null default '{}' check (jsonb_typeof(notes) = 'object' and pg_column_size(notes) <= 8192),
  updated_at timestamptz not null default now()
);

-- 4. The time ledger points at its session; deleting a session keeps the ledger row
do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'tutor_time_ledger_session_fk') then
    alter table public.tutor_time_ledger add constraint tutor_time_ledger_session_fk
      foreign key (session_id) references public.tutor_sessions(id) on delete set null;
  end if;
end $$;

-- 5. Row rules
alter table public.tutor_sessions enable row level security;
alter table public.tutor_messages enable row level security;
alter table public.tutor_memory enable row level security;

drop policy if exists tutor_sessions_read on public.tutor_sessions;
create policy tutor_sessions_read on public.tutor_sessions for select to authenticated
  using (public.is_admin() or student_id = public.my_student_profile_id());
drop policy if exists tutor_messages_read on public.tutor_messages;
create policy tutor_messages_read on public.tutor_messages for select to authenticated
  using (public.is_admin() or student_id = public.my_student_profile_id());
drop policy if exists tutor_memory_read on public.tutor_memory;
create policy tutor_memory_read on public.tutor_memory for select to authenticated
  using (public.is_admin() or student_id = public.my_student_profile_id());

revoke all on public.tutor_sessions, public.tutor_messages, public.tutor_memory from anon;
revoke insert, update, delete, truncate on public.tutor_sessions, public.tutor_messages, public.tutor_memory from authenticated;
grant select on public.tutor_sessions, public.tutor_messages, public.tutor_memory to authenticated;

-- 6. The daily clean-up: sessions past keep_until go, with their messages; each run leaves a cron_runs row
create or replace function public.tutor_purge()
 returns integer
 language plpgsql
 security definer
 set search_path to ''
as $$
declare n integer;
begin
  delete from public.tutor_sessions where keep_until < now();
  get diagnostics n = row_count;
  insert into public.cron_runs (job, result) values ('db:tutor-purge', jsonb_build_object('deleted', n));
  return n;
exception when others then
  insert into public.cron_runs (job, ok, result) values ('db:tutor-purge', false, jsonb_build_object('error', sqlerrm));
  return 0;
end;
$$;
revoke all on function public.tutor_purge() from public, anon, authenticated;

commit;

do $$
begin
  if not exists (select 1 from pg_available_extensions where name = 'pg_cron') then
    raise notice 'pg_cron not available here: schedule skipped';
    return;
  end if;
  perform cron.unschedule(jobid) from cron.job where jobname = 'alimun-tutor-purge';
  perform cron.schedule('alimun-tutor-purge', '17 3 * * *', 'select public.tutor_purge()');
end $$;

-- Verify: three tables with row rules, the one-open-session index, the ledger link and the daily job
select
  (select count(*) from pg_tables where schemaname = 'public' and tablename in ('tutor_sessions', 'tutor_messages', 'tutor_memory') and rowsecurity) as tables_with_rls,
  (select count(*) from pg_indexes where schemaname = 'public' and indexname = 'tutor_sessions_one_open') as one_open_index,
  (select count(*) from pg_constraint where conname = 'tutor_time_ledger_session_fk') as ledger_link,
  (select count(*) from cron.job where jobname = 'alimun-tutor-purge') as purge_job;
