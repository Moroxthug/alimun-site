-- =============================================================
--  ALIMUN — Migration: availability, assignments, feedback, reviews
--  Creates the tables the dashboards already query but that were
--  missing from schema.sql:
--    - teacher_availability   (teacher weekly slots)
--    - assignments            (homework created by teachers)
--    - assignment_submissions (student submissions + grades)
--    - student_feedback       (teacher progress notes)
--    - teacher_reviews        (student ratings of teachers)
--  Run AFTER schema.sql.
-- =============================================================

-- ─── 1. teacher_availability ──────────────────────────────────
create table if not exists public.teacher_availability (
  id           uuid primary key default uuid_generate_v4(),
  teacher_id   uuid not null references public.teacher_profiles(id) on delete cascade,
  day_of_week  int  not null check (day_of_week between 0 and 6), -- 0 = Sunday
  start_time   time not null,
  end_time     time not null,
  created_at   timestamptz not null default now(),
  constraint uq_teacher_slot unique (teacher_id, day_of_week, start_time),
  constraint chk_slot_order check (start_time < end_time)
);

create index if not exists idx_teacher_availability_teacher
  on public.teacher_availability(teacher_id);

alter table public.teacher_availability enable row level security;

create policy "availability_select_all_authenticated"
  on public.teacher_availability for select
  using (auth.role() = 'authenticated' or public.is_admin());

create policy "availability_insert_own"
  on public.teacher_availability for insert
  with check (
    public.is_admin()
    or exists (
      select 1 from public.teacher_profiles tp
      where tp.id = teacher_availability.teacher_id and tp.user_id = auth.uid()
    )
  );

create policy "availability_update_own"
  on public.teacher_availability for update
  using (
    public.is_admin()
    or exists (
      select 1 from public.teacher_profiles tp
      where tp.id = teacher_availability.teacher_id and tp.user_id = auth.uid()
    )
  );

create policy "availability_delete_own"
  on public.teacher_availability for delete
  using (
    public.is_admin()
    or exists (
      select 1 from public.teacher_profiles tp
      where tp.id = teacher_availability.teacher_id and tp.user_id = auth.uid()
    )
  );

-- ─── 2. assignments ───────────────────────────────────────────
create table if not exists public.assignments (
  id          uuid primary key default uuid_generate_v4(),
  cohort_id   uuid not null references public.cohorts(id) on delete cascade,
  teacher_id  uuid not null references public.teacher_profiles(id) on delete cascade,
  title       text not null,
  type        text not null default 'Homework'
                check (type in ('Homework','Essay','Speaking','Grammar','Vocabulary','Writing')),
  prompt      text not null,
  due_date    date,
  min_words   int not null default 20,
  created_at  timestamptz not null default now()
);

create index if not exists idx_assignments_cohort on public.assignments(cohort_id);

alter table public.assignments enable row level security;

create policy "assignments_select"
  on public.assignments for select
  using (
    public.is_admin()
    or exists ( -- teacher owns the cohort
      select 1 from public.teacher_profiles tp
      where tp.id = assignments.teacher_id and tp.user_id = auth.uid()
    )
    or exists ( -- student actively enrolled in the cohort
      select 1 from public.enrollments e
      join public.student_profiles sp on sp.id = e.student_id
      where e.cohort_id = assignments.cohort_id
        and e.status = 'active'
        and sp.user_id = auth.uid()
    )
  );

create policy "assignments_insert_teacher"
  on public.assignments for insert
  with check (
    public.is_admin()
    or exists (
      select 1 from public.teacher_profiles tp
      join public.cohorts c on c.teacher_id = tp.id
      where tp.id = assignments.teacher_id
        and c.id = assignments.cohort_id
        and tp.user_id = auth.uid()
    )
  );

create policy "assignments_update_teacher"
  on public.assignments for update
  using (
    public.is_admin()
    or exists (
      select 1 from public.teacher_profiles tp
      where tp.id = assignments.teacher_id and tp.user_id = auth.uid()
    )
  );

create policy "assignments_delete_teacher"
  on public.assignments for delete
  using (
    public.is_admin()
    or exists (
      select 1 from public.teacher_profiles tp
      where tp.id = assignments.teacher_id and tp.user_id = auth.uid()
    )
  );

-- ─── 3. assignment_submissions ────────────────────────────────
create table if not exists public.assignment_submissions (
  id               uuid primary key default uuid_generate_v4(),
  assignment_id    uuid not null references public.assignments(id) on delete cascade,
  student_id       uuid not null references public.student_profiles(id) on delete cascade,
  submission_text  text not null,
  status           text not null default 'pending'
                     check (status in ('pending','graded')),
  score            int check (score between 0 and 100),
  feedback         text,
  submitted_at     timestamptz not null default now(),
  graded_at        timestamptz,
  constraint uq_submission unique (assignment_id, student_id)
);

create index if not exists idx_submissions_assignment
  on public.assignment_submissions(assignment_id);
create index if not exists idx_submissions_student
  on public.assignment_submissions(student_id);

