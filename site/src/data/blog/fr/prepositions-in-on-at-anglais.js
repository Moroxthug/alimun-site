// In, on, at. Vérifié avec Cambridge Dictionary (At, on and in : time ; At, on and in : place ; on time et in time ;
// in the end ; arrive somewhere), British Council LearnEnglish (prépositions de temps ; prépositions de lieu),
// Oxford Learner's Dictionaries (notes sur weekend, hospital et university en anglais britannique et américain) et
// Wikipédia (différences grammaticales entre anglais américain et britannique).
export default {
  key: 'in-on-at',
  site: 'fr',
  slug: 'prepositions-in-on-at-anglais',
  section: 'grammar',
  course: 'English',
  published: '2026-10-31',
  updated: '2026-10-31',
  title: 'In, on, at : les prépositions de temps et de lieu en anglais',
  metaTitle: 'In, on, at : prépositions de temps et de lieu en anglais – Alimun',
  desc: 'Quand utiliser in, on et at pour le temps et le lieu : at 5 o’clock, on Monday, in June, on the bus, in the car, at home, Royaume-Uni et USA, in time et on time.',
  lead: "At the weekend ou on the weekend ? In the bus ou on the bus ? Trois tout petits mots provoquent plus d'erreurs que presque tout le reste en anglais, parce que **le français découpe le même terrain autrement** : à, en, dans et sur ne correspondent pas un à un à at, in et on. Voici comment raisonne l'anglais, avec les schémas qui couvrent la plupart des phrases et les exceptions à apprendre par cœur.",
  photo: 'in-on-at-station-clock',
  sticker: { draw: 'snail', say: 'See you on Monday, at nine, in the café. Lundi, neuf heures !' },
  facts: [
    { n: 3, unit: 'prépositions', text: 'in, on et at font presque tout le travail pour le temps et le lieu en anglais' },
    { label: 'at the weekend', text: 'la forme britannique habituelle, là où l’anglais américain dit on the weekend' },
    { label: 'in hospital', text: 'anglais britannique pour un patient, là où l’anglais américain dit in the hospital' },
    { label: 'next, last, this, every', text: 'les expressions de temps avec ces mots ne prennent ni in, ni on, ni at : next Monday, last summer, every Saturday' },
  ],
  blocks: [
    { take: { title: 'En bref', text: "Pour le temps, utilise **at pour un point** (at 5 o’clock, at noon, at night), **on pour un jour ou une date** (on Monday, on July 4, on my birthday) et **in pour une période plus longue** (in June, in 2026, in the summer, in the morning). Pour le lieu, at est un point ou un endroit où l'on fait quelque chose (at the station, at home), on est une surface, une ligne ou un étage (on the table, on the third floor, on the bus) et in est un espace fermé ou une zone (in the car, in Paris). Avec next, last, this et every, aucune préposition.", draw: 'owl' } },

    { h: 'Le triangle : du plus grand au plus petit' },
    { p: "Beaucoup de profs dessinent in, on et at sous forme de triangle à l'envers. En haut, dans la partie large, il y a **in**, pour les grands espaces et les longues périodes : in Europe, in 2026, in the winter. Au milieu, **on**, pour quelque chose de plus délimité : une rue, une surface, un jour. En bas, à la pointe, **at**, pour un point ou un moment précis : at the corner, at 7:30." },
    { p: "Le triangle est un bon point de départ et il explique une grande partie des phrases de tous les jours. Mais prends-le comme **un guide, pas comme une loi**. L'anglais a aussi des expressions figées qui ne suivent pas le dessin, comme at night, at the weekend et in the morning, et parfois le choix dépend de la façon dont on voit un lieu, pas de sa taille. La suite de l'article montre où le triangle marche et où il faut simplement apprendre l'expression." },
    { table: {
      head: ['', 'Temps', 'Lieu'],
      rows: [
        ['in : grand, long, fermé', 'in June, in 2026, in the summer, in the 1990s, in the morning', 'in Spain, in London, in the kitchen, in the car, in a taxi'],
        ['on : un jour, une surface, une ligne', 'on Monday, on July 4, on my birthday, on Monday morning', 'on the table, on the wall, on Oxford Street, on the bus, on the fifth floor'],
        ['at : un point précis', 'at 5 o’clock, at noon, at lunchtime, at night', 'at the station, at the door, at 15 Craig Street, at home, at work'],
      ],
      note: 'Le triangle couvre les cas les plus courants. Les expressions figées comme at night et in the morning s’apprennent telles quelles.',
    } },

    { h: 'Le temps : at pour un point' },
    { p: "Utilise **at** pour l'heure et les autres moments précis de la journée : at 5 o’clock, at 7:45, at midday, at midnight, at sunrise. C'est notre « à » : à cinq heures, à minuit. On l'emploie aussi avec les repas, at breakfast et at lunchtime, et dans quelques expressions figées : **at night, at the moment, at the same time**." },
    { p: "Attention à at the moment. En français on dit en ce moment, et la traduction mot à mot in this moment sonne bizarre pour un anglophone : la forme naturelle est **I'm busy at the moment**. Dans les questions familières, at disparaît : Cambridge Dictionary donne **What time are you leaving?** comme forme préférée à At what time are you leaving?, qui sonne raide. Dans la réponse, at revient : at six." },
    { examples: [
      ['The meeting starts **at** 9:30.', 'La réunion commence à 9 h 30 : l’heure prend at.'],
      ["Let's talk **at** lunchtime.", 'On en parle à midi, à l’heure du déjeuner : un repas est un point de la journée.'],
      ["I can't sleep **at** night.", 'Je n’arrive pas à dormir la nuit : expression figée.'],
      ["She's busy **at** the moment.", 'Elle est occupée en ce moment : at the moment, pas in this moment.'],
    ] },

    { h: 'Le temps : on pour les jours et les dates' },
    { p: "Utilise **on** pour les jours de la semaine, les dates et les jours spéciaux : on Monday, on July 4, on 30 July, on New Year’s Day, **on my birthday**. Le français n'aide pas ici, puisqu'on dit lundi, le 4 juillet, le jour de mon anniversaire, sans préposition. Le jour au pluriel indique une habitude : the office is closed on Fridays, le bureau est fermé le vendredi, c'est-à-dire tous les vendredis." },
    { p: "Ici le triangle se casse d'une façon intéressante. Morning tout seul prend in, mais un matin précis prend on : **in the morning**, le matin, mais **on Monday morning**, lundi matin, on the morning of the ninth, on a cold winter evening. Dès que la partie de la journée est liée à un jour précis, ou décrite par un adjectif, c'est on qui gagne." },
    { note: { title: 'Les Américains enlèvent souvent on', text: "En anglais américain, la préposition devant un jour disparaît souvent : **She resigned Thursday**, I'll see you Monday. Les Britanniques la gardent en général : she resigned on Thursday. Les deux sont correctes dans leur variété, et on Monday n'est jamais faux.", draw: 'parrot' } },

    { h: 'Le temps : in pour les périodes plus longues' },
    { p: "Utilise **in** pour les mois, les années, les saisons, les décennies et les siècles : in June, **in 2026**, in the spring, in the 1990s, in the nineteenth century. Là, le français tombe juste, avec en juin et en 2026, mais attention aux saisons : au printemps se dit in the spring, pas at the spring. In s'utilise aussi avec les parties de la journée, in the morning, in the afternoon, in the evening, et dans des expressions comme in the past et in the future." },
    { p: "La nuit est l'exception. **At night** veut dire la nuit en général, n'importe quelle nuit : it's not safe to walk there at night. **In the night** désigne en général une nuit précise : I woke up in the night, je me suis réveillé pendant la nuit. In peut aussi dire combien de temps prend une chose ou dans combien de temps elle arrive : she learned the song in five minutes, I'll call you in ten minutes, je t'appelle dans dix minutes." },
    { examples: [
      ['My birthday is **in** June.', 'Mon anniversaire est en juin : le mois prend in.'],
      ['My birthday is **on** June 12.', 'C’est le 12 juin : la date prend on.'],
      ['We moved here **in** 2019.', 'Nous avons emménagé ici en 2019.'],
      ['I work best **in** the morning.', 'Je travaille mieux le matin : n’importe quel matin, in.'],
      ['The flight leaves **on** Friday morning.', 'Le vol part vendredi matin : un matin précis, on.'],
      ['The train leaves **in** ten minutes.', 'Le train part dans dix minutes.'],
    ] },
    { figure: { photo: 'in-on-at-birthday-cake', alt: 'Un gâteau d’anniversaire avec des bougies allumées sur une table', caption: 'Un jour spécial prend on : on my birthday. Le mois prend in : my birthday is in June.' } },

    { h: 'Le week-end : at ou on ?' },
    { p: "C'est la différence la plus connue entre anglais britannique et américain avec ces mots. Au Royaume-Uni, la forme habituelle est **at the weekend**, et pour une habitude at weekends. Aux États-Unis, on dit **on the weekend** et on weekends. Oxford Learner's Dictionaries marque la première comme britannique et la seconde comme surtout nord-américaine." },
    { panels: [
      ['Anglais britannique', "What are you doing at the weekend? The office is closed at weekends. I'll see you at the weekend."],
      ['Anglais américain', "What are you doing on the weekend? The office is closed on weekends. I'll see you on the weekend."],
    ] },
    { p: "Une chose est identique des deux côtés de l'Atlantique : un week-end précis, avec une date, prend on. **The festival is on the last weekend in July**, à Londres comme à New York. Ce qui n'est correct dans aucune des deux variétés, c'est in the weekend, une erreur fréquente chez les apprenants dont la langue met « en » ou « dans » à cet endroit." },

    { h: 'Sans préposition : this, next, last, every' },
    { p: "Les expressions de temps qui commencent par **this, next, last, every**, et aussi each, some, that, one, any et all, ne prennent ni in, ni on, ni at. Every Saturday, next Monday, last summer, this evening. Le français est un bon allié ici, puisqu'on dit aussi lundi prochain, l'été dernier, tous les samedis sans préposition. L'erreur arrive quand on part de la règle anglaise et qu'on ajoute on ou in quand même." },
    { examples: [
      ['He plays football **every** Saturday.', 'Il joue au foot tous les samedis. Pas on every Saturday.'],
      ["Are you free **next** Monday at two o'clock?", 'Tu es libre lundi prochain à deux heures ? Pas on next Monday ; l’heure garde at.'],
      ['**Last** summer we rented a house by the sea.', 'L’été dernier, on a loué une maison au bord de la mer. Pas in last summer.'],
      ["I'm meeting her **this** evening.", 'Je la vois ce soir. Pas in this evening.'],
      ["We'll talk about it **tomorrow** morning.", 'On en parle demain matin : tomorrow, yesterday et today fonctionnent pareil.'],
    ] },
    { note: { title: 'Une vérification rapide', text: "Avant une expression de temps, regarde s'il y a déjà devant un mot comme this, next, last, every, tomorrow ou yesterday. Si oui, **supprime la préposition** : in the morning, mais tomorrow morning ; on Friday, mais next Friday.", draw: 'cat' } },
    { figure: { photo: 'in-on-at-old-town-night', alt: 'Une place de vieille ville la nuit, avec des tables de café, des maisons éclairées et la lune', caption: 'At night veut dire la nuit en général : the square is quiet at night. In the night désigne une nuit précise : I woke up in the night.' } },
    { quote: 'At pour un point, on pour un jour, in pour une période plus longue.' },

    { cta: true },

    { h: 'Le lieu : at un point, on une surface, in un espace' },
    { p: "Le même triangle aide pour les lieux. **In** place quelque chose à l'intérieur d'un espace plus grand : in the box, in the kitchen, in the park, in Sweden. **On** le pose sur une surface ou le long d'une ligne : on the table, on the wall, on the floor, on Oxford Street, on the coast, on the river. **At** marque un point, souvent un endroit où il se passe quelque chose : at the door, at the bus stop, at the entrance, at 15 Craig Street." },
    { p: "Souvent, deux prépositions sont possibles, et le choix change un peu le sens. **She's at the station** dit où elle est, comme point de rendez-vous. She's in the station dit qu'elle est à l'intérieur du bâtiment, peut-être à l'abri de la pluie. Le British Council note que la différence entre les trois tient souvent davantage à l'usage qu'à des règles strictes, et c'est pour ça que les expressions figées comptent autant." },
    { table: {
      head: ['Préposition', 'Emploi', 'Exemples'],
      rows: [
        ['in', 'dans un espace, un bâtiment vu de l’intérieur, une ville ou un pays', 'in the room, in the office, in the park, in Paris, in the mountains, in the sea'],
        ['on', 'une surface, un étage, une rue, une côte ou un fleuve, les transports en commun', 'on the desk, on the third floor, on Main Street, on the east coast, on the train'],
        ['at', 'un point, une adresse, un lieu d’activité, un événement', 'at the door, at 12 Park Road, at the supermarket, at work, at a party'],
      ],
      note: 'Les villes et les pays prennent in : in Tokyo, in Brazil. Notre « à Paris » devient in Paris, pas at Paris.',
    } },

    { h3: 'On the bus, in the car' },
    { p: "Avec les moyens de transport, le triangle n'aide plus. Les grands véhicules dans lesquels on peut marcher, presque toujours des transports en commun, prennent **on** : on the bus, on the train, on a plane, on the tram, on a ship. Les petits véhicules où l'on est assis à l'intérieur prennent **in** : in a car, in a taxi. La règle pratique : si tu peux te lever et marcher dedans, tu es on. Notre « je suis dans le bus » devient donc I'm on the bus." },
    { p: "Pour dire comment tu voyages, et non où tu es, l'anglais utilise **by** sans article : by bus, by train, by car, by plane, comme notre en bus, en train, en voiture. I was on the train when she phoned, j'étais dans le train quand elle a appelé, mais I went to Rome by train, je suis allé à Rome en train. À pied fait exception : **on foot**, pas by foot." },
    { figure: { photo: 'in-on-at-airport-escalators', alt: 'Des voyageurs sur les escalators d’un aéroport, l’un d’eux attendant avec sa valise', caption: "À l'aéroport, tu es at the airport ; quelques minutes plus tard, tu es on the plane, et à l'arrivée in a taxi." } },

    { h3: 'Étages, bâtiments et adresses' },
    { p: "Les étages prennent **on** : they live on the fifteenth floor, my office is on the third floor. Notre au troisième étage pousse vers at the third floor, qui est faux. Une adresse précise prend at, une rue prend on, et un bâtiment peut prendre at ou in selon que tu parles du lieu ou de l'intérieur : **I'll meet you at the museum**, on se retrouve au musée, mais it's warm in the museum, il fait chaud dans le musée." },
    { p: "Le verbe arrive a son propre schéma, et c'est un piège classique pour les francophones. On dit **arrive at** pour un bâtiment ou un lieu restreint, comme the hotel, the airport ou the station, et **arrive in** pour une ville ou un pays : we arrived at the hotel just after ten, they arrived in Tokyo on Wednesday. Avec home, here et there, arrive ne prend pas de préposition : we arrived home late. Arrive to, calqué sur arriver à, est faux dans tous les cas, et arrived at Paris aussi." },
    { figure: { photo: 'in-on-at-tokyo-platform', alt: 'Une personne qui tire une valise rouge le long d’un quai de gare à Tokyo', caption: 'On arrive at une gare mais in une ville : we arrived at the station at six, we arrived in Tokyo on Wednesday.' } },

    { h3: 'At home, at work, at university' },
    { p: "Un groupe de lieux du quotidien prend **at** sans article quand on pense à l'activité plutôt qu'au bâtiment : at home, at work, at school, at university, at college. Ça colle assez bien à notre à la maison, au travail, à l'école, à la fac. Même chose pour les événements et les endroits où l'on reçoit un service : at a party, at the cinema, at the doctor's, at the hairdresser's, chez le coiffeur." },
    { p: "Là, anglais britannique et américain se séparent de nouveau. L'anglais britannique dit qu'un patient est **in hospital** et qu'un étudiant est at university, sans article. L'anglais américain dit **in the hospital**, et les étudiants sont in college. Notre à l'hôpital ne se traduit donc pas par at hospital. Oxford Learner's Dictionaries précise qu'en anglais américain university ne s'emploie pas ainsi : un Américain dit my son is in college là où un Britannique dirait he's at university." },
    { panels: [
      ['Anglais britannique', "She spent two weeks in hospital. Both their children are at university. I'll see you at the weekend."],
      ['Anglais américain', "She spent two weeks in the hospital. Both their children are in college. I'll see you on the weekend."],
    ] },

    { h: 'In time ou on time ?' },
    { p: "Ils se ressemblent beaucoup mais ne veulent pas dire la même chose. **On time**, c'est notre à l'heure : au moment prévu, ni en avance ni en retard, avec les horaires et les programmes. The trains are usually on time, the meeting never starts on time. Right on time, ou en anglais britannique dead on time, renforce l'idée." },
    { p: "**In time**, c'est notre à temps : assez tôt, avec le temps de faire quelque chose. Il est souvent suivi de for et d'un nom, ou de to et d'un verbe : we'll arrive in time for lunch, on arrivera à temps pour le déjeuner ; I got home in time to see the match. Just in time veut dire juste à temps. Cambridge Dictionary donne une paire très claire : the stadium must be completed on time, dans les délais prévus, ou in time for the Olympics, avant le début des Jeux." },
    { examples: [
      ['The flight landed right **on time**.', 'Le vol a atterri pile à l’heure.'],
      ['We got there **in time** for dinner.', 'Nous sommes arrivés à temps pour le dîner.'],
      ["You're **just in time**. We're about to start.", 'Tu arrives juste à temps, on va commencer.'],
    ] },

    { h: 'At the end ou in the end ?' },
    { p: "Ici le français réunit deux expressions anglaises sous à la fin. **At the end** est le point où quelque chose se termine, et il est souvent suivi de of : at the end of the film, at the end of the month, at the end of the street. **In the end** veut dire finalement, après un long processus, beaucoup de changements ou beaucoup de discussions : we looked at three apartments, and in the end we took the first one." },
    { p: "L'erreur à éviter, c'est in the end of. Cambridge Dictionary la signale explicitement : **at the end of the film, everyone was crying**, jamais in the end of the film. Une paire voisine est at the beginning, le point de départ, et in the beginning, qui oppose en général une première phase à ce qui a suivi : in the beginning nobody understood, au début personne ne comprenait, puis tout est devenu plus clair." },
    { examples: [
      ['Pay **at the end of** the month.', 'Paie à la fin du mois : le point où le mois se termine.'],
      ['We argued for hours, but **in the end** we agreed.', 'On a discuté pendant des heures, mais finalement on s’est mis d’accord.'],
      ['**At the beginning of** every lesson, we review the homework.', 'Au début de chaque cours, on revoit les devoirs.'],
    ] },

    { h: 'Pourquoi le français te joue des tours' },
    { p: "Les erreurs avec ces mots ne sont pas dues au hasard. Elles viennent de la traduction, parce que **le français répartit l'espace avec d'autres prépositions** : à, en, dans, sur, chez. Quand une de nos prépositions fait le travail de deux ou trois prépositions anglaises, le choix anglais semble arbitraire, et on finit par traduire mot à mot." },
    { h3: 'À, dans et en ne sont pas at, in et on' },
    { p: "Notre **à** couvre des cas qui prennent en anglais des prépositions différentes : à Paris devient in Paris, à la maison at home, à cinq heures at five, au troisième étage on the third floor. Notre **dans** fait pareil : dans la voiture reste in the car, mais dans le bus devient on the bus et dans le train on the train. Et pour les jours, on n'utilise pas de préposition du tout, lundi, le jour de mon anniversaire, donc on Monday et on my birthday n'ont pas de modèle en français." },
    { p: "Les autres locuteurs de langues romanes ont des difficultés proches, pour des raisons un peu différentes. L'espagnol **en** et le portugais **em** couvrent presque tout in, on et at pour le lieu, ce qui donne in the table ou in the bus. L'italien a fonctionne comme notre à et donne at Rome. Si tu travailles dans une équipe internationale, tu entendras ces erreurs partout, et tu sais maintenant d'où elles viennent." },

    { h: 'Erreurs fréquentes' },
    { p: "Voici les faux pas que les profs entendent le plus souvent chez les francophones, et chacun enfreint un schéma de cet article." },
    { mistakes: [
      ['I was born on 1998.', 'I was born **in** 1998.', 'Les années prennent in. On est pour une date : I was born on May 3, 1998.'],
      ['See you in Monday.', 'See you **on** Monday.', 'Les jours de la semaine prennent on.'],
      ["We'll meet on next Friday.", "We'll meet **next** Friday.", 'Next, last, this et every ne prennent pas de préposition.'],
      ['What do you do in the weekend?', 'What do you do **at the weekend**? (UK) / **on the weekend**? (US)', 'In the weekend ne s’emploie dans aucune des deux variétés.'],
      ['I live at Paris.', 'I live **in** Paris.', 'Les villes et les pays prennent in, même si on dit à Paris.'],
      ['Our office is at the third floor.', 'Our office is **on** the third floor.', 'Les étages prennent on, pas notre au troisième étage.'],
      ["I'm in the bus.", "I'm **on** the bus.", 'Bus, trains et avions prennent on, même si on dit dans le bus.'],
      ['We arrived to London at 6.', 'We arrived **in** London at 6.', 'Arrive in pour une ville ou un pays, arrive at pour un bâtiment. Jamais arrive to.'],
      ["I'm very busy in this moment.", "I'm very busy **at the moment**.", 'En ce moment se dit at the moment.'],
      ['In the end of the film, they get married.', '**At the end of** the film, they get married.', 'At the end of est le point final ; in the end veut dire finalement.'],
    ] },

    { h: 'Comment rendre le bon choix automatique' },
    { p: "Avec les prépositions, le problème est rarement de connaître la règle. Presque tout le monde sait réciter at pour l'heure et on pour les jours, puis dit in Monday dans une conversation rapide. **Ce qui règle le problème, c'est d'entendre et d'utiliser des expressions entières** jusqu'à ce qu'elles sonnent normales : on the bus, at the weekend, in the morning, next Friday. Apprends la préposition avec son nom, jamais toute seule." },
    { p: "C'est pour ça que la pratique orale régulière aide plus qu'une page de règles de plus. Dans des cours en direct avec un prof et le même petit groupe, tu parles de ta semaine, de tes projets et de l'endroit où sont les choses, et les mêmes expressions reviennent sans cesse. Après chaque cours, **les flashcards avec les mots de tes cours** te permettent de réviser ces expressions sous leur forme complète, préposition comprise." },
    { p: "Quand tu écris, vérifie d'abord les expressions de temps. Repère chaque this, next, last et every, et supprime la préposition devant. Puis vérifie chaque jour, date, mois et année avec le triangle. Quelques semaines avec cette habitude éliminent la plupart des erreurs du tableau ci-dessus, et les expressions figées commencent à venir toutes seules." },
  ],
  quiz: [
    { q: 'The concert starts ___ 8 p.m.', options: ['in', 'on', 'at', 'aucune préposition'], a: 2, why: 'L’heure prend at : at 8 p.m.' },
    { q: 'My grandmother was born ___ 1952.', options: ['at', 'in', 'on', 'aucune préposition'], a: 1, why: 'Les années prennent in : in 1952.' },
    { q: 'I have an interview ___ Tuesday morning.', options: ['on', 'in', 'at', 'by'], a: 0, why: 'Un matin précis prend on, même si in the morning prend in.' },
    { q: "Let's meet ___ next Saturday.", options: ['on', 'at', 'in', 'aucune préposition'], a: 3, why: 'Les expressions avec next, last, this et every ne prennent pas de préposition : next Saturday.' },
    { q: 'Quelle phrase est en anglais britannique ?', options: ["I'll see you on the weekend.", "I'll see you at the weekend.", "I'll see you in the weekend.", "I'll see you by the weekend."], a: 1, why: 'At the weekend est britannique, on the weekend américain. In the weekend ne s’emploie pas.' },
    { q: 'Sorry, I can’t talk now. I’m ___ the train.', options: ['in', 'at', 'on', 'by'], a: 2, why: 'Trains, bus et avions prennent on.' },
    { q: 'Le bus est parti à 7 h 15 pile, comme prévu. Il est parti ___.', options: ['in time', 'on time', 'at time', 'in the time'], a: 1, why: 'On time veut dire à l’heure, au moment prévu.' },
    { q: 'We looked at many apartments, and ___ we chose the first one.', options: ['at the end', 'in the end', 'on the end', 'at end'], a: 1, why: 'In the end veut dire finalement, après un long processus.' },
  ],
  faq: [
    ['On dit at the weekend ou on the weekend ?', 'Les deux sont correctes. At the weekend est la forme britannique habituelle, on the weekend la forme américaine. In the weekend ne s’emploie dans aucune des deux.'],
    ['Pourquoi in the morning mais on Monday morning ?', 'In va avec les parties de la journée en général. Quand la partie de la journée appartient à un jour précis, ou qu’elle est décrite par un adjectif, elle prend on : on Monday morning, on a cold evening.'],
    ['Faut-il une préposition devant next week ou last year ?', 'Non. Les expressions avec next, last, this, every, each, some et all ne prennent ni in, ni on, ni at : next week, last year, this morning, every day. Comme en français : la semaine prochaine, l’année dernière.'],
    ['On dit in the bus ou on the bus ?', 'On the bus. Bus, trains, avions et bateaux prennent on ; voitures et taxis prennent in. Pour dire comment tu voyages, utilise by : by bus, by car, notre en bus, en voiture.'],
    ['Quelle différence entre in time et on time ?', 'On time veut dire à l’heure, au moment prévu. In time veut dire à temps, assez tôt pour faire quelque chose, souvent avec for ou to : in time for dinner, in time to catch the train.'],
  ],
  related: ['present-perfect', 'phrasal-verbs', 'cefr-english'],
  sources: [
    ['Cambridge Dictionary : At, on and in (time)', 'https://dictionary.cambridge.org/grammar/british-grammar/at-on-and-in-time'],
    ['Cambridge Dictionary : At, on and in (place)', 'https://dictionary.cambridge.org/grammar/british-grammar/at-on-and-in-place'],
    ['British Council LearnEnglish : prépositions de temps', 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2-grammar/prepositions-of-time-at-in-on'],
    ['British Council LearnEnglish : prépositions de lieu', 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/prepositions-place'],
    ['Oxford Learner’s Dictionaries : weekend', 'https://www.oxfordlearnersdictionaries.com/definition/english/weekend_1'],
    ['Wikipedia: American and British English grammatical differences', 'https://en.wikipedia.org/wiki/American_and_British_English_grammatical_differences'],
  ],
};
