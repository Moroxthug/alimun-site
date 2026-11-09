// English C1, class 85 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u18:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c85',
  focus: 'By the end every student can put removed paragraphs back into a long text by following its links in both directions: reference words (*this, such, those*), repeated or related ideas, linkers of contrast and time, and the line of the argument. They practise this live on a new article in the format of C1 Advanced Reading and Use of English Part 7, and talk about their own digital habits with the trend tenses, phrasal verbs and collocations of unit 18.',
  tips: [
    'The most common wrong method is choosing a paragraph because it is on the same topic. Every paragraph in Part 7 is on the same topic; only the links decide. Ask *Which word in the paragraph points back, and what does it point to?* for every answer.',
    'A paragraph must fit both the text before the gap and the text after it. Train students to read the sentence after the gap aloud straight after the option they have chosen.',
    'The extra option usually looks right on topic but breaks a fact or the time line of the text. Ask students to prove why it does not fit, not only why the right one does.',
    'Reference words are often small and easy to miss: *it, this, that, such, these, by then, the former*. Students who underline them before choosing find the answers faster.',
    'Keep the speaking part personal and short: one habit, its cost and a trend tense. Note any *have been doubling* or *rose of* mistakes from unit 18 and correct them at the end.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Which screen habit has grown in your life over the last few years? What has it replaced?* Push for a trend tense: *I’ve been reading less and less since I got a tablet.*' },
    { min: 12, title: 'What holds a text together', md: 'Show board page 1. Go through the kinds of links, then students find the linking words in the sentences and say what each one points back to.' },
    { min: 10, title: 'Before and after the gap', md: 'Show board page 2. Students choose the sentence that can follow each paragraph ending and name the link that proves it.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 7. Students work alone for eight minutes with “Everyone solves this”, then justify each answer with a link before you reveal.' },
    { min: 13, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student names the kind of link they found most useful today. Set the homework.' },
  ],
  board: [
    { title: 'What holds a text together', blocks: [
      { t: 'table', caption: 'The links to look for', explain: ['head', 'col1'], head: ['Link', 'What it does', 'Example'], rows: [
        ['reference words', 'point back to something already mentioned', 'This decision was not popular.'],
        ['repeated or related ideas', 'pick up a word or idea from the paragraph before', 'a new rule… the rule itself…'],
        ['linkers of contrast', 'turn the text in a new direction', 'Yet, though, even so, that said'],
        ['linkers of time', 'move the story forward or back', 'By then, within a month, since then'],
        ['the line of the argument', 'follow the order of ideas: a problem, a result, a cost', 'There was a price, of course.'],
      ] },
      { t: 'ex', kind: 'spot', h: 'Find the words that link each sentence to the one before it.', items: [
        { s: 'The council closed the road to cars in March. [This] decision was, [however], far from popular.', why: '*This* points back to closing the road; *however* turns towards the problems.' },
        { s: 'Online sales have been rising for a decade. [Such] growth has forced many shops to close.', why: '*Such* sums up the rise in sales described before.' },
        { s: 'The app was downloaded by millions in its first year. [By then], its founders had already sold it.', why: '*By then* refers back to the end of that first year.' },
        { s: 'Most users ignored the warnings. [Those] who read them were often confused.', why: '*Those* refers back to *users*.' },
      ] },
    ] },
    { title: 'Before and after the gap', blocks: [
      { t: 'ex', kind: 'choice', h: 'Each paragraph ends with the sentence given. Which sentence can begin the next paragraph?', items: [
        { q: '“…and within a year the app had been downloaded two million times.”', o: ['Such rapid growth brought problems of its own.', 'The app was first designed in a small office in Leeds.', 'Downloads, however, had been falling for months.'], why: '*Such rapid growth* picks up the downloads; the third option contradicts them.' },
        { q: '“…so the school decided to ban phones from lessons altogether.”', o: ['Not all parents welcomed the move.', 'Phones have been getting cheaper for years.', 'The ban had been lifted by then.'], why: '*The move* refers back to the ban; the other options break the time line or the topic.' },
        { q: '“…I was sure the new system would save us hours every week.”', o: ['It did, though not in the way I expected.', 'The old system was installed in 2010.', 'That is why I had never tried it.'], why: '*It did* answers the expectation, and *though* prepares a twist.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Read the paragraph you have chosen, then read the sentence after the gap straight away. If the join sounds wrong, the choice is wrong, however well the topic fits.' },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 7', blocks: [
      { t: 'reading', title: 'No laptops at the weekend', md: 'When Marta opened her café on a busy corner of Bristol, she was delighted to see it full from the moment the doors opened. It took her a few months to notice the problem: the tables were always full, but the till was nearly empty.\n\n**[gap one]**\n\nSo last autumn she tried something that her regulars warned her would ruin the business. From Friday evening to Sunday night, laptops would no longer be allowed at the tables.\n\n**[gap two]**\n\nBy the end of the first month, the weekend takings had risen sharply. What surprised Marta more was the change in the room itself. Strangers began to share tables, and the noise, she says, went up in the best possible way.\n\n**[gap three]**\n\nMarta admits that the rule would not suit every café, and on weekdays the laptops are back. But at weekends, she says, the café finally sounds like a café again.' },
      { t: 'reading', title: 'The removed paragraphs', md: '**A.** Most of her customers were working, not eating. One coffee could last a whole afternoon, and a table for four was often taken by a single person with a charger cable.\n\n**B.** The first weekend was difficult. Two regulars walked out, and one left a furious review online. Yet those who stayed ordered more, and many stayed for lunch.\n\n**C.** Not everyone has been won over, of course. A designer who had worked there for two years now goes elsewhere, and says she feels pushed out of a place she helped to fill.\n\n**D.** She had also been offered a second shop across the road, which she turned down because of the rent.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 7): choose the paragraph that fits each gap. One paragraph does not fit.', items: [
        { q: 'Which paragraph fits gap one?', o: ['A', 'B', 'C', 'D'], why: 'A explains why the till was empty, and *So last autumn she tried something* follows from that problem.' },
        { q: 'Which paragraph fits gap two?', o: ['B', 'A', 'C', 'D'], why: '*The first weekend* follows the new rule, and *By the end of the first month* moves the story on.' },
        { q: 'Which paragraph fits gap three?', o: ['C', 'B', 'A', 'D'], why: 'After the benefits comes the cost: *Not everyone has been won over*, which leads into *Marta admits that the rule would not suit every café*.' },
        { q: 'Why does paragraph D not fit anywhere?', o: ['It is about a different decision and has no link to the paragraphs around any gap.', 'It is too short for the exam.', 'It uses the past perfect.'], why: 'D is on the same general topic, the café, but nothing before or after any gap points to it.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 7 of C1 Advanced six paragraphs are removed and there are seven options. Spend about twelve minutes on it, and always check the extra option against the facts of the text before you move on.' },
    ] },
  ],
  activities: {
    one: { title: 'Cut and restore', md: 'The student writes four short paragraphs in the chat about a digital habit that has changed in their life: how it started, how it grew, what it cost and what they did about it. Remove one paragraph and ask the student to point to the links that tell you where it goes. Then make the links stronger together with a reference word or a linker in each paragraph.' },
    small: { title: 'Fill the gap', md: 'Post two paragraphs in the chat with a gap between them (for example the café’s problem, then *Within a week, the change was obvious*). Each student writes the missing paragraph alone in three minutes. The group reads them aloud and decides which one fits both sides best, naming the links.' },
    group: { title: 'Habit trends', md: 'Breakout rooms of three: each student describes one digital habit and how it has changed, with a trend tense (*I’ve been spending more and more time on…*), a phrasal verb from unit 18 (*cut down on, switch off, wear off*) and one collocation (*keep pace with, fall out of use*). Each room reports back the most surprising habit in two linked sentences.' },
  },
  homework: { book: 'u18:p4', md: 'Finish lesson 4 of unit 18 if needed. Then write four paragraphs (about 200 words) on a change in how you use technology, and make every paragraph begin with a clear link to the one before: a reference word, a repeated idea or a linker.' },
};
