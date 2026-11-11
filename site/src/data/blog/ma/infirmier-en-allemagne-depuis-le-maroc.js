// Infirmier en Allemagne avec un diplôme marocain. Vérifié le 11 novembre 2026 sur : la loi sur les professions de soins
// (PflBG § 1 titres Pflegefachfrau/Pflegefachmann soumis à autorisation, § 2 conditions dont l'allemand, § 40 équivalence des
// formations hors UE, examen de connaissances ou stage d'adaptation de 3 ans au plus, au choix du candidat) et son règlement
// d'examen (PflAPrV § 45 : examen de connaissances oral de 45 à 60 min et pratique de 2 à 4 situations de soins de 120 min
// au plus chacune, une seule reprise) sur gesetze-im-internet.de ; la loi sur le séjour (AufenthG § 2 : A2, B1, B2 ;
// § 16d al. 1, 3 et 4 : durées, 20 heures, accords de placement) ; anerkennung-in-deutschland.de (Recognition Finder, infirmier
// en Rhénanie-du-Nord-Westphalie : Bezirksregierung Münster, deux étapes, B2 par certificat ou examen de langue de la
// Pflegekammer NRW, preuve possible plus tard, demande depuis l'étranger, accusé de réception sous un mois, décision sous
// 4 mois, frais de 277,50 € au plus) ; rabat.diplo.de (visa national, visa de mesure de reconnaissance, visa de partenariat de
// reconnaissance : A2 en général, B1 pour les mesures dans la santé, 1 048 € bruts ou 1 091 € nets, liste d'attente, portail en
// ligne, 75 € en espèces en MAD, délais) ; telc.net (telc Deutsch B1·B2 Pflege : parties et durées, pas d'examen partiel) ;
// arbeitsagentur.de (Triple Win : Tunisie, Bosnie-Herzégovine, Philippines, Indonésie, Kerala ; le Maroc n'est pas cité) et
// giz.de (article Triple Win : Inde, Indonésie, Philippines, Tunisie). Non retenu faute de source officielle ouverte : accord de
// placement Maroc pour les soins, liste officielle des certificats acceptés par chaque Land, tarifs telc au Maroc, durée moyenne
// réelle des procédures, salaires des infirmiers.
export default {
  key: 'german-for-nurses',
  site: 'ma',
  slug: 'infirmier-en-allemagne-depuis-le-maroc',
  section: 'abroad',
  course: 'German',
  published: '2026-11-11',
  updated: '2026-11-11',
  title: "Infirmier en Allemagne avec un diplôme marocain : reconnaissance, allemand B2 et visa",
  metaTitle: "Infirmier en Allemagne depuis le Maroc : diplôme et B2 – Alimun",
  desc: "Reconnaissance du diplôme d'infirmier marocain, allemand B2, examen de connaissances, visa à Rabat et Triple Win : le parcours vérifié et expliqué.",
  lead: "Un infirmier ou une infirmière formé au Maroc peut exercer en Allemagne, mais seulement après avoir obtenu l'autorisation de porter le titre de Pflegefachfrau ou Pflegefachmann. Cette autorisation repose sur deux piliers : **un diplôme reconnu équivalent** et un allemand suffisant pour soigner, en pratique le niveau B2. Ce guide détaille chaque étape, du dossier de reconnaissance au visa déposé à Rabat.",
  photo: 'german-for-nurses-ma-consultation',
  sticker: { draw: 'suitcase', say: "Blouse, stéthoscope et certificat B2." },
  facts: [
    { label: 'B2', text: "le niveau d'allemand demandé pour porter le titre d'infirmier, dans l'exemple de la Rhénanie-du-Nord-Westphalie" },
    { n: 4, unit: 'mois', text: "le délai maximal de décision une fois le dossier de reconnaissance complet, sauf prolongation dans certains cas" },
    { n: 3, unit: 'ans', text: "la durée maximale d'un stage d'adaptation, l'une des deux mesures de compensation prévues par la loi" },
    { label: 'B1', text: "le niveau que l'ambassade à Rabat demande en général pour une mesure de qualification dans la santé" },
  ],
  blocks: [
    { take: { title: 'En bref', text: "En Allemagne, le titre de Pflegefachfrau ou Pflegefachmann est protégé : il faut une autorisation de l'autorité du Land. Votre diplôme marocain est comparé à la formation allemande ; s'il y a des différences importantes, vous les comblez par **un examen de connaissances ou un stage d'adaptation**, au choix. L'autorisation exige aussi l'allemand nécessaire au métier, soit le B2 dans l'exemple officiel de la Rhénanie-du-Nord-Westphalie. Pour partir avant la reconnaissance complète, l'ambassade à Rabat propose le visa de mesure de reconnaissance et le visa de partenariat de reconnaissance, avec **en général le B1 pour les mesures dans la santé**. Le Maroc ne figure pas aujourd'hui parmi les pays du programme Triple Win pour les infirmiers.", draw: 'owl' } },

    { h: 'Un titre protégé, et deux conditions à remplir' },
    { p: "Au Maroc, vous êtes infirmier dès l'obtention de votre diplôme. En Allemagne, la loi sur les professions de soins (Pflegeberufegesetz) dit autre chose : quiconque veut porter le titre de Pflegefachfrau ou de Pflegefachmann **a besoin d'une autorisation**. Sans elle, vous pouvez travailler dans un établissement de soins, mais pas comme infirmier diplômé, avec les responsabilités et le salaire qui vont avec." },
    { p: "L'article 2 de cette loi fixe les conditions de l'autorisation. Il faut une formation reconnue, ne pas avoir eu de comportement qui rendrait la personne indigne de confiance, être apte à exercer sur le plan de la santé et **disposer des connaissances de la langue allemande nécessaires à l'exercice du métier**. Pour un candidat marocain, les deux premières lignes de ce parcours sont donc claires : faire reconnaître le diplôme, et prouver son allemand." },
    { p: "Ces deux démarches ne se font pas l'une après l'autre. Vous pouvez déposer le dossier de reconnaissance sans attendre votre certificat de langue, et apprendre l'allemand pendant que l'autorité examine votre formation. C'est le meilleur moyen de **ne pas perdre de mois inutiles**. Si vous cherchez une vue d'ensemble des visas de travail depuis le Maroc, toutes professions confondues, notre guide sur le travail en Allemagne depuis le Maroc les présente ; ici, nous nous concentrons sur les soins infirmiers." },

    { h: "La reconnaissance du diplôme marocain, étape par étape" },
    { p: "La reconnaissance relève des Länder, pas de l'État fédéral. C'est donc **le Land où vous voulez travailler** qui décide, et chacun a son autorité compétente. Le portail officiel anerkennung-in-deutschland.de propose le Recognition Finder : vous indiquez la profession « infirmier » et la ville visée, et l'outil vous donne l'autorité, la liste des documents, les frais et les délais. Les informations qui suivent viennent de l'exemple publié pour Düsseldorf, en Rhénanie-du-Nord-Westphalie, où l'autorité compétente est le service central de reconnaissance des professions de santé de la Bezirksregierung Münster." },
    { p: "La procédure se déroule en deux temps. L'autorité vérifie d'abord **l'équivalence de votre formation** avec la formation allemande ; une fois l'équivalence établie, vous demandez l'autorisation de porter le titre. Le portail précise que vous pouvez faire la demande sans vivre en Allemagne, en ligne, en personne ou par courrier. Si vous l'envoyez par la poste, n'envoyez pas vos originaux." },
    { p: "Le dossier comprend notamment une pièce d'identité, un acte de naissance, un curriculum vitae en allemand, les preuves de votre qualification, un certificat de langue et une déclaration indiquant que vous comptez travailler en Allemagne. Les actes et diplômes doivent être accompagnés d'une **traduction en allemand**. Le certificat de bonne conduite et le certificat médical viennent plus tard, et ils ne doivent pas avoir plus de trois mois au moment où vous les remettez." },
    { table: {
      head: ['Étape', 'Ce que dit l’exemple officiel (Rhénanie-du-Nord-Westphalie)'],
      rows: [
        ['Dépôt', 'Possible depuis le Maroc, en ligne, en personne ou par courrier'],
        ['Accusé de réception', 'Au plus tard un mois après réception de la demande'],
        ['Décision', 'Au plus tard quatre mois après le dossier complet, prolongation possible dans certains cas'],
        ['Frais de la procédure', '277,50 € au plus, hors traductions, expertises et mesures de compensation'],
        ['Allemand', 'B2, prouvé par un certificat ou par l’examen de langue de la chambre des soins, éventuellement plus tard'],
      ],
      note: "Source : Recognition Finder d'anerkennung-in-deutschland.de, profession d'infirmier à Düsseldorf. Les autres Länder ont leurs propres autorités, frais et listes de documents : vérifiez la page de votre ville.",
    } },
    { figure: { photo: 'german-for-nurses-ma-paperwork', alt: "Un infirmier en tenue bleue assis au sol près d'une grande fenêtre, qui lit un document sur un porte-bloc", caption: "Diplôme, relevés de notes, traductions en allemand : le dossier de reconnaissance demande de la rigueur, mais il peut partir du Maroc." } },

    { h3: "Ce que l'autorité compare" },
    { p: "Pour les formations obtenues hors de l'Union européenne, l'article 40 de la loi sur les professions de soins pose la règle : la formation est équivalente **sauf s'il existe des différences essentielles** avec la formation allemande. Ces différences portent sur les matières ou les domaines de pratique qui s'écartent nettement du programme allemand, ou sur des activités réservées aux infirmiers en Allemagne qui ne font pas partie du métier dans votre pays." },
    { p: "Votre expérience compte. La loi prévoit que les connaissances acquises en exerçant, à temps plein ou à temps partiel, peuvent combler ces différences, à condition qu'elles soient formellement reconnues par l'organisme compétent. Gardez donc **attestations de travail, descriptions de poste et formations continues** : elles peuvent réduire, voire supprimer, ce qu'il vous restera à compléter." },

    { h: "Examen de connaissances ou stage d'adaptation" },
    { p: "Si l'autorité conclut à des différences essentielles, elle vous remet une décision qui les énumère, souvent appelée avis de déficit. Vous devez alors prouver que vous avez des connaissances équivalentes, par l'une de deux voies que la loi met **à votre libre choix** : l'examen de connaissances (Kenntnisprüfung) ou le stage d'adaptation (Anpassungslehrgang)." },
    { panels: [
      ["Examen de connaissances", "Un examen qui porte sur le contenu de l'examen d'État allemand. Il comprend une partie orale, autour d'un cas complexe touchant au moins trois domaines de compétences, de 45 à 60 minutes, et une partie pratique avec deux à quatre situations de soins, de 120 minutes au plus chacune, en général auprès de vrais patients. Chaque partie ratée peut être repassée une fois."],
      ["Stage d'adaptation", "Une période de formation et de pratique en Allemagne, de trois ans au plus, qui se termine par un examen sur son contenu. Elle convient si vous préférez apprendre les méthodes allemandes au fil des semaines plutôt que de tout jouer sur un examen. Sa durée réelle dépend des différences relevées dans votre dossier."],
    ] },
    { p: "Le choix dépend de votre profil. Un infirmier expérimenté, à l'aise en allemand et habitué aux protocoles, peut viser l'examen pour gagner du temps. Un jeune diplômé ou une personne dont l'allemand est encore fragile trouvera souvent **le stage plus progressif**. Dans les deux cas, vous serez évalué en allemand, devant deux examinateurs, sur des situations de soins concrètes : la langue n'est pas un détail de la mesure de compensation, elle en est le cœur." },
    { note: { title: "Une seule reprise", text: "Le règlement d'examen ne permet de repasser qu'une seule fois la partie orale et chaque situation de soins ratée de la partie pratique. **Ne vous présentez pas trop tôt** : mieux vaut quelques semaines de préparation en plus qu'un échec définitif sur une partie.", draw: 'snail' } },

    { h: "Le niveau d'allemand : pourquoi le B2" },
    { p: "La loi sur les professions de soins ne cite pas de niveau : elle parle des connaissances nécessaires au métier. Ce sont les autorités des Länder qui fixent le niveau. Dans l'exemple de la Rhénanie-du-Nord-Westphalie, c'est **le B2 du Cadre européen commun de référence**, prouvé soit par un certificat de langue, soit par l'examen de langue spécialisée en soins infirmiers de la chambre des soins du Land (Pflegekammer). Vérifiez toujours, auprès de votre autorité, quels certificats elle accepte." },
    { p: "Le B2 correspond à ce que la loi sur le séjour appelle de « bonnes » connaissances d'allemand. Le même texte rattache l'A2 au terme hinreichend et le B1 au terme ausreichend, deux mots que l'on traduit tous deux par « suffisant ». Ces mots reviennent dans les pages de visa, et il est utile de les reconnaître : **ausreichend veut dire B1**, gut veut dire B2." },
    { table: {
      head: ['Terme allemand', 'Niveau', 'Où vous le rencontrez'],
      rows: [
        ['hinreichende Deutschkenntnisse', 'A2', 'Visa de partenariat de reconnaissance et de mesure de reconnaissance, en règle générale'],
        ['ausreichende Deutschkenntnisse', 'B1', 'Mesures de qualification dans la santé, selon l’ambassade à Rabat'],
        ['gute Deutschkenntnisse', 'B2', 'Autorisation de porter le titre d’infirmier, dans l’exemple de Rhénanie-du-Nord-Westphalie'],
      ],
      note: "Définitions de l'article 2 de la loi sur le séjour (AufenthG). Les niveaux exigés pour chaque démarche sont repris des pages de l'ambassade à Rabat et d'anerkennung-in-deutschland.de.",
    } },

    { h3: 'telc Deutsch B1·B2 Pflege, un examen pensé pour les soins' },
    { p: "Parmi les certificats possibles, l'organisme telc propose un examen conçu pour les soignants : le telc Deutsch B1·B2 Pflege. Selon telc, ses textes et ses situations reflètent **le quotidien de travail des infirmiers**, et il atteste un niveau B1 et B2 en compréhension écrite et orale, en expression écrite et orale." },
    { p: "L'épreuve écrite enchaîne, sans pause, la compréhension orale (25 minutes), la compréhension écrite (60 minutes), des exercices d'éléments de langue et une production écrite (30 minutes). L'oral se passe à deux candidats, en trois parties d'environ 16 minutes, après 20 minutes de préparation. Point important : il **ne peut pas être passé par modules**, il faut présenter l'examen complet. Avant de choisir cet examen plutôt qu'un certificat général, confirmez auprès de votre autorité de reconnaissance qu'elle l'accepte pour votre Land." },
    { figure: { photo: 'german-for-nurses-ma-patient-talk', alt: "Un patient âgé qui décrit ses symptômes avec les mains face à une soignante masquée qui tient un porte-bloc", caption: "Écouter un patient décrire sa douleur, poser la bonne question, noter l'essentiel : c'est exactement ce que mesure un examen d'allemand pour les soins." } },

    { h: "Partir avant la reconnaissance complète : les visas possibles" },
    { p: "Si votre diplôme est reconnu sans réserve et que vous avez votre autorisation, vous demandez un visa de travailleur qualifié comme n'importe quel professionnel. Mais pour beaucoup d'infirmiers marocains, la reconnaissance n'est que partielle au départ. La loi sur le séjour prévoit alors, à son article 16d, **des titres de séjour pour finir la reconnaissance en Allemagne**. L'ambassade d'Allemagne à Rabat en présente deux sur ses pages." },
    { h3: 'Le visa de mesure de reconnaissance' },
    { p: "Ce visa s'adresse à ceux qui ont déjà reçu leur avis de déficit, que vous pouvez obtenir avant d'entrer en Allemagne et que vous joignez à la demande. Vous partez pour suivre la mesure qui comble vos lacunes : une formation surtout théorique, avec une lettre d'invitation ou d'inscription, ou une formation surtout pratique, avec la déclaration d'emploi de l'employeur, le plan de formation et un contrat qui mentionne le salaire. L'ambassade demande en général l'A2, mais précise que **les mesures dans la santé exigent en général au moins le B1**." },
    { p: "Il faut aussi prouver vos ressources. La page de l'ambassade cite 1 048 € bruts par mois pour une formation professionnelle, et au moins 1 091 € nets par mois, par exemple sur un compte bloqué, si vous ne travaillez pas pendant la mesure. Selon la loi, le titre est délivré pour 24 mois au plus, prolongeable jusqu'à **trois ans au total**, et il permet un emploi sans lien avec la mesure jusqu'à 20 heures par semaine. La demande passe par la liste d'attente de l'ambassade ; prévoyez ensuite environ trois mois de traitement." },
    { h3: 'Le partenariat de reconnaissance' },
    { p: "Le partenariat de reconnaissance, introduit à l'article 16d, alinéa 3, de la loi sur le séjour, inverse l'ordre habituel : **vous commencez à travailler, puis vous faites reconnaître votre diplôme** en Allemagne, avec l'aide de votre employeur. Il faut une formation d'au moins deux ans reconnue par l'État marocain ou un diplôme d'études supérieures, une offre d'emploi et un accord écrit avec l'employeur. Cet accord vous engage à lancer la reconnaissance rapidement après l'arrivée, et l'employeur s'engage à vous laisser suivre les mesures nécessaires ; les déficits doivent pouvoir être comblés en trois ans au plus." },
    { p: "Pour les professions réglementées comme les soins, l'ambassade précise qu'un emploi non qualifié peut être exercé pendant la reconnaissance, si l'employeur indique qu'il est lié par une convention collective ou qu'il s'agit d'un établissement de soins agréé. Le dossier comprend une attestation de la ZAB, l'office allemand d'évaluation des diplômes étrangers, ou une preuve numérique équivalente que votre formation est reconnue par l'État. La demande se dépose **en ligne sur le portail digital.diplo.de/visa**, qui signale à l'avance si le dossier est complet ; comptez environ trois mois de traitement, ou environ trois semaines en procédure accélérée engagée par l'employeur." },

    { cta: true },

    { h: "Les frais, le certificat et le rendez-vous à Rabat" },
    { p: "Quelle que soit la catégorie, le visa national coûte 75 €, ou 37,50 € au tarif réduit, à payer **en espèces et en dirhams** au taux du jour, plus les frais de service de TLScontact si vous passez par ce prestataire. Les documents qui ne sont pas en allemand, en anglais ou en français doivent être traduits. Pour l'allemand, l'ambassade accepte les certificats des organismes reconnus, notamment le Goethe-Institut, telc, l'ÖSD, le TestDaF et l'ECL." },
    { p: "Deux règles de l'ambassade concernent directement votre préparation. Le certificat ne doit pas avoir **plus de 12 mois au moment de la demande**, et si vous l'avez obtenu par modules, tous doivent venir du même organisme. L'ambassade peut aussi vérifier votre allemand lors du rendez-vous et refuser le visa si votre niveau est insuffisant. Un certificat B1 ne vous protège donc pas si vous ne pouvez pas expliquer votre projet en allemand le jour J." },
    { table: {
      head: ["Catégorie", "Attente indicative avant le rendez-vous, selon l'ambassade"],
      rows: [
        ['Début de travail avec formation reconnue, ou avec mesure de reconnaissance', 'Environ 3 mois'],
        ["Travail ou formation avec approbation préalable de l'Agence fédérale pour l'emploi", 'Environ 4 mois'],
        ['Formation dans les soins et la santé sans approbation préalable', 'Environ 6 mois'],
      ],
      note: "Estimations sans garantie publiées sur la page « Visa national » de rabat.diplo.de, susceptibles de changer. Ce sont des délais d'attente avant le rendez-vous, pas des délais de décision.",
    } },

    { h: "Triple Win et programmes officiels : où en est le Maroc" },
    { p: "Beaucoup d'infirmiers marocains ont entendu parler de Triple Win, le programme de recrutement de soignants mené par l'Agence fédérale pour l'emploi et la GIZ, l'agence allemande de coopération internationale. Sur la page de l'Agence fédérale pour l'emploi consultée en novembre 2026, le programme concerne les infirmiers de Tunisie, de Bosnie-Herzégovine, des Philippines, d'Indonésie et du Kerala, en Inde. **Le Maroc n'y figure pas**, et un récent article de la GIZ sur le programme ne le cite pas non plus." },
    { p: "La loi prévoit bien, à l'article 16d, alinéa 4, des accords de placement entre l'Agence fédérale pour l'emploi et le service de l'emploi d'un pays d'origine pour les professions de santé et de soins. Nous n'avons pas trouvé sur les sites officiels d'accord de ce type pour les infirmiers marocains. Si une agence vous présente une offre comme faisant partie d'un « programme officiel allemand », **demandez la référence et vérifiez-la** sur arbeitsagentur.de ou giz.de. Pour la grande majorité des candidats marocains, la voie réaliste reste la candidature directe auprès d'un employeur, puis la reconnaissance et l'un des visas décrits ci-dessus." },
    { quote: "Le diplôme ouvre le dossier ; l'allemand ouvre le service." },

    { h: "Combien de temps prévoir, et dans quel ordre" },
    { p: "Il n'existe pas de durée officielle pour l'ensemble du parcours, car elle dépend de votre allemand de départ, des différences relevées dans votre formation et des délais de l'ambassade. Ce que l'on sait des sources officielles permet pourtant de **bâtir un calendrier honnête** : jusqu'à quatre mois pour la décision de reconnaissance une fois le dossier complet, quelques mois d'attente avant le rendez-vous à Rabat, environ trois mois de traitement du visa, puis la mesure de compensation, qui peut durer jusqu'à trois ans pour un stage d'adaptation." },
    { p: "L'apprentissage de l'allemand est presque toujours l'étape la plus longue, et c'est la seule qui dépend entièrement de vous. Lancez-la dès que vous décidez de partir, déposez la reconnaissance en parallèle, puis **passez l'examen de langue quand la date de dépôt du visa se précise**, pour respecter la règle des 12 mois. Visez le B1 pour le visa d'une mesure dans la santé, mais gardez le B2 comme véritable objectif : c'est lui qui vous donne le titre." },
    { table: {
      head: ['Votre situation', 'Visa le plus probable', 'Allemand à viser au dépôt'],
      rows: [
        ['Diplôme reconnu et autorisation obtenue', 'Travailleur qualifié avec formation professionnelle', 'B2, déjà exigé pour l’autorisation'],
        ['Avis de déficit reçu, mesure trouvée', 'Mesure de reconnaissance (§ 16d al. 1)', 'En général au moins B1 dans la santé'],
        ['Offre d’emploi d’un employeur prêt à accompagner la reconnaissance', 'Partenariat de reconnaissance (§ 16d al. 3)', 'A2 au minimum, B1 pour les mesures dans la santé'],
      ],
      note: "Synthèse des pages de l'ambassade à Rabat et de la loi sur le séjour. Votre cas peut différer : lisez la page de votre catégorie sur rabat.diplo.de avant de constituer le dossier.",
    } },

    { h: "Préparer l'allemand des soins, concrètement" },
    { p: "L'allemand des soins n'est pas seulement un vocabulaire médical. C'est surtout la capacité à **comprendre une transmission rapide**, à rassurer un patient âgé qui parle avec un accent régional, à répondre au téléphone à un médecin et à rédiger une note de soins claire. Les erreurs de prépositions et de cas, que l'on croit secondaires, deviennent gênantes quand il faut dire où se trouve un médicament ou à qui s'adresser." },
    { examples: [
      ['Ich habe fünf Jahre als Krankenpfleger in Rabat gearbeitet.', "J'ai travaillé cinq ans comme infirmier à Rabat. (A2–B1 : présenter son parcours)"],
      ['Haben Sie Schmerzen? Wo genau tut es weh?', 'Avez-vous mal ? Où exactement ? (A2 : première question au patient)'],
      ['Der Blutdruck lag heute Morgen bei 150 zu 90.', "La tension était ce matin à 15/9. (B1 : transmettre une mesure)"],
      ['Könnten Sie mir bitte erklären, warum die Medikation geändert wurde?', 'Pourriez-vous m’expliquer pourquoi le traitement a été modifié ? (B2 : poser une question précise à un médecin)'],
    ] },
    { p: "Travaillez l'oral en priorité, car l'examen de langue, le rendez-vous à l'ambassade, l'examen de connaissances et les premières semaines en service se jouent à l'écoute et à la parole. Chez Alimun, un test de niveau vous situe au départ, puis **les cours d'allemand en direct avec un professeur, en petit groupe**, vous font parler à chaque séance, avec des exercices corrigés immédiatement entre les cours. Les règles, les montants et les délais cités ici évoluent : avant chaque étape, vérifiez la page officielle concernée." },
  ],
  quiz: [
    { q: "Quel titre un infirmier doit-il obtenir l'autorisation de porter pour exercer en Allemagne ?", options: ['Krankenschwester', 'Pflegefachfrau ou Pflegefachmann', 'Altenpfleger', 'Heilpraktiker'], a: 1, why: "La loi sur les professions de soins soumet les titres de Pflegefachfrau et Pflegefachmann à une autorisation." },
    { q: "Quel niveau d'allemand l'exemple officiel de la Rhénanie-du-Nord-Westphalie demande-t-il pour l'autorisation ?", options: ['A2', 'B1', 'B2', 'C1'], a: 2, why: "Le Recognition Finder indique le B2, prouvé par un certificat ou par l'examen de langue de la chambre des soins." },
    { q: "Qui choisit entre l'examen de connaissances et le stage d'adaptation ?", options: ["L'autorité du Land", "L'employeur", 'Le candidat', "L'ambassade à Rabat"], a: 2, why: "L'article 40 de la loi sur les professions de soins donne au candidat le droit de choisir." },
    { q: "Quelle est la durée maximale d'un stage d'adaptation ?", options: ['6 mois', '1 an', '2 ans', '3 ans'], a: 3, why: "La loi fixe une durée de trois ans au plus, avec un examen final sur son contenu." },
    { q: "Combien de fois peut-on repasser une partie ratée de l'examen de connaissances ?", options: ['Jamais', 'Une fois', 'Deux fois', 'Sans limite'], a: 1, why: "Le règlement permet une seule reprise de la partie orale et de chaque situation de soins ratée." },
    { q: "Quel niveau l'ambassade à Rabat demande-t-elle en général pour une mesure de qualification dans la santé ?", options: ['A1', 'A2', 'B1', 'C1'], a: 2, why: "L'ambassade demande en général l'A2, mais au moins le B1 pour les mesures dans le domaine de la santé." },
    { q: "Le telc Deutsch B1·B2 Pflege peut-il être passé par modules ?", options: ['Oui, librement', "Non, il faut passer l'examen complet", "Seulement l'oral", "Seulement à l'écrit"], a: 1, why: "telc précise que cet examen ne peut pas être passé comme examen partiel." },
    { q: "Le Maroc fait-il partie des pays du programme Triple Win pour les infirmiers, selon l'Agence fédérale pour l'emploi ?", options: ['Oui, depuis 2024', 'Non, il n’est pas cité', 'Seulement pour Casablanca', 'Seulement pour les jeunes diplômés'], a: 1, why: "La page cite la Tunisie, la Bosnie-Herzégovine, les Philippines, l'Indonésie et le Kerala, pas le Maroc." },
  ],
  faq: [
    ["Peut-on demander la reconnaissance de son diplôme d'infirmier depuis le Maroc ?", "Oui. Le portail officiel anerkennung-in-deutschland.de indique qu'on peut déposer la demande sans vivre en Allemagne, en ligne, en personne ou par courrier, auprès de l'autorité du Land où l'on veut travailler. Le certificat de langue peut être fourni plus tard."],
    ["Faut-il le B2 avant de partir ?", "Pas forcément. Le B2 est demandé pour l'autorisation de porter le titre d'infirmier, mais un visa de mesure de reconnaissance ou de partenariat de reconnaissance demande en général l'A2, et au moins le B1 pour les mesures dans la santé selon l'ambassade à Rabat. Vous pouvez donc partir avec le B1 et atteindre le B2 en Allemagne."],
    ["Vaut-il mieux choisir l'examen de connaissances ou le stage d'adaptation ?", "La loi vous laisse le choix. L'examen convient aux infirmiers expérimentés et déjà solides en allemand, car il peut aller plus vite ; le stage, de trois ans au plus, est plus progressif. Dans les deux cas, l'évaluation se fait en allemand, sur des situations de soins réelles."],
    ["Existe-t-il un programme officiel de recrutement d'infirmiers marocains ?", "À ce jour, la page de l'Agence fédérale pour l'emploi sur Triple Win cite la Tunisie, la Bosnie-Herzégovine, les Philippines, l'Indonésie et le Kerala, pas le Maroc. Méfiez-vous des offres qui se disent « officielles » sans référence vérifiable sur arbeitsagentur.de ou giz.de."],
  ],
  related: ['germany-from-morocco', 'germany-study-from-morocco', 'german-prepositions', 'goethe-a1-exam'],
  sources: [
    ['Loi sur les professions de soins (PflBG) § 1 : titres protégés', 'https://www.gesetze-im-internet.de/pflbg/__1.html'],
    ["PflBG § 2 : conditions de l'autorisation, dont l'allemand", 'https://www.gesetze-im-internet.de/pflbg/__2.html'],
    ['PflBG § 40 : équivalence des formations hors UE et mesures de compensation', 'https://www.gesetze-im-internet.de/pflbg/__40.html'],
    ["Règlement d'examen PflAPrV § 45 : examen de connaissances", 'https://www.gesetze-im-internet.de/pflaprv/__45.html'],
    ['Loi sur le séjour § 2 : définition des niveaux de langue', 'https://www.gesetze-im-internet.de/aufenthg_2004/__2.html'],
    ['Loi sur le séjour § 16d : mesures et partenariat de reconnaissance', 'https://www.gesetze-im-internet.de/aufenthg_2004/__16d.html'],
    ['Anerkennung in Deutschland : Recognition Finder, infirmier à Düsseldorf', 'https://www.anerkennung-in-deutschland.de/en/interest/finder/result?arrangement=Ja&location=6439&nationality=Drittstaat&profession=1695&zipSearch=0'],
    ["Ambassade d'Allemagne à Rabat : visa national, frais et délais", 'https://rabat.diplo.de/ma-fr/service/visa/visa-national'],
    ["Ambassade à Rabat : reconnaissance d'une qualification professionnelle étrangère", 'https://rabat.diplo.de/ma-fr/service/visa/2798392-2798392'],
    ['Ambassade à Rabat : partenariat de reconnaissance', 'https://rabat.diplo.de/ma-fr/service/visa/2798428-2798428'],
    ['telc : telc Deutsch B1·B2 Pflege', 'https://www.telc.net/en/language-examinations/certificate-exams/german/telc-german-b1-b2-nursing/'],
    ["Agence fédérale pour l'emploi : recrutement d'infirmiers à l'étranger (Triple Win)", 'https://www.arbeitsagentur.de/unternehmen/fachkraefte-ausland/pflegefachkraefte'],
    ['GIZ : Triple Win, recrutement de personnel soignant', 'https://www.giz.de/en/newsroom/stories/triple-win-nurses-germany'],
  ],
};
