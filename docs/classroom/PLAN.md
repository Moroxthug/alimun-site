# Alimun Live Classroom — Architecture and Implementation Plan

_Codename **ALCE** (working name; the product is branded later). Written 19 October 2026 from a full read of `Moroxthug/alimun-site` (production), the older Lovable app `Moroxthug/alimun-d3d746f7`, the owner's ALCE concept document, and current vendor pricing._

This file is the plan of record for the classroom. It follows the same conventions as `docs/IMPLEMENTATION_PLAN.md`: every phase has a goal, a scope, acceptance checks and a kickoff prompt for a fresh Claude Code cloud session. Architecture decisions are in §3 and are binding unless the owner changes them; when a phase finds a decision is wrong, it stops and proposes an amendment here rather than working around it.

---

## 0. Summary

- **What we build:** Alimun's own live classroom, replacing the Daily.co iframe. Video stays a plain SFU (LiveKit). On top of it: teacher controls and breakouts that beat Zoom for a language class, exercises rendered as live UI instead of screen share, talk-time balance for the teacher, and a post-class loop that turns each student's spoken mistakes into their review cards and homework.
- **Hosting, short answer:** yes, we can build and pilot for free. Development runs on a local LiveKit server (free, open source). The pilot runs on LiveKit Cloud's free plan, which covers roughly 2–3 class-hours a month at 30 students, or about one small cohort. Real scheduled classes need paid capacity. At that point we choose between LiveKit Cloud (no ops) and self-hosting LiveKit on an EU VPS with included traffic (OVHcloud or Hetzner, about €10–40/month for hundreds of class-hours). **AWS is the wrong home for the media server**, because video is bandwidth-heavy and AWS charges about $0.09/GB egress. The code is identical on all three because LiveKit Cloud and self-hosted LiveKit use the same SDKs and protocol. The decision trigger is in §4.
- **Order:** classroom parity first (teachers must prefer it over Daily within weeks), then breakouts, telemetry, synced activities, lesson building, and only then AI. The AI starts as a cheap **post-class batch pipeline**, about $0.10–0.30 per 30-student class. Live AI (captions, breakout monitoring, synthetic peer) comes once paid compute exists.
- **Kept from the concept doc:** decoupled media and pedagogy layers, data-channel exercises, talk-time telemetry, breakout oversight, dockable layouts, extension SDK, end-of-session handoff.
- **Changed from the concept doc** (reasons in §3 and §9):
  - Talk time comes from the SFU's speaker detection, not a dB threshold in the browser.
  - Exercise state is owned by the teacher and stored in Postgres; it is not a stateless broadcast.
  - Breakout listening uses per-track agents, not room-composite Egress.
  - Spaced repetition uses FSRS, not SM-2.
  - Recording uses Opus with speech gating, not raw PCM.
  - The formant visualiser and synthetic peer move late.
  - Screen share stays as a fallback.
  - No Hetzner/coturn setup as step one.

---

## 1. Where Alimun stands (facts that shape this plan)

| Area | Fact | Consequence for the classroom |
|---|---|---|
| Stack | Static HTML dashboards (`student-dashboard.html` 315 KB, `teacher-dashboard.html` 180 KB, `admin.html`) + 12 Vercel functions (Hobby cap) + Supabase `dgaiasmefcbrtzqwdyri` (eu-west-1, Free plan) + Stripe live + Resend + Groq (`openai/gpt-oss-120b`) | The classroom cannot add Vercel functions. Server code goes to **Supabase Edge Functions** (no such cap). The classroom is its own React app, not more code in the dashboard files. |
| Video today | Daily Prebuilt iframe (`daily-js` 0.79). Room `alimun-<session_id>`, private, 40 max, expires start+90 min, recording off. Token from `api/join-session.js`: teacher/admin `is_owner`; student needs an active enrollment + active subscription (402 otherwise); join window −15/+90 min (425/410). The teacher's join flips the session to `live`; the student's first join upserts `session_attendance.joined_at`. The panels around the iframe are **fake**: canned chat reply, scripted "transcription", unsynced whiteboard, hard-coded file list (only file upload is real) | We replace the whole classroom view per cohort behind a flag (`video_provider`) and remove the fake panels. Daily stays as the fallback until the new classroom has run a month of real classes without incident. Error codes and the join window are kept identical so the dashboards' handling still works. |
| Data | `cohorts` (12-week, language × level × goal track × tier), `sessions` (no duration column; 60 min assumed), `enrollments`, `session_attendance` (students only; `duration_minutes` never written), `session_notes` (vocabulary JSON + PDF), `assignments`/`assignment_submissions`, `exercise_results`, `session_credits` (1:1 credits, not yet consumed), `ai_usage`, `teacher_availability` (tz-aware). RLS helpers: `is_admin()`, `teaches_session()`, `attends_session()`, `is_enrolled_in()`, `teaches_cohort()`. No vocabulary, spaced-repetition, chat or transcript tables exist | The classroom reuses these helpers for RLS, fills in attendance durations (and teacher presence) from LiveKit webhooks, and adds its own tables (§5). Lesson vocabulary already in `session_notes` seeds the first review cards. |
| Languages | Taught: EN, DE, ES, FR, PT, IT, Mandarin, Japanese, Arabic. **Live today: English and German only**; the rest go to the waitlist. UI locales: en, es, fr, de, pt, it, zh, ar (RTL), plus ma | The AI evaluation sets and STT bake-off start with English and German. |
| Class sizes | Tier caps in `api/create-cohort.js`: Community 35, Focused 17, Intensive 6, Private 1 (admin override 1–35). Owner: a typical class is 1–30 students. | Engineering target: **36 participants + 1 teacher + 2 bots = 39**; tested at 40. Owner decision D1: lower the Community cap to 30 or keep 35. |
| Business | 0 paying students and 0 approved teachers on 15 Oct; founding claims removed; SEO markets CA/US/IT/DE/MA | There is time to build properly. The pilot will be small, so free tiers are realistic for months. |
| Rules | `CLAUDE.md`: role from `app_metadata` only, escape all HTML, migrations idempotent with verify queries, **design lock** (Coolvetica + Satoshi, ink `#080808`, lime `#ceff65`, bone; no new colours without approval), no emojis, no invented numbers | All of these apply to the classroom. The concept doc's dark palette and green/amber/red telemetry colours **need owner approval** (D2). |
| Old React app | `alimun-d3d746f7`: separate Supabase project, no real classroom (Daily iframe, host token readable by learners), Leitner-style review, `strict: false` TypeScript | Port only `ttsService`/`SpeakButton`, `WordLookup`, the CEFR mapping and the `generate-exercises` prompt tables. Nothing else. |
| Compliance flag | Vercel's Hobby plan is for non-commercial use only; Alimun takes payments | Independent of this plan: move `alimun-site` to Vercel Pro (US$20/month) or another host before scaling. The classroom app itself is hosted on Cloudflare Pages, whose free plan allows commercial use. |

