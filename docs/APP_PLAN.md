# The Alimun app

Owner, 12 Nov 2026: "we need to create the app, so not a browser app but an app that could work even offline for the material like course book, exercises etc. user can download all data to use it offline" and "the app needs to be amazing, a wonderful app that people will praise for its speed, colours, design and reactiveness. also, we could then think of exclusive features only available on app, we could decide later."

## Approach
One codebase: the learners' dashboard at `/app` becomes the app. It is made installable and offline-capable first (works on the web, Android and desktop straight away), then wrapped with Capacitor for the App Store and Google Play. No separate Swift or Kotlin app: every screen would have to be built and kept up twice. The store apps add what a browser cannot do well (reliable storage on iPhone, push notifications, store purchases through RevenueCat, which `api/webhooks/revenuecat.js` already handles, background audio, widgets).

The design rules in `CLAUDE.md` and `docs/DASHBOARD_PLAN.md` apply unchanged: the dashboard palette and drawing cast, the owner's loader, no new colours or fonts. Each step is confirmed by the owner before the next.

## What works offline and what does not
Offline: the course books (with the explanation switch), the listening and reading library, their recordings, every exercise kind (marked on the device by `js/app/exercises.js`), unit tests, practice and flashcard reviews, and Home as it was at the last visit. Answers, scores, practice memory and flashcard reviews made offline are kept in an outbox and sent in order when the connection is back.

Online only: live classes (Daily), the AI tutor and speaking practice, pronunciation checks, messages, homework hand-in (to be queued later), payments and settings changes. These should say plainly that they need a connection.

## Step 1: offline foundation (built 12 Nov 2026, waiting for the owner's check)
- `app-sw.js`, the service worker, scope `/app` only (teacher and admin pages and the public site are not touched). The app's files are served from the device and refreshed in the background, so a second open takes about a quarter of a second instead of almost two. Course data is network-first with the saved copy as fallback. Recordings come from the downloads with byte-range support for audio players. The API, database, auth, Stripe and Daily are never cached. Bump `VERSION` in it to drop cached app files after a breaking change. Emergency off switch: replace `app-sw.js` with one whose `activate` deletes the `alimun-shell-*` and `alimun-data-*` caches and calls `self.registration.unregister()`; browsers fetch the worker without cache, so it takes effect on the next visit.
- `app/manifest.webmanifest` and icons in `images/app/` (the forest and gold mark on lime): Alimun can be installed on the home screen and opens full screen at `/app`.
- `js/app/offline.js`: downloads per book or library shelf (both explanation languages the reader switches between, plus the recordings), removal, the size on the device, the offline note, the "Back online" note, and "Install the app" (the browser's prompt on Android and desktop, the Share steps on iPhone and iPad).
- `js/app/data.js`: Home's data saved per account so the app opens at once, then refreshed quietly (`quickStart`); the reads the material needs keep their last answer; the learner's writes go to an outbox when offline (`writeOrKeep`, `flush`), sent when the connection is back, after renewing the sign-in. Never for an admin viewing someone (`?as=`).
- Settings has a "Use Alimun offline" card with the learner's course book, goal book and library shelf; the book cover has "Download for offline".
- Texts `app_off_*` in nine languages.

Checked: a fake signed-in learner in headless Chromium (phone size): service worker active and in control, the English A1 book downloaded (304 files, 5.8 MB), the app opened offline in about 10 ms, the cover and a lesson rendered offline, a recording answered with 206 partial content offline, an answer given offline was kept and sent on reconnect, no console errors. 209 unit tests, smoke 16 of 16, `npm run build`.

## Step 2: speed and feel
- One bundled, minified script for the app at build time instead of about 35 separate files; the tutor, classroom and payment code loaded only when opened.
- The next lesson page and its recordings prefetched while the learner reads the current one.
- Page turns with swipe gestures and the View Transitions API; light haptics on right and wrong answers where the device supports them.
- Every online-only section says it needs a connection when offline, instead of an error.
- Download buttons on library shelves and mock tests; "Download all" for the learner's course; homework written offline and handed in later.
- A performance budget checked in CI: the app interactive in under one second on a mid-range phone on a repeat visit.

## Step 3: store apps
- Capacitor shell loading the same `/app`, with the owner's loader as the splash screen, the lime icon, deep links from emails, and native storage so iPhone does not clear downloads.
- Push notifications for class reminders, homework and flashcard reviews (the bell's notifications already exist).
- Store purchases through RevenueCat for the app subscription and tutor minutes only, as decided on 11 Nov 2026 (`docs/PRICING_ENGINE_SPEC.md`). Classes and packs stay on the website, within what each store's rules allow; check the current App Review Guidelines before submitting.
- Store listings, screenshots, privacy labels and the EU AI Act notices for the AI features.

## Step 4: app-only features (owner to choose later)
Ideas, none built: a home-screen widget with the word of the day and the flashcards due; listening library audio that keeps playing with the screen locked, with lock-screen controls; saving a word to Alimun flashcards from any app through the share sheet; pointing the camera at a sign or menu to add its words to flashcards; review reminders at the learner's chosen time; offline speaking practice with on-device speech recognition; a watch app for flashcards.

## Owner's decisions, 12 Nov 2026
- "everyone can download, free download has limited access, like 2/3 units and a few exercises". Every account can download. Learners without a paid plan get the first two or three units of the book and a few exercises; paying learners get everything. Built in its own step, before or with step 2. The exact number of units and which exercises are free are still to be settled.
- Today a free learner can read the whole book online (the reader, library and practice check no plan). If only the download were limited, the limit would mean little. The next conversation should confirm whether the same limit applies online too. A real limit also needs the paid units served only to signed-in paying learners (an API check), not as public files.
- Step 2 starts in a new conversation.

## Decisions for the owner
- The app icon (the mark in forest and gold on lime, `images/app/icon-512.png`).
- When to start step 3 (Apple and Google developer accounts are needed: Apple $99 a year, Google $25 once).
