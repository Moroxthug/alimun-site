// English C1, class 42 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u9:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c42',
  focus: 'By the end of the class every student can read four short texts by people who changed direction, match paraphrased statements to the right writer as in C1 Advanced Reading and Use of English Part 8, and tell their own turning-point story with the inversion and the idioms of unit 9.',
  tips: [
    'Ask students to read the book texts before class if possible. Today’s board texts are new; give five minutes for a first read for the general story only.',
    'In Part 8 the statements paraphrase the texts. Train students to decide what kind of idea each statement is (a feeling, a cause, a problem, a regret) before they scan.',
    'A writer can be the answer more than once. Students who cross people out lose marks.',
    'Point out how the writers use inversion only at the moments of greatest emphasis, and how one idiom can carry a whole sentence of meaning.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Do you know anyone who completely changed their career? What happened?* Students share in one or two sentences.' },
    { min: 10, title: 'Reading', md: 'Show board page 1. Students read the four texts for the general story and say which person they would most like to meet and why.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 2: C1 Advanced Reading and Use of English Part 8. A strict time of seven minutes, alone. Check together and point to the words in each text that the statements paraphrase.' },
    { min: 10, title: 'Language in the texts', md: 'Show board page 3. Students complete the phrases from memory, then check in the texts.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student tells their own turning point in one sentence with an inversion or an idiom. Set the homework.' },
  ],
  board: [
    { title: 'The texts', blocks: [
      { t: 'reading', title: 'New directions', md: '**A. Marta, from accountant to midwife.** I spent twelve years checking other people’s figures, and I was good at it. Then my sister had a difficult birth and I stayed with her through the night. Not until I watched the midwife at work did I understand what I wanted to do. Retraining at forty was a leap of faith: I took a large pay cut and moved to a smaller flat. What I had not expected was how much my old job would help, because midwives keep extremely careful records.\n\n**B. Dev, from footballer to teacher.** My career ended at twenty-six with an injury, and for a year I refused to accept it. I sat on the fence about everything, unable to commit to any new plan. It was a former coach who suggested teaching. I had serious second thoughts in my first term, when a class of fourteen-year-olds ignored me completely. Little did I know that two of them would thank me at their graduation.\n\n**C. Helen, from journalist to baker.** People imagine I left journalism because I was unhappy. In fact I loved it, but the newspaper was on the verge of closing and I had to choose. I could have moved to a bigger paper in the capital. Instead I took the plunge and opened a bakery in my home town. So exhausting was the first year that I nearly sold it. I still write, but now it is a menu every morning.\n\n**D. Tomasz, from the city to the island.** For me there was no single moment. The change came gradually, over several summers on the island where my grandparents lived. When the ferry company advertised for a captain, I applied almost as a joke. Only when I signed the contract did I realise I had reached the point of no return: I had already sold my flat to pay for the training. At no time have I regretted it, although the winters are long and the island has one shop.' },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 8', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 8): which person (A Marta, B Dev, C Helen, D Tomasz) says this?', items: [
        { q: 'A skill from my previous job turned out to be useful in my new one.', o: ['A Marta', 'B Dev', 'C Helen', 'D Tomasz'], why: '*how much my old job would help, because midwives keep extremely careful records*.' },
        { q: 'For a while I was unable to make any decision at all.', o: ['B Dev', 'A Marta', 'C Helen', 'D Tomasz'], why: '*I sat on the fence about everything*.' },
        { q: 'I changed career even though I was happy in my old job.', o: ['C Helen', 'A Marta', 'B Dev', 'D Tomasz'], why: '*In fact I loved it*.' },
        { q: 'My change of direction happened slowly.', o: ['D Tomasz', 'B Dev', 'A Marta', 'C Helen'], why: '*The change came gradually, over several summers*.' },
        { q: 'An early experience in my new career made me doubt my choice.', o: ['B Dev', 'C Helen', 'D Tomasz', 'A Marta'], why: '*I had serious second thoughts in my first term*.' },
        { q: 'I accepted earning much less money.', o: ['A Marta', 'C Helen', 'B Dev', 'D Tomasz'], why: '*I took a large pay cut*.' },
        { q: 'I had a choice between two places to work.', o: ['C Helen', 'D Tomasz', 'A Marta', 'B Dev'], why: '*I could have moved to a bigger paper in the capital. Instead…*' },
        { q: 'I came close to giving up my new venture.', o: ['C Helen', 'B Dev', 'D Tomasz', 'A Marta'], why: '*So exhausting was the first year that I nearly sold it*.' },
        { q: 'I have no regrets, despite some disadvantages.', o: ['D Tomasz', 'A Marta', 'C Helen', 'B Dev'], why: '*At no time have I regretted it, although the winters are long*.' },
      ] },
      { t: 'tip', md: 'In Part 8, read the statements first and decide what kind of idea each one is. Then scan for that idea in other words: *came close to giving up* for *nearly sold it*, *unable to make any decision* for *sat on the fence*. A person can be the answer more than once.' },
    ] },
    { title: 'Language in the texts', blocks: [
      { t: 'ex', kind: 'gap', h: 'Complete the phrases from the texts with one word.', items: [
        { q: 'Not until I watched the midwife at work ___ I understand what I wanted to do.', a: ['did'], why: 'Delayed inversion after the *until* clause.' },
        { q: 'I sat on the ___ about everything.', a: ['fence'], why: 'The idiom is *sit on the fence*.' },
        { q: '___ did I know that two of them would thank me at their graduation.', a: ['Little'], why: '*Little did I know*: I had no idea.' },
        { q: 'So exhausting ___ the first year that I nearly sold it.', a: ['was'], why: '*So* + adjective + *was* + subject.' },
        { q: 'I realised I had reached the point of no ___.', a: ['return'], why: 'The fixed phrase is *the point of no return*.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Your story, Part 8 style', md: 'The student tells their own turning point, real or imagined, for two minutes. You write three statements that paraphrase it and the student checks whether each one is accurate. Then swap: you tell a short story and the student writes the statements. Finish by retelling the student’s story with one inversion and one idiom.' },
    small: { title: 'Write the statements', md: 'Each student writes two Part 8 statements that paraphrase one of the four texts and posts them in the chat without the answer. The others find which person each statement is about. The group decides which statements were the best paraphrases.' },
    group: { title: 'Four lives', md: 'Breakout rooms each take one of the four people and prepare to play them in an interview. Back together, one student from each room answers the class’s questions in role. Every answer must include either an inversion or an idiom from unit 9.' },
  },
  homework: { book: 'u9:p4', md: 'Finish lesson 4 of unit 9 if needed, then do lesson 1 of unit 10 (A widely held belief). Write about 150 words about your own turning point, real or imagined, in the style of the four texts, with one inversion and two idioms from unit 9.' },
};
