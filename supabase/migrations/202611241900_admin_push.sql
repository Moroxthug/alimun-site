-- Pop-ups for new support messages (owner, 24 Nov 2026: "add the pop-up for new support messages too").
-- One row per admin device that turned on pop-ups in Admin → Help requests: the browser's Web Push address and keys.
-- Written and read only by the server (api/help.js, service role): admin_push_on / admin_push_off, and tellSupport()
-- sends a notification to every row when a person writes to Support. A row whose address the push service no longer
-- accepts (404 or 410) is removed then. No access for anon or signed-in users.
-- Idempotent. Ends with a verify query.

create table if not exists public.admin_push_subscriptions (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users (id) on delete cascade,
  endpoint    text not null unique check (endpoint ~ '^https://' and length(endpoint) <= 1000),
  p256dh      text not null check (length(p256dh) <= 200),
  auth        text not null check (length(auth) <= 100),
  user_agent  text check (user_agent is null or length(user_agent) <= 300),
  created_at  timestamptz not null default now(),
  last_ok_at  timestamptz,
  last_error  text
);
create index if not exists admin_push_user on public.admin_push_subscriptions (user_id);

alter table public.admin_push_subscriptions enable row level security;
revoke all on public.admin_push_subscriptions from anon, authenticated;

-- Verify
select to_regclass('public.admin_push_subscriptions') is not null as push_table,
       has_table_privilege('authenticated', 'public.admin_push_subscriptions', 'select') as authenticated_can_read;
