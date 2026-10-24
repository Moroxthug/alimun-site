# Alimun level test — specification

Owner request (24 Oct 2026): a larger placement test (about 20 questions) that matches what a serious institution would give, as the entry to sign-up.

## Format
- Adaptive, 20 questions per sitting, levels A1 to C2 (CEFR). Starts at B1; after each answer the next question comes from one level up (correct) or one level down (wrong), never repeating an item.
- Skills: grammar and vocabulary in context ("use"), and reading (a short text with one question). Roughly 70% use, 30% reading per sitting.
- Result: estimated level (highest level where the learner answered at least two thirds of the items seen at that level and at least two items were seen), with per-skill results and the topics of the missed items. It is presented as an estimate, never as a certificate.

## Item bank (one file per test language: `site/src/data/level-test/<language>.js`)
- 60 items per language: 10 per level A1, A2, B1, B2, C1, C2. Per level: 7 "use" items (about 4 grammar, 3 vocabulary) and 3 reading items.
- Item shape:
  `{ id: 'en-b1-03', level: 'B1', skill: 'grammar' | 'vocabulary' | 'reading', topic: '<topic-key>', text: '<reading passage, reading items only>', prompt: '<question or sentence with ___>', options: ['<correct>', '<distractor>', '<distractor>', '<distractor>'] }`
- The first option is the correct one; the page shuffles them. Exactly one option is correct; distractors are plausible errors at that level.
- Topic keys come from a fixed list per language (in the file as `TOPICS`, key -> English label), e.g. `past-simple`, `conditionals`, `phrasal-verbs`, `reading-detail`, `reading-inference`.
- Content follows CEFR descriptors and the grammar/vocabulary inventories used by major exam boards for each language (e.g. Cambridge English, Goethe-Institut, CIEP/France Education international, Instituto Cervantes, CVCL/PLIDA, CAPLE). Original items only; nothing copied from published exams.
