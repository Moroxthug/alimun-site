-- Contact form submissions (api/_lib/contact.js). Written by the service role only; admins can read.
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text,
  email text not null,
  phone text,
  message text not null,
  locale text,
  page text
);
alter table public.contact_messages enable row level security;
drop policy if exists contact_messages_admin_read on public.contact_messages;
create policy contact_messages_admin_read on public.contact_messages for select to authenticated using (public.is_admin());
create index if not exists contact_messages_created_idx on public.contact_messages (created_at desc);
select count(*) as contact_messages_rows from public.contact_messages;
