# Fix log: student (student-dashboard.html)

Helpers added next to `escHtml` (student-dashboard.html:4697-4709): `safeHttpsUrl` (https-only href/src), `jsArg` (JSON-quoted + HTML-escaped value for onclick strings), `isUuid`.

STU-01 | Fixed | grammarTopic, due_date escaped and pdf_url https-validated with rel=noopener (student-dashboard.html:2909-2930); home schedule time/title/tag (4100-4104); calendar detail and Coming Up titles/dates (4226, 4248)
STU-02 | Fixed | escHtml(f.feedback_text), escHtml(latestText), teacher initials and date escaped in Progress feedback (student-dashboard.html:5280, 5296-5306)
STU-03 | Fixed | escHtml(b) for teacher badges, badges must be an array; experience_years, ratings escaped (student-dashboard.html:6438-6480). Server half: needs: supabase migration add badges/sessions_delivered/experience_years to guard_teacher_profile_admin_fields
STU-04 | Fixed | c.timezone, c.language, c.level, goal_track, tier, days, time, local schedule, spots text escaped in Discovery (3747-3860) and Change Cohort modal (6024, 6095-6121); claim modal lang/level (6322). Server half: needs: api/create-cohort.js validate timezone/language/schedule_time, cap description
STU-05 | Fixed | escHtml(myReview.review_text) (6479), escHtml(lang)/escHtml(level) in "No class cohorts available" (6024). DB half: needs: migration check constraint on student_profiles.language
STU-06 | Fixed | URL params must be UUIDs (6654); waitlistId re-validated, cohort taken from waitlistRec.cohort_id and must match URL value (6283-6312); Claim button bound with addEventListener instead of an onclick string (6329-6334)
STU-07 | Fixed | Client half: Word Matching buttons index-based (selectMatchWord takes word index, 4271-4278, 4880-4915) with escHtml text; Listening play button reads EXERCISES[i].audioText instead of embedding it (5002); placement options escaped (5152); ex.type/ex.time escaped (5039-5043); gradedScore/minWords escaped. Server half: needs: api/ai.js strip <> from generated fields and keep teacher free text out of the prompt
STU-08 | Fixed | Duplicate of APIP-01 (client half below)
APIP-01 | Fixed | Client half: confirmUpgrade sends an existing active/past_due/trialing subscriber to openBillingPortal (/api/stripe/billing-portal) instead of a new Checkout; if create-checkout still answers 409 it falls back to the portal (5778-5830). joinCohortDirect also routes a 409 from checkout to the portal (3986-3992). Server halves done by api/stripe.js and webhook fixers. needs: js/stripe/config.js attach `status` to the Error thrown by createCheckout (client currently matches 409 via message text)
APIP-13 | Fixed | Dashboard half: config fetch exposed as window.ALIMUN_CONFIG_READY (19); confirmUpgrade, payExtraClass and joinCohortDirect await it before importing /js/stripe/config.js or reading prices, so PRICE_IDS no longer freeze on placeholders. needs: js/stripe/config.js use err.error || err.message
APIP-14 | Deferred | Enrolling after payment needs the webhook to act on metadata.cohort_id (api/webhooks/stripe.js) or a return flow; feature work tracked with STU-12
STU-09 | Deferred | Server-side paid-tier check and structured grade/tutor actions belong in api/ai.js (needs: api/ai.js)
STU-10 | Deferred | Removing placeholder/simulated data needs empty-state copy (Phase 3, owner/copy decision)
STU-11 | Deferred | Needs a migration adding timezone/preferred_* /waitlist_opt_in columns or an owner decision to drop the fields; production schema must be checked first
STU-12 | Deferred | Return handling + enrol-after-payment is feature work spanning the webhook; needs copy for the confirmation message
STU-13 | Deferred | Stable exercise ids across the 5-minute poll is a refactor of the exercise state model; not a security fix
STU-14 | Fixed | Every teacher assignment type except Speaking now renders the text-answer form (student-dashboard.html:4712)
STU-15 | Fixed | Same fix as STU-07: matching handlers are index-based, so apostrophes no longer break the onclick (4892, 4915)
STU-16 | Fixed | uploadClassroomFile builds items with textContent, sanitises the storage path name, shows the real error instead of a fake Download link, and no longer pretends to upload without a session (7041-7085); classroom chat sender/text and transcript lines escaped (6887-6888, 6950-6951); default file list escaped. Listing uploaded files via storage.list/signed URLs is Deferred (feature work); fake default files are part of STU-10
STU-17 | Fixed | join alert shows data.message first (6728); room URL must be https (6742); callFrame.join wrapped in try/catch that calls leaveClass (6765-6772); leaveClass tolerates a failed leave(). Live-view button time gating Deferred (would need disabled styling; the server message now explains too_early)
STU-18 | Not an issue | Now handled centrally by js/view-as.js enforceReadOnly (another fixer): blocks SB insert/update/upsert/delete, storage writes and non-GET /api/ fetches in view-as mode, which covers every dashboard write and enrol/join/AI call
STU-19 | Fixed | Role routing uses app_metadata.role only (2842); localhost preview session now sets app_metadata.role so ?preview=1 still boots (2829-2832)
STU-20 | Deferred | Translation keys live in js/translations.js (needs: js/translations.js add keys for es/fr/de/pt/zh/ar/ma); moving hardcoded strings to keys needs copy
STU-21 | Fixed | "Book 1-on-1 Class" hidden when no one-off price is configured (1429, 2889-2894). "Weekly Limit Reached" copy and Stripe-driven prices Deferred (copy + server change in api/stripe.js config)
STU-22 | Fixed | Removed the #v-progress selector that overwrote the first metric row (was 3348-3349)
AUTH-13 | Fixed | student-dashboard part only: user_metadata.role fallback removed (2842)
AUTH-17 | Fixed | student-dashboard sinks for full_name, bio, specialty, location, badges, languages all escaped (see STU-03/04)

Other sinks swept: discovery/switch error messages (3608, 5960, 6528), activity list, progress metric rows (5238-5242), test results (5400-5404), chat member role/colour/time, checkout redirect URL https-validated (3998). All onclick strings with data ids now use jsArg (toggleTeacherPopover, closeTeacherPopover, joinWaitlist, joinCohortDirect, switchCohort, submitTeacherReview).
Check: node scripts/ci/check-inline-scripts.js -> OK: 367 scripts pass node --check.
