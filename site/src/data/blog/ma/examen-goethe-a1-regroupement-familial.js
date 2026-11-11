// Examen Goethe-Zertifikat A1 : Start Deutsch 1 pour le regroupement familial depuis le Maroc. Vérifié le 11 novembre 2026.
// goethe.de bloque les robots (403) : les pages du Goethe-Institut ont été lues sur des copies de web.archive.org, et ce sont
// les URL goethe.de qui sont citées dans les sources. Pages lues : goethe.de/ins/ma/fr/spr/prf/gzsd1.cfm (copie du 21 mai 2026 :
// examen pour adultes, attestation pour un visa de regroupement familial, tarif réduit si cours au Goethe-Institut de moins de
// six mois), gzsd1/inf.html (copie du 17 février 2026 : épreuves Lire 25 min, Écrire 20 min, Écouter 20 min, Parler 15 min en
// groupe ; pas d'âge minimum, recommandé à partir de 16 ans ; 80 à 200 unités de 45 minutes), gzsd1/ueb.html (copie du 19 février
// 2026 : modèle et sets d'exercices 01 et 02 avec audio) et les Durchführungsbestimmungen (version anglaise, en vigueur au
// 1er septembre 2025 : écrit de 65 minutes sans pause, oral en groupe de quatre au plus sans préparation, 15 points par épreuve,
// coefficient 1,66, 60 points sur 100 pour réussir, moins de 35 points à l'écrit = pas d'oral, oral dans les 14 jours, examen
// repassé en entier, version numérique sur ordinateur du centre). Ambassade d'Allemagne à Rabat, page « Conjoint/conjointe »
// (article du 25.06.2026 : A1, organismes acceptés, certificat de moins de 12 mois, modules du même organisme, contrôle possible
// au guichet, dispense si allemand courant, portail digital.diplo.de/visa, environ trois mois, frais de 75 € ou 37,50 € en espèces
// en MAD). Loi sur le séjour sur gesetze-im-internet.de : § 30 al. 1 (18 ans, allemand simple, exceptions de la phrase 3) et § 28
// al. 1 (renvoi pour le conjoint d'un Allemand). Inscription au Goethe-Institut Marokko : uniquement ce que vérifie déjà l'article
// germany-from-morocco (Rabat et Casablanca, inscription en ligne, ouverture à 9 heures le premier jour de la période).
// Non retenu faute de confirmation officielle aujourd'hui : tarifs de l'examen au Maroc, dates des sessions, délais de résultats,
// sessions telc ou ÖSD au Maroc, règle de la fiche de 2016 de l'ambassade sur le passeport à présenter à l'inscription.
export default {
  key: 'goethe-a1-exam',
  site: 'ma',
  slug: 'examen-goethe-a1-regroupement-familial',
  section: 'exams',
  course: 'German',
  published: '2026-11-11',
  updated: '2026-11-11',
  title: "Examen Goethe A1 pour le regroupement familial : format, seuil et démarches depuis le Maroc",
  metaTitle: "Goethe A1 Start Deutsch 1 et regroupement familial – Alimun",
  desc: "Le Goethe-Zertifikat A1 pour rejoindre votre conjoint en Allemagne : épreuves, oral en groupe, 60 points, exigences de l'ambassade à Rabat et exceptions.",
  lead: "Pour rejoindre votre conjoint en Allemagne avec un visa de regroupement familial, l'ambassade d'Allemagne à Rabat vous demande en règle générale un certificat d'allemand de niveau A1. **Le Goethe-Zertifikat A1 : Start Deutsch 1 est l'examen le plus courant pour cela**, et on peut le passer à Rabat ou à Casablanca. Voici son format exact, ce que l'ambassade vérifie, les exceptions prévues par la loi et une méthode de préparation réaliste.",
  photo: 'goethe-a1-exam-ma-header',
  sticker: { draw: 'suitcase', say: 'Ich heiße Salma. Ich komme aus Marokko.' },
  facts: [
    { n: 60, unit: 'points', text: "le minimum sur 100 pour réussir le Goethe-Zertifikat A1 : Start Deutsch 1" },
    { n: 65, unit: 'minutes', text: "la durée de l'épreuve écrite, sans pause : écouter, lire et écrire" },
    { n: 12, unit: 'mois', text: "l'âge maximum du certificat A1 au moment de la demande de visa, selon l'ambassade à Rabat" },
    { n: 4, unit: 'candidats', text: "au plus dans chaque groupe de l'épreuve orale, qui dure 15 minutes" },
  ],
  blocks: [
    { take: { title: 'En bref', text: "La loi allemande demande au conjoint qui rejoint son époux ou son épouse de **savoir se faire comprendre en allemand de façon simple**, c'est-à-dire au niveau A1. À Rabat, l'ambassade attend un certificat A1 de moins de 12 mois, délivré notamment par le Goethe-Institut, telc ou l'ÖSD. Le Goethe-Zertifikat A1 : Start Deutsch 1 comprend un écrit de 65 minutes (écouter, lire, écrire) et un oral de 15 minutes en petit groupe ; il faut **60 points sur 100** pour réussir. Quelques exceptions existent dans la loi, mais elles restent étroites : pour la plupart des couples, le certificat est la voie normale.", draw: 'owl' } },

    { h: "Pourquoi l'allemand A1 est exigé pour rejoindre son conjoint" },
    { p: "Le regroupement des époux est réglé par la loi allemande sur le séjour, l'Aufenthaltsgesetz. Son § 30 fixe deux conditions personnelles pour le conjoint qui arrive : les deux époux doivent avoir **au moins 18 ans**, et le conjoint qui rejoint doit pouvoir se faire comprendre « au moins de façon simple » en allemand. En pratique, l'administration traduit cette formule par le niveau A1 du Cadre européen commun de référence pour les langues." },
    { p: "Cette règle ne concerne pas seulement les couples où l'époux installé en Allemagne est étranger. Le § 28, qui traite du conjoint d'un citoyen allemand, renvoie expressément aux mêmes conditions d'âge et de langue du § 30, ainsi qu'à ses exceptions. Que votre mari ou votre femme soit allemand, marocain résidant en Allemagne ou d'une autre nationalité, **le point de départ est donc le même** : un niveau A1 prouvé avant le visa, sauf cas particulier." },
    { p: "Le niveau A1 est le premier des six niveaux du cadre européen. Il ne s'agit pas de parler couramment, mais de pouvoir vous présenter, comprendre une question simple posée lentement, remplir un formulaire et écrire quelques lignes sur une situation de la vie quotidienne. C'est exactement ce que mesure le Goethe-Zertifikat A1 : Start Deutsch 1, que le Goethe-Institut au Maroc présente comme un examen adapté pour obtenir **une attestation de langue en vue d'un visa de regroupement familial**." },

    { h: "Ce que demande l'ambassade d'Allemagne à Rabat" },
    { p: "Toutes les demandes de visa de regroupement familial des résidents du Maroc sont traitées par l'ambassade d'Allemagne à Rabat. Sa page consacrée au conjoint précise que la demande se fait en ligne sur le portail des visas du ministère allemand des Affaires étrangères, digital.diplo.de/visa, qui vous indique avant le rendez-vous si votre dossier est complet. L'ambassade conseille de **prévoir environ trois mois** de traitement, parfois davantage, car les autorités en Allemagne peuvent être consultées." },
    { p: "Pour la langue, l'ambassade demande un certificat d'allemand de niveau A1 délivré par l'un des organismes qu'elle accepte : le Goethe-Institut, telc, l'Österreichisches Sprachdiplom Deutsch (ÖSD), le TestDaF-Institut (mais seulement à partir du niveau B2) et le centre d'examens ECL. Le certificat ne doit pas avoir **plus de 12 mois au moment de la demande**. Si vous avez passé un examen par modules, tous les modules doivent provenir du même organisme : des preuves mélangées entre plusieurs organismes ne suffisent pas." },
    { p: "L'ambassade ajoute un avertissement que beaucoup de candidats sous-estiment. Elle indique avoir constaté des certificats obtenus ou délivrés de façon abusive, et se réserve le droit de **vérifier elle-même votre allemand** lors du dépôt. Une connaissance insuffisante peut constituer un motif de refus. Autrement dit, le certificat ouvre la porte, mais il doit correspondre à ce que vous savez vraiment dire face à un agent." },
    { p: "Le reste du dossier est classique : formulaire VIDEX rempli et signé à la main, deux photos biométriques, passeport avec au moins deux pages libres, acte de mariage légalisé avec sa traduction en allemand, justificatif de domicile de moins de 12 mois et, si votre conjoint n'est ni allemand ni ressortissant de l'Union européenne, une copie de son titre de séjour. Les frais d'un visa national sont de 75 €, ou 37,50 € au tarif réduit, **payables en espèces et en dirhams** au taux du jour, auxquels s'ajoutent les frais de service de TLScontact si vous déposez chez ce prestataire. Vérifiez la liste à jour sur la page de l'ambassade avant de constituer votre dossier." },

    { figure: { photo: 'goethe-a1-exam-ma-desk', alt: "Un carnet ligné ouvert avec un stylo, devant un ordinateur portable et une tasse", caption: "L'écrit du Start Deutsch 1 se fait d'une traite : 65 minutes pour écouter, lire et écrire, sans pause." } },

    { h: "Le format exact du Goethe-Zertifikat A1 : Start Deutsch 1" },
    { p: "L'examen comprend quatre épreuves : écouter, lire, écrire et parler. Les trois premières forment l'écrit, passé en groupe en une seule séance de 65 minutes **sans pause**. La quatrième est l'oral, lui aussi passé en groupe. Le Goethe-Institut précise que l'examen est organisé et noté de la même façon dans le monde entier, ce qui explique pourquoi les ambassades l'acceptent partout." },
    { table: {
      head: ['Épreuve', 'Durée', 'Ce que vous faites', 'Points'],
      rows: [
        ['Écouter (Hören)', 'Environ 20 minutes', "Courtes conversations du quotidien, messages téléphoniques, annonces par haut-parleur, en trois parties", '15'],
        ['Lire (Lesen)', '25 minutes', "Petits mots, petites annonces, panneaux et affiches, en trois parties", '15'],
        ['Écrire (Schreiben)', '20 minutes', "Remplir un formulaire simple, puis écrire un court message personnel sur une situation du quotidien", '15 (5 + 10)'],
        ['Parler (Sprechen)', '15 minutes', "Se présenter au groupe, poser et répondre à des questions, formuler des demandes", '15 (3 + 6 + 6)'],
      ],
      note: "Source : Goethe-Institut, page de l'examen et Durchführungsbestimmungen en vigueur depuis le 1er septembre 2025. L'écrit (écouter, lire, écrire) dure 65 minutes au total.",
    } },
    { p: "Quelques détails comptent le jour de l'examen. À l'écoute et à la lecture, vous reportez vos réponses sur une feuille de réponses, et il faut prévoir **environ cinq minutes** dans le temps de l'épreuve pour ce report. À l'écrit, seule la version au propre sur la feuille de réponses est notée. Le Goethe-Institut propose aussi une version numérique, passée sur un ordinateur portable du centre d'examen : les réponses sont alors saisies directement sur la plateforme, mais les critères de notation restent les mêmes." },

    { h3: "L'oral en groupe, épreuve par épreuve" },
    { p: "L'oral surprend souvent les candidats marocains habitués aux entretiens individuels. Il se déroule en groupe de **quatre candidats au maximum**, réunis au hasard, devant deux examinateurs, dont l'un anime l'épreuve. Il n'y a aucun temps de préparation : vous recevez les mots-clés et les cartes au moment même. Avant chaque partie, l'examinateur explique la tâche et montre un exemple, ce qui vous aide à comprendre ce qu'on attend de vous." },
    { p: "Dans la première partie, vous vous présentez au groupe à l'aide des mots-clés donnés dans votre sujet. On vous demande ensuite **d'épeler un mot et de donner un nombre**, par exemple votre numéro de téléphone. Dans la deuxième partie, les candidats se posent des questions les uns aux autres sur un thème du quotidien à partir de cartes, et répondent à celles des autres. Dans la troisième, chacun formule une demande ou une consigne à partir d'une carte, et les autres y répondent. Chaque partie dure environ cinq minutes." },
    { p: "Cette forme de groupe a un avantage : vous entendez les autres candidats avant de parler, et la deuxième et la troisième partie ressemblent à une vraie conversation. Elle a aussi un piège. Si vous ne réagissez pas aux questions de vos voisins, ou si vous récitez une présentation apprise par cœur sans écouter, **vous vous privez de points précieux** : les deuxième et troisième parties, où l'on échange avec les autres, valent 12 des 15 points de l'oral." },

    { h3: 'Le calcul des points et le seuil de réussite' },
    { p: "Chaque épreuve est notée sur 15 points, puis multipliée par 1,66 et arrondie. Vous obtenez ainsi un total sur 100 : **75 points pour l'écrit et 25 pour l'oral**. L'examen est réussi à partir de 60 points, soit 60 % du maximum, à condition d'avoir passé toutes les épreuves. Le total compte, pas chaque épreuve isolée : un très bon oral peut compenser une lecture moyenne." },
    { p: "Il existe toutefois un seuil éliminatoire à connaître. Si vous obtenez **moins de 35 points à l'écrit**, vous n'êtes pas admis à l'oral, car même 25 points à l'oral ne permettraient plus d'atteindre 60. L'écrit a en général lieu avant l'oral ; si les deux ne se passent pas le même jour, l'épreuve manquante doit être passée dans les 14 jours. Enfin, le Start Deutsch 1 n'est pas modulaire : en cas d'échec, **on le repasse en entier**." },
    { table: {
      head: ['Points sur 100', 'Mention'],
      rows: [
        ['100 à 90', 'Sehr gut (très bien)'],
        ['89 à 80', 'Gut (bien)'],
        ['79 à 70', 'Befriedigend (satisfaisant)'],
        ['69 à 60', 'Ausreichend (suffisant)'],
        ['59 à 0', 'Nicht bestanden (non réussi)'],
      ],
      note: "Source : Durchführungsbestimmungen du Goethe-Zertifikat A1 : Start Deutsch 1, en vigueur depuis le 1er septembre 2025.",
    } },

    { cta: true },

    { h: "Les exceptions prévues par la loi (§ 30)" },
    { p: "La loi énumère des cas où le conjoint n'a pas à prouver son allemand avant l'arrivée. Ces exceptions sont appréciées **au cas par cas par la section des visas**, sur pièces, et il vaut mieux ne pas construire tout votre projet sur l'une d'elles sans être sûr qu'elle s'applique. Elles se regroupent en quelques familles." },
    { p: "La première concerne la personne qui rejoint. Le certificat n'est pas exigé si le conjoint **ne peut pas prouver ses connaissances en raison d'une maladie ou d'un handicap**, physique, mental ou psychique. Il ne l'est pas non plus si son besoin d'intégration est manifestement faible, ou si, pour d'autres raisons, il n'aurait pas droit à un cours d'intégration en Allemagne." },
    { p: "La deuxième famille dépend du statut de l'époux déjà installé en Allemagne. Le certificat n'est pas demandé si celui-ci détient une **carte bleue européenne**, une carte ICT ou certains titres liés à la recherche ou à un emploi qualifié énumérés par la loi, ou s'il en était titulaire juste avant d'obtenir son séjour permanent. Il en va de même pour certains titres humanitaires, comme ceux des réfugiés reconnus, lorsque le mariage existait déjà avant que l'époux ne s'installe en Allemagne. Enfin, l'exception vaut si l'époux installé est d'une nationalité qui lui permet d'entrer en Allemagne sans visa pour un long séjour ; ce n'est pas le cas des Marocains." },
    { p: "La troisième famille est la plus discutée : le certificat n'est pas exigé si, avant l'entrée, des efforts pour apprendre l'allemand **ne sont pas possibles ou pas raisonnablement exigibles** en raison des circonstances particulières du cas. Ce motif suppose de démontrer, documents à l'appui, ce qui vous empêche d'apprendre ou de réussir l'examen. Le simple fait de trouver l'examen difficile ne suffit pas." },
    { p: "À côté de ces exceptions légales, l'ambassade à Rabat applique une dispense pratique : si vous parlez **allemand couramment**, vous n'avez pas besoin de certificat, et votre niveau est vérifié au guichet lors du dépôt. Sa page renvoie aussi à une fiche du BAMF sur les autres exceptions possibles. Si vous pensez être concerné, signalez-le dans votre demande et joignez les justificatifs ; la décision appartient à la section des visas." },
    { table: {
      head: ['Situation', 'Certificat A1 avant le visa ?'],
      rows: [
        ['Cas général, conjoint d’un Allemand ou d’un étranger résidant en Allemagne', 'Oui, de moins de 12 mois'],
        ['Maladie ou handicap empêchant de prouver ses connaissances', 'Non, sur justificatifs'],
        ['Époux installé titulaire d’une carte bleue européenne ou d’une carte ICT', 'Non'],
        ['Apprentissage impossible ou non exigible avant l’entrée, cas particulier', 'Non, si démontré'],
        ['Conjoint qui parle déjà allemand couramment', 'Non, contrôle au guichet'],
      ],
      note: "Sources : § 30 al. 1 et § 28 al. 1 de l'Aufenthaltsgesetz ; page « Conjoint/conjointe » de l'ambassade à Rabat. Tableau simplifié : la loi prévoit d'autres cas et des conditions précises, à vérifier sur les textes.",
    } },

    { h: "Où passer l'examen au Maroc" },
    { p: "Le Goethe-Institut Marokko organise ses examens dans ses deux instituts, **à Rabat et à Casablanca**. Chaque session a ses propres dates et son lieu, publiés sur la page de l'examen avec sa période d'inscription. L'inscription se fait en ligne : les réservations ouvrent à 9 heures le premier jour de la période d'inscription, et les places partent parfois vite. Préparez donc votre compte et vos informations avant l'ouverture." },
    { p: "Le Goethe-Institut au Maroc indique aussi qu'un **tarif réduit** s'applique si vous avez suivi un cours d'allemand chez lui et que ce cours s'est terminé moins de six mois avant la date de l'examen ; la réduction est appliquée automatiquement lors de la réservation. Les montants changent : consultez les tarifs en vigueur sur goethe.de/marokko au moment de réserver. Le Start Deutsch 1 est un examen pour adultes, sans âge minimum, recommandé **à partir de 16 ans**." },
    { p: "Les certificats telc et ÖSD sont aussi acceptés par l'ambassade. Si vous préférez l'un d'eux, vérifiez sur le site de l'organisme qu'un centre agréé organise des sessions près de chez vous. Quel que soit l'organisme, retenez la règle des 12 mois : un certificat obtenu trop tôt peut expirer avant votre rendez-vous, alors qu'un certificat obtenu trop tard retarde le dépôt. **Calez la date d'examen sur votre calendrier de visa**, en tenant compte du délai d'obtention des documents de mariage légalisés et traduits." },

    { figure: { photo: 'goethe-a1-exam-ma-headphones', alt: "Des écouteurs blancs reliés à un téléphone, à côté d'un ordinateur portable sur une table en bois", caption: "Les enregistrements officiels des sets d'exercices durent près de 20 minutes, comme l'épreuve d'écoute." } },

    { h: 'Comment se préparer sérieusement' },
    { p: "Le Goethe-Institut estime qu'il faut **entre 80 et 200 unités de cours de 45 minutes** pour atteindre le niveau A1, selon vos connaissances de départ et vos conditions d'apprentissage. Un francophone qui a déjà étudié l'anglais part rarement de zéro sur la logique d'une langue étrangère, mais l'allemand a sa propre prononciation, ses genres et ses déclinaisons. Comptez quelques mois de travail régulier plutôt que quelques semaines intensives juste avant l'examen." },
    { p: "Le meilleur matériel est gratuit et officiel. Sur la page de préparation, le Goethe-Institut publie un modèle d'examen et **deux sets d'exercices**, Übungssatz 01 et Übungssatz 02, chacun en PDF avec son enregistrement d'écoute. Il propose aussi une vidéo de l'épreuve orale du modèle, d'environ 13 minutes, pour voir comment se déroule l'oral en groupe, ainsi que la liste de mots de l'examen et un manuel qui décrit les objectifs et les tâches. Faites ces sets en conditions réelles, chronomètre en main, plutôt que de les feuilleter." },
    { p: "Organisez votre préparation par épreuve. Pour l'écoute, entraînez-vous aux chiffres, aux heures, aux jours et aux prix, qui reviennent sans cesse dans les annonces et les messages. Pour la lecture, habituez-vous à chercher une information précise dans une petite annonce ou un panneau sans tout comprendre. Pour l'écrit, apprenez à **rédiger un court message complet** : une formule d'appel, les trois points demandés dans la consigne, une formule de fin. Pour l'oral, répétez votre présentation, mais surtout entraînez-vous à poser des questions et à réagir à celles des autres." },
    { examples: [
      ['Ich heiße Youssef. Ich komme aus Marokko und wohne in Fès.', "Je m'appelle Youssef. Je viens du Maroc et j'habite à Fès. (partie 1 de l'oral : se présenter)"],
      ['Mein Name ist B-E-N-N-A-N-I.', "Mon nom est B-E-N-N-A-N-I. (partie 1 : épeler, avec l'alphabet allemand)"],
      ['Was machst du am Wochenende?', 'Que fais-tu le week-end ? (partie 2 : poser une question à partir d’une carte)'],
      ['Können Sie bitte das Fenster öffnen?', 'Pouvez-vous ouvrir la fenêtre, s’il vous plaît ? (partie 3 : formuler une demande)'],
      ['Liebe Anna, ich kann am Samstag leider nicht kommen.', "Chère Anna, je ne peux malheureusement pas venir samedi. (écrit, partie 2 : début d'un message)"],
    ] },
    { mistakes: [
      ['Ich habe 25 Jahre.', 'Ich bin 25 Jahre alt.', "Calque du français « j'ai 25 ans » : en allemand, on « est » âgé de 25 ans."],
      ['Ich wohne in Casablanca seit drei Jahren.', 'Ich wohne seit drei Jahren in Casablanca.', "Le complément de temps vient en général avant le lieu."],
      ['Morgen ich gehe zum Arzt.', 'Morgen gehe ich zum Arzt.', 'Le verbe conjugué reste en deuxième position, même quand la phrase commence par un adverbe.'],
    ] },
    { note: { title: "L'alphabet, un détail qui rapporte", text: "À l'oral, on vous demande d'épeler un mot, souvent votre nom. Les lettres allemandes ne se prononcent pas comme en français : le « e » se dit « é », le « i » se dit « i », le « j » se dit « yott », le « v » se dit « faou » et le « w » se dit « vé ». Entraînez-vous à épeler votre nom, votre prénom et le nom de votre ville jusqu'à ce que ce soit automatique.", draw: 'parrot' } },
    { p: "Gardez aussi en tête que l'examen n'est qu'une étape. L'ambassade peut vérifier votre allemand au guichet, et votre vie en Allemagne commencera avec des démarches, des voisins, peut-être une école. Chez Alimun, les cours d'allemand se font **en direct avec un professeur, en petit groupe**, ce qui reproduit la situation de l'oral du Start Deutsch 1, où l'on parle et répond devant d'autres personnes. Un test de niveau vous indique par où commencer." },
    { quote: "Le certificat prouve le niveau A1 ; le guichet de l'ambassade vérifie qu'il est bien le vôtre." },

    { h: 'Votre calendrier, du premier cours au visa' },
    { p: "Partez de la fin. L'ambassade conseille de compter environ trois mois de traitement après le dépôt, et votre certificat doit avoir moins de 12 mois le jour de la demande. Entre les deux, il faut réunir les documents de mariage légalisés et traduits, obtenir un rendez-vous et, si votre époux n'est pas allemand, une copie de son titre de séjour. **Commencez l'allemand dès que le projet de regroupement est décidé**, puis réservez l'examen quand vous êtes régulièrement au-dessus de 60 points sur les sets d'exercices officiels." },
    { p: "Si vous échouez, ne vous découragez pas : l'examen se repasse en entier, et le détail de vos points par épreuve vous montre où travailler. Enfin, méfiez-vous des promesses de certificat sans examen ou de résultat garanti. L'ambassade vérifie l'authenticité des certificats et le niveau réel des candidats, et **les règles comme les frais évoluent** : avant chaque étape, relisez la page officielle de l'ambassade et celle du Goethe-Institut Marokko." },
  ],
  quiz: [
    { q: "Quel niveau d'allemand l'ambassade à Rabat demande-t-elle en règle générale pour le visa de conjoint ?", options: ['Aucun', 'A1', 'B1', 'B2'], a: 1, why: "La loi demande que le conjoint sache se faire comprendre de façon simple, ce qui correspond au niveau A1." },
    { q: "Combien de temps dure l'épreuve écrite du Start Deutsch 1 ?", options: ['45 minutes', '65 minutes avec une pause', '65 minutes sans pause', '90 minutes'], a: 2, why: 'Écouter (environ 20 min), lire (25 min) et écrire (20 min) se passent à la suite, en 65 minutes sans pause.' },
    { q: "Combien de candidats au plus compte un groupe à l'oral ?", options: ['Deux', 'Trois', 'Quatre', 'Six'], a: 2, why: "L'oral se passe en groupe de quatre candidats au maximum, devant deux examinateurs." },
    { q: 'Combien de points faut-il pour réussir l’examen ?', options: ['50 sur 100', '60 sur 100', '70 sur 100', '60 % dans chaque épreuve'], a: 1, why: 'Il faut au moins 60 points sur 100 au total, toutes les épreuves ayant été passées.' },
    { q: "Que se passe-t-il si vous obtenez moins de 35 points à l'écrit ?", options: ["Vous passez l'oral normalement", "Vous n'êtes pas admis à l'oral", "Vous repassez seulement l'écrit", 'Vous obtenez un certificat A1 partiel'], a: 1, why: "Avec moins de 35 points à l'écrit, 60 points ne sont plus atteignables, même avec 25 à l'oral." },
    { q: "Quel est l'âge maximum du certificat au moment de la demande de visa ?", options: ['6 mois', '12 mois', '24 mois', 'Aucune limite'], a: 1, why: "L'ambassade à Rabat demande un certificat de moins de 12 mois." },
    { q: "Que vous demande-t-on aussi dans la première partie de l'oral ?", options: ['Lire un texte à voix haute', 'Épeler un mot et donner un nombre', 'Résumer un article', 'Décrire une image pendant deux minutes'], a: 1, why: "Après la présentation, on vous demande d'épeler un mot et de reproduire un nombre." },
    { q: "Dans quel cas le certificat A1 n'est-il pas exigé selon le § 30 ?", options: ['Si le conjoint a un diplôme universitaire', "Si l'époux installé en Allemagne a une carte bleue européenne", 'Si le couple est marié depuis plus de cinq ans', "Si le conjoint parle anglais"], a: 1, why: "Le conjoint d'un titulaire de la carte bleue européenne fait partie des exceptions prévues par la loi." },
  ],
  faq: [
    ["Le Goethe-Zertifikat A1 est-il le seul certificat accepté pour le regroupement familial ?", "Non. L'ambassade d'Allemagne à Rabat accepte aussi les certificats A1 de telc, de l'ÖSD et du centre d'examens ECL ; le TestDaF n'existe qu'à partir du niveau B2. Le certificat doit avoir moins de 12 mois et, pour un examen par modules, tous les modules doivent venir du même organisme."],
    ["Peut-on repasser seulement l'épreuve ratée ?", "Non. Le Goethe-Zertifikat A1 : Start Deutsch 1 n'est pas modulaire : en cas d'échec, on le repasse en entier. Le détail des points par épreuve vous aide à cibler vos révisions."],
    ["Mon époux est allemand : dois-je quand même passer l'A1 ?", "En règle générale, oui. Le § 28 de la loi sur le séjour renvoie aux conditions de langue du § 30 et à ses exceptions. Seuls les cas prévus par la loi, comme une maladie ou un handicap, ou l'impossibilité démontrée d'apprendre avant l'entrée, permettent une dispense, ainsi qu'un allemand courant vérifié au guichet."],
    ["Où trouver des sujets d'entraînement officiels ?", "Sur la page de préparation du Goethe-Zertifikat A1 : Start Deutsch 1 sur goethe.de : un modèle d'examen, deux sets d'exercices avec leurs enregistrements, une vidéo de l'oral, la liste de mots et le manuel de l'examen. Tout est gratuit et accessible à tous."],
  ],
  related: ['germany-from-morocco', 'german-prepositions', 'germany-study-from-morocco', 'german-for-nurses'],
  sources: [
    ['Goethe-Institut Maroc : Goethe-Zertifikat A1 : Start Deutsch 1 (lu sur web.archive.org)', 'https://www.goethe.de/ins/ma/fr/spr/prf/gzsd1.cfm'],
    ['Goethe-Institut Maroc : Start Deutsch 1, renseignements supplémentaires et épreuves (lu sur web.archive.org)', 'https://www.goethe.de/ins/ma/fr/spr/prf/gzsd1/inf.html'],
    ["Goethe-Institut Maroc : Start Deutsch 1, documents d'entraînement (lu sur web.archive.org)", 'https://www.goethe.de/ins/ma/fr/spr/prf/gzsd1/ueb.html'],
    ['Goethe-Institut : Durchführungsbestimmungen Goethe-Zertifikat A1 : Start Deutsch 1, version du 1er septembre 2025 (lu sur web.archive.org)', 'https://www.goethe.de/pro/relaunch/prf/en/Durchfuehrungsbestimmungen_A1_Start_Deutsch_1.pdf'],
    ["Goethe-Institut Marokko : examens d'allemand à Casablanca et Rabat", 'https://www.goethe.de/ins/ma/fr/spr/prf.html'],
    ["Ambassade d'Allemagne à Rabat : visa pour rejoindre son conjoint", 'https://rabat.diplo.de/ma-fr/service/visa/2798414-2798414'],
    ["Ambassade d'Allemagne à Rabat : visa national (visa D)", 'https://rabat.diplo.de/ma-fr/service/visa/visa-national'],
    ['Loi sur le séjour § 30 : regroupement des époux', 'https://www.gesetze-im-internet.de/aufenthg_2004/__30.html'],
    ["Loi sur le séjour § 28 : regroupement familial auprès d'un Allemand", 'https://www.gesetze-im-internet.de/aufenthg_2004/__28.html'],
  ],
};
