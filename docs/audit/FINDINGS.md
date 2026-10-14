# Findings (Phase 2)

Consolidated from the eight area reviews on 14 Oct 2026. The full write-up for each finding (scenario and fix) is in `raw/<area>.md` under the same ID. Status comes from the fix logs in `fixes/` (one per fixer, plus `round2.md`). **Partial** means one half of the fix is done (usually server or DB) and the rest is described in the log.

**Status after fixes:** 96 Fixed, 8 Partial, 17 Deferred, 2 Not an issue. Every Critical and High is fixed. The Deferred items need copy, translations or owner decisions, or are Phase 3 feature work (Webflow forms, simulated dashboard data, enrol-after-payment, teacher timezone). The DB half of many fixes is in `supabase/migrations/202610142200_phase2_audit_fixes.sql`, which the owner still has to apply.

Reviewers verified each finding by re-reading the code path. The lead session re-checked every Critical and High against the code. SQL-01 was confirmed with a read-only production query: `aisha@`, `marco@`, `omar@` and `yuki@example.com` hold `stripe_subscription_status = 'active'` with fake `sub_test_*` ids (`aisha@` and `marco@` last signed in in June), and `test-student@alimun.com` is `active` with no subscription id. None of them are banned. Whether the committed seed passwords still work was not tested.

**Unique findings: 123** (Critical 1, High 8, Medium 33, Low 70, Info 11). There are 5 more duplicates, listed with a pointer to the primary.

