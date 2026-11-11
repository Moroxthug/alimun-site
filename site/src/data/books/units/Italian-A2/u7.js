// Italian A2, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'Travel and weather',
  goal: 'Plan a trip, book a hotel and talk about the weather. Learn the prepositions for cities and countries, and how to talk about plans.',
  art: 'sun',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['countries', 'prepositions', 'booking', 'hotel', 'plans', 'stare per', 'weather', 'seasons', 'postcard'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Vado in Italia, a Roma',
      about: 'Say where you are going and where you come from.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'To say where you go or where you are, Italian uses **a** before a **city** and **in** before a **country**, a **region** or a **continent**: *Vado a Roma. Abito in Italia. Vivo in Toscana.* For countries with a plural name, use **negli** (masculine) or **nelle** (feminine): *negli Stati Uniti, nelle Filippine.* To say where you come from, use **di** + a city and **da** + a country: *Sono di Roma. Vengo dall’Italia, dalla Francia, dal Marocco, dagli Stati Uniti.*' },
          { t: 'table', caption: 'Going to and coming from', explain: ['head'], head: ['', 'to, in', 'from'], rows: [
            ['a city', 'a Parigi', 'di Parigi'],
            ['a country (singular)', 'in Francia, in Marocco', 'dalla Francia, dal Marocco'],
            ['a country with a vowel', 'in Italia', 'dall’Italia'],
            ['a plural country', 'negli Stati Uniti', 'dagli Stati Uniti'],
            ['a region', 'in Toscana', 'dalla Toscana'],
          ] },
          { t: 'tip', art: 'owl', md: 'Italian is simple: use **in** for almost every country, singular: *in Francia, in Spagna, in Marocco, in Giappone.* Use **a** only for cities and small islands, and **da** + the article to say where you come from. For *I am from Rome*, you can also say **Sono romano / romana** (a nationality from a city).' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Quest’estate andiamo **in Spagna**.', n: 'A country: *in*.' },
            { s: 'Lei abita **in Canada** da tre anni.', n: 'A country: *in*.' },
            { s: 'Mio cugino vive **negli Stati Uniti**.', n: 'A plural country: *negli*.' },
            { s: '**Sono di** Roma, ma mia madre viene **dal** Marocco.', n: 'City: *di*. Country with article: *dal*.' },
            { s: 'Partono **per l’Italia** in aereo.', n: '*partire per* + destination.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose a, in, negli or nelle.', items: [
            { q: 'Abito ___ Roma.', o: ['a', 'in', 'negli'], why: 'A city: *a*.' },
            { q: 'Andiamo ___ Spagna.', o: ['in', 'a', 'negli'], why: 'A country: *in*.' },
            { q: 'Vive ___ Marocco.', o: ['in', 'a', 'nel'], why: 'A country: *in*.' },
            { q: 'Lavora ___ Stati Uniti.', o: ['negli', 'in', 'a'], why: 'A plural country: *negli*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose di, dal, dalla, dall’ or dagli.', items: [
            { q: 'Viene ___ Portogallo.', o: ['dal', 'di', 'dalla'], why: 'A masculine country: *dal*.' },
            { q: 'Lei viene ___ Italia.', o: ['dall’', 'dalla', 'di'], why: 'Before a vowel: *dall’Italia*.' },
            { q: 'Loro vengono ___ Stati Uniti.', o: ['dagli', 'dai', 'degli'], why: 'A plural country: *dagli*.' },
            { q: 'Veniamo ___ Marsiglia.', o: ['da', 'di', 'dal'], why: 'With a city, use *da* to say where you come from now, or *di* for your origin: *veniamo da Marsiglia*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which word goes with the place?', groups: ['a', 'in', 'negli'], items: [
            { s: 'Roma', g: 0, why: '*a Roma*' },
            { s: 'Francia', g: 1, why: '*in Francia*' },
            { s: 'Stati Uniti', g: 2, why: '*negli Stati Uniti*' },
            { s: 'Parigi', g: 0, why: '*a Parigi*' },
            { s: 'Italia', g: 1, why: '*in Italia*' },
            { s: 'Marocco', g: 1, why: '*in Marocco*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Andiamo in Spagna quest’estate.', why: 'A country: *in*.' },
            { a: 'Lei abita in Canada da tre anni.', why: 'A country: *in*.' },
            { a: 'Lui vive negli Stati Uniti.', why: 'A plural country: *negli*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Vado [a] Francia.', a: ['in'], why: 'A country: *in Francia*.' },
            { s: 'Abita [in] Roma.', a: ['a'], why: 'A city: *a Roma*.' },
            { s: 'Vivono [in gli] Stati Uniti.', a: ['negli'], why: '*in* + *gli* = *negli*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Prenotare una camera',
      about: 'Book a hotel room or a train ticket, and talk about plans.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'To book a hotel room, say **Vorrei prenotare una camera per due persone** (a room for two people) and the dates: *dal 10 al 12 luglio*, *per due notti*. Ask about the details with **La colazione è inclusa?** (Is breakfast included?) and **Quanto costa la camera a notte?** (How much is the room per night?). A room can be **singola** (single) or **doppia** (double), and **matrimoniale** means a double bed.' },
          { t: 'dialogue', title: 'In albergo', lines: [
            { who: 'Karim', s: 'Buongiorno, vorrei prenotare una camera doppia per due notti, dal 10 al 12 luglio.' },
            { who: 'Segretaria', s: 'Sì, abbiamo una camera con bagno. Costa settanta euro a notte.' },
            { who: 'Karim', s: 'La colazione è inclusa?' },
            { who: 'Segretaria', s: 'Sì, dalle sette alle dieci. A che nome, per favore?' },
            { who: 'Karim', s: 'Benali. Grazie mille.' },
          ] },
          { t: 'tip', art: 'owl', md: 'When you arrive at the hotel, you will be asked for a **documento d’identità** (an ID) and for your **nome** and **cognome**. To spell your name, use the Italian alphabet from unit 1. Check-out time is often **entro le dieci o le undici**.' },
        ],
        [
          { t: 'text', md: 'To talk about a plan, Italian often uses the **present** with a time word: *Domani parto. La settimana prossima vado in vacanza.* To say that something is about to happen, use **stare per** + infinitive: *Sto per partire* (I am about to leave). **stare** is irregular: *sto, stai, sta, stiamo, state, stanno.* Time words: **domani** (tomorrow), **la settimana prossima** (next week), **presto** (soon).' },
          { t: 'table', caption: 'stare per + infinitive', quiz: true, head: ['', 'stare', 'example'], rows: [
            ['io', 'sto', 'Sto per partire.'],
            ['tu', 'stai', 'Stai per uscire?'],
            ['lui / lei / Lei', 'sta', 'Sta per piovere.'],
            ['noi', 'stiamo', 'Stiamo per mangiare.'],
            ['voi', 'state', 'State per arrivare?'],
            ['loro', 'stanno', 'Stanno per partire.'],
          ] },
          { t: 'examples', items: [
            { s: 'Domani **prendiamo** il treno.', n: 'A plan in the present.' },
            { s: 'La settimana prossima **vado** in vacanza.', n: 'A plan.' },
            { s: '**Resti** a lungo?', n: 'A question about the plan.' },
            { s: 'Non **parte** domani.', n: 'Negative.' },
            { s: '**Stiamo per** arrivare.', n: 'About to arrive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the right form of stare.', items: [
            { q: 'Io ___ per partire. (stare)', a: ['sto'], why: '*io sto per partire*' },
            { q: 'Noi ___ per mangiare. (stare)', a: ['stiamo'], why: '*noi stiamo per mangiare*' },
            { q: 'Loro ___ per arrivare. (stare)', a: ['stanno'], why: '*loro stanno per arrivare*' },
            { q: 'Tu ___ per uscire? (stare)', a: ['stai'], why: '*tu stai per uscire*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Vorrei prenotare una camera doppia.', why: '*Vorrei* + infinitive.' },
            { a: 'Domani prendiamo il treno.', why: 'A time word and the present for a plan.' },
            { a: 'La colazione è inclusa?', why: 'A question with *è*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the English.', pairs: [
            ['una camera doppia', 'a double room'],
            ['la colazione è inclusa', 'breakfast is included'],
            ['a notte', 'per night'],
            ['andata e ritorno', 'a return ticket'],
            ['la settimana prossima', 'next week'],
          ] },
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'You ask for a room:', o: ['Vorrei prenotare una camera.', 'Vorrei un caffè.', 'Dov’è la stazione?'], why: '*prenotare una camera*' },
            { q: 'You ask if breakfast is included:', o: ['La colazione è inclusa?', 'Per quante persone?', 'A che nome?'], why: '*inclusa* means included.' },
            { q: 'You say you leave tomorrow:', o: ['Domani parto.', 'Ieri sono partito.', 'Parto ieri.'], why: 'The present with a future time word.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Che tempo fa?',
      about: 'Talk about the weather and compare places.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'To ask about the weather, say **Che tempo fa?** The answer uses **fa** + adjective (*Fa bel tempo, fa caldo, fa freddo, fa fresco*), **c’è** + noun (*C’è il sole, c’è vento, c’è nebbia*), **è** + adjective (*È nuvoloso, è sereno*) or a verb (*Piove, nevica*). To talk about the forecast, use the present with **domani**: *Domani piove.* or *Secondo le previsioni, domani nevica.*' },
          { t: 'table', caption: 'The weather', explain: ['head', 'col1'], head: ['Italian', 'English'], rows: [
            ['Fa bel tempo.', 'The weather is nice.'],
            ['Fa brutto tempo.', 'The weather is bad.'],
            ['Fa fresco.', 'It is cool.'],
            ['È nuvoloso.', 'It is cloudy.'],
            ['C’è il temporale.', 'There is a storm.'],
            ['Piove.', 'It is raining.'],
            ['Nevica.', 'It is snowing.'],
            ['Ci sono venti gradi.', 'It is 20 degrees.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Italy, temperatures are given in **gradi** (Celsius): *ci sono venti gradi*. The compass points are **il nord, il sud, l’est, l’ovest**: *Fa più caldo al sud.* People also talk about **le previsioni del tempo** (the weather forecast).' },
        ],
        [
          { t: 'dialogue', title: 'Il tempo', lines: [
            { who: 'Giulia', s: 'Che tempo fa a Torino oggi?' },
            { who: 'Paolo', s: 'Fa bel tempo, ci sono ventidue gradi. E a Roma?' },
            { who: 'Giulia', s: 'È nuvoloso, ma fa altrettanto caldo. Domani piove.' },
            { who: 'Paolo', s: 'Allora restiamo a casa! Fa meno caldo in montagna.' },
          ] },
          { t: 'examples', items: [
            { s: 'In estate **fa caldo** al sud.', n: 'Seasons with *in*.' },
            { s: 'Domani **piove** al nord.', n: 'Forecast with the present.' },
            { s: 'Oggi **fa più caldo di** ieri.', n: 'Comparing days.' },
            { s: 'Fa **meno freddo** a Roma **che** a Milano.', n: 'Comparing places.' },
            { s: 'C’è **molto vento** sulla costa.', n: '*molto* + noun.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'In inverno fa ___.', o: ['freddo', 'bel tempo', 'fresco'], why: 'Winter is cold: *freddo*.' },
            { q: 'Oggi ___ nuvoloso.', o: ['è', 'fa', 'c’è'], why: '*è nuvoloso*' },
            { q: 'Secondo le previsioni, domani ___.', o: ['piove', 'piovo', 'piovete'], why: 'The forecast in the present: *piove*.' },
            { q: 'Fa più caldo ___ sud.', o: ['al', 'a', 'in'], why: '*al sud*' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Compare. Write one sentence.', items: [
            { q: 'Torino: 22 gradi. Roma: 18 gradi. (più caldo)', cue: 'Fa più caldo', a: ['Fa più caldo a Torino che a Roma.'], why: '*più caldo … che* compares two places.' },
            { q: 'Nizza: bel tempo. Parigi: bel tempo. (altrettanto)', cue: 'A Nizza', a: ['A Nizza fa bel tempo come a Parigi.'], why: '*come* for equality.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which season?', groups: ['l’estate', 'l’inverno'], items: [
            { s: 'Fa molto caldo.', g: 0, why: 'Hot weather: summer.' },
            { s: 'Nevica.', g: 1, why: 'Snow: winter.' },
            { s: 'C’è il sole tutti i giorni.', g: 0, why: 'Sunny days: summer.' },
            { s: 'Ci sono meno cinque gradi.', g: 1, why: 'Minus five degrees: winter.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'Si dice «Fa piove».', a: 'f', why: 'Say *Piove*, without *fa*.' },
            { q: 'Si dice «Fa bel tempo» per un giorno di sole.', a: 't', why: '*Fa bel tempo* means the weather is nice.' },
            { q: '«Domani nevica» parla del futuro.', a: 't', why: 'The present can be used for a forecast.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Una conferma e una cartolina',
      about: 'Read a hotel confirmation and a postcard.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Conferma di prenotazione', md: 'Buongiorno signor Benali,\n\nconfermiamo la sua prenotazione: una camera doppia con bagno, dal 10 al 12 luglio, due notti. Prezzo: 70 € a notte, colazione inclusa. Arrivo dalle 15, partenza entro le 11. Per domande, ci scriva a albergo@example.com.\n\nCordiali saluti,\nLa direzione dell’albergo' },
          { t: 'reading', title: 'Una cartolina', md: 'Cara mamma,\n\nsiamo arrivati in Liguria ieri. Fa bel tempo, ma un po’ fresco. Restiamo tre giorni, poi andiamo alle Cinque Terre. Mangiamo molta focaccia! Domani piove, quindi visitiamo il museo.\n\nBaci,\nGiulia e Luca' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'La prenotazione è per due notti.', a: 't', why: '*dal 10 al 12 luglio, due notti*' },
            { q: 'La colazione non è inclusa.', a: 'f', why: '*colazione inclusa*' },
            { q: 'Giulia e Luca sono arrivati in Liguria ieri.', a: 't', why: '*siamo arrivati in Liguria ieri*' },
            { q: 'Oggi piove in Liguria.', a: 'f', why: 'Today the weather is nice: *fa bel tempo*.' },
            { q: 'Hanno già visitato le Cinque Terre.', a: 'ng', why: 'They are going to visit them, but have not yet.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Quanto costa la camera a notte?', o: ['70 €', '170 €', '35 €'], why: '*Prezzo: 70 € a notte*' },
            { q: 'A che ora bisogna lasciare la camera?', o: ['Entro le 11.', 'Entro le 15.', 'Dopo le 15.'], why: '*partenza entro le 11*' },
            { q: 'Che cosa fanno Giulia e Luca domani?', o: ['Visitano il museo.', 'Vanno in spiaggia.', 'Tornano a casa.'], why: '*Domani piove, quindi visitiamo il museo.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the texts.', items: [
            { q: 'La camera è ___ con bagno.', a: ['doppia'], why: '*una camera doppia con bagno*' },
            { q: 'Mangiano molta ___.', a: ['focaccia'], why: '*Mangiamo molta focaccia!*' },
            { q: 'Restano tre ___.', a: ['giorni'], why: '*Restiamo tre giorni.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Abito ___ Roma.', o: ['a', 'in', 'negli'], why: 'A city: *a*.' },
      { q: 'Andiamo ___ Marocco.', o: ['in', 'a', 'nel'], why: 'A country: *in*.' },
      { q: 'Lavora ___ Stati Uniti.', o: ['negli', 'in', 'a'], why: 'A plural country: *negli*.' },
      { q: 'Sto ___ partire.', o: ['per', 'di', 'a'], why: '*stare per* + infinitive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Noi ___ per mangiare. (stare)', a: ['stiamo'], why: '*noi stiamo per*' },
      { q: 'Vorrei prenotare una ___ doppia.', a: ['camera'], why: '*una camera doppia*' },
      { q: 'Oggi ___ bel tempo.', a: ['fa'], why: '*Fa bel tempo.*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the English.', pairs: [
      ['a notte', 'per night'],
      ['la settimana prossima', 'next week'],
      ['la colazione è inclusa', 'breakfast is included'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Domani prendiamo il treno.', why: 'A time word and the present.' },
      { a: 'Fa più caldo al sud.', why: '*più caldo* + place.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Vado [a] Italia.', a: ['in'], why: 'A country: *in Italia*.' },
      { s: 'Abito [in] Roma.', a: ['a'], why: 'A city: *a Roma*.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Which word goes with the place?', groups: ['a', 'in'], items: [
      { s: 'Spagna', g: 1, why: '*in Spagna*' },
      { s: 'Torino', g: 0, why: '*a Torino*' },
    ] },
  ],
};
