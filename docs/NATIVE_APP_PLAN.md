# The Alimun app, built natively

Owner, 16 Nov 2026, after trying the Android builds made from the website's screens (`mobile/`, Capacitor): "this version sucks mate. Which serious platform uses browser app? Please, create a multi step plan for the app and let's get started creating a full and complete app and stop with this browser bs." On the phone the pickers for the language and the time were broken, the app still showed class prices, and it felt like the website.

Decision: the learners' app is rebuilt as a real app. It replaces the plan of `docs/APP_PLAN.md` ("one codebase: the dashboard at /app becomes the app"). The website's `/app` stays for browsers. `mobile/` (the web shell) is kept only until the new app covers it, then removed; `mobile/admin/` (Alimun Admin, owner only) stays as it is.

## How it is built
- Flutter (Dart), in `native/`. One codebase compiled to a real Android app and, later, a real iPhone app: its own screens, lists, pickers, animations and gestures, drawn by the app at the phone's refresh rate, with no web page inside. Package `com.alimun.app`.
- Why Flutter and not Kotlin for Android plus Swift for iPhone: one set of screens for both phones instead of two; the animation and custom-drawing tools the design needs; ready parts for everything Alimun uses (Supabase, Daily live classes, audio in the background, local notifications, home-screen widgets, Google Play and App Store purchases through RevenueCat).
- The server does not change: the same Supabase database and row rules, the same `/api` functions, the same course files (`/data`, `/api/material`) and recordings. The app signs in with the same accounts.
- Design: `CLAUDE.md` and `docs/DASHBOARD_PLAN.md` apply unchanged (palette, Coolvetica Condensed and Satoshi, the drawing cast, the owner's loader, no black backgrounds, no chips, no numbered steps, no emojis). The drawings are the same SVG files, exported from `js/app/cast.js` and `cast3.js` by a script.
- Text: only in `js/translations.js`. A script writes the keys the app uses into `native/assets/i18n/<lang>.json` for the nine languages. The language is chosen in the app's settings and applied at once.
- Everything the learner has opened or downloaded is stored on the phone (a local database and files), so the app opens and works without a connection; what is done offline is sent when the connection is back.
- Checking: screens are rendered to pictures in the build machine (Flutter's own test renderer) and the logic has unit tests; the APK is built here. Nothing can be run on a phone from here: the owner's phone is the test after each step.

## Steps
Each step ends with an installable APK for the owner and is confirmed before the next.

1. Foundation. The project, the design system (colours, type, buttons, cards, fields, sheets, the loader, the drawings), movement between screens, the nine languages with the language setting, sign in, create an account, forgot password, the first set-up, the shell with the bottom bar and More, Home with the learner's real data, Settings (profile, language, password, sign out).
2. The course book. Units, lessons and pages turned by swipe, every block (text, examples, tables, dialogues, tips, readings), the explanation-language switch, the exercise engine with the 19 kinds and the character reactions, unit tests, progress saved, the free limit, downloads for offline, recordings.
3. Practice and flashcards. Practice rounds, quizzes, beat the clock, long sets, sets from the teacher; flashcard decks, spaced review, own cards.
4. Library and mock tests. Listening with the line being spoken marked, slower playback, playing with the screen locked and lock-screen controls; readings with tappable words; mock tests with timer, parts, marking and results.
5. Classes. The timetable and calendar, joining a live class (Daily's own phone SDK: video, chat, board), class notes and words, finding and joining a class, 1 on 1 bookings, homework (writing, speaking, hand-in, feedback), messages, progress, notifications.
6. The tutor. The written tutor with its board, past sessions and memory; the voice tutor and pronunciation checks; tutor time.
7. Only in the app. Review and class reminders, saving a word from any app through Share, the home-screen widget, shortcuts on the icon, the bottom bar the learner arranges, with animated icons.
8. The store version. The release key, version numbers, the signed bundle, Google Play purchases for the app plan and tutor minutes through RevenueCat (classes and packs: no prices, buttons or links in the app, owner 14 Nov), account deletion in the app, the listing, screenshots, data safety, the AI notices. Then iPhone from the same code (needs a Mac build machine and an Apple developer account).

## Owner's decisions carried over (14 Nov 2026)
- App-only features: reminders, listening with the screen locked, saving a word from Share, the home-screen widget.
- The bottom bar at first open: Home, Book, Practice, Flashcards; Classes takes the place of Flashcards for learners in a class; More is fifth; the learner can rearrange it.
- The Android app sells only the app plan and tutor minutes, through Google Play.
- The Google Play and RevenueCat accounts are opened later; they are needed for step 8.

## Status
- Step 1: started 16 Nov 2026.

### Step 1: foundation (built 16 Nov 2026, waiting for the owner's check)
- `native/` (Flutter 3.50, package `com.alimun.app`). Build: `node native/tool/export.js` (texts, drawings, fonts, countries from the site into `native/assets`), then `cd native && flutter build apk --release --target-platform android-arm64`. The Android SDK needs platform 36 and build-tools 36.
- `lib/theme.dart` (palette, type, motion), `lib/ui/parts.dart` (drawings with gentle movement, speech bubbles, the Alimun loader drawn natively, buttons that press, cards, fields, the app's own sheet for choosing from a list, tick rows, staggered arrival), `lib/i18n.dart` (nine languages, plural forms, the choice kept on the phone and applied at once), `lib/api.dart` (Supabase, Home's reads as in `js/app/data.js`, Home kept on the phone for an instant and offline start), `lib/screens/account.dart` (sign in, forgot password, create account, check your email, first set-up, teacher and admin note), `lib/screens/shell.dart` (top bar, floating bottom bar with springing icons, More sheet, back goes Home then leaves), `lib/screens/home.dart` (greeting, next class, buddy, today's plan, streak, focus topics, tutor time; pull to refresh), `lib/screens/settings.dart` (app language, about you, password, sign out).
- Sections of later steps open on their name and character only (the existing `app_soon_*` sentences), with no invented text.
- The person check: Supabase refuses sign-in, sign-up and password emails without a Cloudflare Turnstile token, and Turnstile only runs on a page of alimun.com. The app opens `app/check.html` out of sight in a small web view (`lib/captcha.dart`), takes the token and closes it; if Cloudflare asks for a tick it shows in an Alimun card. This is the only web view in the app.
- New texts: `app_st_applang_h`, `app_st_applang_p` (nine languages). Names of the six course languages are a table in `lib/i18n.dart` (the website gets them from the browser).
- Not in this step: prices and buying (step 8), the level test in the app, account deletion in the app, notifications.
- Checked: `flutter analyze` clean; nine screens rendered to pictures at phone size (`native/test/screens_test.dart`, `native/test/shots/`), right-to-left layout included; the release APK builds. Not checked: anything on a phone, and a real sign-in (the person check needs the phone and the live page).
