// German B2 for moving abroad, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Money, taxes and pensions',
  goal: 'Understand the basics of taxes, insurance and pensions and talk about money.',
  art: 'sun',
  tags: { skills: ['reading', 'vocabulary', 'grammar'], topics: ['payslip', 'tax-class', 'tax-return', 'insurance', 'pension', 'je-desto', 'zwar-aber'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Your payslip',
      about: 'Brutto, netto, Steuerklasse and Sozialabgaben, in general terms.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Your payslip (*Gehaltsabrechnung* or *Lohnabrechnung*) starts with your pay before deductions, **brutto**, and ends with the amount paid into your account, **netto**. In between, your employer takes off income tax and social insurance contributions and pays them for you.' },
          { t: 'table', caption: 'Words on a payslip', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['das Bruttogehalt', 'your pay before any deductions'],
            ['das Nettogehalt', 'the amount paid into your account'],
            ['die Lohnsteuer', 'income tax, taken directly from your pay'],
            ['die Kirchensteuer', 'church tax, only for members of certain churches'],
            ['die Sozialabgaben', 'contributions to the social insurances'],
            ['die Rentenversicherung', 'pension insurance'],
            ['die Arbeitslosenversicherung', 'unemployment insurance'],
            ['die Pflegeversicherung', 'long-term care insurance'],
          ] },
        ],
        [
          { t: 'text', md: 'Your tax class (*Steuerklasse*) decides how much income tax is taken from your pay each month. There are six classes. Single people are usually in class I. Married couples can choose a combination, for example IV and IV or III and V. For most social insurances, employers and employees each pay about half of the contribution.' },
          { t: 'tip', art: 'owl', md: 'After you register your address for the first time, you usually receive a tax identification number (*Steuer-ID*) by post. Your employer needs it. Contributions to the pension insurance count towards your later pension; after some years you receive a regular statement, the *Renteninformation*.' },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Das Geld, das auf Ihrem Konto ankommt, ist das ___.', o: ['Nettogehalt', 'Bruttogehalt', 'Sozialabgaben'], why: '*netto*: what is left after all deductions.' },
            { q: 'Sie sind nicht verheiratet. Sie haben meistens Steuerklasse ___.', o: ['I', 'III', 'V'], why: 'Single people are usually in class I. III and V are combinations for married couples.' },
            { q: 'Wer zahlt die Beiträge zur Renten- und Arbeitslosenversicherung?', o: ['Arbeitgeber und Arbeitnehmer, jeweils etwa die Hälfte', 'nur der Arbeitgeber', 'nur der Arbeitnehmer'], why: 'For these insurances, both sides pay about half.' },
            { q: 'Kirchensteuer zahlt man ___.', o: ['nur als Mitglied bestimmter Kirchen', 'immer, wenn man in Deutschland arbeitet', 'nur in Steuerklasse I'], why: 'Church tax is only for members of certain churches.' },
          ] },
        ],
        [
          { t: 'text', md: 'To say that two things grow together, use **je … desto** (or **je … umso**). The *je*-part is a subordinate clause, so its verb goes to the end. The *desto*-part starts with *desto* and a comparative, followed directly by the verb.' },
          { t: 'examples', items: [
            { s: '**Je** mehr ich verdiene, **desto** mehr Steuern zahle ich.', n: '*verdiene* at the end of the *je*-part; *zahle* directly after *desto mehr Steuern*.' },
            { s: '**Je** länger man einzahlt, **desto** höher wird die Rente.', n: 'Two comparatives: *länger*, *höher*.' },
            { s: '**Je** früher Sie die Belege sammeln, **umso** leichter wird die Steuererklärung.', n: '*umso* means the same as *desto*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences with je … desto.', items: [
            { q: 'Je ___ man verdient, desto mehr Steuern zahlt man. (viel)', a: ['mehr'], why: 'The comparative of *viel* is *mehr*.' },
            { q: 'Je höher das Einkommen ist, ___ höher sind die Beiträge.', a: ['desto', 'umso'], why: '*je … desto* or *je … umso*.' },
            { q: 'Je länger man arbeitet, desto höher ___ die Rente. (werden)', a: ['wird'], why: 'After *desto höher* the verb comes next: *wird*.' },
            { q: 'Je früher Sie die Erklärung abgeben, desto schneller ___ Sie Ihr Geld zurück. (bekommen)', a: ['bekommen'], why: 'The verb follows *desto schneller*; the subject *Sie* comes after it.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Je mehr ich verdiene, desto mehr Steuern zahle ich.', why: '*verdiene* at the end of the *je*-part; *zahle* before *ich* in the *desto*-part.' },
            { a: 'Je länger man einzahlt, desto höher wird die Rente.', why: '*einzahlt* at the end; *wird* directly after *desto höher*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the words and their meanings.', pairs: [
            ['brutto', 'vor allen Abzügen'],
            ['netto', 'nach allen Abzügen'],
            ['die Lohnsteuer', 'die Steuer auf den Arbeitslohn'],
            ['die Rentenversicherung', 'Sie zahlt später Geld im Alter.'],
            ['die Steuer-ID', 'eine persönliche Nummer für das Finanzamt'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Tax return and insurance',
      about: 'The Steuererklärung and the most common insurances, explained simply.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Many employees in Germany do not have to file a tax return (*Steuererklärung*), but many do it voluntarily because they often get money back. In some situations it is compulsory, for example with certain combinations of tax classes or with extra income. You can deduct work-related costs (*Werbungskosten*): for example your journey to work, work equipment or a job-related move.' },
          { t: 'table', caption: 'Words for the tax return', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['das Finanzamt', 'the tax office'],
            ['die Steuererklärung', 'the tax return'],
            ['die Werbungskosten', 'work-related costs you can deduct'],
            ['der Beleg', 'a receipt or other proof of a cost'],
            ['der Steuerbescheid', 'the decision of the tax office about your tax'],
            ['die Erstattung', 'money you get back'],
          ] },
          { t: 'tip', art: 'owl', md: 'Keep your receipts during the year. Many people file their tax return online. A tax adviser (*Steuerberater*) or an income tax help association (*Lohnsteuerhilfeverein*) can help you, for a fee.' },
        ],
        [
          { t: 'text', md: 'Some insurances are compulsory, others are optional but very common. Car liability insurance (*Kfz-Haftpflichtversicherung*) is compulsory for every car. Personal liability insurance (*private Haftpflichtversicherung*) is not compulsory, but many people have it: it pays if you accidentally damage something that belongs to someone else. Household contents insurance (*Hausratversicherung*) covers your belongings, for example after a burglary or a fire.' },
          { t: 'ex', kind: 'match', h: 'Which insurance pays?', pairs: [
            ['die private Haftpflichtversicherung', 'Sie haben aus Versehen das Handy einer Freundin kaputt gemacht.'],
            ['die Hausratversicherung', 'In Ihre Wohnung wurde eingebrochen und Ihr Laptop gestohlen.'],
            ['die Kfz-Haftpflichtversicherung', 'Sie haben beim Einparken ein anderes Auto beschädigt.'],
            ['die Krankenversicherung', 'Sie müssen ins Krankenhaus.'],
            ['die Rentenversicherung', 'Sie gehen in Rente und brauchen ein Einkommen.'],
          ] },
        ],
        [
          { t: 'text', md: 'When you weigh up money decisions, you often admit one point and then give another. Use **zwar … aber**: *Die Steuererklärung macht **zwar** Arbeit, **aber** sie lohnt sich oft.* For a contrast inside one sentence, use *obwohl* (verb at the end). To start a new sentence, use *trotzdem* (verb second).' },
          { t: 'ex', kind: 'choice', h: 'Choose the right connector.', items: [
            { q: 'Die Steuererklärung ist ___ freiwillig, aber oft lohnt sie sich.', o: ['zwar', 'trotzdem', 'obwohl'], why: '*zwar … aber*: you admit one point, then give another.' },
            { q: '___ die Steuererklärung viel Arbeit macht, gebe ich sie jedes Jahr ab.', o: ['Obwohl', 'Trotzdem', 'Zwar'], why: 'The verb *macht* is at the end, so you need the conjunction *obwohl*.' },
            { q: 'Die Haftpflichtversicherung ist keine Pflicht. ___ hat sie fast jeder.', o: ['Trotzdem', 'Obwohl', 'Zwar'], why: 'A new sentence with the verb in second place: *trotzdem*.' },
            { q: 'Ich habe ___ alle Belege gesammelt, aber die Fahrtkosten habe ich vergessen.', o: ['zwar', 'obwohl', 'trotz'], why: '*zwar* in the first part, *aber* in the second.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the right word.', items: [
            { q: 'Die Fahrten zur Arbeit gehören zu den ___. (work-related costs)', a: ['Werbungskosten'], why: '*die Werbungskosten*: costs you have because of your job.' },
            { q: 'Nach einigen Wochen schickt das Finanzamt den ___. (decision)', a: ['Steuerbescheid'], why: 'The tax office’s decision: *der Steuerbescheid*.' },
            { q: 'Bitte heben Sie alle ___ auf, zum Beispiel Quittungen und Rechnungen.', a: ['Belege'], why: '*der Beleg, die Belege*: proof of a cost.' },
            { q: 'Ich bekomme 400 Euro vom Finanzamt zurück. Das ist eine ___.', a: ['Erstattung', 'Steuererstattung', 'Rückzahlung'], why: 'Money back: *die Erstattung*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Questions from newcomers',
      about: 'Read a forum thread where newcomers share their questions about money.',
      art: 'parrot',
      spreads: [
        [
          { t: 'reading', title: 'Forum: Erste Steuererklärung – lohnt sich das?', md: '**Lina_aus_Porto:** Hallo zusammen! Ich arbeite seit März als Grafikdesignerin in Nürnberg und war, ehrlich gesagt, von meiner ersten Gehaltsabrechnung ziemlich überrascht. Von meinem Bruttogehalt bleibt deutlich weniger übrig, als ich erwartet hatte. Eine Kollegin meinte, ich solle unbedingt eine Steuererklärung machen. Lohnt sich das im ersten Jahr überhaupt? Und was kann man alles angeben?\n\n**Ravi_K:** Bei mir hat es sich im ersten Jahr sehr gelohnt. Ich bin für den Job nach Deutschland gezogen, und einen Teil der Umzugskosten konnte ich als Werbungskosten angeben. Dazu kamen die Fahrten zur Arbeit und ein Laptop, den ich fast nur beruflich nutze. Ich habe zwar ein ganzes Wochenende mit den Formularen verbracht, aber am Ende gab es fast 900 Euro zurück.\n\n**Monika_HH:** Wichtig: Heb wirklich alle Belege auf! Ich mache die Erklärung jedes Jahr online, das geht leichter, als ich anfangs dachte. Wenn du unsicher bist, kann dir ein Lohnsteuerhilfeverein helfen. Das kostet zwar einen Jahresbeitrag, aber du sparst Zeit und Nerven.\n\n**Lina_aus_Porto:** Danke euch! Noch eine Frage: Meine Kollegin hat auch von einer Haftpflichtversicherung gesprochen. Ist die Pflicht?\n\n**Ravi_K:** Nein, Pflicht ist sie nicht, aber fast alle hier haben eine. Sie ist meistens nicht teuer und zahlt, wenn du aus Versehen etwas beschädigst, das anderen gehört. Ich würde nicht darauf verzichten.\n\n**Monika_HH:** Und denk auch langfristig: Schau dir die Renteninformation an, die man nach einigen Beitragsjahren bekommt. Je früher man sich mit dem Thema beschäftigt, desto besser kann man planen.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Lina hat mehr Geld bekommen, als sie erwartet hatte.', a: 'f', why: '*Von meinem Bruttogehalt bleibt deutlich weniger übrig, als ich erwartet hatte.*' },
            { q: 'Ravi konnte Umzugskosten in der Steuererklärung angeben.', a: 't', why: '*einen Teil der Umzugskosten konnte ich als Werbungskosten angeben*' },
            { q: 'Ravi hat seine Steuererklärung in wenigen Minuten erledigt.', a: 'f', why: 'It took him *ein ganzes Wochenende*.' },
            { q: 'Monika macht ihre Steuererklärung mit einem Steuerberater.', a: 'f', why: 'She does it online herself.' },
            { q: 'Ein Lohnsteuerhilfeverein hilft kostenlos.', a: 'f', why: '*Das kostet zwar einen Jahresbeitrag*' },
            { q: 'Die private Haftpflichtversicherung ist gesetzlich vorgeschrieben.', a: 'f', why: '*Nein, Pflicht ist sie nicht.*' },
            { q: 'Lina hat inzwischen eine Haftpflichtversicherung abgeschlossen.', a: 'ng', why: 'The thread does not say what Lina decided.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Was meint Monika mit „Zeit und Nerven sparen“?', o: ['Es ist weniger anstrengend und geht schneller.', 'Man bekommt mehr Geld zurück.', 'Man muss keine Belege sammeln.'], why: 'You save time and stress when someone helps you.' },
            { q: 'Warum würde Ravi nicht auf die Haftpflichtversicherung verzichten?', o: ['Sie ist meistens günstig und zahlt bei Schäden an fremden Sachen.', 'Sie ist gesetzlich vorgeschrieben.', 'Sie bringt Geld bei der Steuererklärung.'], why: '*Sie ist meistens nicht teuer und zahlt, wenn du aus Versehen etwas beschädigst …*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap both parts of each paired connector.', items: [
            { s: 'Ich habe [zwar] ein ganzes Wochenende gebraucht, [aber] am Ende gab es Geld zurück.', why: '*zwar … aber*: one point admitted, then another.' },
            { s: '[Je] früher man sich mit dem Thema beschäftigt, [desto] besser kann man planen.', why: '*je … desto*: two things grow together.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Das Gehalt vor allen Abzügen heißt ___.', o: ['Bruttogehalt', 'Nettogehalt', 'Steuerbescheid'], why: '*brutto*: before deductions.' },
      { q: 'Die Kosten für die Fahrt zur Arbeit sind ___.', o: ['Werbungskosten', 'Sozialabgaben', 'Kirchensteuer'], why: 'Work-related costs: *Werbungskosten*.' },
      { q: 'Je mehr man verdient, ___ mehr Steuern zahlt man.', o: ['desto', 'als', 'so'], why: '*je … desto*.' },
      { q: 'Sie haben aus Versehen das Fahrrad Ihres Nachbarn beschädigt. Welche Versicherung zahlt?', o: ['die private Haftpflichtversicherung', 'die Hausratversicherung', 'die Rentenversicherung'], why: 'Damage to someone else’s things: liability insurance.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Die Steuererklärung macht ___ Arbeit, aber sie lohnt sich oft.', a: ['zwar'], why: '*zwar … aber*.' },
      { q: 'Je länger man einzahlt, desto höher ___ die Rente. (werden)', a: ['wird'], why: 'The verb comes directly after *desto höher*.' },
      { q: 'Nach der Steuererklärung schickt das ___ den Steuerbescheid.', a: ['Finanzamt'], why: '*das Finanzamt*: the tax office.' },
      { q: 'Ledige sind meistens in ___ I. (tax class)', a: ['Steuerklasse'], why: 'Single people: *Steuerklasse I*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the words and their meanings.', pairs: [
      ['netto', 'nach allen Abzügen'],
      ['der Beleg', 'ein Nachweis für Kosten'],
      ['die Hausratversicherung', 'zahlt zum Beispiel nach einem Einbruch'],
      ['die Pflegeversicherung', 'hilft, wenn man dauerhaft Pflege braucht'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentence.', items: [
      { a: 'Je früher man plant, desto besser ist es.', why: '*plant* at the end of the *je*-part; *ist* directly after *desto besser*.' },
    ] },
  ],
};
