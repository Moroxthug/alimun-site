// German B1, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Home and neighbours',
  goal: 'Live with neighbours, flatmates and house rules. Describe people and things with relative clauses, use verbs with prepositions, and complain and agree politely.',
  art: 'cat',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'speaking'], topics: ['relativsatz', 'verben-mit-praepositionen', 'da-wo-woerter', 'hausordnung', 'neighbours'], goals: ['foundations', 'relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Relative clauses',
      about: 'Say more about a person or a thing with der, die, das.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'A **relative clause** (Relativsatz) gives more information about a noun. It starts with a **relative pronoun** and the conjugated verb goes to the **end**. There is a comma before it, and after it if the main clause continues.' },
          { t: 'examples', items: [
            { s: 'Das ist der Nachbar, **der** neben uns wohnt.', n: '*der Nachbar* is the subject of *wohnt*: nominative, *der*.' },
            { s: 'Die Wohnung, **die** wir gemietet haben, ist sehr hell.', n: '*die Wohnung* is the object of *gemietet haben*: accusative, *die*.' },
            { s: 'Frau Yilmaz ist die Nachbarin, **der** ich manchmal helfe.', n: '*helfen* takes the dative: *der*.' },
            { s: 'Das sind die Mitbewohner, **mit denen** ich koche.', n: 'After a preposition, its case: *mit* + dative plural, *denen*.' },
          ] },
        ],
        [
          { t: 'text', md: 'The **gender and number** come from the noun before the comma. The **case** comes from the job of the pronoun inside the relative clause. The relative pronouns look like the definite article, except in the dative plural (*denen*).' },
          { t: 'table', caption: 'Relative pronouns', quiz: true, head: ['', 'Maskulin', 'Feminin', 'Neutrum', 'Plural'], rows: [
            ['Nominativ', 'der', 'die', 'das', 'die'],
            ['Akkusativ', 'den', 'die', 'das', 'die'],
            ['Dativ', 'dem', 'der', 'dem', 'denen'],
          ] },
          { t: 'tip', art: 'owl', md: 'Ask two questions. Which noun is it about? That gives *der, die* or *das*. What does it do in the relative clause? That gives the case: *Der Mann, **den** ich gestern gesehen habe* (I saw him: accusative).' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the relative pronoun.', items: [
            { q: 'Wie heißt die Frau, ___ im zweiten Stock wohnt?', o: ['die', 'der', 'den'], why: '*die Frau* is the subject of *wohnt*: nominative feminine, *die*.' },
            { q: 'Der Schrank, ___ ich gekauft habe, passt nicht in die Küche.', o: ['den', 'der', 'dem'], why: 'I bought the wardrobe: accusative masculine, *den*.' },
            { q: 'Das ist der Hausmeister, ___ wir den Schlüssel gegeben haben.', o: ['dem', 'den', 'der'], why: 'We gave the key **to** him: dative masculine, *dem*.' },
            { q: 'Die Leute, ___ unter uns wohnen, sind sehr nett.', o: ['die', 'denen', 'der'], why: 'The people are the subject of *wohnen*: nominative plural, *die*.' },
            { q: 'Meine Mitbewohnerinnen, mit ___ ich mir die Küche teile, kochen gern.', o: ['denen', 'den', 'die'], why: '*mit* + dative plural: *denen*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the relative pronoun.', items: [
            { q: 'Das ist das Haus, ___ meinem Onkel gehört.', a: ['das'], why: '*das Haus* is the subject of *gehört*: nominative neuter, *das*.' },
            { q: 'Der Nachbar, ___ ich jeden Morgen sehe, grüßt nie.', a: ['den'], why: 'I see him: accusative masculine, *den*.' },
            { q: 'Die Kollegin, ___ ich beim Umzug geholfen habe, hat mich zum Essen eingeladen.', a: ['der'], why: '*helfen* takes the dative: feminine dative, *der*.' },
            { q: 'Das Fahrrad, ___ im Hof steht, gehört Herrn Okafor.', a: ['das'], why: 'Subject of *steht*: nominative neuter, *das*.' },
            { q: 'Die Kinder, ___ wir Nachhilfe geben, wohnen im Nachbarhaus.', a: ['denen'], why: 'We give lessons **to** them: dative plural, *denen*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the relative pronoun.', items: [
            { s: 'Der Mann, [der] im dritten Stock wohnt, ist Musiker.', why: '*der* starts the relative clause; the first *Der* is the article.' },
            { s: 'Wir suchen eine Wohnung, [die] einen Balkon hat.', why: '*die* refers to *eine Wohnung* and is the subject of *hat*.' },
            { s: 'Das sind die Nachbarn, [denen] das rote Auto gehört.', why: '*gehören* takes the dative: dative plural, *denen*. *das* before *rote Auto* is an article.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Verbs with prepositions',
      about: 'Learn verbs with their preposition and use da- and wo- words.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Many verbs go with a fixed **preposition**, and the preposition decides the case. Learn the verb, the preposition and the case together.' },
          { t: 'table', caption: 'Verbs with prepositions', explain: ['head'], quiz: true, head: ['Verb', 'Example'], rows: [
            ['sich beschweren über + Akk.', 'Er beschwert sich über den Lärm.'],
            ['sich kümmern um + Akk.', 'Wer kümmert sich um die Katze?'],
            ['sich ärgern über + Akk.', 'Ich ärgere mich über den Müll im Hof.'],
            ['warten auf + Akk.', 'Wir warten auf den Handwerker.'],
            ['sich erinnern an + Akk.', 'Erinnerst du dich an unsere erste Wohnung?'],
            ['sprechen mit + Dat.', 'Ich spreche mit der Vermieterin.'],
            ['Angst haben vor + Dat.', 'Mein Sohn hat Angst vor dem Hund.'],
            ['sich freuen auf + Akk.', 'Wir freuen uns auf das Hoffest.'],
          ] },
        ],
        [
          { t: 'text', md: 'For a **thing** or an idea, German joins *da-* or *wo-* with the preposition. *Da-* words refer back to something; *wo-* words ask a question. Before a vowel, add *r*: *darüber, worum, daran*.' },
          { t: 'table', caption: 'da- and wo- words', explain: ['head'], quiz: true, head: ['Preposition', 'Answer', 'Question'], rows: [
            ['über', 'darüber', 'worüber?'],
            ['um', 'darum', 'worum?'],
            ['auf', 'darauf', 'worauf?'],
            ['an', 'daran', 'woran?'],
            ['mit', 'damit', 'womit?'],
            ['vor', 'davor', 'wovor?'],
          ] },
          { t: 'examples', items: [
            { s: '**Worüber** beschwert er sich? Über den Lärm. Er beschwert sich oft **darüber**.', n: 'A thing: *worüber*, *darüber*.' },
            { s: '**Über wen** ärgerst du dich? Über meinen Mitbewohner. Ich ärgere mich oft **über ihn**.', n: 'A person: preposition + *wen* or a pronoun, never *da-* or *wo-*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Which preposition goes with the verb?', pairs: [
            ['sich kümmern', 'um'],
            ['sich beschweren', 'über'],
            ['warten', 'auf'],
            ['Angst haben', 'vor'],
            ['sich erinnern', 'an'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the preposition.', items: [
            { q: 'Wir haben lange ___ den Elektriker gewartet.', a: ['auf'], why: '*warten auf* + accusative.' },
            { q: 'Kannst du dich am Wochenende ___ meine Pflanzen kümmern?', a: ['um'], why: '*sich kümmern um* + accusative.' },
            { q: 'Ich muss ___ dem Vermieter über die Heizung sprechen.', a: ['mit'], why: '*sprechen mit* + dative: the person you talk to.' },
            { q: 'Freust du dich schon ___ die neue Wohnung?', a: ['auf'], why: '*sich freuen auf*: something in the future.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: '___ ärgerst du dich? Über die laute Musik.', o: ['Worüber', 'Über wen', 'Darüber'], why: 'A question about a thing, the music: *wo(r)* + preposition. *Über wen* asks about a person.' },
            { q: 'Der Hof ist schmutzig. Ich habe mich schon oft ___ beschwert.', o: ['darüber', 'worüber', 'über ihn'], why: 'It refers back to a thing, the dirty yard: *darüber*.' },
            { q: 'Herr Novak ist sehr nett. Ich spreche gern ___.', o: ['mit ihm', 'damit', 'womit'], why: 'A person: preposition + pronoun, *mit ihm*.' },
            { q: '___ wartest du? Auf meine Schwester.', o: ['Auf wen', 'Worauf', 'Darauf'], why: 'The answer is a person, so the question is *Auf wen?*' },
            { q: 'Das Paket ist noch nicht da. Ich warte schon seit Tagen ___.', o: ['darauf', 'worauf', 'auf es'], why: 'A thing, the parcel: *darauf*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Rules, complaints and agreements',
      about: 'Talk about house rules and solve problems with neighbours politely.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Many buildings in German-speaking countries have a **Hausordnung**, a set of house rules. It often says when people should be quiet, how to separate rubbish and who cleans the stairs. Quiet hours at night are usually from 10 pm to 6 or 7 am, and Sundays and public holidays are quiet days too.' },
          { t: 'table', caption: 'At home', explain: ['head', 'col1'], quiz: true, head: ['German', 'Meaning'], rows: [
            ['die Hausordnung', 'the house rules'],
            ['die Ruhezeit, die Nachtruhe', 'the quiet hours'],
            ['der Vermieter, die Vermieterin', 'the landlord, the landlady'],
            ['der Hausmeister', 'the caretaker'],
            ['das Treppenhaus', 'the stairs and hall in a building'],
            ['die Nebenkosten', 'extra costs on top of the rent, such as water and heating'],
            ['den Müll trennen', 'to separate the rubbish'],
            ['Rücksicht nehmen auf + Akk.', 'to be considerate of other people'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'An der Tür', lines: [
            { who: 'Herr Becker', s: 'Guten Abend. Entschuldigen Sie, ich wohne direkt unter Ihnen.' },
            { who: 'Ana', s: 'Guten Abend! Ist etwas passiert?' },
            { who: 'Herr Becker', s: 'Es ist schon nach elf, und Ihre Musik ist sehr laut. Ich muss morgen früh aufstehen.' },
            { who: 'Ana', s: 'Oh, das tut mir leid. Wir feiern den Geburtstag meiner Schwester. Ich mache die Musik sofort leiser.' },
            { who: 'Herr Becker', s: 'Danke. Könnten Sie mir beim nächsten Mal vorher Bescheid sagen?' },
            { who: 'Ana', s: 'Ja, natürlich. Ich hänge einen Zettel ins Treppenhaus. Einverstanden?' },
            { who: 'Herr Becker', s: 'Einverstanden. Dann noch einen schönen Abend.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Start a complaint softly: *Entschuldigen Sie, …*, *Ich wollte Sie bitten, …*, *Könnten Sie bitte …?* To agree, say *Einverstanden*, *Das ist kein Problem* or *Das machen wir so*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'In der ___ steht, dass man nach 22 Uhr leise sein muss.', o: ['Hausordnung', 'Nebenkosten', 'Treppenhaus'], why: 'The house rules say when people must be quiet.' },
            { q: 'Die Heizung ist kaputt. Ich rufe den ___ an.', o: ['Hausmeister', 'Mitbewohner', 'Müll'], why: 'The caretaker repairs things in the building.' },
            { q: 'Die Miete ist 650 Euro, plus 150 Euro ___.', o: ['Nebenkosten', 'Ruhezeit', 'Hausordnung'], why: 'Water, heating and similar costs on top of the rent: *Nebenkosten*.' },
            { q: 'Papier, Glas und Plastik kommen in verschiedene Tonnen. Wir ___ den Müll.', o: ['trennen', 'nehmen', 'teilen'], why: '*den Müll trennen*' },
            { q: 'Bitte nehmen Sie ___ auf Ihre Nachbarn.', o: ['Rücksicht', 'Ruhe', 'Angst'], why: '*Rücksicht nehmen auf*: think of other people.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What is the best answer?', items: [
            { q: 'Entschuldigen Sie, Ihr Fahrrad steht schon seit Tagen im Treppenhaus.', o: ['Oh, das wusste ich nicht. Ich stelle es gleich in den Keller.', 'Das ist mein Fahrrad.', 'Ja, ich fahre gern Fahrrad.'], why: 'A polite answer to a complaint: say sorry and offer a solution.' },
            { q: 'Könnten Sie am Sonntag bitte nicht bohren?', o: ['Natürlich, dann mache ich das am Montag.', 'Nein, ich habe keine Zeit.', 'Ich bohre gern.'], why: 'Sunday is a quiet day. Agree and move the work to another day.' },
            { q: 'Wie wäre es mit einem Putzplan für die Küche?', o: ['Gute Idee, das machen wir so.', 'Die Küche ist groß.', 'Ich koche heute Nudeln.'], why: 'A suggestion: you agree with *Gute Idee* or *Das machen wir so*.' },
            { q: 'Ich fahre zwei Wochen weg. Könnten Sie meine Post nehmen?', o: ['Ja, gern. Geben Sie mir einfach den Schlüssel.', 'Nein, ich habe keinen Briefkasten.', 'Ich fahre auch gern weg.'], why: 'Neighbours often take in post for each other. A friendly yes.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Es tut mir leid, das wusste ich nicht.', why: 'A polite answer to a complaint.' },
            { a: 'Wie wäre es mit einem Putzplan?', why: 'A suggestion: *Wie wäre es mit* + dative.' },
            { a: 'Ich wohne direkt unter Ihnen.', why: '*direkt* goes before *unter Ihnen*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'House rules and a note',
      about: 'Read part of a Hausordnung and a note to a neighbour.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'reading', title: 'Hausordnung (Auszug)', md: 'Alle Bewohner nehmen Rücksicht aufeinander. Von 22 bis 7 Uhr ist Nachtruhe. An Sonn- und Feiertagen bitten wir den ganzen Tag um Ruhe.\n\nDas Treppenhaus wird jede Woche von einer anderen Partei geputzt. Der Plan hängt neben dem Eingang. Fahrräder und Kinderwagen dürfen nicht im Treppenhaus stehen, weil sie den Weg blockieren. Dafür gibt es einen Raum im Keller.\n\nBitte trennen Sie den Müll. Die Tonnen stehen im Hof.' },
        ],
        [
          { t: 'reading', title: 'Ein Zettel an der Tür', md: 'Liebe Nachbarinnen und Nachbarn,\n\nmein Name ist Lucía Fernández, und ich wohne seit Oktober im zweiten Stock. Am Samstag, dem 14., feiere ich mit ein paar Freunden meinen dreißigsten Geburtstag. Es kann ein bisschen lauter werden, aber ab 22 Uhr bleiben wir in der Wohnung und machen die Musik leiser.\n\nWenn es Sie trotzdem stört, klingeln Sie bitte einfach bei mir. Und wer Lust hat: Um 18 Uhr gibt es Kuchen, den ich selbst gebacken habe. Sie sind herzlich eingeladen!\n\nViele Grüße\nLucía, Wohnung 2B' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Nach der Hausordnung ist von 22 bis 7 Uhr Nachtruhe.', a: 't', why: '*Von 22 bis 7 Uhr ist Nachtruhe.*' },
            { q: 'Jede Partei putzt das Treppenhaus jeden Tag.', a: 'f', why: 'Every week, a different household cleans it.' },
            { q: 'Fahrräder kann man in den Keller stellen.', a: 't', why: 'There is a room for them in the cellar.' },
            { q: 'Lucía wohnt schon seit vielen Jahren im Haus.', a: 'f', why: 'She has lived there since October.' },
            { q: 'Lucía hat alle Nachbarn zum Kuchen eingeladen.', a: 't', why: '*Sie sind herzlich eingeladen!* The note is for all neighbours.' },
            { q: 'Lucía hat den Kuchen im Supermarkt gekauft.', a: 'f', why: 'She baked the cake herself: *den ich selbst gebacken habe*.' },
            { q: 'Lucías Freunde kommen aus Spanien.', a: 'ng', why: 'The note does not say where her friends are from.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language in the texts.', items: [
            { q: '„Kuchen, den ich selbst gebacken habe“: why den?', o: ['Der Kuchen is masculine and the object of gebacken habe.', 'Kuchen is plural.', 'Backen takes the dative.'], why: 'Masculine, accusative: *den*.' },
            { q: '„Dafür gibt es einen Raum im Keller.“ What does dafür refer to?', o: ['Bicycles and prams.', 'The rubbish.', 'The quiet hours.'], why: '*Dafür* refers back to the bicycles and prams in the sentence before.' },
            { q: 'Why does Lucía write the note?', o: ['She wants to tell her neighbours about her party.', 'She wants to complain about the noise.', 'She is looking for a new flat.'], why: 'She tells them about the party before it happens.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Das ist die Nachbarin, ___ ich meine Schlüssel gegeben habe.', o: ['der', 'die', 'den'], why: 'I gave the keys **to** her: dative feminine, *der*.' },
      { q: 'Der Teppich, ___ im Flur liegt, ist neu.', o: ['der', 'den', 'dem'], why: 'Subject of *liegt*: nominative masculine, *der*.' },
      { q: 'Wir haben uns beim Vermieter ___ die kalte Wohnung beschwert.', o: ['über', 'um', 'auf'], why: '*sich beschweren über* + accusative.' },
      { q: '___ kümmerst du dich? Um den Garten.', o: ['Worum', 'Um wen', 'Darum'], why: 'A thing, the garden: *Worum?*' },
      { q: 'Von 22 bis 7 Uhr ist ___.', o: ['Nachtruhe', 'Nebenkosten', 'Treppenhaus'], why: 'The quiet hours at night: *Nachtruhe*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Die Freunde, mit ___ ich wohne, kommen aus Brasilien. (relative pronoun)', a: ['denen'], why: '*mit* + dative plural: *denen*.' },
      { q: 'Das Sofa, ___ wir gestern gekauft haben, ist zu groß. (relative pronoun)', a: ['das'], why: 'We bought it: accusative neuter, *das*.' },
      { q: 'Ich erinnere mich gern ___ meine erste WG. (preposition)', a: ['an'], why: '*sich erinnern an* + accusative.' },
      { q: 'Der Lärm ist schlimm. Wir ärgern uns jeden Tag ___. (da- word)', a: ['darüber'], why: '*sich ärgern über*, referring back to a thing: *darüber*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Das ist der Hausmeister, der alles repariert.', why: 'Relative clause: *der* at the start, the verb *repariert* at the end.' },
      { a: 'Worüber hast du dich beschwert?', why: 'A question about a thing: *wo(r)* + preposition, then the verb.' },
    ] },
    { t: 'ex', kind: 'match', h: 'What goes together?', pairs: [
      ['Könnten Sie bitte', 'leiser sein?'],
      ['Es tut mir leid,', 'das wusste ich nicht.'],
      ['Wie wäre es', 'mit einem Putzplan?'],
      ['Bitte nehmen Sie Rücksicht', 'auf Ihre Nachbarn.'],
    ] },
  ],
};
