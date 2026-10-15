-- ============================================================
--  Phase 3 — Email signups from the public forms (plan item 8)
--
--  The "Reserve your spot" and footer newsletter forms were Webflow
--  forms that saved nothing yet showed "Thank you!". They now post to
--  /api/send-admin-email?action=subscribe (service role), which stores
--  the address here. Nobody but an admin can read or delete the list;
--  browsers cannot write to it directly.
--
--  ip_hash (keyed hash, never the IP itself) is only used for the
--  per-address rate limit and is cleared after a day by the API.
--
--  Run in Supabase → SQL Editor. Idempotent. Deletes nothing.
-- ============================================================

begin;

create table if not exists public.email_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null check (length(email) <= 254 and email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  source text not null default 'home' check (source in ('home', 'footer')),
  page text check (length(page) <= 200),
  locale text check (length(locale) <= 8),
  ip_hash text check (length(ip_hash) <= 64),
  created_at timestamptz not null default now()
);
create unique index if not exists email_signups_email_lower on public.email_signups (lower(email));
create index if not exists email_signups_ip_recent on public.email_signups (ip_hash, created_at) where ip_hash is not null;

alter table public.email_signups enable row level security;
revoke all on public.email_signups from anon, authenticated;
grant select, delete on public.email_signups to authenticated;

drop policy if exists email_signups_admin_select on public.email_signups;
create policy email_signups_admin_select on public.email_signups for select to authenticated
  using (public.is_admin());
drop policy if exists email_signups_admin_delete on public.email_signups;
create policy email_signups_admin_delete on public.email_signups for delete to authenticated
  using (public.is_admin());

commit;

-- ============================================================
--  Verify (expect: the table, RLS on, two admin policies, and no
--  privileges for anon).
-- ============================================================
select relname, relrowsecurity from pg_class where oid = 'public.email_signups'::regclass;
select policyname, cmd from pg_policies where tablename = 'email_signups' order by 1;
select grantee, string_agg(privilege_type, ', ' order by privilege_type) as privileges
from information_schema.role_table_grants
where table_schema = 'public' and table_name = 'email_signups' and grantee in ('anon', 'authenticated')
group by 1 order by 1;
