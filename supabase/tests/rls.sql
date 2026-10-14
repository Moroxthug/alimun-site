-- ============================================================
--  RLS / privilege tests (Phase 1 + Phase 2 acceptance)
--
--  Plain SQL. Runs inside one transaction that is ROLLED BACK at
--  the end, so it leaves nothing behind. Can run:
--   - locally: supabase/tests/run-local.sh
--   - on the live project: Supabase → SQL Editor, paste and run.
--     (Fixture users use @example.invalid and are rolled back.)
--
--  Each check impersonates a caller with `set local role` +
--  request.jwt.claims (what PostgREST does), runs one statement in
--  a subtransaction that is always undone, and records the outcome:
--    allowed : no error and at least one row read/written
--    denied  : an error, or zero rows read/written
--    error   : an error (a guard or policy must raise, not filter)
--    none    : no error and zero rows (reads that should be empty)
--  The last statement fails the script if any check failed.
-- ============================================================

begin;

create temp table rls_ids (k text primary key, id uuid not null);
create temp table rls_results (n serial, actor text, test text, expect text, got text, rows int, ok boolean, detail text);

insert into rls_ids (k, id) values
  ('admin', gen_random_uuid()), ('forged', gen_random_uuid()),
  ('stuA', gen_random_uuid()), ('stuB', gen_random_uuid()),
  ('tchT', gen_random_uuid()), ('tchU', gen_random_uuid()), ('tchP', gen_random_uuid()),
  ('spA', gen_random_uuid()), ('spB', gen_random_uuid()),
  ('tpT', gen_random_uuid()), ('tpU', gen_random_uuid()), ('tpP', gen_random_uuid()),
  ('c1', gen_random_uuid()), ('c2', gen_random_uuid()),
  ('s1', gen_random_uuid()), ('s2', gen_random_uuid()),
  ('n1', gen_random_uuid()), ('n1pub', gen_random_uuid()), ('s1b', gen_random_uuid()), ('s1c', gen_random_uuid()),
  ('a1', gen_random_uuid()), ('sub1', gen_random_uuid()),
  -- Phase 2: suspended teacher S (cohort c3, student C without a
  -- subscription), new accounts without profiles, full cohorts.
  ('stuC', gen_random_uuid()), ('stuN', gen_random_uuid()),
  ('tchS', gen_random_uuid()), ('tchN', gen_random_uuid()),
  ('spC', gen_random_uuid()), ('tpS', gen_random_uuid()),
  ('c3', gen_random_uuid()), ('cFull', gen_random_uuid()), ('cDe', gen_random_uuid()),
  ('s3', gen_random_uuid()), ('a2', gen_random_uuid()), ('a3', gen_random_uuid());

create function pg_temp.id(p text) returns uuid language sql stable as $$
  select id from rls_ids where k = p;
$$;

-- ─── Fixtures (as the table owner; RLS and guards do not apply) ───
insert into auth.users (id, email, aud, role, raw_app_meta_data, raw_user_meta_data)
select pg_temp.id(k), k || '@example.invalid', 'authenticated', 'authenticated', '{}'::jsonb, jsonb_build_object('role', r)
from (values ('admin', 'student'), ('forged', 'admin'), ('stuA', 'student'), ('stuB', 'student'),
             ('tchT', 'teacher'), ('tchU', 'teacher'), ('tchP', 'teacher'),
             ('stuC', 'student'), ('stuN', 'student'), ('tchS', 'teacher'), ('tchN', 'teacher')) v(k, r);
update auth.users set raw_app_meta_data = raw_app_meta_data || '{"role":"admin"}' where id = pg_temp.id('admin');

insert into public.teacher_profiles (id, user_id, full_name, status, hourly_rate)
values (pg_temp.id('tpT'), pg_temp.id('tchT'), 'RLS Teacher T', 'approved', 30),
       (pg_temp.id('tpU'), pg_temp.id('tchU'), 'RLS Teacher U', 'approved', 31),
       (pg_temp.id('tpP'), pg_temp.id('tchP'), 'RLS Teacher P', 'pending', 22),
       (pg_temp.id('tpS'), pg_temp.id('tchS'), 'RLS Teacher S', 'suspended', 30);

insert into public.cohorts (id, teacher_id, language, level, goal_track, tier, status)
values (pg_temp.id('c1'), pg_temp.id('tpT'), 'Spanish', 'A1', 'foundations', 'community', 'open'),
       (pg_temp.id('c2'), pg_temp.id('tpU'), 'Spanish', 'A1', 'foundations', 'community', 'closed'),
       (pg_temp.id('c3'), pg_temp.id('tpS'), 'Spanish', 'A1', 'foundations', 'community', 'open'),
       (pg_temp.id('cFull'), pg_temp.id('tpU'), 'Spanish', 'A1', 'foundations', 'community', 'full'),
       (pg_temp.id('cDe'), pg_temp.id('tpU'), 'German', 'A1', 'foundations', 'community', 'full');

insert into public.student_profiles (id, user_id, full_name, language, level, goal_track, tier,
                                     stripe_subscription_status, enrolled_cohort_id)
