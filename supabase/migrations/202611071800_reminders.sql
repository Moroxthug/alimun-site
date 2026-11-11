-- Growth plan step 4c (docs/GROWTH_PLAN.md): automatic reminders. Owner, 7 Nov 2026: "build all three, bell and email".
-- Run daily by api/cron-reminders.js. Each one can be paused in Admin → System → App settings (value 'off').
--   practice_7d     a student who did something before but nothing for 7 days (again at most every 14 days, and
--                   only while the last activity is less than 60 days old)
--   level_test_2d   a student who took the level test 2 to 30 days ago and has no plan, no given plan and no class
--                   (once)
--   tutor_free_out  a student on the free plan whose free tutor minutes are used up and who has no plan or bought
--                   minutes (at most every 30 days)
-- Everyone due gets it in the dashboard bell; people whose latest choice is news-and-offers "yes" (16+) also by email.
-- Additive only.

create table if not exists public.reminder_log (
  id      bigint generated always as identity primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  kind    text not null check (kind in ('practice_7d', 'level_test_2d', 'tutor_free_out')),
  emailed boolean not null default false,
  sent_at timestamptz not null default now()
);
create index if not exists reminder_log_user_kind on public.reminder_log (user_id, kind, sent_at desc);
alter table public.reminder_log enable row level security;
revoke all on public.reminder_log from anon, authenticated;
grant select on public.reminder_log to authenticated;
drop policy if exists reminder_log_admin on public.reminder_log;
create policy reminder_log_admin on public.reminder_log for select to authenticated using (public.is_admin());

insert into public.app_settings (key, value) values ('reminder_practice_7d', 'on') on conflict (key) do nothing;
insert into public.app_settings (key, value) values ('reminder_level_test_2d', 'on') on conflict (key) do nothing;
insert into public.app_settings (key, value) values ('reminder_tutor_free_out', 'on') on conflict (key) do nothing;

create or replace function public.reminders_due()
returns table (user_id uuid, kind text, email text, name text, consented boolean, params jsonb)
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
    select s.id as sid, s.user_id as uid, s.full_name, s.language, s.level, s.tier, s.placement, s.created_at, s.plan_given_until,
      u.email::text as email, coalesce(k.granted and k.age_16_plus, false) as consented
    from public.student_profiles s
    join auth.users u on u.id = s.user_id and u.deleted_at is null and coalesce(u.raw_app_meta_data ->> 'role', 'student') = 'student'
    left join public.marketing_consent_current k on k.user_id = s.user_id
  ),
  due as (
    select st.uid, 'practice_7d'::text as kind, st.email, st.full_name, st.consented, jsonb_build_object('language', st.language, 'level', st.level) as params
    from students st join last_act la on la.user_id = st.uid
    where 'reminder_practice_7d' in (select key from on_)
      and la.last_at < now() - interval '7 days' and la.last_at > now() - interval '60 days'
      and not exists (select 1 from public.reminder_log r where r.user_id = st.uid and r.kind = 'practice_7d' and r.sent_at > now() - interval '14 days')
    union all
    select st.uid, 'level_test_2d', st.email, st.full_name, st.consented, jsonb_build_object('language', coalesce(st.placement ->> 'language', st.language), 'level', coalesce(st.placement ->> 'level', st.level))
    from students st
    where 'reminder_level_test_2d' in (select key from on_)
      and (st.placement ? 'language' or st.level is not null)
      and st.created_at < now() - interval '2 days' and st.created_at > now() - interval '30 days'
      and coalesce(st.tier, 'free') in ('free', 'waitlist')
      and (st.plan_given_until is null or st.plan_given_until < now())
      and not exists (select 1 from public.enrollments e where e.student_id = st.sid and e.status = 'active')
      and not exists (select 1 from public.reminder_log r where r.user_id = st.uid and r.kind = 'level_test_2d')
    union all
    select st.uid, 'tutor_free_out', st.email, st.full_name, st.consented, jsonb_build_object('language', st.language)
    from students st join public.tutor_time tt on tt.student_id = st.sid
    where 'reminder_tutor_free_out' in (select key from on_)
      and tt.free_seconds <= 0 and coalesce(tt.plan_seconds, 0) <= 0 and coalesce(tt.credit_seconds, 0) <= 0
      and coalesce(st.tier, 'free') in ('free', 'waitlist') and (st.plan_given_until is null or st.plan_given_until < now())
      and not exists (select 1 from public.reminder_log r where r.user_id = st.uid and r.kind = 'tutor_free_out' and r.sent_at > now() - interval '30 days')
  )
  select d.uid, d.kind, d.email, d.full_name, d.consented, d.params from due d;
end $$;
revoke execute on function public.reminders_due() from public, anon;
grant execute on function public.reminders_due() to authenticated, service_role;

-- Verify
select
  (select relrowsecurity from pg_class where oid = 'public.reminder_log'::regclass) as log_rls,
  (select count(*) from public.app_settings where key like 'reminder_%') as switches,
  (select count(*) from pg_proc where proname = 'reminders_due') as function;
