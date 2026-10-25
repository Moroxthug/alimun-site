// German B2 for moving abroad, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Joining in',
  goal: 'Get involved in clubs, volunteering and local life.',
  art: 'pretzel',
  tags: { skills: ['speaking', 'reading', 'vocabulary', 'grammar'], topics: ['clubs', 'volunteering', 'verbs-with-prepositions', 'da-wo-compounds', 'meetings', 'giving-opinions'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Clubs and volunteering',
      about: 'Vereine and Ehrenamt, and how to describe what you do.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Clubs (*Vereine*) are a big part of local life in Germany: sports clubs, choirs, gardening clubs, volunteer fire brigades and many more. A registered club (*eingetragener Verein*, *e. V.*) has rules (*Satzung*), a board (*Vorstand*) and members who usually pay a yearly fee. Volunteering (*Ehrenamt*) means unpaid work for others, for example at a food bank, in a neighbourhood project or as a coach for children.' },
          { t: 'table', caption: 'Words for clubs and volunteering', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['der Verein', 'a club or association'],
            ['das Mitglied', 'a member'],
            ['der Mitgliedsbeitrag', 'the membership fee'],
            ['der Vorstand', 'the board that runs the club'],
            ['die Mitgliederversammlung', 'the meeting of all members'],
            ['das Ehrenamt', 'unpaid volunteer work'],
            ['ehrenamtlich', 'as a volunteer, without pay'],
            ['sich engagieren für', 'to be active for a cause'],
          ] },
        ],
        [
          { t: 'text', md: 'To describe what you do, you need **verbs with prepositions**: *sich engagieren für, sich kümmern um, teilnehmen an, zuständig sein für*. When you refer back to a thing or an idea, use *da-* + preposition: *dafür, darum, daran* (with an extra *r* before a vowel). Questions about things use *wo-*: *Wofür engagierst du dich?* For people, use the preposition with a pronoun: *um sie, für ihn*.' },
          { t: 'examples', items: [
            { s: 'Ich engagiere mich für den Umweltschutz. Ich engagiere mich schon lange **dafür**.', n: '*dafür* refers back to *den Umweltschutz*, a thing.' },
            { s: 'Im Verein kümmere ich mich um die Finanzen. Wer kümmert sich **darum**, wenn ich im Urlaub bin?', n: '*darum* = *um die Finanzen*.' },
            { s: '**Woran** nimmst du am Sonntag teil? An einem Spendenlauf.', n: 'A question about a thing: *wo-* + *an* = *woran*.' },
            { s: 'Frau Klein ist neu. Ich kümmere mich **um sie**.', n: 'A person: preposition + pronoun, not *darum*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the preposition or the da-word.', items: [
            { q: 'Ich engagiere mich seit drei Jahren ___ den Tierschutz.', a: ['für'], why: '*sich engagieren für* + Akkusativ.' },
            { q: 'Wer kümmert sich ___ die Getränke beim Sommerfest?', a: ['um'], why: '*sich kümmern um* + Akkusativ.' },
            { q: 'Nimmst du auch ___ der Mitgliederversammlung teil?', a: ['an'], why: '*teilnehmen an* + Dativ.' },
            { q: 'Der Verein sammelt Geld für einen neuen Spielplatz. Ich spende auch ___.', a: ['dafür'], why: '*dafür* = *für den Spielplatz*, a thing.' },
            { q: 'Im Vorstand bin ich ___ die Finanzen zuständig.', a: ['für'], why: '*zuständig sein für*: to be responsible for.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: '___ interessierst du dich? Für Fußball.', o: ['Wofür', 'Worauf', 'Dafür'], why: 'A question about a thing with *für*: *wofür*.' },
            { q: 'Das Sommerfest ist am Samstag. Kannst du dich ___ kümmern?', o: ['darum', 'um es', 'worum'], why: '*darum* refers back to *das Sommerfest*, a thing.' },
            { q: 'Frau Özdemir ist neu im Chor. Kannst du dich ___ kümmern?', o: ['um sie', 'darum', 'worum'], why: 'A person: preposition + pronoun.' },
            { q: '___ hast du gestern teilgenommen? An einem Erste-Hilfe-Kurs.', o: ['Woran', 'Wofür', 'Daran'], why: '*teilnehmen an*, so the question word is *woran*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Wofür engagierst du dich in deiner Freizeit?', why: 'Question word first, then the verb; the reflexive pronoun *dich* follows *du*.' },
            { a: 'Wer kümmert sich um die Finanzen?', why: '*Wer* is the subject; *sich kümmern um*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the words and their meanings.', pairs: [
            ['der Vorstand', 'leitet den Verein'],
            ['das Mitglied', 'gehört zum Verein'],
            ['der Mitgliedsbeitrag', 'Geld, das Mitglieder regelmäßig zahlen'],
            ['die Satzung', 'die Regeln des Vereins'],
            ['das Ehrenamt', 'Arbeit für andere ohne Bezahlung'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Taking part in a meeting',
      about: 'Ask to speak, give your opinion and disagree politely.',
      art: 'parrot',
      spreads: [
        [
          { t: 'dialogue', title: 'Mitgliederversammlung im Sportverein', lines: [
            { who: 'Birgit', s: 'Kommen wir zum nächsten Punkt: die Reparatur des Vereinsheims. Der Vorstand schlägt vor, den Beitrag ab Januar um zwei Euro im Monat zu erhöhen.' },
            { who: 'Jonas', s: 'Darf ich kurz etwas dazu sagen? Ich verstehe, dass die Reparatur nötig ist. Aber für Familien mit mehreren Kindern wird es dann ziemlich teuer.' },
            { who: 'Aylin', s: 'Das ist ein wichtiger Punkt. Ich würde vorschlagen, dass es für Familien einen ermäßigten Beitrag gibt.' },
            { who: 'Peter', s: 'Ich sehe das etwas anders. Wir haben die Beiträge seit acht Jahren nicht erhöht. Zwei Euro sind meiner Meinung nach nicht viel.' },
            { who: 'Aylin', s: 'Da gebe ich dir recht. Aber wir wollen ja niemanden verlieren.' },
            { who: 'Kemal', s: 'Wie wäre es, wenn wir zusätzlich ein Sommerfest organisieren und die Einnahmen für das Dach verwenden?' },
            { who: 'Birgit', s: 'Gute Idee. Können wir uns darauf einigen, dass der Vorstand bis zur nächsten Sitzung einen Vorschlag für einen Familienbeitrag ausarbeitet?' },
            { who: 'Jonas', s: 'Einverstanden.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the meeting. True or false?', items: [
            { q: 'Der Vorstand möchte den Beitrag erhöhen.', a: 't', why: '*den Beitrag ab Januar um zwei Euro im Monat zu erhöhen*' },
            { q: 'Jonas ist grundsätzlich gegen die Reparatur.', a: 'f', why: '*Ich verstehe, dass die Reparatur nötig ist.* He worries about families.' },
            { q: 'Peter findet die Erhöhung zu hoch.', a: 'f', why: '*Zwei Euro sind meiner Meinung nach nicht viel.*' },
            { q: 'Am Ende stimmen alle sofort über einen Familienbeitrag ab.', a: 'f', why: 'The board will first work out a proposal for the next meeting.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Phrases for meetings', explain: ['head', 'col0'], head: ['What you do', 'Phrase'], rows: [
            ['Ask to speak', 'Darf ich kurz etwas dazu sagen?'],
            ['Give your opinion', 'Meiner Meinung nach … / Ich bin der Ansicht, dass …'],
            ['Agree', 'Da gebe ich dir recht. / Das sehe ich genauso.'],
            ['Disagree politely', 'Ich sehe das etwas anders. / Da bin ich anderer Meinung.'],
            ['Accept a point and add another', 'Das ist ein wichtiger Punkt, aber …'],
            ['Make a suggestion', 'Ich würde vorschlagen, dass … / Wie wäre es, wenn …?'],
            ['Reach an agreement', 'Können wir uns darauf einigen, dass …?'],
          ] },
          { t: 'tip', art: 'owl', md: 'In many clubs members say *du* to each other. In a more formal meeting, for example a residents’ meeting with the landlord or a public meeting in your town, people say *Sie*. If you are not sure, listen first to what the others use.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which sentence fits the situation?', items: [
            { q: 'Sie möchten in der Sitzung etwas sagen.', o: ['Darf ich kurz etwas dazu sagen?', 'Jetzt rede ich!', 'Sei mal still, ich will was sagen.'], why: 'A polite question to ask for the floor.' },
            { q: 'Sie sind nicht einverstanden, möchten aber höflich bleiben.', o: ['Ich sehe das etwas anders.', 'Das ist doch Unsinn.', 'Du hast keine Ahnung.'], why: '*etwas anders* softens your disagreement.' },
            { q: 'Sie haben eine Idee.', o: ['Wie wäre es, wenn wir einen Flohmarkt organisieren?', 'Wir machen jetzt einen Flohmarkt, fertig.', 'Ein Flohmarkt wäre gewesen.'], why: '*Wie wäre es, wenn …?* is a friendly suggestion.' },
            { q: 'Sie stimmen zu.', o: ['Das sehe ich genauso.', 'Das sehe ich anders.', 'Da muss ich widersprechen.'], why: '*genauso*: in exactly the same way.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Wie wäre es, wenn wir ein Fest organisieren?', why: 'After *wenn*, the verb *organisieren* goes to the end.' },
            { a: 'Ich würde vorschlagen, dass wir abstimmen.', why: 'After *dass*, the verb *abstimmen* goes to the end.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the phrases.', items: [
            { q: 'Meiner ___ nach ist die Erhöhung fair.', a: ['Meinung'], why: '*meiner Meinung nach*: in my opinion.' },
            { q: 'Da gebe ich dir ___.', a: ['recht', 'Recht'], why: '*jemandem recht geben*: to agree with someone.' },
            { q: 'Ich würde ___, dass wir im Juni ein Fest machen.', a: ['vorschlagen'], why: '*Ich würde vorschlagen, dass …*: a polite suggestion.' },
            { q: 'Können wir uns darauf ___, dass Kemal das Fest plant?', a: ['einigen'], why: '*sich einigen auf*: to agree on something.' },
            { q: 'Ich bin der ___, dass wir mehr Werbung brauchen.', a: ['Ansicht', 'Meinung', 'Auffassung'], why: '*Ich bin der Ansicht / Meinung, dass …*' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'News from the club',
      about: 'Read a club newsletter with a call for volunteers.',
      art: 'teacup',
      spreads: [
        [
          { t: 'reading', title: 'Rundbrief des TSV Grünwiese e. V., Herbst 2026', md: 'Liebe Mitglieder,\n\nwas für ein Sommer! Unser Vereinsfest im August war ein voller Erfolg. Ein herzliches Dankeschön an alle, die Kuchen gebacken, Bänke aufgebaut oder an der Kasse gestanden haben. Dank eurer Hilfe sind fast 3.000 Euro für die Sanierung unseres Vereinsheims zusammengekommen. Die Arbeiten am Dach beginnen im Oktober; in dieser Zeit bleiben die Umkleiden im Vereinsheim geschlossen. Bitte nutzt stattdessen die Kabinen in der Schulturnhalle.\n\nAuch aus den Abteilungen gibt es Neues: Die Laufgruppe trifft sich ab November dienstags und donnerstags schon um 18 Uhr, damit niemand im Dunkeln laufen muss. Und unsere Tischtennisabteilung freut sich über zwei neue Trainerinnen, die in diesem Jahr ihre Trainerlizenz gemacht haben.\n\nBei der Mitgliederversammlung im September wurde außerdem beschlossen, ab Januar einen ermäßigten Familienbeitrag einzuführen. Die genauen Beträge findet ihr auf unserer Website.\n\n**Aufruf: Wir suchen euch!**\n\nFür unser neues Projekt „Bewegung für alle“ suchen wir ehrenamtliche Helferinnen und Helfer. Ab Januar wollen wir einmal pro Woche ein kostenloses Sportangebot für Kinder aus der Nachbarschaft anbieten, deren Familien sich einen Vereinsbeitrag nicht leisten können. Wir brauchen Menschen, die zwei Stunden pro Woche Zeit haben, gern mit Kindern arbeiten und zuverlässig sind. Sportliche Höchstleistungen sind nicht nötig! Wer mehrere Sprachen spricht, ist besonders willkommen. Für alle Ehrenamtlichen bieten wir im Dezember eine kostenlose Schulung an.\n\nInteresse? Dann meldet euch bis zum 30. November bei unserer Jugendwartin Nadia Benali.\n\nSportliche Grüße\neuer Vorstand' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Beim Vereinsfest kam Geld für das Vereinsheim zusammen.', a: 't', why: '*fast 3.000 Euro für die Sanierung unseres Vereinsheims*' },
            { q: 'Während der Arbeiten am Dach kann man sich in der Schulturnhalle umziehen.', a: 't', why: '*Bitte nutzt stattdessen die Kabinen in der Schulturnhalle.*' },
            { q: 'Die Laufgruppe trifft sich im Winter später als bisher.', a: 'f', why: '*schon um 18 Uhr*: earlier, so that nobody runs in the dark.' },
            { q: 'Der Familienbeitrag beträgt zehn Euro im Monat.', a: 'ng', why: 'The amounts are only on the website.' },
            { q: 'Für das neue Projekt muss man sehr sportlich sein.', a: 'f', why: '*Sportliche Höchstleistungen sind nicht nötig!*' },
            { q: 'Die Schulung für Ehrenamtliche kostet etwas.', a: 'f', why: '*eine kostenlose Schulung*' },
            { q: 'Nadia Benali trainiert auch die Tischtennisabteilung.', a: 'ng', why: 'She is the *Jugendwartin*; the text does not say that she coaches table tennis.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Für wen ist das Projekt „Bewegung für alle“?', o: ['für Kinder aus Familien, die sich den Beitrag nicht leisten können', 'für alle neuen Vereinsmitglieder', 'für Erwachsene, die Sprachen lernen möchten'], why: '*für Kinder aus der Nachbarschaft, deren Familien sich einen Vereinsbeitrag nicht leisten können*' },
            { q: 'Was sollen die Ehrenamtlichen mitbringen?', o: ['Zeit, Freude an der Arbeit mit Kindern und Zuverlässigkeit', 'eine Trainerlizenz', 'sehr gute sportliche Leistungen'], why: 'Two hours a week, enjoying work with children, being reliable.' },
            { q: '„Dank eurer Hilfe sind fast 3.000 Euro zusammengekommen.“ Was bedeutet „zusammenkommen“ hier?', o: ['Es wurde insgesamt so viel Geld gesammelt.', 'Die Mitglieder haben sich getroffen.', 'Das Geld wurde ausgegeben.'], why: 'Money *kommt zusammen* when many small amounts add up.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Arbeit für andere ohne Bezahlung heißt ___.', o: ['Ehrenamt', 'Vorstand', 'Satzung'], why: '*das Ehrenamt*: unpaid volunteer work.' },
      { q: 'Der Verein plant ein Fest. Wer kümmert sich ___?', o: ['darum', 'um es', 'worum'], why: '*darum* refers back to a thing.' },
      { q: '___ engagierst du dich? Für den Naturschutz.', o: ['Wofür', 'Dafür', 'Woran'], why: '*sich engagieren für*: the question is *wofür*.' },
      { q: 'Sie möchten höflich widersprechen.', o: ['Ich sehe das etwas anders.', 'Das ist falsch, Punkt.', 'Das sehe ich genauso.'], why: '*Ich sehe das etwas anders* disagrees politely.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Nimmst du ___ der Versammlung teil?', a: ['an'], why: '*teilnehmen an* + Dativ.' },
      { q: 'Ich würde vorschlagen, ___ wir im Mai abstimmen.', a: ['dass'], why: '*Ich würde vorschlagen, dass …*' },
      { q: 'Meiner Meinung ___ ist das eine gute Idee.', a: ['nach'], why: '*meiner Meinung nach*.' },
      { q: 'Jedes Mitglied zahlt einen ___. (membership fee)', a: ['Mitgliedsbeitrag', 'Beitrag'], why: '*der Mitgliedsbeitrag*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the beginning and the end of the phrase.', pairs: [
      ['Darf ich kurz etwas', 'dazu sagen?'],
      ['Da gebe ich', 'dir recht.'],
      ['Können wir uns darauf', 'einigen?'],
      ['Wie wäre es, wenn', 'wir ein Fest organisieren?'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentence.', items: [
      { a: 'Wer kümmert sich um die Getränke?', why: '*sich kümmern um*; *Wer* is the subject.' },
    ] },
  ],
};