values (pg_temp.id('spA'), pg_temp.id('stuA'), 'RLS Student A', 'Spanish', 'A1', 'foundations', 'community', 'active', pg_temp.id('c1')),
       (pg_temp.id('spB'), pg_temp.id('stuB'), 'RLS Student B', 'Spanish', 'A1', 'foundations', 'community', 'active', pg_temp.id('c2')),
       (pg_temp.id('spC'), pg_temp.id('stuC'), 'RLS Student C', 'Spanish', 'A1', 'foundations', 'community', null, pg_temp.id('c3'));

insert into public.enrollments (student_id, cohort_id, status)
values (pg_temp.id('spA'), pg_temp.id('c1'), 'active'), (pg_temp.id('spB'), pg_temp.id('c2'), 'active'),
       (pg_temp.id('spC'), pg_temp.id('c3'), 'active');

insert into public.sessions (id, cohort_id, scheduled_at, status)
values (pg_temp.id('s1'), pg_temp.id('c1'), now() + interval '1 day', 'scheduled'),
       (pg_temp.id('s1b'), pg_temp.id('c1'), now() - interval '1 day', 'completed'),
       (pg_temp.id('s1c'), pg_temp.id('c1'), now() + interval '2 days', 'scheduled'),
       (pg_temp.id('s2'), pg_temp.id('c2'), now() + interval '1 day', 'scheduled'),
       (pg_temp.id('s3'), pg_temp.id('c3'), now() + interval '1 day', 'scheduled');

insert into public.session_notes (id, session_id, grammar_focus, published_at)
values (pg_temp.id('n1'), pg_temp.id('s1'), 'draft', null),
       (pg_temp.id('n1pub'), pg_temp.id('s1b'), 'published', now());

insert into public.session_attendance (session_id, student_id, joined_at)
values (pg_temp.id('s1b'), pg_temp.id('spA'), now() - interval '1 day');

insert into public.assignments (id, cohort_id, teacher_id, title, prompt)
values (pg_temp.id('a1'), pg_temp.id('c1'), pg_temp.id('tpT'), 'RLS assignment', 'Write');

insert into public.teacher_payouts (teacher_id, period_start, period_end, amount_eur)
values (pg_temp.id('tpU'), current_date - 30, current_date, 100),
       (pg_temp.id('tpS'), current_date - 30, current_date, 50);

-- Classroom files: one uploaded by student A (c1), one by student B (c2).
insert into storage.objects (bucket_id, name, owner)
values ('session-notes-pdfs', 'shared/' || pg_temp.id('s1') || '/rls-a.pdf', pg_temp.id('stuA')),
       ('session-notes-pdfs', 'shared/' || pg_temp.id('s2') || '/rls-b.pdf', pg_temp.id('stuB'));

-- Assignment in c2, a pending submission by A, a waitlist row for B.
insert into public.assignments (id, cohort_id, teacher_id, title, prompt)
values (pg_temp.id('a2'), pg_temp.id('c2'), pg_temp.id('tpU'), 'RLS assignment 2', 'Write'),
       (pg_temp.id('a3'), pg_temp.id('c1'), pg_temp.id('tpT'), 'RLS assignment 3', 'Write');
insert into public.assignment_submissions (id, assignment_id, student_id, submission_text)
values (pg_temp.id('sub1'), pg_temp.id('a1'), pg_temp.id('spA'), 'my essay');
insert into public.cohort_waitlist (cohort_id, student_id) values (pg_temp.id('cFull'), pg_temp.id('spB'));

insert into public.webhook_logs (event_id, event_type, payload) values ('evt_rls_test', 'test', '{}');

-- ─── Harness ───
create function pg_temp.t(p_actor text, p_test text, p_expect text, p_sql text) returns void
language plpgsql as $$
declare
  v_rows int := 0;
  v_err text := null;
  v_role text := case when p_actor = 'anon' then 'anon' else 'authenticated' end;
  v_app text := case when p_actor = 'admin' then 'admin'
                      when p_actor like 'tch%' then 'teacher'
                      else 'student' end;
  v_claims jsonb;
  v_got text;
begin
  v_claims := case when p_actor = 'anon' then '{"role":"anon"}'::jsonb
                   else jsonb_build_object('sub', pg_temp.id(p_actor), 'role', 'authenticated',
                                           'app_metadata', jsonb_build_object('role', v_app),
                                           'user_metadata', jsonb_build_object('role', case when p_actor = 'forged' then 'admin' else v_app end))
              end;
  begin
    perform set_config('request.jwt.claims', v_claims::text, true);
    execute format('set local role %I', v_role);
    execute p_sql;
    get diagnostics v_rows = row_count;
    raise exception using errcode = 'P0001', message = '__rls_rollback__';
  exception when others then
    if sqlerrm <> '__rls_rollback__' then v_err := sqlstate || ' ' || sqlerrm; end if;
  end;
  reset role;
  perform set_config('request.jwt.claims', '', true);

  v_got := case when v_err is not null then 'error' when v_rows > 0 then 'rows' else 'zero' end;
  insert into rls_results (actor, test, expect, got, rows, ok, detail)
  values (p_actor, p_test, p_expect, v_got, v_rows,
          case p_expect when 'allowed' then v_got = 'rows'
                        when 'denied'  then v_got in ('error', 'zero')
                        when 'error'   then v_got = 'error'
                        when 'none'    then v_got = 'zero' end,
          v_err);
