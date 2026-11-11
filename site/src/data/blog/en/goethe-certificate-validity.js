// Third design (docs/BLOG_PLAN.md). Facts checked 10 Nov 2026 against: the Goethe-Institut Prüfungsordnung (as of
// 1 Sept 2025, sections 14 and 15: paper or digital certificates, goethe.de/verify, replacement within 10 years,
// module and overall certificates, corrections); the Goethe-Institut exam FAQ (goethe.de/ins/co, read via the
// web.archive.org copy of July 2026 because goethe.de blocks automated readers: "unbegrenzt gültig", institutions
// asking for certificates up to two years old, no duplicates, name changes); the Goethe-Institut Cyprus page on
// family reunification (some missions accept only certificates up to 6 months old, archived copy); the Federal
// Foreign Office visa FAQ (accepted providers, exam date as a rule not older than one year, oldest module date);
// leaflets of the German missions in China (April 2024) and Minsk (December 2025) on A1 for spouses;
// gesetze-im-internet.de (§ 30 AufenthG, § 10 StAG); City of Karlsruhe naturalization leaflet (August 2024);
// uni-assist (language certificates). Alimun is not affiliated with the Goethe-Institut.
export default {
  key: 'goethe-validity',
  site: 'en',
  slug: 'goethe-certificate-validity',
  section: 'exams',
  course: 'German',
  published: '2026-11-10',
  updated: '2026-11-10',
  title: 'Does a Goethe certificate expire? Validity for visas, citizenship and jobs',
  metaTitle: 'Does a Goethe certificate expire? Validity explained – Alimun',
  desc: 'Goethe certificates from A1 to C2 have no expiry date, but a visa office may want an exam from the last year. What each authority asks, plus replacements and checks.',
  lead: "The Goethe-Institut says its certificates from A1 to C2 are valid without limit. That is only half the answer, because **the office that receives your certificate sets its own rules**, and for a spouse visa that usually means an exam taken within the last year. Here is what each kind of authority asks, and what to do about lost, old or split certificates.",
  photo: 'goethe-validity-paperwork-desk',
  sticker: { draw: 'snail', say: 'Mein Zertifikat läuft nie ab. Mein Visum schon.' },
  facts: [
    { label: 'No expiry', text: 'Goethe-Institut certificates from A1 to C2 are valid without limit, says the Goethe-Institut' },
    { n: 1, unit: 'year', text: 'as a rule, the maximum age of the exam date that German missions accept for a visa' },
    { n: 10, unit: 'years', text: 'after the exam, the window in which an exam center can issue a paid replacement certificate' },
    { label: 'Oldest module', text: 'if you retook modules, the visa rule counts from the date of the oldest passed module' },
  ],
  blocks: [
    { take: { title: 'The short answer', text: "No, a Goethe certificate does not expire. The Goethe-Institut says its certificates from A1 to C2 are **valid without limit**, and there is no end date printed on them. But the organization that receives it can ask for a recent one. For a German visa, including the A1 certificate for joining a spouse, the Federal Foreign Office says the exam date should **as a rule be no more than one year old**. Employers and universities set their own rules, and the Goethe-Institut notes that many ask for a certificate no older than two years. German citizenship law sets no age limit.", draw: 'owl' } },

    { h: 'Two questions hiding in one' },
    { p: "When people search for the validity of a Goethe A1 or B1 certificate, they are usually asking two different things. The first is whether the certificate itself has an expiry date, the way a passport or a driving license does. The second is whether **the authority in front of them will still accept it**. The first question has one clear answer that applies everywhere. The second has a different answer for every office, embassy, university and employer." },
    { p: "Keeping the two apart saves a lot of worry. A certificate from 2019 is still a genuine certificate today, and it still proves that you passed the exam at that level on that date. What it cannot prove is that your German is still at that level now, and that is exactly why some organizations **want a recent exam rather than an old one**. The rest of this guide goes through both sides." },

    { h: 'What the Goethe-Institut says' },
    { p: "In the exam FAQ that Goethe-Instituts publish on their websites, the answer to the question of how long a certificate is valid is short: the certificates for the Goethe-Zertifikate A1 to C2 are **unbegrenzt gültig**, valid without limit. The same answer adds a warning in the next sentence, that many institutions and employers nevertheless ask for a certificate that is **no more than two years old**. The Goethe-Institut does not say which ones; that is up to each organization." },
    { p: "Older exams are covered too. When the Goethe-Institut replaced its three old advanced exams with the Goethe-Zertifikat C2: Großes Deutsches Sprachdiplom on 1 January 2012, the certificates for the Zentrale Oberstufenprüfung (ZOP), the Kleines Deutsches Sprachdiplom (KDS) and the old Großes Deutsches Sprachdiplom (GDS) **stayed valid**. If you passed one of them years ago, you do not have to retake anything because the exam no longer exists." },
    { p: "The exam rules themselves, the Prüfungsordnung in force since 1 September 2025, do not set any period after which a certificate lapses. They only describe the cases in which a certificate is **invalid from the start**: when the exam center or the Goethe-Institut head office finds it forged or incorrect in content, when the exam was taken during an exam ban, or when exam materials were manipulated. Those are questions of fraud, not of age." },
    { quote: 'The certificate never expires. The deadline belongs to whoever reads it.' },

    { h: 'Spouse visa and the A1 certificate' },
    { p: "This is where the question comes up most often, because the A1 certificate is part of a visa application with fixed rules. Under § 30 of the Residence Act, a spouse joining a partner in Germany generally has to be able to **communicate in German at least in a simple way**, which German missions define as level A1 of the Common European Framework of Reference. The proof has to be shown before entry, as a rule when you apply for the visa." },
    { p: "The Federal Foreign Office's visa FAQ lists the certificates German missions accept: those of the Goethe-Institut, telc, ÖSD, the TestDaF-Institut (only from level B2), ECL and the DSD of the Kultusministerkonferenz, wherever the exam was taken. Certificates from other language schools are not accepted, even from schools approved to run integration courses. In the same answer comes the time limit: **as a rule, the exam date should not be more than one year in the past**." },
    { p: "Individual missions repeat this in their leaflets on proof of German for spouses. The German missions in China (leaflet of April 2024) and in Minsk (leaflet of December 2025) both write that, as a rule, they **only accept certificates whose exam date is no more than one year ago**. The Goethe-Institut in Cyprus goes further on its page about family reunification: the exam is valid without limit, it says, but some German missions accept only certificates **not older than six months** for the spouse visa. So the one-year figure is the general rule, and your mission may be stricter." },
    { figure: { photo: 'goethe-validity-wedding-rings', alt: 'Close-up of a bride and groom holding hands, both wearing wedding rings', caption: 'For a spouse visa, German missions usually want an A1 exam taken within the last year, and some ask for an even more recent one.' } },
    { p: "Note the words “as a rule”. The time limit is an administrative practice, not a line in the Residence Act, and missions can look at individual cases. The leaflets from China and Minsk also say that if it is obvious at the counter that your German is **well above A1**, no special certificate is needed, though in case of doubt you will be asked for one. Do not plan around exceptions. Plan to sit the exam close enough to your visa appointment that it is still recent on the day you apply." },
    { p: "Some spouses do not need the A1 proof at all. Section 30 of the Residence Act lists exceptions, for example when the partner in Germany holds an EU Blue Card or certain permits for skilled work or research, or when illness or disability makes it impossible to learn basic German. Whether one of them applies is decided in the visa process, so check the page of the mission that handles your application." },
    { note: { title: 'Time your A1 exam', text: "Results take time to arrive, and appointment dates at missions can be far off. Work back from your expected visa appointment, leave room for a retake, and keep the exam within the one-year window, or within six months if your mission says so.", draw: 'suitcase' } },

    { h: 'Modules and the oldest date' },
    { p: "From B1 up, the Goethe exam is modular. You can take Lesen, Hören, Schreiben and Sprechen together or separately, you get a certificate for each module you pass, and you may **retake a single module as often as you like**. Certificates for modules passed at a later date can be combined with the ones you already hold. This is a real advantage when you fail one skill, but it has a side effect on validity." },
    { p: "The Federal Foreign Office's visa FAQ is explicit: if individual modules were repeated, **the date of the oldest passed module counts**. Imagine you passed reading, listening and writing at B1 in March, and speaking in November of the same year. For a visa, your result is dated March, not November. If you collect modules over a long period, the first one may already be outside the one-year window by the time the last one is in." },
    { p: "The Goethe exam rules add their own limits on combining modules. If you pass all four modules at one exam venue in one exam session, you are entitled to an **overall certificate** showing all four. If you pass them at different times, an exam center can, where it has the capacity, issue an overall certificate on request showing your best results achieved **within one year**, and it may charge up to 25 percent of the exam fee for it. Outside that year, you keep separate module certificates." },
    { table: {
      head: ['Situation', 'What you get', 'What it means for validity'],
      rows: [
        ['All four B1 to C2 modules passed in one session at one venue', 'An overall certificate with all four results', 'One exam date for everything'],
        ['Modules passed separately within one year', 'Module certificates, and an overall certificate on request if the center can issue it', 'For a visa, the oldest module date counts'],
        ['Modules passed more than a year apart', 'Separate module certificates', 'Each module keeps its own date; ask the receiving office if it accepts them'],
        ['A1 or A2 exam', 'One certificate for the whole exam', 'One date; there are no modules to combine'],
      ],
      note: 'From the Goethe-Institut Prüfungsordnung (as of 1 September 2025), sections 14.6 and 14.7, and the Federal Foreign Office visa FAQ. Exam centers decide on fees and on overall certificates for modules from different sessions.',
    } },

    { cta: true },

    { h: 'Citizenship and the B1 certificate' },
    { p: "To become a German citizen you generally need **sufficient knowledge of German**, and § 10 of the Nationality Act says this is met when you fulfill the requirements of a language exam at level B1. The law sets no time limit on the certificate. A Goethe-Zertifikat B1 is one of the ways to show it; local offices also list other proofs, such as German schooling or a completed degree or vocational training in Germany." },
    { p: "Naturalization offices are run locally, so practice is described in their own leaflets. The City of Karlsruhe's leaflet of August 2024 says, for example, that you usually do not have to take a new language exam if you **already earned the B1 certificate or an equivalent diploma in the past and still have the language skills**. That last condition matters: the office may notice in your appointment if your German has faded, and the certificate does not shield you from that." },
    { p: "The modular B1 raises a second question here. If you hold module certificates rather than one overall certificate, ask your naturalization office before you apply whether it accepts them, and which skills it needs to see. Doing this in advance is cheaper than discovering at the appointment that one module is missing." },

    { h: 'Universities, employers and recognition offices' },
    { p: "For a degree taught in German, each university decides which certificates and levels it accepts, often course by course. Uni-assist, which processes applications for many German universities, lists the DSH, TestDaF, the Goethe-Institut's certificates and the DSD as accepted at all universities, and stresses that **the level accepted varies** from university to university and from course to course. Its page sets no general age limit, so the rule is whatever your university's admission page says." },
    { p: "Employers have no official rule at all. Some care only about the level on the certificate, others want to hear you speak in the interview, and others, as the Goethe-Institut warns, ask for a certificate **no older than two years**. If a job ad mentions a certificate, the safest move is to ask HR whether an older one is fine." },
    { p: "Recognition offices for regulated professions, such as nursing or medicine, are run by the federal states and publish their own lists of accepted certificates and levels. They can set their own conditions, including on how recent a certificate must be. Check the page of the office that will handle your application, which you can find through the Recognition Finder on anerkennung-in-deutschland.de." },
    { figure: { photo: 'goethe-validity-airport-arrival', alt: 'Two travelers with backpacks and a suitcase walking along a moving walkway in an airport terminal', caption: 'Different offices, different rules: the same certificate can be fine for citizenship and too old for a visa.' } },
    { table: {
      head: ['Who receives it', 'Age limit on the certificate', 'Where the rule comes from'],
      rows: [
        ['Goethe-Institut (the certificate itself)', 'None: valid without limit', 'Goethe-Institut exam FAQ'],
        ['German missions, visa applications including A1 for spouses', 'As a rule, exam date no more than one year ago; some missions six months', 'Federal Foreign Office visa FAQ; mission leaflets; Goethe-Institut Cyprus'],
        ['Naturalization office (B1)', 'None in the law; your German must still be at the level', '§ 10 Nationality Act; local leaflets such as Karlsruhe'],
        ['Universities', 'Set by each university and course', 'The university admission page; uni-assist'],
        ['Employers', 'Their own choice; many ask for up to two years', 'Goethe-Institut exam FAQ'],
      ],
      note: 'Rules change and individual offices can be stricter. Always check the current official page of the organization that receives your certificate.',
    } },

    { h: 'Lost certificates, replacements and name changes' },
    { p: "Goethe certificates are issued **on paper or as a digital PDF**, and which one you get depends on your exam center; you have no right to the other form. Digital certificates come as PDF files, and an exam center may charge an administrative fee for a paper certificate in addition to the digital one. A paper certificate is issued once, as a single signed copy." },
    { p: "If you lose a paper certificate, the Goethe-Institut does not issue a duplicate. What you can get is a **replacement certificate** (Ersatzbescheinigung), issued for a fee by the exam center where you registered for the exam, and only **within 10 years** of the exam. After that, the exam center can no longer help, which is one more reason to keep a scan of every certificate you receive." },
    { p: "Check your personal details as soon as the certificate arrives. If your name or date of birth is wrong, the exam rules say you must tell the exam center **immediately**; it issues a new certificate with the corrected details when you show a valid ID, the incorrect one becomes invalid, and a wrong paper certificate has to be returned. The center may charge up to 25 percent of the exam fee for this. A later name change, for example after marriage or divorce, is different: the Goethe-Institut issues neither a new certificate nor a replacement. You prove the change with the official document, such as a marriage certificate, or a certified copy." },
    { note: { title: 'Keep the PDF and a scan', text: "Store your digital certificate, or a good scan of the paper one, somewhere safe. Replacements are only possible within 10 years, and visa offices and universities often ask for copies anyway.", draw: 'teacup' } },

    { h: 'How authorities check a Goethe certificate' },
    { p: "Because certificates can be forged, the Goethe-Institut runs an online check. Its exam rules state that **the validity of Goethe certificates can be checked at goethe.de/verify**. An embassy, university or employer who doubts a document can use it, and you can point them to it if they ask how to confirm your result." },
    { p: "Here “validity” means authenticity, not freshness: the check tells the reader that the certificate is real and matches the exam result, not that it is recent enough for their purposes. **A certificate that verifies perfectly can still be too old** for a spouse visa. Forged certificates, on the other hand, are invalid under the exam rules however recent they look, and buying one is a fast way to lose a visa application." },

    { h: 'When a fresh exam makes sense' },
    { p: "If your certificate is older than the receiving office allows, the only way forward is a new exam. Since you have passed the level before, the question is less whether you can pass and more **whether your German has kept up**. Skills you have not used for a year or two can slip, and the exam format may feel unfamiliar again." },
    { p: "The Goethe-Institut publishes free practice sets for each level. Do one under real timing a few weeks before you book: if you score well above 60 points in every part, book the exam; if not, refresh first. Alimun's live German classes with a teacher in a small group, plus a short level test, are one way to check where you stand before you pay the exam fee." },
    { p: "Finally, think about the next step, not only the current one. A spouse who passes A1 for the visa will meet B1 again later if citizenship is the goal, and a B1 certificate earned in Germany will still be accepted at the naturalization office years later as long as **your German is still at that level**. Learning beyond the exam you need today is the most reliable way to never worry about a certificate's age again." },
  ],
  quiz: [
    { q: 'According to the Goethe-Institut, how long is a Goethe certificate from A1 to C2 valid?', options: ['Two years', 'Five years', 'Ten years', 'Without limit'], a: 3, why: 'The Goethe-Institut exam FAQ says the certificates for A1 to C2 are valid without limit (unbegrenzt gültig).' },
    { q: 'For a German visa, how old may the exam date be as a rule?', options: ['Six weeks', 'One year', 'Three years', 'There is no limit'], a: 1, why: 'The Federal Foreign Office says that, as a rule, the exam date should not be more than one year in the past.' },
    { q: 'You passed three B1 modules in March and Sprechen in November. Which date counts for a visa?', options: ['March, the oldest passed module', 'November, the newest module', 'The average of both', 'The date you apply for the visa'], a: 0, why: 'The visa FAQ says that if modules were repeated, the date of the oldest passed module counts.' },
    { q: 'What do some German missions accept for the spouse visa, according to the Goethe-Institut in Cyprus?', options: ['Only certificates from Germany', 'Only certificates not older than six months', 'Only B1 certificates', 'Only paper certificates'], a: 1, why: 'The Goethe-Institut Cyprus notes that some missions accept only certificates not older than six months.' },
    { q: 'Within how many years of the exam can a lost certificate be replaced?', options: ['1', '2', '5', '10'], a: 3, why: 'Section 14.4 of the exam rules allows a paid replacement certificate within 10 years.' },
    { q: 'What happens if you change your name after marriage?', options: ['You get a new certificate free of charge', 'You must retake the exam', 'No new certificate is issued; you show the marriage certificate', 'The old certificate becomes invalid'], a: 2, why: 'The Goethe-Institut issues neither a new certificate nor a replacement; you prove the change with the official document.' },
    { q: 'What does the check at goethe.de/verify confirm?', options: ['That the certificate is genuine', 'That your German is still at that level', 'That the certificate is less than a year old', 'That a visa will be granted'], a: 0, why: 'It checks the validity of the certificate in the sense of authenticity, not whether it is recent enough for a given office.' },
    { q: 'Does German citizenship law set a maximum age for a B1 certificate?', options: ['Yes, one year', 'Yes, two years', 'No, but your German must still be at the level', 'Only for Goethe certificates'], a: 2, why: '§ 10 of the Nationality Act sets no time limit; offices such as Karlsruhe accept an earlier B1 certificate if you still have the skills.' },
  ],
  faq: [
    ['Is my Goethe A1 certificate still valid for a spouse visa after a year?', 'The certificate itself never expires, but German missions accept, as a rule, only exams taken within the last year, and some ask for six months. If yours is older, expect to be asked for a new exam, and check the page of your mission.'],
    ['Do I need a new B1 certificate for German citizenship if mine is several years old?', 'The Nationality Act sets no age limit for the certificate. Offices such as Karlsruhe say an earlier B1 certificate is usually enough if you still have the language skills. Ask your naturalization office, since practice is local.'],
    ['I lost my Goethe certificate. Can I get a copy?', 'The Goethe-Institut does not issue duplicates. The exam center where you registered can issue a paid replacement certificate if the exam was no more than 10 years ago.'],
    ['Can I combine B1 modules from different years?', 'Module certificates can be combined, but an overall certificate for modules from different sessions covers results within one year and depends on the exam center. For a visa, the date of the oldest passed module counts.'],
    ['How can an employer check that my certificate is real?', 'The Goethe-Institut exam rules point to goethe.de/verify, where the validity of Goethe certificates can be checked.'],
  ],
  related: ['goethe-certificates', 'german-exams-compared', 'german-citizenship', 'german-for-work', 'integration-course', 'how-long-german'],
  sources: [
    ['Goethe-Institut, Prüfungsordnung (exam regulations, as of 1 September 2025)', 'https://www.goethe.de/pro/relaunch/prf/en/Pruefungsordnung.pdf'],
    ['Goethe-Institut, exam FAQ (Oft gestellte Fragen)', 'https://www.goethe.de/ins/co/de/spr/prf/ogf.html'],
    ['Goethe-Institut Cyprus, exams for family reunification', 'https://www.goethe.de/ins/cy/de/spr/prf/ehe.html'],
    ['Federal Foreign Office, visa FAQ: accepted language certificates', 'https://www.auswaertiges-amt.de/de/service/fragenkatalog-node/-/606772'],
    ['German missions in China, leaflet on A1 for spouses', 'https://china.diplo.de/blob/1302118/497b3042a64bd0819271147ae178bff9/pdf-info-natvisum-deutschkenntnisse-ehegattennachzug-data.pdf'],
    ['German Embassy Minsk, leaflet on proof of German', 'https://minsk.diplo.de/resource/blob/2583496/9bff8774b70427589a43f8b456119be8/merkblatt-sprachnachweis-data.pdf'],
    ['Residence Act, § 30 (spouse reunification)', 'https://www.gesetze-im-internet.de/aufenthg_2004/__30.html'],
    ['Nationality Act, § 10 (naturalization)', 'https://www.gesetze-im-internet.de/stag/__10.html'],
    ['City of Karlsruhe, naturalization leaflet on language proof', 'https://web1.karlsruhe.de/service/Formulare/ordnungsamt/EB_M_01_Nachweis_der_erforderlichen_Sprachkenntnisse.pdf'],
    ['uni-assist, language certificates', 'https://www.uni-assist.de/bewerben/dokumente-sammeln/sprachzertifikate/'],
    ['Goethe-Institut, certificate verification', 'https://www.goethe.de/verify'],
  ],
};
