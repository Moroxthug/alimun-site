# Alimun help section — plan (10 Nov 2026; nothing built yet)

Owner, 10 Nov 2026: "we need to create a help section, managed by our ai assistant" and then "yes write the plan". Each part below is shown to the owner and confirmed before the next starts, like the tutor parts (`docs/AI_TUTOR_PLAN.md`). Open questions are at the end; until the owner answers, each part says what it assumes.

## 1. What people get
Today help is the six homepage FAQs, the course pages' FAQs (`site/src/data/course-faq.js`), the Contact form and messages to a class teacher. Questions about the account itself (billing, joining a class, plan changes, tutor minutes, homework) all end up in the owner's inbox.

The help section has two halves that work together:

- **Help articles.** Short pages that answer one question each ("How do I join my live class?", "How do I cancel or change my plan?", "What happens to my tutor minutes at the end of the month?"), grouped by subject (classes, plans and billing, the dashboard, the tutor, homework and practice, account and privacy, for teachers). They are written from how the product actually works and approved by the owner before they are published. They are in the nine site languages like the blog.
- **The help assistant.** A box at the top of Help where a person asks in their own words. It answers in a few sentences, in the person's language, only from the published articles (and, inside the dashboards, from that person's own account), and links the article it used. When it does not know, or the person asks for a person, it hands the conversation to the owner (section 4).

"Managed by the assistant" means it keeps Help up to date for the owner to approve: it notices questions it could not answer well and drafts the missing article or a correction to an existing one. Nothing it writes is published without the owner's yes (the "no invented copy" rule).

## 2. Where it lives
- **Student and teacher dashboards** (`#/help` in both, in the menu next to Settings). Here the assistant may also use the signed-in person's own data, read on the server under their own rights: plan and renewal date, next class and its join time, tutor minutes left, homework due, a teacher's next sessions and pending homework to mark. Example: "When is my next class?" is answered with the real date, not with an article.
- **A public page `/help`** (and `/<lang>/help`) with the articles and the assistant, for visitors and anyone signed out. Public answers use the articles only, never account data. Linked from the footer and the Contact page.
- Assumed until the owner answers question 1: the dashboards first (part 2), the public page after (part 4).

