/**
 * Daily.co REST helper shared by join-session and cron-create-rooms.
 *
 * Two keys exist in Vercel (DAILY_API_KEY and DAILY_CO_API_KEY). The primary
 * is tried first; if Daily rejects it as unauthorised, the other one is tried
 * and, when it works, used for the rest of this function instance.
 */
const DAILY_API = 'https://api.daily.co/v1';

function dailyKeys() {
  return [process.env.DAILY_API_KEY, process.env.DAILY_CO_API_KEY]
    .map((k) => (k || '').trim())
    .filter((k, i, all) => k && all.indexOf(k) === i);
}

let preferred = 0;

async function callOnce(path, options, key) {
  const res = await fetch(`${DAILY_API}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`,
      ...(options.headers || {}),
    },
  });
  const body = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, body };
}

function isAuthError(r) {
  return r.status === 401 || r.status === 403 || r.body?.error === 'authentication-error' || r.body?.error === 'authorization-header-error';
}

async function dailyFetch(path, options = {}) {
  const keys = dailyKeys();
  if (!keys.length) return { ok: false, status: 0, body: { error: 'no-daily-key' } };
  const order = keys.map((_, i) => (i + preferred) % keys.length);
  let last = null;
  for (const i of order) {
    last = await callOnce(path, options, keys[i]);
    if (!isAuthError(last)) {
      preferred = i;
      return last;
    }
  }
  return last;
}

/** Short, secret-free description of a failed Daily response for logs. */
function dailyErrorSummary(r) {
  if (!r) return null;
  return { status: r.status, error: r.body?.error || null, info: String(r.body?.info || '').slice(0, 300) };
}

function hasDailyKey() {
  return dailyKeys().length > 0;
}

module.exports = { dailyFetch, dailyErrorSummary, hasDailyKey };
