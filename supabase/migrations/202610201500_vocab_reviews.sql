-- ============================================================
--  Vocabulary review (spaced repetition) for students.
--  One row per student and word. Words come from the vocabulary the
--  teacher adds to session notes; the student dashboard copies new
--  words in and schedules reviews: box 0..5, next review after
--  1, 3, 7, 14, 30 days; a miss sends the word back to box 0.
--  Idempotent.
-- ============================================================

create table if not exists public.vocab_reviews (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.student_profiles(id) on delete cascade,
  word text not null check (length(word) between 1 and 200),
  word_key text not null check (length(word_key) between 1 and 200),
  definition text check (length(definition) <= 500),
  example text check (length(example) <= 500),
  source_note_id uuid references public.session_notes(id) on delete set null,
  box smallint not null default 0 check (box between 0 and 5),
  due_on date not null default current_date,
  correct_count integer not null default 0,
  wrong_count integer not null default 0,
  last_reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  unique (student_id, word_key)
);

create index if not exists vocab_reviews_due on public.vocab_reviews (student_id, due_on);

alter table public.vocab_reviews enable row level security;
revoke all on public.vocab_reviews from anon;
grant select, insert, update on public.vocab_reviews to authenticated;
revoke delete, truncate, references, trigger on public.vocab_reviews from authenticated;

drop policy if exists vocab_reviews_select on public.vocab_reviews;
create policy vocab_reviews_select on public.vocab_reviews for select to authenticated
  using (public.is_admin() or student_id = public.my_student_profile_id() or public.teaches_student(student_id));
drop policy if exists vocab_reviews_insert on public.vocab_reviews;
create policy vocab_reviews_insert on public.vocab_reviews for insert to authenticated
  with check (student_id = public.my_student_profile_id());
drop policy if exists vocab_reviews_update on public.vocab_reviews;
create policy vocab_reviews_update on public.vocab_reviews for update to authenticated
  using (student_id = public.my_student_profile_id())
  with check (student_id = public.my_student_profile_id());

-- Verify
select relrowsecurity as rls_on,
  (select count(*) from pg_policies where schemaname = 'public' and tablename = 'vocab_reviews') as policies
from pg_class where oid = 'public.vocab_reviews'::regclass;
