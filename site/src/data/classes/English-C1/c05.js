// English C1, class 5 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u1:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c05',
  focus: 'By the end every student has read and discussed a text about how we judge people, can follow a writer’s argument and attitude rather than just the facts, and can give a nuanced opinion with reasons and a concession. The speaking goal: a discussion on first impressions in the format of Speaking Part 4, using the unit’s aspects, dynamic state verbs and character vocabulary.',
  tips: [
    'At C1, reading questions test the writer’s view and purpose. Ask *What is the writer doing in this paragraph: explaining, doubting, criticising?* before asking what it says.',
    'Students who agree completely sound less advanced than students who agree in part. Model *To some extent…*, *That’s true up to a point, but…*',
    'Recycle the whole unit: reward *I’ve been thinking*, *he was being*, *fiercely loyal* whenever they appear in discussion.',
    'Ask students to paraphrase rather than quote. If a student reads a sentence from the text aloud, ask them to say it again in their own words.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Have you ever been completely wrong about someone when you first met them?* Two or three students tell the story briefly.' },
    { min: 15, title: 'The text', md: 'Show board page 1. Students read alone and answer. Check by asking which words in the text gave each answer, and how the wrong options try to trick the reader.' },
    { min: 10, title: 'Words from the text', md: 'Show board page 2. Students match the expressions, then use two of them in a sentence about themselves.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Speaking Part 4. Students choose the best answers, then discuss two of the questions in pairs.' },
    { min: 5, title: 'Close', md: 'Each student finishes: *The first thing people notice about me is… but…* Set the homework.' },
  ],
  board: [
    { title: 'Judged in a minute', blocks: [
      { t: 'reading', title: 'Judged in a minute', md: 'Recruiters have always made quick judgements, but the video interview has made the process faster still. Candidates now record answers to a screen, and many employers admit that a decision is often made within the first minute of the recording. Defenders of the system argue that this is merely honest: a face-to-face interviewer forms an impression just as quickly, and at least a recording can be watched twice.\n\nThe trouble is that a recording strips away the very things that might correct a first impression. In a room, a nervous candidate can recover; a joke can land; an interviewer can notice that the applicant who seemed cold was simply concentrating. On a screen, a moment of awkwardness is preserved, and it is all the viewer has.\n\nNone of this means the video interview should be abandoned. It is cheap, convenient and here to stay. But employers who rely on it might do well to remember that what they are judging is a performance under unusual conditions, not the person who will turn up for work on Monday.' },
      { t: 'ex', kind: 'choice', h: 'Choose the answer which fits best according to the text.', items: [
        { q: 'What do defenders of video interviews claim?', o: ['They are no less fair than meeting someone in person.', 'They remove the need for a first impression.', 'They make interviewers more careful.'], why: 'Paragraph one: *a face-to-face interviewer forms an impression just as quickly*.' },
        { q: 'What is the writer’s main concern in the second paragraph?', o: ['A recording leaves no chance to revise an early impression.', 'Candidates are too nervous to speak naturally on camera.', 'Interviewers find recordings difficult to watch.'], why: '*A recording strips away the very things that might correct a first impression.*' },
        { q: 'What is the writer’s attitude in the last paragraph?', o: ['cautious acceptance', 'strong disapproval', 'complete enthusiasm'], why: 'The writer accepts the system (*here to stay*) but warns employers to be careful.' },
      ] },
    ] },
    { title: 'Words from the text', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the expressions from the text with their meaning in context.', pairs: [
        ['merely honest', 'only being honest, nothing worse'],
        ['strip away', 'remove completely'],
        ['a joke can land', 'a joke can be understood and enjoyed'],
        ['here to stay', 'not going to disappear'],
        ['might do well to', 'would be wise to'],
      ] },
    ] },
    { title: 'Exam corner: Speaking Part 4', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Speaking Part 4): the examiner asks a question for discussion. Choose the answer that would score best.', items: [
        { q: '“Some people say first impressions are usually accurate. What do you think?”', o: ['Up to a point, perhaps. We do pick up on real signals, but I think we read far too much into them, especially when someone is nervous or just having a bad day.', 'Yes, I think they are accurate.', 'First impressions are the impressions that you have first about people.'], why: 'Part 4 rewards a nuanced view: a partial agreement, a reason and a qualification.' },
        { q: '“Is it fair for employers to judge candidates on their appearance?”', o: ['Not in most jobs, no. That said, I can see why it matters in roles where you represent a company, although even then it’s more about being appropriate than being attractive.', 'No, it is not fair at all because it is not fair.', 'Appearance is important, everybody knows that.'], why: 'A clear opinion, a concession (*That said*) and a precise distinction.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Speaking Part 4** the examiner asks questions linked to the topic of Part 3. There is no right answer: develop your view, consider the other side, and respond to what your partner says (*I’d go along with that, but…*).' },
    ] },
  ],
  activities: {
    one: { title: 'Devil’s advocate', md: 'Take the opposite view to the student on *You can tell a lot about a person in the first five minutes*. Each speaks for a minute, then responds to the other. Push for concessions (*I’ll grant you that…*) and precise character vocabulary. Review the strongest phrases at the end.' },
    small: { title: 'First impressions, second thoughts', md: 'Each student tells the group about a person they misjudged at first: what they thought, what they were actually like and what changed their mind. The group asks questions and decides together what tends to mislead us.' },
    group: { title: 'Discussion circles', md: 'Breakout rooms of four discuss three Part 4 questions in the chat for three minutes each (appearance at work, video interviews, whether people change). One student in each room notes phrases for agreeing in part. Bring everyone back and share the best phrases.' },
  },
  homework: { book: 'u1', md: 'Finish lesson 4 of unit 1 and do the unit 1 test, then do lesson 1 of unit 2 (It was to have been our year). Write about 150 words: *Are first impressions worth trusting?* Give your view, concede one point to the other side and conclude.' },
};
