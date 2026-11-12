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

Sign-ups go straight from the browser to Supabase, so the limits are Supabase's own settings:

- Supabase → Authentication → Rate Limits: "Rate limit for sign ups and sign ins" at 5 per 5 minutes per IP address (the spec's "at most 5 sign-ups per IP an hour" is close to this; Supabase counts per 5 minutes).
- Supabase → Authentication → Attack Protection → enable CAPTCHA protection with Cloudflare Turnstile, and paste the Turnstile secret key. The site already has the Turnstile widget code (`js/captcha.js`); put the site key in Vercel as `TURNSTILE_SITE_KEY` and the secret as `TURNSTILE_SECRET_KEY` so the newsletter forms use it too.
- Supabase → Authentication → Attack Protection → "Prevent use of leaked passwords" on (the security advisor flagged it as off).

A daily cap per data-centre network (an ASN list) needs a proxy in front of sign-up and is left for later, if the weekly report shows sign-up abuse.

## RevenueCat (store purchases)

- In the apps, log in to RevenueCat with the Supabase user id (`Purchases.logIn(userId)`), so purchases reach the right learner.
- Store product ids start with `alimun_app` (subscriptions) and `alimun_minutes_30`, `alimun_minutes_120` (one-time). Other ids can be mapped in the admin's app settings: `store_products`, JSON such as `{"com.alimun.monthly": "app"}`.
- RevenueCat → Project → Integrations → Webhooks: URL `https://alimun.com/api/webhooks/revenuecat`, authorization header `Bearer <a long random value>`. Put the same value in Vercel as `REVENUECAT_WEBHOOK_SECRET`.
- Sandbox purchases are ignored unless `REVENUECAT_SANDBOX=on` is set in Vercel (set it while testing, remove it at launch).

## Vercel

- `PRICING_HMAC_SECRET`: a long random value; trial and card markers are hashed with it. Until it is set, a key derived from the Supabase service key is used. Set it before the first trial is sold: changing it later makes earlier markers unrecognisable.
- `STRIPE_AUTOMATIC_TAX=on` once the tax registrations exist.
