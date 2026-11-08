// English C1, class 82 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u18:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c82',
  focus: 'By the end every student tells the story of a change with the right tenses together: the present perfect continuous for a trend still moving, the present perfect simple for the result so far, the past perfect continuous for a trend before a past moment, the future perfect and future perfect continuous for a point ahead, and *be set to* for what is expected. They also use the verbs, adverbs and prepositions of trends precisely (*rose by 10% to 2,000*, *a sharp fall in*, *level off*).',
  tips: [
    'One change is the simple, a moving trend is the continuous: *Sales have doubled* but *Sales have been rising*. Ask *Is it still moving, or is it a result?*',
    'The prepositions are where most mistakes happen: *by* for the size of the change, *to* for the new figure, *of* after the noun, *in* for what changed. Write a model sentence on the board and leave it up.',
    '*The number of users is growing*: the subject is *the number*, so the verb is singular. Many students say *are*.',
    'Give students real figures to talk about: their own screen time, a price they know, the size of their town. Real numbers make the tenses matter.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What has been changing in your town or job over the last few years?* Each student answers in two sentences. Write one sentence with each tense on the board.' },
    { min: 12, title: 'The story of a change', md: 'Show board page 1. Go through the table, then students choose the forms and say which question of the table each one answers.' },
    { min: 10, title: 'Verbs and prepositions', md: 'Show board page 2. Students fix the mistakes, then describe one real figure they know with *by*, *to* and an adverb.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Board page 3: C1 Advanced Reading and Use of English Part 4. Students rewrite the sentences alone with "Everyone solves this", then count the words together. Reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student says where one thing in their life will be by this time next year, with the future perfect. Set the homework.' },
  ],
  board: [
    { title: 'The story of a change', blocks: [
      { t: 'table', caption: 'Which tense for which part of the story?', explain: ['head', 'col0'], head: ['Question', 'Tense', 'Example'], rows: [
        ['Is it still going on?', 'present perfect continuous', 'Rents have been climbing all year.'],
        ['What is the result so far?', 'present perfect simple', 'The number of cycle lanes has tripled.'],
        ['What was happening before then?', 'past perfect continuous', 'Ticket sales had been falling until the festival moved online.'],
        ['Where will it be by a future point?', 'future perfect', 'By 2030 every bus will have been replaced.'],
        ['How long, by a future point?', 'future perfect continuous', 'By June we will have been using the system for a year.'],
        ['What is expected?', 'be set to, be expected to', 'Prices are set to rise again in spring.'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the best form.', items: [
        { q: 'Since the new app came out, the number of online orders ___ steadily.', o: ['has been rising', 'had been rising', 'will have risen'], why: 'Still going on now: present perfect continuous.' },
        { q: 'The price of the old model ___ in half since January.', o: ['has fallen', 'has been falling', 'had fallen'], why: 'A single completed change, the result so far: present perfect simple.' },
        { q: 'Membership ___ for years before the club finally closed.', o: ['had been declining', 'has been declining', 'will have declined'], why: 'A trend before a past moment: past perfect continuous.' },
        { q: 'By the end of next year, the company ___ all its paper forms.', o: ['will have phased out', 'will phase out', 'has phased out'], why: '*By* + a future time: future perfect.' },
        { q: 'Online shopping is ___ to overtake high-street sales within five years.', o: ['set', 'sure that', 'likely that'], why: '*Be set to*: what is expected.' },
      ] },
    ] },
    { title: 'Verbs and prepositions', blocks: [
      { t: 'examples', items: [
        { s: 'Sales rose **by** 15% **to** 3,000 units.', n: '*By* the size of the change, *to* the new figure.' },
        { s: 'There was a sharp rise **of** 15% **in** sales.', n: '*Of* after the noun, *in* for what rose.' },
        { s: 'After two years of growth, numbers **levelled off**.', n: 'Stopped rising and stayed the same.' },
        { s: 'Profits **plummeted** when the factory closed.', n: 'Fell very fast.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Bus fares rose [of] 8% last year.', a: ['by'], why: '*By* with the verb, *of* with the noun.' },
        { s: 'The number of remote workers [are] growing every month.', a: ['is'], why: 'The subject is *the number*: singular.' },
        { s: 'The town’s population has been falling [since] ten years.', a: ['for'], why: '*For* a period, *since* a starting point.' },
        { s: 'Their profits [have been tripling] since the merger.', a: ['have tripled'], why: '*Triple* is one completed change: simple.' },
        { s: 'By June we [will work] here for exactly ten years.', a: ['will have been working', 'will have worked', '’ll have been working', '’ll have worked'], why: 'Length of time up to a future point: future perfect (continuous).' },
        { s: 'There has been a dramatic increase [of] the use of video calls.', a: ['in'], why: '*An increase in* what changed.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first. Use the word given and three to six words, including the word given.', items: [
        { q: 'The number of cyclists started to rise in 2019 and it is still rising.', cue: 'BEEN', a: ['The number of cyclists has been rising since 2019.'], why: 'A trend still moving: present perfect continuous with *since*.' },
        { q: 'Experts expect the price of batteries to fall next year.', cue: 'SET', a: ['The price of batteries is set to fall next year.'], why: '*Be set to*: what is expected.' },
        { q: 'They will finish replacing all the old meters before the end of 2028.', cue: 'HAVE', a: ['All the old meters will have been replaced by the end of 2028.'], why: 'Future perfect passive with *by*.' },
        { q: 'Visitor numbers fell for several years, and then the museum reopened.', cue: 'HAD', a: ['Visitor numbers had been falling for several years before the museum reopened.', 'Visitor numbers had fallen for several years before the museum reopened.'], why: 'A trend before a past moment: past perfect.' },
        { q: 'Next month it will be exactly five years since I started working from home.', cue: 'WILL', a: ['Next month I will have been working from home for five years.', 'By next month I will have been working from home for five years.', 'Next month I’ll have been working from home for five years.'], why: 'Length of time up to a future point: future perfect continuous.' },
      ] },
      { t: 'tip', art: 'owl', md: 'When the key word is *BEEN*, *HAD* or *WILL*, the item is usually about time. Ask what point in time the second sentence looks from, then choose the tense. Contractions count as two words.' },
    ] },
  ],
  activities: {
    one: { title: 'My numbers', md: 'The student chooses something they can measure in their own life (screen time, steps, savings, books read, commute). They tell its story in three minutes: how it started, what has been happening, the result so far and where it will be by next year. Correct tenses and prepositions at the end.' },
    small: { title: 'Describe the line', md: 'Each student draws a simple line chart on the board (up, down, levelling off) for an invented product, without showing the others. They describe it in five sentences with the lesson’s language; the others draw what they hear. Compare the drawings and find the sentence that caused any difference.' },
    group: { title: 'Trend report', md: 'Breakout rooms of three each get a topic in the chat (electric cars, online learning, home prices, cinema tickets). Each room writes four sentences about how it has changed and where it will be in 2030, with at least three different tenses. Rooms read their report; the class decides which trend is the most surprising.' },
  },
  homework: { book: 'u18:p1', md: 'Finish lesson 1 of unit 18 if needed, then do lesson 2 (Speed up, phase out, wear off). Write 120 words describing a change in your town or workplace over the last five years, with at least four tenses from today and two trend prepositions.' },
};
