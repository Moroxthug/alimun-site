// In, on, at. Verificado con Cambridge Dictionary (At, on and in: time; At, on and in: place; on time e in time;
// in the end; arrive somewhere), British Council LearnEnglish (preposiciones de tiempo; preposiciones de lugar),
// Oxford Learner's Dictionaries (notas sobre weekend, hospital y university en inglés británico y americano) y
// Wikipedia (diferencias gramaticales entre el inglés americano y el británico).
export default {
  key: 'in-on-at',
  site: 'es',
  slug: 'preposiciones-in-on-at',
  section: 'grammar',
  course: 'English',
  published: '2026-10-31',
  updated: '2026-10-31',
  title: 'In, on, at: las preposiciones de tiempo y lugar en inglés',
  metaTitle: 'In, on, at: preposiciones de tiempo y lugar en inglés – Alimun',
  desc: 'Cuándo usar in, on y at para tiempo y lugar: at 5 o’clock, on Monday, in June, on the bus, in the car, at home, Reino Unido y EE. UU., in time y on time, errores típicos.',
  lead: "¿At the weekend u on the weekend? ¿In the bus u on the bus? Tres palabras diminutas provocan más errores que casi cualquier otra cosa en inglés, porque **en español una sola preposición, en, hace el trabajo de las tres**. Aquí tienes cómo reparte el inglés ese terreno, con los patrones que cubren casi todas las frases y las excepciones que conviene aprender de memoria.",
  photo: 'in-on-at-station-clock',
  sticker: { draw: 'snail', say: 'See you on Monday, at nine, in the café. ¡El lunes a las nueve!' },
  facts: [
    { n: 3, unit: 'preposiciones', text: 'in, on y at hacen casi todo el trabajo de tiempo y lugar en inglés' },
    { label: 'at the weekend', text: 'la forma británica habitual, donde el inglés americano dice on the weekend' },
    { label: 'in hospital', text: 'inglés británico para un paciente, donde el inglés americano dice in the hospital' },
    { label: 'next, last, this, every', text: 'las expresiones de tiempo con estas palabras no llevan in, on ni at: next Monday, last summer, every Saturday' },
  ],
  blocks: [
    { take: { title: 'En resumen', text: "Para el tiempo, usa **at para un punto** (at 5 o’clock, at noon, at night), **on para un día o una fecha** (on Monday, on July 4, on my birthday) e **in para un periodo más largo** (in June, in 2026, in the summer, in the morning). Para el lugar, at es un punto o un sitio donde se hace algo (at the station, at home), on es una superficie, una línea o un piso (on the table, on the third floor, on the bus) e in es un espacio cerrado o un área (in the car, in Madrid). Con next, last, this y every no hace falta ninguna preposición.", draw: 'owl' } },

    { h: 'El triángulo: de lo grande a lo pequeño' },
    { p: "Muchos profesores dibujan in, on y at como un triángulo invertido. Arriba, en la parte ancha, está **in**, para los espacios grandes y los periodos largos: in Europe, in 2026, in the winter. En el medio está **on**, para algo más definido: una calle, una superficie, un día. Abajo, en la punta, está **at**, para un punto o un momento exacto: at the corner, at 7:30." },
    { p: "El triángulo es un buen punto de partida y explica buena parte de las frases cotidianas. Pero tómalo como **una guía, no como una ley**. El inglés también tiene expresiones fijas que no siguen el dibujo, como at night, at the weekend e in the morning, y a veces la elección depende de cómo ve el lugar quien habla, no de su tamaño. El resto del artículo muestra dónde funciona el triángulo y dónde simplemente hay que aprender la expresión." },
    { table: {
      head: ['', 'Tiempo', 'Lugar'],
      rows: [
        ['in: grande, largo, cerrado', 'in June, in 2026, in the summer, in the 1990s, in the morning', 'in Spain, in London, in the kitchen, in the car, in a taxi'],
        ['on: un día, una superficie, una línea', 'on Monday, on July 4, on my birthday, on Monday morning', 'on the table, on the wall, on Oxford Street, on the bus, on the fifth floor'],
        ['at: un punto exacto', 'at 5 o’clock, at noon, at lunchtime, at night', 'at the station, at the door, at 15 Craig Street, at home, at work'],
      ],
      note: 'El triángulo cubre los casos más comunes. Expresiones fijas como at night e in the morning hay que aprenderlas tal cual.',
    } },

    { h: 'El tiempo: at para un punto' },
    { p: "Usa **at** para la hora y otros momentos exactos del día: at 5 o’clock, at 7:45, at midday, at midnight, at sunrise. Es nuestro “a las”: a las cinco, a medianoche. También va con las comidas, at breakfast y at lunchtime, y con algunas expresiones fijas: **at night, at the moment, at the same time**." },
    { p: "Cuidado con at the moment. En español decimos en este momento, y la traducción literal in this moment le suena rara a un nativo: lo natural es **I'm busy at the moment**. En las preguntas informales, además, at desaparece: Cambridge Dictionary da **What time are you leaving?** como la forma preferida frente a At what time are you leaving?, que suena rígida. En la respuesta at vuelve: at six." },
    { examples: [
      ['The meeting starts **at** 9:30.', 'La reunión empieza a las 9:30: la hora lleva at.'],
      ["Let's talk **at** lunchtime.", 'Hablamos a la hora de comer: una comida es un punto del día.'],
      ["I can't sleep **at** night.", 'No puedo dormir por la noche: expresión fija.'],
      ["She's busy **at** the moment.", 'Ahora mismo está ocupada: at the moment, no in this moment.'],
    ] },

    { h: 'El tiempo: on para días y fechas' },
    { p: "Usa **on** para los días de la semana, las fechas y los días especiales: on Monday, on July 4, on 30 July, on New Year’s Day, **on my birthday**. Aquí el español no ayuda, porque decimos el lunes, el 4 de julio, el día de mi cumpleaños, con artículo y sin preposición. El día en plural habla de una costumbre: the office is closed on Fridays, la oficina cierra los viernes, es decir, todos los viernes." },
    { p: "Aquí el triángulo se rompe de una forma curiosa. Morning solo lleva in, pero una mañana concreta lleva on: **in the morning**, por la mañana, pero **on Monday morning**, el lunes por la mañana, on the morning of the ninth, on a cold winter evening. En cuanto la parte del día va unida a un día concreto, o lleva un adjetivo, gana on." },
    { note: { title: 'Los estadounidenses a menudo quitan on', text: "En inglés americano la preposición delante de un día a menudo desaparece: **She resigned Thursday**, I'll see you Monday. Los británicos suelen mantenerla: she resigned on Thursday. Las dos son correctas en su variedad, y on Monday nunca está mal.", draw: 'parrot' } },

    { h: 'El tiempo: in para periodos más largos' },
    { p: "Usa **in** para meses, años, estaciones, décadas y siglos: in June, **in 2026**, in the spring, in the 1990s, in the nineteenth century. Aquí el español coincide, porque decimos en junio y en 2026. In también va con las partes del día, in the morning, in the afternoon, in the evening, aunque nosotros digamos por la mañana o por la tarde, y con expresiones como in the past e in the future." },
    { p: "La noche es la excepción. **At night** significa por la noche en general, cualquier noche: it's not safe to walk there at night. **In the night** suele referirse a una noche concreta: I woke up in the night, me desperté durante la noche. Si en tu país dices en la noche, ojo: in the night no sirve para hablar de las noches en general. In también dice cuánto se tarda o dentro de cuánto pasa algo: she learned the song in five minutes, I'll call you in ten minutes, te llamo dentro de diez minutos." },
    { examples: [
      ['My birthday is **in** June.', 'Mi cumpleaños es en junio: el mes lleva in.'],
      ['My birthday is **on** June 12.', 'Es el 12 de junio: la fecha lleva on.'],
      ['We moved here **in** 2019.', 'Nos mudamos aquí en 2019.'],
      ['I work best **in** the morning.', 'Trabajo mejor por la mañana: cualquier mañana, in.'],
      ['The flight leaves **on** Friday morning.', 'El vuelo sale el viernes por la mañana: una mañana concreta, on.'],
      ['The train leaves **in** ten minutes.', 'El tren sale dentro de diez minutos.'],
    ] },
    { figure: { photo: 'in-on-at-birthday-cake', alt: 'Una tarta de cumpleaños con las velas encendidas sobre una mesa', caption: 'Un día especial lleva on: on my birthday. El mes lleva in: my birthday is in June.' } },

    { h: 'El fin de semana: ¿at u on?' },
    { p: "Es la diferencia más conocida entre el inglés británico y el americano con estas palabras. En Gran Bretaña la forma habitual es **at the weekend**, y para una costumbre at weekends. En Estados Unidos se dice **on the weekend** y on weekends. Oxford Learner's Dictionaries marca la primera como británica y la segunda como sobre todo norteamericana." },
    { panels: [
      ['Inglés británico', "What are you doing at the weekend? The office is closed at weekends. I'll see you at the weekend."],
      ['Inglés americano', "What are you doing on the weekend? The office is closed on weekends. I'll see you on the weekend."],
    ] },
    { p: "Una cosa es igual a los dos lados del Atlántico: un fin de semana concreto, con fecha, lleva on. **The festival is on the last weekend in July**, en Londres y en Nueva York. Lo que no es correcto en ninguna de las dos variedades es in the weekend, calco de en el fin de semana y uno de los errores más frecuentes de los hispanohablantes." },

    { h: 'Sin preposición: this, next, last, every' },
    { p: "Las expresiones de tiempo que empiezan por **this, next, last, every**, y también each, some, that, one, any y all, no llevan in, on ni at. Every Saturday, next Monday, last summer, this evening. El español aquí es un buen aliado, porque también decimos el lunes que viene, el verano pasado o todos los sábados sin preposición. El error aparece cuando se parte de la regla inglesa y se añade on o in de todos modos." },
    { examples: [
      ['He plays football **every** Saturday.', 'Juega al fútbol todos los sábados. No on every Saturday.'],
      ["Are you free **next** Monday at two o'clock?", '¿Estás libre el lunes que viene a las dos? No on next Monday; la hora sigue llevando at.'],
      ['**Last** summer we rented a house by the sea.', 'El verano pasado alquilamos una casa en la playa. No in last summer.'],
      ["I'm meeting her **this** evening.", 'La veo esta tarde. No in this evening.'],
      ["We'll talk about it **tomorrow** morning.", 'Lo hablamos mañana por la mañana: tomorrow, yesterday y today funcionan igual.'],
    ] },
    { note: { title: 'Una comprobación rápida', text: "Antes de una expresión de tiempo, mira si delante ya hay una palabra como this, next, last, every, tomorrow o yesterday. Si la hay, **quita la preposición**: in the morning, pero tomorrow morning; on Friday, pero next Friday.", draw: 'cat' } },
    { figure: { photo: 'in-on-at-old-town-night', alt: 'Una plaza de un casco antiguo de noche, con mesas de terraza, casas iluminadas y la luna', caption: 'At night significa por la noche en general: the square is quiet at night. In the night es una noche concreta: I woke up in the night.' } },
    { quote: 'At para un punto, on para un día, in para un periodo más largo.' },

    { cta: true },

    { h: 'El lugar: at un punto, on una superficie, in un espacio' },
    { p: "El mismo triángulo ayuda con los lugares. **In** pone algo dentro de un espacio más grande: in the box, in the kitchen, in the park, in Sweden. **On** lo pone sobre una superficie o a lo largo de una línea: on the table, on the wall, on the floor, on Oxford Street, on the coast, on the river. **At** marca un punto, a menudo un sitio donde pasa algo: at the door, at the bus stop, at the entrance, at 15 Craig Street." },
    { p: "Para nosotros todo esto es en: en la caja, en la mesa, en la puerta. Por eso conviene fijarse en que a veces caben dos preposiciones y la elección cambia un poco el sentido. **She's at the station** dice dónde está, como punto de encuentro. She's in the station dice que está dentro del edificio, quizá resguardada de la lluvia. El British Council señala que la diferencia entre las tres depende a menudo más del uso que de reglas fijas, y por eso las expresiones hechas importan tanto." },
    { table: {
      head: ['Preposición', 'Uso', 'Ejemplos'],
      rows: [
        ['in', 'dentro de un espacio, un edificio visto por dentro, una ciudad o un país', 'in the room, in the office, in the park, in Paris, in the mountains, in the sea'],
        ['on', 'una superficie, un piso, una calle, una costa o un río, el transporte público', 'on the desk, on the third floor, on Main Street, on the east coast, on the train'],
        ['at', 'un punto, una dirección, un lugar de actividad, un evento', 'at the door, at 12 Park Road, at the supermarket, at work, at a party'],
      ],
      note: 'Las ciudades y los países llevan in: in Tokyo, in Brazil. Nuestro “en la mesa” es on the table, y “en la puerta” es at the door.',
    } },

    { h3: 'On the bus, in the car' },
    { p: "Con los medios de transporte el triángulo deja de ayudar. Los vehículos grandes por los que se puede caminar, casi siempre transporte público, llevan **on**: on the bus, on the train, on a plane, on the tram, on a ship. Los vehículos pequeños en los que vas sentado dentro llevan **in**: in a car, in a taxi. La regla práctica es esta: si puedes levantarte y caminar por él, vas on. Nuestro “estoy en el autobús” es, por tanto, I'm on the bus." },
    { p: "Para decir cómo viajas, y no dónde estás, el inglés usa **by** sin artículo: by bus, by train, by car, by plane, como nuestro en tren o en coche. I was on the train when she phoned, estaba en el tren cuando llamó, pero I went to Rome by train, fui a Roma en tren. Ir andando es la excepción: **on foot**, no by foot." },
    { figure: { photo: 'in-on-at-airport-escalators', alt: 'Viajeros en las escaleras mecánicas de un aeropuerto, uno de ellos esperando con su maleta', caption: 'En el aeropuerto estás at the airport; unos minutos después estás on the plane, y al llegar in a taxi.' } },

    { h3: 'Pisos, edificios y direcciones' },
    { p: "Los pisos llevan **on**: they live on the fifteenth floor, my office is on the third floor. Nuestro en el tercer piso empuja hacia in the third floor, que es incorrecto. Una dirección exacta lleva at, una calle lleva on, y un edificio puede llevar at o in según hables del lugar o del interior: **I'll meet you at the museum**, quedamos en el museo, pero it's warm in the museum, dentro del museo hace calor." },
    { p: "El verbo arrive tiene su propio patrón, y para los hispanohablantes es una trampa clásica. Se dice **arrive at** para un edificio o un lugar pequeño, como the hotel, the airport o the station, y **arrive in** para una ciudad o un país: we arrived at the hotel just after ten, they arrived in Tokyo on Wednesday. Con home, here y there, arrive no lleva preposición: we arrived home late. Arrive to, calco de llegar a, es incorrecto en todos los casos." },
    { figure: { photo: 'in-on-at-tokyo-platform', alt: 'Una persona que arrastra una maleta roja por un andén en Tokio', caption: 'Se llega at una estación pero in una ciudad: we arrived at the station at six, we arrived in Tokyo on Wednesday.' } },

    { h3: 'At home, at work, at university' },
    { p: "Un grupo de lugares cotidianos lleva **at** sin artículo cuando piensas en la actividad más que en el edificio: at home, at work, at school, at university, at college. En español es en casa, en el trabajo, en el colegio, y de ahí salen in home o in the work, dos errores muy típicos. Lo mismo vale para los eventos y los sitios donde recibes un servicio: at a party, at the cinema, at the doctor's, at the hairdresser's, en la peluquería." },
    { p: "Aquí el inglés británico y el americano se separan otra vez. El inglés británico dice que un paciente está **in hospital** y un estudiante at university, sin artículo. El inglés americano dice **in the hospital**, como nuestro en el hospital, y los estudiantes están in college. Oxford Learner's Dictionaries explica que en inglés americano university no se usa de esta manera, así que un estadounidense dice my son is in college donde un británico diría he's at university." },
    { panels: [
      ['Inglés británico', "She spent two weeks in hospital. Both their children are at university. I'll see you at the weekend."],
      ['Inglés americano', "She spent two weeks in the hospital. Both their children are in college. I'll see you on the weekend."],
    ] },

    { h: '¿In time u on time?' },
    { p: "Se parecen mucho y significan cosas distintas, y aquí el español mezcla las dos en a tiempo. **On time** es puntual, a la hora prevista, ni antes ni después, y va con horarios y programas: the trains are usually on time, the meeting never starts on time. Right on time, o en inglés británico dead on time, lo refuerza." },
    { p: "**In time** significa con tiempo suficiente para hacer algo. Suele ir seguido de for y un nombre o de to y un verbo: we'll arrive in time for lunch, llegaremos a tiempo para comer; I got home in time to see the match. Just in time es justo a tiempo. Cambridge Dictionary da un par muy claro: the stadium must be completed on time, en el plazo previsto, o in time for the Olympics, antes de que empiecen los Juegos." },
    { examples: [
      ['The flight landed right **on time**.', 'El vuelo aterrizó puntualísimo, a la hora prevista.'],
      ['We got there **in time** for dinner.', 'Llegamos a tiempo para la cena.'],
      ["You're **just in time**. We're about to start.", 'Llegas justo a tiempo, estamos a punto de empezar.'],
    ] },

    { h: '¿At the end o in the end?' },
    { p: "Aquí el español vuelve a juntar dos expresiones en una, al final. **At the end** es el punto en que algo termina, y suele ir con of: at the end of the film, at the end of the month, at the end of the street. **In the end** significa al final en el sentido de finalmente, después de un proceso largo, muchos cambios o mucha discusión: we looked at three apartments, and in the end we took the first one." },
    { p: "El error que hay que evitar es in the end of. Cambridge Dictionary lo señala expresamente: **at the end of the film, everyone was crying**, nunca in the end of the film. Un par parecido es at the beginning, el punto de inicio, e in the beginning, que suele contrastar una primera fase con lo que vino después: in the beginning nobody understood, al principio nadie entendía, pero luego todo quedó más claro." },
    { examples: [
      ['Pay **at the end of** the month.', 'Paga a final de mes: el punto en que termina el mes.'],
      ['We argued for hours, but **in the end** we agreed.', 'Discutimos durante horas, pero al final nos pusimos de acuerdo.'],
      ['**At the beginning of** every lesson, we review the homework.', 'Al principio de cada clase repasamos los deberes.'],
    ] },

    { h: 'Por qué el español te hace tropezar' },
    { p: "Los errores con estas palabras no son al azar. Vienen de la traducción, porque **el español cubre con en lo que el inglés reparte entre tres**: en la mesa, en casa, en el autobús, en junio. Cuando una sola preposición hace el trabajo de tres, la elección inglesa parece arbitraria, y uno acaba traduciendo palabra por palabra." },
    { h3: 'En, a y el artículo' },
    { p: "Nuestra **en** sirve para casi todo el lugar, y por eso salen in the table, in the bus, in the third floor o in home. Para el tiempo usamos el artículo con los días, el lunes, el día de mi cumpleaños, así que on Monday no tiene modelo en español. Y nuestra **a**, la de llegar a Madrid o a las cinco, se cuela en arrive to. Si identificas cuál de las tres está detrás de tu error, la corrección es casi automática." },
    { p: "Los hablantes de otras lenguas romances tropiezan de forma parecida, por motivos algo distintos. El portugués **em** funciona casi como nuestro en. El italiano y el francés usan a o à con las ciudades, a Roma, à Paris, y de ahí sale at Rome o at Paris en lugar de in Rome. Si trabajas en un equipo internacional oirás estos errores por todas partes, y ahora sabes de dónde vienen." },

    { h: 'Errores frecuentes' },
    { p: "Estos son los tropiezos que los profesores oyen más a menudo a los hispanohablantes, y cada uno rompe un patrón de este artículo." },
    { mistakes: [
      ['I was born on 1998.', 'I was born **in** 1998.', 'Los años llevan in. On es para una fecha: I was born on May 3, 1998.'],
      ['See you in Monday.', 'See you **on** Monday.', 'Los días de la semana llevan on.'],
      ["We'll meet on next Friday.", "We'll meet **next** Friday.", 'Next, last, this y every no llevan preposición.'],
      ['What do you do in the weekend?', 'What do you do **at the weekend**? (UK) / **on the weekend**? (US)', 'In the weekend, calco de en el fin de semana, no se usa en ninguna variedad.'],
      ['The keys are in the table.', 'The keys are **on** the table.', 'Una superficie lleva on, aunque en español digamos en la mesa.'],
      ["I'm in the bus.", "I'm **on** the bus.", 'Autobuses, trenes y aviones llevan on.'],
      ['Our office is in the third floor.', 'Our office is **on** the third floor.', 'Los pisos llevan on.'],
      ["I'm in home.", "I'm **at** home.", 'En casa es at home, sin artículo.'],
      ['We arrived to London at 6.', 'We arrived **in** London at 6.', 'Arrive in para ciudades y países, arrive at para un edificio. Nunca arrive to.'],
      ['In the end of the film, they get married.', '**At the end of** the film, they get married.', 'At the end of es el punto final; in the end significa finalmente.'],
    ] },

    { h: 'Cómo hacer que la elección correcta sea automática' },
    { p: "Con las preposiciones, el problema casi nunca es conocer la regla. Casi todo el mundo sabe recitar at para la hora y on para los días, y luego en una conversación rápida dice in Monday. **Lo que las arregla es oír y usar expresiones completas** hasta que suenen normales: on the bus, at the weekend, in the morning, next Friday. Aprende la preposición junto con su sustantivo, nunca sola." },
    { p: "Por eso la práctica oral regular ayuda más que otra página de reglas. En clases en directo con un profesor y el mismo grupo reducido hablas de tu semana, de tus planes y de dónde están las cosas, y las mismas expresiones vuelven una y otra vez. Después de cada clase, **las flashcards con las palabras de tus clases** te permiten repasar esas expresiones en su forma completa, preposición incluida." },
    { p: "Cuando escribas, revisa primero las expresiones de tiempo. Busca cada this, next, last y every, y quita la preposición que tengan delante. Después comprueba cada día, fecha, mes y año con el triángulo. Unas semanas con esta costumbre eliminan la mayoría de los errores de la tabla de arriba, y las expresiones fijas empiezan a salir solas." },
  ],
  quiz: [
    { q: 'The concert starts ___ 8 p.m.', options: ['in', 'on', 'at', 'sin preposición'], a: 2, why: 'La hora lleva at: at 8 p.m.' },
    { q: 'My grandmother was born ___ 1952.', options: ['at', 'in', 'on', 'sin preposición'], a: 1, why: 'Los años llevan in: in 1952.' },
    { q: 'I have an interview ___ Tuesday morning.', options: ['on', 'in', 'at', 'by'], a: 0, why: 'Una mañana concreta lleva on, aunque in the morning lleve in.' },
    { q: "Let's meet ___ next Saturday.", options: ['on', 'at', 'in', 'sin preposición'], a: 3, why: 'Las expresiones con next, last, this y every no llevan preposición: next Saturday.' },
    { q: '¿Qué frase es inglés británico?', options: ["I'll see you on the weekend.", "I'll see you at the weekend.", "I'll see you in the weekend.", "I'll see you by the weekend."], a: 1, why: 'At the weekend es británico, on the weekend americano. In the weekend no se usa.' },
    { q: 'Sorry, I can’t talk now. I’m ___ the train.', options: ['in', 'at', 'on', 'by'], a: 2, why: 'Trenes, autobuses y aviones llevan on.' },
    { q: 'El autobús salió a las 7:15 en punto, según el horario. Salió ___.', options: ['in time', 'on time', 'at time', 'in the time'], a: 1, why: 'On time significa puntual, a la hora prevista.' },
    { q: 'We looked at many apartments, and ___ we chose the first one.', options: ['at the end', 'in the end', 'on the end', 'at end'], a: 1, why: 'In the end significa finalmente, después de un proceso largo.' },
  ],
  faq: [
    ['¿Se dice at the weekend u on the weekend?', 'Las dos son correctas. At the weekend es la forma británica habitual, on the weekend la americana. In the weekend, calco de en el fin de semana, no se usa en ninguna de las dos.'],
    ['¿Por qué in the morning pero on Monday morning?', 'In va con las partes del día en general. Cuando la parte del día pertenece a un día concreto, o lleva un adjetivo, va con on: on Monday morning, on a cold evening.'],
    ['¿Hace falta preposición antes de next week o last year?', 'No. Las expresiones con next, last, this, every, each, some y all no llevan in, on ni at: next week, last year, this morning, every day. Igual que en español: la semana que viene, el año pasado.'],
    ['¿Se dice in the bus u on the bus?', 'On the bus. Autobuses, trenes, aviones y barcos llevan on; coches y taxis llevan in. Para decir cómo viajas usa by: by bus, by car, nuestro en autobús, en coche.'],
    ['¿Qué diferencia hay entre in time y on time?', 'On time significa puntual, a la hora prevista. In time significa a tiempo, con margen para hacer algo, a menudo con for o to: in time for dinner, in time to catch the train.'],
  ],
  related: ['present-perfect', 'phrasal-verbs', 'cefr-english'],
  sources: [
    ['Cambridge Dictionary: At, on and in (time)', 'https://dictionary.cambridge.org/grammar/british-grammar/at-on-and-in-time'],
    ['Cambridge Dictionary: At, on and in (place)', 'https://dictionary.cambridge.org/grammar/british-grammar/at-on-and-in-place'],
    ['British Council LearnEnglish: preposiciones de tiempo', 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2-grammar/prepositions-of-time-at-in-on'],
    ['British Council LearnEnglish: preposiciones de lugar', 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/prepositions-place'],
    ['Oxford Learner’s Dictionaries: weekend', 'https://www.oxfordlearnersdictionaries.com/definition/english/weekend_1'],
    ['Wikipedia: American and British English grammatical differences', 'https://en.wikipedia.org/wiki/American_and_British_English_grammatical_differences'],
  ],
};
