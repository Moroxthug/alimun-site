/**
 * ============================================================
 *  ALIMUN — Supabase Client Module
 *  /js/supabase/config.js
 *
 *  Exports two clients:
 *    supabase         — browser client (uses anon key)
 *    supabaseAdmin    — server-side only (uses service_role key)
 *                       NEVER import supabaseAdmin in pages that
 *                       run in the browser — it bypasses RLS.
 *
 *  Usage (browser pages):
 *    import { supabase } from '/js/supabase/config.js';
 *
 *  Usage (hypothetical server-side / edge function):
 *    import { supabaseAdmin } from '/js/supabase/config.js';
 *
 *  Config is read from window.ALIMUN_CONFIG which is injected
 *  by a <script> tag in each HTML page (see snippet below).
 * ============================================================
 */

// ── Supabase CDN client (loaded via <script> in HTML head) ──
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js"></script>

const { createClient } = window.supabase;

// ── Read config injected by the page ─────────────────────────
// Each HTML page must include this snippet before importing this module:
//
//   <script>
//     window.ALIMUN_CONFIG = {
//       supabaseUrl:     'https://your-project-ref.supabase.co',
//       supabaseAnonKey: 'eyJ...',
//     };
//   </script>
//
// For local development, values come from your .env file via a
// simple build step or a local proxy server.

const cfg = window.ALIMUN_CONFIG || {
  supabaseUrl:     'https://dgaiasmefcbrtzqwdyri.supabase.co',
  supabaseAnonKey: 'sb_publishable_6epxmytr0e38p6OI77U_NQ_8pFzrzlh',
};

if (!cfg.supabaseUrl || !cfg.supabaseAnonKey) {
  console.error(
    '[Alimun] window.ALIMUN_CONFIG is missing or incomplete. ' +
    'Make sure supabaseUrl and supabaseAnonKey are set before ' +
    'importing this module. See supabase/SETUP_GUIDE.md Section 6.'
  );
}

// ── Shared client options ─────────────────────────────────────
const clientOptions = {
  auth: {
    autoRefreshToken: true,
    persistSession:   true,
    detectSessionInUrl: true,
    storageKey: 'alimun-auth',
  },
  global: {
    headers: {
      'x-application': 'alimun-web',
    },
  },
};

// ── Browser client (anon key — respects RLS) ─────────────────
export const supabase = createClient(
  cfg.supabaseUrl,
  cfg.supabaseAnonKey,
  clientOptions
);

// ── Server / admin client (service role — bypasses RLS) ──────
// Only use this in trusted server contexts (edge functions, webhooks).
// If window.ALIMUN_CONFIG.supabaseServiceRoleKey is not set this
// will gracefully fall back to null and log a warning.
export const supabaseAdmin = cfg.supabaseServiceRoleKey
  ? createClient(cfg.supabaseUrl, cfg.supabaseServiceRoleKey, {
      ...clientOptions,
      auth: {
        autoRefreshToken:   false,
        persistSession:     false,
        detectSessionInUrl: false,
      },
    })
  : null;

// supabaseAdmin is intentionally null in the browser (no service role key).
// It is only available when window.ALIMUN_CONFIG.supabaseServiceRoleKey is set
// inside a trusted server environment (e.g. Supabase Edge Functions).

// ── Auth helpers ──────────────────────────────────────────────

/**
 * Get the currently logged-in user, or null.
 * @returns {Promise<import('@supabase/supabase-js').User|null>}
 */
export async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error) {
    console.warn('[Alimun] getCurrentUser error:', error.message);
    return null;
  }
  return user;
}

/**
 * Get the current session, or null.
 * @returns {Promise<import('@supabase/supabase-js').Session|null>}
 */
export async function getCurrentSession() {
  const { data: { session }, error } = await supabase.auth.getSession();
  if (error) {
    console.warn('[Alimun] getCurrentSession error:', error.message);
    return null;
  }
  return session;
}

/**
 * Redirect to sign-in page if no active session exists.
 * Call this at the top of any protected page script.
 * @param {string} [redirectTo='/signin.html'] - Page to redirect to.
 */
export async function requireAuth(redirectTo = '/signin.html') {
  const session = await getCurrentSession();
  if (!session) {
    window.location.href = redirectTo;
    return null;
  }
  return session;
}

/**
 * Redirect to sign-in page if user does not have the required role.
 * @param {'student'|'teacher'|'admin'} requiredRole
 * @param {string} [redirectTo='/signin.html']
 */
