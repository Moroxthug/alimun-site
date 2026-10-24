// German B1 for moving abroad: a goal book next to the German B1 course book (docs/BOOKS.md).
// Draft: reviewed by a native teacher before it is published. Explanations in English, translated in i18n/.
export const BOOK = {
  id: 'German-B1-relocation',
  language: 'German',
  level: 'B1',
  track: 'goal',
  goal: 'relocation',
  title: 'German for moving abroad',
  review: 'draft',
  units: [
    {
      id: 'u1',
      title: 'Finding a flat',
      goal: 'Understand flat adverts, write to a landlord and ask the right questions at a viewing.',
      art: 'suitcase',
      tags: { skills: ['reading', 'writing', 'speaking', 'vocabulary'], topics: ['housing', 'formal-email', 'konjunktiv-ii-polite'], goals: ['relocation'] },
      pages: [
        {
          id: 'p1',
          title: 'Reading flat adverts',
          about: 'The abbreviations and words every flat advert uses.',
          art: 'snail',
          spreads: [
            [
              { t: 'text', md: 'Flat adverts in German are short and full of abbreviations. The most important number is the rent: **Kaltmiete** is the rent without heating and service charges, **Warmmiete** is the total you pay each month.' },
              { t: 'table', caption: 'Abbreviations in flat adverts', explain: ['head', 'col2'], quiz: true, head: ['Short', 'Long', 'Meaning'], rows: [
                ['2-Zi.-Whg.', 'Zweizimmerwohnung', 'a flat with two rooms, not counting kitchen and bathroom'],
                ['KM', 'Kaltmiete', 'rent without heating and service charges'],
                ['NK', 'Nebenkosten', 'service charges: water, rubbish, building costs'],
                ['WM', 'Warmmiete', 'rent including heating and service charges'],
                ['EBK', 'Einbauküche', 'fitted kitchen, included in the flat'],
                ['qm / m²', 'Quadratmeter', 'square metres'],
                ['ab sofort', 'ab sofort', 'available now'],
              ] },
              { t: 'tip', art: 'owl', md: 'In Germany a flat often comes **without** a kitchen. If an advert says *EBK*, the kitchen stays. The deposit, *Kaution*, is usually up to three months of *Kaltmiete*.' },
            ],
            [
              { t: 'reading', title: 'Wohnungsanzeige', md: '**Helle 2-Zi.-Whg. in Leipzig-Gohlis, ab sofort**\n\n58 m², 3. OG mit Aufzug, Balkon, EBK. KM 520 €, NK 140 €, Kaution 3 KM. Ruhige Lage, 10 Minuten zur Straßenbahn. Haustiere nach Absprache. Bitte nur schriftliche Anfragen mit kurzer Vorstellung.' },
              { t: 'ex', kind: 'tf', ng: true, h: 'Read the advert. True, false or not given?', items: [
                { q: 'Die Wohnung hat eine Küche.', a: 't', why: '*EBK*: the fitted kitchen is included.' },
                { q: 'Die Warmmiete ist 520 Euro.', a: 'f', why: '520 € is the *Kaltmiete*. With 140 € *Nebenkosten*, the *Warmmiete* is 660 €.' },
                { q: 'Man kann die Wohnung sofort mieten.', a: 't', why: '*ab sofort*: available now.' },
                { q: 'Hunde sind nicht erlaubt.', a: 'f', why: '*Haustiere nach Absprache*: pets are possible if you ask first.' },
                { q: 'Der Vermieter wohnt im selben Haus.', a: 'ng', why: 'The advert does not say where the landlord lives.' },
              ] },
            ],
            [
              { t: 'ex', kind: 'match', h: 'Match the abbreviation and the word.', pairs: [
                ['KM', 'Kaltmiete'],
                ['NK', 'Nebenkosten'],
                ['EBK', 'Einbauküche'],
                ['WM', 'Warmmiete'],
                ['OG', 'Obergeschoss'],
              ] },
              { t: 'ex', kind: 'choice', h: 'What does it cost?', items: [
                { q: 'KM 700 €, NK 180 €. Die Warmmiete ist ___.', o: ['880 €', '700 €', '520 €'], why: '*Kaltmiete* + *Nebenkosten* = *Warmmiete*: 700 + 180.' },
                { q: 'KM 600 €, Kaution 3 KM. Die Kaution ist ___.', o: ['1800 €', '600 €', '3600 €'], why: 'Three months of *Kaltmiete*: 3 × 600.' },
              ] },
            ],
          ],
        },
        {
          id: 'p2',
          title: 'Writing to a landlord',
          about: 'A short, polite email that gets you a viewing.',
          art: 'mug',
          spreads: [
            [
              { t: 'text', md: 'Many landlords get dozens of emails for one flat. A good email is **short**, **formal** and tells them who you are: your job, who will live in the flat and when you want to move in.' },
              { t: 'reading', title: 'Anfrage: 2-Zi.-Whg. in Leipzig-Gohlis', md: 'Sehr geehrte Frau Becker,\n\nich interessiere mich sehr für Ihre Wohnung in Leipzig-Gohlis. Ich bin 29 Jahre alt, arbeite seit Oktober als Ingenieurin bei einer Firma in Leipzig und würde allein in die Wohnung einziehen. Ich rauche nicht und habe keine Haustiere.\n\nWäre eine Besichtigung in den nächsten Tagen möglich? Ich hätte am Dienstag und am Donnerstag ab 17 Uhr Zeit.\n\nMit freundlichen Grüßen\nAna Ribeiro' },
            ],
            [
              { t: 'text', md: 'Polite requests often use the **Konjunktiv II**: *ich hätte*, *ich würde*, *wäre*, *könnten Sie*. It sounds softer than the plain present.' },
              { t: 'examples', items: [
                { s: '**Wäre** eine Besichtigung am Montag **möglich**?', n: 'Softer than *Ist eine Besichtigung möglich?*' },
                { s: '**Könnten** Sie mir sagen, wie hoch die Nebenkosten sind?', n: 'An indirect question: the verb *sind* goes to the end.' },
                { s: 'Ich **hätte** am Freitag ab 16 Uhr Zeit.', n: '*hätte* instead of *habe*: polite and open.' },
              ] },
              { t: 'tip', art: 'owl', md: 'Start with *Sehr geehrte Frau …* or *Sehr geehrter Herr …*, and the next line starts with a small letter: *ich interessiere mich …*. End with *Mit freundlichen Grüßen*.' },
            ],
            [
              { t: 'ex', kind: 'order', h: 'Build polite sentences for your email.', items: [
                { a: 'Ich interessiere mich für Ihre Wohnung.', why: '*sich interessieren für*: the verb is in second place.' },
                { a: 'Wäre eine Besichtigung am Montag möglich?', why: 'A yes/no question: the verb *wäre* comes first.' },
                { a: 'Ich würde gern im Mai einziehen.', why: '*würde* in second place, the infinitive *einziehen* at the end.' },
              ] },
              { t: 'ex', kind: 'choice', h: 'Which one belongs in an email to a landlord?', items: [
                { q: '', o: ['Sehr geehrte Frau Becker,', 'Hallo Frau Becker!', 'Liebe Anna,'], why: 'To someone you do not know: *Sehr geehrte Frau …*' },
                { q: '', o: ['Mit freundlichen Grüßen', 'Tschüss', 'Bis bald!'], why: 'The usual formal ending.' },
                { q: '', o: ['Könnten Sie mir sagen, ob die Wohnung noch frei ist?', 'Ist die Wohnung noch frei oder was?', 'Sag mir, ob die Wohnung frei ist.'], why: 'Polite, formal *Sie*, and the verb *ist* at the end of the indirect question.' },
              ] },
            ],
          ],
        },
        {
          id: 'p3',
          title: 'At the viewing',
          about: 'Ask the questions that matter, then sort out your registration.',
          art: 'parrot',
          spreads: [
            [
              { t: 'dialogue', title: 'Bei der Besichtigung', lines: [
                { who: 'Frau Becker', s: 'Kommen Sie rein. Das ist das Wohnzimmer, und hier ist der Balkon.' },
                { who: 'Ana', s: 'Sehr schön. Wie hoch sind die Nebenkosten genau?' },
                { who: 'Frau Becker', s: '140 Euro im Monat, Heizung und Wasser sind dabei. Strom zahlen Sie selbst.' },
                { who: 'Ana', s: 'Und ab wann wäre die Wohnung frei?' },
                { who: 'Frau Becker', s: 'Ab dem ersten Dezember. Die Kaution sind drei Kaltmieten.' },
                { who: 'Ana', s: 'Darf ich fragen, ob die Küche in der Wohnung bleibt?' },
                { who: 'Frau Becker', s: 'Ja, die Einbauküche bleibt drin.' },
              ] },
              { t: 'text', md: 'Ana asks direct questions (*Wie hoch sind …?*) and polite indirect ones (*Darf ich fragen, ob …?*). Electricity, *Strom*, is often paid separately to an energy company.' },
            ],
            [
              { t: 'ex', kind: 'tf', h: 'Think about the viewing. True or false?', items: [
                { q: 'Der Strom ist in den Nebenkosten enthalten.', a: 'f', why: '*Strom zahlen Sie selbst*: Ana pays for electricity herself.' },
                { q: 'Die Wohnung ist ab Dezember frei.', a: 't', why: '*Ab dem ersten Dezember.*' },
                { q: 'Die Küche bleibt in der Wohnung.', a: 't', why: '*Die Einbauküche bleibt drin.*' },
              ] },
              { t: 'ex', kind: 'gap', h: 'Complete the questions for the viewing.', items: [
                { q: 'Wie hoch ___ die Nebenkosten? (sein)', a: ['sind'], why: '*die Nebenkosten* is plural: *sind*.' },
                { q: 'Ab wann ___ die Wohnung frei? (sein, Konjunktiv II)', a: ['wäre', 'waere'], why: 'Polite: *wäre*.' },
                { q: 'Darf ich fragen, ob Haustiere erlaubt ___? (sein)', a: ['sind'], why: 'After *ob*, the verb goes to the end.' },
              ] },
            ],
            [
              { t: 'text', md: 'After you move in, you register your address at the local citizens’ office (**Bürgeramt**) within two weeks. This is called the **Anmeldung**. Your landlord gives you a form for it, the **Wohnungsgeberbestätigung**.' },
              { t: 'tip', art: 'owl', md: 'Book an appointment at the *Bürgeramt* early: in big cities the next free date can be weeks away. You need the *Anmeldung* for a bank account, a tax number and much more.' },
              { t: 'ex', kind: 'spot', h: 'Tap the words for the paperwork.', items: [
                { s: 'Nach dem Umzug gehe ich zum [Bürgeramt] und mache die [Anmeldung]. Vom Vermieter brauche ich die [Wohnungsgeberbestätigung].', why: 'Three words you will hear in your first weeks.' },
              ] },
            ],
          ],
        },
      ],
      test: [
        { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
          { q: 'Die Miete ohne Heizung und Nebenkosten heißt ___.', o: ['Kaltmiete', 'Warmmiete', 'Kaution'], why: '*Kaltmiete*: without heating and service charges.' },
          { q: 'KM 450 €, NK 120 €. Die Warmmiete ist ___.', o: ['570 €', '450 €', '330 €'], why: '450 + 120.' },
          { q: '___ eine Besichtigung am Mittwoch möglich?', o: ['Wäre', 'Würde', 'Hätte'], why: '*Wäre … möglich?*' },
          { q: 'Nach dem Umzug macht man die ___ beim Bürgeramt.', o: ['Anmeldung', 'Kaution', 'Einbauküche'], why: 'You register your address: *Anmeldung*.' },
        ] },
        { t: 'ex', kind: 'gap', h: 'Complete the email.', items: [
          { q: 'Sehr ___ Herr Wagner, (geehrt)', a: ['geehrter'], why: '*Sehr geehrter Herr …*' },
          { q: 'Ich ___ am Freitag ab 16 Uhr Zeit. (haben, Konjunktiv II)', a: ['hätte', 'haette'], why: 'Polite: *ich hätte*.' },
          { q: 'Mit freundlichen ___', a: ['Grüßen', 'Gruessen'], why: 'The formal ending.' },
        ] },
        { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
          { a: 'Könnten Sie mir sagen, wie hoch die Nebenkosten sind?', why: 'Indirect question: *sind* at the end.' },
          { a: 'Ich würde gern im Juni einziehen.', why: '*würde* second, *einziehen* at the end.' },
        ] },
      ],
    },
    { id: 'u2', title: 'Paperwork and offices', planned: true },
    { id: 'u3', title: 'At the doctor', planned: true },
    { id: 'u4', title: 'Banks, contracts and phones', planned: true },
    { id: 'u5', title: 'Neighbours and everyday life', planned: true },
    { id: 'u6', title: 'Children, school and childcare', planned: true },
  ],
};
