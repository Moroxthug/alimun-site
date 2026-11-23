# Alimun level test — specification

Owner request (24 Oct 2026): a larger placement test (about 20 questions) that matches what a serious institution would give, as the entry to sign-up.

## Format
- Adaptive, 20 questions per sitting, levels A1 to C2 (CEFR). Starts at B1; after each answer the next question comes from one level up (correct) or one level down (wrong), never repeating an item.
- Skills: grammar and vocabulary in context ("use"), and reading (a short text with one question). Roughly 70% use, 30% reading per sitting.
- Result: estimated level (see "Scoring" below), with per-skill results and the topics of the missed items, and every answer (item id, right or wrong) kept with the result so it can be checked and re-scored.

## Item bank (one file per test language: `site/src/data/level-test/<language>.js`)
- 60 items per language: 10 per level A1, A2, B1, B2, C1, C2. Per level: 7 "use" items (about 4 grammar, 3 vocabulary) and 3 reading items.
- Item shape:
  `{ id: 'en-b1-03', level: 'B1', skill: 'grammar' | 'vocabulary' | 'reading', topic: '<topic-key>', text: '<reading passage, reading items only>', prompt: '<question or sentence with ___>', options: ['<correct>', '<distractor>', '<distractor>', '<distractor>'] }`
- The first option is the correct one; the page shuffles them. Exactly one option is correct; distractors are plausible errors at that level.
- Topic keys come from a fixed list per language (in the file as `TOPICS`, key -> English label), e.g. `past-simple`, `conditionals`, `phrasal-verbs`, `reading-detail`, `reading-inference`.
- Content follows CEFR descriptors and the grammar/vocabulary inventories used by major exam boards for each language (e.g. Cambridge English, Goethe-Institut, CIEP/France Education international, Instituto Cervantes, CVCL/PLIDA, CAPLE). Original items only; nothing copied from published exams.

## Scoring (owner, 23 Nov 2026)

Until 23 Nov 2026 the level was the highest level where at least two items were seen and two thirds were right. It
ignored the levels below and counted lucky guesses (four options), so a learner who failed B1 and B2 but guessed two of
three C1 items was placed C1 (a learner tested C1 had British Council A2+ and TOEIC 550). In 24,000 simulated runs
through the same test it placed 53% at the right level and 5% two or more levels off.

Now the level is the one that best explains all answers: for a learner of ability t (0 = A1 ... 6 = top of C2) the
chance of a right answer to an item of level d is 0.25 + 0.75 / (1 + e^(-2.5 (t - d - 0.5))); the ability with the
highest likelihood over the 20 answers, on a 0.05 grid, rounded down to its level (the lower on a tie). Simulated:
75% at the right level, under 1% two or more off, and no worse than the old rule on big errors when learners guess
more or less or items are harder or easier than labelled. Results carry `scorer: "ml1"` and `items` ([item id, 1/0]; `answers` stays the number answered)
from then on; earlier results (no answers) cannot be re-scored.
