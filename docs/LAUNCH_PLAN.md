# Alimun — Launch & Platform Plan

_Prepared 23 September 2026 from a full read of the repository, three parallel code audits (backend, app frontend, public site), and live probes of alimun.com and the Vercel project. Companion files: `supabase/2026-09-security-hardening.sql`, `supabase/cleanup-test-data.sql`, `.env.example`, `.vercelignore`, `vercel.json`._

---

## 1. Verdict in one paragraph

Alimun is a real product with real plumbing (Supabase, Stripe live mode, Daily.co, Resend, an AI grading/exercise layer), but it was not safe to put paying students in front of. Before today's fixes: any signed-in user could make themselves admin; any student could activate a paid tier or join any class without paying, from the browser; a paying student could not actually see the video in class; the Join button vanished the moment the teacher started; both cron endpoints ran unauthenticated; the database schema, deploy checklist, agent logs and a seed script with test credentials were publicly downloadable; and no AI key, cron secret, admin secret or email key exists in production, so grading, exercises, tutor chat and every email are dead on the live site. The current stack can run a **small pilot** once the Phase 0 list below is completed. It cannot scale into a school: the app is three 5,000-line single-file HTML pages exported from Webflow, matching students to classes is "browse a list", the admin panel is a thin CRUD screen, and Vercel's Hobby plan caps the project at exactly the 12 serverless functions it already has. Phases 1–5 replace that foundation without pausing operations.

---

## 2. What was fixed today (commit `80d9bad` on branch `launch-hardening`, not yet merged or pushed)

### Backend (`/api`)
| Area | Before | After |
|---|---|---|
| Cron endpoints | Ran for anyone when `CRON_SECRET` unset (confirmed live) | Fail closed; room cron rewritten as a daily session-lifecycle job: marks past sessions `completed`, prefetches Daily rooms 24 h ahead, never writes fake `mock-room` URLs |
| Stripe checkout | Unauthenticated; caller chose the user id, email, mode and redirect URLs; unknown price IDs became tier `unknown`; a `cs_mock_` session id activated any account for free | JWT required; user id/email from the token only; price must be in the configured catalogue; one-time products carry `type` metadata; redirect URLs locked to alimun.com; mock backdoor deleted; retrieve-session returns only non-sensitive fields |
| Stripe webhook | Responded 200 **before** processing (Vercel may freeze the function); raw Stripe statuses violated the DB CHECK; cancellations left the seat occupied; `metadata.type` never set so credits/certificates were dead code | Processes then acknowledges; maps statuses to `active/past_due/cancelled`; cancels enrollments (frees seats) on subscription end or 3rd payment failure; handles `invoice.paid` recovery, `checkout.session.async_payment_succeeded`, refunds/disputes logged; one-time purchases (1:1 credit, founding fee, certificate) recorded |
| Enrollment | Only one of three paths was checked; client could switch/claim without paying | Single endpoint handles join / switch / claim waitlist offer / leave, with subscription, tier, language, status, offer-validity and atomic capacity checks; rollback via new `decrement_enrollment` |
| Live class | Any enrolled student joined even after cancelling; no attendance | Subscription must be active; server records `joined_at`; admins can join; clean `too_early` / `ended` errors |
| Session notes PDF | No auth at all — anyone could publish and email a class | Teacher must own the cohort (or be admin); bucket name unified; signed URLs; per-student email lookup (the old `listUsers()` silently stopped at 50 users); real sender address |
| Teacher application | Unauthenticated, HTML-injectable, non-expiring approve/reject links | Applicant's JWT required; data read from DB; escaped; links bound to action + 7-day expiry with constant-time compare |
| AI endpoint | Key leaked in URL; no usage recording; client controlled the whole system prompt | Key in header; **every call logged to `ai_usage` with tokens, estimated USD cost, latency**; per-user daily cap + platform daily budget from env; platform system prompt the client cannot override; `GET /api/ai?action=usage` for the admin spend panel |
| Public files | `supabase/schema.sql`, `DEPLOY_CHECKLIST.md`, `.agents/**`, seed script with test password served with 200 | `.vercelignore` + 404 routes in `vercel.json`; security headers (nosniff, frame, referrer, permissions, HSTS preload) |

