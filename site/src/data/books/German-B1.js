// German B1 course book (docs/BOOKS.md). Draft: reviewed by a native teacher before it is published.
// Explanations are written in English here and translated in i18n/German-B1.<lang>.json (German included, for
// learners who want the explanations in German); example sentences, exercises and reading texts stay in German.
// In choice items the first option is right; the reader shuffles.
export const BOOK = {
  id: 'German-B1',
  language: 'German',
  level: 'B1',
  review: 'draft',
  units: [
    {
      id: 'u1',
      title: 'Life paths',
      goal: 'Tell the story of your life: moving, training, work and the big moments. Revise the Perfekt, learn the Präteritum of the most important verbs and join sentences with als and wenn.',
      art: 'suitcase',
      tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['perfekt', 'praeteritum', 'als-wenn', 'life-events'], goals: ['foundations'] },
      pages: [
        {
          id: 'p1',
          title: 'The Perfekt: haben or sein?',
          about: 'Talk about the past in conversation.',
          art: 'parrot',
          spreads: [
            [
              { t: 'text', md: 'When Germans talk about the past, they mostly use the **Perfekt**: *haben* or *sein* + the past participle (Partizip II). The participle goes to the **end** of the sentence.' },
              { t: 'examples', items: [
                { s: 'Ich **habe** in Hamburg **studiert**.', n: '*haben* + participle at the end of the sentence.' },
                { s: 'Wir **sind** 2019 nach Wien **gezogen**.', n: 'Moving from A to B: *sein*.' },
                { s: '**Hast** du schon einmal in einer WG **gewohnt**?', n: 'In a question, *haben* comes first.' },
              ] },
            ],
            [
              { t: 'text', md: 'Most verbs form the Perfekt with **haben**. Verbs of movement from A to B (*gehen, fahren, fliegen, ziehen, kommen*) and verbs that show a change of state (*aufwachen, einschlafen, werden, sterben*) take **sein**. *Sein* and *bleiben* take *sein* too.' },
              { t: 'table', caption: 'Partizip II', explain: ['head'], quiz: true, head: ['Infinitive', 'Perfekt'], rows: [
                ['arbeiten', 'hat gearbeitet'],
                ['studieren', 'hat studiert'],
                ['umziehen', 'ist umgezogen'],
                ['anfangen', 'hat angefangen'],
                ['bleiben', 'ist geblieben'],
                ['werden', 'ist geworden'],
                ['kennenlernen', 'hat kennengelernt'],
                ['bekommen', 'hat bekommen'],
              ] },
              { t: 'tip', art: 'owl', md: 'Verbs ending in *-ieren* and verbs with an inseparable prefix (*be-, ver-, er-*) have no *ge-*: *studiert, bekommen, verdient*. In separable verbs, *ge-* goes in the middle: *umgezogen, angefangen*.' },
            ],
            [
              { t: 'ex', kind: 'choice', h: 'Haben or sein? Choose.', items: [
                { q: 'Meine Eltern ___ 1995 nach Deutschland gekommen.', o: ['sind', 'haben', 'ist'], why: '*Kommen* is movement, so *sein*. *Meine Eltern* is plural: *sind*.' },
                { q: 'Ich ___ drei Jahre in einer Bank gearbeitet.', o: ['habe', 'bin', 'hat'], why: '*Arbeiten* forms the Perfekt with *haben*.' },
                { q: 'Nach dem Abitur ___ sie ein Jahr in Spanien geblieben.', o: ['ist', 'hat', 'sind'], why: '*Bleiben* forms the Perfekt with *sein*.' },
                { q: '___ ihr schon einmal in Japan gewesen?', o: ['Seid', 'Habt', 'Ist'], why: '*Sein* forms the Perfekt with *sein*: *ihr seid … gewesen*.' },
              ] },
            ],
            [
              { t: 'ex', kind: 'gap', h: 'Write the past participle.', items: [
                { q: 'Wann hast du deinen Mann ___? (kennenlernen)', a: ['kennengelernt'], why: 'Separable verb: kennen + ge + lernt.' },
                { q: 'Wir sind letztes Jahr ___. (umziehen)', a: ['umgezogen'], why: 'Separable verb: um + ge + zogen.' },
                { q: 'Sie hat Medizin in Leipzig ___. (studieren)', a: ['studiert'], why: 'Verbs ending in *-ieren* have no *ge-*.' },
                { q: 'Ich habe meinen ersten Job mit 17 ___. (bekommen)', a: ['bekommen'], why: 'Inseparable prefix *be-*: no *ge-*.' },
              ] },
            ],
          ],
        },
        {
          id: 'p2',
          title: 'The Präteritum: war, hatte, konnte',
          about: 'The past of the most important verbs.',
          art: 'cactus',
          spreads: [
            [
              { t: 'text', md: 'With *sein*, *haben* and the modal verbs, Germans almost always use the **Präteritum**, even when speaking. So people say *Ich war müde* rather than *Ich bin müde gewesen*.' },
              { t: 'table', caption: 'Präteritum', quiz: true, head: ['', 'sein', 'haben', 'können', 'müssen', 'wollen'], rows: [
                ['ich', 'war', 'hatte', 'konnte', 'musste', 'wollte'],
                ['du', 'warst', 'hattest', 'konntest', 'musstest', 'wolltest'],
                ['er / sie / es', 'war', 'hatte', 'konnte', 'musste', 'wollte'],
                ['wir', 'waren', 'hatten', 'konnten', 'mussten', 'wollten'],
                ['ihr', 'wart', 'hattet', 'konntet', 'musstet', 'wolltet'],
                ['sie / Sie', 'waren', 'hatten', 'konnten', 'mussten', 'wollten'],
              ] },
            ],
            [
              { t: 'tip', art: 'owl', md: '*Ich* and *er/sie/es* have the same form: *ich war, er war; ich konnte, sie konnte*. The modal verbs lose their umlaut in the Präteritum: *können → konnte, müssen → musste*.' },
              { t: 'text', md: 'In written texts such as newspapers, novels and biographies, other verbs often appear in the Präteritum too: *Sie zog nach Berlin. Er arbeitete als Koch.*' },
              { t: 'examples', items: [
                { s: 'Als Kind **wollte** ich Pilot werden.', n: '*ich wollte*: no ending after *ich*.' },
                { s: 'Gestern **hatten** wir keine Zeit.', n: '*wir hatten*' },
              ] },
            ],
            [
              { t: 'ex', kind: 'gap', h: 'Write the verb in the Präteritum.', items: [
                { q: 'Wir ___ keine Zeit, deshalb sind wir nicht gekommen. (haben)', a: ['hatten'], why: '*wir hatten*' },
                { q: '___ du gestern auch auf der Party? (sein)', a: ['warst'], why: '*du warst*' },
                { q: 'Mit 18 ___ sie schon gut Englisch sprechen. (können)', a: ['konnte'], why: '*sie konnte*, without the umlaut.' },
                { q: 'Ihr ___ am Wochenende arbeiten, oder? (müssen)', a: ['musstet'], why: '*ihr musstet*, without the umlaut.' },
              ] },
            ],
            [
              { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
                { q: 'Letztes Jahr ___ wir noch kein Auto.', o: ['hatten', 'hattet', 'hätten'], why: '*wir hatten*. *Hätten* is the Konjunktiv II.' },
                { q: 'Warum ___ du nicht kommen?', o: ['konntest', 'konnte', 'kanntest'], why: '*du konntest*. *Kanntest* comes from *kennen*.' },
                { q: 'Meine Großmutter ___ Lehrerin.', o: ['war', 'wart', 'waren'], why: '*sie war*' },
              ] },
            ],
          ],
        },
        {
          id: 'p3',
          title: 'Als or wenn?',
          about: 'Join sentences about the past.',
          art: 'sun',
          spreads: [
            [
              { t: 'text', md: '**Als** and **wenn** both start a clause about time. In that clause, the conjugated verb goes to the **end**.' },
              { t: 'table', caption: 'Als or wenn?', explain: ['head', 'col0'], head: ['', 'once', 'many times, always'], rows: [
                ['In the past', 'als', 'wenn'],
                ['Now and in the future', 'wenn', 'wenn'],
              ] },
              { t: 'examples', items: [
                { s: '**Als** ich zehn Jahre alt **war**, sind wir nach Köln gezogen.', n: 'Once, in the past: *als*.' },
                { s: '**Wenn** wir Oma **besuchten**, gab es immer Kuchen.', n: 'Many times in the past: *wenn*.' },
                { s: '**Wenn** ich nach Hause **komme**, rufe ich dich an.', n: 'Now or in the future: always *wenn*.' },
              ] },
            ],
            [
              { t: 'tip', art: 'owl', md: 'When the sentence starts with the *als* or *wenn* clause, the main clause starts with its verb: *Als ich zehn war, **sind** wir umgezogen.* Verb, comma, verb.' },
              { t: 'ex', kind: 'spot', h: 'Tap the verb at the end of each als or wenn clause.', items: [
                { s: 'Als ich nach Berlin [kam], kannte ich niemanden.', why: '*kam* closes the *als* clause.' },
                { s: 'Wenn es [regnete], sind wir immer zu Hause geblieben.', why: '*regnete* closes the *wenn* clause.' },
                { s: 'Ich war glücklich, als ich die Stelle [bekam].', why: 'Here the *als* clause comes second, and *bekam* still goes to its end.' },
              ] },
            ],
            [
              { t: 'ex', kind: 'choice', h: 'Als or wenn?', items: [
                { q: '___ ich 2015 nach Berlin kam, kannte ich niemanden.', o: ['Als', 'Wenn'], why: 'Once, in the past: *als*.' },
                { q: '___ es regnete, sind wir immer zu Hause geblieben.', o: ['Wenn', 'Als'], why: '*Immer*, many times: *wenn*.' },
                { q: 'Ruf mich an, ___ du angekommen bist.', o: ['wenn', 'als'], why: 'It happens in the future: *wenn*.' },
                { q: '___ meine Tochter geboren wurde, war ich 30.', o: ['Als', 'Wenn'], why: 'Once, in the past: *als*.' },
              ] },
            ],
            [
              { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
                { a: 'Als ich jung war, wohnte ich in Graz.', why: 'The verb goes to the end of the *als* clause, then the main clause starts with its verb.' },
                { a: 'Wenn ich Zeit habe, lese ich gern.', why: 'Verb, comma, verb.' },
                { a: 'Ich war glücklich, als ich die Stelle bekam.', why: 'The *als* clause comes second; *bekam* goes to its end.' },
              ] },
            ],
          ],
        },
        {
          id: 'p4',
          title: 'Words for your life story',
          about: 'The big events in a life.',
          art: 'dog',
          spreads: [
            [
              { t: 'text', md: 'Many life events go with a fixed verb. Always learn the noun together with its verb.' },
              { t: 'table', caption: 'Life events', explain: ['head'], quiz: true, head: ['Phrase', 'Example'], rows: [
                ['geboren sein', 'Ich bin 1990 in Sevilla geboren.'],
                ['zur Schule gehen', 'Sie ist in Bremen zur Schule gegangen.'],
                ['eine Ausbildung machen', 'Ich habe eine Ausbildung als Koch gemacht.'],
                ['eine Stelle finden', 'Nach dem Studium hat er schnell eine Stelle gefunden.'],
                ['umziehen', 'Wir sind dreimal umgezogen.'],
                ['sich verlieben', 'Sie haben sich im Urlaub verliebt.'],
                ['heiraten', 'Meine Eltern haben 1985 geheiratet.'],
                ['ein Kind bekommen', 'Meine Schwester hat gerade ein Kind bekommen.'],
                ['in Rente gehen', 'Mein Vater ist letztes Jahr in Rente gegangen.'],
              ] },
              { t: 'tip', art: 'owl', md: 'You *machen* an Ausbildung and the Abitur, but you *bekommen* a child and *finden* a job (eine Stelle).' },
            ],
            [
              { t: 'ex', kind: 'match', h: 'What goes together?', pairs: [
                ['eine Ausbildung', 'machen'],
                ['eine Stelle', 'finden'],
                ['ein Kind', 'bekommen'],
                ['in Rente', 'gehen'],
                ['nach Kanada', 'auswandern'],
              ] },
            ],
            [
              { t: 'ex', kind: 'gap', h: 'Write the past participle.', items: [
                { q: 'Meine Eltern haben 1985 ___. (heiraten)', a: ['geheiratet'], why: '*heiraten → hat geheiratet*' },
                { q: 'Nach dem Studium habe ich schnell eine Stelle ___. (finden)', a: ['gefunden'], why: '*finden → hat gefunden*' },
                { q: 'Mein Opa ist mit 65 in Rente ___. (gehen)', a: ['gegangen'], why: '*gehen → ist gegangen*' },
                { q: 'Wir haben uns im Sommer 2010 ___. (sich verlieben)', a: ['verliebt'], why: 'Inseparable prefix *ver-*: no *ge-*.' },
              ] },
            ],
          ],
        },
        {
          id: 'p5',
          title: 'A life in three cities',
          about: 'Read a life story and check the details.',
          art: 'suitcase',
          spreads: [
            [
              { t: 'reading', title: 'Ein Leben in drei Städten', md: 'Karim Haddad ist 1975 in Tunis geboren. Seine Eltern hatten ein kleines Geschäft für Stoffe, und Karim half nach der Schule oft im Laden. Mit 20 zog er nach Lyon, weil er dort Maschinenbau studieren wollte. Das Studium war schwer, denn am Anfang konnte er kaum Französisch.\n\nNach dem Studium fand Karim eine Stelle bei einer Firma in Stuttgart. Dort lernte er Deutsch, zuerst in einem Abendkurs, dann bei der Arbeit. Als er 2004 seine Frau Petra kennenlernte, sprach er schon fließend.\n\nHeute wohnt Karim mit seiner Familie in Stuttgart. Er hat in seinem Leben drei Sprachen gelernt und in drei Städten gewohnt. „Wenn ich Heimweh habe“, sagt er, „koche ich das Couscous meiner Mutter. Dann bin ich für eine Stunde wieder in Tunis.“' },
            ],
            [
              { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
                { q: 'Karim hat als Kind im Geschäft seiner Eltern geholfen.', a: 't', why: '*Er half nach der Schule oft im Laden.*' },
                { q: 'Karim ist nach Lyon gezogen, um Französisch zu lernen.', a: 'f', why: 'He wanted to study mechanical engineering there.' },
                { q: 'Am Anfang des Studiums sprach Karim gut Französisch.', a: 'f', why: '*Am Anfang konnte er kaum Französisch.*' },
                { q: 'Petra kommt aus Stuttgart.', a: 'ng', why: 'The text does not say where Petra is from.' },
                { q: 'Karim fährt jedes Jahr nach Tunis.', a: 'ng', why: 'The text does not say this.' },
              ] },
            ],
            [
              { t: 'ex', kind: 'choice', h: 'Look at the verbs in the text.', items: [
                { q: 'The text says „zog“, not „ist gezogen“. Why?', o: ['It is a written text, a biography.', 'Ziehen has no Perfekt.', 'The sentence is in the future.'], why: 'Written texts often use the Präteritum.' },
                { q: '„Als er 2004 seine Frau kennenlernte“: why als?', o: ['It happened once, in the past.', 'It happened often.', 'It happens in the future.'], why: 'Once, in the past: *als*.' },
                { q: '„Wenn ich Heimweh habe, koche ich …“: what does it mean?', o: ['Every time he is homesick, he cooks couscous.', 'He was homesick only once.', 'He never cooks couscous.'], why: '*Wenn* in the present: every time.' },
              ] },
            ],
          ],
        },
      ],
      test: [
        { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
          { q: 'Wir ___ letzten Sommer nach Portugal geflogen.', o: ['sind', 'haben', 'waren'], why: '*Fliegen* is movement: *sein*.' },
          { q: '___ ich klein war, wollte ich Ärztin werden.', o: ['Als', 'Wenn', 'Wann'], why: 'Once, in the past: *als*.' },
          { q: 'Sie hat eine Ausbildung als Friseurin ___.', o: ['gemacht', 'getan', 'gebildet'], why: '*eine Ausbildung machen*' },
          { q: 'Gestern ___ ich keine Zeit.', o: ['hatte', 'hat', 'hattest'], why: '*ich hatte*' },
          { q: '___ ich Urlaub habe, schlafe ich lange.', o: ['Wenn', 'Als', 'Ob'], why: 'Present, every time: *wenn*.' },
        ] },
        { t: 'ex', kind: 'gap', h: 'Write the right form.', items: [
          { q: 'Mein Bruder ist nach Australien ___. (auswandern)', a: ['ausgewandert'], why: 'Separable verb: aus + ge + wandert.' },
          { q: 'Wir ___ den Zug nicht nehmen, weil er ausgefallen ist. (können, Präteritum)', a: ['konnten'], why: '*wir konnten*' },
          { q: 'Hast du in Berlin ___? (studieren)', a: ['studiert'], why: 'Verbs ending in *-ieren* have no *ge-*.' },
          { q: 'Ihr ___ nach der Reise sehr müde. (sein, Präteritum)', a: ['wart'], why: '*ihr wart*' },
        ] },
        { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
          { a: 'Als ich nach Wien kam, war ich zwanzig.', why: 'Verb at the end of the *als* clause, then the verb of the main clause.' },
          { a: 'Wir sind letztes Jahr umgezogen.', why: 'The participle goes to the end.' },
        ] },
        { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
          { q: '', o: ['Als ich 18 war, habe ich den Führerschein gemacht.', 'Als ich 18 war, ich habe den Führerschein gemacht.', 'Wenn ich 18 war, habe ich den Führerschein gemacht.'], why: 'Once, in the past: *als*. After the comma, the verb comes first.' },
          { q: '', o: ['Sie ist in Hamburg geblieben.', 'Sie hat in Hamburg geblieben.', 'Sie ist in Hamburg gebleibt.'], why: '*bleiben → ist geblieben*' },
        ] },
      ],
    },
    { id: 'u2', title: 'Work and careers', planned: true, plan: { goal: 'Talk about work and training, and give reasons and contrasts.', lessons: ['Subordinate clauses with weil, obwohl, dass, wenn; verb at the end', 'deshalb, trotzdem: main clauses with inversion', 'Applying for a job: Lebenslauf, Anschreiben, Vorstellungsgespräch', 'Reading: a job advert and an application email'] } },
    { id: 'u3', title: 'Home and neighbours', planned: true, plan: { goal: 'Live with neighbours, flatmates and house rules.', lessons: ['Relative clauses in the nominative, accusative and dative', 'Verbs with prepositions (sich beschweren über, sich kümmern um) and da-/wo- words', 'House rules, complaints and agreements with neighbours', 'Reading: a Hausordnung and a note to a neighbour'] } },
    { id: 'u4', title: 'Healthy living', planned: true, plan: { goal: 'Talk about health and give advice.', lessons: ['Konjunktiv II for advice and wishes (Sie sollten…, Ich würde…, An deiner Stelle…)', 'Reflexive verbs with the accusative and dative (sich erholen, sich die Hände waschen)', 'Health, fitness and nutrition vocabulary; at the doctor in more detail', 'Reading: an article about sleep'] } },
    { id: 'u5', title: 'Media in everyday life', planned: true, plan: { goal: 'Talk about media and how things are done.', lessons: ['The passive in the present and the Präteritum (wird gemacht, wurde gemacht)', 'Indirect questions (ob, wann, wie…)', 'Media vocabulary: news, streaming, social media', 'Reading: a survey about media habits'] } },
    { id: 'u6', title: 'On the move', planned: true, plan: { goal: 'Travel and commute, and deal with problems on the way.', lessons: ['Prepositions with the genitive: wegen, trotz, während, statt', 'Indefinite pronouns and n-declension basics (der Kollege, den Kollegen)', 'Public transport, delays, tickets; asking for help', 'Reading: announcements and a commuter’s blog'] } },
    { id: 'u7', title: 'Environment and nature', planned: true, plan: { goal: 'Talk about the environment and say what you want to achieve.', lessons: ['Purpose: um … zu and damit', 'Futur I for plans, predictions and assumptions', 'Environment vocabulary and collocations (Müll trennen, Energie sparen)', 'Reading: an interview with a climate activist'] } },
    { id: 'u8', title: 'Festivals and traditions', planned: true, plan: { goal: 'Talk about festivals and traditions in detail.', lessons: ['Adjective endings after der, ein and without an article: a review', 'Infinitive with zu (Ich habe vor, … zu …; Es macht Spaß, …)', 'Festivals, customs and congratulations in German-speaking countries', 'Reading: Advent, Karneval and other traditions'] } },
  ],
};
