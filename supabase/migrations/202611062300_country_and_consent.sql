-- Growth plan step 2 (docs/GROWTH_PLAN.md): country at onboarding and marketing consent.
-- Owner, 6 Nov 2026: one tick box "Send me news and offers from Alimun", an "I am 16 or older" check, no marketing
-- under 16. Idempotent; additive only (no data removed).

-- 1. Country (ISO 3166-1 alpha-2) on profiles and email signups.
alter table public.student_profiles add column if not exists country text;
alter table public.teacher_profiles add column if not exists country text;
alter table public.email_signups    add column if not exists country text;
do $$ begin
  if not exists (select 1 from pg_constraint where conname = 'student_profiles_country_iso') then
    alter table public.student_profiles add constraint student_profiles_country_iso check (country is null or country ~ '^[A-Z]{2}$');
  end if;
  if not exists (select 1 from pg_constraint where conname = 'teacher_profiles_country_iso') then
    alter table public.teacher_profiles add constraint teacher_profiles_country_iso check (country is null or country ~ '^[A-Z]{2}$');
  end if;
  if not exists (select 1 from pg_constraint where conname = 'email_signups_country_iso') then
    alter table public.email_signups add constraint email_signups_country_iso check (country is null or country ~ '^[A-Z]{2}$');
  end if;
end $$;

-- A new profile takes the country chosen at sign-up (auth user metadata) when the insert does not set one.
create or replace function public.fill_profile_country()
returns trigger language plpgsql security definer set search_path = '' as $$
declare c text;
begin
  if new.country is null and new.user_id is not null then
    select upper(u.raw_user_meta_data ->> 'country') into c from auth.users u where u.id = new.user_id;
    if c ~ '^[A-Z]{2}$' then new.country := c; end if;
  end if;
  return new;
end $$;
drop trigger if exists trg_fill_student_country on public.student_profiles;
create trigger trg_fill_student_country before insert on public.student_profiles
  for each row execute function public.fill_profile_country();
drop trigger if exists trg_fill_teacher_country on public.teacher_profiles;
create trigger trg_fill_teacher_country before insert on public.teacher_profiles
  for each row execute function public.fill_profile_country();

-- The dashboards may change their own country (added to the columns clients may write).
create or replace function public.guard_student_profile_columns()
returns trigger language plpgsql set search_path = '' as $$
declare
  client_cols constant text[] := array[
    'full_name', 'language', 'level', 'goal_track', 'timezone',
    'preferred_time_start', 'preferred_time_end', 'preferred_days',
    'waitlist_opt_in', 'goal_timeframe', 'placement', 'country', 'updated_at'];
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
  client_cols constant text[] := array['full_name', 'bio', 'specialty', 'location', 'country', 'updated_at'];
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

-- 2. Marketing consent: one row per decision, the latest row counts. Never granted without the 16+ check.
create table if not exists public.marketing_consents (
  id              bigint generated always as identity primary key,
  user_id         uuid not null references auth.users (id) on delete cascade,
  granted         boolean not null,
  age_16_plus     boolean not null default false,
  wording_version text not null default 'v1',
  source          text not null check (source in ('signup', 'settings', 'unsubscribe', 'admin')),
  created_at      timestamptz not null default now(),
  constraint marketing_consents_age check (not granted or age_16_plus)
);
create index if not exists marketing_consents_user_time on public.marketing_consents (user_id, created_at desc);
alter table public.marketing_consents enable row level security;
revoke all on public.marketing_consents from anon;
revoke update, delete, truncate on public.marketing_consents from authenticated;
grant select, insert on public.marketing_consents to authenticated;

drop policy if exists marketing_consents_select on public.marketing_consents;
create policy marketing_consents_select on public.marketing_consents for select to authenticated
  using (user_id = (select auth.uid()) or public.is_admin());
drop policy if exists marketing_consents_insert on public.marketing_consents;
create policy marketing_consents_insert on public.marketing_consents for insert to authenticated
  with check (user_id = (select auth.uid()) and source = 'settings');

-- The choice made on the sign-up form (user metadata "marketing") becomes the first consent row.
create or replace function public.record_signup_consent()
returns trigger language plpgsql security definer set search_path = '' as $$
declare m jsonb := new.raw_user_meta_data -> 'marketing';
  adult boolean; opt boolean;
begin
  if m is null or jsonb_typeof(m) <> 'object' then return new; end if;
  adult := coalesce((m ->> 'age_16_plus')::boolean, false);
  opt := coalesce((m ->> 'opt_in')::boolean, false) and adult;
  insert into public.marketing_consents (user_id, granted, age_16_plus, wording_version, source)
  values (new.id, opt, adult, left(coalesce(m ->> 'wording', 'v1'), 20), 'signup');
  return new;
exception when others then
  -- Never block a sign-up because of the consent record.
  raise warning 'record_signup_consent: %', sqlerrm;
  return new;
end $$;
drop trigger if exists trg_record_signup_consent on auth.users;
create trigger trg_record_signup_consent after insert on auth.users
  for each row execute function public.record_signup_consent();

revoke execute on function public.fill_profile_country() from public, anon, authenticated;
revoke execute on function public.record_signup_consent() from public, anon, authenticated;

-- Each person's current choice (the latest row). security_invoker: people see their own, admins see everyone.
create or replace view public.marketing_consent_current with (security_invoker = true) as
  select distinct on (user_id) user_id, granted, age_16_plus, wording_version, source, created_at
  from public.marketing_consents
  order by user_id, created_at desc, id desc;
grant select on public.marketing_consent_current to authenticated;

-- Verify
select
  (select count(*) from information_schema.columns where table_schema = 'public' and column_name = 'country'
     and table_name in ('student_profiles', 'teacher_profiles', 'email_signups')) as country_columns,
  (select relrowsecurity from pg_class where oid = 'public.marketing_consents'::regclass) as consents_rls,
  (select count(*) from pg_trigger where tgname in ('trg_fill_student_country', 'trg_fill_teacher_country', 'trg_record_signup_consent')) as triggers;