---

## 2. Product scope

### 2.1 Personas and jobs
- **Teacher:** run a 60–90 minute class for 1–35 students; keep everyone speaking; move through a lesson plan without juggling tabs; run breakouts and know what is happening in them; leave with notes and homework already drafted.
- **Student** (phone or laptop, often on a weak connection): see and hear clearly; do exercises in class without squinting at a shared screen; afterwards, get *their own* mistakes back as practice.
- **Admin/owner:** classes run reliably; costs are visible; data is lawful; quality can be checked.

### 2.2 Feature map

| Group | Features | Phase |
|---|---|---|
| Core call | Pre-join device check and network test; gallery / speaker / teacher-focus layouts; adaptive streams (only visible tiles are received, at the size shown); simulcast + dynacast; reconnection with state restore; screen share (fallback, teacher-only by default); chat (persisted); hand raise with queue order; reactions; captions slot | C1 |
| Teacher controls | Mute one/all (with "ask to unmute"); stop video; remove; lock room; spotlight; waiting room/admit; allow-list who may share; end class for all | C1 |
| Breakouts | Create N rooms (random / manual / by level / by previous pairing); drag-and-drop reassign; timer; broadcast message to all rooms; teacher drop-in/out; recall all; per-room activity | C2 |
| Telemetry | Per-student talk time and turn count; teacher vs student talk ratio (TTT/STT); "silent for N minutes" hints; cohort balance index; latency/quality per participant | C3 |
| Synced activities | Activity engine + protocol; slides (PDF → synced pages); cloze; multiple choice / quick poll; ordering; matching; image prompt / flashcard; free speaking prompt with timer; synced media player (audio/video listening); whiteboard; live results heat-map; reveal/lock | C4 |
| Lesson building | Lesson plan = ordered steps (activity, breakout, discussion, break); library per language/level/module; AI drafts activities from objectives and vocabulary; run-of-show: one click advances the class | C5 |
| Post-class AI | Opt-in per-student speech capture; batch transcription; error extraction against lesson targets; teacher review queue; class summary; draft notes for the existing notes/PDF flow | C6 |
| Review loop | Personal "mistakes notebook" with audio clip and correction; FSRS review cards; homework generated from the student's errors; progress over weeks | C7 |
| Live AI | Live target-language captions; tap a word to save it; breakout stall/error alerts to teacher; live talk-time from server | C8 |
| Infra stage B | Self-hosted LiveKit (or LiveKit Cloud paid), TURN/TLS 443, agents worker, monitoring, load tests | C9 |
| Later | Synthetic peer (odd-number pair work); pronunciation assessment; LTI/SSO for schools; white-label theming; native wrappers | C10 |

### 2.3 Explicit non-goals (for now)
- Native iOS/Android apps (the web app must work on mobile Safari and Chrome).
- Cloud recording of video (consent, storage cost and little teaching value; revisit on demand).
- Real-time grammar scoring shown to students during class (too error-prone; the teacher stays the authority).
- Our own SFU, TURN stack or media processing in the RTP path.

---

## 3. Architecture decisions (ADRs)

### ADR-01 Media: LiveKit (open-source SFU)
- **Choice:** LiveKit server + `livekit-client` + `@livekit/components-react` (used as primitives; our own layout).
- **Why:**
  - Open source (Apache-2.0).
  - Identical API for LiveKit Cloud and self-hosting, so the vendor decision stays open.
  - Simulcast, dynacast and adaptive stream built in.
  - Server-side active-speaker detection from RTP audio-level headers, which needs no decoding.
  - Reliable/lossy data packets.
  - Webhooks.
  - Server APIs for mute, remove, move and update metadata.
  - An Agents framework for later AI.
  - Built-in TURN.
- **Rejected:**

  | Option | Why not |
  |---|---|
  | Daily (current) | Closed, per-minute pricing, no self-host exit |
  | Cloudflare Realtime SFU | Cheap egress (1 TB/month free, then $0.05/GB), but no rooms or signalling; we would build them, which is months of work |
  | mediasoup / Janus | Too much custom infrastructure |
  | Jitsi | Hard to customise deeply; weaker SDK story |

### ADR-02 Hosting in stages (answers "free first, then OVH/AWS/other")
| Stage | Media server | Cost | Capacity (30-student class ≈ 1,900 participant-min and ≈ 25 GB per hour, §4) | Use |
|---|---|---|---|---|
| A0 Dev | `livekit-server --dev` in Docker locally and in CI | €0 | unlimited (local) | all development and automated tests |
| A1 Pilot | LiveKit Cloud **Build** (free: 5,000 participant-min, 50 GB downstream, 100 concurrent connections, 5 agent sessions/month limits) | €0 | ~2–3 full class-hours/month, or ~8 class-hours of a 5-student group | staging + first real pilot class |
| B Production | **Option 1:** self-host LiveKit on an EU VPS with included traffic (OVHcloud VPS, unmetered traffic; or Hetzner, 20 TB/month in the EU). **Option 2:** LiveKit Cloud Ship ($50/month: 150k participant-min, 250 GB, then $0.12/GB) | Option 1: ~€10–40/month per node. Option 2: $50 plus ~$3 per extra full class-hour of bandwidth | Option 1: hundreds of class-hours per node. Option 2: ~10 full class-hours inside the 250 GB | real scheduled classes |
| C Scale | 2+ self-hosted nodes behind LiveKit's Redis-based multi-node routing, or a LiveKit Cloud contract | volume-dependent | thousands of class-hours | many concurrent classes |

