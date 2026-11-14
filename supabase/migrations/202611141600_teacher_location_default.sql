-- Teacher location: stop defaulting to "Madrid, Spain" (owner, 14 Nov 2026).
-- teacher_profiles.location had the column default 'Madrid, Spain', and the teacher application form never asks for
-- a location, so every teacher was listed in Find a teacher as being in Madrid whatever country they live in.
-- A teacher sets their location in Settings; until then it stays empty and is not shown.
-- Idempotent; ends with a verify query.

alter table public.teacher_profiles alter column location drop default;

-- Clear the default value from existing rows (owner approved). A teacher who really is in Madrid can set it again in Settings.
update public.teacher_profiles set location = null where location = 'Madrid, Spain';

-- Verify
select
  (select column_default from information_schema.columns
    where table_schema = 'public' and table_name = 'teacher_profiles' and column_name = 'location') as location_default,
  (select count(*) from public.teacher_profiles where location = 'Madrid, Spain') as madrid_rows;
