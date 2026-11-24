-- Live class list and homework (owner, 24 Nov 2026: "make the class list and homework live too").
-- Adds the tables the Classes and Homework screens read to Supabase Realtime (publication supabase_realtime; the first
-- set is in 202611241700_live_updates.sql). Realtime applies each table's row rules per listener, unchanged here:
-- a student hears about their own classes' dates, notes, homework and marks; a teacher about the classes they teach.
-- Idempotent. Ends with a verify query.
do $$
declare t text;
begin
  foreach t in array array['sessions', 'assignments', 'session_notes', 'one_on_one_bookings', 'student_feedback'] loop
    if to_regclass('public.' || t) is not null and not exists (
      select 1 from pg_publication_tables where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = t
    ) then
      execute format('alter publication supabase_realtime add table public.%I', t);
    end if;
  end loop;
end $$;

-- Verify
select string_agg(tablename, ', ' order by tablename) as live_tables
from pg_publication_tables where pubname = 'supabase_realtime' and schemaname = 'public'
  and tablename in ('sessions', 'assignments', 'session_notes', 'one_on_one_bookings', 'student_feedback');
