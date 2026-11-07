-- Growth plan step 3 (docs/GROWTH_PLAN.md): what each person does with their account.
-- Owner, 7 Nov 2026: "start step 3". Additive only.
--
-- activity_events holds only what no other table records: opening a dashboard, the sections opened and payments. Exercises, practice, flashcards, tutor sessions, homework, attendance, classes, 1:1s, waiting lists,
-- messages and the news choice already have their own tables; the admin timeline reads them where they are.

create table if not exists public.activity_events (
  id         bigint generated always as identity primary key,
  user_id    uuid not null references auth.users (id) on delete cascade,
  event      text not null check (event ~ '^[a-z][a-z0-9_]{1,39}$'),
  detail     jsonb not null default '{}'::jsonb check (jsonb_typeof(detail) = 'object' and pg_column_size(detail) <= 2000),
  page       text check (page is null or length(page) <= 200),
  created_at timestamptz not null default now()
);
create index if not exists activity_events_user_time on public.activity_events (user_id, created_at desc);
create index if not exists activity_events_time on public.activity_events (created_at desc);

alter table public.activity_events enable row level security;
revoke all on public.activity_events from anon;
revoke update, delete, truncate on public.activity_events from authenticated;
grant insert on public.activity_events to authenticated;

-- People write their own dashboard events (only these names); nobody reads them from the browser except admins.
drop policy if exists activity_events_insert on public.activity_events;
create policy activity_events_insert on public.activity_events for insert to authenticated
  with check (user_id = (select auth.uid()) and event in ('open_dashboard', 'view'));
drop policy if exists activity_events_select on public.activity_events;
create policy activity_events_select on public.activity_events for select to authenticated using (public.is_admin());
grant select on public.activity_events to authenticated;

-- At most 120 browser events per person per 10 minutes (a loop or a script cannot fill the table).
create or replace function public.activity_rate_limit()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  -- auth.role() comes from the request's token, so it still names a browser user inside this security definer function
  -- (is_client_write() looks at current_user, which is the function owner here).
  if coalesce(auth.role(), '') = 'authenticated' and not public.is_admin() and (
    select count(*) from public.activity_events e
    where e.user_id = new.user_id and e.created_at > now() - interval '10 minutes') >= 120 then
    return null; -- dropped quietly: activity is best effort
  end if;
  new.created_at := now();
  return new;
end $$;
drop trigger if exists trg_activity_rate_limit on public.activity_events;
create trigger trg_activity_rate_limit before insert on public.activity_events
  for each row execute function public.activity_rate_limit();

-- The sign-up date is read from auth.users (activity_all), so it covers accounts made before this table existed.
drop trigger if exists trg_record_signup_activity on auth.users;
drop function if exists public.record_signup_activity();

revoke execute on function public.activity_rate_limit() from public, anon, authenticated;

