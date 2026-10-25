-- ============================================================
--  Messages (docs/DASHBOARD_PLAN.md, step 13).
--  Two kinds of conversation:
--    class  : one per class (cohort): its enrolled students and its teacher;
--    direct : a student and one of their class teachers.
--  Admins can read every conversation and hide a message (moderation).
--  Conversations are opened only through open_thread(), which checks who may
--  talk to whom; senders' names and roles are set by the database, never by
--  the browser (students show their first name only). A student or teacher
--  can send at most 20 messages a minute. Read marks per person give unread
--  counts (my_threads()).
--  Idempotent. Ends with a verify query.
-- ============================================================

create table if not exists public.message_threads (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('class', 'direct')),
  cohort_id uuid references public.cohorts(id) on delete cascade,
  student_id uuid references public.student_profiles(id) on delete cascade,
  teacher_id uuid references public.teacher_profiles(id) on delete cascade,
  last_message_at timestamptz,
  created_at timestamptz not null default now(),
  check ((kind = 'class' and cohort_id is not null and student_id is null and teacher_id is null)
      or (kind = 'direct' and cohort_id is null and student_id is not null and teacher_id is not null))
);
create unique index if not exists message_threads_class on public.message_threads (cohort_id) where kind = 'class';
create unique index if not exists message_threads_direct on public.message_threads (student_id, teacher_id) where kind = 'direct';

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  thread_id uuid not null references public.message_threads(id) on delete cascade,
  sender_user uuid not null default auth.uid(),
  sender_role text not null default 'student' check (sender_role in ('student', 'teacher', 'admin')),
  sender_name text not null default '',
  body text not null check (length(btrim(body)) between 1 and 4000),
  created_at timestamptz not null default now(),
  hidden_at timestamptz
);
create index if not exists messages_thread_time on public.messages (thread_id, created_at desc);
create index if not exists messages_sender_time on public.messages (sender_user, created_at desc);

create table if not exists public.message_reads (
  thread_id uuid not null references public.message_threads(id) on delete cascade,
  user_id uuid not null default auth.uid(),
  last_read_at timestamptz not null default now(),
  primary key (thread_id, user_id)
);

-- Who may see a conversation
create or replace function public.can_see_thread(p_thread uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.message_threads t
    where t.id = p_thread and (
      public.is_admin()
      or (t.kind = 'class' and (public.is_enrolled_in(t.cohort_id) or public.teaches_cohort(t.cohort_id)))
      or (t.kind = 'direct' and (t.student_id = public.my_student_profile_id() or t.teacher_id = public.my_teacher_profile_id()))
    )
  );
$$;

-- Opens (or finds) a conversation the caller is allowed to have; returns its id
create or replace function public.open_thread(p_kind text, p_cohort uuid default null, p_student uuid default null, p_teacher uuid default null)
returns uuid language plpgsql security definer set search_path = public as $$
declare
  v uuid;
  me_s uuid := public.my_student_profile_id();
  me_t uuid := public.my_teacher_profile_id();
begin
  if p_kind = 'class' then
    if p_cohort is null or not (public.is_admin() or public.is_enrolled_in(p_cohort) or public.teaches_cohort(p_cohort)) then
      raise exception 'not allowed' using errcode = '42501';
    end if;
    insert into public.message_threads (kind, cohort_id) values ('class', p_cohort) on conflict do nothing;
    select id into v from public.message_threads where kind = 'class' and cohort_id = p_cohort;
  elsif p_kind = 'direct' then
    if p_student is null then p_student := me_s; end if;
    if p_teacher is null then p_teacher := me_t; end if;
    if p_student is null or p_teacher is null or not (
      public.is_admin()
      or (p_student = me_s and exists (
            select 1 from public.enrollments e join public.cohorts c on c.id = e.cohort_id
            where e.student_id = me_s and e.status = 'active' and c.teacher_id = p_teacher))
      or (p_teacher = me_t and public.teaches_student(p_student))
    ) then
      raise exception 'not allowed' using errcode = '42501';
    end if;
    insert into public.message_threads (kind, student_id, teacher_id) values ('direct', p_student, p_teacher) on conflict do nothing;
    select id into v from public.message_threads where kind = 'direct' and student_id = p_student and teacher_id = p_teacher;
  else
    raise exception 'unknown kind' using errcode = '22023';
  end if;
  return v;
end;
$$;

-- The caller's conversations with their last message and unread count
create or replace function public.my_threads()
returns table (thread_id uuid, kind text, cohort_id uuid, student_id uuid, teacher_id uuid, last_message_at timestamptz,
               last_body text, last_sender text, last_role text, unread integer)
language sql stable security definer set search_path = public as $$
  select t.id, t.kind, t.cohort_id, t.student_id, t.teacher_id, t.last_message_at,
         lm.body, lm.sender_name, lm.sender_role,
         (select count(*)::int from public.messages m
           where m.thread_id = t.id and m.hidden_at is null and m.sender_user <> auth.uid()
             and m.created_at > coalesce((select r.last_read_at from public.message_reads r where r.thread_id = t.id and r.user_id = auth.uid()), '-infinity'::timestamptz))
  from public.message_threads t
  left join lateral (select m.body, m.sender_name, m.sender_role from public.messages m
                     where m.thread_id = t.id and m.hidden_at is null order by m.created_at desc limit 1) lm on true
  where public.can_see_thread(t.id)
  order by t.last_message_at desc nulls last;
