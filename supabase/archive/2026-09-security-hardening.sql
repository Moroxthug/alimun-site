-- ============================================================
--  DO NOT RUN — superseded by migrations/202610141800_phase1_db_lockdown.sql
--  and migrations/202610142200_phase2_audit_fixes.sql.
--  Re-running it would drop the Phase 1 cohort policies (teachers could
--  insert/delete cohorts directly), lose the INSERT branches of the
--  column guards, recreate v_ai_spend_daily without security_invoker
--  and rewrite app_metadata.role from user-controlled user_metadata.
--  It was never applied as-is; Phase 1 re-issued it. (SQL-02)
--  Kept as history only. supabase/tests/run-local.sh replays it on a
--  throwaway LOCAL database to rebuild the pre-Phase-1 state; never run
--  it on the production project.
-- ============================================================

-- ============================================================
--  ALIMUN — Security hardening migration (September 2026)
--  Run in: Supabase Dashboard → SQL Editor, as one script.
--  Idempotent: safe to re-run.
--
--  Fixes (see plan doc "Phase 0"):
--   1. Admin role is read from app_metadata only (user_metadata is
--      user-writable → anyone could self-promote to admin).
--   2. Students can no longer change their own billing / tier /
--      enrollment columns; cohorts' seat counts are server-only.
--   3. Enrollment writes go through /api/enroll only: student
--      INSERT/UPDATE policies on enrollments removed, SECURITY
--      DEFINER RPCs no longer executable by clients.
--   4. RLS recursion between student_profiles ⇄ enrollments ⇄
--      cohorts eliminated with SECURITY DEFINER helper functions
--      (this is why fix-rls-student-profiles.sql had dropped the
--      teacher/admin read policies).
--   5. ai_usage table for API spend tracking (written by /api/ai).
--   6. decrement_enrollment RPC for server-side rollback.
--   7. Students may close their own attendance row (left_at).
--   8. pg_net enabled (waitlist offers call it) + app_settings.api_url.
-- ============================================================

begin;

-- ─────────────────────────────────────────────────────────────
-- 1. ROLES: app_metadata is the only trusted source
-- ─────────────────────────────────────────────────────────────
create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') = 'admin';
$$;

-- Copy the signup-chosen role (student|teacher only) into app_metadata at
-- account creation, so clients can read a claim the user cannot forge.
create or replace function public.handle_new_user_role()
returns trigger language plpgsql security definer set search_path = public as $$
declare
  r text := new.raw_user_meta_data ->> 'role';
begin
  if r is null or r not in ('student', 'teacher') then r := 'student'; end if;
  new.raw_app_meta_data := coalesce(new.raw_app_meta_data, '{}'::jsonb) || jsonb_build_object('role', r);
  return new;
end;
$$;

drop trigger if exists trg_set_app_role on auth.users;
create trigger trg_set_app_role
  before insert on auth.users
  for each row execute function public.handle_new_user_role();

-- Backfill existing accounts: student/teacher into app_metadata (never admin).
update auth.users
set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb)
  || jsonb_build_object('role', case when raw_user_meta_data ->> 'role' = 'teacher' then 'teacher' else 'student' end)
where coalesce(raw_app_meta_data ->> 'role', '') <> 'admin';

-- Strip any self-granted "admin" from user_metadata.
update auth.users
set raw_user_meta_data = raw_user_meta_data || '{"role":"student"}'::jsonb
where raw_user_meta_data ->> 'role' = 'admin'
  and coalesce(raw_app_meta_data ->> 'role', '') <> 'admin';

-- Grant the real admin. Add/replace emails as needed.
update auth.users
set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb) || '{"role":"admin"}'::jsonb
where lower(email) in ('bchysfpol@gmail.com');

-- ─────────────────────────────────────────────────────────────
-- 2. NON-RECURSIVE RLS HELPERS (SECURITY DEFINER bypasses RLS)
-- ─────────────────────────────────────────────────────────────
create or replace function public.my_student_profile_id()
returns uuid language sql stable security definer set search_path = public as $$
  select id from public.student_profiles where user_id = auth.uid() limit 1;
