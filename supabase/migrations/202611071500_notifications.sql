-- Growth plan step 4 (docs/GROWTH_PLAN.md): in-app notifications and campaigns.
-- Owner, 7 Nov 2026: "start step 4". Additive only.
--
-- notifications: what the bell in the dashboards shows. Service notifications are written here by triggers when
-- something happens to the person (homework graded, a class place offered, a session moved or cancelled, session
-- notes published, a new student in a teacher's class); they carry a key and parameters that the dashboard turns
-- into text in the person's language. Campaign notifications (kind 'offer') carry the admin's own title and text.
-- People read and mark their own; nobody writes them from the browser.

create table if not exists public.notifications (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users (id) on delete cascade,
  kind        text not null default 'service' check (kind in ('service', 'offer')),
  key         text check (key is null or key ~ '^[a-z][a-z0-9_]{1,39}$'),
  params      jsonb not null default '{}'::jsonb check (jsonb_typeof(params) = 'object' and pg_column_size(params) <= 2000),
  title       text check (title is null or length(title) <= 140),
  body        text check (body is null or length(body) <= 1000),
  link        text check (link is null or link ~ '^(/[^/]|https://alimun\.com/)'),
  campaign_id uuid,
  created_at  timestamptz not null default now(),
  read_at     timestamptz,
  constraint notifications_has_text check (key is not null or title is not null)
);
create index if not exists notifications_user_time on public.notifications (user_id, created_at desc);

alter table public.notifications enable row level security;
revoke all on public.notifications from anon;
revoke insert, update, delete, truncate on public.notifications from authenticated;
grant select on public.notifications to authenticated;
grant update (read_at) on public.notifications to authenticated;

drop policy if exists notifications_select on public.notifications;
create policy notifications_select on public.notifications for select to authenticated
  using (user_id = (select auth.uid()) or public.is_admin());
drop policy if exists notifications_update on public.notifications;
create policy notifications_update on public.notifications for update to authenticated
  using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));

-- One helper used by the triggers. Never blocks the change that caused it.
create or replace function public.notify_user(p_user uuid, p_key text, p_params jsonb, p_link text)
returns void language plpgsql security definer set search_path = '' as $$
begin
  if p_user is null then return; end if;
  insert into public.notifications (user_id, kind, key, params, link) values (p_user, 'service', p_key, coalesce(p_params, '{}'::jsonb), p_link);
exception when others then
  raise warning 'notify_user %: %', p_key, sqlerrm;
end $$;
revoke execute on function public.notify_user(uuid, text, jsonb, text) from public, anon, authenticated;

-- Homework graded → the student.
create or replace function public.notify_homework_graded()
returns trigger language plpgsql security definer set search_path = '' as $$
declare u uuid; t text;
begin
  if new.status = 'graded' and old.status is distinct from 'graded' then
    select s.user_id into u from public.student_profiles s where s.id = new.student_id;
    select a.title into t from public.assignments a where a.id = new.assignment_id;
    perform public.notify_user(u, 'homework_graded', jsonb_build_object('title', coalesce(t, ''), 'score', new.score), '/app#/homework');
  end if;
  return null;
end $$;
drop trigger if exists trg_notify_homework_graded on public.assignment_submissions;
create trigger trg_notify_homework_graded after update on public.assignment_submissions
  for each row execute function public.notify_homework_graded();

-- A class place offered from the waiting list → the student.
create or replace function public.notify_place_offered()
returns trigger language plpgsql security definer set search_path = '' as $$
declare u uuid; c record;
begin
  if new.offered_at is not null and old.offered_at is distinct from new.offered_at then
    select s.user_id into u from public.student_profiles s where s.id = new.student_id;
    select language, level into c from public.cohorts where id = new.cohort_id;
    perform public.notify_user(u, 'place_offered', jsonb_build_object('language', c.language, 'level', c.level, 'until', new.offer_expires_at),
      '/app#/classes/offer/' || new.id::text);
  end if;
  return null;
end $$;
drop trigger if exists trg_notify_place_offered on public.cohort_waitlist;
create trigger trg_notify_place_offered after update on public.cohort_waitlist
  for each row execute function public.notify_place_offered();

