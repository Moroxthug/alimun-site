// English B1, class 52 (docs/LESSONS_PLAN.md). Builds on book lesson u11:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c52',
  focus: 'By the end of the class every student can describe what people are like with a range of personality adjectives (*easy-going, bossy, reliable, generous, shy, confident*), give an example of the behaviour behind each word, and choose correctly between *-ed* adjectives (how someone feels) and *-ing* adjectives (what causes the feeling): *bored / boring, interested / interesting*.',
  tips: [
    'The classic mistake is **I am boring** when the student means *I am bored*. Make it funny and memorable: *bored* is how you feel; *boring* is how you make others feel.',
    'Students often know positive words but not negative ones. Teach pairs (*generous / mean, confident / shy, easy-going / bossy*).',
    'Ask for **examples of behaviour**, not just adjectives: *She’s reliable: she always does what she says.* This is what B1 speaking needs.',
    'Be careful with personal descriptions in class: describe famous people, characters or "a friend" rather than classmates.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Describe your best friend in three words.* Write the words on the board.' },
    { min: 10, title: 'Personality words', md: 'Board page 1. Match and sort the adjectives; students give an example for two of them.' },
    { min: 10, title: '-ed or -ing?', md: 'Board page 2. Explain the difference; students choose and fix.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Board page 3: Reading Part 2, matching people to descriptions.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they find interesting and one thing they find boring. Set the homework.' },
  ],
  board: [
    {
      title: 'What are they like?',
      blocks: [
        {
          t: 'ex',
          kind: 'match',
          h: 'Match the adjective and the behaviour.',
          pairs: [
            ['reliable', 'always does what she promises'],
            ['bossy', 'always tells other people what to do'],
            ['easy-going', 'is relaxed and doesn’t get angry easily'],
            ['generous', 'likes giving things and time to others'],
            ['shy', 'feels nervous with people he doesn’t know'],
          ],
        },
        {
          t: 'ex',
          kind: 'sort',
          h: 'Positive or negative?',
          groups: ['positive', 'negative'],
          explain: ['groups'],
          items: [
            { s: 'confident', g: 0, why: 'Sure of yourself: positive.' },
            { s: 'mean', g: 1, why: 'Doesn’t like giving or sharing: negative.' },
            { s: 'reliable', g: 0, why: 'You can trust them: positive.' },
            { s: 'lazy', g: 1, why: 'Doesn’t like working: negative.' },
          ],
        },
      ],
    },
    {
      title: 'Bored or boring?',
      blocks: [
        {
          t: 'text',
          md: '**-ed** adjectives describe how a person **feels**: *I was bored in the meeting.*\n\n**-ing** adjectives describe the thing or person that **causes** the feeling: *The meeting was boring.*',
        },
        {
          t: 'ex',
          kind: 'select',
          h: 'Choose the right adjective.',
          items: [
            { q: 'The film was so ___ that I watched it twice.', o: ['exciting', 'excited', 'excite'], why: 'The film causes the feeling: *-ing*.' },
            { q: 'I’m ___ in history.', o: ['interested', 'interesting', 'interest'], why: 'How I feel: *-ed*.' },
            { q: 'After the long journey, we were very ___.', o: ['tired', 'tiring', 'tire'], why: 'How we felt: *-ed*.' },
          ],
        },
        {
          t: 'ex',
          kind: 'fix',
          h: 'Find and fix the mistake.',
          items: [
            { s: 'The lesson was long and I was very [boring].', a: ['bored'], why: 'How I felt: *bored*. *Boring* would mean I made others feel bored.' },
            { s: 'Her story was really [surprised].', a: ['surprising'], why: 'The story causes the feeling: *surprising*.' },
          ],
        },
      ],
    },
    {
      title: 'Exam corner: Reading Part 2',
      blocks: [
        {
          t: 'text',
          md: '**Three people want a flatmate.**\n\n**Ana** is easy-going but needs someone reliable who pays the bills on time.\n\n**Tom** is shy and wants a quiet, calm person.\n\n**Lena** loves cooking for others and wants someone sociable to share meals with.',
        },
        {
          t: 'ex',
          kind: 'choice',
          h: 'In the format of B1 Preliminary Reading Part 2: who is the best flatmate for each person?',
          items: [
            { q: 'Sam: “I’m calm and I like reading at home in the evenings.” Best for…', o: ['Tom', 'Lena', 'Ana'], why: 'Tom wants a quiet, calm person.' },
            { q: 'Mia: “I’m very organised; I’ve never paid a bill late.” Best for…', o: ['Ana', 'Tom', 'Lena'], why: 'Ana needs someone reliable with bills.' },
            { q: 'Leo: “I’m chatty and I love trying new food.” Best for…', o: ['Lena', 'Tom', 'Ana'], why: 'Lena wants someone sociable to share meals.' },
          ],
        },
        { t: 'tip', art: 'owl', md: 'In Reading Part 2 each person has **two or three needs**. The right text matches **all** of them, not just one word.' },
      ],
    },
  ],
  activities: {
    one: {
      title: 'Describe without naming',
      md: 'The student describes three people they know (or famous people) with two adjectives and one example of behaviour each; you guess the relationship (*a colleague? a brother?*). Then you describe three film characters and the student guesses. Recycle *-ed / -ing* pairs in follow-up questions.',
    },
    small: {
      title: 'The perfect…',
      md: 'Each student describes the perfect flatmate, boss and holiday companion with three adjectives and reasons. The group agrees on the top three qualities for each role and explains their choice.',
    },
    group: {
      title: 'Character casting',
      md: 'In breakout rooms, each room invents three characters for a TV series (name, job, personality with three adjectives and one example each). Back together, rooms present their characters; the class asks *What is he like when…?* questions. Correct adjectives on the board.',
    },
  },
  homework: {
    book: 'u11:p1',
    md: 'Finish book lesson 1 of unit 11. Then write about two people who are important to you (about 40 words each): three personality adjectives each, with an example of their behaviour.',
  },
};
