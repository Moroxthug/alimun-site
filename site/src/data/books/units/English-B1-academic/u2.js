// English B1 for study and exams, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Lectures and notes',
  goal: 'Follow a talk with the help of signposting language and take short, useful notes.',
  art: 'parrot',
  tags: { skills: ['listening', 'vocabulary', 'reading', 'writing'], topics: ['signposting', 'note-taking', 'abbreviations', 'lectures'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Signposts in a talk',
      about: 'Words that tell you what a speaker is going to do next.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Good speakers use **signposting language**: short phrases that show the structure of a talk. They tell you when a new point starts, when an example comes and when the speaker is finishing. If you listen for them, a long lecture is much easier to follow.' },
          { t: 'table', caption: 'Signposting language', explain: ['head', 'col0'], quiz: true, head: ['What the speaker does', 'Phrases'], rows: [
            ['starts the talk', 'Today I’m going to talk about… / First of all, …'],
            ['adds a point', 'In addition, … / Another point is… / Also, …'],
            ['shows a contrast', 'However, … / On the other hand, …'],
            ['gives an example', 'For example, … / For instance, … / such as'],
            ['moves to the next part', 'Let’s move on to… / Next, … / Finally, …'],
            ['sums up', 'To sum up, … / In conclusion, …'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: '**First of all**, let’s look at the history of the city.', n: 'The speaker starts the first main point.' },
            { s: 'Many people think sleep is a waste of time. **However**, it helps us to remember.', n: '*However* introduces an idea that is different from the one before.' },
            { s: 'Some sports, **such as** tennis and golf, are popular with older people.', n: '*Such as* comes before examples, without a comma after it.' },
            { s: '**To sum up**, there are three main reasons.', n: 'The talk is nearly finished. Listen carefully: the main points come again.' },
          ] },
          { t: 'tip', art: 'owl', md: 'When you hear *To sum up* or *In conclusion*, check your notes. The speaker usually repeats the most important points, so you can add anything you missed.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each phrase with what it does.', pairs: [
            ['However, …', 'shows a contrast'],
            ['For instance, …', 'introduces an example'],
            ['To sum up, …', 'starts the summary'],
            ['In addition, …', 'adds another point'],
            ['Let’s move on to…', 'starts a new part of the talk'],
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the signposting phrase in each sentence.', items: [
            { s: '[First] [of] [all], let’s look at the causes of the problem.', why: '*First of all* starts the first point.' },
            { s: 'The results were good. [However], the group was very small.', why: '*However* shows a contrast.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best phrase for the lecturer.', items: [
            { q: 'Many people think exams are the best test. ___, coursework can show more skills.', o: ['However', 'For example', 'In addition'], why: 'The second idea is different from the first: *However*.' },
            { q: 'There are several ways to save energy, ___ using public transport.', o: ['such as', 'however', 'finally'], why: '*Such as* introduces an example.' },
            { q: '___, we have looked at three causes of stress.', o: ['To sum up', 'For example', 'On the other hand'], why: 'The speaker repeats the main points at the end: *To sum up*.' },
            { q: 'That’s all on prices. ___ the second topic: salaries.', o: ['Let’s move on to', 'For instance', 'However'], why: '*Let’s move on to…* starts a new part of the talk.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
            { q: 'Let’s move ___ to the next point.', a: ['on'], why: 'The phrase is *move on to*.' },
            { q: 'For ___, many students work part-time while they study.', a: ['example', 'instance'], why: '*For example* and *for instance* both introduce an example.' },
            { q: 'In ___, I would like to repeat the main points.', a: ['conclusion', 'summary', 'short'], why: '*In conclusion* starts the end of the talk.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Taking notes',
      about: 'Write down the key words and use short forms.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'You cannot write down everything a lecturer says, and you do not need to. Write the **key words**: nouns, main verbs, names, dates and numbers. Leave out small words like *the*, *a*, *is* and *are*. Use short forms and symbols to save time.' },
          { t: 'table', caption: 'Short forms for notes', explain: ['head', 'col1'], quiz: true, head: ['Short form', 'Meaning'], rows: [
            ['e.g.', 'for example'],
            ['i.e.', 'that is, in other words'],
            ['etc.', 'and so on'],
            ['approx.', 'approximately, about'],
            ['vs', 'compared with, against'],
            ['info', 'information'],
            ['=', 'is, means'],
            ['→', 'leads to, causes'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'The lecturer says: *The population of the town grew by about 40 per cent between 1950 and 2000, mainly because of the new factories.*', n: 'This is a full sentence: too long to write down.' },
            { s: 'Your notes: **pop. grew approx. 40% (1950–2000); main reason: new factories**', n: 'Only the key facts: what, how much, when and why.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Look at your notes on the same day, while you still remember the lecture. Write out any short forms you might not understand in a week, and add questions for your tutor.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each short form with its meaning.', pairs: [
            ['e.g.', 'for example'],
            ['i.e.', 'in other words'],
            ['etc.', 'and so on'],
            ['approx.', 'about'],
            ['vs', 'compared with'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the short form of the words in brackets.', items: [
            { q: 'Bring pens, paper, a calculator, ___ (and so on).', a: ['etc.', 'etc'], why: '*etc.* means *and so on*. It goes at the end of a list.' },
            { q: 'Team sports, ___ (for example) football and hockey', a: ['e.g.', 'eg', 'e.g'], why: '*e.g.* means *for example*.' },
            { q: 'The class lasts ___ (approximately) two hours.', a: ['approx.', 'approx'], why: '*approx.* means *approximately* or *about*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best note.', items: [
            { q: 'The lecturer says: “The first university in the city opened in 1823, and it had only forty students.”', o: ['1st uni opened 1823, 40 students', 'The first university in the city opened in 1823.', 'uni, city, students'], why: 'A good note keeps the key facts (what, when, how many) and leaves out small words.' },
            { q: 'The lecturer says: “There are many renewable energy sources, for example wind, sun and water.”', o: ['renewable energy e.g. wind, sun, water', 'there are many sources', 'wind'], why: 'The note keeps the topic and all the examples in a short form.' },
            { q: 'Which words can you usually leave out of your notes?', o: ['the, a, is', 'names and dates', 'numbers'], why: 'Small grammar words do not carry the meaning. Names, dates and numbers do.' },
            { q: 'In the note *Year 1 modules, i.e. the compulsory ones*, *i.e.* means:', o: ['that is', 'for example', 'and so on'], why: '*i.e.* explains the words before it more exactly: *that is*, *in other words*.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about good notes. True or false?', items: [
            { q: 'Good notes include every word the speaker says.', a: 'f', why: 'There is no time for that. Write only the key words.' },
            { q: 'Numbers, names and dates are usually worth writing down.', a: 't', why: 'They are facts you will not remember exactly later.' },
            { q: 'It is a good idea to read your notes again soon after the lecture.', a: 't', why: 'You can still remember the lecture and add what is missing.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A short talk',
      about: 'Read the words of a short talk and follow its structure.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Time management in your first year', md: 'Good morning, everyone. Today I’m going to talk about time management, and how it can help you in your first year.\n\nFirst of all, let’s think about why time management matters. At university, nobody tells you what to do every hour. You might have only ten hours of lectures and seminars a week, but you are expected to study for many more hours on your own.\n\nSo, how can you plan your time? To begin with, write down all your deadlines for the term in one place, for example in a calendar on your phone. Next, break big tasks into small steps. An essay, for instance, includes reading, planning, writing and checking.\n\nAnother useful idea is to study at the same times every week. However, don’t forget to plan breaks, too. Many people find it hard to concentrate for more than an hour without a rest.\n\nFinally, be honest with yourself. If you always check your messages while you study, put your phone in another room.\n\nTo sum up, write down your deadlines, break tasks into steps, keep a regular routine and remove distractions. Now, are there any questions?' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the talk. True, false or not given?', items: [
            { q: 'Students are expected to study more hours on their own than in class.', a: 't', why: '*You are expected to study for many more hours on your own.*' },
            { q: 'The speaker suggests keeping deadlines in different places.', a: 'f', why: 'The speaker says to write them all down *in one place*.' },
            { q: 'An essay is an example of a big task.', a: 't', why: '*An essay, for instance, includes reading, planning, writing and checking.*' },
            { q: 'The speaker thinks studying late at night is best.', a: 'ng', why: 'The talk does not say what time of day is best.' },
            { q: 'The speaker thinks breaks are a waste of time.', a: 'f', why: 'The speaker says *don’t forget to plan breaks, too*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Think about the structure of the talk.', items: [
            { q: 'Which phrase introduces the summary?', o: ['To sum up', 'First of all', 'For instance'], why: '*To sum up* comes before the main points again.' },
            { q: '*Another useful idea is…* tells you that the speaker is ___.', o: ['adding a new point', 'giving an example', 'finishing the talk'], why: '*Another…* adds a point to the ones before.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the notes on the talk with one word.', items: [
            { q: 'write all deadlines in ___ place, e.g. phone calendar', a: ['one', '1'], why: 'The speaker says *in one place*.' },
            { q: 'big tasks → small ___', a: ['steps'], why: '*Break big tasks into small steps.*' },
            { q: 'remove distractions, e.g. ___ in another room', a: ['phone'], why: '*Put your phone in another room.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Online courses are flexible. ___, some students feel lonely.', o: ['However', 'For example', 'Such as'], why: 'The second idea is a contrast: *However*.' },
      { q: 'Many fruits, ___ oranges and kiwis, contain vitamin C.', o: ['such as', 'however', 'to sum up'], why: '*Such as* introduces examples.' },
      { q: 'In notes, *e.g.* means ___.', o: ['for example', 'that is', 'and so on'], why: '*e.g.* = *for example*.' },
      { q: 'Which words do you usually leave out of notes?', o: ['a, the, are', 'dates', 'names of people'], why: 'Small grammar words carry little meaning.' },
      { q: '___, I’d like to repeat the three main points.', o: ['In conclusion', 'For instance', 'However'], why: '*In conclusion* starts the end of the talk.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with one word or a short form.', items: [
      { q: 'Let’s move on ___ the second part of the talk.', a: ['to'], why: 'The phrase is *move on to*.' },
      { q: 'books, articles, websites, ___ (and so on)', a: ['etc.', 'etc'], why: '*etc.* = *and so on*.' },
      { q: 'For ___, a lot of students cook together to save money.', a: ['example', 'instance'], why: '*For example* or *for instance*.' },
      { q: 'The trip takes ___ (approximately) three hours.', a: ['approx.', 'approx'], why: '*approx.* = *approximately*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match each phrase with what it does.', pairs: [
      ['To begin with, …', 'starts the first point'],
      ['On the other hand, …', 'shows a contrast'],
      ['such as', 'introduces examples'],
      ['To sum up, …', 'repeats the main points'],
    ] },
  ],
};
