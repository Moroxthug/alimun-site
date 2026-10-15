-- ============================================================
--  Phase 3 — Timezone-aware teacher availability (plan §0 #17)
--
--  teacher_availability rows were bare wall-clock times ("Monday
--  09:00-13:00") with no zone, so /api/create-cohort compared a class
--  time against them as if both were in the teacher's current browser
--  zone. Each slot now records the IANA zone it was entered in.
--
--  Run in Supabase → SQL Editor (or apply_migration) BEFORE merging the
--  code that writes the column. Safe with the code already live: the
--  column has a default, and old clients that do not send it get 'UTC'
--  until they reload. Idempotent; single transaction.
--
--  What it does
--   1. teacher_availability.timezone text not null default 'UTC'.
--   2. Backfills existing rows from the teacher's most recent class
--      timezone (only rows still on the default 'UTC').
--   3. Trigger rejects anything not in pg_timezone_names (same function
--      Phase 2 put on cohorts.timezone).
-- Needs: 202610142200_phase2_audit_fixes.sql (validate_cohort_timezone).
-- ============================================================

begin;

-- 1. Column
alter table public.teacher_availability
  add column if not exists timezone text not null default 'UTC';

-- 2. Backfill from the teacher's latest cohort (rows still on 'UTC' only)
update public.teacher_availability ta
set timezone = coalesce((
  select co.timezone from public.cohorts co
  where co.teacher_id = ta.teacher_id and co.timezone is not null and co.timezone <> 'UTC'
  order by co.created_at desc limit 1
), 'UTC')
where ta.timezone = 'UTC';

-- 3. Validation: reuse the Phase 2 cohort check (pg_timezone_names lookup on
--    new.timezone; already revoked from anon/authenticated).
drop trigger if exists trg_check_availability_timezone on public.teacher_availability;
create trigger trg_check_availability_timezone
  before insert or update on public.teacher_availability
  for each row execute function public.validate_cohort_timezone();

commit;

-- ============================================================
--  Verify (expect: column present with default 'UTC'; per-teacher
--  zones; trigger listed; the bad-zone insert test reports "rejected").
-- ============================================================
select column_name, data_type, is_nullable, column_default
from information_schema.columns
where table_schema = 'public' and table_name = 'teacher_availability' and column_name = 'timezone';

select teacher_id, timezone, count(*) from public.teacher_availability group by 1, 2 order by 1;

select tgname from pg_trigger
where tgrelid = 'public.teacher_availability'::regclass and tgname = 'trg_check_availability_timezone';

do $$
declare n int;
begin
  begin
    insert into public.teacher_availability (teacher_id, day_of_week, start_time, end_time, timezone)
    select teacher_id, 1, '09:00', '10:00', 'Mars/Olympus' from public.teacher_availability limit 1;
    get diagnostics n = row_count;
    if n = 0 then raise notice 'bad-zone insert: not tested (no availability rows to copy)';
    else raise notice 'bad-zone insert: ACCEPTED (unexpected)'; end if;
    raise exception 'rollback test row';
  exception
    when sqlstate '22023' then raise notice 'bad-zone insert: rejected';
    when raise_exception then null;
  end;
end $$;
