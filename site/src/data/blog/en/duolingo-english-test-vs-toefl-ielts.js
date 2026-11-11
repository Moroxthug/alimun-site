// Third design (docs/BLOG_PLAN.md). Facts checked 10 Nov 2026 against englishtest.duolingo.com (test taker overview:
// 1-hour process, 5 + 45 + 10 minutes, results in 2 days, test at home; Understand scoring: 10-160 scale, subscores,
// overall score comparison with CEFR, IELTS Academic and TOEFL iBT 0-120), the Duolingo help center (test structure,
// adaptive length, test rules and requirements, results within two days or 12 hours with Faster Results, two-year
// validity, three purchases in 30 days, 21-day credit, three attempts per credit, score comparison table notes saying
// the TOEFL data used the 0-120 scale and that mappings to the 1-6 scale are preliminary), the Duolingo blog post of
// 23 Feb 2026 on the TOEFL 1-6 scale, the DET Technical Manual (July 2026: approx. one hour, 24/7 availability, two-year
// validity, unlimited sharing, proctoring review within 48 hours) and the DET-IELTS SWRL concordance report DRR-24-05
// (Oct 2025). ETS: score scale update page (1-6 scale from 21 Jan 2026, CEFR mapping, 0-120 comparison, recommended
// requirements) and Getting your scores (3 days, valid 2 years). IELTS: Academic test format, scoring in detail
// (2-year recommendation), ways to take IELTS (results timing). UK: gov.uk SELT list (updated 2 Nov 2026, no DET) and
// Student visa knowledge of English. US: Study in the States (SEVP does not regulate English level; schools decide).
// University examples: Arizona State University and Michigan Technological University admissions pages, opened the
// same day. The DET price is not shown on the public site without an account, so no fee is quoted. ETS and IELTS do
// not appear in this article as sources of any DET comparison: all DET tables come from Duolingo's own research.
// Alimun is not affiliated with Duolingo, ETS or IELTS.
export default {
  key: 'duolingo-english-test',
  site: 'en',
  slug: 'duolingo-english-test-vs-toefl-ielts',
  section: 'exams',
  course: 'English',
  published: '2026-11-10',
  updated: '2026-11-10',
  title: 'Duolingo English Test vs TOEFL and IELTS for US universities',
  metaTitle: 'Duolingo English Test vs TOEFL vs IELTS for US college – Alimun',
  desc: 'How the Duolingo English Test compares with TOEFL iBT and IELTS Academic: format, the 10-160 scale, official score tables, results, validity and visas.',
  lead: 'The Duolingo English Test is taken at home in about an hour, and many US universities now list it next to TOEFL iBT and IELTS Academic. It works very differently from both, though, and **the score tables you see online are often out of date**. Here is how the three tests compare, using only what the test makers themselves publish.',
  photo: 'duolingo-english-test-library-students',
  sticker: { draw: 'owl', say: 'Check the school’s page before you book.' },
  facts: [
    { n: 160, text: 'the top Duolingo English Test score, on a scale that starts at 10' },
    { n: 1, unit: 'hour', text: 'roughly how long the whole test takes, including setup and the writing and speaking samples' },
    { n: 2, unit: 'days', text: 'the standard wait for Duolingo English Test results, according to Duolingo' },
    { label: 'Not a UK SELT', text: 'the Duolingo English Test is not on the UK Home Office list of approved English tests' },
  ],
  blocks: [
    { take: { title: 'The short answer', text: "If your US university lists the Duolingo English Test, it is the quickest and most flexible of the three to take: **online, at home, about an hour, results in about two days**. But it is not accepted everywhere, a school may accept it for some programs and not others, and it is not on government lists such as the UK’s approved tests for visas. Check the admissions page of your exact program first, then compare the minimum score on each test using the school’s own numbers.", draw: 'owl' } },

    { h: 'Three tests, one question' },
    { p: "If you want to study at a university in the United States and English is not your first language, you will usually have to prove your level. For a long time that meant TOEFL iBT, made by ETS, or IELTS Academic, owned by the British Council, IDP and Cambridge University Press & Assessment. The **Duolingo English Test**, often shortened to DET, is a newer option made by the company behind the language app. It launched in 2016 and has used its current 10 to 160 score scale since 2019." },
    { p: "All three tests measure the same four skills: reading, listening, writing and speaking. All three give an overall score and a score for each skill. And none of them decides whether you get in. **Each university sets its own minimum**, chooses which tests it accepts, and decides how old a score can be. That is the most important fact in this whole article, and it is why every section below ends with the same advice: look at the page of your own program." },
    { panels: [
      ['Duolingo English Test', "Taken online at home, on your own computer, at any time. The test is **adaptive**, lasts about an hour, and gives you a score from **10 to 160** with four skill subscores. Short recorded writing and speaking samples are sent to the schools that receive your result."],
      ['TOEFL iBT and IELTS Academic', "TOEFL iBT is taken on a computer at a center or at home and, since 21 January 2026, is scored from **1 to 6**. IELTS Academic is taken at a test center or online, lasts **2 hours 45 minutes**, and is scored in bands from **0 to 9**, with a live Speaking test."],
    ] },

    { h: 'What the Duolingo English Test looks like' },
    { p: "Duolingo describes the test as a one-hour process. The first **5 minutes** are setup and ID checks, then come **45 minutes** of scored questions, and the last **10 minutes** are a writing sample and a speaking sample. There are no appointments: according to its technical manual, the test is delivered over the internet without a test center and is available 24 hours a day, every day of the year." },
    { p: "The middle part is computer-adaptive. Some questions get harder or easier depending on how you answer, and the **number of questions varies**: the test gives you more or fewer according to how confident its scoring is in your level. Duolingo’s help center says some questions may seem much easier or harder than others and that this is normal. The questions come from a very large pool, so you are unlikely to see the same one twice." },
    { p: "The tasks are short and varied. You pick real English words from a list, fill in missing letters in a text, type what you hear, read and listen to longer passages with sets of questions, describe a photo in writing and aloud, and answer a series of spoken questions in a task called Interactive Speaking. At the end, you write for up to five minutes on a prompt and speak for up to three minutes on another. Those last two, the **Writing Sample and Speaking Sample**, are not just scored: they are shared with the institutions that receive your result, so an admissions officer can read and hear you directly." },
    { h3: 'Testing at home: the rules' },
    { p: "Because there is no test center, the rules are strict and worth reading before you pay. You need a computer whose camera, speakers and microphone work, a government-issued photo ID, and your phone, which you set up as a second camera to record your head, shoulders, screen and keyboard. You take the test in the Duolingo desktop app, alone in a room, with all other programs closed." },
    { figure: { photo: 'duolingo-english-test-phone-in-hand', alt: 'A person holding a smartphone over a table', caption: 'Your phone becomes a second camera during the test, recording you, your screen and your keyboard.' } },
    { p: "Duolingo’s rules also say you must **remove headphones or earbuds**, not look away from the screen except to type, not take notes, use only one keyboard, mouse and phone, and keep your ears, eyes and mouth visible. Predictive text and proofreading tools must be switched off, and VPNs and virtual machines are not allowed. Every test is reviewed afterward by human proctors who watch the recordings, and a broken rule can mean your result is not certified." },
    { p: "There are also limits on how often you can test. You may buy **up to three tests in any 30-day period**, a test credit is valid for 21 days from purchase, and each credit gives you three attempts to start, complete and upload the test. You must wait for your result before taking another one." },

    { h: 'How the three tests are scored' },
    { p: "The Duolingo English Test reports an overall score from 10 to 160, plus four subscores for **Speaking, Writing, Reading and Listening**, also from 10 to 160. Duolingo began reporting those four separately on 1 July 2024. The overall score is the average of the four, and the report adds four integrated subscores, each the average of two skills: Literacy, Comprehension, Conversation and Production. On Duolingo’s comparison tables, scores move in steps of five." },
    { p: "TOEFL iBT changed scale in January 2026. On the test given since **21 January 2026**, each section and the overall score run from **1 to 6 in half points**, and the overall score is the average of the four sections, rounded to the nearest half band. The old scale, a total from 0 to 120, still appears on score reports during a two-year transition, and on admissions pages for tests taken before that date. Our article on TOEFL and IELTS explains the change in detail." },
    { p: "IELTS gives a band from **0 to 9** for each skill and overall, in whole and half bands. Band 9 means full operational command of English, and band 0 is only given to someone who did not answer the questions. Our guide to IELTS band scores explains what each band means." },
    { h3: 'Where each test sits on the CEFR' },
    { p: "All three tests link their scores to the CEFR, the European framework of levels from A1 to C2, which makes it the simplest common ground. These are the levels each test maker publishes for its own scale." },
    { table: {
      head: ['CEFR level', 'Duolingo English Test', 'TOEFL iBT (from 21 Jan 2026)'],
      rows: [
        ['C2', '155–160', '6'],
        ['C1', '130–150', '5–5.5'],
        ['B2', '100–125', '4–4.5'],
        ['B1', '60–95', '3–3.5'],
        ['A1–A2', '10–55', '1–2.5'],
      ],
      note: 'From the Duolingo English Test scoring page and the ETS score scale update page, checked 10 November 2026. ETS separates A1 (1–1.5) and A2 (2–2.5); Duolingo groups them.',
    } },

    { h: 'What the official score tables say' },
    { p: "Many websites print charts that turn a Duolingo score into a TOEFL or IELTS score. Most of them were copied from somewhere else, and some do not match. The only tables that come from a test maker are the ones Duolingo publishes on its scoring page, based on its own research: candidates who took the Duolingo English Test also sent in their official TOEFL or IELTS results, and **Duolingo’s researchers built score comparisons** from those pairs. ETS and IELTS publish a comparison between their own two tests, but the tables below are Duolingo’s." },
    { h3: 'Duolingo English Test and IELTS Academic' },
    { table: {
      head: ['Duolingo English Test overall', 'IELTS Academic overall'],
      rows: [
        ['160', '8.5–9'],
        ['150–155', '8'],
        ['140–145', '7.5'],
        ['130–135', '7'],
        ['120–125', '6.5'],
        ['105–115', '6'],
        ['95–100', '5.5'],
        ['80–90', '5'],
        ['65–75', '4.5'],
        ['60', '4'],
        ['10–55', '0–4'],
      ],
      note: 'Source: Duolingo English Test, Understand scoring, overall score comparison, checked 10 November 2026. Duolingo also publishes separate tables for each skill.',
    } },
    { p: "Duolingo checked this table again with newer data in a 2025 report on IELTS. Only three score points came out half a band different, and Duolingo decided **not to change the published overall table**. The same report gives a fair warning: few people now take both tests, the ones who do may not be typical, and the comparison is less stable at the very top and bottom of the scale." },
    { h3: 'Duolingo English Test and TOEFL iBT' },
    { p: "Duolingo’s TOEFL table is still built on the **old 0 to 120 TOEFL scale**, because all the TOEFL reports in its data used that scale. Here are some of its rows." },
    { table: {
      head: ['Duolingo English Test overall', 'TOEFL iBT total (old 0–120 scale)'],
      rows: [
        ['160', '120'],
        ['150', '117–118'],
        ['140', '109–112'],
        ['130', '98–103'],
        ['120', '87–92'],
        ['110', '76–81'],
        ['100', '65–69'],
        ['90', '53–58'],
        ['80', '41–46'],
      ],
      note: 'Source: Duolingo English Test, Understand scoring, overall score comparison (every 5-point step is listed there). Checked 10 November 2026.',
    } },
    { p: "What about the new 1 to 6 TOEFL scale? In February 2026 Duolingo said that its existing TOEFL table remains its recommended reference for now, that the meaning of DET scores has not changed, and that schools can reach the new scale in two steps: first from the DET score to the old TOEFL total, then from the old total to the 1 to 6 scale using ETS’s own table. Its help center adds that any such comparison **should be considered preliminary** until it has enough reports on the new scale." },
    { p: "If you do those two steps for a few common scores, using ETS’s comparison of the old and new scales, you get the result below. Treat it as a rough guide only, and use your school’s own numbers whenever it gives them." },
    { table: {
      head: ['Duolingo English Test', 'Old TOEFL total (Duolingo)', 'New TOEFL band that contains it (ETS)'],
      rows: [
        ['140', '109–112', '5.5 (107–113)'],
        ['130', '98–103', '5 (95–106)'],
        ['120', '87–92', '4.5 (86–94)'],
        ['110', '76–81', '4 (72–85)'],
        ['100', '65–69', '3.5 (58–71)'],
      ],
      note: 'Two published tables read one after the other, not an official Duolingo or ETS concordance with the 1–6 scale. Duolingo calls such mappings preliminary.',
    } },

    { cta: true },

    { h: 'Length, results and validity side by side' },
    { p: "On the practical side, the differences are big. The Duolingo English Test takes about an hour, TOEFL iBT about two hours, and IELTS Academic **2 hours 45 minutes**, with a Speaking test of 11 to 14 minutes. Duolingo says results arrive **within two days**, or within 12 hours if you pay for its Faster Results option. TOEFL scores appear in your ETS account three days after the test. IELTS results on computer at a test center come one to five days after the test, and IELTS Online results six to eight days after." },
    { p: "All three work on a two-year window. Duolingo says its results are **valid for two years**, after which you can no longer share the result or view the certificate, and schools lose access to it as well. ETS says TOEFL scores are valid for two years. IELTS recommends that results be considered valid for two years, and lets each organization decide whether to accept older ones. In practice, US universities often count those two years up to your start date, so do not test too early." },
    { table: {
      head: ['', 'Duolingo English Test', 'TOEFL iBT', 'IELTS Academic'],
      rows: [
        ['Where', 'Online, at home, in a desktop app', 'Test center or at home (Home Edition)', 'Test center, or online'],
        ['Length', 'About 1 hour', 'About 2 hours', '2 hours 45 minutes'],
        ['Design', 'Adaptive: the number of questions varies', 'Four sections on a computer', 'Four sections; Speaking with an examiner'],
        ['Speaking', 'Recorded; a Speaking Sample is shared with schools', 'Recorded on the computer', 'Live with an examiner, 11–14 minutes'],
        ['Scale', '10–160, with four skill subscores', '1–6 in half points (0–120 before 21 Jan 2026)', '0–9 in whole and half bands'],
        ['Results', 'Within 2 days (12 hours with Faster Results)', '3 days after the test', '1–5 days on computer at a center; 6–8 days online'],
        ['Validity', '2 years', '2 years', 'Recommended 2 years'],
      ],
      note: 'From englishtest.duolingo.com, ets.org and ielts.org, checked 10 November 2026. Formats, prices and rules change: check the official pages before you book.',
    } },
    { p: "We do not quote prices here. Fees change and can depend on the country, and Duolingo shows its price when you buy a test in your account. Check the current fee on each test maker’s official site before you decide." },

    { h: 'How US universities treat the Duolingo English Test' },
    { p: "There is no national US rule. **Each college, and often each program, decides** whether it accepts the Duolingo English Test and what score it wants. Two real admissions pages, opened in November 2026, show how much this can vary." },
    { p: "**Arizona State University** lists the Duolingo English Test for undergraduate admission with a minimum score of **95** for its general requirement programs, and says some programs ask for more. On the same page, its TOEFL iBT minimum is 3.5 overall and in each section for tests taken on or after 21 January 2026, and 61 for older tests, and its IELTS Academic minimum is an overall 6.0. ASU says the Duolingo test can be taken from any computer with a camera, audio and a reliable internet connection, and that any test score must be no more than two years old at your start date." },
    { p: "**Michigan Technological University** asks for a Duolingo English Test score of **120** and states that Duolingo is accepted **only for international undergraduate admission**. Its TOEFL iBT minimum is 4.5 for tests taken from 21 January 2026, or 79 for older tests, and its IELTS minimum is 6.5 overall with at least 6.0 in speaking and writing. Scores must be from within two years of your intended enrollment." },
    { figure: { photo: 'duolingo-english-test-laptop-notebook', alt: 'A laptop with a notebook and a smartphone stacked on a wooden table', caption: 'A laptop, a phone and a quiet room: the whole Duolingo test setup, if your school accepts it.' } },
    { p: "Two lessons come out of those examples. First, a school that accepts the Duolingo test for undergraduates may not accept it for graduate programs, so read the page for your level of study. Second, **schools set their own equivalents**: the pairs of scores they choose do not always match any published table. If you compare ASU’s minimums with Duolingo’s IELTS table, a 95 sits next to IELTS 5.5, while ASU asks for 6.0 on IELTS. That is the school’s choice to make, and it is why you should never work out your target from a chart when the school gives you a number." },
    { p: "Look for four things on the admissions page of your program: whether the Duolingo English Test is listed at all, the overall minimum and any subscore minimums, whether the rule is different for graduate study, and how recent the score must be. If the page says nothing about the test, ask the admissions office in writing before you buy it." },

    { h: 'Visas: where the Duolingo English Test does not count' },
    { p: "A university accepting a test for admission is not the same as a government accepting it for a visa. When a government publishes its own list of approved tests, only those tests count, and the Duolingo English Test is not always on them." },
    { p: "The clearest example is the UK. The Home Office keeps a list of approved **Secure English Language Tests (SELT)** for visa applications, and only the tests and levels it names are accepted. On the version updated 2 November 2026, the list includes IELTS for UKVI, IELTS Life Skills, LanguageCert SELT tests, PTE Academic UKVI, PTE Home, Skills for English UKVI and Trinity College London’s tests. **The Duolingo English Test is not on it**, and neither are standard TOEFL iBT or IELTS Academic. For a UK Student visa at degree level, the rules also let the university assess your English itself, as long as it is equivalent to CEFR B2, so a UK university may accept other evidence for its own students. Ask the university what it will accept for the visa, not only for admission." },
    { p: "The US works differently. Study in the States, the US government’s student information site, says its Student and Exchange Visitor Program **does not regulate how well an international student must speak English**: each school sets its own requirement, and the school’s form for your visa application reflects its admission policy. So for a US student visa, the question is still whether your school accepts the test. For any other country, or for immigration rather than study, check the government’s own official list before booking anything." },

    { h: 'How to choose' },
    { p: "Start with the requirement. If your program lists only TOEFL and IELTS, the choice is between those two. If it lists the Duolingo English Test as well, compare the three minimums the school gives you and think about which one feels closest to your level." },
    { quote: 'Start from your program’s page, not from a score chart.' },
    { p: "Then think about the format. The Duolingo test suits you if you want to test at home without booking a date, like short tasks that change quickly, and have a quiet room and a computer that meets the rules. It may not suit you if you get nervous being recorded alone, if your internet connection is unreliable, or if you need to send the same score to a school that does not accept it. TOEFL iBT is longer and also entirely on screen. IELTS Academic keeps a fixed format and a **live conversation with an examiner**, which some people find easier than talking to a computer." },
    { p: "Think, too, about where else you may apply. If one of your schools does not list the Duolingo test, you may end up taking TOEFL or IELTS anyway. Taking one test that every school on your list accepts can be simpler than taking two." },

    { h: 'How to prepare' },
    { p: "Whatever the test, the real work is your English. The Duolingo examples above range from 95 to 120, which Duolingo places at **B1 and B2**, and many programs ask for more. Find your target on the CEFR first, then work on the skills that hold you back. Exam technique turns your level into a score, but it cannot replace the level itself." },
    { p: "For the Duolingo test, get used to the short task types and to typing quickly and accurately,. Practice speaking aloud on your own for a minute or more without stopping, since nobody is there to help the conversation along. Duolingo offers a free practice test that you can take as often as you like, which is the best way to see the tasks and the rules before you pay. Before the real test, set up your room, your computer and your phone camera exactly as you will on the day." },
    { p: "Remember that your Writing Sample and Speaking Sample go to the schools with your score. Write in clear paragraphs that answer the question, and speak in full, organized answers. Those samples are read and heard by real admissions staff, so they are worth as much care as the scored part." },
    { note: { title: 'Preparing with Alimun', text: "Alimun runs live English classes with a teacher in a small group, where you practice speaking, writing and listening every week, and a level test that places you on the CEFR scale so you know how far you are from B2 or C1. Alimun is not affiliated with Duolingo, ETS or IELTS.", draw: 'teacup' } },

    { h: 'The verdict' },
    { p: "The Duolingo English Test is the shortest and most flexible of the three: online, at home, about an hour, with results in about two days and a 10 to 160 scale tied to the CEFR. TOEFL iBT and IELTS Academic take longer and, in the case of IELTS, include a live Speaking test, but they are accepted more widely, including for some visa routes where the Duolingo test is not." },
    { p: "If every program on your list accepts the Duolingo test, **it is a practical choice**. If even one does not, or if you will also need a test for a visa, TOEFL or IELTS may save you a second exam. In every case, use only the minimums your school publishes and the comparison tables the test makers publish, and take the test close enough to your start date that the score is still valid when you enroll." },
  ],
  quiz: [
    { q: 'What is the score scale of the Duolingo English Test?', options: ['0 to 9', '1 to 6', '10 to 160', '0 to 120'], a: 2, why: 'Duolingo scores run from 10 to 160, for the overall score and each subscore.' },
    { q: 'How long does the whole Duolingo English Test take, according to Duolingo?', options: ['About 30 minutes', 'About one hour', 'About two hours', '2 hours 45 minutes'], a: 1, why: 'Duolingo describes a one-hour process: 5 minutes of setup, 45 minutes of scored questions and 10 minutes of samples.' },
    { q: 'Which of these is not allowed during the Duolingo English Test?', options: ['A government photo ID', 'Your phone as a second camera', 'Headphones or earbuds', 'The Duolingo desktop app'], a: 2, why: 'The rules say to remove headphones or earbuds; the phone is used as a second camera.' },
    { q: 'On Duolingo’s official table, which IELTS Academic band sits next to a Duolingo score of 120?', options: ['5.5', '6', '6.5', '7.5'], a: 2, why: 'Duolingo places 120 to 125 next to IELTS 6.5.' },
    { q: 'Which TOEFL scale is Duolingo’s TOEFL comparison table built on?', options: ['The new 1 to 6 scale', 'The old 0 to 120 scale', 'The IELTS band scale', 'The CEFR only'], a: 1, why: 'All the TOEFL reports in Duolingo’s data used the 0 to 120 scale, so mappings to 1 to 6 are preliminary.' },
    { q: 'How long are Duolingo English Test results valid?', options: ['Six months', 'One year', 'Two years', 'They never expire'], a: 2, why: 'Duolingo says results are valid for two years; after that they can no longer be shared.' },
    { q: 'Is the Duolingo English Test on the UK list of Secure English Language Tests (SELT)?', options: ['Yes, for all visas', 'Yes, but only for students', 'No', 'Only in the US'], a: 2, why: 'The Home Office SELT list, updated 2 November 2026, does not include the Duolingo English Test.' },
    { q: 'Who decides whether a US university accepts the Duolingo English Test?', options: ['The US government', 'Duolingo', 'Each university, often program by program', 'ETS'], a: 2, why: 'Each school sets its own requirement; Michigan Tech, for example, accepts it only for undergraduate admission.' },
  ],
  faq: [
    ['Do US universities accept the Duolingo English Test?', 'Many do, but not all, and acceptance can differ between programs at the same school. Michigan Technological University, for example, accepts it only for international undergraduate admission. Check the admissions page of your exact program.'],
    ['What Duolingo score equals IELTS 6.5 or TOEFL 90?', 'On Duolingo’s own tables, 120 to 125 sits next to IELTS Academic 6.5, and 120 sits next to an old TOEFL total of 87 to 92. Those are Duolingo’s comparisons; your school may set different pairs, so use its numbers when it gives them.'],
    ['How does the Duolingo English Test compare with the new TOEFL 1 to 6 scale?', 'Duolingo has not yet published a table for the new scale. It suggests going from the DET score to the old 0 to 120 TOEFL total, then to the 1 to 6 scale using ETS’s table, and calls the result preliminary.'],
    ['Can I use the Duolingo English Test for a visa?', 'It depends on the country. It is not on the UK list of approved Secure English Language Tests. For a US student visa, the US government does not set an English test; your school’s requirement applies. Always check the official government list for your visa.'],
    ['How long does it take to get Duolingo results?', 'Duolingo says results arrive within two days of completing the test, or within 12 hours if you buy its Faster Results option. Every test is reviewed by human proctors before the result is certified.'],
  ],
  related: ['toefl-or-ielts', 'ielts-band-scores', 'ielts-or-cambridge', 'cefr-english'],
  sources: [
    ['Duolingo English Test for test takers', 'https://englishtest.duolingo.com/applicants'],
    ['Understand scoring, Duolingo English Test', 'https://englishtest.duolingo.com/scores'],
    ['Test structure (Duolingo help center)', 'https://testcenter.zendesk.com/hc/en-us/articles/39104891663245-Test-Structure'],
    ['Test policies, rules and requirements (Duolingo help center)', 'https://testcenter.zendesk.com/hc/en-us/articles/360052828331-Test-Policies-Rules-and-Requirements'],
    ['How long does it take to receive my results? (Duolingo help center)', 'https://testcenter.zendesk.com/hc/en-us/articles/360010859652-How-long-does-it-take-to-receive-my-results'],
    ['How long are my results valid? (Duolingo help center)', 'https://testcenter.zendesk.com/hc/en-us/articles/360011075571-How-long-are-my-Duolingo-English-Test-results-valid'],
    ['Additional details for score comparison tables (Duolingo help center)', 'https://testcenter.zendesk.com/hc/en-us/articles/30984205172109-Additional-Details-for-Score-Comparison-Tables'],
    ['DET and the TOEFL 1–6 scale (Duolingo blog, February 2026)', 'https://blog.englishtest.duolingo.com/det-toefl-concordance-toefl-new-1-6-scale'],
    ['Duolingo English Test Technical Manual, July 2026', 'https://duolingo-papers.s3.us-east-1.amazonaws.com/other/technical_manual/DET_technical_manual_2026_07.pdf'],
    ['A concordance study between the DET and IELTS Academic SWRL subscores (Duolingo, October 2025)', 'https://duolingo-papers.s3.us-east-1.amazonaws.com/other/det-concordance-report-ielts-2025-10.pdf'],
    ['TOEFL iBT score scale update (ETS)', 'https://www.ets.org/toefl/institutions/ibt/score-scale-update.html'],
    ['TOEFL iBT test content and structure (ETS)', 'https://www.in.ets.org/toefl/institutions/ibt/about/content-structure.html'],
    ['Getting your TOEFL iBT scores (ETS)', 'https://www.ets.org/toefl/test-takers/ibt/scores/get-scores.html'],
    ['IELTS Academic test format', 'https://ielts.org/take-a-test/test-types/ielts-academic-test'],
    ['IELTS scoring in detail', 'https://ielts.org/take-a-test/your-results/ielts-scoring-in-detail'],
    ['Ways to take IELTS', 'https://www.ielts.org/take-a-test/why-choose-ielts/ways-to-take-ielts'],
    ['Prove your English with a Secure English Language Test (GOV.UK)', 'https://www.gov.uk/guidance/prove-your-english-language-abilities-with-a-secure-english-language-test-selt'],
    ['Student visa: knowledge of English (GOV.UK)', 'https://www.gov.uk/student-visa/knowledge-of-english'],
    ['Do I need to pass an English language test to study in the United States? (Study in the States)', 'https://studyinthestates.dhs.gov/2016/01/do-i-need-to-pass-an-english-language-test-to-study-in-the-united-states'],
    ['English proficiency, Arizona State University', 'https://admission.asu.edu/international/undergrad/english-proficiency'],
    ['English proficiency requirements, Michigan Technological University', 'https://www.mtu.edu/admissions/apply/international/english/'],
  ],
};
