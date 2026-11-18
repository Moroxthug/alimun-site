-- Launch class 2 (offer launch-en-2): the reminder on the free class's day and the follow-up the day after (owner,
-- 18 Nov 2026: "do all three"). The hourly launch email job sends each during the 12 hours after its time
-- (api/_lib/launch-email.js, steps). Monday 23 and Tuesday 24 November, 09:00 UTC (10:00 Paris). Idempotent.
update public.app_settings
   set value = (value::jsonb || jsonb_build_object('remind_at', '2026-11-23T09:00:00Z', 'follow_at', '2026-11-24T09:00:00Z'))::text
 where key = 'launch_offer' and value::jsonb ->> 'code' = 'launch-en-2';

-- Verify
select value::jsonb ->> 'code' as code, value::jsonb ->> 'remind_at' as remind_at, value::jsonb ->> 'follow_at' as follow_at
  from public.app_settings where key = 'launch_offer';