$$;

create or replace function public.my_teacher_profile_id()
returns uuid language sql stable security definer set search_path = public as $$
  select id from public.teacher_profiles where user_id = auth.uid() limit 1;
$$;

create or replace function public.is_enrolled_in(p_cohort_id uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.enrollments e
    join public.student_profiles sp on sp.id = e.student_id
    where e.cohort_id = p_cohort_id and e.status = 'active' and sp.user_id = auth.uid()
  );
$$;

create or replace function public.teaches_student(p_student_id uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.enrollments e
    join public.cohorts c on c.id = e.cohort_id
    join public.teacher_profiles tp on tp.id = c.teacher_id
    where e.student_id = p_student_id and tp.user_id = auth.uid()
  );
$$;

revoke all on function public.my_student_profile_id() from public;
revoke all on function public.my_teacher_profile_id() from public;
revoke all on function public.is_enrolled_in(uuid) from public;
revoke all on function public.teaches_student(uuid) from public;
grant execute on function public.my_student_profile_id() to authenticated;
grant execute on function public.my_teacher_profile_id() to authenticated;
grant execute on function public.is_enrolled_in(uuid) to authenticated;
grant execute on function public.teaches_student(uuid) to authenticated;

-- ─────────────────────────────────────────────────────────────
-- 3. STUDENT_PROFILES: policies + protected columns
-- ─────────────────────────────────────────────────────────────
do $$
declare pol record;
begin
  for pol in select policyname from pg_policies where schemaname = 'public' and tablename = 'student_profiles' loop
    execute format('drop policy if exists %I on public.student_profiles', pol.policyname);
  end loop;
end $$;

alter table public.student_profiles enable row level security;

create policy "student_profiles_select"
  on public.student_profiles for select to authenticated
  using (user_id = auth.uid() or public.is_admin() or public.teaches_student(id));

-- Students may create their own profile, but never pre-set billing/enrollment.
create policy "student_profiles_insert_own"
  on public.student_profiles for insert to authenticated
  with check (
    user_id = auth.uid()
    and stripe_customer_id is null
    and stripe_subscription_id is null
    and stripe_subscription_status is null
    and enrolled_cohort_id is null
  );

create policy "student_profiles_update"
  on public.student_profiles for update to authenticated
  using (user_id = auth.uid() or public.is_admin())
  with check (user_id = auth.uid() or public.is_admin());

create policy "student_profiles_delete_admin"
  on public.student_profiles for delete to authenticated
  using (public.is_admin());

-- Column guard: billing + enrollment fields are server/admin only.
-- auth.uid() is null for the service role and the SQL editor.
create or replace function public.guard_student_profile_columns()
returns trigger language plpgsql as $$
begin
  if auth.uid() is null or public.is_admin() then
    return new;
  end if;
  if new.user_id is distinct from old.user_id
     or new.tier is distinct from old.tier
     or new.stripe_customer_id is distinct from old.stripe_customer_id
     or new.stripe_subscription_id is distinct from old.stripe_subscription_id
     or new.stripe_subscription_status is distinct from old.stripe_subscription_status
     or new.enrolled_cohort_id is distinct from old.enrolled_cohort_id then
    raise exception 'billing and enrollment fields can only be changed by the server'
      using errcode = '42501';
  end if;
  return new;
end;
$$;

drop trigger if exists trg_guard_student_profile_columns on public.student_profiles;
create trigger trg_guard_student_profile_columns
  before update on public.student_profiles
  for each row execute function public.guard_student_profile_columns();

-- ─────────────────────────────────────────────────────────────
-- 4. COHORTS: non-recursive policies + protected columns
-- ─────────────────────────────────────────────────────────────
do $$
declare pol record;
begin
  for pol in select policyname from pg_policies where schemaname = 'public' and tablename = 'cohorts' loop
    execute format('drop policy if exists %I on public.cohorts', pol.policyname);
  end loop;
