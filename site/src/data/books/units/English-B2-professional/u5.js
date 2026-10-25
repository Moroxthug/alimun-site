// English B2 for work, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Feedback and difficult conversations',
  goal: 'Give and receive feedback and handle conflict.',
  art: 'cat',
  tags: { skills: ['speaking', 'vocabulary', 'grammar', 'reading'], topics: ['feedback', 'hedging', 'softening', 'conflict', 'common-ground'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Constructive feedback',
      about: 'Give feedback that helps, and make it softer with hedging.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Constructive feedback describes a specific **action**, explains its **effect**, and suggests a **next step**. It talks about what the person did, not about who they are: *The report arrived two days late, so the client had to wait* is useful; *You’re so disorganised* is not. In English, speakers usually **soften** criticism, especially with colleagues.' },
          { t: 'table', caption: 'Softening criticism', explain: ['head'], head: ['Too direct', 'Softer'], rows: [
            ['Your slides were confusing.', 'Some of the slides were a little hard to follow.'],
            ['You talk too much in meetings.', 'It might be worth giving others a bit more time to speak.'],
            ['This email is rude.', 'The email could come across as slightly abrupt.'],
            ['Do it differently next time.', 'Next time, you might want to try a different approach.'],
            ['You didn’t check the numbers.', 'I noticed a couple of errors in the figures.'],
          ] },
        ],
        [
          { t: 'text', md: '**Hedging** means making a statement less absolute, so that it sounds less like a judgement and more like an observation. Common hedges are verbs like *seem*, *appear* and *tend to*, modal verbs like *might* and *could*, and phrases like *I wonder whether…* and *It might be worth…*.' },
          { t: 'examples', items: [
            { s: 'The introduction **seems** a little long.', n: '*Seem* presents it as your impression, not a fact.' },
            { s: 'You **tend to** speak quite fast when you’re nervous.', n: '*Tend to* describes a habit gently.' },
            { s: '**I wonder whether** we could add a summary at the start.', n: 'A suggestion in the form of a thought.' },
            { s: '**It might be worth** checking the figures with finance.', n: '*It might be worth* + *-ing*: a soft suggestion.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Receiving feedback is a skill too. Thank the person, ask for an example if it is not clear, and avoid defending yourself at once: *Thanks, that’s useful. Could you give me an example?*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the more constructive feedback.', items: [
            { q: 'A colleague’s presentation ran over time.', o: ['The talk went about ten minutes over, so we had less time for questions. Maybe you could cut one section?', 'Your presentation was far too long.', 'You never finish on time.'], why: 'It describes the action, the effect and a next step.' },
            { q: 'An email to a client sounded impolite.', o: ['The last line could come across as a bit abrupt. Perhaps you could add a thank-you?', 'Your email was rude.', 'Why do you always write like that?'], why: '*Could come across as* and *a bit* soften the comment, and there is a suggestion.' },
            { q: 'A report has several mistakes.', o: ['I noticed a few errors in the second section. It might be worth checking it again.', 'This report is full of mistakes.', 'Didn’t you read this before you sent it?'], why: '*I noticed* describes what you saw; *It might be worth* suggests a next step.' },
            { q: 'You receive feedback that you do not understand.', o: ['Thanks for that. Could you give me an example?', 'That’s not true at all.', 'Well, nobody told me.'], why: 'Thank the person and ask for an example before you react.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the hedge in each sentence.', items: [
            { s: 'The second half of the report [seems] less detailed than the first.', why: '*Seems* presents the comment as an impression.' },
            { s: 'You [tend to] interrupt people when you disagree.', why: '*Tend to* describes a habit gently.' },
            { s: 'The deadline [might] be too ambitious.', why: '*Might* makes the statement less certain.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the softer sentences with one word.', items: [
            { q: 'It might be ___ asking the client what they think.', a: ['worth'], why: '*It might be worth* + *-ing*.' },
            { q: 'I ___ whether we could start the meeting a bit earlier.', a: ['wonder', 'wondered', 'was wondering'], why: '*I wonder whether…* makes a suggestion sound like a thought.' },
            { q: 'Next time, you might ___ to send the agenda in advance.', a: ['want', 'like'], why: '*You might want to* + verb: a polite suggestion.' },
            { q: 'Your tone could come ___ as a little impatient.', a: ['across'], why: '*Come across as*: give an impression to others.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Could you give me an example?', why: 'A useful question when you receive unclear feedback.' },
            { a: 'Some of the slides were hard to follow.', why: '*Some of* and *hard to follow* make the criticism softer than *the slides were confusing*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Finding common ground',
      about: 'Stay calm in a disagreement and move towards a solution.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'In a difficult conversation, the aim is to solve the problem, not to win. **Acknowledge** the other person’s feelings, use **I-statements** about your own experience rather than *you*-statements that sound like an attack, and look for **common ground**: the goals you both share.' },
          { t: 'table', caption: 'Phrases for difficult conversations', explain: ['head', 'col0'], quiz: true, head: ['Purpose', 'Phrase'], rows: [
            ['Acknowledge feelings', 'I can see why you feel that way.'],
            ['Show you have listened', 'So what you’re saying is that…'],
            ['Use an I-statement', 'I felt under pressure when the plan changed at the last minute.'],
            ['Find common ground', 'It sounds like we both want the project to succeed.'],
            ['Invite a solution', 'What would work better for you?'],
            ['Offer help', 'Would it help if I took over the weekly report?'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Too much work', lines: [
            { who: 'Andrés', s: 'Have you got a minute, Mei? I wanted to talk about the client project.' },
            { who: 'Mei', s: 'Sure. Is something wrong?' },
            { who: 'Andrés', s: 'To be honest, I’ve felt quite stretched recently. I’ve been doing most of the client calls on top of my own work.' },
            { who: 'Mei', s: 'Oh. I didn’t realise. I thought you preferred doing the calls.' },
            { who: 'Andrés', s: 'I can see why you thought that, because I’ve never said anything. But it’s getting too much.' },
            { who: 'Mei', s: 'OK. It sounds like we both want the client to be happy without anyone burning out. What would work better for you?' },
            { who: 'Andrés', s: 'Maybe we could take turns, one week each?' },
            { who: 'Mei', s: 'That seems fair. And would it help if I took over the weekly report as well?' },
          ] },
          { t: 'text', md: 'Andrés uses an I-statement: *I’ve felt quite stretched*. He does not say *You never do the calls*. Mei finds common ground (*we both want…*) and invites a solution (*What would work better for you?*).' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Andrés blames Mei directly for the problem.', a: 'f', why: 'He talks about his own experience with an I-statement.' },
            { q: 'Mei knew that Andrés was unhappy with the calls.', a: 'f', why: '“I didn’t realise.”' },
            { q: 'Andrés suggests sharing the calls in turns.', a: 't', why: '“Maybe we could take turns, one week each?”' },
            { q: 'Mei offers to do an extra task.', a: 't', why: 'She offers to take over the weekly report.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the I-statement.', items: [
            { q: '', o: ['I felt frustrated when the report arrived late.', 'You always send reports late.', 'Your reports are never on time.'], why: 'An I-statement describes your own feeling and the specific situation.' },
            { q: '', o: ['I find it hard to concentrate when there is a lot of noise.', 'You are far too noisy.', 'You never think about other people.'], why: 'It describes the effect on you without attacking the other person.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each sentence to what the speaker is doing.', pairs: [
            ['I can see why you feel that way.', 'acknowledging feelings'],
            ['So what you’re saying is that the deadline is unrealistic?', 'checking understanding'],
            ['We both want the launch to go well.', 'finding common ground'],
            ['What would work better for you?', 'inviting a solution'],
            ['Would it help if I joined the call?', 'offering help'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the phrases with one word.', items: [
            { q: 'It sounds like we ___ want the same result.', a: ['both'], why: '*We both want…* points to common ground.' },
            { q: 'Would it ___ if I took over the invoices?', a: ['help'], why: '*Would it help if I* + past simple: an offer.' },
            { q: 'I can ___ why you feel that way.', a: ['see', 'understand'], why: '*I can see why…* acknowledges the other person’s feelings.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Feedback culture',
      about: 'Read an article about how teams give and receive feedback.',
      art: 'teacup',
      spreads: [
        [
          { t: 'reading', title: 'Why “good job” is not enough', md: 'Most of us say we want honest feedback. Yet when a manager asks “Can I give you some feedback?”, many people feel their heart rate rise. Feedback, it seems, is something we value in theory but fear in practice.\n\nPart of the problem is timing. In many organisations, feedback still arrives once a year, in a formal review. By then, the mistakes are months old and the conversation feels like a judgement rather than help. Teams with a healthier feedback culture tend to do the opposite: they give small, regular comments soon after the event, when they are still useful.\n\nAnother problem is vagueness. “Good job” feels pleasant but teaches nothing, and “This needs more work” is equally unhelpful. Useful feedback is specific: it names what the person did and what effect it had. “Your summary at the start helped the client understand the problem in two minutes” tells someone exactly what to repeat.\n\nCulture plays a role too. Expectations differ between countries, between companies and even between teams. In some workplaces, direct criticism is a sign of respect; in others, the same words could seriously damage a relationship. People who work in international teams often have to learn to “translate” feedback: a colleague’s “interesting idea” might be a compliment or a polite rejection.\n\nFinally, feedback works best when it flows in every direction. When managers ask their teams “What could I do better?” and listen without becoming defensive, they show that feedback is not a punishment but a normal part of working together.\n\nNone of this is complicated. But it does require practice, and a little courage.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'According to the writer, many people feel nervous when they are offered feedback.', a: 't', why: '“…many people feel their heart rate rise.”' },
            { q: 'The writer thinks a yearly review is the best time for feedback.', a: 'f', why: 'By then the mistakes are months old; regular comments work better.' },
            { q: 'The writer says “Good job” is useful because it is positive.', a: 'f', why: '“Good job” feels pleasant but teaches nothing.' },
            { q: 'Most companies now train their managers to give feedback.', a: 'ng', why: 'The article does not mention training.' },
            { q: 'The same words can be received differently in different workplaces.', a: 't', why: 'Direct criticism is respectful in some places and damaging in others.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the ideas and language in the article.', items: [
            { q: 'What makes feedback useful, according to the article?', o: ['It is specific and comes soon after the event.', 'It is short and always positive.', 'It comes once a year in a formal review.'], why: 'The writer recommends regular, specific comments.' },
            { q: 'What does it mean to “translate” feedback?', o: ['To understand what a colleague really means, given their culture.', 'To put feedback into another language.', 'To repeat feedback to your manager.'], why: 'The example shows that *interesting idea* can mean different things.' },
            { q: '“Teams with a healthier feedback culture tend to do the opposite.” Why does the writer use *tend to*?', o: ['To make the statement less absolute.', 'To talk about the future.', 'To give an order.'], why: '*Tend to* is a hedge: it describes what is usually true, not always.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the two hedges.', items: [
            { s: 'Feedback, it [seems], is something we value in theory, and a colleague’s comment [might] be a polite rejection.', why: '*Seems* and *might* make the statements less certain.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'It might be worth ___ the client before we decide.', o: ['asking', 'to ask', 'ask'], why: '*It might be worth* + *-ing*.' },
      { q: 'Which is the most constructive?', o: ['The handout had a few errors. Could you check it before the next session?', 'Your handout was a mess.', 'You never check anything.'], why: 'It describes the action and suggests a next step.' },
      { q: 'Which is an I-statement?', o: ['I felt left out when I wasn’t invited.', 'You never invite me.', 'You are very unfair.'], why: 'It describes the speaker’s own feeling.' },
      { q: 'Would it help if I ___ the minutes this week?', o: ['took', 'take', 'will take'], why: '*Would it help if I* + past simple.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences with one word.', items: [
      { q: 'You ___ to speak very quickly when you are nervous.', a: ['tend', 'seem'], why: '*Tend to* (or *seem to*) describes a habit gently.' },
      { q: 'The email could come ___ as a bit rude.', a: ['across'], why: '*Come across as*: give an impression.' },
      { q: 'It sounds like we both ___ the same thing.', a: ['want', 'need'], why: 'Common ground: *we both want…*' },
      { q: 'Thanks, that’s useful. Could you give me an ___?', a: ['example'], why: 'Ask for an example when feedback is not clear.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'I can see why you feel that way.', why: 'Acknowledge the other person’s feelings.' },
      { a: 'What would work better for you?', why: 'Invite the other person to suggest a solution.' },
    ] },
    { t: 'ex', kind: 'spot', h: 'Tap the hedge.', items: [
      { s: 'The plan [appears] to be too ambitious.', why: '*Appear to* presents the comment as an impression.' },
    ] },
  ],
};
