-- The cheaper voice call stays a test (owner, 12 Nov 2026: "not in production as we need to test it out").
-- Admins, and the people whose emails the owner lists here (comma separated, empty by default), get both voice calls
-- in the Tutor so the two can be compared; nobody else sees the cheaper call. Read by api/tutor.js isVoiceTester.
-- Idempotent; ends with a verify query.

insert into public.app_settings (key, value) values ('tutor_cascade_testers', '') on conflict (key) do nothing;

-- Verify: the setting exists.
select key, value from public.app_settings where key = 'tutor_cascade_testers';
