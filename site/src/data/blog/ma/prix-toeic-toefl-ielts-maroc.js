// Third design (docs/BLOG_PLAN.md). Prices and facts checked 19 Nov 2026 on official pages only:
// ets.org TOEFL iBT fees page and its country fee file (toefl_ibt_fees_new.json, last modified 1 Oct 2026):
// Morocco US$260; other fees on the same page (express registration US$49, rescheduling US$69, additional score
// report US$29, Speaking or Writing score review US$80, both US$160, reinstatement of canceled scores US$20).
// ets.org TOEFL scores pages: scores in the ETS account 3 days after the test, valid 2 years, PDF 1 day later,
// up to four free score reports chosen until 10 p.m. the day before the test.
// ets.org TOEIC registration page (outside the US and Canada, contact the local ETS Preferred Network office;
// public vs institutional sessions; same name as on the ID) and the ETS EPN directory (epn_directory.json), which
// lists Amideast Morocco in Rabat (Agdal) and Casablanca (Sidi Maarouf) as the ETS office for Morocco.
// Amideast eShop Morocco (apply.amideast.org/eShop/MA), sessions listed on 19 Nov 2026: TOEIC Listening & Reading
// public program DH 1,254.02 at partner centres and DH 1,272.79 at Amideast Rabat and Casablanca; TOEIC 4-Skills
// public program DH 1,567.52 and DH 1,595.88; TOEFL iBT voucher DH 2,183.33, country-specific, does not register
// you by itself. Partner centres listed: Tetouan, El Jadida, Rabat, Tangier, Kenitra, Casablanca, Agadir, Safi.
// Amideast Morocco TOEIC and TOEFL pages: registration on eShop or in an office, discounted TOEFL voucher then
// register on the TOEFL site, scores valid 2 years, ID rules; TOEFL Essentials not among the TOEFL tests listed.
// britishcouncil.ma IELTS dates/fees page (test dates table on 19 Nov 2026): IELTS Academic and General Training on
// computer 3080 MAD, IELTS for UKVI 3310 MAD, IELTS for UKVI Life Skills B1 2200 MAD; computer only since 30 April
// 2026, results usually in 1-2 days, One Skill Retake, 8 cities, IELTS Online Academic only. britishcouncil.ma UKVI
// page: 3310 MAD, Life Skills A1 and B1 2200 MAD, UKVI in Rabat and Casablanca, minimum scores per CEFR level;
// customer service at the Millennium Centre in Rabat online-only from 23 July 2026. ielts.org Oujda centre page:
// Academic and General Training MAD 3080.00. britishcouncil.ma exams page lists IELTS, Cambridge, Aptis and school
// exams, no TOEIC. No IDP-run IELTS centre in Morocco was confirmed, so IDP is only named as an IELTS co-owner.
// Prices are shown with the currency of each official page; no conversion is made. Alimun is not affiliated with
// ETS, Amideast, the British Council, IDP or Cambridge.
export default {
  key: 'english-test-prices-morocco',
  site: 'ma',
  slug: 'prix-toeic-toefl-ielts-maroc',
  section: 'exams',
  course: 'English',
  published: '2026-11-19',
  updated: '2026-11-19',
  title: "Prix du TOEIC, du TOEFL et de l'IELTS au Maroc : tarifs, centres et inscription",
  metaTitle: "Prix TOEIC, TOEFL et IELTS au Maroc : tarifs et centres – Alimun",
  desc: "Combien coûtent le TOEIC, le TOEFL iBT et l'IELTS au Maroc ? Tarifs relevés sur les pages officielles, centres, inscription, délais de résultats et validité.",
  lead: "Avant de choisir une date, la première question est souvent le prix. Nous avons relevé le 19 novembre 2026 les tarifs **affichés sur les pages officielles** d'ETS, d'Amideast et du British Council pour le TOEIC, le TOEFL iBT et l'IELTS au Maroc, avec les centres, l'inscription et les délais.",
  photo: 'english-test-prices-morocco-calculator-notebook',
  sticker: { draw: 'owl', say: "Le bon prix, c'est celui de la page officielle du jour." },
  facts: [
    { n: 1254, unit: 'DH', text: "le TOEIC Listening and Reading dans un centre partenaire d'Amideast, selon l'eShop le 19 novembre 2026" },
    { n: 260, unit: 'dollars', text: "les frais d'inscription au TOEFL iBT pour le Maroc sur le site d'ETS" },
    { n: 3080, unit: 'MAD', text: "l'IELTS Academic ou General Training sur ordinateur au British Council Maroc" },
    { n: 2, unit: 'ans', text: "la durée de validité des scores TOEIC et TOEFL, et la durée recommandée pour un résultat IELTS" },
  ],
  blocks: [
    { take: { title: 'La réponse courte', text: "Le 19 novembre 2026, l'eShop d'Amideast, le bureau d'ETS au Maroc, affichait le TOEIC Listening and Reading à **1 254,02 DH** dans ses centres partenaires et 1 272,79 DH dans ses bureaux de Rabat et Casablanca. Sur le site d'ETS, le TOEFL iBT coûte **260 dollars** pour le Maroc. Le British Council affiche l'IELTS Academic ou General Training à **3 080 MAD** et l'IELTS for UKVI à 3 310 MAD. Le British Council n'organise pas le TOEIC. Vérifiez la page officielle avant de payer : les tarifs changent.", draw: 'owl' } },

    { h: 'Les tarifs officiels au 19 novembre 2026' },
    { p: "Les prix qui circulent sur les forums et dans les groupes d'étudiants datent souvent de plusieurs années. Nous n'avons retenu ici que des montants lus le même jour sur la page de l'organisme qui encaisse le paiement, **dans la devise affichée** : dirhams pour Amideast et le British Council, dollars américains pour ETS. Nous n'avons fait aucune conversion, car le montant réellement débité dépend de votre banque et du taux du jour." },
    { table: {
      head: ['Test', 'Où le payer', 'Prix affiché le 19 nov. 2026'],
      rows: [
        ['TOEIC Listening and Reading', 'Eshop Amideast, centre partenaire', '1 254,02 DH'],
        ['TOEIC Listening and Reading', 'Eshop Amideast, bureaux de Rabat et Casablanca', '1 272,79 DH'],
        ['TOEIC 4 Skills (les quatre compétences)', 'Eshop Amideast, centre partenaire', '1 567,52 DH'],
        ['TOEIC 4 Skills (les quatre compétences)', 'Eshop Amideast, bureaux de Rabat et Casablanca', '1 595,88 DH'],
        ['TOEFL iBT', 'Site d’ETS, frais pour le Maroc', '260 dollars US'],
        ['Bon TOEFL iBT (voucher)', 'Eshop Amideast', '2 183,33 DH'],
        ['IELTS Academic ou General Training, sur ordinateur', 'British Council Maroc', '3 080 MAD'],
        ['IELTS for UKVI (Academic ou General Training)', 'British Council Maroc', '3 310 MAD'],
        ['IELTS for UKVI Life Skills (A1 ou B1)', 'British Council Maroc', '2 200 MAD'],
      ],
      note: "Montants relevés le 19 novembre 2026 sur l'eShop d'Amideast Maroc, la page des frais du TOEFL iBT d'ETS et les pages IELTS du British Council Maroc. Ils peuvent changer à tout moment : vérifiez la page officielle avant de payer.",
    } },
    { p: "Ce tableau répond à la question du prix, pas à celle du choix. Si vous hésitez encore entre ces tests, notre article « TOEIC, IELTS, TOEFL ou Cambridge : quel test d'anglais passer au Maroc ? » compare leurs formats et leurs usages. Ici, nous restons sur le concret : **qui organise, combien, où et comment s'inscrire**." },

    { h: 'Le TOEIC au Maroc : Amideast et ses centres partenaires' },
    { p: "Le TOEIC est un test d'ETS, l'organisme américain qui produit aussi le TOEFL. ETS ne vend pas lui-même les sessions publiques du TOEIC au Maroc : sa page d'inscription renvoie, hors des États-Unis et du Canada, vers le bureau local de son réseau, l'ETS Preferred Network. Dans l'annuaire officiel de ce réseau, le bureau listé pour le Maroc est **Amideast Morocco**, à Rabat (Agdal) et à Casablanca (Sidi Maârouf)." },
    { p: "Concrètement, on s'inscrit au TOEIC sur l'eShop d'Amideast, en choisissant le pays Maroc, ou directement dans l'un de ses bureaux. L'eShop affiche pour chaque session la date, l'heure, le centre, son adresse, le nombre de places restantes et le prix. Le 19 novembre 2026, les sessions de décembre du TOEIC Listening and Reading se tenaient à Rabat, Casablanca, Tanger, Tétouan, Kénitra, El Jadida et Agadir, et celles du TOEIC 4 Skills aussi à Safi. **Les villes changent d'une session à l'autre** : regardez la liste au moment de réserver." },
    { figure: { photo: 'english-test-prices-morocco-laptop-wallet', alt: "Vue de dessus de mains qui tapent sur un ordinateur portable, à côté d'un portefeuille et d'un téléphone", caption: "Pour le TOEIC, l'inscription et le paiement se font sur l'eShop d'Amideast ou dans ses bureaux de Rabat et Casablanca." } },
    { h3: 'Combien coûte le TOEIC au Maroc ?' },
    { p: "Le TOEIC que demandent la plupart des écoles et des recruteurs est le TOEIC Listening and Reading. Le 19 novembre 2026, il coûtait **1 254,02 DH** dans les centres partenaires d'Amideast et 1 272,79 DH dans ses deux bureaux. Le TOEIC 4 Skills, qui ajoute l'oral et l'écrit, coûtait 1 567,52 DH dans les centres partenaires et 1 595,88 DH chez Amideast. Le prix est le même pour toutes les villes partenaires listées ce jour-là, seuls les bureaux d'Amideast étant un peu plus chers." },
    { p: "Si on vous demande seulement « un score TOEIC », le Listening and Reading suffit en général. Le 4 Skills n'a de sens que si l'école ou l'employeur exige aussi **une preuve à l'oral et à l'écrit**. Dans le doute, demandez par écrit quel test exact ils acceptent avant de payer la version la plus chère." },
    { h3: 'Session publique ou session de votre école' },
    { p: "ETS distingue deux types de sessions du TOEIC Listening and Reading. Les sessions publiques sont ouvertes à tous, dans des centres d'examen, tout au long de l'année : ce sont celles de l'eShop. Les sessions institutionnelles sont organisées par un employeur ou une école de langues, et c'est à eux qu'il faut s'adresser pour s'y inscrire. L'eShop d'Amideast listait d'ailleurs une session réservée aux étudiants de l'UIR. Avant de payer une session publique, **demandez à votre école** si elle organise sa propre session, parfois à d'autres conditions." },
    { h3: 'TOEIC et British Council : une confusion fréquente' },
    { p: "Beaucoup de candidats cherchent « TOEIC British Council ». Le 19 novembre 2026, la page des examens du British Council Maroc proposait l'IELTS, les examens Cambridge English, le test Aptis pour les organisations et des examens scolaires britanniques, mais **pas le TOEIC**. Le British Council et le TOEIC n'ont pas de lien : pour le TOEIC, adressez-vous à Amideast ou à l'un des centres listés sur son eShop. Si votre objectif est un visa britannique ou une université au Royaume-Uni, c'est en revanche bien vers l'IELTS du British Council qu'il faut regarder." },
    { h3: 'Résultats et validité du TOEIC' },
    { p: "Amideast indique que le délai varie selon le test et la façon dont il est organisé, mais que la plupart des résultats sont disponibles **en quelques jours**, et que les scores TOEIC sont valables deux ans. Le relevé indique aussi votre niveau sur le Cadre européen. Le jour du test, apportez une pièce d'identité officielle avec photo, passeport ou carte nationale, et inscrivez-vous exactement sous le même nom : ETS exige que le nom de l'inscription soit celui de la pièce présentée." },

    { h: 'Le TOEFL iBT au Maroc : 260 dollars ou un bon Amideast' },
    { p: "Pour le TOEFL iBT, le tarif est fixé par ETS pays par pays. Sur sa page des frais, il suffit de choisir le pays du test : pour le Maroc, ETS affiche **260 dollars US**. On paie ce montant en ligne en créant un compte ETS ; ETS accepte notamment la carte bancaire et PayPal. C'est le prix de base, auquel peuvent s'ajouter des frais de service si vous changez vos plans." },
    { table: {
      head: ['Service TOEFL iBT', 'Frais affichés par ETS'],
      rows: [
        ['Inscription tardive (dans les 7 jours avant le test)', '49 dollars US'],
        ['Changement de date', '69 dollars US'],
        ['Rapport de score supplémentaire (par établissement)', '29 dollars US'],
        ['Révision de la note du Speaking ou du Writing', '80 dollars US'],
        ['Révision des deux sections', '160 dollars US'],
        ['Rétablissement de scores annulés', '20 dollars US'],
      ],
      note: "Page « TOEFL iBT Test Fees » d'ETS, consultée le 19 novembre 2026.",
    } },
    { p: "Amideast propose une autre voie : acheter sur son eShop un bon TOEFL iBT, qu'il présente comme **un bon à prix réduit**. Le 19 novembre 2026, ce bon coûtait 2 183,33 DH. Attention, l'achat du bon ne vous inscrit pas au test : vous l'utilisez ensuite pour payer votre inscription sur le site d'ETS. Le bon n'est valable que pour un test dans le pays où vous l'avez acheté. Amideast vend aussi un service d'aide à l'inscription si vous préférez être accompagné." },
    { p: "Pour trouver un centre TOEFL et une date, tout se fait dans votre compte ETS, avec l'outil de réservation du site du TOEFL. Amideast indique aussi que vous pouvez vous inscrire en personne dans l'un de ses bureaux. ETS propose par ailleurs une version à passer chez soi, la TOEFL iBT Home Edition, surveillée en direct ; vérifiez sur le site d'ETS qu'elle est ouverte depuis le Maroc avant de compter dessus." },
    { figure: { photo: 'english-test-prices-morocco-man-laptop', alt: "Un jeune homme en chemise blanche qui travaille sur un ordinateur portable à une grande table en bois", caption: "Les scores du TOEFL iBT arrivent dans votre compte ETS trois jours après le test." } },
    { h3: 'Résultats, rapports gratuits et validité' },
    { p: "D'après ETS, vos scores officiels sont disponibles dans votre compte ETS **trois jours après le test**, et le relevé en PDF un jour plus tard. Les frais d'inscription incluent jusqu'à quatre rapports de score gratuits envoyés aux établissements que vous choisissez avant le test, au plus tard à 22 heures, heure du centre, la veille. Après ce délai, chaque envoi coûte 29 dollars : préparez votre liste d'universités à l'avance." },
    { p: "Les scores TOEFL iBT sont valables deux ans à partir de la date du test, et ETS ne les envoie plus au-delà. Si vous cherchez le TOEFL Essentials, sachez qu'il ne figurait pas parmi les tests TOEFL présentés par Amideast Maroc le 19 novembre 2026 ; demandez directement à Amideast ou à ETS s'il est disponible avant d'en faire votre plan." },

    { cta: true },

    { h: "L'IELTS au Maroc : le British Council, dans huit villes" },
    { p: "L'IELTS appartient conjointement au British Council, à IDP et à Cambridge University Press & Assessment. Au Maroc, c'est **le British Council** qui le fait passer, dans huit villes : Casablanca, Rabat, Agadir, Marrakech, Fès, Oujda, Tanger et Tétouan. Nous n'avons pas trouvé de centre IELTS géré par IDP au Maroc ; si une école vous parle d'IDP, demandez-lui où se déroulerait le test." },
    { p: "Depuis le 30 avril 2026, tous les tests IELTS du British Council au Maroc se passent sur ordinateur, avec le même format, les mêmes questions et la même notation que sur papier. Le British Council annonce des résultats **en général en un à deux jours**, la possibilité de réserver jusqu'à la veille de la clôture des inscriptions et l'IELTS One Skill Retake, qui permet de repasser une seule compétence. L'IELTS Online, à passer chez soi, n'existe qu'en version Academic." },
    { h3: "Combien coûte l'IELTS au Maroc ?" },
    { p: "Le 19 novembre 2026, le calendrier des sessions du British Council Maroc affichait l'IELTS Academic et l'IELTS General Training sur ordinateur à **3 080 MAD**. La fiche officielle du centre d'Oujda sur ielts.org indiquait le même montant. L'IELTS for UKVI, la version exigée pour certains visas britanniques, était à 3 310 MAD, et l'IELTS for UKVI Life Skills, aux niveaux A1 et B1, à 2 200 MAD. Le British Council précise que ses frais incluent des supports de préparation et des tests d'entraînement." },
    { p: "L'IELTS for UKVI ne se passe au Maroc qu'à **Rabat et à Casablanca**. Pour un visa qui demande le niveau B2, il faut au moins 5,5 dans chacune des quatre compétences ; pour le C1, au moins 7,0. Vérifiez sur le site du gouvernement britannique quel niveau votre visa exige, car payer un IELTS classique à la place d'un IELTS for UKVI revient à repayer un test." },
    { h3: "S'inscrire à l'IELTS" },
    { p: "On réserve sur la page « Test dates, fees and locations » du British Council Maroc : vous choisissez la ville, la date et le type de test, puis vous êtes envoyé vers le système de réservation en ligne du British Council. Depuis le 23 juillet 2026, le service clients des examens du British Council au Centre Millennium de Rabat ne fonctionne plus qu'en ligne. Les épreuves Listening, Reading et Writing ont lieu le même jour, sans pause, et vous choisissez le créneau de votre Speaking." },

    { h: 'Ce que coûte vraiment un test, au-delà du prix affiché' },
    { figure: { photo: 'english-test-prices-morocco-calculator-glasses', alt: "Une calculatrice, une paire de lunettes et un stylo posés sur une feuille lignée", caption: "Au prix du test s'ajoutent parfois un déplacement, un changement de date ou un deuxième passage." } },
    { p: "Le montant de l'inscription n'est pas toujours le seul. Le premier coût caché, c'est le déplacement : si votre ville n'a pas de session à la date voulue, il faut compter le trajet vers Rabat, Casablanca ou un autre centre, et parfois une nuit sur place. Regardez **toutes les villes et toutes les dates** proposées avant de choisir." },
    { p: "Le deuxième, ce sont les changements. Au TOEFL iBT, changer de date coûte 69 dollars et s'inscrire dans les sept derniers jours 49 dollars. Pour le TOEIC et l'IELTS, les conditions d'annulation et de report sont fixées par Amideast et le British Council : lisez-les avant de payer, dans les conditions de l'eShop pour le TOEIC et sur les pages IELTS du British Council Maroc, qui publie notamment une politique d'annulation et de report pour l'IELTS for UKVI." },
    { p: "Le troisième, et le plus lourd, c'est **un deuxième passage**. Un test raté de peu coûte une seconde fois son prix entier, sauf à l'IELTS sur ordinateur où le One Skill Retake permet de ne repasser qu'une compétence. Mieux vaut donc passer le test quand votre niveau est déjà là, plutôt que de compter sur la chance." },

    { h: 'Bien choisir le moment et la version' },
    { p: "Les résultats du TOEIC et du TOEFL valent deux ans, et les partenaires de l'IELTS recommandent la même durée. Passer un test trop tôt, c'est risquer de devoir le repayer avant la fin de votre dossier. Calculez à rebours : partez de la date à laquelle l'école, l'employeur ou le consulat lira votre résultat, puis gardez **une marge de quelques semaines** pour un éventuel second passage." },
    { p: "Vérifiez aussi la version exacte qui est demandée. TOEIC Listening and Reading ou TOEIC 4 Skills, IELTS Academic, General Training ou for UKVI, TOEFL iBT en centre ou à domicile : chaque organisme écrit ce qu'il accepte. Si vous visez un certificat durable plutôt qu'un score à durée limitée, notre article sur les examens Cambridge English au Maroc explique leurs centres et leur fonctionnement." },
    { p: "Enfin, le meilleur moyen de ne payer qu'une fois reste de **connaître son niveau avant de réserver**. Un examen blanc complet, chronométré, vous dit si vous êtes prêt et quelle épreuve vous coûte le plus de points." },
    { note: { title: "Se préparer avec Alimun", text: "Chez Alimun, vous suivez des cours d'anglais en direct avec un professeur, en petit groupe, et le test de niveau vous situe de A1 à C2 avant de choisir votre date d'examen. Alimun n'est affilié ni à ETS, ni à Amideast, ni au British Council.", draw: 'teacup' } },

    { h: 'En résumé' },
    { p: "Pour le TOEIC, tout passe par Amideast, le bureau d'ETS au Maroc, et par ses centres partenaires : comptez 1 254,02 DH pour le Listening and Reading dans un centre partenaire au 19 novembre 2026. Pour le TOEFL iBT, ETS affiche 260 dollars pour le Maroc, ou vous passez par un bon Amideast à 2 183,33 DH. Pour l'IELTS, le British Council demande 3 080 MAD, ou 3 310 MAD pour l'IELTS for UKVI. Dans tous les cas, **vérifiez la page officielle avant de payer**, car un tarif peut changer d'une semaine à l'autre." },
  ],
  quiz: [
    { q: "Qui est le bureau d'ETS pour le TOEIC au Maroc, selon l'annuaire officiel d'ETS ?", options: ['Le British Council', 'Amideast Morocco', 'IDP', 'Cambridge English'], a: 1, why: "L'annuaire de l'ETS Preferred Network liste Amideast Morocco, à Rabat et Casablanca." },
    { q: "Combien coûtait le TOEIC Listening and Reading dans un centre partenaire d'Amideast le 19 novembre 2026 ?", options: ['1 254,02 DH', '2 183,33 DH', '3 080 MAD', '260 dollars'], a: 0, why: "L'eShop d'Amideast affichait 1 254,02 DH dans les centres partenaires et 1 272,79 DH dans ses bureaux." },
    { q: "Le British Council Maroc organise-t-il le TOEIC ?", options: ['Oui, dans huit villes', 'Oui, seulement à Rabat', 'Non, sa page des examens ne propose pas le TOEIC', 'Oui, sur ordinateur uniquement'], a: 2, why: "La page des examens du British Council Maroc propose l'IELTS, Cambridge, Aptis et des examens scolaires, pas le TOEIC." },
    { q: "Quel est le tarif du TOEFL iBT pour le Maroc sur le site d'ETS ?", options: ['205 dollars', '240 dollars', '260 dollars', '69 dollars'], a: 2, why: "La page des frais d'ETS affiche 260 dollars US pour le Maroc ; 69 dollars correspond au changement de date." },
    { q: "Que se passe-t-il quand vous achetez un bon TOEFL iBT chez Amideast ?", options: ['Vous êtes inscrit automatiquement', "Vous l'utilisez ensuite pour payer votre inscription sur le site d'ETS", 'Il est valable dans tous les pays', 'Il remplace le passeport le jour du test'], a: 1, why: "L'achat du bon ne vous inscrit pas : il sert à payer l'inscription sur le site d'ETS, dans le pays d'achat." },
    { q: "Combien coûte l'IELTS for UKVI au British Council Maroc ?", options: ['2 200 MAD', '3 080 MAD', '3 310 MAD', '1 595,88 DH'], a: 2, why: "Le British Council affiche 3 310 MAD ; 2 200 MAD correspond à l'IELTS for UKVI Life Skills." },
    { q: "Quand les scores officiels du TOEFL iBT arrivent-ils dans le compte ETS ?", options: ['Le jour même', 'Trois jours après le test', 'Treize jours après le test', 'Un mois après le test'], a: 1, why: "ETS indique que les scores sont disponibles trois jours après le test, et le PDF un jour plus tard." },
    { q: "Dans quelles villes peut-on passer l'IELTS for UKVI au Maroc ?", options: ['Rabat et Casablanca', 'Marrakech et Agadir', 'Dans les huit villes IELTS', 'Uniquement en ligne'], a: 0, why: "Le British Council propose l'IELTS for UKVI au Maroc à Rabat et à Casablanca." },
  ],
  faq: [
    ["Quel est le prix du TOEIC au Maroc en 2026 ?", "Le 19 novembre 2026, l'eShop d'Amideast affichait le TOEIC Listening and Reading à 1 254,02 DH dans ses centres partenaires et à 1 272,79 DH dans ses bureaux de Rabat et Casablanca, et le TOEIC 4 Skills à 1 567,52 DH ou 1 595,88 DH. Vérifiez l'eShop avant de payer."],
    ["Peut-on passer le TOEIC au British Council ?", "Non. La page des examens du British Council Maroc ne propose pas le TOEIC. Au Maroc, le TOEIC passe par Amideast, le bureau du réseau d'ETS, et par les centres partenaires listés sur son eShop."],
    ["Où passer le TOEIC à Casablanca ?", "Le 19 novembre 2026, l'eShop d'Amideast proposait des sessions dans son bureau de Sidi Maârouf et chez au moins un centre partenaire à Casablanca. La liste change selon les dates : consultez l'eShop en choisissant le Maroc."],
    ["Combien coûte l'IELTS au Maroc ?", "Le British Council Maroc affichait le 19 novembre 2026 l'IELTS Academic ou General Training sur ordinateur à 3 080 MAD, l'IELTS for UKVI à 3 310 MAD et l'IELTS for UKVI Life Skills à 2 200 MAD."],
    ["Faut-il payer le TOEFL en dollars ?", "Sur le site d'ETS, le TOEFL iBT est affiché à 260 dollars US pour le Maroc. Vous pouvez aussi acheter un bon TOEFL iBT en dirhams chez Amideast, 2 183,33 DH le 19 novembre 2026, puis l'utiliser pour payer votre inscription sur le site d'ETS."],
  ],
  related: ['moroccan-english-exams', 'cambridge-exams-morocco', 'english-c1-level'],
  sources: [
    ['TOEFL iBT Test Fees (ETS)', 'https://www.ets.org/toefl/test-takers/ibt/register/fees.html'],
    ['Frais TOEFL iBT par pays (fichier officiel ETS)', 'https://www.ets.org/content/dam/ets-org/s/toefl/toefl_ibt_fees_new.json'],
    ['Understanding TOEFL iBT scores (ETS)', 'https://www.ets.org/toefl/test-takers/ibt/scores/understand-scores.html'],
    ['Sending your TOEFL iBT scores (ETS)', 'https://www.ets.org/toefl/test-takers/ibt/scores/send-scores.html'],
    ['Registration for the TOEIC tests (ETS)', 'https://www.ets.org/toeic/test-takers/register.html'],
    ['ETS Preferred Network directory', 'https://www.ets.org/epn_directory.html'],
    ['TOEIC avec Amideast Maroc', 'https://www.amideast.org/morocco/take-a-test/individuals/toeic'],
    ['TOEFL avec Amideast Maroc', 'https://www.amideast.org/morocco/take-a-test/individuals/toefl'],
    ['Eshop Amideast Maroc', 'https://apply.amideast.org/eShop/MA'],
    ['Sessions TOEIC Listening and Reading (eShop Amideast)', 'https://apply.amideast.org/eShop/PT/Test/TOEICONLINEPUB/MA'],
    ['Sessions TOEIC 4 Skills (eShop Amideast)', 'https://apply.amideast.org/eShop/PT/Test/TOEIC4SKILLSPUB/MA'],
    ['Bon TOEFL iBT (eShop Amideast)', 'https://apply.amideast.org/eShop/product-details/ProductCode/PCD/TBATOEFLIBT/PCD227260001/MA'],
    ['IELTS : dates, frais et lieux (British Council Maroc)', 'https://www.britishcouncil.ma/en/exam/ielts/dates-fees-locations'],
    ['IELTS for UKVI au Maroc (British Council Maroc)', 'https://www.britishcouncil.ma/exam/ielts/uk-visas-immigration'],
    ['Examens proposés par le British Council Maroc', 'https://www.britishcouncil.ma/en/exam'],
    ['Centre IELTS British Council d’Oujda (ielts.org)', 'https://ielts.org/test-centres/british-council-ehei-ecole-des-hautes-etudes-d-ingenierie'],
    ['IELTS scoring in detail (ielts.org)', 'https://ielts.org/take-a-test/your-results/ielts-scoring-in-detail'],
  ],
};
