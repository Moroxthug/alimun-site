// English A1, class 5 (docs/LESSONS_PLAN.md). Builds on book lesson u1:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c05',
  focus: 'By the end of the class every student can spell their name and an email address aloud, understand spelled words, say and understand numbers from 0 to 20 and phone numbers, and say which languages they speak. Listening matters a lot today: students must hear the difference between letters like E and I, G and J, and between *thirteen* and *thirty*.',
  tips: [
    'The letters that cause most trouble: **E** and **I**, **G** and **J**, **A** and **R**. Spanish and Italian speakers often say E for I. Practise with dictation of real names.',
    'Show the stress difference: thir**TEEN** and **THIR**ty. Clap the strong part. Students hear it better than they read it.',
    'For phone numbers, teach *oh* for 0 and *double* for two numbers that are the same. Say real-looking numbers at natural speed after the first practice.',
    'With *speak*, learners often add *the* (*I speak the English*). Correct it quickly.',
    'Keep the alphabet work short and playful; do not go through all 26 letters one by one.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Spell your own first name slowly and write it as you spell. Then spell a student’s name; the student who recognises their name says *That’s me!*' },
    { min: 10, title: 'Letters in sound groups', md: 'Show board page 1. Say the groups aloud; students repeat. Then do the sort exercise on the board.' },
    { min: 10, title: 'Numbers and phone numbers', md: 'Show board page 2. Count around the class from 0 to 20 and back. Read the phone numbers aloud; students write them in the chat. Then the gap exercise.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Languages', md: 'Show board page 3. Each student says which languages they speak and how well: *I speak Arabic and a little English.* Then the fix exercise.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 4. Read each conversation aloud twice; students choose the right answer, as in the listening test.' },
    { min: 5, title: 'Close', md: 'Each student spells one word from today for the class to write in the chat. Set the homework.' },
  ],
  board: [
    { title: 'Letters in sound groups', blocks: [
      { t: 'table', caption: 'Same sound, same group', explain: ['head'], head: ['Sound', 'Letters'], rows: [
        ['ay', 'A H J K'],
        ['ee', 'B C D E G P T V'],
        ['e', 'F L M N S X Z'],
        ['eye', 'I Y'],
        ['oh / you / ar', 'O / Q U W / R'],
      ] },
      { t: 'ex', kind: 'sort', h: 'Which group is each letter in?', groups: ['ay', 'ee', 'eye'], explain: ['groups'], items: [
        { s: 'J', g: 0, why: '*J* is *jay*.' },
        { s: 'G', g: 1, why: '*G* is *jee*.' },
        { s: 'I', g: 2, why: '*I* is *eye*.' },
        { s: 'E', g: 1, why: '*E* is *ee*.' },
        { s: 'K', g: 0, why: '*K* is *kay*.' },
        { s: 'Y', g: 2, why: '*Y* is *why*.' },
      ] },
    ] },
    { title: 'Numbers and phone numbers', blocks: [
      { t: 'examples', items: [
        { s: 'thir**teen** (13) – **thir**ty (30)', n: 'Listen for the strong part.' },
        { s: '07 4415: **oh** seven, **double** four, one five', n: 'Each number on its own; 0 is *oh*.' },
      ] },
      { t: 'ex', kind: 'gap', h: 'Write the number in words.', items: [
        { q: 'There are ___ (15) students in my class.', a: ['fifteen'], why: '15 is *fifteen*, not *fiveteen*.' },
        { q: 'My daughter is ___ (12).', a: ['twelve'], why: '12 is *twelve*.' },
        { q: 'Room ___ (19), please.', a: ['nineteen'], why: '*nine* + *-teen*.' },
      ] },
    ] },
    { title: 'Languages', blocks: [
      { t: 'text', md: '**I speak** + language, with no *the*. Add **a little** if you do not speak it very well. With *he* or *she*: **speaks**.' },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I speak [the] French.', a: ['a little'], why: 'No *the* before a language; you can say *a little*.' },
        { s: 'She [speak] Chinese and English.', a: ['speaks'], why: 'With *she*: *speaks*.' },
        { s: 'He speaks [arabic].', a: ['Arabic'], why: 'Languages start with a capital letter.' },
      ] },
    ] },
    { title: 'Exam corner: listen and choose', blocks: [
      { t: 'text', md: 'Your teacher reads each conversation twice. Choose the right answer.\n\n**1.** *What’s your surname?* – *Hill. H, I, double L.*\n\n**2.** *What’s your phone number?* – *Oh six, double three, one eight.*\n\n**3.** *How old is your brother?* – *He’s thirteen.*' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key listening test: choose the right answer.', items: [
        { q: 'The man’s surname is', o: ['Hill', 'Hil', 'Hell'], why: '*H, I, double L* is *Hill*.' },
        { q: 'The phone number is', o: ['06 3318', '06 3381', '06 3138'], why: '*oh six, double three, one eight*.' },
        { q: 'Her brother is', o: ['13', '30', '3'], why: '*thirTEEN*: 13.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Booking a table', md: 'Role play: you work at a restaurant, the student books a table. Ask for their name (spell it), phone number and how many people. Read everything back with one mistake; the student must correct you (*No, double L!*). Swap roles with a new name and number.' },
    small: { title: 'Spelling race', md: 'Each student spells a word from the board or the book (a city, a name, a language). The others type it in the chat; the first correct answer wins a point. Then students dictate a made-up phone number to the person on their right, who reads it back.' },
    group: { title: 'Contact list', md: 'Breakout rooms of three: each student makes a fake contact card (name, email, phone number, languages) and dictates it to the others, who write it. Compare: are all the cards the same? Back in the main room, one room dictates a card to you while you write it on the board, and the class checks it.' },
  },
  homework: { book: 'u1:p4', md: 'Do book lesson 4 of unit 1 (Spell it, count it, say it). Then write your contact card in a message to the teacher: your name spelled with commas (P, A, B, L, O), a made-up phone number in words, and the languages you speak.' },
};
