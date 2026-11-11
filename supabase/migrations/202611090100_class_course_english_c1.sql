-- English C1 class lessons on (docs/LESSONS_PLAN.md, L6; owner, 8 Nov 2026: 20 units, about 96 classes, level test for C2):
-- 98 class lessons; number the dates of every existing English C1 class. Idempotent.
insert into public.class_courses (id, lessons) values ('English-C1', 98) on conflict (id) do update set lessons = excluded.lessons;
do $$ declare c record; begin
  for c in select id from public.cohorts where language || '-' || level = 'English-C1' loop
    perform public.assign_cohort_lessons(c.id);
  end loop;
end $$;
-- Verify
select cc.id, cc.lessons, (select count(*) from public.cohorts co where co.language || '-' || co.level = cc.id) as classes,
       (select count(s.lesson_no) from public.sessions s join public.cohorts co on co.id = s.cohort_id where co.language || '-' || co.level = cc.id) as dates_with_lesson
from public.class_courses cc order by cc.id;
