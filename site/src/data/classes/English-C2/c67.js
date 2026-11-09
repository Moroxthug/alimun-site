// English C2, class 67 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u14:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c67',
  focus: 'By the end every student scans several personal accounts for an idea expressed in different words and matches questions to sections in the format of C2 Proficiency Reading and Use of English Part 7, telling apart sections that say similar things. They talk about living between two cultures and coming home again with the whole of unit 14: careful generalisation, the vocabulary of belonging and heritage, and one or two inversions for emphasis.',
  tips: [
    'Students read the essay *Living in the space between* in the book. Today’s text is new: four people who returned to their home country, so the same theme is seen from the other side.',
    'In Part 7 the questions paraphrase the text. Ask students to underline the key idea in each question and think of two other ways to say it before they read; *had not kept up* may appear as *had frozen*.',
    'Two sections often say similar things. When a student hesitates between two, ask them to check the whole question against each section, not just one word: *a friend’s remark* and *people with a similar experience* point to different people.',
    'Some students will have their own experience of moving or returning. Invite it, but let them choose how much to share.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Have you ever come back to a place after a long time away? What had changed, and what had changed in you?* Each student answers in two or three sentences.' },
    { min: 7, title: 'Words before reading', md: 'Show board page 1. Students match the phrases from the text and their meanings, then guess what the four people will say.' },
    { min: 18, title: 'Exam corner', md: 'Show board page 2: C2 Proficiency Reading and Use of English Part 7, shortened. Students read the questions first, then the four accounts, and answer alone in about ten minutes. Check by asking for the words in the text that match each question.' },
    { min: 8, title: 'The language of the unit', md: 'Show board page 3. Students rewrite the sentences with the language of unit 14, then read them aloud.' },
    { min: 17, title: 'Activity', md: 'Use the activity for your class size below, with the questions on board page 4.' },
    { min: 5, title: 'Close', md: 'Each student says which of the four people they would most like to talk to, and what they would ask. Set the homework.' },
  ],
  board: [
    { title: 'Words before reading', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the phrases from the text with their meanings.', pairs: [
        ['reverse culture shock', 'the difficulty of readjusting to your own country'],
        ['feel like an impostor', 'feel that you do not really deserve your place'],
        ['frozen in time', 'unchanged since a moment in the past'],
        ['move on', 'change and develop'],
        ['a returner', 'someone who comes home after years abroad'],
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 7', blocks: [
      { t: 'reading', title: 'Coming home', md: '**A. Daniela.** When I came back after eleven years, I assumed the hard part was over. My friends had stayed, my family was close, and I spoke the language perfectly, or so I thought. In fact my vocabulary had frozen in the year I left; I kept using slang that made my nieces laugh. Worse, I found myself comparing everything with the country I had left, aloud and at length, until a friend gently asked whether I had come home or merely come back.\n\n**B. Hugo.** Nobody warned me that coming home would be harder than leaving. Abroad, being different was expected; people forgave my mistakes because I was a foreigner. At home I looked and sounded like everyone else, so nobody forgave anything. It took me about two years to stop feeling like an impostor in my own city, and what helped in the end was not my old friends but a group of other returners who understood without explanation.\n\n**C. Mei.** My parents had always talked about home as if it were frozen in time, so I arrived expecting the town of their stories. Of course it had moved on: the cinema was a supermarket, and the local dialect was fading. I was disappointed at first, I admit. Now I think the disappointment was useful. It made me see that the heritage my parents kept was something they had made abroad, as much as something they had brought with them.\n\n**D. Tomas.** I went back because my mother was ill, and I meant to stay three months. That was six years ago. What kept me was work, oddly: the skills I had picked up abroad were rare at home, and within a year I was running a small team. I still miss the life I had there, the friends especially. But I no longer think of one place as real and the other as temporary. Both are simply where I have lived.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 7): which person (A to D) says each of these things? The people may be chosen more than once. (Shortened: four sections and six questions instead of ten.)', items: [
        { q: 'Which person found that their way of speaking had not kept up with change?', o: ['A', 'B', 'C', 'D'], why: 'A: *my vocabulary had frozen in the year I left; I kept using slang that made my nieces laugh*. C mentions a fading dialect, but in the town, not in her own speech.' },
        { q: 'Which person was helped most by people who had been through the same thing?', o: ['B', 'A', 'C', 'D'], why: 'B: *not my old friends but a group of other returners who understood without explanation*.' },
        { q: 'Which person felt that being a foreigner had once made others more tolerant of them?', o: ['B', 'A', 'C', 'D'], why: 'B: *people forgave my mistakes because I was a foreigner*.' },
        { q: 'Which person came to see an early disappointment as valuable?', o: ['C', 'A', 'B', 'D'], why: 'C: *I was disappointed at first… Now I think the disappointment was useful.*' },
        { q: 'Which person stayed far longer than planned, for professional reasons?', o: ['D', 'A', 'B', 'C'], why: 'D: *meant to stay three months… What kept me was work.*' },
        { q: 'Which person was made to question their own attitude by something a friend said?', o: ['A', 'B', 'C', 'D'], why: 'A: *until a friend gently asked whether I had come home or merely come back*. B mentions friends, but they did not change his attitude.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 7** there are **ten** questions and the sections can be chosen more than once. Read the questions first, then read each section once, noting which questions it might answer. A word in common is not enough: check that the **whole idea** in the question is there.' },
    ] },
    { title: 'The language of the unit', blocks: [
      { t: 'ex', kind: 'transform', h: 'Rewrite each sentence using the word given. Keep the meaning.', items: [
        { q: 'Returners always find it harder to come home than to leave.', cue: 'tend', a: ['Returners tend to find it harder to come home than to leave.', 'Returners often tend to find it harder to come home than to leave.'], why: '*Tend to* turns a sweeping *always* into a tendency (lesson 1).' },
        { q: 'Hugo only stopped feeling like an impostor when he met other returners.', cue: 'Only', a: ['Only when he met other returners did Hugo stop feeling like an impostor.', 'Only after he met other returners did Hugo stop feeling like an impostor.', 'Only when Hugo met other returners did he stop feeling like an impostor.', 'Only after Hugo met other returners did he stop feeling like an impostor.'], why: '*Only when* + clause, then *did* + subject + base form (lesson 3).' },
        { q: 'Mei realised that her parents’ traditions were essential to their life abroad.', cue: 'integral', a: ['Mei realised that her parents’ traditions were integral to their life abroad.', 'Mei realized that her parents’ traditions were integral to their life abroad.'], why: '*Integral to*: essential to (lesson 2).' },
        { q: 'Daniela did not know how much her language had changed.', cue: 'Little', a: ['Little did Daniela know how much her language had changed.', 'Little did she know how much her language had changed.'], why: '*Little did* + subject + *know*: she had no idea (lesson 3).' },
      ] },
    ] },
    { title: 'Between two places', blocks: [
      { t: 'text', md: '*Tomas says neither place is real or temporary. Do you agree that people can belong fully to two places?*\n\n*Is it harder to return home or to settle somewhere new? Why might people underestimate the first?*\n\n*Mei says her parents’ heritage was made abroad as much as brought from home. What does she mean, and is it true of other families you know?*' },
      { t: 'examples', items: [
        { s: '**By and large**, people expect leaving to be the hard part, **though by no means all** returners find coming back easy.', n: 'Careful generalisation (lesson 1).' },
        { s: 'Hugo’s story suggests that **a sense of belonging** depends on people rather than places.', n: 'The vocabulary of belonging (lesson 2).' },
        { s: '**Nowhere is this more evident than** in Daniela’s slang.', n: 'Fronting for emphasis (lesson 3).' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Interview a returner', md: 'You play one of the four people (the student chooses which) and the student interviews you for about five minutes, asking follow-up questions about what was hard and what helped. Then swap: the student answers the questions on board page 4 at length, drawing on the text and their own experience, with careful generalisation and at least one inversion. Note three sentences and make each one more precise together.' },
    small: { title: 'Four voices', md: 'Students work in pairs, or in a three. Each student chooses one of the four people and, in the first person, tells the others one more thing that happened to them after the text ends; the others ask two questions each. Then the group discusses one question from board page 4 for five minutes and agrees on one sentence that sums up their view, written on the board with an inversion or a careful generalisation. With two students, each plays two of the people.' },
  },
  homework: { book: 'u14', md: 'Finish lesson 4 of unit 14 if needed and do the unit 14 test in the book. Then write about 200 words in answer to one question on board page 4, using one careful generalisation, three words from lesson 2 of unit 14 and one inversion.' },
};
