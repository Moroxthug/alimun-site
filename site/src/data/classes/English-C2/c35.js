// English C2, class 35 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u8:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c35',
  focus: 'By the end every student describes narrative voice precisely: first and third person, limited and omniscient narration, free indirect speech (which they can also write), the unreliable narrator and the tone of a passage (*wry, sardonic, elegiac, wistful, detached*). They read a first-person extract in the format of C2 Proficiency Reading and Use of English Part 5 and explain what the reader understands that the narrator does not.',
  tips: [
    'Insist on *the narrator*, never *the author*, when students talk about a first-person text. The difference is the whole point of an unreliable narrator.',
    'Free indirect speech is the technique learners miss most. The test: third person and past tense, but the character’s own questions, exclamations and *here*, *now*, *tomorrow*. Read examples aloud in the character’s voice so students hear the double voice.',
    'Unreliability is signalled by small things: a defence nobody asked for, a contradiction, an explanation that is too convenient. Ask students to find the line where they first stopped believing the narrator.',
    'In Part 5 with a first-person narrator, the right option usually describes what the text shows, not what the narrator believes. Wrong options often repeat the narrator’s own version of events.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Tell me about a time you were completely in the right.* After one or two answers, ask the others: *Do you believe them entirely? What made you wonder?* That is the unreliable narrator.' },
    { min: 10, title: 'Inside a character’s head', md: 'Show board page 1. Students rewrite the thoughts as free indirect speech, then read their versions aloud in the character’s voice.' },
    { min: 8, title: 'Name the tone', md: 'Show board page 2. Students choose the tone of each sentence and point to the words that create it.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 17, title: 'Exam corner', md: 'Show board page 3: Reading and Use of English Part 5, shortened. Students read the extract and answer alone in ten minutes, then compare and find the evidence for each answer in the text.' },
    { min: 5, title: 'Close', md: 'Each student finishes: *The narrator would like us to think…, but the text shows…* Set the homework.' },
  ],
  board: [
    { title: 'Inside a character’s head', blocks: [
      { t: 'ex', kind: 'transform', h: 'Rewrite each thought as free indirect speech. Start with the words given.', items: [
        { q: 'She thought, “Why did I ever agree to this?”', cue: 'Why had', a: ['Why had she ever agreed to this?'], why: 'Backshift and third person, no reporting verb, and her question stays a question.' },
        { q: 'He thought, “I’ll ring her tomorrow. Definitely tomorrow.”', cue: 'He would', a: ['He would ring her tomorrow. Definitely tomorrow.', 'He’d ring her tomorrow. Definitely tomorrow.'], why: '*Will* becomes *would*, but his *tomorrow* and his emphasis remain.' },
        { q: 'She wondered, “Is he going to leave me here?”', cue: 'Was he', a: ['Was he going to leave her here?'], why: 'Free indirect speech keeps the character’s *here*; reported speech would change it to *there*.' },
        { q: 'He thought, “This house is far too big for me now.”', cue: 'This house was', a: ['This house was far too big for him now.'], why: 'Past tense and *him*, but the character’s *now* stays.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Free indirect speech lets the narrator stand very close to a character and, at the same time, slightly apart. That small distance is where irony lives: *The party was, of course, a triumph* can be the hostess’s thought and the narrator’s smile at once.' },
    ] },
    { title: 'Name the tone', blocks: [
      { t: 'ex', kind: 'choice', h: 'What is the tone of each sentence?', items: [
        { q: '“The council’s commitment to the arts was unwavering, which is why the theatre had been closed for only eleven years.”', o: ['sardonic', 'elegiac', 'detached'], why: 'The second half mocks the first: scornful irony.' },
        { q: '“There had been a garden once, behind the bakery, and on summer evenings you could almost hear it breathing.”', o: ['elegiac', 'sardonic', 'detached'], why: 'Something lost, remembered with longing and sorrow.' },
        { q: '“The patient was admitted at 4.10 and died at 4.52. The forms were completed by five.”', o: ['detached', 'wistful', 'wry'], why: 'Cool, clinical facts with no comment; the coldness itself is the point.' },
        { q: '“It was, I suppose, a successful wedding: only one of the speeches made anyone cry for the wrong reasons.”', o: ['wry', 'elegiac', 'detached'], why: 'Dry, quietly amused understatement.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 5', blocks: [
      { t: 'text', md: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 5), shortened: in the exam the text is longer and there are six questions; here there are four. Read the extract from a story told by a retired newspaper editor, then choose the answer which fits best according to the text.' },
      { t: 'reading', title: 'From “The Recommendation”', md: 'I should say at once that I bore Clare Webb no ill will. People have suggested otherwise since her book came out, and I can see why a careless reader might think so, but the facts are simple. When the post of senior editor fell vacant, I recommended the candidate I believed would serve the paper best, and that candidate was not Clare.\n\nShe was, I freely admit, talented. Her pieces were quick and clever, sometimes too clever for our readers, who liked to know where a sentence was going before it got there. I told her so more than once, kindly, I think. She would nod and thank me and then, the following week, do exactly as she pleased. Some would call that confidence. I called it, in my report to the board, “a reluctance to accept guidance”, which I still consider a fair description.\n\nThe man we appointed, Graham, lasted eighteen months. It was not his fault that sales fell; the whole industry was struggling, as I pointed out at the time. Clare left a month after his appointment, and within three years she was writing for the national papers. I sent her a card when her first book was published. She did not reply, which I put down to the pressures of success.\n\nI have read the chapter in which, without naming me, she describes “a man who mistook his own caution for the reader’s taste”. It is a vivid phrase. I recognise its rhythm, in fact: it is very much the kind of sentence I used to cut from her copy.' },
      { t: 'ex', kind: 'choice', h: 'Choose the answer which fits best according to the text.', items: [
        { q: 'What does the narrator’s opening statement suggest?', o: ['He feels obliged to answer an accusation that has been made against him.', 'He has never thought about Clare since she left the paper.', 'He admires Clare more than anyone else he worked with.', 'He is unaware that Clare has written a book.'], why: 'A defence nobody in the story has asked for, against what *people have suggested*: the first sign of unreliability.' },
        { q: 'What does the narrator’s account of Clare’s writing reveal?', o: ['A preference for the predictable, which he presents as his readers’ taste.', 'A genuine concern that her pieces contained errors.', 'His belief that she lacked talent.', 'His regret at not having given her more guidance.'], why: 'Readers *liked to know where a sentence was going before it got there*: his caution, presented as theirs. He says she was talented.' },
        { q: 'How does the narrator explain Clare’s failure to reply to his card?', o: ['With a convenient reason that avoids a more obvious one.', 'By admitting that he had treated her unfairly.', 'By suggesting that the card never arrived.', 'By blaming Graham for turning her against him.'], why: '*Which I put down to the pressures of success*: the reader sees the likelier reason that he does not.' },
        { q: 'In the last paragraph, the narrator', o: ['confirms the truth of Clare’s description without realising it.', 'shows that he has finally accepted Clare’s criticism.', 'accuses Clare of copying his style.', 'reveals that he helped Clare write her book.'], why: 'He recognises the sentence as the kind he used to *cut*: the very caution she describes. The irony is ours, not his.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Three voices, one evening', md: 'The student tells a small real event (a dinner, a meeting, a journey) in about a minute in the first person. Then they retell part of it in the third person with two sentences of free indirect speech for one character. Finally they tell it as an unreliable narrator who wants to look good, planting two small signals. You name the signals you noticed and the tone of each version.' },
    small: { title: 'Do you believe me?', md: 'Each student tells a short anecdote as an unreliable narrator, defending themselves a little too much and leaving one convenient explanation. The others listen, then say what they think really happened and which line made them stop believing the speaker. Finally the group chooses one anecdote and retells its key moment together in the third person with free indirect speech.' },
  },
  homework: { book: 'u8:p2 u8:p3', md: 'Finish lesson 2 of unit 8 if needed, then do lesson 3 (Writing about what you read). Write about 150 words of a story told by a narrator the reader should not fully trust. Include at least two sentences of free indirect speech or two signals of unreliability, and name the tone you were aiming for at the end.' },
};
