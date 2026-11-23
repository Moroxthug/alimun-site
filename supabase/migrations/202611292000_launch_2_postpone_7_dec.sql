-- PREPARED, APPLY ONLY IF NEEDED on Sunday 29 Nov 2026, before the 04:00 UTC decision on Monday 30 Nov.
-- Owner, 23 Nov 2026: the beginner class starts on 30 November if it has its 4 sign-ups, otherwise it moves to Monday
-- 7 December ("yes let the beginner class move to 7 december too"). The room job can only open or cancel, so the move
-- is made by hand when fewer than 4 have reserved by Sunday evening:
--   both linked rooms (three a week Mon/Wed/Thu 19:00 Paris; Mondays 19:00 Paris) start on 7 December, their class
--   dates are made again (the Mondays share the pack's video room again), they decide on 7 December 04:00 UTC;
--   the launch offer (EUR 10 off, sign-ups) runs until then. Reservations already made stay (they point at the room,
--   not at a date); those learners are emailed the new date separately. The homepage banner's dates are changed in
--   site/src/blocks/home/launch-banner.html. Idempotent; refuses if anyone has attended a class date of these rooms.
do $$
declare v_pack uuid := 'a4c1cb8b-5a67-4cf4-949b-4736dc490d82'; v_open uuid := 'f6184c56-a6d7-4de2-bdfe-440ba5478392';
begin
  if exists (select 1 from public.cohorts where id = v_pack and starts_on = date '2026-12-07') then return; end if;
  if exists (select 1 from public.session_attendance a join public.sessions s on s.id = a.session_id where s.cohort_id in (v_pack, v_open)) then
    raise exception 'a class date of the beginner class was already attended; move it by hand';
  end if;
  if exists (select 1 from public.cohorts where id in (v_pack, v_open) and room_state <> 'published') then
    raise exception 'the beginner class has already been decided; nothing to move';
  end if;
  delete from public.sessions where cohort_id in (v_open, v_pack) and status = 'scheduled';
  update public.cohorts set starts_on = date '2026-12-07', decide_at = timestamptz '2026-12-07 04:00:00+00' where id in (v_pack, v_open);
  perform public.generate_room_sessions(v_pack);
  perform public.generate_room_sessions(v_open);
  update public.sessions o set room_session_id = p.id
    from public.sessions p
   where o.cohort_id = v_open and p.cohort_id = v_pack and p.scheduled_at = o.scheduled_at and o.room_session_id is distinct from p.id;
  update public.app_settings set value = (value::jsonb || jsonb_build_object('ends_at', '2026-12-07T04:00:00Z'))::text
   where key = 'launch_offer' and value::jsonb ->> 'code' = 'launch-en-2';
end $$;

-- Verify
select c.product_key, c.starts_on, c.decide_at, count(s.id) as sessions, min(s.scheduled_at) as first_class,
       count(s.room_session_id) as shared_mondays,
       (select value::jsonb ->> 'ends_at' from public.app_settings where key = 'launch_offer') as offer_ends
  from public.cohorts c left join public.sessions s on s.cohort_id = c.id
 where c.id in ('a4c1cb8b-5a67-4cf4-949b-4736dc490d82', 'f6184c56-a6d7-4de2-bdfe-440ba5478392')
 group by c.product_key, c.starts_on, c.decide_at;
