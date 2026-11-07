// English A1, class 32 (docs/LESSONS_PLAN.md). Builds on book lesson u6:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c32',
  focus: 'By the end of the class every student can talk about their hobbies with **like / love / don’t like + -ing** (*I love reading*), and use **play**, **go** and **do** correctly with free-time activities (*play football, go swimming, do yoga*). Every student should say at least three true sentences about their free time and ask a classmate about theirs.',
  tips: [
    'The main mistake is *I like swim* or *I like to swimming*. At A1, teach **like + -ing** for hobbies and correct it consistently.',
    'Spelling of -ing: *swim → swimming*, *dance → dancing*, *run → running*. Do not spend long on rules; show the three patterns on the board.',
    '*play / go / do*: **play** for games and ball sports, **go** for -ing activities (*go swimming, go shopping*), **do** for others (*do yoga, do karate*). Learners often say *make sport*: correct it to *do sport*.',
    'Musical instruments take *the*: *play the guitar*. Sports do not: *play tennis*.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show (or mime) three hobbies. Ask: *Do you like reading? Do you like swimming?* Students answer *Yes, I do / No, I don’t.*' },
    { min: 10, title: 'like + -ing', md: 'Board page 1. Elicit the rule; students write the -ing forms on the board.' },
    { min: 10, title: 'play, go, do', md: 'Board page 2. Students sort the activities into the three verbs together.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Common mistakes', md: 'Board page 3. Students fix the mistakes and say the sentences aloud.' },
    { min: 5, title: 'Exam corner', md: 'Board page 4: an A2 Key reading task about hobbies.' },
    { min: 5, title: 'Close', md: 'Each student says one hobby they love and one they don’t like. Set the homework.' },
  ],
  board: [
    { title: 'like + -ing', blocks: [
      { t: 'examples', items: [
        { s: 'I **love reading**.', n: '*love* + verb with *-ing*.' },
        { s: 'She **likes dancing**.', n: '*she likes*, with *-s*.' },
        { s: 'We **don’t like running**.', n: 'Negative: *don’t like* + *-ing*.' },
        { s: '**Do you like cooking**? – Yes, I do.', n: 'Question and short answer.' },
      ] },
      { t: 'ex', kind: 'wordform', h: 'Write the -ing form of the word.', items: [
        { q: 'I love ___ in the sea.', base: 'swim', a: ['swimming'], why: 'Short verb, one vowel + one consonant: double it, *swimming*.' },
        { q: 'My son likes ___ .', base: 'dance', a: ['dancing'], why: 'Verbs ending in *-e*: drop the *e*, *dancing*.' },
        { q: 'Do you like ___ books?', base: 'read', a: ['reading'], why: 'Most verbs: add *-ing*.' },
      ] },
    ] },
    { title: 'play, go, do', blocks: [
      { t: 'ex', kind: 'sort', h: 'Which verb goes with it?', groups: ['play', 'go', 'do'], items: [
        { s: 'football', g: 0, why: 'Ball sports: *play football*.' },
        { s: 'swimming', g: 1, why: 'An *-ing* activity: *go swimming*.' },
        { s: 'yoga', g: 2, why: '*do yoga*.' },
        { s: 'the guitar', g: 0, why: 'Instruments: *play the guitar*.' },
        { s: 'shopping', g: 1, why: '*go shopping*.' },
        { s: 'karate', g: 2, why: 'Martial arts: *do karate*.' },
      ] },
    ] },
    { title: 'Common mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I like [swim] in the summer.', a: ['swimming'], why: 'For hobbies: *like* + *-ing*.' },
        { s: 'We [play] swimming on Saturdays.', a: ['go'], why: 'With *-ing* activities: *go swimming*.' },
        { s: 'He [makes] karate.', a: ['does'], why: '*do karate*; with *he*: *does*.' },
        { s: 'She plays [guitar] very well.', a: ['the guitar'], why: 'Instruments take *the*.' },
      ] },
    ] },
    { title: 'Exam corner: reading', blocks: [
      { t: 'reading', title: 'Three friends', md: '**Kim** loves going to the cinema, but she doesn’t like sport. **Raj** plays football twice a week and goes swimming on Sundays. **Lena** does yoga every morning and loves reading in the evening.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: who is it?', items: [
        { q: 'Who doesn’t like sport?', o: ['Kim', 'Raj', 'Lena'], why: '*she doesn’t like sport*.' },
        { q: 'Who does something every morning?', o: ['Lena', 'Raj', 'Kim'], why: '*Lena does yoga every morning*.' },
        { q: 'Who plays a team sport?', o: ['Raj', 'Lena', 'Kim'], why: 'Football is a team sport: Raj.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In this part of the A2 Key reading test, three short texts talk about similar things. Underline the **key words** in each question (*doesn’t*, *every morning*, *team*) and find them in the texts.' },
    ] },
  ],
  activities: {
    one: { title: 'Free-time profile', md: 'Interview the student about their free time: what they love, like and don’t like, what they play, go and do, and how often. Write a short profile on the board from their answers. Then the student interviews you and writes yours.' },
    small: { title: 'Find a hobby partner', md: 'Each student writes three hobbies they like and one they don’t like in the chat. Students then ask each other questions (*Do you like …? Do you play …?*) and find the person with the most hobbies in common. Pairs report: *We both love cooking.*' },
    group: { title: 'Class survey', md: 'In breakout rooms of three, each room asks everyone in the room five questions about hobbies and makes a short report (*Two people like running. Nobody plays chess.*). Back together, each room reads one result; build a class picture on the board: *What is the most popular hobby?*' },
  },
  homework: { book: 'u6:p3', md: 'Finish book lesson 3 of unit 6 (Free time), including the speaking task. Then write a short message to a new friend: three things you like doing, one you don’t like, and one question about their hobbies.' },
};
