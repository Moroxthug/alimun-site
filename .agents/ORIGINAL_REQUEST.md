# Original User Request

## Initial Request — 2026-06-28T16:18:51Z

Create four localized, SEO-optimized landing pages in Italian for learning German, French, Spanish, and Portuguese online, targeting the Italian market. Use the exact design system and visual style of the existing Italian English course landing page, incorporating feedback from the Claude assessment.

Working directory: C:\Users\Admin\Downloads\alimun web\alimun-site
Integrity mode: development

## Requirements

### R1. Visual and Style Consistency
- Match the exact styling, CSS layout, typography, and design elements of the Italian English course landing page: C:\Users\Admin\Downloads\alimun web\alimun-site\it\corsi-inglese-online.html. All CSS and resources must load correctly.

### R2. Course Pages Content & Focus (In Italian for Italian Market)
- Create the following new pages in `it/` directory:
  - `it/corsi-tedesco-online.html` (Tedesco / German) — Focus on topics like business career opportunities in DACH region, structured learning, and certification.
  - `it/corsi-francese-online.html` (Francese / French) — Focus on topics like culture, international organizations, speaking/pronunciation, and DELF/DALF certifications.
  - `it/corsi-spagnolo-online.html` (Spagnolo / Spanish) — Focus on travel, study abroad, quick communication, and DELE/SIELE certifications.
  - `it/corsi-portoghese-online.html` (Portoghese / Portuguese) — Focus on global business/relocation (Brazil/Portugal), emerging markets, conversational confidence.
- Make sure each page's content, headings, SEO keywords, schema markup, and metadata are fully customized in high-quality Italian for the respective target language.

### R3. Structural, SEO and Conversion Improvements
- Apply the Claude assessment fixes to the existing C:\Users\Admin\Downloads\alimun web\alimun-site\it\corsi-inglese-online.html and propagate these improvements to the new pages:
  - **H1 Tag**: Ensure each page has exactly one visible `<h1>` tag matching the primary keyword of that page (e.g. `<h1>Corsi di Tedesco Online...</h1>`).
  - **Typos**: Fix the `é` -> `è` typo (*"Grazie! La tua richiesta è stata ricevuta!"*).
  - **Metadata & Open Graph**: Add missing `og:title` and `og:description` to all pages. Set canonical URLs. Set correct `hreflang` tags (ensure `x-default` points to a language-neutral or English default, and `it` points to the Italian page).
  - **Clean Breadcrumb Schema**: Ensure URLs in the schema breadcrumb do not use raw `.html` extensions if possible (align with clean URLs structure).
  - **Testimonials/Social Proof**: Add 3–5 realistic student reviews/testimonials (with star ratings) to the body and include them in the page schema (Review / AggregateRating schema).
  - **Competitor Comparison**: Include a comparison table comparing Alimun to competitors (e.g. italki, Lingoda) with conversions-focused arguments.
  - **Call to Action (CTA)**: Clearly define the sign-up or free trial process (e.g., CTA for free placement test/trial lesson).

## Acceptance Criteria

### Technical validation
- [ ] Four new HTML files are successfully created: `it/corsi-tedesco-online.html`, `it/corsi-francese-online.html`, `it/corsi-spagnolo-online.html`, and `it/corsi-portoghese-online.html`.
- [ ] All four files use valid HTML and inherit the exact CSS classes, structure, and visual header/footer of C:\Users\Admin\Downloads\alimun web\alimun-site\it\corsi-inglese-online.html.
- [ ] The `é` -> `è` typo is fixed on all pages.
- [ ] Each page has exactly one `<h1>` matching the page's primary target keyword.
- [ ] Each page has unique, high-quality, professional Italian copy tailored to its specific target language.
- [ ] Canonical URLs, hreflang tags, and OG metadata (title, description) are properly updated for all pages.
- [ ] A comparison table and customer testimonials are present on all pages (including the English page).
- [ ] Clean URLs (without `.html`) are used in the Breadcrumb schema.
