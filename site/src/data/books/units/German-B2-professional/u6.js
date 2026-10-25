// German B2 for work, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Networking and career',
  goal: 'Network, talk about your career and plan your next step.',
  art: 'suitcase',
  tags: { skills: ['speaking', 'writing', 'vocabulary', 'reading'], topics: ['networking', 'follow-up-email', 'career-goals', 'verbs-with-prepositions', 'infinitive-with-zu'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Introducing yourself at events',
      about: 'Start a conversation at a conference, introduce yourself and write a follow-up email.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'At trade fairs (*Messen*), conferences and after-work events, short conversations can lead to useful contacts. Introduce yourself with your name, your company and your role, ask an open question and listen. With new professional contacts, people in Germany usually say *Sie*, unless the event is very informal.' },
          { t: 'table', caption: 'Networking phrases', explain: ['head', 'col0'], head: ['Purpose', 'Phrase'], rows: [
            ['Start a conversation', 'Entschuldigung, ist hier noch frei?'],
            ['Introduce yourself', 'Darf ich mich kurz vorstellen? Mein Name ist …'],
            ['Say what you do', 'Ich bin bei einem Logistikunternehmen für den Einkauf zuständig.'],
            ['Ask an open question', 'Was führt Sie zu dieser Konferenz?'],
            ['Find something in common', 'Dann haben wir ja ähnliche Themen.'],
            ['Exchange contacts', 'Darf ich Ihnen meine Karte geben?'],
            ['End politely', 'Es hat mich gefreut. Vielleicht sehen wir uns später noch.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'In der Kaffeepause einer Fachkonferenz', lines: [
            { who: 'Herr Adewale', s: 'Entschuldigung, ist an diesem Tisch noch frei?' },
            { who: 'Frau Lindberg', s: 'Ja, bitte, setzen Sie sich.' },
            { who: 'Herr Adewale', s: 'Danke. Darf ich mich kurz vorstellen? Tunde Adewale. Ich arbeite bei einem Hersteller von Verpackungen in Bielefeld und bin dort für Nachhaltigkeit zuständig.' },
            { who: 'Frau Lindberg', s: 'Freut mich. Mareike Lindberg, ich leite den Einkauf bei einer Lebensmittelfirma. Was führt Sie zu dieser Konferenz?' },
            { who: 'Herr Adewale', s: 'Wir suchen Partner, die recycelte Verpackungen testen möchten. Und Sie?' },
            { who: 'Frau Lindberg', s: 'Das passt ja gut. Wir möchten in den nächsten Jahren weniger Plastik verwenden.' },
            { who: 'Herr Adewale', s: 'Dann haben wir ja ähnliche Themen. Darf ich Ihnen meine Karte geben? Ich schicke Ihnen gern ein paar Informationen.' },
            { who: 'Frau Lindberg', s: 'Sehr gern, hier ist meine. Ich muss leider gleich zum nächsten Vortrag, aber es hat mich gefreut.' },
            { who: 'Herr Adewale', s: 'Mich auch. Ich melde mich nächste Woche bei Ihnen.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the question and a good answer.', pairs: [
            ['Was führt Sie zu dieser Messe?', 'Wir suchen neue Lieferanten.'],
            ['Für welche Firma arbeiten Sie?', 'Für einen Hersteller von Verpackungen.'],
            ['Ist hier noch frei?', 'Ja, bitte setzen Sie sich.'],
            ['Darf ich Ihnen meine Karte geben?', 'Gern, hier ist meine.'],
          ] },
        ],
        [
          { t: 'text', md: 'Send a follow-up email within a few days, while the other person still remembers you. Mention where you met, refer to your conversation and suggest a concrete next step.' },
          { t: 'examples', items: [
            { s: 'Es hat mich sehr gefreut, Sie **auf** der Fachkonferenz in Köln **kennenzulernen**.', n: '*auf* einer Messe or Konferenz. *kennenlernen* is separable, so *zu* goes in the middle.' },
            { s: '**Wie besprochen** schicke ich Ihnen **anbei** unsere Broschüre.', n: '*wie besprochen*: as discussed. *anbei*: attached.' },
            { s: 'Ich **komme gern auf** unser Gespräch über recycelte Verpackungen **zurück**.', n: '*auf etwas zurückkommen*: to come back to something.' },
            { s: '**Hätten** Sie in den nächsten Wochen Zeit für ein kurzes Telefonat?', n: 'A concrete next step, asked politely with the Konjunktiv II.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best phrase.', items: [
            { q: 'Sie möchten sich an einem Stehtisch vorstellen.', o: ['Darf ich mich kurz vorstellen?', 'Wer sind Sie denn?', 'Ich stelle Sie jetzt vor.'], why: 'A polite way to introduce yourself to a stranger.' },
            { q: 'Sie möchten das Gespräch höflich beenden.', o: ['Es hat mich gefreut. Vielleicht sehen wir uns später noch.', 'Das reicht jetzt.', 'Ich habe keine Lust mehr.'], why: 'Say that you enjoyed the talk and leave the door open.' },
            { q: 'Es hat mich gefreut, Sie ___ der Messe kennenzulernen.', o: ['auf', 'in', 'an'], why: '*auf einer Messe*, *auf einer Konferenz*.' },
            { q: '___ besprochen sende ich Ihnen unser Angebot.', o: ['Wie', 'Als', 'Was'], why: '*wie besprochen*: as discussed.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the follow-up email.', items: [
            { q: 'Es hat mich gefreut, Sie gestern ___. (kennenlernen)', a: ['kennenzulernen', 'kennen zu lernen'], why: 'Infinitive with *zu*: *kennenzulernen*.' },
            { q: 'Wie besprochen schicke ich Ihnen ___ die Präsentation. (attached)', a: ['anbei'], why: '*anbei*: attached to this email.' },
            { q: 'Ich komme gern ___ unser Gespräch zurück.', a: ['auf'], why: '*auf etwas zurückkommen*.' },
            { q: '___ Sie nächste Woche Zeit für ein Telefonat? (haben, Konjunktiv II)', a: ['Hätten', 'Haetten'], why: 'Polite question: *Hätten Sie …?*' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Career goals and a profile text',
      about: 'Talk about your experience and your goals, and write a short profile for a career platform.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'When you talk about your career, combine the past (where you come from) with the future (where you want to go). Many useful phrases have a fixed preposition. Learn them as a whole.' },
          { t: 'table', caption: 'Talking about your career', explain: ['head'], quiz: true, head: ['Phrase', 'Example'], rows: [
            ['Erfahrung in + Dativ', 'Ich habe fünf Jahre Erfahrung im Projektmanagement.'],
            ['verfügen über + Akkusativ', 'Sie verfügt über gute Kenntnisse im Vertragsrecht.'],
            ['sich spezialisieren auf + Akkusativ', 'Ich habe mich auf Datenanalyse spezialisiert.'],
            ['zuständig sein für + Akkusativ', 'Ich bin für die Kundenbetreuung zuständig.'],
            ['sich interessieren für + Akkusativ', 'Ich interessiere mich für internationale Projekte.'],
            ['anstreben', 'Mittelfristig strebe ich eine Leitungsposition an.'],
          ] },
        ],
        [
          { t: 'text', md: 'For goals, use *Mein Ziel ist es, … zu …*, *Ich habe vor, … zu …* or *um … zu* (in order to). The infinitive with *zu* goes to the end. With separable verbs, *zu* goes between the parts: *weiterzubilden*.' },
          { t: 'examples', items: [
            { s: '**Mein Ziel ist es**, in zwei Jahren ein eigenes Team **zu leiten**.', n: 'A clear goal with an infinitive with *zu*.' },
            { s: '**Ich habe vor**, mich im Bereich Nachhaltigkeit **weiterzubilden**.', n: 'Separable verb: *weiter* + *zu* + *bilden*.' },
            { s: 'Ich mache einen Abendkurs, **um** meine Kenntnisse in Statistik **zu vertiefen**.', n: '*um … zu*: a purpose.' },
            { s: '**Langfristig** möchte ich in die Beratung wechseln.', n: '*kurzfristig, mittelfristig, langfristig*: in the short, medium and long term.' },
          ] },
          { t: 'tip', art: 'owl', md: 'A profile on a career platform is usually written in the first person: *Ich unterstütze …*, *Ich suche …*. Keep it short: who you are, what you are good at and what you are looking for.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the preposition.', items: [
            { q: 'Ich habe mich ___ Steuerrecht spezialisiert.', a: ['auf'], why: '*sich spezialisieren auf* + Akkusativ.' },
            { q: 'Sie verfügt ___ langjährige Erfahrung im Vertrieb.', a: ['über', 'ueber'], why: '*verfügen über* + Akkusativ.' },
            { q: 'In meiner jetzigen Stelle bin ich ___ die Schulung neuer Kollegen zuständig.', a: ['für', 'fuer'], why: '*zuständig sein für* + Akkusativ.' },
            { q: 'Ich habe drei Jahre Erfahrung ___ Marketing.', a: ['im', 'in'], why: '*Erfahrung in* + Dativ, usually *im Marketing*.' },
            { q: 'Ich interessiere mich besonders ___ internationale Projekte.', a: ['für', 'fuer'], why: '*sich interessieren für* + Akkusativ.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Mein Ziel ist es, ein Team zu leiten.', why: '*Mein Ziel ist es*, then the infinitive with *zu* at the end.' },
            { a: 'Ich habe vor, mich weiterzubilden.', why: '*vorhaben*: *vor* closes the main clause. *weiterzubilden* has *zu* in the middle.' },
            { a: 'Ich mache einen Kurs, um mein Deutsch zu verbessern.', why: '*um … zu*: the infinitive goes to the end.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct sentence for a profile.', items: [
            { q: 'Ihre Erfahrung:', o: ['Seit acht Jahren unterstütze ich mittelständische Unternehmen bei der Digitalisierung.', 'Seit acht Jahren ich unterstütze mittelständische Unternehmen bei der Digitalisierung.', 'Seit acht Jahren unterstütze ich mittelständische Unternehmen bei die Digitalisierung.'], why: 'After *Seit acht Jahren* the verb comes second; *bei* takes the Dativ: *bei der*.' },
            { q: 'Ihre Stärke:', o: ['Meine Stärke liegt darin, komplexe Themen verständlich zu erklären.', 'Meine Stärke liegt darin, komplexe Themen verständlich erklären.', 'Meine Stärke liegt dafür, komplexe Themen verständlich zu erklären.'], why: '*Die Stärke liegt darin, … zu …*: with *darin* and an infinitive with *zu*.' },
            { q: 'Was Sie suchen:', o: ['Ich freue mich über Kontakte zu Menschen aus der Logistikbranche.', 'Ich freue mich über Kontakte zu Menschen aus die Logistikbranche.', 'Ich freue mich über Kontakten zu Menschen aus der Logistikbranche.'], why: '*aus* takes the Dativ: *aus der*. The Akkusativ plural is *Kontakte*.' },
            { q: 'Ihr Ziel:', o: ['Mittelfristig strebe ich eine Position im internationalen Einkauf an.', 'Mittelfristig ich strebe eine Position im internationalen Einkauf an.', 'Mittelfristig strebe ich an eine Position im internationalen Einkauf.'], why: 'The verb comes second, and the prefix *an* goes to the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A change of career',
      about: 'Read an interview with a nurse who became a software designer.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Von der Station ins Softwareteam', md: 'Samira Benali hat zwölf Jahre als Pflegefachkraft in einer Klinik in Leipzig gearbeitet. Heute gestaltet sie Software für Krankenhäuser. Wir haben mit ihr über ihren Weg gesprochen.\n\n**Frau Benali, warum haben Sie Ihren Beruf gewechselt?**\nIch habe meine Arbeit in der Pflege sehr gern gemacht. Aber der Schichtdienst wurde mit den Jahren immer anstrengender, und ich hatte das Gefühl, dass ich mich nicht mehr weiterentwickle. Außerdem hat mich immer geärgert, wie umständlich die Software auf unserer Station war. Irgendwann dachte ich: Das müsste doch besser gehen.\n\n**Wie sind Sie den Wechsel angegangen?**\nZuerst habe ich neben der Arbeit einen Onlinekurs in Webdesign gemacht, um herauszufinden, ob mir das überhaupt liegt. Danach habe ich eine Weiterbildung zur UX-Designerin gemacht. Das Jahr war sehr anstrengend, weil ich weiterhin in Teilzeit in der Klinik gearbeitet habe.\n\n**War es schwierig, eine Stelle zu finden?**\nEhrlich gesagt, ja. Auf meine ersten Bewerbungen bekam ich nur Absagen. Geholfen hat mir am Ende ein Kontakt, den ich auf einer Fachmesse kennengelernt hatte. Er hat mich zu einem Gespräch eingeladen, und kurz danach habe ich die Stelle bekommen.\n\n**Was bringen Sie aus der Pflege mit?**\nSehr viel. Ich weiß, wie hektisch der Alltag auf einer Station ist und was Pflegekräfte wirklich brauchen. Die Entwickler in unserem Team fragen mich oft: „Würde das in der Praxis funktionieren?“\n\n**Was raten Sie Menschen, die über einen Wechsel nachdenken?**\nProbieren Sie das neue Feld zuerst in kleinen Schritten aus, bevor Sie kündigen. Und unterschätzen Sie nicht, was Sie aus Ihrem alten Beruf mitbringen. Erfahrung ist nie verloren.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Frau Benali hat ihren alten Beruf nicht gern ausgeübt.', a: 'f', why: '*Ich habe meine Arbeit in der Pflege sehr gern gemacht.*' },
            { q: 'Die Software auf ihrer Station fand sie umständlich.', a: 't', why: '*… wie umständlich die Software auf unserer Station war.*' },
            { q: 'Während der Weiterbildung hat sie nicht mehr in der Klinik gearbeitet.', a: 'f', why: 'She kept working *in Teilzeit in der Klinik*.' },
            { q: 'Ihre ersten Bewerbungen waren nicht erfolgreich.', a: 't', why: '*Auf meine ersten Bewerbungen bekam ich nur Absagen.*' },
            { q: 'Sie hat ihre jetzige Stelle über einen Kontakt von einer Messe gefunden.', a: 't', why: '*… ein Kontakt, den ich auf einer Fachmesse kennengelernt hatte.*' },
            { q: 'Sie verdient heute mehr als in der Pflege.', a: 'ng', why: 'The interview does not mention her salary.' },
            { q: 'Sie rät, sofort zu kündigen und ganz neu anzufangen.', a: 'f', why: 'She advises trying the new field *in kleinen Schritten*, *bevor Sie kündigen*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the content and the language of the interview.', items: [
            { q: 'Warum hat Frau Benali zuerst einen Onlinekurs gemacht?', o: ['Um herauszufinden, ob ihr die Arbeit liegt.', 'Weil die Weiterbildung zu teuer war.', 'Weil ihre Klinik den Kurs verlangt hat.'], why: '*… um herauszufinden, ob mir das überhaupt liegt.*' },
            { q: 'Was bringt sie aus der Pflege in ihre neue Arbeit mit?', o: ['Sie kennt den Alltag auf einer Station.', 'Sie kann sehr gut programmieren.', 'Sie hat viele Kontakte zu Softwarefirmen.'], why: '*Ich weiß, wie hektisch der Alltag auf einer Station ist.*' },
            { q: '„… ob mir das überhaupt liegt“ bedeutet:', o: ['ob ich das gut kann und gern mache', 'ob das in meiner Nähe liegt', 'ob ich dafür genug Zeit habe'], why: '*Etwas liegt mir*: I am good at it and I like it.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '___ besprochen schicke ich Ihnen unsere Broschüre.', o: ['Wie', 'Als', 'Wenn'], why: '*wie besprochen*: as discussed.' },
      { q: 'Ich bin ___ die Kundenbetreuung zuständig.', o: ['für', 'über', 'auf'], why: '*zuständig sein für* + Akkusativ.' },
      { q: 'Ich habe vor, mich im Bereich IT ___.', o: ['weiterzubilden', 'zu weiterbilden', 'weiterbilden'], why: 'Separable verb: *zu* goes in the middle.' },
      { q: 'Sie möchten an einem Stehtisch ein Gespräch beginnen:', o: ['Entschuldigung, ist hier noch frei?', 'Gehen Sie bitte weg.', 'Wer sind Sie?'], why: 'A polite, simple way to start a conversation.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Sie hat sich ___ Datenschutz spezialisiert.', a: ['auf'], why: '*sich spezialisieren auf* + Akkusativ.' },
      { q: 'Mein Ziel ist es, ein Team ___ leiten.', a: ['zu'], why: '*Mein Ziel ist es, … zu* + infinitive.' },
      { q: 'Ich komme gern ___ unser Gespräch auf der Messe zurück.', a: ['auf'], why: '*auf etwas zurückkommen*.' },
      { q: 'Er ___ über viel Erfahrung im Einkauf. (verfügen)', a: ['verfügt', 'verfuegt'], why: '*verfügen über*: *er verfügt*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the two halves.', pairs: [
      ['Darf ich mich', 'kurz vorstellen?'],
      ['Was führt Sie', 'zu dieser Messe?'],
      ['Darf ich Ihnen', 'meine Karte geben?'],
      ['Mittelfristig strebe ich', 'eine Leitungsposition an.'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Darf ich Ihnen meine Karte geben?', why: 'A yes/no question: modal verb first, the infinitive *geben* at the end.' },
      { a: 'Ich mache einen Kurs, um mich weiterzubilden.', why: '*um … zu*: the infinitive with *zu* goes to the end.' },
    ] },
  ],
};
