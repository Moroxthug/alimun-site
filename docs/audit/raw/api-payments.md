# Phase 2 audit: API / payments (APIP)

Scope: api/stripe.js, api/webhooks/stripe.js, api/enroll.js, api/join-session.js, api/create-cohort.js, js/stripe/config.js, supabase/setup-stripe-prices.js, and the vercel.json routes for them. Callers checked: signup.html, signup-success.html, student-dashboard.html (checkout, upgrade, enroll, extra class), teacher-dashboard.html (join). Schema and policies checked: supabase/migrations/202610141800_phase1_db_lockdown.sql, supabase/schema.sql, supabase/waitlist-fill-system.sql, supabase/add-webhook-and-credits.sql.

What is already right: checkout needs a verified JWT, and the user id and email come from that token, not the body. The price is allow-listed (PRICE_BY_ID). Success and cancel URLs are allow-listed to the app origin. Amounts are never taken from the client, and currency is limited to an enum. The webhook verifies the signature and is the only writer of billing columns, which the Phase 1 guard triggers block for clients. Enrollment needs an active subscription plus tier and language checks, and the seat claim is atomic (increment_enrollment). Daily rooms are private, and meeting tokens are scoped to room_name, user_id and an exp at the end of the join window. Cohort creation needs an approved teacher.

### APIP-01: "Upgrade plan" creates a second subscription; the old one keeps billing and its events overwrite the new tier and can cancel the seat
- Severity: High
- Location: student-dashboard.html:5748-5776 (confirmUpgrade), api/stripe.js:145-210 (no existing-subscription check), api/webhooks/stripe.js:205-223, 263-319
- Category: stripe
- Confidence: high
- Scenario: A student on an active Focused subscription clicks Upgrade and picks Intensive. confirmUpgrade calls createCheckout, and the server creates a brand-new subscription Checkout for the same customer. Nothing cancels, prorates or swaps the existing subscription.
  1. The student is now billed for both plans every month.
  2. handleSubscriptionCheckout overwrites student_profiles.stripe_subscription_id with the new subscription, so the old one is no longer linked by id.
  3. The next customer.subscription.updated event on the OLD subscription (renewal, card update, cancel_at_period_end toggle) misses on subscription id and falls back to stripe_customer_id (line 214). It finds the same student and writes the old subscription id back. Because status is active and metadata.tier ('focused') differs, it also sets tier back to focused (lines 274-285). The upgrade silently reverts while the student pays for both plans.
  4. If the student then cancels the old plan in the portal, customer.subscription.deleted for the old subscription also matches by customer. It marks the student cancelled, clears enrolled_cohort_id and cancels their enrollments (lines 298-317), even though the new subscription is active. The student loses their seat and gets a "subscription has ended" email.
- Fix: In create-checkout for mode=subscription, refuse when the student already has stripe_subscription_status in (active, past_due) and an existing stripe_subscription_id. Route upgrades through `stripe.subscriptions.update(subId, { items: [{ id, price }], proration_behavior })` (a new `?action=change-plan` on api/stripe.js) or through the Billing Portal's plan switcher. In the webhook, ignore subscription and invoice events whose subscription.id differs from student_profiles.stripe_subscription_id when the stored subscription is active, instead of falling back to the customer. Use the customer fallback only when no subscription is stored.

### APIP-02: Webhook grants entitlements on Checkout sessions that are complete but unpaid (async payment methods), and can grant 1:1 credits twice
- Severity: High
- Location: api/webhooks/stripe.js:241-260 (gate at 244), 424-434; supabase/add-webhook-and-credits.sql:35-44 (no unique on stripe_session_id)
- Category: stripe
- Confidence: medium
- Scenario: The gate is `payment_status !== 'paid' && status !== 'complete'`. Checkout fires checkout.session.completed with status 'complete' and payment_status 'unpaid' when the buyer pays with a delayed-notification method (SEPA debit, Bancontact/iDEAL via SEPA, bank transfer, Boleto and similar). Because status is 'complete', the condition is false and processing continues. In payment mode (1:1 session credit, founding fee, certificate) this inserts a session_credits row before any money has arrived. checkout.session.async_payment_failed is not handled, so the credit stays if the payment later fails. If the payment succeeds, checkout.session.async_payment_succeeded (handled at line 242) inserts a SECOND credit row for the same stripe_session_id, because session_credits.stripe_session_id has no unique constraint. Subscription mode is safer, since status is later corrected by subscription and invoice events, but the profile is still flipped to 'active' immediately. Confirm by checking which payment methods are enabled on the live account's Checkout. The API sets no `payment_method_types`, so every dashboard-enabled method is offered.
- Fix: Gate on `session.payment_status === 'paid' || session.payment_status === 'no_payment_required'` only. Handle `checkout.session.async_payment_failed`, which logs and grants nothing. Add `create unique index on public.session_credits(stripe_session_id) where stripe_session_id is not null` and use `upsert(..., { onConflict: 'stripe_session_id', ignoreDuplicates: true })`. Optionally pass `payment_method_types: ['card', 'link']` for one-time prices.

