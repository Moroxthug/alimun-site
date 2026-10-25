// German B2 for study and exams, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Argument and essays',
  goal: 'Plan and write a balanced argumentative essay: build a clear structure, link your arguments and state claims with the right degree of certainty.',
  art: 'dragon',
  tags: { skills: ['writing', 'reading', 'grammar'], topics: ['essay', 'eroerterung', 'connectors', 'hedging', 'argumentation'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Structure of an argumentative essay',
      about: 'Introduction, arguments, counterarguments and conclusion: what goes where.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'An argumentative essay in German is called an **Erörterung**. It discusses a question, often one that can be answered with yes or no: *Sollten alle Vorlesungen aufgezeichnet werden?* There are two common types. A **linear** essay argues for one side only. A **dialectical** essay, *dialektische Erörterung*, weighs the arguments for and against and then comes to a conclusion. At university and in exams the dialectical type is the more common one.\n\nThe essay has three parts: the **Einleitung** leads into the topic and names the question, the **Hauptteil** presents the arguments, and the **Schluss** weighs them and gives your conclusion. A good argument has three steps: a claim, a reason and an example.' },
          { t: 'table', caption: 'The parts of an Erörterung', explain: ['head', 'col1'], head: ['Part', 'What it does', 'Useful phrase'], rows: [
            ['Einleitung', 'leads into the topic and names the question', 'In letzter Zeit wird zunehmend darüber diskutiert, ob …'],
            ['These', 'states the question or your position', 'Im Folgenden soll erörtert werden, ob …'],
            ['Argument', 'a claim with a reason and an example', 'Für … spricht vor allem, dass …'],
            ['Gegenargument', 'presents the other side', 'Kritiker wenden ein, dass …'],
            ['Schluss', 'weighs the arguments and concludes', 'Wägt man die Argumente ab, so …'],
          ] },
        ],
        [
          { t: 'text', md: 'In a dialectical essay, a common order is: first the arguments of the side you do **not** support, then the arguments of your own side, with the strongest one last. In this way the reader remembers your best argument when the conclusion begins. The conclusion does not bring new arguments.' },
          { t: 'examples', items: [
            { s: '**Für** Aufzeichnungen **spricht vor allem, dass** sie das Studium flexibler machen.', n: 'The claim.' },
            { s: 'Wer neben dem Studium arbeitet, kann Vorlesungen **auf diese Weise** auch abends ansehen.', n: 'The reason: why the claim is true.' },
            { s: '**So** kann **beispielsweise** eine Studentin mit Kind die Vorlesung nachholen, wenn ihr Kind krank ist.', n: 'The example makes the argument concrete.' },
            { s: '**Zusammenfassend lässt sich sagen, dass** die Vorteile überwiegen.', n: 'The conclusion sums up and gives a judgement.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Use *ich* sparingly. In the conclusion, *meiner Ansicht nach* or *meines Erachtens* is fine. In the main part, impersonal phrases like *Dafür spricht, dass …* sound more objective.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Which part of the essay does each sentence come from?', pairs: [
            ['Seit einigen Jahren wird darüber diskutiert, ob …', 'Einleitung'],
            ['Im Folgenden soll erörtert werden, ob …', 'These'],
            ['Ein wichtiges Argument dafür ist, dass …', 'Argument'],
            ['Dagegen lässt sich einwenden, dass …', 'Gegenargument'],
            ['Alles in allem überwiegen meines Erachtens …', 'Schluss'],
          ] },
          { t: 'ex', kind: 'tf', h: 'True or false? Think about the structure of an Erörterung.', items: [
            { q: 'In einer dialektischen Erörterung werden nur die Argumente für eine Seite genannt.', a: 'f', why: 'That is a linear essay. A dialectical one weighs both sides.' },
            { q: 'Ein gutes Argument besteht aus einer Behauptung, einer Begründung und einem Beispiel.', a: 't', why: 'Claim, reason, example: *Behauptung, Begründung, Beispiel*.' },
            { q: 'Im Schluss sollte man ein neues, starkes Argument bringen.', a: 'f', why: 'The conclusion weighs the arguments you have given. New arguments belong in the main part.' },
            { q: 'Das stärkste Argument der eigenen Seite steht oft am Ende des Hauptteils.', a: 't', why: 'Then the reader remembers it when the conclusion begins.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which sentence fits best?', items: [
            { q: 'Ein guter erster Satz für die Einleitung:', o: ['In letzter Zeit wird zunehmend darüber diskutiert, ob Hausaufgaben an Universitäten sinnvoll sind.', 'Zusammenfassend lässt sich sagen, dass Hausaufgaben sinnvoll sind.', 'Hausaufgaben sind doof, finde ich.'], why: 'An introduction leads into the topic neutrally. The second sentence is a conclusion, the third is too informal.' },
            { q: 'Das passende Beispiel zu: „Gruppenarbeit fördert die Kommunikation.“', o: ['So lernen Studierende etwa, ihre Ideen vor anderen zu erklären.', 'Kritiker wenden jedoch ein, dass Gruppenarbeit Zeit kostet.', 'Im Folgenden soll erörtert werden, ob Gruppenarbeit sinnvoll ist.'], why: 'An example makes the claim concrete: *so … etwa*.' },
            { q: 'Ein passender Satz für den Schluss:', o: ['Wägt man die Argumente ab, so sprechen mehr Gründe für eine Anwesenheitspflicht.', 'Ein weiteres Argument ist, dass Anwesenheit Kontakte schafft.', 'Seit Jahren wird über eine Anwesenheitspflicht diskutiert.'], why: 'The conclusion weighs the arguments: *Wägt man die Argumente ab, …*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build sentences for an essay.', items: [
            { a: 'Kritiker wenden ein, dass Aufzeichnungen teuer sind.', why: 'Main clause first; after *dass* the verb goes to the end.' },
            { a: 'Dafür spricht, dass Aufzeichnungen flexibel sind.', why: '*Dafür* takes first place, then the verb *spricht*. After *dass* the verb goes to the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Connectors and hedging',
      about: 'Link arguments clearly, and make claims as strong as your evidence allows.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Connectors show how your arguments relate to each other: whether you add a point, admit something, contrast two sides or draw a conclusion. Watch the word order. After an adverb like *jedoch* or *folglich* in first position the verb comes second. After a conjunction like *obwohl* or *während* the verb goes to the end.' },
          { t: 'table', caption: 'Connectors for arguments', explain: ['head', 'col0', 'col2'], head: ['Function', 'Connector', 'Word order'], rows: [
            ['adding a point', 'zudem, darüber hinaus, außerdem', 'verb second'],
            ['contrast', 'jedoch, allerdings, hingegen', 'verb second'],
            ['contrast', 'während', 'verb at the end'],
            ['admitting a point', 'zwar …, aber …', 'verb second in both parts'],
            ['admitting a point', 'obwohl', 'verb at the end'],
            ['despite something', 'dennoch, trotzdem', 'verb second'],
            ['two sides', 'einerseits …, andererseits …', 'verb second'],
            ['consequence', 'folglich, daher, somit', 'verb second'],
          ] },
        ],
        [
          { t: 'text', md: 'Academic writers rarely claim that something is true for everyone or always. They **hedge**: they show how certain they are. This makes an argument more convincing, not weaker, because it matches the evidence. *Dürfte* + infinitive expresses a strong probability: *Das dürfte der Hauptgrund sein* means "this is probably the main reason".' },
          { t: 'examples', items: [
            { s: 'Dies **dürfte** vor allem an den hohen Mieten **liegen**.', n: '*dürfte* + infinitive: very probably.' },
            { s: '**Es scheint, dass** Online-Kurse vor allem Berufstätigen helfen.', n: 'The writer has some evidence but is not completely sure.' },
            { s: 'Studierende arbeiten **in der Regel** neben dem Studium.', n: 'Usually, but not always.' },
            { s: 'Diese Methode ist **möglicherweise** nicht für alle Fächer geeignet.', n: '*möglicherweise*, *vermutlich*: perhaps, presumably.' },
            { s: '**Man könnte** einwenden, dass Prüfungen auch Stress verursachen.', n: 'Konjunktiv II introduces a possible objection politely.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right connector.', items: [
            { q: 'Online-Kurse sind flexibel. ___ fehlt oft der persönliche Kontakt.', o: ['Allerdings', 'Obwohl', 'Folglich'], why: 'A contrast with the verb *fehlt* in second place: *allerdings*.' },
            { q: '___ die Kosten hoch sind, lohnt sich die Investition.', o: ['Obwohl', 'Dennoch', 'Zwar'], why: 'The verb *sind* is at the end, so a conjunction: *obwohl*.' },
            { q: 'Das Projekt war ___ teuer, aber es hat sich gelohnt.', o: ['zwar', 'obwohl', 'hingegen'], why: '*zwar …, aber …*: you admit a point, then contrast it.' },
            { q: 'Die Mieten sind stark gestiegen. ___ suchen viele Studierende länger nach einem Zimmer.', o: ['Folglich', 'Während', 'Einerseits'], why: 'A consequence with the verb in second place: *folglich*.' },
            { q: 'In der Stadt ist das Angebot groß, ___ auf dem Land oft Kurse fehlen.', o: ['während', 'jedoch', 'trotzdem'], why: 'The verb *fehlen* is at the end: the conjunction *während* contrasts two situations.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Einerseits spart man Zeit, ___ verliert man den Kontakt zu anderen.', a: ['andererseits'], why: '*einerseits …, andererseits …*: two sides of one question.' },
            { q: 'Die Methode ist neu. Darüber ___ ist sie günstig.', a: ['hinaus'], why: '*darüber hinaus*: in addition.' },
            { q: 'Das ___ vor allem an der geringen Zahl der Teilnehmenden liegen. (dürfen)', a: ['dürfte'], why: '*dürfte* + infinitive expresses a strong probability.' },
            { q: 'Es ___, dass die neue Regel gut funktioniert. (scheinen)', a: ['scheint'], why: '*Es scheint, dass …*: the writer is fairly but not completely sure.' },
            { q: 'Man ___ einwenden, dass diese Lösung zu teuer ist. (können)', a: ['könnte'], why: 'Konjunktiv II *könnte* introduces a possible objection.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Find the words that make each claim less certain.', items: [
            { s: 'Dieses Ergebnis ist [vermutlich] auf die kleine Gruppe zurückzuführen.', why: '*vermutlich*: presumably. Without it, the claim would be absolute.' },
            { s: 'Studierende lernen [in der Regel] lieber in kleinen Gruppen.', why: '*in der Regel*: as a rule, not always.' },
            { s: 'Die neue Bibliothek [dürfte] mehr Besucher anziehen.', why: '*dürfte* + infinitive: very probably, but not certain.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Zwar sind Aufzeichnungen praktisch, aber sie kosten Geld.', why: 'After *zwar* in first place the verb comes second; after *aber* the normal order follows.' },
            { a: 'Dies dürfte der wichtigste Grund sein.', why: '*dürfte* in second place, the infinitive *sein* at the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a model essay with comments',
      about: 'Read a balanced essay and see how its parts work together.',
      art: 'teacup',
      spreads: [
        [
          { t: 'reading', title: 'Sollten Hochschulen alle Vorlesungen aufzeichnen?', md: 'Seit einigen Jahren stellen immer mehr Hochschulen Vorlesungen auch als Video zur Verfügung. Viele Studierende wünschen sich, dass dies zur Regel wird. Im Folgenden soll erörtert werden, ob alle Vorlesungen zusätzlich aufgezeichnet werden sollten.\n\nGegen eine solche Regel wird häufig eingewandt, dass dann weniger Studierende in den Hörsaal kämen. Zwar lässt sich das nicht für jede Hochschule belegen, aber viele Lehrende berichten von leeren Reihen. Dadurch könnten Diskussionen und Kontakte verloren gehen, die für das Lernen wichtig sind. Hinzu kommt, dass Aufzeichnungen Zeit und Geld kosten.\n\nDennoch sprechen gewichtige Gründe für Aufzeichnungen. Zum einen machen sie das Studium flexibler. Wer neben dem Studium arbeitet oder Kinder betreut, kann eine Vorlesung auf diese Weise auch am Abend ansehen. Zum anderen können Studierende schwierige Stellen mehrmals anhören. Dies dürfte vor allem denjenigen helfen, die nicht in ihrer Erstsprache studieren. So kann etwa eine Studentin aus dem Ausland unbekannte Fachbegriffe nachschlagen und die Erklärung danach noch einmal hören.\n\nWägt man die Argumente ab, so überwiegen meiner Ansicht nach die Vorteile. Aufzeichnungen ersetzen die Lehre im Hörsaal nicht, sie können sie jedoch sinnvoll ergänzen. Hochschulen sollten sie daher anbieten, die Studierenden aber gleichzeitig ermutigen, regelmäßig an den Veranstaltungen teilzunehmen. Nur so lassen sich Flexibilität und persönlicher Austausch verbinden.' },
        ],
        [
          { t: 'text', md: 'Comments on the essay. The **introduction** starts with a current development and names the question neutrally, with *Im Folgenden soll erörtert werden, ob …*. The writer does not give an opinion yet.\n\nThe **second paragraph** presents the counterarguments first. The writer softens them fairly: *zwar …, aber …* admits that the evidence is limited, and *könnten* shows a possible effect, not a certain one.\n\nThe **third paragraph** turns to the writer’s own side with *Dennoch*. The arguments are ordered with *zum einen … zum anderen*, and the last one is supported by a concrete example (*So kann etwa …*).\n\nThe **conclusion** weighs both sides, gives a clear opinion with *meiner Ansicht nach* and makes a practical suggestion. It brings no new argument.' },
          { t: 'tip', art: 'owl', md: 'Before you write, plan on paper: note two or three arguments for each side, decide which side you support and put your strongest argument last.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Questions on the essay.', items: [
            { q: 'Welche Position vertritt die Verfasserin?', o: ['Hochschulen sollten Aufzeichnungen anbieten, aber die Anwesenheit weiter fördern.', 'Hochschulen sollten Vorlesungen nur noch online anbieten.', 'Hochschulen sollten auf Aufzeichnungen verzichten.'], why: 'The conclusion: *Hochschulen sollten sie daher anbieten, die Studierenden aber gleichzeitig ermutigen …*.' },
            { q: 'Warum stehen die Gegenargumente im zweiten Absatz?', o: ['Die Verfasserin unterstützt diese Seite nicht und nennt sie deshalb zuerst.', 'Sie sind die stärksten Argumente des Textes.', 'Sie fassen die Einleitung zusammen.'], why: 'The side the writer does not support comes first; her own side follows.' },
            { q: 'Welche Funktion hat der Satz „So kann etwa eine Studentin aus dem Ausland …“?', o: ['Er gibt ein konkretes Beispiel.', 'Er nennt ein Gegenargument.', 'Er zieht ein Fazit.'], why: '*so … etwa* introduces an example.' },
            { q: '„Dies dürfte vor allem denjenigen helfen …“ Was drückt „dürfte“ hier aus?', o: ['eine starke Wahrscheinlichkeit', 'eine Erlaubnis', 'eine Pflicht'], why: '*dürfte* + infinitive: very probably. Here it is not about permission.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'In der Einleitung nennt die Verfasserin schon ihre Meinung.', a: 'f', why: 'The introduction only names the question; the opinion comes in the conclusion.' },
            { q: 'Die Verfasserin räumt ein, dass das Problem leerer Hörsäle nicht überall belegt ist.', a: 't', why: '*Zwar lässt sich das nicht für jede Hochschule belegen …*' },
            { q: 'Im Schluss bringt die Verfasserin ein neues Argument.', a: 'f', why: 'She weighs the arguments and makes a suggestion, but adds no new argument.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Wo nennt man in einer Erörterung die Frage zum ersten Mal?', o: ['in der Einleitung', 'im Schluss', 'im letzten Argument'], why: 'The introduction leads into the topic and names the question.' },
      { q: 'Das Angebot ist gut. ___ nutzen es nur wenige.', o: ['Dennoch', 'Obwohl', 'Während'], why: 'The verb *nutzen* is in second place: the adverb *dennoch*.' },
      { q: '___ das Studium anstrengend ist, arbeiten viele nebenbei.', o: ['Obwohl', 'Trotzdem', 'Allerdings'], why: 'The verb *ist* goes to the end: the conjunction *obwohl*.' },
      { q: 'Welcher Satz ist vorsichtig formuliert?', o: ['Dieser Effekt dürfte vor allem bei jüngeren Studierenden auftreten.', 'Dieser Effekt tritt immer bei allen Studierenden auf.', 'Dieser Effekt tritt garantiert bei jüngeren Studierenden auf.'], why: '*dürfte* + infinitive hedges the claim.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Die Idee ist ___ gut, aber schwer umzusetzen.', a: ['zwar'], why: '*zwar …, aber …*: admit a point, then contrast it.' },
      { q: 'Kritiker wenden ___, dass die Regel zu streng ist.', a: ['ein'], why: '*einwenden*: to object. The particle *ein* goes to the end of the main clause.' },
      { q: 'Die Teilnahme ist freiwillig. ___ hinaus ist sie kostenlos.', a: ['Darüber'], why: '*darüber hinaus*: in addition.' },
      { q: 'Wägt man die Argumente ___, so überwiegen die Vorteile.', a: ['ab'], why: '*abwägen*: to weigh up. A typical start for the conclusion.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the connector and its function.', pairs: [
      ['zudem', 'fügt einen Punkt hinzu'],
      ['folglich', 'nennt eine Folge'],
      ['hingegen', 'zeigt einen Gegensatz'],
      ['möglicherweise', 'schwächt eine Aussage ab'],
    ] },
  ],
};
