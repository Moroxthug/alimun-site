-- Withdrawal requests (docs/PRICING_ENGINE_SPEC.md, build step 1).
-- EU consumers may withdraw from a distance contract within 14 days. Since 19 June 2026 the trader must offer an
-- online withdrawal function in two steps and confirm receipt on a durable medium (Directive (EU) 2023/2673,
-- art. 11a of Directive 2011/83/EU). api/withdraw.js stores each statement here and emails the receipt; refunds are
-- issued by an admin (classes already taken are paid for if the learner asked for classes to start early).
-- Idempotent. Inserts only through the service role; a learner reads their own requests; admins read and update all.

create table if not exists public.withdrawal_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users (id) on delete set null,
  full_name text not null check (char_length(full_name) between 1 and 120),
  email text not null check (char_length(email) between 3 and 254),
  contract_kind text not null check (contract_kind in ('subscription', 'payment', 'other')),
  contract_ref text check (contract_ref is null or char_length(contract_ref) <= 200),
  contract_label text check (contract_label is null or char_length(contract_label) <= 200),
  contract_date timestamptz,
  reason text check (reason is null or char_length(reason) <= 1000),
  locale text check (locale is null or char_length(locale) <= 8),
  status text not null default 'received' check (status in ('received', 'refunded', 'closed', 'rejected')),
  admin_note text check (admin_note is null or char_length(admin_note) <= 2000),
  received_at timestamptz not null default now(),
  ack_sent_at timestamptz,
  handled_at timestamptz,
  handled_by uuid references auth.users (id) on delete set null
);

create index if not exists withdrawal_requests_user_idx on public.withdrawal_requests (user_id, received_at desc);
create index if not exists withdrawal_requests_status_idx on public.withdrawal_requests (status, received_at desc);

alter table public.withdrawal_requests enable row level security;

drop policy if exists withdrawal_requests_own_read on public.withdrawal_requests;
create policy withdrawal_requests_own_read on public.withdrawal_requests
  for select to authenticated using (user_id = auth.uid());

drop policy if exists withdrawal_requests_admin_read on public.withdrawal_requests;
create policy withdrawal_requests_admin_read on public.withdrawal_requests
  for select to authenticated using (public.is_admin());

drop policy if exists withdrawal_requests_admin_update on public.withdrawal_requests;
create policy withdrawal_requests_admin_update on public.withdrawal_requests
  for update to authenticated using (public.is_admin()) with check (public.is_admin());

revoke all on public.withdrawal_requests from anon;
grant select, update on public.withdrawal_requests to authenticated;

-- Verify: the table, row level security and the three policies.
select c.relname as table_name, c.relrowsecurity as rls,
       (select count(*) from pg_policies p where p.schemaname = 'public' and p.tablename = 'withdrawal_requests') as policies
from pg_class c join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public' and c.relname = 'withdrawal_requests';
