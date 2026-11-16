// Translated from en/speaking-practice-and-pronunciation.js on 2026-11-16.
export default {
  slug: 'speaking-practice-and-pronunciation',
  section: 'help',
  subject: 'tutor',
  audience: 'student',
  updated: '2026-11-16',
  status: 'approved',
  title: 'Comment fonctionnent la pratique orale et les vérifications de prononciation, et comment autoriser le micro ?',
  summary: 'Vous parlez au tuteur ou enregistrez des phrases dans Entraînement, une IA transforme votre voix en texte ou évalue votre prononciation, et vos enregistrements ne sont jamais conservés.',
  body: [
    'Avec le tuteur, appuyez sur Parler, dites ce que vous voulez (jusqu’à environ 30 secondes) et appuyez sur Arrêter et envoyer ; vos paroles apparaissent comme votre message. Parfois, le tuteur met une phrase au tableau sous Dis cette phrase à voix haute. Appuyez sur La dire, lisez-la à voix haute, et une vérification de prononciation par IA évalue votre façon de la dire : les mots en vert ont été bien prononcés, les mots soulignés en corail ont été prononcés un peu différemment, et vous voyez votre exactitude, votre aisance et votre complétude. L’écouter lentement lit la phrase lentement, et le tuteur vous demande de réessayer jusqu’à ce que ce soit juste.',
    'Dans Entraînement, Parler vous permet de choisir votre tuteur, d’écouter, puis de toucher Enregistrer et de dire chaque phrase. Votre enregistrement est transformé en texte par l’IA et comparé à la phrase. La pratique orale est incluse dans une formule, a une limite quotidienne qui se réinitialise à minuit UTC, et n’utilise pas vos minutes avec le tuteur.',
    'La première fois que vous parlez, votre navigateur demande si Alimun peut utiliser votre micro : choisissez Autoriser. Si vous avez refusé par erreur, autorisez le micro pour alimun.com dans les paramètres du site de votre navigateur et rechargez la page. Pendant un appel, vous pouvez appuyer sur Couper le micro à tout moment. Les appels nécessitent une version récente de Chrome, Safari, Edge ou Firefox ; si le vôtre ne peut pas passer l’appel, vous pouvez toujours écrire à votre tuteur. Si rien n’a été entendu, parlez un peu plus près du micro.',
    'Vos enregistrements ne sont jamais stockés. Ils sont envoyés à nos fournisseurs d’IA uniquement pour être transformés en texte (Groq) ou pour évaluer votre prononciation (Microsoft Azure, serveurs dans l’Union européenne), puis ils sont supprimés ; pour la prononciation, nous ne gardons que les scores. Lors d’un appel en direct, votre voix est transmise à l’API Gemini de Google pour assurer l’appel, et l’audio n’est pas stocké.',
  ],
  related: ['what-is-the-tutor', 'how-tutor-minutes-work', 'does-the-tutor-keep-my-conversations'],
};
