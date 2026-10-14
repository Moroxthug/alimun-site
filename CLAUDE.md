# Alimun — working rules for Claude sessions

Plan of record: `docs/IMPLEMENTATION_PLAN.md`. Progress log: `docs/PROGRESS.md` (append an entry at the end of every session).

## Project
- Static site (Webflow export, being cleaned up) + Vercel serverless functions in `api/` + Supabase (project `dgaiasmefcbrtzqwdyri`, eu-west-1) + Stripe (live) + Daily.co + Resend.
- `main` auto-deploys to production at https://alimun.com. Work on a branch `phase-N-<slug>`, open a PR, merge only when the phase's acceptance checks pass.
- Owner and admin login: bchysfpol@gmail.com (admin via `app_metadata.role`).

## Must-follow
- **Root HTML is the source; locale folders are generated.** After editing any root `*.html`, run `npm run build` and commit the regenerated `ar de es fr it ma pt zh` copies. Locale-only hand-made pages are in `build.js`'s skip list.
- **Function cap.** `api/**/*.js` currently has 12 functions = Vercel Hobby limit. Do not add a new file under `api/`; add an `?action=` to an existing handler instead, unless the owner confirms the Pro plan.
- **Roles.** Never trust `user_metadata` for authorisation. Admin = `app_metadata.role === 'admin'` (client gate and server check) and `public.is_admin()` in SQL. Every API action verifies the Supabase JWT server-side.
- **Escaping.** Anything from the database, the user or the AI that goes into `innerHTML` passes through `escapeHtml`; URLs in `href/src` must be https and validated.
- **Database changes** go in `supabase/migrations/YYYYMMDDHHMM_<name>.sql`, idempotent, ending with a verify query. Show the plan before applying to production. Never delete production data without the owner's explicit yes. If MCP write tools are blocked, the owner runs the file in Supabase → SQL Editor.
- **Secrets** never in client code or commits. Only the publishable Supabase key and `pk_live_` Stripe key may appear in the browser.
- Line endings: the repo is checked out with CRLF on Windows; do not mass-convert files.

## Design and copy rules
- Only elements that exist on the current homepage: Coolvetica Condensed + Satoshi (`fonts/`), ink `#080808`, lime `#ceff65`, white, bone `#eeeeec` / `#f0efe9`, existing radii, images, logos and copy. No new colours, fonts, icon sets, illustrations, gradients or decorative elements without owner approval.
- No emojis. No eyebrow/kicker labels above headings. No invented stats, testimonials, badges, logos or counters; numbers come from the database or are removed. Missing copy is written as `[COPY NEEDED]`, not invented.

## Verify before claiming done
- `npm run build` passes; inline scripts and `api/` files pass `node --check`.
- Dashboards boot locally with `?preview=1` and no console errors (`npx serve .`).
- Production smoke test in `docs/IMPLEMENTATION_PLAN.md` §5 after any deploy.
