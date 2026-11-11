// Spanish A1 for study and exams, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Enrolling in a course',
  goal: 'Give your personal details, fill in a form and ask about a course: dates, times, prices and how to enrol.',
  art: 'cat',
  tags: { skills: ['vocabulary', 'speaking', 'reading', 'writing'], topics: ['personal-details', 'forms', 'usted-questions', 'course-information', 'prices'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Nombre, apellidos, nacionalidad',
      about: 'Understand the words on a form and give your personal details.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'When you enrol in a course, you fill in a form: **un formulario**. It asks for your personal details. In Spain people usually have **two surnames** (*dos apellidos*): the first one from the father and the second one from the mother. So a form says *apellidos*, in the plural.' },
          { t: 'table', caption: 'Words on a form', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'English'], rows: [
            ['el nombre', 'first name'],
            ['los apellidos', 'surnames'],
            ['la nacionalidad', 'nationality'],
            ['la fecha de nacimiento', 'date of birth'],
            ['la edad', 'age'],
            ['la dirección', 'address'],
            ['el teléfono', 'phone number'],
            ['el correo electrónico', 'email address'],
            ['la firma', 'signature'],
          ] },
          { t: 'tip', art: 'churro', md: 'To say an email address, *@* is **arroba** and *.* is **punto**: *ana.ruiz@example.com* is *ana punto ruiz arroba example punto com*. In many Latin American countries people also have two surnames.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Me llamo** Yuki.', n: '*llamarse*: *me llamo, te llamas, se llama*.' },
            { s: 'Mi **apellido** es Tanaka.', n: 'Yuki has one surname, so she says *mi apellido*.' },
            { s: '**Soy** japonesa.', n: '*ser* + nationality. A woman says *japonesa*, a man says *japonés*.' },
            { s: '**Tengo** veintitrés años.', n: 'Spanish uses *tener* for age: *tengo… años*.' },
            { s: '**Vivo** en Valencia, en la calle Mayor, número ocho.', n: '*vivir* is a regular -ir verb: *vivo, vives, vive*.' },
            { s: 'Mi correo electrónico **es** yuki.t@example.com.', n: 'Say it like this: *yuki punto te arroba example punto com*.' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of tener. You use it for your age.', verb: 'tener', tense: 'present', rows: [
            ['yo', 'tengo', 'The *yo* form is irregular: *tengo*.'],
            ['tú', 'tienes', 'e > ie: *tienes*.'],
            ['él, ella, usted', 'tiene', 'e > ie: *tiene*.'],
            ['nosotros', 'tenemos', 'No change with *nosotros*.'],
            ['vosotros', 'tenéis', 'No change with *vosotros*. Note the accent.'],
            ['ellos, ellas, ustedes', 'tienen', 'e > ie: *tienen*.'],
          ] },
        ],
        [
          { t: 'text', md: 'At the office of a school or a university, staff often use **usted**: *¿Cómo se llama? ¿De dónde es? ¿Cuántos años tiene?* The verb is the same as for *él* and *ella*.' },
          { t: 'dialogue', title: 'At the reception desk', lines: [
            { who: 'Recepcionista', s: 'Buenos días. ¿Cómo se llama?' },
            { who: 'Kenji', s: 'Me llamo Kenji Sato.' },
            { who: 'Recepcionista', s: '¿Cómo se escribe su apellido?' },
            { who: 'Kenji', s: 'Ese, a, te, o. Sato.' },
            { who: 'Recepcionista', s: 'Gracias. ¿De dónde es?' },
            { who: 'Kenji', s: 'Soy japonés, de Osaka.' },
            { who: 'Recepcionista', s: '¿Cuántos años tiene?' },
            { who: 'Kenji', s: 'Tengo veintiocho años.' },
            { who: 'Recepcionista', s: '¿Y su correo electrónico?' },
            { who: 'Kenji', s: 'Kenji punto sato arroba example punto com.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['¿Cómo se llama?', 'Me llamo Kenji.'],
            ['¿Cómo se escribe su apellido?', 'Ese, a, te, o.'],
            ['¿De dónde es?', 'Soy japonés.'],
            ['¿Cuántos años tiene?', 'Tengo veintiocho años.'],
            ['¿Dónde vive?', 'En Valencia.'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete Kenji’s sentences.', items: [
            { q: 'Me ___ Kenji. (llamarse)', a: ['llamo'], why: '*llamarse* with *yo*: *me llamo*.' },
            { q: '___ veintiocho años. (tener)', a: ['Tengo'], why: 'Age with *tener*: *tengo… años*.' },
            { q: '___ japonés, de Osaka. (ser)', a: ['Soy'], why: 'Nationality with *ser*: *soy*.' },
            { q: 'Mi correo electrónico ___ kenji.sato@example.com. (ser)', a: ['es'], why: '*Mi correo electrónico* is one thing, so *es*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'A classmate asks with tú. Ask the same question with usted.', items: [
            { q: '¿Cómo te llamas?', a: ['¿Cómo se llama?', 'Cómo se llama'], why: 'With *usted*, *te llamas* becomes *se llama*.' },
            { q: '¿De dónde eres?', a: ['¿De dónde es?', 'De dónde es'], why: 'With *usted*, *eres* becomes *es*.' },
            { q: '¿Cuántos años tienes?', a: ['¿Cuántos años tiene?', 'Cuántos años tiene'], why: 'With *usted*, *tienes* becomes *tiene*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which line of the form is it?', items: [
            { q: 'Tanaka', o: ['los apellidos', 'el nombre', 'la nacionalidad'], why: '*Tanaka* is Yuki’s surname.' },
            { q: 'japonesa', o: ['la nacionalidad', 'la dirección', 'la edad'], why: '*japonesa* is a nationality.' },
            { q: 'calle Mayor, número ocho', o: ['la dirección', 'el teléfono', 'la firma'], why: 'A street and a number make an address.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Quería información',
      about: 'Ask about a course at the school office: when it starts, how often, how much it costs.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To ask for something politely, start with **Quería…** It is softer than *quiero*: *Quería información sobre los cursos.* Then ask your questions with **¿Cuándo…?**, **¿Cuánto…?** and **¿Hay…?**' },
          { t: 'examples', items: [
            { s: '**Quería** información sobre el curso A1.', n: '*Quería* is a polite way to say what you want.' },
            { s: '¿**Cuándo empieza** el curso?', n: '*empezar* changes e > ie: *empieza*.' },
            { s: '¿**Cuántas horas** a la semana son?', n: '*cuántas* with a feminine plural noun: *horas*.' },
            { s: '¿**Hay** clases por la tarde?', n: '*hay*: there is, there are.' },
            { s: '¿**Cuánto cuesta** el curso?', n: '*costar* changes o > ue: *cuesta*.' },
            { s: '**Quiero** hacer la **matrícula**, por favor.', n: '*la matrícula*: enrolment. *hacer la matrícula*: to enrol.' },
          ] },
          { t: 'tip', art: 'churro', md: 'In Spain you *haces la matrícula* or *te matriculas*. In many Latin American countries people say *la inscripción* and *inscribirse*.' },
        ],
        [
          { t: 'dialogue', title: 'At the school office', lines: [
            { who: 'Rosa', s: 'Hola, buenas tardes. Quería información sobre los cursos de español.' },
            { who: 'Recepcionista', s: 'Sí, claro. ¿Qué nivel tienes?' },
            { who: 'Rosa', s: 'Soy principiante. Nivel A1.' },
            { who: 'Recepcionista', s: 'Tenemos un curso A1 por la mañana y otro por la tarde.' },
            { who: 'Rosa', s: '¿Cuándo empieza el curso de la tarde?' },
            { who: 'Recepcionista', s: 'Empieza el lunes, día tres.' },
            { who: 'Rosa', s: '¿Y cuántas horas a la semana son?' },
            { who: 'Recepcionista', s: 'Seis horas: lunes, miércoles y viernes, de seis a ocho.' },
            { who: 'Rosa', s: '¿Cuánto cuesta?' },
            { who: 'Recepcionista', s: 'Noventa euros al mes. El libro no está incluido.' },
            { who: 'Rosa', s: 'Vale. Quiero hacer la matrícula, por favor.' },
            { who: 'Recepcionista', s: 'Muy bien. Aquí tienes el formulario.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Rosa es principiante.', a: 't', why: '*Soy principiante. Nivel A1.*' },
            { q: 'Hay un curso A1 solo por la mañana.', a: 'f', why: 'There is one in the morning and one in the afternoon: *otro por la tarde*.' },
            { q: 'El curso de la tarde es tres días a la semana.', a: 't', why: '*lunes, miércoles y viernes*: three days.' },
            { q: 'El libro está incluido en el precio.', a: 'f', why: '*El libro no está incluido.*' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['¿Cuándo empieza el curso?', 'El lunes, día tres.'],
            ['¿Cuántas horas a la semana son?', 'Seis horas.'],
            ['¿Cuánto cuesta?', 'Noventa euros al mes.'],
            ['¿Hay clases por la tarde?', 'Sí, de seis a ocho.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete the questions with the words.', extra: ['dónde', 'quién'], items: [
            { q: '___ información sobre el curso de la tarde.', a: 'Quería', why: '*Quería* is a polite way to start.' },
            { q: '¿Cuánto ___ el curso intensivo?', a: 'cuesta', why: '*¿Cuánto cuesta…?* asks for the price.' },
            { q: '¿Cuándo ___ las clases?', a: 'empiezan', why: '*las clases* is plural, so *empiezan*.' },
            { q: '¿___ un curso por la mañana?', a: 'Hay', why: '*¿Hay…?* asks if something exists.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentence. Two words do not belong.', items: [
            { a: 'Quería información sobre los cursos.', extra: ['cuesta', 'hay'], why: '*Quería información sobre…*: a polite start.' },
            { a: '¿Cuántas horas a la semana son?', extra: ['cuántos', 'es'], why: '*horas* is feminine plural: *cuántas*. The verb is plural too: *son*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a course advert and a form',
      about: 'Find days, times and prices in an advert, and read a form filled in by a student.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Here is an advert from a language school. Look for the days, the times and the prices.' },
          { t: 'reading', title: 'Escuela de idiomas La Plaza: cursos de español', md: '¿Estudias en la universidad y necesitas español? Tenemos cursos para todos los niveles.\n\nCurso intensivo A1: de lunes a viernes, de nueve a una. Precio: noventa euros a la semana.\n\nCurso de tarde A1: martes y jueves, de seis a ocho. Precio: setenta euros al mes.\n\nLos grupos son pequeños: diez estudiantes como máximo. El primer día hay una prueba de nivel.\n\nMatrícula: en la secretaría, de lunes a viernes, de diez a dos. Necesitas tu pasaporte y una foto. Si tienes preguntas, escribe a info@example.com.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the advert. Choose the right answer.', items: [
            { q: '¿Cuándo es el curso intensivo?', o: ['de lunes a viernes por la mañana', 'martes y jueves por la tarde', 'solo los lunes'], why: '*de lunes a viernes, de nueve a una*: every weekday in the morning.' },
            { q: '¿Cuánto cuesta el curso de tarde?', o: ['setenta euros al mes', 'noventa euros a la semana', 'diez euros al mes'], why: '*Curso de tarde A1… setenta euros al mes.* Ninety is the intensive course.' },
            { q: '¿Qué necesitas para la matrícula?', o: ['el pasaporte y una foto', 'un libro y un diccionario', 'una prueba de nivel'], why: '*Necesitas tu pasaporte y una foto.*' },
          ] },
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'En un grupo hay doce estudiantes.', a: 'f', why: '*diez estudiantes como máximo*: not more than ten.' },
            { q: 'La secretaría está abierta por la tarde.', a: 'f', why: 'It is open *de diez a dos*, so in the morning and at midday.' },
            { q: 'La escuela tiene una cafetería.', a: 'ng', why: 'The advert says nothing about a café.' },
          ] },
        ],
        [
          { t: 'text', md: 'Omar enrols in a course. Here is his form.' },
          { t: 'table', caption: 'Formulario de matrícula', head: ['Datos', 'Omar'], rows: [
            ['Nombre', 'Omar'],
            ['Apellidos', 'Benali Ruiz'],
            ['Nacionalidad', 'marroquí'],
            ['Edad', '19'],
            ['Correo electrónico', 'omar.benali@example.com'],
            ['Curso', 'Curso de tarde A1'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Use the form and the advert together.', items: [
            { q: '¿Qué días tiene clase Omar?', o: ['los martes y los jueves', 'de lunes a viernes', 'los lunes y los miércoles'], why: 'Omar’s course is the *curso de tarde*: *martes y jueves*.' },
            { q: '¿Cuánto paga Omar al mes?', o: ['setenta euros', 'noventa euros', 'diecinueve euros'], why: 'The *curso de tarde* costs *setenta euros al mes*. 19 is his age.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the words that ask about time.', items: [
            { s: '[¿Cuándo] empieza el curso? ¿Cuánto cuesta? ¿A qué [hora] es la clase? ¿Dónde está la secretaría?', why: '*cuándo* (when) and *hora* (time) ask about time. *cuánto* asks for the price, *dónde* for the place.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: the question and the line of the form.', pairs: [
            ['¿Cómo te llamas?', 'Nombre'],
            ['¿De dónde eres?', 'Nacionalidad'],
            ['¿Cuántos años tienes?', 'Edad'],
            ['¿Dónde vives?', 'Dirección'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'En el formulario, «Benali Ruiz» son ___.', o: ['los apellidos', 'el nombre', 'la dirección'], why: 'Two surnames: *los apellidos*.' },
      { q: '___ información sobre el curso de la tarde.', o: ['Quería', 'Cuánto', 'Tengo'], why: '*Quería información…* is a polite start.' },
      { q: '¿Cuánto ___ el curso?', o: ['cuesta', 'empieza', 'hay'], why: '*¿Cuánto cuesta…?* asks for the price.' },
      { q: 'La recepcionista pregunta con usted: «¿___ años tiene?»', o: ['Cuántos', 'Cuántas', 'Cuándo'], why: '*años* is masculine plural: *cuántos*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: '___ veinte años. (tener)', a: ['Tengo'], why: 'Age with *tener*: *tengo… años*.' },
      { q: 'Me ___ Rosa. (llamarse)', a: ['llamo'], why: '*llamarse* with *yo*: *me llamo*.' },
      { q: '¿Cuándo ___ el curso? (empezar)', a: ['empieza'], why: '*empezar* changes e > ie: *empieza*.' },
      { q: 'En un correo electrónico, @ se dice ___.', a: ['arroba'], why: '*@* is *arroba* in Spanish.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Ask the same question with usted.', items: [
      { q: '¿De dónde eres?', a: ['¿De dónde es?', 'De dónde es'], why: 'With *usted*, *eres* becomes *es*.' },
      { q: '¿Cómo te llamas?', a: ['¿Cómo se llama?', 'Cómo se llama'], why: 'With *usted*, *te llamas* becomes *se llama*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
      ['¿Cuánto cuesta?', 'Setenta euros al mes.'],
      ['¿Cuándo es la clase?', 'Los martes y los jueves.'],
      ['¿Cuántos estudiantes hay en un grupo?', 'Diez como máximo.'],
      ['¿Qué necesito para la matrícula?', 'El pasaporte y una foto.'],
    ] },
  ],
};
