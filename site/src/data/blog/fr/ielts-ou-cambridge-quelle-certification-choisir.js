// Template: compare. Facts: IELTS (owners, Academic and General Training, bands 0-9, results usually
// accepted for two years), Cambridge English Qualifications (one exam per level, certificate does not
// expire). Alimun practises these formats in its mock tests and is not affiliated with either.
export default {
  key: 'ielts-or-cambridge',
  site: 'fr',
  slug: 'ielts-ou-cambridge-quelle-certification-choisir',
  template: 'compare',
  course: 'English',
  theme: 'levels',
  cover: ['IELTS', 'Cambridge'],
  published: '2026-10-26',
  updated: '2026-10-26',
  title: "IELTS ou Cambridge : quelle certification d'anglais choisir ?",
  metaTitle: 'IELTS ou Cambridge (B2 First, C1 Advanced) ? Bien choisir – Alimun',
  desc: "Ce qui distingue IELTS des certifications Cambridge English comme B2 First et C1 Advanced, et laquelle convient pour un visa, une université ou ton CV.",
  lead: "Les deux prouvent ton niveau d'anglais, et les deux sont reconnues dans le monde entier. Elles fonctionnent pourtant différemment, et **la bonne dépend de l'usage que tu en feras**.",
  blocks: [
    { h: 'Les deux en bref' },
    { panels: [
      ['IELTS', "Un seul test pour tous les niveaux. Tu obtiens une **note de 0 à 9** en Listening, Reading, Writing et Speaking, plus une note globale. Il existe en deux versions : Academic, pour les études, et General Training, souvent utilisée pour le travail et l'immigration."],
      ['Cambridge', "Un examen par niveau, comme **B2 First, C1 Advanced et C2 Proficiency**. Tu réussis au niveau de l'examen, avec un score sur la Cambridge English Scale, et le certificat n'expire pas."],
    ] },
    { h: 'Face à face' },
    { table: {
      head: ['', 'IELTS', 'Cambridge (B2 First, C1 Advanced)'],
      rows: [
        ['Organisé par', 'British Council, IDP et Cambridge University Press & Assessment', 'Cambridge University Press & Assessment'],
        ['Résultat', 'Une note de 0 à 9 par compétence et une note globale', "Une réussite au niveau de l'examen, avec un score sur la Cambridge English Scale"],
        ['Niveaux', 'Un seul test pour tous les niveaux', 'Un examen par niveau, du A2 Key au C2 Proficiency'],
        ["Épreuve d'oral", 'En tête-à-tête avec un examinateur', 'En général en binôme, avec deux examinateurs'],
        ['Durée de validité', "La plupart des organismes acceptent des résultats datant de deux ans au plus", "Le certificat n'expire pas, même si certains en demandent un récent"],
      ],
      note: 'Vérifie les informations à jour sur les sites officiels IELTS et Cambridge English avant de réserver.',
    } },
    { h: 'Quand choisir IELTS' },
    { p: "Si tu as besoin de l'anglais pour **un visa ou une immigration**, IELTS est souvent le test que citent les autorités, et certaines exigent une version précise, comme General Training. Il est aussi largement accepté par les universités, en particulier au Royaume-Uni, en Australie, au Canada et en Nouvelle-Zélande." },
    { p: "Comme tout le monde passe le même test, IELTS te convient aussi si **tu n'es pas sûr de ton niveau** : ta note montre où tu en es, sans risque de choisir un examen trop difficile ou trop facile." },
    { h: 'Quand choisir Cambridge' },
    { p: "Si tu veux une certification **qui dure, pour ton CV**, un examen Cambridge est une option solide : il n'expire pas, et les employeurs et universités de toute l'Europe connaissent bien le B2 First et le C1 Advanced." },
    { p: "Il te convient surtout si **tu connais ton niveau**, puisque chaque examen en vise un seul. Préparer un examen précis te donne aussi un objectif clair pour tes études." },
    { verdict: { title: 'Notre conseil', text: "Pars de l'exigence, pas du test. Si un service des visas, une université ou un employeur cite une certification, passe celle-là. Si le choix te revient, prends **IELTS pour l'immigration et les besoins à court terme**, et **Cambridge pour une preuve durable** d'un niveau que tu as déjà atteint." } },
    { note: { title: "S'entraîner aux formats", text: "Chez Alimun, tu peux t'entraîner dans les examens blancs avec des épreuves au format du B2 First, du C1 Advanced et de l'IELTS. Ce ne sont pas des sujets officiels, et Alimun n'est pas affilié aux organismes certificateurs." } },
  ],
  faq: [
    ["IELTS est-il plus difficile que Cambridge ?", "Aucun n'est plus difficile en soi : ils sont construits différemment. IELTS t'évalue sur une seule échelle, alors qu'un examen Cambridge vérifie si tu as atteint un niveau précis."],
    ['Lequel les universités britanniques acceptent-elles ?', "La plupart des universités britanniques acceptent IELTS Academic, et beaucoup acceptent aussi le C1 Advanced ou le C2 Proficiency de Cambridge. Chaque université indique les tests et les scores qu'elle accepte pour chaque formation."],
    ['Peut-on échouer à un examen Cambridge ?', "Si ton score est inférieur au niveau de l'examen, tu peux recevoir un certificat du niveau en dessous, ou aucun certificat si le score est trop bas. Avec IELTS, tu obtiens toujours une note."],
  ],
  related: ['cefr-english', 'how-long-english', 'german-articles'],
  sources: [
    ['IELTS', 'https://ielts.org'],
    ['Certifications Cambridge English', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/'],
  ],
};
