// English (or French) for Canadian citizenship. Checked 10 Nov 2026 against IRCC on canada.ca: citizenship eligibility
// (page modified 2026-04-21: ages 18 to 54 on the day you sign, CLB/NCLC 4 speaking and listening, three ways IRCC
// assesses language, minors exempt), language proof start page and steps 2 to 5 (education proof, test results sent with
// the PR application, LINC/CLIC certificates and dates, provincial programs in BC, SK, MB, NS, ON and QC, accepted test
// scores for CELPIP-G / CELPIP-G LS, IELTS General Training, PTE Core and the French tests; pages modified 2025-09-11 and
// 2025-09-26), the citizenship test pages (study: 20 questions, 15 to pass, 45 minutes, Discover Canada; how it works:
// online with webcam, 30 days, 3 attempts; results: hearing of 30 to 90 minutes with up to 9 language questions, 6 to
// pass; all modified 2026-03-31), the Express Entry language testing page (CLB 4 rows of the three conversion tables,
// modified 2026-10-16) and the newcomer language classes page. CLB 4 can-do statements from the Centre for Canadian
// Language Benchmarks (language.ca, 2013 PDFs). CELPIP-General LS format and Canadian price from celpip.ca (read
// 10 Nov 2026). PTE Core start date (12 Feb 2024) from Pearson. No change to the CLB 4 rule or the age range was found
// for 2025-2026; the language proof pages were last revised in September 2025. Alimun is not affiliated with any test body.
export default {
  key: 'canada-citizenship-language',
  site: 'en',
  slug: 'canadian-citizenship-language-requirement',
  section: 'abroad',
  course: 'English',
  published: '2026-11-10',
  updated: '2026-11-10',
  title: 'The language requirement for Canadian citizenship: CLB 4 explained',
  metaTitle: 'Canadian citizenship language requirement: CLB 4 explained – Alimun',
  desc: 'Who must prove CLB 4 for Canadian citizenship, the CELPIP, IELTS and PTE Core scores that count, the other proofs IRCC accepts, and how the hearing tests you.',
  lead: "To become a Canadian citizen between the ages of 18 and 54, you have to show that you can speak and listen in English or French at **Canadian Language Benchmark 4**. It is a modest level, but the paperwork trips people up. This guide explains what CLB 4 means, which proofs IRCC accepts, the exact test scores that count, and how your English is checked again after you apply.",
  photo: 'canada-citizenship-language-ottawa-river-sunset',
  sticker: { draw: 'suitcase', say: 'CLB 4 in speaking and listening. That is the bar.' },
  facts: [
    { label: 'CLB 4', text: 'in speaking and listening, in English or French: the citizenship requirement' },
    { label: '18 to 54', text: 'the ages, on the day you sign your application, at which you must send language proof' },
    { n: 4, text: 'the CELPIP-General or CELPIP-General LS score needed in both listening and speaking' },
    { n: 9, unit: 'questions', text: 'the most a citizenship official can ask about language at a hearing, where you need 6 right' },
  ],
  blocks: [
    { take: { title: 'The short answer', text: "If you are **18 to 54 on the day you sign** your citizenship application, you must send proof that you speak and listen at CLB 4 or higher in English or French. Reading and writing are not part of it. IRCC accepts a diploma, transcript or certificate from a secondary or post-secondary program taught in English or French, a LINC or CLIC certificate at CLB 4, some provincial language program results, or an approved test: **CELPIP-General or CELPIP-General LS with 4** in listening and speaking, IELTS General Training with 4.5 in listening and 4.0 in speaking, or PTE Core with 28 in listening and 42 in speaking. Officials can still check your English in person later.", draw: 'owl' } },

    { h: 'What CLB means, and what CLB 4 looks like' },
    { p: "CLB stands for **Canadian Language Benchmarks**, Canada's national scale for describing the English of adult newcomers. It runs from CLB 1 to CLB 12 and measures each skill on its own: listening, speaking, reading and writing. Its French twin is the NCLC, the Niveaux de compétence linguistique canadiens. If you searched for “what is CLB”, the key point is this: **CLB is a scale, not a test**. You never sit a “CLB exam” for citizenship. You show a document or a test score, and IRCC reads it as a CLB level." },
    { p: "CLB 4 sits at the top of Stage I, the basic stage. The Centre for Canadian Language Benchmarks publishes plain-language “can do” statements for each level, and for CLB 4 they describe someone who can handle **short, everyday conversations on familiar topics**, especially when the other person speaks at a slow to normal pace and helps a little. In speaking, that means introducing two people to each other, chatting about the weather with a co-worker, asking for help in a store, asking for a day off, leaving a short phone message, giving directions to a familiar place in four or five steps, and describing your day at work in five to seven sentences." },
    { p: "In listening, CLB 4 means following a casual chat with a colleague about weekend plans, simple instructions from a doctor, the steps of a simple recipe, a short and clear weather report, or a classmate's story about going shopping. The Centre adds that these statements help learners understand the levels and are **not meant for assessment**, but they give a fair picture of what IRCC expects: you can live your daily life in English, not that you can write an essay in it." },
    { table: {
      head: ['Skill', 'CLB 4 in everyday terms'],
      rows: [
        ['Speaking', 'Short social conversations, polite requests, brief phone calls, simple directions, describing your day in a few sentences'],
        ['Listening', 'Small talk on familiar topics, 4- to 5-step instructions, short descriptions and stories, a simple commercial or weather report'],
        ['Reading', 'Not assessed for citizenship'],
        ['Writing', 'Not assessed for citizenship'],
      ],
      note: 'Based on the CLB 4 Can Do Statements of the Centre for Canadian Language Benchmarks (language.ca). Citizenship looks at speaking and listening only.',
    } },

    { h: 'Who has to prove it' },
    { p: "IRCC's eligibility page is precise. If you are **between 18 and 54 years old on the day you sign your application**, you must show an adequate knowledge of English or French, equal to CLB or NCLC 4 in speaking and listening. The age that counts is your age on the signature date, not the date IRCC receives the file or the date of your ceremony. If you are 55 or older on that day, you do not need to send language proof, and you do not take the citizenship test either." },
    { p: "Children under 18 are also exempt from the language requirement and the test, whether a parent applies for them alongside their own application or separately. Everyone else in the 18 to 54 range sends proof, and here the details matter: IRCC says it **returns the entire application** if the language proof is missing, cannot be read, or is in a language other than English or French without a certified translation. A returned application means starting over, so it pays to get this part right the first time." },
    { p: "One more point surprises people. Language proof is a condition, but it is not the only time your English counts. IRCC lists three ways it assesses you: by reviewing the proof you send, by noting **how well you speak when you talk to a citizenship official** at any point in the process, and, if necessary, by assessing your level in person with an official. We come back to that below." },

    { figure: { photo: 'canada-citizenship-language-chateau-laurier', alt: 'The turrets and copper roofs of the Château Laurier hotel in Ottawa at dusk', caption: 'Ottawa, where the federal government sits. The language rule for citizenship is the same in every province: CLB 4 in English or French.' } },

    { h: 'The proofs IRCC accepts' },
    { p: "IRCC organizes language proof as a short series of questions, and you only need **one document that fits**. You do not need a test if your education or a government language course already covers you. Here are the options in the order IRCC asks about them." },
    { h3: 'Secondary or post-secondary education in English or French' },
    { p: "If you completed or attended a secondary or post-secondary program taught in English or French, you can send a **diploma, transcript or certificate** from it. The program can be in Canada or abroad, so a high school diploma from an English-medium school in Lagos, Manila or Chennai counts, as does a degree from a Canadian college. If the document is in another language, it needs a certified English or French translation that shows the language of instruction was English or French. For many applicants this is the simplest route, and it costs nothing." },
    { h3: 'Test results you sent for permanent residence' },
    { p: "If you took an approved test when you applied for permanent residence, IRCC lets you **send a copy of those results, even if they have expired**, as long as they meet the citizenship scores. This is worth checking before you book anything: the Express Entry programs themselves ask for more than CLB 4 in listening and speaking, so results from that application usually clear the bar." },
    { h3: 'Government-funded language training' },
    { p: "If you completed **LINC** (Language Instruction for Newcomers to Canada) or its French counterpart CLIC with CLB 4 or higher in speaking and listening, that counts. For training completed on or after 1 November 2012, you send a copy of your certificate. For training between January 2008 and October 2012, you simply tick a box on the application and IRCC checks it electronically." },
    { p: "Some provincial programs count too. IRCC lists specific documents from **British Columbia, Saskatchewan, Manitoba, Nova Scotia, Ontario and Quebec**. In British Columbia it accepts only ELSA (English Language Services for Adults) results showing CLB 4 or higher. In Manitoba it takes the Manitoba CLB/NCLC Benchmark Report or a government EAL progress report at CLB 4, in Nova Scotia a PENS learner certificate, and in Ontario a certificate from an Adult Non-Credit Language Training program in ESL or FSL, dated December 2013 or later, at CLB 4 in speaking and listening. Saskatchewan and Quebec have their own documents and scales, so check the exact names on IRCC's page if you studied there." },
    { note: { title: 'A placement test is not proof', text: "When you join a government-funded class, you first take an assessment that places you at a level. That placement result is not the same as a certificate of completion. The Centre for Canadian Language Benchmarks says its **CLB Placement Test cannot be used for citizenship**. What counts is the certificate or report listed on IRCC's page.", draw: 'snail' } },
    { h3: 'An approved language test' },
    { p: "If none of the above applies, you take a test. For English, IRCC accepts three, and only in specific versions: **CELPIP-General or CELPIP-General LS**, **IELTS General Training** and **PTE Core**. IRCC states that it only accepts IELTS General Training for citizenship, so an IELTS Academic result will not count, however high it is. The scores you need are below." },
    { table: {
      head: ['Test', 'Listening', 'Speaking'],
      rows: [
        ['CELPIP-General or CELPIP-General LS', '4 or higher', '4 or higher'],
        ['IELTS General Training', '4.5 or higher', '4.0 or higher'],
        ['PTE Core', '28 or higher', '42 or higher'],
        ['TEF Canada, TCF Canada, DELF and other French tests', 'B1 or higher', 'B1 or higher'],
      ],
      note: 'Source: IRCC, citizenship language proof, step 5 (modified 2025-09-26). DALF results are accepted at any level. Older CELPIP and IELTS results from before 2014 and 2008 use different scales: check step 2 on IRCC’s page.',
    } },
    { p: "These numbers are not arbitrary. They are the CLB 4 rows of IRCC's own conversion tables. On the Express Entry tables, CLB 4 equals CELPIP 4 in each skill, IELTS General Training 4.5 in listening and 4.0 in speaking, and a **PTE Core range of 28 to 38 in listening and 42 to 50 in speaking**. So if you searched for “CLB 4 in CELPIP”, the answer is simply 4: from level 4 up, each CELPIP level matches the CLB level with the same number." },

    { figure: { photo: 'canada-citizenship-language-coffee-chat', alt: 'Three women holding takeaway coffee cups and laughing together', caption: 'Small talk with colleagues over coffee is exactly the kind of exchange the CLB 4 statements describe.' } },

    { h: 'Which test to take if you need one' },
    { p: "For citizenship, **CELPIP-General LS** is the test built for the job. It has only the two skills IRCC checks, Listening and Speaking, and CELPIP describes it as officially designated by IRCC for citizenship applications. The whole test takes about an hour and ten minutes in one sitting on a computer, with no separate speaking appointment. In Canada, celpip.ca lists it at **195 dollars plus taxes**, compared with 290 dollars plus taxes for the full four-skill CELPIP-General; prices outside Canada differ and change, so check the official site before you book." },
    { p: "The Listening component lasts 47 to 55 minutes and has six parts: problem solving, a daily life conversation, listening for information, a news item, a discussion and viewpoints. The Speaking component lasts 15 minutes and has eight short tasks, from giving advice and talking about a personal experience to describing a scene, making predictions, comparing and persuading, dealing with a difficult situation, expressing opinions and describing an unusual situation. You **speak into a headset**, not to a person. CELPIP notes that you also have to read the answer choices in Listening and the questions in Speaking, so you need some basic reading even though reading is not scored." },
    { p: "IELTS General Training and PTE Core both test all four skills, so you pay for and sit reading and writing too, even though only listening and speaking count here. They make sense if you already have a recent result, or if you need the test for something else as well. The main practical difference with IELTS is that speaking is **a live conversation with an examiner**. Our comparison of CELPIP and IELTS goes into the formats in detail." },
    { panels: [
      ['If you already have proof', "Check your old school diploma, your college transcript, your LINC certificate and the test results from your PR application. **Any one of them** may already meet the requirement, and it costs nothing to send."],
      ['If you need a test', "CELPIP-General LS covers exactly listening and speaking in about 70 minutes. Aim comfortably above 4 in both, because a bad day at level 3 in one skill means the result does not count."],
    ] },

    { cta: true },

    { h: 'Your English after you apply: the test and the hearing' },
    { p: "Sending proof is not the end of the language story. Adults aged 18 to 54 are invited to the **citizenship test** after they apply. It covers the rights and responsibilities of citizens and Canada's history, geography, economy, government, laws and symbols, based on the official study guide Discover Canada. According to IRCC's study page, it has 20 questions, lasts 45 minutes, and you need at least 15 correct answers to pass. You can take it in English or French." },
    { p: "Most applicants take it online, and IRCC monitors you through **your webcam**. You have 30 days to take it and up to three chances to pass. If you need an accommodation, it can be taken in person, on paper or orally. The test itself is a knowledge test, but it is in English or French, so reading the questions calmly and quickly is part of passing. If your English is close to CLB 4, the vocabulary of Discover Canada, with words like legislature, Confederation and constitutional monarchy, deserves extra study time." },
    { p: "If you do not pass after three tries, IRCC invites you to **a hearing with a citizenship official**. According to IRCC, it lasts 30 to 90 minutes, and the official may ask oral questions about your knowledge of Canada, your residence in Canada and your language skills. For language, the official can ask up to nine questions, and you need six right. If you fail the hearing, the application is refused, and you have to apply again and pay the fees again." },
    { p: "Officials can also judge your English **any time you speak to them**, for example at an interview to check your identity and documents. That is why a certificate alone is not a safe plan if your speaking has gone rusty. The certificate gets the file accepted; your real speaking and listening carry you through the hearing if you ever reach one." },

    { figure: { photo: 'canada-citizenship-language-conversation-window', alt: 'A man and a woman sitting at a window counter, talking face to face', caption: 'A hearing with a citizenship official is a spoken conversation: listening carefully and answering clearly matter as much as the score on paper.' } },

    { h: 'Has anything changed in 2025 or 2026?' },
    { p: "Not the core rule. As of November 2026, IRCC's eligibility page, revised in April 2026, still asks for **CLB or NCLC 4 in speaking and listening** for applicants aged 18 to 54, and the language proof pages, last revised in September 2025, list the same proofs and scores described here. PTE Core has been on the citizenship list since Pearson opened the test in February 2024, alongside CELPIP and IELTS General Training." },
    { p: "What does change is detail. IRCC's study page now gives the citizenship test as 45 minutes, while an older IRCC video says 30, and the official test pages were updated in March 2026. If you read an article that gives a different score, a different age range or an extra test, **check its date and compare it with canada.ca**. Our numbers come from the IRCC pages listed at the end, read on 10 November 2026." },

    { h: 'How to get to CLB 4 with room to spare' },
    { p: "Start by checking whether you already have proof. Look for any diploma or transcript from a program taught in English or French, any LINC or CLIC certificate at CLB 4, and the language results you sent with your PR application. If one of them fits, you may not need to study for a test at all, only to keep your speaking in shape for the citizenship test and any conversation with an official." },
    { p: "If you need a test, **aim above the line, not on it**. CLB 4 is a minimum in each skill, and one skill below it means the whole result does not count. Speaking is where most people lose points: they understand well but answer in a few words, or freeze when the timer starts. Practice talking for a full minute about your day, your job, a problem you solved or a place you know, with clear connecting words like first, then, because and so. For listening, get used to everyday Canadian conversations at natural speed, such as radio, podcasts and phone calls, not only slow learner audio." },
    { p: "Speaking with a real person is the fastest way to build that confidence. At Alimun you can take a free level test to see where your English stands, then join **live classes with a teacher in a small group**, where you speak in every lesson and get corrected. Whatever you choose, read IRCC's citizenship pages for your own case before you send the application, because the official checklist is the one that decides." },
  ],
  quiz: [
    { q: 'Which skills does Canadian citizenship assess for language?', options: ['Reading and writing', 'Speaking and listening', 'All four skills', 'Only speaking'], a: 1, why: 'IRCC asks for CLB or NCLC 4 in speaking and listening only.' },
    { q: 'Who must send language proof with a citizenship application?', options: ['Everyone aged 14 and over', 'Applicants aged 18 to 54 on the day they sign', 'Only people who immigrated through Express Entry', 'Applicants aged 18 to 65'], a: 1, why: 'The requirement applies to applicants aged 18 to 54 on the day they sign their application.' },
    { q: 'What CELPIP score equals CLB 4 for citizenship?', options: ['3', '4', '5', '7'], a: 1, why: 'IRCC asks for CELPIP-General or CELPIP-General LS 4 or higher in listening and speaking.' },
    { q: 'Which IELTS result does IRCC accept for citizenship?', options: ['IELTS Academic with 6.0', 'IELTS General Training with 4.5 listening and 4.0 speaking', 'Any IELTS with 4.0 overall', 'IELTS Academic with 4.5 listening'], a: 1, why: 'IRCC only accepts IELTS General Training, with at least 4.5 in listening and 4.0 in speaking.' },
    { q: 'What PTE Core scores do you need?', options: ['28 listening and 42 speaking', '42 listening and 28 speaking', '50 in both', '36 overall'], a: 0, why: 'IRCC lists PTE Core with at least 28 in listening and 42 in speaking.' },
    { q: 'Can a diploma from an English-medium school outside Canada count as proof?', options: ['No, only Canadian programs count', 'Yes, secondary or post-secondary programs in or outside Canada count', 'Only university degrees count', 'Only if it is less than two years old'], a: 1, why: 'IRCC accepts proof of a secondary or post-secondary program in English or French, in or outside Canada.' },
    { q: 'At a hearing with a citizenship official, how many language questions must you get right?', options: ['3 of 5', '6 of 9', '15 of 20', '10 of 12'], a: 1, why: 'The official can ask up to 9 language questions, and you need 6 right.' },
  ],
  faq: [
    ['What is CLB 4 in CELPIP?', 'A CELPIP score of 4. From level 4 upward, each CELPIP level equals the CLB level with the same number, so for citizenship you need 4 or higher in both listening and speaking on CELPIP-General or CELPIP-General LS.'],
    ['Do I need a language test if I studied in English?', 'Usually not. IRCC accepts a diploma, transcript or certificate from a secondary or post-secondary program taught in English or French, in Canada or abroad. If the document is in another language, add a certified translation that shows the language of instruction.'],
    ['Can I reuse the test I took for permanent residence?', 'Yes. IRCC accepts the results you submitted with your PR application, even if they have expired, as long as they meet the citizenship scores: for example IELTS General Training 4.5 in listening and 4.0 in speaking, or CELPIP 4 in both.'],
    ['I am 55. Do I need to prove my English?', 'No. If you are 55 or older on the day you sign your application, you do not send language proof and you do not take the citizenship test.'],
    ['Is IELTS Academic accepted for citizenship?', 'No. IRCC says it only accepts IELTS General Training for citizenship applications.'],
  ],
  related: ['clb-levels', 'celpip-or-ielts', 'ielts-band-scores', 'practise-speaking', 'cefr-english'],
  sources: [
    ['IRCC: Who can apply for citizenship (eligibility)', 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/become-canadian-citizen/eligibility.html'],
    ['IRCC: Language proof for citizenship', 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/become-canadian-citizen/eligibility/language-proof.html'],
    ['IRCC: Language proof, step 2 (test results from your PR application)', 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/become-canadian-citizen/eligibility/language-proof/step-2.html'],
    ['IRCC: Language proof, step 3 (LINC and CLIC)', 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/become-canadian-citizen/eligibility/language-proof/step-3.html'],
    ['IRCC: Language proof, step 4 (provincial programs)', 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/become-canadian-citizen/eligibility/language-proof/step-4.html'],
    ['IRCC: Language proof, step 5 (accepted tests and scores)', 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/become-canadian-citizen/eligibility/language-proof/step-5.html'],
    ['IRCC: Express Entry language testing and CLB conversion tables', 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-requirements/language-testing.html'],
    ['IRCC: Citizenship test, study for the test', 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/test/study.html'],
    ['IRCC: Citizenship test, how it works', 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/test/how-it-works.html'],
    ['IRCC: Citizenship test, results and next steps', 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/test/results.html'],
    ['CELPIP: CELPIP-General LS', 'https://www.celpip.ca/celpip-general-ls/'],
    ['Centre for Canadian Language Benchmarks: CLB 4 Speaking Can Do Statements', 'https://www.language.ca/wp-content/uploads/2000/01/CLB_Can_Do_Statements_S_04.pdf'],
    ['Centre for Canadian Language Benchmarks: CLB 4 Listening Can Do Statements', 'https://www.language.ca/wp-content/uploads/2000/01/CLB_Can_Do_Statements_L_04.pdf'],
    ['Pearson: bookings open for PTE Core', 'https://www.pearsonpte.com/news/pte-core-new-english-proficiency-test-for-canadian-migration/'],
  ],
};
