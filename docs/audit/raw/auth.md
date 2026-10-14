# AUTH area — raw findings (Phase 2 audit)

Scope: signin.html, signup.html, signup-success.html, forgot-password.html, reset-password.html, tiers.html, careers.html, careers-teachers-section.html, js/supabase/config.js, js/currency.js. Code paths followed into: supabase/migrations/202610141800_phase1_db_lockdown.sql (role trigger, guards, policies, teachers_public), supabase/2026-10-14_admin_role_hardening.sql (teacher guard), api/stripe.js (create-checkout, retrieve-session), api/webhooks/stripe.js (tier writes), api/admin/teacher.js (action=notify), api/enroll.js, api/create-cohort.js, js/i18n.js (interpolation), vercel.json rewrites.

### AUTH-01: student_profiles INSERT lets the client pick any paid tier without paying
- Severity: Medium
- Location: signup.html:701-710, signup.html:763-772, signup.html:902-911; supabase/migrations/202610141800_phase1_db_lockdown.sql:218-246 (guard_student_profile_columns, INSERT branch), :431-432 (student_profiles_insert policy)
- Category: authz
- Confidence: high
- Scenario: The guard's comment says "billing, tier changes and enrollment are server-only", but on INSERT it nulls only the stripe_* columns and enrolled_cohort_id; `tier` passes through. signup.html writes the selected tier (`fd.tier`, `'founding_member'`, `'waitlist'`) into the profile *before* checkout, so (a) a user who cancels or abandons Stripe Checkout keeps tier = focused/intensive/private/founding_member forever, and (b) any user can POST `/rest/v1/student_profiles` with `{user_id: <self>, tier: 'private'}` directly. The founding-member path even saves `founding_member` before it checks whether the founding price is configured (signup.html:701 vs :717). Server checks that matter today (api/enroll.js:140 and api/join-session.js:119) gate on `stripe_subscription_status`, which is protected, so this does not grant class access; impact is the student dashboard trusting `profile.tier` (student-dashboard.html:2869, 3568, 3638, 5606, 5691) for plan display and tier-gated UI, and admin/metrics reading an unpaid tier as a paid one.
- Fix: In guard_student_profile_columns INSERT branch force `new.tier := 'waitlist'` (or a new `'none'` value) for client writes, and let only the webhook/service role set paid tiers. Remove `tier` from the three client inserts in signup.html (send the chosen tier only to /api/create-checkout-session, which already derives tier from the price allow-list).

### AUTH-02: Email confirmation is off, so anyone can pre-register someone else's email; password reset does not evict the squatter
- Severity: Medium
- Location: signup.html:464-511 (signUp proceeds straight to profile steps with a session); reset-password.html:170 (`updateUser({ password })` with no `signOut({ scope: 'others' })`); docs/phase-1-db-lockdown.md "Owner steps" 3 (confirmation left off)
- Category: authz
- Confidence: medium
- Scenario: With "Confirm email" disabled (as documented), an attacker signs up with victim@example.com and a password they know, then keeps the session (refresh token in localStorage). The victim later tries to sign up, is told "already registered", uses Forgot password, and sets a new password. Supabase does not revoke the attacker's existing refresh tokens on a password change, so the attacker stays signed in to the account the victim then pays into, and sees the victim's profile, classes, notes and billing portal link. The same gap lets anyone file teacher applications or Stripe customers under any email. Confirm by checking Supabase Auth → Providers → Email → "Confirm email" and whether sessions survive a password update in a test project.
- Fix: Enable email confirmation (moving profile creation server-side, as already planned for Phase 3), and in reset-password.html call `supabase.auth.signOut({ scope: 'others' })` after a successful `updateUser`. Also enable "Secure password change" in Supabase Auth.

