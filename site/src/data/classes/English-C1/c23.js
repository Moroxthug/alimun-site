// English C1, class 23 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u5:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c23',
  focus: 'By the end every student has compared four writers’ views on bringing back extinct species in the format of C1 Advanced Reading and Use of English Part 6, can say where writers agree and disagree even when they use different words, and has planned an essay in the format of Writing Part 1 with the unit’s language: passive reporting, nominalisation and careful certainty. The speaking goal: summarise one writer’s position and respond to it.',
  tips: [
    'Part 6 asks about agreement and disagreement between writers, not details. Before the questions, ask students to write one line per writer on each topic (cost, risk, who benefits).',
    'Writers who agree rarely use the same words. When you check, put the two matching phrases side by side on the board.',
    'For the essay plan, insist on a decision: Writing Part 1 asks which of two points is more important, and an essay that sits on the fence loses marks.',
    'Recycle the unit while students talk: reward *is thought to have*, *the reintroduction of*, *it remains to be seen whether*.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *If scientists could bring back the mammoth, should they?* Take a quick vote and two reasons from each side.' },
    { min: 18, title: 'Four views', md: 'Show board page 1. Students read the four texts alone, noting each writer’s overall position, then answer the questions. Check together by comparing the matching phrases.' },
    { min: 7, title: 'Language from the texts', md: 'Show board page 2. Students complete the phrases from memory, then find them in the texts.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: planning an essay in the format of C1 Advanced Writing Part 1. Students choose the best answers, then write their own opening sentence.' },
    { min: 5, title: 'Close', md: 'Each student says which writer they agree with most, and why, in one sentence. Set the homework.' },
  ],
  board: [
    { title: 'Bringing back lost species', blocks: [
      { t: 'reading', title: 'Bringing back lost species', md: '**A. An ecologist**\nSome extinct animals did important work in their ecosystems. The mammoth is thought to have kept the northern grasslands open by trampling young trees, and their return could, in principle, slow the thawing of frozen soil. Nonetheless, there is little evidence so far that a few animals would make any measurable difference, and it remains to be seen whether a copy of a species behaves like the original.\n\n**B. An economist**\nThe question nobody wants to ask is the cost. The money spent recreating one species could protect the habitats of dozens that are still alive. Wealthy donors are understood to be funding most of the research, which is their right, but governments should not follow them. Public money belongs with the animals we are about to lose.\n\n**C. A conservation volunteer**\nI have spent ten years counting birds on an island where one species has already disappeared. When I read that scientists could bring such animals back, I felt hope rather than fear. Of course the attempt will be expensive, and of course it may fail. But a world that can undo some of its damage seems to me worth paying for.\n\n**D. A philosopher**\nThe danger is less in the laboratory than in our heads. If extinction can be reversed, the urgency of preventing it is bound to fade, and we may become careless with the species we still have. I do not oppose the research, provided it is not paid for from the public purse, but its supporters should admit that the main benefit, for now, is scientific knowledge rather than the recovery of nature.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 6): for each question, choose the writer (A, B, C or D).', items: [
        { q: 'Which writer shares writer B’s view that governments should not pay for the research?', o: ['Writer D', 'Writer A', 'Writer C'], why: 'B: *governments should not follow them*; D: *provided it is not paid for from the public purse*.' },
        { q: 'Which writer takes a different view from the others on whether the cost is justified?', o: ['Writer C', 'Writer A', 'Writer B', 'Writer D'], why: 'C: *a world that can undo some of its damage seems to me worth paying for.*' },
        { q: 'Which writer, like writer A, doubts that recreated animals would restore nature in practice?', o: ['Writer D', 'Writer B', 'Writer C'], why: 'A: *little evidence that a few animals would make any measurable difference*; D: *the main benefit… is scientific knowledge rather than the recovery of nature.*' },
        { q: 'Which writer suggests that the possibility of de-extinction could change how people behave?', o: ['Writer D', 'Writer A', 'Writer B', 'Writer C'], why: '*the urgency of preventing it is bound to fade, and we may become careless*' },
      ] },
    ] },
    { title: 'Language from the texts', blocks: [
      { t: 'ex', kind: 'gap', h: 'Complete the phrases from the texts with one word.', items: [
        { q: 'The mammoth is ___ to have kept the northern grasslands open.', a: ['thought', 'believed'], why: 'Writer A: a passive reporting structure about the past.' },
        { q: 'It remains to be ___ whether a copy behaves like the original.', a: ['seen'], why: 'Writer A: an open question.' },
        { q: 'Wealthy donors are ___ to be funding most of the research.', a: ['understood', 'thought', 'believed', 'said'], why: 'Writer B: reported, in progress now.' },
        { q: 'The urgency of preventing it is ___ to fade.', a: ['bound', 'likely', 'certain'], why: 'Writer D: a confident prediction.' },
      ] },
      { t: 'tip', art: 'owl', md: 'The language of this unit carries each writer’s attitude: *is thought to* keeps a distance, *little evidence* doubts, *is bound to* predicts with confidence. In Part 6, these small phrases often decide whether two writers really agree.' },
    ] },
    { title: 'Exam corner: Writing Part 1', blocks: [
      { t: 'text', md: 'Your class has discussed ways of protecting wildlife. Write an essay discussing **two** of these methods, saying which is **more important** and giving reasons: protecting habitats, breeding animals in zoos, recreating extinct species. Write 220 to 260 words in a formal style.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Writing Part 1): choose the best answer about the plan.', items: [
        { q: 'Which opening sentence is most suitable?', o: ['The protection of wildlife has become one of the most pressing questions of our time, and it is often suggested that new technology offers the answer.', 'I think animals are very nice and we must protect them all.', 'In this essay I will write about animals.'], why: 'Formal, with a noun phrase and a passive reporting structure, and it introduces the issue.' },
        { q: 'What should the conclusion do?', o: ['Say which of the two methods is more important and why.', 'Introduce the third method.', 'Repeat the introduction in the same words.'], why: 'Part 1 asks for a decision between the two points.' },
        { q: 'Which sentence shows careful certainty in a body paragraph?', o: ['There is little doubt that the loss of habitat is the main threat, although it remains unclear how quickly it can be reversed.', 'Habitat loss is definitely the only problem and everyone knows it.', 'Maybe habitats are important, maybe not.'], why: 'A confident claim, then an honest limit.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Summarise and respond', md: 'The student summarises each writer’s position in one sentence without looking at the text, then says which writer they disagree with most and argues against them for one minute. You answer as that writer. Note the reporting structures and certainty phrases and go over three at the end.' },
    small: { title: 'Who agrees with whom?', md: 'Each student takes one writer and speaks as them for one minute. After each turn, the others say which writer agrees with the speaker on one point, quoting the two phrases. Finish by agreeing as a group on the strongest argument, with a reason.' },
    group: { title: 'Essay planning rooms', md: 'Breakout rooms of three plan the essay on board page 3: which two methods, one argument and one example for each, and which is more important. Each room writes its opening and closing sentence in the chat. Bring everyone back and compare the decisions and the openings.' },
  },
  homework: { book: 'u5', md: 'Finish lesson 4 of unit 5 and do the unit 5 test. Write the essay on board page 3 (220 to 260 words) in a formal style, with at least two passive reporting structures, three nouns formed from verbs and a clear decision in the conclusion.' },
};
