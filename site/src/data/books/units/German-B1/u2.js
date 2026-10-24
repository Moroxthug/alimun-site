// German B1, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Work and careers',
  goal: 'Talk about work and training, and give reasons and contrasts. Join sentences with weil, obwohl, dass and wenn, use deshalb and trotzdem, and write a short job application.',
  art: 'mug',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['nebensatz', 'weil-obwohl-dass', 'deshalb-trotzdem', 'job-application'], goals: ['foundations', 'professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Weil, obwohl, dass, wenn',
      about: 'Give reasons and contrasts in a subordinate clause.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: '*Weil*, *obwohl*, *dass* and *wenn* start a **subordinate clause** (Nebensatz). In this clause, the conjugated verb goes to the **end**. There is always a comma between the main clause and the subordinate clause.' },
          { t: 'table', caption: 'Four conjunctions', explain: ['head', 'col1'], head: ['Conjunction', 'Use', 'Example'], rows: [
            ['weil', 'a reason', 'Ich lerne Deutsch, weil ich in Wien arbeite.'],
            ['obwohl', 'a contrast: something you do not expect', 'Er geht zur Arbeit, obwohl er krank ist.'],
            ['dass', 'what someone says, thinks or knows', 'Ich glaube, dass die Stelle gut bezahlt ist.'],
            ['wenn', 'a condition, or every time something happens', 'Wenn ich Zeit habe, mache ich einen Kurs.'],
          ] },
        ],
        [
          { t: 'text', md: 'With a modal verb or the Perfekt, there are two verbs in the subordinate clause. The **conjugated** verb comes last, after the infinitive or the participle.' },
          { t: 'examples', items: [
            { s: 'Ich stehe um sechs auf, weil ich früh anfangen **muss**.', n: 'Modal verb: *anfangen muss*. The modal verb is last.' },
            { s: 'Sie ist froh, dass sie die Stelle bekommen **hat**.', n: 'Perfekt: *bekommen hat*. *Hat* is last.' },
            { s: 'Ich hoffe, dass der Kurs am Montag **anfängt**.', n: 'Separable verbs stay together at the end: *anfängt*.' },
            { s: '**Obwohl** er wenig verdient, **mag** er seinen Job.', n: 'The subordinate clause comes first, so the main clause starts with its verb: verb, comma, verb.' },
          ] },
          { t: 'tip', art: 'owl', md: '*Denn* also gives a reason, but it does not move the verb: *Ich bin müde, **denn** ich **habe** wenig geschlafen.* With *weil* the verb goes to the end: *…, weil ich wenig geschlafen **habe**.*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Weil, obwohl, dass or wenn? Choose.', items: [
            { q: 'Ich nehme die Stelle nicht, ___ das Gehalt zu niedrig ist.', o: ['weil', 'obwohl', 'dass'], why: 'The low salary is the reason: *weil*.' },
            { q: 'Sie arbeitet heute, ___ Sonntag ist.', o: ['obwohl', 'weil', 'dass'], why: 'People do not usually work on Sunday, so this is a contrast: *obwohl*.' },
            { q: 'Mein Chef hat gesagt, ___ ich morgen frei habe.', o: ['dass', 'weil', 'wenn'], why: 'After *sagen*, *glauben* or *wissen*, *dass* tells us what someone said or thinks.' },
            { q: '___ du Fragen hast, ruf mich einfach an.', o: ['Wenn', 'Obwohl', 'Dass'], why: 'A condition: only if you have questions. *Wenn*.' },
            { q: 'Er hat die Prüfung bestanden, ___ er wenig gelernt hat.', o: ['obwohl', 'weil', 'wenn'], why: 'You do not expect to pass if you study little: *obwohl*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in brackets in the right form.', items: [
            { q: 'Ich glaube, dass die Besprechung um zehn ___. (anfangen)', a: ['anfängt'], why: 'A separable verb stays together at the end: *anfängt*.' },
            { q: 'Sie sucht eine neue Stelle, weil sie mehr Geld verdienen ___. (möchten)', a: ['möchte'], why: 'The modal verb goes after the infinitive: *verdienen möchte*.' },
            { q: 'Er ist müde, obwohl er acht Stunden geschlafen ___. (haben)', a: ['hat'], why: 'Perfekt in a subordinate clause: *geschlafen hat*.' },
            { q: 'Wenn ihr Hilfe ___, sagt Bescheid. (brauchen)', a: ['braucht'], why: '*ihr braucht*. The verb goes to the end of the *wenn* clause.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Ich mache einen Kurs, weil ich Buchhalterin werden will.', why: 'In the *weil* clause, the modal verb *will* comes last.' },
            { a: 'Obwohl sie Kinder hat, arbeitet sie Vollzeit.', why: 'The *obwohl* clause comes first, so the main clause starts with its verb: *arbeitet*.' },
            { a: 'Ich hoffe, dass ich die Stelle bekomme.', why: 'After *dass*, the verb *bekomme* goes to the end.' },
            { a: 'Wenn der Kunde anruft, gib mir Bescheid.', why: 'The *wenn* clause ends with *anruft*; then comes the main clause.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Deshalb and trotzdem',
      about: 'Give consequences and contrasts in a main clause.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: '*Deshalb* (that is why) and *trotzdem* (but still) are not conjunctions. They are adverbs, and they start a **main clause**. Like any word in position 1, they are followed by the **verb**, and then the subject.' },
          { t: 'table', caption: 'Subordinate clause or main clause', explain: ['head', 'col0'], head: ['', 'Reason or consequence', 'Contrast'], rows: [
            ['Verb at the end', 'Ich bleibe zu Hause, weil ich krank bin.', 'Ich gehe zur Arbeit, obwohl ich krank bin.'],
            ['Verb in position 2', 'Ich bin krank, deshalb bleibe ich zu Hause.', 'Ich bin krank, trotzdem gehe ich zur Arbeit.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Look at the order of ideas. *Weil* comes before the **reason**: *…, weil ich krank bin.* *Deshalb* comes before the **result**: *Ich bin krank, deshalb bleibe ich zu Hause.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Die Firma sucht neue Leute, **deshalb** **gibt** es viele Stellen.', n: '*deshalb* + verb + subject.' },
            { s: 'Das Gehalt ist nicht hoch. **Trotzdem** **nehme** ich die Stelle.', n: '*Trotzdem* can also start a new sentence.' },
            { s: 'Ich habe **deshalb** gekündigt.', n: '*Deshalb* and *trotzdem* can also come after the verb.' },
            { s: 'Ich war müde, **aber** ich **habe** weitergearbeitet.', n: '*Aber*, *und*, *oder* and *denn* do not change the word order.' },
          ] },
          { t: 'text', md: '*Deswegen* and *darum* mean the same as *deshalb* and follow the same rule.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Deshalb or trotzdem? Choose.', items: [
            { q: 'Der Bus hatte Verspätung, ___ kam ich zu spät zur Arbeit.', o: ['deshalb', 'trotzdem'], why: 'Arriving late is the result of the delay: *deshalb*.' },
            { q: 'Ich hatte wenig Erfahrung, ___ hat die Firma mich eingeladen.', o: ['trotzdem', 'deshalb'], why: 'You do not expect an invitation with little experience: *trotzdem*.' },
            { q: 'Meine Kollegin spricht fünf Sprachen, ___ arbeitet sie oft mit Kunden aus dem Ausland.', o: ['deshalb', 'trotzdem'], why: 'Her languages are the reason, so this is a result: *deshalb*.' },
            { q: 'Die Arbeit ist anstrengend, ___ macht sie mir Spaß.', o: ['trotzdem', 'deshalb'], why: 'Hard work, but I still enjoy it: a contrast, *trotzdem*.' },
            { q: 'Wir haben einen großen Auftrag bekommen, ___ müssen wir am Samstag arbeiten.', o: ['deshalb', 'trotzdem'], why: 'Working on Saturday is the result of the big order: *deshalb*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
            { q: '', o: ['Ich habe viel zu tun, deshalb bleibe ich länger.', 'Ich habe viel zu tun, deshalb ich bleibe länger.', 'Ich habe viel zu tun, deshalb länger ich bleibe.'], why: 'After *deshalb* comes the verb, then the subject: *deshalb bleibe ich*.' },
            { q: '', o: ['Er ist krank, trotzdem kommt er ins Büro.', 'Er ist krank, trotzdem er kommt ins Büro.', 'Er ist krank, trotzdem er ins Büro kommt.'], why: '*Trotzdem* starts a main clause: verb in position 2.' },
            { q: '', o: ['Ich bin müde, aber ich arbeite weiter.', 'Ich bin müde, aber arbeite ich weiter.', 'Ich bin müde, aber ich weiter arbeite.'], why: '*Aber* does not change the word order: subject, then verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Ich verdiene wenig, deshalb suche ich einen Nebenjob.', why: '*deshalb* + verb (*suche*) + subject (*ich*).' },
            { a: 'Sie hatte Fieber, trotzdem ging sie zur Arbeit.', why: '*trotzdem* + verb (*ging*) + subject (*sie*).' },
            { a: 'Der Zug fiel aus, deshalb nahm ich ein Taxi.', why: '*deshalb* + verb (*nahm*) + subject (*ich*).' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Applying for a job',
      about: 'The words for a job application and an interview.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'In German-speaking countries, a written application usually has three parts: a cover letter (*das Anschreiben*), a CV (*der Lebenslauf*) and copies of your certificates and references (*die Zeugnisse*). The CV is usually a short table. Many people add a photo, but it is not required.' },
          { t: 'table', caption: 'The application', explain: ['head', 'col1'], quiz: true, head: ['German', 'Meaning'], rows: [
            ['die Stellenanzeige', 'the job advert'],
            ['die Bewerbung', 'the application'],
            ['sich bewerben', 'to apply'],
            ['der Lebenslauf', 'the CV'],
            ['das Anschreiben', 'the cover letter'],
            ['das Zeugnis', 'a certificate from a school, or a reference from an employer'],
            ['das Vorstellungsgespräch', 'the job interview'],
            ['die Berufserfahrung', 'work experience'],
            ['das Gehalt', 'the salary'],
            ['die Probezeit', 'the trial period at the start of a new job'],
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: '*Sich bewerben* goes with three prepositions: *Ich bewerbe mich **bei** einer Firma **um** eine Stelle **als** Krankenpfleger.* The Perfekt is *ich habe mich beworben*.' },
          { t: 'dialogue', title: 'Im Vorstellungsgespräch', lines: [
            { who: 'Frau Lindner', s: 'Guten Tag, Herr Ruiz. Warum haben Sie sich bei uns beworben?' },
            { who: 'Tomás', s: 'Ich habe mich beworben, weil ich gern im Team arbeite und Ihre Projekte sehr interessant finde.' },
            { who: 'Frau Lindner', s: 'Sie haben noch nicht in Deutschland gearbeitet, oder?' },
            { who: 'Tomás', s: 'Nein, aber ich habe sechs Jahre Berufserfahrung in Madrid. Deshalb kenne ich die Arbeit sehr gut.' },
            { who: 'Frau Lindner', s: 'Gut. Die Probezeit dauert sechs Monate. Haben Sie noch Fragen?' },
            { who: 'Tomás', s: 'Ja. Wann kann ich anfangen, wenn Sie sich für mich entscheiden?' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What goes together?', pairs: [
            ['sich um eine Stelle', 'bewerben'],
            ['Berufserfahrung', 'sammeln'],
            ['einen Arbeitsvertrag', 'unterschreiben'],
            ['die Probezeit', 'bestehen'],
            ['zu einem Vorstellungsgespräch', 'einladen'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the preposition: bei, um, als or zu.', items: [
            { q: 'Ich bewerbe mich ___ die Stelle als Grafikerin.', a: ['um'], why: '*sich um eine Stelle bewerben*' },
            { q: 'Sie hat sich ___ einer Bank in Zürich beworben.', a: ['bei'], why: 'The company goes with *bei*: *sich bei einer Firma bewerben*.' },
            { q: 'Er arbeitet seit drei Jahren ___ Krankenpfleger.', a: ['als'], why: 'Your job goes with *als*, without an article.' },
            { q: 'Wir laden Sie gern ___ einem Vorstellungsgespräch ein.', a: ['zu'], why: '*jemanden zu einem Gespräch einladen*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'In der ___ steht, dass die Firma eine Köchin sucht.', o: ['Stellenanzeige', 'Probezeit', 'Gehalt'], why: 'The job advert says what the company is looking for.' },
            { q: 'Im ___ stehen meine Schulen, meine Ausbildung und meine Stellen.', o: ['Lebenslauf', 'Anschreiben', 'Vorstellungsgespräch'], why: 'The CV lists your education and your jobs.' },
            { q: 'Im ___ erkläre ich, warum ich die Stelle möchte.', o: ['Anschreiben', 'Lebenslauf', 'Zeugnis'], why: 'In the cover letter you explain why you want the job.' },
            { q: 'Mein alter Chef hat mir ein sehr gutes ___ geschrieben.', o: ['Zeugnis', 'Gehalt', 'Bewerbung'], why: 'An employer writes a reference: *ein Zeugnis*.' },
            { q: 'In den ersten sechs Monaten ist ___. Danach ist der Vertrag sicherer.', o: ['Probezeit', 'Vorstellungsgespräch', 'Berufserfahrung'], why: 'The first months in a new job are the trial period: *die Probezeit*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'An advert and an application',
      about: 'Read a job advert and an application email.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Stellenanzeige', md: 'Die Gärtnerei Sonnenhof in Freiburg ist ein Familienbetrieb mit 25 Mitarbeitern. Wir suchen ab 1. März eine Mitarbeiterin oder einen Mitarbeiter (m/w/d) für unser Büro, in Vollzeit.\n\nSie beantworten Anrufe und E-Mails von Kunden, schreiben Rechnungen und planen die Termine unserer Gärtner. Sie haben eine abgeschlossene Ausbildung, gute Deutschkenntnisse und arbeiten gern mit Menschen. Englisch ist ein Plus.\n\nWir bieten einen unbefristeten Vertrag, 30 Tage Urlaub und ein freundliches Team. Bitte schicken Sie Ihre Bewerbung mit Lebenslauf und Zeugnissen bis zum 31. Januar an Frau Brandt.' },
        ],
        [
          { t: 'reading', title: 'Bewerbung', md: 'Sehr geehrte Frau Brandt,\n\nmit großem Interesse habe ich Ihre Anzeige gelesen. Hiermit bewerbe ich mich um die Stelle in Ihrem Büro.\n\nIch komme aus Kenia und lebe seit vier Jahren in Freiburg. In Nairobi habe ich eine Ausbildung als Bürokauffrau gemacht und danach fünf Jahre in einem Hotel gearbeitet. Dort habe ich Rechnungen geschrieben und Termine geplant. Ich spreche Englisch und Suaheli. Mein Deutsch ist inzwischen sehr gut, weil ich jeden Tag mit Kunden spreche. Zurzeit arbeite ich in Teilzeit in einem Supermarkt. Die Arbeit dort macht mir Spaß, trotzdem möchte ich wieder in einem Büro arbeiten.\n\nIch glaube, dass ich gut in Ihr Team passe. Über eine Einladung zu einem Vorstellungsgespräch freue ich mich sehr.\n\nMit freundlichen Grüßen\nGrace Wanjiru' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Die Gärtnerei hat mehr als 20 Mitarbeiter.', a: 't', why: 'The advert says *25 Mitarbeitern*.' },
            { q: 'Die Stelle ist nur für ein Jahr.', a: 'f', why: 'The contract is *unbefristet*: it has no end date.' },
            { q: 'Für die Stelle muss man Englisch sprechen.', a: 'f', why: '*Englisch ist ein Plus*: it helps, but it is not required.' },
            { q: 'Grace hat nach ihrer Ausbildung in einem Hotel gearbeitet.', a: 't', why: '*…und danach fünf Jahre in einem Hotel gearbeitet.*' },
            { q: 'Grace möchte im Supermarkt bleiben.', a: 'f', why: 'She likes the job there, but she wants to work in an office again.' },
            { q: 'Grace hat schon einmal in einer Gärtnerei gearbeitet.', a: 'ng', why: 'The email does not say this.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language in the email.', items: [
            { q: '„…, weil ich jeden Tag mit Kunden spreche“: what does Grace explain?', o: ['Why her German is very good.', 'Why she wants a new job.', 'Why she came to Freiburg.'], why: 'The *weil* clause gives the reason for her good German.' },
            { q: '„Die Arbeit dort macht mir Spaß, trotzdem möchte ich …“: what does trotzdem show?', o: ['She likes her job, but she still wants a change.', 'She does not like her job.', 'She must leave the supermarket.'], why: '*Trotzdem* shows a contrast: you would not expect it.' },
            { q: 'What must the applicants send?', o: ['Einen Lebenslauf und Zeugnisse.', 'Nur ein Foto.', 'Eine Rechnung.'], why: 'The advert asks for *Bewerbung mit Lebenslauf und Zeugnissen*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ich gehe heute früher, ___ ich einen Termin beim Arzt habe.', o: ['weil', 'obwohl', 'deshalb'], why: 'A reason, with the verb at the end: *weil*.' },
      { q: 'Er spricht gut Deutsch, ___ er erst seit einem Jahr hier lebt.', o: ['obwohl', 'weil', 'trotzdem'], why: 'A contrast with the verb at the end: *obwohl*. *Trotzdem* would need the verb in position 2.' },
      { q: 'Die Stelle ist interessant, ___ bewerbe ich mich.', o: ['deshalb', 'weil', 'obwohl'], why: 'The verb comes right after the gap, so we need an adverb: *deshalb*.' },
      { q: 'Ich habe mich ___ eine Stelle als Lehrerin beworben.', o: ['um', 'für', 'bei'], why: '*sich um eine Stelle bewerben*' },
      { q: 'Im ___ stehen meine Ausbildung und meine Berufserfahrung.', o: ['Lebenslauf', 'Gehalt', 'Probezeit'], why: 'The CV lists your training and experience.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the verb in brackets in the right form.', items: [
      { q: 'Ich weiß, dass du morgen früh ___. (aufstehen)', a: ['aufstehst'], why: 'A separable verb stays together at the end: *aufstehst*.' },
      { q: 'Sie ist zufrieden, weil sie die Prüfung bestanden ___. (haben)', a: ['hat'], why: 'Perfekt in a subordinate clause: *bestanden hat*.' },
      { q: 'Der Chef war krank, trotzdem ___ er ins Büro. (kommen, Präteritum)', a: ['kam'], why: 'After *trotzdem* comes the verb: *kam er*.' },
      { q: 'Wenn du willst, ___ ich dir bei der Bewerbung. (helfen)', a: ['helfe'], why: 'After the *wenn* clause, the main clause starts with its verb: *helfe ich*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Ich lerne Deutsch, weil ich in Graz studieren möchte.', why: 'The modal verb *möchte* comes last in the *weil* clause.' },
      { a: 'Es regnete stark, trotzdem fuhr er mit dem Fahrrad.', why: '*trotzdem* + verb (*fuhr*) + subject (*er*).' },
      { a: 'Obwohl ich müde war, habe ich weitergearbeitet.', why: 'The *obwohl* clause comes first; the main clause starts with *habe*.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['Ich glaube, dass sie die Stelle bekommt.', 'Ich glaube, dass sie bekommt die Stelle.', 'Ich glaube, dass bekommt sie die Stelle.'], why: 'After *dass*, the verb goes to the end.' },
      { q: '', o: ['Wir haben viele Aufträge, deshalb suchen wir neue Kollegen.', 'Wir haben viele Aufträge, deshalb wir suchen neue Kollegen.', 'Wir haben viele Aufträge, weil suchen wir neue Kollegen.'], why: '*deshalb* + verb + subject.' },
    ] },
  ],
};
