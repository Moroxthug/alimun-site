# Alimun launch: price list and operating spec

Status: agreed with the owner in the planning session of October–November 2026, not yet built. It replaces the earlier tier pricing (Community / Focused / Intensive / Private) and the planning drafts in `docs/research/reports/`. Research and models behind it: `docs/research/reports/Alimun market and pricing research.md`, `docs/research/reports/Alimun learner segments and pricing tactics.md`, `docs/research/reports/Alimun teacher contracting by country.md`, `docs/research/reports/Alimun financial stress test.md` and `docs/research/reports/alimun_finmodel.py`. Not legal or tax advice; the open items at the end need advisers.

## 1. Scope at launch

- Languages: English and German (teachers in the pipeline teach both).
- Region: the Europe and North Africa time zone (the EU, Morocco, Tunisia, Egypt, Turkey). The app is sold everywhere; classes run in this region first.
- Levels: English A1 to B2 with an IELTS exam pack; German A1 to B1 with a Goethe/telc B1 exam pack.
- Products: the free app, the app subscription, the once-a-week open class, level packs and exam packs, plus the 30-minute help class, voice-minute packs and closed rooms for companies. Nothing else at launch: private rooms, one-to-one lessons, five-day classes and AI-moderated practice rooms wait until demand data asks for them.

## 2. The ladder

| Step | What the learner gets | Commitment |
|---|---|---|
| Free app | placement test, some units and exercises, 10 voice minutes once | none |
| App | every unit, the full course book, exercises and games, 60 voice minutes a month | monthly or yearly |
| Open class | one live class a week in a room of up to 20, by level band, app included | monthly, cancel any time |
| Level pack | three live classes a week for 12 weeks in a fixed room, app included, one help class | 12 weeks, paid monthly or upfront |
| Exam pack | a level pack ending with exam preparation and three mock exams marked by the teacher | 12 weeks, paid monthly or upfront |

Each step costs less per class the more the learner commits. Money already paid for the current month is credited when a learner moves up.

## 3. Price list (Band A: EU price including VAT)

| Product | List price | Founding price |
|---|---|---|
| App | €7.99 a month or €79.99 a year | same |
| Trial class (one per person, credited to the first month) | €3.50 | same |
| Open class, English | €24 a month (4 classes) | same |
| Open class, German | €29 a month | same |
| Level pack, English | €72 a month × 3, or €199 upfront | €64 a month, or €179 upfront |
| Intensive pack, English (five classes a week, Monday to Friday; added 14 Nov 2026) | €119 a month × 3, or €329 upfront | €109 a month, or €299 upfront |
| Level pack, German | €89 a month × 3, or €249 upfront | €82 a month, or €229 upfront |
| Exam pack, English (IELTS) | €89 a month × 3, or €249 upfront | €79 a month, or €219 upfront |
| Exam pack, German (Goethe/telc B1) | €107 a month × 3, or €299 upfront | €96 a month, or €269 upfront |
| Help class, 30 minutes (one per pack included) | €5 | same |
| Voice minutes, subscribers only, valid 12 months | 30 minutes €2.99; 120 minutes €8.99 | same |
| Closed room for a company, up to 12, 12-week minimum | €79 (English) or €95 (German) per learner a month, excluding VAT, invoiced | — |

Founding prices apply to the first 500 paying learners who join before 1 January 2027 (joining means saving a card for a room or buying before that date, even if the room starts and is charged later; owner, 11 Nov 2026) (owner, 11 Nov 2026). Each keeps the founding price for 12 months from their first payment, or until the end of the path they are on at that point (for example A1 to B1), whichever is later but never more than 18 months, as long as they have no gap of more than one month; then the list price applies, announced 30 days ahead. The founding price is shown as its own price, never as a crossed-out list price. (CFO, 11 Nov 2026: a known, capped cost instead of a permanent one.)

Voice minutes included: free 10 once; app 60 a month (40 in Band B); open class 40; level and exam packs 120. Plan minutes reset monthly; bought minutes last 12 months and are used after plan minutes.

Exam packs prepare for the exam; Alimun does not issue the certificate. Wording everywhere: "Preparation for the Goethe-Zertifikat B1 / IELTS. You take the exam at an official test centre; the exam fee is not included." Alimun's own "certificate of completion, level assessed by Alimun" says exactly that.

**Tax display (owner, 11 Nov 2026):** prices include tax everywhere except Canada and the US, where tax is added at checkout as customers there expect. Stripe Tax calculates and collects it; Alimun still registers (EU non-Union OSS, Canada GST/HST) and files, through the accountant or a filing service.

