# Alimun financial stress test

This tests the launch pricing against growth from 100 to 100,000 active users: how many teachers and hires each stage needs, what customers cost to win and are worth, and how much cash the business needs before it pays for itself. Every number comes from one model with the assumptions listed below, run in three scenarios: bear, base and bull. The tutor's cost uses the owner's measured calls of 10 November 2026, not an estimate. The headline: classes make the money and the app finds the learners. In the base case the business breaks even at about 55,000 to 60,000 active users and needs about €130,000 of cash on the way if hires come late, or about €360,000 if they come early. The bear case does not break even by 100,000 users, so the first three months must measure the four numbers that decide which case is real.

## What the model assumes

| Area | Assumption | Source |
|---|---|---|
| Prices | App €7.99 a month (80% in Band B, 65% in Band C). Level pack €64 a month or €179 upfront for English, €82 or €229 for German; 30% pay upfront; 65% English and 35% German | the agreed launch pricing |
| Bands for packs | 100% / 90% / 85%; paying users 45% Band A, 15% Band B, 40% Band C | launch markets: EU and North Africa first |
| Taxes and fees | 20% EU VAT inside Band A prices; a 5% provision for unknown local taxes elsewhere; Stripe 2.7% + €0.25 (EU) or 6.35% + €0.25 (international) | earlier research; Stripe Canada's fees not yet confirmed |
| AI tutor | about €0.024 per voice minute: 80% on the cheaper engine (measured $0.015 a minute, plus 25% for the newer brain) and 20% on the live call (measured about $0.057 a minute); learners use 35% of their minutes; €0.30 a month for exercises and the written tutor per paying user, €0.08 per free user | the owner's calls, 10 Nov 2026 |
| Classes | rooms of up to 15, 11 learners on average (base), 3 classes a week; teachers paid €8 + €0.75 per learner (English) or €12 + €1 (German) per class, plus 3% payouts; video €0.21 per person per hour; one free 30-minute help class per pack; a teacher teaches 15 hours a week, plus 15% cover | the agreed class model |
| Extras | 10% of app users buy a €2.99 minute pack a month; 5% add practice rooms at €9.99; 15% of class learners buy a €5 help class; 3% of class learners spend about €120 a month on private rooms at 30% margin | estimates |
| Other costs | 5% of revenue for rewards; €0.10 a month support tools per paying user; €0.02 a month hosting per active user; €0.05 text-message check per sign-up; fixed hosting from €120 to €7,000 a month by stage | estimates |
| Acquisition | €18 to win a paying app user and €45 for a class learner through paid channels; organic share rises from 30% to 55% with scale | estimates, to be measured |
| Growth | 15% more active users each month, so about 50 months from 100 to 100,000 | assumption |

| Scenario | Users paying for the app | Users in classes | Average room | Monthly churn, app / classes | Acquisition cost |
|---|---|---|---|---|---|
| Bear | 4% | 1.5% | 9 | 14% / 12% | ×1.5 |
| Base | 8% | 3% | 11 | 10% / 8% | ×1 |
| Bull | 12% | 5% | 12.5 | 7% / 6% | ×0.75 |

The percentages are shares of all active users, free ones included. For comparison, Duolingo has well under 10% of its monthly users paying (from memory).

## One customer, base case

| | App subscriber | Class learner |
|---|---|---|
| Net revenue a month, after VAT, provisions and card fees | €5.95 | €57.21 |
| Variable cost a month | €1.21 (tutor, exercises, rewards, support tools) | €32.58 (teachers, video, help classes, tutor, private-room costs, rewards) |
| Contribution a month | €4.74 | €24.63 |
| Lifetime value (contribution ÷ churn) | €47 | €308 |
| Cost to win | €18 | €45 |
| Lifetime value ÷ cost to win | 2.6× | 6.8× |
| Months to earn back the cost to win | 3.8 | 1.8 |

A class learner earns about five times what an app subscriber earns each month and returns their acquisition cost twice as fast. The app is the cheap way in; classes pay for the company. If every voice minute ran on the live call instead of the cheaper engine, an app subscriber's cost would rise from €1.21 to €1.75 a month.

## Milestones, base case

All money per month. "Users" means active users, free ones included. Marketing is what it costs to replace customers who leave, at today's size.

| Users | Paying app | In classes | Rooms | Teaching hours a week | Teachers | Revenue | Contribution | Team | Hosting | Marketing | Result a month |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 100 | 8 | 3 | 1 | 1 | 1 | €219 | €101 | €200 | €120 | €18 | −€236 |
| 1,000 | 80 | 30 | 3 | 9 | 1 | €2,192 | €1,015 | €2,400 | €180 | €176 | −€1,742 |
| 5,000 | 400 | 150 | 14 | 43 | 4 | €10,961 | €5,074 | €10,100 | €400 | €819 | −€6,245 |
| 10,000 | 800 | 300 | 28 | 85 | 7 | €21,923 | €10,148 | €20,300 | €800 | €1,512 | −€12,464 |
| 20,000 | 1,600 | 600 | 55 | 170 | 14 | €43,846 | €20,296 | €28,300 | €1,500 | €2,772 | −€12,276 |
| 50,000 | 4,000 | 1,500 | 137 | 426 | 33 | €109,615 | €50,739 | €46,000 | €3,500 | €6,300 | −€5,061 |
| 100,000 | 8,000 | 3,000 | 273 | 852 | 66 | €219,230 | €101,478 | €56,500 | €7,000 | €11,340 | +€26,638 |

Contribution stays at about 46% of revenue at every stage, because prices and unit costs do not change with size. What changes is the team and the hosting, so profit depends on reaching enough users before the fixed costs run ahead.

