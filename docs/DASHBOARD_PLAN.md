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
4. Learning material reader: course books with interactive pages (see section 3). Built, waiting for the owner: `#/book` in `/app/preview` (`js/app/reader.js`); format in `docs/BOOKS.md`; first units of English B1 and German B1 as drafts.
5. Exercise player: every exercise type (section 4) with animations and character reactions.
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

## 3. Learning material
- Course books for every language and every level, A1, A2, B1, B2, C1, C2: extensive, unit by unit, page by page.
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
