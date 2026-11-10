-- Live tutor calls: which engine ran the call. null or 'live' = Google's live model; 'cascade' = speech to text, the
-- written tutor's model and Azure's voice (api/_lib/tutor-cascade.js, owner's test version, 10 Nov 2026). The live
-- call's cost estimate is not recorded for cascade calls, whose steps record their own costs.
alter table public.tutor_sessions add column if not exists engine text;

-- Verify
select column_name, data_type from information_schema.columns
where table_schema = 'public' and table_name = 'tutor_sessions' and column_name = 'engine';
