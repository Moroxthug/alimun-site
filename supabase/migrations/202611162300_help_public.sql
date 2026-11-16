-- Help, Part 4 (docs/HELP_PLAN.md): the public /help page. Visitors who are not signed in can ask Help and write to a
-- person. Their rows carry no account; a keyed hash of their network address (never the address itself) limits how
-- many they can send in a day. The hash goes with the row, so it is deleted with it after 90 days. Additive.
alter table public.help_questions add column if not exists ip_hash text check (ip_hash is null or ip_hash ~ '^[0-9a-f]{64}$');
alter table public.help_requests add column if not exists ip_hash text check (ip_hash is null or ip_hash ~ '^[0-9a-f]{64}$');
create index if not exists help_questions_ip_time on public.help_questions (ip_hash, created_at) where ip_hash is not null;
create index if not exists help_requests_ip_time on public.help_requests (ip_hash, created_at) where ip_hash is not null;

-- Verify: both columns exist
select count(*) as ip_hash_columns from information_schema.columns
where table_schema = 'public' and table_name in ('help_questions', 'help_requests') and column_name = 'ip_hash';
