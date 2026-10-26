// Template: compare. Facts: IELTS (owners, Academic and General Training, bands 0-9, results usually
// accepted for two years), Cambridge English Qualifications (one exam per level, certificate does not
// expire). Alimun practises these formats in its mock tests and is not affiliated with either.
export default {
  key: 'ielts-or-cambridge',
  site: 'en',
  slug: 'ielts-or-cambridge-english-certificate',
  template: 'compare',
  course: 'English',
  theme: 'levels',
  cover: ['IELTS', 'Cambridge'],
  published: '2026-10-26',
  updated: '2026-10-26',
  title: 'IELTS or Cambridge: which English certificate should you take?',
  metaTitle: 'IELTS or Cambridge (B2 First, C1 Advanced)? How to choose – Alimun',
  desc: 'How IELTS and Cambridge English Qualifications such as B2 First and C1 Advanced differ, and which one fits a visa, a university or your CV.',
  lead: 'Both prove your English, and both are recognized around the world. They work differently, though, and **the right one depends on what you need it for**.',
  blocks: [
    { h: 'The two in short' },
    { panels: [
      ['IELTS', 'One test for every level. You get a **band from 0 to 9** in Listening, Reading, Writing and Speaking, plus an overall band. It comes in two versions: Academic, for study, and General Training, often used for work and migration.'],
      ['Cambridge', 'One exam for each level, such as **B2 First, C1 Advanced and C2 Proficiency**. You pass at the level of the exam, with a score on the Cambridge English Scale, and the certificate does not expire.'],
    ] },
    { h: 'Side by side' },
    { table: {
      head: ['', 'IELTS', 'Cambridge (B2 First, C1 Advanced)'],
      rows: [
        ['Run by', 'British Council, IDP and Cambridge University Press & Assessment', 'Cambridge University Press & Assessment'],
        ['Result', 'A band from 0 to 9 per skill and overall', 'A pass at the exam\'s level, with a Cambridge English Scale score'],
        ['Levels', 'One test for all levels', 'One exam per level, from A2 Key to C2 Proficiency'],
        ['Speaking test', 'One to one with an examiner', 'Usually in pairs, with two examiners'],
        ['How long it counts', 'Most organizations accept results up to two years old', 'The certificate does not expire, though some ask for a recent one'],
      ],
      note: 'Check the current details on the official IELTS and Cambridge English websites before you book.',
    } },
    { h: 'When IELTS is the better choice' },
    { p: 'If you need English for **a visa or migration**, IELTS is often the test the authorities name, and some require a specific version, such as General Training. It is also widely accepted by universities, especially in the UK, Australia, Canada and New Zealand.' },
    { p: 'Because everyone takes the same test, IELTS also suits you if you are **not sure of your level**: your band shows where you are, with no risk of choosing an exam that is too hard or too easy.' },
    { h: 'When Cambridge is the better choice' },
    { p: 'If you want a certificate **for your CV that lasts**, a Cambridge exam is a strong option: it does not expire, and employers and universities across Europe know B2 First and C1 Advanced well.' },
    { p: 'It suits you best when you **know your level**, since each exam targets one. Preparing for a specific exam also gives you a clear goal for your studies.' },
    { verdict: { title: 'Our advice', text: 'Start from the requirement, not the test. If a visa office, university or employer names a certificate, take that one. If the choice is yours, take **IELTS for migration and short-term needs**, and **Cambridge for a lasting proof** of a level you have already reached.' } },
    { note: { title: 'Practicing the formats', text: 'At Alimun you can practice with tasks in the format of B2 First, C1 Advanced and IELTS in the mock tests. These are not official exam materials, and Alimun is not affiliated with the exam bodies.' } },
  ],
  faq: [
    ['Is IELTS harder than Cambridge?', 'Neither is harder in itself: they are built differently. IELTS measures you on one scale, while a Cambridge exam checks whether you have reached one specific level.'],
    ['Which one do UK universities accept?', 'Most UK universities accept IELTS Academic, and many also accept Cambridge C1 Advanced or C2 Proficiency. Each university lists the tests and scores it accepts for each course.'],
    ['Can I fail a Cambridge exam?', 'If your score falls below the exam\'s level, you may receive a certificate at the level below, or no certificate if the score is too low. With IELTS you always get a band.'],
  ],
  related: ['cefr-english', 'how-long-english', 'german-articles'],
  sources: [
    ['IELTS', 'https://ielts.org'],
    ['Cambridge English Qualifications', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/'],
  ],
};
