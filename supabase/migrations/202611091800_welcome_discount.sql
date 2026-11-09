-- Welcome gift (owner, 9 Nov 2026: "go with the 10 euros off the first pack and future classes message").
-- Students who answered the welcome poll get 10 EUR (or the same in their currency) off their first plan or 1 on 1
-- class, once. The Stripe coupon alimun_welcome_10 (no public code) is added by api/stripe.js at checkout while
-- discount_used_at is empty; the payment webhook fills it in when that checkout is paid.
-- Admin Campaigns can choose "answered the welcome poll" (filter welcome_poll: true) to tell them first when classes
-- open; as for every campaign, only people who chose news and offers receive it. Idempotent.

alter table public.welcome_poll add column if not exists discount_used_at timestamptz;
alter table public.welcome_poll add column if not exists discount_checkout text;

create or replace function public.campaign_audience(p_filter jsonb DEFAULT '{}'::jsonb)
 RETURNS TABLE(user_id uuid, email text, name text, role text, language text, level text, country text, tier text, ui_lang text)
 LANGUAGE plpgsql
 STABLE SECURITY DEFINER
 SET search_path TO ''
AS $function$
declare f jsonb := coalesce(p_filter, '{}'::jsonb);
begin
  if not (public.is_admin() or coalesce(auth.role(), '') = 'service_role') then
    raise exception 'admins only' using errcode = '42501';
  end if;
  return query
  with last_act as (
    select a.user_id, max(a.at) as last_at from public.activity_all(null, now() - interval '400 days') a
    where a.kind not in ('last_sign_in', 'signed_up', 'news_on', 'news_off') group by a.user_id
  )
  select u.id, u.email::text, coalesce(s.full_name, t.full_name, u.raw_user_meta_data ->> 'full_name')::text,
    coalesce(u.raw_app_meta_data ->> 'role', 'student')::text, s.language::text, s.level::text,
    coalesce(s.country, t.country)::text, s.tier::text, coalesce(s.ui_lang, t.ui_lang)::text
  from auth.users u
  join public.marketing_consent_current k on k.user_id = u.id and k.granted and k.age_16_plus
  left join public.student_profiles s on s.user_id = u.id
  left join public.teacher_profiles t on t.user_id = u.id
  left join last_act la on la.user_id = u.id
  where u.email is not null and u.deleted_at is null
    and (f ->> 'role' is null or coalesce(u.raw_app_meta_data ->> 'role', 'student') = f ->> 'role')
    and (f ->> 'language' is null or s.language = f ->> 'language')
    and (f ->> 'level' is null or s.level = f ->> 'level')
    and (f ->> 'ui_lang' is null or coalesce(s.ui_lang, t.ui_lang, 'en') = f ->> 'ui_lang')
    and (jsonb_typeof(f -> 'countries') is distinct from 'array' or jsonb_array_length(f -> 'countries') = 0
         or coalesce(s.country, t.country) in (select jsonb_array_elements_text(f -> 'countries')))
    and (f ->> 'plan' is null
         or (f ->> 'plan' = 'free' and coalesce(s.tier, 'free') in ('free', 'waitlist'))
         or (f ->> 'plan' = 'paying' and s.tier is not null and s.tier not in ('free', 'waitlist')))
    and (f ->> 'active_within_days' is null or la.last_at > now() - make_interval(days => (f ->> 'active_within_days')::int))
    and (f ->> 'inactive_for_days' is null or la.last_at is null or la.last_at < now() - make_interval(days => (f ->> 'inactive_for_days')::int))
    and (coalesce((f ->> 'welcome_poll')::boolean, false) = false
         or exists (select 1 from public.welcome_poll w where w.student_id = s.id));
end $function$;

-- Verify
select column_name from information_schema.columns
where table_schema = 'public' and table_name = 'welcome_poll' and column_name in ('discount_used_at', 'discount_checkout');
