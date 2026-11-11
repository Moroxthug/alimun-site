// Spanish B2, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'What might have been',
  goal: 'Talk about the unreal past, regrets and opinions about what happened. Learn the perfecto de subjuntivo, the pluscuamperfecto de subjuntivo, the condicional perfecto, and si-clauses about the past.',
  art: 'cat',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['perfecto de subjuntivo', 'pluscuamperfecto de subjuntivo', 'condicional perfecto', 'si clauses', 'regret'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'No creo que haya llegado',
      about: 'Use the perfecto de subjuntivo after opinion and feeling verbs about what has happened.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'The **perfecto de subjuntivo** is **haber** in the present subjunctive + the **participio**: *haya hecho, hayas ido*. Use it where the subjunctive is needed and the action is **finished**: *No creo que haya llegado. Me alegro de que hayas venido. Es posible que se haya olvidado.* It is also used in time clauses about the future, for something that will be done before another: *Cuando hayas terminado, llámame.*' },
          { t: 'table', caption: 'haber in the present subjunctive', quiz: true, head: ['', 'haber'], rows: [
            ['yo', 'haya'],
            ['tú', 'hayas'],
            ['él / ella / usted', 'haya'],
            ['nosotros / nosotras', 'hayamos'],
            ['vosotros / vosotras', 'hayáis'],
            ['ellos / ellas / ustedes', 'hayan'],
          ] },
          { t: 'tip', art: 'owl', md: 'The participio is the same as in the perfecto: *hecho, dicho, visto, escrito, vuelto, puesto, abierto*. Compare: *Creo que ha llegado* (indicative) and *No creo que haya llegado* (subjunctive). With **es verdad que** and **estoy seguro de que**, use the indicative: *Es verdad que ha venido.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'No creo que **haya llegado** todavía.', n: 'A doubt about something that has happened.' },
            { s: 'Me alegro de que **hayas venido**.', n: 'A feeling about something that has happened.' },
            { s: 'Es posible que se **haya olvidado**.', n: '*Es posible que* + perfecto de subjuntivo.' },
            { s: 'Dudo que ellos **hayan entendido**.', n: '*Dudar que* + perfecto de subjuntivo.' },
            { s: 'Cuando **hayas terminado**, llámame.', n: 'Before another future event.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Indicative or subjunctive? Sort the sentences.', groups: ['indicative', 'subjunctive'], explain: ['groups'], items: [
            { s: 'Creo que ha llegado.', g: 0, why: '*Creer que* takes the indicative.' },
            { s: 'No creo que haya llegado.', g: 1, why: '*No creer que* takes the subjunctive.' },
            { s: 'Es verdad que ha venido.', g: 0, why: '*Es verdad que* takes the indicative.' },
            { s: 'Es posible que haya venido.', g: 1, why: '*Es posible que* takes the subjunctive.' },
            { s: 'Estoy seguro de que lo ha hecho.', g: 0, why: '*Estar seguro de que* takes the indicative.' },
            { s: 'Dudo que lo haya hecho.', g: 1, why: '*Dudar que* takes the subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write haber in the right form.', items: [
            { q: 'No creo que ___ llegado. (él, haber)', a: ['haya'], why: '*No creo que* + *haya llegado*.' },
            { q: 'Me alegro de que ___ venido. (tú, haber)', a: ['hayas'], why: '*Me alegro de que* + *hayas venido*.' },
            { q: 'Es posible que se ___ olvidado. (ella, haber)', a: ['haya'], why: '*Es posible que* + *haya olvidado*.' },
            { q: 'Cuando ___ terminado, llámame. (tú, haber)', a: ['hayas'], why: 'Before another future event: *hayas terminado*.' },
            { q: 'Dudo que ellos ___ entendido. (haber)', a: ['hayan'], why: '*Dudo que* + *hayan entendido*.' },
            { q: 'No creo que nosotros ___ hecho eso. (haber)', a: ['hayamos'], why: '*Nosotros*: *hayamos hecho*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'No creo que ___ llegado.', o: ['haya', 'ha', 'había'], why: '*No creo que* + subjunctive.' },
            { q: 'Me alegro de que ___ venido.', o: ['hayas', 'has', 'habías'], why: '*Me alegro de que* + subjunctive.' },
            { q: 'Cuando ___ terminado, llámame.', o: ['hayas', 'has', 'habrás'], why: 'A future event before another: *hayas terminado*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Start with the words in brackets.', items: [
            { q: 'Ha llegado.', cue: 'No creo que', a: ['No creo que haya llegado.'], why: '*No creo que* + perfecto de subjuntivo.' },
            { q: 'Has venido.', cue: 'Me alegro de que', a: ['Me alegro de que hayas venido.'], why: '*Me alegro de que* + perfecto de subjuntivo.' },
            { q: 'Se ha olvidado.', cue: 'Es posible que', a: ['Es posible que se haya olvidado.'], why: '*Es posible que* + perfecto de subjuntivo.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'No creo que [ha] llegado.', a: ['haya'], why: '*No creo que* takes the subjunctive.' },
            { s: 'Me alegro de que [has] venido.', a: ['hayas'], why: '*Me alegro de que* takes the subjunctive.' },
            { s: 'Cuando [has] terminado, llámame.', a: ['hayas'], why: 'A future time clause takes the subjunctive.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'No creo que haya llegado todavía.', why: '*No creo que* + *haya* + participio.' },
            { a: 'Me alegro de que hayas venido hoy.', why: '*Me alegro de que* + *hayas* + participio.' },
            { a: 'Es posible que se haya olvidado.', why: '*Es posible que* + *haya* + participio.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Hubiera, habría, deberías haber',
      about: 'Use the pluscuamperfecto de subjuntivo, the condicional perfecto and modal verbs for regrets.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: 'The **pluscuamperfecto de subjuntivo** is **hubiera** or **hubiese** + the **participio**: *hubiera sabido*. The **condicional perfecto** is **habría** + the **participio**: *habría venido* (I would have come). Use them to talk about **what would have happened** and about **regrets**: *Me habría gustado verte. Habría sido mejor esperar.* With **deber** and **poder**, use **haber + participio** for a reproach: *Deberías haber avisado* (You should have told me). *Podrías haber llamado* (You could have called).' },
          { t: 'table', caption: 'haber for the unreal past', quiz: true, head: ['', 'pluscuamperfecto de subjuntivo', 'condicional perfecto'], rows: [
            ['yo', 'hubiera', 'habría'],
            ['tú', 'hubieras', 'habrías'],
            ['él / ella / usted', 'hubiera', 'habría'],
            ['nosotros / nosotras', 'hubiéramos', 'habríamos'],
            ['vosotros / vosotras', 'hubierais', 'habríais'],
            ['ellos / ellas / ustedes', 'hubieran', 'habrían'],
          ] },
          { t: 'tip', art: 'owl', md: 'In speech in Spain and in Latin America, **hubiera** often replaces **habría** in the main clause: *Me hubiera gustado verte.* Both are correct. But **habría** never goes after **si**: not *Si lo habría sabido*.' },
        ],
        [
          { t: 'table', caption: 'Regrets and reproaches', explain: ['head'], head: ['Example', 'Meaning'], rows: [
            ['Me habría gustado verte.', 'I would have liked to see you'],
            ['Deberías haber avisado.', 'You should have told me'],
            ['Podrías haber llamado.', 'You could have called'],
            ['Habría sido mejor esperar.', 'It would have been better to wait'],
          ] },
          { t: 'examples', items: [
            { s: '**Me habría gustado** verte.', n: 'A regret.' },
            { s: '**Deberías haber avisado**.', n: 'A reproach.' },
            { s: '**Podrías haber llamado**.', n: 'You could have, but you did not.' },
            { s: '**Habría sido** mejor esperar.', n: 'A judgement about the past.' },
            { s: 'Nosotros **habríamos ido** con gusto.', n: 'What would have happened.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Me ___ gustado verte. (haber)', a: ['habría'], why: 'The condicional perfecto: *habría gustado*.' },
            { q: 'Deberías ___ avisado. (haber)', a: ['haber'], why: '*Deber* + *haber* + participio.' },
            { q: 'Habría ___ mejor esperar. (ser)', a: ['sido'], why: 'The participio of *ser*: *sido*.' },
            { q: 'Podrías ___ llamado. (haber)', a: ['haber'], why: '*Poder* + *haber* + participio.' },
            { q: 'Nosotros ___ ido con gusto. (haber)', a: ['habríamos'], why: '*Nosotros*: *habríamos ido*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the sentence with its meaning.', pairs: [
            ['Me habría gustado verte.', 'I would have liked to see you'],
            ['Deberías haber avisado.', 'You should have told me'],
            ['Podrías haber llamado.', 'You could have called'],
            ['Habría sido mejor esperar.', 'It would have been better to wait'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Me ___ gustado ir contigo.', o: ['habría', 'he', 'haya'], why: '*Me habría gustado*: a regret.' },
            { q: 'Deberías ___ avisado.', o: ['haber', 'has', 'habías'], why: '*Deberías haber* + participio.' },
            { q: 'Si lo ___ sabido, habría venido.', o: ['hubiera', 'habría', 'haya'], why: 'After *si*: *hubiera*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Say it as a reproach.', items: [
            { q: 'No avisaste. Fue un error.', cue: 'Deberías', a: ['Deberías haber avisado.'], why: '*Deber* + *haber* + participio.' },
            { q: 'No llamaste, y podías llamar.', cue: 'Podrías', a: ['Podrías haber llamado.'], why: '*Poder* + *haber* + participio.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Deberías [has] avisado.', a: ['haber'], why: '*Deberías haber* + participio.' },
            { s: 'Habría [estar] mejor esperar.', a: ['sido'], why: '*Habría sido*.' },
            { s: 'Me [habías] gustado verte.', a: ['habría'], why: 'The condicional perfecto: *habría gustado*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Me habría gustado verte ayer.', why: '*Me habría gustado* + infinitivo.' },
            { a: 'Deberías haber avisado antes.', why: '*Deberías haber* + participio.' },
            { a: 'Habría sido mejor esperar un poco.', why: '*Habría sido* + adjective.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Si lo hubiera sabido',
      about: 'Use si + pluscuamperfecto de subjuntivo to talk about the unreal past, mixed hypotheses and wishes.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To talk about something that **did not happen** in the past, use **si + pluscuamperfecto de subjuntivo + condicional perfecto**: *Si lo hubiera sabido, habría venido* (I did not know, so I did not come). When the **cause is in the past** and the **result is now**, use the **condicional simple**: *Si hubiera estudiado medicina, ahora sería médico.* For a **wish about the past**, use **ojalá + pluscuamperfecto de subjuntivo**: *Ojalá hubiera ido.*' },
          { t: 'table', caption: 'Unreal past', explain: ['head', 'col1'], head: ['Kind', 'Structure', 'Example'], rows: [
            ['unreal past', 'si + pluscuamperfecto de subjuntivo → condicional perfecto', 'Si lo hubiera sabido, habría venido.'],
            ['mixed: past cause, present result', 'si + pluscuamperfecto de subjuntivo → condicional simple', 'Si hubiera estudiado medicina, ahora sería médico.'],
            ['wish about the past', 'ojalá + pluscuamperfecto de subjuntivo', 'Ojalá hubiera ido.'],
            ['without si', 'de + infinitivo compuesto', 'De haberlo sabido, habría venido.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Hubiera** and **hubiese** are the same. **De haberlo sabido** (*had I known*) is a shorter way to say *si lo hubiera sabido*. After **si**, never use the condicional or the perfecto: not *Si lo habría sabido*, not *Si lo he sabido*.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Si lo **hubiera sabido**, **habría venido**.', n: 'The unreal past.' },
            { s: 'Si **hubieras estudiado**, **habrías aprobado**.', n: 'You did not study and you did not pass.' },
            { s: 'Si **hubiera estudiado** medicina, ahora **sería** médico.', n: 'Mixed: the result is now.' },
            { s: '**Ojalá hubiera ido** a la fiesta.', n: 'A wish about the past.' },
            { s: '**De haberlo sabido**, habría venido.', n: 'Without *si*.' },
          ] },
          { t: 'dialogue', title: 'Lamentos', lines: [
            { who: 'Lucía', s: 'Si hubiera sabido que venías, habría preparado la cena.' },
            { who: 'Javier', s: 'No pasa nada. Ojalá te hubiera avisado.' },
            { who: 'Lucía', s: 'Si me hubieras llamado, habría vuelto antes del trabajo.' },
            { who: 'Javier', s: 'Entonces, la próxima vez te aviso. Y cenamos fuera.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Si lo ___ sabido, habría venido. (yo, haber)', a: ['hubiera', 'hubiese'], why: 'After *si*: *hubiera*.' },
            { q: 'Si lo hubiera sabido, ___ venido. (yo, haber)', a: ['habría'], why: 'The condicional perfecto: *habría venido*.' },
            { q: 'Si ___ estudiado más, habrías aprobado. (tú, haber)', a: ['hubieras', 'hubieses'], why: 'After *si*: *hubieras*.' },
            { q: 'Si hubiera estudiado medicina, ahora ___ médico. (yo, ser)', a: ['sería'], why: 'Mixed: the result is now, so the condicional simple.' },
            { q: 'Ojalá ___ ido a la fiesta. (yo, haber)', a: ['hubiera', 'hubiese'], why: 'A wish about the past: *ojalá hubiera ido*.' },
            { q: '___ haberlo sabido, habría venido. (without si)', a: ['De'], why: '*De haberlo sabido*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Real or unreal? Sort the sentences.', groups: ['real past (indicative)', 'unreal past (subjunctive)'], explain: ['groups'], items: [
            { s: 'Si llovió, me quedé en casa.', g: 0, why: 'A real past situation.' },
            { s: 'Si hubiera llovido, me habría quedado en casa.', g: 1, why: 'It did not rain.' },
            { s: 'Si estudiaste, aprobaste.', g: 0, why: 'A real past situation.' },
            { s: 'Si hubieras estudiado, habrías aprobado.', g: 1, why: 'You did not study.' },
            { s: 'Si fuiste, lo viste.', g: 0, why: 'A real past situation.' },
            { s: 'Si hubieras ido, lo habrías visto.', g: 1, why: 'You did not go.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Si lo ___ sabido, habría venido.', o: ['hubiera', 'habría', 'haya'], why: 'After *si*: *hubiera*.' },
            { q: 'Si hubiera estudiado, ___ aprobado.', o: ['habría', 'había', 'habrá'], why: 'The condicional perfecto: *habría*.' },
            { q: 'Ojalá ___ ido a la fiesta, pero no fui.', o: ['hubiera', 'haya', 'habría'], why: 'A wish about the past: *ojalá hubiera*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Join the two sentences with the word in brackets.', items: [
            { q: 'No salí temprano; por eso perdí el tren.', cue: 'Si', a: ['Si hubiera salido temprano, no habría perdido el tren.'], why: '*Si* + pluscuamperfecto de subjuntivo → condicional perfecto.' },
            { q: 'No estudié medicina; ahora no soy médico.', cue: 'Si', a: ['Si hubiera estudiado medicina, ahora sería médico.'], why: 'Mixed: the result is now, so the condicional simple.' },
            { q: 'No fui a la fiesta.', cue: 'Ojalá', a: ['Ojalá hubiera ido a la fiesta.'], why: '*Ojalá* + pluscuamperfecto de subjuntivo.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Si lo [habría] sabido, habría venido.', a: ['hubiera', 'hubiese'], why: 'Never use *habría* after *si*.' },
            { s: 'Si hubieras estudiado, [aprobarías] el examen.', a: ['habrías aprobado'], why: 'The unreal past: *habrías aprobado*.' },
            { s: 'Ojalá [haya] ido a la fiesta. Pero no fui.', a: ['hubiera', 'hubiese'], why: 'A wish about the past that did not happen: *hubiera*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Si lo hubiera sabido, habría venido.', why: '*Si* + hubiera, then *habría*.' },
            { a: 'Si hubieras estudiado, habrías aprobado.', why: '*Si* + hubieras, then *habrías*.' },
            { a: 'Ojalá hubiera ido a la fiesta.', why: '*Ojalá* + hubiera + participio.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Una carta de Edimburgo',
      about: 'Read a letter that looks back on a decision.',
      art: 'cat',
      spreads: [
        [
          { t: 'reading', title: 'Querida Inés', md: 'Querida Inés:\n\nAyer encontré tu postal de Edimburgo y me puse a pensar. Hace diez años me ofrecieron un trabajo allí y lo rechacé. Si hubiera aceptado, ahora viviría contigo en esa ciudad y quizá habría aprendido inglés de verdad. Ojalá me hubiera atrevido.\n\nDudo que mi vida hubiera sido más fácil, pero me alegro de que tú hayas sido valiente. No creo que me haya equivocado del todo: aquí tengo a mi familia. Aun así, si me dieran otra oportunidad, diría que sí.\n\nUn abrazo,\n\nMarta' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Marta rechazó un trabajo en Edimburgo.', a: 't', why: '*Me ofrecieron un trabajo allí y lo rechacé.*' },
            { q: 'Marta aceptó el trabajo.', a: 'f', why: '*Lo rechacé.*' },
            { q: 'Marta cree que su vida habría sido más fácil allí.', a: 'f', why: '*Dudo que mi vida hubiera sido más fácil.*' },
            { q: 'Inés vive en Edimburgo.', a: 't', why: '*Ahora viviría contigo en esa ciudad.*' },
            { q: 'Marta tiene hijos.', a: 'ng', why: 'She only says *mi familia*.' },
            { q: 'Marta diría que sí si le dieran otra oportunidad.', a: 't', why: '*Si me dieran otra oportunidad, diría que sí.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: '¿Qué encontró Marta ayer?', o: ['Una postal de Inés.', 'Una carta del trabajo.', 'Una foto antigua.'], why: '*Ayer encontré tu postal de Edimburgo.*' },
            { q: '¿Qué habría aprendido Marta?', o: ['Inglés.', 'Francés.', 'Alemán.'], why: '*Habría aprendido inglés de verdad.*' },
            { q: '¿Por qué no cree que se haya equivocado del todo?', o: ['Porque tiene a su familia aquí.', 'Porque ganó mucho dinero.', 'Porque Inés se lo dijo.'], why: '*Aquí tengo a mi familia.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the forms of haber in the pluscuamperfecto de subjuntivo.', items: [
            { s: 'Si [hubiera] aceptado, ahora viviría contigo. Ojalá me [hubiera] atrevido.', why: '*Hubiera* + participio: the unreal past.' },
            { s: 'Dudo que mi vida [hubiera] sido más fácil.', why: '*Hubiera sido*: a doubt about the past.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Si ___ aceptado, ahora viviría contigo. (yo, haber)', a: ['hubiera', 'hubiese'], why: 'After *si*: *hubiera*.' },
            { q: 'Me alegro de que tú ___ sido valiente. (haber)', a: ['hayas'], why: '*Me alegro de que* + *hayas sido*.' },
            { q: 'Ojalá me ___ atrevido. (haber)', a: ['hubiera', 'hubiese'], why: 'A wish about the past: *ojalá hubiera*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Ojalá me hubiera atrevido a aceptar el trabajo.', why: '*Ojalá* + hubiera + participio.' },
            { a: 'No creo que me haya equivocado del todo.', why: '*No creo que* + haya + participio.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'No creo que ___ llegado.', o: ['haya', 'ha', 'había'], why: '*No creo que* + subjunctive.' },
      { q: 'Si lo ___ sabido, habría venido.', o: ['hubiera', 'habría', 'haya'], why: 'After *si*: *hubiera*.' },
      { q: 'Si hubiera estudiado, ___ aprobado.', o: ['habría', 'había', 'habrá'], why: 'The condicional perfecto: *habría*.' },
      { q: 'Ojalá ___ ido a la fiesta, pero no fui.', o: ['hubiera', 'haya', 'habría'], why: 'A wish about the past: *ojalá hubiera*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Me alegro de que ___ venido. (tú, haber)', a: ['hayas'], why: '*Me alegro de que* + subjunctive.' },
      { q: 'Deberías ___ avisado. (haber)', a: ['haber'], why: '*Deberías haber* + participio.' },
      { q: 'Nosotros ___ ido con gusto. (haber)', a: ['habríamos'], why: '*Nosotros*: *habríamos ido*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the sentence with its meaning.', pairs: [
      ['No creo que haya llegado.', 'I doubt he has arrived.'],
      ['Si lo hubiera sabido, habría venido.', 'I did not know, so I did not come.'],
      ['Ojalá hubiera ido.', 'I wish I had gone.'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the word in brackets.', items: [
      { q: 'No estudié medicina; ahora no soy médico.', cue: 'Si', a: ['Si hubiera estudiado medicina, ahora sería médico.'], why: 'Mixed: the result is now, so the condicional simple.' },
      { q: 'No fui a la fiesta.', cue: 'Ojalá', a: ['Ojalá hubiera ido a la fiesta.'], why: '*Ojalá* + pluscuamperfecto de subjuntivo.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'No creo que [ha] llegado.', a: ['haya'], why: '*No creo que* takes the subjunctive.' },
      { s: 'Si lo [habría] sabido, habría venido.', a: ['hubiera', 'hubiese'], why: 'Never use *habría* after *si*.' },
    ] },
  ],
};
