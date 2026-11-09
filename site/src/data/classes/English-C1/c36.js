// English C1, class 36 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u8:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c36',
  focus: 'By the end every student knows what C1 Advanced Writing Part 1 asks: an essay of 220 to 260 words on two of the three points in the notes, with a clear decision about which is more important or effective. They can analyse a task, plan four paragraphs, use the opinions in their own words, and write an introduction and a conclusion that commit to an answer.',
  tips: [
    'The commonest weak C1 essay is a B2 essay at greater length: all three points, *firstly, secondly, thirdly*, and *both have pros and cons* at the end. Tell students that the decision is part of the task.',
    'Students should choose the two points they have most to say about, not the ones that sound most impressive.',
    'The opinions in the task are there to be used, but in the student’s own words. Copying them shows less range.',
    'Keep the four marking areas visible (content, communicative achievement, organisation, language) and give feedback on each separately when you correct the homework essays.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What do you think changes between a B2 essay and a C1 essay?* Collect three ideas on the blank page.' },
    { min: 10, title: 'The task', md: 'Show board page 1. Read the task together. Students answer the questions about it alone, then compare.' },
    { min: 10, title: 'Four paragraphs', md: 'Show board page 2. Students sort the sentences into the four paragraphs and say what each sentence does.' },
    { min: 20, title: 'Activity: plan the essay', md: 'Use the activity for your class size below. Every student leaves with a plan: two chosen points, the decision and the deciding reason.' },
    { min: 10, title: 'Essay style', md: 'Show board page 3. Students rewrite the sentences in a formal essay style, then read two versions aloud and improve them together.' },
    { min: 5, title: 'Close', md: 'Each student reads their planned final sentence aloud. Set the homework.' },
  ],
  board: [
    { title: 'The task', blocks: [
      { t: 'reading', title: 'Essay task', md: 'Your class has attended a seminar on how towns can stop young people moving away. You have made the notes below.\n\n**Ways to keep young people in their towns:** affordable housing, local jobs, cultural life.\n\n**Some opinions expressed in the seminar:** “Nobody stays where they can’t afford a flat.” “Young people leave for careers, not for nightlife.” “A town without music or a cinema feels dead.”\n\nWrite an essay discussing **two** of the ways in your notes. You should **explain which way is more effective** in keeping young people in their towns, giving reasons in support of your answer. You may, if you wish, make use of the opinions expressed in the seminar, but you should use your own words as far as possible. Write 220 to 260 words.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Writing Part 1): answer these questions about the task before you plan.', items: [
        { q: 'How many of the ways must you discuss?', o: ['Two', 'All three', 'One'], why: 'The task says *discussing two of the ways*.' },
        { q: 'What must the essay decide?', o: ['Which of the two ways is more effective, and why.', 'Whether young people should stay in their towns.', 'Which opinion from the seminar is correct.'], why: '*Explain which way is more effective*.' },
        { q: 'How should you use the opinions?', o: ['In your own words, if they help your argument.', 'Quote all three exactly.', 'Ignore them; they are only examples.'], why: 'They are optional, and the task asks for your own words.' },
        { q: 'Which register is right?', o: ['Formal, with no contractions.', 'Informal, like a blog post.', 'Chatty, like a message to classmates.'], why: 'An essay for a teacher is formal and impersonal.' },
      ] },
    ] },
    { title: 'Four paragraphs', blocks: [
      { t: 'ex', kind: 'sort', h: 'Which paragraph of the essay does each sentence belong to?', groups: ['introduction', 'first point', 'second point', 'conclusion'], explain: ['groups'], items: [
        { s: 'Few problems worry smaller towns more than the steady loss of their young people.', g: 0, why: 'It introduces the topic and why it matters.' },
        { s: 'Of the solutions proposed, housing and employment deserve particular attention.', g: 0, why: 'It names the two chosen points.' },
        { s: 'The case for affordable housing rests on a simple fact: people cannot stay where they cannot afford to live.', g: 1, why: 'It opens the first point with its main reason.' },
        { s: 'Notwithstanding the cost to councils, building homes to rent could reverse the trend within a decade.', g: 1, why: 'It develops the first point and admits a limitation.' },
        { s: 'Local jobs, by contrast, address the reason most young people give for leaving.', g: 2, why: '*By contrast* moves to the second point and compares it.' },
        { s: 'On balance, housing seems the more effective of the two, insofar as a job is of little use without a home nearby.', g: 3, why: 'It makes the decision and gives the deciding reason.' },
      ] },
      { t: 'tip', md: 'Spend about five minutes planning before you write: choose your two points, decide your answer and note one reason and one example for each paragraph. A plan that ends in a clear decision makes the conclusion easy.' },
    ] },
    { title: 'Essay style', blocks: [
      { t: 'ex', kind: 'transform', h: 'Rewrite each sentence in a formal essay style. Start with the words given.', items: [
        { q: 'Loads of young people leave because they can’t find a job.', cue: 'A large number of young people', a: ['A large number of young people leave because they are unable to find work.', 'A large number of young people leave because they cannot find work.', 'A large number of young people leave because they cannot find a job.', 'A large number of young people leave as they are unable to find employment.'], why: '*Loads of* becomes *a large number of*; no contractions.' },
        { q: 'Housing is really important, but I think jobs matter more.', cue: 'On balance', a: ['On balance, employment is more important than housing.', 'On balance, jobs matter more than housing.', 'On balance, jobs are more important than housing.', 'On balance, employment matters more than housing.'], why: '*On balance* makes the decision without *I think*.' },
        { q: 'It costs a lot, but it’s worth it.', cue: 'Although costly', a: ['Although costly, it is worthwhile.', 'Although costly, it is worth the investment.', 'Although costly, it is worth it.'], why: 'A compact formal concession with no contraction.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Plan it together', md: 'Plan the essay with the student: choose two of the three ways, decide which is more effective and find the deciding reason. Say the introduction aloud together, then the student writes the conclusion alone in two sentences. Check that it commits to an answer and does not introduce the third way.' },
    small: { title: 'Two plans, one task', md: 'Pairs choose different pairs of ways from the task and have six minutes to plan: the decision, one reason and one example per paragraph. Each pair presents its plan in one minute. The group decides which conclusion is the most convincing and why.' },
    group: { title: 'Paragraph rooms', md: 'The class chooses one pair of ways and a decision. Each breakout room writes one paragraph (introduction, first point, second point or conclusion). Bring the paragraphs together on the blank page as one essay; the class checks the linking between paragraphs and the word count.' },
  },
  homework: { book: 'u8:p3', md: 'Finish lesson 3 of unit 8 if needed, then do lesson 4 (The city in 2050). Write the full essay from the class task (220 to 260 words) and send it to your teacher, who will correct it and mark it on the four areas. Check the word count and remove every contraction before you send it.' },
};
