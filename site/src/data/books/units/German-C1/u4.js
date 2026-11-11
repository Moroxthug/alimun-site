// German C1, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Connectors and complex arguments',
  goal: 'Link ideas with subtle connectors and build long, clear sentences. Learn wenngleich, wohingegen, geschweige denn, zumal, sofern, es sei denn, indem, ohne dass, statt zu, je nachdem, insofern … als and als ob.',
  art: 'dragon',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['connectors', 'concession', 'condition', 'subordinate clauses', 'argument'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Wenngleich, wohingegen, zumal',
      about: 'Express concession, contrast and an extra reason with connectors of written German.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'You know **obwohl** (although). In formal writing you also meet **wenngleich** and **obgleich**, which mean the same: *Wenngleich er müde war, arbeitete er weiter.* **Wohingegen** (and **während**) shows a **contrast between two facts**: *Er ist sparsam, wohingegen sie gern Geld ausgibt.* **Zumal** adds a **strong extra reason**: *Wir bleiben zu Hause, zumal es regnet.* **Geschweige denn** means *let alone*: *Er kann kaum laufen, geschweige denn rennen.* All of these except *geschweige denn* send the **conjugated verb to the end** of their clause.' },
          { t: 'table', caption: 'Concession and contrast', explain: ['head', 'col1'], head: ['Connector', 'Meaning', 'Example'], rows: [
            ['wenngleich / obgleich', 'although (formal)', 'Wenngleich er müde war, arbeitete er weiter.'],
            ['wohingegen', 'whereas', 'Er ist sparsam, wohingegen sie gern Geld ausgibt.'],
            ['zumal', 'especially since', 'Wir bleiben zu Hause, zumal es regnet.'],
            ['geschweige denn', 'let alone', 'Er kann kaum laufen, geschweige denn rennen.'],
            ['wenn auch', 'even if, though', 'Er arbeitet, wenn auch ungern.'],
          ] },
          { t: 'tip', art: 'owl', md: 'After a clause that begins the sentence, the main clause starts with the **verb**: *Wenngleich er müde war, arbeitete er weiter.* **Obwohl** and **wenngleich** are followed by a clause with the verb at the end. **Geschweige denn** has no verb of its own: it joins two ideas in a negative sentence. **Wohingegen** is common in writing; in speech people say **während** or **dagegen**.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Wenngleich** er müde war, arbeitete er weiter.', n: 'Formal *although*.' },
            { s: 'Er ist sparsam, **wohingegen** sie gern Geld ausgibt.', n: 'A contrast.' },
            { s: 'Wir bleiben zu Hause, **zumal** es regnet.', n: 'An extra reason.' },
            { s: 'Er kann kaum laufen, **geschweige denn** rennen.', n: 'Let alone.' },
            { s: 'Er arbeitet, **wenn auch** ungern.', n: 'Even if.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the connector with its meaning.', pairs: [
            ['wenngleich', 'although'],
            ['wohingegen', 'whereas'],
            ['zumal', 'especially since'],
            ['geschweige denn', 'let alone'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing connector.', items: [
            { q: '___ er müde war, arbeitete er weiter. (formal although)', a: ['Wenngleich', 'Obgleich', 'Obwohl'], why: '*Wenngleich* and *obgleich* are the formal forms of *obwohl*.' },
            { q: 'Er ist sparsam, ___ sie gern Geld ausgibt.', a: ['wohingegen', 'während'], why: '*Wohingegen* shows a contrast.' },
            { q: 'Wir bleiben zu Hause, ___ es regnet.', a: ['zumal'], why: '*Zumal* adds a strong extra reason.' },
            { q: 'Er kann kaum laufen, ___ denn rennen.', a: ['geschweige'], why: '*Geschweige denn* = let alone.' },
            { q: 'Er arbeitet, ___ auch ungern.', a: ['wenn'], why: '*Wenn auch* = even if.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right connector.', items: [
            { q: 'Er mag Fisch, ___ sie lieber Fleisch isst.', o: ['wohingegen', 'zumal', 'sofern'], why: 'A contrast: *wohingegen*.' },
            { q: 'Wir gehen nicht aus, ___ es sehr kalt ist.', o: ['zumal', 'wohingegen', 'obgleich'], why: 'An extra reason: *zumal*.' },
            { q: '___ die Arbeit schwer war, machte sie Freude.', o: ['Obgleich', 'Zumal', 'Sofern'], why: 'Formal *although*: *obgleich*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Join the two sentences with the connector in brackets.', items: [
            { q: 'Er war müde. Er arbeitete weiter.', cue: 'Wenngleich', a: ['Wenngleich er müde war, arbeitete er weiter.'], why: '*Wenngleich* sends the verb to the end; then the main clause starts with the verb.' },
            { q: 'Er ist sparsam. Sie gibt gern Geld aus.', cue: 'Er ist sparsam, wohingegen', a: ['Er ist sparsam, wohingegen sie gern Geld ausgibt.'], why: '*Wohingegen* sends the verb to the end.' },
            { q: 'Wir bleiben zu Hause. Es regnet außerdem.', cue: 'Wir bleiben zu Hause, zumal', a: ['Wir bleiben zu Hause, zumal es regnet.'], why: '*Zumal* sends the verb to the end.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Wenngleich er müde war, [er arbeitete] weiter.', a: ['arbeitete er'], why: 'After a clause at the start, the main clause begins with the verb.' },
            { s: 'Er ist sparsam, wohingegen sie gern Geld [gibt aus].', a: ['ausgibt'], why: 'The verb goes to the end, and a separable verb is written together.' },
            { s: 'Wir bleiben zu Hause, zumal [regnet es].', a: ['es regnet'], why: '*Zumal* sends the verb to the end.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Wenngleich er müde war, arbeitete er weiter.', why: 'The *wenngleich* clause first, then the verb.' },
            { a: 'Wir bleiben zu Hause, zumal es regnet.', why: '*Zumal* + the verb at the end.' },
            { a: 'Er kann kaum laufen, geschweige denn rennen.', why: '*Geschweige denn* + a new idea.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Sofern, es sei denn, indem',
      about: 'Express condition and manner, and use ohne dass and statt zu.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: '**Sofern** means *if, provided that*: *Sofern das Wetter gut ist, grillen wir.* **Es sei denn** means *unless*: *Wir grillen, es sei denn, es regnet.* The clause after it can start with **dass** (verb at the end) or have normal main-clause order. **Indem** and **dadurch, dass** say **how** something is done: *Man lernt Sprachen, indem man viel liest.* **Ohne dass** and **ohne … zu** mean *without*, **(an)statt dass** and **(an)statt … zu** mean *instead of*. Use the **infinitive with zu** only when the **subject is the same**: *Er ging, ohne sich zu verabschieden.* With a different subject, use **dass**: *Er ging, ohne dass jemand es bemerkte.*' },
          { t: 'table', caption: 'Condition and manner', explain: ['head', 'col1'], head: ['Connector', 'Meaning', 'Example'], rows: [
            ['sofern', 'provided that', 'Sofern das Wetter gut ist, grillen wir.'],
            ['es sei denn (, dass)', 'unless', 'Wir grillen, es sei denn, es regnet.'],
            ['indem', 'by doing', 'Man lernt Sprachen, indem man viel liest.'],
            ['dadurch, dass', 'because of the fact that', 'Dadurch, dass er viel übte, wurde er besser.'],
            ['ohne … zu / ohne dass', 'without', 'Er ging, ohne sich zu verabschieden.'],
            ['(an)statt … zu / (an)statt dass', 'instead of', 'Statt zu arbeiten, schlief er.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Indem** needs the **same subject** in both clauses: *Man lernt, indem man liest.* If the subject changes, use **dadurch, dass**. After **sofern** and **es sei denn** the mood is normally the indicative; in formal writing you may meet the subjunctive. **Sofern** is more formal than **wenn**; **falls** is a more everyday alternative.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Sofern** das Wetter gut ist, grillen wir.', n: 'Provided that.' },
            { s: 'Wir grillen, **es sei denn**, es regnet.', n: 'Unless.' },
            { s: 'Man lernt Sprachen, **indem** man viel liest.', n: 'By doing.' },
            { s: 'Er ging, **ohne sich** zu verabschieden.', n: 'Without, with the same subject.' },
            { s: 'Er ging, **ohne dass** jemand es bemerkte.', n: 'Without, with a different subject.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Same subject or different subject? Sort the sentences.', groups: ['same subject (zu + infinitive)', 'different subject (dass)'], explain: ['groups'], items: [
            { s: 'Er ging, ohne sich zu verabschieden.', g: 0, why: 'He went, and he did not say goodbye.' },
            { s: 'Er ging, ohne dass jemand es bemerkte.', g: 1, why: 'Another person did not notice.' },
            { s: 'Statt zu arbeiten, schlief er.', g: 0, why: 'He slept instead of working.' },
            { s: 'Statt dass er arbeitete, schlief der Chef.', g: 1, why: 'The subject changes.' },
            { s: 'Sie lernte, ohne Pause zu machen.', g: 0, why: 'The same person.' },
            { s: 'Sie lernte, ohne dass man sie störte.', g: 1, why: 'Other people did not disturb her.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___ das Wetter gut ist, grillen wir. (provided that)', a: ['Sofern'], why: '*Sofern* = provided that.' },
            { q: 'Wir grillen, es sei ___, es regnet.', a: ['denn'], why: '*Es sei denn* = unless.' },
            { q: 'Man lernt Sprachen, ___ man viel liest.', a: ['indem'], why: '*Indem* says how.' },
            { q: 'Er ging, ohne sich ___ verabschieden.', a: ['zu'], why: '*Ohne … zu* + infinitive.' },
            { q: 'Er ging, ohne ___ jemand es bemerkte.', a: ['dass'], why: 'A different subject: *ohne dass*.' },
            { q: '___ zu arbeiten, schlief er. (instead of)', a: ['Statt', 'Anstatt'], why: '*(An)statt … zu* + infinitive.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Er lernt Deutsch, ___ er viel liest.', o: ['indem', 'sofern', 'zumal'], why: '*Indem* says how.' },
            { q: 'Sie ging, ohne ___ zu verabschieden.', o: ['sich', 'sie', 'ihr'], why: 'The reflexive pronoun: *sich zu verabschieden*.' },
            { q: 'Wir bleiben, ___ denn, es regnet.', o: ['es sei', 'es ist', 'es wäre'], why: 'The fixed form: *es sei denn*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with the words in brackets.', items: [
            { q: 'Er ging. Er verabschiedete sich nicht.', cue: 'Er ging, ohne', a: ['Er ging, ohne sich zu verabschieden.'], why: '*Ohne … zu* with the same subject.' },
            { q: 'Man lernt Sprachen durch viel Lesen.', cue: 'Man lernt Sprachen, indem', a: ['Man lernt Sprachen, indem man viel liest.'], why: '*Indem* + verb at the end.' },
            { q: 'Er schlief. Er arbeitete nicht.', cue: 'Statt', a: ['Statt zu arbeiten, schlief er.'], why: '*Statt … zu* with the same subject.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Er ging, ohne [dass] sich zu verabschieden.', a: ['ohne'], why: 'The same subject: *ohne … zu*, not *ohne dass*.' },
            { s: 'Wir grillen, es sei denn, es [regnen].', a: ['regnet'], why: '*Es regnet*, third person singular.' },
            { s: 'Man lernt Sprachen, [dass] man viel liest.', a: ['indem'], why: '*Indem* says how.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Sofern das Wetter gut ist, grillen wir.', why: 'The *sofern* clause first, then the verb.' },
            { a: 'Man lernt Sprachen, indem man viel liest.', why: '*Indem* + verb at the end.' },
            { a: 'Er ging, ohne sich zu verabschieden.', why: '*Ohne … zu* + infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Je nachdem, insofern, als ob',
      about: 'Use connectors of dependence, limit and comparison, and the Konjunktiv II after als ob.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: '**Je nachdem, ob / wie / was …** says that something **depends on** something else: *Je nachdem, ob es regnet, bleiben wir zu Hause oder gehen spazieren.* **Insofern … als** limits a claim: *Das Projekt ist insofern interessant, als es neue Wege zeigt* (It is interesting in that it shows new ways). **Als ob** and **als wenn** compare with something unreal and take the **Konjunktiv II**: *Er tut, als ob er alles wüsste.* With **als** alone, the verb comes right after it: *Er tut, als wüsste er alles.*' },
          { t: 'table', caption: 'Dependence, limit, comparison', explain: ['head', 'col1'], head: ['Connector', 'Meaning', 'Example'], rows: [
            ['je nachdem, ob / wie', 'it depends on', 'Je nachdem, ob es regnet, bleiben wir zu Hause.'],
            ['insofern … als', 'in that, to the extent that', 'Das Projekt ist insofern interessant, als es neue Wege zeigt.'],
            ['umso … als', 'all the more because', 'Das ist umso bedauerlicher, als viele pendeln müssen.'],
            ['als ob / als wenn + Konjunktiv II', 'as if', 'Er tut, als ob er alles wüsste.'],
            ['als + verb', 'as if, shorter', 'Er tut, als wüsste er alles.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In speech, the **Konjunktiv II** after **als ob** is often replaced by the **indicative**: *Er tut, als ob er alles weiß.* In writing, keep the Konjunktiv II. For regular verbs, use **würde** + infinitive when the Konjunktiv II looks like the Präteritum: *Er tut, als ob er nichts sagen würde.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Je nachdem, ob** es regnet, bleiben wir zu Hause.', n: 'It depends on the weather.' },
            { s: 'Das ist **insofern** interessant, **als** es neue Wege zeigt.', n: 'It limits the claim.' },
            { s: 'Er tut, **als ob** er alles **wüsste**.', n: '*Als ob* + Konjunktiv II.' },
            { s: 'Sie sieht aus, **als hätte** sie nicht geschlafen.', n: '*Als* + verb.' },
            { s: 'Je nachdem, **wie** die Bürger entscheiden, ändert sich die Stadt.', n: 'It depends on how they decide.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the connector with its meaning.', pairs: [
            ['je nachdem, ob', 'it depends on whether'],
            ['insofern … als', 'to the extent that'],
            ['als ob', 'as if'],
            ['als wenn', 'as if'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Je ___, ob es regnet, bleiben wir zu Hause.', a: ['nachdem'], why: '*Je nachdem, ob …*' },
            { q: 'Das Projekt ist insofern interessant, ___ es neue Wege zeigt.', a: ['als'], why: '*Insofern … als …*' },
            { q: 'Er tut, als ob er alles ___. (wissen, Konjunktiv II)', a: ['wüsste'], why: '*Als ob* + Konjunktiv II: *wüsste*.' },
            { q: 'Sie sieht aus, als ___ sie nicht geschlafen. (haben, Konjunktiv II)', a: ['hätte'], why: '*Als* + verb: *hätte*.' },
            { q: 'Er tut, als ___ er nichts gehört. (haben, Konjunktiv II)', a: ['hätte'], why: '*Als hätte er …*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Er tut, als ob er alles ___.', o: ['wüsste', 'weiß', 'wusste'], why: '*Als ob* + Konjunktiv II.' },
            { q: 'Sie sieht aus, als ___ sie nicht geschlafen.', o: ['hätte', 'hat', 'hatte'], why: '*Als* + Konjunktiv II.' },
            { q: 'Je ___, wie die Bürger entscheiden, ändert sich die Stadt.', o: ['nachdem', 'dass', 'ob'], why: '*Je nachdem, wie …*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with the words in brackets.', items: [
            { q: 'Er weiß nicht alles, aber er tut so.', cue: 'Er tut, als ob', a: ['Er tut, als ob er alles wüsste.'], why: '*Als ob* + Konjunktiv II.' },
            { q: 'Sie hat nicht geschlafen, aber es sieht so aus.', cue: 'Sie sieht aus, als', a: ['Sie sieht aus, als hätte sie nicht geschlafen.'], why: '*Als* + verb + Konjunktiv II.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Er tut, als ob er alles [weiß].', a: ['wüsste'], why: 'In writing, use the Konjunktiv II after *als ob*.' },
            { s: 'Sie sieht aus, als [hat] sie nicht geschlafen.', a: ['hätte'], why: '*Als* + Konjunktiv II.' },
            { s: 'Je [dass], ob es regnet, bleiben wir zu Hause.', a: ['nachdem'], why: '*Je nachdem, ob …*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Er tut, als ob er alles wüsste.', why: '*Als ob* + Konjunktiv II at the end.' },
            { a: 'Sie sieht aus, als hätte sie nicht geschlafen.', why: '*Als* + verb.' },
            { a: 'Je nachdem, ob es regnet, bleiben wir zu Hause.', why: '*Je nachdem, ob …* + main clause.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Ein Leserbrief',
      about: 'Read a reader\'s letter to a newspaper.',
      art: 'dragon',
      spreads: [
        [
          { t: 'reading', title: 'Leserbrief: Autofreie Innenstadt', md: 'Sehr geehrte Redaktion,\n\nzu Ihrem Artikel über die autofreie Innenstadt möchte ich Stellung nehmen. Obgleich die Idee auf den ersten Blick verlockend klingt, halte ich sie in dieser Form für voreilig. Die Stadt will die Autos verbannen, ohne dass es bessere Verbindungen mit Bus und Bahn gibt. Statt zuerst den öffentlichen Verkehr auszubauen, schafft man Verbote.\n\nDas ist umso bedauerlicher, als viele Beschäftigte jeden Tag zur Arbeit pendeln müssen, zumal die Fahrpreise gestiegen sind. Man gewinnt Akzeptanz nicht, indem man verbietet, sondern indem man Alternativen anbietet.\n\nSofern die Stadt diesen Weg wählt, bin ich gern bereit, das Vorhaben zu unterstützen, es sei denn, die Kosten steigen weiter. Je nachdem, wie die Bürger entscheiden, könnte die Innenstadt lebendiger werden, wohingegen die Randbezirke leiden könnten.\n\nMit freundlichen Grüßen\nT. Weber' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Der Verfasser hält die Idee in dieser Form für voreilig.', a: 't', why: '*Halte ich sie in dieser Form für voreilig.*' },
            { q: 'Er lehnt jede Veränderung ab.', a: 'f', why: 'He would support the plan under certain conditions.' },
            { q: 'Die Fahrpreise sind gestiegen.', a: 't', why: '*Zumal die Fahrpreise gestiegen sind.*' },
            { q: 'Die Stadt hat den öffentlichen Verkehr schon ausgebaut.', a: 'f', why: '*Statt zuerst den öffentlichen Verkehr auszubauen, schafft man Verbote.*' },
            { q: 'Der Verfasser fährt jeden Tag mit dem Rad.', a: 'ng', why: 'The letter does not say how he travels.' },
            { q: 'Er würde das Vorhaben unterstützen, sofern die Stadt Alternativen anbietet.', a: 't', why: '*Sofern die Stadt diesen Weg wählt, bin ich gern bereit …*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Was kritisiert der Verfasser?', o: ['Es gibt keine besseren Verbindungen.', 'Die Autos sind zu teuer.', 'Es gibt zu viele Radwege.'], why: '*Ohne dass es bessere Verbindungen mit Bus und Bahn gibt.*' },
            { q: 'Wie gewinnt man Akzeptanz?', o: ['Indem man Alternativen anbietet.', 'Indem man verbietet.', 'Indem man wartet.'], why: '*Indem man Alternativen anbietet.*' },
            { q: 'Wann unterstützt er das Vorhaben nicht mehr?', o: ['Wenn die Kosten weiter steigen.', 'Wenn weniger Autos fahren.', 'Wenn Busse billiger werden.'], why: '*Es sei denn, die Kosten steigen weiter.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the connectors.', items: [
            { s: '[Obgleich] die Idee verlockend klingt, will die Stadt die Autos verbannen, [ohne dass] es bessere Verbindungen gibt.', why: '*Obgleich* = although; *ohne dass* = without.' },
            { s: 'Das ist [umso] bedauerlicher, [als] viele pendeln müssen, [zumal] die Preise gestiegen sind.', why: '*Umso … als* and *zumal* give reasons.' },
            { s: '[Sofern] die Stadt diesen Weg wählt, unterstütze ich das Vorhaben, [es sei denn], die Kosten steigen weiter.', why: '*Sofern* = provided that; *es sei denn* = unless.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Man gewinnt Akzeptanz nicht, ___ man verbietet, sondern indem man Alternativen anbietet.', a: ['indem'], why: '*Indem* says how.' },
            { q: '___ die Idee verlockend klingt, halte ich sie für voreilig. (formal although)', a: ['Obgleich', 'Wenngleich', 'Obwohl'], why: 'Formal *although*.' },
            { q: 'Die Stadt will die Autos verbannen, ohne ___ es bessere Verbindungen gibt.', a: ['dass'], why: 'A different subject: *ohne dass*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Statt zuerst den Verkehr auszubauen, schafft man Verbote.', why: '*Statt … zu* + the main clause with the verb first.' },
            { a: 'Man gewinnt Akzeptanz, indem man Alternativen anbietet.', why: '*Indem* + verb at the end.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '___ er müde war, arbeitete er weiter. (formal)', o: ['Wenngleich', 'Wohingegen', 'Zumal'], why: 'Formal *although*: *wenngleich*.' },
      { q: 'Man lernt Sprachen, ___ man viel liest.', o: ['indem', 'ohne', 'statt'], why: '*Indem* says how.' },
      { q: 'Er ging, ___ sich zu verabschieden.', o: ['ohne', 'statt dass', 'sofern'], why: '*Ohne … zu* with the same subject.' },
      { q: 'Er tut, als ob er alles ___.', o: ['wüsste', 'weiß', 'wusste'], why: '*Als ob* + Konjunktiv II.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Wir grillen, es ___ denn, es regnet.', a: ['sei'], why: '*Es sei denn* = unless.' },
      { q: 'Er kann kaum laufen, ___ denn rennen.', a: ['geschweige'], why: '*Geschweige denn* = let alone.' },
      { q: 'Er ist sparsam, ___ sie gern Geld ausgibt.', a: ['wohingegen', 'während'], why: '*Wohingegen* shows a contrast.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the connector with its meaning.', pairs: [
      ['zumal', 'especially since'],
      ['sofern', 'provided that'],
      ['wohingegen', 'whereas'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the words in brackets.', items: [
      { q: 'Er ging. Er verabschiedete sich nicht.', cue: 'Er ging, ohne', a: ['Er ging, ohne sich zu verabschieden.'], why: '*Ohne … zu* with the same subject.' },
      { q: 'Man lernt Sprachen durch viel Lesen.', cue: 'Man lernt Sprachen, indem', a: ['Man lernt Sprachen, indem man viel liest.'], why: '*Indem* + verb at the end.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Er ging, ohne [dass] sich zu verabschieden.', a: ['ohne'], why: 'The same subject: *ohne … zu*, not *ohne dass*.' },
      { s: 'Wir grillen, es sei denn, es [regnen].', a: ['regnet'], why: '*Es regnet*, third person singular.' },
    ] },
  ],
};
