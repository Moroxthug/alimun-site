// English C1 for work, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Public speaking and the media',
  goal: 'Give a speech with impact and answer journalists’ questions with confidence.',
  art: 'parrot',
  tags: { skills: ['speaking', 'listening', 'grammar', 'reading'], topics: ['public-speaking', 'rhetorical-devices', 'inversion', 'media-interviews', 'bridging', 'key-messages'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Speaking with impact',
      about: 'Use contrast, the rule of three, rhetorical questions and inversion to make a speech memorable.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'Listeners cannot go back and re-read a sentence, so a speech has to be easier to follow than a document. Speakers use a small set of **rhetorical devices** that help people remember: **contrast** (*not this, but that*), **the rule of three** (three parallel words or phrases), **rhetorical questions** that the speaker answers, and **repetition** of a key phrase.' },
          { t: 'table', caption: 'Rhetorical devices', explain: ['head', 'col0'], quiz: true, head: ['Device', 'Example'], rows: [
            ['Contrast', 'This is not the end of the project. It is the beginning of the next stage.'],
            ['The rule of three', 'We need to be faster, simpler and closer to our customers.'],
            ['A rhetorical question', 'So why does this matter? Because our customers have noticed.'],
            ['Repetition', 'We listened to our clients. We listened to our staff. And now we are acting.'],
            ['A signpost', 'Let me make three points, and then I’ll take your questions.'],
          ] },
        ],
        [
          { t: 'text', md: '**Inversion** after a negative or limiting expression gives a sentence weight and drama. It is formal, so in a speech use it once or twice at key moments, not in every sentence. The auxiliary comes before the subject, as in a question.' },
          { t: 'examples', items: [
            { s: '**Never before have we** had so many applications.', n: '*Never before* + *have* + subject.' },
            { s: '**Not only did we** meet the target, **but** we exceeded it by a wide margin.', n: '*Not only* + *did* + subject, then *but*.' },
            { s: '**Rarely do** you see a team work so well under pressure.', n: '*Rarely* + *do* + subject.' },
            { s: '**Only by working together will we** solve this.', n: '*Only by* + *-ing* + *will* + subject.' },
            { s: '**At no point did** anyone consider giving up.', n: '*At no point* + *did* + subject: a strong negative.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Pause before and after your most important sentence. Silence tells the audience that something matters more than any device does.' },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite each sentence with inversion, starting with the words given.', items: [
            { q: 'We have never had such a strong year.', cue: 'Never', a: ['Never have we had such a strong year.', 'Never before have we had such a strong year.'], why: '*Never* + *have* + subject.' },
            { q: 'We kept our customers and we also won new ones.', cue: 'Not only', a: ['Not only did we keep our customers, but we also won new ones.', 'Not only did we keep our customers but we also won new ones.', 'Not only did we keep our customers, we also won new ones.', 'Not only did we keep our customers, but we won new ones too.'], why: '*Not only* + *did* + subject + base form, then *but (also)*.' },
            { q: 'You rarely meet such a committed team.', cue: 'Rarely', a: ['Rarely do you meet such a committed team.'], why: '*Rarely* + *do* + subject.' },
            { q: 'We will succeed only by listening to our customers.', cue: 'Only by', a: ['Only by listening to our customers will we succeed.'], why: '*Only by* + *-ing*, then *will* + subject.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each sentence to the device it uses.', pairs: [
            ['We will be bolder, faster and fairer.', 'the rule of three'],
            ['This is not a cut. It is an investment.', 'contrast'],
            ['So what does this mean for you? Quite a lot.', 'a rhetorical question'],
            ['We tried. We failed. We tried again.', 'repetition'],
            ['Let me start with the numbers.', 'a signpost'],
          ] },
          { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Tap it and write the correct words.', items: [
            { s: 'Never before [we have] seen such demand.', a: ['have we'], why: 'After *never before*, the auxiliary comes before the subject.' },
            { s: 'Not only [we did] finish on time, but we also saved money.', a: ['did we'], why: '*Not only did we…*: inversion with *did*.' },
            { s: 'At no point [the team gave] up.', a: ['did the team give'], why: '*At no point did* + subject + base form.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Facing the media',
      about: 'Answer journalists’ questions, bridge to your key message and avoid speculation.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'In a media interview, the journalist decides the questions, but you decide the **message**. Prepare two or three **key messages** before the interview. When a question pulls you away from them, answer briefly and honestly, then **bridge**: use a phrase that leads back to what you want people to hear. Never guess, never answer hypothetical questions about the worst case, and never say *no comment*, which sounds as if you are hiding something.' },
          { t: 'table', caption: 'Media phrases', explain: ['head', 'col0'], head: ['Purpose', 'Phrase'], rows: [
            ['Bridge to your message', 'What’s really important here is…'],
            ['Bridge after a short answer', 'That’s one part of it. The bigger picture is that…'],
            ['Refuse to speculate', 'I’m not going to speculate about that until we have the facts.'],
            ['Decline a hypothetical', 'That’s a hypothetical question. What I can tell you is…'],
            ['Say what you cannot share', 'I’m not in a position to discuss individual cases, but…'],
            ['Commit to updates', 'We will share more information as soon as it is confirmed.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'A practice interview', lines: [
            { who: 'Joanna', s: 'Let’s practise. I’m the journalist. Mr Mensah, is it true that the factory will close?' },
            { who: 'Kwame', s: 'No. The factory isn’t closing. What we’re doing is moving one production line to a newer building nearby.' },
            { who: 'Joanna', s: 'But if sales keep falling, won’t you have to close it eventually?' },
            { who: 'Kwame', s: 'That’s a hypothetical question. What I can tell you is that we’re investing in the site, not leaving it.' },
            { who: 'Joanna', s: 'How many jobs will be lost?' },
            { who: 'Kwame', s: 'We expect every role to move with the line. We’re talking to each person individually, so I won’t go into details, but nobody is being made redundant.' },
            { who: 'Joanna', s: 'Good. You stayed on message and didn’t speculate. One thing: say “we are investing” earlier. Lead with your strongest point.' },
            { who: 'Kwame', s: 'So start with the investment, then answer the question about closure?' },
            { who: 'Joanna', s: 'Answer the question first, briefly, then bridge straight to the investment.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the practice interview. True or false?', items: [
            { q: 'Kwame answers the question about closure directly.', a: 't', why: 'He says clearly: *The factory isn’t closing.*' },
            { q: 'Kwame answers the question about falling sales in detail.', a: 'f', why: 'He calls it a hypothetical question and bridges to his message.' },
            { q: 'Kwame shares the details of each person’s situation.', a: 'f', why: 'He says *I won’t go into details*.' },
            { q: 'Joanna advises him to lead with his strongest point.', a: 't', why: '*Lead with your strongest point.*' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Which phrase is the odd one out? Three are good media answers and one is not.', items: [
            { o: ['No comment.', 'I’m not in a position to discuss that, but what I can say is…', 'We’ll share more as soon as it’s confirmed.', 'What’s really important here is the safety of our staff.'], why: '*No comment* sounds as if you are hiding something.' },
            { o: ['I suppose it could get much worse.', 'I’m not going to speculate until we have the facts.', 'That’s a hypothetical question.', 'What I can tell you is what we know today.'], why: 'Guessing about the worst case is speculation, which you should avoid.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer to the journalist.', items: [
            { q: '“What if the investigation finds you were at fault?”', o: ['I’m not going to speculate before the investigation is complete. What I can tell you is that we are cooperating fully.', 'Then we will probably have to pay a lot of money.', 'No comment.'], why: 'Decline to speculate, then bridge to a positive fact.' },
            { q: '“Is it true you are cutting jobs?” You are not.', o: ['No, we’re not. In fact, we’re hiring twenty people this year.', 'I’d rather not say.', 'You shouldn’t believe everything you hear.'], why: 'Answer directly and briefly, then add your key message.' },
            { q: '“Can you tell us about the employee who was injured?”', o: ['I can’t discuss individual cases, but our first concern is his recovery, and we are supporting his family.', 'His name is on the report, I think.', 'That’s not really a story.'], why: 'Protect privacy, then show what the company is doing.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'What I can tell you is this.', why: 'A bridge that leads to your key message.' },
            { a: 'I’m not going to speculate about that.', why: 'A calm refusal to guess.' },
            { a: 'We will share more information as soon as possible.', why: 'A commitment to keep people informed.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A radio interview',
      about: 'Read the transcript of a short radio interview with a company spokesperson.',
      art: 'ghost',
      spreads: [
        [
          { t: 'reading', title: 'Transcript: the morning programme', md: '**Presenter:** With me now is Clara Jensen, director of a regional bus company that has just announced major timetable changes. Ms Jensen, passengers are angry. Some villages will lose their evening buses altogether. Why are you abandoning them?\n\n**Clara Jensen:** We are not abandoning anyone, and I understand why people are upset. What is changing is the way we serve those villages in the evening. From May, the late buses will be replaced by a bookable service: passengers call or use the app, and a smaller vehicle picks them up.\n\n**Presenter:** That sounds like a cost-cutting exercise dressed up as innovation.\n\n**Clara Jensen:** I can see why it might look that way. But the fact is that many of those evening buses run almost empty, while the routes into the city are so full that people are left at the stop. Not only does the new service cover more of the evening, it also frees up drivers for the busiest routes.\n\n**Presenter:** And if passengers simply do not use this new system? Will you cut the service completely next year?\n\n**Clara Jensen:** I’m not going to speculate about next year. What I can tell you is that we will review the service after six months, and we will publish the results.\n\n**Presenter:** Older passengers say they do not have smartphones.\n\n**Clara Jensen:** That is a fair point, and it is exactly why there will always be a telephone line, staffed by real people, from early morning until midnight.\n\n**Presenter:** Clara Jensen, thank you.\n\n**Clara Jensen:** Thank you.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Some villages will have no evening buses at all.', a: 'f', why: 'The late buses will be replaced by a bookable service, not removed.' },
            { q: 'Clara Jensen says the city routes are often too full.', a: 't', why: '“…people are left at the stop.”' },
            { q: 'Clara Jensen promises the service will continue for at least five years.', a: 'f', why: 'She refuses to speculate and only commits to a review after six months.' },
            { q: 'The bookable service will cost more than the normal bus fare.', a: 'ng', why: 'The interview does not mention prices.' },
            { q: 'Passengers without smartphones will be able to book by phone.', a: 't', why: 'There will always be a staffed telephone line.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language in the interview.', items: [
            { q: 'How does Clara respond to the claim that the company is abandoning villages?', o: ['She rejects it, acknowledges the feelings and explains the change.', 'She agrees and apologises.', 'She refuses to answer.'], why: '*We are not abandoning anyone, and I understand why people are upset.*' },
            { q: '“…a cost-cutting exercise dressed up as innovation.” What is the presenter suggesting?', o: ['That the change is really about saving money, presented as something new.', 'That the company is spending too much on new buses.', 'That the new buses look modern.'], why: '*Dress something up as* something: make it look like something better than it is.' },
            { q: 'Which sentence uses inversion?', o: ['Not only does the new service cover more of the evening, it also frees up drivers.', 'I can see why it might look that way.', 'What is changing is the way we serve those villages.'], why: '*Not only* + *does* + subject.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the two phrases Clara uses to bridge or to avoid speculating.', items: [
            { s: '[I’m not going to speculate] about next year. [What I can tell you is] that we will review the service.', why: 'She refuses to guess, then bridges to a fact she can commit to.' },
          ] },
          { t: 'ex', kind: 'search', h: 'Find six words from the unit.', words: ['bridge', 'message', 'speculate', 'contrast', 'pause', 'signpost'] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Never before ___ such a positive response.', o: ['have we had', 'we have had', 'we had'], why: 'Inversion after *never before*: *have* + subject.' },
      { q: 'Not only ___ the target, but we also beat it.', o: ['did we meet', 'we met', 'we did meet'], why: '*Not only did we* + base form.' },
      { q: 'A journalist asks about a worst case. You say: “I’m not going to ___.”', o: ['speculate', 'specify', 'spectate'], why: '*Speculate*: guess without the facts.' },
      { q: '“We will be faster, simpler and fairer” is an example of:', o: ['the rule of three', 'a rhetorical question', 'inversion'], why: 'Three parallel words: the rule of three.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite with inversion, starting with the words given.', items: [
      { q: 'You rarely see such loyalty.', cue: 'Rarely', a: ['Rarely do you see such loyalty.'], why: '*Rarely* + *do* + subject.' },
      { q: 'Nobody considered giving up at any point.', cue: 'At no point', a: ['At no point did anybody consider giving up.', 'At no point did anyone consider giving up.'], why: '*At no point* + *did* + subject + base form.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the media phrases with one word.', items: [
      { q: 'That’s a ___ question. What I can tell you is this.', a: ['hypothetical'], why: 'A *hypothetical* question asks about something that has not happened.' },
      { q: 'I’m not in a ___ to discuss individual cases.', a: ['position'], why: '*Not in a position to*: not able or allowed to.' },
      { q: 'What I ___ tell you is that we are investing in the site.', a: ['can'], why: 'A bridge: *What I can tell you is…*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the words and their meanings.', pairs: [
      ['bridge', 'move from a question back to your message'],
      ['a key message', 'the main point you want people to remember'],
      ['a signpost', 'a phrase that tells listeners what comes next'],
      ['dress something up as', 'make it look better than it is'],
    ] },
  ],
};
