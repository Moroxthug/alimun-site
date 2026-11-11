// Spanish B2, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Although, provided that, unless',
  goal: 'Build precise complex sentences with conjunctions that take the subjunctive. Learn aunque with the indicative or the subjunctive, por mucho que, para que, con tal de que, a menos que, en caso de que, antes de que and sin que, and when to use the infinitive.',
  art: 'dragon',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['concession', 'purpose', 'condition', 'conjunctions', 'subjunctive'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Aunque, por mucho que, a pesar de',
      about: 'Express a contrast and choose between the indicative and the subjunctive after aunque.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: '**Aunque** means *although* or *even if*. With the **indicative** it shows a **fact** that you know: *Aunque está cansado, trabaja* (He is tired, and he works anyway). With the **subjunctive** it shows something that is **not known** or **not important**: *Aunque esté cansado, trabajará mañana.* **Por mucho que** (however much) always takes the **subjunctive**: *Por mucho que insistas, no cambiaré.* **A pesar de que** is followed by the **indicative** for a fact: *A pesar de que llueve, salimos.* **A pesar de** + a **noun** or an **infinitive**: *A pesar del frío, salimos.*' },
          { t: 'table', caption: 'Concession', explain: ['head', 'col1'], head: ['Connector', 'Followed by', 'Example'], rows: [
            ['aunque', 'indicative: a known fact', 'Aunque llueve, salgo.'],
            ['aunque', 'subjunctive: not known or not important', 'Aunque llueva, saldré.'],
            ['por mucho que', 'subjunctive', 'Por mucho que insistas, no cambiaré.'],
            ['a pesar de que', 'indicative for a fact', 'A pesar de que llueve, salimos.'],
            ['a pesar de', 'a noun or an infinitive', 'A pesar del frío, salimos.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In the past, **aunque + imperfecto de subjuntivo** says that something is unlikely or unreal: *Aunque tuviera dinero, no lo compraría.* With the indicative, *Aunque llovía, salimos* tells you that it was raining. After **a pesar de**, the verb is an infinitive when the subject is the same: *A pesar de estar cansado, trabaja.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Aunque **está** cansado, trabaja.', n: 'A known fact: indicative.' },
            { s: 'Aunque **esté** cansado, trabajará mañana.', n: 'Not known: subjunctive.' },
            { s: 'Por mucho que **insistas**, no cambiaré de opinión.', n: '*Por mucho que* + subjunctive.' },
            { s: 'A pesar de que **llueve**, salimos a pasear.', n: 'A fact: indicative.' },
            { s: 'A pesar **del frío**, salimos a pasear.', n: '*A pesar de* + noun.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Fact or not known? Sort the sentences.', groups: ['fact (indicative)', 'not known or not important (subjunctive)'], explain: ['groups'], items: [
            { s: 'Aunque llueve, salgo.', g: 0, why: 'It is raining: a fact.' },
            { s: 'Aunque llueva, saldré.', g: 1, why: 'It may or may not rain.' },
            { s: 'Aunque es caro, lo compro.', g: 0, why: 'It is expensive: a fact.' },
            { s: 'Aunque sea caro, lo compraré.', g: 1, why: 'I do not know the price.' },
            { s: 'Aunque está cansado, trabaja.', g: 0, why: 'He is tired: a fact.' },
            { s: 'Aunque esté cansado, trabajará.', g: 1, why: 'He may or may not be tired.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Aunque ___ cansado, trabaja. (él, estar; he is tired)', a: ['está'], why: 'A known fact: indicative.' },
            { q: 'Aunque ___ cansado, trabajará mañana. (él, estar; maybe)', a: ['esté'], why: 'Not known: subjunctive.' },
            { q: 'Por mucho que ___, no cambiaré. (tú, insistir)', a: ['insistas'], why: '*Por mucho que* + subjunctive.' },
            { q: 'A pesar de que ___, salimos. (llover; it is raining)', a: ['llueve'], why: 'A fact: indicative.' },
            { q: 'Aunque ___ mucho dinero, no lo compraría. (yo, tener)', a: ['tuviera', 'tuviese'], why: 'Unlikely: *aunque* + imperfecto de subjuntivo.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Aunque ___ mucho, no consigue aprobar. (he studies a lot)', o: ['estudia', 'estudie', 'estudiara'], why: 'A known fact: indicative.' },
            { q: 'Aunque ___ mañana, saldremos. (it may rain)', o: ['llueva', 'llueve', 'llovía'], why: 'Not known: subjunctive.' },
            { q: 'Por mucho que ___, no te creeré.', o: ['digas', 'dices', 'dirás'], why: '*Por mucho que* + subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Join the two sentences with the connector in brackets.', items: [
            { q: 'Está cansado. Trabaja.', cue: 'Aunque', a: ['Aunque está cansado, trabaja.'], why: 'A known fact: indicative.' },
            { q: 'Quizá llueva. Saldremos.', cue: 'Aunque', a: ['Aunque llueva, saldremos.'], why: 'Not known: subjunctive.' },
            { q: 'Hace frío. Salimos.', cue: 'A pesar del', a: ['A pesar del frío, salimos.'], why: '*A pesar de* + noun.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Por mucho que [insistes], no cambiaré.', a: ['insistas'], why: '*Por mucho que* + subjunctive.' },
            { s: 'A pesar [del] que llueve, salimos.', a: ['de'], why: '*A pesar de que* + verb.' },
            { s: '[Aunque] el frío, salimos.', a: ['A pesar del'], why: 'Before a noun: *a pesar de*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Aunque esté cansado, trabajará mañana.', why: '*Aunque* + subjunctive.' },
            { a: 'Por mucho que insistas, no cambiaré.', why: '*Por mucho que* + subjunctive.' },
            { a: 'A pesar del frío, salimos a pasear.', why: '*A pesar de* + noun.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Para que, con tal de que, a menos que',
      about: 'Express purpose and condition with the subjunctive.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'To say **for what purpose**, use **para que** (or **a fin de que**) + subjunctive: *Te lo explico para que lo entiendas.* To say **on one condition**, use **con tal de que**, **siempre que** or **a condición de que** + subjunctive: *Iré con tal de que no llueva.* To say **unless**, use **a menos que** or **a no ser que**: *Salimos mañana, a menos que nieve.* To say **in case**, use **en caso de que**: *En caso de que necesites ayuda, llámame.*' },
          { t: 'table', caption: 'Purpose and condition', explain: ['head', 'col1'], head: ['Connector', 'Meaning', 'Example'], rows: [
            ['para que / a fin de que', 'so that', 'Te lo explico para que lo entiendas.'],
            ['con tal de que / a condición de que', 'provided that', 'Iré con tal de que no llueva.'],
            ['siempre que', 'provided that', 'Te presto el coche siempre que lo devuelvas.'],
            ['a menos que / a no ser que', 'unless', 'Salimos, a menos que nieve.'],
            ['en caso de que', 'in case', 'En caso de que necesites ayuda, llámame.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Siempre que** has two meanings. With the **subjunctive** it means *provided that*: *Voy siempre que tú vengas.* With the **indicative** it means *whenever*: *Siempre que llego, llamo.* After a past verb, use the **imperfecto de subjuntivo**: *Te lo expliqué para que lo entendieras.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Te lo explico **para que lo entiendas**.', n: 'Purpose.' },
            { s: 'Iré **con tal de que no llueva**.', n: 'One condition.' },
            { s: 'Te presto el coche **siempre que lo devuelvas** mañana.', n: 'A condition.' },
            { s: 'Salimos mañana, **a menos que nieve**.', n: 'An exception.' },
            { s: '**En caso de que necesites** ayuda, llámame.', n: 'In case.' },
          ] },
          { t: 'dialogue', title: 'Un picnic', lines: [
            { who: 'Ana', s: '¿Hacemos el picnic el domingo?' },
            { who: 'Pedro', s: 'Vale, con tal de que no llueva.' },
            { who: 'Ana', s: 'Salimos temprano, a menos que nieve en la sierra.' },
            { who: 'Pedro', s: 'Llevo una manta en caso de que haga frío.' },
            { who: 'Ana', s: 'Te llamo el sábado para que sepas la hora.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the subjunctive.', items: [
            { q: 'Te lo explico para que lo ___. (tú, entender)', a: ['entiendas'], why: '*Para que* + subjunctive.' },
            { q: 'Iré con tal de que no ___. (llover)', a: ['llueva'], why: '*Con tal de que* + subjunctive.' },
            { q: 'Te presto el coche siempre que lo ___ mañana. (tú, devolver)', a: ['devuelvas'], why: '*Siempre que* (provided that) + subjunctive.' },
            { q: 'Salimos mañana, a menos que ___. (nevar)', a: ['nieve'], why: '*A menos que* + subjunctive.' },
            { q: 'En caso de que ___ ayuda, llámame. (tú, necesitar)', a: ['necesites'], why: '*En caso de que* + subjunctive.' },
            { q: 'Te lo expliqué para que lo ___. (tú, entender)', a: ['entendieras', 'entendieses'], why: 'After a past verb: imperfecto de subjuntivo.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right connector.', items: [
            { q: 'Hablo despacio ___ me entiendas.', o: ['para que', 'aunque', 'a pesar de'], why: 'Purpose: *para que*.' },
            { q: 'Iré ___ no llueva.', o: ['con tal de que', 'aunque', 'como si'], why: 'One condition: *con tal de que*.' },
            { q: 'Saldremos mañana, ___ nieve.', o: ['a menos que', 'antes de que', 'sin que'], why: '*A menos que* = unless.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the connector with its meaning.', pairs: [
            ['para que', 'so that'],
            ['con tal de que', 'provided that'],
            ['a menos que', 'unless'],
            ['en caso de que', 'in case'],
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the connector.', items: [
            { q: 'Hablo despacio. Quiero que me entiendas.', cue: 'Hablo despacio', a: ['Hablo despacio para que me entiendas.'], why: '*Para que* + subjunctive.' },
            { q: 'Voy. Pero no debe llover.', cue: 'Voy', a: ['Voy con tal de que no llueva.'], why: '*Con tal de que* + subjunctive.' },
            { q: 'Salimos mañana. Si nieva, no salimos.', cue: 'Salimos mañana', a: ['Salimos mañana, a menos que nieve.'], why: '*A menos que* + subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Voy con tal de que no [llueve].', a: ['llueva'], why: '*Con tal de que* + subjunctive.' },
            { s: 'Hablo despacio para que [entiendes].', a: ['entiendas'], why: '*Para que* + subjunctive.' },
            { s: 'Salimos, a menos que [nieva].', a: ['nieve'], why: '*A menos que* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Iré con tal de que no llueva.', why: '*Con tal de que* + subjunctive.' },
            { a: 'Te lo explico para que lo entiendas.', why: '*Para que* + subjunctive.' },
            { a: 'Salimos mañana a menos que nieve.', why: '*A menos que* + subjunctive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Antes de que, sin que, de modo que',
      about: 'Use the subjunctive for time and manner, and the infinitive when the subject is the same.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Several other conjunctions take the **subjunctive**: **antes de que** (before), **sin que** (without), **de modo que** and **de manera que** (so that). When the **subject is the same** in both parts, use the **infinitive** with **antes de, sin, para**: *Antes de salir, cierro la puerta* (the same person), but *Antes de que salgas, cierro la puerta* (two people). **Después de que** takes the indicative for a fact: *Después de que saliste, llamé.* **De modo que** takes the subjunctive for a purpose and the indicative for a result: *Habla despacio de modo que te entiendan. Llegué tarde, de modo que no cené.*' },
          { t: 'table', caption: 'Same subject or different subject', explain: ['head'], head: ['Same subject (infinitive)', 'Different subject (que + subjunctive)'], rows: [
            ['Antes de salir, cierro la puerta.', 'Antes de que salgas, cierro la puerta.'],
            ['Se fue sin hablar.', 'Se fue sin que nadie hablara.'],
            ['Estudio para aprobar.', 'Estudio para que mis padres estén contentos.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Antes de que** and **sin que** always take the subjunctive. After a past verb, use the **imperfecto de subjuntivo**: *Se fue sin que nadie lo viera.* **Antes que** without *de* is for a choice: *Prefiero esto antes que aquello.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Antes de que te vayas**, quiero despedirme.', n: 'Two subjects: *antes de que* + subjunctive.' },
            { s: '**Antes de irme**, me despedí de todos.', n: 'One subject: *antes de* + infinitive.' },
            { s: 'Se fue **sin que nadie lo viera**.', n: '*Sin que* + imperfecto de subjuntivo.' },
            { s: 'Habla despacio **de modo que te entiendan**.', n: 'Purpose: subjunctive.' },
            { s: 'Llegué tarde, **de modo que no cené**.', n: 'Result: indicative.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Same subject or different subject? Sort the phrases.', groups: ['same subject', 'different subject'], explain: ['groups'], items: [
            { s: 'antes de salir', g: 0, why: '*Antes de* + infinitive: one subject.' },
            { s: 'antes de que salgas', g: 1, why: '*Antes de que* + subjunctive: two subjects.' },
            { s: 'sin hablar', g: 0, why: '*Sin* + infinitive: one subject.' },
            { s: 'sin que nadie hable', g: 1, why: '*Sin que* + subjunctive: two subjects.' },
            { s: 'para aprobar', g: 0, why: '*Para* + infinitive: one subject.' },
            { s: 'para que apruebes', g: 1, why: '*Para que* + subjunctive: two subjects.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word or verb.', items: [
            { q: 'Antes de que tú ___, quiero hablar contigo. (salir)', a: ['salgas'], why: '*Antes de que* + subjunctive.' },
            { q: 'Se fue sin que nadie lo ___. (ver)', a: ['viera', 'viese'], why: '*Sin que* + imperfecto de subjuntivo.' },
            { q: 'Antes ___ salir, cierro la puerta.', a: ['de'], why: 'One subject: *antes de* + infinitive.' },
            { q: 'Estudio para ___ el examen. (aprobar)', a: ['aprobar'], why: 'One subject: *para* + infinitive.' },
            { q: 'Llegué tarde, de modo que no ___. (yo, cenar)', a: ['cené'], why: 'A result: indicative.' },
            { q: 'Habla despacio de modo que te ___. (ellos, entender)', a: ['entiendan'], why: 'A purpose: subjunctive.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Antes ___ salir, cierro la puerta.', o: ['de', 'que', 'de que'], why: 'One subject: *antes de* + infinitive.' },
            { q: 'Antes de ___ tú salgas, cierro la puerta.', o: ['que', 'de', 'como'], why: 'Two subjects: *antes de que* + subjunctive.' },
            { q: 'Se fue sin ___ nadie se diera cuenta.', o: ['que', 'de', 'a'], why: 'Two subjects: *sin que* + subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the phrase in brackets.', items: [
            { q: 'Salgo. Primero cierro la puerta.', cue: 'Antes de', a: ['Antes de salir, cierro la puerta.'], why: 'One subject: *antes de* + infinitive.' },
            { q: 'Tú sales. Primero quiero hablar contigo.', cue: 'Antes de que', a: ['Antes de que salgas, quiero hablar contigo.'], why: 'Two subjects: *antes de que* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Antes de que [sales], quiero hablar contigo.', a: ['salgas'], why: '*Antes de que* + subjunctive.' },
            { s: 'Antes [que] salir, cierro la puerta.', a: ['de'], why: 'One subject: *antes de* + infinitive.' },
            { s: 'Se fue sin que nadie lo [ve].', a: ['viera', 'viese'], why: '*Sin que* + imperfecto de subjuntivo.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Antes de que salgas, quiero hablar contigo.', why: '*Antes de que* + subjunctive.' },
            { a: 'Antes de salir, me despedí de todos.', why: '*Antes de* + infinitive.' },
            { a: 'Se fue sin que nadie lo viera.', why: '*Sin que* + imperfecto de subjuntivo.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un autobús cada diez minutos',
      about: 'Read an opinion piece on public transport.',
      art: 'dragon',
      spreads: [
        [
          { t: 'reading', title: 'El transporte público en la ciudad', md: 'Aunque mucha gente piense que el coche es el medio más cómodo, en la ciudad el transporte público puede ser la mejor opción, siempre que funcione bien. Un autobús que llega tarde o que no pasa lleva a la gente a volver al coche, a pesar del tráfico.\n\nPara que más personas usen el transporte público, el ayuntamiento debería aumentar las líneas, a menos que quiera seguir pagando el coste del tráfico. Antes de que la situación empeore, hacen falta decisiones valientes: billetes más sencillos, carriles reservados y horarios claros.\n\nSin que nadie tenga que cambiar sus costumbres de un día para otro, se puede empezar por una línea.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Mucha gente piensa que el coche es el medio más cómodo.', a: 't', why: '*Aunque mucha gente piense que el coche es el medio más cómodo.*' },
            { q: 'El autor dice que el transporte público no sirve para nada.', a: 'f', why: 'He says it can be the best option.' },
            { q: 'El autor propone billetes más sencillos.', a: 't', why: '*Billetes más sencillos, carriles reservados y horarios claros.*' },
            { q: 'El ayuntamiento ya ha construido una línea nueva.', a: 'ng', why: 'The text does not say so.' },
            { q: 'El autor aconseja cambiarlo todo en un día.', a: 'f', why: '*Sin que nadie tenga que cambiar sus costumbres de un día para otro.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: '¿En qué condición es el transporte público la mejor opción?', o: ['Siempre que funcione bien.', 'Siempre que cueste poco.', 'Siempre que sea nuevo.'], why: '*Siempre que funcione bien.*' },
            { q: '¿Qué lleva a la gente a volver al coche?', o: ['Un autobús que llega tarde.', 'El precio del billete.', 'El ruido.'], why: '*Un autobús que llega tarde … lleva a la gente a volver al coche.*' },
            { q: '¿Por dónde se puede empezar?', o: ['Por una línea.', 'Por todas las líneas.', 'Por las calles.'], why: '*Se puede empezar por una línea.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the subjunctive.', items: [
            { s: 'Aunque mucha gente [piense] que el coche es el medio más cómodo, el transporte público puede ser la mejor opción, siempre que [funcione] bien.', why: '*Piense* follows *aunque*; *funcione* follows *siempre que*.' },
            { s: 'Para que más personas [usen] el transporte público, el ayuntamiento debería aumentar las líneas.', why: '*Usen* follows *para que*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Antes de que la situación ___, hacen falta decisiones valientes. (empeorar)', a: ['empeore'], why: '*Antes de que* + subjunctive.' },
            { q: 'El transporte público es la mejor opción, siempre que ___ bien. (funcionar)', a: ['funcione'], why: '*Siempre que* (provided that) + subjunctive.' },
            { q: 'Para que más personas ___ el transporte público, hay que aumentar las líneas. (usar)', a: ['usen'], why: '*Para que* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Aunque piense que el coche es cómodo, el autobús sirve.', why: '*Aunque* + subjunctive.' },
            { a: 'Se puede empezar por una sola línea.', why: 'A simple conclusion.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Aunque ___ mañana, saldremos. (it may rain)', o: ['llueva', 'llueve', 'llovía'], why: 'Not known: subjunctive.' },
      { q: 'Hablo despacio ___ me entiendas.', o: ['para que', 'aunque', 'a pesar de'], why: 'Purpose: *para que*.' },
      { q: 'Saldremos, ___ nieve.', o: ['a menos que', 'antes de que', 'sin que'], why: '*A menos que* = unless.' },
      { q: '___ salir, cierro la puerta.', o: ['Antes de', 'Antes de que', 'Antes que'], why: 'One subject: *antes de* + infinitive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
      { q: 'Iré con tal de que no ___. (llover)', a: ['llueva'], why: '*Con tal de que* + subjunctive.' },
      { q: 'Se fue sin que nadie lo ___. (ver)', a: ['viera', 'viese'], why: '*Sin que* + imperfecto de subjuntivo.' },
      { q: 'Por mucho que ___, no cambiaré. (tú, insistir)', a: ['insistas'], why: '*Por mucho que* + subjunctive.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the connector with its meaning.', pairs: [
      ['para que', 'so that'],
      ['a menos que', 'unless'],
      ['en caso de que', 'in case'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the word in brackets.', items: [
      { q: 'Está cansado. Trabaja.', cue: 'Aunque', a: ['Aunque está cansado, trabaja.'], why: 'A known fact: indicative.' },
      { q: 'Hablo despacio. Quiero que me entiendas.', cue: 'Hablo despacio', a: ['Hablo despacio para que me entiendas.'], why: '*Para que* + subjunctive.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Voy con tal de que no [llueve].', a: ['llueva'], why: '*Con tal de que* + subjunctive.' },
      { s: 'Antes [que] salir, cierro la puerta.', a: ['de'], why: 'One subject: *antes de* + infinitive.' },
    ] },
  ],
};
