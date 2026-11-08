// English C1, class 72 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u15:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c72',
  focus: 'By the end every student can plan a formal letter or email for C1 Advanced Writing Part 2: an opening that states the purpose, one paragraph for each point of the task, and a close that says what the writer expects. The language goal is control of tone: criticism softened but clear (*I was, however, disappointed to discover that…*), indirect requests (*I would be grateful if you could…*) and formal linkers and noun phrases instead of chatty sentences.',
  tips: [
    'Students often think formal means long words. At C1 it means control: firm without being rude, polite without being vague. Praise a sentence that is short, precise and polite.',
    'Check that every plan covers every point of the task. Missing one point costs more marks than any grammar mistake, so make students tick the points off aloud.',
    'Watch the closings: *Yours faithfully* after *Dear Sir or Madam*, *Yours sincerely* after a name. Many students mix them up.',
    'Do not let the class write the whole letter now. The planning and the key sentences are the class work; the full letter is the homework, sent to you for correction.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *When did you last complain or give feedback in writing? Did it work?* Collect two or three answers and ask what made the message effective.' },
    { min: 12, title: 'Formal tone', md: 'Show board page 1. Students rewrite each chatty phrase in a formal letter, then compare their versions with the answers.' },
    { min: 10, title: 'Firm but polite', md: 'Show board page 2. Students choose the best sentence for a formal letter and say what is wrong with the other two.' },
    { min: 15, title: 'Exam corner', md: 'Board page 3: C1 Advanced Writing Part 2. Students read the task, answer the planning questions, then write only the opening and the request sentence. Two students read theirs aloud.' },
    { min: 13, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student says one sentence from their plan that they are pleased with. Set the homework.' },
  ],
  board: [
    { title: 'From chatty to formal', blocks: [
      { t: 'table', caption: 'A formal letter in five moves', explain: ['head', 'col1'], head: ['Part', 'What it does', 'Useful language'], rows: [
        ['Opening', 'who you are and why you are writing', 'I am writing in response to… / With regard to…'],
        ['First point', 'the first part of the task, with detail', 'I found… particularly valuable.'],
        ['Second point', 'a problem or criticism, softened', 'I was, however, disappointed to discover that…'],
        ['Suggestions', 'what should change', 'It might be worth considering… / I would be grateful if you could…'],
        ['Closing', 'what you expect next', 'I look forward to hearing from you.'],
      ] },
      { t: 'ex', kind: 'fix', h: 'Make each phrase right for a formal letter.', items: [
        { s: 'I am writing [about] the new timetable for the night train.', a: ['with regard to', 'regarding', 'concerning', 'in connection with'], why: 'A more formal way to give the topic.' },
        { s: 'I would be grateful if you [will] reply by Friday.', a: ['could', 'would'], why: '*I would be grateful if you could*: conditional, not *will*.' },
        { s: 'Dear Sir or Madam, … Yours [sincerely],', a: ['faithfully'], why: 'Unknown name: *Yours faithfully* (British convention).' },
        { s: 'The staff were really nice, [but] the food was cold.', a: ['although', 'though', 'while', 'whereas'], why: 'A formal linker inside the sentence keeps the contrast smooth.' },
        { s: '[Hope to hear] from you soon.', a: ['I look forward to hearing'], why: 'A full, formal closing sentence.' },
      ] },
    ] },
    { title: 'Firm but polite', blocks: [
      { t: 'ex', kind: 'choice', h: 'Choose the best sentence for a formal letter.', items: [
        { q: 'You want to criticise the information you were given.', o: ['The information provided was, unfortunately, out of date.', 'Your information was rubbish.', 'The information was maybe a bit not so good.'], why: 'Clear and precise, softened by *unfortunately*: firm but polite.' },
        { q: 'You want the company to refund part of the fare.', o: ['I would therefore ask that you refund part of the fare.', 'Give me some money back.', 'Perhaps, if possible, you might maybe think about money.'], why: 'An indirect request that still says exactly what you want.' },
        { q: 'You want to suggest a change.', o: ['It might be worth offering a quiet carriage on night services.', 'You should obviously have a quiet carriage.', 'Quiet carriage, please.'], why: '*It might be worth* + -ing: a polite, persuasive suggestion.' },
        { q: 'You want to say that one thing was good.', o: ['The booking process was, I must say, remarkably straightforward.', 'Booking was super easy, well done guys!', 'Booking was OK I suppose.'], why: 'Formal praise first makes the criticism that follows more credible.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Begin with what went well, then the problem, then the suggestion. The reader is more likely to act on criticism from someone who is clearly fair.' },
    ] },
    { title: 'Exam corner: Writing Part 2', blocks: [
      { t: 'reading', title: 'Your task', md: 'In the format of the C1 Advanced exam (Writing Part 2), write your answer in 220 to 260 words.\n\nA rail company has started a new night train between your city and a capital in a neighbouring country. It has asked passengers for feedback. Write a letter to the customer services manager. In your letter you should evaluate your experience of the journey, explain how the service could better meet the needs of people travelling for work, and suggest one change that would attract more passengers.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Writing Part 2): check your plan before you write.', items: [
        { q: 'How many points must your letter cover?', o: ['Three: your experience, the needs of business travellers, and one change to attract passengers', 'One: a complaint about the train', 'Two: a story about the journey and your opinion of rail travel'], why: 'Every point of the task is needed for full Content marks.' },
        { q: 'Which opening is best?', o: ['I am writing in response to your request for feedback on the new night service.', 'Hi, I took your train last week.', 'Trains are an important part of modern life.'], why: 'It says at once who you are and why you are writing.' },
        { q: 'Which greeting and closing go together?', o: ['Dear Sir or Madam … Yours faithfully', 'Dear Sir or Madam … Yours sincerely', 'Dear Manager … Best wishes'], why: 'Unknown name: *Yours faithfully*.' },
        { q: 'What should the paragraph on business travellers contain?', o: ['A specific need and a practical way to meet it', 'A list of everything wrong with the train', 'Your personal travel plans for next year'], why: 'The examiner rewards precise detail linked to the task point.' },
      ] },
      { t: 'tip', md: 'Spend about five minutes planning in the exam: list the task points, give each one a paragraph and decide on your reader. Use the last five minutes to check that the close matches the greeting and that every point is covered.' },
    ] },
  ],
  activities: {
    one: { title: 'Two readers, one problem', md: 'Give the student a simple problem (a hotel room that was not cleaned). The student writes two short versions in the chat: one message to a friend and one formal email to the hotel manager. Compare them line by line and talk about what changed: vocabulary, linkers, requests, noun phrases.' },
    small: { title: 'Soften it', md: 'Post four blunt complaints in the chat (*Your website is useless*, *The tour guide was rude*). Each student rewrites one as a firm but polite sentence. The group votes for the version that is clearest and most likely to get a reply.' },
    group: { title: 'Letter relay', md: 'Breakout rooms of four or five, each with the task on board page 3. One student writes the opening in the chat, the next writes the first point, and so on to the closing. Each room reads its letter aloud; the class says which room controlled the tone best.' },
  },
  homework: { book: 'u15:p4', md: 'Finish lesson 4 of unit 15, then do lesson 1 of unit 16 (Lucky to have been chosen). Write the letter from board page 3 in 220 to 260 words and send it to your teacher for correction.' },
};
