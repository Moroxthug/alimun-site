// Third design (docs/BLOG_PLAN.md). Facts checked 10 Nov 2026 against gov.uk: the SELT guidance page and its
// "List of approved Secure English Language Tests taken outside the UK" (ODS, CEFR levels and minimum scores per
// test), Student visa "knowledge of English", Skilled Worker "knowledge of English" (B2 from 8 January 2026) and
// Immigration Rules Appendix English Language (EL 6.1 two-year rule, EL 8.1-8.2 higher education provider
// assessment) and Appendix Student (ST 13.1, ST 13.3); cambridgeenglish.org: "Comparing scores to IELTS"
// (B2 First and C1 Advanced, Oct 2019), the UK visas and UK and USA study abroad pages; studyinthestates.dhs.gov
// on English requirements for US study; ielts.org on scoring and the two-year validity. The general IELTS vs
// Cambridge comparison lives in ielts-or-cambridge.js and is not repeated here. No fees given (they vary by
// country and test center). Alimun is not affiliated with any exam body or with UK Visas and Immigration.
export default {
  key: 'c1-advanced-or-ielts',
  site: 'en',
  slug: 'c1-advanced-or-ielts-uk-visa',
  section: 'exams',
  course: 'English',
  published: '2026-11-10',
  updated: '2026-11-10',
  title: 'C1 Advanced or IELTS for a UK visa and for university?',
  metaTitle: 'C1 Advanced or IELTS for a UK visa or university? – Alimun',
  desc: 'Is C1 Advanced accepted for a UK visa? Which tests the Home Office approves, when a university can accept Cambridge, and how C1 scores compare to IELTS.',
  lead: 'For a UK visa the question is not which test is better but **which test the Home Office will accept** for your route. C1 Advanced is not on that list, yet it can still support a UK Student visa. Here is how both of those things can be true.',
  photo: 'c1-advanced-or-ielts-passport-table',
  sticker: { draw: 'suitcase', say: 'Check the route before you book the test.' },
  facts: [
    { n: 5, text: 'organizations approved by the Home Office to run Secure English Language Tests, IELTS among them' },
    { n: 2, unit: 'years', text: 'how old a SELT result can be on the day you apply for a UK visa' },
    { n: 185, text: 'the C1 Advanced score Cambridge lines up with an IELTS band of 7.0' },
    { label: 'B2', text: 'the English level needed for a Student visa at degree level, and for most Skilled Worker applications' },
  ],
  blocks: [
    { take: { title: 'The short answer', text: "For a UK visa that needs a Secure English Language Test (SELT), C1 Advanced does not count: you need an approved test such as **IELTS for UKVI**, taken at an approved center. For a Student visa at degree level, though, your university can assess your English itself, and **almost all UK universities accept C1 Advanced** for that. So C1 Advanced works for many students and for admissions; IELTS for UKVI works for every visa route that asks for a SELT.", draw: 'owl' } },

    { p: "We have a separate guide to how IELTS and the Cambridge exams differ in format, scoring and style. This article answers a narrower question, the one people type into search when a visa or an application deadline is close: **can I use C1 Advanced instead of IELTS** for the UK, and does it matter for universities in the UK and the US?" },

    { h: 'What the Home Office means by a SELT' },
    { p: "Many UK visa routes ask you to prove your English. One way of doing that is a Secure English Language Test, or SELT: a test from a provider the Home Office has approved, taken at a test center it has approved, at the level your route requires. The government guidance is blunt about it: only the tests and test levels on its list are approved, and a result counts only if it was **sat at an approved test location**." },
    { p: "The list is short. Outside the UK, the approved providers are the IELTS SELT Consortium, LanguageCert, Pearson and PSI Services. Inside the UK, Trinity College London is also on the list, while PSI is not. Each provider has specific products that count: for IELTS these are **IELTS for UKVI** and IELTS Life Skills. A standard IELTS Academic or General Training result booked through the normal route is not on the list, even though the test itself is familiar." },
    { table: {
      head: ['Provider', 'Approved tests (names as on gov.uk)', 'Where'],
      rows: [
        ['IELTS SELT Consortium', 'IELTS for UKVI, IELTS Life Skills', 'In and outside the UK'],
        ['LanguageCert', 'LanguageCert Academic SELT, LanguageCert General SELT', 'In and outside the UK'],
        ['Pearson', 'PTE Academic UKVI, PTE Home', 'In and outside the UK'],
        ['PSI Services', 'Skills for English UKVI', 'Outside the UK'],
        ['Trinity College London', 'Integrated Skills in English (ISE), Graded Examinations in Spoken English (GESE)', 'In the UK'],
      ],
      note: 'From the gov.uk SELT guidance, checked 10 November 2026. The list and the approved centers change; check the official page before you book.',
    } },
    { p: "Cambridge English Qualifications, C1 Advanced included, **do not appear on the list**. That answers the most common search on this topic directly. If your visa route asks for a SELT, a C1 Advanced certificate will not meet that requirement, however high your score." },

    { h3: 'Which routes test which skills' },
    { p: "The guidance also splits visa routes by what the test must cover. Routes such as Student, Skilled Worker, Health and Care Worker, High Potential Individual, Scale-up and Innovator Founder need a test of **reading, writing, speaking and listening**. Family routes such as partner and parent, settlement and citizenship need speaking and listening only, which is why tests like IELTS Life Skills exist." },
    { p: "The level depends on the route. A Student visa for a course at bachelor's degree level or above needs **CEFR level B2**; a course below degree level, or a pre-sessional course, needs B1. For Skilled Worker, most applications now need B2: the requirement rose from B1, and people who already held the visa before 8 January 2026 can still extend at B1." },

    { h: 'What scores you need on IELTS for UKVI' },
    { p: "The approved-test list gives the minimum score for each level, and for IELTS for UKVI it is set **per skill, not overall**. That detail catches people out. An overall band of 6.5 with a 5.0 in Writing does not meet B2." },
    { table: {
      head: ['CEFR level', 'IELTS for UKVI: minimum in each of the four skills'],
      rows: [
        ['B1', '4.0 in Listening, Reading, Writing and Speaking'],
        ['B2', '5.5 in Listening, Reading, Writing and Speaking'],
        ['C1', '7.0 in Listening, Reading, Writing and Speaking'],
        ['C2', '8.5 in Listening, Reading, Writing and Speaking'],
      ],
      note: 'From the gov.uk list of approved Secure English Language Tests taken outside the UK. Universities and employers often set higher scores than the visa minimum.',
    } },
    { p: "These are the Home Office minimums for the visa. A university can, and usually does, ask for more for admission. So the number that matters for a student is normally the one on the course page, and the visa minimum is only the floor beneath it." },

    { h3: 'How long a result stays valid' },
    { p: "For a visa, a SELT result must have been awarded **in the two years before the date of your application**. The rule is about the date you apply, not the date you travel, so a result from 23 months ago is fine if you apply this week and useless if you wait two more months. Plan the test so the result is fresh when you submit." },
    { p: "This is also where the Cambridge certificate's best feature stops helping. A C1 Advanced certificate has no expiry date of its own, which is excellent for a CV, but the Home Office does not use Cambridge certificates as SELTs, so the question of age never comes up for the visa." },

    { h: 'How C1 Advanced still gets students a UK visa' },
    { figure: { photo: 'c1-advanced-or-ielts-luggage', alt: 'A stack of old suitcases covered in travel stickers', caption: 'For degree-level study, the university can decide how to check your English before you pack.' } },
    { p: "Here is the part many forums get wrong. The Student route does not always require a SELT. If you are going to study at **bachelor's degree level or above** and your sponsor is a higher education provider with a track record of compliance, the Immigration Rules let that university assess your English itself." },
    { p: "When it does, it has to confirm on your Confirmation of Acceptance for Studies (the CAS, the reference number your visa application is built on) that it has assessed your English and how. The level still has to be **B2 or above in all four skills**. What changes is who decides which evidence proves it. The university can choose to accept C1 Advanced, a standard IELTS Academic result, another test or its own assessment." },
    { p: "Cambridge says that almost all UK universities accept C1 Advanced and C2 Proficiency for undergraduate and postgraduate degrees, and that if you have one of these and are accepted by such a university, you do not need an extra English exam for your Student visa application. That fits the rule above. The point to check is your own offer: **the method of assessment written on your CAS** is what the visa officer will look at." },
    { note: { title: 'When you still need a SELT as a student', text: "If your course is below degree level, such as a foundation course or a pre-sessional English course, or your sponsor is not a higher education provider assessing English itself, you may need a SELT for the visa. Cambridge itself recommends IELTS for UKVI in that case. Ask the admissions office before you book anything.", draw: 'snail' } },

    { h3: 'People who do not need to prove English at all' },
    { p: "Some applicants skip the question entirely. Nationals of a list of majority English-speaking countries, including Australia, Canada, New Zealand and the United States, meet the requirement through nationality. A degree taught in English can also count, but a degree from outside the UK needs an assessment from Ecctis confirming it is equivalent to a UK bachelor's degree or higher and was taught in English. A UK school qualification such as a GCSE or A Level in English, started before 18, is another route on the Student and Skilled Worker pages." },

    { cta: true },

    { h: 'Comparing C1 Advanced scores with IELTS bands' },
    { p: "Universities that accept both tests need a way to translate one into the other, and Cambridge publishes one. Both C1 Advanced and B2 First report results on the Cambridge English Scale, and IELTS is mapped to that same scale. The table below is from Cambridge's official guide **Comparing scores to IELTS**." },
    { table: {
      head: ['IELTS band', 'Cambridge English Scale score'],
      rows: [
        ['7.5', '191'],
        ['7.0', '185'],
        ['6.5', '176'],
        ['6.0', '169'],
        ['5.5', '162'],
        ['5.0', '154'],
      ],
      note: 'Source: Cambridge Assessment English, "Comparing scores to IELTS: B2 First and C1 Advanced" (October 2019). Cambridge stresses that exact equivalences cannot always be shown, only broad comparability.',
    } },
    { p: "Cambridge explains what that means in practice. A candidate who passes C1 Advanced at grade C, with a score from 180 to 192, is at C1 and **comparable to someone with 6.5 or 7.0 in IELTS**. A C1 Advanced score from 160 to 179 places you at B2, comparable to 5.5 or 6.0." },
    { p: "Cambridge also gives worked examples for admissions offices. Where a course asks for IELTS 6.5 overall with no skill below 6.0, the matching requirement is an overall score of **176 from C1 Advanced** with no paper below 169. Where a course asks for 7.0 overall, the matching score is 185, and Cambridge suggests it may be appropriate to require that score from C1 Advanced rather than B2 First." },
    { p: "That last point matters if you hold B2 First with a high score. A B2 First score from 180 to 190 does place you at C1, but Cambridge itself says the exam covers that level only in a limited way, and that **very careful consideration** is needed before treating it as equal to IELTS 7.0. Many universities therefore name C1 Advanced or C2 Proficiency, not B2 First, for degree courses." },
    { h3: 'Read the requirement line by line' },
    { p: "Course pages usually state the Cambridge requirement in one of these forms: a minimum overall Cambridge English Scale score, a minimum in each skill, or both. Your Statement of Results shows exactly those numbers, an overall score plus a separate score for Reading, Writing, Listening, Speaking and Use of English. Compare them one by one. A strong overall score with one weak paper can fall short, just as in IELTS." },

    { h: 'And for universities in the United States?' },
    { figure: { photo: 'c1-advanced-or-ielts-airport-people', alt: 'Travelers with luggage walking through a bright glass terminal', caption: 'In the US there is no government English test for student visas; each school sets its own rule.' } },
    { p: "The US works very differently from the UK. The Student and Exchange Visitor Program does **not regulate how well an international student must speak English**. Each school sets its own English requirement as part of admission, and it should only issue the Form I-20 for your F-1 visa once you meet that requirement." },
    { p: "So for the US, the visa is not the question; the school's admission page is. Cambridge says hundreds of US universities and colleges accept C1 Advanced and C2 Proficiency for admission. Study in the States notes that many schools ask for a test such as TOEFL or IELTS, and some list only those. If you are applying to several US schools, check each one: a test that every school on your list accepts saves you a second exam. Our guide to TOEFL and IELTS covers that choice in more detail." },

    { h: 'So which one should you take?' },
    { quote: 'Book the test your route names, not the one with the better reputation.' },
    { p: "If your visa route needs a SELT, the decision is made for you: take an approved test at an approved center. For most people choosing between the two in this article, that means **IELTS for UKVI**, and it covers every route that asks for a four-skill SELT, from Skilled Worker to below-degree Student applications. Family, settlement and citizenship routes that test only speaking and listening also accept IELTS Life Skills." },
    { p: "If you are applying for a degree in the UK and your university assesses English itself, C1 Advanced is a strong option, especially if you already hold one, since the certificate itself does not expire. Confirm in writing that your university accepts it for your course, at what score, and that it will state this on your CAS." },
    { p: "If you are not sure yet whether you will need a SELT, for example because you might switch routes or apply for a pre-sessional course first, IELTS for UKVI keeps more doors open. If you take it, choose the Academic version for university study and ask your university whether it accepts that result for admission as well." },
    { panels: [
      ['IELTS for UKVI', "Accepted by the Home Office as a SELT for every route that needs one, at a level set per skill. Results count for a visa for **two years**. It is also an IELTS result universities can use, as long as you choose the Academic or General Training version that your course or route asks for."],
      ['C1 Advanced', "Not a SELT, so it cannot meet a SELT requirement. It works for degree-level Student visas where the university assesses your English and accepts it, and for admissions at **almost all UK universities**. The certificate itself does not expire."],
    ] },

    { h: 'Preparing for the level, not just the test' },
    { p: "Whichever test you book, the level behind it is the same. B2 for a degree-level Student visa, or IELTS 5.5 in every skill, is only the floor; a course that asks for IELTS 6.5 with no skill below 6.0 is asking for **176 on C1 Advanced** with no paper below 169. Because the requirement is set skill by skill, your weakest skill decides the result, so give it the most practice." },
    { p: "At Alimun you can work toward that level in live online classes with a teacher and a small group, and practice tasks in the format of IELTS and C1 Advanced along the way. If you are not sure whether you are at B2 or already at C1, the free level test is a quick way to find out before you choose a date." },
    { p: "Leave yourself a margin of time too. A SELT result has to be less than two years old when you apply, IELTS results arrive faster on a computer than on paper, and a university needs your result before it can issue an unconditional offer and a CAS. Work backward from your application date, not forward from today." },
  ],
  quiz: [
    { q: 'Is C1 Advanced an approved Secure English Language Test (SELT) for UK visas?', options: ['Yes, for every route', 'Yes, but only for Skilled Worker', 'No, it is not on the approved list', 'Only if taken on a computer'], a: 2, why: 'Cambridge English Qualifications do not appear on the Home Office list of approved SELTs.' },
    { q: 'Which IELTS products are on the UK approved SELT list?', options: ['IELTS Academic and General Training booked normally', 'IELTS for UKVI and IELTS Life Skills', 'Only IELTS Online', 'Any IELTS taken in the last five years'], a: 1, why: 'The gov.uk guidance lists IELTS for UKVI and IELTS Life Skills from the IELTS SELT Consortium.' },
    { q: 'What IELTS for UKVI score is needed for CEFR B2?', options: ['5.5 overall', '5.5 in each of the four skills', '6.5 overall', '7.0 in each skill'], a: 1, why: 'For B2 the approved-test list sets 5.5 in Listening, Reading, Writing and Speaking.' },
    { q: 'How old can a SELT result be when you apply for a UK visa?', options: ['Six months', 'One year', 'Two years', 'There is no limit'], a: 2, why: 'The test must have been awarded in the two years before the date of the application.' },
    { q: 'Who can assess a degree-level student’s English instead of a SELT?', options: ['The British Council', 'A higher education provider with a track record of compliance', 'Any English teacher', 'The airline'], a: 1, why: 'Under Appendix English Language, such a provider can assess English and must state the method on the CAS.' },
    { q: 'Which English level does a Student visa for a bachelor’s degree require?', options: ['A2', 'B1', 'B2', 'C1'], a: 2, why: 'Degree level and above needs B2 in all four skills; below degree level needs B1.' },
    { q: 'According to Cambridge, which C1 Advanced score lines up with IELTS 7.0?', options: ['162', '176', '185', '200'], a: 2, why: 'Cambridge maps IELTS 7.0 to 185 on the Cambridge English Scale.' },
    { q: 'Who sets the English requirement for an F-1 student in the United States?', options: ['The US government, with one fixed test', 'Each school, as part of admission', 'The British Council', 'Nobody, English is never checked'], a: 1, why: 'SEVP does not regulate English level; each school sets its own requirement before issuing the Form I-20.' },
  ],
  faq: [
    ['Can I use C1 Advanced for a UK Skilled Worker visa?', 'Not as a SELT. If you need to prove English with a test for Skilled Worker, it has to be an approved Secure English Language Test such as IELTS for UKVI, at B2 in each skill for most applications. You may be exempt or able to use a degree taught in English instead; check the gov.uk page for your route.'],
    ['Is C1 better than IELTS?', 'Neither is better in general. For a SELT route only an approved test such as IELTS for UKVI counts. For university admissions, both are widely accepted, and Cambridge maps a C1 Advanced pass at grade C to roughly IELTS 6.5 to 7.0. The better choice is the one your visa route and your course accept.'],
    ['Do I need IELTS for UKVI or is normal IELTS enough for a UK university?', 'If your university assesses your English itself for a degree-level course, it may accept a standard IELTS Academic result. If you need a SELT, for example for a course below degree level, you need IELTS for UKVI taken at an approved center. Ask the admissions office which applies to you.'],
    ['Does my C1 Advanced certificate expire for university applications?', 'The certificate has no expiry date, but universities can set their own rule about how recent a result must be. Check the English language page of your course.'],
  ],
  related: ['ielts-or-cambridge', 'ielts-band-scores', 'toefl-or-ielts', 'b2-first', 'cefr-english', 'how-long-english'],
  sources: [
    ['Prove your English language abilities with a SELT (gov.uk)', 'https://www.gov.uk/guidance/prove-your-english-language-abilities-with-a-secure-english-language-test-selt'],
    ['List of approved SELTs taken outside the UK (gov.uk)', 'https://assets.publishing.service.gov.uk/media/68da41cd750fcf90fa6ffb33/List_of_approved_Secure_English_Language_Tests_taken_outside_the_UK+_1_.ods'],
    ['Student visa: knowledge of English (gov.uk)', 'https://www.gov.uk/student-visa/knowledge-of-english'],
    ['Skilled Worker visa: knowledge of English (gov.uk)', 'https://www.gov.uk/skilled-worker-visa/knowledge-of-english'],
    ['Immigration Rules: Appendix English Language (gov.uk)', 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-english-language'],
    ['Immigration Rules: Appendix Student (gov.uk)', 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student'],
    ['Comparing scores to IELTS: B2 First and C1 Advanced (Cambridge)', 'https://www.cambridgeenglish.org/Images/461626-cambridge-english-qualifications-comparing-scores-to-ielts.pdf'],
    ['IELTS test format and results timing (British Council)', 'https://takeielts.britishcouncil.org/take-ielts/prepare/test-format'],
    ['Cambridge English for UK visas and immigration', 'https://www.cambridgeenglish.org/why-choose-us/visas-and-immigration/uk'],
    ['Cambridge English for study in the UK', 'https://www.cambridgeenglish.org/why-choose-us/study-abroad/uk'],
    ['Cambridge English for study in the USA', 'https://www.cambridgeenglish.org/why-choose-us/study-abroad/usa'],
    ['Do I need to pass an English language test to study in the United States? (Study in the States)', 'https://studyinthestates.dhs.gov/2016/01/do-i-need-to-pass-an-english-language-test-to-study-in-the-united-states'],
  ],
};
