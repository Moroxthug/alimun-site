// English B1 for study and exams, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Reading longer texts',
  goal: 'Understand longer factual texts: read quickly for the main points, find details and tell facts from opinions.',
  art: 'cat',
  tags: { skills: ['reading', 'vocabulary'], topics: ['skimming', 'scanning', 'guessing-meaning', 'fact-opinion', 'main-idea'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Skimming, scanning and guessing',
      about: 'Read fast in two different ways and guess new words from the text around them.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'You do not have to read every text slowly, word by word. Choose the way of reading that fits what you need.' },
          { t: 'table', caption: 'Two ways to read fast', explain: ['head', 'col0', 'col1'], head: ['Way of reading', 'What you do'], rows: [
            ['Skimming', 'You read quickly to get the general idea. Look at the title, the headings and the first sentence of each paragraph.'],
            ['Scanning', 'You look for one piece of information, such as a name, a date or a number. Move your eyes down the page until you find it.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not stop at every new word. Often you can understand the text without it. If the word seems important, try to guess its meaning first, and use a dictionary only after that.' },
        ],
        [
          { t: 'text', md: 'To guess a new word, look at the words around it. Is it a noun, a verb or an adjective? Is there an example, an explanation or a contrast (*but*, *unlike*) near it?' },
          { t: 'examples', items: [
            { s: 'The lecture hall was so **crammed** that some students had to stand at the back.', n: 'People had to stand, so the hall was very full.' },
            { s: 'Unlike her brother, who is very **outgoing**, Mia is shy.', n: '*Unlike* shows a contrast with *shy*, so *outgoing* means friendly and happy to talk.' },
            { s: 'The instructions were so **vague** that nobody knew what to do.', n: 'Nobody knew what to do, so the instructions were not clear.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Skim or scan? Choose the best way to read.', items: [
            { q: 'You want to know what an article is about before you read it closely.', o: ['skim it', 'scan it', 'read every word slowly'], why: 'For the general idea, skim: title, headings and first sentences.' },
            { q: 'You need the opening times of the library from a long web page.', o: ['scan it', 'skim it', 'translate every word'], why: 'You are looking for one piece of information, so scan.' },
            { q: 'When you skim, you mainly read ___.', o: ['the title, headings and first sentences', 'every word of the last paragraph', 'only the numbers'], why: 'These parts usually show the main ideas.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Guess the meaning of the word in bold.', items: [
            { q: 'The kitchen was **spotless**: there was not a single dirty plate.', o: ['very clean', 'very small', 'very old'], why: '*Not a single dirty plate* explains the word.' },
            { q: 'He was **exhausted** after working for fourteen hours.', o: ['very tired', 'very happy', 'very angry'], why: 'After fourteen hours of work, a person is very tired.' },
            { q: 'The first exercise was simple, but the second one was **tricky**.', o: ['difficult', 'easy', 'short'], why: '*But* shows a contrast with *simple*.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Riverside Library: information for students', md: 'Opening hours in term time: Monday to Friday 8 am to 10 pm, Saturday and Sunday 10 am to 6 pm. During the holidays, the library closes at 5 pm every day.\n\nYou can borrow up to 12 books at a time for three weeks. Laptops can be borrowed from the help desk for four hours. Group study rooms on the second floor can be booked online up to seven days in advance. Quiet study areas are on the third floor.\n\nFood is not allowed in the library, but you may bring drinks in a bottle with a lid.' },
          { t: 'ex', kind: 'gap', h: 'Scan the notice. Find the answers as fast as you can.', items: [
            { q: 'On Saturdays in term time, the library opens at ___ am.', a: ['10', 'ten'], why: '*Saturday and Sunday 10 am to 6 pm.*' },
            { q: 'You can borrow up to ___ books at a time.', a: ['12', 'twelve'], why: '*You can borrow up to 12 books at a time.*' },
            { q: 'You can borrow a laptop for ___ hours.', a: ['4', 'four'], why: '*Laptops can be borrowed from the help desk for four hours.*' },
            { q: 'The quiet study areas are on the ___ floor.', a: ['third', '3rd'], why: '*Quiet study areas are on the third floor.*' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Main ideas, facts and opinions',
      about: 'Find the main idea of a paragraph and tell facts from opinions.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'The **main idea** is what a whole paragraph is about. It is often in the first sentence. The other sentences give **details**: examples, reasons and numbers.\n\nA **fact** is something you can check. An **opinion** is what a person thinks or feels. Words like *I think*, *in my opinion*, *should*, *best*, *wonderful* and *terrible* often show an opinion.' },
          { t: 'examples', items: [
            { s: 'The library opens at 8 am on weekdays.', n: 'A fact: you can check it.' },
            { s: 'The new library is the most beautiful building on campus.', n: 'An opinion: *most beautiful* is what the writer feels.' },
            { s: 'In my view, students should have more free time.', n: 'An opinion: *In my view* and *should* show it.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Fact or opinion?', items: [
            { q: 'The library is open until 10 pm.', o: ['fact', 'opinion'], why: 'You can check the opening times.' },
            { q: 'Evening classes are a waste of time.', o: ['opinion', 'fact'], why: '*A waste of time* is what the writer thinks.' },
            { q: 'The course has four modules in the first term.', o: ['fact', 'opinion'], why: 'You can check this in the course guide.' },
            { q: 'Online exams are much better than paper exams.', o: ['opinion', 'fact'], why: '*Much better* is a judgement.' },
            { q: 'I think the new timetable is confusing.', o: ['opinion', 'fact'], why: '*I think* shows an opinion.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that show the sentence is an opinion.', items: [
            { s: '[In] [my] [opinion], the library needs longer opening hours.', why: '*In my opinion* introduces what the writer thinks.' },
            { s: 'The course is popular, but [I] [don’t] [think] it is good value.', why: '*I don’t think* shows the writer’s opinion.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Two paragraphs', md: 'Many students find their first term at university difficult. They have to live away from home, manage their own money and get used to a new way of studying. Some also miss their families and friends. However, many feel much more confident by the second term.\n\nLearning a few words of the local language can make a big difference when you study abroad. Shop assistants and neighbours are often friendlier when you greet them in their language. It also helps you to understand signs, menus and timetables.' },
          { t: 'ex', kind: 'choice', h: 'What is the main idea of each paragraph?', items: [
            { q: 'Paragraph 1:', o: ['The first term at university is often hard for students.', 'Students miss their families.', 'Students have to manage their money.'], why: 'The first sentence gives the main idea. The other two options are details.' },
            { q: 'Paragraph 2:', o: ['Knowing some of the local language helps when you study abroad.', 'Menus are hard to understand.', 'Neighbours are friendly.'], why: 'The first sentence gives the main idea; the rest are examples.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Find the details in the two paragraphs. True or false?', items: [
            { q: 'According to paragraph 1, some students miss their families.', a: 't', why: '*Some also miss their families and friends.*' },
            { q: 'Paragraph 1 says students feel less confident in the second term.', a: 'f', why: 'Many feel *more* confident by the second term.' },
            { q: 'Paragraph 2 says the local language helps you read timetables.', a: 't', why: '*It also helps you to understand signs, menus and timetables.*' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'An article about learning languages',
      about: 'Read a magazine article and find its main points.',
      art: 'teacup',
      spreads: [
        [
          { t: 'reading', title: 'Never too late to learn', md: 'Many people believe that only children can learn a new language well. But is this really true?\n\nIt is true that young children often develop a better accent. However, adults have some important advantages. They usually understand grammar rules more quickly, and they can use strategies that children do not have, such as taking notes or using a dictionary. Adults also often have a clear reason to learn: a new job, a partner from another country or a move abroad.\n\nCarmen Ruiz, 52, started learning English two years ago, when her daughter moved to Manchester. “At first I felt silly,” she says. “I made lots of mistakes, and my teenage nephews laughed at my pronunciation. But now I can chat with my grandson’s teachers and follow the news on the radio.”\n\nMany language teachers say that motivation matters more than age. In their experience, learners who practise a little every day make more progress than learners who study for hours once a week. Speaking from the first lesson also helps, even if you make mistakes.\n\nSo, if you have always wanted to learn a language, there is no need to wait. As Carmen says, “The best time to start was ten years ago. The second-best time is today.”' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the article. True, false or not given?', items: [
            { q: 'The article says that only children can learn languages well.', a: 'f', why: 'The article asks *is this really true?* and shows that adults can learn well too.' },
            { q: 'Young children often have a better accent than adults.', a: 't', why: '*Young children often develop a better accent.*' },
            { q: 'Carmen started learning English because of her job.', a: 'f', why: 'She started when her daughter moved to Manchester.' },
            { q: 'Carmen’s nephews helped her with her grammar.', a: 'ng', why: 'The article only says that they laughed at her pronunciation.' },
            { q: 'Many teachers think daily practice works better than one long lesson a week.', a: 't', why: '*Learners who practise a little every day make more progress.*' },
            { q: 'Carmen now listens to the news in English.', a: 't', why: '*Now I can… follow the news on the radio.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Think about the whole article.', items: [
            { q: 'What is the main idea of the article?', o: ['Adults can learn languages successfully too.', 'Children learn accents better than adults.', 'Carmen lives in Manchester.'], why: 'The title and the last paragraph say it: it is never too late.' },
            { q: 'In paragraph 2, *strategies* probably means ___.', o: ['ways of doing something', 'books for children', 'mistakes'], why: 'The examples help: *taking notes or using a dictionary*.' },
            { q: 'Why does the writer include Carmen’s story?', o: ['to give a real example of an adult learner', 'to show that English is easy', 'to advertise a language school'], why: 'Carmen is an adult who started late and made progress.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'You want to find the date of the exam in a long email. You ___.', o: ['scan it', 'skim it', 'read it slowly twice'], why: 'One piece of information: scan.' },
      { q: 'You want the general idea of a report before a meeting. You ___.', o: ['skim it', 'scan it', 'translate it'], why: 'The general idea: skim.' },
      { q: 'The room was **freezing**, so we all kept our coats on. *Freezing* means ___.', o: ['very cold', 'very big', 'very noisy'], why: 'People keep their coats on when it is very cold.' },
      { q: 'Which sentence is an opinion?', o: ['This is the most interesting module on the course.', 'The module starts in January.', 'The module has two essays.'], why: '*The most interesting* is a judgement.' },
      { q: 'The main idea of a paragraph is often in ___.', o: ['the first sentence', 'the last word', 'the examples'], why: 'The topic sentence usually comes first.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'When you skim, you read every word carefully.', a: 'f', why: 'You read quickly for the general idea.' },
      { q: 'A fact is something you can check.', a: 't', why: 'An opinion is what someone thinks.' },
      { q: 'You should look up every new word immediately.', a: 'f', why: 'First try to understand without it, or guess from the context.' },
      { q: 'Words like *best* and *terrible* often show an opinion.', a: 't', why: 'They are judgements.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
      { q: 'When you ___, you look quickly for one piece of information.', a: ['scan'], why: '*Scanning* finds one detail.' },
      { q: 'In my ___, the course is too long.', a: ['opinion', 'view'], why: '*In my opinion* / *in my view* introduces an opinion.' },
      { q: 'Examples, reasons and numbers are the ___ of a paragraph.', a: ['details'], why: 'They support the main idea.' },
    ] },
  ],
};
