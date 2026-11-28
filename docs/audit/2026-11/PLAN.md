# Security audit, November 2026: plan and phase chain

Started 28 Nov 2026 on the owner's request: "a thorough audit for vulnerabilities, exploits, possible hacks ... nothing is left to chance ... create phases and after each phase automatically start a new convo". Scope: **alimun-site only** (site, `api/`, Supabase, Stripe, Daily, Resend, AI providers, `native/` and `mobile/`). Owner's choice: **fix confirmed issues and push**, following CLAUDE.md.

The previous audit (14 Oct 2026, `docs/audit/FINDINGS.md`, 123 findings) covered the code as it was then. Since then: 72+ commits, 93 new migrations, and most of the product: pricing engine and entitlements, tutor and speaking practice, help assistant, campaigns, matching, launch offers, RevenueCat, the `/app` dashboards, the native app, recordings, boards, banners, analytics. This audit covers **everything as it is now**, and re-checks the old Partial and Deferred findings.

## How every phase works (read this first, every session)

1. Read `CLAUDE.md`, this file, `docs/audit/THREAT_MODEL.md` and `docs/audit/2026-11/FINDINGS.md` (the running findings list). Pull `origin/main` first: earlier phases pushed there.
2. Do only your phase. Review the code path by path, not by grep alone; a grep hit is a lead, not a finding. Verify each finding by reading the full path (and against production read-only where it helps) before calling it real.
3. Record every finding in `FINDINGS.md`: ID `P<phase>-<nn>`, severity (Critical / High / Medium / Low / Info), title, location `file:line`, how it is exploited (concrete), fix, status (Fixed / Needs owner / Accepted / Not an issue). Severity is about what an attacker actually gains here, not theory.
4. **Fix** Critical, High and Medium code issues in the same phase; Low when the fix is small and safe. Add a unit test (`tests/unit/`) or a Semgrep rule (`.semgrep/alimun.yml`) for each fixed class of bug so it cannot come back.
5. **Database fixes:** write `supabase/migrations/YYYYMMDDHHMM_audit_<name>.sql` (idempotent, ending with a verify query), extend `supabase/tests/rls.sql`, and test locally with `supabase/tests/run-local.sh`. CLAUDE.md says to show the plan before applying to production, so **do not apply it**: list it under "Owner decisions" below. If the hole is Critical and exploitable today, also send the owner a push notification (PushNotification tool) naming the finding.
6. **Never** in any phase: delete or change production data, send email or messages to real users, make real payments or refunds, run load or denial-of-service tests, change Stripe, Daily, Resend or Vercel settings, or rotate keys (rotation is an owner decision: list it). Read-only queries against production are fine. Live probes are anonymous or use a test account you create and then remove; do not sign up with a real person's address.
7. Before pushing: everything in CLAUDE.md "Verify before claiming done" (`npm run build`, `node --check`, unit tests, the layout test when any screen changed, screenshots at 1600 and 375 px of changed screens). Commit with clear messages and push straight to `main` (owner rule; no pull request). Wait for the Vercel deploy and the CI "Deploy gate", and confirm the fix is live.
8. Update the phase table below (status, date, one-line result), append a dated entry to `docs/PROGRESS.md`, commit and push.
9. **Start the next phase automatically**, without asking the owner: call `mcp__claude-code-remote__create_session` with
   - `source_url`: `https://github.com/Moroxthug/alimun-site`, `source_revision`: `main`
   - `title`: `Security audit, Phase <N>: <name>`
   - `prompt`: `Run Phase <N> of the security audit. Read docs/audit/2026-11/PLAN.md and follow "How every phase works". When it is done, start Phase <N+1> the same way.`
   Then tell the owner in one short message what this phase found and fixed, what needs them, and that Phase N+1 has started (with its session id). If `create_session` is not available or fails, say so plainly, and send a push notification asking the owner to start the next phase with that same prompt.
10. If the phase is too big for one session, finish a coherent part, push it, mark the phase "part 1 done, continue at <file/area>" and start a new session for the rest of the same phase.

## Phases

