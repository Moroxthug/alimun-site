# Writing a course book (one conversation, one book)

Format and exercise kinds: `docs/BOOKS.md`. Check: `node scripts/check-book.mjs <BookId>`. Translations afterwards:
`docs/TRANSLATING_BOOKS.md`. Audio afterwards: the owner presses Start on `/app/audio` (about $0.03 a minute).

## Order (owner, 27 Oct 2026: exercises, listening and voices in every language taught)
Course books first, one per level; goal books only later and on demand.
- Italian, Portuguese C1; Spanish C1
- C2 for every language
Strike a book from this list (in the same commit) when it is written.

## The book file
`site/src/data/books/<Language>-<Level>.js`, shaped exactly like `site/src/data/books/German-A1.js`: id, language,
level, `review: 'draft'`, eight units, each `{ id, title, planned: true, plan: { goal, lessons: [four lessons, the last
a reading] } }`. Build the syllabus from the CEFR level and from the neighbouring books of the same language (the level
below and above, if they exist) so nothing is skipped or repeated. Units are written in
`site/src/data/books/units/<BookId>/u1.js` to `u8.js`; the book file keeps every entry `planned` with its plan.

## A unit
Model units to copy for depth, length and structure: `site/src/data/books/units/German-A2/u1.js` (A1 to A2),
`site/src/data/books/units/German-B1/u2.js` (B1), `site/src/data/books/units/English-B2/u1.js` (B2 and up),
`site/src/data/books/units/Spanish-A1/u1.js` (a non-English book at A1).
- `export const UNIT = { id, title, goal, art, tags: { skills, topics, goals: ['foundations'] }, pages, test }`; four
  lessons (`pages` p1 to p4, p4 the reading), 3 to 5 spreads each; a `test` of 12 to 16 questions mixing every lesson.
- Every exercise item has a `why`. Use many kinds (choice, gap, order, match, tf, spot, odd, select, wordform,
  transform, conjugate, crossword, build, colloc, fix, bank, sort, memory, search; picture and label only with the
  objects and scenes in docs/BOOKS.md). `memory` and `search` never in the test.
- `art` only from: owl, parrot, cat, snail, dog, teacup, pretzel, croissant, pizza, churro, nata, dragon, alien, ghost,
  suitcase, cactus, mug, sun, monster. Language buddies: croissant French, pizza Italian, nata Portuguese.
- Explanations (titles, goal, about, text, tips, notes, instructions, every `why`, table headings marked `explain`) in
  simple English; examples, dialogues, exercise items and readings in the language being learned, at the level.
- French of France, Italian of Italy, European Portuguese (the pronunciation scoring uses fr-FR, it-IT, pt-PT); say in a
  tip where Canada, Belgium, Switzerland or Brazil differ. Spanish of Spain, noting Latin America.
- Original text only: no brands, real people or invented statistics; practical facts general ("in many cities");
  emails at example.com; obviously fictional phone numbers. No emojis, no numbered lists, only **bold** and *italic*.
- `gap` items: exactly one `___`, every reasonable accepted answer listed. `choice`, `select`, `odd`: the first option
  is right, only one defensible.
- Dialogue speakers (`who`): names from the WOMEN and MEN lists in `site/src/data/books/audio.js`, or roles. A new name
  or role: add it to the right list in the same commit (the voice follows the speaker's gender).
- Doubts for the native teacher: append to `docs/BOOK_REVIEW_NOTES.md` under `## <Language> <Level>`, one line each.

## The prompt the owner pastes (Sonnet, no subagents)
Write the next course book in the "Order" list of docs/WRITING_BOOKS.md, following that guide exactly. Work alone:
no subagents, no parallel agents. First the book file with its eight-unit syllabus, committed and pushed to main.
Then one unit at a time: write it, run node scripts/check-book.mjs <BookId> until it passes, add review notes and any
new speaker names, commit that unit and push to main, then the next unit. Do not touch other files and do not run
npm run build. When the book is done (or you stop), strike it from the Order list if finished, append a short entry to
docs/PROGRESS.md, push, and tell me what is done and what is left.
