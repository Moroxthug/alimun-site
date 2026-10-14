-- ============================================================
--  Read-only inventory of the live database (Phase 1).
--  Run in Supabase → SQL Editor BEFORE and AFTER applying the
--  Phase 1 migrations. It changes nothing. Each block is a
--  separate result set; export or paste them into the session.
-- ============================================================

-- 1. Tables, RLS on/forced, row counts
select c.relname as table_name, c.relrowsecurity as rls, c.relforcerowsecurity as rls_forced,
       (xpath('/row/n/text()', query_to_xml(format('select count(*) as n from public.%I', c.relname), false, true, '')))[1]::text::bigint as row_count
from pg_class c join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public' and c.relkind = 'r'
order by 1;

-- 2. Policies
select tablename, policyname, cmd, roles, qual, with_check
from pg_policies where schemaname = 'public'
order by tablename, policyname;

-- 3. Functions: security definer, search_path, who can execute
select p.proname, pg_get_function_identity_arguments(p.oid) as args,
       p.prosecdef as security_definer, p.proconfig,
       has_function_privilege('anon', p.oid, 'execute') as anon_exec,
       has_function_privilege('authenticated', p.oid, 'execute') as auth_exec
from pg_proc p join pg_namespace n on n.oid = p.pronamespace
where n.nspname = 'public'
  and not exists (select 1 from pg_depend d where d.objid = p.oid and d.deptype = 'e')
order by 1;

-- 4. Table grants held by anon / authenticated
select grantee, table_name, string_agg(privilege_type, ', ' order by privilege_type) as privileges
from information_schema.role_table_grants
where table_schema = 'public' and grantee in ('anon', 'authenticated')
group by grantee, table_name
order by table_name, grantee;

-- 5. Triggers (public tables + auth.users)
select event_object_schema as schema, event_object_table as table_name, trigger_name,
       action_timing, string_agg(event_manipulation, ',') as events, action_statement
from information_schema.triggers
where event_object_schema in ('public', 'auth')
group by 1, 2, 3, 4, 6
order by 1, 2, 3;

-- 6. Views and their security_invoker setting
select c.relname as view_name, c.reloptions
from pg_class c join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public' and c.relkind = 'v'
order by 1;

-- 7. Columns of the tables Phase 1 touches (catches live-only columns)
select table_name, string_agg(column_name, ', ' order by ordinal_position) as columns
from information_schema.columns
where table_schema = 'public'
  and table_name in ('teacher_profiles', 'student_profiles', 'cohorts', 'enrollments', 'app_settings', 'ai_usage')
group by table_name order by 1;

-- 8. Settings (secret values masked) and storage buckets
select key, case when key ilike '%secret%' then '<' || length(value) || ' chars>' else value end as value
from public.app_settings order by key;
select id, name, public, file_size_limit, allowed_mime_types from storage.buckets order by id;
select policyname, cmd, roles, qual, with_check from pg_policies
where schemaname = 'storage' and tablename = 'objects' order by policyname;

-- 9. Roles: app_metadata vs user_metadata (no emails beyond the admin)
select coalesce(raw_app_meta_data ->> 'role', '<none>') as app_role,
       coalesce(raw_user_meta_data ->> 'role', '<none>') as user_role,
       count(*)
from auth.users group by 1, 2 order by 1, 2;
select email from auth.users where raw_app_meta_data ->> 'role' = 'admin';

-- 10. Seed / test data candidates
select tp.id, tp.full_name, tp.status, u.email, tp.created_at,
       (select count(*) from public.cohorts c where c.teacher_id = tp.id) as cohorts
from public.teacher_profiles tp left join auth.users u on u.id = tp.user_id
order by tp.created_at;
select c.id, c.language, c.level, c.tier, c.status, c.enrolled_count, tp.full_name as teacher,
       (select count(*) from public.sessions s where s.cohort_id = c.id) as sessions,
       (select count(*) from public.enrollments e where e.cohort_id = c.id) as enrollments
from public.cohorts c join public.teacher_profiles tp on tp.id = c.teacher_id
order by c.created_at;
