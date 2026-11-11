// Travailler en Allemagne depuis le Maroc. Vérifié le 4 novembre 2026 sur les pages de l'ambassade d'Allemagne à Rabat
// (rabat.diplo.de : visa national, TLScontact et portail digital.diplo.de/visa, liste d'attente et délais indicatifs, frais de 75 €
// payables en espèces en MAD, pages formation professionnelle, travailleurs qualifiés avec formation professionnelle et Chancenkarte,
// certificats acceptés et validité de 12 mois ; page du consul honoraire à Casablanca, qui ne délivre pas de visas), la loi sur le
// séjour sur gesetze-im-internet.de (§ 16a, § 18c, § 18g, § 20a, § 20b), anerkennung-in-deutschland.de (connaissances d'allemand ;
// Recognition Finder pour la profession d'infirmier en Rhénanie-du-Nord-Westphalie : B2, preuve possible plus tard, décision sous
// 4 mois), le BAMF (600 leçons de langue dans le cours d'intégration général, 400 dans le cours intensif) et les pages du
// Goethe-Institut Marokko (examens de l'A1 au C2 à Rabat et Casablanca, inscription en ligne ; vérifié le 4 nov. 2026 sur goethe.de/ins/ma/fr/spr/prf.html et prf/gzb1.cfm). Non retenu faute de
// confirmation sur une source officielle ouverte : tarifs des examens Goethe au Maroc, centres telc ou ÖSD au Maroc, volumes
// horaires du Goethe-Institut par niveau.
export default {
  key: 'germany-from-morocco',
  site: 'ma',
  slug: 'travailler-en-allemagne-depuis-le-maroc',
  section: 'abroad',
  course: 'German',
  published: '2026-11-04',
  updated: '2026-11-04',
  title: "Travailler en Allemagne depuis le Maroc : quel niveau d'allemand et quelles démarches",
  metaTitle: "Travailler en Allemagne depuis le Maroc : niveau et visa – Alimun",
  desc: "Visa pour qualifiés, carte bleue, Chancenkarte, Ausbildung, infirmiers : le niveau d'allemand exigé depuis le Maroc, l'ambassade à Rabat et les délais réels.",
  lead: "Pour un Marocain, partir travailler en Allemagne passe par un visa national demandé à l'ambassade d'Allemagne à Rabat, et le niveau d'allemand dépend de la voie choisie : aucun minimum légal pour la carte bleue, A1 pour la Chancenkarte, B1 pour une formation professionnelle, B2 pour exercer comme infirmier. **Le vrai défi est le calendrier**, car il faut combiner l'apprentissage de la langue, la reconnaissance du diplôme et l'attente d'un rendez-vous. Ce guide vous aide à tout planifier dans le bon ordre.",
  photo: 'germany-from-morocco-airport-terminal',
  sticker: { draw: 'teacup', say: "Un thé à la menthe, puis une heure d'allemand." },
  facts: [
    { label: 'B1', text: "le niveau d'allemand que l'ambassade à Rabat demande pour un visa de formation professionnelle (Ausbildung)" },
    { n: 12, unit: 'mois', text: "l'âge maximum du certificat de langue au moment de la demande de visa, selon l'ambassade à Rabat" },
    { n: 75, unit: '€', text: "les frais d'un visa national, réglés en espèces en dirhams, auxquels s'ajoutent les frais de service de TLScontact" },
    { n: 6, unit: 'mois', text: "l'attente indicative avant un rendez-vous pour une formation dans les soins ou la santé sans approbation préalable" },
  ],
  blocks: [
    { take: { title: 'En bref', text: "Depuis le Maroc, toute demande de séjour de travail ou de formation passe par un visa national (visa D) déposé à l'ambassade d'Allemagne à Rabat ; il n'y a pas de service des visas à Casablanca. La carte bleue européenne et le titre pour travailleurs qualifiés **ne fixent pas de niveau d'allemand dans la loi**, mais l'ambassade recommande un certificat et peut vérifier votre allemand. La Chancenkarte demande l'allemand A1 ou l'anglais B2, la formation professionnelle **le B1**, et les infirmiers ont en général besoin du B2 pour exercer. Les certificats Goethe, telc, ÖSD, TestDaF (à partir du B2) et ECL sont acceptés s'ils ont moins de 12 mois. Les règles et les délais évoluent : vérifiez toujours la page officielle de votre catégorie.", draw: 'owl' } },

    { h: "Ce qui change quand on part du Maroc" },
    { p: "Les guides sur le travail en Allemagne parlent souvent de façon générale des ressortissants hors Union européenne. Pour un candidat marocain, les règles de fond sont les mêmes, mais **tout se joue à un seul guichet** : la section des visas de l'ambassade d'Allemagne à Rabat. Un séjour de plus de 90 jours, pour travailler, suivre une Ausbildung ou chercher un emploi, exige un visa national, appelé aussi visa D, que vous demandez avant le départ." },
    { p: "Beaucoup de candidats de Casablanca, Tanger ou Agadir pensent pouvoir s'adresser à un consulat plus proche. L'Allemagne n'a qu'un consul honoraire à Casablanca, et sa page officielle précise qu'il **ne délivre pas de visas**. Le dépôt se fait donc à Rabat, en personne, au rendez-vous qui vous est attribué. L'ambassade précise qu'elle travaille exclusivement avec un seul prestataire externe, TLScontact : c'est le seul intervenant extérieur dans la procédure officielle." },
    { p: "Le deuxième point propre au Maroc concerne la langue. L'ambassade indique qu'elle connaît des cas de certificats délivrés ou obtenus de manière abusive, qu'elle peut **vérifier vous-même votre niveau d'allemand** lors du rendez-vous, et qu'une connaissance insuffisante de l'allemand peut constituer un motif de refus. Autrement dit, un certificat ne suffit pas s'il ne correspond pas à ce que vous savez réellement dire. Préparez-vous à parler de votre projet en allemand, simplement mais sans hésiter." },

    { h: "Les voies d'accès, et le niveau d'allemand de chacune" },
    { p: "Il n'existe pas un seul visa de travail, mais plusieurs catégories, chacune avec ses conditions. L'ambassade insiste sur ce point : si vous déposez votre demande dans la mauvaise catégorie, elle ne peut pas être acceptée. Le tableau ci-dessous résume les voies les plus utilisées depuis le Maroc et **le niveau d'allemand attendu** pour chacune." },
    { table: {
      head: ['Voie', 'Pour qui', "Allemand exigé ou attendu"],
      rows: [
        ['Carte bleue européenne (§ 18g)', "Diplômés de l'enseignement supérieur avec une offre d'emploi et un salaire minimum", "Aucun niveau fixé par la loi ; B1 pour un séjour permanent plus rapide"],
        ['Travailleur qualifié avec formation professionnelle (§ 18a)', 'Titulaires d’une formation reconnue en Allemagne', "Pas obligatoire dans tous les cas, mais recommandé par l'ambassade"],
        ["Chancenkarte, carte d'opportunité (§ 20a)", "Diplômés ou titulaires d'une formation d'au moins deux ans reconnue par l'État", 'Allemand A1 ou anglais B2 ; points supplémentaires de l’A2 au B2'],
        ['Formation professionnelle, Ausbildung (§ 16a)', 'Jeunes et adultes avec une place de formation en Allemagne', 'B1, sauf si un cours de langue en Allemagne précède la formation'],
        ['Mesure de reconnaissance (§ 16d)', 'Personnes dont la qualification est reconnue en partie', 'En règle générale au moins A2, souvent plus selon la mesure'],
        ['Infirmier diplômé', 'Infirmiers formés au Maroc', 'En général B2 pour porter le titre et exercer'],
      ],
      note: "Sources : pages des catégories sur rabat.diplo.de et loi sur le séjour (AufenthG). Les conditions détaillées changent : vérifiez la page officielle de votre catégorie avant de constituer votre dossier.",
    } },

    { h3: 'Carte bleue européenne' },
    { p: "La carte bleue s'adresse aux titulaires d'un diplôme de l'enseignement supérieur qui ont une offre d'emploi en Allemagne avec un salaire supérieur à un seuil fixé chaque année. Le § 18g de la loi sur le séjour **ne prévoit aucune exigence d'allemand**, et la demande peut se faire en ligne sur le portail des visas du ministère allemand des Affaires étrangères. Un ingénieur ou un développeur recruté par une entreprise qui travaille en anglais peut donc partir sans certificat." },
    { p: "L'allemand reprend de l'importance une fois sur place. Selon le § 18c, le titulaire d'une carte bleue peut obtenir un titre de séjour permanent après 27 mois avec l'allemand A1, mais **après 21 mois seulement avec le B1**. Pour une famille qui s'installe durablement, ces six mois comptent, tout comme la vie quotidienne avec l'école, le médecin ou l'administration." },

    { h3: 'Travailleur qualifié avec une formation professionnelle' },
    { p: "Si vous avez un diplôme de technicien, de technicien spécialisé ou une autre formation professionnelle, vous pouvez obtenir un visa pour occuper un emploi qualifié en Allemagne, à condition que votre formation soit reconnue par l'autorité allemande compétente. Le dossier comprend notamment l'avis de reconnaissance, l'offre d'emploi avec le salaire annuel brut et **les connaissances linguistiques exigées par l'employeur**, ainsi qu'une déclaration de l'employeur sur le contrat." },
    { p: "Pour cette voie, l'ambassade précise qu'un certificat d'allemand n'est pas obligatoire dans tous les cas, mais qu'il rend votre demande plus plausible. Pour les professions réglementées, c'est l'autorité qui délivre l'autorisation d'exercer qui contrôle la langue. Si votre formation n'est reconnue qu'en partie, vous ne demandez pas ce visa mais un visa pour **compléter votre qualification en Allemagne**, dans le cadre d'une mesure de reconnaissance." },

    { h3: "Chancenkarte, la carte d'opportunité" },
    { p: "La Chancenkarte permet de séjourner en Allemagne pour chercher un emploi qualifié. Sur la page de l'ambassade à Rabat, la voie par points demande un diplôme universitaire ou une formation professionnelle d'au moins deux ans reconnue par l'État marocain, en règle générale **une attestation de la ZAB** (l'office central allemand d'évaluation des diplômes étrangers), et l'allemand A1 ou l'anglais B2. Il faut aussi prouver vos moyens de subsistance, par exemple avec un compte bloqué crédité de 1 091 € par mois, et une assurance santé couvrant au moins 30 000 €." },
    { p: "Au-delà de la condition de base, il faut au moins six points. Le § 20b de la loi sur le séjour accorde **3 points pour l'allemand B2**, 2 pour le B1 et 1 pour l'A2, sans cumul. Comme vous ne pouvez changer ni votre âge ni vos années d'expérience, la langue est souvent le seul critère sur lequel vous avez une prise directe dans les mois qui précèdent la demande." },

    { h3: 'Formation professionnelle (Ausbildung)' },
    { p: "L'Ausbildung est une formation en alternance : vous apprenez un métier en entreprise et à l'école professionnelle, avec un contrat et une rémunération. Elle existe dans des centaines de métiers, des soins aux métiers techniques, et elle s'adresse aussi aux candidats qui n'ont pas encore de diplôme professionnel. L'ambassade à Rabat est claire : **vous devez prouver un allemand au moins de niveau B1**. Un niveau inférieur suffit seulement si la formation commence par un cours de langue en Allemagne." },
    { p: "Le § 16a de la loi sur le séjour suit la même logique : la preuve de connaissances suffisantes, c'est-à-dire du B1, est exigée lorsque l'établissement de formation n'a pas vérifié lui-même votre niveau et qu'aucun cours de langue préparatoire n'est prévu. Pendant la formation, le titre de séjour permet en plus **un emploi indépendant de la formation jusqu'à 20 heures par semaine**. Notez que, pour l'instant, la demande de visa pour une Ausbildung ne peut pas être déposée sur le portail en ligne : elle passe par la liste d'attente de l'ambassade." },
    { figure: { photo: 'germany-from-morocco-workshop-tools', alt: "Un atelier de mécanique avec des machines-outils, des établis et un technicien au travail au fond", caption: "Dans une Ausbildung technique, les consignes de sécurité, les explications du maître d'apprentissage et les cours à l'école professionnelle sont en allemand : d'où l'exigence du B1." } },

    { h: 'Infirmiers et professions de santé' },
    { p: "Pour un infirmier formé au Maroc, c'est la voie où la langue pèse le plus. La profession est réglementée : il faut d'abord faire reconnaître l'équivalence de votre diplôme, puis obtenir l'autorisation de porter le titre de Pflegefachfrau ou Pflegefachmann. Pour cette seconde étape, l'exemple de la Rhénanie-du-Nord-Westphalie publié sur anerkennung-in-deutschland.de indique **un allemand de niveau B2** du Cadre européen commun de référence." },
    { p: "Ce même exemple apporte deux précisions utiles. Vous pouvez prouver votre niveau par un certificat de langue ou par l'examen de langue spécialisée en soins infirmiers organisé par la chambre des soins du Land, et vous n'êtes pas obligé de fournir la preuve au moment de la demande : **elle peut venir plus tard**. Une fois le dossier complet, l'autorité rend sa décision au plus tard dans les quatre mois, sauf prolongation dans certains cas. Chaque Land a son autorité et ses règles : vérifiez celles du Land où vous travaillerez." },
    { p: "Si votre formation n'est reconnue qu'en partie, vous pouvez partir avec un visa de mesure de reconnaissance pour suivre un stage d'adaptation ou préparer un examen. La loi demande alors en règle générale au moins l'A2, mais pour réussir un stage dans un service hospitalier, **visez le B1 avant le départ** et le B2 pendant le stage. Les médecins, eux, ont en général besoin d'un allemand général B2 et d'un allemand médical orienté C1, vérifié par un examen de langue spécialisée." },
    { figure: { photo: 'germany-from-morocco-caregiver', alt: "Un soignant qui tient la main d'une patiente âgée souriante en pull rouge", caption: "Rassurer un patient, comprendre une transmission, répondre à un médecin : c'est pour ces situations que l'Allemagne demande le B2 aux infirmiers." } },

    { cta: true },

    { h: 'Reconnaissance du diplôme : par où commencer' },
    { p: "Pour la plupart des voies, la reconnaissance vient avant le visa, et c'est souvent l'étape la plus longue. Le portail officiel anerkennung-in-deutschland.de propose un outil, le Recognition Finder, qui vous indique **si votre profession est réglementée**, quelle autorité est compétente selon la ville visée et si un niveau de langue est exigé. Pour les diplômes universitaires, la ZAB établit une évaluation, que l'ambassade demande en règle générale pour la Chancenkarte." },
    { p: "Le portail rappelle un point souvent mal compris : **pour la plupart des métiers, aucun niveau de langue n'est exigé pour la reconnaissance elle-même**. La langue intervient pour l'autorisation d'exercer une profession réglementée, pour le visa de certaines catégories et, bien sûr, pour le travail. Vous pouvez donc lancer la reconnaissance et l'apprentissage de l'allemand en parallèle, ce qui fait gagner plusieurs mois. Pour un accompagnement personnalisé, l'ambassade renvoie au service central allemand de reconnaissance professionnelle (ZSBA)." },
    { note: { title: 'Traductions et documents', text: "L'ambassade accepte les documents en allemand, en anglais ou en français ; les autres, notamment ceux en arabe, doivent être traduits. Les autorités de reconnaissance demandent en général **des traductions en allemand** de vos diplômes et relevés. Prévoyez ce budget et ce délai dès le début.", draw: 'snail' } },

    { h: "La demande de visa à Rabat, pas à pas" },
    { p: "Selon la catégorie, il existe trois façons d'obtenir un rendez-vous. Pour la carte bleue, la Chancenkarte, la carte ICT, l'analyse des qualifications et les études, vous pouvez **déposer la demande en ligne** sur le portail digital.diplo.de/visa, qui vous indique à l'avance si votre dossier est complet ; vous venez ensuite à Rabat pour présenter les originaux, donner vos empreintes et payer. Les médecins, les chercheurs et les travailleurs qualifiés en procédure accélérée réservent directement chez TLScontact. Les autres catégories de travail et de formation passent par la liste d'attente de l'ambassade." },
    { p: "Les frais d'un visa national sont de 75 €, ou 37,50 € au tarif réduit, à payer **en espèces et en dirhams** au taux du jour, auxquels s'ajoutent les frais de service de TLScontact. Les certificats de langue acceptés sont ceux du Goethe-Institut, de telc, de l'ÖSD, du TestDaF à partir du B2 et du centre d'examens ECL. Le certificat ne doit pas avoir plus de 12 mois au moment de la demande, et si vous avez passé l'examen par modules, **tous les modules doivent venir du même organisme**." },
    { p: "L'ambassade publie des délais indicatifs, sans garantie, pour l'attente avant un rendez-vous. Ce ne sont pas des délais de traitement : la décision vient ensuite. Pour un travailleur qualifié avec une formation reconnue, l'ambassade conseille de prévoir environ trois mois de traitement, et la procédure accélérée pour travailleurs qualifiés, que l'employeur engage en Allemagne, ramène en général ce délai à environ trois semaines." },
    { table: {
      head: ["Catégorie (liste d'attente)", "Attente indicative avant le rendez-vous"],
      rows: [
        ['Début de travail avec formation reconnue, et mesure de reconnaissance', 'Environ 3 mois'],
        ["Travail ou formation avec approbation préalable de l'Agence fédérale pour l'emploi", 'Environ 4 mois'],
        ['Formation dans les soins et la santé sans approbation préalable', 'Environ 6 mois'],
        ['Études', 'Environ 2 à 4 mois'],
      ],
      note: "Estimations publiées par l'ambassade d'Allemagne à Rabat, sans garantie et susceptibles de changer. Consultez la page « Visa national » de rabat.diplo.de avant de planifier.",
    } },

    { h: "Où passer un examen d'allemand au Maroc" },
    { p: "Le Goethe-Institut Marokko organise des examens de l'A1 au C2 dans ses deux instituts, **à Rabat et à Casablanca**. Chaque examen a ses propres dates et son lieu, Rabat ou Casablanca, publiés sur la page de l'examen avec la période d'inscription." },
    { p: "L'inscription se fait **en ligne**, pendant une période fixée pour chaque session ; les réservations ouvrent à 9 heures le premier jour de cette période, et les places peuvent partir vite. Consultez les dates et les tarifs en vigueur sur goethe.de/marokko et réservez dès que vous connaissez votre calendrier de visa. Les certificats telc et ÖSD sont aussi acceptés par l'ambassade : si vous préférez l'un d'eux, vérifiez sur le site de l'organisme qu'un centre agréé organise des sessions près de chez vous." },
    { p: "Pensez à la règle des 12 mois. Un B1 obtenu trop tôt peut expirer pendant que vous attendez un rendez-vous ou la décision de reconnaissance. **Calez la date de l'examen sur votre calendrier de dépôt**, et non l'inverse. Si vous devez repasser un module, faites-le auprès du même organisme pour que l'ensemble reste valable." },

    { h: "Combien de temps pour passer de l'A1 au B1 ou au B2" },
    { p: "Il n'existe pas de durée officielle unique pour apprendre l'allemand, car tout dépend de votre point de départ, du rythme et du temps de pratique. Le repère public le plus solide vient de l'Office fédéral des migrations et des réfugiés (BAMF) : le cours d'intégration général compte **600 leçons de langue** pour mener des débutants au niveau B1, et sa version intensive 400 leçons pour les apprenants rapides. À raison de 15 leçons par semaine, 600 leçons représentent environ 40 semaines, soit une dizaine de mois." },
    { p: "Le B2 demande ensuite un effort supplémentaire important : c'est le niveau où l'on discute, argumente et suit des échanges rapides entre natifs. Pour une infirmière ou un infirmier qui part de zéro, un projet réaliste s'étale donc souvent sur plus d'un an de langue, auquel s'ajoutent la reconnaissance du diplôme et l'attente du rendez-vous. Le tableau suivant vous aide à **construire un calendrier honnête**." },
    { table: {
      head: ['Projet', 'Niveau à viser au dépôt', 'Ce qui allonge le calendrier'],
      rows: [
        ['Carte bleue, entreprise anglophone', 'Pas de minimum ; A1 ou plus conseillé', 'Recherche d’emploi, éventuelle évaluation du diplôme'],
        ['Chancenkarte', 'A1 au minimum, B1 ou B2 pour les points', 'Attestation de la ZAB, compte bloqué'],
        ['Ausbildung', 'B1', 'Trouver une place de formation, liste d’attente (environ 4 à 6 mois)'],
        ['Infirmier diplômé', 'B1 au départ, B2 pour exercer', 'Reconnaissance (jusqu’à 4 mois après dossier complet), mesure de compensation éventuelle'],
        ['Travailleur qualifié avec formation reconnue', 'Pas obligatoire ; B1 recommandé en pratique', 'Reconnaissance, environ 3 mois de traitement du visa'],
      ],
      note: "Délais repris des pages de l'ambassade à Rabat et d'anerkennung-in-deutschland.de ; ils peuvent varier selon votre dossier.",
    } },

    { h: 'Ce que chaque niveau vous permet au travail' },
    { p: "Les niveaux du Cadre européen ne sont pas qu'une condition administrative. Ils décrivent **ce que vous saurez faire** le premier jour dans une équipe allemande, et c'est ce que les employeurs et les agents de l'ambassade cherchent à percevoir quand ils vous parlent." },
    { levels: [
      ['A1', 'Premiers pas', "Vous vous présentez, vous comprenez des consignes très simples et vous remplissez un formulaire. Suffisant pour la condition de langue de la Chancenkarte, pas pour travailler en allemand."],
      ['A2', 'Échanges de routine', "Vous gérez des échanges courts et prévisibles : confirmer un horaire, demander un outil, saluer un client. Le minimum habituel pour une mesure de reconnaissance."],
      ['B1', 'Autonome', "Vous suivez l'essentiel d'une consigne ou d'une réunion, vous expliquez un problème et vous écrivez un court message. Le niveau de l'Ausbildung et celui qui accélère le séjour permanent."],
      ['B2', 'Professionnel', "Vous discutez, vous justifiez une décision et vous suivez une conversation rapide entre collègues. Le niveau habituel des infirmiers et celui que beaucoup d'employeurs attendent."],
      ['C1', 'Pleinement à l’aise', "Vous négociez, présentez et rédigez des textes complexes. Le niveau de l'allemand médical exigé des médecins."],
    ] },
    { examples: [
      ['Ich habe in Casablanca als Krankenpfleger gearbeitet.', "J'ai travaillé comme infirmier à Casablanca. (A2–B1 : présenter son parcours à l'entretien)"],
      ['Ich möchte eine Ausbildung als Elektroniker machen.', 'Je voudrais faire une formation d’électronicien. (A2 : dire son projet, une phrase à préparer pour le rendez-vous)'],
      ['Mein Diplom wird gerade in Düsseldorf anerkannt.', 'Mon diplôme est en cours de reconnaissance à Düsseldorf. (B1 : expliquer où en est votre dossier)'],
      ['Könnten Sie mir bitte erklären, wie die Übergabe hier funktioniert?', 'Pourriez-vous m’expliquer comment se passent les transmissions ici ? (B2 : poser une question précise dans un service)'],
    ] },
    { quote: "Le visa fixe le minimum ; le premier jour de travail fixe le vrai niveau." },

    { h: 'Comment organiser votre préparation' },
    { p: "Commencez par la voie qui correspond à votre profil, puis lisez la page de cette catégorie sur rabat.diplo.de en entier, documents compris. Lancez ensuite la reconnaissance ou l'évaluation de votre diplôme **en même temps que l'apprentissage de l'allemand**, puisque la reconnaissance elle-même n'exige pas de niveau dans la plupart des métiers. Réservez l'examen quand votre date de dépôt se précise, pour que le certificat ait moins de 12 mois." },
    { p: "Travaillez surtout l'oral. Le rendez-vous à l'ambassade, l'entretien d'embauche et les premières semaines en Allemagne se jouent à l'écoute et à la parole, bien plus qu'à la grammaire écrite. Chez Alimun, le test de niveau vous situe de l'A1 au C2, et **les cours d'allemand en direct avec un professeur, en petit groupe**, vous font parler à chaque séance, avec des exercices corrigés immédiatement entre les cours." },
    { p: "Enfin, restez prudent face aux promesses. L'ambassade ne travaille qu'avec TLScontact, les inscriptions aux examens du Goethe-Institut Marokko se font en ligne sur goethe.de, et l'ambassade rappelle que les documents falsifiés entraînent un refus. Les règles, les montants et les délais cités ici évoluent régulièrement : avant chaque étape, **vérifiez la page officielle** de votre catégorie." },
  ],
  quiz: [
    { q: "Où un candidat marocain dépose-t-il sa demande de visa national pour travailler en Allemagne ?", options: ['Au consulat de Casablanca', "À l'ambassade d'Allemagne à Rabat", 'Dans une agence de recrutement', 'Directement en Allemagne'], a: 1, why: "Le consul honoraire de Casablanca ne délivre pas de visas ; les visas nationaux sont traités par l'ambassade à Rabat." },
    { q: "Quel niveau d'allemand l'ambassade à Rabat demande-t-elle pour un visa d'Ausbildung ?", options: ['A1', 'A2', 'B1', 'C1'], a: 2, why: "L'ambassade demande au moins le B1, sauf si la formation commence par un cours de langue en Allemagne." },
    { q: 'Quelle condition de langue la Chancenkarte pose-t-elle au minimum ?', options: ['Allemand B1 uniquement', 'Allemand A1 ou anglais B2', 'Allemand B2 uniquement', 'Aucune condition'], a: 1, why: "La voie par points exige l'allemand A1 ou l'anglais B2." },
    { q: "Quel est l'âge maximum du certificat de langue au moment de la demande de visa ?", options: ['6 mois', '12 mois', '24 mois', 'Aucune limite'], a: 1, why: "Selon l'ambassade à Rabat, le certificat ne doit pas avoir plus de 12 mois lors de la demande." },
    { q: 'Comment se paient les frais de visa national à Rabat ?', options: ['Par carte bancaire en euros', 'En espèces et en dirhams', 'Par virement depuis l’Allemagne', 'Ils sont gratuits'], a: 1, why: "Les 75 € (ou 37,50 € au tarif réduit) se paient en espèces et en MAD au taux du jour, plus les frais de TLScontact." },
    { q: "Quel niveau d'allemand faut-il en général à un infirmier pour porter le titre et exercer ?", options: ['A2', 'B1', 'B2', 'C2'], a: 2, why: "L'exemple de la Rhénanie-du-Nord-Westphalie sur anerkennung-in-deutschland.de indique le B2." },
    { q: 'Combien de leçons de langue compte le cours d’intégration général du BAMF ?', options: ['200', '400', '600', '1 000'], a: 2, why: 'Le cours général compte 600 leçons de langue ; le cours intensif, 400.' },
    { q: "Si vous passez un examen par modules, que demande l'ambassade ?", options: ['Que tous les modules viennent du même organisme', 'Que les modules aient moins de 3 mois', 'Que vous passiez au moins un module en Allemagne', 'Rien de particulier'], a: 0, why: 'Tous les modules doivent avoir été passés auprès d’un seul et même organisme.' },
  ],
  faq: [
    ["Peut-on déposer une demande de visa de travail au consulat de Casablanca ?", "Non. L'Allemagne n'a à Casablanca qu'un consul honoraire, qui ne délivre pas de visas. Les demandes de visa national se font à l'ambassade d'Allemagne à Rabat, avec rendez-vous, et la réception est assurée par le prestataire TLScontact ou par l'ambassade selon la catégorie."],
    ["Faut-il obligatoirement un certificat d'allemand pour la carte bleue européenne ?", "Non, la loi ne fixe pas de niveau d'allemand pour la carte bleue. L'allemand B1 permet toutefois d'obtenir le séjour permanent après 21 mois au lieu de 27, et il facilite beaucoup la vie quotidienne en Allemagne."],
    ["Quels certificats d'allemand l'ambassade à Rabat accepte-t-elle ?", "Ceux du Goethe-Institut, de telc, de l'ÖSD, du TestDaF à partir du niveau B2 et du centre d'examens ECL. Le certificat doit avoir moins de 12 mois au moment de la demande, et l'ambassade peut aussi vérifier votre niveau lors du rendez-vous."],
    ["Où passer le Goethe-Zertifikat au Maroc ?", "Au Goethe-Institut de Rabat ou de Casablanca, selon votre région. L'inscription se fait en ligne, pendant la période d'inscription indiquée pour chaque session. Consultez les dates et tarifs en vigueur sur goethe.de/marokko."],
    ["Mon diplôme d'infirmier marocain est-il reconnu en Allemagne ?", "Cela se décide au cas par cas par l'autorité du Land où vous voulez travailler. Le Recognition Finder d'anerkennung-in-deutschland.de vous indique l'autorité compétente ; si la reconnaissance n'est que partielle, vous pouvez partir avec un visa de mesure de reconnaissance pour compléter votre qualification."],
  ],
  related: ['moroccan-english-exams'],
  sources: [
    ["Ambassade d'Allemagne à Rabat : visa national (visa D), rendez-vous, frais et délais", 'https://rabat.diplo.de/ma-fr/service/visa/visa-national'],
    ['Ambassade à Rabat : visa pour formation professionnelle', 'https://rabat.diplo.de/ma-fr/service/visa/2798426-2798426'],
    ['Ambassade à Rabat : travailleurs qualifiés avec formation professionnelle', 'https://rabat.diplo.de/ma-fr/service/visa/2798390-2798390'],
    ["Ambassade à Rabat : Chancenkarte par système de points", 'https://rabat.diplo.de/ma-fr/service/visa/2798396-2798396'],
    ['Ambassade à Rabat : consul honoraire à Casablanca', 'https://rabat.diplo.de/ma-de/ueber-uns/honorarkonsuln/1693502-1693502'],
    ['Loi sur le séjour § 16a : formation professionnelle', 'https://www.gesetze-im-internet.de/aufenthg_2004/__16a.html'],
    ['Loi sur le séjour § 20b : points de la Chancenkarte', 'https://www.gesetze-im-internet.de/aufenthg_2004/__20b.html'],
    ['Loi sur le séjour § 18c : séjour permanent', 'https://www.gesetze-im-internet.de/aufenthg_2004/__18c.html'],
    ["Anerkennung in Deutschland : connaissances d'allemand", 'https://www.anerkennung-in-deutschland.de/html/en/pro/german-language-skills.php'],
    ['Anerkennung in Deutschland : Recognition Finder, infirmier en Rhénanie-du-Nord-Westphalie', 'https://www.anerkennung-in-deutschland.de/en/interest/finder/result?arrangement=Ja&location=6439&nationality=Drittstaat&profession=1695&zipSearch=0'],
    ["BAMF : contenu et déroulement du cours d'intégration", 'https://www.bamf.de/EN/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/InhaltAblauf/inhaltablauf-node.html'],
    ['Goethe-Institut Marokko : examens d’allemand à Casablanca et Rabat', 'https://www.goethe.de/ins/ma/fr/spr/prf.html'],
  ],
};
