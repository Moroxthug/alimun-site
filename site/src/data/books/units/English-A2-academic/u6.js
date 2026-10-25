// English A2 for study and exams, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
// Tasks practise in the format of A2 exams such as A2 Key. All texts are original, not official exam material.
export const UNIT = {
  id: 'u6',
  title: 'Exam skills',
  goal: 'Get ready for an A2 exam: task types and good habits.',
  art: 'dragon',
  tags: { skills: ['reading', 'writing', 'vocabulary'], topics: ['exam-strategies', 'multiple-choice', 'matching', 'short-message', 'word-limit'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Read the question first',
      about: 'Do multiple-choice and matching tasks: read the question first and look for words with the same meaning.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'In a reading exam, read the **question first**, then the text. Find the important words in the question. Then look for the answer in the text.\n\nThe text often uses **different words** with the same meaning. The question says *begin*, but the text says *start*.' },
          { t: 'table', caption: 'Same meaning, different words', explain: ['head'], quiz: true, head: ['In the question', 'In the text'], rows: [
            ['begin', 'start'],
            ['closed', 'shut'],
            ['costs nothing', 'free'],
            ['every day', 'daily'],
            ['cheaper', 'costs less'],
            ['near', 'not far from'],
          ] },
          { t: 'tip', art: 'owl', md: 'Wrong options often use words from the text, but they say something different. Read every option before you choose.' },
        ],
        [
          { t: 'text', md: 'In this task, you read a short notice or message. Then you choose the sentence that says the same thing.' },
          { t: 'ex', kind: 'choice', h: 'What does each text say? Choose the correct answer.', items: [
            { q: 'Swimming pool: closed for cleaning until Thursday. Opens again on Friday at 7 am.', o: ['You can swim on Friday morning.', 'The pool is open every day this week.', 'The pool opens at 7 pm on Friday.'], why: 'It opens again on Friday at 7 am, which is in the morning.' },
            { q: 'Students: please do not eat or drink in the computer room.', o: ['You cannot have food in the computer room.', 'You can drink water in the computer room.', 'The computer room has a café.'], why: '*Do not eat* means you cannot have food there.' },
            { q: 'Hi Tom, I can’t come to the cinema tonight. Can we go on Saturday? Jen', o: ['Jen wants to change the day.', 'Jen wants to see a different film.', 'Jen is going to the cinema tonight.'], why: 'She cannot go tonight and asks about Saturday, so she wants a different day.' },
            { q: 'Bookshop: all dictionaries half price, this week only.', o: ['Dictionaries are cheaper than usual now.', 'The bookshop only sells dictionaries.', 'Dictionaries are cheaper next week.'], why: '*Half price* means they cost less. *This week only* means now, not next week.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words with the same meaning.', pairs: [
            ['start', 'begin'],
            ['shut', 'closed'],
            ['free', 'costs nothing'],
            ['daily', 'every day'],
            ['not far from', 'near'],
          ] },
          { t: 'ex', kind: 'tf', h: 'Good exam habits. True or false?', items: [
            { q: 'Read the question before the text.', a: 't', why: 'Then you know what to look for.' },
            { q: 'Choose the first option that has a word from the text.', a: 'f', why: 'Wrong options often use words from the text. Check the meaning.' },
            { q: 'Read every option before you choose.', a: 't', why: 'Another option can be better, so read them all.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'A short message',
      about: 'Write a short message that answers every part of the task and keeps to the word limit.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'In some exams, you write a short message, like an email to a friend. The task gives you **three things** to write about and a word limit, for example *25 words or more*. Write about all three things.' },
          { t: 'reading', title: 'The task', md: 'You want to go to the cinema with your English friend, Sam. Write an email to Sam. In your email, say which film you want to see, when you want to go and how you can get there. Write 25 words or more.' },
          { t: 'reading', title: 'A good answer', md: 'Hi Sam,\n\nDo you want to see the new space film with me? We can go on Saturday at 7 pm. Let’s take the bus together from the station.\n\nSee you soon,\nLeila' },
        ],
        [
          { t: 'text', md: 'Leila’s email has about 30 words, and it answers all three things: the film, the time and the bus. Before you finish, check your spelling, capital letters and full stops.' },
          { t: 'table', caption: 'Useful phrases for short messages', explain: ['head', 'col0'], head: ['What you want to do', 'What you write'], rows: [
            ['invite', 'Would you like to come?'],
            ['suggest a time', 'We can meet at six.'],
            ['suggest an idea', 'Let’s go by bus.'],
            ['say sorry', 'Sorry, I can’t come on Friday.'],
            ['end', 'See you soon,'],
          ] },
          { t: 'tip', art: 'owl', md: 'A very long message is not better. It takes more time and often has more mistakes. Answer all the points, then stop.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'The task: write to your classmate Ali. Say that you can’t come to class tomorrow, say why, and ask for the homework. Which message is best?', items: [
            { q: '', o: ['Hi Ali, I can’t come to class tomorrow because I have to work. Could you send me the homework, please? Thanks, Mia', 'Hi Ali, I can’t come to class tomorrow. Could you send me the homework, please? Thanks, Mia', 'Hi Ali, I can’t come to class tomorrow because I have to work. See you next week! Mia'], why: 'Only the first message has all three things. The second has no reason, and the third does not ask for the homework.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'The task says “25 words or more”. Which is best?', o: ['About 30 words that answer every point.', 'About 10 words that answer every point.', 'About 200 words about many things.'], why: 'Write enough words, answer every point, and then stop.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the messages with one word.', items: [
            { q: 'Would you like ___ come to my party?', a: ['to'], why: '*Would you like to* + verb.' },
            { q: '___ meet at the café at six.', a: ['Let’s', 'Let us'], why: '*Let’s* + verb makes a suggestion.' },
            { q: 'Sorry, I ___ come on Friday. I have to work.', a: ['can’t', 'cannot'], why: '*Can’t* + verb: it is not possible for you.' },
            { q: 'See you ___!', a: ['soon'], why: '*See you soon* is a friendly ending.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Check the message. Tap the mistake.', items: [
            { s: 'See you on [saturday]!', why: 'Days of the week start with a capital letter: *Saturday*.' },
            { s: 'We can go [to] home after the film.', why: 'We say *go home*, with no *to*.' },
            { s: 'I’m going [at] the cinema tonight.', why: 'We say *going to the cinema*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Would you like to come with me?', why: '*Would you like to* + verb.' },
            { a: 'We can meet at the station.', why: '*We can* + verb + place.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Exam practice: reading',
      about: 'Read a short text in the style of an A2 exam and answer the questions.',
      art: 'dragon',
      spreads: [
        [
          { t: 'tip', art: 'owl', md: 'Read the questions first, then the text. In many tasks like this, the questions follow the order of the text.' },
          { t: 'reading', title: 'A new start', md: 'When Sofia Herrera moved from Colombia to Manchester two years ago, she didn’t speak much English. “I knew some words from school, but I couldn’t understand people in shops,” she says.\n\nSofia started an evening English course at a college near her flat. The classes were on Mondays and Wednesdays, and she went to every lesson. “My teacher was very patient. She gave extra homework to students who wanted it, and I always wanted it!”\n\nNow Sofia works as a cook in a hotel restaurant. In the daytime she cooks, and in the evening she studies for an A2 exam. She reads a short story in English every week, and she writes new words on cards.\n\n“The exam is in June,” she says. “I’m a bit nervous, but I’m going to practise every day. After the exam, I’d like to study cooking at college.”' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the text. Choose the correct answer.', items: [
            { q: 'When Sofia arrived in Manchester, ___', o: ['she couldn’t understand people in shops.', 'she spoke English very well.', 'she didn’t know any English words.'], why: '“I couldn’t understand people in shops.” She knew some words, so the third answer is wrong.' },
            { q: 'Sofia’s English classes were ___', o: ['in the evening.', 'in the morning.', 'at the weekend.'], why: 'She started an evening course.' },
            { q: 'What did Sofia’s teacher do?', o: ['She gave extra homework to students who wanted it.', 'She gave a lot of homework to every student.', 'She taught on Mondays only.'], why: '“She gave extra homework to students who wanted it.” Classes were on Mondays and Wednesdays.' },
            { q: 'What does Sofia do every week?', o: ['She reads a short story in English.', 'She writes a story in English.', 'She takes an exam.'], why: '“She reads a short story in English every week.” She writes new words, not stories.' },
            { q: 'What would Sofia like to do after the exam?', o: ['Study cooking.', 'Work in a hotel.', 'Move to a new city.'], why: '“After the exam, I’d like to study cooking at college.”' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with one word from the text.', items: [
            { q: 'Sofia works as a ___ in a hotel restaurant.', a: ['cook'], why: '“Now Sofia works as a cook in a hotel restaurant.”' },
            { q: 'Her teacher was very ___.', a: ['patient'], why: '“My teacher was very patient.”' },
            { q: 'Sofia writes new words on ___.', a: ['cards'], why: '“She writes new words on cards.”' },
            { q: 'Sofia’s exam is in ___.', a: ['June'], why: '“The exam is in June.”' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'In a reading exam, what do you read first?', o: ['The question.', 'The last line of the text.', 'Only the title.'], why: 'Read the question first. Then you know what to look for.' },
      { q: 'Café: open daily from 8 am. What does this mean?', o: ['The café opens every day.', 'The café opens only in the morning.', 'The café opens at 8 pm.'], why: '*Daily* means every day.' },
      { q: 'Library: computers free for members. What does this mean?', o: ['Members do not pay for the computers.', 'There are no computers.', 'The computers are new.'], why: '*Free* here means it costs nothing.' },
      { q: 'A task has three points. Your message answers two. ___', o: ['Add the missing point.', 'Write more about the first point.', 'Stop. Two points are enough.'], why: 'Write about all the points in the task.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the words with the same meaning.', pairs: [
      ['begin', 'start'],
      ['closed', 'shut'],
      ['cheaper', 'costs less'],
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
      { q: '___ go to the park on Sunday.', a: ['Let’s', 'Let us'], why: '*Let’s* + verb makes a suggestion.' },
      { q: 'Would you like ___ meet after class?', a: ['to'], why: '*Would you like to* + verb.' },
      { q: 'Sorry, I ___ come tomorrow. I’m ill.', a: ['can’t', 'cannot'], why: '*Can’t* + verb: it is not possible.' },
    ] },
    { t: 'ex', kind: 'spot', h: 'Tap the mistake.', items: [
      { s: 'My exam is on [monday] morning.', why: 'Days of the week start with a capital letter: *Monday*.' },
      { s: 'Let’s [to] meet at the library.', why: '*Let’s* + verb, with no *to*: *Let’s meet*.' },
    ] },
  ],
};
