# Course books: format and reader

Step 4 of `docs/DASHBOARD_PLAN.md`. The reader is `js/app/reader.js`, inside the new dashboard shell at `/app/preview#/book`.

## Where books live
- Source: `site/src/data/books/<Language>-<Level>.js`, one file per book, exporting `BOOK`. Explanations are written in English there.
- Translations of the explanations: `site/src/data/books/i18n/<book>.<lang>.json` (es, fr, de, pt, zh, ar, it; Moroccan pages use fr), keyed by the English text. The book's own language is one of them (e.g. `German-B1.de.json`), for learners who switch the explanations to the language they are learning. Which strings count as explanations is defined once in `site/src/data/books/explain.js`.
- Served as static JSON by the site build, one file per book and explanation language: `/data/books/<book>.<lang>.json` (`site/src/pages/data/books/[book].json.js`; a missing translation stays in English), and the list `/data/books/index.json`. `scripts/apply-rebuild.js` already copies `site/dist/data` to the deployment.
- After changing a book: `node scripts/book-strings.mjs <book> <lang>` lists its explanations with the existing translations (empty for new or changed text); fill the gaps in the i18n file.
- The reader opens the book that matches the student's course (`German` + `B1` -> `German-B1`). Without one it says the book is being written and links to the books that have written units.
- Goal books: a second book for what the learner wants to do with the language, matching `goal_track` from sign-up (`relocation`, `professional`, `academic`, `pleasure`; `foundations` has the course book only). File `<Language>-<Level>-<goal>.js` with `track: 'goal'`, `goal` and a `title` (an explanation, translated). The course book's cover shows them under "A second book for your goal", the learner's own goal first; when theirs is not written yet it says so.

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
- `{ t: 'table', caption, head: [...], rows: [[...]], explain: ['head', 'col0', 'col2'], quiz: true }` the first cell of each row is its header; `explain` says which parts are explanations (translated: the headings and any column `colN`); `quiz` adds "Test yourself", which hides the forms until tapped. A table wider than the page is shrunk to fit, never widening the screen, and opens full screen on tap, where it can be zoomed with two fingers or + and −.
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

