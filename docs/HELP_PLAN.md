# Alimun support hub and help section — plan (revised 12 Nov 2026; nothing built yet)

Owner, 10 Nov 2026: "we need to create a help section, managed by our ai assistant". Owner, 12 Nov 2026: "not only ai assistant but also resources to solve issues, find out what user is looking for, guides, like a support hub and help section, and yes the ai assistant would be nice, with direct contact with the telegram bot ops alert". Each part below is shown to the owner and confirmed before the next starts. Open questions are at the end; until the owner answers, each part says what it assumes.

## 1. What people get
Today help is the six homepage FAQs, the course pages' FAQs (`site/src/data/course-faq.js`), the Contact form and messages to a class teacher. Questions about the account itself (billing, joining a class, plan changes, tutor minutes, homework) all end up in the owner's inbox.

The support hub is one place, **Help**, with five things that work together:

- **One search box at the top.** It searches everything in Help as the person types (titles, text, the words people actually use, in their language and in English). If they type a full question and press Ask, the help assistant answers it (section 4). Same box for both, so nobody has to choose.
- **Guides.** Longer walk-throughs written in sentences, for the moments people get stuck: getting started as a student (sign-up to first class), your first live class, using the book, practice and the mistake memory, homework and how it is corrected, the tutor and its minutes, managing your plan; and for teachers: your first class, marking homework, the classroom board, payouts and contracts. Screenshots from the real dashboards (no drawings invented for the guides; the approved dashboard drawings only where the dashboards already use them).
- **Fix a problem.** Troubleshooting pages for the issues that stop people: the camera or microphone does not work in class, I cannot join my class, the class page is blank, sound does not play in a lesson, speaking practice does not hear me, I did not get the email, my payment failed, I paid but have no access, I cannot sign in. Each one is a short guided check, one question at a time ("Does the test sound play?" Yes / No) rather than a numbered list, ending in the fix or in "Talk to a person". Where the browser can check for itself it does: a device check (microphone level, camera picture, speaker test, browser and connection) built into the page, and in the dashboards an account check (payment status from Stripe, email confirmed, seat in the class, next session and its join window) read on the server.
- **Answers.** Short articles that answer one question each ("How do I cancel or change my plan?", "What happens to my tutor minutes at the end of the month?"), grouped by subject: classes, plans and billing, the dashboard, the tutor, homework and practice, account and privacy, for teachers. The existing homepage and course FAQs move in here so there is one source.
- **Contact.** "Talk to a person" everywhere in Help (section 5). The Contact page links to Help first and keeps its form.

Everything is written from how the product actually works and approved by the owner before it is published, in the nine site languages like the blog. Nothing is invented: anything that cannot be confirmed from the code, the Terms or the owner (refund exceptions, response times) is left out and listed in `docs/PROGRESS.md`.