### Database (`supabase/2026-09-security-hardening.sql` — **you must run it**)
- `is_admin()` reads `app_metadata` only; signup role copied to `app_metadata` by trigger; existing self-granted "admin" stripped; `bchysfpol@gmail.com` granted admin.
- Triggers reject client changes to `student_profiles.tier / stripe_* / enrolled_cohort_id` and `cohorts.enrolled_count / teacher_id / max_students / tier` (admins and the server are exempt).
- Student INSERT/UPDATE on `enrollments` removed; `increment_enrollment`, `generate_cohort_sessions`, `process_expired_offers` no longer callable by clients.
- RLS recursion between `student_profiles ⇄ enrollments ⇄ cohorts` removed with SECURITY DEFINER helpers, restoring teacher roster and admin reads that `fix-rls-student-profiles.sql` had dropped.
- New `ai_usage` table + `v_ai_spend_daily` view; students may close their own attendance row; stale sessions closed; fake room URLs cleared; `app_settings.api_url` fixed.

### Frontend (root files; locale copies regenerated with `npm run build` and committed)
Student dashboard: classroom container actually visible (duplicate `#live-incall` + `display:none` removed, mock in-call grid deleted), Join stays available from −15 to +90 min and while `live`, switch/claim flows routed through `/api/enroll` with proper error handling (there was no "leave class" UI to rewire), hardcoded live price IDs replaced by `/api/stripe/config`, fake €60 "payment" replaced by real Stripe checkout for the 1:1 price, missing globals declared (calendar no longer throws; verified rendering 100 day cells in mock mode), calendar on the current month, 46 AI/user interpolations escaped, fake essay scores removed, attendance `joined_at` left to the server, Daily SDK pinned to 0.79.0. Still demo: the "transcription" panel text.
Teacher dashboard: "Join live class" from −15 to +90 min, AI-feedback button no longer breaks on apostrophes and no longer fabricates 82–95 % scores, XSS escaping across roster/queue/modals, auth header on notes PDF, fake homework generator now calls the AI (six new UI strings fall back to English until added to `translations.js`).
Admin: gate is `app_metadata.role === 'admin'` only, DB-vocabulary fixes (goal_track select, tier list without `free`, cohort `open`), fake "231 students / €10,395" removed, today-only live/scheduled list, XSS escaping everywhere, cohort provisioning now generates sessions on the chosen weekdays/time, **new AI-spend panel** (totals, limits, by day, by action, top users).
Auth pages: checkout requires the session token and uses Stripe's hosted URL (Stripe.js no longer needed for checkout), no client-side billing writes after payment, resumable signup (`?step=`, existing session, "already registered"), email-confirmation case handled, browser timezone stored in signup metadata, dead Google button removed, tier string unified to `private`, `getUserRole()` helper in `js/supabase/config.js`. Also: the client checkout helper never actually attached the auth token before (it read a `window.SB` that was never set) — fixed.
Build: `it/services.html` added to the hand-maintained skip list so the SEO cross-links survive deploys. Verified in the browser: both dashboards boot in `?preview=1` mode with zero JavaScript exceptions.

---

## 3. Phase 0 — go-live checklist (you, this week, ~2 hours of clicks)

Do these in order. Nothing in Phases 1–5 matters until this is done.

