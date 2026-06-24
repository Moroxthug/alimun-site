-- =============================================================
--  ALIMUN — Supabase Database Schema
--  Single migration file: schema.sql
--  Brand: #ceff65 green / #080808 black / Satoshi + Coolvetica
-- =============================================================

-- ─── Enable Required Extensions ────────────────────────────────
create extension if not exists "uuid-ossp";
create extension if not exists pgcrypto;

-- =============================================================
--  SECTION 1 — USER ROLES ON auth.users
--  Supabase Auth owns auth.users. The role is managed via JWT 
--  user_metadata to avoid altering auth.users directly.
-- =============================================================

-- =============================================================
--  SECTION 2 — CORE TABLES
-- =============================================================

-- ─── 2.1 teacher_profiles ──────────────────────────────────────
create table if not exists public.teacher_profiles (
  id                  uuid primary key default uuid_generate_v4(),
  user_id             uuid not null references auth.users(id) on delete cascade,
  full_name           text not null,
  languages           text[] not null default '{}',
  experience_years    int not null default 0,
  specialty           text,
  bio                 text,
  status              text not null default 'pending'
                        check (status in ('pending', 'approved', 'suspended')),
  tier_level          text not null default 'community'
                        check (tier_level in ('community', 'focused', 'intensive')),
  hourly_rate         numeric(10,2) not null default 22,
  rating              numeric(3,2) not null default 0
                        check (rating >= 0 and rating <= 5),
  sessions_delivered  int not null default 0,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now(),
  constraint uq_teacher_user unique (user_id)
);

