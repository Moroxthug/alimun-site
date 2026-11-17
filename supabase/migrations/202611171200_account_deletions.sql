-- Learners deleting their own account (api/account.js, js/app/delete-account.js, #/settings/delete).
-- The account itself is removed with auth.admin.deleteUser, which cascades to student_profiles and everything the
-- learner owns. This table keeps only what the owner needs to learn why people leave: no name, no email, no user id.
-- Written by the service role only; admins can read.
create table if not exists public.account_deletions (
  id uuid primary key default gen_random_uuid(),
  deleted_at timestamptz not null default now(),
  tier text,
  had_subscription boolean not null default false,
  member_days integer,
  reason text,
  locale text
);
alter table public.account_deletions enable row level security;
drop policy if exists account_deletions_admin_read on public.account_deletions;
create policy account_deletions_admin_read on public.account_deletions for select to authenticated using (public.is_admin());
create index if not exists account_deletions_at_idx on public.account_deletions (deleted_at desc);
select count(*) as account_deletions_rows from public.account_deletions;
