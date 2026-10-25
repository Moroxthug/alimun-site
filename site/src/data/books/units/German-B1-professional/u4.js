// German B1 for work, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Presenting your work',
  goal: 'Give a short, clear presentation at work.',
  art: 'sun',
  tags: { skills: ['speaking', 'reading', 'grammar', 'vocabulary'], topics: ['presentations', 'word-order', 'trends', 'figures'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Structuring a presentation',
      about: 'Guide your listeners from the start to the end with clear signposts.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'A good presentation tells the listeners where they are. Say at the start what you will talk about, use a **signpost** for each new part, and finish with a short summary.' },
          { t: 'table', caption: 'Phrases for a presentation', explain: ['head', 'col0'], quiz: true, head: ['Part', 'Phrase'], rows: [
            ['The start', 'Heute möchte ich Ihnen unser neues Projekt vorstellen.'],
            ['The overview', 'Mein Vortrag hat drei Teile.'],
            ['The first part', 'Zuerst spreche ich über die Ziele.'],
            ['The next part', 'Danach zeige ich Ihnen die Ergebnisse.'],
            ['Moving on', 'Damit komme ich zum nächsten Punkt.'],
            ['The last part', 'Zum Schluss fasse ich alles kurz zusammen.'],
            ['The end', 'Vielen Dank für Ihre Aufmerksamkeit. Haben Sie Fragen?'],
          ] },
        ],
        [
          { t: 'text', md: 'Signposts like *zuerst*, *dann*, *danach*, *anschließend* and *zum Schluss* often stand at the **start** of the sentence. The verb stays in **second position**, so the subject comes **after** the verb.' },
          { t: 'examples', items: [
            { s: 'Zuerst **stelle** ich Ihnen das Team vor.', n: 'Not *Zuerst ich stelle …*: the verb *stelle* comes right after *Zuerst*.' },
            { s: 'Anschließend **sprechen** wir über die Kosten.', n: '*anschließend*: after that.' },
            { s: 'Zum Schluss **habe** ich noch eine Bitte an Sie.', n: '*Zum Schluss* counts as one part: the verb comes next.' },
            { s: 'Wie Sie auf dieser Folie sehen, **ist** der Umsatz gestiegen.', n: 'The whole *wie* clause is the first part, so the main clause starts with the verb *ist*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Three parts are enough for a short presentation. Say them at the start: *Zuerst …, danach …, und zum Schluss …*. Your listeners can then follow you easily.' },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences for a presentation.', items: [
            { a: 'Zuerst spreche ich über die Ziele.', why: '*Zuerst* first, then the verb *spreche*, then *ich*.' },
            { a: 'Danach zeige ich Ihnen die Ergebnisse.', why: 'The verb *zeige* comes right after *Danach*.' },
            { a: 'Damit komme ich zum nächsten Punkt.', why: 'A fixed phrase to move on: verb in second position.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the correct sentence.', items: [
            { q: '', o: ['Anschließend sprechen wir über das Budget.', 'Anschließend wir sprechen über das Budget.', 'Anschließend über das Budget wir sprechen.'], why: 'After *Anschließend*, the verb comes in second position: *sprechen wir*.' },
            { q: '', o: ['Zum Schluss fasse ich alles zusammen.', 'Zum Schluss ich fasse alles zusammen.', 'Zum Schluss fasse alles ich zusammen.'], why: 'Verb second, subject right after it: *fasse ich*.' },
            { q: '', o: ['Wie Sie hier sehen, sind die Kosten gesunken.', 'Wie Sie hier sehen, die Kosten sind gesunken.', 'Wie Sie sehen hier, sind die Kosten gesunken.'], why: 'In the *wie* clause the verb goes to the end; the main clause then starts with the verb *sind*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the two halves of the sentences.', pairs: [
            ['Heute möchte ich Ihnen', 'unser neues Produkt vorstellen.'],
            ['Damit komme ich', 'zum nächsten Punkt.'],
            ['Zum Schluss fasse ich', 'alles kurz zusammen.'],
            ['Vielen Dank für', 'Ihre Aufmerksamkeit.'],
            ['Wie Sie auf der Folie sehen,', 'sind die Kosten gesunken.'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Figures and trends',
      about: 'Say that numbers go up, go down or stay the same.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'In presentations you often describe how numbers change. Many of these verbs form the Perfekt with **sein**, because they describe a change: *ist gestiegen*, *ist gesunken*.' },
          { t: 'table', caption: 'Verbs for trends', explain: ['head', 'col2'], quiz: true, head: ['Verb', 'Perfekt', 'Meaning'], rows: [
            ['steigen', 'ist gestiegen', 'to go up'],
            ['sinken', 'ist gesunken', 'to go down'],
            ['zurückgehen', 'ist zurückgegangen', 'to go down, to become less'],
            ['zunehmen', 'hat zugenommen', 'to become more'],
            ['gleich bleiben', 'ist gleich geblieben', 'to stay the same'],
            ['sich verdoppeln', 'hat sich verdoppelt', 'to become twice as much'],
          ] },
          { t: 'tip', art: 'owl', md: 'The nouns are useful on slides: *der Anstieg* (rise), *der Rückgang* (fall), *die Zunahme* (increase).' },
        ],
        [
          { t: 'text', md: 'With figures, *um* and *auf* mean different things. *um* gives the **difference**, *auf* gives the **new number**. *von … auf* gives the old and the new number. Words like *leicht* (a little), *deutlich* (clearly) and *stark* (a lot) say how big the change is.' },
          { t: 'examples', items: [
            { s: 'Der Umsatz ist **um** 10 Prozent gestiegen.', n: 'The difference: plus 10 percent.' },
            { s: 'Die Kosten sind **auf** 50.000 Euro gesunken.', n: 'The new number: now 50,000 euros.' },
            { s: 'Die Zahl der Kunden ist **von** 200 **auf** 260 gestiegen.', n: 'Old number and new number.' },
            { s: 'Die Reklamationen sind **deutlich** zurückgegangen.', n: '*deutlich*: clearly, a lot.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'um or auf? Choose.', items: [
            { q: 'Früher 100 Bestellungen, jetzt 150. Die Zahl ist ___ 50 gestiegen.', o: ['um', 'auf', 'von'], why: 'The difference is 50: *um*.' },
            { q: 'Früher 100 Bestellungen, jetzt 150. Die Zahl ist ___ 150 gestiegen.', o: ['auf', 'um', 'bei'], why: 'The new number is 150: *auf*.' },
            { q: 'Die Kosten sind von 8.000 ___ 6.000 Euro gesunken.', o: ['auf', 'um', 'zu'], why: '*von* (old number) *auf* (new number).' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the Perfekt.', items: [
            { q: 'Der Umsatz ist im letzten Jahr ___. (steigen)', a: ['gestiegen'], why: '*steigen* → *ist gestiegen*.' },
            { q: 'Die Kosten ___ leicht gesunken. (sein)', a: ['sind'], why: '*die Kosten* is plural, and *sinken* takes *sein*: *sind gesunken*.' },
            { q: 'Die Zahl der Reklamationen ist deutlich ___. (zurückgehen)', a: ['zurückgegangen', 'zurueckgegangen'], why: 'Separable: *zurück* + *gegangen*.' },
            { q: 'Die Zahl der Mitarbeitenden ist gleich ___. (bleiben)', a: ['geblieben'], why: '*gleich bleiben* → *ist gleich geblieben*.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Die Zahlen unseres Online-Shops', md: 'Im ersten Quartal (Januar bis März) hatte unser Online-Shop etwa 2.000 Bestellungen im Monat. Im zweiten Quartal ist die Zahl auf 2.600 gestiegen. Die Kosten für Werbung sind gleich geblieben. Die Zahl der Rücksendungen ist von 300 auf 200 im Monat gesunken. Das ist ein gutes Ergebnis für unser Team.' },
          { t: 'ex', kind: 'tf', h: 'Read the text. True or false?', items: [
            { q: 'Die Bestellungen sind um 600 im Monat gestiegen.', a: 't', why: 'From 2,000 to 2,600: a difference of 600.' },
            { q: 'Die Kosten für Werbung sind gestiegen.', a: 'f', why: 'They *sind gleich geblieben*.' },
            { q: 'Die Rücksendungen sind um 100 zurückgegangen.', a: 't', why: 'From 300 to 200: minus 100.' },
            { q: 'Die Bestellungen haben sich verdoppelt.', a: 'f', why: 'Twice 2,000 would be 4,000; the number went up to 2,600.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A project update',
      about: 'Read a project update and follow the figures and the next steps.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Projekt „Neue Lagersoftware“: Stand Ende Juni', md: 'Liebe Kolleginnen und Kollegen,\n\nhier ist ein kurzer Überblick über unser Projekt. Seit März arbeiten wir im Lager in Kassel mit der neuen Software. Zuerst gab es einige Probleme: Viele Mitarbeitende brauchten mehr Zeit für ihre Aufgaben, und im April ist die Zahl der Fehler bei den Bestellungen sogar leicht gestiegen.\n\nDanach haben wir zusätzliche Schulungen angeboten. Das hat geholfen. Seit Mai sind die Fehler deutlich zurückgegangen, und im Juni hat das Team pro Tag etwa 15 Prozent mehr Pakete verschickt als vor dem Projekt. Die Zahl der Reklamationen ist gleich geblieben.\n\nLeider sind die Kosten höher als geplant. Statt 80.000 Euro hat das Projekt bis jetzt 95.000 Euro gekostet, weil wir mehr Schulungen gebraucht haben.\n\nWie geht es weiter? Im Herbst möchten wir die Software auch im Lager in Erfurt einführen. Die Erfahrungen aus Kassel helfen uns dabei. Zum Schluss möchte ich mich bei allen bedanken, die in den letzten Monaten so viel Geduld hatten.\n\nViele Grüße\nInes Hoffmann\nProjektleitung' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the update. True, false or not given?', items: [
            { q: 'Das Lager in Kassel arbeitet seit März mit der neuen Software.', a: 't', why: '*Seit März arbeiten wir im Lager in Kassel mit der neuen Software.*' },
            { q: 'Im April gab es weniger Fehler als vorher.', a: 'f', why: 'In April the number of mistakes *ist sogar leicht gestiegen*.' },
            { q: 'Die zusätzlichen Schulungen haben geholfen.', a: 't', why: '*Das hat geholfen.*' },
            { q: 'Es gibt jetzt weniger Reklamationen.', a: 'f', why: 'The number of complaints *ist gleich geblieben*.' },
            { q: 'Das Projekt war günstiger als geplant.', a: 'f', why: 'It cost 95,000 euros instead of 80,000: more than planned.' },
            { q: 'Die Mitarbeitenden in Erfurt freuen sich auf die neue Software.', a: 'ng', why: 'The update does not say what the team in Erfurt thinks.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words from the update and their meaning.', pairs: [
            ['der Überblick', 'eine kurze Zusammenfassung'],
            ['die Schulung', 'ein Kurs für Mitarbeitende'],
            ['die Reklamation', 'eine Beschwerde über ein Produkt'],
            ['etwas einführen', 'etwas Neues zum ersten Mal benutzen'],
            ['die Projektleitung', 'die Person, die das Projekt leitet'],
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the participles that describe a trend.', items: [
            { s: 'Im April ist die Zahl der Fehler leicht [gestiegen]. Seit Mai sind die Fehler deutlich [zurückgegangen].', why: '*gestiegen* (went up) and *zurückgegangen* (went down) describe changes.' },
            { s: 'Die Zahl der Reklamationen ist gleich [geblieben], aber die Kosten sind [gestiegen].', why: '*gleich geblieben*: no change; *gestiegen*: went up.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Warum hat das Projekt mehr gekostet?', o: ['weil man mehr Schulungen gebraucht hat', 'weil die Software teurer geworden ist', 'weil es mehr Reklamationen gab'], why: '*…, weil wir mehr Schulungen gebraucht haben.*' },
            { q: 'Wie viele Pakete verschickt das Team im Juni?', o: ['etwa 15 Prozent mehr als vor dem Projekt', 'genauso viele wie vor dem Projekt', 'etwa 15 Prozent weniger als im April'], why: '*etwa 15 Prozent mehr Pakete … als vor dem Projekt*.' },
            { q: 'Was passiert im Herbst?', o: ['Das Lager in Erfurt bekommt die Software.', 'Das Projekt ist zu Ende.', 'Das Lager in Kassel schließt.'], why: '*Im Herbst möchten wir die Software auch im Lager in Erfurt einführen.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences about the update.', items: [
            { q: 'Die Kosten sind ___ 95.000 Euro gestiegen.', a: ['auf'], why: 'The new number: *auf*.' },
            { q: 'Die Kosten sind ___ 15.000 Euro gestiegen.', a: ['um'], why: 'The difference between 80,000 and 95,000: *um*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '', o: ['Zuerst stelle ich Ihnen das Team vor.', 'Zuerst ich stelle Ihnen das Team vor.', 'Zuerst ich Ihnen das Team vorstelle.'], why: 'After *Zuerst*, the verb comes second.' },
      { q: 'Früher 40 Kunden, jetzt 60. Die Zahl ist ___ 20 gestiegen.', o: ['um', 'auf', 'bis'], why: 'The difference: *um*.' },
      { q: 'Der Umsatz ___ im Mai gesunken.', o: ['ist', 'hat', 'wird'], why: '*sinken* takes *sein* in the Perfekt.' },
      { q: 'Am Ende einer Präsentation sagt man: ___', o: ['Vielen Dank für Ihre Aufmerksamkeit.', 'Damit komme ich zum nächsten Punkt.', 'Mein Vortrag hat drei Teile.'], why: 'The usual last sentence before questions.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Die Zahl der Bestellungen ist deutlich ___. (steigen)', a: ['gestiegen'], why: '*ist gestiegen*.' },
      { q: 'Die Kosten sind von 5.000 ___ 4.000 Euro gesunken.', a: ['auf'], why: '*von … auf*.' },
      { q: 'Damit komme ich zum nächsten ___.', a: ['Punkt'], why: 'The fixed phrase to move on.' },
      { q: 'Die Zahl der Kunden hat sich ___. (verdoppeln)', a: ['verdoppelt'], why: '*sich verdoppeln* → *hat sich verdoppelt*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Danach sprechen wir über die Kosten.', why: '*Danach* first, then the verb.' },
      { a: 'Heute möchte ich Ihnen unser Projekt vorstellen.', why: 'The modal *möchte* second, *vorstellen* at the end.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the verb and the noun.', pairs: [
      ['steigen', 'der Anstieg'],
      ['zurückgehen', 'der Rückgang'],
      ['zunehmen', 'die Zunahme'],
    ] },
  ],
};
