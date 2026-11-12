-- Matching (owner, 12 Nov 2026: "see what each one's time zone is, what is their level and what is their focus ...
-- group together all people with same compatibility ... see all of this without having to ask"). Admin → Matching.
-- One read-only function for admins: every learner with what the matching engine (js/match.js) needs, the teachers'
-- room availability and the upcoming rooms with their seats. Nothing is written. Idempotent; ends with a verify query.

create or replace function public.admin_matching()
returns jsonb language plpgsql stable security definer set search_path = '' as $$
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
      'paid', (select count(*) from public.entitlements en where en.user_id = s.user_id and en.status in ('active', 'pending_room', 'past_due')),
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
end $$;
revoke execute on function public.admin_matching() from public, anon;
grant execute on function public.admin_matching() to authenticated;

-- Verify
select
  (select count(*) from pg_proc where proname = 'admin_matching') as functions,
  (select prosecdef from pg_proc where proname = 'admin_matching') as definer,
  has_function_privilege('anon', 'public.admin_matching()', 'execute') as anon_can_run;