| # | Name | Status |
|---|---|---|
| 0 | Plan and inventory | Done 28 Nov 2026 (this file) |
| 1 | Secrets, supply chain, CI and hosting config | Not started |
| 2 | Database: row security, grants, functions, storage, auth settings | Not started |
| 3 | API authorisation: accounts, classes, teachers, admin, ops, campaigns, crons | Not started |
| 4 | Money: Stripe, pricing engine, entitlements, webhooks, RevenueCat | Not started |
| 5 | AI, voice and help assistant | Not started |
| 6 | Browser side: XSS, redirects, CSP, service workers, storage | Not started |
| 7 | Integrations and abuse: Daily, recordings, email, forms, captcha, uploads, rate limits, SSRF | Not started |
| 8 | Native and store apps (`native/`, `mobile/`) | Not started |
| 9 | Live attack pass against production, regression guards, final report | Not started |

### Phase 1: Secrets, supply chain, CI and hosting config
- gitleaks (or equivalent) over the **full git history**, not just HEAD; also look by hand for service-role JWTs, `sk_live_`, `rk_live_`, `whsec_`, Daily/Resend/Google/Azure/RevenueCat keys, `CRON_SECRET`/`ADMIN_SECRET` values in code, docs, migrations, `supabase/`, `native/`, `mobile/`, `downloads/`, test files. Any real secret ever committed: Critical, owner rotates (list it).
- What the browser receives: everything under `js/`, `app/`, HTML pages, service workers. Only the publishable Supabase key and `pk_live_` may appear.
- Production exposure: request with `curl` that `/api/_lib/*.js`, `/supabase/*`, `/docs/*`, `/native/*`, `/mobile/*`, `*.md`, `*.sql`, `.env`, `package.json`, `vercel.json`, `.git/`, source maps and backup files return 404. Check `.vercelignore` and the `vercel.json` routes for gaps (new folders since October, e.g. `site/`, `tests/`, `downloads/`, `data/`).
- Dependencies: `npm audit` (root, `site/`, `native/` pub deps), lockfile integrity, unpinned CDN scripts and missing Subresource Integrity on third-party `<script>` tags, scripts loaded from domains that could be taken over.
- GitHub Actions: `pull_request_target`, untrusted input in `run:`, token permissions, third-party actions pinned by SHA, secrets exposure in logs, `post-deploy.yml`, `supabase-advisors.yml`.
- Security headers in `vercel.json`: CSP is still report-only; plan the move to enforcing (list what would break). HSTS, frame-ancestors, CORS on `/api`.

### Phase 2: Database
- Through the Supabase connector, read-only: every table in `public` (and other exposed schemas) with row security on, its policies, and grants to `anon` and `authenticated`; tables with row security off or no policies; views without `security_invoker`; every function's `SECURITY DEFINER`, `search_path` and EXECUTE grants (a definer function callable by `anon`/`authenticated` that acts on ids passed in is a finding); column-guard triggers still present on the tables listed in `docs/phase-1-db-lockdown.md`; storage buckets (public or not) and their policies; realtime publications (what can a signed-in user subscribe to?); `app_settings` and any secret stored in the database.
- Anything that reads `user_metadata`/`raw_user_meta_data` for authorisation.
- Auth settings: email confirmation, leaked-password protection, OTP expiry, redirect URL allowlist, signup restrictions, MFA for the admin.
- Run the security and performance advisors; run `supabase/tests/rls.sql` locally and extend it for every table added since October (pricing, entitlements, tutor, help, campaigns, matching, boards, banners, recordings, practice, notifications, launch, etc.).
- Re-check the old Partial findings AUTH-01, STU-11, TEA-02, TEA-07.

### Phase 3: API authorisation
Files: `api/account.js`, `auth.js`, `onboarding.js`, `enroll.js`, `withdraw.js`, `join-session.js`, `create-cohort.js`, `material.js`, `generate-notes-pdf.js`, `send-admin-email.js`, `admin/teacher.js`, `campaigns.js`, `ops.js`, `waitlist/*`, `cron-*.js`, and the `_lib` files they use. For **every** `?action=`: who may call it (none / any user / owner of the row / teacher of the class / admin), is the JWT verified server-side, is admin read from `app_metadata`, are ids from the body checked against the caller (IDOR), mass assignment of body fields into updates, unvalidated redirects, cron and secret-protected endpoints (constant-time compare, secret not in URLs or logs), signed links (expiry, single use, HMAC), errors leaking internals, GET requests that change state, CORS. Write the result as a table in `FINDINGS.md` (action, required role, verified yes/no).