1. **Upgrade Vercel to Pro** ($20/mo). Hobby caps the project at 12 serverless functions (already at 12) and restricts cron frequency; every new endpoint in this plan would otherwise break the deploy.
2. **Run `supabase/2026-09-security-hardening.sql`** in the Supabase SQL editor. Check the two VERIFY selects at the bottom: your admin email must show `app_role = admin`.
3. **Run `supabase/cleanup-test-data.sql`** (review the SELECTs, then the DELETE block). The July test cohort is `open`, Spanish/foundations, and discoverable by real students.
4. **Vercel → Environment Variables (Production)** — add: `CRON_SECRET`, `ADMIN_SECRET`, `RESEND_API_KEY`, `EMAIL_FROM_ADDRESS`, one AI key (`GROQ_API_KEY` is already in local `.env`; Gemini is cheaper for volume — see §6), `AI_DAILY_CALL_CAP=150`, `AI_DAILY_BUDGET_USD=25`, `STRIPE_PRICE_ONEONONE_SESSION` and `STRIPE_PRICE_CERTIFICATE` if you sell them. Then `update app_settings set value='<ADMIN_SECRET>' where key='admin_secret';` in Supabase.
5. **Resend**: verify the `alimun.com` domain (SPF/DKIM). Until then every customer email is rejected.
6. **Stripe → Webhooks**: endpoint `https://alimun.com/api/webhooks/stripe`, events: `checkout.session.completed`, `checkout.session.async_payment_succeeded`, `customer.subscription.created/updated/deleted`, `invoice.paid`, `invoice.payment_failed`, `charge.refunded`, `charge.dispute.created`. Confirm the Customer Portal is configured (Settings → Billing → Customer portal). After deploy, check Stripe's "recent deliveries" show **200**. If they show 400 "signature verification failed", tell me: that means Vercel pre-parsed the body and the handler needs a one-line adapter (see §13).
7. **Supabase → Storage**: create bucket `session-notes-pdfs` (private is fine; the API signs URLs). Supabase → Auth: decide whether email confirmation is on; the signup page now handles both.
8. **Deploy**: merge `launch-hardening` into `main` → Vercel builds. Then run the smoke test in §11.
9. **Google Search Console**: request indexing for the 5 `it/corsi-*` pages (still pending from 8 Sep).
10. **Decide and tell me** (see §12): AI provider, recording policy, pilot dates, min viable class sizes.

---

## 4. Target architecture — "the structure above it all"

### 4.1 Operating model (who does what)

| Role | Owns | Weekly rhythm |
|---|---|---|
| **Founder / Owner** (you) | Pricing, tiers, hiring teachers, approving cohort proposals, budget caps, go/no-go per phase | Monday: review Ops Console (waitlist, proposals, spend, churn); Friday: teacher check-in |
| **Academic lead** (can be you or a senior teacher at first) | Curriculum spine, focus modules per track, placement rubric, teacher quality (observes 1 class/teacher/month) | Reviews session notes coverage, attendance, level-mismatch flags |
| **Teachers** | Availability, delivering sessions from the module plan, session notes within 24 h, grading within 48 h, flagging misplaced students | Availability locked 2 weeks ahead; notes and grading SLAs enforced by dashboard nudges |
| **Support / Ops** (part-time until ~100 students) | Refunds, reschedules, waitlist replies, onboarding emails, Resend/Stripe/Daily incidents | Inbox zero daily; escalations to founder |
| **Students** | Placement test, availability, goals; attend; homework | Automated: reminders 24 h and 15 min before; nudges when inactive 7 days |
| **Engineering** (Claude + you, later 1 contractor) | Everything in Phases 1–5, on-call for incidents | Ship weekly; every phase has acceptance tests |

### 4.2 System architecture (target)

```
Browser (Next.js 15 App Router, TypeScript, Tailwind + shadcn/ui, next-intl)
   │  server actions / route handlers (Vercel Pro, Node 24)
   ├── Supabase: Postgres (RLS + SECURITY DEFINER RPCs), Auth (app_metadata roles),
   │             Storage (materials, notes PDFs, recordings index), Realtime (rosters, chat)
   ├── Stripe: Checkout, Billing Portal, webhooks → entitlements table
   ├── Daily.co: private rooms per session, meeting tokens, cloud recording (opt-in), webhooks → attendance
   ├── AI: Vercel AI Gateway (one bill, per-request cost, fallbacks) → Gemini Flash / Groq; usage → ai_usage
   ├── Resend: transactional email from React Email templates; queue in Postgres (pgmq) + cron worker
   ├── Observability: Sentry (errors), Vercel Analytics + Speed Insights, PostHog (product), Logflare/Vercel logs
   └── Jobs: Vercel Cron (Pro: minute-level) → matching runs, reminders, session lifecycle, spend rollups
```

Why not stay on static HTML + functions: the function cap, no shared components, no type safety, 9 compiled copies of every page, and no way to render per-locale metadata. Why Next.js on Vercel and not Replit/Webflow: you already deploy on Vercel, Supabase SDKs are first-class, and it kills the Webflow runtime (jQuery, IX2, `webflow.js`, dead form endpoints) entirely.

