-- Owner, 12 Nov 2026.
-- 1. The owner's own accounts (any email with "bchysf", and the accounts named "Test" or "Test test") are left out of
--    the admin's counts: Activity, sign-up sources and Matching mark or skip them. Nothing is deleted; the owner still
--    uses them to test classrooms.
-- 2. Tutor feedback: after 3 minutes with the tutor a learner is asked how it is going and what to improve; answering
--    once adds 5 minutes (reason 'feedback' in the tutor ledger). Written only by /api/tutor?action=feedback.
-- Idempotent. Ends with a verify query.

-- ---------- 1. Test accounts ----------
create or replace function public.is_test_user(p_user uuid)
returns boolean
language sql stable security definer set search_path to ''
as $$
  select exists (
    select 1 from auth.users u
    left join public.student_profiles s on s.user_id = u.id
    left join public.teacher_profiles t on t.user_id = u.id
    where u.id = p_user and (
      u.email ilike '%bchysf%'
      or coalesce(u.raw_app_meta_data ->> 'test', '') = 'true'
      or coalesce(s.full_name, t.full_name, '') ~* '^\s*test(\s+test)*\s*$'
    )
  );
$$;
revoke all on function public.is_test_user(uuid) from public, anon, authenticated;

-- The admin's list of test accounts, for the console to leave out of its own counts
create or replace function public.admin_test_users()
returns setof uuid
language plpgsql stable security definer set search_path to ''
as $$
begin
  if not public.is_admin() then raise exception 'admins only' using errcode = '42501'; end if;
  return query select u.id from auth.users u where public.is_test_user(u.id);
end $$;
revoke all on function public.admin_test_users() from public, anon;
grant execute on function public.admin_test_users() to authenticated;

-- Activity overview without test accounts
create or replace function public.admin_activity_overview()
returns jsonb
language plpgsql stable security definer set search_path to ''
as $function$
declare r jsonb;
begin
  if not public.is_admin() then raise exception 'admins only' using errcode = '42501'; end if;
  with tests as (select u.id from auth.users u where public.is_test_user(u.id)),
  acts as (
    select a.user_id, a.at from public.activity_all(null, now() - interval '120 days') a
    where a.at is not null and a.kind not in ('last_sign_in', 'signed_up', 'news_on', 'news_off')
      and a.user_id not in (select id from tests)
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
    where u.id not in (select id from tests)
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
    'tests', (select count(*) from tests),
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
      'in_a_class', (select count(distinct e.student_id) from public.enrollments e join public.student_profiles sp on sp.id = e.student_id
                     where e.status = 'active' and sp.user_id not in (select id from tests)),
      'paying', (select count(*) from people where role = 'student' and tier is not null and tier not in ('free', 'waitlist'))
    ),
    'countries', (select coalesce(jsonb_agg(jsonb_build_object('country', country, 'people', n) order by n desc), '[]'::jsonb)
      from (select country, count(*) n from people where country is not null group by country) c)
  ) into r;
  return r;
end $function$;

-- Sign-up sources without test accounts
create or replace function public.admin_signup_sources(p_days integer default 90)
returns jsonb
language plpgsql stable security definer set search_path to ''
as $function$
declare r jsonb; since timestamptz := now() - make_interval(days => least(greatest(coalesce(p_days, 90), 1), 3650));
begin
  if not public.is_admin() then raise exception 'admins only' using errcode = '42501'; end if;
  with people as (
    select u.id, u.email, u.created_at, coalesce(u.raw_app_meta_data ->> 'role', 'student') as role,
      coalesce(sp.full_name, tp.full_name, u.raw_user_meta_data ->> 'full_name') as name, sp.id as student_id,
      ss.heard_from, ss.heard_from_other, ss.referrer_host, ss.landing_path, ss.utm_source, ss.utm_medium, ss.utm_campaign
    from auth.users u
    left join public.signup_sources ss on ss.user_id = u.id
    left join public.student_profiles sp on sp.user_id = u.id
    left join public.teacher_profiles tp on tp.user_id = u.id
    where u.created_at >= since and not public.is_test_user(u.id)
  )
  select jsonb_build_object(
    'since', since,
    'signups', (select count(*) from people),
    'answered', (select count(*) from people where heard_from is not null),
    'tracked', (select count(*) from people where referrer_host is not null or utm_source is not null or landing_path is not null),
    'heard', (select coalesce(jsonb_agg(jsonb_build_object('heard_from', heard_from, 'people', n) order by n desc), '[]'::jsonb)
      from (select heard_from, count(*) n from people where heard_from is not null group by 1) z),
    'sites', (select coalesce(jsonb_agg(jsonb_build_object('site', site, 'people', n) order by n desc), '[]'::jsonb)
      from (select coalesce(nullif(utm_source, ''), referrer_host, 'direct') as site, count(*) n
            from people where referrer_host is not null or utm_source is not null or landing_path is not null group by 1 order by 2 desc limit 30) z),
    'recent', (select coalesce(jsonb_agg(x order by x ->> 'created_at' desc), '[]'::jsonb) from (
      select jsonb_build_object('user_id', id, 'student_id', student_id, 'name', name, 'email', email, 'role', role, 'created_at', created_at,
        'heard_from', heard_from, 'heard_from_other', heard_from_other, 'referrer_host', referrer_host, 'landing_path', landing_path,
        'utm_source', utm_source, 'utm_medium', utm_medium, 'utm_campaign', utm_campaign) x
      from people order by created_at desc limit 50) y)
  ) into r;
  return r;