end;
$$;

-- Substitute fixture ids: {c1} → '…uuid…'
create function pg_temp.q(p_sql text) returns text language plpgsql as $$
declare r record;
begin
  for r in select k, id from rls_ids loop
    p_sql := replace(p_sql, '{' || r.k || '}', quote_literal(r.id::text));
  end loop;
  return p_sql;
end;
$$;

create function pg_temp.chk(a text, t text, e text, s text) returns void language sql as $$
  select pg_temp.t(a, t, e, pg_temp.q(s));
$$;

-- ─── anon ───
select pg_temp.chk('anon', 'read teacher_profiles',        'denied',  'select * from public.teacher_profiles');
select pg_temp.chk('anon', 'read student_profiles',        'denied',  'select * from public.student_profiles');
select pg_temp.chk('anon', 'read cohorts',                 'denied',  'select * from public.cohorts');
select pg_temp.chk('anon', 'read sessions',                'denied',  'select * from public.sessions');
select pg_temp.chk('anon', 'read app_settings',            'denied',  'select * from public.app_settings');
select pg_temp.chk('anon', 'read teachers_public',         'allowed', 'select * from public.teachers_public where id = {tpT}');
select pg_temp.chk('anon', 'pending teacher not public',   'none',    'select * from public.teachers_public where id = {tpP}');
select pg_temp.chk('anon', 'insert student_profiles',      'denied',  'insert into public.student_profiles (user_id, full_name, language, level, goal_track, tier) values ({stuA}, ''x'', ''Spanish'', ''A1'', ''foundations'', ''community'')');
select pg_temp.chk('anon', 'insert cohort',                'denied',  'insert into public.cohorts (teacher_id, language, level, goal_track, tier) values ({tpT}, ''Spanish'', ''A1'', ''foundations'', ''community'')');
select pg_temp.chk('anon', 'update cohorts',               'denied',  'update public.cohorts set enrolled_count = 0');
select pg_temp.chk('anon', 'delete enrollments',           'denied',  'delete from public.enrollments');
select pg_temp.chk('anon', 'truncate enrollments',         'denied',  'truncate public.enrollments');
select pg_temp.chk('anon', 'rpc increment_enrollment',     'denied',  'select public.increment_enrollment({c1})');
select pg_temp.chk('anon', 'rpc generate_cohort_sessions', 'denied',  'select public.generate_cohort_sessions({c1})');
select pg_temp.chk('anon', 'rpc process_expired_offers',   'denied',  'select public.process_expired_offers()');
select pg_temp.chk('anon', 'rpc is_enrolled_in',           'denied',  'select public.is_enrolled_in({c1})');
select pg_temp.chk('anon', 'insert storage object',        'denied',  'insert into storage.objects (bucket_id, name) values (''session-notes-pdfs'', ''shared/'' || {s1} || ''/x.pdf'')');

