/**
 * 1:1 bookings (served by /api/enroll?action=oto-*; the function cap keeps it there).
 *
 *  - followup: Intensive students get one 20-minute 1:1 follow-up per week on
 *    that week's lesson. It can be booked from the end of their latest lesson
 *    until 3 days after it, from their class teacher's availability. Unused
 *    follow-ups do not carry over (owner decision 20 Oct 2026).
 *  - credit:   a paid 1:1 credit (EUR 60, session_credits) books a 60-minute
 *    slot with the student's class teacher within the next 14 days.
 *
 * Booking and cancelling run in the database (book_one_on_one /
 * cancel_one_on_one, migration 202610201200_one_on_one_bookings) so two
 * students can never take the same slot.
 */

const TZ = require('../../js/tz.js');

const FOLLOWUP_MIN = 20;
const CREDIT_MIN = 60;
const LESSON_MIN = 60;
const WINDOW_DAYS = 3;
const CREDIT_DAYS = 14;
const LEAD_MIN = 120;          // earliest bookable slot: 2 hours from now
const CANCEL_MIN = 120;        // students can cancel until 2 hours before
const REFUND_HOURS = 24;       // a paid credit comes back if cancelled 24 h before
const CREDIT_SOURCES = ['stripe_checkout_payment', 'one_on_one_refund'];
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const MIN = 60000;

/** Monday (UTC) of the week a lesson took place in, as YYYY-MM-DD. */
function weekOf(date) {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  d.setUTCDate(d.getUTCDate() - ((d.getUTCDay() + 6) % 7));
  return d.toISOString().slice(0, 10);
}

/** Booking window for a follow-up on the lesson that started at `lessonStart`. */
function followupWindow(lessonStart) {
  const start = new Date(lessonStart);
  return { from: new Date(start.getTime() + LESSON_MIN * MIN), to: new Date(start.getTime() + WINDOW_DAYS * 1440 * MIN) };
}

function overlaps(aStart, aMin, bStart, bMin) {
  return aStart < bStart + bMin * MIN && bStart < aStart + aMin * MIN;
}

/**
 * Free slot starts between `from` and `to` (Dates) of `minutes` length, on a
 * `step`-minute grid, inside the teacher's weekly `availability` (rows with
 * day_of_week, start_time, end_time, timezone), clear of `busy` intervals
 * ([{ start: ms, minutes }]) and at least LEAD_MIN after `now`.
 */
function candidateSlots({ from, to, minutes, step, availability, busy, now }) {
  const earliest = Math.max(from.getTime(), now + LEAD_MIN * MIN);
  let t = Math.ceil(earliest / (step * MIN)) * step * MIN;
  const out = [];
  for (; t + minutes * MIN <= to.getTime() && out.length < 200; t += step * MIN) {
    if (!TZ.fitsSlot(new Date(t), minutes, availability)) continue;
    if (busy.some((b) => overlaps(t, minutes, b.start, b.minutes))) continue;
    out.push(new Date(t).toISOString());
  }
  return out;
}

// Why a booking is not possible. The code travels with the English text so the
// dashboards can show it in the site language (student_oto_r_<code>).
const REASONS = {
  not_active: 'Your subscription is not active.',
  no_teacher: 'Your class has no teacher at the moment.',
  before_first_lesson: 'Your first follow-up opens after your first lesson.',
  booked: 'You have booked this week\'s follow-up.',
  window_closed: 'This week\'s follow-up window has closed. The next one opens after your next lesson.',
  before_lesson_end: 'You can book the follow-up once the lesson has ended.',
  join_class_first: 'Join a class first: private classes are booked with your class teacher.',
};
function setReason(part, code) {
  if (part.reason) return;
  part.reason = REASONS[code];
  part.reasonCode = code;
}

