# Course books: format and reader

Step 4 of `docs/DASHBOARD_PLAN.md`. The reader is `js/app/reader.js`, inside the new dashboard shell at `/app/preview#/book`.

## Where books live
- Source: `site/src/data/books/<Language>-<Level>.js`, one file per book, exporting `BOOK`.
- Served as static JSON by the site build: `/data/books/<Language>-<Level>.json` (`site/src/pages/data/books/[book].json.js`) and the list `/data/books/index.json` (id, language, level, review state, written and total units). `scripts/apply-rebuild.js` already copies `site/dist/data` to the deployment.
- The reader opens the book that matches the student's course (`German` + `B1` -> `German-B1`). Without one it says the book is being written and links to the books that have written units.

## Structure
Book > unit > page > blocks. Text is in the language being learned; the reader's own text (buttons, feedback, headings such as "Unit 1") comes from `js/translations.js` (`app_book_*`).

```js
export const BOOK = {
  id: 'English-B1', language: 'English', level: 'B1',
  review: 'draft',                  // 'draft' until a native teacher has reviewed it; the reader says so
  units: [
    { id: 'u1', title: 'Life stories', goal: 'In this unit you…', art: 'suitcase',   // art: a cast drawing (js/app/cast.js)
      tags: { skills: [...], topics: [...], goals: [...] },
      pages: [ { id: 'p1', title: 'Have you ever…?', about: 'One line on what the page teaches.', blocks: [ ... ] } ],
      test: [ /* exercise blocks only */ ] },
    { id: 'u2', title: 'Work and study', planned: true },   // listed as "being written"
  ],
};
```

## Blocks
Text fields accept `**bold**` and `*italic*`; everything else is escaped.
- `{ t: 'text', md }` paragraphs (blank line between paragraphs).
- `{ t: 'examples', items: [{ s, n }] }` example sentences with an optional note.
- `{ t: 'table', caption, head: [...], rows: [[...]] }` the first cell of each row is its header.
- `{ t: 'dialogue', title, lines: [{ who, s }] }`
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

On a page, answers are checked straight away with the book character's reaction and the `why`; wrong options can be tried again, and after two wrong tries a gap or word order shows "Show the answer". The next page opens when every exercise on the page is done. A unit test shows nothing until "Check my test"; 70% passes the unit.

## Progress
- Signed in: `practice_progress`, one row per finished page or test, `ex_key = book:<book>:<unit>:<page>` or `book:<book>:<unit>:test`, `done`, `graded_score` (pages: share right first time; tests: best score). No database change; the existing row-level security lets students write their own rows and their teachers read them. The Home streak already counts these rows.
- Signed out or sample data: this browser (`localStorage` key `alimun-book-progress`).

## Writing a unit
Draft from the CEFR descriptors for the level, original text only. Each page teaches one thing, then checks it with two or three exercises; every item has a `why`. The unit test mixes every page. Keep `review: 'draft'` until a native teacher has checked every page.