### APIP-03: Webhook raw body may never reach constructEvent on Vercel; `config.api.bodyParser` is a Next.js option and req.body is touched before the stream is read
- Severity: Medium
- Location: api/webhooks/stripe.js:89-103, 133-139, 567-568
- Category: stripe
- Confidence: medium
- Scenario: This is a plain Vercel Node function, not Next.js. Vercel's documented way to get a raw body there is to read the request stream before the body helper consumes it, or to disable helpers. `module.exports.config = { api: { bodyParser: false } }` is a Next.js API-route convention and is not documented for @vercel/node. getRawBody evaluates `req.body` at line 92 before iterating the stream (line 96). With Vercel's helpers, `req.body` is a lazy getter that parses `application/json` into an object. On helper versions that buffer the request eagerly, the stream is then empty, getRawBody returns `Buffer.alloc(0)`, and every event fails signature verification with a 400. Every paying customer would then get no tier, credits or status. This fits docs/IMPLEMENTATION_PLAN.md:13: "webhook registered ... but webhook_logs is empty: no real event has ever been processed." It is not proven from code alone.
- Fix: Read the stream first, without touching `req.body`: `if (!req.readableEnded) { for await (...) }`, then fall back to `req.rawBody`. Return 400 with a distinct log line when the result is empty. Verify on a Preview deployment with `stripe trigger checkout.session.completed` (or the Stripe CLI forwarding to the preview URL) and check that a `webhook_logs` row reaches 'processed'. If it still fails, set `NODEJS_HELPERS=0` for the project and parse JSON manually in the other handlers, or move the webhook to a Web-standard handler (`export async function POST(request)` with `await request.text()`).

### APIP-04: Subscription tier comes from stale subscription metadata ahead of the actual price; plan changes keep the old tier and existing seat
- Severity: Medium
- Location: api/webhooks/stripe.js:272-285, 381-385; api/stripe.js:198-199
- Category: stripe
- Confidence: medium
- Scenario: create-checkout copies `metadata.tier` onto the subscription (`subscription_data.metadata`). On customer.subscription.updated, the webhook prefers `subscription.metadata.tier` over the tier of the current price. Suppose the Customer Portal allows plan switching (owner task in IMPLEMENTATION_PLAN §5). A student subscribes to Private (€269), sits in a private or intensive cohort, then switches to Community (€24) in the portal. Stripe changes the price but leaves the metadata alone, so the webhook keeps tier='private'. The student pays the Community price for Private access. Separately, no code re-checks the student's existing enrollment against the new tier, so even a correctly applied downgrade leaves them in a higher-tier cohort, and join-session only checks enrollment and status. Confirm by checking whether the live Billing Portal configuration has "customers can switch plans" enabled.
- Fix: Derive the tier from `subscription.items.data[0].price.id` through PRICE_TO_TIER first and use metadata only as a fallback. Also update subscription.metadata.tier when the plan changes. When the tier decreases, cancel active enrollments in cohorts whose tier weight exceeds the new tier. Until then, disable plan switching in the portal configuration.

### APIP-05: Concurrent /api/enroll calls let one student hold seats in several cohorts
- Severity: Medium
- Location: api/enroll.js:105-112, 166-174, 207-244; supabase/schema.sql:89-98 (only `unique (student_id, cohort_id)`)
- Category: bug
- Confidence: high
- Scenario: The "already enrolled" check reads `student.enrolled_cohort_id` once at the start. A student with an active subscription fires N parallel POST /api/enroll requests with different cohort_ids, either from devtools or by double-clicking several Join buttons. All of them see enrolled_cohort_id = null, all succeed in increment_enrollment, and all insert active enrollments, which the per-(student, cohort) unique constraint allows. The student is now actively enrolled in N cohorts. join-session admits them to every one of them (it checks enrollments per cohort), they take seats from paying students in small cohorts (intensive 6, private 1), and `action=leave` and the dashboard only know about one of them. A private-tier student can do this across every cohort of their language.
- Fix: Add `create unique index enrollments_one_active_per_student on public.enrollments(student_id) where status = 'active'`. The second insert then fails and the existing decrement_enrollment rollback (line 232) runs. Alternatively, move the whole enrollment into a single SECURITY DEFINER RPC that locks the student_profiles row (`select ... for update`).