export async function requireRole(requiredRole, redirectTo = '/signin.html') {
  // BUG FIX: supabase.auth.getUser() returns the Auth User object which does
  // NOT expose custom columns added to auth.users (like our "role" column).
  // The role must be read from the user's app_metadata or from a separate
  // DB query. We use app_metadata here — set it via the service role when
  // creating/updating users (e.g. in a Supabase Edge Function trigger).
  const user = await getCurrentUser();
  if (!user) {
    window.location.href = redirectTo;
    return null;
  }

  // Role is stored in app_metadata by the auth trigger / admin API.
  // Falls back to raw_user_meta_data for legacy compatibility.
  const role =
    user.app_metadata?.role ||
    user.user_metadata?.role ||
    null;

  if (role !== requiredRole) {
    window.location.href = redirectTo;
    return null;
  }
  return user;
}

/**
 * Sign out and redirect.
 * @param {string} [redirectTo='/signin.html']
 */
export async function signOut(redirectTo = '/signin.html') {
  await supabase.auth.signOut();
  window.location.href = redirectTo;
}

/**
 * Fetch the student profile for the current user.
 * @returns {Promise<Object|null>}
 */
export async function getStudentProfile() {
  const user = await getCurrentUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from('student_profiles')
    .select(`
      *,
      cohorts (
        id, language, level, goal_track, tier, status,
        schedule_days, schedule_time, timezone,
        teacher_profiles ( full_name, rating )
      )
    `)
    .eq('user_id', user.id)
    .single();

  if (error) {
    console.warn('[Alimun] getStudentProfile error:', error.message);
    return null;
  }
  return data;
}

/**
 * Fetch the teacher profile for the current user.
 * @returns {Promise<Object|null>}
 */
export async function getTeacherProfile() {
  const user = await getCurrentUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from('teacher_profiles')
    .select('*')
    .eq('user_id', user.id)
    .single();

  if (error) {
    console.warn('[Alimun] getTeacherProfile error:', error.message);
    return null;
  }
  return data;
}

/**
 * Fetch upcoming sessions for a given cohort ID.
 * @param {string} cohortId
 * @returns {Promise<Array>}
 */
export async function getUpcomingSessions(cohortId) {
  const { data, error } = await supabase
    .from('sessions')
    .select('*, session_notes(*)')
    .eq('cohort_id', cohortId)
    .gte('scheduled_at', new Date().toISOString())
    .order('scheduled_at', { ascending: true });

  if (error) {
    console.warn('[Alimun] getUpcomingSessions error:', error.message);
    return [];
  }
  return data ?? [];
}

/**
 * Fetch past sessions with notes for a given cohort ID.
 * @param {string} cohortId
 * @param {number} [limit=20]
 * @returns {Promise<Array>}
 */
export async function getPastSessions(cohortId, limit = 20) {
  const { data, error } = await supabase
    .from('sessions')
    .select('*, session_notes(*)')
    .eq('cohort_id', cohortId)
    .eq('status', 'completed')
    .order('scheduled_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.warn('[Alimun] getPastSessions error:', error.message);
    return [];
  }
  return data ?? [];
}

// ── Real-time helpers ─────────────────────────────────────────

/**
 * Subscribe to live session status changes for a cohort.
 * @param {string} cohortId
 * @param {Function} callback - Called with the changed session row.
 * @returns {import('@supabase/supabase-js').RealtimeChannel} — call .unsubscribe() to clean up.
 */
export function subscribeToSessionUpdates(cohortId, callback) {
  return supabase
    .channel(`sessions:cohort:${cohortId}`)
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'sessions',
        filter: `cohort_id=eq.${cohortId}`,
      },
      (payload) => callback(payload.new ?? payload.old)
    )
    .subscribe();
}

/**
 * Subscribe to new session_notes publications for a cohort.
 * @param {string} cohortId
 * @param {Function} callback
 * @returns {import('@supabase/supabase-js').RealtimeChannel}
 */
export function subscribeToSessionNotes(cohortId, callback) {
  // BUG FIX: session_notes has no direct cohort_id column — it joins via
  // session_id -> sessions.cohort_id. Supabase Realtime filters can only
  // filter on columns that exist on the table itself, so we cannot use
  // a direct filter here. Instead we filter client-side after fetching
  // the session IDs that belong to this cohort.
  //
  // Strategy: listen to all session_notes INSERTs, then check whether
  // the new note's session_id belongs to a session in this cohort.
  // For a production system with many cohorts, consider a DB function
  // that publishes to a named channel instead.
  return supabase
    .channel(`session_notes:cohort:${cohortId}`)
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'session_notes',
      },
      async (payload) => {
        const note = payload.new;
        // Verify this note belongs to a session in the requested cohort
        const { data: session } = await supabase
          .from('sessions')
          .select('id')
          .eq('id', note.session_id)
          .eq('cohort_id', cohortId)
          .maybeSingle();

        if (session) callback(note);
      }
    )
    .subscribe();
}
