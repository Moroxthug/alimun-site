-- Live tutor calls: the token counts Google reports during the call (usageMetadata), as the browser received them,
-- one entry per report: { n: connection, t: seconds into the call, p: prompt, c: cached, r: response, th: thoughts,
-- tu: tool-use prompt, pa/pt: prompt audio/text, ra/rt: response audio/text }. At most 400 entries a session
-- (api/tutor.js live-tick). Used to measure the real cost of a minute of call; the charge to the student does not use it.
alter table public.tutor_sessions add column if not exists live_usage jsonb;

-- Verify
select column_name, data_type from information_schema.columns
where table_schema = 'public' and table_name = 'tutor_sessions' and column_name = 'live_usage';
