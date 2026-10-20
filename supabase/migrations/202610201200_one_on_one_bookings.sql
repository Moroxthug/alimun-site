-- ============================================================
--  1:1 bookings: weekly follow-ups (Intensive) and paid 1:1 credits
--
--  Owner decision 20 Oct 2026:
--  - Intensive students get one 20-minute 1:1 follow-up per week on that
--    week's lesson, booked within 3 days after the lesson, from their class
--    teacher's availability. Unused follow-ups do not carry over.
--  - Paid 1:1 credits (EUR 60, already sold through Stripe, stored in
--    session_credits) are booked the same way, 60 minutes.
--
--  Browsers can only READ their own bookings. Booking, cancelling and the
--  teacher's follow-up note go through /api/enroll (service role), which
--  calls the two functions below so double-booking is impossible even when
--  two students click at the same moment (the teacher row is locked).
--
--  Run in Supabase -> SQL Editor. Idempotent. Deletes nothing.
-- ============================================================

begin;

create table if not exists public.one_on_one_bookings (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.student_profiles(id) on delete cascade,
  teacher_id uuid not null references public.teacher_profiles(id) on delete cascade,
  kind text not null check (kind in ('followup', 'credit')),
  cohort_id uuid references public.cohorts(id) on delete set null,
  after_session_id uuid references public.sessions(id) on delete set null,
  week_of date,
  scheduled_at timestamptz not null,
  duration_minutes integer not null check (duration_minutes in (20, 60)),
  status text not null default 'booked' check (status in ('booked', 'completed', 'cancelled', 'missed')),
  daily_room_url text,
  teacher_note text check (length(teacher_note) <= 4000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (kind <> 'followup' or (week_of is not null and duration_minutes = 20)),
  check (kind <> 'credit' or duration_minutes = 60)
);

-- One live follow-up per student per week.
create unique index if not exists one_on_one_followup_per_week
  on public.one_on_one_bookings (student_id, week_of)
  where kind = 'followup' and status <> 'cancelled';
create index if not exists one_on_one_teacher_time on public.one_on_one_bookings (teacher_id, scheduled_at) where status <> 'cancelled';
create index if not exists one_on_one_student on public.one_on_one_bookings (student_id, scheduled_at desc);

alter table public.one_on_one_bookings enable row level security;
revoke all on public.one_on_one_bookings from anon, authenticated;
grant select on public.one_on_one_bookings to authenticated;

drop policy if exists one_on_one_student_read on public.one_on_one_bookings;
create policy one_on_one_student_read on public.one_on_one_bookings for select to authenticated
  using (student_id in (select id from public.student_profiles where user_id = auth.uid()));
drop policy if exists one_on_one_teacher_read on public.one_on_one_bookings;
create policy one_on_one_teacher_read on public.one_on_one_bookings for select to authenticated
  using (teacher_id in (select id from public.teacher_profiles where user_id = auth.uid()));
drop policy if exists one_on_one_admin_read on public.one_on_one_bookings;
create policy one_on_one_admin_read on public.one_on_one_bookings for select to authenticated
  using (public.is_admin());

-- Book a slot atomically. Raises on any conflict; returns the booking id.
create or replace function public.book_one_on_one(
  p_student uuid, p_teacher uuid, p_kind text, p_start timestamptz, p_minutes integer,
  p_cohort uuid default null, p_after_session uuid default null, p_week date default null
) returns uuid
language plpgsql security definer set search_path = public as $$
declare
  v_end timestamptz := p_start + make_interval(mins => p_minutes);
  v_id uuid;
begin
  perform 1 from teacher_profiles where id = p_teacher for update;
  if not found then raise exception 'teacher_not_found'; end if;

  if exists (
    select 1 from one_on_one_bookings b
    where b.teacher_id = p_teacher and b.status in ('booked', 'completed')
      and tstzrange(b.scheduled_at, b.scheduled_at + make_interval(mins => b.duration_minutes)) && tstzrange(p_start, v_end)
  ) or exists (
    select 1 from sessions s join cohorts c on c.id = s.cohort_id
    where c.teacher_id = p_teacher and s.status <> 'cancelled'
      and tstzrange(s.scheduled_at, s.scheduled_at + interval '60 minutes') && tstzrange(p_start, v_end)
  ) then
    raise exception 'slot_taken';
  end if;

  if exists (
    select 1 from one_on_one_bookings b
    where b.student_id = p_student and b.status = 'booked'
      and tstzrange(b.scheduled_at, b.scheduled_at + make_interval(mins => b.duration_minutes)) && tstzrange(p_start, v_end)
  ) then
    raise exception 'student_busy';
  end if;

  if p_kind = 'credit' then
    update session_credits set credits = credits - 1, updated_at = now()
    where id = (select id from session_credits where student_id = p_student and source in ('stripe_checkout_payment', 'one_on_one_refund') and credits > 0
                order by created_at limit 1 for update);
    if not found then raise exception 'no_credit'; end if;
  end if;

  insert into one_on_one_bookings (student_id, teacher_id, kind, cohort_id, after_session_id, week_of, scheduled_at, duration_minutes)
  values (p_student, p_teacher, p_kind, p_cohort, p_after_session, p_week, p_start, p_minutes)
  returning id into v_id;
  return v_id;
end $$;

-- Cancel a booking. A paid credit is returned when cancelled at least
-- p_refund_hours before the start. Returns true if a credit was returned.
create or replace function public.cancel_one_on_one(p_booking uuid, p_refund_hours integer default 24)
returns boolean
language plpgsql security definer set search_path = public as $$
declare
  b one_on_one_bookings%rowtype;
  v_refund boolean := false;
begin
  select * into b from one_on_one_bookings where id = p_booking for update;
  if not found or b.status <> 'booked' then raise exception 'not_cancellable'; end if;
  update one_on_one_bookings set status = 'cancelled', updated_at = now() where id = p_booking;
  if b.kind = 'credit' and b.scheduled_at - now() >= make_interval(hours => p_refund_hours) then
    insert into session_credits (student_id, credits, source) values (b.student_id, 1, 'one_on_one_refund');
    v_refund := true;
  end if;
  return v_refund;
end $$;

revoke all on function public.book_one_on_one(uuid, uuid, text, timestamptz, integer, uuid, uuid, date) from public, anon, authenticated;
revoke all on function public.cancel_one_on_one(uuid, integer) from public, anon, authenticated;
grant execute on function public.book_one_on_one(uuid, uuid, text, timestamptz, integer, uuid, uuid, date) to service_role;
grant execute on function public.cancel_one_on_one(uuid, integer) to service_role;

commit;

-- ============================================================
--  Verify (expect: the table with RLS on, 3 read policies, both functions
--  callable by service_role only, no anon privileges).
-- ============================================================
select relname, relrowsecurity from pg_class where oid = 'public.one_on_one_bookings'::regclass;
select policyname, cmd from pg_policies where tablename = 'one_on_one_bookings' order by 1;
select p.proname, has_function_privilege('authenticated', p.oid, 'execute') as authenticated_can_run,
       has_function_privilege('service_role', p.oid, 'execute') as service_role_can_run
from pg_proc p where p.proname in ('book_one_on_one', 'cancel_one_on_one') order by 1;
select grantee, string_agg(privilege_type, ', ') from information_schema.role_table_grants
where table_schema = 'public' and table_name = 'one_on_one_bookings' and grantee in ('anon', 'authenticated') group by 1;
