# Project Plan: Alimun Italian Landing Pages Localization & Optimization

## Architecture & Layout
- Target directory: `it/` inside the project workspace.
- Source template: `it/corsi-inglese-online.html`
- Shared assets: stylesheets in `css/`, scripts in `js/`, images in `images/`, fonts in `fonts/`.
- Clean URL design for Breadcrumb schema: e.g. `https://alimun.org/it/corsi-inglese-online` instead of using `.html`.
- Dual Track:
  - Implementation: Generate and optimize HTML landing pages.
  - E2E Testing & Verification: Review structural, validation, SEO, and visual aspects.

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|--------------|--------|
| 1 | Exploration & Analysis | Explore `it/corsi-inglese-online.html`, locate style files, analyze breadcrumb schema, testimonials, comparison table, define content templates for the 4 target languages. | None | DONE |
| 2 | Optimize English Page & Create Tedesco Page | Fix `it/corsi-inglese-online.html` (SEO, schema, comparison, testimonials, CTA, typo). Create `it/corsi-tedesco-online.html` as the first prototype localized landing page. | M1 | DONE |
| 3 | Create Remaining Pages | Create `it/corsi-francese-online.html`, `it/corsi-spagnolo-online.html`, and `it/corsi-portoghese-online.html` based on the approved Tedesco prototype. | M2 | DONE |
| 4 | Verification & Quality Review | Reviewer/Challenger validation of all 5 pages for HTML validity, visual matches, SEO tag alignment, and schema accuracy. | M3 | DONE |
| 5 | Forensic Audit | Final integrity check via Forensic Auditor to ensure no cheating, no placeholder copy, and high-quality Italian copy. | M4 | DONE |

## Interface & Structural Contracts
- All HTML pages must pass validator checks (no unclosed tags, proper nesting).
- Head tags must contain:
  - Canonical URL link matching the page's route (without `.html` for clean structure if specified, or exactly matching the canonical URL pattern).
  - Open Graph title, description, and URL metadata.
  - Alternate links (`hreflang`) targeting `it` (self) and `x-default` (default route or English page).
- Single H1 per page: Ensure no hidden H1 tags exist (e.g. logo or banner tags).
- Breadcrumb Schema: JSON-LD containing item URLs with clean paths.
- AggregateRating Schema: JSON-LD referencing testimonials with correct ratings and count matching body.
