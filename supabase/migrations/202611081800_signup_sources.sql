-- Where new people come from (owner, 8 Nov 2026: "do all three").
-- 1. The sign-up form asks "How did you hear about Alimun?" (optional, everyone).
-- 2. With the cookie banner's analytics consent, the first visit's referring site, landing page and utm_* tags
--    (js/source.js) are sent with the sign-up.
-- Both arrive in the auth user metadata under "source"; a trigger copies them, cleaned, into signup_sources.
-- Admins read them (Activity page). Idempotent; additive only.

create table if not exists public.signup_sources (
  user_id          uuid primary key references auth.users (id) on delete cascade,
  heard_from       text check (heard_from is null or heard_from in ('search', 'instagram', 'tiktok', 'youtube', 'facebook', 'friend', 'school', 'other')),
  heard_from_other text check (heard_from_other is null or char_length(heard_from_other) <= 100),
  referrer_host    text check (referrer_host is null or char_length(referrer_host) <= 100),
  landing_path     text check (landing_path is null or char_length(landing_path) <= 200),
  utm_source       text check (utm_source is null or char_length(utm_source) <= 100),
  utm_medium       text check (utm_medium is null or char_length(utm_medium) <= 100),
  utm_campaign     text check (utm_campaign is null or char_length(utm_campaign) <= 100),
  first_seen_at    timestamptz,
  created_at       timestamptz not null default now()
);
alter table public.signup_sources enable row level security;
revoke all on public.signup_sources from anon, authenticated;
grant select on public.signup_sources to authenticated;
drop policy if exists signup_sources_admin_read on public.signup_sources;
create policy signup_sources_admin_read on public.signup_sources for select to authenticated using (public.is_admin());

-- Copies the "source" part of a user's sign-up metadata into signup_sources (cleaned; nothing when empty).
create or replace function public.record_signup_source_row(p_user uuid, p_meta jsonb)
returns void language plpgsql security definer set search_path = '' as $$
declare s jsonb := p_meta -> 'source'; ft jsonb; h text; seen timestamptz;
  v_ref text; v_path text; v_src text; v_med text; v_camp text;
begin
  if s is null or jsonb_typeof(s) <> 'object' then return; end if;
  ft := case when jsonb_typeof(s -> 'first_touch') = 'object' then s -> 'first_touch' else '{}'::jsonb end;
  h := lower(s ->> 'heard');
  if h not in ('search', 'instagram', 'tiktok', 'youtube', 'facebook', 'friend', 'school', 'other') then h := null; end if;
  v_ref  := nullif(left(lower(regexp_replace(coalesce(ft ->> 'ref', ''), '[^a-zA-Z0-9.-]', '', 'g')), 100), '');
  v_path := nullif(left(coalesce(ft ->> 'path', ''), 200), '');
  v_src  := nullif(left(btrim(ft ->> 'utm_source'), 100), '');
  v_med  := nullif(left(btrim(ft ->> 'utm_medium'), 100), '');
  v_camp := nullif(left(btrim(ft ->> 'utm_campaign'), 100), '');
  if h is null and v_ref is null and v_path is null and v_src is null then return; end if;
  begin seen := (ft ->> 'at')::timestamptz; exception when others then seen := null; end;
  if seen is not null and (seen > now() + interval '1 day' or seen < now() - interval '2 years') then seen := null; end if;
  insert into public.signup_sources (user_id, heard_from, heard_from_other, referrer_host, landing_path, utm_source, utm_medium, utm_campaign, first_seen_at)
  values (p_user, h, case when h = 'other' then nullif(left(btrim(s ->> 'heard_other'), 100), '') end, v_ref, v_path, v_src, v_med, v_camp, seen)
  on conflict (user_id) do nothing;
end $$;
revoke execute on function public.record_signup_source_row(uuid, jsonb) from public, anon, authenticated;

create or replace function public.record_signup_source()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  perform public.record_signup_source_row(new.id, new.raw_user_meta_data);
  return new;
