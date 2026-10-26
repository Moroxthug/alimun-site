-- AI tutor, part 1: tutor time (docs/AI_TUTOR_PLAN.md, sections 4 and 8; owner: "go ahead with part 1", 26 Oct 2026).
-- Three buckets per student: the free 10 minutes (granted once, the first time the student opens the Tutor), the plan's
-- minutes for the current calendar month (UTC, unused minutes do not carry over) and bought or added time (never expires).
-- Every change is a row in tutor_time_ledger, so each bucket equals the sum of its ledger rows.
-- Students read their own rows; nothing is written from the browser: the server (service role) calls the functions below.
-- Admins read everything and change the minutes per plan. Idempotent.

-- 1. Minutes per plan and month (proposal in the plan, question 3; the admin changes them on the System page)
create table if not exists public.tutor_plan_minutes (
  tier text primary key check (tier in ('free', 'community', 'focused', 'intensive', 'onetoone', 'private', 'daily', 'waitlist', 'founding_member')),
  minutes_per_month integer not null check (minutes_per_month between 0 and 10000),
  updated_at timestamptz not null default now()
);
insert into public.tutor_plan_minutes (tier, minutes_per_month) values
  ('free', 0), ('waitlist', 0), ('founding_member', 0),
  ('community', 30), ('focused', 60), ('intensive', 120), ('private', 120), ('onetoone', 120), ('daily', 120)
on conflict (tier) do nothing;

