// English A2, unit 1, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Builds on A1 (present simple, be, have got, present continuous). Each lesson: a full explanation, the usual mistakes,
// a text that uses the language, exercises from controlled to free, a speaking task and one task in the format of A2 Key.
export const UNIT = {
  id: 'u1',
  title: 'Me and my world',
  goal: 'Talk about yourself, your routines, what is happening in your life now and the people around you, and write a short email about yourself.',
  art: 'sun',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing', 'speaking'], topics: ['present-simple', 'present-continuous', 'adverbs-of-frequency', 'describing-people', 'state-verbs'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Every day',
      about: 'Talk about routines and facts with the present simple, and say how often you do things.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'You already know the **present simple** from A1: *I work, she works, do you work?* At A2 you use it for more and more things, so it is worth checking that the basics are automatic.\n\nThe present simple is for things that are **true in general** or that **happen regularly**: habits, routines, jobs, likes and facts. *I get up at seven. My sister lives in Lyon. Water boils at 100 degrees.*\n\nRemember the three small rules that cause most mistakes. With **he, she** and **it**, the verb adds **-s**: *she works, he watches, it goes*. In questions and negatives, **do** or **does** does the work, and the main verb goes back to its simple form: *Does she work? She doesn’t work* (not *she doesn’t works*).' },
          { t: 'table', caption: 'The present simple', quiz: true, explain: ['head'], head: ['', 'Positive', 'Negative', 'Question'], rows: [
            ['I / you / we / they', 'I work.', 'I don’t work.', 'Do you work?'],
            ['he / she / it', 'She works.', 'She doesn’t work.', 'Does she work?'],
          ] },
          { t: 'tip', art: 'owl', md: 'Watch the spelling of the **-s** form: after **-ch, -sh, -s, -x, -o** add **-es** (*watches, washes, misses, fixes, goes*). After a consonant + **y**, change **y** to **ies** (*study → studies*), but not after a vowel (*play → plays*). **Have** becomes **has**.' },
        ],
        [
          { t: 'text', md: 'To say **how often** you do something, use a frequency adverb. Think of them as a scale from 100% to 0%: **always, usually, often, sometimes, rarely, never**.\n\nThese words go **before the main verb** (*I usually walk to work*) but **after be** (*I’m usually tired on Mondays*). **Sometimes** can also go at the start: *Sometimes I cook.*\n\nFor more exact frequency, use an **expression** at the end of the sentence: **every day, every Monday, once a week, twice a month, three times a year**. The question is **How often…?** *How often do you go to the gym? – Twice a week.*' },
          { t: 'table', caption: 'How often?', explain: ['head', 'col1'], head: ['Word', 'How often'], rows: [
            ['always', 'every time (100%)'],
            ['usually', 'nearly every time'],
            ['often', 'many times'],
            ['sometimes', 'now and then'],
            ['rarely', 'not often'],
            ['never', 'not at all (0%)'],
          ] },
          { t: 'examples', items: [
            { s: 'I **usually** have breakfast at home.', n: 'Before the main verb *have*.' },
            { s: 'She’s **always** late for class.', n: 'After *be*.' },
            { s: 'We go swimming **once a week**.', n: 'An expression goes at the end.' },
            { s: '**How often** does he call his parents? – **Every Sunday**.', n: 'The question, and a short answer.' },
            { s: 'They **never** eat meat.', n: '*Never* already means “not”: no *don’t*.' },
          ] },
        ],
        [
          { t: 'text', md: 'These are the mistakes teachers hear most often with the present simple at this level. Most come from translating directly, or from forgetting the **-s**.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['She work in a bank.', 'She works in a bank.', 'With *he, she, it*, add *-s*.'],
            ['Does he lives here?', 'Does he live here?', 'After *does*, the simple form.'],
            ['I go always to the gym.', 'I always go to the gym.', 'The adverb goes before the main verb.'],
            ['I don’t never eat fish.', 'I never eat fish.', '*Never* is already negative.'],
            ['How often you go?', 'How often do you go?', 'Questions need *do* or *does*.'],
          ] },
          { t: 'dialogue', title: 'A new colleague', lines: [
            { who: 'Paul', s: 'So, how do you get to work, Leila?' },
            { who: 'Leila', s: 'I usually take the bus, but on Fridays I cycle.' },
            { who: 'Paul', s: 'Really? How often do you cycle in winter?' },
            { who: 'Leila', s: 'Hardly ever! It’s too cold. What about you?' },
            { who: 'Paul', s: 'I always drive. My son goes to school near here, so I take him every morning.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the present simple.', items: [
            { q: 'My brother ___ (work) in a hotel.', a: ['works'], why: 'One person: *-s*.' },
            { q: 'She ___ (study) law at university.', a: ['studies'], why: 'Consonant + *y*: *-ies*.' },
            { q: 'We ___ (not watch) much TV.', a: ['don’t watch', 'do not watch', "don't watch"], why: '*We* + *don’t* + simple form.' },
            { q: '___ your father speak English?', a: ['Does'], why: '*Your father* = *he*: *does*.' },
            { q: 'The shop ___ (close) at eight.', a: ['closes'], why: '*It*: *-es* after *-s*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'I am never late for work.', why: '*Never* goes after *be*.' },
            { a: 'We usually eat at seven.', why: '*Usually* goes before the main verb.' },
            { a: 'How often do you play tennis?', why: '*How often* + *do* + subject + verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'My mother [cook] dinner every evening.', a: ['cooks'], why: '*My mother* = *she*: add *-s*.' },
            { s: 'Does Tom [plays] the guitar?', a: ['play'], why: 'After *does*, the simple form.' },
            { s: 'I [go often] to the cinema.', a: ['often go'], why: 'The adverb goes before the main verb.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word given.', items: [
            { q: 'I go to the gym on Mondays and Thursdays.', cue: 'twice', a: ['I go to the gym twice a week.'], why: 'Two times a week is *twice a week*.' },
            { q: 'She drinks coffee every morning, without exception.', cue: 'always', a: ['She always drinks coffee in the morning.', 'She always drinks coffee every morning.'], why: 'Every time is *always*, before the verb.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **Part 5 of the A2 Key Reading paper**, you read a short text, often an email, with six gaps. You write **one word** in each gap. The missing words are usually small grammar words: *do, does, at, in, the, a, my, is, are, often, how*.' },
          { t: 'ex', kind: 'gap', h: 'In the format of the A2 Key exam (Reading, Part 5): write one word in each gap.', items: [
            { q: 'Hi Sam! How ___ you?', a: ['are'], why: '*How are you?*' },
            { q: 'I’m writing ___ tell you about my new job.', a: ['to'], why: '*to* + verb for a reason.' },
            { q: 'I start work ___ eight o’clock.', a: ['at'], why: '*at* with clock times.' },
            { q: 'My boss is nice and she ___ always helpful.', a: ['is'], why: '*She is always helpful*: *be* before the adverb.' },
            { q: '___ you free on Saturday?', a: ['Are'], why: 'A question with *be*: *Are you…?*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 5, read the **whole sentence** before you write. Ask: is a verb missing, a preposition, or a small word like *the* or *my*? Check the **spelling**: a word spelled wrongly is marked wrong.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'I usually get up at seven.' },
            { a: 'How often do you go to the gym?' },
            { a: 'She never drinks coffee.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Right now',
      about: 'Talk about what is happening now and these days with the present continuous, choose between the two present tenses, and learn the verbs that do not use -ing.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'The **present continuous** (*be + verb-ing*) is for things that are **in progress**. At A1 you used it for this exact moment: *I’m wearing a hat.* At A2 you also use it for things happening **around now**, for a limited time, even if you are not doing them at this second: *I’m reading a great book this month. My brother is living with us at the moment.*\n\nUseful time words: **now, right now, at the moment, today, this week, these days**.' },
          { t: 'table', caption: 'The present continuous', quiz: true, explain: ['head'], head: ['', 'Positive', 'Negative', 'Question'], rows: [
            ['I', 'I’m working.', 'I’m not working.', 'Am I working?'],
            ['you / we / they', 'They’re working.', 'They aren’t working.', 'Are they working?'],
            ['he / she / it', 'She’s working.', 'She isn’t working.', 'Is she working?'],
          ] },
          { t: 'tip', art: 'owl', md: 'Spelling of **-ing**: a verb ending in **-e** loses it (*make → making*). A short verb ending in one vowel + one consonant doubles it (*sit → sitting, run → running*). A verb ending in **-ie** changes to **y** (*lie → lying*).' },
        ],
        [
          { t: 'text', md: 'So which present do you choose? Ask: is it **usual** or **now**?\n\n**Present simple**: a habit or a fact, something that is normally true. *I work in an office.*\n\n**Present continuous**: something happening now or for a short time. *I’m working from home this week.*\n\nMany sentences use both: *I usually drive to work, but this week I’m taking the train because my car is at the garage.*' },
          { t: 'table', caption: 'Usual or now?', explain: ['head', 'col2'], head: ['Present simple', 'Present continuous', 'The difference'], rows: [
            ['She teaches French.', 'She’s teaching a class now.', 'her job / this moment'],
            ['I live in Rome.', 'I’m living with friends.', 'my home / for a short time'],
            ['It rains a lot here.', 'It’s raining.', 'in general / at this moment'],
          ] },
          { t: 'examples', items: [
            { s: 'He **plays** football on Saturdays, but today he**’s watching** a match.', n: 'A habit, and something different today.' },
            { s: 'What **are** you **doing** these days? – I**’m learning** to drive.', n: 'A temporary activity around now.' },
            { s: 'Where **do** you usually **go** on holiday?', n: 'A habit: present simple.' },
          ] },
        ],
        [
          { t: 'text', md: 'Some verbs describe a **state**, not an action: what we think, feel, want or own. These **state verbs** are almost never used with **-ing**, even when we mean now.\n\nThe most common are **like, love, hate, want, need, know, understand, believe, remember, mean, belong, own, seem**. So say *I know the answer* (not *I’m knowing*), *She wants a coffee*, *This bag belongs to me.*' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I’m wanting a new phone.', 'I want a new phone.', '*want* is a state verb.'],
            ['Do you understand me now? – Yes, I’m understanding.', 'Yes, I understand.', '*understand* is a state verb.'],
            ['Look! It rains.', 'Look! It’s raining.', 'Happening now: present continuous.'],
            ['I’m working here since May.', 'I work here. / I’ve worked here since May.', 'For a permanent job, use the present simple.'],
          ] },
          { t: 'dialogue', title: 'A phone call', lines: [
            { who: 'Mum', s: 'Hi, Ben! What are you doing?' },
            { who: 'Ben', s: 'I’m cooking dinner. Anna’s coming round tonight.' },
            { who: 'Mum', s: 'Lovely. Is she still working at the hospital?' },
            { who: 'Ben', s: 'Yes, but she’s doing night shifts this month, so she’s always tired.' },
            { who: 'Mum', s: 'Poor thing. Do you need anything for dinner?' },
            { who: 'Ben', s: 'No, thanks. I know exactly what I want to make!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Present simple or present continuous? Choose the correct form.', items: [
            { q: 'Shh! The baby ___.', o: ['is sleeping', 'sleeps', 'sleep'], why: 'Happening now.' },
            { q: 'My parents ___ in a small village.', o: ['live', 'are living', 'lives'], why: 'Their permanent home: present simple.' },
            { q: 'I ___ what you mean.', o: ['understand', 'am understanding', 'understanding'], why: '*understand* is a state verb.' },
            { q: 'This week she ___ from home.', o: ['is working', 'works', 'work'], why: 'A temporary situation: present continuous.' },
            { q: 'Water ___ at 100 degrees.', o: ['boils', 'is boiling', 'boil'], why: 'A fact: present simple.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Can the verb usually take -ing?', groups: ['action verb: yes', 'state verb: no'], explain: ['groups'], items: [
            { s: 'run', g: 0, why: 'An action.' },
            { s: 'know', g: 1, why: 'A state of the mind.' },
            { s: 'cook', g: 0, why: 'An action.' },
            { s: 'want', g: 1, why: 'A state: a wish.' },
            { s: 'belong', g: 1, why: 'A state: owning.' },
            { s: 'write', g: 0, why: 'An action.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the present simple or the present continuous.', items: [
            { q: 'Look! Those children ___ (play) in the rain.', a: ['are playing', 'they’re playing', "are playing"], why: '*Look!*: happening now.' },
            { q: 'I ___ (not like) horror films.', a: ['don’t like', 'do not like', "don't like"], why: '*like* is a state verb.' },
            { q: 'Sara usually ___ (walk) to school.', a: ['walks'], why: '*usually*: a habit.' },
            { q: 'We ___ (paint) the kitchen this weekend.', a: ['are painting', 'we’re painting', "are painting"], why: '*this weekend*: around now.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap every verb in the present continuous.', items: [
            { s: 'Tom [is studying] in Madrid this year, so he [is sharing] a flat with two students.', why: 'Both are temporary situations.' },
            { s: 'I usually work late, but tonight I [am leaving] at five.', why: '*work* is a habit; *am leaving* is about tonight.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **Part 4 of the A2 Key Reading paper**, you read a short text with six gaps and choose the right word from **three options** (A, B or C). Often the options are three forms of a verb, or three words with similar meanings.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Reading, Part 4): choose the right word for each gap.', items: [
            { q: 'My cousin Jade ___ in Canada at the moment.', o: ['is staying', 'stays', 'stay'], why: '*at the moment*: present continuous.' },
            { q: 'She ___ English at a language school there.', o: ['is studying', 'study', 'studied'], why: 'A temporary activity now.' },
            { q: 'She says she ___ the city very much.', o: ['likes', 'is liking', 'like'], why: '*like* is a state verb: present simple.' },
            { q: 'Every evening she ___ dinner with her host family.', o: ['has', 'is having', 'have'], why: '*Every evening*: a habit.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 4, look for **time words** near the gap (*at the moment, every day, now, usually*): they often tell you which tense is right. Then read the full sentence once more with your answer in it.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'I’m working from home this week.' },
            { a: 'What are you doing these days?' },
            { a: 'I know exactly what I want.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'What are they like?',
      about: 'Describe how people look and what they are like, and use the questions What does she look like? and What is she like?',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'English has three questions with **like** that learners often mix up. They look similar, but they ask for different information.\n\n**What does she look like?** asks about **appearance**: her face, hair, body, clothes. *She’s tall and she’s got long dark hair.*\n\n**What is she like?** asks about **character**: what kind of person she is. *She’s friendly and very funny.*\n\n**What does she like?** asks about her **likes**: things she enjoys. *She likes jazz and old films.*' },
          { t: 'table', caption: 'Three questions with like', explain: ['head', 'col1'], head: ['Question', 'It asks about', 'Answer'], rows: [
            ['What does he look like?', 'appearance', 'He’s short and he’s got a beard.'],
            ['What is he like?', 'character', 'He’s quiet but very kind.'],
            ['What does he like?', 'things he enjoys', 'He likes cooking and football.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In **What is she like?**, *like* is not the verb “to like”: it means *similar to*. So the answer is about the person, not about her hobbies.' },
        ],
        [
          { t: 'text', md: 'To describe **appearance**, use **be** with height and build, and **have got** (or **have**) with hair, eyes and other features.\n\n*He’s tall / short / of medium height. She’s slim. He’s got curly hair and brown eyes. She has a beard? No: she doesn’t have a beard!*\n\nWhen you use more than one adjective before a noun, the usual order is **opinion, size, age, shape, colour**: *a lovely long red dress, short curly black hair, a friendly old man.* At A2, two adjectives are plenty.' },
          { t: 'table', caption: 'Appearance', explain: ['head'], head: ['With be', 'With have got'], rows: [
            ['tall, short, of medium height', 'long, short, curly, straight hair'],
            ['slim, thin, well-built', 'blond, dark, red, grey hair'],
            ['young, middle-aged, old', 'blue, brown, green eyes; a beard; glasses'],
          ] },
          { t: 'table', caption: 'Character', explain: ['head', 'col1'], quiz: true, head: ['Adjective', 'What it means'], rows: [
            ['friendly', 'nice to people, easy to talk to'],
            ['shy', 'nervous with people they do not know'],
            ['lazy', 'does not like working'],
            ['hard-working', 'works a lot and well'],
            ['generous', 'happy to give things to others'],
            ['funny', 'makes people laugh'],
            ['patient', 'can wait calmly'],
          ] },
        ],
        [
          { t: 'text', md: 'Here are the mistakes learners make most often when they describe people.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['How is your brother like?', 'What is your brother like?', 'The question word is *What*.'],
            ['She has 30 years and long hair.', 'She’s 30 and she’s got long hair.', 'Age with *be*.'],
            ['He’s got a hair black.', 'He’s got black hair.', '*hair* has no *a*; adjective first.'],
            ['My teacher is very sympathetic.', 'My teacher is very kind / nice.', 'In English, *sympathetic* means you share someone’s sadness.'],
          ] },
          { t: 'dialogue', title: 'The new neighbour', lines: [
            { who: 'Grace', s: 'Have you met the new neighbour?' },
            { who: 'Tom', s: 'Yes, yesterday. He’s really nice.' },
            { who: 'Grace', s: 'What does he look like? I think I saw him at the shop.' },
            { who: 'Tom', s: 'He’s quite tall, he’s got short grey hair and he wears glasses.' },
            { who: 'Grace', s: 'That’s him! And what’s he like?' },
            { who: 'Tom', s: 'A bit shy at first, but very funny when you talk to him.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['What does she look like?', 'She’s tall with red hair.'],
            ['What is she like?', 'She’s kind and patient.'],
            ['What does she like?', 'She likes dancing.'],
            ['How old is she?', 'She’s twenty-five.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best adjective.', items: [
            { q: 'He never helps at home and stays in bed until noon. He’s ___.', o: ['lazy', 'generous', 'shy'], why: 'Does not like working: *lazy*.' },
            { q: 'She always pays for everyone’s coffee. She’s ___.', o: ['generous', 'lazy', 'patient'], why: 'Happy to give: *generous*.' },
            { q: 'My son doesn’t speak much when he meets new people. He’s ___.', o: ['shy', 'funny', 'hard-working'], why: 'Nervous with new people: *shy*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'build', h: 'Write the sentence. Two words do not belong.', items: [
            { a: 'She has got long curly hair.', extra: ['a', 'have'], why: '*hair* has no *a*; with *she*: *has got*.' },
            { a: 'What is your new boss like?', extra: ['How', 'does'], why: 'Character: *What is … like?*' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'My sister [has] twenty-two years old.', a: ['is'], why: 'Age with *be*.' },
            { s: 'He’s got [a short hair].', a: ['short hair'], why: '*hair* takes no *a*.' },
            { s: '[How] is your teacher like?', a: ['What'], why: '*What is … like?*' },
          ] },
        ],
        [
          { t: 'text', md: 'In **Part 1 of the A2 Key Speaking test**, the examiner asks you simple questions about yourself, your family, your daily life and your likes. Short answers are not enough: give an answer and **one more detail**.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Speaking, Part 1): which is the best answer?', items: [
            { q: 'Examiner: “Tell me about your best friend.”', o: ['Her name’s Inés. She’s really funny, and we often go running together.', 'Inés.', 'Yes, I have.'], why: 'An answer plus a detail.' },
            { q: 'Examiner: “What do you usually do at the weekend?”', o: ['I usually visit my grandparents, and on Sunday I play football.', 'Weekend.', 'I am doing football.'], why: 'Present simple for a routine, with a detail.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the Speaking test, if you do not understand a question, ask: **Sorry, can you repeat that, please?** You do not lose marks for asking.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'What does your brother look like?' },
            { a: 'She’s got short dark hair.' },
            { a: 'He’s quite shy but very kind.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'A week in my life',
      about: 'Read a short profile, then write an email about yourself and your week in the format of A2 Key.',
      art: 'monster',
      spreads: [
        [
          { t: 'text', md: 'This lesson puts the unit together. You will read about a real week in someone’s life and then write about your own. Notice how the writer uses the **present simple** for routines and the **present continuous** for things that are different this month.' },
          { t: 'reading', title: 'Meet Amara', md: 'Amara Okafor is thirty-four and lives in Bristol with her husband and their son, Theo. She’s got short curly hair and a big smile, and her friends say she is the most patient person they know.\n\nAmara is a nurse. She usually works three long days a week at the city hospital, and on the other days she looks after Theo. She always takes him to the park on Wednesday afternoons.\n\nThis month is different, though. Amara is studying for an exam, so she is getting up at six every morning to read before work. “I’m drinking a lot of coffee at the moment,” she laughs, “but I love learning new things.”' },
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Amara lives with her family in Bristol.', a: 't', why: 'She lives there with her husband and son.' },
            { q: 'She works five days a week.', a: 'f', why: 'She works three days a week.' },
            { q: 'She goes to the park on Wednesdays.', a: 't', why: '*She always takes him to the park on Wednesday afternoons.*' },
            { q: 'Her exam is in June.', a: 'ng', why: 'The text does not say when the exam is.' },
            { q: 'She is getting up early this month.', a: 't', why: '*She is getting up at six every morning.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Why does the writer use these tenses?', items: [
            { q: '*She usually works three long days a week.*', o: ['It is a routine.', 'It is happening now.', 'It is finished.'], why: '*usually*: a routine, present simple.' },
            { q: '*She is studying for an exam.*', o: ['It is a temporary situation.', 'It is a fact about her.', 'It is a habit.'], why: 'Only this month: present continuous.' },
          ] },
          { t: 'text', md: 'In **Part 6 of the A2 Key Writing paper**, you write a short email or message of **25 words or more**. The task gives you **three points**, and you must write about all three. A good answer is short, friendly and complete: it does not need difficult words.' },
          { t: 'examples', items: [
            { s: 'Task: Write to your new English penfriend. Tell them **what you do**, **what you do at weekends** and **something you are doing this month**.', n: 'Three points to cover.' },
            { s: 'Hi Max! I’m a student in Porto. At the weekend I usually play volleyball with friends. This month I’m learning to cook, so I’m making dinner every night! Write soon, Ana', n: '38 words: all three points, both present tenses.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Writing, Part 6): which email answers all three points?', items: [
            { q: 'Task: Write to a friend. Say where you are working now, when you finish work, and invite them for a coffee.', o: ['Hi Jo! I’m working at a bookshop now. I finish at five every day. Do you want to meet for a coffee on Friday? Lucy', 'Hi Jo! I’m working at a bookshop now. It’s a really nice place and my boss is friendly. Lucy', 'Hi Jo! Do you want to meet for a coffee? I like coffee a lot. Lucy'], why: 'Only the first one covers all three points.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order to make sentences for your email.', items: [
            { a: 'At the moment I am learning to swim.', why: 'A temporary activity: present continuous.' },
            { a: 'I usually see my friends on Saturday.', why: 'A routine: present simple, adverb before the verb.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Before you write, **underline the three points** in the task. After you write, **tick them off**. Missing one point costs more marks than a small grammar mistake. Count your words: 25 is the minimum, and 30 to 40 is a good length.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'I usually work three days a week.' },
            { a: 'This month I’m studying for an exam.' },
            { a: 'Do you want to meet for a coffee on Friday?' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
      { q: 'My dad ___ in a factory.', o: ['works', 'is working', 'work'], why: 'His job: present simple.' },
      { q: 'Be quiet! I ___ to the news.', o: ['am listening', 'listen', 'listens'], why: 'Happening now.' },
      { q: 'I ___ your name. Can you tell me again?', o: ['don’t remember', 'am not remembering', 'not remember'], why: '*remember* is a state verb.' },
      { q: '___ she usually take the bus?', o: ['Does', 'Is', 'Do'], why: 'A present simple question: *Does*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the verb in the correct present form.', items: [
      { q: 'We ___ (not eat) meat.', a: ['don’t eat', 'do not eat', "don't eat"], why: 'A habit: present simple negative.' },
      { q: 'Kate ___ (stay) with us this week.', a: ['is staying', 'she’s staying', "is staying"], why: '*this week*: temporary.' },
      { q: 'He ___ (watch) TV every evening.', a: ['watches'], why: '*-es* after *-ch*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'She is always happy in the morning.', why: '*always* after *be*.' },
      { a: 'What does your sister look like?', why: 'Appearance: *look like*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'I [am wanting] a glass of water.', a: ['want'], why: '*want* is a state verb.' },
      { s: 'He [go never] to the theatre.', a: ['never goes'], why: 'Adverb before the verb, and *-es* with *he*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the questions and answers.', pairs: [
      ['What is he like?', 'He’s very funny.'],
      ['What does he look like?', 'He’s tall with a beard.'],
      ['How often do you see him?', 'Once a week.'],
      ['What are you doing?', 'I’m writing an email.'],
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'I go to the cinema ___ a month.', a: ['once', 'twice'], why: '*once a month*.' },
      { q: '___ often do you call your parents?', a: ['How'], why: '*How often…?*' },
    ] },
  ],
};
