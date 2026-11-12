-- English A1–A2 launch class (owner, 12 Nov 2026): "propose a new class starting next monday ... start them all at
-- either open class or level pack, both discounted of 10 euros ... class will be formed if 8 users min ... first class
-- will be free ... i will teach". Details: docs/MATCHING_PLAN.md, "Launch class".
--
-- Room changes (api/_lib/rooms.js, api/pricing.js, api/_lib/entitlements.js, api/join-session.js):
--   cohorts.decide_at     a room decides at this moment instead of 10 days before its start: with min_learners seats
--                         (counted together with its linked_room) both rooms open, otherwise both are cancelled and every
--                         reservation ends with nothing charged.
--   cohorts.linked_room   the level pack and the open class of the same class: seats count together; the open class's
--                         sessions use the pack's video room (sessions.room_session_id), so they are one class on Mondays.
--   An open-class room with decide_at is reserved like a pack (card saved, charged on the first day).
--   quotes/entitlements.offer, discount_minor   the launch offer's €10 off the first payment, in the quote's currency.
--   app_settings.launch_offer   { code, rooms, intro_session, ends_at, eur_off }: the offer, its rooms and the free class.
-- The owner gets an approved English teacher profile (teaches the class). Idempotent; ends with a verify query.

alter table public.cohorts add column if not exists decide_at timestamptz;
alter table public.cohorts add column if not exists linked_room uuid;
alter table public.sessions add column if not exists room_session_id uuid references public.sessions (id) on delete set null;
alter table public.quotes add column if not exists offer text check (offer is null or offer ~ '^[a-z0-9-]{1,40}$');
alter table public.quotes add column if not exists discount_minor integer not null default 0 check (discount_minor >= 0);
alter table public.entitlements add column if not exists offer text check (offer is null or offer ~ '^[a-z0-9-]{1,40}$');
alter table public.entitlements add column if not exists discount_minor integer not null default 0 check (discount_minor >= 0);

-- The owner as an approved English teacher (no-op when the profile exists)
insert into public.teacher_profiles (user_id, full_name, languages, status, country)
select u.id, coalesce(nullif(u.raw_user_meta_data ->> 'full_name', ''), 'Alimun'), array['English'], 'approved', 'MA'
  from auth.users u
 where u.email = 'bchysfpol@gmail.com'
   and not exists (select 1 from public.teacher_profiles t where t.user_id = u.id);

-- The class: level pack Monday, Tuesday, Thursday 19:00 Paris and open class Monday 19:00 Paris, from 16 November;
-- decision Monday 16 November 04:00 UTC (the room job runs at 04:23 UTC); the free class Saturday 14 November 17:00 Paris.
do $$
declare
  v_teacher uuid; v_pack uuid; v_open uuid; v_intro uuid; v_session uuid;
begin
  select t.id into v_teacher from public.teacher_profiles t join auth.users u on u.id = t.user_id where u.email = 'bchysfpol@gmail.com';
  if v_teacher is null then raise exception 'owner teacher profile missing'; end if;

  select id into v_pack from public.cohorts where product_key = 'level_en' and level = 'A1' and starts_on = date '2026-11-16' and decide_at is not null;
  if v_pack is null then
    insert into public.cohorts (teacher_id, language, level, goal_track, tier, max_students, description, schedule_days, schedule_time, timezone,
      status, product_key, room_state, starts_on, min_learners, published_at, decided_at, contract_offered_at, contract_accepted_at, class_minutes, decide_at)
    values (v_teacher, 'English', 'A1', 'foundations', 'pack', 12, 'English A1–A2 launch class', array['Monday', 'Tuesday', 'Thursday'], '19:00', 'Europe/Paris',
      'open', 'level_en', 'published', date '2026-11-16', 8, now(), null, now(), now(), 60, timestamptz '2026-11-16 04:00:00+00')
    returning id into v_pack;
    perform public.generate_room_sessions(v_pack);
  end if;

  select id into v_open from public.cohorts where product_key = 'open_en' and level = 'A1' and starts_on = date '2026-11-16' and decide_at is not null;
  if v_open is null then
    insert into public.cohorts (teacher_id, language, level, goal_track, tier, max_students, description, schedule_days, schedule_time, timezone,
      status, product_key, room_state, starts_on, min_learners, published_at, contract_offered_at, contract_accepted_at, class_minutes, decide_at, linked_room)
    values (v_teacher, 'English', 'A1', 'pleasure', 'open', 20, 'English A1–A2 launch class (Mondays)', array['Monday'], '19:00', 'Europe/Paris',
      'open', 'open_en', 'published', date '2026-11-16', 8, now(), now(), now(), 60, timestamptz '2026-11-16 04:00:00+00', v_pack)
    returning id into v_open;
    perform public.generate_room_sessions(v_open);
    update public.cohorts set linked_room = v_open where id = v_pack;
  end if;
  -- The open class's Mondays are the pack's Mondays: same video room
  update public.sessions o set room_session_id = p.id
    from public.sessions p
   where o.cohort_id = v_open and p.cohort_id = v_pack and p.scheduled_at = o.scheduled_at and o.room_session_id is distinct from p.id;

  -- The free first class: a one-session class (not a room), learners hold a free pass for its one date
  select id into v_intro from public.cohorts where description = 'English A1–A2 free first class' and product_key is null;
  if v_intro is null then
    insert into public.cohorts (teacher_id, language, level, goal_track, tier, max_students, description, schedule_days, schedule_time, timezone, status, class_minutes)
    values (v_teacher, 'English', 'A1', 'foundations', 'open', 40, 'English A1–A2 free first class', array['Saturday'], '17:00', 'Europe/Paris', 'closed', 60)
    returning id into v_intro;
    insert into public.sessions (cohort_id, scheduled_at, status) values (v_intro, timestamptz '2026-11-14 16:00:00+00', 'scheduled');
  end if;
  select id into v_session from public.sessions where cohort_id = v_intro order by scheduled_at limit 1;

  insert into public.app_settings (key, value)
  values ('launch_offer', jsonb_build_object('code', 'launch-en-a1', 'rooms', jsonb_build_array(v_pack, v_open), 'intro_session', v_session,
          'ends_at', '2026-11-16T04:00:00Z', 'eur_off', 1000)::text)
  on conflict (key) do update set value = excluded.value;
end $$;

-- Accounts that are not learners, left out of the launch email (two test accounts, two of the owner's own student
-- accounts and the teacher's student account), checked with the owner's list on 12 Nov 2026
update public.app_settings set value = (value::jsonb || jsonb_build_object('exclude', jsonb_build_array(
  '02b9cda9-abce-4e79-a303-1a80aa755fe4', 'ed3d8bba-34da-4ebb-b1f3-566efc6c9bdc', '8dec0dea-9dd0-4c5e-8f29-822f8a388435',
  '6046bdc6-1afd-4a29-9d95-5cfc005847ee', 'f4251246-e654-47c9-8d71-3e1a586e6f96')))::text
 where key = 'launch_offer';

-- Verify
select
  (select count(*) from information_schema.columns where table_schema = 'public' and column_name in ('decide_at', 'linked_room', 'room_session_id', 'offer', 'discount_minor')) as columns,
  (select count(*) from public.cohorts where decide_at is not null) as launch_rooms,
  (select count(*) from public.sessions s join public.cohorts c on c.id = s.cohort_id where c.decide_at is not null) as launch_sessions,
  (select count(*) from public.sessions where room_session_id is not null) as shared_mondays,
  (select value from public.app_settings where key = 'launch_offer') as offer;
