# Alimun — working rules for Claude sessions

Plan of record: `docs/IMPLEMENTATION_PLAN.md`. Public-site rebuild (Astro, same design): `docs/REBUILD_PLAN.md`; blocks listed in `site/locked.json` are owner-approved and must not change without the owner's request. Progress log: `docs/PROGRESS.md` (append an entry at the end of every session). Blog: `docs/BLOG_PLAN.md` (new articles are data files using one of the four locked templates).

## Project
- Static site (Webflow export, being cleaned up) + Vercel serverless functions in `api/` + Supabase (project `dgaiasmefcbrtzqwdyri`, eu-west-1) + Stripe (live) + Daily.co + Resend.
- `main` auto-deploys to production at https://alimun.com. **Owner decision (20 Oct 2026): no pull requests. Commit and push directly to `main`** after the local checks in "Verify before claiming done" pass, then confirm the change is live. Database changes: apply them yourself through the Supabase connector (it times out on large batches, so run one statement at a time) and verify; only hand SQL to the owner if that fails.
- Owner and admin login: bchysfpol@gmail.com (admin via `app_metadata.role`).

## Must-follow
- **Root HTML is the source; locale folders are generated.** After editing any root `*.html`, run `npm run build` and commit the regenerated `ar de es fr it ma pt zh` copies. Locale-only hand-made pages are in `build.js`'s skip list.
- **Translations.** Edit only `js/translations.js`. `npm run build` splits it into `js/i18n/<lang>.js` (public text) and `js/i18n/<lang>.app.js` (dashboard-only text); commit those generated files. Pages load English plus their folder's language; `js/i18n.js` fetches another active language on demand.
- **Functions.** The owner moved Vercel to Pro (23 Oct 2026), so the 12-function Hobby cap no longer applies. A new file under `api/` is fine when a feature is clearly separate; otherwise keep adding `?action=` to the existing handler. Do not split working handlers just because you can.
- **Roles.** Never trust `user_metadata` for authorisation. Admin = `app_metadata.role === 'admin'` (client gate and server check) and `public.is_admin()` in SQL. Every API action verifies the Supabase JWT server-side.
- **Escaping.** Anything from the database, the user or the AI that goes into `innerHTML` passes through `escapeHtml`; URLs in `href/src` must be https and validated.
- **Database changes** go in `supabase/migrations/YYYYMMDDHHMM_<name>.sql`, idempotent, ending with a verify query. Show the plan before applying to production. Never delete production data without the owner's explicit yes. If MCP write tools are blocked, the owner runs the file in Supabase → SQL Editor.
- **Secrets** never in client code or commits. Only the publishable Supabase key and `pk_live_` Stripe key may appear in the browser.
- Line endings: the repo is checked out with CRLF on Windows; do not mass-convert files.

## Design and copy rules
- Only elements that exist on the current homepage: Coolvetica Condensed + Satoshi (`fonts/`), ink `#080808`, lime `#ceff65`, white, bone `#eeeeec` / `#f0efe9`, existing radii, images, logos and copy. No new colours, fonts, icon sets, illustrations, gradients or decorative elements without owner approval.
- **No AI branding (owner, 24 Oct 2026).** Alimun is not marketed as an AI product. Public copy does not mention AI: say "your teacher corrects your homework", "exercises with instant feedback", "homework grades drafted for you to check" (teachers). Exceptions: the legal pages (Terms, Privacy/GDPR) keep their AI disclosures; dashboards may name features as they are.
- **Dashboards and drawings (owner, 24 Oct 2026):** see `docs/DASHBOARD_PLAN.md`. The dashboards, exercises and learning material may use the approved drawing cast (Alimun book character, Alimun zoo, language buddies, fantasy and everyday friends, recoloured Open Doodles and Open Peeps, thought and speech bubbles) and its palette: forest #1a443c, gold #d5af33, coral #ff9f8a, mint #9fd6c7, sunflower #ffd166 plus soft tints and natural skin and hair tones, alongside the site colours. One loader everywhere (the owner's Alimun loader). Each dashboard step is confirmed by the owner before the next.
- No emojis. No eyebrow/kicker labels above headings. No invented stats, testimonials, badges, logos or counters; numbers come from the database or are removed. Missing copy is written as `[COPY NEEDED]`, not invented.
- **Banned (owner, 22 Oct 2026):** tags/chips/pills/badges (small outlined labels holding one word or name), numbered lists and numbered steps (01, 02, 03, "1 2 3 4", step counters like "04 / 06"), checklists and bullet lists of short items. Say it in sentences instead (e.g. "practice in the format of B2 First, C1 Advanced and IELTS"). This applies to new and redesigned sections; flag any that remain in existing blocks to the owner.

## Verify before claiming done
- `npm run build` passes; inline scripts and `api/` files pass `node --check`.
- Dashboards boot locally with `?preview=1` and no console errors (`npx serve .`).
- Production smoke test in `docs/IMPLEMENTATION_PLAN.md` §5 after any deploy.
