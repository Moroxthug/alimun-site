# Matching and turning free learners into paying ones

Owner, 12 Nov 2026: "we have enough english students. we need to first see what each ones time zone is, what is their
english level and what is their focus. then ... build something on admin page to group together all people with same
compatibility, create a system where i could see all of this without having to ask you, an advanced matching engine,
and then find out how to convert these free tiers to paid."

## What was built (12 Nov 2026)

**Admin → Matching** (`/app/admin#/matching`), worked out fresh each time the page opens, nothing saved or sent:

- Who you have: learners by level, focus, region and time zone (with the time there now), how many told us their class
  times, how many said yes to news and offers, how many pay. Old test accounts (no level test, no time zone) and staff
  are left out unless ticked.
- When they can start a class: a heat map, weekday by hour, in any time zone, filtered by level; hovering a number names
  the learners.
- Groups they could form: one level and one product each (packs meet three times a week, the open class once), at the
  time that suits most of them, shown in the zone most of them live in, with each member's own local time, how many more
  are needed to open, how well they match each other, how sure their times are, and whether a teacher offered that time.
  "Make this a room" fills in Admin → Classes → Rooms → Create a room (product, level, days, time, zone, the next start
  date); the teacher is chosen there. "Copy their emails" copies the addresses and says how many said yes to offers.
- Not in a group yet, with the reason and their closest match. Closest to buying, with the reasons. Every learner, with
  search and filters. Each learner's page: everything known and their ten best matches with the reasons.

**Engine** `js/match.js` (tests: `tests/unit/match.test.js`).

- A learner's week: the half hours (UTC) at which a 60-minute class can start for them. From the days and times they
  gave in Settings; from their days with the usual hours; or, when they gave nothing, weekday evenings 18:00 to 21:00
  and weekend mornings 10:00 to 13:00 in their own zone, marked "assumed". A zone of `UTC` is the sign-up default and
  counts as not known. Zones come from the browser's own time-zone data, so rule changes are followed (British Columbia
  is on UTC-7 all year from November 2026).
- The level is the level test's when there is one, otherwise the level they chose.
- Compatibility of two learners out of 100: level 30 (same 1, one apart 0.5), shared class times 35 (weighted by how sure
  their times are), focus 20 (same 1, related 0.6), way of learning 15 (welcome poll: hours a week, native or home
  teacher, explanations in which language, deadline). No class time in common caps it at 45.
- Groups: per level and product, the time (the packs' usual day patterns at every half hour in each member's zone, and
  every time a teacher offered for that level) with the most learners weighted by how sure their times are, counting
  learners who could join it later; then the next. A learner still alone joins a level pack at their level if they
  asked for exams, or a group of the same product one level away, where the time suits and there is room.
- Product: exams and study at B1 and above → exam pack; for pleasure, or only classes and conversation wanted without a
  work, moving or exam goal → open class; otherwise the level pack. Room sizes as `api/_lib/rooms.js`.
- Readiness to buy out of 100, from what they did: active in the last 3 days 20, 7 days 15, 30 days 8; days they came
  back 3 each up to 15; tutor 10; exercises 5; poll says classes or conversation would help 10; time each week up to 5;
  deadline 3 months 10, 6 months 6, a year 3; asked to be told when a room opens 10; looked at a price 15. 55 and over
  "ready", 30 and over "warming up".

**Database**: `public.admin_matching()` (`supabase/migrations/202611122000_admin_matching.sql`), admins only, read only.

## The English learners on 12 Nov 2026

20 English accounts: the owner's, two old test accounts, one learner in an old class, and 16 to match (one of them has no
time zone). 11 are A1, one A2, one B1, three B2. Ten live in Europe (Paris, Istanbul, Berlin, Madrid, Budapest), four in
the Americas (Vancouver, New York, Lima), two in Asia (Karachi, Taipei). Focus: moving abroad 6, work 4, foundations 4,
exams 2, pleasure 1.

Groups the engine finds: European A1 level pack Monday, Tuesday and Thursday 18:00 Berlin time (5, with an A2 learner
one level apart); B2 level pack the same days 20:00 Istanbul time, 18:00 in Paris (3, with an exam learner); North
American A1 level pack 18:00 Vancouver time (3). None reaches the pack minimum of 8.

What stands between them and paying:

1. **There is nothing to buy yet.** No rooms exist, so no level pack, open class, trial or help class can be bought
   (only the app and voice minutes). Nobody has looked at a price or asked to be told about a room.
2. **We do not know when they can learn.** Only one of the 16 gave days and times; every group is a guess until they do.
3. **No teacher has given times.** One English teacher is approved; no room availability is entered.
4. **Only 4 of them said yes to news and offers**, so offers by email reach few; the dashboard reaches all of them.
5. **The pack minimum (8) is above any group we have.**

## How to convert them (proposal, for the owner to decide)

In this order, each step using what is already built:

1. **Ask for their class times, in the dashboard.** A dashboard banner (Admin → Campaigns, banners) to every English
   learner: "Tell us when you can take classes and we will place you in a class at your level", linking to Settings. A
   short service email to all 16 asking the same is about their own learning, not an offer; whether to send it to those
   who did not say yes to news is the owner's call. Then reopen Matching: the groups become real.
2. **Get the English teacher's times** on their Your availability page for A1 and B2, European evenings first. Groups
   at a teacher's time are preferred and named.
3. **Open the European A1 room now.** "Make this a room" on that group: level pack, A1, Monday, Tuesday and Thursday 18:00
   Berlin time, start 7 December. It is published 21 days before (16 November) and needs 8 reservations 10 days before
   (27 November). Publishing needs a teacher and a substitute, and only one English teacher is approved: a second
   English teacher (or a substitute) has to be approved first. Reserving costs nothing until the room opens (card saved, founding price kept), which is the easiest
   yes to ask for. Five fit today; new A1 sign-ups in Europe fill the rest.
4. **Write to the "ready" and "warming up" learners in that group first**, one by one (Closest to buying shows who and
   why): their level, their focus, the time in their own zone, and the founding price.
5. **The trial class and the help class** go on sale with the room: the trial is the low-risk first payment for those
   who will not reserve a pack yet; the help class (minimum 3) can run for small groups like the B2 and North American
   ones while they grow.
6. **B2 and North America**: learners there ask to be told when a room opens at their level ("Plans and prices") and are
   emailed automatically when one is published. Open those rooms when Matching shows 8.

Decisions for the owner: the banner and email wording (step 1); whether the first founding rooms may open below 8
(today `min_learners` is 8 for packs and 12 for the open class, `api/_lib/rooms.js`); whether to create the European A1
room for 7 December now.