end $function$;

-- Matching: each learner carries 'test' (the page leaves them out unless asked)
create or replace function public.admin_matching()
returns jsonb
language plpgsql stable security definer set search_path to ''
as $function$
declare r jsonb;
begin
  if not public.is_admin() then raise exception 'admins only' using errcode = '42501'; end if;
  with acts as (
    select a.user_id, a.at from public.activity_all(null, now() - interval '90 days') a
    where a.at is not null and a.kind not in ('last_sign_in', 'signed_up', 'news_on', 'news_off')
  ),
  act as (
    select user_id, max(at) as last_at,
      count(*) filter (where at > now() - interval '7 days') as n7,
      count(*) filter (where at > now() - interval '30 days') as n30,
      count(distinct date_trunc('day', at)) as days_active
    from acts group by user_id
  ),
  learners as (
    select jsonb_build_object(
      'id', s.id, 'user_id', s.user_id, 'name', s.full_name, 'email', u.email,
      'role', coalesce(u.raw_app_meta_data ->> 'role', 'student'),
      'test', public.is_test_user(s.user_id),
      'created_at', s.created_at, 'last_sign_in', u.last_sign_in_at,
      'language', s.language, 'level', s.level, 'placement', s.placement,
      'goal', s.goal_track, 'timeframe', s.goal_timeframe, 'timezone', s.timezone, 'country', s.country,
      'days', s.preferred_days, 'time_start', s.preferred_time_start, 'time_end', s.preferred_time_end,
      'tier', s.tier, 'sub_status', s.stripe_subscription_status, 'plan_given_until', s.plan_given_until,
      'ui_lang', s.ui_lang, 'cohort', s.enrolled_cohort_id,
      'poll', w.answers,
      'last_active', a.last_at, 'acts_7d', coalesce(a.n7, 0), 'acts_30d', coalesce(a.n30, 0), 'days_active', coalesce(a.days_active, 0),
      'tutor_min', (select round(coalesce(sum(t.seconds_used), 0) / 60.0) from public.tutor_sessions t where t.student_id in (s.id, s.user_id)),
      'exercises', (select count(*) from public.exercise_results e where e.student_id in (s.id, s.user_id)),
      'interest', (select coalesce(jsonb_agg(i.product_key), '[]'::jsonb) from public.room_interest i where i.user_id = s.user_id and i.notified_at is null),
      'quotes', (select count(*) from public.quotes q where q.user_id = s.user_id),
      -- A free first-class place (product 'trial', given free) is not a purchase: counted apart, as a sign of interest
      'paid', (select count(*) from public.entitlements en where en.user_id = s.user_id and en.status in ('active', 'pending_room', 'past_due') and en.product_key <> 'trial'),
      'free_class', (select count(*) from public.entitlements en where en.user_id = s.user_id and en.product_key = 'trial' and en.status = 'active'),
      'news', (select c.granted from public.marketing_consent_current c where c.user_id = s.user_id)
    ) as x
    from public.student_profiles s
    join auth.users u on u.id = s.user_id
    left join public.welcome_poll w on w.student_id = s.id
    left join act a on a.user_id = s.user_id
  )
  select jsonb_build_object(
    'learners', (select coalesce(jsonb_agg(x order by x ->> 'created_at' desc), '[]'::jsonb) from learners),
    'availability', (select coalesce(jsonb_agg(jsonb_build_object(
        'teacher_id', ra.teacher_id, 'teacher', tp.full_name, 'starts_on', ra.starts_on, 'kinds', ra.kinds, 'language', ra.language,
        'levels', ra.levels, 'days', ra.days, 'schedule_time', ra.schedule_time, 'timezone', ra.timezone, 'substitute', ra.substitute)), '[]'::jsonb)
      from public.room_availability ra join public.teacher_profiles tp on tp.id = ra.teacher_id where tp.status = 'approved'),
    'rooms', (select coalesce(jsonb_agg(jsonb_build_object(
        'id', c.id, 'product_key', c.product_key, 'language', c.language, 'level', c.level, 'room_state', c.room_state, 'starts_on', c.starts_on,
        'schedule_days', c.schedule_days, 'schedule_time', c.schedule_time, 'timezone', c.timezone, 'max', c.max_students, 'min', c.min_learners,
        'seats', public.room_seats(c.id))), '[]'::jsonb)
      from public.cohorts c where c.product_key is not null and c.room_state in ('draft', 'published', 'open', 'running'))
  ) into r;
  return r;
