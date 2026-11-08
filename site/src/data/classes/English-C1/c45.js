// English C1, class 45 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u10:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c45',
  focus: 'By the end every student talks about stress, recovery and wellbeing precisely, with natural collocations: *suffer from burnout*, *take its toll on*, *at a low ebb*, *build resilience*, *bounce back*, *a sense of purpose*, *peace of mind*, *strike a balance*. The speaking goal: describe a demanding period and how they recovered from it, choosing the exact strength of each phrase.',
  tips: [
    'Precision is the point of this class: *a bit run-down* and *burnt out* are very different. Ask students to rank phrases from mild to severe before they use them.',
    'Watch for the classic mistakes: *a peace of mind* (uncountable), *recharge my battery* (always plural), *strong stress* (*severe* or *acute*), *very stressing* (*stressed* for the person, *stressful* for the cause).',
    'The verbs of relief are not interchangeable: you *relieve*, *ease* or *alleviate* symptoms, you *boost* confidence, something cheerful *lifts* your spirits.',
    'Some students may talk about real difficult periods. Keep it supportive and let anyone choose a lighter example, such as an exam period or a busy month.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *How do you know when you need a break? What helps you recover?* Write the students’ words on the board, then upgrade two of them with collocations from the lesson.' },
    { min: 12, title: 'Strong collocations', md: 'Show board page 1. Students choose the words that go with each key word, then match the phrases with their meanings.' },
    { min: 10, title: 'Fix it', md: 'Show board page 2. Students correct the collocations, then say each corrected sentence aloud.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 1. Students choose alone, then compare and say why each wrong option does not collocate.' },
    { min: 5, title: 'Close', md: 'Each student says one thing that gives them peace of mind and one thing that takes its toll on them. Set the homework.' },
  ],
  board: [
    { title: 'Strong collocations', blocks: [
      { t: 'ex', kind: 'colloc', h: 'Which words go with the key word?', items: [
        { key: 'stress', o: ['chronic', 'severe', 'strong', 'acute'], a: [0, 1, 3], why: '*Chronic, severe, acute stress*; not *strong stress*.' },
        { key: 'a sense of', o: ['purpose', 'belonging', 'resilience', 'perspective'], a: [0, 1], why: '*A sense of purpose, a sense of belonging*; we *build resilience* and *keep things in perspective*.' },
        { key: 'boost', o: ['morale', 'confidence', 'symptoms', 'your mood'], a: [0, 1, 3], why: 'You *boost* morale, confidence or your mood; you *relieve* symptoms.' },
      ] },
      { t: 'ex', kind: 'match', h: 'Match each phrase with its meaning.', pairs: [
        ['at a low ebb', 'at a low point emotionally'],
        ['reach breaking point', 'reach the point where you cannot cope'],
        ['bounce back', 'recover quickly'],
        ['recharge your batteries', 'rest to get your energy back'],
        ['keep things in perspective', 'see how important something really is'],
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Years of overtime finally took their [price] on him.', a: ['toll'], why: 'The fixed phrase is *take its (their) toll on*.' },
        { s: 'Having savings gives me [a peace of mind].', a: ['peace of mind'], why: '*Peace of mind* is uncountable: no *a*.' },
        { s: 'The deadlines this month have been very [stressing].', a: ['stressful'], why: 'The cause is *stressful*; the person is *stressed*.' },
        { s: 'Gentle exercise can [cure] the symptoms of mild anxiety.', a: ['ease', 'relieve', 'alleviate'], why: 'You *ease*, *relieve* or *alleviate* symptoms; *cure* claims too much.' },
        { s: 'It’s hard to [find] a balance between work and rest.', a: ['strike'], why: 'The natural collocation is *strike a balance*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Phrases about the mind carry strength. *Run-down* is mild, *under strain* is serious, *burnt out* and *at breaking point* are severe. Choose the one that fits the situation, not the most dramatic one.' },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 1', blocks: [
      { t: 'text', md: 'A short text about a teacher who took a year off, one sentence at a time. Choose the word that best fits each gap.' },
      { t: 'ex', kind: 'select', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 1): choose the word that best fits each gap.', items: [
        { q: 'After ten years in a busy school, the long days had begun to take their ___ on Marta.', o: ['toll', 'price', 'cost', 'charge'], why: 'Only *toll* completes *take its (their) toll on*.' },
        { q: 'By the spring she was suffering ___ burnout and found it hard to get out of bed.', o: ['from', 'with', 'of', 'by'], why: '*Suffer from* an illness or condition.' },
        { q: 'A year away gave her the chance to ___ her batteries.', o: ['recharge', 'refill', 'renew', 'restore'], why: 'The fixed idiom is *recharge your batteries*.' },
        { q: 'Volunteering at a farm gave her a renewed sense of ___.', o: ['purpose', 'intent', 'target', 'aim'], why: '*A sense of purpose*: the others do not collocate with *a sense of*.' },
        { q: 'She returned to teaching with far greater mental ___.', o: ['resilience', 'endurance', 'stamina', 'firmness'], why: '*Mental resilience*: the ability to recover from difficulty.' },
        { q: 'She now finds it much easier to ___ a balance between work and the rest of her life.', o: ['strike', 'hit', 'make', 'catch'], why: 'We *strike* a balance.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 1 of C1 Advanced the four options often mean nearly the same thing. Say the whole phrase in your head with each option: only one is a collocation you have heard before.' },
    ] },
  ],
  activities: {
    one: { title: 'A demanding period', md: 'The student describes a busy or difficult time (an exam season, a move, a new job): how it took its toll, how they knew they needed a break, and how they bounced back. Prompt for at least six collocations. At the end, write their three best sentences in the chat and upgrade one weak phrase together.' },
    small: { title: 'Mild to severe', md: 'Put eight phrases in the chat (*a bit run-down*, *under strain*, *at a low ebb*, *burnt out*, *at breaking point* and others). Students agree on an order from mild to severe, then each describes a fictional character at one point on the scale while the others guess which phrase they chose.' },
    group: { title: 'Wellbeing week', md: 'Breakout rooms of three plan a wellbeing week for a busy office, using *build resilience*, *boost morale*, *peace of mind* and *strike a balance*. Bring everyone back; each room presents its plan in one minute and the class chooses the most realistic one.' },
  },
  homework: { book: 'u10:p3', md: 'Finish lesson 3 of unit 10 if needed, then do lesson 4 (The psychology of happiness). Write about 150 words for a student magazine on how to recover after a stressful period, using at least six collocations from today.' },
};
