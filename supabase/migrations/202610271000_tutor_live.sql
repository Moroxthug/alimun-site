-- AI tutor, part 7: the live call (owner, 26 Oct 2026: "the students picks one, each tutor with its own matching voice,
-- go"). Three columns on tutor_sessions, idempotent:
--  1. tutor: the tutor the student picked for the call (lena, mei, sofia, arthur, kofi, omar; js/app/cast3.js), whose
--     voice the call uses (api/_lib/tutor-live.js).
--  2. mode: 'written' (the turn-by-turn tutor, parts 2 to 4) or 'live' (a call through Google's Gemini Live API).
--  3. live_until: when the current live pass (Google ephemeral token) expires. /api/tutor?action=live-tick counts the
--     time every 30 seconds; a new pass first charges any time the previous pass covered that no tick counted.
--  4. app_settings tutor_live: 'admins' (only admins may call, to try it) until the Privacy page names the live call;
--     the owner sets it to 'all' on the admin's System page to open it to every student.
-- Nothing is written from the browser (the existing row rules stay: students read their own sessions).

alter table public.tutor_sessions add column if not exists tutor text;
alter table public.tutor_sessions add column if not exists mode text not null default 'written';
alter table public.tutor_sessions add column if not exists live_until timestamptz;
insert into public.app_settings (key, value) values ('tutor_live', 'admins') on conflict (key) do nothing;

-- Verify: the three columns
select
  (select count(*) from information_schema.columns where table_schema = 'public' and table_name = 'tutor_sessions' and column_name = 'tutor') as tutor_column,
  (select count(*) from information_schema.columns where table_schema = 'public' and table_name = 'tutor_sessions' and column_name = 'mode') as mode_column,
  (select count(*) from information_schema.columns where table_schema = 'public' and table_name = 'tutor_sessions' and column_name = 'live_until') as live_until_column,
  (select value from public.app_settings where key = 'tutor_live') as tutor_live;