end $$;

alter table public.cohorts enable row level security;

create policy "cohorts_select"
  on public.cohorts for select to authenticated
  using (
    public.is_admin()
    or status in ('open', 'full')
    or teacher_id = public.my_teacher_profile_id()
    or public.is_enrolled_in(id)
  );

create policy "cohorts_insert"
  on public.cohorts for insert to authenticated
  with check (
    public.is_admin()
    or exists (select 1 from public.teacher_profiles tp
               where tp.id = cohorts.teacher_id and tp.user_id = auth.uid() and tp.status = 'approved')
  );

create policy "cohorts_update"
  on public.cohorts for update to authenticated
  using (public.is_admin() or teacher_id = public.my_teacher_profile_id())
  with check (public.is_admin() or teacher_id = public.my_teacher_profile_id());

create policy "cohorts_delete"
  on public.cohorts for delete to authenticated
  using (public.is_admin() or teacher_id = public.my_teacher_profile_id());

create or replace function public.guard_cohort_columns()
returns trigger language plpgsql as $$
begin
  if auth.uid() is null or public.is_admin() then
    return new;
  end if;
  if new.enrolled_count is distinct from old.enrolled_count
     or new.teacher_id is distinct from old.teacher_id
     or new.max_students is distinct from old.max_students
     or new.tier is distinct from old.tier then
    raise exception 'seat counts, capacity, tier and teacher can only be changed by the server'
      using errcode = '42501';
  end if;
  return new;
end;
$$;

drop trigger if exists trg_guard_cohort_columns on public.cohorts;
create trigger trg_guard_cohort_columns
  before update on public.cohorts
  for each row execute function public.guard_cohort_columns();

-- ─────────────────────────────────────────────────────────────
-- 5. ENROLLMENTS: read-only for clients (writes via /api/enroll)
-- ─────────────────────────────────────────────────────────────
do $$
declare pol record;
begin
  for pol in select policyname from pg_policies where schemaname = 'public' and tablename = 'enrollments' loop
    execute format('drop policy if exists %I on public.enrollments', pol.policyname);
  end loop;
end $$;

alter table public.enrollments enable row level security;

create policy "enrollments_select"
  on public.enrollments for select to authenticated
  using (
    public.is_admin()
    or student_id = public.my_student_profile_id()
    or exists (select 1 from public.cohorts c
               where c.id = enrollments.cohort_id and c.teacher_id = public.my_teacher_profile_id())
  );

create policy "enrollments_admin_write"
  on public.enrollments for all to authenticated
  using (public.is_admin()) with check (public.is_admin());

-- ─────────────────────────────────────────────────────────────
-- 6. RPCs: server-only, plus decrement for rollbacks
-- ─────────────────────────────────────────────────────────────
create or replace function public.increment_enrollment(cohort_id uuid)
returns int language plpgsql security definer set search_path = public as $$
declare new_count int;
begin
  update public.cohorts c
  set enrolled_count = c.enrolled_count + 1
  where c.id = increment_enrollment.cohort_id
    and c.enrolled_count < c.max_students
    and c.status in ('open', 'full')
  returning c.enrolled_count into new_count;
  return new_count;
end;
$$;

create or replace function public.decrement_enrollment(cohort_id uuid)
returns int language plpgsql security definer set search_path = public as $$
declare new_count int;
begin
  update public.cohorts c
  set enrolled_count = greatest(c.enrolled_count - 1, 0)
  where c.id = decrement_enrollment.cohort_id
  returning c.enrolled_count into new_count;
  return new_count;
end;
$$;

