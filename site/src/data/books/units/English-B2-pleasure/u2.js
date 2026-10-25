// English B2 for travel, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Cultural etiquette',
  goal: 'Understand and discuss customs and good manners in other places.',
  art: 'teacup',
  tags: { skills: ['speaking', 'vocabulary', 'reading'], topics: ['customs', 'gestures', 'be-supposed-to', 'impersonal-structures', 'hedging', 'generalising'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'It’s considered rude to…',
      about: 'Describe customs, gestures and taboos, and talk about differences with respect.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'When we describe customs, we talk about what people **in general** do, not about one person. English often uses impersonal phrases for this: *it’s considered…*, *you’re expected to…*, *you’re not supposed to…*. Here *you* means *people in general*.' },
          { t: 'table', caption: 'Talking about customs', explain: ['head'], head: ['Phrase', 'Example'], rows: [
            ['It’s considered rude to …', 'In many countries, it’s considered rude to point at people.'],
            ['It’s customary to …', 'In many homes in Japan, it’s customary to take off your shoes at the door.'],
            ['You’re expected to …', 'In the US, you’re expected to leave a tip in restaurants.'],
            ['You’re not supposed to …', 'You’re not supposed to talk loudly in the quiet carriage of a train.'],
            ['… is frowned upon', 'Arriving very late for a dinner party is often frowned upon.'],
            ['… is taboo', 'In some places, asking someone about their salary is almost taboo.'],
          ] },
        ],
        [
          { t: 'table', caption: 'Gestures', explain: ['head', 'col1'], quiz: true, head: ['Gesture', 'What you do'], rows: [
            ['bow', 'bend your head or body forward to greet or thank someone'],
            ['nod', 'move your head up and down, often to say yes'],
            ['shake hands', 'hold another person’s right hand and move it up and down'],
            ['wave', 'move your hand from side to side to say hello or goodbye'],
            ['point', 'show something with your finger'],
            ['give a thumbs up', 'hold up your thumb to show that something is good'],
          ] },
          { t: 'tip', art: 'owl', md: 'The same gesture can mean different things. In the UK, a *thumbs up* means *good* or *OK*, but in some countries it is a rude gesture. If you are not sure, a smile and a nod are usually safe.' },
        ],
        [
          { t: 'text', md: 'When you talk about customs that are new to you, words like *weird* or *strange* can sound like criticism. Speakers who want to sound respectful compare the custom with their own experience instead, and choose neutral words: *different*, *unusual*, *surprising*.' },
          { t: 'examples', items: [
            { s: '**Where I come from**, people usually eat dinner around six.', n: 'Describes your own culture, not a rule for everyone.' },
            { s: 'It’s quite **different from what I’m used to**.', n: 'Neutral: it says the custom is new to you, not that it is wrong.' },
            { s: '**It took me a while to get used to** kissing people on the cheek.', n: 'Shows that you adapted to the custom.' },
            { s: 'I **found it surprising** at first, but now I really like it.', n: '*Surprising* is neutral; *weird* can sound negative.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct or the most respectful option.', items: [
            { q: 'In some countries, you’re ___ to bring a small gift when you visit someone’s home.', o: ['expected', 'considered', 'frowned'], why: '*You’re expected to* + base form: people think you should do it.' },
            { q: 'Eating in the street is ___ upon in some places.', o: ['frowned', 'expected', 'supposed'], why: '*Be frowned upon*: people disapprove of it.' },
            { q: 'In many countries, it’s considered rude ___ at people.', o: ['to point', 'pointing at', 'point'], why: '*It’s considered rude to* + base form.' },
            { q: 'You tell a friend about meal times in Spain.', o: ['People there eat much later than I’m used to.', 'People there eat at really weird times.', 'Their meal times are wrong.'], why: '*Than I’m used to* compares with your own habits without criticising.' },
            { q: 'You describe a greeting that was new to you.', o: ['I found it surprising at first.', 'It was a strange thing to do.', 'It’s a silly custom.'], why: '*Surprising* is neutral and describes your reaction, not the custom.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
            { q: 'You’re not ___ to wear shoes inside the temple.', a: ['supposed', 'allowed', 'meant', 'permitted'], why: '*You’re not supposed to* means there is a rule or a custom against it.' },
            { q: 'It took me a ___ to get used to the greetings.', a: ['while'], why: '*It took me a while* = it took me some time.' },
            { q: 'Where I come ___, people shake hands when they meet.', a: ['from'], why: '*Where I come from* introduces your own culture.' },
            { q: 'In Japan, people often bend forward to greet each other: they ___.', a: ['bow'], why: 'To *bow* is to bend your head or body forward to greet someone.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'People there tend to…',
      about: 'Soften what you say so that comparisons between cultures do not sound like stereotypes.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A statement like *Germans are always on time* is a **stereotype**: it says that every person in a group is the same. Careful speakers **hedge**: they make a statement less absolute. Use *tend to* + base form, words like *generally* and *on the whole*, *many* or *some* instead of *all*, and modal verbs like *may*, *might* and *can*.' },
          { t: 'table', caption: 'Hedging', explain: ['head'], head: ['Too strong', 'Hedged'], rows: [
            ['People there are very direct.', 'People there tend to be quite direct.'],
            ['Everyone eats late.', 'Many people eat later than in the UK.'],
            ['Small talk is rude there.', 'Small talk may seem less important there.'],
            ['They never complain.', 'On the whole, people don’t complain much.'],
            ['Locals hate tourists.', 'I get the impression that some locals are tired of crowds.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Back from a semester abroad', lines: [
            { who: 'Daniel', s: 'So, what were people like in Finland? I’ve heard they’re really quiet.' },
            { who: 'Amara', s: 'Well, I wouldn’t say that exactly. They tend to be quite reserved with strangers.' },
            { who: 'Daniel', s: 'So no small talk at the bus stop?' },
            { who: 'Amara', s: 'Not much, generally. But once you get to know people, they can be incredibly warm.' },
            { who: 'Daniel', s: 'That’s not what I expected.' },
            { who: 'Amara', s: 'From what I saw, silence just seems to be more comfortable there. It’s not unfriendly at all.' },
          ] },
          { t: 'text', md: 'Amara never says *all Finns* or *always*. *I wouldn’t say that exactly* disagrees politely with a stereotype. *Tend to*, *generally*, *can* and *seems to* make each statement softer. *From what I saw* shows that she speaks from her own experience.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the more careful statement.', items: [
            { q: '', o: ['People in big cities tend to walk quite fast.', 'People in big cities always walk fast.'], why: '*Tend to* and *quite* make the statement less absolute.' },
            { q: '', o: ['On the whole, service in cafés is quite relaxed there.', 'Service in cafés is slow everywhere there.'], why: '*On the whole* hedges, and *relaxed* is more neutral than *slow*.' },
            { q: '', o: ['Some visitors may find the food a bit spicy.', 'Everyone will find the food too spicy.'], why: '*Some*, *may* and *a bit* soften the statement.' },
            { q: '', o: ['I get the impression that people value their privacy.', 'People there don’t like talking to anyone.'], why: '*I get the impression that* presents it as your view, not a fact.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the hedged statements with one word.', items: [
            { q: 'People there ___ to have dinner quite late.', a: ['tend'], why: '*Tend to* + base form: usually, but not always.' },
            { q: 'On the ___, people are very helpful to visitors.', a: ['whole'], why: '*On the whole* = generally.' },
            { q: 'I get the ___ that tipping isn’t very common here.', a: ['impression', 'feeling'], why: '*I get the impression that* presents your personal view.' },
            { q: 'From what I ___, most shops close on Sunday afternoons.', a: ['saw', 'see', 'understand', 'heard', 'hear', 'know'], why: '*From what I saw* shows you speak from your own experience.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the word that makes each statement too absolute.', items: [
            { s: '[All] the people in that city are in a hurry.', why: 'Use *many* or *most* instead of *all*.' },
            { s: 'Locals [never] smile at strangers on the street.', why: 'Use *don’t often* or *rarely* instead of *never*.' },
            { s: 'Shop assistants there are [always] very formal.', why: 'Use *usually*, *often* or *tend to be* instead of *always*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'They tend to dress quite formally.', why: '*Tend to* + base form, then *quite* + adverb.' },
            { a: 'I wouldn’t say that exactly.', why: 'A polite way to disagree with a generalisation.' },
            { a: 'Small talk seems to be less important.', why: '*Seem to* + *be*: it looks true from the outside.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Lost in politeness',
      about: 'Read an article about cultural misunderstandings and what we can learn from them.',
      art: 'parrot',
      spreads: [
        [
          { t: 'reading', title: 'Lost in politeness', md: 'When Tomasz moved from Warsaw to Leeds for work, his new colleagues seemed extremely friendly. “You must come round for dinner some time,” one of them said in his first week. Tomasz waited for an invitation with a date, but it never came. “I thought I had done something wrong,” he says. “Later I realised it was just a friendly thing to say, not a real plan.”\n\nMisunderstandings like this are rarely about vocabulary. Visitors who speak excellent English can still find themselves confused, because people do not always mean exactly what their words say. In the UK, for example, “I’ll bear it in mind” can be a polite way of saying no, and “That’s an interesting idea” does not always mean the speaker likes it.\n\nBody language causes problems too. A gesture that is friendly in one place may be rude in another, and even the distance people keep while they talk can vary. Leila, who grew up in Beirut and now teaches in Toronto, remembers students stepping back when she spoke to them. “At first I thought they didn’t like me,” she laughs. “In fact, I was just standing a bit closer than they were used to.”\n\nPeople who work in international teams tend to give similar advice. When something seems strange or rude, ask yourself whether it might simply be normal where the other person comes from. Ask questions rather than judge, and be ready to laugh at your own mistakes.\n\n“Nobody gets it right every time,” says Leila. “What matters is that you’re curious, not that you’re perfect.”' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Tomasz’s colleague never gave him a date for the dinner.', a: 't', why: '“Tomasz waited for an invitation with a date, but it never came.”' },
            { q: 'Tomasz did something rude in his first week.', a: 'f', why: 'He only thought he had; later he understood it was a friendly phrase.' },
            { q: 'According to the article, most misunderstandings come from poor vocabulary.', a: 'f', why: '“Misunderstandings like this are rarely about vocabulary.”' },
            { q: 'Leila has taught in Beirut as well as in Toronto.', a: 'ng', why: 'She grew up in Beirut, but the article does not say where else she has taught.' },
            { q: 'Leila’s students stepped back because she stood quite close to them.', a: 't', why: '“I was just standing a bit closer than they were used to.”' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language in the article.', items: [
            { q: 'In the UK, “I’ll bear it in mind” can mean:', o: ['a polite no', 'a definite yes', 'I don’t understand'], why: 'The article says it can be a polite way of saying no.' },
            { q: '“You must come round for dinner some time” was:', o: ['a friendly remark, not a real plan', 'an order', 'an invitation for a fixed date'], why: 'Tomasz later realised it was just a friendly thing to say.' },
            { q: 'Which phrase in the article is a hedge?', o: ['tend to give similar advice', 'speak excellent English', 'never came'], why: '*Tend to* makes a statement less absolute.' },
            { q: 'The main message of the article is:', o: ['be curious and do not judge too quickly', 'learn more vocabulary before you travel', 'always stand far away from people'], why: 'The advice is to ask questions rather than judge.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the words from the article with their meanings.', pairs: [
            ['come round', 'visit someone at their home'],
            ['bear something in mind', 'remember it and think about it later'],
            ['step back', 'move a little further away'],
            ['judge', 'form an opinion, often a negative one'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'In some countries, it’s considered rude ___ your nose at the table.', o: ['to blow', 'blowing', 'blow'], why: '*It’s considered rude to* + base form.' },
      { q: 'You’re ___ to remove your hat inside the church.', o: ['supposed', 'considered', 'customary'], why: '*You’re supposed to* + base form.' },
      { q: 'Talking loudly on the phone in the quiet carriage is frowned ___.', o: ['upon', 'over', 'at'], why: '*Be frowned upon*.' },
      { q: 'People there ___ to be quite reserved with strangers.', o: ['tend', 'seem like', 'generally'], why: '*Tend to* + base form.' },
      { q: 'Which word is the most neutral way to describe a new custom?', o: ['unusual', 'weird', 'ridiculous'], why: '*Unusual* is neutral; the others sound critical.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
      { q: 'It’s quite different from what I’m ___ to.', a: ['used'], why: '*What I’m used to*: what is normal for me.' },
      { q: 'In many homes, it’s ___ to take off your shoes.', a: ['customary', 'normal', 'usual', 'polite', 'common'], why: '*It’s customary to* + base form.' },
      { q: 'On the ___, people there are very relaxed.', a: ['whole'], why: '*On the whole* = generally.' },
      { q: 'He moved his head up and down to say yes: he ___.', a: ['nodded'], why: 'To *nod*, past simple *nodded*.' },
    ] },
    { t: 'ex', kind: 'spot', h: 'Tap the word that makes the statement too absolute.', items: [
      { s: 'People in the north are [always] friendlier.', why: 'Hedge with *tend to be* or *often*.' },
      { s: '[Everybody] there eats dinner after ten.', why: 'Use *many people* instead of *everybody*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'I get the impression that tipping is rare.', why: '*I get the impression that* + a clause.' },
    ] },
  ],
};
