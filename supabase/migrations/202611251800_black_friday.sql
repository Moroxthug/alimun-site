-- Black Friday and one beginner group (owner, 25 Nov 2026: "we need to find a way to convert and get at least 8 inside
-- a class now"; "2 weeks ... label it as black friday discount, so discount it from the initial price of the month or
-- of the pack and get them to pay"; "One A1–A2 group, 7 Dec").
--   1. The beginner group (three a week Mon/Wed/Thu 19:00 Paris, and its Monday open class) starts on Monday 7 December
--      instead of 30 November: the prepared move in 202611292000_launch_2_postpone_7_dec.sql, run now (idempotent).
--   2. launch_offer.deal: two weeks of classes off the first payment (half a first month, 2 of 12 weeks upfront) until
--      Monday 30 November 23:59 Paris, for the beginner group and the B1 intensive course (api/_lib/launch.js).
--   3. The automatic launch email is switched off: it still announces the free class of 23 November.
-- Idempotent.

-- 1. The beginner group from 7 December (same block as 202611292000_launch_2_postpone_7_dec.sql)
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

-- 2. Black Friday until Monday 30 November 23:59 Paris, also for the intensive course's room
update public.app_settings
   set value = (value::jsonb || jsonb_build_object('deal', jsonb_build_object('name', 'black-friday', 'ends_at', '2026-11-30T22:59:00Z',
                'rooms', jsonb_build_array('a8f30809-8d9a-4a66-9161-cf77798daed5'))))::text
 where key = 'launch_offer' and value::jsonb ->> 'code' = 'launch-en-2';

-- 3. No more automatic launch emails (they announce the free class of 23 November)
update public.app_settings set value = 'off' where key = 'launch_email_auto';

-- Verify
select c.product_key, c.starts_on, c.decide_at, count(s.id) as sessions, min(s.scheduled_at) as first_class, count(s.room_session_id) as shared_mondays
  from public.cohorts c left join public.sessions s on s.cohort_id = c.id
 where c.id in ('a4c1cb8b-5a67-4cf4-949b-4736dc490d82', 'f6184c56-a6d7-4de2-bdfe-440ba5478392')
 group by c.product_key, c.starts_on, c.decide_at;
select value::jsonb ->> 'ends_at' as offer_ends, value::jsonb -> 'deal' as deal,
       (select value from public.app_settings where key = 'launch_email_auto') as auto_email
  from public.app_settings where key = 'launch_offer';

-- 4. (25 Nov, later) The Black Friday message: the hourly job (api/_lib/launch-email.js, step 'bf') sends it from send_at
--    until the deal ends, to every English learner who has not reserved (bell for all, email unless unsubscribed).
update public.app_settings
   set value = jsonb_set(value::jsonb, '{deal,send_at}', to_jsonb('2026-11-26T07:00:00Z'::text))::text
 where key = 'launch_offer' and value::jsonb ? 'deal';
-- 5. Denys (reserved the intensive course on 25 Nov before Black Friday) gets the same price: half his first month.
update public.entitlements set offer = 'black-friday', discount_minor = 5450
 where id = '11ca8a72-42f1-470d-9c1e-a684c1ea0af3' and status = 'pending_room' and coalesce(discount_minor, 0) = 0;
