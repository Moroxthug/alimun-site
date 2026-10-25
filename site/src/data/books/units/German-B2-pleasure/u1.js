// German B2 for travel, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Slow travel and local life',
  goal: 'Talk in depth about ways of travelling and living like a local.',
  art: 'snail',
  tags: { skills: ['speaking', 'vocabulary', 'grammar', 'reading'], topics: ['transport', 'comparison', 'je-desto', 'zwar-aber', 'local-life', 'sich-gewoehnen'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Plane, night train or bike?',
      about: 'Compare ways of travelling and weigh their pros and cons.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'dialogue', title: 'Wie kommen wir nach Wien?', lines: [
            { who: 'Lena', s: 'Für Wien im Mai: Fliegen wir oder nehmen wir den Nachtzug?' },
            { who: 'Tarek', s: 'Der Flug dauert nur anderthalb Stunden. Im Vergleich dazu ist der Nachtzug ziemlich langsam.' },
            { who: 'Lena', s: 'Zwar braucht der Zug länger, aber wir sparen eine Hotelnacht und kommen mitten in der Stadt an.' },
            { who: 'Tarek', s: 'In einem Liegewagen mit sechs Leuten schlafe ich aber kaum.' },
            { who: 'Lena', s: 'Dann buchen wir ein Schlafwagenabteil für zwei. Das ist teurer, aber deutlich bequemer.' },
            { who: 'Tarek', s: 'Na gut. Je länger ich darüber nachdenke, desto besser gefällt mir die Idee. Am Flughafen verliert man ja auch viel Zeit.' },
            { who: 'Lena', s: 'Genau. Und während man im Flugzeug nur wartet, kann man im Zug morgens frühstücken und aus dem Fenster schauen.' },
          ] },
          { t: 'text', md: 'Lena and Tarek weigh the **pros and cons**, *die Vorteile und Nachteile*. At B2 you do more than say *besser* or *schlechter*: you admit a point and then give a stronger one, you contrast two facts, and you show how one thing grows with another.' },
        ],
        [
          { t: 'table', caption: 'Ways to compare', explain: ['head', 'col1'], head: ['Structure', 'Use', 'Example'], rows: [
            ['im Vergleich zu + Dativ', 'comparing two things', 'Im Vergleich zum Auto ist der Zug entspannter.'],
            ['zwar … aber', 'admitting a point, then giving a stronger one', 'Der Zug ist zwar langsamer, aber bequemer.'],
            ['während', 'a contrast between two facts; the verb goes to the end', 'Während das Fahrrad nichts kostet, ist ein Mietwagen teuer.'],
            ['einerseits … andererseits', 'showing two sides', 'Einerseits ist Fliegen schnell, andererseits schadet es dem Klima.'],
            ['je … desto', 'one thing grows with another', 'Je länger ich unterwegs bin, desto entspannter werde ich.'],
            ['deutlich / viel + Komparativ', 'a big difference', 'Der Bus ist deutlich günstiger als der Zug.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In *je … desto* both parts need a comparative. The *je* part is a subordinate clause, so its verb goes to the end. After *desto* + comparative comes the verb, then the subject: *Je früher man bucht, **desto günstiger ist** das Ticket.* You can also say *umso* instead of *desto*.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each adjective with its meaning.', pairs: [
            ['umweltfreundlich', 'schadet der Natur wenig'],
            ['zeitaufwendig', 'kostet viel Zeit'],
            ['flexibel', 'man kann den Plan leicht ändern'],
            ['erschwinglich', 'nicht zu teuer'],
            ['überfüllt', 'es sind viel zu viele Menschen da'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: '___ zum Flugzeug ist der Zug viel umweltfreundlicher.', o: ['Im Vergleich', 'Zwar', 'Je'], why: '*im Vergleich zu* + Dativ: *zum Flugzeug* is *zu dem Flugzeug*.' },
            { q: 'Der Fernbus ist ___ billig, aber die Fahrt dauert zwölf Stunden.', o: ['zwar', 'je', 'während'], why: '*zwar … aber*: you admit a good point, then give a stronger one.' },
            { q: '___ man mit dem Auto flexibel ist, muss man im Zug auf den Fahrplan achten.', o: ['Während', 'Zwar', 'Desto'], why: '*während* contrasts two facts. It starts a subordinate clause, so *ist* goes to the end.' },
            { q: 'Einerseits ist das Fahrrad gesund, ___ kommt man nur langsam voran.', o: ['andererseits', 'zwar', 'während'], why: '*einerseits … andererseits* shows two sides. *andererseits* takes the first place, so the verb follows.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the comparative.', items: [
            { q: 'Je länger die Reise dauert, desto ___ wird sie. (teuer)', a: ['teurer'], why: '*teuer* loses its *e* in the comparative: *teurer*.' },
            { q: 'Je ___ man plant, desto entspannter ist man unterwegs. (gut)', a: ['besser'], why: 'Irregular: *gut, besser, am besten*.' },
            { q: 'Je mehr Gepäck ich habe, desto ___ nehme ich das Auto. (gern)', a: ['lieber'], why: 'Irregular: *gern, lieber, am liebsten*.' },
            { q: 'Der Fernbus ist deutlich ___ als der Schnellzug. (günstig)', a: ['günstiger', 'guenstiger'], why: '*deutlich* + comparative shows a big difference: *deutlich günstiger als*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Je länger ich unterwegs bin, desto entspannter werde ich.', why: 'In the *je* clause the verb *bin* goes to the end. After *desto entspannter* comes the verb, then the subject.' },
            { a: 'Der Zug ist zwar langsamer, aber viel bequemer.', why: '*zwar* comes after the verb; *aber* introduces the stronger point.' },
            { a: 'Im Vergleich zum Auto ist der Bus günstiger.', why: 'The whole phrase *im Vergleich zum Auto* takes the first place, so the verb *ist* comes next.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Living like a local',
      about: 'Markets, neighbourhoods and daily routines, and how to talk about getting used to them.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'dialogue', title: 'Auf dem Wochenmarkt', lines: [
            { who: 'Amira', s: 'Guten Morgen! Was ist denn gerade Saison?' },
            { who: 'Herr Vogt', s: 'Im Juni vor allem Erdbeeren und Spargel. Alles aus der Region, höchstens zwanzig Kilometer von hier.' },
            { who: 'Amira', s: 'Dann nehme ich ein Pfund Erdbeeren. Ich wohne nur eine Woche hier im Viertel, aber ich möchte nicht jeden Tag im Restaurant essen.' },
            { who: 'Herr Vogt', s: 'Da haben Sie recht. Kommen Sie doch am Samstag wieder, dann ist der Markt doppelt so groß.' },
            { who: 'Amira', s: 'Gern. Und wo trinken die Leute hier ihren Kaffee? Ich suche kein Touristencafé.' },
            { who: 'Herr Vogt', s: 'Gehen Sie in die kleine Bäckerei an der Ecke. Da sitzen morgens immer dieselben Stammgäste und lesen Zeitung.' },
            { who: 'Amira', s: 'Das klingt perfekt. Ich gewöhne mich schon an den langsamen Rhythmus hier.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Germany most shops are closed on Sundays. Bakeries are often open for a few hours in the morning. *Ein Pfund* means 500 grams; you hear it at markets all the time.' },
        ],
        [
          { t: 'table', caption: 'Local life', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['der Wochenmarkt', 'a market held on fixed days each week'],
            ['das Viertel / der Kiez', 'a neighbourhood; *Kiez* is used mainly in Berlin'],
            ['der Stammgast', 'a regular customer'],
            ['regional / saisonal', 'from the area / in season'],
            ['der Feierabend', 'the end of the working day, and the free time after it'],
            ['die Ferienwohnung', 'a holiday flat'],
            ['sich einleben', 'to settle in'],
          ] },
          { t: 'text', md: 'To talk about new habits, use *sich gewöhnen an* + **Akkusativ**: *Ich gewöhne mich an den Rhythmus.* If a whole clause follows, use *daran*: *Ich habe mich **daran** gewöhnt, früh zu essen.* For local customs, *es ist üblich, … zu* + infinitive is very common: *Hier ist es üblich, sonntags spazieren zu gehen.*' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the market dialogue. True or false?', items: [
            { q: 'Amira kauft Obst aus der Region.', a: 't', why: '*Alles aus der Region, höchstens zwanzig Kilometer von hier.*' },
            { q: 'Am Samstag ist der Markt kleiner.', a: 'f', why: '*Dann ist der Markt doppelt so groß.*' },
            { q: 'Herr Vogt empfiehlt ein Café für Touristen.', a: 'f', why: 'He recommends a small bakery where regulars sit: *Stammgäste*.' },
            { q: 'Amira bleibt einen Monat im Viertel.', a: 'f', why: '*Ich wohne nur eine Woche hier im Viertel.*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Jeden Samstag kaufe ich Gemüse auf dem ___.', o: ['Wochenmarkt', 'Feierabend', 'Stammgast'], why: 'You buy vegetables at a market: *der Wochenmarkt*.' },
            { q: 'Um 18 Uhr hat sie ___ und geht mit Kollegen in den Biergarten.', o: ['Feierabend', 'Stammgast', 'Wochenmarkt'], why: '*Feierabend haben*: work is over for the day.' },
            { q: 'Herr Oğuz kommt seit zehn Jahren jeden Morgen in dieses Café. Er ist ein ___.', o: ['Stammgast', 'Feierabend', 'Kiez'], why: 'Someone who always comes back to the same place is a *Stammgast*.' },
            { q: 'Im Winter gibt es hier keine Erdbeeren. Wir verkaufen nur ___ Obst.', o: ['saisonales', 'schnelles', 'städtisches'], why: '*saisonal*: fruit that grows at this time of year.' },
            { q: 'Statt im Hotel wohnen wir in einer ___ mitten im Altbauviertel.', o: ['Ferienwohnung', 'Feierabend', 'Stammgast'], why: 'A flat you rent for your holiday: *die Ferienwohnung*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences about new habits.', items: [
            { q: 'Nach drei Tagen habe ich mich an das frühe Aufstehen ___. (gewöhnen)', a: ['gewöhnt', 'gewoehnt'], why: 'Perfekt of the reflexive verb: *ich habe mich … gewöhnt*.' },
            { q: 'Ich gewöhne mich langsam an ___ Rhythmus der Stadt. (der)', a: ['den'], why: '*sich gewöhnen an* + Akkusativ: *den Rhythmus*.' },
            { q: 'Hast du dich schon ___ gewöhnt, dass die Läden sonntags geschlossen sind? (da + an)', a: ['daran'], why: 'A clause follows, so you use *daran*.' },
            { q: 'Hier ist es üblich, sonntags gemeinsam ___ frühstücken.', a: ['zu'], why: '*es ist üblich, … zu* + infinitive.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Ich habe mich an das Viertel gewöhnt.', why: 'The reflexive pronoun *mich* comes right after the verb *habe*; *gewöhnt* goes to the end.' },
            { a: 'Daran muss ich mich erst gewöhnen.', why: '*Daran* takes the first place, then the verb *muss*; the infinitive goes to the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'The art of slow travel',
      about: 'Read an essay about travelling slowly and understand its arguments.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Die Kunst des langsamen Reisens', md: 'Wer zum ersten Mal nach Lissabon, Krakau oder Palermo fährt, will oft alles auf einmal sehen. Drei Städte in fünf Tagen, zwanzig Sehenswürdigkeiten, abends müde ins Hotelbett. Am Ende hat man viele Fotos, aber kaum Erinnerungen an echte Begegnungen. Genau dagegen richtet sich die Idee des langsamen Reisens.\n\nSlow Travel bedeutet nicht, dass man nur noch zu Fuß unterwegs ist. Es geht vielmehr um eine Haltung: weniger Orte, dafür mehr Zeit an jedem einzelnen. Wer zwei Wochen in einem Viertel bleibt, kauft irgendwann beim selben Bäcker ein, findet den Weg zum Markt ohne Karte und wird im Café mit Namen begrüßt. Aus dem Touristen wird für kurze Zeit ein Nachbar.\n\nAuch die Anreise gehört dazu. Viele langsame Reisende nehmen lieber den Zug oder den Bus als das Flugzeug. Zwar dauert die Fahrt länger, aber sie ist nicht nur ein lästiger Weg zum Ziel, sondern schon ein Teil der Reise. Man sieht, wie sich die Landschaft verändert, und kommt innerlich langsamer an.\n\nNatürlich hat dieser Stil auch Grenzen. Nicht jeder kann sich drei Wochen Urlaub am Stück leisten, und wer nur ein langes Wochenende hat, wird kaum zum Nachbarn. Kritiker meinen außerdem, Slow Travel sei vor allem etwas für Menschen mit viel Zeit und flexiblen Jobs.\n\nTrotzdem lohnt es sich, einen Gedanken mitzunehmen: Je weniger man plant, desto mehr Raum bleibt für Zufälle. Vielleicht ist der schönste Moment einer Reise nicht der Blick vom berühmten Aussichtspunkt, sondern das Gespräch mit der Frau vom Gemüsestand, die einem verrät, wo es den besten Fisch der Stadt gibt.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Slow Travel bedeutet, dass man nur zu Fuß reist.', a: 'f', why: '*Slow Travel bedeutet nicht, dass man nur noch zu Fuß unterwegs ist.*' },
            { q: 'Langsame Reisende besuchen weniger Orte und bleiben dafür länger.', a: 't', why: '*weniger Orte, dafür mehr Zeit an jedem einzelnen*' },
            { q: 'Laut Text ist die Anreise nur ein lästiger Weg zum Ziel.', a: 'f', why: 'The text says the journey is *nicht nur ein lästiger Weg zum Ziel, sondern schon ein Teil der Reise*.' },
            { q: 'Slow Travel ist billiger als normales Reisen.', a: 'ng', why: 'The text does not compare the costs.' },
            { q: 'Laut den Kritikern ist Slow Travel vor allem etwas für Menschen mit viel Zeit.', a: 't', why: '*Kritiker meinen außerdem, Slow Travel sei vor allem etwas für Menschen mit viel Zeit und flexiblen Jobs.*' },
            { q: 'Der Text empfiehlt, jede Stunde der Reise genau zu planen.', a: 'f', why: '*Je weniger man plant, desto mehr Raum bleibt für Zufälle.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the meaning and the language of the essay.', items: [
            { q: '„Aus dem Touristen wird für kurze Zeit ein Nachbar.“ Was bedeutet das?', o: ['Der Reisende fühlt sich eine Zeit lang wie jemand, der dort wohnt.', 'Der Reisende zieht für immer in das Viertel.', 'Der Reisende lernt seine Nachbarn zu Hause besser kennen.'], why: '*für kurze Zeit*: only for a while does the traveller live like a local.' },
            { q: '„Zwar dauert die Fahrt länger, aber …“: Was macht der Satz?', o: ['Er gibt einen Nachteil zu und nennt dann einen Vorteil.', 'Er nennt zwei Vorteile.', 'Er beschreibt eine zeitliche Reihenfolge.'], why: '*zwar* admits a point (it takes longer), *aber* gives the stronger one.' },
            { q: '„Je weniger man plant, desto mehr Raum bleibt für Zufälle.“ Welcher Satz bedeutet dasselbe?', o: ['Wer weniger plant, erlebt mehr Unerwartetes.', 'Wer mehr plant, erlebt mehr Zufälle.', 'Man sollte überhaupt nicht planen.'], why: '*je weniger … desto mehr*: less planning, more chance events.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '___ zum Bus ist der Zug deutlich bequemer.', o: ['Im Vergleich', 'Je', 'Zwar'], why: '*im Vergleich zu* + Dativ: *zum Bus*.' },
      { q: 'Je mehr ich von der Stadt sehe, ___ besser gefällt sie mir.', o: ['desto', 'als', 'wie'], why: '*je … desto*, both with a comparative.' },
      { q: 'Im Herbst kaufe ich Kürbisse direkt vom Bauern auf dem ___.', o: ['Wochenmarkt', 'Stammgast', 'Feierabend'], why: 'Farmers sell at the *Wochenmarkt*.' },
      { q: 'Ich habe mich schnell ___ den Rhythmus der Stadt gewöhnt.', o: ['an', 'auf', 'mit'], why: '*sich gewöhnen an* + Akkusativ.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Je früher man bucht, desto ___ ist das Ticket. (billig)', a: ['billiger'], why: 'Comparative after *desto*: *billiger*.' },
      { q: 'Der Nachtzug ist zwar langsam, ___ man spart eine Hotelnacht.', a: ['aber'], why: '*zwar … aber*.' },
      { q: 'Hast du dich schon ___ gewöhnt, früh zu Abend zu essen? (da + an)', a: ['daran'], why: 'A clause follows, so *daran*.' },
      { q: 'Einerseits ist Fliegen schnell, ___ ist es schlecht für das Klima.', a: ['andererseits'], why: '*einerseits … andererseits* shows two sides.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
      ['zeitaufwendig', 'kostet viel Zeit'],
      ['der Stammgast', 'kommt immer wieder ins selbe Lokal'],
      ['saisonal', 'passend zur Jahreszeit'],
      ['der Feierabend', 'die freie Zeit nach der Arbeit'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Je länger ich bleibe, desto mehr Leute kenne ich.', why: '*bleibe* at the end of the *je* clause; after *desto mehr Leute* comes the verb.' },
      { a: 'Daran habe ich mich schnell gewöhnt.', why: '*Daran* first, then *habe*; *gewöhnt* at the end.' },
    ] },
  ],
};