exception when others then
  -- Never block a sign-up because of the source record.
  raise warning 'record_signup_source: %', sqlerrm;
  return new;
end $$;
drop trigger if exists trg_record_signup_source on auth.users;
create trigger trg_record_signup_source after insert on auth.users
  for each row execute function public.record_signup_source();
revoke execute on function public.record_signup_source() from public, anon, authenticated;

-- Backfill: accounts created before the trigger existed keep their answer in the user metadata; record them once.
do $$ declare u record; begin
  for u in select id, raw_user_meta_data from auth.users where raw_user_meta_data ? 'source'
           and not exists (select 1 from public.signup_sources ss where ss.user_id = auth.users.id) loop
    perform public.record_signup_source_row(u.id, u.raw_user_meta_data);
  end loop;
end $$;

-- Admin summary for the Activity page: counts for the last p_days days, plus the latest 50 sign-ups with their source.
create or replace function public.admin_signup_sources(p_days integer default 90)
returns jsonb language plpgsql stable security definer set search_path = '' as $$
declare r jsonb; since timestamptz := now() - make_interval(days => least(greatest(coalesce(p_days, 90), 1), 3650));
begin
  if not public.is_admin() then raise exception 'admins only' using errcode = '42501'; end if;
  with people as (
    select u.id, u.email, u.created_at, coalesce(u.raw_app_meta_data ->> 'role', 'student') as role,
      coalesce(sp.full_name, tp.full_name, u.raw_user_meta_data ->> 'full_name') as name, sp.id as student_id,
      ss.heard_from, ss.heard_from_other, ss.referrer_host, ss.landing_path, ss.utm_source, ss.utm_medium, ss.utm_campaign
    from auth.users u
    left join public.signup_sources ss on ss.user_id = u.id
    left join public.student_profiles sp on sp.user_id = u.id
    left join public.teacher_profiles tp on tp.user_id = u.id
    where u.created_at >= since
  )
  select jsonb_build_object(
    'since', since,
    'signups', (select count(*) from people),
    'answered', (select count(*) from people where heard_from is not null),
    'tracked', (select count(*) from people where referrer_host is not null or utm_source is not null or landing_path is not null),
    'heard', (select coalesce(jsonb_agg(jsonb_build_object('heard_from', heard_from, 'people', n) order by n desc), '[]'::jsonb)
      from (select heard_from, count(*) n from people where heard_from is not null group by 1) z),
    'sites', (select coalesce(jsonb_agg(jsonb_build_object('site', site, 'people', n) order by n desc), '[]'::jsonb)
      from (select coalesce(nullif(utm_source, ''), referrer_host, 'direct') as site, count(*) n
            from people where referrer_host is not null or utm_source is not null or landing_path is not null group by 1 order by 2 desc limit 30) z),
    'recent', (select coalesce(jsonb_agg(x order by x ->> 'created_at' desc), '[]'::jsonb) from (
      select jsonb_build_object('user_id', id, 'student_id', student_id, 'name', name, 'email', email, 'role', role, 'created_at', created_at,
        'heard_from', heard_from, 'heard_from_other', heard_from_other, 'referrer_host', referrer_host, 'landing_path', landing_path,
        'utm_source', utm_source, 'utm_medium', utm_medium, 'utm_campaign', utm_campaign) x
      from people order by created_at desc limit 50) y)
  ) into r;
  return r;
end $$;
revoke execute on function public.admin_signup_sources(integer) from public, anon;
grant execute on function public.admin_signup_sources(integer) to authenticated;

-- Verify
select
  (select relrowsecurity from pg_class where oid = 'public.signup_sources'::regclass) as rls,
  (select count(*) from pg_trigger where tgname = 'trg_record_signup_source') as triggers,
  (select count(*) from pg_proc where proname in ('record_signup_source', 'record_signup_source_row', 'admin_signup_sources')) as functions;