### AUTH-03: Approved teachers can self-edit public trust fields (sessions_delivered, badges, location, experience_years, languages)
- Severity: Medium
- Location: supabase/migrations/202610141800_phase1_db_lockdown.sql:444-446 (teacher_profiles_update = self), :594-606 (public_teacher_rows exposes sessions_delivered, badges, location, experience_years, bio to anon); supabase/2026-10-14_admin_role_hardening.sql:34-66 (guard only covers status, hourly_rate, tier_level, rating, user_id); signup.html:1084-1095 (insert sets experience_years from the client)
- Category: authz
- Confidence: high
- Scenario: A teacher, once approved, runs `supabase.from('teacher_profiles').update({ sessions_delivered: 5000, badges: ['Top teacher','Verified'], experience_years: 30 }).eq('user_id', me)`. RLS allows it and the guard does not block those columns; `teachers_public` (readable by anon) and the dashboards' `teacher_public` embeds then show self-awarded badges and inflated stats to students. `languages` can also be changed after approval, outside admin review.
- Fix: Extend guard_teacher_profile_admin_fields to reject client changes to `sessions_delivered` and `badges` (server/admin only) and reset them on INSERT; decide whether `languages`/`experience_years` changes after approval require re-review (e.g. set status back to pending or block).

### AUTH-04: Teacher English option missing from the application form
- Severity: Medium
- Location: signup.html:1032-1037 (language list), signup.html:270 (LIVE_LANGUAGES = English, German), signup.html:279 (default `language:'English'`), signup.html:1067
- Category: bug
- Confidence: high
- Scenario: The teacher "Language you teach" select offers Spanish, French, Portuguese, Italian, German, Mandarin, Japanese, Arabic. English, the flagship and one of only two live languages, is absent; the default `fd.language = 'English'` matches no option, so the browser shows Spanish and an English teacher who does not notice submits `languages: ['Spanish']`. English teachers cannot apply correctly, which starves the main product of teachers.
- Fix: Use the same LANGS list as students (English first) for the teacher select, and validate the chosen value against it.

### AUTH-05: Any account (including students) can file a teacher application and spam the admin notification
- Severity: Low
- Location: supabase/migrations/202610141800_phase1_db_lockdown.sql:442-443 (teacher_profiles_insert: only `user_id = auth.uid()`, no role check); api/admin/teacher.js:479-626 (action=notify: no idempotency or rate limit); signup.html:1108-1113
- Category: input-validation
- Confidence: high
- Scenario: A student-role user inserts a teacher_profiles row for themselves (allowed) and then POSTs `/api/admin/notify-teacher-application` in a loop. While the row is `pending` each call sends a new Resend email to ADMIN_EMAIL with fresh approve/reject tokens, which floods the admin inbox and burns the Resend quota. With AUTH-02, the attacker can repeat this with throwaway accounts. If an admin approves such an application, the user's app_metadata.role stays `student` but create-cohort (api/create-cohort.js:79) and the RLS `teaches_*` helpers only check teacher_profiles, so the account gains teacher powers with a student role.
- Fix: Add `and coalesce(auth.jwt()->'app_metadata'->>'role','') = 'teacher'` (or is_admin) to teacher_profiles_insert. In action=notify, record a `notified_at` on the profile (service role) and refuse when already set or within N minutes.

### AUTH-06: Own name injected into innerHTML / attributes and re-injected through i18n `{name}` interpolation
- Severity: Low
- Location: signin.html:217-230 (`${name}` in innerHTML and in `data-i18n-var-name="${name}"`), signup.html:435-436 (`value="${fd.name}"`, `value="${fd.email}"`), signup.html:982, 1012 (`${firstName}`), signup.html:1050, 1052 (`${fd.specialty}`, `${fd.bio}`), signup.html:1129-1130; js/i18n.js:229-236 + 264-276 (attribute value interpolated into the translation, then assigned to innerHTML)
- Category: xss
- Confidence: high
- Scenario: A user whose full_name (user_metadata or teacher_profiles) is `"><img src=x onerror=alert(1)>` gets script execution on their own signin "pending" screen and signup confirmation screens. Today this is self-XSS only, because every value comes from the viewer's own account. The i18n sink is the bigger concern: `data-i18n-html` plus `data-i18n-var-*` decodes the attribute and writes it through innerHTML, so any page that puts *another* user's data into a `data-i18n-var-*` attribute becomes stored XSS (flag for the dashboard and marketing reviewers).
- Fix: Escape with escapeHtml everywhere these templates interpolate (names, email, specialty, bio, attribute values). In i18n.js interpolateVariables, escape the attribute value before substitution when the target is `data-i18n-html`.