-- ─── student A (enrolled in c1) ───
select pg_temp.chk('stuA', 'read own profile',             'allowed', 'select * from public.student_profiles where id = {spA}');
select pg_temp.chk('stuA', 'read other student',           'none',    'select * from public.student_profiles where id = {spB}');
select pg_temp.chk('stuA', 'update own full_name',         'allowed', 'update public.student_profiles set full_name = ''A2'' where id = {spA}');
select pg_temp.chk('stuA', 'self-upgrade tier',            'denied',  'update public.student_profiles set tier = ''intensive'' where id = {spA}');
select pg_temp.chk('stuA', 'set subscription active',      'denied',  'update public.student_profiles set stripe_subscription_status = ''active'', stripe_subscription_id = ''sub_x'' where id = {spA}');
select pg_temp.chk('stuA', 'move own enrolled_cohort_id',  'denied',  'update public.student_profiles set enrolled_cohort_id = {c2} where id = {spA}');
select pg_temp.chk('stuA', 'update other student',         'denied',  'update public.student_profiles set full_name = ''x'' where id = {spB}');
select pg_temp.chk('stuA', 'insert enrollment',            'denied',  'insert into public.enrollments (student_id, cohort_id) values ({spA}, {c2})');
select pg_temp.chk('stuA', 'update own enrollment',        'denied',  'update public.enrollments set status = ''cancelled'' where student_id = {spA}');
select pg_temp.chk('stuA', 'read own enrollment',          'allowed', 'select * from public.enrollments where student_id = {spA}');
select pg_temp.chk('stuA', 'read other enrollment',        'none',    'select * from public.enrollments where student_id = {spB}');
select pg_temp.chk('stuA', 'change cohort seat count',     'denied',  'update public.cohorts set enrolled_count = 0 where id = {c1}');
select pg_temp.chk('stuA', 'rpc increment_enrollment',     'denied',  'select public.increment_enrollment({c1})');
select pg_temp.chk('stuA', 'rpc decrement_enrollment',     'denied',  'select public.decrement_enrollment({c1})');
select pg_temp.chk('stuA', 'rpc generate_cohort_sessions', 'denied',  'select public.generate_cohort_sessions({c1})');
select pg_temp.chk('stuA', 'rpc process_expired_offers',   'denied',  'select public.process_expired_offers()');
select pg_temp.chk('stuA', 'read teacher_profiles row',    'none',    'select hourly_rate from public.teacher_profiles where id = {tpT}');
select pg_temp.chk('stuA', 'read teachers_public',         'allowed', 'select * from public.teachers_public where id = {tpT}');
select pg_temp.chk('stuA', 'embed teacher_public(cohort)', 'allowed', 'select t.* from public.cohorts c, public.teacher_public(c) t where c.id = {c1}');
select pg_temp.chk('stuA', 'read open cohort',             'allowed', 'select * from public.cohorts where id = {c1}');
select pg_temp.chk('stuA', 'read closed foreign cohort',   'none',    'select * from public.cohorts where id = {c2}');
select pg_temp.chk('stuA', 'read own cohort sessions',     'allowed', 'select * from public.sessions where cohort_id = {c1}');
select pg_temp.chk('stuA', 'read foreign sessions',        'none',    'select * from public.sessions where cohort_id = {c2}');
select pg_temp.chk('stuA', 'read draft notes',             'none',    'select * from public.session_notes where id = {n1}');
select pg_temp.chk('stuA', 'read published notes',         'allowed', 'select * from public.session_notes where id = {n1pub}');
select pg_temp.chk('stuA', 'classmates of own cohort',     'allowed', 'select * from public.cohort_classmates({c1})');
select pg_temp.chk('stuA', 'classmates of other cohort',   'none',    'select * from public.cohort_classmates({c2})');
select pg_temp.chk('stuA', 'close own attendance',         'allowed', 'update public.session_attendance set left_at = now() where student_id = {spA}');
select pg_temp.chk('stuA', 'edit own attendance minutes',  'denied',  'update public.session_attendance set duration_minutes = 600 where student_id = {spA}');
select pg_temp.chk('stuA', 'insert own attendance',        'denied',  'insert into public.session_attendance (session_id, student_id, joined_at) values ({s1}, {spA}, now())');
select pg_temp.chk('stuA', 'waitlist insert strips offer', 'allowed', 'with i as (insert into public.cohort_waitlist (cohort_id, student_id, offered_at, offer_expires_at) values ({cFull}, {spA}, now(), now() + interval ''2 days'') returning offered_at, offer_expires_at) select * from i where offered_at is null and offer_expires_at is null');
select pg_temp.chk('stuA', 'submission insert ungraded',   'allowed', 'with i as (insert into public.assignment_submissions (assignment_id, student_id, submission_text, status, score) values ({a3}, {spA}, ''text'', ''graded'', 100) returning status, score) select * from i where status = ''pending'' and score is null');
select pg_temp.chk('stuA', 'review own teacher',           'allowed', 'insert into public.teacher_reviews (teacher_id, student_id, rating) values ({tpT}, {spA}, 5)');
select pg_temp.chk('stuA', 'review a stranger teacher',    'denied',  'insert into public.teacher_reviews (teacher_id, student_id, rating) values ({tpU}, {spA}, 1)');
select pg_temp.chk('stuA', 'read payouts',                 'none',    'select * from public.teacher_payouts');
select pg_temp.chk('stuA', 'read app_settings',            'none',    'select * from public.app_settings');
select pg_temp.chk('stuA', 'read webhook_logs',            'none',    'select * from public.webhook_logs');
select pg_temp.chk('stuA', 'insert ai_usage',              'denied',  'insert into public.ai_usage (user_id, action) values ({stuA}, ''x'')');
select pg_temp.chk('stuA', 'truncate cohorts',             'denied',  'truncate public.cohorts cascade');
select pg_temp.chk('stuA', 'upload own session file',      'allowed', 'insert into storage.objects (bucket_id, name) values (''session-notes-pdfs'', ''shared/'' || {s1} || ''/x.pdf'')');
select pg_temp.chk('stuA', 'upload foreign session file',  'denied',  'insert into storage.objects (bucket_id, name) values (''session-notes-pdfs'', ''shared/'' || {s2} || ''/x.pdf'')');
select pg_temp.chk('stuA', 'upload outside shared/',       'denied',  'insert into storage.objects (bucket_id, name) values (''session-notes-pdfs'', ''cohort_'' || {c1} || ''/session_x.pdf'')');

-- ─── forged admin: user_metadata.role = admin, app_metadata.role = student ───
select pg_temp.chk('forged', 'read all student_profiles',  'none',    'select * from public.student_profiles');
select pg_temp.chk('forged', 'read teacher_profiles',      'none',    'select * from public.teacher_profiles');
select pg_temp.chk('forged', 'read app_settings',          'none',    'select * from public.app_settings');
select pg_temp.chk('forged', 'read webhook_logs',          'none',    'select * from public.webhook_logs');
select pg_temp.chk('forged', 'read enrollments',           'none',    'select * from public.enrollments');
select pg_temp.chk('forged', 'approve a teacher',          'denied',  'update public.teacher_profiles set status = ''approved'' where id = {tpP}');
select pg_temp.chk('forged', 'insert cohort',              'denied',  'insert into public.cohorts (teacher_id, language, level, goal_track, tier) values ({tpT}, ''Spanish'', ''A1'', ''foundations'', ''community'')');
select pg_temp.chk('forged', 'is_admin() is false',        'none',    'select 1 where public.is_admin()');

