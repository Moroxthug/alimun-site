-- ============================================================
--  Private teacher notes (docs/DASHBOARD_PLAN.md, step 15 part 3). Owner, 25 Oct 2026: notes a teacher
--  writes about a student stay visible to the student; teachers can also write private notes, seen only
--  by the student's teachers and admins.
--  student_feedback.is_private (default false: every existing note stays as it is, visible to the student).
--  The read rule: a student sees only their notes that are not private; teachers of the student, the
--  note's author and admins see all. Insert and delete rules are unchanged.
--  No data is changed. Idempotent. Ends with a verify query.
-- ============================================================

alter table public.student_feedback add column if not exists is_private boolean not null default false;

drop policy if exists feedback_select on public.student_feedback;
create policy feedback_select on public.student_feedback for select to authenticated
  using (public.is_admin()
      or (student_id = public.my_student_profile_id() and not is_private)
      or teacher_id = public.my_teacher_profile_id()
      or public.teaches_student(student_id));

-- Verify
select (select count(*) from information_schema.columns where table_schema = 'public' and table_name = 'student_feedback' and column_name = 'is_private') as column_added,
       (select qual from pg_policies where tablename = 'student_feedback' and policyname = 'feedback_select') as select_rule;
