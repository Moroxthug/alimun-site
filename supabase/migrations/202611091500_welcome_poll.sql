-- Welcome poll (owner, 9 Nov 2026): every student, existing and new, is asked once in the dashboard where they are
-- from, how they like to be taught, how confident they feel, what they would like from Alimun and what they think of
-- the Tutor. Finishing it adds 10 minutes of tutor time (a credit lot that never expires, ledger reason 'admin' with
-- the note 'Welcome poll'), once per student.
-- Students read their own row; nothing is written from the browser except through submit_welcome_poll. Admins read
-- everything (Admin, Activity). Idempotent.

-- 1. The answers
create table if not exists public.welcome_poll (
  student_id uuid primary key references public.student_profiles(id) on delete cascade,
  answers jsonb not null check (jsonb_typeof(answers) = 'object' and pg_column_size(answers) <= 8192),
  seconds_added integer not null default 0,
  created_at timestamptz not null default now()
);

alter table public.welcome_poll enable row level security;
drop policy if exists welcome_poll_read on public.welcome_poll;
create policy welcome_poll_read on public.welcome_poll for select to authenticated
  using (public.is_admin() or student_id = public.my_student_profile_id());
revoke all on public.welcome_poll from anon;
revoke insert, update, delete, truncate on public.welcome_poll from authenticated;
grant select on public.welcome_poll to authenticated;

-- 2. Saving the answers: only the known questions are kept (unknown keys are dropped, text is cut to 600 characters),
--    the row is written once, and the first time the 10 minutes are added. Returns the seconds added (0 when the poll
--    was already answered).
create or replace function public.submit_welcome_poll(p_answers jsonb)
 returns integer
 language plpgsql
 security definer
 set search_path to ''
as $$
declare
  v_student uuid := public.my_student_profile_id();
  v_clean jsonb;
  v_added integer := 0;
begin
  if v_student is null then raise exception 'no student profile' using errcode = '42501'; end if;
  if p_answers is null or jsonb_typeof(p_answers) <> 'object' or pg_column_size(p_answers) > 16384 then
    raise exception 'bad answers' using errcode = '22023';
  end if;
  select coalesce(jsonb_object_agg(k, case when jsonb_typeof(v) = 'string' then to_jsonb(left(v #>> '{}', 600))
                                           when jsonb_typeof(v) = 'array' then (select coalesce(jsonb_agg(left(x, 40)), '[]'::jsonb)
                                                                               from (select jsonb_array_elements_text(v) x limit 8) a)
                                           else 'null'::jsonb end), '{}'::jsonb)
    into v_clean
    from jsonb_each(p_answers) e(k, v)
    where k in ('from', 'explain', 'teacher', 'confidence', 'hardest', 'prefer', 'time', 'tutor', 'tutor_note', 'note', 'lang');
  insert into public.welcome_poll (student_id, answers) values (v_student, v_clean) on conflict (student_id) do nothing;
  if found then
    v_added := public.tutor_add_credit(v_student, 600, 'admin', null, 'Welcome poll', null);
    update public.welcome_poll set seconds_added = v_added where student_id = v_student;
  end if;
  return v_added;
end;
$$;
revoke all on function public.submit_welcome_poll(jsonb) from public, anon;
grant execute on function public.submit_welcome_poll(jsonb) to authenticated;

-- Verify
select (select count(*) from public.welcome_poll) as answered,
       (select relrowsecurity from pg_class where oid = 'public.welcome_poll'::regclass) as rls_on,
       has_function_privilege('anon', 'public.submit_welcome_poll(jsonb)', 'execute') as anon_can_submit,
       has_function_privilege('authenticated', 'public.submit_welcome_poll(jsonb)', 'execute') as students_can_submit;
