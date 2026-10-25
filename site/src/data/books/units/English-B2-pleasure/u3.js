// English B2 for travel, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Arts and media',
  goal: 'Discuss books, films, art and music in detail.',
  art: 'cat',
  tags: { skills: ['speaking', 'vocabulary', 'grammar', 'reading'], topics: ['films', 'books', 'evaluative-adjectives', 'adverb-adjective-collocations', 'recommending', 'cleft-sentences', 'reviews'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Beautifully shot, a bit predictable',
      about: 'Describe a film, a book or an exhibition and say what you think of it.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To describe a film or a book, first say **what it is**: where it is set, what it is based on, who is in it. Then **evaluate** it: say what works and what does not. These phrases are common in both conversation and reviews.' },
          { t: 'table', caption: 'Describing a film or a book', explain: ['head'], head: ['Phrase', 'Example'], rows: [
            ['It’s set in …', 'It’s set in a small mountain village in the 1970s.'],
            ['It’s based on …', 'It’s based on a true story.'],
            ['It stars …', 'It stars two actors I’d never heard of.'],
            ['It’s about … / It tells the story of …', 'It tells the story of a family who open a hotel.'],
            ['It’s directed by … / It’s written by …', 'It’s directed by a young Brazilian filmmaker.'],
          ] },
        ],
        [
          { t: 'table', caption: 'Words for films and books', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['the plot', 'what happens in the story'],
            ['the cast', 'all the actors in a film or play'],
            ['a performance', 'the way an actor plays a role'],
            ['the soundtrack', 'the music of a film'],
            ['a twist', 'a sudden change in the story that you do not expect'],
            ['the pace', 'how fast or slowly the story moves'],
          ] },
          { t: 'tip', art: 'owl', md: 'We also use *a twist* outside the cinema: *The story has an unexpected twist at the end.* *Pace* can be *fast*, *slow* or *uneven*: *The pace is a bit slow in the middle.*' },
        ],
        [
          { t: 'text', md: 'Strong reviews do not stop at *good* or *bad*. They use more precise adjectives, and often put an **adverb** in front to make them stronger or softer: *beautifully shot*, *brilliantly acted*, *painfully slow*, *slightly predictable*.' },
          { t: 'examples', items: [
            { s: 'It’s a **gripping** thriller: I couldn’t look away.', n: '*Gripping*: so exciting that you cannot stop watching or reading.' },
            { s: 'The film is **beautifully shot**, especially the night scenes.', n: '*Shot* here means filmed. *Beautifully shot* is high praise for the camera work.' },
            { s: 'The ending is **far-fetched**: nobody would behave like that.', n: '*Far-fetched*: difficult to believe.' },
            { s: 'Everyone loves it, but I think it’s **overrated**.', n: '*Overrated*: people think it is better than it really is.' },
            { s: 'It’s a **thought-provoking** exhibition about memory.', n: '*Thought-provoking*: it makes you think seriously about something.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the adjectives with their meanings.', pairs: [
            ['gripping', 'so exciting that you cannot stop'],
            ['far-fetched', 'difficult to believe'],
            ['overrated', 'not as good as people say'],
            ['predictable', 'you know what will happen next'],
            ['moving', 'it makes you feel strong emotion'],
            ['thought-provoking', 'it makes you think seriously'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best word.', items: [
            { q: 'The story ___ in Cairo just after the war.', o: ['is set', 'sets', 'is based'], why: '*Be set in* + place or time.' },
            { q: 'The film is ___ on a novel by a Canadian writer.', o: ['based', 'set', 'starred'], why: '*Be based on* + the original story.' },
            { q: 'The acting is good, but the ___ is uneven: the middle drags.', o: ['pace', 'cast', 'twist'], why: '*Pace* is how fast the story moves.' },
            { q: 'I didn’t see the ___ coming: the quiet neighbour was the thief.', o: ['twist', 'plot', 'soundtrack'], why: 'A *twist* is a sudden, unexpected change in the story.' },
            { q: 'Both main roles are ___ acted.', o: ['brilliantly', 'brilliant', 'brilliance'], why: 'An adverb goes before a past participle: *brilliantly acted*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'What I love about it is…',
      about: 'Recommend books and films, and argue for your taste.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To recommend something, use *I’d recommend* + *-ing* or *I’d recommend (that) you* + base form. To say who it is for, use *to anyone who…*. To say that something is not for you without criticising it, use *it’s not really my thing*.' },
          { t: 'examples', items: [
            { s: 'I’d **recommend seeing** it at the cinema if you can.', n: '*Recommend* + *-ing*.' },
            { s: 'I’d **recommend that you read** the book first.', n: '*Recommend that you* + base form. *That* can be left out.' },
            { s: 'I’d recommend it **to anyone who** likes crime novels.', n: '*Recommend something to someone*.' },
            { s: '**If you liked** her first album, **you’ll love** this one.', n: 'A strong recommendation based on someone’s taste.' },
            { s: 'I can see why people like it, but it’s **not really my thing**.', n: 'A polite way to say that you do not enjoy something.' },
          ] },
          { t: 'tip', art: 'owl', md: 'A very common mistake: *I recommend you to see it*. Say *I recommend seeing it* or *I recommend (that) you see it*.' },
        ],
        [
          { t: 'text', md: 'To **emphasise** what you like, start with *What* + subject + verb + *is* / *was*. This is called a **cleft sentence**. It moves the important information to the end, where we put the stress.' },
          { t: 'examples', items: [
            { s: '**What I loved was** the soundtrack.', n: 'Compare *I loved the soundtrack.* The cleft sentence puts the focus on *the soundtrack*.' },
            { s: '**What makes it special is** the way it’s filmed.', n: '*What* + verb + *is* + the important part.' },
            { s: '**The thing that** surprised me most **was** the ending.', n: '*The thing that…* works in the same way.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Choosing a film', lines: [
            { who: 'Sofia', s: 'Have you seen the new Ines Varga film? I’d really recommend it.' },
            { who: 'Ravi', s: 'I’ve heard it’s very slow. Period dramas aren’t really my thing.' },
            { who: 'Sofia', s: 'It is slow at the start, I admit. But what makes it special is the acting.' },
            { who: 'Ravi', s: 'Everyone says that about her films. I think she’s a bit overrated.' },
            { who: 'Sofia', s: 'I can see why you’d say that. But if you liked her last one, you’ll love this.' },
            { who: 'Ravi', s: 'Fine, you’ve convinced me. But if I fall asleep, you’re buying the popcorn.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Sofia admits that the start of the film is slow.', a: 't', why: '“It is slow at the start, I admit.”' },
            { q: 'Ravi is a big fan of period dramas.', a: 'f', why: 'He says they are not really his thing.' },
            { q: 'In the end, Ravi agrees to see the film.', a: 't', why: '“Fine, you’ve convinced me.”' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct option.', items: [
            { q: 'I’d recommend ___ the book before you see the film.', o: ['reading', 'to read', 'you to read'], why: '*Recommend* + *-ing*.' },
            { q: 'I’d recommend it to ___ who enjoys a good mystery.', o: ['anyone', 'anything', 'whoever'], why: '*To anyone who…*: to any person who enjoys it.' },
            { q: 'What I liked most ___ the costumes.', o: ['was', 'it was', 'were'], why: '*What I liked most* is singular: *was*.' },
            { q: 'Your friend loves jazz, but you don’t. You say:', o: ['It’s not really my thing.', 'Jazz is terrible.', 'You have bad taste.'], why: '*Not really my thing* talks about you, not about the music.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
            { q: 'If you liked the first series, you’ll ___ the second one.', a: ['love', 'like', 'enjoy'], why: '*If you liked…, you’ll love…*: a strong recommendation.' },
            { q: '___ makes the book special is its humour.', a: ['What'], why: 'A cleft sentence: *What* + verb + *is*.' },
            { q: 'The ___ that surprised me most was the ending.', a: ['thing'], why: '*The thing that…* + *was*.' },
            { q: 'I can see ___ people like it, but I found it boring.', a: ['why'], why: '*I can see why…* accepts other opinions before you give yours.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'What I loved was the soundtrack.', why: 'A cleft sentence: *What I loved* + *was* + the focus.' },
            { a: 'It’s not my kind of film.', why: '*Not my kind of* + noun: a polite way to say you do not enjoy something.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Two reviews',
      about: 'Read a film review and a book review and notice how they evaluate.',
      art: 'ghost',
      spreads: [
        [
          { t: 'reading', title: 'Film review: Salt and Silver', md: 'Set in a fishing village on the west coast of Ireland in the 1950s, *Salt and Silver* follows Nora, a young widow who refuses to sell her late husband’s boat. Directed by Ines Varga, it is a quiet film, and its pace will not suit everyone. The first half hour is painfully slow, and very little happens apart from the weather.\n\nStick with it, though, because what follows is extraordinary. Varga, who also wrote the screenplay, builds the tension so gradually that you hardly notice it, until a storm scene in the middle of the film that left me holding my breath. The film is beautifully shot, almost entirely in grey and silver light, and the soundtrack, mostly a single violin, is haunting.\n\nAt the centre of it all is a brilliant performance by Clara Doyle as Nora. She barely raises her voice, yet every look tells you what she is feeling. If the ending is slightly predictable, it is also deeply moving.\n\n*Salt and Silver* is not an easy watch, but it is a rewarding one. If you enjoy slow, character-driven dramas, I would strongly recommend seeing it on the big screen, where its wide, empty landscapes really come to life.' },
        ],
        [
          { t: 'reading', title: 'Book review: The Year of Small Rooms', md: 'Kofi Mensah-Hale’s second novel tells the story of Ruth, a retired teacher who decides, at seventy, to spend a year living in a different rented room in a different city every month. It sounds like the plot of a light comedy, and in places it is very funny. But it is also a thoughtful book about loneliness, memory and the strange freedom of old age.\n\nThe writing is clear and elegant, and each city feels completely real: a damp attic in Glasgow, a noisy flat above a bakery in Naples. What I liked most was the way Ruth changes slowly through the people she meets, from a teenage neighbour to a landlord who will not stop talking.\n\nThe book has its weaknesses. Some of the minor characters are rather thin, and a late twist involving Ruth’s son feels far-fetched. The story also loses pace in the middle, when Ruth spends two long chapters in a city she does not like.\n\nEven so, it is a warm, wise and often surprising novel, and I finished it with a smile. I would recommend it to anyone who has ever wondered what it would be like to pack a bag and start again.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The film reviewer found the first part of *Salt and Silver* very exciting.', a: 'f', why: '“The first half hour is painfully slow.”' },
            { q: 'Ines Varga wrote the screenplay as well as directing the film.', a: 't', why: '“Varga, who also wrote the screenplay…”' },
            { q: 'Clara Doyle has won prizes for her performance.', a: 'ng', why: 'The review praises her performance but does not mention prizes.' },
            { q: '*The Year of Small Rooms* is Mensah-Hale’s first novel.', a: 'f', why: 'It is his second novel.' },
            { q: 'The book reviewer thinks every character is well developed.', a: 'f', why: '“Some of the minor characters are rather thin.”' },
            { q: 'Both reviewers recommend the work they review.', a: 't', why: 'Each review ends with a recommendation.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language in the reviews.', items: [
            { q: '“Stick with it, though.” The reviewer means:', o: ['keep watching even if the start is slow', 'stay in your seat after the film', 'see it with a friend'], why: '*Stick with something*: continue even when it is difficult.' },
            { q: '“Not an easy watch, but a rewarding one.” This means the film is:', o: ['demanding, but worth the effort', 'easy and enjoyable', 'too difficult to finish'], why: '*Rewarding*: it gives you something valuable back.' },
            { q: '“Some of the minor characters are rather thin.” *Thin* here means:', o: ['not developed in enough detail', 'physically very slim', 'not important to the story'], why: 'A *thin* character has little depth or detail.' },
            { q: 'Which sentence is a cleft sentence?', o: ['What I liked most was the way Ruth changes.', 'The writing is clear and elegant.', 'The book has its weaknesses.'], why: '*What I liked most was…* puts the focus at the end.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the adverb that makes the adjective stronger or softer.', items: [
            { s: 'The first half hour is [painfully] slow.', why: '*Painfully* makes *slow* much stronger.' },
            { s: 'The ending is [slightly] predictable.', why: '*Slightly* softens the criticism *predictable*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'The film is ___ on a true story.', o: ['based', 'set', 'made'], why: '*Be based on* + the original story.' },
      { q: 'I couldn’t put the book down: it was ___.', o: ['gripping', 'overrated', 'predictable'], why: '*Gripping*: so exciting you cannot stop.' },
      { q: 'I’d recommend ___ the museum early in the morning.', o: ['visiting', 'to visit', 'you to visit'], why: '*Recommend* + *-ing*.' },
      { q: '___ I enjoyed most was the music.', o: ['What', 'That', 'Which'], why: 'A cleft sentence starts with *What*.' },
      { q: 'The story is hard to believe: it’s ___.', o: ['far-fetched', 'thought-provoking', 'moving'], why: '*Far-fetched*: difficult to believe.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
      { q: 'The film is ___ in Lagos in the near future.', a: ['set'], why: '*Be set in* + place or time.' },
      { q: 'All the actors are brilliant: it’s a great ___.', a: ['cast'], why: 'The *cast* is all the actors in a film.' },
      { q: 'I’d recommend it to ___ who likes history.', a: ['anyone', 'anybody', 'everyone', 'everybody'], why: '*Recommend it to anyone who…*' },
      { q: 'Opera isn’t really my ___.', a: ['thing'], why: '*Not really my thing*: a polite way to say you do not enjoy it.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'What makes it special is the acting.', why: 'A cleft sentence: *What* + verb + *is*.' },
      { a: 'The film is beautifully shot.', why: 'Adverb + past participle: *beautifully shot*.' },
    ] },
    { t: 'ex', kind: 'spot', h: 'Tap the wrong word.', items: [
      { s: 'The film is [beautiful] shot, especially the night scenes.', why: 'Before a past participle we need an adverb: *beautifully shot*.' },
    ] },
  ],
};