### AUTH-07: "Back" from step 3 to step 2 leads to a dead end (signUp is called again)
- Severity: Low
- Location: signup.html:542 and :1056 (`step=2;render()`), signup.html:447-511 (saveDetails always calls `supabase.auth.signUp`)
- Category: bug
- Confidence: high
- Scenario: After creating the account, a student or teacher clicks "← Back" on step 3, sees the details form again and presses Continue. signUp now returns "User already registered", the page shows "This email is already registered… Sign in", and the user cannot move forward without signing in again.
- Fix: When `newUserId` is set (session exists), make step 2 read-only or skip signUp and go to step 3; or hide the Back button on step 3 once the account exists.

### AUTH-08: Account enumeration on signup
- Severity: Low
- Location: signup.html:479-495
- Category: info-leak
- Confidence: high
- Scenario: With email confirmation off, `signUp` returns an explicit "already registered" error and the page shows "This email is already registered", so anyone can check whether an email has an Alimun account (and, via the teacher/student flow, script it). Signin and forgot-password are correctly generic.
- Fix: Accept as a product decision or, after enabling email confirmation (AUTH-02), show the same "check your inbox" message for new and existing emails. Add Turnstile/rate limiting to the signup step (Phase 2 step 6).

### AUTH-09: Reset-password page never checks it has a recovery session and lets any signed-in session change the password
- Severity: Low
- Location: reset-password.html:145-149 (`hasRecoverySession` set but never read), reset-password.html:156-181
- Category: bug
- Confidence: high
- Scenario: (1) An expired or already-used link lands with `#error=access_denied&error_code=otp_expired`; the page still shows the form, and the user only learns the link is dead after typing two passwords ("Auth session missing"). (2) Anyone with access to a browser where the user is signed in can open /reset-password.html and set a new password without knowing the current one (persisted session in localStorage), then lock the owner out.
- Fix: On load, read the URL hash error and wait for `PASSWORD_RECOVERY`; if it does not arrive, replace the form with "link expired, request a new one". Gate `updatePassword` on `hasRecoverySession`. Enable Supabase "Secure password change" (requires recent sign-in/nonce).

### AUTH-10: Success page reports "account is active" for unpaid or founding checkouts
- Severity: Low
- Location: signup-success.html:191 (`paymentStatus === 'paid' || status === 'complete'`), :202-212; api/stripe.js:221-229 (founding payments have `metadata.tier = ''`)
- Category: bug
- Confidence: high
- Scenario: For async payment methods Stripe returns `status: 'complete'` with `payment_status: 'unpaid'`, and the page says "Your … account is active". For the founding-member fee, `tier` is null, so the page says "Your Alimun account is active. Get ready for your first live session", although the user only reserved a spot for a language that is not live. The `founding=1` query flag is ignored. The webhook remains the source of truth, so this is wrong messaging only, but it creates support tickets.
- Fix: Treat only `payment_status === 'paid'` (or `'no_payment_required'`) as success, show a "payment processing" state otherwise, and use `session.type === 'founding_member'` to show founding-specific copy.

### AUTH-11: Raw Supabase/Postgres error messages shown to users
- Severity: Low
- Location: signup.html:485, :713, :775, :917, :1099; forgot-password.html:161; reset-password.html:175
- Category: info-leak
- Confidence: high
- Scenario: `dbErr.message` from PostgREST is displayed directly, e.g. "new row violates row-level security policy for table \"teacher_profiles\"", "new row for relation \"student_profiles\" violates check constraint \"student_profiles_tier_check\"", or the guard text "billing, tier and enrollment fields can only be changed by the server". This leaks schema and policy names and confuses users.
- Fix: Map known codes (23505, 23514, 42501, rate-limit) to friendly copy and log the raw message to the console only.

