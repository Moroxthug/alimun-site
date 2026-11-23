-- Launch class 2: the same-day note about the free class (owner, 23 Nov 2026), sent by the hourly launch email job from
-- today_at until 15 minutes before the class (api/_lib/launch-email.js, steps 'today'). Idempotent.
update public.app_settings set value = (value::jsonb || jsonb_build_object('today_at', '2026-11-23T16:30:00Z'))::text
 where key = 'launch_offer' and value::jsonb ->> 'code' = 'launch-en-2';
-- Verify
select value::jsonb ->> 'today_at' as today_at from public.app_settings where key = 'launch_offer';