### 4.3 Domain model (additions to today's schema)

```
programs(id, language, track)                       -- "Spanish · Relocation"
focus_modules(id, program_id, level, week_no, title, objectives[], materials[])   -- the curriculum spine
cohorts(+ program_id, focus_module_cursor, start_date, end_date, min_viable, seat_holds, timezone, status: proposed|open|full|running|completed|cancelled)
student_profiles(+ timezone, native_language, sub_focus[], pace, placement_confidence, availability_hash)
student_availability(student_id, weekday, start_min, end_min)  -- weekly windows in the student's tz
teacher_availability(+ timezone)                    -- today it is tz-naive
placement_results(student_id, level, confidence, per_skill jsonb, taken_at)
seat_holds(cohort_id, student_id, expires_at, reason)          -- 24 h reservations from the engine
cohort_proposals(id, program_id, level, teacher_id, slot, candidates[], score, status)  -- engine output, admin approves
assignments_reasons(student_id, cohort_id, score, reasons jsonb, run_id)   -- explainability
entitlements(student_id, tier, weekly_sessions, ai_calls_per_day, one_on_one_credits, valid_until)  -- derived from Stripe
attendance(session_id, student_id, joined_at, left_at, minutes, source: daily_webhook|manual)
usage_ledger(kind: ai|video_minutes|email, ref_id, qty, cost_usd, occurred_at)   -- unit economics
audit_log(actor, action, target, before, after, at)
```

---

## 5. Classroom control platform ("Ops Console")

Replaces the current admin page's CRUD screens with the tools a school actually runs on. Built in Phase 1 as pragmatic additions to `admin.html`, rebuilt properly in Phase 2.

**Roster & seats** — every cohort: students (level, attendance %, last active, subscription state), teacher, schedule, focus module this week, seat map (enrolled / holds / waitlist). Actions: move student to another cohort (calls the engine for the best target), remove, add manually, convert waitlist → seat, override capacity with reason (audited).

**Session control** — cancel / reschedule one session or the rest of the term with automatic emails; substitute teacher; mark no-show; open room early; end room; view recording link; attendance auto-filled from Daily webhooks (`participant-joined/left`) with manual correction.

**Waitlist & proposals queue** — one screen: demand by language × level × track × timezone bucket, engine's proposed new cohorts (teacher, slot, candidate list, projected fill), approve → cohort created, sessions generated, offers sent.

**Teacher management** — applications, approval, availability coverage heatmap, hours delivered, notes/grading SLA compliance, ratings, payouts export (CSV for Wise; the `WISE_*` vars are dead code today).

**Money** — Stripe state per student (mirrored from webhooks), refunds via Stripe API with reason codes, churn list (past_due, cancelled this month), MRR by tier, unit economics per cohort (teacher cost + video minutes + AI + email vs revenue).

**Spend** — AI (already live: calls, tokens, cost by day/action/user, caps), Daily minutes (from webhooks → `usage_ledger`), Resend sends; monthly budget bars with alerts at 80 %.

**Audit & safety** — every admin action logged; impersonate student/teacher (read-only) for support; export student data (GDPR); delete account.

---

## 6. API spend tracking & cost control

Live today: `ai_usage` rows per call with provider, model, tokens, estimated cost (pricing table in `api/ai.js`), latency, success; per-user daily call cap; platform daily budget; `GET /api/ai?action=usage` and the admin "AI spend" panel.

Phase 1 additions: route AI calls through **Vercel AI Gateway** (single invoice, exact cost per request, automatic fallback Gemini ↔ Groq, rate limits) and store `gateway_request_id` in `ai_usage`; per-tier quotas in `entitlements` (Community 20 AI calls/day, Focused 60, Intensive/Private unlimited within budget); `usage_ledger` for Daily minutes (webhook `meeting.ended`) and Resend; nightly rollup cron → `spend_daily(kind, cost)`; Slack/email alert at 80 % and hard stop at 100 % of monthly budget (AI degrades to "unavailable", video never blocks).

