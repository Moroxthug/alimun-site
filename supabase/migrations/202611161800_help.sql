-- Help and Support, Part 2 (docs/HELP_PLAN.md). Owner, 16 Nov 2026: "go ahead with part 2".
-- Additive and idempotent. Written only by the server (api/help.js, service role); people read their own rows.
--
-- help_questions: every question asked in Help, with the answer, the articles used and whether the person found it
--   helpful. Deleted after 90 days (owner's answer 6).
-- help_requests + help_messages: Support. A request is a conversation between the person and Alimun: the first
--   message from the person, replies from the admin, follow-ups from the person. A reply from Alimun puts a
--   notification on the bell. Closed requests are deleted 90 days after their last message.

begin;

create table if not exists public.help_questions (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid references auth.users (id) on delete cascade,
  role          text not null default 'student' check (role in ('student', 'teacher', 'admin', 'visitor')),
  lang          text not null default 'en' check (lang ~ '^[a-z]{2}$'),
  question      text not null check (length(question) between 2 and 1000),
  answer        text check (answer is null or length(answer) <= 4000),
  article_slugs text[] not null default '{}',
  sure          boolean not null default false,
  helpful       boolean,
  created_at    timestamptz not null default now()
);
create index if not exists help_questions_user_time on public.help_questions (user_id, created_at desc);
create index if not exists help_questions_time on public.help_questions (created_at desc);

create table if not exists public.help_requests (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid references auth.users (id) on delete cascade,
  email       text check (email is null or length(email) <= 254),
  name        text check (name is null or length(name) <= 120),
  role        text not null default 'student' check (role in ('student', 'teacher', 'admin', 'visitor')),
  lang        text not null default 'en' check (lang ~ '^[a-z]{2}$'),
  topic       text not null default 'other' check (topic in ('classes', 'plans', 'dashboard', 'practice', 'tutor', 'account', 'teachers', 'other')),
  subject     text not null check (length(subject) between 2 and 140),
  question_id uuid references public.help_questions (id) on delete set null,
  status      text not null default 'open' check (status in ('open', 'answered', 'closed')),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  constraint help_requests_who check (user_id is not null or email is not null)
);
create index if not exists help_requests_user_time on public.help_requests (user_id, updated_at desc);
create index if not exists help_requests_status_time on public.help_requests (status, updated_at desc);
create index if not exists help_requests_question on public.help_requests (question_id);

create table if not exists public.help_messages (
  id          uuid primary key default gen_random_uuid(),
  request_id  uuid not null references public.help_requests (id) on delete cascade,
  author      text not null check (author in ('person', 'alimun')),
  author_user uuid references auth.users (id) on delete set null,
  body        text not null check (length(body) between 1 and 4000),
  created_at  timestamptz not null default now()
);
create index if not exists help_messages_request_time on public.help_messages (request_id, created_at);
create index if not exists help_messages_author_user on public.help_messages (author_user);

alter table public.help_questions enable row level security;
alter table public.help_requests enable row level security;
alter table public.help_messages enable row level security;
revoke all on public.help_questions, public.help_requests, public.help_messages from anon;
revoke insert, update, delete, truncate on public.help_questions, public.help_requests, public.help_messages from authenticated;
grant select on public.help_questions, public.help_requests, public.help_messages to authenticated;

drop policy if exists help_questions_read on public.help_questions;
create policy help_questions_read on public.help_questions for select to authenticated
  using (user_id = (select auth.uid()) or public.is_admin());
drop policy if exists help_requests_read on public.help_requests;
create policy help_requests_read on public.help_requests for select to authenticated
  using (user_id = (select auth.uid()) or public.is_admin());
drop policy if exists help_messages_read on public.help_messages;
create policy help_messages_read on public.help_messages for select to authenticated
  using (public.is_admin() or exists (select 1 from public.help_requests r where r.id = request_id and r.user_id = (select auth.uid())));

-- A reply from Alimun → the bell of the person who asked (students to /app, teachers to /app/teach).
create or replace function public.notify_help_reply()
returns trigger language plpgsql security definer set search_path = '' as $$
declare r record;
begin
  if new.author <> 'alimun' then return null; end if;
  select user_id, role, subject into r from public.help_requests where id = new.request_id;
  if r.user_id is null then return null; end if;
  perform public.notify_user(r.user_id, 'help_reply', jsonb_build_object('subject', left(coalesce(r.subject, ''), 140)),
    case when r.role = 'teacher' then '/app/teach#/support/' else '/app#/support/' end || new.request_id::text);
  return null;
end $$;
revoke execute on function public.notify_help_reply() from public, anon, authenticated;
drop trigger if exists trg_notify_help_reply on public.help_messages;
create trigger trg_notify_help_reply after insert on public.help_messages
  for each row execute function public.notify_help_reply();

-- The daily clean-up: questions after 90 days, closed requests 90 days after they were last touched.
create or replace function public.help_purge()
returns integer language plpgsql security definer set search_path = '' as $$
declare q integer; r integer;
begin
  delete from public.help_questions where created_at < now() - interval '90 days';
  get diagnostics q = row_count;
  delete from public.help_requests where status = 'closed' and updated_at < now() - interval '90 days';
  get diagnostics r = row_count;
  insert into public.cron_runs (job, result) values ('db:help-purge', jsonb_build_object('questions', q, 'requests', r));
  return q + r;
exception when others then
  insert into public.cron_runs (job, ok, result) values ('db:help-purge', false, jsonb_build_object('error', sqlerrm));
  return 0;
end $$;
revoke all on function public.help_purge() from public, anon, authenticated;

commit;

do $$
begin
  if not exists (select 1 from pg_available_extensions where name = 'pg_cron') then
    raise notice 'pg_cron not available here: schedule skipped';
    return;
  end if;
  perform cron.unschedule(jobid) from cron.job where jobname = 'alimun-help-purge';
  perform cron.schedule('alimun-help-purge', '23 3 * * *', 'select public.help_purge()');
end $$;

-- Verify: three tables with row rules, the reply trigger and the daily job
select
  (select count(*) from pg_tables where schemaname = 'public' and tablename in ('help_questions', 'help_requests', 'help_messages') and rowsecurity) as tables_with_rls,
  (select count(*) from pg_trigger where tgname = 'trg_notify_help_reply') as reply_trigger,
  (select count(*) from cron.job where jobname = 'alimun-help-purge') as purge_job;
