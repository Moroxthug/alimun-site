// Third design (docs/BLOG_PLAN.md). Facts checked 11 Nov 2026 against: Council of Europe CEFR global scale and
// self-assessment grid (coe.int blocks automated reading; the B2 descriptors were compared with a verbatim copy of the
// self-assessment grid on utwente.nl and with the already-checked cefr-english article, and are paraphrased here);
// cambridgeenglish.org: B2 First results (180-190 grade A = C1, 173-179 grade B = B2, 160-172 grade C = B2,
// 140-159 = B1, 122-139 statement of results only, no certificate), exam format (Reading and Use of English 1h15,
// Writing 1h20, Listening about 40 min, Speaking 14 min per pair), free digital and paper sample tests, free level
// check ("not an official exam"); ielts.org: 5.5-6.5 = B2, 7-8 = C1, about 9 = C2; ets.org score scale update:
// 1-6 scale in half points from January 2026, B2 = 4 and 4.5 overall and per section, 5 = C1, three scores on every
// report for two years (CEFR level, 1-6 scores, comparable 0-120); Duolingo English Test blog on CEFR alignment:
// B1 60-95, B2 100-125, C1 130-150, C2 155-160; GOV.UK Student visa knowledge of English (degree level B2, below
// degree B1, HEP may assess, SELT, exempt nationalities); GOV.UK Skilled Worker knowledge of English (B2; B1 if
// extending a visa held before 8 January 2026); GOV.UK SELT list (updated 2 November 2026: IELTS for UKVI, IELTS
// Life Skills, LanguageCert SELT tests, PTE Academic UKVI, PTE Home, Skills for English UKVI, Trinity SELT; only listed
// tests count). Cambridge guided learning hours (support.cambridgeenglish.org blocks automated reading; B2 First
// about 500-600 hours and about 200 hours per level confirmed through search, B1 350-400 and C1 700-800 as in the
// checked how-long-english article). Not verified and left out: exam fees, university-specific requirements,
// a start date for the Skilled Worker B2 rule, B1 bands for IELTS.
export default {
  key: 'english-b2-level',
  site: 'en',
  slug: 'b2-level-english',
  section: 'levels',
  course: 'English',
  published: '2026-11-11',
  updated: '2026-11-11',
  title: 'B2 level English: what it means and how to know if you have it',
  metaTitle: 'B2 level English: what it means, exam scores and tests – Alimun',
  desc: 'What B2 (upper intermediate) English means on the CEFR, the B2 scores in B2 First, IELTS, TOEFL and Duolingo, where B2 is required and how to check yours.',
  lead: 'B2 is the level that shows up most often on visa rules, university pages and job ads. Here is what it means in practice, **how each major exam reports it**, and how to find out honestly whether you are there yet.',
  photo: 'english-b2-level-en-discussion',
  sticker: { draw: 'parrot', say: 'At B2 you stop getting by and start arguing back.' },
  facts: [
    { label: '160 to 179', text: 'the B2 First score range that earns a B2 certificate on the Cambridge English Scale' },
    { label: 'IELTS 5.5 to 6.5', text: 'the bands IELTS itself places at B2' },
    { label: '100 to 125', text: 'the Duolingo English Test range that Duolingo aligns with B2' },
    { label: '500 to 600 hours', text: 'of guided learning Cambridge gives as a rough guide for B2 First' },
  ],
  blocks: [
    { take: {
      title: 'The short answer',
      text: "B2, or **upper intermediate**, means you can follow the main ideas of complex texts, including technical discussion in your own field, and hold a conversation with native speakers without strain on either side. You prove it with an exam such as B2 First (160 to 179), IELTS (5.5 to 6.5), the new TOEFL iBT (4 or 4.5) or the Duolingo English Test (100 to 125). To check where you are, start with a free level check and then sit **an official sample test under real timing**.",
      draw: 'owl',
    } },

    { h: 'What B2 means on the CEFR' },
    { p: "B2 is the fourth of the six levels of the **Common European Framework of Reference for Languages** (CEFR), the scale the Council of Europe published in 2001 and that most exams, schools and governments now use. Together with B1 it makes up the independent user stage, and its official English name is Vantage. In everyday English, schools and course books usually call it upper intermediate." },
    { p: "The CEFR does not count words or grammar rules. It describes what you **can do** with the language. On the global scale, a B2 user understands the main ideas of complex text on both concrete and abstract topics, including technical discussions in their own field. They interact with enough fluency and spontaneity that regular conversation with native speakers works without strain for either party. And they can write clear, detailed text on a wide range of subjects and explain a viewpoint on a topical issue, giving the advantages and disadvantages of different options." },
    { p: "That last part is the heart of B2. At B1 you can describe what happened and say what you think in simple terms. At B2 you can **build an argument**: weigh options, defend a position, push back politely and keep going when the conversation moves somewhere you did not plan. You still make mistakes, and you still search for words sometimes, but the mistakes rarely stop the other person from understanding you." },
    { p: "In 2020 the Council of Europe published the CEFR Companion Volume, which describes the plus levels in more detail. If a teacher tells you that you are B2+, it means you are solidly B2 and already doing some things that belong to C1, though not yet consistently across every skill." },

    { h: 'What you can do at B2, skill by skill' },
    { p: "The CEFR self-assessment grid breaks each level into listening, reading, speaking and writing. It is written in the first person, so you can read it as a set of honest questions about yourself. Here is the B2 column in plain terms, with a real-life example of what each one looks like." },
    { table: {
      head: ['Skill', 'What the CEFR says you can do at B2', 'What that looks like in real life'],
      rows: [
        ['Listening', 'Follow extended speech and lectures, even complex arguments, if the topic is reasonably familiar; understand most TV news and current affairs programs and most films in standard English.', 'You watch a series without subtitles and miss jokes, not the plot.'],
        ['Reading', 'Read articles and reports on current problems where the writer takes a clear position; understand contemporary prose fiction.', 'You read an opinion piece and can say what the author wants you to believe.'],
        ['Speaking with others', 'Interact with enough fluency and spontaneity for normal conversation with native speakers; take an active part in discussions on familiar topics, explaining and defending your views.', 'In a meeting you disagree, give your reasons and answer the follow-up question.'],
        ['Speaking on your own', 'Give clear, detailed descriptions on a wide range of subjects; explain a viewpoint on a current issue with its advantages and disadvantages.', 'You present a short project update and handle what comes after the slides.'],
        ['Writing', 'Write clear, detailed text on a wide range of subjects; write an essay or report giving reasons for or against a point of view; write letters that show what events and experiences mean to you.', 'You write a complaint email that is firm, organized and still polite.'],
      ],
      note: 'Paraphrased from the Council of Europe CEFR self-assessment grid and global scale.',
    } },
    { p: "Very few people sit at exactly the same level in all four skills. A common profile is someone who reads at B2 because they read English documents at work every day, but speaks at B1 because they rarely get to talk. Another is the person who learned from films and series and understands far more than they can write. Both are normal, and it is why many exams give you **a separate score for each skill** as well as an overall result." },

    { h: 'What B2 English sounds like' },
    { p: "B2 is less about rare words and more about how you connect ideas. You concede a point before making yours, you soften an opinion so it does not sound blunt, and you talk about what might have happened if things had gone differently. These are a few sentences that sit comfortably at this level." },
    { examples: [
      ["**Although** the plan looks good on paper, I'm not convinced it will work in practice.", 'A concession with although: you accept one side before arguing the other.'],
      ["If we **had booked** earlier, we **would have saved** a lot.", 'The third conditional, for talking about a past that could have gone differently.'],
      ['The contract **is being reviewed** by our lawyers at the moment.', 'A passive in the continuous form, common in work emails and updates.'],
      ["**It seems to me that** we're solving the wrong problem.", 'A way to give an opinion without sounding aggressive.'],
      ['**On the one hand** remote work saves time; **on the other**, it can feel isolating.', 'Weighing advantages and disadvantages, which is a B2 descriptor in itself.'],
      ["I'd rather you **didn't mention** it to the client yet.", 'Would rather followed by the past simple, a structure most B1 learners do not yet use.'],
    ] },
    { p: "If you understand all of these easily but would not produce them yourself in the middle of a conversation, you are probably in the zone between B1 and B2 where **understanding runs ahead of speaking**. That gap is normal. It closes with regular speaking practice, not with more reading." },
    { figure: { photo: 'english-b2-level-en-writing-notes', alt: 'A person writing in a notebook with a pen while holding a phone over a closed laptop', caption: 'B2 writing shows in its structure: an opening, connected arguments and a conclusion that takes a position.' } },

    { h: 'How B2 shows up in English exams' },
    { p: "A level only counts for a university, an employer or a visa officer when it is certified. The major English exams report B2 in different ways. Some are built for one level, while others give everyone the same test and **map the score to the CEFR**. Each exam board does its own research to align its scores with the framework, so the ranges below are the ones each board publishes for its own test." },
    { h3: 'Cambridge B2 First' },
    { p: "B2 First is the Cambridge English exam designed for this level. It has four papers: Reading and Use of English (1 hour 15 minutes), Writing (1 hour 20 minutes), Listening (about 40 minutes) and Speaking, which you take with another candidate and lasts 14 minutes per pair. Results come on the Cambridge English Scale. A score from **160 to 179** earns a B2 certificate, with grade C from 160 to 172 and grade B from 173 to 179. From 180 to 190 you get grade A and a certificate at C1. From 140 to 159 you get a certificate at B1, and from 122 to 139 you receive a statement of results but no certificate." },
    { h3: 'IELTS' },
    { p: "IELTS has no separate exam per level. Everyone takes the same test and gets a band from 0 to 9 for listening, reading, writing and speaking, plus an overall band. According to IELTS's own explanation of how it relates to the CEFR, a score of **5.5 to 6.5** is equivalent to B2, while 7 to 8 corresponds to C1. If an organization asks for B2 and accepts IELTS, check whether it also sets a minimum for each skill, because many do." },
    { h3: 'TOEFL iBT' },
    { p: "TOEFL iBT changed its scale in January 2026. Scores now run from 1 to 6 in half points and are aligned directly with the CEFR. On ETS's table, **4 and 4.5** correspond to B2, both overall and in each section, and 5 corresponds to C1. To ease the change, ETS is putting three scores on every report for two years: the CEFR level, the 1 to 6 scores and a comparable score on the old 0 to 120 scale, so schools that still quote the old numbers can read the result." },
    { h3: 'Duolingo English Test' },
    { p: "The Duolingo English Test reports an overall score on a scale that goes up to 160. Duolingo's published alignment with the CEFR places **100 to 125** at B2, 60 to 95 at B1, 130 to 150 at C1 and 155 to 160 at C2. You take it online, and as with any test, check that the place you are applying to lists it before you book." },
    { table: {
      head: ['Exam', 'Score that the exam board places at B2', 'Score placed at C1'],
      rows: [
        ['Cambridge B2 First', '160 to 179 on the Cambridge English Scale', '180 to 190 (grade A)'],
        ['IELTS', 'Bands 5.5 to 6.5', 'Bands 7 to 8'],
        ['TOEFL iBT (1 to 6 scale, from January 2026)', '4 or 4.5', '5'],
        ['Duolingo English Test', '100 to 125', '130 to 150'],
      ],
      note: 'Sources: cambridgeenglish.org, ielts.org, ets.org, englishtest.duolingo.com. Each board sets its own alignment; fees, dates and rules change, so check the official page before you book.',
    } },
    { figure: { photo: 'english-b2-level-en-meeting-laptops', alt: 'Several laptops open on a shared office table with people sitting around it', caption: 'Most employers who ask for B2 have meetings like this in mind: following the discussion and adding to it.' } },

    { h: 'Where B2 is required' },
    { p: "B2 is often the line between being able to **study or work in English** and needing help to do it. That is why it turns up so often in official rules. The clearest examples come from the UK, where the requirement is written into the visa guidance itself." },
    { h3: 'UK Student visa' },
    { p: "For a UK Student visa, GOV.UK says you need English **equivalent to CEFR B2** if you are studying at degree level or above, and B1 if you are studying below degree level. At degree level, your university, called a Higher Education Provider, can assess your English itself and may use its own test, but the result must still be equivalent to B2. Otherwise you prove your level with a Secure English Language Test (SELT) from an approved provider, or with certain qualifications, such as a degree taught in English. Nationals of some countries, including the USA, Canada, Australia, New Zealand and Ireland, do not need to prove their English." },
    { h3: 'UK Skilled Worker visa' },
    { p: "For a Skilled Worker visa, GOV.UK asks you to show that you can read, write, speak and understand English to **at least B2**. If you held the visa before 8 January 2026 and are applying to extend or update it, the guidance says B1 is enough. You can prove your level with a SELT, with certain UK school qualifications or degrees, or with a non-UK degree taught in English that has been confirmed by Ecctis. Some groups are exempt, including nationals of the listed countries and some healthcare professionals who passed an English assessment accepted by their professional body." },
    { note: { title: 'A B2 certificate is not always a visa test', text: "For UK immigration, only the tests on the government's **SELT list** count. On the version updated 2 November 2026 it includes IELTS for UKVI, IELTS Life Skills, LanguageCert SELT tests, PTE Academic UKVI, PTE Home, Skills for English UKVI and Trinity's SELT exams. Standard IELTS Academic, TOEFL and Duolingo are not on it, so check before you book.", draw: 'suitcase' } },
    { h3: 'Universities and employers' },
    { p: "University admissions vary a lot. Many programs set B2 as a minimum, while others, especially competitive degrees taught in English, ask for C1. Each university also chooses which tests it accepts and what score it wants, sometimes skill by skill. ETS itself advises universities to **first decide on the CEFR level** a program needs and then set the score. For you, that means reading the admissions page of each program carefully, not relying on what a friend needed somewhere else." },
    { p: "Employers are less formal. Job ads often ask for B2 or upper intermediate without naming a certificate, and many check your English in the interview instead. A certificate still helps, because it turns a claim on your CV into something someone can verify." },
    { cta: true },

    { h: 'How to check your level' },
    { p: "Plenty of people search for a B2 English test hoping for an answer in five minutes. A short quiz is a good start, but it mostly measures grammar and vocabulary. To know whether you are really B2, you also need to test **listening, writing and speaking**, the skills a quick quiz cannot see. Think of it as three checks, from quick to thorough." },
    { h3: 'A quick level check' },
    { p: "Cambridge English offers a free online level check that gives you a rough idea of your level. Cambridge states clearly that it is **not an official exam** and that the score is only a guide, not proof of your English. The Alimun level test works the same way: it places you from A1 to C2 in a few minutes so you know which class to start in. On our Resources page there is also a free ten-question English quiz at B2, covering the passive, reported speech, wish and common collocations, with every answer explained. None of these is a certificate; they tell you where to look." },
    { h3: 'An official sample test' },
    { p: "The most reliable check before a real exam is **a full practice test with official material**. Cambridge publishes free B2 First sample tests: digital versions of the Listening, Reading and Use of English, and Writing papers, plus two complete paper-based tests with answer keys and a listening tapescript. IELTS, ETS and Duolingo all publish their own practice material on their official sites as well." },
    { p: "To make a practice test count, treat it like the real thing. Keep the real timing, which for B2 First means 1 hour 15 minutes for Reading and Use of English, 1 hour 20 minutes for Writing and about 40 minutes for Listening. Do it in one sitting, with no dictionary and no pausing the audio. Then mark it with the official answers and look at **where you lose points**, not only at the total. Writing and speaking do not mark themselves, so ask someone who knows the exam criteria to read and listen to yours." },
    { figure: { photo: 'english-b2-level-en-cafe-work', alt: 'People working on laptops at tables in a bright cafe with wooden blinds', caption: 'A practice test is worth most when you take it in one sitting, with the real timing and no help.' } },
    { h3: 'An honest check against the descriptors' },
    { p: "Finally, go back to the CEFR grid and ask yourself the questions directly. Can you follow a meeting or a lecture on a topic in your field? Can you write a work email that explains a problem and proposes a solution without checking every word? Can you keep up a ten-minute discussion on a current topic and defend your view when someone disagrees? If the answer is yes in almost every case, **you are close to B2** or already there." },

    { h: 'How long it takes to reach B2' },
    { p: "Cambridge English gives approximate guided learning hours for each of its exams, meaning time spent learning with a teacher. For B2 First the guideline is **about 500 to 600 hours**, compared with about 350 to 400 for B1 Preliminary and about 700 to 800 for C1 Advanced. Cambridge also says that moving from one CEFR level to the next takes roughly 200 guided hours, and it stresses that these are guidelines only: you may need more or less depending on your starting point, how much you study between lessons and how often you use English." },
    { table: {
      head: ['Level', 'Approximate guided learning hours (Cambridge guideline)'],
      rows: [
        ['B1', 'About 350 to 400'],
        ['B2', 'About 500 to 600'],
        ['C1', 'About 700 to 800'],
      ],
      note: 'Cambridge English, guided learning hours. Hours with a teacher; your own study time comes on top, and your total may be higher or lower.',
    } },
    { p: "If you are at B1 today, the gap between those rows gives you a sense of what is left: a couple of hundred guided hours, plus everything you do on your own. That is why **consistency beats intensity**. A few hours every week for many months will usually take you further than one heroic month followed by nothing." },
    { h3: 'Where to put your effort' },
    { p: "Moving from B1 to B2 usually comes down to three things. The first is speaking for longer: not one-sentence answers, but whole minutes where you explain, compare and defend an idea. The second is writing structured texts, such as formal emails, reviews and short essays, and having someone show you what to change. The third is listening to real English at natural speed on topics you do not already know, such as news, podcasts and talks." },
    { p: "On grammar, B2 brings fewer new rules than you might expect. What changes is how confidently and flexibly you use the ones you know: conditionals, the passive, modal verbs for probability, reported speech and linking words for contrast. Vocabulary grows a lot, especially **collocations and phrasal verbs**, which are what make English sound natural." },
    { p: "In Alimun's live classes you learn with a teacher in a small group, with exercises that give instant feedback and homework your teacher corrects, which is the kind of setting where speaking and writing, the two skills that usually lag behind, get regular practice. When official practice tests put you **in the B2 range consistently**, not just once on a good day, it is a good time to book the exam." },
    { quote: 'B2 is not English without mistakes. It is English that works without effort on either side.' },
  ],
  quiz: [
    { q: 'In which CEFR stage does B2 sit?', options: ['Basic user', 'Independent user', 'Proficient user', 'Native user'], a: 1, why: 'B1 and B2 make up the independent user stage; A1 and A2 are basic users, C1 and C2 proficient users.' },
    { q: 'Which of these is a B2 descriptor in the CEFR?', options: ['Introducing yourself with simple phrases', 'Explaining a viewpoint with the advantages and disadvantages of different options', 'Understanding virtually everything heard or read with ease', 'Filling in a form with your name and address'], a: 1, why: 'Explaining a viewpoint on a topical issue and weighing the options is part of the B2 description.' },
    { q: 'Which B2 First score earns a B2 certificate?', options: ['122 to 139', '140 to 159', '160 to 179', '180 to 190'], a: 2, why: 'From 160 to 179 you get a B2 certificate (grade C or B); 180 to 190 earns grade A and a C1 certificate.' },
    { q: 'Which IELTS bands does IELTS place at B2?', options: ['4 to 5', '5.5 to 6.5', '7 to 8', 'Only 9'], a: 1, why: 'IELTS says 5.5 to 6.5 is equivalent to B2, while 7 to 8 corresponds to C1.' },
    { q: 'On the TOEFL iBT 1 to 6 scale introduced in January 2026, which scores correspond to B2?', options: ['3 and 3.5', '4 and 4.5', '5 and 5.5', '6'], a: 1, why: 'On ETS’s table, 4 and 4.5 correspond to B2, overall and in each section.' },
    { q: 'Which Duolingo English Test range does Duolingo align with B2?', options: ['60 to 95', '100 to 125', '130 to 150', '155 to 160'], a: 1, why: 'Duolingo places 100 to 125 at B2, 60 to 95 at B1 and 130 to 150 at C1.' },
    { q: 'What English level does a UK Student visa require for degree-level study?', options: ['A2', 'B1', 'B2', 'C1'], a: 2, why: 'GOV.UK asks for English equivalent to CEFR B2 at degree level or above, and B1 below degree level.' },
    { q: 'About how many guided learning hours does Cambridge give for B2 First?', options: ['180 to 200', '350 to 400', '500 to 600', '1,000 to 1,200'], a: 2, why: 'Cambridge gives about 500 to 600 guided learning hours for B2 First, as a guideline only.' },
  ],
  faq: [
    ['Is B2 the same as upper intermediate?', 'Yes, in practice. The CEFR calls B2 Vantage, but schools, course books and job ads in English usually call it upper intermediate. B1 is usually called intermediate and C1 advanced.'],
    ['Does a free online level test prove I am B2?', 'No. Free level checks, including the one from Cambridge English, are only a guide. Cambridge says so on the test page itself. To prove B2 to a university, an employer or a visa officer, you need a recognized exam, and for UK visas it must be a test on the SELT list.'],
    ['Can I use B2 First for a UK visa?', 'Not as a Secure English Language Test, because it is not on the government’s SELT list. For a Student visa at degree level, though, your university can assess your English itself, so ask what it accepts. For other routes, take one of the listed SELTs.'],
    ['If I score 180 on B2 First, do I have C1?', 'A score from 180 to 190 earns grade A and a certificate at C1 level. If you need to show C1 fully, for example for a university that asks for C1, the exam designed for that level is C1 Advanced, or check which other results the university accepts.'],
    ['How long does it take to go from B1 to B2?', 'It depends on how much you study and use English. As a guide, Cambridge gives about 350 to 400 guided hours for B1 and about 500 to 600 for B2, and around 200 guided hours to move up one level, with your own study on top.'],
  ],
  related: ['cefr-english', 'b2-first', 'ielts-band-scores', 'how-long-english', 'c1-advanced-or-ielts', 'ielts-or-cambridge', 'toefl-or-ielts', 'duolingo-english-test'],
  sources: [
    ['Council of Europe, CEFR common reference levels: global scale', 'https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale'],
    ['Council of Europe, CEFR self-assessment grid', 'https://www.coe.int/en/web/common-european-framework-reference-languages/table-2-cefr-3.3-common-reference-levels-self-assessment-grid'],
    ['Council of Europe, CEFR Companion Volume (2020)', 'https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-companion-volume'],
    ['Cambridge English, B2 First results', 'https://www.cambridgeenglish.org/exams-and-tests/first/results/'],
    ['Cambridge English, B2 First exam format', 'https://www.cambridgeenglish.org/exams-and-tests/first/exam-format/'],
    ['Cambridge English, B2 First preparation and free sample tests', 'https://www.cambridgeenglish.org/exams-and-tests/first/preparation/'],
    ['Cambridge English, free level check', 'https://www.cambridgeenglish.org/test-your-english/'],
    ['Cambridge English, guided learning hours', 'https://support.cambridgeenglish.org/hc/en-gb/articles/202838506-Guided-learning-hours'],
    ['IELTS, Everything you need to know about IELTS and the CEFR', 'https://ielts.org/news-and-insights/everything-you-need-to-know-about-ielts-and-the-cefr'],
    ['ETS, TOEFL iBT score scale update (1 to 6 and CEFR)', 'https://www.ets.org/toefl/institutions/ibt/score-scale-update.html'],
    ['Duolingo English Test, alignment with the CEFR', 'https://blog.englishtest.duolingo.com/duolingo-test-aligned-with-cefr'],
    ['GOV.UK, Student visa: knowledge of English', 'https://www.gov.uk/student-visa/knowledge-of-english'],
    ['GOV.UK, Skilled Worker visa: knowledge of English', 'https://www.gov.uk/skilled-worker-visa/knowledge-of-english'],
    ['GOV.UK, Prove your English with a Secure English Language Test (SELT)', 'https://www.gov.uk/guidance/prove-your-english-language-abilities-with-a-secure-english-language-test-selt'],
  ],
};
