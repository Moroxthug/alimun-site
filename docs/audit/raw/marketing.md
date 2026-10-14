# Phase 2 audit: marketing pages, i18n, build (area WEB)

Reviewer scope: root marketing HTML (index, about-us, services, corporate, contact, cookies, gdpr, terms, 404), `js/i18n.js`, `js/translations.js`, `js/cookies-banner.js`, `build.js`, `verify.js`, `robots.txt`, `sitemap.xml`, and the generated locale folders (ar de es fr it ma pt zh).

Checks I ran (scripts in the session scratchpad, nothing written to the repo except this file):
- `node --check` on `js/i18n.js`, `js/translations.js`, `js/cookies-banner.js`, `build.js`, `verify.js` and on every inline `<script>` in the 9 assigned HTML files. All pass, and JSON-LD parses.
- Translation key coverage: every `data-i18n*` key and every `t('…')` key in root HTML/JS checked against all 9 dictionaries.
- Build reproducibility: `git archive HEAD` into a temp dir, `npm ci`, `node build.js`, then `git status`. The result was **0 changed files**, so the committed locale folders match the build output exactly. The repo was not modified (`git status` clean).
- Sitemap: all 95 `<loc>` and 90 hreflang targets resolve to existing files (cleanUrls aware). No duplicates, and no noindex-intended pages listed.
- Local asset/link check over the 9 pages × 9 folders. No broken `href`/`src`/`srcset`. The only unresolved paths are the Webflow `data-poster-url`/`data-video-urls` attributes in locale `index.html`/`contact.html`, which `js/webflow.js` never reads, so they are harmless.
- Fetched the two `vvkey` scripts (third-party CDN, not alimun.com) to identify them.

---

### WEB-01: Language auto-redirect drops query string and hash (breaks password reset, waitlist claim links, checkout returns)
- Severity: Medium
- Location: js/i18n.js:47-73 (target built at 67-69); affected entry points: reset-password.html:77 (i18n.js `defer` in head) vs the `type="module"` Supabase client at reset-password.html:129; forgot-password.html:157 (`redirectTo: …/reset-password.html`); api/waitlist/send-offer.js:101 (`/student-dashboard.html?claim_cohort_id=…&waitlist_id=…`); signup.html:470, 736, 950 (`/signup.html` email-confirm redirect, `?step=4` cancel URL); student-dashboard.html:3973, 5767 (`?checkout=success`)
- Category: bug
- Confidence: high
- Scenario: `initRouting` runs on every page that loads i18n.js (all marketing pages, signin, signup, forgot/reset-password, dashboards, admin). For any unprefixed URL, if the saved language or `navigator.language` is es/fr/de/pt/it/zh/ar, it calls `location.replace(origin + '/' + lang + '/' + path)`. `location.search` and `location.hash` are not included. Every server- or email-generated link points at the root (English) path, so these users lose the payload:
  1. **Password reset.** The Supabase recovery email lands on `/reset-password.html#access_token=…` (or `?code=` with PKCE). Deferred classic scripts and module scripts run in document order, so i18n.js (in `<head>`) runs before the module that creates the Supabase client. The browser is sent to `/fr/reset-password.html` with no token, and `updateUser` fails with "Auth session missing". Any user whose browser is in one of 7 languages, or who once opened a locale page, cannot reset a password.
  2. **Waitlist offer email.** "Claim your spot" goes to `/student-dashboard.html?claim_cohort_id=…&waitlist_id=…`. After the redirect `handleClaimWaitlistOffer` never runs (student-dashboard.html:6577-6583), so the 48h offer silently expires.
  3. **Other links.** The Stripe cancel link (`/signup.html?step=4`), email confirmation (`/signup.html#…`), `?checkout=success`, `?preview=1`, `?as=`, `?cur=` and `signup.html?role=teacher` (when entered directly) all lose their parameters.