end $function$;

-- ---------- 2. Tutor feedback ----------
create table if not exists public.tutor_feedback (
  student_id uuid primary key references public.student_profiles(id) on delete cascade,
  mood text not null check (mood in ('great', 'good', 'meh')),
  improve text check (improve is null or char_length(improve) <= 1000),
  minutes_used integer not null default 0,
  seconds_added integer not null default 0,
  ui_lang text,
  created_at timestamptz not null default now()
);
alter table public.tutor_feedback enable row level security;
drop policy if exists tutor_feedback_own_read on public.tutor_feedback;
create policy tutor_feedback_own_read on public.tutor_feedback for select to authenticated
  using (student_id in (select id from public.student_profiles where user_id = (select auth.uid())));
drop policy if exists tutor_feedback_admin_read on public.tutor_feedback;
create policy tutor_feedback_admin_read on public.tutor_feedback for select to authenticated using (public.is_admin());
revoke insert, update, delete on public.tutor_feedback from anon, authenticated;
grant select on public.tutor_feedback to authenticated;

-- The 5 minutes go in as credit with their own reason
alter table public.tutor_time_ledger drop constraint if exists tutor_time_ledger_reason_check;
alter table public.tutor_time_ledger add constraint tutor_time_ledger_reason_check
  check (reason = any (array['free_grant', 'plan_month', 'plan_change', 'expire', 'use', 'purchase', 'refund', 'admin', 'feedback']));
alter table public.tutor_credit_lots drop constraint if exists tutor_credit_lots_reason_check;
alter table public.tutor_credit_lots add constraint tutor_credit_lots_reason_check
  check (reason = any (array['purchase', 'refund', 'admin', 'carried', 'feedback']));

create or replace function public.tutor_add_credit(p_student uuid, p_seconds integer, p_reason text, p_stripe_session text default null, p_note text default null, p_by uuid default null)
returns integer
language plpgsql security definer set search_path to ''
as $function$
declare
  r public.tutor_time;
  v_delta integer;
begin
  if p_reason not in ('purchase', 'refund', 'admin', 'feedback') then raise exception 'bad reason'; end if;
  if p_seconds is null or p_seconds = 0 or abs(p_seconds) > 360000 then raise exception 'bad seconds'; end if;
  if p_seconds < 0 and p_reason <> 'admin' then raise exception 'only an admin removes time'; end if;
  if p_reason = 'purchase' and p_stripe_session is null then raise exception 'a purchase needs its checkout id'; end if;
  r := public.tutor_refresh(p_student);
  if p_stripe_session is not null and (exists (select 1 from public.tutor_time_ledger where stripe_session_id = p_stripe_session)
      or exists (select 1 from public.tutor_credit_lots where stripe_session_id = p_stripe_session)) then
    return 0;
  end if;
  v_delta := greatest(p_seconds, -r.credit_seconds);
  if v_delta = 0 then return 0; end if;
  insert into public.tutor_time_ledger (student_id, seconds, bucket, reason, stripe_session_id, note, created_by)
    values (p_student, v_delta, 'credit', p_reason, p_stripe_session, left(p_note, 300), p_by);
  if v_delta > 0 then
    insert into public.tutor_credit_lots (student_id, seconds, left_seconds, reason, expires_at, stripe_session_id)
      values (p_student, v_delta, v_delta, p_reason, case when p_reason = 'purchase' then now() + interval '12 months' end, p_stripe_session);
  else
    perform public.tutor_take_lots(p_student, -v_delta, true);
  end if;
  update public.tutor_time set credit_seconds = credit_seconds + v_delta, updated_at = now() where student_id = p_student;
  return v_delta;
end;
$function$;

-- ---------- Verify ----------
select
  (select count(*) from auth.users u where public.is_test_user(u.id)) as test_accounts,
  (select count(*) from public.tutor_feedback) as feedback_rows,
  (select pg_get_constraintdef(oid) like '%feedback%' from pg_constraint where conname = 'tutor_time_ledger_reason_check') as ledger_reason,
  (select prosrc like '%feedback%' from pg_proc where proname = 'tutor_add_credit') as add_credit;