const ERRORS = {
  slot_taken: [409, 'That time was just taken. Please choose another one.'],
  student_busy: [409, 'You already have a 1:1 at that time.'],
  no_credit: [402, 'You have no 1:1 credit left. Buy one to book a private class.'],
  not_cancellable: [409, 'This booking can no longer be cancelled.'],
  duplicate: [409, 'You already have a follow-up for this week.'],
};
function dbError(res, err) {
  const msg = String(err?.message || '');
  const key = err?.code === '23505' ? 'duplicate' : Object.keys(ERRORS).find((k) => msg.includes(k));
  if (key) return res.status(ERRORS[key][0]).json({ error: key, message: ERRORS[key][1] });
  console.error('[1:1] database error:', msg);
  return res.status(500).json({ error: 'server_error', message: 'Please try again.' });
}

async function loadStudent(supabase, userId) {
  const { data } = await supabase
    .from('student_profiles')
    .select('id, full_name, tier, stripe_subscription_status, enrolled_cohort_id, user_id')
    .eq('user_id', userId)
    .maybeSingle();
  return data || null;
}

async function loadCohort(supabase, cohortId) {
  if (!cohortId) return null;
  const { data } = await supabase
    .from('cohorts')
    .select('id, tier, language, level, teacher_id, teacher_profiles ( id, user_id, full_name, status )')
    .eq('id', cohortId)
    .maybeSingle();
  return data || null;
}

async function creditCount(supabase, studentId) {
  const { data } = await supabase.from('session_credits').select('credits').eq('student_id', studentId).in('source', CREDIT_SOURCES);
  return (data || []).reduce((n, r) => n + (r.credits || 0), 0);
}

/** The latest lesson of the cohort that has started (and was not cancelled). */
async function lastLesson(supabase, cohortId, now) {
  const { data } = await supabase
    .from('sessions')
    .select('id, scheduled_at, status')
    .eq('cohort_id', cohortId)
    .neq('status', 'cancelled')
    .lte('scheduled_at', new Date(now).toISOString())
    .order('scheduled_at', { ascending: false })
    .limit(1);
  return data?.[0] || null;
}

async function teacherBusy(supabase, teacherId, from, to) {
  const lo = new Date(from.getTime() - LESSON_MIN * MIN).toISOString();
  const hi = to.toISOString();
  const [{ data: bookings }, { data: cohorts }] = await Promise.all([
    supabase.from('one_on_one_bookings').select('scheduled_at, duration_minutes')
      .eq('teacher_id', teacherId).in('status', ['booked', 'completed']).gte('scheduled_at', lo).lte('scheduled_at', hi),
    supabase.from('cohorts').select('id').eq('teacher_id', teacherId),
  ]);
  const busy = (bookings || []).map((b) => ({ start: Date.parse(b.scheduled_at), minutes: b.duration_minutes }));
  const ids = (cohorts || []).map((c) => c.id);
  if (ids.length) {
    const { data: lessons } = await supabase.from('sessions').select('scheduled_at')
      .in('cohort_id', ids).neq('status', 'cancelled').gte('scheduled_at', lo).lte('scheduled_at', hi);
    (lessons || []).forEach((l) => busy.push({ start: Date.parse(l.scheduled_at), minutes: LESSON_MIN }));
  }
  return busy;
}

async function availabilityOf(supabase, teacherId) {
  const { data } = await supabase.from('teacher_availability').select('day_of_week, start_time, end_time, timezone').eq('teacher_id', teacherId);
  return data || [];
}

/**
 * Works out what the student may book right now.
 * Returns { followup: {...} | null, credit: {...} | null } where each part says
 * whether booking is possible and, if not, why (shown to the student as is).
 */
