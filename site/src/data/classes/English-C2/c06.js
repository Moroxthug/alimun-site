// English C2, class 6 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u2:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c06',
  focus: 'By the end every student controls the rhythm of what they write and say: a short sentence for impact after longer ones, loose and periodic sentences chosen for effect, parallel structure that holds a list or a contrast together, and inversion (*Never have I…*, *Only later did we…*, *Such was…*) used for a reason, not for show. The exam goal: Part 4 transformations built on inversion and balance, counted to three to eight words.',
  tips: [
    'Read sentences aloud. Students hear rhythm before they see it, and a broken parallel structure or a misplaced inversion usually sounds wrong at once.',
    'Inversion needs the auxiliary in the right place: *Only later did we understand*, not *Only later we understood*. When there is no auxiliary in the plain sentence, students must add *do*, *does* or *did*.',
    'In Part 4, a key word such as *sooner*, *only*, *such* or *circumstances* almost always forces an inversion. Teach students to spot the trigger first.',
    'Warn against overuse. One inversion in a paragraph is powerful; three make a text sound like a speech from a costume drama.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Read the two sentences aloud: *We had checked the engine, the fuel and the forecast, and we had told the coastguard where we were going. The wind did not care.* Ask what the second sentence does and why it is so short.' },
    { min: 10, title: 'Shapes of sentence', md: 'Show board page 1. Students sort the sentences by shape, then read the periodic ones aloud with a pause before the main clause.' },
    { min: 10, title: 'Keep the pattern', md: 'Show board page 2. Students fix the sentences where the pattern breaks and say what the pattern is.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 3: C2 Proficiency Reading and Use of English Part 4. Seven minutes, alone. Check together and count the words of every answer aloud.' },
    { min: 5, title: 'Close', md: 'Each student describes their morning in three sentences: two long and one very short. Set the homework.' },
  ],
  board: [
    { title: 'Shapes of sentence', blocks: [
      { t: 'ex', kind: 'sort', h: 'What shape is each sentence?', groups: ['short, for impact', 'loose: main point first', 'periodic: main point last', 'balanced'], explain: ['groups'], items: [
        { s: 'Then the lights went out.', g: 0, why: 'Very short: a turning point.' },
        { s: 'She left the next morning, without a word, without a note, without even closing the door behind her.', g: 1, why: 'The main clause comes first and the detail piles up after it.' },
        { s: 'Having lost the first two games, a key player and most of their supporters’ patience, the team finally won.', g: 2, why: 'Detail first, the main point held back until the end.' },
        { s: 'To agree was easy; to act was another matter.', g: 3, why: 'Two halves of the same shape set against each other.' },
        { s: 'It worked.', g: 0, why: 'Two words: the reader stops.' },
        { s: 'Where the old mill had stood, beyond the bridge and the last of the cottages, there was now only a car park.', g: 2, why: 'The place is built up first; the point arrives last.' },
      ] },
    ] },
    { title: 'Keep the pattern', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the part that breaks the pattern.', items: [
        { s: 'The job involves planning the budget, managing the team and [to report] to the board.', a: ['reporting'], why: 'Three *-ing* forms: *planning, managing and reporting*.' },
        { s: 'He was not only late but also [he was rude] to the client.', a: ['rude'], why: 'After *not only* + adjective, *but also* takes an adjective: *late… rude*.' },
        { s: 'We would rather fail honestly than [succeeding] by cheating.', a: ['succeed'], why: '*Would rather* + base form, on both sides of *than*.' },
        { s: 'Rarely [the committee has] agreed so quickly.', a: ['has the committee'], why: 'After a fronted negative, invert the auxiliary and the subject.' },
        { s: 'Only after the third attempt [we managed] to open the safe.', a: ['did we manage'], why: '*Only after* + time expression, then the inversion with *did*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Do not change the word given. Use between three and eight words, including the word given.', items: [
        { q: 'As soon as the curtain rose, the lights failed.', cue: 'sooner', gap: 'No ___ the lights failed.', a: ['sooner had the curtain risen than', 'sooner did the curtain rise than'], why: '*No sooner had* + past participle *than*: six words.' },
        { q: 'The public was not told about the decision until much later.', cue: 'only', gap: '___ told about the decision.', a: ['Only much later was the public', 'Only much later were the public'], why: '*Only* + time expression at the start, then inversion: five words.' },
        { q: 'You must not open this door under any circumstances.', cue: 'circumstances', gap: 'Under ___ this door.', a: ['no circumstances must you open', 'no circumstances should you open', 'no circumstances are you to open'], why: '*Under no circumstances* + inverted modal: five or six words.' },
        { q: 'The storm was so violent that the ferry could not sail.', cue: 'such', gap: '___ that the ferry could not sail.', a: ['Such was the violence of the storm'], why: '*Such was* + noun phrase: the adjective *violent* becomes the noun *violence*. Seven words.' },
        { q: 'She is a gifted writer, and she is also a brilliant speaker.', cue: 'only', gap: 'Not ___, but she is also a brilliant speaker.', a: ['only is she a gifted writer'], why: '*Not only* + inversion, balanced by *but also*: six words.' },
        { q: 'The minister never once admitted that mistakes had been made.', cue: 'point', gap: 'At ___ admit that mistakes had been made.', a: ['no point did the minister'], why: '*At no point* + inversion with *did*: five words.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 4** there are **six** sentences, and each answer is usually worth **two marks**, so part of an answer can still score. Find the trigger in the key word first (*sooner*, *only*, *such*, *point*), keep every piece of meaning, and count: contractions count as two words.' },
    ] },
  ],
  activities: {
    one: { title: 'Rhythm editor', md: 'The student tells you, in two minutes, about a moment when something went badly wrong. Then they write it in the chat in five or six sentences. Edit together for rhythm: one short sentence at the turning point, one periodic sentence that holds back the main point, one list in parallel form and, if it earns its place, one inversion. Read the before and after versions aloud.' },
    small: { title: 'The last line', md: 'Each student writes one long sentence in the chat that builds up to a dramatic moment, but stops before the end (*After three hours in the queue, with the rain coming through her shoes and her ticket in her hand,…*). The next student finishes it with a very short sentence for impact. Then the group chooses the best pair and turns it into an inversion (*Never had she…*).' },
  },
  homework: { book: 'u2:p2', md: 'Finish lesson 1 of unit 2 if needed, then do lesson 2 (The former and the latter). Write about 150 words describing an important moment in your life. Use at least one short sentence for impact, one periodic sentence, one list in parallel form and one inversion.' },
};
