-- AI tutor, part 5: connected to the dashboard, and part 5b, going over a lesson (docs/AI_TUTOR_PLAN.md; owner, 26 Oct
-- 2026: "go with part 5 on a new convo"; the plan approved). Idempotent; no data is changed.
--  1. vocab_reviews.source: 'tutor' for the words a tutor session added to the flashcards (api/tutor.js finish());
--     every existing row stays null.
--  2. tutor_sessions.lesson_id: the class notes (session_notes) the student chose to go over with the tutor (part 5b).
--  3. tutor_sets: what the tutor leaves in Practice after a session ("From your tutor"): exercises in the engine's
--     format, a listening (a short text the tutor wrote, read in the tutor's voice, with questions), sentences to say
--     and a writing task. Written by the server only; the student reads their own. A set outlives its session (the
--     90-day transcript purge sets session_id to null); "Forget everything" deletes the sets too. The listening's audio
--     is kept in the private storage bucket tutor-audio (audio_path), made by the server the first time it is played.
--     Best scores are practice_progress rows tutor:<id>, tutor:<id>:listen and tutor:<id>:speak; the writing check is
--     tutor:<id>:write.

alter table public.vocab_reviews add column if not exists source text check (source is null or source = 'tutor');

alter table public.tutor_sessions add column if not exists lesson_id uuid references public.session_notes(id) on delete set null;

create table if not exists public.tutor_sets (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.student_profiles(id) on delete cascade,
  session_id uuid references public.tutor_sessions(id) on delete set null,
  title text not null check (char_length(btrim(title)) between 1 and 160),
  language text not null,
  level text,
  items jsonb not null check (jsonb_typeof(items) = 'object' and pg_column_size(items) <= 65536),
  audio_path text check (audio_path is null or char_length(audio_path) <= 200),
  created_at timestamptz not null default now()
);
create unique index if not exists tutor_sets_session on public.tutor_sets (session_id) where session_id is not null;
create index if not exists tutor_sets_student on public.tutor_sets (student_id, created_at desc);

alter table public.tutor_sets enable row level security;
drop policy if exists tutor_sets_read on public.tutor_sets;
create policy tutor_sets_read on public.tutor_sets for select to authenticated
  using (public.is_admin() or student_id = public.my_student_profile_id());
revoke all on public.tutor_sets from anon;
revoke insert, update, delete, truncate, references, trigger on public.tutor_sets from authenticated;
grant select on public.tutor_sets to authenticated;

-- Verify
select
  (select count(*) from information_schema.columns where table_schema = 'public' and table_name = 'vocab_reviews' and column_name = 'source') as source_column,
  (select count(*) from information_schema.columns where table_schema = 'public' and table_name = 'tutor_sessions' and column_name = 'lesson_id') as lesson_column,
  (select relrowsecurity from pg_class where oid = 'public.tutor_sets'::regclass) as sets_rls,
  (select count(*) from pg_policies where schemaname = 'public' and tablename = 'tutor_sets') as sets_policies,
  (select count(*) from information_schema.role_table_grants where table_schema = 'public' and table_name = 'tutor_sets' and grantee = 'authenticated' and privilege_type <> 'SELECT') as sets_writes_for_students;
