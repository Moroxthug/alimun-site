// One-off script: provisions a real, immediately-joinable test cohort +
// session so a teacher and student account can test a live Daily.co call
// end-to-end through the actual production join flow (not a bypass).
//
// Usage: node supabase/seed-test-video-session.js
// Requires SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY in .env.

const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// Minimal .env loader (no dotenv dependency in this project)
const envPath = path.join(__dirname, '..', '.env');
for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim();
}

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_KEY  = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const TEACHER_EMAIL = 'test-teacher@alimun.com';
const STUDENT_EMAIL = 'test-student@alimun.com';
const TEST_PASSWORD = 'AlimunTest123!';

async function getOrCreateUser(email, password, meta) {
  // list + find first (admin API has no getUserByEmail in this SDK version)
  const { data: list, error: listErr } = await supabase.auth.admin.listUsers({ perPage: 1000 });
  if (listErr) throw listErr;
  const existing = list.users.find(u => u.email === email);
  if (existing) return existing;

  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: meta,
  });
  if (error) throw error;
  return data.user;
}

async function main() {
  console.log('Creating/reusing test teacher + student accounts...');
  const teacherUser = await getOrCreateUser(TEACHER_EMAIL, TEST_PASSWORD, { role: 'teacher', full_name: 'Test Teacher' });
  const studentUser = await getOrCreateUser(STUDENT_EMAIL, TEST_PASSWORD, { role: 'student', full_name: 'Test Student' });

  // ── teacher_profiles ──
  let { data: teacherProfile } = await supabase
    .from('teacher_profiles').select('*').eq('user_id', teacherUser.id).maybeSingle();
  if (!teacherProfile) {
    const { data, error } = await supabase.from('teacher_profiles').insert({
      user_id: teacherUser.id,
      full_name: 'Test Teacher',
      languages: ['Spanish'],
      status: 'approved',
      tier_level: 'community',
    }).select().single();
    if (error) throw error;
    teacherProfile = data;
  } else if (teacherProfile.status !== 'approved') {
    await supabase.from('teacher_profiles').update({ status: 'approved' }).eq('id', teacherProfile.id);
  }
  console.log('Teacher profile ready:', teacherProfile.id);

  // ── student_profiles ──
  let { data: studentProfile } = await supabase
    .from('student_profiles').select('*').eq('user_id', studentUser.id).maybeSingle();
  if (!studentProfile) {
    const { data, error } = await supabase.from('student_profiles').insert({
      user_id: studentUser.id,
      full_name: 'Test Student',
      language: 'Spanish',
      level: 'B1',
      goal_track: 'foundations',
      tier: 'community',
      stripe_subscription_status: 'active',
    }).select().single();
    if (error) throw error;
    studentProfile = data;
  } else {
    await supabase.from('student_profiles')
      .update({ language: 'Spanish', tier: 'community', stripe_subscription_status: 'active' })
      .eq('id', studentProfile.id);
  }
  console.log('Student profile ready:', studentProfile.id);

  // ── cohort ──
  const { data: cohort, error: cohortErr } = await supabase.from('cohorts').insert({
    teacher_id: teacherProfile.id,
    language: 'Spanish',
    level: 'B1',
    goal_track: 'foundations',
    tier: 'community',
    max_students: 35,
    description: 'Test cohort for live video verification',
    schedule_days: ['monday'],
    schedule_time: '10:00',
    timezone: 'UTC',
    status: 'open',
    enrolled_count: 1,
  }).select().single();
  if (cohortErr) throw cohortErr;
  console.log('Cohort created:', cohort.id);

  // ── enrollment ──
  const { error: enrollErr } = await supabase.from('enrollments').insert({
    student_id: studentProfile.id,
    cohort_id: cohort.id,
    status: 'active',
  });
  if (enrollErr) throw enrollErr;

  await supabase.from('student_profiles')
    .update({ enrolled_cohort_id: cohort.id })
    .eq('id', studentProfile.id);

  // ── session: starts 3 minutes from now, so it's immediately joinable
  // (student dashboard only shows sessions with scheduled_at > now; the
  // join window opens 10-15 min before start) and stays open for 90 min. ──
  const scheduledAt = new Date(Date.now() + 3 * 60 * 1000).toISOString();
  const { data: session, error: sessionErr } = await supabase.from('sessions').insert({
    cohort_id: cohort.id,
    scheduled_at: scheduledAt,
    status: 'scheduled',
  }).select().single();
  if (sessionErr) throw sessionErr;

  console.log('\n✅ Test session ready.');
  console.log('Session starts at:', scheduledAt);
  console.log('\nLog in at signin.html with:');
  console.log(`  Teacher: ${TEACHER_EMAIL} / ${TEST_PASSWORD}`);
  console.log(`  Student: ${STUDENT_EMAIL} / ${TEST_PASSWORD}`);
  console.log('\nThe "Join"/"Start session" button should appear on both dashboards within a couple minutes.');
}

main().catch(err => {
  console.error('Seed script failed:', err);
  process.exit(1);
});
