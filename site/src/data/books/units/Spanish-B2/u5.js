// Spanish B2, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Relative clauses and long sentences',
  goal: 'Join ideas in longer sentences with advanced relative pronouns and the subjunctive in relative clauses. Learn el cual, cuyo, quien, lo que and lo cual, relative clauses with the subjunctive, commas, and the participle in place of a relative clause.',
  art: 'cactus',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['relative clauses', 'cuyo', 'subjunctive', 'writing', 'city'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'El cual, cuyo, quien, lo que',
      about: 'Use the relative pronouns of written and careful Spanish.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'After a preposition, or when **que** could be unclear, use **el cual, la cual, los cuales, las cuales**: *El libro sobre el cual hablamos es nuevo. La calle en la cual vivo es tranquila.* For people after a preposition, **quien** (plural **quienes**) is the usual choice: *La amiga con quien viajo es italiana.* To say **whose**, use **cuyo, cuya, cuyos, cuyas**, and make it agree with the **thing owned**, not the owner: *El autor cuyo libro leí es joven. La casa cuyas ventanas son grandes es nueva.* **Lo que** means *what* or *the thing that*: *Todo lo que dijiste es verdad.* **Lo cual** refers to a whole idea: *Llegó tarde, lo cual me molestó.*' },
          { t: 'table', caption: 'Advanced relative pronouns', explain: ['head', 'col1'], head: ['Pronoun', 'Use', 'Example'], rows: [
            ['el cual, la cual, los cuales, las cuales', 'after a preposition; agrees with the noun', 'La casa en la cual vivo es vieja.'],
            ['cuyo, cuya, cuyos, cuyas', 'whose; agrees with the thing owned', 'El autor cuyo libro leí es joven.'],
            ['quien, quienes', 'a person, after a preposition', 'La amiga con quien viajo es italiana.'],
            ['lo que', 'what, the thing that', 'Todo lo que dijiste es verdad.'],
            ['lo cual', 'a whole idea', 'Llegó tarde, lo cual me molestó.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In everyday speech many people say **el que**: *el libro del que hablamos, la calle en la que vivo*. Never put an article after **cuyo**: not *el autor cuyo el libro*. **Cuyo** is rare in speech and is mostly written. In Latin America it is also less usual in speech than in writing.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'El libro **sobre el cual** hablamos es nuevo.', n: '*El cual* after a preposition.' },
            { s: 'La amiga **con quien** viajo es italiana.', n: '*Quien* for a person.' },
            { s: 'El autor **cuyo libro** leí es joven.', n: '*Cuyo* agrees with *libro*.' },
            { s: 'La casa **cuyas ventanas** son grandes es nueva.', n: '*Cuyas* agrees with *ventanas*.' },
            { s: 'Todo **lo que** dijiste es verdad.', n: 'The thing that.' },
            { s: 'Llegó tarde, **lo cual** me molestó.', n: 'A whole idea.' },
          ] },
          { t: 'dialogue', title: 'Un libro nuevo', lines: [
            { who: 'Sara', s: '¿Has leído el libro sobre el cual te hablé?' },
            { who: 'Paulo', s: 'Todavía no. ¿Es del autor cuya primera novela ganó un premio?' },
            { who: 'Sara', s: 'Ese mismo. Cuenta la historia de una familia con quien él vivió.' },
            { who: 'Paulo', s: 'Entonces lo compro. Todo lo que escribe merece la pena.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing relative pronoun.', items: [
            { q: 'El libro sobre ___ hablamos es nuevo. (el cual)', a: ['el cual'], why: '*El cual* after *sobre*.' },
            { q: 'La calle en ___ vivo es tranquila. (la cual)', a: ['la cual'], why: '*La cual* after *en*.' },
            { q: 'El autor ___ libro leí es joven.', a: ['cuyo'], why: '*Cuyo* agrees with *libro*.' },
            { q: 'La amiga con ___ viajo es italiana.', a: ['quien'], why: '*Quien* for a person after a preposition.' },
            { q: 'Todo ___ dijiste es verdad.', a: ['lo que'], why: '*Todo lo que* = everything that.' },
            { q: 'Llegó tarde, ___ me molestó.', a: ['lo cual'], why: '*Lo cual* refers to the whole idea.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'La casa ___ ventanas son grandes es nueva.', o: ['cuyas', 'cuyos', 'cuya'], why: '*Cuyas* agrees with *ventanas*.' },
            { q: 'El médico ___ hija conocí es mi vecino.', o: ['cuya', 'cuyo', 'quien'], why: '*Cuya* agrees with *hija*.' },
            { q: 'Los amigos con ___ viajo son italianos.', o: ['quienes', 'cuyos', 'lo que'], why: 'People after a preposition: *quienes*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Join the two sentences with the pronoun in brackets.', items: [
            { q: 'El autor es joven. Leí su libro.', cue: 'cuyo', a: ['El autor cuyo libro leí es joven.'], why: '*Cuyo* agrees with *libro*.' },
            { q: 'La casa es nueva. Sus ventanas son grandes.', cue: 'cuyas', a: ['La casa cuyas ventanas son grandes es nueva.'], why: '*Cuyas* agrees with *ventanas*.' },
            { q: 'La amiga es italiana. Viajo con ella.', cue: 'quien', a: ['La amiga con quien viajo es italiana.'], why: '*Con quien* for a person.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'El autor cuyos [libro] leí es joven.', a: ['libros'], why: '*Cuyos* agrees with the plural *libros*.' },
            { s: 'El autor [cuyo el] libro leí es joven.', a: ['cuyo'], why: 'No article after *cuyo*.' },
            { s: 'Todo [que] dijiste es verdad.', a: ['lo que'], why: '*Todo lo que*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'El libro sobre el cual hablamos es nuevo.', why: '*El cual* after *sobre*.' },
            { a: 'La casa cuyas ventanas son grandes es nueva.', why: '*Cuyas* + noun.' },
            { a: 'Todo lo que dijiste es verdad.', why: '*Todo lo que*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Relative clauses with the subjunctive',
      about: 'Choose between the indicative and the subjunctive in a relative clause.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'When the person or thing **exists and is known**, the relative clause takes the **indicative**: *Conozco a un médico que habla francés.* When it is **not known**, **may not exist** or is only **wished for**, it takes the **subjunctive**: *Busco un médico que hable francés. No hay nadie que sepa la respuesta. Necesito un amigo que viva en Madrid.* After **el único, el primero, el último** and the **superlative**, the subjunctive shows a personal view: *Es la mejor película que haya visto.*' },
          { t: 'table', caption: 'Known or not known', explain: ['head'], head: ['Known (indicative)', 'Not known (subjunctive)'], rows: [
            ['Conozco a un médico que habla francés.', 'Busco un médico que hable francés.'],
            ['Hay una tienda que abre los domingos.', 'No hay ninguna tienda que abra los domingos.'],
            ['Tengo un amigo que vive en Madrid.', 'Necesito un amigo que viva en Madrid.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use **a** before a person you know: *Conozco a un médico.* Do not use it before a person who is not known: *Busco un médico.* But with **alguien** and **nadie** it is always there: *Busco a alguien que sepa. No conozco a nadie que sepa.* After a superlative both forms are heard: *la mejor película que he visto* is a plain fact, *la mejor película que haya visto* sounds more personal.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Conozco a un médico **que habla** francés.', n: 'He exists: indicative.' },
            { s: 'Busco un médico **que hable** francés.', n: 'Not known yet: subjunctive.' },
            { s: 'No hay nadie **que sepa** la respuesta.', n: 'Nobody: subjunctive.' },
            { s: 'Es el único alumno **que haya llegado** tarde.', n: 'After *el único*.' },
            { s: 'No vi nada **que me interesara**.', n: 'After *nada*.' },
          ] },
          { t: 'dialogue', title: 'Buscando casa', lines: [
            { who: 'Ana', s: 'Busco un piso que tenga terraza.' },
            { who: 'Pedro', s: 'Conozco uno que tiene dos, pero es caro.' },
            { who: 'Ana', s: 'Quiero algo que sea barato y que esté cerca del metro.' },
            { who: 'Pedro', s: 'No hay nada que reúna todo eso en el centro.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Busco un médico que ___ francés. (hablar)', a: ['hable'], why: 'Not known: subjunctive.' },
            { q: 'No hay nadie que ___ la respuesta. (saber)', a: ['sepa'], why: 'Nobody: subjunctive.' },
            { q: 'Conozco a un médico que ___ francés. (hablar)', a: ['habla'], why: 'He exists: indicative.' },
            { q: 'Necesitamos un profesor que ___ paciente. (ser)', a: ['sea'], why: 'Not known: subjunctive.' },
            { q: 'Tengo un amigo que ___ en Madrid. (vivir)', a: ['vive'], why: 'He exists: indicative.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Known or not known? Sort the sentences.', groups: ['known (indicative)', 'not known (subjunctive)'], explain: ['groups'], items: [
            { s: 'Conozco a un médico que habla francés.', g: 0, why: 'He exists: indicative.' },
            { s: 'Busco un médico que hable francés.', g: 1, why: 'Not known yet: subjunctive.' },
            { s: 'Hay una tienda que abre los domingos.', g: 0, why: 'It exists: indicative.' },
            { s: 'No hay ninguna tienda que abra los domingos.', g: 1, why: 'None: subjunctive.' },
            { s: 'Tengo un amigo que vive aquí.', g: 0, why: 'He exists: indicative.' },
            { s: 'Necesito un amigo que viva aquí.', g: 1, why: 'Only wished for: subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Join the two sentences into one.', items: [
            { q: 'Quiero una habitación. Tiene que tener vistas al mar.', cue: 'Quiero una habitación', a: ['Quiero una habitación que tenga vistas al mar.'], why: 'Wished for: subjunctive.' },
            { q: 'No conozco a nadie. Sabe la respuesta.', cue: 'No conozco a nadie', a: ['No conozco a nadie que sepa la respuesta.'], why: 'Nobody: subjunctive.' },
            { q: 'Hay muchas tiendas. Abren los domingos.', cue: 'Hay muchas tiendas', a: ['Hay muchas tiendas que abren los domingos.'], why: 'They exist: indicative.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Busco un médico que [habla] francés.', a: ['hable'], why: 'Not known: subjunctive.' },
            { s: 'No hay nadie que [sabe] la respuesta.', a: ['sepa'], why: 'Nobody: subjunctive.' },
            { s: 'Conozco a un médico que [hable] francés.', a: ['habla'], why: 'He exists: indicative.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Necesito una casa que ___ jardín.', o: ['tenga', 'tiene', 'tuvo'], why: 'Not known: subjunctive.' },
            { q: 'Vivo en una casa que ___ jardín.', o: ['tiene', 'tenga', 'tuviera'], why: 'It exists: indicative.' },
            { q: 'No vi nada que me ___.', o: ['interesara', 'interesó', 'interesaba'], why: 'After *nada*: subjunctive.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Busco un médico que hable francés.', why: 'Not known: subjunctive.' },
            { a: 'No hay nadie que sepa la respuesta.', why: 'Nobody: subjunctive.' },
            { a: 'Conozco a un médico que habla francés.', why: 'He exists: indicative.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Commas and the participle',
      about: 'Tell restrictive and explanatory clauses apart, and shorten a clause with the participle.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A **restrictive** clause has **no commas** and says **which one**: *Los alumnos que estudiaron aprobaron* (only those who studied). An **explanatory** clause has **commas** and only adds information: *Los alumnos, que estudiaron, aprobaron* (all of them studied, and all passed). In writing you can shorten a relative clause with the **past participle**, which agrees with the noun: *El libro escrito por ella* means *el libro que fue escrito por ella*. *Las casas construidas en 1900* means *las casas que fueron construidas en 1900*.' },
          { t: 'table', caption: 'Commas change the meaning', explain: ['head'], head: ['Restrictive', 'Explanatory'], rows: [
            ['Los alumnos que estudiaron aprobaron.', 'Los alumnos, que estudiaron, aprobaron.'],
            ['El vecino que vive al lado es médico.', 'Mi vecino, que vive al lado, es médico.'],
            ['La ciudad donde nací es pequeña.', 'Madrid, donde nací, es grande.'],
          ] },
          { t: 'tip', art: 'owl', md: 'With a name or a one-of-a-kind noun, use commas: *Madrid, donde nací, es grande.* The participle must agree: *el libro escrito, la carta escrita, los libros escritos, las cartas escritas.* It is common in newspapers and reports.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Los alumnos **que estudiaron** aprobaron.', n: 'Only those who studied.' },
            { s: 'Los alumnos, **que estudiaron**, aprobaron.', n: 'All of them studied.' },
            { s: 'El libro **escrito por ella** es famoso.', n: 'Reduced clause with the participle.' },
            { s: 'Las casas **construidas en 1900** son preciosas.', n: 'The participle agrees with *casas*.' },
            { s: 'Madrid, **donde nací**, es grande.', n: 'Commas for extra information.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Who passed?', items: [
            { q: 'Los alumnos que estudiaron aprobaron. ¿Quién aprobó?', o: ['Only those who studied.', 'All the students.', 'Nobody.'], why: 'No commas: it says which students.' },
            { q: 'Los alumnos, que estudiaron, aprobaron. ¿Quién aprobó?', o: ['All the students, and all had studied.', 'Only some of them.', 'Nobody.'], why: 'Commas: extra information about all of them.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the participle.', items: [
            { q: 'El libro ___ por ella es famoso. (escribir)', a: ['escrito'], why: 'Masculine singular: *escrito*.' },
            { q: 'Las casas ___ en 1900 son preciosas. (construir)', a: ['construidas'], why: 'Feminine plural: *construidas*.' },
            { q: 'Los documentos ___ ayer están aquí. (firmar)', a: ['firmados'], why: 'Masculine plural: *firmados*.' },
            { q: 'La carta ___ por la directora llegó hoy. (enviar)', a: ['enviada'], why: 'Feminine singular: *enviada*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'With commas or without? Sort the sentences.', groups: ['restrictive (no commas)', 'explanatory (commas)'], explain: ['groups'], items: [
            { s: 'Los alumnos que estudiaron aprobaron.', g: 0, why: 'It says which students.' },
            { s: 'Los alumnos, que estudiaron, aprobaron.', g: 1, why: 'Extra information.' },
            { s: 'El vecino que vive al lado es médico.', g: 0, why: 'It says which neighbour.' },
            { s: 'Mi vecino, que vive al lado, es médico.', g: 1, why: 'Extra information.' },
            { s: 'La ciudad donde nací es pequeña.', g: 0, why: 'It says which city.' },
            { s: 'Madrid, donde nací, es grande.', g: 1, why: 'A name: extra information.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Shorten the sentence with the participle.', items: [
            { q: 'El libro que fue escrito por ella es famoso.', cue: 'El libro', a: ['El libro escrito por ella es famoso.'], why: 'Participle in place of the clause.' },
            { q: 'Las casas que fueron construidas en 1900 son preciosas.', cue: 'Las casas', a: ['Las casas construidas en 1900 son preciosas.'], why: 'The participle agrees with *casas*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'El libro [escribió] por ella es famoso.', a: ['escrito'], why: 'Participle: *escrito*.' },
            { s: 'Las casas [construido] en 1900 son preciosas.', a: ['construidas'], why: 'It agrees with *casas*.' },
            { s: 'Los documentos [firmada] ayer están aquí.', a: ['firmados'], why: 'It agrees with *documentos*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'El libro escrito por ella es famoso.', why: 'Participle after the noun.' },
            { a: 'Madrid, donde nací, es grande.', why: 'Commas around the extra information.' },
            { a: 'Las casas construidas en 1900 son preciosas.', why: 'Participle after the noun.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'La ciudad que cambió',
      about: 'Read an article on a city quarter that changed.',
      art: 'dragon',
      spreads: [
        [
          { t: 'reading', title: 'El barrio junto al río', md: 'Cuando llegué a esta ciudad, hace veinte años, el barrio junto al río, cuyas fábricas estaban cerradas, era un lugar que nadie quería visitar. Las calles, por las que solo pasaban camiones, no tenían árboles ni bancos.\n\nHoy, las antiguas fábricas, convertidas en escuelas y talleres, atraen a gente que viene de todo el país. La plaza donde antes se guardaban máquinas es ahora el sitio en el que las familias se reúnen los domingos. Fue el ayuntamiento, a quien los vecinos habían pedido ayuda, el que empezó las obras.\n\nBusco todavía algo que no he encontrado: un café que abra de madrugada, para quien trabaja temprano. Pero todo lo que he visto hasta ahora demuestra que mereció la pena.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Hace veinte años, el barrio tenía las fábricas cerradas.', a: 't', why: '*Cuyas fábricas estaban cerradas.*' },
            { q: 'Hoy las fábricas siguen cerradas.', a: 'f', why: 'They are now schools and workshops.' },
            { q: 'Los vecinos habían pedido ayuda al ayuntamiento.', a: 't', why: '*A quien los vecinos habían pedido ayuda.*' },
            { q: 'El autor vive ahora en otro país.', a: 'ng', why: 'The text does not say so.' },
            { q: 'Ya existe un café abierto de madrugada.', a: 'f', why: 'The author is still looking for one.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: '¿Quién empezó las obras?', o: ['El ayuntamiento.', 'Los vecinos.', 'Las escuelas.'], why: '*Fue el ayuntamiento … el que empezó las obras.*' },
            { q: '¿Qué son ahora las antiguas fábricas?', o: ['Escuelas y talleres.', 'Casas.', 'Cafés.'], why: '*Convertidas en escuelas y talleres.*' },
            { q: '¿Qué busca todavía el autor?', o: ['Un café que abra de madrugada.', 'Una escuela nueva.', 'Una casa junto al río.'], why: '*Un café que abra de madrugada.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the subjunctive.', items: [
            { s: 'Busco todavía un café que [abra] de madrugada, para quien trabaja temprano.', why: '*Abra*: the café is not known to exist.' },
            { s: 'Busco una casa que [tenga] jardín y [sea] barata.', why: '*Tenga* and *sea*: the house is only wished for.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'La plaza ___ antes se guardaban máquinas es ahora el sitio de reunión.', a: ['donde'], why: '*Donde* for a place.' },
            { q: 'Busco un café que ___ de madrugada. (abrir)', a: ['abra'], why: 'Not known: subjunctive.' },
            { q: 'Las fábricas, ___ en escuelas, atraen a gente. (convertir)', a: ['convertidas'], why: 'The participle agrees with *fábricas*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'La plaza donde antes se guardaban máquinas es ahora un sitio de encuentro.', why: '*Donde* for a place.' },
            { a: 'Todo lo que he visto demuestra que mereció la pena.', why: '*Todo lo que*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'El libro sobre ___ hablamos es nuevo.', o: ['el cual', 'cuyo', 'quien'], why: '*El cual* after *sobre*.' },
      { q: 'La amiga con ___ viajo es italiana.', o: ['quien', 'cuyo', 'donde'], why: 'A person after a preposition: *quien*.' },
      { q: 'El autor ___ libro leí es joven.', o: ['cuyo', 'el cual', 'quien'], why: '*Cuyo* agrees with *libro*.' },
      { q: 'No hay nadie que ___ la respuesta.', o: ['sepa', 'sabe', 'supo'], why: 'Nobody: subjunctive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Todo ___ dijiste es verdad.', a: ['lo que'], why: '*Todo lo que*.' },
      { q: 'El libro ___ por ella es famoso. (escribir)', a: ['escrito'], why: 'Participle: *escrito*.' },
      { q: 'Conozco a un médico que ___ francés. (hablar)', a: ['habla'], why: 'He exists: indicative.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the pronoun with its meaning.', pairs: [
      ['cuyo', 'whose'],
      ['quien', 'who, after a preposition'],
      ['lo que', 'what, the thing that'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Join the two sentences into one.', items: [
      { q: 'El autor es joven. Leí su libro.', cue: 'cuyo', a: ['El autor cuyo libro leí es joven.'], why: '*Cuyo* agrees with *libro*.' },
      { q: 'Quiero una habitación. Tiene que tener vistas al mar.', cue: 'Quiero una habitación', a: ['Quiero una habitación que tenga vistas al mar.'], why: 'Wished for: subjunctive.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Busco un médico que [habla] francés.', a: ['hable'], why: 'Not known: subjunctive.' },
      { s: 'El libro [escribió] por ella es famoso.', a: ['escrito'], why: 'Participle: *escrito*.' },
    ] },
  ],
};