-- Every dated thing a person did, from every table (used by the timeline and the overview). Admins only.
create or replace function public.activity_all(p_user uuid default null, p_since timestamptz default '-infinity')
returns table (user_id uuid, at timestamptz, kind text, label text, detail jsonb)
language sql stable security definer set search_path = '' as $$
  with sp as (select s.id, s.user_id from public.student_profiles s where p_user is null or s.user_id = p_user)
  select e.user_id, e.created_at, e.event, null::text, e.detail from public.activity_events e
    where (p_user is null or e.user_id = p_user) and e.created_at >= p_since
  union all
  select u.id, u.created_at, 'signed_up', null, '{}'::jsonb from auth.users u
    where (p_user is null or u.id = p_user) and u.created_at >= p_since
  union all
  select u.id, u.last_sign_in_at, 'last_sign_in', null, '{}'::jsonb from auth.users u
    where (p_user is null or u.id = p_user) and u.last_sign_in_at >= p_since
  union all
  select sp.user_id, x.created_at, 'exercise', x.title, jsonb_build_object('score', x.score, 'type', x.ex_type, 'category', x.category)
    from public.exercise_results x join sp on sp.id = x.student_id where x.created_at >= p_since
  union all
  select sp.user_id, x.updated_at, 'practice', x.ex_key, jsonb_build_object('done', x.done, 'score', x.graded_score)
    from public.practice_progress x join sp on sp.id = x.student_id where x.updated_at >= p_since
  union all
  select sp.user_id, max(x.last_reviewed_at), 'flashcards', null, jsonb_build_object('cards', count(*))
    from public.vocab_reviews x join sp on sp.id = x.student_id where x.last_reviewed_at >= p_since
    group by sp.user_id, (x.last_reviewed_at at time zone 'UTC')::date
  union all
  select sp.user_id, x.started_at, 'tutor', x.title, jsonb_build_object('mode', x.mode, 'minutes', round(coalesce(x.seconds_used, 0) / 60.0, 1), 'turns', x.turns)
    from public.tutor_sessions x join sp on sp.id = x.student_id where x.started_at >= p_since
  union all
  select sp.user_id, x.submitted_at, 'homework_handed_in', a.title, jsonb_build_object('status', x.status, 'score', x.score)
    from public.assignment_submissions x join sp on sp.id = x.student_id left join public.assignments a on a.id = x.assignment_id
    where x.submitted_at >= p_since
  union all
  select sp.user_id, x.joined_at, 'class_attended', null, jsonb_build_object('minutes', x.duration_minutes)
    from public.session_attendance x join sp on sp.id = x.student_id where x.joined_at >= p_since
  union all
  select sp.user_id, x.enrolled_at, 'joined_class', c.language || ' ' || c.level, '{}'::jsonb
    from public.enrollments x join sp on sp.id = x.student_id left join public.cohorts c on c.id = x.cohort_id where x.enrolled_at >= p_since
  union all
  select sp.user_id, x.cancelled_at, 'left_class', c.language || ' ' || c.level, '{}'::jsonb
    from public.enrollments x join sp on sp.id = x.student_id left join public.cohorts c on c.id = x.cohort_id where x.cancelled_at >= p_since
  union all
  select sp.user_id, x.created_at, 'booked_1on1', x.kind, jsonb_build_object('status', x.status)
    from public.one_on_one_bookings x join sp on sp.id = x.student_id where x.created_at >= p_since
  union all
  select sp.user_id, x.added_at, 'joined_waitlist', c.language || ' ' || c.level, '{}'::jsonb
    from public.cohort_waitlist x join sp on sp.id = x.student_id left join public.cohorts c on c.id = x.cohort_id where x.added_at >= p_since
  union all
  select m.sender_user, m.created_at, 'sent_message', null, '{}'::jsonb from public.messages m
    where (p_user is null or m.sender_user = p_user) and m.created_at >= p_since
  union all
  select k.user_id, k.created_at, case when k.granted then 'news_on' else 'news_off' end, null, jsonb_build_object('source', k.source)
    from public.marketing_consents k where (p_user is null or k.user_id = p_user) and k.created_at >= p_since
$$;
revoke execute on function public.activity_all(uuid, timestamptz) from public, anon, authenticated;

-- One person's timeline, newest first (admin only).
create or replace function public.admin_activity_timeline(p_user uuid, p_before timestamptz default null, p_limit int default 60)
returns table (at timestamptz, kind text, label text, detail jsonb)
language plpgsql stable security definer set search_path = '' as $$
begin
  if not public.is_admin() then raise exception 'admins only' using errcode = '42501'; end if;
  return query
    select a.at, a.kind, a.label, a.detail from public.activity_all(p_user) a
    where a.at is not null and (p_before is null or a.at < p_before)
    order by a.at desc limit least(greatest(coalesce(p_limit, 60), 1), 200);
end $$;
revoke execute on function public.admin_activity_timeline(uuid, timestamptz, int) from public, anon;
grant execute on function public.admin_activity_timeline(uuid, timestamptz, int) to authenticated;