**Stores (owner, 11 Nov 2026):** the app is sold in the App Store and Google Play too, priced per country in each store (Apple and Google are the seller of record and handle tax; 15% commission under their small-business programmes). Store purchases feed the same access table as web purchases. Classes and packs are sold on the website only.

**Currencies:** EUR, MAD, CAD and USD at launch, plus GBP and others as needed; each is a row in the price book.

## 4. Country bands

| Band | Countries | App | Everything else |
|---|---|---|---|
| A | EU and EEA (one price everywhere, VAT included), UK, Switzerland, US, Canada, Australia, the Gulf | 100% | 100% |
| B | every other country (Morocco, Tunisia, Algeria, Egypt, Turkey, Latin America, India and the rest) | 65% | 85% |

Voice-minute packs cost the same everywhere. A country missing from the table is Band A. The band table lists every country code in `supabase/` (see section 9).

Local prices at the 23 October 2026 rates (MAD 11.0, CAD 1.5665, USD 1.1193), to re-run on launch day:

| Product | Canada (CAD, before tax) | Morocco (MAD, Band B) | Band B in USD |
|---|---|---|---|
| App, monthly / yearly | 12.99 / 124.99 | 59 / 569 | 5.99 / 58.99 |
| Trial class | 5.99 | 29 | 3.99 |
| Open class, English / German | 39.99 / 44.99 | 249 / 289 | 22.99 / 27.99 |
| Level pack English, monthly / upfront | 114.99 / 309.99 | 769 / 2,119 | 68.99 / 189 |
| Level pack German, monthly / upfront | 139.99 / 389.99 | 889 / 2,499 | 84.99 / 234 |
| Exam pack English, monthly / upfront | 139.99 / 389.99 | 949 / 2,659 | 84.99 / 234 |
| Exam pack German, monthly / upfront | 169.99 / 469.99 | 1,069 / 2,999 | 99 / 284 |
| Founding level pack English, monthly / upfront | 99.99 / 279.99 | 679 / 1,899 | 60.99 / 169 |
| Founding level pack German, monthly / upfront | 129.99 / 359.99 | 819 / 2,289 | 78.99 / 219 |
| Founding exam pack English / German, upfront | 344.99 / 419.99 | 2,339 / 2,699 | 209 / 254 |
| Help class | 7.99 | 49 | 4.99 |
| Voice minutes 30 / 120 | 4.99 / 14.99 | 29 / 99 | 3.99 / 10.99 |

Morocco (owner, 11 Nov 2026): Morocco charges 20% VAT on online services sold by foreign companies (since 11 June 2026), so the MAD prices above include it and were raised for English (about 14%) and German (about 7%); the app, trial, help class and voice minutes are unchanged. Founding exam packs paid monthly: 849 MAD (English) and 969 MAD (German). Alimun registers on the DGI platform before its first Moroccan sale. Details: `docs/research/reports/Alimun Morocco launch deep dive.md`. The Moroccan approach is to be re-evaluated with the owner.

Turkey and Egypt are charged in EUR and USD respectively (inflation); Morocco in MAD; Algeria in EUR or USD, with the warning that most Algerian cards cannot pay abroad.

## 5. Margins

Share of revenue left after teacher pay, video, card fees, VAT (or a 5% provision for local taxes outside the EU), 5% for rewards, the app and its voice minutes, the included help class, and about €5.25 per learner a month for acquisition and support. Rooms open at 8 and are capped at 12 at launch.

| Product | 8 learners | 12 learners |
|---|---|---|
| Level pack English, list / founding | 38% / 31% | 46% / 40% |
| Level pack German, list / founding | 36% / 30% | 46% / 41% |
| Exam pack English, list / founding | 43% / 35% | 49% / 42% |
| Exam pack German, list / founding | 39% / 32% | 47% / 41% |
| Open class (12 / 15 / 20 learners) | 37% / 41% / 46% | |
| Company room (8 / 12 learners) | 59–63% | 66–69% |
| App subscription | about 80% at typical use, about 65% if every minute is used | |

Band B gives the same margins within a point. The founding prices are thinner on purpose and limited to the launch window. Full model and break-even: `docs/research/reports/Alimun financial stress test.md` (base case: break-even at roughly 1,000 to 1,200 paying customers, with about €30,000 to €50,000 of cash needed to get there).

## 6. Rules

