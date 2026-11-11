// German for citizenship (Einbürgerung). Checked (Nov 2026) against the Nationality Act § 10 on gesetze-im-internet.de
// (five years, B1 in Abs. 1 Nr. 6 and Abs. 4, knowledge test in Abs. 5, exceptions in Abs. 6, Abs. 3 now repealed),
// the Federal Government's page on the law in force since 30 October 2025 that removed naturalization after three years,
// the Bundestag text archive and hib notices on that bill, the BMI notice on the reform in force since 27 June 2024,
// the federal brochure "Mein Weg zum deutschen Pass" (Stand October 2025: proof of B1, fees, exceptions, spouses of
// Germans), BAMF pages on the naturalization test (33 questions, 17 to pass, 60 minutes, 310-question pool, 25 euros),
// on integration course content (600 + 100 lessons, intensive and special courses, DTZ and Leben in Deutschland) and on
// language certificates, goethe.de (Goethe-Zertifikat B1 accepted for naturalization) and osd.at (ÖSD Zertifikat B1).
export default {
  key: 'german-citizenship',
  site: 'en',
  slug: 'german-for-citizenship-b1',
  section: 'abroad',
  course: 'German',
  published: '2026-11-04',
  updated: '2026-11-04',
  title: 'What German do you need for German citizenship?',
  metaTitle: 'German for German citizenship: the B1 requirement – Alimun',
  desc: 'The B1 German rule for naturalization in Germany, which certificates prove it, the citizenship test, the exceptions, and why the three-year route is gone.',
  lead: "Germany now lets you keep your old passport, and the standard wait is five years. What has not changed is the language: **you need German at B1**, proven on paper, plus a pass in a short test on life in Germany. This guide explains what that means and how to get there.",
  photo: 'german-citizenship-two-passports',
  sticker: { draw: 'pretzel', say: 'Five years, B1 and 17 right answers.' },
  facts: [
    { n: 5, unit: 'years', text: 'of lawful, habitual residence: the minimum for everyone since the three-year route ended on 30 October 2025' },
    { label: 'B1', text: 'the German level the Nationality Act asks for, in speaking and in writing' },
    { n: 17, unit: 'of 33', text: 'correct answers you need to pass the naturalization test, in 60 minutes' },
    { n: 255, unit: 'euros', text: 'the naturalization fee per adult, according to the federal brochure' },
  ],
  blocks: [
    { take: { title: 'The short answer', text: "To become a German citizen you need **German at level B1** of the European framework, under § 10 of the Nationality Act, and you must pass the naturalization test or the equivalent Leben in Deutschland test. Since June 2024 you can keep your other citizenship under German law and the standard residence period is five years. The three-year fast track that the same reform created **was abolished on 30 October 2025**, so five years is now the minimum for everyone applying in their own right. Rules change, so check with your local naturalization office.", draw: 'owl' } },

    { h: 'Two reforms in eighteen months' },
    { p: "If you moved to Germany from the United States, the UK, Canada or Australia, you may have read a lot of excited headlines in 2024 and some disappointed ones in 2025. Both were right. The **law to modernize German nationality law** came into force on 27 June 2024. It ended Germany's long-standing principle of avoiding multiple citizenship, cut the usual residence period from eight years to five, and added a fast track: people with special integration achievements, including very good German, could apply after only three years." },
    { p: "That fast track did not last. The new federal government proposed removing it in May 2025, the Bundestag passed the bill in October 2025, and according to the Federal Government **the law entered into force on 30 October 2025**. Its own summary is blunt: naturalization is now possible at the earliest after five years, for all applicants. A government answer to the Bundestag in February 2026 confirmed again that the three-year option no longer exists." },
    { p: "The parts of the 2024 reform that most expats cared about are still in place. You no longer have to give up your old citizenship, and five years remains the standard period. Be careful with older web pages, though: some official pages in English were written while the three-year route existed and **still mention it**. If a page talks about naturalization after three years for special integration, check its date before you plan around it." },
    { note: { title: 'Your home country has a say too', text: "German law now accepts dual citizenship, but the federal brochure warns that **your other country may have its own rules**, for example automatic loss of its citizenship when you naturalize elsewhere. Check with that country's embassy or consulate before you apply.", draw: 'suitcase' } },

    { h: 'What the law actually asks for' },
    { p: "The rules for naturalization by entitlement (Anspruchseinbürgerung) sit in § 10 of the Nationality Act (Staatsangehörigkeitsgesetz, StAG). If you meet every condition, the authority has to naturalize you; it is not a favor. Language is one condition among several, and the table below puts them side by side so you can see **where German fits in the whole application**." },
    { table: {
      head: ['Requirement', 'What it means in practice'],
      rows: [
        ['Residence', 'Five years of lawful, habitual residence in Germany; short absences such as holidays do not break it'],
        ['Residence status', 'A permanent right of residence or a residence permit meant for a long stay'],
        ['Identity', 'Your identity and citizenship, or statelessness, are clarified'],
        ['Livelihood', 'You can support yourself and your dependents from your own income, with some exceptions'],
        ['German', 'Sufficient German (ausreichende Kenntnisse), defined in the law as level B1'],
        ['Civic knowledge', 'Knowledge of the legal and social order and living conditions, usually shown by the naturalization test'],
        ['Commitments', 'A declaration of commitment to the free democratic basic order and to Germany’s historical responsibility'],
        ['Criminal record', 'No conviction for a criminal offense; ask your office how it treats minor ones'],
      ],
      note: 'Summary of § 10 (1) StAG and the federal brochure “Mein Weg zum deutschen Pass” (October 2025). Your naturalization office checks each point in your own case.',
    } },
    { p: "The language rule is short. Section 10 (1) asks that the applicant has **ausreichende Kenntnisse der deutschen Sprache**, and section 10 (4) says this is met when you meet the requirements of a language exam at level B1 of the Common European Framework of Reference for Languages. The federal brochure adds what B1 looks like in daily life: you can communicate in everyday situations and talk about familiar topics and personal interests." },
    { p: "Note the word **ausreichend**. In everyday German it sounds like “good enough”, which tempts people to assume a few classes will do. In German law it is a defined term, and it means B1, the level where you stop relying on memorized phrases and start building your own sentences. Children under 16 at the time of naturalization do not take a language test; for them the authority only checks that their German is developing in line with their age." },

    { figure: { photo: 'german-citizenship-berlin-sony-center', alt: 'People photographing a lit fountain sculpture at night in front of the Sony Center in Berlin', caption: 'Five years in a city like Berlin can pass in English. The naturalization office will still ask for B1 German on paper.' } },

    { h: 'How you prove B1' },
    { p: "Most applicants prove B1 with a certificate, but the brochure published by the Federal Government's Commissioner for Migration lists several kinds of proof. It also says that if you completed an integration course successfully, or earned a German school or university qualification in Germany, the authority can assume your German is good enough. If the office is already convinced of your German it may waive part of the proof; **if it has doubts, you take a test**." },
    { table: {
      head: ['Kind of proof', 'Examples'],
      rows: [
        ['Integration course', 'A BAMF certificate that you completed the course successfully, with B1 in the Deutsch-Test für Zuwanderer (DTZ)'],
        ['Language certificate', 'The DTZ at B1, or an equivalent or higher certificate, such as the Goethe-Zertifikat B1 or the ÖSD Zertifikat B1'],
        ['School in German', 'Four years at a German-language school with promotion each year, a German Hauptschulabschluss, or promotion to grade 10 of a German-language secondary school'],
        ['Higher education', 'A graduation certificate from a German-language university or university of applied sciences'],
      ],
      note: 'From the federal brochure (October 2025), BAMF, goethe.de and osd.at. A higher level, for example a B2 or C1 certificate, also proves B1. Ask your naturalization office which proof it accepts before booking an exam.',
    } },
    { p: "For most adult expats the realistic choices are the DTZ, which you normally take at the end of an integration course, and a general B1 exam such as the Goethe-Zertifikat B1. The Goethe-Institut states that **its B1 certificate is accepted as language proof for naturalization** in Germany, as well as for a settlement permit, and the ÖSD says the same of its Zertifikat B1. The DTZ is run for the BAMF by telc and g.a.s.t." },
    { p: "There is one trap in the DTZ. It is a scaled exam: everyone sits the same paper, and the certificate shows **either A2 or B1**, depending on your results. A2 is useful for some residence permits, but it does not meet the citizenship requirement. If your goal is a German passport, you need the B1 result, not just a pass." },
    { p: "The Goethe-Zertifikat B1 has four modules, reading, listening, writing and speaking, and each is passed with at least 60 percent. You can take them separately or together, which helps if one skill lags behind. Our guides to the Goethe certificates and to the main German exams compared go through formats and scoring in detail." },

    { cta: true },

    { h: 'The naturalization test and Leben in Deutschland' },
    { p: "Language is only half of the knowledge requirement. Under § 10 (5) you also show that you know the legal and social order and living conditions in Germany, normally by passing the **naturalization test (Einbürgerungstest)**. The test is run on behalf of the BAMF, and you register through a test center your naturalization office can name." },
    { p: "According to the BAMF, you get a test sheet with **33 questions**: 30 general questions and three about the federal state where you have your main residence. You have 60 minutes, and you pass with at least 17 correct answers. If you score less, you can take it again. All questions come from a published catalog of 310, of which 300 are general and ten belong to each state, and you can practice the whole catalog for free in the BAMF online test center. The test costs 25 euros." },
    { table: {
      head: ['Naturalization test', 'Figure'],
      rows: [
        ['Questions on the sheet', '33 (30 general, 3 on your federal state)'],
        ['Correct answers needed', 'At least 17'],
        ['Time', '60 minutes'],
        ['Published question pool', '310 (300 general, 10 per federal state)'],
        ['Fee', '25 euros'],
      ],
      note: 'Source: BAMF, naturalization page. Fees can change; check the BAMF or your test center before you register.',
    } },
    { p: "If you take an integration course, you do not need a separate naturalization test. The course ends with the **Leben in Deutschland** test, which according to the federal brochure has the same questions and the same procedure. With the integration course certificate and at least 17 of 33 points in that test, the BAMF says you have proven your knowledge of the legal and social order. A German school leaving certificate also exempts you from the naturalization test." },
    { p: "Do not underestimate the language in the test itself. The questions are multiple choice, but they are written in German and use words like Grundgesetz, Bundesrat, Wahlrecht and Sozialversicherung. People who prepare with the catalog at A2 often end up memorizing answers; at B1 you **understand the questions instead of recognizing them**, which is a much safer way to reach 17." },
    { examples: [
      ['Ich wohne seit fünf Jahren in Deutschland.', 'I have lived in Germany for five years. (German uses the present tense with seit for something still going on)'],
      ['Ich habe den Antrag auf Einbürgerung gestellt.', 'I have submitted the application for naturalization. (the standard phrase on forms and in letters)'],
      ['Könnten Sie mir bitte erklären, welche Unterlagen noch fehlen?', 'Could you please explain which documents are still missing? (polite B1 request at the office)'],
      ['Ich bekenne mich zur freiheitlichen demokratischen Grundordnung.', 'I commit to the free democratic basic order. (the wording of the declaration you sign)'],
    ] },

    { h: 'Exceptions: age, illness, disability and hardship' },
    { p: "Section 10 (6) of the Nationality Act waives the German and civic knowledge requirements when an applicant **cannot meet them because of a physical, mental or psychological illness or disability, or because of age**. The federal brochure explains how this works in practice: the office decides case by case, you usually need a doctor's certificate, and sometimes a public health officer (Amtsarzt) has to confirm it. Age alone is not a fixed cutoff; the question is whether learning German has become very hard for you." },
    { p: "Two more groups have a lower requirement. Former guest workers who came to West Germany by 30 June 1974, and former contract workers who came to the GDR by 13 June 1990, only need to **communicate orally in everyday German**, and they do not take the naturalization test. The same applies to their spouses if they joined them around the same time. The brochure also describes a hardship rule: if reaching B1 is impossible or permanently much harder because of your life situation, for example because you care for a relative who needs permanent care, everyday German can be enough." },
    { p: "None of these exceptions is likely to apply to a working expat in their thirties or forties. For most readers of this guide, the realistic plan is to reach B1 and get it on paper. People who struggle with reading and writing are still expected to prove the required German, and **integration courses with literacy training** exist for them." },

    { figure: { photo: 'german-citizenship-writing-practice', alt: 'A hand holding a ruler on an open spiral notebook while another hand writes with a pen', caption: 'B1 writing means short letters and emails with a clear purpose: the kind you send to a landlord, a school or an office.' } },

    { h: 'What B1 really means, compared with A2' },
    { p: "Many expats in Germany sit at A2 for years. They shop, order, make small talk with neighbors, and switch to English as soon as a conversation gets complicated. B1 is the step where **you can stay in German when something goes wrong**: a missing document, a misunderstanding with a landlord, a call from your child's school. The descriptions below follow the European framework and show what each level means for life in Germany and for the exam." },
    { levels: [
      ['A2', 'Everyday routine', "You handle short, predictable exchanges: making an appointment, asking for directions, describing your family and job in simple sentences. **The DTZ can certify A2, but it does not meet the citizenship rule.**"],
      ['B1', 'Independent', "You follow the main points of clear speech on familiar topics, deal with most situations at offices and on the phone, write a short letter or email with a request or complaint, and explain your plans and opinions. **The level of § 10 StAG.**"],
      ['B2', 'Confident', "You follow longer discussions, argue a point, understand the news and write clear, detailed texts. Not required for citizenship, but a B2 certificate also proves B1, and it opens many more jobs."],
    ] },
    { p: "The gap between A2 and B1 is less about vocabulary and more about **building your own sentences in real time**. At B1 you use subordinate clauses with weil, dass and wenn, talk about the past with the perfect tense, and keep a conversation going when you do not know a word. It is also where speaking and writing start to matter as much as reading, and the exams test all four skills." },
    { mistakes: [
      ['Ich lebe hier für fünf Jahre.', 'Ich lebe seit fünf Jahren hier.', 'For something that started in the past and continues, German uses seit with the present tense, not für.'],
      ['Ich lerne Deutsch, weil ich will den Pass.', 'Ich lerne Deutsch, weil ich den Pass möchte.', 'After weil the verb goes to the end. Getting this right consistently is typical of B1.'],
      ['Ich bin bei dem Amt gegangen.', 'Ich bin zum Amt gegangen.', 'Movement toward a place takes zu (zum, zur) or in, not bei, which means at someone’s place.'],
    ] },

    { h: 'From A2 to B1: courses and time' },
    { p: "Germany's main state-funded route to B1 is the **integration course (Integrationskurs)**, organized by the BAMF. According to the BAMF, the general course has 600 lessons of German and 100 lessons of orientation on law, history and society, 700 in total. An intensive course for fast learners has 400 lessons of German plus the same 100 of orientation. Special courses, for example for young adults, parents or people learning to read and write, can have up to 900 lessons of German and up to 1,000 in total." },
    { p: "The course ends with the DTZ and the Leben in Deutschland test, so it covers **both citizenship requirements at once**. Whether you can join, and whether you pay, depends on your residence status and situation, and admission rules have changed recently. Our guide to the integration course explains who is eligible and how to apply." },
    { p: "If you work full time, a fixed daytime course is often hard to fit in, and many expats study in the evening instead and then book the exam themselves. A Goethe, telc or ÖSD B1 certificate earned that way is a normal route to citizenship. What counts in the end is **a certificate the naturalization office accepts**, not where you learned." },
    { p: "How long it takes depends on your starting point and how much you speak between lessons. People who reach A2 through daily life often understand more than they can say, so the work for B1 is mostly speaking and writing: structured practice, correction, and the courage to use longer sentences. A level test tells you where you really are, and at Alimun **live classes with a teacher in a small group**, with homework your teacher corrects, are built to move you from one level to the next." },

    { figure: { photo: 'german-citizenship-fountain-pen', alt: 'A fountain pen lying on old paper next to white flower petals', caption: 'The last step is a signature: the declaration of commitment, and then the naturalization certificate itself.' } },

    { h: 'Planning your application' },
    { p: "Start with the calendar. Count your five years of lawful, habitual residence and plan backwards: you want the B1 certificate and the naturalization test result ready when you reach that date, not six months after it. **Processing times vary between states and cases**, so applying on time matters, and the federal brochure advises asking your local office early about anything unclear." },
    { p: "Budget for more than the main fee. The brochure gives 255 euros per adult and 51 euros for each minor child without their own income who is naturalized with a parent, and it points out that the naturalization test, identity documents and the language certificate cost extra. Fee reductions or payment in installments can be possible if you cannot pay." },
    { p: "Finally, look at your family situation. If you are married to a German citizen, the brochure describes a different route: you generally qualify after three years of lawful residence if the marriage has lasted at least two years, with the **same B1 German** as everyone else. Spouses and minor children of an applicant can usually be naturalized together with them, and children under 16 can generally join after three years of residence. These rules are separate from the abolished fast track, so ask your naturalization office how they apply to you." },
    { p: "Whatever your route, B1 is the one requirement you can start on today, and the German you build for the exam is the German you will use at the office, at work and with your neighbors. Check the official pages for your own case before you apply, because fees, forms and even the law have changed more than once in the last two years." },
  ],
  quiz: [
    { q: 'What German level does § 10 of the Nationality Act require for naturalization?', options: ['A2', 'B1', 'B2', 'C1'], a: 1, why: 'Section 10 (4) StAG defines ausreichende Kenntnisse as meeting a B1 exam of the European framework.' },
    { q: 'What is the minimum residence period for naturalization in your own right today?', options: ['Three years', 'Five years', 'Six years', 'Eight years'], a: 1, why: 'The three-year route was abolished on 30 October 2025; five years now applies to all applicants.' },
    { q: 'When did the law abolishing naturalization after three years enter into force?', options: ['27 June 2024', '1 January 2025', '30 October 2025', '1 January 2026'], a: 2, why: 'According to the Federal Government, the law entered into force on 30 October 2025.' },
    { q: 'How many correct answers do you need to pass the naturalization test?', options: ['15 of 30', '17 of 33', '20 of 33', '25 of 33'], a: 1, why: 'The BAMF says you pass with at least 17 correct answers out of 33.' },
    { q: 'Which DTZ result meets the citizenship requirement?', options: ['A1', 'A2', 'B1', 'Any pass'], a: 2, why: 'The DTZ certifies A2 or B1, and only B1 meets the B1 rule in § 10 StAG.' },
    { q: 'Which of these can replace the naturalization test?', options: ['A Goethe-Zertifikat A2', 'The Leben in Deutschland test with at least 17 of 33 points and the integration course certificate', 'A driving license test', 'A letter from your employer'], a: 1, why: 'The BAMF accepts the Leben in Deutschland result with the integration course certificate instead of the naturalization test.' },
    { q: 'How many lessons of German does the general integration course have?', options: ['300', '400', '600', '900'], a: 2, why: 'The general course has 600 lessons of German and 100 of orientation.' },
    { q: 'Do you have to give up your US citizenship to become German?', options: ['Yes, always', 'Only if you are over 40', 'Not under German law since June 2024, though your other country may have its own rules', 'Only if you apply after five years'], a: 2, why: 'Since 27 June 2024 German law allows multiple citizenship; the other country’s law may still differ.' },
  ],
  faq: [
    ['Can I still get German citizenship after three years?', 'Not through the special integration route: it was abolished by a law in force since 30 October 2025, and five years is now the minimum for applicants in their own right. Spouses of German citizens have a separate route, generally after three years of residence and two years of marriage, still with B1 German.'],
    ['Is a Goethe-Zertifikat B1 enough for naturalization?', 'The Goethe-Institut states that its B1 certificate is accepted as language proof for naturalization in Germany. The DTZ at B1, the ÖSD Zertifikat B1 and higher certificates are also used. Ask your naturalization office which proof it accepts before you book.'],
    ['Do I need the naturalization test if I did the integration course?', 'No, if you have the integration course certificate and at least 17 of 33 points in the Leben in Deutschland test. The two tests use the same questions. A German school leaving certificate also exempts you.'],
    ['Are older applicants exempt from the language requirement?', 'There is no automatic age limit. The law waives the German and knowledge requirements when age, illness or disability makes it impossible to meet them, and the office decides case by case, usually with a medical certificate.'],
  ],
  related: ['german-for-work', 'goethe-certificates', 'german-exams-compared', 'integration-course'],
  sources: [
    ['Nationality Act § 10 (gesetze-im-internet.de)', 'https://www.gesetze-im-internet.de/stag/__10.html'],
    ['Federal Government: citizenship at the earliest after five years (law in force 30 October 2025)', 'https://www.bundesregierung.de/breg-de/aktuelles/kabinett-einbuergerung-2350620'],
    ['Bundestag: abolition of naturalization after three years', 'https://www.bundestag.de/dokumente/textarchiv/2025/kw26-de-staatsangehoerigkeit-1084776'],
    ['BMI: new nationality law in force (27 June 2024)', 'https://www.bmi.bund.de/SharedDocs/kurzmeldungen/DE/2024/06/mod-staatsangehoerigkeitsrecht.html'],
    ['Federal brochure “Mein Weg zum deutschen Pass” (October 2025)', 'https://www.einbuergerung.de/assets/files/Mein_Weg_zum_deutschen_Pass_Broschuere.pdf'],
    ['BAMF: naturalization and the naturalization test', 'https://www.bamf.de/EN/Themen/Integration/ZugewanderteTeilnehmende/Einbuergerung/einbuergerung-node.html'],
    ['BAMF: integration course content and structure', 'https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/InhaltAblauf/inhaltablauf-node.html'],
    ['Goethe-Institut: Goethe-Zertifikat B1', 'https://www.goethe.de/ins/de/de/prf/gzb1.cfm'],
  ],
};
