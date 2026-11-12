-- Room planning (docs/LAUNCH_PRICING_SPEC.md section 7: "60 days before, teachers say which slots they can teach").
-- Teachers give the start dates, products, levels, days and time they can teach, and whether they can be a substitute
-- (room_availability). Learners who find no room at their level ask to be told when one opens (room_interest).
-- The daily room job (api/_lib/rooms.js suggestRooms) puts the two together into suggested rooms (room_proposals) that
-- the owner approves or dismisses in Admin → Classes → Rooms; an approved suggestion becomes a draft room and follows
-- the usual timeline. All writes go through api/pricing.js with the service role; browsers only read their own rows
-- (learners their interest) and admins read everything. No foreign key from these tables to cohorts, and none from
-- room_proposals to teacher_profiles: extra paths between cohorts and teacher_profiles make PostgREST embeds ambiguous
-- (the incident of 12 Nov 2026). The server checks those ids. Idempotent; ends with a verify query.

create table if not exists public.room_availability (
  id            uuid primary key default gen_random_uuid(),
  teacher_id    uuid not null references public.teacher_profiles (id) on delete cascade,
  starts_on     date not null,
  kinds         text[] not null check (cardinality(kinds) > 0 and kinds <@ array['level_pack', 'exam_pack', 'open_class', 'help_class']),
  language      text not null check (language in ('English', 'German')),
  levels        text[] not null check (cardinality(levels) > 0 and levels <@ array['A1', 'A2', 'B1', 'B2', 'C1', 'C2']),
  days          text[] not null check (cardinality(days) between 1 and 7 and days <@ array['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']),
  schedule_time text not null check (schedule_time ~ '^([01][0-9]|2[0-3]):[0-5][0-9]$'),
  timezone      text not null check (timezone ~ '^[A-Za-z0-9_+/-]{1,64}$'),
  substitute    boolean not null default false,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);
create index if not exists room_availability_start_idx on public.room_availability (starts_on);
create index if not exists room_availability_teacher_idx on public.room_availability (teacher_id);

create table if not exists public.room_interest (
  user_id     uuid not null references auth.users (id) on delete cascade,
  product_key text not null references public.products (product_key),
  level       text check (level is null or level in ('A1', 'A2', 'B1', 'B2', 'C1', 'C2')),
  created_at  timestamptz not null default now(),
  notified_at timestamptz,
  primary key (user_id, product_key)
);
create index if not exists room_interest_product_idx on public.room_interest (product_key, level) where notified_at is null;

create table if not exists public.room_proposals (
  id                    uuid primary key default gen_random_uuid(),
  product_key           text not null references public.products (product_key),
  level                 text not null check (level in ('A1', 'A2', 'B1', 'B2', 'C1', 'C2')),
  starts_on             date not null,
  schedule_days         text[] not null,
  schedule_time         text not null,
  timezone              text not null,
  teacher_id            uuid not null,
  substitute_teacher_id uuid,
  demand                integer not null default 0,
  status                text not null default 'pending' check (status in ('pending', 'approved', 'dismissed')),
  cohort_id             uuid,
  created_at            timestamptz not null default now(),
  decided_at            timestamptz,
  unique (product_key, level, starts_on, schedule_time)
);

alter table public.room_availability enable row level security;
alter table public.room_interest enable row level security;
alter table public.room_proposals enable row level security;

drop policy if exists room_availability_admin_read on public.room_availability;
create policy room_availability_admin_read on public.room_availability for select to authenticated using ((select public.is_admin()));
drop policy if exists room_interest_read on public.room_interest;
create policy room_interest_read on public.room_interest for select to authenticated using (user_id = (select auth.uid()) or (select public.is_admin()));
drop policy if exists room_proposals_admin_read on public.room_proposals;
create policy room_proposals_admin_read on public.room_proposals for select to authenticated using ((select public.is_admin()));

revoke insert, update, delete on public.room_availability, public.room_interest, public.room_proposals from anon, authenticated;
revoke all on public.room_availability, public.room_interest, public.room_proposals from anon;

-- The demand a suggestion needs (learners asking plus room-less reservations at that level); the owner can change it.
insert into public.app_settings (key, value) values ('room_suggest_min', '5') on conflict (key) do nothing;

-- Verify: three tables with row level security, three policies, the setting.
select (select count(*) from pg_class c join pg_namespace n on n.oid = c.relnamespace where n.nspname = 'public'
          and c.relname in ('room_availability', 'room_interest', 'room_proposals') and c.relrowsecurity) as tables_with_rls,
       (select count(*) from pg_policies where schemaname = 'public'
          and policyname in ('room_availability_admin_read', 'room_interest_read', 'room_proposals_admin_read')) as policies,
       (select value from public.app_settings where key = 'room_suggest_min') as suggest_min;
