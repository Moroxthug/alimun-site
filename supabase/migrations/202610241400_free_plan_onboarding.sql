-- Free plan and onboarding (owner, 24 Oct 2026): learners take the level test, create an account,
-- confirm their email, then give their goal and timeframe and land on the dashboard on a free plan.
-- 1. New tier 'free' (accounts created from the browser start on it; 'waitlist' stays for languages not open yet).
-- 2. goal_timeframe: the learner's ideal time to reach the goal.
-- 3. placement: the level test result (language, level, per-skill scores, topics to work on). Self-reported, so
--    it never grants access; it only shapes practice.
-- Both new columns are editable by the learner. Idempotent.

alter table public.student_profiles add column if not exists goal_timeframe text;
alter table public.student_profiles add column if not exists placement jsonb;

alter table public.student_profiles drop constraint if exists student_profiles_tier_check;
alter table public.student_profiles add constraint student_profiles_tier_check
  check (tier in ('free', 'community', 'focused', 'intensive', 'onetoone', 'private', 'daily', 'waitlist', 'founding_member'));

alter table public.student_profiles drop constraint if exists student_profiles_goal_timeframe_check;
alter table public.student_profiles add constraint student_profiles_goal_timeframe_check
  check (goal_timeframe is null or goal_timeframe in ('3_months', '6_months', '1_year', 'no_deadline'));

alter table public.student_profiles drop constraint if exists student_profiles_placement_check;
alter table public.student_profiles add constraint student_profiles_placement_check
  check (placement is null or (jsonb_typeof(placement) = 'object' and pg_column_size(placement) <= 4096));

-- Browser inserts: tier may only be 'free' or 'waitlist'; anything else becomes 'free'. founding_member is no longer
-- sold (15 Oct 2026) and can no longer be chosen from the browser (owner, 24 Oct 2026).
-- Browser updates: the learner may also change goal_timeframe and placement.
create or replace function public.guard_student_profile_columns()
 returns trigger
 language plpgsql
 set search_path to ''
as $function$
declare
  client_cols constant text[] := array[
    'full_name', 'language', 'level', 'goal_track', 'timezone',
    'preferred_time_start', 'preferred_time_end', 'preferred_days',
    'waitlist_opt_in', 'goal_timeframe', 'placement', 'updated_at'];
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
    raise exception 'only name, language, level, goal and schedule preferences can be changed from the dashboard'
      using errcode = '42501';
  end if;
  return new;
end;
$function$;

-- Verify
select conname, pg_get_constraintdef(oid) from pg_constraint
where conrelid = 'public.student_profiles'::regclass
  and conname in ('student_profiles_tier_check', 'student_profiles_goal_timeframe_check', 'student_profiles_placement_check');
