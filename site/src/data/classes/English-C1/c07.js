// English C1, class 7 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u2:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c07',
  focus: 'By the end every student tightens a narrative with participle clauses (*Having read the letter twice, she…*, *Not wanting to seem rude, I…*, *Stored in the attic, the paintings…*), keeps the subjects matched, and uses fronting with inversion after place adverbials for drama (*On the hill stood a ruined chapel*). The speaking and writing goal: tell a short, vivid story with two participle clauses and one fronted sentence.',
  tips: [
    'The test for every participle clause: who is doing the action? It must be the subject of the main clause. *Walking home, a dog followed me* means the dog was walking home.',
    'Use the time line: *-ing* for the same time or a reason, *having* + past participle for an earlier action, the past participle alone for a passive meaning.',
    'Inversion after place adverbials only works with a noun subject and verbs of position or movement: *Into the room walked a tall woman*, but *Into the room she walked*.',
    'These structures belong to written and careful spoken narrative. In casual conversation two short sentences are often more natural; say so, so students use them where they fit.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Write two short sentences on the board: *I heard a noise. I went downstairs.* Ask students to join them in as many ways as they can. Collect *Hearing a noise, I went downstairs.*' },
    { min: 12, title: 'Two events, one sentence', md: 'Show board page 1. Students choose the participles, then explain which action came first in each sentence.' },
    { min: 10, title: 'Front it for drama', md: 'Show board page 2. Students put the words in order and fix the mistakes, then each writes one fronted sentence about a place they know.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 2. Students write one word in each gap alone, then compare and say what kind of word each gap needed.' },
    { min: 5, title: 'Close', md: 'Each student reads out the most dramatic sentence they wrote today. Set the homework.' },
  ],
  board: [
    { title: 'Two events, one sentence', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the participle that fits.', items: [
        { q: '___ the letter twice, she finally understood what it meant.', o: ['Having read', 'Read', 'Being read'], why: 'The reading came first: *having* + past participle.' },
        { q: '___ in the attic for decades, the paintings were in poor condition.', o: ['Stored', 'Storing', 'Having storing'], why: 'The paintings did not store anything: a passive meaning, so the past participle.' },
        { q: '___ to seem rude, I accepted a second slice of cake.', o: ['Not wanting', 'Wanting not', 'Not wanted'], why: 'A negative reason: *not* goes before the participle.' },
        { q: '___ the engine, the mechanic noticed a crack in the casing.', o: ['Examining', 'Examined', 'Having examine'], why: 'At the same time as noticing: *-ing*.' },
      ] },
    ] },
    { title: 'Front it for drama', blocks: [
      { t: 'ex', kind: 'order', h: 'Put the words in order to make a fronted sentence.', items: [
        { a: 'Into the room walked a tall woman in a grey coat.', why: 'A direction first, then the verb of movement before a noun subject.' },
        { a: 'On the hill above the village stood a ruined chapel.', why: 'A place first, then *stood* before the subject.' },
        { a: 'Off they ran without a word.', why: 'With a pronoun subject there is no inversion: *they ran*.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Having [finish] their exams, the students went out to celebrate.', a: ['finished'], why: '*Having* + past participle.' },
        { s: 'Out of the shadows [stepped he].', a: ['he stepped'], why: 'No inversion with a pronoun subject.' },
        { s: '[Exhausting] by the climb, we stopped to rest.', a: ['Exhausted'], why: 'We were exhausted by something: a passive meaning, so the past participle.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 2', blocks: [
      { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 2): think of the word which best fits each gap. Use only one word in each gap.', items: [
        { q: '___ lived in the town all her life, she knew every street by name.', a: ['Having'], why: 'An earlier situation that explains the main clause: *Having* + past participle.' },
        { q: '___ wishing to cause offence, he chose his words carefully.', a: ['Not'], why: 'A negative reason: *Not* + *-ing*.' },
        { q: 'At the end of the corridor ___ a heavy wooden door.', a: ['stood', 'was'], why: 'A place adverbial first, then a verb of position before the subject.' },
        { q: 'The storm ___ passed, we set off again.', a: ['having'], why: 'A participle clause with its own subject: *The storm having passed*.' },
        { q: 'Down the street ___ a brass band, playing at full volume.', a: ['came', 'marched', 'went'], why: 'A direction adverbial, then a verb of movement before the noun subject.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 2** a gap at the very start of a sentence is often a participle or a linker. Look at the comma: a clause with no subject before it usually needs *Having*, *Not* or an *-ing* form.' },
    ] },
  ],
  activities: {
    one: { title: 'Tell it again, better', md: 'The student tells a short true story (a journey, a moment of danger, a surprise) in plain sentences. Then they tell it again, adding two participle clauses and one fronted sentence. Write the best version together and read it aloud with the right pauses.' },
    small: { title: 'Story chain', md: 'Start a story in the chat: *Woken by the sound of the door, Lena…* Each student adds one sentence, and every sentence must contain a participle clause or fronting. If a participle dangles, the next student must fix it before adding their own.' },
    group: { title: 'Opening lines', md: 'In breakout rooms of three, students write the first three sentences of a thriller with one participle clause, one *having* clause and one fronted sentence. Bring everyone back; each room reads its opening and the class votes for the one they would keep reading.' },
  },
  homework: { book: 'u2:p2', md: 'Finish lesson 2 of unit 2 if needed, then do lesson 3 (It rings a bell). Write the opening of a story in about 120 words, with at least three participle clauses and one fronted sentence. Check every participle: who is doing the action?' },
};