- **AWS:** not for media (egress ~$0.09/GB makes it the most expensive option for video). It is fine for nothing we need right now.
- **Oracle Cloud Always Free:** possible as a free staging box, but not for production. Its ARM allowance was cut in 2026, popular regions often lack capacity, and idle instances can be reclaimed.
- **The rest of the stack stays free at pilot scale:**
  - Supabase Free: DB, Auth, Edge Functions, Realtime.
  - Cloudflare Pages: free, commercial use allowed, hosts the classroom SPA.
  - Cloudflare R2: 10 GB free, no egress fees; holds short-lived speech audio.
  - Groq: already contracted; Whisper large-v3-turbo is $0.04 per audio hour.
- **Data residency:** Supabase is in eu-west-1. On LiveKit Cloud, media may route through non-EU edges, which the privacy notice must disclose (sub-processor). Self-hosting in the EU in Stage B removes the issue. This is one more reason Stage B leans to Option 1 (owner decision D3).

### ADR-03 Codebase and delivery
- **New repo `Moroxthug/alimun-classroom`** (pnpm workspace, TypeScript `strict`, ESLint, Prettier, Vitest, Playwright):
  ```
  apps/classroom          Vite + React 18 + TS SPA (the classroom UI)
  packages/protocol       Zod schemas + types for every data message and DB JSON (single source of truth)
  packages/activities     activity components + pure reducers (no LiveKit imports: testable in isolation)
  packages/ui             design tokens + primitives (Alimun design lock)
  supabase/functions      Edge Functions (Deno): token, webhook, breakout, uploads, jobs
  workers/agent           (C8+) LiveKit Agents worker, Python
  infra/                  (C9) docker-compose, Ansible/Terraform for self-hosted LiveKit
  docs/                   ADRs, protocol reference, runbooks
  ```
- **Why a SPA and not Next.js:** the classroom is a client-heavy realtime app with no SEO; server rendering adds nothing. The SPA can later be mounted inside a Next.js site if `LAUNCH_PLAN.md` §9 happens.
- **Database migrations stay in `alimun-site/supabase/migrations/`** so there is one migration history for one database. Classroom migrations are named `…_classroom_<name>.sql`. The classroom repo keeps a generated copy of the types (`supabase gen types`).
- **Same origin:**
  - The classroom is served at `https://alimun.com/classroom/*` through a Vercel rewrite in `alimun-site/vercel.json` to the Cloudflare Pages deployment. The Supabase session in `localStorage` is shared, so there is no second login.
  - CSP and `Permissions-Policy` (camera, microphone, display-capture) are updated for LiveKit hosts.
  - Fallback if the rewrite misbehaves: `classroom.alimun.com` plus a one-time join ticket (60 s, single use) minted by the dashboard.
- **Entry points:** the dashboards' "Join class" buttons open `/classroom/s/<session_id>` when `cohorts.video_provider = 'alce'`; otherwise they keep using Daily. The flag can be flipped per cohort from admin.

### ADR-04 Authentication and authorisation
- Browser → `POST /functions/v1/classroom-token` with the Supabase JWT and `session_id`.
- **The function checks:**
  - the JWT is valid; the role comes from `app_metadata`;
  - the caller is the cohort's approved teacher, an admin, or a student with an `active` enrollment and an active subscription. These are the same rules and the same error codes as `api/join-session.js` (403, 402 `payment_required`, 425 `too_early`, 410 `ended`, 400 for cancelled/completed);
  - the join window is open (−15/+90 min, configurable per session);
  - the student is not banned from this session.
- **Side effects:** like `join-session` today, the teacher's first join sets `sessions.status = 'live'`, and the token call upserts `session_attendance.joined_at`. Webhooks then complete `left_at` and `duration_minutes`.
- **It mints a LiveKit access token:**
  - identity = `auth.uid()`;
  - name = display name;
  - metadata `{role, cohortId, sessionId}`;
  - TTL 2 h;
  - grants by role:

  | Grant | Teacher/admin | Student |
  |---|---|---|
  | `roomJoin` | ✓ | ✓ |
  | `canPublish` | ✓ (all sources) | ✓, sources limited to `camera`, `microphone` (screen share only when the teacher grants it, via a server-updated permission) |
  | `canPublishData` | ✓ | ✓ |
  | `canSubscribe` | ✓ | ✓ |
  | `roomAdmin` | ✓ | — |
  | `hidden` | for admin observers | — |
- Room names: `s_<session_id>` for the main room, `s_<session_id>_b<n>` for breakouts. Tokens for breakouts come from the same function, which checks the student's assignment.
- **Teacher actions that change others** (mute, remove, move, permissions) go through `classroom-admin` → LiveKit RoomService API, never client-to-client trust. Students' clients may *ask*; only the server *does*.
- LiveKit API key/secret live only in Supabase function secrets.

### ADR-05 Classroom state: teacher-authoritative, persisted, replayable
- **Problem:** data packets are fire-and-forget, so late joiners, reconnects and a teacher refresh lose state.
- **Design:**
  - **Snapshot of record** in Postgres: `classroom_state(session_id, version, state jsonb, updated_at)`. The teacher client is the only writer of `state`, through RPC `classroom_apply(session_id, expected_version, ops)`. The update is conditional on the version (optimistic concurrency), so two teacher tabs cannot fork state.
  - **Fast path:** after a successful apply, the teacher publishes `STATE_DELTA {version, ops}` on topic `state` (reliable). Clients apply deltas in version order. A gap (missing version) triggers a snapshot fetch (`select` with RLS: members of the session can read).
  - **Join/reconnect:** fetch snapshot → subscribe to deltas → drop deltas with `version ≤ snapshot.version`.
  - **Student input** (answers, keystrokes, hand raise) goes to the teacher on topic `input` (reliable, `destinationIdentities`), and is also persisted by the student via RPC `activity_respond` (idempotent on `response_id`) so the teacher can rebuild after a refresh. High-frequency signals (typing indicator) are lossy and not persisted.
