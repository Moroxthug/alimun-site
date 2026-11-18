// Third design (docs/BLOG_PLAN.md). Facts checked 17 Nov 2026 against canada.ca: Express Entry language test page
// (CLB conversion tables for CELPIP-General, IELTS General Training and PTE Core per ability, CLB 4 to "10 and above",
// no rows below CLB 4 or for CLB 11/12; minimum CLB for FSW, CEC by TEER and FST; results under 2 years old; IELTS
// General Training only; IELTS One Skill Retake not accepted; page details 2026-10-16), CRS criteria (first official
// language points per ability, skill transferability tables, modified 2026-11-03) and the Federal Skilled Worker page
// (selection grid language points 4/5/6 per ability, up to 24). celpip.ca score comparison chart and test format and
// scoring page (CELPIP levels 0 to 12 and NA with CLB and CEFR columns, raw score charts with M for 0-7 correct,
// scores valid two years from the score report) and results page (2 to 4 business days), read directly on 17 Nov.
// ielts.org scoring in detail (0 to 9, half bands, band names, overall rounding). There is no official CELPIP-to-IELTS
// table: every conversion here goes through the IRCC tables. Complements celpip-vs-ielts (format and choice) and
// clb-levels (the scale and programs). Alimun is not affiliated with Paragon, IELTS or IRCC.
export default {
  key: 'celpip-to-ielts',
  site: 'en',
  slug: 'celpip-to-ielts-score-conversion',
  section: 'exams',
  course: 'English',
  published: '2026-11-17',
  updated: '2026-11-17',
  title: 'CELPIP to IELTS score conversion: chart for every CLB level',
  metaTitle: 'CELPIP to IELTS score conversion chart, CLB 4 to 10 – Alimun',
  desc: 'Convert CELPIP to IELTS General Training and back through the official CLB tables: CELPIP 7 vs IELTS 6, CELPIP 9 vs IELTS 7, CLB 10 and mixed scores.',
  lead: "There is no official table that turns a CELPIP score straight into an IELTS band. There is a bridge, though: Canada converts both tests into **Canadian Language Benchmark (CLB) levels**, skill by skill. Line the two IRCC tables up and you get a conversion that is exact for immigration, and only an estimate anywhere else.",
  photo: 'celpip-to-ielts-harbor-sunset',
  sticker: { draw: 'parrot', say: 'CELPIP 9 is not IELTS 7. Ask your listening score.' },
  facts: [
    { label: 'CELPIP 7 = IELTS 6.0', text: 'in every skill, because both equal CLB 7 in the IRCC tables' },
    { label: 'IELTS 8.0', text: 'in listening is what CELPIP 9 listening equals; in the other three skills it is 7.0' },
    { n: 4, unit: 'skills', text: 'converted one by one: there is no overall CLB level in Express Entry' },
    { n: 2, unit: 'years', text: 'how old your results can be when you create your profile and when you apply' },
  ],
  blocks: [
    { take: { title: 'The short answer', text: "Convert through the CLB, one skill at a time. **A CELPIP level equals the CLB level with the same number**, and IRCC lists the IELTS General Training band for each CLB level. So CELPIP 7 equals IELTS 6.0 in every skill, while CELPIP 9 equals **IELTS 8.0 in listening and 7.0 in reading, writing and speaking**. CELPIP 10 to 12 equals IELTS 8.5 in listening, 8.0 in reading and 7.5 in writing and speaking. Outside Canadian immigration, these are estimates, not official equivalences.", draw: 'owl' } },

    { h: 'Why there is no direct CELPIP to IELTS chart' },
    { p: "CELPIP-General is run by Paragon Testing Enterprises, and IELTS by its own partners. Neither publishes a table that converts its scores into the other test, and IRCC does not either. What IRCC does publish, on its Express Entry language test page, is **one conversion table per approved test**, each pointing to the same scale: the Canadian Language Benchmarks." },
    { p: "That is the bridge. If CELPIP 8 in reading is CLB 8 in reading, and IELTS 6.5 in reading is also CLB 8 in reading, then for Canadian immigration the two results are worth exactly the same. They give the same eligibility and **the same Comprehensive Ranking System (CRS) points**. Whenever people search for “CELPIP equivalency to IELTS”, this is the only conversion with an official basis." },
    { p: "A quick word on the question many people ask first: is CELPIP the same as CLB? No. The CLB is a descriptive scale with 12 levels, not a test. CELPIP is a test whose levels were **designed to line up with the CLB number for number**, which is why the two look identical on paper. IELTS uses its own 0 to 9 band scale, so it needs a real conversion." },

    { h: 'CELPIP to IELTS conversion chart, by CLB level' },
    { p: "Here is the full chart, built from the CELPIP-General and IELTS General Training tables IRCC uses for Express Entry. Read it across: each row is one CLB level, with the CELPIP level and the **minimum IELTS band for each of the four skills**. IELTS bands between two rows count at the lower level, so 7.0 in IELTS listening is still CLB 7, because CLB 8 starts at 7.5." },
    { table: {
      head: ['CLB level', 'CELPIP-General (each skill)', 'IELTS Listening', 'IELTS Reading', 'IELTS Writing', 'IELTS Speaking'],
      rows: [
        ['CLB 10 and above', '10, 11 or 12', '8.5–9.0', '8.0–9.0', '7.5–9.0', '7.5–9.0'],
        ['CLB 9', '9', '8.0', '7.0', '7.0', '7.0'],
        ['CLB 8', '8', '7.5', '6.5', '6.5', '6.5'],
        ['CLB 7', '7', '6.0', '6.0', '6.0', '6.0'],
        ['CLB 6', '6', '5.5', '5.0', '5.5', '5.5'],
        ['CLB 5', '5', '5.0', '4.0', '5.0', '5.0'],
        ['CLB 4', '4', '4.5', '3.5', '4.0', '4.0'],
      ],
      note: 'IELTS General Training bands are the minimum for each CLB level; anything from that band up to the next row counts at that level. Source: IRCC, Express Entry language test page (checked 17 Nov 2026). IELTS Academic is not accepted for Express Entry.',
    } },
    { p: "Two details stand out. The first is that the IELTS column is **not the same in every skill**. Below CLB 7, reading always needs less than writing and speaking, and listening needs half a band more at CLB 4. From CLB 8 up, listening needs **a full band more than writing and speaking**, and reading sits at or below them. The second is that the chart stops at CLB 4 and at “CLB 10 and above”. IRCC lists no IELTS bands for levels below CLB 4, and it does not separate CLB 10, 11 and 12, because for Express Entry they all count the same." },
    { h3: 'And the other way: IELTS to CELPIP' },
    { p: "To convert IELTS to CELPIP, find the CLB level for each IELTS band, then use the CELPIP level with the same number. The table below is the same data, turned around so you can **start from the IELTS band you already have**. It is the quickest way to answer “what is my IELTS score in CELPIP?”" },
    { table: {
      head: ['Your IELTS General Training band', 'Listening', 'Reading', 'Writing', 'Speaking'],
      rows: [
        ['8.5 or more', 'CELPIP 10+', 'CELPIP 10+', 'CELPIP 10+', 'CELPIP 10+'],
        ['8.0', 'CELPIP 9', 'CELPIP 10+', 'CELPIP 10+', 'CELPIP 10+'],
        ['7.5', 'CELPIP 8', 'CELPIP 9', 'CELPIP 10+', 'CELPIP 10+'],
        ['7.0', 'CELPIP 7', 'CELPIP 9', 'CELPIP 9', 'CELPIP 9'],
        ['6.5', 'CELPIP 7', 'CELPIP 8', 'CELPIP 8', 'CELPIP 8'],
        ['6.0', 'CELPIP 7', 'CELPIP 7', 'CELPIP 7', 'CELPIP 7'],
        ['5.5', 'CELPIP 6', 'CELPIP 6', 'CELPIP 6', 'CELPIP 6'],
        ['5.0', 'CELPIP 5', 'CELPIP 6', 'CELPIP 5', 'CELPIP 5'],
        ['4.5', 'CELPIP 4', 'CELPIP 5', 'CELPIP 4', 'CELPIP 4'],
        ['4.0', 'Below CLB 4', 'CELPIP 5', 'CELPIP 4', 'CELPIP 4'],
        ['3.5', 'Below CLB 4', 'CELPIP 4', 'Below CLB 4', 'Below CLB 4'],
      ],
      note: 'Each cell is the CLB level IRCC gives that band, written as the CELPIP level with the same number. Derived from the IRCC Express Entry tables; not a table published by Paragon or IELTS.',
    } },

    { h: 'Worked examples for the most searched scores' },
    { h3: 'CELPIP 7 to IELTS, and CELPIP 7 vs IELTS 6' },
    { p: "CELPIP 7 in a skill is CLB 7 in that skill, and CLB 7 is **IELTS 6.0 in all four skills**. It is the one level where the IELTS column is flat. So CELPIP 7 and IELTS 6 are a true match for immigration: same CLB, same CRS points, and both meet the CLB 7 minimum of the Federal Skilled Worker Program, as long as you have it in every skill." },
    { p: "The match stops being neat one step up. IELTS 6.5 in all four skills is CLB 8 in reading, writing and speaking, but **still CLB 7 in listening**, because listening needs 7.5 for CLB 8. In CELPIP terms, IELTS 6.5 across the board is roughly 7 in listening and 8 in everything else." },
    { h3: 'CELPIP 9 vs IELTS 7' },
    { p: "This is the comparison that causes the most confusion, because people expect “9 equals 7” in every skill. It does not. **CELPIP 9 in all four skills is CLB 9 in all four.** IELTS 7.0 in all four is CLB 9 in reading, writing and speaking, but only CLB 7 in listening, since CLB 9 in listening needs IELTS 8.0 and CLB 8 needs 7.5." },
    { p: "The difference is real money in points. For a single applicant, the CRS gives 31 points per skill at CLB 9 and 17 at CLB 7. CELPIP 9 in all four earns 124 language points; IELTS 7.0 in all four earns 93 plus 17, so 110. The gap continues in the skill transferability section, where the top tier needs **CLB 9 or more in all four skills**. With three years of foreign work experience, for example, CLB 9 in all four is worth 50 points there, while CLB 7 or more with one skill under 9 is worth 25. To match CELPIP 9 across the board on IELTS, you need 8.0 in listening and 7.0 in the rest." },
    { h3: 'CELPIP 5 and CLB 5' },
    { p: "CELPIP 5 is CLB 5. In IELTS terms it is 5.0 in listening, writing and speaking and **only 4.0 in reading**, the lowest band for any skill in the chart above CLB 4. CLB 5 is the minimum for the Canadian Experience Class when your Canadian job is in TEER 2 or 3, and the speaking and listening minimum for the Federal Skilled Trades Program." },
    { h3: 'CLB 10 in CELPIP and in IELTS' },
    { p: "CLB 10 means **CELPIP 10 or higher in each skill**, so 10, 11 and 12 all count as CLB 10 and above. In IELTS it is 8.5 in listening, 8.0 in reading and 7.5 in writing and speaking. In the CRS, CLB 10 is the top language level: 34 points per skill for a single applicant and 32 with a spouse or partner, against 31 and 29 at CLB 9." },

    { figure: { photo: 'celpip-to-ielts-red-maple', alt: 'Red maple leaves on a branch in autumn light', caption: 'In Canada the score that counts is neither CELPIP nor IELTS on its own, but the CLB level each one turns into.' } },

    { h: 'How the two scoring systems work' },
    { p: "Part of the confusion around “CELPIP vs IELTS score” comes from the scales themselves, which look similar but measure in different steps." },
    { panels: [
      ['CELPIP levels', "CELPIP reports a level for each of the four components, from 1 to 12. Paragon's own chart gives each level a description and a CLB match, from CELPIP 4, **adequate proficiency for daily life activities**, to CELPIP 12, expert proficiency in high-stakes contexts. Level 2 matches CLB 1 and 2, levels 0 and 1 mean there is insufficient information to assess, and NA means the component was not administered."],
      ['IELTS bands', "IELTS gives a band from 0 to 9 for each of the four skills, in **whole or half bands**, with names from 9 (expert) through 7 (good) and 6 (competent) down to 1 (non-user); 0 means the questions were not attempted. The overall band is the average of the four, rounded to the nearest half band, so 6.25 becomes 6.5 and 6.125 becomes 6.0."],
    ] },
    { p: "On CELPIP's sample raw-score charts for listening and reading you will also see the letter **M**, used for the lowest raw scores (0 to 7 correct answers out of 38). Paragon adds that these charts are approximate: questions differ in difficulty, so the number of correct answers needed for a level can vary slightly from one test version to another. IELTS reading and listening work the same way behind the scenes. In both cases the reported level or band is what counts, not your raw score." },
    { p: "One more practical difference: **your IELTS overall band plays no role in Canada.** IRCC looks only at the four skill bands. CELPIP does not give an overall level at all, so there is nothing to confuse there. If a friend tells you they have “IELTS 7 overall”, that tells you very little about their CLB profile." },
    { note: { title: 'Use the right test version', text: "These tables apply to **IELTS General Training** and **CELPIP-General** only. IELTS Academic is not accepted for Express Entry, and IRCC states that it does not accept the IELTS One Skill Retake either. A great Academic score does not convert into anything for Express Entry.", draw: 'snail' } },

    { cta: true },

    { h: 'Mixed profiles: your lowest skill decides' },
    { p: "Real score reports are rarely flat. Someone might have IELTS 8.0 in listening, 7.0 in reading, 6.5 in writing and 7.0 in speaking. Convert skill by skill and that becomes **CLB 9, 9, 8 and 9**, which is CELPIP 9, 9, 8 and 9. Nothing is averaged along the way." },
    { p: "For eligibility, the weakest skill sets the result. IRCC asks for CLB 7 in all four skills for the Federal Skilled Worker Program and for the Canadian Experience Class with a job in TEER 0 or 1, and CLB 5 in all four with a job in TEER 2 or 3. The Federal Skilled Trades Program asks for CLB 5 in speaking and listening and CLB 4 in reading and writing. **A single skill below the minimum means you do not qualify**, however high the others are. So an applicant with CELPIP 10 in three skills and 6 in writing does not meet the Federal Skilled Worker minimum." },
    { p: "For points, each skill is scored separately. In the CRS table for your first official language, every skill earns its own points, from 6 at CLB 4 or 5 up to 34 at CLB 10 and above for a single applicant. In the Federal Skilled Worker selection grid, each skill earns 4 points at CLB 7, 5 at CLB 8 and 6 at CLB 9 or higher, up to 24. That is why it pays to know exactly which skill holds you back before you sit the test again." },
    { table: {
      head: ['Profile', 'CLB per skill (L / R / W / S)', 'CRS language points, single applicant'],
      rows: [
        ['CELPIP 9 / 9 / 9 / 9', '9 / 9 / 9 / 9', '124'],
        ['IELTS 7.0 / 7.0 / 7.0 / 7.0', '7 / 9 / 9 / 9', '110'],
        ['IELTS 8.0 / 7.0 / 6.5 / 7.0', '9 / 9 / 8 / 9', '116'],
        ['CELPIP 7 / 7 / 7 / 7 or IELTS 6.0 in each', '7 / 7 / 7 / 7', '68'],
      ],
      note: 'Points for the first official language without a spouse or partner: 17 at CLB 7, 23 at CLB 8, 31 at CLB 9 per skill. Source: IRCC, Comprehensive Ranking System criteria (modified 3 November 2026). Skill transferability points come on top.',
    } },
    { quote: 'Four skills, four conversions. Your weakest one sets your program, all four set your points.' },

    { h: 'Why the conversion is only an estimate outside immigration' },
    { p: "Inside Canadian immigration, the CLB bridge is official: IRCC treats CELPIP 8 and IELTS 6.5 in reading as the same thing. Outside that system, nobody has published that equivalence. An employer, a regulatory body or a college may accept one test and not the other, or set its own scores for each. **Do not assume that a CELPIP result will be read as the IELTS band in our chart**; check what the organization itself asks for." },
    { p: "The two tests also measure in different ways. CELPIP is taken entirely on a computer, including the speaking part, where you record your answers. IELTS speaking is a conversation with an examiner, and the paper or computer test covers listening, reading and writing. Different tasks, different accents and different time limits mean that **the same person can score a little differently on each**, even at the same real level. Our article comparing CELPIP and IELTS looks at the formats in detail." },
    { p: "Even the link to the European CEFR scale differs. Paragon's chart labels CELPIP 7 to 9 as B2, 10 and 11 as C1 and 12 as C2. IRCC does not use the CEFR at all, so treat any CEFR label as a description of the level, not as part of the immigration conversion." },

    { figure: { photo: 'celpip-to-ielts-notebook-pen', alt: 'A green pen lying on an open notebook with sketches, next to a computer mouse', caption: 'Write your four scores down, convert each one, and the skill to work on usually becomes obvious.' } },

    { h: 'Already have a score? Which test to take next' },
    { p: "If your current result already gives you what you need, there is nothing to convert: IRCC accepts both tests, and the CLB level is what counts. Just remember that **results must be less than two years old** both when you create your Express Entry profile and when you submit your application for permanent residence. CELPIP says its own scores are valid for two years from the date the score report is issued." },
    { p: "If you need a higher score, start from the chart. With IELTS, look at listening first: it is the skill where the steps are steepest, with 7.5 needed for CLB 8 and 8.0 for CLB 9. If listening is the only skill holding you back from CLB 9, you know precisely what to train. With CELPIP, the numbers are the CLB levels, so **the gap is visible directly on your score report**." },
    { p: "Switching tests can make sense when the format is the problem: if you freeze in a face-to-face interview, or if typing and recording on a computer throws you, the other test may suit you better. Neither IRCC nor the test makers say that one test is easier, so a switch is a bet on format, not on softer scoring. If you do switch, take a full practice test first, so the new format does not eat the progress you made. CELPIP results arrive online in 2 to 4 business days, which helps if you are working to a draw date." },
    { p: "Whichever test you choose, the skills underneath are the same: following fast speech, reading under time pressure, writing clear and organized texts, and answering out loud without long pauses. An Alimun level test shows where you stand now, and our **live classes with a teacher in a small group** give you speaking practice and written work your teacher corrects, the parts that are hardest to improve alone." },
    { note: { title: 'Check before you book', text: "Conversion tables are updated by IRCC, not by test makers or by us. Before you book or apply, open the Express Entry language test page on canada.ca and **check the current table for your test**.", draw: 'mug' } },
  ],
  quiz: [
    { q: 'Which IELTS General Training band equals CELPIP 7 in reading?', options: ['5.5', '6.0', '6.5', '7.0'], a: 1, why: 'CELPIP 7 is CLB 7, and CLB 7 is IELTS 6.0 in every skill.' },
    { q: 'CELPIP 9 in listening equals which IELTS listening band?', options: ['7.0', '7.5', '8.0', '8.5'], a: 2, why: 'CLB 9 in listening needs IELTS 8.0; in reading, writing and speaking it needs 7.0.' },
    { q: 'What CLB level is IELTS 7.0 in listening?', options: ['CLB 7', 'CLB 8', 'CLB 9', 'CLB 10'], a: 0, why: 'CLB 8 in listening starts at 7.5, so 7.0 stays at CLB 7.' },
    { q: 'Which CELPIP scores count as CLB 10 and above?', options: ['10 only', '10, 11 and 12', '11 and 12 only', '9 and above'], a: 1, why: 'IRCC treats CELPIP 10 and higher in a skill as CLB 10 and above.' },
    { q: 'What is the lowest IELTS reading band that counts as CLB 5?', options: ['3.5', '4.0', '4.5', '5.0'], a: 1, why: 'For reading, IRCC lists 4.0 as CLB 5 and 3.5 as CLB 4.' },
    { q: 'What role does the IELTS overall band play in Express Entry?', options: ['It sets your CLB level', 'It replaces your weakest skill', 'None: only the four skill bands count', 'It decides your second-language points'], a: 2, why: 'IRCC converts each skill separately; the overall band is not used.' },
    { q: 'An applicant has CELPIP 10 in three skills and 6 in writing. Do they meet the Federal Skilled Worker minimum?', options: ['Yes, the average is above 7', 'Yes, three skills are enough', 'No, every skill must be CLB 7 or higher', 'Only with a job offer'], a: 2, why: 'The Federal Skilled Worker Program needs CLB 7 in all four skills.' },
    { q: 'Which IELTS version can you convert to CLB for Express Entry?', options: ['IELTS Academic', 'IELTS General Training', 'IELTS One Skill Retake', 'Any IELTS version'], a: 1, why: 'Only IELTS General Training is accepted; IRCC does not accept the One Skill Retake.' },
  ],
  faq: [
    ['Is CELPIP 9 the same as IELTS 7?', 'Not in every skill. CELPIP 9 equals CLB 9, which is IELTS 7.0 in reading, writing and speaking but IELTS 8.0 in listening. IELTS 7.0 in listening is only CLB 7.'],
    ['Is CELPIP 7 equal to IELTS 6?', 'Yes, for Canadian immigration. Both are CLB 7, and CLB 7 is IELTS General Training 6.0 in all four skills.'],
    ['Are CELPIP and CLB the same thing?', 'No. The CLB is a scale and CELPIP is a test, but CELPIP levels match the CLB level with the same number for immigration: CELPIP 5 is CLB 5 and CELPIP 10 or higher is CLB 10 and above.'],
    ['Is there an official CELPIP to IELTS conversion chart?', 'No. Neither test maker nor IRCC publishes one. The conversion in this article comes from lining up IRCC’s CLB tables for each test, which is exact for Express Entry and an estimate anywhere else.'],
  ],
  related: ['clb-levels', 'celpip-or-ielts', 'express-entry-language', 'ielts-band-scores'],
  sources: [
    ['IRCC: Express Entry language test results and CLB conversion tables', 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-test.html'],
    ['IRCC: Comprehensive Ranking System criteria', 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/crs-criteria.html'],
    ['IRCC: Federal Skilled Worker Program', 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html'],
    ['CELPIP score comparison chart', 'https://www.celpip.ca/score-comparison-chart/'],
    ['CELPIP test format and scoring', 'https://www.celpip.ca/test-format-scoring/'],
    ['CELPIP test results', 'https://www.celpip.ca/take-celpip/test-results/'],
    ['IELTS scoring in detail', 'https://ielts.org/take-a-test/your-results/ielts-scoring-in-detail'],
  ],
};
