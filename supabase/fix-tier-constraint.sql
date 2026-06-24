-- ============================================================
--  ALIMUN — Fix: student_profiles tier CHECK constraint
--  Run this in: Supabase Dashboard → SQL Editor → New query
--
--  Adds 'waitlist' and 'founding_member' to the allowed tier
--  values so that the new language-routing flow can insert rows.
-- ============================================================

-- ── 1. Find and drop the existing tier check constraint ──────
DO $$
DECLARE
  con_name text;
BEGIN
  SELECT conname INTO con_name
  FROM pg_constraint
  WHERE conrelid = 'public.student_profiles'::regclass
    AND contype  = 'c'                        -- CHECK constraint
    AND pg_get_constraintdef(oid) LIKE '%tier%';

  IF con_name IS NOT NULL THEN
    EXECUTE format('ALTER TABLE public.student_profiles DROP CONSTRAINT %I', con_name);
    RAISE NOTICE 'Dropped constraint: %', con_name;
  ELSE
    RAISE NOTICE 'No tier check constraint found — nothing to drop.';
  END IF;
END
$$;

-- ── 2. Add the new, expanded constraint ─────────────────────
ALTER TABLE public.student_profiles
  ADD CONSTRAINT student_profiles_tier_check
  CHECK (tier IN (
    -- Live tiers (go to Stripe checkout)
    'community',
    'focused',
    'intensive',
    'onetoone',
    'private',
    -- Legacy alias kept for safety
    'daily',
    -- Coming-soon language paths
    'waitlist',
    'founding_member'
  ));

-- ── 3. Verify ────────────────────────────────────────────────
SELECT conname, pg_get_constraintdef(oid) AS definition
FROM pg_constraint
WHERE conrelid = 'public.student_profiles'::regclass
  AND contype  = 'c';