Added in step 5 (25 Oct 2026). One engine draws every kind everywhere: `js/app/exercises.js`. `node scripts/check-book.mjs` knows them all.
- `odd`: odd one out; `items: [{ o: [odd, other, other, other], why }]`, the first option is the odd one.
- `select`: a drop-down in the gap; `items: [{ q, o: [right, wrong, wrong], why }]`, one `___`.
- `wordform`: word formation; `items: [{ q, base: 'happy', a: ['unhappy'], why }]`, `base` shown in capitals beside the sentence.
- `transform`: rewrite the sentence; `items: [{ q: 'original sentence', cue: 'for', a: [accepted sentences], why }]`. When `cue` is the start of the new sentence, the answer counts with or without it.
- `conjugate`: a verb table; `verb`, `tense` (explanation), `rows: [['I', 'have gone|’ve gone'], ['she', 'has gone|’s gone'], ...]`, other accepted answers after `|`, an optional `why` third.
- `crossword`: `words: [{ a: 'passport', clue: 'The document you show at the border.' }]`, four to eight single words; the clue is in the language being learned. The grid is laid out by the engine.
- `build`: build the sentence with extra words that do not belong; `items: [{ a: 'The sentence.', extra: ['did', 'yet'], why }]`.
- `colloc`: which words go with the key word; `items: [{ key: 'make', o: ['a mistake', 'homework', ...], a: [indexes of the right ones], why }]`.
- `fix`: find and fix the mistake; `items: [{ s: 'I have [saw] it.', a: ['seen'], why }]`, exactly one word or phrase in brackets.
- `bank`: word bank; `extra: [distractors]`, `items: [{ q, a: 'word', why }]`, one `___` each; every bank word different.
- `sort`: sort into groups; `groups: ['der', 'die', 'das']`, `items: [{ s: 'Tisch', g: 0, why }]`. Group names are in the language being learned unless `explain: ['groups']` marks them as explanations.
- `memory`: memory pairs; `pairs: [[a, b], ...]`, three to eight pairs, every side different. Lessons and practice only, not unit tests.
- `search`: word search; `words: ['bread', ...]`, four to eight single words. Lessons and practice only, not unit tests.
- `picture`: what is it? `items: [{ pic: 'apple', o: [right, wrong, wrong], why }]`, `pic` one of the third cast's objects (apple, bread, cheese, train, bus, bicycle, house, key, phone, umbrella, clock, ticket).
- `label`: label the scene; `scene: 'cafe' | 'station' | 'kitchen' | 'park'`, `items: [{ x, y, a: 'die Tasse', why }]` (x 0 to 320, y 0 to 200 in the scene), `extra: [distractors]`; tap a dot, then the word, like a word bank. Practice builds both from `site/src/data/practice/pictures.js` (words in the six course languages, with where each thing is in the scenes), served as `/data/practice/pictures.json`.
- Listening (made by Practice from the course audio, not written in books yet): `hear` (listen and choose: `items: [{ src, o: [heard, other, other] }]`, the others differ by one word taken from the book), `heargap` (listen and write the missing word: `items: [{ src, q, a }]`) and `dictation` (listen and write the sentence: `items: [{ src, a: [sentence] }]`; punctuation and capitals do not count, and a wrong try shows the student's words with the wrong ones struck through). Every listening item has Listen and Slower (0.75×) buttons.

Layout of a page: text and tips on one side, examples, tables, dialogues and readings on the other; a page with only exercises puts the book character beside them, reacting to each answer. Word tiles can be tapped or dragged; matched pairs are joined by a drawn line.

In a lesson, answers are checked straight away with the book character's reaction and the `why`; wrong options can be tried again, and after two wrong tries "Show the answer" appears. The next page opens when every exercise on the page is done; the lesson ends with a celebration page. A unit test shows nothing until "Check my test"; 70% passes the unit.

## Practice sets
Hand-written rounds for the Practice screen (`js/app/practice.js`): `site/src/data/practice/<set>.js` exports `SET = { id, language, level, review, title, about, blocks: [exercise blocks] }`, served as `/data/practice/<set>.<lang>.json` and `/data/practice/index.json`. Explanations (`h`, every `why`, `tense`, groups marked `explain`) are translated in `site/src/data/practice/i18n/<set>.<lang>.json` like the books (`node scripts/book-strings.mjs --set <set> <lang>`). Check with `node scripts/check-book.mjs --sets`. The `<Language>-<Level>-types` set holds one exercise of every kind and is the "Every kind of exercise" round.

Practice rounds also remix the course book: a gap exercise can come back as a word bank, a multiple choice with a gap as a drop-down, word order with two extra words, matching as memory pairs, and matching whose left side is single words as a crossword or a word search. Each item keeps its key (`<book>:<unit>:<lesson or test>:<block>:<item>`) so its mistakes are remembered across lessons, tests and rounds.

## Course audio
Examples, dialogue lines and reading paragraphs are spoken once and stored (owner's voices: narrators Sulafat and Orus; dialogue speakers get a voice that matches their name or role). `site/src/data/books/audio.js` decides the voice and style of each item and serves `/data/audio/<book>.json`: `items: { "<unit>:<lesson>:<block>:<item>": [hash, voice, style, text] }`. The hash covers model, voice, style and text, so a changed sentence gets a new file and the old one is simply no longer used. Files: Supabase Storage `course-audio/<book>/<hash>.mp3`, listed in `course-audio/<book>/manifest.json`; made from `/app/audio` (admin). New speaker names in dialogues: add them to the women's or men's list in `audio.js` (unknown names and roles get the gender that contrasts with the other speaker).

## Playing the books
`node scripts/play-books.js [book ids] [--units=N] [--lang=ar] [--phone] [--practice] [--rounds=N]` serves this checkout, plays every lesson and unit test with the right answers (unit tests must score 100%), and with `--practice` the "Every kind of exercise" round and N generated rounds. Book data comes from alimun.com; practice sets come from this checkout.

## Progress
- Signed in: `practice_progress`, one row per finished lesson or test, `ex_key = book:<book>:<unit>:<lesson>` or `book:<book>:<unit>:test`, `done`, `graded_score` (pages: share right first time; tests: best score). No database change; the existing row-level security lets students write their own rows and their teachers read them. The Home streak already counts these rows.
- Signed out or sample data: this browser (`localStorage` key `alimun-book-progress`).

## Writing a unit
Draft from the CEFR descriptors for the level, original text only. Each lesson teaches one thing over three to five pages, then checks it. Group exercises the way the topic makes sense: two short exercises on the same point share a page, a long one gets its own; a reading and its questions can sit together. Every item has a `why`. Keep a page to roughly one screen. The unit test mixes every page. Keep `review: 'draft'` until a native teacher has checked every page.
