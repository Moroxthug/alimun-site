// English C2, class 44 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u9:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c44',
  focus: 'By the end every student can plan the essay on two texts in the format of C2 Proficiency Writing Part 1: find the two key points in each text, paraphrase them with reporting verbs that show stance (*contend, maintain, acknowledge, dismiss, point out*), evaluate each point with the tools of unit 9 (*This rests on the assumption that…*, *It does not follow that…*, *persuasive insofar as… yet…*) and keep their own view for the end. Every student leaves with a plan and a first paragraph of their own essay.',
  tips: [
    'Most weak Part 1 essays are summaries with an opinion attached. Insist on one evaluative sentence for every key point, and ask *How convincing is that, and why?* every time a student only reports.',
    'Copied phrases cost marks. Ban the texts’ key words for the paraphrase task (*heritage, luxury, taxpayers*) and see how students find other ways to say them.',
    'Reporting verbs carry stance: *contend* and *maintain* present a claim, *acknowledge* and *concede* an admission, *dismiss* a refusal, *point out* something presented as fact. A wrong verb misreports the writer.',
    'Organising by theme lifts an essay: here both writers talk about fairness and about who actually visits, so the best essays bring them together on those two points rather than writing Text 1 and then Text 2.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *When did you last visit a museum, and did you pay?* Then: *Should you have?* Collect one reason on each side.' },
    { min: 12, title: 'Two texts, four points', md: 'Show board page 1. Students read both texts alone (four minutes), then do board page 2: the key points. Ask where the two writers answer each other directly.' },
    { min: 10, title: 'Say it in your own words', md: 'Show board page 3. Students choose the best paraphrases and reporting verbs, then explain what is wrong with each rejected option.' },
    { min: 8, title: 'Evaluate', md: 'Show board page 4. Students fix the evaluation sentences and say which unit 9 tool each one uses.' },
    { min: 18, title: 'Activity', md: 'Show board page 5: the task and the plan check. Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student reads out their best evaluative sentence. Set the homework: the full essay.' },
  ],
  board: [
    { title: 'Two texts on free museums', blocks: [
      { t: 'reading', title: 'Text 1: Ours already', md: 'The paintings, fossils and manuscripts in our national museums were bought, in most cases, with public money, and they belong to everyone. To charge citizens at the door is to make them pay twice for what is already theirs, and to tell those on low incomes that their heritage is a luxury. Free entry also changes how people visit. Without a ticket to justify, a family can wander in for twenty minutes on a rainy afternoon, and it is in such unplanned visits that a lifelong interest often begins.' },
      { t: 'reading', title: 'Text 2: Nothing is free', md: 'Free entry is a fine slogan, but someone pays. When ticket income disappears, the cost falls either on taxpayers, many of whom never visit, or on the museums themselves, which cut conservation, research and, above all, the small regional collections. Nor has free entry changed who visits as much as its supporters claim: the main beneficiaries are the well-educated and the tourists who would have come anyway. A modest charge, with free entry for children and those on low incomes, would be both fairer and more sustainable.' },
    ] },
    { title: 'Find the key points', blocks: [
      { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
        { q: 'What are the two key points of Text 1?', o: ['The collections are already public property, so charging is unfair; and free entry encourages casual visits that create lasting interest.', 'Museums have paintings and fossils; and families visit when it rains.', 'Taxes are too high; and museums should open for longer.'], why: 'One point about ownership and fairness, one about how free entry changes visiting habits.' },
        { q: 'What are the two key points of Text 2?', o: ['Free entry shifts the cost to taxpayers or to cuts in museums; and it mainly benefits people who would visit anyway.', 'Slogans are misleading; and tourists are a problem for museums.', 'Regional museums are better; and children should pay.'], why: 'One point about cost, one about who actually benefits. The charge with exemptions is the writer’s proposal, built on both.' },
        { q: 'Where do the two writers answer each other most directly?', o: ['On fairness: Text 1 says charging excludes the poor, Text 2 says free entry mostly helps the better-off.', 'On the opening hours of museums.', 'On whether museums should hold manuscripts.'], why: 'Both use fairness and reach opposite conclusions: the natural theme for one paragraph of the essay.' },
      ] },
    ] },
    { title: 'Say it in your own words', blocks: [
      { t: 'ex', kind: 'choice', h: 'Choose the best paraphrase for the essay.', items: [
        { q: 'Text 1: “To charge citizens at the door is to make them pay twice for what is already theirs.”', o: ['The first writer contends that admission fees would make the public pay a second time for collections it has already funded.', 'The first writer says that charging citizens at the door makes them pay twice.', 'The first writer thinks museums are expensive.'], why: 'New words and a new structure, with a reporting verb for a claim. The second option copies the text.' },
        { q: 'Text 2: “The main beneficiaries are the well-educated and the tourists who would have come anyway.”', o: ['The second writer maintains that free admission largely subsidises visitors who were never deterred by the price.', 'The second writer says the beneficiaries are the well-educated and tourists.', 'The second writer does not like tourists.'], why: '*Subsidises visitors who were never deterred* captures the idea without copying; the third option misreports the writer.' },
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the reporting verb that reports the writer accurately.', items: [
        { q: 'The second writer ___ that free entry chiefly benefits those who would visit anyway.', o: ['maintains', 'concedes', 'admits'], why: 'A claim the writer holds firmly: *maintains*. *Concede* and *admit* would mean it was against their own case.' },
        { q: 'The first writer ___ that the collections were mostly bought with public money.', o: ['points out', 'denies', 'speculates'], why: 'Presented as a fact: *points out*.' },
        { q: 'The second writer ___ free entry as a fine slogan rather than a policy.', o: ['dismisses', 'contends', 'observes'], why: '*Dismiss something as*: reject it as not serious. *Contend* and *observe* do not take this pattern.' },
        { q: 'The first writer does not ___ that free entry has a cost, which weakens the case.', o: ['acknowledge', 'assert', 'reject'], why: '*Acknowledge*: admit that something is true. Noting what a writer leaves out is already evaluation.' },
      ] },
    ] },
    { title: 'Evaluate', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake in each evaluative sentence.', items: [
        { s: 'This argument [rests in] a questionable assumption: that casual visits lead to lasting interest.', a: ['rests on'], why: '*Rest on an assumption*: depend on it.' },
        { s: 'The point is persuasive [insofar that] museums clearly need some income.', a: ['insofar as', 'in so far as'], why: 'The phrase is *insofar as*: to the extent that.' },
        { s: 'Popular as free entry is, it does not [result] that it is fair.', a: ['follow'], why: '*It does not follow that* attacks the logic, not the facts.' },
        { s: 'This objection has some force, yet it [overlooks of] the cost to regional museums.', a: ['overlooks'], why: '*Overlook* is transitive: no preposition.' },
      ] },
      { t: 'tip', art: 'owl', md: 'One sentence of evaluation for every key point is the minimum. Three tools cover most of them: expose the **assumption**, test the **logic**, weigh **strength against weakness**. Your own view then grows out of these judgements, in the last paragraph.' },
    ] },
    { title: 'Exam corner: Writing Part 1', blocks: [
      { t: 'text', md: 'In the format of the C2 Proficiency exam (Writing Part 1): read the two texts on board page 1. Write an essay summarising and evaluating the key points from both texts. Use your own words throughout as far as possible, and include your own ideas in your answer. Write **240 to 280 words**.' },
      { t: 'ex', kind: 'choice', h: 'Check your plan. Choose the best answer.', items: [
        { q: 'Which introduction is best?', o: ['Whether national museums should charge for entry turns on what such institutions are for: one writer sees them as a public right, the other as a service whose costs must be met somehow.', 'In this essay I am going to write about two texts on museums.', 'I strongly believe that museums should be free, as Text 1 says.'], why: 'It frames the issue and both positions in the writer’s own words, and keeps the opinion for the end.' },
        { q: 'Which sentence evaluates rather than only summarises?', o: ['This is persuasive insofar as unplanned visits can start a habit, yet the writer offers no evidence that they usually do.', 'The first writer says that families visit on rainy afternoons.', 'Text 2 is about the cost of museums.'], why: 'It judges the point: a strength (*insofar as*) and a weakness (*yet*).' },
        { q: 'Which plan organises the essay by theme?', o: ['Introduction; fairness (both writers); who actually visits (both writers); my view.', 'Introduction; Text 1; Text 2; my view.', 'My view; Text 1; Text 2; conclusion.'], why: 'Both writers discuss fairness and who benefits, so bringing them together on each theme shows evaluation.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Plan aloud, write one paragraph', md: 'The student plans the essay aloud in five minutes: the four key points in their own words, the theme of each body paragraph and their view. Push for paraphrase whenever they repeat a word from the texts. Then they write the paragraph on fairness on the board (about 80 words) in eight minutes while you stay silent. Mark it together as an examiner would: is every point paraphrased, is every point evaluated, does the reporting verb fit?' },
    small: { title: 'The essay workshop', md: 'Give each student one of the four key points (with more than four students, two share one). In four minutes each writes one summary sentence and one evaluative sentence for their point and posts them in the chat. The group checks each pair: copied words, the right reporting verb, a real evaluation. Then the group agrees an order by theme and one student reads the whole body of the essay aloud. Finish with each student writing their own one-sentence view.' },
  },
  homework: { book: 'u9', md: 'Finish lesson 4 of unit 9 if needed and do the unit 9 test. Write the essay on free museums from board page 5 in 240 to 280 words and send it to your teacher. Then do lesson 1 of unit 10 (Provided that we can agree on terms).' },
};
