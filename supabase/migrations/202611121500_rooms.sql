-- Rooms, pricing engine build step 7 (docs/PRICING_ENGINE_SPEC.md section 8; docs/LAUNCH_PRICING_SPEC.md section 7).
-- A room is a cohort with a product: level and exam packs (12 weeks from a start date, open at 8, up to 12), open
-- classes (one class a week, up to 20) and help classes (30 minutes, 3 to 8). Its room_state follows the start-date
-- timeline: draft → published (21 days before, only with a teacher and a substitute) → open (10 days before, 8 or more
-- reserved) or cancelled → running (start day, cards charged after the teacher accepted the course contract) →
-- finished. Rooms keep cohorts.status 'closed' so the old class finder and enrolment never offer them; the existing
-- jobs still make their video rooms and reminders from their sessions. A trial or help class is a pass to one session
-- (entitlements.session_id). Idempotent; ends with a verify query.

alter table public.cohorts drop constraint if exists cohorts_tier_check;
alter table public.cohorts add constraint cohorts_tier_check check (tier = any (array['community', 'focused', 'intensive', 'private', 'pack', 'exam', 'open', 'help']));

alter table public.cohorts add column if not exists product_key text references public.products (product_key);
alter table public.cohorts add column if not exists room_state text check (room_state is null or room_state in ('draft', 'published', 'open', 'running', 'finished', 'cancelled'));
alter table public.cohorts add column if not exists starts_on date;
alter table public.cohorts add column if not exists min_learners integer check (min_learners is null or min_learners between 1 and 40);
-- No foreign key on purpose: a second cohorts → teacher_profiles key makes every existing embed of teacher_profiles
-- from cohorts ambiguous for PostgREST (it broke class pages for a few minutes on 12 Nov 2026). The server checks it.
alter table public.cohorts add column if not exists substitute_teacher_id uuid;
alter table public.cohorts drop constraint if exists cohorts_substitute_teacher_id_fkey;
alter table public.cohorts add column if not exists published_at timestamptz;
alter table public.cohorts add column if not exists decided_at timestamptz;
alter table public.cohorts add column if not exists contract_offered_at timestamptz;
alter table public.cohorts add column if not exists contract_accepted_at timestamptz;
alter table public.cohorts add column if not exists contract_declined_at timestamptz;
alter table public.cohorts add column if not exists merged_into uuid references public.cohorts (id) on delete set null;
alter table public.cohorts add column if not exists class_minutes integer not null default 60 check (class_minutes between 15 and 180);

create index if not exists cohorts_rooms_idx on public.cohorts (product_key, room_state, starts_on) where product_key is not null;

alter table public.entitlements add column if not exists session_id uuid references public.sessions (id) on delete set null;
create index if not exists entitlements_cohort_status_idx on public.entitlements (cohort_id, status) where cohort_id is not null;
create index if not exists entitlements_session_idx on public.entitlements (session_id, status) where session_id is not null;

alter table public.quotes add column if not exists session_id uuid references public.sessions (id) on delete set null;

-- The sessions of a room: on its days at its time, from its start date, for 12 weeks (84 days). Once per room.
create or replace function public.generate_room_sessions(p_cohort uuid)
returns integer language plpgsql security definer set search_path = '' as $$
declare
  c record; d date; n integer := 0;
begin
  select id, schedule_days, schedule_time, timezone, starts_on into c from public.cohorts where id = p_cohort and product_key is not null;
  if not found then raise exception 'not a room'; end if;
  if c.starts_on is null or c.schedule_time is null then raise exception 'room needs a start date and a time'; end if;
  if exists (select 1 from public.sessions where cohort_id = p_cohort) then return 0; end if;
  for i in 0..83 loop
    d := c.starts_on + i;
    if exists (select 1 from unnest(c.schedule_days) x where lower(trim(x)) = lower(trim(to_char(d, 'Day')))) then
      insert into public.sessions (cohort_id, scheduled_at, status)
      values (p_cohort, (d::text || ' ' || c.schedule_time::text)::timestamp at time zone c.timezone, 'scheduled');
      n := n + 1;
    end if;
  end loop;
  return n;
end $$;

-- Seats taken in a room (reserved or paid) and in one session (trial and help-class passes plus the room's own learners)
create or replace function public.room_seats(p_cohort uuid)
returns integer language sql stable security definer set search_path = '' as $$
  select count(*)::integer from public.entitlements
   where cohort_id = p_cohort and session_id is null and status in ('pending_room', 'active', 'paused');
$$;
create or replace function public.session_seats(p_session uuid)
returns integer language sql stable security definer set search_path = '' as $$
  select (select count(*) from public.entitlements where session_id = p_session and status in ('active', 'paused'))::integer
       + (select public.room_seats(s.cohort_id) from public.sessions s where s.id = p_session);
$$;

revoke all on function public.generate_room_sessions(uuid) from public, anon, authenticated;
revoke all on function public.room_seats(uuid) from public, anon, authenticated;
revoke all on function public.session_seats(uuid) from public, anon, authenticated;
grant execute on function public.generate_room_sessions(uuid) to service_role;
grant execute on function public.room_seats(uuid) to service_role;
grant execute on function public.session_seats(uuid) to service_role;

-- Verify: the new columns, the functions and the tier rule.
select (select count(*) from information_schema.columns where table_schema = 'public' and table_name = 'cohorts'
          and column_name in ('product_key', 'room_state', 'starts_on', 'min_learners', 'substitute_teacher_id', 'published_at', 'decided_at',
                              'contract_offered_at', 'contract_accepted_at', 'contract_declined_at', 'merged_into', 'class_minutes')) as room_cols,
       (select count(*) from pg_proc p join pg_namespace n on n.oid = p.pronamespace where n.nspname = 'public'
          and p.proname in ('generate_room_sessions', 'room_seats', 'session_seats')) as functions,
       (select pg_get_constraintdef(oid) like '%help%' from pg_constraint where conname = 'cohorts_tier_check') as tier_rule;
