-- =============================================================
--  ALIMUN — Seed Data
--  File: seed.sql
--  Populates: 1 admin, 2 teachers, 3 cohorts, 5 students,
--             4 enrollments, 8 sessions, 2 session_notes
--
--  NOTE: auth.users rows are normally created via Supabase Auth.
--  For seeding in a local dev environment, we insert directly.
--  In production, create these users via the Supabase Auth API
--  and then run only the profile inserts below.
-- =============================================================

begin;

-- =============================================================
--  STEP 1 — auth.users  (local dev only)
--  Using a fixed salt so passwords are deterministic.
--  Password for all seed users: "AlimunDev2026!"
-- =============================================================

-- Admin
insert into auth.users (
  id,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  raw_app_meta_data,
  raw_user_meta_data,
  aud,
  confirmation_token,
  recovery_token
) values (
  '00000000-0000-0000-0000-000000000001',
  'admin@alimun.com',
  crypt('AlimunDev2026!', gen_salt('bf')),
  now(),
  now(),
  now(),
  '{"provider":"email","providers":["email"],"role":"admin"}',
  '{"full_name":"Alimun Admin","role":"admin"}',
  'authenticated',
  '',
  ''
) on conflict (id) do nothing;

-- Teacher 1 — Sofía Martínez (Spanish, French)
insert into auth.users (
  id,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  raw_app_meta_data,
  raw_user_meta_data,
  aud,
  confirmation_token,
  recovery_token
) values (
  '00000000-0000-0000-0000-000000000002',
  'sofia@alimun.com',
  crypt('AlimunDev2026!', gen_salt('bf')),
  now(),
  now() - interval '6 months',
  now(),
  '{"provider":"email","providers":["email"],"role":"teacher"}',
  '{"full_name":"Sofía Martínez","role":"teacher"}',
  'authenticated',
  '',
  ''
) on conflict (id) do nothing;

-- Teacher 2 — Lukas Bauer (German)
insert into auth.users (
  id,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  raw_app_meta_data,
  raw_user_meta_data,
  aud,
  confirmation_token,
  recovery_token
) values (
  '00000000-0000-0000-0000-000000000003',
  'lukas@alimun.com',
  crypt('AlimunDev2026!', gen_salt('bf')),
  now(),
  now() - interval '4 months',
  now(),
  '{"provider":"email","providers":["email"],"role":"teacher"}',
  '{"full_name":"Lukas Bauer","role":"teacher"}',
  'authenticated',
  '',
  ''
) on conflict (id) do nothing;

-- Student 1 — Aisha Ndiaye
insert into auth.users (
  id, email, encrypted_password, email_confirmed_at,
  created_at, updated_at, raw_app_meta_data, raw_user_meta_data,
  aud, confirmation_token, recovery_token
) values (
  '00000000-0000-0000-0000-000000000004',
  'aisha@example.com',
  crypt('AlimunDev2026!', gen_salt('bf')),
  now(), now() - interval '45 days', now(),
  '{"provider":"email","providers":["email"],"role":"student"}',
  '{"full_name":"Aisha Ndiaye","role":"student"}',
  'authenticated', '', ''
) on conflict (id) do nothing;

-- Student 2 — Marco Russo
insert into auth.users (
  id, email, encrypted_password, email_confirmed_at,
  created_at, updated_at, raw_app_meta_data, raw_user_meta_data,
  aud, confirmation_token, recovery_token
) values (
  '00000000-0000-0000-0000-000000000005',
  'marco@example.com',
  crypt('AlimunDev2026!', gen_salt('bf')),
  now(), now() - interval '30 days', now(),
  '{"provider":"email","providers":["email"],"role":"student"}',
  '{"full_name":"Marco Russo","role":"student"}',
  'authenticated', '', ''
) on conflict (id) do nothing;

-- Student 3 — Yuki Tanaka
insert into auth.users (
  id, email, encrypted_password, email_confirmed_at,
  created_at, updated_at, raw_app_meta_data, raw_user_meta_data,
  aud, confirmation_token, recovery_token
) values (
  '00000000-0000-0000-0000-000000000006',
  'yuki@example.com',
  crypt('AlimunDev2026!', gen_salt('bf')),
  now(), now() - interval '20 days', now(),
  '{"provider":"email","providers":["email"],"role":"student"}',
  '{"full_name":"Yuki Tanaka","role":"student"}',
  'authenticated', '', ''
) on conflict (id) do nothing;

