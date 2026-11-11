// Third design (docs/BLOG_PLAN.md). Facts checked 10 Nov 2026 against coe.int (CEFR global scale, Table 1, B2/C1/C2
// descriptors), cambridgeenglish.org (C1 Advanced format: four papers, 56 Reading and Use of English questions,
// 220-260-word writing tasks, Listening played twice, Speaking in pairs with two examiners; results page: grade A
// 200-210 = C2, B 193-199 and C 180-192 = C1, 160-179 = B2 certificate, 142-159 no certificate; certificates do not
// expire; digital results in 5-10 working days; C1 Advanced page: accepted by over 11,000 organisations;
// preparation page: free digital and paper sample tests; Test your English: free, rough guide only), Cambridge
// English Support (guided learning hours: about 200 per level, 700-800 cumulative to C1), ielts.org (IELTS 7-8
// correspond to C1; C1 threshold between 6.5 and 7; no one-to-one correspondence; 8.5+ = C2, 8 borderline;
// free sample questions), ets.org (TOEFL iBT 1-6 scale: 5 and 5.5 = C1, 5 = 95-106 and 5.5 = 107+ on the 0-120
// scale; C1 performance descriptors) and the ETS Global TOEIC Listening and Reading CEFR mapping table (C1 minimums
// 945 total, 490 Listening, 455 Reading, Reading cut based on 45% of panellists, not to be used strictly) and
// britishcouncil.ma (Cambridge paper tests in Casablanca and Rabat, C1 Advanced listed, minimum 10 candidates).
// No Cambridge or IELTS fee is given (no current official MAD fee confirmed today). No TOEFL or TOEIC free practice
// test is named (not opened). The Alimun C1 quiz exists at site/src/data/resources/fr/quiz-anglais-c1.js; body text
// cannot hold links, so its URL is in sources. Alimun is not affiliated with Cambridge, IELTS or ETS.
export default {
  key: 'english-c1-level',
  site: 'ma',
  slug: 'niveau-c1-anglais',
  section: 'levels',
  course: 'English',
  published: '2026-11-10',
  updated: '2026-11-10',
  title: "Le niveau C1 en anglais : définition, examens et test gratuit",
  metaTitle: "Niveau C1 en anglais : définition, examens et test gratuit – Alimun",
  desc: "Ce que veut dire le niveau C1 en anglais selon le CECRL, son équivalent au C1 Advanced, à l'IELTS, au TOEFL et au TOEIC, et comment le vérifier gratuitement.",
  lead: "Le C1 est le niveau que demandent de nombreuses universités, des masters à l'étranger et des postes où l'anglais est la langue de travail. Mais que faut-il savoir faire, concrètement, pour l'avoir ? Voici **la définition officielle du Conseil de l'Europe**, ce qu'elle donne dans chaque examen passé au Maroc, et les moyens gratuits de vous situer.",
  photo: 'english-c1-level-reading-book',
  sticker: { draw: 'owl', say: "Au C1, on ne cherche plus ses mots : on choisit les meilleurs." },
  facts: [
    { n: 700, unit: 'heures', text: "au minimum d'apprentissage guidé pour atteindre le C1 depuis zéro, selon l'estimation de Cambridge (700 à 800)" },
    { n: 180, text: "le score minimal sur la Cambridge English Scale pour obtenir le certificat C1 Advanced au niveau C1" },
    { label: 'IELTS 7 à 8', text: "la fourchette que l'IELTS fait correspondre au niveau C1" },
    { n: 945, unit: 'points', text: "le total minimal au TOEIC Listening and Reading associé au C1 dans la table d'ETS" },
  ],
  blocks: [
    { take: { title: 'La réponse courte', text: "Le C1 est l'avant-dernier des six niveaux du Cadre européen commun de référence pour les langues (CECRL). Vous comprenez des textes longs et exigeants, vous saisissez **ce qui est sous-entendu**, et vous vous exprimez avec aisance, sans trop chercher vos mots, pour vos études, votre travail ou votre vie sociale. Dans les examens, il correspond au **C1 Advanced** de Cambridge, à un IELTS d'environ 7 à 8, ou à une note de 5 à 5,5 au TOEFL iBT.", draw: 'parrot' } },

    { h: 'Ce que dit le Conseil de l’Europe' },
    { p: "Le CECRL, publié par le Conseil de l'Europe, décrit la maîtrise d'une langue sur six niveaux, de A1 à C2. Les niveaux C1 et C2 forment le groupe des utilisateurs expérimentés, appelé « Proficient user » dans la version anglaise. Le C1 n'est donc pas un « anglais parfait » : c'est **le niveau d'une personne qui utilise l'anglais efficacement** dans des situations complexes, même s'il lui reste des imprécisions." },
    { p: "L'échelle globale du Conseil de l'Europe résume le C1 en quatre idées. Vous comprenez une grande variété de textes longs et exigeants, et vous en saisissez les significations implicites. Vous vous exprimez couramment et spontanément, sans devoir chercher vos mots de façon visible. Vous utilisez la langue avec souplesse et efficacité dans la vie sociale, les études et le travail. Enfin, vous écrivez des textes clairs, bien construits et détaillés sur des sujets complexes, en maîtrisant **l'organisation du texte, les connecteurs et les articulations**." },
    { p: "Pour bien sentir ce que représente ce niveau, il faut le comparer à ceux qui l'entourent. Le Conseil de l'Europe les décrit ainsi :" },
    { levels: [
      ['B2', 'Utilisateur indépendant', "Vous comprenez l'essentiel de textes complexes sur des sujets concrets ou abstraits, y compris une discussion technique dans votre domaine. Vous échangez avec assez d'aisance pour qu'une conversation avec un locuteur natif se fasse sans effort de part et d'autre."],
      ['C1', 'Utilisateur expérimenté', "Vous comprenez des textes longs et exigeants et leurs sous-entendus, vous vous exprimez couramment sans chercher vos mots, et vous écrivez des textes clairs, structurés et détaillés sur des sujets complexes."],
      ['C2', 'Utilisateur expérimenté', "Vous comprenez sans effort pratiquement tout ce que vous lisez ou entendez, vous résumez des sources diverses de façon cohérente, et vous nuancez finement votre pensée, même dans des situations complexes."],
    ] },
    { p: "La différence entre B2 et C1 tient moins à la quantité de vocabulaire qu'à **la finesse et à la souplesse**. Au B2, vous comprenez l'idée principale d'un texte complexe ; au C1, vous percevez aussi le ton, l'ironie, ce que l'auteur laisse entendre sans le dire. Au B2, vous pouvez soutenir une conversation ; au C1, vous adaptez votre registre à une réunion, à un séminaire ou à un dîner entre amis." },

    { h: 'À l’oral et à l’écrit : ce que vous savez faire' },
    { p: "Les descripteurs du CECRL restent abstraits. ETS, l'organisme qui conçoit le TOEFL, en a repris une sélection, légèrement adaptée, pour décrire ce que font les candidats au niveau C1. Ces exemples donnent une image plus concrète de ce qu'on attend de vous." },
    { h3: 'Comprendre' },
    { p: "À l'écoute, vous suivez **la plupart des cours magistraux et des discussions** sans difficulté. Vous reconnaissez un large éventail d'expressions idiomatiques, même si vous devez parfois vérifier un détail, surtout avec un accent qui ne vous est pas familier. Vous vous servez du contexte, de la grammaire et du vocabulaire pour deviner l'attitude ou l'intention de celui qui parle, et anticiper la suite." },
    { p: "À la lecture, vous comprenez des textes longs et complexes issus de la vie sociale, professionnelle ou universitaire : un rapport, un article d'opinion, un contrat, un chapitre d'ouvrage. Vous en repérez les points de détail, y compris les opinions exprimées à demi-mot. Concrètement, vous pouvez lire la presse anglophone sans dictionnaire à portée de main, même si un mot rare vous échappe de temps en temps." },
    { h3: 'Parler' },
    { p: "À l'oral, vous vous exprimez couramment et spontanément, presque sans effort ; seul un sujet difficile peut ralentir votre débit. Vous savez nuancer une opinion selon votre degré de certitude et **exprimer un désaccord fort avec diplomatie**, ce qui compte beaucoup dans une réunion de travail. Vous n'êtes plus obligé de simplifier ce que vous voulez dire pour l'adapter à votre anglais." },
    { figure: { photo: 'english-c1-level-team-meeting', alt: "Plusieurs personnes autour d'une table en bois avec des carnets, des ordinateurs portables et des verres", caption: "Au C1, vous participez à une réunion en anglais, vous défendez votre point de vue et vous nuancez celui des autres." } },
    { h3: 'Écrire' },
    { p: "À l'écrit, vous utilisez avec souplesse un large éventail de structures grammaticales complexes. La mise en page, les paragraphes et la ponctuation sont cohérents et aident le lecteur. Vous savez rédiger un e-mail professionnel délicat, une synthèse, un rapport ou un essai argumenté, en choisissant **le registre adapté** à votre destinataire." },
    { p: "C'est souvent là que les candidats marocains, habitués à l'anglais des séries, des réseaux et des jeux vidéo, découvrent un écart. On peut très bien comprendre l'anglais parlé et écrire pourtant un texte trop familier ou mal articulé. Au C1, l'écrit formel doit être aussi solide que la compréhension." },

    { h: 'Le C1 dans les examens passés au Maroc' },
    { p: "Aucun examen ne s'appelle simplement « C1 ». Chaque organisme a sa propre échelle et publie une correspondance avec le CECRL. Ces correspondances viennent d'études menées par les organismes eux-mêmes ; elles servent de repère, pas de conversion exacte. Pour savoir quel test passer selon votre projet, consultez aussi notre article sur le choix entre TOEIC, IELTS, TOEFL et Cambridge." },
    { h3: 'Le C1 Advanced de Cambridge' },
    { p: "C'est le seul de ces examens conçu pour un niveau précis : le C1. Il comporte quatre épreuves. Le Reading and Use of English dure 1 h 30, en 8 parties et 56 questions. Le Writing dure aussi 1 h 30 : un essai obligatoire, puis une tâche au choix parmi une lettre ou un e-mail, une proposition, un rapport ou une critique, chaque texte faisant **220 à 260 mots**. Le Listening dure environ 40 minutes, en 4 parties et 30 questions, et chaque enregistrement passe deux fois. Le Speaking dure 15 minutes pour deux candidats, face à deux examinateurs." },
    { p: "Le résultat est un score sur la Cambridge English Scale. De 180 à 192, vous obtenez la mention C et un certificat C1 ; de 193 à 199, la mention B, toujours au niveau C1 ; de 200 à 210, la mention A et **un certificat de niveau C2**. Si vous obtenez entre 160 et 179, vous recevez un certificat B2. Entre 142 et 159, aucun certificat n'est délivré, mais le score figure sur votre relevé de résultats." },
    { p: "Cambridge indique que son certificat n'expire pas, même si une université ou un employeur peut fixer sa propre règle sur l'ancienneté des résultats. Il affirme aussi que plus de 11 000 établissements, entreprises et administrations l'acceptent dans le monde. Au Maroc, le British Council organise le C1 Advanced et accepte les candidats de tout le pays ; les épreuves sur papier ont lieu dans ses bureaux de Casablanca et de Rabat, et une session n'est maintenue qu'avec **au moins 10 inscrits** à la date choisie." },
    { h3: 'L’IELTS' },
    { p: "L'IELTS n'est pas un examen de niveau : il donne une note de 0 à 9 sur toute l'échelle. Ses partenaires indiquent que les notes de **7 à 8 correspondent au niveau C1**, et précisent que leurs recherches placent le seuil du C1 entre 6,5 et 7. Beaucoup de candidats à 6,5 sont déjà au C1, mais certains sont juste en dessous ; un établissement qui veut être sûr du C1 demandera donc plutôt 7. Les notes de 8,5 et plus sont reconnues comme C2, et 8 est une note limite. L'IELTS rappelle aussi qu'il n'existe pas de correspondance exacte, point par point, entre ses notes et le CECRL." },
    { h3: 'Le TOEFL iBT' },
    { p: "Depuis le 21 janvier 2026, le TOEFL iBT note chaque section et le total de 1 à 6, par demi-points, et ETS a aligné cette échelle sur le CECRL. Une note de **5 ou de 5,5** correspond au C1, que ce soit pour une section ou pour le total. Sur l'ancienne échelle de 0 à 120, encore indiquée sur les relevés pendant deux ans, un 5 équivaut à un score de 95 à 106, et un 5,5 à un score de 107 ou plus." },

    { cta: true },

    { h3: 'Le TOEIC Listening and Reading' },
    { p: "Le TOEIC Listening and Reading ne mesure que la compréhension orale et écrite, sur un total de 10 à 990. La table de correspondance publiée par ETS Global associe au C1 des scores minimaux de **490 en Listening et 455 en Reading**, soit 945 au total. Elle repose sur une étude de 2006, et ETS précise que le seuil de Reading pour le C1 ne s'appuie que sur 45 % des experts consultés." },
    { p: "ETS ajoute deux mises en garde importantes. D'abord, ces seuils sont des repères et l'organisme déconseille de les appliquer de façon stricte. Ensuite, il recommande de regarder le niveau de chaque section séparément plutôt qu'un total unique, car on peut très bien comprendre l'écrit mieux que l'oral. Et comme le test n'évalue ni l'expression orale ni l'expression écrite, **un score TOEIC ne dit rien de votre capacité à parler** ou à rédiger au niveau C1." },
    { table: {
      head: ['Examen', 'Résultat associé au C1', 'Ce que l’examen évalue'],
      rows: [
        ['C1 Advanced (Cambridge)', '180 à 199 sur la Cambridge English Scale (mentions C et B)', 'Les quatre compétences, plus grammaire et vocabulaire'],
        ['IELTS', '7 à 8 ; seuil du C1 entre 6,5 et 7', 'Les quatre compétences'],
        ['TOEFL iBT (depuis janvier 2026)', '5 ou 5,5 sur 6, soit 95 et plus sur l’ancienne échelle de 120', 'Les quatre compétences'],
        ['TOEIC Listening and Reading', '945 minimum (490 en Listening, 455 en Reading)', 'Compréhension orale et écrite seulement'],
      ],
      note: "Correspondances publiées par Cambridge, l'IELTS et ETS. Ce sont des repères : l'organisme qui lira votre résultat fixe toujours sa propre exigence.",
    } },

    { h: 'Combien d’heures pour atteindre le C1 ?' },
    { p: "Cambridge donne une estimation en heures d'apprentissage guidé, c'est-à-dire de cours et d'étude encadrée. Il faut environ **200 heures pour passer d'un niveau du CECRL au suivant**. Un candidat qui a réussi le B2 First pourrait donc avoir besoin d'environ 200 heures pour se préparer au C1 Advanced." },
    { p: "Depuis le niveau débutant, les chiffres sont cumulés : environ 500 à 600 heures pour le B2, **700 à 800 heures pour le C1** et 1 000 à 1 200 heures pour le C2. Cambridge présente ces chiffres comme une simple indication. Le temps réel dépend de votre parcours d'apprentissage, de l'intensité de vos études, de votre âge et du temps que vous passez avec l'anglais en dehors des cours." },
    { p: "Pour un étudiant marocain qui a suivi l'anglais au collège et au lycée, puis à l'université, le point de départ varie énormément. Certains arrivent au B2 en compréhension mais restent au B1 à l'écrit. Mieux vaut donc mesurer chaque compétence avant de fixer un calendrier : **200 heures de travail ciblé** sur votre point faible valent plus que des mois de révisions générales." },
    { quote: "Environ 200 heures guidées séparent le B2 du C1." },
    { p: "En pratique, 200 heures, c'est par exemple cinq heures par semaine pendant une quarantaine de semaines, entre cours, devoirs et lectures. Le passage du B2 au C1 est souvent ressenti comme le plus long, parce que les progrès deviennent moins visibles : on comprend déjà presque tout, et l'effort porte sur la précision, la nuance et la richesse du vocabulaire." },

    { h: 'Comment vérifier votre niveau gratuitement' },
    { p: "Les recherches « test anglais C1 gratuit » renvoient à des dizaines de sites, dont beaucoup ne disent pas comment leur résultat est calculé. Pour une estimation fiable, **commencez par les ressources officielles des organismes certificateurs**, qui sont gratuites." },
    { h3: 'Les tests d’exemple de Cambridge' },
    { p: "Sur la page de préparation du C1 Advanced, Cambridge propose gratuitement des tests d'exemple numériques pour le Listening, le Reading and Use of English et le Writing, ainsi que deux épreuves d'exemple sur papier avec des exemples de Speaking. Les corrigés, la transcription de l'écoute et le manuel destiné aux enseignants sont aussi téléchargeables, avec un guide pour convertir votre résultat d'entraînement. C'est le moyen le plus proche de **l'examen réel** pour savoir si vous êtes prêt." },
    { p: "Cambridge propose aussi « Test your English », un test court et gratuit d'anglais général. Il donne une première idée de votre niveau et des examens qui pourraient vous convenir, mais Cambridge précise que ce n'est pas un examen officiel et que le résultat n'est qu'une indication." },
    { h3: 'Les questions d’exemple de l’IELTS' },
    { p: "Le site officiel de l'IELTS met en ligne gratuitement des questions d'exemple, avec les réponses, pour l'IELTS Academic et pour l'IELTS General Training. Faites-les en temps limité : si vous visez le C1, vos résultats doivent tourner autour de 7 dans chaque compétence, en gardant à l'esprit que ce n'est qu'une estimation." },
    { figure: { photo: 'english-c1-level-writing-hand', alt: "Une femme qui écrit au crayon vert dans un grand agenda ouvert sur une table blanche", caption: "Faites l'épreuve d'écriture d'un test d'exemple en temps limité : c'est souvent elle qui révèle l'écart avec le C1." } },
    { h3: 'Notre quiz C1 gratuit' },
    { p: "Pour un premier contrôle rapide de votre grammaire et de votre vocabulaire, Alimun propose un quiz d'anglais C1 gratuit dans ses ressources en français, à l'adresse alimun.com/fr/ressources/quiz-anglais-c1. En dix questions, il passe en revue l'inversion après une tournure négative, les phrases clivées, les collocations avancées, quelques expressions idiomatiques et des mots faciles à confondre, avec **une explication pour chaque réponse**. C'est un exercice d'entraînement : il ne mesure ni l'oral ni l'écrit, et ne remplace pas un test officiel." },
    { h3: 'Ce qu’aucun test en ligne ne mesure' },
    { p: "Les tests gratuits évaluent surtout la compréhension, la grammaire et le vocabulaire. Votre oral et votre écrit, eux, ont besoin d'un regard extérieur. Enregistrez-vous en répondant à une question de Speaking, puis réécoutez-vous : hésitez-vous souvent ? Simplifiez-vous vos idées ? Faites relire un essai par quelqu'un qui connaît les critères du C1. Si l'écart vient de là, c'est **la pratique avec un professeur** qui le comblera." },
    { note: { title: 'Progresser vers le C1 avec Alimun', text: "Chez Alimun, vous suivez des cours d'anglais en direct avec un professeur, en petit groupe, et votre professeur corrige vos devoirs. Pour savoir par où commencer, le test de niveau vous situe en quelques minutes. Alimun n'est affilié ni à Cambridge, ni à l'IELTS, ni à ETS.", draw: 'teacup' } },

    { h: 'Les erreurs fréquentes sur le niveau C1' },
    { p: "La première est de croire qu'un bon score à un test de compréhension prouve le C1. Un TOEIC élevé montre que vous comprenez bien l'anglais écrit et oral ; il ne dit rien de votre expression. Si un employeur ou une école demande explicitement le C1 dans les quatre compétences, il vous faudra un examen qui les évalue toutes, comme le C1 Advanced, l'IELTS ou le TOEFL iBT." },
    { p: "La deuxième est de viser le C1 Advanced trop tôt. Avec un score entre 160 et 179, vous repartez avec un certificat B2, et en dessous de 160, sans certificat. Si vos tests d'exemple vous placent encore nettement au B2, **le B2 First avec une bonne mention** peut être un choix plus sûr ; Cambridge indique d'ailleurs qu'un score de 180 à 190 au B2 First donne un certificat de niveau C1." },
    { p: "La troisième est de négliger l'exigence précise de l'organisme qui lira votre résultat. Une université peut demander un IELTS de 7 avec au moins 6,5 dans chaque compétence ; une autre, un TOEFL de 5 par section. Lisez la page d'admission ou l'offre d'emploi, et vérifiez sur les sites officiels des examens avant de vous inscrire, car **formats, dates et tarifs changent**." },
  ],
  quiz: [
    { q: "Combien de niveaux compte le CECRL ?", options: ['Quatre', 'Cinq', 'Six', 'Neuf'], a: 2, why: "Le Cadre européen décrit six niveaux, de A1 à C2. Le C1 est l'avant-dernier." },
    { q: "Selon le Conseil de l'Europe, que fait-on au C1 en compréhension ?", options: ["On comprend seulement l'idée principale des textes simples", "On comprend des textes longs et exigeants et leurs sous-entendus", "On comprend sans effort absolument tout", "On comprend des phrases courtes sur des sujets familiers"], a: 1, why: "Au C1, on comprend une grande variété de textes longs et exigeants et on saisit les significations implicites. Comprendre sans effort pratiquement tout correspond au C2." },
    { q: "Quel score sur la Cambridge English Scale donne au minimum un certificat C1 au C1 Advanced ?", options: ['142', '160', '180', '200'], a: 2, why: "De 180 à 199, le certificat est de niveau C1 (mentions C et B). À partir de 200, il est de niveau C2." },
    { q: "Quelles notes l'IELTS fait-il correspondre au niveau C1 ?", options: ['5 à 6', '5,5 à 6,5', '7 à 8', '8,5 à 9'], a: 2, why: "Les partenaires de l'IELTS indiquent que les notes de 7 à 8 correspondent au C1, avec un seuil situé entre 6,5 et 7." },
    { q: "Quelle note au TOEFL iBT correspond au C1 depuis janvier 2026 ?", options: ['4 ou 4,5', '5 ou 5,5', '6 seulement', '100 sur 120'], a: 1, why: "Sur l'échelle de 1 à 6, une note de 5 ou de 5,5 correspond au C1, par section comme au total." },
    { q: "Quel total minimal ETS associe-t-il au C1 pour le TOEIC Listening and Reading ?", options: ['785', '850', '945', '990'], a: 2, why: "La table d'ETS associe au C1 un minimum de 490 en Listening et 455 en Reading, soit 945, en précisant de ne pas appliquer ces seuils strictement." },
    { q: "Combien d'heures d'apprentissage guidé Cambridge estime-t-il nécessaires pour passer d'un niveau au suivant ?", options: ['Environ 50', 'Environ 100', 'Environ 200', 'Environ 700'], a: 2, why: "Cambridge estime qu'il faut environ 200 heures guidées par niveau, et 700 à 800 heures au total pour atteindre le C1 depuis zéro." },
    { q: "Quelle est la limite des tests d'anglais gratuits en ligne ?", options: ["Ils sont toujours plus difficiles que l'examen", "Ils évaluent surtout la compréhension, la grammaire et le vocabulaire, pas votre oral ni votre écrit", "Ils donnent un certificat officiel", "Ils ne portent que sur l'oral"], a: 1, why: "Les tests en ligne mesurent surtout la compréhension, la grammaire et le vocabulaire ; l'oral et l'écrit demandent un regard extérieur." },
  ],
  faq: [
    ["Où faire un test d'anglais C1 gratuit ?", "Les ressources les plus fiables sont officielles : les tests d'exemple gratuits du C1 Advanced sur le site de Cambridge English, les questions d'exemple de l'IELTS et le test court « Test your English » de Cambridge. Alimun propose aussi un quiz C1 gratuit de dix questions dans ses ressources en français. Aucun de ces tests ne délivre de certificat."],
    ["Quel score IELTS correspond au niveau C1 ?", "L'IELTS fait correspondre les notes de 7 à 8 au niveau C1 et situe le seuil du C1 entre 6,5 et 7. Une note de 8,5 ou plus est reconnue comme C2. Il n'existe pas de correspondance exacte, point par point."],
    ["Combien de temps faut-il pour passer du B2 au C1 ?", "Cambridge estime qu'il faut environ 200 heures d'apprentissage guidé pour passer d'un niveau du CECRL au suivant, donc du B2 au C1. Ce chiffre est une indication : votre parcours, l'intensité de votre travail et votre pratique en dehors des cours le font varier."],
    ["Où passer le C1 Advanced au Maroc ?", "Le British Council organise les examens Cambridge au Maroc et accepte les candidats de tout le pays. Les épreuves sur papier ont lieu à Casablanca et à Rabat, et une session n'est maintenue qu'avec au moins 10 candidats inscrits. Vérifiez les dates et les tarifs sur le site du British Council Maroc."],
    ["Le certificat C1 Advanced a-t-il une date d'expiration ?", "Non. Cambridge indique que ses certificats n'expirent pas. Une université ou un employeur peut toutefois décider de n'accepter que des résultats récents : vérifiez sa propre règle."],
  ],
  related: ['moroccan-english-exams', 'germany-from-morocco'],
  sources: [
    ["CECRL : échelle globale des niveaux communs de référence (Conseil de l'Europe)", 'https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale'],
    ['C1 Advanced (Cambridge English)', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/advanced/'],
    ['C1 Advanced exam format (Cambridge English)', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/advanced/format/'],
    ['Cambridge English Qualifications results (Cambridge English)', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/results'],
    ['C1 Advanced preparation and sample tests (Cambridge English)', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/advanced/preparation/'],
    ['Guided learning hours (Cambridge English Support)', 'https://support.cambridgeenglish.org/hc/en-gb/articles/202838506-Guided-learning-hours'],
    ['Test your English (Cambridge English)', 'https://www.cambridgeenglish.org/test-your-english/'],
    ['IELTS and the CEFR (IELTS)', 'https://ielts.org/organisations/ielts-for-organisations/compare-ielts/ielts-and-the-cefr'],
    ['Everything you need to know about IELTS and the CEFR (IELTS)', 'https://ielts.org/news-and-insights/everything-you-need-to-know-about-ielts-and-the-cefr'],
    ['IELTS sample test questions (IELTS)', 'https://ielts.org/take-a-test/preparation-resources/sample-test-questions'],
    ['TOEFL iBT score scale update (ETS)', 'https://www.ets.org/toefl/institutions/ibt/score-scale-update.html'],
    ['Mapping table: TOEIC Listening and Reading scores and the CEFR (ETS Global)', 'https://www.eu.ets.org/content/dam/ets-org/eu/pdfs/toeic/mapping-cefr-toeic-listening-reading-test.pdf'],
    ['Examens Cambridge au Maroc (British Council Maroc)', 'https://www.britishcouncil.ma/en/exam/cambridge/dates-fees-locations'],
    ["Quiz d'anglais C1 gratuit (Alimun)", 'https://alimun.com/fr/ressources/quiz-anglais-c1'],
  ],
};
