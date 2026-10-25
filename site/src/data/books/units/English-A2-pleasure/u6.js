// English A2 for travel, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Problems on holiday',
  goal: 'Deal with problems: lost things, illness, changes.',
  art: 'cactus',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['lost-property', 'describing-things', 'pharmacy', 'illness', 'changes'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'I’ve lost my bag',
      about: 'Say that you have lost something, describe it and report it.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'When you lose something, say *I’ve lost my…*. This means you lost it and you do not have it now. To say when or where it happened, use the past simple: *I **left** it on the bus.*' },
          { t: 'examples', items: [
            { s: '**I’ve lost** my phone.', n: '*I’ve lost* = *I have lost*. You do not have it now.' },
            { s: 'I **left** it on the train this morning.', n: 'The past simple says when it happened.' },
            { s: 'Someone **took** my wallet.', n: '*Took* is the past of *take*.' },
            { s: 'Where is the **lost property office**?', n: 'At big stations and airports, this is the place for things people lose.' },
          ] },
          { t: 'tip', art: 'owl', md: 'If someone steals something from you in the UK, you can report it to the police. Many people need a police report for their travel insurance.' },
        ],
        [
          { t: 'dialogue', title: 'At the lost property office', lines: [
            { who: 'Clerk', s: 'Hello. Can I help you?' },
            { who: 'Fatou', s: 'Yes, I’ve lost my bag. I think I left it on the train from Edinburgh.' },
            { who: 'Clerk', s: 'What time did the train arrive?' },
            { who: 'Fatou', s: 'At about half past two.' },
            { who: 'Clerk', s: 'And what does the bag look like?' },
            { who: 'Fatou', s: 'It’s a small black backpack. It’s made of leather, and it has a red key ring on it.' },
            { who: 'Clerk', s: 'What was in it?' },
            { who: 'Fatou', s: 'My camera, a book and a blue umbrella.' },
            { who: 'Clerk', s: 'OK. Please fill in this form, and we’ll call you if we find it.' },
          ] },
        ],
        [
          { t: 'text', md: 'To describe a thing, say its size, colour and what it is made of, in this order: *a small black leather bag*. Use *It has…* or *It’s got…* for details.' },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'I’ve lost my passport.', why: '*I’ve lost* + the thing.' },
            { a: 'It’s a big brown suitcase.', why: 'Size, then colour, then the noun.' },
            { a: 'I left it on the bus.', why: 'Subject + past simple + *it* + place.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right words.', items: [
            { q: 'What does your bag ___ like?', o: ['look', 'looks', 'looking'], why: '*What does it look like?* asks for a description.' },
            { q: 'I think I ___ my wallet in the taxi.', o: ['left', 'leave', 'leaved'], why: '*Leave* is irregular: *left*.' },
            { q: 'It’s a ___ umbrella.', o: ['small green', 'green small', 'small and green the'], why: 'Size comes before colour.' },
            { q: 'Where is the lost ___ office?', o: ['property', 'things', 'luggage'], why: 'The office is the *lost property office*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Is there a pharmacy near here?',
      about: 'Say how you feel and ask for help at a pharmacy.',
      art: 'snail',
      spreads: [
        [
          { t: 'table', caption: 'How do you feel?', explain: ['head'], quiz: true, head: ['Problem', 'Example'], rows: [
            ['I’ve got a headache.', 'My head hurts.'],
            ['I’ve got a sore throat.', 'It hurts when I eat.'],
            ['I’ve got a temperature.', 'I feel very hot.'],
            ['I’ve got a cold.', 'I’m sneezing a lot.'],
            ['I feel sick.', 'I think I’m going to be ill.'],
            ['I’ve got stomach ache.', 'My stomach hurts.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In the UK, a pharmacy is also called a *chemist’s*. A pharmacist can give advice about small health problems. In an emergency in the UK, call 999. The number 112 also works in the UK and in EU countries.' },
        ],
        [
          { t: 'dialogue', title: 'At the pharmacy', lines: [
            { who: 'Pedro', s: 'Excuse me, is there a pharmacy near here?' },
            { who: 'Woman', s: 'Yes, there’s one on the corner, next to the bank.' },
            { who: 'Pharmacist', s: 'Hello. How can I help?' },
            { who: 'Pedro', s: 'I’ve got a sore throat and a headache. Can you give me something for it?' },
            { who: 'Pharmacist', s: 'How long have you had it?' },
            { who: 'Pedro', s: 'Since yesterday.' },
            { who: 'Pharmacist', s: 'Have you got a temperature?' },
            { who: 'Pedro', s: 'No, I don’t think so.' },
            { who: 'Pharmacist', s: 'Try these throat sweets. Take one every three hours. If you don’t feel better in a few days, see a doctor.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the problem and the meaning.', pairs: [
            ['I’ve got a headache.', 'My head hurts.'],
            ['I’ve got a temperature.', 'My body is very hot.'],
            ['I’ve got a sore throat.', 'It hurts when I eat.'],
            ['I feel sick.', 'I think I’m going to be ill.'],
            ['I’ve got a cold.', 'I’m sneezing and my nose is running.'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Excuse me, is there a ___ near here? I need some medicine.', a: ['pharmacy', 'chemist’s', 'chemist'], why: 'You buy medicine at a *pharmacy* or *chemist’s*.' },
            { q: 'I’ve ___ a terrible headache.', a: ['got'], why: '*I’ve got* + a health problem.' },
            { q: 'Can you give me something ___ a cold?', a: ['for'], why: '*Something for* + the problem.' },
            { q: 'My back ___. I can’t carry my suitcase.', a: ['hurts'], why: '*My back* is one thing: *hurts*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right words.', items: [
            { q: 'I’ve got ___ sore throat.', o: ['a', 'the', 'an'], why: 'We say *a sore throat*, *a headache*, *a cold*.' },
            { q: 'My feet ___ after the long walk.', o: ['hurt', 'hurts', 'hurting'], why: '*My feet* is plural: *hurt*.' },
            { q: 'In the UK, the emergency number is ___', o: ['999.', '911.', '000.'], why: 'In the UK, call 999. 112 also works.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue at the pharmacy. True or false?', items: [
            { q: 'Pedro has a sore throat.', a: 't', why: '*I’ve got a sore throat and a headache.*' },
            { q: 'Pedro has a temperature.', a: 'f', why: '*No, I don’t think so.*' },
            { q: 'The pharmacist says Pedro must see a doctor today.', a: 'f', why: 'He should see a doctor only *if he doesn’t feel better in a few days*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A change to your tour',
      about: 'Read a message from a tour company about a change to a trip.',
      art: 'parrot',
      spreads: [
        [
          { t: 'reading', title: 'Important: change to your tour', md: 'Dear Ms Rossi,\n\nWe are sorry, but we need to change your Island Boat Tour on Thursday 18 July. The weather forecast says there will be strong winds on Thursday, so the boat cannot leave the harbour.\n\nWe can offer you two options.\n\nYou can join the same tour on Friday 19 July. It leaves at the same time, 9.30 am, from the same place.\n\nOr you can choose the Castle and Gardens Bus Tour on Thursday. The bus leaves at 10 am from the front of your hotel. Lunch is included.\n\nIf you do not want either tour, we will give you all your money back.\n\nPlease reply to this email or call our office by 6 pm on Wednesday to tell us your choice.\n\nBest wishes,\nOmar Haddad, Bluebell Coast Tours' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the message again. True, false or not given?', items: [
            { q: 'The boat tour on Thursday cannot go because of the weather.', a: 't', why: '*There will be strong winds on Thursday.*' },
            { q: 'The boat tour on Friday leaves at a different time.', a: 'f', why: '*It leaves at the same time, 9.30 am.*' },
            { q: 'The bus tour starts at the hotel.', a: 't', why: '*The bus leaves at 10 am from the front of your hotel.*' },
            { q: 'Lunch on the bus tour costs extra.', a: 'f', why: '*Lunch is included.*' },
            { q: 'The bus tour is shorter than the boat tour.', a: 'ng', why: 'The message does not say how long the tours are.' },
            { q: 'Ms Rossi can get all her money back.', a: 't', why: '*We will give you all your money back.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'What must Ms Rossi do?', o: ['Tell the company her choice by Wednesday evening.', 'Go to the harbour on Thursday.', 'Pay for the bus tour.'], why: '*Please reply… by 6 pm on Wednesday.*' },
            { q: 'Ms Rossi only wants a boat tour. What can she do?', o: ['Go on Friday 19 July.', 'Go on Thursday 18 July.', 'Take the bus on Thursday.'], why: 'The same boat tour runs on *Friday 19 July*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that tell you about the choice.', items: [
            { s: 'We can offer you two [options].', why: '*Options* are the different things you can choose.' },
            { s: 'If you do not want [either] tour, we will give you all your money back.', why: '*Either* means one or the other of the two tours.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'I’ve ___ my keys. I can’t find them.', o: ['lost', 'lose', 'losing'], why: '*I’ve lost*: you do not have them now.' },
      { q: 'It’s a ___ bag.', o: ['big red', 'red big', 'big and red the'], why: 'Size, then colour.' },
      { q: 'I’ve got a ___ throat.', o: ['sore', 'pain', 'hurt'], why: 'We say *a sore throat*.' },
      { q: 'You buy medicine at a ___', o: ['pharmacy.', 'lost property office.', 'harbour.'], why: 'A *pharmacy* sells medicine.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'I think I ___ (leave) my phone on the bus.', a: ['left'], why: '*Leave*, *left*: the past simple says when it happened.' },
      { q: 'What does it ___ like?', a: ['look'], why: '*What does it look like?*' },
      { q: 'Can you give me something ___ a headache?', a: ['for'], why: '*Something for* + the problem.' },
      { q: 'My head ___.', a: ['hurts'], why: '*My head* is one thing: *hurts*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Is there a pharmacy near here?', why: '*Is there…?* asks if something is in a place.' },
      { a: 'I’ve lost my wallet.', why: '*I’ve lost* + the thing.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'If you do not want *either* tour, you do not want the first one or the second one.', a: 't', why: '*Not either* means not one and not the other.' },
      { q: 'A *chemist’s* is a place where you report a lost bag.', a: 'f', why: 'A *chemist’s* is a pharmacy. You report a lost bag at the *lost property office*.' },
    ] },
  ],
};
