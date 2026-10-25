// English B1 for work, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Calls and video meetings',
  goal: 'Lead and take part in calls and video meetings.',
  art: 'parrot',
  tags: { skills: ['speaking', 'listening', 'reading', 'vocabulary'], topics: ['phone-calls', 'video-meetings', 'interrupting', 'meeting-notes'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'On the phone',
      about: 'Connect, check and clarify on a work call, then end it politely.',
      art: 'parrot',
      spreads: [
        [
          { t: 'dialogue', title: 'Calling a supplier', lines: [
            { who: 'Receptionist', s: 'Good morning, Northfield Office Supplies. How can I help?' },
            { who: 'Daniel', s: 'Hello, this is Daniel Osei from Parkside Design. Could I speak to Helen Marsh, please?' },
            { who: 'Receptionist', s: 'Just a moment, I’ll put you through.' },
            { who: 'Helen', s: 'Helen Marsh speaking.' },
            { who: 'Daniel', s: 'Hi Helen, it’s Daniel from Parkside Design. I’m calling about our order from last week.' },
            { who: 'Helen', s: 'Of course. Sorry, the line isn’t very good. Could you say the order number again?' },
            { who: 'Daniel', s: 'Sure. It’s 4719B.' },
            { who: 'Helen', s: 'Let me check I’ve got that right: 4719B?' },
            { who: 'Daniel', s: 'That’s right.' },
            { who: 'Helen', s: 'OK, it left our warehouse this morning. You’ll get it tomorrow.' },
            { who: 'Daniel', s: 'Great, thanks for your help.' },
            { who: 'Helen', s: 'You’re welcome. Thanks for calling.' },
          ] },
          { t: 'text', md: 'On the phone, say who you are with *This is…* or *It’s…*, not *I am…*. Then say why you are calling: *I’m calling about…*. When you answer the phone at work, say your name: *Helen Marsh speaking.*' },
        ],
        [
          { t: 'table', caption: 'Useful phrases for work calls', explain: ['head', 'col0'], quiz: true, head: ['', 'Phrase'], rows: [
            ['Say who you are', 'This is Daniel from Parkside Design.'],
            ['Ask for someone', 'Could I speak to Helen Marsh, please?'],
            ['Connect the caller', 'Just a moment, I’ll put you through.'],
            ['Say why you are calling', 'I’m calling about our order.'],
            ['Ask someone to repeat', 'Sorry, could you say that again?'],
            ['Check information', 'Let me check I’ve got that right.'],
            ['End the call', 'Thanks for calling. Bye.'],
          ] },
          { t: 'tip', art: 'owl', md: 'When the person is not there, you can say *I’m afraid she’s not available at the moment. Can I take a message?* The caller can answer *Could you ask her to call me back?*' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the situation and what you say.', pairs: [
            ['You want to talk to Mr Ito.', 'Could I speak to Mr Ito, please?'],
            ['You did not hear a number.', 'Sorry, could you repeat that?'],
            ['You do not know how to write a name.', 'Could you spell that, please?'],
            ['Someone calls for your colleague, but she is out.', 'Can I take a message?'],
            ['You want Mr Ito to phone you later.', 'Could you ask him to call me back?'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best phrase.', items: [
            { q: 'You answer the phone at work: ___', o: ['Good morning, Ana Ruiz speaking.', 'Hello, who are you?', 'Yes? What do you want?'], why: 'Say a greeting and your name: *… speaking.*' },
            { q: 'Hello, ___ Kenji from the London office.', o: ['this is', 'that is', 'here speaks'], why: 'On the phone, say *This is…* or *It’s…* to give your name.' },
            { q: 'I’m calling ___ the meeting on Friday.', o: ['about', 'to', 'at'], why: '*I’m calling about…* says why you are calling.' },
            { q: 'You did not understand an address. You say: ___', o: ['Sorry, could you say that again?', 'Say it again.', 'What?'], why: '*Sorry, could you…?* is polite. The other two sound rude.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the phone phrases.', items: [
            { q: 'Just a moment, I’ll put you ___.', a: ['through'], why: '*Put someone through*: connect them to another person’s phone.' },
            { q: 'I’m afraid she’s not available. Can I ___ a message?', a: ['take'], why: 'You *take a message* for someone who is not there.' },
            { q: 'Could you ask him to call me ___?', a: ['back'], why: '*Call someone back*: phone them again later.' },
            { q: 'Let me check I’ve ___ that right.', a: ['got'], why: '*I’ve got that right*: I have understood it correctly.' },
            { q: 'Could you ___ your surname, please? Is it G-R-E-Y or G-R-A-Y?', a: ['spell'], why: 'You *spell* a word when you say its letters.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Video meetings',
      about: 'Deal with technical problems, take turns and interrupt politely.',
      art: 'alien',
      spreads: [
        [
          { t: 'text', md: 'In video meetings, small technical problems are normal. Say what the problem is calmly and simply, and do not worry too much: it happens to everyone.' },
          { t: 'examples', items: [
            { s: 'Sorry, I think **you’re on mute**.', n: 'We cannot hear the person because their microphone is off.' },
            { s: '**You’re breaking up** a bit. Could you say that again?', n: 'The sound keeps stopping and starting.' },
            { s: 'Your **screen is frozen**.', n: 'The picture has stopped moving.' },
            { s: '**Can everyone see my screen?**', n: 'Check this before you show a document.' },
            { s: 'Sorry, **I got cut off**. What did I miss?', n: 'The call stopped for you, and you joined again.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'A team call about the budget', lines: [
            { who: 'Lena', s: 'OK, let’s look at the budget. Can everyone see my screen?' },
            { who: 'Omar', s: 'Yes, we can see it.' },
            { who: 'Lena', s: 'Good. As you can see, travel costs are higher this year, so I think we should…' },
            { who: 'Grace', s: 'Sorry to interrupt, but are those numbers for the whole year?' },
            { who: 'Lena', s: 'Good question. No, only January to June.' },
            { who: 'Omar', s: 'Can I just add something? We had two big conferences in the spring.' },
            { who: 'Lena', s: 'Thanks, Omar. Grace, what do you think?' },
            { who: 'Grace', s: 'Well, I think we…' },
            { who: 'Omar', s: 'I…' },
            { who: 'Grace', s: 'Oh, sorry. Go ahead, Omar.' },
            { who: 'Omar', s: 'No, no, you go first.' },
          ] },
          { t: 'text', md: 'To interrupt politely, say *Sorry to interrupt, but…* or *Can I just add something?* To give someone the turn, say *Go ahead* or ask *What do you think?* When two people start speaking together, one says *Sorry, you go first.*' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the call. True or false?', items: [
            { q: 'Grace interrupts Lena with a question.', a: 't', why: '*Sorry to interrupt, but are those numbers for the whole year?*' },
            { q: 'The numbers on the screen are for the whole year.', a: 'f', why: 'Lena says *only January to June*.' },
            { q: 'Omar and Grace start speaking at the same time.', a: 't', why: 'Then each one says the other can go first.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the polite phrase that starts each interruption.', items: [
            { s: '[Sorry] [to] [interrupt], but is this the final version?', why: '*Sorry to interrupt, but…* is the most common polite way to interrupt.' },
            { s: '[Can] [I] [just] [add] [something]? The client called this morning.', why: '*Can I just add something?* asks for a turn. *Just* makes it softer.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'Someone is talking, but you cannot hear anything.', o: ['I think you’re on mute.', 'Your screen is frozen.', 'Can everyone see my screen?'], why: 'No sound at all: the microphone is probably off, so the person is *on mute*.' },
            { q: 'You can hear the person, but the picture has stopped.', o: ['Your screen is frozen.', 'You’re on mute.', 'Go ahead.'], why: 'A picture that does not move is *frozen*.' },
            { q: 'You and a colleague start speaking at the same time.', o: ['Sorry, go ahead.', 'Stop talking, please.', 'Wait for me.'], why: '*Go ahead* politely gives the other person the turn.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Sorry to interrupt, but I have a question.', why: '*Sorry to interrupt, but…* + what you want to say.' },
            { a: 'Could you share your screen again?', why: '*Could you* + verb: a polite request.' },
            { a: 'What do you think about the plan?', why: '*What do you think about…?* gives someone the turn.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: meeting notes',
      about: 'Read short notes from a team meeting and find who does what.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'After a meeting, someone often writes short notes: who was there, what the team decided and the **action points**, which say who does what and by when. Notes are short, so words like *the* and *is* are sometimes left out.' },
          { t: 'table', caption: 'Meeting words', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['agenda', 'the list of topics for a meeting'],
            ['chair', 'the person who leads the meeting'],
            ['apologies', 'the names of people who could not come'],
            ['action point', 'a task that someone must do after the meeting'],
            ['to postpone', 'to move something to a later time'],
            ['AOB', 'any other business: other topics at the end'],
          ] },
        ],
        [
          { t: 'reading', title: 'Notes: marketing team call', md: 'Present: Aisha (chair), Tom, Mei, Rafael. Apologies: Karin (on holiday).\n\nAgenda: autumn newsletter, trade fair in Manchester, AOB.\n\nAutumn newsletter: Mei showed the first draft. Everyone liked the design, but the text is too long. Mei will cut it to one page and send the new version to the team by Monday.\n\nTrade fair: The fair is on 18 and 19 November. We need two people on our stand each day. Tom and Rafael can go on the first day. Aisha will ask Karin about the second day when she is back. Rafael will book the hotel this week.\n\nAOB: Tom said the video calls with the Madrid office often have sound problems. He will speak to IT about a better microphone for the meeting room.\n\nThe next meeting is postponed from 23 October to 30 October, because several people are away.\n\nAction points:\nMei: shorter newsletter to the team, by Monday\nRafael: book the hotel, this week\nAisha: ask Karin about 19 November\nTom: talk to IT about the microphone' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the notes. True, false or not given?', items: [
            { q: 'Karin was not at the meeting.', a: 't', why: 'She is under *Apologies*: she is on holiday.' },
            { q: 'The team did not like the design of the newsletter.', a: 'f', why: '*Everyone liked the design, but the text is too long.*' },
            { q: 'Tom and Rafael will work on the stand on 18 November.', a: 't', why: 'They *can go on the first day*, which is 18 November.' },
            { q: 'The hotel in Manchester is expensive.', a: 'ng', why: 'The notes say Rafael will book it, but nothing about the price.' },
            { q: 'The next meeting will be on 23 October.', a: 'f', why: 'It is *postponed* to 30 October.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'The list of topics for a meeting is the ___.', o: ['agenda', 'deadline', 'chair'], why: 'The *agenda* lists what the meeting will talk about.' },
            { q: 'Friday at 5 pm is the ___ for the report. Please don’t send it later.', o: ['deadline', 'agenda', 'action point'], why: 'A *deadline* is the last time to finish something.' },
            { q: 'Rafael’s ___ is to book the hotel.', o: ['action point', 'agenda', 'apology'], why: 'An *action point* is a task for one person after the meeting.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Hello, ___ Sara Novak from the Leeds office.', o: ['this is', 'here is', 'that is'], why: 'On the phone: *This is…* + your name.' },
      { q: 'The picture has stopped moving. Your screen is ___.', o: ['frozen', 'on mute', 'cut off'], why: 'A picture that does not move is *frozen*.' },
      { q: 'Sorry to ___, but can I ask a question?', o: ['interrupt', 'interrupting', 'interrupted'], why: '*Sorry to* + verb: *Sorry to interrupt*.' },
      { q: 'Let’s ___ the meeting to next week. Too many people are away.', o: ['postpone', 'cancel', 'finish'], why: '*Postpone* = move to a later time. You cannot *cancel* a meeting *to* a day.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Hold on, I’ll put you ___ to the sales team.', a: ['through'], why: '*Put someone through*: connect them.' },
      { q: 'She’s in a meeting. Can I ___ a message?', a: ['take'], why: '*Take a message* for someone.' },
      { q: 'I think you’re on ___. We can’t hear you.', a: ['mute'], why: '*On mute*: the microphone is off.' },
      { q: 'I’m calling ___ the invoice you sent last week.', a: ['about'], why: '*I’m calling about…* says why you call.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Could you ask her to call me back?', why: '*Ask someone to* + verb; *call me back*.' },
      { a: 'Can everyone see my screen?', why: 'A question to check before you show a document.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
      ['agenda', 'the list of topics'],
      ['deadline', 'the last time to finish something'],
      ['action point', 'a task after the meeting'],
      ['AOB', 'other topics at the end'],
    ] },
  ],
};
