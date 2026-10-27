// Spanish A1 for work, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Jobs and workplaces',
  goal: 'Say what your job is, where you work and what you do there.',
  art: 'suitcase',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['jobs', 'workplace', 'gender', 'articles', 'present-regular'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'What do you do?',
      about: 'Ask about jobs and say your job with no article, in the form for a man or a woman.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'To ask about someone’s job, say **¿A qué te dedicas?** (with *tú*) or **¿A qué se dedica usted?** (with *usted*). You can also ask *¿En qué trabajas?*\n\nTo answer, use **Soy + job**, with **no article**: *Soy enfermera. Soy cocinero.*' },
          { t: 'examples', items: [
            { s: '¿A qué te dedicas? **Soy camarero.**', n: 'No *un* before the job: not *Soy un camarero*.' },
            { s: 'Mi hermana **es médica**.', n: 'Many jobs ending in *-o* change to *-a* for a woman.' },
            { s: 'Javier **es profesor** y Rosa **es profesora**.', n: 'Jobs ending in *-or* add *-a* for a woman.' },
            { s: 'Lucía **es recepcionista**.', n: 'Jobs ending in *-ista* are the same for men and women: *el recepcionista*, *la recepcionista*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Jobs', explain: ['head'], quiz: true, head: ['Man', 'Woman'], rows: [
            ['el camarero', 'la camarera'],
            ['el cocinero', 'la cocinera'],
            ['el enfermero', 'la enfermera'],
            ['el médico', 'la médica'],
            ['el profesor', 'la profesora'],
            ['el dependiente', 'la dependienta'],
            ['el recepcionista', 'la recepcionista'],
            ['el estudiante', 'la estudiante'],
          ] },
          { t: 'tip', art: 'owl', md: 'Some words change in Latin America. A shop assistant is *dependiente* in Spain and often *vendedor* or *vendedora* in Latin America. A waiter is *camarero* in Spain and *mesero* in Mexico.' },
        ],
        [
          { t: 'dialogue', title: 'At a training day', lines: [
            { who: 'Carlos', s: 'Hola, soy Carlos. ¿A qué te dedicas?' },
            { who: 'Sara', s: 'Soy enfermera. Trabajo en un hospital. ¿Y tú?' },
            { who: 'Carlos', s: 'Yo soy cocinero. Trabajo en un restaurante en el centro.' },
            { who: 'Sara', s: '¡Qué bien! ¿Y te gusta tu trabajo?' },
            { who: 'Carlos', s: 'Sí, mucho. Pero trabajo mucho los fines de semana.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right sentence.', items: [
            { q: '', o: ['Soy enfermera.', 'Soy una enfermera.', 'Soy la enfermera de profesión.'], why: 'With a job after *ser*, there is no article.' },
            { q: 'Ask a colleague about his job.', o: ['¿A qué te dedicas?', '¿A qué se dedican?', '¿Qué te llamas?'], why: 'With *tú*: *¿A qué te dedicas?*' },
            { q: 'Ask a customer about her job, politely.', o: ['¿A qué se dedica usted?', '¿A qué te dedicas tú?', '¿A qué me dedico?'], why: 'With *usted*: *¿A qué se dedica?*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the job for a woman.', items: [
            { q: 'Pedro es camarero y Rosa también es ___.', a: ['camarera'], why: '*-o* changes to *-a*: *camarera*.' },
            { q: 'Andrés es profesor y Clara también es ___.', a: ['profesora'], why: 'Jobs in *-or* add *-a*: *profesora*.' },
            { q: 'Tomás es recepcionista y Ana también es ___.', a: ['recepcionista'], why: 'Jobs in *-ista* do not change.' },
            { q: 'Diego es dependiente y Marta también es ___.', a: ['dependienta'], why: 'In Spain the woman is usually *la dependienta*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Is it a word for a man, for a woman, or for both?', groups: ['man', 'woman', 'both'], explain: ['groups'], items: [
            { s: 'el cocinero', g: 0, why: '*el* and *-o*: a man.' },
            { s: 'la médica', g: 1, why: '*la* and *-a*: a woman.' },
            { s: 'estudiante', g: 2, why: '*-ante* and *-ente* words are often the same for both: *el estudiante*, *la estudiante*.' },
            { s: 'la profesora', g: 1, why: '*-ora*: a woman.' },
            { s: 'recepcionista', g: 2, why: '*-ista* words are the same for both.' },
            { s: 'el camarero', g: 0, why: '*el* and *-o*: a man.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Where and what',
      about: 'Say where you work and what you do there, with regular -ar, -er and -ir verbs.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'To say where you work, use **trabajar en** + place: *Trabajo en una oficina. Trabajo en un hotel.* Use **un** for masculine words and **una** for feminine words.\n\nWords that end in *-o* are usually masculine, words that end in *-a* are usually feminine. Learn each word with its article.' },
          { t: 'table', caption: 'Workplaces', explain: ['head', 'col2'], quiz: true, head: ['Place', 'Who works there', 'Meaning'], rows: [
            ['una oficina', 'la secretaria, el contable', 'an office'],
            ['un hospital', 'la médica, el enfermero', 'a hospital'],
            ['un restaurante', 'el cocinero, la camarera', 'a restaurant'],
            ['una tienda', 'la dependienta', 'a shop'],
            ['un hotel', 'el recepcionista', 'a hotel'],
            ['una escuela', 'la profesora', 'a school'],
            ['una fábrica', 'el operario', 'a factory'],
          ] },
        ],
        [
          { t: 'text', md: 'Many verbs for work are regular. Take away *-ar*, *-er* or *-ir* and add the endings. *-er* and *-ir* verbs have the same endings, except for *nosotros* and *vosotros*.' },
          { t: 'table', caption: 'Regular verbs in the present', quiz: true, head: ['Person', 'trabajar', 'vender', 'escribir'], rows: [
            ['yo', 'trabajo', 'vendo', 'escribo'],
            ['tú', 'trabajas', 'vendes', 'escribes'],
            ['él, ella, usted', 'trabaja', 'vende', 'escribe'],
            ['nosotros, nosotras', 'trabajamos', 'vendemos', 'escribimos'],
            ['vosotros, vosotras', 'trabajáis', 'vendéis', 'escribís'],
            ['ellos, ellas, ustedes', 'trabajan', 'venden', 'escriben'],
          ] },
          { t: 'examples', items: [
            { s: 'En la tienda **vendemos** ropa.', n: '*vender*: to sell.' },
            { s: 'Rosa **atiende** a los clientes.', n: '*atender a los clientes*: to help customers. This verb changes *e* to *ie*.' },
            { s: 'Por la mañana **escribo** correos.', n: '*escribir*: to write. *un correo*: an email.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of trabajar.', verb: 'trabajar', tense: 'present', rows: [
            ['yo', 'trabajo'],
            ['tú', 'trabajas'],
            ['ella', 'trabaja'],
            ['nosotros', 'trabajamos'],
            ['vosotros', 'trabajáis|trabajais'],
            ['ellos', 'trabajan'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Mi compañera ___ en una escuela. (trabajar)', a: ['trabaja'], why: '*ella trabaja*: ending *-a*.' },
            { q: 'En esta tienda nosotros ___ zapatos. (vender)', a: ['vendemos'], why: '*nosotros vendemos*: ending *-emos*.' },
            { q: '¿Tú ___ muchos correos? (escribir)', a: ['escribes'], why: '*tú escribes*: ending *-es*.' },
            { q: 'Los cocineros ___ en la cocina. (trabajar)', a: ['trabajan'], why: '*ellos trabajan*: ending *-an*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Who does what? Match.', pairs: [
            ['La camarera', 'sirve las mesas.'],
            ['El cocinero', 'prepara la comida.'],
            ['La dependienta', 'vende ropa.'],
            ['El profesor', 'enseña a los estudiantes.'],
            ['La recepcionista', 'contesta el teléfono.'],
          ] },
          { t: 'ex', kind: 'odd', h: 'Which word is not a workplace?', items: [
            { o: ['la camarera', 'la oficina', 'la tienda', 'la fábrica'], why: '*la camarera* is a person; the others are places.' },
            { o: ['escribir', 'el hotel', 'el hospital', 'el restaurante'], why: '*escribir* is a verb; the others are places.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: our team',
      about: 'Read short profiles of the staff on a hotel website.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Many small companies have a page called *Nuestro equipo* (our team) on their website. Read the profiles from a hotel.' },
          { t: 'reading', title: 'Nuestro equipo', md: '**Lucía, recepcionista.** Lucía es de Sevilla y trabaja en la recepción del hotel. Habla español, inglés y alemán. Contesta el teléfono, escribe correos a los clientes y recibe a las personas que llegan.\n\n**Kwame, cocinero.** Kwame es de Ghana y vive en España desde hace seis años. Trabaja en la cocina del restaurante del hotel. Prepara los desayunos y las comidas. Su plato favorito es el arroz con pescado.\n\n**Inés y Mateo, camareros.** Inés y Mateo trabajan en el restaurante y en la cafetería. Sirven las mesas y hablan con los clientes. Mateo es estudiante y trabaja solo los fines de semana.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the profiles. True, false or not given?', items: [
            { q: 'Lucía habla tres idiomas.', a: 't', why: '*Habla español, inglés y alemán.*' },
            { q: 'Kwame es camarero.', a: 'f', why: '*Kwame, cocinero*: he is a cook.' },
            { q: 'Kwame prepara los desayunos.', a: 't', why: '*Prepara los desayunos y las comidas.*' },
            { q: 'Inés es estudiante.', a: 'ng', why: 'The text says Mateo is a student, but nothing about Inés.' },
            { q: 'Mateo trabaja de lunes a viernes.', a: 'f', why: 'He works *solo los fines de semana*: only at weekends.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '¿Quién contesta el teléfono?', o: ['Lucía', 'Kwame', 'Mateo'], why: '*Lucía … contesta el teléfono.*' },
            { q: '¿Dónde trabajan Inés y Mateo?', o: ['en el restaurante y en la cafetería', 'en la recepción', 'en la cocina'], why: '*trabajan en el restaurante y en la cafetería*.' },
            { q: '¿De dónde es Lucía?', o: ['de Sevilla', 'de Ghana', 'de Alemania'], why: '*Lucía es de Sevilla.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the four jobs in the text.', items: [
            { s: 'En el hotel trabajan una [recepcionista], un [cocinero] y dos [camareros]. Mateo también es [estudiante].', why: '*recepcionista*, *cocinero*, *camareros* and *estudiante* say what people do.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '', o: ['Mi hermano es médico.', 'Mi hermano es un médico.', 'Mi hermano es la médica.'], why: 'No article before a job after *ser*.' },
      { q: 'Clara trabaja en una escuela. Es ___.', o: ['profesora', 'cocinera', 'camarera'], why: 'A teacher works in a school.' },
      { q: 'Nosotros ___ en un hotel.', o: ['trabajamos', 'trabajan', 'trabajáis'], why: '*nosotros trabajamos*.' },
      { q: '¿A qué te ___?', o: ['dedicas', 'dedica', 'llamas'], why: 'With *tú*: *¿A qué te dedicas?*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Javier es cocinero y Sara es ___.', a: ['cocinera'], why: '*-o* changes to *-a*: *cocinera*.' },
      { q: 'Trabajo en ___ oficina en el centro.', a: ['una'], why: '*oficina* ends in *-a* and is feminine: *una oficina*.' },
      { q: 'Vosotros ___ muchos correos, ¿no? (escribir)', a: ['escribís', 'escribis'], why: '*vosotros escribís*.' },
      { q: 'En esta tienda ___ ropa. (vender, ellos)', a: ['venden'], why: '*ellos venden*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the person and the place.', pairs: [
      ['el enfermero', 'el hospital'],
      ['la dependienta', 'la tienda'],
      ['el recepcionista', 'el hotel'],
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Mi compañera Rosa es [camarero] en un restaurante.', a: ['camarera'], why: 'Rosa is a woman: *camarera*.' },
    ] },
  ],
};
