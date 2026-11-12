-- New checkout, pricing engine build step 4 (docs/PRICING_ENGINE_SPEC.md sections 4 and 5).
-- Quotes keep the card that set the price and the Stripe objects a purchase created (so a payment that needs the
-- bank's confirmation can be finished); entitlements keep the saved card of a reserved pack (charged when the room
-- opens) and the invoice of a one-time purchase. pricing_on_sale lists what the checkout sells today: products whose
-- access is not wired yet (the app and open classes until step 5, trial and help class until step 7) stay off.
-- Idempotent; ends with a verify query.

alter table public.quotes add column if not exists payment_method_id text;
alter table public.quotes add column if not exists card_country text check (card_country is null or card_country ~ '^[A-Z]{2}$');
alter table public.quotes add column if not exists founding_claim boolean not null default false;
alter table public.quotes add column if not exists stripe_subscription_id text;
alter table public.quotes add column if not exists stripe_invoice_id text;
alter table public.quotes add column if not exists entitlement_id uuid references public.entitlements (id) on delete set null;
alter table public.quotes add column if not exists purchase_started_at timestamptz;

alter table public.entitlements add column if not exists stripe_invoice_id text;
alter table public.entitlements add column if not exists stripe_payment_method_id text;
alter table public.entitlements add column if not exists quote_id uuid;

create unique index if not exists entitlements_invoice_idx on public.entitlements (stripe_invoice_id) where stripe_invoice_id is not null;
-- Full (not partial) unique index: the checkout upserts on quote_id, and ON CONFLICT needs a plain unique index.
create unique index if not exists entitlements_quote_idx on public.entitlements (quote_id);
create index if not exists quotes_setup_intent_idx on public.quotes (setup_intent_id) where setup_intent_id is not null;

insert into public.app_settings (key, value) values
  ('pricing_on_sale', 'level_en,level_de,exam_en,exam_de,minutes_30,minutes_120')
on conflict (key) do nothing;

-- Verify: the new columns and the setting.
select (select count(*) from information_schema.columns where table_schema = 'public' and table_name = 'quotes'
          and column_name in ('payment_method_id', 'card_country', 'founding_claim', 'stripe_subscription_id', 'stripe_invoice_id', 'entitlement_id', 'purchase_started_at')) as quote_cols,
       (select count(*) from information_schema.columns where table_schema = 'public' and table_name = 'entitlements'
          and column_name in ('stripe_invoice_id', 'stripe_payment_method_id', 'quote_id')) as entitlement_cols,
       (select value from public.app_settings where key = 'pricing_on_sale') as on_sale;
