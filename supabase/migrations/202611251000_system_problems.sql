-- Error alerts (owner, 25 Nov 2026: "deploy gate and error alerts"). Emails failed for six days (13–19 Nov) and nobody
-- knew: failures were only in Vercel's logs. Every problem the server notices is now kept here, one row per kind of
-- problem (same source and same key = same row, counted), and api/ops.js cron-alerts tells the owner within about ten
-- minutes by email and by a pop-up on the admin's devices (Web Push), once per problem until it happens again.
-- Sources: 'api' (a request that ended in a 5xx or crashed, api/_lib/alerts.js watch()), 'email' (Resend refused or
-- unreachable after retries), 'cron' (an automatic job recorded a failure, or did not run when due), 'ai' (many failed
-- AI calls in a short time), 'stripe' (a payment event not processed).
-- Written and read only by the server; admins can read it (Admin → System and the Overview).
-- Idempotent. Ends with a verify query.

create table if not exists public.system_problems (
  id          uuid primary key default gen_random_uuid(),
  source      text not null check (source in ('api', 'email', 'cron', 'ai', 'stripe', 'other')),
  key         text not null check (length(key) between 1 and 200),
  message     text not null check (length(message) <= 500),
  detail      jsonb not null default '{}'::jsonb check (jsonb_typeof(detail) = 'object' and pg_column_size(detail) <= 4000),
  count       integer not null default 1 check (count >= 1),
  first_at    timestamptz not null default now(),
  last_at     timestamptz not null default now(),
  alerted_at  timestamptz,
  alerted_count integer not null default 0,
  constraint system_problems_one unique (source, key)
);
create index if not exists system_problems_last on public.system_problems (last_at desc);

alter table public.system_problems enable row level security;
revoke all on public.system_problems from anon, authenticated;
grant select on public.system_problems to authenticated;
drop policy if exists system_problems_admin on public.system_problems;
create policy system_problems_admin on public.system_problems for select to authenticated using (public.is_admin());

-- One call records a problem (or counts it again). Service role only.
create or replace function public.record_problem(p_source text, p_key text, p_message text, p_detail jsonb)
returns void
language sql
security definer
set search_path = public
as $$
  insert into public.system_problems as p (source, key, message, detail)
  values (p_source, left(p_key, 200), left(coalesce(p_message, ''), 500), coalesce(p_detail, '{}'::jsonb))
  on conflict (source, key) do update
    set count = p.count + 1, last_at = now(), message = excluded.message, detail = excluded.detail;
$$;
revoke all on function public.record_problem(text, text, text, jsonb) from public, anon, authenticated;
grant execute on function public.record_problem(text, text, text, jsonb) to service_role;

-- The admin console updates live when a problem is recorded (Supabase Realtime; admins only, by the policy above)
do $$ begin
  if not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'system_problems') then
    alter publication supabase_realtime add table public.system_problems;
  end if;
end $$;

-- Verify
select to_regclass('public.system_problems') is not null as problems_table,
       has_function_privilege('authenticated', 'public.record_problem(text, text, text, jsonb)', 'execute') as authenticated_can_record;