async function entitlement(supabase, student, now) {
  const cohort = await loadCohort(supabase, student.enrolled_cohort_id);
  const teacher = cohort?.teacher_profiles;
  const teacherOk = !!teacher && teacher.status === 'approved';
  const active = student.stripe_subscription_status === 'active';
  const out = { followup: null, credit: null, teacher: teacherOk ? { id: teacher.id, name: teacher.full_name || 'Your teacher' } : null };

  if (student.tier === 'intensive' && cohort?.tier === 'intensive') {
    const f = { minutes: FOLLOWUP_MIN, canBook: false, reason: null, reasonCode: null, lesson: null, window: null, booking: null };
    if (!active) setReason(f, 'not_active');
    else if (!teacherOk) setReason(f, 'no_teacher');
    const lesson = await lastLesson(supabase, cohort.id, now);
    if (!lesson) {
      setReason(f, 'before_first_lesson');
    } else {
      const win = followupWindow(lesson.scheduled_at);
      const week = weekOf(new Date(lesson.scheduled_at));
      f.lesson = { id: lesson.id, startsAt: lesson.scheduled_at, week };
      f.window = { from: win.from.toISOString(), to: win.to.toISOString() };
      const { data: existing } = await supabase.from('one_on_one_bookings')
        .select('id, scheduled_at, duration_minutes, status, teacher_note')
        .eq('student_id', student.id).eq('kind', 'followup').eq('week_of', week).neq('status', 'cancelled').maybeSingle();
      if (existing) { f.booking = existing; setReason(f, 'booked'); }
      else if (now > win.to.getTime()) setReason(f, 'window_closed');
      else if (now < win.from.getTime()) setReason(f, 'before_lesson_end');
      else if (!f.reason) f.canBook = true;
    }
    out.followup = f;
  }

  const credits = await creditCount(supabase, student.id);
  if (credits > 0) {
    out.credit = { minutes: CREDIT_MIN, credits, canBook: active && teacherOk, reason: null, reasonCode: null };
    if (!teacherOk) setReason(out.credit, 'join_class_first');
    else if (!active) setReason(out.credit, 'not_active');
  }
  return { ...out, cohort };
}

async function freeSlots(supabase, kind, ent, now) {
  if (kind === 'followup') {
    const from = new Date(ent.followup.window.from); const to = new Date(ent.followup.window.to);
    const [availability, busy] = await Promise.all([availabilityOf(supabase, ent.teacher.id), teacherBusy(supabase, ent.teacher.id, from, to)]);
    return candidateSlots({ from, to, minutes: FOLLOWUP_MIN, step: 20, availability, busy, now });
  }
  const from = new Date(now); const to = new Date(now + CREDIT_DAYS * 1440 * MIN);
  const [availability, busy] = await Promise.all([availabilityOf(supabase, ent.teacher.id), teacherBusy(supabase, ent.teacher.id, from, to)]);
  return candidateSlots({ from, to, minutes: CREDIT_MIN, step: 30, availability, busy, now });
}

// ── Actions ──────────────────────────────────────────────────

/** oto-status: what the student can book, their bookings and (optionally) free slots. */
async function status(req, res, { supabase, user, body, now = Date.now() }) {
  const student = await loadStudent(supabase, user.id);
  if (!student) return res.status(404).json({ error: 'not_student', message: 'Student profile not found.' });
  const ent = await entitlement(supabase, student, now);
  const kind = body.kind === 'credit' ? 'credit' : body.kind === 'followup' ? 'followup' : null;
  let slots = null;
  if (kind && ent[kind]?.canBook) slots = await freeSlots(supabase, kind, ent, now);
  return res.status(200).json({ followup: ent.followup, credit: ent.credit, teacher: ent.teacher, slots, kind });
}

