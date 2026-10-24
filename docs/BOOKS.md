# Course books: format and reader

Step 4 of `docs/DASHBOARD_PLAN.md`. The reader is `js/app/reader.js`, inside the new dashboard shell at `/app/preview#/book`.

## Where books live
- Source: `site/src/data/books/<Language>-<Level>.js`, one file per book, exporting `BOOK`. Explanations are written in English there.
- Translations of the explanations: `site/src/data/books/i18n/<book>.<lang>.json` (es, fr, de, pt, zh, ar, it; Moroccan pages use fr), keyed by the English text. The book's own language is one of them (e.g. `German-B1.de.json`), for learners who switch the explanations to the language they are learning. Which strings count as explanations is defined once in `site/src/data/books/explain.js`.
- Served as static JSON by the site build, one file per book and explanation language: `/data/books/<book>.<lang>.json` (`site/src/pages/data/books/[book].json.js`; a missing translation stays in English), and the list `/data/books/index.json`. `scripts/apply-rebuild.js` already copies `site/dist/data` to the deployment.
- After changing a book: `node scripts/book-strings.mjs <book> <lang>` lists its explanations with the existing translations (empty for new or changed text); fill the gaps in the i18n file.
- The reader opens the book that matches the student's course (`German` + `B1` -> `German-B1`). Without one it says the book is being written and links to the books that have written units.

## Structure
Book > unit > lesson > pages > blocks. A lesson (`pages[]` in the file, for history) is a few full-screen pages (`spreads`), turned one at a time. Explanations (titles, goals, text, notes, tips, instructions, table headings marked with `explain`, every `why`) show in the learner's language, with a switch to the language being learned; example sentences, exercise items, dialogue lines and reading texts stay in the language being learned. The reader's own text (buttons, feedback, "Unit 1") comes from `js/translations.js` (`app_book_*`).

```js
export const BOOK = {
  id: 'English-B1', language: 'English', level: 'B1',
  review: 'draft',                  // 'draft' until a native teacher has reviewed it; the reader says so
  units: [
    { id: 'u1', title: 'Life stories', goal: 'In this unit you…', art: 'suitcase',   // art: a cast drawing (js/app/cast.js)
      tags: { skills: [...], topics: [...], goals: [...] },
      pages: [ { id: 'p1', title: 'Have you ever…?', about: 'One line on what the lesson teaches.', art: 'parrot',
                 spreads: [ [ /* blocks on page 1 */ ], [ /* page 2 */ ], ... ] } ],
      test: [ /* exercise blocks only */ ] },
    { id: 'u2', title: 'Work and study', planned: true },   // listed as "being written"
  ],
};
```

## Blocks
Text fields accept `**bold**` and `*italic*`; everything else is escaped.
- `{ t: 'text', md }` paragraphs (blank line between paragraphs).
- `{ t: 'examples', items: [{ s, n }] }` example sentences; tapping one opens its note.
- `{ t: 'table', caption, head: [...], rows: [[...]], explain: ['head', 'col0'], quiz: true }` the first cell of each row is its header; `explain` says which parts are explanations (translated); `quiz` adds "Test yourself", which hides the forms until tapped.
- `{ t: 'dialogue', title, lines: [{ who, s }] }` plays line by line like a chat.
- `{ t: 'tip', art: 'owl', md }` a drawing with a speech bubble.
- `{ t: 'reading', title, md }` a reading text.
- `{ t: 'ex', kind, h, ... }` an exercise; `h` is the instruction.

Audio and image blocks come with the listening and reading library (step 9).

## Exercise kinds (on pages and in unit tests)
- `choice`: `items: [{ q, o: [right, wrong, wrong], why }]`. `___` in `q` marks the gap; an empty `q` makes it "which sentence is correct". The first option is right; the reader shuffles.
- `gap`: `items: [{ q, a: [accepted answers], why }]`, one `___` per item. Case, spaces, curly or straight apostrophes and final punctuation are ignored.
- `order`: `items: [{ a: 'The sentence in the right order.', why }]`, split into words at spaces.
- `match`: `pairs: [[left, right], ...]`.
- `tf`: `ng: true` adds "not given"; `items: [{ q, a: 't' | 'f' | 'ng', why }]`.
- `spot`: tap the words in a text; `items: [{ s: 'I [went] there and [took] a class.', why }]`, the words to find in brackets.

Layout of a page: text and tips on one side, examples, tables, dialogues and readings on the other; a page with only exercises puts the book character beside them, reacting to each answer. Word tiles can be tapped or dragged; matched pairs are joined by a drawn line.

In a lesson, answers are checked straight away with the book character's reaction and the `why`; wrong options can be tried again, and after two wrong tries "Show the answer" appears. The next page opens when every exercise on the page is done; the lesson ends with a celebration page. A unit test shows nothing until "Check my test"; 70% passes the unit.

## Progress
- Signed in: `practice_progress`, one row per finished lesson or test, `ex_key = book:<book>:<unit>:<lesson>` or `book:<book>:<unit>:test`, `done`, `graded_score` (pages: share right first time; tests: best score). No database change; the existing row-level security lets students write their own rows and their teachers read them. The Home streak already counts these rows.
- Signed out or sample data: this browser (`localStorage` key `alimun-book-progress`).

## Writing a unit
Draft from the CEFR descriptors for the level, original text only. Each lesson teaches one thing over three to five pages: one or two teaching pages, then one exercise per page; every item has a `why`. Keep a page to what fits on one screen. The unit test mixes every page. Keep `review: 'draft'` until a native teacher has checked every page.
