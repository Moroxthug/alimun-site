// Italian FAQ for each course page. Facts only, from the platform and the Terms.
export function courseFaq(c) {
  const n = c.name;
  if (c.open) {
    return [
      [`Quanto costa un corso di ${n} online su Alimun?`, `I piani partono da €24 al mese con Community, in gruppi di circa 35 persone. Focused costa €59, Intensive €109 e le lezioni private 1 on 1 €269 al mese. Con l'abbonamento annuale paghi dieci mesi invece di dodici.`],
      ['Le lezioni sono dal vivo o registrate?', `Sono lezioni dal vivo in video con un insegnante e sempre lo stesso gruppo. Alimun non registra le lezioni: dopo ogni lezione ricevi gli appunti della sessione, il nuovo vocabolario e i compiti.`],
      ['In che giorni e a che ora si svolgono le lezioni?', 'Ogni classe si riunisce in giorni fissi e alla stessa ora ogni settimana, con lo stesso insegnante e lo stesso gruppo. Così lo studio diventa parte della tua settimana.'],
      ['Serve un livello minimo per iniziare?', `No. Ci sono classi dal livello A1 in su e un breve test iniziale ti colloca dalla A1 alla C1, così entri nella classe adatta a te.`],
      ['Posso prepararmi a una certificazione?', c.lang === 'German'
        ? 'Sì, puoi esercitarti con prove nel formato di Goethe B1, Goethe B2 e telc B1. Non è materiale ufficiale e Alimun non è affiliata agli enti certificatori.'
        : 'Sì, puoi esercitarti con prove nel formato di B2 First, C1 Advanced e IELTS. Non è materiale ufficiale e Alimun non è affiliata agli enti certificatori.'],
      ['Posso disdire quando voglio?', "Sì, puoi disdire in qualsiasi momento dalle impostazioni di pagamento della tua area personale. Mantieni l'accesso fino alla fine del periodo già pagato, come indicato nei Termini e condizioni."],
      ['Che cosa mi serve per seguire le lezioni?', 'Un computer o un altro dispositivo con videocamera, microfono e una connessione stabile. Le lezioni si svolgono nel browser, senza installare programmi.'],
    ];
  }
  return [
    [`Quando aprono le classi di ${n}?`, `Non c'è ancora una data. Iscrivendoti alla lista d'attesa ricevi un'email appena le classi di ${n} si aprono.`],
    ["La lista d'attesa è gratuita?", "Sì. Ti iscrivi gratis e oggi non paghi nulla."],
    ['Posso iniziare subito con un\'altra lingua?', 'Sì, le classi di inglese e tedesco sono già aperte e puoi iscriverti in qualsiasi momento.'],
    ['Come si svolgono le lezioni su Alimun?', "Le lezioni sono dal vivo in video, con un insegnante e sempre lo stesso gruppo, in giorni fissi e alla stessa ora ogni settimana. Tra una lezione e l'altra ti eserciti con correzione immediata."],
    ['Che cosa mi serve per seguire le lezioni?', 'Un computer o un altro dispositivo con videocamera, microfono e una connessione stabile. Le lezioni si svolgono nel browser, senza installare programmi.'],
  ];
}
