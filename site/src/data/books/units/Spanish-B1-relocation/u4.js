// Spanish B1 for moving abroad, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Banks, contracts and phones',
  goal: 'Open a bank account, get a phone contract and understand the small print.',
  art: 'mug',
  tags: { skills: ['speaking', 'reading', 'writing', 'grammar'], topics: ['banking', 'contracts', 'phone-contract', 'double-object-pronouns', 'formal-email'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Opening a bank account',
      about: 'What the bank asks you, the words of online banking, and me lo, se lo.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'You need a bank account for your salary, your rent and your bills. In Spain this is usually **una cuenta corriente** or *cuenta de pago*. Banks usually ask for your passport or identity document, your foreigner’s number if you have one, and sometimes proof of address or of your income. Ask about **las comisiones**, the fees, before you sign.' },
          { t: 'table', caption: 'Words at the bank', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['abrir una cuenta', 'to open an account'],
            ['el / la titular', 'the account holder'],
            ['el IBAN', 'your account number for transfers'],
            ['la comisión de mantenimiento', 'a monthly or yearly fee for the account'],
            ['la transferencia', 'a bank transfer'],
            ['domiciliar un recibo', 'to pay a bill by direct debit from your account'],
            ['la tarjeta de débito', 'a card that takes money straight from your account'],
            ['la banca online', 'online banking, on the website or the app'],
          ] },
          { t: 'tip', art: 'owl', md: 'Your salary arriving in your account every month is *domiciliar la nómina*. Some banks have no fees if you do this. In Latin America, a current account is often *cuenta corriente* too, and *cuenta de ahorro* is a savings account.' },
        ],
        [
          { t: 'dialogue', title: 'En el banco', lines: [
            { who: 'Empleada', s: 'Buenos días. ¿En qué puedo ayudarle?' },
            { who: 'Javier', s: 'Buenos días. Acabo de llegar a la ciudad y me gustaría abrir una cuenta.' },
            { who: 'Empleada', s: 'Muy bien. ¿Me deja su pasaporte y su NIE, por favor?' },
            { who: 'Javier', s: 'Aquí los tiene. ¿La cuenta tiene comisiones?' },
            { who: 'Empleada', s: 'Si domicilia la nómina, no tiene comisión de mantenimiento. Si no, son cinco euros al mes.' },
            { who: 'Javier', s: 'Vale. ¿Y la tarjeta? ¿Me la dan hoy?' },
            { who: 'Empleada', s: 'No, se la enviamos a casa en unos días. Las claves para la banca online se las mandamos por SMS.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Javier quiere abrir una cuenta.', a: 't', why: '*me gustaría abrir una cuenta*.' },
            { q: 'La cuenta siempre cuesta cinco euros al mes.', a: 'f', why: 'Only if he does not have his salary paid into it.' },
            { q: 'Javier recibe la tarjeta hoy en el banco.', a: 'f', why: '*se la enviamos a casa en unos días*.' },
          ] },
        ],
        [
          { t: 'text', md: 'With two object pronouns, the **indirect** one (to whom) comes first, then the **direct** one (what): *me lo*, *te la*, *nos los*. When *le* or *les* meets *lo, la, los, las*, it changes to **se**: not *le lo*, but **se lo**.' },
          { t: 'examples', items: [
            { s: '¿La tarjeta? **Se la** enviamos a casa.', n: '*le* (to you, usted) + *la* (the card) becomes *se la*.' },
            { s: '¿El contrato? ¿**Me lo** puede mandar por correo?', n: '*me* (to me) + *lo* (the contract).' },
            { s: '¿Las claves? **Se las** mandamos por SMS.', n: '*le* + *las* (the passwords) becomes *se las*.' },
            { s: 'Puede enviár**melo** por correo electrónico.', n: 'With an infinitive, the pronouns can go on the end, as one word with an accent.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Answer with two pronouns.', items: [
            { q: '¿Me da el justificante, por favor? Sí, ahora ___ doy.', o: ['se lo', 'le lo', 'lo le'], why: '*le* becomes *se* before *lo*: *se lo doy*.' },
            { q: '¿Nos manda las facturas por correo? Sí, ___ mando hoy.', o: ['se las', 'les las', 'las se'], why: '*les* becomes *se* before *las*.' },
            { q: '¿Me envías el IBAN? Sí, ahora ___ envío.', o: ['te lo', 'lo te', 'se te'], why: 'To you (*te*) + it (*lo*): *te lo*.' },
            { q: '¿Cuándo me dan la tarjeta? ___ enviamos en una semana.', o: ['Se la', 'Le la', 'Se lo'], why: '*la tarjeta* is feminine: *la*. And *le* becomes *se*.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: the bank word and its meaning in Spanish.', pairs: [
            ['el IBAN', 'el número de la cuenta'],
            ['la transferencia', 'enviar dinero a otra cuenta'],
            ['domiciliar un recibo', 'pagar una factura desde la cuenta cada mes'],
            ['el titular', 'la persona que tiene la cuenta'],
            ['la comisión', 'lo que cobra el banco por un servicio'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Contracts and the small print',
      about: 'Ask about costs, minimum periods and how to cancel a contract.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Before you sign a phone or internet contract, read the small print, **la letra pequeña**. The key questions are: how much is it **after** the first months, is there a minimum period, **la permanencia**, and how do you cancel, **darse de baja**?' },
          { t: 'table', caption: 'Words in contracts', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['la tarifa', 'the price plan'],
            ['la permanencia', 'the minimum time you must stay in the contract'],
            ['la penalización', 'the money you pay if you leave too early'],
            ['darse de baja', 'to cancel a service'],
            ['el preaviso', 'the notice you must give before you cancel'],
            ['la portabilidad', 'keeping your phone number with a new company'],
            ['la fibra', 'fast internet at home'],
            ['los datos', 'mobile data'],
          ] },
          { t: 'tip', art: 'churro', md: 'In Spain a mobile phone is *el móvil*; in Latin America it is *el celular*. A contract is often *un contrato* in Spain and *un plan* in many Latin American countries.' },
        ],
        [
          { t: 'dialogue', title: 'En la tienda de telefonía', lines: [
            { who: 'Dependienta', s: 'Esta tarifa tiene fibra en casa y treinta gigas de datos para el móvil.' },
            { who: 'Pedro', s: '¿Cuánto cuesta al mes?' },
            { who: 'Dependienta', s: 'Treinta euros los seis primeros meses. Después, cuarenta.' },
            { who: 'Pedro', s: '¿Tiene permanencia?' },
            { who: 'Dependienta', s: 'Sí, de doce meses. Si se da de baja antes, hay una penalización.' },
            { who: 'Pedro', s: '¿Podría decirme cuánto es la penalización?' },
            { who: 'Dependienta', s: 'Depende de los meses que le queden, hasta un máximo de cien euros.' },
            { who: 'Pedro', s: 'Vale. ¿Y puedo mantener mi número?' },
            { who: 'Dependienta', s: 'Claro, hacemos la portabilidad sin coste.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Think about the conversation. Choose the answer.', items: [
            { q: 'Después de seis meses, Pedro paga ___ al mes.', o: ['40 €', '30 €', '100 €'], why: '*Treinta euros los seis primeros meses. Después, cuarenta.*' },
            { q: 'Si Pedro deja el contrato a los cuatro meses, ___', o: ['paga una penalización.', 'no paga nada.', 'pierde su número.'], why: 'There is a 12-month *permanencia*, so leaving early costs money.' },
            { q: 'Para mantener su número, Pedro ___', o: ['no paga nada.', 'paga cien euros.', 'tiene que ir al banco.'], why: '*hacemos la portabilidad sin coste*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the questions about the contract.', items: [
            { q: '¿El contrato tiene ___? (tiempo mínimo)', a: ['permanencia'], why: '*la permanencia*: the minimum time in the contract.' },
            { q: '¿Cuánto cuesta si me ___ de baja antes? (dar)', a: ['doy'], why: '*darse de baja*: *me doy de baja*.' },
            { q: '¿Cuántos días de ___ necesito para cancelar? (aviso)', a: ['preaviso'], why: '*el preaviso*: the notice before cancelling.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'colloc', h: 'Which words go with the key word?', items: [
            { key: 'darse de baja', o: ['de la tarifa', 'del gimnasio', 'del contrato', 'de la cuenta', 'la tarjeta', 'el número'], a: [0, 1, 2, 3], why: '*darse de baja de* + a service or contract.' },
            { key: 'domiciliar', o: ['la nómina', 'el recibo de la luz', 'las facturas', 'la permanencia', 'el preaviso'], a: [0, 1, 2], why: 'You can have your salary paid in and your bills paid out by direct debit.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the polite questions. Two words do not belong.', items: [
            { a: '¿Podría decirme si la tarifa tiene permanencia?', extra: ['sí', 'cuál'], why: 'Indirect yes/no question with *si*, no accent.' },
            { a: '¿Me lo puede enviar por correo electrónico?', extra: ['le', 'la'], why: '*me lo*: to me + it (the contract).' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'An offer and a cancellation',
      about: 'Read a phone offer with its small print, and a formal email cancelling a contract.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'Oferta: Fibra y Móvil', md: '**Fibra en casa y móvil con 50 GB, por 35 € al mes**\n\nLlamadas ilimitadas a fijos y móviles nacionales. Instalación y router gratis.\n\n*Letra pequeña:* precio válido durante los seis primeros meses. A partir del séptimo mes, 45 € al mes. Permanencia de 12 meses: si se da de baja antes, se aplicará una penalización proporcional de hasta 100 €. El router es propiedad de la empresa y deberá devolverlo al terminar el contrato. Para darse de baja, comuníquelo con un preaviso mínimo de dos días hábiles por teléfono, por escrito o en la web.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the offer. True, false or not given?', items: [
            { q: 'El precio de 35 € es para todo el contrato.', a: 'f', why: 'Only for the first six months; then 45 €.' },
            { q: 'La instalación no cuesta nada.', a: 't', why: '*Instalación y router gratis.*' },
            { q: 'El router es del cliente al final del contrato.', a: 'f', why: '*El router es propiedad de la empresa y deberá devolverlo.*' },
            { q: 'Las llamadas al extranjero están incluidas.', a: 'f', why: 'Unlimited calls are only *nacionales*, inside the country.' },
            { q: 'La empresa tiene tiendas en todas las ciudades.', a: 'ng', why: 'The offer does not talk about shops.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'What does it cost? Choose the answer.', items: [
            { q: 'En los doce primeros meses, el cliente paga en total ___.', o: ['480 €', '420 €', '540 €'], why: 'Six months at 35 € (210) plus six months at 45 € (270).' },
          ] },
        ],
        [
          { t: 'reading', title: 'Asunto: Baja del servicio, cliente n.º 4471829', md: 'Estimados señores:\n\nPor la presente les comunico que deseo darme de baja de la tarifa de fibra y móvil con fecha 31 de enero. Mi número de cliente es el 4471829 y el titular del contrato soy yo, Pedro Alves.\n\nComo el contrato empezó hace más de doce meses, entiendo que no hay penalización. Les ruego que me confirmen la baja por escrito y que me indiquen cómo devolver el router.\n\nMuchas gracias de antemano.\n\nAtentamente,\nPedro Alves' },
          { t: 'text', md: '*Por la presente les comunico que…* is a very formal way to start: with this letter I inform you that… Pedro gives the date, his customer number and asks for written confirmation. Keep a copy of the email and of the answer.' },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the important information in Pedro’s email.', items: [
            { s: 'Deseo darme de baja con fecha [31 de enero]. Mi número de cliente es el [4471829]. Les ruego que me confirmen la baja [por escrito].', why: 'The date, the customer number and how he wants the confirmation.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build sentences for a cancellation email.', items: [
            { a: 'Deseo darme de baja de la tarifa de fibra.', why: '*darse de baja de*: cancel. The pronoun goes on the infinitive: *darme*.' },
            { a: 'Les ruego que me confirmen la baja por escrito.', why: '*Les ruego que* + subjunctive *confirmen*.' },
          ] },
          { t: 'ex', kind: 'search', h: 'Find the contract words.', words: ['tarifa', 'baja', 'preaviso', 'factura', 'router', 'cliente'] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Pagar el recibo de la luz desde su cuenta cada mes es ___ el recibo.', o: ['domiciliar', 'transferir', 'abrir'], why: '*domiciliar un recibo*: direct debit.' },
      { q: '¿La tarjeta? ___ enviamos a casa.', o: ['Se la', 'Le la', 'Se lo'], why: '*la tarjeta*: *la*; *le* becomes *se*.' },
      { q: 'El tiempo mínimo que tiene que estar en un contrato es ___.', o: ['la permanencia', 'la portabilidad', 'la tarifa'], why: '*la permanencia*.' },
      { q: 'Si quiere cancelar un contrato, usted ___.', o: ['se da de baja', 'se da de alta', 'hace la portabilidad'], why: '*darse de baja*: cancel.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: '¿El contrato? ¿Me ___ puede mandar por correo?', a: ['lo'], why: '*el contrato* is masculine: *me lo*.' },
      { q: '¿Las claves? Se ___ mandamos por SMS.', a: ['las'], why: '*las claves* is feminine plural: *se las*.' },
      { q: 'Les ruego que me ___ la baja por escrito. (confirmar)', a: ['confirmen'], why: '*Les ruego que* + subjunctive, *ustedes*: *confirmen*.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'La letra pequeña de un contrato no es importante.', a: 'f', why: 'It tells you the real price, the minimum period and how to cancel.' },
      { q: 'Con la portabilidad mantiene su número de teléfono.', a: 't', why: '*la portabilidad*: keeping your number.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Me gustaría abrir una cuenta corriente.', why: '*Me gustaría* + infinitive.' },
      { a: '¿Podría decirme si la tarifa tiene permanencia?', why: 'Indirect yes/no question with *si*.' },
    ] },
  ],
};
