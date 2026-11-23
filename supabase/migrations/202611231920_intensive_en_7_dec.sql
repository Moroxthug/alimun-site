-- The English intensive course starts Monday 7 December 2026, not 4 January (owner, 23 Nov 2026: "we said classes from
-- next week or the week after"; "Monday 7 December"). Its 60 class dates (none attended, booked or recorded) are made
-- again from the new start; it decides on Monday 7 December 04:00 UTC like the launch class (api/_lib/rooms.js,
-- decide_at), so sign-ups stay open until the Sunday night. Idempotent.
do $$
begin
  if exists (select 1 from public.cohorts where id = 'a8f30809-8d9a-4a66-9161-cf77798daed5' and starts_on <> date '2026-12-07') then
    if exists (select 1 from public.entitlements where cohort_id = 'a8f30809-8d9a-4a66-9161-cf77798daed5')
       or exists (select 1 from public.session_attendance a join public.sessions s on s.id = a.session_id where s.cohort_id = 'a8f30809-8d9a-4a66-9161-cf77798daed5') then
      raise exception 'the intensive course already has reservations or attendance; move it by hand';
    end if;
    delete from public.sessions where cohort_id = 'a8f30809-8d9a-4a66-9161-cf77798daed5' and status = 'scheduled';
    update public.cohorts set starts_on = date '2026-12-07', decide_at = timestamptz '2026-12-07 04:00:00+00'
     where id = 'a8f30809-8d9a-4a66-9161-cf77798daed5';
    perform public.generate_room_sessions('a8f30809-8d9a-4a66-9161-cf77798daed5');
  end if;
end $$;

-- Verify
select c.starts_on, c.decide_at, count(s.id) as sessions, min(s.scheduled_at) as first_class, max(s.scheduled_at) as last_class
  from public.cohorts c left join public.sessions s on s.cohort_id = c.id
 where c.id = 'a8f30809-8d9a-4a66-9161-cf77798daed5' group by c.starts_on, c.decide_at;
