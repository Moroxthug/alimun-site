# Blog and SEO plan

Status: built 26 Oct 2026 after the owner's answers (below). Templates locked in `site/locked.json` on the owner's request.

## Where SEO stands today (checked on the live site, 26 Oct 2026)

- Live: 141 pages in `sitemap.xml`. The homepage, Tiers, Services, About, Corporate, Careers, Contact, legal pages and the level test exist in nine languages. Course pages exist for six course languages in every site language (for example `/english-course-online` and `/it/corsi-inglese-online`).
- Done: hreflang between languages, canonical links, translated titles and descriptions, `/ma/` as `fr-MA`, FAQ structured data on course pages, and a robots file that keeps the app out of search.
- Missing:
  - Content that answers the questions people search for before they buy. That is what a blog adds.
  - `Course` structured data with real prices on the course pages.
  - Links from the course pages to related reading.
  - Search Console data to choose topics from.
- Ahrefs: the connected plan refuses keyword and site data ("Insufficient plan"). Topics below come from what the product teaches, not from volumes. They will be checked against Search Console once the owner shares an export, or against Ahrefs on a higher plan.
- Language redirect (`js/i18n.js`): a visitor whose browser language differs from the page is sent to that language's copy. Bots are not redirected. A blog article that exists in one language only must not be redirected to a missing copy (see the template rules).

## The templates (built only from approved blocks and existing styles)

No new colours, fonts, icons or decorative elements. Built in Astro under `site/` like the course pages: one route, one data file per article, every language from the same blocks.

