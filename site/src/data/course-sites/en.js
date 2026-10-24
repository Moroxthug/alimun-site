// English site (root): course pages for anyone who reads the site in English: people learning
// English from any first language, and English speakers in the UK, Ireland, the US, Canada and
// Australia learning another language. US spelling, as on the rest of the site.
// English and German are open; the other languages are waitlist pages. Facts only.

const LEVELS = {
  A1: 'You understand and use everyday expressions and very simple sentences, can introduce yourself and ask about personal details, as long as the other person speaks slowly and clearly.',
  A2: 'You get by in simple, familiar situations such as family, shopping, work and where you live, and describe your surroundings in simple words.',
  B1: 'You handle most situations while traveling, talk about experiences, plans and hopes, and briefly explain your opinions.',
  B2: 'You understand the main ideas of complex texts, including technical ones in your field, and speak fluently enough for a natural conversation with native speakers.',
  C1: 'You use the language flexibly and effectively in social life, study and work, and write clear, well-structured texts on complex subjects.',
  C2: 'You understand almost everything you read and hear with ease, and express yourself spontaneously, fluently and precisely, catching fine shades of meaning.',
};

const waitlistRow = (name) => ['When classes open', [
  `${name} classes at Alimun are not open yet. When you **join the waitlist for free**, you get an email as soon as they open, and you pay nothing today. In the meantime, English and German classes are already open.`,
]];
const levelRow = ['How to know which level to start from', [
  'The Common European Framework of Reference divides language ability into six levels, from A1 to C2. **Checking your level before you start** lets you begin at the right point and follow your progress.',
]];