### AUTH-12: Auth pages load an unpinned supabase-js from jsdelivr without SRI; marketing pages load unknown third-party scripts
- Severity: Low
- Location: signin.html:119, signup.html:139, signup-success.html (same CDN tag), forgot-password.html:74, reset-password.html:69 (`@supabase/supabase-js@2`, no `integrity`); tiers.html:23-24, careers.html:135-136, careers-teachers-section.html:25-26 (`vvprocess-1.1.0.js` from cdn.prod.website-files.com without SRI and `cf.vvkey.io/vvbootstrap.js`)
- Category: other
- Confidence: high
- Scenario: Every page that handles passwords and holds the session token runs whatever jsdelivr serves for the latest `2.x`; a compromised or breaking release changes auth behaviour on the live site with no deploy. The vvkey scripts are unexplained third-party code with full DOM access on public pages.
- Fix: Pin an exact version (e.g. `@supabase/supabase-js@2.x.y`) with an `integrity` hash, or self-host it under js/. Identify the vvkey scripts and remove them if not needed.

### AUTH-13: `user_metadata.role` fallbacks remain (client routing, plus one server admin check)
- Severity: Low
- Location: js/supabase/config.js:172-179 (getUserRole), signup.html:1156 (resumeFromSession); cross-ref for API reviewer: api/send-admin-email.js:51 (`app_metadata.role || user_metadata.role` for the admin check)
- Category: authz
- Confidence: high
- Scenario: Every account now has app_metadata.role (trigger plus backfill), so `appRole` wins and the fallback is dead for routing. However, send-admin-email grants admin when app_metadata.role is empty and user_metadata.role is 'admin'. Any account whose app role is ever cleared (manual SQL, admin API update with a fresh app_metadata object) can then self-promote by `auth.updateUser({ data: { role: 'admin' } })`. This violates the CLAUDE.md role rule.
- Fix: Remove the user_metadata fallback from getUserRole, resumeFromSession and especially api/send-admin-email.js (`user.app_metadata?.role === 'admin'` only).

### AUTH-14: Student/Teacher tabs on the sign-in page do nothing
- Severity: Low
- Location: signin.html:158-161, 196-202 (`role` is set but never read)
- Category: bug
- Confidence: high
- Scenario: Users pick "Teacher" expecting a different login; routing is decided by the account role anyway. Harmless, but it misleads users who think they signed in as the wrong role.
- Fix: Remove the tabs, or use them only as a hint ("this account is a student account") after sign-in.

### AUTH-15: Missing translation keys on auth pages
- Severity: Low
- Location: forgot-password.html, reset-password.html (all `forgot_*` / `reset_*` keys), signin.html:134-138, signup.html:160-164, signin.html:170 (`auth_forgot_password`), signup-success (`signup_success_strip_label`), careers.html (`careers_step_4_title`, `careers_step_4_desc`)
- Category: bug
- Confidence: high
- Scenario: Checked every `data-i18n*` key in the assigned files against `ALIMUN_TRANSLATIONS.en` (828 keys). These 29 are absent: auth_forgot_password, careers_step_4_desc, careers_step_4_title, forgot_back_signin, forgot_btn_send, forgot_eyebrow, forgot_hint, forgot_sent_desc, forgot_sent_title, forgot_strip_label, forgot_title, reset_btn_signin, reset_btn_update, reset_confirm_password, reset_done_desc, reset_done_title, reset_eyebrow, reset_hint, reset_new_password, reset_strip_label, reset_title, signin_brand_desc, signin_brand_headline, signin_brand_tagline, signup_brand_desc, signup_brand_headline, signup_brand_tagline, signup_success_strip_label. i18n.js only replaces text when a key exists, so these strings stay English on every locale. All JS-built messages in signup/signin (errors, the founding/waitlist step, confirmation screens) are hard-coded English too.
- Fix: Add the keys to every language in js/translations.js and route the JS strings through the dictionary.

