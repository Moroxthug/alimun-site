-- ============================================================
--  DO NOT RUN — superseded by migrations/202610141800_phase1_db_lockdown.sql
--  and migrations/202610142200_phase2_audit_fixes.sql.
--  Applied on 14 Oct. Re-running it would reinstate the deny-list
--  teacher guard (trust fields writable again). (SQL-04, SQL-10)
--  Kept as history only. supabase/tests/run-local.sh replays it on a
--  throwaway LOCAL database to rebuild the pre-Phase-1 state; never run
--  it on the production project.
-- ============================================================

-- ============================================================
--  2026-10-14 — Admin role hardening
--
--  1. is_admin() trusted auth.jwt()->'user_metadata'->>'role'.
--     user_metadata is writable by the user themself
--     (supabase.auth.updateUser({ data: { role: 'admin' } })), so any
--     signed-in account could grant itself admin across every RLS
--     policy. It now reads app_metadata only (server-controlled), which
--     matches what admin.html and /api/admin/teacher already require.
--
--  2. teacher_profiles_update / _insert let a teacher write their own
--     row with no column limits, so an applicant could set
--     status = 'approved' (or change hourly_rate / tier / rating).
--     A trigger now pins those columns to admins and the service role.
--
--  Before applying: make sure your admin login has
--  raw_app_meta_data.role = 'admin', or you will lock yourself out:
--    update auth.users
--       set raw_app_meta_data = raw_app_meta_data || '{"role":"admin"}'
--     where email = '<your admin email>';
--  (sign out and back in afterwards so the JWT picks it up)
-- ============================================================

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') = 'admin';
$$;

create or replace function public.guard_teacher_profile_admin_fields()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  -- Admin JWTs, the service role (API routes) and direct SQL may change anything.
  if public.is_admin()
     or coalesce(auth.role(), '') = 'service_role'
     or current_user not in ('authenticated', 'anon') then
    return new;
  end if;

  if tg_op = 'INSERT' then
    -- column defaults; only an admin decides these
    new.status      := 'pending';
    new.rating      := 0;
    new.hourly_rate := 22;
    new.tier_level  := 'community';
    return new;
  end if;

  if new.status      is distinct from old.status
  or new.hourly_rate is distinct from old.hourly_rate
  or new.tier_level  is distinct from old.tier_level
  or new.rating      is distinct from old.rating
  or new.user_id     is distinct from old.user_id then
    raise exception 'Only admins can change status, hourly_rate, tier_level, rating or user_id'
      using errcode = '42501';
  end if;
  return new;
end;
$$;

drop trigger if exists trg_guard_teacher_profile_admin_fields on public.teacher_profiles;
create trigger trg_guard_teacher_profile_admin_fields
  before insert or update on public.teacher_profiles
  for each row execute function public.guard_teacher_profile_admin_fields();
