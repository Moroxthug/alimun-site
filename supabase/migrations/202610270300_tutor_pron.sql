-- AI tutor, part 4: pronunciation (docs/AI_TUTOR_PLAN.md, part 4; owner: "go ahead", "just go with your recommendations").
-- Two small additions, idempotent:
--  1. tutor_messages.pron: the sentence a tutor message sets for the student to say aloud (written by the server from the
--     tutor's checked reply). /api/tutor?action=pronounce reads it from here, never from the browser, and scores the
--     student's recording against it with Azure; the recording is never stored. The score is stored as the student's
--     turn in the existing result jsonb ({ message, pron: { score, accuracy, fluency, completeness, words } }).
--  2. tutor_messages.pron_voiced_at: when that sentence was spoken slowly (?action=voice with slow), claimed once per
--     message like voiced_at.
-- Nothing is written from the browser (the existing row rules stay: students read their own messages).
-- Cost rows go to public.ai_usage as action tutor_pron (no change there).

alter table public.tutor_messages add column if not exists pron text;
alter table public.tutor_messages add column if not exists pron_voiced_at timestamptz;

-- Verify: the two columns
select
  (select count(*) from information_schema.columns where table_schema = 'public' and table_name = 'tutor_messages' and column_name = 'pron') as pron_column,
  (select count(*) from information_schema.columns where table_schema = 'public' and table_name = 'tutor_messages' and column_name = 'pron_voiced_at') as pron_voiced_at_column;
