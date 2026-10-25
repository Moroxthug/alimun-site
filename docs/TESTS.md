# Mock tests: file format

Step 8 of `docs/DASHBOARD_PLAN.md`. Practice tests in the format of real exams (B2 First, C1 Advanced, IELTS, Goethe, telc...) and Alimun's own tests per level. Every text, recording script, question and model answer is written by Alimun. Nothing is copied or adapted from official papers, so these are never official material. The dashboard shows them under Tests (`#/tests`, `js/app/tests.js`) with the exercise engine (`js/app/exercises.js`) in test mode: nothing is marked until the student finishes the paper.

## Files
- One file per test: `site/src/data/tests/<id>.js`, exporting `TEST`. The id is `<Language>-<Level>-<format>`, for example `English-B2-first`, `German-B1-goethe` or `English-A2-alimun`. It is also the folder of the test's recordings in Supabase Storage (`course-audio/<id>/`).
- The site build serves `/data/tests/index.json` (the list) and `/data/tests/<id>.json` (one test). It also serves `/data/audio/<id>.json`, the audio plan of the test's recordings. The admin page `/app/audio` makes them like the course books' audio.
- Check a test with `node scripts/check-tests.mjs [ids]`.

```js
export const TEST = {
  id: 'English-B2-first', language: 'English', level: 'B2', format: 'first', review: 'draft',
  examiner: 'Orus',                 // voice of the examiner's questions in Speaking (one of the voices in audio.js)
  papers: [
    { id: 'reading', title: 'Reading and Use of English', minutes: 75, parts: [ /* parts */ ] },
    { id: 'writing', title: 'Writing', minutes: 80, parts: [...] },
    { id: 'listening', title: 'Listening', minutes: 40, parts: [...] },
    { id: 'speaking', title: 'Speaking', minutes: 14, parts: [...] },
  ],
};
```

- `format` is one of `first`, `advanced`, `ielts`, `goethe`, `telc` or `alimun`. The dashboard adds the exam's name and the note that the test is not official material in the student's language.
- Paper and part titles, `about` and every instruction (`h`) are in the language being tested, as in the real exam. A2 Alimun tests keep instructions short and simple.

## Parts
```js
{ id: 'p1', ref: 'Part 1', title: 'Multiple-choice cloze',
  about: 'For each gap, choose the answer that fits best.',   // the exam's instruction, short
  text: { title: 'A new kind of holiday', md: 'Paragraph one.\n\nParagraph two.' },   // optional reading text
  texts: [{ title, md }],            // optional: several texts (A, B, C, D) side by side or one after another
  recs: [{ lines: [{ who: 'Anna', s: 'Hello...' }] }],   // listening only: the recordings of the part
  plays: 2,                          // listening only: how many times each recording may be played (as in the exam)
  chart: { ... },                    // IELTS Writing Task 1 only, see below
  blocks: [ /* exercise blocks */ ] }
```
- Questions are not numbered on screen, so instructions do not refer to question numbers ("questions 1 to 8").
- `ref` is the exam's own name for the part ("Part 1", "Teil 1", "Section 2"). The dashboard shows it in a small line under the title, not as a counter.
- Material goes in `text`, `texts` or `recs`. The dashboard puts it beside the questions on a wide screen and above them on a phone. In `md`, `**bold**` and `*italic*` work and a blank line starts a paragraph. For matching tasks, start each section with its letter in bold, `**A** ...`.
- Listening: every recording is a list of lines spoken by `who`. Write names that show the speaker's gender (Anna, Tom, Frau Weber, Herr Krüger) or roles from `site/src/data/books/audio.js`. "Presenter", "Interviewer" and "Speaker" get a voice that contrasts with the other speaker. Lines are spoken one after another, with a short pause, so write them as natural speech: contractions, hesitations where the exam has them, no stage directions. One recording per extract: in a part with several short extracts each with its own questions (B2 First Listening Part 1), give each block `rec: <index>` and the player shows above that block. Otherwise the part's first recording plays at the top.
- Exercise blocks use the engine's kinds (`docs/BOOKS.md`) plus the four exam kinds below. In tests the student sees no feedback until the end, so every `why` is shown in the results. Write `why` in English for English tests and in German for German tests, short (one sentence), pointing to the line of the text or recording that gives the answer.

