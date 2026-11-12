# Payment and sign-up protections: what the owner sets outside the code

Pricing engine build step 6 (docs/PRICING_ENGINE_SPEC.md section 7). The code checks what it can (the card decides the price, trials once per person, free tutor minutes once per inbox, disputes pause access). These settings live in Stripe, Supabase, Cloudflare, RevenueCat and Vercel, so they are set by hand. Each takes a few minutes.

## Stripe Radar rules

Stripe dashboard → Radar → Rules → Add rule. Every customer of the new checkout carries `band` (A or B) and `card_country` in its metadata, which Radar reads as `::customer:band::`.

Paste these one at a time:

```
Review if :is_anonymous_ip: and ::customer:band:: = 'B'
```
A Band B card used from a VPN or proxy goes to review instead of being charged at once. You approve or refuse it in Radar → Reviews.

```
Request 3D Secure if :is_anonymous_ip:
```
Anyone paying from a VPN or proxy confirms with their bank.

```
Review if :card_country: != :ip_country: and ::customer:band:: = 'B' and :amount_in_usd: > 170
```
Large Band B payments (over about €150) where the card and the connection are in different countries. Travellers and families paying for someone abroad are normal, so this is a review, not a block.

Do not add a rule that blocks any EU card by its member state: the EU forbids refusing a card because of where in the EU it was issued (Geo-blocking Regulation 2018/302).

## Supabase sign-ups

Sign-ups go straight from the browser to Supabase, so the limits are Supabase's own settings. Checked on 12 Nov 2026:

- Captcha: on. Cloudflare Turnstile is set in Supabase (Authentication → Attack Protection) with its secret saved, and the sign-up page sends the token (`js/captcha.js`, site key in the file; `TURNSTILE_SECRET_KEY` is in Vercel for the newsletter forms). Nothing to do.
- There is no per-IP limit for email sign-ups in Supabase's settings (an earlier version of this note said 5 per 5 minutes; that setting does not exist for email sign-ups). The protections are the captcha, email confirmation (on) and one confirmation email per address a minute. A per-IP or per-network cap needs our own server in front of sign-up; left for later, if the weekly payment report shows abuse.
- Auth emails: 30 an hour for the whole site, sign-up confirmations and password resets together. A 31st sign-up within an hour gets an error. To raise it: Supabase → Authentication → Rate Limits → "Rate limit for sending emails", for example 150. Auth emails go through Resend (custom SMTP), so first check that the Resend plan allows that many (its free plan has a daily cap).
- "Prevent use of leaked passwords" needs Supabase Pro; off by the owner's decision of 11 Nov 2026.

## RevenueCat (store purchases)

- In the apps, log in to RevenueCat with the Supabase user id (`Purchases.logIn(userId)`), so purchases reach the right learner.
- Store product ids start with `alimun_app` (subscriptions) and `alimun_minutes_30`, `alimun_minutes_120` (one-time). Other ids can be mapped in the admin's app settings: `store_products`, JSON such as `{"com.alimun.monthly": "app"}`.
- RevenueCat → Project → Integrations → Webhooks: URL `https://alimun.com/api/webhooks/revenuecat`, authorization header `Bearer <a long random value>`. Put the same value in Vercel as `REVENUECAT_WEBHOOK_SECRET`.
- Sandbox purchases are ignored unless `REVENUECAT_SANDBOX=on` is set in Vercel (set it while testing, remove it at launch).

## Vercel

- `PRICING_HMAC_SECRET`: set on 12 Nov 2026 (a random value generated and sent straight to Vercel, never shown), before any trial was sold. Do not change it: earlier trial markers would no longer be recognised.
- `STRIPE_AUTOMATIC_TAX=on` once the tax registrations exist.
