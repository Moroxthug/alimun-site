-- Entitlements drive access, pricing engine build step 5 (docs/PRICING_ENGINE_SPEC.md sections 5 and 6).
-- sync_access() writes student_profiles.tier (the highest active product: app, open, pack, exam) and
-- stripe_subscription_status from the learner's entitlements, so the existing dashboards, planActive() and
-- can_join_waitlist() keep working. tutor_plan_allowance() gives the monthly voice minutes of the active entitlements
-- (products.voice_minutes_month through entitlement_minutes) to learners who hold any, and the old tier minutes
-- otherwise. pause_unpaid_entitlements() pauses what has stayed unpaid for 3 days (the seat is then free).
-- The app goes on sale. Idempotent; ends with a verify query.

alter table public.entitlements add column if not exists payment_failed_at timestamptz;
alter table public.entitlements add column if not exists last_invoice_id text;

alter table public.student_profiles drop constraint if exists student_profiles_tier_check;
alter table public.student_profiles add constraint student_profiles_tier_check check (tier = any (array[
  'free', 'community', 'focused', 'intensive', 'onetoone', 'private', 'daily', 'waitlist', 'founding_member',
  'app', 'open', 'pack', 'exam']));

create or replace function public.sync_access(p_user uuid)
returns text language plpgsql security definer set search_path = '' as $$
declare
  v_top text; v_any boolean; v_paused boolean;
begin
  select case max(case p.kind when 'exam_pack' then 4 when 'level_pack' then 3 when 'company_room' then 3
                              when 'open_class' then 2 when 'app' then 1 end)
           when 4 then 'exam' when 3 then 'pack' when 2 then 'open' when 1 then 'app' end
    into v_top
    from public.entitlements e join public.products p on p.product_key = e.product_key
   where e.user_id = p_user and e.status = 'active' and (e.ends_at is null or e.ends_at > now())
     and p.kind in ('app', 'open_class', 'level_pack', 'exam_pack', 'company_room');
  if v_top is not null then
    update public.student_profiles set tier = v_top, stripe_subscription_status = 'active', updated_at = now()
     where user_id = p_user and (tier is distinct from v_top or stripe_subscription_status is distinct from 'active');
    return v_top;
  end if;
  -- Nothing active: only learners who bought through the new checkout lose access here (old plans are untouched).
  select exists (select 1 from public.entitlements e join public.products p on p.product_key = e.product_key
                  where e.user_id = p_user and e.status in ('active', 'paused', 'ended', 'refunded')
                    and p.kind in ('app', 'open_class', 'level_pack', 'exam_pack', 'company_room')) into v_any;
  if not v_any then return null; end if;
  select exists (select 1 from public.entitlements where user_id = p_user and status = 'paused') into v_paused;
  update public.student_profiles
     set stripe_subscription_status = case when v_paused then 'past_due' else 'cancelled' end, updated_at = now()
   where user_id = p_user and tier in ('app', 'open', 'pack', 'exam');
  return null;
end $$;

create or replace function public.tutor_plan_allowance(p_student uuid)
returns table(tier text, seconds integer) language sql stable security definer set search_path to '' as $$
  select sp.tier,
         case when exists (select 1 from public.entitlements e where e.user_id = sp.user_id and e.status = 'active'
                             and (e.ends_at is null or e.ends_at > now()))
              then public.entitlement_minutes(sp.user_id) * 60
              else coalesce(case when sp.stripe_subscription_status = 'active' or sp.stripe_subscription_id is null
                                      or sp.plan_given_until > now()
                                 then (select m.minutes_per_month from public.tutor_plan_minutes m where m.tier = sp.tier) end, 0) * 60
         end
  from public.student_profiles sp where sp.id = p_student;
$$;

create or replace function public.pause_unpaid_entitlements()
returns integer language plpgsql security definer set search_path = '' as $$
declare
  r record; n integer := 0;
begin
  for r in update public.entitlements set status = 'paused', updated_at = now()
            where status = 'active' and payment_failed_at is not null and payment_failed_at < now() - interval '3 days'
           returning user_id loop
    perform public.sync_access(r.user_id);
    n := n + 1;
  end loop;
  return n;
end $$;

revoke all on function public.sync_access(uuid) from public, anon, authenticated;
revoke all on function public.pause_unpaid_entitlements() from public, anon, authenticated;
grant execute on function public.sync_access(uuid) to service_role;
grant execute on function public.pause_unpaid_entitlements() to service_role;

update public.app_settings set value = 'app,' || value
 where key = 'pricing_on_sale' and value !~ '(^|,)app(,|$)';

-- Verify: the functions, the tier rule and what is on sale.
select (select count(*) from pg_proc p join pg_namespace n on n.oid = p.pronamespace where n.nspname = 'public'
          and p.proname in ('sync_access', 'pause_unpaid_entitlements', 'tutor_plan_allowance')) as functions,
       (select pg_get_constraintdef(oid) like '%exam%' from pg_constraint where conname = 'student_profiles_tier_check') as tier_rule,
       (select value from public.app_settings where key = 'pricing_on_sale') as on_sale,
       has_function_privilege('anon', 'public.sync_access(uuid)', 'execute') as anon_can_sync;