- Paying monthly or upfront: monthly is the standard price; upfront saves about 7–8%. Monthly payers can stop before the next month and leave the room; it is a subscription for the pack's length, not credit.
- Withdrawal: EU consumers can withdraw within 14 days and pay only for classes already taken, if they asked for classes to start early. After that no refund, but a pause or a move to the next start date.
- Missed class: join the same lesson in another room at the same level that week, or a make-up seat in an open class. Unused open-class classes roll over one month.
- End of each pack: a level check decides the next pack. A learner who does not pass may repeat the pack once at 50%.
- Exam pack guarantee: a learner who attends at least 90% of classes and does not pass gets the next 4 weeks free.
- Rewards are paid in seats, never cash: a referral gives the referrer one free open-class month and the friend a free trial class, once the friend pays; full attendance over a pack gives one free help class. Rewards are given only to a card, phone and device different from the referrer's.
- Company rooms: paid upfront or within 30 days of invoice, never classes taught on credit; no single company above about 25% of revenue.
- Exam guarantee reserve: 5% of exam-pack revenue set aside until the fail rate among guaranteed learners is known.
- Most Alimun pays to win one customer: €15 (app), €30 (open class), €60 (level or exam pack); a channel above that is stopped or fixed.
- Learners under 18 are not accepted at launch.
- Never: fake timers, invented counts, crossed-out prices nobody paid, pre-ticked extras, guilt wording on the cancel button. Seat counts come from the database.

## 7. Classes and teachers

**Rooms:** level and exam packs open at 8 and close at 12 at launch (15 once teachers and the lesson structure are proven). Open classes open at 12 and close at 20, with breakout groups of 2–3. Help classes: 3 to 8 learners, 30 minutes.

**Week:** packs meet Monday, Tuesday and Thursday; Friday to Sunday the app and tutor review that week's units with exercises and quick checks. Two timetables per level (for example 19:00 and a morning or Saturday option). Quiz results reach the teacher before Monday; the teacher re-teaches what most of the room missed. Learners flagged on a unit are invited to the Sunday help class.

**Start dates:** a new pack at each level starts on the first Monday of each month. Learners join a running pack only at the start of its second or third month, if seats are free.

| When | What happens |
|---|---|
| 60 days before | teachers say which slots they can teach for the next 12 weeks |
| 21 days before | only slots with a committed teacher and a named substitute are published, with the real number of learners joined; cards are saved, not charged |
| 10 days before | rooms with 8 or more open; the rest move to the other slot, the next start date, or are refunded |
| 7 days before | the teacher accepts the course contract for that room |
| Start day | cards are charged; video rooms and reminders are created by the existing daily jobs |

**Matching:** the placement test sets the level; the learner picks a room at that level from the published list. No algorithm at launch.

**Teacher pay**, per 60-minute class, paid after each month: English €8 plus €0.75 per learner present; German €12 plus €1. Open classes add €3. Help classes pay half. Payouts add about 3%. Teachers are paid for every scheduled class, including learner no-shows, and not for rooms that do not open or are merged with at least 48 hours' notice.

**Teacher terms** (from the contracting report): independent contractors holding their local self-employed status; each 12-week room is a separate course contract they may accept or decline without any penalty; they may send a qualified substitute; they keep other clients; the curriculum sets level outcomes, methods are theirs. No reliability ranking or priority penalties. A written explanation of how rooms are offered, human review of any decision about a teacher's account, and a two-week reply to review requests (EU Platform Work Directive, from 2 December 2026). Teachers resident in the Netherlands, Germany, Australia, Saudi Arabia (expatriates) and Qatar are not contracted for now.

**New teachers** start on help classes (paid at the normal rate) and are judged on learner ratings and the next quiz results before getting rooms.

**Staffing:** about one teacher per 90 class learners at 15 teaching hours a week, plus 15% cover. Launch needs 2–3 teachers per language.

## 8. The funnel

The placement test comes first and produces a personal plan ("your path to B1: about 14 weeks"); prices are shown after it. The pricing page shows three cards: Open class, Level pack (the main choice, highlighted by layout and one sentence, not a badge) and Exam pack, with monthly price first and the upfront saving beside it, and the price per class next to a typical private lesson.

Offers inside the app, each pointing to a real room with a real seat count:

| Moment | Offer |
|---|---|
| Signup goal: exam or move date | the exam pack whose dates fit |
| A unit finished | the open class at that level, or the next pack start |
| Voice minutes used up | a minute pack or the open class |
| Third open-class month | the level pack, with the month credited |
| Three weeks before an exam date | a marked mock exam |
| Cancelling | pause for up to a month, or move down a step; in Germany the cancel button goes straight to confirmation |

