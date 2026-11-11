-- Teacher profile guard: reset badges to an empty list, not null.
--
-- teacher_profiles.badges is NOT NULL (default '{}'), but the guard set it to null on a
-- client insert, so a teacher inserting their own profile from the browser failed with
-- 23502. Live applications go through api/admin/teacher.js with the service role (the
-- guard skips those), so nobody was affected; found by supabase/tests/rls.sql
-- ("application resets trust fields") on 11 Nov 2026.
--
-- Idempotent: create or replace with the same body apart from the one line.

create or replace function public.guard_teacher_profile_admin_fields()
returns trigger
language plpgsql
set search_path to ''
as $function$
declare
  client_cols constant text[] := array['full_name', 'bio', 'specialty', 'location', 'country', 'ui_lang', 'updated_at'];
begin
  if not public.is_client_write() then return new; end if;
  if tg_op = 'INSERT' then
    new.status             := 'pending';
    new.rating             := 0;
    new.hourly_rate        := 22;
    new.tier_level         := 'community';
    new.sessions_delivered := 0;
    new.badges             := '{}';
    new.notified_at        := null;
    new.experience_years   := least(greatest(coalesce(new.experience_years, 0), 0), 60);
    return new;
  end if;
  if (to_jsonb(new) - client_cols) is distinct from (to_jsonb(old) - client_cols) then
    raise exception 'only full_name, bio, specialty, location and country can be changed from the dashboard'
      using errcode = '42501';
  end if;
  return new;
end $function$;

-- Verify: the guard now resets badges to '{}'.
select position('new.badges             := ''{}''' in prosrc) > 0 as badges_reset_to_empty
from pg_proc where oid = 'public.guard_teacher_profile_admin_fields'::regproc;
