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
- `app/manifest.webmanifest` and icons in `images/app/` (the forest and gold mark on white): Alimun can be installed on the home screen and opens full screen at `/app`.
- `js/app/offline.js`: downloads per book or library shelf (both explanation languages the reader switches between, plus the recordings), removal, the size on the device, the offline note, the "Back online" note, and "Install the app" (the browser's prompt on Android and desktop, the Share steps on iPhone and iPad).
- `js/app/data.js`: Home's data saved per account so the app opens at once, then refreshed quietly (`quickStart`); the reads the material needs keep their last answer; the learner's writes go to an outbox when offline (`writeOrKeep`, `flush`), sent when the connection is back, after renewing the sign-in. Never for an admin viewing someone (`?as=`).
- Settings has a "Use Alimun offline" card with the learner's course book, goal book and library shelf; the book cover has "Download for offline".
- Texts `app_off_*` in nine languages.

Checked: a fake signed-in learner in headless Chromium (phone size): service worker active and in control, the English A1 book downloaded (304 files, 5.8 MB), the app opened offline in about 10 ms, the cover and a lesson rendered offline, a recording answered with 206 partial content offline, an answer given offline was kept and sent on reconnect, no console errors. 209 unit tests, smoke 16 of 16, `npm run build`.

## Step 2: speed and feel (built 12 Nov 2026, waiting for the owner's check)
- One script: `scripts/bundle-app.js` (part of `npm run build`, esbuild) joins and minifies the learners' app into `js/app/dist/app.js` (580 kB, 153 kB gzipped, instead of 30 files of 1,074 kB, 267 kB gzipped). The tutor (`tutor`), the live classroom and board (`classroom`) and the payment window (`pay`) are separate files loaded the first time they are opened, and fetched ahead when the device is idle on a good connection (`js/app/lazy.js`). The build writes the version into `app/index.html` and `app-sw.js`; commit the results. Teacher and admin pages still load the source files.
- `js/app/feel.js`: section changes use View Transitions where the browser has them (no 150 ms fade wait); a light vibration on right answers and a short double one on wrong answers (Android; not in mock tests); the recordings of the lesson page on screen and of the next one are fetched while the learner reads, and the service worker plays them from the device. Page turns by swipe already existed in the reader.
- Online-only sections (tutor, messages, classes, progress, plans and withdrawal) show "This needs a connection" with links to the book, practice and library when the device is offline, and draw themselves again when the connection is back.
- Download buttons on each library shelf and mock test; Settings, "Use Alimun offline", lists the learner's mock tests too and has "Download all".
- Homework: the list is kept for offline use; homework handed in offline is kept on the device ("Handed in on this device…") and handed in when the connection is back.
- Speed budget: `tests/smoke/app-speed.spec.js` (CI job "App speed budget") fails if the app is not ready within one second on a repeat visit with the processor slowed four times; the build fails if the main script passes 175 kB gzipped.

## The free limit (built 12 Nov 2026, with step 2)
- What is free (`api/_lib/free-limit.js`): the first 3 units of every course book, the first 2 texts of every library shelf, the first 3 exercise kinds of every "Every kind of exercise" set, the first paper of every mock test, flashcards of the words met there. Everything else needs an active plan (app, open class, level pack, exam: `planActive`), or an approved teacher or an admin.
- At deploy time `scripts/split-material.js` cuts the public files in `/data` to the free part (locked parts keep their title with `locked: true`) and keeps the complete files, gzipped, in `private/material` (25 MB), which is never served as files (vercel.json answers 404 for `/private`). The recording plans in `/data/audio` keep only the free parts' lines.
- `api/material.js` (`GET /api/material?path=books/English-A1.en.json`, Supabase JWT) gives the complete file to those with full access (401 signed out, 403 `plan_required`, 404 `not_locked` when nothing in the file is locked). The tutor and the mock-test marking read the complete files on the server; marking a paid paper refuses free accounts.
- In the app, `AlimunData.material()` loads the complete file for learners with a plan and keeps it on the device ("alimun-material"), so it opens at once and offline; free accounts read the public file. Locked units, texts and papers show "Comes with a plan" and link to Plans. Downloads follow the same rule; when a plan ends the complete files are removed from the device and the downloads go back to the free part; a new plan completes the downloads quietly.
- Not covered: the recordings themselves (Supabase Storage `course-audio`) stay public by file name; without the paid plans their names are not listed anywhere public. Moving them to a private bucket with signed links is a later choice for the owner.

## Step 3: store apps

Started 13 Nov 2026 (owner: "an app that is not the browser version but an app with its own storage"). Android first, in `mobile/` (Capacitor 7):
- The app's files are inside the app: `mobile/build-www.js` copies the bundled app page, scripts, styles, fonts, the photos it uses and the Supabase library (checked against the page's integrity) into `mobile/www`, and Capacitor packages them. The app runs at https://alimun.com/app, so sign-in, /api, the database and payments work as on the website; `mobile/android/app/src/main/java/com/alimun/app/AlimunClient.java` answers each request from the app or the network. It opens with no connection, even the first time. A change to the app's screens needs a new build (`cd mobile && npm run apk` after `npm run build` at the root); course material and data come fresh from the server.
- Downloads and the complete course material are files in the app's own storage (`js/app/device.js`, Filesystem plugin, `files/offline/...`), not browser caches; the native layer serves downloaded course files when the phone is offline and downloaded recordings always (with byte ranges). No service worker in the app. The free limit applies the same way.
- Haptics through the phone (Haptics plugin); the install card is hidden in the app; icons and launch screen are the logo on white (`mobile/icons.py`).
- Test builds are debug-signed APKs. Before Google Play: a release key, Play Billing for the app plan and tutor minutes (through RevenueCat), and iOS.
- Capacitor shell loading the same `/app`, with the owner's loader as the splash screen, the icon on white, deep links from emails, and native storage so iPhone does not clear downloads.
- Push notifications for class reminders, homework and flashcard reviews (the bell's notifications already exist).
- Store purchases through RevenueCat for the app subscription and tutor minutes only, as decided on 11 Nov 2026 (`docs/PRICING_ENGINE_SPEC.md`). Classes and packs stay on the website, within what each store's rules allow; check the current App Review Guidelines before submitting.
- Store listings, screenshots, privacy labels and the EU AI Act notices for the AI features.

## Step 4: app-only features (owner to choose later)
Ideas, none built: a home-screen widget with the word of the day and the flashcards due; listening library audio that keeps playing with the screen locked, with lock-screen controls; saving a word to Alimun flashcards from any app through the share sheet; pointing the camera at a sign or menu to add its words to flashcards; review reminders at the learner's chosen time; offline speaking practice with on-device speech recognition; a watch app for flashcards.

## Owner's decisions, 12 Nov 2026
- "everyone can download, free download has limited access, like 2/3 units and a few exercises". Every account can download. Learners without a paid plan get the first units of the book and a few exercises; paying learners get everything. Settled with the owner on 12 Nov: the first 3 units; flashcards, the first exercise set of each practice book (built as its first 3 exercise kinds, since each practice book is one set of 19 kinds), the first 2 texts of each library shelf and the first section of each mock test are free; any active plan unlocks everything.
- Owner, 12 Nov: "yes, offline and online both limited for free users". The same limit applies in the browser and in downloads. Today a free learner can read the whole book online (the reader, library and practice check no plan), so the paid units must be served only to signed-in paying learners (an API check), not as public files.
- Step 2 starts in a new conversation.
- Owner, 12 Nov: "logo should always be on white bg, except for dark mode, where we will later plan better colour". The app icons and the install screen background are white. A dark-mode colour is to be planned later.

## Decisions for the owner
- When to start step 3 (Apple and Google developer accounts are needed: Apple $99 a year, Google $25 once).