$$;

-- Sender, name and time come from the database; 20 messages a minute at most
create or replace function public.messages_before_insert() returns trigger
language plpgsql security definer set search_path = public as $$
declare me_t uuid; v_name text;
begin
  new.sender_user := auth.uid();
  new.created_at := now();
  new.hidden_at := null;
  new.body := btrim(new.body);
  if new.sender_user is null then raise exception 'not signed in' using errcode = '42501'; end if;
  if (select count(*) from public.messages where sender_user = new.sender_user and created_at > now() - interval '1 minute') >= 20 then
    raise exception 'too many messages' using errcode = '54000';
  end if;
  if public.is_admin() then
    new.sender_role := 'admin'; new.sender_name := 'Alimun';
  else
    me_t := public.my_teacher_profile_id();
    if me_t is not null and exists (select 1 from public.message_threads t where t.id = new.thread_id and (t.teacher_id = me_t or (t.kind = 'class' and public.teaches_cohort(t.cohort_id)))) then
      select coalesce(nullif(btrim(full_name), ''), 'Teacher') into v_name from public.teacher_profiles where id = me_t;
      new.sender_role := 'teacher'; new.sender_name := v_name;
    else
      select coalesce(nullif(split_part(btrim(full_name), ' ', 1), ''), 'Student') into v_name from public.student_profiles where user_id = new.sender_user limit 1;
      new.sender_role := 'student'; new.sender_name := coalesce(v_name, 'Student');
    end if;
  end if;
  return new;
end;
$$;
drop trigger if exists trg_messages_before_insert on public.messages;
create trigger trg_messages_before_insert before insert on public.messages for each row execute function public.messages_before_insert();

create or replace function public.messages_after_insert() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  update public.message_threads set last_message_at = new.created_at where id = new.thread_id;
  insert into public.message_reads (thread_id, user_id, last_read_at) values (new.thread_id, new.sender_user, new.created_at)
    on conflict (thread_id, user_id) do update set last_read_at = greatest(public.message_reads.last_read_at, excluded.last_read_at);
  return null;
end;
$$;
drop trigger if exists trg_messages_after_insert on public.messages;
create trigger trg_messages_after_insert after insert on public.messages for each row execute function public.messages_after_insert();

-- Row-level security
alter table public.message_threads enable row level security;
alter table public.messages enable row level security;
alter table public.message_reads enable row level security;
revoke all on public.message_threads, public.messages, public.message_reads from anon;
grant select on public.message_threads to authenticated;
revoke insert, update, delete, truncate, references, trigger on public.message_threads from authenticated;
grant select, insert, update on public.messages to authenticated;
revoke delete, truncate, references, trigger on public.messages from authenticated;
grant select, insert, update on public.message_reads to authenticated;
revoke delete, truncate, references, trigger on public.message_reads from authenticated;

drop policy if exists message_threads_select on public.message_threads;
create policy message_threads_select on public.message_threads for select to authenticated using (public.can_see_thread(id));

drop policy if exists messages_select on public.messages;
create policy messages_select on public.messages for select to authenticated
  using (public.can_see_thread(thread_id) and (hidden_at is null or public.is_admin()));
drop policy if exists messages_insert on public.messages;
create policy messages_insert on public.messages for insert to authenticated
  with check (public.can_see_thread(thread_id));
drop policy if exists messages_update on public.messages;
create policy messages_update on public.messages for update to authenticated
  using (public.is_admin()) with check (public.is_admin());

drop policy if exists message_reads_select on public.message_reads;
create policy message_reads_select on public.message_reads for select to authenticated using (user_id = auth.uid());
drop policy if exists message_reads_insert on public.message_reads;
create policy message_reads_insert on public.message_reads for insert to authenticated
  with check (user_id = auth.uid() and public.can_see_thread(thread_id));
drop policy if exists message_reads_update on public.message_reads;
create policy message_reads_update on public.message_reads for update to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid() and public.can_see_thread(thread_id));

revoke all on function public.can_see_thread(uuid) from public, anon;
revoke all on function public.open_thread(text, uuid, uuid, uuid) from public, anon;
revoke all on function public.my_threads() from public, anon;
grant execute on function public.can_see_thread(uuid) to authenticated;
grant execute on function public.open_thread(text, uuid, uuid, uuid) to authenticated;
grant execute on function public.my_threads() to authenticated;

-- Verify
select c.relname, c.relrowsecurity as rls_on,
  (select count(*) from pg_policies p where p.schemaname = 'public' and p.tablename = c.relname) as policies
from pg_class c where c.oid in ('public.message_threads'::regclass, 'public.messages'::regclass, 'public.message_reads'::regclass);