### APIP-06: Switching classes or claiming an offer gives up the current seat before the new seat is secured
- Severity: Low
- Location: api/enroll.js:200-212
- Category: bug
- Confidence: high
- Scenario: With `switch: true` (or a waitlist claim while enrolled), cancelActiveEnrollments runs first. If increment_enrollment then returns null because the target filled in the meantime or its status changed, the API answers 409 cohort_full. The student is now in no class. Their old seat was freed, the decrement trigger may already have offered it to that cohort's waitlist, and they cannot get it back.
- Fix: Claim the new seat first with increment_enrollment, then cancel the old enrollment. Do it in one RPC or transaction so a failure at any step rolls back both.

### APIP-07: Webhook idempotency lets two in-flight deliveries of the same event both process it
- Severity: Low
- Location: api/webhooks/stripe.js:147-181
- Category: stripe
- Confidence: medium
- Scenario: On a duplicate event_id (23505), the handler reprocesses unless the existing row is 'processed'. A row that is 'pending' because another invocation is still running, for example a Stripe retry after a slow first attempt timed out from Stripe's point of view, gets processed a second time concurrently. Most branches are absolute UPDATEs and harmless. The session_credits INSERT (one-time purchases) runs twice and grants two credits, since there is no unique on stripe_session_id (see APIP-02).
- Fix: Treat a 'pending' row younger than about 2 minutes as in progress and return 409 or 500 so Stripe retries later. Atomically claim stale or failed rows with `update ... set status='pending', claimed_at=now() where id=? and (status='failed' or claimed_at < now()-interval '2 min') returning id`. Add the unique index from APIP-02.

### APIP-08: Subscription events are applied from the event payload, so an out-of-order event can flip a paid student to past_due or cancelled
- Severity: Low
- Location: api/webhooks/stripe.js:263-296
- Category: stripe
- Confidence: medium
- Scenario: Stripe does not guarantee event order. customer.subscription.created usually carries status 'incomplete' at the moment of checkout. If it is delivered after checkout.session.completed has set the student to active, it sets stripe_subscription_status to 'past_due', which maps from incomplete. /api/enroll then returns 402 for a student who has paid, until another subscription.updated event arrives. Stale 'updated' events can do the same.
- Fix: On every subscription and invoice event, `stripe.subscriptions.retrieve(id)` and apply the current status, price and tier rather than the payload's snapshot. Alternatively, compare `event.created` with a stored `stripe_status_updated_at` and skip older events.

### APIP-09: Third failed invoice cancels the class seat locally while Stripe may still be retrying and later collects payment
- Severity: Low
- Location: api/webhooks/stripe.js:321-361
- Category: stripe
- Confidence: medium
- Scenario: `attempt_count >= 3` marks the student cancelled, clears enrolled_cohort_id and cancels their enrollments. The Stripe subscription itself is not cancelled, and Smart Retries default to up to 8 attempts or 2 weeks. If a later retry succeeds, invoice.paid sets status back to 'active', but the seat is gone, possibly handed to the waitlist. The student was charged and has to find a class again. The email also tells them the subscription "has been cancelled" when it has not been.
- Fix: Let Stripe's subscription lifecycle decide. Mark past_due on payment_failed, and release the seat only on customer.subscription.deleted, or on subscription.updated with status unpaid or canceled, matching the dashboard retry settings. Alternatively, explicitly cancel the Stripe subscription at the same point.

### APIP-10: Checkout is allowed for accounts with no student profile; the payment then fails permanently in the webhook
- Severity: Low
- Location: api/stripe.js:100-134, 145-210; api/webhooks/stripe.js:390-403, 411-416
- Category: stripe
- Confidence: high
- Scenario: Any authenticated user, including a teacher or a student whose profile insert failed, can create a Checkout session. resolveStripeCustomer creates a Stripe customer even when there is no profile, and cannot persist it. After payment, handleSubscriptionCheckout or handleOneTimeCheckout throws "No student_profiles row". The webhook returns 500 and Stripe retries for 3 days and then gives up. The customer is charged with nothing granted, and a subscription keeps billing. Repeated calls also create extra Stripe customers, because customer search is eventually consistent, and no call is rate-limited.
- Fix: In create-checkout, load the student_profiles row first and return 409 "complete your profile first" when it is missing. Pass `idempotencyKey: 'cust-' + user.id` to `stripe.customers.create`.

