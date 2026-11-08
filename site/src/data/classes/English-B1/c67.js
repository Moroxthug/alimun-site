// English B1, class 67 (docs/LESSONS_PLAN.md). Builds on book lesson u14:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c67',
  focus: 'By the end of the class every student can contrast two ideas with *but, although, even though, however, despite* and *in spite of*, choosing the right structure after each one (a sentence after *although*, a noun or *-ing* after *despite*, a new sentence after *however*). Students should use them in speaking to give balanced opinions about films, books and events.',
  tips: [
    'The grammar after each word is the whole point. Write three columns: + sentence (*although, even though*), + noun / -ing (*despite, in spite of*), new sentence (*However,*).',
    'The most frequent mistakes: *despite of*, *despite it was raining*, and *Although…, but…* (two linkers in one sentence). Speakers of Spanish, French and Italian often add *but* after *although*.',
    '*However* usually starts a new sentence and is followed by a comma. Check punctuation when students write in the chat.',
    'Balanced opinions (*Although the ending was weak, I loved the music*) are exactly what B1 Preliminary Writing and Speaking reward. Make this link explicit.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Tell me about something you enjoyed even though it had a problem* (a holiday with bad weather, a film with a bad ending).' },
    { min: 12, title: 'Words of contrast', md: 'Show board page 1. Go through the three groups. Students make one sentence about the warm-up with each word.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students rewrite and correct the sentences.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: Reading Part 3, a short review with questions about the writer’s opinion.' },
    { min: 5, title: 'Close', md: 'Each student gives a balanced opinion of the class today with *although* or *however*. Set the homework.' },
  ],
  board: [
    { title: 'Words of contrast', blocks: [
      { t: 'table', caption: 'What comes after it?', explain: ['head', 'col1'], head: ['Word', 'What follows', 'Example'], rows: [
        ['but', 'a sentence, in the same sentence', 'The tickets were expensive, but the show was worth it.'],
        ['although / even though', 'a sentence (subject + verb)', 'Although it was raining, the festival continued.'],
        ['however', 'a new sentence, after a full stop', 'The food was good. However, the service was slow.'],
        ['despite / in spite of', 'a noun or -ing', 'Despite the rain, the festival continued.'],
      ] },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word given.', items: [
        { q: 'It was raining, but we went to the concert.', cue: 'Although', a: ['Although it was raining, we went to the concert.'], why: '*Although* + sentence; no *but*.' },
        { q: 'It was raining, but we went to the concert.', cue: 'Despite', a: ['Despite the rain, we went to the concert.', 'Despite the rain we went to the concert.'], why: '*Despite* + noun: *the rain*.' },
        { q: 'The film was long, but I enjoyed it.', cue: 'However', a: ['The film was long. However, I enjoyed it.'], why: '*However* starts a new sentence, followed by a comma.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: '[Despite of] the bad reviews, the film was a hit.', a: ['Despite', 'In spite of'], why: '*Despite* has no *of*.' },
        { s: 'Although it was late, [but we] stayed until the end.', a: ['we'], why: 'Only one linker: no *but* after *although*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading Part 3', blocks: [
      { t: 'reading', title: 'A review: Night Train', md: 'Although *Night Train* is almost three hours long, I never once looked at my watch. The story of two strangers who meet on a train across Europe is simple, but the acting is wonderful.\n\nHowever, not everything works. The music is too loud in some scenes, and despite the beautiful photography, the last twenty minutes feel slow. In spite of these problems, it is the best film I have seen this year, and I would happily watch it again.' },
      { t: 'ex', kind: 'choice', h: 'In the format of B1 Preliminary Reading Part 3: choose the right answer.', items: [
        { q: 'What does the writer think about the length of the film?', o: ['It did not feel too long.', 'It was much too long.', 'It should be longer.'], why: '*I never once looked at my watch.*' },
        { q: 'What does the writer criticise?', o: ['the music and the ending', 'the acting', 'the photography'], why: '*The music is too loud* and *the last twenty minutes feel slow*.' },
        { q: 'What is the writer’s overall opinion?', o: ['It is excellent, despite some problems.', 'It is good but not worth watching twice.', 'It is disappointing.'], why: '*The best film I have seen this year… I would happily watch it again.*' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading Part 3, the writer’s **final opinion** often comes after a contrast word like *however* or *in spite of*. Read the whole text before you decide: the first sentence is not always the answer.' },
    ] },
  ],
  activities: {
    one: { title: 'The balanced review', md: 'The student chooses a film, book or series and gives you a spoken review with at least two positives and two negatives, using four different contrast words. You ask follow-up questions (*Would you recommend it despite the ending?*). Then swap roles.' },
    small: { title: 'Yes, but…', md: 'Post statements in the chat (*Living in a big city is great. Social media is good for friendships. Cinemas are better than streaming*). Each student answers with a balanced opinion using a different contrast word each time. The group checks the structure after each word.' },
    group: { title: 'Two sides', md: 'Breakout rooms of three get a topic (*Should museums be free?*). They prepare one sentence for each contrast word, then agree on a final balanced opinion. Bring the rooms back; each room reads its best two sentences.' },
  },
  homework: { book: 'u14:p2', md: 'Finish book lesson 2 of unit 14. Then write a short review (about 80 words) of a film, book or concert, with a positive point, a negative point and your final opinion, using *although*, *however* and *despite*.' },
};
