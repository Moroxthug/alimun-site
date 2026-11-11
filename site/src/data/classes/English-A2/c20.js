// English A2, class 20 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u4:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c20',
  focus: 'By the end of the class every student can compare two places or things with comparative adjectives and **than** (*cheaper than, more expensive than, better than*), use **as … as** and **not as … as**, and make comparisons stronger with **much** or **a lot**. Each student compares their town with another city they know, giving at least five differences.',
  tips: [
    '*more bigger* and *more cheap* are the classic mistakes. Write a simple rule on the board: one syllable **-er**, long words **more**, never both.',
    'Many learners say *bigger that*. Drill **than** as a weak sound /ðən/ inside the phrase: *bigger than Paris*.',
    'The irregulars *better, worse, further* need extra practice: students often say *gooder* and *badder* when speaking fast.',
    '*not as … as* is useful and polite (*The bus isn’t as fast as the train*). Encourage it for opinions about people’s towns.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show two prices (*a coffee in your town: €2; in London: £3.50*). Ask: *Which is cheaper?* Collect comparative sentences and write them on the board.' },
    { min: 10, title: 'Making comparatives', md: 'Show board page 1. Go through the table. Students do the exercise together.' },
    { min: 10, title: 'As … as, much bigger', md: 'Show board page 2. Model the patterns. Students compare two things in the room or two cities in sentences.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Fix the mistakes', md: 'Show board page 3. Quick corrections.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 4: a multiple-choice cloze in the format of A2 Key Reading part 4. Students work alone, then compare.' },
    { min: 5, title: 'Close', md: 'Each student says one way their town is better and one way it is worse than a big city. Set the homework.' },
  ],
  board: [
    { title: 'Making comparatives', blocks: [
      { t: 'table', caption: 'Comparatives', explain: ['head', 'col0'], head: ['Rule', 'Adjective', 'Comparative'], rows: [
        ['short adjectives: add -er', 'cheap', 'cheaper'],
        ['ending in -e: add -r', 'nice', 'nicer'],
        ['one vowel + one consonant: double it', 'big', 'bigger'],
        ['ending in -y: -ier', 'busy', 'busier'],
        ['long adjectives: more', 'expensive', 'more expensive'],
        ['irregular', 'good / bad / far', 'better / worse / further'],
      ] },
      { t: 'ex', kind: 'gap', h: 'Write the comparative.', items: [
        { q: 'My new flat is ___ than my old one. (small)', a: ['smaller'], why: 'Short adjective: *-er*.' },
        { q: 'The city centre is ___ than my village. (noisy)', a: ['noisier'], why: '*-y* becomes *-ier*.' },
        { q: 'Taxis are ___ than buses. (expensive)', a: ['more expensive'], why: 'Long adjective: *more*.' },
        { q: 'The weather here is ___ than at home. (bad)', a: ['worse'], why: 'Irregular: *bad → worse*.' },
        { q: 'This street is ___ than ours. (wide)', a: ['wider'], why: 'Ending in *-e*: add *-r*.' },
      ] },
    ] },
    { title: 'As … as, much bigger', blocks: [
      { t: 'examples', items: [
        { s: 'My flat is **as big as** yours.', n: 'The same.' },
        { s: 'The bus **isn’t as fast as** the train.', n: 'A polite way to say *slower*.' },
        { s: 'The city is **much busier than** my village.', n: '*much* makes the difference bigger.' },
        { s: 'Rome is **a lot hotter than** London in summer.', n: '*a lot* also makes it stronger.' },
      ] },
      { t: 'ex', kind: 'transform', h: 'Say the same with not as … as.', items: [
        { q: 'The train is faster than the bus.', cue: 'The bus', a: ['The bus isn’t as fast as the train.', "The bus isn't as fast as the train.", 'The bus is not as fast as the train.'], why: '*not as* + adjective + *as*.' },
        { q: 'My flat is bigger than your flat.', cue: 'Your flat', a: ['Your flat isn’t as big as my flat.', "Your flat isn't as big as my flat.", 'Your flat isn’t as big as mine.', 'Your flat is not as big as mine.'], why: 'Turn the sentence round with *not as … as*.' },
      ] },
    ] },
    { title: 'Fix the mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'My town is [more small] than yours.', a: ['smaller'], why: 'Short adjective: *-er*, no *more*.' },
        { s: 'This café is [more cheaper] than that one.', a: ['cheaper'], why: 'Never *more* and *-er* together.' },
        { s: 'The food here is [gooder] than at home.', a: ['better'], why: '*good → better*.' },
        { s: 'Berlin is bigger [that] Munich.', a: ['than'], why: 'Comparatives use *than*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading part 4', blocks: [
      { t: 'text', md: 'In the format of the A2 Key exam, Reading part 4: choose the right word for each gap.\n\n*I moved from a small village to the city last year. Life here is much (1) ___ than before. Rents are more (2) ___, but there are a lot (3) ___ jobs. My new flat isn’t as quiet (4) ___ my old house, but I love it.*' },
      { t: 'ex', kind: 'choice', h: 'Choose the word for each gap.', items: [
        { q: 'Gap 1: Life here is much ___ than before.', o: ['busier', 'busy', 'more busy'], why: 'Comparative of *busy*: *busier*.' },
        { q: 'Gap 2: Rents are more ___.', o: ['expensive', 'expensiver', 'cheap'], why: 'After *more* the adjective stays the same; *cheap* would be *cheaper*.' },
        { q: 'Gap 3: there are a lot ___ jobs.', o: ['of', 'more', 'than'], why: '*a lot of* + noun.' },
        { q: 'Gap 4: isn’t as quiet ___ my old house.', o: ['as', 'than', 'that'], why: '*as … as*.' },
      ] },
      { t: 'tip', md: 'In Reading part 4, check the grammar around the gap, not only the meaning: *much ___ than* needs a comparative, *as quiet ___* needs *as*.' },
    ] },
  ],
  activities: {
    one: { title: 'Town against city', md: 'The student chooses their town and a big city they know. Together, write ten adjectives in the chat (cheap, busy, safe, clean, beautiful, expensive, good for families…). The student compares the two places with each adjective, using *much*, *a lot* and *not as … as* at least once each. Finally they decide which is better to live in, and why.' },
    small: { title: 'Which is better?', md: 'Each student chooses one of two options from a list in the chat (a flat in the centre or a house outside; the bus or a bike; a big supermarket or a small shop) and gives three reasons with comparatives. The others must answer with a comparison too (*Yes, but a house is much quieter*). Correct comparative mistakes at the end.' },
    group: { title: 'Two cities', md: 'Breakout rooms of three. Each room gets two cities in the chat and writes six comparison sentences (at least one *as … as* and one *much* + comparative). Bring everyone back: each room reads its sentences and the class votes for the most interesting one. Fix the comparatives together.' },
  },
  homework: { book: 'u4:p2', md: 'Finish book lesson 2 of unit 4 (Bigger and better), including the speaking task. Then write six sentences comparing your town with another place you know.' },
};