### APIP-11: create-cohort accepts unvalidated fields, leaks DB error text, and does not tie the language to the teacher
- Severity: Low
- Location: api/create-cohort.js:32, 84-93, 120-131, 139-150, 160-194, 262-265
- Category: input-validation
- Confidence: high
- Scenario:
  1. `language` is free text and not checked against the teacher's `teacher_profiles.languages`, so an approved teacher of Spanish can open a German cohort that German students then join.
  2. `timezone` is not validated. An invalid zone makes generate_cohort_sessions fail at `AT TIME ZONE`, but the cohort is already inserted with status 'open'. It is listed to students with zero sessions and the API still answers 201.
  3. `description` has no length cap. `schedule_days` has no cap, and duplicates are allowed.
  4. An unknown `tier` or `level` falls through to a DB check violation, whose message is returned to the client (`'Internal server error: ' + err.message`, and `rpcError.message` in the warning).
  5. The 4-active-cohort limit is check-then-insert, so parallel requests exceed it. The header comment still says "max 3".
  6. The CORS fallback is `*`, unlike the other handlers.
- Fix: Validate `tier` and `level`/`goal_track` against the enums, `language` against `teacher.languages`, `timezone` with `Intl.supportedValuesOf('timeZone').includes(tz)` (or a try/catch with `new Intl.DateTimeFormat('en', { timeZone: tz })`), `schedule_time` with `/^([01]\d|2[0-3]):[0-5]\d$/`, `schedule_days` as unique day names (at most 7), and `description` at 2000 characters or fewer. If session generation fails, delete the cohort, or insert it as 'closed' and open it only after sessions exist. Return generic error text. Use the same `APP_URL || 'https://alimun.com'` CORS fallback as the other handlers.

### APIP-12: join-session trusts the stored daily_room_url and never refreshes the room's expiry; rescheduled sessions become unjoinable
- Severity: Low
- Location: api/join-session.js:136-169, 176-187; api/create-cohort.js:205-249; admin.html:2557-2562
- Category: daily
- Confidence: medium
- Scenario: create-cohort pre-creates 12 weeks of rooms with `exp = original scheduled_at + 90 min` and `eject_at_room_exp`. If an admin moves a session later (admin.html edits scheduled_at), join-session passes its window check against the new time, sees the stored URL and skips room creation. It then issues a token whose exp is later than the room's exp. Daily refuses entry to the expired room, so the class cannot start. Separately, the token is always minted for `alimun-<sessionId>`. If an admin overwrites daily_room_url with any other room, the URL and token no longer match, and the join fails the same way.
- Fix: Always use the room name `alimun-${session.id}`. On join, `POST /rooms/{name}` with `{ properties: { exp } }` to extend the expiry to the current window (create it if it is missing), and ignore or overwrite a stored URL that does not end in that name. Have the admin "room URL" field read-only, or drop it.

### APIP-13: Client Stripe helper hides server errors and can freeze placeholder price IDs
- Severity: Low
- Location: js/stripe/config.js:28-63, 302-305, 342-345; student-dashboard.html:12-40, 5759-5761
- Category: bug
- Confidence: high
- Scenario: The API returns `{ error: '...' }`, but createCheckout and openBillingPortal read `err.message`, so users see "Checkout API error 401" or "Checkout API error 400" instead of "Sign in before starting checkout" or "Unknown priceId". Separately, PRICE_IDS is computed once when the module is first evaluated, from `window.ALIMUN_CONFIG.prices`. The dashboard fills that object asynchronously. If the user reaches confirmUpgrade before `/api/stripe/config` resolves, or if that fetch failed, the module locks in 'price_FOCUSED_MONTHLY_ID'-style placeholders. Every retry on that page load then gets 400 Unknown priceId.
- Fix: Use `err.error || err.message`. Resolve price IDs lazily inside getRegionalPriceId, or await a shared `window.ALIMUN_CONFIG_READY` promise. Throw a clear error when a resolved ID still starts with a placeholder (`/_ID$/`) instead of sending it.

