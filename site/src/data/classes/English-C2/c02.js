// English C2, class 2 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u1:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c02',
  focus: 'By the end every student tells near-synonyms apart by denotation (what they describe: *glance*, *glimpse*, *peer*, *gaze*, *stare*, *peek*, *scrutinise*) and by connotation (what they suggest: *frugal* or *stingy*, *slender* or *scrawny*, *resolute* or *obstinate*), and chooses the word that carries exactly the feeling they mean. The exam goal: reject Part 1 options for a reason, by grammar, collocation and connotation.',
  tips: [
    'Ask for the reason every time. At C2, *it sounds better* is not an answer; *glance takes at and is deliberate, glimpse is by chance and takes an object* is.',
    'Connotation is easiest to feel with people. Ask students to describe someone they know twice, once as a friend would and once as a critic would, with the same facts.',
    'The verbs of looking differ in grammar too: *glance at*, *peer at* or *into*, *gaze at* or *out*, *stare at*, but *glimpse* and *scrutinise* take a direct object. Many Part 1 items turn on that.',
    'Students often know the disapproving word and not the approving one, or the other way round. When a student uses one, ask for its partner on the other side.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask each student to describe the way someone looked at them recently (in a shop, on a train, at work). Write the verbs they use on the board and ask which are precise and which are vague.' },
    { min: 12, title: 'Ways of looking', md: 'Show board page 1. Students choose the verb, then explain each choice by meaning and by the preposition that follows.' },
    { min: 10, title: 'Praise or criticism', md: 'Show board page 2. Students sort the words, then fix the sentences where the word gives the wrong impression.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C2 Proficiency Reading and Use of English Part 1. Five minutes, alone. For each item, students give one reason why each wrong option fails.' },
    { min: 5, title: 'Close', md: 'Each student describes their own home twice in one sentence: once as an estate agent, once as an honest tenant. Set the homework.' },
  ],
  board: [
    { title: 'Ways of looking', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the most precise verb.', items: [
        { q: 'The inspector ___ the accounts for a week and found nothing wrong.', o: ['scrutinised', 'peeked at', 'glimpsed'], why: 'A long, critical examination: *scrutinise*, with a direct object.' },
        { q: 'From the window of the plane we ___ the Alps for a moment before the clouds closed in.', o: ['glimpsed', 'glanced at', 'stared at'], why: 'A brief view, by chance: *glimpse*.' },
        { q: 'She kept ___ at the clock, hoping nobody would notice how bored she was.', o: ['glancing', 'gazing', 'scrutinising'], why: 'Quick, deliberate looks: *glance at*.' },
        { q: 'He sat by the fire, ___ into the flames and saying nothing.', o: ['gazing', 'peeking', 'glancing'], why: 'A long, dreamy look: *gaze into*.' },
        { q: 'The old woman ___ at us over her glasses, trying to work out who we were.', o: ['peered', 'glimpsed', 'gazed'], why: 'Looking hard because it is difficult to see: *peer at*.' },
        { q: 'The whole room ___ at him when he admitted it, too shocked to speak.', o: ['stared', 'peeked', 'peered'], why: 'A fixed look of shock: *stare at*.' },
      ] },
    ] },
    { title: 'Praise or criticism', blocks: [
      { t: 'ex', kind: 'sort', h: 'Does the word praise the person or criticise them?', groups: ['praise', 'criticism'], explain: ['groups'], items: [
        { s: 'steadfast', g: 0, why: 'Loyal and firm: admired.' },
        { s: 'spineless', g: 1, why: 'Too weak to stand up for anything.' },
        { s: 'shrewd', g: 0, why: 'Clever about practical matters.' },
        { s: 'sly', g: 1, why: 'Clever in a secret, dishonest way.' },
        { s: 'discerning', g: 0, why: 'Showing good judgement and taste.' },
        { s: 'pernickety', g: 1, why: 'Too worried about small details.' },
        { s: 'youthful', g: 0, why: 'Young in spirit or looks, in a good way.' },
        { s: 'juvenile', g: 1, why: 'Of an adult: childish and silly.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the word that gives the wrong impression.', items: [
        { s: 'We are lucky to have such a [nosy] doctor: she always asks the right questions.', a: ['inquisitive', 'curious'], why: 'Praise needs an approving word: *inquisitive* or *curious*.' },
        { s: 'The reviewer loved the dancer’s [scrawny] figure and fluid movements.', a: ['slender', 'slim', 'lithe'], why: '*Scrawny* is unattractively thin; admiration needs *slender*.' },
        { s: 'His [childlike] tantrums in meetings have made him impossible to work with.', a: ['childish', 'juvenile'], why: '*Childlike* suggests innocence; immaturity is *childish*.' },
        { s: 'The town is [famous] for its traffic jams and its rude taxi drivers.', a: ['notorious'], why: 'Well known for something bad: *notorious*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 1', blocks: [
      { t: 'ex', kind: 'select', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 1), shortened to six gaps: read the text about a lighthouse keeper, sentence by sentence, and choose the answer (A, B, C or D) which best fits each gap.', items: [
        { q: 'Walkers on the cliff path sometimes ___ the lighthouse through the mist, only for it to vanish again a moment later.', o: ['glimpse', 'glance', 'peer', 'gaze'], why: 'A brief view by chance, with a direct object: *glimpse*. The other three need *at*.' },
        { q: 'Its last keeper was a ___ man whose careful habits the villagers still speak of with admiration.', o: ['frugal', 'stingy', 'miserly', 'mean'], why: '*With admiration* needs an approving word; the other three criticise.' },
        { q: 'Historians have ___ every page of his logbook for clues about the night of the great storm.', o: ['scrutinised', 'glanced', 'peeked', 'glimpsed'], why: 'A long, critical examination of every page, with a direct object.' },
        { q: 'The entries themselves are ___: a line on the weather, a line on the lamp, and nothing more.', o: ['terse', 'curt', 'abrupt', 'blunt'], why: '*Terse* describes writing that uses very few words; *curt* and *abrupt* suggest rudeness, *blunt* frankness.' },
        { q: 'Yet visitors still ___ in disbelief at the single sentence he wrote that night: “Saw them go.”', o: ['stare', 'gaze', 'peer', 'glimpse'], why: '*Stare in disbelief* is the collocation: a fixed look of shock. *Gaze* is admiring or dreamy; *peer* means it is hard to see.' },
        { q: 'The museum describes his cottage as ___, though anyone who has stood in it would call it poky.', o: ['compact', 'cramped', 'confined', 'restricted'], why: '*Though* signals a contrast with *poky*, so the gap needs the approving, estate-agent word: *compact*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 1** there are **eight gaps** and **four options** each, and at C2 the options are often near-synonyms. Test each one three ways: does it fit the **grammar** after the gap, does it **collocate** with the words around it, and does its **connotation** match the writer’s attitude?' },
    ] },
  ],
  activities: {
    one: { title: 'Two portraits', md: 'The student chooses a real person they know well (a colleague, a relative, a public figure) and describes them for a minute as an admirer would, then for a minute as a critic would, keeping the same facts. Note every evaluative word on the board in two columns and help the student find a sharper partner for each one (*careful* to *meticulous* and *fussy*).' },
    small: { title: 'Spin doctors', md: 'Give the group one neutral fact in the chat (*The mayor has not changed her position on the new road in three years*). Half the group writes one sentence in her favour, the other half one against, using a near-synonym from today. Everyone reads out; the group says which words did the work. Repeat with a fact a student chooses.' },
  },
  homework: { book: 'u1:p2', md: 'Finish lesson 1 of unit 1 if needed, then do lesson 2 (By and large). Write about 150 words describing the same place twice: once for a holiday website and once in a review by a disappointed guest. Use at least four pairs of near-synonyms, one from each side.' },
};
