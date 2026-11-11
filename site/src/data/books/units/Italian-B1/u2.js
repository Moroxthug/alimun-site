// Italian B1, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Pronouns that save words',
  goal: 'Avoid repeating words. Use ci and ne, make the participle agree in the passato prossimo, and join two pronouns: me lo, te la, glielo, ce ne.',
  art: 'parrot',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['ci', 'ne', 'combined pronouns', 'participle agreement', 'pronouns'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'The little word ci',
      about: 'Use ci for a place you have already mentioned and for things you think or believe in.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'The little word **ci** replaces a place, or a thing that comes after **a**. For a place: *Vai a Roma? Sì, **ci** vado domani.* For verbs that take **a**, such as *pensare a, credere a, riuscire a, tenerci*: *Pensi all’esame? Sì, **ci** penso.* It is also part of **c’è** and **ci sono**. Put **ci** before the conjugated verb, or join it to the end of an infinitive: *Voglio andarci* or *Ci voglio andare.*' },
          { t: 'table', caption: 'Question and answer with ci', explain: ['head'], head: ['Question', 'Answer'], rows: [
            ['Vai in banca?', 'Sì, ci vado dopo pranzo.'],
            ['Sei mai stato a Venezia?', 'Sì, ci sono stato due volte.'],
            ['Pensi all’esame?', 'Sì, ci penso spesso.'],
            ['Credi alle sue scuse?', 'No, non ci credo.'],
            ['Riesci a venire?', 'Sì, ci riesco.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Ci** also means *us* or *each other*: *Ci vediamo domani.* The context tells you which one it is. In the passato prossimo, *ci* goes before *essere*: *Ci sono stato. Ci siamo stati.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Vai in banca? Sì, **ci** vado dopo pranzo.', n: '*Ci* = in banca.' },
            { s: 'Sei mai stato a Venezia? Sì, **ci** sono stato due volte.', n: '*Ci sono stato* = I have been there.' },
            { s: 'Pensi al viaggio? Sì, **ci** penso spesso.', n: '*Pensare a* → *ci penso*.' },
            { s: 'Credi alle sue scuse? No, non **ci** credo.', n: '*Credere a* → *ci credo*. *Non* goes before *ci*.' },
            { s: 'Voglio vedere il museo: voglio andar**ci** domenica.', n: 'With an infinitive, *ci* joins the end: *andarci*.' },
          ] },
          { t: 'dialogue', title: 'Napoli', lines: [
            { who: 'Giulia', s: 'Sei mai stato a Napoli?' },
            { who: 'Marco', s: 'Sì, ci sono stato due volte.' },
            { who: 'Giulia', s: 'Ci torni quest’estate?' },
            { who: 'Marco', s: 'Forse. Ci penso da settimane, ma non ho ancora deciso.' },
            { who: 'Giulia', s: 'Io vorrei andarci a settembre.' },
            { who: 'Marco', s: 'Allora ci andiamo insieme!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each question with its answer.', pairs: [
            ['Vai in banca?', 'Sì, ci vado dopo pranzo.'],
            ['Sei mai stato a Venezia?', 'Sì, ci sono stato due volte.'],
            ['Pensi all’esame?', 'Sì, ci penso spesso.'],
            ['Credi alle sue scuse?', 'No, non ci credo.'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Vai al cinema stasera? – Sì, ___ vado con Marco.', a: ['ci'], why: '*Ci* = al cinema.' },
            { q: 'Sei stata in Spagna? – Sì, ___ sono stata l’anno scorso.', a: ['ci'], why: '*Ci sono stata*: *ci* = in Spagna.' },
            { q: 'Pensi spesso al lavoro? – No, non ___ penso mai.', a: ['ci'], why: '*Pensare a* → *non ci penso*.' },
            { q: 'Vuoi vedere il museo? – Sì, voglio andar___ domenica.', a: ['ci'], why: 'With an infinitive, *ci* joins the end: *andarci*.' },
            { q: 'Siete stati a Roma? – Sì, ___ siamo stati a maggio.', a: ['ci'], why: '*Ci siamo stati*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '', o: ['Ci sono stato ieri.', 'Sono stato ci ieri.', 'Ci ho stato ieri.'], why: '*Ci* goes before *essere*: *ci sono stato*.' },
            { q: '', o: ['Non ci credo.', 'Non credo ci.', 'Ci non credo.'], why: '*Non* goes before *ci*.' },
            { q: '', o: ['Voglio andarci domani.', 'Voglio andare ci domani.', 'Voglio ci andarci domani.'], why: 'With an infinitive, *ci* joins the end: *andarci*.' },
            { q: 'Vado a Roma domani e ___ resto due giorni.', o: ['ci', 'ne', 'lo'], why: '*Ci* = a Roma.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Pensi a quel viaggio? Sì, [ne] penso spesso.', a: ['ci'], why: '*Pensare a* → *ci penso*.' },
            { s: 'Sei andato a Napoli? Sì, [lo] sono andato ieri.', a: ['ci'], why: 'A place is replaced by *ci*: *ci sono andato*.' },
            { s: 'Non [ne] credo alle sue parole.', a: ['ci'], why: '*Credere a* → *non ci credo*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Sì, ci sono stato due volte.', why: '*Ci* goes before *sono*.' },
            { a: 'Non ci penso mai.', why: '*Non* + *ci* + verb.' },
            { a: 'Voglio andarci domenica.', why: '*Ci* joins the infinitive: *andarci*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Ne, and agreeing the participle',
      about: 'Use ne for quantity and topic, and make the participle agree with lo, la, li, le and ne.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'The little word **ne** replaces a phrase with **di**. It can stand for a **quantity**: *Quante mele vuoi? **Ne** voglio due.* For a **topic**: *Parli del film? Sì, **ne** parlo con Marco.* And for something you **need**: *Hai bisogno di aiuto? Sì, **ne** ho bisogno.* When you say "none", *ne* stays: *Non **ne** ho.*' },
          { t: 'text', md: 'In the passato prossimo, the participle **agrees** with the object pronouns **lo, la, li, le**: *Le chiavi? **Le** ho perse.* With **ne** for a quantity, it agrees with the thing counted: *Quante mele hai mangiato? **Ne** ho mangiate due.* With **ne** for a topic, it does not change: *Ne ho parlato.*' },
          { t: 'table', caption: 'Pronoun and participle', explain: ['head'], head: ['Pronoun', 'Example'], rows: [
            ['lo', 'Il libro? L’ho letto.'],
            ['la', 'La mela? L’ho mangiata.'],
            ['li', 'I biglietti? Li ho comprati.'],
            ['le', 'Le chiavi? Le ho perse.'],
            ['ne + quantity', 'Quante pizze? Ne ho mangiate due.'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'Quanti biglietti hai? **Ne** ho tre.', n: '*Ne* = di biglietti. The number stays.' },
            { s: 'Vuoi del caffè? No, grazie, non **ne** voglio.', n: '*Non ne voglio* = I do not want any.' },
            { s: 'Parlate del viaggio? Sì, **ne** parliamo stasera.', n: '*Parlare di* → *ne parliamo*.' },
            { s: 'Hai comprato le mele? Sì, **le** ho comprat**e**.', n: '*Le* is feminine plural, so *comprate*.' },
            { s: 'Quante mele hai comprato? **Ne** ho comprat**e** due.', n: '*Ne* stands for *mele*: *comprate*.' },
            { s: 'Hai visto Anna? Sì, **l’**ho vist**a** ieri.', n: '*La* becomes *l’* before *ho*; the participle is still *vista*.' },
          ] },
          { t: 'dialogue', title: 'Al mercato', lines: [
            { who: 'Sara', s: 'Hai comprato le mele?' },
            { who: 'Paolo', s: 'Sì, le ho comprate stamattina.' },
            { who: 'Sara', s: 'Quante ne hai prese?' },
            { who: 'Paolo', s: 'Ne ho prese un chilo.' },
            { who: 'Sara', s: 'Ne vuoi una adesso?' },
            { who: 'Paolo', s: 'No, grazie, ne ho già mangiate due!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the past participle in the right form.', items: [
            { q: 'Hai comprato le mele? – Sì, le ho ___. (comprare)', a: ['comprate'], why: '*Le* = le mele, feminine plural: *comprate*.' },
            { q: 'Hai visto Anna? – Sì, l’ho ___ ieri. (vedere)', a: ['vista'], why: '*L’* = Anna, feminine singular: *vista*.' },
            { q: 'Quanti biglietti hai preso? – Ne ho ___ tre. (prendere)', a: ['presi'], why: '*Ne* = di biglietti, masculine plural: *presi*.' },
            { q: 'Hai letto i libri? – Sì, li ho ___. (leggere)', a: ['letti'], why: '*Li* = i libri, masculine plural: *letti*.' },
            { q: 'Hai fatto la spesa? – Sì, l’ho ___ ieri. (fare)', a: ['fatta'], why: '*L’* = la spesa, feminine singular: *fatta*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Vuoi del pane? – No, grazie, non ___ voglio.', o: ['ne', 'lo', 'ci'], why: '*Ne* = di pane, a quantity.' },
            { q: 'Parli del problema con Marco? – Sì, ___ parlo con lui stasera.', o: ['ne', 'lo', 'le'], why: '*Parlare di* → *ne parlo*.' },
            { q: 'Hai preso le chiavi? – Sì, le ho ___.', o: ['prese', 'preso', 'presi'], why: '*Le* = le chiavi, feminine plural: *prese*.' },
            { q: 'Quante pizze hai mangiato? – Ne ho ___ due.', o: ['mangiate', 'mangiato', 'mangiata'], why: '*Ne* stands for *pizze*, feminine plural: *mangiate*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Replace the words after the verb with a pronoun.', items: [
            { q: 'Ho visto Anna ieri.', a: ['L’ho vista ieri.', 'Ieri l’ho vista.'], why: '*Anna* → *la* → *l’ho vista*.' },
            { q: 'Ho comprato tre biglietti.', a: ['Ne ho comprati tre.'], why: 'A quantity: *ne ho comprati tre*.' },
            { q: 'Abbiamo mangiato i panini.', a: ['Li abbiamo mangiati.', 'Li abbiamo mangiati'], why: '*I panini* → *li* → *mangiati*.' },
            { q: 'Parliamo del viaggio stasera.', a: ['Ne parliamo stasera.', 'Stasera ne parliamo.'], why: '*Parlare di* → *ne parliamo*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Ho comprato le mele e [li] ho mangiate.', a: ['le'], why: '*Le mele* is feminine plural: *le*.' },
            { s: 'Le chiavi? Le ho [perso].', a: ['perse'], why: '*Le* = le chiavi: *perse*.' },
            { s: 'Quanti libri hai? [Lo] ho cinque.', a: ['Ne'], why: 'A quantity: *ne ho cinque*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Ne ho comprati tre.', why: '*Ne* before the verb; *comprati* agrees with *biglietti*.' },
            { a: 'Le ho viste ieri.', why: '*Le* before the verb; *viste* agrees with it.' },
            { a: 'Ne parliamo domani.', why: '*Ne* = di questo.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the pronouns.', items: [
            { s: 'Hai comprato le mele? Sì, [le] ho comprate e [ne] ho mangiate due.', why: '*Le* stands for *le mele*; *ne* stands for a quantity of them.' },
            { s: 'Il film? [Ne] parliamo dopo cena.', why: '*Ne* = del film.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Two pronouns together',
      about: 'Join an indirect and a direct pronoun: me lo, te la, glielo, ce ne.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'When two pronouns meet, the **indirect** one comes first and the **direct** one second: *Mi dai il libro? Sì, **te lo** do.* The indirect pronouns change their last letter: **mi → me, ti → te, ci → ce, vi → ve**. The pronouns **gli**, **le** and **Le** all become **glie-** and join the next pronoun: **glielo, gliela, glieli, gliele, gliene**.' },
          { t: 'table', caption: 'Combined pronouns', quiz: true, head: ['', 'lo', 'la', 'li', 'le', 'ne'], rows: [
            ['mi', 'me lo', 'me la', 'me li', 'me le', 'me ne'],
            ['ti', 'te lo', 'te la', 'te li', 'te le', 'te ne'],
            ['gli / le / Le', 'glielo', 'gliela', 'glieli', 'gliele', 'gliene'],
            ['ci', 'ce lo', 'ce la', 'ce li', 'ce le', 'ce ne'],
            ['vi', 've lo', 've la', 've li', 've le', 've ne'],
          ] },
          { t: 'tip', art: 'owl', md: 'The participle agrees with the direct pronoun: *Te l’ho data* (la penna), *Gliele ho date* (le chiavi). With an infinitive, the pronouns join its end: *Voglio dartelo* or *Te lo voglio dare.* With the imperative they join too: *Mandamelo domani.* The verb *andarsene* uses *ne*: *Me ne vado* (I am leaving).' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Mi dai il libro? Sì, **te lo** do subito.', n: '*Mi* → *te*; *il libro* → *lo*.' },
            { s: 'Hai detto la verità a Marco? Sì, **gliel’**ho detta.', n: '*A Marco* → *glie-*; *la verità* → *la*, so *detta*.' },
            { s: 'Ci mandi le foto? Sì, **ve le** mando stasera.', n: '*Ci* → *ve*; *le foto* → *le*.' },
            { s: 'Quanti libri mi presti? **Te ne** presto due.', n: '*Mi* → *te*; a quantity → *ne*.' },
            { s: '**Mandamelo** domani, per favore.', n: 'Imperative: *manda* + *me* + *lo*.' },
          ] },
          { t: 'dialogue', title: 'In ufficio', lines: [
            { who: 'Sara', s: 'Marco, mi presti la penna?' },
            { who: 'Marco', s: 'Certo, te la presto.' },
            { who: 'Sara', s: 'Grazie. Hai anche le chiavi dell’ufficio?' },
            { who: 'Marco', s: 'No, le ha Giulia. Gliele chiedo io, poi te le porto.' },
            { who: 'Sara', s: 'Grazie, sei gentile!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each question with its answer.', pairs: [
            ['Mi dai il libro?', 'Sì, te lo do subito.'],
            ['Hai detto la verità a Marco?', 'Sì, gliel’ho detta.'],
            ['Ci mandi le foto?', 'Sì, ve le mando stasera.'],
            ['Quanti libri mi presti?', 'Te ne presto due.'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the two pronouns.', items: [
            { q: 'Mi presti la penna? – Certo, ___ presto.', a: ['te la'], why: '*Mi* → *te*; *la penna* → *la*.' },
            { q: 'Mi mandi il file? – Sì, ___ mando oggi.', a: ['te lo'], why: '*Mi* → *te*; *il file* → *lo*.' },
            { q: 'Hai dato le chiavi a Giulia? – Sì, ___ ho date.', a: ['gliele'], why: '*A Giulia* → *glie-*; *le chiavi* → *le*: *gliele*.' },
            { q: 'Ci porti il conto? – Subito, ___ porto.', a: ['ve lo'], why: '*Ci* → *ve*; *il conto* → *lo*.' },
            { q: 'Quante mele ti servono? – ___ servono tre.', a: ['Me ne'], why: '*Mi* → *me*; a quantity → *ne*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Devo restituire il libro a Paolo: ___ restituisco domani.', o: ['glielo', 'gliela', 'le lo'], why: '*A Paolo* → *glie-*; *il libro* → *lo*: *glielo*.' },
            { q: 'Mi hai comprato le scarpe? – Sì, ___ ho comprate.', o: ['te le', 'te li', 'ti le'], why: '*Mi* → *te*; *le scarpe* → *le*.' },
            { q: 'Mi porti il caffè? – Sì, ___ porto subito.', o: ['te lo', 'ti lo', 'lo te'], why: 'The indirect pronoun comes first and becomes *te*.' },
            { q: 'Ci racconti la storia? – Sì, ___ racconto.', o: ['ve la', 'ce la', 'ti la'], why: '*Ci* (to us) → *ve* (to you all); *la storia* → *la*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Mi presti il libro? Sì, [ti lo] presto.', a: ['te lo'], why: '*Ti* becomes *te* before *lo*.' },
            { s: 'Hai dato le chiavi a Giulia? Sì, [le le] ho date.', a: ['gliele'], why: '*Le* + *le* becomes *gliele*.' },
            { s: 'Mi hai comprato le scarpe? Sì, te le ho [comprato].', a: ['comprate'], why: '*Le* = le scarpe: *comprate*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Replace the words after the verb with two pronouns.', items: [
            { q: 'Do il libro a Marco.', a: ['Glielo do.'], why: '*A Marco* → *glie-*; *il libro* → *lo*.' },
            { q: 'Mando le foto a voi.', a: ['Ve le mando.'], why: '*A voi* → *ve*; *le foto* → *le*.' },
            { q: 'Ho dato le chiavi a Giulia.', a: ['Gliele ho date.', 'Gliele ho date'], why: '*Gliele*, and the participle agrees: *date*.' },
            { q: 'Dico la verità a te.', a: ['Te la dico.'], why: '*A te* → *te*; *la verità* → *la*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Te lo mando domani.', why: 'Two pronouns before the verb.' },
            { a: 'Gliel’ho detto ieri.', why: '*Glielo* + *ho* becomes *gliel’ho*.' },
            { a: 'Me ne servono due.', why: '*Mi* → *me*; *ne* for the quantity.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un pacco in ritardo',
      about: 'Read a message exchange about a parcel and see the pronouns at work.',
      art: 'parrot',
      spreads: [
        [
          { t: 'reading', title: 'Un pacco in ritardo', md: '**Giulia:** Marco, ti ho mandato il pacco ieri. Lo hai ricevuto?\n\n**Marco:** No, non è ancora arrivato. Sono rimasto a casa tutta la mattina, ma il corriere non è passato.\n\n**Giulia:** Strano. Il corriere mi ha scritto che te lo consegna oggi. Chiedi alla vicina: forse lo ha lasciato da lei.\n\n**Marco:** Hai ragione, ci vado subito.\n\n**Marco:** Ce l’ho! La vicina me lo ha portato adesso. Dentro c’erano i libri e due cartoline. Te ne mando una foto?\n\n**Giulia:** Sì, mandamela! Le cartoline sono per te, le ho scelte io.\n\n**Marco:** Eccola, te l’ho spedita adesso. Grazie dei libri, ne avevo proprio bisogno.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Giulia ha mandato il pacco ieri.', a: 't', why: '*Ti ho mandato il pacco ieri.*' },
            { q: 'Marco è rimasto a casa tutta la mattina.', a: 't', why: '*Sono rimasto a casa tutta la mattina.*' },
            { q: 'Il corriere ha lasciato il pacco da un amico.', a: 'f', why: 'It was left with the neighbour: *la vicina*.' },
            { q: 'Nel pacco c’erano anche dei dolci.', a: 'ng', why: 'The parcel held books and two postcards; sweets are not mentioned.' },
            { q: 'Giulia ha scelto le cartoline.', a: 't', why: '*Le ho scelte io.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Dov’era il pacco?', o: ['Dalla vicina.', 'In ufficio.', 'Dal corriere.'], why: '*La vicina me lo ha portato adesso.*' },
            { q: 'Che cosa manda Marco a Giulia?', o: ['Una foto.', 'Due libri.', 'Una cartolina.'], why: '*Eccola, te l’ho spedita adesso.* *La* = la foto.' },
            { q: 'Perché Marco ringrazia Giulia?', o: ['Per i libri.', 'Per la foto.', 'Per il corriere.'], why: '*Grazie dei libri.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the pronouns in the combined form.', items: [
            { s: 'La vicina [me] [lo] ha portato adesso.', why: '*Me lo* = a me il pacco.' },
            { s: 'Il corriere mi ha scritto che [te] [lo] consegna oggi.', why: '*Te lo* = a te il pacco.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing pronoun.', items: [
            { q: 'Marco dice: «Hai ragione, ___ vado subito.»', a: ['ci'], why: '*Ci* = dalla vicina.' },
            { q: 'Marco dice: «Te ___ mando una foto?»', a: ['ne'], why: '*Ne* = di cartoline (or of the parcel).' },
            { q: 'La vicina ___ ha portato il pacco adesso, dice Marco.', a: ['me lo'], why: '*Mi* → *me*; *il pacco* → *lo*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'What does each pronoun stand for?', pairs: [
            ['Lo hai ricevuto?', 'il pacco'],
            ['Ci vado subito.', 'dalla vicina'],
            ['Te l’ho spedita.', 'la foto'],
            ['Le ho scelte io.', 'le cartoline'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Sei mai stato a Parigi? – Sì, ___ sono stato due volte.', o: ['ci', 'ne', 'lo'], why: '*Ci* = a Parigi.' },
      { q: 'Quanti biglietti hai? – ___ ho tre.', o: ['Ne', 'Li', 'Ci'], why: 'A quantity: *ne*.' },
      { q: 'Hai preso le chiavi? – Sì, le ho ___.', o: ['prese', 'preso', 'presi'], why: '*Le* = le chiavi, feminine plural: *prese*.' },
      { q: 'Mi dai il libro? – Sì, ___ do subito.', o: ['te lo', 'ti lo', 'lo te'], why: '*Mi* → *te*; *il libro* → *lo*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Pensi spesso al lavoro? – No, non ___ penso mai.', a: ['ci'], why: '*Pensare a* → *non ci penso*.' },
      { q: 'Hai dato le chiavi a Giulia? – Sì, ___ ho date.', a: ['gliele'], why: '*Le* + *le* becomes *gliele*.' },
      { q: 'Hai visto Anna? – Sì, l’ho ___ ieri. (vedere)', a: ['vista'], why: '*L’* = Anna: *vista*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match each question with its answer.', pairs: [
      ['Vai in banca?', 'Sì, ci vado dopo pranzo.'],
      ['Ci mandi le foto?', 'Sì, ve le mando stasera.'],
      ['Quanti libri mi presti?', 'Te ne presto due.'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Replace the words after the verb with a pronoun.', items: [
      { q: 'Ho comprato tre biglietti.', a: ['Ne ho comprati tre.'], why: 'A quantity: *ne ho comprati tre*.' },
      { q: 'Mando le foto a voi.', a: ['Ve le mando.'], why: '*A voi* → *ve*; *le foto* → *le*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Pensi a quel viaggio? Sì, [ne] penso spesso.', a: ['ci'], why: '*Pensare a* → *ci penso*.' },
      { s: 'Mi presti il libro? Sì, [ti lo] presto.', a: ['te lo'], why: '*Ti* becomes *te* before *lo*.' },
    ] },
  ],
};