alter table public.assignment_submissions enable row level security;

create policy "submissions_select"
  on public.assignment_submissions for select
  using (
    public.is_admin()
    or exists ( -- the student who submitted
      select 1 from public.student_profiles sp
      where sp.id = assignment_submissions.student_id and sp.user_id = auth.uid()
    )
    or exists ( -- teacher of the assignment's cohort
      select 1 from public.assignments a
      join public.teacher_profiles tp on tp.id = a.teacher_id
      where a.id = assignment_submissions.assignment_id and tp.user_id = auth.uid()
    )
  );

create policy "submissions_insert_student"
  on public.assignment_submissions for insert
  with check (
    public.is_admin()
    or exists (
      select 1 from public.student_profiles sp
      where sp.id = assignment_submissions.student_id and sp.user_id = auth.uid()
    )
  );

create policy "submissions_update"
  on public.assignment_submissions for update
  using (
    public.is_admin()
    or exists ( -- student can edit own submission until graded
      select 1 from public.student_profiles sp
      where sp.id = assignment_submissions.student_id
        and sp.user_id = auth.uid()
        and assignment_submissions.status = 'pending'
    )
    or exists ( -- teacher grades
      select 1 from public.assignments a
      join public.teacher_profiles tp on tp.id = a.teacher_id
      where a.id = assignment_submissions.assignment_id and tp.user_id = auth.uid()
    )
  );

-- ─── 4. student_feedback (teacher progress notes) ─────────────
create table if not exists public.student_feedback (
  id             uuid primary key default uuid_generate_v4(),
  student_id     uuid not null references public.student_profiles(id) on delete cascade,
  teacher_id     uuid not null references public.teacher_profiles(id) on delete cascade,
  feedback_text  text not null,
  session_id     uuid references public.sessions(id) on delete set null,
  created_at     timestamptz not null default now()
);

create index if not exists idx_student_feedback_student
  on public.student_feedback(student_id);

alter table public.student_feedback enable row level security;

create policy "feedback_select"
  on public.student_feedback for select
  using (
    public.is_admin()
    or exists ( -- the student it is about
      select 1 from public.student_profiles sp
      where sp.id = student_feedback.student_id and sp.user_id = auth.uid()
    )
    or exists ( -- any approved teacher who wrote it
      select 1 from public.teacher_profiles tp
      where tp.id = student_feedback.teacher_id and tp.user_id = auth.uid()
    )
  );

create policy "feedback_insert_teacher"
  on public.student_feedback for insert
  with check (
    public.is_admin()
    or exists (
      select 1 from public.teacher_profiles tp
      where tp.id = student_feedback.teacher_id and tp.user_id = auth.uid()
    )
  );

create policy "feedback_delete_teacher"
  on public.student_feedback for delete
  using (
    public.is_admin()
    or exists (
      select 1 from public.teacher_profiles tp
      where tp.id = student_feedback.teacher_id and tp.user_id = auth.uid()
    )
  );

-- ─── 5. teacher_reviews ───────────────────────────────────────
create table if not exists public.teacher_reviews (
  id          uuid primary key default uuid_generate_v4(),
  teacher_id  uuid not null references public.teacher_profiles(id) on delete cascade,
  student_id  uuid not null references public.student_profiles(id) on delete cascade,
  rating      int not null check (rating between 1 and 5),
  comment     text,
  created_at  timestamptz not null default now(),
  constraint uq_review unique (teacher_id, student_id)
);

create index if not exists idx_teacher_reviews_teacher
  on public.teacher_reviews(teacher_id);

alter table public.teacher_reviews enable row level security;

create policy "reviews_select_all_authenticated"
  on public.teacher_reviews for select
  using (auth.role() = 'authenticated' or public.is_admin());

create policy "reviews_insert_student"
  on public.teacher_reviews for insert
  with check (
    public.is_admin()
    or exists (
      select 1 from public.student_profiles sp
      where sp.id = teacher_reviews.student_id and sp.user_id = auth.uid()
    )
  );

create policy "reviews_update_student"
  on public.teacher_reviews for update
  using (
    public.is_admin()
    or exists (
      select 1 from public.student_profiles sp
      where sp.id = teacher_reviews.student_id and sp.user_id = auth.uid()
    )
  );

-- ─── 6. Keep teacher rating in sync with reviews ──────────────
create or replace function public.sync_teacher_rating()
returns trigger language plpgsql security definer as $$
begin
  update public.teacher_profiles tp
  set rating = coalesce((
    select round(avg(r.rating)::numeric, 2)
    from public.teacher_reviews r
    where r.teacher_id = coalesce(new.teacher_id, old.teacher_id)
  ), 0)
  where tp.id = coalesce(new.teacher_id, old.teacher_id);
  return coalesce(new, old);
end;
$$;

drop trigger if exists trg_sync_teacher_rating on public.teacher_reviews;
create trigger trg_sync_teacher_rating
  after insert or update or delete on public.teacher_reviews
  for each row execute function public.sync_teacher_rating();

-- =============================================================
--  END OF MIGRATION
-- =============================================================
