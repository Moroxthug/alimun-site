-- AI tutor, part 6: paid time (docs/AI_TUTOR_PLAN.md, part 6 and section 10a, question 4; owner: "just go with your
-- recommendations", 26 Oct 2026). Time bought in Stripe expires 12 months after the purchase; time an admin adds and the
-- seconds given back when the tutor could not answer do not expire. So the bought-or-added bucket (tutor_time.credit_seconds)
-- is now made of lots, each with what is left of it and, for a purchase, when it expires:
--   tutor_credit_lots   one row per addition; credit_seconds always equals the sum of left_seconds of the student's lots.
--   tutor_take_lots     takes seconds out of the lots: using the tutor takes the lot that expires first (time that never
--                       expires last); an admin removing time takes time that never expires first, then the latest lots.
--   tutor_refresh       also expires what is left of lots past their date (a ledger row 'expire' on the credit bucket).
--   tutor_charge        takes the credit part of a charge out of the lots.
--   tutor_add_credit    adds a lot (a purchase expires after 12 months); the Stripe checkout id is checked after the
--                       balance is locked, so two deliveries of one webhook add the time once.
-- Function names and arguments are unchanged, so api/tutor.js keeps working before and after this file runs.
-- Students read their own lots; nothing is written from the browser. Idempotent.

-- 1. The lots
create table if not exists public.tutor_credit_lots (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.student_profiles(id) on delete cascade,
  seconds integer not null check (seconds > 0),
  left_seconds integer not null check (left_seconds >= 0 and left_seconds <= seconds),
  reason text not null check (reason in ('purchase', 'refund', 'admin', 'carried')),
  expires_at timestamptz,
  stripe_session_id text unique,
  created_at timestamptz not null default now()
);
create index if not exists tutor_credit_lots_open on public.tutor_credit_lots (student_id, expires_at) where left_seconds > 0;

alter table public.tutor_credit_lots enable row level security;
drop policy if exists tutor_credit_lots_read on public.tutor_credit_lots;
create policy tutor_credit_lots_read on public.tutor_credit_lots for select to authenticated
  using (public.is_admin() or student_id = public.my_student_profile_id());
revoke all on public.tutor_credit_lots from anon;
revoke insert, update, delete, truncate on public.tutor_credit_lots from authenticated;
grant select on public.tutor_credit_lots to authenticated;

-- 2. Bought or added time already on a balance before this file becomes one lot that never expires
insert into public.tutor_credit_lots (student_id, seconds, left_seconds, reason)
select t.student_id, t.credit_seconds, t.credit_seconds, 'carried'
from public.tutor_time t
where t.credit_seconds > 0 and not exists (select 1 from public.tutor_credit_lots l where l.student_id = t.student_id);

-- 3. Takes p_seconds out of a student's lots (the caller holds the lock on the student's tutor_time row)
create or replace function public.tutor_take_lots(p_student uuid, p_seconds integer, p_removal boolean default false)
 returns void
 language plpgsql
 security definer
 set search_path to ''
as $$
declare
  v_left integer := p_seconds;
  v_take integer;
  l record;
begin
  if v_left is null or v_left <= 0 then return; end if;
  for l in
    select id, left_seconds from public.tutor_credit_lots
    where student_id = p_student and left_seconds > 0
    order by
      case when p_removal then (expires_at is null) end desc,
      case when p_removal then expires_at end desc,
      case when not p_removal then expires_at end asc nulls last,
      created_at
    for update
  loop
    exit when v_left <= 0;
    v_take := least(v_left, l.left_seconds);
    update public.tutor_credit_lots set left_seconds = left_seconds - v_take where id = l.id;
    v_left := v_left - v_take;
  end loop;
end;
$$;

-- 4. tutor_refresh, as in 202610262000_tutor_time.sql, plus the expiry of bought time past its date
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
  v_expired integer;
begin
  if not exists (select 1 from public.student_profiles where id = p_student) then
    raise exception 'no such student';
  end if;
  insert into public.tutor_time (student_id, free_seconds) values (p_student, 600) on conflict (student_id) do nothing;
  if found then
    insert into public.tutor_time_ledger (student_id, seconds, bucket, reason) values (p_student, 600, 'free', 'free_grant');
  end if;
  select * into r from public.tutor_time where student_id = p_student for update;

  -- Bought time past its date
  select coalesce(sum(left_seconds), 0) into v_expired from public.tutor_credit_lots
    where student_id = p_student and left_seconds > 0 and expires_at is not null and expires_at <= now();
  v_expired := least(v_expired, r.credit_seconds);
  if v_expired > 0 then
    update public.tutor_credit_lots set left_seconds = 0
      where student_id = p_student and left_seconds > 0 and expires_at is not null and expires_at <= now();
    insert into public.tutor_time_ledger (student_id, seconds, bucket, reason, note)
      values (p_student, -v_expired, 'credit', 'expire', 'bought time older than 12 months');
    update public.tutor_time set credit_seconds = credit_seconds - v_expired, updated_at = now()
      where student_id = p_student returning * into r;
  end if;

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

-- 5. tutor_charge, as before, with the credit part taken out of the lots (the lot that expires first goes first)
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
  if v_credit > 0 then
    insert into public.tutor_time_ledger (student_id, seconds, bucket, reason, session_id) values (p_student, -v_credit, 'credit', 'use', p_session);
    perform public.tutor_take_lots(p_student, v_credit, false);
  end if;
  update public.tutor_time set plan_seconds = plan_seconds - v_plan, free_seconds = free_seconds - v_free,
    credit_seconds = credit_seconds - v_credit, updated_at = now()
    where student_id = p_student returning * into r;
  charged := p_seconds - v_left;
  remaining := r.plan_seconds + r.free_seconds + r.credit_seconds;
  return next;
end;
$$;

-- 6. tutor_add_credit, as before, writing a lot: a purchase expires 12 months after it, other additions never.
--    A repeated Stripe checkout id adds nothing; it is checked once the balance is locked.
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
$$;

revoke all on function public.tutor_take_lots(uuid, integer, boolean) from public, anon, authenticated;
revoke all on function public.tutor_refresh(uuid) from public, anon, authenticated;
revoke all on function public.tutor_charge(uuid, integer, uuid) from public, anon, authenticated;
revoke all on function public.tutor_add_credit(uuid, integer, text, text, text, uuid) from public, anon, authenticated;
grant execute on function public.tutor_take_lots(uuid, integer, boolean) to service_role;
grant execute on function public.tutor_refresh(uuid) to service_role;
grant execute on function public.tutor_charge(uuid, integer, uuid) to service_role;
grant execute on function public.tutor_add_credit(uuid, integer, text, text, text, uuid) to service_role;

-- Verify: the lots table with its row rule, every balance equal to its lots, the functions closed to the browser
select
  (select rowsecurity from pg_tables where schemaname = 'public' and tablename = 'tutor_credit_lots') as lots_rls,
  (select count(*) from pg_policies where schemaname = 'public' and tablename = 'tutor_credit_lots') as lots_policies,
  (select count(*) from public.tutor_time t
     where t.credit_seconds <> coalesce((select sum(l.left_seconds) from public.tutor_credit_lots l where l.student_id = t.student_id), 0)) as balances_off,
  (select count(*) from pg_proc p join pg_namespace n on n.oid = p.pronamespace
     where n.nspname = 'public' and p.proname in ('tutor_take_lots', 'tutor_refresh', 'tutor_charge', 'tutor_add_credit')
       and not has_function_privilege('authenticated', p.oid, 'execute')) as functions_closed_to_browser;
