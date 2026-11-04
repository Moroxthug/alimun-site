// The German integration course (Integrationskurs). Checked 4 Nov 2026 against bamf.de: the integration course
// pages "Inhalt und Ablauf", "Abschlussprüfung mit Zertifikat", "Spezielle Kursarten" and "Teilnahme und Kosten"
// (subpages for EU citizens, German citizens and residence titles from 2005, dated 2 Nov 2026: entitlement,
// obligation, 2.29 euros per lesson, exemptions, travel subsidy, 50 percent refund), the BAMF information letter
// "Wiederzulassung von bestimmten Personengruppen nach § 44 Abs. 4 AufenthG" (as of August 2026: end of the
// admission freeze, readmission from 1 August 2026, priority groups, equal shares, order of receipt) and the BAMF
// page on job-related language courses (13 Oct 2026: levels, requirements, 2.56 euros per teaching unit).
// Integration Course Ordinance (IntV) on gesetze-im-internet.de: § 5 (admission, priority groups), § 9 (fee,
// exemptions, refund within two or three years), §§ 10 to 13 (700 lessons, 600 + 100, basic and advanced course,
// special courses up to 900 + 100, intensive course 500), § 14 (maximum 25 participants, online courses, 1,200-lesson
// cap) and § 17 (DTZ A2 to B1, Leben in Deutschland, Zertifikat Integrationskurs, BAMF pays the tests).
// The 9 February 2026 circular (groups affected, self-payment exception) comes from the EUAA report; DeuFöV title on gesetze-im-internet.de.
export default {
  key: 'integration-course',
  site: 'en',
  slug: 'integration-course-germany',
  section: 'abroad',
  course: 'German',
  published: '2026-11-04',
  updated: '2026-11-04',
  title: 'The German integration course explained: who can join, what it costs, what changed in 2026',
  metaTitle: 'German integration course (Integrationskurs) explained – Alimun',
  desc: 'Who must or may take the German integration course, its 700 lessons, the 2.29-euro lesson fee, exemptions, the final tests and the 2026 admission changes.',
  lead: "The integration course is Germany's state-funded German course for newcomers: 600 lessons of language, 100 lessons on life in Germany and two final tests. For some people it is a right, for some an obligation, and for others **a place that depends on the budget**, which is exactly what changed in 2026. This guide explains where you fit and what the alternatives are.",
  photo: 'integration-course-apple-books',
  sticker: { draw: 'pretzel', say: 'Six hundred lessons of German, one hundred of Germany.' },
  facts: [
    { n: 700, unit: 'lessons', text: 'in the general integration course: 600 of language and 100 of orientation' },
    { n: 2.29, unit: 'euros', text: 'the fee per lesson for those who are not exempt, so 1,603 euros for the general course' },
    { n: 50, unit: 'percent', text: 'of the fee you can get back if you pass within two years of your eligibility certificate' },
    { label: '1 August 2026', text: 'when the BAMF began admitting voluntary participants again, within the places the budget allows' },
  ],
  blocks: [
    { take: { title: 'The short answer', text: "If you came to Germany from outside the EU on a long-term residence permit issued since 2005, you are usually **entitled to an integration course**, and the foreigners authority can oblige you to take it if your German is weak. EU citizens and Germans have no entitlement: since 1 August 2026 the BAMF admits them again, but only within the available places and with priority for people who should return to the job market. The course costs 2.29 euros per lesson unless you are exempt, and it ends with the DTZ language test and the Leben in Deutschland test.", draw: 'owl' } },

    { h: 'What the integration course is' },
    { p: "The integration course (Integrationskurs) is run on behalf of the Federal Office for Migration and Refugees, the BAMF, by approved local providers such as adult education centers and language schools. The BAMF has offered it since 2005. Its rules are set by the Residence Act and by a separate regulation, the Integration Course Ordinance (Integrationskursverordnung, IntV), which you can read in full on gesetze-im-internet.de." },
    { p: "Under § 10 of the ordinance, the general course has **700 lessons** and is taught in German. It has two parts. The language course takes 600 lessons and is split into a basic course and an advanced course, each made of three sections of 100 lessons at rising levels. The orientation course follows with **100 lessons on law, history and culture**: rights and duties in Germany, ways of living together, and values such as religious freedom, tolerance and equality between women and men." },
    { p: "Before you start, the provider gives you a placement test, paid for by the BAMF, so that you join the right section. You may skip or repeat sections with the provider's agreement. The language lessons follow everyday and working life: work and training, childcare, shopping, health, housing and the media, plus the practical German of **letters, emails, forms, phone calls and job applications**." },
    { table: {
      head: ['Course type', 'Language course', 'Orientation course', 'Total'],
      rows: [
        ['General integration course', '600 lessons', '100 lessons', '700 lessons'],
        ['Intensive course', '400 lessons', '100 lessons', '500 lessons'],
        ['Courses for special target groups (literacy, second script, special learning needs)', 'up to 900 lessons', '100 lessons', 'up to 1,000 lessons'],
      ],
      note: 'Sources: §§ 10 to 13 of the Integration Course Ordinance and the BAMF page on course content. People who complete a literacy or special-needs course without reaching the goal can be admitted once to repeat up to 300 lessons of the language course.',
    } },
    { p: "The **intensive course** is for fast learners: you can only join it if the placement test suggests you will pass the language test within 400 lessons. The special courses go the other way. The literacy course (Alphabetisierungskurs) is for people who cannot read or write well enough, the second-script course (Zweitschriftlernerkurs) for people who read and write in another alphabet but not yet in Latin script, and the support course (Förderkurs) for people with particular learning needs." },
    { p: "Courses are normally full-time, with part-time courses for exceptions such as people in work, sometimes in the afternoon or evening. A class can have **up to 25 participants**, ideally with different first languages, and the ordinance also allows integration courses to run online where the BAMF approves the format. The BAMF funds a maximum of 1,200 lessons; after that you can continue or repeat sections at your own expense." },

    { figure: { photo: 'integration-course-whiteboard', alt: 'A woman writing on a large whiteboard in a bright room', caption: 'An integration course class can have up to 25 people, taught mostly full-time over six sections of 100 lessons.' } },

    { h: 'Who is entitled, who is obliged, who may apply' },
    { p: "German law sorts participants into three groups, and **which group you are in decides almost everything**: whether you get a place, whether you must attend and who applies for you." },
    { h3: 'Entitled: non-EU residents with a permit since 2005' },
    { p: "You have a legal right to a course if you received your first residence permit after 1 January 2005, live in Germany permanently and are here for work, family reunification, humanitarian reasons or as a long-term resident under § 38a of the Residence Act. Your stay counts as permanent if your permit was issued **for more than one year**, or if you have held a residence permit for over 18 months. Holders of certain settlement permits under § 23 also qualify. The right does not apply to children and young people still in school in Germany, to people with clearly little need for integration, or to people who already speak enough German, although they may still take the orientation course on its own." },
    { h3: 'Obliged: when the foreigners authority says so' },
    { p: "If you received your permit after 1 January 2005 and **cannot communicate in simple German**, the foreigners authority (Ausländerbehörde) notes the obligation to attend when it issues your residence title. The job center can also oblige people who receive basic income support (Grundsicherungsgeld). You cannot be obliged if you are in training or education in Germany, if attending is permanently impossible or unreasonable, for example because you care for a family member, or if you work and cannot fit even a part-time course around your job." },
    { h3: 'Admitted voluntarily: EU citizens, Germans and others' },
    { p: "EU citizens and German citizens have **no legal entitlement**. The BAMF can admit them on application if they do not yet speak enough German, have a particular need for integration and there are free places. The same route under § 44 (4) of the Residence Act applies to other groups without an entitlement. This is the route that was frozen in 2026, and it is the one most English-speaking expats from the EU, and their families, depend on." },

    { h: 'What changed in 2026' },
    { p: "At the start of 2026, the BAMF suspended admissions of voluntary participants under § 44 (4) of the Residence Act. According to the EU Agency for Asylum, a circular to course providers dated 9 February 2026 halted new admissions for the current financial year for asylum applicants, people with a tolerated stay, people displaced from Ukraine and **EU citizens**, unless they paid for the course themselves. Participations already approved stayed valid, and people with an entitlement or an obligation kept their route into the courses." },
    { p: "In its information letter dated August 2026, the BAMF announced that the suspension would end within the limits of the available places and that **from 1 August 2026** it would again admit certain groups on application. It also stated the new principle plainly: admissions depend on the places that the available budget allows, and priority now goes to people who should become available to the job market again." },
    { p: "The government amended § 5 (4) of the Integration Course Ordinance to set two priority groups. The first is foreigners with a residence permit under § 24 of the Residence Act, the status for **temporary protection**. The second is German citizens and other EU citizens who do not have enough German to take up work or training, together with the family members of both groups." },
    { p: "Within the second group, the BAMF names three kinds of applicants it treats as returning to the job market: people entitled to unemployment benefit (Arbeitslosengeld) under § 136 of Book III of the Social Code, **employed people on a low income** who are exempt from the course fee, and people who have worked in Germany without building up a claim to unemployment benefit. The two priority groups are admitted in equal shares, applications are handled in the order they arrive, and incomplete applications are rejected rather than put on hold." },
    { note: { title: 'Apply complete, apply online', text: "Because the BAMF works through applications in order of receipt and rejects incomplete ones, **a missing document can cost you your place in the queue**. The BAMF asks for applications through the federal online portal (Bundesportal) and publishes a leaflet listing the documents; an integration course provider can help you fill it in.", draw: 'snail' } },
    { p: "What this means in practice: if you are an EU citizen in Germany who works on a modest salary, has lost a job or is looking for one, you have a fair chance of a place. If you are a well-paid EU professional who simply wants to learn German, the law still allows the BAMF to admit you, but **the priority rules and the budget work against you**. Check the BAMF's current information page before you plan around a funded place, because these rules have changed twice in one year." },

    { cta: true },

    { h: 'What it costs and who pays nothing' },
    { p: "Unless you are exempt, you pay a contribution of **2.29 euros per lesson**, or 2.20 euros if you registered before 1 August 2022. The general course therefore costs you 1,603 euros, and a special course of 1,000 lessons 2,290 euros. You do not pay it all at once: the fee is due at the start of each section of 100 lessons, so 229 euros at a time. If you drop out or miss lessons, you still owe the fee for the whole section." },
    { table: {
      head: ['Course', 'Lessons', 'Your contribution at 2.29 euros'],
      rows: [
        ['One course section', '100', '229 euros'],
        ['Intensive course', '500', '1,145 euros'],
        ['General integration course', '700', '1,603 euros'],
        ['Course for special target groups', 'up to 1,000', 'up to 2,290 euros'],
      ],
      note: 'Rate from the BAMF participation pages, November 2026. The contribution is half of the cost-reimbursement rate the BAMF pays providers (§ 9 IntV), so it can change; check the official page.',
    } },
    { p: "Many participants pay nothing. Under § 9 of the ordinance, the BAMF exempts you on application if you receive basic income support, unemployment benefit or social assistance, or if paying would be an unreasonable hardship. People in work are exempt if their **gross earnings do not exceed 33 percent** of the annual contribution ceiling of the statutory pension insurance, a limit that rises by 10 percent with one child and by 20 percent with two or more. The BAMF prints the current amounts, which change every year, on the exemption form." },
    { p: "If you are exempt and the walk to your course is at least 5 kilometers, you can also apply for a **travel cost subsidy**. And if you pay the fee and pass, you can get half of it back: the BAMF refunds 50 percent to participants who complete the course successfully within two years of receiving their eligibility certificate, or within three years for special target-group courses. The refund rule is still in § 9 (6) of the ordinance and the BAMF still offers the refund application. On the general course that is 801.50 euros, a real reward for finishing on time." },
    { p: "One more deadline matters. Your eligibility lapses if, for reasons you are responsible for, you do not start the course **within one year of registering**, or you interrupt it for more than a year. It can be reactivated only if you show good reasons." },

    { figure: { photo: 'integration-course-test-paper', alt: 'A person writing with a pen on sheets of paper at a desk', caption: 'The written part of the Deutsch-Test für Zuwanderer takes 100 minutes and covers listening, reading and a short letter.' } },

    { h: 'The final tests and the certificate' },
    { p: "The course ends with two tests, both paid for by the BAMF for the first attempt. If you fail the language test before using up all your lessons, the BAMF also pays for a second attempt." },
    { h3: 'Deutsch-Test für Zuwanderer (DTZ)' },
    { p: "The DTZ is a scaled test: **one exam that measures you at A2 or B1**, rather than a pass-or-fail exam at a single level. The written part takes 100 minutes and covers listening, reading and writing a short letter; the oral part takes about 15 minutes. To be placed at B1 or A2 overall, you need that level in speaking and in at least one of the two other parts. Below A2 you receive only a notice of your result, not a certificate." },
    { h3: 'Leben in Deutschland' },
    { p: "The orientation course ends with the Leben in Deutschland test: **33 multiple-choice questions** with four options each, in 60 minutes, on the topics of the orientation course. You pass with 15 correct answers. With at least 17, the result also counts as proof of the knowledge of the legal and social order that **German citizenship** requires under § 10 of the Nationality Act." },
    { h3: 'Zertifikat Integrationskurs' },
    { p: "If you reach **B1 in the DTZ and pass Leben in Deutschland**, the BAMF issues the Zertifikat Integrationskurs. Under § 17 of the ordinance this is what counts as successful completion of the course, and it proves the B1 German and the basic knowledge of the legal and social order that you need for a permanent settlement permit (Niederlassungserlaubnis). If you already hold another recognized standardized B1 certificate, you can present it when you register, provided it is not more than a year old." },
    { examples: [
      ['Ich möchte mich für den nächsten Kursabschnitt anmelden.', 'I would like to register for the next course section.'],
      ['Ich habe meinen Berechtigungsschein mitgebracht.', 'I have brought my eligibility certificate.'],
      ['Ich habe einen Antrag auf Befreiung vom Kostenbeitrag gestellt.', 'I have applied for exemption from the course fee.'],
      ['Wann findet der Abschlusstest statt?', 'When is the final test?'],
    ] },

    { h: 'After the integration course: job-related German' },
    { p: "B1 gets you through daily life, but many jobs ask for more. For this the BAMF runs the **job-related language courses** (Berufssprachkurse), which build on the integration course and are open to non-EU citizens, EU citizens and Germans with a migrant background. Their legal basis is a separate ordinance on job-related German language support (DeuFöV)." },
    { p: "The basic courses end with a certificate exam at A2, B1, B2, C1 or C2. The A2 and B1 courses are only for people who did not reach B1 despite taking an integration course. Special courses cover, among others, people going through recognition as doctors or nurses, technical and commercial German, and German for a specific workplace. Normally you need a completed integration course or B1, and you must be registered as a job seeker, receive benefits, be looking for or doing vocational training, be going through recognition of a qualification, or be **employed with German that is not yet good enough for work**." },
    { p: "Job seekers get the eligibility certificate from the employment agency or job center, others from the BAMF. Employees pay nothing if their gross earnings stay under the same 33 percent threshold, raised by 10 percent each for the first and second child; above it they pay **2.56 euros per teaching unit**, so 1,024 euros for a 400-unit course, which an employer may cover. Pass the exam and you can claim half the fee back." },

    { figure: { photo: 'integration-course-laptops-notes', alt: 'Two people working at a table with laptops and handwritten notes', caption: 'Live online classes in a small group fit around a job, which is often the reason people combine them with, or choose them over, a full-time course.' } },

    { h: 'The integration course or another way to learn?' },
    { p: "For many newcomers the integration course is the best deal in German education. It is **inexpensive or free**, the curriculum is set nationally, the orientation course explains how the country works, and the certificate is exactly the proof the immigration authorities ask for. If you are entitled or obliged, take it seriously and aim for B1 within the refund deadline." },
    { p: "It is not built for everyone, though. Courses are mostly full-time, groups can be large, places for voluntary participants now depend on the budget, and the course aims at B1 and stops there. If you work full-time, if you are an EU citizen outside the priority groups, or if your job needs B2 or C1, it often makes sense to look at other options alongside it or instead of it." },
    { p: "Private evening and weekend courses at language schools let you pick the schedule and the level, often in smaller groups, but you pay the full price yourself. **Live online classes** with a teacher remove the commute and fit more easily around a working day, and some prepare for the same Goethe, telc or ÖSD certificates the authorities accept. Self-study apps are useful for vocabulary but rarely make you speak. At Alimun, for example, you take a level test and then join live online German classes with a teacher in a small group, which suits people who want to keep progressing after B1 or cannot attend daytime classes." },
    { p: "There is no wrong combination. Some people finish the integration course and then move on to a job-related course; others learn privately while they wait for a place, or study for **a Goethe or telc B1** if they need a certificate sooner. Whatever you choose, check your own case with the BAMF or your foreigners authority, because entitlement, fees and admissions are set by the rules in force on the day you apply." },
  ],
  quiz: [
    { q: 'How many lessons does the general integration course have?', options: ['500', '600', '700', '1,000'], a: 2, why: 'Section 10 of the Integration Course Ordinance sets 700 lessons: 600 of language and 100 of orientation.' },
    { q: 'Do EU citizens have a legal entitlement to an integration course?', options: ['Yes, after registering their address', 'No, the BAMF can admit them if places are available', 'Yes, but only after five years', 'Only if they work'], a: 1, why: 'EU citizens have no entitlement; the BAMF may admit them within the available places.' },
    { q: 'Since when has the BAMF been admitting certain voluntary participants again?', options: ['1 January 2026', '9 February 2026', '1 August 2026', '1 January 2027'], a: 2, why: 'The BAMF information letter announced readmission of certain groups from 1 August 2026.' },
    { q: 'How much do you pay per lesson if you are not exempt and registered after 1 August 2022?', options: ['2.20 euros', '2.29 euros', '2.56 euros', '4.58 euros'], a: 1, why: 'The contribution is 2.29 euros per lesson; 2.56 euros is the rate for job-related language courses.' },
    { q: 'What do you need for the Zertifikat Integrationskurs?', options: ['A2 in the DTZ and 15 points in Leben in Deutschland', 'B1 in the DTZ and a passed Leben in Deutschland test', 'B2 in any certificate', 'Only full attendance'], a: 1, why: 'Section 17 of the ordinance requires B1 in the language test and a passed orientation test.' },
    { q: 'How many correct answers in Leben in Deutschland also count for citizenship?', options: ['15 of 33', '17 of 33', '20 of 33', '30 of 33'], a: 1, why: 'You pass with 15, and 17 or more also counts as proof of the knowledge required for naturalization.' },
    { q: 'Within what period must you pass to get 50 percent of the fee back on a general course?', options: ['One year', 'Two years from the eligibility certificate', 'Five years', 'There is no refund'], a: 1, why: 'Section 9 (6) of the ordinance sets two years, or three for special target-group courses.' },
    { q: 'Which course builds on the integration course and leads up to C2?', options: ['Orientation course', 'Intensive course', 'Job-related language course (Berufssprachkurs)', 'Literacy course'], a: 2, why: 'The job-related language courses lead to certificates from A2 to C2.' },
  ],
  faq: [
    ['Can I take the integration course as an EU citizen in 2026?', 'You can apply, but you have no entitlement. Since 1 August 2026 the BAMF admits EU citizens again within the available places, with priority for those who lack the German to take up work or training and should return to the job market, such as people entitled to unemployment benefit or employed people on a low income. Apply online with a complete set of documents, because applications are handled in order of receipt.'],
    ['How much does the integration course cost?', 'If you are not exempt, 2.29 euros per lesson, which is 1,603 euros for the 700-lesson general course, paid per section of 100 lessons. People on basic income support, unemployment benefit or social assistance, and employees under an income limit, can be exempted. If you pass within two years, you can get half of what you paid back.'],
    ['Is the integration course enough for permanent residence?', 'The Zertifikat Integrationskurs proves B1 German and basic knowledge of the legal and social order, which is what the settlement permit asks for. Other requirements, such as years of residence and income, still apply, so check them with your foreigners authority.'],
    ['Can I do the integration course online or part-time?', 'The ordinance allows online integration courses where the BAMF approves the format, and part-time courses exist for people who work, sometimes in the evening. Availability depends on the providers near you; the BAMF-NAvI search shows local providers.'],
  ],
  related: ['german-for-work', 'german-citizenship', 'german-exams-compared', 'how-long-german'],
  sources: [
    ['BAMF: integration courses, content and structure', 'https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/InhaltAblauf/inhaltablauf-node.html'],
    ['BAMF: integration course for EU citizens (admission, fee, exemptions)', 'https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/TeilnahmeKosten/EU-Buerger/eu-buerger-node.html'],
    ['BAMF: residence titles from 2005 (entitlement, obligation, refund)', 'https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/TeilnahmeKosten/Titelab2005/titelab2005-node.html'],
    ['BAMF: information letter on readmission under § 44 (4) Residence Act, August 2026', 'https://www.bamf.de/SharedDocs/Anlagen/DE/Integration/Integrationskurse/infoschreiben-ik-wiederzulassung.html'],
    ['BAMF: final tests and Zertifikat Integrationskurs', 'https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/Abschlusspruefung/abschlusspruefung-node.html'],
    ['Integration Course Ordinance (IntV) on gesetze-im-internet.de', 'https://www.gesetze-im-internet.de/intv/'],
    ['BAMF: job-related language courses', 'https://www.bamf.de/EN/Themen/Integration/ZugewanderteTeilnehmende/DeutschBeruf/deutsch-beruf-node.html'],
    ['EUAA: BAMF circular halting admissions to integration courses (2026)', 'https://dip.euaa.europa.eu/developments/germany/bamf-issues-circular-halt-admissions-integration-courses-until-further-notice'],
  ],
};
