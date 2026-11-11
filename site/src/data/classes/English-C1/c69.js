// English C1, class 69 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u15:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c69',
  focus: 'By the end every student talks about whole groups and abstract ideas with the right article: plural nouns with no article for most general statements, generic *the* + singular for species, inventions and types (*the bicycle, the tiger*), *the* + adjective for groups of people with a plural verb (*the young, the elderly, the unemployed*), and abstract nouns with no article in general but *a* or *the* when limited (*a sense of belonging, the loneliness I felt*). The speaking goal: make general statements about travel, migration and home.',
  tips: [
    'Start from what students already know and push one step further: *Travel broadens the mind* (no article) against *the travel I did in my twenties* (limited by the clause). The limiting phrase or clause is what brings *the*.',
    '*The* + adjective is always plural and never adds *-s*: *The elderly are…*, not *The elderly is…* or *the elderlies*. For one person, add a noun: *an elderly neighbour*.',
    'Generic *a* describes any typical member, not the class as a whole: *A tiger is endangered* is wrong, *The tiger is endangered* or *Tigers are endangered* is right. This is a good puzzle to let students solve themselves.',
    'Learners whose language uses an article with every abstract noun say *The life is hard*. Correct it every time, gently, and let them hear the contrast with *the life she led*.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Who adapts faster to a new country, the young or the old? Why?* Write two answers on the board and underline every article.' },
    { min: 12, title: 'Talking in general', md: 'Show board page 1. Go through the table, then students choose the articles alone and explain one choice each.' },
    { min: 10, title: 'Common mistakes', md: 'Show board page 2. Students fix the mistakes in pairs, then make one general statement of their own about travel.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 2. Students write one word in each gap alone in five minutes, then compare. Reveal the answers and say what kind of word each gap needed.' },
    { min: 5, title: 'Close', md: 'Each student finishes the sentence *What matters most when you move somewhere new is…* with an abstract noun. Set the homework.' },
  ],
  board: [
    { title: 'Talking in general', blocks: [
      { t: 'table', caption: 'Generic reference', explain: ['head', 'col2'], head: ['Form', 'Example', 'Use'], rows: [
        ['plural, no article', 'Newcomers often feel invisible at first.', 'most general statements'],
        ['the + singular', 'The suitcase on wheels changed how we travel.', 'a class as one idea: inventions, species, types'],
        ['a / an + singular', 'A good guide never hurries you.', 'any typical member'],
        ['the + adjective', 'The young are more willing to move abroad.', 'a group of people, plural verb'],
        ['abstract noun, no article', 'Belonging takes time.', 'an idea in general'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the best article, or no article (–).', items: [
        { q: 'The new law aims to protect ___ disabled from discrimination at work.', o: ['the', '–', 'a'], why: '*The* + adjective for a group of people.' },
        { q: '___ tiger is now protected in most of Asia.', o: ['The', 'A', '–'], why: 'A statement about the whole species: generic *the*.' },
        { q: 'She has ___ remarkable knowledge of the city’s history.', o: ['a', 'the', '–'], why: '*A* + adjective + abstract noun: a particular kind of knowledge.' },
        { q: '___ happiness is not the same as comfort.', o: ['–', 'The', 'A'], why: 'An abstract noun in general: no article.' },
        { q: '___ homesickness he felt that first winter never quite left him.', o: ['The', '–', 'A'], why: 'Limited by the clause *he felt that first winter*: *the*.' },
      ] },
    ] },
    { title: 'Common mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: '[The patience] is the most useful thing a traveller can pack.', a: ['Patience'], why: 'An abstract noun in general: no article.' },
        { s: 'The poor [is] hit hardest by rising rents.', a: ['are'], why: '*The* + adjective takes a plural verb.' },
        { s: 'The museum is free for [the unemployeds].', a: ['the unemployed'], why: '*The* + adjective never adds *-s*.' },
        { s: 'Can you give me [an advice] about visas?', a: ['some advice', 'advice', 'a piece of advice'], why: '*Advice* is uncountable.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 2', blocks: [
      { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 2): the sentences make one short text about villages that are losing their people. Write one word in each gap.', items: [
        { q: 'In many mountain villages, ___ young have left for the cities and only the old remain.', a: ['the'], why: '*The* + adjective for a group of people.' },
        { q: 'Those who stay often speak of ___ deep sense of loss.', a: ['a'], why: '*A* + adjective + abstract noun.' },
        { q: 'It is often said that ___ car emptied the countryside in the twentieth century.', a: ['the'], why: 'Generic *the* for an invention.' },
        { q: 'Yet some newcomers settle in far more quickly than ___ who have lived there all their lives expect.', a: ['those', 'people'], why: '*Those who*: the people who.' },
        { q: 'For them, peace and quiet matter more ___ shops or nightlife.', a: ['than'], why: 'A comparison: *more than*.' },
        { q: 'What they need most is not money but ___ welcome.', a: ['a'], why: '*A welcome*: one instance of it.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 2 a gap before a singular countable noun always needs a determiner. Before an abstract noun used in general it usually needs none, so if the gap is there, look for *a* + adjective, or a limiting phrase after the noun that calls for *the*.' },
    ] },
  ],
  activities: {
    one: { title: 'Making generalisations', md: 'Give the student four groups in the chat (*the young, the elderly, newcomers, tourists*). For each, the student makes a general statement about how they experience a new place and defends it with an example from their own life. Correct the articles every time and finish with the student writing their two best statements.' },
    small: { title: 'True in general?', md: 'Each student writes one general statement about travel or moving abroad in the chat (*The young adapt faster than the old*, *Loneliness is the hidden cost of moving*). The group discusses whether each one is true in general, and checks every article before moving on.' },
    group: { title: 'A guide for newcomers', md: 'Breakout rooms of three write five general sentences for a guide to their city for people who have just moved there, using at least one *the* + adjective, one generic singular and two abstract nouns. Back together, rooms read their guides and the class checks the articles.' },
  },
  homework: { book: 'u15:p1', md: 'Finish book lesson 1 of unit 15 if needed, then do lesson 2 (It came across well). Write a paragraph (about 100 words) on what makes people feel at home in a new place, with at least six general statements and careful articles.' },
};
