# Listening and reading library: file format

Step 9 of `docs/DASHBOARD_PLAN.md`. Graded listening (dialogues, announcements, interviews, talks, podcasts) and reading (notices, messages, articles, opinion pieces, stories) with exercises, for each course language and level. Everything is original and written by Alimun. The dashboard shows the library under Library (`#/library`, `js/app/library.js`). Exercises use the exercise engine (`js/app/exercises.js`) in lesson mode, with feedback straight away, like the course book.

## Files
- One shelf per language and level: `site/src/data/library/<Language>-<Level>-library.js`, exporting `SHELF`, for example `English-B1-library`. The shelf id is also the folder of its recordings in Supabase Storage (`course-audio/<shelf>/`).
- Translations of the explanations: `site/src/data/library/i18n/<shelf>.<lang>.json` for `es fr de pt zh ar it` (English is the source; Moroccan pages use French). List the strings with `node scripts/book-strings.mjs --lib <shelf> <lang>`; the output is `{ "<English text>": "<translation or empty>" }`. Fill in every value and save it as that file.
- The site build serves `/data/library/index.json` (the list), `/data/library/<shelf>.<lang>.json` (a shelf with its explanations in one language) and `/data/audio/<shelf>.json` (the recordings, made from `/app/audio` like the books).
- Check with `node scripts/check-library.mjs [shelves]`.

```js
export const SHELF = {
  id: 'English-B1-library', language: 'English', level: 'B1', review: 'draft',
  pieces: [ /* pieces */ ],
};
```

## Pieces
```js
{ id: 'job-interview', kind: 'listen', genre: 'interview', minutes: 4, topics: ['work'],
  title: 'A first day at work',            // in the language being learned
  about: 'A new nurse talks about her first day on a hospital ward.',   // explanation (translated)
  recs: [{ lines: [{ who: 'Presenter', s: '...' }, { who: 'Anna', s: '...' }] }],   // listening
  text: { md: 'Paragraph.\n\nParagraph.' },                              // reading
  words: [{ w: 'ward', n: 'a room in a hospital with beds for patients' }],   // 6 to 10 words from the piece
  blocks: [ /* 3 to 5 exercise blocks */ ] }
```
- `id`: lowercase letters, digits and hyphens, unique on the shelf.
- `kind`: `listen` (with `recs`) or `read` (with `text`).
- `genre`:
  - listening: `dialogue`, `announcement`, `interview`, `talk`, `podcast`;
  - reading: `notice`, `message` (an email, letter or text message), `article`, `opinion`, `story`.
- `topics`: one or two of `daily-life`, `work`, `study`, `travel`, `health`, `food`, `home`, `city`, `nature`, `culture`, `technology`, `society`, `people`.
- `minutes`: about how long the piece takes to listen to or read, exercises included.
- `title` is in the language being learned. `about`, every word meaning `n`, every instruction `h` and every `why` are explanations: write them in English, simply. They are translated.
- `words`: words or phrases exactly as they appear in the piece (inflected as in the text), each with a short meaning. In reading pieces, the dashboard marks them in the text; tapping one shows its meaning. Students can add them to their flashcards.

## Listening
- Lines are spoken one after another by `who`, each in a voice that matches the name or role (see `site/src/data/books/audio.js`). Use names that show gender (Anna, Tom, Frau Weber, Herr Krüger), or the roles Presenter, Interviewer, Speaker, Announcer. Write natural speech: contractions, a little hesitation where people really hesitate, no stage directions or sound effects in the text.
- One recording is usual; a piece can have up to three short ones (for example three announcements).
- The student can play the recording as often as they like, slower too. The transcript is hidden until they ask for it or finish the exercises, and the line being spoken is highlighted.

## Reading
- `text.md`: paragraphs separated by a blank line; `**bold**` for a title or heading inside the text (a notice, an email subject), `*italic*` for emphasis. Write it like the real thing: a notice looks like a notice, an email has its greeting and sign-off. Short stories are original fiction with a beginning, a middle and an end.
- Reading pieces are also read aloud when their recording has been made ("Listen while you read").

## Exercises
- Kinds: `choice`, `tf` (`ng: true` for "not given"), `pick`, `gap`, `select`, `match`, `order`, `bank`, `spot`, `sort`, `odd` (formats in `docs/BOOKS.md` and `docs/TESTS.md` for `pick`). Not `cloze`, `write`, `talk`, `memory`, `search`, `speak`, the listening kinds or the picture kinds.
- Three to five blocks per piece, from understanding to language: first the gist (what is it about, who, why), then details, then words or grammar from the piece. About 10 to 16 items in all.
- Items are in the language being learned and must be answerable from the piece. Every item has a `why` that points to the line or sentence that gives the answer.
- No question numbers in instructions.

## Lengths
| Level | Listening (words spoken) | Reading (words) |
|---|---|---|
| A2 | 150 to 250 | 150 to 250 |
| B1 | 250 to 400 | 300 to 450 |
| B2 | 400 to 600 | 450 to 700 |

## Content rules
- Original texts and recordings, natural and idiomatic, at the level (CEFR), on everyday, work, study, travel and culture topics. No real brands, no real living people, nothing copied or adapted.
- No emojis. No numbered or bulleted lists in explanations.
