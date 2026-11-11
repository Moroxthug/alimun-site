// English C1, class 15 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u4:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c15',
  focus: 'By the end every student reasons about the past with the full range of modal + have and shows how sure they are and how they feel about it: *may well have*, *can’t possibly have*, *will have*, *needn’t have*, *should have* and *might have* as a complaint. The speaking goal: speculate about other people’s working lives with evidence (*judging by…*), as in C1 Advanced Speaking Part 2.',
  tips: [
    'The contrast that matters most: *I needn’t have printed the slides* (I did, and it was a waste) and *I didn’t need to print the slides* (it was not necessary; usually I did not). Ask *Did it happen?* after every example.',
    'Negative deduction is *can’t have* or *couldn’t have*. Students who say *mustn’t have* are translating; correct it every time, gently and quickly.',
    '*Will have* for a confident assumption sounds strange to many learners: *You’ll have heard the news by now.* Give two everyday examples before you ask them to use it.',
    '*You might have told me!* is a complaint, not a guess. The stress falls on *might* and the tone falls. Model it, then let students try it with feeling.',
    'Listen for *should of* and *must of* in writing in the chat: the word is always *have*.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Tell the class: *When I arrived this morning, the office was empty and the lights were on.* Students suggest what must, might or can’t have happened. Write three of their answers on the board.' },
    { min: 12, title: 'How sure, and how you feel', md: 'Show board page 1. Students choose the form, then say how sure the speaker is in their own words (*quite likely*, *completely sure it didn’t*).' },
    { min: 10, title: 'Needn’t have or didn’t need to', md: 'Show board page 2. Students fix the mistakes and, for each one, say whether the action happened.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 4. Students rewrite the sentences alone, count their words, then compare. Reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they needn’t have done this week and one thing someone should have told them. Set the homework.' },
  ],
  board: [
    { title: 'How sure, and how you feel', blocks: [
      { t: 'table', caption: 'Modal + have at C1', explain: ['head', 'col1'], head: ['Form', 'Meaning', 'Example'], rows: [
        ['may well have done', 'quite likely', 'The parcel may well have gone to the old address.'],
        ['can’t possibly have done', 'completely sure it did not happen', 'He can’t possibly have driven there in an hour.'],
        ['will have done', 'a confident assumption', 'You’ll have seen the new timetable by now.'],
        ['needn’t have done', 'it happened, but it was unnecessary', 'We needn’t have queued: there were seats left.'],
        ['might have done!', 'a complaint', 'You might have warned me about the dress code!'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the best form.', items: [
        { q: 'The new trainee ___ the whole manual already; she only started yesterday.', o: ['can’t possibly have read', 'mustn’t have read', 'needn’t have read'], why: 'Completely sure it did not happen: *can’t possibly have*.' },
        { q: 'Don’t phone the supplier. Ana ___ to them by now; she always calls first thing.', o: ['will have spoken', 'needn’t have spoken', 'can’t have spoken'], why: 'A confident assumption about the present result: *will have*.' },
        { q: 'His bag is gone and his screen is off. He ___ home early.', o: ['may well have gone', 'needn’t have gone', 'might have gone!'], why: 'The evidence makes it quite likely: *may well have*.' },
        { q: 'The meeting was cancelled, so I ___ all night on the presentation.', o: ['needn’t have worked', 'didn’t need working', 'can’t have worked'], why: 'I worked, but it was unnecessary: *needn’t have worked*.' },
      ] },
    ] },
    { title: 'Needn’t have or didn’t need to?', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'She [mustn’t have] noticed the error, or she would have said something.', a: ['can’t have', 'couldn’t have', 'cannot have'], why: 'A negative deduction: *can’t have* or *couldn’t have*.' },
        { s: 'I [needn’t have taken] a taxi, so I walked.', a: ['didn’t need to take', 'did not need to take'], why: 'I walked, so the taxi did not happen: *didn’t need to take*.' },
        { s: 'They [can have] missed the bus; it’s possible.', a: ['may have', 'might have', 'could have'], why: '*Can have* is not used for a positive deduction.' },
        { s: 'You really [should of] asked before borrowing my laptop.', a: ['should have', 'should’ve'], why: 'The word is *have*, even when it sounds like *of*.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'What does the speaker mean?', items: [
        { q: '“You might have told me the client was coming!”', o: ['I am annoyed that you didn’t tell me.', 'Perhaps you told me.', 'You were not allowed to tell me.'], why: '*Might have* with a falling tone is a complaint.' },
        { q: '“We needn’t have booked a table.”', o: ['We booked, but the restaurant was empty.', 'We didn’t book, and it was fine.', 'We weren’t able to book.'], why: '*Needn’t have*: it happened and was unnecessary.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. The new part has three to six words, including the word given.', items: [
        { q: 'I’m sure Daniel didn’t write this report on his own.', cue: 'POSSIBLY', a: ['Daniel can’t possibly have written this report on his own.', 'Daniel cannot possibly have written this report on his own.', 'Daniel couldn’t possibly have written this report on his own.'], why: 'Completely sure it did not happen: *can’t possibly have* + past participle.' },
        { q: 'It wasn’t necessary for you to bring food, but you did.', cue: 'NEEDN’T', a: ['You needn’t have brought food.', 'You needn’t have brought any food.'], why: 'It happened, but it was unnecessary: *needn’t have brought*.' },
        { q: 'It’s quite likely that the manager was offered a job elsewhere.', cue: 'WELL', a: ['The manager may well have been offered a job elsewhere.', 'The manager might well have been offered a job elsewhere.'], why: '*May well have* for quite likely, and a passive: *have been offered*.' },
        { q: 'It was wrong of you not to mention the deadline.', cue: 'OUGHT', a: ['You ought to have mentioned the deadline.'], why: 'Criticism of a past action: *ought to have* + past participle.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 4 one answer usually tests two things, and each earns a mark: here the modal and the form after it (*have been offered*). Write between three and six words, do not change the word given, and remember that contractions count as two words.' },
    ] },
  ],
  activities: {
    one: { title: 'What must have happened?', md: 'Describe three short work situations with clues (*the boss came in smiling and ordered cake for everyone*). The student speculates about each with a different modal and gives the evidence: *She must have…, judging by…* Then swap: the student describes a real event from their own job and you guess. Note the forms and go over three at the end.' },
    small: { title: 'Two turning points', md: 'In the chat, give each student two short descriptions of people at a turning point at work (packing a desk, opening a shop, a first day in uniform). Each compares them for one minute, as in Speaking Part 2: why might they have made the change, and how might they be feeling? A partner answers a short follow-up question in thirty seconds.' },
    group: { title: 'Office mysteries', md: 'Breakout rooms of three each get one mystery in the chat (*the whole team left at noon*, *the printer is full of red paper*). Each room agrees on the most likely explanation and one that can’t possibly be true, using four different past modals. Bring everyone back and let the class vote on the best explanation.' },
  },
  homework: { book: 'u4:p1', md: 'Finish lesson 1 of unit 4 if needed, then do lesson 2 (It would appear that…). Write six sentences about things that happened at work or school this month: two with *needn’t have*, two with *may well have* or *can’t possibly have*, and two complaints with *might have*.' },
};
