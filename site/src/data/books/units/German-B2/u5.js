// German B2, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'History and memory',
  goal: 'Talk about the past in order and in detail: say what had happened before, join events with time clauses and share your memories.',
  art: 'ghost',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['plusquamperfekt', 'time-clauses', 'als-wenn-wann', 'memories', 'biography'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'The Plusquamperfekt',
      about: 'Say what had already happened before another moment in the past.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'The **Plusquamperfekt** shows that something happened **before** another event in the past. It is formed like the Perfekt, but the helping verb is in the Präteritum: *hatte* or *war* + the past participle (Partizip II) at the end.' },
          { t: 'examples', items: [
            { s: 'Als wir am Bahnhof ankamen, **war** der Zug schon **abgefahren**.', n: 'First the train left, then we arrived. The earlier event is in the Plusquamperfekt.' },
            { s: 'Vor ihrem Umzug nach Graz **hatte** Mei nie Deutsch **gelernt**.', n: '*Lernen* takes *haben*, so *hatte … gelernt*.' },
            { s: 'Er war müde, weil er schlecht **geschlafen hatte**.', n: 'In a subordinate clause, the participle comes first and *hatte* goes to the very end.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Plusquamperfekt', quiz: true, head: ['', 'arbeiten', 'ankommen'], rows: [
            ['ich', 'hatte gearbeitet', 'war angekommen'],
            ['du', 'hattest gearbeitet', 'warst angekommen'],
            ['er / sie / es', 'hatte gearbeitet', 'war angekommen'],
            ['wir', 'hatten gearbeitet', 'waren angekommen'],
            ['ihr', 'hattet gearbeitet', 'wart angekommen'],
            ['sie / Sie', 'hatten gearbeitet', 'waren angekommen'],
          ] },
          { t: 'tip', art: 'owl', md: 'The choice between *haben* and *sein* is the same as in the Perfekt: *ich bin gegangen → ich war gegangen*, *ich habe gelesen → ich hatte gelesen*.' },
          { t: 'text', md: 'In everyday speech, many people use the Perfekt when the order of events is clear anyway. In written stories, reports and biographies, and after *nachdem*, the Plusquamperfekt is the normal choice.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Hatte or war? Choose.', items: [
            { q: 'Als ich nach Hause kam, ___ meine Mitbewohnerin schon ausgezogen.', o: ['war', 'hatte', 'wurde'], why: '*Ausziehen* is a change of place, so it takes *sein*: *sie war ausgezogen*.' },
            { q: 'Der Film ___ schon angefangen, als wir ins Kino kamen.', o: ['hatte', 'war', 'wurde'], why: '*Anfangen* takes *haben*: *der Film hatte angefangen*.' },
            { q: 'Wir ___ uns vorher noch nie gesehen.', o: ['hatten', 'waren', 'wurden'], why: '*Sehen* takes *haben*: *wir hatten uns gesehen*.' },
            { q: 'Nachdem die Gäste gegangen ___, räumten wir die Küche auf.', o: ['waren', 'hatten', 'wurden'], why: '*Gehen* takes *sein*. In the *nachdem* clause, the helping verb goes to the end.' },
            { q: 'Sie konnte nicht schlafen, weil sie zu viel Kaffee getrunken ___.', o: ['hatte', 'war', 'wurde'], why: '*Trinken* takes *haben*: *sie hatte getrunken*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the past participle.', items: [
            { q: 'Er war müde, weil er die ganze Nacht ___ hatte. (arbeiten)', a: ['gearbeitet'], why: 'A regular verb: *ge- + arbeit + -et*.' },
            { q: 'Als die Polizei kam, war der Dieb schon ___. (fliehen)', a: ['geflohen'], why: '*fliehen – floh – ist geflohen*: an irregular verb of movement.' },
            { q: 'Ich hatte den Brief schon ___, als du anriefst. (lesen)', a: ['gelesen'], why: '*lesen – las – hat gelesen*' },
            { q: 'Bis 1990 war die Familie dreimal ___. (umziehen)', a: ['umgezogen'], why: 'A separable verb: *um + ge + zogen*.' },
            { q: 'Sie hatte ihren Schlüssel im Büro ___. (vergessen)', a: ['vergessen'], why: 'The inseparable prefix *ver-* means there is no *ge-*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap both parts of the Plusquamperfekt: the helping verb and the participle.', items: [
            { s: 'Wir [hatten] lange [gewartet], aber der Bus ist nicht gekommen.', why: '*hatten gewartet* is the Plusquamperfekt. *ist gekommen* is the Perfekt.' },
            { s: 'Sie hat mir erzählt, dass sie nie in Afrika [gewesen] [war].', why: 'In the *dass* clause, *gewesen war* stands at the end. *hat erzählt* is the Perfekt.' },
            { s: 'Als ich ankam, [war] das Essen schon kalt [geworden].', why: '*Werden* takes *sein*: *war … geworden*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Wir hatten uns noch nie gesehen.', why: '*Hatten* in second position, the participle at the end.' },
            { a: 'Sie war gerade eingeschlafen, als das Telefon klingelte.', why: 'The earlier event is in the Plusquamperfekt; *klingelte* goes to the end of the *als* clause.' },
            { a: 'Der Unterricht hatte schon begonnen, als ich kam.', why: 'First the lesson began, then I came: *hatte begonnen*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Time clauses: nachdem, bevor, seitdem, sobald, während',
      about: 'Put events in order with time connectors.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'These connectors start a **subordinate clause**, so the conjugated verb goes to the **end** of the clause. Each one shows how two events are related in time.' },
          { t: 'table', caption: 'Time connectors', explain: ['head', 'col1'], head: ['Connector', 'Meaning', 'Example'], rows: [
            ['nachdem', 'after: the *nachdem* clause happens first', 'Nachdem sie gegessen hatte, rief sie an.'],
            ['bevor', 'before: the main clause happens first', 'Bevor ich losfahre, tanke ich.'],
            ['seitdem / seit', 'since: from a moment in the past until now', 'Seitdem ich in Wien wohne, fahre ich Rad.'],
            ['sobald', 'as soon as: immediately after', 'Sobald ich zu Hause bin, rufe ich dich an.'],
            ['während', 'while: at the same time', 'Während er kochte, hörte er Radio.'],
          ] },
          { t: 'tip', art: 'owl', md: '*Während* is also a preposition with the genitive: *während des Essens*. *Seit* works as a connector too: *Seit ich hier wohne, …*' },
        ],
        [
          { t: 'text', md: 'With **nachdem**, the clause is one step further in the past than the main clause. For the past: Plusquamperfekt in the *nachdem* clause, Präteritum or Perfekt in the main clause. For the present or the future: Perfekt in the *nachdem* clause, Präsens or Futur in the main clause.' },
          { t: 'table', caption: 'Tenses with nachdem', explain: ['head'], head: ['nachdem clause', 'main clause'], rows: [
            ['Nachdem wir gegessen hatten,', 'gingen wir spazieren.'],
            ['Nachdem wir gegessen haben,', 'gehen wir spazieren.'],
          ] },
          { t: 'tip', art: 'owl', md: '*Sobald* often follows the same pattern: *Sobald ich die Ergebnisse bekommen habe, schicke ich sie dir.* With *seitdem*, the main clause is usually in the Präsens, because the situation is still true.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the connector.', items: [
            { q: '___ ich das Abitur gemacht hatte, reiste ich ein Jahr durch Südamerika.', o: ['Nachdem', 'Während', 'Bevor'], why: 'First the Abitur, then the trip. The Plusquamperfekt in the clause also points to *nachdem*.' },
            { q: '___ Aylin in Hamburg wohnt, geht sie jeden Sonntag an die Elbe.', o: ['Seitdem', 'Nachdem', 'Bevor'], why: 'From the move until now: *seitdem*, with the Präsens.' },
            { q: 'Ruf mich bitte an, ___ du gelandet bist.', o: ['sobald', 'während', 'seitdem'], why: 'Immediately after landing: *sobald*.' },
            { q: '___ sie kochte, hörte sie Radio.', o: ['Während', 'Nachdem', 'Seitdem'], why: 'Two things at the same time: *während*.' },
            { q: 'Ich muss noch tanken, ___ wir losfahren.', o: ['bevor', 'nachdem', 'seitdem'], why: 'First fill the tank, then leave. The main clause happens first, so *bevor*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the helping verb for the nachdem clause.', items: [
            { q: 'Nachdem wir gegessen ___, gingen wir spazieren.', a: ['hatten'], why: 'The main clause is in the Präteritum, so the Plusquamperfekt: *hatten gegessen*.' },
            { q: 'Nachdem sie angekommen ___, rief sie ihre Mutter an.', a: ['war'], why: '*Ankommen* takes *sein*; the main clause is in the past, so *war*.' },
            { q: 'Nachdem ich die Mail gelesen ___, antworte ich dir.', a: ['habe'], why: 'The main clause is in the Präsens, so the Perfekt: *habe gelesen*.' },
            { q: 'Nachdem die Gäste gegangen ___, räume ich auf.', a: ['sind'], why: 'Präsens in the main clause, and *gehen* takes *sein*: *sind gegangen*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Seitdem ich hier wohne, fahre ich mit dem Rad.', why: 'The verb goes to the end of the *seitdem* clause, then the main clause starts with its verb.' },
            { a: 'Ich rufe dich an, sobald ich zu Hause bin.', why: 'The *sobald* clause comes second; *bin* goes to its end.' },
            { a: 'Bevor er nach Japan flog, lernte er etwas Japanisch.', why: 'Verb at the end of the *bevor* clause, comma, then the verb of the main clause.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Memories: als, wenn, wann',
      about: 'Talk about memories and choose between als, wenn and wann.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: '**Als** is for one event or one period in the past. **Wenn** is for things that happened again and again in the past, and for the present and the future. **Wann** is a question word: it asks for a time, in direct and in indirect questions.' },
          { t: 'examples', items: [
            { s: '**Als** ich zum ersten Mal in Deutschland war, verstand ich kaum etwas.', n: 'One period in the past: *als*.' },
            { s: '**Wenn** wir in den Ferien bei Oma waren, durften wir lange aufbleiben.', n: 'Every holiday, again and again: *wenn*.' },
            { s: 'Weißt du noch, **wann** wir uns kennengelernt haben?', n: 'An indirect question about a time: *wann*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'A quick test: if *jedes Mal, wenn* (every time) fits, use *wenn*. If the clause asks for a time (*An welchem Tag? Um wie viel Uhr?*), use *wann*.' },
        ],
        [
          { t: 'text', md: 'These phrases help you to talk about memories. Note the preposition: **sich erinnern an** + Akkusativ. Instead of *an* + a thing, you can say *daran*.' },
          { t: 'table', caption: 'Talking about memories', explain: ['head', 'col1'], quiz: true, head: ['Phrase', 'Use'], rows: [
            ['Ich erinnere mich gut an …', 'you remember something clearly'],
            ['Ich kann mich noch daran erinnern, wie …', 'you remember how something happened'],
            ['Ich weiß noch genau, dass …', 'you are sure about a detail'],
            ['Damals …', 'at that time'],
            ['Das ist mir bis heute in Erinnerung geblieben.', 'you have never forgotten it'],
            ['Wenn ich daran zurückdenke, …', 'you think back to it now'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Der erste Tag', lines: [
            { who: 'Elif', s: 'Erinnerst du dich noch an deinen ersten Tag in Leipzig?' },
            { who: 'Tomasz', s: 'Ja, sehr gut. Als ich am Bahnhof ankam, regnete es in Strömen.' },
            { who: 'Elif', s: 'Und wer hat dich abgeholt?' },
            { who: 'Tomasz', s: 'Niemand! Mein Vermieter hatte unseren Termin vergessen. Ich musste zwei Stunden in einem Café warten.' },
            { who: 'Elif', s: 'Oh nein. Weißt du noch, wann er endlich kam?' },
            { who: 'Tomasz', s: 'Gegen zehn Uhr abends. Aber wenn ich heute daran zurückdenke, muss ich lachen.' },
            { who: 'Elif', s: 'Das kenne ich. Damals war alles neu und ein bisschen chaotisch.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences with sich erinnern.', items: [
            { q: 'Erinnerst du dich noch ___ unseren ersten Urlaub?', a: ['an'], why: '*sich erinnern an* + Akkusativ.' },
            { q: 'Ich erinnere ___ nicht mehr an seinen Namen.', a: ['mich'], why: 'The verb is reflexive: *ich erinnere mich*.' },
            { q: 'Das Konzert? Ja, ich kann mich gut ___ erinnern.', a: ['daran'], why: 'Instead of *an das Konzert*, you say *daran*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Als, wenn or wann?', items: [
            { q: '___ ich klein war, wohnten wir in einem Dorf.', o: ['Als', 'Wenn', 'Wann'], why: 'One period in the past: *als*.' },
            { q: '___ es im Winter schneite, bauten wir einen Schneemann.', o: ['Wenn', 'Als', 'Wann'], why: 'Every winter, again and again: *wenn*.' },
            { q: 'Ich weiß nicht mehr, ___ das Konzert war.', o: ['wann', 'als', 'wenn'], why: 'An indirect question about a time: *wann*.' },
            { q: '___ ich 2012 mein Studium beendete, zog ich nach Basel.', o: ['Als', 'Wenn', 'Wann'], why: 'One event at a fixed time in the past: *als*.' },
            { q: '___ ich an meine Schulzeit denke, werde ich nostalgisch.', o: ['Wenn', 'Als', 'Wann'], why: 'In the present, every time: *wenn*.' },
            { q: 'Kannst du mir sagen, ___ der Zug abfährt?', o: ['wann', 'wenn', 'als'], why: 'You ask for a time: *wann*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the two halves of each memory.', pairs: [
            ['Ich erinnere mich gern', 'an meine Schulzeit.'],
            ['Damals gab es', 'noch keine Smartphones.'],
            ['Jedes Mal, wenn ich das Lied höre,', 'denke ich an den Sommer 1999.'],
            ['Das ist mir', 'bis heute in Erinnerung geblieben.'],
            ['Ich weiß nicht mehr,', 'wann genau das war.'],
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A life for music',
      about: 'Read a short biography and follow the order of events.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Clara Schumann: ein Leben für die Musik', md: 'Clara Wieck wurde 1819 in Leipzig geboren. Ihr Vater, ein ehrgeiziger Klavierlehrer, unterrichtete sie schon als kleines Kind. Er hatte früh beschlossen, dass seine Tochter eine berühmte Pianistin werden sollte. Mit neun Jahren gab Clara ihr erstes öffentliches Konzert, und bald reiste sie mit ihrem Vater durch Europa.\n\nSchon als Kind lernte sie Robert Schumann kennen, einen jungen Musiker, der später bei ihrem Vater Klavierunterricht nahm. Als die beiden heiraten wollten, war der Vater dagegen. Erst nachdem ein Gericht ihnen Recht gegeben hatte, konnten sie 1840 heiraten, einen Tag vor Claras 21. Geburtstag.\n\nDas Paar bekam acht Kinder. Clara führte den Haushalt, organisierte Konzertreisen und komponierte selbst, obwohl sie oft kaum Zeit dafür hatte. Robert war schon länger krank gewesen, als er 1854 in eine Klinik kam. Zwei Jahre später starb er.\n\nNach seinem Tod musste Clara allein für die Familie sorgen. Sie gab weiterhin Konzerte in vielen Ländern Europas und spielte dabei oft die Werke ihres Mannes. Eng verbunden blieb sie mit dem Komponisten Johannes Brahms, den die Schumanns 1853 kennengelernt hatten. Ab 1878 unterrichtete sie außerdem Klavier in Frankfurt am Main.\n\nClara Schumann starb 1896 in Frankfurt. Viele Menschen in Deutschland kannten ihr Gesicht noch lange danach: Bis zur Einführung des Euro war ihr Porträt auf dem Hundertmarkschein zu sehen.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Claras Vater war Klavierlehrer.', a: 't', why: '*Ihr Vater, ein ehrgeiziger Klavierlehrer, …*' },
            { q: 'Claras Vater war mit der Hochzeit zuerst nicht einverstanden.', a: 't', why: '*Als die beiden heiraten wollten, war der Vater dagegen.*' },
            { q: 'Clara hatte keine Zeit zum Komponieren und schrieb deshalb keine Musik.', a: 'f', why: 'She composed, *obwohl sie oft kaum Zeit dafür hatte*.' },
            { q: 'Robert Schumann wurde erst krank, nachdem er in die Klinik gekommen war.', a: 'f', why: '*Robert war schon länger krank gewesen, als er in eine Klinik kam*: the illness came first.' },
            { q: 'Clara lernte Brahms erst nach dem Tod ihres Mannes kennen.', a: 'f', why: 'The Schumanns met Brahms in 1853. Robert died in 1856.' },
            { q: 'Clara spielte am liebsten Werke von Brahms.', a: 'ng', why: 'The text says she often played her husband’s works. It says nothing about her favourite.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language of the text.', items: [
            { q: '„Er hatte früh beschlossen, dass …“: why the Plusquamperfekt?', o: ['The decision came before the lessons and the concerts.', 'The decision came after her first concert.', 'It is a wish, not a fact.'], why: 'The Plusquamperfekt marks the earlier event: first the decision, then the career.' },
            { q: '„Erst nachdem ein Gericht ihnen Recht gegeben hatte, konnten sie heiraten.“ What happened first?', o: ['The court made its decision.', 'They got married.', 'Clara turned 21.'], why: 'The *nachdem* clause in the Plusquamperfekt is the earlier event.' },
            { q: '„Bis zur Einführung des Euro war ihr Porträt auf dem Hundertmarkschein zu sehen.“ What does it mean?', o: ['Her picture was on a banknote until the euro came.', 'Her picture is on a euro note today.', 'She designed a banknote herself.'], why: '*Bis zur Einführung des Euro*: until the euro was introduced. *Sein + zu* + infinitive: it could be seen.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Als wir ankamen, ___ das Konzert schon begonnen.', o: ['hatte', 'war', 'ist'], why: '*Beginnen* takes *haben*: *hatte begonnen*.' },
      { q: '___ er in Rente ist, hat er endlich Zeit für seinen Garten.', o: ['Seitdem', 'Bevor', 'Als'], why: 'From a moment in the past until now: *seitdem*.' },
      { q: 'Ich weiß nicht mehr, ___ ich ihn zuletzt gesehen habe.', o: ['wann', 'als', 'wenn'], why: 'An indirect question about a time: *wann*.' },
      { q: '___ ich ein Kind war, hatten wir keinen Fernseher.', o: ['Als', 'Wenn', 'Wann'], why: 'One period in the past: *als*.' },
      { q: 'Nachdem sie ihr Studium ___ hatte, fand sie sofort eine Stelle.', o: ['abgeschlossen', 'abschließen', 'abschloss'], why: 'The Plusquamperfekt needs the participle: *hatte abgeschlossen*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Nachdem wir den Film gesehen ___, diskutierten wir lange.', a: ['hatten'], why: 'Past main clause, so the Plusquamperfekt: *hatten gesehen*.' },
      { q: 'Bis zu seinem Umzug ___ er nie allein gewohnt.', a: ['hatte'], why: '*Wohnen* takes *haben*: *er hatte gewohnt*.' },
      { q: 'Erinnerst du dich ___ den Namen des Hotels?', a: ['an'], why: '*sich erinnern an* + Akkusativ.' },
      { q: 'Als ich zurückkam, war mein Fahrrad ___. (verschwinden)', a: ['verschwunden'], why: '*verschwinden – verschwand – ist verschwunden*' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Sobald der Regen aufhört, gehen wir los.', why: 'Verb at the end of the *sobald* clause, then the verb of the main clause.' },
      { a: 'Als ich aufwachte, war es schon hell.', why: 'Verb, comma, verb.' },
      { a: 'Während ich arbeitete, schlief das Baby.', why: '*Während*: two things at the same time.' },
    ] },
    { t: 'ex', kind: 'spot', h: 'Tap the word that is wrong.', items: [
      { s: 'Nachdem ich gefrühstückt [habe], ging ich zur Arbeit.', why: 'The main clause is in the past, so the Plusquamperfekt: *hatte gefrühstückt*.' },
      { s: '[Wenn] ich 2015 nach Kiel zog, kannte ich dort niemanden.', why: 'One event in the past: *Als*.' },
      { s: 'Der Zug [hatte] schon abgefahren, als wir kamen.', why: '*Abfahren* takes *sein*: *war abgefahren*.' },
    ] },
  ],
};
