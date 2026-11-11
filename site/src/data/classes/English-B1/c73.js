// English B1, class 73 (docs/LESSONS_PLAN.md). Builds on book lesson u15:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c73',
  focus: 'By the end of the class every student can describe change with double comparatives (*better and better*, *more and more expensive*) and connect two changes with *the more …, the more …*. Students talk about how their own habits, their town or sport have changed.',
  tips: [
    'Long adjectives repeat *more*, not the adjective: *more and more expensive*, never *expensiver and expensiver*.',
    'In *the more …, the more …* both halves need *the*: *The more you train, the faster you get.* Learners often drop the second *the*.',
    'Keep the word order of the second half: *the faster you get*, not *the faster get you*.',
    'Use real data the students know (prices, phones, their own English) so the sentences mean something.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is getting more expensive where you live?* Write answers on the board as *X is getting more and more expensive*.' },
    { min: 12, title: 'Better and better', md: 'Show board page 1. Explain the pattern, then students choose the forms.' },
    { min: 10, title: 'The more, the more', md: 'Show board page 2. Students finish the sentences, then make their own about sport or study.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: Speaking part 3, talking about pictures of change together.' },
    { min: 8, title: 'Close', md: 'Each student finishes: *The more English I speak, the …*. Set the homework.' },
  ],
  board: [
    { title: 'Getting better and better', blocks: [
      { t: 'table', caption: 'Describing change', explain: ['head', 'col2'], head: ['Pattern', 'Example', 'With'], rows: [
        ['-er and -er', 'It’s getting colder and colder.', 'short adjectives'],
        ['more and more', 'Phones are getting more and more expensive.', 'long adjectives'],
        ['better and better / worse and worse', 'Your English is getting better and better.', 'irregular forms'],
        ['the more …, the more …', 'The more you practise, the easier it gets.', 'two changes together'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'The days are getting ___ in spring.', o: ['longer and longer', 'more and more long', 'long and long'], why: 'Short adjective: *longer and longer*.' },
        { q: 'Train tickets are getting ___.', o: ['more and more expensive', 'expensiver and expensiver', 'most expensive'], why: 'Long adjective: *more and more expensive*.' },
        { q: 'My running is getting ___ every week.', o: ['better and better', 'gooder and gooder', 'more and more good'], why: '*good* → *better and better*.' },
      ] },
    ] },
    { title: 'The more you train…', blocks: [
      { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
        { q: 'The more you train, ___ fitter you become.', a: ['the'], why: 'Both halves start with *the*.' },
        { q: 'The ___ you sleep, the more tired you feel.', a: ['less'], why: 'Less sleep, more tiredness: *the less*.' },
        { q: 'The earlier you start, the ___ you finish.', a: ['earlier', 'sooner'], why: 'A comparative after *the*.' },
      ] },
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'The more I run, the better I feel.', why: '*The* + comparative + subject + verb, twice.' },
        { a: 'Cities are getting busier and busier.', why: 'Short adjective repeated with *-er*.' },
      ] },
    ] },
    { title: 'Exam corner: Speaking part 3', blocks: [
      { t: 'text', md: '**Talk together:** A town wants people to do more sport. Here are some ideas: *a new swimming pool*, *free bikes*, *a running club*, *sport at work*, *more parks*. Talk about how each idea could change people’s lives, then decide which is best.' },
      { t: 'tip', art: 'owl', md: 'In Speaking part 3 there is no right answer. The examiner listens for how you **discuss**: give opinions, use comparatives (*cheaper*, *more popular*), agree and disagree politely, and **decide** together at the end.' },
    ] },
  ],
  activities: {
    one: { title: 'Then and now', md: 'The student compares their town, their job or their English ten years ago and now with three double comparatives and two *the more …, the more …* sentences. Ask follow-up questions after each one.' },
    small: { title: 'Chain of changes', md: 'Start with *The more people drive, …*. Each student finishes the sentence and starts a new one from its end (*the more pollution there is.* → *The more pollution there is, …*). Keep the chain going for two rounds.' },
    group: { title: 'Trend reporters', md: 'In breakout rooms of three, each room chooses a topic (prices, technology, sport, weather) and prepares three sentences about how it is changing. Rooms report in the main room; the others react with *I agree*, *I’m not sure* and a reason.' },
  },
  homework: { book: 'u15:p2', md: 'Do book lesson 2 of unit 15 (Better and better). Write five sentences about how your life has changed this year, two with *the more …, the more …*.' },
};
