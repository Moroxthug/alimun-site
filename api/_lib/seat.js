/**
 * Seat transaction shared by /api/enroll (students) and the admin
 * "move student" action (/api/admin/teacher?action=enrollment-move).
 * Not a serverless function: files under api/_lib are helpers.
 *
 * Order matters (APIP-06): claim the new seat first with the atomic
 * increment_enrollment RPC, only then free the current seat, and put
 * everything back if a later step fails, so a student is never left
 * without the seat they had.
 */

/** Cancel the student's active enrollment(s). The enrollments trigger frees the seat(s). */
async function cancelActiveEnrollments(supabase, studentId) {
  const { error } = await supabase
    .from('enrollments')
    .update({ status: 'cancelled', cancelled_at: new Date().toISOString() })
    .eq('student_id', studentId)
    .eq('status', 'active');
  if (error) throw new Error(`cancel enrollments: ${error.message}`);
  const { error: pErr } = await supabase
    .from('student_profiles')
    .update({ enrolled_cohort_id: null })
    .eq('id', studentId);
  if (pErr) throw new Error(`clear enrolled_cohort_id: ${pErr.message}`);
}

/**
 * Give `studentId` a seat in `cohortId`. With `replaceCurrent`, the active
 * seat in `previousCohortId` is released once the new seat is secured.
 *
 * Returns { ok: true, newCount } or { ok: false, status, error, message }.
 * Throws only on unexpected errors (callers answer 500).
 */
async function takeSeat(supabase, { studentId, cohortId, previousCohortId = null, replaceCurrent = false }) {
  // Atomic capacity claim FIRST (SECURITY DEFINER RPC, service-role only).
  const { data: newCount, error: rpcError } = await supabase
    .rpc('increment_enrollment', { cohort_id: cohortId });
  if (rpcError || newCount === null) {
    console.warn('[seat] increment_enrollment failed or full:', rpcError?.message);
    return { ok: false, status: 409, error: 'cohort_full', message: 'This class is full.' };
  }

  // Then free the current seat when switching (the trigger decrements the
  // old cohort and may hand that seat to its waitlist).
  let previousEnrollmentIds = [];
  if (previousCohortId && replaceCurrent) {
    const { data: prevRows } = await supabase
      .from('enrollments')
      .select('id')
      .eq('student_id', studentId)
      .eq('status', 'active');
    previousEnrollmentIds = (prevRows || []).map((r) => r.id);
    try {
      await cancelActiveEnrollments(supabase, studentId);
    } catch (cancelErr) {
      await supabase.rpc('decrement_enrollment', { cohort_id: cohortId });
      throw cancelErr;
    }
  }

  // Best effort: give the old seat back if the new enrollment cannot be recorded.
  const restorePrevious = async () => {
    if (!previousEnrollmentIds.length) return;
    const { error: rErr } = await supabase
      .from('enrollments')
      .update({ status: 'active', cancelled_at: null })
      .in('id', previousEnrollmentIds);
    if (!rErr) {
      await supabase.from('student_profiles').update({ enrolled_cohort_id: previousCohortId }).eq('id', studentId);
    } else {
      console.error('[seat] Could not restore previous enrollment:', rErr);
    }
  };

  // The enrollments trigger counts UPDATE cancelled→active and DELETE of an
  // active row, but NOT INSERT — increment_enrollment above is the single
  // counter on the way in. Remove any stale cancelled row first so the
  // insert never turns into a (double-counted) re-activation.
  await supabase
    .from('enrollments')
    .delete()
    .eq('student_id', studentId)
    .eq('cohort_id', cohortId)
    .eq('status', 'cancelled');

  const { data: enrollRow, error: enrollError } = await supabase
    .from('enrollments')
    .insert({ student_id: studentId, cohort_id: cohortId, status: 'active' })
    .select('id')
    .single();
  if (enrollError || !enrollRow) {
    await supabase.rpc('decrement_enrollment', { cohort_id: cohortId });
    await restorePrevious();
    if (enrollError?.code === '23505') {
      // A parallel request already gave this student an active seat.
      return { ok: false, status: 409, error: 'already_enrolled', message: "You're already in a class." };
    }
    console.error('[seat] Insert enrollment error:', enrollError);
    return { ok: false, status: 500, error: 'Failed to record enrollment' };
  }

  // Defence in depth: if a parallel request also enrolled this student,
  // back this one out.
  const { data: activeRows } = await supabase
    .from('enrollments')
    .select('id')
    .eq('student_id', studentId)
    .eq('status', 'active');
  if ((activeRows || []).length > 1) {
    await supabase.from('enrollments').update({ status: 'cancelled', cancelled_at: new Date().toISOString() }).eq('id', enrollRow.id);
    return { ok: false, status: 409, error: 'already_enrolled', message: "You're already in a class." };
  }

  const { error: updateProfileError } = await supabase
    .from('student_profiles')
    .update({ enrolled_cohort_id: cohortId })
    .eq('id', studentId);
  if (updateProfileError) {
    console.error('[seat] Update student profile error:', updateProfileError);
    await supabase.from('enrollments').update({ status: 'cancelled', cancelled_at: new Date().toISOString() }).eq('id', enrollRow.id);
    await restorePrevious();
    return { ok: false, status: 500, error: 'Failed to assign class to your profile' };
  }

  return { ok: true, newCount };
}

module.exports = { cancelActiveEnrollments, takeSeat };
