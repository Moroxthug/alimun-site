// English B2, class 62 (docs/LESSONS_PLAN.md). Builds on book lesson u13:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c62',
  focus: 'By the end of the class every student can use cleft sentences to put the focus on the most important part of what they say: *What I love is…*, *What I need is…*, *The thing that…*, and *It was… that / who…*. Students should use them naturally when they talk about music, films and art they love, and when they correct someone politely (*It wasn’t Tom who called, it was Ana*).',
  tips: [
    'Cleft sentences feel strange to many learners because the information is in an unusual order. Start from a normal sentence on the board and transform it in front of the class.',
    'The verb after *What I love* is singular even with a plural noun: *What I love is the songs*, not *are*. Do not insist too hard; native speakers vary, but the exam prefers *is*.',
    'In *It was… that…*, students often repeat the subject: *It was Ana that she called*. Cross out the extra pronoun.',
    'French and Italian speakers already use similar structures (*c’est… qui*, *è… che*); use this as a bridge.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is the best part of a concert for you?* Then repeat one answer as a cleft sentence: *So what you love is the atmosphere.*' },
    { min: 12, title: 'What I love is…', md: 'Show board page 1. Transform the normal sentences into *What…* sentences together. Point out the singular *is*.' },
    { min: 10, title: 'It was… that…', md: 'Show board page 2. Students correct the facts using *It wasn’t… it was…* and complete the transformations.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: B2 First Reading and Use of English Part 4 with cleft sentences. Students work alone, then count the words together.' },
    { min: 5, title: 'Close', md: 'Each student says one *What I really like about English is…* sentence. Set the homework.' },
  ],
  board: [
    { title: 'What I love is…', blocks: [
      { t: 'examples', items: [
        { s: 'I love the energy. → **What I love is** the energy.', n: 'The focus moves to *the energy*.' },
        { s: 'We need more time. → **What we need is** more time.', n: '*What* + subject + verb + *is* + the important part.' },
        { s: 'The ending surprised me. → **What surprised me was** the ending.', n: 'The tense of *be* follows the tense of the sentence.' },
      ] },
      { t: 'ex', kind: 'transform', h: 'Rewrite the sentence, starting with the word given.', items: [
        { q: 'I really enjoy the live music.', cue: 'What', a: ['What I really enjoy is the live music.'], why: '*What* + subject + verb + *is* + the focus.' },
        { q: 'The lighting made the show special.', cue: 'What', a: ['What made the show special was the lighting.'], why: 'Past sentence, so *was*.' },
      ] },
    ] },
    { title: 'It was… that…', blocks: [
      { t: 'examples', items: [
        { s: '**It was** Ana **who** painted this, not Tom.', n: 'Focus on the person; *who* or *that*.' },
        { s: '**It was** in Rome **that** I first heard her sing.', n: 'Focus on the place.' },
        { s: '**It isn’t** the price **that** worries me, it’s the time.', n: 'A polite correction.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'It was my sister [who she] chose the film.', a: ['who'], why: 'No extra subject after *who*.' },
        { s: 'What I like most [are] the colours.', a: ['is'], why: 'After *What I like* use singular *is*.' },
        { s: '[That] was in 2010 that the band split up.', a: ['It'], why: 'Cleft sentences start with *It was*.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 4: complete the second sentence so that it means the same as the first. Use the word given and **two to five words**.' },
      { t: 'ex', kind: 'transform', h: 'Complete the second sentence. Use the word given.', items: [
        { q: 'I didn’t like the actors; I liked the story. (WHAT) It was the story ___, not the actors.', cue: 'WHAT', a: ['what I liked', 'that I liked'], why: 'A cleft sentence with the focus on *the story*.' },
        { q: 'The noise annoyed me most. (WHAT) ___ the noise.', cue: 'WHAT', a: ['What annoyed me most was'], why: '*What* + verb + *was* + the focus.' },
        { q: 'Maria, not Paul, organised the exhibition. (WHO) It was Maria ___ the exhibition.', cue: 'WHO', a: ['who organised'], why: '*It was… who* + verb.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Cleft sentences appear often in Part 4 because they change the order of the whole sentence. Write the full sentence in your head first, then copy only the missing words.' },
    ] },
  ],
  activities: {
    one: { title: 'My favourite things', md: 'The student talks about a favourite film, song and painting, using at least one *What I love about it is…* and one *It was… that…* for each. Then you make three wrong statements about what they said, and they correct you with *It wasn’t… it was…*.' },
    small: { title: 'Correct me', md: 'Each student writes three facts about themselves in the chat, with one detail wrong on purpose (*I first saw the sea in Spain*). The others guess the mistake and correct it with *It wasn’t in Spain that…, it was…*. The writer confirms.' },
    group: { title: 'The best and the worst', md: 'In breakout rooms of four, students talk about the best and worst concert, film or exhibition they have seen, using *What I loved / hated was…*. Each room chooses the funniest story and one student retells it to the class.' },
  },
  homework: { book: 'u13:p1', md: 'Finish book lesson 1 of unit 13. Then write five cleft sentences about your taste in music, films or art: three with *What…* and two with *It was… that…*.' },
};
