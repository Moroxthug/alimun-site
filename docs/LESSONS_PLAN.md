# Class lessons and the classroom board

Owner, 7 Nov 2026: "the classes should be prepared by us. A class starts from A1, then each lesson is prepared by us and has material that the teacher can choose to show. It also has the homework assignment, exercises for class, activities for students based on class size, tips for the teacher, and a note for the teacher showing what the focus should be. The teacher can use it or not, but we provide it, and the board is used for this." Plus: at some moment the teacher says "solve this exercise", each student gets their own board for a few minutes, sends it to the teacher, the teacher opens each student's board, and when the exercise ends everyone is back on the shared board.

Status: plan, waiting for the owner's answers in "Decisions". Nothing is built yet.

## Status and next step (handoff, 8 Nov 2026)

Done and live: books in the second edition with explanations in eight languages, and class lessons on class dates, for English A1 (8 units, 48 lessons), A2 (8 units, 48), B1 (16 units, 84), B2 (16 units, 84) and C1 (20 units, 98). Classroom steps L1 to L5 are built (lessons on dates, live board, students write, "Everyone solves this", saved board in the class notes). Audio for the new A1, A2, B1, B2 and C1 sentences is the owner's step on /app/audio.

How each level was made (repeat it for the next): a preview book `site/src/data/books/English-<L>-preview.js` (`preview: true`) with one entry and `plan` per unit; helpers write `units/English-<L>-preview/uN.js` in the style of the newest units, checked with `node scripts/check-book.mjs`; `node scripts/play-books.js English-<L>-preview --data=local` after `npm --prefix site run build`; translations by `node scripts/book-strings.mjs` into `i18n/English-<L>.<lang>.json` as a superset; the course order `site/src/data/classes/English-<L>.js` (book pointing at the preview) and lessons `English-<L>/cNN.js`, checked with `node scripts/check-classes.mjs`; then the switch: the book file takes the preview's unit list, units move to `units/English-<L>/`, the preview file goes, the course's book becomes `English-<L>`, translations are trimmed to `book-strings`, new dialogue names go into `site/src/data/books/audio.js`, the course is added to `COURSES` in `js/app/teach-lessons.js`, and a migration adds the `class_courses` row and numbers existing classes.

English C1 done (9 Nov 2026): second edition with 20 units (80 book lessons) and 98 class lessons: a welcome class, the 80 book lessons, ten reviews, one conversation class, three exam-practice classes (Reading and Use of English; Writing; Listening and Speaking), a mid-level check, a practice exam in the format of C1 Advanced and the level test for moving up to C2 as the last class.

In progress (9 Nov 2026): English C2 second edition, preview book `site/src/data/books/English-C2-preview.js` with 16 units (each lesson's plan names its C2 Proficiency part); class lessons `site/src/data/classes/English-C2.js` with `sizes: ['one', 'small']` (80: welcome, 64 book lessons, eight reviews, four exam-practice classes, a mid-level check, a practice exam in the format of C2 Proficiency and the final check). The owner's list adds up to 79, so a mid-level check after unit 8 makes the 80th, as in B1, B2 and C1.

Next: English C2, in a new conversation. Decided by the owner (9 Nov 2026, on the plan shown): C2 runs as small groups of up to six and 1 on 1 only, never full group classes. The book's second edition has 16 units of four lessons (the eight current C2 topics reworked: precision and nuance, style and rhythm, irony, humour and wordplay, academic and critical writing, varieties of English, advanced grammar in use, rhetoric and persuasion, literature and criticism; plus eight new ones), every lesson with a task in the format of a named C2 Proficiency part. The course has 80 class lessons: a welcome class, the 64 book lessons, a review after every two units (8), four exam-practice classes (one per C2 Proficiency paper: Reading and Use of English, Writing, Listening, Speaking), a full practice exam and a final check (no level after C2, so no gate). C2 class lessons have activities for `one` and `small` only; `scripts/check-classes.mjs` must allow a course to leave out `group` (for example a `sizes: ['one', 'small']` field on the course file, which `js/app/teach-lessons.js` already respects by showing only the sizes a lesson has). The eight new units lean towards academic and professional English (owner, 9 Nov 2026: "yes go with that"), balancing the eight literary and stylistic ones: debate and argument; professional communication (negotiating, chairing, writing to senior readers); science and the public; ethics and dilemmas; economics and global affairs; culture and identity (culture as society, not art); language and the mind (meaning, translation, persuasion); and ready for C2 Proficiency (all four papers) as the last unit. Across the book, Writing covers every C2 Proficiency task type. Same method as C1 (above), with the same checks. Decided by the owner (8 Nov 2026): C1 has 20 units of four lessons (80 book lessons, about 96 class lessons: welcome, 80 book lessons, a review after every two units, conversation and exam-practice classes in the format of C1 Advanced, a mid-level check, a practice exam, and the level test for moving up to C2 as the last class); C2 runs as small groups and 1 on 1 only, not full group classes. The last C1 class is the level test for moving up to C2 (owner's gate). Exams: C1 Advanced, C2 Proficiency.

