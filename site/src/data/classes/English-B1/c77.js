// English B1, class 77 (docs/LESSONS_PLAN.md). Builds on book lesson u16:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c77',
  focus: 'By the end of the class every student can write a clear email of about 100 words that answers all four notes of a B1 Preliminary Writing part 1 task, with a suitable opening and closing, paragraphs, and linking words. Each student writes one email in class and gets feedback on content, organisation and language.',
  tips: [
    'The most common way to lose marks is to forget one of the four notes. Teach students to tick each note when they have answered it.',
    'Informal emails to a friend: *Hi Sam*, contractions, *Write soon*. Students do not need very formal language at B1.',
    'Word count matters: about 100 words. Much shorter loses marks for content; much longer gives more room for mistakes.',
    'Give feedback with the exam’s four areas in mind: content, communicative achievement, organisation and language.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask who wrote an email in English this week and what it was about. Write useful openings and closings on the board.' },
    { min: 10, title: 'The task', md: 'Show board page 1. Read the task and the four notes together. Students say what each note asks them to do.' },
    { min: 10, title: 'A model', md: 'Show board page 2. Students find where each note is answered and the linking words.' },
    { min: 20, title: 'Writing', md: 'Show board page 3. Students write their email in 15 minutes (use "Everyone solves this" so they write on the board privately, or in the chat). Look at each student’s work as they send it.' },
    { min: 15, title: 'Feedback', md: 'Use the activity for your class size below to give feedback, then show one strong email to the class.' },
  ],
  board: [
    { title: 'Exam corner: the Writing part 1 task', blocks: [
      { t: 'text', md: '**Read this email from your English-speaking friend Sam and the notes you have made.**\n\n*Hi! I’m coming to your city next month for a weekend. (**Great!**) What’s the best time to visit? (**Tell Sam**) I’d love to try some local food. (**Suggest a place**) Could I stay at your place? (**Say no and explain why**)*\n\n**Write your email to Sam, using all the notes. Write about 100 words.**' },
      { t: 'tip', art: 'owl', md: 'In Writing part 1 there are always **four notes**. Answer each one in its own sentence or two, and use the notes to plan your paragraphs.' },
    ] },
    { title: 'A model answer', blocks: [
      { t: 'reading', title: 'Model email', md: 'Hi Sam,\n\nThat’s great news! I can’t wait to see you.\n\nThe best time to come is at the start of the month, because there is a music festival in the old town and the weather is usually sunny.\n\nYou must try the fish restaurant by the harbour. It’s not expensive and the food is amazing.\n\nI’m really sorry, but you can’t stay with me this time, because my sister is visiting and we only have one spare room. However, there’s a nice hotel near my flat.\n\nSee you soon!\nAna' },
      { t: 'ex', kind: 'match', h: 'Match each note with the part of the email that answers it.', pairs: [
        ['Great!', 'That’s great news!'],
        ['Tell Sam', 'The best time to come is at the start of the month'],
        ['Suggest a place', 'You must try the fish restaurant'],
        ['Say no and explain why', 'my sister is visiting'],
      ] },
    ] },
    { title: 'Your email', blocks: [
      { t: 'text', md: '**Now write your own answer to Sam (about 100 words).** Check before you finish: an opening, all four notes, paragraphs, at least two linking words (*because*, *however*, *so*), a closing.' },
      { t: 'ex', kind: 'choice', h: 'Before you write: which sentence answers the note best?', items: [
        { q: 'Note: Say no and explain why.', o: ['Sorry, you can’t stay with me because I’m moving flat that weekend.', 'No.', 'I have a flat.'], why: 'It says no and gives a reason.' },
        { q: 'Note: Suggest a place.', o: ['Why don’t we go to the market on Saturday morning?', 'There are many places.', 'I like food.'], why: 'A clear suggestion with a place.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Mark it like an examiner', md: 'After the student writes, mark the email together in the four exam areas, one at a time. The student rewrites the weakest paragraph straight away and compares the two versions.' },
    small: { title: 'Peer check', md: 'Students swap emails (in the chat) and tick the four notes in their partner’s email, count the words and find one linking word. Each student says one thing their partner did well and one to improve.' },
    group: { title: 'Gallery', md: 'Collect the emails with "Everyone solves this". Show two or three with "Show to the class" (with the writers’ permission) and ask the class what makes each one clear. In breakout rooms of three, students then improve one sentence of each email.' },
  },
  homework: { book: 'u16:p2', md: 'Do book lesson 2 of unit 16 (Writing an email). Write a second email: your friend asks to borrow your bike, wants to know a good weekend activity and asks about your new job (about 100 words).' },
};