### AUTH-16: Tier check constraint may reject `waitlist` / `founding_member`
- Severity: Low
- Location: signup.html:709, :771; supabase/schema.sql:52-53 / :76-77 (tier in community/focused/intensive/private); supabase/fix-tier-constraint.sql (adds waitlist, founding_member; not in migrations/)
- Category: bug
- Confidence: medium
- Scenario: If fix-tier-constraint.sql was never applied in production, every non-live-language signup (waitlist and founding member) fails with a 23514 error shown raw to the user (AUTH-11), and the founding checkout never starts. Confirm with `select pg_get_constraintdef(oid) from pg_constraint where conrelid='public.student_profiles'::regclass and contype='c';`.
- Fix: Fold the constraint into a numbered migration (idempotent), together with the AUTH-01 change.

### AUTH-17: Teacher application and signup fields that render elsewhere (for admin / dashboard reviewers)
- Severity: Info
- Location: signup.html:464-476 (user_metadata: role, full_name, timezone), :701-710 / :902-911 (student_profiles: full_name, language, level, goal_track, tier), :1084-1095 (teacher_profiles: full_name, languages[], experience_years, specialty, bio); also self-updatable after signup via RLS: teacher_profiles.location, badges[], sessions_delivered (AUTH-03)
- Category: xss
- Confidence: high
- Scenario: All are free text controlled by the applicant with no length limits in the client (bio is unlimited) and no DB length checks in schema.sql. They are rendered in admin.html (applications, faculty), in student dashboards via `teacher_public` embeds (full_name, bio, specialty, location, badges) and to anon via `teachers_public`. The admin notification email (api/admin/teacher.js:516-575) escapes them correctly; the email subject uses the HTML-escaped name, so `&amp;` shows literally (cosmetic). Every innerHTML sink for these fields in admin/student/teacher dashboards must use escapeHtml.
- Fix: Reviewers of admin.html, student-dashboard.html and teacher-dashboard.html: verify escaping for each field above. Add DB `check (char_length(...) <= N)` constraints (e.g. full_name 120, specialty 200, bio 2000).

### AUTH-18: No open redirect, and checkout inputs are validated server-side
- Severity: Info
- Location: signin.html, signup.html, forgot-password.html, reset-password.html (no redirect/next/returnTo parameter is read); signup.html:728-738, :942-952; api/stripe.js:89-101 (safeReturnUrl), :154-160 (price allow-list), :193-196 (currency allow-list); js/currency.js:16-22 vs supabase/setup-stripe-prices.js:25-38
- Category: stripe
- Confidence: high
- Scenario: Post-login destinations are fixed by role. emailRedirectTo and the reset redirectTo use `window.location.origin` (Supabase also enforces its redirect allow-list). The client sends priceId, currency, successUrl and cancelUrl, but the server accepts only configured price IDs, only `usd|cad|aud|mad` (else EUR), and only same-origin return URLs; amounts come from the Stripe price's currency_options, and the displayed FIXED table matches them. tiers.html starts no checkout (links to signup.html only). Nothing to fix here; recorded so the consolidated report does not re-open it.
- Fix: None.

### AUTH-19: Dead helpers in js/supabase/config.js would break or over-fetch if reused
- Severity: Info
- Location: js/supabase/config.js:80-89 (supabaseAdmin export), :194-216 (getStudentProfile embeds `teacher_profiles(full_name, rating)`), :244-279 (sessions with `session_notes(*)`), :311-345 (realtime on all session_notes inserts)
- Category: rls-mismatch
- Confidence: high
- Scenario: Only `supabase` and `getUserRole` are imported anywhere (signin.html:194). Under Phase 1, teacher_profiles SELECT is self/admin only, so getStudentProfile's embed returns null teacher data; the session helpers select `*` from notes. The `supabaseAdmin` export with `cfg.supabaseServiceRoleKey` invites someone to put a service key into ALIMUN_CONFIG.
- Fix: Delete the unused helpers and the supabaseAdmin export (already listed as known in docs/phase-1-db-lockdown.md).

