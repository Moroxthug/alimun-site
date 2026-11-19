-- Teacher onboarding (docs/TEACHER_ONBOARDING_PLAN.md): the "Getting started" tutorial in the teacher dashboard and the
-- practice classroom. Progress is written by the service role only (api/onboarding.js checks each answer or action),
-- so a teacher cannot mark parts done from the browser; the teacher reads their own row, admins read all.
create table if not exists public.teacher_onboarding (
  teacher_id uuid primary key references public.teacher_profiles(id) on delete cascade,
  steps jsonb not null default '{}'::jsonb,        -- { "<part id>": "<ISO time done>" }
  practice_at timestamptz,                         -- the last time the practice classroom was opened
  practice_count integer not null default 0,
  finished_at timestamptz,
  updated_at timestamptz not null default now()
);
alter table public.teacher_onboarding enable row level security;
drop policy if exists teacher_onboarding_read on public.teacher_onboarding;
create policy teacher_onboarding_read on public.teacher_onboarding for select to authenticated
  using (public.is_admin() or teacher_id in (select id from public.teacher_profiles where user_id = (select auth.uid())));

-- The tutorial's videos: one per part and language (English is shown when a language has none). Files live in the
-- public bucket teacher-tutorial, uploaded by an admin from Admin -> Teacher onboarding.
create table if not exists public.teacher_tutorial_videos (
  part text not null,
  lang text not null default 'en',
  path text not null,
  updated_at timestamptz not null default now(),
  primary key (part, lang)
);
alter table public.teacher_tutorial_videos enable row level security;
drop policy if exists teacher_tutorial_videos_read on public.teacher_tutorial_videos;
create policy teacher_tutorial_videos_read on public.teacher_tutorial_videos for select to authenticated using (true);
drop policy if exists teacher_tutorial_videos_admin on public.teacher_tutorial_videos;
create policy teacher_tutorial_videos_admin on public.teacher_tutorial_videos for all to authenticated using (public.is_admin()) with check (public.is_admin());

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('teacher-tutorial', 'teacher-tutorial', true, 524288000, array['video/mp4', 'video/webm', 'video/quicktime'])
on conflict (id) do nothing;
drop policy if exists teacher_tutorial_admin_insert on storage.objects;
create policy teacher_tutorial_admin_insert on storage.objects for insert to authenticated with check (bucket_id = 'teacher-tutorial' and public.is_admin());
drop policy if exists teacher_tutorial_admin_update on storage.objects;
create policy teacher_tutorial_admin_update on storage.objects for update to authenticated using (bucket_id = 'teacher-tutorial' and public.is_admin());
drop policy if exists teacher_tutorial_admin_delete on storage.objects;
create policy teacher_tutorial_admin_delete on storage.objects for delete to authenticated using (bucket_id = 'teacher-tutorial' and public.is_admin());

select (select count(*) from public.teacher_onboarding) as onboarding_rows,
       (select count(*) from public.teacher_tutorial_videos) as video_rows,
       (select public from storage.buckets where id = 'teacher-tutorial') as bucket_public;
