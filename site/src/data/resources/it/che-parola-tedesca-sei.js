// Resource: fun. Each option votes for a drawing from the cast; the result is a German word that fits.
export default {
  key: 'german-word-quiz', site: 'it', slug: 'che-parola-tedesca-sei', kind: 'fun', course: 'German', level: 'Per divertirsi',
  draw: 'pretzel', tint: 'coral', published: '2026-10-27',
  title: 'Che parola tedesca sei?',
  metaTitle: 'Che parola tedesca sei? Un quiz divertente per chi studia – Alimun',
  desc: 'Un quiz gratis di tre domande: scopri la parola tedesca che corrisponde alla tua personalità, da Fernweh a Gemütlichkeit, poi condividila con un amico.',
  lead: 'Tre domande veloci, una parola tedesca che ti descrive. Condividila con un amico e scopri cosa significa.',
  about: [
    'Il tedesco ha parole per sentimenti che altre lingue spiegano con una frase intera. Una di queste probabilmente ti descrive meglio di quanto pensi.',
    'Questo quiz è solo per divertirsi, ma ogni parola è vera e si usa ogni giorno, quindi alla fine avrai una parola nuova che non dimenticherai.',
  ],
  youAre: 'La tua parola tedesca: {}',
  buddy: {
    questions: [
      ['È venerdì, sono le sei. Tu...', [['Prenoti un viaggio in un posto nuovo', 'suitcase'], ['Accendi una candela e ti fai un tè', 'teacup'], ['Chiudi il portatile e festeggi', 'mug'], ['Organizzi tutto il weekend', 'owl']]],
      ['Il tuo modo preferito di passare la domenica?', [['Una lunga passeggiata lontano da casa', 'suitcase'], ['Coperta, divano e un buon libro', 'teacup'], ["Una birreria all'aperto con gli amici", 'mug'], ['Una canzone a ripetizione mentre cucini', 'parrot']]],
      ['Scegli un suono:', [['Un treno che parte dalla stazione', 'suitcase'], ['La pioggia sulla finestra', 'teacup'], ['Bicchieri che tintinnano', 'mug'], ['Un ritornello orecchiabile', 'parrot']]],
    ],
    results: {
      suitcase: ['Fernweh', 'La voglia di luoghi lontani. Sei felice quando sei in viaggio verso un posto nuovo.'],
      teacup: ['Gemütlichkeit', 'Calore, comodità e senso di casa. Rendi accogliente ogni posto.'],
      mug: ['Feierabend', 'La gioia della fine della giornata di lavoro. Sai come staccare e godertela.'],
      owl: ['Ordnung', 'Ordine. Ti piace avere un piano, e i tuoi piani funzionano davvero.'],
      parrot: ['Ohrwurm', 'Una canzone che ti resta in testa. Porti ritmo e allegria ovunque vai.'],
    },
  },
  related: ['untranslatable-german', 'german-idioms', 'buddy-quiz'],
};
