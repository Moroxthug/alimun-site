-- Pricing engine: tables, rules and seed (docs/PRICING_ENGINE_SPEC.md, build step 2).
-- What a learner pays is decided on the server: the band from the card's country (country_bands), the price from
-- price_book (one Stripe price per product, band, variant and cadence, with a currency option per row), founding
-- seats through claim_founding_seat(), and access from entitlements. Nothing here is used by the site yet: the
-- checkout (step 4) and webhooks (step 5) switch to it later. Idempotent; ends with a verify query.
-- Writes come from the service role only (it bypasses RLS); learners read their own rows, admins read everything.

-- ---------- Catalogue ----------
create table if not exists public.products (
  product_key text primary key check (product_key ~ '^[a-z0-9_]{2,40}$'),
  kind text not null check (kind in ('app', 'open_class', 'level_pack', 'exam_pack', 'help_class', 'trial', 'minutes', 'company_room')),
  language text check (language is null or language in ('en', 'de', 'fr', 'es', 'it', 'pt')),
  classes_per_month integer not null default 0 check (classes_per_month between 0 and 40),
  months integer check (months is null or months between 1 and 24),
  voice_minutes_month integer not null default 0 check (voice_minutes_month between 0 and 6000),
  includes_app boolean not null default false,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.country_bands (
  country text primary key check (country ~ '^[A-Z]{2}$'),
  band text not null check (band in ('A', 'B')),
  currency text not null check (currency ~ '^[a-z]{3}$'),
  tax_inclusive boolean not null default true,
  name text check (name is null or char_length(name) <= 80),
  note text check (note is null or char_length(note) <= 200),
  updated_at timestamptz not null default now()
);

create table if not exists public.price_book (
  id bigint generated always as identity primary key,
  product_key text not null references public.products (product_key),
  band text not null check (band in ('A', 'B')),
  variant text not null check (variant in ('list', 'founding')),
  cadence text not null check (cadence in ('month', 'year', 'once', 'upfront')),
  currency text not null check (currency ~ '^[a-z]{3}$'),
  unit_amount integer not null check (unit_amount > 0),
  lookup_key text not null check (lookup_key ~ '^[a-z0-9_]+_[AB]_(list|founding)_(month|year|once|upfront)$'),
  stripe_price_id text check (stripe_price_id is null or stripe_price_id ~ '^price_'),
  active boolean not null default true,
  valid_from date not null default current_date,
  valid_to date,
  unique (product_key, band, variant, cadence, currency, valid_from)
);
create index if not exists price_book_lookup_idx on public.price_book (lookup_key, currency) where active;

-- ---------- Per learner ----------
create table if not exists public.customer_pricing (
  user_id uuid primary key references auth.users (id) on delete cascade,
  band text not null check (band in ('A', 'B')),
  band_source text not null default 'card' check (band_source in ('card', 'local_method', 'admin')),
  card_country text check (card_country is null or card_country ~ '^[A-Z]{2}$'),
  card_fp_hash text,
  locked_at timestamptz not null default now(),
  band_change_allowed_at timestamptz,
  founding boolean not null default false,
  founding_seq integer,
  founding_started_at timestamptz,
  founding_until timestamptz,
  founding_path_end timestamptz,
  updated_at timestamptz not null default now()
);
create unique index if not exists customer_pricing_founding_seq_idx on public.customer_pricing (founding_seq) where founding_seq is not null;

create table if not exists public.band_changes (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  from_band text check (from_band is null or from_band in ('A', 'B')),
  to_band text not null check (to_band in ('A', 'B')),
  reason text not null check (char_length(reason) between 1 and 200),
  card_country text check (card_country is null or card_country ~ '^[A-Z]{2}$'),
  by_user uuid references auth.users (id) on delete set null,
  at timestamptz not null default now()
);
create index if not exists band_changes_user_idx on public.band_changes (user_id, at desc);

create table if not exists public.entitlements (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  product_key text not null references public.products (product_key),
  variant text not null default 'list' check (variant in ('list', 'founding')),
  band text not null check (band in ('A', 'B')),
  currency text not null check (currency ~ '^[a-z]{3}$'),
  cadence text not null check (cadence in ('month', 'year', 'once', 'upfront', 'store')),
  source text not null default 'stripe' check (source in ('stripe', 'store', 'invoice', 'admin', 'reward')),
  status text not null default 'pending_room' check (status in ('pending_room', 'active', 'paused', 'ended', 'refunded')),
  cohort_id uuid references public.cohorts (id) on delete set null,
  starts_at timestamptz,
  ends_at timestamptz,
  voice_minutes_month integer not null default 0 check (voice_minutes_month between 0 and 6000),
  amount_paid integer not null default 0 check (amount_paid >= 0),
  stripe_subscription_id text,
  stripe_schedule_id text,
  stripe_payment_intent_id text,
  store_transaction_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists entitlements_user_idx on public.entitlements (user_id, status);
create index if not exists entitlements_cohort_idx on public.entitlements (cohort_id) where cohort_id is not null;
create unique index if not exists entitlements_sub_idx on public.entitlements (stripe_subscription_id) where stripe_subscription_id is not null;
create unique index if not exists entitlements_pi_idx on public.entitlements (stripe_payment_intent_id) where stripe_payment_intent_id is not null;

create table if not exists public.quotes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  product_key text not null references public.products (product_key),
  variant text not null check (variant in ('list', 'founding')),
  cadence text not null check (cadence in ('month', 'year', 'once', 'upfront')),
  band text not null check (band in ('A', 'B')),
  currency text not null check (currency ~ '^[a-z]{3}$'),
  unit_amount integer not null check (unit_amount > 0),
  stripe_price_id text,
  setup_intent_id text,
  cohort_id uuid references public.cohorts (id) on delete set null,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null default now() + interval '15 minutes',
  used_at timestamptz
);
create index if not exists quotes_user_idx on public.quotes (user_id, created_at desc);

create table if not exists public.trial_markers (
  kind text not null check (kind in ('email', 'phone', 'card', 'device')),
  hash text not null check (char_length(hash) between 32 and 128),
  first_user_id uuid references auth.users (id) on delete set null,
  created_at timestamptz not null default now(),
  primary key (kind, hash)
);

-- ---------- Finance ----------
create table if not exists public.fx_rates (
  day date not null,
  currency text not null check (currency ~ '^[a-z]{3}$'),
  per_eur numeric(14, 6) not null check (per_eur > 0),
  source text not null default 'ecb' check (char_length(source) <= 40),
  primary key (day, currency)
);

create table if not exists public.finance_reserves (
  month date not null,
  kind text not null check (kind in ('exam_guarantee')),
  amount_eur numeric(12, 2) not null check (amount_eur >= 0),
  note text check (note is null or char_length(note) <= 300),
  primary key (month, kind)
);

-- ---------- Settings ----------
insert into public.app_settings (key, value) values
  ('founding_closes_at', '2027-01-01T00:00:00Z'),
  ('founding_cap', '500'),
  ('founding_count', '0'),
  ('founding_months', '12'),
  ('founding_max_months', '18'),
  ('tutor_budget_per_paid_usd', '0.15'),
  ('tutor_user_daily_minutes', '30'),
  ('written_tutor_daily_messages', '60')
on conflict (key) do nothing;

-- ---------- Rules ----------
-- A founding seat: only before the closing date, only while seats remain, once per learner. Service role only.
create or replace function public.claim_founding_seat(p_user uuid)
returns integer language plpgsql security definer set search_path = public as $$
declare
  v_close timestamptz; v_cap integer; v_count integer; v_months integer; v_existing integer;
begin
  -- The band comes first (set_band, from the card); a founding seat is claimed only on the first paid purchase.
  if not exists (select 1 from public.customer_pricing where user_id = p_user) then raise exception 'band_not_set'; end if;
  select founding_seq into v_existing from public.customer_pricing where user_id = p_user and founding;
  if v_existing is not null then return v_existing; end if;
  select value::timestamptz into v_close from public.app_settings where key = 'founding_closes_at';
  select value::integer into v_cap from public.app_settings where key = 'founding_cap';
  select value::integer into v_months from public.app_settings where key = 'founding_months';
  if v_close is null or now() >= v_close then return null; end if;
  select value::integer into v_count from public.app_settings where key = 'founding_count' for update;
  if v_count >= coalesce(v_cap, 0) then return null; end if;
  v_count := v_count + 1;
  update public.app_settings set value = v_count::text where key = 'founding_count';
  update public.customer_pricing set founding = true, founding_seq = v_count, founding_started_at = now(),
    founding_until = now() + make_interval(months => coalesce(v_months, 12)), updated_at = now()
  where user_id = p_user;
  return v_count;
end $$;

-- The learner's band: up at once, down at most every 90 days; every change logged. Service role only.
create or replace function public.set_band(p_user uuid, p_band text, p_reason text, p_card_country text default null, p_by uuid default null)
returns text language plpgsql security definer set search_path = public as $$
declare
  v_old text; v_allowed timestamptz;
begin
  if p_band not in ('A', 'B') then raise exception 'bad_band'; end if;
  select band, band_change_allowed_at into v_old, v_allowed from public.customer_pricing where user_id = p_user for update;
  if v_old = p_band then
    update public.customer_pricing set card_country = coalesce(upper(p_card_country), card_country), updated_at = now() where user_id = p_user;
    return p_band;
  end if;
  if v_old = 'A' and p_band = 'B' and p_by is null and v_allowed is not null and v_allowed > now() then
    raise exception 'band_change_too_soon';
  end if;
  insert into public.customer_pricing (user_id, band, card_country, band_source, band_change_allowed_at)
  values (p_user, p_band, upper(p_card_country), case when p_by is null then 'card' else 'admin' end, now() + interval '90 days')
  on conflict (user_id) do update set band = excluded.band, card_country = excluded.card_country, band_source = excluded.band_source,
    band_change_allowed_at = case when excluded.band = 'B' then now() + interval '90 days' else public.customer_pricing.band_change_allowed_at end,
    locked_at = now(), updated_at = now();
  insert into public.band_changes (user_id, from_band, to_band, reason, card_country, by_user)
  values (p_user, v_old, p_band, left(coalesce(p_reason, 'card'), 200), upper(p_card_country), p_by);
  return p_band;
end $$;

-- Voice minutes a month from what the learner has paid for (the largest active allowance; packs include the app).
create or replace function public.entitlement_minutes(p_user uuid)
returns integer language sql stable security definer set search_path = public as $$
  select coalesce(max(e.voice_minutes_month), 0)::integer from public.entitlements e
  where e.user_id = p_user and e.status = 'active' and (e.ends_at is null or e.ends_at > now())
$$;

revoke all on function public.claim_founding_seat(uuid) from public, anon, authenticated;
revoke all on function public.set_band(uuid, text, text, text, uuid) from public, anon, authenticated;
revoke all on function public.entitlement_minutes(uuid) from public, anon, authenticated;
grant execute on function public.claim_founding_seat(uuid) to service_role;
grant execute on function public.set_band(uuid, text, text, text, uuid) to service_role;
grant execute on function public.entitlement_minutes(uuid) to service_role;

-- ---------- Row level security ----------
alter table public.products enable row level security;
alter table public.country_bands enable row level security;
alter table public.price_book enable row level security;
alter table public.customer_pricing enable row level security;
alter table public.band_changes enable row level security;
alter table public.entitlements enable row level security;
alter table public.quotes enable row level security;
alter table public.trial_markers enable row level security;
alter table public.fx_rates enable row level security;
alter table public.finance_reserves enable row level security;

drop policy if exists products_read on public.products;
create policy products_read on public.products for select to anon, authenticated using (active or public.is_admin());
drop policy if exists country_bands_read on public.country_bands;
create policy country_bands_read on public.country_bands for select to anon, authenticated using (true);
drop policy if exists price_book_read on public.price_book;
create policy price_book_read on public.price_book for select to anon, authenticated
  using ((active and (valid_to is null or valid_to > current_date)) or public.is_admin());
drop policy if exists customer_pricing_read on public.customer_pricing;
create policy customer_pricing_read on public.customer_pricing for select to authenticated using (user_id = auth.uid() or public.is_admin());
drop policy if exists entitlements_read on public.entitlements;
create policy entitlements_read on public.entitlements for select to authenticated using (user_id = auth.uid() or public.is_admin());
drop policy if exists band_changes_admin on public.band_changes;
create policy band_changes_admin on public.band_changes for select to authenticated using (public.is_admin());
drop policy if exists fx_rates_admin on public.fx_rates;
create policy fx_rates_admin on public.fx_rates for select to authenticated using (public.is_admin());
drop policy if exists finance_reserves_admin on public.finance_reserves;
create policy finance_reserves_admin on public.finance_reserves for select to authenticated using (public.is_admin());
-- quotes and trial_markers: no policies, server only.

revoke all on public.quotes, public.trial_markers from anon, authenticated;
revoke insert, update, delete on public.products, public.country_bands, public.price_book, public.customer_pricing, public.band_changes,
  public.entitlements, public.fx_rates, public.finance_reserves from anon, authenticated;
grant select on public.products, public.country_bands, public.price_book to anon, authenticated;
grant select on public.customer_pricing, public.entitlements, public.band_changes, public.fx_rates, public.finance_reserves to authenticated;

-- ---------- Seed ----------
-- Seed generated by supabase/maintenance/build_pricing_seed.py, rates of 2026-11-11.

insert into public.country_bands (country, band, currency, tax_inclusive, name, note) values
  ('AW', 'B', 'usd', true, 'Aruba', 'Band B, charged in USD'),
  ('AF', 'B', 'usd', true, 'Afghanistan', 'Band B, charged in USD'),
  ('AO', 'B', 'usd', true, 'Angola', 'Band B, charged in USD'),
  ('AI', 'B', 'usd', true, 'Anguilla', 'Band B, charged in USD'),
  ('AX', 'B', 'usd', true, 'Åland Islands', 'Band B, charged in USD'),
  ('AL', 'B', 'eur', true, 'Albania', 'Band B, charged in EUR'),
  ('AD', 'A', 'eur', true, 'Andorra', 'EU/EEA: one price, VAT included'),
  ('AE', 'A', 'eur', true, 'United Arab Emirates', 'Band A, charged in EUR'),
  ('AR', 'B', 'usd', true, 'Argentina', 'Band B, charged in USD'),
  ('AM', 'B', 'usd', true, 'Armenia', 'Band B, charged in USD'),
  ('AS', 'B', 'usd', true, 'American Samoa', 'Band B, charged in USD'),
  ('AQ', 'B', 'usd', true, 'Antarctica', 'Band B, charged in USD'),
  ('TF', 'B', 'usd', true, 'French Southern Territories', 'Band B, charged in USD'),
  ('AG', 'B', 'usd', true, 'Antigua and Barbuda', 'Band B, charged in USD'),
  ('AU', 'A', 'aud', true, 'Australia', 'Band A, own currency'),
  ('AT', 'A', 'eur', true, 'Austria', 'EU/EEA: one price, VAT included'),
  ('AZ', 'B', 'usd', true, 'Azerbaijan', 'Band B, charged in USD'),
  ('BI', 'B', 'usd', true, 'Burundi', 'Band B, charged in USD'),
  ('BE', 'A', 'eur', true, 'Belgium', 'EU/EEA: one price, VAT included'),
  ('BJ', 'B', 'usd', true, 'Benin', 'Band B, charged in USD'),
  ('BQ', 'B', 'usd', true, 'Bonaire, Sint Eustatius and Saba', 'Band B, charged in USD'),
  ('BF', 'B', 'usd', true, 'Burkina Faso', 'Band B, charged in USD'),
  ('BD', 'B', 'usd', true, 'Bangladesh', 'Band B, charged in USD'),
  ('BG', 'A', 'eur', true, 'Bulgaria', 'EU/EEA: one price, VAT included'),
  ('BH', 'A', 'eur', true, 'Bahrain', 'Band A, charged in EUR'),
  ('BS', 'B', 'usd', true, 'Bahamas', 'Band B, charged in USD'),
  ('BA', 'B', 'eur', true, 'Bosnia and Herzegovina', 'Band B, charged in EUR'),
  ('BL', 'B', 'usd', true, 'Saint Barthélemy', 'Band B, charged in USD'),
  ('BY', 'B', 'eur', true, 'Belarus', 'Band B, charged in EUR'),
  ('BZ', 'B', 'usd', true, 'Belize', 'Band B, charged in USD'),
  ('BM', 'A', 'eur', true, 'Bermuda', 'Band A, charged in EUR'),
  ('BO', 'B', 'usd', true, 'Bolivia, Plurinational State of', 'Band B, charged in USD'),
  ('BR', 'B', 'usd', true, 'Brazil', 'Band B, charged in USD'),
  ('BB', 'B', 'usd', true, 'Barbados', 'Band B, charged in USD'),
  ('BN', 'B', 'usd', true, 'Brunei Darussalam', 'Band B, charged in USD'),
  ('BT', 'B', 'usd', true, 'Bhutan', 'Band B, charged in USD'),
  ('BV', 'B', 'usd', true, 'Bouvet Island', 'Band B, charged in USD'),
  ('BW', 'B', 'usd', true, 'Botswana', 'Band B, charged in USD'),
  ('CF', 'B', 'usd', true, 'Central African Republic', 'Band B, charged in USD'),
  ('CA', 'A', 'cad', false, 'Canada', 'Band A, own currency'),
  ('CC', 'B', 'usd', true, 'Cocos (Keeling) Islands', 'Band B, charged in USD'),
  ('CH', 'A', 'chf', true, 'Switzerland', 'Band A, own currency'),
  ('CL', 'B', 'usd', true, 'Chile', 'Band B, charged in USD'),
  ('CN', 'B', 'usd', true, 'China', 'Band B, charged in USD'),
  ('CI', 'B', 'usd', true, 'Côte d''Ivoire', 'Band B, charged in USD'),
  ('CM', 'B', 'usd', true, 'Cameroon', 'Band B, charged in USD'),
  ('CD', 'B', 'usd', true, 'Congo, The Democratic Republic of the', 'Band B, charged in USD'),
  ('CG', 'B', 'usd', true, 'Congo', 'Band B, charged in USD'),
  ('CK', 'B', 'usd', true, 'Cook Islands', 'Band B, charged in USD'),
  ('CO', 'B', 'usd', true, 'Colombia', 'Band B, charged in USD'),
  ('KM', 'B', 'usd', true, 'Comoros', 'Band B, charged in USD'),
  ('CV', 'B', 'usd', true, 'Cabo Verde', 'Band B, charged in USD'),
  ('CR', 'B', 'usd', true, 'Costa Rica', 'Band B, charged in USD'),
  ('CU', 'B', 'usd', true, 'Cuba', 'Band B, charged in USD'),
  ('CW', 'B', 'usd', true, 'Curaçao', 'Band B, charged in USD'),
  ('CX', 'B', 'usd', true, 'Christmas Island', 'Band B, charged in USD'),
  ('KY', 'A', 'eur', true, 'Cayman Islands', 'Band A, charged in EUR'),
  ('CY', 'A', 'eur', true, 'Cyprus', 'EU/EEA: one price, VAT included'),
  ('CZ', 'A', 'eur', true, 'Czechia', 'EU/EEA: one price, VAT included'),
  ('DE', 'A', 'eur', true, 'Germany', 'EU/EEA: one price, VAT included'),
  ('DJ', 'B', 'usd', true, 'Djibouti', 'Band B, charged in USD'),
  ('DM', 'B', 'usd', true, 'Dominica', 'Band B, charged in USD'),
  ('DK', 'A', 'eur', true, 'Denmark', 'EU/EEA: one price, VAT included'),
  ('DO', 'B', 'usd', true, 'Dominican Republic', 'Band B, charged in USD'),
  ('DZ', 'B', 'eur', true, 'Algeria', 'Band B, charged in EUR'),
  ('EC', 'B', 'usd', true, 'Ecuador', 'Band B, charged in USD'),
  ('EG', 'B', 'usd', true, 'Egypt', 'Band B, charged in USD'),
  ('ER', 'B', 'usd', true, 'Eritrea', 'Band B, charged in USD'),
  ('EH', 'B', 'usd', true, 'Western Sahara', 'Band B, charged in USD'),
  ('ES', 'A', 'eur', true, 'Spain', 'EU/EEA: one price, VAT included'),
  ('EE', 'A', 'eur', true, 'Estonia', 'EU/EEA: one price, VAT included'),
  ('ET', 'B', 'usd', true, 'Ethiopia', 'Band B, charged in USD'),
  ('FI', 'A', 'eur', true, 'Finland', 'EU/EEA: one price, VAT included'),
  ('FJ', 'B', 'usd', true, 'Fiji', 'Band B, charged in USD'),
  ('FK', 'B', 'usd', true, 'Falkland Islands (Malvinas)', 'Band B, charged in USD'),
  ('FR', 'A', 'eur', true, 'France', 'EU/EEA: one price, VAT included'),
  ('FO', 'A', 'eur', true, 'Faroe Islands', 'Band A, charged in EUR'),
  ('FM', 'B', 'usd', true, 'Micronesia, Federated States of', 'Band B, charged in USD'),
  ('GA', 'B', 'usd', true, 'Gabon', 'Band B, charged in USD'),
  ('GB', 'A', 'gbp', true, 'United Kingdom', 'Band A, own currency'),
  ('GE', 'B', 'usd', true, 'Georgia', 'Band B, charged in USD'),
  ('GG', 'A', 'eur', true, 'Guernsey', 'Band A, charged in EUR'),
  ('GH', 'B', 'usd', true, 'Ghana', 'Band B, charged in USD'),
  ('GI', 'A', 'eur', true, 'Gibraltar', 'Band A, charged in EUR'),
  ('GN', 'B', 'usd', true, 'Guinea', 'Band B, charged in USD'),
  ('GP', 'B', 'usd', true, 'Guadeloupe', 'Band B, charged in USD'),
  ('GM', 'B', 'usd', true, 'Gambia', 'Band B, charged in USD'),
  ('GW', 'B', 'usd', true, 'Guinea-Bissau', 'Band B, charged in USD'),
  ('GQ', 'B', 'usd', true, 'Equatorial Guinea', 'Band B, charged in USD'),
  ('GR', 'A', 'eur', true, 'Greece', 'EU/EEA: one price, VAT included'),
  ('GD', 'B', 'usd', true, 'Grenada', 'Band B, charged in USD'),
  ('GL', 'A', 'eur', true, 'Greenland', 'Band A, charged in EUR'),
  ('GT', 'B', 'usd', true, 'Guatemala', 'Band B, charged in USD'),
  ('GF', 'B', 'usd', true, 'French Guiana', 'Band B, charged in USD'),
  ('GU', 'B', 'usd', true, 'Guam', 'Band B, charged in USD'),
  ('GY', 'B', 'usd', true, 'Guyana', 'Band B, charged in USD'),
  ('HK', 'A', 'eur', true, 'Hong Kong', 'Band A, charged in EUR'),
  ('HM', 'B', 'usd', true, 'Heard Island and McDonald Islands', 'Band B, charged in USD'),
  ('HN', 'B', 'usd', true, 'Honduras', 'Band B, charged in USD'),
  ('HR', 'A', 'eur', true, 'Croatia', 'EU/EEA: one price, VAT included'),
  ('HT', 'B', 'usd', true, 'Haiti', 'Band B, charged in USD'),
  ('HU', 'A', 'eur', true, 'Hungary', 'EU/EEA: one price, VAT included'),
  ('ID', 'B', 'usd', true, 'Indonesia', 'Band B, charged in USD'),
  ('IM', 'A', 'eur', true, 'Isle of Man', 'Band A, charged in EUR'),
  ('IN', 'B', 'usd', true, 'India', 'Band B, charged in USD'),
  ('IO', 'B', 'usd', true, 'British Indian Ocean Territory', 'Band B, charged in USD'),
  ('IE', 'A', 'eur', true, 'Ireland', 'EU/EEA: one price, VAT included'),
  ('IR', 'B', 'usd', true, 'Iran, Islamic Republic of', 'Band B, charged in USD'),
  ('IQ', 'B', 'usd', true, 'Iraq', 'Band B, charged in USD'),
  ('IS', 'A', 'eur', true, 'Iceland', 'EU/EEA: one price, VAT included'),
  ('IL', 'A', 'eur', true, 'Israel', 'Band A, charged in EUR'),
  ('IT', 'A', 'eur', true, 'Italy', 'EU/EEA: one price, VAT included'),
  ('JM', 'B', 'usd', true, 'Jamaica', 'Band B, charged in USD'),
  ('JE', 'A', 'eur', true, 'Jersey', 'Band A, charged in EUR'),
  ('JO', 'B', 'usd', true, 'Jordan', 'Band B, charged in USD'),
  ('JP', 'A', 'eur', true, 'Japan', 'Band A, charged in EUR'),
  ('KZ', 'B', 'usd', true, 'Kazakhstan', 'Band B, charged in USD'),
  ('KE', 'B', 'usd', true, 'Kenya', 'Band B, charged in USD'),
  ('KG', 'B', 'usd', true, 'Kyrgyzstan', 'Band B, charged in USD'),
  ('KH', 'B', 'usd', true, 'Cambodia', 'Band B, charged in USD'),
  ('KI', 'B', 'usd', true, 'Kiribati', 'Band B, charged in USD'),
  ('KN', 'B', 'usd', true, 'Saint Kitts and Nevis', 'Band B, charged in USD'),
  ('KR', 'A', 'eur', true, 'Korea, Republic of', 'Band A, charged in EUR'),
  ('KW', 'A', 'eur', true, 'Kuwait', 'Band A, charged in EUR'),
  ('LA', 'B', 'usd', true, 'Lao People''s Democratic Republic', 'Band B, charged in USD'),
  ('LB', 'B', 'usd', true, 'Lebanon', 'Band B, charged in USD'),
  ('LR', 'B', 'usd', true, 'Liberia', 'Band B, charged in USD'),
  ('LY', 'B', 'usd', true, 'Libya', 'Band B, charged in USD'),
  ('LC', 'B', 'usd', true, 'Saint Lucia', 'Band B, charged in USD'),
  ('LI', 'A', 'eur', true, 'Liechtenstein', 'EU/EEA: one price, VAT included'),
  ('LK', 'B', 'usd', true, 'Sri Lanka', 'Band B, charged in USD'),
  ('LS', 'B', 'usd', true, 'Lesotho', 'Band B, charged in USD'),
  ('LT', 'A', 'eur', true, 'Lithuania', 'EU/EEA: one price, VAT included'),
  ('LU', 'A', 'eur', true, 'Luxembourg', 'EU/EEA: one price, VAT included'),
  ('LV', 'A', 'eur', true, 'Latvia', 'EU/EEA: one price, VAT included'),
  ('MO', 'A', 'eur', true, 'Macao', 'Band A, charged in EUR'),
  ('MF', 'B', 'usd', true, 'Saint Martin (French part)', 'Band B, charged in USD'),
  ('MA', 'B', 'mad', true, 'Morocco', 'Band B, own currency'),
  ('MC', 'A', 'eur', true, 'Monaco', 'EU/EEA: one price, VAT included'),
  ('MD', 'B', 'eur', true, 'Moldova, Republic of', 'Band B, charged in EUR'),
  ('MG', 'B', 'usd', true, 'Madagascar', 'Band B, charged in USD'),
  ('MV', 'B', 'usd', true, 'Maldives', 'Band B, charged in USD'),
  ('MX', 'B', 'usd', true, 'Mexico', 'Band B, charged in USD'),
  ('MH', 'B', 'usd', true, 'Marshall Islands', 'Band B, charged in USD'),
  ('MK', 'B', 'eur', true, 'North Macedonia', 'Band B, charged in EUR'),
  ('ML', 'B', 'usd', true, 'Mali', 'Band B, charged in USD'),
  ('MT', 'A', 'eur', true, 'Malta', 'EU/EEA: one price, VAT included'),
  ('MM', 'B', 'usd', true, 'Myanmar', 'Band B, charged in USD'),
  ('ME', 'B', 'eur', true, 'Montenegro', 'Band B, charged in EUR'),
  ('MN', 'B', 'usd', true, 'Mongolia', 'Band B, charged in USD'),
  ('MP', 'B', 'usd', true, 'Northern Mariana Islands', 'Band B, charged in USD'),
  ('MZ', 'B', 'usd', true, 'Mozambique', 'Band B, charged in USD'),
  ('MR', 'B', 'usd', true, 'Mauritania', 'Band B, charged in USD'),
  ('MS', 'B', 'usd', true, 'Montserrat', 'Band B, charged in USD'),
  ('MQ', 'B', 'usd', true, 'Martinique', 'Band B, charged in USD'),
  ('MU', 'B', 'usd', true, 'Mauritius', 'Band B, charged in USD'),
  ('MW', 'B', 'usd', true, 'Malawi', 'Band B, charged in USD'),
  ('MY', 'B', 'usd', true, 'Malaysia', 'Band B, charged in USD'),
  ('YT', 'B', 'usd', true, 'Mayotte', 'Band B, charged in USD'),
  ('NA', 'B', 'usd', true, 'Namibia', 'Band B, charged in USD'),
  ('NC', 'B', 'usd', true, 'New Caledonia', 'Band B, charged in USD'),
  ('NE', 'B', 'usd', true, 'Niger', 'Band B, charged in USD'),
  ('NF', 'B', 'usd', true, 'Norfolk Island', 'Band B, charged in USD'),
  ('NG', 'B', 'usd', true, 'Nigeria', 'Band B, charged in USD'),
  ('NI', 'B', 'usd', true, 'Nicaragua', 'Band B, charged in USD'),
  ('NU', 'B', 'usd', true, 'Niue', 'Band B, charged in USD'),
  ('NL', 'A', 'eur', true, 'Netherlands', 'EU/EEA: one price, VAT included'),
  ('NO', 'A', 'eur', true, 'Norway', 'EU/EEA: one price, VAT included'),
  ('NP', 'B', 'usd', true, 'Nepal', 'Band B, charged in USD'),
  ('NR', 'B', 'usd', true, 'Nauru', 'Band B, charged in USD'),
  ('NZ', 'A', 'eur', true, 'New Zealand', 'Band A, charged in EUR'),
  ('OM', 'A', 'eur', true, 'Oman', 'Band A, charged in EUR'),
  ('PK', 'B', 'usd', true, 'Pakistan', 'Band B, charged in USD'),
  ('PA', 'B', 'usd', true, 'Panama', 'Band B, charged in USD'),
  ('PN', 'B', 'usd', true, 'Pitcairn', 'Band B, charged in USD'),
  ('PE', 'B', 'usd', true, 'Peru', 'Band B, charged in USD'),
  ('PH', 'B', 'usd', true, 'Philippines', 'Band B, charged in USD'),
  ('PW', 'B', 'usd', true, 'Palau', 'Band B, charged in USD'),
  ('PG', 'B', 'usd', true, 'Papua New Guinea', 'Band B, charged in USD'),
  ('PL', 'A', 'eur', true, 'Poland', 'EU/EEA: one price, VAT included'),
  ('PR', 'B', 'usd', true, 'Puerto Rico', 'Band B, charged in USD'),
  ('KP', 'B', 'usd', true, 'Korea, Democratic People''s Republic of', 'Band B, charged in USD'),
  ('PT', 'A', 'eur', true, 'Portugal', 'EU/EEA: one price, VAT included'),
  ('PY', 'B', 'usd', true, 'Paraguay', 'Band B, charged in USD'),
  ('PS', 'B', 'usd', true, 'Palestine, State of', 'Band B, charged in USD'),
  ('PF', 'B', 'usd', true, 'French Polynesia', 'Band B, charged in USD'),
  ('QA', 'A', 'eur', true, 'Qatar', 'Band A, charged in EUR'),
  ('RE', 'B', 'usd', true, 'Réunion', 'Band B, charged in USD'),
  ('RO', 'A', 'eur', true, 'Romania', 'EU/EEA: one price, VAT included'),
  ('RU', 'B', 'usd', true, 'Russian Federation', 'Band B, charged in USD'),
  ('RW', 'B', 'usd', true, 'Rwanda', 'Band B, charged in USD'),
  ('SA', 'A', 'eur', true, 'Saudi Arabia', 'Band A, charged in EUR'),
  ('SD', 'B', 'usd', true, 'Sudan', 'Band B, charged in USD'),
  ('SN', 'B', 'usd', true, 'Senegal', 'Band B, charged in USD'),
  ('SG', 'A', 'eur', true, 'Singapore', 'Band A, charged in EUR'),
  ('GS', 'B', 'usd', true, 'South Georgia and the South Sandwich Islands', 'Band B, charged in USD'),
  ('SH', 'B', 'usd', true, 'Saint Helena, Ascension and Tristan da Cunha', 'Band B, charged in USD'),
  ('SJ', 'B', 'usd', true, 'Svalbard and Jan Mayen', 'Band B, charged in USD'),
  ('SB', 'B', 'usd', true, 'Solomon Islands', 'Band B, charged in USD'),
  ('SL', 'B', 'usd', true, 'Sierra Leone', 'Band B, charged in USD'),
  ('SV', 'B', 'usd', true, 'El Salvador', 'Band B, charged in USD'),
  ('SM', 'A', 'eur', true, 'San Marino', 'EU/EEA: one price, VAT included'),
  ('SO', 'B', 'usd', true, 'Somalia', 'Band B, charged in USD'),
  ('PM', 'B', 'usd', true, 'Saint Pierre and Miquelon', 'Band B, charged in USD'),
  ('RS', 'B', 'eur', true, 'Serbia', 'Band B, charged in EUR'),
  ('SS', 'B', 'usd', true, 'South Sudan', 'Band B, charged in USD'),
  ('ST', 'B', 'usd', true, 'Sao Tome and Principe', 'Band B, charged in USD'),
  ('SR', 'B', 'usd', true, 'Suriname', 'Band B, charged in USD'),
  ('SK', 'A', 'eur', true, 'Slovakia', 'EU/EEA: one price, VAT included'),
  ('SI', 'A', 'eur', true, 'Slovenia', 'EU/EEA: one price, VAT included'),
  ('SE', 'A', 'eur', true, 'Sweden', 'EU/EEA: one price, VAT included'),
  ('SZ', 'B', 'usd', true, 'Eswatini', 'Band B, charged in USD'),
  ('SX', 'B', 'usd', true, 'Sint Maarten (Dutch part)', 'Band B, charged in USD'),
  ('SC', 'B', 'usd', true, 'Seychelles', 'Band B, charged in USD'),
  ('SY', 'B', 'usd', true, 'Syrian Arab Republic', 'Band B, charged in USD'),
  ('TC', 'B', 'usd', true, 'Turks and Caicos Islands', 'Band B, charged in USD'),
  ('TD', 'B', 'usd', true, 'Chad', 'Band B, charged in USD'),
  ('TG', 'B', 'usd', true, 'Togo', 'Band B, charged in USD'),
  ('TH', 'B', 'usd', true, 'Thailand', 'Band B, charged in USD'),
  ('TJ', 'B', 'usd', true, 'Tajikistan', 'Band B, charged in USD'),
  ('TK', 'B', 'usd', true, 'Tokelau', 'Band B, charged in USD'),
  ('TM', 'B', 'usd', true, 'Turkmenistan', 'Band B, charged in USD'),
  ('TL', 'B', 'usd', true, 'Timor-Leste', 'Band B, charged in USD'),
  ('TO', 'B', 'usd', true, 'Tonga', 'Band B, charged in USD'),
  ('TT', 'B', 'usd', true, 'Trinidad and Tobago', 'Band B, charged in USD'),
  ('TN', 'B', 'eur', true, 'Tunisia', 'Band B, charged in EUR'),
  ('TR', 'B', 'eur', true, 'Türkiye', 'Band B, charged in EUR'),
  ('TV', 'B', 'usd', true, 'Tuvalu', 'Band B, charged in USD'),
  ('TW', 'A', 'eur', true, 'Taiwan, Province of China', 'Band A, charged in EUR'),
  ('TZ', 'B', 'usd', true, 'Tanzania, United Republic of', 'Band B, charged in USD'),
  ('UG', 'B', 'usd', true, 'Uganda', 'Band B, charged in USD'),
  ('UA', 'B', 'eur', true, 'Ukraine', 'Band B, charged in EUR'),
  ('UM', 'B', 'usd', true, 'United States Minor Outlying Islands', 'Band B, charged in USD'),
  ('UY', 'B', 'usd', true, 'Uruguay', 'Band B, charged in USD'),
  ('US', 'A', 'usd', false, 'United States', 'Band A, own currency'),
  ('UZ', 'B', 'usd', true, 'Uzbekistan', 'Band B, charged in USD'),
  ('VA', 'A', 'eur', true, 'Holy See (Vatican City State)', 'EU/EEA: one price, VAT included'),
  ('VC', 'B', 'usd', true, 'Saint Vincent and the Grenadines', 'Band B, charged in USD'),
  ('VE', 'B', 'usd', true, 'Venezuela, Bolivarian Republic of', 'Band B, charged in USD'),
  ('VG', 'B', 'usd', true, 'Virgin Islands, British', 'Band B, charged in USD'),
  ('VI', 'B', 'usd', true, 'Virgin Islands, U.S.', 'Band B, charged in USD'),
  ('VN', 'B', 'usd', true, 'Viet Nam', 'Band B, charged in USD'),
  ('VU', 'B', 'usd', true, 'Vanuatu', 'Band B, charged in USD'),
  ('WF', 'B', 'usd', true, 'Wallis and Futuna', 'Band B, charged in USD'),
  ('WS', 'B', 'usd', true, 'Samoa', 'Band B, charged in USD'),
  ('YE', 'B', 'usd', true, 'Yemen', 'Band B, charged in USD'),
  ('ZA', 'B', 'usd', true, 'South Africa', 'Band B, charged in USD'),
  ('ZM', 'B', 'usd', true, 'Zambia', 'Band B, charged in USD'),
  ('ZW', 'B', 'usd', true, 'Zimbabwe', 'Band B, charged in USD'),
  ('XK', 'B', 'eur', true, 'Kosovo', 'Band B, charged in EUR')
on conflict (country) do update set band = excluded.band, currency = excluded.currency, tax_inclusive = excluded.tax_inclusive, name = excluded.name, note = excluded.note, updated_at = now();

insert into public.products (product_key, kind, language, classes_per_month, months, voice_minutes_month, includes_app) values
  ('app', 'app', null, 0, null, 60, true),
  ('open_en', 'open_class', 'en', 4, null, 40, true),
  ('open_de', 'open_class', 'de', 4, null, 40, true),
  ('level_en', 'level_pack', 'en', 13, 3, 120, true),
  ('level_de', 'level_pack', 'de', 13, 3, 120, true),
  ('exam_en', 'exam_pack', 'en', 13, 3, 120, true),
  ('exam_de', 'exam_pack', 'de', 13, 3, 120, true),
  ('help_class', 'help_class', null, 1, null, 0, false),
  ('trial', 'trial', null, 1, null, 0, false),
  ('minutes_30', 'minutes', null, 0, null, 30, false),
  ('minutes_120', 'minutes', null, 0, null, 120, false),
  ('b2b_en', 'company_room', 'en', 13, 3, 120, true),
  ('b2b_de', 'company_room', 'de', 13, 3, 120, true)
on conflict (product_key) do update set kind = excluded.kind, language = excluded.language, classes_per_month = excluded.classes_per_month, months = excluded.months, voice_minutes_month = excluded.voice_minutes_month, includes_app = excluded.includes_app;

insert into public.price_book (product_key, band, variant, cadence, currency, unit_amount, lookup_key, valid_from) values
  ('app', 'A', 'list', 'month', 'eur', 799, 'app_A_list_month', date '2026-11-11'),
  ('app', 'A', 'list', 'month', 'gbp', 699, 'app_A_list_month', date '2026-11-11'),
  ('app', 'A', 'list', 'month', 'chf', 699, 'app_A_list_month', date '2026-11-11'),
  ('app', 'A', 'list', 'month', 'usd', 899, 'app_A_list_month', date '2026-11-11'),
  ('app', 'A', 'list', 'month', 'cad', 1299, 'app_A_list_month', date '2026-11-11'),
  ('app', 'A', 'list', 'month', 'aud', 1299, 'app_A_list_month', date '2026-11-11'),
  ('app', 'A', 'list', 'year', 'eur', 7999, 'app_A_list_year', date '2026-11-11'),
  ('app', 'A', 'list', 'year', 'gbp', 6699, 'app_A_list_year', date '2026-11-11'),
  ('app', 'A', 'list', 'year', 'chf', 7399, 'app_A_list_year', date '2026-11-11'),
  ('app', 'A', 'list', 'year', 'usd', 8899, 'app_A_list_year', date '2026-11-11'),
  ('app', 'A', 'list', 'year', 'cad', 12499, 'app_A_list_year', date '2026-11-11'),
  ('app', 'A', 'list', 'year', 'aud', 12999, 'app_A_list_year', date '2026-11-11'),
  ('trial', 'A', 'list', 'once', 'eur', 350, 'trial_A_list_once', date '2026-11-11'),
  ('trial', 'A', 'list', 'once', 'gbp', 299, 'trial_A_list_once', date '2026-11-11'),
  ('trial', 'A', 'list', 'once', 'chf', 299, 'trial_A_list_once', date '2026-11-11'),
  ('trial', 'A', 'list', 'once', 'usd', 399, 'trial_A_list_once', date '2026-11-11'),
  ('trial', 'A', 'list', 'once', 'cad', 599, 'trial_A_list_once', date '2026-11-11'),
  ('trial', 'A', 'list', 'once', 'aud', 599, 'trial_A_list_once', date '2026-11-11'),
  ('help_class', 'A', 'list', 'once', 'eur', 500, 'help_class_A_list_once', date '2026-11-11'),
  ('help_class', 'A', 'list', 'once', 'gbp', 399, 'help_class_A_list_once', date '2026-11-11'),
  ('help_class', 'A', 'list', 'once', 'chf', 499, 'help_class_A_list_once', date '2026-11-11'),
  ('help_class', 'A', 'list', 'once', 'usd', 599, 'help_class_A_list_once', date '2026-11-11'),
  ('help_class', 'A', 'list', 'once', 'cad', 799, 'help_class_A_list_once', date '2026-11-11'),
  ('help_class', 'A', 'list', 'once', 'aud', 799, 'help_class_A_list_once', date '2026-11-11'),
  ('minutes_30', 'A', 'list', 'once', 'eur', 299, 'minutes_30_A_list_once', date '2026-11-11'),
  ('minutes_30', 'A', 'list', 'once', 'gbp', 299, 'minutes_30_A_list_once', date '2026-11-11'),
  ('minutes_30', 'A', 'list', 'once', 'chf', 299, 'minutes_30_A_list_once', date '2026-11-11'),
  ('minutes_30', 'A', 'list', 'once', 'usd', 299, 'minutes_30_A_list_once', date '2026-11-11'),
  ('minutes_30', 'A', 'list', 'once', 'cad', 499, 'minutes_30_A_list_once', date '2026-11-11'),
  ('minutes_30', 'A', 'list', 'once', 'aud', 499, 'minutes_30_A_list_once', date '2026-11-11'),
  ('minutes_120', 'A', 'list', 'once', 'eur', 899, 'minutes_120_A_list_once', date '2026-11-11'),
  ('minutes_120', 'A', 'list', 'once', 'gbp', 799, 'minutes_120_A_list_once', date '2026-11-11'),
  ('minutes_120', 'A', 'list', 'once', 'chf', 799, 'minutes_120_A_list_once', date '2026-11-11'),
  ('minutes_120', 'A', 'list', 'once', 'usd', 999, 'minutes_120_A_list_once', date '2026-11-11'),
  ('minutes_120', 'A', 'list', 'once', 'cad', 1399, 'minutes_120_A_list_once', date '2026-11-11'),
  ('minutes_120', 'A', 'list', 'once', 'aud', 1499, 'minutes_120_A_list_once', date '2026-11-11'),
  ('open_en', 'A', 'list', 'month', 'eur', 2400, 'open_en_A_list_month', date '2026-11-11'),
  ('open_en', 'A', 'list', 'month', 'gbp', 1999, 'open_en_A_list_month', date '2026-11-11'),
  ('open_en', 'A', 'list', 'month', 'chf', 2199, 'open_en_A_list_month', date '2026-11-11'),
  ('open_en', 'A', 'list', 'month', 'usd', 2699, 'open_en_A_list_month', date '2026-11-11'),
  ('open_en', 'A', 'list', 'month', 'cad', 3799, 'open_en_A_list_month', date '2026-11-11'),
  ('open_en', 'A', 'list', 'month', 'aud', 3899, 'open_en_A_list_month', date '2026-11-11'),
  ('open_de', 'A', 'list', 'month', 'eur', 2900, 'open_de_A_list_month', date '2026-11-11'),
  ('open_de', 'A', 'list', 'month', 'gbp', 2399, 'open_de_A_list_month', date '2026-11-11'),
  ('open_de', 'A', 'list', 'month', 'chf', 2699, 'open_de_A_list_month', date '2026-11-11'),
  ('open_de', 'A', 'list', 'month', 'usd', 3199, 'open_de_A_list_month', date '2026-11-11'),
  ('open_de', 'A', 'list', 'month', 'cad', 4599, 'open_de_A_list_month', date '2026-11-11'),
  ('open_de', 'A', 'list', 'month', 'aud', 4699, 'open_de_A_list_month', date '2026-11-11'),
  ('level_en', 'A', 'list', 'month', 'eur', 7200, 'level_en_A_list_month', date '2026-11-11'),
  ('level_en', 'A', 'list', 'month', 'gbp', 5999, 'level_en_A_list_month', date '2026-11-11'),
  ('level_en', 'A', 'list', 'month', 'chf', 6599, 'level_en_A_list_month', date '2026-11-11'),
  ('level_en', 'A', 'list', 'month', 'usd', 7999, 'level_en_A_list_month', date '2026-11-11'),
  ('level_en', 'A', 'list', 'month', 'cad', 11499, 'level_en_A_list_month', date '2026-11-11'),
  ('level_en', 'A', 'list', 'month', 'aud', 11499, 'level_en_A_list_month', date '2026-11-11'),
  ('level_en', 'A', 'list', 'upfront', 'eur', 19900, 'level_en_A_list_upfront', date '2026-11-11'),
  ('level_en', 'A', 'list', 'upfront', 'gbp', 16499, 'level_en_A_list_upfront', date '2026-11-11'),
  ('level_en', 'A', 'list', 'upfront', 'chf', 18499, 'level_en_A_list_upfront', date '2026-11-11'),
  ('level_en', 'A', 'list', 'upfront', 'usd', 21999, 'level_en_A_list_upfront', date '2026-11-11'),
  ('level_en', 'A', 'list', 'upfront', 'cad', 31499, 'level_en_A_list_upfront', date '2026-11-11'),
  ('level_en', 'A', 'list', 'upfront', 'aud', 32499, 'level_en_A_list_upfront', date '2026-11-11'),
  ('level_en', 'A', 'founding', 'month', 'eur', 6400, 'level_en_A_founding_month', date '2026-11-11'),
  ('level_en', 'A', 'founding', 'month', 'gbp', 5399, 'level_en_A_founding_month', date '2026-11-11'),
  ('level_en', 'A', 'founding', 'month', 'chf', 5899, 'level_en_A_founding_month', date '2026-11-11'),
  ('level_en', 'A', 'founding', 'month', 'usd', 7099, 'level_en_A_founding_month', date '2026-11-11'),
  ('level_en', 'A', 'founding', 'month', 'cad', 9999, 'level_en_A_founding_month', date '2026-11-11'),
  ('level_en', 'A', 'founding', 'month', 'aud', 10499, 'level_en_A_founding_month', date '2026-11-11'),
  ('level_en', 'A', 'founding', 'upfront', 'eur', 17900, 'level_en_A_founding_upfront', date '2026-11-11'),
  ('level_en', 'A', 'founding', 'upfront', 'gbp', 14999, 'level_en_A_founding_upfront', date '2026-11-11'),
  ('level_en', 'A', 'founding', 'upfront', 'chf', 16499, 'level_en_A_founding_upfront', date '2026-11-11'),
  ('level_en', 'A', 'founding', 'upfront', 'usd', 19999, 'level_en_A_founding_upfront', date '2026-11-11'),
  ('level_en', 'A', 'founding', 'upfront', 'cad', 28499, 'level_en_A_founding_upfront', date '2026-11-11'),
  ('level_en', 'A', 'founding', 'upfront', 'aud', 28999, 'level_en_A_founding_upfront', date '2026-11-11'),
  ('level_de', 'A', 'list', 'month', 'eur', 8900, 'level_de_A_list_month', date '2026-11-11'),
  ('level_de', 'A', 'list', 'month', 'gbp', 7399, 'level_de_A_list_month', date '2026-11-11'),
  ('level_de', 'A', 'list', 'month', 'chf', 8199, 'level_de_A_list_month', date '2026-11-11'),
  ('level_de', 'A', 'list', 'month', 'usd', 9899, 'level_de_A_list_month', date '2026-11-11'),
  ('level_de', 'A', 'list', 'month', 'cad', 13999, 'level_de_A_list_month', date '2026-11-11'),
  ('level_de', 'A', 'list', 'month', 'aud', 14499, 'level_de_A_list_month', date '2026-11-11'),
  ('level_de', 'A', 'list', 'upfront', 'eur', 24900, 'level_de_A_list_upfront', date '2026-11-11'),
  ('level_de', 'A', 'list', 'upfront', 'gbp', 20999, 'level_de_A_list_upfront', date '2026-11-11'),
  ('level_de', 'A', 'list', 'upfront', 'chf', 22999, 'level_de_A_list_upfront', date '2026-11-11'),
  ('level_de', 'A', 'list', 'upfront', 'usd', 27499, 'level_de_A_list_upfront', date '2026-11-11'),
  ('level_de', 'A', 'list', 'upfront', 'cad', 39499, 'level_de_A_list_upfront', date '2026-11-11'),
  ('level_de', 'A', 'list', 'upfront', 'aud', 40499, 'level_de_A_list_upfront', date '2026-11-11'),
  ('level_de', 'A', 'founding', 'month', 'eur', 8200, 'level_de_A_founding_month', date '2026-11-11'),
  ('level_de', 'A', 'founding', 'month', 'gbp', 6899, 'level_de_A_founding_month', date '2026-11-11'),
  ('level_de', 'A', 'founding', 'month', 'chf', 7599, 'level_de_A_founding_month', date '2026-11-11'),
  ('level_de', 'A', 'founding', 'month', 'usd', 9099, 'level_de_A_founding_month', date '2026-11-11'),
  ('level_de', 'A', 'founding', 'month', 'cad', 12999, 'level_de_A_founding_month', date '2026-11-11'),
  ('level_de', 'A', 'founding', 'month', 'aud', 13499, 'level_de_A_founding_month', date '2026-11-11'),
  ('level_de', 'A', 'founding', 'upfront', 'eur', 22900, 'level_de_A_founding_upfront', date '2026-11-11'),
  ('level_de', 'A', 'founding', 'upfront', 'gbp', 18999, 'level_de_A_founding_upfront', date '2026-11-11'),
  ('level_de', 'A', 'founding', 'upfront', 'chf', 20999, 'level_de_A_founding_upfront', date '2026-11-11'),
  ('level_de', 'A', 'founding', 'upfront', 'usd', 25499, 'level_de_A_founding_upfront', date '2026-11-11'),
  ('level_de', 'A', 'founding', 'upfront', 'cad', 36499, 'level_de_A_founding_upfront', date '2026-11-11'),
  ('level_de', 'A', 'founding', 'upfront', 'aud', 36999, 'level_de_A_founding_upfront', date '2026-11-11'),
  ('exam_en', 'A', 'list', 'month', 'eur', 8900, 'exam_en_A_list_month', date '2026-11-11'),
  ('exam_en', 'A', 'list', 'month', 'gbp', 7399, 'exam_en_A_list_month', date '2026-11-11'),
  ('exam_en', 'A', 'list', 'month', 'chf', 8199, 'exam_en_A_list_month', date '2026-11-11'),
  ('exam_en', 'A', 'list', 'month', 'usd', 9899, 'exam_en_A_list_month', date '2026-11-11'),
  ('exam_en', 'A', 'list', 'month', 'cad', 13999, 'exam_en_A_list_month', date '2026-11-11'),
  ('exam_en', 'A', 'list', 'month', 'aud', 14499, 'exam_en_A_list_month', date '2026-11-11'),
  ('exam_en', 'A', 'list', 'upfront', 'eur', 24900, 'exam_en_A_list_upfront', date '2026-11-11'),
  ('exam_en', 'A', 'list', 'upfront', 'gbp', 20999, 'exam_en_A_list_upfront', date '2026-11-11'),
  ('exam_en', 'A', 'list', 'upfront', 'chf', 22999, 'exam_en_A_list_upfront', date '2026-11-11'),
  ('exam_en', 'A', 'list', 'upfront', 'usd', 27499, 'exam_en_A_list_upfront', date '2026-11-11'),
  ('exam_en', 'A', 'list', 'upfront', 'cad', 39499, 'exam_en_A_list_upfront', date '2026-11-11'),
  ('exam_en', 'A', 'list', 'upfront', 'aud', 40499, 'exam_en_A_list_upfront', date '2026-11-11'),
  ('exam_en', 'A', 'founding', 'month', 'eur', 7900, 'exam_en_A_founding_month', date '2026-11-11'),
  ('exam_en', 'A', 'founding', 'month', 'gbp', 6599, 'exam_en_A_founding_month', date '2026-11-11'),
  ('exam_en', 'A', 'founding', 'month', 'chf', 7299, 'exam_en_A_founding_month', date '2026-11-11'),
  ('exam_en', 'A', 'founding', 'month', 'usd', 8799, 'exam_en_A_founding_month', date '2026-11-11'),
  ('exam_en', 'A', 'founding', 'month', 'cad', 12499, 'exam_en_A_founding_month', date '2026-11-11'),
  ('exam_en', 'A', 'founding', 'month', 'aud', 12999, 'exam_en_A_founding_month', date '2026-11-11'),
  ('exam_en', 'A', 'founding', 'upfront', 'eur', 21900, 'exam_en_A_founding_upfront', date '2026-11-11'),
  ('exam_en', 'A', 'founding', 'upfront', 'gbp', 18499, 'exam_en_A_founding_upfront', date '2026-11-11'),
  ('exam_en', 'A', 'founding', 'upfront', 'chf', 19999, 'exam_en_A_founding_upfront', date '2026-11-11'),
  ('exam_en', 'A', 'founding', 'upfront', 'usd', 24499, 'exam_en_A_founding_upfront', date '2026-11-11'),
  ('exam_en', 'A', 'founding', 'upfront', 'cad', 34499, 'exam_en_A_founding_upfront', date '2026-11-11'),
  ('exam_en', 'A', 'founding', 'upfront', 'aud', 35499, 'exam_en_A_founding_upfront', date '2026-11-11'),
  ('exam_de', 'A', 'list', 'month', 'eur', 10700, 'exam_de_A_list_month', date '2026-11-11'),
  ('exam_de', 'A', 'list', 'month', 'gbp', 8899, 'exam_de_A_list_month', date '2026-11-11'),
  ('exam_de', 'A', 'list', 'month', 'chf', 9899, 'exam_de_A_list_month', date '2026-11-11'),
  ('exam_de', 'A', 'list', 'month', 'usd', 11999, 'exam_de_A_list_month', date '2026-11-11'),
  ('exam_de', 'A', 'list', 'month', 'cad', 16999, 'exam_de_A_list_month', date '2026-11-11'),
  ('exam_de', 'A', 'list', 'month', 'aud', 17499, 'exam_de_A_list_month', date '2026-11-11'),
  ('exam_de', 'A', 'list', 'upfront', 'eur', 29900, 'exam_de_A_list_upfront', date '2026-11-11'),
  ('exam_de', 'A', 'list', 'upfront', 'gbp', 24999, 'exam_de_A_list_upfront', date '2026-11-11'),
  ('exam_de', 'A', 'list', 'upfront', 'chf', 27499, 'exam_de_A_list_upfront', date '2026-11-11'),
  ('exam_de', 'A', 'list', 'upfront', 'usd', 33499, 'exam_de_A_list_upfront', date '2026-11-11'),
  ('exam_de', 'A', 'list', 'upfront', 'cad', 47499, 'exam_de_A_list_upfront', date '2026-11-11'),
  ('exam_de', 'A', 'list', 'upfront', 'aud', 48499, 'exam_de_A_list_upfront', date '2026-11-11'),
  ('exam_de', 'A', 'founding', 'month', 'eur', 9600, 'exam_de_A_founding_month', date '2026-11-11'),
  ('exam_de', 'A', 'founding', 'month', 'gbp', 7999, 'exam_de_A_founding_month', date '2026-11-11'),
  ('exam_de', 'A', 'founding', 'month', 'chf', 8899, 'exam_de_A_founding_month', date '2026-11-11'),
  ('exam_de', 'A', 'founding', 'month', 'usd', 10499, 'exam_de_A_founding_month', date '2026-11-11'),
  ('exam_de', 'A', 'founding', 'month', 'cad', 14999, 'exam_de_A_founding_month', date '2026-11-11'),
  ('exam_de', 'A', 'founding', 'month', 'aud', 15499, 'exam_de_A_founding_month', date '2026-11-11'),
  ('exam_de', 'A', 'founding', 'upfront', 'eur', 26900, 'exam_de_A_founding_upfront', date '2026-11-11'),
  ('exam_de', 'A', 'founding', 'upfront', 'gbp', 22499, 'exam_de_A_founding_upfront', date '2026-11-11'),
  ('exam_de', 'A', 'founding', 'upfront', 'chf', 24999, 'exam_de_A_founding_upfront', date '2026-11-11'),
  ('exam_de', 'A', 'founding', 'upfront', 'usd', 29999, 'exam_de_A_founding_upfront', date '2026-11-11'),
  ('exam_de', 'A', 'founding', 'upfront', 'cad', 42499, 'exam_de_A_founding_upfront', date '2026-11-11'),
  ('exam_de', 'A', 'founding', 'upfront', 'aud', 43499, 'exam_de_A_founding_upfront', date '2026-11-11'),
  ('b2b_en', 'A', 'list', 'month', 'eur', 7900, 'b2b_en_A_list_month', date '2026-11-11'),
  ('b2b_de', 'A', 'list', 'month', 'eur', 9500, 'b2b_de_A_list_month', date '2026-11-11'),
  ('app', 'B', 'list', 'month', 'eur', 499, 'app_B_list_month', date '2026-11-11'),
  ('app', 'B', 'list', 'month', 'usd', 599, 'app_B_list_month', date '2026-11-11'),
  ('app', 'B', 'list', 'month', 'mad', 5900, 'app_B_list_month', date '2026-11-11'),
  ('app', 'B', 'list', 'year', 'eur', 5199, 'app_B_list_year', date '2026-11-11'),
  ('app', 'B', 'list', 'year', 'usd', 5799, 'app_B_list_year', date '2026-11-11'),
  ('app', 'B', 'list', 'year', 'mad', 56900, 'app_B_list_year', date '2026-11-11'),
  ('trial', 'B', 'list', 'once', 'eur', 299, 'trial_B_list_once', date '2026-11-11'),
  ('trial', 'B', 'list', 'once', 'usd', 299, 'trial_B_list_once', date '2026-11-11'),
  ('trial', 'B', 'list', 'once', 'mad', 2900, 'trial_B_list_once', date '2026-11-11'),
  ('help_class', 'B', 'list', 'once', 'eur', 399, 'help_class_B_list_once', date '2026-11-11'),
  ('help_class', 'B', 'list', 'once', 'usd', 499, 'help_class_B_list_once', date '2026-11-11'),
  ('help_class', 'B', 'list', 'once', 'mad', 4900, 'help_class_B_list_once', date '2026-11-11'),
  ('minutes_30', 'B', 'list', 'once', 'eur', 299, 'minutes_30_B_list_once', date '2026-11-11'),
  ('minutes_30', 'B', 'list', 'once', 'usd', 299, 'minutes_30_B_list_once', date '2026-11-11'),
  ('minutes_30', 'B', 'list', 'once', 'mad', 2900, 'minutes_30_B_list_once', date '2026-11-11'),
  ('minutes_120', 'B', 'list', 'once', 'eur', 899, 'minutes_120_B_list_once', date '2026-11-11'),
  ('minutes_120', 'B', 'list', 'once', 'usd', 999, 'minutes_120_B_list_once', date '2026-11-11'),
  ('minutes_120', 'B', 'list', 'once', 'mad', 9900, 'minutes_120_B_list_once', date '2026-11-11'),
  ('open_en', 'B', 'list', 'month', 'eur', 1999, 'open_en_B_list_month', date '2026-11-11'),
  ('open_en', 'B', 'list', 'month', 'usd', 2299, 'open_en_B_list_month', date '2026-11-11'),
  ('open_en', 'B', 'list', 'month', 'mad', 21900, 'open_en_B_list_month', date '2026-11-11'),
  ('open_de', 'B', 'list', 'month', 'eur', 2499, 'open_de_B_list_month', date '2026-11-11'),
  ('open_de', 'B', 'list', 'month', 'usd', 2699, 'open_de_B_list_month', date '2026-11-11'),
  ('open_de', 'B', 'list', 'month', 'mad', 26900, 'open_de_B_list_month', date '2026-11-11'),
  ('level_en', 'B', 'list', 'month', 'eur', 6099, 'level_en_B_list_month', date '2026-11-11'),
  ('level_en', 'B', 'list', 'month', 'usd', 6799, 'level_en_B_list_month', date '2026-11-11'),
  ('level_en', 'B', 'list', 'month', 'mad', 66900, 'level_en_B_list_month', date '2026-11-11'),
  ('level_en', 'B', 'list', 'upfront', 'eur', 16999, 'level_en_B_list_upfront', date '2026-11-11'),
  ('level_en', 'B', 'list', 'upfront', 'usd', 18999, 'level_en_B_list_upfront', date '2026-11-11'),
  ('level_en', 'B', 'list', 'upfront', 'mad', 185900, 'level_en_B_list_upfront', date '2026-11-11'),
  ('level_en', 'B', 'founding', 'month', 'eur', 5399, 'level_en_B_founding_month', date '2026-11-11'),
  ('level_en', 'B', 'founding', 'month', 'usd', 6099, 'level_en_B_founding_month', date '2026-11-11'),
  ('level_en', 'B', 'founding', 'month', 'mad', 59900, 'level_en_B_founding_month', date '2026-11-11'),
  ('level_en', 'B', 'founding', 'upfront', 'eur', 14999, 'level_en_B_founding_upfront', date '2026-11-11'),
  ('level_en', 'B', 'founding', 'upfront', 'usd', 16999, 'level_en_B_founding_upfront', date '2026-11-11'),
  ('level_en', 'B', 'founding', 'upfront', 'mad', 166900, 'level_en_B_founding_upfront', date '2026-11-11'),
  ('level_de', 'B', 'list', 'month', 'eur', 7599, 'level_de_B_list_month', date '2026-11-11'),
  ('level_de', 'B', 'list', 'month', 'usd', 8399, 'level_de_B_list_month', date '2026-11-11'),
  ('level_de', 'B', 'list', 'month', 'mad', 82900, 'level_de_B_list_month', date '2026-11-11'),
  ('level_de', 'B', 'list', 'upfront', 'eur', 20999, 'level_de_B_list_upfront', date '2026-11-11'),
  ('level_de', 'B', 'list', 'upfront', 'usd', 23499, 'level_de_B_list_upfront', date '2026-11-11'),
  ('level_de', 'B', 'list', 'upfront', 'mad', 232900, 'level_de_B_list_upfront', date '2026-11-11'),
  ('level_de', 'B', 'founding', 'month', 'eur', 6999, 'level_de_B_founding_month', date '2026-11-11'),
  ('level_de', 'B', 'founding', 'month', 'usd', 7799, 'level_de_B_founding_month', date '2026-11-11'),
  ('level_de', 'B', 'founding', 'month', 'mad', 76900, 'level_de_B_founding_month', date '2026-11-11'),
  ('level_de', 'B', 'founding', 'upfront', 'eur', 19499, 'level_de_B_founding_upfront', date '2026-11-11'),
  ('level_de', 'B', 'founding', 'upfront', 'usd', 21499, 'level_de_B_founding_upfront', date '2026-11-11'),
  ('level_de', 'B', 'founding', 'upfront', 'mad', 213900, 'level_de_B_founding_upfront', date '2026-11-11'),
  ('exam_en', 'B', 'list', 'month', 'eur', 7599, 'exam_en_B_list_month', date '2026-11-11'),
  ('exam_en', 'B', 'list', 'month', 'usd', 8399, 'exam_en_B_list_month', date '2026-11-11'),
  ('exam_en', 'B', 'list', 'month', 'mad', 82900, 'exam_en_B_list_month', date '2026-11-11'),
  ('exam_en', 'B', 'list', 'upfront', 'eur', 20999, 'exam_en_B_list_upfront', date '2026-11-11'),
  ('exam_en', 'B', 'list', 'upfront', 'usd', 23499, 'exam_en_B_list_upfront', date '2026-11-11'),
  ('exam_en', 'B', 'list', 'upfront', 'mad', 232900, 'exam_en_B_list_upfront', date '2026-11-11'),
  ('exam_en', 'B', 'founding', 'month', 'eur', 6699, 'exam_en_B_founding_month', date '2026-11-11'),
  ('exam_en', 'B', 'founding', 'month', 'usd', 7499, 'exam_en_B_founding_month', date '2026-11-11'),
  ('exam_en', 'B', 'founding', 'month', 'mad', 73900, 'exam_en_B_founding_month', date '2026-11-11'),
  ('exam_en', 'B', 'founding', 'upfront', 'eur', 18499, 'exam_en_B_founding_upfront', date '2026-11-11'),
  ('exam_en', 'B', 'founding', 'upfront', 'usd', 20499, 'exam_en_B_founding_upfront', date '2026-11-11'),
  ('exam_en', 'B', 'founding', 'upfront', 'mad', 204900, 'exam_en_B_founding_upfront', date '2026-11-11'),
  ('exam_de', 'B', 'list', 'month', 'eur', 9099, 'exam_de_B_list_month', date '2026-11-11'),
  ('exam_de', 'B', 'list', 'month', 'usd', 9999, 'exam_de_B_list_month', date '2026-11-11'),
  ('exam_de', 'B', 'list', 'month', 'mad', 99900, 'exam_de_B_list_month', date '2026-11-11'),
  ('exam_de', 'B', 'list', 'upfront', 'eur', 25499, 'exam_de_B_list_upfront', date '2026-11-11'),
  ('exam_de', 'B', 'list', 'upfront', 'usd', 28499, 'exam_de_B_list_upfront', date '2026-11-11'),
  ('exam_de', 'B', 'list', 'upfront', 'mad', 279900, 'exam_de_B_list_upfront', date '2026-11-11'),
  ('exam_de', 'B', 'founding', 'month', 'eur', 8199, 'exam_de_B_founding_month', date '2026-11-11'),
  ('exam_de', 'B', 'founding', 'month', 'usd', 9099, 'exam_de_B_founding_month', date '2026-11-11'),
  ('exam_de', 'B', 'founding', 'month', 'mad', 89900, 'exam_de_B_founding_month', date '2026-11-11'),
  ('exam_de', 'B', 'founding', 'upfront', 'eur', 22999, 'exam_de_B_founding_upfront', date '2026-11-11'),
  ('exam_de', 'B', 'founding', 'upfront', 'usd', 25499, 'exam_de_B_founding_upfront', date '2026-11-11'),
  ('exam_de', 'B', 'founding', 'upfront', 'mad', 251900, 'exam_de_B_founding_upfront', date '2026-11-11'),
  ('b2b_en', 'B', 'list', 'month', 'eur', 7900, 'b2b_en_B_list_month', date '2026-11-11'),
  ('b2b_de', 'B', 'list', 'month', 'eur', 9500, 'b2b_de_B_list_month', date '2026-11-11')
on conflict (product_key, band, variant, cadence, currency, valid_from) do update set unit_amount = excluded.unit_amount, lookup_key = excluded.lookup_key;


-- Verify: tables with row level security, policies, rows seeded, and the three functions.
select
  (select count(*) from pg_class c join pg_namespace n on n.oid = c.relnamespace where n.nspname = 'public' and c.relrowsecurity
     and c.relname in ('products', 'country_bands', 'price_book', 'customer_pricing', 'band_changes', 'entitlements', 'quotes', 'trial_markers', 'fx_rates', 'finance_reserves')) as tables_with_rls,
  (select count(*) from pg_policies where schemaname = 'public' and tablename in ('products', 'country_bands', 'price_book', 'customer_pricing', 'band_changes', 'entitlements', 'fx_rates', 'finance_reserves')) as policies,
  (select count(*) from public.products) as products,
  (select count(*) from public.country_bands) as countries,
  (select count(*) from public.country_bands where band = 'A') as band_a_countries,
  (select count(*) from public.price_book) as prices,
  (select count(*) from pg_proc p join pg_namespace n on n.oid = p.pronamespace where n.nspname = 'public' and p.proname in ('claim_founding_seat', 'set_band', 'entitlement_minutes')) as functions;