export default {
  site: 'en',
  locale: 'en_US',
  courses: [
    { lang: 'English', slug: 'english-course-online', name: 'English', video: 'pexels-12156230-london', open: true },
    { lang: 'German', slug: 'german-course-online', name: 'German', video: 'pexels-29955338-berlin', open: true },
    { lang: 'Spanish', slug: 'spanish-course-online', name: 'Spanish', video: 'pexels-20066590-barcelona', open: false },
    { lang: 'French', slug: 'french-course-online', name: 'French', video: 'pexels-4272751-paris', open: false },
    { lang: 'Italian', slug: 'italian-course-online', name: 'Italian', video: 'pexels-15245121-rome', open: false },
    { lang: 'Portuguese', slug: 'portuguese-course-online', name: 'Portuguese', video: 'pexels-12890902-sintra', open: false },
  ],
  pageTitle: (c) => c.open ? `Online ${c.name} course with live classes | Alimun` : `Online ${c.name} course: join the waitlist | Alimun`,
  metaDesc: (c) => c.open
    ? `Online ${c.name} course in groups with a teacher, on fixed days and times every week, with homework corrected by your teacher and exercises with instant feedback. From €24 a month.`
    : `${c.name} classes at Alimun are opening soon. Join the waitlist for free and we will email you as soon as they open.`,
  heroTitle: (c) => `Online ${c.name} course`,
  heroDesc: (c) => c.open
    ? 'Live video classes with a teacher and the same group, on fixed days at the same time every week. Between classes you practice with instant feedback, and your teacher corrects your homework. From €24 a month.'
    : `${c.name} classes are opening soon. Join the waitlist for free: we email you as soon as your language opens, and you pay nothing today. In the meantime, English and German classes are already open.`,
  heroCta: (c) => c.open ? 'Start now' : 'Join the waitlist',
  howTitle: (c) => `How the ${c.name} classes work`,
  liveDesc: (c) => `${c.name} video classes with your teacher and the same group, on fixed days at the same time every week.`,
  levelsTitle: (c) => `${c.name} levels from A1 to C2`,
  exams: {
    English: {
      title: 'English certificates',
      desc: 'The certificates most often asked for to study, work and get a visa. At Alimun you practice with tasks in the same format.',
      panels: [
        ['B2 First', 'B2 First from Cambridge English certifies the B2 level in four papers: Reading and Use of English, Writing, Listening and Speaking. It is widely asked for by universities, exchange programs and employers, and the certificate does not expire.'],
        ['C1 Advanced', 'C1 Advanced from Cambridge English certifies the C1 level with the same four papers, at a higher difficulty. Many universities and companies accept it as proof of advanced English for study and work.'],
        ['IELTS', 'IELTS tests Listening, Reading, Writing and Speaking with a score from 0 to 9. There is an Academic version for study and a General Training version for work and migration, and it is asked for in visa applications for countries such as the United Kingdom, Australia and Canada.'],
      ],
    },
    German: {
      title: 'German certificates',
      desc: 'The certificates most often asked for to live, study and work in German-speaking countries. At Alimun you practice with tasks in the same format.',
      panels: [
        ['Goethe B1', 'The Goethe-Zertifikat B1 from the Goethe-Institut tests reading, listening, writing and speaking, and the parts can also be taken as separate modules. It is one of the certificates most often asked for to live and work in Germany.'],
        ['Goethe B2', 'The Goethe-Zertifikat B2 certifies independent German in the same four skills. It is often asked for in skilled jobs and for entry to some degree programs.'],
        ['telc B1', 'The telc Deutsch B1, known as the Zertifikat Deutsch, certifies the B1 level and is recognized by the German authorities, for example in applications for citizenship.'],
      ],
    },
  },
  guides: {
    English: {
      title: 'Learning English online: what to know before you start',
      lead: 'English is **the language most often shared between people with different first languages**, at work, in study and when traveling. Choosing the right way to learn it is the difference between a course you drop halfway and one that gets you speaking.',
      rows: [
        ['Why English is worth it', [
          'Many companies work with clients and teams in other countries and use English to do it. Speaking it with confidence lets you **apply for international jobs** and work remotely for companies abroad.',
          'It matters for study too: it is the language of many master\u2019s and doctoral programs abroad and of most technical and scientific material. And it makes any trip easier.',
        ]],
        ['What learners find hard', [
          'English is often written differently from how it sounds, so the same letters can be read in several ways. Sounds such as th, the difference between long and short vowels, and phrasal verbs like give up or look after take practice whatever your first language.',
          'Speaking with a teacher and a group from the first class helps you **hear real English** and fix the habits that come from your own language before they set in.',
        ]],
        ['Group classes or private lessons', [
          'Private lessons give you full attention, but they cost more and get you used to one person. In a group you speak with different people, hear different accents, and **the cost of each class is shared**.',
          'At Alimun you choose between groups of different sizes, depending on how much attention you want, and a plan with one-to-one classes. In every case classes are on fixed days and times, so learning becomes a habit.',
        ]],
        ['How fast you improve, and what it depends on', [
          'There is no number of weeks that is right for everyone: progress depends on your starting level, how regular you are and how much you practice between classes. **A few regular hours every week** work better than long sessions far apart.',
          'That is why the live classes come with exercises with instant feedback, flashcards with the vocabulary from class and homework corrected by your teacher.',
        ]],
      ],
    },
    German: {
      title: 'Learning German online: what to know before you start',
      lead: 'German is **the most widely spoken native language in the European Union**, and the key to Germany, Austria and Switzerland. With a regular method, its reputation as a hard language fades quickly.',
      rows: [
        ['Why German is worth it for English speakers', [
          'German and English are both Germanic languages, so **thousands of everyday words look and sound alike**: Haus and house, Buch and book, Wasser and water, trinken and drink. That gives you a real head start on vocabulary.',
          'Germany is Europe’s largest economy, and German opens doors in engineering, research, the car industry and many international companies, as well as for study at German universities.',
        ]],
        ['What English speakers find hard', [
          'The main hurdles are **the four cases, the three genders and the word order**, with the verb at the end of a subordinate clause. Sounds like ü, ö and the ch in ich also take practice.',
          'In live classes you use the language from the first day and your teacher corrects the mistakes that keep coming back. Between classes you review with exercises and flashcards until the structures become automatic.',
        ]],
        ['How to know which level to start from', [
          'The Common European Framework of Reference divides language ability into six levels, from A1 to C2, and **German certificates follow the same scale**. Knowing your level saves you from repeating what you already know.',
          'The Alimun placement test places you between A1 and C1, and your group and exercises follow the result.',
        ]],
        ['German for work, study and moving', [
          'If your goal is a job or a move, find out early **which level and certificate are required**: they are usually stated in the job listing or by the institution you are applying to.',
          'At Alimun you can practice tasks in the format of Goethe B1, Goethe B2 and telc B1 and prepare steadily, on fixed days and times every week, before you leave.',
        ]],
      ],
    },
    Spanish: {
      title: 'Learning Spanish online: what to know before you start',
      lead: 'Spanish is **one of the most widely spoken languages in the world**, the official language of Spain and most of Latin America, and the second language of the United States.',
      rows: [
        ['Why Spanish is worth it for English speakers', [
          'Spanish is useful for travel, for work with Spain and Latin America, and in the US, where it is spoken by tens of millions of people. Many words come from Latin like their English counterparts, such as información and information.',
        ]],
        ['What English speakers find hard', [
          'Spanish spelling is close to how words sound, but the rolled r, the difference between ser and estar and the many verb forms need practice. With **regular conversation and careful correction** they soon feel natural.',
        ]],
        levelRow,
        waitlistRow('Spanish'),
      ],
    },
    French: {
      title: 'Learning French online: what to know before you start',
      lead: 'French is spoken in France, Belgium, Switzerland, Canada and much of Africa, and **English has borrowed thousands of words from it**.',
      rows: [
        ['Why French is worth it for English speakers', [
          'French is a working language of the European institutions and many international organizations, an official language of Canada, and useful for study, travel and work across the French-speaking world.',
        ]],
        ['What English speakers find hard', [
          'Nasal vowels and silent letters make listening hard at first, and **every noun has a gender** that changes the words around it. Listening and speaking regularly with a teacher is what helps most.',
        ]],
        levelRow,
        waitlistRow('French'),
      ],
    },
    Italian: {
      title: 'Learning Italian online: what to know before you start',
      lead: 'Italian is the language of a world center for design, fashion, food and art, and **its pronunciation is more regular than many people expect**.',
      rows: [
        ['Why Italian is worth it for English speakers', [
          'Italy is a major destination for study, tourism and business, and much of the vocabulary of music, food and art in English already comes from Italian. Knowing the language makes study, work and dealing with Italian companies easier.',
        ]],
        ['What English speakers find hard', [
          'Italian is written much as it is spoken, but double consonants, as in fatto and anno, change the meaning of words, and verb tenses take practice. **Practicing with a teacher and a group** sets the right pronunciation from the start.',
        ]],
        levelRow,
        waitlistRow('Italian'),
      ],
    },
    Portuguese: {
      title: 'Learning Portuguese online: what to know before you start',
      lead: 'Portuguese connects Portugal, Brazil and several African countries, and is spoken by **hundreds of millions of people**.',
      rows: [
        ['Why Portuguese is worth it for English speakers', [
          'Brazil is one of the largest economies in the world, and Portugal is a popular place to study, work and move to. Portuguese also connects with Angola and Mozambique.',
        ]],
        ['European and Brazilian Portuguese', [
          'The two share their grammar but differ in pronunciation, some vocabulary and some everyday usage. It is best to **choose from the start the variety closest to your goals**, knowing that speakers of one understand the other.',
        ]],
        levelRow,
        waitlistRow('Portuguese'),
      ],
    },
  },
  faq: (c) => {
    if (c.open) {
      return [
        [`How much does the online ${c.name} course at Alimun cost?`, 'Plans start at €24 a month with Community, in groups of about 35 people. Focused costs €59, Intensive €109 and private 1 on 1 classes €269 a month. With the yearly plan you pay for ten months instead of twelve.'],
        ['Are the classes live or recorded?', 'They are live video classes with a teacher and always the same group. Alimun does not record classes: after each class you get the session notes, the new vocabulary and your homework.'],
        ['On which days and at what times are the classes?', 'Each group meets on fixed days at the same time every week, with the same teacher and the same group. That way learning becomes part of your week.'],
        ['Do I need a certain level to start?', 'No. There are groups from A1, and a short test at the start places you between A1 and C1 so that you join the right group.'],
        ['Can I prepare for a certificate?', c.lang === 'German'
          ? 'Yes, you can practice tasks in the format of Goethe B1, Goethe B2 and telc B1. They are not official materials, and Alimun is not affiliated with the exam bodies.'
          : 'Yes, you can practice tasks in the format of B2 First, C1 Advanced and IELTS. They are not official materials, and Alimun is not affiliated with the exam bodies.'],
        ['Can I cancel at any time?', 'Yes, you can cancel at any time in the billing settings of your account, and you keep access until the end of the paid period, as set out in the Terms and Conditions.'],
        ['What do I need to attend the classes?', 'A computer or other device with a camera, a microphone and a stable connection. The classes run in the browser, with nothing to install.'],
      ];
    }
    return [
      [`When do the ${c.name} classes open?`, `There is no date yet. When you join the waitlist, you get an email as soon as the ${c.name} classes open.`],
      ['Is the waitlist free?', 'Yes. You join for free and pay nothing today.'],
      ['Can I start now with another language?', 'Yes, English and German classes are already open and you can join at any time.'],
      ['How do classes work at Alimun?', 'They are live video classes with a teacher and always the same group, on fixed days at the same time every week. Between classes you practice with instant feedback.'],
      ['What do I need to attend the classes?', 'A computer or other device with a camera, a microphone and a stable connection. The classes run in the browser, with nothing to install.'],
    ];
  },
  quiz: {
    title: (c) => `Find out your ${c.name} level`,
    intro: (c) => `Sentences to complete that get harder when you answer correctly and easier when you make a mistake, in about two minutes. At the end you see an estimate of your ${c.name} level.`,
    note: (c) => c.open
      ? 'This is only an estimate. After you sign up, the full test sets your level and places you in the right group.'
      : `This is only an estimate. When the ${c.name} classes open, the full test will set your level and the right group for you.`,
    cta: (c) => c.open ? 'Sign up and take the full test' : 'Join the waitlist',
    start: 'Start the quiz',
    prompt: 'Complete the sentence',
    again: 'Try again',
    right1: 'correct answer out of',
    rightN: 'correct answers out of',
    levels: LEVELS,
  },
  ui: {
    UI_QUIZ_BTN: 'Find out your level',
    UI_QUIZ_BTN_LONG: 'Find out your level in two minutes',
    UI_HOW_1_T: 'Placement test',
    UI_HOW_1_D: 'A short test sets your level, from A1 to C1, and places you in the right group for you.',
    UI_HOW_1_A: 'A student at a laptop taking notes',
    UI_HOW_2_T: 'Live classes',
    UI_HOW_2_A: 'A video class with two students on screen',
    UI_HOW_3_T: 'Corrected homework',
    UI_HOW_3_D: 'Your teacher sets the homework and returns it corrected: the grade, your strengths, what to improve and a corrected example.',
    UI_HOW_3_A: 'A teacher correcting homework at a computer',
    UI_HOW_4_T: 'Practice whenever you like',
    UI_HOW_4_D: 'Exercises at your level with instant feedback, flashcards with the vocabulary from class, and tasks in exam format.',
    UI_HOW_4_A: 'A student with headphones practicing in a notebook',
    UI_LV_INTRO: 'The Common European Framework of Reference for Languages describes six levels of language ability. At Alimun there are groups for each level, and the placement test places you between A1 and C1.',
    UI_LV_1_H: 'A1, beginner', UI_LV_1_P: LEVELS.A1,
    UI_LV_2_H: 'A2, elementary', UI_LV_2_P: LEVELS.A2,
    UI_LV_3_H: 'B1, intermediate', UI_LV_3_P: LEVELS.B1,
    UI_LV_4_H: 'B2, upper intermediate', UI_LV_4_P: LEVELS.B2,
    UI_LV_5_H: 'C1, advanced', UI_LV_5_P: LEVELS.C1,
    UI_LV_6_H: 'C2, proficient', UI_LV_6_P: LEVELS.C2,
    UI_EX_NOTE: 'These are not official exam materials. Alimun is not affiliated with the exam bodies.',
    UI_PL_TITLE: 'Plans and prices',
    UI_PL_DESC: 'Choose how much attention you want: the smaller the group, the more time you have to speak. With the yearly plan you pay for ten months instead of twelve.',
    UI_PL_MONTH: 'a month',
    UI_PL_1: 'Groups of about 35 people, live classes and access to the community.',
    UI_PL_2: 'Groups of about 17 people and weekly feedback on your work.',
    UI_PL_3: 'Groups of about 6 people, plus a one-to-one class every week.',
    UI_PL_4: 'Private classes with your teacher, based on three classes a week.',
    UI_PL_CTA: 'Choose your plan',
    UI_FAQ_TITLE: 'Frequently asked questions',
    UI_Q_CLOSE: 'Close',
  },
};
