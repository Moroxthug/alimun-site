// Spanish B1 for moving abroad, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'At the doctor',
  goal: 'Use the health system: family doctor, specialists, pharmacy and sick notes.',
  art: 'churro',
  tags: { skills: ['speaking', 'reading', 'vocabulary', 'grammar'], topics: ['health', 'symptoms', 'desde-hace', 'pharmacy', 'sick-note'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Symptoms and how long',
      about: 'Say what is wrong and how long you have had it, with desde hace, hace… que and llevar.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'At the doctor’s, say **what** is wrong and **for how long**. Spanish uses the **present tense** for something that started in the past and is still going on. English says *I have had a cough for three days*, but Spanish says *Tengo tos **desde hace** tres días*.' },
          { t: 'examples', items: [
            { s: 'Tengo dolor de garganta **desde hace** tres días.', n: 'Present tense: the pain started three days ago and has not stopped.' },
            { s: '**Hace** una semana **que** me duele la espalda.', n: '*Hace* + time + *que* + present: the same idea, with the time first.' },
            { s: '**Llevo** dos días **con** fiebre.', n: '*llevar* + time + *con*: very common in Spain.' },
            { s: 'Tengo tos **desde el** fin de semana.', n: '*desde* + a point in time: since the weekend.' },
          ] },
          { t: 'tip', art: 'churro', md: 'Use *desde hace* with an amount of time (*desde hace dos semanas*) and *desde* with a moment (*desde el lunes*, *desde ayer*). To ask: *¿Desde cuándo…?* or *¿Cuánto tiempo hace que…?*' },
        ],
        [
          { t: 'table', caption: 'Saying what is wrong', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['Me duele la cabeza.', 'I have a headache.'],
            ['Me duelen los oídos.', 'My ears hurt.'],
            ['Tengo fiebre.', 'I have a temperature.'],
            ['Tengo tos y mocos.', 'I have a cough and a runny nose.'],
            ['Estoy mareado / mareada.', 'I feel dizzy.'],
            ['Tengo náuseas.', 'I feel sick, as if I might vomit.'],
            ['Me he resfriado.', 'I have caught a cold.'],
          ] },
          { t: 'text', md: '*doler* works like *gustar*: the body part is the subject. One body part takes *duele*, two or more take *duelen*: *Me **duele** el pie*, but *Me **duelen** los pies*. Use *el*, *la*, *los*, *las* with body parts, not *mi*: *Me duele **la** rodilla*.' },
        ],
        [
          { t: 'dialogue', title: 'En la consulta', lines: [
            { who: 'Médica', s: 'Buenos días, Omar. Siéntese. ¿Qué le pasa?' },
            { who: 'Omar', s: 'Tengo un dolor de garganta muy fuerte desde hace cuatro días, y también tos.' },
            { who: 'Médica', s: '¿Tiene fiebre?' },
            { who: 'Omar', s: 'Sí, anoche tenía treinta y ocho y medio. Y tengo mucho frío.' },
            { who: 'Médica', s: '¿Está tomando algún medicamento?' },
            { who: 'Omar', s: 'Solo unas pastillas para el dolor, pero no me ayudan mucho.' },
            { who: 'Médica', s: 'Bien. Voy a escucharle los pulmones. Respire hondo… y ahora suelte el aire.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the visit. True or false?', items: [
            { q: 'A Omar le duele la garganta desde hace cuatro días.', a: 't', why: '*un dolor de garganta muy fuerte desde hace cuatro días*.' },
            { q: 'Omar no tiene fiebre.', a: 'f', why: 'Last night he had 38.5 degrees.' },
            { q: 'Las pastillas le ayudan mucho.', a: 'f', why: '*no me ayudan mucho*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete what the patients say.', items: [
            { q: 'Tengo fiebre desde ___ dos días.', a: ['hace'], why: 'An amount of time: *desde hace dos días*.' },
            { q: 'Me ___ los ojos desde ayer. (doler)', a: ['duelen'], why: '*los ojos* is plural: *me duelen*.' },
            { q: '___ una semana que tengo tos.', a: ['Hace'], why: '*Hace* + time + *que* + present.' },
            { q: '___ tres días con dolor de estómago. (llevar, yo)', a: ['Llevo'], why: '*llevar* + time + *con*: *Llevo tres días con…*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
            { q: '', o: ['Tengo dolor de espalda desde hace una semana.', 'Tengo dolor de espalda desde una semana.', 'He tenido dolor de espalda hace una semana.'], why: 'An amount of time needs *desde hace*, and the pain is still there: present tense.' },
            { q: '', o: ['Me duele la rodilla.', 'Me duele mi rodilla.', 'Yo duelo la rodilla.'], why: 'With *doler*, use *me* and the article *la*, not *mi*.' },
            { q: '', o: ['Me duelen los pies.', 'Me duele los pies.', 'Me duelen el pie.'], why: 'Two feet, plural verb: *me duelen los pies*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Specialists, pharmacy and sick notes',
      about: 'From the family doctor to the specialist and the pharmacy, and what your employer needs.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'In Spain, when you are registered in the public health system, you have a family doctor, **el médico** or **la médica de familia** (also called *de cabecera*), at your local health centre, **el centro de salud**. To see a specialist, your family doctor usually sends you with a referral. Always bring your health card, **la tarjeta sanitaria**.' },
          { t: 'table', caption: 'Words for the health system', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['el centro de salud', 'local health centre'],
            ['el médico / la médica de familia', 'family doctor'],
            ['el / la especialista', 'specialist, for example for skin or eyes'],
            ['la tarjeta sanitaria', 'health card'],
            ['la receta', 'prescription'],
            ['sin receta', 'you can buy it without a prescription'],
            ['la farmacia de guardia', 'pharmacy open at night or on holidays'],
            ['urgencias', 'emergency department'],
          ] },
          { t: 'tip', art: 'owl', md: 'In much of Latin America people say *el consultorio* or *la clínica* for a doctor’s practice, and in some countries *el remedio* for a medicine. Many people there also use private health insurance, *el seguro médico*.' },
        ],
        [
          { t: 'dialogue', title: 'En la farmacia', lines: [
            { who: 'Farmacéutico', s: 'Buenas tardes, ¿qué desea?' },
            { who: 'Lucía', s: 'La médica me ha recetado un antibiótico. Me ha dicho que está en la tarjeta.' },
            { who: 'Farmacéutico', s: 'Muy bien, déjeme la tarjeta sanitaria, por favor. Sí, aquí está.' },
            { who: 'Lucía', s: '¿Cada cuánto tengo que tomarlo?' },
            { who: 'Farmacéutico', s: 'Una pastilla cada ocho horas, después de comer. Tómelo siete días, aunque se encuentre mejor antes.' },
            { who: 'Lucía', s: 'De acuerdo. ¿Tiene también algo para el dolor de garganta?' },
            { who: 'Farmacéutico', s: 'Sí, estas pastillas para chupar. No necesitan receta.' },
          ] },
          { t: 'text', md: 'In Spain, prescriptions from the public doctor are usually electronic, **la receta electrónica**: the pharmacy reads them from your health card. At night and on holidays, a **farmacia de guardia** is open in each area; the other pharmacies show its address on the door.' },
          { t: 'ex', kind: 'order', h: 'Build sentences for the doctor’s and the pharmacy.', items: [
            { a: 'Necesito ir al especialista de la piel.', why: '*ir a* + *el* becomes *al*.' },
            { a: '¿Cada cuánto tengo que tomar las pastillas?', why: '*¿Cada cuánto?*: how often? Then *tener que* + infinitive.' },
            { a: '¿Tiene algo para el dolor de cabeza?', why: '*algo para*: something for.' },
          ] },
        ],
        [
          { t: 'text', md: 'If you are ill and cannot work, tell your employer on the **first day**, if possible before work starts. A doctor decides if you need a sick note, **la baja médica**, and when you can go back to work, **el alta**. In Spain the sick note is now usually sent electronically, but you must still tell your employer yourself.' },
          { t: 'reading', title: 'Mensaje a la jefa', md: 'Buenos días, Marta:\n\nLo siento, pero hoy no puedo ir a trabajar. Tengo fiebre alta desde anoche. Esta mañana voy al centro de salud y le escribo después para decirle qué me ha dicho la médica.\n\nUn saludo,\nTomás' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
            ['la receta', 'con ella le dan un medicamento en la farmacia'],
            ['la baja médica', 'el papel que dice que usted no puede trabajar'],
            ['el alta', 'el día en que puede volver al trabajo'],
            ['la tarjeta sanitaria', 'la tarjeta del sistema de salud'],
            ['la farmacia de guardia', 'abre por la noche y los días de fiesta'],
          ] },
          { t: 'ex', kind: 'choice', h: 'What do you do?', items: [
            { q: 'Tiene fiebre por la mañana y no puede trabajar. Primero ___', o: ['avisa a su jefe o jefa.', 'va a la farmacia a comprar una receta.', 'espera tres días y no dice nada.'], why: 'Tell your employer on the first day, before work if possible.' },
            { q: 'Necesita un medicamento urgente un domingo por la noche. Busca ___', o: ['la farmacia de guardia.', 'su centro de salud.', 'el Ayuntamiento.'], why: 'At night and on holidays the *farmacia de guardia* is open.' },
            { q: 'Su médica le dice: «___ una pastilla cada ocho horas».', o: ['Tome', 'Toma', 'Tomar'], why: 'A command with *usted*: *tome*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Information from the health service',
      about: 'Read what a health service tells people about where to go when they are ill.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: '¿Dónde voy si me encuentro mal?', md: 'Si está enfermo, su centro de salud es casi siempre el primer lugar al que debe ir. Su médico o médica de familia conoce su historia clínica y, si es necesario, le envía al especialista. Pida cita por teléfono, en la aplicación del servicio de salud o en el propio centro, y lleve siempre su tarjeta sanitaria.\n\n¿Y si el centro de salud está cerrado? Por la noche, los fines de semana y los días de fiesta puede acudir a un punto de atención continuada o a urgencias. Allí le atienden si el problema no puede esperar al día siguiente. Por favor, no vaya a urgencias del hospital por un simple resfriado: así ayuda a que los profesionales puedan atender antes a quien más lo necesita.\n\nEn una emergencia, por ejemplo con un dolor fuerte en el pecho o después de un accidente grave, llame inmediatamente al 112.\n\nCuidarse también es importante. Su centro de salud ofrece revisiones y vacunas según su edad. Pregunte a su médico o a su enfermera qué revisiones le corresponden.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the text. True, false or not given?', items: [
            { q: 'Cuando alguien está enfermo, normalmente va primero al centro de salud.', a: 't', why: '*su centro de salud es casi siempre el primer lugar*.' },
            { q: 'Solo se puede pedir cita en persona.', a: 'f', why: 'Also by phone or in the health service’s app.' },
            { q: 'Con un dolor fuerte en el pecho hay que llamar al 112.', a: 't', why: 'That is an emergency: *llame inmediatamente al 112*.' },
            { q: 'Con un resfriado es mejor ir a urgencias del hospital.', a: 'f', why: '*no vaya a urgencias del hospital por un simple resfriado*.' },
            { q: 'El centro de salud paga las gafas a los niños.', a: 'ng', why: 'The text does not talk about glasses.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Where do you go? Choose the right answer.', items: [
            { q: 'Es sábado por la noche, tiene fiebre alta y no puede esperar al lunes, pero no es una emergencia. Va ___', o: ['a un punto de atención continuada o a urgencias.', 'a su centro de salud el sábado por la noche.', 'a la oficina de empleo.'], why: 'When the health centre is closed and the problem cannot wait.' },
            { q: 'Su vecino ha tenido un accidente grave. Usted ___', o: ['llama al 112.', 'pide cita en el centro de salud.', 'va a la farmacia de guardia.'], why: 'A serious accident is an emergency: 112.' },
            { q: 'Quiere saber qué vacunas necesita. Pregunta ___', o: ['a su médico o a su enfermera.', 'en la farmacia de guardia.', 'a su jefe.'], why: '*Pregunte a su médico o a su enfermera qué revisiones le corresponden.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the places where people can get help.', items: [
            { s: 'Primero voy al [centro de salud]. Si está cerrado, voy a [urgencias]. Para el medicamento, busco la [farmacia de guardia].', why: 'Three places in the health system.' },
          ] },
          { t: 'tip', art: 'owl', md: '112 is the emergency number in Spain and the rest of the European Union. In Latin America the number changes from country to country, and in many countries it is 911.' },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Tengo dolor de cabeza ___ tres días.', o: ['desde hace', 'desde', 'hace que'], why: 'An amount of time, still going on: *desde hace*.' },
      { q: 'Me ___ las piernas.', o: ['duelen', 'duele', 'duelo'], why: '*las piernas* is plural: *duelen*.' },
      { q: 'Un medicamento que puede comprar sin papel del médico se vende ___.', o: ['sin receta', 'con baja', 'de guardia'], why: '*sin receta*: no prescription needed.' },
      { q: 'En España, en una emergencia llama al ___.', o: ['112', '911', '010'], why: '112 is the emergency number in Spain and the EU.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: '___ dos semanas que tengo tos.', a: ['Hace'], why: '*Hace* + time + *que* + present.' },
      { q: 'Llevo tres días ___ fiebre.', a: ['con'], why: '*llevar* + time + *con*.' },
      { q: 'Me duele ___ espalda.', a: ['la'], why: 'With body parts, use the article: *la espalda*.' },
      { q: 'Mi empresa necesita el papel de la ___ médica.', a: ['baja'], why: '*la baja médica*: the sick note.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'Si está enfermo, avisa a su jefe o jefa el primer día.', a: 't', why: 'Always on the first day, even if the sick note is sent electronically.' },
      { q: 'La farmacia lee la receta electrónica de la tarjeta sanitaria.', a: 't', why: 'That is how the *receta electrónica* works.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: '¿Desde cuándo tiene usted fiebre?', why: '*¿Desde cuándo…?* asks since when.' },
      { a: '¿Cada cuánto tengo que tomar el medicamento?', why: '*¿Cada cuánto?*, then *tener que* + infinitive.' },
    ] },
  ],
};
