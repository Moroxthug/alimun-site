// Express Entry language points. Checked (11 Nov 2026) against IRCC on canada.ca only: the CRS criteria page (modified
// 2026-11-03: first and second official language points per ability, spouse factors, skill transferability with language,
// French additional points, the new Labour Market Integration factor and the removal of LMIA requirements for job offers),
// Express Entry language testing (modified 2026-10-16: accepted tests, two-year validity, IELTS One Skill Retake not
// accepted, TEF Canada "Équivalence ancien score", FSW / CEC by TEER / FST minimums, IELTS, CELPIP and PTE Core tables),
// the Federal Skilled Worker eligibility page (modified 2026-11-03: 67-point grid, language up to 28 points), the Canadian
// Experience Class page, category-based selection (French-language proficiency, NCLC 7 in all four abilities), the
// 18 Feb 2026 news release on 2026 categories, and the 2026 consultation on Express Entry reforms (proposals only).
// Not stated: which language counts as "first" when both are tested (the CRS page does not define it), so left out.
export default {
  key: 'express-entry-language',
  site: 'en',
  slug: 'express-entry-language-points',
  section: 'abroad',
  course: 'English',
  published: '2026-11-11',
  updated: '2026-11-11',
  title: 'Express Entry language points: how your English and French scores count',
  metaTitle: 'Express Entry language points: CLB and CRS explained – Alimun',
  desc: 'The minimum CLB for each Express Entry program, the CRS points per skill with and without a spouse, transferability, French bonus points and test rules.',
  lead: "In Express Entry, your language test does two jobs. It decides whether you can enter the pool at all, and then it feeds points into almost every part of your Comprehensive Ranking System score. **No other factor in your profile moves as many points as a few months of focused English study**, and this guide shows exactly where those points come from.",
  photo: 'express-entry-language-montreal-downtown',
  sticker: { draw: 'suitcase', say: 'CLB 9 in all four. Then we pack.' },
  facts: [
    { n: 136, unit: 'points', text: 'the most a single applicant can earn for first official language, 34 per skill at CLB 10 or more' },
    { n: 50, unit: 'points', text: 'added for NCLC 7 or higher in all four French skills together with CLB 5 or higher in English' },
    { n: 2, unit: 'years', text: 'how long your test results stay usable: less than two years old at profile and at application' },
    { label: 'CLB 9 in all four', text: 'the level that unlocks the top tier of the language-based skill transferability points' },
  ],
  blocks: [
    { take: { title: 'The short answer', text: "To enter Express Entry you need **CLB 7 in all four skills** for the Federal Skilled Worker Program, CLB 7 or CLB 5 for the Canadian Experience Class depending on your job's TEER category, and CLB 5 in speaking and listening plus CLB 4 in reading and writing for the Federal Skilled Trades Program. Once you are in the pool, each skill earns its own CRS points, up to 34 per skill for a single applicant. CLB 9 in all four skills also unlocks the highest skill transferability points, and strong French adds up to 50 more. IRCC changed parts of the CRS on 3 November 2026, so always check the official criteria page before you plan.", draw: 'owl' } },

    { h: 'Two roles for one test' },
    { p: "Express Entry is the system Canada uses to manage applications for three federal economic programs: the Federal Skilled Worker Program, the Canadian Experience Class and the Federal Skilled Trades Program. You create an online profile, IRCC checks whether you meet the rules of at least one program, and then you are ranked against everyone else in the pool with the Comprehensive Ranking System (CRS). Invitations to apply for permanent residence go to the top of that ranking." },
    { p: "Your language test matters at both stages. First, it is an **entry ticket**: each program sets a minimum Canadian Language Benchmark (CLB) level for English, or the equivalent Niveaux de compétence linguistique canadiens (NCLC) level for French, and one skill below it keeps you out. Second, it is a **points engine**: the same CLB levels feed the CRS in four separate places, which is why candidates often retake a test they have already passed." },
    { p: "Everything is measured per skill. IRCC converts your listening, reading, writing and speaking scores into four separate CLB levels, and the overall band on an IELTS report plays no role. If you want to see how each CLB level is defined and how the test tables work in full, our guide to CLB levels covers that in detail. This article stays with one question: **how many points does each level earn you**." },

    { h: 'The minimum level for each program' },
    { p: "IRCC's language testing page for Express Entry sets these minimums. They apply to every one of the four skills, so a candidate with CLB 9 in three skills and CLB 6 in writing does not qualify for the Federal Skilled Worker Program." },
    { table: {
      head: ['Program', 'Minimum in your first official language', 'Which skills'],
      rows: [
        ['Federal Skilled Worker Program', 'CLB / NCLC 7', 'All four'],
        ['Canadian Experience Class, job in TEER 0 or 1', 'CLB / NCLC 7', 'All four'],
        ['Canadian Experience Class, job in TEER 2 or 3', 'CLB / NCLC 5', 'All four'],
        ['Federal Skilled Trades Program', 'CLB / NCLC 5', 'Speaking and listening'],
        ['Federal Skilled Trades Program', 'CLB / NCLC 4', 'Reading and writing'],
      ],
      note: 'Source: IRCC, Express Entry language testing (page modified 16 October 2026). TEER is the training, education, experience and responsibilities category of your job in the National Occupational Classification (NOC).',
    } },
    { p: "The Canadian Experience Class also asks for at least one year of skilled paid work in Canada, or 1,560 hours, in the three years before you apply, in TEER 0, 1, 2 or 3. That is why the CEC minimum depends on your job: **a manager or professional in TEER 0 or 1 needs CLB 7**, while a technician or skilled worker in TEER 2 or 3 needs CLB 5." },
    { h3: 'The Federal Skilled Worker grid' },
    { p: "The Federal Skilled Worker Program has its own pass mark on top of the minimum. Before you can enter the pool through this program, you need **at least 67 points out of 100** on a six-factor selection grid, and language is the biggest factor on it. This grid is separate from the CRS and is only used to decide whether you are eligible." },
    { table: {
      head: ['Level in each skill, first official language', 'Points per skill', 'Points for all four skills'],
      rows: [
        ['Below CLB 7', 'Not eligible', 'Not eligible'],
        ['CLB 7', '4', '16'],
        ['CLB 8', '5', '20'],
        ['CLB 9 or higher', '6', '24'],
        ['Second official language, CLB 5 or higher in all four', '', '4'],
      ],
      note: 'Language is worth up to 28 of the 100 points. Source: IRCC, Federal Skilled Worker Program eligibility (page modified 3 November 2026).',
    } },
    { p: "Moving from CLB 7 to CLB 9 in all four skills is worth 8 points on this grid. For a candidate stuck at 64 or 65, that is often **the fastest way to cross 67**, much faster than gaining another year of work experience." },

    { h: 'First official language: CRS points per skill' },
    { p: "Once you are in the pool, the CRS takes over. The core part of the score, called core or human capital factors, gives points for age, education, official languages and, since 3 November 2026, a new Labour Market Integration factor. For your first official language, **each of the four skills is scored on its own**, and the points depend on whether you are applying with a spouse or common-law partner." },
    { table: {
      head: ['CLB level, per skill', 'With a spouse or partner', 'Without a spouse or partner'],
      rows: [
        ['Less than CLB 4', '0', '0'],
        ['CLB 4 or 5', '6', '6'],
        ['CLB 6', '8', '9'],
        ['CLB 7', '16', '17'],
        ['CLB 8', '22', '23'],
        ['CLB 9', '29', '31'],
        ['CLB 10 or more', '32', '34'],
      ],
      note: 'Points per skill: reading, writing, speaking and listening each score separately. Maximum 128 with a spouse or partner, 136 without. Source: IRCC, CRS criteria (page modified 3 November 2026).',
    } },
    { p: "The steps are not even, and that shapes strategy. The jump from CLB 6 to CLB 7 almost doubles the points for a skill. CLB 8 to CLB 9 is the next big step, worth 8 points per skill for a single applicant. Above that, CLB 10 adds only 3 more per skill. For most candidates, **CLB 9 is the level where effort pays best**, and the next section shows why the reward is even larger than this table suggests." },
    { p: "Here is what the table means for a single applicant. CLB 7 in all four skills gives 68 points. CLB 8 in all four gives 92. CLB 9 in all four gives 124, and CLB 10 or more in all four gives the maximum of 136. The gap between CLB 7 and CLB 9 across the board is 56 points in this factor alone." },
    { h3: 'With or without a spouse' },
    { p: "IRCC scores you as a single applicant if your spouse or partner is not coming with you to Canada, or if they are already a Canadian citizen or permanent resident. Otherwise you are scored in the \"with a spouse\" column, where your own points are slightly lower but your partner can earn up to 40 points of their own, **up to 20 of them for language**." },
    { table: {
      head: ["Spouse's or partner's CLB level, per skill", 'Points per skill'],
      rows: [
        ['CLB 4 or less', '0'],
        ['CLB 5 or 6', '1'],
        ['CLB 7 or 8', '3'],
        ['CLB 9 or more', '5'],
      ],
      note: "Maximum 20 points for the spouse's or partner's first official language. The other spouse factors are education (up to 10) and Canadian work experience (up to 10). Source: IRCC, CRS criteria.",
    } },
    { p: "A partner who takes the test and reaches CLB 9 in all four skills adds 20 points to your profile. Even CLB 7 in all four adds 12. If your partner has never taken a test, those points are simply missing, so **it is often worth booking two tests, not one**." },

    { figure: { photo: 'express-entry-language-calculator', alt: 'A calculator lying on printed bar charts next to a laptop keyboard', caption: 'Language points are counted per skill, then counted again in skill transferability. Doing the arithmetic before you book a retake shows what one more band is worth.' } },

    { h: 'Skill transferability: language counts twice' },
    { p: "The skill transferability section of the CRS gives up to 100 extra points for combinations of factors, and two of the combinations depend directly on your first official language. The thresholds are strict: **every one of the four skills** must reach the level, so your weakest skill decides which column you land in." },
    { table: {
      head: ['Combination', 'CLB 7 or more in all four, one or more under CLB 9', 'CLB 9 or more in all four'],
      rows: [
        ['Post-secondary credential of one year or longer', '13', '25'],
        ['Two or more credentials, one of them three years or longer', '25', '50'],
        ["Master's, professional or doctoral degree", '25', '50'],
        ['Foreign work experience, 1 or 2 years', '13', '25'],
        ['Foreign work experience, 3 years or more', '25', '50'],
      ],
      note: 'Each group (education, foreign work experience) is capped at 50 points, and the whole skill transferability section at 100. Education and foreign work also combine with Canadian work experience under separate rows. Source: IRCC, CRS criteria.',
    } },
    { p: "For trades workers there is a third language combination. A certificate of qualification in a trade occupation earns **25 points with CLB 5 or more in all four skills**, with one or more under CLB 7, and 50 points with CLB 7 or more in all four." },
    { h3: 'A worked example' },
    { p: "Take a single applicant with a bachelor's degree and three years of work experience abroad. With CLB 7 in all four skills, language gives 68 core points, and skill transferability adds 13 for education and 25 for foreign work: 106 points connected to the test. With **CLB 9 in all four skills**, language gives 124 core points, and transferability rises to 25 and 50: 199 points. The same person, with the same degree and the same job history, gains 93 points by improving their English." },
    { p: "Now imagine the same applicant reaches CLB 9 in reading, writing and speaking but stays at CLB 8 in listening, which on IELTS General Training is a 7.5 instead of an 8.0. Core language points become 116, and because one skill is under CLB 9, transferability drops back to 13 and 25. The total falls from 199 to 154. **Half a band in one skill costs 45 points**, which is why the weakest skill deserves most of your preparation time." },
    { quote: 'Your weakest skill decides your column. Train it first.' },

    { cta: true },

    { h: 'Second official language and French points' },
    { p: "If you have test results in both English and French, the second language earns its own points in the core section. They are much smaller than first-language points, but they add up, and **French can also unlock a separate bonus** in the additional points section." },
    { table: {
      head: ['Second official language, per skill', 'Points per skill'],
      rows: [
        ['CLB / NCLC 4 or less', '0'],
        ['CLB / NCLC 5 or 6', '1'],
        ['CLB / NCLC 7 or 8', '3'],
        ['CLB / NCLC 9 or more', '6'],
      ],
      note: 'Maximum 22 points with a spouse or partner, 24 without. The same points apply with or without a spouse, only the cap differs. Source: IRCC, CRS criteria.',
    } },
    { table: {
      head: ['French ability (additional points)', 'Points'],
      rows: [
        ['NCLC 7 or higher in all four French skills, and CLB 4 or lower in English or no English test', '25'],
        ['NCLC 7 or higher in all four French skills, and CLB 5 or higher in all four English skills', '50'],
      ],
      note: 'Source: IRCC, CRS criteria, additional points. Additional points are capped at 600 in total.',
    } },
    { p: "Put together, the numbers are large. A single English speaker who also reaches NCLC 7 in all four French skills earns 12 second-language points and a 50-point bonus, 62 in all. At NCLC 9 in all four, the total is 74. For comparison, that is more than the whole difference between CLB 8 and CLB 10 in English." },
    { h3: 'The French-language proficiency category' },
    { p: "Besides general rounds, IRCC holds category-based rounds that invite only candidates who meet a specific category, ranked by their CRS score inside it. One of the categories on IRCC's current list is **French-language proficiency**: to be eligible you need French test results with a minimum of NCLC 7 in all four abilities, and you must still meet the requirements of an Express Entry program. In its news release of 18 February 2026, IRCC said it would continue holding rounds for candidates with strong French skills in 2026." },
    { p: "This matters because a category round compares you only with other candidates in the same category. Your CRS score still ranks you, but against a smaller group. IRCC adds that category rounds may not be needed when enough candidates in a category are already invited through general rounds, so **no round is guaranteed** for any category." },

    { figure: { photo: 'express-entry-language-montreal-city', alt: 'The downtown skyline of Montreal seen from above, with a river and bridge behind the towers', caption: 'Montreal is in Quebec, which runs its own immigration selection. Express Entry, its French points and its French category apply to the rest of Canada.' } },

    { h: 'What changed on 3 November 2026' },
    { p: "IRCC updated the CRS criteria page on 3 November 2026. The language tables above did not change, but the factors around them did. The core section now includes a **Labour Market Integration factor**, worth up to 140 points with a spouse and 150 without, which rewards either Canadian work experience or a qualifying high-wage job offer, not both. IRCC also removed the Labour Market Impact Assessment (LMIA) requirements for all Express Entry job offers, and the FSW page now states that having an LMIA no longer adds CRS points or gives a profile priority." },
    { p: "At the time of the change, IRCC said it was recalculating the points in existing profiles, which could take up to two weeks. If you created your profile before November, your score may have moved without you doing anything. **Log in and check your current total** before you decide whether a retake is worth it." },
    { p: "There is also a discussion underway. In a 2026 consultation, IRCC described ideas for reforming Express Entry, including a single program with a minimum of CLB or NCLC 6 in all abilities, and said it was assessing whether to remove or change the additional points for French. These are proposals, not rules. **What counts is the criteria page on the day you are scored**, and today it still gives the French points shown above." },

    { h: 'Accepted tests and how long results last' },
    { p: "IRCC accepts three English tests and two French tests for Express Entry, and the exact version matters. In English you need **CELPIP-General, IELTS General Training or PTE Core**. In French you need TEF Canada or TCF Canada. IRCC states that it does not accept the IELTS One Skill Retake, so if one IELTS skill comes back low you sit the full test again. Academic versions of IELTS and PTE are not on the list." },
    { table: {
      head: ['Target', 'IELTS General Training (L / R / W / S)', 'CELPIP-General (each skill)', 'PTE Core (L / R / W / S)'],
      rows: [
        ['CLB 7', '6.0 / 6.0 / 6.0 / 6.0', '7', '60–70 / 60–68 / 69–78 / 68–75'],
        ['CLB 9', '8.0 / 7.0 / 7.0 / 7.0', '9', '82–88 / 78–87 / 88–89 / 84–88'],
        ['CLB 10 or more', '8.5 / 8.0 / 7.5 / 7.5 and above', '10 and above', '89+ / 88+ / 90+ / 89+'],
      ],
      note: 'L = listening, R = reading, W = writing, S = speaking. Source: IRCC, Express Entry language testing. Our CLB levels guide has the full tables from CLB 4 upward.',
    } },
    { p: "Look at IELTS listening: CLB 9 needs **8.0 in listening** but only 7.0 in the other three skills. That single cell is behind many disappointed profiles, and it is the reason the worked example above uses listening as the weak skill. With CELPIP the conversion is simpler, because each CELPIP level equals the CLB level with the same number." },
    { p: "Your results must be **less than two years old** on the day you complete your Express Entry profile and again on the day you submit your application for permanent residence. If your results will expire while you are in the pool or before you can apply, IRCC says you can retake the test, apply before they expire, or decline an invitation and return to the pool. Applications that rely on expired results are refused." },
    { note: { title: 'TEF Canada scores', text: "If you take TEF Canada, IRCC asks you to enter only the scores in the **\"Équivalence ancien score\"** column of your results, not the scores out of 699. Entering the wrong column can change your NCLC levels and your points.", draw: 'croissant' } },

    { figure: { photo: 'express-entry-language-maple-tree', alt: 'Bright green maple leaves on a branch in sunlight against a dark green background', caption: 'Test results last two years. Plan your test date so the results are still valid when the invitation, and the application, come.' } },

    { h: 'How to plan your English for Express Entry' },
    { p: "Start with the arithmetic, not the booking page. Write down your current CLB in each skill, your education and your work history, then use the tables in this guide or IRCC's own CRS tool to see what your score would be at CLB 7, CLB 8 and CLB 9 in all four skills. For most candidates with a degree and some foreign work experience, **CLB 9 across the board is the real target**, because it moves both the core language points and the transferability points." },
    { p: "Then train the skill that is holding you back. Speaking and writing are the two skills learners usually practice least on their own, and both are marked by examiners against detailed criteria. In speaking especially, regular practice with someone who corrects you is hard to replace. At Alimun, a level test shows where you stand, and **live classes with a teacher in a small group** give you the weekly speaking time that test day rewards." },
    { p: "Finally, think about timing. Results must stay valid until you submit your permanent residence application, so taking the test too early can force a costly retake, while taking it too late can delay your profile. Pick a date, aim for the scores in the table above, and check the official pages again before you create your profile, because IRCC adjusts the system more often than most applicants expect." },
  ],
  quiz: [
    { q: 'What is the minimum level in each skill for the Federal Skilled Worker Program?', options: ['CLB 5', 'CLB 6', 'CLB 7', 'CLB 9'], a: 2, why: 'The FSW Program asks for CLB or NCLC 7 in all four skills of your first official language.' },
    { q: 'A Canadian Experience Class candidate with a job in TEER 2 or 3 needs at least …', options: ['CLB 4', 'CLB 5', 'CLB 7', 'CLB 8'], a: 1, why: 'TEER 0 or 1 needs CLB 7; TEER 2 or 3 needs CLB 5 in all four skills.' },
    { q: 'How many CRS points does CLB 9 earn per skill for a single applicant?', options: ['29', '23', '34', '31'], a: 3, why: 'CLB 9 is worth 31 points per skill without a spouse and 29 with one.' },
    { q: 'What do you need for the top tier of the education and language transferability points?', options: ['CLB 9 or more in all four skills', 'An IELTS overall band of 7.0', 'CLB 9 in speaking only', 'CLB 7 in all four skills'], a: 0, why: 'The 25 and 50 point columns require CLB 9 or more on all four first official language abilities.' },
    { q: 'How many additional points does NCLC 7 in all four French skills earn with CLB 5 or higher in all four English skills?', options: ['15', '25', '50', '6'], a: 2, why: 'Bilingual candidates at that level receive 50 additional points; with weak or no English the bonus is 25.' },
    { q: 'How old can your language test results be in Express Entry?', options: ['Less than one year', 'Less than two years', 'Less than three years', 'There is no limit'], a: 1, why: 'Results must be less than two years old when you complete your profile and when you submit your application.' },
    { q: 'Which of these tests does IRCC accept for Express Entry?', options: ['IELTS Academic', 'PTE Academic', 'IELTS One Skill Retake', 'PTE Core'], a: 3, why: 'The accepted English tests are CELPIP-General, IELTS General Training and PTE Core.' },
    { q: 'Which IELTS General Training listening score corresponds to CLB 9?', options: ['7.0', '7.5', '8.0', '8.5'], a: 2, why: 'CLB 9 needs 8.0 in listening and 7.0 in reading, writing and speaking.' },
  ],
  faq: [
    ['Is CLB 7 enough to get an Express Entry invitation?', "CLB 7 is enough to qualify for the Federal Skilled Worker Program and for many Canadian Experience Class candidates, but qualifying only puts you in the pool. Invitations go to the highest CRS scores, and CLB 9 in all four skills earns far more points, both in the language factor and in skill transferability."],
    ['Does my IELTS overall band score matter for Express Entry?', 'No. IRCC converts each of your four skill scores into a separate CLB level, and the CRS scores each skill on its own. The overall band on your report plays no role.'],
    ['Should my spouse take a language test too?', "If your spouse or partner is coming with you and is not a Canadian citizen or permanent resident, their language results can add up to 20 points, 5 per skill at CLB 9 or more. Without a test, those points are not counted."],
    ['Can I get points for French if English is my main language?', 'Yes. A second official language earns up to 24 points for a single applicant, and NCLC 7 or higher in all four French skills together with CLB 5 or higher in English adds 50 more. You need TEF Canada or TCF Canada results.'],
    ['Did the November 2026 changes affect language points?', 'The language tables on the CRS criteria page stayed the same. What changed on 3 November 2026 was the work experience and job offer side: a new Labour Market Integration factor and the removal of LMIA requirements for job offers. Check your profile, because IRCC recalculated existing scores.'],
  ],
  related: ['clb-levels', 'celpip-or-ielts', 'canada-citizenship-language', 'ielts-band-scores', 'cefr-english', 'how-long-english', 'practise-speaking'],
  sources: [
    ['IRCC: Express Entry, Comprehensive Ranking System (CRS) criteria', 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/crs-criteria.html'],
    ['IRCC: Express Entry language testing (accepted tests, minimums, validity)', 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-requirements/language-testing.html'],
    ['IRCC: Federal Skilled Worker Program eligibility and selection grid', 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/federal-skilled-workers.html'],
    ['IRCC: Canadian Experience Class eligibility', 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/canadian-experience-class.html'],
    ['IRCC: Express Entry category-based selection', 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html'],
    ['IRCC news release, 18 February 2026: 2026 Express Entry categories', 'https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/02/canada-prioritizes-top-talent-in-2026-immigration-express-entry-categories.html'],
    ['IRCC: 2026 consultation on reforms to Express Entry and the CRS', 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/transparency/consultations/2026-consultation-express-entry.html'],
  ],
};