- **Protocol rules** (`packages/protocol`):
  - Every message is `{v: 1, t: <type>, id: ulid, ts, from, body}`, validated with Zod at the edge of the client.
  - Unknown `v` or `t` is ignored and logged, never fatal.
  - Messages stay under 15 KB (LiveKit reliable limit), so larger content is referenced by `assetId` and loaded from Storage.
  - Every reducer is pure and unit-tested with out-of-order, duplicate and gap scenarios.
- Collaborative documents (shared notes, whiteboard) use **Yjs** over LiveKit data with periodic snapshots to Storage, not this channel.

### ADR-06 Talk-time telemetry from the SFU, not a browser dB threshold
- The concept code takes the loudest FFT bin over −44 dB. That fires on fans, keyboards and echo, and stops when the tab is throttled.
- LiveKit computes speaking state on the server from RTP audio levels, with no decoding, and pushes `ActiveSpeakersChanged` to clients.
- **The teacher client aggregates:**
  - per identity: speaking time (sum of intervals), turns (speaking starts after ≥ 1.5 s silence), longest silence;
  - for the teacher: own share (TTT).
- It flushes every 30 s to `talk_time(session_id, user_id, room, seconds, turns, updated_at)` via an upsert RPC. If the teacher drops, the gap is marked. In C8 the server-side agent becomes the source and the teacher aggregation becomes a fallback.
- **Display:**
  - balance bars per tile;
  - the class balance index (1 − Gini of student talk shares);
  - TTT %;
  - "no turn in 8 min" hints.
- Hints are suggestions only and are never shown to students unless the teacher enables a class-wide view (D4).

### ADR-07 Breakouts as separate rooms
- One LiveKit room per group (`s_<id>_b<n>`).
- **Assignment:** stored in `breakout_assignments`, pushed as `BREAKOUT_ASSIGN` on the main room. The client fetches a token for its group and switches rooms (keeps devices, ~1 s).
- **Teacher drop-in** uses a second connection (teacher can listen to one room while staying in main) or moves fully.
- **Server-driven actions:**
  - broadcast to all rooms;
  - timer end;
  - recall: `classroom-breakout` sends data to every room, then clients return.
- Activities can run per room, with state keyed by room.

### ADR-08 AI pipeline: batch first, live later
- **v1 post-class (C6), cheap and robust:**
  1. **Capture.** With consent, each student's browser records **their own microphone** with speech gating. Silero VAD runs in the browser (`@ricky0123/vad-web`), and only speech segments are encoded as Opus (MediaRecorder) with timestamps relative to class start. Segments upload during class in the background through presigned R2 URLs. Each segment is a separate speaker, so speaker diarization is not needed. The teacher's microphone is captured the same way for context.
  2. **Job queue in Postgres** (`ai_jobs`, `pgmq` or table plus `FOR UPDATE SKIP LOCKED`), driven by `pg_cron` every minute through `pg_net` → Edge Function `ai-worker`. Each invocation does one short unit of work, which fits Edge Function time limits.
  3. **Transcription:** Groq Whisper large-v3-turbo with word timestamps, language forced to the class language, verbatim prompt. About 5 min of speech per student × 30 = 2.5 h, roughly $0.10 per class.
  4. **Analysis:** the merged timeline is fed to an LLM with the lesson's target structures and vocabulary. Output is strict JSON: per-utterance findings `{type, span, original, correction, explanation_l1, confidence, target_ref}`, plus a class summary and draft notes. The current model is Groq `gpt-oss-120b` (already configured); the provider stays behind an interface. Every call is logged to `ai_usage`.
  5. **Teacher review queue:** approve, edit or reject each finding (bulk approve high-confidence ones). Only approved findings reach students.
- **Why the teacher gate exists:** STT models "fix" learner speech (they turn *si yo tendría* into *si yo tuviera*). That hides real errors and sometimes invents ones that were not made. Human review plus confidence thresholds is the mitigation, and a per-language evaluation set measures it.
- **v2 live (C8, needs Stage B compute):** a LiveKit Agents worker joins rooms as a hidden participant and subscribes per track:
  - streaming STT → live captions (teacher toggle);
  - tap a word to save it;
  - breakout alerts (silence > 35 s after a prompt, L1 overuse, target structure never used);
  - server-side talk time.
- **STT vendor:** chosen by a bake-off on 30 labelled learner clips per language, starting with English and German (the two live languages): Whisper turbo, Deepgram Nova-3, one more. The metrics are WER *and* error-preservation rate, not WER alone.

### ADR-09 Spaced repetition: FSRS
- `ts-fsrs` (MIT), computed server-side in an Edge Function or RPC.
- Cards come from approved findings, lesson vocabulary (`session_notes.vocabulary`, which already exists) and saved words. The student dashboard's localStorage-only streak and progress metrics move to the server at the same time.
- **Tables:**
  - `srs_cards(id, student_id, source, front jsonb, back jsonb, audio_path, fsrs_state jsonb, due_at)`
  - `srs_reviews(card_id, rating, reviewed_at, elapsed, scheduled)`
- Anki export (`.apkg` via a small generator) is an extra, not the main path.

### ADR-10 Activities and content
- **Activity** = typed JSON document `{type, version, content, settings}` validated by `packages/protocol`.
- **Renderers** are React components with three views: `teacher`, `student` and `results`.
- **First set:**
  - `slides` (PDF converted to page images on upload)
  - `cloze`
  - `mcq`
  - `poll`
  - `ordering`
  - `matching`
  - `image_prompt`
  - `speaking_prompt` (timer)
  - `media` (synced audio/video: shared play/pause/seek with drift correction ±250 ms)
  - `whiteboard` (**Excalidraw**, MIT, not tldraw, whose SDK needs a commercial licence in production)
- **Extension SDK** (`@alce/core-sdk` in the concept): every activity type registers `{schema, reducer, views, scoring}`. Third-party add-ons come later; the internal ones use the same interface from day one.
- **AI drafting:** generate activities from module objectives, level and vocabulary. This reuses the prompt tables from the old app's `generate-exercises` function. Drafts are always teacher-reviewed before use.

### ADR-11 Privacy, consent and minors
- **Lawful basis:**
  - live video is contract performance;
  - **speech capture and AI analysis are consent** (separate, revocable, per student, default off);
  - talk-time counts are legitimate interest, disclosed in the privacy notice.
