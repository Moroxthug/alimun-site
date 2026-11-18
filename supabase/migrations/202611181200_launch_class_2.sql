-- Second English launch class (owner, 18 Nov 2026): "create class slots for monday wednesday and thursday, sponsor the
-- 1 class a week tier and the 3 classes a week tier, create them in a time that accommodates most people ... launch a
-- campaign to push students to sign up to first class". Same machinery as 202611122200_launch_class.sql.
--
-- Time: 19:00 Paris, the evening that suits most learners (Admin → Matching, 18 Nov 2026: 18:00 Canary Islands and
-- Lisbon, 19:00 Paris, Madrid, Berlin, Rome, Budapest, Algiers, 20:00 Athens and Kigali, 21:00 Istanbul and Mogadishu).
--   Free first class   Monday 23 November 19:00 Paris (18:00 UTC), one session, free pass
--   Three a week       level pack, English A1, Monday, Wednesday, Thursday 19:00 Paris, from Monday 30 November, 12 weeks
--   One a week         open class, Mondays 19:00 Paris, the pack's Monday class (same video room), from 30 November
--   Offer              code launch-en-2, €10 off the first payment of either, sign-ups until the rooms decide on
--                      Monday 30 November 04:00 UTC (8 sign-ups across both, as the first launch; otherwise nothing is charged)
-- The owner teaches (approved English teacher profile from the first launch). Idempotent; ends with a verify query.

do $$
declare
  v_teacher uuid; v_pack uuid; v_open uuid; v_intro uuid; v_session uuid;
begin
  select t.id into v_teacher from public.teacher_profiles t join auth.users u on u.id = t.user_id where u.email = 'bchysf@gmail.com';
  if v_teacher is null then raise exception 'owner teacher profile missing'; end if;

  select id into v_pack from public.cohorts where product_key = 'level_en' and level = 'A1' and starts_on = date '2026-11-30' and decide_at is not null;
  if v_pack is null then
    insert into public.cohorts (teacher_id, language, level, goal_track, tier, max_students, description, schedule_days, schedule_time, timezone,
      status, product_key, room_state, starts_on, min_learners, published_at, contract_offered_at, contract_accepted_at, class_minutes, decide_at)
    values (v_teacher, 'English', 'A1', 'foundations', 'pack', 12, 'English A1–A2 launch class (30 Nov)', array['Monday', 'Wednesday', 'Thursday'], '19:00', 'Europe/Paris',
      'open', 'level_en', 'published', date '2026-11-30', 8, now(), now(), now(), 60, timestamptz '2026-11-30 04:00:00+00')
    returning id into v_pack;
    perform public.generate_room_sessions(v_pack);
  end if;

  select id into v_open from public.cohorts where product_key = 'open_en' and level = 'A1' and starts_on = date '2026-11-30' and decide_at is not null;
  if v_open is null then
    insert into public.cohorts (teacher_id, language, level, goal_track, tier, max_students, description, schedule_days, schedule_time, timezone,
      status, product_key, room_state, starts_on, min_learners, published_at, contract_offered_at, contract_accepted_at, class_minutes, decide_at, linked_room)
    values (v_teacher, 'English', 'A1', 'pleasure', 'open', 20, 'English A1–A2 launch class, Mondays (30 Nov)', array['Monday'], '19:00', 'Europe/Paris',
      'open', 'open_en', 'published', date '2026-11-30', 8, now(), now(), now(), 60, timestamptz '2026-11-30 04:00:00+00', v_pack)
    returning id into v_open;
    perform public.generate_room_sessions(v_open);
    update public.cohorts set linked_room = v_open where id = v_pack;
  end if;
  -- The open class's Mondays are the pack's Mondays: same video room
  update public.sessions o set room_session_id = p.id
    from public.sessions p
   where o.cohort_id = v_open and p.cohort_id = v_pack and p.scheduled_at = o.scheduled_at and o.room_session_id is distinct from p.id;

  -- The free first class: a one-session class, learners hold a free pass for its one date
  select id into v_intro from public.cohorts where description = 'English free first class (23 Nov)' and product_key is null;
  if v_intro is null then
    insert into public.cohorts (teacher_id, language, level, goal_track, tier, max_students, description, schedule_days, schedule_time, timezone, status, class_minutes)
    values (v_teacher, 'English', 'A1', 'foundations', 'open', 40, 'English free first class (23 Nov)', array['Monday'], '19:00', 'Europe/Paris', 'closed', 60)
    returning id into v_intro;
    insert into public.sessions (cohort_id, scheduled_at, status) values (v_intro, timestamptz '2026-11-23 18:00:00+00', 'scheduled');
  end if;
  select id into v_session from public.sessions where cohort_id = v_intro order by scheduled_at limit 1;

  -- The offer: same accounts left out as the first launch (test accounts and the owner's own student accounts)
  insert into public.app_settings (key, value)
  values ('launch_offer', jsonb_build_object('code', 'launch-en-2', 'rooms', jsonb_build_array(v_pack, v_open), 'intro_session', v_session,
          'ends_at', '2026-11-30T04:00:00Z', 'eur_off', 1000, 'exclude', jsonb_build_array(
          '02b9cda9-abce-4e79-a303-1a80aa755fe4', 'ed3d8bba-34da-4ebb-b1f3-566efc6c9bdc', '8dec0dea-9dd0-4c5e-8f29-822f8a388435',
          '6046bdc6-1afd-4a29-9d95-5cfc005847ee', 'f4251246-e654-47c9-8d71-3e1a586e6f96'))::text)
  on conflict (key) do update set value = excluded.value;
end $$;

-- Verify
select c.description, c.product_key, c.room_state, c.starts_on, c.schedule_days, c.schedule_time, c.decide_at,
  (select count(*) from public.sessions s where s.cohort_id = c.id) as sessions,
  (select min(scheduled_at) from public.sessions s where s.cohort_id = c.id) as first_session,
  (select count(*) from public.sessions s where s.cohort_id = c.id and s.room_session_id is not null) as shared_mondays
from public.cohorts c where c.description like '%(23 Nov)' or c.description like '%(30 Nov)'
union all
select 'offer', (select value from public.app_settings where key = 'launch_offer'), null, null, null, null, null, null, null, null;
