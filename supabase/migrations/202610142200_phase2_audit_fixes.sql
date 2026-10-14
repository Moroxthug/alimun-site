-- ============================================================
--  Phase 2 — Audit fixes (database half)
--
--  Findings: AUTH-01/SQL-06, AUTH-03/SQL-04/STU-03, SQL-09,
--  SQL-03/TEA-02/APIO-05, AUTH-05, AUTH-16, STU-11, STU-04 (DB
--  side), SQL-07, SQL-08 (DB side), SQL-11, SQL-12, APIP-02 (DB
--  side), APIP-05.
--  See docs/audit/FINDINGS.md and docs/audit/fixes/sql.md.
--
--  NOT APPLIED. The owner runs it as ONE script in Supabase →
--  SQL Editor after the Phase 1 lockdown (202610141800). Idempotent:
--  safe to re-run. Single transaction; any error rolls it all back.
--
--  What it does
--   1. student_profiles: adds the settings/opt-in columns the
--      dashboard already writes (timezone, preferred_time_start,
--      preferred_time_end, preferred_days, waitlist_opt_in), and
--      teacher_profiles.notified_at (notify repeat guard, AUTH-05).
--   2. Check constraints (length / charset) on names, locations,
--      languages, time zones, bios, badges, experience_years, and
--      the student tier list (folds in fix-tier-constraint.sql).
--      Added NOT VALID, then validated when existing rows allow it.
--      If an existing row violates one, it stays NOT VALID (new and
--      updated rows are still checked) and a NOTICE names it; the
--      verify query (b) lists them. No data is changed.
--   3. Column guards become allow-lists:
--      - student_profiles: clients may change only full_name,
--        language, level, goal_track and the schedule preferences.
--        On INSERT the tier is forced to 'waitlist' (or kept as
--        'founding_member'); stripe_* and enrolled_cohort_id nulled.
--      - teacher_profiles: clients may change only full_name, bio,
--        specialty and location. On INSERT status/rating/rate/tier
--        are reset, sessions_delivered = 0, badges = null,
--        experience_years clamped to 0..60.
--      - sessions: clients may change only status.
--      - session_attendance: students may change only left_at.
--      - time zones (student_profiles, cohorts) must be real IANA
--        names (pg_timezone_names), for every writer.
--   4. RLS helpers my_teacher_profile_id / teaches_cohort /
--      teaches_student / teaches_session require teacher status
--      'approved'. New my_own_teacher_profile_id() (any status) keeps
--      a suspended teacher's own payouts visible.
--   5. Policies: teacher_profiles INSERT needs app role teacher;
--      waitlist INSERT needs an active subscription, an open/full
--      cohort and the same language; payouts read via the any-status
--      helper; uploaders may delete their own classroom files.
--   6. sync_teacher_rating recomputes both teachers when a review
--      moves; session-notes-pdfs bucket gets a MIME allow-list.
--   7. Unique index on session_credits(stripe_session_id) and a
--      one-active-enrollment-per-student partial index. Skipped with
--      a NOTICE if existing rows are duplicates (nothing deleted).
--   8. Waitlist pg_net calls send app_settings.waitlist_webhook_secret
--      (falls back to admin_secret until the owner adds it).
--
--  Does NOT delete or modify user data.
-- ============================================================

begin;

-- ─────────────────────────────────────────────────────────────
-- 1. COLUMNS THE DASHBOARD ALREADY WRITES (STU-11)
-- ─────────────────────────────────────────────────────────────
alter table public.student_profiles add column if not exists timezone             text;
alter table public.student_profiles add column if not exists preferred_time_start time;
alter table public.student_profiles add column if not exists preferred_time_end   time;
alter table public.student_profiles add column if not exists preferred_days       int[];
alter table public.student_profiles add column if not exists waitlist_opt_in      boolean not null default false;

-- Durable repeat guard for /api/admin/teacher?action=notify (AUTH-05, APIO-10).
-- Written by the API (service role) only; the column guard below keeps clients out.
alter table public.teacher_profiles add column if not exists notified_at timestamptz;

