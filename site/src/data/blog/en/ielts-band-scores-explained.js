// Third design (docs/BLOG_PLAN.md). Facts checked 1 Nov 2026 against ielts.org (band descriptors, overall band rounding
// and its worked examples, raw score tables, Writing and Speaking criteria, IELTS and the CEFR, IELTS for UKVI, One Skill
// Retake), ielts.idp.com (two-year validity) and gov.uk (SELT rules). Alimun is not affiliated with IELTS.
export default {
  key: 'ielts-band-scores',
  site: 'en',
  slug: 'ielts-band-scores-explained',
  section: 'exams',
  course: 'English',
  published: '2026-11-01',
  updated: '2026-11-01',
  title: 'IELTS band scores explained: what each band means and how it is calculated',
  metaTitle: 'IELTS band scores explained: the 0 to 9 scale, step by step – Alimun',
  desc: 'What each IELTS band from 0 to 9 means, how the overall band is rounded, how many correct answers you need and how to gain half a band.',
  lead: 'An IELTS result is five numbers: one band for each skill and an overall band. Once you know **how those numbers are built**, you can read any score requirement, see where your result comes from and work out exactly where the next half band is hiding.',
  photo: 'ielts-band-scores-reading-at-table',
  sticker: { draw: 'snail', say: 'Half a band at a time still gets you there.' },
  facts: [
    { n: 9, text: 'the top IELTS band, called Expert, on a scale from 0 that moves in whole and half bands' },
    { n: 40, unit: 'questions', text: 'in both Listening and Reading, each correct answer worth one mark' },
    { n: 4, unit: 'criteria', text: 'equally weighted in Writing, and four more in Speaking' },
    { n: 60, unit: 'days', text: 'after a full test on computer to sit IELTS One Skill Retake' },
  ],
  blocks: [
    { take: { title: 'The short answer', text: "IELTS reports a band from 0 to 9 for Listening, Reading, Writing and Speaking, in whole or half bands. **The overall band is the average of the four**, rounded to the nearest half or whole band, with averages ending in .25 and .75 rounded up. Listening and Reading are marked out of 40 and converted to a band; Writing and Speaking are marked by examiners on four criteria each.", draw: 'owl' } },

    { h: 'One scale from 0 to 9' },
    { p: "IELTS does not have a pass mark. Everyone who takes it receives a band score that describes how well they use English, from band 1 for a non-user to **band 9 for an expert user**. Band 0 is kept for one case only: a candidate who did not attempt the test. So if you sit IELTS and answer the questions, your result always says something about your English." },
    { p: "Each band has a short name and a description published by IELTS. The descriptions are worth reading, because they explain what organizations have in mind when they ask for a score. A university that asks for 7 is asking for someone who handles complex language well despite occasional mistakes; an organization that asks for 6 wants **effective command of English in familiar situations**, with some errors and misunderstandings." },
    { table: {
      head: ['Band', 'Name', 'What it describes'],
      rows: [
        ['9', 'Expert', 'Full command of English: accurate, appropriate and fluent, with complete understanding.'],
        ['8', 'Very good', 'Full command with only occasional unsystematic inaccuracies; unfamiliar situations may cause misunderstandings; handles complex, detailed argument well.'],
        ['7', 'Good', 'Operational command with occasional inaccuracies and misunderstandings in some situations; generally handles complex language well.'],
        ['6', 'Competent', 'Effective command despite some inaccuracies and misunderstandings; can use fairly complex language, particularly in familiar situations.'],
        ['5', 'Modest', 'Partial command; copes with overall meaning in most situations but makes many mistakes; handles basic communication in their own field.'],
        ['4', 'Limited', 'Basic competence limited to familiar situations; frequent problems in understanding and expression; cannot use complex language.'],
        ['3', 'Extremely limited', 'Conveys and understands only general meaning in very familiar situations; communication often breaks down.'],
        ['2', 'Intermittent', 'Great difficulty understanding spoken and written English.'],
        ['1', 'Non-user', 'No ability to use the language beyond a few isolated words.'],
        ['0', 'Did not attempt the test', 'The test taker did not answer the questions.'],
      ],
      note: 'Summarized from the band descriptions on ielts.org. Half bands, such as 6.5, sit between two of these descriptions.',
    } },
    { p: "The same scale is used for each of the four skills and for the overall result. That is why requirements can be so precise: an organization can ask for an overall 6.5 and also set a minimum for one skill, for example **no less than 6 in Writing**." },

    { figure: { photo: 'ielts-band-scores-calculator', alt: 'A calculator and a pen on a desk next to a sheet of figures', caption: 'Your overall band is simple arithmetic: add the four skill bands, divide by four and round to the nearest half band.' } },

    { h: 'How the overall band is calculated' },
    { p: "The overall band is **the average of your four skill bands**, rounded to the nearest whole or half band. Add the four results, divide by four, and look at what is left after the decimal point. In most cases the rounding is obvious: an average of 6.1 becomes 6, and an average of 6.4 becomes 6.5." },
    { p: "The question everyone asks is what happens exactly halfway, and IELTS answers it directly. If the average ends in **.25, it is rounded up to the next half band**. If it ends in .75, it is rounded up to the next whole band. A candidate with an average of 6.25 therefore gets 6.5 overall, and one with 3.875 gets 4. An average of 6.125, on the other hand, is closer to 6 than to 6.5, so it is rounded down to 6. These three cases are the worked examples IELTS itself publishes." },
    { table: {
      head: ['Listening', 'Reading', 'Writing', 'Speaking', 'Average', 'Overall band'],
      rows: [
        ['6.5', '6.5', '5.5', '6', '6.125', '6'],
        ['6.5', '6.5', '6', '6', '6.25', '6.5'],
        ['7', '7', '6.5', '6.5', '6.75', '7'],
        ['6', '6', '6', '6', '6', '6'],
        ['7', '6', '6', '6', '6.25', '6.5'],
      ],
      note: 'Example results that apply the official rule: .25 rounds up to the next half band, .75 to the next whole band, .125 rounds down.',
    } },
    { note: { title: 'Why one skill can move your overall band', text: "Each skill is a quarter of the average, so raising one skill by a whole band adds 0.25 to it. With four sixes, the average is 6 and the overall band is 6. **Raise just one of them to 7** and the average becomes 6.25, which rounds up to 6.5 overall.", draw: 'parrot' } },

    { h: 'Listening and Reading: from marks to bands' },
    { p: "The Listening and Reading tests each have **40 questions, and each correct answer is worth one mark**. There are no half marks: your raw score is simply the number of correct answers, and that mark out of 40 is then converted into a band." },
    { p: "IELTS publishes approximate figures for the most common bands, and they are useful to know when you practice. IELTS points out that the precise number of marks needed for each band varies slightly from one version of the test to another, so treat the figures below as a guide, not as a promise." },
    { table: {
      head: ['Band', 'Listening (out of 40)', 'Academic Reading (out of 40)', 'General Training Reading (out of 40)'],
      rows: [
        ['8', '35', '35', 'not given'],
        ['7', '30', '30', '35'],
        ['6', '23', '23', '30'],
        ['5', '16', '15', '23'],
        ['4', 'not given', 'not given', '15'],
      ],
      note: 'Approximate marks for each band as published on ielts.org. The exact number varies slightly between test versions.',
    } },
    { p: "Look at the last column. The same band needs **more correct answers in General Training Reading** than in Academic Reading: about 30 marks for band 6, where Academic needs about 23. The bands mean the same level of reading ability in both versions; the conversion simply reflects that the two tests use different texts. It also means that a practice score from one version cannot be converted with the table of the other." },
    { p: "For Listening, the table gives you a practical target. Moving from band 6 to band 7 takes **roughly seven more correct answers**, from about 23 to about 30. Seen like that, half a band is a handful of questions, often lost to spelling, to a missed plural or to an answer written in the wrong place." },

    { figure: { photo: 'ielts-band-scores-open-book', alt: "An open book with its pages fanned out", caption: "In Reading every correct answer is one mark out of 40, and a misspelled answer earns nothing, so check your spelling." } },

    { h: 'Writing: four criteria, two tasks' },
    { p: "Writing is marked by trained examiners, not by a count of correct answers. Each of the two tasks is assessed on its own against **four criteria that carry equal weight**, and the task score is the average of the four. The Writing band then combines the two tasks, and Task 2 carries more weight than Task 1, so the essay counts for more than the shorter first task." },
    { h3: 'Task achievement and task response' },
    { p: "The first criterion asks whether you did what the task asked. In Task 1 it is called Task achievement, and in Task 2 Task response. An essay can be fluent and still score low here if it **does not answer every part of the question**, wanders away from the topic or never makes its position clear." },
    { h3: 'Coherence and cohesion' },
    { p: "This criterion looks at how your text is organized. Ideas should follow a logical order, paragraphs should each have a clear purpose, and linking words such as however, as a result and on the other hand should connect ideas rather than decorate the text." },
    { h3: 'Lexical resource' },
    { p: "Lexical resource is your vocabulary: its range, its precision and how naturally you combine words. Rare words help only when they are used correctly. A precise everyday phrase such as **a sharp rise in prices** often does more than an impressive word in the wrong place." },
    { h3: 'Grammatical range and accuracy' },
    { p: "The last criterion rewards a variety of sentence structures used accurately. Short, correct sentences keep you safe but limit the score; complex sentences with frequent errors pull it down. The goal is a mix of both, **with errors that do not get in the way** of meaning." },

    { h: 'Speaking: four more criteria' },
    { p: "The Speaking test is a conversation with an examiner, and it is marked on four criteria of equal weight as well. Three of them will sound familiar: **fluency and coherence**, lexical resource, and grammatical range and accuracy. The fourth is pronunciation." },
    { p: "Fluency and coherence is about speaking at length without long pauses, and about linking your ideas so the listener can follow them. Pronunciation is not about sounding British or American. It is about being easy to understand: in the public band descriptions, a speaker at band 8 is **easy to understand throughout**, and their first-language accent has only a minimal effect on how clear they are." },
    { examples: [
      ['“Yes, I like reading.”', 'A short answer that gives the examiner very little to assess.'],
      ['“Yes, quite a lot, mostly novels. I used to read on paper, but these days I read on my phone on the way to work.”', 'An extended answer that shows a range of vocabulary and tenses.'],
      ['“It’s hard to say, but I’d probably choose the city, mainly because of the jobs.”', 'A natural way to give an opinion and a reason, linked clearly.'],
    ] },

    { quote: 'Half a band is often a handful of questions.' },

    { cta: true },

    { h: 'Academic or General Training: same scale, different tests' },
    { p: "IELTS comes in two versions. **Listening and Speaking are the same** in both; Reading and Writing are different. IELTS Academic is for study at university level, and General Training is for people who want to migrate to an English-speaking country or to train or study below degree level." },
    { p: "Both versions report on the same 0 to 9 scale, and the overall band is calculated in the same way. What matters is that you take the version the organization asks for. A band 7 in General Training is not a band 7 in Academic for an application that names Academic. If you are still choosing between IELTS and another exam altogether, our comparison of IELTS and Cambridge English covers that decision." },

    { h: 'What score will you be asked for?' },
    { p: "Every organization sets its own requirement. Universities usually publish an overall band and a minimum for each skill, and the numbers often **differ from course to course** within the same university. Professional bodies and employers set their own targets too. The only reliable figure is the one on the official page of the place you are applying to, so read it closely, including whether it asks for Academic or General Training." },
    { p: "Pay attention to the wording. “Overall 6.5 with no less than 6 in any component” means four results of at least 6 and an average that rounds to 6.5. “6.5 in each skill” is a much harder target, because **every single band** has to reach 6.5." },
    { h3: 'UK visas: SELT and IELTS for UKVI' },
    { p: "For many UK visas, the Home Office asks for a Secure English Language Test, or SELT. The UK government lists IELTS for UKVI and IELTS Life Skills as the IELTS tests approved for this purpose, and they must be taken at an approved test center. The required CEFR level depends on the visa route, and the UK government requires the minimum score **in every component** of the test, not just overall." },
    { table: {
      head: ['CEFR level required', 'Minimum IELTS for UKVI result', 'Examples listed by IELTS'],
      rows: [
        ['B1', 'At least 4.0 in each of the four skills', 'Student visa below degree level'],
        ['B2', 'At least 5.5 in each of the four skills', 'Student visa at degree level or above; Skilled Worker visa'],
        ['C1', 'At least 7.0 in each of the four skills', 'Routes that require C1'],
      ],
      note: 'As listed on ielts.org for IELTS tests for UK Visas and Immigration. Requirements are set by the UK government and change, so check the guidance for your visa on gov.uk before you book.',
    } },
    { p: "IELTS Life Skills works differently. It tests only Speaking and Listening, at A1, A2 or B1, and the result is a **pass or fail** rather than a band. It is used for routes such as family visas and settlement, where only speaking and listening are required." },

    { figure: { photo: 'ielts-band-scores-historic-library', alt: "The carved ceiling and tall bookshelves of a historic library", caption: "Universities set their own IELTS requirements, often course by course: check the overall band and the minimum for each skill." } },

    { h: 'IELTS and the CEFR' },
    { p: "Many organizations, especially in Europe, describe language levels with the CEFR, from A1 to C2. IELTS has been mapped to the CEFR, but **the bands were never designed to line up exactly** with the CEFR levels, and IELTS recommends that organizations use the band descriptions themselves when setting requirements." },
    { p: "What IELTS does say is this. Band scores of **8.5 and higher are recognized as C2**, with band 8 on the border. The step into C1 falls between bands 6.5 and 7: many candidates with 6.5 are at C1, some are just below it, so an organization that wants to be sure of C1 may ask for 7. Band 5 is given as an example of a border score, where a candidate may be B1 or B2. For UK visas, the table above shows the minimum results the UK government accepts for B1, B2 and C1." },
    { note: { title: 'Not a simple conversion', text: "A band 6.5 does not automatically mean C1, and band 5 does not automatically mean B2. If an organization asks for a CEFR level and accepts IELTS, it will usually say which band it treats as equivalent. **Use its number, not a conversion chart** from somewhere else.", draw: 'cat' } },

    { h: 'How long is a result valid?' },
    { p: "IELTS results are officially recognized as valid for **two years from the test date**. The Test Report Form cannot be extended or revalidated, so if you need a result after that, you take the test again. Some organizations set a different window, which is why the IELTS partners advise checking with the institution first." },
    { p: "UK visa rules use the same two years in their own way: a SELT result is valid for two years from the date it is awarded, and it must have been awarded in the two years before the date of your application. Plan the timing so that **your result is still valid when you apply**, not only when you book." },

    { h: 'IELTS One Skill Retake' },
    { p: "If one skill keeps your overall band below the target, you may not need to take the whole test again. **IELTS One Skill Retake** lets you retake one of the four skills, Listening, Reading, Writing or Speaking, within 60 days of a full IELTS test taken on computer at a test center. It is available for both Academic and General Training, but not after a paper-based test or IELTS Online, and you can use it only once for each full test." },
    { p: "You receive a new Test Report Form that shows the retaken score, marked as a retake, together with your original results in the other three skills, and the overall band is recalculated. Your original Test Report Form stays valid, so **you can use whichever result is better**. The catch is acceptance: organizations have to opt in, and not all of them accept a retake. Ask the place you are applying to before you book." },

    { figure: { photo: 'ielts-band-scores-teacher-small-group', alt: "A teacher talking with a small group of adults around a laptop", caption: "Feedback on the four criteria shows you which one is holding your Writing or Speaking back." } },

    { h: 'How to move up half a band' },
    { p: "Start with the arithmetic. Find out which skill sits furthest below the requirement, then work out what the overall band needs. Because each skill is a quarter of the average, **one weak skill pulls the overall band down** more than most people expect, and one improved skill can lift it." },
    { h3: 'Listening and Reading' },
    { p: "In the receptive skills, half a band is a few more correct answers. Check every answer for spelling, since a misspelled answer is marked as incorrect, follow the word limit in the instructions exactly, and never leave a question blank: only correct answers earn marks, so a blank can never help you. In Reading, practice with **the version you will actually take**, because the mark needed for each band differs between Academic and General Training." },
    { h3: 'Writing' },
    { p: "Since Task 2 carries more weight, give it the time it needs. Plan for a few minutes before you write, answer every part of the question, and make your position clear from the start. Write at least the minimum length, 150 words for Task 1 and 250 for Task 2. Then check your work against the four criteria: an essay with good grammar but **an incomplete answer to the question** will stay stuck." },
    { h3: 'Speaking' },
    { p: "Extend your answers with a reason, an example or a contrast, use the tenses naturally, and keep talking when you are looking for a word, rephrasing instead of stopping. Record yourself and listen back: pauses, repeated words and unclear sounds are much easier to hear from the outside." },
    { mistakes: [
      ['“I need 6.5, so 6.5 in every skill.”', 'Read the exact requirement.', 'Overall 6.5 and 6.5 in each skill are different targets; many requirements set an overall band plus a lower minimum per skill.'],
      ['“Band 7 means C1, full stop.”', 'Use the organization’s own equivalence.', 'IELTS says band scores do not align exactly with CEFR levels; C1 starts between 6.5 and 7.'],
      ['“My General Training practice score converts like Academic.”', 'Use the table for your version.', 'General Training Reading needs more correct answers for the same band.'],
      ['“A long Task 1 will make up for a short essay.”', 'Put the most care into Task 2.', 'Task 2 carries more weight in the Writing band than Task 1.'],
      ['“My result from three years ago is still fine.”', 'Check the date before you apply.', 'Results are recognized for two years from the test date and cannot be extended.'],
    ] },
    { p: "Real progress takes regular practice with feedback, not only more tests. At Alimun you learn in **live classes with a teacher and the same small group**, and your teacher corrects your homework, so you know which criterion is holding your writing back. Not sure where you are starting from? The level test places you from A1 to C2 in a few minutes." },
  ],
  quiz: [
    { q: 'Your four skill bands average 6.25. What is your overall band?', options: ['6', '6.25', '6.5', '7'], a: 2, why: 'An average ending in .25 is rounded up to the next half band, so 6.25 becomes 6.5.' },
    { q: 'An average of 6.125 gives which overall band?', options: ['6', '6.5', '6.125', '7'], a: 0, why: '6.125 is closer to 6 than to 6.5, so it is rounded down to 6, as in the IELTS worked example.' },
    { q: 'How many marks is each correct answer worth in Listening and Reading?', options: ['Half a mark', 'One mark', 'Two marks', 'It depends on the question'], a: 1, why: 'Both tests have 40 questions, and each correct answer is worth one mark.' },
    { q: 'About how many marks out of 40 give band 6 in General Training Reading?', options: ['15', '23', '30', '35'], a: 2, why: 'About 30, while Academic Reading needs about 23 for the same band.' },
    { q: 'Which of these is a Speaking criterion but not a Writing criterion?', options: ['Lexical resource', 'Pronunciation', 'Grammatical range and accuracy', 'Coherence'], a: 1, why: 'Pronunciation is only assessed in Speaking; the other criteria appear in Writing too.' },
    { q: 'In IELTS Writing, which task carries more weight?', options: ['Task 1', 'Task 2', 'Both are equal', 'Whichever is longer'], a: 1, why: 'IELTS states that Task 2 carries more weight in marking than Task 1.' },
    { q: 'Which band scores does IELTS recognize as C2?', options: ['6.5 and higher', '7 and higher', '8 and higher', '8.5 and higher'], a: 3, why: 'Band scores of 8.5 and higher are recognized as C2, with band 8 on the border.' },
    { q: 'Within how many days of a full test on computer can you sit One Skill Retake?', options: ['14', '30', '60', '365'], a: 2, why: 'One Skill Retake must be taken within 60 days of the full IELTS test.' },
  ],
  faq: [
    ['Is there a pass mark in IELTS?', 'No. IELTS has no pass or fail. You receive a band from 1 to 9 for each skill and overall, and each organization decides which band it requires. Band 0 is only given when a candidate did not attempt the test.'],
    ['How is the IELTS overall band rounded?', 'It is the average of the four skill bands, rounded to the nearest half or whole band. Averages ending in .25 go up to the next half band and averages ending in .75 go up to the next whole band, so 6.25 becomes 6.5 and 6.75 becomes 7.'],
    ['What IELTS score is C1?', 'IELTS says the step into C1 falls between bands 6.5 and 7, so an organization that wants to be sure of C1 may ask for 7. For UK visas, C1 means at least 7.0 in each skill in IELTS for UKVI. Always use the equivalence of the organization you apply to.'],
    ['How long is an IELTS result valid?', 'IELTS results are officially recognized for two years from the test date, and the Test Report Form cannot be extended. Some organizations set their own rules, so check with them.'],
    ['Can I retake only Writing?', 'Yes, with IELTS One Skill Retake, if your full test was taken on computer at a test center within the last 60 days. You can retake one skill once per full test, and the organization you apply to must accept One Skill Retake results.'],
  ],
  related: ['ielts-or-cambridge', 'cefr-english', 'how-long-english'],
  sources: [
    ['IELTS scoring in detail (ielts.org)', 'https://ielts.org/take-a-test/your-results/ielts-scoring-in-detail'],
    ['IELTS and the CEFR (ielts.org)', 'https://ielts.org/organisations/ielts-for-organisations/compare-ielts/ielts-and-the-cefr'],
    ['IELTS tests for UK Visas and Immigration (ielts.org)', 'https://ielts.org/take-a-test/test-types/ielts-tests-for-uk-visas-and-immigration'],
    ['IELTS One Skill Retake (ielts.org)', 'https://ielts.org/organisations/ielts-for-organisations/verifying-ielts-results/one-skill-retake'],
    ['IELTS validity (IDP)', 'https://ielts.idp.com/singapore/about/ielts-validity'],
    ['Secure English language tests (gov.uk)', 'https://www.gov.uk/guidance/prove-your-english-language-abilities-with-a-secure-english-language-test-selt'],
  ],
};