### AUTH-20: careers-teachers-section.html has no application form and carries invented content
- Severity: Info
- Location: careers-teachers-section.html:100-103, :382-385 (links to signup.html?role=teacher), :118 ("We accept less than 5% of applicants"), :165-210 (named teacher testimonials with stock avatars); careers.html:113-116 (€80/hour, 25% founding-teacher rate claims); tiers.html meta description ("No credit card required", "Save 40% forever")
- Category: other
- Confidence: high
- Scenario: The teacher application is the signup.html teacher flow; this page only links to it. The testimonials, acceptance rate and earnings claims are not backed by data (CLAUDE.md copy rules), and "No credit card required" contradicts the checkout-first signup. The newsletter forms on these pages post nowhere (known §0 #14).
- Fix: Owner review: replace with `[COPY NEEDED]` or real data (Phase 3 honesty pass).

## Coverage
| File | Lines read |
|---|---|
| signin.html | 1-348 (all) |
| signup.html | 1-1205 (all) |
| signup-success.html | 1-250 (styles/markup skimmed 1-119, script 120-250 line by line) |
| forgot-password.html | 1-179 (styles 1-59 skimmed, 60-179 line by line) |
| reset-password.html | 1-189 (styles 1-59 skimmed, 60-189 line by line) |
| tiers.html | 1-436 (markup and inline CSS; no first-party script beyond currency.js/i18n) |
| careers.html | 1-667 (head 1-140, markup 140-600 scanned for forms/links/claims, script 600-667 line by line) |
| careers-teachers-section.html | 1-489 (all; no form, no inline script) |
| js/supabase/config.js | 1-345 (all) |
| js/currency.js | 1-135 (all) |
| Supporting | migration 1-450, 590-640; admin_role_hardening.sql 25-75; api/stripe.js 1-260; api/admin/teacher.js 477-626; api/enroll.js 100-175; js/i18n.js 215-285; api/send-admin-email.js 40-75 |

## RLS assumptions
| Query location | Table/RPC | Operation | What it needs | Allowed under Phase 1? |
|---|---|---|---|---|
| signin.html:293 | student_profiles | select id where user_id = me | own row readable | Yes (student_profiles_select: user_id = auth.uid()) |
| signin.html:303 | teacher_profiles | select status, full_name where user_id = me (.single) | own row readable | Yes (teacher_profiles_select self) |
| signup.html:701 / :763 / :902 | student_profiles | insert own row (full_name, language, level, goal_track, tier) | insert with user_id = me | Yes; guard nulls stripe_*/enrolled_cohort_id but keeps tier (AUTH-01); needs tier constraint to allow waitlist/founding_member (AUTH-16) |
| signup.html:1084 | teacher_profiles | insert own row + `.select()` return | insert self + select self | Yes; guard forces status pending, rating 0, rate 22, tier community. No role check (AUTH-05) |
| signup.html:1165 | teacher_profiles | select id where user_id = me | own row | Yes |
| signup.html:1171 | student_profiles | select language, level, goal_track, tier own | own row | Yes |
| signup.html:464, signin.html:265, forgot-password.html:156, reset-password.html:170 | auth (GoTrue) | signUp / signInWithPassword / resetPasswordForEmail / updateUser | Auth API, not RLS | n/a; role trigger trg_set_app_role copies student/teacher only, never admin |
| signup-success.html:216 | auth | getSession | local | n/a |
| config.js:198 (unused) | student_profiles + cohorts + teacher_profiles embed | select | teacher_profiles readable by student | No: embed returns null (teacher_profiles self/admin only); use teacher_public |
| config.js:226 (unused) | teacher_profiles | select * own | own row | Yes |
| config.js:245 / :266 (unused) | sessions + session_notes | select | sessions_select / session_notes_select | Depends on cohort membership policies; unused |
| config.js:322 (unused) | session_notes realtime | INSERT stream | realtime respects RLS | Unused |
