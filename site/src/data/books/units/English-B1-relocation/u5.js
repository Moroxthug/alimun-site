// English B1 for moving abroad, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Neighbours and community',
  goal: 'Get on with neighbours and join local life.',
  art: 'cat',
  tags: { skills: ['speaking', 'reading', 'vocabulary', 'grammar'], topics: ['neighbours', 'polite-requests', 'gerund-infinitive', 'community', 'volunteering'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Living close to others',
      about: 'Talk about noise, bins and parking, and make polite requests.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'In flats and terraced houses, you live very close to your neighbours. The most common problems are noise, bins and parking. Many councils collect rubbish and recycling on a set day, every week or every two weeks: this is **bin day**.' },
          { t: 'table', caption: 'Words for living with neighbours', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['bin day', 'the day the council collects rubbish'],
            ['recycling', 'paper, glass, cans and plastic that can be used again'],
            ['general waste', 'rubbish that cannot be recycled'],
            ['parking permit', 'a document that lets you park in your street'],
            ['driveway', 'the private space in front of a house for a car'],
          ] },
          { t: 'tip', art: 'owl', md: 'In many streets you need a *residents’ parking permit* from the council. Never park across a neighbour’s *driveway*: it annoys people, and you can get a fine.' },
        ],
        [
          { t: 'text', md: 'To ask a neighbour to change something, be friendly and soft. Say what the problem is first, then ask. To say yes to *Would you mind…?*, answer *No, not at all* or *Of course not*.' },
          { t: 'examples', items: [
            { s: '**Would you mind turning** the music down after eleven?', n: '*Would you mind* + *-ing*.' },
            { s: '**I was wondering if you could** move your car a little.', n: 'Very soft and polite.' },
            { s: '**Could you possibly** bring your bins in after collection?', n: '*possibly* makes the request softer.' },
            { s: '**Sorry to bother you**, but your dog has been barking all morning.', n: 'A friendly way to start.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'At the door', lines: [
            { who: 'Hannah', s: 'Hi, sorry to bother you. I’m Hannah, from the flat upstairs.' },
            { who: 'Ravi', s: 'Oh, hi! Nice to meet you. Is everything OK?' },
            { who: 'Hannah', s: 'Yes, mostly. It’s just that I start work at six, and I can hear your TV quite late at night.' },
            { who: 'Ravi', s: 'Oh no, I’m really sorry. I didn’t know it was so loud.' },
            { who: 'Hannah', s: 'Would you mind turning it down a bit after eleven?' },
            { who: 'Ravi', s: 'Not at all. And if it happens again, just knock on my door.' },
            { who: 'Hannah', s: 'Thanks, that’s really kind. By the way, do you know when bin day is?' },
            { who: 'Ravi', s: 'It’s Thursday. Recycling one week, general waste the next.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Hannah lives below Ravi.', a: 'f', why: 'She lives in *the flat upstairs*: above him.' },
            { q: 'Hannah can hear Ravi’s TV late at night.', a: 't', why: '*I can hear your TV quite late at night.*' },
            { q: 'Ravi gets angry.', a: 'f', why: 'He says *I’m really sorry*.' },
            { q: 'Ravi agrees to turn the TV down.', a: 't', why: '*Not at all* means yes, he does not mind.' },
            { q: 'General waste is collected every Thursday.', a: 'f', why: 'Recycling one week, general waste the next: each one every two weeks.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Would you mind ___ your car a little?', o: ['moving', 'to move', 'move'], why: '*Would you mind* + *-ing*.' },
            { q: 'A neighbour asks: “Would you mind closing the gate?” You are happy to do it. You say: ___', o: ['Not at all.', 'Yes, I would.', 'Yes, I mind.'], why: '*Not at all* means you do not mind, so yes, you will do it.' },
            { q: '', o: ['Sorry to bother you, but could you possibly move your car?', 'Move your car, it’s in my way.', 'Sorry to bother you, but could you possibly to move your car?'], why: 'A friendly start, then *could you possibly* + verb.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the problem and the request.', pairs: [
            ['The music is too loud.', 'Would you mind turning it down?'],
            ['A car is blocking my driveway.', 'Could you possibly move it?'],
            ['Your bins are still on the pavement.', 'Could you bring them in?'],
            ['Your dog barks all day.', 'Is there anything you can do about the barking?'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'I was wondering if you could help me.', why: '*I was wondering if you could* + verb.' },
            { a: 'Would you mind closing the gate?', why: '*Would you mind* + *-ing*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Joining local life',
      about: 'Find out about libraries, community centres and volunteering.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'Local places are a good way to meet people. In the UK, joining a public **library** is usually free, and many libraries offer more than books: free computers, conversation groups and activities for children. **Community centres** have classes and clubs, often at low prices. **Volunteering** means working without pay to help others, for example at a food bank or in a charity shop.' },
          { t: 'examples', items: [
            { s: 'I’m **interested in joining** the walking group.', n: 'After a preposition (*in*, *of*, *about*), use the *-ing* form.' },
            { s: 'I’d **like to volunteer** at the food bank.', n: '*would like* + *to* + verb.' },
            { s: 'I **enjoy meeting** new people.', n: '*enjoy* + *-ing*.' },
            { s: 'I **want to improve** my English.', n: '*want* + *to* + verb.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'At the library', lines: [
            { who: 'Librarian', s: 'Hello, can I help you?' },
            { who: 'Tomás', s: 'Hi. I’d like to join the library. Is it free?' },
            { who: 'Librarian', s: 'Yes, it’s free. Have you got something with your address on it?' },
            { who: 'Tomás', s: 'I’ve got a letter from my bank. Is that OK?' },
            { who: 'Librarian', s: 'That’s perfect. You can borrow up to twelve books at a time, for three weeks.' },
            { who: 'Tomás', s: 'Great. I’m also interested in meeting people. Are there any groups here?' },
            { who: 'Librarian', s: 'There’s a conversation group on Tuesday evenings and a book club once a month. We also need volunteers for our homework club.' },
            { who: 'Tomás', s: 'The conversation group sounds good. Do I need to book?' },
            { who: 'Librarian', s: 'No, just come along.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Tomás has to pay to join the library.', a: 'f', why: '*Yes, it’s free.*' },
            { q: 'He can keep the books for three weeks.', a: 't', why: '*Up to twelve books at a time, for three weeks.*' },
            { q: 'The book club meets every Tuesday.', a: 'f', why: 'The conversation group is on Tuesdays; the book club meets *once a month*.' },
            { q: 'He must book a place in the conversation group.', a: 'f', why: '*No, just come along.*' },
            { q: 'Tomás likes the idea of the conversation group.', a: 't', why: '*The conversation group sounds good.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'I’m interested ___ joining a running club.', a: ['in'], why: '*interested in* + *-ing*.' },
            { q: 'I enjoy ___ (help) other people.', a: ['helping'], why: '*enjoy* + *-ing*.' },
            { q: 'I’d like ___ (volunteer) at the community centre.', a: ['to volunteer'], why: '*would like* + *to* + verb.' },
            { q: 'Are you thinking of ___ (join) the choir?', a: ['joining'], why: 'After the preposition *of*: *-ing*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the place or person and the description.', pairs: [
            ['food bank', 'gives food to people who need it'],
            ['charity shop', 'sells used things to raise money'],
            ['community centre', 'a building for local classes and clubs'],
            ['library', 'where you borrow books'],
            ['volunteer', 'someone who works without pay'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A community newsletter',
      about: 'Read a local newsletter and find the events and news that matter to you.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Hollins Park News', md: '**Welcome to new neighbours**\n\nA warm welcome to everyone who has moved to Hollins Park this autumn. If you are new, come to our welcome coffee morning at the community centre on Saturday 7 November, from 10 am to 12 noon. It’s a relaxed way to meet people, and there will be free tea and cake.\n\n**Bin collections**\n\nFrom 2 November, recycling will be collected on Wednesdays instead of Tuesdays. General waste stays the same: every other Friday. Please put your bins out the evening before and bring them in again after collection, so that the pavements stay clear.\n\n**Park clean-up**\n\nOur next park clean-up is on Sunday 15 November at 11 am. We will provide gloves and bags. Children are welcome if an adult comes with them.\n\n**Help wanted**\n\nThe Tuesday lunch club for older residents needs two more volunteers to serve food and chat with guests. No experience is needed, just a friendly smile. If you are interested, please speak to Grace at the community centre.\n\n**A note on parking**\n\nSome residents have told us that cars are parking across driveways on Mill Road. Please check before you park, and remember that your visitors can get a parking permit from the council.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the newsletter. True, false or not given?', items: [
            { q: 'The coffee morning is at the community centre.', a: 't', why: '*At the community centre on Saturday 7 November.*' },
            { q: 'From November, recycling will be collected on Tuesdays.', a: 'f', why: 'It moves to *Wednesdays instead of Tuesdays*.' },
            { q: 'Volunteers must bring their own gloves to the clean-up.', a: 'f', why: '*We will provide gloves and bags.*' },
            { q: 'Children can go to the clean-up without an adult.', a: 'f', why: '*Children are welcome if an adult comes with them.*' },
            { q: 'The lunch club only wants volunteers with experience.', a: 'f', why: '*No experience is needed.*' },
            { q: 'The lunch is free for the guests.', a: 'ng', why: 'The newsletter does not say what the lunch costs.' },
            { q: 'Visitors can get a parking permit from the council.', a: 't', why: '*Your visitors can get a parking permit from the council.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'You have just moved here and want to meet people over tea and cake. You go to ___.', o: ['the welcome coffee morning', 'the lunch club', 'the park clean-up'], why: '*There will be free tea and cake.*' },
            { q: 'When should you put your bins out?', o: ['the evening before collection', 'the morning after collection', 'once a month'], why: '*Please put your bins out the evening before.*' },
            { q: 'Who should you talk to about the lunch club?', o: ['Grace', 'the council', 'the park staff'], why: '*Please speak to Grace at the community centre.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words for bins and rubbish.', items: [
            { s: 'Please put your [bins] out the evening before. [Recycling] is on Wednesdays and [general waste] is every other Friday.', why: 'Words you need for bin day.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Would you mind ___ the door?', o: ['closing', 'to close', 'close'], why: '*Would you mind* + *-ing*.' },
      { q: 'I’m interested ___ joining the choir.', o: ['in', 'on', 'for'], why: '*interested in*.' },
      { q: 'Someone who works without pay to help others is a ___.', o: ['volunteer', 'tenant', 'landlord'], why: 'A *volunteer*.' },
      { q: 'The day the council collects your rubbish is ___.', o: ['bin day', 'a day off', 'market day'], why: '*bin day*.' },
      { q: '“Would you mind waiting a minute?” You are happy to wait. You say: ___', o: ['Not at all.', 'Yes, I mind.', 'Yes, I would.'], why: '*Not at all*: you do not mind.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Sorry to ___ you, but your music is quite loud.', a: ['bother', 'disturb', 'trouble'], why: '*Sorry to bother you* is a friendly start.' },
      { q: 'I was ___ if you could help me with my bins.', a: ['wondering'], why: '*I was wondering if you could…*' },
      { q: 'I enjoy ___ (meet) new people.', a: ['meeting'], why: '*enjoy* + *-ing*.' },
      { q: 'In the UK, joining a public ___ is usually free.', a: ['library'], why: 'You borrow books from a *library*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Could you possibly move your car?', why: '*Could you possibly* + verb.' },
      { a: 'I would like to join the walking group.', why: '*would like* + *to* + verb.' },
    ] },
  ],
};
