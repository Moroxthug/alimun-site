// English B2 for moving abroad, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Fitting in',
  goal: 'Understand indirect language, politeness and humour.',
  art: 'dog',
  tags: { skills: ['speaking', 'reading', 'vocabulary', 'grammar'], topics: ['politeness', 'softening', 'understatement', 'irony', 'small-talk', 'question-tags', 'culture'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'What people really mean',
      about: 'Recognise softening and understatement, and understand what lies behind polite phrases.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'Many British speakers prefer to be **indirect**, especially when they disagree, refuse or criticise. They **soften** what they say with words like *a bit*, *slightly*, *I’m not sure* and *perhaps*. They also use **understatement**: they say less than they mean. Of course, people are different and not everyone speaks like this, but it helps to recognise the patterns.' },
          { t: 'examples', items: [
            { s: 'It’s **a bit** expensive, isn’t it?', n: 'Often means: it is far too expensive.' },
            { s: '**I’m not sure** that’s **quite** right.', n: 'A polite way of saying: I think you are wrong.' },
            { s: 'That’s **not bad** at all.', n: 'Understatement: it often means *good* or even *very good*.' },
            { s: 'We had **a slight** problem with the car.', n: 'Understatement: the problem may have been quite serious.' },
          ] },
        ],
        [
          { t: 'table', caption: 'What they say and what they often mean', explain: ['head', 'col1'], head: ['They say', 'They often mean'], rows: [
            ['I’ll bear it in mind.', 'I probably won’t do anything about it.'],
            ['That’s an interesting idea.', 'I am not convinced, or I disagree.'],
            ['With all due respect, …', 'I strongly disagree with you.'],
            ['Could you possibly…?', 'Please do this. It is a request, not really a question.'],
            ['I might be wrong, but…', 'I am fairly sure I am right.'],
            ['You must come round some time.', 'A friendly remark. It is not always a real invitation.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Be careful with *quite*. With most adjectives, *quite good* means *fairly good*, a little less than *good*. With strong adjectives, *quite* means *completely*: *quite right*, *quite impossible*. Tone of voice matters too.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the speaker probably mean?', items: [
            { q: 'A colleague reads your report and says: “It’s not bad at all. Just a couple of small things.”', o: ['She thinks it is good, with a few minor changes.', 'She thinks it is terrible.', 'She has not read it properly.'], why: '*Not bad at all* is understatement: it means *good*.' },
            { q: 'Your manager hears your suggestion and says: “Thanks, I’ll bear it in mind.”', o: ['It will probably not happen soon.', 'He will put it into practice tomorrow.', 'He did not hear what you said.'], why: '*I’ll bear it in mind* often means *I won’t do anything now*.' },
            { q: 'A neighbour says: “The music was a little loud last night.”', o: ['She is politely complaining about the noise.', 'She enjoyed your music.', 'She would like you to play it louder.'], why: '*A little* softens a complaint.' },
            { q: 'In a meeting, someone says: “With all due respect, I don’t think that will work.”', o: ['He strongly disagrees.', 'He completely agrees.', 'He respects the plan and will support it.'], why: '*With all due respect* usually comes before strong disagreement.' },
            { q: 'Someone you have just met says: “We must meet for a coffee some time.”', o: ['It is a friendly remark that may or may not lead to a real meeting.', 'It is a firm invitation for a fixed day.', 'It is a request for you to pay for the coffee.'], why: 'Without a day or time, it is often just a friendly remark.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the direct sentence and its softer version.', pairs: [
            ['You’re wrong.', 'I’m not sure that’s quite right.'],
            ['This is too expensive.', 'It’s a bit more than we wanted to spend.'],
            ['Send it today.', 'Could you possibly send it today?'],
            ['I don’t like your idea.', 'That’s an interesting idea, but…'],
            ['You’re late.', 'We were starting to wonder where you were.'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the softer sentences with one word.', items: [
            { q: 'I’m not ___ that’s the best solution.', a: ['sure', 'convinced', 'certain'], why: '*I’m not sure* softens disagreement.' },
            { q: 'The room is a ___ small for six people.', a: ['bit', 'little', 'tad'], why: '*A bit* or *a little* + adjective makes a criticism softer.' },
            { q: 'Could you ___ move your car? It’s blocking my drive.', a: ['possibly', 'just', 'please'], why: '*Possibly* makes a request softer.' },
            { q: 'I ___ be wrong, but I think the meeting is on Thursday.', a: ['might', 'may', 'could'], why: '*I might be wrong, but…* softens a statement you are fairly sure about.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Humour, irony and small talk',
      about: 'Recognise irony and gentle teasing, and keep small talk going.',
      art: 'monster',
      spreads: [
        [
          { t: 'text', md: 'British humour often relies on **irony**: saying the opposite of what you mean, usually in a flat voice. People also use **self-deprecation**, which means making jokes about themselves, and friends often **tease** each other gently. Teasing among friends is usually a sign of affection, not an insult.' },
          { t: 'examples', items: [
            { s: '**Lovely** weather for a barbecue!', n: 'Said in heavy rain. Irony: the weather is terrible.' },
            { s: 'Oh, **brilliant**. The train’s cancelled again.', n: 'Irony: the speaker is annoyed, not pleased.' },
            { s: 'Don’t ask me for directions. I get lost in my own street.', n: 'Self-deprecation: a joke about yourself, which makes you seem modest and friendly.' },
            { s: 'Nice of you to join us!', n: 'Said to a friend who is late. Gentle teasing: smile and apologise, or joke back.' },
          ] },
        ],
        [
          { t: 'text', md: 'Small talk keeps everyday contact friendly: with neighbours, colleagues or other parents at the school gate. Safe topics include the weather, weekend plans, travel and local news. **Question tags** such as *isn’t it?* or *wasn’t it?* invite the other person to reply. To keep the conversation going, answer and then ask something back.' },
          { t: 'dialogue', title: 'Monday morning', lines: [
            { who: 'Callum', s: 'Freezing this morning, wasn’t it?' },
            { who: 'Yuki', s: 'Freezing! I nearly didn’t get out of bed. Did you do anything nice at the weekend?' },
            { who: 'Callum', s: 'Not much. I spent most of Saturday trying to put a wardrobe together. It’s still in pieces.' },
            { who: 'Yuki', s: 'Sounds relaxing.' },
            { who: 'Callum', s: 'Oh, very. What about you?' },
            { who: 'Yuki', s: 'We went to the coast. It poured with rain the whole time, but the fish and chips made up for it.' },
            { who: 'Callum', s: 'Well, that’s the British seaside for you.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Callum thinks it was very cold this morning.', a: 't', why: '*Freezing this morning, wasn’t it?* and Yuki agrees.' },
            { q: 'Yuki really thinks building a wardrobe is relaxing.', a: 'f', why: '*Sounds relaxing* is irony, and Callum answers with irony too: *Oh, very.*' },
            { q: 'Callum has finished building the wardrobe.', a: 'f', why: '*It’s still in pieces.*' },
            { q: 'The rain completely ruined Yuki’s trip.', a: 'f', why: '*The fish and chips made up for it*: something good balanced the bad weather.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'What does the speaker really mean?', items: [
            { q: 'After a two-hour delay, a passenger says: “Well, that was quick.”', o: ['She is annoyed about the long wait.', 'She is pleased that it was fast.', 'She did not notice the delay.'], why: 'Irony: she says the opposite of what she means.' },
            { q: 'You watch your friend carry a heavy box alone. He says: “Thanks for the help!”', o: ['He is teasing you because you did not help.', 'He is grateful for your help.', 'He wants you to go away.'], why: 'Gentle, ironic teasing. Offer to help, or joke back.' },
            { q: 'You spill your coffee and say: “Typical me. I can’t even hold a cup.” What kind of humour is this?', o: ['self-deprecation', 'irony about the weather', 'teasing someone else'], why: 'You are making a joke about yourself.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a question tag.', items: [
            { q: 'Lovely day, ___ it?', a: ['isn’t'], why: 'Positive statement with *is*, negative tag: *isn’t it?*' },
            { q: 'That was a long meeting, ___ it?', a: ['wasn’t'], why: 'Past of *be*: *wasn’t it?*' },
            { q: 'You’re new here, ___ you?', a: ['aren’t'], why: '*You are* → *aren’t you?*' },
            { q: 'You didn’t have far to come, ___ you?', a: ['did'], why: 'Negative statement, positive tag: *did you?*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Did you do anything nice at the weekend?', why: 'A typical small-talk question on a Monday.' },
            { a: 'Have you lived here long?', why: 'Present perfect question: *Have* + subject + past participle.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'The rules nobody told me',
      about: 'Read what three newcomers found surprising about social life in the UK.',
      art: 'ghost',
      spreads: [
        [
          { t: 'reading', title: 'The rules nobody told me', md: 'We asked three people who have moved to the UK what surprised them most about everyday social life.\n\n**Nadia, from Egypt, a nurse in Glasgow**\n\n“The word *sorry*. People say it when you bump into them, even when it was your fault. At first I thought everyone was apologising to me all the time. Now I understand that it often just means *excuse me*, or even *I’m slightly annoyed*. I say it myself without thinking.”\n\n**Andrés, from Colombia, a software developer in Manchester**\n\n“In my first job, my manager looked at my plan and said, ‘Interesting. Perhaps we could look at a few alternatives.’ I went home happy. Two weeks later I discovered that she had hated it. I’ve learnt that when a British colleague says *perhaps* or *quite*, I should listen very carefully to what comes next.\n\nOh, and queues. Never, ever push in. Nobody will say anything, but everyone will notice.”\n\n**Mei, from Taiwan, a student in Bristol**\n\n“The invitations confused me. A classmate said, ‘You must come over some time,’ so I asked her which day. She looked a bit surprised, but we fixed a date and it was lovely. Now I know that some invitations are just a way of being friendly, but I still think it’s fine to ask. The worst that can happen is a slightly awkward pause.”' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Nadia finds people in Glasgow unfriendly.', a: 'ng', why: 'She talks about the word *sorry*, but she does not say whether people are friendly.' },
            { q: 'Nadia now uses the word *sorry* in the same way.', a: 't', why: '*I say it myself without thinking.*' },
            { q: 'Andrés’s manager liked his plan.', a: 'f', why: '*She had hated it.*' },
            { q: 'Mei’s classmate refused to fix a date.', a: 'f', why: '*We fixed a date and it was lovely.*' },
            { q: 'Mei thinks it is acceptable to ask for a day when someone says “some time”.', a: 't', why: '*I still think it’s fine to ask.*' },
            { q: 'According to Andrés, people will complain loudly if you push in.', a: 'f', why: '*Nobody will say anything, but everyone will notice.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language of the article.', items: [
            { q: 'Why did Andrés go home happy?', o: ['He did not realise that the comment was a criticism.', 'His manager had given him a promotion.', 'He had finished the plan early.'], why: '*Interesting* and *perhaps* softened the criticism so much that he missed it.' },
            { q: 'What does Mei mean by “The worst that can happen is a slightly awkward pause”?', o: ['Asking is not really risky.', 'Asking can end a friendship.', 'People always say no when you ask.'], why: 'The only bad result is a short, uncomfortable moment.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the word that softens the feeling.', items: [
            { s: 'Sometimes *sorry* really means I’m [slightly] annoyed.', why: '*Slightly* is understatement: the person may be quite annoyed.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: '“It’s not bad at all” usually means: ___', o: ['It’s good.', 'It’s terrible.', 'It’s boring.'], why: 'Understatement: saying less than you mean.' },
      { q: '“I’ll bear it in mind” often means: ___', o: ['I probably won’t do anything about it.', 'I’ll do it immediately.', 'I don’t understand.'], why: 'A polite way to avoid saying no.' },
      { q: 'Saying “Lovely weather!” in the pouring rain is an example of ___.', o: ['irony', 'self-deprecation', 'a question tag'], why: 'Irony: saying the opposite of what you mean.' },
      { q: 'Which is the softest way to disagree?', o: ['I’m not sure that’s quite right.', 'That’s wrong.', 'No, you’re mistaken.'], why: '*I’m not sure* and *quite* soften the disagreement.' },
      { q: 'With strong adjectives such as *right*, *quite* means ___.', o: ['completely', 'a little', 'not'], why: '*Quite right* means completely right.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'It’s a ___ cold in here. Could we close the window?', a: ['bit', 'little', 'tad'], why: '*A bit* softens a complaint.' },
      { q: 'You work in the hospital, ___ you?', a: ['don’t'], why: 'Positive present simple statement: *don’t you?*' },
      { q: 'Could you ___ lend me a pen?', a: ['possibly', 'just', 'please'], why: '*Possibly* makes a request softer.' },
      { q: 'With all due ___, I think we should wait.', a: ['respect'], why: '*With all due respect* introduces disagreement.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'Gentle teasing between friends is usually a sign of affection.', a: 't', why: 'Friends often tease each other in a friendly way.' },
      { q: 'Self-deprecation means making jokes about other people.', a: 'f', why: 'It means making jokes about yourself.' },
      { q: '“You must come round some time” is always a firm invitation for a fixed day.', a: 'f', why: 'Without a day or time, it is often just a friendly remark.' },
    ] },
  ],
};