-- ─────────────────────────────────────────────────────────────
-- 2. CHECK CONSTRAINTS
-- ─────────────────────────────────────────────────────────────
-- Student tier list (AUTH-16): replace any older tier check that does
-- not know 'waitlist' / 'founding_member'.
do $$
declare r record;
begin
  for r in
    select conname, pg_get_constraintdef(oid) as def
    from pg_constraint
    where conrelid = 'public.student_profiles'::regclass and contype = 'c'
      and pg_get_constraintdef(oid) ilike '%tier%'
  loop
    if r.conname <> 'student_profiles_tier_check' or r.def not ilike '%founding_member%' then
      execute format('alter table public.student_profiles drop constraint %I', r.conname);
    end if;
  end loop;
end $$;

do $$
declare c record;
begin
  for c in select * from (values
    ('student_profiles', 'student_profiles_tier_check',
     $x$tier in ('community', 'focused', 'intensive', 'onetoone', 'private', 'daily', 'waitlist', 'founding_member')$x$),
    ('student_profiles', 'student_profiles_full_name_chk',
     $x$char_length(btrim(full_name)) between 1 and 100 and full_name !~ '[<>[:cntrl:]]'$x$),
    ('student_profiles', 'student_profiles_language_chk',
     $x$language ~ '^[[:alpha:]][[:alpha:] ()''-]{0,39}$'$x$),
    ('student_profiles', 'student_profiles_timezone_chk',
     $x$timezone is null or timezone ~ '^[A-Za-z0-9_+/-]{1,64}$'$x$),
    ('student_profiles', 'student_profiles_preferred_days_chk',
     $x$preferred_days is null or (preferred_days <@ array[0, 1, 2, 3, 4, 5, 6] and cardinality(preferred_days) <= 7)$x$),
    ('teacher_profiles', 'teacher_profiles_full_name_chk',
     $x$char_length(btrim(full_name)) between 1 and 100 and full_name !~ '[<>[:cntrl:]]'$x$),
    ('teacher_profiles', 'teacher_profiles_location_chk',
     $x$location is null or (char_length(location) <= 100 and location !~ '[<>[:cntrl:]]')$x$),
    ('teacher_profiles', 'teacher_profiles_specialty_chk',
     $x$specialty is null or (char_length(specialty) <= 200 and specialty !~ '[<>[:cntrl:]]')$x$),
    ('teacher_profiles', 'teacher_profiles_bio_chk',
     $x$bio is null or char_length(bio) <= 3000$x$),
    ('teacher_profiles', 'teacher_profiles_languages_chk',
     $x$cardinality(languages) <= 10 and array_to_string(languages, ',') !~ '[<>[:cntrl:]]'$x$),
    ('teacher_profiles', 'teacher_profiles_badges_chk',
     $x$badges is null or (cardinality(badges) <= 10 and array_to_string(badges, ',') !~ '[<>[:cntrl:]]')$x$),
    ('teacher_profiles', 'teacher_profiles_experience_years_chk',
     $x$experience_years between 0 and 60$x$),
    ('cohorts', 'cohorts_language_chk',
     $x$language ~ '^[[:alpha:]][[:alpha:] ()''-]{0,39}$'$x$),
    ('cohorts', 'cohorts_timezone_chk',
     $x$timezone ~ '^[A-Za-z0-9_+/-]{1,64}$'$x$),
    ('cohorts', 'cohorts_description_chk',
     $x$description is null or char_length(description) <= 2000$x$)
  ) v(tbl, name, expr)
  loop
    if not exists (select 1 from pg_constraint
                   where conrelid = format('public.%I', c.tbl)::regclass and conname = c.name) then
      execute format('alter table public.%I add constraint %I check (%s) not valid', c.tbl, c.name, c.expr);
    end if;
    if exists (select 1 from pg_constraint
               where conrelid = format('public.%I', c.tbl)::regclass and conname = c.name and not convalidated) then
      begin
        execute format('alter table public.%I validate constraint %I', c.tbl, c.name);
      exception when check_violation then
        raise notice '% left NOT VALID: existing rows violate it (new and updated rows are still checked)', c.name;
      end;
    end if;
  end loop;
