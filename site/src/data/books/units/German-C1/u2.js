// German C1, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'What you cannot be sure of',
  goal: 'Report, guess and doubt with the subjective use of the modal verbs and with adverbs of probability. Learn sollen and wollen as reports, müssen, dürfte, können and mögen for conclusions, and scheinen, drohen, versprechen and adverbs like angeblich and offenbar.',
  art: 'cat',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['modal verbs', 'subjective use', 'probability', 'reporting', 'news'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Er soll reich sein, sie will nichts gewusst haben',
      about: 'Use sollen and wollen to report what others say or claim.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'The modal verbs have a second, **subjective** meaning. They then say how **sure** the speaker is. **Sollen** reports what **other people say**: *Er soll sehr reich sein* (People say that he is very rich). **Wollen** reports what **the person himself claims**, with some doubt: *Sie will nichts gewusst haben* (She claims that she knew nothing). For the past, use the **Infinitiv Perfekt** (the Partizip II + **haben** or **sein**) at the end: *Er soll sehr reich gewesen sein. Sie will den Unfall nicht gesehen haben.*' },
          { t: 'table', caption: 'sollen and wollen', explain: ['head', 'col1'], head: ['Form', 'Meaning', 'Example'], rows: [
            ['sollen + Infinitiv', 'people say so (now)', 'Er soll sehr reich sein.'],
            ['sollen + Infinitiv Perfekt', 'people say so (earlier)', 'Er soll sehr reich gewesen sein.'],
            ['wollen + Infinitiv', 'he or she claims (now)', 'Sie will schon dreimal in Japan sein.'],
            ['wollen + Infinitiv Perfekt', 'he or she claims (earlier)', 'Sie will nichts gewusst haben.'],
          ] },
          { t: 'tip', art: 'owl', md: 'With **sollen**, the speaker only repeats what others say and does not say whether it is true. With **wollen**, the **subject** is the person who makes the claim, so it only works with a person: *Sie will es nicht gesehen haben*, but not *Das Haus will alt sein*. Compare the normal meanings: *Er soll kommen* (He is supposed to come) and *Er will kommen* (He wants to come).' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Der Film **soll** sehr gut **sein**.', n: 'People say so.' },
            { s: 'Er **soll** früher Lehrer **gewesen sein**.', n: 'People say so, about the past.' },
            { s: 'Sie **will** nichts **gewusst haben**.', n: 'She claims it.' },
            { s: 'Er **will** den Unfall nicht **gesehen haben**.', n: 'He claims it.' },
            { s: 'Der Zeuge **will** den Täter **erkannt haben**.', n: 'The witness claims it.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Who says it? Sort the sentences.', groups: ['other people say (sollen)', 'the person claims (wollen)'], explain: ['groups'], items: [
            { s: 'Er soll sehr reich sein.', g: 0, why: 'It is a rumour.' },
            { s: 'Sie will nichts gewusst haben.', g: 1, why: 'She makes the claim.' },
            { s: 'Der Film soll sehr gut sein.', g: 0, why: 'It is a report from others.' },
            { s: 'Er will den Unfall nicht gesehen haben.', g: 1, why: 'He makes the claim.' },
            { s: 'Sie soll früher Schauspielerin gewesen sein.', g: 0, why: 'It is a rumour.' },
            { s: 'Der Zeuge will den Täter erkannt haben.', g: 1, why: 'The witness makes the claim.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Er ___ sehr reich sein. (people say so)', a: ['soll'], why: '*Sollen* repeats what others say.' },
            { q: 'Sie ___ nichts gewusst haben. (she claims it)', a: ['will'], why: '*Wollen* reports her own claim.' },
            { q: 'Der Film soll sehr gut ___. (sein)', a: ['sein'], why: 'The Infinitiv: *sein*.' },
            { q: 'Er will den Unfall nicht ___ haben. (sehen)', a: ['gesehen'], why: 'The Infinitiv Perfekt: *gesehen haben*.' },
            { q: 'Sie soll früher Schauspielerin ___ sein. (werden)', a: ['geworden'], why: 'The Infinitiv Perfekt of *werden*: *geworden sein*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Der Politiker ___ nichts von dem Geld gewusst haben. (he claims it)', o: ['will', 'soll', 'mag'], why: 'The person claims it: *wollen*.' },
            { q: 'Das Restaurant ___ sehr teuer sein. (people say so)', o: ['soll', 'will', 'kann'], why: 'People say so: *sollen*.' },
            { q: 'Er ___ früher in Wien gelebt haben. (people say so)', o: ['soll', 'will', 'muss'], why: 'People say so: *sollen*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with the modal verb in brackets.', items: [
            { q: 'Man sagt, dass er reich ist.', cue: 'Er soll', a: ['Er soll reich sein.'], why: '*Sollen* + Infinitiv.' },
            { q: 'Sie behauptet, dass sie nichts gewusst hat.', cue: 'Sie will', a: ['Sie will nichts gewusst haben.'], why: '*Wollen* + Infinitiv Perfekt.' },
            { q: 'Man sagt, dass er früher Lehrer war.', cue: 'Er soll', a: ['Er soll früher Lehrer gewesen sein.'], why: '*Sollen* + Infinitiv Perfekt.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Sie [soll] nichts gewusst haben, sagt sie selbst.', a: ['will'], why: 'She makes the claim: *wollen*.' },
            { s: 'Der Film [will] sehr gut sein, sagen viele.', a: ['soll'], why: 'Others say it: *sollen*.' },
            { s: 'Er soll früher Lehrer [sein].', a: ['gewesen sein'], why: 'About the past: Infinitiv Perfekt.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Er soll sehr reich gewesen sein.', why: '*Sollen* + Infinitiv Perfekt at the end.' },
            { a: 'Sie will nichts gewusst haben.', why: '*Wollen* + Infinitiv Perfekt at the end.' },
            { a: 'Der Film soll sehr gut sein.', why: '*Sollen* + Infinitiv.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Er muss es vergessen haben',
      about: 'Use müssen, dürfte, können and mögen to draw conclusions and to guess.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'The modal verbs also show **how sure you are** about something. **Müssen** means *I am sure*: *Er muss zu Hause sein, das Licht brennt.* **Dürfte** (Konjunktiv II of **dürfen**) means *probably*: *Das dürfte stimmen.* **Können** or **könnte** means *possibly*: *Er kann krank sein.* **Nicht können** means *impossible*: *Sie kann das nicht gewusst haben.* **Mögen** admits a point: *Er mag recht haben, aber ich bin nicht überzeugt.* For the past, use the **Infinitiv Perfekt**: *Er muss es vergessen haben.*' },
          { t: 'table', caption: 'How sure are you?', explain: ['head', 'col1'], head: ['Form', 'Degree', 'Example'], rows: [
            ['muss', 'I am sure', 'Er muss zu Hause sein.'],
            ['dürfte', 'probably', 'Das dürfte stimmen.'],
            ['kann / könnte', 'possibly', 'Er kann krank sein.'],
            ['kann nicht', 'impossible', 'Sie kann das nicht gewusst haben.'],
            ['mag', 'I admit that', 'Er mag recht haben, aber …'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not confuse **muss nicht** and **kann nicht**. For a conclusion, the negative of *Er muss zu Hause sein* is **Er kann nicht zu Hause sein** (impossible), not *Er muss nicht zu Hause sein*, which means *He does not have to be at home*. **Dürfte** is a polite, careful form that is common in the news and in writing.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Er **muss** zu Hause **sein**. Das Licht brennt.', n: 'I am sure.' },
            { s: 'Er **muss** es **vergessen haben**.', n: 'I am sure, about the past.' },
            { s: 'Das **dürfte** stimmen.', n: 'Probably.' },
            { s: 'Sie **kann** das nicht **gewusst haben**.', n: 'Impossible, about the past.' },
            { s: 'Er **mag** recht **haben**, aber ich bin nicht überzeugt.', n: 'I admit it.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'How sure is the speaker? Sort the sentences.', groups: ['sure', 'probable', 'possible'], explain: ['groups'], items: [
            { s: 'Er muss zu Hause sein.', g: 0, why: '*Müssen*: I am sure.' },
            { s: 'Sie muss es vergessen haben.', g: 0, why: '*Müssen*: I am sure.' },
            { s: 'Das dürfte stimmen.', g: 1, why: '*Dürfte*: probably.' },
            { s: 'Er dürfte schon da sein.', g: 1, why: '*Dürfte*: probably.' },
            { s: 'Er kann krank sein.', g: 2, why: '*Können*: possibly.' },
            { s: 'Sie könnte sich verspätet haben.', g: 2, why: '*Könnte*: possibly.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Er ___ zu Hause sein. Das Licht brennt. (I am sure)', a: ['muss'], why: '*Müssen*: I am sure.' },
            { q: 'Das ___ stimmen. (probably)', a: ['dürfte'], why: '*Dürfte*: probably.' },
            { q: 'Sie ___ das nicht gewusst haben. (impossible)', a: ['kann'], why: '*Nicht können*: impossible.' },
            { q: 'Er ___ krank sein, aber er hat nichts gesagt. (possibly)', a: ['kann', 'könnte'], why: '*Können*: possibly.' },
            { q: 'Er mag recht ___, aber ich bin nicht überzeugt. (haben)', a: ['haben'], why: '*Mögen* + Infinitiv.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Er ___ nicht zu Hause sein. Das Licht ist aus. (impossible)', o: ['kann', 'muss', 'mag'], why: 'The negative of a conclusion: *kann nicht*.' },
            { q: 'Er ___ schon da sein. (probably)', o: ['dürfte', 'soll', 'will'], why: '*Dürfte*: probably.' },
            { q: 'Sie ___ es vergessen haben. (I am sure)', o: ['muss', 'darf', 'soll'], why: '*Müssen*: I am sure.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with the words in brackets.', items: [
            { q: 'Ich bin sicher, dass er es vergessen hat.', cue: 'Er muss', a: ['Er muss es vergessen haben.'], why: '*Müssen* + Infinitiv Perfekt.' },
            { q: 'Wahrscheinlich ist er schon da.', cue: 'Er dürfte', a: ['Er dürfte schon da sein.'], why: '*Dürfte* + Infinitiv.' },
            { q: 'Es ist unmöglich, dass sie das gewusst hat.', cue: 'Sie kann', a: ['Sie kann das nicht gewusst haben.'], why: '*Nicht können* + Infinitiv Perfekt.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Er [muss] nicht zu Hause sein: das Licht ist aus.', a: ['kann'], why: 'For a conclusion, the negative is *kann nicht*.' },
            { s: 'Er muss es vergessen [haben].', a: ['haben'], why: 'Infinitiv Perfekt: *vergessen haben*.' },
            { s: 'Das [soll] sicher stimmen. (I am sure)', a: ['muss'], why: '*Müssen*: I am sure.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Er muss es vergessen haben.', why: '*Müssen* + Infinitiv Perfekt.' },
            { a: 'Das dürfte stimmen.', why: '*Dürfte* + Infinitiv.' },
            { a: 'Sie kann das nicht gewusst haben.', why: '*Nicht können* + Infinitiv Perfekt.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Scheinen, drohen und angeblich',
      about: 'Use scheinen, drohen and versprechen with zu, and adverbs of probability.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'Some verbs with **zu** + infinitive also work like modal verbs. **Scheinen** means *to seem*: *Er scheint müde zu sein.* **Drohen** means *to threaten to*: *Das Haus droht einzustürzen.* **Versprechen** means *to promise to be*: *Der Tag verspricht schön zu werden.* Adverbs show how sure you are, and they take **no change in the verb**: *Er ist vermutlich krank.* **Angeblich** means *allegedly*: *Er ist angeblich krank.*' },
          { t: 'table', caption: 'Adverbs of probability', explain: ['head', 'col1'], head: ['Adverb', 'Meaning', 'Example'], rows: [
            ['sicherlich / bestimmt', 'very probably', 'Er kommt sicherlich noch.'],
            ['vermutlich / wahrscheinlich', 'probably', 'Er ist vermutlich krank.'],
            ['wohl', 'probably, softer', 'Sie ist wohl noch im Büro.'],
            ['vielleicht / möglicherweise', 'possibly', 'Möglicherweise hat er recht.'],
            ['anscheinend / offenbar', 'it seems, from the evidence', 'Offenbar war das Gebäude leer.'],
            ['angeblich', 'allegedly, others say', 'Er ist angeblich krank.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not mix up **anscheinend** and **scheinbar**. **Anscheinend** means *it seems so, and probably is*: *Er ist anscheinend krank.* **Scheinbar** means *it only looks like it, but it is not true*: *Der Zug steht scheinbar still, aber er fährt.* **Wohl** is very common in speech and gives a note of guess: *Er ist wohl schon weg.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Er **scheint** müde **zu sein**.', n: 'It seems so.' },
            { s: 'Das Haus **droht** einzustürzen.', n: 'It may collapse.' },
            { s: 'Der Tag **verspricht** schön **zu werden**.', n: 'It promises to be nice.' },
            { s: '**Offenbar** war das Gebäude leer.', n: 'From the evidence.' },
            { s: 'Er ist **angeblich** krank.', n: 'Others say so.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the adverb with its meaning.', pairs: [
            ['angeblich', 'allegedly'],
            ['vermutlich', 'probably'],
            ['offenbar', 'evidently'],
            ['möglicherweise', 'possibly'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Er scheint müde ___ sein.', a: ['zu'], why: '*Scheinen* + *zu* + Infinitiv.' },
            { q: 'Das Haus ___ einzustürzen. (threatens to)', a: ['droht'], why: '*Drohen* + *zu* + Infinitiv.' },
            { q: 'Der Tag ___ schön zu werden. (promises)', a: ['verspricht'], why: '*Versprechen* + *zu* + Infinitiv.' },
            { q: 'Er ist ___ krank. (allegedly)', a: ['angeblich'], why: '*Angeblich* = allegedly.' },
            { q: '___ war das Gebäude leer. (it seems, from the evidence)', a: ['Offenbar', 'Anscheinend'], why: '*Offenbar* shows an inference.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Der Zug steht ___ still, aber er fährt. (it only looks so)', o: ['scheinbar', 'anscheinend', 'angeblich'], why: '*Scheinbar* = it only looks so.' },
            { q: 'Er ist ___ krank. Das hat sein Chef gesagt. (others say so)', o: ['angeblich', 'sicherlich', 'bestimmt'], why: '*Angeblich* = allegedly.' },
            { q: 'Sie ist ___ noch im Büro. (a soft guess)', o: ['wohl', 'angeblich', 'scheinbar'], why: '*Wohl* gives a note of guess.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'How sure is it? Sort the adverbs.', groups: ['very probable', 'possible', 'others say'], explain: ['groups'], items: [
            { s: 'sicherlich', g: 0, why: 'Very probable.' },
            { s: 'bestimmt', g: 0, why: 'Very probable.' },
            { s: 'vielleicht', g: 1, why: 'Possible.' },
            { s: 'möglicherweise', g: 1, why: 'Possible.' },
            { s: 'angeblich', g: 2, why: 'Others say so.' },
            { s: 'dem Vernehmen nach', g: 2, why: 'Others say so.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Er scheint müde [sein].', a: ['zu sein'], why: '*Scheinen* needs *zu* before the infinitive.' },
            { s: 'Der Zug steht [anscheinend] still, aber er fährt.', a: ['scheinbar'], why: 'It only looks so: *scheinbar*.' },
            { s: 'Das Haus [drohen] einzustürzen.', a: ['droht'], why: 'One house: *droht*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Er scheint heute sehr müde zu sein.', why: '*Scheinen* ... *zu sein* at the end.' },
            { a: 'Das Haus droht einzustürzen.', why: '*Drohen* + zu-Infinitiv.' },
            { a: 'Offenbar war das Gebäude leer.', why: 'The adverb first, then the verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Ein Brand im Hafen',
      about: 'Read a news report with doubtful sources.',
      art: 'cat',
      spreads: [
        [
          { t: 'reading', title: 'Brand in einem Lagerhaus', md: 'Nach dem Brand in einem Lagerhaus am Hafen ist die Ursache weiter unklar. Das Feuer soll gegen 22 Uhr ausgebrochen sein, wie ein Anwohner berichtet. Er will zuerst Rauch gesehen und danach einen lauten Knall gehört haben. Die Feuerwehr bestätigte, dass sie kurz nach 22 Uhr alarmiert wurde.\n\nOffenbar war das Gebäude zu dieser Zeit leer. Verletzte gibt es anscheinend nicht. Die Polizei schließt eine Brandstiftung nicht aus, doch ein Sprecher sagte, es sei noch zu früh für Vermutungen. Angeblich lagerten in der Halle Farben und Lösungsmittel; das müsse noch geprüft werden.\n\nEin Gutachter dürfte morgen mit den Untersuchungen beginnen. Das Lagerhaus droht einzustürzen, weshalb die Umgebung abgesperrt wurde.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Der Anwohner sagt, er habe zuerst Rauch gesehen.', a: 't', why: '*Er will zuerst Rauch gesehen … haben.*' },
            { q: 'Es gibt mehrere Verletzte.', a: 'f', why: '*Verletzte gibt es anscheinend nicht.*' },
            { q: 'Die Polizei hat eine Brandstiftung bewiesen.', a: 'f', why: 'The police do not rule it out, but nothing is proved.' },
            { q: 'Ein Gutachter beginnt vermutlich morgen.', a: 't', why: '*Ein Gutachter dürfte morgen … beginnen.*' },
            { q: 'Das Lagerhaus ist bereits eingestürzt.', a: 'f', why: 'It *droht einzustürzen*; it has not collapsed yet.' },
            { q: 'Die Feuerwehr kam nach zehn Minuten an.', a: 'ng', why: 'The text only says the alarm came shortly after 22.00.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Wann ist das Feuer ausgebrochen?', o: ['Gegen 22 Uhr.', 'Am Morgen.', 'Um Mitternacht.'], why: '*Soll gegen 22 Uhr ausgebrochen sein.*' },
            { q: 'Was lagerte angeblich in der Halle?', o: ['Farben und Lösungsmittel.', 'Möbel.', 'Lebensmittel.'], why: '*Angeblich lagerten in der Halle Farben und Lösungsmittel.*' },
            { q: 'Warum wurde die Umgebung abgesperrt?', o: ['Das Lagerhaus droht einzustürzen.', 'Es gab Verletzte.', 'Die Polizei sucht Zeugen.'], why: '*Das Lagerhaus droht einzustürzen, weshalb die Umgebung abgesperrt wurde.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that show that the news is not certain.', items: [
            { s: 'Das Feuer [soll] gegen 22 Uhr ausgebrochen sein. Er [will] zuerst Rauch gesehen haben.', why: '*Soll* repeats a report; *will* repeats a claim.' },
            { s: '[Offenbar] war das Gebäude leer, und Verletzte gibt es [anscheinend] nicht.', why: 'Both adverbs show an inference.' },
            { s: '[Angeblich] lagerten in der Halle Farben; ein Gutachter [dürfte] morgen beginnen.', why: '*Angeblich* = allegedly; *dürfte* = probably.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Das Feuer ___ gegen 22 Uhr ausgebrochen sein. (people say so)', a: ['soll'], why: '*Sollen* repeats a report.' },
            { q: 'Er ___ zuerst Rauch gesehen haben. (he claims it)', a: ['will'], why: '*Wollen* reports his claim.' },
            { q: 'Ein Gutachter ___ morgen mit den Untersuchungen beginnen. (probably)', a: ['dürfte'], why: '*Dürfte*: probably.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Das Feuer soll gegen 22 Uhr ausgebrochen sein.', why: '*Sollen* + Infinitiv Perfekt at the end.' },
            { a: 'Ein Gutachter dürfte morgen mit den Untersuchungen beginnen.', why: '*Dürfte* + Infinitiv.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Er ___ sehr reich sein. (people say so)', o: ['soll', 'will', 'mag'], why: '*Sollen* repeats a report.' },
      { q: 'Sie ___ nichts gewusst haben. (she claims it)', o: ['will', 'soll', 'kann'], why: '*Wollen* reports her claim.' },
      { q: 'Das ___ stimmen. (probably)', o: ['dürfte', 'muss', 'kann nicht'], why: '*Dürfte*: probably.' },
      { q: 'Er ___ zu Hause sein: das Licht brennt. (I am sure)', o: ['muss', 'dürfte', 'mag'], why: '*Müssen*: I am sure.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Er muss es vergessen ___. (haben)', a: ['haben'], why: 'Infinitiv Perfekt: *vergessen haben*.' },
      { q: 'Sie soll früher Lehrerin ___ sein. (werden)', a: ['geworden'], why: 'Infinitiv Perfekt of *werden*.' },
      { q: 'Er scheint müde ___ sein.', a: ['zu'], why: '*Scheinen* + *zu* + Infinitiv.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the adverb with its meaning.', pairs: [
      ['angeblich', 'allegedly'],
      ['vermutlich', 'probably'],
      ['offenbar', 'evidently'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the words in brackets.', items: [
      { q: 'Ich bin sicher, dass er es vergessen hat.', cue: 'Er muss', a: ['Er muss es vergessen haben.'], why: '*Müssen* + Infinitiv Perfekt.' },
      { q: 'Sie behauptet, dass sie nichts gewusst hat.', cue: 'Sie will', a: ['Sie will nichts gewusst haben.'], why: '*Wollen* + Infinitiv Perfekt.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Sie [soll] nichts gewusst haben, sagt sie selbst.', a: ['will'], why: 'She makes the claim: *wollen*.' },
      { s: 'Er [muss] nicht zu Hause sein: das Licht ist aus.', a: ['kann'], why: 'For a conclusion, the negative is *kann nicht*.' },
    ] },
  ],
};
