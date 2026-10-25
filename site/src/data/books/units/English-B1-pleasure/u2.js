// English B1 for travel, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Meeting people',
  goal: 'Start conversations with locals and other travellers.',
  art: 'parrot',
  tags: { skills: ['speaking', 'vocabulary', 'reading'], topics: ['small-talk', 'short-questions', 'countries', 'describing-places'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Is this seat free?',
      about: 'Start a conversation and keep it going with short questions.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'A conversation with a stranger is easier to start with a simple question about the situation: *Is this seat free?*, *Have you been here long?*, *Where are you heading?*\n\nTo keep it going, show interest with a **short question**. It repeats the auxiliary verb of the other person’s sentence: *I’ve just come from Lisbon.* *Oh, **have you**?*' },
          { t: 'table', caption: 'Short questions that show interest', explain: ['head'], quiz: true, head: ['You hear', 'You answer'], rows: [
            ['I’m from Canada.', 'Are you? Which part?'],
            ['I’ve been here for a week.', 'Have you? Do you like it?'],
            ['We went hiking yesterday.', 'Did you? Where did you go?'],
            ['I can’t swim.', 'Can’t you? Really?'],
            ['She lives in Rome.', 'Does she? Lucky her!'],
          ] },
          { t: 'tip', art: 'owl', md: 'The short question uses the same tense as the sentence. If there is no auxiliary verb, use *do*, *does* or *did*: *I love this town.* *Do you?*' },
        ],
        [
          { t: 'dialogue', title: 'On the ferry', lines: [
            { who: 'Kofi', s: 'Excuse me, is anyone sitting here?' },
            { who: 'Ines', s: 'No, go ahead.' },
            { who: 'Kofi', s: 'Thanks. Are you going to the island for the day?' },
            { who: 'Ines', s: 'No, for the whole week. I’ve rented a little cottage there.' },
            { who: 'Kofi', s: 'Have you? That sounds lovely. Have you been before?' },
            { who: 'Ines', s: 'Yes, I came last summer with my sister. What about you?' },
            { who: 'Kofi', s: 'It’s my first time. I’m doing a walking holiday along the coast.' },
            { who: 'Ines', s: 'Are you? Then you have to see the cliffs on the north side.' },
            { who: 'Kofi', s: 'I will. By the way, I’m Kofi.' },
            { who: 'Ines', s: 'Nice to meet you. I’m Ines.' },
          ] },
          { t: 'text', md: 'Notice how they keep the conversation going. They answer, then ask something back: *What about you?* And they use short questions: *Have you?*, *Are you?*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right short question.', items: [
            { q: '“I’ve never been to Scotland.” “___ Why not?”', o: ['Haven’t you?', 'Didn’t you?', 'Aren’t you?'], why: '*I’ve never been* is present perfect, so the short question uses *have*: *Haven’t you?*' },
            { q: '“We’re staying at the hostel too.” “___ Which room are you in?”', o: ['Are you?', 'Do you?', 'Were you?'], why: '*We’re* = *we are*, present: *Are you?*' },
            { q: '“My brother works on cruise ships.” “___ That must be interesting.”', o: ['Does he?', 'Is he?', 'Did he?'], why: '*works* is present simple with no auxiliary, so use *does*: *Does he?*' },
            { q: '“I missed my flight yesterday.” “___ What happened?”', o: ['Did you?', 'Have you?', 'Do you?'], why: '*missed* is past simple, so use *did*: *Did you?*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the short questions.', items: [
            { q: '“I’m a nurse.” “Oh, ___ you? Where do you work?”', a: ['are'], why: '*I’m* = *I am*: *Are you?*' },
            { q: '“We had a great time in the mountains.” “___ you? I’d love to go.”', a: ['Did'], why: '*had* is past simple: *Did you?*' },
            { q: '“Tom has been to Japan twice.” “___ he? When?”', a: ['Has'], why: '*has been* is present perfect: *Has he?*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each question with the best answer.', pairs: [
            ['Is this seat free?', 'Yes, go ahead.'],
            ['Where are you heading?', 'To the coast, for a few days.'],
            ['Have you been here long?', 'Only since Monday.'],
            ['Where are you from?', 'Brazil, near São Paulo.'],
            ['Is this your first time here?', 'No, I came two years ago.'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Is anyone sitting here?', why: 'A polite way to ask if a seat is free.' },
            { a: 'What brings you to Bristol?', why: 'A friendly question about why someone is visiting.' },
            { a: 'Have you been here long?', why: 'Present perfect: *Have you been…?*' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'What’s it like where you live?',
      about: 'Talk about your country and ask about other people’s.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Other travellers often ask about your country. These phrases help you describe it in a general way: *It’s famous for…*, *It’s known for…*, *People tend to…*, *It depends on the region.*\n\nTo ask about someone else’s country, use *What’s it like?* or *Is it true that…?*' },
          { t: 'examples', items: [
            { s: 'My region **is famous for** its wine and its old castles.', n: '*famous for* + a noun.' },
            { s: 'People **tend to** eat dinner quite late, around nine or ten.', n: '*tend to* + verb: something that is usually true.' },
            { s: '**What’s** the weather **like** in winter?', n: '*What’s … like?* asks for a description. It does not mean *Do you like…?*' },
            { s: '**Is it true that** everyone cycles to work?', n: 'A polite way to check something you have heard.' },
          ] },
          { t: 'tip', art: 'owl', md: '*It depends on the region* and *Not everyone, but many people do* are useful answers when a question is too general. They help you avoid stereotypes.' },
        ],
        [
          { t: 'dialogue', title: 'In the hostel kitchen', lines: [
            { who: 'Ji-woo', s: 'So where are you from?' },
            { who: 'Mateo', s: 'Chile. Have you ever been to South America?' },
            { who: 'Ji-woo', s: 'No, never. What’s Chile like?' },
            { who: 'Mateo', s: 'It’s very long and narrow, so the weather depends on the region. The north is a desert, and the south is cold and wet.' },
            { who: 'Ji-woo', s: 'Wow. Is it true that people eat dinner really late?' },
            { who: 'Mateo', s: 'Quite late, yes, but it depends on the family. What about Korea? What’s it famous for?' },
            { who: 'Ji-woo', s: 'Food, music and very fast internet! In the big cities, people tend to work long hours.' },
            { who: 'Mateo', s: 'Is it easy to travel around?' },
            { who: 'Ji-woo', s: 'Very easy. The trains are fast, and the buses go almost everywhere.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'The weather is the same all over Chile.', a: 'f', why: 'Mateo says *the weather depends on the region*.' },
            { q: 'Ji-woo has never been to South America.', a: 't', why: 'She answers *No, never.*' },
            { q: 'According to Ji-woo, it is difficult to travel around Korea.', a: 'f', why: 'She says it is *very easy*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct word.', items: [
            { q: 'Italy is famous ___ its food.', o: ['for', 'of', 'with'], why: '*famous for* + a noun.' },
            { q: 'People here ___ to start work early.', o: ['tend', 'tends', 'tending'], why: '*People* is plural: *people tend to*.' },
            { q: '“What’s your city ___?” “It’s quite small, but very green.”', o: ['like', 'about', 'likes'], why: '*What’s … like?* asks for a description.' },
            { q: 'It ___ on the region. The north is much colder.', o: ['depends', 'depend', 'is depending'], why: '*It depends on…* is always present simple here.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences with one word.', items: [
            { q: 'My town is known ___ its beautiful beaches.', a: ['for'], why: '*known for* + a noun, like *famous for*.' },
            { q: 'Is it ___ that people here drink tea with milk?', a: ['true'], why: '*Is it true that…?* checks something you have heard.' },
            { q: '___ is the food like in your country?', a: ['What'], why: '*What is … like?* asks for a description.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the words that say something is usually true.', items: [
            { s: 'In my country, people [tend to] eat lunch at about one o’clock.', why: '*tend to* + verb: a general habit.' },
            { s: 'In the north, people [usually] drink coffee, not tea.', why: '*usually*: what happens most of the time.' },
          ] },
          { t: 'tip', art: 'owl', md: 'When you talk about your country, *many people* or *most people* sounds more natural than *everyone*. Not everyone in a country does the same thing.' },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Never lonely on the road',
      about: 'Read a blog post about meeting people while travelling.',
      art: 'teacup',
      spreads: [
        [
          { t: 'reading', title: 'Travelling alone, but never lonely', md: 'When I started travelling on my own, I was worried that I would feel lonely. Three years later, I have friends in more countries than I can count. Here is what works for me.\n\nFirst, I stay in places with a shared kitchen. Cooking is the easiest way to start a conversation. Someone always needs salt or asks what you are making, and suddenly you are having dinner with people from four different countries.\n\nI also join free walking tours on my first day in a new city. You walk with the same group for two hours, so it is natural to chat. Last spring in Porto, I met two Australian nurses on a tour, and we ended up travelling together for a week.\n\nIn the evenings, I often go to language exchange events in cafés. Locals come to practise their English, and I practise their language. My Spanish is terrible, but people are usually patient and kind.\n\nMy last tip is simple: put your phone away. It is hard to meet anyone if you are looking at a screen. Smile, say hello and ask a question. Most people are happy to talk.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the blog post again. True, false or not given?', items: [
            { q: 'At first, the writer was afraid of being lonely.', a: 't', why: '*I was worried that I would feel lonely.*' },
            { q: 'The writer thinks a shared kitchen helps you meet people.', a: 't', why: '*Cooking is the easiest way to start a conversation.*' },
            { q: 'The walking tour in Porto took a whole day.', a: 'f', why: 'You walk with the group *for two hours*.' },
            { q: 'The writer speaks Spanish very well.', a: 'f', why: 'The writer says *My Spanish is terrible*.' },
            { q: 'The writer met the two nurses again the next year.', a: 'ng', why: 'The post does not say if they met again.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each word from the post with its meaning.', pairs: [
            ['lonely', 'sad because you are alone'],
            ['patient', 'calm when something takes a long time'],
            ['chat', 'talk in a friendly, informal way'],
            ['shared', 'used by several people'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right words.', items: [
            { q: 'We met on a tour, and we ___ travelling together for a week.', o: ['ended up', 'ended to', 'finished to'], why: '*end up* + *-ing*: what happened in the end, often without a plan.' },
            { q: 'If you are always looking at a screen, it is ___ to meet anyone.', o: ['hard', 'easy', 'natural'], why: 'The writer says *It is hard to meet anyone if you are looking at a screen.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: '“I’ve just arrived from Peru.” “___ How was the flight?”', o: ['Have you?', 'Did you?', 'Are you?'], why: '*I’ve arrived* is present perfect: *Have you?*' },
      { q: '“My sister lives in Oslo.” “___ What does she do there?”', o: ['Does she?', 'Is she?', 'Has she?'], why: '*lives* is present simple: *Does she?*' },
      { q: 'The town is famous ___ its cheese.', o: ['for', 'of', 'by'], why: '*famous for* + a noun.' },
      { q: '“What’s the food ___?” “Spicy, but delicious.”', o: ['like', 'about', 'as'], why: '*What’s … like?* asks for a description.' },
      { q: 'People here ___ to eat lunch at one.', o: ['tend', 'tends', 'are tend'], why: '*People tend to* + verb.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences with one word.', items: [
      { q: '“We’re from Ghana.” “Oh, ___ you? Which city?”', a: ['are'], why: '*We’re* = *we are*: *Are you?*' },
      { q: '“I went to the jazz festival.” “___ you? Was it good?”', a: ['Did'], why: '*went* is past simple: *Did you?*' },
      { q: 'It ___ on the region. The south is much hotter.', a: ['depends'], why: '*It depends on…*' },
      { q: 'Is it ___ that people here never take the bus?', a: ['true'], why: '*Is it true that…?*' },
      { q: '“Is this seat free?” “Yes, go ___.”', a: ['ahead'], why: '*Go ahead* means: yes, please do.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Have you been here long?', why: 'Present perfect question: *Have you been…?*' },
      { a: 'What is your country famous for?', why: '*famous for*: the preposition goes at the end of the question.' },
    ] },
  ],
};
