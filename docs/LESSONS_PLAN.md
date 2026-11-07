# Class lessons and the classroom board

Owner, 7 Nov 2026: "the classes should be prepared by us. A class starts from A1, then each lesson is prepared by us and has material that the teacher can choose to show. It also has the homework assignment, exercises for class, activities for students based on class size, tips for the teacher, and a note for the teacher showing what the focus should be. The teacher can use it or not, but we provide it, and the board is used for this." Plus: at some moment the teacher says "solve this exercise", each student gets their own board for a few minutes, sends it to the teacher, the teacher opens each student's board, and when the exercise ends everyone is back on the shared board.

Status: plan, waiting for the owner's answers in "Decisions". Nothing is built yet.

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

- Tables (one migration each step, RLS on): `class_lessons` (course key, position, title, status, focus, tips, board pages, activities by size, homework), `sessions.lesson_id`, `cohorts.lesson_cursor`, `session_boards` (one shared board per class date: pages and strokes), `session_board_solo` (one per student per solo exercise).
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
- D2 depends on how long a level takes: proposal in "Course length" below, owner to confirm.
- D3 open: the owner is revisiting class sizes and pricing (likely a cap of 15 per class).
- D4 answers are shown only when the teacher reveals them.
- D5 after class: a class digest (what was covered, the teacher's notes, the board where useful), not further work on the boards.
- D6 open: who checks drafted content before teachers and students use it.
- D7 English first, in order A1, A2, B1, B2, C1, C2. Owner's idea for tests: a test from A2 to B1, from B2 to C1 and from C1 to C2.

## Books, second edition (proposal)

Measured on English A1 units 1 and 2 and B1 unit 2: about 800 to 1,000 words of explanation per unit (so roughly 200 to 250 per lesson) against 70 to 95 exercise items in about 20 exercise blocks; one short reading per unit; no listening, speaking or writing tasks. Proposal per lesson: a full explanation (the rule in plain words, why it works this way, many examples, the usual mistakes, a short dialogue or text that uses it), then fewer exercises, ordered from controlled to free, and one skills task (listening with the existing voices, speaking with the pronunciation check, short writing corrected by the teacher). New exercise kinds to add to the engine: listen and write, listen and choose, say it (pronunciation), role-play dialogue, describe the picture, find it in the text, correct the mistakes in a paragraph, short writing. Pilot: English A1 unit 1 rewritten for the owner's review, then the rest of A1.

## Course length (proposal)

Cambridge's guided-learning estimates (cumulative, to reach each level): A2 about 180 to 200 hours, B1 350 to 400, B2 500 to 600, C1 700 to 800, C2 1,000 to 1,200. Per level that is roughly A1 100, A2 100, B1 175, B2 175, C1 200, C2 300 hours of class plus guided study. With Focused (2 classes a week) and about 2 to 3 hours of book, homework and practice a week, A1 and A2 take about 5 to 6 months each, B1 and B2 about 9 months each. These are estimates; the class lesson count per level follows from the owner's choice of pace.
