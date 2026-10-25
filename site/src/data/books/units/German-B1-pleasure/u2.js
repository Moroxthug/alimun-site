// German B1 for travel, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Meeting people',
  goal: 'Start conversations with locals and other travellers.',
  art: 'dog',
  tags: { skills: ['speaking', 'reading', 'vocabulary', 'grammar'], topics: ['small-talk', 'du-sie', 'dass-saetze', 'zu-infinitiv', 'culture'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Starting a conversation',
      about: 'Open a conversation, keep it going and end it in a friendly way.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Small, easy questions start a conversation: about the place, the weather or the trip. Among travellers, especially in hostels, people often use *du* from the start. With older people, or when you are not sure, use *Sie*.' },
          { t: 'examples', items: [
            { s: 'Entschuldigung, ist hier noch **frei**?', n: 'On a train, in a café or in a beer garden: is this seat free?' },
            { s: 'Bist du auch **zum ersten Mal** in Dresden?', n: 'A friendly question about the place.' },
            { s: 'Was für ein Wetter heute, **oder**?', n: '*oder?* at the end invites the other person to agree.' },
            { s: 'Woher kommst du **denn**?', n: '*denn* makes a question sound interested and friendly.' },
          ] },
          { t: 'tip', art: 'owl', md: '*Sollen wir uns duzen?* asks if you can both use *du*. Usually the older person, or the local, offers it first.' },
        ],
        [
          { t: 'text', md: 'To keep a conversation going, **react** to what you hear and ask a **follow-up question**.' },
          { t: 'table', caption: 'Keeping a conversation going', explain: ['head', 'col1'], quiz: true, head: ['German', 'When you use it'], rows: [
            ['Ach, wirklich?', 'you are surprised'],
            ['Das klingt spannend!', 'something sounds interesting'],
            ['Und wie war das?', 'you want to hear more'],
            ['Wie meinst du das?', 'you did not understand the idea'],
            ['Ich auch!', 'it is the same for you'],
            ['Es war schön, dich kennenzulernen.', 'you end the conversation'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'In the hostel kitchen', lines: [
            { who: 'Felix', s: 'Hi! Ist das dein Curry? Das riecht super.' },
            { who: 'Amara', s: 'Danke! Ich koche heute für mich und meine Freundin. Bist du auch gerade angekommen?' },
            { who: 'Felix', s: 'Nein, ich bin schon seit drei Tagen in Dresden. Ich mache eine Radtour an der Elbe entlang.' },
            { who: 'Amara', s: 'Ach, wirklich? Das klingt spannend! Wie weit fährst du denn?' },
            { who: 'Felix', s: 'Bis Hamburg, wenn alles klappt. Und woher kommst du?' },
            { who: 'Amara', s: 'Aus Nairobi. Ich mache gerade ein Praktikum in Berlin und reise am Wochenende ein bisschen.' },
            { who: 'Felix', s: 'Cool. Wir gehen heute Abend mit ein paar Leuten aus dem Hostel an die Elbe. Habt ihr Lust mitzukommen?' },
            { who: 'Amara', s: 'Gern! Wann geht ihr los?' },
            { who: 'Felix', s: 'So um acht. Wir treffen uns hier in der Küche.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Felix ist heute angekommen.', a: 'f', why: 'He has been in Dresden *seit drei Tagen*.' },
            { q: 'Felix reist mit dem Fahrrad.', a: 't', why: '*Ich mache eine Radtour an der Elbe entlang.*' },
            { q: 'Amara wohnt zurzeit in Deutschland.', a: 't', why: 'She is doing an internship in Berlin.' },
            { q: 'Felix lädt nur Amara ein, nicht ihre Freundin.', a: 'f', why: '*Habt ihr Lust …?* With *ihr* he asks both of them.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best words.', items: [
            { q: 'Ich war letztes Jahr drei Monate in Peru. – ___', o: ['Ach, wirklich? Und wie war das?', 'Ich nicht. Tschüss.', 'Wie meinst du das?'], why: 'React with interest and ask a follow-up question.' },
            { q: 'Im Zug, vor einem leeren Platz: ___', o: ['Entschuldigung, ist hier noch frei?', 'Entschuldigung, bist du noch frei?', 'Entschuldigung, sind Sie frei hier?'], why: 'You ask if the **seat** is free: *Ist hier noch frei?*' },
            { q: 'Am Ende des Abends: ___', o: ['Es war schön, dich kennenzulernen.', 'Es war schön, dich zu kennenlernen.', 'Es ist schön, dich kennengelernt.'], why: '*kennenlernen* is separable: *zu* goes in the middle, *kennenzulernen*.' },
            { q: 'Woher kommst du ___?', o: ['denn', 'ja', 'doch'], why: '*denn* in a question shows interest.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Hast du Lust, mit uns ins Konzert ___? (mitkommen)', a: ['mitzukommen'], why: 'After *Lust haben* comes *zu* + infinitive. In a separable verb, *zu* goes in the middle.' },
            { q: 'Wir sind ungefähr gleich alt. Sollen wir uns ___? (use du)', a: ['duzen'], why: '*sich duzen*: to say *du* to each other. *sich siezen*: to say *Sie*.' },
            { q: 'Es war schön, Sie ___. (kennenlernen)', a: ['kennenzulernen'], why: '*zu* + infinitive, in the middle of the separable verb.' },
            { q: 'Bist du auch ___ ersten Mal hier?', a: ['zum'], why: '*zum ersten Mal*: for the first time.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Your country and theirs',
      about: 'Talk about life in your country and ask about other countries.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'To describe what people do in your country, use *man* or *bei uns*. To say what is normal, use *Es ist üblich, dass …*. After *dass*, the verb goes to the **end**.' },
          { t: 'examples', items: [
            { s: '**Bei uns** isst man erst sehr spät zu Abend.', n: '*bei uns*: in my country or my region.' },
            { s: 'In Brasilien ist es üblich, dass man sich mit Küsschen **begrüßt**.', n: 'After *dass*, the verb *begrüßt* goes to the end.' },
            { s: 'Das ist **ähnlich wie** in Deutschland.', n: '*ähnlich wie*: similar to.' },
            { s: 'Bei uns ist das ganz **anders als** hier.', n: '*anders als*: different from.' },
            { s: 'Wie ist das **eigentlich** bei euch?', n: 'Ask back. *eigentlich* makes the question sound curious and casual.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Talk about your own experience rather than making big statements about a whole country. *In meiner Familie …* or *Ich habe den Eindruck, dass …* sounds open and friendly.' },
        ],
        [
          { t: 'dialogue', title: 'On the train', lines: [
            { who: 'Frau Weber', s: 'Sie haben einen schönen Akzent. Woher kommen Sie, wenn ich fragen darf?' },
            { who: 'Paulo', s: 'Aus Brasilien, aus Recife. Das liegt im Nordosten, direkt am Meer.' },
            { who: 'Frau Weber', s: 'Oh, da ist es sicher immer warm! Was vermissen Sie hier am meisten?' },
            { who: 'Paulo', s: 'Das Essen und die Sonne natürlich. Und bei uns ist es üblich, dass man Freunde ganz spontan besucht. Hier macht man immer zuerst einen Termin aus.' },
            { who: 'Frau Weber', s: 'Das stimmt, wir planen gern. Und was gefällt Ihnen hier?' },
            { who: 'Paulo', s: 'Dass man fast überall mit dem Zug hinkommt. Und die vielen Seen! Wie ist das eigentlich bei Ihnen in der Gegend?' },
            { who: 'Frau Weber', s: 'Ich wohne am Chiemsee. Im Sommer schwimme ich fast jeden Tag.' },
          ] },
          { t: 'text', md: 'Paulo asks *bei Ihnen*, because he says *Sie* to Frau Weber. With a person you call *du*, ask *bei dir*. About a whole group or country, ask *bei euch*.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Recife liegt am Meer.', a: 't', why: '*direkt am Meer*.' },
            { q: 'Paulo vermisst die Sonne.', a: 't', why: '*Das Essen und die Sonne natürlich.*' },
            { q: 'Paulo findet das Reisen mit dem Zug in Deutschland schlecht.', a: 'f', why: 'He likes it: *Dass man fast überall mit dem Zug hinkommt.*' },
            { q: 'Frau Weber wohnt in einer Großstadt.', a: 'f', why: 'She lives by a lake, the Chiemsee.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with the verb at the end.', items: [
            { q: 'Bei uns ist es üblich, dass man zu Hause die Schuhe ___. (ausziehen)', a: ['auszieht'], why: 'After *dass*, the separable verb comes together at the end: *auszieht*.' },
            { q: 'Ich habe den Eindruck, dass die Leute hier sehr pünktlich ___. (sein)', a: ['sind'], why: '*die Leute* is plural: *sind*, at the end.' },
            { q: 'Mir gefällt, dass man hier überall Rad fahren ___. (können)', a: ['kann'], why: 'With a modal verb, the modal goes last: *fahren kann*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Es ist üblich, dass man Trinkgeld gibt.', why: '*dass* sends the verb *gibt* to the end.' },
            { a: 'Ich habe den Eindruck, dass alle sehr pünktlich sind.', why: 'Main clause, comma, then the *dass* clause with *sind* last.' },
            { a: 'Mir gefällt, dass die Städte so grün sind.', why: '*Mir gefällt*: what I like follows in the *dass* clause.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the beginning and the end.', pairs: [
            ['Das ist ähnlich', 'wie in meinem Land.'],
            ['Das ist ganz anders', 'als bei uns.'],
            ['Bei uns ist es üblich,', 'dass man pünktlich ist.'],
            ['Wie ist das eigentlich', 'bei euch in Kanada?'],
            ['Was vermissen Sie', 'hier am meisten?'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: meeting people on the road',
      about: 'Read a blog post with ideas for meeting people while you travel.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Allein reisen, aber nie allein', md: 'Vor drei Jahren bin ich zum ersten Mal allein verreist, drei Wochen durch Deutschland. Ehrlich gesagt hatte ich Angst, dass ich mich einsam fühlen würde. Heute weiß ich: Allein reisen heißt nicht, allein zu sein. Hier sind meine Tipps.\n\nAm leichtesten lernt man Leute im Hostel kennen, besonders in der Gemeinschaftsküche. Wer kocht, kommt schnell ins Gespräch. Ich frage einfach, was die anderen kochen, und oft essen wir am Ende zusammen.\n\nIn vielen Städten gibt es kostenlose Stadtführungen. Am Ende gibt man dem Guide ein Trinkgeld. Die Gruppen sind international, und nach der Tour gehen oft einige zusammen etwas trinken.\n\nMein Lieblingstipp ist ein Sprachcafé. Dort treffen sich Einheimische und Leute aus anderen Ländern, um Sprachen zu üben. In Leipzig habe ich so Jonas kennengelernt. Er wollte Chinesisch lernen, ich wollte mein Deutsch verbessern. Wir schreiben uns heute noch.\n\nUnd wenn ich keine Lust auf Gespräche habe? Dann setze ich mich mit einem Buch in ein Café. Auch das gehört zum Reisen dazu.\n\nEure Mei' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the blog post. True, false or not given?', items: [
            { q: 'Mei hatte vor ihrer ersten Reise keine Sorgen.', a: 'f', why: '*Ehrlich gesagt hatte ich Angst, dass ich mich einsam fühlen würde.*' },
            { q: 'In der Hostelküche kommt man laut Mei leicht ins Gespräch.', a: 't', why: '*Wer kocht, kommt schnell ins Gespräch.*' },
            { q: 'Für die Stadtführungen muss man vorher bezahlen.', a: 'f', why: 'They are *kostenlos*; people give a tip at the end.' },
            { q: 'Jonas kommt aus Leipzig.', a: 'ng', why: 'Mei met him in Leipzig, but the text does not say where he is from.' },
            { q: 'Im Sprachcafé üben die Leute Sprachen.', a: 't', why: '*… um Sprachen zu üben.*' },
            { q: 'Mei und Jonas haben noch Kontakt.', a: 't', why: '*Wir schreiben uns heute noch.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words from the blog and their meaning.', pairs: [
            ['die Gemeinschaftsküche', 'eine Küche für alle Gäste'],
            ['die Einheimischen', 'die Leute, die dort wohnen'],
            ['ins Gespräch kommen', 'anfangen, miteinander zu sprechen'],
            ['sich einsam fühlen', 'sich allein und traurig fühlen'],
            ['kostenlos', 'ohne Geld'],
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the conjugated verb at the end of the subordinate clause.', items: [
            { s: 'Ich frage einfach, was die anderen [kochen].', why: 'An indirect question with *was*: the verb *kochen* goes to the end.' },
            { s: 'Ich hatte Angst, dass ich mich einsam fühlen [würde].', why: 'After *dass* the conjugated verb *würde* is last; *fühlen* is the infinitive.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Entschuldigung, ist hier noch ___?', o: ['frei', 'leer', 'offen'], why: '*Ist hier noch frei?* asks about a free seat.' },
      { q: 'Zu Frau Weber: Wie ist das eigentlich bei ___?', o: ['Ihnen', 'euch', 'dir'], why: 'You say *Sie* to her, so ask *bei Ihnen*.' },
      { q: 'Hast du Lust, heute Abend ___?', o: ['mitzukommen', 'zu mitkommen', 'mitkommen zu'], why: '*zu* goes in the middle of a separable verb.' },
      { q: 'Das ist ganz anders ___ bei uns.', o: ['als', 'wie', 'dass'], why: '*anders als*: different from.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Bei uns ist es üblich, dass man pünktlich ___. (sein)', a: ['ist'], why: 'After *dass*, the verb goes to the end.' },
      { q: 'Es war schön, dich ___. (kennenlernen)', a: ['kennenzulernen'], why: '*zu* + infinitive, in the middle of the separable verb.' },
      { q: 'Woher kommst du ___? (a small word that sounds interested)', a: ['denn'], why: '*denn* makes the question friendly and interested.' },
      { q: 'Am leichtesten lernt man Leute in der ___ kennen. (kitchen for all guests)', a: ['Gemeinschaftsküche', 'Gemeinschaftskueche'], why: 'In a hostel, the *Gemeinschaftsküche* is shared by all guests.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Ich habe den Eindruck, dass alle gern wandern.', why: 'After *dass*, the verb *wandern* goes to the end.' },
      { a: 'Es war schön, dich kennenzulernen.', why: 'A friendly way to end a conversation.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'Unter jungen Reisenden im Hostel sagt man oft *du*.', a: 't', why: 'Among travellers, *du* is usual from the start.' },
      { q: 'Wenn man *Sie* zu einer Person sagt, fragt man: Wie ist das bei euch?', a: 'f', why: 'With *Sie*, ask *bei Ihnen*. *bei euch* is for a group or for people you call *du*.' },
    ] },
  ],
};
