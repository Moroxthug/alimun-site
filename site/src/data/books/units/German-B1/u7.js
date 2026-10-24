// German B1, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'Environment and nature',
  goal: 'Talk about the environment and say what you want to achieve. Give a purpose with um … zu and damit, talk about plans, predictions and assumptions with the Futur I, and learn the words for saving energy and sorting waste.',
  art: 'sun',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['um-zu-damit', 'futur-1', 'environment', 'recycling'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Um … zu and damit',
      about: 'Say what you want to achieve.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To say **what for** you do something, use *um … zu* or *damit*. The purpose clause comes after a comma. In an *um … zu* clause, *zu* + infinitive goes to the **end**. In a *damit* clause, the conjugated verb goes to the **end**.' },
          { t: 'examples', items: [
            { s: 'Ich fahre mit dem Rad, **um** Geld **zu sparen**.', n: 'The same person does both things (*ich*): *um … zu* + infinitive.' },
            { s: 'Wir trennen den Müll, **damit** man ihn recyceln **kann**.', n: 'Two different subjects (*wir* and *man*): *damit*, with the verb at the end.' },
            { s: 'Sie steht früh auf, **um** den Zug nicht **zu verpassen**.', n: '*Nicht* comes before *zu* + infinitive.' },
            { s: 'Ich erkläre es dir, **damit** du es **verstehst**.', n: 'Two different subjects (*ich* and *du*): *damit*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Um … zu or damit?', explain: ['col0', 'col1', 'col2'], head: ['', 'um … zu', 'damit'], rows: [
            ['Subject', 'the same in both parts', 'different (or the same)'],
            ['End of the clause', '*zu* + infinitive', 'the conjugated verb'],
          ] },
          { t: 'tip', art: 'owl', md: 'With separable verbs, *zu* goes in the middle: *um das Licht auszuschalten, um früh aufzustehen*. When both parts have the same subject, *um … zu* sounds more natural than *damit*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Um or damit?', items: [
            { q: 'Ich kaufe Gemüse aus der Region, ___ die Umwelt zu schützen.', o: ['um', 'damit'], why: 'The clause ends with *zu schützen*: *um … zu*.' },
            { q: 'Wir lassen das Auto stehen, ___ unsere Kinder saubere Luft haben.', o: ['damit', 'um'], why: 'Different subject (*unsere Kinder*) and the verb *haben* at the end: *damit*.' },
            { q: 'Mein Nachbar baut Solarzellen auf sein Dach, ___ weniger Strom zu kaufen.', o: ['um', 'damit'], why: 'The clause ends with *zu kaufen*: *um … zu*.' },
            { q: 'Ich erkläre es dir noch einmal, ___ du es verstehst.', o: ['damit', 'um'], why: 'Different subject (*du*) and the verb *verstehst* at the end: *damit*.' },
            { q: 'Sie nimmt eine Tasche mit, ___ keine Plastiktüte kaufen zu müssen.', o: ['um', 'damit'], why: 'The clause ends with *zu müssen*: *um … zu*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write zu + infinitive.', items: [
            { q: 'Ich dusche nur kurz, um Wasser ___. (sparen)', a: ['zu sparen'], why: '*um … zu sparen*: *zu* + infinitive at the end.' },
            { q: 'Er geht früher los, um den Bus ___. (erreichen)', a: ['zu erreichen'], why: '*um … zu erreichen*' },
            { q: 'Ich gehe kurz raus, um den Müll ___. (rausbringen)', a: ['rauszubringen'], why: 'Separable verb: *zu* goes in the middle, *rauszubringen*.' },
            { q: 'Wir kaufen gebrauchte Möbel, um weniger Müll ___. (produzieren)', a: ['zu produzieren'], why: '*um … zu produzieren*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Ich fahre Rad, um fit zu bleiben.', why: 'After the comma: *um*, then the rest, then *zu* + infinitive at the end.' },
            { a: 'Ich erkläre es dir, damit du es verstehst.', why: 'After *damit*: subject, then the conjugated verb at the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'The Futur I',
      about: 'Talk about plans, predictions and assumptions.',
      art: 'alien',
      spreads: [
        [
          { t: 'text', md: 'The **Futur I** is *werden* + infinitive. *Werden* is the conjugated verb in position 2, and the infinitive goes to the **end**.' },
          { t: 'table', caption: 'werden', quiz: true, head: ['', 'werden'], rows: [
            ['ich', 'werde'],
            ['du', 'wirst'],
            ['er / sie / es', 'wird'],
            ['wir', 'werden'],
            ['ihr', 'werdet'],
            ['sie / Sie', 'werden'],
          ] },
          { t: 'examples', items: [
            { s: 'In Zukunft **wird** es im Sommer öfter sehr heiß **sein**.', n: 'A prediction.' },
            { s: 'Ich **werde** ab jetzt weniger Fleisch **essen**.', n: 'A promise or a firm plan.' },
            { s: 'Mia ist nicht da. Sie **wird** wohl noch im Garten **sein**.', n: 'An assumption about now, often with *wohl* or *wahrscheinlich*.' },
          ] },
        ],
        [
          { t: 'text', md: 'For plans with a time word, Germans usually use the **present tense**: *Morgen fahre ich nach Bonn.* Use the Futur I for predictions, for promises, for plans you want to stress and for assumptions.' },
          { t: 'tip', art: 'owl', md: 'In a clause with *dass* or *weil*, *werden* goes to the very end, after the infinitive: *Ich glaube, dass es morgen regnen wird.* Do not confuse the Futur I with *werden* + adjective: *Es wird kalt.* means that it is getting cold.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the right form of werden.', items: [
            { q: 'Ich ___ ab morgen mit dem Rad zur Arbeit fahren.', a: ['werde'], why: '*ich werde*' },
            { q: 'Was ___ ihr nach dem Studium machen?', a: ['werdet'], why: '*ihr werdet*' },
            { q: 'Paul antwortet nicht. Er ___ wohl schon schlafen.', a: ['wird'], why: '*er wird*. An assumption about now, with *wohl*.' },
            { q: 'Wir ___ nächstes Jahr Solarzellen auf unser Dach bauen.', a: ['werden'], why: '*wir werden*' },
            { q: 'Du ___ sehen: Morgen ist das Wetter wieder besser.', a: ['wirst'], why: '*du wirst*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
            { q: '', o: ['Morgen wird es regnen.', 'Morgen es wird regnen.', 'Morgen wird es regnen werden.'], why: '*Wird* in position 2, the infinitive *regnen* at the end.' },
            { q: '', o: ['Ich glaube, dass er bald kommen wird.', 'Ich glaube, dass er wird bald kommen.', 'Ich glaube, dass er bald wird kommen.'], why: 'In a *dass* clause, *wird* goes to the very end.' },
            { q: '', o: ['Wirst du am Samstag mitkommen?', 'Wirst du am Samstag mitzukommen?', 'Wird du am Samstag mitkommen?'], why: '*du wirst*, and after *werden* there is no *zu*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Ich glaube, dass es bald schneien wird.', why: 'In the *dass* clause, *wird* goes to the very end.' },
            { a: 'Was werdet ihr nach dem Studium machen?', why: 'Question word, then *werdet*, then the infinitive at the end.' },
            { a: 'Wirst du mir beim Umzug helfen?', why: 'A yes/no question starts with *werden*; the infinitive goes to the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Protecting the environment',
      about: 'Words and phrases for saving energy and sorting waste.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'Many words about the environment go with a fixed verb. Learn the noun and the verb together.' },
          { t: 'table', caption: 'The environment', explain: ['head'], quiz: true, head: ['Phrase', 'Example'], rows: [
            ['Müll trennen', 'Wir trennen Papier, Glas und Plastik.'],
            ['Energie sparen', 'Im Winter heize ich weniger, um Energie zu sparen.'],
            ['Strom verbrauchen', 'Ein alter Kühlschrank verbraucht viel Strom.'],
            ['Plastik vermeiden', 'Ich vermeide Plastik und kaufe auf dem Markt ein.'],
            ['Wasser verschwenden', 'Wer sehr lange duscht, verschwendet Wasser.'],
            ['die Umwelt schützen', 'Jeder kann etwas tun, um die Umwelt zu schützen.'],
            ['den Müll rausbringen', 'Kannst du bitte den Müll rausbringen?'],
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'In many German towns, people sort their waste into different bins: paper, packaging, organic waste and the rest (*Restmüll*). Glass goes into large containers in the street. Many bottles have a deposit (*das Pfand*): you get the money back when you return them to the shop.' },
          { t: 'ex', kind: 'match', h: 'What is it?', pairs: [
            ['die Biotonne', 'Hier kommen Essensreste und Gartenabfälle hinein.'],
            ['der Restmüll', 'Das ist Müll, den man nicht recyceln kann.'],
            ['das Pfand', 'Dieses Geld bekommt man für leere Flaschen zurück.'],
            ['der Altglascontainer', 'Hier wirft man leere Gläser und Flaschen ohne Pfand ein.'],
            ['die Papiertonne', 'Hier kommen alte Zeitungen und Kartons hinein.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right verb.', items: [
            { q: 'Wir ___ unseren Müll: Papier, Glas und Plastik kommen in verschiedene Tonnen.', o: ['trennen', 'sparen', 'schützen'], why: '*Müll trennen*: to sort waste.' },
            { q: 'Mach bitte das Licht aus, wenn du rausgehst. So ___ wir Strom.', o: ['sparen', 'verbrauchen', 'trennen'], why: 'Switching off the light means using less: *Strom sparen*.' },
            { q: 'Unser alter Kühlschrank ___ sehr viel Strom.', o: ['verbraucht', 'spart', 'vermeidet'], why: '*Strom verbrauchen*: to use electricity.' },
            { q: 'Ich bringe eine eigene Tasche mit, um Plastik zu ___.', o: ['vermeiden', 'verbrauchen', 'verschwenden'], why: '*Plastik vermeiden*: not to use plastic.' },
            { q: 'Wer beim Zähneputzen das Wasser laufen lässt, ___ Wasser.', o: ['verschwendet', 'vermeidet', 'schützt'], why: 'Using water for nothing: *Wasser verschwenden*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Für die leere Flasche bekomme ich 25 Cent ___ zurück.', a: ['Pfand'], why: '*das Pfand*: the deposit on a bottle.' },
            { q: 'Essensreste kommen in die ___.', a: ['Biotonne'], why: 'Organic waste goes into *die Biotonne*.' },
            { q: 'Es ist kalt, aber wir ___ nur wenig, um Energie zu sparen. (heizen)', a: ['heizen'], why: '*wir heizen*' },
            { q: 'Ein Fahrrad ___ keinen Strom und kein Benzin. (verbrauchen)', a: ['verbraucht'], why: '*es verbraucht*' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Every small step helps',
      about: 'Read an interview with a young climate activist.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: '„Jeder kleine Schritt hilft“', md: 'Deniz Arslan ist 26 Jahre alt und studiert Biologie in Leipzig. In ihrer Freizeit organisiert sie mit einer Gruppe von Freunden Aktionen für den Klimaschutz.\n\n**Frau Arslan, warum engagieren Sie sich für das Klima?**\n\nVor drei Jahren habe ich einen Film über das Eis in der Arktis gesehen. Danach wollte ich nicht mehr nur zuschauen. Ich möchte etwas tun, damit auch die nächste Generation eine gesunde Umwelt hat.\n\n**Was machen Sie konkret?**\n\nWir sammeln jeden Monat Müll im Park, und wir machen Workshops an Schulen. Dort zeigen wir, wie man im Alltag Energie sparen kann. Viele Schüler sind überrascht, wie einfach das ist.\n\n**Und was tun Sie selbst?**\n\nIch habe kein Auto, ich fahre überall mit dem Rad. Meine Kleidung kaufe ich meistens gebraucht, um weniger Müll zu produzieren. Fleisch esse ich nur noch selten.\n\n**Glauben Sie, dass sich wirklich etwas ändern wird?**\n\nJa, das glaube ich. Viele Menschen denken heute mehr über die Umwelt nach als früher. Aber es wird nicht von allein passieren. Die Politik muss mehr tun, und jeder Einzelne auch.\n\n**Was sind Ihre Pläne für die Zukunft?**\n\nNach dem Studium werde ich in einem Naturschutzprojekt arbeiten. Und nächstes Jahr wollen wir unsere Workshops auch in anderen Städten anbieten.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Deniz studiert Biologie.', a: 't', why: '*Sie studiert Biologie in Leipzig.*' },
            { q: 'Ein Film war der Grund, warum sich Deniz für das Klima engagiert.', a: 't', why: 'After the film about the Arctic, she wanted to do something.' },
            { q: 'Die Gruppe sammelt jede Woche Müll im Park.', a: 'f', why: 'They do it every month: *jeden Monat*.' },
            { q: 'Deniz isst gar kein Fleisch mehr.', a: 'f', why: 'She eats meat *nur noch selten*: rarely, but not never.' },
            { q: 'Die Workshops an den Schulen sind kostenlos.', a: 'ng', why: 'The interview does not say whether the workshops cost money.' },
            { q: 'Deniz glaubt, dass sich nichts ändern wird.', a: 'f', why: 'She says: *Ja, das glaube ich.* She thinks things will change.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Answer the questions about the interview.', items: [
            { q: 'Warum kauft Deniz gebrauchte Kleidung?', o: ['Um weniger Müll zu produzieren.', 'Weil sie wenig Geld hat.', 'Weil neue Kleidung nicht schön ist.'], why: '*… um weniger Müll zu produzieren.*' },
            { q: 'Was wird Deniz nach dem Studium machen?', o: ['Sie wird in einem Naturschutzprojekt arbeiten.', 'Sie wird an einer Schule unterrichten.', 'Sie wird in eine andere Stadt ziehen.'], why: '*Nach dem Studium werde ich in einem Naturschutzprojekt arbeiten.*' },
            { q: 'Was zeigt die Gruppe in den Workshops?', o: ['Wie man im Alltag Energie sparen kann.', 'Wie man Fahrräder repariert.', 'Wie man Filme über die Arktis macht.'], why: '*Dort zeigen wir, wie man im Alltag Energie sparen kann.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the form of werden in the Futur I.', items: [
            { s: 'Glauben Sie, dass sich wirklich etwas ändern [wird]?', why: 'In the *dass* clause, *wird* goes to the end, after *ändern*.' },
            { s: 'Aber es [wird] nicht von allein passieren.', why: '*wird … passieren*: a prediction.' },
            { s: 'Nach dem Studium [werde] ich in einem Naturschutzprojekt arbeiten.', why: '*werde … arbeiten*: a firm plan.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ich fahre mit dem Zug, ___ die Umwelt zu schonen.', o: ['um', 'damit', 'weil'], why: 'The clause ends with *zu schonen*: *um … zu*.' },
      { q: 'Ich spreche langsam, ___ du mich verstehst.', o: ['damit', 'um', 'obwohl'], why: 'Different subject (*du*) and the verb at the end: *damit*.' },
      { q: 'Morgen ___ es wahrscheinlich regnen.', o: ['wird', 'werdet', 'wirst'], why: '*es wird*: a prediction.' },
      { q: 'Für leere Flaschen bekommt man im Supermarkt das ___ zurück.', o: ['Pfand', 'Müll', 'Klima'], why: '*das Pfand*: the deposit.' },
      { q: 'Wir sollten nicht so viel Wasser ___.', o: ['verschwenden', 'vermeiden', 'trennen'], why: '*Wasser verschwenden*: to waste water.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the right form.', items: [
      { q: 'Ich stehe früh auf, um den ersten Bus ___. (nehmen)', a: ['zu nehmen'], why: '*um … zu nehmen*' },
      { q: 'Er macht immer das Licht aus, um Strom ___. (sparen)', a: ['zu sparen'], why: '*um … zu sparen*' },
      { q: 'Was ___ du nach der Ausbildung machen? (werden)', a: ['wirst'], why: '*du wirst*' },
      { q: 'Ich stehe noch einmal auf, um den Fernseher ___. (ausschalten)', a: ['auszuschalten'], why: 'Separable verb: *zu* goes in the middle, *auszuschalten*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Ich glaube, dass sie bald kommen wird.', why: 'In the *dass* clause, *wird* goes to the very end.' },
      { a: 'Wir trennen den Müll, um die Umwelt zu schützen.', why: '*Um* after the comma, *zu* + infinitive at the end.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['Ich lerne Deutsch, um in Wien zu arbeiten.', 'Ich lerne Deutsch, um in Wien arbeiten.', 'Ich lerne Deutsch, damit in Wien zu arbeiten.'], why: '*Um … zu* + infinitive. *Damit* needs a subject and a conjugated verb.' },
      { q: '', o: ['Er wird nächstes Jahr ein Fahrrad kaufen.', 'Er wird nächstes Jahr ein Fahrrad kauft.', 'Er werdet nächstes Jahr ein Fahrrad kaufen.'], why: '*er wird* + infinitive at the end.' },
    ] },
  ],
};