-- ─── 2.2 cohorts ───────────────────────────────────────────────
create table if not exists public.cohorts (
  id              uuid primary key default uuid_generate_v4(),
  teacher_id      uuid not null references public.teacher_profiles(id) on delete restrict,
  language        text not null,
  level           text not null
                    check (level in ('A1','A2','B1','B2','C1','C2')),
  goal_track      text not null
                    check (goal_track in ('relocation','academic','professional','pleasure','foundations')),
  tier            text not null
                    check (tier in ('community','focused','intensive','private')),
  max_students    int not null default 20,
  description     text,
  schedule_days   text[] not null default '{}',
  schedule_time   time,
  timezone        text not null default 'UTC',
  status          text not null default 'open'
                    check (status in ('open','full','closed','completed')),
  enrolled_count  int not null default 0,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

-- ─── 2.3 student_profiles ──────────────────────────────────────
create table if not exists public.student_profiles (
  id                          uuid primary key default uuid_generate_v4(),
  user_id                     uuid not null references auth.users(id) on delete cascade,
  full_name                   text not null,
  language                    text not null,
  level                       text not null
                                check (level in ('A1','A2','B1','B2','C1','C2')),
  goal_track                  text not null
                                check (goal_track in ('relocation','academic','professional','pleasure','foundations')),
  tier                        text not null
                                check (tier in ('community','focused','intensive','private')),
  stripe_customer_id          text,
  stripe_subscription_id      text,
  stripe_subscription_status  text
                                check (stripe_subscription_status in ('active','cancelled','past_due')),
  enrolled_cohort_id          uuid references public.cohorts(id) on delete set null,
  created_at                  timestamptz not null default now(),
  updated_at                  timestamptz not null default now(),
  constraint uq_student_user unique (user_id)
);

-- ─── 2.4 enrollments ───────────────────────────────────────────
create table if not exists public.enrollments (
  id           uuid primary key default uuid_generate_v4(),
  student_id   uuid not null references public.student_profiles(id) on delete cascade,
  cohort_id    uuid not null references public.cohorts(id) on delete cascade,
  enrolled_at  timestamptz not null default now(),
  status       text not null default 'active'
                 check (status in ('active','cancelled')),
  cancelled_at timestamptz,
  constraint uq_enrollment unique (student_id, cohort_id)
);

-- ─── 2.5 sessions ──────────────────────────────────────────────
create table if not exists public.sessions (
  id               uuid primary key default uuid_generate_v4(),
  cohort_id        uuid not null references public.cohorts(id) on delete cascade,
  scheduled_at     timestamptz not null,
  daily_room_url   text,
  status           text not null default 'scheduled'
                     check (status in ('scheduled','live','completed','cancelled')),
  created_at       timestamptz not null default now()
);

-- ─── 2.6 session_notes ─────────────────────────────────────────
create table if not exists public.session_notes (
  id             uuid primary key default uuid_generate_v4(),
  session_id     uuid not null references public.sessions(id) on delete cascade,
  vocabulary     jsonb not null default '[]'::jsonb,
  grammar_focus  text,
  exercises      text,
  homework       text,
  due_date       date,
  teacher_note   text,
  pdf_url        text,
  published_at   timestamptz,
  created_at     timestamptz not null default now(),
  constraint uq_session_notes unique (session_id)
);

-- ─── 2.7 session_attendance ────────────────────────────────────
create table if not exists public.session_attendance (
  id                uuid primary key default uuid_generate_v4(),
  session_id        uuid not null references public.sessions(id) on delete cascade,
  student_id        uuid not null references public.student_profiles(id) on delete cascade,
  joined_at         timestamptz,
  left_at           timestamptz,
  duration_minutes  int,
  constraint uq_attendance unique (session_id, student_id)
);

-- ─── 2.8 cohort_waitlist ───────────────────────────────────────
create table if not exists public.cohort_waitlist (
  id          uuid primary key default uuid_generate_v4(),
  cohort_id   uuid not null references public.cohorts(id) on delete cascade,
  student_id  uuid not null references public.student_profiles(id) on delete cascade,
  added_at    timestamptz not null default now(),
  constraint uq_waitlist unique (cohort_id, student_id)
);

-- ─── 2.9 teacher_payouts ───────────────────────────────────────
create table if not exists public.teacher_payouts (
  id              uuid primary key default uuid_generate_v4(),
  teacher_id      uuid not null references public.teacher_profiles(id) on delete cascade,
  period_start    date not null,
  period_end      date not null,
  sessions_count  int not null default 0,
  amount_eur      numeric(10,2) not null,
  status          text not null default 'pending'
                    check (status in ('pending','paid')),
  paid_at         timestamptz,
  created_at      timestamptz not null default now()
);

-- =============================================================
--  SECTION 3 — INDEXES
-- =============================================================

create index if not exists idx_enrollments_cohort_id
  on public.enrollments(cohort_id);

create index if not exists idx_enrollments_student_id
  on public.enrollments(student_id);

create index if not exists idx_sessions_cohort_scheduled
  on public.sessions(cohort_id, scheduled_at);

create index if not exists idx_session_attendance_session_id
  on public.session_attendance(session_id);

create index if not exists idx_cohort_waitlist_cohort_id
  on public.cohort_waitlist(cohort_id);

create index if not exists idx_student_profiles_user_id
  on public.student_profiles(user_id);

create index if not exists idx_teacher_profiles_user_id
  on public.teacher_profiles(user_id);

create index if not exists idx_student_profiles_cohort_id
  on public.student_profiles(enrolled_cohort_id);

create index if not exists idx_teacher_payouts_teacher_id
  on public.teacher_payouts(teacher_id);

-- =============================================================
--  SECTION 4 — TRIGGERS
-- =============================================================

-- ─── 4.1 Auto-update updated_at ────────────────────────────────
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger trg_teacher_profiles_updated
  before update on public.teacher_profiles
  for each row execute function public.set_updated_at();

create trigger trg_cohorts_updated
  before update on public.cohorts
  for each row execute function public.set_updated_at();

create trigger trg_student_profiles_updated
  before update on public.student_profiles
  for each row execute function public.set_updated_at();

-- ─── 4.2 Keep cohort.enrolled_count in sync ────────────────────
create or replace function public.sync_cohort_enrolled_count()
returns trigger language plpgsql as $$
begin
  if (TG_OP = 'INSERT' and new.status = 'active') then
    update public.cohorts
    set enrolled_count = enrolled_count + 1
    where id = new.cohort_id;

  elsif (TG_OP = 'UPDATE') then
    -- switched active to cancelled
    if (old.status = 'active' and new.status = 'cancelled') then
      update public.cohorts
      set enrolled_count = greatest(enrolled_count - 1, 0)
      where id = new.cohort_id;
    -- switched cancelled to active
    elsif (old.status = 'cancelled' and new.status = 'active') then
      update public.cohorts
      set enrolled_count = enrolled_count + 1
      where id = new.cohort_id;
    end if;

  elsif (TG_OP = 'DELETE' and old.status = 'active') then
    update public.cohorts
    set enrolled_count = greatest(enrolled_count - 1, 0)
    where id = old.cohort_id;
  end if;

  return coalesce(new, old);
end;
$$;

create trigger trg_sync_enrolled_count
  after insert or update of status or delete
  on public.enrollments
  for each row execute function public.sync_cohort_enrolled_count();

-- ─── 4.3 Auto-close cohort when full ───────────────────────────
create or replace function public.auto_close_full_cohort()
returns trigger language plpgsql as $$
begin
  if new.enrolled_count >= new.max_students and new.status = 'open' then
    new.status = 'full';
  elsif new.enrolled_count < new.max_students and new.status = 'full' then
    new.status = 'open';
  end if;
  return new;
end;
$$;

create trigger trg_auto_close_cohort
  before update of enrolled_count
  on public.cohorts
  for each row execute function public.auto_close_full_cohort();

-- =============================================================
--  SECTION 5 — ROW LEVEL SECURITY
-- =============================================================

-- Enable RLS on all tables
alter table public.student_profiles    enable row level security;
alter table public.teacher_profiles    enable row level security;
alter table public.cohorts             enable row level security;
alter table public.enrollments         enable row level security;
alter table public.sessions            enable row level security;
alter table public.session_notes       enable row level security;
alter table public.session_attendance  enable row level security;
alter table public.cohort_waitlist     enable row level security;
alter table public.teacher_payouts     enable row level security;

-- ─── Helper: is the current user an admin? ─────────────────────
create or replace function public.is_admin()
returns boolean language sql stable security definer as $$
  select coalesce(
    auth.jwt() ->> 'role',
    auth.jwt() -> 'user_metadata' ->> 'role'
  ) = 'admin';
$$;

-- =============================================================
--  5.1 STUDENT_PROFILES POLICIES
-- =============================================================
create policy "students_select_own_profile"
  on public.student_profiles for select
  using (
    public.is_admin()
    or user_id = auth.uid()
    or exists (
      select 1 from public.enrollments e
      join public.cohorts c on c.id = e.cohort_id
      join public.teacher_profiles tp on tp.id = c.teacher_id
      where e.student_id = student_profiles.id
        and tp.user_id = auth.uid()
    )
  );

create policy "students_update_own_profile"
  on public.student_profiles for update
  using (public.is_admin() or user_id = auth.uid());

create policy "students_insert_profile"
  on public.student_profiles for insert
  with check (public.is_admin() or user_id = auth.uid());

create policy "admin_delete_student_profile"
  on public.student_profiles for delete
  using (public.is_admin());

-- =============================================================
--  5.2 TEACHER_PROFILES POLICIES
-- =============================================================
create policy "teacher_profiles_select"
  on public.teacher_profiles for select
  using (
    public.is_admin()
    or user_id = auth.uid()
    or status = 'approved'
  );

create policy "teacher_profiles_update"
  on public.teacher_profiles for update
  using (public.is_admin() or user_id = auth.uid());

create policy "teacher_profiles_insert"
  on public.teacher_profiles for insert
  with check (public.is_admin() or user_id = auth.uid());

create policy "admin_delete_teacher_profile"
  on public.teacher_profiles for delete
  using (public.is_admin());

-- =============================================================
--  5.3 COHORTS POLICIES
-- =============================================================
create policy "cohorts_select"
  on public.cohorts for select
  using (
    public.is_admin()
    or status in ('open','full')
    or exists (
      select 1 from public.teacher_profiles tp
      where tp.id = cohorts.teacher_id and tp.user_id = auth.uid()
    )
    or exists (
      select 1 from public.enrollments e
      join public.student_profiles sp on sp.id = e.student_id
      where e.cohort_id = cohorts.id and sp.user_id = auth.uid()
    )
  );

create policy "cohorts_insert"
  on public.cohorts for insert
  with check (
    public.is_admin()
    or exists (
      select 1 from public.teacher_profiles tp
      where tp.id = cohorts.teacher_id and tp.user_id = auth.uid()
        and tp.status = 'approved'
    )
  );

create policy "cohorts_update"
  on public.cohorts for update
  using (
    public.is_admin()
    or exists (
      select 1 from public.teacher_profiles tp
      where tp.id = cohorts.teacher_id and tp.user_id = auth.uid()
    )
  );

create policy "cohorts_delete"
  on public.cohorts for delete
  using (
    public.is_admin()
    or exists (
      select 1 from public.teacher_profiles tp
      where tp.id = cohorts.teacher_id and tp.user_id = auth.uid()
    )
  );

-- =============================================================
--  5.4 ENROLLMENTS POLICIES
-- =============================================================
create policy "enrollments_select"
  on public.enrollments for select
  using (
    public.is_admin()
    or exists (
      select 1 from public.student_profiles sp
      where sp.id = enrollments.student_id and sp.user_id = auth.uid()
    )
    or exists (
      select 1 from public.cohorts c
      join public.teacher_profiles tp on tp.id = c.teacher_id
      where c.id = enrollments.cohort_id and tp.user_id = auth.uid()
    )
  );

create policy "enrollments_insert"
  on public.enrollments for insert
  with check (
    public.is_admin()
    or exists (
      select 1 from public.student_profiles sp
      where sp.id = enrollments.student_id and sp.user_id = auth.uid()
    )
  );

create policy "enrollments_update"
  on public.enrollments for update
  using (
    public.is_admin()
    or exists (
      select 1 from public.student_profiles sp
      where sp.id = enrollments.student_id and sp.user_id = auth.uid()
    )
  );

create policy "admin_delete_enrollment"
  on public.enrollments for delete
  using (public.is_admin());

-- =============================================================
--  5.5 SESSIONS POLICIES
-- =============================================================
create policy "sessions_select"
  on public.sessions for select
  using (
    public.is_admin()
    or exists (
      select 1 from public.cohorts c
      join public.teacher_profiles tp on tp.id = c.teacher_id
      where c.id = sessions.cohort_id and tp.user_id = auth.uid()
    )
    or exists (
      select 1 from public.enrollments e
      join public.student_profiles sp on sp.id = e.student_id
      where e.cohort_id = sessions.cohort_id
        and e.status = 'active'
        and sp.user_id = auth.uid()
    )
  );

create policy "sessions_insert"
  on public.sessions for insert
  with check (
    public.is_admin()
    or exists (
      select 1 from public.cohorts c
      join public.teacher_profiles tp on tp.id = c.teacher_id
      where c.id = sessions.cohort_id and tp.user_id = auth.uid()
    )
  );

create policy "sessions_update"
  on public.sessions for update
  using (
    public.is_admin()
    or exists (
      select 1 from public.cohorts c
      join public.teacher_profiles tp on tp.id = c.teacher_id
      where c.id = sessions.cohort_id and tp.user_id = auth.uid()
    )
  );

create policy "sessions_delete"
  on public.sessions for delete
  using (
    public.is_admin()
    or exists (
      select 1 from public.cohorts c
      join public.teacher_profiles tp on tp.id = c.teacher_id
      where c.id = sessions.cohort_id and tp.user_id = auth.uid()
    )
  );

-- =============================================================
--  5.6 SESSION_NOTES POLICIES
-- =============================================================
create policy "session_notes_select"
  on public.session_notes for select
  using (
    public.is_admin()
    or exists (
      select 1 from public.sessions s
      join public.cohorts c on c.id = s.cohort_id
      join public.teacher_profiles tp on tp.id = c.teacher_id
      where s.id = session_notes.session_id and tp.user_id = auth.uid()
    )
    or (
      published_at is not null
      and exists (
        select 1 from public.sessions s
        join public.enrollments e on e.cohort_id = s.cohort_id
        join public.student_profiles sp on sp.id = e.student_id
        where s.id = session_notes.session_id
          and e.status = 'active'
          and sp.user_id = auth.uid()
      )
    )
  );

create policy "session_notes_insert"
  on public.session_notes for insert
  with check (
    public.is_admin()
    or exists (
      select 1 from public.sessions s
      join public.cohorts c on c.id = s.cohort_id
      join public.teacher_profiles tp on tp.id = c.teacher_id
      where s.id = session_notes.session_id and tp.user_id = auth.uid()
    )
  );

create policy "session_notes_update"
  on public.session_notes for update
  using (
    public.is_admin()
    or exists (
      select 1 from public.sessions s
      join public.cohorts c on c.id = s.cohort_id
      join public.teacher_profiles tp on tp.id = c.teacher_id
      where s.id = session_notes.session_id and tp.user_id = auth.uid()
    )
  );

create policy "session_notes_delete"
  on public.session_notes for delete
  using (
    public.is_admin()
    or exists (
      select 1 from public.sessions s
      join public.cohorts c on c.id = s.cohort_id
      join public.teacher_profiles tp on tp.id = c.teacher_id
      where s.id = session_notes.session_id and tp.user_id = auth.uid()
    )
  );

-- =============================================================
--  5.7 SESSION_ATTENDANCE POLICIES
-- =============================================================
create policy "session_attendance_select"
  on public.session_attendance for select
  using (
    public.is_admin()
    or exists (
      select 1 from public.student_profiles sp
      where sp.id = session_attendance.student_id and sp.user_id = auth.uid()
    )
    or exists (
      select 1 from public.sessions s
      join public.cohorts c on c.id = s.cohort_id
      join public.teacher_profiles tp on tp.id = c.teacher_id
      where s.id = session_attendance.session_id and tp.user_id = auth.uid()
    )
  );

create policy "session_attendance_insert"
  on public.session_attendance for insert
  with check (
    public.is_admin()
    or exists (
      select 1 from public.student_profiles sp
      where sp.id = session_attendance.student_id and sp.user_id = auth.uid()
    )
    or exists (
      select 1 from public.sessions s
      join public.cohorts c on c.id = s.cohort_id
      join public.teacher_profiles tp on tp.id = c.teacher_id
      where s.id = session_attendance.session_id and tp.user_id = auth.uid()
    )
  );

create policy "session_attendance_update"
  on public.session_attendance for update
  using (
    public.is_admin()
    or exists (
      select 1 from public.sessions s
      join public.cohorts c on c.id = s.cohort_id
      join public.teacher_profiles tp on tp.id = c.teacher_id
      where s.id = session_attendance.session_id and tp.user_id = auth.uid()
    )
  );

-- =============================================================
--  5.8 COHORT_WAITLIST POLICIES
-- =============================================================
create policy "waitlist_select"
  on public.cohort_waitlist for select
  using (
    public.is_admin()
    or exists (
      select 1 from public.student_profiles sp
      where sp.id = cohort_waitlist.student_id and sp.user_id = auth.uid()
    )
    or exists (
      select 1 from public.cohorts c
      join public.teacher_profiles tp on tp.id = c.teacher_id
      where c.id = cohort_waitlist.cohort_id and tp.user_id = auth.uid()
    )
  );

create policy "waitlist_insert"
  on public.cohort_waitlist for insert
  with check (
    public.is_admin()
    or exists (
      select 1 from public.student_profiles sp
      where sp.id = cohort_waitlist.student_id and sp.user_id = auth.uid()
    )
  );

create policy "waitlist_delete"
  on public.cohort_waitlist for delete
  using (
    public.is_admin()
    or exists (
      select 1 from public.student_profiles sp
      where sp.id = cohort_waitlist.student_id and sp.user_id = auth.uid()
    )
  );

-- =============================================================
--  5.9 TEACHER_PAYOUTS POLICIES
-- =============================================================
create policy "payouts_select"
  on public.teacher_payouts for select
  using (
    public.is_admin()
    or exists (
      select 1 from public.teacher_profiles tp
      where tp.id = teacher_payouts.teacher_id and tp.user_id = auth.uid()
    )
  );

create policy "payouts_insert"
  on public.teacher_payouts for insert
  with check (public.is_admin());

create policy "payouts_update"
  on public.teacher_payouts for update
  using (public.is_admin());

create policy "payouts_delete"
  on public.teacher_payouts for delete
  using (public.is_admin());

-- =============================================================
--  SECTION 6 — UTILITY VIEWS
-- =============================================================

-- Active enrollments with student + cohort detail
create or replace view public.v_active_enrollments as
  select
    e.id          as enrollment_id,
    e.enrolled_at,
    sp.id         as student_id,
    sp.full_name  as student_name,
    sp.language,
    sp.level,
    sp.goal_track,
    sp.tier,
    c.id          as cohort_id,
    c.language    as cohort_language,
    c.level       as cohort_level,
    c.goal_track  as cohort_goal,
    c.tier        as cohort_tier,
    c.schedule_days,
    c.schedule_time,
    c.timezone,
    tp.full_name  as teacher_name
  from public.enrollments e
  join public.student_profiles sp on sp.id = e.student_id
  join public.cohorts c on c.id = e.cohort_id
  join public.teacher_profiles tp on tp.id = c.teacher_id
  where e.status = 'active';

-- Upcoming sessions with cohort and teacher info
create or replace view public.v_upcoming_sessions as
  select
    s.id             as session_id,
    s.scheduled_at,
    s.status,
    s.daily_room_url,
    c.id             as cohort_id,
    c.language,
    c.level,
    c.goal_track,
    c.tier,
    tp.id            as teacher_profile_id,
    tp.full_name     as teacher_name,
    tp.rating        as teacher_rating,
    sn.id            as notes_id,
    sn.published_at  as notes_published_at
  from public.sessions s
  join public.cohorts c on c.id = s.cohort_id
  join public.teacher_profiles tp on tp.id = c.teacher_id
  left join public.session_notes sn on sn.session_id = s.id
  where s.scheduled_at >= now()
  order by s.scheduled_at asc;

-- =============================================================
--  SECTION 7 — STORAGE BUCKETS  (reference only, configure
--              via Supabase Dashboard > Storage)
-- =============================================================
--
--  bucket: session-notes-pdfs   (private, 10 MB max per file)
--  bucket: teacher-avatars      (public,   2 MB max per file)
--  bucket: student-avatars      (public,   2 MB max per file)
--
-- =============================================================
--  END OF SCHEMA — Alimun v1.0
-- =============================================================
