## 2026-06-28T16:26:14Z
**Context**: Milestone 3: Create Remaining Pages
**Identity**: You are the Worker agent. Your working directory is C:\Users\Admin\Downloads\alimun web\alimun-site\.agents\worker_milestone3. Your workspace is C:\Users\Admin\Downloads\alimun web\alimun-site.
**Objective**:
Create the remaining three localized landing pages in the `it/` directory:
1. `it/corsi-francese-online.html` (French)
2. `it/corsi-spagnolo-online.html` (Spanish)
3. `it/corsi-portoghese-online.html` (Portuguese)

For each page, duplicate the layout structure of the optimized `it/corsi-inglese-online.html` and apply the localized content, SEO metadata, schemas, and assets drafted in the explorer's report at C:\Users\Admin\Downloads\alimun web\alimun-site\.agents\explorer_milestone1\analysis.md.

Specifically:
- Head tags metadata: Set unique Title, Description, Open Graph properties (og:title, og:description, og:url), canonical link (clean URL format, no `.html` extension), and hreflang links pointing to the page itself and x-default (`https://alimun.com/`).
- JSON-LD Schemas:
  - In `BreadcrumbList`, update the 3rd item's name and clean URL.
  - In `Course`, change the name, description, ratingValue, reviewCount, and review body.
  - In `FAQPage`, replace the mainEntity array with the 8 language-specific FAQs in Italian.
- Page Body text:
  - H1 Tag (exactly one H1, matching the primary language target).
  - Hero Subtext.
  - Hero Price Note.
  - Stats Bar numbers and descriptions.
  - Section 3 (Il problema italiano): Eyebrow, Heading, and 3 paragraphs.
  - Section 5 Comparison Table: Update the 4th competitor name (`Alliance Française` for French, `Instituto Cervantes` for Spanish, `Scuole Tradizionali` for Portuguese) and compare with Alimun.
  - Section 6 (Career & Life Benefits): Heading, paragraphs, and Goal Tags.
  - Section 8 (CEFR Levels): Descriptions for A1 to C2.
  - Section 8B (Teachers): 4 teacher profiles (names, roles, descriptions).
  - Section 11 (Testimonials): 3 testimonials (quotes, author names, location).
  - Section 13 (Bottom CTA): 4 animated phrases.

Verification:
- Verify that all three files are successfully created and saved as UTF-8 (without BOM).
- Run the build using `node build.js` to ensure the project compiles with no errors.
- Run a Cheerio HTML validation script to ensure that there are no unclosed HTML tags and that the pages parse cleanly.
- Create a handoff report in your folder `handoff.md` and report back when finished.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.