Model choice: Gemini 2.0 Flash ≈ $0.10/$0.40 per 1M tokens is 5–10× cheaper than the Groq `gpt-oss-120b` default for grading/chat; keep Groq as fallback. Expected cost at 200 active students × 10 calls/day × ~1.5k tokens ≈ $9–15/month on Flash. Set `AI_DAILY_BUDGET_USD` accordingly.

---

## 7. Classroom focuses (curriculum spine)

Today a cohort is `language × level × goal_track × tier` with free-text description; teachers improvise. "Surgical" placement needs something to place *into*. Define:

- **Track → focus modules.** Each track gets a 12-week module list per level, written once by the academic lead (AI-drafted, human-edited), stored in `focus_modules` with objectives, can-do statements (CEFR-aligned), materials, and a session-plan template.
  - _Relocation_: bureaucracy & housing, healthcare, banking, work onboarding, small talk & neighbours, kids/school, transport, emergencies…
  - _Professional_: meetings, email register, presentations, negotiation, phone calls, industry vocabulary packs (tech, hospitality, healthcare)…
  - _Academic_: exam formats (DELE/CILS/Goethe/IELTS-style), essay structure, academic listening, note-taking…
  - _Pleasure_: travel, food & culture, film/music, conversation clubs…
  - _Foundations_: the standard CEFR progression.
- **Sub-focus tags** on students (`sub_focus[]`, e.g. `healthcare`, `tech`) chosen at onboarding; the engine prefers cohorts whose upcoming modules overlap.
- **Cohort cursor.** Each cohort points at its current module; sessions inherit the module's plan; notes/homework/AI exercises are generated *from the module objectives* (the AI already ingests session notes — this makes the input structured).
- **Placement** (Phase 1): the existing 8-question test becomes a 20-minute adaptive test (reading/listening/grammar + one 90-second speaking sample graded by AI with confidence); result → `placement_results` with per-skill scores. Teachers can flag "misplaced" from the roster → engine proposes a move.

---

## 8. The matching engine ("Seating")

### 8.1 What exists today
No engine. Students browse open cohorts filtered by language (server) and level ±1, goal track, weekday chips, tier (client) and press Join. Signals ignored: timezone (defaults to UTC), availability, sub-focus, start date, teacher continuity, class balance. Waitlist is FIFO per cohort with 48-hour offers via a DB trigger calling `pg_net`.

### 8.2 Design

**Two loops, one scorer.**

1. **Instant seating (on demand)** — when a student finishes onboarding (or is moved), score every eligible cohort and either seat them (if score ≥ threshold and a seat is free), place a 24 h `seat_hold` (if the cohort is `proposed` and close to viable), or add to the demand pool. The student sees their top 3 with plain-language reasons and can accept another.
2. **Cohort formation (nightly + on demand from Ops)** — cluster the demand pool into viable new cohorts, pick teacher + slot from `teacher_availability` maximising candidate coverage, and emit `cohort_proposals` for approval (auto-approve when score ≥ 0.85 and teacher opted in).

**Hard constraints (eligibility)**
- same `language`; tier entitlement (student tier weight ≥ cohort tier weight);
- level window by tier: Community ±1 level, Focused exact, Intensive/Private exact **and** matching sub-focus;
- ≥ 1 weekly schedule slot of the cohort falls inside the student's availability windows (converted to UTC; DST-safe via IANA tz);
- seat available (or hold), cohort not `completed/cancelled`, start date within the student's acceptable window;
- not already in that cohort; no duplicate of an active enrollment.

