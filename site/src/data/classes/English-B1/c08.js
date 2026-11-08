// English B1, class 8 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u2:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c08',
  focus: 'By the end every student knows the key words for jobs and applications (*vacancy, apply for, CV, experience, qualifications, interview*) and can write a short, clear email applying for a job: a polite opening, why they are writing, their experience, when they can start, and a polite ending. This class prepares directly for B1 Preliminary Writing Part 1.',
  tips: [
    'Collocations cause most errors: *apply for* a job (not *to*), *have experience in*, *three years’ experience*. Write the correct chunks on the board.',
    '*I look forward to hearing from you*: many students write *to hear*. Remind them that *to* here is a preposition.',
    'Students from some languages write very long formal openings. At B1, short and clear is better: *Dear Mr Brown, I am writing to apply for…*',
    'Give students the four questions of the task as a checklist: did they answer each one?',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Have you ever applied for a job? What was the interview like?* Collect useful words on the board.' },
    { min: 10, title: 'Words for applications', md: 'Show board page 1. Students match the words and meanings, then fix the collocation mistakes.' },
    { min: 15, title: 'Building the email', md: 'Show board page 2. Students put the parts of the email in order, then underline the useful phrases.' },
    { min: 10, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 3: B1 Preliminary Writing Part 1. Students choose the best sentence for each point, then write their own full answer in ten minutes or as homework.' },
    { min: 5, title: 'Close', md: 'Each student reads their opening sentence aloud. Set the homework.' },
  ],
  board: [
    { title: 'Words for applications', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each word with its meaning.', pairs: [
        ['a vacancy', 'a job that is free'],
        ['a CV', 'a document about your studies and work'],
        ['qualifications', 'the exams and courses you have passed'],
        ['an interview', 'a meeting where they ask you questions about the job'],
        ['a reference', 'a letter from someone who knows your work'],
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I am writing to apply [to] the job of receptionist.', a: ['for'], why: '*apply for* a job.' },
        { s: 'I have [experience of three years] in sales.', a: ['three years’ experience'], why: 'The natural order: *three years’ experience*.' },
        { s: 'I look forward to [hear] from you.', a: ['hearing'], why: '*look forward to* + -ing.' },
      ] },
    ] },
    { title: 'Building the email', blocks: [
      { t: 'ex', kind: 'order', h: 'Put the words in order to make sentences for an application email.', items: [
        { a: 'I am writing to apply for the job of waiter.', why: 'The reason for writing comes first.' },
        { a: 'I have worked in a busy café for two years.', why: 'Your experience, with the present perfect.' },
        { a: 'I could start at the beginning of June.', why: 'When you can start, with *could*.' },
      ] },
      { t: 'text', md: 'A good application email has five short parts: **Dear Ms Lee,** – why you are writing – your experience – when you can start – **I look forward to hearing from you. Best regards,** and your name.' },
    ] },
    { title: 'Exam corner: Writing Part 1', blocks: [
      { t: 'reading', title: 'An email from Mr Brown, the manager of a summer camp', md: 'Thank you for your interest in working at our camp. Please tell me: Why do you want to work with us? What experience do you have with children? Which weeks are you free?' },
      { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Writing, Part 1): choose the best sentence for each part of your answer.', items: [
        { q: 'Why do you want to work with us?', o: ['I love being outdoors and I would like to help children learn new sports.', 'Because.', 'I want work with you because summer.'], why: 'A clear reason in a full sentence.' },
        { q: 'What experience do you have with children?', o: ['I have looked after my two young cousins every summer for three years.', 'I have experience.', 'I looked after children since three years.'], why: 'A specific detail with the right tense.' },
        { q: 'Which weeks are you free?', o: ['I am free from the 1st of July until the end of August.', 'Free.', 'I am free since July.'], why: 'Answers the question exactly.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Writing Part 1 you write about 100 words and must answer all the points in the email. A friendly, clear answer to every point is worth more than long, difficult sentences.' },
    ] },
  ],
  activities: {
    one: { title: 'Mock interview', md: 'Play the interviewer for a job the student would like. Ask five questions (*Why do you want this job? What experience do you have? What are your strengths? When can you start?*). Then swap and let the student interview you. Give feedback on collocations.' },
    small: { title: 'Job fair', md: 'Put three job adverts in the chat. Each student chooses one and says why they would be good for it in one minute. The others ask one question each. Vote on who should get each job.' },
    group: { title: 'Write it together', md: 'Breakout rooms of three write one application email together for a job advert in the chat, about 100 words, with all five parts. Rooms paste their emails in the chat and the class chooses the clearest one.' },
  },
  homework: { book: 'u2:p4', md: 'Do lesson 4 of unit 2 (Two roads to a career). Write your full answer to Mr Brown on board page 3 in about 100 words.' },
};
