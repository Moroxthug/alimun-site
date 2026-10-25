// English B1 for study and exams, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Writing a clear text',
  goal: 'Write a clear paragraph with a topic sentence, support and a conclusion, link your ideas and plan a short essay.',
  art: 'snail',
  tags: { skills: ['writing', 'grammar', 'reading'], topics: ['paragraph-structure', 'linking-words', 'essay'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Building a paragraph',
      about: 'Topic sentence, supporting sentences and a concluding sentence.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'In academic writing, each paragraph is about **one main idea**. It usually has three parts. The **topic sentence** comes first and says what the paragraph is about. The **supporting sentences** give reasons, examples and details. The **concluding sentence** finishes the paragraph, often by repeating the main idea in different words.' },
          { t: 'table', caption: 'The parts of a paragraph', explain: ['head', 'col0', 'col1'], head: ['Part', 'Its job', 'Useful words'], rows: [
            ['Topic sentence', 'says what the paragraph is about', 'There are several… / … has many advantages.'],
            ['Supporting sentences', 'give reasons, examples and details', 'Firstly, … / Secondly, … / For example, …'],
            ['Concluding sentence', 'finishes the paragraph', 'For these reasons, … / This shows that…'],
          ] },
        ],
        [
          { t: 'reading', title: 'A model paragraph', md: 'Living in student accommodation has several advantages for first-year students. Firstly, it is usually close to the campus, so students can walk to lectures. Secondly, it is a good way to meet people from different countries and courses. For example, many halls of residence organise social events in the first weeks. Finally, bills such as electricity and internet are often included in the rent, which makes it easier to plan a budget. For these reasons, student accommodation is a good choice for many new students.' },
          { t: 'tip', art: 'owl', md: 'Every supporting sentence must be about the topic sentence. If a sentence is about something else, delete it or start a new paragraph.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the model paragraph. True or false?', items: [
            { q: 'The topic sentence is the first sentence.', a: 't', why: 'It says what the paragraph is about: the advantages of student accommodation.' },
            { q: 'The paragraph gives three advantages.', a: 't', why: 'It is close to the campus, you meet people and bills are often included.' },
            { q: 'The example is about social events.', a: 't', why: '*For example, many halls of residence organise social events.*' },
            { q: 'The last sentence introduces a new idea.', a: 'f', why: 'It repeats the main idea: student accommodation is a good choice.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that introduce an example.', items: [
            { s: '[For] [example], many halls organise social events in the first weeks.', why: '*For example* introduces an example.' },
            { s: 'Some bills, [such] [as] electricity and internet, are included in the rent.', why: '*such as* introduces examples in the middle of a sentence.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best sentence.', items: [
            { q: 'The best topic sentence for a paragraph about studying in groups:', o: ['Studying in a group can help students in several ways.', 'My friend Leo studies in a group.', 'Yesterday I went to the library.'], why: 'A topic sentence states the main idea of the whole paragraph.' },
            { q: 'Topic sentence: *Cycling to university has many benefits.* The best supporting sentence:', o: ['For example, it is cheap and keeps you fit.', 'In conclusion, cycling is good.', 'Many people prefer cars.'], why: 'A supporting sentence gives a reason or an example for the main idea.' },
            { q: 'The best concluding sentence for the paragraph about cycling:', o: ['For these reasons, more students should cycle to university.', 'Firstly, bikes are cheap.', 'My bike is red.'], why: '*For these reasons* finishes the paragraph and repeats the main idea.' },
            { q: 'Where does the topic sentence usually go?', o: ['at the start of the paragraph', 'in the middle of the paragraph', 'after the concluding sentence'], why: 'In academic English it usually comes first.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Linking ideas',
      about: 'Use moreover, however and therefore to connect sentences.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Linking words show how two ideas are connected. **Moreover** adds an idea, **however** shows a contrast and **therefore** shows a result. They are more formal than *and*, *but* and *so*, and they are common in essays.' },
          { t: 'table', caption: 'Linking words', explain: ['head', 'col0'], quiz: true, head: ['Meaning', 'Linking words', 'Example'], rows: [
            ['adding an idea', 'moreover, in addition, also', 'Online courses are flexible. Moreover, they are often cheaper.'],
            ['showing a contrast', 'however, although, on the other hand', 'Online courses are flexible. However, some students feel lonely.'],
            ['showing a result', 'therefore, as a result, so', 'The library is open all night. Therefore, students can study late.'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'The course was hard. **However**, I enjoyed it.', n: '*However* starts a new sentence and has a comma after it.' },
            { s: '**Although** the course was hard, I enjoyed it.', n: '*Although* joins two parts of one sentence. Use a comma between the parts.' },
            { s: 'I enjoyed the course **although** it was hard.', n: 'When *although* is in the middle, you do not need a comma.' },
            { s: 'The rent is high. **Therefore**, many students share a flat.', n: '*Therefore* shows a result. A comma usually follows it.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Do not use *however* like *but* to join two sentences with only a comma. *The flat is small, however it is cheap* is a common mistake. Write *The flat is small. However, it is cheap.*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best linking word.', items: [
            { q: 'The course was expensive. ___, it was very useful.', o: ['However', 'Therefore', 'Moreover'], why: 'The second idea is a contrast: *However*.' },
            { q: 'I missed the bus. ___, I was late for the exam.', o: ['As a result', 'Moreover', 'Although'], why: 'Being late is the result of missing the bus.' },
            { q: '___ the exam was difficult, most students passed.', o: ['Although', 'However', 'Therefore'], why: '*Although* joins two parts of one sentence.' },
            { q: 'Many students work part-time. ___, they have less time to study.', o: ['Therefore', 'Although', 'Moreover'], why: 'Having less time is the result of working: *Therefore*.' },
            { q: 'The flat is close to the campus. ___, it has a garden.', o: ['Moreover', 'Therefore', 'Although'], why: 'The second sentence adds another good point: *Moreover*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with *moreover*, *however* or *therefore*.', items: [
            { q: 'Group work is useful. ___, it can be difficult to agree on a plan.', a: ['However'], why: 'A contrast: useful, but difficult.' },
            { q: 'The library has thousands of books. ___, it has a large online collection.', a: ['Moreover'], why: 'The second sentence adds another point.' },
            { q: 'The deadline is tomorrow. ___, I need to finish my essay tonight.', a: ['Therefore'], why: 'Finishing tonight is the result of the deadline.' },
            { q: 'Public transport is cheap for students. ___, it is better for the environment.', a: ['Moreover'], why: 'Another advantage is added.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'However, the results were not clear.', why: '*However* starts the sentence and has a comma after it.' },
            { a: 'Although it rained, we walked to the lecture.', why: '*Although* + subject + verb, then a comma and the main part.' },
            { a: 'Therefore, we need more time for this project.', why: '*Therefore* shows a result and starts the sentence.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A model essay',
      about: 'Read a short essay and see how it is built.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Is it better to study online or in a classroom?', md: 'Today many courses are available both online and in a classroom. Each way of studying has advantages and disadvantages, and the best choice depends on the student.\n\nOn the one hand, online learning is very flexible. Students can watch lessons at any time, so it is easier to study while working or looking after a family. Moreover, they do not have to travel, which saves time and money.\n\nOn the other hand, studying in a classroom has important benefits. Students can ask questions and get answers immediately. In addition, they can meet other learners and practise speaking with them. For example, group discussions in seminars help many people to develop their ideas. However, classroom courses take place at fixed times, which can be difficult for people with jobs.\n\nIn conclusion, I believe that both ways of studying can be successful. Students who need flexibility may prefer online courses, while students who learn best by talking to others should choose a classroom. Therefore, it is important to think carefully about your own needs before you choose a course.' },
          { t: 'tip', art: 'owl', md: 'A short essay often has four paragraphs: an introduction, two paragraphs for the main ideas and a conclusion. Give your own opinion in the conclusion with *I believe that…* or *In my opinion, …*.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the essay. True, false or not given?', items: [
            { q: 'The writer thinks one way of studying is always better.', a: 'f', why: '*Both ways of studying can be successful.*' },
            { q: 'Online learners save time because they do not travel.', a: 't', why: '*They do not have to travel, which saves time and money.*' },
            { q: 'The writer gives group discussions as an example.', a: 't', why: '*For example, group discussions in seminars help many people.*' },
            { q: 'The writer studied online at university.', a: 'ng', why: 'The essay does not say how the writer studied.' },
            { q: 'According to the writer, classroom courses are flexible.', a: 'f', why: 'They *take place at fixed times*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Think about how the essay is built.', items: [
            { q: 'What is the job of the first paragraph?', o: ['to introduce the topic', 'to give examples', 'to sum up the essay'], why: 'It presents the question and says that the answer depends on the student.' },
            { q: 'What is the topic sentence of the second paragraph?', o: ['On the one hand, online learning is very flexible.', 'Moreover, they do not have to travel, which saves time and money.', 'Students can watch lessons at any time.'], why: 'The first sentence gives the main idea; the others support it.' },
            { q: 'Which linking word in the third paragraph shows a contrast?', o: ['However', 'In addition', 'For example'], why: '*However* introduces a disadvantage after the advantages.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the words from the essay with their job.', pairs: [
            ['Moreover', 'adds another point'],
            ['On the other hand', 'introduces the other side'],
            ['For example', 'gives an example'],
            ['In conclusion', 'starts the last paragraph'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'The sentence that says what a paragraph is about is the ___.', o: ['topic sentence', 'concluding sentence', 'example'], why: 'The topic sentence gives the main idea.' },
      { q: 'The rent is very high. ___, I share a flat with three friends.', o: ['Therefore', 'However', 'Although'], why: 'Sharing is the result of the high rent.' },
      { q: '___ she was tired, she went to the seminar.', o: ['Although', 'However', 'Moreover'], why: '*Although* joins two parts of one sentence.' },
      { q: 'The best concluding sentence:', o: ['For these reasons, a part-time job can be good for students.', 'Firstly, students earn money.', 'For example, my friend works in a café.'], why: '*For these reasons* finishes the paragraph.' },
      { q: 'Which sentence is correct?', o: ['The room is small. However, it is quiet.', 'The room is small, however it is quiet.', 'The room is small however, it is quiet.'], why: '*However* starts a new sentence and has a comma after it.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with *moreover*, *however* or *therefore*.', items: [
      { q: 'The course is very useful. ___, it is quite expensive.', a: ['However'], why: 'A contrast: a good point, then a bad point.' },
      { q: 'The campus is beautiful. ___, it has excellent sports facilities.', a: ['Moreover'], why: 'Another good point is added.' },
      { q: 'The train was cancelled. ___, I took the bus.', a: ['Therefore'], why: 'Taking the bus is the result.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'A paragraph should be about one main idea.', a: 't', why: 'Each paragraph develops one main idea.' },
      { q: 'Supporting sentences give reasons and examples.', a: 't', why: 'That is their job.' },
      { q: 'You give your opinion in the introduction and never in the conclusion.', a: 'f', why: 'The conclusion is a good place for your opinion.' },
      { q: '*Moreover* shows a contrast.', a: 'f', why: '*Moreover* adds an idea. *However* shows a contrast.' },
    ] },
  ],
};