### Phase 4: Money
`api/stripe.js`, `pricing.js`, `webhooks/stripe.js`, `webhooks/revenuecat.js`, `_lib/entitlements.js`, `finance.js`, `seat.js`, `subscribe.js`, `trials.js`, `tutor-packs.js`, `one-on-one.js`, `plan.js`, `pricing.js`, `launch.js`. Price, currency, country band, quantity, coupon and plan never taken from the client; country band spoofing (headers, body, VPN) and what it gains; founding seats and launch deals (race conditions, reuse, expiry); webhook signature on the raw body, idempotency, event ordering, refunds and disputes revoking access, `checkout.session.completed` with unpaid status; RevenueCat webhook auth and replay; free trials and free limits (repeated trials with new accounts or emails); tutor credit lots (double credit, negative balances); payouts to teachers (who can change bank details or amounts); admin money actions logged. Stripe connector read-only to compare with live products, prices and webhook endpoints.

### Phase 5: AI, voice and help assistant
`api/ai.js`, `tutor.js`, `speech.js`, `help.js`, `_lib/tutor-*.js`, `google-voice.js`, `free-limit.js`. Prompt injection from learner text, teacher text, homework, help articles and email content; can the model be made to reveal system prompts, other users' data, or call tools/actions beyond the caller's rights; output rendered as HTML anywhere; per-user and global cost limits (bypass by parallel calls, long inputs, many accounts, audio length); provider keys never reach the browser; audio and transcript retention matches the privacy policy; EU AI Act disclosure where people talk to an AI; help assistant answering with admin-only data.

### Phase 6: Browser side
Every root HTML page, `app/`, `js/`, `js/app/*`, `site/` blocks, blog data, service workers (`app-sw.js`, `admin-push-sw.js`). `innerHTML`/`insertAdjacentHTML`/`outerHTML`/`document.write`/jQuery `.html()` without `escapeHtml`; `href`/`src` from data not validated as https; `javascript:` URLs; `postMessage` handlers without origin checks; open redirects (`next`, `redirect`, `returnTo` parameters on sign-in, checkout return); tokens in URLs or logs; what the service workers cache (no signed-in API responses or other users' data in a shared cache); "view as" for admin; `target=_blank` without `rel=noopener`; i18n strings with HTML. Move CSP from report-only to enforcing if Phase 1's list shows it is safe; otherwise list what blocks it.

### Phase 7: Integrations and abuse
Daily: who can get a meeting token, owner rights, room names guessable, join windows, recordings access and expiry. Email (Resend): header injection, HTML injection in templates, contact and support forms as a spam relay, unsubscribe links signed, campaigns sending only to the right audience. Captcha (Turnstile) verified server-side on every public form, token reuse. Rate limits on sign-in-adjacent, contact, AI and email endpoints. SSRF: any server fetch of a URL from user input (PDF generation, materials, avatars, link previews). Uploads: file type and size checks, storage paths that include other users' ids, served content type (HTML uploads that run as alimun.com). Push notifications: who can subscribe, what they carry. Account deletion and data export remove what the privacy policy says.

### Phase 8: Native and store apps
`native/` (Flutter) and `mobile/`. Secrets or service keys in the app or its config, Android manifest (exported components, `allowBackup`, cleartext traffic, deep links and app links verification), iOS ATS and URL schemes, token storage (secure storage, not plain preferences), WebViews loading untrusted pages or exposing JavaScript bridges, RevenueCat keys (public keys only), logging of tokens, release signing files not in the repo.

### Phase 9: Live attack pass and final report
Against https://alimun.com, non-destructive: anonymous calls to every `/api` action; with the publishable key, try to read and write every table and call every function as `anon`; with a throwaway test account (created and removed in this phase), try the IDOR and privilege cases from Phases 2–4; headers and CSP live; signed-link tampering. Then: re-run every fixed finding's reproduction to confirm it is closed in production, make sure CI (Semgrep, unit tests, gitleaks, RLS tests) guards each class found, and write `docs/audit/2026-11/REPORT.md`: what was tested, every finding with status, what the owner must do (key rotations, migrations to apply, settings to change), and what remains accepted risk. This is the last phase: do not start another session; send the owner a push notification that the audit is complete.

## Owner decisions

Migrations, key rotations and settings that need the owner's yes. Each entry: finding ID, what to run or change, why, risk if left.

(none yet)
