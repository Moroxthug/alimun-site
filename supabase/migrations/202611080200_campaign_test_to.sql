-- Test inbox for campaign tests sent with the campaign key (owner, 7 Nov 2026: "send them to bchysfita@gmail.com not
-- pol please i cannot see emails in pol one"). Comma-separated, at most 3 addresses; empty means every admin account.
-- Readable and editable by admins only (policy app_settings_admin). Idempotent.
insert into public.app_settings (key, value) values ('campaign_test_to', 'bchysfita@gmail.com')
  on conflict (key) do update set value = excluded.value;

-- Verify
select value from public.app_settings where key = 'campaign_test_to';