-- Student 4 — Omar Al-Farsi
insert into auth.users (
  id, email, encrypted_password, email_confirmed_at,
  created_at, updated_at, raw_app_meta_data, raw_user_meta_data,
  aud, confirmation_token, recovery_token
) values (
  '00000000-0000-0000-0000-000000000007',
  'omar@example.com',
  crypt('AlimunDev2026!', gen_salt('bf')),
  now(), now() - interval '15 days', now(),
  '{"provider":"email","providers":["email"],"role":"student"}',
  '{"full_name":"Omar Al-Farsi","role":"student"}',
  'authenticated', '', ''
) on conflict (id) do nothing;

-- Student 5 — Camille Dubois
insert into auth.users (
  id, email, encrypted_password, email_confirmed_at,
  created_at, updated_at, raw_app_meta_data, raw_user_meta_data,
  aud, confirmation_token, recovery_token
) values (
  '00000000-0000-0000-0000-000000000008',
  'camille@example.com',
  crypt('AlimunDev2026!', gen_salt('bf')),
  now(), now() - interval '10 days', now(),
  '{"provider":"email","providers":["email"],"role":"student"}',
  '{"full_name":"Camille Dubois","role":"student"}',
  'authenticated', '', ''
) on conflict (id) do nothing;

-- =============================================================
--  STEP 2 — teacher_profiles
-- =============================================================

insert into public.teacher_profiles (
  id, user_id, full_name, languages, experience_years,
  specialty, bio, status, tier_level, hourly_rate, rating, sessions_delivered
) values
(
  'aaaaaaaa-0000-0000-0000-000000000001',
  '00000000-0000-0000-0000-000000000002',
  'Sofía Martínez',
  array['Spanish','French'],
  7,
  'Business & Relocation Spanish',
  'Native Spanish speaker from Barcelona with 7 years of experience helping professionals and digital nomads get conversation-ready fast. Former translator for the EU.',
  'approved',
  'focused',
  25.00,
  4.92,
  148
),
(
  'aaaaaaaa-0000-0000-0000-000000000002',
  '00000000-0000-0000-0000-000000000003',
  'Lukas Bauer',
  array['German','English'],
  5,
  'Academic & Professional German',
  'Certified DaF (German as a Foreign Language) teacher from Munich. Specialises in university preparation, job applications, and visa-interview German.',
  'approved',
  'intensive',
  22.00,
  4.78,
  93
)
on conflict (id) do nothing;

-- =============================================================
--  STEP 3 — cohorts  (1 open, 1 full, 1 open)
-- =============================================================

insert into public.cohorts (
  id, teacher_id, language, level, goal_track, tier,
  max_students, description, schedule_days, schedule_time,
  timezone, status, enrolled_count
) values
(
  'bbbbbbbb-0000-0000-0000-000000000001',
  'aaaaaaaa-0000-0000-0000-000000000001',
  'Spanish',
  'B1',
  'relocation',
  'focused',
  17,
  'Move to Spain with confidence. This cohort covers practical Spanish for daily life — housing, healthcare, banking, and making friends. 2 live sessions per week, small group of max 17 learners.',
  array['Monday','Thursday'],
  '18:00',
  'Europe/Madrid',
  'open',
  3   -- 3 students enrolled (will be set accurately by trigger in prod)
),
(
  'bbbbbbbb-0000-0000-0000-000000000002',
  'aaaaaaaa-0000-0000-0000-000000000001',
  'Spanish',
  'A2',
  'professional',
  'community',
  35,
  'Spanish for work. Focus on business vocabulary, emails, meetings, and presentations. 1 live session per week, large community cohort.',
  array['Wednesday'],
  '19:00',
  'Europe/Madrid',
  'full',
  35  -- full cohort
),
(
  'bbbbbbbb-0000-0000-0000-000000000003',
  'aaaaaaaa-0000-0000-0000-000000000002',
  'German',
  'A1',
  'foundations',
  'intensive',
  6,
  'Zero to conversational German in 12 weeks. Intensive track with 3 sessions/week and weekly 1:1 check-ins. Perfect for relocation or university prep.',
  array['Monday','Wednesday','Friday'],
  '09:00',
  'Europe/Berlin',
  'open',
  1   -- 1 student enrolled
)
on conflict (id) do nothing;