-- ─── teacher T (teaches c1) ───
select pg_temp.chk('tchT', 'read own profile',             'allowed', 'select * from public.teacher_profiles where id = {tpT}');
select pg_temp.chk('tchT', 'read other teacher row',       'none',    'select * from public.teacher_profiles where id = {tpU}');
select pg_temp.chk('tchT', 'update own location',          'allowed', 'update public.teacher_profiles set location = ''Rabat'' where id = {tpT}');
select pg_temp.chk('tchT', 'change own status',            'denied',  'update public.teacher_profiles set status = ''suspended'' where id = {tpT}');
select pg_temp.chk('tchT', 'raise own hourly_rate',        'denied',  'update public.teacher_profiles set hourly_rate = 99 where id = {tpT}');
select pg_temp.chk('tchT', 'read own student',             'allowed', 'select * from public.student_profiles where id = {spA}');
select pg_temp.chk('tchT', 'read student outside cohorts', 'none',    'select * from public.student_profiles where id = {spB}');
select pg_temp.chk('tchT', 'read own cohort enrollments',  'allowed', 'select * from public.enrollments where cohort_id = {c1}');
select pg_temp.chk('tchT', 'read foreign enrollments',     'none',    'select * from public.enrollments where cohort_id = {c2}');
select pg_temp.chk('tchT', 'complete own session',         'allowed', 'update public.sessions set status = ''completed'' where id = {s1}');
select pg_temp.chk('tchT', 'rewrite room url',             'denied',  'update public.sessions set daily_room_url = ''https://evil.example'' where id = {s1}');
select pg_temp.chk('tchT', 'update foreign session',       'denied',  'update public.sessions set status = ''cancelled'' where id = {s2}');
select pg_temp.chk('tchT', 'insert session',               'denied',  'insert into public.sessions (cohort_id, scheduled_at) values ({c1}, now())');
select pg_temp.chk('tchT', 'update own cohort seats',      'denied',  'update public.cohorts set enrolled_count = 0, max_students = 99 where id = {c1}');
select pg_temp.chk('tchT', 'insert cohort directly',       'denied',  'insert into public.cohorts (teacher_id, language, level, goal_track, tier) values ({tpT}, ''Spanish'', ''A1'', ''foundations'', ''community'')');
select pg_temp.chk('tchT', 'notes insert strips pdf_url',  'allowed', 'with i as (insert into public.session_notes (session_id, grammar_focus, pdf_url, published_at) values ({s1c}, ''x'', ''https://evil.example'', now()) returning pdf_url, published_at) select * from i where pdf_url is null and published_at is null');
select pg_temp.chk('tchT', 'notes for foreign session',    'denied',  'insert into public.session_notes (session_id, grammar_focus) values ({s2}, ''x'')');
select pg_temp.chk('tchT', 'set pdf_url on own notes',     'denied',  'update public.session_notes set pdf_url = ''https://evil.example'' where id = {n1}');
select pg_temp.chk('tchT', 'edit own notes',               'allowed', 'update public.session_notes set homework = ''p. 12'' where id = {n1}');
select pg_temp.chk('tchT', 'feedback to own student',      'allowed', 'insert into public.student_feedback (student_id, teacher_id, feedback_text) values ({spA}, {tpT}, ''good'')');
select pg_temp.chk('tchT', 'feedback to other student',    'denied',  'insert into public.student_feedback (student_id, teacher_id, feedback_text) values ({spB}, {tpT}, ''x'')');
select pg_temp.chk('tchT', 'read other teacher payouts',   'none',    'select * from public.teacher_payouts where teacher_id = {tpU}');
select pg_temp.chk('tchT', 'read app_settings',            'none',    'select * from public.app_settings');
select pg_temp.chk('tchT', 'upload own session file',      'allowed', 'insert into storage.objects (bucket_id, name) values (''session-notes-pdfs'', ''shared/'' || {s1} || ''/x.pdf'')');
select pg_temp.chk('tchT', 'upload foreign session file',  'denied',  'insert into storage.objects (bucket_id, name) values (''session-notes-pdfs'', ''shared/'' || {s2} || ''/x.pdf'')');

-- ─── pending teacher P ───
select pg_temp.chk('tchP', 'self-approve',                 'denied',  'update public.teacher_profiles set status = ''approved'' where id = {tpP}');

-- ─── admin ───
select pg_temp.chk('admin', 'read all student_profiles',   'allowed', 'select 1 from public.student_profiles where id in ({spA}, {spB}) having count(*) = 2');
select pg_temp.chk('admin', 'read all teacher_profiles',   'allowed', 'select 1 from public.teacher_profiles where id in ({tpT}, {tpU}, {tpP}) having count(*) = 3');
select pg_temp.chk('admin', 'read all enrollments',        'allowed', 'select 1 from public.enrollments where cohort_id in ({c1}, {c2}) having count(*) = 2');
select pg_temp.chk('admin', 'read app_settings',           'allowed', 'select * from public.app_settings');
select pg_temp.chk('admin', 'read webhook_logs',           'allowed', 'select * from public.webhook_logs');
select pg_temp.chk('admin', 'approve teacher',             'allowed', 'update public.teacher_profiles set status = ''approved'' where id = {tpP}');
select pg_temp.chk('admin', 'set student tier',            'allowed', 'update public.student_profiles set tier = ''focused'' where id = {spA}');
select pg_temp.chk('admin', 'insert cohort',               'allowed', 'insert into public.cohorts (teacher_id, language, level, goal_track, tier) values ({tpT}, ''Spanish'', ''A2'', ''foundations'', ''community'')');
select pg_temp.chk('admin', 'read ai spend view',          'none',    'select * from public.v_ai_spend_daily where day > current_date + 1');
select pg_temp.chk('admin', 'rpc increment (server only)', 'denied',  'select public.increment_enrollment({c1})');

