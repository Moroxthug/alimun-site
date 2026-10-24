// English A2, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Health and the body',
  goal: 'Say what is wrong, understand simple advice and make an appointment.',
  art: 'cactus',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['body', 'illness', 'should', 'have-to', 'doctor'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'What’s the matter?',
      about: 'Learn the parts of the body and say what is wrong.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Here are some important words for the body. Some have an irregular plural: one *tooth*, two **teeth**; one *foot*, two **feet**.' },
          { t: 'table', caption: 'The body', explain: ['head'], quiz: true, head: ['Word', 'Example'], rows: [
            ['head', 'She’s wearing a hat on her head.'],
            ['eye / ear / nose / mouth', 'Close your eyes and listen.'],
            ['tooth (teeth)', 'Brush your teeth twice a day.'],
            ['throat', 'My throat is dry.'],
            ['neck / shoulder', 'He carries his bag on one shoulder.'],
            ['arm / hand', 'Raise your hand if you know the answer.'],
            ['back', 'Sit up straight. It’s good for your back.'],
            ['stomach', 'I can’t eat any more. My stomach is full.'],
            ['leg / knee', 'Bend your knees when you lift something.'],
            ['foot (feet)', 'My feet are cold.'],
          ] },
        ],
        [
          { t: 'text', md: 'To ask about a problem, say **What’s the matter?** or **What’s wrong?** To answer, use *I’ve got* or *I have* + a problem, or say that a part of your body **hurts**.' },
          { t: 'table', caption: 'Common problems', explain: ['head'], quiz: true, head: ['Problem', 'How you feel'], rows: [
            ['a headache', 'My head hurts.'],
            ['a stomach ache', 'My stomach hurts.'],
            ['a sore throat', 'My throat hurts.'],
            ['a cough', 'I can’t stop coughing.'],
            ['a cold', 'I’m sneezing and my nose is running.'],
            ['a temperature', 'My body is very hot.'],
          ] },
          { t: 'tip', art: 'owl', md: 'One part of the body takes *hurts*: *My back hurts.* Two or more take *hurt*: *My feet hurt.*' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the problem and what the person says.', pairs: [
            ['a sore throat', 'It hurts when I eat or drink.'],
            ['a headache', 'My head hurts.'],
            ['a stomach ache', 'I ate too much and now my stomach hurts.'],
            ['a temperature', 'I feel very hot.'],
            ['a cough', 'I can’t stop coughing.'],
            ['a cold', 'I’m sneezing and my nose is running.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct word.', items: [
            { q: 'I walked for six hours and now my feet ___.', o: ['hurt', 'hurts', 'is hurting'], why: '*Feet* is plural, so *hurt*.' },
            { q: 'She’s got a ___ throat.', o: ['sore', 'hurt', 'pain'], why: 'We say *a sore throat*.' },
            { q: 'The dentist checked my ___.', o: ['teeth', 'tooths', 'teeths'], why: 'The plural of *tooth* is *teeth*.' },
            { q: 'I’ve got ___ headache.', o: ['a', 'an', 'some'], why: '*Headache* is countable and starts with a consonant sound: *a headache*.' },
            { q: 'You look ill. What’s the ___?', o: ['matter', 'pain', 'ache'], why: 'The question is *What’s the matter?*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the parts of the body.', items: [
            { s: 'After the football match, my [legs] were tired and my [knee] was very sore.', why: '*Legs* and *knee* are parts of the body.' },
            { s: 'I hurt my [back] when I carried the boxes, and now my [shoulders] hurt too.', why: '*Back* and *shoulders* are parts of the body.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'You should rest',
      about: 'Give and understand advice with *should* and *shouldn’t*.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To give advice, use **should** + the base form of a verb. The negative is **shouldn’t** (*should not*). *Should* is the same for every person: no *-s*, and no *to* after it.' },
          { t: 'examples', items: [
            { s: 'You **should drink** a lot of water.', n: 'This is a good idea.' },
            { s: 'He **shouldn’t go** to work today.', n: 'This is not a good idea. *He shouldn’t*, not *He doesn’t should*.' },
            { s: '**Should** I **call** a doctor?', n: 'Question: *Should* + person + base form.' },
            { s: 'I **think** you **should** rest.', n: '*I think* makes the advice softer and more polite.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Should', explain: ['head', 'col0'], quiz: true, head: ['', 'Example'], rows: [
            ['Positive', 'You should stay in bed.'],
            ['Negative', 'You shouldn’t go out.'],
            ['Question', 'Should I take a painkiller?'],
            ['Short answers', 'Yes, you should. / No, you shouldn’t.'],
          ] },
          { t: 'tip', art: 'owl', md: '*You should to rest* and *She shoulds rest* are mistakes. With *think*, we usually say *I don’t think you should go*. It sounds more natural than *I think you shouldn’t go*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct words.', items: [
            { q: 'You look tired. You ___ go to bed early.', o: ['should', 'shouldn’t', 'should to'], why: 'Going to bed early is a good idea when you are tired: *should* + base form.' },
            { q: 'He ___ eat so many sweets. They’re bad for his teeth.', o: ['shouldn’t', 'should', 'shoulds'], why: 'Sweets are bad for him, so the advice is negative: *shouldn’t*.' },
            { q: '___ I stay at home tomorrow?', o: ['Should', 'Do', 'Am'], why: 'Asking for advice: *Should I…?*' },
            { q: 'She should ___ a doctor.', o: ['see', 'sees', 'to see'], why: 'After *should*, use the base form with no *to*.' },
            { q: 'I don’t think you ___ drive. You’ve got a temperature.', o: ['should', 'shouldn’t', 'to'], why: 'After *I don’t think*, use *should*: the negative is already in *don’t*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with *should* or *shouldn’t* and the verb in brackets.', items: [
            { q: 'You’ve got a bad cough. You ___ (not / smoke).', a: ['shouldn’t smoke', 'should not smoke'], why: 'Smoking is bad for a cough: *shouldn’t* + base form.' },
            { q: 'Mina has got a temperature. She ___ (stay) in bed.', a: ['should stay'], why: 'Good advice: *should* + base form, with no *-s*.' },
            { q: 'It’s very hot today. We ___ (drink) a lot of water.', a: ['should drink'], why: '*Should* + base form.' },
            { q: 'Your eyes are tired. You ___ (not / look) at your screen all evening.', a: ['shouldn’t look', 'should not look'], why: 'Negative advice: *shouldn’t* + base form.' },
            { q: '___ (I / take) these tablets before or after food?', a: ['Should I take'], why: 'Question: *Should* + *I* + base form.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'You should go to the doctor.', why: 'Person + *should* + base form.' },
            { a: 'What should I do?', why: 'Question word + *should* + person + verb.' },
            { a: 'You shouldn’t carry heavy bags.', why: 'Person + *shouldn’t* + base form.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'At the doctor’s',
      about: 'Use *have to* and *don’t have to*, make an appointment and buy medicine.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'Use **have to** + verb when something is necessary, often because of a rule or because another person says so. With *he*, *she* and *it*, use **has to**.\n\nUse **don’t have to** when something is not necessary. You can do it, but you can also choose not to.' },
          { t: 'table', caption: 'Have to', explain: ['head'], quiz: true, head: ['', 'Positive', 'Negative', 'Question'], rows: [
            ['I / you / we / they', 'I have to wait', 'I don’t have to pay', 'Do I have to wait?'],
            ['he / she / it', 'she has to wait', 'she doesn’t have to pay', 'Does she have to wait?'],
          ] },
          { t: 'examples', items: [
            { s: 'You **have to** fill in this form.', n: 'It is necessary. It is the rule.' },
            { s: 'You **don’t have to** come early.', n: 'It is not necessary, but you can if you want.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Making an appointment', lines: [
            { who: 'Receptionist', s: 'Good morning, Park Road Health Centre.' },
            { who: 'Omar', s: 'Hello. I’d like to make an appointment, please. I’ve had a bad cough for a week.' },
            { who: 'Receptionist', s: 'Can you come tomorrow at ten past nine?' },
            { who: 'Omar', s: 'Yes, that’s fine. Do I have to bring anything?' },
            { who: 'Receptionist', s: 'Yes, you have to bring a list of any medicine you take.' },
            { who: 'Omar', s: 'OK. Do I have to come early?' },
            { who: 'Receptionist', s: 'No, you don’t have to come early. Just arrive at ten past nine.' },
          ] },
          { t: 'text', md: 'More useful words. The doctor sometimes gives you a **prescription**: a paper you take to the **pharmacy** to get medicine. In British English, people also call a pharmacy a *chemist’s*. **Tablets** are small, hard pieces of medicine.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct words.', items: [
            { q: 'My brother ___ wear glasses for driving.', o: ['has to', 'have to', 'has'], why: '*He* takes *has to* + base form.' },
            { q: 'It’s Sunday tomorrow, so I ___ get up early.', o: ['don’t have to', 'have to', 'doesn’t have to'], why: 'It is not necessary on Sunday. *I* takes *don’t*.' },
            { q: '___ we have to pay for the appointment?', o: ['Do', 'Have', 'Does'], why: 'Questions with *have to* use *do*: *Do we have to…?*' },
            { q: 'She doesn’t ___ work on Fridays.', o: ['have to', 'has to', 'having to'], why: 'After *doesn’t*, use *have*, not *has*.' },
            { q: 'You ___ show your passport at the airport. It’s the rule.', o: ['have to', 'don’t have to', 'should to'], why: 'It is a rule, so it is necessary: *have to*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the correct form of *have to*. Use the words in brackets.', items: [
            { q: 'Nurses often ___ (work) at night.', a: ['have to work'], why: '*Nurses* is plural: *have to* + base form.' },
            { q: 'Ali ___ (take) his medicine three times a day.', a: ['has to take'], why: '*Ali* is one person: *has to*.' },
            { q: 'You ___ (not / book) a table. The café is never full.', a: ['don’t have to book', 'do not have to book'], why: 'It is not necessary: *don’t have to*.' },
            { q: '___ (she / stay) in hospital tonight?', a: ['Does she have to stay'], why: 'Question with *she*: *Does she have to* + base form.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about Omar’s phone call. True or false?', items: [
            { q: 'Omar has had a cough for a week.', a: 't', why: '“I’ve had a bad cough for a week.”' },
            { q: 'His appointment is today.', a: 'f', why: 'It is tomorrow at ten past nine.' },
            { q: 'Omar has to bring a list of his medicine.', a: 't', why: 'The receptionist says “you have to bring a list of any medicine you take.”' },
            { q: 'Omar has to arrive early for his appointment.', a: 'f', why: 'The receptionist says “No, you don’t have to come early.”' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words and their meanings.', pairs: [
            ['an appointment', 'a time to see the doctor'],
            ['a prescription', 'a paper from the doctor for medicine'],
            ['a pharmacy', 'a shop that sells medicine'],
            ['tablets', 'small, hard pieces of medicine'],
            ['a receptionist', 'the person who answers the phone and makes appointments'],
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Stay well this winter',
      about: 'Read a leaflet with simple health advice.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Stay well this winter', md: 'In winter, a lot of people get colds and coughs. Here are some simple ways to stay well.\n\nWash your hands often, with soap and warm water. This is the easiest way to stop germs. You should also cover your mouth and nose when you cough or sneeze.\n\nTry to sleep for seven or eight hours every night. Your body needs sleep to get better. You should also eat a lot of fruit and vegetables and drink enough water, even when it is cold.\n\nGo outside every day, if you can. A short walk in the daylight is good for your body and your mood.\n\nDo you have a cold? You don’t usually have to see a doctor. Rest at home and drink warm drinks. A pharmacist can help you choose medicine. But if you feel very ill, or you are not better after a week, you should call your doctor.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The leaflet says washing your hands is the easiest way to stop germs.', a: 't', why: '“This is the easiest way to stop germs.”' },
            { q: 'You should sleep for ten hours every night.', a: 'f', why: 'The leaflet says seven or eight hours.' },
            { q: 'You don’t have to drink water in winter.', a: 'f', why: 'You should drink enough water, even when it is cold.' },
            { q: 'Walking in the daylight can help your mood.', a: 't', why: 'A short walk is good for your body and your mood.' },
            { q: 'The leaflet comes from a hospital.', a: 'ng', why: 'The leaflet does not say who wrote it.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
            { q: 'You have a cold. What does the leaflet say?', o: ['You usually don’t have to see a doctor.', 'You have to see a doctor the same day.', 'You should go to work as usual.'], why: '“You don’t usually have to see a doctor.”' },
            { q: 'Who can help you choose medicine?', o: ['A pharmacist.', 'A receptionist.', 'A teacher.'], why: '“A pharmacist can help you choose medicine.”' },
            { q: 'When should you call your doctor?', o: ['When you feel very ill or you are not better after a week.', 'When you sneeze for the first time.', 'Every winter.'], why: 'This is the advice in the last paragraph.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap *should* and the verb after it.', items: [
            { s: 'You [should] also [cover] your mouth and nose when you cough or sneeze.', why: '*Should* + base form: *should cover*.' },
            { s: 'If you feel very ill, you [should] [call] your doctor.', why: '*Should* + base form: *should call*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'I’ve got a ___. I can’t eat or drink.', o: ['sore throat', 'sore back', 'cough throat'], why: 'If your throat hurts, it is hard to eat or drink: *a sore throat*.' },
      { q: 'My knees ___ after the long walk.', o: ['hurt', 'hurts', 'hurting'], why: '*Knees* is plural, so *hurt*.' },
      { q: 'You ___ go to work with a temperature. Stay at home.', o: ['shouldn’t', 'should', 'don’t should'], why: 'Going to work is not a good idea: *shouldn’t*.' },
      { q: 'Tomorrow is a holiday, so we ___ work.', o: ['don’t have to', 'have to', 'doesn’t have to'], why: 'It is not necessary on a holiday. *We* takes *don’t*.' },
      { q: 'Gabriel ___ take a tablet every morning.', o: ['has to', 'have to', 'has'], why: '*He* takes *has to* + base form.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'One foot, two ___.', a: ['feet'], why: 'The plural of *foot* is *feet*.' },
      { q: 'You look ill. What’s the ___?', a: ['matter'], why: 'We ask *What’s the matter?*' },
      { q: 'You ___ (not / lift) heavy things with a bad back.', a: ['shouldn’t lift', 'should not lift'], why: 'Advice: *shouldn’t* + base form.' },
      { q: '___ (I / have to) bring my passport?', a: ['Do I have to'], why: 'Question: *Do* + *I* + *have to*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the problem and the advice.', pairs: [
      ['I’ve got a headache.', 'You should turn the loud music off.'],
      ['My eyes are tired.', 'You shouldn’t look at your phone so much.'],
      ['I’ve got a stomach ache.', 'You shouldn’t eat so fast.'],
      ['I can’t sleep at night.', 'You shouldn’t drink coffee in the evening.'],
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['You should see a doctor.', 'You should to see a doctor.', 'You should seeing a doctor.'], why: '*Should* + base form, with no *to*.' },
      { q: '', o: ['She doesn’t have to pay.', 'She doesn’t has to pay.', 'She don’t have to pay.'], why: '*She doesn’t* + *have to*.' },
    ] },
  ],
};
