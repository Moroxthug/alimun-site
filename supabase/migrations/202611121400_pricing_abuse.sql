-- Abuse checks, pricing engine build step 6 (docs/PRICING_ENGINE_SPEC.md section 7).
-- The free tutor minutes go once per inbox (Gmail dots and +tags count as one) and never to a throwaway domain;
-- quotes keep the country the visitor was in (beside the card's country, for the weekly report); abuse_log keeps
-- refused trials, disputes and country mismatches for the admin; store purchases (RevenueCat) get one entitlement per
-- original transaction. Idempotent; ends with a verify query.

create table if not exists public.disposable_domains (
  domain text primary key check (domain ~ '^[a-z0-9.-]+\.[a-z]{2,}$'),
  added_at timestamptz not null default now()
);
alter table public.disposable_domains enable row level security;
drop policy if exists disposable_domains_admin on public.disposable_domains;
create policy disposable_domains_admin on public.disposable_domains for all to authenticated using (public.is_admin()) with check (public.is_admin());

insert into public.disposable_domains (domain) values
  ('mailinator.com'), ('guerrillamail.com'), ('guerrillamail.net'), ('guerrillamail.org'), ('sharklasers.com'), ('grr.la'),
  ('10minutemail.com'), ('10minutemail.net'), ('tempmail.com'), ('temp-mail.org'), ('temp-mail.io'), ('tempmail.net'),
  ('tempmailo.com'), ('tempr.email'), ('throwawaymail.com'), ('yopmail.com'), ('yopmail.fr'), ('yopmail.net'),
  ('trashmail.com'), ('trashmail.de'), ('trashmail.net'), ('getnada.com'), ('nada.email'), ('dispostable.com'),
  ('maildrop.cc'), ('mailnesia.com'), ('mintemail.com'), ('mohmal.com'), ('fakeinbox.com'), ('emailondeck.com'),
  ('spamgourmet.com'), ('mailcatch.com'), ('mytemp.email'), ('tempinbox.com'), ('mail.tm'), ('mail.gw'),
  ('burnermail.io'), ('moakt.com'), ('emailfake.com'), ('fakemail.net'), ('inboxkitten.com'), ('mailpoof.com'),
  ('getairmail.com'), ('discard.email'), ('spambox.us'), ('33mail.com'), ('mvrht.net'), ('mailsac.com'),
  ('tmpmail.org'), ('tmpmail.net'), ('dropmail.me'), ('emltmp.com'), ('linshiyouxiang.net'), ('10mail.org'),
  ('anonbox.net'), ('harakirimail.com'), ('incognitomail.org'), ('jetable.org'), ('mailforspam.com'), ('spam4.me'),
  ('tempail.com'), ('tempmailaddress.com'), ('trbvm.com'), ('wegwerfmail.de'), ('wegwerfmail.net'), ('byom.de'),
  ('mailexpire.com'), ('owlymail.com'), ('pokemail.net'), ('rootfest.net'), ('spamfree24.org'), ('tempomail.fr')
on conflict (domain) do nothing;

-- The same rule as normaliseEmail() in api/_lib/pricing.js
create or replace function public.normalised_email(p_email text)
returns text language sql immutable set search_path = '' as $$
  with e as (select lower(trim(coalesce(p_email, ''))) as v),
       parts as (select split_part(v, '@', 1) as l, case when split_part(v, '@', 2) = 'googlemail.com' then 'gmail.com' else split_part(v, '@', 2) end as d from e)
  select case when d = '' then (select v from e)
              else (case when d = 'gmail.com' then replace(split_part(l, '+', 1), '.', '') else split_part(l, '+', 1) end) || '@' || d end
  from parts;
$$;

create or replace function public.is_disposable_email(p_email text)
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.disposable_domains d
                  where d.domain = lower(split_part(coalesce(p_email, ''), '@', 2))
                     or lower(split_part(coalesce(p_email, ''), '@', 2)) like '%.' || d.domain);
$$;

create table if not exists public.abuse_log (
  id bigint generated always as identity primary key,
  at timestamptz not null default now(),
  kind text not null check (kind in ('trial_refused', 'country_mismatch', 'dispute', 'disposable_email', 'free_minutes_withheld')),
  user_id uuid references auth.users (id) on delete set null,
  detail jsonb not null default '{}'::jsonb
);
create index if not exists abuse_log_at_idx on public.abuse_log (at desc);
alter table public.abuse_log enable row level security;
drop policy if exists abuse_log_admin_read on public.abuse_log;
create policy abuse_log_admin_read on public.abuse_log for select to authenticated using (public.is_admin());

alter table public.quotes add column if not exists ip_country text check (ip_country is null or ip_country ~ '^[A-Z]{2}$');

create unique index if not exists entitlements_store_tx_idx on public.entitlements (store_transaction_id);

-- Free minutes: the first refresh grants 10 minutes, unless the inbox already had them or the domain is a throwaway
create or replace function public.tutor_refresh(p_student uuid)
returns public.tutor_time language plpgsql security definer set search_path to '' as $function$
declare
  r public.tutor_time;
  v_tier text;
  v_allow integer;
  v_period text := to_char(now() at time zone 'utc', 'YYYY-MM');
  v_used integer;
  v_new integer;
  v_expired integer;
  v_email text;
  v_free integer := 600;
  v_user uuid;
begin
  if not exists (select 1 from public.student_profiles where id = p_student) then
    raise exception 'no such student';
  end if;
  if not exists (select 1 from public.tutor_time where student_id = p_student) then
    select u.email, u.id into v_email, v_user from public.student_profiles sp join auth.users u on u.id = sp.user_id where sp.id = p_student;
    if public.is_disposable_email(v_email) then
      v_free := 0;
      insert into public.abuse_log (kind, user_id, detail) values ('free_minutes_withheld', v_user, jsonb_build_object('why', 'disposable domain'));
    elsif exists (select 1 from public.tutor_time tt join public.student_profiles sp2 on sp2.id = tt.student_id
                    join auth.users u2 on u2.id = sp2.user_id
                   where sp2.id <> p_student and public.normalised_email(u2.email) = public.normalised_email(v_email)) then
      v_free := 0;
      insert into public.abuse_log (kind, user_id, detail) values ('free_minutes_withheld', v_user, jsonb_build_object('why', 'same inbox already had them'));
    end if;
  end if;
  insert into public.tutor_time (student_id, free_seconds) values (p_student, v_free) on conflict (student_id) do nothing;
  if found and v_free > 0 then
    insert into public.tutor_time_ledger (student_id, seconds, bucket, reason) values (p_student, v_free, 'free', 'free_grant');
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
$function$;

-- Verify: the inbox rule, a throwaway domain, and the new tables.
select public.normalised_email(' A.Li.Mun+x@GoogleMail.com ') = 'alimun@gmail.com' as gmail_rule,
       public.normalised_email('a.b+c@example.com') = 'a.b@example.com' as other_rule,
       public.is_disposable_email('x@mailinator.com') and not public.is_disposable_email('x@gmail.com') as disposable_rule,
       (select count(*) from public.disposable_domains) as domains,
       (select relrowsecurity from pg_class where oid = 'public.abuse_log'::regclass) as abuse_log_rls;
