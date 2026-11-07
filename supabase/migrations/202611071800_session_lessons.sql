-- Class lessons on class dates (docs/LESSONS_PLAN.md, step L1). Owner, 7 Nov 2026: "start attaching lessons to class dates".
-- The lessons themselves are data files (site/src/data/classes/<course>.js, served as /data/classes/<course>.json);
-- the database only knows each course's size and which lesson number each class date has.
--   class_courses(id, lessons)          a course with prepared lessons, e.g. English-A1 with 48
--   cohorts.lesson_start                 the lesson a class starts from (default 1)
--   sessions.lesson_no                   the lesson for that date (null: no prepared lesson, or past the end of the course)
--   sessions.lesson_pinned               true when the teacher chose it by hand (kept as is; later dates continue after it)
-- assign_cohort_lessons(cohort) numbers a class's dates in order: cancelled dates get none, past dates keep theirs,
-- pinned dates keep theirs, every other date gets the lesson after the previous one. It runs after every change to a
-- class's dates (trigger) and after the teacher changes a lesson (set_session_lesson).
-- Idempotent.

create table if not exists public.class_courses (
  id text primary key check (id ~ '^[A-Za-z]+-[A-C][12]$'),
  lessons integer not null check (lessons between 1 and 400)
);
alter table public.class_courses enable row level security;
drop policy if exists class_courses_read on public.class_courses;
create policy class_courses_read on public.class_courses for select to authenticated using (true);
drop policy if exists class_courses_admin on public.class_courses;
create policy class_courses_admin on public.class_courses for all to authenticated using (public.is_admin()) with check (public.is_admin());
insert into public.class_courses (id, lessons) values ('English-A1', 48) on conflict (id) do update set lessons = excluded.lessons;

alter table public.cohorts add column if not exists lesson_start integer not null default 1;
do $$ begin
  if not exists (select 1 from pg_constraint where conname = 'cohorts_lesson_start_chk') then
    alter table public.cohorts add constraint cohorts_lesson_start_chk check (lesson_start between 1 and 400);
  end if;
end $$;

alter table public.sessions add column if not exists lesson_no integer;
alter table public.sessions add column if not exists lesson_pinned boolean not null default false;
do $$ begin
  if not exists (select 1 from pg_constraint where conname = 'sessions_lesson_no_chk') then
    alter table public.sessions add constraint sessions_lesson_no_chk check (lesson_no is null or lesson_no between 1 and 400);
  end if;
end $$;

-- The course of a class: language and level, when that course has prepared lessons
create or replace function public.cohort_course(p_cohort uuid)
 returns text
 language sql
 stable security definer
 set search_path to ''
as $function$
  select cc.id from public.cohorts c join public.class_courses cc on cc.id = c.language || '-' || c.level where c.id = p_cohort;
$function$;

create or replace function public.assign_cohort_lessons(p_cohort uuid)
 returns void
 language plpgsql
 security definer
 set search_path to ''
as $function$
declare
  v_course text; v_size int; v_n int; v_no int; s record;
begin
  select cc.id, cc.lessons, c.lesson_start - 1 into v_course, v_size, v_n
    from public.cohorts c left join public.class_courses cc on cc.id = c.language || '-' || c.level where c.id = p_cohort;
  if v_course is null then return; end if;
  for s in select id, status, scheduled_at, lesson_no, lesson_pinned from public.sessions
           where cohort_id = p_cohort order by scheduled_at, id loop
    if s.lesson_pinned then
      if s.lesson_no is not null then v_n := s.lesson_no; end if;
      continue;
    end if;
    if s.status = 'cancelled' then
      if s.lesson_no is not null then update public.sessions set lesson_no = null where id = s.id; end if;
      continue;
    end if;
    if s.scheduled_at < now() - interval '3 hours' and s.lesson_no is not null then v_n := s.lesson_no; continue; end if;
    v_n := v_n + 1;
    v_no := case when v_n <= v_size then v_n end;
    if s.lesson_no is distinct from v_no then update public.sessions set lesson_no = v_no where id = s.id; end if;
  end loop;