end $$;

-- ─────────────────────────────────────────────────────────────
-- 3. COLUMN GUARDS (allow-lists)
-- ─────────────────────────────────────────────────────────────
-- student_profiles (AUTH-01, SQL-06, SQL-09)
create or replace function public.guard_student_profile_columns()
returns trigger language plpgsql set search_path = '' as $$
declare
  client_cols constant text[] := array[
    'full_name', 'language', 'level', 'goal_track', 'timezone',
    'preferred_time_start', 'preferred_time_end', 'preferred_days',
    'waitlist_opt_in', 'updated_at'];
begin
  -- Any writer: the time zone must be a real IANA name.
  if new.timezone is not null
     and (tg_op = 'INSERT' or new.timezone is distinct from old.timezone)
     and not exists (select 1 from pg_catalog.pg_timezone_names z where z.name = new.timezone) then
    raise exception 'unknown time zone' using errcode = '22023';
  end if;

  if not public.is_client_write() then return new; end if;

  if tg_op = 'INSERT' then
    -- Paid tiers, billing and enrollment are set by the server only.
    new.stripe_customer_id := null;
    new.stripe_subscription_id := null;
    new.stripe_subscription_status := null;
    new.enrolled_cohort_id := null;
    if new.tier is distinct from 'founding_member' then
      new.tier := 'waitlist';
    end if;
    return new;
  end if;

  if (to_jsonb(new) - client_cols) is distinct from (to_jsonb(old) - client_cols) then
    raise exception 'only name, language, level, goal and schedule preferences can be changed from the dashboard'
      using errcode = '42501';
  end if;
  return new;
end;
$$;

drop trigger if exists trg_guard_student_profile_columns on public.student_profiles;
create trigger trg_guard_student_profile_columns
  before insert or update on public.student_profiles
  for each row execute function public.guard_student_profile_columns();

-- teacher_profiles (AUTH-03, SQL-04, STU-03, SQL-09)
create or replace function public.guard_teacher_profile_admin_fields()
returns trigger language plpgsql set search_path = '' as $$
declare
  client_cols constant text[] := array['full_name', 'bio', 'specialty', 'location', 'updated_at'];
begin
  -- Admin JWTs, the service role (API routes) and direct SQL may change anything.
  if not public.is_client_write() then return new; end if;

  if tg_op = 'INSERT' then
    -- Only an admin decides these; trust fields start empty.
    new.status             := 'pending';
    new.rating             := 0;
    new.hourly_rate        := 22;
    new.tier_level         := 'community';
    new.sessions_delivered := 0;
    new.badges             := null;
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
$$;

drop trigger if exists trg_guard_teacher_profile_admin_fields on public.teacher_profiles;
create trigger trg_guard_teacher_profile_admin_fields
  before insert or update on public.teacher_profiles
  for each row execute function public.guard_teacher_profile_admin_fields();

-- sessions: a teacher may only change status (SQL-09).
create or replace function public.guard_session_columns()
returns trigger language plpgsql set search_path = '' as $$
declare
  client_cols constant text[] := array['status', 'updated_at'];
begin
  if not public.is_client_write() then return new; end if;
  if (to_jsonb(new) - client_cols) is distinct from (to_jsonb(old) - client_cols) then
    raise exception 'only status can be changed from the dashboard' using errcode = '42501';
  end if;
  return new;
end;
$$;

drop trigger if exists trg_guard_session_columns on public.sessions;
create trigger trg_guard_session_columns
  before update on public.sessions
  for each row execute function public.guard_session_columns();

-- session_attendance: a student may only close their own row (SQL-09).
create or replace function public.guard_attendance_columns()
returns trigger language plpgsql set search_path = '' as $$
begin
  if not public.is_client_write() or public.teaches_session(old.session_id) then return new; end if;
  if (to_jsonb(new) - 'left_at') is distinct from (to_jsonb(old) - 'left_at') then
    raise exception 'students may only set left_at' using errcode = '42501';
  end if;
  return new;
