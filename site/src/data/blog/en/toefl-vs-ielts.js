// Third design (docs/BLOG_PLAN.md). Facts checked 4 Nov 2026 against ets.org (updated TOEFL iBT content and
// structure from 21 January 2026, the 1-6 score scale, the 0-120 comparison table, the ETS-recommended 1-6
// requirements, dual score reporting until January 2028, score timing and 2-year validity, Home Edition equipment
// rules) and the ETS report "A banded score scale for the TOEFL iBT test" (April 2026: CEFR mapping, overall score
// rounding, and the IELTS comparison table B1, which ETS rounds up on purpose). IELTS facts from ielts.org
// (Academic format and timing, scoring in detail, ways to take IELTS, IELTS Online). University examples from the
// admissions pages of Arizona State University and Michigan Technological University, opened the same day.
// Section-level 0-30 conversions for Writing and Speaking are left out because ETS pages print those two columns
// in different orders. Test fees vary by country and are not quoted. Alimun is not affiliated with ETS or IELTS.
export default {
  key: 'toefl-or-ielts',
  site: 'en',
  slug: 'toefl-vs-ielts',
  section: 'exams',
  course: 'English',
  published: '2026-11-04',
  updated: '2026-11-04',
  title: 'TOEFL vs IELTS: which test should you take for a US university?',
  metaTitle: 'TOEFL vs IELTS for US universities: the 2026 guide – Alimun',
  desc: 'TOEFL iBT or IELTS Academic for a US university? The 2026 TOEFL 1-6 scale, IELTS bands, how scores compare, at-home testing and how to choose.',
  lead: 'Most US universities accept both TOEFL iBT and IELTS Academic, so the choice is usually yours. The two tests feel very different on the day, though, and **TOEFL changed its format and its score scale in January 2026**. Here is what each test looks like now and how to pick the one that suits you.',
  photo: 'toefl-or-ielts-students-campus',
  sticker: { draw: 'suitcase', say: 'Same goal, two very different test days.' },
  facts: [
    { n: 6, text: 'the top score on the TOEFL iBT scale used since 21 January 2026, which starts at 1 and moves in half points' },
    { n: 9, text: 'the top IELTS band, on a scale from 0 to 9 in whole and half bands' },
    { n: 2, unit: 'years', text: 'how long TOEFL iBT scores are valid, and how long IELTS recommends results are treated as valid' },
    { label: 'Your school decides', text: 'neither ETS nor IELTS sets a pass mark: every university sets its own minimum' },
  ],
  blocks: [
    { take: { title: 'The short answer', text: "If your US university accepts both tests, choose the one whose format fits you. **TOEFL iBT is fully on a computer, shorter on paper, and adapts to your level**, with a Speaking section you record into a microphone. **IELTS Academic has a live Speaking test with an examiner** and a fixed set of questions. Check the minimum score your program asks for on each test, then book the one you can reach more comfortably.", draw: 'parrot' } },

    { h: 'Two tests, one purpose' },
    { p: "TOEFL iBT is made by ETS, and it was built for students who want to study at universities that teach in English. IELTS is owned jointly by the British Council, IDP and Cambridge University Press & Assessment, and its **Academic** version is the one aimed at university study. If you are applying to a US college or graduate school, those are the two tests you are comparing; IELTS General Training is a different test, and Arizona State University, for example, states plainly that it does not accept it." },
    { p: "Both tests check the same four skills: reading, listening, writing and speaking. Both give you a score for each skill and an overall score. And both leave the decision to the school: ETS says there are **no passing or failing scores set by the TOEFL Program**, and each institution sets its own requirements. IELTS works the same way. So the real question is not which test is harder, but which one your school accepts, what score it wants, and which format lets you show your English best." },
    { panels: [
      ['TOEFL iBT', "Taken on a computer, at a test center or at home with the Home Edition. Since 21 January 2026 the test is **adaptive**: it adjusts to your level as you go. You get a score from **1 to 6** in half points for each of the four sections and overall, plus your CEFR level. Speaking is recorded and scored centrally by ETS."],
      ['IELTS Academic', "Taken on a computer at a test center or, in some countries, online from home. The format is fixed: everyone answers the same kind of test in **2 hours and 45 minutes**. You get a band from **0 to 9** in whole and half bands for each skill and overall. Speaking is a live conversation with a trained examiner."],
    ] },

    { h: 'What changed in TOEFL in 2026' },
    { p: "If you studied for TOEFL a year or two ago, or a friend gave you an old prep book, be careful: much of it is out of date. On **21 January 2026** ETS introduced an updated TOEFL iBT with new task types, a multistage adaptive design and a new score scale. ETS says the update keeps the purpose of the test, academic English for university study, while giving test takers more and shorter tasks to show what they can do. One task, Write for an Academic Discussion, stayed the same." },
    { p: "The old test had four sections scored from 0 to 30 each, added up to a total from 0 to 120. The new test reports **four section scores and an overall score, all on a scale from 1 to 6** in half-point steps. The overall score is no longer a sum: it is the average of the four sections, rounded to the nearest half band. ETS gives the example that an average of 5.25 becomes an overall 5.5, while an average of 5.125 becomes 5." },
    { p: "The new scale was built around the CEFR, the European framework of levels from A1 to C2, and the same number means the same level in every section. A **4 or 4.5 is B2**, a **5 or 5.5 is C1** and a **6 is C2**; below that, 3 to 3.5 is B1, 2 to 2.5 is A2, and 1 to 1.5 is A1. If you want to know what those levels mean in practice, our guide to the CEFR levels explains them one by one." },
    { p: "There is a transition period. ETS says that between January 2026 and January 2028 every score report shows three things: your CEFR level, your 1 to 6 scores, and a comparable overall score on the old 0 to 120 scale. That is why you will still see both scales on university websites for a while, and why many admissions pages now list one minimum for tests taken before 21 January 2026 and another for tests taken on or after that date." },

    { h: 'What each test looks like on the day' },
    { h3: 'TOEFL iBT since January 2026' },
    { p: "The updated TOEFL iBT runs in four sections, always in this order: Reading, Listening, Writing, Speaking. ETS lists the base time as about 90 minutes but tells you to **allow about two hours**, because the test adapts to you and the time and number of questions can vary. Directions are not included in that time." },
    { table: {
      head: ['Section', 'About', 'Task types (ETS names)'],
      rows: [
        ['Reading', '30 minutes', 'Complete the Words, Read in Daily Life, Read an Academic Passage'],
        ['Listening', '29 minutes', 'Listen and Choose a Response, Listen to a Conversation, Listen to an Announcement, Listen to an Academic Talk'],
        ['Writing', '23 minutes', 'Build a Sentence, Write an Email, Write for an Academic Discussion'],
        ['Speaking', '8 minutes', 'Listen and Repeat, Take an Interview'],
      ],
      note: 'Base times from ETS for the test given from 21 January 2026. Because the test is adaptive, your times and number of questions may differ. Check ets.org before you book.',
    } },
    { p: "Two things stand out. First, the test now mixes academic material with everyday English: reading a notice or a message, writing an email, answering a short question you hear. Second, **the Speaking section is short and recorded**. You speak into a microphone, not to a person, and ETS says its tests are scored by a central scoring team, never at the test center. Some people love that, because no one is watching them; others find it strange to talk to a screen." },
    { h3: 'IELTS Academic' },
    { p: "IELTS Academic lasts **2 hours and 45 minutes** in total and the format is the same at a test center and online. Listening takes about 30 minutes, Reading 60 minutes and Writing 60 minutes. Writing has two tasks: describing a graph, table, chart or diagram in at least 150 words, and an essay of at least 250 words. The Speaking test lasts **11 to 14 minutes** and is a real conversation with a trained examiner, face to face at a test center or by video call if you take IELTS Online." },
    { figure: { photo: 'toefl-or-ielts-microphone', alt: 'A studio microphone on a desk', caption: 'TOEFL Speaking is recorded through a microphone; IELTS Speaking is a conversation with an examiner.' } },
    { p: "IELTS is not adaptive. Every candidate takes the same kind of test, whatever their level, so the questions do not get easier or harder depending on your answers. If you like to know exactly what is coming, that predictability can help. Our article on IELTS band scores explains what each band means and how the overall band is worked out." },

    { h: 'How the scores work' },
    { p: "On TOEFL, each of Reading, Listening, Writing and Speaking gets a score from 1 to 6, and the overall score is their average rounded to the nearest half band. On IELTS, each skill gets a band from 0 to 9 in whole or half bands, and the overall band is the average of the four, also rounded. IELTS gives the rule in detail: **an average ending in .25 rounds up to the next half band, and one ending in .75 rounds up to the next whole band**. So 6.25 becomes 6.5, while 6.125 stays at 6." },
    { p: "Many schools ask for more than an overall score. They may want a minimum in every section, or a higher minimum in speaking and writing. Read the exact wording on the admissions page, because an overall 6.5 is a much easier target than 6.5 in each skill." },
    { h3: 'Reading old TOEFL scores on the new scale' },
    { p: "Because so many requirements were written for the old 0 to 120 total, ETS published a table that places the old totals on the new scale. The lowest old total for each new overall score is shown below, together with the levels ETS gives each band." },
    { table: {
      head: ['TOEFL overall (1–6)', 'Old total (0–120) from', 'CEFR level'],
      rows: [
        ['6', '114', 'C2'],
        ['5.5', '107', 'C1'],
        ['5', '95', 'C1'],
        ['4.5', '86', 'B2'],
        ['4', '72', 'B2'],
        ['3.5', '58', 'B1'],
        ['3', '44', 'B1'],
      ],
      note: 'From the ETS score comparison for tests taken before 21 January 2026 and the ETS banded score scale report (April 2026).',
    } },
    { p: "ETS also told universities which new requirement it recommends in place of the most common old ones: **a 100 becomes 5, a 90 becomes 4.5, an 80 becomes 4 and a 70 becomes 3.5**. Schools are free to choose differently, and some do, but if you see one of those pairs on an admissions page, this is where it comes from." },

    { cta: true },

    { h: 'How TOEFL and IELTS scores line up' },
    { p: "Comparing the two tests is where most online advice goes wrong, because many charts are still based on the old TOEFL scale. In 2025 ETS and the three IELTS partners ran a joint score concordance study, and ETS then used it to build a comparison table between IELTS Academic bands and the new TOEFL 1 to 6 scale. Here are the overall scores from that ETS table." },
    { table: {
      head: ['IELTS Academic overall', 'TOEFL iBT overall (1–6)'],
      rows: [
        ['9', '6'],
        ['8.5', '6'],
        ['8', '6'],
        ['7.5', '5.5'],
        ['7', '5'],
        ['6.5', '4.5'],
        ['6', '4'],
        ['5.5', '3.5'],
        ['5', '2.5'],
      ],
      note: 'Source: ETS, A banded score scale for the TOEFL iBT test (April 2026), Appendix B. ETS rounded the TOEFL overall up to the next half band on purpose, to avoid placing a TOEFL test taker above their real IELTS level. Each school sets its own equivalents.',
    } },
    { p: "Read this table as a guide, not a guarantee. ETS itself notes that the overall scores were **rounded up on purpose**, so that a TOEFL score is not placed above the IELTS band it really matches. That means your school may set a slightly different pair. Michigan Technological University, for example, asks for TOEFL 4.5 or IELTS 6.5, which matches the table, while other schools choose their own equivalents." },

    { h: 'What US universities ask for' },
    { p: "There is no single US rule. Each college, and often each program, sets its own English requirement, lists the tests it accepts, and decides how old a score can be. Two real examples show how this looks in practice in late 2026." },
    { p: "**Arizona State University** asks undergraduate applicants for a TOEFL iBT overall of 3.5, with at least 3.5 in each section, for tests taken on or after 21 January 2026; for older tests the minimum is 61. Its IELTS Academic minimum is an overall 6.0. Some programs ask for more: engineering wants TOEFL 4 or IELTS 6.5, and the Walter Cronkite School of Journalism wants TOEFL 5 or IELTS 7.0. ASU accepts the TOEFL iBT Home Edition for tests taken from 21 January 2026 and accepts IELTS Online, and it wants scores taken no more than two years before your start date." },
    { p: "**Michigan Technological University** asks undergraduates for a TOEFL iBT score of 4.5 for tests taken on or after 21 January 2026, or 79 for tests taken before. For IELTS it wants an overall 6.5 with **at least 6.0 in speaking and writing**, and scores must be from within two years of your intended enrollment date." },
    { figure: { photo: 'toefl-or-ielts-american-flag', alt: 'An American flag flying against a blue sky', caption: 'In the US there is no national rule: each university sets its own English requirement.' } },
    { p: "Graduate programs often set higher scores than undergraduate admissions at the same university, and a department can add its own rule on top. Always go to the page of the exact program you are applying to. Look for four things: which tests are listed, the overall and section minimums, whether at-home versions are accepted, and how recent your score must be." },

    { h: 'At a test center or at home' },
    { p: "Both tests can be taken at home, with conditions. **TOEFL iBT Home Edition** is the same test taken on your own computer with a human proctor watching online. ETS's rules are strict: you need a desktop or laptop, not a tablet or phone; only one monitor and one keyboard; a licensed Windows or Mac operating system; and an internal or external speaker and microphone, because **headsets and earphones are not allowed**. You check your equipment in advance with the TOEFL Test App. ETS warns that if you do not meet the requirements on test day you cannot take the test, and you will not get a refund or a free reschedule." },
    { figure: { photo: 'toefl-or-ielts-laptop-home', alt: 'A young woman typing on a laptop by a window at home', caption: 'Testing at home saves the trip, but the equipment rules are strict. Check them before you book.' } },
    { p: "**IELTS Online** is available for IELTS Academic only, in some countries, from home or another private place with a stable internet connection. IELTS says it has the same format, questions, timing and marking as the test-center version, and the Speaking test is a video call with a trained examiner. The online test is proctored live, and no paper Test Report Form is issued." },
    { p: "The bigger question is whether your school accepts the at-home version. IELTS itself tells you to check with your organization before booking IELTS Online, and ETS says the same about its score options. ASU accepts both at-home tests; other schools may not. If your target program is silent on it, ask the admissions office in writing." },

    { h: 'Results and validity' },
    { p: "TOEFL iBT scores appear in your ETS account **three days after the test**, and PDF score reports are ready a day after that. On IELTS, results for the computer test at a center are available one to five days after the test, and IELTS Online results take six to eight days. If you are close to an application deadline, add a few days of margin to either test." },
    { p: "Both tests work on a two-year window. ETS says **TOEFL iBT scores are valid for two years from the test date** and that it will not report or send scores after that. IELTS recommends that results be treated as valid for two years after the test, though some organizations accept older ones. In practice, US schools usually count those two years up to your start date or your enrollment, as both ASU and Michigan Tech do. So do not take the test too early." },
    { note: { title: 'MyBest scores', text: "TOEFL score reports also include a MyBest section that draws on your earlier tests; on a report from the new test, older scores on the 0 to 120 scale are converted to the 1 to 6 scale. ETS is clear that each institution decides whether to accept them, so check before you count on it.", draw: 'owl' } },

    { h: 'Side by side' },
    { table: {
      head: ['', 'TOEFL iBT (from 21 January 2026)', 'IELTS Academic'],
      rows: [
        ['Made by', 'ETS', 'British Council, IDP and Cambridge University Press & Assessment'],
        ['Length', 'About 90 minutes of test time; allow about two hours', '2 hours 45 minutes'],
        ['Design', 'Adaptive: adjusts to your level', 'Fixed format for everyone'],
        ['Speaking', 'About 8 minutes, recorded on the computer', '11 to 14 minutes with a live examiner'],
        ['Scores', '1 to 6 in half points, per section and overall, with CEFR level', '0 to 9 in whole and half bands, per skill and overall'],
        ['At home', 'TOEFL iBT Home Edition', 'IELTS Online, in some countries'],
        ['Results', '3 days after the test', '1 to 5 days (computer at a center); 6 to 8 days (online)'],
        ['Validity', '2 years from the test date', 'Recommended 2 years'],
      ],
      note: 'Formats, timings and rules change. Check ets.org and ielts.org, and your university’s own page, before you book.',
    } },

    { h: 'How to choose' },
    { p: "Start with the school. If your program accepts only one of the two, the decision is made. If it accepts both, compare the minimums on each test using the school’s own numbers, not a chart from somewhere else, and think about which target feels closer." },
    { p: "Then think about the format. If speaking to a person makes you freeze, TOEFL’s recorded Speaking section may suit you; if you find it hard to talk to a screen and prefer a real conversation, IELTS may suit you better. If you work well in short bursts and like a shorter test, the updated TOEFL will feel quicker. If you prefer longer reading texts and essays where you can plan, IELTS gives you more room. **Neither test is easier**; they reward different habits." },
    { p: "Practical details matter too. Look at which test has dates when you need them, whether you will test at home or at a center, and whether your computer and room meet the at-home rules. Finally, use the right materials: TOEFL practice written before January 2026 shows an older test, so make sure your prep reflects the current format." },
    { quote: 'Start from the school’s requirement, then pick the format that lets you show your English best.' },

    { h: 'How to prepare' },
    { p: "The real work is the same for both tests: your English must already be close to the level your school wants. In the examples above, the minimums run from TOEFL 3.5, which ETS places at B1, to TOEFL 5, which it places at C1, so find your own target on the CEFR scale before you start. Exam technique on top of that is what turns your level into a score." },
    { p: "For TOEFL, practice short tasks under time pressure, typing quickly and accurately, and speaking clearly into a microphone without a listener in front of you. For IELTS, train your listening while writing answers, read long academic texts against the clock, plan essays that answer every part of the question, and practice speaking at length with another person. For both, do at least one **full practice test with real timing** before you book." },
    { note: { title: 'Preparing with Alimun', text: "Alimun runs live English classes with a teacher in a small group, where you practice speaking, writing and listening every week, and a level test that places you on the CEFR scale so you know how far you are from B2 or C1. Alimun is not affiliated with ETS or IELTS.", draw: 'teacup' } },

    { h: 'The verdict' },
    { p: "For a US university, TOEFL iBT and IELTS Academic are both widely accepted, both report your level in four skills, and both are usually valid for two years. TOEFL is now shorter, adaptive, entirely on screen and scored on a 1 to 6 scale tied to the CEFR. IELTS is longer, fixed in format and keeps a face-to-face Speaking test with an examiner." },
    { p: "If you are comfortable with computers and want the quicker test, **TOEFL is the natural choice**. If you want a human conversation in Speaking and like a predictable format, **IELTS is likely the better fit**. Whichever you choose, start from the exact requirement of your program, use only official comparisons, and take the test close enough to your start date that the score is still valid when you enroll." },
  ],
  quiz: [
    { q: 'On what date did ETS introduce the updated TOEFL iBT with the 1 to 6 score scale?', options: ['1 January 2025', '21 January 2026', '1 September 2026', '21 January 2028'], a: 1, why: 'The updated test and the 1 to 6 scale started on 21 January 2026.' },
    { q: 'On the new TOEFL scale, which scores correspond to CEFR level B2?', options: ['3 to 3.5', '4 to 4.5', '5 to 5.5', '6'], a: 1, why: 'ETS maps 4 and 4.5 to B2, 5 and 5.5 to C1 and 6 to C2.' },
    { q: 'How is the TOEFL overall score calculated since 2026?', options: ['The sum of the four sections', 'The highest section score', 'The average of the four sections, rounded to the nearest half band', 'The Reading and Listening scores only'], a: 2, why: 'The overall score is the average of the four sections, rounded to the nearest half band.' },
    { q: 'Which old TOEFL requirement does ETS recommend replacing with a 4.5?', options: ['70', '80', '90', '100'], a: 2, why: 'ETS recommends 5 for 100, 4.5 for 90, 4 for 80 and 3.5 for 70.' },
    { q: 'How long does the IELTS Academic test take in total?', options: ['About 90 minutes', '2 hours', '2 hours 45 minutes', '4 hours'], a: 2, why: 'IELTS Academic takes 2 hours and 45 minutes, the same at a center and online.' },
    { q: 'In the ETS comparison table, which TOEFL overall score sits next to an IELTS overall 6.5?', options: ['3.5', '4', '4.5', '5.5'], a: 2, why: 'ETS places IELTS 6.5 next to a TOEFL overall of 4.5, rounded up on purpose.' },
    { q: 'Which of these is not allowed for the TOEFL iBT Home Edition?', options: ['A laptop computer', 'An external microphone', 'A headset or earphones', 'A Mac operating system'], a: 2, why: 'ETS requires an internal or external speaker and microphone; headsets and earphones are not allowed.' },
    { q: 'How long are TOEFL iBT scores valid?', options: ['Six months', 'One year', 'Two years from the test date', 'They never expire'], a: 2, why: 'ETS says TOEFL iBT scores are valid for two years from the test date.' },
  ],
  faq: [
    ['Do US universities prefer TOEFL or IELTS?', 'Most US universities list both, and they set their own minimum for each. Check the admissions page of your program: if both are accepted, neither is preferred, and you can choose the test that suits you.'],
    ['What is a good TOEFL score in 2026?', 'A good score is the one your school asks for. As examples, Arizona State University asks undergraduates for an overall 3.5 with 3.5 in each section, and Michigan Technological University for 4.5. On the new scale, 4 to 4.5 corresponds to B2 and 5 to 5.5 to C1.'],
    ['Can I still use a TOEFL score from 2025?', 'Yes, while it is valid. TOEFL scores are valid for two years from the test date, and many universities list a separate minimum on the old 0 to 120 scale for tests taken before 21 January 2026. Check that the score will still be accepted by your start or enrollment date.'],
    ['Is TOEFL easier than IELTS?', 'Neither is easier in itself. TOEFL is shorter, adaptive and has a recorded Speaking section; IELTS is longer, fixed in format and has a live Speaking test with an examiner. The better test is the one whose format lets you show your English best.'],
    ['Do universities accept TOEFL Home Edition and IELTS Online?', 'Many do, but not all. Arizona State University, for example, accepts both. Both ETS and IELTS tell you to check with your school before you book an at-home test.'],
  ],
  related: ['ielts-band-scores', 'ielts-or-cambridge', 'cefr-english'],
  sources: [
    ['TOEFL iBT test content and structure (ETS)', 'https://www.in.ets.org/toefl/institutions/ibt/about/content-structure.html'],
    ['TOEFL iBT score scale update (ETS)', 'https://www.ets.org/toefl/institutions/ibt/score-scale-update.html'],
    ['Understanding TOEFL iBT scores (ETS)', 'https://www.ets.org/toefl/test-takers/ibt/scores/understand-scores.html'],
    ['A banded score scale for the TOEFL iBT test, April 2026 (ETS)', 'https://www.in.ets.org/content/dam/ets-org/pdfs/toefl/score-scale-update-2026.pdf'],
    ['Getting your TOEFL iBT scores (ETS)', 'https://www.ets.org/toefl/test-takers/ibt/scores/get-scores.html'],
    ['TOEFL iBT Home Edition requirements (ETS)', 'https://www.ets.org/toefl/test-takers/ibt/register/at-home-requirements.html'],
    ['IELTS Academic test format', 'https://ielts.org/take-a-test/test-types/ielts-academic-test'],
    ['IELTS scoring in detail', 'https://ielts.org/take-a-test/your-results/ielts-scoring-in-detail'],
    ['Ways to take IELTS', 'https://www.ielts.org/take-a-test/why-choose-ielts/ways-to-take-ielts'],
    ['IELTS Online', 'https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-online'],
    ['English proficiency, Arizona State University', 'https://admission.asu.edu/international/undergrad/english-proficiency'],
    ['English proficiency requirements, Michigan Technological University', 'https://www.mtu.edu/admissions/apply/international/english/'],
  ],
};