-- A session cancelled or moved → every active student in the class.
create or replace function public.notify_session_change()
returns trigger language plpgsql security definer set search_path = '' as $$
declare k text; c record; r record;
begin
  if new.status = 'cancelled' and old.status is distinct from 'cancelled' then k := 'session_cancelled';
  elsif new.scheduled_at is distinct from old.scheduled_at and new.status = 'scheduled' then k := 'session_moved';
  else return null; end if;
  select language, level into c from public.cohorts where id = new.cohort_id;
  for r in select s.user_id from public.enrollments e join public.student_profiles s on s.id = e.student_id
           where e.cohort_id = new.cohort_id and e.status = 'active' loop
    perform public.notify_user(r.user_id, k, jsonb_build_object('language', c.language, 'level', c.level, 'at', new.scheduled_at, 'was', old.scheduled_at), '/app#/classes');
  end loop;
  return null;
end $$;
drop trigger if exists trg_notify_session_change on public.sessions;
create trigger trg_notify_session_change after update on public.sessions
  for each row execute function public.notify_session_change();

-- Session notes published → every active student in the class.
create or replace function public.notify_notes_published()
returns trigger language plpgsql security definer set search_path = '' as $$
declare ses record; c record; r record;
begin
  if new.published_at is null or (tg_op = 'UPDATE' and old.published_at is not null) then return null; end if;
  select cohort_id, scheduled_at into ses from public.sessions where id = new.session_id;
  if ses.cohort_id is null then return null; end if;
  select language, level into c from public.cohorts where id = ses.cohort_id;
  for r in select s.user_id from public.enrollments e join public.student_profiles s on s.id = e.student_id
           where e.cohort_id = ses.cohort_id and e.status = 'active' loop
    perform public.notify_user(r.user_id, 'notes_ready', jsonb_build_object('language', c.language, 'level', c.level, 'at', ses.scheduled_at), '/app#/classes');
  end loop;
  return null;
end $$;
drop trigger if exists trg_notify_notes_published on public.session_notes;
create trigger trg_notify_notes_published after insert or update on public.session_notes
  for each row execute function public.notify_notes_published();

-- A student joined a class → its teacher.
create or replace function public.notify_student_joined()
returns trigger language plpgsql security definer set search_path = '' as $$
declare t uuid; n text; c record;
begin
  if new.status <> 'active' then return null; end if;
  select co.language, co.level, tp.user_id into c from public.cohorts co left join public.teacher_profiles tp on tp.id = co.teacher_id where co.id = new.cohort_id;
  select full_name into n from public.student_profiles where id = new.student_id;
  perform public.notify_user(c.user_id, 'student_joined', jsonb_build_object('name', coalesce(n, ''), 'language', c.language, 'level', c.level), '/app/teach#/students');
  return null;
end $$;
drop trigger if exists trg_notify_student_joined on public.enrollments;
create trigger trg_notify_student_joined after insert on public.enrollments
  for each row execute function public.notify_student_joined();

revoke execute on function public.notify_homework_graded() from public, anon, authenticated;
revoke execute on function public.notify_place_offered() from public, anon, authenticated;
revoke execute on function public.notify_session_change() from public, anon, authenticated;
revoke execute on function public.notify_notes_published() from public, anon, authenticated;
revoke execute on function public.notify_student_joined() from public, anon, authenticated;

-- Notifications older than 12 months are deleted with the activity purge.
create or replace function public.activity_purge()
returns integer language plpgsql security definer set search_path = '' as $$
declare a int; b int;
begin
  delete from public.activity_events where created_at < now() - interval '24 months'; get diagnostics a = row_count;
  delete from public.notifications where created_at < now() - interval '12 months'; get diagnostics b = row_count;
  return a + b;
end $$;
revoke execute on function public.activity_purge() from public, anon, authenticated;

