-- Each person's dashboard language, so emails can be written in it (owner, 7 Nov 2026: "save their dashboard language
-- and translate the emails"). Set from the sign-up page's language (user metadata ui_lang) when the profile is created,
-- and by the dashboards whenever they open in another language. Additive only.

alter table public.student_profiles add column if not exists ui_lang text;
alter table public.teacher_profiles add column if not exists ui_lang text;
do $$ begin
  if not exists (select 1 from pg_constraint where conname = 'student_profiles_ui_lang') then
    alter table public.student_profiles add constraint student_profiles_ui_lang check (ui_lang is null or ui_lang in ('en', 'es', 'fr', 'de', 'pt', 'it', 'zh', 'ar', 'ma'));
  end if;
  if not exists (select 1 from pg_constraint where conname = 'teacher_profiles_ui_lang') then
    alter table public.teacher_profiles add constraint teacher_profiles_ui_lang check (ui_lang is null or ui_lang in ('en', 'es', 'fr', 'de', 'pt', 'it', 'zh', 'ar', 'ma'));
  end if;
end $$;

-- New profiles take the country and the language chosen at sign-up.
create or replace function public.fill_profile_country()
returns trigger language plpgsql security definer set search_path = '' as $$
declare m jsonb; c text; l text;
begin
  if new.user_id is null then return new; end if;
  select u.raw_user_meta_data into m from auth.users u where u.id = new.user_id;
  if new.country is null then
    c := upper(m ->> 'country');
    if c ~ '^[A-Z]{2}$' then new.country := c; end if;
  end if;
  if new.ui_lang is null then
    l := lower(m ->> 'ui_lang');
    if l in ('en', 'es', 'fr', 'de', 'pt', 'it', 'zh', 'ar', 'ma') then new.ui_lang := l; end if;
  end if;
  return new;
end $$;

-- The dashboards may change ui_lang (added to the columns clients may write).
create or replace function public.guard_student_profile_columns()
returns trigger language plpgsql set search_path = '' as $$
declare
  client_cols constant text[] := array[
    'full_name', 'language', 'level', 'goal_track', 'timezone',
    'preferred_time_start', 'preferred_time_end', 'preferred_days',
    'waitlist_opt_in', 'goal_timeframe', 'placement', 'country', 'ui_lang', 'updated_at'];
begin
  if new.timezone is not null
     and (tg_op = 'INSERT' or new.timezone is distinct from old.timezone)
     and not exists (select 1 from pg_catalog.pg_timezone_names z where z.name = new.timezone) then
    raise exception 'unknown time zone' using errcode = '22023';
  end if;
  if not public.is_client_write() then return new; end if;
  if tg_op = 'INSERT' then
    new.stripe_customer_id := null;
    new.stripe_subscription_id := null;
    new.stripe_subscription_status := null;
    new.enrolled_cohort_id := null;
    if new.tier is distinct from 'waitlist' then
      new.tier := 'free';
    end if;
    return new;
  end if;
  if (to_jsonb(new) - client_cols) is distinct from (to_jsonb(old) - client_cols) then
    raise exception 'only name, language, level, goal, country and schedule preferences can be changed from the dashboard'
      using errcode = '42501';
  end if;
  return new;
end $$;

create or replace function public.guard_teacher_profile_admin_fields()
returns trigger language plpgsql set search_path = '' as $$
declare
  client_cols constant text[] := array['full_name', 'bio', 'specialty', 'location', 'country', 'ui_lang', 'updated_at'];
begin
  if not public.is_client_write() then return new; end if;
  if tg_op = 'INSERT' then
    new.status             := 'pending';
    new.rating             := 0;
    new.hourly_rate        := 22;
    new.tier_level         := 'community';
    new.sessions_delivered := 0;
    new.badges             := null;
    new.notified_at        := null;
    new.experience_years   := least(greatest(coalesce(new.experience_years, 0), 0), 60);
    return new;
  end if;
  if (to_jsonb(new) - client_cols) is distinct from (to_jsonb(old) - client_cols) then
    raise exception 'only full_name, bio, specialty, location and country can be changed from the dashboard'
      using errcode = '42501';
  end if;
  return new;
end $$;

