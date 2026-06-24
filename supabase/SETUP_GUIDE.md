# Alimun — Complete Service Setup Guide

> Follow each section in order. Every `ENV VAR` callout maps directly to a line in `.env.example`.

---

## 0. Prerequisites

- Node.js >= 18 (for any local tooling)
- A domain you control: **alimun.com**
- A Wise Business account email ready
- Credit card for Stripe verification

---

## 1. Supabase

### 1.1 Create a Project

1. Go to [supabase.com](https://supabase.com) -> **Start your project** -> sign in with GitHub.
2. Click **New project**.
3. Fill in:
   - **Name:** `alimun-production`
   - **Database password:** generate a strong password and save it in your password manager
   - **Region:** `eu-central-1` (Frankfurt) -- closest to your EU user base
4. Click **Create new project** and wait ~2 minutes for provisioning.

### 1.2 Copy API Keys

1. In the Supabase dashboard, go to **Settings -> API**.
2. Copy the following into your `.env`:

```
SUPABASE_URL               = https://<your-project-ref>.supabase.co
SUPABASE_ANON_KEY          = <anon / public key>
SUPABASE_SERVICE_ROLE_KEY  = <service_role key>   <- keep this secret!
```

CAUTION: Never expose SUPABASE_SERVICE_ROLE_KEY in any browser-side code or public repository. It bypasses all Row Level Security.

### 1.3 Run the Schema Migration

1. In the Supabase dashboard, go to **SQL Editor -> New query**.
2. Open `supabase/schema.sql` from this project.
3. Paste the entire contents into the editor.
4. Click **Run** (or Ctrl+Enter).
5. Verify in **Table Editor** that all 9 tables appear:
   - `student_profiles`, `teacher_profiles`, `cohorts`, `enrollments`,
     `sessions`, `session_notes`, `session_attendance`,
     `cohort_waitlist`, `teacher_payouts`

### 1.4 Run Seed Data (development only)

1. In **SQL Editor -> New query**, paste the contents of `supabase/seed.sql`.
2. Click **Run**.
3. Verify rows exist in **Table Editor**.

NOTE: In production, skip `seed.sql`. Seed data is for local dev and staging only.

### 1.5 Enable Auth Providers

1. Go to **Authentication -> Providers**.
2. Enable **Email** (enabled by default).
3. Enable **Google** if you want social login:
   - Create a Google OAuth client at console.cloud.google.com
   - Add `https://<project-ref>.supabase.co/auth/v1/callback` as an authorised redirect URI
   - Paste `Client ID` and `Client Secret` into Supabase.

### 1.6 Configure Auth Email Templates

1. Go to **Authentication -> Email Templates**.
2. Update **Confirm signup**, **Magic Link**, and **Reset password** to use Alimun branding.
3. Set **Site URL** to `https://alimun.com`.
4. Set **Redirect URLs** to include:
   - `https://alimun.com/**`
   - `http://localhost:3000/**` (for local dev)

### 1.7 Create Storage Buckets

1. Go to **Storage -> New bucket**.
2. Create the following:

| Bucket name           | Public? | Max file size |
|-----------------------|---------|---------------|
| `session-notes-pdfs`  | No      | 10 MB         |
| `teacher-avatars`     | Yes     | 2 MB          |
| `student-avatars`     | Yes     | 2 MB          |

---

## 2. Stripe

### 2.1 Create Account

1. Go to [stripe.com](https://stripe.com) -> **Start now**.
2. Fill in business details:
   - **Country:** Morocco (or your legal entity country)
   - **Business type:** Individual or Company
   - **Currency:** EUR
3. Complete identity verification with your national ID.
4. Add a bank account (your Wise EUR account -- see Section 5).

### 2.2 Copy API Keys

1. Go to **Developers -> API keys**.
2. Copy into your `.env`:

```
STRIPE_PUBLISHABLE_KEY = pk_live_...
STRIPE_SECRET_KEY      = sk_live_...   <- server-side only!
```

TIP: During development, use the **test mode** keys (pk_test_... / sk_test_...). Switch to live keys only for production.

### 2.3 Create Products & Prices

Go to **Products → Add product** and create the following.
For CLI-based creation, see `setup-stripe.js` or the [stripe_setup.md](./stripe_setup.md) artifact.

#### Product 1 — Community

| Field                | Value                                                                 |
|----------------------|-----------------------------------------------------------------------|
| Name                 | Alimun Community                                                      |
| Description          | 1 live group session per week, up to 35 learners, session notes PDFs  |
| Metadata             | `tier=community`, `type=subscription`                                 |
| Statement descriptor | `ALIMUN COMMUNITY`                                                    |

Prices:

| Label              | Amount    | Currency | Billing | ENV VAR                              |
|--------------------|-----------|----------|---------|--------------------------------------|
| Community EUR mo   | €17       | EUR      | Monthly | `STRIPE_PRICE_COMMUNITY_MONTHLY`     |
| Community EUR yr   | €290      | EUR      | Yearly  | `STRIPE_PRICE_COMMUNITY_YEARLY`      |
| Community AUD mo   | AUD 45    | AUD      | Monthly | `STRIPE_PRICE_COMMUNITY_MONTHLY_AUD` |
| Community MAD mo   | MAD 320   | MAD      | Monthly | `STRIPE_PRICE_COMMUNITY_MONTHLY_MAD` |

#### Product 2 — Focused

| Field                | Value                                                                  |
|----------------------|------------------------------------------------------------------------|
| Name                 | Alimun Focused                                                         |
| Description          | 2 live group sessions per week, up to 17 learners, monthly progress    |
| Metadata             | `tier=focused`, `type=subscription`                                    |
| Statement descriptor | `ALIMUN FOCUSED`                                                       |

Prices:

| Label              | Amount    | Currency | Billing | ENV VAR                            |
|--------------------|-----------|----------|---------|------------------------------------||
| Focused EUR mo     | €39       | EUR      | Monthly | `STRIPE_PRICE_FOCUSED_MONTHLY`     |
| Focused EUR yr     | €590      | EUR      | Yearly  | `STRIPE_PRICE_FOCUSED_YEARLY`      |
| Focused AUD mo     | AUD 90    | AUD      | Monthly | `STRIPE_PRICE_FOCUSED_MONTHLY_AUD` |
| Focused MAD mo     | MAD 650   | MAD      | Monthly | `STRIPE_PRICE_FOCUSED_MONTHLY_MAD` |

#### Product 3 — Intensive

| Field                | Value                                                                  |
|----------------------|------------------------------------------------------------------------|
| Name                 | Alimun Intensive                                                       |
| Description          | 3 live group sessions per week, up to 6 learners, monthly 1:1 check-in |
| Metadata             | `tier=intensive`, `type=subscription`                                  |
| Statement descriptor | `ALIMUN INTENSIVE`                                                     |

Prices:

| Label              | Amount     | Currency | Billing | ENV VAR                               |
|--------------------|------------|----------|---------|---------------------------------------|
| Intensive EUR mo   | €69        | EUR      | Monthly | `STRIPE_PRICE_INTENSIVE_MONTHLY`      |
| Intensive EUR yr   | €990       | EUR      | Yearly  | `STRIPE_PRICE_INTENSIVE_YEARLY`       |
| Intensive AUD mo   | AUD 155    | AUD      | Monthly | `STRIPE_PRICE_INTENSIVE_MONTHLY_AUD`  |
| Intensive MAD mo   | MAD 1,100  | MAD      | Monthly | `STRIPE_PRICE_INTENSIVE_MONTHLY_MAD`  |

#### Product 4 — Private (1 on 1)

| Field                | Value                                                                    |
|----------------------|--------------------------------------------------------------------------|
| Name                 | Alimun 1 on 1                                                            |
| Description          | Fully private 1-student cohort, base 3 private sessions per week         |
| Metadata             | `tier=private`, `type=subscription`                                      |
| Statement descriptor | `ALIMUN PRIVATE`                                                         |

Prices:

| Label              | Amount     | Currency | Billing | ENV VAR                             |
|--------------------|------------|----------|---------|-------------------------------------|
| Private EUR mo     | €179       | EUR      | Monthly | `STRIPE_PRICE_PRIVATE_MONTHLY`      |
| Private EUR yr     | €1,790     | EUR      | Yearly  | `STRIPE_PRICE_PRIVATE_YEARLY`       |
| Private AUD mo     | AUD 275    | AUD      | Monthly | `STRIPE_PRICE_PRIVATE_MONTHLY_AUD`  |
| Private MAD mo     | MAD 1,990  | MAD      | Monthly | `STRIPE_PRICE_PRIVATE_MONTHLY_MAD`  |

#### Product 5 — Single 1-on-1 Session (one-time)

| Field                | Value                                   |
|----------------------|-----------------------------------------|
| Name                 | Single 1-on-1 Session                   |
| Description          | One-time private 1-on-1 tutoring session|
| Metadata             | `tier=oneonone`, `type=addon`           |
| Statement descriptor | `ALIMUN 1ON1`                           |
| Pricing              | One time                                |
| Amount               | EUR 25                                  |
| ENV VAR              | `STRIPE_PRICE_ONEONONE_SESSION`         |

#### Product 6 — Certificate of Completion (one-time)

| Field                | Value                                           |
|----------------------|-------------------------------------------------|
| Name                 | Certificate of Completion                       |
| Description          | Official Alimun certificate for your portfolio  |
| Metadata             | `tier=certificate`, `type=addon`                |
| Statement descriptor | `ALIMUN CERT`                                   |
| Pricing              | One time                                        |
| Amount               | EUR 19                                          |
| ENV VAR              | `STRIPE_PRICE_CERTIFICATE`                      |

### 2.4 Set Up Webhooks

1. Go to **Developers -> Webhooks -> Add endpoint**.
2. Set **Endpoint URL** to: `https://alimun.com/api/webhooks/stripe`
3. Select these events:

| Event                           | What it triggers                              |
|---------------------------------|-----------------------------------------------|
| checkout.session.completed      | Activate subscription, enrol student          |
| customer.subscription.updated  | Sync status to stripe_subscription_status     |
| customer.subscription.deleted  | Mark cancelled, restrict access               |
| invoice.payment_failed         | Mark past_due, send reminder email            |
| invoice.paid                   | Confirm payment, update receipt               |

4. After creating, click **Reveal signing secret** and copy:

```
STRIPE_WEBHOOK_SECRET = whsec_...
```

IMPORTANT: For local webhook testing, install the Stripe CLI and run:
```
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```
This gives you a local whsec_... key for development.

### 2.5 Enable Customer Portal

1. Go to **Settings -> Billing -> Customer portal**.
2. Enable: cancel subscriptions, update payment method, view invoices.
3. Set **Default redirect URL** to `https://alimun.com/student-dashboard.html`.
4. Save settings.

---

## 3. Daily.co (Live Video)

### 3.1 Create Account

1. Go to [daily.co](https://www.daily.co) -> **Sign up**.
2. Choose the **Scale** plan (required for custom domains and webhooks).

### 3.2 Set Up Your Domain

1. In the Daily.co dashboard, go to **Account -> Domain**.
2. Your video rooms will be at: `https://alimun.daily.co/<room-name>`
3. Copy the domain name (e.g. `alimun`) into your `.env`:

```
DAILY_CO_DOMAIN = alimun
```

### 3.3 Get API Key

1. Go to **Developers -> API keys -> Create API key**.
2. Name it `alimun-production`.
3. Copy into your `.env`:

```
DAILY_CO_API_KEY = YOUR_DAILY_CO_API_KEY
```

### 3.4 Configure Room Defaults

In **Account -> Room configuration**, set these defaults:

| Setting                   | Value                                    |
|---------------------------|------------------------------------------|
| Max participants          | 41 (40 students + teacher)               |
| Enable chat               | Yes                                      |
| Enable recording          | Yes (for session replay)                 |
| Auto-delete recordings    | After 90 days                            |
| Ejection at room expiry   | Yes                                      |
| Privacy                   | Private (token required to join)         |

### 3.5 Attendance Webhook

1. Go to **Developers -> Webhooks -> Add webhook**.
2. URL: `https://alimun.com/api/webhooks/daily`
3. Select events: `participant-joined`, `participant-left`, `meeting-ended`.
4. This enables automatic `session_attendance` record creation.

---

## 4. Resend (Transactional Email)

### 4.1 Create Account

1. Go to [resend.com](https://resend.com) -> **Sign up**.
2. Verify your email address.

### 4.2 Add & Verify Your Domain

1. Go to **Domains -> Add domain**.
2. Enter `alimun.com`.
3. Add the DNS records shown to your domain registrar:
   - SPF record (TXT)
   - DKIM record (TXT x 2)
   - DMARC record (TXT)
4. Wait 5-30 minutes for DNS propagation, then click **Verify**.

TIP: If using Cloudflare DNS, set the DKIM records to DNS only (grey cloud), not proxied.

### 4.3 Get API Key

1. Go to **API Keys -> Create API key**.
2. Name it `alimun-production`.
3. Copy into your `.env`:

```
RESEND_API_KEY = re_...
```

### 4.4 Sending Addresses

| Address               | Purpose                      |
|-----------------------|------------------------------|
| hello@alimun.com      | Welcome emails, general comms|
| sessions@alimun.com   | Session reminders, notes PDFs|
| billing@alimun.com    | Payment receipts, invoices   |
| support@alimun.com    | Support replies              |

### 4.5 Email Templates to Build

| Template                    | Trigger                           |
|-----------------------------|-----------------------------------|
| Welcome email               | User signs up                     |
| Session reminder            | 24h before each session           |
| Session notes ready         | Teacher publishes session_notes   |
| Payment receipt             | invoice.paid Stripe webhook       |
| Payment failed              | invoice.payment_failed webhook    |
| Waitlist confirmation       | Student joins cohort waitlist     |
| Password reset              | Auth flow                         |
| Teacher payout confirmed    | Payout status flips to paid       |

---

## 5. Wise Business (Payouts)

### 5.1 Create Account

1. Go to [wise.com/business](https://wise.com/business) -> **Open a business account**.
2. Select **Business** account type.
3. Complete full KYB verification:
   - Business registration document
   - Director/owner identity (passport or national ID)
4. Approval typically takes 1-3 business days.

### 5.2 Set Up Currency Accounts

| Currency | Purpose                               |
|----------|---------------------------------------|
| EUR      | Teacher payouts for EU-based teachers |
| MAD      | Payouts for Morocco-based teachers    |
| AUD      | Payouts for Australia-based teachers  |

To add: **Home -> Add money or currency -> Open [currency] account**.

### 5.3 Connect Wise to Stripe

1. In Wise, go to **EUR account -> Account details -> Copy IBAN**.
2. In Stripe, go to **Settings -> Bank accounts -> Add bank account**.
3. Paste the Wise EUR IBAN.
4. Stripe will make two micro-deposits to verify (1-2 business days).

NOTE: Stripe payouts land in your Wise EUR balance. You then distribute to teachers from Wise using their local bank details or Wise accounts.

### 5.4 Get API Credentials

1. Go to **Settings -> API tokens -> Create token**.
2. Name it `alimun-payout-service`.
3. Set permission to **Full access**.
4. Copy into your `.env`:

```
WISE_API_TOKEN    = YOUR_WISE_API_TOKEN
WISE_PROFILE_ID   = YOUR_WISE_PROFILE_ID
WISE_ENVIRONMENT  = live
```

To get your Profile ID, call: `GET https://api.transferwise.com/v1/profiles` with your API token.

### 5.5 Automated Payout Flow

```
1. Admin reviews teacher_payouts table in Supabase (status = pending)
2. Admin triggers payout via /admin dashboard
3. Backend calls Wise API:
     POST /v1/quotes              -- get live exchange rate
     POST /v1/transfers           -- create transfer record
     POST /v1/transfers/{id}/payments  -- fund the transfer
4. Supabase: UPDATE teacher_payouts SET status='paid', paid_at=now()
5. Resend: email teacher with payout confirmation + amount
```

---

## 6. Injecting Config into HTML Pages

Since Alimun uses standalone HTML files, env vars are injected via a script block in each page's head:

```html
<!-- Add this BEFORE loading any Alimun JS modules -->
<script>
  window.ALIMUN_CONFIG = {
    supabaseUrl:     'https://your-project-ref.supabase.co',
    supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',

    stripePublishableKey:        'pk_live_...',
    stripePriceCommunityMonthly: 'price_...',
    stripePriceFocusedMonthly:   'price_...',
    stripePriceIntensiveMonthly: 'price_...',
    stripePricePrivateMonthly:   'price_...',
    stripePriceCommunityYearly:  'price_...',
    stripePriceFocusedYearly:    'price_...',
    stripePriceIntensiveYearly:  'price_...',
    stripePricePrivateYearly:    'price_...',
    stripePriceOneononeSession:  'price_...',
    stripePriceCertificate:      'price_...',

    dailyCoDomain: 'alimun',
    appUrl:        'https://alimun.com',
  };
</script>

<!-- Supabase CDN -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js"></script>

<!-- Page module -->
<script type="module" src="/js/pages/student-dashboard.js"></script>
```

WARNING: Only include supabaseAnonKey and stripePublishableKey in browser config.
NEVER put SUPABASE_SERVICE_ROLE_KEY, STRIPE_SECRET_KEY, RESEND_API_KEY, or WISE_API_TOKEN in any HTML file.

---

## 7. Pre-Launch Checklist

### Supabase
- [ ] Project created in eu-central-1
- [ ] schema.sql executed successfully -- all 9 tables visible
- [ ] RLS enabled on all tables (check Table Editor -> Policies)
- [ ] Storage buckets: session-notes-pdfs, teacher-avatars, student-avatars
- [ ] Auth email templates customised with Alimun branding
- [ ] Site URL set to https://alimun.com
- [ ] SUPABASE_URL in .env
- [ ] SUPABASE_ANON_KEY in .env
- [ ] SUPABASE_SERVICE_ROLE_KEY in .env (server-side secured)

### Stripe
- [ ] Account verified with bank account
- [ ] All 6 products created
- [ ] All 10 EUR price IDs copied to .env (`STRIPE_PRICE_*_MONTHLY/YEARLY/ONEONONE/CERTIFICATE`)
- [ ] All 8 regional price IDs copied to .env (`STRIPE_PRICE_*_MONTHLY_AUD/MAD`)
- [ ] Webhook endpoint at /api/webhooks/stripe live
- [ ] STRIPE_WEBHOOK_SECRET in .env
- [ ] Customer Portal enabled

### Daily.co
- [ ] Scale plan active
- [ ] Domain "alimun" confirmed
- [ ] DAILY_CO_API_KEY in .env
- [ ] Room defaults configured (41 max, private, recording on)
- [ ] Attendance webhook active

### Resend
- [ ] Domain alimun.com verified (all DNS green)
- [ ] RESEND_API_KEY in .env
- [ ] All 4 sending addresses active

### Wise Business
- [ ] KYB complete
- [ ] EUR, MAD, AUD balances open
- [ ] Wise IBAN added to Stripe payout account
- [ ] WISE_API_TOKEN in .env
- [ ] WISE_PROFILE_ID in .env

### General
- [ ] .env file exists locally and is in .gitignore
- [ ] window.ALIMUN_CONFIG injected in all HTML pages
- [ ] DNS for alimun.com pointing to hosting provider

---

## 8. Local Development

### Quick local server (no Node required)
```bash
# Python 3
python -m http.server 3000

# Or use VS Code Live Server extension (recommended)
```

### Test Stripe webhooks locally
```bash
# Install: https://stripe.com/docs/stripe-cli
stripe login
stripe listen --forward-to localhost:3000/api/webhooks/stripe
# Copy the whsec_... key shown as STRIPE_WEBHOOK_SECRET for dev
```

### Supabase local stack
```bash
npm install -g supabase
supabase login
supabase init
supabase start
# Studio at http://localhost:54323
# API at http://localhost:54321
```
