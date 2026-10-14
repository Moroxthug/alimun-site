# Fix log: pages (admin, view-as, auth pages, marketing, i18n, build)

Format: `ID | Status | what changed`. Locale folders were not edited; the lead regenerates them with `npm run build`.

ADM-02 | Fixed (client half) | admin.html saveStudentDetail: checks `resp.ok` of the tier email and the toast says when the email failed. needs: api/send-admin-email.js `from` = EMAIL_FROM_ADDRESS fallback, generic error body
ADM-04 | Fixed | admin.html openCreateCohortModal: "Academic Track" select from GOAL_TRACKS; saveNewCohort validates and inserts `goal_track`
ADM-05 | Fixed | admin.html: new `busyButton()` disables the button during saveNewCohort, saveNewPayout, saveNewStudent, saveNewTeacher, markPayoutPaid; Mark Paid asks `confirm()`; if the sessions insert fails the new cohort is deleted (rollback) and the admin is told. A single-transaction RPC is still preferable (not added)
ADM-06 | Fixed (client mitigation) | admin.html saveNewTeacher/saveNewStudent: UUID validated; Add Faculty warns that the account role is not changed. Server action that sets app_metadata.role is deferred (needs: api/admin/teacher.js `?action=create`)
ADM-07 | Fixed | admin.html: `fmtUtc()` renders "UTC" columns (overview, sessions) with timeZone UTC; "today" in loadLiveSessions is the UTC day
ADM-08 | Deferred | Removing the static chart and the payouts x 1.5 "volume"/margin block is a Phase 3 honesty-pass change that needs owner decision on what replaces it
ADM-09 | Fixed (counts) | admin.html loadStats uses `count: 'exact', head: true`. List paging and SQL aggregation of AI usage deferred (feature work)
ADM-10 | Deferred | Fix is in api/admin/teacher.js (other fixer); admin.html only displays the server's `emailed` flag
ADM-11 | Fixed (admin half) | admin.html student modal shows a warning when the student has an active Stripe subscription (manual tier change is reset by the webhook). needs: api/send-admin-email.js escape fullName/tierName/customBody, neutral "tier changed" wording
ADM-12 | Fixed | admin.html loadSettings masks values whose key matches /secret|key|token|password/i; Edit still reveals the value
ADM-13 | Fixed | admin.html (and signin, signup, signup-success, forgot-password, reset-password, js/supabase/config.js comment): supabase-js pinned to 2.108.2 (package-lock version), non-minified static file, `integrity=sha384-nD3dwv4+...` + crossorigin. CSP is APIO-13 (vercel.json, other fixer). needs: student-dashboard.html, teacher-dashboard.html same tag
ADM-14 | Fixed | js/view-as.js: resolve() now makes view-as read-only: table insert/update/upsert/delete and storage writes return a `{ error: 'Read-only in admin view' }` result, non-GET same-origin `/api/` fetches get a 403 (no AI/enrol/join/checkout as the admin); sets `window.ALIMUN_VIEW_AS_READONLY`; `?as=` and stored ids must be UUIDs; bar note "Read-only preview"; emoji toggle glyph replaced. Dashboards may also check the flag to hide write controls (STU-18/TEA-13 owners)
ADM-sweep | Fixed | admin.html: admin gate redirect no longer reads user_metadata.role; saveSessionChanges rejects non-https room URLs and invalid dates; saveStudentDetail onclick args JSON-encoded. All other innerHTML/onclick interpolations re-checked: escaped or uuid/constant. CSV formula injection: Not an issue (admin.html has no CSV export)
AUTH-01 | Deferred (partial fix) | signup.html completeFounding now checks the founding price is configured before saving `founding_member`. The real fix is the SQL guard forcing tier on client INSERT (SQL fixer). Client still sends `tier` because the column is NOT NULL and whether prod accepts 'waitlist' is unconfirmed (AUTH-16); switching paid signups to 'waitlist' could break signup
AUTH-02 | Fixed (client half) | reset-password.html: after a successful updateUser, `signOut({ scope: 'others' })`. Enabling "Confirm email" / "Secure password change" is a Supabase dashboard setting for the owner
AUTH-04 | Fixed | signup.html renderTeaching uses LANGS (English first, default English); applyTeacher validates the value against LANGS
AUTH-05 | Deferred | Fix is in SQL policy and api/admin/teacher.js (other fixers)
AUTH-06 | Fixed | signin.html showPending escapes the name (escapeHtml added) in text and data-i18n-var-name; signup.html escapes name, email, specialty, bio, language, coupon, first name and tier name in all templates (escapeHtml added); i18n side is WEB-07
AUTH-07 | Fixed | signup.html saveDetails: when the account already exists in this visit (`newUserId`), skip signUp and go to step 3
AUTH-08 | Deferred | Product decision; only fixable together with email confirmation (AUTH-02) and rate limiting
AUTH-09 | Fixed | reset-password.html: only PASSWORD_RECOVERY unlocks the form (`hasRecoverySession` is now checked); URL hash/query errors (otp_expired) show the link-expired message and disable the button on load
AUTH-10 | Fixed | signup-success.html: success only when payment_status is 'paid' or 'no_payment_required' (not status 'complete'); founding payments (session.type) say the spot is reserved instead of "account is active"
AUTH-11 | Fixed | signup.html: `dbErrorText()` logs PostgREST errors and shows the existing generic message (4 inserts); forgot-password.html shows the generic message; reset-password.html maps session errors to the link-expired text
AUTH-12 | Fixed | supabase-js pinned with SRI (see ADM-13); vvkey scripts removed from tiers.html, careers.html, careers-teachers-section.html (see WEB-03)
AUTH-13 | Fixed (client) | js/supabase/config.js getUserRole reads app_metadata.role only; signup.html resumeFromSession reads role from a fresh `getUser()` app_metadata only; admin.html gate redirect same. needs: api/send-admin-email.js `app_metadata.role === 'admin'` only (ADM-01)
AUTH-14 | Deferred | Removing or repurposing the Student/Teacher tabs is a UI change for the owner
AUTH-15 | Deferred | Translation work. No code path needs the keys (i18n keeps the English markup when a key is missing), so no English fallbacks were added
AUTH-16 | Deferred | SQL migration (other fixer)
AUTH-17 | Not an issue (my files) | admin.html renders every listed applicant field through escapeHtml (re-verified); dashboards are other fixers'
AUTH-18 | Not an issue | No redirect/next/returnTo parameter is read; checkout URLs come from our API
AUTH-19 | Fixed | js/supabase/config.js: removed supabaseAdmin export, getStudentProfile, getUpcomingSessions, getPastSessions and both realtime helpers (no importers)
AUTH-20 | Deferred | Copy/claims need owner review (Phase 3 honesty pass)
WEB-01 | Fixed | js/i18n.js initRouting: no auto-redirect on auth/app pages (signin, signup, signup-success, forgot/reset-password, dashboards, admin) or when the URL has a query or hash; when it does redirect, search+hash are kept; the switcher also keeps them
WEB-02 | Fixed | js/i18n.js: 'ma' recognised as a locale prefix (no /xx/ma/ redirect, ma dictionary used, switcher strips it), `<html lang>` = fr-MA; build.js emits lang fr-MA and og:locale fr_MA; hreflang ar-MA -> fr-MA in index, about-us, services, corporate, contact, careers, tiers and sitemap.xml (content is French). 'ma' is not added to the dropdown (needs a label: owner)
WEB-03 | Fixed (root) | Removed vvprocess/vvbootstrap script tags from index, about-us, services, corporate, contact, 404, careers, careers-teachers-section, tiers. needs: it/index.html, it/careers.html, it/careers-teachers-section.html, it/services.html are build-skipped hand-made pages and still load vvkey (lead). Webfont loader self-hosting deferred
WEB-04 | Deferred | Phase 3 item 8 (forms need a first-party handler)
WEB-05 | Deferred | Phase 3 item 8. Not a pure removal: dropping the fake success would leave the button stuck on "Submitting..."; needs a handler or a mailto decision
WEB-06 | Fixed (partial) | js/cookies-banner.js: consent reads/writes wrapped in try/catch (`readConsent()`); vvkey removed (WEB-03). Cookie table / sub-processor rewrite and consent gating deferred (policy copy, owner)
WEB-07 | Fixed | js/i18n.js and build.js interpolateVariables escape data-i18n-var-* values when the target is data-i18n-html; replacement uses a function so `$&` patterns are literal
WEB-08 | Fixed | about-us.html city eyebrows no longer use the bio keys; services.html CTA phrases no longer use the homepage cta_phrase_* keys (both stay as their own English text until keys are added)
WEB-09 | Deferred | Translation backfill; no code needs the missing keys (see AUTH-15)
WEB-10 | Deferred | Invented people/stats need owner copy (Phase 3)
WEB-11 | Fixed | 404.html: css/images/js paths root-relative, home links "/"
WEB-12 | Fixed (partial) | index.html mailto info@help.com -> info@alimun.com; footer brand link images/alimun.svg -> index.html on index, about-us, services, corporate, contact, careers, careers-teachers-section, tiers. Social icons href="#" deferred (need real profile URLs from owner)
WEB-13 | Fixed | robots.txt: prefix rules for clean URLs (cover .html too), added forgot-password and reset-password, plus /*/ forms
WEB-14 | Deferred | CI tooling (verify.js scope/exit code) belongs with the lead's scripts/ci work

## needs (other files)
- api/send-admin-email.js: ADM-01/AUTH-13 admin check `app_metadata.role === 'admin'` only; ADM-02 from address + generic error; ADM-11 escaping and wording
- api/admin/teacher.js: ADM-06 `?action=create` that sets app_metadata.role; ADM-10 emailed flag from response.ok
- student-dashboard.html, teacher-dashboard.html: pin supabase-js to `@2.108.2/dist/umd/supabase.js` with `integrity="sha384-nD3dwv4+ZqdYnmZKe/249ImlV04om7xTCcsoSeQYI+RO+XlKPoqAWaJR1M5SJH9p" crossorigin="anonymous"`; optionally hide write controls when `window.ALIMUN_VIEW_AS_READONLY`
- it/index.html, it/careers.html, it/careers-teachers-section.html, it/services.html (build-skipped): remove vvkey lines, hreflang ar-MA -> fr-MA, brand link images/alimun.svg -> index.html
- SQL: AUTH-01 force tier on client INSERT; AUTH-16 tier constraint