-- Campaigns (part 4b): what was sent, to whom, and who clicked. Written by /api/campaigns with the service key.
create table if not exists public.campaigns (
  id           uuid primary key default gen_random_uuid(),
  created_by   uuid references auth.users (id) on delete set null,
  subject      text not null check (length(subject) between 1 and 200),
  heading      text not null check (length(heading) between 1 and 140),
  body         text not null check (length(body) between 1 and 5000),
  button_label text check (button_label is null or length(button_label) <= 60),
  button_link  text check (button_link is null or button_link ~ '^https://alimun\.com/'),
  hero         text,
  channels     text[] not null default array['email'],
  audience     jsonb not null default '{}'::jsonb,
  recipients   integer not null default 0,
  emailed      integer not null default 0,
  sent_at      timestamptz,
  created_at   timestamptz not null default now()
);
create table if not exists public.campaign_recipients (
  campaign_id uuid not null references public.campaigns (id) on delete cascade,
  user_id     uuid not null references auth.users (id) on delete cascade,
  emailed     boolean not null default false,
  clicked_at  timestamptz,
  created_at  timestamptz not null default now(),
  primary key (campaign_id, user_id)
);
alter table public.campaigns enable row level security;
alter table public.campaign_recipients enable row level security;
revoke all on public.campaigns, public.campaign_recipients from anon;
revoke insert, update, delete, truncate on public.campaigns, public.campaign_recipients from authenticated;
grant select on public.campaigns, public.campaign_recipients to authenticated;
drop policy if exists campaigns_admin on public.campaigns;
create policy campaigns_admin on public.campaigns for select to authenticated using (public.is_admin());
drop policy if exists campaign_recipients_admin on public.campaign_recipients;
create policy campaign_recipients_admin on public.campaign_recipients for select to authenticated using (public.is_admin());

-- Who a campaign may reach: people whose latest choice is "news and offers: yes" (which the table allows only with
-- the 16+ check), narrowed by the admin's filters. Admins and the server only.
create or replace function public.campaign_audience(p_filter jsonb default '{}'::jsonb)
returns table (user_id uuid, email text, name text, role text, language text, level text, country text, tier text)
language plpgsql stable security definer set search_path = '' as $$
declare f jsonb := coalesce(p_filter, '{}'::jsonb);
begin
  if not (public.is_admin() or coalesce(auth.role(), '') = 'service_role') then
    raise exception 'admins only' using errcode = '42501';
  end if;
  return query
  with last_act as (
    select a.user_id, max(a.at) as last_at from public.activity_all(null, now() - interval '400 days') a
    where a.kind not in ('last_sign_in', 'signed_up', 'news_on', 'news_off') group by a.user_id
  )
  select u.id, u.email::text, coalesce(s.full_name, t.full_name, u.raw_user_meta_data ->> 'full_name')::text,
    coalesce(u.raw_app_meta_data ->> 'role', 'student')::text, s.language::text, s.level::text,
    coalesce(s.country, t.country)::text, s.tier::text
  from auth.users u
  join public.marketing_consent_current k on k.user_id = u.id and k.granted and k.age_16_plus
  left join public.student_profiles s on s.user_id = u.id
  left join public.teacher_profiles t on t.user_id = u.id
  left join last_act la on la.user_id = u.id
  where u.email is not null and u.deleted_at is null
    and (f ->> 'role' is null or coalesce(u.raw_app_meta_data ->> 'role', 'student') = f ->> 'role')
    and (f ->> 'language' is null or s.language = f ->> 'language')
    and (f ->> 'level' is null or s.level = f ->> 'level')
    and (jsonb_typeof(f -> 'countries') is distinct from 'array' or jsonb_array_length(f -> 'countries') = 0
         or coalesce(s.country, t.country) in (select jsonb_array_elements_text(f -> 'countries')))
    and (f ->> 'plan' is null
         or (f ->> 'plan' = 'free' and coalesce(s.tier, 'free') in ('free', 'waitlist'))
         or (f ->> 'plan' = 'paying' and s.tier is not null and s.tier not in ('free', 'waitlist')))
    and (f ->> 'active_within_days' is null or la.last_at > now() - make_interval(days => (f ->> 'active_within_days')::int))
    and (f ->> 'inactive_for_days' is null or la.last_at is null or la.last_at < now() - make_interval(days => (f ->> 'inactive_for_days')::int));
end $$;
revoke execute on function public.campaign_audience(jsonb) from public, anon;
grant execute on function public.campaign_audience(jsonb) to authenticated, service_role;
grant execute on function public.activity_all(uuid, timestamptz) to service_role;

-- Verify
select
  (select relrowsecurity from pg_class where oid = 'public.notifications'::regclass) as notifications_rls,
  (select count(*) from pg_trigger where tgname in ('trg_notify_homework_graded', 'trg_notify_place_offered', 'trg_notify_session_change',
     'trg_notify_notes_published', 'trg_notify_student_joined')) as triggers,
  (select count(*) from pg_class where relname in ('campaigns', 'campaign_recipients') and relrowsecurity) as campaign_tables;
