/**
 * Error alerts (owner, 25 Nov 2026). Emails failed for six days in November and nobody knew; failures were only in
 * Vercel's logs. Three parts:
 *
 * record(source, key, message, detail)  keeps a problem in public.system_problems (one row per source + key, counted;
 *                                       supabase/migrations/202611251000_system_problems.sql). Best effort, never throws.
 * watch(name, handler)                  wraps an api/ handler: a request that ends in a 5xx, or throws, is recorded as
 *                                       source 'api', key "<file>?action=<action> <status>", with the last error line
 *                                       the handler logged. Added at the end of every file in api/.
 * check(supabase)                       run by api/ops.js cron-alerts every 10 minutes: also records jobs that did not
 *                                       run when due, bursts of failed AI calls and payment events not processed, then
 *                                       tells the owner (email, and a pop-up on the admin's devices through
 *                                       api/_lib/admin-push.js) about every problem that is new or happened again
 *                                       since it was last told, at most once an hour per problem.
 * Nothing about learners goes in a problem beyond what the server already logs; messages are cut to 300 characters
 * and email addresses in them are masked.
 */
const { createClient } = require('@supabase/supabase-js');
const { AsyncLocalStorage } = require('async_hooks');

const HOUR = 3600000, MIN = 60000;
let admin = null;
function db() {
  if (admin) return admin;
  const url = process.env.SUPABASE_URL, key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  admin = createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
  return admin;
}
function clean(s, n) {
  return String(s == null ? '' : s)
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, '<email>')
    .replace(/\b(sk|rk|whsec|re)_[A-Za-z0-9_]{8,}/g, '<secret>')
    .replace(/eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{5,}/g, '<token>')
    .replace(/\s+/g, ' ').trim().slice(0, n || 300);
}

async function record(source, key, message, detail) {
  try {
    const c = db();
    if (!c) return;
    const { error } = await c.rpc('record_problem', { p_source: source, p_key: clean(key, 200) || 'unknown', p_message: clean(message, 300), p_detail: detail && typeof detail === 'object' ? detail : {} });
    if (error) console.warn('[alerts] not recorded:', error.message);
  } catch (e) { console.warn('[alerts] not recorded:', e && e.message); }
}

/* ---------- Requests that fail ---------- */
/* The last error line each request logged, kept per request (two requests on one server never mix) */
const als = new AsyncLocalStorage();
let patched = false;
function patchConsole() {
  if (patched) return;
  patched = true;
  const orig = console.error;
  console.error = function () {
    const st = als.getStore();
    if (st) { try { st.last = clean(Array.prototype.map.call(arguments, (a) => (a && a.message) || (typeof a === 'string' ? a : JSON.stringify(a))).join(' '), 300); } catch (e) { /* keep going */ } }
    return orig.apply(console, arguments);
  };
}
function watch(name, handler) {
  patchConsole();
  const wrapped = function (req, res) { return als.run({ last: '' }, () => run(req, res)); };
  const run = async function (req, res) {
    const st = als.getStore();
    const action = String((req.query && req.query.action) || '').slice(0, 40);
    let done = false;
    const note = (status, why) => {
      if (done) return Promise.resolve();
      done = true;
      return record('api', `${name}${action ? '?action=' + action : ''} ${status}`, why || st.last || `answered ${status}`, { method: req.method, status });
    };
    const end = res.end;
    res.end = function () {
      const args = arguments;
      if (res.statusCode >= 500 && !done) { note(res.statusCode).then(() => end.apply(res, args), () => end.apply(res, args)); return res; }
      return end.apply(res, args);
    };
    try {
      return await handler(req, res);
    } catch (e) {
      await note(500, 'crashed: ' + clean(e && (e.stack || e.message), 300));
      throw e;
    }
  };
  Object.keys(handler).forEach((k) => { wrapped[k] = handler[k]; });
  return wrapped;
}

