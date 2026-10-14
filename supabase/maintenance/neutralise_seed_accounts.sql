-- ============================================================
--  SQL-01 — seed / test accounts with committed passwords
--
--  NOT a migration, and NOT run by anyone yet. The owner runs it by
--  hand in Supabase → SQL Editor, one step at a time, after choosing
--  option A or B. Nothing below changes data until you uncomment it.
--
--  Why: supabase/seed.sql and supabase/seed-test-video-session.js used
--  to contain fixed passwords. The accounts they created still exist
--  in production (confirmed 14 Oct: aisha@, marco@, omar@, yuki@
--  example.com and test-student@alimun.com hold
--  stripe_subscription_status = 'active' with no real subscription),
--  so anyone who read the repo could sign in and enrol in paid classes.
--
--  STEP 1  preview (read-only)   → check the list is exactly right
--  STEP 2A ban + clear the fake subscription fields (reversible,
--          keeps every row; signs the accounts out)
--  STEP 2B delete the accounts   (irreversible; owner's explicit yes)
--
--  The owner account bchysfpol@gmail.com is excluded explicitly.
-- ============================================================

-- Target accounts. Edit this list if STEP 1 shows a real person.
create temp table if not exists _seed_accounts as
select u.id as user_id, u.email
from auth.users u
where lower(u.email) <> 'bchysfpol@gmail.com'
  and (
    lower(u.email) in ('admin@alimun.com', 'sofia@alimun.com', 'lukas@alimun.com',
                       'aisha@example.com', 'marco@example.com', 'yuki@example.com',
                       'omar@example.com', 'camille@example.com',
                       'test-teacher@alimun.com', 'test-student@alimun.com')
    or lower(u.email) like '%@example.com'
    or u.id::text like '00000000-0000-0000-0000-0000000000__'   -- fixed seed.sql ids
  );

-- ─── STEP 1: preview ───
select s.email, u.last_sign_in_at, u.banned_until,
       u.raw_app_meta_data ->> 'role' as app_role,
       sp.tier, sp.stripe_subscription_status, sp.stripe_subscription_id,
       tp.status as teacher_status,
       (select count(*) from public.enrollments e
         where e.student_id = sp.id and e.status = 'active') as active_enrollments,
       (select count(*) from public.session_credits sc where sc.student_id = sp.id) as credit_rows
from _seed_accounts s
join auth.users u on u.id = s.user_id
left join public.student_profiles sp on sp.user_id = s.user_id
left join public.teacher_profiles tp on tp.user_id = s.user_id
order by s.email;

-- Active enrollments of these accounts in classes that are NOT seed
-- classes (they take seats from real students):
select s.email, c.id as cohort_id, c.language, c.level, c.status
from _seed_accounts s
join public.student_profiles sp on sp.user_id = s.user_id
join public.enrollments e on e.student_id = sp.id and e.status = 'active'
join public.cohorts c on c.id = e.cohort_id
join public.teacher_profiles tp on tp.id = c.teacher_id
where tp.user_id not in (select user_id from _seed_accounts);

-- ─── STEP 2A: ban + clear fake subscription fields (reversible) ───
-- Bans the accounts, replaces the password with a random one, signs
-- them out, removes the fake 'active' subscription and cancels their
-- active enrollments (cohort seat counts follow the enrollment trigger).
-- To undo a ban later: update auth.users set banned_until = null where email = '...';
-- begin;
-- update auth.users
--    set banned_until = '2999-01-01 00:00:00+00',
--        encrypted_password = extensions.crypt(encode(extensions.gen_random_bytes(24), 'base64'), extensions.gen_salt('bf'))
--  where id in (select user_id from _seed_accounts);
-- delete from auth.sessions                   -- sign-out only; no user data
--  where user_id in (select user_id from _seed_accounts);
-- update public.student_profiles
--    set stripe_subscription_status = null,
--        stripe_subscription_id     = null,
--        stripe_customer_id         = null,
--        tier                       = 'waitlist',
--        enrolled_cohort_id         = null
--  where user_id in (select user_id from _seed_accounts);
-- update public.enrollments
--    set status = 'cancelled', cancelled_at = now()
--  where status = 'active'
--    and student_id in (select sp.id from public.student_profiles sp
--                       where sp.user_id in (select user_id from _seed_accounts));
-- commit;

-- ─── STEP 2B: delete the accounts (irreversible) ───
-- Teacher accounts own cohorts (ON DELETE RESTRICT): run STEP 2B of
-- maintenance/remove_test_data.sql first to remove the seed cohorts.
-- Deleting an auth user cascades to its student/teacher profile,
-- enrollments, attendance, submissions, feedback, reviews and credits.
-- begin;
-- update public.student_profiles set enrolled_cohort_id = null
--  where user_id in (select user_id from _seed_accounts);
-- delete from auth.users
--  where id in (select user_id from _seed_accounts);
-- commit;

-- ─── VERIFY ───
-- After 2A: every row banned, no subscription fields, no active enrollments.
-- After 2B: no rows.
select s.email, u.banned_until, sp.tier, sp.stripe_subscription_status,
       (select count(*) from public.enrollments e
         where e.student_id = sp.id and e.status = 'active') as active_enrollments
from _seed_accounts s
left join auth.users u on u.id = s.user_id
left join public.student_profiles sp on sp.user_id = s.user_id
order by s.email;
