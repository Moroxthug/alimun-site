// German A2, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Work and everyday life',
  goal: 'Talk about your job and your day, and give reasons.',
  art: 'mug',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['perfekt', 'weil-dass', 'jobs', 'time', 'daily-routine'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'What did you do today?',
      about: 'Talk about the past with the Perfekt.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'When you talk about the past, you usually use the **Perfekt**: *haben* or *sein* + the past participle (Partizip II). *Haben* or *sein* is in position 2. The participle goes to the **end** of the sentence.' },
          { t: 'examples', items: [
            { s: 'Ich **habe** heute viel **gearbeitet**.', n: '*haben* in position 2, the participle at the end.' },
            { s: 'Wir **haben** in der Kantine **gegessen**.', n: '*essen → gegessen*: an irregular participle.' },
            { s: 'Sie **ist** mit dem Zug zur Arbeit **gefahren**.', n: '*fahren* is movement, so *sein*.' },
            { s: '**Hast** du schon mit dem Chef **telefoniert**?', n: 'In a yes/no question, *haben* comes first.' },
          ] },
        ],
        [
          { t: 'text', md: 'Regular verbs make the participle with *ge-* + stem + *-t*: *machen → gemacht*. Irregular verbs end in *-en* and often change the vowel: *schreiben → geschrieben*. Learn them with the verb.\n\nIn separable verbs, *ge-* goes in the middle: *einkaufen → eingekauft*. Verbs ending in *-ieren* and verbs with *be-*, *ver-* or *er-* have no *ge-*: *telefoniert, besucht, vergessen*.' },
          { t: 'table', caption: 'Partizip II', explain: ['head'], quiz: true, head: ['Infinitive', 'Perfekt'], rows: [
            ['machen', 'hat gemacht'],
            ['arbeiten', 'hat gearbeitet'],
            ['schreiben', 'hat geschrieben'],
            ['trinken', 'hat getrunken'],
            ['sehen', 'hat gesehen'],
            ['einkaufen', 'hat eingekauft'],
            ['telefonieren', 'hat telefoniert'],
            ['besuchen', 'hat besucht'],
            ['fahren', 'ist gefahren'],
            ['gehen', 'ist gegangen'],
            ['aufstehen', 'ist aufgestanden'],
            ['bleiben', 'ist geblieben'],
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'Most verbs take *haben*. Verbs of movement from one place to another (*gehen, fahren, kommen, fliegen*) take **sein**. So do *aufstehen, einschlafen, bleiben, sein, werden* and *passieren*.' },
          { t: 'ex', kind: 'choice', h: 'Haben or sein? Choose.', items: [
            { q: 'Heute Morgen ___ ich um sechs Uhr aufgestanden.', o: ['bin', 'habe', 'ist'], why: '*Aufstehen* takes *sein*: *ich bin aufgestanden*.' },
            { q: 'Wir ___ in der Kantine Pizza gegessen.', o: ['haben', 'sind', 'hat'], why: '*Essen* takes *haben*: *wir haben gegessen*.' },
            { q: 'Mein Kollege ___ mit dem Bus zur Arbeit gefahren.', o: ['ist', 'hat', 'sind'], why: '*Fahren* is movement, so *sein*: *er ist gefahren*.' },
            { q: 'Was ___ ihr am Wochenende gemacht?', o: ['habt', 'seid', 'hat'], why: '*Machen* takes *haben*: *ihr habt gemacht*.' },
            { q: 'Ich ___ gestern lange im Büro geblieben.', o: ['bin', 'habe', 'hat'], why: '*Bleiben* takes *sein*: *ich bin geblieben*.' },
            { q: 'Was ___ passiert?', o: ['ist', 'hat', 'sind'], why: '*Passieren* takes *sein*: *Was ist passiert?*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the past participle.', items: [
            { q: 'Ich habe heute zehn E-Mails ___. (schreiben)', a: ['geschrieben'], why: 'Irregular: *schreiben → geschrieben*.' },
            { q: 'Sie hat bis 18 Uhr ___. (arbeiten)', a: ['gearbeitet'], why: 'Regular. After *-t* in the stem, add *-et*: *gearbeitet*.' },
            { q: 'Wir haben nach der Arbeit ___. (einkaufen)', a: ['eingekauft'], why: 'Separable verb: *ein + ge + kauft*.' },
            { q: 'Hast du schon mit dem Chef ___? (telefonieren)', a: ['telefoniert'], why: 'Verbs ending in *-ieren* have no *ge-*.' },
            { q: 'Am Montag hat uns eine Kundin ___. (besuchen)', a: ['besucht'], why: 'The prefix *be-* means no *ge-*: *besucht*.' },
            { q: 'Er ist um 22 Uhr ins Bett ___. (gehen)', a: ['gegangen'], why: 'Irregular: *gehen → ist gegangen*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the past participle.', items: [
            { s: 'Ich habe am Abend noch lange [gelesen].', why: '*lesen → gelesen*, at the end of the sentence.' },
            { s: 'Wann bist du heute [aufgestanden]?', why: '*aufstehen → aufgestanden*: *ge-* in the middle.' },
            { s: 'Frau Kaya hat den Termin [vergessen].', why: '*vergessen*: the prefix *ver-* means no *ge-*.' },
            { s: 'Wir haben gestern ein neues Programm [installiert].', why: '*installieren → installiert*, with no *ge-*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Weil and dass',
      about: 'Give reasons and say what you think.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Use **weil** to give a reason. It answers the question *Warum?* Use **dass** after verbs like *glauben, denken, wissen, sagen, hoffen* and *finden*.\n\n*Weil* and *dass* start a subordinate clause. In this clause, the conjugated verb goes to the **end**. There is always a comma before *weil* and *dass*.' },
          { t: 'examples', items: [
            { s: 'Ich komme heute später, **weil** ich zum Arzt **muss**.', n: 'The verb *muss* goes to the end.' },
            { s: 'Sie lernt Deutsch, **weil** sie in Wien arbeiten **möchte**.', n: 'With a modal verb, the modal verb is last.' },
            { s: 'Ich glaube, **dass** der Bus schon weg **ist**.', n: '*dass* after *glauben*. The verb *ist* goes to the end.' },
            { s: 'Er sagt, **dass** der Kurs um acht **anfängt**.', n: 'A separable verb is written as one word at the end: *anfängt*.' },
            { s: 'Ich bin müde, **weil** ich schlecht geschlafen **habe**.', n: 'In the Perfekt, *haben* or *sein* is last.' },
          ] },
        ],
        [
          { t: 'table', caption: 'The verb at the end', explain: ['head'], head: ['Main clause', 'Conjunction', 'Subordinate clause'], rows: [
            ['Ich bleibe zu Hause,', 'weil', 'ich krank **bin**.'],
            ['Sie nimmt ein Taxi,', 'weil', 'es stark **regnet**.'],
            ['Wir wissen,', 'dass', 'das Büro morgen geschlossen **ist**.'],
            ['Ich hoffe,', 'dass', 'du bald eine Stelle **findest**.'],
          ] },
          { t: 'tip', art: 'owl', md: '*Denn* also gives a reason, but after *denn* the word order does not change: *Ich bleibe zu Hause, denn ich **bin** krank.* After *weil*, the verb goes to the end: *…, weil ich krank **bin**.*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Weil, dass or denn? Choose.', items: [
            { q: 'Ich hoffe, ___ du bald einen neuen Job findest.', o: ['dass', 'weil', 'denn'], why: 'After *hoffen*: *dass*. The verb *findest* is at the end.' },
            { q: 'Ana nimmt ein Taxi, ___ es stark regnet.', o: ['weil', 'dass', 'denn'], why: 'A reason with the verb at the end: *weil*.' },
            { q: 'Wir wissen, ___ das Büro am Freitag geschlossen ist.', o: ['dass', 'weil', 'denn'], why: 'After *wissen*: *dass*.' },
            { q: 'Tim ist heute nicht im Büro, ___ er ist krank.', o: ['denn', 'weil', 'dass'], why: 'The verb *ist* comes right after the subject, not at the end. So it must be *denn*.' },
            { q: 'Findest du auch, ___ die Kantine zu teuer ist?', o: ['dass', 'weil', 'denn'], why: 'After *finden* (to think): *dass*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
            { q: '', o: ['Ich lerne Deutsch, weil ich in Berlin arbeite.', 'Ich lerne Deutsch, weil ich arbeite in Berlin.', 'Ich lerne Deutsch, weil arbeite ich in Berlin.'], why: 'After *weil*, the verb goes to the end.' },
            { q: '', o: ['Sie sagt, dass sie morgen nicht kommen kann.', 'Sie sagt, dass sie morgen kann nicht kommen.', 'Sie sagt, dass sie kann morgen nicht kommen.'], why: 'The modal verb *kann* is last, after the infinitive.' },
            { q: '', o: ['Er ist müde, weil er früh aufgestanden ist.', 'Er ist müde, weil er früh ist aufgestanden.', 'Er ist müde, weil er früh aufgestanden hat.'], why: 'In the Perfekt, *ist* goes to the very end. *Aufstehen* takes *sein*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Ich bin müde, weil ich lange gearbeitet habe.', why: 'After *weil*, *habe* goes to the end.' },
            { a: 'Ich glaube, dass sie krank ist.', why: 'After *dass*, the verb *ist* goes to the end.' },
            { a: 'Er kommt später, weil der Zug Verspätung hat.', why: 'After *weil*, the verb *hat* goes to the end.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Join the sentences. Write the verb at the end.', items: [
            { q: 'Ich kann nicht kommen. Ich muss arbeiten. → Ich kann nicht kommen, weil ich arbeiten ___.', a: ['muss'], why: 'The modal verb *muss* goes to the very end.' },
            { q: 'Der Kurs fängt um acht an. → Weißt du, dass der Kurs um acht ___?', a: ['anfängt'], why: 'At the end, the separable verb is one word: *anfängt*.' },
            { q: 'Der Bus ist nicht gekommen. → Ich komme zu spät, weil der Bus nicht gekommen ___.', a: ['ist'], why: 'In the Perfekt, *ist* goes after the participle.' },
            { q: 'Sie hat viel Arbeit. → Ich glaube, dass sie viel Arbeit ___.', a: ['hat'], why: 'After *dass*, the verb *hat* goes to the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Jobs and the working day',
      about: 'Say what you do, where you work and when.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To say your job, use *sein* without an article: *Ich bin Lehrerin.* Most jobs have a form for women with *-in*: *der Lehrer, die Lehrerin*. To ask, say: *Was sind Sie von Beruf?*' },
          { t: 'table', caption: 'Jobs and workplaces', explain: ['head'], quiz: true, head: ['Job', 'Workplace'], rows: [
            ['der Koch / die Köchin', 'im Restaurant'],
            ['der Krankenpfleger / die Krankenpflegerin', 'im Krankenhaus'],
            ['der Lehrer / die Lehrerin', 'in der Schule'],
            ['der Verkäufer / die Verkäuferin', 'im Geschäft'],
            ['der Mechaniker / die Mechanikerin', 'in der Werkstatt'],
            ['der Programmierer / die Programmiererin', 'im Büro'],
          ] },
          { t: 'examples', items: [
            { s: 'Was sind Sie von Beruf? – Ich bin **Köchin**.', n: 'No article before the job.' },
            { s: 'Ich arbeite **als** Mechaniker in einer Werkstatt.', n: '*arbeiten als* + job' },
            { s: 'Mein Mann arbeitet **bei** einer Versicherung.', n: '*bei* + the company or organisation.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Who does what?', pairs: [
            ['Der Mechaniker', 'repariert Autos.'],
            ['Die Krankenpflegerin', 'hilft den Patienten.'],
            ['Der Verkäufer', 'berät die Kunden im Geschäft.'],
            ['Die Lehrerin', 'unterrichtet die Kinder.'],
            ['Der Koch', 'bereitet das Essen zu.'],
          ] },
        ],
        [
          { t: 'text', md: 'There are two ways to tell the time. In conversation, people use the **informal** time with *nach*, *vor*, *Viertel* and *halb*. On the radio, at the station and in emails, people use the **official** time with 24 hours.' },
          { t: 'table', caption: 'Telling the time', explain: ['head'], quiz: true, head: ['Time', 'Informal', 'Official'], rows: [
            ['7:00', 'sieben Uhr', 'sieben Uhr'],
            ['7:05', 'fünf nach sieben', 'sieben Uhr fünf'],
            ['7:15', 'Viertel nach sieben', 'sieben Uhr fünfzehn'],
            ['7:25', 'fünf vor halb acht', 'sieben Uhr fünfundzwanzig'],
            ['7:30', 'halb acht', 'sieben Uhr dreißig'],
            ['7:45', 'Viertel vor acht', 'sieben Uhr fünfundvierzig'],
            ['19:20', 'zwanzig nach sieben', 'neunzehn Uhr zwanzig'],
          ] },
          { t: 'tip', art: 'owl', md: 'Be careful with *halb*: *halb acht* is 7:30, half an hour **before** eight. To ask the time, say *Wie spät ist es?* For an appointment, ask *Um wie viel Uhr?* and answer with *um*: *um halb acht*.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Ich **stehe** um Viertel nach sechs **auf**.', n: '*aufstehen* is separable.' },
            { s: 'Um sieben **frühstücke** ich.', n: 'The time is first, so the verb comes next and then *ich*.' },
            { s: 'Meine Arbeit **fängt** um acht **an**.', n: '*anfangen* is separable.' },
            { s: 'Um fünf habe ich **Feierabend**.', n: '*der Feierabend*: the end of the working day.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'What time is it? Choose the informal time.', items: [
            { q: '8:30 – Es ist ___.', o: ['halb neun', 'halb acht', 'acht Uhr halb'], why: '*halb neun*: half an hour before nine.' },
            { q: '9:15 – Es ist ___.', o: ['Viertel nach neun', 'Viertel vor neun', 'Viertel nach zehn'], why: 'A quarter after nine: *Viertel nach neun*.' },
            { q: '6:45 – Es ist ___.', o: ['Viertel vor sieben', 'Viertel vor sechs', 'Viertel nach sieben'], why: 'A quarter before seven: *Viertel vor sieben*.' },
            { q: '10:50 – Es ist ___.', o: ['zehn vor elf', 'zehn nach elf', 'zehn vor zehn'], why: 'Ten minutes before eleven: *zehn vor elf*.' },
            { q: '12:25 – Es ist ___.', o: ['fünf vor halb eins', 'fünf nach halb eins', 'fünf vor halb zwölf'], why: 'Five minutes before half past twelve, so *fünf vor halb eins*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences about the day.', items: [
            { q: 'Ich ___ jeden Tag um sechs Uhr auf. (aufstehen)', a: ['stehe'], why: 'Separable verb: *ich stehe … auf*.' },
            { q: 'Der Film beginnt um 20:30, also um ___ neun.', a: ['halb'], why: '20:30 is half an hour before nine: *halb neun*.' },
            { q: 'Meine Schicht fängt um sieben ___. (anfangen)', a: ['an'], why: 'The prefix *an* goes to the end: *fängt … an*.' },
            { q: 'Um 17 Uhr habe ich ___. Dann gehe ich nach Hause.', a: ['Feierabend'], why: 'The end of the working day: *der Feierabend*.' },
            { q: 'Wir treffen uns um 13:45, also um Viertel ___ zwei.', a: ['vor'], why: '13:45 is a quarter before two: *Viertel vor zwei*.' },
            { q: 'Am Abend ___ ich noch im Supermarkt ein. (einkaufen)', a: ['kaufe'], why: 'Separable verb: *ich kaufe … ein*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Reading: a day in the life of a nurse',
      about: 'Read about a working day and check the details.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Ein Tag im Leben von Amina', md: 'Amina Diallo ist 34 Jahre alt und arbeitet als Krankenpflegerin in einem Krankenhaus in Hannover. Diese Woche hat sie Frühdienst. Ihr Wecker klingelt um Viertel nach vier, weil ihre Schicht schon um sechs Uhr anfängt. Sie trinkt schnell einen Kaffee und fährt mit dem Fahrrad zur Arbeit.\n\nUm sechs Uhr bekommt sie von den Kolleginnen aus dem Nachtdienst die Informationen über die Patienten. Dann misst sie Fieber, bringt Medikamente und hilft den Patienten beim Waschen. Um halb zehn macht sie eine kurze Pause.\n\nUm zwei Uhr hat Amina Feierabend. Am Nachmittag holt sie ihren Sohn vom Kindergarten ab. Sie ist oft müde, aber sie mag ihren Beruf. „Ich weiß, dass meine Arbeit wichtig ist“, sagt sie. „Gestern hat mir eine alte Patientin Schokolade geschenkt, weil ich so freundlich war. Das hat mich sehr gefreut.“' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Amina arbeitet in einem Krankenhaus.', a: 't', why: '*Sie arbeitet als Krankenpflegerin in einem Krankenhaus.*' },
            { q: 'Diese Woche fängt ihre Arbeit um sechs Uhr an.', a: 't', why: '*Ihre Schicht fängt schon um sechs Uhr an.*' },
            { q: 'Amina fährt mit dem Bus zur Arbeit.', a: 'f', why: 'She goes by bike: *mit dem Fahrrad*.' },
            { q: 'Um halb zehn hat sie Feierabend.', a: 'f', why: 'At half past nine she has a short break. *Feierabend* is at two.' },
            { q: 'Amina arbeitet seit zehn Jahren im Krankenhaus.', a: 'ng', why: 'The text does not say how long she has worked there.' },
            { q: 'Amina findet ihre Arbeit wichtig.', a: 't', why: '*Ich weiß, dass meine Arbeit wichtig ist.*' },
            { q: 'Aminas Mann holt den Sohn vom Kindergarten ab.', a: 'f', why: 'Amina picks up her son: *Sie holt ihren Sohn ab.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Warum klingelt Aminas Wecker so früh?', o: ['Weil ihre Schicht um sechs Uhr anfängt.', 'Weil sie vor der Arbeit Sport macht.', 'Weil ihr Sohn früh aufsteht.'], why: '*…, weil ihre Schicht schon um sechs Uhr anfängt.*' },
            { q: 'Warum hat die Patientin Amina Schokolade geschenkt?', o: ['Weil Amina so freundlich war.', 'Weil Amina Geburtstag hatte.', 'Weil Amina müde war.'], why: '*…, weil ich so freundlich war.*' },
            { q: 'Was macht Amina am Nachmittag?', o: ['Sie holt ihren Sohn ab.', 'Sie arbeitet im Nachtdienst.', 'Sie macht eine kurze Pause.'], why: '*Am Nachmittag holt sie ihren Sohn vom Kindergarten ab.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verb at the end of the weil or dass clause.', items: [
            { s: 'Ihr Wecker klingelt früh, weil ihre Schicht um sechs Uhr [anfängt].', why: 'After *weil*, the separable verb goes to the end as one word.' },
            { s: 'Ich weiß, dass meine Arbeit wichtig [ist].', why: 'After *dass*, *ist* goes to the end.' },
            { s: 'Sie hat mir Schokolade geschenkt, weil ich so freundlich [war].', why: 'After *weil*, *war* goes to the end.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ich ___ am Samstag nach Köln gefahren.', o: ['bin', 'habe', 'hat'], why: '*Fahren* is movement: *sein*.' },
      { q: 'Hast du die E-Mail schon ___?', o: ['geschrieben', 'geschreibt', 'schreibt'], why: 'Irregular: *schreiben → geschrieben*.' },
      { q: 'Ich glaube, ___ der Chef heute nicht kommt.', o: ['dass', 'weil', 'denn'], why: 'After *glauben*: *dass*, with the verb at the end.' },
      { q: 'Sie bleibt zu Hause, weil sie krank ___.', o: ['ist', 'sein', 'hat'], why: 'After *weil*, the conjugated verb goes to the end: *ist*.' },
      { q: '7:30 – Es ist ___.', o: ['halb acht', 'halb sieben', 'sieben halb'], why: '*halb acht*: half an hour before eight.' },
      { q: 'Was sind Sie von ___? – Ich bin Verkäuferin.', o: ['Beruf', 'Arbeit', 'Job'], why: 'The fixed question is *Was sind Sie von Beruf?*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Wir haben gestern im Supermarkt ___. (einkaufen)', a: ['eingekauft'], why: 'Separable verb: *ein + ge + kauft*.' },
      { q: 'Er hat mit der Kundin ___. (telefonieren)', a: ['telefoniert'], why: 'Verbs ending in *-ieren* have no *ge-*.' },
      { q: 'Ich bin froh, dass ich eine neue Stelle gefunden ___.', a: ['habe'], why: 'After *dass*, *habe* goes to the end.' },
      { q: '9:45 – Es ist Viertel ___ zehn.', a: ['vor'], why: 'A quarter before ten: *Viertel vor zehn*.' },
      { q: 'Meine Arbeit fängt um acht Uhr ___. (anfangen)', a: ['an'], why: 'In a main clause, the prefix goes to the end.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Ich lerne Deutsch, weil ich in Wien arbeite.', why: 'After *weil*, the verb goes to the end.' },
      { a: 'Wann bist du heute aufgestanden?', why: 'Question word, *bist*, *du*; the participle at the end.' },
      { a: 'Sie sagt, dass der Kurs ausfällt.', why: 'After *dass*, the separable verb is one word at the end.' },
    ] },
  ],
};
