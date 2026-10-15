/**
 * ============================================================
 *  ALIMUN — POST /api/generate-notes-pdf
 *  Vercel Serverless Function (Node.js runtime)
 * ============================================================
 */

const React = require('react');
// @react-pdf/renderer v4 is ESM-only and its yoga-layout dependency uses
// top-level await, so a top-level require() crashes the function at cold
// start on Vercel (FUNCTION_INVOCATION_FAILED on every request). It is
// loaded with import() on first use instead; see loadPdfKit() below.
let Document, Page, Text, View, StyleSheet, Font, pdf, styles, HEADER_FONT;
const { createClient } = require('@supabase/supabase-js');
const path = require('path');
const fs = require('fs');

// Header font: the bundled Coolvetica Condensed from fonts/ (the remote Anton
// URL used before now returns 404 and made every render fail). If the file is
// missing from the deployment, fall back to the built-in Helvetica-Bold so the
// PDF still renders.
const HEADER_FONT_PATH = path.join(__dirname, '..', 'fonts', 'coolvetica-condensed-rg.otf');

let pdfKitPromise = null;
function loadPdfKit() {
  if (!pdfKitPromise) {
    pdfKitPromise = import('@react-pdf/renderer').then((m) => {
      ({ Document, Page, Text, View, StyleSheet, Font, pdf } = m);
      HEADER_FONT = 'Helvetica-Bold';
      try {
        if (fs.existsSync(HEADER_FONT_PATH)) {
          Font.register({ family: 'Coolvetica Condensed', src: HEADER_FONT_PATH });
          HEADER_FONT = 'Coolvetica Condensed';
        }
      } catch (e) {
        console.error('[Generate PDF Notes] header font registration failed, using Helvetica-Bold');
      }
      styles = StyleSheet.create({
        page: { padding: 30, fontFamily: 'Helvetica', fontSize: 10, lineHeight: 1.5, color: '#080808', backgroundColor: '#f0efe9' },
        header: { backgroundColor: '#080808', padding: 20, borderRadius: 8, marginBottom: 20 },
        headerTitle: { fontFamily: HEADER_FONT, fontSize: 26, color: '#ceff65', textTransform: 'uppercase', marginBottom: 5 },
        headerMeta: { color: '#ffffff', fontSize: 9, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' },
        section: { marginBottom: 15, padding: 15, backgroundColor: '#ffffff', borderRadius: 8 },
        sectionTitle: { fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #080808', paddingBottom: 5, marginBottom: 8 },
        table: { display: 'table', width: 'auto', marginBottom: 10 },
        tableRow: { margin: 'auto', flexDirection: 'row' },
        tableRowAlternate: { margin: 'auto', flexDirection: 'row', backgroundColor: '#f5f4f0' },
        tableColHeader: { width: '33.3%', borderStyle: 'solid', borderWidth: 0, borderBottomWidth: 1, borderColor: '#080808', padding: 5 },
        tableCol: { width: '33.3%', padding: 5 },
        tableCell: { fontSize: 8 },
        bold: { fontWeight: 'bold' },
        callout: { backgroundColor: '#ceff65', padding: 12, borderRadius: 8, marginTop: 10, borderLeftWidth: 4, borderLeftColor: '#080808' },
        calloutText: { fontStyle: 'italic', color: '#080808' },
        footer: { position: 'absolute', bottom: 30, left: 30, right: 30, textAlign: 'center', color: '#aaa', fontSize: 8 }
      });
    }).catch((e) => { pdfKitPromise = null; throw e; });
  }
  return pdfKitPromise;
}

const MyDocument = ({ data }) => {
  const { sessionDate, teacherName, cohortLang, cohortLevel, cohortGoal, sessionNum, vocabulary, grammarTitle, grammarExplanation, exercises, homework, dueDate, teacherNote, sessionNotesId } = data;

  const vocabRows = (vocabulary || []).map((item, index) => {
    const rowStyle = index % 2 === 1 ? styles.tableRowAlternate : styles.tableRow;
    return React.createElement(View, { style: rowStyle, key: index },
      React.createElement(View, { style: styles.tableCol }, React.createElement(Text, { style: styles.tableCell }, item.word)),
      React.createElement(View, { style: styles.tableCol }, React.createElement(Text, { style: styles.tableCell }, item.definition)),
      React.createElement(View, { style: styles.tableCol }, React.createElement(Text, { style: styles.tableCell }, item.example || ''))
    );
  });

  return React.createElement(Document, null,
    React.createElement(Page, { size: 'A4', style: styles.page },
      React.createElement(View, { style: styles.header },
        React.createElement(Text, { style: styles.headerTitle }, 'alimun'),
        React.createElement(View, { style: styles.headerMeta },
          React.createElement(Text, null, `${cohortLang} ${cohortLevel} (${cohortGoal}) | Session #${sessionNum || ''}`),
          React.createElement(Text, null, `Teacher: ${teacherName}`),
          React.createElement(Text, null, `Date: ${sessionDate}`)
        )
      ),
      React.createElement(View, { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, 'Vocabulary List'),
        React.createElement(View, { style: styles.table },
          React.createElement(View, { style: styles.tableRow },
            React.createElement(View, { style: styles.tableColHeader }, React.createElement(Text, { style: [styles.tableCell, styles.bold] }, 'Word')),
            React.createElement(View, { style: styles.tableColHeader }, React.createElement(Text, { style: [styles.tableCell, styles.bold] }, 'Definition')),
            React.createElement(View, { style: styles.tableColHeader }, React.createElement(Text, { style: [styles.tableCell, styles.bold] }, 'Example Sentence'))
          ),
          vocabRows
        )
      ),
      React.createElement(View, { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, 'Grammar Focus'),
        React.createElement(Text, { style: [styles.bold, { marginBottom: 4 }] }, grammarTitle),
        React.createElement(Text, null, grammarExplanation)
      ),
      React.createElement(View, { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, 'Exercises Done'),
        React.createElement(Text, null, exercises)
      ),
      React.createElement(View, { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, 'Homework Assignment'),
        React.createElement(Text, null, homework),
        React.createElement(View, { style: { marginTop: 8, backgroundColor: '#f0efe9', padding: 6, borderRadius: 4 } },
          React.createElement(Text, { style: styles.bold }, `Due Date: ${dueDate}`)
        )
      ),
      React.createElement(View, { style: styles.callout },
        React.createElement(Text, { style: [styles.bold, { marginBottom: 2 }] }, 'Teacher\'s Note:'),
        React.createElement(Text, { style: styles.calloutText }, `"${teacherNote}"`)
      ),
      React.createElement(Text, { style: styles.footer }, `Verify at alimun.com/verify/${sessionNotesId}`)
    )
  );
};

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
}

const NOTES_BUCKET = 'session-notes-pdfs';           // must match the dashboards' uploads
const SIGNED_URL_TTL = 60 * 60 * 24 * 365;           // 1 year: works for private buckets too
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

/** Verify the caller's Supabase JWT and return { user, isAdmin }. */
async function requireUser(req, supabase) {
  const authHeader = req.headers.authorization || '';
  if (!authHeader.startsWith('Bearer ')) return null;
  const { data, error } = await supabase.auth.getUser(authHeader.slice(7));
  if (error || !data?.user) return null;
  const user = data.user;
  return { user, isAdmin: user.app_metadata?.role === 'admin' };
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.APP_URL || 'https://alimun.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { session_notes_id } = req.body || {};
  if (!session_notes_id || !UUID_RE.test(String(session_notes_id))) {
    return res.status(400).json({ error: 'Missing or invalid session_notes_id' });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) return res.status(500).json({ error: 'Database client setup error' });

  // Auth: only the cohort's teacher (or an admin) may publish notes.
  const auth = await requireUser(req, supabase);
  if (!auth) return res.status(401).json({ error: 'Unauthorized' });

  try {
    // 1. Fetch Session Notes & Cohort/Teacher info
    const { data: notes, error: notesError } = await supabase
      .from('session_notes')
      .select(`
        *,
        sessions (
          id,
          scheduled_at,
          cohorts (
            id,
            language,
            level,
            goal_track,
            timezone,
            teacher_id,
            teacher_profiles (
              full_name
            )
          )
        )
      `)
      .eq('id', session_notes_id)
      .single();

    if (notesError || !notes || !notes.sessions?.cohorts) return res.status(404).json({ error: 'Session notes not found' });

    const session = notes.sessions;
    const cohort = session.cohorts;
    const teacherProfile = cohort.teacher_profiles;

    if (!auth.isAdmin) {
      // Only an approved teacher may publish; suspended/rejected teachers are refused.
      const { data: callerTeacher } = await supabase
        .from('teacher_profiles')
        .select('id, status')
        .eq('user_id', auth.user.id)
        .maybeSingle();
      if (!callerTeacher || callerTeacher.status !== 'approved' || callerTeacher.id !== cohort.teacher_id) {
        return res.status(403).json({ error: 'You can only publish notes for your own classes' });
      }
    }

    // Calculate session number
    const { data: allSessions } = await supabase
      .from('sessions')
      .select('id, scheduled_at')
      .eq('cohort_id', cohort.id)
      .order('scheduled_at', { ascending: true });

    const sessionNum = (allSessions || []).findIndex(s => s.id === session.id) + 1;

    // Parse grammar Title and Explanation
    const gFocus = notes.grammar_focus || '';
    const parts = gFocus.split('\n\n');
    const grammarTitle = parts[0] || 'Live Session';
    const grammarExplanation = parts.slice(1).join('\n\n') || '';

    // Date formatting
    // Date formatting in the cohort's own timezone (falls back to UTC on a bad zone).
    const fmtDate = (value) => {
      const opts = { day: 'numeric', month: 'long', year: 'numeric' };
      try {
        return new Date(value).toLocaleDateString('en-GB', { ...opts, timeZone: cohort.timezone || 'UTC' });
      } catch (e) {
        return new Date(value).toLocaleDateString('en-GB', { ...opts, timeZone: 'UTC' });
      }
    };
    const sessionDate = fmtDate(session.scheduled_at);
    // Students are emailed only on the first publish, so re-publishing cannot spam the class.
    const isFirstPublish = !notes.published_at;

    // Prepare PDF Data
    const pdfData = {
      sessionDate,
      teacherName: teacherProfile?.full_name || '',
      cohortLang: cohort.language,
      cohortLevel: cohort.level,
      cohortGoal: cohort.goal_track,
      sessionNum,
      vocabulary: notes.vocabulary,
      grammarTitle,
      grammarExplanation,
      exercises: notes.exercises,
      homework: notes.homework,
      // due_date is a calendar date: format it as-is (UTC) so it never shifts a day.
      dueDate: notes.due_date ? new Date(notes.due_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }) : '',
      teacherNote: notes.teacher_note,
      sessionNotesId: notes.id
    };

    // 2. Generate PDF using React PDF Renderer
    await loadPdfKit();
    const doc = React.createElement(MyDocument, { data: pdfData });
    const buffer = await pdf(doc).toBuffer();

    // 3. Upload to Supabase Storage Bucket
    const filePath = `cohort_${cohort.id}/session_${session.id}.pdf`;
    const { error: uploadError } = await supabase.storage
      .from(NOTES_BUCKET)
      .upload(filePath, buffer, {
        contentType: 'application/pdf',
        upsert: true
      });

    if (uploadError) throw uploadError;

    // Long-lived signed URL: works whether the bucket is public or private.
    const { data: signed, error: signError } = await supabase.storage
      .from(NOTES_BUCKET)
      .createSignedUrl(filePath, SIGNED_URL_TTL);
    if (signError || !signed?.signedUrl) throw (signError || new Error('Could not sign PDF URL'));
    const publicUrl = signed.signedUrl;

    // 4. Update session notes with pdf_url and published_at
    const { error: updateError } = await supabase
      .from('session_notes')
      .update({
        pdf_url: publicUrl,
        published_at: notes.published_at || new Date().toISOString()
      })
      .eq('id', session_notes_id);

    if (updateError) throw updateError;

    // 4b. Notes for a session that has started mean it took place: mark it completed
    // (TEA-03; the client no longer does this, the nightly cron remains the fallback).
    if (new Date(session.scheduled_at) <= new Date()) {
      const { error: completeErr } = await supabase
        .from('sessions')
        .update({ status: 'completed' })
        .eq('id', session.id)
        .in('status', ['scheduled', 'live']);
      if (completeErr) console.error('[Generate PDF Notes] Could not mark session completed:', completeErr.message);
    }

    // 5. Notify enrolled students via Resend
    const { data: enrollments, error: enrollmentsError } = await supabase
      .from('enrollments')
      .select('student_profiles (user_id, full_name)')
      .eq('cohort_id', cohort.id)
      .eq('status', 'active');

    if (isFirstPublish && !enrollmentsError && enrollments && enrollments.length > 0) {
      const resendKey = process.env.RESEND_API_KEY;
      if (resendKey && !resendKey.includes('YOUR_RESEND_API_KEY')) {
        const emailFrom = process.env.EMAIL_FROM_ADDRESS || 'Alimun <no-reply@alimun.com>';
        const dashboardUrl = `${process.env.APP_URL || 'https://alimun.com'}/student-dashboard.html`;

        const emailPromises = enrollments.map(async (e) => {
          const studentProfile = e.student_profiles;
          if (!studentProfile?.user_id) return;
          // Resolve each address directly (listUsers() only returns the first page).
          const { data: authUser } = await supabase.auth.admin.getUserById(studentProfile.user_id);
          const email = authUser?.user?.email;
          if (!email) return;

          const emailSubject = `Session notes ready — ${cohort.language} ${cohort.level} ${sessionDate}`.replace(/[<>\r\n]/g, '');
          const emailHtml = `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: sans-serif; line-height: 1.6; color: #080808; background-color: #f0efe9; padding: 20px; }
                .container { max-width: 600px; margin: 20px auto; padding: 30px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
                .header { background-color: #080808; color: #ffffff; padding: 20px; border-radius: 8px; text-align: center; }
                .header h1 { color: #ceff65; font-family: 'Anton', sans-serif; font-size: 28px; margin: 0; text-transform: uppercase; }
                .btn { display: inline-block; background-color: #ceff65; color: #080808; text-decoration: none; padding: 12px 24px; border-radius: 30px; font-weight: bold; margin-top: 20px; text-transform: uppercase; font-size: 12px; }
                .footer { font-size: 11px; color: #888; margin-top: 30px; border-top: 1px solid #eee; padding-top: 15px; text-align: center; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>alimun</h1>
                  <p>Session Notes Ready</p>
                </div>
                <div style="margin-top:20px;">
                  <p>Hello ${escapeHtml(studentProfile.full_name)},</p>
                  <p>Your session notes for <b>${escapeHtml(cohort.language)} ${escapeHtml(cohort.level)}</b> from <b>${escapeHtml(sessionDate)}</b> are now ready!</p>
                  
                  <div style="background-color: #fafaf8; border-left: 4px solid #ceff65; padding: 15px; margin: 20px 0; border-radius: 4px;">
                    <p style="margin:0 0 8px 0;"><strong>Grammar Focus:</strong> ${escapeHtml(grammarTitle)}</p>
                    <p style="margin:0 0 8px 0;"><strong>Vocabulary learned:</strong> ${pdfData.vocabulary?.length || 0} words</p>
                    <p style="margin:0;"><strong>Homework due date:</strong> ${escapeHtml(pdfData.dueDate || 'N/A')}</p>
                  </div>

                  <center>
                    <a href="${dashboardUrl}" class="btn" target="_blank">Open in your dashboard</a>
                  </center>
                </div>
                <div class="footer">
                  This is an automated notification from Alimun.
                </div>
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
              to: email,
              subject: emailSubject,
              html: emailHtml
            })
          });
        });

        await Promise.allSettled(emailPromises);
      }
    }

    return res.status(200).json({
      success: true,
      pdf_url: publicUrl,
      message: 'PDF successfully generated, uploaded, and students notified.'
    });

  } catch (err) {
    console.error('[Generate PDF Notes Error]:', err);
    return res.status(500).json({ error: 'Failed to generate session notes' });
  }
};

// Exposed for tests/unit/notes-pdf.test.js (renders without the database).
module.exports._test = { loadPdfKit, MyDocument, renderPdf: (data) => pdf(React.createElement(MyDocument, { data })).toBuffer() };