- Fix: Keep `location.search + location.hash` when building `targetPath` (and in the switcher at 594-595). Better still, skip the auto-redirect entirely on auth and app pages (reset-password, forgot-password, signin, signup, dashboards, admin) and whenever `location.hash` or `location.search` is non-empty. Longer term, make language detection a one-time suggestion banner or a Vercel edge decision rather than a forced client redirect (plan item #15).

### WEB-02: `/ma/` locale is broken: redirect to non-existent `/xx/ma/…`, English overwrite, invalid lang
- Severity: Medium
- Location: js/i18n.js:10-19 (no `ma` in `LANGUAGES`), 50-53, 65-69, 584 (switcher list also lacks `ma`); build.js:118 (`lang="ma"`), 261 (`og:locale ar_MA`); hreflang `ar-MA` in every root page head and sitemap.xml
- Category: bug
- Confidence: high
- Scenario: `/ma/` pages are in the sitemap and hreflang (as `ar-MA`). On `/ma/index.html` the first path segment `ma` is not a known language code, so `hasLangPrefix` is false and the page is treated as an English root page:
  - With a French or Arabic browser (the likely Moroccan audience), `getActiveLang()` returns `fr`/`ar` and the page redirects to `/fr/ma/` or `/ar/ma/`, which don't exist (404).
  - With an English browser there is no redirect, but `translatePage()` runs with `en` and overwrites the prerendered Moroccan copy with English. Googlebot (excluded only from the redirect) also renders English.
  - In the language switcher on a `/ma/` page, `filename` becomes `ma/index.html`, so every choice except English leads to `/xx/ma/index.html` (404).
  - `lang="ma"` is not a valid BCP 47 tag (Marshallese at best). The `ma` dictionary is 610/643 identical to `fr` (French text), yet it is advertised as `ar-MA` / `og:locale ar_MA`.
- Fix: Either add `{code:'ma', …}` to `LANGUAGES` and to the switcher's `langCodes` (and map its `lang` attribute to `fr-MA` or `ar-MA` according to the actual content language), or drop `/ma/` from the build, sitemap and hreflang until real Moroccan content exists. Make build.js emit a valid `lang` and `og:locale` that match the content.

### WEB-03: Unpinned third-party script chain (vvkey.io) runs on every marketing page with access to the Supabase session
- Severity: Medium
- Location: index.html:27-28; about-us.html:23-24; services.html:22-23; corporate.html:170-171; contact.html:25-26; 404.html:27-28 (also careers.html, careers-teachers-section.html, tiers.html and all generated locale copies)
- Category: other
- Confidence: high
- Scenario: Each page loads two scripts:
  - `cdn.prod.website-files.com/…/vvprocess-1.1.0.js`, with no SRI. Its content is a config object for an external OIDC tenant (`VV_ISSUER_URL: https://dev-mmvzfo.vvkey.io`, `VV_CLIENT_ID`, Webflow user/site IDs).
  - `cf.vvkey.io/vvbootstrap.js`. It carries an `integrity` hash, but its whole body is `document.createElement('script')` → `https://cf.vvkey.io/bundle_wfsrv_latest.js`, appended to `<head>` with **no SRI** and a mutable `latest` tag. The SRI on the bootstrap therefore protects nothing.

  The bundle runs first-party on alimun.com, the same origin where supabase-js keeps the session in `localStorage['alimun-auth']`. A signed-in student or teacher who visits the homepage or pricing page runs whatever vvkey.io serves that day. If that vendor is compromised or misbehaves, it can read the access/refresh token and act as the user, including an admin token for the owner. It is a leftover Webflow app pointing at a `dev-` tenant, provides no feature the site uses, is not disclosed in the GDPR/cookie pages, and loads before cookie consent.

  Related unpinned or no-SRI third-party code:
  - `ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js` (no SRI) on the same pages.
  - `cdn.jsdelivr.net/npm/@supabase/supabase-js@2/…` (floating major, no SRI) on reset-password.html:69 and other auth pages, outside this area; flag for the auth reviewer.
- Fix: Delete the two `vvprocess`/`vvbootstrap` lines from every root HTML, then `npm run build`. Self-host the webfont loader or replace it with a `<link>` to Google Fonts (or self-host Inter). Pin supabase-js to an exact version with SRI or self-host it. Add a CSP (report-only first) whose `script-src` allow-list excludes vvkey.io.

### WEB-04: Webflow forms (newsletter, "Reserve your spot", contact form) send visitor PII to Webflow, not to Alimun
- Severity: Medium
- Location: index.html:155-163 and 890-898; about-us.html:457; services.html:718; corporate.html:592; contact.html:137 (contact form: first/last name, email, phone, message) and 245; handler in js/webflow.js (no `action` + `data-wf-site` → `https://webflow.com/api/v1/form/68d948d03b6c9f2bbbac3e5b`)
- Category: bug
- Confidence: high
- Scenario: All these forms have `method="get"` and no `action`. webflow.js sees `data-wf-site` on `<html>` and posts the fields to Webflow's form API for site `68d948d03b6c9f2bbbac3e5b`. Two outcomes are possible:
  - The Webflow site/plan is gone, so the user sees "Oops! Something went wrong".
  - Webflow accepts the post, so the user sees "Thank you!" and the lead lands in a Webflow inbox nobody reads, with Webflow acting as an undisclosed processor of name/email/phone.

  Either way nothing reaches Supabase or Resend. The homepage CTA "Reserve your spot", the about-page "Join the waitlist" and the FAQ promise of a waitlist invitation all route to these forms, so waitlist signups are lost (plan item #14; confirmed here that the payload leaves to webflow.com).
- Fix: Point the forms at an existing API handler via a new `?action=` (for example `api/waitlist/*` or the email handler; no new function file), with server-side email validation, rate limiting and Turnstile. Drop the `w-form` classes and handle success/failure in first-party JS. Until then, remove the forms or replace them with a `mailto:` link, and remove the `data-wf-site`-driven submission.

### WEB-05: Corporate "Request a demo" form fakes success and sends nothing
- Severity: Medium
- Location: corporate.html:653-675 (form), 777-799 (`handleCorporateModalSubmit`)
- Category: bug
- Confidence: high
- Scenario: A company fills in name, corporate email and message and clicks Submit. The handler blocks 6 free-mail domains, waits 1s with `setTimeout`, shows "Request Sent. Our B2B team will email you back within 24 hours", and only `console.log`s the data ("submitted to corporate@alimun.com"). No network request is made, every B2B lead is silently dropped, and the user is told otherwise. The success text and the `alert` are also hard-coded English.
- Fix: POST to a server handler (an `?action=` on an existing function) that validates and emails via Resend, and show success only on a 2xx response with an error state otherwise. Until that exists, replace the modal with a `mailto:` link.

### WEB-06: Cookie consent is cosmetic, and the cookie/GDPR policies don't match what the site loads
- Severity: Low
- Location: js/cookies-banner.js:434-441 (`applyConsent` only sets `window.ALIMUN_CONSENT` and dispatches `alimun-consent-updated`; no listener exists anywhere in the repo); cookies.html:180-210 (cookie table); gdpr.html:150-245 (sub-processors); index.html:910 (Launchory badge)
- Category: other
- Confidence: high
- Scenario: Whatever the visitor chooses ("Reject All" included), every third-party request fires on page load before the banner even appears:
  - vvkey.io bundle (see WEB-03)
  - Google webfont loader plus fonts.googleapis/gstatic
  - api.fontshare.com
  - the Launchory badge image (`launchory.app/api/badge/alimun`, which receives IP and Referer)
  - Webflow CDN jQuery

  The cookie policy lists Google Analytics `_ga/_gid`, which is not on the site, and omits the real third parties. The GDPR page's sub-processor list omits the AI providers that receive student essays (Gemini/Groq/Anthropic via `/api/ai`), Webflow (form data, WEB-04) and vvkey. Also:
  - The banner and modal are English-only on all locale pages.
  - `JSON.parse(localStorage…)` at 387 and 395 is unguarded, so a corrupted value makes the "Manage Cookies" link throw.
- Fix: Remove the non-essential third parties (WEB-03), self-host fonts, and gate any future analytics/marketing script on `ALIMUN_CONSENT` / `alimun-consent-updated`. Rewrite the cookie table and the sub-processor list to match reality, including the AI provider(s), Daily, Resend and Stripe. Wrap the `JSON.parse` calls in try/catch. Add the banner strings to translations.js.

### WEB-07: `data-i18n-html` interpolation re-parses `data-i18n-var-*` values as HTML (double decoding defeats escaping)
- Severity: Low
- Location: js/i18n.js:229-237 with 265-277; build.js:42-54 and 138-145; current callers signin.html:225 (`data-i18n-var-name="${name}"`, teacher `full_name`) and signup.html:1129 (`fd.name`)
- Category: xss
- Confidence: high
- Scenario: `interpolateVariables` reads the attribute with `getAttribute` (already entity-decoded) and the result is assigned with `element.innerHTML`. Even if a caller correctly escapes the name when writing the attribute (`&lt;img onerror=…&gt;`), i18n.js decodes it and injects live markup. Today both callers put the user's own name into their own page, and the surrounding template already injects `${name}` unescaped, so this is self-XSS (the outer template is the auth reviewer's finding). The i18n sink means fixing those templates with `escapeHtml` alone is not enough. Any future dashboard use of `data-i18n-var-*` with another user's data (classmate, teacher name) becomes stored XSS.
- Fix: In `interpolateVariables` (both i18n.js and build.js), HTML-escape `attrVal` before substitution when the target is `data-i18n-html`, or build the node with `textContent` for the variable parts. Add a test case with `<img src=x onerror=alert(1)>` as name.

### WEB-08: Translation key reuse overwrites the English copy at runtime (wrong text on about-us and services)
- Severity: Low
- Location: about-us.html:187, 198, 209, 220 (city eyebrow uses `about_staff_N_desc`, the same key as the bio below it); services.html:627-630 (`cta_phrase_1..4`, whose dictionary values are the homepage/about-us phrases); js/translations.js:634-637, 650
- Category: bug
- Confidence: high
- Scenario:
  - **About-us.** On every load, including English (translatePage runs for `en`), the location line under each teacher photo ("Madrid, Spain") is replaced by the full bio, so each card shows the bio twice and no city.
  - **Services.** The CTA "Learn Together / Daily Cohorts / Real Feedback / Speak with Confidence" is replaced by "Want to move abroad? / land that job? …" in every language.
- Fix: Give the eyebrows their own keys (`about_staff_N_city`) and the services phrases their own keys (`services_cta_phrase_N`), then rebuild.

### WEB-09: Missing translation keys outside the marketing pages; hard-coded English on marketing pages
- Severity: Low
- Location: js/translations.js (dictionaries: en 828 keys, it 828, es/fr/de/pt/zh/ar/ma 643 each); pages listed below
- Category: bug
- Confidence: high
- Scenario: Every `data-i18n*` key used by the 9 assigned pages exists in all 9 locales. Other root pages fall short:
  - **Missing in every locale, including en (28 keys):** forgot-password.html 8 (`forgot_*`), reset-password.html 10 (`reset_*`), signin.html 4 (`signin_brand_*`, `auth_forgot_password`), signup.html 3 (`signup_brand_*`), careers-teachers-section.html 2 (`careers_step_4_*`), signup-success.html 1. These pages stay English on every locale.
  - **Missing in es/fr/de/pt/zh/ar/ma (present in en/it):** student-dashboard.html 50 keys, teacher-dashboard.html 46, signup.html 1 (`signup_goal_label`), plus 20 `t()` keys (`student_opt_in_*`, `teacher_grade_*`, …). Dashboards come out in mixed languages.
  - **`t()` keys missing from en:** 4 in teacher-dashboard.html (`teacher_ai_unavailable`, `teacher_lbl_score`, `teacher_lbl_feedback`, `teacher_ai_hw_failed`). These pass English fallbacks, so there is no visible key leak.
  - **Hard-coded English with no `data-i18n` on marketing pages:**
    - footer newsletter heading, copyright and legal links on about-us, services, corporate and contact (index has keys)
    - contact.html heading, intro, social labels and visual overlay
    - index.html:799-802 CTA phrases
    - corporate modal success text and alert
    - the whole cookie banner
    - cookies/gdpr/terms body (these 3 pages don't load i18n.js)
    - `<title>`/meta on all locales (plan #15)
- Fix: Add the 28 keys to `en` and translate them. Backfill the 185 keys missing from the 7 non-English locales. Add keys to the hard-coded marketing strings. Add a CI check (the script described above) that fails when a `data-i18n*`/`t()` key is missing from any locale.

### WEB-10: Invented people, history and statistics on marketing pages (against CLAUDE.md copy rules)
- Severity: Low
- Location: about-us.html:180-228 (four named teachers with stock avatars and "18/22/15/20 years" bios), 140-170 (timeline 2023-2026, "Private beta with our first 200 learners"); corporate.html:287 and 381 (`corporate_slide_2`, `corp_huge_slide_2`: "94% of assignments fail due to language barriers"); index.html:251-280 ("100 students joined", "6 teachers ready", "100 spots left", 50% bar; plan item #13); index.html:612 and 640 FAQ "unlimited daily drop-in sessions", which contradicts the tier limits of 1-3 sessions/week shown on the same page
- Category: other
- Confidence: high
- Scenario: Visitors and paying customers in EU/CA markets read fabricated teachers, counts and statistics, which creates consumer-protection exposure. CLAUDE.md requires "No invented stats, testimonials, badges … numbers come from the database or are removed".
- Fix: Replace with `[COPY NEEDED]` or real data (teacher cards from `public_teacher_rows()`, counts from the DB), remove the 94% claim, and align the FAQ with the tier limits. Update translations.js and rebuild.

### WEB-11: 404 page renders unstyled for nested URLs, including the blocked-path routes
- Severity: Low
- Location: 404.html:10-16, 38, 50-51 (relative `css/…`, `images/…`, `js/webflow.js`); vercel.json routes that `dest` to `/404.html`
- Category: bug
- Confidence: medium
- Scenario: For `/supabase/x`, `/fr/does-not-exist` or `/a/b`, the 404 body is served at the original URL, so `css/normalize.css` resolves to `/supabase/css/normalize.css` or `/fr/css/…`. Those 404 too, and the page shows unstyled with a broken logo. Under `/supabase/*` every asset request is itself routed to 404.html. The page also loads the vvkey scripts (WEB-03). To confirm, request `/fr/nope` on a preview deploy and check the network tab.
- Fix: Use root-relative paths (`/css/…`, `/images/…`, `/js/webflow.js`) in 404.html and remove the vvkey lines.

### WEB-12: Dead links and placeholders on marketing pages
- Severity: Low
- Location: social icons `href="#"` in every footer (e.g. index.html:915-930); contact.html:118-131 Instagram/LinkedIn/TikTok `href="#"`; footer brand link `href="images/alimun.svg"` (index.html:825 and every page) opens a raw SVG; index.html:574 `mailto:info@help.com` (shown text says info@alimun.com; replaced at runtime by the translation, but present for no-JS clients and crawlers)
- Category: bug
- Confidence: high
- Scenario: Clicking a social icon jumps to the top of the page, clicking the "ali mun" footer brand opens an SVG file, and crawlers or no-JS users email the wrong domain.
- Fix: Use real profile URLs or remove the icons, point the brand link to `index.html`, and fix the mailto.

### WEB-13: robots.txt rules don't match clean URLs
- Severity: Low
- Location: robots.txt:4-17; vercel.json `cleanUrls: true`
- Category: other
- Confidence: high
- Scenario: The rules disallow `/admin.html`, `/signin.html`, `/student-dashboard.html` and so on, but every internal link and canonical uses the clean form (`/admin`, `/fr/student-dashboard`), which these rules don't match. Crawlers can therefore fetch and index the app shells. `forgot-password` and `reset-password` are not listed at all. The sitemap itself is fine: all 95 URLs exist and none are app pages.
- Fix: Add `Disallow: /admin`, `/signin`, `/signup`, `/signup-success`, `/student-dashboard`, `/teacher-dashboard`, `/forgot-password`, `/reset-password`, `/careers-teachers-section` and their `/*/…` forms (prefix match covers `.html`). Better still, add `<meta name="robots" content="noindex">` to those pages.

### WEB-14: build.js and verify.js cannot act as CI gates
- Severity: Info
- Location: build.js:128-172 (missing keys silently keep English; exits 0); verify.js:5-11 (only the 5 `it/corsi-*` pages), 362-369 (never sets a non-zero exit code, writes `verification-results.json` into the repo root)
- Category: other
- Confidence: high
- Scenario: Neither script fails on missing translations, broken links or bad markup, so the Phase 2 "build must succeed" check passes regardless. Build output is deterministic: a clean `node build.js` reproduces the committed locale folders byte for byte (0 changed files), so the planned `git diff --exit-code` check will work.
- Fix: Have verify.js iterate all root pages and locale folders, exit 1 on any broken asset or missing key, and write its report to a temp/ignored path. Use it, plus the key-coverage check from WEB-09, in CI.

---

## Coverage
| File | Lines read |
|---|---|
| index.html | 1-943 (all; inline scripts at 16-17, 506-563 checked) |
| about-us.html | 1-508 (all) |
| services.html | 1-769 (all; inline Webflow animation styles read, long transform `style` attributes skimmed) |
| corporate.html | 1-823 (all, incl. inline script 686-821 and modal 640-680) |
| contact.html | 1-296 (all) |
| cookies.html | 1-291 (all) |
| gdpr.html | 1-261 (all) |
| terms.html | 1-241 (all) |
| 404.html | 1-52 (all) |
| js/i18n.js | 1-684 (all) |
| js/translations.js | 1-6402: structure (9 locale blocks at lines 2, 857, 1527, 2197, 2867, 3537, 4207, 4877, 5732), checked by script for duplicates (none), missing keys, placeholder parity, HTML in values (no script/img/iframe/on* found); values spot-read |
| js/cookies-banner.js | 1-449 (all) |
| build.js | 1-272 (all) |
| verify.js | 1-369 (all) |
| robots.txt | 1-19 (all) |
| sitemap.xml | 1-1284 (structure read; all locs/hreflangs checked by script) |
| Generated locales ar de es fr it ma pt zh | Regenerated in a temp copy (0 diff vs committed). Checked `<html lang>`, `<title>`, asset rewriting and links for the 9 assigned pages in each folder by script; read ma/index.html, de/index.html, it/index.html, fr/about-us.html, fr/index.html heads. |
| Also read for context | CLAUDE.md, docs/IMPLEMENTATION_PLAN.md §0 and Phase 2, end of docs/phase-1-db-lockdown.md, vercel.json, reset-password.html 60-200, signin.html 205-335, signup.html 730-740/945-955/1115-1150, student-dashboard.html 6574-6585, api/waitlist/send-offer.js 95-160, api/stripe.js success/cancel URL handling, js/currency.js 1-35, js/supabase/config.js 50-95, js/webflow.js form handler |

## RLS assumptions
None of the assigned files makes a client-side Supabase query: the marketing pages, i18n, cookie banner and build scripts never touch Supabase. No table needed.
