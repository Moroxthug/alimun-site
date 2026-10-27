// English C1, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'What if?',
  goal: 'Talk about imagined pasts, presents and futures with flexibility.',
  art: 'dragon',
  tags: { skills: ['grammar', 'reading'], topics: ['mixed-conditionals', 'were-to', 'wish', 'would-rather', 'its-time', 'inverted-conditionals', 'conditional-linkers', 'short-story'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'If I had taken that job…',
      about: 'Mix times freely in conditionals, with continuous forms, modal verbs and were to.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'At B2 you joined a past condition with a present result. At C1 you combine times more freely. Each clause keeps its own time, so first decide **when** the condition is true and **when** the result is true. Then choose the form for each clause: a continuous form for something in progress, and *could* or *might* instead of *would* for ability or possibility.' },
          { t: 'examples', items: [
            { s: 'If I **had taken** that job, I **would be living** in Toronto now.', n: 'Past condition, present result in progress: *would be* + *-ing*.' },
            { s: 'If we **hadn’t booked** the tickets in March, we **wouldn’t be flying** to Lisbon tomorrow.', n: 'Past condition, future result. The result can be about tomorrow.' },
            { s: 'If she **weren’t giving** a talk on Friday, she **would have accepted** the invitation.', n: 'A future arrangement as the condition, with a past result: she refused the invitation because of the talk.' },
            { s: 'If I **hadn’t been daydreaming**, I **might have noticed** the sign.', n: 'An activity in progress in the past: *had been* + *-ing*. *Might have* for a possible result.' },
            { s: 'If he **had listened** to his doctor, he **could be** running again by now.', n: '*Could* + infinitive: an ability he does not have now.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Mixing the times', explain: ['head', 'col0'], head: ['Condition → result', 'If clause', 'Main clause'], rows: [
            ['past → present', 'If I had studied harder,', 'I would have a better job now.'],
            ['past → future', 'If he hadn’t injured his knee,', 'he would be playing in the final next week.'],
            ['always true → past', 'If I weren’t so impatient,', 'I wouldn’t have sent that email.'],
            ['future → past', 'If I weren’t working tomorrow,', 'I would have stayed at the party longer.'],
          ] },
          { t: 'text', md: '*Were to* + infinitive makes a future condition sound more hypothetical or more formal. It is common when people discuss policies and possible changes, and in polite suggestions: *If the government were to ban cars from the centre, what would happen to small shops? If you were to move the desk to the window, you would have more light.*' },
          { t: 'tip', art: 'owl', md: 'Never put *would* in the *if* clause, even in a mixed conditional. *Were to* is not used with state verbs: say *If I knew the answer*, not *If I were to know the answer*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'If she hadn’t missed the flight, she ___ around Rome right now.', o: ['would be walking', 'would have been walking', 'will be walking'], why: 'Past condition, present result in progress (*right now*): *would be* + *-ing*.' },
            { q: 'If I ___ allergic to cats, I would have adopted that kitten last week.', o: ['weren’t', 'won’t be', 'wouldn’t be'], why: 'The allergy is always true: past simple in the *if* clause, with a past result.' },
            { q: 'If the government ___ raise taxes again, how would people react?', o: ['were to', 'was going', 'would'], why: '*Were to* + infinitive for a hypothetical future, common in discussions of policy.' },
            { q: 'If we hadn’t sold the car, we ___ drive to the coast next weekend.', o: ['could', 'can', 'could have'], why: 'Past condition, future result: *could* + infinitive for an ability we will not have.' },
            { q: 'If I ___ attention, I wouldn’t have missed my stop.', o: ['had been paying', 'was paying', 'would pay'], why: 'An activity in progress in the past: *had been* + *-ing*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the conditionals with the verbs in brackets.', items: [
            { q: 'If I ___ (not / accept) the transfer, I wouldn’t be living by the sea now.', a: ['hadn’t accepted', 'had not accepted'], why: 'The transfer was in the past: past perfect. The result is true now.' },
            { q: 'If she were a more careful driver, she ___ (not / have) the accident last month.', a: ['wouldn’t have had', 'would not have had'], why: 'Her driving is a general fact; the accident was *last month*: *wouldn’t have* + past participle.' },
            { q: 'If we had left on time, we ___ (sit) on the beach right now.', a: ['would be sitting', '’d be sitting', 'could be sitting'], why: 'A present result in progress: *would be* + *-ing*.' },
            { q: 'If the company ___ (be) to close the factory, hundreds of people would lose their jobs.', a: ['were', 'was'], why: '*Were to* + infinitive for a hypothetical future. *Was to* is also heard in informal English.' },
            { q: 'If he ___ (not / spend) all his savings on a car, he could afford the trip next month.', a: ['hadn’t spent', 'had not spent'], why: 'The spending was in the past; the result is about next month.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the beginnings and the endings.', pairs: [
            ['If I hadn’t stayed up so late,', 'I wouldn’t be so tired today.'],
            ['If she weren’t so modest,', 'she would have told everyone about the prize.'],
            ['If we hadn’t missed the deadline,', 'we would be starting the project next week.'],
            ['If you were to ask him directly,', 'he would probably say yes.'],
            ['If I had been listening,', 'I could have answered the question.'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'I’d rather you didn’t',
      about: 'Use wish, if only, would rather and it’s time with a past form for situations that are not real.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'At B2 you used *wish* with the past simple, the past perfect and *would*. At C1 you need a few more patterns and the small differences between them. In all of them, a past form talks about something that is not real, now or in the past.' },
          { t: 'table', caption: 'The unreal past', explain: ['head', 'col0', 'col1'], head: ['Meaning', 'Form', 'Example'], rows: [
            ['a past chance you did not have', '*wish* / *if only* + *could have* + past participle', 'I wish I **could have been** there for you.'],
            ['someone’s annoying habit or refusal', '*wish* + *would*', 'I wish he **wouldn’t** leave his dishes in the sink.'],
            ['what you want someone else to do', '*would rather* + subject + past simple', 'I’d rather you **didn’t** tell anyone yet.'],
            ['what you wish someone had not done', '*would rather* + subject + past perfect', 'I’d rather you **hadn’t** invited him.'],
            ['what you prefer to do yourself', '*would rather* + infinitive without *to*', 'I’d rather **stay** at home tonight.'],
            ['something that should already be happening', '*it’s (high / about) time* + subject + past simple', 'It’s high time we **made** a decision.'],
          ] },
        ],
        [
          { t: 'text', md: '*Would rather* has two patterns. When the subject stays the same, use the infinitive without *to*: *I’d rather walk*. When the subject changes, use a past form: *I’d rather you walked*. *Would sooner* means the same and is a little more informal. *I’d prefer it if you…* is a neutral alternative: *I’d prefer it if you didn’t smoke here*.\n\n*It’s time* + past simple is a criticism or a strong suggestion: something should happen now, and it is already late. *High* and *about* make it stronger. Compare *It’s time to go*, which is a simple statement.' },
          { t: 'examples', items: [
            { s: 'If only I **could have** said goodbye to her.', n: 'A past chance you did not have.' },
            { s: 'I wish you **would** listen to me for once!', n: 'You are annoyed because someone refuses to do something.' },
            { s: 'I’d rather you **hadn’t** mentioned it to my parents.', n: 'It has already happened, and you are not happy about it.' },
            { s: 'It’s about time the council **repaired** this road.', n: 'The road should have been repaired already.' },
          ] },
          { t: 'tip', art: 'owl', md: '*Wish* + *would* is for actions and behaviour, not for states. Say *I wish he were more patient*, not *I wish he would be more patient*, unless you mean that he refuses to be patient. After *would rather* and *it’s time*, the past form does not mean past time: *I’d rather you came tomorrow* is about the future.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'I’d rather you ___ your phone during dinner.', o: ['didn’t use', 'don’t use', 'not use'], why: 'A different subject (*you*) after *would rather*: past simple.' },
            { q: 'I’d rather ___ by train than fly.', o: ['go', 'to go', 'went'], why: 'The same subject (*I*): the infinitive without *to*.' },
            { q: 'It’s high time you ___ a proper job.', o: ['found', 'find', 'will find'], why: '*It’s high time* + subject + past simple: it should have happened already.' },
            { q: 'I wish I ___ to the wedding, but I was in hospital.', o: ['could have gone', 'could go', 'would go'], why: 'A past chance you did not have: *could have* + past participle.' },
            { q: 'I wish my flatmate ___ the door when he comes in late. It wakes everyone up.', o: ['wouldn’t slam', 'won’t slam', 'doesn’t slam'], why: 'An annoying habit of another person: *wish* + *would*.' },
            { q: 'I’d rather you ___ me before you sold the car. Now it’s too late.', o: ['had asked', 'asked', 'would ask'], why: 'Something in the past that you wish had been different: *would rather* + past perfect.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the correct form of the verb in brackets.', items: [
            { q: 'It’s time we ___ (leave). The last bus goes in ten minutes.', a: ['left'], why: '*It’s time* + subject + past simple.' },
            { q: 'I’d rather you ___ (not / come) to the meeting tomorrow.', a: ['didn’t come', 'did not come'], why: 'A different subject: past simple, even though the meeting is in the future.' },
            { q: 'If only I ___ (can / see) her face when she opened the present!', a: ['could have seen'], why: 'A past chance you did not have: *could have* + past participle.' },
            { q: 'My brother would rather ___ (work) from home than commute.', a: ['work'], why: 'The same subject: the infinitive without *to*.' },
            { q: 'I wish you ___ (stop) checking your messages while I’m talking.', a: ['would stop', '’d stop'], why: 'Someone’s annoying behaviour: *wish* + *would*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite each sentence. Start with the words given.', items: [
            { q: 'Please don’t tell anyone about this.', cue: 'I’d rather', a: ['I’d rather you didn’t tell anyone about this.', 'I would rather you didn’t tell anyone about this.', 'I’d rather you did not tell anyone about this.'], why: 'A wish about someone else’s action: *would rather* + subject + past simple.' },
            { q: 'You really should start revising now; it’s getting late.', cue: 'It’s high time', a: ['It’s high time you started revising.', 'It’s high time you revised.'], why: 'A strong suggestion: *It’s high time* + subject + past simple.' },
            { q: 'I regret that I wasn’t able to help you more.', cue: 'I wish', a: ['I wish I could have helped you more.', 'I wish I had been able to help you more.'], why: 'A past chance you did not have: *could have* + past participle.' },
            { q: 'It’s a pity you told her the news.', cue: 'I’d rather', a: ['I’d rather you hadn’t told her the news.', 'I would rather you hadn’t told her the news.', 'I’d rather you had not told her the news.'], why: 'A past action you are unhappy about: *would rather* + past perfect.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'I’d rather you [don’t] park in front of my garage.', a: ['didn’t', 'did not'], why: 'After *would rather* + a different subject, use a past form.' },
            { s: 'It’s high time the government [does] something about housing.', a: ['did'], why: '*It’s high time* + past simple.' },
            { s: 'I’d rather [to stay] in tonight, if you don’t mind.', a: ['stay'], why: '*Would rather* + infinitive without *to*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Had I known…',
      about: 'Use provided that, supposing, but for and otherwise, and formal conditionals with inversion.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'text', md: 'English has many ways to express a condition without *if*. Each one makes your meaning more exact.' },
          { t: 'table', caption: 'Instead of if', explain: ['head', 'col1'], head: ['Word or phrase', 'Meaning', 'Example'], rows: [
            ['provided (that) / providing', 'only if this condition is met', 'You can borrow the car **provided that** you fill it up.'],
            ['as long as / so long as', 'only if; a little less formal', 'I’ll come **as long as** I’m back by ten.'],
            ['on condition that', 'only if; formal and strict', 'He was released **on condition that** he left the country.'],
            ['supposing / suppose', 'imagine that; often in questions', '**Supposing** you lost your passport, what would you do?'],
            ['but for + noun', 'if it were not for, or if it had not been for', '**But for** your help, we would have failed.'],
            ['otherwise', 'if not; the result if the first part does not happen', 'Leave now; **otherwise**, you’ll miss the train.'],
          ] },
          { t: 'text', md: 'After *provided, as long as* and *on condition that*, use a present tense for the future, as after *if*: *as long as it doesn’t rain*, not *as long as it won’t rain*. *But for* is followed by a noun, never by a clause. *Otherwise* begins a new clause or sentence.' },
        ],
        [
          { t: 'text', md: 'In formal English you can leave out *if* and put the auxiliary verb first. This **inversion** is common in formal letters, reports and literature, and it sounds confident and elegant.' },
          { t: 'table', caption: 'Inverted conditionals', explain: ['head', 'col0'], head: ['Type', 'With if', 'Inverted'], rows: [
            ['Third conditional', 'If I had known, I would have called.', '**Had I known**, I would have called.'],
            ['Second conditional', 'If I were in your position, I would accept.', '**Were I** in your position, I would accept.'],
            ['With *were to*', 'If the plan were to fail, we would lose everything.', '**Were the plan to fail**, we would lose everything.'],
            ['First conditional, formal', 'If you need any help, please call me.', '**Should you need** any help, please call me.'],
            ['*If it had not been for*', 'If it had not been for the rain, the match would have finished.', '**Had it not been for** the rain, the match would have finished.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In the negative, *not* comes after the subject and is never contracted: *Had we not left early*, never *Hadn’t we left early*. Only *had*, *were* and *should* invert like this: you cannot say *Did I know, I would tell you*.' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the best word or phrase.', items: [
            { q: 'You can use the room ___ you leave it tidy.', o: ['provided that', 'otherwise', 'supposing'], why: '*Provided that*: only if this condition is met.' },
            { q: '___ you won the competition, how would you spend the money?', o: ['Supposing', 'Provided', 'Otherwise'], why: '*Supposing* asks someone to imagine a situation, often in a question.' },
            { q: '___ the support of my family, I would never have finished my degree.', o: ['But for', 'Unless', 'As long as'], why: '*But for* + noun = if it had not been for.' },
            { q: 'Write the address down; ___, you’ll forget it.', o: ['otherwise', 'unless', 'provided'], why: '*Otherwise* = if you do not. It starts a new clause.' },
            { q: 'I’ll lend you the money as long as you ___ it back by Friday.', o: ['pay', 'will pay', 'would pay'], why: 'After *as long as*, a present tense for the future.' },
            { q: 'The loan was approved on ___ that the company cut its costs.', o: ['condition', 'provided', 'supposing'], why: 'The fixed phrase is *on condition that*.' },
          ] },
          { t: 'ex', kind: 'bank', h: 'Complete the sentences with the words in the box.', extra: ['unless', 'in case'], items: [
            { q: 'I’ll lend you my notes ___ you give them back tomorrow.', a: 'as long as', why: '*As long as*: only if you give them back.' },
            { q: '___ you were offered the job, would you take it?', a: 'Supposing', why: '*Supposing* introduces an imagined situation in a question.' },
            { q: 'Book early; ___, there won’t be any seats left.', a: 'otherwise', why: '*Otherwise*: if you do not book early.' },
            { q: '___ his quick thinking, the fire would have spread.', a: 'But for', why: '*But for* + noun: if it had not been for his quick thinking.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite each sentence without if. Start with the word given.', items: [
            { q: 'If I had known about the problem, I would have helped.', cue: 'Had', a: ['Had I known about the problem, I would have helped.'], why: 'Third conditional: *Had* + subject + past participle.' },
            { q: 'If you have any questions, please contact our office.', cue: 'Should', a: ['Should you have any questions, please contact our office.'], why: 'A formal first conditional: *Should* + subject + infinitive.' },
            { q: 'If I were the manager, I would change the rules.', cue: 'Were', a: ['Were I the manager, I would change the rules.'], why: 'Second conditional with *be*: *Were* + subject.' },
            { q: 'If we hadn’t taken a taxi, we would have missed the start.', cue: 'Had', a: ['Had we not taken a taxi, we would have missed the start.'], why: 'In the negative, *not* comes after the subject and is not contracted.' },
            { q: 'If the company were to close, the town would suffer.', cue: 'Were', a: ['Were the company to close, the town would suffer.'], why: '*Were* + subject + *to* + infinitive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'build', h: 'Build the sentence. Two words do not belong.', items: [
            { a: 'Had it not been for the map, we would have got lost.', extra: ['if', 'hadn’t'], why: 'An inverted conditional has no *if*, and *not* is not contracted after the subject.' },
            { a: 'Should you change your mind, let me know.', extra: ['if', 'will'], why: '*Should* + subject + infinitive replaces *if*.' },
            { a: 'But for the rain, we would have won.', extra: ['if', 'it'], why: '*But for* is followed directly by a noun.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'The 8.14',
      about: 'Read a short story about a missed train, and notice how it imagines other pasts and presents.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'The 8.14', md: 'Clara saw the doors close from the top of the stairs. She ran anyway, the way people do, as though the train might change its mind. It didn’t. The 8.14 slid out of the station, and with it, she was sure, her interview.\n\nShe sat down on a cold bench and did the arithmetic of regret. If she hadn’t gone back for her umbrella, she would be on that train now, rehearsing her answers. If only she had ignored the sky. It wasn’t even raining.\n\n“Missed it too?” A man in a grey coat sat down at the other end of the bench. “I wish they wouldn’t close the doors so fast.”\n\nShe laughed despite herself. “I’ve got an interview at nine. Had I left two minutes earlier, I’d be halfway there.”\n\n“Supposing you’d caught it,” he said, “what would you be doing now?”\n\n“Panicking, probably. Reading my notes for the hundredth time.”\n\n“Then perhaps the station has done you a favour.”\n\nThe next train was forty minutes late, and they talked. He was a carpenter on his way to repair a church roof; she designed bridges, or wanted to, provided anyone would let her. By the time it arrived, she had told him things she had never told her sister.\n\nShe was late for the interview, and she didn’t get the job. Normally she would have spent a week going over every mistake. Instead, she found herself thinking about the man on the bench, whose name she had not asked.\n\nThree months later, a different firm invited her to a site visit for a small footbridge over the river. On the bank, measuring the old wooden steps, stood a man in a grey coat.\n\n“You again,” he said. “It’s about time we were introduced properly.”\n\nYears afterwards, when people asked how they had met, Owen liked to say that but for an umbrella they would never have spoken. Clara always corrected him. “If I hadn’t missed that train,” she would say, “I’d still be drawing car parks for a company I couldn’t stand. It wasn’t the umbrella. It was the train I didn’t catch.”' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Clara missed the train because she went back for something.', a: 't', why: 'She went back for her umbrella.' },
            { q: 'It was raining heavily when Clara reached the station.', a: 'f', why: '“It wasn’t even raining.”' },
            { q: 'The man on the bench had also just missed the train.', a: 't', why: 'He asks “Missed it too?” and then waits for the next train.' },
            { q: 'Clara got the job she had the interview for that morning.', a: 'f', why: '“She didn’t get the job.”' },
            { q: 'Clara and Owen now live near the river.', a: 'ng', why: 'The story does not say where they live.' },
            { q: 'Clara believes that missing the train changed her life for the better.', a: 't', why: 'Without it, she says, she would still be working for a company she could not stand.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the grammar in the story.', items: [
            { q: '“If she hadn’t gone back for her umbrella, she would be on that train now.” What kind of conditional is this?', o: ['A mixed conditional: a past condition with a present result', 'A third conditional: a past condition with a past result', 'A second conditional about the future'], why: '*Hadn’t gone* is past; *would be … now* is present.' },
            { q: '“Had I left two minutes earlier, I’d be halfway there.” Which sentence means the same?', o: ['If I had left two minutes earlier, I would be halfway there.', 'If I left two minutes earlier, I would be halfway there.', 'When I had left two minutes earlier, I was halfway there.'], why: 'An inverted mixed conditional: *Had I left* = *If I had left*.' },
            { q: '“It’s about time we were introduced properly.” Why does Owen say *were*?', o: ['After *it’s about time*, a past form refers to now: it should happen now.', 'He is talking about an introduction in the past.', 'It is a mistake; he should say *are*.'], why: '*It’s about time* + past simple is about the present: it should already have happened.' },
            { q: '“But for an umbrella they would never have spoken.” What does *but for* mean here?', o: ['if it had not been for', 'except', 'in spite of'], why: '*But for* + noun introduces a condition in the past.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the words from the story with their meanings.', pairs: [
            ['rehearse', 'practise something before you have to do it for real'],
            ['despite herself', 'although she did not intend to'],
            ['do someone a favour', 'help someone, often without being asked'],
            ['go over', 'examine again carefully'],
            ['can’t stand', 'strongly dislike'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'If I hadn’t moved abroad, I ___ my husband now.', o: ['wouldn’t know', 'wouldn’t have known', 'won’t know'], why: 'Past condition, present result (*now*): *would* + infinitive.' },
      { q: 'If the council ___ close the library, many people would protest.', o: ['were to', 'would', 'is going'], why: '*Were to* + infinitive for a hypothetical future.' },
      { q: 'I’d rather you ___ smoke in the car.', o: ['didn’t', 'don’t', 'won’t'], why: 'A different subject after *would rather*: past simple.' },
      { q: 'It’s about time you ___ to bed. It’s past midnight.', o: ['went', 'go', 'going'], why: '*It’s about time* + subject + past simple.' },
      { q: '___ his help, we would never have found the house.', o: ['But for', 'Unless', 'Provided'], why: '*But for* + noun = if it had not been for.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite each sentence. Start with the words given.', items: [
      { q: 'If I had realised the time, I would have left earlier.', cue: 'Had', a: ['Had I realised the time, I would have left earlier.'], why: 'An inverted third conditional: *Had* + subject + past participle.' },
      { q: 'If you require further information, please contact the office.', cue: 'Should', a: ['Should you require further information, please contact the office.'], why: 'A formal first conditional: *Should* + subject + infinitive.' },
      { q: 'It’s a pity you sold your guitar.', cue: 'I’d rather', a: ['I’d rather you hadn’t sold your guitar.', 'I would rather you hadn’t sold your guitar.', 'I’d rather you had not sold your guitar.'], why: 'A past action you regret: *would rather* + past perfect.' },
      { q: 'I’m sorry I wasn’t able to see your show.', cue: 'I wish', a: ['I wish I could have seen your show.', 'I wish I had been able to see your show.'], why: 'A past chance you did not have: *could have* + past participle.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with the correct form of the verb in brackets.', items: [
      { q: 'If he ___ (not / be) so lazy, he would have finished the report yesterday.', a: ['weren’t', 'wasn’t', 'were not', 'was not'], why: 'A general fact about him: past simple. The result is in the past.' },
      { q: 'If we had booked a table, we ___ (eat) by now.', a: ['would be eating', '’d be eating', 'could be eating'], why: 'Past condition, present result in progress: *would be* + *-ing*.' },
      { q: 'You can come with us as long as you ___ (be) ready by eight.', a: ['are', '’re'], why: 'After *as long as*, a present tense for the future.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: '[Hadn’t we] taken the early train, we would have missed the meeting.', a: ['Had we not'], why: 'In an inverted conditional, *not* comes after the subject and is not contracted.' },
      { s: 'I wish I [could go] to your party last Saturday.', a: ['could have gone'], why: 'A past chance you did not have: *could have* + past participle.' },
    ] },
  ],
};
