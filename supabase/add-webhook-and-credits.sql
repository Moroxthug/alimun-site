-- ============================================================
--  ALIMUN — Add webhook_logs and session_credits Tables
--  Run this in: Supabase Dashboard → SQL Editor → New query
-- ============================================================

-- ── 1. Create webhook_logs Table ─────────────────────────────
create table if not exists public.webhook_logs (
  id             uuid primary key default uuid_generate_v4(),
  event_id       text not null unique,
  event_type     text not null,
  payload        jsonb not null,
  status         text not null default 'pending'
                   check (status in ('pending', 'processed', 'failed')),
  error_message  text,
  created_at     timestamptz not null default now()
);

-- Enable RLS
alter table public.webhook_logs enable row level security;

-- Admin Policy
create policy "admin_all_webhook_logs"
  on public.webhook_logs for all
  to authenticated
  using (public.is_admin());

-- Index for querying logs by event_id / event_type
create index if not exists idx_webhook_logs_event_id
  on public.webhook_logs(event_id);
create index if not exists idx_webhook_logs_created_at
  on public.webhook_logs(created_at desc);


-- ── 2. Create session_credits Table ──────────────────────────
create table if not exists public.session_credits (
  id                 uuid primary key default uuid_generate_v4(),
  student_id         uuid not null references public.student_profiles(id) on delete cascade,
  credits            int not null default 1
                       check (credits >= 0),
  source             text not null,
  stripe_session_id  text,
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now()
);

-- Enable RLS
alter table public.session_credits enable row level security;

-- Student Policy: read own credits
create policy "students_select_own_credits"
  on public.session_credits for select
  to authenticated
  using (
    exists (
      select 1 from public.student_profiles sp
      where sp.id = session_credits.student_id
        and sp.user_id = auth.uid()
    )
  );

-- Admin Policy
create policy "admin_all_session_credits"
  on public.session_credits for all
  to authenticated
  using (public.is_admin());

-- Index for searching credits by student
create index if not exists idx_session_credits_student_id
  on public.session_credits(student_id);

-- Trigger for auto-updating updated_at
create trigger trg_session_credits_updated
  before update on public.session_credits
  for each row execute function public.set_updated_at();
