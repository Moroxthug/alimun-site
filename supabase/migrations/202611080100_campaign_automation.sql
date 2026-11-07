-- ============================================================
--  Campaign automation (owner, 7 Nov 2026): the owner asks Claude for a campaign ("half price on Focused until
--  Sunday"); Claude writes it in every dashboard language, emails the owner a test, and sends after the owner's "go".
--  Newsletter sign-ups from the footer form get campaigns too, from now on (the form now says it includes news and
--  offers and that you must be 16 or older; sign-ups from before that change are not included).
--
--    1. email_signups: offers_consent (true only for footer sign-ups after the new wording), consented_at,
--       unsubscribed_at (set by the signed link in each email).
--    2. campaigns: sent_via ('dashboard' or 'agent'), messages (the translated versions), newsletter_emailed.
--
--  Idempotent. Deletes nothing.
-- ============================================================

alter table public.email_signups add column if not exists offers_consent boolean not null default false;
alter table public.email_signups add column if not exists consented_at timestamptz;
alter table public.email_signups add column if not exists unsubscribed_at timestamptz;

alter table public.campaigns add column if not exists sent_via text not null default 'dashboard';
alter table public.campaigns drop constraint if exists campaigns_sent_via_check;
alter table public.campaigns add constraint campaigns_sent_via_check check (sent_via in ('dashboard', 'agent'));
alter table public.campaigns add column if not exists messages jsonb;
alter table public.campaigns add column if not exists newsletter_emailed integer not null default 0;

-- Verify
select
  (select count(*) from information_schema.columns where table_schema = 'public' and table_name = 'email_signups'
     and column_name in ('offers_consent', 'consented_at', 'unsubscribed_at')) as signup_columns,   -- 3
  (select count(*) from information_schema.columns where table_schema = 'public' and table_name = 'campaigns'
     and column_name in ('sent_via', 'messages', 'newsletter_emailed')) as campaign_columns,         -- 3
  (select count(*) from public.email_signups where offers_consent) as newsletter_audience;            -- 0 today
