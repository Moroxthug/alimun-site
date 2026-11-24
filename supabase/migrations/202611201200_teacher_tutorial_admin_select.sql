-- The tour's overview video (Admin -> Teacher onboarding): an admin replacing tour/<lang>.mp4 uploads with upsert,
-- which needs the admin to read the existing object too. Insert, update and delete policies are in 202611191200.
drop policy if exists teacher_tutorial_admin_select on storage.objects;
create policy teacher_tutorial_admin_select on storage.objects for select to authenticated using (bucket_id = 'teacher-tutorial' and public.is_admin());

select polname from pg_policy where polrelid = 'storage.objects'::regclass and polname like 'teacher_tutorial_%' order by 1;
