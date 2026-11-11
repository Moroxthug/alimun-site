-- The language of the emails Alimun sends to the admin (new teacher applications, contact form). Owner, 7 Nov 2026:
-- "translate the admin emails". One of en, es, fr, de, pt, it, zh, ar, ma; change it in Admin → System → App settings.
insert into public.app_settings (key, value) values ('admin_email_lang', 'en') on conflict (key) do nothing;

-- Verify
select key, value from public.app_settings where key = 'admin_email_lang';
