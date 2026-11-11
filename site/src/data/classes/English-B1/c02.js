// English B1, class 2 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u1:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c02',
  focus: 'By the end every student can ask and answer questions about life experiences with the present perfect (*Have you ever…? I’ve never… I’ve… twice*), use *It’s the first time I’ve…* and *the best… I’ve ever…*, and switch to the past simple when they give the details (*When did you go?*). The speaking goal: a two-minute conversation about experiences with follow-up questions.',
  tips: [
    'The key move at B1 is the switch: the present perfect for the experience, the past simple for the details. Model it often: *Have you ever been to Japan? Yes, I have. I went in 2019.*',
    'Learners put *ever* in positive sentences (*I’ve ever been…*). Correct it: *ever* belongs in questions and after superlatives.',
    'Speakers of French, Italian and Spanish often say *It’s the first time I eat this*. Insist on *I’ve eaten*.',
    'Watch *been* and *gone*: *She has gone to Rome* means she is still there.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Say three experiences, one false (*I’ve eaten snake. I’ve run a marathon. I’ve met a famous singer.*). Students guess which is false and ask *When did you…?*' },
    { min: 10, title: 'Have you ever…?', md: 'Show board page 1. Students complete the sentences alone, then check together. Point out the switch to the past simple in the details.' },
    { min: 10, title: 'Firsts and bests', md: 'Show board page 2. Students make the sentences, then each says one true *first time* and one true *best… I’ve ever…*.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 3: B1 Preliminary Reading Part 5. Students work alone for four minutes, then reveal the answers and discuss why the wrong options are wrong.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they have never done but want to do. Set the homework.' },
  ],
  board: [
    { title: 'Have you ever…?', blocks: [
      { t: 'examples', items: [
        { s: '**Have you ever** worked at night? – Yes, **I have**. **I worked** in a hotel for a year.', n: 'The experience, then the details in the past simple.' },
        { s: 'I**’ve never** seen the sea in winter.', n: '*never*: not at any time in my life.' },
        { s: 'She**’s been** to Brazil **twice**.', n: 'How many times: *once, twice, three times*.' },
      ] },
      { t: 'ex', kind: 'gap', h: 'Write the present perfect or the past simple.', items: [
        { q: 'Have you ever ___ (try) Korean food?', a: ['tried'], why: 'A life experience question: *Have you ever* + past participle.' },
        { q: 'Yes, I ___ (have) it in Seoul last year.', a: ['had'], why: '*last year* is a finished time: past simple.' },
        { q: 'My brother ___ (never / fly) on a plane.', a: ['has never flown', '’s never flown'], why: 'Experience in his life up to now: present perfect.' },
        { q: 'We ___ (visit) Rome three times.', a: ['have visited', '’ve visited'], why: 'How many times in our life: present perfect.' },
      ] },
    ] },
    { title: 'Firsts and bests', blocks: [
      { t: 'ex', kind: 'transform', h: 'Rewrite the sentence starting with the words given.', items: [
        { q: 'I have never eaten sushi before.', cue: 'It’s the first time', a: ['It’s the first time I’ve eaten sushi.', 'It’s the first time I have eaten sushi.'], why: 'After *It’s the first time*, the present perfect.' },
        { q: 'I have never seen a better film.', cue: 'It’s the best', a: ['It’s the best film I’ve ever seen.', 'It’s the best film I have ever seen.'], why: 'Superlative + *I’ve ever* + past participle.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I’ve [ever] been to Paris.', a: ['already', 'once'], why: '*ever* is for questions and superlatives, not positive sentences.' },
        { s: 'Have you seen the match [last night]?', a: ['tonight', 'today'], why: 'A finished time needs the past simple; with the present perfect use an unfinished time.' },
        { s: 'She has [went] to Japan twice.', a: ['been'], why: 'Present perfect: *has been*.' },
      ] },
    ] },
    { title: 'Exam corner: choose the right word', blocks: [
      { t: 'reading', title: 'A new hobby', md: 'Last year I started climbing. I’ve ___ climbed outside, only in a sports centre, but next month I’m going to the mountains for the first time. My friend Tom has climbed for years and he has ___ helped me a lot.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading, Part 5): choose the right word for each gap.', items: [
        { q: 'I’ve ___ climbed outside.', o: ['never', 'ever', 'yet'], why: 'A negative experience in positive form: *never*.' },
        { q: 'He has ___ helped me a lot.', o: ['already', 'ever', 'since'], why: '*already* + present perfect: it has happened before now.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading Part 5, the four options are often grammar words or words with similar meanings. Read the whole sentence, including the words after the gap, before you choose.' },
    ] },
  ],
  activities: {
    one: { title: 'Experience ladder', md: 'Ask five *Have you ever…?* questions. For every *yes*, ask two past simple follow-ups (*When? What was it like?*). Then swap. Note every wrong tense and replay those sentences at the end.' },
    small: { title: 'Bingo of experiences', md: 'Put nine experiences in the chat (*been on TV, cooked for ten people, lost a phone…*). Students ask each other *Have you ever…?* and get a name for each square, plus one detail in the past simple. First to five names with details wins.' },
    group: { title: 'Room survey', md: 'Breakout rooms of four with five experiences each. Students ask and record answers, then write two sentences for the class: *Three of us have…, but nobody has ever…* Rooms share their most surprising result.' },
  },
  homework: { book: 'u1:p2', md: 'Do lesson 2 of unit 1 (Finished or not finished?). Write five *Have you ever…?* questions to ask a friend, and write their answers with one detail each.' },
};
