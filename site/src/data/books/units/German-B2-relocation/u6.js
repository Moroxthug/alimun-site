// German B2 for moving abroad, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Culture and belonging',
  goal: 'Talk about regional differences, humour and what it means to feel at home.',
  art: 'dragon',
  tags: { skills: ['reading', 'vocabulary', 'speaking'], topics: ['regional-variation', 'greetings', 'austrian-swiss-german', 'place-adjectives', 'idioms', 'set-phrases', 'belonging'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Regions, dialects and greetings',
      about: 'How German changes across Germany, Austria and Switzerland.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'German is spoken in Germany, Austria, Switzerland and Liechtenstein, and also in parts of other countries, such as Luxembourg, Belgium and South Tyrol in Italy. Standard German (*Hochdeutsch*) is understood everywhere, but everyday speech varies a lot. In German-speaking Switzerland, people speak Swiss German dialects in everyday life and write Standard German; Swiss Standard German uses *ss* instead of *ß*.\n\nThe first thing you notice is often the greeting.' },
          { t: 'table', caption: 'Greetings across the regions', explain: ['head', 'col1', 'col2'], quiz: true, head: ['Greeting', 'Where you hear it', 'Use'], rows: [
            ['Moin', 'northern Germany', 'hello, at any time of day'],
            ['Grüß Gott', 'southern Germany and Austria', 'hello, often polite'],
            ['Servus', 'Bavaria and Austria', 'hello or goodbye, informal'],
            ['Grüezi', 'German-speaking Switzerland', 'hello, polite'],
            ['Tschüss', 'most of Germany', 'goodbye, informal'],
            ['Ade', 'south-west Germany and Switzerland', 'goodbye'],
          ] },
        ],
        [
          { t: 'text', md: 'Many everyday words are different in Austria and Switzerland. They are not mistakes: they are the standard language there, and you will see them on menus, in shops and in the news.' },
          { t: 'table', caption: 'Same thing, different word', explain: ['head'], quiz: true, head: ['Germany', 'Austria', 'Switzerland'], rows: [
            ['der Januar', 'der Jänner', 'der Januar'],
            ['die Kartoffel', 'der Erdapfel', 'die Kartoffel'],
            ['die Tomate', 'der Paradeiser', 'die Tomate'],
            ['das Brötchen', 'die Semmel', 'das Brötchen, das Weggli'],
            ['die Sahne', 'das Schlagobers', 'der Rahm'],
            ['das Fahrrad', 'das Fahrrad', 'das Velo'],
          ] },
          { t: 'tip', art: 'owl', md: 'Within Germany words differ too: a bread roll is a *Brötchen*, a *Semmel* in Bavaria, a *Schrippe* in Berlin and a *Weckle* in Swabia. Nobody expects you to speak a dialect. If you do not understand, you can always ask: *Könnten Sie das bitte noch einmal auf Hochdeutsch sagen?*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Where are you, and what do you hear?', items: [
            { q: 'Sie betreten morgens in Hamburg eine Bäckerei. Die Verkäuferin sagt: ___', o: ['Moin!', 'Grüezi!', 'Servus!'], why: '*Moin* is the typical greeting in northern Germany, at any time of day.' },
            { q: 'Sie sind in Zürich in einem Geschäft. Der Verkäufer sagt: ___', o: ['Grüezi!', 'Moin!', 'Servus!'], why: '*Grüezi* is the polite greeting in German-speaking Switzerland.' },
            { q: 'In einem Wiener Café bestellen Sie einen Kaffee mit ___.', o: ['Schlagobers', 'Velo', 'Weggli'], why: 'In Austria cream is *Schlagobers*. *Velo* and *Weggli* are Swiss words for other things.' },
            { q: 'Eine Österreicherin sagt: „Im ___ fahren wir immer Ski.“', o: ['Jänner', 'Velo', 'Paradeiser'], why: '*Jänner* is the Austrian word for January.' },
            { q: 'In Bern fahren viele Leute mit dem ___ zur Arbeit.', o: ['Velo', 'Erdapfel', 'Schlagobers'], why: '*das Velo* is the Swiss word for *das Fahrrad*.' },
          ] },
        ],
        [
          { t: 'text', md: 'Adjectives made from city names, and from *Schweiz*, end in **-er**. They never change their ending and are written with a capital letter: *die Wiener Kaffeehäuser, im Hamburger Hafen, der Schweizer Käse*. Most other adjectives from places are written with a small letter and take normal endings: *die bayerische Küche, das österreichische Deutsch*.' },
          { t: 'ex', kind: 'gap', h: 'Write the adjective.', items: [
            { q: 'Wir haben im ___ Hafen eine Rundfahrt gemacht. (Hamburg)', a: ['Hamburger'], why: 'City adjective in *-er*: no extra ending, capital letter.' },
            { q: 'Die ___ Kaffeehäuser sind weltberühmt. (Wien)', a: ['Wiener'], why: '*Wiener* stays the same before every noun.' },
            { q: 'Er hat lange bei einer ___ Bank gearbeitet. (die Schweiz)', a: ['Schweizer'], why: '*Schweizer* behaves like a city adjective: no extra ending.' },
            { q: 'Sie kocht gern Gerichte aus der ___ Küche. (Bayern)', a: ['bayerischen', 'bayrischen'], why: 'A normal adjective: small letter, ending *-en* after *der* in the Dativ.' },
            { q: 'Wir treffen uns am ___ Hauptbahnhof. (Köln)', a: ['Kölner'], why: 'City adjective: *Kölner*, no extra ending.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word used in Germany with the Austrian word.', pairs: [
            ['der Januar', 'der Jänner'],
            ['die Tomate', 'der Paradeiser'],
            ['die Kartoffel', 'der Erdapfel'],
            ['die Sahne', 'das Schlagobers'],
            ['das Brötchen', 'die Semmel'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Idioms and set phrases',
      about: 'The idioms and fixed phrases you hear every day.',
      art: 'monster',
      spreads: [
        [
          { t: 'text', md: 'German speakers use many idioms (*Redewendungen*). You do not have to use them yourself, but you should understand them. Learn each one as a whole phrase: the words often have nothing to do with the meaning.' },
          { t: 'table', caption: 'Common idioms', explain: ['head', 'col1'], quiz: true, head: ['Idiom', 'Meaning'], rows: [
            ['Ich verstehe nur Bahnhof.', 'I do not understand anything.'],
            ['jemandem die Daumen drücken', 'to wish someone luck'],
            ['Schwein haben', 'to be lucky'],
            ['die Nase voll haben', 'to be tired of something'],
            ['Das ist nicht mein Bier.', 'That is not my business.'],
            ['auf dem Holzweg sein', 'to be wrong about something'],
            ['ins Fettnäpfchen treten', 'to say or do something embarrassing by accident'],
            ['Tomaten auf den Augen haben', 'not to see something obvious'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'In der Mittagspause', lines: [
            { who: 'Lena', s: 'Mahlzeit! Na, wie war dein Termin bei der Ausländerbehörde?' },
            { who: 'Arjun', s: 'Frag lieber nicht. Die Sachbearbeiterin hat so schnell gesprochen, ich habe nur Bahnhof verstanden.' },
            { who: 'Lena', s: 'Oje. Und hat am Ende trotzdem alles geklappt?' },
            { who: 'Arjun', s: 'Ja, zum Glück. Ich hatte Schwein: Eine Frau im Wartebereich hat für mich übersetzt.' },
            { who: 'Lena', s: 'Na also! Und morgen hast du dein Vorstellungsgespräch, oder? Ich drücke dir die Daumen.' },
            { who: 'Arjun', s: 'Danke! Ehrlich gesagt habe ich langsam die Nase voll von Terminen.' },
            { who: 'Lena', s: 'Das glaube ich dir. Aber danach hast du erst mal Ruhe. Schönen Feierabend nachher!' },
          ] },
          { t: 'table', caption: 'Set phrases for everyday situations', explain: ['head', 'col0'], head: ['Situation', 'Phrase'], rows: [
            ['At lunchtime at work', 'Mahlzeit!'],
            ['Someone sneezes', 'Gesundheit!'],
            ['Someone is ill', 'Gute Besserung!'],
            ['Someone leaves work', 'Schönen Feierabend!'],
            ['Before you drink together', 'Prost! / Zum Wohl!'],
            ['Someone has an exam', 'Viel Erfolg! / Ich drücke dir die Daumen!'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Complete the idiom.', items: [
            { q: 'Der Arzt erklärt alles mit Fachwörtern. Ich verstehe nur ___.', o: ['Bahnhof', 'Zug', 'Haltestelle'], why: '*Ich verstehe nur Bahnhof*: I do not understand anything.' },
            { q: 'Ich habe den letzten Bus gerade noch erreicht. Da habe ich ___ gehabt.', o: ['Schwein', 'Hund', 'Katze'], why: '*Schwein haben*: to be lucky.' },
            { q: 'Du hast morgen deine Prüfung? Ich ___ dir die Daumen!', o: ['drücke', 'schlage', 'gebe'], why: '*jemandem die Daumen drücken*: to wish someone luck.' },
            { q: 'Seit Wochen Baustelle vor dem Haus! Ich habe wirklich die Nase ___.', o: ['voll', 'hoch', 'frei'], why: '*die Nase voll haben*: to be tired of something.' },
            { q: 'Er glaubt, die Steuererklärung bringt nie etwas. Da ist er auf dem ___.', o: ['Holzweg', 'Waldweg', 'Heimweg'], why: '*auf dem Holzweg sein*: to be wrong.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the idioms.', items: [
            { q: 'Ich habe meine Chefin aus Versehen geduzt. Da bin ich ins ___ getreten.', a: ['Fettnäpfchen'], why: '*ins Fettnäpfchen treten*: to do something embarrassing by accident, here using *du* with the boss.' },
            { q: 'Der Schlüssel liegt direkt vor dir! Hast du Tomaten auf den ___?', a: ['Augen'], why: '*Tomaten auf den Augen haben*: not to see something obvious.' },
            { q: 'Was die Nachbarn in ihrem Garten machen, ist nicht mein ___.', a: ['Bier'], why: '*Das ist nicht mein Bier*: that is not my business.' },
            { q: 'Ich habe ___ gehabt: Der Zug hatte Verspätung, und ich habe ihn noch bekommen.', a: ['Schwein', 'Glück'], why: '*Schwein haben* (informal) or *Glück haben*: to be lucky.' },
          ] },
          { t: 'ex', kind: 'match', h: 'What do you say?', pairs: [
            ['Ihre Kollegin niest.', 'Gesundheit!'],
            ['Ein Freund ist krank.', 'Gute Besserung!'],
            ['Mittags in der Kantine', 'Mahlzeit!'],
            ['Ihr Kollege geht nach Hause.', 'Schönen Feierabend!'],
            ['Sie stoßen mit Gläsern an.', 'Prost!'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Feeling at home',
      about: 'Read how three newcomers came to feel at home.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Wann fühlt man sich angekommen? Drei Zugezogene erzählen', md: '**Joana, 34, Pflegefachfrau aus Portugal, lebt in Freiburg:** „Am Anfang war ich ziemlich einsam. Die Leute waren höflich, aber auch etwas distanziert, und ich hatte das Gefühl, dass Freundschaften hier langsam entstehen. Der Wendepunkt kam, als mich eine Kollegin in ihren Chor mitgenommen hat. Seitdem singe ich jeden Mittwoch, und nach der Probe gehen wir oft noch etwas trinken. Inzwischen verstehe ich sogar ein paar Wörter Alemannisch. Wenn mich jemand auf der Straße mit ‚Ade‘ verabschiedet, muss ich lächeln.“\n\n**Daniel, 41, Softwareentwickler aus Kenia, lebt in Hannover:** „Für mich war die Sprache der Schlüssel. Zuerst habe ich bei der Arbeit nur Englisch gesprochen, und das war bequem. Aber ich habe gemerkt, dass ich bei den Gesprächen in der Kaffeeküche nie richtig dabei war. Als ich zum ersten Mal einen Witz auf Deutsch verstanden und darüber gelacht habe, war das ein großer Moment. Heute engagiere ich mich in einem Nachbarschaftsverein und helfe anderen Neuen bei Briefen von Behörden.“\n\n**Mei, 29, Doktorandin aus Taiwan, lebt in Graz:** „Ich dachte immer, Heimat sei ein Ort. Heute glaube ich, dass es eher Menschen und Gewohnheiten sind. Ich habe meinen Lieblingsplatz im Park, meine Bäckerei, in der man schon weiß, welche Semmel ich nehme, und Freunde, mit denen ich sonntags wandern gehe. Das österreichische Deutsch hat mich anfangs verwirrt, weil ich in meinem Kurs ganz andere Wörter gelernt hatte. Aber genau diese kleinen Unterschiede mag ich inzwischen sehr. Wenn ich nach einer Reise am Grazer Bahnhof ankomme, denke ich: Jetzt bin ich zu Hause.“' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Joana fand es am Anfang leicht, Freunde zu finden.', a: 'f', why: '*Am Anfang war ich ziemlich einsam.*' },
            { q: 'Joana singt jede Woche in einem Chor.', a: 't', why: '*Seitdem singe ich jeden Mittwoch.*' },
            { q: 'Daniel hat bei der Arbeit von Anfang an Deutsch gesprochen.', a: 'f', why: '*Zuerst habe ich bei der Arbeit nur Englisch gesprochen.*' },
            { q: 'Daniel hilft anderen Zugezogenen bei Briefen von Behörden.', a: 't', why: '*helfe anderen Neuen bei Briefen von Behörden*' },
            { q: 'Für Mei ist Heimat vor allem ein bestimmter Ort.', a: 'f', why: 'She now thinks home is *eher Menschen und Gewohnheiten*.' },
            { q: 'Mei hat ihren Deutschkurs in Österreich gemacht.', a: 'ng', why: 'She says she learned other words in her course, but not where the course was.' },
            { q: 'Daniel möchte bald nach Kenia zurückgehen.', a: 'ng', why: 'The text says nothing about his plans.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Was war für Daniel „ein großer Moment“?', o: ['Er hat zum ersten Mal einen Witz auf Deutsch verstanden.', 'Er hat seinen ersten Job in Deutschland bekommen.', 'Er ist in einen Nachbarschaftsverein eingetreten.'], why: '*Als ich zum ersten Mal einen Witz auf Deutsch verstanden … habe, war das ein großer Moment.*' },
            { q: 'Was meint Joana mit „Wendepunkt“?', o: ['den Moment, in dem sich etwas Wichtiges verändert hat', 'den Ort, an dem der Chor probt', 'das Ende ihrer Arbeitszeit'], why: 'A *Wendepunkt* is a turning point: after it, things changed.' },
            { q: 'Welches Wort in Meis Text ist typisch österreichisch?', o: ['Semmel', 'Bäckerei', 'Bahnhof'], why: '*die Semmel* is the Austrian and Bavarian word for a bread roll.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Welchen Gruß hört man vor allem in Norddeutschland?', o: ['Moin', 'Grüezi', 'Servus'], why: '*Moin* is typical of northern Germany.' },
      { q: 'In Österreich heißt die Tomate ___.', o: ['Paradeiser', 'Erdapfel', 'Weggli'], why: '*der Paradeiser*; *Erdapfel* is a potato.' },
      { q: 'Ich verstehe kein Wort. Ich verstehe nur ___.', o: ['Bahnhof', 'Bier', 'Holzweg'], why: '*Ich verstehe nur Bahnhof*.' },
      { q: 'Wir haben die ___ Altstadt besichtigt. (Bern)', o: ['Berner', 'Bernerin', 'Berne'], why: 'City adjective in *-er*, capital letter, no extra ending.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Viel Glück morgen! Ich drücke dir die ___.', a: ['Daumen'], why: '*jemandem die Daumen drücken*.' },
      { q: 'Ich habe genug von dem Lärm. Ich habe die Nase ___.', a: ['voll'], why: '*die Nase voll haben*.' },
      { q: 'In der Schweiz fährt man ___ statt Fahrrad.', a: ['Velo'], why: 'Swiss Standard German: *das Velo*.' },
      { q: 'Dein Kollege ist krank? Sag ihm gute ___!', a: ['Besserung'], why: '*Gute Besserung!*: get well soon.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the idiom and its meaning.', pairs: [
      ['Schwein haben', 'Glück haben'],
      ['auf dem Holzweg sein', 'sich irren'],
      ['ins Fettnäpfchen treten', 'aus Versehen etwas Peinliches sagen oder tun'],
      ['Das ist nicht mein Bier.', 'Das geht mich nichts an.'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentence.', items: [
      { a: 'Ich drücke dir die Daumen!', why: '*drücke* in second place, *dir* (Dativ) before *die Daumen*.' },
    ] },
  ],
};