## Kinds made for tests
- `cloze`: one continuous text with gaps, as in the exam. `text: '... {} ...'` (each `{}` is a gap, in order; blank lines between paragraphs) and `items: [...]`, one per gap:
  - drop-down options: `{ o: [right, wrong, wrong, wrong], why }` (multiple-choice cloze; the dashboard shuffles them once);
  - typed answer: `{ a: [accepted, ...], why }` (open cloze, form or note completion; case does not count);
  - word formation: `{ base: 'SUCCEED', a: ['success'], why }`, the base word shown after the gap;
  - shared options: `opts: ['sentence A', 'sentence B', ...]` on the block and `{ a: index, why }` per gap (gapped text, or words from a box). The options are listed with letters under the text and each gap is a drop-down of letters. Give one or two options more than gaps.
- `pick`: questions answered with one of a fixed list. `opts: ['Anna', 'Ben', 'Carla', 'Daniel']` (or longer statements) and `items: [{ q, a: index, why }]`. When every option is short (24 characters or fewer) the buttons show the options, in the given order. Otherwise the options are listed once with letters A, B, C... and the buttons show the letters. Use it for multiple matching (which person, which paragraph, which speaker), matching headings, "Ja / Nein" and "Richtig / Falsch" (`opts: ['Richtig', 'Falsch']`). The same option may be the answer to several questions.
- `write`: a writing task. `items: [{ task: 'md', min: 140, max: 190, model: 'md' }]`, where `model` is a model answer shown in the results. With `choose: true` the items are alternatives (B2 First Writing Part 2) and the student writes one. `marking: 'cambridge' | 'ielts' | 'goethe' | 'telc' | 'alimun'` on the block. The student's text is marked against the exam's criteria with a drafted score and comments, for students with a plan; everyone sees the model answer.
- `talk`: a speaking task. `items: [{ q: 'what the examiner says', secs: 60, prep: 0, scene?: 'cafe' | 'station' | 'kitchen' | 'park', notes?: ['prompt', ...], model?: 'md' }]`. The examiner's line is spoken in the test's `examiner` voice. `notes` are the prompts on the task card (topic points, ideas to talk about), shown on one card. `scene` shows a drawing to describe; `scenes: ['cafe', 'park']` shows two to compare. The student records up to `secs` seconds (at most 240); the words are transcribed and, at the end, marked like writing (`marking` on the block); pronunciation is not marked. Use one item per examiner question.

- Key word transformation uses `transform` with a `gap`: `{ q: 'The original sentence.', cue: 'KEYWORD', gap: 'The second sentence with ___ for the answer.', a: ['the two to five words of the gap', 'another accepted version'], why }`. `a` holds only the words of the gap (with the key word), every acceptable variant included (contractions too).

The kinds used in tests: `choice`, `tf` (with `ng: true` for "not given"), `select`, `gap`, `wordform`, `transform`, `match`, `bank`, `sort`, `pick`, `cloze`, `write`, `talk`. Not in tests: `memory`, `search`, `speak`, `hear`, `heargap`, `dictation`, `picture`, `label`, `crossword`.

## IELTS chart (Writing Task 1)
`chart: { type: 'bar' | 'line', title, unit: '%', labels: ['2000', '2010', '2020'], series: [{ name: 'Rail', values: [12, 18, 25] }] }`. At most four series and eight labels. The dashboard draws it.

## Scoring
- Each answer in Reading, Listening and Use of English counts one mark. The result of a paper is the share of right answers, part by part, with the right answers and every `why`. Transcripts of the recordings show in the results.
- Writing and Speaking show the drafted marks against the exam's criteria (Cambridge: Content, Communicative Achievement, Organisation, Language, 0 to 5; IELTS: bands 0 to 9; Goethe and telc: their criteria). They also show the model answers.
- The dashboard never turns a result into a predicted exam grade. It shows the share of right answers and says what the real exam asks to pass, where that is published (Goethe and telc: 60% of each module).

## Writing the content
- Original texts and recordings, in the style and length of the real exam at that level, on everyday, work, study and travel topics. No real brands, real living people or copied passages.
- Answers must be unambiguous. Distractors are plausible but clearly wrong from the text.
- No emojis.
