-- ============================================================
--  In-page banners (owner, 8 Nov 2026: "can you create various templates for the emails and also for in page banners?")
--  A banner is shown on the public site, in the student dashboard, or both, between starts_at and ends_at, once it is
--  switched on (active). Drafts are inactive and seen only through a signed preview link. Three layouts: strip (a
--  slim bar at the top), card (a small card in the corner), panel (a wide panel with a picture). Texts per dashboard
--  language in messages ({ en: { heading, text, button_label }, fr: ... }); English required.
--  Read by /api/campaigns?action=banner (service role); browsers cannot read or write the table directly.
--  Idempotent. Deletes nothing.
-- ============================================================

create table if not exists public.banners (
  id          uuid primary key default gen_random_uuid(),
  template    text not null check (template in ('strip', 'card', 'panel')),
  placement   text not null check (placement in ('site', 'dashboard', 'both')),
  messages    jsonb not null,
  link        text check (link is null or link ~ '^https://alimun\.com/'),
  hero        text,
  starts_at   timestamptz not null default now(),
  ends_at     timestamptz,
  active      boolean not null default false,
  clicks      integer not null default 0,
  sent_via    text not null default 'dashboard' check (sent_via in ('dashboard', 'agent')),
  created_by  uuid references auth.users (id) on delete set null,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);
create index if not exists banners_live on public.banners (placement, starts_at) where active;

alter table public.banners enable row level security;
revoke all on public.banners from anon, authenticated;
grant select on public.banners to authenticated;
drop policy if exists banners_admin_select on public.banners;
create policy banners_admin_select on public.banners for select to authenticated using (public.is_admin());

create or replace function public.banner_click(p_id uuid) returns void
language sql security definer set search_path = public as $$
  update public.banners set clicks = clicks + 1 where id = p_id and active;
$$;
revoke execute on function public.banner_click(uuid) from public, anon, authenticated;
grant execute on function public.banner_click(uuid) to service_role;

-- Verify
select
  (select count(*) from information_schema.tables where table_schema = 'public' and table_name = 'banners') as banners_table,  -- 1
  (select relrowsecurity from pg_class where oid = 'public.banners'::regclass) as rls_on,                                     -- true
  (select count(*) from pg_proc where proname = 'banner_click') as click_fn;                                                  -- 1