| ID | Severity | Title | Category | Confidence | Location | Status |
|---|---|---|---|---|---|---|
| [TEA-01](raw/teacher-dashboard.md) | Critical | Teacher-controlled profile fields go into innerHTML unescaped and run in the admin's session through "view as" | xss | high | `teacher-dashboard.html:1364-1365 and 1474` | Fixed (sql.md) |
| [APIP-01](raw/api-payments.md) | High | "Upgrade plan" creates a second subscription; the old one keeps billing and its events overwrite the new tier and can cancel the seat | stripe | high | `student-dashboard.html:5748-5776` | Fixed (api-payments.md) |
| [APIP-02](raw/api-payments.md) | High | Webhook grants entitlements on Checkout sessions that are complete but unpaid (async payment methods), and can grant 1:1 credits twice | stripe | medium | `api/webhooks/stripe.js:241-260` | Fixed (sql.md) |
| [SQL-01](raw/sql.md) | High | Seed and test accounts with passwords committed to the repo still exist in production, several with `stripe_subscription_status = 'active'` | stripe | medium | `supabase/seed.sql:22-173` | Fixed (sql.md) |
| [STU-01](raw/student-dashboard.md) | High | Teacher-written session notes rendered as HTML (stored XSS, teacher to students) | xss | high | `student-dashboard.html:2916` | Fixed (student.md) |
| [STU-02](raw/student-dashboard.md) | High | Teacher feedback and teacher notes rendered as HTML in Progress (stored XSS, teacher to student) | xss | high | `student-dashboard.html:5275` | Fixed (student.md) |
| [STU-03](raw/student-dashboard.md) | High | Teacher badges rendered as HTML in the teacher profile modal (stored XSS, teacher to students) | xss | high | `student-dashboard.html:6366-6367` | Fixed (sql.md) |
| [STU-04](raw/student-dashboard.md) | High | Cohort `timezone` and `language` (teacher input, never validated) rendered as HTML in discovery, switch and claim views | xss | high | `student-dashboard.html:3840` | Fixed (sql.md) |
| [STU-05](raw/student-dashboard.md) | High | Student-controlled text rendered as HTML runs in the admin's session through "view as" (stored XSS, student to admin) | xss | high | `student-dashboard.html:6406` | Fixed (student.md) |
| [STU-08](raw/student-dashboard.md) | High | "Change Plan" opens a new subscription checkout without cancelling the current one (double billing) | stripe | high | `student-dashboard.html:5690-5778` | Duplicate of APIP-01 |
| [ADM-01](raw/admin.md) | Medium | send-admin-email authorises on user_metadata.role as a fallback | authz | high | `api/send-admin-email.js:51-54` | Fixed (api-ops.md) |
| [ADM-02](raw/admin.md) | Medium | Admin emails are sent from `onboarding@resend.dev`, so memos and tier emails do not reach users | bug | high | `api/send-admin-email.js:198; admin.html:1739-1757` | Fixed (api-ops.md) |
| [ADM-03](raw/admin.md) | Medium | Approve/reject email links change state on GET and can be reused for 7 days | authz | medium | `api/admin/teacher.js:37` | Fixed (api-ops.md) |
| [ADM-04](raw/admin.md) | Medium | Provisioning a cohort probably fails because `goal_track` is NOT NULL and is not sent | bug | medium | `admin.html:2372-2417` | Fixed (pages.md) |
| [APIO-01](raw/api-ops.md) | Medium | Notes PDF generation always fails because the Anton font URL returns 404 | bug | high | `api/generate-notes-pdf.js:13-16` | Fixed (api-ops.md) |
| [APIO-02](raw/api-ops.md) | Medium | Waitlist offer email puts teacher- and student-controlled fields into HTML without escaping | xss | high | `api/waitlist/send-offer.js:94` | Fixed (api-ops.md) |
| [APIO-03](raw/api-ops.md) | Medium | send-admin-email sends from Resend's sandbox address, so tier-upgrade and promo emails never reach users | bug | high | `api/send-admin-email.js:198; caller admin.html:1742-1756` | Duplicate of ADM-02 |
| [APIO-04](raw/api-ops.md) | Medium | AI cost and quota controls can be bypassed, and the shared daily budget can be exhausted, blocking AI for everyone | ai | high | `api/ai.js:33-35` | Fixed (api-ops.md) |
| [APIO-05](raw/api-ops.md) | Medium | Suspending a teacher does not stop them publishing notes or mass-emailing students | authz | high | `api/generate-notes-pdf.js:170-179; api/admin/teacher.js:338` | Fixed (sql.md) |
| [APIO-06](raw/api-ops.md) | Medium | Emailed approve/reject links act on a plain GET, can be reused for 7 days and ignore the current status | authz | medium | `api/admin/teacher.js:37` | Duplicate of ADM-03 |
| [APIP-03](raw/api-payments.md) | Medium | Webhook raw body may never reach constructEvent on Vercel; `config.api.bodyParser` is a Next.js option and req.body is touched before the stream is read | stripe | medium | `api/webhooks/stripe.js:89-103` | Fixed (api-payments.md) |
| [APIP-04](raw/api-payments.md) | Medium | Subscription tier comes from stale subscription metadata ahead of the actual price; plan changes keep the old tier and existing seat | stripe | medium | `api/webhooks/stripe.js:272-285` | Fixed (api-payments.md) |
| [APIP-05](raw/api-payments.md) | Medium | Concurrent /api/enroll calls let one student hold seats in several cohorts | bug | high | `api/enroll.js:105-112` | Fixed (sql.md) |
| [AUTH-01](raw/auth.md) | Medium | student_profiles INSERT lets the client pick any paid tier without paying | authz | high | `signup.html:701-710` | Partial (sql.md, pages.md) |
| [AUTH-02](raw/auth.md) | Medium | Email confirmation is off, so anyone can pre-register someone else's email; password reset does not evict the squatter | authz | medium | `signup.html:464-511` | Fixed (pages.md) |
| [AUTH-03](raw/auth.md) | Medium | Approved teachers can self-edit public trust fields (sessions_delivered, badges, location, experience_years, languages) | authz | high | `supabase/migrations/202610141800_phase1_db_lockdown.sql:444-446` | Fixed (sql.md) |
| [AUTH-04](raw/auth.md) | Medium | Teacher English option missing from the application form | bug | high | `signup.html:1032-1037` | Fixed (pages.md) |
| [SQL-02](raw/sql.md) | Medium | Re-running `2026-09-security-hardening.sql` (labelled "safe to re-run" and cited by api/enroll.js) undoes parts of the lockdown | authz | high | `supabase/2026-09-security-hardening.sql:3` | Fixed (sql.md) |
| [SQL-03](raw/sql.md) | Medium | RLS helpers ignore teacher status, so a suspended teacher keeps full access to their cohorts' students | authz | high | `supabase/migrations/202610141800_phase1_db_lockdown.sql:77-80` | Duplicate of TEA-02 |
| [SQL-04](raw/sql.md) | Medium | Teachers can self-edit public "trust" fields (sessions_delivered, experience_years, badges) shown on teachers_public | authz | high | `supabase/2026-10-14_admin_role_hardening.sql:47-63` | Duplicate of AUTH-03 |
| [SQL-05](raw/sql.md) | Medium | `bulk-approve-teachers.sql` approves pending AND suspended teachers if re-run | authz | high | `supabase/bulk-approve-teachers.sql:6-8` | Fixed (sql.md) |
| [STU-06](raw/student-dashboard.md) | Medium | Waitlist-claim URL parameter injected into an inline `onclick` (reflected XSS) | xss | high | `student-dashboard.html:6576-6583` | Fixed (student.md) |
| [STU-07](raw/student-dashboard.md) | Medium | AI-generated exercise content rendered without escaping; teacher text reaches the generation prompt | ai | medium | `student-dashboard.html:4861 and 4884` | Fixed (student.md) |
| [STU-09](raw/student-dashboard.md) | Medium | AI endpoint usable as a general LLM by any signed-in account, with no paid-tier check | ai | high | `student-dashboard.html:4536-4546 and 5538-5548` | Fixed (round2.md) |
| [STU-10](raw/student-dashboard.md) | Medium | Placeholder and simulated data shown to real students as their own results | bug | high | `student-dashboard.html:2800-2805 and 5132-5133` | Deferred (student.md) |
| [STU-11](raw/student-dashboard.md) | Medium | Settings save and opt-in write columns that do not exist in any migration | rls-mismatch | medium | `student-dashboard.html:5631-5642` | Partial (sql.md, student.md) |
| [STU-12](raw/student-dashboard.md) | Medium | Paying for a cohort from Discovery does not enrol the student, and the return is not handled | bug | high | `student-dashboard.html:3947-3986` | Partial (api-payments.md, student.md) |
| [TEA-02](raw/teacher-dashboard.md) | Medium | Suspended or rejected teachers keep full data access and video-owner rights | authz | high | `teacher-dashboard.html:3648` | Partial (sql.md, teacher.md) |
| [TEA-03](raw/teacher-dashboard.md) | Medium | Session-notes flow is effectively unreachable and cannot be retried after a failure | bug | high | `teacher-dashboard.html:1445-1448` | Fixed (round2.md) |
| [TEA-04](raw/teacher-dashboard.md) | Medium | Fabricated numbers and simulated classroom features shown as real data | bug | high | `teacher-dashboard.html:1480` | Deferred (teacher.md) |
| [TEA-05](raw/teacher-dashboard.md) | Medium | Availability and classroom times depend on whichever browser timezone creates the cohort | bug | high | `teacher-dashboard.html:2481-2646` | Deferred (api-payments.md) |
| [TEA-07](raw/teacher-dashboard.md) | Medium | Teacher reads students' Stripe and billing columns (known) | info-leak | high | `teacher-dashboard.html:2088-2091` | Partial (sql.md, teacher.md) |
| [WEB-01](raw/marketing.md) | Medium | Language auto-redirect drops query string and hash (breaks password reset, waitlist claim links, checkout returns) | bug | high | `js/i18n.js:47-73` | Fixed (pages.md) |
| [WEB-02](raw/marketing.md) | Medium | `/ma/` locale is broken: redirect to non-existent `/xx/ma/…`, English overwrite, invalid lang | bug | high | `js/i18n.js:10-19` | Fixed (pages.md) |
| [WEB-03](raw/marketing.md) | Medium | Unpinned third-party script chain (vvkey.io) runs on every marketing page with access to the Supabase session | other | high | `index.html:27-28; about-us.html:23-24; services.html:22-23; corporate.html:170-171; contact.html:25-26; 404.html:27-28` | Fixed (pages.md) |
| [WEB-04](raw/marketing.md) | Medium | Webflow forms (newsletter, "Reserve your spot", contact form) send visitor PII to Webflow, not to Alimun | bug | high | `index.html:155-163 and 890-898; about-us.html:457; services.html:718; corporate.html:592; contact.html:137` | Deferred (pages.md) |
| [WEB-05](raw/marketing.md) | Medium | Corporate "Request a demo" form fakes success and sends nothing | bug | high | `corporate.html:653-675` | Deferred (pages.md) |
| [ADM-05](raw/admin.md) | Low | Create and payout actions have no double-submit guard; cohort creation can leave half-made records | bug | high | `admin.html:2372-2451` | Fixed (pages.md) |
| [ADM-06](raw/admin.md) | Low | "Add Faculty Directly" creates an approved profile the user cannot use | bug | high | `admin.html:2245-2278; teacher-dashboard.html:3625-3629` | Fixed (pages.md) |
| [ADM-07](raw/admin.md) | Low | Times labelled "UTC" are shown in the admin's local timezone | bug | high | `admin.html:1016 + 1590; 1157 + 2483; 2528; 1570-1572` | Fixed (pages.md) |
| [ADM-08](raw/admin.md) | Low | Overview shows invented figures (static trend chart, "Estimated Monthly Volume" = payouts × 1.5) | bug | high | `admin.html:948-1006` | Deferred (pages.md) |
| [ADM-09](raw/admin.md) | Low | Counts and lists silently stop at the PostgREST row limit | bug | medium | `admin.html:1536-1539` | Fixed (api-ops.md) |
| [ADM-10](raw/admin.md) | Low | Teacher status endpoint reports "emailed" when no email was sent; large bulk actions can time out | bug | high | `api/admin/teacher.js:101-121` | Fixed (round2.md) |
| [ADM-11](raw/admin.md) | Low | Admin emails insert raw HTML and say "upgraded" for any tier change | bug | high | `api/send-admin-email.js:105-133` | Fixed (api-ops.md) |
| [ADM-12](raw/admin.md) | Low | Secret values in app_settings are shown in plain text in the Settings panel | info-leak | high | `admin.html:2642-2651` | Fixed (pages.md) |
| [ADM-13](raw/admin.md) | Low | Admin page loads an unpinned supabase-js major version from a CDN without SRI | other | high | `admin.html:11` | Fixed (round2.md) |
| [APIO-07](raw/api-ops.md) | Low | The "server owns the system prompt" guard is weak, and `grade` works as a general-purpose LLM proxy | ai | high | `api/ai.js:52-57` | Fixed (api-ops.md) |
| [APIO-08](raw/api-ops.md) | Low | send-admin-email still falls back to `user_metadata.role`, defaults CORS to `*`, and puts raw HTML into emails | authz | high | `api/send-admin-email.js:23` | Fixed (api-ops.md) |
| [APIO-09](raw/api-ops.md) | Low | Secrets are compared with `===`, and ADMIN_SECRET is reused as both a bearer token and an HMAC key while stored in plain text in the DB | secrets | high | `api/cron-create-rooms.js:35-39; api/waitlist/cron-expire-offers.js:26-33; api/waitlist/send-offer.js:32-37; api/admin/teacher.js:44-56` | Fixed (api-ops.md) |
| [APIO-10](raw/api-ops.md) | Low | action=notify reveals configuration before auth, can be repeated, and email failures are reported as successes | info-leak | high | `api/admin/teacher.js:485-495` | Fixed (api-ops.md) |
| [APIO-11](raw/api-ops.md) | Low | Notes PDF links are 1-year signed URLs, republishing re-emails everyone, and the session date uses UTC | bug | high | `api/generate-notes-pdf.js:102-103` | Fixed (api-ops.md) |
| [APIO-12](raw/api-ops.md) | Low | Rooms created by the cron are configured differently from join-session rooms and keep a stale expiry; offer expiry runs only once a day | daily | medium | `api/cron-create-rooms.js:41-62` | Fixed (round2.md) |
| [APIO-13](raw/api-ops.md) | Low | No Content-Security-Policy and no function limits in vercel.json | other | high | `vercel.json:5-16` | Fixed (api-ops.md) |
| [APIO-14](raw/api-ops.md) | Low | send-offer copy and robustness problems (invented teacher name, emojis, crash when schedule_days is null) | bug | high | `api/waitlist/send-offer.js:94` | Fixed (api-ops.md) |
| [APIP-06](raw/api-payments.md) | Low | Switching classes or claiming an offer gives up the current seat before the new seat is secured | bug | high | `api/enroll.js:200-212` | Fixed (api-payments.md) |
| [APIP-07](raw/api-payments.md) | Low | Webhook idempotency lets two in-flight deliveries of the same event both process it | stripe | medium | `api/webhooks/stripe.js:147-181` | Fixed (api-payments.md) |
| [APIP-08](raw/api-payments.md) | Low | Subscription events are applied from the event payload, so an out-of-order event can flip a paid student to past_due or cancelled | stripe | medium | `api/webhooks/stripe.js:263-296` | Fixed (api-payments.md) |
| [APIP-09](raw/api-payments.md) | Low | Third failed invoice cancels the class seat locally while Stripe may still be retrying and later collects payment | stripe | medium | `api/webhooks/stripe.js:321-361` | Fixed (api-payments.md) |
| [APIP-10](raw/api-payments.md) | Low | Checkout is allowed for accounts with no student profile; the payment then fails permanently in the webhook | stripe | high | `api/stripe.js:100-134` | Fixed (api-payments.md) |
| [APIP-11](raw/api-payments.md) | Low | create-cohort accepts unvalidated fields, leaks DB error text, and does not tie the language to the teacher | input-validation | high | `api/create-cohort.js:32` | Fixed (api-payments.md) |
| [APIP-12](raw/api-payments.md) | Low | join-session trusts the stored daily_room_url and never refreshes the room's expiry; rescheduled sessions become unjoinable | daily | medium | `api/join-session.js:136-169` | Fixed (round2.md) |
| [APIP-13](raw/api-payments.md) | Low | Client Stripe helper hides server errors and can freeze placeholder price IDs | bug | high | `js/stripe/config.js:28-63` | Fixed (round2.md) |
| [APIP-14](raw/api-payments.md) | Low | cohortId sent to checkout is never acted on; after paying from the "Join" prompt the student is not enrolled | bug | high | `student-dashboard.html:3946-3984; api/stripe.js:165` | Partial (api-payments.md, student.md) |
| [AUTH-05](raw/auth.md) | Low | Any account (including students) can file a teacher application and spam the admin notification | input-validation | high | `supabase/migrations/202610141800_phase1_db_lockdown.sql:442-443` | Fixed (round2.md) |
| [AUTH-06](raw/auth.md) | Low | Own name injected into innerHTML / attributes and re-injected through i18n `{name}` interpolation | xss | high | `signin.html:217-230` | Fixed (pages.md) |
| [AUTH-07](raw/auth.md) | Low | "Back" from step 3 to step 2 leads to a dead end (signUp is called again) | bug | high | `signup.html:542 and :1056` | Fixed (pages.md) |
| [AUTH-08](raw/auth.md) | Low | Account enumeration on signup | info-leak | high | `signup.html:479-495` | Deferred (pages.md) |
| [AUTH-09](raw/auth.md) | Low | Reset-password page never checks it has a recovery session and lets any signed-in session change the password | bug | high | `reset-password.html:145-149` | Fixed (pages.md) |
| [AUTH-10](raw/auth.md) | Low | Success page reports "account is active" for unpaid or founding checkouts | bug | high | `signup-success.html:191` | Fixed (pages.md) |
| [AUTH-11](raw/auth.md) | Low | Raw Supabase/Postgres error messages shown to users | info-leak | high | `signup.html:485` | Fixed (pages.md) |
| [AUTH-12](raw/auth.md) | Low | Auth pages load an unpinned supabase-js from jsdelivr without SRI; marketing pages load unknown third-party scripts | other | high | `signin.html:119` | Fixed (pages.md) |
| [AUTH-13](raw/auth.md) | Low | `user_metadata.role` fallbacks remain (client routing, plus one server admin check) | authz | high | `js/supabase/config.js:172-179` | Fixed (api-ops.md) |
| [AUTH-14](raw/auth.md) | Low | Student/Teacher tabs on the sign-in page do nothing | bug | high | `signin.html:158-161` | Deferred (pages.md) |
| [AUTH-15](raw/auth.md) | Low | Missing translation keys on auth pages | bug | high | `forgot-password.html` | Deferred (pages.md) |
| [AUTH-16](raw/auth.md) | Low | Tier check constraint may reject `waitlist` / `founding_member` | bug | medium | `signup.html:709` | Partial (sql.md, pages.md) |
| [SQL-06](raw/sql.md) | Low | Student can pick any `tier` when inserting their own student_profiles row | authz | high | `supabase/migrations/202610141800_phase1_db_lockdown.sql:223-229` | Fixed (sql.md) |
| [SQL-07](raw/sql.md) | Low | Waitlist insert has no eligibility check, so free accounts can hold a released seat empty indefinitely | authz | high | `supabase/migrations/202610141800_phase1_db_lockdown.sql:497-498; supabase/waitlist-fill-system.sql:79-100` | Fixed (sql.md) |
| [SQL-08](raw/sql.md) | Low | ADMIN_SECRET is stored in plaintext in `app_settings` and reused as the HMAC key for teacher approval links and cron auth | secrets | high | `supabase/waitlist-fill-system.sql:27-31` | Fixed (sql.md) |
| [SQL-09](raw/sql.md) | Low | Column guards are deny-lists, and live-only columns are unguarded | authz | medium | `supabase/migrations/202610141800_phase1_db_lockdown.sql:230-235` | Fixed (sql.md) |
| [SQL-10](raw/sql.md) | Low | Other stale SQL files that are unsafe or misleading to re-run | other | high | `supabase/schema.sql:288-294` | Fixed (sql.md) |
| [SQL-11](raw/sql.md) | Low | `sync_teacher_rating` does not recompute the old teacher when a review is moved | bug | high | `supabase/add-availability-assignments.sql:286-303; migrations/202610141800_phase1_db_lockdown.sql:566-568` | Fixed (sql.md) |
| [SQL-12](raw/sql.md) | Low | Session file uploads have no MIME/extension restriction and no owner delete | other | medium | `supabase/migrations/202610141800_phase1_db_lockdown.sql:763-785` | Fixed (sql.md) |
| [SQL-14](raw/sql.md) | Low | tests/rls.sql coverage gaps | other | high | `supabase/tests/rls.sql:139-264` | Fixed (sql.md) |
| [STU-13](raw/student-dashboard.md) | Low | The 5-minute refresh replaces `EXERCISES` under rendered index-based handlers | bug | high | `student-dashboard.html:3016-3020` | Deferred (student.md) |
| [STU-14](raw/student-dashboard.md) | Low | Teacher assignments of type Grammar, Vocabulary or Writing render an empty panel | bug | medium | `student-dashboard.html:4679-4787` | Fixed (student.md) |
| [STU-15](raw/student-dashboard.md) | Low | Static German matching pair contains an apostrophe that breaks its `onclick` | bug | high | `student-dashboard.html:2733` | Fixed (student.md) |
| [STU-16](raw/student-dashboard.md) | Low | Classroom file upload: `file.name` in `innerHTML` (known), fake success, and uploaded files are never listed | xss | high | `student-dashboard.html:6961` | Fixed (student.md) |
| [STU-17](raw/student-dashboard.md) | Low | Join flow shows raw error codes and leaves the classroom open when Daily join fails | bug | high | `student-dashboard.html:6652-6656` | Fixed (student.md) |
| [STU-18](raw/student-dashboard.md) | Low | "View as" performs real writes and charged AI calls as the admin, and enrol/join act on the admin's own account | authz | high | `student-dashboard.html:2836-2850; writes at 4598-4606` | Not an issue (student.md) |
| [STU-19](raw/student-dashboard.md) | Low | Role routing falls back to `user_metadata.role` | authz | high | `student-dashboard.html:2839-2843` | Fixed (student.md) |
| [STU-20](raw/student-dashboard.md) | Low | Missing translations for most student dashboard strings | bug | high | `student-dashboard.html` | Deferred (student.md) |
| [STU-21](raw/student-dashboard.md) | Low | Dead or misleading purchase controls | bug | medium | `student-dashboard.html:1428 and 6500-6563` | Fixed (student.md) |
| [TEA-06](raw/teacher-dashboard.md) | Low | Student submission text goes into the AI grading prompt with no delimiting (prompt injection sets the score) | ai | high | `teacher-dashboard.html:1284; api/ai.js:249-266` | Fixed (round2.md) |
| [TEA-08](raw/teacher-dashboard.md) | Low | Classroom upload puts file.name into innerHTML (known) | xss | high | `teacher-dashboard.html:3540` | Fixed (teacher.md) |
| [TEA-09](raw/teacher-dashboard.md) | Low | Dead or misleading controls | bug | high | `teacher-dashboard.html:1577` | Fixed (teacher.md) |
| [TEA-10](raw/teacher-dashboard.md) | Low | Homework is assigned to every active cohort, and the assign button allows double submission | bug | high | `teacher-dashboard.html:1890-1911` | Fixed (teacher.md) |
| [TEA-11](raw/teacher-dashboard.md) | Low | Date and statistic calculation errors | bug | high | `teacher-dashboard.html:1469-1470` | Fixed (teacher.md) |
| [TEA-12](raw/teacher-dashboard.md) | Low | Unpinned Supabase SDK from a CDN without SRI on a page that renders with admin credentials | other | high | `teacher-dashboard.html:10` | Fixed (round2.md) |
| [TEA-14](raw/teacher-dashboard.md) | Low | Translation keys missing for most locales | bug | high | `teacher-dashboard.html` | Deferred (teacher.md) |
| [WEB-06](raw/marketing.md) | Low | Cookie consent is cosmetic, and the cookie/GDPR policies don't match what the site loads | other | high | `js/cookies-banner.js:434-441` | Fixed (pages.md) |
| [WEB-07](raw/marketing.md) | Low | `data-i18n-html` interpolation re-parses `data-i18n-var-*` values as HTML (double decoding defeats escaping) | xss | high | `js/i18n.js:229-237 with 265-277; build.js:42-54 and 138-145; current callers signin.html:225` | Fixed (pages.md) |
| [WEB-08](raw/marketing.md) | Low | Translation key reuse overwrites the English copy at runtime (wrong text on about-us and services) | bug | high | `about-us.html:187` | Fixed (pages.md) |
| [WEB-09](raw/marketing.md) | Low | Missing translation keys outside the marketing pages; hard-coded English on marketing pages | bug | high | `js/translations.js` | Deferred (pages.md) |
| [WEB-10](raw/marketing.md) | Low | Invented people, history and statistics on marketing pages (against CLAUDE.md copy rules) | other | high | `about-us.html:180-228` | Deferred (pages.md) |
| [WEB-11](raw/marketing.md) | Low | 404 page renders unstyled for nested URLs, including the blocked-path routes | bug | medium | `404.html:10-16` | Fixed (pages.md) |
| [WEB-12](raw/marketing.md) | Low | Dead links and placeholders on marketing pages | bug | high | `social icons `href="#"` in every footer` | Fixed (pages.md) |
| [WEB-13](raw/marketing.md) | Low | robots.txt rules don't match clean URLs | other | high | `robots.txt:4-17; vercel.json `cleanUrls: true`` | Fixed (api-ops.md) |
| [ADM-14](raw/admin.md) | Info | "View as" runs the teacher and student dashboards with the admin JWT, so stored XSS there would take over the admin account | xss | high | `js/view-as.js:42-58` | Fixed (pages.md) |
| [APIP-15](raw/api-payments.md) | Info | Refunds and disputes do not change access | stripe | high | `api/webhooks/stripe.js:363-369` | Deferred (api-payments.md) |
| [APIP-16](raw/api-payments.md) | Info | setup-stripe-prices.js does not create every price the API allow-lists | other | high | `supabase/setup-stripe-prices.js:58-65; api/stripe.js:41-51` | Fixed (api-payments.md) |
| [AUTH-17](raw/auth.md) | Info | Teacher application and signup fields that render elsewhere (for admin / dashboard reviewers) | xss | high | `signup.html:464-476` | Fixed (student.md) |
| [AUTH-18](raw/auth.md) | Info | No open redirect, and checkout inputs are validated server-side | stripe | high | `signin.html` | Not an issue (pages.md) |
| [AUTH-19](raw/auth.md) | Info | Dead helpers in js/supabase/config.js would break or over-fetch if reused | rls-mismatch | high | `js/supabase/config.js:80-89` | Fixed (pages.md) |
| [AUTH-20](raw/auth.md) | Info | careers-teachers-section.html has no application form and carries invented content | other | high | `careers-teachers-section.html:100-103` | Deferred (pages.md) |
| [SQL-13](raw/sql.md) | Info | Teachers can read their students' Stripe identifiers (already known) | info-leak | high | `supabase/migrations/202610141800_phase1_db_lockdown.sql:429-430; teacher-dashboard.html:2089-2090` | Partial (sql.md, teacher.md) |
| [STU-22](raw/student-dashboard.md) | Info | Progress teacher-note selector overwrites the first metric row on the 5-minute refresh | bug | medium | `student-dashboard.html:3348-3349` | Fixed (student.md) |
| [TEA-13](raw/teacher-dashboard.md) | Info | `?preview=1` produces console errors, and view-as writes are real | other | high | `teacher-dashboard.html:3604-3645` | Fixed (teacher.md) |
| [WEB-14](raw/marketing.md) | Info | build.js and verify.js cannot act as CI gates | other | high | `build.js:128-172` | Deferred (pages.md) |
