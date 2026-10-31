// Third design (docs/BLOG_PLAN.md). Vérifié le 31 oct. 2026 sur cambridgeenglish.org : page de l'examen B2 First,
// format, résultats (tranches de score, mentions, délais des résultats, pas d'expiration), handbook officiel du B2 First
// (parties, points, poids égal, critères d'évaluation, règles des key word transformations, 1939) et guide du
// Statement of Results ; heures d'apprentissage guidé du site d'assistance Cambridge English. Alimun n'est pas affiliée à Cambridge.
export default {
  key: 'b2-first',
  site: 'fr',
  slug: 'examen-b2-first-cambridge',
  section: 'exams',
  course: 'English',
  published: '2026-10-31',
  updated: '2026-10-31',
  title: 'Examen B2 First de Cambridge (FCE) : le guide complet',
  metaTitle: 'B2 First Cambridge (FCE) : épreuves, scores, préparation – Alimun',
  desc: "Toutes les épreuves du B2 First, l'ancien FCE, avec leur durée, le fonctionnement de la Cambridge English Scale et des mentions, et un plan de révision.",
  lead: "Le B2 First, longtemps appelé First Certificate in English ou FCE, est l'une des certifications d'anglais les plus connues en Europe. Il évalue les quatre compétences ainsi que la grammaire et le vocabulaire, et **il prouve que tu as atteint le niveau intermédiaire avancé**. Voici comment il fonctionne, partie par partie, et comment le préparer.",
  photo: '__H__',
  sticker: { draw: 'owl', say: 'Cinq scores, une moyenne, un certificat.' },
  facts: [
    { n: 4, unit: 'épreuves', text: 'Reading and Use of English, Writing, Listening et Speaking' },
    { n: 52, unit: 'questions', text: 'en Reading and Use of English, réparties en sept parties en 1 h 15' },
    { n: 180, text: 'le score de la Cambridge English Scale qui donne la mention A et un certificat de niveau C1' },
    { label: "Pas d'expiration", text: 'pour le certificat, même si certains organismes demandent un résultat récent' },
  ],
  blocks: [
    { take: { title: 'La réponse courte', text: "Le B2 First est l'examen Cambridge English du niveau B2 du CECRL. Il compte quatre épreuves et dure **environ trois heures et demie**. Tu obtiens un score de 122 à 190 sur la Cambridge English Scale : de 160 à 179, tu as le certificat B2 ; à partir de 180, la mention A et un certificat de niveau C1 ; de 140 à 159, un certificat de niveau B1. Le certificat n'expire pas.", draw: 'owl' } },

    { h: "Qu'est-ce que le B2 First et à qui s'adresse-t-il ?" },
    { p: "Le B2 First fait partie des Cambridge English Qualifications, une série d'examens qui va de l'A2 Key au C2 Proficiency, chacun conçu pour un seul niveau. Il a été proposé pour la première fois en 1939 et s'est appelé pendant des décennies **First Certificate in English**, ou FCE. Beaucoup d'enseignants et d'employeurs utilisent encore l'ancien nom, et le certificat lui-même porte toujours la mention « B2 First Certificate in English »." },
    { p: "L'examen vise le **niveau B2**, intermédiaire avancé, du Cadre européen commun de référence pour les langues (CECRL), l'échelle de six niveaux de A1 à C2. Cambridge le présente comme la preuve que tu peux travailler dans un environnement anglophone, vivre de façon autonome dans un pays anglophone ou suivre des études de niveau intermédiaire avancé, par exemple un cursus préparatoire à l'université. Concrètement, au niveau B2, tu suis un exposé sur un sujet familier, tu tiens une conversation sur des thèmes assez variés et tu donnes ton avis en le justifiant." },
    { p: "C'est donc l'étape logique après le B1 Preliminary, et Cambridge rappelle qu'il est accepté par de nombreux établissements et universités pour les études, ainsi que par les employeurs. Si tu n'es pas sûr de ton niveau, vérifie-le d'abord : le B2 First mesure un seul niveau, et **le passer trop tôt est un moyen facile de perdre du temps et de l'argent**." },

    { h: "Les quatre épreuves en un coup d'œil" },
    { p: "L'examen comporte quatre épreuves. Reading and Use of English, Writing et Listening sont des épreuves écrites, tandis que le Speaking se passe en face à face avec deux examinateurs ; ton centre d'examen te communique la date et l'heure de chacune. Cambridge indique une durée totale d'**environ 3 h 30**." },
    { table: {
      head: ['Épreuve', 'Durée', 'Parties', 'Questions', 'Ce qui est évalué'],
      rows: [
        ['Reading and Use of English', '1 h 15', '7', '52', 'Grammaire, vocabulaire et compréhension écrite'],
        ['Writing', '1 h 20', '2', '2 textes', 'Un essai et un texte au choix, de 140 à 190 mots chacun'],
        ['Listening', 'Environ 40 minutes', '4', '30', 'Compréhension orale ; chaque enregistrement est diffusé deux fois'],
        ['Speaking', '14 minutes par binôme', '4', '–', "Parler seul, avec l'examinateur et avec un autre candidat"],
      ],
      note: "Le Speaking dure 20 minutes quand trois candidats le passent ensemble. Le format est identique sur papier et sur ordinateur.",
    } },
    { p: "Les cinq scores que tu reçois, en Reading, Use of English, Writing, Listening et Speaking, **ont le même poids**. Même si Reading and Use of English est une seule épreuve, elle compte donc pour deux de tes cinq scores : une bonne raison de la prendre au sérieux." },

    { figure: { photo: '__F1__', alt: '__F1_ALT__', caption: "Les textes de Reading and Use of English totalisent 2 200 à 2 500 mots : la vitesse de lecture compte autant que la grammaire." } },

    { h: 'Reading and Use of English' },
    { p: "Cette épreuve dure 1 h 15 et compte sept parties pour 52 questions. Les quatre premières parties forment le **Use of English** : des exercices courts qui testent directement la grammaire et le vocabulaire. Les trois dernières sont de la lecture : des textes plus longs tirés d'articles, de rapports, de fiction, de publicités, de lettres et d'autres sources, environ 2 200 à 2 500 mots en tout." },
    { h3: 'Parties 1 à 4 : Use of English' },
    { p: "Dans la Part 1, un texte à trous à choix multiples, tu lis un court texte avec huit blancs et tu choisis le bon mot parmi quatre propositions. Elle teste le vocabulaire : collocations, expressions figées, phrasal verbs et mots de sens proche. Dans la Part 2, un texte à trous ouvert, il y a huit autres blancs mais **aucune proposition** : tu écris toi-même un mot, le plus souvent un mot grammatical comme une préposition, un article, un auxiliaire ou un pronom. Dans la Part 3, la formation des mots, tu transformes un mot donné pour remplir huit blancs, par exemple « decide » en « decision » ou « able » en « unable »." },
    { p: "La Part 4, les key word transformations, est celle dont on parle le plus. Tu reçois une phrase et un mot clé, et tu complètes une seconde phrase de même sens avec **deux à cinq mots**, mot clé compris, sans le modifier. Les formes contractées comme didn’t comptent pour deux mots. Il y a six questions, chacune notée sur deux points, car la réponse est corrigée en deux moitiés. Dans les parties 2, 3 et 4, l'orthographe doit être exacte." },
    { examples: [
      ['I haven’t seen Maria for three years. (SINCE) It ___ I saw Maria.', 'Réponse : **has been three years since** (cinq mots, le maximum).'],
      ['It wasn’t necessary for us to book a table. (NEED) We ___ a table.', 'Réponse : **didn’t need to book**. Cela fait cinq mots, car didn’t compte pour deux.'],
      ['“Can you help me?” Anna asked Ben. (WHETHER) Anna asked Ben ___ help her.', 'Réponse : **whether he could** (trois mots). C’est le discours indirect : can devient could, comme en français « tu peux » devient « s’il pouvait ».'],
    ] },
    { h3: 'Parties 5 à 7 : Reading' },
    { p: "La Part 5 est un texte plus long avec six questions à choix multiples sur des détails, des opinions et des attitudes, chacune sur **deux points**. La Part 6 est un texte lacunaire : six phrases ont été retirées d'un article et mélangées à une septième qui ne va nulle part, et tu remets chacune à sa place en suivant la logique et les renvois d'un paragraphe à l'autre. La Part 7 est un exercice d'appariement : dix questions où tu cherches quel texte, ou quelle partie de texte, mentionne une information. Elle récompense la lecture rapide plus que la lecture minutieuse." },
    { note: { title: 'Deux points par question dans les parties 5 et 6', text: "Les parties 5 et 6 n'ont que six questions chacune, mais chaque question vaut deux points. Garde du temps : **bâcler les longs textes à la fin** coûte plus cher qu'un démarrage lent dans la Part 1.", draw: 'snail' } },

    { h: 'Writing' },
    { p: "L'épreuve de Writing dure 1 h 20 et tu rédiges deux textes de **140 à 190 mots** chacun. La Part 1 est obligatoire : **un essai** (essay) où tu donnes ton avis sur un sujet d'intérêt général. On te donne deux idées à développer et tu en ajoutes une troisième de ton choix. L'essai s'adresse à ton professeur, donc un style neutre ou assez soutenu convient." },
    { p: "Dans la Part 2, tu choisis **une tâche dans une courte liste**. Dans le B2 First, les formats sont l'article, l'e-mail ou la lettre, la critique (review) et le rapport (report). Chaque tâche précise un destinataire et un objectif, comme recommander un lieu à un ami ou rendre compte d'un événement scolaire au responsable d'un groupe, et tu es évalué sur l'efficacité de ton texte pour ce lecteur." },
    { p: "Les examinateurs notent chaque texte sur **quatre échelles** : Content, as-tu fait tout ce que demandait la tâche ; Communicative Achievement, le style et le format conviennent-ils au lecteur ; Organisation, le texte est-il bien construit ; et Language, la variété et la justesse de ta grammaire et de ton vocabulaire. Cambridge demande aussi de rester cohérent dans une variété d'anglais : l'orthographe britannique et l'américaine sont acceptées, à condition de ne pas les mélanger." },
    { figure: { photo: '__F2__', alt: '__F2_ALT__', caption: 'Les deux tâches de Writing demandent 140 à 190 mots : quelques minutes de plan t’aident à traiter tous les points demandés.' } },
    { note: { title: 'Le nombre de mots est un repère', text: "Un texte trop court risque de manquer de variété ou d'oublier un point ; un texte trop long risque de sortir du sujet. **Vise le milieu de la fourchette** et consacre tes mots à ce dont le lecteur a besoin.", draw: 'teacup' } },

    { h: 'Listening' },
    { p: "Le Listening dure environ 40 minutes et compte quatre parties pour 30 questions. Dans la Part 1, tu entends huit courts enregistrements sans lien entre eux, d'environ 30 secondes, et tu réponds à une question à trois options pour chacun. Dans la Part 2, tu écoutes une intervention de trois à quatre minutes et tu complètes dix phrases avec des mots entendus. Dans la Part 3, cinq personnes parlent d'un même thème pendant environ 30 secondes chacune, et tu dois **associer chaque personne** à l'une de huit affirmations. Dans la Part 4, tu réponds à sept questions à trois options sur une interview ou une conversation de trois à quatre minutes." },
    { p: "Chaque enregistrement est diffusé **deux fois**. Utilise la première écoute pour l'idée générale et une réponse provisoire, et la seconde pour la vérifier. La Part 3 est la plus piégeuse : trois des huit affirmations ne servent pas, et une personne peut évoquer l'idée d'une mauvaise option avant de dire ce qu'elle pense vraiment." },
    { figure: { photo: '__F3__', alt: '__F3_ALT__', caption: "Chaque enregistrement du Listening passe deux fois : la première pour l'idée générale, la seconde pour vérifier ta réponse." } },

    { h: 'Speaking' },
    { p: "Tu passes généralement le Speaking **avec un autre candidat**, ou en groupe de trois, devant deux examinateurs. L'un, l'interlocutor, pose les questions et te donne les tâches ; l'autre, l'assessor, écoute et attribue les notes. L'épreuve dure 14 minutes pour un binôme et compte quatre parties. Tu es évalué sur ta propre prestation, pas par comparaison avec ton partenaire." },
    { p: "La Part 1 est un court entretien d'environ deux minutes, avec des questions sur toi, ton travail ou tes études, tes loisirs et tes projets. Dans la Part 2, chaque candidat reçoit deux photos et en parle seul pendant une minute, en les comparant et en répondant à la question écrite au-dessus ; puis tu commentes les photos de ton partenaire pendant environ 30 secondes. Dans la Part 3, ton partenaire et toi discutez d'une question accompagnée de plusieurs pistes écrites pendant deux minutes, puis vous avez **une minute de plus pour prendre une décision** ensemble. Dans la Part 4, l'examinateur pose d'autres questions sur le même thème, et la discussion dure environ quatre minutes." },
    { p: "L'assessor note Grammar and Vocabulary, Discourse Management, Pronunciation et **Interactive Communication**, et l'interlocutor donne une note globale (global achievement). L'interaction compte : dans les parties 3 et 4, réagir à ce que dit ton partenaire, lui demander son avis et rebondir dessus rapporte plus qu'un discours préparé." },
    { figure: { photo: '__F4__', alt: '__F4_ALT__', caption: 'Dans la Part 3, tu discutes avec ton partenaire pendant deux minutes, puis vous avez une minute pour vous mettre d’accord.' } },

    { cta: true },

    { h: 'Comment fonctionne la Cambridge English Scale' },
    { p: "Les résultats du B2 First sont exprimés sur la **Cambridge English Scale**, une échelle de scores commune à toutes les Cambridge English Qualifications. Tu reçois un score distinct en Reading, Use of English, Writing, Listening et Speaking, et ton score global est la moyenne des cinq. Ta mention et ton niveau du CECRL dépendent tous deux de ce score global." },
    { table: {
      head: ['Score global', 'Résultat', 'Ce que tu reçois'],
      rows: [
        ['De 180 à 190', 'Mention A', 'Le certificat B2 First attestant un niveau C1'],
        ['De 173 à 179', 'Mention B', 'Le certificat B2 First de niveau B2'],
        ['De 160 à 172', 'Mention C', 'Le certificat B2 First de niveau B2'],
        ['De 140 à 159', 'Niveau B1', 'Un certificat Cambridge English de niveau B1'],
        ['De 122 à 139', 'Pas de certificat', 'Le score figure sur le Statement of Results'],
      ],
      note: 'Chaque candidat reçoit un Statement of Results avec les cinq scores et le score global.',
    } },
    { p: "Deux conséquences en découlent. D'abord, **une épreuve faible ne te coule pas à elle seule** : un Writing plus bas peut être compensé par un bon Listening et un bon Reading. Ensuite, l'échelle te sert de filet de sécurité. Si tu rates le B2 de peu, un score de 140 à 159 te donne quand même un certificat B1 ; si tu réussis très bien, 180 ou plus te donne la mention A et un certificat de niveau C1." },
    { p: "Un C1 sur un certificat B2 First est un vrai atout, mais il ne vaut pas la réussite au C1 Advanced, conçu pour évaluer tout le niveau C1. Si une université ou un employeur exige précisément le C1 Advanced, c'est cet examen qu'il faut passer. Beaucoup d'organismes fixent leur exigence sous forme de score global minimum plutôt que de mention, et Cambridge présente le score global comme **l'information la plus importante** du résultat." },
    { quote: 'Cinq scores, une moyenne : une épreuve ratée ne décide pas de ton résultat.' },
    { note: { title: 'Regarde le score, pas seulement la mention', text: "Si un organisme demande un score minimum, regarde ton score global sur le Statement of Results. Certains fixent aussi un minimum par compétence, alors **lis l'exigence mot pour mot**.", draw: 'parrot' } },

    { h: 'Sur papier ou sur ordinateur' },
    { p: "Tu peux passer le B2 First sur papier ou sur ordinateur dans un centre d'examen agréé. **Le contenu, la durée et le format sont identiques**, tout comme le certificat. Sur ordinateur, tu tapes tes réponses et, à la fin du Listening, tu as deux minutes pour les vérifier ; sur papier, tu écris sur une feuille de réponses et tu as cinq minutes pour reporter tes réponses du Listening. Le Speaking se passe toujours en face à face." },
    { p: "La grande différence pratique, c'est la rapidité. Les résultats de l'examen sur ordinateur sont généralement disponibles **5 à 10 jours ouvrés** après l'examen, ceux sur papier en principe 4 à 6 semaines après. La Confirmation of Entry de ton centre indique la date limite de tes résultats. Si tu as une échéance pour une inscription ou une candidature, cette différence peut trancher pour toi." },

    { h: 'B2 First ou B2 First for Schools ?' },
    { p: "Il existe deux versions de l'examen au même niveau. **B2 First for Schools** a les mêmes épreuves, parties, durées et scores que le B2 First, et le même niveau du CECRL. Il n'y a qu'une différence, dans la Part 2 du Writing : la version for Schools peut proposer un récit (story), alors que le rapport (report) n'apparaît que dans la version standard." },
    { p: "Cambridge conçoit le B2 First pour les adultes et le B2 First for Schools pour les élèves. Le niveau est le même ; seuls changent **les thèmes et les textes**, choisis selon les centres d'intérêt et l'expérience des candidats plus jeunes. Si tu es au lycée, demande à ton centre quelle version il propose." },

    { h: 'Validité et reconnaissance' },
    { p: "Les certificats Cambridge English **n'expirent pas**. Un B2 First obtenu cette année reste un certificat valable dans vingt ans. Chaque organisme décide toutefois de l'ancienneté qu'il accepte, et certaines universités, entreprises et administrations demandent un certificat récent. Vérifie avant de compter sur un certificat ancien." },
    { p: "Cambridge indique que ses certifications sont acceptées par **des milliers d'entreprises et d'établissements d'enseignement** dans le monde. Le B2 First est reconnu comme preuve d'un anglais intermédiaire avancé pour des emplois dans l'industrie, l'administration et les services, et par de nombreux établissements et universités pour les études. Cambridge publie sur son site les organismes qui le reconnaissent, mais le dernier mot revient toujours à la page des conditions d'admission de l'université ou de l'entreprise visée." },

    { h: 'B2 First ou IELTS ?' },
    { p: "On les compare souvent, et ils répondent à des questions différentes. L'IELTS est un test unique pour tous les niveaux qui te donne une note de 0 à 9 ; la plupart des organismes acceptent un résultat IELTS pendant **deux ans**. Le B2 First certifie un niveau, avec un certificat qui n'expire pas. Au Listening de l'IELTS, tu entends chaque enregistrement une seule fois et le Speaking se passe en tête-à-tête avec un examinateur ; au B2 First, tu entends tout deux fois et tu parles en général avec un partenaire." },
    { p: "Pour l'immigration et beaucoup de candidatures universitaires dans les pays anglophones, c'est souvent l'organisme lui-même qui exige l'IELTS. Pour **un CV en Europe**, des objectifs scolaires et des postes où il faut prouver un B2, le B2 First est très connu et garde sa valeur. Notre article IELTS ou Cambridge compare les deux en détail." },

    { h: 'Combien de temps pour se préparer' },
    { p: "Cambridge English donne des **heures d'apprentissage guidé** approximatives pour chaque niveau : environ 350 à 400 heures depuis zéro pour le B1, et environ 500 à 600 pour le B2. Ce sont des repères, pas des règles, et elles comptent les heures avec un enseignant, mais elles donnent un ordre de grandeur : passer d'un B1 solide au B2 demande en général **environ 150 à 200 heures** d'apprentissage guidé, plus ton travail personnel." },
    { p: "La réponse honnête dépend donc de ton point de départ. Si tu as déjà le niveau B2 et que tu dois seulement apprivoiser le format, quelques semaines à deux ou trois mois d'entraînement régulier suffisent souvent. Si tu es au B1, prévois des mois de travail régulier sur la langue, puis le format de l'examen. À raison de trois heures de cours par semaine, 150 à 200 heures guidées représentent **environ un an, voire plus**, de cours." },

    { h: 'Un plan de préparation concret' },
    { p: "Commence par un **diagnostic** : fais un examen blanc officiel complet en temps réel, ou au moins une épreuve de chaque type. Corrige-le et note ton score dans chacun des cinq domaines. Tu sauras ainsi s'il te manque plutôt de la langue ou de l'entraînement à l'examen, et où investir tes heures." },
    { p: "Au début, construis la langue. Lis des articles et des nouvelles chaque semaine et tiens un carnet de collocations, de phrasal verbs et de familles de mots, qui nourrissent directement les parties 1, 2 et 3. Entraîne-toi à **reformuler** : prends une phrase et dis-la autrement. C'est exactement la compétence des key word transformations, et elle aide aussi en Writing et en Speaking." },
    { p: "Quand la langue commence à suivre, travaille l'examen partie par partie. Fais une ou deux parties de Use of English plusieurs fois par semaine, reprends chaque erreur et note pourquoi c'était faux. Écris un texte par semaine dans un format différent de la Part 2 et fais-le corriger : **un retour sur tes textes** vaut plus que d'en écrire deux fois plus sans retour. Écoute des podcasts et des interviews, puis fais des parties du Listening chronomètre en main." },
    { p: "Entraîne-toi au Speaking à voix haute **avec une autre personne**. Chronomètre ta minute de monologue avec ton téléphone, compare les photos au lieu de les décrire l'une après l'autre, et dans la tâche collaborative, exerce-toi à faire participer ton partenaire et à arriver à une décision avant la fin de la minute." },
    { p: "Pendant les quatre à six dernières semaines, fais des **examens blancs complets** en conditions réelles, idéalement un toutes les une à deux semaines, et analyse chacun avec soin. Inscris-toi à l'examen quand tes scores d'entraînement atteignent ton objectif, pas avant." },
    { p: "Chez Alimun, les cours en direct avec un enseignant et le même petit groupe te donnent un partenaire avec qui parler chaque semaine, et **ton enseignant corrige tes devoirs**, ce dont la préparation du Writing a le plus besoin. Tu ne connais pas ton niveau ? Le test de niveau te situe de A1 à C1 en quelques minutes." },

    { h: "Erreurs fréquentes le jour de l'examen" },
    { mistakes: [
      ['Écrire six mots dans une key word transformation', 'Utiliser **deux à cinq mots**, mot clé compris', 'Au-delà de cinq mots, la réponse vaut zéro, même si le sens est juste.'],
      ['Modifier le mot clé, par exemple need en needed', 'Garder le mot clé **exactement tel quel**', 'Si le mot clé est modifié ou absent, la réponse ne rapporte aucun point.'],
      ['Décrire les photos l’une après l’autre en Part 2 du Speaking', '**Comparer** les deux photos et répondre à la question écrite au-dessus', 'La tâche demande de comparer et de répondre, pas de décrire.'],
      ['Parler sans écouter ton partenaire en Part 3', 'Lui demander son avis et **rebondir sur ce qu’il dit**', "L'Interactive Communication fait partie des critères d'évaluation."],
      ['Écrire 240 mots pour une review en Part 2', 'Rester **entre 140 et 190 mots**', 'Un texte trop long peut contenir des passages hors sujet et perdre des points.'],
    ] },
  ],
  quiz: [
    { q: "Comment s'appelait le B2 First auparavant ?", options: ['First Certificate in English (FCE)', 'Certificate in Advanced English', 'Preliminary English Test', 'IELTS General Training'], a: 0, why: "Le B2 First s'est appelé pendant des décennies First Certificate in English, ou FCE." },
    { q: 'Combien de questions compte Reading and Use of English ?', options: ['30', '40', '52', '56'], a: 2, why: "L'épreuve compte 52 questions en sept parties et dure 1 h 15." },
    { q: 'Combien de mots peux-tu écrire dans une key word transformation ?', options: ['Un seul', 'De un à trois', 'De deux à cinq, mot clé compris', "Jusqu'à huit"], a: 2, why: 'La réponse doit compter deux à cinq mots, mot clé compris, sans le modifier.' },
    { q: 'Quelle longueur pour chaque texte du Writing ?', options: ['80 à 100 mots', '140 à 190 mots', '220 à 260 mots', 'Au moins 250 mots'], a: 1, why: 'Les deux tâches de Writing du B2 First demandent 140 à 190 mots.' },
    { q: 'Combien de fois entends-tu chaque enregistrement du Listening ?', options: ['Une fois', 'Deux fois', 'Trois fois', 'Seule la Part 1 est répétée'], a: 1, why: 'Au Listening du B2 First, chaque enregistrement passe deux fois.' },
    { q: 'Comment est calculé le score global ?', options: ['Seuls Reading et Writing comptent', 'Le Speaking compte double', "C'est la moyenne de cinq scores de même poids", "C'est le plus bas de tes scores"], a: 2, why: 'Le score global est la moyenne de Reading, Use of English, Writing, Listening et Speaking.' },
    { q: 'Tu obtiens 165 au score global. Que reçois-tu ?', options: ['Aucun certificat', 'Un certificat B1', 'La mention C et un certificat B2', 'La mention A et un certificat C1'], a: 2, why: 'De 160 à 172, tu obtiens la mention C et le certificat B2 First de niveau B2.' },
    { q: "Quand les résultats du B2 First sur ordinateur sont-ils en général disponibles ?", options: ['Le jour même', '5 à 10 jours ouvrés après', '4 à 6 semaines après', 'Trois mois après'], a: 1, why: 'Les résultats sur ordinateur arrivent en général 5 à 10 jours ouvrés après ; ceux sur papier, 4 à 6 semaines après.' },
  ],
  faq: [
    ['Le B2 First, est-ce la même chose que le FCE ?', "Oui. B2 First est le nom actuel de l'examen connu pendant des années sous le nom de First Certificate in English, ou FCE. Le niveau, B2, fait désormais partie du nom, et le certificat porte toujours la mention « B2 First Certificate in English »."],
    ['Peut-on échouer au B2 First ?', "Si ton score global est inférieur à 160, tu n'obtiens pas le certificat B2, mais un score de 140 à 159 te donne quand même un certificat de niveau B1. En dessous de 140, tu reçois ton Statement of Results sans certificat."],
    ['Le certificat B2 First expire-t-il ?', "Non. Les certificats Cambridge English n'expirent pas. Certaines universités et entreprises demandent un résultat récent : vérifie leurs exigences avant de compter sur un certificat ancien."],
    ["L'examen sur ordinateur est-il plus facile ?", "Non. Le contenu, la durée, le format et le certificat sont identiques. Les principales différences sont que tu tapes tes réponses et que les résultats arrivent plus vite, en général en 5 à 10 jours ouvrés."],
    ['Peut-on obtenir un certificat C1 avec le B2 First ?', "Oui. Un score global de 180 à 190 donne la mention A et un certificat attestant un niveau C1. Mais si un organisme exige précisément le C1 Advanced, c'est cet examen qu'il faut passer."],
  ],
  related: ['ielts-or-cambridge', 'cefr-english', 'how-long-english'],
  sources: [
    ['B2 First, Cambridge English', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/first/'],
    ['Format du B2 First', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/first/format/'],
    ['Résultats du B2 First', 'https://www.cambridgeenglish.org/exams-and-tests/first/results/'],
    ['Handbook du B2 First pour enseignants', 'https://www.cambridgeenglish.org/images/167791-b2-first-handbook.pdf'],
    ["Cambridge English, heures d'apprentissage guidé", 'https://support.cambridgeenglish.org/hc/en-gb/articles/202838506-Guided-learning-hours'],
  ],
};