-- The overview (admin only): who is active, who is slipping away, sign-ups, and where students stop.
-- "Active" means doing something, not only signing in (last_sign_in, signed_up and news choices do not count).
create or replace function public.admin_activity_overview()
returns jsonb language plpgsql stable security definer set search_path = '' as $$
declare r jsonb;
begin
  if not public.is_admin() then raise exception 'admins only' using errcode = '42501'; end if;
  with acts as (
    select a.user_id, a.at from public.activity_all(null, now() - interval '120 days') a
    where a.at is not null and a.kind not in ('last_sign_in', 'signed_up', 'news_on', 'news_off')
  ),
  last_act as (select user_id, max(at) as last_at from acts group by user_id),
  people as (
    select u.id, u.email, u.created_at, coalesce(u.raw_app_meta_data ->> 'role', 'student') as role,
      coalesce(s.full_name, t.full_name, u.raw_user_meta_data ->> 'full_name') as name,
      coalesce(s.country, t.country) as country, s.id as student_id, s.tier, s.placement, s.level, la.last_at
    from auth.users u
    left join public.student_profiles s on s.user_id = u.id
    left join public.teacher_profiles t on t.user_id = u.id
    left join last_act la on la.user_id = u.id
  ),
  days as (
    select d::date as day,
      (select count(distinct a.user_id) from acts a where a.at >= d and a.at < d + interval '1 day') as active
    from generate_series((now() at time zone 'UTC')::date - 29, (now() at time zone 'UTC')::date, interval '1 day') d
  )
  select jsonb_build_object(
    'active_1d', (select count(distinct user_id) from acts where at > now() - interval '1 day'),
    'active_7d', (select count(distinct user_id) from acts where at > now() - interval '7 days'),
    'active_30d', (select count(distinct user_id) from acts where at > now() - interval '30 days'),
    'signups_7d', (select count(*) from people where created_at > now() - interval '7 days'),
    'signups_30d', (select count(*) from people where created_at > now() - interval '30 days'),
    'people', (select count(*) from people),
    'by_day', (select jsonb_agg(jsonb_build_object('day', day, 'active', active) order by day) from days),
    'slipping', (select coalesce(jsonb_agg(x order by x ->> 'last_at' desc), '[]'::jsonb) from (
      select jsonb_build_object('user_id', id, 'student_id', student_id, 'name', name, 'email', email, 'role', role, 'last_at', last_at, 'tier', tier) x
      from people where role in ('student', 'teacher') and last_at < now() - interval '14 days' and last_at > now() - interval '90 days'
      order by last_at desc limit 50) z),
    'funnel', jsonb_build_object(
      'students', (select count(*) from people where role = 'student'),
      'with_profile', (select count(*) from people where role = 'student' and student_id is not null),
      'took_level_test', (select count(*) from people where role = 'student' and (placement ? 'language' or level is not null)),
      'did_something', (select count(*) from people where role = 'student' and last_at is not null),
      'in_a_class', (select count(distinct e.student_id) from public.enrollments e where e.status = 'active'),
      'paying', (select count(*) from people where role = 'student' and tier is not null and tier not in ('free', 'waitlist'))
    ),
    'countries', (select coalesce(jsonb_agg(jsonb_build_object('country', country, 'people', n) order by n desc), '[]'::jsonb)
      from (select country, count(*) n from people where country is not null group by country) c)
  ) into r;
  return r;
end $$;
revoke execute on function public.admin_activity_overview() from public, anon;
grant execute on function public.admin_activity_overview() to authenticated;

-- Events older than 24 months are deleted (daily, with the tutor purge job's schedule).
create or replace function public.activity_purge()
returns integer language sql security definer set search_path = '' as $$
  with d as (delete from public.activity_events where created_at < now() - interval '24 months' returning 1) select count(*)::int from d
$$;
revoke execute on function public.activity_purge() from public, anon, authenticated;
do $$ begin
  if not exists (select 1 from cron.job where jobname = 'alimun-activity-purge') then
    perform cron.schedule('alimun-activity-purge', '27 3 * * *', 'select public.activity_purge()');
  end if;
end $$;

-- Verify
select
  (select relrowsecurity from pg_class where oid = 'public.activity_events'::regclass) as rls,
  (select count(*) from pg_trigger where tgname = 'trg_activity_rate_limit') as triggers,
  (select count(*) from pg_proc where proname in ('activity_all', 'admin_activity_timeline', 'admin_activity_overview', 'activity_purge')) as functions,
  (select count(*) from cron.job where jobname = 'alimun-activity-purge') as purge_job;