## The three scenarios

| | Bear | Base | Bull |
|---|---|---|---|
| Result a month at 20,000 users | −€24,556 | −€12,276 | +€281 |
| Result a month at 50,000 users | −€32,709 | −€5,061 | +€30,740 |
| Result a month at 100,000 users | −€28,554 | +€26,638 | +€98,054 |
| Breaks even at about | not by 100,000 | 55,000–60,000 users | 20,000 users |
| Teachers at 100,000 users | 40 | 66 | 97 |
| Cash needed on the way, hires as planned | about €752,000 | about €359,000 | about €107,000 |
| Cash needed on the way, lean team | about €520,000 | about €126,000 | none: it pays its way |

"Cash needed" is the lowest point of cumulative cash while growing 15% a month, including the marketing to add new customers and one-off costs (€3,000 legal set-up at launch, then €6,000, €10,000 and €15,000 at 5,000, 20,000 and 50,000 users). The lean team starts each hire one stage later and the founder covers those roles until then.

## When to hire

Remote contractors at mixed regional rates (North Africa, Latin America, Southern Europe). Employees in the EU or Canada cost about 1.5 to 2 times as much.

| From (active users) | Role | Monthly cost | Lean team: from |
|---|---|---|---|
| launch | Bookkeeper and accountant, external | €200 | launch |
| 1,000 | Customer support, multilingual (one per 2,500 paying users) | €1,200 each | 5,000 |
| 1,000 | Social media and content freelancer | €1,000 | 5,000 |
| 5,000 | Accountant with larger scope (added) | €600 | 10,000 |
| 5,000 | Legal retainer, external | €300 | 10,000 |
| 5,000 | Academic coordinator (one per 15 teachers) | €1,800 each | 10,000 |
| 5,000 | Curriculum and content producer | €2,000 | 10,000 |
| 5,000 | Founder salary | €3,000 | 10,000 |
| 10,000 | Operations and scheduling manager | €2,200 | 20,000 |
| 10,000 | Marketing lead | €3,500 | 20,000 |
| 10,000 | Software engineer (one per 40,000 users) | €4,500 each | 20,000 |
| 20,000 | Performance marketer | €3,000 | 50,000 |
| 20,000 | Teacher recruiting and HR | €2,000 | 50,000 |
| 20,000 | Founder salary raise | +€3,000 | 50,000 |
| 50,000 | Larger legal retainer (added) | €1,200 | 100,000 |
| 50,000 | Finance controller, part-time | €2,500 | 100,000 |
| 50,000 | Data and analytics | €3,500 | 100,000 |

The team is the largest cost after teachers, and its timing decides most of the cash need: in the base case, hiring one stage later cuts the cash needed from about €359,000 to about €126,000. With the lean team, the base case is slightly positive at 1,000 and 5,000 users, dips at 10,000 and 20,000 as the first full-time hires arrive, and turns positive again near 50,000.

## What moves the result most

Change in the monthly result at 50,000 users in the base case (−€5,061), one assumption at a time:

| Change | Result a month at 50,000 users |
|---|---|
| Users in classes 4% instead of 3% | +€6,396 |
| Users in classes 2% | −€13,518 |
| Users paying for the app 12% instead of 8% | +€2,785 |
| Users paying for the app 5% | −€9,746 |
| Average room 13 instead of 11 | −€563 |
| Average room 9 | −€8,958 |
| Acquisition 50% dearer | −€8,211 |
| Every tutor minute on the live call | −€8,946 |
| Class churn 6% or 11% instead of 8% | −€4,386 or −€6,074 |

The share of users who take classes is the strongest lever, then app conversion, room size and acquisition cost. Churn matters less to the monthly result than to lifetime value, because the model replaces leavers at the measured cost; it matters a great deal for how much marketing a fixed budget buys.

## Five-day cohorts later

From 10,000 users, if 20% of class learners move to five classes a week at 1.55 times the three-day price (same price per class, slightly cheaper per hour), the base result improves from −€5,061 to −€1,726 a month at 50,000 users and from +€26,638 to +€33,307 at 100,000, and the teachers needed rise from 66 to 74. Five-day cohorts help, but they do not change the shape of the business.

## What this means

The pricing holds: every product keeps a healthy contribution, and class learners pay back their acquisition cost in under two months. The risk is not the price list; it is whether enough free users become paying users and class learners before the team grows. Three rules follow. Hire one stage later than feels comfortable and let revenue pull each role in. Push every app user towards a class, because a class learner is worth five app subscribers a month. Keep rooms full, because a room of 9 instead of 11 costs about €9,000 a month at 50,000 users.

The first three months should measure four numbers: the share of active users who pay for the app, the share who take classes, the average room size, and what a paying customer costs to win in each channel. After three monthly cycles, re-run this model with them. If they land near the base case, the lean plan needs about €130,000 over roughly four years of growth, which grants, start-up credits and revenue can largely cover; near the bear case, the model says to change prices, the class offer or the channels before spending more.

## Limits of this test

These are steady-state snapshots at each milestone plus a growth path at 15% a month, not a month-by-month accounting forecast. The conversion rates, acquisition costs and churn are assumptions until measured. Not included: Canadian corporate tax once profitable (about 11-12% of profit for a small Canadian company), the founder's living costs before a salary starts, building native mobile apps beyond the one-off amounts, Stripe Canada's actual fees, and local taxes beyond the 5% provision. The model is `reports/alimun_finmodel.py` and can be re-run with new numbers (`python3 reports/alimun_finmodel.py out.json`).
