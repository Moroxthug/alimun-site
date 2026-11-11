// English B2, class 74 (docs/LESSONS_PLAN.md). Builds on book lesson u15:p3 (idioms for risk and success). Draft for the owner's review.
export const LESSON = {
  id: 'c74',
  focus: 'By the end of the class every student understands and uses eight to ten idioms for risk and success (*take the plunge*, *against all odds*, *a long shot*, *play it safe*, *pay off*, *bite off more than you can chew*), knows their exact meaning and tone, and uses two or three naturally in a short spoken story. Understanding idioms in a text matters more than using many.',
  tips: [
    'Idioms are informal or neutral. Warn students not to fill an essay with them; one well-chosen idiom is enough.',
    'Teach the whole fixed form: *against all odds* (not *against the odds* in every context), *bite off more than you can chew*.',
    'Ask students whether their language has a similar idiom: it helps memory and is good speaking practice.',
    'Check meaning with concept questions: *Is a long shot likely to succeed?* (No.)',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show board page 1 without the meanings. Students guess what each idiom means.' },
    { min: 12, title: 'Meanings', md: 'Reveal the meanings on board page 1 and do the matching exercise together.' },
    { min: 10, title: 'Story', md: 'Show board page 2. Read the dialogue aloud with a student; others find the idioms.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B2 First Reading Part 7. Students match the people with the statements.' },
    { min: 8, title: 'Close', md: 'Each student chooses the idiom they like most and says a sentence about their own life. Set the homework.' },
  ],
  board: [
    { title: 'Idioms for risk', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each idiom with its meaning.', pairs: [
        ['take the plunge', 'finally do something brave or risky'],
        ['against all odds', 'although success seemed very unlikely'],
        ['a long shot', 'something with little chance of success'],
        ['play it safe', 'avoid risks'],
        ['pay off', 'bring good results later'],
        ['bite off more than you can chew', 'try to do more than you can manage'],
      ] },
    ] },
    { title: 'A new business', blocks: [
      { t: 'dialogue', title: 'Two friends', lines: [
        { who: 'Nadia', s: 'I’ve finally taken the plunge. I’m opening my own bakery.' },
        { who: 'Marco', s: 'Wow! Weren’t you going to play it safe and keep your office job?' },
        { who: 'Nadia', s: 'I was, but I realised I’d regret it. It’s a long shot, I know.' },
        { who: 'Marco', s: 'Don’t bite off more than you can chew. Start small.' },
        { who: 'Nadia', s: 'I will. And if it pays off, the first cake is yours.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'Choose the best idiom.', items: [
        { q: 'He trained for years, and ___ he won a medal at fifty.', o: ['against all odds', 'a long shot', 'play it safe'], why: 'Success that seemed very unlikely.' },
        { q: 'I applied for the job, but it’s ___: there are 300 candidates.', o: ['a long shot', 'paying off', 'taking the plunge'], why: 'Little chance of success.' },
        { q: 'All those evening classes really ___ in the end.', o: ['paid off', 'played it safe', 'took the plunge'], why: 'Brought good results.' },
      ] },
    ] },
    { title: 'Exam corner: Reading Part 7', blocks: [
      { t: 'reading', title: 'Three people who changed direction', md: '**A. Tom** left a safe job in a bank to become a chef. The first two years were hard and he nearly gave up, but his restaurant is now fully booked every night.\n\n**B. Aisha** wanted to move to Canada for years. She kept waiting for the perfect moment, until she realised there was no such thing and booked her ticket.\n\n**C. Leo** started three projects at the same time and finished none of them. Now he works on one idea at a time.' },
      { t: 'ex', kind: 'choice', h: 'In the format of B2 First Part 7: which person…', items: [
        { q: 'tried to do too much at once?', o: ['C, Leo', 'A, Tom', 'B, Aisha'], why: 'He *bit off more than he could chew*.' },
        { q: 'almost stopped trying?', o: ['A, Tom', 'B, Aisha', 'C, Leo'], why: '*he nearly gave up*.' },
        { q: 'waited a long time before acting?', o: ['B, Aisha', 'A, Tom', 'C, Leo'], why: '*She kept waiting for the perfect moment*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In B2 First Part 7 the words in the questions are usually not the same as in the text. Look for the same idea said differently: *almost stopped trying* = *nearly gave up*.' },
    ] },
  ],
  activities: {
    one: { title: 'Advice column', md: 'You read out a short letter: *I want to leave my job to travel for a year, but everyone says I’m crazy.* The student answers as an advice columnist, using at least four idioms. Then the student writes a problem and you answer.' },
    small: { title: 'Idiom stories', md: 'Each student picks two idioms from the board and tells a true or invented story that uses both in one minute. The others guess whether the story is true.' },
    group: { title: 'Brave or crazy?', md: 'In breakout rooms of three, students discuss four situations in the chat (quitting a job, moving abroad alone, starting a band at forty, investing all savings). For each, they decide: *take the plunge* or *play it safe*? Rooms report their decisions with reasons.' },
  },
  homework: { book: 'u15:p3', md: 'Finish book unit 15, lesson 3. Write 100 words about someone you admire who took a risk, using three idioms from today.' },
};
