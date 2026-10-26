-- AI tutor, part 3: voice (docs/AI_TUTOR_PLAN.md, part 3; owner: "go ahead", "just go with your recommendations",
-- 26 Oct 2026). Three small additions, idempotent:
--  1. tutor_messages.voiced_at: when the tutor's voice was made for that message. /api/tutor?action=voice claims it
--     (set only while still empty), so each message is spoken once; it is emptied again if Google does not answer.
--  2. tutor_messages.spoken: the student said this turn aloud (Groq Whisper's transcript; the recording is never
--     stored), so the tutor does not correct its spelling or punctuation.
--  3. app_settings tutor_voice: the tutor's voice in every language, Orus (owner, question 7); the admin can set it to
--     Sulafat on the System page to compare by ear. Any other value is read as Orus by the server.
-- Nothing is written from the browser (the existing row rules stay: students read their own messages, admins settings).

alter table public.tutor_messages add column if not exists voiced_at timestamptz;
alter table public.tutor_messages add column if not exists spoken boolean not null default false;

insert into public.app_settings (key, value) values ('tutor_voice', 'Orus') on conflict (key) do nothing;

-- Verify: the two columns and the setting
select
  (select count(*) from information_schema.columns where table_schema = 'public' and table_name = 'tutor_messages' and column_name = 'voiced_at') as voiced_at_column,
  (select count(*) from information_schema.columns where table_schema = 'public' and table_name = 'tutor_messages' and column_name = 'spoken') as spoken_column,
  (select value from public.app_settings where key = 'tutor_voice') as tutor_voice;
