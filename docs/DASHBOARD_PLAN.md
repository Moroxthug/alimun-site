# Alimun dashboards and learning material — plan

Owner, 24 Oct 2026: rebuild the dashboards from scratch, without the current ones as a reference. Every step is shown to the owner and confirmed before the next one starts. Everything must be top quality, visually and in content, with a huge variety so students never get the same thing twice.

## 1. Visual language (step 1, approved direction)
- Palette: forest #1a443c and gold #d5af33 (logo), lime #ceff65, ink #080808, bone #f0efe9, white, and for drawings coral #ff9f8a, mint #9fd6c7, sunflower #ffd166 (plus soft tints and natural skin and hair tones). Fonts: Coolvetica Condensed, Satoshi.
- Drawings, all animated:
  - the Alimun book character (from the logo): reactions in exercises;
  - the Alimun zoo (owl: grammar tips; parrot: speaking; snail: streaks; cat: away; dog: celebrations);
  - language buddies (tea for English, Brezel for German, croissant for French, churro for Spanish, pizza for Italian, pastel de nata for Portuguese);
  - fantasy friends (test dragon: mock test boss; grammar monster: common mistakes; visitor: new words; ghost: forgotten words);
  - everyday friends (suitcase: moving abroad; mug: work; cactus: irregular verbs; sun: daily practice);
  - Open Doodles and Open Peeps (CC0), recoloured, with thought clouds and speech bubbles carrying context-aware jokes (translated).
- One loader everywhere: the owner's Alimun loader (dashboard opening, joining a class, tests, payment).
- Sources and drafts: drawings are SVG in the repo; board drafts were shown to the owner on 24 Oct 2026.

## 2. Build steps (each confirmed by the owner before the next)
1. Drawing style and cast. Done (approved with more variety).
2. Look and navigation: app shell (sidebar on desktop, bottom bar on phones), type scale, cards, motion, loader. Live preview with sample data on alimun.com (noindex). Done (approved): `/app/preview` (`app/preview.html`, `css/app.css`, `js/app/`).
3. Home: next class, today's plan, streak, buddy, focus topics from the level test, free-plan nudge. Done (approved): Home in `/app/preview` reads the signed-in student's own data (`js/app/data.js`); signed out or with `?sample=1` it shows sample data.
4. Learning material reader: course books with interactive pages (see section 3). Built, waiting for the owner: `#/book` in `/app/preview` (`js/app/reader.js`); format in `docs/BOOKS.md`; first units of English B1 and German B1 as drafts. Second version after the owner's feedback: lessons of full pages turned like a book, explanations in the learner's language with a switch, more interaction.
5. Exercise player: every exercise type (section 4) with animations and character reactions. Started 25 Oct 2026; decisions below ("Step 5 decisions"). First part built, waiting for the owner: the shared engine (`js/app/exercises.js`) with 19 kinds and the Practice screen (`#/practice`, `js/app/practice.js`). Still to do in step 5: the drawing board and picture exercises, audio, speaking, and per-item results in the database (`supabase/migrations/202610251200_practice_items.sql`, not applied yet).
6. Flashcards: creation and spaced review.
7. Quizzes and extensive practice sets.
8. Mock tests: certificate formats and Alimun tests (section 5).
9. Listening and reading library.
10. Live classes and calendar: joining, notes, class vocabulary, 1:1 bookings.
11. Homework, essays and teacher feedback.
12. Progress: skills, levels, topics, history.
13. Messages.
14. Settings, plan and billing; free-plan limits and the occasional upgrade pop-up.
15. Teacher dashboard (section 6), then the admin pages, in the same step-by-step way.
The new dashboards are built next to the current ones and switched over only when complete.