- **Minors:** if Alimun accepts under-16s (D5), recording/AI features need a parent's consent. The digital-consent age varies by country (13–16; the strictest applies).
- **Retention:**
  - raw speech segments 30 days (or until the teacher review closes, whichever is later, capped at 60);
  - transcripts and findings 12 months;
  - talk-time and attendance with the student record.
  - A deletion job enforces this.
- **Paperwork:**
  - DPIA before C6 goes live (systematic processing of voice; possibly children);
  - sub-processor list updated (LiveKit, Cloudflare, Groq);
  - `gdpr.html` and `terms.html` text by the owner (`[COPY NEEDED]`).
- In-class indicator whenever capture is active for a participant.

### ADR-12 Mobile and resilience
- Targets: last two versions of Chrome, Safari (iOS 16+), Firefox and Edge; Android Chrome on a mid-range phone; 1.5 Mbps down / 0.5 Mbps up still usable.
- **Platform quirks:**
  - iOS: audio playback must start from a user gesture ("Tap to join audio"), and backgrounding the tab stops the camera.
  - All platforms: device switching, Bluetooth headsets.
- **Bandwidth budget per student:**
  - teacher video at the displayed size (≤ 720p/24);
  - at most 6 peer tiles at 180p/15, paged;
  - everyone else audio-only.
  - Gallery paging subscribes only to the visible page. Data saver mode: audio + activities only.
- **Reconnection:**
  - LiveKit resumes ICE automatically;
  - the app restores layout, activity state (ADR-05) and breakout membership;
  - if the WebSocket and UDP are blocked, TURN/TLS on 443.

### ADR-13 Design, branding and i18n
- Every user-facing string goes through i18n (EN, FR, ES, IT, DE, PT, AR with RTL, ZH; same locales as the site), and the product name comes from a single config constant.
- **Design tokens** live in `packages/ui` and come from the Alimun design lock. The concept's theming system (CSS variables, layout profiles) is kept. Institution themes are a later feature (C10).
- New semantic colours for telemetry states need owner approval (D2). Until then, states are shown with lime/ink/bone plus shape and text, never colour alone (accessibility).

### ADR-14 Quality gates
- **CI on every PR:**
  - typecheck, lint, unit tests (protocol and reducers ≥ 90% line coverage);
  - Playwright E2E against a local `livekit-server --dev` service container, using Chromium `--use-fake-device-for-media-stream` and fake audio WAV files. Each test runs **3–6 browser contexts in one class**: teacher plus students; join, activity round-trip, breakout move, reconnect;
  - bundle size budget; accessibility check (axe) on the main views.
- **Before each release that touches media:**
  - `lk load-test` with 40 participants (1 publisher at 720p, 39 at 180p, all audio) against staging, recording CPU, bandwidth, joins/sec and packet loss;
  - a manual run on iPhone Safari and an Android phone.
- **Observability:**
  - Sentry (free tier) for client errors;
  - LiveKit webhooks (`room_started/finished`, `participant_joined/left`, `track_published`) stored in `classroom_events`;
  - per-participant connection quality samples (every 30 s) for a "class health" view in admin.

---

## 4. Capacity and cost model

Assumptions for a full class of 30 students + 1 teacher, 60 minutes:
- **Participant-minutes:** 31 × 60 = 1,860.
- **Student downstream:** teacher 720p (~1.1 Mbps) + 6 visible 180p tiles (~0.6 Mbps) + audio (~0.2 Mbps) ≈ 1.9 Mbps, so 30 × 1.9 Mbps × 3,600 s ≈ 25.7 GB. The teacher downstream adds ~1 GB, giving **≈ 27 GB per class-hour**. Halved for a 15-student class.
- **AI v1:** ≈ $0.10 STT + ≈ $0.05–0.20 LLM ≈ **$0.15–0.30 per class**.

| Monthly volume | LiveKit Cloud Build (free) | LiveKit Cloud Ship | Self-host EU VPS (1 node) |
|---|---|---|---|
| 2 class-hours (full) | free | $50 | ~€10–20 |
| 40 class-hours (e.g. 5 cohorts × 2/week, avg 15 students) | over limit | $50 + bandwidth overage (~540 GB − 250 GB) × $0.12 ≈ **$85** | ~€15–30 |
| 300 class-hours | — | ≈ $50 + 3,800 GB × $0.12 ≈ **$510** | 1–2 nodes, ~€40–80 |

**Decision trigger (D3):** move to Stage B the first month projected usage exceeds the free plan. Choose self-host on OVHcloud or Hetzner if the owner accepts ~2 h/month of ops (handled by Claude through runbooks). Otherwise use LiveKit Cloud Ship. Phase C9 prepares self-hosting so the switch is a config change, not a project. Verify prices again at decision time (Hetzner raised prices twice in 2026).

---

## 5. Data model (new tables; all in `public`, RLS on, idempotent migrations)

```
cohorts            + video_provider text check in ('daily','alce') default 'daily'
classroom_rooms    (id, session_id → sessions, kind main|breakout, idx, livekit_room, status, started_at, ended_at)
classroom_events   (id, session_id, room, type, actor_id, subject_id, payload jsonb, at)   -- webhooks + teacher actions (audit)
classroom_state    (session_id pk, version int, state jsonb, updated_by, updated_at)
breakout_rounds    (id, session_id, created_by, started_at, ends_at, ended_at, config jsonb)
breakout_assignments (round_id, user_id, room_idx)  pk(round_id,user_id)
talk_time          (session_id, user_id, room, seconds, turns, longest_silence_s, updated_at) pk(session_id,user_id,room)
chat_messages      (id, session_id, room, sender_id, body text ≤ 2000, to_id null, at, deleted_at)
activities         (id, owner_id, language, level, module_ref, type, version, content jsonb, status draft|ready, created_at)
lesson_plans       (id, owner_id, cohort_id null, title, steps jsonb, status)          -- steps reference activities
activity_runs      (id, session_id, room, activity_id, started_at, locked_at, revealed_at, summary jsonb)
activity_responses (id ulid pk, run_id, user_id, response jsonb, score numeric null, at)   -- idempotent on id
consents           (user_id, kind speech_capture|ai_analysis|parental, granted bool, by_user_id, text_version, at)
speech_segments    (id, session_id, user_id, r2_key, start_ms, end_ms, bytes, uploaded_at, deleted_at)
ai_jobs            (id, kind, session_id, payload, status, attempts, run_after, error, created_at)
transcript_utts    (id, session_id, user_id, start_ms, end_ms, text, words jsonb, stt_model)
ai_findings        (id, session_id, user_id, utt_id, type, original, correction, explanation, confidence, status proposed|approved|edited|rejected, reviewed_by, reviewed_at)
srs_cards / srs_reviews  (ADR-09)
```
- **Who can see what:**
  - students read their own rows plus the session state of sessions they belong to;
  - teachers read rows for their cohorts;
  - admins read all.
