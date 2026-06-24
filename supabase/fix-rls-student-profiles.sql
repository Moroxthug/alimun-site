-- ============================================================
--  ALIMUN — Fix: Infinite recursion in student_profiles RLS
--  Run this in: Supabase Dashboard → SQL Editor → New query
--
--  Root cause: a policy on student_profiles was querying
--  student_profiles itself (e.g. to check a role or status),
--  causing PostgreSQL to recurse infinitely.
--
--  Fix: drop all existing policies and replace with simple,
--  non-recursive policies that only use auth.uid().
-- ============================================================

-- ── 1. Drop every existing policy on student_profiles ────────
DO $$
DECLARE
  pol RECORD;
BEGIN
  FOR pol IN
    SELECT policyname
    FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'student_profiles'
  LOOP
    EXECUTE format(
      'DROP POLICY IF EXISTS %I ON public.student_profiles',
      pol.policyname
    );
  END LOOP;
END
$$;

-- ── 2. Make sure RLS is ON ───────────────────────────────────
ALTER TABLE public.student_profiles ENABLE ROW LEVEL SECURITY;

-- ── 3. Students can insert their own profile ─────────────────
--  Only fires for the row being inserted — no table scan.
CREATE POLICY "student_profiles_insert_own"
ON public.student_profiles
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- ── 4. Students can read their own profile ───────────────────
CREATE POLICY "student_profiles_select_own"
ON public.student_profiles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- ── 5. Students can update their own profile ─────────────────
CREATE POLICY "student_profiles_update_own"
ON public.student_profiles
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- ── 6. Service role bypasses RLS (Vercel serverless functions) ─
--  The service role key already bypasses RLS by design in
--  Supabase — no extra policy needed. This comment is here
--  for documentation purposes only.

-- ── 7. Verify the new policies ───────────────────────────────
SELECT policyname, cmd, roles, qual, with_check
FROM pg_policies
WHERE schemaname = 'public' AND tablename = 'student_profiles'
ORDER BY policyname;