end;
$$;

drop trigger if exists trg_guard_attendance_columns on public.session_attendance;
create trigger trg_guard_attendance_columns
  before update on public.session_attendance
  for each row execute function public.guard_attendance_columns();

-- cohorts: the time zone must be a real IANA name (STU-04, any writer).
create or replace function public.validate_cohort_timezone()
returns trigger language plpgsql set search_path = '' as $$
begin
  if (tg_op = 'INSERT' or new.timezone is distinct from old.timezone)
     and not exists (select 1 from pg_catalog.pg_timezone_names z where z.name = new.timezone) then
    raise exception 'unknown time zone' using errcode = '22023';
  end if;
  return new;
end;
$$;

drop trigger if exists trg_validate_cohort_timezone on public.cohorts;
create trigger trg_validate_cohort_timezone
  before insert or update on public.cohorts
  for each row execute function public.validate_cohort_timezone();

-- ─────────────────────────────────────────────────────────────
-- 4. RLS HELPERS: only approved teachers act as teachers
--    (SQL-03, TEA-02, APIO-05)
-- ─────────────────────────────────────────────────────────────
create or replace function public.my_teacher_profile_id()
returns uuid language sql stable security definer set search_path = '' as $$
  select id from public.teacher_profiles
  where user_id = auth.uid() and status = 'approved' limit 1;
$$;

-- Any status: a pending or suspended teacher still sees their own payouts.
create or replace function public.my_own_teacher_profile_id()
returns uuid language sql stable security definer set search_path = '' as $$
  select id from public.teacher_profiles where user_id = auth.uid() limit 1;
$$;

