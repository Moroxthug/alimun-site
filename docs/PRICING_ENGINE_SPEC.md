# Pricing engine: technical spec and build plan

Implements the prices and rules in `docs/LAUNCH_PRICING_SPEC.md` (with the CFO's conditions of 11 Nov 2026). Status: approved by the owner on 11 Nov 2026. Steps 1 and 2 built on 11 Nov 2026 (section 13); the rest not yet. Written against `main` as of 11 Nov 2026.

## 1. What exists and what changes

On `main` today:
- `api/stripe.js`: `create-checkout` for an allow-listed `PRICE_CATALOGUE` read from `STRIPE_PRICE_*` env vars (old tiers community/focused/intensive/private, 1:1 session, certificate, tutor packs). The browser picks the currency (`usd`, `cad`, `aud`, `mad`) from each price's `currency_options`. Alimun's own checkout page (`ui: 'custom'`), the welcome coupon, the billing portal and `?action=prices`.
- `api/webhooks/stripe.js`: idempotent through `webhook_logs`; handles checkout completed, subscription created/updated/deleted, invoice paid/failed, refunds and disputes (logged only), and one-time kinds (`session`, `founding_member`, `certificate`, `tutor_time`). Billing state is written only here.
- `supabase/setup-stripe-prices.js`: creates the old products by `lookup_key`, EUR base plus currency options.
- Tables used: `student_profiles` (tier, stripe ids, status, `plan_given_until`), `enrollments`, `cohorts`, `cohort_waitlist`, `tutor_plan_minutes`, `tutor_time`, `tutor_time_ledger`, `tutor_credit_lots`, `teacher_availability`, `teacher_payouts`, `session_credits`, `app_settings`. `api/_lib/plan.js` decides whether a plan is active. Nobody pays yet (0 subscriptions, 0 webhook events).

What changes:
- One currency option per price cannot express two bands (Band B is also charged in EUR and USD), so each product gets **one Stripe price per band and variant** (list or founding), each carrying the currencies of that band.
- The browser stops choosing the currency or price. The server chooses the band from the card, the currency from the band and the card country, and the price from a price book in the database.
- Checkout becomes card-first (SetupIntent), then a server quote, then the charge or subscription. This is also what lets rooms charge only when they open.
- Access is decided by an `entitlements` table instead of `student_profiles.tier` alone.
- The old catalogue stays readable but is archived in Stripe after the switch (no customers hold it).

## 2. Data model

New migration `supabase/migrations/2026111xxxxx_pricing_engine.sql`, idempotent, ending with a verify query, applied one statement at a time through the Supabase connector after the owner sees the plan.

| Table | Columns | Who can read |
|---|---|---|
| `products` | `product_key` (pk, e.g. `app`, `open_en`, `open_de`, `level_en`, `level_de`, `exam_en`, `exam_de`, `help_class`, `trial`, `minutes_30`, `minutes_120`, `b2b_en`, `b2b_de`), `kind`, `language`, `classes_per_month`, `months` (3 for packs), `voice_minutes_month`, `includes_app`, `active` | everyone (active rows) |
| `country_bands` | `country` (ISO-3166 alpha-2, pk), `band` (`A`/`B`), `currency` (charged currency for that country), `price_tax_inclusive` (EU true), `stripe_tax` (collect tax through Stripe Tax), `note`, `updated_at` | everyone |
| `price_book` | `id`, `product_key`, `band`, `variant` (`list`/`founding`), `cadence` (`month`/`year`/`once`/`upfront`), `currency`, `unit_amount` (minor units), `stripe_price_id`, `lookup_key`, `active`, `valid_from`, `valid_to`; unique (`product_key`, `band`, `variant`, `cadence`, `currency`, `valid_from`) | everyone (active rows) |
| `customer_pricing` | `user_id` (pk), `band`, `band_source` (`card`/`local_method`/`admin`), `card_country`, `card_fp_hash`, `locked_at`, `band_change_allowed_at`, `founding` (bool), `founding_seq`, `founding_started_at`, `founding_until`, `founding_path_end` | the learner (own row), admins |
| `band_changes` | `id`, `user_id`, `from_band`, `to_band`, `reason`, `card_country`, `at`, `by` | admins |
| `entitlements` | `id`, `user_id`, `product_key`, `variant`, `band`, `currency`, `status` (`pending_room`/`active`/`paused`/`ended`/`refunded`), `cohort_id`, `starts_at`, `ends_at`, `stripe_subscription_id`, `stripe_schedule_id`, `stripe_payment_intent_id`, `voice_minutes_month`, `amount_paid`, `created_at` | the learner (own rows), the room's teacher (name and status only), admins |
| `quotes` | `id`, `user_id`, `product_key`, `variant`, `cadence`, `band`, `currency`, `unit_amount`, `stripe_price_id`, `setup_intent_id`, `cohort_id`, `expires_at` (15 minutes), `used_at` | server only |
| `trial_markers` | `kind` (`email`/`phone`/`card`/`device`), `hash` (HMAC with a server secret), `first_user_id`, `created_at`; pk (`kind`, `hash`) | server only |
| `fx_rates` | `day`, `currency`, `per_eur`, `source` | admins |
| `finance_reserves` | `month`, `kind` (`exam_guarantee`), `amount_eur` | admins |

Settings in `app_settings`: `founding_closes_at`, `founding_cap` (500), `founding_count` (incremented by an RPC), `tutor_budget_per_paid_usd` (0.15), `tutor_user_daily_minutes` (30), `written_tutor_daily_messages` (60).

RPCs (security definer, admin or service role only): `claim_founding_seat(user_id)` (atomic: checks date and cap, sets `founding_seq`), `set_band(user_id, band, reason, card_country)` (enforces the 90-day rule downward, logs `band_changes`), `entitlement_minutes(user_id)` (sum of active entitlements' minutes, used by `tutor_refresh` in place of the tier lookup).

RLS: new tables on; admin through `public.is_admin()` only; `trial_markers` and `quotes` have no client policies. `supabase/tests/rls.sql` extended: a student reads only their own `customer_pricing` and `entitlements`; nobody reads `trial_markers`; anon reads only active `price_book` rows.

Seed: `country_bands` for every ISO country (Band A list from the launch spec, all others B; EUR for the EU, Turkey and Algeria; USD for Egypt and countries without a priced currency; MAD for Morocco; CAD for Canada; GBP and AUD optional later). `products` and `price_book` from the launch spec, list and founding, both bands.

## 3. Stripe catalogue

`supabase/setup-stripe-catalogue.js` (new, replaces `setup-stripe-prices.js` for the new products; the old script stays for reference). Runs in test mode first (`sk_test_`), then live.

- One Stripe product per `product_key`.
- For each band, variant and cadence, one price with `lookup_key` `<product>_<band>_<variant>_<cadence>` (e.g. `level_en_B_founding_month`), base currency EUR plus `currency_options` for that band's other currencies (Band A: CAD, USD; Band B: MAD, USD). Amounts from `price_book`.
- Monthly pack prices: recurring monthly; the 3-month limit is set on the subscription (section 5), not the price. Upfront packs, trial, help class and minutes: one-time prices.
- Tax: EU prices tax-inclusive; Canada tax-exclusive; Stripe Tax on for the registrations the accountant confirms (EU non-Union OSS, Canada GST/HST, QST). Per-currency tax behaviour set on each currency option; to verify in Stripe test mode before relying on it.
- The script writes each `stripe_price_id` back to `price_book` and prints a diff; it never deletes, only archives prices whose `price_book` row ends.

## 4. Choosing the price

**Display (not binding):** `GET /api/pricing?action=quote-display&products=…` reads `x-vercel-ip-country`, looks up `country_bands`, and returns the band's prices in that currency, with founding prices while the founding window is open and seats remain. Cached 10 minutes. A learner who is signed in and already has a locked band sees that band instead.

**Binding (server):**

1. `POST /api/pricing?action=setup` (signed in): creates or reuses the Stripe customer and a SetupIntent (`usage: off_session`); the browser collects the card, Apple Pay or Google Pay with the Payment Element on Alimun's checkout page.
2. `POST ?action=quote { setupIntentId, productKey, cadence, cohortId? }`: the server retrieves the SetupIntent's payment method, reads `card.country` and `card.fingerprint` (wallets carry the same), and decides:
   - **Band:** the card country's band. If the account already has a locked band, a higher band wins at once; a lower band only if `band_change_allowed_at` has passed and the card is issued in that band's country (then `set_band`, logged). Local methods, when added, set the band of their country.
   - **Currency:** the card country's currency if `price_book` has it for that band, else EUR (or USD for USD countries).
   - **Variant:** founding if the learner already has a founding lock that is still valid, or if `claim_founding_seat` succeeds (only on the first paid purchase); otherwise list.
   - **Trial:** for `product_key = trial`, refuse if any marker (email, card fingerprint, device) is already in `trial_markers`.
   - Writes a `quotes` row with a 15-minute expiry and returns the final price, currency, what is included and the room's start date. The page shows this before any charge: "Your card is from France, so your price is €72 a month."
3. `POST ?action=purchase { quoteId }`: re-checks the quote (owner, expiry, unused, room still open or forming), then:
   - **App, open class, minutes, trial, help class:** charges or subscribes now (section 5).
   - **Level or exam pack in a forming room:** creates the entitlement as `pending_room` and stores the payment method; nothing is charged until the room opens.
   - Marks the quote used, writes trial markers for the trial, and returns the entitlement.

The client never sends an amount, currency, band or Stripe price id. `api/stripe.js` `create-checkout` stops accepting the new products (it keeps the billing portal, `retrieve-session` and the old one-time kinds until they are retired).

**Rounding:** amounts are set in `price_book`, not computed at checkout. The quarterly repricing job (section 8) recomputes local amounts from EUR with the rounding rules (MAD to …9, CAD and USD to .99, upfront amounts to whole units) and proposes changes for the owner to approve.

## 5. Charging

| Product | Stripe object | When charged |
|---|---|---|
| App, open class | subscription on the quoted monthly or yearly price | at purchase |
| Level or exam pack, monthly | subscription schedule: one phase of 3 iterations on the monthly price, `end_behavior: cancel`, starting on the room's start date | first payment on the start date, then monthly |
| Level or exam pack, upfront | PaymentIntent, off-session with the saved payment method | on the room's start date |
| Trial, help class, minute packs | PaymentIntent, on-session | at purchase |
| Company rooms | Stripe invoice to the company, `days_until_due: 30` or earlier | at room confirmation |

- A room that opens triggers the start-day charges; a room that does not open releases the payment methods and marks entitlements `ended` with no charge.
- Off-session charges that need the cardholder's confirmation (3D Secure) send the learner a link to confirm; the seat is held for 3 days, then released.
- Monthly payers can cancel future months from the billing portal; the room seat is freed at the end of the paid month.
- Moving up (open class to pack): the unused share of the current open-class month is credited on the pack's first invoice.
- Founding expiry: a daily job finds locks reaching `founding_until`, emails the learner 30 days ahead, and on the date switches the subscription to the list price of the same band and cadence (`proration_behavior: none`).

## 6. Webhooks

`api/webhooks/stripe.js` keeps its idempotency through `webhook_logs` and gains:

- `setup_intent.succeeded`: nothing to grant; logged.
- `invoice.paid` for a subscription or schedule tied to an entitlement: entitlement `active`, `ends_at` extended a month, minutes for the month granted through `entitlement_minutes`.
- `payment_intent.succeeded` for upfront packs, trial, help class, minutes: entitlement `active` for its full period; minutes lots for minute packs as today (`tutor_time` kind).
- `invoice.payment_failed` and `payment_intent.payment_failed`: reminder email; seat held 3 days; then entitlement `paused` and seat freed.
- `customer.subscription.deleted` and `subscription_schedule.completed` or `canceled`: entitlement `ended` at the end of the paid period.
- `charge.refunded`: entitlement `refunded`; seat freed; minutes of a refunded pack removed in the ledger. Withdrawal refunds within 14 days are computed by the withdrawal function (classes taken × price per class) and issued from the admin side, not by the webhook.
- `charge.dispute.created`: entitlement `paused`, admin alert, card fingerprint flagged.
- Every event that changes access writes `student_profiles.tier` to the highest active product (`app`, `open`, `pack`, `exam`) so existing dashboards keep working, and `stripe_subscription_status` as today.

## 7. Abuse checks

- **Sign-up:** the existing captcha; at most 5 sign-ups per IP an hour and a daily cap per data-centre network (an ASN list), keyed by an HMAC of the IP as `api/_lib/subscribe.js` already does.
- **Phone verification: not at launch (owner, 11 Nov 2026).** The trial and rewards rely on the card fingerprint; the free 10 minutes on the captcha, the normalised email and, in the apps, the device check. If the weekly report shows abuse, add Supabase phone sign-in with an SMS provider (Twilio or MessageBird), refusing internet-only numbers.
- **Email:** lower-cased; for Gmail, dots and `+tag` removed before hashing; a throwaway-domain list refused for free things.
- **Device (apps only, later):** Apple App Attest or DeviceCheck and Google Play Integrity markers.
- **Referral rewards** granted only after the referred learner's first payment, and only if card, phone and device markers differ from the referrer's; at most 5 rewards a month per referrer.
- **Stripe Radar rules** (set in the dashboard, documented here): review if `:is_anonymous_ip:` and `::band:: = 'B'`; review if `:card_country:` is not in the band's countries; never block an EU card by member state. `band` is set as metadata on every PaymentIntent and subscription.
- **Weekly report** on the admin page: purchases whose IP country and card country differ, by band; trials refused by each marker; disputes.

## 8. Jobs, finance and reporting

| Job (Vercel cron) | When | Does |
|---|---|---|
| `cron-rooms` | daily | 21 days before a start date publishes rooms with a committed teacher; 10 days before opens rooms with enough learners, merges or cancels the rest; on the start date charges pending entitlements |
| `cron-founding` | daily | 30-day notices and switches to list price |
| `cron-fx` | weekly | stores ECB rates (plus an aggregator for MAD) in `fx_rates`; flags any local price that has drifted more than 7% from its EUR target |
| `cron-finance` | monthly | prepaid classes still owed (deferred revenue: amount paid minus classes delivered × price per class), the exam-guarantee reserve (5% of exam-pack revenue), revenue by currency and band, refunds and disputes |

Admin figures page (`/app/admin`, new section): cash by currency (from Stripe balances), deferred revenue, reserve, margin per room (seats × net price per class minus teacher pay and video), average room size, refunds and dispute rates, cost to win a customer by channel (entered or imported from ad accounts), AI cost as a share of revenue, founding seats used. Stripe Revenue Recognition can replace the deferred-revenue calculation later if the accountant prefers it.

Tutor spend (launch spec section 10): `tutor_plan_minutes` replaced by `products.voice_minutes_month` through `entitlement_minutes`; the written tutor charged against `written_tutor_daily_messages` instead of call minutes; `TUTOR_DAILY_BUDGET_USD` replaced by `tutor_budget_per_paid_usd × active paying users` with a floor of $10 and an 80% alert email; per-learner daily cap of 30 voice minutes.

## 9. Tests

- Unit (`tests/unit/`): band resolution (card country, locked band, 90-day rule, upward switch), currency choice, founding eligibility (date, cap, lock length, 18-month limit), quote expiry and re-use, trial markers (normalised email, phone, card), rounding rules, deferred revenue maths.
- RLS (`supabase/tests/rls.sql`): the cases in section 2.
- Stripe test mode on a Preview deployment, end to end: each product in each band and currency; a pack in a room that opens and one that does not; a 3D Secure card off-session; a failed monthly payment; a cancellation; a refund within 14 days; a dispute; a founding expiry with a test clock. Each must leave the right entitlement, seat, minutes and webhook row.
- Live: one real purchase per product type by the owner, refunded; then the production smoke test in `docs/IMPLEMENTATION_PLAN.md` section 5.

## 10. Build plan

Each step ends with `npm run build`, `node --check` on changed `api/` files, the unit tests, and the owner's OK before the next. Work happens on a branch; nothing reaches `main` before the owner has seen it running on a Preview deployment.

| Step | Contents | Depends on | Estimate |
|---|---|---|---|
| 0 | Owner and advisers: accountant registers EU non-Union OSS and Canada GST/HST and checks Band B taxes; Stripe Canada fees; Stripe Tax on; store developer accounts and per-country store prices; `PRICING_HMAC_SECRET` created in Vercel | — | owner, in parallel |
| 1 | EU two-step online withdrawal function (account page and a public form), refunds computed per class taken | — | 2–3 days |
| 2 | Migration: tables, RPCs, RLS, seed of countries, products and price book; RLS tests | 0 for tax flags | 2 days |
| 3 | `setup-stripe-catalogue.js`, test mode; price ids written back; prices page reads `price_book` | 2 | 2 days |
| 4 | `api/pricing.js`: display quote, setup, quote, purchase; founding claim; band lock; Alimun's checkout page switched to card-first | 2, 3 | 4–5 days |
| 5 | Charging and webhooks (section 5 and 6); entitlements drive access, `planActive` reads them; `tier` kept in step | 4 | 4 days |
| 6 | Abuse checks: trial markers, referral checks, IP limits; Radar rules written up for the owner to paste; store purchase notifications into entitlements | 4 | 3–4 days |
| 7 | Room jobs: publish, open or merge, start-day charges; course contract offers to teachers (with the launch spec's ops steps) | 5 | 4–5 days |
| 8 | Finance jobs and the admin figures page; tutor spend changes | 5 | 3 days |
| 9 | Pricing page and in-app offers in the site's design (locked blocks only with the owner's OK); translations through `js/translations.js` | 4 | 3–4 days |
| 10 | Full test in Stripe test mode on Preview; owner's live purchases, refunded; archive the old Stripe prices; production smoke test | all | 2 days |

About five to six weeks of build sessions, plus the owner's step 0 in parallel. Steps 1 and 2 can start as soon as this spec is approved; step 3 waits for the tax answers only for the `stripe_tax` flags, which can be switched later.

## 11. Store purchases

The app subscription and minute packs are also sold in the App Store and Google Play, priced per country in each store. Store purchases reach `entitlements` through the stores' server notifications (App Store Server Notifications v2, Google Real-time Developer Notifications), or through RevenueCat, which unifies both (free up to about $2,500 of monthly revenue, then about 1%). A learner who pays in a store and on the web gets one combined set of entitlements. Classes and packs are not sold in the stores: Apple requires its own payments for live group classes bought inside an iPhone app (to verify against the current App Review Guidelines), so the apps send learners to the website for them where store rules allow.

## 12. Decided and still open

Decided by the owner on 11 Nov 2026: founding closing date 1 January 2027 (cap 500, lock 12 to 18 months); prices include tax except in Canada and the US; Stripe Tax calculates and collects, the accountant registers and files; no SMS verification at launch; the app in both stores with per-country prices; GBP and other currencies added as price-book rows.

Decided on 11 Nov 2026: store purchases reach entitlements through RevenueCat; store prices are €8.99 in Band A countries and 70% elsewhere, rounded to each store's price points (higher than the web price, which pays no store commission).


## 13. Morocco: card limits

Moroccan residents can pay foreign websites only with a card enabled for international online payments, up to 20,000 MAD a year (2026). Many cards are not enabled by default, so a share of Moroccan payments will be declined. Handling, in order:
- At checkout, a declined Moroccan card shows a short explanation: enable online international payments in the bank's app (most Moroccan banks offer a switch) and check the yearly allowance, then try again.
- Prefer the upfront pack price for Moroccan learners where the allowance allows it: one payment instead of three monthly ones means fewer chances of a decline mid-pack.
- Company rooms for Moroccan recruiters and employers are invoiced and paid by bank transfer.
- Later, if declines stay high: a local payment route (a Moroccan card acquirer such as CMI through a partner, or a payment provider that supports local Moroccan cards and cash points), to research before building. Family members abroad paying with a foreign card are charged that card's band.

## 14. Build status

**Step 1, built and live in the database (11 Nov 2026):** `api/withdraw.js` (contracts from Stripe, two-step submission, receipt email in the learner's language with date and time, owner notified), `js/app/withdraw.js` at `#/settings/withdraw` with a "Withdraw from contract here" link on the plan card in Settings, texts in nine languages, `public.withdrawal_requests` (migration `202611111200_withdrawal_requests.sql`, applied and verified). Refunds are issued by an admin. Still to do: the Terms paragraph on withdrawal (a locked block) to name the online function, with the owner's OK; an admin list of requests (today they arrive by email).

**Step 2, built and live in the database (11 Nov 2026):** migration `202611111300_pricing_engine.sql`, applied and verified: 10 tables with row level security, 8 policies, `claim_founding_seat`, `set_band`, `entitlement_minutes` (service role only), 13 products, 250 countries (68 in Band A, including the EU's outermost regions), 220 prices at the ECB rates of 11 Nov 2026 (MAD from an aggregator). Seed generator: `supabase/maintenance/build_pricing_seed.py`. Tested locally against PostgreSQL 16: founding cap and closing date, band rules, minutes, and access for learners, signed-out visitors and the server. Nothing on the site reads these tables yet.
