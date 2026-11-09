-- Owner, 9 Nov 2026: add ChatGPT to "How did you hear about Alimun?". Idempotent.

alter table public.signup_sources drop constraint if exists signup_sources_heard_from_check;
alter table public.signup_sources add constraint signup_sources_heard_from_check
  check (heard_from is null or heard_from in ('search', 'chatgpt', 'instagram', 'tiktok', 'youtube', 'facebook', 'friend', 'school', 'other'));

create or replace function public.record_signup_source_row(p_user uuid, p_meta jsonb)
returns void language plpgsql security definer set search_path = '' as $$
declare s jsonb := p_meta -> 'source'; ft jsonb; h text; seen timestamptz;
  v_ref text; v_path text; v_src text; v_med text; v_camp text;
begin
  if s is null or jsonb_typeof(s) <> 'object' then return; end if;
  ft := case when jsonb_typeof(s -> 'first_touch') = 'object' then s -> 'first_touch' else '{}'::jsonb end;
  h := lower(s ->> 'heard');
  if h not in ('search', 'chatgpt', 'instagram', 'tiktok', 'youtube', 'facebook', 'friend', 'school', 'other') then h := null; end if;
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

-- Verify
select pg_get_constraintdef(oid) like '%chatgpt%' as constraint_ok,
  (select prosrc like '%chatgpt%' from pg_proc where proname = 'record_signup_source_row') as function_ok
from pg_constraint where conname = 'signup_sources_heard_from_check';