### Article page `/blog/<slug>` (and `/<lang>/blog/<slug>`)
- Navigation and footer: the approved legal-page blocks.
- Header: the title (the site's H1 style), the lead paragraph in the guide's lead style, and one small line with the date last updated and the author.
- Body: the course pages' guide typography (`blocks/course/guide.html`):
  - section headings, paragraphs and the lime marker on key phrases;
  - tables in the same ink and bone colours where a comparison needs one, for example the CEFR levels;
  - no table of contents, numbered steps, bullet lists of short items or chips (owner's rules).
- A short paragraph within the text pointing to the matching course page.
- FAQ at the end, using the course FAQ block, only when the article has real questions. FAQ structured data is added only when the FAQ is visible.
- The bottom banner from Tiers (`blocks/tiers/s02.html`), which opens the level test.
- "Keep reading": three related articles as text cards in the existing card style. There are no photos for articles, and the drawing cast is for dashboards only.
- Structured data: `Article` (headline, dates, author, publisher Alimun) and `BreadcrumbList`.
- hreflang only between real translations of the same article; otherwise the article stands alone. The article lists its own translations, so the language switcher and the redirect never send anyone to a page that does not exist.

### Blog home `/blog` (and `/<lang>/blog`)
- Header with title and lead.
- Articles grouped by course language and then by theme, as text cards in the same style.
- Themes: levels and exams, how to learn, living and working abroad, grammar and vocabulary.
- Linked from the footer and from every course page. Every article links back to it and to its course page, so no page is orphaned.

### Data
- Files: `site/src/data/blog/<site>/<slug>.js` holds the title, description, lead, sections, FAQ, related slugs, course link, dates, author and translations.
- Build: the sitemap picks up every article with its real `lastmod`.

## Content: what to write first

Facts only, checked against the product and public sources, written for each market rather than translated word for word. No invented numbers, testimonials or promises. Each article is shown to the owner before it goes live. Only English and German classes are open, so those two languages come first. The others follow when their classes open.

- **Levels and exams:**
  - what each CEFR level means in practice (A1 to C2) for English and for German;
  - how long it takes to move up a level, and what it depends on;
  - B2 First, C1 Advanced and IELTS explained (the formats the mock tests practise);
  - Goethe certificates explained;
  - which certificate to choose for study, work or a visa.
- **Living and working abroad:**
  - German for working in Germany, Austria or Switzerland (the language levels employers and visas ask for, from official sources);
  - English for studying abroad.
- **How to learn:**
  - group or private lessons;
  - how to practise speaking between classes;
  - how to keep a routine.
- **Grammar and vocabulary** (the largest search volumes): one article per common question, such as German articles and cases, the English present perfect, or prepositions. Later, each could hold a short interactive exercise from the existing exercise engine, which competitors' articles do not have.

Suggested order: Italian, Spanish, French and Portuguese readers learning English or German, then English-language articles for Canada and the US, then German and Arabic readers.

## Other SEO work, by impact

- **Search Console and Bing (owner):** verify the domain, submit `sitemap.xml`, and share a 12-month export of queries and pages. This is the only real data available, and it decides which topics come first.
- **Course structured data:** add `Course` with real prices from Stripe to the course pages, and link the course pages to their articles.
- **Free practice pages:** public pages per level drawn from the existing books, library and exercises, such as "English B1 reading practice" or "German A2 listening". This is a large long-tail opportunity, built from content that already exists. It needs the owner's decision on how much free content is public.
- **Page speed:** measure Core Web Vitals on phones for the homepage and course pages (video hero, `webflow.js`) and fix what is slow.
- **Links from other sites (owner-led):**
  - listings in language-school directories;
  - partnerships with universities, Erasmus groups and relocation services;
  - teachers' own profiles linking to Alimun;
  - no paid link schemes.
- **Markets:**
  - decide the Canada address scheme (`/ca/` and `/ca-fr/` recommended);
  - the Morocco filing with the CNDP;
  - market pages per country after the blog base exists.
- **Timing:** new pages are usually indexed within days to weeks. Ranking for competitive terms takes months on a young domain. Volume of good pages, internal links and real links from other sites shorten that.

## Questions for the owner

- The address: `/blog` in every language, or a local word (`/it/guide`, `/es/guias`)? Recommended: `/blog` everywhere. It is short, understood in every language, and the article slugs carry the keywords.
- The author shown on articles: a real person (the owner's name or a teacher who reviewed the article) is better for Google than "Alimun". Who can be named?
- Who writes: Claude drafts each article from facts and sources and the owner approves it, or the owner and teachers provide text?
- Which site languages first: recommended Italian, Spanish, French, Portuguese and English.
- Free practice pages: yes or no, and how much of the books and library can be public?
- Search Console: can you share the export, or give access?

## The owner's answers (26 Oct 2026)

- Address `/blog` in every language; first languages English, Italian, Spanish, French and Portuguese.
- Author: the owner said "a random name for now". Not done: an invented person as author would mislead readers and search engines. Articles say "Alimun team" (per language) until the owner gives a real name; `author` and `authorUrl` in an article file set a real person.
- Claude writes the articles (facts only, sources listed). Free practice pages: yes, a small set, possibly with new content (to plan).
- "Trending" strip before the bottom banner on every page: built as "From the blog". There are no reading counts yet, so it shows chosen articles (`stripPicks` in `src/data/blog/ui.js`), then the newest; it can switch to real counts later.
- Keep the Alimun style; lock the templates and reuse them for every new article.

## Second design (owner, 26 Oct 2026: "the blog page looks absolutely horrible ... i hate it")

- The first design (black and lime typographic cards, a black course card beside the text) was replaced the same day. Now: the course pages' hero (centred title, the article's video in a rounded frame that grows on scroll), one white reading column, the FAQ, the course in the About layout (photo beside text), and white cards with rounded photos. The blog home has the About-style hero, a featured article beside its photo, then the articles as big title rows beside a photo that changes, like the homepage course list. Pictures per article come from the site's own videos (`site/src/data/blog/media.js`).
- Rule added to `CLAUDE.md`: no black backgrounds on public pages.

## How to add an article (every session)

- Pick its video in `site/src/data/blog/media.js` (by `key`).
- One file per language in `site/src/data/blog/<site>/<slug>.js`, same `key` for the translations of one article (hreflang and the language switcher follow it). Copy the shape of an existing article of the same template.
- `template` is one of the four locked templates in `site/src/blog/render.js`:
  - `guide`: long-form how-to (text, notes, quotes, tables).
  - `explainer`: levels and certificates (level cards, wide tables, FAQ).
  - `grammar`: rule explained with examples, common mistakes and a "Try it" exercise.
  - `compare`: two options side by side (two panels, table, a lime verdict card).
- Blocks: `h`, `p`, `quote`, `note`, `table`, `levels`, `panels`, `examples`, `mistakes`, `quiz`, `verdict`; `**phrase**` is the lime marker. No bullet lists, numbered steps or chips; no AI mentions; facts only, with `sources`.
- Interface text per language: `site/src/data/blog/ui.js`. A new site language needs its `ui` entry.
- The build (`npm --prefix site run build`) makes `/blog`, `/blog/<slug>`, `/<site>/blog[/<slug>]`, adds them to `sitemap.xml` and puts the strip on every page of that language. The pages are generated at deploy time and not committed.
