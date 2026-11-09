// English C1, class 31 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u7:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c31',
  focus: 'By the end every student uses a set of idioms and fixed phrases in their exact form, knows what each really means and where it belongs (a chat, an article, an essay), and never changes a word inside one. In the exam corner they supply the missing word of fixed phrases in an open cloze.',
  tips: [
    'Teach each idiom with its frozen words: *in the same boat*, not *on the same boat*; *against all odds*, not *against all chances*. Correct the small word every time.',
    'Fewer idioms used well beat many used badly. One idiom in a Speaking answer sounds natural; five in a minute sound rehearsed.',
    'Register matters as much as meaning: *call it a day* is fine in a meeting but odd in an essay, while *by the same token* suits an essay and sounds stiff over coffee.',
    'The grammar can move even though the words cannot: the verb changes tense and the pronoun changes person (*we called it a day*, *she’s in the same boat*).',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask students for any English idiom they know and where they last heard it. Write two on the blank page and check the exact words together.' },
    { min: 12, title: 'Idioms and where they belong', md: 'Show board page 1. Read the table together, then students choose the idiom for each gap. Each student uses one idiom in a sentence about their week.' },
    { min: 10, title: 'One wrong word', md: 'Show board page 2. Students fix the changed word in each idiom alone, then compare.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 2. Students write one word in each gap alone, then compare. Reveal the answers and check spelling.' },
    { min: 5, title: 'Close', md: 'Each student names one idiom they will use this week and where. Set the homework.' },
  ],
  board: [
    { title: 'Idioms and where they belong', blocks: [
      { t: 'table', caption: 'Idioms and fixed phrases', explain: ['head', 'col1', 'col2'], head: ['Idiom', 'Meaning', 'Where it fits'], rows: [
        ['the last straw', 'the final problem that makes you lose patience', 'informal; speaking and stories'],
        ['a drop in the ocean', 'far too small to make a difference', 'neutral; articles and essays'],
        ['in the same boat', 'in the same difficult situation', 'informal; speaking'],
        ['call it a day', 'stop working on something', 'informal; meetings and conversation'],
        ['a level playing field', 'a situation that is fair for everyone', 'neutral; business, articles and essays'],
        ['by the same token', 'for the same reason', 'formal; essays and speeches'],
        ['against all odds', 'despite great difficulty', 'neutral; stories and news'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the idiom that fits.', items: [
        { q: 'The new tax is ___: it will raise almost nothing compared with the debt.', o: ['a drop in the ocean', 'the last straw', 'in the same boat'], why: 'Far too small to make a difference.' },
        { q: 'When the train was cancelled for the third time, that was ___ and I bought a car.', o: ['the last straw', 'a level playing field', 'by the same token'], why: 'The final problem that made the speaker act.' },
        { q: 'Smaller firms want ___ when they compete with the big chains for contracts.', o: ['a level playing field', 'a drop in the ocean', 'against all odds'], why: 'A fair situation for everyone.' },
        { q: 'We’ve been at this for six hours. Let’s ___.', o: ['call it a day', 'call it the day', 'call a day'], why: 'The fixed form is *call it a day*.' },
      ] },
    ] },
    { title: 'One wrong word', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each idiom has one wrong word. Find and fix it.', items: [
        { s: 'Don’t worry, we’re all in the same [ship].', a: ['boat'], why: 'The idiom is *in the same boat*.' },
        { s: 'Against all [chances], the team won the final.', a: ['odds'], why: 'The idiom is *against all odds*.' },
        { s: 'His rude comment was the last [stick].', a: ['straw'], why: 'The idiom is *the last straw*.' },
        { s: 'By the same [sign], we should cut our own costs too.', a: ['token'], why: 'The fixed phrase is *by the same token*.' },
        { s: 'The extra funding is only a drop in the [sea].', a: ['ocean'], why: 'The idiom is *a drop in the ocean*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 2', blocks: [
      { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 2): write one word in each gap. Every gap is part of a fixed phrase.', items: [
        { q: 'The council will, in all ___, approve the scheme next week.', a: ['likelihood', 'probability'], why: '*In all likelihood*: very probably.' },
        { q: 'The museum is closed for the time ___ while the roof is repaired.', a: ['being'], why: '*For the time being*: for now.' },
        { q: 'The report is by ___ means perfect, but it is a start.', a: ['no'], why: '*By no means*: not at all.' },
        { q: 'Prices may rise at first, but they should fall in the long ___.', a: ['run', 'term'], why: '*In the long run*: over a long period.' },
        { q: 'She was not ___ the least surprised by the news.', a: ['in'], why: '*Not in the least*: not at all.' },
        { q: 'The plan has worked well so ___, but it is early days.', a: ['far'], why: '*So far*: until now.' },
      ] },
      { t: 'tip', art: 'owl', md: 'A gap inside a fixed phrase gives no clue from meaning alone: you either know the phrase or you do not. Keep a list of fixed phrases with their prepositions and articles, and test yourself by hiding one word.' },
    ] },
  ],
  activities: {
    one: { title: 'Idiom stories', md: 'The student tells the story of a frustrating day or week. At the key moments, stop and ask which idiom from the board would fit (*Was that the last straw?*). At the end, rewrite two of the student’s sentences together with an idiom in its exact form and say where each version would fit.' },
    small: { title: 'Catch the change', md: 'Each student says a sentence with an idiom from the class, sometimes with one word changed (*in the same ship*). The others must catch any changed word and correct it. A point for each catch, and a point for a sentence nobody could fault.' },
    group: { title: 'Context rooms', md: 'Breakout rooms of three each get three idioms in the chat. For each idiom the room decides where it fits (a chat, an article or an essay) and writes one sentence for that context. Back together, rooms read their sentences and the class says whether the register is right.' },
  },
  homework: { book: 'u7:p2', md: 'Finish lesson 2 of unit 7 if needed, then do lesson 3 (I hope so, if not, so do I). Choose four idioms from the class and write one sentence with each about your own life. Next to each sentence, write where you would use it: a chat, an article or an essay.' },
};
