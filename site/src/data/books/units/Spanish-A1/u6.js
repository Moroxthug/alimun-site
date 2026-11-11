// Spanish A1, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Free time',
  goal: 'Talk about what you like doing and arrange to meet.',
  art: 'cactus',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['gustar', 'hobbies', 'sports', 'frequency', 'arranging-to-meet', 'weather', 'seasons'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Me gusta, me gustan',
      about: 'Say what you like and what you do not like.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To say what you like, use **gustar**. It works in a different way from English. *Me gusta el café* means *the coffee pleases me*. So the verb agrees with the **thing you like**, not with the person.\n\nOne thing or a verb: **gusta**. More than one thing: **gustan**.' },
          { t: 'table', caption: 'gustar', explain: ['head'], quiz: true, head: ['Person', 'One thing or a verb', 'More than one thing'], rows: [
            ['(a mí)', 'me gusta', 'me gustan'],
            ['(a ti)', 'te gusta', 'te gustan'],
            ['(a él / a ella / a usted)', 'le gusta', 'le gustan'],
            ['(a nosotros)', 'nos gusta', 'nos gustan'],
            ['(a vosotros)', 'os gusta', 'os gustan'],
            ['(a ellos / a ellas / a ustedes)', 'les gusta', 'les gustan'],
          ] },
          { t: 'examples', items: [
            { s: '**Me gusta** el chocolate.', n: 'One thing: *gusta*.' },
            { s: '**Me gustan** los perros.', n: 'More than one thing: *gustan*.' },
            { s: '**Nos gusta** bailar.', n: 'A verb in the infinitive: always *gusta*.' },
            { s: '**No me gusta** madrugar.', n: '*no* goes before *me*.' },
            { s: '¿**Te gustan** las películas de terror?', n: 'A question: just the same words with question marks.' },
          ] },
        ],
        [
          { t: 'text', md: 'To agree or disagree with someone, use **a mí** + a short word.\n\nIf the other person likes it: *A mí también* (me too) or *A mí no* (not me). If the other person does not like it: *A mí tampoco* (me neither) or *A mí sí* (I do).' },
          { t: 'dialogue', title: 'En el parque', lines: [
            { who: 'Lucía', s: 'Me gusta mucho correr por la mañana.' },
            { who: 'Diego', s: '¿Sí? A mí también. ¿Y te gusta nadar?' },
            { who: 'Lucía', s: 'No, no me gusta nada. El agua está siempre fría.' },
            { who: 'Diego', s: 'A mí sí. Voy a la piscina los martes.' },
            { who: 'Lucía', s: 'Pues a mí no me gustan los deportes de agua.' },
            { who: 'Diego', s: '¿Y el fútbol? ¿Te gusta?' },
            { who: 'Lucía', s: 'No mucho. Prefiero ir en bici.' },
          ] },
          { t: 'tip', art: 'owl', md: 'To make it stronger, add *mucho*: *Me gusta mucho*. To make it very negative, add *nada*: *No me gusta nada*. To talk about one person, add *a* + the name: *A Diego le gusta nadar*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Gusta or gustan? Choose.', items: [
            { q: 'Me ___ la música clásica.', o: ['gusta', 'gustan', 'gusto'], why: '*la música* is one thing: *gusta*.' },
            { q: '¿Te ___ los gatos?', o: ['gustan', 'gusta', 'gustas'], why: '*los gatos* is more than one thing: *gustan*.' },
            { q: 'A mi hermana le ___ leer novelas.', o: ['gusta', 'gustan', 'gustas'], why: 'A verb (*leer*) always takes *gusta*, even with *novelas* after it.' },
            { q: 'No nos ___ las mañanas de invierno.', o: ['gustan', 'gusta', 'gustamos'], why: '*las mañanas* is plural: *gustan*. *nos* already says who.' },
            { q: 'A mis padres les ___ viajar.', o: ['gusta', 'gustan', 'gustamos'], why: 'A verb in the infinitive: *gusta*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'A ti ___ gusta el cine, ¿verdad?', o: ['te', 'me', 'le'], why: '*a ti* goes with *te*.' },
            { q: 'A Carlos ___ gustan los coches.', o: ['le', 'les', 'se'], why: 'One person, *a Carlos*: *le*.' },
            { q: 'A nosotros ___ gusta cocinar.', o: ['nos', 'os', 'les'], why: '*a nosotros* goes with *nos*.' },
            { q: 'A Elena y a Marta ___ gusta la playa.', o: ['les', 'le', 'nos'], why: 'Two people, *a ellas*: *les*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Answer the person. Find the right reply.', pairs: [
            ['Me gusta el té. (you like it too)', 'A mí también.'],
            ['No me gusta el té. (you do not like it either)', 'A mí tampoco.'],
            ['Me gusta el café. (you do not like it)', 'A mí no.'],
            ['No me gusta el café. (you like it)', 'A mí sí.'],
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Me [gustan] el fútbol.', a: ['gusta'], why: '*el fútbol* is one thing: *gusta*.' },
            { s: 'A Pedro [te] gusta dormir.', a: ['le'], why: 'With *a Pedro* (he), the word is *le*.' },
            { s: 'No me gusta el frío. – A mí [también].', a: ['tampoco'], why: 'To agree with a negative sentence, say *A mí tampoco*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Hobbies and sports',
      about: 'Say what you do in your free time and how often.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Many hobbies use a verb on its own: *leer, nadar, bailar, cocinar*. For sports with a ball, say **jugar al** + sport: *jugar al fútbol, jugar al tenis*. For other things, Spanish often uses **hacer**: *hacer deporte, hacer yoga*.' },
          { t: 'table', caption: 'El tiempo libre', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'English'], rows: [
            ['leer', 'to read'],
            ['nadar', 'to swim'],
            ['correr', 'to run'],
            ['bailar', 'to dance'],
            ['cocinar', 'to cook'],
            ['pasear', 'to go for a walk'],
            ['ver series', 'to watch series'],
            ['tocar la guitarra', 'to play the guitar'],
            ['jugar al fútbol', 'to play football'],
            ['hacer deporte', 'to do sport'],
            ['ir al cine', 'to go to the cinema'],
            ['salir con amigos', 'to go out with friends'],
          ] },
          { t: 'tip', art: 'owl', md: 'Be careful: *jugar* is for games and sports, *tocar* is for music. *Juego al tenis*, but *toco el piano*. In parts of Latin America, people often say *jugar fútbol*, with no *al*.' },
        ],
        [
          { t: 'text', md: 'To say how often you do something, use these words. **Siempre**, **a menudo** and **a veces** usually go before the verb or at the end. With **nunca**, there are two ways: *Nunca bailo* or *No bailo nunca*.' },
          { t: 'table', caption: 'How often?', explain: ['head', 'col1'], head: ['Spanish', 'English'], rows: [
            ['siempre', 'always'],
            ['todos los días', 'every day'],
            ['a menudo', 'often'],
            ['dos veces a la semana', 'twice a week'],
            ['a veces', 'sometimes'],
            ['casi nunca', 'hardly ever'],
            ['nunca', 'never'],
          ] },
          { t: 'examples', items: [
            { s: '**Siempre** leo antes de dormir.', n: '*siempre* before the verb.' },
            { s: 'Juego al tenis **dos veces a la semana**.', n: 'This phrase usually goes at the end.' },
            { s: '**A veces** vamos al cine los domingos.', n: '*a veces*: sometimes.' },
            { s: 'Mi hermano **no** hace deporte **nunca**.', n: '*nunca* after the verb needs *no* before the verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'colloc', h: 'Which words go with the verb?', items: [
            { key: 'jugar', o: ['al fútbol', 'al tenis', 'a las cartas', 'la guitarra', 'yoga'], a: [0, 1, 2], why: '*jugar* is for sports and games. Music takes *tocar*, and yoga takes *hacer*.' },
            { key: 'hacer', o: ['deporte', 'yoga', 'fotos', 'al fútbol', 'el piano'], a: [0, 1, 2], why: '*hacer deporte, hacer yoga, hacer fotos*. Football takes *jugar*, and the piano takes *tocar*.' },
            { key: 'tocar', o: ['la guitarra', 'el piano', 'la batería', 'al baloncesto', 'series'], a: [0, 1, 2], why: '*tocar* is for musical instruments.' },
          ] },
          { t: 'ex', kind: 'search', h: 'Find six free-time verbs.', words: ['leer', 'nadar', 'bailar', 'correr', 'cocinar', 'pasear'] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Siempre leo antes de dormir.', why: '*siempre* goes before the verb.' },
            { a: 'Juego al fútbol dos veces a la semana.', why: 'Verb, sport, then how often at the end.' },
            { a: 'Mi padre no cocina nunca.', why: '*no* before the verb and *nunca* after it.' },
            { a: 'A veces salgo con mis amigos.', why: '*a veces* at the start, then the verb *salgo*.' },
          ] },
          { t: 'ex', kind: 'bank', h: 'Complete with a word from the bank.', extra: ['juego', 'leo'], items: [
            { q: 'Me gusta mucho la música. ___ la guitarra todos los días.', a: 'Toco', why: 'An instrument takes *tocar*: *toco*.' },
            { q: 'Los sábados ___ deporte en el parque.', a: 'hago', why: '*hacer deporte*: *hago*.' },
            { q: 'No me gusta el cine. No voy ___.', a: 'nunca', why: '*no* + verb + *nunca*: never.' },
            { q: 'Voy a la piscina a ___, pero no todas las semanas.', a: 'menudo', why: '*a menudo* means often, but not always.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Shall we meet?',
      about: 'Invite someone, say yes or no, and talk about the weather.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'To suggest a plan to a friend, say **¿Quedamos?** (Shall we meet?) or **¿Te apetece** + infinitive? (Do you feel like…?). Then agree on the time and the place: *¿A qué hora quedamos? ¿Dónde quedamos?*' },
          { t: 'dialogue', title: 'Al teléfono', lines: [
            { who: 'Andrés', s: 'Hola, Sara. ¿Te apetece ir al cine el viernes?' },
            { who: 'Sara', s: 'El viernes no puedo, lo siento. Trabajo hasta tarde.' },
            { who: 'Andrés', s: '¿Y el sábado?' },
            { who: 'Sara', s: 'El sábado sí. ¿A qué hora quedamos?' },
            { who: 'Andrés', s: 'La película empieza a las ocho. ¿Quedamos a las siete y media?' },
            { who: 'Sara', s: 'Vale. ¿Dónde quedamos?' },
            { who: 'Andrés', s: 'Delante del cine.' },
            { who: 'Sara', s: 'Perfecto. ¡Hasta el sábado!' },
          ] },
          { t: 'tip', art: 'owl', md: '*Quedar* and *¿Te apetece…?* are very common in Spain. In Latin America, people often say *¿Nos vemos?* and *¿Tienes ganas de…?* or *¿Quieres…?* For *OK*, people in Spain say *vale*. In Latin America you hear *está bien* or *dale*.' },
        ],
        [
          { t: 'table', caption: 'Yes and no', explain: ['head'], head: ['Yes', 'No'], rows: [
            ['Vale.', 'Lo siento, no puedo.'],
            ['¡Buena idea!', 'Ese día no puedo. ¿Y el lunes?'],
            ['Sí, me apetece mucho.', 'No me apetece, la verdad.'],
            ['¡Claro!', 'Lo siento, tengo que trabajar.'],
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions and answers.', items: [
            { a: '¿Te apetece ir a la playa?', why: '*¿Te apetece* + infinitive?' },
            { a: '¿A qué hora quedamos?', why: '*¿A qué hora* + verb?' },
            { a: 'Lo siento, el lunes no puedo.', why: 'Say sorry first, then the day, then *no puedo*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best reply.', items: [
            { q: '¿Te apetece tomar un café? – ___ ¿Dónde quedamos?', o: ['¡Buena idea!', 'Lo siento, no puedo.', 'No me apetece.'], why: 'The person then asks where to meet, so the answer is yes.' },
            { q: '¿Quedamos el martes? – ___ Tengo clase. ¿Y el miércoles?', o: ['El martes no puedo.', '¡Claro!', 'Vale.'], why: 'The person has a class, so the answer is no.' },
            { q: '¿Dónde quedamos? – ___', o: ['En la plaza, delante del bar.', 'A las ocho.', 'El jueves.'], why: '*¿Dónde?* asks for a place.' },
          ] },
        ],
        [
          { t: 'text', md: 'To talk about the weather, Spanish often uses **hace** + noun: *hace calor, hace frío, hace sol*. For rain and snow, there are verbs: **llueve** (it rains) and **nieva** (it snows). With clouds, use **está**: *está nublado*.' },
          { t: 'table', caption: '¿Qué tiempo hace?', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'English'], rows: [
            ['Hace calor.', 'It is hot.'],
            ['Hace frío.', 'It is cold.'],
            ['Hace sol.', 'It is sunny.'],
            ['Hace viento.', 'It is windy.'],
            ['Hace buen tiempo.', 'The weather is good.'],
            ['Hace mal tiempo.', 'The weather is bad.'],
            ['Llueve.', 'It is raining.'],
            ['Nieva.', 'It is snowing.'],
            ['Está nublado.', 'It is cloudy.'],
          ] },
          { t: 'table', caption: 'Las estaciones', explain: ['head', 'col1'], head: ['Spanish', 'English'], rows: [
            ['la primavera', 'spring'],
            ['el verano', 'summer'],
            ['el otoño', 'autumn'],
            ['el invierno', 'winter'],
          ] },
          { t: 'examples', items: [
            { s: 'En verano **hace** mucho **calor** en el sur de España.', n: '*mucho* with a noun: *mucho calor*.' },
            { s: 'Hoy **llueve**. ¿Quedamos en mi casa?', n: '*llover → llueve*: o → ue.' },
            { s: 'En invierno a veces **nieva** en las montañas.', n: '*nevar → nieva*: e → ie.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing weather word.', items: [
            { q: 'Necesito un paraguas. ___ mucho.', a: ['Llueve'], why: 'Rain: *llueve*.' },
            { q: 'Hoy ___ sol. ¿Vamos a la playa?', a: ['hace'], why: 'The sun: *hace sol*.' },
            { q: 'En invierno hace mucho ___.', a: ['frío'], why: 'Winter is cold: *hace frío*.' },
            { q: 'No hace sol, pero no llueve. Está ___.', a: ['nublado'], why: 'Clouds: *está nublado*.' },
            { q: 'En agosto hace mucho ___.', a: ['calor'], why: 'In Spain, August is usually hot: *hace calor*.' },
          ] },
          { t: 'ex', kind: 'label', h: 'Label the park.', scene: 'park', extra: ['la nube', 'el perro'], items: [
            { x: 82, y: 70, a: 'el árbol', why: '*el árbol*: the tree.' },
            { x: 262, y: 42, a: 'el sol', why: '*el sol*: the sun. *Hace sol*.' },
            { x: 220, y: 128, a: 'el banco', why: '*el banco*: the bench. It also means the bank.' },
            { x: 204, y: 66, a: 'el pájaro', why: '*el pájaro*: the bird.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Reading: what’s on this month',
      about: 'Read notices from a sports centre and a cultural centre.',
      art: 'churro',
      spreads: [
        [
          { t: 'reading', title: 'Polideportivo Las Encinas', md: '**Nuevas clases en octubre**\n\n**Natación para adultos.** Los lunes y los miércoles, de siete a ocho de la tarde. Precio: veinte euros al mes.\n\n**Yoga.** Los martes y los jueves por la mañana, a las diez. Es una clase tranquila, para todas las edades.\n\n**Fútbol para niños de seis a doce años.** Los sábados por la mañana. Los niños juegan en el campo de fuera. Si llueve, la clase es en el gimnasio.\n\nEl polideportivo abre todos los días de siete de la mañana a diez de la noche. Los domingos cierra a las dos de la tarde.' },
          { t: 'reading', title: 'Centro Cultural del Barrio', md: '**Este mes en el centro**\n\n**Cine en el patio.** Todos los viernes a las nueve y media de la noche. La entrada es gratis. Si hace mal tiempo, la película es en la sala grande.\n\n**Club de lectura.** Un jueves al mes, a las seis de la tarde. Este mes leemos una novela corta. Te esperamos en la biblioteca.\n\n**Taller de cocina.** El sábado veinte, de once a una. Aprendemos a hacer tortilla de patatas. Precio: diez euros. Plazas limitadas: escribe a cultura@example.com.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'La clase de natación es dos veces a la semana.', a: 't', why: '*Los lunes y los miércoles*: twice a week.' },
            { q: 'La clase de yoga es por la tarde.', a: 'f', why: 'It is in the morning: *por la mañana, a las diez*.' },
            { q: 'Si llueve, no hay fútbol para niños.', a: 'f', why: 'There is football, but in the gym: *la clase es en el gimnasio*.' },
            { q: 'Los domingos el polideportivo cierra pronto.', a: 't', why: '*Los domingos cierra a las dos de la tarde.*' },
            { q: 'Para ir al cine en el patio, hay que pagar.', a: 'f', why: '*La entrada es gratis*: it is free.' },
            { q: 'El taller de cocina es para niños.', a: 'ng', why: 'The notice does not say who the workshop is for.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which activity is good for each person?', items: [
            { q: 'A Rosa le gusta nadar, pero trabaja todas las mañanas.', o: ['Natación para adultos.', 'Yoga.', 'Taller de cocina.'], why: 'Swimming is in the evening, *de siete a ocho de la tarde*.' },
            { q: 'A Tomás le gusta leer y hablar de libros.', o: ['Club de lectura.', 'Cine en el patio.', 'Fútbol para niños.'], why: 'A reading club: *club de lectura*.' },
            { q: 'A Inés le gusta cocinar y está libre el sábado veinte.', o: ['Taller de cocina.', 'Club de lectura.', 'Natación para adultos.'], why: 'The cooking workshop is on Saturday the twentieth.' },
            { q: 'Mateo tiene ocho años y le gusta mucho el fútbol.', o: ['Fútbol para niños.', 'Yoga.', 'Cine en el patio.'], why: 'Football for children from six to twelve.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Me ___ las películas de acción.', o: ['gustan', 'gusta', 'gusto'], why: 'More than one thing: *gustan*.' },
      { q: 'A mi madre ___ gusta pasear.', o: ['le', 'les', 'me'], why: '*a mi madre* (she): *le*.' },
      { q: 'No me gusta el invierno. – A mí ___.', o: ['tampoco', 'también', 'sí también'], why: 'To agree with a negative sentence: *tampoco*.' },
      { q: 'Mi hermana ___ el piano.', o: ['toca', 'juega', 'hace'], why: 'Musical instruments take *tocar*.' },
      { q: 'En verano ___ mucho calor.', o: ['hace', 'está', 'es'], why: 'Weather with a noun: *hace calor*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Los domingos juego ___ tenis con mi padre.', a: ['al'], why: '*jugar a + el tenis = jugar al tenis*.' },
      { q: 'No voy al gimnasio ___. No me gusta.', a: ['nunca'], why: '*no* + verb + *nunca*.' },
      { q: '¿Te ___ ir a la playa el sábado? – ¡Sí, buena idea!', a: ['apetece'], why: '*¿Te apetece* + infinitive? invites someone.' },
      { q: '¿A qué hora ___? – A las ocho, delante del cine.', a: ['quedamos'], why: '*quedar*: to meet. *¿A qué hora quedamos?*' },
      { q: 'Hoy hace mal tiempo. ___ y hace viento.', a: ['Llueve'], why: 'Rain: *llueve*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'A nosotros nos gusta mucho bailar.', why: '*a nosotros nos gusta*, then *mucho* and the verb.' },
      { a: 'A veces hago yoga por la mañana.', why: 'How often, verb, activity, when.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'A ellos [le] gustan los deportes.', a: ['les'], why: 'More than one person, *a ellos*: *les*.' },
      { s: 'Hoy [es] frío.', a: ['hace'], why: 'Weather with a noun: *hace frío*.' },
    ] },
  ],
};
