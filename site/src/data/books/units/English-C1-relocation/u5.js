// English C1 for moving abroad, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Reading between the lines',
  goal: 'Understand understatement, irony and banter, and respond naturally.',
  art: 'cat',
  tags: { skills: ['speaking', 'listening', 'vocabulary', 'reading'], topics: ['understatement', 'litotes', 'irony', 'teasing', 'banter', 'self-deprecation', 'indirectness', 'social-rules'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Not bad at all',
      about: 'Understand understatement and what people really mean when they say less.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'In many English-speaking settings, and especially in Britain, people often say **less** than they mean. This is **understatement**. A very good meal may be *not bad at all*; a serious problem may be *a bit of a problem*. A special kind of understatement, called **litotes**, uses *not* with the opposite word: *not unreasonable* means fairly reasonable, *not the best idea* means a bad idea.\n\nThe words alone do not tell you everything. Tone of voice, the situation and what is *not* said all matter. At C1 the goal is to hear these signals and to use a few of them yourself.' },
          { t: 'examples', items: [
            { s: 'The view from the top was **not bad at all**.', n: 'With a warm tone, this is real praise: the view was very good.' },
            { s: 'We’ve had **a bit of a problem** with the boiler.', n: 'Understatement: it may be quite serious.' },
            { s: 'That’s **not the most convenient** time for me.', n: 'A polite way of saying *that time doesn’t work*.' },
            { s: 'Her request is **not unreasonable**.', n: 'Litotes: it is fairly reasonable. It sounds more cautious than *reasonable*.' },
            { s: 'I was **not entirely** convinced by his argument.', n: 'Often means *I was not convinced at all*, said politely.' },
          ] },
        ],
        [
          { t: 'table', caption: 'What they say and what they may mean', explain: ['head', 'col1'], quiz: true, head: ['What they say', 'What they may mean'], rows: [
            ['I’ll bear it in mind.', 'I probably won’t do anything about it.'],
            ['That’s an interesting idea.', 'I have doubts about it.'],
            ['With the greatest respect, …', 'I think you are wrong.'],
            ['Perhaps we could consider other options.', 'I don’t like this option.'],
            ['I hear what you’re saying.', 'I understand, but I don’t agree.'],
            ['It’s quite good.', 'It’s fairly good, but not excellent.'],
            ['Could we possibly…?', 'Please do this; it matters to me.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In British English, *quite* before a positive adjective often means *fairly*: *quite good* can sound lukewarm. With extreme adjectives it means *completely*: *quite right*, *quite impossible*. In American English, *quite good* usually sounds more positive.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the speaker probably mean?', items: [
            { q: 'Your manager reads your proposal and says: “It’s an interesting idea. I’ll bear it in mind.”', o: ['She has doubts and will probably not act on it.', 'She loves it and will act on it at once.', 'She has not read it.'], why: 'Both phrases often signal polite doubt.' },
            { q: 'A neighbour says: “The music last night was a little loud, perhaps.”', o: ['The music was too loud and bothered him.', 'He enjoyed the music.', 'He is not sure whether there was music.'], why: '*A little* and *perhaps* soften a real complaint.' },
            { q: 'A friend tries your cooking and says, warmly: “Mm, that’s not bad at all.”', o: ['He thinks it is very good.', 'He thinks it is terrible.', 'He has no opinion.'], why: 'With a warm tone, *not bad at all* is real praise.' },
            { q: 'In a meeting someone says: “With the greatest respect, I’m not sure the figures support that.”', o: ['He disagrees quite strongly.', 'He has great respect and agrees.', 'He has not seen the figures.'], why: '*With the greatest respect* usually introduces strong disagreement.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Is the speaker’s real message positive or negative?', groups: ['Positive', 'Negative'], explain: ['groups'], items: [
            { s: 'Not bad at all, actually.', g: 0, why: 'Litotes for *good*, especially with *actually*.' },
            { s: 'That’s not the best idea we’ve had.', g: 1, why: 'Litotes for *a bad idea*.' },
            { s: 'I can’t say I’m a huge fan.', g: 1, why: 'A soft way of saying *I don’t like it*.' },
            { s: 'I wouldn’t say no to another slice.', g: 0, why: 'A modest way of saying *yes, please*.' },
            { s: 'I’m not entirely sure that will work.', g: 1, why: 'Polite doubt: probably *it won’t work*.' },
            { s: 'It’s not the worst place to spend a Sunday.', g: 0, why: 'Litotes: it is quite a nice place.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with understatement, starting with the words given.', items: [
            { q: 'The hotel was terrible.', cue: 'The hotel wasn’t', a: ['The hotel wasn’t great.', 'The hotel wasn’t the best.', 'The hotel wasn’t brilliant.', 'The hotel wasn’t the nicest.', 'The hotel wasn’t ideal.'], why: '*Wasn’t great* or *wasn’t the best* softens a strong negative.' },
            { q: 'I don’t like this colour.', cue: 'I can’t say', a: ['I can’t say I like this colour.', 'I can’t say I’m keen on this colour.', 'I can’t say I’m a fan of this colour.', 'I can’t say I love this colour.'], why: '*I can’t say I…* is a gentle way to express dislike.' },
            { q: 'Tuesday is a bad day for me.', cue: 'Tuesday isn’t', a: ['Tuesday isn’t ideal for me.', 'Tuesday isn’t great for me.', 'Tuesday isn’t the best day for me.', 'Tuesday isn’t very convenient for me.', 'Tuesday isn’t the most convenient day for me.'], why: '*Isn’t ideal* or *isn’t the most convenient* says no politely.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the word that completes the polite expression.', items: [
            { q: 'I hear what you’re ___, but I still think we should wait.', o: ['saying', 'telling', 'speaking'], why: 'The fixed phrase is *I hear what you’re saying*.' },
            { q: 'I’ll bear it in ___.', o: ['mind', 'head', 'thought'], why: '*Bear something in mind*: remember it, consider it.' },
            { q: 'I wouldn’t say ___ to a cup of tea.', o: ['no', 'yes', 'never'], why: '*I wouldn’t say no to…* means *I would like…*' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Only joking',
      about: 'Recognise irony, teasing and self-deprecating humour, and join in.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: '**Irony** means saying the opposite of what you mean, usually with a flat or exaggerated tone: *Lovely weather* in heavy rain. **Teasing**, or **banter**, is friendly joking at someone’s expense, common between colleagues and friends who like each other. **Self-deprecating** humour means making fun of yourself: *I’m hopeless with maps, so follow me at your own risk.*\n\nThese are often signs of acceptance, not hostility. People usually tease those they feel comfortable with. The best response is often to **play along**: smile, exaggerate a little or tease back gently.' },
          { t: 'examples', items: [
            { s: '“**Brilliant.** The train’s cancelled again.”', n: 'Irony: *brilliant* means the opposite here.' },
            { s: '“Oh, **look who’s decided to join us**!” (to a colleague arriving late)', n: 'Teasing. It is friendly if the tone is warm and everyone smiles.' },
            { s: '“Don’t ask me, I **can barely** boil an egg.”', n: 'Self-deprecation: he is probably not that bad, but he is being modest.' },
            { s: '“**Very funny.** You won’t be laughing when it’s your turn to cook.”', n: 'A good-humoured reply that plays along.' },
          ] },
          { t: 'tip', art: 'owl', md: 'If you are not sure whether someone is joking, it is fine to smile and ask lightly: *Are you pulling my leg?* (*Pull someone’s leg* means tease them by saying something untrue.) Teasing should stop if it hurts, and you can always say so calmly.' },
        ],
        [
          { t: 'dialogue', title: 'Monday morning', lines: [
            { who: 'Callum', s: 'Morning, Inés. Good weekend? Or did you spend it reorganising your spreadsheets again?' },
            { who: 'Inés', s: 'Very funny. For your information, I went hiking. In the rain. For six hours.' },
            { who: 'Callum', s: 'Sounds delightful.' },
            { who: 'Inés', s: 'It was, actually. Well, the last hour wasn’t, because someone had planned the route.' },
            { who: 'Callum', s: 'Let me guess. That someone was you.' },
            { who: 'Inés', s: 'Guilty. My sense of direction is legendary. People still talk about the time I got lost in a car park.' },
            { who: 'Callum', s: 'Remind me never to let you plan the team day out.' },
            { who: 'Inés', s: 'Too late. I’ve already booked it. Bring waterproofs.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Callum is being unkind about Inés’s spreadsheets.', a: 'f', why: 'It is friendly teasing, and Inés plays along with *Very funny*.' },
            { q: 'Callum really thinks six hours of hiking in the rain sounds delightful.', a: 'f', why: '*Sounds delightful* is ironic.' },
            { q: 'Inés enjoyed most of the walk.', a: 't', why: '*It was, actually*, except the last hour.' },
            { q: 'Inés has a very good sense of direction.', a: 'f', why: '*Legendary* is self-deprecating irony: she got lost in a car park.' },
            { q: 'Inés turns the joke back on Callum at the end.', a: 't', why: 'She has already booked the team day, so he cannot stop her.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the most natural reply.', items: [
            { q: 'A colleague, smiling: “Oh, you’ve finally learned how to use the coffee machine!”', o: ['I know, I’m a fast learner. Only took me three months.', 'That is very rude. I have always known how to use it.', 'Yes. I learned it on Tuesday at ten o’clock.'], why: 'Playing along with self-deprecating humour keeps the joke friendly.' },
            { q: 'A friend, as heavy rain starts: “Perfect day for a picnic.”', o: ['Isn’t it just? I’ll get the sun cream.', 'No, it is raining, so it is not perfect.', 'I don’t understand what you mean.'], why: 'Reply to irony with more irony: *Isn’t it just?*' },
            { q: 'Someone says something surprising, and you are not sure if it is true.', o: ['Are you pulling my leg?', 'Are you pulling my arm?', 'Are you pushing my leg?'], why: 'The idiom is *pull someone’s leg*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Remind me never to let you plan the route.', why: '*Remind me never to…* is a common teasing pattern.' },
            { a: 'I can barely boil an egg.', why: '*Can barely* + verb: a self-deprecating exaggeration.' },
            { a: 'Look who has decided to join us.', why: 'A friendly tease to someone who arrives late.' },
          ] },
          { t: 'ex', kind: 'search', h: 'Find the words from this lesson.', words: ['irony', 'banter', 'tease', 'joke', 'pull', 'leg', 'humour'] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'The art of banter',
      about: 'Read a column about teasing and humour at work.',
      art: 'teacup',
      spreads: [
        [
          { t: 'reading', title: 'You know you’ve been accepted when they start making fun of you', md: 'In my first month at a new job, abroad and in a second language, I took everything literally. When a colleague looked at my overflowing desk and said, “I love what you’ve done with the place,” I thanked him. When my manager described a disastrous presentation as “not our finest hour,” I assumed she was mildly disappointed. She was not mildly disappointed.\n\nIt took me a while to realise that much of the conversation around me was happening between the lines. Praise came disguised as complaint, criticism came wrapped in understatement, and affection, oddly, came in the form of insults. The day a colleague called me “our resident genius” after I locked myself out of the building, I felt, for the first time, that I belonged.\n\nBanter is not universal, and it is not always harmless. In some workplaces it is used to exclude people, and a joke that is repeated too often stops being funny. The line between teasing and unkindness is not always easy to see, especially for newcomers, who may not yet know who is joking and who is not. If in doubt, it is perfectly acceptable to take things at face value until you are sure.\n\nStill, learning to read humour is part of learning a language. My advice, for what it is worth, is to watch first, laugh at yourself early, and tease back only when you are confident of your audience. And if someone says your idea is “brave”, think twice before going ahead.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the column. True, false or not given?', items: [
            { q: 'At first, the writer did not recognise irony.', a: 't', why: 'She *took everything literally* and thanked a colleague for an ironic comment.' },
            { q: 'The manager was only slightly disappointed with the presentation.', a: 'f', why: '*She was not mildly disappointed*: she was very disappointed.' },
            { q: 'Being teased made the writer feel accepted.', a: 't', why: 'After being called *our resident genius*, she felt she belonged.' },
            { q: 'The writer thinks banter is always harmless.', a: 'f', why: '*It is not always harmless*; it can exclude people.' },
            { q: 'The writer later became a manager herself.', a: 'ng', why: 'Nothing is said about her career.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language of the column.', items: [
            { q: '“I love what you’ve done with the place” was meant ___.', o: ['ironically, about the mess', 'as a real compliment', 'as an apology'], why: 'Said about an overflowing desk, it is ironic.' },
            { q: '“Not our finest hour” is an example of ___.', o: ['understatement', 'exaggeration', 'a direct compliment'], why: 'It describes a disaster mildly.' },
            { q: 'What does “take things at face value” mean?', o: ['Accept what people say as it first appears.', 'Look for hidden meanings everywhere.', 'Judge people by how they look.'], why: '*At face value*: as it seems, without looking for another meaning.' },
            { q: 'Why should you “think twice” if someone calls your idea “brave”?', o: ['It may be a polite way of saying the idea is risky or unwise.', 'It means everyone loves the idea.', 'It means the idea is about courage.'], why: '*Brave* can be an understatement for *risky* or *foolish*.' },
          ] },
          { t: 'ex', kind: 'wordform', h: 'Complete with the correct form of the word in capitals.', items: [
            { q: 'At first I took every comment ___.', base: 'LITERAL', a: ['literally'], why: 'The adverb of *literal* is *literally*.' },
            { q: 'Laughing at yourself is a form of ___ humour.', base: 'DEPRECATE', a: ['self-deprecating', 'self deprecating'], why: '*Self-deprecating*: making fun of yourself.' },
            { q: 'Most of the teasing was a sign of ___.', base: 'ACCEPT', a: ['acceptance'], why: 'The noun of *accept* is *acceptance*.' },
            { q: 'Her ___ comments went straight over my head.', base: 'IRONY', a: ['ironic'], why: 'The adjective of *irony* is *ironic*. *Go over your head*: you do not understand it.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: '“That’s not the best idea.” The speaker probably thinks it is ___.', o: ['a bad idea', 'a very good idea', 'the best idea'], why: 'Litotes for a bad idea.' },
      { q: '“I’ll bear it in mind” often means ___.', o: ['I probably won’t do anything', 'I will do it today', 'I don’t understand'], why: 'A polite, non-committal reply.' },
      { q: 'Making fun of yourself is called ___ humour.', o: ['self-deprecating', 'self-confident', 'self-employed'], why: '*Self-deprecating*.' },
      { q: 'Heavy rain. Your friend says: “Great day for the beach.” This is ___.', o: ['irony', 'a weather forecast', 'a complaint about the beach'], why: 'She says the opposite of what she means.' },
      { q: 'In British English, “quite good” usually means ___.', o: ['fairly good', 'excellent', 'not good at all'], why: '*Quite* + positive adjective often means *fairly*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
      { q: 'Are you pulling my ___?', a: ['leg'], why: '*Pull someone’s leg*: tease them.' },
      { q: 'I wouldn’t say ___ to a second helping.', a: ['no'], why: '*I wouldn’t say no*: yes, please.' },
      { q: 'I hear what you’re ___, but I disagree.', a: ['saying'], why: 'The fixed phrase.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Positive or negative real message?', groups: ['Positive', 'Negative'], explain: ['groups'], items: [
      { s: 'It wasn’t bad at all.', g: 0, why: 'Litotes for *good*.' },
      { s: 'I can’t say I enjoyed it.', g: 1, why: 'A soft way of saying *I didn’t enjoy it*.' },
      { s: 'It’s not the most convenient time.', g: 1, why: 'A polite *no*.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'Friendly teasing is often a sign that people feel comfortable with you.', a: 't', why: 'People usually tease those they like.' },
      { q: '*With the greatest respect* usually introduces agreement.', a: 'f', why: 'It usually introduces disagreement.' },
    ] },
  ],
};
