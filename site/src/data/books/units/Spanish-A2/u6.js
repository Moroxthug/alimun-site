// Spanish A2, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Health',
  goal: 'Say what hurts, understand the doctor and give advice.',
  art: 'mug',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['body', 'doler', 'obligation', 'advice', 'doctor'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Me duele la cabeza',
      about: 'Name the parts of the body and say what hurts.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Learn every part of the body with its article. In Spanish, you use *el* or *la* with the body, not *my*: *Me duele **la** cabeza* (my head hurts).' },
          { t: 'table', caption: 'The body', explain: ['head', 'col2'], quiz: true, head: ['Word', 'Plural', 'Meaning'], rows: [
            ['la cabeza', 'las cabezas', 'head'],
            ['la garganta', 'las gargantas', 'throat'],
            ['el estómago', 'los estómagos', 'stomach'],
            ['la espalda', 'las espaldas', 'back'],
            ['el brazo', 'los brazos', 'arm'],
            ['la mano', 'las manos', 'hand'],
            ['la pierna', 'las piernas', 'leg'],
            ['la rodilla', 'las rodillas', 'knee'],
            ['el pie', 'los pies', 'foot'],
            ['el ojo', 'los ojos', 'eye'],
            ['el oído', 'los oídos', 'ear (inside)'],
            ['la muela', 'las muelas', 'back tooth'],
          ] },
        ],
        [
          { t: 'text', md: 'To say what hurts, use **doler**. It works like *gustar*: the part of the body is the subject, and the person comes before the verb as *me, te, le, nos, os, les*. Use *duele* for one thing and *duelen* for more than one.\n\nYou can also say **tener dolor de** + part of the body: *Tengo dolor de cabeza.* Here the noun has no article.' },
          { t: 'examples', items: [
            { s: '**Me duele** la cabeza.', n: 'One thing (*la cabeza*): *duele*.' },
            { s: '**Me duelen** los pies.', n: 'More than one (*los pies*): *duelen*.' },
            { s: '¿**Te duele** la espalda?', n: 'The person: *tú → te*.' },
            { s: 'A mi hijo **le duelen** los oídos.', n: '*A mi hijo* makes clear who *le* is.' },
            { s: 'Tengo **dolor de** garganta y un poco de fiebre.', n: '*tener dolor de* + noun, with no article.' },
            { s: 'Estoy resfriada. Tengo tos y estoy muy cansada.', n: '*estar resfriado* or *resfriada*: to have a cold.' },
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'When someone is ill, you say *¡Que te mejores!* (to a friend) or *¡Que se mejore!* (formal). It means: I hope you get better soon. In Latin America, people often say *estar resfriado* too, and in some countries *estar engripado* for the flu.' },
          { t: 'ex', kind: 'sort', h: 'Me duele or me duelen?', groups: ['me duele', 'me duelen'], items: [
            { s: 'la cabeza', g: 0, why: 'One thing: *duele*.' },
            { s: 'los ojos', g: 1, why: 'More than one: *duelen*.' },
            { s: 'el estómago', g: 0, why: 'One thing: *duele*.' },
            { s: 'las piernas', g: 1, why: 'More than one: *duelen*.' },
            { s: 'la espalda', g: 0, why: 'One thing: *duele*.' },
            { s: 'los pies', g: 1, why: 'More than one: *duelen*.' },
            { s: 'una muela', g: 0, why: 'One thing: *duele*.' },
            { s: 'las rodillas', g: 1, why: 'More than one: *duelen*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right words.', items: [
            { q: 'He caminado mucho y ___ los pies.', o: ['me duelen', 'me duele', 'tengo duelen'], why: '*los pies* is plural: *me duelen*.' },
            { q: 'Mi madre no puede leer. ___ duelen los ojos.', o: ['Le', 'Me', 'La'], why: 'For *ella* the pronoun is *le*.' },
            { q: '¿A vosotros ___ duele la cabeza?', o: ['os', 'les', 'nos'], why: 'For *vosotros* the pronoun is *os*.' },
            { q: 'Tengo dolor de ___.', o: ['estómago', 'el estómago', 'mi estómago'], why: 'After *dolor de* the noun has no article.' },
            { q: 'Me duele ___ mano derecha.', o: ['la', 'mi', 'una'], why: 'With the body, Spanish uses *la*, not *mi*.' },
          ] },
          { t: 'ex', kind: 'search', h: 'Find six parts of the body.', words: ['cabeza', 'brazo', 'pierna', 'mano', 'espalda', 'rodilla'] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Me ___ mucho la garganta. (doler)', a: ['duele'], why: '*la garganta* is one thing: *duele*.' },
            { q: 'A los niños les ___ las piernas después del partido. (doler)', a: ['duelen'], why: '*las piernas* is plural: *duelen*.' },
            { q: 'Tengo 39 grados. Tengo ___.', a: ['fiebre'], why: '39 degrees is a high temperature: *fiebre*.' },
            { q: 'Me duele una muela. Tengo dolor de ___.', a: ['muelas'], why: 'People say *dolor de muelas*, in the plural.' },
            { q: 'Estoy ___: tengo tos y me duele la cabeza.', a: ['resfriado', 'resfriada'], why: 'To have a cold: *estar resfriado* or *resfriada*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Tienes que descansar',
      about: 'Say what you must do with tener que, hay que and deber.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Three ways to talk about what is necessary, all with the **infinitive** after them:\n\n**tener que** + infinitive: a person must do something. *Tengo que tomar estas pastillas.*\n\n**hay que** + infinitive: it is necessary in general, for everyone. There is no person and *hay* never changes. *Hay que beber mucha agua.*\n\n**deber** + infinitive: you should, it is the right thing. It is a regular *-er* verb. *Debes dormir más.*' },
          { t: 'table', caption: 'tener que and deber', quiz: true, head: ['', 'tener que', 'deber'], rows: [
            ['yo', 'tengo que', 'debo'],
            ['tú', 'tienes que', 'debes'],
            ['él / ella / usted', 'tiene que', 'debe'],
            ['nosotros', 'tenemos que', 'debemos'],
            ['vosotros', 'tenéis que', 'debéis'],
            ['ellos / ustedes', 'tienen que', 'deben'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'Mañana **tengo que** ir al médico.', n: 'Something I must do: *tener que*.' },
            { s: 'Para estar sano **hay que** comer fruta.', n: 'A general rule for everyone: *hay que*.' },
            { s: 'Fumas mucho. **Debes** dejarlo.', n: 'Advice, the right thing to do: *deber*.' },
            { s: 'En el hospital **hay que** hablar en voz baja.', n: 'A rule of the place: *hay que*.' },
            { s: '**No tienes que** venir mañana.', n: '*No tener que* means it is not necessary.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Do not forget *que* after *tener*: *Tengo que trabajar*, not *Tengo trabajar*. After *deber* there is no *que*: *Debo trabajar*.' },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the present of tener que.', verb: 'tener que', tense: 'present', rows: [
            ['yo', 'tengo que'],
            ['tú', 'tienes que'],
            ['ella', 'tiene que'],
            ['nosotros', 'tenemos que'],
            ['vosotros', 'tenéis que'],
            ['ellos', 'tienen que'],
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
            { q: 'Para entrar en la piscina ___ llevar gorro.', o: ['hay que', 'hay', 'tiene'], why: 'A rule for everyone: *hay que* + infinitive.' },
            { q: 'Mi hermano ___ tomar el jarabe tres veces al día.', o: ['tiene que', 'tiene', 'hay que'], why: 'A person must do it: *tiene que*.' },
            { q: 'Estás muy cansado. ___ dormir más.', o: ['Debes', 'Debes que', 'Hay'], why: '*deber* + infinitive, with no *que*.' },
            { q: 'Nosotros ___ ir a la farmacia antes de las ocho.', o: ['tenemos que', 'hay que', 'debemos que'], why: '*Nosotros* is the subject: *tenemos que*.' },
            { q: 'Para no tener caries ___ lavarse los dientes después de comer.', o: ['hay que', 'tienes', 'debe que'], why: 'General advice for everyone: *hay que*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
            { s: 'Mañana [tengo] ir al dentista.', a: ['tengo que'], why: 'After *tener*, you need *que*: *tengo que ir*.' },
            { s: 'Vosotros [debéis que] descansar.', a: ['debéis'], why: 'After *deber* there is no *que*.' },
            { s: 'En la biblioteca [hay] hablar bajo.', a: ['hay que'], why: 'A rule: *hay que* + infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'En el centro de salud',
      about: 'Make an appointment, describe symptoms and give advice.',
      art: 'dog',
      spreads: [
        [
          { t: 'dialogue', title: 'Asking for an appointment', lines: [
            { who: 'Recepcionista', s: 'Centro de salud, buenos días. ¿En qué puedo ayudarle?' },
            { who: 'Javier', s: 'Buenos días. Quería pedir cita con la doctora Ruiz, por favor.' },
            { who: 'Recepcionista', s: '¿Me dice su nombre y su número de tarjeta sanitaria?' },
            { who: 'Javier', s: 'Me llamo Javier Molina. Un momento, busco la tarjeta… Ya la tengo.' },
            { who: 'Recepcionista', s: 'Muy bien. ¿Qué le pasa?' },
            { who: 'Javier', s: 'Desde el lunes me duele mucho la garganta y tengo fiebre.' },
            { who: 'Recepcionista', s: 'Tengo una cita hoy a las once y media. ¿Le va bien?' },
            { who: 'Javier', s: 'Sí, perfecto. Muchas gracias.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Spain, the local health centre is *el centro de salud*. You usually show your health card, *la tarjeta sanitaria*. *Quería* + infinitive is a polite way to ask for something: *Quería pedir cita.*' },
        ],
        [
          { t: 'dialogue', title: 'With the doctor', lines: [
            { who: 'Doctora', s: 'Siéntese, por favor. ¿Qué le pasa?' },
            { who: 'Javier', s: 'Me duele la garganta y tengo tos. Esta noche no he dormido nada.' },
            { who: 'Doctora', s: '¿Tiene fiebre?' },
            { who: 'Javier', s: 'Sí, ayer tuve 38 y medio.' },
            { who: 'Doctora', s: 'Es una infección de garganta. Tiene que tomar este antibiótico cada ocho horas, durante siete días.' },
            { who: 'Javier', s: '¿Puedo ir a trabajar?' },
            { who: 'Doctora', s: 'Mejor no. Debería quedarse en casa dos o tres días y beber mucha agua.' },
          ] },
        ],
        [
          { t: 'text', md: 'To give friendly advice, use **deberías** + infinitive (you should) or **¿Por qué no** + present? (why don’t you…?). *Deberías* is softer than *debes*.' },
          { t: 'table', caption: 'Giving advice', explain: ['head', 'col2'], head: ['', 'Example', 'Meaning'], rows: [
            ['deberías', 'Deberías ir al médico.', 'You should go to the doctor.'],
            ['debería (usted)', 'Debería descansar.', 'You should rest. (formal)'],
            ['¿Por qué no…?', '¿Por qué no tomas un té con miel?', 'Why don’t you have a tea with honey?'],
            ['Tienes que…', 'Tienes que dejar de fumar.', 'You must stop smoking. (stronger)'],
          ] },
          { t: 'ex', kind: 'match', h: 'Match each problem with good advice.', pairs: [
            ['Me duele la espalda.', 'Deberías hacer yoga o nadar.'],
            ['Tengo mucho sueño.', '¿Por qué no te acuestas más temprano?'],
            ['Me duele una muela.', 'Deberías ir al dentista.'],
            ['Tengo tos.', '¿Por qué no tomas leche con miel?'],
            ['Estoy muy estresada.', 'Deberías trabajar menos y descansar.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Give friendly advice. Write the sentence again starting with the words given.', items: [
            { q: 'Tienes que dormir más.', cue: 'Deberías', a: ['Deberías dormir más.'], why: '*Deberías* + infinitive is softer than *tienes que*.' },
            { q: 'Tienes que beber agua.', cue: '¿Por qué no', a: ['¿Por qué no bebes agua?'], why: '*¿Por qué no* + the present for *tú*: *bebes*.' },
            { q: 'Tienes que ir al médico.', cue: 'Deberías', a: ['Deberías ir al médico.'], why: '*Deberías* + infinitive.' },
            { q: 'Tienes que descansar un poco.', cue: '¿Por qué no', a: ['¿Por qué no descansas un poco?'], why: '*¿Por qué no* + *descansas*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'At the doctor’s. Choose the right answer.', items: [
            { q: 'La doctora pregunta: ¿Qué le pasa?', o: ['Me duele el estómago.', 'Me llamo Javier.', 'A las once y media.'], why: '*¿Qué le pasa?* asks what is wrong with you.' },
            { q: 'Quería ___ cita con el médico.', o: ['pedir', 'hacer que', 'tener'], why: 'To ask for an appointment: *pedir cita*.' },
            { q: 'Tiene que tomar una pastilla ___ ocho horas.', o: ['cada', 'todos', 'por'], why: 'Every eight hours: *cada ocho horas*.' },
            { q: 'Tienes mala cara. ___ quedarte en casa hoy.', o: ['Deberías', 'Debería que', 'Hay'], why: 'Advice to a friend: *deberías* + infinitive.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: '¿Por qué no vas al médico?', why: '*¿Por qué no* + the verb in the present.' },
            { a: 'Deberías beber más agua.', why: '*Deberías* + infinitive + the rest.' },
            { a: 'Quería pedir cita para mañana.', why: 'A polite request: *Quería* + infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Reading: a leaflet on healthy habits',
      about: 'Read advice from a health centre and find the rules.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'Health centres often give out leaflets with advice. Read this one about healthy habits.' },
          { t: 'reading', title: 'Diez minutos para tu salud', md: '**Come bien**\nPara estar sano no hay que hacer dietas difíciles. Debes comer fruta y verdura todos los días y beber agua, no refrescos. Intenta comer menos sal y menos azúcar. Y si comes con prisa, tu estómago lo nota: siéntate y come despacio.\n\n**Muévete**\nNo tienes que ir al gimnasio. Caminar media hora al día es suficiente. ¿Por qué no subes por la escalera y no en el ascensor? ¿Por qué no vas al trabajo andando o en bici?\n\n**Duerme**\nUna persona adulta necesita dormir entre siete y ocho horas. Por la noche deberías apagar el móvil una hora antes de dormir. La luz de la pantalla no te deja descansar bien.\n\n**Cuida tu espalda**\nMuchas personas trabajan sentadas todo el día y les duele la espalda. Hay que levantarse cada hora, caminar un poco y mover los brazos y el cuello.\n\n**Pide ayuda**\nSi te duele algo durante muchos días, tienes que ir al médico: pide cita en tu centro de salud.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Para estar sano hay que ir al gimnasio.', a: 'f', why: '*No tienes que ir al gimnasio.*' },
            { q: 'Caminar media hora al día es suficiente.', a: 't', why: 'The leaflet says this in *Muévete*.' },
            { q: 'Los adultos necesitan dormir diez horas.', a: 'f', why: 'They need *entre siete y ocho horas*.' },
            { q: 'Es mejor apagar el móvil antes de dormir.', a: 't', why: '*Deberías apagar el móvil una hora antes de dormir.*' },
            { q: 'El centro de salud abre los sábados.', a: 'ng', why: 'The leaflet does not say when the centre is open.' },
            { q: 'A muchas personas que trabajan sentadas les duele la espalda.', a: 't', why: '*… trabajan sentadas todo el día y les duele la espalda.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the words that give advice or say what is necessary.', items: [
            { s: '[Debes] comer fruta y verdura todos los días.', why: '*deber* + infinitive: the right thing to do.' },
            { s: '[¿Por qué no] subes por la escalera?', why: '*¿Por qué no…?* is friendly advice.' },
            { s: 'Por la noche [deberías] apagar el móvil.', why: '*deberías* + infinitive: soft advice.' },
            { s: '[Hay que] levantarse cada hora.', why: '*hay que* + infinitive: necessary for everyone.' },
          ] },
          { t: 'ex', kind: 'bank', h: 'Complete the advice with words from the box.', extra: ['nunca', 'sentado'], items: [
            { q: 'Debes comer fruta y ___ todos los días.', a: 'verdura', why: 'The leaflet says *fruta y verdura*.' },
            { q: 'Si comes con prisa, te puede doler el ___.', a: 'estómago', why: 'Eating fast is bad for the stomach.' },
            { q: 'Es mejor subir por la ___ que en el ascensor.', a: 'escalera', why: '*¿Por qué no subes por la escalera?*' },
            { q: 'Si te duele algo muchos días, pide ___ en el centro de salud.', a: 'cita', why: 'To ask for an appointment: *pedir cita*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Me ___ las rodillas.', o: ['duelen', 'duele', 'duelo'], why: '*las rodillas* is plural: *duelen*.' },
      { q: 'A mi padre ___ duele la espalda.', o: ['le', 'lo', 'me'], why: 'For *él* the pronoun is *le*.' },
      { q: 'Para viajar a otro país ___ tener pasaporte.', o: ['hay que', 'tiene', 'debe que'], why: 'A rule for everyone: *hay que*.' },
      { q: 'Tienes fiebre. ___ quedarte en la cama.', o: ['Deberías', 'Hay', 'Tienes'], why: 'Advice: *deberías* + infinitive.' },
      { q: '¿Por qué no ___ una aspirina?', o: ['tomas', 'tomar', 'toma que'], why: '*¿Por qué no* + the present for *tú*: *tomas*.' },
      { q: 'Quería pedir ___ con el médico.', o: ['cita', 'dolor', 'receta'], why: 'An appointment: *pedir cita*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Tengo dolor ___ cabeza.', a: ['de'], why: '*tener dolor de* + part of the body.' },
      { q: 'Mañana tengo ___ trabajar hasta las nueve.', a: ['que'], why: '*tener que* + infinitive.' },
      { q: 'Vosotros ___ beber más agua. (deber)', a: ['debéis'], why: '*deber* for *vosotros*: *debéis*.' },
      { q: 'Al niño le ___ los oídos. (doler)', a: ['duelen'], why: '*los oídos* is plural: *duelen*.' },
    ] },
    { t: 'ex', kind: 'odd', h: 'Which word is not a part of the body?', items: [
      { o: ['la fiebre', 'la pierna', 'la mano', 'la espalda'], why: '*la fiebre* is a symptom, not a part of the body.' },
      { o: ['la cita', 'el brazo', 'el pie', 'el ojo'], why: '*la cita* is an appointment.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Give friendly advice. Start with the words given.', items: [
      { q: 'Tienes que comer menos azúcar.', cue: 'Deberías', a: ['Deberías comer menos azúcar.'], why: '*Deberías* + infinitive.' },
      { q: 'Tienes que caminar más.', cue: '¿Por qué no', a: ['¿Por qué no caminas más?'], why: '*¿Por qué no* + *caminas*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Me duele mucho la garganta.', why: '*Me duele*, then *mucho*, then the part of the body.' },
    ] },
  ],
};
