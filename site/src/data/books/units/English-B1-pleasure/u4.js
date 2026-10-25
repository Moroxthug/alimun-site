// English B1 for travel, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Culture and events',
  goal: 'Find out about museums, concerts and festivals and give your opinion.',
  art: 'dragon',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['events', 'tickets', 'prepositions-of-time', 'opinions', 'ed-ing-adjectives', 'reviews'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Tickets, times and places',
      about: 'Talk about events and buy tickets at the box office.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'When you plan an evening out, you need words for events and tickets. Many theatres, concert halls and museums sell tickets online and at the **box office**.' },
          { t: 'table', caption: 'Events and tickets', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['an exhibition', 'a show of art or objects in a museum or gallery'],
            ['a gig', 'a pop, rock or jazz concert, often in a small place'],
            ['a matinee', 'an afternoon performance of a play or show'],
            ['sold out', 'there are no tickets left'],
            ['the box office', 'the place where you buy tickets at a theatre'],
            ['a concession', 'a cheaper ticket, for example for students'],
            ['the stalls', 'the seats on the ground floor of a theatre'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'At the box office', lines: [
            { who: 'Ravi', s: 'Hello. Are there any tickets left for tonight’s performance?' },
            { who: 'Clerk', s: 'I’m afraid tonight is sold out. But we still have seats for tomorrow’s matinee at half past two.' },
            { who: 'Ravi', s: 'OK, two for the matinee, please. Where are the seats?' },
            { who: 'Clerk', s: 'In the stalls, row F, near the middle. They’re £28 each, or £22 with a student concession.' },
            { who: 'Ravi', s: 'My friend is a student. Does she need to show her card?' },
            { who: 'Clerk', s: 'Yes, please bring it with you. Doors open at two, and the show finishes at about five.' },
            { who: 'Ravi', s: 'Great. Can I pay by card?' },
            { who: 'Clerk', s: 'Of course.' },
          ] },
          { t: 'text', md: 'Use **at** with clock times and many places: *at 7.30*, *at the theatre*. Use **on** with days and dates: *on Friday*, *on 12 June*. Use **in** with parts of the day, months and years: *in the evening*, *in July*.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences with at, on or in.', items: [
            { q: 'The concert starts ___ 8 pm.', a: ['at'], why: '*at* + a clock time.' },
            { q: 'The festival is ___ July every year.', a: ['in'], why: '*in* + a month.' },
            { q: 'We’ve got tickets for the play ___ Saturday.', a: ['on'], why: '*on* + a day.' },
            { q: 'The exhibition is ___ the second floor of the museum.', a: ['on'], why: 'We say *on the first floor*, *on the second floor*.' },
            { q: 'Let’s meet ___ the entrance at seven.', a: ['at'], why: '*at* + a point or place where you meet: *at the entrance*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'There are no tickets left. The concert is ___.', o: ['sold out', 'sold off', 'sold away'], why: '*sold out*: every ticket has been sold.' },
            { q: 'You can buy tickets at the ___ before the show.', o: ['box office', 'post office', 'lost property office'], why: 'The *box office* sells tickets at a theatre or concert hall.' },
            { q: 'Students can get a ___, which is cheaper.', o: ['concession', 'permission', 'reservation'], why: 'A *concession* is a cheaper ticket for some groups of people.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Ravi gets tickets for tonight.', a: 'f', why: 'Tonight is *sold out*, so he buys tickets for the matinee.' },
            { q: 'The matinee starts at half past two.', a: 't', why: '*tomorrow’s matinee at half past two*' },
            { q: 'Ravi’s friend must bring her student card.', a: 't', why: '*Yes, please bring it with you.*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'What time do the doors open?', why: 'A question in the present simple: *do* + subject + verb.' },
            { a: 'Can I pay by card?', why: '*pay by card*, *pay in cash*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'What did you think of it?',
      about: 'Ask for and give opinions about art, music and films.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To ask for an opinion, say *What did you think of…?* or *How was…?* To give one, say *I thought it was…*, *I really enjoyed…*, *It’s worth seeing* or, more softly, *It isn’t really my thing*.\n\nBe careful with adjectives that end in **-ing** and **-ed**. The *-ing* form describes the thing: *a boring film*. The *-ed* form describes how a person feels: *I was bored*.' },
          { t: 'examples', items: [
            { s: 'The ending was really **surprising**.', n: 'The ending made people feel surprise.' },
            { s: 'I was **surprised** by the ending.', n: 'How I felt.' },
            { s: 'The museum was **interesting**, but I was **tired** after two hours.', n: '*interesting* describes the museum; *tired* describes me.' },
            { s: 'Modern dance **isn’t really my thing**.', n: 'A soft way to say that you do not like something.' },
          ] },
        ],
        [
          { t: 'table', caption: '-ing or -ed?', explain: ['head'], quiz: true, head: ['-ing: the thing', '-ed: the person'], rows: [
            ['boring', 'bored'],
            ['exciting', 'excited'],
            ['disappointing', 'disappointed'],
            ['amazing', 'amazed'],
            ['confusing', 'confused'],
          ] },
          { t: 'dialogue', title: 'After the film', lines: [
            { who: 'Lucía', s: 'So, what did you think of it?' },
            { who: 'Sam', s: 'I really enjoyed it. The acting was amazing, especially the old man.' },
            { who: 'Lucía', s: 'Really? I found the story a bit confusing. I didn’t understand the ending at all.' },
            { who: 'Sam', s: 'I was confused too at first, but then it made sense.' },
            { who: 'Lucía', s: 'And it was too long. I was getting bored after two hours.' },
            { who: 'Sam', s: 'Fair enough. But the music was brilliant, don’t you think?' },
            { who: 'Lucía', s: 'Yes, I agree with you there. The music was the best part.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct word.', items: [
            { q: 'The exhibition was really ___. I learned a lot.', o: ['interesting', 'interested', 'interest'], why: 'It describes the exhibition, the thing: *-ing*.' },
            { q: 'I was ___ when the band cancelled the concert.', o: ['disappointed', 'disappointing', 'disappoint'], why: 'It describes how I felt: *-ed*.' },
            { q: 'The story was so ___ that I stopped watching.', o: ['confusing', 'confused', 'confuse'], why: 'It describes the story: *-ing*.' },
            { q: 'We were ___ to see the singer in the café after the show!', o: ['amazed', 'amazing', 'amaze'], why: 'It describes how we felt: *-ed*.' },
            { q: 'What did you think ___ the play?', o: ['of', 'to', 'for'], why: '*What did you think of…?* asks for an opinion.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the opinions.', items: [
            { q: 'I thought the concert was ___ (excite). Everyone was dancing.', a: ['exciting'], why: 'It describes the concert: *exciting*.' },
            { q: 'Opera isn’t really my ___. I prefer jazz.', a: ['thing'], why: '*It isn’t really my thing*: I do not like it very much.' },
            { q: 'The new exhibition is definitely worth ___ (see).', a: ['seeing'], why: '*worth* + *-ing*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the adjective that describes how a person feels.', items: [
            { s: 'The film was long, and I was [bored] by the end.', why: '*bored* is how I felt. *Long* describes the film.' },
            { s: 'We were [excited] because the tickets were so cheap.', why: '*excited* is how we felt. *Cheap* describes the tickets.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'What did you think of the film?', why: '*What did you think of* + the thing.' },
            { a: 'I found the ending very surprising.', why: '*find* + thing + adjective: *I found it surprising*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'What’s on?',
      about: 'Read an events listing and two reviews of a play.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'What’s on this weekend', md: '**Riverside Jazz Night**\nFriday, 8 pm, The Boathouse. Local band the Blue Hours play classic jazz and their own songs. Tickets £12, £8 concessions. Food available.\n\n**Light and Water: photographs by Mira Osei**\nSaturday and Sunday, 10 am to 5 pm, City Gallery. Free entry. Guided tour on Sunday at 11 am, booking required.\n\n**The Missing Key**\nSaturday, 2.30 pm (matinee) and 7.30 pm, Old Mill Theatre. A new comedy about a family who lock themselves out of their house on a winter night. Tickets from £18. The evening show is sold out.' },
          { t: 'ex', kind: 'choice', h: 'Read the listing. Choose the right answer.', items: [
            { q: 'You want to see some culture for free on Sunday morning. Where can you go?', o: ['to the photography exhibition', 'to the jazz night', 'to the evening show of the play'], why: 'The exhibition has *free entry* and is open on Sunday from 10 am.' },
            { q: 'A student wants to go to the jazz night. How much is the ticket?', o: ['£8', '£12', '£18'], why: '*£8 concessions*: students often get a concession.' },
            { q: 'The Missing Key is ___.', o: ['a comedy', 'a photo exhibition', 'a jazz concert'], why: '*A new comedy about a family…*' },
          ] },
        ],
        [
          { t: 'reading', title: 'Two reviews of The Missing Key', md: '**Daniel, Saturday matinee**\nI went to see The Missing Key with my parents, and we laughed from start to finish. The actor who plays the grandfather is brilliant, and the scene where the family tries to climb in through the kitchen window is hilarious. The set is simple but clever. At just under two hours, it never feels too long. Definitely worth seeing.\n\n**Yasmin, Saturday evening**\nI had high hopes for this play, but I was a bit disappointed. The first half is very funny, and the acting is good. After the interval, though, the story becomes slow, and the jokes start to repeat. My friends enjoyed it more than I did. If you like gentle family comedies, you will probably have a good time, but it isn’t really my thing.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the reviews again. True, false or not given?', items: [
            { q: 'Daniel saw the play with his family.', a: 't', why: 'He went *with my parents*.' },
            { q: 'Daniel thinks the play is too long.', a: 'f', why: '*it never feels too long*' },
            { q: 'Yasmin liked the first half more than the second.', a: 't', why: 'The first half is *very funny*; after the interval it *becomes slow*.' },
            { q: 'Yasmin’s friends did not like the play.', a: 'f', why: '*My friends enjoyed it more than I did.*' },
            { q: 'Daniel has seen the play twice.', a: 'ng', why: 'Daniel does not say how many times he has seen it.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match each word from the reviews with its meaning.', pairs: [
            ['hilarious', 'very, very funny'],
            ['the interval', 'a short break in the middle of a play'],
            ['clever', 'full of good ideas'],
            ['gentle', 'calm and kind, not strong'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'The film was so ___ that I fell asleep.', o: ['boring', 'bored', 'bore'], why: 'It describes the film: *-ing*.' },
      { q: 'There are no tickets left. It’s ___.', o: ['sold out', 'sold over', 'sold away'], why: '*sold out*: no tickets left.' },
      { q: 'A ___ is an afternoon performance.', o: ['matinee', 'gig', 'interval'], why: 'A *matinee* is in the afternoon.' },
      { q: 'What did you think ___ the exhibition?', o: ['of', 'for', 'to'], why: '*What did you think of…?*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences with one word.', items: [
      { q: 'The show starts ___ half past seven.', a: ['at'], why: '*at* + a clock time.' },
      { q: 'The museum is closed ___ Mondays.', a: ['on'], why: '*on* + a day.' },
      { q: 'I was really ___ (disappoint) with the ending.', a: ['disappointed'], why: 'How I felt: *-ed*.' },
      { q: 'Jazz isn’t really my ___.', a: ['thing'], why: '*It isn’t really my thing.*' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'What time do the doors open?', why: '*do* + subject + verb in a question.' },
      { a: 'Is the exhibition worth seeing?', why: '*worth* + *-ing*.' },
    ] },
    { t: 'ex', kind: 'spot', h: 'Tap the adjective that describes how a person feels.', items: [
      { s: 'The guide was [amazed] that we knew the names of the paintings.', why: '*amazed* is how the guide felt.' },
      { s: 'I felt [confused] because the story kept jumping around.', why: '*confused* is how I felt.' },
    ] },
  ],
};