-- ─── Phase 2 guards ───
-- student A
select pg_temp.chk('stuA', 'save own settings',            'allowed', 'update public.student_profiles set timezone = ''Europe/Madrid'', preferred_days = ''{1,3}'', preferred_time_start = ''09:00'', preferred_time_end = ''12:00'', waitlist_opt_in = true where id = {spA}');
select pg_temp.chk('stuA', 'unknown time zone',            'error',   'update public.student_profiles set timezone = ''Mars/Base_One'' where id = {spA}');
select pg_temp.chk('stuA', 'markup in own name',           'error',   'update public.student_profiles set full_name = ''<img src=x onerror=alert(1)>'' where id = {spA}');
select pg_temp.chk('stuA', 'markup in own language',       'error',   'update public.student_profiles set language = ''<b>Spanish</b>'' where id = {spA}');
select pg_temp.chk('stuA', 'change own created_at',        'error',   'update public.student_profiles set created_at = now() - interval ''1 year'' where id = {spA}');
select pg_temp.chk('stuA', 'self-upgrade tier (guard)',    'error',   'update public.student_profiles set tier = ''private'' where id = {spA}');
select pg_temp.chk('stuA', 'file a teacher application',   'error',   'insert into public.teacher_profiles (user_id, full_name) values ({stuA}, ''Sneaky'')');
select pg_temp.chk('stuA', 'insert session_credits',       'denied',  'insert into public.session_credits (student_id, credits, source) values ({spA}, 10, ''free'')');
select pg_temp.chk('stuA', 'waitlist on closed cohort',    'error',   'insert into public.cohort_waitlist (cohort_id, student_id) values ({c2}, {spA})');
select pg_temp.chk('stuA', 'waitlist other language',      'error',   'insert into public.cohort_waitlist (cohort_id, student_id) values ({cDe}, {spA})');
select pg_temp.chk('stuA', 'waitlist row for student B',   'error',   'insert into public.cohort_waitlist (cohort_id, student_id) values ({cFull}, {spB})');
select pg_temp.chk('stuA', 'delete own session file',      'allowed', 'delete from storage.objects where name = ''shared/'' || {s1} || ''/rls-a.pdf''');
select pg_temp.chk('stuA', 'move own review to stranger',  'denied',  'update public.teacher_reviews set teacher_id = {tpU} where student_id = {spA}');

select pg_temp.chk('stuA', 'self-grade own submission',    'error',   'update public.assignment_submissions set status = ''graded'', score = 100 where id = {sub1}');
select pg_temp.chk('stuA', 'submit to other cohort',       'error',   'insert into public.assignment_submissions (assignment_id, student_id, submission_text) values ({a2}, {spA}, ''x'')');
select pg_temp.chk('stuA', 'exercise result for B',        'error',   'insert into public.exercise_results (student_id, category, score) values ({spB}, ''grammar'', 100)');
select pg_temp.chk('stuA', 'delete B''s waitlist row',     'none',    'delete from public.cohort_waitlist where student_id = {spB}');
select pg_temp.chk('stuA', 'read other session''s files',  'none',    'select * from storage.objects where name like ''shared/'' || {s2} || ''/%''');
select pg_temp.chk('stuA', 'upcoming sessions of c2',      'none',    'select * from public.v_upcoming_sessions where cohort_id = {c2}');
select pg_temp.chk('stuA', 'active enrollments of others', 'none',    'select * from public.v_active_enrollments where student_id = {spB}');
select pg_temp.chk('tchT', 'edit student submission text', 'error',   'update public.assignment_submissions set submission_text = ''changed'' where id = {sub1}');
select pg_temp.chk('tchT', 'grade own student',            'allowed', 'update public.assignment_submissions set status = ''graded'', score = 80 where id = {sub1}');
select pg_temp.chk('tchT', 'availability for teacher U',   'error',   'insert into public.teacher_availability (teacher_id, day_of_week, start_time, end_time) values ({tpU}, 1, ''09:00'', ''10:00'')');
select pg_temp.chk('tchT', 'read U''s student feedback',   'none',    'select * from public.student_feedback where student_id = {spB}');

-- student C: no subscription
select pg_temp.chk('stuC', 'waitlist without subscription', 'error',  'insert into public.cohort_waitlist (cohort_id, student_id) values ({cFull}, {spC})');

