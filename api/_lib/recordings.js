/**
 * Class recordings (owner, 13 Nov 2026): five 60-second proof clips at random moments in every class, full recordings
 * that only admins start, deletion when due, and a guard for any recording Alimun did not start. Daily's REST API:
 *   POST /rooms/{room}/recordings/start { type: 'cloud', maxDuration, layout }   (stops by itself at maxDuration)
 *   POST /rooms/{room}/recordings/stop
 *   GET  /recordings?room_name=      list (id, start_ts, status, duration, ...)
 *   GET  /recordings/{id}/access-link?valid_for_secs=   a short-lived link to watch or download
 *   DELETE /recordings/{id}
 * Rooms allow cloud recording only for the server: no pass shows the record button, teachers are not room owners.
 */
const crypto = require('crypto');
const { dailyFetch } = require('./daily.js');

const CLIPS = 5, CLIP_SECONDS = 60;
const KEEP_DAYS = { proof: 30, full: 90, unknown: 90 };
const MATCH_SECONDS = 240; /* a Daily recording belongs to the request made within 4 minutes of its start */

/** The minutes after the start when a class date's proof clips are taken: one at a random moment in each fifth of
    the class (not in its first 3 or last 4 minutes), the same every time for the same class date. */
function clipMinutes(sessionId, minutes) {
  const from = 3, to = Math.max(from + CLIPS, (minutes || 60) - 4), span = (to - from) / CLIPS;
  const h = crypto.createHash('sha256').update(String(sessionId)).digest();
  const out = [];
  for (let i = 0; i < CLIPS; i++) {
    const a = from + i * span, m = Math.floor(a + (h[i] / 256) * span);
    out.push(Math.min(to - 1, Math.max(from, m)));
  }
  return out.filter((m, i, all) => all.indexOf(m) === i);
}

async function start(room, seconds) {
  const r = await dailyFetch(`/rooms/${encodeURIComponent(room)}/recordings/start`, {
    method: 'POST', body: JSON.stringify({ type: 'cloud', maxDuration: Math.max(30, Math.min(10800, Math.round(seconds))), layout: { preset: 'default' } }),
  });
  if (!r.ok) throw new Error(`Daily would not start the recording (${r.status}): ${JSON.stringify(r.body).slice(0, 200)}`);
  return r.body;
}
async function stop(room) {
  const r = await dailyFetch(`/rooms/${encodeURIComponent(room)}/recordings/stop`, { method: 'POST', body: '{}' });
  if (!r.ok) throw new Error(`Daily would not stop the recording (${r.status}): ${JSON.stringify(r.body).slice(0, 200)}`);
  return r.body;
}
async function list(room) {
  const r = await dailyFetch(`/recordings?room_name=${encodeURIComponent(room)}&limit=100`);
  if (r.status === 404) return [];
  if (!r.ok) throw new Error(`Daily recordings ${r.status}: ${JSON.stringify(r.body).slice(0, 200)}`);
  return (r.body && r.body.data) || [];
}
async function link(id) {
  const r = await dailyFetch(`/recordings/${encodeURIComponent(id)}/access-link?valid_for_secs=900`);
  if (!r.ok || !r.body || !r.body.download_link) throw new Error(`Daily gave no link (${r.status})`);
  return { url: r.body.download_link, expires: r.body.expires };
}
async function remove(id) {
  const r = await dailyFetch(`/recordings/${encodeURIComponent(id)}`, { method: 'DELETE' });
  if (!r.ok && r.status !== 404) throw new Error(`Daily would not delete the recording (${r.status})`);
  return true;
}

/**
 * Pure: pairs Daily's recordings of a room with Alimun's requests. Returns { link: [[row, rec]], update: [[row, rec]], unknown: [rec] }.
 * rows: class_recordings of the room; recs: Daily's list for the room.
 */
function pair(rows, recs) {
  const out = { link: [], update: [], unknown: [] }, used = new Set();
  rows.forEach((r) => { if (r.daily_recording_id) used.add(r.id); });
  for (const rec of recs) {
    const known = rows.find((r) => r.daily_recording_id === rec.id);
    if (known) { out.update.push([known, rec]); continue; }
    const t = (rec.start_ts || 0) * 1000;
    const cands = rows.filter((r) => !r.daily_recording_id && !used.has(r.id) && r.kind !== 'unknown' && !r.start_error && Math.abs(new Date(r.requested_at).getTime() - t) <= MATCH_SECONDS * 1000)
      .sort((a, b) => Math.abs(new Date(a.requested_at).getTime() - t) - Math.abs(new Date(b.requested_at).getTime() - t));
    if (cands.length) { used.add(cands[0].id); out.link.push([cands[0], rec]); } else out.unknown.push(rec);
  }
  return out;
}
function deleteAfter(kind, startedMs) { return new Date(startedMs + (KEEP_DAYS[kind] || 30) * 86400000).toISOString(); }

module.exports = { clipMinutes, start, stop, list, link, remove, pair, deleteAfter, CLIPS, CLIP_SECONDS, KEEP_DAYS };
