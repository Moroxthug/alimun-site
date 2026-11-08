// English C1, class 71 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u15:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c71',
  focus: 'By the end every student talks precisely about leaving home, settling somewhere new and the feeling of belonging, with the right collocations and prepositions (*adapt to*, *integrate into*, *torn between*), and tells apart the pairs that look alike: *fit in* and *belong*, *settle in* and *settle down*, *homesick* and *nostalgic*. The exam goal: match the idea, not the words, in the format of C1 Advanced Listening Part 4.',
  tips: [
    'The key contrast is *fit in* (accepted by a group) against *belong* (the place feels truly yours). Ask the class: *Can you fit in somewhere without belonging?* Their answers make the difference clear.',
    'Prepositions cause most of the mistakes: *adapt to*, *integrate into*, *feel at home in*, *torn between*. Write each one on the board when a student uses it, and correct every *adapt the culture*.',
    'Some students have moved country, some never have, and a few may have left home in hard circumstances. Let each student choose whether to talk about themselves or about someone they know.',
    'For the exam page, read each speaker aloud twice, as in the exam, before students see the text. Show the page only to check the answers, and point to the words that carry each idea.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Where do you feel most at home, and why?* Each student answers in two sentences. Note any phrase about belonging on the board.' },
    { min: 12, title: 'Roots and feet', md: 'Show board page 1. Students read the examples, then choose the words. Ask for one more sentence with each expression they get wrong.' },
    { min: 10, title: 'Look-alikes', md: 'Show board page 2. Go through the pairs, then students fix the mistakes and explain each change.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Board page 3: C1 Advanced Listening Part 4. Read the five speakers aloud twice with the page hidden, students note their answers, then show the page and check both tasks together.' },
    { min: 5, title: 'Close', md: 'Each student finishes the sentence *I fit in… but I belong…* in their own words. Set the homework.' },
  ],
  board: [
    { title: 'Roots, feet and home', blocks: [
      { t: 'examples', items: [
        { s: 'It took her a year to **find her feet** in Lisbon, and five more to **put down roots**.', n: 'Confidence comes first; a permanent home later.' },
        { s: 'He still feels **torn between** the country he grew up in and the one he lives in.', n: '*Torn between* two places or choices.' },
        { s: 'For the first month I felt like **a fish out of water**.', n: 'Uncomfortable, out of place.' },
        { s: 'Our neighbours made the flat a real **home from home**.', n: 'As comfortable as your own home.' },
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the best word.', items: [
        { q: 'It took him almost a year to find his ___ in the new job.', o: ['feet', 'roots', 'place'], why: '*Find your feet*: become confident somewhere new.' },
        { q: 'Many students find it hard to adapt ___ life in a big city.', o: ['to', 'into', 'with'], why: '*Adapt to* something.' },
        { q: 'After twenty years abroad she feels ___ between two countries.', o: ['torn', 'uprooted', 'rootless'], why: '*Torn between* two places.' },
        { q: 'The village is rather ___: outsiders are rarely invited in.', o: ['insular', 'welcoming', 'transient'], why: '*Insular*: closed to outsiders.' },
        { q: 'In their thirties they decided to settle ___ and buy a house.', o: ['down', 'in', 'up'], why: '*Settle down*: start a calmer, more fixed life.' },
      ] },
    ] },
    { title: 'Look-alikes', blocks: [
      { t: 'table', caption: 'Pairs that look alike', explain: ['head', 'col1'], head: ['Expression', 'Meaning', 'Example'], rows: [
        ['fit in', 'be accepted by a group', 'He fits in well with the team.'],
        ['belong', 'feel that a place or group is truly yours', 'After ten years, I feel I belong here.'],
        ['settle in', 'get used to a new home or job', 'The children settled in quickly at school.'],
        ['settle down', 'start a calmer, more fixed life', 'She settled down in her thirties.'],
        ['homesick', 'in pain from missing home now', 'I was homesick for the whole first term.'],
        ['nostalgic', 'gently longing for the past', 'Old photos always make me nostalgic.'],
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'It took the family a long time to integrate [in] the local community.', a: ['into'], why: '*Integrate into* a community.' },
        { s: 'I quickly [adapted] the new climate.', a: ['adapted to'], why: '*Adapt to* something.' },
        { s: 'He phones his mother every night because he feels so [nostalgic].', a: ['homesick'], why: 'Painful missing of home now: *homesick*.' },
        { s: 'The new students [settled down] quickly during their first week.', a: ['settled in'], why: 'Getting used to a new place in the first weeks: *settle in*.' },
        { s: 'Coming back home, I suffered a kind of [inverse culture shock].', a: ['reverse culture shock'], why: 'The fixed term is *reverse culture shock*.' },
      ] },
    ] },
    { title: 'Exam corner: Listening Part 4', blocks: [
      { t: 'dialogue', title: 'Five people who moved', lines: [
        { who: 'Marco', s: 'When I arrived in Glasgow I knew nobody, and the weather did nothing for my mood. What changed things was five-a-side football on Thursdays. Nobody cared where I was from as long as I passed the ball. Strangely, now that I have a mortgage here, I miss Naples far less than I expected to.' },
        { who: 'Aisha', s: 'I had studied the language for years, so I assumed settling in would be easy. It wasn’t. People were polite but distant. It was only when my neighbour’s son needed help with his maths homework that doors started to open. These days I catch myself defending the city whenever visitors complain about it.' },
        { who: 'Lena', s: 'My husband’s job brought us to Singapore, and for months I felt like a fish out of water. I signed up for an evening cookery course, mainly to get out of the flat, and that is where I met most of my friends. When we visit Berlin now, it is Singapore I keep talking about.' },
        { who: 'Joon', s: 'I came to Toronto for a year and stayed for nine. It was the bookshop job that made the difference: regular customers began to greet me by name. I still have mixed feelings, though. My parents are getting older, and I am not sure I should be so far away.' },
        { who: 'Fatima', s: 'We were uprooted by the war, so this was never a choice. For a long time I refused to unpack properly. What finally helped was volunteering at the community centre, translating for families who had just arrived. Being useful gave me a reason to stay. I would not call it home yet, but I am getting there.' },
      ] },
      { t: 'ex', kind: 'match', h: 'In the format of the C1 Advanced exam (Listening Part 4), Task One: match each speaker with what helped them settle. In the exam there are three extra options.', pairs: [
        ['Marco', 'a regular sporting activity'],
        ['Aisha', 'helping a neighbour’s child'],
        ['Lena', 'a class she joined'],
        ['Joon', 'being recognised at work'],
        ['Fatima', 'being useful to others'],
      ] },
      { t: 'ex', kind: 'match', h: 'Task Two: match each speaker with how they feel now.', pairs: [
        ['Marco', 'He misses his home town less than he predicted.'],
        ['Aisha', 'She now takes the side of her new city.'],
        ['Lena', 'Her new home has become part of who she is.'],
        ['Joon', 'He is unsure whether staying is right.'],
        ['Fatima', 'She does not yet feel she fully belongs.'],
      ] },
      { t: 'tip', art: 'owl', md: 'In Listening Part 4 the speakers rarely use the words in the options. Marco mentions the weather and a mortgage, but what helped him was the football. Listen for the **idea** behind each answer, and do Task One on the first listening and Task Two on the second if both at once is too hard.' },
    ] },
  ],
  activities: {
    one: { title: 'My map of belonging', md: 'The student names three places in their life (a town, a workplace, a group of friends) and says for each one whether they *fit in*, *belong*, both or neither, and why. Ask follow-up questions that need the lesson’s collocations: *How long did it take you to find your feet? Did you ever feel torn between…?* Correct prepositions at the end.' },
    small: { title: 'Advice for a newcomer', md: 'Each student imagines a friend is moving to the student’s own town. In turns, they give three pieces of advice using the lesson’s language (*To fit in here, you need to… It takes a while to find your feet because…*). The group chooses the most useful advice and says why.' },
    group: { title: 'Moving stories', md: 'Breakout rooms of three. Each student tells a short story of a move (their own, a relative’s or an invented one) in about a minute, using at least three expressions from board page 1. The others guess which speaker on board page 3 the story is most like. Each room shares one story with the class.' },
  },
  homework: { book: 'u15:p3', md: 'Finish lesson 3 of unit 15 if needed, then do lesson 4 (I am writing with regard to). Write 120 words about a place where you fitted in but did not feel you belonged, or the other way round, using at least four expressions from today.' },
};
