// English B1, class 28 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u6:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c28',
  focus: 'By the end of the class every student can read a short news story and the comments under it, understand the facts and the opinions, and report what the people in the story and the commenters said, using the reported speech of unit 6. The reading skill today is choosing the sentence that fits a gap in a text, as in B1 Preliminary Reading part 4.',
  tips: [
    'News stories put the main facts in the first sentence. Ask students to read only the first paragraph and say who, what, where and when before reading the rest.',
    'Comments mix facts and opinions. Ask students to label each comment as funny, angry, kind or practical: this helps the discussion later.',
    'When reporting comments, students forget to change the tense after *said*. Model one report clearly, then let them try.',
    'Reading part 4 is often the hardest part. Practise the strategy: look for words that link the missing sentence to the text around it (*this, it, however, so*).',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Have you ever returned something very late, or found something you thought was lost?* Collect one or two short stories.' },
    { min: 15, title: 'Read the story and comments', md: 'Show board page 1. Students read the first paragraph for the main facts, then the whole story and the comments, and answer the true or false questions.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 2: in the format of B1 Preliminary Reading part 4, students choose the sentence that fits each gap and say which words helped them.' },
    { min: 10, title: 'Report the comments', md: 'Show board page 3. Students report what the people said, then add their own comment and the class reports it.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student reports one thing another student said in the activity. Set the homework.' },
  ],
  board: [
    { title: 'A very late library book', blocks: [
      { t: 'reading', title: 'Book returned 52 years late', md: 'A book that was borrowed from Hartfield Library in 1974 was returned last week, 52 years late. The book, a guide to birds, was posted back by a man who found it while he was cleaning his late mother’s house.\n\nIn his letter, he said he was very sorry and that his mother had loved the book. He offered to pay the fine. The library said there would be no fine, and that the book would go on display.' },
      { t: 'reading', title: 'Comments', md: '**Jen_88**: What a lovely story! It made my day.\n\n**Mark T**: I’ve got a library book from 2015 under my bed… I’ll take it back tomorrow!\n\n**Olu**: The library should still charge him. Rules are rules.' },
      { t: 'ex', kind: 'tf', h: 'Read the story and the comments. Are the sentences true or false?', items: [
        { q: 'The book was returned by the person who borrowed it.', a: 'f', why: 'It was posted back by her son after she died.' },
        { q: 'The library did not ask for money.', a: 't', why: '“there would be no fine”.' },
        { q: 'All the commenters liked the library’s decision.', a: 'f', why: 'Olu thinks the library should still charge him.' },
      ] },
    ] },
    { title: 'Exam corner: Reading part 4', blocks: [
      { t: 'text', md: 'In the format of the B1 Preliminary exam, Reading part 4: three sentences are missing from the text. Choose the one that fits each gap.\n\n*Last month I found an old camera in my grandfather’s cupboard. (1) … I took it to a shop to see if it still worked. (2) … The photos showed my grandfather as a young man on holiday. (3) …*' },
      { t: 'ex', kind: 'choice', h: 'Which sentence fits each gap?', items: [
        { q: 'Gap 1', o: ['There was still a film inside it.', 'The man said he could develop the film.', 'Now they hang on the wall in our living room.'], why: 'It describes what was in the camera before the shop visit.' },
        { q: 'Gap 2', o: ['The man said he could develop the film.', 'There was still a film inside it.', 'Now they hang on the wall in our living room.'], why: 'It follows the shop visit and leads to *The photos showed…*.' },
        { q: 'Gap 3', o: ['Now they hang on the wall in our living room.', 'The man said he could develop the film.', 'There was still a film inside it.'], why: '*they* refers back to *the photos*.' },
      ] },
      { t: 'tip', md: 'In Reading part 4, read the whole text first without the missing sentences. Then for each gap, check the words just before and after it: a pronoun like *they* or *it* must refer to something that is already there.' },
    ] },
    { title: 'Report what they said', blocks: [
      { t: 'ex', kind: 'transform', h: 'Report what the people said. Start with the words given.', items: [
        { q: '“I am very sorry.”', cue: 'He said that he', a: ['He said that he was very sorry.'], why: '*am* becomes *was*.' },
        { q: '“There will be no fine.”', cue: 'The library said that there', a: ['The library said that there would be no fine.'], why: '*will* becomes *would*.' },
        { q: '“I’ll take it back tomorrow.”', cue: 'Mark said that he', a: ['Mark said that he would take it back the next day.', 'Mark said that he would take it back the following day.'], why: '*will* becomes *would*, *tomorrow* becomes *the next day*.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Interview the finder', md: 'You play the man who found the book; the student is a journalist with five questions (*Where did you find it? How did you feel?*). Then the student writes three sentences of the article in reported speech (*He said he had found it while…*). Swap: the student invents a story about finding something, and you interview them.' },
    small: { title: 'The comments section', md: 'Each student writes one comment on the story in the chat: funny, angry, kind or practical. Then each student reports another student’s comment to the group (*Leila said she thought the library was right*). The group discusses: should the library charge a fine?' },
    group: { title: 'Newsroom', md: 'Breakout rooms of three. Each room invents a short, light news story (a lost dog found, a strange object in a park) with a headline, three sentences and two comments. One student reads it to the class; another room reports one comment back in reported speech. Vote for the best headline.' },
  },
  homework: { book: 'u6:p4', md: 'Finish book lesson 4 of unit 6 (A very late library book), including the speaking task. Then write a short news story (70 to 90 words) about something lost and found, with at least two sentences in reported speech.' },
};
