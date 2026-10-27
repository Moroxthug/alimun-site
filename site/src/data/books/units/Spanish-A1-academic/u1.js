// Spanish A1 for study and exams, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'In the classroom',
  goal: 'Understand classroom language and ask simple questions in class: instructions, questions for the teacher and the rules of a class.',
  art: 'churro',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['classroom-language', 'classroom-instructions', 'questions-in-class', 'class-rules'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Lee, escucha, escribe',
      about: 'Understand the short instructions your teacher and your course book give you.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Teachers and course books give many short instructions. To one learner, the teacher uses the **tú** form: *Lee el texto. Escucha.* To the whole group, the teacher uses the **vosotros** form, which ends in **-d**: *Leed el texto. Escuchad.* At A1, learn these instructions as whole phrases. You need to understand them, not make them yourself.' },
          { t: 'table', caption: 'Instructions in class', explain: ['head', 'col2'], quiz: true, head: ['To one learner', 'To the group', 'English'], rows: [
            ['Abre el libro.', 'Abrid el libro.', 'Open the book.'],
            ['Lee el texto.', 'Leed el texto.', 'Read the text.'],
            ['Escucha el audio.', 'Escuchad el audio.', 'Listen to the audio.'],
            ['Escribe las respuestas.', 'Escribid las respuestas.', 'Write the answers.'],
            ['Mira la foto.', 'Mirad la foto.', 'Look at the photo.'],
            ['Completa las frases.', 'Completad las frases.', 'Complete the sentences.'],
            ['Marca la respuesta correcta.', 'Marcad la respuesta correcta.', 'Mark the right answer.'],
            ['Trabaja con un compañero.', 'Trabajad en parejas.', 'Work with a partner. / Work in pairs.'],
          ] },
          { t: 'tip', art: 'churro', md: 'In Latin America the teacher says *ustedes* to the group, not *vosotros*: *Abran el libro. Trabajen en parejas.* Course books and exams often use the polite *usted* form: *Lea, Escuche, Marque.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Abrid el libro en la **página** diez.', n: '*la página*: the page. *en la página diez*: at page ten.' },
            { s: 'Haced el **ejercicio** tres.', n: '*el ejercicio*: the exercise. *Haced* is the group form of *hacer* (to do).' },
            { s: 'Lee la **pregunta** y escribe la **respuesta**.', n: '*la pregunta*: the question. *la respuesta*: the answer.' },
            { s: 'Completa la **frase** con una **palabra**.', n: '*la frase*: the sentence. *la palabra*: the word.' },
            { s: 'Trabajad en **parejas** o en **grupos**.', n: '*la pareja*: two people. *el grupo*: three or more people.' },
          ] },
          { t: 'dialogue', title: 'In the Spanish lesson', lines: [
            { who: 'Elena', s: 'Buenos días. Abrid el libro en la página diez, por favor.' },
            { who: 'Tomás', s: '¿En qué página?' },
            { who: 'Elena', s: 'En la página diez. Mirad la foto. ¿Qué hay en la foto?' },
            { who: 'Mei', s: 'Hay una clase y una profesora.' },
            { who: 'Elena', s: 'Muy bien, Mei. Ahora leed el texto y marcad la respuesta correcta.' },
            { who: 'Amira', s: '¿Trabajamos solos o en parejas?' },
            { who: 'Elena', s: 'En parejas. Amira, trabaja con Tomás, por favor.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the two parts of the instruction.', pairs: [
            ['Abre', 'el libro.'],
            ['Escucha', 'el audio.'],
            ['Mira', 'la foto.'],
            ['Trabajad', 'en parejas.'],
            ['Marca', 'la respuesta correcta.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'The teacher gives an instruction. What do you do?', items: [
            { q: '«Trabajad en parejas.»', o: ['Trabajo con un compañero.', 'Trabajo solo.', 'Trabajo con toda la clase.'], why: '*en parejas*: two people together.' },
            { q: '«Escuchad el audio.»', o: ['Escucho.', 'Escribo.', 'Leo.'], why: '*escuchar* means to listen.' },
            { q: '«Abrid el libro en la página veinte.»', o: ['Abro el libro.', 'Cierro el libro.', 'Escribo en la pizarra.'], why: '*abrir* means to open. *cerrar* means to close.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Does the teacher speak to one learner or to the group?', groups: ['tú', 'vosotros'], items: [
            { s: 'Lee.', g: 0, why: 'The *tú* form of *leer* has no *-d*: *lee*.' },
            { s: 'Leed.', g: 1, why: 'The group form ends in *-d*: *leed*.' },
            { s: 'Escuchad.', g: 1, why: 'The group form ends in *-d*: *escuchad*.' },
            { s: 'Escribe.', g: 0, why: 'The *tú* form of *escribir*: *escribe*.' },
            { s: 'Abrid.', g: 1, why: 'The group form ends in *-d*: *abrid*.' },
            { s: 'Mira.', g: 0, why: 'The *tú* form of *mirar*: *mira*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word for the instruction.', items: [
            { q: 'Lee el ___ de la página doce.', o: ['texto', 'audio', 'compañero'], why: 'You read a text: *Lee el texto*.' },
            { q: 'Escucha el ___ y marca la respuesta.', o: ['audio', 'libro', 'grupo'], why: 'You listen to the audio: *Escucha el audio*.' },
            { q: 'Escribe la ___ en el cuaderno.', o: ['respuesta', 'foto', 'pareja'], why: 'You write the answer: *Escribe la respuesta*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'search', h: 'Find six verbs from classroom instructions.', words: ['escucha', 'escribe', 'mira', 'abre', 'marca', 'completa'] },
          { t: 'ex', kind: 'odd', h: 'Which word is not a person or people?', items: [
            { o: ['la página', 'el compañero', 'la profesora', 'el grupo'], why: '*la página* is part of a book. The others are people.' },
            { o: ['la pareja', 'la frase', 'la palabra', 'la pregunta'], why: '*la pareja* is two people. The others are words and sentences.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: '¿Cómo se dice…?',
      about: 'Ask what a word means, how you say or write it, and ask the teacher to repeat.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'In class you need a few questions again and again. Learn them as whole phrases. **¿Cómo se dice…?** asks for a word in Spanish. **¿Qué significa…?** asks for the meaning. **¿Cómo se escribe?** asks for the spelling.' },
          { t: 'examples', items: [
            { s: '¿**Cómo se dice** «pen» en español?', n: 'You know the word in another language and want the Spanish word.' },
            { s: '¿**Qué significa** «deberes»?', n: 'You want to know the meaning of a Spanish word.' },
            { s: '¿**Cómo se escribe**?', n: 'You want to know the spelling.' },
            { s: '¿**Puedes repetir**, por favor?', n: 'You want the teacher to say it again. *puedes* is from *poder* (o > ue).' },
            { s: '**Más despacio**, por favor.', n: '*despacio* means slowly.' },
            { s: 'No **entiendo**.', n: '*entender* changes e > ie: *yo entiendo*.' },
            { s: 'Tengo una **pregunta**.', n: 'Say this before you ask.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'A question in class', lines: [
            { who: 'Lucas', s: 'Perdona, Elena, tengo una pregunta. ¿Qué significa «deberes»?' },
            { who: 'Elena', s: 'Los deberes son los ejercicios para casa.' },
            { who: 'Lucas', s: 'Ah, vale. ¿Y cómo se escribe? ¿Con be o con uve?' },
            { who: 'Elena', s: 'Con be: de, e, be, e, erre, e, ese.' },
            { who: 'Sara', s: 'Elena, no entiendo. ¿Puedes repetir, por favor?' },
            { who: 'Elena', s: 'Sí, claro. De, e, be, e, erre, e, ese.' },
            { who: 'Sara', s: 'Gracias. ¿Y cómo se dice «pen» en español?' },
            { who: 'Elena', s: 'Se dice «bolígrafo» o «boli».' },
          ] },
          { t: 'tip', art: 'churro', md: 'In many language schools in Spain, learners say *tú* to the teacher: *¿Puedes repetir?* With *usted* it is *¿Puede repetir?* In Latin America *usted* with teachers is more common, and homework is usually *la tarea*, not *los deberes*.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What do you say? Match the situation and the question.', pairs: [
            ['No entiendes una palabra.', '¿Qué significa?'],
            ['La profesora habla muy rápido.', 'Más despacio, por favor.'],
            ['Quieres una palabra en español.', '¿Cómo se dice en español?'],
            ['Quieres escribir una palabra nueva.', '¿Cómo se escribe?'],
            ['Quieres escuchar la frase otra vez.', '¿Puedes repetir, por favor?'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order to make questions for class.', items: [
            { a: '¿Cómo se dice esto en español?', why: 'A fixed question: *¿Cómo se dice…?* Then the thing: *esto*, and the language: *en español*.' },
            { a: '¿Puedes repetir la pregunta, por favor?', why: '*Puedes* first, then the infinitive *repetir*, then what: *la pregunta*.' },
            { a: '¿Qué significa esta palabra?', why: '*¿Qué significa…?* Then the word: *esta palabra*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the questions.', items: [
            { q: '¿Qué ___ «mochila»?', a: ['significa'], why: '*¿Qué significa…?* asks for the meaning.' },
            { q: '¿Cómo se ___ «book» en español?', a: ['dice'], why: '*¿Cómo se dice…?* asks for the word in Spanish.' },
            { q: '¿Cómo se ___ tu apellido?', a: ['escribe'], why: '*¿Cómo se escribe?* asks for the spelling.' },
            { q: '¿___ repetir, por favor?', a: ['Puedes', 'Puede'], why: '*¿Puedes repetir?* with *tú*, *¿Puede repetir?* with *usted*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Perdona, yo no [entiende].', a: ['entiendo'], why: 'With *yo*: *entiendo*. *entender* changes e > ie.' },
            { s: '¿Qué [significan] «goma»?', a: ['significa'], why: 'One word, so the verb is singular: *significa*.' },
            { s: 'Más [rápido], por favor. No entiendo.', a: ['despacio'], why: 'You do not understand, so you ask for *más despacio*: more slowly.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: rules on the classroom door',
      about: 'Read the rules of a Spanish class and find what learners do and do not do.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Many classrooms have the rules of the class on the door or the wall: **las normas de la clase**. They often use the **nosotros** form: *hablamos, llegamos, preguntamos*. This means: we all do this.' },
          { t: 'reading', title: 'Normas de la clase de español', md: 'Bienvenidos a la clase de español A1. Estas son nuestras normas.\n\nEn clase hablamos en español. Si no entendemos una palabra, preguntamos: «¿Qué significa?». Los errores son normales. No pasa nada.\n\nLa clase empieza a las nueve y media. Llegamos a la hora. El móvil está en silencio y en la mochila.\n\nLos lunes y los miércoles hay deberes. Hacemos los deberes en casa.\n\nEl diccionario está en la mesa de la profesora. Podemos usarlo en clase.\n\nAl final de la clase, cerramos las ventanas y apagamos el ordenador.\n\nElena, vuestra profesora' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the rules. True, false or not given?', items: [
            { q: 'En clase hablamos en inglés.', a: 'f', why: '*En clase hablamos en español.*' },
            { q: 'La clase empieza a las nueve.', a: 'f', why: 'It starts at half past nine: *a las nueve y media*.' },
            { q: 'Hay deberes dos días a la semana.', a: 't', why: '*Los lunes y los miércoles*: two days.' },
            { q: 'Los errores son un problema.', a: 'f', why: '*Los errores son normales. No pasa nada.*' },
            { q: 'En la clase hay doce estudiantes.', a: 'ng', why: 'The rules say nothing about the number of students.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '¿Dónde está el móvil en clase?', o: ['en la mochila', 'en la mesa', 'en la ventana'], why: '*El móvil está en silencio y en la mochila.*' },
            { q: '¿Qué hacemos al final de la clase?', o: ['Cerramos las ventanas.', 'Hacemos los deberes.', 'Abrimos el libro.'], why: '*Al final de la clase, cerramos las ventanas y apagamos el ordenador.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the things in the classroom.', items: [
            { s: 'El [diccionario] está en la [mesa] de la profesora. Al final cerramos las [ventanas] y apagamos el [ordenador].', why: '*el diccionario, la mesa, la ventana, el ordenador*: things in the classroom.' },
          ] },
          { t: 'tip', art: 'churro', md: '*el móvil* and *el ordenador* are the words in Spain. In Latin America people say *el celular* and *la computadora*.' },
          { t: 'ex', kind: 'crossword', h: 'Complete the crossword with words from the unit.', words: [
            { a: 'libro', clue: 'Lo abres en clase y lees.' },
            { a: 'pizarra', clue: 'La profesora escribe en ella.' },
            { a: 'deberes', clue: 'Ejercicios para hacer en casa.' },
            { a: 'mochila', clue: 'Llevas los libros en ella.' },
            { a: 'pregunta', clue: '¿Qué significa? es una…' },
            { a: 'pareja', clue: 'Dos personas trabajan juntas en…' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'No entiendes una palabra. Preguntas: «___»', o: ['¿Qué significa?', '¿Qué hora es?', '¿Dónde vives?'], why: '*¿Qué significa…?* asks for the meaning.' },
      { q: 'La profesora dice: «Trabajad en parejas». Trabajas ___.', o: ['con un compañero', 'solo', 'con toda la clase'], why: '*en parejas*: two people together.' },
      { q: 'La profesora habla muy rápido. Dices: «___»', o: ['Más despacio, por favor.', 'Tengo una pregunta.', '¿Cómo se escribe?'], why: '*Más despacio* asks the teacher to speak more slowly.' },
      { q: 'La profesora dice a la clase: «___ el texto.»', o: ['Leed', 'Lee', 'Leo'], why: 'To the group the teacher uses the form with *-d*: *Leed*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the questions.', items: [
      { q: '¿Cómo se ___ «table» en español?', a: ['dice'], why: '*¿Cómo se dice…?* asks for the word in Spanish.' },
      { q: '¿Cómo se ___ tu nombre?', a: ['escribe'], why: '*¿Cómo se escribe?* asks for the spelling.' },
      { q: 'Perdona, no ___. (entender)', a: ['entiendo'], why: '*entender* changes e > ie: *yo entiendo*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the two parts of the instruction.', pairs: [
      ['Abrid', 'el libro en la página ocho.'],
      ['Escuchad', 'el audio.'],
      ['Completad', 'las frases.'],
      ['Mirad', 'la foto.'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: '¿Puedes repetir la pregunta, por favor?', why: '*Puedes* first, then the infinitive *repetir*.' },
      { a: 'En clase hablamos en español.', why: 'The time and place *En clase*, then the verb *hablamos*.' },
    ] },
  ],
};
