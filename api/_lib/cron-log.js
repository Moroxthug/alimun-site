/**
 * Record a cron run in public.cron_runs (migration 202610150400_phase3_cron),
 * so runs can be checked from the database without access to Vercel logs.
 * Best effort: a logging failure never fails the job.
 */
async function recordRun(supabase, job, ok, result) {
  /* A failed run is also a problem the owner is told about (api/_lib/alerts.js, 25 Nov 2026) */
  if (!ok) {
    let why = '';
    try { why = typeof result === 'string' ? result : JSON.stringify(result || {}); } catch (e) { why = 'failed'; }
    try { await require('./alerts.js').record('cron', job + ' failed', `${job.replace(/^vercel:/, '')} failed: ${why}`, {}); } catch (e) { /* best effort */ }
  }
  try {
    const { error } = await supabase.from('cron_runs').insert({ job, ok, result });
    if (error) console.warn(`[cron-log] could not record ${job}:`, error.message);
  } catch (err) {
    console.warn(`[cron-log] could not record ${job}:`, err.message);
  }
}

module.exports = { recordRun };