**Soft score (0–1, weighted)** — weights tunable in `app_settings`:
| Signal | Weight | Notes |
|---|---|---|
| Schedule fit (fraction of cohort slots inside availability, preference for preferred times) | 0.25 | |
| Level exactness (0 = ±1, 1 = exact; placement confidence scales it) | 0.20 | |
| Focus overlap (Jaccard of sub-focus vs cohort's next 6 modules) | 0.15 | |
| Fill health (prefer cohorts between 60–90 % full; penalise creating stragglers) | 0.15 | |
| Teacher continuity / rating | 0.10 | returning students keep their teacher when possible |
| Start proximity (days until first session, sooner is better) | 0.10 | |
| Group balance (native-language mix, age band spread, pace) | 0.05 | avoids 100 % same-L1 classes for conversation tracks |

**Formation algorithm** — greedy-with-repair, then optimal assignment:
1. Bucket the pool by (language, level, track, tier).
2. For each bucket, build candidate slots = teacher availability windows (60 min) × weekdays, scored by how many pool students are available (availability bitmaps → popcount of AND).
3. Take the best slot, propose a cohort with `min_viable` (Community 8, Focused 5, Intensive 3, Private 1) and cap by tier; assign students by score; remove them; repeat until no viable slot.
4. Run a min-cost assignment (Hungarian / Jonker-Volgenant on the score matrix, n ≤ a few hundred) across all `proposed` + `open` cohorts to fix greedy mistakes; only moves that improve total score by > 0.05 are kept.
5. Emit proposals; explain every assignment (`assignments_reasons`).

Runs in a Vercel cron (Pro) as a route handler in TypeScript; deterministic; < 1 s for thousands of students. No ML needed to start; the signals and weights are the product. Later: learn weights from retention (students who stayed ≥ 3 months) with a simple logistic model.

**Holds & offers** — `seat_holds` expire in 24 h; waitlist offers become holds; expired holds go back to the pool (not deleted, as today). The `pg_net` trigger + `app_settings.admin_secret` plumbing is replaced by the cron reading `seat_holds`/`cohort_waitlist` directly.

**Ops overrides** — every automatic decision can be overridden in the Ops Console with a reason; overrides feed back as training data.

### 8.3 Student experience
Onboarding wizard → placement → availability grid (drag to paint weekly windows, shown in their timezone) → sub-focus chips → "We found your class" screen (or "We're forming your class — here's the date we expect it to start, and here's what to do meanwhile") → calendar. No browsing required; a "see other options" link keeps agency.

---

## 9. UI redesign (no Webflow, one design system)

**Design system** (build first, in code, Phase 2 week 1): tokens from the current brand — ink `#080808`, lime `#ceff65`, bone `#eeeeec`/`#f0efe9`, plus a considered neutral scale with a slight warm bias and semantic colors (success/warning/critical distinct from lime). Type: Coolvetica Condensed for display (already licensed in `fonts/`), Satoshi for body (Fontshare → self-host), JetBrains Mono for data. Spacing 4-pt scale, radius scale (4/8/16), elevation only on overlays. Components via **shadcn/ui** on Tailwind (owned code, no runtime dependency), dark mode from day one, RTL support for Arabic via logical properties.

**App shell**: left rail (collapsible), top bar with search + language switcher + notifications, content max-width 1200. Screens:
- _Student_: Home (next class hero with countdown, this week's module, homework due, streak), Classroom (Daily prebuilt embed + module plan sidebar + materials + live chat), Practice (AI exercises by module), Progress (skills radar from real data), Community, Billing (Stripe portal), Settings (availability grid, timezone, focus).
- _Teacher_: Today (sessions with one-click join, roster, module plan), Cohorts, Grading queue, Notes (structured form → PDF), Availability (weekly grid), Earnings.
- _Ops Console_: §5.
- _Marketing_: home, how it works, pricing, tracks (one page per track), languages (one page per language × locale — the SEO landers), teachers/careers, corporate, about, contact, legal. All content in MDX per locale; metadata translated; hreflang generated; clean URLs identical to today's (redirect map for the few that change).

**Live classroom (real, not demo)** — Daily Prebuilt (chat, screenshare, hand raise, recording when enabled) inside our shell; teacher controls: mute all, spotlight, breakout (Daily supports it), timer, module checklist; whiteboard via **tldraw** (multiplayer through Supabase Realtime or tldraw sync); materials panel from `focus_modules`; attendance automatic. Remove the fake transcription/chat/files stubs.

**Webflow/Replit removal plan (Phase 4)**
1. Inventory (done): `js/webflow.js` 290 KB (IX2 + forms posting to `webflow.com/api/v1/form/<site>` — dead), jQuery 3.5.1 from Webflow CDN, `webfont.js`, unidentified `vvkey.io` / `vvprocess` scripts, `css/webflow.css` (88 % unused), `css/youssefs-…webflow.css` (utility soup), `data-wf-*` attributes, 22 IX2 elements parked at `opacity:0`, Webflow-shaped forms with no handler. No Replit traces exist.
2. Rebuild each marketing page as a Next.js route with MDX content and the design system; keep copy, JSON-LD and the `it/corsi-*` bodies (the strongest content in the repo).
3. Forms → route handlers (contact, corporate, subscribe) with Resend + Turnstile.
4. Media diet: AVIF as `src`, hero video ≤ 1.5 MB or poster-only on mobile (today 9.3 MB webm + 5 MB mp4 autoplay).
5. SEO parity gate: same URLs, per-locale `<title>`/description (today 130+ locale pages carry English titles), canonical/hreflang per page, legal pages once (not 9×), `ma` locale fixed (invalid tag, French content, missing from the router → 404 loop), remove the client-side geo-redirect in favour of `Accept-Language` on the edge + banner. Lighthouse ≥ 90 mobile before cutover.
6. Cut over per page behind Vercel rewrites; delete the Webflow export.

---

## 10. Phases

Each phase ends with acceptance tests you can run yourself. Durations assume Claude does the engineering with you reviewing daily; add 30 % if a contractor joins mid-way.

### Phase 0 — Launch hardening (this week) ✅ code done, ⏳ your checklist in §3
**Acceptance**: §11 smoke test passes on production; a real €-checkout with a test card in Stripe test mode *or* one refunded live payment activates a student, they get the welcome email, join a scheduled class and see video; unauthenticated calls to `/api/cron-*`, `/api/generate-notes-pdf` return 401; `alimun.com/supabase/schema.sql` returns 404.

### Phase 1 — Run the pilot on the current stack (weeks 1–3)
Goal: 1–3 real cohorts, EN/IT/ES languages first (per your SEO priority), without waiting for the rewrite.
- Ops Console v1 inside `admin.html`: roster per cohort, move/remove student (via `/api/enroll` as admin), cancel/reschedule session with email, waitlist queue, Stripe state per student, AI spend (done), Daily minutes.
- Matching v1: server-side `recommend` action on `/api/enroll` implementing §8.2 hard constraints + score against **existing** cohorts; onboarding collects timezone + availability grid + sub-focus (new columns); "We found your class" screen replaces browsing as the default.
- Curriculum: academic lead + AI draft the 12-week module lists for the pilot tracks; stored in `focus_modules`; teacher session plan template.
- Email: reminders 24 h / 15 min (cron), welcome, notes published, offer expired; domain verified.
- Observability: Sentry on functions + pages; PostHog events for onboarding funnel; weekly cost report email.
- Migrations: `student_availability`, `placement_results`, `seat_holds`, `focus_modules`, `usage_ledger`, `audit_log`, `entitlements`.
**Acceptance**: 10 test students onboard end-to-end in < 8 minutes each and land in a class automatically; teacher runs a full 60-minute class with attendance recorded; admin moves a student between cohorts with emails sent; spend page shows the day's AI and video cost.

### Phase 2 — New application foundation (weeks 3–7)
- Next.js 15 + TypeScript monorepo (`apps/web`, `packages/ui`, `packages/db`), Supabase SSR auth with `app_metadata` roles, design system + shadcn components, Storybook.
- Student, teacher and ops shells rebuilt screen by screen; feature-flag cutover per surface (Vercel Flags); the old HTML dashboards remain until each screen has parity.
- All server logic moves to typed route handlers/server actions; the 12 functions become one Next app (no cap on Pro).
- Live classroom v2: Daily Prebuilt embed with teacher controls, tldraw whiteboard, materials from modules, automatic attendance via Daily webhooks, optional recording with consent banner.
- i18n with `next-intl`: EN/IT/ES complete, FR/DE/PT/AR machine-drafted then reviewed; RTL verified.
**Acceptance**: a student can do everything the old dashboard did in the new one on desktop and phone; Lighthouse ≥ 90; zero `innerHTML` of user content without sanitisation; E2E tests (Playwright) for onboarding → class → homework → grading.

### Phase 3 — Seating engine v2 + academic operations (weeks 6–10)
- Cohort formation loop (§8.2 steps 1–5) as a cron route; proposals queue in Ops Console; holds/offers replace the `pg_net` trigger; explainability stored.
- Adaptive placement test with AI-graded speaking sample; teacher "misplaced" flag → engine move.
- Entitlements from Stripe (weekly session limits per tier, 1:1 credits, AI quotas) enforced server-side.
- Teacher payouts: hours from attendance, statement PDF, CSV export.
**Acceptance**: with 60 synthetic students across 3 languages the engine forms ≥ 90 % into viable cohorts with schedule fit ≥ 0.8 and no hard-constraint violations (unit tests); an admin can explain any placement from the UI.

### Phase 4 — Marketing site without Webflow (weeks 8–12)
§9 removal plan; SEO parity gate; forms; media; `ma` locale; metadata per locale; sitemap/legal cleanup. Keep the `it/corsi-*` landers as the first rebuilt templates (they carry the ranking potential).
**Acceptance**: no request to `webflow.com`, `cloudfront jquery`, `vvkey.io`; GSC shows no coverage regressions 2 weeks after cutover; Core Web Vitals green.

### Phase 5 — Scale & polish (ongoing from week 12)
Mobile PWA, push notifications, community features, teacher marketplace onboarding, learned matching weights, corporate (B2B) cohorts with invoicing, certificates (the `/api/generate-certificate` the webhook expected never existed), referral programme.

---

## 11. Production smoke test (run after every deploy)

```
# public
curl -sI https://alimun.com/ | grep -i strict-transport
curl -s -o /dev/null -w "%{http_code}\n" https://alimun.com/supabase/schema.sql      # 404
curl -s -o /dev/null -w "%{http_code}\n" https://alimun.com/DEPLOY_CHECKLIST.md      # 404
# api
curl -s -o /dev/null -w "%{http_code}\n" https://alimun.com/api/cron-create-rooms   # 401
curl -s -X POST https://alimun.com/api/ai?action=grade -d '{}' -H 'content-type: application/json' -w "\n%{http_code}\n"   # 401 (was 501 = no AI key)
curl -s https://alimun.com/api/stripe?action=config | head -c 200                    # pk_live_… + prices
curl -s -X POST https://alimun.com/api/create-checkout-session -d '{"priceId":"x"}' -H 'content-type: application/json'  # 401
```
Then in the browser: sign up → pay (test mode or refund) → welcome email → dashboard shows class → teacher starts → student sees video → notes published → student gets email.

---

## 12. Decisions I need from you

1. **Vercel Pro** — approve the $20/month (required for anything beyond 12 functions and for minute-level crons).
2. **AI provider** — Gemini Flash (cheapest, recommended) vs keep Groq; I set the code up for either. Give me the key to add, or add it yourself.
3. **Recordings** — record classes (students consent at signup) or not. Affects Daily plan and GDPR text.
4. **Pilot scope** — which languages/levels/tracks start first, and the earliest date. My recommendation: Spanish and English, A2–B1, Foundations + Relocation, start in 3 weeks.
5. **Minimum viable class sizes** — proposed Community 8, Focused 5, Intensive 3.
6. **Email confirmation on signup** — on (safer, one more step) or off (smoother). Both work now.
7. **Access I could not get today**: the Vercel connector in this session is authorised to a different team, and the permission classifier blocked me from reading production Supabase rows. Both would let me verify state directly next time.

---

## 13. Risks

- **Webhook raw body**: Vercel's Node helpers may pre-parse the body; the handler now falls back, but if Stripe deliveries show 400 after deploy, that's the cause and it needs one env flag (`NODEJS_HELPERS=0`) plus a small adapter — tell me.
- **Daily costs**: private rooms are created for every session at cohort creation (up to 36 rooms); harmless but noisy. Phase 1 moves creation to the day-before cron only.
- **Timezones**: teacher availability is timezone-naive today; cohorts in a different tz than the teacher can be created at impossible hours. Fixed by the Phase 1 migration.
- **Single-file dashboards**: every fix touches 320 KB files; regressions are easy. Phase 2 is the real fix; until then, keep changes small and run the smoke test.
- **Content**: French/German/Portuguese/Chinese/Arabic locales fall back to English for ~185 keys; fine for the pilot (EN/IT/ES), not for launch in those markets.
