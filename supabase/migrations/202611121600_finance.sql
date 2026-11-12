-- Finance jobs, admin figures and tutor spend, pricing engine build step 8 (docs/PRICING_ENGINE_SPEC.md section 8;
-- docs/LAUNCH_PRICING_SPEC.md section 10).
-- Founding notices (30 days ahead) and ends; a monthly finance row (revenue by currency and band, refunds, disputes,
-- deferred revenue, the exam-guarantee reserve); the owner's acquisition spend by channel; the exchange rates the price
-- book was set with (11 Nov 2026), so the weekly check can measure drift; a per-learner daily cap on charged tutor time
-- (tutor_user_daily_minutes, 30). Idempotent; ends with a verify query.

alter table public.customer_pricing add column if not exists founding_notice_at timestamptz;
alter table public.customer_pricing add column if not exists founding_ended_at timestamptz;

create table if not exists public.finance_months (
  month date primary key check (extract(day from month) = 1),
  revenue jsonb not null default '{}'::jsonb,
  refunds jsonb not null default '{}'::jsonb,
  charges integer not null default 0,
  refunded integer not null default 0,
  disputes integer not null default 0,
  deferred_eur numeric(12, 2) not null default 0,
  reserve_eur numeric(12, 2) not null default 0,
  new_customers jsonb not null default '{}'::jsonb,
  computed_at timestamptz not null default now()
);
alter table public.finance_months enable row level security;
drop policy if exists finance_months_admin_read on public.finance_months;
create policy finance_months_admin_read on public.finance_months for select to authenticated using (public.is_admin());

create table if not exists public.marketing_spend (
  id bigint generated always as identity primary key,
  month date not null check (extract(day from month) = 1),
  channel text not null check (char_length(channel) between 1 and 60),
  amount_eur numeric(12, 2) not null check (amount_eur >= 0),
  note text check (note is null or char_length(note) <= 300),
  created_at timestamptz not null default now(),
  unique (month, channel)
);
alter table public.marketing_spend enable row level security;
drop policy if exists marketing_spend_admin on public.marketing_spend;
create policy marketing_spend_admin on public.marketing_spend for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- The rates the price book was set with (supabase/maintenance/build_pricing_seed.py, ECB of 11 Nov 2026; MAD aggregator)
insert into public.fx_rates (day, currency, per_eur, source) values
  ('2026-11-11', 'usd', 1.1127, 'pricing'), ('2026-11-11', 'cad', 1.5839, 'pricing'), ('2026-11-11', 'gbp', 0.83618, 'pricing'),
  ('2026-11-11', 'aud', 1.6222, 'pricing'), ('2026-11-11', 'chf', 0.9234, 'pricing'), ('2026-11-11', 'mad', 11.0, 'pricing')
on conflict (day, currency) do nothing;

insert into public.app_settings (key, value) values ('tutor_budget_alerted_on', '') on conflict (key) do nothing;

-- Charged tutor time: at most tutor_user_daily_minutes a day per learner (UTC day), refunds given back
create or replace function public.tutor_charge(p_student uuid, p_seconds integer, p_session uuid default null)
returns table(charged integer, remaining integer) language plpgsql security definer set search_path to '' as $function$
declare
  r public.tutor_time;
  v_left integer;
  v_want integer;
  v_plan integer;
  v_free integer;
  v_credit integer;
  v_cap integer;
  v_used integer;
begin
  if p_seconds is null or p_seconds < 1 or p_seconds > 600 then
    raise exception 'seconds must be between 1 and 600';
  end if;
  r := public.tutor_refresh(p_student);
  select coalesce(nullif(trim(value), '')::integer, 30) * 60 into v_cap from public.app_settings where key = 'tutor_user_daily_minutes';
  v_cap := coalesce(v_cap, 1800);
  select coalesce(sum(case when reason = 'use' then -seconds when reason = 'refund' then -seconds else 0 end), 0) into v_used
    from public.tutor_time_ledger
   where student_id = p_student and reason in ('use', 'refund') and created_at >= (date_trunc('day', now() at time zone 'utc') at time zone 'utc');
  v_want := least(p_seconds, greatest(0, v_cap - greatest(v_used, 0)));
  v_left := v_want;
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
  charged := v_want - v_left;
  remaining := r.plan_seconds + r.free_seconds + r.credit_seconds;
  return next;
end;
$function$;

-- Verify: the tables, the pricing-day rates and the cap setting.
select (select count(*) from information_schema.tables where table_schema = 'public' and table_name in ('finance_months', 'marketing_spend')) as tables,
       (select count(*) from public.fx_rates where day = '2026-11-11') as pricing_rates,
       (select value from public.app_settings where key = 'tutor_user_daily_minutes') as daily_minutes,
       (select count(*) from information_schema.columns where table_name = 'customer_pricing' and column_name in ('founding_notice_at', 'founding_ended_at')) as founding_cols;
