// English A2, class 39 (docs/LESSONS_PLAN.md). Builds on book lesson u7:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c39',
  focus: 'By the end of the class every student can read a short holiday blog post and find specific details (when, where, who, what went wrong), and write a short message about a trip that answers three points, in the format of A2 Key Writing part 6. Reading for detail and writing to a task are the two skills of the day.',
  tips: [
    'Learners often read every word slowly. Teach them to read the questions first, then scan the text for the answer.',
    'In writing, students forget one of the three points. Train them to tick each point after they write it.',
    'Linking words help a short text: *and*, *but*, *because*, *so*, *then*. Encourage at least two of them.',
    'Check past tenses in the writing: *we go* for a past trip is the most common mistake at this point.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Do you prefer the sea or the mountains? Why?* Each student answers in one or two sentences.' },
    { min: 15, title: 'Reading a blog post', md: 'Show board page 1. Students read the questions first, then the post, and answer. Discuss how they found each answer.' },
    { min: 10, title: 'Linking words', md: 'Show board page 2. Students choose the right linking word, then make one sentence of their own with *because* or *so*.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner: a short message', md: 'Show board page 3. Read the task and the model answer together, then students write their own message in the chat in 8 minutes.' },
    { min: 5, title: 'Close', md: 'Two students read their message aloud; the class checks the three points. Set the homework.' },
  ],
  board: [
    { title: 'A holiday blog post', blocks: [
      { t: 'reading', title: 'Three days in the Alps', md: 'We arrived in the small village of Grindel on Friday evening after a long train journey. Our hotel was small but very friendly, and the view from our window was amazing.\n\nOn Saturday we walked to the lake. It took four hours, but it was worth it. While we were having our picnic, it started to rain, so we ran to a little café near the water.\n\nOn Sunday my brother hurt his foot, so we didn’t walk. We took the cable car to the top of the mountain instead. It was cold, but the sun came out in the afternoon.' },
      { t: 'ex', kind: 'tf', h: 'Read the blog post. Are the sentences true or false?', items: [
        { q: 'They travelled to Grindel by train.', a: 't', why: '*after a long train journey*.' },
        { q: 'The walk to the lake was short.', a: 'f', why: '*It took four hours.*' },
        { q: 'It rained during their picnic.', a: 't', why: '*While we were having our picnic, it started to rain.*' },
        { q: 'They walked to the top of the mountain on Sunday.', a: 'f', why: 'They took the cable car because the brother hurt his foot.' },
      ] },
    ] },
    { title: 'Joining ideas', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
        { q: 'It was raining, ___ we went to a café.', o: ['so', 'because', 'but'], why: '*so* gives the result.' },
        { q: 'We didn’t walk on Sunday ___ my brother hurt his foot.', o: ['because', 'so', 'and'], why: '*because* gives the reason.' },
        { q: 'The hotel was small, ___ it was very friendly.', o: ['but', 'so', 'because'], why: '*but* shows a contrast.' },
      ] },
    ] },
    { title: 'Exam corner: write a message', blocks: [
      { t: 'text', md: '**The task:** You are on holiday. Write a message to your friend Sam. Say **where you are**, **what you did yesterday** and **what you are going to do tomorrow**. Write **25 words or more**.' },
      { t: 'tip', art: 'owl', md: 'In Writing part 6 of A2 Key you get marks for answering **all three points**. Before you finish, check: where? yesterday? tomorrow? Use the past simple for yesterday and *going to* for tomorrow.' },
      { t: 'examples', items: [
        { s: 'Hi Sam! I’m in Grindel, in the mountains. Yesterday we walked to a beautiful lake, but it rained. Tomorrow we’re going to take the cable car. See you soon!', n: 'A model answer: all three points, 33 words.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Ask me about my trip', md: 'The student reads the blog post, then asks you five questions about your own last trip (*Where did you go? How did you travel? What went wrong?*). Then you ask the same questions back. Finish with the student writing the exam message and you marking the three points together.' },
    small: { title: 'Holiday blog', md: 'Each student writes three short paragraphs about a real or invented trip, like the model, in a shared document or the chat. Others read and ask one question each. The group votes for the trip they would like to go on and says why.' },
    group: { title: 'Find the detail', md: 'In breakout rooms of three, each student writes five questions about the blog post. Rooms swap questions in the chat and answer them as fast as possible. Back together, check the answers and discuss which questions were the hardest and why.' },
  },
  homework: { book: 'u7:p4', md: 'Finish book lesson 4 of unit 7. Then write the exam message from the board about your own last trip (25 words or more, all three points).' },
};
