// English A1, class 11 (docs/LESSONS_PLAN.md). Review of book unit u2. Draft for the owner's review.
export const LESSON = {
  id: 'c11',
  focus: 'This class brings unit 2 together. By the end every student can talk for one to two minutes about their family and their things using family words, possessives (*my, his, her, their, ’s*), *have got / has got*, plurals and *this / that / these / those*, and can answer a classmate’s questions. Use the class to fix the typical unit 2 mistakes before the unit test.',
  tips: [
    'Before class, check the students’ unit 2 practice results in the dashboard and bring two or three real mistakes to the board.',
    'The typical unit 2 mistakes: *his* / *her* mixed up, *She have got*, adjectives after the noun or with *-s*, missing *a* / *an*, irregular plurals (*childs, mans*). Listen for them in the activity.',
    'Mix questions from units 1 and 2: a student who says *My sister is 20 and she has got two children* is using both units well; praise it.',
    'Keep your own talking short. A review class works best when students talk and you note mistakes.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Quick quiz: say a word, students say the opposite or the plural (*brother → sister*, *child → children*, *this → these*).' },
    { min: 10, title: 'Unit 2 in one page', md: 'Show board page 1. Students do the exercise, then each makes one sentence of their own with a different word from the table.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below. This is the main part of the class.' },
    { min: 10, title: 'Our mistakes', md: 'Show board page 2, adding the mistakes you heard. Students fix them alone, then together.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3.' },
    { min: 5, title: 'Close', md: 'Remind students about the unit 2 test in the dashboard (70% passes). Set the homework.' },
  ],
  board: [
    { title: 'Unit 2 in one page', blocks: [
      { t: 'table', caption: 'What we learned', explain: ['head', 'col0'], head: ['Point', 'Example'], rows: [
        ['a or an', 'a sister, an uncle'],
        ['plurals', 'two children, three boxes'],
        ['this, that, these, those', 'These are my keys.'],
        ['possessives', 'his car, her bag, my brother’s wife'],
        ['have got', 'She’s got two cats. Have you got a bike?'],
      ] },
      { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
        { q: 'My uncle and ___ wife live in Leeds.', o: ['his', 'her', 'their'], why: 'The owner is my uncle, a man: *his*.' },
        { q: 'They’ve got three ___.', o: ['children', 'childs', 'childrens'], why: '*child* → *children*.' },
        { q: '___ your parents got a car?', o: ['Have', 'Has', 'Are'], why: '*your parents* = they: *Have … got*.' },
        { q: 'It’s ___ old house.', o: ['an', 'a', 'the'], why: '*old* starts with a vowel sound.' },
      ] },
    ] },
    { title: 'Our mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Maria lives with [his] brother.', a: ['her'], why: 'Maria is a woman: *her*.' },
        { s: 'My father [have] got a big car.', a: ['has'], why: 'With *he*: *has got*.' },
        { s: 'There are two [womans] in the photo.', a: ['women'], why: 'Irregular plural: *women*.' },
        { s: 'She has got a [car red].', a: ['red car'], why: 'The adjective goes before the noun.' },
        { s: '[This] are my glasses.', a: ['These'], why: 'More than one, near: *these*.' },
      ] },
    ] },
    { title: 'Exam corner: read and answer', blocks: [
      { t: 'reading', title: 'An email from Joon', md: 'Hi Clara,\n\nThanks for your photo! Here is one of my family. My mum is on the left and my dad is next to her. He’s got a black hat. The two girls in the middle are my sisters, Ji-woo and Hana. Ji-woo is 16 and Hana is 11. I’m on the right with our dog, Bo. He’s got very short legs!\n\nJoon' },
      { t: 'ex', kind: 'tf', h: 'In the format of the A2 Key reading test: right, wrong or doesn’t say?', ng: true, items: [
        { q: 'Joon’s father is next to his mother.', a: 't', why: '*my dad is next to her*.' },
        { q: 'Joon has got two brothers.', a: 'f', why: 'He has got two sisters.' },
        { q: 'Hana is 16.', a: 'f', why: 'Ji-woo is 16; Hana is 11.' },
        { q: 'Clara has got a dog.', a: 'ng', why: 'The email does not say.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Interview about family and things', md: 'Interview the student for five minutes about their family and their things (*Have you got cousins? What’s your brother like? Has your flat got a balcony?*). Then the student interviews you. Finish with a two-minute talk by the student with no help; give three corrections and one strong compliment.' },
    small: { title: 'Family quiz', md: 'Each student prepares (two minutes) four true sentences about their family and things, with one false. They read them; the others ask questions to find the false sentence (*Has your sister really got five cats?*).' },
    group: { title: 'Two-minute talks', md: 'Breakout rooms of three: each student talks for two minutes about their family and things; the others ask two questions each and note one good sentence and one mistake in the chat for the speaker. Back in the main room, collect three common mistakes and fix them together.' },
  },
  homework: { book: 'u2', md: 'Do the unit 2 test in your course book (70% passes). Then write 50 to 70 words about your family and your home, using *have got* and possessives.' },
};