-- reminders_due() now also returns the dashboard language (return type changes, so it is dropped first).
drop function if exists public.reminders_due();
create function public.reminders_due()
returns table (user_id uuid, kind text, email text, name text, consented boolean, params jsonb, ui_lang text)
language plpgsql stable security definer set search_path = '' as $$
begin
  if not (public.is_admin() or coalesce(auth.role(), '') = 'service_role') then
    raise exception 'admins only' using errcode = '42501';
  end if;
  return query
  with on_ as (select a.key from public.app_settings a where a.key like 'reminder_%' and coalesce(a.value, 'on') <> 'off'),
  last_act as (
    select a.user_id, max(a.at) as last_at from public.activity_all(null, now() - interval '90 days') a
    where a.kind not in ('last_sign_in', 'signed_up', 'news_on', 'news_off', 'subscribed', 'purchased', 'payment_failed', 'subscription_ended')
    group by a.user_id
  ),
  students as (
    select s.id as sid, s.user_id as uid, s.full_name, s.language, s.level, s.tier, s.placement, s.created_at, s.plan_given_until, s.ui_lang,
      u.email::text as email, coalesce(k.granted and k.age_16_plus, false) as consented
    from public.student_profiles s
    join auth.users u on u.id = s.user_id and u.deleted_at is null and coalesce(u.raw_app_meta_data ->> 'role', 'student') = 'student'
    left join public.marketing_consent_current k on k.user_id = s.user_id
  ),
  due as (
    select st.uid, 'practice_7d'::text as kind, st.email, st.full_name, st.consented, jsonb_build_object('language', st.language, 'level', st.level) as params, st.ui_lang
    from students st join last_act la on la.user_id = st.uid
    where 'reminder_practice_7d' in (select key from on_)
      and la.last_at < now() - interval '7 days' and la.last_at > now() - interval '60 days'
      and not exists (select 1 from public.reminder_log r where r.user_id = st.uid and r.kind = 'practice_7d' and r.sent_at > now() - interval '14 days')
    union all
    select st.uid, 'level_test_2d', st.email, st.full_name, st.consented, jsonb_build_object('language', coalesce(st.placement ->> 'language', st.language), 'level', coalesce(st.placement ->> 'level', st.level)), st.ui_lang
    from students st
    where 'reminder_level_test_2d' in (select key from on_)
      and (st.placement ? 'language' or st.level is not null)
      and st.created_at < now() - interval '2 days' and st.created_at > now() - interval '30 days'
      and coalesce(st.tier, 'free') in ('free', 'waitlist')
      and (st.plan_given_until is null or st.plan_given_until < now())
      and not exists (select 1 from public.enrollments e where e.student_id = st.sid and e.status = 'active')
      and not exists (select 1 from public.reminder_log r where r.user_id = st.uid and r.kind = 'level_test_2d')
    union all
    select st.uid, 'tutor_free_out', st.email, st.full_name, st.consented, jsonb_build_object('language', st.language), st.ui_lang
    from students st join public.tutor_time tt on tt.student_id = st.sid
    where 'reminder_tutor_free_out' in (select key from on_)
      and tt.free_seconds <= 0 and coalesce(tt.plan_seconds, 0) <= 0 and coalesce(tt.credit_seconds, 0) <= 0
      and coalesce(st.tier, 'free') in ('free', 'waitlist') and (st.plan_given_until is null or st.plan_given_until < now())
      and not exists (select 1 from public.reminder_log r where r.user_id = st.uid and r.kind = 'tutor_free_out' and r.sent_at > now() - interval '30 days')
  )
  select d.uid, d.kind, d.email, d.full_name, d.consented, d.params, d.ui_lang from due d;
end $$;
revoke execute on function public.reminders_due() from public, anon;
grant execute on function public.reminders_due() to authenticated, service_role;

-- campaign_audience(): a dashboard-language filter ("ui_lang") and the language in its result.
drop function if exists public.campaign_audience(jsonb);
create function public.campaign_audience(p_filter jsonb default '{}'::jsonb)
returns table (user_id uuid, email text, name text, role text, language text, level text, country text, tier text, ui_lang text)
language plpgsql stable security definer set search_path = '' as $$
declare f jsonb := coalesce(p_filter, '{}'::jsonb);
begin
  if not (public.is_admin() or coalesce(auth.role(), '') = 'service_role') then
    raise exception 'admins only' using errcode = '42501';
  end if;
  return query
  with last_act as (
    select a.user_id, max(a.at) as last_at from public.activity_all(null, now() - interval '400 days') a
    where a.kind not in ('last_sign_in', 'signed_up', 'news_on', 'news_off') group by a.user_id
  )
  select u.id, u.email::text, coalesce(s.full_name, t.full_name, u.raw_user_meta_data ->> 'full_name')::text,
    coalesce(u.raw_app_meta_data ->> 'role', 'student')::text, s.language::text, s.level::text,
    coalesce(s.country, t.country)::text, s.tier::text, coalesce(s.ui_lang, t.ui_lang)::text
  from auth.users u
  join public.marketing_consent_current k on k.user_id = u.id and k.granted and k.age_16_plus
  left join public.student_profiles s on s.user_id = u.id
  left join public.teacher_profiles t on t.user_id = u.id
  left join last_act la on la.user_id = u.id
  where u.email is not null and u.deleted_at is null
    and (f ->> 'role' is null or coalesce(u.raw_app_meta_data ->> 'role', 'student') = f ->> 'role')
    and (f ->> 'language' is null or s.language = f ->> 'language')
    and (f ->> 'level' is null or s.level = f ->> 'level')
    and (f ->> 'ui_lang' is null or coalesce(s.ui_lang, t.ui_lang, 'en') = f ->> 'ui_lang')
    and (jsonb_typeof(f -> 'countries') is distinct from 'array' or jsonb_array_length(f -> 'countries') = 0
         or coalesce(s.country, t.country) in (select jsonb_array_elements_text(f -> 'countries')))
    and (f ->> 'plan' is null
         or (f ->> 'plan' = 'free' and coalesce(s.tier, 'free') in ('free', 'waitlist'))
         or (f ->> 'plan' = 'paying' and s.tier is not null and s.tier not in ('free', 'waitlist')))
    and (f ->> 'active_within_days' is null or la.last_at > now() - make_interval(days => (f ->> 'active_within_days')::int))
    and (f ->> 'inactive_for_days' is null or la.last_at is null or la.last_at < now() - make_interval(days => (f ->> 'inactive_for_days')::int));
end $$;
revoke execute on function public.campaign_audience(jsonb) from public, anon;
grant execute on function public.campaign_audience(jsonb) to authenticated, service_role;

-- Verify
select
  (select count(*) from information_schema.columns where table_schema = 'public' and column_name = 'ui_lang' and table_name in ('student_profiles', 'teacher_profiles')) as ui_lang_columns,
  (select position('ui_lang' in prosrc) > 0 from pg_proc where proname = 'guard_student_profile_columns') as student_guard,
  (select position('ui_lang' in prosrc) > 0 from pg_proc where proname = 'fill_profile_country') as fill_trigger;