create or replace function public.teaches_cohort(p_cohort_id uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (
    select 1 from public.cohorts c
    join public.teacher_profiles tp on tp.id = c.teacher_id
    where c.id = p_cohort_id and tp.user_id = auth.uid() and tp.status = 'approved'
  );
$$;

create or replace function public.teaches_student(p_student_id uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (
    select 1 from public.enrollments e
    join public.cohorts c on c.id = e.cohort_id
    join public.teacher_profiles tp on tp.id = c.teacher_id
    where e.student_id = p_student_id and e.status = 'active'
      and tp.user_id = auth.uid() and tp.status = 'approved'
  );
$$;

create or replace function public.teaches_session(p_session_id uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (
    select 1 from public.sessions s
    join public.cohorts c on c.id = s.cohort_id
    join public.teacher_profiles tp on tp.id = c.teacher_id
    where s.id = p_session_id and tp.user_id = auth.uid() and tp.status = 'approved'
  );
$$;

-- Waitlist eligibility (SQL-07): active subscription, cohort open or
-- full (not closed/completed), same language as the student.
create or replace function public.can_join_waitlist(p_cohort_id uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (
    select 1
    from public.student_profiles sp
    join public.cohorts c on c.id = p_cohort_id
    where sp.user_id = auth.uid()
      and sp.stripe_subscription_status = 'active'
      and c.status in ('open', 'full')
      and lower(c.language) = lower(sp.language)
  );
$$;

revoke execute on function public.my_own_teacher_profile_id() from public, anon;
revoke execute on function public.can_join_waitlist(uuid)     from public, anon;
grant execute on function public.my_own_teacher_profile_id()  to authenticated, service_role;
grant execute on function public.can_join_waitlist(uuid)      to authenticated, service_role;
revoke execute on function public.validate_cohort_timezone()  from public, anon, authenticated;

-- ─────────────────────────────────────────────────────────────
-- 5. POLICIES
-- ─────────────────────────────────────────────────────────────
-- Only accounts whose server-set role is teacher may apply (AUTH-05).
drop policy if exists teacher_profiles_insert on public.teacher_profiles;
create policy teacher_profiles_insert on public.teacher_profiles for insert to authenticated
  with check (public.is_admin()
              or (user_id = (select auth.uid())
                  and coalesce((select auth.jwt()) -> 'app_metadata' ->> 'role', '') = 'teacher'));

drop policy if exists payouts_select on public.teacher_payouts;
create policy payouts_select on public.teacher_payouts for select to authenticated
  using (public.is_admin() or teacher_id = public.my_own_teacher_profile_id());

drop policy if exists waitlist_insert on public.cohort_waitlist;
create policy waitlist_insert on public.cohort_waitlist for insert to authenticated
  with check (public.is_admin()
              or (student_id = public.my_student_profile_id() and public.can_join_waitlist(cohort_id)));

-- Uploaders may delete their own classroom files (SQL-12).
drop policy if exists session_files_owner_delete on storage.objects;
create policy session_files_owner_delete on storage.objects for delete to authenticated
  using (bucket_id = 'session-notes-pdfs'
         and (storage.foldername(name))[1] = 'shared'
         and owner = (select auth.uid())
         and public.can_use_session_files((storage.foldername(name))[2]));

-- ─────────────────────────────────────────────────────────────
-- 6. RATING SYNC + STORAGE TYPES
-- ─────────────────────────────────────────────────────────────
-- SQL-11: when a review moves to another teacher, recompute both.
create or replace function public.sync_teacher_rating()
returns trigger language plpgsql security definer set search_path = '' as $$
declare
  t uuid;
begin
  for t in
    select distinct x from unnest(array[
      case when tg_op <> 'INSERT' then old.teacher_id end,
      case when tg_op <> 'DELETE' then new.teacher_id end
    ]) as x
    where x is not null
  loop
    update public.teacher_profiles tp
    set rating = coalesce((
      select round(avg(r.rating)::numeric, 2)
      from public.teacher_reviews r
      where r.teacher_id = t
    ), 0)
    where tp.id = t;
  end loop;
  return coalesce(new, old);
end;
$$;

revoke execute on function public.sync_teacher_rating() from public, anon, authenticated;

drop trigger if exists trg_sync_teacher_rating on public.teacher_reviews;
create trigger trg_sync_teacher_rating
  after insert or update or delete on public.teacher_reviews
  for each row execute function public.sync_teacher_rating();

-- SQL-12: classroom files are documents, images and audio; no HTML/SVG.
update storage.buckets
set allowed_mime_types = array[
  'application/pdf',
  'image/png', 'image/jpeg', 'image/webp', 'image/gif',
  'text/plain',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'audio/mpeg', 'audio/mp4', 'audio/x-m4a', 'audio/wav', 'audio/webm', 'audio/ogg'
]
where id = 'session-notes-pdfs';

-- ─────────────────────────────────────────────────────────────
-- 7. UNIQUE INDEXES (APIP-02, APIP-05)
-- ─────────────────────────────────────────────────────────────
do $$
begin
  -- One credit row per Checkout session. A plain unique index (NULLs never
  -- collide) so the webhook can use upsert onConflict 'stripe_session_id'.
  if to_regclass('public.uq_session_credits_stripe_session_id') is null then
    if exists (select 1 from public.session_credits where stripe_session_id is not null
               group by stripe_session_id having count(*) > 1) then
      raise notice 'uq_session_credits_stripe_session_id NOT created: duplicate stripe_session_id rows exist (see verify query (e))';
    else
      create unique index uq_session_credits_stripe_session_id
        on public.session_credits (stripe_session_id);
    end if;
  end if;

  -- At most one active enrollment per student.
  if to_regclass('public.uq_enrollments_one_active_per_student') is null then
    if exists (select 1 from public.enrollments where status = 'active'
               group by student_id having count(*) > 1) then
      raise notice 'uq_enrollments_one_active_per_student NOT created: a student has several active enrollments (see verify query (e))';
    else
      create unique index uq_enrollments_one_active_per_student
        on public.enrollments (student_id) where status = 'active';
    end if;
  end if;
end $$;

-- ─────────────────────────────────────────────────────────────
-- 8. WAITLIST WEBHOOK SECRET (SQL-08, APIO-09)
--    The pg_net calls to /api/waitlist/send-offer now send
--    app_settings.waitlist_webhook_secret (= Vercel
--    WAITLIST_WEBHOOK_SECRET), falling back to admin_secret until the
--    owner has added it. Bodies otherwise match waitlist-fill-system.sql,
--    with search_path pinned. Owner steps after applying: see verify (g).
-- ─────────────────────────────────────────────────────────────
create or replace function public.process_opened_spot()
returns trigger language plpgsql set search_path = '' as $$
declare
  next_waitlist_id uuid;
  next_student_id uuid;
  api_url_setting text;
  hook_secret text;
begin
  -- A spot opens: enrolled_count goes down and is below capacity.
  if new.enrolled_count < old.enrolled_count and new.enrolled_count < new.max_students then
    select w.id, w.student_id
    into next_waitlist_id, next_student_id
    from public.cohort_waitlist w
    where w.cohort_id = new.id and w.offered_at is null
    order by w.added_at asc
    limit 1;

    if next_waitlist_id is not null then
      update public.cohort_waitlist
      set offered_at = now(),
          offer_expires_at = now() + interval '48 hours'
      where id = next_waitlist_id;

      select value into api_url_setting from public.app_settings where key = 'api_url';
      select coalesce(
               (select value from public.app_settings where key = 'waitlist_webhook_secret'),
               (select value from public.app_settings where key = 'admin_secret'))
        into hook_secret;

      perform net.http_post(
        url := coalesce(api_url_setting, 'https://alimun.com') || '/api/waitlist/send-offer',
        headers := jsonb_build_object(
          'Content-Type', 'application/json',
          'Authorization', 'Bearer ' || coalesce(hook_secret, '')
        ),
        body := jsonb_build_object(
          'waitlist_id', next_waitlist_id,
          'cohort_id', new.id,
          'student_id', next_student_id
        )
      );
    end if;
  end if;
  return new;
end;
$$;

create or replace function public.process_expired_offers()
returns jsonb language plpgsql security definer set search_path = '' as $$
declare
  expired_rec record;
  next_waitlist_id uuid;
  next_student_id uuid;
  current_enrolled_count int;
  current_max_students int;
  cohort_status text;
  api_url_setting text;
  hook_secret text;
  processed_count int := 0;
begin
  select value into api_url_setting from public.app_settings where key = 'api_url';
  select coalesce(
           (select value from public.app_settings where key = 'waitlist_webhook_secret'),
           (select value from public.app_settings where key = 'admin_secret'))
    into hook_secret;

  for expired_rec in
    select w.id, w.cohort_id, w.student_id
    from public.cohort_waitlist w
    where w.offer_expires_at < now()
  loop
    delete from public.cohort_waitlist where id = expired_rec.id;
    processed_count := processed_count + 1;

    select c.enrolled_count, c.max_students, c.status
    into current_enrolled_count, current_max_students, cohort_status
    from public.cohorts c
    where c.id = expired_rec.cohort_id;

    if current_enrolled_count < current_max_students then
      select w.id, w.student_id
      into next_waitlist_id, next_student_id
      from public.cohort_waitlist w
      where w.cohort_id = expired_rec.cohort_id and w.offered_at is null
      order by w.added_at asc
      limit 1;

      if next_waitlist_id is not null then
        update public.cohort_waitlist
        set offered_at = now(),
            offer_expires_at = now() + interval '48 hours'
        where id = next_waitlist_id;

        perform net.http_post(
          url := coalesce(api_url_setting, 'https://alimun.com') || '/api/waitlist/send-offer',
          headers := jsonb_build_object(
            'Content-Type', 'application/json',
            'Authorization', 'Bearer ' || coalesce(hook_secret, '')
          ),
          body := jsonb_build_object(
            'waitlist_id', next_waitlist_id,
            'cohort_id', expired_rec.cohort_id,
            'student_id', next_student_id
          )
        );
      elsif cohort_status = 'full' then
        -- No one left on the waitlist: reopen the cohort.
        update public.cohorts set status = 'open' where id = expired_rec.cohort_id;
      end if;
    end if;
  end loop;

  return jsonb_build_object('expired_offers_removed', processed_count);
end;
$$;

-- Server RPC / trigger only (same grants as Phase 1).
revoke execute on function public.process_opened_spot()    from public, anon, authenticated;
revoke execute on function public.process_expired_offers() from public, anon, authenticated;
grant execute on function public.process_expired_offers()  to service_role;

-- PostgREST: pick up the new student_profiles columns.
notify pgrst, 'reload schema';

commit;

-- ─────────────────────────────────────────────────────────────
-- VERIFY (read-only)
-- ─────────────────────────────────────────────────────────────
-- a) Helpers require approved teachers (expect true x4)
select p.proname, pg_get_functiondef(p.oid) ilike '%status = ''approved''%' as requires_approved
from pg_proc p join pg_namespace n on n.oid = p.pronamespace
where n.nspname = 'public'
  and p.proname in ('my_teacher_profile_id', 'teaches_cohort', 'teaches_student', 'teaches_session')
order by 1;

-- b) New check constraints (validated = false means existing rows violate it)
select conrelid::regclass as table_name, conname, convalidated as validated
from pg_constraint
where conname in ('student_profiles_tier_check', 'student_profiles_full_name_chk', 'student_profiles_language_chk',
                  'student_profiles_timezone_chk', 'student_profiles_preferred_days_chk',
                  'teacher_profiles_full_name_chk', 'teacher_profiles_location_chk', 'teacher_profiles_specialty_chk',
                  'teacher_profiles_bio_chk', 'teacher_profiles_languages_chk', 'teacher_profiles_badges_chk',
                  'teacher_profiles_experience_years_chk', 'cohorts_language_chk', 'cohorts_timezone_chk',
                  'cohorts_description_chk')
order by 1, 2;

-- c) New student_profiles columns (expect 5 rows)
select column_name, data_type from information_schema.columns
where table_schema = 'public' and table_name = 'student_profiles'
  and column_name in ('timezone', 'preferred_time_start', 'preferred_time_end', 'preferred_days', 'waitlist_opt_in')
order by 1;

-- c2) teacher_profiles.notified_at (expect 1 row)
select column_name, data_type from information_schema.columns
where table_schema = 'public' and table_name = 'teacher_profiles' and column_name = 'notified_at';

