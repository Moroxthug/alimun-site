// English C1, class 59 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u13:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c59',
  focus: 'By the end every student chooses a modifier for its strength and its partner: *utterly, deeply, highly, somewhat, rather, strikingly, painfully*, with gradable and ungradable adjectives. The speaking goal: describe a film, book, exhibition or show with exactly the strength they mean (*somewhat dated, but rather wonderful in places*).',
  tips: [
    'Draw the scale on the board before anything else: *slightly, mildly, somewhat* at the weak end, *fairly, rather* in the middle, *highly, deeply* stronger, *utterly, absolutely* at the limit. Students place each new modifier on it.',
    'Collocation matters more than meaning here. *Highly* goes with judgement and probability (*highly original, highly unlikely*), *deeply* with feeling and belief (*deeply moving, deeply flawed*). Say pairs aloud until they sound right.',
    '*Rather* with a positive adjective often signals surprise (*it was rather good*), and *somewhat* is the polite criticism of reviews. Students who only use *very* and *really* will hear the difference once you contrast them.',
    'Ungradable words (*unique, empty, impossible*) do not take *very*. They take *truly, completely, almost, virtually*. Correct *very unique* every time.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is the last film or series you watched? Describe it in one sentence without using very or really.* Write two answers on the board.' },
    { min: 12, title: 'The strength of a modifier', md: 'Show board page 1. Go through the scale, then students choose the modifiers alone and explain one choice each.' },
    { min: 10, title: 'Common mistakes', md: 'Show board page 2. Students fix the mistakes in pairs, then make one sentence of their own with a modifier from the scale.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 1. Students choose alone in five minutes, saying each option with its partner under their breath. Reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student gives a one-sentence verdict on something they have seen or read this month, with two modifiers. Set the homework.' },
  ],
  board: [
    { title: 'The strength of a modifier', blocks: [
      { t: 'table', caption: 'From weaker to stronger', explain: ['head', 'col1'], head: ['Modifier', 'Strength', 'Example'], rows: [
        ['slightly / mildly / somewhat', 'weaker; often a polite criticism', 'The ending is somewhat predictable.'],
        ['fairly / rather', 'in the middle; *rather* can signal surprise', 'It was rather enjoyable, in fact.'],
        ['highly / deeply / strikingly', 'stronger, with favourite partners', 'a highly original, deeply moving debut'],
        ['utterly / absolutely / truly', 'to the limit, with extreme or ungradable words', 'The finale was utterly breathtaking.'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the modifier that sounds most natural.', items: [
        { q: 'Her second novel is ___ original; nothing else reads like it.', o: ['strikingly', 'bitterly', 'painfully'], why: '*Strikingly original*: it stands out.' },
        { q: 'Fans were ___ disappointed when the tour was cancelled.', o: ['bitterly', 'highly', 'utterly'], why: '*Bitterly disappointed*: a degree that hurts.' },
        { q: 'The plot is ___ predictable, but the acting saves it.', o: ['somewhat', 'utterly', 'highly'], why: '*Somewhat* softens a criticism in a balanced judgement.' },
        { q: 'I expected a dull lecture, but it was ___ entertaining.', o: ['rather', 'bitterly', 'deeply'], why: '*Rather* + positive adjective: a pleasant surprise.' },
        { q: 'The building is ___ unique in the city.', o: ['truly', 'very', 'fairly'], why: '*Unique* is ungradable: *truly unique*.' },
      ] },
    ] },
    { title: 'Common mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'The final scene was [very hilarious].', a: ['absolutely hilarious', 'utterly hilarious', 'quite hilarious'], why: '*Hilarious* is extreme: *absolutely*, not *very*.' },
        { s: 'It is a [highly moving] portrait of a refugee family.', a: ['deeply moving'], why: 'Feelings go with *deeply*.' },
        { s: 'The performance was [slightly brilliant].', a: ['absolutely brilliant', 'quite brilliant', 'utterly brilliant'], why: '*Slightly* weakens and does not sit with an extreme word.' },
        { s: 'By the interval the theatre was [very empty].', a: ['almost empty', 'virtually empty', 'completely empty', 'nearly empty'], why: '*Empty* is ungradable: say how close to the limit.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 1', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 1): the sentences make one short review of an exhibition. Choose the word that best fits each gap.', items: [
        { q: 'The retrospective at the City Gallery has been ___ praised by critics.', o: ['highly', 'deeply', 'bitterly', 'strikingly'], why: '*Highly praised*: praise is a judgement.' },
        { q: 'Many of the early paintings are ___ moving, especially the portraits of her mother.', o: ['deeply', 'highly', 'vastly', 'fully'], why: '*Deeply moving*: a feeling.' },
        { q: 'The later rooms, however, are ___ uneven.', o: ['somewhat', 'highly', 'deeply', 'bitterly'], why: '*Somewhat uneven*: a polite criticism.' },
        { q: 'The audio guide is ___ informative and worth the extra two pounds.', o: ['highly', 'deeply', 'bitterly', 'painfully'], why: '*Highly informative*: high on a scale of judgement.' },
        { q: 'The queue at the entrance was ___ slow.', o: ['painfully', 'highly', 'deeply', 'strikingly'], why: '*Painfully slow*: slow enough to hurt.' },
        { q: 'Overall, the exhibition is ___ worth a visit.', o: ['well', 'highly', 'deeply', 'greatly'], why: 'The fixed phrase is *well worth*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 1 all four options often mean something similar. The answer is the word that **goes with** its partner. Say each option aloud with the next word: *highly praised* sounds right, *deeply praised* does not.' },
    ] },
  ],
  activities: {
    one: { title: 'The critic’s chair', md: 'The student chooses three things they have seen, read or visited recently. For each, they give a verdict in two or three sentences with at least two modifiers from the scale. Challenge every choice: *Deeply moving, or rather moving?* The student defends or changes it. Note the best pairs and correct the others at the end.' },
    small: { title: 'Disagree by one adverb', md: 'Put the name of a well-known film or book in the chat. The first student gives a verdict with a modifier (*utterly absorbing*). The next agrees or disagrees by changing only the modifier and giving a reason (*Rather absorbing, I’d say; the middle drags*). Go round twice, with a new title each time.' },
    group: { title: 'Star ratings', md: 'Breakout rooms of three each get two titles in the chat (a famous film, a famous album). They agree a one-sentence verdict for each with two modifiers and a star rating out of five. Back together, rooms read their verdicts and the class guesses the stars from the modifiers alone.' },
  },
  homework: { book: 'u13:p1', md: 'Finish book lesson 1 of unit 13 if needed, then do lesson 2 (By which time the curtain had fallen). Write a short review (about 100 words) of something you have watched or read this month, using at least four different modifiers and no *very* or *really*.' },
};