revoke all on function public.increment_enrollment(uuid) from public, anon, authenticated;
revoke all on function public.decrement_enrollment(uuid) from public, anon, authenticated;
revoke all on function public.generate_cohort_sessions(uuid) from public, anon, authenticated;
revoke all on function public.process_expired_offers() from public, anon, authenticated;
grant execute on function public.increment_enrollment(uuid) to service_role;
grant execute on function public.decrement_enrollment(uuid) to service_role;
grant execute on function public.generate_cohort_sessions(uuid) to service_role;
grant execute on function public.process_expired_offers() to service_role;

-- ─────────────────────────────────────────────────────────────
-- 7. SESSION_ATTENDANCE: students may close their own row
-- ─────────────────────────────────────────────────────────────
drop policy if exists "session_attendance_update_own" on public.session_attendance;
create policy "session_attendance_update_own"
  on public.session_attendance for update to authenticated
  using (student_id = public.my_student_profile_id())
  with check (student_id = public.my_student_profile_id());

-- ─────────────────────────────────────────────────────────────
-- 8. AI USAGE / SPEND TRACKING
-- ─────────────────────────────────────────────────────────────
create table if not exists public.ai_usage (
  id             uuid primary key default gen_random_uuid(),
  user_id        uuid not null references auth.users(id) on delete cascade,
  action         text not null,
  provider       text,
  model          text,
  input_tokens   int not null default 0,
  output_tokens  int not null default 0,
  cost_usd       numeric(10,6) not null default 0,
  latency_ms     int,
  success        boolean not null default true,
  error          text,
  created_at     timestamptz not null default now()
);

create index if not exists idx_ai_usage_user_created on public.ai_usage(user_id, created_at desc);
create index if not exists idx_ai_usage_created on public.ai_usage(created_at desc);

alter table public.ai_usage enable row level security;

drop policy if exists "ai_usage_select_own" on public.ai_usage;
create policy "ai_usage_select_own"
  on public.ai_usage for select to authenticated
  using (user_id = auth.uid() or public.is_admin());
-- No insert/update/delete policies: only the service role writes.

-- Daily spend view for the admin dashboard.
create or replace view public.v_ai_spend_daily as
  select date_trunc('day', created_at)::date as day,
         count(*)                            as calls,
         sum(input_tokens)                   as input_tokens,
         sum(output_tokens)                  as output_tokens,
         sum(cost_usd)                       as cost_usd,
         count(*) filter (where not success) as failures
  from public.ai_usage
  group by 1
  order by 1 desc;

-- ─────────────────────────────────────────────────────────────
-- 9. WAITLIST PLUMBING
-- ─────────────────────────────────────────────────────────────
do $$
begin
  create extension if not exists pg_net with schema extensions;
exception when others then
  raise notice 'pg_net not enabled (%): enable it under Database → Extensions', sqlerrm;
end $$;

insert into public.app_settings (key, value) values ('api_url', 'https://alimun.com')
on conflict (key) do update set value = excluded.value;
-- !! Then run, with your real Vercel ADMIN_SECRET:
-- update public.app_settings set value = '<ADMIN_SECRET>' where key = 'admin_secret';

-- ─────────────────────────────────────────────────────────────
-- 10. HOUSEKEEPING
-- ─────────────────────────────────────────────────────────────
-- Sessions that were never closed out (the cron now does this daily).
update public.sessions
set status = 'completed'
where status in ('scheduled', 'live')
  and scheduled_at < now() - interval '90 minutes';

-- Legacy fake room URLs written by the old cron.
update public.sessions set daily_room_url = null where daily_room_url like '%/mock-room/%';

commit;

-- ─────────────────────────────────────────────────────────────
-- VERIFY
-- ─────────────────────────────────────────────────────────────
select tablename, policyname, cmd from pg_policies
where schemaname = 'public' and tablename in ('student_profiles', 'cohorts', 'enrollments', 'ai_usage', 'session_attendance')
order by tablename, policyname;

select email, raw_app_meta_data ->> 'role' as app_role, raw_user_meta_data ->> 'role' as user_role
from auth.users order by created_at desc limit 20;