-- d) Policies changed here
select tablename, policyname, cmd from pg_policies
where policyname in ('teacher_profiles_insert', 'payouts_select', 'waitlist_insert', 'session_files_owner_delete')
order by 1, 2;

-- e) Unique indexes (expect 2 rows; if one is missing, these show the duplicates)
select indexname, indexdef from pg_indexes
where schemaname = 'public'
  and indexname in ('uq_session_credits_stripe_session_id', 'uq_enrollments_one_active_per_student');
select 'session_credits' as dup_in, stripe_session_id as key, count(*) from public.session_credits
where stripe_session_id is not null group by 2 having count(*) > 1
union all
select 'enrollments (active)', student_id::text, count(*) from public.enrollments
where status = 'active' group by 2 having count(*) > 1;

-- f) Bucket MIME allow-list
select id, allowed_mime_types from storage.buckets where id = 'session-notes-pdfs';

-- g) Waitlist webhook secret. Expect waitlist_webhook_secret = set.
--    Owner steps (not done by this file):
--      1. Generate a new random value; put it in Vercel as
--         WAITLIST_WEBHOOK_SECRET and run:
--         insert into public.app_settings (key, value) values ('waitlist_webhook_secret', '<value>')
--         on conflict (key) do update set value = excluded.value;
--      2. Redeploy, check a waitlist offer still sends, then
--         delete from public.app_settings where key = 'admin_secret';
--         and rotate ADMIN_SECRET in Vercel.
select key, case when value in ('secret123', '') then 'DEFAULT — CHANGE IT'
                 else 'set (' || length(value) || ' chars)' end as value
from public.app_settings where key in ('waitlist_webhook_secret', 'admin_secret') order by key;
