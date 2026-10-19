-- ============================================================
--  Cleanup of junk and demo accounts (owner decision 19 Oct 2026:
--  "delete A and B, fix C").
--
--  A. 11 random signups from June (no real people).
--  B. 11 demo/test accounts (example.com seeds, test-student/teacher,
--     sofia@/lukas@/admin@alimun.com, jelspexar10@gmail.com).
--     The one class owned by "Test Teacher" (closed demo class) is
--     deleted first because cohorts.teacher_id is ON DELETE RESTRICT.
--  C. Owner accounts kept; bchysfca@ and bchysfpol@ lose the tier they
--     never paid for (tier -> null). Admin role is untouched.
--
--  Everything linked to these users goes with them through the existing
--  ON DELETE CASCADE keys (profiles, enrollments, attendance, AI usage,
--  waitlist, credits, submissions). Stripe customers are not touched.
--  Kept: passanthaitham@gmail.com and every other owner account.
--
--  Idempotent: re-running deletes nothing more.
-- ============================================================

begin;

create temporary table _doomed on commit drop as
select id, email from auth.users where lower(email) in (
  -- A
  'ijoaijd@gmail.nedionoia', 'ijojoia@iojodsi.com', 'uijdioa@ijoid.com', 'iojjoa@miomo.com',
  'buibiu@joijis.com', 'asmosamo@jnsios.com', 'asiocjsai@sciucosai.com', 'omais@miosd.com',
  'insoanj@nioxna.com', 'jsanisajn@niunsai.com', 'sdoiandoisan@niunsa.com',
  -- B
  'camille@example.com', 'aisha@example.com', 'marco@example.com', 'yuki@example.com',
  'omar@example.com', 'test-student@alimun.com', 'test-teacher@alimun.com',
  'sofia@alimun.com', 'lukas@alimun.com', 'admin@alimun.com', 'jelspexar10@gmail.com'
);

-- Classes owned by teachers being deleted (RESTRICT key).
update public.student_profiles set enrolled_cohort_id = null
where enrolled_cohort_id in (
  select c.id from public.cohorts c join public.teacher_profiles tp on tp.id = c.teacher_id
  where tp.user_id in (select id from _doomed));
delete from public.cohorts
where teacher_id in (select tp.id from public.teacher_profiles tp where tp.user_id in (select id from _doomed));

delete from auth.users where id in (select id from _doomed);

-- C
update public.student_profiles sp set tier = null, updated_at = now()
from auth.users u
where u.id = sp.user_id
  and lower(u.email) in ('bchysfca@gmail.com', 'bchysfpol@gmail.com')
  and sp.stripe_subscription_id is null
  and sp.tier is not null;

commit;

-- ============================================================
--  Verify (expect: 0 doomed users left, 30 - 22 = 8 users, the two
--  owner accounts with tier null, Passant still pending).
-- ============================================================
select count(*) as doomed_left from auth.users where lower(email) in (
  'ijoaijd@gmail.nedionoia', 'ijojoia@iojodsi.com', 'uijdioa@ijoid.com', 'iojjoa@miomo.com',
  'buibiu@joijis.com', 'asmosamo@jnsios.com', 'asiocjsai@sciucosai.com', 'omais@miosd.com',
  'insoanj@nioxna.com', 'jsanisajn@niunsai.com', 'sdoiandoisan@niunsa.com',
  'camille@example.com', 'aisha@example.com', 'marco@example.com', 'yuki@example.com',
  'omar@example.com', 'test-student@alimun.com', 'test-teacher@alimun.com',
  'sofia@alimun.com', 'lukas@alimun.com', 'admin@alimun.com', 'jelspexar10@gmail.com');
select u.email, sp.tier, tp.status as teacher_status
from auth.users u
left join public.student_profiles sp on sp.user_id = u.id
left join public.teacher_profiles tp on tp.user_id = u.id
order by u.email;