## Positioning (owner, 7 Nov 2026)

Alimun is marketed as preparation for the exams: we prepare you for the test without you spending more to study elsewhere. Every lesson, book unit and class lesson therefore includes work in the format of the exam for its level (A2 Key, B1 Preliminary, B2 First, C1 Advanced, C2 Proficiency), named as "in the format of", never as an official qualification. Course length and the number of lessons per level must be planned so the promise holds (see "Course length").

## What exists today (facts this plan builds on)

- Course books per language, level and track (`site/src/data/books/`, `docs/BOOKS.md`): book > unit > lesson > pages > blocks. English A1 has 8 units of 4 lessons, each with a written outline. Explanation blocks (text, examples, table, dialogue, tip) render with `js/app/reader.js`; every exercise kind renders with `js/app/exercises.js` (`AlimunEx`).
- Teachers' own exercise sets (`teacher_sets`, drafted from a topic by `/api/ai?action=draft-set`), sent to a class as practice. Not tied to a class date.
- Class notes per class date (`session_notes`): grammar focus, vocabulary, homework, written after class.
- `sessions` has no lesson or topic. Cohorts have language, level, track, but no position in a course.
- Classroom: Daily Prebuilt beside a chat panel (`js/app/teach-classes.js`, `js/app/classes.js`). Nothing uses Daily's app messages yet.
- `docs/classroom/PLAN.md` plans a later move from Daily to LiveKit. The board below is our own page beside the video, so it moves with us; only the messaging layer changes.

## What we build

**Class lessons (the content).** For each course (language, level, track) an ordered list of class lessons, written by Alimun. Each lesson has:
- a focus note for the teacher (what the class must get out of it),
- tips for the teacher (common mistakes, timing, how to explain),
- board pages: explanation pages (rule, examples, table) and exercise pages, using the same blocks as the books,
- in-class exercises,
- activities by class size (for example one for 1 on 1, one for small groups, one for full classes),
- the homework assignment, which the teacher sets with one click (it becomes a normal homework with its material).

Lessons are drafted from the book's lesson outline, then reviewed (status draft or approved, as for the books). Teachers only see approved lessons.

**Lessons on class dates.** Each class date gets the next lesson of its course automatically (the class keeps its place in the course). The teacher can swap a date's lesson, skip one or repeat one. Before class, the teacher opens the date and sees the lesson: focus, tips, activities, homework, and a preview of the board.

**The board in the classroom.** Beside the video. It shows the lesson's board pages; the teacher turns the pages and everyone sees the same page. Tools: pen, highlighter, text anywhere, eraser, undo, clear. Exercises on a page can be answered on the board. The teacher can add a blank page or one of their own sets.

**Who can write.** A switch for the teacher: nobody, one chosen student, or everyone. The teacher can always write and can take control back at any moment.

**Solo exercise.** On an exercise page the teacher presses "Everyone solves this" and picks a time (5 minutes by default). Each student gets their own copy of the page with a countdown, and works alone. A student presses "Show the teacher" when done (or the time runs out). The teacher sees every student's name with their state (working, sent), and opens any student's board by clicking the name. Optionally the teacher shows one student's board to the whole class. When the teacher ends the exercise, everyone is back on the shared board as it was.

**After class.** The shared board and each student's solo work are saved with the class date, and appear in the class notes for the teacher and the students.

## How it works (technical)

