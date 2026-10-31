// Third design (docs/BLOG_PLAN.md). Facts checked 31 Oct 2026 against cambridgeenglish.org: B2 First exam page,
// exam format page, results page (score ranges, grades, results timing, no expiry), the official B2 First handbook
// (parts, marks, equal weighting, assessment criteria, key word transformation rules, 1939) and the Statement of
// Results guide; guided learning hours from the Cambridge English support site. Alimun is not affiliated with Cambridge.
export default {
  key: 'b2-first',
  site: 'en',
  slug: 'cambridge-b2-first-exam-guide',
  section: 'exams',
  course: 'English',
  published: '2026-10-31',
  updated: '2026-10-31',
  title: 'Cambridge B2 First (FCE): the complete exam guide',
  metaTitle: 'Cambridge B2 First (FCE): format, scores and preparation – Alimun',
  desc: 'Every paper and part of Cambridge B2 First, formerly FCE, with timings, how the Cambridge English Scale and grades work, and a preparation plan.',
  lead: "B2 First, long known as the First Certificate in English or FCE, is one of the best-known English certificates in Europe. It tests all four skills plus grammar and vocabulary, and **it shows you have reached upper-intermediate level**. Here is how it works, part by part, and how to prepare for it.",
  photo: 'b2-first-desk-notebook',
  sticker: { draw: 'owl', say: 'Five scores, one average, one certificate.' },
  facts: [
    { n: 4, unit: 'papers', text: 'Reading and Use of English, Writing, Listening and Speaking' },
    { n: 52, unit: 'questions', text: 'in Reading and Use of English, in seven parts and 1 hour 15 minutes' },
    { n: 180, text: 'the Cambridge English Scale score that gives grade A and a certificate stating C1 level' },
    { label: 'No expiry', text: 'on the certificate, though some organizations ask for a recent result' },
  ],
  blocks: [
    { take: { title: 'The short answer', text: "B2 First is the Cambridge English exam at level B2 of the CEFR. It has four papers and takes **about three and a half hours**. You get a score from 122 to 190 on the Cambridge English Scale: 160 to 179 earns the B2 certificate, 180 or more earns grade A and a certificate stating C1, and 140 to 159 earns a certificate at B1. The certificate does not expire.", draw: 'owl' } },

    { h: 'What B2 First is and who it is for' },
    { p: "B2 First is one of the Cambridge English Qualifications, a series of exams that runs from A2 Key to C2 Proficiency, each one built for a single level. It was first offered in 1939, and for decades it was called the **First Certificate in English**, or FCE. Many teachers and employers still use the old name, and the certificate itself still reads “B2 First Certificate in English”." },
    { p: "The exam targets **level B2**, upper intermediate, on the Common European Framework of Reference (CEFR), the six-level scale from A1 to C2. Cambridge describes it as proof that you can work in an English-speaking environment, live independently in an English-speaking country, or study at upper-intermediate level, for example on a foundation or pathway course. In everyday terms, B2 is the level at which you can follow a talk on a familiar topic, keep up a conversation on a fairly wide range of subjects and give your opinion with reasons." },
    { p: "That makes it a natural goal after B1 Preliminary, and Cambridge notes that it is accepted by a wide range of schools and universities for study as well as by employers. If you are not sure of your level yet, find that out first: B2 First is a test of one level, and **taking it too early is an easy way to lose time and money**." },

    { h: 'The four papers at a glance' },
    { p: "The exam has four papers. Reading and Use of English, Writing and Listening are written papers, while Speaking is taken face to face with two examiners; your exam center gives you the date and time of each. Cambridge gives the total as **about 3.5 hours**." },
    { table: {
      head: ['Paper', 'Time', 'Parts', 'Questions', 'What it tests'],
      rows: [
        ['Reading and Use of English', '1 hour 15 minutes', '7', '52', 'Grammar, vocabulary and reading comprehension'],
        ['Writing', '1 hour 20 minutes', '2', '2 texts', 'An essay and one text you choose, 140 to 190 words each'],
        ['Listening', 'About 40 minutes', '4', '30', 'Understanding speech; each recording is played twice'],
        ['Speaking', '14 minutes per pair', '4', '–', 'Speaking alone, with an examiner and with another candidate'],
      ],
      note: 'Speaking lasts 20 minutes when three candidates take it together. The format is the same on paper and on computer.',
    } },
    { p: "The five scores you receive, for Reading, Use of English, Writing, Listening and Speaking, **carry equal weight**. So although Reading and Use of English is one paper, it gives you two of your five scores, which is a good reason to take it seriously." },

    { figure: { photo: 'b2-first-reading-book', alt: 'A person reading a paperback book, seen over the shoulder', caption: 'The texts in Reading and Use of English add up to 2,200 to 2,500 words, so reading speed counts as much as grammar.' } },

    { h: 'Reading and Use of English' },
    { p: "This paper lasts 1 hour 15 minutes and has seven parts with 52 questions. The first four parts are **Use of English**: short tasks that test grammar and vocabulary directly. The last three are Reading: longer texts from articles, reports, fiction, advertisements, letters and other sources, about 2,200 to 2,500 words in all." },
    { h3: 'Parts 1 to 4: Use of English' },
    { p: "In Part 1, a multiple-choice cloze, you read a short text with eight gaps and choose the right word from four options. It tests vocabulary: collocations, fixed phrases, phrasal verbs and words with similar meanings. In Part 2, an open cloze, there are eight more gaps but **no options**; you write one word in each, usually a grammar word such as a preposition, an article, an auxiliary or a pronoun. In Part 3, word formation, you change a given word to fit each of eight gaps, for example turning “decide” into “decision” or “able” into “unable”." },
    { p: "Part 4, key word transformations, is the one candidates talk about most. You get a sentence and a key word, and you complete a second sentence so it means the same as the first, using **between two and five words** including the key word, which you must not change. Contractions such as didn’t count as two words. There are six questions, and each is worth up to two marks, because the answer is marked in two halves. Spelling must be correct in Parts 2, 3 and 4." },
    { examples: [
      ['I haven’t seen Maria for three years. (SINCE) It ___ I saw Maria.', 'Answer: **has been three years since** (five words, the maximum).'],
      ['It wasn’t necessary for us to book a table. (NEED) We ___ a table.', 'Answer: **didn’t need to book**. That is five words, because a contraction such as didn’t counts as two.'],
      ['“Can you help me?” Anna asked Ben. (WHETHER) Anna asked Ben ___ help her.', 'Answer: **whether he could** (three words).'],
    ] },
    { h3: 'Parts 5 to 7: Reading' },
    { p: "Part 5 is a longer text with six multiple-choice questions on detail, opinion and attitude, each worth **two marks**. Part 6 is a gapped text: six sentences have been removed from an article and mixed with a seventh that does not fit anywhere, and you put each one back in the right place, which means following the logic and the references from one paragraph to the next. Part 7 is multiple matching: ten questions in which you find which text, or which part of a text, mentions a given point. It rewards fast scanning more than careful reading." },
    { note: { title: 'Two marks per question in Parts 5 and 6', text: "Parts 5 and 6 have only six questions each, but every question is worth two marks. Leave enough time for them: **rushing the long texts at the end** costs more than a slow start in Part 1.", draw: 'snail' } },

    { h: 'Writing' },
    { p: "The Writing paper lasts 1 hour 20 minutes and you write two texts of **140 to 190 words** each. Part 1 is compulsory: **an essay** giving your opinion on a topic of general interest. You get two ideas to discuss and you add a third idea of your own. The essay is written for your teacher, so a neutral or fairly formal style fits." },
    { p: "In Part 2 you choose **one task from a short list**. In B2 First the formats are an article, an email or letter, a review and a report. Each task names a reader and a purpose, such as recommending a place to a friend or reporting on a school event to a group leader, and you are marked on how well your text works for that reader." },
    { p: "Examiners mark each text on **four scales**: Content, whether you did everything the task asked; Communicative Achievement, whether the style and format suit the reader; Organisation, how well the text holds together; and Language, the range and accuracy of your grammar and vocabulary. Cambridge also asks you to keep to one variety of English: British or American spelling are both fine, as long as you do not switch between them." },
    { figure: { photo: 'b2-first-writing-notes', alt: 'People at a table, one writing notes in a spiral notebook next to a cup of coffee', caption: 'Both Writing tasks ask for 140 to 190 words: a few minutes of planning helps you cover every point the task asks for.' } },
    { note: { title: 'Word counts are a guide, not a target', text: "Texts that are too short may not show enough range or cover every point; texts that are too long may drift off the task. **Aim for the middle of the range** and use the words on what the reader needs.", draw: 'teacup' } },

    { h: 'Listening' },
    { p: "Listening takes about 40 minutes and has four parts with 30 questions. In Part 1 you hear eight short, unrelated recordings of about 30 seconds and answer one three-option question on each. In Part 2 you listen to a talk of three to four minutes and complete ten sentences with words you hear. In Part 3 five speakers talk about a common topic for about 30 seconds each, and you **match each speaker** to one of eight statements. In Part 4 you answer seven three-option questions on an interview or conversation of three to four minutes." },
    { p: "Every recording is **played twice**. Use the first listening to get the general idea and mark a likely answer, and the second to check it. Part 3 is the trickiest: three of the eight statements are not used, and a speaker may mention an idea from a wrong option before saying what they really think." },
    { figure: { photo: 'b2-first-headphones', alt: 'A young man wearing headphones, looking at his phone', caption: 'Each Listening recording is played twice: the first time for the general idea, the second to check your answer.' } },

    { h: 'Speaking' },
    { p: "You usually take the Speaking test **with another candidate**, or in a group of three, and there are two examiners. One, the interlocutor, asks the questions and gives you the tasks; the other, the assessor, listens and marks. The test lasts 14 minutes for a pair and has four parts. You are assessed on your own performance, not compared with your partner." },
    { p: "Part 1 is a short interview, about two minutes, with questions about you, your work or studies, your free time and your plans. In Part 2 each candidate gets two photographs and talks about them alone for one minute, comparing them and answering a question printed above them; then you comment on your partner's photos for about 30 seconds. In Part 3 you and your partner discuss a question with several written prompts for two minutes, then have **one more minute to reach a decision** together. In Part 4 the examiner asks further questions on the same topic, and the discussion lasts about four minutes." },
    { p: "The assessor marks Grammar and Vocabulary, Discourse Management, Pronunciation and **Interactive Communication**, and the interlocutor gives a mark for global achievement. Interaction counts: in Parts 3 and 4, reacting to what your partner says, asking their opinion and building on it scores better than delivering a prepared speech." },
    { figure: { photo: 'b2-first-street-chat', alt: 'Three friends talking on a sunny city street', caption: 'In Part 3 you talk with your partner for two minutes, then have one minute to agree on a decision.' } },

    { cta: true },

    { h: 'How the Cambridge English Scale works' },
    { p: "B2 First results are reported on the **Cambridge English Scale**, a set of scores shared by all Cambridge English Qualifications. You get a separate score for Reading, Use of English, Writing, Listening and Speaking, and your overall score is the average of the five. Your grade and your CEFR level are both based on that overall score." },
    { table: {
      head: ['Overall score', 'Result', 'What you receive'],
      rows: [
        ['180 to 190', 'Grade A', 'The B2 First certificate stating that you demonstrated ability at C1'],
        ['173 to 179', 'Grade B', 'The B2 First certificate at B2'],
        ['160 to 172', 'Grade C', 'The B2 First certificate at B2'],
        ['140 to 159', 'Level B1', 'A Cambridge English certificate at B1'],
        ['122 to 139', 'No certificate', 'Your score is shown on your Statement of Results'],
      ],
      note: 'Every candidate receives a Statement of Results with all five scores and the overall score.',
    } },
    { p: "Two consequences follow. First, **a weak paper does not sink you on its own**: a lower Writing score can be balanced by strong Listening and Reading. Second, the scale gives you a safety net. If you narrowly miss B2, a score from 140 to 159 still earns a certificate at B1, and if you do very well, a score of 180 or more gives you grade A and a certificate stating C1." },
    { p: "A C1 result on a B2 First certificate is a real advantage, but it is not the same as passing C1 Advanced, which is designed to test the whole C1 level. If a university or employer asks specifically for C1 Advanced, that is the exam to take. Many organizations set their requirement as a minimum overall score rather than a grade, and Cambridge itself calls the overall score **the most important piece of information** on your results." },
    { quote: 'Five scores, one average: one weak paper does not decide your result.' },
    { note: { title: 'Check the score, not only the grade', text: "If an organization asks for a minimum score, look at your overall score on the Statement of Results. Some also set a minimum for each skill, so **read the requirement word for word**.", draw: 'parrot' } },

    { h: 'Paper-based or computer-based' },
    { p: "You can take B2 First on paper or on a computer at an authorized exam center. **The content, timing and format are the same**, and so is the certificate. On a computer you type your answers, and at the end of Listening you get two minutes to check them; on paper you write on an answer sheet and get five minutes to transfer your Listening answers. Speaking is always face to face." },
    { p: "The main practical difference is speed. Results of the digital exam are usually available **5 to 10 working days** after the exam, while paper-based results normally take 4 to 6 weeks. Your center's Confirmation of Entry gives the final date for your results. If you have a deadline for a university or a job application, that difference may decide the format for you." },

    { h: 'B2 First or B2 First for Schools?' },
    { p: "There are two versions of the exam at the same level. **B2 First for Schools** has the same papers, parts, timings and scoring as B2 First, and the same CEFR level. There is one difference in Writing Part 2: the schools version can include a story, while the report appears only in the standard version." },
    { p: "Cambridge designs B2 First for adults and B2 First for Schools for school-age learners. The level is the same; only **the topics and texts** change, chosen around the interests and experience of younger candidates. If you are at school, ask your center which version it offers." },

    { h: 'Validity and who accepts it' },
    { p: "Cambridge English certificates **do not expire**. A B2 First you pass this year is still a valid certificate in twenty years. Each organization decides for itself how recent a result it accepts, though, and some universities, employers and authorities ask for a recent certificate. Check before you rely on an older one." },
    { p: "Cambridge says its qualifications are accepted by **thousands of businesses and educational institutions** worldwide. B2 First is recognized as proof of upper-intermediate English for work in industry, administration and services, and by many schools and universities for study. Cambridge lists recognizing organizations on its website, but the requirements page of the university or employer you are applying to is always the final word." },

    { h: 'B2 First or IELTS?' },
    { p: "The two are often compared, and they answer different questions. IELTS has one test for every level and gives you a band from 0 to 9; most organizations accept an IELTS result for **two years**. B2 First certifies one level, with a certificate that does not expire. In IELTS Listening you hear each recording once and the Speaking test is one to one with an examiner; in B2 First you hear everything twice and usually speak with a partner." },
    { p: "For migration and many university applications in English-speaking countries, the organization often names IELTS. For **a CV in Europe**, school-leaving goals and jobs where you need to show B2, B2 First is widely known and keeps its value. Our article on IELTS or Cambridge compares the two in detail." },

    { h: 'How long to prepare' },
    { p: "Cambridge English gives approximate **guided learning hours** for each level: about 350 to 400 hours from complete beginner for B1, and about 500 to 600 hours for B2. These are guidelines, not rules, and they count hours with a teacher, but they show the scale: going from a solid B1 to B2 usually means **around 150 to 200 hours** of guided learning, plus your own practice." },
    { p: "So the honest answer depends on where you start. If you are already at B2 and only need to learn the format, a few weeks to two or three months of regular exam practice is often enough. If you are at B1, plan for months of steady work on the language first, then add the exam format. At three hours of lessons a week, 150 to 200 guided hours means **roughly a year or more** of classes." },

    { h: 'A practical preparation plan' },
    { p: "Start with a **diagnostic**: do a complete official sample test under real timing, or at least one paper of each kind. Mark it and note your score for each of the five areas. That tells you whether you need more language or more exam practice, and where to put your hours." },
    { p: "Early on, build the language. Read articles and short fiction every week and keep a notebook of collocations, phrasal verbs and word families, since those feed Parts 1, 2 and 3 directly. Practice **paraphrasing**: take a sentence and say it another way. That is exactly the skill behind key word transformations, and it helps in Writing and Speaking too." },
    { p: "Once the language is moving, work through the exam part by part. Do one or two Use of English parts several times a week, check every wrong answer and write down why it was wrong. Write one text a week in a different Part 2 format, and get it corrected; **feedback on your writing** is worth more than writing twice as much without it. Listen to podcasts and interviews, then do Listening parts against the clock." },
    { p: "Practice Speaking out loud **with another person**. Time your one-minute long turn with your phone, compare the photos instead of describing each one, and in the collaborative task practice inviting your partner in and reaching a decision before the minute is up." },
    { p: "In the final four to six weeks, do **full mock tests** under exam conditions, ideally one every week or two, and review each one carefully. Book the exam once your practice scores are at your target, not before." },
    { p: "At Alimun, the live classes with a teacher and the same small group give you a partner to speak with every week, and **your teacher corrects your homework**, which is what Writing preparation needs most. Not sure where you stand? The level test places you from A1 to C1 in a few minutes." },

    { h: 'Common mistakes on exam day' },
    { mistakes: [
      ['Writing six words in a key word transformation', 'Using **two to five words**, including the key word', 'More than five words scores zero, even if the meaning is right.'],
      ['Changing the key word, for example need into needed', 'Keeping the key word **exactly as given**', 'If the key word is altered or missing, the answer gets no marks.'],
      ['Describing each photo in turn in Speaking Part 2', '**Comparing** the two photos and answering the question above them', 'The task asks you to compare and respond, not to describe.'],
      ['Talking at your partner in Part 3', 'Asking their opinion and **building on what they say**', 'Interactive Communication is one of the marking criteria.'],
      ['Writing 240 words in a Part 2 review', 'Staying within **140 to 190 words**', 'Texts that are too long may contain irrelevant content and lose marks.'],
    ] },
  ],
  quiz: [
    { q: 'What was B2 First called before?', options: ['First Certificate in English (FCE)', 'Certificate in Advanced English', 'Preliminary English Test', 'IELTS General Training'], a: 0, why: 'B2 First was long known as the First Certificate in English, or FCE.' },
    { q: 'How many questions does Reading and Use of English have?', options: ['30', '40', '52', '56'], a: 2, why: 'The paper has 52 questions in seven parts and lasts 1 hour 15 minutes.' },
    { q: 'How many words can you write in a key word transformation?', options: ['One word only', 'One to three', 'Two to five, including the key word', 'Up to eight'], a: 2, why: 'The answer must be two to five words, including the key word, which you must not change.' },
    { q: 'How long should each Writing text be?', options: ['80 to 100 words', '140 to 190 words', '220 to 260 words', 'At least 250 words'], a: 1, why: 'Both B2 First Writing tasks ask for 140 to 190 words.' },
    { q: 'How many times do you hear each Listening recording?', options: ['Once', 'Twice', 'Three times', 'Only Part 1 is repeated'], a: 1, why: 'Every recording in B2 First Listening is played twice.' },
    { q: 'How is your overall score calculated?', options: ['Only Reading and Writing count', 'Speaking counts double', 'It is the average of five equally weighted scores', 'It is the lowest of your scores'], a: 2, why: 'The overall score is the average of Reading, Use of English, Writing, Listening and Speaking.' },
    { q: 'You score 165 overall. What do you receive?', options: ['No certificate', 'A certificate at B1', 'Grade C and a B2 certificate', 'Grade A and a certificate stating C1'], a: 2, why: 'Scores from 160 to 172 give grade C and the B2 First certificate at B2.' },
    { q: 'When are digital B2 First results usually available?', options: ['The same day', '5 to 10 working days after the exam', '4 to 6 weeks after the exam', 'Three months after the exam'], a: 1, why: 'Digital results usually come 5 to 10 working days after the exam; paper-based results take 4 to 6 weeks.' },
  ],
  faq: [
    ['Is B2 First the same as FCE?', 'Yes. B2 First is the current name of the exam long known as the First Certificate in English, or FCE. The level, B2, is now part of the name, and the certificate still reads “B2 First Certificate in English”.'],
    ['Can you fail B2 First?', 'If your overall score is below 160 you do not get the B2 certificate, but a score from 140 to 159 still earns a certificate at B1. Below 140 you receive your Statement of Results without a certificate.'],
    ['Does the B2 First certificate expire?', 'No. Cambridge English certificates do not expire. Some universities and employers ask for a recent result, so check their requirements before relying on an older certificate.'],
    ['Is the computer-based exam easier?', 'No. The content, timing, format and certificate are the same. The main differences are that you type your answers and that results arrive faster, usually within 5 to 10 working days.'],
    ['Can I get a C1 certificate from B2 First?', 'Yes. An overall score from 180 to 190 gives grade A and a certificate stating that you demonstrated ability at C1. If an organization asks specifically for C1 Advanced, though, you need to take that exam.'],
  ],
  related: ['ielts-or-cambridge', 'cefr-english', 'how-long-english'],
  sources: [
    ['B2 First, Cambridge English', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/first/'],
    ['B2 First exam format', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/first/format/'],
    ['B2 First results', 'https://www.cambridgeenglish.org/exams-and-tests/first/results/'],
    ['B2 First handbook for teachers', 'https://www.cambridgeenglish.org/images/167791-b2-first-handbook.pdf'],
    ['Cambridge English, guided learning hours', 'https://support.cambridgeenglish.org/hc/en-gb/articles/202838506-Guided-learning-hours'],
  ],
};
