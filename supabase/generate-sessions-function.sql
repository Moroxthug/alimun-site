CREATE OR REPLACE FUNCTION public.generate_cohort_sessions(p_cohort_id UUID)
RETURNS INT
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_schedule_days TEXT[];
  v_schedule_time TIME;
  v_timezone TEXT;
  v_start_date DATE;
  v_current_date DATE;
  v_session_count INT := 0;
  v_day_name TEXT;
  v_scheduled_at TIMESTAMPTZ;
BEGIN
  -- 1. Fetch cohort details
  SELECT schedule_days, schedule_time, timezone
  INTO v_schedule_days, v_schedule_time, v_timezone
  FROM public.cohorts
  WHERE id = p_cohort_id;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Cohort with ID % not found', p_cohort_id;
  END IF;

  -- 2. Determine start date (tomorrow)
  v_start_date := current_date + 1;

  -- 3. Loop through each day in the 12-week range (84 days)
  FOR i IN 0..83 LOOP
    v_current_date := v_start_date + i;
    v_day_name := trim(to_char(v_current_date, 'Day'));

    -- Check if the day name matches any in schedule_days (case-insensitive)
    IF EXISTS (
      SELECT 1 FROM unnest(v_schedule_days) day
      WHERE lower(trim(day)) = lower(v_day_name)
    ) THEN
      -- Construct local timestamp and convert to UTC timestamptz
      v_scheduled_at := (v_current_date::text || ' ' || v_schedule_time::text)::timestamp AT TIME ZONE v_timezone;

      -- Insert session record
      INSERT INTO public.sessions (cohort_id, scheduled_at, status)
      VALUES (p_cohort_id, v_scheduled_at, 'scheduled');

      v_session_count := v_session_count + 1;
    END IF;
  END LOOP;

  RETURN v_session_count;
END;
$$;
