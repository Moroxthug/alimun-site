// English A1, class 40 (docs/LESSONS_PLAN.md). Review of book unit u7. Draft for the owner's review.
export const LESSON = {
  id: 'c40',
  focus: 'A review of unit 7 (Clothes and weather). By the end of the class every student can name clothes and colours with the adjective before the noun, talk about the weather and the months, and choose between the present simple (usually) and the present continuous (now). Most of the time is speaking; correct the typical mistakes of the unit as they come up.',
  tips: [
    'Before class, look at the students’ book progress and practice mistakes for unit 7, and pick the two weakest points to spend more time on.',
    'Collect mistakes during the speaking activity on a hidden note, then show them anonymously at the end: *Find the mistake.* Students correct each other.',
    'The present simple and continuous contrast is the hardest point of the unit. If time is short, keep the vocabulary quick and spend it here.',
    '*Jeans*, *trousers* and *shorts* are plural: *my jeans are*, *a pair of jeans*. Check this in speaking.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Each student describes what they are wearing today and the weather where they are, in two sentences.' },
    { min: 10, title: 'Clothes and colours', md: 'Show board page 1. Students solve both exercises on the board quickly, saying the answers aloud.' },
    { min: 10, title: 'Weather and months', md: 'Show board page 2. Students complete the gaps, then ask each other *What’s the weather like in your city in January?*' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Now or usually?', md: 'Show board page 3. Students choose the right form, then fix the mistakes. Use the mistakes you collected in the activity too.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 4.' },
    { min: 5, title: 'Close', md: 'Ask each student which point of the unit is still difficult. Set the unit test as homework.' },
  ],
  board: [
    { title: 'Clothes and colours', blocks: [
      { t: 'ex', kind: 'sort', h: 'One thing or plural?', groups: ['a …', 'a pair of …'], explain: ['groups'], items: [
        { s: 'jeans', g: 1, why: '*jeans* is always plural: *a pair of jeans*.' },
        { s: 'shirt', g: 0, why: 'One thing: *a shirt*.' },
        { s: 'shoes', g: 1, why: 'Two shoes: *a pair of shoes*.' },
        { s: 'dress', g: 0, why: 'One thing: *a dress*.' },
        { s: 'trousers', g: 1, why: '*trousers* is plural: *a pair of trousers*.' },
        { s: 'jacket', g: 0, why: 'One thing: *a jacket*.' },
      ] },
      { t: 'ex', kind: 'build', h: 'Write the sentence. Two words do not belong.', items: [
        { a: 'She is wearing a long black coat.', extra: ['blacks', 'an'], why: 'Adjectives come before the noun and never take *-s*; *long* starts with a consonant: *a*.' },
      ] },
    ] },
    { title: 'Weather and months', blocks: [
      { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
        { q: 'What’s the weather ___ today?', a: ['like'], why: 'The fixed question: *What’s the weather like?*' },
        { q: '___ very cold in December here.', a: ['It’s', 'It is'], why: 'Weather sentences start with *It*.' },
        { q: 'My holiday is ___ August.', a: ['in'], why: 'Months take *in*.' },
      ] },
    ] },
    { title: 'Now or usually?', blocks: [
      { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
        { q: 'I usually ___ a suit, but today I’m wearing jeans.', o: ['wear', '’m wearing', 'wearing'], why: '*Usually*: present simple.' },
        { q: 'Look outside! It ___.', o: ['’s snowing', 'snows', 'snow'], why: '*Look!*: it is happening now.' },
        { q: 'She ___ to work by bus every day.', o: ['goes', '’s going', 'going'], why: '*Every day*: present simple.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'My brother [wearing] a green hat.', a: ['’s wearing', 'is wearing'], why: 'Do not forget *be*.' },
        { s: 'I have [a coat red].', a: ['a red coat'], why: 'The adjective goes before the noun.' },
        { s: 'My new jeans [is] too long.', a: ['are'], why: '*jeans* is plural.' },
      ] },
    ] },
    { title: 'Exam corner: what are they saying?', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the best reply.', items: [
        { q: '“What’s the weather like there?”', o: ['It’s cloudy but warm.', 'I like the summer.', 'I’m wearing a coat.'], why: 'The question asks about the weather.' },
        { q: '“What are you doing?”', o: ['I’m cooking dinner.', 'I cook every day.', 'Yes, I am.'], why: 'The question asks about now: present continuous.' },
        { q: '“Do you like my new shoes?”', o: ['Yes, they’re lovely!', 'Yes, it’s lovely!', 'Yes, I do them.'], why: '*Shoes* is plural: *they’re*.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Two-minute talk', md: 'The student talks for two minutes about their favourite season: the weather, what they wear, what they usually do, and what they are doing this year. Note mistakes without stopping them. Then go through the notes together and the student repeats the corrected sentences.' },
    small: { title: 'Who is it?', md: 'One student describes another student’s clothes on camera without saying the name (*This person is wearing a blue shirt and glasses*). The others guess. Then the guesser describes the next person. Collect mistakes for the review on board page 3.' },
    group: { title: 'Weather report and fashion show', md: 'Breakout rooms of three. Each room prepares a 30-second weather report for one city in one month, and says what people are wearing there. One student presents in the main room; the others ask one question each. Collect mistakes for board page 3.' },
  },
  homework: { book: 'u7', md: 'Do the unit 7 test in the book. If you score under 70%, repeat the lesson with the most mistakes, then take the test again. Write down one question to ask in the next class.' },
};
