// French A2, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'Travel and weather',
  goal: 'Plan a trip, book a hotel and talk about the weather. Learn the prepositions for cities and countries and the near future.',
  art: 'sun',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['countries', 'prepositions', 'booking', 'hotel', 'near future', 'weather', 'seasons', 'postcard'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Je vais en France, au Maroc',
      about: 'Say where you are going and where you come from.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'To say where you go or where you are, French uses a different word before a city and before a country. Before a **city**, use **à**: *Je vais à Paris. J’habite à Lyon.* Before a **feminine country** or a country that starts with a **vowel**, use **en**: *en France, en Italie, en Espagne, en Iran*. Before a **masculine country**, use **au**: *au Maroc, au Portugal, au Canada*. Before a **plural country**, use **aux**: *aux États-Unis*.' },
          { t: 'table', caption: 'Going to and coming from', explain: ['head'], head: ['', 'to, in', 'from'], rows: [
            ['a city', 'à Paris', 'de Paris'],
            ['a feminine country', 'en France', 'de France'],
            ['a country with a vowel', 'en Iran', 'd’Iran'],
            ['a masculine country', 'au Maroc', 'du Maroc'],
            ['a plural country', 'aux États-Unis', 'des États-Unis'],
          ] },
          { t: 'tip', art: 'owl', md: 'Most countries ending in **-e** are feminine: *la France, l’Italie, l’Espagne, l’Allemagne*. Exceptions you need to know: *le Mexique* (masculine). Countries that do not end in **-e** are usually masculine: *le Maroc, le Portugal, le Canada, le Japon, le Brésil*.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Cet été, nous allons **en Espagne**.', n: 'Feminine country: *en*.' },
            { s: 'Elle habite **au Canada** depuis trois ans.', n: 'Masculine country: *au*.' },
            { s: 'Mon cousin vit **aux États-Unis**.', n: 'Plural country: *aux*.' },
            { s: 'Je viens **de Lyon**, mais ma mère vient **du Maroc**.', n: 'City: *de*. Masculine country: *du*.' },
            { s: 'Ils partent **en Italie** en avion.', n: 'Vowel: *en*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose à, en, au or aux.', items: [
            { q: 'J’habite ___ Lyon.', o: ['à', 'en', 'au'], why: 'A city: *à*.' },
            { q: 'Nous allons ___ Espagne.', o: ['en', 'à', 'au'], why: 'Feminine country: *en*.' },
            { q: 'Il vit ___ Maroc.', o: ['au', 'en', 'à'], why: 'Masculine country: *au*.' },
            { q: 'Elle travaille ___ États-Unis.', o: ['aux', 'au', 'en'], why: 'Plural: *aux*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose de, d’, du or des.', items: [
            { q: 'Il vient ___ Portugal.', o: ['du', 'de', 'des'], why: 'Masculine country: *du*.' },
            { q: 'Elle vient ___ Italie.', o: ['d’', 'de', 'du'], why: 'Before a vowel: *d’Italie*.' },
            { q: 'Ils viennent ___ États-Unis.', o: ['des', 'du', 'de'], why: 'Plural country: *des*.' },
            { q: 'Nous venons ___ Marseille.', o: ['de', 'du', 'd’'], why: 'A city: *de*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which word goes with the place?', groups: ['en', 'au', 'aux'], items: [
            { s: 'France', g: 0, why: '*en France*' },
            { s: 'Maroc', g: 1, why: '*au Maroc*' },
            { s: 'États-Unis', g: 2, why: '*aux États-Unis*' },
            { s: 'Italie', g: 0, why: '*en Italie*' },
            { s: 'Canada', g: 1, why: '*au Canada*' },
            { s: 'Espagne', g: 0, why: '*en Espagne*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Nous allons en Espagne cet été.', why: 'Feminine country: *en*.' },
            { a: 'Il habite au Canada depuis deux ans.', why: 'Masculine country: *au*.' },
            { a: 'Elle vient des États-Unis.', why: 'Plural country: *des*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Je vais [à] France.', a: ['en'], why: 'Feminine country: *en France*.' },
            { s: 'Elle habite [en] Maroc.', a: ['au'], why: 'Masculine country: *au Maroc*.' },
            { s: 'Ils viennent [de] États-Unis.', a: ['des'], why: 'Plural: *des États-Unis*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Réserver une chambre',
      about: 'Book a hotel room or a train ticket, and use the near future.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'To book a hotel room, say **Je voudrais réserver une chambre pour deux personnes** (a room for two people) and the dates: *du 10 au 12 juillet*, *pour deux nuits*. Ask about the details with **Est-ce que le petit-déjeuner est compris ?** (Is breakfast included?) and **Combien coûte la chambre par nuit ?** (How much is the room per night?). A room can be **simple** (single) or **double**.' },
          { t: 'dialogue', title: 'À l’hôtel', lines: [
            { who: 'Karim', s: 'Bonjour, je voudrais réserver une chambre double pour deux nuits, du 10 au 12 juillet.' },
            { who: 'Réceptionniste', s: 'Oui, nous avons une chambre avec salle de bains. Elle coûte soixante-dix euros la nuit.' },
            { who: 'Karim', s: 'Le petit-déjeuner est compris ?' },
            { who: 'Réceptionniste', s: 'Oui, de sept heures à dix heures. À quel nom, s’il vous plaît ?' },
            { who: 'Karim', s: 'Benali. Merci beaucoup.' },
          ] },
          { t: 'tip', art: 'owl', md: 'When you arrive at the hotel, you will be asked for a **pièce d’identité** (an ID) and for your **nom** and **prénom**. To spell your name, use the French alphabet from unit 1. The check-out time is often **avant midi**.' },
        ],
        [
          { t: 'text', md: 'To say what you are going to do soon, use **aller** + infinitive. This is the **near future**: *Je vais partir demain. Nous allons réserver une chambre.* It is easy to form because you already know the present of **aller**. In a negative sentence, **ne … pas** goes around **aller**: *Je ne vais pas partir.* Time words: **demain** (tomorrow), **la semaine prochaine** (next week), **bientôt** (soon).' },
          { t: 'table', caption: 'aller + infinitive', quiz: true, head: ['', 'aller', 'example'], rows: [
            ['je', 'vais', 'Je vais réserver.'],
            ['tu', 'vas', 'Tu vas partir ?'],
            ['il / elle / on', 'va', 'Il va pleuvoir.'],
            ['nous', 'allons', 'Nous allons voyager.'],
            ['vous', 'allez', 'Vous allez rester ?'],
            ['ils / elles', 'vont', 'Elles vont arriver.'],
          ] },
          { t: 'examples', items: [
            { s: 'Demain, **nous allons prendre** le train.', n: 'Near future.' },
            { s: 'La semaine prochaine, **je vais partir** en vacances.', n: 'A plan.' },
            { s: '**Tu vas rester** longtemps ?', n: 'A question about the plan.' },
            { s: 'Il **ne va pas** venir.', n: 'Negative: around *va*.' },
            { s: 'Nous **allons arriver** à midi.', n: 'The time of arrival.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the near future.', items: [
            { q: 'Demain, je ___ partir en vacances. (aller)', a: ['vais'], why: '*je vais partir*' },
            { q: 'Nous ___ prendre le train. (aller)', a: ['allons'], why: '*nous allons prendre*' },
            { q: 'Ils ___ réserver une chambre. (aller)', a: ['vont'], why: '*ils vont réserver*' },
            { q: 'Tu ___ rester longtemps ? (aller)', a: ['vas'], why: '*tu vas rester*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Je voudrais réserver une chambre double.', why: '*Je voudrais* + infinitive.' },
            { a: 'Nous allons partir demain matin.', why: '*aller* + infinitive + time.' },
            { a: 'Le petit-déjeuner est compris ?', why: 'A question with *est*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the English.', pairs: [
            ['une chambre double', 'a double room'],
            ['le petit-déjeuner est compris', 'breakfast is included'],
            ['par nuit', 'per night'],
            ['un aller-retour', 'a return ticket'],
            ['la semaine prochaine', 'next week'],
          ] },
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'You ask for a room:', o: ['Je voudrais réserver une chambre.', 'Je voudrais un café.', 'Où est la gare ?'], why: '*réserver une chambre*' },
            { q: 'You ask if breakfast is included:', o: ['Le petit-déjeuner est compris ?', 'Combien de personnes ?', 'À quel nom ?'], why: '*compris* means included.' },
            { q: 'You say you will leave tomorrow:', o: ['Je vais partir demain.', 'Je suis parti hier.', 'Je pars hier.'], why: 'The near future for a plan.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Quel temps fait-il ?',
      about: 'Talk about the weather and compare places.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'To ask about the weather, say **Quel temps fait-il ?** The answer uses **il fait** + adjective (*Il fait beau, il fait chaud, il fait froid, il fait frais*), **il y a** + noun (*Il y a du soleil, il y a des nuages, il y a du vent*) or a verb (*Il pleut, il neige*). To talk about the forecast, use the near future: **Demain, il va pleuvoir.**' },
          { t: 'table', caption: 'The weather', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['Il fait beau.', 'The weather is nice.'],
            ['Il fait mauvais.', 'The weather is bad.'],
            ['Il fait frais.', 'It is cool.'],
            ['Il y a des nuages.', 'It is cloudy.'],
            ['Il y a de l’orage.', 'There is a storm.'],
            ['Il pleut. / Il va pleuvoir.', 'It is raining. / It is going to rain.'],
            ['Il neige.', 'It is snowing.'],
            ['Il fait 20 degrés.', 'It is 20 degrees.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In France, temperatures are given in **degrés** (Celsius). People say *Il fait vingt degrés* and also *Il fait 20°*. In Quebec and Belgium, the same system is used. The compass points are **le nord, le sud, l’est, l’ouest**: *Il fait plus chaud dans le sud.*' },
        ],
        [
          { t: 'dialogue', title: 'Le temps', lines: [
            { who: 'Sophie', s: 'Quel temps fait-il à Lyon aujourd’hui ?' },
            { who: 'Paul', s: 'Il fait beau, vingt-deux degrés. Et à Paris ?' },
            { who: 'Sophie', s: 'Il y a des nuages, mais il fait aussi chaud. Demain, il va pleuvoir.' },
            { who: 'Paul', s: 'Alors on va rester à la maison ! Il fait moins chaud en Bretagne.' },
          ] },
          { t: 'examples', items: [
            { s: 'En été, **il fait chaud** dans le sud.', n: 'Seasons with *en* (but *au printemps*).' },
            { s: 'Demain, **il va pleuvoir** au nord.', n: 'Forecast with the near future.' },
            { s: 'Aujourd’hui, **il fait plus chaud qu’hier**.', n: 'Comparing days.' },
            { s: 'Il fait **moins froid** à Lyon **qu’**à Paris.', n: 'Comparing places.' },
            { s: 'Il y a **beaucoup de vent** sur la côte.', n: '*beaucoup de* + noun.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Il fait ___ en hiver. (cold)', o: ['froid', 'beau', 'frais'], why: 'Winter is cold: *froid*.' },
            { q: 'Il y a ___ nuages.', o: ['des', 'du', 'de la'], why: '*nuages* is plural: *des nuages*.' },
            { q: 'Demain, il ___ pleuvoir.', o: ['va', 'vas', 'vont'], why: '*il va pleuvoir*' },
            { q: 'Il fait plus chaud ___ sud.', o: ['dans le', 'à le', 'en'], why: '*dans le sud*' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Compare. Write one sentence.', items: [
            { q: 'Lyon : 22 degrés. Paris : 18 degrés. (plus chaud)', cue: 'Il fait', a: ['Il fait plus chaud à Lyon qu’à Paris.'], why: '*plus chaud … que* (*qu’* before a vowel).' },
            { q: 'Nice : beau. Paris : beau. (aussi beau)', cue: 'Il fait', a: ['Il fait aussi beau à Nice qu’à Paris.'], why: '*aussi beau … que*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which season?', groups: ['l’été', 'l’hiver'], items: [
            { s: 'Il fait très chaud.', g: 0, why: 'Hot weather: summer.' },
            { s: 'Il neige.', g: 1, why: 'Snow: winter.' },
            { s: 'Il y a du soleil tous les jours.', g: 0, why: 'Sunny days: summer.' },
            { s: 'Il fait moins cinq degrés.', g: 1, why: 'Minus five degrees: winter.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'On dit « Il fait pleut ».', a: 'f', why: 'Say *Il pleut*, without *fait*.' },
            { q: 'On dit « Il fait beau » pour un jour de soleil.', a: 't', why: '*Il fait beau* means the weather is nice.' },
            { q: '« Il va neiger demain » parle du futur.', a: 't', why: 'The near future with *aller*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Une confirmation et une carte postale',
      about: 'Read a hotel confirmation and a postcard.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Confirmation de réservation', md: 'Bonjour Monsieur Benali,\n\nNous confirmons votre réservation : une chambre double avec salle de bains, du 10 au 12 juillet, soit deux nuits. Prix : 70 € par nuit, petit-déjeuner compris. Arrivée à partir de 15 h, départ avant midi. En cas de questions, écrivez-nous à hotel@example.com.\n\nCordialement,\nL’équipe de l’hôtel' },
          { t: 'reading', title: 'Une carte postale', md: 'Chère maman,\n\nNous sommes arrivés en Bretagne hier. Il fait beau, mais un peu frais. Nous allons rester ici trois jours, puis nous allons aller au Mont-Saint-Michel. Nous mangeons beaucoup de crêpes ! Demain, il va pleuvoir, alors nous allons visiter le musée.\n\nGrosses bises,\nSophie et Lucas' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'La réservation est pour deux nuits.', a: 't', why: '*du 10 au 12 juillet, soit deux nuits*' },
            { q: 'Le petit-déjeuner n’est pas compris.', a: 'f', why: '*petit-déjeuner compris*' },
            { q: 'Sophie et Lucas sont arrivés en Bretagne hier.', a: 't', why: '*Nous sommes arrivés en Bretagne hier.*' },
            { q: 'Il pleut aujourd’hui en Bretagne.', a: 'f', why: 'Today the weather is nice: *Il fait beau.*' },
            { q: 'Ils ont visité le Mont-Saint-Michel.', a: 'ng', why: 'They are going to visit it, but have not yet.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Combien coûte la chambre par nuit ?', o: ['70 €', '170 €', '35 €'], why: '*Prix : 70 € par nuit*' },
            { q: 'À quelle heure faut-il quitter la chambre ?', o: ['Avant midi.', 'Avant 15 h.', 'Après 15 h.'], why: '*départ avant midi*' },
            { q: 'Que vont faire Sophie et Lucas demain ?', o: ['Visiter le musée.', 'Aller à la plage.', 'Rentrer à la maison.'], why: '*Demain, il va pleuvoir, alors nous allons visiter le musée.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the texts.', items: [
            { q: 'La chambre est ___ avec salle de bains.', a: ['double'], why: '*une chambre double avec salle de bains*' },
            { q: 'Ils mangent beaucoup de ___.', a: ['crêpes', 'crepes'], why: '*Nous mangeons beaucoup de crêpes !*' },
            { q: 'Ils vont rester ici trois ___.', a: ['jours'], why: '*Nous allons rester ici trois jours.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'J’habite ___ Lyon.', o: ['à', 'en', 'au'], why: 'A city: *à*.' },
      { q: 'Nous allons ___ Maroc.', o: ['au', 'en', 'à'], why: 'Masculine country: *au*.' },
      { q: 'Elle vient ___ États-Unis.', o: ['des', 'du', 'de'], why: 'Plural: *des*.' },
      { q: 'Demain, il ___ pleuvoir.', o: ['va', 'vas', 'vont'], why: '*il va pleuvoir*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Nous allons ___ Espagne.', a: ['en'], why: 'Feminine country: *en*.' },
      { q: 'Je voudrais réserver une ___ double.', a: ['chambre'], why: '*chambre double*' },
      { q: 'Il ___ beau aujourd’hui.', a: ['fait'], why: '*Il fait beau.*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the English.', pairs: [
      ['par nuit', 'per night'],
      ['la semaine prochaine', 'next week'],
      ['le petit-déjeuner est compris', 'breakfast is included'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Nous allons partir demain matin.', why: '*aller* + infinitive + time.' },
      { a: 'Il fait plus chaud dans le sud.', why: '*plus chaud* + place.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Je vais [à] Italie.', a: ['en'], why: 'Feminine country: *en Italie*.' },
      { s: 'Il [fait pleut].', a: ['pleut'], why: 'The weather: *il pleut*, without *fait*.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Which word goes with the place?', groups: ['en', 'au'], items: [
      { s: 'Espagne', g: 0, why: '*en Espagne*' },
      { s: 'Portugal', g: 1, why: '*au Portugal*' },
    ] },
  ],
};
