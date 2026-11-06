-- Teacher applications from signup/welcome have failed since 14 Oct 2026.
-- guard_teacher_profile_admin_fields() (202610142200_phase2_audit_fixes.sql)
-- resets new.badges to NULL on client inserts, but teacher_profiles.badges is
-- NOT NULL DEFAULT '{}', so every self-application insert raised 23502 and the
-- applicant saw the error screen on welcome.html. No row meant nothing in the
-- admin "Waiting for review" list and no admin notification email.
-- Fix: reset badges to an empty array instead. Idempotent (create or replace).

create or replace function public.guard_teacher_profile_admin_fields()
 returns trigger
 language plpgsql
 set search_path to ''
as $function$
declare
  client_cols constant text[] := array['full_name', 'bio', 'specialty', 'location', 'updated_at'];
begin
  if not public.is_client_write() then return new; end if;
  if tg_op = 'INSERT' then
    new.status             := 'pending';
    new.rating             := 0;
    new.hourly_rate        := 22;
    new.tier_level         := 'community';
    new.sessions_delivered := 0;
    new.badges             := '{}'::text[];
    new.notified_at        := null;
    new.experience_years   := least(greatest(coalesce(new.experience_years, 0), 0), 60);
    return new;
  end if;
  if (to_jsonb(new) - client_cols) is distinct from (to_jsonb(old) - client_cols) then
    raise exception 'only full_name, bio, specialty and location can be changed from the dashboard'
      using errcode = '42501';
  end if;
  return new;
end;
$function$;

-- Verify: the function no longer assigns NULL to badges.
select position('new.badges             := ''{}''::text[]' in pg_get_functiondef('public.guard_teacher_profile_admin_fields'::regproc)) > 0 as badges_fix_applied;