-- =============================================================
--  STEP 4 — student_profiles
-- =============================================================

insert into public.student_profiles (
  id, user_id, full_name, language, level, goal_track,
  tier, stripe_customer_id, stripe_subscription_id,
  stripe_subscription_status, enrolled_cohort_id
) values
(
  'cccccccc-0000-0000-0000-000000000001',
  '00000000-0000-0000-0000-000000000004',
  'Aisha Ndiaye',
  'Spanish', 'B1', 'relocation', 'focused',
  'cus_test_aisha001', 'sub_test_aisha001', 'active',
  'bbbbbbbb-0000-0000-0000-000000000001'
),
(
  'cccccccc-0000-0000-0000-000000000002',
  '00000000-0000-0000-0000-000000000005',
  'Marco Russo',
  'Spanish', 'B1', 'relocation', 'focused',
  'cus_test_marco001', 'sub_test_marco001', 'active',
  'bbbbbbbb-0000-0000-0000-000000000001'
),
(
  'cccccccc-0000-0000-0000-000000000003',
  '00000000-0000-0000-0000-000000000006',
  'Yuki Tanaka',
  'Spanish', 'A2', 'professional', 'community',
  'cus_test_yuki001', 'sub_test_yuki001', 'active',
  'bbbbbbbb-0000-0000-0000-000000000002'
),
(
  'cccccccc-0000-0000-0000-000000000004',
  '00000000-0000-0000-0000-000000000007',
  'Omar Al-Farsi',
  'German', 'A1', 'foundations', 'intensive',
  'cus_test_omar001', 'sub_test_omar001', 'active',
  'bbbbbbbb-0000-0000-0000-000000000003'
),
(
  'cccccccc-0000-0000-0000-000000000005',
  '00000000-0000-0000-0000-000000000008',
  'Camille Dubois',
  'Spanish', 'B1', 'relocation', 'focused',
  'cus_test_camille001', null, null,
  null  -- signed up but not yet enrolled
)
on conflict (id) do nothing;

-- =============================================================
--  STEP 5 — enrollments (4 active enrollments)
-- =============================================================

insert into public.enrollments (
  id, student_id, cohort_id, enrolled_at, status
) values
(
  'dddddddd-0000-0000-0000-000000000001',
  'cccccccc-0000-0000-0000-000000000001',
  'bbbbbbbb-0000-0000-0000-000000000001',
  now() - interval '40 days',
  'active'
),
(
  'dddddddd-0000-0000-0000-000000000002',
  'cccccccc-0000-0000-0000-000000000002',
  'bbbbbbbb-0000-0000-0000-000000000001',
  now() - interval '28 days',
  'active'
),
(
  'dddddddd-0000-0000-0000-000000000003',
  'cccccccc-0000-0000-0000-000000000003',
  'bbbbbbbb-0000-0000-0000-000000000002',
  now() - interval '25 days',
  'active'
),
(
  'dddddddd-0000-0000-0000-000000000004',
  'cccccccc-0000-0000-0000-000000000004',
  'bbbbbbbb-0000-0000-0000-000000000003',
  now() - interval '12 days',
  'active'
)
on conflict (id) do nothing;

-- =============================================================
--  STEP 6 — sessions
--  Cohort 1 (Spanish B1 Relocation): 4 sessions (3 past, 1 future)
--  Cohort 2 (Spanish A2 Pro):        2 sessions (2 past)
--  Cohort 3 (German A1):             2 sessions (1 past, 1 future)
-- =============================================================

