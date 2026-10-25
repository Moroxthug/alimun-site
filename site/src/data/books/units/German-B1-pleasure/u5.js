// German B1 for travel, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Nature and the outdoors',
  goal: 'Plan walks and trips into nature safely.',
  art: 'sun',
  tags: { skills: ['vocabulary', 'reading', 'speaking', 'grammar'], topics: ['nature', 'weather', 'hiking', 'modal-verbs', 'futur-i'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Landscapes, weather and a walk',
      about: 'Talk about landscapes and the weather, and plan a walk.',
      art: 'cactus',
      spreads: [
        [
          { t: 'table', caption: 'Words for landscapes', explain: ['head', 'col1'], quiz: true, head: ['German', 'Meaning'], rows: [
            ['der Gipfel', 'the top of a mountain'],
            ['das Tal', 'a valley'],
            ['der Wald', 'a forest'],
            ['die Wiese', 'a meadow, a field of grass'],
            ['der See', 'a lake'],
            ['die Küste', 'the coast'],
            ['die Schlucht', 'a gorge, a narrow and deep valley'],
            ['der Wasserfall', 'a waterfall'],
          ] },
          { t: 'tip', art: 'owl', md: 'Watch the article: *der See* is a lake, but *die See* is the sea. For the sea, people also say *das Meer*.' },
        ],
        [
          { t: 'text', md: 'Weather forecasts often use the **Futur I**: *werden* + infinitive at the end. In conversation, people often use the present with a time word: *Morgen regnet es.*' },
          { t: 'examples', items: [
            { s: 'Am Nachmittag **wird** es Gewitter **geben**.', n: 'Futur I: *wird* in second place, *geben* at the end.' },
            { s: 'Am Abend **sinken** die Temperaturen auf 8 Grad.', n: '*sinken*: to go down. The opposite is *steigen*.' },
            { s: 'Morgens ist es **neblig**, später **heiter**.', n: '*neblig*: foggy. *heiter*: sunny with a few clouds.' },
            { s: '**Wenn** es **regnet**, **nehmen** wir den kürzeren Weg.', n: 'A condition with *wenn*: the verb goes to the end; then the main clause starts with its verb.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Morgen ___ es in den Alpen schneien. (werden)', a: ['wird'], why: 'Futur I: *wird* + infinitive *schneien*.' },
            { q: 'Am Abend ___ die Temperaturen auf 5 Grad. (sinken)', a: ['sinken'], why: '*die Temperaturen* is plural: *sinken*.' },
            { q: 'Wenn es regnet, ___ wir im Gasthaus. (bleiben)', a: ['bleiben'], why: 'After the *wenn* clause, the main clause starts with the verb.' },
            { q: 'Vom ___ hat man einen tollen Blick ins Tal. (top of the mountain)', a: ['Gipfel'], why: '*der Gipfel*; *vom* = *von dem*, dative.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Planning a walk', lines: [
            { who: 'Hana', s: 'Wir möchten morgen wandern. Können Sie uns eine Tour empfehlen?' },
            { who: 'Wirtin', s: 'Wie lange wollen Sie denn laufen?' },
            { who: 'Hana', s: 'Etwa vier Stunden. Wir sind gut zu Fuß, aber keine Bergsteiger.' },
            { who: 'Wirtin', s: 'Dann empfehle ich den Rundweg zum Wasserfall. Er ist zwölf Kilometer lang, mit 400 Höhenmetern. Unterwegs gibt es eine Hütte, da kann man einkehren.' },
            { who: 'Lukas', s: 'Und wie wird das Wetter?' },
            { who: 'Wirtin', s: 'Vormittags bleibt es trocken, aber am Nachmittag soll es Gewitter geben. Starten Sie lieber früh.' },
            { who: 'Lukas', s: 'Wo fängt der Weg an?' },
            { who: 'Wirtin', s: 'Direkt hinter dem Gasthaus. Folgen Sie einfach dem gelben Schild.' },
          ] },
          { t: 'text', md: '*einkehren*: to stop at an inn or a mountain hut for food and drink. *Höhenmeter* tell you how many metres you climb in total. A *Rundweg* ends where it starts.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Hana und Lukas möchten eine sehr schwere Tour machen.', a: 'f', why: '*Wir sind gut zu Fuß, aber keine Bergsteiger.*' },
            { q: 'Der Weg endet dort, wo er beginnt.', a: 't', why: 'It is a *Rundweg*, and it starts behind the guesthouse.' },
            { q: 'Unterwegs kann man etwas essen.', a: 't', why: '*Unterwegs gibt es eine Hütte, da kann man einkehren.*' },
            { q: 'Das Wetter bleibt den ganzen Tag schön.', a: 'f', why: 'There may be thunderstorms in the afternoon.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the weather word and its meaning.', pairs: [
            ['das Gewitter', 'Blitz und Donner'],
            ['der Schauer', 'kurzer, starker Regen'],
            ['der Nebel', 'Man sieht nicht weit.'],
            ['heiter', 'Sonne und ein paar Wolken'],
            ['das Glatteis', 'Der Boden ist gefroren und sehr glatt.'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Safety and rules',
      about: 'Understand signs and rules in parks and mountains, and stay safe.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Signs in nature are short. They often use an infinitive (*Bitte auf den Wegen bleiben*) or the word *verboten*.' },
          { t: 'table', caption: 'Signs in parks and mountains', explain: ['head', 'col1'], quiz: true, head: ['Sign', 'Meaning'], rows: [
            ['Bitte auf den Wegen bleiben.', 'Do not leave the paths.'],
            ['Hunde an der Leine führen.', 'Keep dogs on a lead.'],
            ['Feuer machen verboten.', 'You must not light a fire.'],
            ['Tiere bitte nicht füttern.', 'Do not give food to the animals.'],
            ['Betreten auf eigene Gefahr.', 'You enter at your own risk.'],
            ['Weg gesperrt.', 'The path is closed.'],
          ] },
        ],
        [
          { t: 'text', md: 'In speech, use modal verbs for rules. Be careful: *nicht dürfen* means it is **not allowed**. *nicht müssen* or *kein … müssen* means it is **not necessary**.' },
          { t: 'examples', items: [
            { s: 'Hier **darf** man **nicht** grillen.', n: 'It is not allowed.' },
            { s: 'Sie **müssen keinen** Eintritt zahlen, der Park ist kostenlos.', n: 'It is not necessary.' },
            { s: 'Hunde **müssen** an die Leine.', n: 'An obligation: dogs must be on a lead.' },
            { s: 'Man **sollte** genug Wasser **mitnehmen**.', n: '*sollte*: advice, a good idea.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Germany, wild camping is usually not allowed. Before a mountain walk, check the weather, tell someone your route and start early. Turn back if the weather gets worse. In an emergency, call *112*: the number works in Germany and the rest of the EU.' },
        ],
        [
          { t: 'dialogue', title: 'At the visitor centre', lines: [
            { who: 'Omar', s: 'Guten Morgen. Ist der Weg zum Gipfel heute offen?' },
            { who: 'Rangerin', s: 'Leider nicht. Nach dem Sturm gestern ist ein Teil des Weges gesperrt. Es liegen Bäume auf dem Weg.' },
            { who: 'Omar', s: 'Schade. Gibt es eine andere Route?' },
            { who: 'Rangerin', s: 'Ja, der Weg durchs Tal ist offen. Er ist leichter, aber auch sehr schön.' },
            { who: 'Omar', s: 'Darf ich meinen Hund mitnehmen?' },
            { who: 'Rangerin', s: 'Ja, aber er muss an die Leine. Hier leben viele Wildtiere.' },
            { who: 'Omar', s: 'Klar. Und kann man unterwegs irgendwo Wasser auffüllen?' },
            { who: 'Rangerin', s: 'Nein, nehmen Sie lieber genug mit. Und bitte nehmen Sie Ihren Müll wieder mit.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Omar kann heute auf den Gipfel wandern.', a: 'f', why: 'Part of the path to the top is closed.' },
            { q: 'Der Weg ist wegen eines Sturms gesperrt.', a: 't', why: '*Nach dem Sturm gestern … liegen Bäume auf dem Weg.*' },
            { q: 'Omars Hund darf frei laufen.', a: 'f', why: '*Er muss an die Leine.*' },
            { q: 'Unterwegs kann man Wasser auffüllen.', a: 'f', why: '*Nein, nehmen Sie lieber genug mit.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Der Eintritt ist frei. Sie ___ nichts bezahlen.', o: ['müssen', 'dürfen', 'können'], why: 'It is not necessary to pay: *nichts bezahlen müssen*.' },
            { q: 'Feuer machen verboten: Hier ___ man kein Feuer machen.', o: ['darf', 'muss', 'braucht'], why: 'Not allowed: *nicht dürfen* / *kein … dürfen*.' },
            { q: 'Das Wetter ändert sich schnell. Sie ___ eine Regenjacke mitnehmen.', o: ['sollten', 'dürfen', 'wollten'], why: 'Advice: *Sie sollten …*' },
            { q: '*Weg gesperrt* bedeutet: ___', o: ['Man darf den Weg nicht benutzen.', 'Man muss den Weg benutzen.', 'Der Weg ist ganz neu.'], why: '*gesperrt*: closed.' },
            { q: '*Tiere bitte nicht füttern* bedeutet: ___', o: ['Man darf den Tieren nichts zu essen geben.', 'Man muss den Tieren Essen geben.', 'Die Tiere sind gefährlich.'], why: '*füttern*: to give food to an animal.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the modal verbs.', items: [
            { s: 'Hier [darf] man nicht zelten, aber man [kann] im Gasthaus übernachten.', why: '*darf* (not allowed) and *kann* (possible). *zelten* and *übernachten* are infinitives.' },
            { s: 'Hunde [müssen] an die Leine, und Sie [sollten] genug Wasser mitnehmen.', why: '*müssen*: an obligation. *sollten*: advice.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentence.', items: [
            { a: 'Bitte nehmen Sie Ihren Müll wieder mit.', why: 'A polite request: verb first, *mit* at the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a hiking route',
      about: 'Read the information for a walk and find what you need to know.',
      art: 'teacup',
      spreads: [
        [
          { t: 'reading', title: 'Rundweg Felsenschlucht', md: 'Länge: 11 km. Gehzeit: etwa 4 Stunden. Höhenmeter: 450. Schwierigkeit: mittel.\n\nDer Rundweg beginnt am Wanderparkplatz am Ortsrand von Steinbach. Zuerst führt er durch einen ruhigen Buchenwald, dann steil hinauf zum Aussichtspunkt „Adlerfels“. Von dort hat man bei gutem Wetter einen weiten Blick über das ganze Tal. Danach geht es durch die enge Felsenschlucht hinunter zum Bach. Dieser Teil ist schmal und bei Nässe rutschig. Gute Wanderschuhe sind deshalb sehr wichtig.\n\nNach etwa zwei Dritteln des Weges erreichen Sie die Mühlenhütte. Hier können Sie einkehren (geöffnet von Mai bis Oktober, montags Ruhetag). Am Ende führt der Weg über Wiesen zurück nach Steinbach.\n\nHinweise: Der Weg durch die Schlucht ist im Winter gesperrt. Hunde sind erlaubt, müssen aber an der Leine geführt werden. Bitte bleiben Sie auf den markierten Wegen und nehmen Sie Ihren Müll wieder mit.\n\nAnfahrt: mit dem Bus 52 bis „Steinbach Mitte“, von dort 10 Minuten zu Fuß zum Parkplatz.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the route information. True, false or not given?', items: [
            { q: 'Der Weg beginnt und endet in Steinbach.', a: 't', why: 'It starts at the car park in Steinbach and leads *zurück nach Steinbach*.' },
            { q: 'Der Weg ist ganz flach.', a: 'f', why: 'It goes *steil hinauf*, with 450 *Höhenmeter*.' },
            { q: 'In der Schlucht kann es rutschig sein.', a: 't', why: '*schmal und bei Nässe rutschig*.' },
            { q: 'Die Mühlenhütte ist jeden Tag geöffnet.', a: 'f', why: '*montags Ruhetag*: it is closed on Mondays.' },
            { q: 'Im Winter kann man den ganzen Rundweg gehen.', a: 'f', why: 'The part through the gorge is closed in winter.' },
            { q: 'In der Mühlenhütte kann man übernachten.', a: 'ng', why: 'The text says you can eat and drink there, not whether you can sleep there.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do these words from the text mean?', items: [
            { q: 'Ein Rundweg ist ein Weg, ___', o: ['der dort endet, wo er beginnt.', 'der immer geradeaus geht.', 'der nur im Sommer offen ist.'], why: '*rund*: you walk in a circle and come back to the start.' },
            { q: '*Montags Ruhetag* bedeutet: ___', o: ['Die Hütte ist am Montag geschlossen.', 'Am Montag muss man leise sein.', 'Am Montag ist das Essen billiger.'], why: '*der Ruhetag*: the day a restaurant or hut is closed.' },
            { q: '*Bei Nässe* bedeutet: ___', o: ['wenn es nass ist', 'wenn es dunkel ist', 'wenn es heiß ist'], why: '*die Nässe*: wetness, from *nass*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'Vom ___ „Adlerfels“ sieht man das ganze Tal. (viewpoint)', a: ['Aussichtspunkt'], why: '*der Aussichtspunkt*: a place with a good view.' },
            { q: 'Für die Schlucht braucht man gute ___. (walking boots)', a: ['Wanderschuhe'], why: 'The path is narrow and can be slippery.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Auf dem ___ hat man einen tollen Blick.', o: ['Gipfel', 'Tal', 'Wald'], why: 'From the top of a mountain: *auf dem Gipfel*. You are *im Tal* or *im Wald*.' },
      { q: 'Grillen verboten: Man ___ hier nicht grillen.', o: ['darf', 'muss', 'braucht'], why: 'Not allowed: *nicht dürfen*.' },
      { q: 'Der Park ist kostenlos. Sie ___ keinen Eintritt zahlen.', o: ['müssen', 'dürfen', 'können'], why: 'Not necessary: *kein … müssen*.' },
      { q: 'Wenn es regnet, ___ zu Hause.', o: ['bleiben wir', 'wir bleiben', 'bleiben'], why: 'After a *wenn* clause, the main clause starts with the verb, then the subject.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Morgen ___ es Gewitter geben. (werden)', a: ['wird'], why: 'Futur I: *wird* + infinitive.' },
      { q: 'Wir haben Hunger. Lass uns in der Hütte ___. (stop for food and drink)', a: ['einkehren'], why: '*einkehren*: to stop at an inn or hut.' },
      { q: 'Nach dem Sturm ist der Weg ___. (closed)', a: ['gesperrt'], why: '*gesperrt*: closed, you may not use it.' },
      { q: 'Ein Weg, der dort endet, wo er beginnt, ist ein ___.', a: ['Rundweg'], why: '*der Rundweg*: a circular walk.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the place and the description.', pairs: [
      ['die Küste', 'Hier trifft das Land auf das Meer.'],
      ['das Tal', 'Es liegt tief zwischen den Bergen.'],
      ['die Wiese', 'Hier wachsen Gras und Blumen.'],
      ['der Wasserfall', 'Hier fällt Wasser von oben nach unten.'],
    ] },
  ],
};