Company rooms are sold directly to nurse recruiters, Ausbildung agencies and employers; two or three deals before paid advertising.

## 9. Country pricing and abuse checks

- Prices shown follow the visitor's country (`x-vercel-ip-country`); the price charged follows the card's issuing country.
- Checkout in two steps: the card is saved first (Stripe SetupIntent), the server reads `card.country` and `card.fingerprint`, shows the final price for that band, then charges or subscribes. This is also how rooms charge only when they open.
- The band is locked to the account at the first payment: up automatically when a card from a Band A country is used; down only with a card issued in a Band B country, at most every 90 days, logged.
- Stripe Radar: review anonymous-IP payments and card/location mismatches in Band B; never block EU cards by member state.
- Free things (10 free minutes, the trial class, referral rewards) need a verified email (normalised, throwaway domains blocked), a verified phone (text code, internet-only numbers refused), and for the trial a card. One trial per email, phone, card fingerprint or app device. Identifiers stored as keyed hashes for 24 months and named in the Privacy page as fraud prevention.

## 10. AI tutor spend

Measured on 10 November 2026: the live call about $0.057 a minute after fresh connections; the cheaper call (Whisper, Groq, Azure voice) about $0.015 a minute. Changes before launch:

- Plan minutes in `public.tutor_plan_minutes` set to the plans above (the table still holds the old tiers).
- The written tutor stops drawing call minutes and gets a daily message limit instead (for example 60 a day).
- The tutor's daily budget (`TUTOR_DAILY_BUDGET_USD`, now a flat $10) scales with active paying users, with an email alert at 80%; a per-learner daily cap of 30 voice minutes.
- Default engine for plan minutes: the cheaper call once the owner approves its quality; the live call as the premium experience.
- Each month: logged cost against Google's and Azure's invoices; target AI under 30% of a plan's net revenue. If the cost per minute falls, raise minutes, not prices.

## 11. Build order

On `main` already: rooms (`cohorts`), enrolment, seats, waiting-list offers, Daily rooms and reminders (daily jobs), the tutor's time ledger and minute packs (`STRIPE_PRICE_TUTOR_30`, `STRIPE_PRICE_TUTOR_120`), AI cost logging and budgets, Alimun's own checkout page, captcha.

1. The EU two-step online withdrawal function (required since 19 June 2026; today only by email).
2. Stripe products and prices for every item in section 3, in EUR, CAD, MAD and USD, with founding and list versions; the webhook mapping each to its plan, minutes and room; tested end to end with real payments refunded.
3. The band table, two-step card-first checkout, band lock and Radar rules.
4. Phone verification and the trial and reward checks.
5. Start dates, room publishing only with a committed teacher, charge-on-open, the 10-day open-or-merge step, and joining at month starts.
6. Teacher availability, course-contract offers, substitutes, monthly pay calculation, and the written explanation for teachers.
7. The tutor spend changes in section 10.
8. The weekly review loop: quiz results to the teacher, help-class invitations.
9. A figures page for the owner (section 12).

## 12. The first 90 days

Run three monthly start dates and measure, each month: the share of app users who subscribe, the share who take the open class or a pack, the average room size, the cost to win a paying customer in each channel, monthly churn by product, AI cost per user, and teacher retention. After three cycles, re-run `docs/research/reports/alimun_finmodel.py` with the real figures and decide: keep, adjust (prices, minutes, room sizes, channels) or stop a product or channel that misses twice.

## 13. Open items

- Local tax on foreign digital services in Morocco, Egypt, Turkey and other Band B countries; the 5% provision is a placeholder.
- Stripe Canada's actual fees (the margins use Stripe Ireland's).
- Canadian GST/HST registration and the EU's non-Union OSS registration before the first EU sale of the app.
- Contractor agreement per country, Morocco's 30% single-client withholding above MAD 80,000, and the owner's work permit conditions (open or employer-specific) before taking an active role.
- AI wording (owner, 11 Nov 2026): features that use AI may be named as AI, and must be where the EU AI Act requires it; Alimun as a whole is not branded as AI (CLAUDE.md).
- Launch-day exchange rates for every local price.
- Cash: about €30,000 to €50,000 to reach break-even (base case), plus the owner's living costs until a salary starts, plus six months in reserve before paid advertising (CFO).
- Pricing engine: technical spec and build plan in `docs/PRICING_ENGINE_SPEC.md`.
