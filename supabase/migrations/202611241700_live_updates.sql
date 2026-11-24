-- Live updates (owner, 24 Nov 2026: "the chat with support should update live … improve the reactiveness of
-- notifications, activity flow from admin panel … more analytics control over everything").
--
-- 1. The tables the dashboards and the admin console watch are added to Supabase Realtime (publication
--    supabase_realtime). Realtime applies each table's row rules (RLS) per subscriber, so a person only receives
--    changes to rows they could already read: their own notifications, support conversations and message threads;
--    the admin everything. Nothing about who may read what changes here.
-- 2. public.online_now: one row per signed-in person with a dashboard open (student, teacher), the section on show
--    and when it was last seen. Written only through public.touch_online() (the dashboard calls it on every section
--    change and once a minute while the tab is visible); readable only by admins. Admin → Activity → Online now.
-- Idempotent. Ends with a verify query.

create table if not exists public.online_now (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  dashboard  text not null check (dashboard in ('student', 'teacher')),
  section    text check (section is null or section ~ '^[a-z0-9_-]{1,40}$'),
  page       text check (page is null or length(page) <= 200),
  started_at timestamptz not null default now(),
  seen_at    timestamptz not null default now()
);
create index if not exists online_now_seen on public.online_now (seen_at desc);

alter table public.online_now enable row level security;
revoke all on public.online_now from anon, authenticated;
grant select on public.online_now to authenticated;
drop policy if exists online_now_admin on public.online_now;
create policy online_now_admin on public.online_now for select to authenticated using (public.is_admin());

-- A visit counts as the same one while the person was seen in the last 10 minutes; after that started_at restarts.
create or replace function public.touch_online(p_dashboard text, p_section text, p_page text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  me uuid := auth.uid();
begin
  if me is null or p_dashboard not in ('student', 'teacher') then return; end if;
  if p_section is not null and p_section !~ '^[a-z0-9_-]{1,40}$' then p_section := null; end if;
  insert into public.online_now as o (user_id, dashboard, section, page, started_at, seen_at)
  values (me, p_dashboard, p_section, left(p_page, 200), now(), now())
  on conflict (user_id) do update
    set dashboard = excluded.dashboard, section = excluded.section, page = excluded.page, seen_at = now(),
        started_at = case when o.seen_at < now() - interval '10 minutes' then now() else o.started_at end;
end;
$$;
revoke all on function public.touch_online(text, text, text) from public, anon;
grant execute on function public.touch_online(text, text, text) to authenticated;

-- Realtime publication (Supabase creates it; add each table once)
do $$
declare t text;
begin
  if not exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
    create publication supabase_realtime;
  end if;
  foreach t in array array[
    'help_requests', 'help_messages', 'messages', 'notifications', 'activity_events', 'online_now',
    'student_profiles', 'teacher_profiles', 'entitlements', 'enrollments', 'assignment_submissions',
    'tutor_sessions', 'contact_messages', 'cohort_waitlist', 'session_attendance'
  ] loop
    if to_regclass('public.' || t) is not null and not exists (
      select 1 from pg_publication_tables where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = t
    ) then
      execute format('alter publication supabase_realtime add table public.%I', t);
    end if;
  end loop;
end $$;

-- Verify
select (select count(*) from pg_publication_tables where pubname = 'supabase_realtime' and schemaname = 'public') as live_tables,
       to_regclass('public.online_now') is not null as online_table,
       to_regprocedure('public.touch_online(text, text, text)') is not null as touch_fn;