## Step 5 decisions (owner, 25 Oct 2026: "do what is best")
- Player: one shared exercise engine (`js/app/exercises.js`, moved out of `reader.js`) used by the book pages, unit tests and a new Practice screen (`#/practice`). Practice serves short mixed rounds built from the student's level, goal, level-test topics and past mistakes, drawn from the book item banks, with no repeat until the bank runs out. Quizzes, long practice sets and timed rounds stay in step 7.
- Item results: a new table for per-item attempts (item id, right or wrong, answer, time) so mistakes come back spaced and the Practice round can be personalised. Migration under `supabase/migrations/`, row-level security like `practice_progress`.
- Audio: generated once per sentence and stored as files, never live, so each sentence costs once and plays instantly. Groq's text-to-speech (Orpheus) only has English and Saudi Arabic and caps requests at 200 characters, so it cannot voice the German, French, Spanish, Italian and Portuguese books. Owner (25 Oct 2026): Google only, ElevenLabs costs too much. Plan: Gemini text-to-speech through a Google AI Studio key (Vercel variable `GOOGLE_AI_API_KEY`, not `GEMINI_API_KEY`, which would move the text features from Groq to Gemini); several voices per language, two speakers per dialogue; a short comparison page first so the owner picks the voices by ear. Files go to Supabase Storage (public bucket for course audio).
- Speaking: Groq Whisper (`whisper-large-v3`, already on the Groq account) transcribes the recording in the language being learned; the player compares it with the expected sentence word by word and shows what was heard, with the missed words marked. Open answers ("answer the question", "describe the picture") get short feedback from the existing Groq text model through `/api/ai`. Recordings are sent, transcribed and discarded, not stored. Whisper is forgiving of accents, so this checks words, not true pronunciation; a pronunciation score (for example Azure Pronunciation Assessment) can come later if the owner wants it.
- Drawings: the approved cast stays, plus new drawings in more styles and a wider range (people in everyday scenes, places, objects for picture exercises, small spot drawings across every dashboard screen), all SVG in the repo, in the approved palette, shown to the owner on a board before use.
- Build order inside step 5: shared engine and the remaining text exercise types first (word bank, drop-down gap, build the sentence, sort into groups, odd one out, find and fix the mistake, transform, conjugate, word formation, collocations, highlight, categorise, crossword, word search, memory pairs), then the drawing board and picture types, then audio (after the owner picks a voice), then speaking.

## 3. Learning material
- Course books for every language and every level, A1, A2, B1, B2, C1, C2: extensive, unit by unit, page by page. Six languages × six levels = 36 course books, about eight units each.
- Content status (25 Oct 2026): English and German A2, B1 and B2 course books complete, eight units each (48 units, about 2,500 lesson exercises plus a unit test per unit); goal books complete for the same levels, four goals each (moving abroad, work, study and exams, travel): 24 books, six units each (144 units, about 5,200 lesson exercises plus a unit test per unit). Explanations of every book in eight languages. All drafts for native-teacher review (`docs/BOOK_REVIEW_NOTES.md`). Next, by the owner's order: the other four languages.
- Every page is interactive: it teaches, then checks understanding with exercises on that page before moving on. Every unit ends with a unit test.
- Goal extensions on top of the core books: moving abroad, work and career, study and exams, travel, solid foundations.
- Focused material: verbs (conjugation tables, irregular verbs, tenses in context), grammar, vocabulary by theme and level, syntax and word order, wording and register (formal, informal, idioms, collocations), common mistakes per native language.
- Listening: graded audio (dialogues, announcements, interviews, talks) with exercises; reading: graded texts (notices, emails, articles, opinion, literature) with exercises.
- Production pipeline: drafted from the CEFR descriptors and exam-board inventories, then reviewed by a native teacher before publishing. Original material only.
- Data model (step 4, `docs/BOOKS.md`): book (language and level) > unit > page > blocks (text, examples, tables, dialogue, tip, reading, exercise; audio and image with step 9); tags for skill, topic, goal.

## 4. Exercises: huge variety
Choose the answer; fill the gap (typed and drop-down); word bank; put words in order; build the sentence; match pairs; sort into groups; odd one out; true, false, not given; find and fix the mistake; transform the sentence; conjugate; word formation; collocations; dictation; listen and choose; listen and type; read and answer; highlight in the text; categorise; drag to the picture; crossword; word search; memory pairs; timed rounds; speaking: repeat and record (pronunciation), describe the picture, answer the question; writing: short answers, emails, essays.
- Personalised: built from each student's mistakes, level, goal and test results; adaptive difficulty; no repeats (spaced and randomised).
- Feedback with the characters: instant correction and a short explanation; streaks and rewards.

## 5. Tests and certificates
- Quizzes, unit tests, level tests.
- Mock tests in the format of IELTS, Cambridge (B2 First, C1 Advanced), Goethe, telc, DELE, DELF/DALF, CILS/CELI, CAPLE: practice only, never official material.
- Alimun tests: our own scored tests across reading, listening, writing and speaking.
- Long term: an Alimun certificate to compete with DET, IELTS and Goethe. That needs psychometric validation, secure delivery and recognition by institutions; plan it as a separate project once the item banks and data are large enough.

## 6. Teacher tools
- Authoring tools: build exercises, pages, quizzes and tests without code.
- Teacher-controlled generation: generate exercises from a topic, a text or the class's mistakes, review and edit before sending.
- Personalised per student (based on their difficulties) and general for the whole class.
- Assign homework and essays, grade with drafted feedback to check and send, follow progress per student and per class.

## 7. Quality bar
Top-notch visual quality and content quality on every screen and every exercise; review by native teachers; huge variety so students do not get the same thing all the time.
