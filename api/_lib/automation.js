/**
 * Automations that are safe to leave alone (owner, 13 Nov 2026; docs/OPERATIONS_PLAN.md, part 3). Every automated
 * action goes through act():
 *   - the automation's switch (public.automations.enabled): off means nothing happens;
 *   - dry run (automations.dry_run): the action is logged with what it would have done, and not done;
 *   - once only: an action already done for the same automation and key is skipped (automation_log's unique index);
 *   - a daily cap: past it, nothing more today, and the owner is told once;
 *   - every action, done, skipped by dry run or failed, is a line in automation_log;
 *   - three failures in a row pause the automation (enabled off, paused_reason) and the owner is told.
 * The service role writes; admins read the tables and switch automations from Admin, Automations (api/ops.js).
 */
const MAX_FAILURES = 3;

function startOfDayUtc() { const d = new Date(); return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())).toISOString(); }

/** One run's view of an automation: loaded once, then kept for the run. */
async function load(sb, name) {
  const { data, error } = await sb.from('automations').select('*').eq('name', name).maybeSingle();
  if (error) throw new Error('automation ' + name + ': ' + error.message);
  return data || null;
}

async function log(sb, row) {
  const { error } = await sb.from('automation_log').insert(row);
  // A second identical successful action is refused by the unique index: that is the "once only" guard working
  if (error && error.code !== '23505') console.error('[automation] log:', error.message);
  return !error;
}

/**
 * act(sb, auto, { key, action, target, sessionId, detail }, run, tellOwner)
 * auto: the row from load() (its counters are updated in place for the rest of the run).
 * run: async () => detail (the real action); not called when off, in dry run, already done or over the cap.
 * Returns 'off' | 'done_before' | 'capped' | 'dry_run' | 'done' | 'failed'.
 */
async function act(sb, auto, a, run, tellOwner) {
  if (!auto || !auto.enabled) return 'off';
  const { data: before } = await sb.from('automation_log').select('id').eq('automation', auto.name).eq('key', a.key).eq('ok', true).eq('dry_run', false).limit(1);
  if (before && before.length) return 'done_before';
  if (auto.dry_run) {
    const { data: dry } = await sb.from('automation_log').select('id').eq('automation', auto.name).eq('key', a.key).eq('dry_run', true).limit(1);
    if (dry && dry.length) return 'done_before';
    await log(sb, { automation: auto.name, key: a.key, action: a.action, target: a.target || null, session_id: a.sessionId || null, detail: a.detail || null, dry_run: true, ok: true });
    return 'dry_run';
  }
  if (auto._today == null) {
    const { count } = await sb.from('automation_log').select('id', { count: 'exact', head: true }).eq('automation', auto.name).eq('dry_run', false).eq('ok', true).gte('created_at', startOfDayUtc());
    auto._today = count || 0;
  }
  if (auto._today >= auto.daily_cap) {
    if (!auto._toldCap) {
      auto._toldCap = true;
      const capKey = 'cap:' + startOfDayUtc().slice(0, 10);
      const first = await log(sb, { automation: auto.name, key: capKey, action: 'stopped at the daily cap', detail: { cap: auto.daily_cap }, dry_run: false, ok: true });
      if (first && tellOwner) await tellOwner(`"${auto.label}" reached its daily cap of ${auto.daily_cap} actions and did nothing more today. Raise the cap in Admin, Automations if this is expected.`).catch(() => {});
    }
    return 'capped';
  }
  try {
    const out = await run();
    await log(sb, { automation: auto.name, key: a.key, action: a.action, target: a.target || null, session_id: a.sessionId || null, detail: Object.assign({}, a.detail || {}, out && typeof out === 'object' ? out : {}), dry_run: false, ok: true });
    auto._today++;
    if (auto.consecutive_failures) { auto.consecutive_failures = 0; await sb.from('automations').update({ consecutive_failures: 0 }).eq('name', auto.name); }
    return 'done';
  } catch (e) {
    const msg = String((e && e.message) || e).slice(0, 500);
    await log(sb, { automation: auto.name, key: a.key + ':failed:' + Date.now(), action: a.action, target: a.target || null, session_id: a.sessionId || null, detail: a.detail || null, dry_run: false, ok: false, error: msg });
    auto.consecutive_failures = (auto.consecutive_failures || 0) + 1;
    const patch = { consecutive_failures: auto.consecutive_failures };
    if (auto.consecutive_failures >= MAX_FAILURES) Object.assign(patch, { enabled: false, paused_at: new Date().toISOString(), paused_reason: `Paused after ${MAX_FAILURES} failures in a row. Last: ${msg}` });
    await sb.from('automations').update(patch).eq('name', auto.name);
    if (patch.enabled === false) {
      auto.enabled = false;
      if (tellOwner) await tellOwner(`"${auto.label}" failed ${MAX_FAILURES} times in a row and paused itself. Last error: ${msg}. Switch it on again in Admin, Automations once fixed.`).catch(() => {});
    }
    return 'failed';
  }
}

module.exports = { load, act, MAX_FAILURES };
