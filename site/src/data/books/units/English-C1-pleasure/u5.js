// English C1 for travel, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Humour and wordplay',
  goal: 'Understand irony, understatement and wordplay, and respond naturally.',
  art: 'dog',
  tags: { skills: ['listening', 'speaking', 'vocabulary', 'reading'], topics: ['irony', 'sarcasm', 'understatement', 'hyperbole', 'puns', 'responding-to-jokes', 'humour-across-cultures'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Oh, brilliant',
      about: 'Recognise irony, sarcasm, understatement and exaggeration, and understand what the speaker really means.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Much humour in English depends on **not saying exactly what you mean**. With **irony**, you say the opposite of what you mean. **Sarcasm** is irony used to criticise or complain. With **understatement**, you make something sound much smaller or less serious than it is. With **exaggeration** (also called *hyperbole*), you make it much bigger.' },
          { t: 'examples', items: [
            { s: 'The flight’s been cancelled? **Oh, brilliant.**', n: 'Irony: the speaker means *this is terrible*. The tone of voice is flat or heavy.' },
            { s: '**Thanks for waiting**, said Kenji, as the bus drove off without him.', n: 'Sarcasm: he is complaining that the bus did not wait.' },
            { s: 'It was **a bit chilly** on the glacier.', n: 'Understatement: it was actually extremely cold.' },
            { s: 'The view from the top **wasn’t bad**.', n: 'Understatement: often means *it was excellent*.' },
            { s: 'This bag weighs **a ton**. I’ve walked **a million miles** today.', n: 'Exaggeration: no one takes the numbers literally.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Day three of a camping trip', lines: [
            { who: 'Bethan', s: 'Well, this is lovely. Rain for the third day running.' },
            { who: 'Gareth', s: 'Look on the bright side. At least the tent’s only slightly underwater.' },
            { who: 'Bethan', s: 'Slightly. Right. My sleeping bag is basically a swimming pool.' },
            { who: 'Gareth', s: 'And you said camping in Wales in April might not be the best idea.' },
            { who: 'Bethan', s: 'I believe I said it was the worst idea in the history of holidays.' },
            { who: 'Gareth', s: 'Fair enough. Café?' },
            { who: 'Bethan', s: 'Now *that* is a brilliant idea. And I mean it this time.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Irony can be hard to hear in a foreign language. Clues are a flat or exaggerated tone, a pause, a smile, or words that clearly do not fit the situation (*lovely* in heavy rain). Understatement is especially common in British English, so a British speaker who says *it was quite good* may be very impressed.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the speaker really mean?', items: [
            { q: 'Your train is two hours late. Your friend says: “Great. Just what we needed.”', o: ['This is bad news.', 'This is good news.', 'We need a later train.'], why: 'Irony: *great* means the opposite here.' },
            { q: 'After a fourteen-hour hike, someone says: “I’m a little tired.”', o: ['I’m exhausted.', 'I’m not tired at all.', 'I want to walk more.'], why: 'Understatement: *a little* makes a big feeling sound small.' },
            { q: '“The queue for the museum went on for about three kilometres.”', o: ['The queue was very long.', 'The speaker measured the queue.', 'The museum was far away.'], why: 'Exaggeration: the number is not meant literally.' },
            { q: 'A guide tasting the hottest chilli in the market says: “Mm. It has a certain warmth.”', o: ['It is extremely hot.', 'It is not spicy.', 'It is a good temperature.'], why: 'Understatement used for humour.' },
            { q: 'In the dialogue, Gareth says “the tent’s only slightly underwater”. This is:', o: ['understatement', 'exaggeration', 'a direct complaint'], why: '*Only slightly* makes a terrible situation sound small.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Is it understatement or exaggeration?', groups: ['understatement', 'exaggeration'], explain: ['groups'], items: [
            { s: 'The storm caused a bit of damage. (The roof fell in.)', g: 0, why: '*A bit of damage* for a disaster: understatement.' },
            { s: 'I’ve told you a thousand times.', g: 1, why: 'The number is far too big: exaggeration.' },
            { s: 'We had a slight problem with the car. (It caught fire.)', g: 0, why: '*A slight problem* for a fire: understatement.' },
            { s: 'I could eat a horse.', g: 1, why: 'A way to say *I am very hungry*: exaggeration.' },
            { s: 'The concert wasn’t awful. (It was the best night of the trip.)', g: 0, why: '*Wasn’t awful* for something excellent: understatement.' },
            { s: 'My suitcase weighs a ton.', g: 1, why: 'Far too heavy to be true: exaggeration.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with one word from this page.', items: [
            { q: 'Look on the ___ side: at least we have an umbrella.', a: ['bright'], why: '*Look on the bright side*: notice the positive part of a bad situation.' },
            { q: 'It has rained for the third day ___.', a: ['running', 'in a row'], why: '*For the third day running*: three days, one after another.' },
            { q: 'Camping in winter might not be the ___ idea.', a: ['best', 'greatest', 'brightest', 'smartest', 'cleverest'], why: 'Understatement: it is probably a bad idea.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'I see what you did there',
      about: 'Understand puns and playful idioms, and respond to jokes and teasing.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'A **pun** is a joke that uses a word with **two meanings**, or two words that sound the same. The listener first hears one meaning, then suddenly notices the other. English has many words like this, so puns are everywhere: in jokes, on shop signs, in newspaper headlines and in conversation.' },
          { t: 'examples', items: [
            { s: 'I’m reading a book about gravity. It’s impossible to **put down**.', n: '*Put down*: place on a surface, and also stop reading. A good book is *impossible to put down*.' },
            { s: 'I used to be a baker, but I couldn’t make enough **dough**.', n: '*Dough* is the mixture for bread, and also an informal word for money.' },
            { s: 'Why can’t a bicycle stand up on its own? Because it’s **two tired**.', n: '*Two tired* (two tyres) sounds like *too tired*.' },
            { s: 'A boiled egg in the morning is **hard to beat**.', n: '*Hard to beat*: very good, and also difficult to mix with a fork, because the egg is hard.' },
          ] },
          { t: 'tip', art: 'cat', md: 'In many English-speaking places, a good pun often gets a **groan**, a loud, unhappy sound, rather than a laugh. The groan is part of the game: it means *that was terrible, and I enjoyed it*.' },
        ],
        [
          { t: 'text', md: 'When someone tells a joke or teases you, it helps to know the usual responses. Some show that you got the joke; others check whether the person is serious.' },
          { t: 'table', caption: 'Responding to jokes and teasing', explain: ['head', 'col1'], head: ['Phrase', 'What it means'], rows: [
            ['I see what you did there.', 'I noticed your clever wordplay.'],
            ['Good one.', 'That was funny.'],
            ['Very funny.', 'Often sarcastic: that was not funny.'],
            ['Are you pulling my leg?', 'Are you joking? Is this true?'],
            ['Are you winding me up?', 'Are you trying to annoy me for fun? (British)'],
            ['I was only joking. / I’m only kidding.', 'I did not mean it seriously.'],
            ['No offence.', 'I hope what I said does not upset you.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each pun with the word that has two meanings.', pairs: [
            ['I’m reading a book about gravity. It’s impossible to put down.', 'put down: place on a table / stop reading'],
            ['I used to be a baker, but I couldn’t make enough dough.', 'dough: bread mixture / money'],
            ['The cemetery is very popular. People are dying to get in.', 'dying to: very much want to / about to die'],
            ['I stayed up all night wondering where the sun had gone. Then it dawned on me.', 'dawn on: begin to understand / the sun rising'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the most natural response.', items: [
            { q: 'Your friend tells you the hotel has a pool on the roof. You think he might be joking.', o: ['Are you pulling my leg?', 'Good one.', 'No offence.'], why: '*Are you pulling my leg?* asks if something is a joke.' },
            { q: 'A colleague makes a clever pun about your trip to a cheese festival.', o: ['I see what you did there.', 'Are you winding me up?', 'I was only joking.'], why: 'This shows you noticed and enjoyed the wordplay.' },
            { q: 'You tease a friend about her huge suitcase, and she looks hurt.', o: ['I was only joking.', 'Very funny.', 'Good one.'], why: 'You explain that you did not mean it seriously.' },
            { q: 'Your brother hides your passport for a joke, and you are not amused.', o: ['Very funny. Now give it back.', 'I see what you did there.', 'No offence.'], why: 'Said flatly, *Very funny* is sarcastic: it was not funny.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'memory', h: 'Find the pairs: the phrase and its meaning.', pairs: [
            ['pull someone’s leg', 'joke with someone'],
            ['wind someone up', 'annoy someone for fun'],
            ['groan', 'a sound that says the pun was terrible'],
            ['a pun', 'a joke with a double meaning'],
            ['tease', 'laugh at someone in a friendly way'],
          ] },
          { t: 'ex', kind: 'bank', h: 'Complete the sentences with the words from the bank.', extra: ['offence', 'kidding'], items: [
            { q: 'Don’t take it seriously. He’s just ___ you up.', a: 'winding', why: '*Wind someone up*: annoy them for fun.' },
            { q: 'When I told my pun, the whole table let out a ___.', a: 'groan', why: 'A *groan* is the typical reaction to a bad pun.' },
            { q: 'She loves to ___ her little brother about his terrible sense of direction.', a: 'tease', why: '*Tease*: laugh at someone in a friendly way.' },
            { q: 'The sign outside the hairdresser’s was a clever ___: “Curl up and dye”.', a: 'pun', why: '*Dye* (colour hair) sounds like *die*: a pun.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Lost in laughter',
      about: 'Read an article about humour across cultures and what travellers can learn from it.',
      art: 'alien',
      spreads: [
        [
          { t: 'reading', title: 'Lost in laughter', md: 'Ask any language learner what they find hardest, and many will say: jokes. You can follow a conversation perfectly, order a meal and argue about politics, and still have no idea why everyone at the table has just burst out laughing.\n\nPart of the problem is that humour depends so much on shared knowledge. A joke about a famous television advert, a local politician or a football team needs years of background that no textbook can give you. Wordplay adds another layer: a pun only works if you know both meanings of a word, and you know them instantly, without stopping to think.\n\nBut the deeper difficulty is often a matter of style. In some cultures, humour is warm and open, and people laugh loudly at the same joke together. In others, it is dry and understated, delivered with a completely straight face, so that visitors are not sure whether the speaker is joking at all. Rania, who moved from Amman to Manchester to study, remembers her first weeks. “My flatmates were constantly teasing each other. I thought they didn’t like each other,” she says. “It took me a month to realise that in their world, teasing was a sign of friendship.”\n\nPeople who have lived in several countries tend to give the same advice. Do not panic if you miss a joke; simply ask. Most people are happy to explain, and the explanation is often funnier than the joke. And do not try too hard to be funny in a new language too soon. Irony, in particular, can easily be misunderstood when your tone of voice is not quite right.\n\nStill, the first time you make a room full of people laugh in another language is a moment you do not forget. “For me, it was a terrible pun about a bus,” Rania says. “Everybody groaned. It was wonderful.”' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'According to the article, people who speak a language well always understand its jokes.', a: 'f', why: 'You can follow a conversation perfectly and still miss the joke.' },
            { q: 'Many jokes depend on local knowledge that learners do not have.', a: 't', why: 'Humour “depends so much on shared knowledge”.' },
            { q: 'Rania thought at first that her flatmates were unfriendly to each other.', a: 't', why: '“I thought they didn’t like each other.”' },
            { q: 'Rania’s flatmates were all from Manchester.', a: 'ng', why: 'The article does not say where the flatmates came from.' },
            { q: 'The article advises learners to use irony as soon as possible.', a: 'f', why: 'It warns that irony is easily misunderstood if your tone is not right.' },
            { q: 'Rania’s first successful joke made people laugh loudly.', a: 'f', why: 'Everybody *groaned*, which she still found wonderful.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language of the article.', items: [
            { q: '“Everyone at the table has just **burst out laughing**.” This means they:', o: ['suddenly started to laugh loudly', 'tried not to laugh', 'laughed quietly for a long time'], why: '*Burst out laughing*: start laughing suddenly and loudly.' },
            { q: 'Humour that is *dry* and delivered with a **straight face** is:', o: ['said seriously, without smiling', 'told very loudly', 'only about the weather'], why: '*A straight face*: an expression that shows no amusement.' },
            { q: 'In Rania’s flat, teasing was:', o: ['a sign of friendship', 'a way to start an argument', 'something only one person did'], why: '“Teasing was a sign of friendship.”' },
            { q: '“Everybody groaned. It was wonderful.” Why was Rania happy?', o: ['A groan showed that they understood and enjoyed her pun.', 'She wanted people to dislike her joke.', 'She was being ironic about a bad experience.'], why: 'A groan is the classic reaction to a pun: it means they got it.' },
          ] },
          { t: 'ex', kind: 'search', h: 'Find the words from this unit.', words: ['irony', 'pun', 'tease', 'groan', 'sarcasm', 'joke'] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Your hotel room has no hot water. Your friend says, “Perfect.” This is:', o: ['irony', 'understatement', 'a pun'], why: 'Saying the opposite of what you mean is irony.' },
      { q: 'After a terrible storm: “The weather was a bit unsettled.” This is:', o: ['understatement', 'exaggeration', 'sarcasm'], why: 'Making something serious sound small is understatement.' },
      { q: '“I’ve walked about a hundred kilometres today.” This is:', o: ['exaggeration', 'understatement', 'a pun'], why: 'A number that is far too big is exaggeration.' },
      { q: 'Which phrase checks whether someone is joking?', o: ['Are you pulling my leg?', 'I see what you did there.', 'No offence.'], why: '*Pull someone’s leg*: joke with them.' },
      { q: 'A pun is a joke that:', o: ['plays on two meanings of a word', 'is very long', 'is always rude'], why: 'Puns use double meanings or words that sound the same.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
      { q: 'He told the joke with a completely straight ___.', a: ['face'], why: '*A straight face*: no smile.' },
      { q: 'Don’t worry, I was only ___.', a: ['joking', 'kidding', 'teasing'], why: '*I was only joking*: I did not mean it seriously.' },
      { q: 'When she saw his face, she burst out ___.', a: ['laughing'], why: '*Burst out laughing*: start laughing suddenly.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the response with its meaning.', pairs: [
      ['Good one.', 'That was funny.'],
      ['Are you winding me up?', 'Are you trying to annoy me for fun?'],
      ['No offence.', 'I hope that did not upset you.'],
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'In British English, *not bad* can mean *very good*.', a: 't', why: 'It is a common understatement.' },
    ] },
  ],
};
