// Alimun test, English B1: Writing. Draft for native-teacher review.
export const PAPER = {
  id: 'writing', title: 'Writing', minutes: 40,
  parts: [
    {
      id: 'p1', ref: 'Task 1', title: 'An email or an article',
      about: 'Choose one task. Write 100 to 150 words.',
      blocks: [
        { t: 'ex', kind: 'write', marking: 'alimun', choose: true, h: 'Choose one of the tasks and write your answer.', items: [
          { task: '**An email.** Your English friend Sam is moving to your country to work for a year and has written to you: “I start my new job in September. What should I know before I arrive? What are people like, and what is the best way to find a flat? Is there anything I should be careful about?”\n\nWrite an email to Sam. Answer the questions and give some advice.', min: 100, max: 150,
            model: 'Hi Sam,\n\nThat’s great news! You’ll love it here, I’m sure.\n\nPeople are friendly, but they can seem a bit shy at first. If a colleague invites you for coffee, say yes, because that’s how most friendships start. People also usually take their shoes off when they visit someone’s home, so don’t forget!\n\nFinding a flat can be difficult in September, because lots of students are looking at the same time. I’d start searching online now. If you find something you like, ask to see it on a video call before you pay anything.\n\nThe only thing to be careful about is the trains. They’re cheap if you book early, but very expensive if you buy a ticket on the day.\n\nLet me know when you arrive, and I’ll show you around.\n\nSee you soon,\nMarta' },
          { task: '**An article.** You see this notice on an English-language website for students.\n\n*Articles wanted: a small change that made a big difference. Tell us about a habit you started or stopped. Why did you change it, and how has it changed your life? The best articles will appear on our website.*\n\nWrite your article.', min: 100, max: 150,
            model: '**Why I switched off at nine**\n\nA year ago I used to look at my phone until midnight every night. I checked messages, watched videos and read the news, and in the morning I always felt tired. My teacher said I looked exhausted in class, and that was when I decided to change.\n\nNow I turn my phone off at nine o’clock and leave it in the kitchen. At first it was really hard, and I kept wanting to check it. After about two weeks, though, I started reading books again, and I fell asleep much more easily.\n\nThe difference has been huge. I have more energy during the day, my marks have improved and I’ve read eleven novels this year. If you feel tired all the time, try it for a week. You might be surprised.' },
        ] },
      ],
    },
  ],
};
