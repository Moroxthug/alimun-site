# Terms: sections 5 and 6 for the new products (draft for the owner, 16 Nov 2026)

Not published. The Terms (`site/src/blocks/legal/terms.html`, last updated 16 Nov 2026) still describe only monthly or
yearly subscriptions. What is sold since 11 Nov 2026 is in `docs/PRICING_ENGINE_SPEC.md` (approved by the owner on
11 Nov) and `docs/LAUNCH_PRICING_SPEC.md`. This draft replaces sections 5 and 6 with wording that matches them. Every
statement below is taken from those specs or from the code; nothing new is promised. When the owner approves it (after a
lawyer has read it), it goes into the locked block and the seven translations, and the lock is updated.

## 5. What you can buy, prices and payment

**What you can buy.** On alimun.com you can buy:

- **The app**, a subscription to the course book, practice, flashcards, mock tests, the library and the tutor's monthly minutes, paid monthly or yearly.
- **An open class**, a subscription to a weekly group class with a teacher, paid monthly or yearly.
- **A level pack or an exam pack**, a 12-week course in a group (a "room") with a fixed start date, paid in three monthly payments or in one payment for the 12 weeks.
- **A trial class** and **a help class**, a place in one class date.
- **Tutor minute packs**, extra minutes with the tutor, paid once.

Companies buy rooms for their staff by invoice under a separate agreement.

**Prices.** Prices depend on the country your card was issued in: the price, the currency and what is included are shown on the checkout page before anything is charged. Prices include taxes, except in Canada and the United States, where sales taxes are added at checkout as shown. If you pay with a card from a country with a higher price than the one you were shown, the checkout page shows the price that applies before you confirm. Once you have bought, the price level of your account stays the same for later purchases unless you pay with a card issued in a country with a higher price.

**Founding price.** Learners who make their first purchase, or reserve a place in a room with a saved card, before 1 January 2027 and while founding places remain (500 in all), get the founding price shown at checkout, for the period stated there. We email you 30 days before it ends; after that the normal price of the same product applies.

**When you are charged.** The app, open classes, trial classes, help classes and minute packs are charged when you buy them. A level or exam pack is not charged when you reserve your place: we save your card and charge it on the room's start date (the first of three monthly payments, or the single payment). If the room does not open, nothing is charged, your saved card is released and we tell you by email.

**Renewals.** Subscriptions (the app and open classes) renew automatically at the end of each period at the then-current price for your account until you cancel. We give at least 30 days' notice by email of a price increase, and you can cancel before it applies. A level or exam pack paid monthly ends by itself after its third payment; it does not renew.

**Payments that need your confirmation or fail.** If your bank asks you to confirm a payment, we email you a link. If a payment is not confirmed or fails, we keep your place in the room for 3 days; after that we may release it and pause your access until the payment is made.

**Moving from an open class to a pack.** The unused part of your current open-class month is credited on the pack's first payment.

**App store purchases.** If you buy the app through the Apple App Store or Google Play, the store charges you under its own terms, at the store's price, and you manage or cancel the subscription in the store.

## 6. Cancellation, refunds and withdrawal

**Subscriptions.** You can cancel the app or an open class at any time in Settings in your dashboard (Manage billing) or by writing to us. Cancelling stops the next renewal; you keep access until the end of the period already paid for.

**Level and exam packs.** Before the room opens, you can cancel your reservation by writing to us; nothing has been charged. If you pay monthly, you can stop the remaining monthly payments; your place ends at the end of the last paid month. If you paid for the 12 weeks in one payment, the payment is not refunded for weeks you do not attend, except as set out below and in Section 17.

**Trial classes, help classes and minute packs** are for the date or the minutes bought and are not refunded once the class has taken place or the minutes have been used, except as set out below and in Section 17.

**When we refund.** If we cancel a class and do not offer a replacement, or we end your plan for a reason other than your breach of these Terms, we refund the unused part of what you paid. If a room does not open, nothing is charged.

**Otherwise,** payments are non-refundable, and we do not give refunds or credits for partial periods, unused classes or time you did not use, except where the law requires it.

**Right of withdrawal.** If you live in the EU or the EEA or the UK, you may withdraw from a purchase within 14 days without giving a reason, with Withdraw from contract in Settings or by email. We refund what you paid within 14 days, to the payment method you used. If you asked for classes to start during the withdrawal period, the classes already given are deducted. Consumers in Morocco, Australia, Quebec and other places keep the rights their law gives them (Section 17).

## Points to check with a lawyer before publishing

- The deduction for classes already given when someone withdraws, and how it is worked out for a pack paid upfront.
- Whether "not refunded for weeks you do not attend" is allowed for an upfront pack in each market (the EU, the UK, Morocco, Quebec, Australia).
- The founding price wording ("for the period stated there"): the spec says the lock lasts 12 to 18 months; the checkout page should name the exact period.
- Canada and the US: when sales tax collection starts (`STRIPE_AUTOMATIC_TAX` is not set in Vercel yet).
- Whether cancelling a reservation keeps the founding price for a later purchase (not decided; the draft says nothing about it).