insert into public.sessions (
  id, cohort_id, scheduled_at, daily_room_url, status
) values
-- ── Cohort 1: Spanish B1 Relocation ──
(
  'eeeeeeee-0000-0000-0000-000000000001',
  'bbbbbbbb-0000-0000-0000-000000000001',
  now() - interval '35 days',
  'https://alimun.daily.co/es-b1-reloc-s01',
  'completed'
),
(
  'eeeeeeee-0000-0000-0000-000000000002',
  'bbbbbbbb-0000-0000-0000-000000000001',
  now() - interval '28 days',
  'https://alimun.daily.co/es-b1-reloc-s02',
  'completed'
),
(
  'eeeeeeee-0000-0000-0000-000000000003',
  'bbbbbbbb-0000-0000-0000-000000000001',
  now() - interval '21 days',
  'https://alimun.daily.co/es-b1-reloc-s03',
  'completed'
),
(
  'eeeeeeee-0000-0000-0000-000000000004',
  'bbbbbbbb-0000-0000-0000-000000000001',
  now() + interval '2 days',
  'https://alimun.daily.co/es-b1-reloc-s04',
  'scheduled'
),
-- ── Cohort 2: Spanish A2 Professional ──
(
  'eeeeeeee-0000-0000-0000-000000000005',
  'bbbbbbbb-0000-0000-0000-000000000002',
  now() - interval '22 days',
  'https://alimun.daily.co/es-a2-pro-s01',
  'completed'
),
(
  'eeeeeeee-0000-0000-0000-000000000006',
  'bbbbbbbb-0000-0000-0000-000000000002',
  now() - interval '15 days',
  'https://alimun.daily.co/es-a2-pro-s02',
  'completed'
),
-- ── Cohort 3: German A1 Foundations ──
(
  'eeeeeeee-0000-0000-0000-000000000007',
  'bbbbbbbb-0000-0000-0000-000000000003',
  now() - interval '10 days',
  'https://alimun.daily.co/de-a1-found-s01',
  'completed'
),
(
  'eeeeeeee-0000-0000-0000-000000000008',
  'bbbbbbbb-0000-0000-0000-000000000003',
  now() + interval '4 days',
  null,
  'scheduled'
)
on conflict (id) do nothing;

-- =============================================================
--  STEP 7 — session_notes (2 records, both published)
-- =============================================================

insert into public.session_notes (
  id,
  session_id,
  vocabulary,
  grammar_focus,
  exercises,
  homework,
  due_date,
  teacher_note,
  published_at
) values
(
  'ffffffff-0000-0000-0000-000000000001',
  'eeeeeeee-0000-0000-0000-000000000001',
  '[
    {"word": "el empadronamiento", "definition": "Municipal registration certificate required to access services in Spain", "example": "Necesitas el empadronamiento para abrir una cuenta bancaria."},
    {"word": "el alquiler", "definition": "Rent / rental payment", "example": "El alquiler en Barcelona es muy alto este año."},
    {"word": "la fianza", "definition": "Security deposit on a rental property", "example": "Normalmente la fianza equivale a dos meses de alquiler."},
    {"word": "la comunidad de vecinos", "definition": "Residents'' community (building management group)", "example": "La comunidad de vecinos se reúne el primer lunes de cada mes."},
    {"word": "el NIE", "definition": "Número de Identidad de Extranjero — foreigner ID number required for almost everything in Spain", "example": "Sin el NIE no puedes firmar un contrato de alquiler."}
  ]'::jsonb,
  'Ser vs. Estar — Using estar for location and temporary states (estoy en Barcelona, el piso está disponible). Contrasting with ser for permanent characteristics.',
  'Pair exercise: describe your ideal Spanish apartment using at least 3 vocab words and correct ser/estar usage. Record a 90-second voice memo.',
  'Write a WhatsApp message to a landlord asking to view a flat. Use at least 4 words from today''s vocabulary. Due before next session.',
  (now() + interval '5 days')::date,
  'Great energy today! Aisha and Marco — your pronunciation is really improving. Focus on rolling the ''r'' in ''alquiler'' this week. See you Thursday!',
  now() - interval '34 days'
),
(
  'ffffffff-0000-0000-0000-000000000002',
  'eeeeeeee-0000-0000-0000-000000000005',
  '[
    {"word": "la reunión", "definition": "Meeting (business context)", "example": "Tenemos una reunión con el cliente a las diez."},
    {"word": "el presupuesto", "definition": "Budget / quote / estimate", "example": "El presupuesto para el proyecto es de 50.000 euros."},
    {"word": "el plazo", "definition": "Deadline / time limit", "example": "El plazo para entregar el informe es el viernes."},
    {"word": "acordar", "definition": "To agree / to reach an agreement", "example": "Acordamos reunirnos cada lunes por la mañana."},
    {"word": "el seguimiento", "definition": "Follow-up / monitoring", "example": "Necesito hacer un seguimiento con el equipo de ventas."}
  ]'::jsonb,
  'Present subjunctive for business requests: espero que, es importante que, necesitamos que + subjunctive. Common in professional emails and formal speech.',
  'Role-play: Student A is the project manager, Student B is the client. Negotiate a deadline extension using today''s vocabulary and the present subjunctive.',
  'Write a formal follow-up email in Spanish summarising a meeting outcome. Min 80 words. Use at least 3 vocab items.',
  (now() + interval '3 days')::date,
  'Excellent participation from everyone. Yuki — your written Spanish is already stronger than many B1 students. Keep it up. Next session we tackle telephone calls!',
  now() - interval '21 days'
)
on conflict (id) do nothing;

