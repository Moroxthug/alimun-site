// English B1, class 26 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u6:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c26',
  focus: 'By the end of the class every student can report questions (*She asked if it was far. He asked where I lived.*) and requests and orders (*He asked me to help him. She told us not to touch it.*). The key accuracy point is normal word order and no *do/does/did* in reported questions.',
  tips: [
    'The biggest problem is question word order: *She asked where did I live*. Show that a reported question is no longer a question: no *did*, subject before verb, no question mark.',
    'Yes/no questions need **if** (or *whether*). Learners often say *He asked me was I hungry*. Drill a few with *if* quickly before the activity.',
    'Requests and orders use **ask / tell + person + to**. The negative is **not to**: *told me not to worry*, never *told me to not worry* or *don’t*.',
    'Job interviews and doctor visits give natural practice: students report the questions they were asked.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What questions did people ask you at your last job interview or exam?* Write two of them as reported questions, exactly as students say them.' },
    { min: 10, title: 'Reporting questions and requests', md: 'Show board page 1. Explain the table. Correct the warm-up sentences together.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students match and put the words in order, then report two questions you ask them.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: in the format of B1 Preliminary Writing part 1, students choose the best sentences to tell a friend about an interview.' },
    { min: 5, title: 'Fix it', md: 'Show board page 4 and add one mistake from the activity.' },
    { min: 5, title: 'Close', md: 'Each student reports one question somebody asked them this week. Set the homework.' },
  ],
  board: [
    { title: 'Reporting questions and requests', blocks: [
      { t: 'table', caption: 'From direct to reported', explain: ['head', 'col0'], head: ['Type', 'Direct', 'Reported'], rows: [
        ['yes/no question', '“Is it far?”', 'He asked if it was far.'],
        ['question word', '“Why are you late?”', 'She asked why I was late.'],
        ['polite request', '“Can you help me?”', 'He asked me to help him.'],
        ['order', '“Sit down.”', 'She told us to sit down.'],
        ['negative order', '“Don’t touch it.”', 'He told me not to touch it.'],
      ] },
      { t: 'text', md: 'A reported question is **not** a question: no *do/does/did*, the subject comes before the verb, and there is no question mark.' },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the direct question and the reported one.', pairs: [
        ['“Where do you work?”', 'She asked where I worked.'],
        ['“Are you free on Friday?”', 'He asked if I was free on Friday.'],
        ['“What time does it start?”', 'She asked what time it started.'],
        ['“Have you got a car?”', 'He asked if I had a car.'],
      ] },
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'She asked me why I wanted the job.', why: 'Question word, then subject, then verb.' },
        { a: 'He told us not to be late.', why: '*tell + person + not to + verb*.' },
      ] },
    ] },
    { title: 'Exam corner: Writing part 1', blocks: [
      { t: 'text', md: 'In the format of the B1 Preliminary exam, Writing part 1. Your friend Sam wrote: *“How was the job interview? What did they ask you? Do you think you got the job?”* Choose the best sentence for each part of your reply.' },
      { t: 'ex', kind: 'choice', h: 'Choose the best sentence.', items: [
        { q: 'Tell Sam what they asked.', o: ['They asked me why I wanted to work there and if I could start in May.', 'They asked me why did I want to work there.', 'They asked: can you start in May?'], why: 'Correct reported questions: normal word order and *if*.' },
        { q: 'Tell Sam what they told you.', o: ['They told me to wait for a phone call next week.', 'They told me that wait for a call.', 'They said me to wait.'], why: '*told me to* + verb.' },
        { q: 'Answer Sam’s last question.', o: ['I think it went well, but I’m not sure yet!', 'Yes I got.', 'The job is in an office.'], why: 'It answers *Do you think you got the job?* naturally.' },
      ] },
      { t: 'tip', md: 'In Writing part 1 you must answer **all** the questions in the email, in about 100 words. Tick each question in the email when you answer it, so you don’t forget one.' },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'She asked where [did I live].', a: ['I lived'], why: 'No *did*, normal word order.' },
        { s: 'He asked me [was I] hungry.', a: ['if I was'], why: 'Yes/no questions need *if*.' },
        { s: 'The teacher told us [to not] talk.', a: ['not to'], why: 'The negative is *not to*.' },
        { s: 'She asked me [help] her with her bags.', a: ['to help'], why: '*ask + person + to* + verb.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'The interview, told later', md: 'Interview the student for a job they would like (six questions, two requests: *Can you send us your CV? Don’t forget your passport*). Then the student phones a “friend” (you) and reports the whole interview. Swap: the student interviews you and you report it, with one mistake for the student to correct.' },
    small: { title: 'Questions in a hat', md: 'Each student writes two questions for another student in the chat. Students answer the questions they receive aloud, then a third student reports the exchange (*Ana asked Tom if he liked cooking, and he said he loved it*). Correct word order mistakes after each report.' },
    group: { title: 'At the doctor’s', md: 'Breakout rooms of three: a doctor, a patient and a reporter. The doctor asks four questions and gives two instructions. The reporter writes them in the chat in reported speech (*The doctor asked if she slept well and told her to drink more water*). Swap roles. Back together, correct the reports.' },
  },
  homework: { book: 'u6:p2', md: 'Finish book lesson 2 of unit 6 (She asked me if…), including the speaking task. Then write a reply to Sam’s email from the exam corner (about 100 words), reporting at least three questions and one instruction.' },
};
