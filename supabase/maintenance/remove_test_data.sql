-- ============================================================
--  Phase 1 · item 7 — seed / test data in production
--
--  NOT a migration. Run by hand in Supabase → SQL Editor, one
--  step at a time, only after the owner has chosen A or B.
--
--  Targets: the seed teachers Sofía Martínez, Lukas Bauer, noaiscj,
--  Test Teacher, the July test video cohort (test-teacher@ /
--  test-student@alimun.com) and everything hanging off them.
--
--  STEP 1  preview  (read-only)  → check the list is exactly right
--  STEP 2A suspend + close       (reversible, keeps every row)
--  STEP 2B delete                (irreversible; owner's explicit yes)
-- ============================================================

-- Target teachers. Edit this list if STEP 1 shows a real person.
create temp table if not exists _test_teachers as
select tp.id as teacher_id, tp.user_id, tp.full_name, u.email
from public.teacher_profiles tp
left join auth.users u on u.id = tp.user_id
where tp.full_name in ('Sofía Martínez', 'Sofia Martinez', 'Lukas Bauer', 'Test Teacher')
   or tp.full_name ilike 'noaiscj%'
   or lower(coalesce(u.email, '')) like 'noaiscj%'
   or lower(coalesce(u.email, '')) = 'test-teacher@alimun.com';

-- ─── STEP 1: preview ───
select * from _test_teachers order by full_name;

select c.id as cohort_id, c.language, c.level, c.status, c.enrolled_count, t.full_name as teacher,
       (select count(*) from public.sessions s where s.cohort_id = c.id) as sessions,
       (select count(*) from public.enrollments e where e.cohort_id = c.id) as enrollments,
       (select count(*) from public.enrollments e
          join public.student_profiles sp on sp.id = e.student_id
          join auth.users su on su.id = sp.user_id
         where e.cohort_id = c.id and su.email not ilike '%@alimun.com') as non_test_students
from public.cohorts c join _test_teachers t on t.teacher_id = c.teacher_id
order by c.created_at;
-- If non_test_students > 0, a real student is in a seed class: tell them
-- (or move them) before STEP 2.

-- ─── STEP 2A: suspend + close (reversible) ───
-- begin;
-- update public.teacher_profiles set status = 'suspended'
--  where id in (select teacher_id from _test_teachers);
-- update public.sessions set status = 'cancelled'
--  where status in ('scheduled', 'live')
--    and cohort_id in (select c.id from public.cohorts c join _test_teachers t on t.teacher_id = c.teacher_id);
-- update public.cohorts set status = 'closed'
--  where teacher_id in (select teacher_id from _test_teachers) and status in ('open', 'full');
-- commit;

-- ─── STEP 2B: delete (irreversible) ───
-- Cohorts cascade to sessions, notes, attendance, enrollments, waitlist,
-- assignments. Clear enrolled_cohort_id first (FK is ON DELETE SET NULL,
-- but do it explicitly so the change is visible).
-- begin;
-- update public.student_profiles set enrolled_cohort_id = null
--  where enrolled_cohort_id in (select c.id from public.cohorts c join _test_teachers t on t.teacher_id = c.teacher_id);
-- delete from public.cohorts
--  where teacher_id in (select teacher_id from _test_teachers);
-- delete from auth.users                       -- profiles cascade
--  where id in (select user_id from _test_teachers)
--     or lower(email) = 'test-student@alimun.com';
-- commit;

-- ─── VERIFY (expect 0 rows, or all suspended/closed after 2A) ───
select tp.full_name, tp.status,
       (select count(*) from public.cohorts c where c.teacher_id = tp.id and c.status in ('open', 'full')) as open_cohorts
from public.teacher_profiles tp
where tp.id in (select teacher_id from _test_teachers);
