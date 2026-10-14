-- ============================================================
--  Phase 1 — Database lockdown (reconciles 2026-09 hardening)
--
--  Re-issues supabase/2026-09-security-hardening.sql, which was
--  never applied, reconciled with what was applied on 14 Oct
--  (is_admin() on app_metadata; guard_teacher_profile_admin_fields).
--
--  Run as ONE script in Supabase → SQL Editor (or apply_migration).
--  Idempotent: safe to re-run. Runs in a single transaction; any
--  error rolls everything back.
--
--  What it does
--   1. Pre-flight: aborts if no account has app_metadata.role = admin.
--   2. Non-recursive RLS helpers (SECURITY DEFINER, search_path '').
--      Every helper answers only about the caller (auth.uid()), so
--      calling it with arbitrary IDs leaks nothing.
--   3. Signup trigger copies role (student|teacher only) into
--      app_metadata; backfills existing accounts; strips self-granted
--      "admin" from user_metadata.
--   4. Column guards: student_profiles, cohorts, sessions,
--      session_notes, session_attendance, cohort_waitlist,
--      assignment_submissions.
--   5. Replaces EVERY policy on the app tables (live state had drifted
--      from the repo), all scoped "to authenticated". anon gets none.
--      Enrollment writes: service role only (/api/enroll).
--   6. Public teacher data: view public.teachers_public (security
--      invoker) + computed relationship teacher_public(cohorts|
--      student_feedback). teacher_profiles SELECT = admin + self.
--   7. ai_usage + v_ai_spend_daily (security_invoker); the two old
--      views switched to security_invoker.
--   8. Function EXECUTE: revoked from anon/authenticated by default,
--      re-granted to authenticated only for RLS helpers. Server RPCs
--      (increment/decrement_enrollment, generate_cohort_sessions,
--      process_expired_offers) are service_role only.
--   9. Table grants: anon keeps nothing but SELECT on teachers_public;
--      authenticated loses TRUNCATE/REFERENCES/TRIGGER. Same for
--      future objects (default privileges).
--  10. search_path pinned on every remaining public function.
--  11. app_settings.api_url = https://alimun.com; private Storage
--      bucket session-notes-pdfs with policies for shared/<session>/.
--
--  Does NOT delete or modify user data (apart from auth role
--  metadata in step 3). Test data removal is a separate, manual
--  script: supabase/maintenance/remove_test_data.sql.
-- ============================================================

begin;

-- ─────────────────────────────────────────────────────────────
-- 1. PRE-FLIGHT
-- ─────────────────────────────────────────────────────────────
do $$
begin
  if not exists (select 1 from auth.users where raw_app_meta_data ->> 'role' = 'admin') then
    raise exception 'No admin in app_metadata. Run: update auth.users set raw_app_meta_data = raw_app_meta_data || ''{"role":"admin"}'' where email = ''<admin email>''; then re-run.';
  end if;
end $$;

-- teacher_profiles.location / badges exist live but are not in schema.sql;
-- make sure they exist so teachers_public can expose them.
alter table public.teacher_profiles add column if not exists location text;
alter table public.teacher_profiles add column if not exists badges text[];

-- ─────────────────────────────────────────────────────────────
-- 2. ROLE + RLS HELPERS
-- ─────────────────────────────────────────────────────────────
create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = '' as $$
  select coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') = 'admin';
$$;

create or replace function public.my_student_profile_id()
returns uuid language sql stable security definer set search_path = '' as $$
  select id from public.student_profiles where user_id = auth.uid() limit 1;
$$;

create or replace function public.my_teacher_profile_id()
returns uuid language sql stable security definer set search_path = '' as $$
  select id from public.teacher_profiles where user_id = auth.uid() limit 1;
$$;