-- new student N: first profile insert (signup)
select pg_temp.chk('stuN', 'signup forces unpaid tier',    'allowed', 'with i as (insert into public.student_profiles (user_id, full_name, language, level, goal_track, tier, stripe_subscription_status, stripe_subscription_id, stripe_customer_id) values ({stuN}, ''New'', ''Spanish'', ''A1'', ''foundations'', ''private'', ''active'', ''sub_x'', ''cus_x'') returning tier, stripe_subscription_status, stripe_subscription_id, stripe_customer_id) select * from i where tier = ''waitlist'' and stripe_subscription_status is null and stripe_subscription_id is null and stripe_customer_id is null');
select pg_temp.chk('stuN', 'signup keeps founding_member', 'allowed', 'with i as (insert into public.student_profiles (user_id, full_name, language, level, goal_track, tier) values ({stuN}, ''New'', ''Italian'', ''A1'', ''foundations'', ''founding_member'') returning tier) select * from i where tier = ''founding_member''');

-- teacher T: trust fields are admin-only
select pg_temp.chk('tchT', 'inflate sessions_delivered',   'error',   'update public.teacher_profiles set sessions_delivered = 5000 where id = {tpT}');
select pg_temp.chk('tchT', 'self-award badges',            'error',   'update public.teacher_profiles set badges = ''{Verified}'' where id = {tpT}');
select pg_temp.chk('tchT', 'edit experience_years',        'error',   'update public.teacher_profiles set experience_years = 30 where id = {tpT}');
select pg_temp.chk('tchT', 'edit languages after review',  'error',   'update public.teacher_profiles set languages = ''{German}'' where id = {tpT}');
select pg_temp.chk('tchT', 'edit own bio',                 'allowed', 'update public.teacher_profiles set bio = ''Teaching since 2010'', specialty = ''Grammar'' where id = {tpT}');
select pg_temp.chk('tchT', 'markup in own location',       'error',   'update public.teacher_profiles set location = ''<script>x</script>'' where id = {tpT}');
select pg_temp.chk('tchT', 'markup in own name',           'error',   'update public.teacher_profiles set full_name = ''<b>T</b>'' where id = {tpT}');
select pg_temp.chk('tchT', 'change session created_at',    'error',   'update public.sessions set created_at = now() - interval ''1 day'' where id = {s1}');
select pg_temp.chk('tchT', 'delete a student''s file',     'none',    'delete from storage.objects where name = ''shared/'' || {s1} || ''/rls-a.pdf''');
select pg_temp.chk('tchT', 'grade foreign submission',     'none',    'update public.assignment_submissions set score = 1 where student_id = {spB}');

-- new teacher N: application insert resets admin and trust fields
select pg_temp.chk('tchN', 'application resets trust fields', 'allowed', 'with i as (insert into public.teacher_profiles (user_id, full_name, languages, experience_years, status, sessions_delivered, badges, rating, hourly_rate, tier_level) values ({tchN}, ''New T'', ''{Spanish}'', 99, ''approved'', 999, ''{Verified}'', 5, 99, ''intensive'') returning status, sessions_delivered, badges, experience_years, rating, hourly_rate, tier_level) select * from i where status = ''pending'' and sessions_delivered = 0 and badges is null and experience_years = 60 and rating = 0 and hourly_rate = 22 and tier_level = ''community''');

-- suspended teacher S (teaches c3): no teacher powers left
select pg_temp.chk('tchS', 'read own profile',             'allowed', 'select * from public.teacher_profiles where id = {tpS}');
select pg_temp.chk('tchS', 'read own payouts',             'allowed', 'select * from public.teacher_payouts where teacher_id = {tpS}');
select pg_temp.chk('tchS', 'read enrolled student',        'none',    'select * from public.student_profiles where id = {spC}');
select pg_temp.chk('tchS', 'read cohort enrollments',      'none',    'select * from public.enrollments where cohort_id = {c3}');
select pg_temp.chk('tchS', 'read cohort sessions',         'none',    'select * from public.sessions where cohort_id = {c3}');
select pg_temp.chk('tchS', 'classmates of own cohort',     'none',    'select * from public.cohort_classmates({c3})');
select pg_temp.chk('tchS', 'cancel own session',           'denied',  'update public.sessions set status = ''cancelled'' where id = {s3}');
select pg_temp.chk('tchS', 'write session notes',          'error',   'insert into public.session_notes (session_id, grammar_focus) values ({s3}, ''x'')');
select pg_temp.chk('tchS', 'feedback to own student',      'error',   'insert into public.student_feedback (student_id, teacher_id, feedback_text) values ({spC}, {tpS}, ''x'')');
select pg_temp.chk('tchS', 'create assignment',            'error',   'insert into public.assignments (cohort_id, teacher_id, title, prompt) values ({c3}, {tpS}, ''x'', ''x'')');
select pg_temp.chk('tchS', 'upload session file',          'error',   'insert into storage.objects (bucket_id, name) values (''session-notes-pdfs'', ''shared/'' || {s3} || ''/x.pdf'')');

-- admin: integrity constraints still apply
select pg_temp.chk('admin', 'second active enrollment',    'error',   'insert into public.enrollments (student_id, cohort_id, status) values ({spA}, {c2}, ''active'')');
select pg_temp.chk('admin', 'duplicate checkout credit',   'error',   'insert into public.session_credits (student_id, credits, source, stripe_session_id) values ({spA}, 1, ''t'', ''cs_rls_dup''), ({spA}, 1, ''t'', ''cs_rls_dup'')');
select pg_temp.chk('admin', 'cohort with bad time zone',   'error',   'insert into public.cohorts (teacher_id, language, level, goal_track, tier, timezone) values ({tpT}, ''Spanish'', ''B1'', ''foundations'', ''community'', ''<img src=x>'')');