- Writes happen through RPCs or Edge Functions with ownership checks; the RLS test file `supabase/tests/rls.sql` is extended for every table.
- Attendance: LiveKit `participant_joined/left` webhooks → `classroom-webhook` → `session_attendance` (same table Daily uses today), so admin, payouts and reports keep working unchanged. The webhook now also writes `duration_minutes` (sum of connected intervals, reconnects merged), which nothing fills today. Teacher presence goes to `classroom_events`; payouts can later use it instead of scheduled sessions.
- `sessions` gets `duration_min int default 60` so the join window and room lifetime stop being hard-coded.
- CI for migrations: the classroom repo's CI runs `alimun-site/supabase/tests/run-local.sh` (all migrations twice + `rls.sql`) in a Postgres service container. Today `rls.sql` is not run in CI anywhere.

---

## 6. Phases

Each phase runs in fresh cloud sessions on branch `classroom-cN-<slug>` in `alimun-classroom` (and `alimun-site` when it touches migrations or dashboards). It ends with a `docs/PROGRESS.md` entry in the classroom repo. **[OWNER]** marks what only the owner can do.

| Phase | Name | Depends on | Size |
|---|---|---|---|
| C0 | Foundations, repo, protocol, local media | — | M |
| C1 | Core classroom (Daily parity +) and pilot | C0 | L |
| C2 | Breakouts | C1 | M |
| C3 | Talk-time telemetry and teacher HUD | C1 | S |
| C4 | Synced activities engine + first activity set | C1 (C2 for per-room) | L |
| C5 | Lesson builder, library, AI drafting, run-of-show | C4 | M |
| C6 | Consent, speech capture, post-class AI | C3, C5; DPIA done | L |
| C7 | Review loop: mistakes notebook, FSRS, homework | C6 | M |
| C8 | Live AI (captions, breakout monitor) | C9 or paid plan | L |
| C9 | Stage B infrastructure (self-host ready + switch) | C1; trigger in §4 | M |
| C10 | Synthetic peer, pronunciation, LTI/SSO, white-label | C8 | L |

C2 and C3 can run in parallel; C9 can start any time after C1.

### C0 — Foundations
**Goal:** an empty but production-shaped classroom app in which two browsers on the local LiveKit server see and hear each other after authenticating against the real Alimun Supabase project.

**Scope**
1. **[OWNER]** Create repo `Moroxthug/alimun-classroom`, a LiveKit Cloud project (Build plan, region EU), a Cloudflare account (Pages + R2), and Supabase CLI access. Add secrets to the cloud environment: `LIVEKIT_URL`, `LIVEKIT_API_KEY`, `LIVEKIT_API_SECRET`, `SUPABASE_ACCESS_TOKEN`.
2. Scaffold the workspace layout of ADR-03, with strict TS, lint, format, Vitest, Playwright, and CI (GitHub Actions) including a `livekit/livekit-server` service container.
3. `packages/protocol`: envelope, version negotiation, first message types (`HELLO`, `STATE_DELTA`, `HAND`, `CHAT`, `REACTION`), Zod schemas, generated docs page.
4. Migration (in `alimun-site`): `cohorts.video_provider`, `classroom_rooms`, `classroom_events`, `classroom_state`; RLS + tests.
5. Edge Functions: `classroom-token` (ADR-04, full checks, unit tests with mocked Supabase), `classroom-webhook` (signature-verified, idempotent).
6. App: route `/classroom/s/:sessionId`, auth from the shared Supabase session, pre-join screen (device pickers, mic level meter, camera preview), connect, basic grid.
7. Cloudflare Pages deploy (preview per PR) and the `alimun.com/classroom` rewrite on an `alimun-site` branch, tested on a Vercel preview.

**Acceptance**
- CI green; a 3-context Playwright test (teacher + 2 students) joins, publishes fake media, and every client sees two remote tracks.
- A student without an active enrollment gets 403 with a clear message.
- A forged `user_metadata.role` gets nothing.
- Join outside the window is refused.
- On a preview URL, the owner signs in on alimun.com, opens a test session and joins without signing in again.

**Kickoff prompt**
> Read docs/classroom/PLAN.md in Moroxthug/alimun-site (ADR-01..05, ADR-14 and Phase C0) and CLAUDE.md there. Work in Moroxthug/alimun-classroom on branch classroom-c0-foundations, and in alimun-site on a branch only for the migration and the vercel.json rewrite. Start by listing what you need from me (accounts, secrets). Then scaffold the workspace, protocol package, Edge Functions and pre-join screen exactly as specified, with CI running a local livekit-server and a 3-browser Playwright test. Show me the migration before anything is applied to production.

### C1 — Core classroom and pilot
**Goal:** a teacher prefers this classroom to Daily for a real class.

**Scope**
1. Layouts: gallery (paged, active-speaker first), speaker, teacher-focus, plus the concept's **Linguistic Drill** layout (65/35 canvas split, filled with activities in C4). Responsive: phone portrait shows the teacher plus a strip.
2. Adaptive stream, simulcast layers (720p/360p/180p), dynacast, the bandwidth budget (ADR-12), data saver mode.
3. Teacher controls via `classroom-admin`: mute one/all, ask to unmute, stop video, remove, lock, waiting room and admit, spotlight (synced via state), screen share permission, end for all.
4. Hand raise with ordered queue, reactions, chat (persisted, teacher can delete, 2,000 chars, escaped).
5. Screen share (teacher; students on permission) including tab audio where the browser supports it.
6. Reconnection UX, "you are muted" detection, device hot-swap, iOS audio unlock.
7. Attendance from webhooks into `session_attendance`; admin "class health" list.
8. Dashboards (`alimun-site`): Join opens the classroom when `video_provider='alce'`; admin toggle per cohort.
9. Load test at 40 participants on LiveKit Cloud staging; results recorded in `docs/perf/c1.md`.
10. **Pilot:** one real or rehearsal class (owner + teacher + volunteers) on the free plan; a feedback form after class.

