-- ============================================================
--  ALIMUN — Cohort Waitlist and Scarcity Database Migration
--  Run this in: Supabase Dashboard → SQL Editor
-- ============================================================

-- ── 1. Update cohort_waitlist table ─────────────────────────
alter table public.cohort_waitlist
  add column if not exists offered_at timestamptz default null,
  add column if not exists offer_expires_at timestamptz default null;

-- ── 2. Create app_settings table ─────────────────────────────
create table if not exists public.app_settings (
  key text primary key,
  value text not null
);

-- Enable RLS for app_settings
alter table public.app_settings enable row level security;

-- Admin Policy for app_settings
create policy "admin_all_app_settings"
  on public.app_settings for all
  to authenticated
  using (public.is_admin());

-- Insert default app settings (can be updated via dashboard/SQL editor)
insert into public.app_settings (key, value)
values 
  ('api_url', 'http://localhost:3000'),
  ('admin_secret', 'secret123')
on conflict (key) do nothing;

-- ── 3. Create Atomic Increment function (RPC) ────────────────
create or replace function public.increment_enrollment(cohort_id uuid)
returns int
language plpgsql
security definer
as $$
declare
  new_count int;
begin
  update public.cohorts
  set enrolled_count = enrolled_count + 1
  where id = cohort_id and enrolled_count < max_students
  returning enrolled_count into new_count;

  return new_count;
end;
$$;

-- ── 4. Modify sync_cohort_enrolled_count Trigger ────────────
create or replace function public.sync_cohort_enrolled_count()
returns trigger language plpgsql as $$
begin
  if (TG_OP = 'UPDATE') then
    -- switched active to cancelled
    if (old.status = 'active' and new.status = 'cancelled') then
      update public.cohorts
      set enrolled_count = greatest(enrolled_count - 1, 0)
      where id = new.cohort_id;
    -- switched cancelled to active
    elsif (old.status = 'cancelled' and new.status = 'active') then
      update public.cohorts
      set enrolled_count = enrolled_count + 1
      where id = new.cohort_id;
    end if;

  elsif (TG_OP = 'DELETE' and old.status = 'active') then
    update public.cohorts
    set enrolled_count = greatest(enrolled_count - 1, 0)
    where id = old.cohort_id;
  end if;

  return coalesce(new, old);
end;
$$;

-- ── 5. Modify auto_close_full_cohort trigger function ───────
create or replace function public.auto_close_full_cohort()
returns trigger language plpgsql as $$
declare
  has_waitlist boolean;
begin
  if new.enrolled_count >= new.max_students and new.status = 'open' then
    new.status = 'full';
  elsif new.enrolled_count < new.max_students and new.status = 'full' then
    -- Check if anyone is currently waiting on the waitlist for this cohort
    select exists(
      select 1 from public.cohort_waitlist where cohort_id = new.id
    ) into has_waitlist;
    
    -- If there's no waitlist, set status back to open
    -- Otherwise, keep status as full because the spot is reserved for waitlist offers
    if not has_waitlist then
      new.status = 'open';
    end if;
  end if;
  return new;
end;
$$;

-- ── 6. Create trigger to process open spot and offer to waitlist ─
create or replace function public.process_opened_spot()
returns trigger language plpgsql as $$
declare
  next_waitlist_id uuid;
  next_student_id uuid;
  api_url_setting text;
  admin_secret_setting text;
begin
  -- Trigger check: spot opens up and enrolled_count decreases below max_students
  if new.enrolled_count < old.enrolled_count and new.enrolled_count < new.max_students then
    -- Fetch first waitlisted student who hasn't been offered a spot yet
    select id, student_id
    into next_waitlist_id, next_student_id
    from public.cohort_waitlist
    where cohort_id = new.id and offered_at is null
    order by added_at asc
    limit 1;

    if next_waitlist_id is not null then
      -- Lock waitlist entry and start the 48-hour countdown offer
      update public.cohort_waitlist
      set offered_at = now(),
          offer_expires_at = now() + interval '48 hours'
      where id = next_waitlist_id;

      -- Retrieve settings
      select value into api_url_setting from public.app_settings where key = 'api_url';
      select value into admin_secret_setting from public.app_settings where key = 'admin_secret';

      -- Send HTTP Request to serverless API via pg_net (async http request)
      perform net.http_post(
        url := coalesce(api_url_setting, 'https://alimun.com') || '/api/waitlist/send-offer',
        headers := jsonb_build_object(
          'Content-Type', 'application/json',
          'Authorization', 'Bearer ' || coalesce(admin_secret_setting, '')
        ),
        body := jsonb_build_object(
          'waitlist_id', next_waitlist_id,
          'cohort_id', new.id,
          'student_id', next_student_id
        )
      );
    end if;
  end if;
  return new;
end;
$$;

-- Create the cohorts spot-opening trigger
drop trigger if exists trg_process_opened_spot on public.cohorts;
create trigger trg_process_opened_spot
  after update of enrolled_count
  on public.cohorts
  for each row execute function public.process_opened_spot();

-- ── 7. Create function to expire old offers and cycle waitlist ───
create or replace function public.process_expired_offers()
returns jsonb
language plpgsql
security definer
as $$
declare
  expired_rec record;
  next_waitlist_id uuid;
  next_student_id uuid;
  current_enrolled_count int;
  current_max_students int;
  cohort_status text;
  api_url_setting text;
  admin_secret_setting text;
  processed_count int := 0;
begin
  -- Fetch settings
  select value into api_url_setting from public.app_settings where key = 'api_url';
  select value into admin_secret_setting from public.app_settings where key = 'admin_secret';

  for expired_rec in
    select id, cohort_id, student_id
    from public.cohort_waitlist
    where offer_expires_at < now()
  loop
    -- Delete the expired waitlist entry
    delete from public.cohort_waitlist where id = expired_rec.id;
    processed_count := processed_count + 1;

    -- Fetch current cohort metrics
    select enrolled_count, max_students, status
    into current_enrolled_count, current_max_students, cohort_status
    from public.cohorts
    where id = expired_rec.cohort_id;

    -- If there's still a free spot, offer it to the next student
    if current_enrolled_count < current_max_students then
      select id, student_id
      into next_waitlist_id, next_student_id
      from public.cohort_waitlist
      where cohort_id = expired_rec.cohort_id and offered_at is null
      order by added_at asc
      limit 1;

      if next_waitlist_id is not null then
        update public.cohort_waitlist
        set offered_at = now(),
            offer_expires_at = now() + interval '48 hours'
        where id = next_waitlist_id;

        perform net.http_post(
          url := coalesce(api_url_setting, 'https://alimun.com') || '/api/waitlist/send-offer',
          headers := jsonb_build_object(
            'Content-Type', 'application/json',
            'Authorization', 'Bearer ' || coalesce(admin_secret_setting, '')
          ),
          body := jsonb_build_object(
            'waitlist_id', next_waitlist_id,
            'cohort_id', expired_rec.cohort_id,
            'student_id', next_student_id
          )
        );
      else
        -- No waitlisted students remaining. Re-open cohort if it was set to full.
        if cohort_status = 'full' then
          update public.cohorts
          set status = 'open'
          where id = expired_rec.cohort_id;
        end if;
      end if;
    end if;
  end loop;

  return jsonb_build_object('expired_offers_removed', processed_count);
end;
$$;
