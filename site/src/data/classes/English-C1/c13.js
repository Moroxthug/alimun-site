// English C1, class 13 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u3:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c13',
  focus: 'By the end every student guides a listener or reader through an argument with discourse markers that concede (*admittedly*, *granted*), counter (*be that as it may*, *that said*, *nonetheless*), reject (*on the contrary*), restate (*to put it another way*) and present the obvious (*needless to say*), and uses rhetorical devices with restraint: the rhetorical question, the rule of three, contrast and repetition. The writing goal: a paragraph of an essay that concedes and counters.',
  tips: [
    'Teach the move before the words: concede, then counter. Once students see the shape, the markers become choices, not vocabulary to memorise.',
    '*On the contrary* rejects what was just said; *on the other hand* adds a second, compatible point. This is the most frequent confusion at C1.',
    '*Be that as it may* introduces disagreement after accepting a point. Students sometimes use it to agree; correct it every time.',
    'Devices lose force when overused. One rhetorical question and one group of three per speech or essay is plenty; reward restraint.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Make a strong claim (*Public transport should be free*). Students react in one sentence each, first accepting part of it, then disagreeing. Write the best concession and counter on the board.' },
    { min: 12, title: 'Concede and counter', md: 'Show board page 1. Students complete the sentences from the bank, then explain why the extra marker does not fit anywhere.' },
    { min: 10, title: 'Devices', md: 'Show board page 2. Students match the sentences with the devices, then write one of their own for each.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Writing Part 1, the essay. Students choose the best sentences, then write the opening of a body paragraph that concedes and counters.' },
    { min: 5, title: 'Close', md: 'Each student reads their concession and counter aloud. Set the homework.' },
  ],
  board: [
    { title: 'Concede and counter', blocks: [
      { t: 'ex', kind: 'bank', h: 'Complete each sentence with a marker from the bank. One marker is not needed.', extra: ['On the other hand'], items: [
        { q: 'Is the scheme a waste of money? ___, it has saved the council thousands.', a: 'On the contrary', why: 'The speaker rejects the idea in the question.' },
        { q: 'Nobody read the report before the vote. ___, the decision was a disaster.', a: 'Needless to say', why: 'The result is presented as obvious.' },
        { q: 'We spend more on parking than on libraries. ___, we value cars above readers.', a: 'To put it another way', why: 'The same point, restated more sharply.' },
        { q: 'You may well be right about the cost. ___, I still think the plan is wrong.', a: 'Be that as it may', why: 'Accept the point, then dismiss it.' },
      ] },
    ] },
    { title: 'Devices', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each sentence with the device it uses.', pairs: [
        ['Who among us has never needed a quiet place to think?', 'a rhetorical question'],
        ['It is cheaper, it is faster and it is fairer.', 'the rule of three'],
        ['Not a luxury, but a lifeline.', 'contrast'],
        ['We will not close it this year. We will not close it next year. We will not close it at all.', 'repetition'],
      ] },
      { t: 'tip', art: 'owl', md: 'A device works when it carries your **main** point. Put the rhetorical question or the group of three where you want the listener to stop and think, usually at the end of a section.' },
    ] },
    { title: 'Exam corner: Writing Part 1, the essay', blocks: [
      { t: 'text', md: 'In **C1 Advanced Writing Part 1** you write an essay of **220 to 260 words**. You read some notes on a topic with three points, choose **two** of them, explain which is more important and give reasons. A strong essay considers the other side before it answers it.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Writing Part 1): the essay question is *Which is the better way for a town to spend its culture budget: museums, festivals or libraries?* Choose the best sentence.', items: [
        { q: 'Which sentence best opens a paragraph that concedes and counters?', o: ['Admittedly, festivals attract visitors in large numbers; nonetheless, the benefit lasts a weekend, whereas a library serves residents all year.', 'Festivals are good and libraries are also good for the town.', 'On the contrary, festivals attract visitors, and they are popular.'], why: 'A concession marker, a counter marker and a precise contrast.' },
        { q: 'Which sentence uses a rhetorical device with control?', o: ['After all, what is a museum worth if the people who live beside it never go inside?', 'Why? Why? Why do we need museums?', 'Is it good, is it bad, is it interesting, is it expensive, is it popular?'], why: 'One rhetorical question that carries the argument, not a string of them.' },
        { q: 'Which conclusion is most effective?', o: ['All things considered, libraries are not a luxury but a necessity, and the budget should reflect that.', 'In conclusion, I have written about museums, festivals and libraries.', 'To conclude, all three are good and the town should do everything.'], why: 'A clear judgement with a contrast, linked to the question.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In the **Writing Part 1** essay, examiners look for an argument that is organised and balanced. Use one concession per body paragraph and make your position clear in the conclusion; do not sit on the fence.' },
    ] },
  ],
  activities: {
    one: { title: 'Concede and counter, fast', md: 'Read out eight claims, one at a time (*Cities should ban cars*, *Exams measure memory, not ability*). The student answers each in two sentences: a concession with *Admittedly* or *Granted*, then a counter with *Be that as it may*, *That said* or *Even so*. Then swap: the student makes the claims.' },
    small: { title: 'Speaking Part 3 practice', md: 'Give the group a question in the chat (*How can a town encourage people to read more?*) with three prompts. Pairs discuss for two minutes, then try to reach a decision in one minute. Others listen for concessions and counters and give one point for each.' },
    group: { title: 'Speechwriters', md: 'In breakout rooms of three, students write a 45-second speech for or against a four-day school week with one concession, one counter, one rhetorical question and one group of three. Each room delivers its speech; the class names the devices they heard.' },
  },
  homework: { book: 'u3:p3', md: 'Finish lesson 3 of unit 3 if needed, then do lesson 4 (A room with no price on the door). Write two body paragraphs (about 140 words) for the essay on the board: each one concedes a point and counters it, and one of them ends with a rhetorical question.' },
};
