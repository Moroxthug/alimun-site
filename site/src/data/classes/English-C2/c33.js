// English C2, class 33 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u7:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c33',
  focus: 'By the end every student can do the three jobs of the essay in the format of C2 Proficiency Writing Part 1 on two texts about persuasion: reduce each text to its key point and paraphrase it in their own words with a fair reporting verb, evaluate each point and connect the two texts, and give a view of their own that grows out of the evaluation. In class they plan the whole essay and write the introduction and the first body paragraph; the full essay of 240 to 280 words is the homework.',
  tips: [
    'The commonest loss of marks is summary without evaluation. After every summary sentence, ask *And is that convincing?* until students add *insofar as*, *although it overlooks* or *which rather assumes* by habit.',
    'Paraphrase means a new structure as well as new words. If a student swaps two words in the writer’s sentence, ask them to start the sentence with a different part of it (a noun, *What*, *The writer’s view is that*).',
    'Reporting verbs carry judgement (class 32). In the summary, *argues*, *maintains*, *contends* and *suggests* are fair; *admits* and *claims* add an attitude the student may not intend.',
    'The essay must integrate the texts. A paragraph on text 1 and a paragraph on text 2 that never meet will not score well for organisation; insist on one sentence that links them: *The second writer, by contrast…*',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *If you found out that a speech that moved you had been written by someone else, would it matter to you? Why?* Collect two views on the board.' },
    { min: 8, title: 'The task and the texts', md: 'Show board page 1. Read the task, then give students five minutes to read both texts and note each writer’s key point in five words or fewer.' },
    { min: 12, title: 'Key points in your own words', md: 'Show board page 2. Students choose the best paraphrases, then fix the reporting verbs and explain what each wrong verb would suggest.' },
    { min: 10, title: 'Evaluate and connect', md: 'Show board page 3. Students choose the words that evaluate and link, then match each paragraph of the plan with its job and decide their own view.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below. Students write the introduction and the paragraph on text 1 in fifteen minutes, then mark it.' },
    { min: 5, title: 'Close', md: 'Each student reads their best evaluation sentence aloud. Set the homework.' },
  ],
  board: [
    { title: 'The task', blocks: [
      { t: 'text', md: 'In the format of the C2 Proficiency exam (Writing Part 1): read the two texts below. Write an essay **summarising and evaluating the key points from both texts**. Use your own words throughout as far as possible, and include your own ideas in your answer. Write **240 to 280 words**.' },
      { t: 'reading', title: 'Text 1: Words for hire', md: 'Few people object when a novelist thanks an editor, yet a politician who uses a speechwriter is often treated as a fraud. The objection misunderstands what a speech is. A leader is responsible for the decisions a speech announces, not for every turn of phrase; finding the words is a craft, and a craft can be delegated without dishonesty. Indeed, a good writer often makes a leader more honest, by forcing vague intentions into clear commitments that voters can later hold them to. What matters is not who drafted the sentence but whether the speaker means it and will act on it.' },
      { t: 'reading', title: 'Text 2: The borrowed voice', md: 'We are told that speechwriting is merely a craft, like tailoring. But a suit does not make promises. When a politician delivers lines written, tested and polished by a team, the audience is invited to judge a character that has, in part, been manufactured. The cost is not that speeches are less sincere than they once were; it is that listeners, sensing the machinery, now discount almost everything they hear. A clumsy speech in a leader’s own words may tell us more about how they think than the finest borrowed ones.' },
    ] },
    { title: 'Key points in your own words', blocks: [
      { t: 'ex', kind: 'choice', h: 'Which sentence would work best in the summary?', items: [
        { q: 'Text 1', o: ['The first writer maintains that a politician should be judged on the commitments in a speech rather than on who composed it.', 'The first writer says that finding the words is a craft, and a craft can be delegated without dishonesty.', 'The first writer thinks speechwriters are like novelists.'], why: 'The key point, reduced and in new words and structure. The second option copies; the third is only an example from the text.' },
        { q: 'Text 2', o: ['The second writer contends that professionally crafted speeches have made audiences sceptical of political language in general.', 'The second writer says a suit does not make promises.', 'The second writer believes that clumsy speeches are always better.'], why: 'The central claim, paraphrased. The second option quotes an image; the third distorts *may tell us more* into *always better*.' },
        { q: 'The link between them', o: ['Whereas the first writer locates honesty in a leader’s actions, the second locates it in the voice itself.', 'Both texts are about speeches.', 'The second writer admits that the first writer is wrong.'], why: 'A link sentence that shows exactly where the writers differ; *admits* would be the wrong verb.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the reporting verb that adds the wrong judgement to a neutral summary.', items: [
        { s: 'The first writer [admits] that writing speeches is a craft.', a: ['argues', 'maintains', 'contends', 'suggests'], why: '*Admit* suggests confessing something bad; the writer is proud of the point.' },
        { s: 'The second writer [confesses] that audiences now discount what they hear.', a: ['argues', 'contends', 'suggests', 'maintains'], why: 'The writer is making a claim, not confessing.' },
        { s: 'The first writer [refutes] the idea that speechwriting is dishonest.', a: ['rejects', 'disputes', 'challenges', 'questions'], why: '*Refute* means prove false; the text argues, it does not prove.' },
      ] },
    ] },
    { title: 'Evaluate and connect', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the words that work best in the essay.', items: [
        { q: 'This argument is persuasive ___ voters do judge leaders on what they deliver.', o: ['insofar as', 'whereas', 'notwithstanding'], why: '*Insofar as*: to the extent that; it evaluates and limits the praise.' },
        { q: 'The second writer, ___, regards the speechwriter as a threat to trust itself.', o: ['by contrast', 'in addition', 'as a result'], why: 'A contrast that connects the two texts.' },
        { q: 'However, the first text ___ the fact that voters can rarely tell whose words they are hearing.', o: ['overlooks', 'refutes', 'concedes'], why: '*Overlooks*: fails to consider; a precise criticism.' },
        { q: 'The second writer’s claim is perhaps ___, since some borrowed speeches are trusted precisely because they are clear.', o: ['overstated', 'overlooked', 'outstanding'], why: '*Overstated*: pushed further than the evidence allows.' },
      ] },
      { t: 'ex', kind: 'match', h: 'Match each paragraph of the plan with its job.', pairs: [
        ['Introduction', 'the shared question, and that the writers disagree'],
        ['Text 1', 'its key point paraphrased, then evaluated'],
        ['Text 2', 'its key point paraphrased, evaluated and linked to text 1'],
        ['Your view', 'a position that grows out of your evaluation and goes a step beyond both texts'],
      ] },
      { t: 'tip', art: 'owl', md: 'Your own view does not have to choose a side. *Both writers assume that a speech is judged when it is heard; in my view it is judged months later, against what was done* is a view that grows out of the texts and goes beyond them, which is exactly what the task asks for.' },
    ] },
  ],
  activities: {
    one: { title: 'Timed paragraphs', md: 'The student writes the introduction and the paragraph on text 1 in fifteen minutes while you wait. Mark them together for the four areas (Content, Communicative achievement, Organisation, Language): check that the key point is paraphrased, that there is at least one evaluation, and that no phrase of three or more words is copied from the text. The student rewrites the weaker sentence, and you plan the text 2 paragraph together, starting with a link sentence.' },
    small: { title: 'Write, swap, check', md: 'Each student writes the introduction and the paragraph on text 1 in fifteen minutes. Partners swap and check three things: is the key point paraphrased, is there an evaluation, is anything copied from the text? They underline one strong sentence and mark one to improve. Writers revise, and each reads their evaluation sentence aloud; the group chooses the one that would work best in the final essay.' },
  },
  homework: { book: 'u7:p4 u8:p1', md: 'Finish the essay on the two texts about speechwriting in 240 to 280 words, in about forty-five minutes, and check it against the plan on board page 3 before you send it to your teacher. Then do lesson 1 of unit 8 (Saying one thing in terms of another).' },
};
