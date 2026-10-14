-- ============================================================
--  DO NOT RUN — superseded by maintenance/remove_test_data.sql and
--  maintenance/neutralise_seed_accounts.sql (owner chooses an option
--  there). This older script deletes production users with no preview
--  step tied to the owner's decision. Kept as history only.
-- ============================================================

-- ============================================================
--  ALIMUN — Remove the July 2026 test video cohort + test users
--  (seeded in PRODUCTION by supabase/seed-test-video-session.js)
--
--  The test cohort is status='open', Spanish/foundations/community,
--  and is DISCOVERABLE by real students. Run this once before launch.
--  Review the SELECTs first; then run the DELETE block.
-- ============================================================

-- 1. Look before you delete
select u.id, u.email, tp.id as teacher_profile_id, sp.id as student_profile_id
from auth.users u
left join public.teacher_profiles tp on tp.user_id = u.id
left join public.student_profiles sp on sp.user_id = u.id
where lower(u.email) in ('test-teacher@alimun.com', 'test-student@alimun.com');

select c.* from public.cohorts c
join public.teacher_profiles tp on tp.id = c.teacher_id
join auth.users u on u.id = tp.user_id
where lower(u.email) = 'test-teacher@alimun.com';

-- 2. Delete (cohorts → sessions/enrollments cascade; users → profiles cascade)
begin;

delete from public.cohorts c
using public.teacher_profiles tp, auth.users u
where c.teacher_id = tp.id and tp.user_id = u.id
  and lower(u.email) = 'test-teacher@alimun.com';

delete from auth.users
where lower(email) in ('test-teacher@alimun.com', 'test-student@alimun.com');

commit;