/** oto-book: { kind: 'followup' | 'credit', start: ISO } */
async function book(req, res, { supabase, user, body, now = Date.now() }) {
  const kind = body.kind === 'credit' ? 'credit' : body.kind === 'followup' ? 'followup' : null;
  const start = typeof body.start === 'string' ? new Date(body.start) : null;
  if (!kind || !start || isNaN(start)) return res.status(400).json({ error: 'bad_request', message: 'Choose a time.' });
  const student = await loadStudent(supabase, user.id);
  if (!student) return res.status(404).json({ error: 'not_student', message: 'Student profile not found.' });
  const ent = await entitlement(supabase, student, now);
  const part = ent[kind];
  if (!part || !part.canBook) return res.status(403).json({ error: 'not_allowed', reasonCode: part?.reasonCode || null, message: part?.reason || 'This booking is not available on your plan.' });
  const slots = await freeSlots(supabase, kind, ent, now);
  if (!slots.includes(start.toISOString())) return res.status(409).json({ error: 'slot_taken', message: ERRORS.slot_taken[1] });

  const { data: id, error } = await supabase.rpc('book_one_on_one', {
    p_student: student.id, p_teacher: ent.teacher.id, p_kind: kind, p_start: start.toISOString(),
    p_minutes: part.minutes,
    p_cohort: kind === 'followup' ? ent.cohort.id : null,
    p_after_session: kind === 'followup' ? ent.followup.lesson.id : null,
    p_week: kind === 'followup' ? ent.followup.lesson.week : null,
  });
  if (error) return dbError(res, error);
  return res.status(200).json({ success: true, id, start: start.toISOString(), minutes: part.minutes, teacher: ent.teacher.name });
}

/** oto-cancel: { id } (the student's own booking, until 2 hours before). */
async function cancel(req, res, { supabase, user, body, now = Date.now() }) {
  if (!UUID_RE.test(String(body.id || ''))) return res.status(400).json({ error: 'bad_request' });
  const student = await loadStudent(supabase, user.id);
  if (!student) return res.status(404).json({ error: 'not_student' });
  const { data: b } = await supabase.from('one_on_one_bookings').select('id, student_id, status, scheduled_at, kind').eq('id', body.id).maybeSingle();
  if (!b || b.student_id !== student.id) return res.status(404).json({ error: 'not_found', message: 'Booking not found.' });
  if (b.status !== 'booked' || Date.parse(b.scheduled_at) - now < CANCEL_MIN * MIN) {
    return res.status(409).json({ error: 'not_cancellable', message: 'Bookings can be cancelled until 2 hours before they start.' });
  }
  const { data: refunded, error } = await supabase.rpc('cancel_one_on_one', { p_booking: b.id, p_refund_hours: REFUND_HOURS });
  if (error) return dbError(res, error);
  return res.status(200).json({ success: true, creditReturned: !!refunded });
}

/** oto-note: { id, note } by the booking's teacher once it has started; marks it completed. */
async function note(req, res, { supabase, user, body, now = Date.now() }) {
  if (!UUID_RE.test(String(body.id || ''))) return res.status(400).json({ error: 'bad_request' });
  const text = String(body.note || '').trim();
  if (!text || text.length > 4000) return res.status(400).json({ error: 'bad_note', message: 'Write a note of up to 4000 characters.' });
  const { data: teacher } = await supabase.from('teacher_profiles').select('id').eq('user_id', user.id).maybeSingle();
  const { data: b } = await supabase.from('one_on_one_bookings').select('id, teacher_id, status, scheduled_at').eq('id', body.id).maybeSingle();
  if (!teacher || !b || b.teacher_id !== teacher.id) return res.status(404).json({ error: 'not_found', message: 'Booking not found.' });
  if (b.status === 'cancelled') return res.status(409).json({ error: 'cancelled', message: 'This booking was cancelled.' });
  if (Date.parse(b.scheduled_at) > now) return res.status(409).json({ error: 'too_early', message: 'You can write the note once the 1:1 has started.' });
  const { error } = await supabase.from('one_on_one_bookings')
    .update({ teacher_note: text, status: 'completed', updated_at: new Date(now).toISOString() }).eq('id', b.id);
  if (error) return dbError(res, error);
  return res.status(200).json({ success: true });
}

module.exports = {
  status, book, cancel, note,
  _test: { weekOf, followupWindow, candidateSlots, overlaps, entitlement, FOLLOWUP_MIN, CREDIT_MIN },
};
