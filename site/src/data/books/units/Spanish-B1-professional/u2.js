// Spanish B1 for work, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Calls and video meetings',
  goal: 'Make and take work calls and take part in video meetings.',
  art: 'parrot',
  tags: { skills: ['speaking', 'listening', 'reading'], topics: ['phone-calls', 'video-meetings', 'minutes', 'reported-speech'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'On the phone',
      about: 'Answer a call, put someone through, ask them to repeat and end the call.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'A work call in Spanish follows a pattern. The company answers with its name or the department and a greeting. The caller says who they are and asks for a person. If that person is not free, you offer to take a message (*un recado*) or to call back.' },
          { t: 'table', caption: 'Phone phrases', explain: ['head', 'col0'], quiz: true, head: ['', 'You answer the phone', 'You are calling'], rows: [
            ['Starting the call', 'Construcciones Ebro, buenos días. Le atiende Sara.', 'Buenos días, soy Javier Ortiz, de Talleres Norte.'],
            ['Asking for a person', '¿Con quién desea hablar?', '¿Podría hablar con el Sr. Campos, por favor?'],
            ['Connecting', '¿De parte de quién? Un momento, le paso.', 'Sí, espero, gracias.'],
            ['The person is not free', 'Lo siento, está reunido. ¿Quiere dejarle un recado?', '¿Podría decirle que me llame?'],
            ['Ending the call', 'Gracias por llamar. Que tenga un buen día.', 'Gracias a usted. Hasta luego.'],
          ] },
          { t: 'tip', art: 'churro', md: 'In Spain people answer a private phone with *¿Sí?* or *¿Diga?*. In many Latin American countries you hear *¿Aló?*, and in Mexico *¿Bueno?*. A mobile phone is *el móvil* in Spain and *el celular* in Latin America.' },
        ],
        [
          { t: 'dialogue', title: 'Una llamada a Construcciones Ebro', lines: [
            { who: 'Sara', s: 'Construcciones Ebro, buenos días. Le atiende Sara.' },
            { who: 'Javier', s: 'Buenos días. Soy Javier Ortiz, de Talleres Norte. ¿Podría hablar con el Sr. Campos, por favor?' },
            { who: 'Sara', s: 'Un momento, por favor. Lo siento, el Sr. Campos está en una reunión hasta las doce. ¿Quiere dejarle un recado?' },
            { who: 'Javier', s: 'Sí, por favor. ¿Podría decirle que me llame? Es por el presupuesto de la obra de Huesca.' },
            { who: 'Sara', s: 'Claro. ¿Me da su número de teléfono?' },
            { who: 'Javier', s: 'Es el 600 000 147.' },
            { who: 'Sara', s: 'Perdone, no le he oído bien. ¿Puede repetir el final, por favor?' },
            { who: 'Javier', s: 'Sí, uno, cuatro, siete.' },
            { who: 'Sara', s: 'Perfecto. Se lo digo en cuanto salga de la reunión.' },
            { who: 'Javier', s: 'Muchas gracias. Hasta luego.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the call. True or false?', items: [
            { q: 'Javier trabaja en Construcciones Ebro.', a: 'f', why: 'He works for *Talleres Norte*. Sara answers for Construcciones Ebro.' },
            { q: 'El Sr. Campos no puede hablar porque está reunido.', a: 't', why: '*está en una reunión hasta las doce*.' },
            { q: 'Javier va a llamar otra vez a las doce.', a: 'f', why: 'He asks Sara to tell Sr. Campos to call him: *¿Podría decirle que me llame?*' },
            { q: 'Sara no ha entendido bien el número.', a: 't', why: '*no le he oído bien. ¿Puede repetir el final?*' },
          ] },
          { t: 'ex', kind: 'match', h: 'What do you say? Match the situation and the phrase.', pairs: [
            ['You did not hear well.', '¿Puede repetir, por favor?'],
            ['You want to know the caller’s name.', '¿De parte de quién?'],
            ['You put the caller through.', 'Un momento, le paso.'],
            ['You want the spelling of a name.', '¿Me lo puede deletrear?'],
            ['The line goes dead.', 'Perdone, se ha cortado.'],
          ] },
        ],
        [
          { t: 'text', md: 'On the phone you often use **two object pronouns** together. The person (*me*, *te*, *le*) comes first, then the thing (*lo*, *la*). When *le* comes before *lo* or *la*, it becomes **se**: *le lo digo* is wrong, *se lo digo* is right.' },
          { t: 'examples', items: [
            { s: '¿**Me lo** puede deletrear?', n: '*me* (to me) + *lo* (it, the name).' },
            { s: 'El recado, **se lo** doy ahora mismo.', n: '*le* + *lo* becomes *se lo*: I will give it to him.' },
            { s: '¿El número? **Te lo** mando por mensaje.', n: 'With a colleague: *te lo*.' },
            { s: 'Voy a enviár**selo** hoy.', n: 'With an infinitive, the pronouns can go on the end. Then the verb takes an accent.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the two pronouns together.', items: [
            { q: 'La dirección del cliente, ¿___ puede repetir? (to me + it, la)', a: ['me la'], why: '*me* (to me) first, then *la* (the address).' },
            { q: 'El mensaje del Sr. Campos, ___ doy ahora. (to her + it, lo)', a: ['se lo'], why: '*le* + *lo* becomes *se lo*.' },
            { q: 'Diego, el informe ___ envío esta tarde. (to you, tú + it, lo)', a: ['te lo'], why: 'With *tú*: *te lo*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'El número de la clienta, [le lo] paso ahora mismo.', a: ['se lo'], why: '*le* + *lo* is never possible: it becomes *se lo*.' },
            { s: 'Perdone, no le [he oyido] bien.', a: ['he oído', 'he oido'], why: 'The participle of *oír* is *oído*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Video meetings',
      about: 'Deal with technical problems and take turns politely.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'In a video meeting (*videollamada* or *reunión en línea*) something often goes wrong with the sound or the picture. Spanish uses **se** here, without saying who: *no se te oye* (nobody can hear you), *no se ve nada* (nothing can be seen).' },
          { t: 'table', caption: 'Technical problems', explain: ['head', 'col1'], quiz: true, head: ['Phrase', 'Meaning'], rows: [
            ['No se te oye bien.', 'We cannot hear you well.'],
            ['Tienes el micro apagado.', 'Your microphone is off.'],
            ['Se te ha congelado la imagen.', 'Your picture has frozen.'],
            ['¿Podéis ver mi pantalla?', 'Can you all see my screen?'],
            ['Se me ha cortado la conexión.', 'My connection went down.'],
            ['Voy a salir y entrar otra vez.', 'I will leave and join again.'],
          ] },
          { t: 'tip', art: 'owl', md: 'To speak to the whole group, Spain uses *vosotros*: *¿Me oís?*, *¿Podéis ver mi pantalla?*. In formal meetings and in Latin America it is *ustedes*: *¿Me oyen?*, *¿Pueden ver mi pantalla?*' },
        ],
        [
          { t: 'text', md: 'To take turns, ask for the word and interrupt **softly**. *Perdona que te interrumpa* is a fixed phrase with the subjunctive: *que* + *interrumpa*. With *usted* it is *Perdone que le interrumpa*.' },
          { t: 'examples', items: [
            { s: '**Perdona que te interrumpa**, pero tengo una pregunta.', n: 'Polite way to interrupt a colleague.' },
            { s: '¿**Puedo añadir algo**?', n: 'You ask to speak.' },
            { s: '**Sigue, sigue**, perdona.', n: 'You both started to talk. You let the other person go on.' },
            { s: '**Volviendo al tema**, ¿cuándo empezamos?', n: 'Back to the topic of the meeting.' },
            { s: '¿**Alguien quiere decir algo más**?', n: 'The person who leads the meeting checks before closing.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the phrase used to interrupt or to ask to speak.', items: [
            { s: '[Perdona] [que] [te] [interrumpa], pero no se ve tu pantalla.', why: '*Perdona que te interrumpa*: a soft way to interrupt.' },
            { s: 'Muy interesante. [¿Puedo] [añadir] [algo]? Los precios también han subido.', why: '*¿Puedo añadir algo?* asks for the word.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'La reunión de equipo del lunes', lines: [
            { who: 'Elena', s: 'Buenos días a todos. ¿Me oís bien?' },
            { who: 'Carlos', s: 'Sí, perfectamente. Pero Lucía, tienes el micro apagado.' },
            { who: 'Lucía', s: 'Perdón, ya está. ¿Ahora sí?' },
            { who: 'Elena', s: 'Ahora sí. Bueno, hoy hablamos de la feria de mayo. Carlos, ¿empiezas tú?' },
            { who: 'Carlos', s: 'Claro. Ya tenemos el stand reservado, pero necesitamos a dos personas más para…' },
            { who: 'Lucía', s: 'Perdona que te interrumpa, Carlos, pero se te ha congelado la imagen.' },
            { who: 'Carlos', s: '¿Y ahora? Voy a salir y entrar otra vez.' },
            { who: 'Elena', s: 'Ya te vemos. Decías que necesitamos a dos personas más.' },
            { who: 'Carlos', s: 'Eso. ¿Alguien puede venir los días 14 y 15?' },
            { who: 'Lucía', s: 'Yo puedo. ¿Puedo añadir algo? Habría que imprimir los folletos antes del día 10.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the meeting. True or false?', items: [
            { q: 'Al principio, Lucía no se oye porque tiene el micro apagado.', a: 't', why: 'Carlos says *Lucía, tienes el micro apagado*.' },
            { q: 'La reunión es sobre una feria.', a: 't', why: '*hoy hablamos de la feria de mayo*.' },
            { q: 'Lucía interrumpe a Carlos porque no está de acuerdo.', a: 'f', why: 'She interrupts because his picture froze: *se te ha congelado la imagen*.' },
            { q: 'Carlos va a imprimir los folletos.', a: 'f', why: 'Lucía says the brochures must be printed, but nobody says who does it yet.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'What do you say in the video meeting?', items: [
            { q: 'Your colleague is talking, but you hear nothing.', o: ['Perdona, no se te oye.', 'Habla más, por favor.', 'No te veo nada.'], why: '*No se te oye*: the sound is the problem.' },
            { q: 'You want to show a document to everybody.', o: ['Voy a compartir mi pantalla.', 'Voy a apagar mi pantalla.', 'Voy a salir de la reunión.'], why: '*compartir pantalla*: to share your screen.' },
            { q: 'You and a colleague start to speak at the same time.', o: ['Sigue, sigue, perdona.', 'Cállate, por favor.', 'Ahora hablo yo.'], why: 'You let the other person go on politely.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences for a video meeting.', items: [
            { a: 'Perdona que te interrumpa, pero tengo una pregunta.', why: 'The fixed phrase first, then *pero* and your point.' },
            { a: '¿Podéis ver bien mi pantalla?', why: 'A question to the group, with *vosotros*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Minutes of a meeting',
      about: 'Read the minutes of a short team meeting and find who does what.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'The **acta** (minutes) of a meeting tells what people said and what was decided. It uses the **indefinido** and reported speech: *Elena explicó que el presupuesto era de 8.000 euros.* The present *es* becomes *era*, the future *será* becomes *sería*. For decisions, minutes often use **se**: *se acordó* (it was agreed), *se decidió* (it was decided).' },
          { t: 'reading', title: 'Acta: reunión del equipo de marketing', md: '**Fecha:** 12 de febrero, de 9:30 a 10:15, por videollamada\n**Participantes:** Elena Soto (directora de marketing), Carlos Rey, Lucía Prat, Andrés Gil\n**Ausente:** Rosa Vidal (de vacaciones)\n\n**Feria de mayo.** Carlos informó de que el stand ya estaba reservado. Explicó que hacían falta dos personas más para los días 14 y 15. Lucía y Andrés se ofrecieron para ir.\n\n**Folletos.** Lucía dijo que los folletos tenían que estar impresos antes del 10 de mayo. Se acordó que Andrés pediría tres presupuestos a imprentas de la zona.\n\n**Presupuesto.** Elena explicó que el presupuesto total para la feria era de 8.000 euros. Carlos preguntó si se podían pagar también los viajes. Se decidió hablar de este punto en la próxima reunión, ya con Rosa.\n\n**Próxima reunión:** 26 de febrero a las 9:30.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the minutes. True, false or not given?', items: [
            { q: 'La reunión fue por videollamada.', a: 't', why: '*por videollamada*.' },
            { q: 'Rosa Vidal estuvo en la reunión.', a: 'f', why: 'She is *ausente*: she was on holiday.' },
            { q: 'Lucía y Andrés van a ir a la feria.', a: 't', why: '*Lucía y Andrés se ofrecieron para ir.*' },
            { q: 'Los folletos van a costar menos de 500 euros.', a: 'ng', why: 'The minutes do not give the price of the brochures.' },
            { q: 'Ya se ha decidido si la empresa paga los viajes.', a: 'f', why: '*Se decidió hablar de este punto en la próxima reunión.*' },
            { q: 'La próxima reunión es dos semanas después.', a: 't', why: 'From 12 to 26 February is two weeks.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the words from the minutes and their meaning.', pairs: [
            ['el acta', 'el texto que cuenta lo que se dijo en una reunión'],
            ['ausente', 'que no está presente'],
            ['ofrecerse', 'decir que quieres hacer algo'],
            ['la imprenta', 'una empresa que imprime papeles y folletos'],
            ['el punto', 'un tema de la reunión'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Who does what? Choose.', items: [
            { q: '¿Quién va a pedir presupuestos a las imprentas?', o: ['Andrés', 'Lucía', 'Elena'], why: '*Se acordó que Andrés pediría tres presupuestos.*' },
            { q: '¿Quién preguntó por los viajes?', o: ['Carlos', 'Rosa', 'Andrés'], why: '*Carlos preguntó si se podían pagar también los viajes.*' },
            { q: '¿Quién dio la cifra del presupuesto total?', o: ['Elena', 'Carlos', 'Lucía'], why: '*Elena explicó que el presupuesto total… era de 8.000 euros.*' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Write what the person said in the style of minutes. Start with the words given.', items: [
            { q: 'Carlos: «El stand está reservado.»', cue: 'Carlos dijo que', a: ['Carlos dijo que el stand estaba reservado.'], why: 'In reported speech the present *está* becomes *estaba*.' },
            { q: 'Lucía: «Tengo tiempo el día 14.»', cue: 'Lucía dijo que', a: ['Lucía dijo que tenía tiempo el día 14.'], why: '*tengo* becomes *tenía*, and *yo* becomes *ella*.' },
            { q: 'Andrés: «Pediré tres presupuestos.»', cue: 'Andrés dijo que', a: ['Andrés dijo que pediría tres presupuestos.'], why: 'The future *pediré* becomes the condicional *pediría*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Quieres saber el nombre de la persona que llama: ___', o: ['¿De parte de quién?', '¿Quién eres tú?', '¿Cómo se llama su empresa?'], why: '*¿De parte de quién?* is the polite, fixed phrase.' },
      { q: 'El nombre del cliente, ¿___ puede deletrear?', o: ['me lo', 'lo me', 'me le'], why: 'The person first (*me*), then the thing (*lo*).' },
      { q: 'En una videollamada, el micro de tu compañera está apagado. Le dices: ___', o: ['Tienes el micro apagado.', 'Tienes la pantalla congelada.', 'No se ve tu pantalla.'], why: 'The microphone is off: *micro apagado*.' },
      { q: '___ que te interrumpa, pero tengo una pregunta.', o: ['Perdona', 'Perdonas', 'Perdón'], why: 'The fixed phrase is *Perdona que te interrumpa*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Un momento, por favor, le ___ con el Sr. Campos. (pasar, yo)', a: ['paso'], why: '*le paso con…*: I am putting you through to…' },
      { q: 'El mensaje, ___ doy cuando vuelva. (to him + it)', a: ['se lo'], why: '*le* + *lo* becomes *se lo*.' },
      { q: 'Perdone, no ___ oye bien. Hay mucho ruido.', a: ['se le', 'se'], why: '*No se le oye*: we cannot hear you (usted).' },
      { q: 'Carlos dijo que el stand ___ reservado. (estar)', a: ['estaba'], why: 'Reported speech: *está* becomes *estaba*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the problem and the phrase.', pairs: [
      ['No hay sonido.', 'No se te oye.'],
      ['La imagen no se mueve.', 'Se te ha congelado la imagen.'],
      ['La llamada se termina de repente.', 'Se ha cortado.'],
      ['Nadie ve tu documento.', 'Voy a compartir mi pantalla otra vez.'],
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'En el acta de una reunión, «se acordó» significa que todos estuvieron de acuerdo en una decisión.', a: 't', why: '*se acordó*: it was agreed.' },
      { q: '«¿Quiere dejarle un recado?» significa: ¿quiere hablar con otra persona?', a: 'f', why: 'It means: do you want to leave a message for him or her?' },
    ] },
  ],
};