-- ─── signup trigger (runs as the auth service, i.e. the table owner) ───
insert into rls_ids values ('newT', gen_random_uuid()), ('newX', gen_random_uuid());
insert into auth.users (id, email, raw_user_meta_data) values
  (pg_temp.id('newT'), 'newT@example.invalid', '{"role":"teacher"}'),
  (pg_temp.id('newX'), 'newX@example.invalid', '{"role":"admin"}');
insert into rls_results (actor, test, expect, got, ok)
select 'signup', 'teacher signup → app role teacher', 'teacher', raw_app_meta_data ->> 'role', raw_app_meta_data ->> 'role' = 'teacher'
from auth.users where id = pg_temp.id('newT')
union all
select 'signup', 'admin signup → app role student', 'student', raw_app_meta_data ->> 'role', raw_app_meta_data ->> 'role' = 'student'
from auth.users where id = pg_temp.id('newX');

-- Pre-set app role is never overwritten by the signup trigger.
insert into rls_ids values ('newP', gen_random_uuid());
insert into auth.users (id, email, raw_app_meta_data, raw_user_meta_data) values
  (pg_temp.id('newP'), 'newP@example.invalid', '{"role":"teacher"}', '{"role":"student"}');
insert into rls_results (actor, test, expect, got, ok)
select 'signup', 'preset app role kept', 'teacher', raw_app_meta_data ->> 'role', raw_app_meta_data ->> 'role' = 'teacher'
from auth.users where id = pg_temp.id('newP');

-- ─── owner-level checks ───
-- SQL-11: moving a review recomputes both teachers' ratings.
insert into public.teacher_reviews (teacher_id, student_id, rating) values (pg_temp.id('tpT'), pg_temp.id('spA'), 1);
update public.teacher_reviews set teacher_id = pg_temp.id('tpU') where student_id = pg_temp.id('spA');
insert into rls_results (actor, test, expect, got, ok)
select 'owner', 'moved review: old teacher rating reset', '0 / 1',
       (select rating from public.teacher_profiles where id = pg_temp.id('tpT'))::text || ' / ' ||
       (select rating from public.teacher_profiles where id = pg_temp.id('tpU'))::text,
       (select rating from public.teacher_profiles where id = pg_temp.id('tpT')) = 0
       and (select rating from public.teacher_profiles where id = pg_temp.id('tpU')) = 1;

-- SQL-12: no active content types in the classroom bucket.
insert into rls_results (actor, test, expect, got, ok)
select 'owner', 'bucket MIME allow-list', 'set, no html/svg', coalesce(array_to_string(allowed_mime_types, ','), 'null'),
       allowed_mime_types is not null
       and not (allowed_mime_types && array['text/html', 'image/svg+xml', 'application/xhtml+xml'])
from storage.buckets where id = 'session-notes-pdfs';

-- Functions clients can execute must match the allow-list.
insert into rls_results (actor, test, expect, got, ok, detail)
select 'grants', 'authenticated EXECUTE allow-list', 'no extras', coalesce(string_agg(fn, ', '), 'no extras'), count(*) = 0, string_agg(fn, ', ')
from (
  select p.proname as fn
  from pg_proc p join pg_namespace n on n.oid = p.pronamespace
  where n.nspname = 'public'
    and not exists (select 1 from pg_depend d where d.objid = p.oid and d.deptype = 'e')
    and has_function_privilege('authenticated', p.oid, 'execute')
    and p.proname not in ('is_admin', 'my_student_profile_id', 'my_teacher_profile_id', 'my_own_teacher_profile_id',
                          'is_enrolled_in', 'teaches_cohort', 'teaches_student', 'teaches_session', 'attends_session',
                          'was_taught_by', 'can_use_session_files', 'cohort_classmates', 'can_join_waitlist',
                          'is_client_write', 'public_teacher_rows', 'teacher_public')
) x;
insert into rls_results (actor, test, expect, got, ok, detail)
select 'grants', 'anon EXECUTE allow-list', 'no extras', coalesce(string_agg(fn, ', '), 'no extras'), count(*) = 0, string_agg(fn, ', ')
from (
  select p.proname as fn
  from pg_proc p join pg_namespace n on n.oid = p.pronamespace
  where n.nspname = 'public'
    and not exists (select 1 from pg_depend d where d.objid = p.oid and d.deptype = 'e')
    and has_function_privilege('anon', p.oid, 'execute')
    and p.proname not in ('is_client_write', 'public_teacher_rows', 'teacher_public')
) x;

-- ─── Report ───
select n, actor, test, expect, got, rows, case when ok then 'PASS' else 'FAIL' end as result, detail
from rls_results order by ok, n;

select count(*) filter (where ok) as passed, count(*) filter (where not ok) as failed from rls_results;

do $$
declare f int;
begin
  select count(*) into f from rls_results where not ok;
  if f > 0 then raise exception '% RLS check(s) failed — see the report above', f; end if;
end $$;

rollback;