## 2. Where it lives
- **Student and teacher dashboards** (`#/help`, in the menu next to Settings). Here search, the assistant and the account check may use the signed-in person's own data, read on the server under their own rights.
- **Help in context.** A small Help link on each dashboard page opens Help filtered to that page (from Classes, the class articles and "I cannot join my class"; from the tutor, the tutor articles). Error messages in the dashboards and the class room link to the matching "Fix a problem" page (for example, a refused microphone opens the device check).
- **A public page `/help`** (and `/<lang>/help`) with the same guides, problems and answers, the search box and the assistant, for visitors and anyone signed out. Public answers never use account data. Linked from the footer (a locked block: added only with the owner's yes) and the Contact page. Each article has its own address (`/help/<slug>`) so search engines can find it.
- Assumed until the owner answers question 1: the dashboards first, the public page after.

## 3. Finding out what people are looking for
Every interaction with Help is recorded, so the owner sees what people need instead of guessing:

- **Searches**: what was typed, the language, how many results, which result was opened, and whether it ended in "Talk to a person". Searches with no results and searches nobody clicked are the clearest gaps.
- **Assistant questions**: the question, the articles used, whether the assistant was sure, and "Did this help? Yes / No".
- **Where they came from**: the dashboard page or error that opened Help.
- **Fix a problem**: where in the check people stopped, and whether it ended solved or handed over.
- **Handovers**: the subject of every request to a person.

**Admin → Help → Insights** shows, from the database only: most searched words and questions, searches with no answer, articles with the most "No", problems that most often end in a handover, the pages that send most people to Help, and how all of this changes week to week. Signed-out activity is stored without a name or address; everything is deleted after 90 days (same as tutor transcripts). The Privacy page gets a sentence about this (shown to the owner first).

## 4. The help assistant
Every question goes to a new function, `api/help.js` (a clearly separate feature, allowed since the move to Vercel Pro), action `ask`. The server picks the few articles, guides and problems that match the question (keyword and title search over the published content in the person's language, falling back to English; a vector search only if this proves too weak), adds the person's account facts when signed in (plan and renewal date, next class and its join time, tutor minutes left, homework due; for teachers, next sessions and homework to mark), and asks the model for a reply in a fixed JSON shape: the answer, the ids it used, whether it is sure, and whether a person should look at it now (urgent). The instructions are server text only; nothing from the browser is used as instructions. Rules: answer only from the content and account facts given; never promise refunds, discounts, dates or exceptions; never quote prices that are not in an article; say it is not sure and offer a person instead of guessing. The reply is checked on the server (cited ids must be among those given; plain text, escaped on the page; lists flattened into sentences). Model: the cheapest one already used in `api/ai.js` that answers well (Groq first, Gemini as fallback), under the existing per-user and daily budgets, every call logged in `ai_usage` with feature `help`. No paid plan needed. Signed-out questions pass the captcha (`api/_lib/captcha.js`) and a per-address limit.

## 5. Talking to a person, and the Telegram ops alert
- **"Talk to a person"** under every answer, at the end of every problem check, and offered by the assistant when it is not sure. A short form with the conversation and the checks already run attached, so the person does not repeat themselves; signed-out people add their email.
- The request lands in **Admin → Help → Requests** (open, answered, closed) and the owner is alerted on **Telegram through the ops bot**, with the subject, the question in a sentence or two, the person's plan and language, whether it is urgent, and a link to the request in Admin. No email address, payment details or conversation in the Telegram message (Telegram is a third party; the full details stay in Admin).
- **Urgent** requests are flagged at the top of the alert: paid but no access, a class starting within the hour that the person cannot join, a teacher who cannot start a session, a payment charged twice. These are decided on the server from the account check, not only by the assistant.
- **Replying.** The owner replies in Admin; the reply goes to the person by email (Resend, `api/_lib/email.js`, in their language) and, for signed-in people, as a notification on the bell. Later, if the owner wants: replying straight from Telegram (the bot sends the reply to `api/help.js?action=telegram`, checked with Telegram's secret token header, and only from the owner's chat).
- The alert is sent by the server only (`api/_lib/ops-alert.js`), with the bot token and chat id in Vercel environment variables, never in the browser or the repo. If the ops bot already has its own endpoint (the ops hub that receives the Stripe alerts), the help alert posts there instead, in the same format. One alert per request; repeated requests from the same person within a few minutes are grouped.

## 6. Keeping Help up to date
Once a week (a cron job like `cron-reminders`), the assistant takes the gaps from Insights (searches with no answer, questions it was not sure about, articles with "No", common handover subjects) and drafts a new article or a change for each group. Drafts appear in **Admin → Help → Drafts** with the searches and questions that led to them. The owner edits, approves or discards them; approved articles are published in English and translated into the other languages for the owner to approve, like the blog. A Telegram summary of the week (new drafts waiting, open requests) is optional (question 7).

## 7. Design and copy
- Same site fonts and colours; white and bone backgrounds, lime for the search button and the answer card; no black panels. In the dashboards, the dashboard's own style and one of the approved drawings beside the box.
- Answers, guides and checks in sentences. No chips, tags, numbered steps, step counters or short bullet lists (the assistant's instructions say so and the server flattens lists).
- The assistant is a real AI feature, so it may be called one where it is described, on the public page too, and it says it is an AI before the first answer (EU AI Act). The rest of Help is not described as AI. The Privacy page gets a sentence that help questions are answered automatically by a language model and may be read by Alimun staff, and that requests to a person are signalled to staff through Telegram without personal details.

## 8. Parts (each shown to the owner before the next)

**Part 1. The content.** In English, drafted from the code and existing pages only: about 30 answers, the guides listed in section 1, and the "Fix a problem" checks. Stored as data files like the blog (`site/src/data/help/<lang>/<slug>.js`: kind `answer | guide | problem`, title, subject, body or check, words people use, related items, updated date), so the hub, search and the assistant read the same text. Screenshots taken from the sample dashboards (`/app?sample=1`). The owner reads and approves them; then the other eight languages.

**Part 2. Help in the dashboards.** `#/help` in the student and teacher dashboards (`js/app/help.js`): search, guides, problems with the device check and the account check, answers, Help links on each page and from error messages, and the logging behind Insights. Database: `help_events` (migration below).

**Part 3. The assistant and the ops alert.** `api/help.js` (ask, request, telegram), `api/_lib/ops-alert.js`, "Talk to a person", Admin → Help → Requests, replies by email and bell, the Telegram alert. Database: `help_questions`, `help_requests`.

**Part 4. Insights and drafts.** Admin → Help → Insights, the weekly drafts job, Admin → Help → Drafts, the approve and translate flow.

**Part 5. The public hub.** `/help`, `/help/<slug>` and the language versions from the Astro site (`site/src/pages/help/`, new blocks shown to the owner and locked once approved), search and the assistant with the captcha, the footer and Contact links (owner's yes for the footer), the Privacy sentences, `FAQPage` and `HowTo` structured data only for content shown on the page.

## 9. Database (one migration per part, idempotent, ending with a verify query, shown to the owner before it is applied)
- Part 2, `help_events` (id, user_id null for signed-out, lang, kind `search | open | check_step | check_end | helpful`, query, item_slug, from_page, result_count, outcome, created_at). Written through a `security definer` function with a per-person rate limit; admins read all through `public.is_admin()`; nobody else reads it. Purge after 90 days.
- Part 3, `help_questions` (id, user_id null, lang, question, answer, item_slugs text[], sure, urgent, helpful null, created_at): a person reads only their own rows and sets `helpful` on their own through a `security definer` function; admins read all. `help_requests` (id, user_id null, email, lang, subject, question_id, conversation jsonb, checks jsonb, urgent, status `open | answered | closed`, reply, replied_at, alerted_at, created_at): written only by the server; the person reads their own; admins read and update. Purge questions after 90 days; requests kept while open, then 12 months.
- Part 4, `help_drafts` (id, item_slug null for new, title, body, evidence jsonb, status `draft | approved | discarded`, created_at, decided_at), admin only.

## 10. Cost
A help answer is a short prompt (a few articles, about 2,000 to 3,000 tokens) and a short reply: with Groq's `openai/gpt-oss-120b` roughly a tenth of a cent per question, so 1,000 questions a month cost about a dollar. Search, guides, checks and the Telegram alerts cost nothing beyond hosting. The weekly drafts cost a few cents. Prices change; `api/ai.js` keeps them in its `PRICING` table.

## 11. Open questions for the owner
1. Where first: dashboards first, then the public hub (proposed), or both together?
2. The Telegram ops bot: is it the ops hub that already receives the Stripe alerts? Should Help post to that hub's endpoint, or straight to Telegram with the bot token and a chat id (added by the owner as Vercel environment variables `TELEGRAM_BOT_TOKEN` and `TELEGRAM_OPS_CHAT_ID`, never in chat or the repo)? Same chat as the payment alerts, or a separate support chat?
3. Every request to a person on Telegram, or only urgent ones (others in Admin and a daily summary)? Replying from Telegram later, or Admin only?
4. Content: may I draft the answers, guides and problem checks from the code and the Terms for you to check (proposed), leaving out anything I cannot confirm? Is there a response time you want to promise, or none?
5. Name in the dashboards: "Help" (proposed)? Should one of the approved drawings be its face?
6. Teachers: their own guides, problems and account facts from the start (proposed), or students only at first?
7. Keep activity and questions 90 days (proposed)? A weekly Telegram summary of drafts and open requests, yes or no?
