// Spanish C2, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Spoken Spanish and regional voices',
  goal: 'Understand spoken Spanish in its regional and informal forms. Learn discourse markers and interjections, informal speech and contractions, and the characteristic words and sounds of Spain, Mexico, Argentina, the Caribbean and the Andes.',
  art: 'suitcase',
  tags: { skills: ['listening', 'vocabulary', 'reading'], topics: ['discourse markers', 'informal speech', 'regional Spanish', 'slang', 'seseo'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Bueno, pues, o sea',
      about: 'Understand discourse markers and interjections.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: '**Discourse markers** organise speech and show the speaker’s attitude. **Bueno** opens an answer, softens disagreement or closes a topic: *Bueno, no sé.* **Pues** means *well, then*: *Pues vamos.* **O sea** means *I mean, in other words*: *O sea, que no vienes.* **Vale** means *OK* in Spain. **Hombre** and **mujer** are interjections of surprise or reproach, whatever the gender of the listener: *¡Hombre, no digas eso!* **Oye** gets attention (*hey*): *Oye, ¿tienes hora?* **¿No?** at the end of a sentence asks for agreement: *Es bonito, ¿no?* **Es que** introduces an excuse: *Es que no tuve tiempo.* **A ver** opens a question or a pause: *A ver, ¿qué pasa?*' },
          { t: 'table', caption: 'Discourse markers', explain: ['head', 'col0'], head: ['Marker', 'What it does', 'Example'], rows: [
            ['bueno', 'opens, softens, closes', 'Bueno, no sé.'],
            ['pues', 'well, then', 'Pues vamos.'],
            ['o sea', 'I mean', 'O sea, que no vienes.'],
            ['vale', 'OK (Spain)', '—¿Quedamos a las ocho? —Vale.'],
            ['hombre / mujer', 'surprise or reproach', '¡Hombre, no digas eso!'],
            ['es que', 'introduces an excuse', 'Es que no tuve tiempo.'],
            ['a ver', 'opens a question or pause', 'A ver, ¿qué pasa?'],
          ] },
        ],
        [
          { t: 'text', md: 'These words **fill pauses** and show how the speaker takes what was said. A sentence without them can sound **cold** or **abrupt**. In writing, they are used only in **dialogue** and informal messages. Some are regional: **vale** is typical of Spain (in Latin America people say *okey*, *dale* or *bueno*), **che** is typical of Argentina and Uruguay (*Che, ¿viste?*), **órale** and **ándale** are typical of Mexico. **Oye** is understood everywhere.' },
          { t: 'tip', art: 'owl', md: 'You cannot translate these words one by one, so learn them **in whole sentences**. *Es que* is a very frequent way to give an excuse politely; *O sea* is often overused by young speakers as a filler. In formal speech, prefer **es decir** to **o sea**.' },
          { t: 'ex', kind: 'match', h: 'Match the marker with what it does.', pairs: [
            ['bueno', 'opens, softens or closes'],
            ['o sea', 'I mean'],
            ['es que', 'introduces an excuse'],
            ['a ver', 'opens a question or pause'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the marker that fits.', items: [
            { q: '—¿Por qué no viniste? —___ no tuve tiempo.', o: ['Es que', 'Vale', 'Hombre'], why: '*Es que* introduces an excuse.' },
            { q: '—¿Quedamos a las ocho? —___, perfecto. (Spain)', o: ['Vale', 'Che', 'Órale'], why: '*Vale* = OK in Spain.' },
            { q: '___, ¿tienes hora? (getting attention)', o: ['Oye', 'Bueno', 'Es que'], why: '*Oye* gets attention.' },
            { q: 'Es muy bonito, ¿___? (asking for agreement)', o: ['no', 'vale', 'pues'], why: '*¿No?* asks for agreement.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Friendly or blunt?', groups: ['friendly', 'blunt'], explain: ['groups'], items: [
            { s: 'Bueno, quizá tengas razón.', g: 0, why: '*Bueno* softens.' },
            { s: 'Estás equivocado.', g: 1, why: 'No softening.' },
            { s: 'Es que no tuve tiempo, perdona.', g: 0, why: '*Es que* gives a polite excuse.' },
            { s: 'No tuve tiempo.', g: 1, why: 'A bare statement.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a marker (bueno, pues, o sea, vale, hombre, oye, es que, a ver).', items: [
            { q: '___, ¿qué pasa aquí? Nadie me dice nada.', a: ['A ver'], why: '*A ver* opens a question.' },
            { q: '—¿Nos vemos mañana? —___, a las diez.', a: ['Vale'], why: '*Vale* = OK.' },
            { q: '¡___, no te enfades! Era una broma.', a: ['Hombre'], why: '*Hombre* shows reproach or surprise.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Make it sound friendlier with a marker.', items: [
            { q: 'No tuve tiempo.', cue: 'Es que', a: ['Es que no tuve tiempo.'], why: '*Es que* introduces a polite excuse.' },
            { q: 'No sé.', cue: 'Bueno,', a: ['Bueno, no sé.'], why: '*Bueno* softens the answer.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Pa’, to’, na’',
      about: 'Understand informal contractions and speech, and know when to use tú and usted.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Spoken Spanish shortens words. **Para** becomes **pa’**, **todo** becomes **to’**, **nada** becomes **na’**, **estar** becomes **tar** (*¿Tás bien?*). In many varieties, the **-ado** ending loses its *d*: **cansado** becomes **cansao**, **hablado** becomes **hablao**. In the Caribbean and parts of Andalusia, a final **s** is **aspirated** or dropped (*los amigos* → *loh amigoh*). These forms appear in **informal writing** and in **song lyrics**, but **not in formal writing**.' },
          { t: 'table', caption: 'Spoken forms', explain: ['head', 'col0'], head: ['Written', 'Spoken', 'Meaning'], rows: [
            ['para', 'pa’', 'for, to'],
            ['todo', 'to’', 'all'],
            ['nada', 'na’', 'nothing'],
            ['cansado', 'cansao', 'tired'],
            ['estás', 'tás', 'you are'],
            ['pues', 'pos', 'well (informal)'],
          ] },
        ],
        [
          { t: 'text', md: 'The choice between **tú** and **usted** is a matter of register. **Usted** is used with strangers, older people and in formal settings; **tú** with family, friends, children and, increasingly, colleagues. In **Colombia** and **Costa Rica**, *usted* is also used with friends and family, which sounds warm. In **Argentina** and **Uruguay**, **vos** replaces *tú*. **Taboo** language: understand it in films and conversation, but as a learner do not use it, especially in writing or at work.' },
          { t: 'tip', art: 'owl', md: 'When you **write** informally, you can use *pa’* and *to’* in a message to a friend. In an **exam essay** or an **email to a stranger**, write the full forms: *para*, *todo*, *nada*. Spoken forms can look wrong on the page and are rarely accepted in formal writing. In **dialogue** in a story, they show the speaker’s voice.' },
          { t: 'ex', kind: 'match', h: 'Match the spoken form with the written form.', pairs: [
            ['pa’', 'para'],
            ['to’', 'todo'],
            ['na’', 'nada'],
            ['cansao', 'cansado'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the speaker say in full?', items: [
            { q: '«No hay na’ pa’ comer.»', o: ['No hay nada para comer.', 'No hay nadie para comer.', 'No hay no para comer.'], why: '*Na’* = nada; *pa’* = para.' },
            { q: '«Estoy cansao de to’.»', o: ['Estoy cansado de todo.', 'Estoy cansada de todos.', 'Estoy cansando de todo.'], why: '*Cansao* = cansado; *to’* = todo.' },
            { q: '«¿Tás bien?»', o: ['¿Estás bien?', '¿Tienes bien?', '¿Eres bien?'], why: '*Tás* = estás.' },
            { q: '«Pa’ lante.»', o: ['Para adelante.', 'Para atrás.', 'Por delante.'], why: '*Pa’ lante* = para adelante.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Informal speech or formal writing?', groups: ['informal speech', 'formal writing'], explain: ['groups'], items: [
            { s: 'No hay na’.', g: 0, why: 'A spoken contraction.' },
            { s: 'No hay nada.', g: 1, why: 'Full form.' },
            { s: '¿Tás cansao?', g: 0, why: 'Two spoken forms.' },
            { s: '¿Está usted cansado?', g: 1, why: 'Full and formal.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Write the sentence in full, formal Spanish.', items: [
            { q: '¿Tás cansao de to’ esto?', cue: '¿Está usted cansado', a: ['¿Está usted cansado de todo esto?', '¿Estás cansado de todo esto?'], why: 'Full forms.' },
            { q: 'No hay na’ pa’ ti.', cue: 'No hay', a: ['No hay nada para ti.', 'No hay nada para usted.'], why: '*Na’* = nada; *pa’* = para.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the contracted form.', items: [
            { q: 'Voy ___ casa. (para)', a: ['pa’', 'pa'], why: '*Para* → *pa’*.' },
            { q: 'No he comprado ___. (nada)', a: ['na’', 'na'], why: '*Nada* → *na’*.' },
            { q: 'Estoy cansa___. (cansado)', a: ['o'], why: '*Cansado* → *cansao*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Guay, chévere, chido, bacán',
      about: 'Recognise the characteristic words and sounds of the main varieties.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'The same idea is said differently across the Spanish-speaking world. *Great, cool* is **guay** or **mola** in **Spain**, **chévere** in the **Caribbean** and **Colombia**, **padre** or **chido** in **Mexico**, **bacán** in **Chile** and **Peru**, **copado** in **Argentina**. A *friend* is **tío** or **colega** in Spain, **cuate** or **carnal** in Mexico, **pana** in Venezuela, **che** or **pibe** (a boy) in Argentina. **Ahorita** in Mexico means *right now* or *in a little while*; **ahora mismo** is the Spanish of Spain. In **Mexico**, **mande** is a polite *pardon?*' },
          { t: 'table', caption: 'Regional words', explain: ['head', 'col0'], head: ['Meaning', 'Word', 'Where'], rows: [
            ['great, cool', 'guay, mola', 'Spain'],
            ['great, cool', 'chévere', 'Caribbean, Colombia'],
            ['great, cool', 'padre, chido', 'Mexico'],
            ['great, cool', 'bacán', 'Chile, Peru'],
            ['friend', 'tío, colega', 'Spain'],
            ['friend', 'cuate', 'Mexico'],
            ['pardon?', 'mande', 'Mexico'],
          ] },
        ],
        [
          { t: 'text', md: 'The **sounds** also differ. In most of **Latin America** and in the south of Spain, *casa* and *caza* sound the same (**seseo**). In most of **Spain**, *c* before e or i and *z* are pronounced like English *th* (**distinción**). In the **Caribbean** and Chile, a final **s** is weakened or dropped. In **Argentina** and **Uruguay**, **ll** and **y** sound like *sh* or *zh* (**yeísmo rehilado**): *calle*, *yo*. These are not mistakes, but different accents; all are understood by all speakers, with practice.' },
          { t: 'tip', art: 'owl', md: 'You do **not** need to imitate every accent. Aim to **understand** them, and to be **consistent** in your own. The pronunciation score in this course follows the **standard of Spain** (**es-ES**). If you listen to a Mexican, Argentine or Caribbean speaker, expect **different vocabulary**, **different intonation** and sometimes **different verb forms** (*vos* in Argentina).' },
          { t: 'ex', kind: 'match', h: 'Match the word with the place.', pairs: [
            ['guay', 'Spain'],
            ['chévere', 'Caribbean, Colombia'],
            ['chido', 'Mexico'],
            ['bacán', 'Chile, Peru'],
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which variety?', groups: ['Spain', 'Mexico'], explain: ['groups'], items: [
            { s: 'tío', g: 0, why: 'Friend, in Spain.' },
            { s: 'cuate', g: 1, why: 'Friend, in Mexico.' },
            { s: 'guay', g: 0, why: 'Cool, in Spain.' },
            { s: 'chido', g: 1, why: 'Cool, in Mexico.' },
            { s: 'ahora mismo', g: 0, why: 'Right now, in Spain.' },
            { s: 'ahorita', g: 1, why: 'Right now or soon, in Mexico.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'In Mexico, “mande” means…', o: ['pardon?', 'goodbye', 'thanks'], why: '*Mande* = a polite *pardon?*' },
            { q: 'In Argentina, “che” is used to…', o: ['get attention or address a friend', 'say goodbye', 'say thank you'], why: '*Che* is typical of Argentina.' },
            { q: 'In most of Latin America, “casa” and “caza” sound…', o: ['the same', 'different', 'like English th'], why: '*Seseo*.' },
            { q: 'In Chile and Peru, “bacán” means…', o: ['great, cool', 'bacon', 'tired'], why: '*Bacán* = great.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite for a Mexican reader.', items: [
            { q: 'Ahora mismo voy, tío. ¡Qué guay!', cue: 'Ahorita', a: ['Ahorita voy, cuate. ¡Qué padre!', 'Ahorita voy, cuate. ¡Qué chido!'], why: 'Mexican *ahorita*, *cuate* and *padre* or *chido*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the lesson.', items: [
            { q: 'En México, un amigo es un ___.', a: ['cuate'], why: 'Mexican word for friend.' },
            { q: 'En el Caribe, algo genial es ___.', a: ['chévere'], why: 'Caribbean word for cool.' },
            { q: 'En España, algo genial es ___.', a: ['guay'], why: 'Spanish word for cool.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Tres amigos, tres voces',
      about: 'Read a conversation between speakers from Spain, Mexico and Argentina.',
      art: 'churro',
      spreads: [
        [
          { t: 'reading', title: 'Tres amigos, tres voces', md: 'Carmen (de Madrid), Rodrigo (de Ciudad de México) y Lucía (de Buenos Aires) planean un fin de semana juntos.\n\nCARMEN: Oye, ¿qué os parece una excursión a la sierra? A ver, no sé, pero a mí me mola.\n\nRODRIGO: ¡Órale, qué padre! Ahorita mismo miro cuándo puedo. Es que tengo un compromiso el sábado, pero lo muevo.\n\nLUCÍA: Che, qué copado. Yo me anoto, pero necesito saber la hora. Vos, Carmen, ¿tenés el plan armado?\n\nCARMEN: Bueno, más o menos. O sea, hay que reservar. Vale, os mando el enlace.\n\nRODRIGO: Mande? Perdón, ¿cómo dices?\n\nLUCÍA: ¡Ja, ja! Que Carmen manda el enlace, che. Bueno, pa’ mí, perfecto.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Los tres amigos planean un fin de semana juntos.', a: 't', why: '«Planean un fin de semana juntos.»' },
            { q: 'A Carmen le gusta la idea de la excursión.', a: 't', why: '«A mí me mola.»' },
            { q: 'Rodrigo no puede ir de ninguna manera.', a: 'f', why: '«Tengo un compromiso el sábado, pero lo muevo.»' },
            { q: 'Lucía pregunta si Carmen tiene el plan armado.', a: 't', why: '«¿Tenés el plan armado?»' },
            { q: 'Carmen enviará el enlace.', a: 't', why: '«Os mando el enlace.»' },
            { q: 'La excursión es a los Pirineos.', a: 'ng', why: 'The text says only « la sierra ».' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Which word shows that Carmen is from Spain?', o: ['mola', 'padre', 'copado'], why: '*Mola* is from Spain.' },
            { q: 'Which word shows that Rodrigo is Mexican?', o: ['órale', 'vale', 'che'], why: '*Órale* is typical of Mexico.' },
            { q: 'Which word shows that Lucía is Argentine?', o: ['copado', 'guay', 'ahorita'], why: '*Copado* is Argentine.' },
            { q: 'What does Rodrigo mean by “Mande?”?', o: ['Pardon?', 'Send it!', 'Command!'], why: 'A polite Mexican *pardon?*' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word from the text with its meaning.', pairs: [
            ['mola', 'is cool (Spain)'],
            ['padre', 'great (Mexico)'],
            ['copado', 'cool (Argentina)'],
            ['vale', 'OK (Spain)'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: '___ mismo miro cuándo puedo. (Mexico: right now)', a: ['Ahorita'], why: 'Mexican word.' },
            { q: 'Yo me anoto. ¿Vos tenés el plan ___? (Argentina)', a: ['armado'], why: 'The Argentine phrase *tener el plan armado*.' },
            { q: '___, os mando el enlace. (Spain: OK)', a: ['Vale'], why: '*Vale* = OK in Spain.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which speaker said it?', groups: ['Carmen or Lucía', 'Rodrigo'], explain: ['groups'], items: [
            { s: 'Me mola.', g: 0, why: 'Carmen, from Spain.' },
            { s: '¿Tenés el plan armado?', g: 0, why: 'Lucía, from Argentina.' },
            { s: '¡Órale, qué padre!', g: 1, why: 'Rodrigo, from Mexico.' },
            { s: 'Ahorita miro.', g: 1, why: 'Rodrigo, from Mexico.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: '—¿Por qué no viniste? —___ no tuve tiempo.', o: ['Es que', 'Vale', 'Hombre'], why: '*Es que* introduces an excuse.' },
      { q: 'In Mexico, “chido” means…', o: ['cool', 'tired', 'big'], why: '*Chido* = cool.' },
      { q: '«No hay na’ pa’ comer.» means…', o: ['No hay nada para comer.', 'No hay nadie para comer.', 'No hay no para comer.'], why: '*Na’* = nada; *pa’* = para.' },
      { q: 'In most of Latin America, “casa” and “caza” sound…', o: ['the same', 'different', 'like English th'], why: '*Seseo*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with the place.', pairs: [
      ['guay', 'Spain'],
      ['cuate', 'Mexico'],
      ['chévere', 'Caribbean, Colombia'],
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: '___, ¿qué pasa aquí? Nadie me dice nada.', a: ['A ver'], why: '*A ver* opens a question.' },
      { q: 'Estoy cansa___ de todo. (spoken: cansado)', a: ['o'], why: '*Cansado* → *cansao*.' },
      { q: '—¿Nos vemos mañana? —___. (Spain: OK)', a: ['Vale'], why: '*Vale* = OK in Spain.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, using the words given.', items: [
      { q: 'No tuve tiempo.', cue: 'Es que', a: ['Es que no tuve tiempo.'], why: '*Es que* introduces a polite excuse.' },
      { q: 'Ahora mismo voy, tío.', cue: 'Ahorita', a: ['Ahorita voy, cuate.'], why: 'Mexican vocabulary.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mixture of varieties.', items: [
      { s: 'En México, mi [tío] es muy chido. (my friend)', a: ['cuate'], why: 'In Mexico: *cuate*.' },
      { s: 'En Madrid, ¡qué [chévere]!', a: ['guay'], why: 'In Spain: *guay*.' },
    ] },
  ],
};