## 3. How it answers (server side, in one paragraph)
Every question goes to a new action on the existing handler, `/api/ai?action=help` (no new function file needed). The server picks the few articles that match the question (a keyword and title search over the published articles of the person's language, falling back to English; a vector search only if this proves too weak), adds the person's account facts when signed in, and asks the model for a reply in a fixed JSON shape: the answer, the article ids it used, and whether it is sure. The instructions are server text only; nothing from the browser is used as instructions. Rules in the instructions: answer only from the articles and account facts given; never promise refunds, discounts, dates or exceptions; never quote prices that are not in an article; say "I am not sure" and offer a person instead of guessing. The reply is checked on the server (cited ids must be among the articles given; the answer is plain text, escaped on the page). Model: the cheapest one already used in `api/ai.js` that answers well (Groq first, Gemini as fallback), under the existing per-user and daily budgets (`AI_USER_DAILY_BUDGET_USD`, `AI_DAILY_BUDGET_USD`), every call logged in `ai_usage` with feature `help`. Unlike the other actions, `help` does not require a paid plan: free and signed-out people need help too. Signed-out questions pass the captcha (`api/_lib/captcha.js`) and a per-address limit.

## 4. Handing over to a person
A "Talk to a person" link under every answer, and offered by the assistant itself when it is not sure. It opens a short form with the conversation attached. Signed-out people add their email. The request lands in a new Admin page, **Help requests** (open, answered, closed), and the owner gets an email through Resend (`api/_lib/email.js`). The owner's reply goes back by email and, for signed-in people, as a notification on the bell (`notifications`, Growth step 4a). Assumed until question 2 is answered: Admin inbox and email both.

## 5. Keeping Help up to date
- Each question is stored with the article ids used, whether the assistant was sure, and the person's "Did this help? Yes / No" if they give it. Signed-out questions are stored without a name or address; all questions are deleted after 90 days (same as tutor transcripts).
- Once a week (a cron job like `cron-reminders`), the assistant groups the questions it could not answer, or that got a "No", and drafts a new article or a change for each group. Drafts appear in Admin → Help → Drafts with the questions that led to them. The owner edits, approves or discards them. Approved articles are published in English and translated into the other languages for the owner to approve, like the blog.
- Admin → Help also lists the most asked questions and the articles that are used most and least, from the database only.

## 6. Design and copy
- Same site fonts and colours; white and bone backgrounds, lime for the ask button and the answer card; no black panels. In the dashboards, the dashboard's own style and one of the approved drawings beside the box.
- Answers in sentences. No chips, tags, numbered steps or short bullet lists in the articles or in the assistant's replies (the instructions say so, and the server rejects or flattens lists).
- **No AI branding on public pages.** The public page says "Help" and "Ask a question"; it never says AI or assistant. The Privacy page gets a sentence that help questions are answered automatically by a language model and may be read by Alimun staff (legal pages keep their AI disclosures). In the dashboards the box may be named as it is.

## 7. Parts (each shown to the owner before the next)

**Part 1. The first articles.** About 25 to 35 articles in English, drafted from the code and existing pages only (Stripe plans and the Terms for billing and cancelling, `api/enroll.js` and the dashboards for classes, `docs/AI_TUTOR_PLAN.md` for tutor minutes, Settings for account and privacy). Anything that cannot be confirmed from the code or the Terms (refund exceptions, response times, policies not written anywhere) is left out and listed in `docs/PROGRESS.md` for the owner. Stored as data files like the blog (`site/src/data/help/<lang>/<slug>.js`: title, subject, body, related articles, updated date), so the public page and the assistant read the same text. The owner reads and approves them; then the other eight languages.

**Part 2. Help in the dashboards.** `#/help` in the student and teacher dashboards (`js/app/help.js`): the subjects and articles, the question box, the answer with its linked article, "Did this help?", "Talk to a person". `/api/ai?action=help` with account facts for the signed-in person. Database: `help_questions` and `help_requests` (migration below). Admin → Help requests (inbox and reply).

**Part 3. Drafts from the questions.** The weekly job, Admin → Help → Drafts and the most asked questions, the approve and translate flow.

**Part 4. The public page.** `/help` and `/<lang>/help` from the Astro site (`site/src/pages/help.astro`, a new block that is shown to the owner and locked once approved), the question box with the captcha, linked from the footer and Contact, the Privacy sentence (shown to the owner first, as for the tutor call), `FAQPage` structured data only for questions shown on the page. The footer is a locked block, so the link is added only with the owner's yes.

## 8. Database (one migration per part, idempotent, ending with a verify query, shown to the owner before it is applied)
Part 2, `supabase/migrations/2026MMDDHHMM_help.sql`:
- `help_questions` (id, user_id null for signed-out, lang, question, answer, article_ids text[], sure boolean, helpful boolean null, created_at). Row-level security: a person reads only their own rows; nothing written from the browser except `helpful` on their own row through a `security definer` function; admins read all through `public.is_admin()`. Daily purge after 90 days.
- `help_requests` (id, user_id null, email, lang, question_id, conversation jsonb, status `open | answered | closed`, reply, replied_at, created_at). Written only by the server; the person reads their own; admins read and update.

Part 3: `help_drafts` (id, article_slug null for a new article, title, body, question_ids, status `draft | approved | discarded`, created_at, decided_at), admin only.

## 9. Cost
A help answer is a short prompt (a few articles, about 2,000 to 3,000 tokens) and a short reply. With Groq's `openai/gpt-oss-120b` that is roughly a tenth of a cent per question, so 1,000 questions a month cost about a dollar. The weekly drafts cost a few cents. Prices change; `api/ai.js` keeps them in its `PRICING` table.

## 10. Open questions for the owner
1. Where first: dashboards only, then the public page (proposed), or both together?
2. Handovers: Admin inbox and email (proposed), or email only? Which address receives them?
3. First articles: may I draft them from the code and the Terms for you to check (proposed), leaving out anything I cannot confirm?
4. The name in the dashboards: "Help" (proposed), or a name of its own? Should one of the approved drawings be its face, or the student's language buddy?
5. Should teachers have their own articles and see their own account facts in Help (proposed), or students only at first?
6. Keep questions 90 days (proposed), or a different length?
