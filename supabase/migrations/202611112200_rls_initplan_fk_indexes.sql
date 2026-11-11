-- Performance advisor (11 Nov 2026): two safe fixes.
--
-- 1. Eight RLS policies called auth.uid() directly, so Postgres re-ran it for every row.
--    Wrapping it as (select auth.uid()) runs it once per query. Who can see or write what
--    is unchanged: same roles, same command, same condition. ALTER POLICY keeps the policy's
--    role and command, and re-running it is harmless.
-- 2. Covering indexes for the seven foreign keys the dashboards filter on. The other 15
--    unindexed foreign keys (created_by, handled_by and similar admin columns) are left alone.
--
-- Idempotent: ALTER POLICY ... USING/WITH CHECK sets the same text each time; indexes use
-- IF NOT EXISTS. Tables are small, so plain CREATE INDEX is fine.

-- 1. RLS: auth.uid() evaluated once per query
alter policy entitlements_read on public.entitlements
  using ((user_id = (select auth.uid())) or public.is_admin());

alter policy customer_pricing_read on public.customer_pricing
  using ((user_id = (select auth.uid())) or public.is_admin());

alter policy withdrawal_requests_own_read on public.withdrawal_requests
  using (user_id = (select auth.uid()));

alter policy message_reads_select on public.message_reads
  using (user_id = (select auth.uid()));

alter policy message_reads_insert on public.message_reads
  with check ((user_id = (select auth.uid())) and public.can_see_thread(thread_id));

alter policy message_reads_update on public.message_reads
  using (user_id = (select auth.uid()))
  with check ((user_id = (select auth.uid())) and public.can_see_thread(thread_id));

alter policy one_on_one_student_read on public.one_on_one_bookings
  using (student_id in (select sp.id from public.student_profiles sp where sp.user_id = (select auth.uid())));

alter policy one_on_one_teacher_read on public.one_on_one_bookings
  using (teacher_id in (select tp.id from public.teacher_profiles tp where tp.user_id = (select auth.uid())));

-- 2. Foreign keys the dashboards query
create index if not exists cohorts_teacher_id_idx            on public.cohorts (teacher_id);
create index if not exists assignments_teacher_id_idx        on public.assignments (teacher_id);
create index if not exists session_attendance_student_id_idx on public.session_attendance (student_id);
create index if not exists message_threads_teacher_id_idx    on public.message_threads (teacher_id);
create index if not exists cohort_waitlist_student_id_idx    on public.cohort_waitlist (student_id);
create index if not exists teacher_reviews_student_id_idx    on public.teacher_reviews (student_id);
create index if not exists session_board_work_user_id_idx    on public.session_board_work (user_id);

-- Verify: no policy above still calls auth.uid() unwrapped, and all seven indexes exist.
select
  (select count(*) from pg_policies
    where schemaname = 'public'
      and policyname in ('entitlements_read', 'customer_pricing_read', 'withdrawal_requests_own_read',
                         'message_reads_select', 'message_reads_insert', 'message_reads_update',
                         'one_on_one_student_read', 'one_on_one_teacher_read')
      and (coalesce(qual, '') || coalesce(with_check, '')) ~ '(?<!SELECT )auth\.uid\(\)') as unwrapped_policies,  -- expect 0
  (select count(*) from pg_indexes
    where schemaname = 'public'
      and indexname in ('cohorts_teacher_id_idx', 'assignments_teacher_id_idx', 'session_attendance_student_id_idx',
                        'message_threads_teacher_id_idx', 'cohort_waitlist_student_id_idx',
                        'teacher_reviews_student_id_idx', 'session_board_work_user_id_idx')) as new_indexes;  -- expect 7
