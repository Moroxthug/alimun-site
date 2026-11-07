// English A1, unit 1, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for the owner's review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one skills task, and one task in the format of the A2 Key exam.
export const UNIT = {
  id: 'u1',
  title: 'Hello!',
  goal: 'Greet people, say who you are, where you are from, how old you are and which languages you speak, and spell your name.',
  art: 'parrot',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['greetings', 'be', 'names', 'nationalities', 'alphabet', 'numbers', 'languages'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Hello and goodbye',
      about: 'Say hello and goodbye at the right moment, ask how someone is, and be polite with people you do not know.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Every conversation in English starts with a greeting. The good news: English greetings are short, and there are only a few of them. The important thing is to choose the right one for the moment and for the person.\n\n**Hello** is the greeting you can use with anyone, at any time: a friend, a shop assistant, your teacher, your boss. **Hi** means the same, but it is more relaxed. Use it with friends, classmates and colleagues you know. **Hey** is even more relaxed, for good friends only.\n\nTo be a little more polite, especially with people you do not know, use the time of day: **good morning** until about twelve o’clock, **good afternoon** from lunch until about six, and **good evening** after that.' },
          { t: 'table', caption: 'Saying hello', explain: ['head', 'col1', 'col2'], head: ['English', 'When', 'With whom'], rows: [
            ['hello', 'at any time', 'anyone'],
            ['hi', 'at any time', 'people you know'],
            ['hey', 'at any time', 'good friends'],
            ['good morning', 'before about 12.00', 'anyone, a little polite'],
            ['good afternoon', 'from about 12.00 to 18.00', 'anyone, a little polite'],
            ['good evening', 'after about 18.00', 'anyone, a little polite'],
          ] },
          { t: 'tip', art: 'owl', md: '**Good night** is not a greeting. You never say it when you arrive. You say it when you leave late in the evening, or when someone goes to bed. When you arrive at a restaurant at nine in the evening, say **good evening**.' },
        ],
        [
          { t: 'text', md: 'When you leave, say **goodbye** or, more relaxed, **bye**. English speakers often say when they will meet again: **see you later** (today), **see you tomorrow**, **see you on Monday**, or just **see you**. With a friend, you can add **take care**.\n\nIn a shop or a café, people often say **have a nice day** when you leave. The answer is **thanks, you too**.' },
          { t: 'examples', items: [
            { s: '**Bye**, Sam! **See you tomorrow.**', n: 'A relaxed goodbye to a friend you see again tomorrow.' },
            { s: '**Goodbye**, Mrs Clark. **See you on Monday.**', n: 'A polite goodbye, with the day you meet again.' },
            { s: '**Good night**, everyone!', n: 'You leave late in the evening.' },
            { s: '**Have a nice day!** – **Thanks, you too.**', n: 'In a shop: the assistant says it, you answer.' },
            { s: '**See you!** – **Take care!**', n: 'Two friends say goodbye.' },
          ] },
          { t: 'tip', art: 'owl', md: '**See you later** does not always mean that you will meet again today. Many people say it as a friendly goodbye, even when they do not know when they will meet again.' },
        ],
        [
          { t: 'text', md: 'After hello, English speakers usually ask **How are you?** This question is part of the greeting. The other person does not want to hear about your health or your problems: they want a short, friendly answer, and then they expect you to ask the same question back.\n\nThe usual answers are **Fine, thanks**, **I’m good, thanks** or **Very well, thank you** (more polite). Then ask back: **And you?** or **How about you?** If you are not very well, a short answer is enough: **Not bad** or **Not too bad**.\n\nWith friends, people also ask **How’s it going?** or **How are things?** The answer is the same: **Good, thanks. And you?**' },
          { t: 'examples', items: [
            { s: 'Hi, Tom! **How are you?** – **Fine, thanks. And you?**', n: 'The question, a short answer, and the same question back.' },
            { s: 'Good morning, Dr Patel. **How are you?** – **Very well, thank you.**', n: 'More polite.' },
            { s: '**How’s it going?** – **Good, thanks. How about you?**', n: 'Relaxed, between friends.' },
            { s: '**How are you?** – **Not bad, thanks.**', n: 'The day is not perfect, but the answer stays short.' },
          ] },
          { t: 'tip', art: 'owl', md: 'A common mistake is to answer **How are you?** with only *Fine.* and stop. In English this sounds cold. Always add **thanks** and ask back: **Fine, thanks. And you?**' },
        ],
        [
          { t: 'text', md: 'English has only one word for *you*. You say **you** to a child, to a friend and to a president. So how do English speakers show respect? With **names** and **titles**.\n\nWith people you do not know, or in a formal situation, use a title and the **family name** (the last name): **Mr** for a man, **Ms** for a woman, **Mrs** for a married woman who prefers it, and **Dr** for a doctor. Never use a title with the first name: *Mr Hill* is right, *Mr John* is not.\n\nWhen you meet someone for the first time, say **Nice to meet you**. The answer is **Nice to meet you, too**. The next time you meet the same person, say **Nice to see you**.' },
          { t: 'table', caption: 'Titles', explain: ['head', 'col1'], head: ['Title', 'For'], rows: [
            ['Mr Hill', 'a man'],
            ['Ms Clark', 'a woman, married or not (the safest choice)'],
            ['Mrs Clark', 'a married woman who uses this title'],
            ['Dr Patel', 'a doctor, a man or a woman'],
          ] },
          { t: 'dialogue', title: 'At reception, first day at work', lines: [
            { who: 'Ms Clark', s: 'Good morning. You’re Daniel, right?' },
            { who: 'Daniel', s: 'Yes, that’s right. Good morning.' },
            { who: 'Ms Clark', s: 'I’m Laura Clark. Nice to meet you.' },
            { who: 'Daniel', s: 'Nice to meet you, too, Ms Clark.' },
            { who: 'Ms Clark', s: 'Please call me Laura. How are you today?' },
            { who: 'Daniel', s: 'Very well, thank you. And you?' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each sentence with the best answer.', pairs: [
            ['How are you?', 'Fine, thanks. And you?'],
            ['Nice to meet you.', 'Nice to meet you, too.'],
            ['Have a nice day!', 'Thanks, you too.'],
            ['See you tomorrow.', 'Bye! See you.'],
            ['How’s it going?', 'Good, thanks.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'You arrive at a hotel at 8 in the evening. You say:', o: ['Good evening.', 'Good night.', 'Good afternoon.'], why: 'When you arrive in the evening, say *good evening*. *Good night* is only for leaving or going to bed.' },
            { q: 'You meet your new manager for the first time. You say:', o: ['Nice to meet you.', 'Nice to see you.', 'See you later.'], why: 'The first time you meet someone: *Nice to meet you*.' },
            { q: 'Your doctor is Sarah Patel. You say:', o: ['Good morning, Dr Patel.', 'Good morning, Dr Sarah.', 'Good morning, Mrs Sarah.'], why: 'A title goes with the family name, never with the first name.' },
            { q: 'You leave a party at midnight. You say:', o: ['Good night!', 'Good evening!', 'Good morning!'], why: 'You leave late at night: *good night*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the best reply.', items: [
            { q: '“How are you?”', o: ['Not bad, thanks. And you?', 'I’m from London.', 'Yes, I am.'], why: '*How are you?* asks how you feel. The answer is short, and you ask back.' },
            { q: '“Have a nice weekend!”', o: ['Thanks, you too.', 'Nice to meet you.', 'Good morning.'], why: 'Answer a good wish with *thanks, you too*.' },
            { q: '“Hi, I’m Anna.”', o: ['Hi, Anna. I’m Marco.', 'Fine, thanks.', 'See you tomorrow.'], why: 'When someone says their name, say hello and give your name.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the A2 Key exam, one part of the listening test plays a short sentence and asks you to choose the best reply. The words are easy; the trick is to think about the **situation**: is it a greeting, a question about you, or a goodbye?' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Your turn: say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'Good morning. How are you?' },
            { a: 'Fine, thanks. And you?' },
            { a: 'Nice to meet you.' },
            { a: 'Have a nice day!' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'I am, you are, she is',
      about: 'Use the verb be to say who you are, where you are from, how old you are and what you do.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: '**Be** is the most important verb in English, and the most irregular. It has three forms in the present: **am**, **is** and **are**. Which one you use depends on the person.\n\nIn many languages you can leave out the person, because the verb shows it. In English you cannot: every sentence needs a **subject**. The subject is a person or a thing (*Anna, my brother, the hotel*) or one of these small words, the **subject pronouns**: *I, you, he, she, it, we, they*.' },
          { t: 'table', caption: 'be in the present', quiz: true, explain: ['col2'], head: ['', 'be', 'Who'], rows: [
            ['I', 'am', 'me'],
            ['you', 'are', 'one person or more than one'],
            ['he', 'is', 'a man or a boy'],
            ['she', 'is', 'a woman or a girl'],
            ['it', 'is', 'a thing, an animal, a place'],
            ['we', 'are', 'me and other people'],
            ['they', 'are', 'other people, or things'],
          ] },
          { t: 'tip', art: 'owl', md: 'A simple way to remember it: **am** only goes with **I**. **Is** goes with one person or one thing (*he, she, it, Anna, my phone*). **Are** goes with everything else (*you, we, they, Anna and Tom*).' },
        ],
        [
          { t: 'text', md: 'When English speakers talk, and when they write to friends, they join the pronoun and the verb: **I am** becomes **I’m**, **you are** becomes **you’re**. These are the **short forms**. The small sign **’** (an apostrophe) shows where a letter is missing: *I’m = I am* (the *a* is missing).\n\nUse short forms when you speak and in messages. Use the full forms in formal writing, and when you want to make the word strong: *I **am** ready!*' },
          { t: 'table', caption: 'Full and short forms', quiz: true, explain: ['head'], head: ['Full form', 'Short form', 'Say it'], rows: [
            ['I am', 'I’m', 'aim'],
            ['you are', 'you’re', 'yor'],
            ['he is', 'he’s', 'heez'],
            ['she is', 'she’s', 'sheez'],
            ['it is', 'it’s', 'its'],
            ['we are', 'we’re', 'weer'],
            ['they are', 'they’re', 'thair'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not mix up **it’s** (= *it is*) and **its** (= of it): *It’s a nice hotel. Its rooms are big.* Only **it’s** has an apostrophe.' },
        ],
        [
          { t: 'text', md: 'What can come after **be**? Here are the five things you need from the first day:\n\n**A name**: *I’m Daniel. She’s Laura.*\n\n**A place**, usually with **from**: *We’re from Brazil. He’s from Madrid.*\n\n**An age**, with a number: *I’m 24. My son is 6.* You can add **years old**: *I’m 24 years old.*\n\n**A job**, with **a** or **an**: *She’s a nurse. I’m an engineer.* Use **an** before a vowel sound (a, e, i, o, u): *an engineer, an artist, an office worker*.\n\n**A word that describes**: *I’m tired. The room is small. They’re happy.*' },
          { t: 'examples', items: [
            { s: '**I’m** Daniel and **I’m from** Lisbon.', n: 'A name and a place.' },
            { s: 'My sister **is** 30. **She’s a** teacher.', n: 'An age and a job.' },
            { s: '**He’s an** engineer.', n: '*an* before a vowel sound.' },
            { s: '**We’re** hungry!', n: 'A word that describes how we feel.' },
            { s: '**It’s** a small hotel, but **it’s** very nice.', n: '*it* for a place.' },
            { s: 'Anna and Tom **are** students.', n: 'Two people: *are*, and the job in the plural, without *a*.' },
          ] },
        ],
        [
          { t: 'text', md: 'These are the three mistakes teachers hear most often from beginners. Each one comes from translating word for word from another language.' },
          { t: 'table', caption: 'Three common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I have 24 years.', 'I’m 24.', 'In English you *are* an age; you do not *have* it.'],
            ['She is teacher.', 'She’s a teacher.', 'One person with a job: always *a* or *an*.'],
            ['Is from Spain.', 'He’s from Spain.', 'Every sentence needs a subject.'],
          ] },
          { t: 'tip', art: 'owl', md: 'When you write a sentence with **be**, check two things: is there a subject before the verb, and is it the right form (**am**, **is** or **are**)?' },
        ],
        [
          { t: 'reading', title: 'Meet the class', md: 'Hi! I’m Olga and I’m from Kyiv, in Ukraine. I’m 35 and I’m a nurse.\n\nThis is Ahmed. He’s from Casablanca. He’s 28 and he’s an engineer. He’s very funny.\n\nYuki and Ken are from Osaka, in Japan. They’re students. Yuki is 19 and Ken is 21.\n\nOur teacher is Ms Brown. She’s from Dublin. She’s very kind, and her lessons are great!' },
          { t: 'ex', kind: 'tf', h: 'Read the text. Are the sentences true or false?', items: [
            { q: 'Olga is a teacher.', a: 'f', why: 'Olga is a nurse.' },
            { q: 'Ahmed is from Morocco.', a: 't', why: 'Casablanca is in Morocco.' },
            { q: 'Yuki and Ken are students.', a: 't', why: '*They’re students.*' },
            { q: 'Ken is 19.', a: 'f', why: 'Yuki is 19. Ken is 21.' },
            { q: 'The teacher is from Ireland.', a: 't', why: 'Ms Brown is from Dublin, in Ireland.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of be.', verb: 'be', tense: 'present', rows: [
            ['I', 'am|’m'],
            ['you', 'are|’re'],
            ['he / she / it', 'is|’s'],
            ['we', 'are|’re'],
            ['they', 'are|’re'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write am, is or are.', items: [
            { q: 'My name ___ Olga.', a: ['is'], why: '*my name* is one thing, like *it*: *is*.' },
            { q: 'I ___ from Kyiv.', a: ['am'], why: '*am* only goes with *I*.' },
            { q: 'Ahmed and his wife ___ from Casablanca.', a: ['are'], why: 'Two people, like *they*: *are*.' },
            { q: 'The lesson ___ at nine o’clock.', a: ['is'], why: 'One thing, like *it*: *is*.' },
            { q: 'You ___ very kind!', a: ['are'], why: '*you are*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
            { s: 'I [have] 30 years old.', a: ['am', '’m'], why: 'For an age, use *be*: *I am 30 years old.*' },
            { s: 'My brother [are] a doctor.', a: ['is'], why: 'One person: *is*.' },
            { s: 'She is [engineer].', a: ['an engineer'], why: 'A job needs *a* or *an*; *engineer* starts with a vowel sound: *an engineer*.' },
            { s: '[Its] a beautiful city.', a: ['It’s', 'It is'], why: '*It’s* = *it is*. *Its* means *of it*.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Write the sentence. Two words do not belong.', items: [
            { a: 'She is a teacher from Dublin.', extra: ['are', 'an'], why: 'One person: *is*; *teacher* starts with a consonant: *a*.' },
            { a: 'We are from Japan.', extra: ['is', 'the'], why: '*we are*; countries usually have no *the*.' },
          ] },
        ],
        [
          { t: 'text', md: 'Now say a few sentences about yourself. Use the five things from this lesson: your name, where you are from, your age, your job and how you feel today. Then repeat the sentences after the tutor to practise the short forms.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'I’m from Lisbon.' },
            { a: 'She’s a nurse.' },
            { a: 'He’s an engineer.' },
            { a: 'We’re very happy.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Are you from Spain?',
      about: 'Make questions and negative sentences with be, give short answers, and talk about countries and nationalities.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'To make a negative sentence with **be**, put **not** after the verb: *I am not*, *she is not*, *they are not*. It is that simple: no other word is needed.\n\nWhen you speak, use the short forms. There are two ways to shorten **is not** and **are not**: *she isn’t* or *she’s not*, *they aren’t* or *they’re not*. Both are correct and both are common. **I am not** has only one short form: **I’m not**.' },
          { t: 'table', caption: 'Negative sentences', quiz: true, explain: ['head'], head: ['Full form', 'Short form', 'Also possible'], rows: [
            ['I am not', 'I’m not', '–'],
            ['you are not', 'you aren’t', 'you’re not'],
            ['he is not', 'he isn’t', 'he’s not'],
            ['she is not', 'she isn’t', 'she’s not'],
            ['it is not', 'it isn’t', 'it’s not'],
            ['we are not', 'we aren’t', 'we’re not'],
            ['they are not', 'they aren’t', 'they’re not'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not use **don’t** with **be**. *I don’t from Spain* and *She don’t tired* are wrong. With **be**, the negative is always **be + not**: *I’m not from Spain. She isn’t tired.*' },
        ],
        [
          { t: 'text', md: 'To ask a question with **be**, change the order: put the verb **before** the subject.\n\n*You are Spanish.* → *Are you Spanish?*\n*She is a student.* → *Is she a student?*\n\nThe answer is often a **short answer**: *yes* or *no*, the subject and the verb, nothing more. In a *yes* answer, never use a short form at the end: say **Yes, I am**, not *Yes, I’m*.\n\nTo ask for information, put a **question word** first: **What** (a thing), **Where** (a place), **Who** (a person), **How old** (an age), **How** (how someone is).' },
          { t: 'table', caption: 'Questions and short answers', explain: ['head'], head: ['Question', 'Yes', 'No'], rows: [
            ['Am I late?', 'Yes, you are.', 'No, you aren’t.'],
            ['Are you French?', 'Yes, I am.', 'No, I’m not.'],
            ['Is he a doctor?', 'Yes, he is.', 'No, he isn’t.'],
            ['Is it expensive?', 'Yes, it is.', 'No, it isn’t.'],
            ['Are they friends?', 'Yes, they are.', 'No, they aren’t.'],
          ] },
          { t: 'examples', items: [
            { s: '**What’s** your name? – Laura.', n: '*What’s* = *what is*.' },
            { s: '**Where are** you **from**? – I’m from Turkey.', n: 'Notice *from* at the end of the question.' },
            { s: '**How old is** your daughter? – She’s seven.', n: 'An age: *how old*.' },
            { s: '**Who is** he? – He’s my brother.', n: 'A person: *who*.' },
          ] },
        ],
        [
          { t: 'text', md: 'To say where you are from, use the **country**: *I’m from Brazil.* To describe a person, a language or a thing, use the **nationality**: *I’m Brazilian. Brazilian coffee is great.* The language often has the same word as the nationality: *She speaks Portuguese.*\n\nIn English, countries, nationalities and languages always start with a **capital letter**, even in the middle of a sentence: *I’m Italian and I speak Italian and English.*' },
          { t: 'table', caption: 'Countries and nationalities', explain: ['head'], head: ['Country', 'Nationality', 'Country', 'Nationality'], rows: [
            ['Spain', 'Spanish', 'Brazil', 'Brazilian'],
            ['France', 'French', 'Italy', 'Italian'],
            ['Germany', 'German', 'Morocco', 'Moroccan'],
            ['Portugal', 'Portuguese', 'Mexico', 'Mexican'],
            ['China', 'Chinese', 'Egypt', 'Egyptian'],
            ['Japan', 'Japanese', 'the USA', 'American'],
            ['Turkey', 'Turkish', 'the UK', 'British'],
          ] },
          { t: 'tip', art: 'owl', md: 'A few countries have **the** before them because their name says what they are: **the** USA (United States), **the** UK (United Kingdom), **the** Netherlands. Most countries have no *the*: *I’m from Spain*, not *from the Spain*.' },
        ],
        [
          { t: 'dialogue', title: 'The first day at a language school', lines: [
            { who: 'Teacher', s: 'Hello! What’s your name?' },
            { who: 'Marta', s: 'Hi. I’m Marta.' },
            { who: 'Teacher', s: 'Nice to meet you, Marta. Where are you from?' },
            { who: 'Marta', s: 'I’m from Mexico. I’m Mexican.' },
            { who: 'Teacher', s: 'Are you from Mexico City?' },
            { who: 'Marta', s: 'No, I’m not. I’m from Guadalajara.' },
            { who: 'Teacher', s: 'And who is this?' },
            { who: 'Marta', s: 'This is Kemal. He’s my classmate. He isn’t Mexican, he’s Turkish!' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Read the dialogue again. Choose the right answer.', items: [
            { q: 'Where is Marta from?', o: ['Guadalajara', 'Mexico City', 'Turkey'], why: '*I’m from Guadalajara.*' },
            { q: 'Is Kemal Mexican?', o: ['No, he isn’t.', 'Yes, he is.', 'No, he aren’t.'], why: '*He isn’t Mexican, he’s Turkish.* With *he*: *isn’t*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Is it a country or a nationality?', groups: ['country', 'nationality'], explain: ['groups'], items: [
            { s: 'Japan', g: 0, why: '*I’m from Japan*: a country.' },
            { s: 'Moroccan', g: 1, why: '*I’m Moroccan*: a nationality.' },
            { s: 'Germany', g: 0, why: 'A country.' },
            { s: 'Turkish', g: 1, why: 'A nationality, and also the language.' },
            { s: 'Egypt', g: 0, why: 'A country.' },
            { s: 'Chinese', g: 1, why: 'A nationality, and also the language.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Make a question with be.', items: [
            { q: 'You are from Egypt.', cue: 'Are', a: ['Are you from Egypt?'], why: 'Put *are* before *you*.' },
            { q: 'She is Italian.', cue: 'Is', a: ['Is she Italian?'], why: 'Put *is* before *she*.' },
            { q: 'They are students.', cue: 'Are', a: ['Are they students?'], why: 'Put *are* before *they*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
            { q: '“Are you Spanish?” – “No, ___. I’m Portuguese.”', o: ['I’m not', 'I don’t', 'I amn’t'], why: 'With *be*: *I’m not*. There is no *amn’t*, and no *don’t*.' },
            { q: '“Is your hotel expensive?” – “Yes, ___.”', o: ['it is', 'it’s', 'is'], why: 'In a short *yes* answer, use the full form at the end: *Yes, it is.*' },
            { q: '___ are you from? – I’m from Japan.', o: ['Where', 'What', 'Who'], why: 'A place: *where*.' },
            { q: '___ is your teacher? – Ms Brown.', o: ['Who', 'Where', 'How old'], why: 'A person: *who*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order to make questions.', items: [
            { a: 'Where are your friends from?', why: 'Question word, *be*, subject, then *from* at the end.' },
            { a: 'How old is your brother?', why: '*How old* + *be* + subject.' },
            { a: 'Is your teacher British?', why: 'A yes or no question starts with *be*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: read the question and choose the best answer.', items: [
            { q: '“Where’s your new friend from?”', o: ['She’s from Brazil.', 'She’s 25.', 'Yes, she is.'], why: '*Where … from?* asks for a place.' },
            { q: '“Are you a student here?”', o: ['Yes, I am.', 'Yes, I’m.', 'I’m fine, thanks.'], why: 'A short *yes* answer ends with the full form: *Yes, I am.*' },
            { q: '“How old are your children?”', o: ['Eight and eleven.', 'They’re in London.', 'They’re fine.'], why: '*How old* asks for an age.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the exam, look at the **first words** of the question. *Where* wants a place, *How old* an age, *Who* a person, and a question that starts with *Are* or *Is* wants *yes* or *no*.' },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Spell it, count it, say it',
      about: 'Spell your name, say phone numbers and ages, and say which languages you speak.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'People often ask you to spell your name: at a hotel, on the phone, at the doctor’s. The question is **How do you spell that?** or **Can you spell it, please?**\n\nThe English alphabet has 26 letters. Their names are easy to learn in **sound groups**: the letters in a group have the same vowel sound. Learn the groups, not 26 separate names, and you will remember them much faster.' },
          { t: 'table', caption: 'The alphabet in sound groups', explain: ['head', 'col2'], head: ['Sound', 'Letters', 'Like the word'], rows: [
            ['ay', 'A H J K', 'say'],
            ['ee', 'B C D E G P T V', 'see'],
            ['e', 'F L M N S X Z', 'yes'],
            ['eye', 'I Y', 'my'],
            ['oh', 'O', 'no'],
            ['you', 'Q U W', 'you'],
            ['ar', 'R', 'car'],
          ] },
          { t: 'tip', art: 'owl', md: 'Learners often mix up three pairs: **E** (ee) and **I** (eye), **G** (jee) and **J** (jay), **A** (ay) and **R** (ar). For two letters that are the same, say **double**: *Hill* is H, I, double L. **Z** is *zed* in Britain and *zee* in the USA.' },
        ],
        [
          { t: 'text', md: 'Numbers are everywhere: ages, phone numbers, prices, room numbers. From **13** to **19**, the numbers end in **-teen**. Listen carefully to the stress: in **thirTEEN** the strong part is at the end; in **THIRty** (30) it is at the start. This is how English speakers hear the difference.\n\nWatch the spelling of three numbers: **twelve** (not *twoteen*), **thirteen** (not *threeteen*) and **fifteen** (not *fiveteen*).' },
          { t: 'table', caption: 'Numbers 0 to 20', quiz: true, explain: ['head'], head: ['Number', 'Word', 'Number', 'Word'], rows: [
            ['0', 'zero', '11', 'eleven'],
            ['1', 'one', '12', 'twelve'],
            ['2', 'two', '13', 'thirteen'],
            ['3', 'three', '14', 'fourteen'],
            ['4', 'four', '15', 'fifteen'],
            ['5', 'five', '16', 'sixteen'],
            ['6', 'six', '17', 'seventeen'],
            ['7', 'seven', '18', 'eighteen'],
            ['8', 'eight', '19', 'nineteen'],
            ['9', 'nine', '20', 'twenty'],
            ['10', 'ten', '', ''],
          ] },
          { t: 'tip', art: 'owl', md: 'For a phone number, say each number on its own: *07 4415* is *oh seven, four four one five*. In phone numbers, **0** is usually **oh**, and two numbers that are the same can be **double**: *double four*.' },
        ],
        [
          { t: 'text', md: 'To say which languages you speak, use **speak** + the language, with no *the*: **I speak Arabic and French.** To say that you speak a language a little, add **a little**: **I speak a little English.**\n\nTo ask, say **Do you speak English?** The short answers are **Yes, I do** and **No, I don’t**. You will learn more about *do* and *don’t* in the next unit; for now, learn these as fixed phrases.' },
          { t: 'examples', items: [
            { s: 'I **speak** Spanish and English.', n: 'No *the* before a language.' },
            { s: 'She **speaks** Chinese.', n: 'With *he* or *she*, add **-s**: *speaks*.' },
            { s: 'I **speak a little** German.', n: 'Not very well, but a little.' },
            { s: '**Do you speak** English? – **Yes, I do.**', n: 'A question and a short answer.' },
          ] },
          { t: 'dialogue', title: 'At a hotel', lines: [
            { who: 'Receptionist', s: 'Good evening. What’s your name, please?' },
            { who: 'Guest', s: 'Karim Haddad.' },
            { who: 'Receptionist', s: 'How do you spell Haddad?' },
            { who: 'Guest', s: 'H, A, double D, A, D.' },
            { who: 'Receptionist', s: 'Thank you. And your phone number?' },
            { who: 'Guest', s: 'Oh six, one two, double five, eight nine.' },
            { who: 'Receptionist', s: 'Thank you, Mr Haddad. Your room is fourteen.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which sound group is each letter in?', groups: ['ay (say)', 'ee (see)', 'e (yes)'], explain: ['groups'], items: [
            { s: 'H', g: 0, why: '*H* sounds like *aitch*, with the *ay* sound, like *say*.' },
            { s: 'G', g: 1, why: '*G* is *jee*, like *see*.' },
            { s: 'F', g: 2, why: '*F* is *ef*, like *yes*.' },
            { s: 'J', g: 0, why: '*J* is *jay*, like *say*.' },
            { s: 'V', g: 1, why: '*V* is *vee*, like *see*.' },
            { s: 'M', g: 2, why: '*M* is *em*, like *yes*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the numbers and the words.', pairs: [
            ['12', 'twelve'],
            ['13', 'thirteen'],
            ['15', 'fifteen'],
            ['20', 'twenty'],
            ['30', 'thirty'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the number in words.', items: [
            { q: 'My son is ___ (11) years old.', a: ['eleven'], why: '11 is *eleven*.' },
            { q: 'There are ___ (18) students in the class.', a: ['eighteen'], why: '18 is *eighteen*: *eight* + *-teen*, with only one *t*.' },
            { q: 'Our room is number ___ (14).', a: ['fourteen'], why: '14 is *fourteen*.' },
            { q: 'The bus is ___ (20) minutes late.', a: ['twenty'], why: '20 is *twenty*.' },
          ] },
          { t: 'ex', kind: 'crossword', h: 'Complete the crossword with numbers.', words: [
            { a: 'seven', clue: '3 + 4' },
            { a: 'twelve', clue: '6 + 6' },
            { a: 'fifteen', clue: '10 + 5' },
            { a: 'nine', clue: '3 x 3' },
            { a: 'eleven', clue: '20 - 9' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the best reply.', items: [
            { q: '“How do you spell your name?”', o: ['P, A, B, L, O.', 'My name is Pablo.', 'Yes, I do.'], why: '*Spell* asks for the letters, one by one.' },
            { q: '“Do you speak French?”', o: ['Yes, a little.', 'Yes, I’m French.', 'I’m from France.'], why: 'The question is about speaking: *Yes, a little* answers it.' },
            { q: '“What’s your phone number?”', o: ['It’s oh seven, double three, two one.', 'It’s 25.', 'It’s in my bag.'], why: 'A phone number is said number by number.' },
          ] },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'How do you spell that?' },
            { a: 'I speak a little English.' },
            { a: 'My room is fourteen.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
      { q: 'You arrive at a restaurant at 9 in the evening. You say:', o: ['Good evening.', 'Good night.', 'Goodbye.'], why: '*Good night* is only for leaving or going to bed.' },
      { q: 'You meet a new colleague for the first time. You say:', o: ['Nice to meet you.', 'Nice to see you.', 'See you later.'], why: 'The first time: *Nice to meet you*.' },
      { q: 'A shop assistant says “Have a nice day!” You say:', o: ['Thanks, you too.', 'Fine, thanks.', 'Yes, I do.'], why: 'Answer a good wish with *thanks, you too*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write am, is or are.', items: [
      { q: 'My parents ___ from Egypt.', a: ['are'], why: 'Two people: *are*.' },
      { q: 'I ___ 27 years old.', a: ['am'], why: '*I am*, for an age.' },
      { q: 'Laura ___ a doctor.', a: ['is'], why: 'One person: *is*.' },
      { q: 'We ___ in room fifteen.', a: ['are'], why: '*we are*' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
      { q: '“Are you Turkish?” – “Yes, ___.”', o: ['I am', 'I’m', 'I do'], why: 'A short *yes* answer: *Yes, I am.*' },
      { q: 'She ___ from Italy. She’s from Spain.', o: ['isn’t', 'don’t', 'aren’t'], why: 'With *she*: *isn’t*.' },
      { q: '___ is your daughter? – She’s nine.', o: ['How old', 'Who', 'Where'], why: 'An age: *how old*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'He is [doctor].', a: ['a doctor'], why: 'A job needs *a* or *an*.' },
      { s: 'I [have] 19 years old.', a: ['am', '’m'], why: 'For an age, use *be*.' },
      { s: 'They [is] my friends.', a: ['are'], why: 'With *they*: *are*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Make a question with be.', items: [
      { q: 'He is Brazilian.', cue: 'Is', a: ['Is he Brazilian?'], why: 'Put *is* before *he*.' },
      { q: 'You are a student.', cue: 'Are', a: ['Are you a student?'], why: 'Put *are* before *you*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the country and the nationality.', pairs: [
      ['Morocco', 'Moroccan'],
      ['Germany', 'German'],
      ['Japan', 'Japanese'],
      ['the UK', 'British'],
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the number in words.', items: [
      { q: '3 + 10 = ___', a: ['thirteen'], why: '*thirteen*, not *threeteen*.' },
      { q: '6 + 6 = ___', a: ['twelve'], why: '*twelve*' },
    ] },
  ],
};
