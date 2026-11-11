// Third design (docs/BLOG_PLAN.md). Facts checked 11 Nov 2026 against: the Goethe-Institut Durchführungsbestimmungen
// for Goethe-Zertifikat A1: Start Deutsch 1 (as of 1 Sept 2025: parts, timing, group oral, raw points, factor 1.66,
// pass mark, the 35-point rule, grades, retake as a whole, 14-day rule, digital exam annex); the official practice set
// Start Deutsch 1 Übungssatz 02 (6th revised edition, Feb 2024: task types and item numbers per part, writing and
// speaking criteria, examiner script, foreword describing A1, joint development with telc); the Durchführungsbestimmungen
// for Fit in Deutsch 1 (as of 1 Sept 2025) and the Goethe-Institut Fit in Deutsch 1 flyer (ages 10 to 16). All Goethe
// files were opened directly on goethe.de (PDF downloads worked; the HTML exam pages answer 403 to automated readers,
// and the web.archive.org copy could not be used because the archive was offline). Law: gesetze-im-internet.de
// (§ 28, § 30 AufenthG; § 41 AufenthV). Federal Foreign Office visa FAQ (accepted providers, one-year rule) and the
// German missions in China leaflet on simple German for spouses (April 2024: accepted A1 certificates, exceptions,
// hardship rule). No fees: they are set by each exam center. Alimun is not affiliated with the Goethe-Institut.
export default {
  key: 'goethe-a1-exam',
  site: 'en',
  slug: 'goethe-a1-exam-start-deutsch-1',
  section: 'exams',
  course: 'German',
  published: '2026-11-11',
  updated: '2026-11-11',
  title: 'Goethe A1 exam (Start Deutsch 1): format, scoring and the spouse visa',
  metaTitle: 'Goethe A1 exam: Start Deutsch 1 format and spouse visa – Alimun',
  desc: 'Start Deutsch 1 part by part: the 65-minute written exam, the group speaking test, how 60 points are reached, and what the German spouse visa asks.',
  lead: "Start Deutsch 1 is the Goethe-Institut's A1 exam for adults, and for many people it is the certificate that stands between them and a visa to join their partner in Germany. It is short, it is predictable, and **every task is published in advance** in the official practice sets. Here is how each part works, how the points add up, and what the visa rules actually ask.",
  photo: 'goethe-a1-exam-en-wedding-steps',
  sticker: { draw: 'suitcase', say: 'Mein Name ist Anna. A, N, N, A.' },
  facts: [
    { n: 65, unit: 'minutes', text: 'for the written part: listening, reading and writing, with no break' },
    { n: 60, unit: 'points', text: 'out of 100 needed to pass, 75 from the written part and 25 from speaking' },
    { n: 4, unit: 'candidates', text: 'at most in the group speaking test, which lasts about 15 minutes' },
    { label: 'A1 = einfach', text: 'the level German law means by speaking German “in a simple way”' },
  ],
  blocks: [
    { take: { title: 'The short answer', text: "The Goethe-Zertifikat A1: Start Deutsch 1 has a written part of **65 minutes** (about 20 minutes of listening, 25 of reading and 20 of writing) and a speaking test of about 15 minutes in a group of up to four, with no preparation time. You need **60 of 100 points** in total, and the exam is retaken as a whole if you fail. German missions accept it, along with telc's Start Deutsch 1 and the ÖSD Zertifikat A1, as proof that a spouse can communicate in German in a simple way, as a rule only if the exam is **no more than one year old**. Several groups of spouses are exempt, so check your case first.", draw: 'owl' } },

    { h: 'Who takes the A1 exam' },
    { p: "Most people who book Start Deutsch 1 have one of two reasons. The larger group needs it for a visa: a husband, wife or registered partner who wants to join someone in Germany usually has to show **basic German before entering the country**. The other group simply wants a first certificate, to prove to themselves, a school or an employer that they have finished the first level and to have a goal at the end of a beginner course." },
    { p: "Both groups sit the same exam. This article goes into the A1 exam in detail, task by task. If you want the overview of every Goethe level from A1 to C2, how the modular exams from B1 up work and which level a university or naturalization needs, our guide to the Goethe certificate explained covers that, and a separate article explains **how long a Goethe certificate stays valid** for a visa." },

    { h: 'What A1 means' },
    { p: "A1 is the first of the six levels of the Common European Framework of Reference for Languages (CEFR), which runs from A1 to C2. The Goethe-Institut's description of the exam says that someone who passes Start Deutsch 1 can **communicate in German in the simplest way**. In practice that means understanding short, simple questions, instructions and messages in everyday situations, including announcements and messages on an answering machine, and picking out the key information from short notes, public signs and small ads." },
    { p: "On the productive side, an A1 speaker can give and understand numbers, quantities, times and prices, fill in a form with simple personal details, write a short personal message, introduce themselves and answer simple questions about themselves, and **make and respond to everyday requests**. The German missions in China describe the same level in their leaflet for spouses: asking the way, shopping, introducing yourself and writing your name, address and nationality on an official form, with a partner who speaks clearly and is willing to help." },
    { p: "German law has its own word for this level. Section 2 of the Residence Act calls A1 **einfache deutsche Sprachkenntnisse**, simple knowledge of German, and the spouse rule in section 30 asks that the spouse can communicate “at least in a simple way”. When an embassy page says einfache Deutschkenntnisse, it means A1." },

    { h: 'The exam at a glance' },
    { p: "Start Deutsch 1 was developed jointly by the Goethe-Institut and telc, which is why both organizations offer an exam with the same name. The Goethe version has two compulsory parts: a **written group exam** with listening, reading and writing, and an **oral group exam**. The written part normally comes first. If the two are not on the same day, the speaking test must follow within 14 days." },
    { table: {
      head: ['Part', 'Time', 'What you do', 'Raw points'],
      rows: [
        ['Hören (listening)', 'About 20 minutes', 'Three parts, 15 items: short conversations, announcements and phone messages', '15'],
        ['Lesen (reading)', '25 minutes', 'Three parts, 15 items: short letters or emails, ads and signs', '15'],
        ['Schreiben (writing)', '20 minutes', 'A form with five gaps, then a short message', '15 (5 + 10)'],
        ['Sprechen (speaking)', 'About 15 minutes', 'Group test in three parts, about 5 minutes each, no preparation', '15'],
      ],
      note: 'From the Goethe-Institut Durchführungsbestimmungen for Start Deutsch 1 (as of 1 September 2025) and the official practice set Übungssatz 02. The written part lasts 65 minutes in total with no breaks. Each part’s raw points are multiplied by 1.66, so the written part is worth 75 points and speaking 25. Candidates with special needs may receive extra time.',
    } },
    { p: "The recommended order is listening, then reading and writing, although an exam center may change it for organizational reasons. Once the listening part is over, you can do **reading and writing in the order you prefer**. In every part you first mark your answers on the question sheets and then copy them onto the answer sheet within the time limit, and the rules suggest planning about five minutes for that. Dictionaries are not allowed." },

    { h: 'Listening: three parts, fifteen questions' },
    { p: "The listening part takes about 20 minutes, and the audio file contains all the instructions, so nobody explains the tasks to you in between. In the official practice set, **part 1** has six short everyday conversations, each with a question and three answers to choose from, and you hear each conversation twice. Typical questions ask where friends want to have a party, when they meet, or how long a summer course lasts." },
    { p: "**Part 2** is the one that catches people out: four public announcements, at a station, in a department store or on the radio, each with a true or false statement, and you hear **each text only once**. Part 3 has five messages, such as someone leaving a message on an answering machine, again with three answers to choose from and heard twice. Read the question before each text starts, because it tells you exactly what to listen for: a time, a place, a number or a name." },
    { figure: { photo: 'goethe-a1-exam-en-headphones', alt: 'A pair of black over-ear headphones lying on a dark wooden table', caption: 'In part 2 of the listening test you hear each announcement only once, so read the statement before the audio starts.' } },

    { h: 'Reading: letters, ads and signs' },
    { p: "Reading lasts 25 minutes and also has three parts with 15 items in total, each worth one point. In **part 1** you read two short personal texts, such as an email thanking someone for an invitation, and decide whether five statements are true or false. In **part 2** you get five everyday situations, for example looking for a place for a birthday party or wanting to play football at the weekend, and for each one you choose which of two ads or websites gives you the information you need." },
    { p: "**Part 3** uses the kind of short notices you see on doors, in shops and at stations: new opening hours, a changed tram route, a note about a flat viewing. You decide whether a statement about each sign is true or false. The language is simple, but the tasks test detail, so **do not skim past dates and times**." },

    { h: 'Writing: a form and a short message' },
    { p: "The writing part takes 20 minutes and has two tasks. In **part 1** you read a few lines about another person, for example a friend who has just moved to Hamburg, works as a tour guide and has a fever, and you fill in the five missing details on a form for them. Each correct detail gets one point, so this part is worth five raw points and rewards careful reading as much as writing." },
    { p: "In **part 2** you write a short message, usually an email, in reply to a situation with three points to cover. In the practice set, a new colleague invites you to his birthday party in the office, and you have to say why you are writing, say that you will come later, and ask whether you can help. You write directly on the answer sheet, and **two raters mark it separately**; the result is the average of their scores, rounded to whole points." },
    { p: "The marking scheme is simple and worth knowing by heart. Each of the three content points earns **3 points** if it is fully done and understandable, 1.5 points if it is only partly done because of language or content problems, and nothing if it is missing or cannot be understood. One more point goes to the form of the text, a fitting greeting and closing, with half a point if they are unusual or missing. That makes 10 points, and it means that a short message which covers all three points clearly beats a long one that forgets one." },
    { examples: [
      ['Lieber Herr Jensch, vielen Dank für Ihre Einladung.', 'Dear Mr. Jensch, thank you very much for your invitation. A greeting and the reason for writing.'],
      ['Leider komme ich etwas später, ich habe um 15 Uhr einen Termin.', 'Unfortunately I will come a little later, I have an appointment at 3 p.m. The second point, with a reason.'],
      ['Kann ich etwas mitbringen? Ich mache gern einen Salat.', 'Can I bring something? I would be happy to make a salad. The question about helping.'],
      ['Viele Grüße, Maria', 'Best wishes, Maria. A closing that fits a message to a colleague.'],
    ] },

    { h: 'Speaking: the group test' },
    { p: "The speaking test is what makes Start Deutsch 1 different from most exams: you take it **in a group of up to four candidates**, put together at random, with two examiners. One examiner leads the conversation and makes all the announcements, the other assesses, and both mark you separately. There is no preparation time; you get the cards in the exam itself, and before each part the examiner explains the task and shows an example. The examiners do not see your written results." },
    { p: "In **part 1** you introduce yourself one after the other, using keywords on a sheet as a guide: in the examiner's own model, name, country, where you live, the languages you speak and your hobbies. At the end the examiner asks you to **spell something**, such as your name or the street you live in, and to give a number, such as a phone number or a house number. This part is worth 3 raw points." },
    { p: "In **part 2** each candidate draws a card with a topic and a word, for example the topic Beruf (work) and the word Arbeitszeit (working hours), turns to the next person, asks a question and answers the question they receive. The round goes on until everyone has asked and answered, and then a second topic follows in the same way. **Part 3** works like part 2 but with picture cards: you make a request or ask for something, such as a glass of water or a taxi, and the other candidate reacts. Parts 2 and 3 are worth 6 raw points each." },
    { figure: { photo: 'goethe-a1-exam-en-group-talking', alt: 'A small group of people sitting together, one reading a magazine and another holding a phone', caption: 'The A1 speaking test is a small group conversation: you ask and answer questions with the other candidates, not only with the examiner.' } },
    { p: "Each task is marked in the same way: **full points** if it is fully done and understandable, half points if language or content problems mean it is only partly done, and nothing if it is not done or cannot be understood. If a candidate's question cannot be understood and they do not manage after being asked to repeat, the examiner steps in and the conversation moves on. Short, complete sentences score better than long, broken ones." },
    { examples: [
      ['Wie ist Ihre Telefonnummer?', 'What is your phone number? A typical part 2 question; with other candidates you may also use du.'],
      ['Was machst du am Wochenende?', 'What do you do at the weekend? A question for the topic Wochenende.'],
      ['Können Sie mir bitte ein Taxi rufen?', 'Could you call me a taxi, please? A request for part 3.'],
      ['Ja, natürlich. / Nein, das geht leider nicht.', 'Yes, of course. / No, unfortunately that is not possible. Two ways to react to a request.'],
      ['Können Sie das bitte wiederholen?', 'Could you repeat that, please? Allowed, and much better than silence.'],
    ] },

    { cta: true },

    { h: 'How the points add up' },
    { p: "Each of the four parts has 15 raw points, from one point per correct answer in listening and reading, five points for the form plus ten for the message in writing, and three plus six plus six in speaking. For the final result, the raw points of each part are **multiplied by 1.66** and added up, and the total is rounded to whole points. That gives a maximum of 100 points: 75 for the written part and 25 for speaking." },
    { p: "You pass with **at least 60 points**, provided you have taken all the parts. There is no separate minimum for each part, so a strong written result can carry a weaker speaking test and the other way round. There is one hard limit, though: if you score less than 35 points in the written part, the rules say there is no point taking the speaking test, because even full marks there would not bring you to 60." },
    { table: {
      head: ['Points', 'Grade on the certificate', 'Meaning'],
      rows: [
        ['90 to 100', 'sehr gut', 'very good'],
        ['80 to 89', 'gut', 'good'],
        ['70 to 79', 'befriedigend', 'satisfactory'],
        ['60 to 69', 'ausreichend', 'sufficient'],
        ['0 to 59', 'nicht bestanden', 'not passed'],
      ],
      note: 'Grades (Prädikate) for Start Deutsch 1, from the Durchführungsbestimmungen as of 1 September 2025. The overall result is calculated even when the exam is not passed.',
    } },
    { p: "Your result is given as points and a grade, and for a visa a pass is a pass: the embassy asks for proof of A1, not for a particular grade. Unlike the exams from B1 up, Start Deutsch 1 has no modules, so **the exam can only be retaken as a whole**. If you pass listening and reading comfortably but fail overall, you still sit every part again next time." },
    { note: { title: 'Paper or computer', text: "Some exam centers also offer Start Deutsch 1 as a digital exam, taken in person on a laptop at the Goethe-Institut center. The tasks are the same as on paper, listening and reading are marked automatically, and the speaking test is still taken with examiners using paper cards. You type your texts on a German keyboard, so practice the umlauts and ß before the day.", draw: 'cat' } },

    { h: 'Fit in Deutsch 1 for teenagers' },
    { p: "The Goethe-Institut has a separate A1 exam for **children and young people aged 10 to 16**, the Goethe-Zertifikat A1: Fit in Deutsch 1. It tests the same level with topics that suit younger learners, and the format is a little different: the written part lasts 60 minutes, with about 20 minutes each for listening, reading and writing, and the speaking test is a group exam of about 15 minutes with **up to six candidates**." },
    { p: "The scoring differs too. Fit in Deutsch 1 has a maximum of 60 points, 42 for the written part and 18 for speaking, and it is passed with **30 points**, half of the maximum. Like Start Deutsch 1, it can only be retaken as a whole. For a spouse visa, adults should book Start Deutsch 1: that is the Goethe exam named on the missions' list of accepted A1 certificates." },

    { h: 'The spouse visa: what the law asks' },
    { p: "Section 30 of the Residence Act gives the spouse of a foreign national living in Germany a residence permit if, among other conditions, **both spouses are at least 18** and the spouse can communicate in German at least in a simple way. Section 28 applies the same age and language conditions to the foreign spouse of a German citizen, so marrying a German does not, by itself, remove the A1 requirement." },
    { p: "The proof comes **before entry**, as a rule with the visa application. The leaflet of the German missions in China, which sets out the practice in detail, says that the same applies if you are coming to Germany to marry and then live there. The Federal Foreign Office says on its visa FAQ that only certificates based on a standardized exam meeting the standards of the Association of Language Testers in Europe (ALTE) are recognized." },
    { h3: 'Which certificates are accepted' },
    { p: "The missions in China list the certificates that currently qualify: **Start Deutsch 1** from the Goethe-Institut, Start Deutsch 1 from telc, and the **ÖSD Zertifikat A1** from Austria, plus TestDaF (but only from B2) and ECL exams (only from A2). Certificates from other providers are not accepted, and the Federal Foreign Office adds that this includes language schools approved to run integration courses. If it is obvious at the counter that your German is well above A1, no certificate is needed, but in case of doubt you will be asked for one." },
    { p: "Timing matters. Both the Federal Foreign Office and the missions say that, as a rule, the exam date should be **no more than one year old** when you apply. Plan the exam around your visa appointment, with time for results to arrive and for a retake if needed; our article on Goethe certificate validity goes into the details." },
    { figure: { photo: 'goethe-a1-exam-en-airport-gates', alt: 'A long, empty airport corridor with yellow signs pointing to the gates', caption: 'The A1 proof comes before the flight: German missions check it when you apply for the spouse visa, not after you arrive.' } },
    { h3: 'Who is exempt' },
    { p: "Section 30 lists several cases in which the language requirement does not apply. The most common ones concern **the partner already in Germany**. If they hold an EU Blue Card, an ICT Card or certain permits for skilled workers, researchers, executives, specialists or self-employed people, the spouse does not need A1. The same is true if the partner is a national of Australia, Canada, Israel, Japan, New Zealand, South Korea, the United Kingdom or the United States, the countries whose citizens may enter Germany without a visa even for long stays." },
    { p: "The requirement also does not apply if illness or disability makes it impossible for the spouse to prove basic German, if the spouse has a **recognizably low need for integration**, for example as a graduate with a realistic prospect of a matching job, or if special circumstances make it impossible or unreasonable to try to learn German before entering. The missions in China give one example: someone who has not managed to obtain the certificate despite **a year of serious effort**, shown through courses and exam attempts. They also note that illiteracy, older age, pregnancy, childcare and distance to a language school do not, on their own, make learning impossible." },
    { p: "Spouses of EU citizens who use their right to free movement, and parents moving to Germany with their minor German child, are also covered by other rules and generally do not need the A1 certificate. Whether an exception applies is decided in the visa process, by the mission together with the local foreigners' authority, so **check the page of the mission that handles your application** before you decide not to take the exam." },

    { h: 'How to prepare' },
    { p: "Start with the official material. The Goethe-Institut publishes **free practice sets** (Übungssätze) for Start Deutsch 1 on goethe.de, each with the question sheets, the audio, the answer key, the marking criteria for writing and the examiner's script for the speaking test. Print the question sheets, set a timer and do a whole set in 65 minutes without stopping. Mark it with the key and multiply your raw points by 1.66." },
    { p: "Use the gaps to plan your practice. If listening is weak, train with short audio where you hear a sentence once and note the number, time or place. For writing, practice short emails that answer **exactly three points**, with a greeting and a closing, and time yourself at 20 minutes for both writing tasks. For speaking, learn your self-introduction until it comes easily, and practice spelling your name and street with the German alphabet and saying phone numbers in German, because both come up in part 1." },
    { p: "Most of all, practice speaking with other people. The group format rewards candidates who ask a clear question, listen to the answer and react, which is hard to learn from an app alone. At Alimun, German courses are **live classes with a teacher in a small group**, from the first lesson of A1, and a short level test tells you where to start." },
    { note: { title: 'Do not stop at the certificate', text: "Passing A1 opens the visa, but life in Germany asks for more, and the law does too: the spouse of a German citizen generally needs B1 German for a settlement permit after three years. Keep learning after the exam, and the next certificate will come with far less pressure.", draw: 'pretzel' } },
  ],
  quiz: [
    { q: 'How long is the written part of Start Deutsch 1?', options: ['45 minutes', '65 minutes', '90 minutes', '120 minutes'], a: 1, why: 'Listening takes about 20 minutes, reading 25 and writing 20, for 65 minutes in total without a break.' },
    { q: 'How many candidates can take the A1 speaking test together?', options: ['Only one', 'Two', 'Up to four', 'Up to ten'], a: 2, why: 'The speaking test is a group exam with at most four candidates and two examiners.' },
    { q: 'How many points do you need to pass Start Deutsch 1?', options: ['50 of 100', '60 of 100', '65 of 100', '75 of 100'], a: 1, why: 'The exam is passed with at least 60 of 100 points, provided you took all the parts.' },
    { q: 'In which listening part do you hear each text only once?', options: ['Part 1', 'Part 2', 'Part 3', 'In all parts'], a: 1, why: 'Part 2, with public announcements, is heard once; parts 1 and 3 are heard twice.' },
    { q: 'How many content points does the short message in writing part 2 usually ask you to cover?', options: ['One', 'Two', 'Three', 'Five'], a: 2, why: 'The task has three points, each worth up to 3 points, plus 1 point for a fitting greeting and closing.' },
    { q: 'You fail Start Deutsch 1 but did well in reading. What do you retake?', options: ['Only the parts below 60 percent', 'Only speaking', 'The whole exam', 'Nothing: reading counts for next time'], a: 2, why: 'Start Deutsch 1 has no modules and can only be retaken as a whole.' },
    { q: 'Which of these certificates is accepted as A1 proof for a spouse visa?', options: ['A certificate from any language school', 'ÖSD Zertifikat A1', 'An integration course attendance note', 'Fit in Deutsch 1 for a 30-year-old'], a: 1, why: 'The missions list Start Deutsch 1 from Goethe or telc and the ÖSD Zertifikat A1, among others.' },
    { q: 'Whose spouse is exempt from the A1 requirement, according to section 30?', options: ['The spouse of any foreign worker', 'The spouse of an EU Blue Card holder', 'Every spouse over 40', 'Every spouse with a university degree'], a: 1, why: 'Spouses of EU Blue Card holders are exempt; a degree alone is not enough for the low-integration-need exception.' },
  ],
  faq: [
    ['Is Start Deutsch 1 hard?', 'It tests only the first CEFR level, and every task type is in the free practice sets on goethe.de. The pass mark is 60 of 100 points, so you can make mistakes and still pass. The parts people find hardest are usually the announcements heard only once and speaking with other candidates without preparation.'],
    ['Do I need A1 if I am marrying a German citizen?', 'Usually yes. Section 28 of the Residence Act applies the A1 requirement to the foreign spouse of a German citizen too. Exceptions exist, for example for illness or disability or special hardship, and the mission decides in the visa process.'],
    ['Can I take the telc or ÖSD A1 exam instead of Goethe?', 'For the spouse visa, yes: the missions list Start Deutsch 1 from telc and the ÖSD Zertifikat A1 next to the Goethe exam. Choose by date, distance and availability, and check the list on the page of your own mission.'],
    ['How old can my A1 certificate be for the visa?', 'As a rule, the exam date should be no more than one year old when you apply, according to the Federal Foreign Office and the missions. The certificate itself does not expire, but the visa office applies this practice.'],
  ],
  related: ['goethe-certificates', 'goethe-validity', 'german-exams-compared', 'how-long-german', 'integration-course', 'german-citizenship', 'german-for-work'],
  sources: [
    ['Goethe-Institut, Durchführungsbestimmungen Goethe-Zertifikat A1: Start Deutsch 1 (as of 1 Sept 2025)', 'https://www.goethe.de/pro/relaunch/prf/tr/Durchfuehrungsbestimmungen_A1_Start_Deutsch_1.pdf'],
    ['Goethe-Institut, Start Deutsch 1 Übungssatz 02 (official practice set)', 'https://www.goethe.de/pro/relaunch/prf/materialien/A1_sd1/sd_1_uebungssatz02.pdf'],
    ['Goethe-Institut, Durchführungsbestimmungen Fit in Deutsch 1 (as of 1 Sept 2025)', 'https://www.goethe.de/pro/relaunch/prf/tr/Durchfuehrungsbestimmungen_A1-A2_Fit_in_Deutsch_1.pdf'],
    ['Goethe-Institut, Fit in Deutsch 1 flyer', 'https://www.goethe.de/resources/files/pdf171/flyer_pruefung_a1_fit_en1.pdf'],
    ['Residence Act, § 30 (spouse reunification)', 'https://www.gesetze-im-internet.de/aufenthg_2004/__30.html'],
    ['Residence Act, § 28 (family of German citizens)', 'https://www.gesetze-im-internet.de/aufenthg_2004/__28.html'],
    ['Federal Foreign Office, visa FAQ (accepted language certificates)', 'https://www.auswaertiges-amt.de/de/service/fragenkatalog-node/-/606772'],
    ['German missions in China, leaflet on simple German for spouses (April 2024)', 'https://china.diplo.de/blob/1302118/497b3042a64bd0819271147ae178bff9/pdf-info-natvisum-deutschkenntnisse-ehegattennachzug-data.pdf'],
  ],
};
