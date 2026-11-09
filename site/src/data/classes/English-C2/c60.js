// English C2, class 60 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u13:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c60',
  focus: 'By the end every student describes a trend in one precise verb or noun phrase that gives its direction, speed and size (*soar*, *creep up*, *plummet*, *level off*, *outstrip*, *a tenfold increase*), uses the small grammar of figures without mistakes (*rise by*, *rise to*, *stand at*, *peak at*, *an increase of*, *a rise in*), and knows when to say *in real terms* and *per capita*. They complete a talk in the format of C2 Proficiency Listening Part 2 and describe a set of figures aloud so clearly that a partner can draw the line.',
  tips: [
    'The commonest mistakes are small words: *increase of* for *increase by*, *until* for *to*, *a ten times increase* for *a tenfold increase*. Correct them every time; they are what separates a precise description from an approximate one.',
    'Push for one exact verb rather than a verb and two adverbs. *Rose very quickly and by a lot* becomes *soared*; *went up slowly* becomes *crept up* or *edged up*.',
    '*In real terms* is a concept, not just a phrase. Check that students can explain it: a price that rises more slowly than wages has fallen in real terms.',
    'In Listening Part 2 the answer is often a word the speaker corrects (*not doubled… a tenfold increase*) or a cause the speaker rejects (*most people blamed… in fact*). Read the script with those turns clearly marked in your voice, but no slower than natural speed.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What has become much more expensive, or much cheaper, in your life over the last five years? How fast did it change?* Students answer; write one plain verb from each answer on the board and ask for a more precise one.' },
    { min: 8, title: 'The exact verb', md: 'Show board page 1. Students choose the verb that matches the speed and size of each change, then say what the two wrong options would mean.' },
    { min: 9, title: 'Figures and small words', md: 'Show board page 2. Students write the missing word, then read the sentences aloud as if presenting them in a meeting.' },
    { min: 18, title: 'Exam corner', md: 'Show board page 3: C2 Proficiency Listening Part 2, shortened. Give students 45 seconds to read the sentences and predict the kind of word for each gap. Read the talk from board page 4 aloud twice, then check meaning and spelling and show where the traps were.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below, with the figures on board page 5.' },
    { min: 5, title: 'Close', md: 'Each student describes one figure from their own life in one sentence with a precise verb and a preposition (*My rent has crept up by about five per cent a year*). Set the homework.' },
  ],
  board: [
    { title: 'The exact verb', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the verb that fits the speed and size of the change.', items: [
        { q: 'Ticket sales ___ after the festival was moved online, falling by almost ninety per cent.', o: ['plummeted', 'dipped', 'eased'], why: 'A fall of almost ninety per cent is fast and large: *plummet*. *Dip* and *ease* are small falls.' },
        { q: 'After two years of rapid growth, demand for electric bikes has ___ and is now neither rising nor falling.', o: ['levelled off', 'rocketed', 'slumped'], why: '*Level off*: stop changing after a rise or fall.' },
        { q: 'For the first time, online subscriptions have ___ print sales.', o: ['outstripped', 'outgrown', 'outlived'], why: '*Outstrip*: become larger than something else.' },
        { q: 'Rents have ___ by about one per cent a year: slowly, but without a pause.', o: ['crept up', 'soared', 'peaked'], why: '*Creep up*: a slow, steady rise.' },
        { q: 'Unemployment ___ at twelve per cent in the winter and has fallen every month since.', o: ['peaked', 'stood', 'climbed'], why: '*Peak at*: reach the highest point, then fall.' },
      ] },
    ] },
    { title: 'Figures and small words', blocks: [
      { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
        { q: 'Exports fell ___ six per cent last year, to their lowest level in a decade.', a: ['by'], why: '*By* gives the size of the change; *to* gives the new level.' },
        { q: 'Inflation now stands ___ three per cent.', a: ['at'], why: '*Stand at*: the level at a moment.' },
        { q: 'There has been a rise ___ eight per cent in the price of bread.', a: ['of'], why: 'The noun takes *of* before the amount: *a rise of eight per cent*.' },
        { q: 'The population of the region has grown ___ just over two million.', a: ['to'], why: '*To* gives the new level.' },
        { q: 'Wages rose in cash terms but fell in ___ terms, because prices rose faster.', a: ['real'], why: '*In real terms*: once inflation is taken into account.' },
        { q: 'The country is rich overall, but income ___ capita is lower than in its neighbours.', a: ['per'], why: '*Per capita*: for each person.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Verbs take **by** before the size of a change: *rose by four per cent*. Nouns take **of** before the size and **in** before the thing that changed: *a rise of four per cent in wages*.' },
    ] },
    { title: 'Exam corner: Listening Part 2', blocks: [
      { t: 'ex', kind: 'gap', h: 'In the format of the C2 Proficiency exam (Listening Part 2): you will hear part of a radio talk about the price of coffee in an imaginary city. Complete the sentences with a word or short phrase. (Shortened: six sentences instead of nine.)', items: [
        { q: 'For about ten years, the price of a cup of coffee in Maren ___ by a few cents a year.', a: ['crept up'], why: '*It crept up by a few cents a year.* Write the words you hear, in the form the sentence needs.' },
        { q: 'The main cause of the sudden rise was an increase in ___.', a: ['rent', 'rents'], why: '*Most people blamed the beans. In fact… what had soared was rent.* The beans are the trap.' },
        { q: 'Some cafés responded by reducing the size of the ___.', a: ['cup', 'cups'], why: '*The clever ones cut the size of the cup.* Cutting staff was the other reaction.' },
        { q: 'In real terms, a cup of coffee is now ___ than it was twenty years ago.', a: ['cheaper'], why: '*Measured in real terms… actually cheaper today*, because wages have outstripped café prices.' },
        { q: 'The number of cafés per head of population has fallen by ___.', a: ['half', 'a half'], why: '*Has fallen by half.*' },
        { q: 'The speaker expects the next change in prices to come from the ___.', a: ['minimum wage'], why: '*Not from rents but from the minimum wage.*' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 2** you hear one speaker for about three minutes and complete **nine** sentences. Before the recording, decide the kind of word each gap needs: *___ than* needs a comparative, *fallen by ___* needs an amount. While you listen, expect the speaker to **reject** one answer before giving the right one.' },
    ] },
    { title: 'Script for Part 2 (read aloud; show after checking)', blocks: [
      { t: 'reading', title: 'The disappearing espresso', md: 'If you want to understand an economy, a colleague of mine likes to say, don’t read the central bank’s reports; watch the price of a cup of coffee. So tonight, the coffee of Maren, an imaginary port city.\n\nTwenty years ago a cup cost one crown. For a decade the price barely moved; it crept up by a few cents a year, roughly in line with inflation. Then, in the space of eighteen months, it doubled. Most people blamed the beans. In fact, the price of beans had hardly changed; what had soared was rent, after the old harbour was turned into offices.\n\nThe cafés reacted in different ways. Some cut staff. The clever ones cut the size of the cup, which customers noticed far less than they would have noticed a higher price. Economists call it shrinkflation; I call it the disappearing espresso.\n\nHere is the part people find surprising. Measured in real terms, taking wages into account, a cup of coffee in Maren is actually cheaper today than it was twenty years ago, because wages have outstripped café prices. The figure that has really changed is the number of cafés per head of population, which has fallen by half.\n\nSo what do I expect next? Not another sharp rise. My guess is that prices will level off, and that the next change will come not from rents but from the minimum wage, which the city council votes on next spring.' },
    ] },
    { title: 'Describe the figures', blocks: [
      { t: 'table', caption: 'Lindmark, an imaginary country: four figures over ten years', explain: ['head'], head: ['Figure', 'Year 1', 'Year 4', 'Year 7', 'Year 10'], rows: [
        ['Average house price (crowns)', '150,000', '160,000', '310,000', '305,000'],
        ['Average yearly wage (crowns)', '30,000', '31,000', '33,000', '36,000'],
        ['Unemployment', '9%', '4%', '6%', '6%'],
        ['Visitors per year', '200,000', '600,000', '1,400,000', '2,000,000'],
      ] },
      { t: 'examples', items: [
        { s: 'House prices **edged up** at first, then **almost doubled** in three years, and have **levelled off** since.', n: 'Shape, speed and size in one sentence.' },
        { s: 'Visitor numbers **saw a tenfold increase** over the decade.', n: 'From 200,000 to 2,000,000.' },
        { s: 'Wages have risen, but **in real terms** housing has become far less affordable.', n: 'Comparing two lines.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Draw my line', md: 'The student chooses one row on board page 5 without saying which and describes it in about thirty seconds, with no numbers except one figure using *by*, *to* or *at*. You draw the line on the board as they speak, then compare it with the table. Swap: you describe a trend from the student’s country or work, deliberately using one vague verb, and the student draws it and asks the question that would make it precise. Finish with a one-minute description of the whole table that compares at least two lines, using *in real terms*.' },
    small: { title: 'Draw my line', md: 'In pairs, or in a three, one student describes a row from board page 5 without naming it, using precise verbs and one figure, while their partner draws the line on the board. The others say which row it was and suggest one more precise verb. Rotate so that everyone describes and everyone draws. To finish, each student gives a one-minute summary of the table that compares two lines, using *in real terms* or *outstrip*.' },
  },
  homework: { book: 'u13:p2', md: 'Finish lesson 1 of unit 13 in the book if needed. Write about 150 words describing a trend you know well (house prices, the cost of a coffee, the number of people working from home), with at least four precise verbs or nouns of change and one sentence using *in real terms* or *per capita*. Then do lesson 2 of unit 13 (Brokering a deal).' },
};