- Built (7 Nov 2026): lessons are data files, like the books (`site/src/data/classes/<course>.js` and `<course>/<id>.js`, served as `/data/classes/<course>.json`, checked by `scripts/check-classes.mjs`). The database only numbers class dates (`supabase/migrations/202611071800_session_lessons.sql`): `class_courses(id, lessons)`, `cohorts.lesson_start`, `sessions.lesson_no` and `lesson_pinned`, `assign_cohort_lessons()` (run by triggers on any change to a class's dates) and `set_session_lesson()` for the teacher. Still to come: `session_boards` (one shared board per class date: pages and strokes) and `session_board_solo` (one per student per solo exercise).
- Live sync through Daily's app messages (`sendAppMessage`), teacher-authoritative: the teacher's browser holds the state, sends changes, and saves to the database every few seconds and at the end. A student who joins late asks for the current state and the teacher's browser sends it.
- Strokes are stored as points, not pictures, so a board can be replayed and redrawn at any size.
- Content is generated with the existing AI drafting, from the book outline, in batches; reviewed in an admin screen before it is approved.

## Steps (each one shown to the owner before the next)

- **L1, lessons:** tables, the teacher's lesson page on a class date, automatic lesson per date, and the first lessons of English A1 drafted for review.
- **L2, shared board:** the board in the classroom with pages, tools, page turning for everyone, saving.
- **L3, students write:** the teacher's control switch.
- **L4, solo exercise:** private boards with timer, "Show the teacher", the teacher's view of every student, back to the shared board.
- **L5, after class:** saved boards in the class notes.
- **L6, content:** the rest of English A1, then the other courses in the order the owner chooses.

## Decisions

Owner, 7 Nov 2026:
- D1 yes: class lessons follow the book. The books are to be improved first: much more explanation, fewer but better exercises, new kinds of exercises (see "Books, second edition" below).
- D2 decided (owner, 7 Nov 2026): Option B pace and 48 class lessons per level for A1 and A2 (see "Course length").
- D3 open: the owner is revisiting class sizes and pricing (likely a cap of 15 per class).
- D4 answers are shown only when the teacher reveals them.
- D5 after class: a class digest (what was covered, the teacher's notes, the board where useful), not further work on the boards.
- D6 open: who checks drafted content before teachers and students use it.
- D7 English first, in order A1, A2, B1, B2, C1, C2. Owner's idea for tests: a test from A2 to B1, from B2 to C1 and from C1 to C2.

## Books, second edition (proposal)

Measured on English A1 units 1 and 2 and B1 unit 2: about 800 to 1,000 words of explanation per unit (so roughly 200 to 250 per lesson) against 70 to 95 exercise items in about 20 exercise blocks; one short reading per unit; no listening, speaking or writing tasks. Proposal per lesson: a full explanation (the rule in plain words, why it works this way, many examples, the usual mistakes, a short dialogue or text that uses it), then fewer exercises, ordered from controlled to free, and one skills task (listening with the existing voices, speaking with the pronunciation check, short writing corrected by the teacher). New exercise kinds to add to the engine: listen and write, listen and choose, say it (pronunciation), role-play dialogue, describe the picture, find it in the text, correct the mistakes in a paragraph, short writing. Pilot: English A1 unit 1 rewritten for the owner's review, then the rest of A1.

## Course length (decided 7 Nov 2026, Option B)

Pace: two one-hour classes a week (Focused) plus about 30 minutes a day of book and practice, about 5.5 hours a week. Intensive (three classes a week and more home study) goes through the same lessons faster. One set of class lessons per level serves every plan.

A1 and A2: 48 class lessons each (owner). The book has 32 lessons per level (8 units of 4), so a level is the 32 book lessons, one class each, plus 16 classes for review, speaking and exam practice, including the end-of-level check. About 6 months on Focused, about 4 months on Intensive.

B1 (owner, 8 Nov 2026: "more units"): the book grows to 16 units of four lessons (64 book lessons) and the course has 84 class lessons: a welcome class, the 64 book lessons, a review after every two units (8), four conversation classes, four exam-practice classes (one per B1 Preliminary paper: reading, writing, listening, speaking), a mid-level check, a full practice exam in the format of B1 Preliminary and the end-of-level check (no gate test between B1 and B2, owner's choice). About 10 months on Focused.

B2 (owner, 8 Nov 2026: "go on with B2"): the same shape as B1, 16 units and 84 class lessons, in the format of B2 First; the last class is the level test for moving up to C1 (owner's gate between B2 and C1).

C1 and C2 (proposal, same pace, to confirm before those levels are written): B1 and B2 about 84 class lessons each (about 10 months on Focused), C1 about 96, C2 about 144. The B and C books then need more lessons, or two classes per book lesson.

Basis: Cambridge's guided-learning estimates (cumulative to reach each level): A2 about 180 to 200 hours, B1 350 to 400, B2 500 to 600, C1 700 to 800, C2 1,000 to 1,200. Market check (7 Nov 2026): Lingoda about 50 one-hour classes per level; Goethe-Institut online about 60 live hours for A1; separate exam-preparation courses run 10 to 16 weeks at about GBP 600. Students are told "ready to take the exam" after the end-of-level check, never "you will pass"; times assume the home study and allow about 10% for holidays.
