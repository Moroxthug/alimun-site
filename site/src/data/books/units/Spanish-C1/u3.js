// Spanish C1, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Words that build words',
  goal: 'Understand and create words with prefixes, suffixes and altered forms. Learn diminutives and augmentatives, the main prefixes and suffixes, parasynthetic verbs and compounds, and how to guess a word from its parts.',
  art: 'churro',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['word formation', 'prefixes', 'suffixes', 'diminutives', 'compounds'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Casita, casón, casucha',
      about: 'Understand diminutives, augmentatives and pejoratives.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'Spanish changes the size and the **attitude** of a noun with a suffix. The **diminutive** is **-ito / -ita**, **-cito** or **-illo**: **casa** → **casita**, **café** → **cafecito**, **rato** → **ratito**. It can mean *small*, *dear* or *polite*: **un momentito**. The **augmentative** is **-ón**, **-ote** or **-azo**: **casa** → **casón** (a big house), **grande** → **grandote**, **tiempo** → **tiempazo** (a long time, or a great time). The **pejorative** suffixes are **-ucho**, **-acho**, **-aco** and **-ón** in some words: **casa** → **casucha** (a hovel), **rico** → **ricachón** (a vulgarly rich man), **libro** → **libraco** (a poor book). Some words have **changed meaning**: **ventana** → **ventanilla** (a ticket window), **bolsa** → **bolsillo** (a pocket), **caja** → **cajón** (a drawer), **cuerda** → **cordón** (a shoelace).' },
          { t: 'table', caption: 'Altered nouns', explain: ['head', 'col1'], head: ['Word', 'Altered form', 'Meaning'], rows: [
            ['casa', 'casita / casón', 'small house / big house'],
            ['café', 'cafecito', 'a little coffee, a polite request'],
            ['tiempo', 'tiempazo', 'a long time'],
            ['rico', 'ricachón', 'a vulgarly rich man'],
            ['libro', 'libraco', 'a poor book'],
            ['casa', 'casucha', 'a hovel'],
            ['ventana / bolsa / caja', 'ventanilla / bolsillo / cajón', 'ticket window / pocket / drawer (new meaning)'],
          ] },
          { t: 'tip', art: 'owl', md: 'The **gender** can change: **la caja** becomes **el cajón**, **la bolsa** becomes **el bolsillo**, **la sala** becomes **el salón**. A noun ending in **-e, -n** or **-r** often takes **-cito**: **café → cafecito**, **mujer → mujercita**, **pan → panecito**. The diminutive is very common in **Latin America** and in **Spain** for politeness (**un momentito**, **un ratito**); in **Mexico** and **Colombia** it is used even more freely: **ahorita**, **cerquita**. Pejorative suffixes can offend: use them only with friends.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Viven en una **casita** junto al río.', n: 'A small house.' },
            { s: 'Viven en un **casón** antiguo.', n: 'A big house.' },
            { s: 'Esperé un **tiempazo** en la estación.', n: 'A long time.' },
            { s: 'Es un **ricachón** que no ayuda a nadie.', n: 'A vulgarly rich man.' },
            { s: 'Guardó el billete en el **bolsillo**.', n: 'A pocket: not a small bag.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
            ['casón', 'a big house'],
            ['cafecito', 'a little coffee'],
            ['bolsillo', 'a pocket'],
            ['cajón', 'a drawer'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the altered form.', items: [
            { q: 'Viven en una ___ junto al río. (casa, small)', a: ['casita'], why: 'The diminutive of *casa*.' },
            { q: 'Esperé un ___ en la estación. (tiempo, a long time)', a: ['tiempazo'], why: 'The augmentative of *tiempo*.' },
            { q: '¿Quieres un ___ después de comer? (café, small)', a: ['cafecito'], why: '*Café* takes *-cito*.' },
            { q: 'Guardó el billete en el ___. (bolsa, pocket)', a: ['bolsillo'], why: '*Bolsillo* means pocket.' },
            { q: 'Los calcetines están en el ___. (caja, drawer)', a: ['cajón'], why: '*Cajón* means drawer.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Small, big or pejorative? Sort the words.', groups: ['small', 'big', 'pejorative'], explain: ['groups'], items: [
            { s: 'casita', g: 0, why: 'The diminutive.' },
            { s: 'cafecito', g: 0, why: 'The diminutive.' },
            { s: 'casón', g: 1, why: 'The augmentative.' },
            { s: 'grandote', g: 1, why: 'The augmentative.' },
            { s: 'casucha', g: 2, why: 'The pejorative.' },
            { s: 'libraco', g: 2, why: 'The pejorative.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with an altered form.', items: [
            { q: 'Viven en una casa pequeña.', cue: 'Viven en una', a: ['Viven en una casita.'], why: '*-ita* for small.' },
            { q: 'Esperé mucho tiempo.', cue: 'Esperé un', a: ['Esperé un tiempazo.'], why: '*-azo* for big.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Viven en una [casita] enorme. (a big house)', a: ['casón'], why: 'Big: the augmentative.' },
            { s: 'Es un [ricito] que no ayuda a nadie. (a vulgarly rich man)', a: ['ricachón'], why: 'The pejorative suffix *-achón*.' },
            { s: 'Los calcetines están en la [caja] de la cómoda. (drawer)', a: ['cajón'], why: 'The drawer of a chest is *el cajón*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Viven en una casita junto al río.', why: 'The diminutive.' },
            { a: 'Esperé un tiempazo en la estación.', why: 'The augmentative.' },
            { a: 'Guardó el billete en el bolsillo.', why: '*Bolsillo* means pocket.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Prefijos y sufijos',
      about: 'Build words with prefixes and suffixes and write them correctly.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'Prefixes and suffixes build families of words. The prefix **des-** reverses: **hacer** → **deshacer**. **In-** (**im-** before p and b, **ir-** before r, **il-** before l) denies: **posible** → **imposible**, **real** → **irreal**, **legal** → **ilegal**. **Re-** repeats: **hacer** → **rehacer**. **Pre-** means *before*: **prehistoria**. **Contra-** means *against*: **contradecir**. **Sobre-** means *over*: **sobrevolar**. The suffixes **-ción** and **-miento** make nouns from verbs: **informar** → **información**, **crecer** → **crecimiento**. **-dad** makes nouns from adjectives: **feliz** → **felicidad**. **-ble** means *can be*: **confortable**. **-oso** means *full of*: **generoso**.' },
          { t: 'table', caption: 'Prefixes and suffixes', explain: ['head', 'col1'], head: ['Element', 'Meaning', 'Example'], rows: [
            ['des-', 'the opposite', 'deshacer, desigual'],
            ['in- / im- / ir-', 'not', 'imposible, irreal, ilegal'],
            ['re-', 'again', 'rehacer, reescribir'],
            ['pre- / post-', 'before / after', 'prehistoria, posguerra'],
            ['-ción / -miento', 'a noun from a verb', 'información, crecimiento'],
            ['-dad', 'a noun from an adjective', 'felicidad'],
            ['-ble', 'can be', 'confortable, posible'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Spanish, prefixes are written **attached** to the word, **without a hyphen**: **reescribir**, **antiinflamatorio**, **contraataque**, **preescolar**, **exministro**. Do not **drop** a letter: when the prefix ends in the same vowel the word begins with, **keep both**: **antiinflamatorio**, **reelegir**, **contraataque**. Use **im-** before **b** and **p**: **imposible**, **imborrable**. The same rules apply in **Spain** and **Latin America**; the RAE spells **posguerra** and **pos-** as well as **postguerra**.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Tengo que **reescribir** el informe.', n: 'Write again.' },
            { s: 'Es **imposible** llegar a tiempo.', n: '*Im-* before p.' },
            { s: 'El **crecimiento** de la ciudad es rápido.', n: 'A noun from *crecer*.' },
            { s: 'Tomó un **antiinflamatorio**.', n: 'Both *i* are kept.' },
            { s: 'Estudiamos la **prehistoria**.', n: 'Before history.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the prefix with its meaning.', pairs: [
            ['des-', 'the opposite'],
            ['in-', 'not'],
            ['re-', 'again'],
            ['pre-', 'before'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Tengo que ___ el informe. (escribir de nuevo)', a: ['reescribir'], why: '*Re-* means again.' },
            { q: 'Es ___ llegar a tiempo. (posible, not)', a: ['imposible'], why: '*Im-* before p.' },
            { q: 'El ___ de la ciudad es rápido. (crecer, noun)', a: ['crecimiento'], why: '*-miento* makes a noun.' },
            { q: 'La ___ de los niños era enorme. (feliz, noun)', a: ['felicidad'], why: '*-dad* makes a noun.' },
            { q: 'Tomó un ___ para el dolor. (anti + inflamatorio)', a: ['antiinflamatorio'], why: 'Both *i* are kept.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the correct spelling.', items: [
            { q: 'Estudiamos la ___ en el colegio.', o: ['prehistoria', 'pre-historia', 'pre historia'], why: 'No hyphen after *pre-*.' },
            { q: 'Este plan es ___.', o: ['irrealizable', 'inrealizable', 'irealizable'], why: '*In-* before r becomes *ir-*, and the *r* doubles.' },
            { q: 'El equipo preparó un ___.', o: ['contraataque', 'contrataque', 'contra-ataque'], why: 'Both *a* are kept, no hyphen.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Build a new word.', items: [
            { q: 'Escribir de nuevo el informe.', cue: 'Reescribir', a: ['Reescribir el informe.'], why: '*Re-* + escribir.' },
            { q: 'No es posible.', cue: 'Es', a: ['Es imposible.'], why: '*Im-* + posible.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Es [inposible] llegar a tiempo.', a: ['imposible'], why: '*Im-* before p.' },
            { s: 'Tomó un [anti-inflamatorio].', a: ['antiinflamatorio'], why: 'No hyphen: write the prefix attached.' },
            { s: 'Tengo que [reescrivir] el informe.', a: ['reescribir'], why: '*Escribir* is written with *b*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Tengo que reescribir el informe entero.', why: '*Re-* means again.' },
            { a: 'El crecimiento de la ciudad es rápido.', why: '*-miento* makes a noun.' },
            { a: 'Es imposible llegar a tiempo.', why: '*Im-* before p.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Verbos parasintéticos y compuestos',
      about: 'Understand parasynthetic verbs and compounds, and guess words from their parts.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A **parasynthetic verb** (verbo parasintético) is built from an adjective or a noun with a **prefix and a suffix at the same time**: **viejo** → **envejecer** (*to age*), **triste** → **entristecer** (*to sadden*), **ancho** → **ensanchar** (*to widen*), **noche** → **anochecer** (*night falls*), **pobre** → **empobrecer** (*to impoverish*). **Compounds** join two words: **paraguas** (*umbrella*), **rascacielos** (*skyscraper*), **girasol** (*sunflower*), **pasatiempo** (*pastime*), **sacacorchos** (*corkscrew*). A compound of **verb + noun** has the **same form** in the singular and the plural: **el paraguas, los paraguas**. **Loanwords** keep or adapt their form: **el fútbol, el estrés, el chat**.' },
          { t: 'table', caption: 'Parasynthetic verbs and compounds', explain: ['head', 'col1'], head: ['Word', 'Built from', 'Meaning'], rows: [
            ['envejecer', 'en- + viejo + -ecer', 'to age'],
            ['entristecer', 'en- + triste + -ecer', 'to sadden'],
            ['ensanchar', 'en- + ancho + -ar', 'to widen'],
            ['anochecer', 'a- + noche + -ecer', 'night falls'],
            ['paraguas', 'parar + aguas', 'umbrella'],
            ['girasol', 'gira + sol', 'sunflower'],
          ] },
          { t: 'tip', art: 'owl', md: 'You can **guess** a word from its parts: **desordenado** is **des-** + **ordenar** + **-ado**, *untidy*. The verbs in **-ecer** can be **intransitive** and often take **se**: **La ciudad envejece.** **Ella se entristeció al oír la noticia.** Compounds of **verb + noun** use the **third person singular** of the verb: **saca** + **corchos**, **lava** + **platos**. In **Latin America** you will meet other compounds, such as **rascacielos** and **parabrisas**, which are used in the same way.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'El cielo **anochece** muy deprisa.', n: 'A verb in *-ecer*.' },
            { s: 'Ella se **entristeció** al oír la noticia.', n: 'To become sad.' },
            { s: 'Van a **ensanchar** la calle.', n: 'To widen.' },
            { s: 'Lleva el **paraguas**, va a llover.', n: 'A compound.' },
            { s: 'El **girasol** se vuelve hacia el sol.', n: 'A compound.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
            ['envejecer', 'to age'],
            ['entristecer', 'to sadden'],
            ['ensanchar', 'to widen'],
            ['anochecer', 'night falls'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Ella se ___ al oír la noticia. (entristecer, indefinido)', a: ['entristeció'], why: 'A parasynthetic verb.' },
            { q: 'Van a ___ la calle. (ancho, verb)', a: ['ensanchar'], why: '*En-* + ancho + *-ar*.' },
            { q: 'Lleva el ___, va a llover. (umbrella)', a: ['paraguas'], why: 'A compound.' },
            { q: 'El ___ se vuelve hacia el sol. (sunflower)', a: ['girasol'], why: 'A compound.' },
            { q: 'Mi abuelo ___ muy pronto. (envejecer, indefinido)', a: ['envejeció'], why: 'A parasynthetic verb.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best word.', items: [
            { q: 'Al final del día, ___ y encendimos las luces.', o: ['anocheció', 'amaneció', 'ensanchó'], why: '*Anochecer*: night falls.' },
            { q: 'Es muy ___: nunca tiene la ropa recogida.', o: ['desordenado', 'reordenado', 'ordenable'], why: '*Des-* means the opposite.' },
            { q: 'Los ___ de Madrid son más bajos que los de Nueva York.', o: ['rascacielos', 'rascacielo', 'rascacielas'], why: 'The plural is the same as the singular.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with a verb in -ecer.', items: [
            { q: 'El cielo se pone oscuro muy deprisa.', cue: 'El cielo', a: ['El cielo oscurece muy deprisa.'], why: '*Oscurecer*.' },
            { q: 'Ella se puso triste al oír la noticia.', cue: 'Ella', a: ['Ella se entristeció al oír la noticia.'], why: '*Entristecerse*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Ella se [entristezó] al oír la noticia.', a: ['entristeció'], why: 'The ending of *-ecer* verbs.' },
            { s: 'Van a [ensanchear] la calle.', a: ['ensanchar'], why: 'The parasynthetic verb from *ancho*.' },
            { s: 'Los [rascacielo] de Nueva York son altísimos.', a: ['rascacielos'], why: 'The plural of this compound is *rascacielos*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'El cielo oscurece muy deprisa.', why: 'A verb in *-ecer*.' },
            { a: 'Lleva el paraguas, va a llover.', why: 'A compound.' },
            { a: 'Ella se entristeció al oír la noticia.', why: 'A parasynthetic verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Cómo cambia el español',
      about: 'Read an essay about how Spanish builds new words.',
      art: 'churro',
      spreads: [
        [
          { t: 'reading', title: 'Cómo cambia el español', md: 'La lengua española no deja de crecer. Cada generación inventa palabras, toma otras prestadas y da un nuevo sentido a las antiguas.\n\nMuchas palabras nuevas nacen de sufijos y prefijos. Un joven puede decir que una conversación duró un tiempazo, que el café es un cafecito rápido y que un compañero es un poco antisocial. Decimos rehacer, deshacer y reescribir sin pensar que estamos construyendo palabras. Verbos como entristecer, envejecer y anochecer nacen de un adjetivo o de un nombre, con un prefijo y un sufijo a la vez.\n\nOtras palabras vienen de lejos. El fútbol, el estrés y el chat llegaron de otras lenguas, y hoy nadie los extraña. El paraguas, el rascacielos y el girasol muestran cómo dos palabras pueden fundirse en una.\n\nA veces, el cambio está en el sentido. La ventana es la abertura de la casa, pero la ventanilla es la del banco o la del tren; la caja se guarda en el armario, pero el cajón está dentro del mueble. La lengua vive, y quien la aprende debe escuchar, leer y preguntar.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'La lengua española no deja de crecer.', a: 't', why: '*No deja de crecer.*' },
            { q: 'Verbos como entristecer nacen de un adjetivo, con prefijo y sufijo.', a: 't', why: '*Con un prefijo y un sufijo a la vez.*' },
            { q: 'El fútbol y el chat llegaron de otras lenguas.', a: 't', why: '*Llegaron de otras lenguas.*' },
            { q: 'La ventanilla es la abertura de la casa.', a: 'f', why: '*La ventanilla es la del banco o la del tren.*' },
            { q: 'El cajón está dentro de un mueble.', a: 't', why: '*El cajón está dentro del mueble.*' },
            { q: 'El español se habla en veinte países.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: '¿Cómo nace una palabra como paraguas?', o: ['De dos palabras juntas.', 'De un sufijo.', 'De una lengua extranjera.'], why: '*Dos palabras pueden fundirse en una.*' },
            { q: '¿Qué muestra el ejemplo de la ventana y la ventanilla?', o: ['Un cambio de sentido.', 'Un error de ortografía.', 'Una palabra prestada.'], why: '*El cambio está en el sentido.*' },
            { q: '¿Qué debe hacer quien aprende la lengua?', o: ['Escuchar, leer y preguntar.', 'Solo leer gramáticas.', 'Evitar palabras nuevas.'], why: 'The last sentence.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the altered words and the prefixed words.', items: [
            { s: 'Una conversación duró [un tiempazo], el café es [un cafecito] rápido.', why: 'An augmentative and a diminutive.' },
            { s: 'Decimos [rehacer], [deshacer] y [reescribir] sin pensar.', why: 'Prefixes *re-* and *des-*.' },
            { s: 'Un compañero es un poco [antisocial]. El [paraguas] muestra cómo dos palabras se funden.', why: 'A prefixed word and a compound.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'El café es un ___ rápido. (café, small)', a: ['cafecito'], why: 'The diminutive.' },
            { q: 'Decimos ___, deshacer y reescribir. (hacer de nuevo)', a: ['rehacer'], why: '*Re-* means again.' },
            { q: 'La ventana es la abertura de la casa, pero la ___ es la del banco.', a: ['ventanilla'], why: 'A change of meaning.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'La lengua española no deja de crecer.', why: 'The first sentence of the essay.' },
            { a: 'Cada generación inventa palabras y toma otras prestadas.', why: 'How a language grows.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Esperé un ___. (a long time)', o: ['tiempazo', 'tiempito', 'tiempucho'], why: 'The augmentative.' },
      { q: 'Es ___ llegar a tiempo. (not possible)', o: ['imposible', 'inposible', 'impusible'], why: '*Im-* before p.' },
      { q: 'Tomó un ___ para el dolor.', o: ['antiinflamatorio', 'anti-inflamatorio', 'antinflamatorio'], why: 'Both *i* are kept, no hyphen.' },
      { q: 'Ella se ___ al oír la noticia.', o: ['entristeció', 'entristezó', 'entristó'], why: 'A verb in *-ecer*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Viven en un ___ antiguo. (casa, big)', a: ['casón'], why: 'The augmentative.' },
      { q: 'Tengo que ___ el informe. (escribir de nuevo)', a: ['reescribir'], why: '*Re-* means again.' },
      { q: 'Lleva el ___, va a llover. (umbrella)', a: ['paraguas'], why: 'A compound.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
      ['bolsillo', 'a pocket'],
      ['cajón', 'a drawer'],
      ['ventanilla', 'a ticket window'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with a verb in -ecer.', items: [
      { q: 'El cielo se pone oscuro muy deprisa.', cue: 'El cielo', a: ['El cielo oscurece muy deprisa.'], why: '*Oscurecer*.' },
      { q: 'Viven en una casa pequeña.', cue: 'Viven en una', a: ['Viven en una casita.'], why: 'The diminutive.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Es [inposible] llegar a tiempo.', a: ['imposible'], why: '*Im-* before p.' },
      { s: 'Van a [ensanchear] la calle.', a: ['ensanchar'], why: 'The parasynthetic verb.' },
    ] },
  ],
};
