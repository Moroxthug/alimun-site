-- Admin can give a student a plan without payment (owner, 7 Nov 2026).
-- student_profiles.plan_given_until: while it is in the future, the student's
-- tier counts as active everywhere an active Stripe subscription is required
-- (joining classes, live sessions, 1 on 1, waiting lists, tutor minutes).
-- Only admins/service role can set it: guard_student_profile_columns() already
-- refuses client writes to any column outside its client list.
-- Idempotent.

alter table public.student_profiles add column if not exists plan_given_until timestamptz;

create or replace function public.can_join_waitlist(p_cohort_id uuid)
 returns boolean
 language sql
 stable security definer
 set search_path to ''
as $function$
  select exists (
    select 1
    from public.student_profiles sp
    join public.cohorts c on c.id = p_cohort_id
    where sp.user_id = auth.uid()
      and (sp.stripe_subscription_status = 'active' or sp.plan_given_until > now())
      and c.status in ('open', 'full')
      and lower(c.language) = lower(sp.language)
  );
$function$;

create or replace function public.tutor_plan_allowance(p_student uuid)
 returns table(tier text, seconds integer)
 language sql
 stable security definer
 set search_path to ''
as $function$
  select sp.tier,
         coalesce(case when sp.stripe_subscription_status = 'active' or sp.stripe_subscription_id is null
                            or sp.plan_given_until > now()
                       then (select m.minutes_per_month from public.tutor_plan_minutes m where m.tier = sp.tier) end, 0) * 60
  from public.student_profiles sp where sp.id = p_student;
$function$;

-- A student creating their own profile must not be able to set it.
create or replace function public.guard_student_profile_columns()
 returns trigger
 language plpgsql
 set search_path to ''
as $function$
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
    new.plan_given_until := null;
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
end $function$;

-- Verify
select exists (select 1 from information_schema.columns where table_schema = 'public' and table_name = 'student_profiles' and column_name = 'plan_given_until') as column_ok,
       position('plan_given_until' in pg_get_functiondef('public.can_join_waitlist'::regproc)) > 0 as waitlist_ok,
       position('plan_given_until' in pg_get_functiondef('public.tutor_plan_allowance'::regproc)) > 0 as tutor_ok;