end $function$;
revoke all on function public.assign_cohort_lessons(uuid) from public, anon, authenticated;

-- After any change to a class's dates (new dates, cancelled, moved), renumber that class. Not from inside itself.
create or replace function public.sessions_assign_lessons()
 returns trigger
 language plpgsql
 security definer
 set search_path to ''
as $function$
begin
  if pg_trigger_depth() > 1 then return null; end if;
  perform public.assign_cohort_lessons(coalesce(new.cohort_id, old.cohort_id));
  return null;
end $function$;
drop trigger if exists trg_sessions_assign_lessons on public.sessions;
create trigger trg_sessions_assign_lessons after insert or delete or update of status, scheduled_at on public.sessions
  for each row execute function public.sessions_assign_lessons();

-- A class's starting lesson changed: renumber
create or replace function public.cohorts_assign_lessons()
 returns trigger
 language plpgsql
 security definer
 set search_path to ''
as $function$
begin
  if new.lesson_start is distinct from old.lesson_start or new.level is distinct from old.level or new.language is distinct from old.language then
    perform public.assign_cohort_lessons(new.id);
  end if;
  return null;
end $function$;
drop trigger if exists trg_cohorts_assign_lessons on public.cohorts;
create trigger trg_cohorts_assign_lessons after update on public.cohorts for each row execute function public.cohorts_assign_lessons();

-- The teacher (or an admin) chooses the lesson for one date: p_lesson null with p_auto true goes back to automatic;
-- p_lesson null with p_auto false means no prepared lesson that day. Later dates continue after it.
create or replace function public.set_session_lesson(p_session uuid, p_lesson integer, p_auto boolean default false)
 returns void
 language plpgsql
 security definer
 set search_path to ''
as $function$
declare v_cohort uuid; v_size int;
begin
  select s.cohort_id into v_cohort from public.sessions s where s.id = p_session;
  if v_cohort is null then raise exception 'class date not found' using errcode = 'P0002'; end if;
  if not (public.is_admin() or public.teaches_cohort(v_cohort)) then raise exception 'not your class' using errcode = '42501'; end if;
  select cc.lessons into v_size from public.class_courses cc where cc.id = public.cohort_course(v_cohort);
  if v_size is null then raise exception 'this class has no prepared lessons' using errcode = '22023'; end if;
  if p_lesson is not null and (p_lesson < 1 or p_lesson > v_size) then raise exception 'no such lesson' using errcode = '22023'; end if;
  if p_auto then
    update public.sessions set lesson_pinned = false where id = p_session;
  else
    update public.sessions set lesson_no = p_lesson, lesson_pinned = true where id = p_session;
  end if;
  perform public.assign_cohort_lessons(v_cohort);
end $function$;
revoke all on function public.set_session_lesson(uuid, integer, boolean) from public, anon;
grant execute on function public.set_session_lesson(uuid, integer, boolean) to authenticated;

-- The admin sets where a class starts in its course
create or replace function public.set_cohort_lesson_start(p_cohort uuid, p_start integer)
 returns void
 language plpgsql
 security definer
 set search_path to ''
as $function$
begin
  if not (public.is_admin() or public.teaches_cohort(p_cohort)) then raise exception 'not your class' using errcode = '42501'; end if;
  update public.cohorts set lesson_start = greatest(1, least(400, coalesce(p_start, 1))) where id = p_cohort;
end $function$;
revoke all on function public.set_cohort_lesson_start(uuid, integer) from public, anon;
grant execute on function public.set_cohort_lesson_start(uuid, integer) to authenticated;

-- Number every existing class that has a course with prepared lessons
do $$ declare c record; begin
  for c in select co.id from public.cohorts co join public.class_courses cc on cc.id = co.language || '-' || co.level loop
    perform public.assign_cohort_lessons(c.id);
  end loop;
end $$;

-- Verify
select co.language || '-' || co.level as course, count(s.id) as dates, count(s.lesson_no) as with_lesson, min(s.lesson_no) as first, max(s.lesson_no) as last
from public.cohorts co join public.sessions s on s.cohort_id = co.id
where co.language || '-' || co.level in (select id from public.class_courses)
group by 1;
