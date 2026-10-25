// English B1 for moving abroad, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Schools and family life',
  goal: 'Choose a school, talk to teachers and understand school letters.',
  art: 'sun',
  tags: { skills: ['speaking', 'writing', 'reading', 'vocabulary'], topics: ['school', 'parents-evening', 'absence-email', 'school-letters'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'School words',
      about: 'The words you need for school in the UK.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'In England, children usually start primary school in the September after they turn four, in a class called **Reception**. At about eleven, they move to secondary school. The school year has three **terms** (autumn, spring and summer), with a short holiday in the middle of each one, called **half-term**.' },
          { t: 'table', caption: 'School words', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['term', 'one part of the school year'],
            ['half-term', 'a short holiday, usually one week, in the middle of a term'],
            ['uniform', 'the clothes all pupils wear at school'],
            ['parents’ evening', 'a meeting where parents talk to the teacher'],
            ['school report', 'a document about a child’s progress'],
            ['head teacher', 'the person in charge of the school'],
            ['packed lunch', 'food from home for lunch'],
          ] },
          { t: 'tip', art: 'owl', md: 'Most schools in the UK have a *uniform*. Some items have the school’s logo, but plain trousers, skirts and shirts can often be bought in normal shops.' },
        ],
        [
          { t: 'dialogue', title: 'At the school gate', lines: [
            { who: 'Mei', s: 'Hi, I’m Mei. My son Leo has just started in Year 3.' },
            { who: 'Joanna', s: 'Oh, welcome! My daughter’s in Year 3 too. How is he finding it?' },
            { who: 'Mei', s: 'He likes it, but I’m still learning how everything works. When is half-term?' },
            { who: 'Joanna', s: 'It’s the last week of October. Did you get the email about parents’ evening?' },
            { who: 'Mei', s: 'Yes, it’s in November, isn’t it? Do I need to book?' },
            { who: 'Joanna', s: 'Yes, you book a ten-minute slot online. And don’t forget, Friday is non-uniform day.' },
            { who: 'Mei', s: 'Non-uniform day? What’s that?' },
            { who: 'Joanna', s: 'The children can wear their own clothes, and you give a small amount of money to a charity.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Mei’s son is in Year 3.', a: 't', why: '*My son Leo has just started in Year 3.*' },
            { q: 'Half-term is in November.', a: 'f', why: '*The last week of October.* Parents’ evening is in November.' },
            { q: 'Parents need to book a time for parents’ evening.', a: 't', why: '*You book a ten-minute slot online.*' },
            { q: 'On non-uniform day, children wear their own clothes.', a: 't', why: '*The children can wear their own clothes.*' },
            { q: 'Each meeting at parents’ evening lasts half an hour.', a: 'f', why: 'A *ten-minute slot*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
            ['term', 'part of the school year'],
            ['uniform', 'clothes for school'],
            ['school report', 'a document about progress'],
            ['parents’ evening', 'a meeting with the teacher'],
            ['packed lunch', 'food from home'],
            ['head teacher', 'the person in charge of the school'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'The school year in England has three ___.', a: ['terms'], why: 'Autumn, spring and summer *terms*.' },
            { q: 'In England, children start primary school in a class called ___.', a: ['Reception'], why: '*Reception* comes before Year 1.' },
            { q: 'At the end of the year we got Leo’s school ___. It says that he reads very well.', a: ['report'], why: 'A *school report* tells you about progress.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Talking to a teacher',
      about: 'Ask about your child’s progress and write an email to explain an absence.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'At parents’ evening you usually have a few minutes with the teacher, so prepare your questions. *How is she getting on?* asks about progress. *Does he get on well with the other children?* asks about friends: *get on with* someone means to have a good relationship with them.' },
          { t: 'dialogue', title: 'At parents’ evening', lines: [
            { who: 'Mr Evans', s: 'Hello, you must be Amina’s mum. Please, have a seat.' },
            { who: 'Farida', s: 'Thank you. How is Amina getting on?' },
            { who: 'Mr Evans', s: 'Really well. She works hard, and her reading has improved a lot this term.' },
            { who: 'Farida', s: 'That’s good to hear. Is there anything she finds difficult?' },
            { who: 'Mr Evans', s: 'Maths is a bit harder for her, especially times tables.' },
            { who: 'Farida', s: 'Is there anything we can do at home to help?' },
            { who: 'Mr Evans', s: 'Yes, practising times tables for ten minutes a day would really help.' },
            { who: 'Farida', s: 'And does she get on well with the other children?' },
            { who: 'Mr Evans', s: 'Yes, she’s made some good friends.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about parents’ evening. True or false?', items: [
            { q: 'Amina’s reading has got better.', a: 't', why: '*Her reading has improved a lot.*' },
            { q: 'Amina finds maths easy.', a: 'f', why: '*Maths is a bit harder for her.*' },
            { q: 'The teacher suggests ten minutes of practice a day.', a: 't', why: '*Practising times tables for ten minutes a day would really help.*' },
            { q: 'Amina has no friends in her class.', a: 'f', why: '*She’s made some good friends.*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right question or word.', items: [
            { q: 'You want to know about your child’s progress. You ask: ___', o: ['How is he getting on?', 'How is he getting up?', 'How is he getting off?'], why: '*get on*: make progress.' },
            { q: 'Does she get on well ___ the other children?', o: ['with', 'to', 'for'], why: '*get on with* someone.' },
            { q: '', o: ['Is there anything we can do at home to help?', 'Is there something we can doing at home?', 'What we must do at home?'], why: '*can* + verb; a question needs *is there* or *do*.' },
          ] },
        ],
        [
          { t: 'text', md: 'If your child is ill, phone or email the school on the first morning. Schools in England do not usually allow holidays in term time, except in special cases. A short email is enough: who, when, why, and when the child will be back.' },
          { t: 'reading', title: 'Subject: Absence, Leo Chen, Year 3', md: 'Dear Mrs Wright,\n\nI am writing to let you know that my son, Leo Chen, was absent from school yesterday and today because he had a high temperature. He is feeling much better now, and he will be back at school tomorrow morning.\n\nCould you please let me know if he has missed any homework, so that he can catch up?\n\nThank you for your understanding.\n\nKind regards,\nMei Chen' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the absence emails.', items: [
            { q: 'I am writing to let you ___ that my daughter is ill today.', a: ['know'], why: '*let you know*: tell you.' },
            { q: 'Ana was ___ from school on Monday because she had a cold.', a: ['absent'], why: '*absent from school*: not at school.' },
            { q: 'He will ___ back at school on Thursday.', a: ['be'], why: '*will be back*: will return.' },
            { q: 'Could you let me know if she has ___ (miss) any homework?', a: ['missed'], why: 'Present perfect: *has* + past participle.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'My son was absent because he was ill.', why: 'Main sentence first, then *because* + the reason.' },
            { a: 'Thank you for your understanding.', why: 'A polite last line.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A letter from school',
      about: 'Understand a letter from a school to parents and know what to do.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Brookfield Primary School', md: 'Dear Parents and Carers,\n\n**Year 4 trip to the City Science Museum**\n\nOn Thursday 26 November, Year 4 will visit the City Science Museum as part of their topic on electricity. We will travel by coach and leave school at 9 am, so please make sure your child arrives on time. We will be back by 3.15 pm, the normal end of the school day.\n\nWe are asking for a voluntary contribution of £8 per child to help pay for the coach. No child will miss the trip because of money: if this is difficult for you, please speak to the school office in confidence.\n\nYour child will need a packed lunch in a bag with their name on it, a drink (no fizzy drinks, please) and a coat. Children should wear school uniform. If your child gets free school meals, the school kitchen will provide a packed lunch.\n\nPlease fill in the online consent form by Friday 20 November. We cannot take children on the trip without consent from a parent or carer.\n\nWe are also looking for two parent helpers. If you would like to help, please tell your child’s class teacher.\n\nThank you for your support.\n\nYours sincerely,\n\nMs J. Okafor\nYear 4 Team Leader' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the letter. True, false or not given?', items: [
            { q: 'The trip is for the children in Year 4.', a: 't', why: '*Year 4 will visit the City Science Museum.*' },
            { q: 'The children will come back later than usual.', a: 'f', why: '*Back by 3.15 pm, the normal end of the school day.*' },
            { q: 'A child cannot go on the trip if the parents do not pay £8.', a: 'f', why: '*No child will miss the trip because of money.*' },
            { q: 'Children can wear their own clothes on the trip.', a: 'f', why: '*Children should wear school uniform.*' },
            { q: 'Children who get free school meals will get a packed lunch from the school.', a: 't', why: '*The school kitchen will provide a packed lunch.*' },
            { q: 'Parents must give consent by 20 November.', a: 't', why: '*Please fill in the online consent form by Friday 20 November.*' },
            { q: 'The museum is near the school.', a: 'ng', why: 'The letter does not say where the museum is.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What should you do?', items: [
            { q: 'For the trip, your child should bring ___.', o: ['a packed lunch, a drink and a coat', 'money to buy lunch', 'a fizzy drink'], why: '*A packed lunch…, a drink… and a coat.*' },
            { q: 'You would like to help on the trip. You should ___.', o: ['tell the class teacher', 'call the museum', 'write to the head teacher'], why: '*Please tell your child’s class teacher.*' },
            { q: 'You cannot pay the £8 this month. You should ___.', o: ['speak to the school office', 'keep your child at home', 'pay at the museum'], why: '*Please speak to the school office in confidence.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'A short holiday in the middle of a term is ___.', o: ['half-term', 'term', 'a weekend'], why: '*half-term*.' },
      { q: 'How is Amina getting ___?', o: ['on', 'up', 'with'], why: '*get on*: make progress.' },
      { q: 'Does he get on well ___ the other children?', o: ['with', 'to', 'at'], why: '*get on with* someone.' },
      { q: 'In England, children usually start school in a class called ___.', o: ['Reception', 'Year 6', 'Year 7'], why: '*Reception* is the first class of primary school.' },
      { q: 'A document about your child’s progress is a ___.', o: ['school report', 'consent form', 'packed lunch'], why: 'A *school report*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'I am writing to let you ___ that Leo is ill.', a: ['know'], why: '*let you know*.' },
      { q: 'Sara was ___ from school yesterday.', a: ['absent'], why: '*absent from school*.' },
      { q: 'The children wear school ___ every day.', a: ['uniform'], why: '*school uniform*.' },
      { q: 'Please fill in the ___ form by Friday, or your child cannot go on the trip.', a: ['consent'], why: 'A *consent form* gives your permission.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Is there anything we can do at home?', why: '*Is there anything…?* + *we can do*.' },
      { a: 'Could you tell me when half-term is?', why: 'Indirect question: *half-term is* at the end.' },
    ] },
  ],
};
