-- ============================================================
--  Phase 3 — Scheduled jobs inside the database (plan item 9)
--
--  Vercel Hobby runs crons at most once a day, so an expired waitlist
--  offer could hold a seat for up to 24 extra hours and past sessions
--  stayed 'scheduled' until midnight. Both jobs are pure SQL, so they now
--  run every 15 minutes with pg_cron. The Vercel crons stay (room
--  prefetch needs the Daily API; the duplicate work is idempotent).
--
--  Every run, here and from Vercel (api/_lib/cron-log.js), is recorded
--  in public.cron_runs (admins can read it; kept 30 days), so runs can be
--  checked without access to Vercel logs.
--
--  Run in Supabase → SQL Editor. Idempotent. Nothing is deleted except
--  cron_runs rows older than 30 days.
-- Needs: 202610142200_phase2_audit_fixes.sql (process_expired_offers).
-- ============================================================

begin;

-- 1. Run log
create table if not exists public.cron_runs (
  id bigserial primary key,
  job text not null check (length(job) <= 64),
  ran_at timestamptz not null default now(),
  ok boolean not null default true,
  result jsonb
);
create index if not exists cron_runs_job_ran_at on public.cron_runs (job, ran_at desc);
alter table public.cron_runs enable row level security;
revoke all on public.cron_runs from anon, authenticated;
grant select on public.cron_runs to authenticated;
drop policy if exists cron_runs_admin_select on public.cron_runs;
create policy cron_runs_admin_select on public.cron_runs for select to authenticated
  using (public.is_admin());

-- 2. Close out sessions that are over (start + 90 min = end of the join
--    window in api/join-session.js; same rule as api/cron-create-rooms.js).
create or replace function public.complete_past_sessions()
returns integer
language plpgsql
security definer
set search_path = ''
as $$
declare n integer;
begin
  update public.sessions
  set status = 'completed'
  where status in ('scheduled', 'live')
    and scheduled_at < now() - interval '90 minutes';
  get diagnostics n = row_count;
  return n;
end;
$$;

-- 3. The 15-minute job: each step is isolated, so one failure does not
--    stop the other, and every step leaves a cron_runs row.
create or replace function public.run_lifecycle_jobs()
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare r jsonb; n integer;
begin
  begin
    r := public.process_expired_offers();
    insert into public.cron_runs (job, result) values ('db:expire-waitlist-offers', r);
  exception when others then
    insert into public.cron_runs (job, ok, result) values ('db:expire-waitlist-offers', false, jsonb_build_object('error', sqlerrm));
  end;
  begin
    n := public.complete_past_sessions();
    insert into public.cron_runs (job, result) values ('db:complete-sessions', jsonb_build_object('completed', n));
  exception when others then
    insert into public.cron_runs (job, ok, result) values ('db:complete-sessions', false, jsonb_build_object('error', sqlerrm));
  end;
  delete from public.cron_runs where ran_at < now() - interval '30 days';
end;
$$;

revoke all on function public.complete_past_sessions() from public, anon, authenticated;
revoke all on function public.run_lifecycle_jobs() from public, anon, authenticated;

commit;

-- 4. Schedule it (pg_cron). Skipped where pg_cron is not available, e.g. a
--    local test database. Re-running replaces the schedule.
do $$
begin
  if not exists (select 1 from pg_available_extensions where name = 'pg_cron') then
    raise notice 'pg_cron not available here: schedule skipped';
    return;
  end if;
  create extension if not exists pg_cron with schema pg_catalog;
  perform cron.unschedule(jobid) from cron.job where jobname = 'alimun-lifecycle';
  perform cron.schedule('alimun-lifecycle', '*/15 * * * *', 'select public.run_lifecycle_jobs()');
  raise notice 'scheduled alimun-lifecycle every 15 minutes';
end $$;

-- ============================================================
--  Verify (expect: the job listed as active every 15 minutes, the
--  cron_runs policy, and after one manual run two ok rows).
-- ============================================================
do $$
declare j record;
begin
  if to_regclass('cron.job') is null then raise notice 'pg_cron: not installed'; return; end if;
  for j in execute $q$select jobname, schedule, active from cron.job where jobname = 'alimun-lifecycle'$q$ loop
    raise notice 'pg_cron job % every "%" active=%', j.jobname, j.schedule, j.active;
  end loop;
end $$;

select policyname, cmd from pg_policies where tablename = 'cron_runs';

select public.run_lifecycle_jobs();
select job, ok, result, ran_at from public.cron_runs order by ran_at desc limit 5;
