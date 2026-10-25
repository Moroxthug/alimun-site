-- ============================================================
--  Practice memory per exercise item (docs/DASHBOARD_PLAN.md, step 5).
--  One row per student and item: how many times it was answered, how many
--  times wrong, and its spaced-review box (0 = got wrong, comes back first;
--  higher boxes come back after longer intervals). Feeds the Practice
--  rounds (js/app/practice.js) on every device, and later the teacher's
--  view of each student's difficulties.
--  item_key = "<book>:<unit>:<lesson or test>:<block>:<item>".
--  Until this is applied, the dashboard keeps the same data in the browser.
--  Idempotent. NOT YET APPLIED: waiting for the owner.
-- ============================================================

create table if not exists public.practice_items (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.student_profiles(id) on delete cascade,
  item_key text not null check (length(item_key) between 1 and 300),
  box smallint not null default 0 check (box between 0 and 9),
  seen integer not null default 0 check (seen >= 0),
  wrong integer not null default 0 check (wrong >= 0),
  last_at timestamptz not null default now(),
  unique (student_id, item_key)
);
create index if not exists practice_items_due on public.practice_items (student_id, box, last_at);

alter table public.practice_items enable row level security;
revoke all on public.practice_items from anon;
grant select, insert, update on public.practice_items to authenticated;
revoke delete, truncate, references, trigger on public.practice_items from authenticated;

drop policy if exists practice_items_select on public.practice_items;
create policy practice_items_select on public.practice_items for select to authenticated
  using (public.is_admin() or student_id = public.my_student_profile_id() or public.teaches_student(student_id));
drop policy if exists practice_items_insert on public.practice_items;
create policy practice_items_insert on public.practice_items for insert to authenticated
  with check (student_id = public.my_student_profile_id());
drop policy if exists practice_items_update on public.practice_items;
create policy practice_items_update on public.practice_items for update to authenticated
  using (student_id = public.my_student_profile_id())
  with check (student_id = public.my_student_profile_id());

-- Verify
select relrowsecurity as rls_on,
  (select count(*) from pg_policies where schemaname = 'public' and tablename = 'practice_items') as policies
from pg_class where oid = 'public.practice_items'::regclass;