**Acceptance**
- E2E covers mute-all, remove, waiting room, hand queue, chat XSS attempt (rendered inert), reconnect after a network drop.
- A 40-participant load test with < 2% packet loss and join p95 < 3 s.
- iPhone Safari and Android Chrome manual checklist passes.
- The pilot class runs 60 minutes with no blocking issue; attendance rows match who joined.

**Kickoff prompt**
> Read docs/classroom/PLAN.md (ADR-04, ADR-06, ADR-12, ADR-14, Phase C1). Branch classroom-c1-core. Build the layouts, bandwidth budget, teacher controls through the classroom-admin Edge Function, hands/reactions/chat, screen share, reconnection and webhook attendance, each with Playwright coverage. Then wire the alimun-site dashboards behind cohorts.video_provider and run the 40-participant load test on staging. Report results before the pilot.

### C2 — Breakouts
**Scope**
- Create, assign (random, manual drag-and-drop, by level, avoid repeat pairs) and timer.
- Server broadcast, drop-in/out, recall, per-room activities hook.
- Room switch keeps devices; reconnect returns the student to the right room.
- Teacher overview with per-room speaking indicator.

**Acceptance:** E2E with 6 students in 3 rooms: assign, broadcast, timer end, recall, and a student refresh mid-breakout lands back in the right room.

**Kickoff prompt**
> Read docs/classroom/PLAN.md (ADR-07, Phase C2). Branch classroom-c2-breakouts. Implement breakout rounds as separate LiveKit rooms with the classroom-breakout Edge Function, the teacher assignment UI and the E2E scenario in the acceptance list.

### C3 — Talk-time telemetry
**Scope**
- ADR-06 aggregation, `talk_time` persistence, HUD (per-tile bars, TTT %, balance index, silent hints).
- Per-breakout totals.
- End-of-class participation summary on the teacher dashboard (`alimun-site`).

**Acceptance:**
- Unit tests on the aggregator with recorded speaker-event fixtures.
- In a scripted E2E where fake audio files speak for known durations, measured seconds are within ±10%.

**Kickoff prompt**
> Read docs/classroom/PLAN.md (ADR-06, Phase C3). Branch classroom-c3-telemetry. Build the talk-time aggregator from LiveKit active-speaker events, persistence, the teacher HUD, and the accuracy E2E with scripted fake audio.

### C4 — Synced activities
**Scope**
- ADR-05 full implementation (snapshot + deltas + responses).
- Activity SDK interface.
- Activities: slides, cloze, mcq, poll, ordering, matching, image prompt, speaking prompt with timer, synced media, whiteboard (Excalidraw + Yjs).
- Live results heat-map; reveal/lock; per-room runs in breakouts.
- Results saved to `activity_responses`, and a summary to `exercise_results` where it maps.

**Acceptance:**
- Reducer property tests: random reordering, duplication and gaps converge to the same state.
- E2E: a late joiner sees the current slide and their own earlier answer; a teacher refresh mid-activity restores everything.
- Media sync drift ≤ 250 ms across 3 clients.

**Kickoff prompt**
> Read docs/classroom/PLAN.md (ADR-05, ADR-10, Phase C4). Branch classroom-c4-activities. Implement the state protocol and the activity SDK first with property-based tests, then each activity type with teacher/student/results views and E2E coverage.

### C5 — Lesson builder and AI drafting
**Scope**
- Lesson plans with ordered steps; library filtered by language/level/module; duplicate and share between teachers; PDF → slides import.
- AI drafting of activities from objectives/vocabulary (Groq via the existing caps and `ai_usage`), always reviewed.
- Run-of-show bar in class (next/previous step, timers).

**Acceptance:** a teacher builds a 60-minute lesson in under 15 minutes from AI drafts and runs it end to end in a class without leaving the classroom.

**Kickoff prompt**
> Read docs/classroom/PLAN.md (ADR-10, Phase C5). Branch classroom-c5-lessons. Build the lesson-plan model, library, AI drafting with review, and the in-class run-of-show.

### C6 — Consent and post-class AI
**Pre-requisites [OWNER]:**
- decide D5 (minors) and D6 (retention);
- approve consent texts;
- DPIA signed;
- R2 bucket created; budget caps set (`AI_DAILY_BUDGET_USD`).

**Scope**
- Consent flows (student, parent where needed), in-class capture indicator.
- Browser VAD-gated Opus capture and background upload.
- `ai_jobs` queue and `ai-worker`; STT bake-off on the evaluation set first; transcription; findings extraction.
- Teacher review queue (in the teacher dashboard or the classroom app, decided at kickoff).
- Class summary and draft notes into the existing `session_notes` flow; retention job.

**Acceptance:**
- No capture without consent (E2E).
- On the evaluation set, approved-finding precision ≥ 85% at the default confidence threshold.
- Cost per 30-student class ≤ $0.40, logged in `ai_usage`.
- Deleting consent stops capture immediately and queues deletion.

**Kickoff prompt**
> Read docs/classroom/PLAN.md (ADR-08, ADR-11, Phase C6). Branch classroom-c6-ai-batch. Start with the evaluation set and STT bake-off and show me the numbers, then build consent, capture, the job queue, transcription, findings extraction and the teacher review queue.

