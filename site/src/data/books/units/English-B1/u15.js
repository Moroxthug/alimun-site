// English B1, unit 15, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Ability in the past (could, was able to, managed to), the more … the more and comparatives for change, sport and
// fitness words with instructions, and a reading about a first marathon.
export const UNIT = {
  id: 'u15',
  title: 'Sport and challenges',
  goal: 'Talk about what you could and could not do in the past, describe how things change, give instructions for exercise, and tell the story of a personal challenge.',
  art: 'dog',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading', 'listening'], topics: ['ability', 'could', 'managed-to', 'comparatives', 'sport', 'fitness', 'instructions'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'I managed to finish',
      about: 'Talk about ability in the past with could, was able to and managed to.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'To talk about a **general ability** in the past, something you could do at any time, use **could** + verb: *When I was ten, I **could** swim very fast.* The negative is **couldn’t**: *My grandfather **couldn’t** read until he was twenty.*\n\n**Could** is only for general ability. When you talk about **one particular moment**, when you did something difficult once, English uses **was / were able to** or **managed to**: *The water was cold, but I **managed to** swim to the island.* Saying *I could swim to the island* here sounds wrong to English speakers, because it was one difficult success, not a general skill.' },
          { t: 'table', caption: 'Ability in the past', explain: ['head', 'col0', 'col2'], head: ['Meaning', 'Example', 'Use it for'], rows: [
            ['general ability', 'She could run 10 km at 15.', 'something you could do any time'],
            ['no ability', 'I couldn’t ride a bike as a child.', 'general or one moment'],
            ['one success', 'We were able to win the final.', 'a particular moment'],
            ['one success, with effort', 'He managed to climb the last hill.', 'something difficult you did in the end'],
          ] },
          { t: 'tip', art: 'owl', md: 'In the negative there is no problem: **couldn’t** works for a general ability and for one moment. *I **couldn’t** open the door* is fine. The rule about one success only matters in positive sentences.' },
        ],
        [
          { t: 'text', md: '**Managed to** is followed by the base form and is always about a success that needed effort: *After three tries, she **managed to** pass her driving test.* It often comes with words that show the difficulty: *in the end, finally, after a long time, although it was hard*.\n\n**Was able to** is a little more neutral: *The road was open, so we **were able to** drive home.* For the future and the present perfect, *can* has no forms, so you use **be able to**: *I **will be able to** run 5 km by June. I **haven’t been able to** train this week.*' },
          { t: 'examples', items: [
            { s: 'At school I **could** do fifty push-ups.', n: 'A general ability.' },
            { s: 'It was windy, but they **managed to** finish the race.', n: 'One success, with effort.' },
            { s: 'The doctor **was able to** see me the same day.', n: 'One particular moment.' },
            { s: 'I **couldn’t** sleep the night before the match.', n: 'Negative: *couldn’t* is fine for one moment.' },
            { s: 'I **haven’t been able to** go to the gym since May.', n: 'Present perfect: *been able to*.' },
            { s: 'Will you **be able to** come to training on Friday?', n: 'Future: *be able to*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['After two hours I could reach the top.', 'After two hours I managed to reach the top.', 'One difficult success: *managed to* or *was able to*, not *could*.'],
            ['She managed to winning.', 'She managed to win.', '*Manage to* + base form.'],
            ['I will can swim next year.', 'I will be able to swim next year.', '*Can* has no future: use *be able to*.'],
            ['I haven’t could train.', 'I haven’t been able to train.', 'Present perfect: *been able to*.'],
          ] },
          { t: 'dialogue', title: 'After the swim', lines: [
            { who: 'Grace', s: 'You look exhausted! How did the sea swim go?' },
            { who: 'Daniel', s: 'It was hard. The waves were really big at the start.' },
            { who: 'Grace', s: 'Did you finish?' },
            { who: 'Daniel', s: 'Yes, I managed to finish, but I was nearly the last one.' },
            { who: 'Grace', s: 'That’s still great. A year ago you couldn’t swim more than a hundred metres.' },
            { who: 'Daniel', s: 'True. And next year I hope I’ll be able to do it in under an hour.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'When I was young, I ___ dance all night.', o: ['could', 'managed to', 'was able'], why: 'A general ability in the past: *could*.' },
            { q: 'The exam was very difficult, but I ___ pass it.', o: ['managed to', 'could', 'can'], why: 'One difficult success: *managed to*.' },
            { q: 'I’m sorry, I ___ come to the match yesterday.', o: ['couldn’t', 'didn’t manage', 'wasn’t able'], why: 'Negative for one moment: *couldn’t* is fine.' },
            { q: 'I hope I’ll ___ run a half marathon next spring.', o: ['be able to', 'can', 'could'], why: 'Future: *will be able to*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with the right form of manage, be able or could.', items: [
            { q: 'Our team was losing, but we ___ to win in the last minute.', a: ['managed'], why: 'One difficult success: *managed to*.' },
            { q: 'I haven’t ___ able to play tennis since I hurt my arm.', a: ['been'], why: 'Present perfect: *haven’t been able to*.' },
            { q: 'My little sister ___ ride a bike when she was four.', a: ['could'], why: 'A general ability in the past.' },
            { q: 'The road was closed, so we weren’t ___ to drive to the stadium.', a: ['able'], why: '*weren’t able to*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'In the end, after many tries, I [could] climb the wall.', a: ['managed to', 'was able to'], why: 'One success after effort: not *could*.' },
            { s: 'She managed to [scoring] a goal in the last minute.', a: ['score'], why: '*manage to* + base form.' },
            { s: 'Next year I will [can] swim across the lake.', a: ['be able to'], why: 'Future: *will be able to*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading Part 1): read the message. What does it say?', items: [
            { q: 'SWIMMING POOL: The pool is closed for repairs until Monday. Members can use the gym as usual.', o: ['Members can still go to the gym this week.', 'The gym and the pool are both closed until Monday.', 'Members must repair the pool before Monday.'], why: 'Only the pool is closed; the gym is open *as usual*.' },
            { q: 'Tom, I managed to get two tickets for Saturday’s match, but the seats aren’t together. Is that OK? – Sam', o: ['Sam has tickets, but they will not sit next to each other.', 'Sam could not find any tickets for the match.', 'Sam wants Tom to buy the tickets.'], why: '*managed to get two tickets* + *seats aren’t together*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Reading Part 1** of B1 Preliminary you read five short texts: signs, notes, emails, messages. For each one you choose the sentence that means the same. Read the whole text, then check each option against it: a wrong option often uses words from the text but changes the meaning.' },
        ],
        [
          { t: 'text', md: 'Now talk about yourself. Think of something you could do as a child, something you couldn’t do, and one difficult thing you managed to do last year. Then repeat these sentences after the tutor.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'When I was a child, I could swim very well.' },
            { a: 'It was hard, but I managed to finish the race.' },
            { a: 'I haven’t been able to train this week.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Better and better',
      about: 'Describe change with comparatives (better and better, more and more) and the more …, the more ….',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'You know comparatives: *faster, stronger, more difficult*. To show that something is **changing all the time**, repeat the comparative with **and**: *My running is getting **better and better**.* *The training is getting **harder and harder**.*\n\nWith long adjectives, repeat **more**: *Running is becoming **more and more popular**.* For things that get smaller, use **less and less**: *I have **less and less** free time.*\n\nThese phrases usually go with verbs of change: **get, become, grow**: *It’s getting colder and colder.*' },
          { t: 'examples', items: [
            { s: 'My times are getting **faster and faster**.', n: 'Short adjective: repeat *-er*.' },
            { s: 'Cycling to work is becoming **more and more popular**.', n: 'Long adjective: *more and more* + adjective.' },
            { s: 'The hills got **steeper and steeper**.', n: '*get* + comparative + *and* + comparative.' },
            { s: 'I have **less and less** time for sport.', n: 'Something that goes down: *less and less*.' },
            { s: 'Her English is getting **better and better**.', n: '*good → better and better*.' },
          ] },
        ],
        [
          { t: 'text', md: 'To say that **two things change together**, use **the + comparative …, the + comparative …**: ***The more** you train, **the stronger** you get.* The first part is the cause, the second part is the result.\n\nBoth parts start with **the**, and there is a comma between them. You can use adjectives, adverbs, **more** and **less**: ***The earlier** we start, **the less** tired we will be.* A very common short form is ***The sooner, the better.***' },
          { t: 'table', caption: 'The more …, the more …', explain: ['head', 'col2'], head: ['First part', 'Second part', 'Meaning'], rows: [
            ['The more you practise,', 'the better you play.', 'more practice → better play'],
            ['The longer you wait,', 'the harder it gets.', 'more waiting → more difficult'],
            ['The less you sleep,', 'the slower you run.', 'less sleep → slower running'],
            ['The sooner,', 'the better.', 'as soon as possible is best'],
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['More you train, more strong you get.', 'The more you train, the stronger you get.', 'Both parts need *the*, and *strong → stronger*.'],
            ['It’s getting more and more hard.', 'It’s getting harder and harder.', 'Short adjective: repeat *-er*, not *more*.'],
            ['The more I run, the more I am tired.', 'The more I run, the more tired I am.', 'The comparative goes right after *the*.'],
          ] },
        ],
        [
          { t: 'reading', title: 'A coach writes to her team', md: 'Hi everyone,\n\nWell done this month! Your times are getting better and better, and the team is becoming more and more confident.\n\nRemember: the more you rest, the better you recover. Please don’t train every day. Two days off a week is important.\n\nThe race is in six weeks, and the weather is getting hotter and hotter, so drink lots of water. The earlier we start on Saturday, the cooler it will be. Let’s meet at 7.00.\n\nSee you soon,\nCoach Elena' },
          { t: 'ex', kind: 'tf', h: 'Read the email. Are the sentences true or false?', ng: true, items: [
            { q: 'The team is improving.', a: 't', why: '*Your times are getting better and better.*' },
            { q: 'Elena wants the team to train every day.', a: 'f', why: '*Please don’t train every day.*' },
            { q: 'Elena thinks starting early is better because of the heat.', a: 't', why: '*The earlier we start, the cooler it will be.*' },
            { q: 'The race is in another city.', a: 'ng', why: 'The email does not say where the race is.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a comparative for change.', items: [
            { q: 'The music got louder and ___ until we couldn’t hear each other.', a: ['louder'], why: 'Repeat the comparative: *louder and louder*.' },
            { q: 'Electric bikes are becoming more and ___ popular.', a: ['more'], why: 'Long adjective: *more and more popular*.' },
            { q: 'I’m so busy that I have less and ___ time to exercise.', a: ['less'], why: 'Something going down: *less and less*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite with the … the ….', items: [
            { q: 'If you practise more, you play better.', cue: 'The more', a: ['The more you practise, the better you play.'], why: 'Cause, comma, result, both with *the*.' },
            { q: 'If we leave early, we will arrive early.', cue: 'The earlier', a: ['The earlier we leave, the earlier we will arrive.', 'The earlier we leave, the earlier we arrive.'], why: '*The earlier …, the earlier …*.' },
            { q: 'If you sleep less, you feel more tired.', cue: 'The less', a: ['The less you sleep, the more tired you feel.'], why: '*the more tired*: the comparative right after *the*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'build', h: 'Write the sentence. Two words do not belong.', items: [
            { a: 'The harder you work, the luckier you get.', extra: ['more', 'most'], why: 'Short adjectives: *harder*, *luckier*, both after *the*.' },
            { a: 'My Spanish is getting better and better.', extra: ['gooder', 'more'], why: '*good → better and better*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Listening Part 1): read what you hear and choose the right answer.', items: [
            { q: 'Woman: “I used to cycle ten kilometres a day. Now I do twenty, and it gets easier and easier.” How far does she cycle now?', o: ['20 km a day', '10 km a day', '30 km a day'], why: '*Now I do twenty*: ten was in the past.' },
            { q: 'Man: “The match was at three, but the later it got, the colder it was, so we left at half time, at quarter to four.” When did they leave?', o: ['3.45', '3.00', '4.15'], why: '*quarter to four* = 3.45. The match started at three.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Listening Part 1** of B1 Preliminary you hear seven short recordings and choose a picture for each one. The speakers often mention more than one number, time or place: listen for the one that answers the question, not the first one you hear.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'The more you practise, the better you get.' },
            { a: 'It’s getting harder and harder.' },
            { a: 'The sooner, the better.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Warm up first',
      about: 'Words for sport and fitness, and how to give clear instructions.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Each sport takes a different verb. Use **play** with ball games and games you play against someone: *play football, play tennis, play chess*. Use **go** with activities that end in **-ing**: *go swimming, go running, go cycling*. Use **do** with other activities, often done alone or in a class: *do yoga, do karate, do exercise, do athletics*.\n\nSome useful words for fitness: you **warm up** before exercise and **cool down** after it, you **stretch** your muscles, you **train** for a race, you **beat** another team, and you **win** or **lose** a match. A **coach** trains a team; a **referee** controls a football match.' },
          { t: 'table', caption: 'Play, go or do?', explain: ['head', 'col0'], head: ['Verb', 'Sports and activities'], rows: [
            ['play: games with a ball or against someone', 'football, basketball, tennis, golf, chess'],
            ['go: activities with -ing', 'swimming, running, cycling, skiing, climbing'],
            ['do: other activities and classes', 'yoga, karate, gymnastics, exercise, athletics'],
          ] },
          { t: 'tip', art: 'owl', md: '**Win** goes with a match, a race or a prize: *We **won** the match.* **Beat** goes with a person or team: *We **beat** the Lions 3–1.* You cannot say *We won the Lions.*' },
        ],
        [
          { t: 'text', md: 'To give **instructions**, for example in an exercise class, use the **imperative**: the base form of the verb, with no subject: ***Stand** up straight. **Bend** your knees.* For the negative, use **don’t**: ***Don’t** hold your breath.*\n\nInstructions are easier to follow with order words: **first, then, next, after that, finally**. To be polite with a group, add **let’s** or **try to**: ***Let’s** start with a warm-up. **Try to** keep your back straight.*' },
          { t: 'examples', items: [
            { s: '**First**, warm up for five minutes.', n: 'Order word + imperative.' },
            { s: '**Then** stretch your legs slowly.', n: 'The next step.' },
            { s: '**Don’t** bend your back.', n: 'Negative instruction: *don’t* + base form.' },
            { s: '**Let’s** start with ten jumps.', n: 'Friendly instruction for a group.' },
            { s: '**Finally**, cool down and drink some water.', n: 'The last step.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I play yoga on Mondays.', 'I do yoga on Mondays.', '*Do* with yoga and classes.'],
            ['We won the other team.', 'We beat the other team.', '*Beat* a team, *win* a match.'],
            ['You don’t bend your knees!', 'Don’t bend your knees!', 'Instructions have no subject.'],
            ['I go to swim every day.', 'I go swimming every day.', '*go* + *-ing* for activities.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'The first yoga class', lines: [
            { who: 'Teacher', s: 'Welcome, everyone. Let’s start with a warm-up.' },
            { who: 'Teacher', s: 'First, stand with your feet apart. Then lift your arms slowly.' },
            { who: 'Lucy', s: 'Like this?' },
            { who: 'Teacher', s: 'Yes, perfect. Don’t lift your shoulders. Try to breathe slowly.' },
            { who: 'Lucy', s: 'It’s harder than it looks!' },
            { who: 'Teacher', s: 'Don’t worry. The more you do it, the easier it gets. Finally, lie down and relax.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Play, go or do?', groups: ['play', 'go', 'do'], items: [
            { s: 'tennis', g: 0, why: 'A game with a ball: *play tennis*.' },
            { s: 'cycling', g: 1, why: 'An *-ing* activity: *go cycling*.' },
            { s: 'karate', g: 2, why: 'A class or martial art: *do karate*.' },
            { s: 'chess', g: 0, why: 'A game against someone: *play chess*.' },
            { s: 'skiing', g: 1, why: '*go skiing*.' },
            { s: 'yoga', g: 2, why: '*do yoga*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'colloc', h: 'Which words go with the key word?', items: [
            { key: 'win', o: ['a match', 'a prize', 'the other team', 'a race'], a: [0, 1, 3], why: 'You *win* a match, a prize or a race, but you *beat* a team.' },
            { key: 'go', o: ['running', 'swimming', 'football', 'climbing'], a: [0, 1, 3], why: '*go* + *-ing*; football takes *play*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the instructions in order.', items: [
            { a: 'Don’t forget to drink some water.', why: '*Don’t* + base form at the start.' },
            { a: 'First, warm up for ten minutes.', why: 'Order word, comma, imperative.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading Part 5): choose the word that fits.', items: [
            { q: 'Our team ___ the champions 2–0 last night.', o: ['beat', 'won', 'scored'], why: '*Beat* + a team.' },
            { q: 'Before you start running, always ___ up for a few minutes.', o: ['warm', 'heat', 'train'], why: 'The phrase is *warm up*.' },
            { q: 'My brother ___ karate twice a week.', o: ['does', 'plays', 'goes'], why: '*do karate*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Reading Part 5** you read a short text with six gaps and choose one of four words for each. Many gaps test **collocations**: words that always go together, like *win a match*, *beat a team*, *do yoga*. Learn sport words in pairs, not alone.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Give the instructions after the tutor.', tutor: 'arthur', items: [
            { a: 'First, warm up for five minutes.' },
            { a: 'Don’t hold your breath.' },
            { a: 'Let’s start with a slow run.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'From the sofa to a marathon',
      about: 'Read the story of a personal challenge and use the language of the unit together.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'In this lesson you read a true-style story about a big personal challenge. Notice how the writer uses the language of this unit: **couldn’t** and **managed to** for ability in the past, **better and better** for change, and **the more …, the more …** for things that go together.' },
          { t: 'reading', title: 'From the sofa to a marathon', md: 'Two years ago, Karim couldn’t run for a bus. He worked long hours, ate fast food and spent his evenings on the sofa. “The more tired I was, the less I moved,” he says. “And the less I moved, the more tired I was.”\n\nOne day his doctor told him to start exercising. Karim decided to try a beginner’s running app. In the first week he could only run for one minute at a time. “It was terrible. I nearly gave up.”\n\nBut he didn’t. Slowly, his runs got longer and longer. After two months he managed to run five kilometres without stopping. He joined a running club, where a coach helped him train and showed him how to warm up and stretch properly.\n\nLast October, Karim ran his first marathon in Valencia. The last ten kilometres were the hardest of his life, but he was able to finish in four hours and forty minutes. “I didn’t win anything,” he laughs, “but I beat the old me.”\n\nHis advice? “Start small. The sooner you start, the better. And don’t compare yourself with anyone else.”' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Read the story. True, false or not given?', ng: true, items: [
            { q: 'Two years ago Karim did a lot of exercise.', a: 'f', why: 'He *couldn’t run for a bus* and spent his evenings on the sofa.' },
            { q: 'His doctor told him to start exercising.', a: 't', why: '*One day his doctor told him to start exercising.*' },
            { q: 'After two months he ran five kilometres without stopping.', a: 't', why: '*he managed to run five kilometres without stopping*.' },
            { q: 'Karim’s coach also ran the Valencia marathon.', a: 'ng', why: 'The story does not say.' },
            { q: 'Karim won a prize in Valencia.', a: 'f', why: '*I didn’t win anything.*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'What does Karim mean by “I beat the old me”?', o: ['He is fitter than he was before.', 'He won against a friend.', 'He ran faster than everyone.'], why: 'He compares himself now with himself before.' },
            { q: 'Why does the writer use “managed to” for the five kilometres?', o: ['It was one difficult success.', 'It was a general ability.', 'It happened every day.'], why: '*managed to* = one success after effort.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete the sentences with words from the story.', extra: ['lost', 'scored'], items: [
            { q: 'In the first week Karim could only run for one minute. He nearly gave ___.', a: 'up', why: '*give up* = stop trying.' },
            { q: 'A coach showed him how to warm up and ___ properly.', a: 'stretch', why: 'You *stretch* your muscles.' },
            { q: 'He didn’t win, but he ___ the old me.', a: 'beat', why: 'You *beat* a person.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading Part 3): read the story again and choose the best answer.', items: [
            { q: 'What is the writer’s main purpose?', o: ['To show that anyone can change step by step.', 'To explain the rules of a marathon.', 'To advertise a running app.'], why: 'The story follows Karim’s slow change and ends with his advice.' },
            { q: 'How did Karim feel about the last ten kilometres?', o: ['They were extremely difficult.', 'They were easier than the start.', 'He did not run them.'], why: '*the hardest of his life*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Reading Part 3** you read a longer text and answer five questions. The last question is usually about the **whole text**: the writer’s purpose or opinion. Leave it to the end, when you understand the full text.' },
        ],
        [
          { t: 'text', md: 'Think about a challenge in your life: a sport, a language, a job, a move to a new country. What couldn’t you do at the start? What did you manage to do in the end? How did things get better and better? Tell the story to a partner or to your teacher in class.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'At the start, I couldn’t run for more than a minute.' },
            { a: 'Slowly, my runs got longer and longer.' },
            { a: 'In the end, I managed to finish the marathon.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: 'When she was a child, she ___ speak three languages.', o: ['could', 'managed to', 'was able'], why: 'A general ability in the past.' },
      { q: 'The bus was late, but we ___ catch the train.', o: ['managed to', 'could', 'can'], why: 'One success at a particular moment.' },
      { q: 'I hope I’ll ___ swim 1 km by the summer.', o: ['be able to', 'can', 'could'], why: 'Future: *be able to*.' },
      { q: 'We ___ the Tigers 4–2.', o: ['beat', 'won', 'scored'], why: '*Beat* + a team.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'It’s getting colder and ___ every day.', a: ['colder'], why: '*colder and colder*.' },
      { q: 'The more you read, the ___ you learn.', a: ['more'], why: '*the more …, the more …*.' },
      { q: 'I haven’t been ___ to visit my parents this month.', a: ['able'], why: '*haven’t been able to*.' },
      { q: 'Let’s go ___ in the lake this afternoon.', a: ['swimming'], why: '*go* + *-ing*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'My sister [plays yoga] every morning.', a: ['does yoga'], why: 'With yoga the verb is *do*: *does yoga*.' },
      { s: 'After an hour, we [could] find the hotel.', a: ['managed to', 'were able to'], why: 'One success: not *could*.' },
      { s: 'It’s getting [more and more hard].', a: ['harder and harder'], why: 'Short adjective: *harder and harder*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence.', items: [
      { q: 'If you train more, you get stronger.', cue: 'The more', a: ['The more you train, the stronger you get.'], why: '*The more …, the stronger …*.' },
      { q: 'I can’t come to training next week.', cue: 'I won’t', a: ['I won’t be able to come to training next week.'], why: 'Future negative: *won’t be able to*.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Play, go or do?', groups: ['play', 'go', 'do'], items: [
      { s: 'basketball', g: 0, why: '*play basketball*.' },
      { s: 'climbing', g: 1, why: '*go climbing*.' },
      { s: 'gymnastics', g: 2, why: '*do gymnastics*.' },
      { s: 'golf', g: 0, why: '*play golf*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Don’t forget to stretch after your run.', why: 'Negative instruction: *Don’t* + base form.' },
      { a: 'The sooner we start, the better.', why: '*The sooner …, the better.*' },
    ] },
  ],
};
