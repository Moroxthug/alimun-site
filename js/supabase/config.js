/**
 * ============================================================
 *  ALIMUN — Supabase Client Module
 *  /js/supabase/config.js
 *
 *  Exports the browser client (publishable key, respects RLS) and
 *  a few auth helpers. There is deliberately no service-role client
 *  here: a service key must never reach the browser.
 *
 *  Usage (browser pages):
 *    import { supabase } from '/js/supabase/config.js';
 *
 *  Config is read from window.ALIMUN_CONFIG which is injected
 *  by a <script> tag in each HTML page (see snippet below).
 * ============================================================
 */

// ── Supabase CDN client (loaded via <script> in HTML head) ──
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.108.2/dist/umd/supabase.js" integrity="sha384-nD3dwv4+ZqdYnmZKe/249ImlV04om7xTCcsoSeQYI+RO+XlKPoqAWaJR1M5SJH9p" crossorigin="anonymous"></script>

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

  const role = getUserRole(user);

  if (role !== requiredRole) {
    window.location.href = redirectTo;
    return null;
  }
  return user;
}

/**
 * Resolve a user's role.
 * - 'admin' is ONLY trusted from app_metadata (server-controlled; users can
 *   edit their own user_metadata, so it must never grant admin).
 * - 'student' / 'teacher' also come ONLY from app_metadata (copied by the DB
 *   at signup and backfilled for older accounts). user_metadata is never read
 *   for roles; a user without an app role gets null and is sent to sign-in.
 * @param {import('@supabase/supabase-js').User|null} user
 * @returns {'student'|'teacher'|'admin'|null}
 */
export function getUserRole(user) {
  if (!user) return null;
  const role = user.app_metadata?.role || null;
  return role === 'admin' || role === 'student' || role === 'teacher' ? role : null;
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

// Removed (AUTH-19): getStudentProfile, getUpcomingSessions, getPastSessions and the
// realtime helpers were unused and over-fetched (session_notes(*), teacher_profiles embed
// that RLS no longer allows). Query teacher_public / scoped columns in the page instead.