### APIP-14: cohortId sent to checkout is never acted on; after paying from the "Join" prompt the student is not enrolled
- Severity: Low
- Location: student-dashboard.html:3946-3984; api/stripe.js:165, 176; api/webhooks/stripe.js:377-406
- Category: bug
- Confidence: high
- Scenario: joinCohortDirect gets 402 payment_required, offers checkout, and passes `cohortId`, which create-checkout validates and stores in metadata. The webhook ignores `metadata.cohort_id`, and the success URL lands on `?checkout=success` with nothing that resumes the join. The student paid "for this cohort", returns, and is not in it. The seat may also be gone by then.
- Fix: Either enroll in the webhook after activating the subscription, reusing the enroll logic through a shared module or an RPC with all its checks, or carry `&join=<cohortId>` in the success URL and have the dashboard call /api/enroll on return. Drop the confirm text "for this cohort tier" if neither is done.

### APIP-15: Refunds and disputes do not change access
- Severity: Info
- Location: api/webhooks/stripe.js:363-369
- Category: stripe
- Confidence: high
- Scenario: charge.refunded and charge.dispute.created only log. A refunded 1:1 credit or founding fee stays granted. A refunded subscription invoice keeps access until Stripe cancels the subscription. This is documented as a manual decision, so it is listed for completeness.
- Fix: At minimum, write a webhook_logs or admin-visible row with the student id. For one-time purchases, mark the matching session_credits row (by payment_intent, then session) as revoked.

### APIP-16: setup-stripe-prices.js does not create every price the API allow-lists
- Severity: Info
- Location: supabase/setup-stripe-prices.js:58-65; api/stripe.js:41-51
- Category: other
- Confidence: high
- Scenario: The script creates the 4 tiers × monthly/yearly prices plus the founding fee, all in EUR with USD/CAD/AUD/MAD options. STRIPE_PRICE_ONEONONE_SESSION, STRIPE_PRICE_CERTIFICATE and the *_AUD/*_MAD regional price env vars are expected by api/stripe.js and the webhook but are created by nothing in the repo. If they are unset, the extra-class purchase shows "not available". If they are set to prices without matching currency_options, a checkout with `currency` returns a 500. The script also skips archived prices with the same lookup_key and would then fail on create ("lookup_key already exists").
- Fix: Add the 1:1 session and certificate prices to the script (or document them as manual), drop the separate regional env vars now that currency_options cover AUD/MAD, and pass `transfer_lookup_key: true` on create.

## Coverage
| File | Lines read |
|---|---|
| api/stripe.js | 1-335 (all) |
| api/webhooks/stripe.js | 1-568 (all) |
| api/enroll.js | 1-316 (all) |
| api/join-session.js | 1-219 (all) |
| api/create-cohort.js | 1-266 (all) |
| js/stripe/config.js | 1-420 (all) |
| supabase/setup-stripe-prices.js | 1-66 (all) |
| vercel.json | 1-105 (all). Routes in scope: 61-80 (create-checkout-session, checkout-session, stripe/create-checkout, stripe/billing-portal, stripe/config → api/stripe?action=...), 81-84 (catch-all, which serves /api/webhooks/stripe, /api/enroll, /api/join-session, /api/create-cohort) |
| Supporting, read in part | signup.html 195-230, 351-364, 700-770, 900-990; signup-success.html 170-230; student-dashboard.html 8-45, 3915-4035, 5730-5790, 6525-6565; supabase/migrations/202610141800_phase1_db_lockdown.sql 200-370, 440-600, 640-760; supabase/schema.sql 40-160, 215-275; supabase/waitlist-fill-system.sql 1-200; supabase/add-webhook-and-credits.sql 1-74; api/cron-create-rooms.js (room naming/privacy lines only) |

## RLS assumptions
All the server handlers in scope use the service role, so RLS does not apply to them. The client-side Supabase calls on the payment and enroll paths are:

| Query location | Table/RPC | Operation | What it needs | Allowed under Phase 1? |
|---|---|---|---|---|
| signup.html:700-710, 906-915 | student_profiles | insert own row with `tier` | insert policy for own user_id; the guard trigger nulls stripe_* and enrolled_cohort_id but keeps the client `tier` | Yes. The client-chosen tier is harmless because the webhook overwrites it on checkout, and enroll requires an active stripe_subscription_status that a client cannot set |
| js/stripe/config.js:240-252 | auth.getSession | read | n/a | n/a |
| student-dashboard.html (joinWaitlist, 6088-6120) | cohort_waitlist | select/insert own row | waitlist_select/insert where student_id = my_student_profile_id(); the guard nulls offer fields | Yes |
| student-dashboard.html (enroll / checkout) | none directly | goes through /api/enroll and /api/stripe | - | n/a (service role) |