-- Caller has an active enrollment in the cohort.
create or replace function public.is_enrolled_in(p_cohort_id uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (
    select 1 from public.enrollments e
    join public.student_profiles sp on sp.id = e.student_id
    where e.cohort_id = p_cohort_id and e.status = 'active' and sp.user_id = auth.uid()
  );
$$;

-- Caller is the teacher of the cohort.
create or replace function public.teaches_cohort(p_cohort_id uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (
    select 1 from public.cohorts c
    join public.teacher_profiles tp on tp.id = c.teacher_id
    where c.id = p_cohort_id and tp.user_id = auth.uid()
  );
$$;

-- Caller teaches a cohort the student is actively enrolled in.
create or replace function public.teaches_student(p_student_id uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (
    select 1 from public.enrollments e
    join public.cohorts c on c.id = e.cohort_id
    join public.teacher_profiles tp on tp.id = c.teacher_id
    where e.student_id = p_student_id and e.status = 'active' and tp.user_id = auth.uid()
  );
$$;

-- Caller teaches the session's cohort.
create or replace function public.teaches_session(p_session_id uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (
    select 1 from public.sessions s
    join public.cohorts c on c.id = s.cohort_id
    join public.teacher_profiles tp on tp.id = c.teacher_id
    where s.id = p_session_id and tp.user_id = auth.uid()
  );
$$;

-- Caller is actively enrolled in the session's cohort.
create or replace function public.attends_session(p_session_id uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (
    select 1 from public.sessions s
    join public.enrollments e on e.cohort_id = s.cohort_id and e.status = 'active'
    join public.student_profiles sp on sp.id = e.student_id
    where s.id = p_session_id and sp.user_id = auth.uid()
  );
$$;

-- Caller (student) has ever been enrolled with this teacher (for reviews).
create or replace function public.was_taught_by(p_teacher_id uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (
    select 1 from public.enrollments e
    join public.cohorts c on c.id = e.cohort_id
    join public.student_profiles sp on sp.id = e.student_id
    where c.teacher_id = p_teacher_id and sp.user_id = auth.uid()
  );
$$;

-- Storage helper: path segment -> session the caller may use.
create or replace function public.can_use_session_files(p_session text)
returns boolean language plpgsql stable security definer set search_path = '' as $$
begin
  if p_session is null or p_session !~* '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$' then
    return false;
  end if;
  return public.is_admin()
      or public.teaches_session(p_session::uuid)
      or public.attends_session(p_session::uuid);
end;
$$;

-- Classmates for the chat member list: names only, and only for a
-- cohort the caller is enrolled in or teaches.
create or replace function public.cohort_classmates(p_cohort_id uuid)
returns table (id uuid, full_name text, is_me boolean)
language sql stable security definer set search_path = '' as $$
  select sp.id, sp.full_name, sp.user_id = auth.uid()
  from public.enrollments e
  join public.student_profiles sp on sp.id = e.student_id
  where e.cohort_id = p_cohort_id and e.status = 'active'
    and (public.is_enrolled_in(p_cohort_id) or public.teaches_cohort(p_cohort_id) or public.is_admin())
  order by sp.full_name;
$$;

-- ─────────────────────────────────────────────────────────────
-- 3. SIGNUP ROLE → app_metadata (never admin)
-- ─────────────────────────────────────────────────────────────
create or replace function public.handle_new_user_role()
returns trigger language plpgsql security definer set search_path = '' as $$
declare
  r text := new.raw_user_meta_data ->> 'role';
begin
  if r is null or r not in ('student', 'teacher') then r := 'student'; end if;
  -- Never overwrite a role that is already set server-side.
  if coalesce(new.raw_app_meta_data ->> 'role', '') = '' then
    new.raw_app_meta_data := coalesce(new.raw_app_meta_data, '{}'::jsonb) || jsonb_build_object('role', r);
  end if;
  return new;
end;
$$;

drop trigger if exists trg_set_app_role on auth.users;
create trigger trg_set_app_role
  before insert on auth.users
  for each row execute function public.handle_new_user_role();

-- Backfill accounts with no app role (admins and existing roles untouched).
update auth.users
set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb)
  || jsonb_build_object('role', case when raw_user_meta_data ->> 'role' = 'teacher' then 'teacher' else 'student' end)
where coalesce(raw_app_meta_data ->> 'role', '') = '';

-- Strip self-granted "admin" from user_metadata of non-admins.
update auth.users
set raw_user_meta_data = raw_user_meta_data || '{"role":"student"}'::jsonb
where raw_user_meta_data ->> 'role' = 'admin'
  and coalesce(raw_app_meta_data ->> 'role', '') <> 'admin';

-- ─────────────────────────────────────────────────────────────
-- 4. COLUMN GUARDS
--    Pattern from 2026-10-14: admins, the service role (API routes)
--    and direct SQL (postgres) bypass; client roles are limited.
-- ─────────────────────────────────────────────────────────────
create or replace function public.is_client_write()
returns boolean language sql stable set search_path = '' as $$
  select current_user in ('authenticated', 'anon')
     and coalesce(auth.role(), '') <> 'service_role'
     and not public.is_admin();
$$;

-- student_profiles: billing, tier changes and enrollment are server-only.
create or replace function public.guard_student_profile_columns()
returns trigger language plpgsql set search_path = '' as $$
begin
  if not public.is_client_write() then return new; end if;
  if tg_op = 'INSERT' then
    new.stripe_customer_id := null;
    new.stripe_subscription_id := null;
    new.stripe_subscription_status := null;
    new.enrolled_cohort_id := null;
    return new;
  end if;
  if new.user_id is distinct from old.user_id
     or new.tier is distinct from old.tier
     or new.stripe_customer_id is distinct from old.stripe_customer_id
     or new.stripe_subscription_id is distinct from old.stripe_subscription_id
     or new.stripe_subscription_status is distinct from old.stripe_subscription_status
     or new.enrolled_cohort_id is distinct from old.enrolled_cohort_id then
    raise exception 'billing, tier and enrollment fields can only be changed by the server'
      using errcode = '42501';
  end if;
  return new;
end;
$$;

drop trigger if exists trg_guard_student_profile_columns on public.student_profiles;
create trigger trg_guard_student_profile_columns
  before insert or update on public.student_profiles
  for each row execute function public.guard_student_profile_columns();

-- cohorts: seat counts, capacity, tier and teacher are server-only.
create or replace function public.guard_cohort_columns()
returns trigger language plpgsql set search_path = '' as $$
begin
  if not public.is_client_write() then return new; end if;
  if tg_op = 'INSERT' then
    new.enrolled_count := 0;
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
  before insert or update on public.cohorts
  for each row execute function public.guard_cohort_columns();

-- sessions: a teacher may only change status (room URLs and times are server/admin).
create or replace function public.guard_session_columns()
returns trigger language plpgsql set search_path = '' as $$
begin
  if not public.is_client_write() then return new; end if;
  if new.cohort_id is distinct from old.cohort_id
     or new.scheduled_at is distinct from old.scheduled_at
     or new.daily_room_url is distinct from old.daily_room_url then
    raise exception 'only status can be changed from the dashboard' using errcode = '42501';
  end if;
  return new;
end;
$$;

drop trigger if exists trg_guard_session_columns on public.sessions;
create trigger trg_guard_session_columns
  before update on public.sessions
  for each row execute function public.guard_session_columns();

-- session_notes: pdf_url / published_at are set by /api/generate-notes-pdf only.
create or replace function public.guard_session_note_columns()
returns trigger language plpgsql set search_path = '' as $$
begin
  if not public.is_client_write() then return new; end if;
  if tg_op = 'INSERT' then
    new.pdf_url := null;
    new.published_at := null;
    return new;
  end if;
  if new.pdf_url is distinct from old.pdf_url
     or new.published_at is distinct from old.published_at
     or new.session_id is distinct from old.session_id then
    raise exception 'pdf_url and published_at are set by the server' using errcode = '42501';
  end if;
  return new;
end;
$$;

drop trigger if exists trg_guard_session_note_columns on public.session_notes;
create trigger trg_guard_session_note_columns
  before insert or update on public.session_notes
  for each row execute function public.guard_session_note_columns();

-- session_attendance: a student may only close their own row (left_at).
create or replace function public.guard_attendance_columns()
returns trigger language plpgsql set search_path = '' as $$
begin
  if not public.is_client_write() or public.teaches_session(old.session_id) then return new; end if;
  if new.session_id is distinct from old.session_id
     or new.student_id is distinct from old.student_id
     or new.joined_at is distinct from old.joined_at
     or new.duration_minutes is distinct from old.duration_minutes then
    raise exception 'students may only set left_at' using errcode = '42501';
  end if;
  return new;
end;
$$;

drop trigger if exists trg_guard_attendance_columns on public.session_attendance;
create trigger trg_guard_attendance_columns
  before update on public.session_attendance
  for each row execute function public.guard_attendance_columns();

-- cohort_waitlist: offers are made by the server (pg trigger / cron) only.
create or replace function public.guard_waitlist_columns()
returns trigger language plpgsql set search_path = '' as $$
begin
  if not public.is_client_write() then return new; end if;
  new.offered_at := null;
  new.offer_expires_at := null;
  new.added_at := now();
  return new;
end;
$$;

drop trigger if exists trg_guard_waitlist_columns on public.cohort_waitlist;
create trigger trg_guard_waitlist_columns
  before insert on public.cohort_waitlist
  for each row execute function public.guard_waitlist_columns();

-- assignment_submissions: students write text, teachers write grades.
create or replace function public.guard_submission_columns()
returns trigger language plpgsql set search_path = '' as $$
begin
  if not public.is_client_write() then return new; end if;
  if tg_op = 'INSERT' then
    new.status := 'pending';
    new.score := null;
    new.feedback := null;
    new.graded_at := null;
    return new;
  end if;
  if new.assignment_id is distinct from old.assignment_id
     or new.student_id is distinct from old.student_id then
    raise exception 'submission owner cannot change' using errcode = '42501';
  end if;
  if old.student_id = public.my_student_profile_id() then
    -- student editing their own pending submission
    if new.status is distinct from 'pending'
       or new.score is distinct from old.score
       or new.feedback is distinct from old.feedback
       or new.graded_at is distinct from old.graded_at then
      raise exception 'students cannot grade submissions' using errcode = '42501';
    end if;
  elsif new.submission_text is distinct from old.submission_text then
    raise exception 'teachers cannot edit submission text' using errcode = '42501';
  end if;
  return new;
end;
$$;

drop trigger if exists trg_guard_submission_columns on public.assignment_submissions;
create trigger trg_guard_submission_columns
  before insert or update on public.assignment_submissions
  for each row execute function public.guard_submission_columns();

-- ─────────────────────────────────────────────────────────────
-- 5. POLICIES — drop everything on the app tables, recreate
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

do $$
declare
  t text;
  pol record;
begin
  foreach t in array array[
    'student_profiles', 'teacher_profiles', 'cohorts', 'enrollments', 'sessions',
    'session_notes', 'session_attendance', 'cohort_waitlist', 'teacher_payouts',
    'teacher_availability', 'assignments', 'assignment_submissions', 'student_feedback',
    'teacher_reviews', 'exercise_results', 'webhook_logs', 'session_credits',
    'app_settings', 'ai_usage'
  ] loop
    execute format('alter table public.%I enable row level security', t);
    for pol in select policyname from pg_policies where schemaname = 'public' and tablename = t loop
      execute format('drop policy if exists %I on public.%I', pol.policyname, t);
    end loop;
  end loop;
end $$;

-- student_profiles
create policy student_profiles_select on public.student_profiles for select to authenticated
  using (user_id = (select auth.uid()) or public.is_admin() or public.teaches_student(id));
create policy student_profiles_insert on public.student_profiles for insert to authenticated
  with check (user_id = (select auth.uid()) or public.is_admin());
create policy student_profiles_update on public.student_profiles for update to authenticated
  using (user_id = (select auth.uid()) or public.is_admin())
  with check (user_id = (select auth.uid()) or public.is_admin());
create policy student_profiles_delete on public.student_profiles for delete to authenticated
  using (public.is_admin());

-- teacher_profiles (public fields are served by teachers_public)
create policy teacher_profiles_select on public.teacher_profiles for select to authenticated
  using (user_id = (select auth.uid()) or public.is_admin());
create policy teacher_profiles_insert on public.teacher_profiles for insert to authenticated
  with check (user_id = (select auth.uid()) or public.is_admin());
create policy teacher_profiles_update on public.teacher_profiles for update to authenticated
  using (user_id = (select auth.uid()) or public.is_admin())
  with check (user_id = (select auth.uid()) or public.is_admin());
create policy teacher_profiles_delete on public.teacher_profiles for delete to authenticated
  using (public.is_admin());

-- cohorts (teachers create cohorts through /api/create-cohort)
create policy cohorts_select on public.cohorts for select to authenticated
  using (public.is_admin() or status in ('open', 'full')
         or teacher_id = public.my_teacher_profile_id() or public.is_enrolled_in(id));
create policy cohorts_admin_write on public.cohorts for all to authenticated
  using (public.is_admin()) with check (public.is_admin());

-- enrollments (writes: /api/enroll with the service role)
create policy enrollments_select on public.enrollments for select to authenticated
  using (public.is_admin() or student_id = public.my_student_profile_id() or public.teaches_cohort(cohort_id));
create policy enrollments_admin_write on public.enrollments for all to authenticated
  using (public.is_admin()) with check (public.is_admin());

-- sessions
create policy sessions_select on public.sessions for select to authenticated
  using (public.is_admin() or public.teaches_cohort(cohort_id) or public.is_enrolled_in(cohort_id));
create policy sessions_update_teacher on public.sessions for update to authenticated
  using (public.teaches_cohort(cohort_id)) with check (public.teaches_cohort(cohort_id));
create policy sessions_admin_write on public.sessions for all to authenticated
  using (public.is_admin()) with check (public.is_admin());

-- session_notes
create policy session_notes_select on public.session_notes for select to authenticated
  using (public.is_admin() or public.teaches_session(session_id)
         or (published_at is not null and public.attends_session(session_id)));
create policy session_notes_insert on public.session_notes for insert to authenticated
  with check (public.is_admin() or public.teaches_session(session_id));
create policy session_notes_update on public.session_notes for update to authenticated
  using (public.is_admin() or public.teaches_session(session_id))
  with check (public.is_admin() or public.teaches_session(session_id));
create policy session_notes_delete on public.session_notes for delete to authenticated
  using (public.is_admin() or public.teaches_session(session_id));

-- session_attendance (rows are created by /api/join-session)
create policy session_attendance_select on public.session_attendance for select to authenticated
  using (public.is_admin() or student_id = public.my_student_profile_id() or public.teaches_session(session_id));
create policy session_attendance_insert on public.session_attendance for insert to authenticated
  with check (public.is_admin() or public.teaches_session(session_id));
create policy session_attendance_update on public.session_attendance for update to authenticated
  using (public.is_admin() or student_id = public.my_student_profile_id() or public.teaches_session(session_id))
  with check (public.is_admin() or student_id = public.my_student_profile_id() or public.teaches_session(session_id));
create policy session_attendance_delete on public.session_attendance for delete to authenticated
  using (public.is_admin());

-- cohort_waitlist
create policy waitlist_select on public.cohort_waitlist for select to authenticated
  using (public.is_admin() or student_id = public.my_student_profile_id() or public.teaches_cohort(cohort_id));
create policy waitlist_insert on public.cohort_waitlist for insert to authenticated
  with check (public.is_admin() or student_id = public.my_student_profile_id());
create policy waitlist_delete on public.cohort_waitlist for delete to authenticated
  using (public.is_admin() or student_id = public.my_student_profile_id());
create policy waitlist_update_admin on public.cohort_waitlist for update to authenticated
  using (public.is_admin()) with check (public.is_admin());

-- teacher_payouts
create policy payouts_select on public.teacher_payouts for select to authenticated
  using (public.is_admin() or teacher_id = public.my_teacher_profile_id());
create policy payouts_admin_write on public.teacher_payouts for all to authenticated
  using (public.is_admin()) with check (public.is_admin());

-- teacher_availability
create policy availability_select on public.teacher_availability for select to authenticated
  using (public.is_admin() or teacher_id = public.my_teacher_profile_id());
create policy availability_write on public.teacher_availability for all to authenticated
  using (public.is_admin() or teacher_id = public.my_teacher_profile_id())
  with check (public.is_admin() or teacher_id = public.my_teacher_profile_id());

-- assignments
create policy assignments_select on public.assignments for select to authenticated
  using (public.is_admin() or teacher_id = public.my_teacher_profile_id() or public.is_enrolled_in(cohort_id));
create policy assignments_write on public.assignments for all to authenticated
  using (public.is_admin() or (teacher_id = public.my_teacher_profile_id() and public.teaches_cohort(cohort_id)))
  with check (public.is_admin() or (teacher_id = public.my_teacher_profile_id() and public.teaches_cohort(cohort_id)));

-- assignment_submissions
create policy submissions_select on public.assignment_submissions for select to authenticated
  using (public.is_admin() or student_id = public.my_student_profile_id()
         or exists (select 1 from public.assignments a
                    where a.id = assignment_submissions.assignment_id
                      and a.teacher_id = public.my_teacher_profile_id()));
create policy submissions_insert on public.assignment_submissions for insert to authenticated
  with check (public.is_admin()
              or (student_id = public.my_student_profile_id()
                  and exists (select 1 from public.assignments a
                              where a.id = assignment_submissions.assignment_id
                                and public.is_enrolled_in(a.cohort_id))));
create policy submissions_update on public.assignment_submissions for update to authenticated
  using (public.is_admin()
         or (student_id = public.my_student_profile_id() and status = 'pending')
         or exists (select 1 from public.assignments a
                    where a.id = assignment_submissions.assignment_id
                      and a.teacher_id = public.my_teacher_profile_id()))
  with check (public.is_admin()
              or student_id = public.my_student_profile_id()
              or exists (select 1 from public.assignments a
                         where a.id = assignment_submissions.assignment_id
                           and a.teacher_id = public.my_teacher_profile_id()));
create policy submissions_delete on public.assignment_submissions for delete to authenticated
  using (public.is_admin());

-- student_feedback
create policy feedback_select on public.student_feedback for select to authenticated
  using (public.is_admin() or student_id = public.my_student_profile_id()
         or teacher_id = public.my_teacher_profile_id() or public.teaches_student(student_id));
create policy feedback_insert on public.student_feedback for insert to authenticated
  with check (public.is_admin()
              or (teacher_id = public.my_teacher_profile_id() and public.teaches_student(student_id)));
create policy feedback_delete on public.student_feedback for delete to authenticated
  using (public.is_admin() or teacher_id = public.my_teacher_profile_id());

-- teacher_reviews
create policy reviews_select on public.teacher_reviews for select to authenticated
  using (true);
create policy reviews_insert on public.teacher_reviews for insert to authenticated
  with check (public.is_admin()
              or (student_id = public.my_student_profile_id() and public.was_taught_by(teacher_id)));
create policy reviews_update on public.teacher_reviews for update to authenticated
  using (public.is_admin() or student_id = public.my_student_profile_id())
  with check (public.is_admin() or (student_id = public.my_student_profile_id() and public.was_taught_by(teacher_id)));
create policy reviews_delete on public.teacher_reviews for delete to authenticated
  using (public.is_admin());

-- exercise_results
create policy exresults_select on public.exercise_results for select to authenticated
  using (public.is_admin() or student_id = public.my_student_profile_id() or public.teaches_student(student_id));
create policy exresults_insert on public.exercise_results for insert to authenticated
  with check (public.is_admin() or student_id = public.my_student_profile_id());

-- server-side tables
create policy webhook_logs_admin on public.webhook_logs for all to authenticated
  using (public.is_admin()) with check (public.is_admin());
create policy session_credits_select on public.session_credits for select to authenticated
  using (public.is_admin() or student_id = public.my_student_profile_id());
create policy session_credits_admin_write on public.session_credits for all to authenticated
  using (public.is_admin()) with check (public.is_admin());
create policy app_settings_admin on public.app_settings for all to authenticated
  using (public.is_admin()) with check (public.is_admin());
create policy ai_usage_select on public.ai_usage for select to authenticated
  using (user_id = (select auth.uid()) or public.is_admin());
-- ai_usage: no client writes; /api/ai inserts with the service role.

-- ─────────────────────────────────────────────────────────────
-- 6. PUBLIC TEACHER DATA
-- ─────────────────────────────────────────────────────────────
create or replace function public.public_teacher_rows()
returns table (
  id uuid, full_name text, languages text[], specialty text, bio text,
  rating numeric, experience_years int, sessions_delivered int, location text, badges text[]
)
language sql stable security definer set search_path = '' as $$
  select tp.id, tp.full_name, tp.languages, tp.specialty, tp.bio,
         tp.rating, tp.experience_years, tp.sessions_delivered, tp.location, tp.badges
  from public.teacher_profiles tp
  where tp.status = 'approved';
$$;

drop view if exists public.teachers_public cascade;
create view public.teachers_public with (security_invoker = on) as
  select * from public.public_teacher_rows();

-- Computed relationships so dashboards can embed public teacher fields:
--   .from('cohorts').select('*, teacher_profiles:teacher_public(full_name)')
create or replace function public.teacher_public(public.cohorts)
returns setof public.teachers_public rows 1
language sql stable set search_path = '' as $$
  select * from public.teachers_public where id = $1.teacher_id;
$$;

create or replace function public.teacher_public(public.student_feedback)
returns setof public.teachers_public rows 1
language sql stable set search_path = '' as $$
  select * from public.teachers_public where id = $1.teacher_id;
$$;

-- ─────────────────────────────────────────────────────────────
-- 7. VIEWS
-- ─────────────────────────────────────────────────────────────
create or replace view public.v_ai_spend_daily with (security_invoker = on) as
  select date_trunc('day', created_at)::date as day,
         count(*)                            as calls,
         sum(input_tokens)                   as input_tokens,
         sum(output_tokens)                  as output_tokens,
         sum(cost_usd)                       as cost_usd,
         count(*) filter (where not success) as failures
  from public.ai_usage
  group by 1
  order by 1 desc;

do $$
begin
  if to_regclass('public.v_active_enrollments') is not null then
    execute 'alter view public.v_active_enrollments set (security_invoker = on)';
  end if;
  if to_regclass('public.v_upcoming_sessions') is not null then
    execute 'alter view public.v_upcoming_sessions set (security_invoker = on)';
  end if;
end $$;

-- ─────────────────────────────────────────────────────────────
-- 8. SERVER RPCs (bodies pinned to search_path '')
-- ─────────────────────────────────────────────────────────────
create or replace function public.increment_enrollment(cohort_id uuid)
returns int language plpgsql security definer set search_path = '' as $$
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
returns int language plpgsql security definer set search_path = '' as $$
declare new_count int;
begin
  update public.cohorts c
  set enrolled_count = greatest(c.enrolled_count - 1, 0)
  where c.id = decrement_enrollment.cohort_id
  returning c.enrolled_count into new_count;
  return new_count;
end;
$$;

-- ─────────────────────────────────────────────────────────────
-- 9. FUNCTION EXECUTE + search_path
-- ─────────────────────────────────────────────────────────────
do $$
declare
  f record;
  in_policy boolean;
  saved_path text := current_setting('search_path');
begin
  -- Empty search_path so regprocedure prints schema-qualified signatures.
  perform set_config('search_path', 'pg_catalog', true);
  for f in
    select p.oid, p.proname, p.oid::regprocedure::text as sig, p.proconfig
    from pg_proc p join pg_namespace n on n.oid = p.pronamespace
    where n.nspname = 'public' and p.prokind = 'f'
      and not exists (select 1 from pg_depend d where d.objid = p.oid and d.deptype = 'e')
  loop
    -- Pin search_path where it is still mutable (live-only functions
    -- whose bodies are not in the repo get a safe, compatible path).
    if f.proconfig is null or not exists (select 1 from unnest(f.proconfig) c where c like 'search_path=%') then
      execute format('alter function %s set search_path = pg_catalog, public, pg_temp', f.sig);
    end if;

    -- Still referenced by a policy we did not rewrite (e.g. storage)?
    select exists (
      select 1 from pg_policies pp
      where coalesce(pp.qual, '') ~ ('\m' || f.proname || '\(')
         or coalesce(pp.with_check, '') ~ ('\m' || f.proname || '\(')
    ) into in_policy;

    execute format('revoke execute on function %s from public, anon', f.sig);
    if in_policy then
      raise notice 'kept EXECUTE for authenticated on % (used by a policy)', f.sig;
    else
      execute format('revoke execute on function %s from authenticated', f.sig);
    end if;
    execute format('grant execute on function %s to service_role', f.sig);
  end loop;
  perform set_config('search_path', saved_path, true);
end $$;

-- Helpers RLS policies call as the client role.
grant execute on function public.is_admin()                     to authenticated;
grant execute on function public.my_student_profile_id()        to authenticated;
grant execute on function public.my_teacher_profile_id()        to authenticated;
grant execute on function public.is_enrolled_in(uuid)           to authenticated;
grant execute on function public.teaches_cohort(uuid)           to authenticated;
grant execute on function public.teaches_student(uuid)          to authenticated;
grant execute on function public.teaches_session(uuid)          to authenticated;
grant execute on function public.attends_session(uuid)          to authenticated;
grant execute on function public.was_taught_by(uuid)            to authenticated;
grant execute on function public.can_use_session_files(text)    to authenticated;
grant execute on function public.cohort_classmates(uuid)        to authenticated;
grant execute on function public.is_client_write()              to authenticated, anon;
grant execute on function public.public_teacher_rows()          to authenticated, anon;
grant execute on function public.teacher_public(public.cohorts)          to authenticated, anon;
grant execute on function public.teacher_public(public.student_feedback) to authenticated, anon;

-- Future functions: no implicit EXECUTE for clients.
alter default privileges in schema public revoke execute on functions from public, anon, authenticated;

-- ─────────────────────────────────────────────────────────────
-- 10. TABLE GRANTS
-- ─────────────────────────────────────────────────────────────
revoke all on all tables in schema public from anon;
revoke all on all sequences in schema public from anon;
revoke truncate, references, trigger on all tables in schema public from authenticated;
grant select on public.teachers_public to anon, authenticated;

alter default privileges in schema public revoke all on tables from anon;
alter default privileges in schema public revoke all on sequences from anon;
alter default privileges in schema public revoke truncate, references, trigger on tables from authenticated;

-- ─────────────────────────────────────────────────────────────
-- 11. SETTINGS + STORAGE
-- ─────────────────────────────────────────────────────────────
insert into public.app_settings (key, value) values ('api_url', 'https://alimun.com')
on conflict (key) do update set value = excluded.value;

do $$
begin
  create extension if not exists pg_net with schema extensions;
exception when others then
  raise notice 'pg_net not enabled (%): enable it under Database → Extensions', sqlerrm;
end $$;

insert into storage.buckets (id, name, public, file_size_limit)
values ('session-notes-pdfs', 'session-notes-pdfs', false, 10485760)
on conflict (id) do update set public = false, file_size_limit = excluded.file_size_limit;

-- Clients may read and upload classroom files under shared/<session_id>/
-- for sessions they teach or attend. Generated PDFs (cohort_<id>/...) are
-- written by the service role and handed out as signed URLs.
drop policy if exists session_files_select on storage.objects;
create policy session_files_select on storage.objects for select to authenticated
  using (bucket_id = 'session-notes-pdfs'
         and (storage.foldername(name))[1] = 'shared'
         and public.can_use_session_files((storage.foldername(name))[2]));

drop policy if exists session_files_insert on storage.objects;
create policy session_files_insert on storage.objects for insert to authenticated
  with check (bucket_id = 'session-notes-pdfs'
              and (storage.foldername(name))[1] = 'shared'
              and public.can_use_session_files((storage.foldername(name))[2]));

drop policy if exists session_files_admin on storage.objects;
create policy session_files_admin on storage.objects for all to authenticated
  using (bucket_id = 'session-notes-pdfs' and public.is_admin())
  with check (bucket_id = 'session-notes-pdfs' and public.is_admin());

-- Legacy public bucket 'session-notes' (unused by the code, empty on 14 Oct)
-- let any signed-in user upload, overwrite and delete. Make it private and
-- admin-only.
update storage.buckets set public = false where id = 'session-notes';
drop policy if exists "Allow authenticated delete to session-notes" on storage.objects;
drop policy if exists "Allow public read access to session-notes" on storage.objects;
drop policy if exists "Allow authenticated upload to session-notes" on storage.objects;
drop policy if exists "Allow authenticated update to session-notes" on storage.objects;
drop policy if exists legacy_session_notes_admin on storage.objects;
create policy legacy_session_notes_admin on storage.objects for all to authenticated
  using (bucket_id = 'session-notes' and public.is_admin())
  with check (bucket_id = 'session-notes' and public.is_admin());

-- PostgREST: pick up teachers_public, teacher_public() and cohort_classmates().
notify pgrst, 'reload schema';

commit;

-- ─────────────────────────────────────────────────────────────
-- VERIFY (read-only)
-- ─────────────────────────────────────────────────────────────
-- a) RLS on, policy count per app table (expect rls = true everywhere)
select c.relname as table_name, c.relrowsecurity as rls,
       (select count(*) from pg_policies p where p.schemaname = 'public' and p.tablename = c.relname) as policies
from pg_class c join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public' and c.relkind = 'r'
order by 1;

-- b) Anything anon still holds (expect only teachers_public SELECT)
select table_name, privilege_type from information_schema.role_table_grants
where table_schema = 'public' and grantee = 'anon' order by 1, 2;

-- c) Functions clients can execute (expect only the helper list above)
select p.oid::regprocedure as fn, p.prosecdef as definer,
       has_function_privilege('anon', p.oid, 'execute') as anon,
       has_function_privilege('authenticated', p.oid, 'execute') as authenticated
from pg_proc p join pg_namespace n on n.oid = p.pronamespace
where n.nspname = 'public'
  and (has_function_privilege('anon', p.oid, 'execute') or has_function_privilege('authenticated', p.oid, 'execute'))
order by 1;

-- d) Views (expect security_invoker=on on all)
select c.relname, c.reloptions from pg_class c join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public' and c.relkind = 'v' order by 1;

-- e) Roles and settings
select coalesce(raw_app_meta_data ->> 'role', '<none>') as app_role, count(*) from auth.users group by 1 order by 1;
select key, case when key ilike '%secret%' then
         case when value in ('secret123', '') then 'DEFAULT — CHANGE IT' else 'set (' || length(value) || ' chars)' end
       else value end as value
from public.app_settings order by key;
select id, public, file_size_limit from storage.buckets where id = 'session-notes-pdfs';
