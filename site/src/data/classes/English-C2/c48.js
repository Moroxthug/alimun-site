// English C2, class 48 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u10:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c48',
  focus: 'By the end every student can plan and draft a report for a decision-maker in the format of C2 Proficiency Writing Part 2: a title and headings, an impersonal purpose statement (*This report assesses… It draws on…*), selective findings reported with the right certainty (*the figures show* for strong evidence, *the data suggest*, *it would appear that* for weaker), evaluation that weighs strengths and weaknesses (*While the trial has succeeded in…, it has been less effective in…*), compression through nominalisation and participle clauses, and recommendations that follow from the findings (*In light of these findings, it is recommended that the committee extend…*).',
  tips: [
    'Ask for the recommendations first. Once students know what they will recommend, they can choose the two or three findings that matter and leave out the rest; a C2 report is selective.',
    'Certainty is the most common fault: *the survey proves* is almost never true. Every time a student reports evidence, ask *How strong is it?* and let the verb follow the answer.',
    'A report is not a letter and not an essay: no greeting, no *I am writing*, no rhetorical questions. The first person appears, if at all, only in the recommendations.',
    'In the briefing activity, the teacher or the group plays a committee with little time. A good report survives the question *So what do you want us to do?*',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is one change your town or workplace tried recently? Did it work, and how do you know?* Push each student to say how strong their evidence is.' },
    { min: 8, title: 'How sure is the evidence?', md: 'Show board page 1. Students choose the reporting phrase alone, then explain each choice by naming the evidence behind it.' },
    { min: 15, title: 'Compress and recommend', md: 'Show board page 2, then board page 3. Students compress the findings, then correct the recommendations. Ask which recommendation is softer and when a writer would choose it.' },
    { min: 5, title: 'Where does it go?', md: 'Show board page 4. Students sort the sentences into the sections of a report.' },
    { min: 20, title: 'Activity', md: 'Show board page 5: the Writing Part 2 task and the notes. Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student reads out their main recommendation and the finding behind it in one sentence. Set the homework: the full report.' },
  ],
  board: [
    { title: 'How sure is the evidence?', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the phrase that matches the evidence.', items: [
        { q: 'Automatic counters recorded every bicycle for twelve months. ___ that cycling in the old town roughly doubled.', o: ['The figures show', 'There are indications', 'It is rumoured'], why: 'Complete, measured data: a strong verb is earned.' },
        { q: 'A survey of forty residents was carried out. ___ that most of them welcome the change.', o: ['The responses suggest', 'The survey proves', 'It is certain'], why: 'A small survey can suggest, never prove.' },
        { q: 'Two café owners mentioned busier Sundays. ___ that the trial has helped some businesses.', o: ['There are indications', 'It is clear', 'The data demonstrate'], why: 'Anecdotal evidence from two people: the weakest phrase.' },
        { q: 'Complaints about parking in nearby streets rose, though some may have other causes. ___ that the trial has shifted traffic rather than reduced it.', o: ['It would appear', 'It has been established', 'The figures prove'], why: 'A likely interpretation, not a proven one.' },
      ] },
    ] },
    { title: 'Compress the findings', blocks: [
      { t: 'ex', kind: 'transform', h: 'Rewrite each finding in one sentence for a formal report. Start with the words given.', items: [
        { q: 'The council closed the old town to cars. After that, the number of cyclists rose sharply.', cue: 'Following the closure', a: ['Following the closure of the old town to cars, the number of cyclists rose sharply.', 'Following the closure of the old town to cars, cycling rose sharply.'], why: 'Nominalisation (*the closure*) turns the first sentence into a phrase.' },
        { q: 'The council organised two street markets. Both of them attracted large crowds.', cue: 'The council organised two street markets, both', a: ['The council organised two street markets, both of which attracted large crowds.'], why: '*Both of which* replaces a second sentence.' },
        { q: 'Buses had to be rerouted, and this caused delays on several routes.', cue: 'The rerouting', a: ['The rerouting of buses caused delays on several routes.', 'The rerouting of buses led to delays on several routes.', 'The rerouting of buses resulted in delays on several routes.'], why: 'The action becomes the subject: *the rerouting of buses*.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'Which version reports the finding best?', items: [
        { q: 'Sales at shops in the old town:', o: ['While cafés and restaurants report busier Sundays, two shops selling bulky goods have seen a marked fall in trade.', 'In week one, the cafés did well, in week two the shops did badly, in week three the cafés did well again.', 'Shops are angry and cafés are happy.'], why: 'Selective, precise and balanced, with a contrast that the evaluation can use.' },
      ] },
    ] },
    { title: 'Recommend', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake in each recommendation.', items: [
        { s: 'It is recommended that the committee [extends] the trial for a further year.', a: ['extend', 'should extend'], why: 'The base form after *it is recommended that*.' },
        { s: 'The committee may wish to consider [to introduce] a delivery window for shops.', a: ['introducing'], why: '*Consider* + *-ing*.' },
        { s: 'In light [with] these findings, a residents’ parking scheme is advisable.', a: ['of'], why: 'The fixed phrase is *in light of*.' },
        { s: 'It would be [advise] to review bus routes before the trial is extended.', a: ['advisable'], why: '*It would be advisable to*: an adjective after *be*.' },
        { s: '[I am sure that] the committee should approve the plan.', a: ['It is recommended that', 'I would recommend that'], why: 'A recommendation, not a statement of the writer’s certainty.' },
      ] },
    ] },
    { title: 'Where does it go?', blocks: [
      { t: 'ex', kind: 'sort', h: 'Which section of the report does each sentence belong to?', groups: ['Purpose', 'Findings', 'Evaluation', 'Recommendations'], explain: ['groups'], items: [
        { s: 'This report assesses the year-long trial of car-free Sundays in the old town.', g: 0, why: 'Says what the report does.' },
        { s: 'It draws on traffic counts, a residents’ survey and interviews with traders.', g: 0, why: 'Says what it is based on.' },
        { s: 'Cycling in the old town roughly doubled over the year.', g: 1, why: 'A fact, reported precisely.' },
        { s: 'The responses suggest that older residents are concerned about access.', g: 1, why: 'Evidence, hedged to its strength.' },
        { s: 'While the trial has succeeded in reviving Sundays, it has been less effective in reducing traffic overall.', g: 2, why: 'Weighs a strength against a weakness.' },
        { s: 'Given the rise in parking complaints, it is recommended that a residents’ scheme be introduced.', g: 3, why: 'An action linked to a finding.' },
      ] },
    ] },
    { title: 'Exam corner: Writing Part 2, a report', blocks: [
      { t: 'reading', title: 'Your task', md: 'In the format of the C2 Proficiency exam (Writing Part 2): write your answer in **280 to 320 words**.\n\nYour city council ran a one-year trial in which the old town was closed to cars every Sunday. The council’s transport committee has asked you to write a report assessing the trial, considering its effects on residents and on local businesses, and recommending whether and how it should continue.' },
      { t: 'text', md: '**Your notes.** The bicycle counters show cycling roughly doubled. A residents’ survey of forty people: most in favour; older residents worried about getting to the doctor’s and to church. Cafés and restaurants busier; two shops selling furniture and bulky goods report a marked fall in trade. Parking complaints in nearby streets up. Noise clearly lower. Buses rerouted, with delays on two routes. Two street markets, both very popular.' },
      { t: 'tip', art: 'owl', md: 'Write the recommendations in your plan first, then choose only the notes that support them. Give the report a title and a heading for each part, hedge every finding to its strength, and link each recommendation to a finding with *given that*, *in view of* or *in light of*.' },
    ] },
  ],
  activities: {
    one: { title: 'Brief the committee', md: 'The student plans the report on board page 5 in five minutes, starting with the recommendations. Then you play the chair of the transport committee with two minutes to spare: the student briefs you aloud in about a minute (the purpose, the two findings that matter most, the main recommendation), and you ask two hard questions (*What about the shops that lost trade? How sure are you about the survey?*). The student then writes the recommendations section (about 80 words) in eight minutes. Check together that every recommendation rests on a finding and that the base form follows *recommended that*.' },
    small: { title: 'One report, many hands', md: 'Divide the report on board page 5 into sections: purpose, effects on residents, effects on businesses, recommendations (with fewer than four students, one student takes two; with five or six, two students write the recommendations separately and the group chooses). Each student writes their section in eight minutes and posts it in the chat. The group reads the report in order and checks three things: every finding hedged to its strength, at least two compressed sentences, every recommendation linked to a finding. Agree two improvements and make them together.' },
  },
  homework: { book: 'u10', md: 'Finish lesson 4 of unit 10 if needed and do the unit 10 test. Write the report on car-free Sundays from board page 5 in 280 to 320 words and send it to your teacher. Before the review class, read again the language of disagreeing and negotiating in units 9 and 10.' },
};
