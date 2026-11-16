-- Help, Part 3 (docs/HELP_PLAN.md §5). Owner, 16 Nov 2026: "go ahead with part 3". Additive and idempotent.
--
-- help_drafts: once a week (and on demand from Admin) the server groups the questions Help could not answer well and
--   drafts a new article, or a change to an existing one, for each group. The owner edits, approves or discards them in
--   Admin → Help requests → Drafts. Only admins read them; only the server writes them.
-- help_articles: articles published from an approved draft, in every language (the owner approves the English; the
--   server translates it). They are added to, or replace by slug, the articles in js/help/<lang>.json. Everyone may read
--   them: they are the same public help text.

begin;

create table if not exists public.help_drafts (
  id           uuid primary key default gen_random_uuid(),
  kind         text not null check (kind in ('new', 'change')),
  article_slug text check (article_slug is null or article_slug ~ '^[a-z0-9-]{3,80}$'),
  section      text not null default 'help' check (section in ('help', 'support')),
  subject      text not null default 'dashboard' check (subject in ('classes', 'plans', 'dashboard', 'practice', 'tutor', 'account', 'teachers')),
  audience     text not null default 'student' check (audience in ('student', 'teacher', 'all')),
  title        text not null check (length(title) between 3 and 200),
  summary      text not null default '' check (length(summary) <= 600),
  body         jsonb not null default '[]'::jsonb check (jsonb_typeof(body) = 'array' and pg_column_size(body) <= 20000),
  missing      jsonb not null default '[]'::jsonb check (jsonb_typeof(missing) = 'array'),
  reason       text check (reason is null or length(reason) <= 1000),
  questions    jsonb not null default '[]'::jsonb check (jsonb_typeof(questions) = 'array' and pg_column_size(questions) <= 20000),
  status       text not null default 'draft' check (status in ('draft', 'approved', 'discarded')),
  created_at   timestamptz not null default now(),
  decided_at   timestamptz,
  decided_by   uuid references auth.users (id) on delete set null
);
create index if not exists help_drafts_status_time on public.help_drafts (status, created_at desc);
create index if not exists help_drafts_decided_by on public.help_drafts (decided_by);

create table if not exists public.help_articles (
  slug         text not null check (slug ~ '^[a-z0-9-]{3,80}$'),
  lang         text not null check (lang ~ '^[a-z]{2}$'),
  section      text not null check (section in ('help', 'support')),
  subject      text not null check (subject in ('classes', 'plans', 'dashboard', 'practice', 'tutor', 'account', 'teachers')),
  audience     text not null check (audience in ('student', 'teacher', 'all')),
  title        text not null check (length(title) between 3 and 200),
  summary      text not null check (length(summary) <= 600),
  body         jsonb not null check (jsonb_typeof(body) = 'array' and pg_column_size(body) <= 30000),
  related      text[] not null default '{}',
  updated      date not null default current_date,
  source_draft uuid references public.help_drafts (id) on delete set null,
  primary key (slug, lang)
);
create index if not exists help_articles_source_draft on public.help_articles (source_draft);

alter table public.help_drafts enable row level security;
alter table public.help_articles enable row level security;
revoke all on public.help_drafts from anon;
revoke insert, update, delete, truncate on public.help_drafts, public.help_articles from anon, authenticated;
grant select on public.help_drafts to authenticated;
grant select on public.help_articles to anon, authenticated;

drop policy if exists help_drafts_read on public.help_drafts;
create policy help_drafts_read on public.help_drafts for select to authenticated using (public.is_admin());
drop policy if exists help_articles_read on public.help_articles;
create policy help_articles_read on public.help_articles for select to anon, authenticated using (true);

-- The daily clean-up also drops decided drafts after 90 days (they hold copies of people's questions)
create or replace function public.help_purge()
returns integer language plpgsql security definer set search_path = '' as $$
declare q integer; r integer; d integer;
begin
  delete from public.help_questions where created_at < now() - interval '90 days';
  get diagnostics q = row_count;
  delete from public.help_requests where status = 'closed' and updated_at < now() - interval '90 days';
  get diagnostics r = row_count;
  delete from public.help_drafts where status <> 'draft' and decided_at < now() - interval '90 days';
  get diagnostics d = row_count;
  insert into public.cron_runs (job, result) values ('db:help-purge', jsonb_build_object('questions', q, 'requests', r, 'drafts', d));
  return q + r + d;
exception when others then
  insert into public.cron_runs (job, ok, result) values ('db:help-purge', false, jsonb_build_object('error', sqlerrm));
  return 0;
end $$;
revoke all on function public.help_purge() from public, anon, authenticated;

commit;

-- Verify: two tables with row rules, articles readable by everyone, drafts by admins only
select
  (select count(*) from pg_tables where schemaname = 'public' and tablename in ('help_drafts', 'help_articles') and rowsecurity) as tables_with_rls,
  (select count(*) from pg_policies where schemaname = 'public' and tablename in ('help_drafts', 'help_articles')) as policies,
  has_table_privilege('anon', 'public.help_articles', 'select') as anon_reads_articles,
  has_table_privilege('anon', 'public.help_drafts', 'select') as anon_reads_drafts;
