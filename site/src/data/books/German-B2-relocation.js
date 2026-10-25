// German B2, for moving abroad: a goal book next to the German B2 course book (docs/BOOKS.md).
// Draft: reviewed by a native teacher before it is published. Units are written in units/German-B2-relocation/<unit>.js;
// until then each entry is planned, with the outline its writer works from. Explanations in English, translated in i18n/.
export const BOOK = {
  id: 'German-B2-relocation',
  language: 'German',
  level: 'B2',
  track: 'goal',
  goal: 'relocation',
  title: "German for moving abroad",
  review: 'draft',
  units: [
    { id: 'u1', title: "Residence and official language", planned: true, plan: { goal: "Understand official letters and formal procedures and answer them precisely.", lessons: ["Official German: nominal style and passive in letters (Die Unterlagen sind bis … einzureichen)", "Writing a formal request or objection, with structure and register", "Reading: an official letter about an application, and a model reply"] } },
    { id: 'u2', title: "Contracts and your rights", planned: true, plan: { goal: "Understand rental and work contracts and stand up for yourself politely.", lessons: ["Rental contract terms (Nebenkostenabrechnung, Mieterhöhung, Mängel melden)", "Work contract terms (Probezeit, Überstunden, Urlaubsanspruch) explained in general terms", "Reading: a letter reporting a defect in a flat, and the landlord’s answer"] } },
    { id: 'u3', title: "Healthcare in depth", planned: true, plan: { goal: "Talk about health and treatment in detail with doctors and insurers.", lessons: ["Specialists, hospital stays and treatment plans; asking for explanations", "Public and private insurance explained in general terms; understanding a letter from an insurer", "Reading: an article about how people choose a doctor"] } },
    { id: 'u4', title: "Money, taxes and pensions", planned: true, plan: { goal: "Understand the basics of taxes, insurance and pensions and talk about money.", lessons: ["Payslip words (brutto, netto, Steuerklasse, Sozialabgaben), in general terms", "The tax return (Steuererklärung) and common insurances, explained simply", "Reading: a forum thread where newcomers share their questions"] } },
    { id: 'u5', title: "Joining in", planned: true, plan: { goal: "Get involved in clubs, volunteering and local life.", lessons: ["Clubs and associations (Verein), volunteering (Ehrenamt); describing what you do", "Taking part in a meeting and giving your opinion politely", "Reading: a club newsletter and a volunteer call"] } },
    { id: 'u6', title: "Culture and belonging", planned: true, plan: { goal: "Talk about regional differences, humour and what it means to feel at home.", lessons: ["Regional differences, dialects and greetings across German-speaking countries", "Idioms and set phrases for everyday life", "Reading: newcomers describe what made them feel at home"] } },
  ],
};
