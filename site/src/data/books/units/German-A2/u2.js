// German A2, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Free time',
  goal: 'Talk about hobbies and make plans together. Learn the modal verbs, separable verbs and how to suggest, accept and refuse.',
  art: 'sun',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading'], topics: ['modal-verbs', 'separable-verbs', 'making-plans', 'hobbies'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'können, wollen, müssen',
      about: 'Modal verbs and the sentence bracket.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: '**Modal verbs** say if you can, want to or have to do something. The modal verb is in position 2 and changes its form. The second verb goes to the **end** of the sentence, in the infinitive. Together they make the **sentence bracket** (Satzklammer).' },
          { t: 'examples', items: [
            { s: 'Ich **kann** gut **schwimmen**.', n: '*können*: you are able to do it.' },
            { s: 'Wir **wollen** am Samstag **wandern**.', n: '*wollen*: a plan or a strong wish.' },
            { s: 'Ich **muss** am Sonntag **arbeiten**.', n: '*müssen*: it is necessary.' },
            { s: 'Hier **darf** man nicht **parken**.', n: '*dürfen*: it is allowed. *nicht dürfen*: it is not allowed.' },
            { s: '**Möchtest** du einen Tee **trinken**?', n: '*möchten*: a polite wish.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Modal verbs', quiz: true, head: ['', 'können', 'wollen', 'müssen', 'dürfen', 'möchten'], rows: [
            ['ich', 'kann', 'will', 'muss', 'darf', 'möchte'],
            ['du', 'kannst', 'willst', 'musst', 'darfst', 'möchtest'],
            ['er / sie / es', 'kann', 'will', 'muss', 'darf', 'möchte'],
            ['wir', 'können', 'wollen', 'müssen', 'dürfen', 'möchten'],
            ['ihr', 'könnt', 'wollt', 'müsst', 'dürft', 'möchtet'],
            ['sie / Sie', 'können', 'wollen', 'müssen', 'dürfen', 'möchten'],
          ] },
          { t: 'tip', art: 'owl', md: '*ich* and *er/sie/es* have the same form, with no ending: *ich kann, sie kann*. In the singular, *können, wollen, müssen* and *dürfen* change their vowel: *kann, will, muss, darf*. Careful: *ich will* means I want, not I will.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the modal verb in the right form.', items: [
            { q: 'Mein Sohn ___ schon gut Fahrrad fahren. (können)', a: ['kann'], why: '*er kann*: no ending, and *ö* becomes *a*.' },
            { q: '___ du am Freitag ins Kino gehen? (wollen)', a: ['Willst'], why: '*du willst*' },
            { q: 'Ihr ___ hier nicht laut Musik hören. (dürfen)', a: ['dürft'], why: '*ihr dürft*: the plural keeps the *ü*.' },
            { q: 'Herr Ito ___ einen Kaffee trinken. (möchten)', a: ['möchte'], why: '*er möchte*: no *-t* at the end.' },
            { q: 'Lisa ___ am Montag zum Zahnarzt gehen. (müssen)', a: ['muss'], why: '*sie muss*' },
            { q: '___ ihr Tennis spielen? (können)', a: ['Könnt'], why: '*ihr könnt*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which modal verb fits?', items: [
            { q: 'Im Museum ___ man nicht fotografieren. Das ist verboten.', o: ['darf', 'muss', 'will'], why: '*verboten* means not allowed: *nicht dürfen*.' },
            { q: 'Ich habe Hunger. Ich ___ eine Pizza essen.', o: ['möchte', 'darf', 'muss'], why: 'A wish: *möchten*.' },
            { q: 'Paula spielt seit zehn Jahren Klavier. Sie ___ sehr gut spielen.', o: ['kann', 'muss', 'darf'], why: 'She is able to play well: *können*.' },
            { q: 'Morgen habe ich eine Prüfung. Heute ___ ich lernen.', o: ['muss', 'darf', 'mag'], why: 'It is necessary: *müssen*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the two parts of the sentence bracket.', items: [
            { s: 'Ich [kann] leider nicht [kommen].', why: 'The modal verb *kann* is in position 2, the infinitive *kommen* is at the end.' },
            { s: 'Wir [wollen] im Sommer nach Italien [fahren].', why: '*wollen* in position 2, *fahren* at the end.' },
            { s: '[Musst] du heute lange [arbeiten]?', why: 'In a yes/no question, the modal verb comes first. The infinitive stays at the end.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Kannst du gut kochen?', why: 'The modal verb comes first, the infinitive *kochen* goes to the end.' },
            { a: 'Was möchtest du heute machen?', why: 'Question word, modal verb, subject. *machen* goes to the end.' },
            { a: 'Wann musst du morgen arbeiten?', why: 'Question word, modal verb, subject. *arbeiten* goes to the end.' },
            { a: 'Darf ich hier parken?', why: 'The modal verb comes first, the infinitive *parken* goes to the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'anfangen, mitkommen, einladen',
      about: 'Separable verbs in the present.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Some verbs have a prefix that separates: *anfangen, mitkommen, einladen*. In a main clause in the present, the verb is in position 2 and the **prefix goes to the end**. The stress is on the prefix: *ANfangen, MITkommen*.' },
          { t: 'examples', items: [
            { s: 'Der Kurs **fängt** um 18 Uhr **an**.', n: '*anfangen*: *a* becomes *ä* for *du* and *er/sie/es*.' },
            { s: '**Kommst** du heute Abend **mit**?', n: '*mitkommen*: in a question, the verb comes first and *mit* stays at the end.' },
            { s: 'Ich **lade** meine Freunde zum Essen **ein**.', n: '*einladen*' },
            { s: 'Sie **sieht** am Abend gern **fern**.', n: '*fernsehen*: *e* becomes *ie* for *du* and *er/sie/es*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Separable verbs', explain: ['head'], quiz: true, head: ['Infinitive', 'er / sie / es'], rows: [
            ['anfangen', 'fängt … an'],
            ['mitkommen', 'kommt … mit'],
            ['einladen', 'lädt … ein'],
            ['aufstehen', 'steht … auf'],
            ['anrufen', 'ruft … an'],
            ['einkaufen', 'kauft … ein'],
            ['fernsehen', 'sieht … fern'],
            ['aufräumen', 'räumt … auf'],
          ] },
          { t: 'tip', art: 'owl', md: 'With a modal verb, the separable verb stays in one piece at the end: *Ich **muss** früh **aufstehen**. **Willst** du **mitkommen**?*' },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap both parts of the separable verb.', items: [
            { s: 'Ich [rufe] dich morgen [an].', why: '*anrufen*: *rufe* in position 2, *an* at the end.' },
            { s: 'Wann [fängt] das Konzert [an]?', why: '*anfangen*: *fängt* after the question word, *an* at the end.' },
            { s: 'Am Samstag [räumen] wir die Wohnung [auf].', why: '*aufräumen*: *räumen* in position 2, *auf* at the end.' },
            { s: '[Lädst] du auch Jonas [ein]?', why: '*einladen*: *du lädst … ein*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the present. The prefix is already at the end.', items: [
            { q: 'Der Film ___ um 20 Uhr an. (anfangen)', a: ['fängt'], why: '*er fängt … an*, with *ä*.' },
            { q: 'Ich ___ jeden Tag um sechs Uhr auf. (aufstehen)', a: ['stehe'], why: '*ich stehe … auf*' },
            { q: '___ du am Freitag mit? (mitkommen)', a: ['Kommst'], why: '*du kommst … mit*' },
            { q: 'Mein Bruder ___ am Abend oft fern. (fernsehen)', a: ['sieht'], why: '*er sieht … fern*, with *ie*.' },
            { q: 'Wir ___ euch zu unserer Party ein. (einladen)', a: ['laden'], why: '*wir laden … ein*: no vowel change in the plural.' },
            { q: 'Maria ___ ihre Kollegen zum Essen ein. (einladen)', a: ['lädt'], why: '*sie lädt … ein*, with *ä*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
            { q: '', o: ['Ich kaufe am Samstag ein.', 'Ich einkaufe am Samstag.', 'Ich kaufe ein am Samstag.'], why: 'The prefix *ein* goes to the very end.' },
            { q: '', o: ['Kannst du mich morgen anrufen?', 'Kannst du mich morgen rufen an?', 'Kannst du anrufen mich morgen?'], why: 'With a modal verb, *anrufen* stays in one piece at the end.' },
            { q: '', o: ['Wann stehst du auf?', 'Wann aufstehst du?', 'Wann du stehst auf?'], why: 'Question word, verb, subject, and the prefix at the end.' },
            { q: '', o: ['Er lädt seine Eltern ein.', 'Er ladet seine Eltern ein.', 'Er lädt ein seine Eltern.'], why: '*er lädt*, with *ä*, and *ein* at the end.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Wann fängt der Deutschkurs an?', why: '*fängt* after the question word, *an* at the end.' },
            { a: 'Kommst du heute mit?', why: 'The verb comes first, *mit* goes to the end.' },
            { a: 'Musst du noch einkaufen?', why: 'With a modal verb, *einkaufen* stays together at the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Hast du Lust?',
      about: 'Suggest something, say yes or no, and agree on a time and a place.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'To suggest something, ask *Hast du Lust …?* or *Wollen wir …?* Then agree on a time and a place: *Wann treffen wir uns? Wo treffen wir uns?*' },
          { t: 'dialogue', title: 'Am Wochenende', lines: [
            { who: 'Jana', s: 'Hallo Emre! Hast du Lust, am Samstag schwimmen zu gehen?' },
            { who: 'Emre', s: 'Am Samstag kann ich leider nicht. Ich muss arbeiten.' },
            { who: 'Jana', s: 'Schade. Und am Sonntag?' },
            { who: 'Emre', s: 'Am Sonntag habe ich Zeit. Wollen wir zum See fahren?' },
            { who: 'Jana', s: 'Gute Idee! Wann treffen wir uns?' },
            { who: 'Emre', s: 'Um zehn Uhr?' },
            { who: 'Jana', s: 'Zehn ist mir zu früh. Geht es auch um elf?' },
            { who: 'Emre', s: 'Ja, klar. Wo treffen wir uns?' },
            { who: 'Jana', s: 'Am Bahnhof. Bis Sonntag!' },
          ] },
        ],
        [
          { t: 'table', caption: 'Making a plan', explain: ['head'], head: ['Suggest', 'Say yes', 'Say no'], rows: [
            ['Hast du Lust auf einen Kaffee?', 'Ja, gern!', 'Leider kann ich nicht.'],
            ['Wollen wir zusammen kochen?', 'Gute Idee!', 'Da habe ich keine Zeit.'],
            ['Hast du Lust, Tennis zu spielen?', 'Super, das machen wir!', 'Tut mir leid, ich muss arbeiten.'],
          ] },
          { t: 'tip', art: 'owl', md: 'After *Hast du Lust* you can use *auf* + a noun: *Hast du Lust auf einen Kaffee?* Or use a comma and *zu* + infinitive at the end: *Hast du Lust, ins Kino zu gehen?*' },
          { t: 'examples', items: [
            { s: 'Wann treffen wir uns? – Um halb acht.', n: '*halb acht* is 7.30.' },
            { s: 'Wo treffen wir uns? – Vor dem Kino.', n: '*vor* + Dativ: *vor dem Kino*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the right answer.', pairs: [
            ['Hast du Lust auf einen Kaffee?', 'Ja, gern! Mit Milch, bitte.'],
            ['Wann treffen wir uns?', 'Um sieben Uhr.'],
            ['Wo treffen wir uns?', 'Am Bahnhof.'],
            ['Kommst du am Freitag mit ins Konzert?', 'Leider nicht, am Freitag habe ich keine Zeit.'],
            ['Wie lange dauert der Film?', 'Ungefähr zwei Stunden.'],
            ['Wollen wir am Sonntag wandern?', 'Gute Idee! Am Sonntag habe ich Zeit.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'Hast du Lust, am Samstag Tennis zu spielen?', o: ['Gern! Um wie viel Uhr?', 'Nein, ich bin Tennis.', 'Danke, gleichfalls.'], why: 'You say yes and ask about the time.' },
            { q: 'Wann treffen wir uns?', o: ['Um halb acht vor dem Kino.', 'Ins Kino.', 'Ja, gern.'], why: '*Wann?* asks for a time.' },
            { q: 'Kommst du mit ins Museum?', o: ['Tut mir leid, heute kann ich nicht.', 'Ja, ich komme aus dem Museum.', 'Das Museum ist groß.'], why: 'A polite no: *Tut mir leid, heute kann ich nicht.*' },
            { q: 'Wollen ___ am Sonntag zusammen frühstücken?', o: ['wir', 'uns', 'unser'], why: '*Wollen wir …?* means Shall we …? The subject is *wir*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the plan.', items: [
            { q: 'Hast du ___ auf ein Eis?', a: ['Lust'], why: '*Hast du Lust auf …?* Do you feel like …?' },
            { q: 'Wann treffen wir ___?', a: ['uns'], why: '*sich treffen*: *wir treffen uns*.' },
            { q: '___ wir zusammen ins Kino gehen? (wollen)', a: ['Wollen'], why: '*Wollen wir …?* makes a suggestion.' },
            { q: 'Am Samstag kann ich ___. Ich muss arbeiten.', a: ['nicht'], why: '*Ich kann nicht*: I can’t.' },
            { q: 'Gute ___! Das machen wir.', a: ['Idee'], why: '*Gute Idee!* means Good idea!' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Hast du Lust auf einen Kaffee?', why: 'The verb comes first. *Lust auf* + Akkusativ.' },
            { a: 'Wo treffen wir uns morgen?', why: 'Question word, verb, subject, then *uns*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'At the sports club',
      about: 'Read a notice from a sports club and messages between friends.',
      art: 'dog',
      spreads: [
        [
          { t: 'reading', title: 'Sportverein: Neue Kurse im Herbst', md: 'Hast du Lust auf Bewegung? Ab dem 1. Oktober gibt es in unserem Verein drei neue Kurse.\n\nVolleyball für Anfänger: dienstags von 19 bis 20.30 Uhr in der Sporthalle an der Schulstraße. Du musst keine Erfahrung haben.\n\nYoga am Morgen: samstags von 9 bis 10 Uhr im Park. Bei Regen ist der Kurs im Vereinshaus. Bitte bring eine Matte mit.\n\nLaufgruppe: donnerstags um 18 Uhr. Wir treffen uns am Eingang vom Stadtpark und laufen fünf Kilometer.\n\nMitglieder können alle Kurse kostenlos besuchen. Gäste dürfen zweimal kostenlos mitmachen. Danach kostet ein Kurs 5 Euro.\n\nAnmeldung: im Vereinshaus, montags bis freitags von 16 bis 18 Uhr.' },
        ],
        [
          { t: 'dialogue', title: 'Messages', lines: [
            { who: 'Rosa', s: 'Hast du die neuen Kurse vom Sportverein gesehen? Wollen wir zusammen Volleyball spielen?' },
            { who: 'Kemal', s: 'Gute Idee, aber dienstags habe ich bis 19 Uhr Deutschkurs. Das schaffe ich nicht.' },
            { who: 'Rosa', s: 'Schade. Und Yoga am Samstag?' },
            { who: 'Kemal', s: 'Samstag passt! Ich habe aber keine Matte.' },
            { who: 'Rosa', s: 'Kein Problem, ich habe zwei. Ich bringe eine für dich mit.' },
            { who: 'Kemal', s: 'Super! Wann treffen wir uns?' },
            { who: 'Rosa', s: 'Um Viertel vor neun am Eingang vom Park?' },
            { who: 'Kemal', s: 'Okay, bis Samstag!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Für den Volleyballkurs muss man schon gut spielen können.', a: 'f', why: '*Du musst keine Erfahrung haben.* The course is for beginners.' },
            { q: 'Bei Regen ist der Yogakurs im Vereinshaus.', a: 't', why: '*Bei Regen ist der Kurs im Vereinshaus.*' },
            { q: 'Die Laufgruppe läuft zehn Kilometer.', a: 'f', why: 'They run five kilometres: *fünf Kilometer*.' },
            { q: 'Gäste bezahlen für den ersten Kurs 5 Euro.', a: 'f', why: 'Guests can take part twice for free. After that, a course costs 5 euros.' },
            { q: 'Kemal hat dienstags Deutschkurs.', a: 't', why: '*Dienstags habe ich bis 19 Uhr Deutschkurs.*' },
            { q: 'Rosa macht schon lange Yoga.', a: 'ng', why: 'Rosa has two mats, but the messages do not say how long she has done yoga.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the messages again and choose.', items: [
            { q: 'Was bringt Rosa für Kemal mit?', o: ['eine Matte', 'einen Ball', 'eine Freundin'], why: '*Ich bringe eine für dich mit*: *eine* means *eine Matte*. *mitbringen* is a separable verb.' },
            { q: 'Wann treffen sich Rosa und Kemal?', o: ['am Samstag um 8.45 Uhr', 'am Samstag um 9.15 Uhr', 'am Dienstag um 19 Uhr'], why: '*Viertel vor neun* is 8.45.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Hier ___ man nicht parken. Das ist verboten.', o: ['darf', 'muss', 'will'], why: 'Not allowed: *nicht dürfen*.' },
      { q: 'Wann ___ der Film an?', o: ['fängt', 'fangt', 'anfängt'], why: '*er fängt … an*: *ä*, and the prefix at the end.' },
      { q: '___ du Lust auf ein Eis?', o: ['Hast', 'Bist', 'Willst'], why: '*Lust haben*: *Hast du Lust …?*' },
      { q: 'Ich muss morgen früh ___.', o: ['aufstehen', 'stehe auf', 'aufstehe'], why: 'With a modal verb, the separable verb stays in one piece at the end, in the infinitive.' },
      { q: 'Sie ___ sehr gut Gitarre spielen.', o: ['kann', 'können', 'kannst'], why: '*sie kann*: no ending.' },
      { q: 'Ihr ___ hier nicht laut sein.', o: ['dürft', 'darft', 'dürfen'], why: '*ihr dürft*: the plural keeps the *ü*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: '___ du am Samstag mit? (mitkommen)', a: ['Kommst'], why: '*du kommst … mit*' },
      { q: 'Du ___ hier nicht rauchen. (dürfen)', a: ['darfst'], why: '*du darfst*' },
      { q: 'Er ___ seine Freunde zum Grillen ein. (einladen)', a: ['lädt'], why: '*er lädt … ein*, with *ä*.' },
      { q: 'Wann treffen wir ___?', a: ['uns'], why: '*sich treffen*: *wir treffen uns*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
      { a: 'Willst du heute Abend mitkommen?', why: 'The modal verb comes first, *mitkommen* goes to the end.' },
      { a: 'Was möchtest du am Wochenende machen?', why: 'Question word, modal verb, subject, and the infinitive at the end.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: 'Wollen wir am Freitag essen gehen?', o: ['Gute Idee! Um wie viel Uhr?', 'Nein, ich gehe zu Fuß.', 'Ich esse gern Äpfel.'], why: 'You accept the suggestion and ask about the time.' },
    ] },
  ],
};
