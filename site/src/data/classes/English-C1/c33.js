// English C1, class 33 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u7:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c33',
  focus: 'By the end of the class every student can read a longer article about how we communicate, follow the writer’s argument, recognise the writer’s attitude and the purpose of a detail, and discuss the topic using the register, idioms and substitution of unit 7. Reading skills for C1 Advanced Part 5 (attitude and purpose questions) are practised.',
  tips: [
    'Ask students to read the book article before class if possible, so class time goes on discussion. Today’s board text is new, so give six minutes of silent reading.',
    'In Part 5, wrong options often repeat a striking word from the text but change the meaning. Show one example of this trap from today’s questions.',
    'Attitude lives in small words: *some truth in it, but*, *if anything*, *not so much… as*. Ask students to underline them before they answer.',
    'During the discussion, ask for a developed answer: an opinion, a reason, an example and a nod to the other side, as in Speaking Part 4.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *How do you prefer to contact friends, family and colleagues? Why?* Each student answers in two sentences.' },
    { min: 10, title: 'Reading', md: 'Show board page 1. Students read the article alone and answer the true, false or not given questions.' },
    { min: 10, title: 'Words from the text', md: 'Show board page 2. Students match the phrases, then use two of them in a sentence about their own habits.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 5. Students choose alone, then explain why each wrong option is wrong.' },
    { min: 5, title: 'Close', md: 'Each student gives their answer to the title question in one sentence. Set the homework.' },
  ],
  board: [
    { title: 'The article', blocks: [
      { t: 'reading', title: 'Say it, don’t type it', md: 'Ten years ago, a voice message was something you left when nobody answered the phone, and most people deleted it without listening. Today many of us send dozens a week, and some friendships seem to run on them entirely. Critics complain that they are a selfish form of communication: the sender saves time, while the listener has to sit through three minutes of hesitation to find the one fact that matters.\n\nThat complaint has some truth in it, but it misses why people use them. A voice note carries what a written message struggles to: warmth, irony, the pause before bad news. Linguists point out that this is not so much a step back from writing as a return to something older. For most of human history messages were spoken, and the written word was the exception rather than the rule.\n\nWhat is new is the mix. The same person may send a formal email, a three-word text and a rambling voice note within an hour, switching register each time without a second thought. If anything, that suggests we are becoming more skilled at choosing how to speak, not less.' },
      { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
        { q: 'Voice messages used to be treated as unimportant.', a: 't', why: '*most people deleted it without listening*.' },
        { q: 'Critics think voice notes are unfair to the listener.', a: 't', why: '*the sender saves time, while the listener has to sit through…*' },
        { q: 'Linguists believe voice notes damage people’s writing.', a: 'f', why: 'They call it *a return to something older*, not a step back.' },
        { q: 'Most voice notes are sent by young people.', a: 'ng', why: 'The article does not say who sends them.' },
      ] },
    ] },
    { title: 'Words from the text', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the phrases from the article with their meanings.', pairs: [
        ['run on', 'depend on something to keep going'],
        ['sit through', 'stay until the end of something long or boring'],
        ['rambling', 'long and without a clear point'],
        ['without a second thought', 'without stopping to think about it'],
        ['if anything', 'if there is any change, it is the opposite'],
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 5', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 5): choose the answer that fits best according to the article.', items: [
        { q: 'What is the writer’s attitude to the critics’ complaint?', o: ['It is partly fair but ignores what voice notes do well.', 'It is completely mistaken.', 'It explains why voice notes will soon disappear.', 'It is the main reason people send voice notes.'], why: '*That complaint has some truth in it, but it misses why people use them.*' },
        { q: 'Why does the writer mention *the pause before bad news*?', o: ['To give an example of meaning that is hard to show in writing.', 'To show that voice notes are often sad.', 'To criticise people who avoid giving bad news.', 'To explain why listeners find voice notes slow.'], why: 'It is one of the things *a written message struggles to* carry.' },
        { q: 'According to linguists, voice notes are', o: ['a return to the older habit of spoken messages.', 'a new kind of formal writing.', 'a sign that writing is taught less well.', 'less personal than written messages.'], why: '*not so much a step back from writing as a return to something older*.' },
        { q: 'What is the main point of the last paragraph?', o: ['People are getting better at choosing the right register.', 'People write fewer emails than they used to.', 'Switching register so often is tiring.', 'Voice notes are replacing formal emails.'], why: '*we are becoming more skilled at choosing how to speak*.' },
      ] },
      { t: 'tip', md: 'For an attitude question, find the small words that carry the writer’s view (*some truth in it, but*, *if anything*). The right option paraphrases them; an option that copies a striking word from the text is often a trap.' },
    ] },
  ],
  activities: {
    one: { title: 'Argue with the writer', md: 'Go through the article paragraph by paragraph. The student says whether they agree and why; you take the other side each time. Push for developed answers with one idiom and at least one substitution (*I don’t think so, actually*). End with the student summarising their view in two formal sentences.' },
    small: { title: 'Two registers', md: 'Each student retells the article twice: first as an informal voice note to a friend (one minute), then as a two-sentence formal summary for a report. The group listens for any slip between the two registers and picks the best summary.' },
    group: { title: 'For and against rooms', md: 'Breakout rooms of three: half the rooms argue that the internet is making us better communicators, half that it is making us worse. Each room prepares three points with one idiom and one way of avoiding repetition. Back together, one speaker from each side presents and the class decides which case was more convincing.' },
  },
  homework: { book: 'u7:p4', md: 'Finish lesson 4 of unit 7 if needed, then do lesson 1 of unit 8 (Bound to change). Write about 150 words in a neutral, journalistic register on *Voice messages or written ones: which do you prefer, and why?* Use one idiom and at least two ways of avoiding repetition.' },
};
