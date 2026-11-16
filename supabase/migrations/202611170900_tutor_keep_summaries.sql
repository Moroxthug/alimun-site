-- Owner, 16 Nov 2026 ("keep summaries"): the Privacy page says tutor conversations are kept for 90 days, while session
-- summaries and what the tutor remembers stay until the learner deletes them on the Tutor page or closes the account.
-- The daily clean-up deleted whole sessions, summaries included. It now deletes only the conversation (the messages)
-- and the board of a session past keep_until, keeps its title, summary, topics and words, and marks it done
-- (keep_until 'infinity') so it is not visited again. Nothing had been deleted yet (first date 24 Jan 2027). Idempotent.

create or replace function public.tutor_purge()
 returns integer
 language plpgsql
 security definer
 set search_path to ''
as $$
declare n integer; s integer;
begin
  with due as (select id from public.tutor_sessions where keep_until < now())
  delete from public.tutor_messages m using due where m.session_id = due.id;
  get diagnostics n = row_count;
  update public.tutor_sessions set board = '[]'::jsonb, keep_until = 'infinity' where keep_until < now();
  get diagnostics s = row_count;
  insert into public.cron_runs (job, result) values ('db:tutor-purge', jsonb_build_object('messages', n, 'sessions', s));
  return n;
exception when others then
  insert into public.cron_runs (job, ok, result) values ('db:tutor-purge', false, jsonb_build_object('error', sqlerrm));
  return 0;
end;
$$;
revoke all on function public.tutor_purge() from public, anon, authenticated;

-- Verify: the function no longer deletes sessions
select position('delete from public.tutor_sessions' in pg_get_functiondef('public.tutor_purge'::regproc)) = 0 as keeps_sessions;
