// English A1, class 37 (docs/LESSONS_PLAN.md). Builds on book lesson u7:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c37',
  focus: 'By the end of the class every student can ask *What’s the weather like?* and answer with *It’s* + a weather word, name the seasons and the twelve months with *in*, and say what they wear in different weather. The key pattern is the subject *It*: weather sentences always start with it.',
  tips: [
    'Speakers of Spanish, Italian, Portuguese and Arabic often drop the subject: *Is cold today.* Correct it every time to **It’s cold today.**',
    'Learners translate *How is the weather?* into **How is the weather like?** Teach the fixed question **What’s the weather like?** and drill it.',
    'Months need a capital letter in English, unlike in many languages. Check this in every written answer.',
    'Pronunciation: *February*, *Wednesday* and *clothes* are hard. Model them slowly, then at normal speed.',
    'Use the students’ real cities: asking about the weather where they are now makes the lesson feel real.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask each student: *Where are you now? What’s the weather like there?* Write the weather words they need on the board.' },
    { min: 10, title: 'Weather words', md: 'Show board page 1. Go through the table, then students solve the exercise. Point out that every sentence starts with *It’s*.' },
    { min: 10, title: 'Seasons and months', md: 'Show board page 2. Say the months round the class, one each. Students complete the gaps with *in* and a month or season.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Weather and clothes', md: 'Show board page 3. Students fix the mistakes on the board, then say what they wear when it is cold, hot and rainy.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 4. Read the short messages; students choose the right answer.' },
    { min: 5, title: 'Close', md: 'Each student says the weather today and one month they like, with a reason. Set the homework.' },
  ],
  board: [
    { title: 'What’s the weather like?', blocks: [
      { t: 'table', caption: 'The weather', explain: ['head', 'col1'], head: ['Say', 'What it means'], rows: [
        ['It’s sunny.', 'there is sun'],
        ['It’s raining.', 'water is falling now'],
        ['It’s cloudy.', 'there are a lot of clouds'],
        ['It’s windy.', 'there is a lot of wind'],
        ['It’s snowing.', 'snow is falling now'],
        ['It’s hot. / It’s cold.', 'the temperature'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
        { q: '___ the weather like in London today?', o: ['What’s', 'How’s', 'How'], why: 'The fixed question is *What’s the weather like?*' },
        { q: 'It’s 35 degrees. It’s very ___.', o: ['hot', 'cold', 'snowing'], why: '35 degrees is hot.' },
        { q: '___ windy today. Close the window!', o: ['It’s', 'Is', 'There’s'], why: 'Weather sentences start with *It’s*.' },
      ] },
    ] },
    { title: 'Seasons and months', blocks: [
      { t: 'text', md: 'Use **in** with months and seasons: **in July**, **in the winter**. Months always start with a **capital letter**. The seasons are **spring**, **summer**, **autumn** (in the USA *fall*) and **winter**.' },
      { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
        { q: 'My birthday is ___ May.', a: ['in'], why: 'Months take *in*.' },
        { q: 'It snows a lot in the ___ in Canada.', a: ['winter'], why: 'Snow comes in the winter.' },
        { q: 'The month after March is ___.', a: ['April'], why: 'March, April, May. A capital letter.' },
        { q: 'The last month of the year is ___.', a: ['December'], why: '*December* is month twelve.' },
      ] },
    ] },
    { title: 'Weather and clothes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: '[Is] cold today. Wear a coat!', a: ['It’s', 'It is'], why: 'Weather sentences need the subject *It*.' },
        { s: '[How’s] the weather like today?', a: ['What’s', 'What is'], why: 'The fixed question is *What’s the weather like?*' },
        { s: 'We go to the beach in [july].', a: ['July'], why: 'Months take a capital letter.' },
      ] },
      { t: 'ex', kind: 'match', h: 'Match the weather and the clothes.', pairs: [
        ['It’s raining.', 'a raincoat and boots'],
        ['It’s very hot.', 'shorts and a T-shirt'],
        ['It’s snowing.', 'a warm coat and gloves'],
        ['It’s sunny.', 'sunglasses and a hat'],
      ] },
    ] },
    { title: 'Exam corner: short messages', blocks: [
      { t: 'reading', title: 'A message from Ben', md: 'Hi Mia! It’s cold and windy here in Edinburgh today, so bring your warm jumper. Tomorrow it’s sunny, so we can walk by the sea. See you at 6!' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: read the message and choose the right answer.', items: [
        { q: 'What’s the weather like in Edinburgh today?', o: ['Cold and windy.', 'Sunny.', 'Hot.'], why: '*It’s cold and windy here today.*' },
        { q: 'Why does Mia need a jumper?', o: ['Because it’s cold.', 'Because it’s raining.', 'Because they go to the sea.'], why: 'Ben says *it’s cold*, *so bring your warm jumper*.' },
        { q: 'What can they do tomorrow?', o: ['Walk by the sea.', 'Stay at home.', 'Go skiing.'], why: '*Tomorrow it’s sunny, so we can walk by the sea.*' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'The weather forecaster', md: 'Show a simple map (or draw one on the board) with four cities and a weather symbol for each. The student is the TV weather presenter: *In Madrid it’s sunny and hot. In London it’s raining.* Then swap: you present, the student asks *What’s the weather like in…?* Finish with what to wear in each city.' },
    small: { title: 'Find someone who', md: 'Write on the board: *likes the winter*, *has a birthday in summer*, *likes rain*, *lives in a hot place*. Students ask each other questions (*Do you like the winter? When is your birthday?*) and find one name for each. Then report: *Ana likes the winter.*' },
    group: { title: 'Holiday weather', md: 'Breakout rooms of three. Each room chooses a city and a month and writes three sentences in the chat: the weather, what to wear, one thing to do. Back in the main room, each room reads its sentences without the city name; the others guess the city.' },
  },
  homework: { book: 'u7:p2', md: 'Finish book lesson 2 of unit 7 (What’s the weather like?). Then write a message to a friend: say the weather where you are today, what you are wearing, and your favourite month and why.' },
};
