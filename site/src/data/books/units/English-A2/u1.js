// English A2, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Me and my world',
  goal: 'Talk about yourself, your routines and the people around you.',
  art: 'sun',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['present-simple', 'present-continuous', 'adverbs-of-frequency', 'describing-people', 'have-got'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Every day',
      about: 'Talk about routines and facts with the present simple, and say how often with always, usually, sometimes and never.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'Use the **present simple** for things you do again and again (routines), and for facts that are always true.' },
          { t: 'examples', items: [
            { s: 'I **get up** at seven every day.', n: 'A routine: I do it every day.' },
            { s: 'My brother **works** in a bank.', n: 'A fact about him. With *he*, *she* and *it*, the verb ends in *-s*.' },
            { s: 'We **don’t eat** meat.', n: 'Negative: *don’t* + the verb.' },
            { s: '**Does** your sister **live** near you?', n: 'Question with *he*, *she*, *it*: *does* + the verb, without *-s*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'The present simple', explain: ['head'], quiz: true, head: ['', 'Positive', 'Negative', 'Question'], rows: [
            ['I / you / we / they', 'I work', 'I don’t work', 'Do you work?'],
            ['he / she / it', 'she works', 'she doesn’t work', 'Does she work?'],
          ] },
          { t: 'text', md: 'Spelling with *he*, *she*, *it*: most verbs add *-s* (*works*, *lives*). Verbs that end in *-ch*, *-sh*, *-s*, *-x* or *-o* add *-es* (*watches*, *finishes*, *goes*, *does*). A consonant + *-y* changes to *-ies* (*study* → *studies*). *Have* changes to *has*.' },
          { t: 'tip', art: 'owl', md: 'After *does* and *doesn’t*, the verb has no *-s*. Say *Does he play?*, not *Does he plays?*' },
        ],
        [
          { t: 'text', md: '**Adverbs of frequency** say how often you do something.' },
          { t: 'table', caption: 'How often?', explain: ['col1'], head: ['Adverb', 'How often'], rows: [
            ['always', 'every time'],
            ['usually', 'almost every time'],
            ['often', 'many times'],
            ['sometimes', 'some of the time'],
            ['never', 'not at any time'],
          ] },
          { t: 'text', md: 'They go **before** the main verb: *I **often** walk to work.* But they go **after** *am*, *is* and *are*: *She is **always** happy.*' },
          { t: 'tip', art: 'owl', md: '*Never* is already negative. Say *I never drink coffee*, not *I don’t never drink coffee*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'My mother ___ in a hospital.', o: ['works', 'work', 'working'], why: '*My mother* is *she*, so the verb ends in *-s*.' },
            { q: 'We ___ to the gym on Mondays.', o: ['go', 'goes', 'are go'], why: 'With *we*, the verb has no *-s*.' },
            { q: 'Tomás ___ like spicy food.', o: ['doesn’t', 'don’t', 'isn’t'], why: '*Tomás* is *he*, so the negative is *doesn’t* + the verb.' },
            { q: '___ your children go to school by bus?', o: ['Do', 'Does', 'Are'], why: '*Your children* is *they*, so the question starts with *Do*.' },
            { q: 'Does your husband ___ English?', o: ['speak', 'speaks', 'speaking'], why: 'After *does*, the verb has no *-s*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the present simple of the verb in brackets.', items: [
            { q: 'Li Wei ___ (study) medicine at university.', a: ['studies'], why: 'Consonant + *-y* changes to *-ies*: *studies*.' },
            { q: 'My dad ___ (watch) the news every evening.', a: ['watches'], why: 'Verbs that end in *-ch* add *-es*.' },
            { q: 'Olga ___ (have) two brothers.', a: ['has'], why: 'With *he*, *she*, *it*, *have* changes to *has*.' },
            { q: 'I ___ (not / drive) to work. I take the train.', a: ['don’t drive', 'do not drive'], why: 'Negative with *I*: *don’t* + the verb.' },
            { q: 'The shop ___ (close) at six o’clock.', a: ['closes'], why: '*The shop* is *it*, so add *-s*: *closes*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'She never drinks coffee.', why: '*Never* goes before the main verb, *drinks*.' },
            { a: 'My boss is always busy.', why: 'With *is*, the adverb goes after it: *is always*.' },
            { a: 'We always eat dinner together.', why: '*Always* goes before the main verb, *eat*.' },
            { a: 'Does she always walk to work?', why: 'In a question the adverb goes after the subject, before the main verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Right now',
      about: 'Talk about what is happening now with the present continuous, and choose between the two present tenses.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Use the **present continuous** for things that are happening **now**, at the moment of speaking, or around now. Make it with *am*, *is* or *are* + the verb with *-ing*.' },
          { t: 'examples', items: [
            { s: 'I**’m cooking** dinner. Can I call you later?', n: 'I am doing it now.' },
            { s: 'Sara **is studying** for her exams this week.', n: 'Around now: not at this exact moment, but this week.' },
            { s: 'They **aren’t watching** TV.', n: 'Negative: *aren’t* + verb with *-ing*.' },
            { s: '**Are** you **listening** to me?', n: 'Question: *are* goes before the subject.' },
          ] },
        ],
        [
          { t: 'table', caption: 'The present continuous', explain: ['head'], quiz: true, head: ['', 'Positive', 'Negative', 'Question'], rows: [
            ['I', 'I’m working', 'I’m not working', 'Am I working?'],
            ['he / she / it', 'she’s working', 'she isn’t working', 'Is she working?'],
            ['you / we / they', 'they’re working', 'they aren’t working', 'Are they working?'],
          ] },
          { t: 'text', md: 'Spelling of *-ing*: most verbs just add *-ing* (*read* → *reading*). A verb that ends in *-e* loses the *-e* (*make* → *making*). Short verbs with one vowel and one consonant at the end double the consonant (*run* → *running*, *sit* → *sitting*).' },
        ],
        [
          { t: 'text', md: 'Present simple or present continuous? The present simple is for routines and facts: *every day*, *usually*, *on Fridays*. The present continuous is for now: *now*, *at the moment*, *today*, *this week*.' },
          { t: 'dialogue', title: 'A phone call', lines: [
            { who: 'Nadia', s: 'Hi Ben! What are you doing?' },
            { who: 'Ben', s: 'I’m sitting on the train. I’m going to a meeting in Leeds.' },
            { who: 'Nadia', s: 'Really? You usually work from home on Thursdays.' },
            { who: 'Ben', s: 'I know, but this week is different. My manager is visiting the Leeds office.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Some verbs are not usually in the continuous form: *like*, *love*, *want*, *know*, *need*, *understand*. Say *I want a coffee now*, not *I’m wanting a coffee*.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the present continuous of the verb in brackets.', items: [
            { q: 'Be quiet, please. The baby ___ (sleep).', a: ['is sleeping', '’s sleeping'], why: '*The baby* is *it*: *is* + *sleeping*.' },
            { q: 'I ___ (write) an email to my teacher.', a: ['am writing', '’m writing'], why: '*Write* ends in *-e*, so it loses the *-e*: *writing*.' },
            { q: 'Look! Those children ___ (run) in the rain.', a: ['are running', '’re running'], why: '*Run* doubles the *n*: *running*.' },
            { q: 'Karim ___ (not / work) today. He is ill.', a: ['isn’t working', 'is not working', '’s not working'], why: 'Negative: *isn’t* + verb with *-ing*.' },
            { q: '___ (you / wait) for the bus?', a: ['Are you waiting'], why: 'Question: *Are* + *you* + verb with *-ing*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Present simple or present continuous? Choose the correct form.', items: [
            { q: 'I ___ my teeth twice a day.', o: ['brush', 'am brushing', 'brushing'], why: '*Twice a day* is a routine, so the present simple.' },
            { q: 'Shh! I ___ to the radio.', o: ['’m listening', 'listen', 'listens'], why: 'It is happening now, so the present continuous.' },
            { q: 'Water ___ at 100 degrees.', o: ['boils', 'is boiling', 'boil'], why: 'A fact that is always true: present simple.' },
            { q: 'Where is Anna? She ___ a shower.', o: ['’s having', 'has', 'have'], why: 'She is doing it now: present continuous.' },
            { q: 'My parents usually ___ in July.', o: ['go on holiday', 'are going on holiday', 'goes on holiday'], why: '*Usually* means a routine: present simple, and *parents* is *they*.' },
            { q: 'I ___ what you mean.', o: ['understand', '’m understanding', 'understanding'], why: '*Understand* is not usually in the continuous form.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap every verb in the present continuous.', items: [
            { s: 'I usually take the bus, but today I [am walking] to work.', why: '*Today* is about now, so *am walking*. *Take* is a routine.' },
            { s: 'Raj works in a café, but this month he [is helping] in his uncle’s shop.', why: '*This month* is around now: *is helping*. *Works* is a fact.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'What are they like?',
      about: 'Describe how people look and what they are like, with adjectives and have got.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To describe how a person looks, we often talk about their height, build, age and hair.' },
          { t: 'table', caption: 'Appearance', explain: ['head'], quiz: true, head: ['Word', 'Example'], rows: [
            ['tall / short', 'My brother is tall, but I’m short.'],
            ['slim', 'She is slim and very fit.'],
            ['young / old', 'Our neighbour is quite old. He is ninety.'],
            ['long / short hair', 'Ana has got long hair.'],
            ['curly / straight hair', 'He’s got curly hair.'],
            ['dark / fair hair', 'The twins have got fair hair.'],
            ['a beard', 'My uncle has got a grey beard.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Questions about people: *What does she look like?* asks about appearance. *What is she like?* asks about character.' },
        ],
        [
          { t: 'text', md: 'These adjectives describe character: what a person is like.' },
          { t: 'table', caption: 'Character', explain: ['head', 'col1'], quiz: true, head: ['Adjective', 'What it means'], rows: [
            ['friendly', 'nice to people, easy to talk to'],
            ['shy', 'a bit afraid to talk to new people'],
            ['funny', 'makes people laugh'],
            ['kind', 'helps people and thinks about them'],
            ['hard-working', 'works a lot and does it well'],
            ['lazy', 'does not like to work'],
            ['patient', 'can wait and does not get angry'],
            ['talkative', 'talks a lot'],
          ] },
        ],
        [
          { t: 'text', md: 'In British English we often use **have got** to talk about appearance, family and things we own. It means the same as *have*.' },
          { t: 'table', caption: 'Have got', explain: ['head'], quiz: true, head: ['', 'Positive', 'Negative', 'Question'], rows: [
            ['I / you / we / they', 'I’ve got', 'I haven’t got', 'Have you got…?'],
            ['he / she / it', 'she’s got', 'she hasn’t got', 'Has she got…?'],
          ] },
          { t: 'examples', items: [
            { s: 'She**’s got** blue eyes.', n: '*She’s got* = *she has got*.' },
            { s: '**Have** you **got** a brother? Yes, I **have**.', n: 'Short answer: *Yes, I have* or *No, I haven’t*. We do not repeat *got*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Use *be* for age: *She is thirty*, not *She has got thirty years*.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the opposites.', pairs: [
            ['tall', 'short'],
            ['young', 'old'],
            ['curly hair', 'straight hair'],
            ['fair hair', 'dark hair'],
            ['lazy', 'hard-working'],
            ['quiet', 'talkative'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best adjective.', items: [
            { q: 'Ellie always helps her old neighbours. She is very ___.', o: ['kind', 'lazy', 'shy'], why: 'A person who helps others is *kind*.' },
            { q: 'My teacher tells jokes in every class. He is really ___.', o: ['funny', 'patient', 'tall'], why: 'A person who makes people laugh is *funny*.' },
            { q: 'Ji-ho never speaks at parties. He is a bit ___.', o: ['shy', 'talkative', 'friendly'], why: 'A person who does not like talking to new people is *shy*.' },
            { q: 'Our doctor explains everything three times and never gets angry. She is very ___.', o: ['patient', 'lazy', 'funny'], why: 'A person who can wait and does not get angry is *patient*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the correct form of have got.', items: [
            { q: 'My sister ___ green eyes.', a: ['has got', '’s got'], why: '*My sister* is *she*: *has got*.' },
            { q: 'We ___ a garden, but we’ve got a big balcony.', a: ['haven’t got', 'have not got'], why: 'Negative with *we*: *haven’t got*.' },
            { q: '___ your father got a beard?', a: ['Has'], why: '*Your father* is *he*: *Has* … *got*?' },
            { q: 'I ___ two cousins in Canada.', a: ['have got', '’ve got'], why: 'With *I*: *have got*.' },
            { q: 'Have your neighbours got a dog? No, they ___.', a: ['haven’t', 'have not'], why: 'Short answer: *No, they haven’t*. We do not repeat *got*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A week in my life',
      about: 'Read a short profile of a person and their week.',
      art: 'dog',
      spreads: [
        [
          { t: 'reading', title: 'Meet Amara', md: 'Amara Okafor is thirty-four and she lives in Bristol with her husband and their son, Theo. She has got short curly hair and a big smile. Her friends say she is friendly and very patient.\n\nAmara is a nurse at a children’s hospital. She usually works from Monday to Thursday. She gets up at six, and she always cycles to work, even in the rain. On Fridays she never works. She takes Theo to the park and they often have lunch at her mother’s flat.\n\nThis week is different. Amara is doing a course in Manchester, so she is staying in a small hotel. Her husband is looking after Theo at home. “I’m learning a lot,” she says, “but I miss my family and my bike!”' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Amara has got long hair.', a: 'f', why: 'She has got short curly hair.' },
            { q: 'Amara usually works four days a week.', a: 't', why: 'She usually works from Monday to Thursday.' },
            { q: 'Amara sometimes drives to work.', a: 'f', why: 'She always cycles to work.' },
            { q: 'Amara’s mother lives in Bristol.', a: 'ng', why: 'They have lunch at her mother’s flat, but the text does not say where it is.' },
            { q: 'This week Amara is in Manchester.', a: 't', why: 'She is doing a course in Manchester.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the verbs in the text.', items: [
            { q: '“She always cycles to work.” Why the present simple?', o: ['It is a routine.', 'It is happening now.', 'It happened in the past.'], why: '*Always* shows a routine, so the present simple.' },
            { q: '“She is staying in a small hotel.” Why the present continuous?', o: ['It is happening around now, only this week.', 'She stays there every week.', 'It is a fact that is always true.'], why: '*This week is different*: it is only for now.' },
            { q: 'Who is looking after Theo this week?', o: ['His father.', 'His grandmother.', 'Amara.'], why: '“Her husband is looking after Theo at home.”' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the adverb of frequency in each sentence.', items: [
            { s: 'She [usually] works from Monday to Thursday.', why: '*Usually* says how often. It goes before the main verb.' },
            { s: 'They [often] have lunch at her mother’s flat.', why: '*Often* says how often. It goes before the main verb, *have*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'My brother ___ in a restaurant at weekends.', o: ['works', 'work', 'is work'], why: 'A routine with *he*: present simple with *-s*.' },
      { q: 'Where’s Paolo? He ___ in the garden.', o: ['’s playing', 'plays', 'play'], why: 'It is happening now: present continuous.' },
      { q: '___ she got any children?', o: ['Has', 'Does', 'Is'], why: '*Have got* question with *she*: *Has she got…?*' },
      { q: 'I ___ late for work. I’m always on time.', o: ['am never', 'never am', 'don’t never'], why: 'The adverb goes after *am*, and *never* is already negative.' },
      { q: 'What does your new boss look ___?', o: ['like', 'as', 'how'], why: '*What does he look like?* asks about appearance.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with the correct form of the verb in brackets.', items: [
      { q: 'Marta ___ (finish) work at five every day.', a: ['finishes'], why: 'A routine with *she*. *Finish* ends in *-sh*, so add *-es*.' },
      { q: 'We ___ (not / watch) TV at the moment. We’re reading.', a: ['aren’t watching', 'are not watching', '’re not watching'], why: '*At the moment*: present continuous, negative.' },
      { q: '___ (your son / like) football?', a: ['Does your son like'], why: 'Present simple question with *he*: *Does* + subject + verb.' },
      { q: 'They ___ (have got) a small flat near the station.', a: ['have got', '’ve got'], why: 'With *they*: *have got*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'He is always very friendly.', why: 'The adverb goes after *is*.' },
      { a: 'What are you doing now?', why: 'Question word + *are* + *you* + verb with *-ing*.' },
      { a: 'My sister has got blue eyes.', why: 'Subject + *has got* + description.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['She is twenty-five.', 'She has twenty-five years.', 'She has got twenty-five years.'], why: 'Use *be* for age.' },
      { q: '', o: ['I need a new phone.', 'I’m needing a new phone.', 'I needing a new phone.'], why: '*Need* is not usually in the continuous form.' },
      { q: '', o: ['Does he speak French?', 'Does he speaks French?', 'Do he speak French?'], why: 'After *does*, the verb has no *-s*.' },
    ] },
  ],
};
