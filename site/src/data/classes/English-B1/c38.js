// English B1, class 38 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u8:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c38',
  focus: 'By the end of the class every student can read and discuss short texts in which people talk about their future, and use all the future language of unit 8 together: *will, going to*, the present continuous, the second conditional and *hope to / plan to / look forward to*. Each student talks for about two minutes about where they see themselves in ten years, with reasons.',
  tips: [
    'This lesson closes unit 8. Listen for the right future form in the students’ talks: it shows you who is ready for the review in the next class.',
    'Ten years is a long time: some students find the question too personal or too hard. Offer an alternative: *your town in ten years* or *your job in ten years*.',
    'Push for reasons and conditions: *I’ll probably…, because…*, *If I…, I’d like to…*. Long answers are the aim of this class.',
    'Words like *probably, definitely, I doubt* and *I might* make predictions sound natural at B1. Put them on the board as the students speak.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Ten years ago, where did you think you would be today?* Two or three students answer.' },
    { min: 15, title: 'Reading', md: 'Show board page 1. Students read the four short texts alone and match the questions, then check together.' },
    { min: 10, title: 'How sure are you?', md: 'Show board page 2. Go through the words, then students make predictions about themselves with each.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B1 Preliminary Reading part 2-style matching. Students choose alone, then explain.' },
    { min: 5, title: 'Close', md: 'Each student gives their best prediction for the class in one sentence. Set the homework.' },
  ],
  board: [
    { title: 'Ten years from now', blocks: [
      { t: 'reading', title: 'Four voices', md: '**Nadia, 19:** I’m starting university in September, and I’m going to study medicine. If everything goes well, I’ll be a doctor in ten years, probably in a big hospital.\n\n**Pablo, 24:** I’d love to have my own restaurant one day. I’m saving money now and I hope to open a small place by the time I’m thirty.\n\n**Kim, 21:** Honestly, I don’t know. If I could choose anything, I’d travel for a few years first. I doubt I’ll stay in my home town.\n\n**Omar, 22:** I’m moving to Berlin next month for a job in software. I’m really looking forward to living abroad, and I might stay there for good.' },
      { t: 'ex', kind: 'choice', h: 'Who…', items: [
        { q: 'has a fixed arrangement for next month?', o: ['Omar', 'Kim', 'Pablo'], why: '*I’m moving to Berlin next month*: present continuous for an arrangement.' },
        { q: 'is not sure about the future?', o: ['Kim', 'Nadia', 'Omar'], why: '*Honestly, I don’t know.*' },
        { q: 'is saving money for a plan?', o: ['Pablo', 'Nadia', 'Kim'], why: '*I’m saving money now and I hope to open a small place*.' },
        { q: 'talks about a plan that starts in September?', o: ['Nadia', 'Omar', 'Pablo'], why: '*I’m starting university in September*.' },
      ] },
    ] },
    { title: 'How sure are you?', blocks: [
      { t: 'table', caption: 'From sure to not sure', explain: ['head', 'col1'], head: ['Words', 'How sure'], rows: [
        ['I’ll definitely…', 'very sure'],
        ['I’ll probably… / I’m likely to…', 'quite sure'],
        ['I might… / I may…', 'not sure: perhaps'],
        ['I probably won’t… / I doubt I’ll…', 'quite sure it won’t happen'],
        ['I definitely won’t…', 'very sure it won’t happen'],
      ] },
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'I will probably live in a bigger city.', why: '*probably* goes after *will*.' },
        { a: 'I probably won’t have a car.', why: 'In the negative, *probably* goes before *won’t*.' },
        { a: 'I doubt I will stay here.', why: '*I doubt* + a full sentence.' },
      ] },
    ] },
    { title: 'Exam corner: matching people and courses', blocks: [
      { t: 'text', md: 'In the format of B1 Preliminary Reading part 2: three people want a course; choose the best one for each.\n\n**Lucia** is planning to open a café and needs to learn how to manage money. She works during the day.\n\n**Tom** hopes to work abroad next year and wants to improve his language skills quickly.\n\n**Course A:** Business basics for small shops and cafés, evenings, eight weeks.\n\n**Course B:** Intensive Spanish, every morning for one month.\n\n**Course C:** Weekend photography for beginners.' },
      { t: 'ex', kind: 'choice', h: 'Which course is best?', items: [
        { q: 'Lucia', o: ['Course A', 'Course B', 'Course C'], why: 'Money for a café, and in the evenings because she works during the day.' },
        { q: 'Tom', o: ['Course B', 'Course A', 'Course C'], why: 'Language skills, quickly: an intensive course.' },
      ] },
      { t: 'tip', md: 'In Reading part 2, underline every need in the description (*café, money, works during the day*). The right answer matches all of them.' },
    ] },
  ],
  activities: {
    one: { title: 'Interview about the future', md: 'Interview the student about their life in ten years: work, home, family, languages, travel. Ask *How sure are you?* after each answer, so they use *definitely, probably, might, doubt*. Then the student interviews you. Finish by writing their three best sentences in the chat.' },
    small: { title: 'Time capsule', md: 'Each student writes three predictions about themselves in ten years in the chat, as a *time capsule*, with the words from board page 2. In pairs, they explain their predictions and the partner asks *Why?*. Each student then tells the group the most surprising prediction from their partner.' },
    group: { title: 'Our town in 2035', md: 'In breakout rooms of three, each room imagines their town in ten years: transport, homes, work, free time. They agree on five predictions and say how sure they are. Bring everyone back: each room presents its predictions; the class says which are most likely.' },
  },
  homework: { book: 'u8:p4', md: 'Finish book lesson 4 of unit 8 (Ten years from now), including the reading and the speaking task. Then write 80 to 100 words: *Where will I be in ten years?*, with at least three future forms and two words from board page 2.' },
};