### C7 — Review loop
**Scope**
- Student "my mistakes" notebook (audio clip, original → correction, explanation in the student's language).
- FSRS cards and a daily review in the student dashboard.
- Homework generated from the student's approved findings through the existing assignments flow.
- Weekly progress; Anki export.

**Acceptance:**
- An approved finding becomes a card the next day.
- FSRS scheduling unit tests against `ts-fsrs` reference cases.
- A student sees only their own items (RLS tests).

**Kickoff prompt**
> Read docs/classroom/PLAN.md (ADR-09, Phase C7). Branch classroom-c7-review. Build the mistakes notebook, FSRS review and homework-from-errors in the student dashboard, with RLS tests.

### C8 — Live AI
**Scope**
- LiveKit Agents worker (Python) on Stage B compute: per-track streaming STT for captions (teacher toggle, target language only).
- Tap a word to save to SRS.
- Breakout monitor alerts (`BREAKOUT_PEDAGOGICAL_STALL` and target-usage alerts as in the concept doc, with recommended actions).
- Server-side talk time.
- Per-minute cost metering.

**Acceptance:**
- Caption latency p95 < 1.5 s.
- Alerts fire in scripted scenarios with no more than 1 false alert per breakout round in the evaluation run.
- The worker crashing never affects the call.

**Kickoff prompt**
> Read docs/classroom/PLAN.md (ADR-08, Phase C8). Branch classroom-c8-live-ai. Build the LiveKit Agents worker for captions and breakout monitoring with scripted evaluation scenarios and cost metering.

### C9 — Stage B infrastructure
**Scope**
- `infra/`: docker-compose for `livekit-server` + Redis + Caddy (TLS), built-in TURN on 443/TLS and 3478/UDP, UDP 50000–60000; Ansible playbook; Prometheus + Grafana dashboard; log shipping.
- Health checks; backup of config.
- Runbooks: deploy, rotate keys, scale to two nodes, incident.
- Load test at 40 and 2×40 concurrent.
- Switch procedure from LiveKit Cloud (one URL + key change), with rollback.
- **[OWNER]** choose OVHcloud or Hetzner and create the server; Claude runs the playbook.

**Acceptance:**
- Load tests pass on the chosen VPS.
- Clients behind a UDP-blocking network connect through TURN/TLS.
- A failover drill completes inside 10 minutes using the runbook.

**Kickoff prompt**
> Read docs/classroom/PLAN.md (ADR-02, §4, Phase C9). Branch classroom-c9-infra. Prepare self-hosted LiveKit on an EU VPS with TURN/TLS, monitoring and runbooks, load-test it, and write the switch and rollback procedure. Ask me which provider before creating anything paid.

### C10 — Later modules
Each module gets its own spec first, appended to this file, before any code:
- Synthetic peer (agent with streaming TTS, CEFR-bounded, clearly labelled as AI to students).
- Pronunciation assessment (vendor API with phoneme scores; the formant chart only as an optional visual).
- LTI 1.3 / SSO for schools; institution themes and white-label; native wrappers if mobile web proves insufficient.

---

## 7. Changes made to the concept document, with reasons

| Concept | Change | Reason |
|---|---|---|
| Browser FFT peak > −44 dB for talk time | SFU active-speaker events (ADR-06) | Noise and echo false positives; background-tab throttling; no extra code needed on the media path |
| Stateless canvas broadcast | Teacher-authoritative state with Postgres snapshot (ADR-05) | Late joiners, reconnects and teacher refreshes lose state otherwise |
| FastAPI/Go state bus + Node + Python | Supabase Edge Functions + Postgres; Python only for the C8 agent | One less service to host and secure; free at pilot scale; no Vercel function cap |
| Egress room-composite "ghost listener" | Per-track agent (C8); batch per-student capture first (C6) | Composite audio loses who spoke; Egress is for recording and is heavy |
| Deepgram Nova-2 | Bake-off; Groq Whisper turbo as v1 | Nova-2 is outdated; cost; error-preservation matters more than WER |
| Anki/SM-2 | FSRS in-app, Anki export optional | Better scheduling; students stay in Alimun |
| Raw 48 kHz PCM in IndexedDB | VAD-gated Opus, uploaded during class | ~345 MB/student/hour; iOS storage limits; upload failures |
| Screen share banned | Fallback, permissioned | Teachers need ad-hoc content |
| Hetzner + coturn first | Local dev → LiveKit Cloud free → Stage B decision | Weeks of ops before any teacher feedback; LiveKit has built-in TURN |
| Formant visualiser in the core | C10, optional | Unreliable formant estimation on consumer mics; little evidence of learning gain |
| tldraw | Excalidraw | tldraw SDK needs a commercial licence in production |
| Dark theme, new accent colours | Alimun design lock unless approved | `CLAUDE.md` rule |

---

## 8. Risks

| Risk | Likelihood | Mitigation |
|---|---|---|
| Teachers fall back to Zoom/Daily because something basic is missing | High if C1 is rushed | C1 acceptance is parity plus a real pilot; Daily stays as a per-cohort fallback |
| Free-plan limits hit mid-class | Medium | Usage meter in admin; alert at 70%; Stage B prepared in C9 before the pilot grows |
| Mobile Safari audio/camera quirks | High | Device lab checklist every release; tap-to-join audio; data saver mode |
| STT hides or invents learner errors | High | Teacher review gate; evaluation set; confidence thresholds; never auto-grade |
| Privacy complaint (voice of minors) | Medium | Consent default off; DPIA; retention job; EU hosting in Stage B |
| Vendor price changes (LiveKit, Hetzner raised prices in 2026) | Medium | Same code on Cloud and self-host; switch is a config change |
| One person (owner) plus Claude as the whole team | High | Small phases with automated acceptance; runbooks; no service without monitoring |

---

## 9. Decisions the owner owes

| # | Decision | Recommendation | Needed by |
|---|---|---|---|
| D1 | Community class cap: keep 35 or lower to 30 | 30 (matches your stated typical maximum; better speaking time per student) | C1 |
| D2 | Telemetry colours and any classroom-specific UI additions to the design lock | Approve three semantic states, or keep lime/ink plus labels | C3 |
| D3 | Stage B host: self-host (OVHcloud or Hetzner) or LiveKit Cloud Ship | Self-host on OVHcloud or Hetzner EU once usage passes the free plan | before the pilot grows |
| D4 | Students see talk-time balance or only the teacher | Teacher only by default | C3 |
| D5 | Does Alimun accept students under 16? | Decide before C6; changes consent flows | C6 |
| D6 | Retention: speech 30 days, transcripts 12 months | As proposed | C6 |
| D7 | Product name and brand | Any time; the code uses one constant | C10 |
| D8 | Move `alimun-site` off Vercel Hobby (commercial-use terms) | Vercel Pro or Cloudflare Pages | soon, independent of the classroom |
