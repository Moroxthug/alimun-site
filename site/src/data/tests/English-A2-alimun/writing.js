// Alimun test, English A2: Writing. Draft for native-teacher review.
export const PAPER = {
  id: 'writing', title: 'Writing', minutes: 35,
  parts: [
    {
      id: 'p1', ref: 'Task 1', title: 'An email to a friend',
      about: 'Write an email of 50 to 80 words.',
      blocks: [
        { t: 'ex', kind: 'write', marking: 'alimun', h: 'Write your email.', items: [
          { task: 'You moved to a new flat last month. Write an email to your English friend, Alex. Say where your new flat is and what it is like, tell Alex what you did on your first weekend there, and invite Alex to visit. Say when.', min: 50, max: 80,
            model: 'Hi Alex,\n\nI’ve got some news! Last month I moved to a new flat in the city centre. It’s small, but it’s brighter than my old flat, and there’s a nice park opposite.\n\nOn my first weekend I painted the kitchen and bought some plants at the market. On Sunday evening I cooked dinner for my neighbours.\n\nWould you like to visit me? Are you free on Saturday 14th? Come for lunch!\n\nLove,\nNina' },
        ] },
      ],
    },
    {
      id: 'p2', ref: 'Task 2', title: 'A short message',
      about: 'Write a message of 25 to 40 words.',
      blocks: [
        { t: 'ex', kind: 'write', marking: 'alimun', h: 'Write your message.', items: [
          { task: 'You can’t go to your English class tomorrow. Write a message to your teacher, Mr Clark. Say why you can’t come and what you are going to do about the homework.', min: 25, max: 40,
            model: 'Dear Mr Clark,\n\nI’m sorry, but I can’t come to class tomorrow. I have to go to the doctor’s at ten. I’m going to send you my homework by email tonight.\n\nBest wishes,\nNina' },
        ] },
      ],
    },
  ],
};
