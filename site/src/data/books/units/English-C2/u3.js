// English C2, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Irony, humour and wordplay',
  goal: 'Recognise and produce irony, understatement and wordplay.',
  art: 'ghost',
  tags: { skills: ['vocabulary', 'reading', 'listening'], topics: ['irony', 'sarcasm', 'understatement', 'puns', 'idioms', 'phrasal verbs', 'humour'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Lovely weather, isn’t it?',
      about: 'Tell irony, sarcasm, understatement and exaggeration apart.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'In **verbal irony**, the speaker says the opposite of what they mean, and the listener is expected to understand: *Lovely weather, isn’t it?* said in a storm. **Sarcasm** is irony with a sharp edge, meant to wound or mock: *Oh, brilliant. Another delay.* **Understatement** says less than the truth: *The Titanic had a small accident.* **Overstatement** (hyperbole) says much more: *I’ve told you a million times.* **Irony of situation** is when events turn out the opposite of what is expected: a fire station burns down.' },
          { t: 'table', caption: 'Four ways of not saying it directly', explain: ['head', 'col0'], head: ['Type', 'What the speaker does', 'Example'], rows: [
            ['irony', 'says the opposite, gently', 'Lovely weather, isn’t it? (in a storm)'],
            ['sarcasm', 'says the opposite, to hurt', 'Oh, thanks a lot. That really helped.'],
            ['understatement', 'says less than the truth', 'It’s a bit damp. (after a flood)'],
            ['overstatement', 'says far more than the truth', 'I’m starving. I could eat a horse.'],
          ] },
        ],
        [
          { t: 'text', md: 'How do you know the speaker is not serious? Look for **signals**: the **context** (the weather clearly is awful), an exaggerated **tone** or stress (*Oh, brilliant*, said slowly), and a gap between the words and the facts. In writing, quotation marks (*my “friend” took my seat*) and phrases such as *as if* or *of course* may signal irony. In British English, understatement and irony are very common and are often a mark of humour and politeness.' },
          { t: 'tip', art: 'owl', md: 'Be careful when you use sarcasm in a second language. A native speaker can tell from your tone that you are joking; your listener may not. With people you do not know well, **irony** and **understatement** are safer than **sarcasm**, which can easily sound rude.' },
          { t: 'ex', kind: 'sort', h: 'Which type is it?', groups: ['irony or sarcasm', 'understatement', 'overstatement'], explain: ['groups'], items: [
            { s: '“Great, another meeting,” she muttered, rolling her eyes.', g: 0, why: 'The words are positive, the meaning negative: sarcasm.' },
            { s: '“It’s a bit chilly,” said the explorer in the middle of a blizzard.', g: 1, why: 'Much less than the truth.' },
            { s: '“I’ve been waiting here for ages,” he said after five minutes.', g: 2, why: 'Much more than the truth.' },
            { s: '“Lovely day,” he said, as the rain poured down.', g: 0, why: 'The words are the opposite of the facts: irony.' },
            { s: '“The test was slightly difficult,” said the student who failed it.', g: 1, why: 'A strong understatement.' },
            { s: '“This bag weighs a ton.”', g: 2, why: 'Exaggeration.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the speaker really mean?', items: [
            { q: '“Well, that went well,” said Tom, after the presentation crashed.', o: ['It went badly.', 'It went very well.', 'It was too short.'], why: 'Irony: the opposite of what he says.' },
            { q: '“It’s only a flesh wound,” said the soldier, who had lost an arm.', o: ['It is very serious.', 'It is a minor cut.', 'It does not hurt.'], why: 'Understatement.' },
            { q: '“I’m so hungry I could eat a horse.”', o: ['I am very hungry.', 'I want to eat a horse.', 'I have eaten a horse.'], why: 'Overstatement.' },
            { q: '“Thanks a lot,” said Mia, as her brother borrowed her last clean shirt.', o: ['She is annoyed.', 'She is grateful.', 'She is surprised.'], why: 'Sarcasm.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the term with its meaning.', pairs: [
            ['irony', 'saying the opposite of what you mean'],
            ['sarcasm', 'irony meant to hurt or mock'],
            ['understatement', 'saying less than the truth'],
            ['hyperbole', 'saying much more than the truth'],
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite as an understatement.', items: [
            { q: 'The storm destroyed the house completely.', cue: 'The storm caused', a: ['The storm caused a bit of damage to the house.', 'The storm caused some damage to the house.', 'The storm caused a little damage to the house.'], why: 'An understatement says less than the truth.' },
            { q: 'It was the worst meal I’ve ever had.', cue: 'It wasn’t', a: ['It wasn’t the best meal I’ve ever had.', 'It wasn’t exactly the best meal I’ve ever had.', 'It wasn’t quite the best meal I’ve ever had.'], why: 'Negating the opposite is a common British understatement.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with one word from the lesson.', items: [
            { q: 'Saying “Lovely weather!” in the middle of a storm is an example of ___.', a: ['irony'], why: 'The words are the opposite of the facts.' },
            { q: 'Saying “I could eat a horse” when you are hungry is an example of ___.', a: ['overstatement', 'hyperbole', 'exaggeration'], why: 'It says far more than the truth.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Puns and double meanings',
      about: 'Understand how wordplay creates humour in jokes, adverts and headlines.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'A **pun** plays on a word that has two meanings, or two words that sound alike. *I used to be a banker, but I lost interest.* (**interest** = curiosity and money). *Time flies like an arrow; fruit flies like a banana.* (**flies** is a verb and a noun). Headlines and adverts love puns: *Council’s new bin plan is rubbish* (**rubbish** = waste and nonsense). A bakery might use *We knead the dough* (**knead** and **need** sound the same). You must know both meanings to enjoy the joke.' },
          { t: 'table', caption: 'How puns work', explain: ['head', 'col0'], head: ['Technique', 'Example', 'The two meanings'], rows: [
            ['one word, two meanings', 'I lost interest in banking.', 'curiosity / money charged'],
            ['two words that sound alike', 'We knead the dough.', 'knead / need'],
            ['a word that fits both contexts', 'The bin plan is rubbish.', 'waste / very bad'],
            ['a changed idiom', 'Where there’s a will, there’s a weigh. (gym)', 'will / weigh'],
          ] },
        ],
        [
          { t: 'text', md: 'Twisting an **idiom** is another classic. The writer changes one word of a well-known phrase so that it has a new meaning in the context: a gym might write *No pain, no gain*, but a dentist’s advert might say *No pain, no… drain*. The pleasure comes from recognising the original. In an exam, you will often be asked to explain the double meaning.' },
          { t: 'tip', art: 'owl', md: 'To explain a pun, name **both** meanings and say how the context supports each. Example: *“We knead the dough” is a pun on **need** (the shop wants money) and **knead** (the baker works the dough).*' },
          { t: 'ex', kind: 'choice', h: 'What is the double meaning?', items: [
            { q: '“I used to be a banker, but I lost interest.” The pun is on…', o: ['interest', 'banker', 'lost'], why: '*Interest* = curiosity and money.' },
            { q: 'A headline: “Local team’s new striker is on target.” The pun is on…', o: ['target (aim and goal)', 'local', 'new'], why: '*On target* literally and as a football idea.' },
            { q: 'A shop sign: “We’ve got a lot of sole.” The pun is on…', o: ['sole and soul', 'shop and sign', 'lot and lock'], why: '*Sole* (fish or shoe) sounds like *soul*.' },
            { q: '“The bicycle fell over because it was two tired.” The pun is on…', o: ['two tired and too tired', 'bicycle and fell', 'over and under'], why: '*Two tyred* (two tyres) sounds like *too tired*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word with its two meanings.', pairs: [
            ['rubbish', 'waste / nonsense'],
            ['interest', 'curiosity / money from a bank'],
            ['flies', 'travels through the air / insects'],
            ['kneads', 'works dough / needs (sounds alike)'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the pun with the missing word.', items: [
            { q: 'A bakery sign: “We ___ the dough.” (sounds like *need*)', a: ['knead'], why: '*Knead* and *need* sound the same.' },
            { q: 'A joke: “I used to be a banker, but I lost ___.”', a: ['interest'], why: '*Interest* has two meanings.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Explain the pun in one sentence, using the word given.', items: [
            { q: '“The council’s bin plan is rubbish.”', cue: 'Rubbish means', a: ['Rubbish means both waste and very bad.', 'Rubbish means both waste and nonsense.', 'Rubbish means waste and also very bad.'], why: 'Name both meanings.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Bite the bullet',
      about: 'Learn less common idioms and phrasal verbs in context.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'At C2, you meet idioms and phrasal verbs that are not in a basic list. **Bite the bullet** means to face something unpleasant bravely: *I decided to bite the bullet and call the dentist.* **Grasp the nettle** means to deal with a difficult problem directly (British). **Hold sway** means to have power or influence: *Old traditions still hold sway in the village.* **Clutch at straws** means to try anything in a desperate situation. **A storm in a teacup** is a big fuss about something small (British). **The elephant in the room** is an obvious problem nobody mentions.' },
          { t: 'table', caption: 'Idioms in context', explain: ['head', 'col0'], head: ['Idiom', 'Meaning', 'Example'], rows: [
            ['bite the bullet', 'face something unpleasant bravely', 'I decided to bite the bullet and call the dentist.'],
            ['grasp the nettle', 'deal with a difficult problem directly', 'The government must grasp the nettle of pension reform.'],
            ['hold sway', 'have power or influence', 'Old traditions still hold sway in the village.'],
            ['clutch at straws', 'try anything in a desperate situation', 'With no other hope, they clutched at straws.'],
            ['a storm in a teacup', 'a big fuss about something small', 'The argument was a storm in a teacup.'],
            ['the elephant in the room', 'an obvious problem nobody mentions', 'Money was the elephant in the room.'],
          ] },
        ],
        [
          { t: 'text', md: 'Phrasal verbs also have less common forms. **Tide someone over** means to help them through a short, difficult period: *A small loan will tide me over until payday.* **Wriggle out of** means to avoid a duty cleverly: *He tried to wriggle out of the washing-up.* **Fall foul of** means to get into trouble with: *She fell foul of the tax authorities.* **Steer clear of** means to avoid: *Steer clear of the city centre on Saturdays.* **Rub someone up the wrong way** means to annoy them without intending to.' },
          { t: 'tip', art: 'owl', md: 'Use idioms **in moderation** and in the right register. A text packed with idioms sounds forced. Most of these are informal or neutral; avoid them in formal reports. Check whether an idiom is **British** (*grasp the nettle*, *storm in a teacup*) or **American** before using it in front of an examiner.' },
          { t: 'ex', kind: 'match', h: 'Match the expression with its meaning.', pairs: [
            ['tide someone over', 'help for a short, difficult time'],
            ['wriggle out of', 'avoid a duty cleverly'],
            ['fall foul of', 'get into trouble with'],
            ['steer clear of', 'avoid'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best expression.', items: [
            { q: 'I knew I had to ___ and tell my boss about the mistake.', o: ['bite the bullet', 'clutch at straws', 'hold sway'], why: '*Bite the bullet*: face something unpleasant.' },
            { q: 'The row about the biscuits was a storm in a ___.', o: ['teacup', 'bottle', 'bucket'], why: '*A storm in a teacup*.' },
            { q: 'A small loan will ___ me over until payday.', o: ['tide', 'bring', 'carry'], why: '*Tide over*.' },
            { q: 'She ___ foul of the council when she built the fence without permission.', o: ['fell', 'ran', 'came'], why: '*Fall foul of*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the idiom.', items: [
            { q: 'Everyone knew about the debts, but nobody mentioned the elephant in the ___.', a: ['room'], why: '*The elephant in the room*.' },
            { q: 'With no other hope, they began to clutch at ___.', a: ['straws'], why: '*Clutch at straws*.' },
            { q: 'It’s time the government grasped the ___ of pension reform.', a: ['nettle'], why: '*Grasp the nettle*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite with the idiom given.', items: [
            { q: 'He tried to avoid the washing-up by saying he was busy.', cue: 'wriggle', a: ['He tried to wriggle out of the washing-up by saying he was busy.'], why: '*Wriggle out of* + noun.' },
            { q: 'Old customs still have great influence in the village.', cue: 'hold', a: ['Old customs still hold sway in the village.'], why: '*Hold sway*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the wrong word.', items: [
            { s: 'I decided to [bite the bulb] and ask for a pay rise.', a: ['bite the bullet'], why: 'The idiom is *bite the bullet*.' },
            { s: 'The argument was just a [storm in a bottle].', a: ['storm in a teacup'], why: 'The idiom is *a storm in a teacup*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'My war with the self-checkout',
      about: 'Read a humorous column and spot irony, understatement and wordplay.',
      art: 'cat',
      spreads: [
        [
          { t: 'reading', title: 'My war with the self-checkout', md: 'There is a machine at my local supermarket that has declared war on me. It is called the self-checkout, which suggests a certain independence on my part. In practice, it is more of a negotiation, and I am losing.\n\n“Unexpected item in the bagging area,” it announces, in the voice of a disappointed headteacher. The item is a banana. I have, as far as I can tell, been carrying it for several years. I remove it; the machine is satisfied; I put it back; the machine is not. A young assistant glides over, taps a screen and says, “It does that.” I would like it noted that this is not a comfort.\n\nI have considered grasping the nettle and simply queuing at a till with a human being, but that feels like admitting defeat. Besides, I have heard that one of those is a storm in a teacup, waiting to happen: the queues are long, the conversation is short, and I always end up behind a man who is paying in coins.\n\nSo I persevere. Yesterday, I managed to buy a loaf of bread, a lettuce and, by accident, somebody else’s receipt. It was, to put it mildly, a small victory. Tomorrow I shall bite the bullet and try the scales again. The banana, I am told, is looking forward to it.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The writer enjoys using the self-checkout.', a: 'f', why: 'It has “declared war” on the writer, who is “losing”.' },
            { q: 'The machine objects to a banana in the bagging area.', a: 't', why: '“Unexpected item in the bagging area… The item is a banana.”' },
            { q: 'The assistant comforts the writer.', a: 'f', why: '“I would like it noted that this is not a comfort.”' },
            { q: 'The writer prefers queuing at a till with a human being.', a: 'f', why: 'It “feels like admitting defeat”.' },
            { q: 'The writer actually bought somebody else’s shopping.', a: 'f', why: 'Only “somebody else’s receipt” by accident.' },
            { q: 'The writer lives near a large supermarket in a city.', a: 'ng', why: 'The text says only “my local supermarket”.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: '“I have, as far as I can tell, been carrying it for several years.” This is…', o: ['an exaggeration for comic effect', 'a plain fact', 'an understatement'], why: 'Overstatement for humour.' },
            { q: '“It was, to put it mildly, a small victory.” The phrase *to put it mildly* signals…', o: ['an understatement', 'an overstatement', 'a pun'], why: 'The victory was tiny or absurd.' },
            { q: 'What is the effect of “in the voice of a disappointed headteacher”?', o: ['It gives the machine a human, scolding personality.', 'It shows the machine is broken.', 'It describes the shop assistant.'], why: 'A comic comparison that personifies the machine.' },
            { q: '“The banana, I am told, is looking forward to it.” This is…', o: ['humorous personification', 'a literal report', 'a euphemism'], why: 'The writer gives the banana a feeling.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the idioms.', items: [
            { s: 'I have considered [grasping the nettle] and simply queuing at a till.', why: 'Deal with a problem directly.' },
            { s: 'Tomorrow I shall [bite the bullet] and try the scales again.', why: 'Face something unpleasant.' },
            { s: 'I have heard that one of those is [a storm in a teacup], waiting to happen.', why: 'A twisted idiom used humorously.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'Yesterday, I managed to buy a loaf of bread, a lettuce and, by accident, somebody else’s ___.', a: ['receipt'], why: 'The comic detail at the end.' },
            { q: '“Unexpected item in the bagging ___,” the machine announces.', a: ['area'], why: 'The machine’s phrase.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'What does the speaker really mean?', items: [
      { q: '“Well, that went well,” said Tom, after the presentation crashed.', o: ['It went badly.', 'It went very well.', 'It was too short.'], why: 'Irony.' },
      { q: '“It’s a bit chilly,” said the explorer in a blizzard.', o: ['It is extremely cold.', 'It is slightly cool.', 'It is warm.'], why: 'Understatement.' },
      { q: '“I’ve told you a million times!”', o: ['I have told you many times.', 'I have told you exactly a million times.', 'I have never told you.'], why: 'Overstatement.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the idiom with its meaning.', pairs: [
      ['bite the bullet', 'face something unpleasant bravely'],
      ['clutch at straws', 'try anything in a desperate situation'],
      ['hold sway', 'have power or influence'],
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'A small loan will tide me ___ until payday.', a: ['over'], why: '*Tide over*.' },
      { q: 'She tried to wriggle ___ of the washing-up.', a: ['out'], why: '*Wriggle out of*.' },
      { q: 'The argument was a storm in a ___.', a: ['teacup'], why: 'The idiom.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'What is the double meaning?', items: [
      { q: '“I used to be a banker, but I lost interest.” The pun is on…', o: ['interest', 'banker', 'lost'], why: '*Interest* = curiosity and money.' },
      { q: 'A sign: “We knead the dough.” The pun is on…', o: ['knead and need', 'dough and bread', 'we and the'], why: '*Knead* sounds like *need*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'I decided to [bite the bulb] and call the dentist.', a: ['bite the bullet'], why: 'The idiom is *bite the bullet*.' },
      { s: 'He fell [foot] of the tax authorities.', a: ['foul'], why: '*Fall foul of*.' },
    ] },
  ],
};
