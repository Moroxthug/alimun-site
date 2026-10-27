// Spanish C1, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Register, regions and idioms',
  goal: 'Recognise and choose the register and variety of Spanish you need. Learn the forms of address (tú, usted, vos, vosotros, ustedes), the main differences between Spain and Latin America, and common idioms and proverbs.',
  art: 'churro',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'speaking'], topics: ['register', 'forms of address', 'regional Spanish', 'idioms', 'proverbs'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Tú, usted, vos',
      about: 'Choose the right form of address for the situation.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'The form of address shows **distance and respect**. In Spain, **tú** is for family, friends, children and, among young people, nearly everyone: **¿Quieres un café?** **Usted** (with the verb in the third person) is for older people, strangers in a formal setting and customers: **¿Quiere un café?** The plural is **vosotros** for informal and **ustedes** for formal: **¿Queréis un café?** and **¿Quieren un café?** In **Latin America**, **ustedes** is the plural for everyone. In **Argentina, Uruguay** and parts of **Central America**, **vos** replaces **tú**: **vos querés, vos tenés, vos sos**. To be polite, use the **imperfecto** or the **condicional**: **Quería pedirle un favor.** **¿Podría ayudarme?** **¿Le importaría cerrar la puerta?**' },
          { t: 'table', caption: 'Forms of address', explain: ['head', 'col1'], head: ['Form', 'Used with', 'Example'], rows: [
            ['tú', 'family, friends, young people', '¿Quieres un café?'],
            ['usted', 'older or formal', '¿Quiere un café?'],
            ['vosotros (Spain)', 'informal plural', '¿Queréis un café?'],
            ['ustedes', 'formal plural; all plurals in Latin America', '¿Quieren un café?'],
            ['vos (Argentina, Uruguay)', 'informal singular', '¿Querés un café?'],
            ['polite imperfecto or condicional', 'any polite request', 'Quería pedirle un favor.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In **Colombia** and **Costa Rica**, **usted** is also used with **friends and family**, which sounds warm, not cold. In **Spain**, switching to **tú** is easy: **¿Nos tuteamos?** The **voseo** has its own verb forms: **vos tenés**, **vos sos**, **vení**, **decime**. Learn to **understand** it even if you do not use it. In **writing**, **Estimado señor** and **Estimada señora** are formal, and **Querido** / **Querida** are informal.' },
        ],
        [
          { t: 'examples', items: [
            { s: '¿**Quieres** un café?', n: 'Friends and family.' },
            { s: '¿**Quiere** un café?', n: 'Formal: *usted*.' },
            { s: '¿**Queréis** un café?', n: 'Informal plural in Spain.' },
            { s: '**Quería pedirle** un favor.', n: 'A polite request.' },
            { s: '¿**Nos tuteamos**?', n: 'Suggesting a change.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Informal or formal? Sort the sentences.', groups: ['informal', 'formal'], explain: ['groups'], items: [
            { s: '¿Quieres un café?', g: 0, why: '*Tú* form.' },
            { s: '¿Me ayudas con esto?', g: 0, why: '*Tú* form.' },
            { s: '¿Venís con nosotros?', g: 0, why: '*Vosotros* form.' },
            { s: '¿Quiere un café?', g: 1, why: '*Usted* form.' },
            { s: '¿Podría ayudarme?', g: 1, why: 'A polite condicional.' },
            { s: '¿Le importaría cerrar la puerta?', g: 1, why: 'A polite condicional.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '¿___ un café? (querer, usted)', a: ['Quiere'], why: 'The formal form.' },
            { q: '___ pedirle un favor. (querer, imperfecto, polite)', a: ['Quería'], why: 'The polite imperfecto.' },
            { q: '¿___ ayudarme? (poder, condicional, usted)', a: ['Podría'], why: 'The polite condicional.' },
            { q: '¿Nos ___? (tutear, presente)', a: ['tuteamos'], why: 'Suggesting a change.' },
            { q: '¿___ un café? (querer, vosotros)', a: ['Queréis'], why: 'The informal plural in Spain.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best form.', items: [
            { q: 'A una clienta mayor: ¿___ ayudarla?', o: ['Puedo', 'Puedes', 'Podéis'], why: 'The customer is addressed formally.' },
            { q: 'A un amigo: ¿___ un café?', o: ['Quieres', 'Quiere', 'Quieren'], why: '*Tú* form.' },
            { q: 'A un profesor: ___ pedirle un favor.', o: ['Quería', 'Quiero', 'Quieres'], why: 'A polite imperfecto.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Make the sentence more polite.', items: [
            { q: 'Quiero pedirle un favor.', cue: 'Quería', a: ['Quería pedirle un favor.'], why: 'The imperfecto softens the request.' },
            { q: 'Cierre la puerta, por favor. (to an older stranger)', cue: '¿Le importaría', a: ['¿Le importaría cerrar la puerta?', '¿Le importaría cerrar la puerta, por favor?'], why: 'A polite question.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right form.', items: [
            { s: 'Al director: ¿[Quieres] un café?', a: ['Quiere'], why: 'A formal setting: *usted*.' },
            { s: 'A la señora mayor: ¿[Te] ayudo?', a: ['La', 'Le'], why: 'The formal pronoun is *la* or *le*.' },
            { s: 'A un amigo: ¿[Quiere] venir?', a: ['Quieres'], why: 'With a friend, use *tú*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Quería pedirle un favor.', why: 'A polite request.' },
            { a: '¿Quiere un café?', why: 'The formal question.' },
            { a: '¿Nos tuteamos desde ahora?', why: 'Suggesting a change.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'España y América Latina',
      about: 'Recognise vocabulary and grammar differences between the varieties.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'Spanish is spoken in Spain, in Latin America and in Equatorial Guinea. The **vocabulary** differs: **coche** (Spain), **carro** and **auto** (Latin America) for *car*; **ordenador** and **computadora** for *computer*; **móvil** and **celular** for *mobile phone*; **zumo** and **jugo** for *juice*; **patata** and **papa** for *potato*; **gafas** and **lentes** for *glasses*. The **grammar** differs too: Spain uses **vosotros**, Latin America **ustedes**; Spain says **Hoy he comido** (pretérito perfecto), many Latin American countries say **Hoy comí** (indefinido). In the **pronunciation**, most of Latin America and parts of Spain say **seseo**: *casa* and *caza* sound the same. **Spelling** is the same everywhere.' },
          { t: 'table', caption: 'Spain and Latin America', explain: ['head', 'col1'], head: ['Spain', 'Latin America', 'Meaning'], rows: [
            ['coche', 'carro, auto', 'car'],
            ['ordenador', 'computadora', 'computer'],
            ['móvil', 'celular', 'mobile phone'],
            ['zumo', 'jugo', 'juice'],
            ['patata', 'papa', 'potato'],
            ['gafas', 'lentes', 'glasses'],
            ['Hoy he comido.', 'Hoy comí.', 'I have eaten today.'],
            ['vosotros coméis', 'ustedes comen', 'you (plural) eat'],
          ] },
          { t: 'tip', art: 'owl', md: 'The verb **coger** means *to take* in **Spain** (**coger el autobús**) but is **vulgar** in several Latin American countries, where people say **tomar** or **agarrar**. In the **Caribbean**, a bus is a **guagua**; in **Mexico**, a **camión**; in **Spain**, an **autobús**. Understand all the variants, but **choose one** and stay consistent. When in doubt, **ask** what people say where you are. The **past tenses** are the biggest grammar difference: in **Spain**, the perfect is used for the **recent past**; in **Latin America**, the indefinido is.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Voy a **coger** el autobús. / Voy a **tomar** el camión.', n: 'Spain and Mexico.' },
            { s: 'Se me olvidó el **móvil**. / Se me olvidó el **celular**.', n: 'Spain and Latin America.' },
            { s: '**Hoy he comido** con mi hermana. / **Hoy comí** con mi hermana.', n: 'The past tenses.' },
            { s: '¿**Queréis** postre? / ¿**Quieren** postre?', n: 'Spain and Latin America.' },
            { s: 'Me gusta el **zumo** de naranja. / Me gusta el **jugo** de naranja.', n: 'Spain and Latin America.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Spain or Latin America? Sort the words.', groups: ['Spain', 'Latin America'], explain: ['groups'], items: [
            { s: 'ordenador', g: 0, why: 'Computer in Spain.' },
            { s: 'zumo', g: 0, why: 'Juice in Spain.' },
            { s: 'patata', g: 0, why: 'Potato in Spain.' },
            { s: 'computadora', g: 1, why: 'Computer in Latin America.' },
            { s: 'jugo', g: 1, why: 'Juice in Latin America.' },
            { s: 'papa', g: 1, why: 'Potato in Latin America.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Se me olvidó el ___ en casa. (mobile phone, Spain)', a: ['móvil'], why: 'Mobile in Spain.' },
            { q: 'Se me olvidó el ___ en casa. (mobile phone, Latin America)', a: ['celular'], why: 'Mobile in Latin America.' },
            { q: 'Me gusta el ___ de naranja. (juice, Spain)', a: ['zumo'], why: 'Juice in Spain.' },
            { q: 'Hoy ___ comido con mi hermana. (haber, Spain)', a: ['he'], why: 'The pretérito perfecto in Spain.' },
            { q: 'Hoy ___ con mi hermana. (comer, indefinido, Latin America)', a: ['comí'], why: 'The indefinido in Latin America.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the Spanish word with the Latin American one.', pairs: [
            ['ordenador', 'computadora'],
            ['patata', 'papa'],
            ['gafas', 'lentes'],
            ['coche', 'carro'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it in Latin American Spanish.', items: [
            { q: 'Hoy he comido con mi hermana.', cue: 'Hoy', a: ['Hoy comí con mi hermana.'], why: 'The indefinido.' },
            { q: '¿Queréis postre?', cue: '¿Quieren', a: ['¿Quieren postre?'], why: '*Ustedes* for the plural.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'En Madrid, pago con el [celular] en la tienda. (mobile, Spain)', a: ['móvil'], why: 'In Spain: *móvil*.' },
            { s: 'En Bogotá, me gusta el [zumo] de naranja. (juice, Latin America)', a: ['jugo'], why: 'In Latin America: *jugo*.' },
            { s: 'En Madrid, hoy [comí] con mi hermana. (recent past, Spain)', a: ['he comido'], why: 'In Spain: the pretérito perfecto.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Se me olvidó el móvil en casa.', why: 'Spain.' },
            { a: 'Hoy he comido con mi hermana.', why: 'Spain.' },
            { a: 'Me gusta el jugo de naranja.', why: 'Latin America.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Expresiones y refranes',
      about: 'Understand and use common idioms and proverbs.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Idioms say something in an image. **Costar un ojo de la cara** means *to cost a fortune*: **Este coche me costó un ojo de la cara.** **Matar dos pájaros de un tiro** means *to kill two birds with one stone*. **Quedarse a dos velas** means *to be left penniless*. **Llover a cántaros** means *to rain heavily*. **Pagar el pato** means *to take the blame for others*. **Tomar el pelo** means *to pull someone’s leg*. **Proverbs** give advice: **Quien espera, desespera.** **Más vale pájaro en mano que ciento volando** (*a bird in the hand is worth two in the bush*). **Dime con quién andas y te diré quién eres** (*you are known by the company you keep*).' },
          { t: 'table', caption: 'Idioms and proverbs', explain: ['head', 'col1'], head: ['Expression', 'Meaning'], rows: [
            ['costar un ojo de la cara', 'to cost a fortune'],
            ['matar dos pájaros de un tiro', 'to achieve two things at once'],
            ['quedarse a dos velas', 'to be left penniless'],
            ['llover a cántaros', 'to rain heavily'],
            ['pagar el pato', 'to take the blame for others'],
            ['tomar el pelo', 'to pull someone’s leg'],
            ['Quien espera, desespera.', 'waiting is hard'],
            ['Más vale pájaro en mano que ciento volando.', 'keep what you have'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not translate an idiom **word by word**: *to cost an eye of the face* means nothing in English; say **to cost a fortune**. Most of these idioms are understood in **Spain and Latin America**, although each country also has its own: **llevar a cuestas** and **echar una mano** are common in Spain and understood elsewhere. Use idioms **in speech and informal writing**, not in a formal report. Learn **each idiom in a sentence**, with the verb that goes with it.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Este coche **me costó un ojo de la cara**.', n: 'It cost me a fortune.' },
            { s: 'Voy al banco y a la tienda: **mato dos pájaros de un tiro**.', n: 'Two things at once.' },
            { s: 'Gastó todo en el viaje y **se quedó a dos velas**.', n: 'Left penniless.' },
            { s: 'Ayer **llovió a cántaros**.', n: 'It rained heavily.' },
            { s: '**Quien espera, desespera.**', n: 'A proverb about waiting.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the idiom with its meaning.', pairs: [
            ['costar un ojo de la cara', 'to cost a fortune'],
            ['quedarse a dos velas', 'to be left penniless'],
            ['llover a cántaros', 'to rain heavily'],
            ['pagar el pato', 'to take the blame for others'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Este coche me costó un ___ de la cara.', a: ['ojo'], why: '*Costar un ojo de la cara*.' },
            { q: 'Gastó todo y se quedó a dos ___.', a: ['velas'], why: '*Quedarse a dos velas*.' },
            { q: 'Ayer llovió a ___.', a: ['cántaros'], why: '*Llover a cántaros*.' },
            { q: 'Él se equivocó, pero yo pagué el ___.', a: ['pato'], why: '*Pagar el pato*.' },
            { q: 'Quien espera, ___.', a: ['desespera'], why: 'The proverb.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best expression.', items: [
            { q: 'Fui al banco y a la tienda en el mismo viaje: ___.', o: ['maté dos pájaros de un tiro', 'pagué el pato', 'me quedé a dos velas'], why: 'Two things at once.' },
            { q: 'Gastó todo su dinero y ___.', o: ['se quedó a dos velas', 'costó un ojo de la cara', 'llovió a cántaros'], why: 'Left penniless.' },
            { q: 'El móvil nuevo es precioso, pero ___.', o: ['me costó un ojo de la cara', 'llueve a cántaros', 'quien espera desespera'], why: 'A fortune.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with an idiom.', items: [
            { q: 'Este coche fue carísimo.', cue: 'Este coche me costó', a: ['Este coche me costó un ojo de la cara.'], why: 'The idiom for *very expensive*.' },
            { q: 'Ayer llovió muchísimo.', cue: 'Ayer', a: ['Ayer llovió a cántaros.'], why: 'The idiom for *heavy rain*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Gastó todo y se quedó a dos [lámparas].', a: ['velas'], why: 'The idiom says *velas*.' },
            { s: 'Este coche me costó un [brazo] de la cara.', a: ['ojo'], why: 'The idiom says *un ojo de la cara*.' },
            { s: 'Ayer llovió a [baldes].', a: ['cántaros'], why: 'The idiom says *a cántaros*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Este coche me costó un ojo de la cara.', why: 'An idiom.' },
            { a: 'Gastó todo y se quedó a dos velas.', why: 'An idiom.' },
            { a: 'Quien espera, desespera.', why: 'A proverb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Tres amigos, tres países',
      about: 'Read a conversation between friends from three countries.',
      art: 'churro',
      spreads: [
        [
          { t: 'reading', title: 'Tres amigos, tres países', md: 'Inés, de Madrid, Rafael, de Ciudad de México, y Martín, de Buenos Aires, toman un café en una terraza.\n\nINÉS: ¿Os importaría pasarme el azúcar? Ayer llovió a cántaros y me quedé esperando el autobús.\n\nRAFAEL: Aquí decimos camión. Y yo ni lo tomé: mi celular se murió y pagué el pato, porque llegué tarde al trabajo.\n\nMARTÍN: En Buenos Aires había un montón de gente en el colectivo. Vos sabés lo que es eso. Y el viaje me costó un ojo de la cara.\n\nINÉS: ¡Martín, no me tomes el pelo!\n\nMARTÍN: ¿Nos tuteamos, Inés? Ya nos conocemos hace años.\n\nRAFAEL: Quien espera, desespera. ¿Pedimos otro café?' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Los tres amigos toman un café en una terraza.', a: 't', why: '*Toman un café en una terraza.*' },
            { q: 'Rafael dice camión en lugar de autobús.', a: 't', why: '*Aquí decimos camión.*' },
            { q: 'Rafael llegó a tiempo al trabajo.', a: 'f', why: '*Llegué tarde al trabajo.*' },
            { q: 'Martín propone tutear a Inés.', a: 't', why: '*¿Nos tuteamos, Inés?*' },
            { q: 'Inés trabaja en un banco.', a: 'ng', why: 'The text does not say.' },
            { q: 'El viaje de Martín fue barato.', a: 'f', why: '*Me costó un ojo de la cara.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: '¿Qué palabra usa Rafael para móvil?', o: ['celular', 'colectivo', 'autobús'], why: '*Mi celular se murió.*' },
            { q: '¿Qué quiere decir colectivo?', o: ['autobús', 'tren', 'coche'], why: 'In Buenos Aires, it is a bus.' },
            { q: '¿Qué forma de Martín muestra el voseo?', o: ['Vos sabés', 'Tú sabes', 'Usted sabe'], why: '*Vos sabés* is the voseo.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the idioms.', items: [
            { s: 'Ayer [llovió a cántaros] y me quedé esperando el autobús.', why: 'An idiom.' },
            { s: 'Mi celular se murió y [pagué el pato], porque llegué tarde.', why: 'An idiom.' },
            { s: 'El viaje [me costó un ojo de la cara]. [Quien espera, desespera.]', why: 'An idiom and a proverb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '¿Os importaría pasarme el ___? (sugar)', a: ['azúcar'], why: 'The polite request.' },
            { q: 'Aquí decimos ___. (bus, Mexico)', a: ['camión'], why: 'Bus in Mexico.' },
            { q: '¿Nos ___, Inés? (tutear)', a: ['tuteamos'], why: 'A change of register.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: '¿Pedimos otro café ahora?', why: 'A suggestion.' },
            { a: '¿Nos tuteamos, Inés?', why: 'A change of register.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'A una clienta mayor: ¿___ ayudarla?', o: ['Puedo', 'Puedes', 'Podéis'], why: 'The customer is addressed formally.' },
      { q: 'En España: Se me olvidó el ___.', o: ['móvil', 'celular', 'portátil'], why: 'Mobile in Spain.' },
      { q: '¿Qué significa *costar un ojo de la cara*?', o: ['costar una fortuna', 'ver mal', 'llorar mucho'], why: 'It means to cost a fortune.' },
      { q: '¿Qué forma es más cortés?', o: ['Quería pedirle un favor.', 'Quiero un favor.', 'Dame un favor.'], why: 'The polite imperfecto.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Gastó todo y se quedó a dos ___.', a: ['velas'], why: 'The idiom.' },
      { q: 'Hoy ___ comido con mi hermana. (haber, Spain)', a: ['he'], why: 'The pretérito perfecto in Spain.' },
      { q: 'Ayer llovió a ___.', a: ['cántaros'], why: 'The idiom.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the Spanish word with the Latin American one.', pairs: [
      ['ordenador', 'computadora'],
      ['patata', 'papa'],
      ['zumo', 'jugo'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Make the sentence more polite.', items: [
      { q: 'Quiero pedirle un favor.', cue: 'Quería', a: ['Quería pedirle un favor.'], why: 'The imperfecto softens the request.' },
      { q: 'Este coche fue carísimo.', cue: 'Este coche me costó', a: ['Este coche me costó un ojo de la cara.'], why: 'The idiom.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'En Madrid, pago con el [celular] en la tienda.', a: ['móvil'], why: 'In Spain: *móvil*.' },
      { s: 'Al director: ¿[Quieres] un café?', a: ['Quiere'], why: 'A formal setting: *usted*.' },
    ] },
  ],
};