-- 2. The balance
create table if not exists public.tutor_time (
  student_id uuid primary key references public.student_profiles(id) on delete cascade,
  free_seconds integer not null default 0 check (free_seconds >= 0),
  plan_seconds integer not null default 0 check (plan_seconds >= 0),
  plan_granted integer not null default 0 check (plan_granted >= 0),
  plan_period text check (plan_period is null or plan_period ~ '^\d{4}-\d{2}$'),
  plan_tier text,
  credit_seconds integer not null default 0 check (credit_seconds >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 3. Every change
create table if not exists public.tutor_time_ledger (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.student_profiles(id) on delete cascade,
  seconds integer not null check (seconds <> 0),
  bucket text not null check (bucket in ('free', 'plan', 'credit')),
  reason text not null check (reason in ('free_grant', 'plan_month', 'plan_change', 'expire', 'use', 'purchase', 'refund', 'admin')),
  session_id uuid,
  stripe_session_id text unique,
  note text check (note is null or char_length(note) <= 300),
  created_by uuid,
  created_at timestamptz not null default now()
);
create index if not exists tutor_time_ledger_student on public.tutor_time_ledger (student_id, created_at desc);

-- 4. Row rules
alter table public.tutor_plan_minutes enable row level security;
alter table public.tutor_time enable row level security;
alter table public.tutor_time_ledger enable row level security;

drop policy if exists tutor_plan_minutes_read on public.tutor_plan_minutes;
create policy tutor_plan_minutes_read on public.tutor_plan_minutes for select to authenticated using (true);
drop policy if exists tutor_plan_minutes_admin on public.tutor_plan_minutes;
create policy tutor_plan_minutes_admin on public.tutor_plan_minutes for update to authenticated
  using (public.is_admin()) with check (public.is_admin());

drop policy if exists tutor_time_read on public.tutor_time;
create policy tutor_time_read on public.tutor_time for select to authenticated
  using (public.is_admin() or student_id = public.my_student_profile_id());

drop policy if exists tutor_time_ledger_read on public.tutor_time_ledger;
create policy tutor_time_ledger_read on public.tutor_time_ledger for select to authenticated
  using (public.is_admin() or student_id = public.my_student_profile_id());

revoke insert, update, delete, truncate on public.tutor_time, public.tutor_time_ledger from anon, authenticated;
revoke insert, delete, truncate on public.tutor_plan_minutes from anon, authenticated;
revoke all on public.tutor_plan_minutes, public.tutor_time, public.tutor_time_ledger from anon;
grant select on public.tutor_plan_minutes, public.tutor_time, public.tutor_time_ledger to authenticated;
grant update (minutes_per_month, updated_at) on public.tutor_plan_minutes to authenticated;

-- 5. The plan's minutes a student has this month: a paid plan counts while its subscription is active, or when an admin
--    set the plan by hand (no Stripe subscription). Free, waiting list and founding member: none.
create or replace function public.tutor_plan_allowance(p_student uuid)
 returns table (tier text, seconds integer)
 language sql
 stable security definer
 set search_path to ''
as $$
  select sp.tier,
         coalesce(case when sp.stripe_subscription_status = 'active' or sp.stripe_subscription_id is null
                       then (select m.minutes_per_month from public.tutor_plan_minutes m where m.tier = sp.tier) end, 0) * 60
  from public.student_profiles sp where sp.id = p_student;
$$;

-- 6. Brings a student's balance up to date and returns it: creates it with the free 10 minutes on first use, starts a
--    new month's plan minutes (the old month's unused ones expire), and follows a change of plan within the month
--    (the new allowance minus what was already used this month).
create or replace function public.tutor_refresh(p_student uuid)
 returns public.tutor_time
 language plpgsql
 security definer
 set search_path to ''
as $$
declare
  r public.tutor_time;
  v_tier text;
  v_allow integer;
  v_period text := to_char(now() at time zone 'utc', 'YYYY-MM');
  v_used integer;
  v_new integer;
begin
  if not exists (select 1 from public.student_profiles where id = p_student) then
    raise exception 'no such student';
  end if;
  insert into public.tutor_time (student_id, free_seconds) values (p_student, 600) on conflict (student_id) do nothing;
  if found then
    insert into public.tutor_time_ledger (student_id, seconds, bucket, reason) values (p_student, 600, 'free', 'free_grant');
  end if;
  select * into r from public.tutor_time where student_id = p_student for update;
  select a.tier, a.seconds into v_tier, v_allow from public.tutor_plan_allowance(p_student) a;
  v_allow := coalesce(v_allow, 0);

  if r.plan_period is distinct from v_period then
    if r.plan_seconds > 0 then
      insert into public.tutor_time_ledger (student_id, seconds, bucket, reason, note)
        values (p_student, -r.plan_seconds, 'plan', 'expire', coalesce(r.plan_period, ''));
    end if;
    if v_allow > 0 then
      insert into public.tutor_time_ledger (student_id, seconds, bucket, reason, note) values (p_student, v_allow, 'plan', 'plan_month', v_period);
    end if;
    update public.tutor_time set plan_seconds = v_allow, plan_granted = v_allow, plan_period = v_period, plan_tier = v_tier, updated_at = now()
      where student_id = p_student returning * into r;
  elsif v_allow <> r.plan_granted then
    v_used := greatest(0, r.plan_granted - r.plan_seconds);
    v_new := greatest(0, v_allow - v_used);
    if v_new <> r.plan_seconds then
      insert into public.tutor_time_ledger (student_id, seconds, bucket, reason, note)
        values (p_student, v_new - r.plan_seconds, 'plan', 'plan_change', coalesce(v_tier, ''));
    end if;
    update public.tutor_time set plan_seconds = v_new, plan_granted = v_allow, plan_tier = v_tier, updated_at = now()
      where student_id = p_student returning * into r;
  end if;
  return r;
end;
$$;

-- 7. Takes up to p_seconds (1 to 600) from the plan's minutes, then the free minutes, then bought time, in one locked
--    transaction. Returns how many seconds were taken (0 when nothing is left) and what remains.
create or replace function public.tutor_charge(p_student uuid, p_seconds integer, p_session uuid default null)
 returns table (charged integer, remaining integer)
 language plpgsql
 security definer
 set search_path to ''
as $$
declare
  r public.tutor_time;
  v_left integer;
  v_plan integer;
  v_free integer;
  v_credit integer;
begin
  if p_seconds is null or p_seconds < 1 or p_seconds > 600 then
    raise exception 'seconds must be between 1 and 600';
  end if;
  r := public.tutor_refresh(p_student);
  v_left := p_seconds;
  v_plan := least(v_left, r.plan_seconds);     v_left := v_left - v_plan;
  v_free := least(v_left, r.free_seconds);     v_left := v_left - v_free;
  v_credit := least(v_left, r.credit_seconds); v_left := v_left - v_credit;
  if v_plan > 0 then insert into public.tutor_time_ledger (student_id, seconds, bucket, reason, session_id) values (p_student, -v_plan, 'plan', 'use', p_session); end if;
  if v_free > 0 then insert into public.tutor_time_ledger (student_id, seconds, bucket, reason, session_id) values (p_student, -v_free, 'free', 'use', p_session); end if;
  if v_credit > 0 then insert into public.tutor_time_ledger (student_id, seconds, bucket, reason, session_id) values (p_student, -v_credit, 'credit', 'use', p_session); end if;
  update public.tutor_time set plan_seconds = plan_seconds - v_plan, free_seconds = free_seconds - v_free,
    credit_seconds = credit_seconds - v_credit, updated_at = now()
    where student_id = p_student returning * into r;
  charged := p_seconds - v_left;
  remaining := r.plan_seconds + r.free_seconds + r.credit_seconds;
  return next;
end;
$$;

-- 8. Adds (or, for an admin, removes) bought time. A purchase or refund carries its Stripe checkout id, so a repeated
--    webhook adds nothing. Removing never goes below zero. Returns the seconds actually added or removed.
create or replace function public.tutor_add_credit(p_student uuid, p_seconds integer, p_reason text,
  p_stripe_session text default null, p_note text default null, p_by uuid default null)
 returns integer
 language plpgsql
 security definer
 set search_path to ''
as $$
declare
  r public.tutor_time;
  v_delta integer;
begin
  if p_reason not in ('purchase', 'refund', 'admin') then raise exception 'bad reason'; end if;
  if p_seconds is null or p_seconds = 0 or abs(p_seconds) > 360000 then raise exception 'bad seconds'; end if;
  if p_seconds < 0 and p_reason <> 'admin' then raise exception 'only an admin removes time'; end if;
  if p_stripe_session is not null and exists (select 1 from public.tutor_time_ledger where stripe_session_id = p_stripe_session) then
    return 0;
  end if;
  r := public.tutor_refresh(p_student);
  v_delta := greatest(p_seconds, -r.credit_seconds);
  if v_delta = 0 then return 0; end if;
  insert into public.tutor_time_ledger (student_id, seconds, bucket, reason, stripe_session_id, note, created_by)
    values (p_student, v_delta, 'credit', p_reason, p_stripe_session, left(p_note, 300), p_by);
  update public.tutor_time set credit_seconds = credit_seconds + v_delta, updated_at = now() where student_id = p_student;
  return v_delta;
end;
$$;

revoke all on function public.tutor_plan_allowance(uuid) from public, anon, authenticated;
revoke all on function public.tutor_refresh(uuid) from public, anon, authenticated;
revoke all on function public.tutor_charge(uuid, integer, uuid) from public, anon, authenticated;
revoke all on function public.tutor_add_credit(uuid, integer, text, text, text, uuid) from public, anon, authenticated;
grant execute on function public.tutor_plan_allowance(uuid) to service_role;
grant execute on function public.tutor_refresh(uuid) to service_role;
grant execute on function public.tutor_charge(uuid, integer, uuid) to service_role;
grant execute on function public.tutor_add_credit(uuid, integer, text, text, text, uuid) to service_role;

-- Verify: three tables with row rules, the plan minutes, and the functions closed to the browser
select
  (select count(*) from pg_tables where schemaname = 'public' and tablename in ('tutor_plan_minutes', 'tutor_time', 'tutor_time_ledger') and rowsecurity) as tables_with_rls,
  (select string_agg(tier || '=' || minutes_per_month, ', ' order by tier) from public.tutor_plan_minutes) as plan_minutes,
  (select count(*) from pg_proc p join pg_namespace n on n.oid = p.pronamespace
     where n.nspname = 'public' and p.proname in ('tutor_plan_allowance', 'tutor_refresh', 'tutor_charge', 'tutor_add_credit')
       and not has_function_privilege('authenticated', p.oid, 'execute')) as functions_closed_to_browser;
