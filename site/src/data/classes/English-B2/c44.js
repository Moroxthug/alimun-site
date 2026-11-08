// English B2, class 44 (docs/LESSONS_PLAN.md). Builds on book lesson u9:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c44',
  focus: 'By the end of the class every student has read a longer article about sleep for gist and detail, can explain the main ideas in their own words, and has practised a B2 First Reading Part 7 strategy (matching statements to paragraphs by finding paraphrases, not the same words). Students also use the conditions and purpose language of unit 9 to give advice about sleep.',
  tips: [
    'Students tend to read every word slowly. Give a strict two-minute first read for gist; detail comes later.',
    'In matching tasks, students look for the same word in the text. Show that the exam uses **paraphrases**: *wake up repeatedly* in the question may be *a broken night* in the text.',
    'Keep the discussion personal but kind: some students sleep badly for reasons they may not want to share. Let them talk about "people" rather than themselves.',
    'Recycle unit 9 language deliberately: ask for advice with *unless*, *provided that*, *so that*, *in order to*.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Quick poll: *How many hours did you sleep last night? Is it enough?* Write the range on the board.' },
    { min: 10, title: 'Gist reading', md: 'Board page 1. Students read the article in two minutes and choose the best title. Then they say what each paragraph is about in five words.' },
    { min: 12, title: 'Detail', md: 'Board page 2. True or false on the board; students justify each answer with words from the text.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Board page 3: Reading Part 7. Students match statements to paragraphs, underlining the paraphrase. Reveal and discuss.' },
    { min: 5, title: 'Close', md: 'Each student gives one piece of sleep advice with *so that* or *provided that*. Set the homework.' },
  ],
  board: [
    { title: 'Why we need more sleep than we think', blocks: [
      { t: 'reading', title: 'Why we need more sleep than we think', md: '**A** For years, sleep was seen as wasted time. Today scientists agree that it is one of the most active periods of the day for the brain, which uses the night to sort memories and clear away waste.\n\n**B** Adults need between seven and nine hours, yet a third of people in Europe regularly get less than six. The effects build up slowly: a short night now and then does little harm, but months of broken nights affect mood, memory and even the immune system.\n\n**C** Screens are often blamed, and with reason. Blue light tells the brain it is still daytime, so falling asleep takes longer. Experts suggest switching devices off an hour before bed in order to give the body time to slow down.\n\n**D** Surprisingly, the most effective change is the simplest one: going to bed and getting up at the same time every day, even at weekends. Provided that the timetable stays regular, the body learns when to feel tired.' },
      { t: 'ex', kind: 'choice', h: 'Choose the best title for the article.', items: [
        { q: '', o: ['Sleep: active, necessary and easy to improve', 'Why screens are dangerous for children', 'How to sleep less and do more'], why: 'The article explains what sleep does, why we need it and simple ways to improve it.' },
      ] },
    ] },
    { title: 'Reading for detail', blocks: [
      { t: 'ex', kind: 'tf', h: 'True or false? Find the words in the text.', items: [
        { q: 'The brain is not very active during sleep.', a: 'f', why: 'Paragraph A: it is one of the most active periods for the brain.' },
        { q: 'One short night causes serious problems.', a: 'f', why: 'Paragraph B: a short night now and then does little harm.' },
        { q: 'Blue light makes it harder to fall asleep.', a: 't', why: 'Paragraph C: falling asleep takes longer.' },
        { q: 'A regular timetable helps the body know when to sleep.', a: 't', why: 'Paragraph D: the body learns when to feel tired.' },
      ] },
    ] },
    { title: 'Exam corner: Reading Part 7', blocks: [
      { t: 'tip', art: 'owl', md: 'In Reading Part 7, the questions and the text say the same thing **in different words**. Underline the key idea in the question, then look for a paraphrase, not the same word.' },
      { t: 'ex', kind: 'choice', h: 'In the format of B2 First Reading Part 7: which paragraph (A, B, C or D) mentions each idea?', items: [
        { q: 'A habit that works best if you keep it up seven days a week.', o: ['D', 'B', 'C'], why: 'D: same time every day, even at weekends.' },
        { q: 'A change in how scientists think about sleep.', o: ['A', 'C', 'D'], why: 'A: sleep was seen as wasted time; today scientists agree…' },
        { q: 'The idea that damage happens gradually.', o: ['B', 'A', 'D'], why: 'B: the effects build up slowly.' },
        { q: 'Advice about what to do before going to bed.', o: ['C', 'D', 'B'], why: 'C: switch devices off an hour before bed.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Sleep coach', md: 'The student summarises the article in one minute without looking. Then role-play: you are a tired student, they are a sleep coach giving advice with *unless*, *provided that*, *so that* and *in order to*. Swap roles and compare advice.' },
    small: { title: 'Myths or facts', md: 'Each student writes two statements about sleep, one true and one false (*Cheese gives you nightmares*). The group discusses each and decides, giving reasons with phrases from the article. Finish by agreeing on three tips for the class.' },
    group: { title: 'Paragraph experts', md: 'In breakout rooms of four, each student becomes the expert on one paragraph and explains it to the others in their own words, without reading. The room then writes one Part 7 question for each paragraph. Back together, rooms swap and answer each other’s questions.' },
  },
  homework: { book: 'u9:p4', md: 'Finish book lesson 4 of unit 9. Then write a short email (100 words) to a friend who sleeps badly, giving three pieces of advice with *so that*, *unless* and *provided that*.' },
};