/* ---------- The ten-minute check ---------- */
/* Jobs that record every run (api/_lib/cron-log.js) and how long they may stay silent before it is a problem */
const DUE = {
  'vercel:cron-create-rooms': 26 * HOUR, 'vercel:cron-billing': 26 * HOUR, 'vercel:cron-rooms': 26 * HOUR,
  'vercel:cron-finance': 26 * HOUR, 'vercel:cron-digest': 26 * HOUR, 'vercel:cron-reminders': 26 * HOUR,
  'vercel:cron-alerts': 40 * MIN,
};
function ago(ms) { const m = Math.round(ms / MIN); return m < 120 ? m + ' minutes' : Math.round(m / 60) + ' hours'; }

async function scan(c) {
  const now = Date.now();
  /* Jobs that did not run when due (only jobs that have run before, so a new or retired job is not reported) */
  const since = new Date(now - 8 * 24 * HOUR).toISOString();
  const runs = await c.from('cron_runs').select('job, ran_at').gte('ran_at', since).order('ran_at', { ascending: false }).limit(5000);
  const last = {};
  (runs.data || []).forEach((r) => { if (!last[r.job]) last[r.job] = new Date(r.ran_at).getTime(); });
  for (const job of Object.keys(DUE)) {
    if (!last[job] || job === 'vercel:cron-alerts') continue;
    if (now - last[job] > DUE[job]) await record('cron', job + ' late', `${job.replace(/^vercel:/, '')} has not run for ${ago(now - last[job])}`, { last_run: new Date(last[job]).toISOString() });
  }
  /* Failed AI calls: five or more in the last 15 minutes, per action */
  const ai = await c.from('ai_usage').select('action, provider, error').eq('success', false).gte('created_at', new Date(now - 15 * MIN).toISOString()).limit(500);
  const byAction = {};
  (ai.data || []).forEach((a) => { const k = a.action || 'unknown'; (byAction[k] = byAction[k] || []).push(a); });
  for (const k of Object.keys(byAction)) {
    if (byAction[k].length >= 5) await record('ai', k, `${byAction[k].length} failed ${k.replace(/_/g, ' ')} calls in 15 minutes; last: ${clean(byAction[k][0].error, 160)}`, { provider: byAction[k][0].provider || null });
  }
  /* Payment events not processed in the last hour */
  const hooks = await c.from('webhook_logs').select('event_type, status, error_message, created_at').gte('created_at', new Date(now - HOUR).toISOString()).limit(500);
  /* api/webhooks/stripe.js writes pending, then processed or failed; pending for a few seconds is normal */
  (hooks.data || []).forEach((h) => { if (h.status === 'failed' || (h.status === 'pending' && now - new Date(h.created_at).getTime() > 15 * MIN)) h.bad = true; });
  for (const h of (hooks.data || []).filter((x) => x.bad)) await record('stripe', h.event_type || 'unknown', `Stripe event not processed: ${clean(h.error_message || h.status, 200)}`, {});
}

const LABEL = { api: 'Server', email: 'Email', cron: 'Automatic job', ai: 'AI', stripe: 'Payments', other: 'Other' };
async function check(c, tell) {
  await scan(c);
  const now = Date.now();
  const { data, error } = await c.from('system_problems').select('*').gte('last_at', new Date(now - 7 * 24 * HOUR).toISOString()).order('last_at', { ascending: false }).limit(200);
  if (error) throw new Error(error.message);
  const due = (data || []).filter((p) => {
    if (!p.alerted_at) return true;
    const told = new Date(p.alerted_at).getTime();
    return new Date(p.last_at).getTime() > told && now - told >= HOUR && p.count > p.alerted_count;
  });
  if (!due.length) return { problems: (data || []).length, told: 0 };
  const lines = due.slice(0, 20).map((p) => ({
    source: LABEL[p.source] || p.source, key: p.key, message: p.message,
    times: p.alerted_at ? p.count - p.alerted_count : p.count, last_at: p.last_at,
  }));
  const ok = await tell(lines, due.length);
  if (ok) {
    for (const p of due) await c.from('system_problems').update({ alerted_at: new Date().toISOString(), alerted_count: p.count }).eq('id', p.id);
  }
  return { problems: (data || []).length, told: ok ? due.length : 0, delivered: ok };
}

module.exports = { record, watch, check, clean, _test: { scan, DUE } };
