-- Owner, 13 Nov 2026: five short proof clips in every class, and full recording that only admins (the owner and the
-- people the owner makes admin) can start; teachers cannot record ("it would be bad for privacy"). Clips are deleted
-- after 30 days and full recordings after 90, unless kept. Every viewing is logged. Recordings that Alimun did not start
-- are reported to the owner. Written only by the server (api/ops.js); admins read. Idempotent; ends with a verify query.

create table if not exists public.class_recordings (
  id uuid primary key default gen_random_uuid(),
  session_id uuid references public.sessions(id) on delete set null,
  room text not null,
  kind text not null check (kind in ('proof', 'full', 'unknown')),
  planned_minute integer,                 -- proof clips: minutes after the scheduled start
  requested_at timestamptz not null default now(),
  requested_by uuid,                      -- the admin for a full recording; null for the automatic clips
  start_error text,
  daily_recording_id text unique,
  started_at timestamptz,
  duration_seconds integer,
  status text,                            -- Daily's: in-progress, finished, ...
  keep boolean not null default false,    -- kept past the deletion date (a concern was raised)
  keep_note text,
  delete_after timestamptz,
  deleted_at timestamptz,
  created_at timestamptz not null default now()
);
create unique index if not exists class_recordings_proof_once on public.class_recordings (session_id, planned_minute) where kind = 'proof';
create index if not exists class_recordings_session_idx on public.class_recordings (session_id);
create index if not exists class_recordings_due_idx on public.class_recordings (delete_after) where deleted_at is null and not keep;
alter table public.class_recordings enable row level security;
drop policy if exists class_recordings_admin_read on public.class_recordings;
create policy class_recordings_admin_read on public.class_recordings for select to authenticated using (public.is_admin());
revoke insert, update, delete on public.class_recordings from anon, authenticated;
grant select on public.class_recordings to authenticated;

-- Who watched which recording, and when
create table if not exists public.recording_views (
  id bigint generated always as identity primary key,
  recording_id uuid not null references public.class_recordings(id) on delete cascade,
  viewer uuid not null,
  viewer_email text,
  viewed_at timestamptz not null default now()
);
alter table public.recording_views enable row level security;
drop policy if exists recording_views_admin_read on public.recording_views;
create policy recording_views_admin_read on public.recording_views for select to authenticated using (public.is_admin());
revoke insert, update, delete on public.recording_views from anon, authenticated;
grant select on public.recording_views to authenticated;

-- The automations. Proof clips record people: on, in dry run until the owner has approved the notice learners and
-- teachers see. Clean-up deletes Alimun's own recordings when due: on and live. The guard only tells the owner.
insert into public.automations (name, label, about, enabled, dry_run, daily_cap) values
  ('proof-clips', 'Proof clips', 'In every class with people in the room: five 60-second recordings at random moments, as proof the class was taught. Watched only by admins; deleted after 30 days unless kept.', true, true, 600),
  ('recording-cleanup', 'Recording clean-up', 'Every day: deletes proof clips older than 30 days and full recordings older than 90 days, unless marked to keep.', true, false, 2000),
  ('recording-guard', 'Recording guard', 'Every few minutes: any recording in a class room that Alimun did not start is reported to you at once.', true, false, 50)
on conflict (name) do nothing;

select
  (select relrowsecurity from pg_class where oid = 'public.class_recordings'::regclass) as recordings_rls,
  (select relrowsecurity from pg_class where oid = 'public.recording_views'::regclass) as views_rls,
  (select count(*) from public.automations where name in ('proof-clips', 'recording-cleanup', 'recording-guard')) as automations;