-- =============================================================
--  STEP 8 — session_attendance (past sessions only)
-- =============================================================

insert into public.session_attendance (
  id, session_id, student_id, joined_at, left_at, duration_minutes
) values
-- Session 1 (Cohort 1, completed)
(
  'a1a1a1a1-0000-0000-0000-000000000001',
  'eeeeeeee-0000-0000-0000-000000000001',
  'cccccccc-0000-0000-0000-000000000001',
  now() - interval '35 days',
  now() - interval '35 days' + interval '55 minutes',
  55
),
(
  'a1a1a1a1-0000-0000-0000-000000000002',
  'eeeeeeee-0000-0000-0000-000000000001',
  'cccccccc-0000-0000-0000-000000000002',
  now() - interval '35 days',
  now() - interval '35 days' + interval '60 minutes',
  60
),
-- Session 5 (Cohort 2, completed)
(
  'a1a1a1a1-0000-0000-0000-000000000003',
  'eeeeeeee-0000-0000-0000-000000000005',
  'cccccccc-0000-0000-0000-000000000003',
  now() - interval '22 days',
  now() - interval '22 days' + interval '58 minutes',
  58
),
-- Session 7 (Cohort 3, completed)
(
  'a1a1a1a1-0000-0000-0000-000000000004',
  'eeeeeeee-0000-0000-0000-000000000007',
  'cccccccc-0000-0000-0000-000000000004',
  now() - interval '10 days',
  now() - interval '10 days' + interval '62 minutes',
  62
)
on conflict (id) do nothing;

-- =============================================================
--  STEP 9 — teacher_payouts (historical payout for Sofía)
-- =============================================================

insert into public.teacher_payouts (
  id, teacher_id, period_start, period_end,
  sessions_count, amount_eur, status, paid_at
) values
(
  '5a000001-0000-0000-0000-000000000001',
  'aaaaaaaa-0000-0000-0000-000000000001',
  (now() - interval '60 days')::date,
  (now() - interval '31 days')::date,
  12,
  264.00,   -- 12 sessions x €22 hourly rate
  'paid',
  now() - interval '28 days'
),
(
  '5a000002-0000-0000-0000-000000000002',
  'aaaaaaaa-0000-0000-0000-000000000001',
  (now() - interval '30 days')::date,
  now()::date,
  8,
  176.00,   -- 8 sessions x €22
  'pending',
  null
)
on conflict (id) do nothing;

commit;

-- =============================================================
--  SEED SUMMARY
-- =============================================================
--
--  Users (auth.users):
--    admin@alimun.com          — admin role
--    sofia@alimun.com          — teacher, approved
--    lukas@alimun.com          — teacher, approved
--    aisha@example.com         — student, enrolled cohort 1
--    marco@example.com         — student, enrolled cohort 1
--    yuki@example.com          — student, enrolled cohort 2
--    omar@example.com          — student, enrolled cohort 3
--    camille@example.com       — student, NOT yet enrolled
--
--  Cohorts:
--    1. Spanish B1 Relocation  — status: open  (Sofía, 3 enrolled)
--    2. Spanish A2 Professional— status: full  (Sofía, 35 enrolled)
--    3. German A1 Foundations  — status: open  (Lukas, 1 enrolled)
--
--  Sessions: 8 total (5 completed, 2 scheduled future, 1 scheduled)
--  Session notes: 2 (session 1 + session 5, both published)
--  Payouts: 2 (1 paid, 1 pending) for Sofía
--
--  All passwords: AlimunDev2026!
-- =============================================================
