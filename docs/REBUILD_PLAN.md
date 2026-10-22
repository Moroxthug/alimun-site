# Rebuild plan: public site in Astro, same design

Status: proposed 20 Oct 2026, waiting for the owner's approval.
Work branch: `rebuild-astro` (folder `site/`). Preview: https://alimun-rebuild-preview-1qdd.vercel.app (Vercel project `alimun-rebuild-preview-1qdd`, deploys from the GitHub repo `Moroxthug/alimun-rebuild-preview`: run `npm run build` in `site/`, copy `site/dist/` into that repo with `vercel.json` `{"cleanUrls": true}`, push to `main`)

## Why

The public site is a Webflow export. Every page is a separate copy of the design, so a new page means copying
thousands of lines by hand, nine times (one per language). That is why there are almost no pages for people to
find on Google, and why hand-made copies drift (the Italian pages kept the founding offer, fake teachers and dead
forms after the English pages were fixed). Search Console shows about 10 clicks in a year.

## Rules (owner, 19 Oct 2026)

1. **Same design, 1:1.** Every element is cut from the current Webflow export without changes: same HTML, CSS,
   animation labels (`data-wf-page`, `data-w-id`), `webflow.js`, fonts, images and videos.
2. **Nothing invented.** No new headings, eyebrow labels, colours, fonts, icons, badges, stats or copy. Anything not
   already on the site is out unless the owner asks for it. Missing copy is written `[COPY NEEDED]`.
3. **Element by element.** Each element is shown to the owner (preview link + side-by-side screenshots, desktop and
   phone) and only added once approved.
4. **Locked once approved.** `site/locked.json` stores a fingerprint of every approved block; the build fails if
   one changes. Unlocking needs the owner's request.
5. **Nothing replaces the live site** until every page in that step is approved.

## Done: the homepage proof

All 7 elements approved and locked (navigation, video hero, "Let's learn together" email section, image cards,
FAQ, bottom banner, footer). The rebuilt homepage equals the live one apart from whitespace between tags; pixel
comparisons match on desktop and phone, and any remaining difference is animation timing (the live site differs
from itself by the same amount between two loads).

## How each element is checked (same for every page)

- **Markup:** the block must appear unchanged in both the current page and the rebuilt page.
- **Pixels:** screenshots of current vs rebuilt at several scroll positions, desktop (1440) and phone (390), with
  videos paused on the same frame. A difference only counts as noise if the current site differs from itself by
  the same amount.
- **Behaviour:** forms post the same data, links point to the same addresses, menus/FAQ/hover states open the same,
  no browser errors.

## Steps

### Step 0, today, on the current site (independent of the rebuild)
Translate the `<title>`, `description`, `og:` and `twitter:` tags of the language pages (`/fr/`, `/es/`, ...),
which are English everywhere today. Translation of the existing English text only, no new claims. Goes live through
the normal PR flow.

### Step 1: the other public English pages, one page at a time
Order by importance for visitors and Google:

| Page | Sections | Animation data from |
|---|---|---|
| Tiers | 2 | its own Webflow page |
| Services | 5 | its own Webflow page |
| About us | 3 | shared with Careers, Corporate |
| Corporate | 5 | shared with About us |
| Careers + careers teachers section | 4 + 3 | shared with About us |
| Contact | 1 | its own Webflow page |
| Terms, Cookies, GDPR, 404 | text pages | none |

Each page: elements shown and approved one by one, exactly like the homepage. Elements already approved on another
page (navigation, footer) are reused and not re-reviewed. Owner can ask for a whole page at once instead of element
by element once the method is trusted.

Known limit: Webflow ties animations to the page they were made on. A section can be reused on any page that uses
the same Webflow page's animation data (the Italian course pages already do this with the homepage's). Mixing
sections from two different Webflow pages on one new page needs that section's animation re-created by hand; any
such case is shown to the owner first.

### Step 2: all languages from the same blocks
- The blocks keep their translation keys (`data-i18n`). The build fills them from `js/translations.js`, the same
  way `build.js` does today, so every language gets exactly the same design.
- New: translated `<title>`, description and social tags per page and language, `lang`/`dir` (Arabic right to
  left, as today), canonical and hreflang links, and an automatic sitemap.
- The hand-made Italian pages are replaced by the shared blocks, so they can no longer drift. Their extra Italian
  text is kept only where it is still true.
- Check: each language page is compared with its current version the same way (layout identical; text differs only
  where the current page is still untranslated or wrong).

### Step 3: switch over (no downtime, same addresses)
- Vercel builds `site/` and serves its output; `api/` functions, `vercel.json` headers and redirects stay as they are.
- The app pages (sign in, sign up, dashboards, admin, password reset) are copied over unchanged. They are not part
  of the redesign.
- Every current address keeps working (`/tiers`, `/tiers.html`, `/fr/tiers`, ...), so Google loses nothing.
- Before switching: full smoke test of the current site against the preview (all pages, all languages, forms,
  signup, checkout button, dashboards load). Rollback = redeploy the previous version in Vercel (one click).

### Step 4: new pages people search for
Course pages built from the approved blocks, like the Italian course pages but without the false claims removed on
16-19 Oct. Facts only: real prices (EUR 24 / 59 / 109 / 269 and local currency), levels A1-C2, how classes work,
FAQ from existing answers.
- **Owner decides first:** which languages get a course page. Only English and German classes are open today
  (`LIVE_LANGUAGES` in `signup.html`); the others are waitlist-only, so their pages would say "join the waitlist".
- **Owner provides or approves the copy.** Where text is missing it is marked `[COPY NEEDED]`, never invented.
- One template, filled per course and per site language, so 1 approved design gives every combination.

### Step 5: Google basics after the switch
Submit the new sitemap in Search Console, check indexing of every language, fix what Search Console reports. The
owner shares a Search Console export (Performance: queries and pages, 12 months) so pages can be chosen from real
data. Ahrefs on the current plan cannot read Search Console.

## Not in this plan
- No change to the dashboards, admin, payments, database or emails.
- No new visual design. A redesign would be a separate decision with mockups, per the rules above.

## Open decisions for the owner
1. Approve this plan and the order of Step 1.
2. Element-by-element review for every page, or per page once trusted.
3. Which languages get course pages (Step 4).
4. Keep or delete the public preview address after the switch.
