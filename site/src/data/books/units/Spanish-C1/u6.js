// Spanish C1, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Hypotheses and conditions with nuance',
  goal: 'Express conditions and hypotheses precisely, in formal writing and in speech. Learn conditions without si (de haberlo sabido, de no ser por), como with the subjunctive, siempre y cuando and salvo que, and the spoken imperfecto of hypotheses.',
  art: 'owl',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['conditions', 'subjunctive', 'hypotheses', 'debate'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'De haberlo sabido, de no ser por',
      about: 'Express conditions without si.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Spanish can express a condition **without si**. **De + infinitive** replaces *si* + verb: **De haberlo sabido, habría venido.** (*If I had known, I would have come.*) **De llover mañana, suspenderemos la excursión.** (*If it rains tomorrow, we will cancel the trip.*) **De no ser por** means *if it were not for*: **De no ser por ti, estaría perdido.** The **gerund** can also carry a condition: **Llegando antes, habríamos encontrado sitio.** **Bien mirado** means *all things considered*: **Bien mirado, no es mala idea.** These forms are **written and formal**; in speech, people say **Si lo hubiera sabido** or **Si llueve**.' },
          { t: 'table', caption: 'Conditions without si', explain: ['head', 'col1'], head: ['Structure', 'Example', 'Everyday way'], rows: [
            ['de + compound infinitive', 'De haberlo sabido, habría venido.', 'Si lo hubiera sabido, habría venido.'],
            ['de + infinitive', 'De llover mañana, suspenderemos la excursión.', 'Si llueve mañana, suspenderemos la excursión.'],
            ['de no ser por', 'De no ser por ti, estaría perdido.', 'Si no fuera por ti, estaría perdido.'],
            ['gerund', 'Llegando antes, habríamos encontrado sitio.', 'Si hubiéramos llegado antes, …'],
            ['bien mirado', 'Bien mirado, no es mala idea.', 'Si lo piensas bien, no es mala idea.'],
          ] },
          { t: 'tip', art: 'owl', md: '**De haberlo sabido** is about the **past** and goes with the **condicional perfecto**: **habría venido**. **De + simple infinitive** is about the **future** and goes with the **future**: **De llover, suspenderemos**. **De no ser por** is about the **present** or the **past** and goes with the **condicional**: **estaría perdido**. The **gerund** condition is common in **Spain** in writing; in **Latin America** people prefer **si** + verb. Do not mix the pattern: *De haberlo sabido, vengo* is wrong.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**De haberlo sabido**, habría venido.', n: 'If I had known.' },
            { s: '**De llover** mañana, suspenderemos la excursión.', n: 'If it rains.' },
            { s: '**De no ser por** ti, estaría perdido.', n: 'If it were not for you.' },
            { s: '**Llegando** antes, habríamos encontrado sitio.', n: 'The gerund as a condition.' },
            { s: '**Bien mirado**, no es mala idea.', n: 'All things considered.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the structure with its meaning.', pairs: [
            ['de haberlo sabido', 'if I had known'],
            ['de llover', 'if it rains'],
            ['de no ser por', 'if it were not for'],
            ['bien mirado', 'all things considered'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'De ___ sabido, habría venido. (haber)', a: ['haberlo'], why: '*De* + compound infinitive.' },
            { q: 'De ___ mañana, suspenderemos la excursión. (llover)', a: ['llover'], why: '*De* + infinitive for the future.' },
            { q: 'De no ___ por ti, estaría perdido. (ser)', a: ['ser'], why: '*De no ser por*.' },
            { q: '___ antes, habríamos encontrado sitio. (llegar, gerund)', a: ['Llegando'], why: 'The gerund as a condition.' },
            { q: 'Bien ___, no es mala idea. (mirar, participle)', a: ['mirado'], why: '*Bien mirado*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'De haberlo sabido, ___ venido.', o: ['habría', 'he', 'había'], why: 'The condicional perfecto.' },
            { q: 'De ___ por ti, estaría perdido.', o: ['no ser', 'no estar', 'no haber'], why: '*De no ser por*.' },
            { q: 'De llover mañana, ___ la excursión.', o: ['suspenderemos', 'suspenderíamos', 'suspendimos'], why: 'The future.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it without si.', items: [
            { q: 'Si lo hubiera sabido, habría venido.', cue: 'De haberlo', a: ['De haberlo sabido, habría venido.'], why: '*De* + compound infinitive.' },
            { q: 'Si no fuera por ti, estaría perdido.', cue: 'De no ser', a: ['De no ser por ti, estaría perdido.'], why: '*De no ser por*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right form.', items: [
            { s: 'De haberlo sabido, [vengo].', a: ['habría venido'], why: 'The past condition needs the condicional perfecto.' },
            { s: 'De [no estar] por ti, estaría perdido.', a: ['no ser'], why: '*De no ser por*.' },
            { s: 'De [lloviendo] mañana, suspenderemos la excursión.', a: ['llover'], why: '*De* + infinitive.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'De haberlo sabido, habría venido.', why: '*De* + compound infinitive.' },
            { a: 'De no ser por ti, estaría perdido.', why: '*De no ser por*.' },
            { a: 'Bien mirado, no es mala idea.', why: 'A fixed phrase.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Como llegues tarde, siempre y cuando, salvo que',
      about: 'Choose the conjunction and the mood for conditions and causes.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: '**Como** + **subjunctive** states a condition that sounds like a warning: **Como llegues tarde, no te espero.** **Siempre y cuando** means *as long as* and takes the subjunctive: **Puedes venir siempre y cuando traigas tu comida.** **Salvo que** means *unless* and also takes the subjunctive: **Iremos, salvo que llueva.** **Excepto si** takes the **indicative**: **Iremos, excepto si llueve.** For **cause**, **puesto que**, **dado que** and **ya que** take the **indicative**: **Puesto que no hay pruebas, se archiva el caso.** **Dado que el plazo terminó, la solicitud se rechaza.**' },
          { t: 'table', caption: 'Conditions and causes', explain: ['head', 'col1'], head: ['Conjunction', 'Meaning', 'Mood', 'Example'], rows: [
            ['como', 'if (warning)', 'subjunctive', 'Como llegues tarde, no te espero.'],
            ['siempre y cuando', 'as long as', 'subjunctive', 'Puedes venir siempre y cuando traigas tu comida.'],
            ['salvo que', 'unless', 'subjunctive', 'Iremos, salvo que llueva.'],
            ['excepto si', 'except if', 'indicative', 'Iremos, excepto si llueve.'],
            ['puesto que / dado que', 'since', 'indicative', 'Puesto que no hay pruebas, …'],
          ] },
          { t: 'tip', art: 'owl', md: '**Como** has several uses: with the **indicative** it is a **cause** (**Como llovía, nos quedamos**) and with the **subjunctive** it is a **condition** (**Como llueva, nos quedamos**). **Puesto que** and **dado que** are **formal**; in speech, use **porque** or **ya que**. **Salvo que** and **a menos que** mean the same; **salvo que** is a little more formal. In **Latin America**, **siempre que** and **siempre y cuando** are both common.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Como llegues** tarde, no te espero.', n: 'A warning: subjunctive.' },
            { s: 'Puedes venir **siempre y cuando traigas** tu comida.', n: 'As long as.' },
            { s: 'Iremos, **salvo que llueva**.', n: 'Unless.' },
            { s: 'Iremos, **excepto si llueve**.', n: 'Except if: indicative.' },
            { s: '**Puesto que** no hay pruebas, se archiva el caso.', n: 'Since: indicative.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Condition or cause? Sort the sentences.', groups: ['condition', 'cause'], explain: ['groups'], items: [
            { s: 'Como llegues tarde, no te espero.', g: 0, why: 'A warning.' },
            { s: 'Iremos, salvo que llueva.', g: 0, why: 'Unless.' },
            { s: 'Puedes venir siempre y cuando traigas tu comida.', g: 0, why: 'As long as.' },
            { s: 'Puesto que no hay pruebas, se archiva el caso.', g: 1, why: 'A reason.' },
            { s: 'Dado que el plazo terminó, la solicitud se rechaza.', g: 1, why: 'A reason.' },
            { s: 'Ya que estás aquí, ayúdame.', g: 1, why: 'A reason.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Como ___ tarde, no te espero. (llegar, tú)', a: ['llegues'], why: '*Como* + subjunctive.' },
            { q: 'Puedes venir siempre y cuando ___ tu comida. (traer, tú)', a: ['traigas'], why: '*Siempre y cuando* + subjunctive.' },
            { q: 'Iremos, salvo que ___. (llover)', a: ['llueva'], why: '*Salvo que* + subjunctive.' },
            { q: 'Puesto que no ___ pruebas, se archiva el caso. (haber)', a: ['hay'], why: '*Puesto que* + indicative.' },
            { q: 'Iremos, excepto si ___. (llover)', a: ['llueve'], why: '*Excepto si* + indicative.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Dado que el plazo ___, la solicitud se rechaza.', o: ['terminó', 'termine', 'terminara'], why: '*Dado que* + indicative.' },
            { q: 'Iremos salvo que ___ mal tiempo.', o: ['haga', 'hace', 'hará'], why: '*Salvo que* + subjunctive.' },
            { q: 'Como ___ tarde, nos vamos sin ti.', o: ['llegues', 'llegas', 'llegarás'], why: '*Como* + subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with the word in brackets.', items: [
            { q: 'Si llegas tarde, no te espero.', cue: 'Como', a: ['Como llegues tarde, no te espero.'], why: '*Como* + subjunctive.' },
            { q: 'Como el plazo terminó, la solicitud se rechaza.', cue: 'Dado que', a: ['Dado que el plazo terminó, la solicitud se rechaza.'], why: '*Dado que* + indicative.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Como [llegas] tarde, no te espero.', a: ['llegues'], why: '*Como* + subjunctive for a condition.' },
            { s: 'Iremos, salvo que [llueve].', a: ['llueva'], why: '*Salvo que* + subjunctive.' },
            { s: 'Puesto que no [haya] pruebas, se archiva el caso.', a: ['hay'], why: '*Puesto que* + indicative.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Como llegues tarde, no te espero.', why: '*Como* + subjunctive.' },
            { a: 'Iremos, salvo que llueva mucho.', why: '*Salvo que* + subjunctive.' },
            { a: 'Puesto que no hay pruebas, se archiva el caso.', why: '*Puesto que* + indicative.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Si lo sabía, venía',
      about: 'Use the imperfecto in spoken hypotheses.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'In **spoken Spanish**, the imperfecto often replaces the subjunctive and the condicional in hypotheses. The formal sentence **Si lo hubiera sabido, habría venido** becomes **Si lo sabía, venía.** And **Si tuviera tiempo, te ayudaría** becomes **Si tenía tiempo, te ayudaba.** This is natural in conversation and in informal writing, but not in a formal text. A related spoken form is **por si acaso** with the **present indicative**: **Llévate el paraguas, por si acaso llueve.** Spoken Spanish also tells what **almost happened** with the present: **Casi me caigo.** And **¿Y si …?** opens an open question: **¿Y si llueve?**' },
          { t: 'table', caption: 'The imperfecto in hypotheses', explain: ['head', 'col1'], head: ['Spoken', 'Formal', 'Meaning'], rows: [
            ['Si lo sabía, venía.', 'Si lo hubiera sabido, habría venido.', 'If I had known, I would have come.'],
            ['Si tenía tiempo, te ayudaba.', 'Si tuviera tiempo, te ayudaría.', 'If I had time, I would help you.'],
            ['Casi me caigo.', 'Estuve a punto de caerme.', 'I almost fell.'],
            ['Llévate el paraguas, por si acaso llueve.', 'Llévese el paraguas, por si lloviera.', 'Take an umbrella, just in case.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use the spoken form with friends, never in an exam essay or a letter. For writing, keep **si + imperfecto de subjuntivo + condicional** or **si + pluscuamperfecto de subjuntivo + condicional perfecto**. **Por si acaso** takes the **indicative** in speech (**por si acaso llueve**) and the **imperfect subjunctive** in careful writing (**por si lloviera**). In **Latin America**, the imperfecto in hypotheses is heard in the same way.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Si lo **sabía**, **venía**.', n: 'Spoken for: if I had known, I would have come.' },
            { s: 'Si **tenía** tiempo, te **ayudaba**.', n: 'Spoken for: if I had time, I would help you.' },
            { s: '**Casi me caigo.**', n: 'I almost fell.' },
            { s: 'Llévate el paraguas, **por si acaso llueve**.', n: 'Just in case.' },
            { s: '**¿Y si llueve?**', n: 'An open question.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Spoken or formal? Sort the sentences.', groups: ['spoken', 'formal'], explain: ['groups'], items: [
            { s: 'Si lo sabía, venía.', g: 0, why: 'The imperfecto replaces the subjunctive.' },
            { s: 'Si tenía tiempo, te ayudaba.', g: 0, why: 'Spoken style.' },
            { s: 'Casi me caigo.', g: 0, why: 'Spoken style.' },
            { s: 'Si lo hubiera sabido, habría venido.', g: 1, why: 'Formal: pluscuamperfecto de subjuntivo.' },
            { s: 'Si tuviera tiempo, te ayudaría.', g: 1, why: 'Formal style.' },
            { s: 'Estuve a punto de caerme.', g: 1, why: 'Neutral and written.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Si lo ___, venía. (saber, imperfecto)', a: ['sabía'], why: 'The spoken hypothesis.' },
            { q: 'Si tenía tiempo, te ___. (ayudar, imperfecto)', a: ['ayudaba'], why: 'The imperfecto in the result clause.' },
            { q: 'Casi me ___. (caer, presente)', a: ['caigo'], why: '*Casi* + present.' },
            { q: 'Llévate el paraguas, por si acaso ___. (llover)', a: ['llueve'], why: '*Por si acaso* + indicative in speech.' },
            { q: '¿Y ___ llueve?', a: ['si'], why: '*¿Y si …?*' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the spoken sentence with the formal one.', pairs: [
            ['Si lo sabía, venía.', 'Si lo hubiera sabido, habría venido.'],
            ['Si tenía tiempo, te ayudaba.', 'Si tuviera tiempo, te ayudaría.'],
            ['Casi me caigo.', 'Estuve a punto de caerme.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it in a formal register.', items: [
            { q: 'Si lo sabía, venía.', cue: 'Si lo hubiera', a: ['Si lo hubiera sabido, habría venido.'], why: 'Pluscuamperfecto de subjuntivo + condicional perfecto.' },
            { q: 'Si tenía tiempo, te ayudaba.', cue: 'Si tuviera', a: ['Si tuviera tiempo, te ayudaría.'], why: 'Imperfecto de subjuntivo + condicional.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Si lo hubiera sabido, [venía].', a: ['habría venido'], why: 'The formal hypothesis needs the condicional perfecto.' },
            { s: 'Si tuviera tiempo, te [ayudaba].', a: ['ayudaría'], why: 'The formal hypothesis needs the condicional.' },
            { s: 'Llévate el paraguas, por si acaso [llovió], porque ya hay nubes.', a: ['llueve'], why: 'In speech, *por si acaso* takes the present indicative here.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Si lo sabía, venía contigo.', why: 'The spoken hypothesis.' },
            { a: 'Llévate el paraguas, por si acaso llueve.', why: '*Por si acaso* + indicative.' },
            { a: 'Si lo hubiera sabido, habría venido.', why: 'The formal hypothesis.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un debate sobre una decisión pública',
      about: 'Read a debate full of conditions and causes.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'La plaza cerrada al tráfico', md: 'El pleno del ayuntamiento debate el cierre de una plaza al tráfico.\n\nCONCEJALA: Cerraremos la plaza, puesto que el ruido es excesivo. Siempre y cuando los comerciantes lo pidan, revisaremos la decisión pasados seis meses.\n\nCOMERCIANTE: De haberlo sabido, habría venido antes a la reunión. Bien mirado, la idea es buena, pero como los clientes no lleguen, nos quedamos sin ventas.\n\nCONCEJALA: De no ser por el ruido, no cerraríamos la plaza. Habrá un horario de reparto por la mañana, salvo que haya obras.\n\nCOMERCIANTE: Dado que los proveedores necesitan acceso, aceptamos. Por si acaso llueve, ¿habrá toldos?\n\nVECINO: Si lo sabía, participaba antes. ¿Y si probamos un año?' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'La plaza se cierra porque el ruido es excesivo.', a: 't', why: '*Puesto que el ruido es excesivo.*' },
            { q: 'La decisión puede revisarse pasados seis meses.', a: 't', why: '*Revisaremos la decisión pasados seis meses.*' },
            { q: 'El comerciante cree que la idea es mala.', a: 'f', why: '*Bien mirado, la idea es buena.*' },
            { q: 'Habrá un horario de reparto por la mañana.', a: 't', why: '*Un horario de reparto por la mañana.*' },
            { q: 'El vecino participó antes en la reunión.', a: 'f', why: '*Si lo sabía, participaba antes.*' },
            { q: 'La plaza tiene una fuente.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: '¿Cuál es el problema principal del comerciante?', o: ['Los clientes pueden no llegar.', 'El precio del alquiler.', 'El ruido.'], why: '*Como los clientes no lleguen, nos quedamos sin ventas.*' },
            { q: '¿Qué solución propone la concejala?', o: ['Un horario de reparto por la mañana.', 'Reabrir la plaza.', 'Un parque nuevo.'], why: '*Un horario de reparto por la mañana.*' },
            { q: '¿Qué propone el vecino?', o: ['Probar un año.', 'Cerrar para siempre.', 'No hacer nada.'], why: '*¿Y si probamos un año?*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the conjunctions of condition and cause.', items: [
            { s: 'Cerraremos la plaza, [puesto que] el ruido es excesivo. [Siempre y cuando] los comerciantes lo pidan, revisaremos la decisión.', why: 'Cause and condition.' },
            { s: '[De haberlo sabido], habría venido antes. [Bien mirado], la idea es buena, pero [como] los clientes no lleguen, nos quedamos sin ventas.', why: 'Conditions without *si*.' },
            { s: '[De no ser por] el ruido, no cerraríamos la plaza. Habrá un horario de reparto, [salvo que] haya obras.', why: '*De no ser por* and *salvo que*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Cerraremos la plaza, ___ que el ruido es excesivo. (since)', a: ['puesto'], why: '*Puesto que*.' },
            { q: 'Como los clientes no ___, nos quedamos sin ventas. (llegar)', a: ['lleguen'], why: '*Como* + subjunctive.' },
            { q: 'Por si acaso ___, ¿habrá toldos? (llover)', a: ['llueve'], why: '*Por si acaso* + indicative.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Si lo sabía, participaba antes.', why: 'The spoken hypothesis.' },
            { a: 'De no ser por el ruido, no cerraríamos la plaza.', why: '*De no ser por*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'De haberlo sabido, ___ venido.', o: ['habría', 'he', 'había'], why: 'The condicional perfecto.' },
      { q: 'Como ___ tarde, no te espero.', o: ['llegues', 'llegas', 'llegarás'], why: '*Como* + subjunctive.' },
      { q: 'Iremos, salvo que ___.', o: ['llueva', 'llueve', 'lloverá'], why: '*Salvo que* + subjunctive.' },
      { q: 'Puesto que no ___ pruebas, se archiva el caso.', o: ['hay', 'haya', 'hubiera'], why: '*Puesto que* + indicative.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'De no ___ por ti, estaría perdido. (ser)', a: ['ser'], why: '*De no ser por*.' },
      { q: 'Si lo ___, venía. (saber, imperfecto)', a: ['sabía'], why: 'The spoken hypothesis.' },
      { q: 'Puedes venir siempre y cuando ___ tu comida. (traer, tú)', a: ['traigas'], why: '*Siempre y cuando* + subjunctive.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the spoken sentence with the formal one.', pairs: [
      ['Si lo sabía, venía.', 'Si lo hubiera sabido, habría venido.'],
      ['Si tenía tiempo, te ayudaba.', 'Si tuviera tiempo, te ayudaría.'],
      ['Casi me caigo.', 'Estuve a punto de caerme.'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the word in brackets.', items: [
      { q: 'Si lo hubiera sabido, habría venido.', cue: 'De haberlo', a: ['De haberlo sabido, habría venido.'], why: '*De* + compound infinitive.' },
      { q: 'Si llegas tarde, no te espero.', cue: 'Como', a: ['Como llegues tarde, no te espero.'], why: '*Como* + subjunctive.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Como [llegas] tarde, no te espero.', a: ['llegues'], why: '*Como* + subjunctive.' },
      { s: 'De haberlo sabido, [vengo].', a: ['habría venido'], why: 'The past condition needs the condicional perfecto.' },
    ] },
  ],
};
