/**
 * ============================================================
 *  ALIMUN — POST /api/enroll
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Handles secure student cohort enrollment:
 *  - Verifies student's JWT token.
 *  - Runs pre-enrollment checks.
 *  - Calls atomic increment RPC and inserts/updates DB.
 *  - Dispatches welcome email to student and notification to teacher via Resend.
 * ============================================================
 */

const { createClient } = require('@supabase/supabase-js');

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error('[Enroll API] Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
    return null;
  }
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

module.exports = async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', process.env.APP_URL || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 1. Authenticate user via JWT
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: Missing or invalid token' });
  }

  const token = authHeader.split(' ')[1];
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return res.status(500).json({ error: 'Server database configuration error' });
  }

  let user;
  try {
    const { data: authData, error: authError } = await supabase.auth.getUser(token);
    if (authError || !authData?.user) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
    user = authData.user;
  } catch (err) {
    console.error('[Enroll API] Auth error:', err);
    return res.status(401).json({ error: 'Unauthorized: Auth validation exception' });
  }

  const { cohort_id } = req.body || {};
  if (!cohort_id) {
    return res.status(400).json({ error: 'Missing cohort_id parameter' });
  }

  try {
    // 2. Fetch student profile
    const { data: student, error: studentError } = await supabase
      .from('student_profiles')
      .select('*')
      .eq('user_id', user.id)
      .maybeSingle();

    if (studentError || !student) {
      return res.status(404).json({ error: 'Student profile not found' });
    }

    // 3. Fetch cohort details
    const { data: cohort, error: cohortError } = await supabase
      .from('cohorts')
      .select(`
        *,
        teacher_profiles (
          id,
          full_name,
          user_id
        )
      `)
      .eq('id', cohort_id)
      .maybeSingle();

    if (cohortError || !cohort) {
      return res.status(404).json({ error: 'Cohort not found' });
    }

    // ── Pre-enrollment Checks ──

    // Check 1: Active subscription status
    if (student.stripe_subscription_status !== 'active') {
      return res.status(402).json({
        error: 'payment_required',
        message: 'Active Stripe subscription required to join a cohort.',
        tier: cohort.tier
      });
    }

    // Check 2: Tier validation (Community = 1, Focused = 2, Intensive = 3, Private = 4)
    const tierWeights = { community: 1, focused: 2, intensive: 3, private: 4 };
    const studentWeight = tierWeights[student.tier] || 0;
    const cohortWeight = tierWeights[cohort.tier] || 0;

    if (studentWeight < cohortWeight) {
      return res.status(403).json({
        error: 'tier_mismatch',
        message: `Your ${student.tier.toUpperCase()} subscription tier does not allow joining a ${cohort.tier.toUpperCase()} cohort.`
      });
    }

    // Check 3: Current enrollment
    if (student.enrolled_cohort_id) {
      return res.status(409).json({
        error: 'already_enrolled',
        message: "You're already in a cohort. Leave your current cohort first."
      });
    }

    // Check 4: Cohort status & capacity
    if (cohort.status !== 'open') {
      return res.status(409).json({
        error: 'cohort_not_open',
        message: cohort.status === 'full' ? 'This class cohort is already full!' : 'This cohort is closed.'
      });
    }

    if (cohort.enrolled_count >= cohort.max_students) {
      return res.status(409).json({
        error: 'cohort_full',
        message: 'This class cohort is already full!'
      });
    }

    // ── Enrollment Transactions ──

    // Step 1: Call atomic increment RPC
    const { data: newCount, error: rpcError } = await supabase
      .rpc('increment_enrollment', { cohort_id });

    if (rpcError || newCount === null) {
      console.warn('[Enroll API] RPC Enrollment increment failed or returned null:', rpcError);
      return res.status(409).json({
        error: 'cohort_full',
        message: 'This class cohort is already full!'
      });
    }

    // Step 2: Insert into enrollments
    const { error: enrollError } = await supabase
      .from('enrollments')
      .insert({
        student_id: student.id,
        cohort_id,
        status: 'active'
      });

    if (enrollError) {
      console.error('[Enroll API] Insert enrollment error:', enrollError);
      // Rollback cohort count
      await supabase
        .from('cohorts')
        .update({ enrolled_count: Math.max(0, newCount - 1) })
        .eq('id', cohort_id);
      return res.status(500).json({ error: 'Failed to record enrollment' });
    }

    // Step 3: Update student profile
    const { error: updateProfileError } = await supabase
      .from('student_profiles')
      .update({ enrolled_cohort_id: cohort_id })
      .eq('id', student.id);

    if (updateProfileError) {
      console.error('[Enroll API] Update student profile error:', updateProfileError);
      // Attempt clean rollbacks
      await supabase.from('enrollments').delete().eq('student_id', student.id).eq('cohort_id', cohort_id);
      await supabase.from('cohorts').update({ enrolled_count: Math.max(0, newCount - 1) }).eq('id', cohort_id);
      return res.status(500).json({ error: 'Failed to assign cohort to student profile' });
    }

    // ── Notifications (Async/Safe) ──

    const resendKey = process.env.RESEND_API_KEY;
    const emailFrom = process.env.EMAIL_FROM_ADDRESS || 'Alimun <no-reply@alimun.com>';

    if (resendKey) {
      // Get next session details
      const { data: nextSession } = await supabase
        .from('sessions')
        .select('scheduled_at, daily_room_url')
        .eq('cohort_id', cohort_id)
        .gt('scheduled_at', new Date().toISOString())
        .order('scheduled_at', { ascending: true })
        .limit(1)
        .maybeSingle();

      let sessionDateStr = 'TBD';
      let sessionTimeStr = 'TBD';
      let roomUrl = 'TBD';

      if (nextSession) {
        const d = new Date(nextSession.scheduled_at);
        sessionDateStr = d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        sessionTimeStr = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' });
        roomUrl = nextSession.daily_room_url || 'TBD';
      }

      const teacherName = cohort.teacher_profiles?.full_name || 'your teacher';

      // 1. Send Student Welcome Email
      const studentSubject = `You've joined: ${cohort.language} ${cohort.level} — ${cohort.goal_track} cohort with ${teacherName}`;
      const studentHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Cohort Joined</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #f6f6f6; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
            .header { background: #080808; padding: 30px; text-align: center; }
            .header h1 { color: #ceff65; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; }
            .content { padding: 40px 30px; color: #333333; line-height: 1.6; }
            .btn { display: inline-block; background-color: #ceff65; color: #080808; text-decoration: none; padding: 14px 30px; border-radius: 30px; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 20px; }
            .footer { background: #fafafa; padding: 20px 30px; text-align: center; border-top: 1px solid #eeeeee; font-size: 12px; color: #aaaaaa; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Alimun</h1>
            </div>
            <div class="content">
              <h2 style="color: #080808; margin-top: 0;">Welcome aboard, ${student.full_name}!</h2>
              <p>You have successfully joined the <strong>${cohort.language} ${cohort.level} (${cohort.goal_track})</strong> cohort with teacher <strong>${teacherName}</strong>.</p>
              <p>Your first session is on <strong>${sessionDateStr}</strong> at <strong>${sessionTimeStr}</strong>.</p>
              <p>Here's your join link: <a href="${roomUrl}">${roomUrl}</a>.</p>
              <p>You'll also receive a reminder 24 hours before.</p>
              <center>
                <a href="${process.env.APP_URL || 'https://alimun.com'}/student-dashboard.html" class="btn">Go to Dashboard</a>
              </center>
            </div>
            <div class="footer">
              If you have any questions, feel free to reply to this email.
            </div>
          </div>
        </body>
        </html>
      `;

      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: emailFrom,
            to: user.email,
            subject: studentSubject,
            html: studentHtml
          })
        });
        console.log(`[Enroll API] Welcome email successfully sent to ${user.email}`);
      } catch (emailErr) {
        console.error('[Enroll API] Failed to send welcome email to student:', emailErr);
      }

      // 2. Notify Teacher
      if (cohort.teacher_profiles?.user_id) {
        try {
          const { data: authTeacher } = await supabase.auth.admin.getUserById(cohort.teacher_profiles.user_id);
          const teacherEmail = authTeacher?.user?.email;

          if (teacherEmail) {
            const teacherSubject = `New student joined your cohort!`;
            const teacherHtml = `
              <!DOCTYPE html>
              <html>
              <head>
                <meta charset="utf-8">
                <style>
                  body { font-family: sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #eee; border-radius: 8px; }
                </style>
              </head>
              <body>
                <div class="container">
                  <h2>Hello ${teacherName},</h2>
                  <p>A new student has joined your cohort:</p>
                  <ul>
                    <li><strong>Name:</strong> ${student.full_name}</li>
                    <li><strong>Level:</strong> ${cohort.level}</li>
                    <li><strong>Goal:</strong> ${cohort.goal_track}</li>
                  </ul>
                  <p>Check your teacher dashboard to view your updated student roster and schedule.</p>
                </div>
              </body>
              </html>
            `;

            await fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${resendKey}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                from: emailFrom,
                to: teacherEmail,
                subject: teacherSubject,
                html: teacherHtml
              })
            });
            console.log(`[Enroll API] Notification email successfully sent to teacher: ${teacherEmail}`);
          }
        } catch (teacherEmailErr) {
          console.error('[Enroll API] Failed to notify teacher:', teacherEmailErr);
        }
      }
    } else {
      console.warn('[Enroll API] RESEND_API_KEY not configured. Skipping welcome email.');
    }

    return res.status(200).json({
      success: true,
      message: 'Successfully enrolled in the class cohort!',
      cohort_id
    });

  } catch (err) {
    console.error('[Enroll API] Internal error:', err);
    return res.status(500).json({ error: 'Internal server error: ' + err.message });
  }
};
