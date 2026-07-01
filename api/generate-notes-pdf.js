/**
 * ============================================================
 *  ALIMUN — POST /api/generate-notes-pdf
 *  Vercel Serverless Function (Node.js runtime)
 * ============================================================
 */

const React = require('react');
const { Document, Page, Text, View, StyleSheet, Font, pdf } = require('@react-pdf/renderer');
const { createClient } = require('@supabase/supabase-js');

// Register Anton font for branding
Font.register({
  family: 'Anton',
  src: 'https://fonts.gstatic.com/s/anton/v25/1Ptgg8zYS_SKggPNyCg.ttf'
});

const styles = StyleSheet.create({
  page: { padding: 30, fontFamily: 'Helvetica', fontSize: 10, lineHeight: 1.5, color: '#080808', backgroundColor: '#f0efe9' },
  header: { backgroundColor: '#080808', padding: 20, borderRadius: 8, marginBottom: 20 },
  headerTitle: { fontFamily: 'Anton', fontSize: 26, color: '#ceff65', textTransform: 'uppercase', marginBottom: 5 },
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

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { session_notes_id } = req.body || {};
  if (!session_notes_id) return res.status(400).json({ error: 'Missing session_notes_id' });

  const supabase = getSupabaseAdmin();
  if (!supabase) return res.status(500).json({ error: 'Database client setup error' });

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
            teacher_id,
            teacher_profiles (
              full_name
            )
          )
        )
      `)
      .eq('id', session_notes_id)
      .single();

    if (notesError || !notes) return res.status(404).json({ error: 'Session notes not found' });

    const session = notes.sessions;
    const cohort = session.cohorts;
    const teacherProfile = cohort.teacher_profiles;

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
    const d = new Date(session.scheduled_at);
    const sessionDate = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

    // Prepare PDF Data
    const pdfData = {
      sessionDate,
      teacherName: teacherProfile.full_name,
      cohortLang: cohort.language,
      cohortLevel: cohort.level,
      cohortGoal: cohort.goal_track,
      sessionNum,
      vocabulary: notes.vocabulary,
      grammarTitle,
      grammarExplanation,
      exercises: notes.exercises,
      homework: notes.homework,
      dueDate: notes.due_date ? new Date(notes.due_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : '',
      teacherNote: notes.teacher_note,
      sessionNotesId: notes.id
    };

    // 2. Generate PDF using React PDF Renderer
    const doc = React.createElement(MyDocument, { data: pdfData });
    const buffer = await pdf(doc).toBuffer();

    // 3. Upload to Supabase Storage Bucket
    const filePath = `cohort_${cohort.id}/session_${session.id}.pdf`;
    const { error: uploadError } = await supabase.storage
      .from('session-notes')
      .upload(filePath, buffer, {
        contentType: 'application/pdf',
        upsert: true
      });

    if (uploadError) throw uploadError;

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('session-notes')
      .getPublicUrl(filePath);

    // 4. Update session notes with pdf_url and published_at
    const { error: updateError } = await supabase
      .from('session_notes')
      .update({
        pdf_url: publicUrl,
        published_at: new Date().toISOString()
      })
      .eq('id', session_notes_id);

    if (updateError) throw updateError;

    // 5. Notify enrolled students via Resend
    const { data: enrollments, error: enrollmentsError } = await supabase
      .from('enrollments')
      .select('student_profiles (user_id, full_name)')
      .eq('cohort_id', cohort.id)
      .eq('status', 'active');

    if (!enrollmentsError && enrollments && enrollments.length > 0) {
      const resendKey = process.env.RESEND_API_KEY;
      if (resendKey && !resendKey.includes('YOUR_RESEND_API_KEY')) {
        const studentUserIds = enrollments.map(e => e.student_profiles?.user_id).filter(Boolean);

        // Fetch emails from auth.users
        const { data: authUsers } = await supabase.auth.admin.listUsers();
        const userMap = {};
        (authUsers?.users || []).forEach(u => {
          userMap[u.id] = u.email;
        });

        const emailPromises = enrollments.map(async (e) => {
          const studentProfile = e.student_profiles;
          const email = userMap[studentProfile.user_id];
          if (!email) return;

          const emailSubject = `Session notes ready — ${cohort.language} ${cohort.level} ${sessionDate}`;
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
                  <p>Hello ${studentProfile.full_name},</p>
                  <p>Your session notes for <b>${cohort.language} ${cohort.level}</b> from <b>${sessionDate}</b> are now ready!</p>
                  
                  <div style="background-color: #fafaf8; border-left: 4px solid #ceff65; padding: 15px; margin: 20px 0; border-radius: 4px;">
                    <p style="margin:0 0 8px 0;"><strong>Grammar Focus:</strong> ${grammarTitle}</p>
                    <p style="margin:0 0 8px 0;"><strong>Vocabulary learned:</strong> ${pdfData.vocabulary?.length || 0} words</p>
                    <p style="margin:0;"><strong>Homework due date:</strong> ${pdfData.dueDate || 'N/A'}</p>
                  </div>

                  <center>
                    <a href="${publicUrl}" class="btn" target="_blank">Download Notes PDF</a>
                  </center>
                </div>
                <div class="footer">
                  This is an automated notification from Alimun. Verify this certificate at alimun.com/verify/${notes.id}
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
              from: 'Alimun <onboarding@resend.dev>', // Or verified Resend sender
              to: email,
              subject: emailSubject,
              html: emailHtml
            })
          });
        });

        await Promise.all(emailPromises);
      }
    }

    return res.status(200).json({
      success: true,
      pdf_url: publicUrl,
      message: 'PDF successfully generated, uploaded, and students notified.'
    });

  } catch (err) {
    console.error('[Generate PDF Notes Error]:', err);
    return res.status(500).json({ error: 'Internal server error: ' + err.message });
  }
};
