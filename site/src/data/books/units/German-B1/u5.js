// German B1, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Media in everyday life',
  goal: 'Talk about media and how things are done. Use the passive in the present and the Präteritum, ask polite indirect questions, and talk about news, streaming and social media.',
  art: 'dragon',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['passiv', 'indirect-questions', 'ob', 'media', 'social-media'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'The passive: wird gemacht, wurde gemacht',
      about: 'Say what is done when the action matters more than the person.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'With the **passive**, the action is more important than the person who does it. It is formed with *werden* + past participle. The participle goes to the **end**.' },
          { t: 'examples', items: [
            { s: 'Die Nachrichten **werden** jeden Abend um acht **gesendet**.', n: 'Passive in the present: *werden* + participle.' },
            { s: 'Der Film **wurde** in Wien **gedreht**.', n: 'Passive in the Präteritum: *wurde* + participle.' },
            { s: 'Die Sendung **wird** von Lena Hoffmann **moderiert**.', n: 'If you want to say who does it: *von* + dative.' },
            { s: 'In unserer Familie **wird** abends nicht **ferngesehen**.', n: 'A passive without a subject is also possible. *Wird* is then singular.' },
          ] },
        ],
        [
          { t: 'table', caption: 'werden in the passive', quiz: true, head: ['', 'Präsens', 'Präteritum'], rows: [
            ['ich', 'werde gefragt', 'wurde gefragt'],
            ['du', 'wirst gefragt', 'wurdest gefragt'],
            ['er / sie / es', 'wird gefragt', 'wurde gefragt'],
            ['wir', 'werden gefragt', 'wurden gefragt'],
            ['ihr', 'werdet gefragt', 'wurdet gefragt'],
            ['sie / Sie', 'werden gefragt', 'wurden gefragt'],
          ] },
          { t: 'text', md: 'Compare the active and the passive. The object of the active sentence becomes the subject of the passive sentence: *Der Sender zeigt den Film.* → *Der Film wird gezeigt.*' },
          { t: 'tip', art: 'owl', md: 'Do not mix up *werden* + participle (passive) and *werden* + infinitive (future). *Das Spiel wird gezeigt* means it is shown. *Ich werde das Spiel sehen* means I will see it.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Die Zeitung ___ jeden Morgen um sechs geliefert.', o: ['wird', 'werden', 'wirst'], why: 'One newspaper, in the present: *wird*.' },
            { q: 'Viele Serien ___ heute nur noch gestreamt.', o: ['werden', 'wird', 'wurden'], why: 'Plural subject, *heute*: present, *werden*.' },
            { q: 'Das Interview ___ letzte Woche aufgenommen.', o: ['wurde', 'wird', 'wurden'], why: '*Letzte Woche* is in the past, and *das Interview* is singular: *wurde*.' },
            { q: 'Die Fotos wurden ___ einem jungen Fotografen gemacht.', o: ['von', 'mit', 'bei'], why: 'The person who does it: *von* + dative.' },
            { q: 'Der Artikel wurde gestern ___.', o: ['veröffentlicht', 'veröffentlichen', 'veröffentlichte'], why: 'The passive needs the past participle at the end.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the passive form of werden: present or Präteritum.', items: [
            { q: 'Heute Abend ___ das Spiel live übertragen. (present)', a: ['wird'], why: '*das Spiel*: singular, present, *wird*.' },
            { q: 'Die Bücher ___ 2015 ins Englische übersetzt. (Präteritum)', a: ['wurden'], why: 'Plural, past: *wurden*.' },
            { q: 'In Österreich ___ die Radiosendung zum ersten Mal gesendet. (Präteritum)', a: ['wurde'], why: 'Singular, past: *wurde*.' },
            { q: 'Ihr ___ morgen um neun abgeholt. (present)', a: ['werdet'], why: '*ihr werdet*' },
            { q: 'Bei uns ___ viel Radio gehört. (present)', a: ['wird'], why: 'A passive without a real subject takes the singular: *wird*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Die Serie wurde in Hamburg gedreht.', why: '*wurde* in position 2, the participle *gedreht* at the end.' },
            { a: 'Die Nachrichten werden live gesendet.', why: '*werden* in position 2, the participle at the end.' },
            { a: 'Das Video wurde millionenfach geteilt.', why: 'Passive in the Präteritum: *wurde* … *geteilt*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Indirect questions',
      about: 'Ask politely with ob, wann, wie and other question words.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'An **indirect question** is a question inside another sentence. It sounds more polite. It works like a subordinate clause: the conjugated verb goes to the **end**.' },
          { t: 'table', caption: 'Direct and indirect questions', explain: ['head'], head: ['Direct question', 'Indirect question'], rows: [
            ['Wann beginnt der Film?', 'Weißt du, wann der Film beginnt?'],
            ['Wie funktioniert die App?', 'Können Sie mir erklären, wie die App funktioniert?'],
            ['Wo kann ich das Programm herunterladen?', 'Ich weiß nicht, wo ich das Programm herunterladen kann.'],
            ['Ist das Abo kostenlos?', 'Können Sie mir sagen, ob das Abo kostenlos ist?'],
          ] },
        ],
        [
          { t: 'text', md: 'A question with a question word (*wann, wie, wo, warum, was, wer*) keeps the question word. A **yes or no** question has no question word, so the indirect question starts with **ob**.' },
          { t: 'examples', items: [
            { s: 'Ich frage mich, **ob** die Sendung heute **kommt**.', n: 'Yes or no question: *ob*.' },
            { s: 'Weißt du, **warum** das Internet so langsam **ist**?', n: 'Question word: *warum*, verb at the end.' },
            { s: 'Sag mir bitte, **wer** den Film **gemacht hat**.', n: 'Perfekt: *gemacht hat*, the conjugated verb last.' },
          ] },
          { t: 'tip', art: 'owl', md: '*Ob* or *wenn*? *Ob* means “whether”: *Ich weiß nicht, **ob** er kommt.* *Wenn* is a condition or time: *Ich rufe an, **wenn** er kommt.*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Können Sie mir sagen, ___ der Kurs online ist?', o: ['ob', 'wenn', 'was'], why: 'Is the course online? A yes or no question: *ob*.' },
            { q: 'Ich weiß nicht, ___ das Konzert beginnt. Um acht?', o: ['wann', 'wer', 'was'], why: 'The question is about time: *wann*.' },
            { q: 'Weißt du, ___ man den Fernseher einschaltet?', o: ['wie', 'was', 'wer'], why: 'How do you switch it on? *Wie*.' },
            { q: 'Er hat gefragt, ___ wir am Samstag Zeit haben.', o: ['ob', 'dass', 'wenn'], why: 'Do we have time? Yes or no: *ob*.' },
            { q: 'Kannst du mir erklären, ___ dieses Zeichen bedeutet?', o: ['was', 'ob', 'wo'], why: 'What does it mean? *Was*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the indirect questions.', items: [
            { a: 'Weißt du, wann die Sendung anfängt?', why: 'The separable verb *anfängt* goes to the end together.' },
            { a: 'Können Sie mir sagen, ob das kostenlos ist?', why: 'Yes or no question: *ob*, verb *ist* at the end.' },
            { a: 'Ich frage mich, warum er nicht antwortet.', why: '*warum* + subject + verb at the end.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the indirect question.', items: [
            { q: 'Ist der Film gut? Ich weiß nicht, ___ der Film gut ist.', a: ['ob'], why: 'A yes or no question becomes *ob*.' },
            { q: 'Wo wohnt sie? Weißt du, wo sie ___?', a: ['wohnt'], why: 'The verb *wohnt* goes to the end.' },
            { q: 'Wann hast du Zeit? Sag mir, wann du Zeit ___.', a: ['hast'], why: 'The verb *hast* goes to the end.' },
            { q: 'Kann ich hier parken? Wissen Sie, ob ich hier parken ___?', a: ['kann'], why: 'The modal verb *kann* comes after the infinitive, at the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'News, streaming and social media',
      about: 'The words for the media you use every day.',
      art: 'mug',
      spreads: [
        [
          { t: 'table', caption: 'Media', explain: ['head', 'col1'], quiz: true, head: ['German', 'Meaning'], rows: [
            ['die Nachrichten (Pl.)', 'the news'],
            ['die Sendung', 'a programme on TV or radio'],
            ['der Sender', 'a TV or radio station'],
            ['die Schlagzeile', 'a headline'],
            ['der Beitrag', 'a report, an article or a post'],
            ['die Werbung', 'advertising'],
            ['das Abo (das Abonnement)', 'a subscription'],
            ['streamen', 'to watch or listen online'],
            ['herunterladen', 'to download'],
            ['teilen', 'to share'],
          ] },
          { t: 'tip', art: 'owl', md: 'Many media words come from English, but they are German verbs: *ich streame*, *ich habe es gepostet*, *sie hat das Foto geliked*.' },
        ],
        [
          { t: 'dialogue', title: 'Beim Frühstück', lines: [
            { who: 'Mehmet', s: 'Hast du die Schlagzeile gesehen? Die Brücke wird ab Montag gesperrt.' },
            { who: 'Sofia', s: 'Echt? Wo hast du das gelesen?' },
            { who: 'Mehmet', s: 'In der Nachrichten-App. Der Beitrag wurde heute Morgen veröffentlicht.' },
            { who: 'Sofia', s: 'Ich lese kaum noch Nachrichten. Ich höre morgens nur Radio.' },
            { who: 'Mehmet', s: 'Und abends streamst du Serien, oder?' },
            { who: 'Sofia', s: 'Ja, aber ich habe gerade ein Abo gekündigt. Zu viel Werbung!' },
          ] },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'Die Brücke ist schon gesperrt.', a: 'f', why: 'It *wird ab Montag gesperrt*: it will be closed from Monday.' },
            { q: 'Mehmet hat die Nachricht in einer App gelesen.', a: 't', why: '*In der Nachrichten-App.*' },
            { q: 'Sofia hat ein Abo gekündigt, weil es zu viel Werbung gab.', a: 't', why: '*Zu viel Werbung!*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What goes together?', pairs: [
            ['eine App', 'installieren'],
            ['einen Kommentar', 'schreiben'],
            ['ein Abo', 'kündigen'],
            ['einem Kanal', 'folgen'],
            ['das Handy', 'aufladen'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Ich sehe jeden Abend um acht die ___.', o: ['Nachrichten', 'Schlagzeile', 'Beitrag'], why: '*die Nachrichten* is always plural when it means the news.' },
            { q: 'Vor dem Film gab es zehn Minuten ___.', o: ['Werbung', 'Sender', 'Abo'], why: 'Adverts before a film: *Werbung*.' },
            { q: 'Auf welchem ___ läuft das Spiel?', o: ['Sender', 'Beitrag', 'Schlagzeile'], why: 'The TV station: *der Sender*, dative *auf welchem Sender*.' },
            { q: 'Ohne Internet kann ich die Serie nicht ___.', o: ['streamen', 'teilen', 'kündigen'], why: 'To watch online: *streamen*.' },
            { q: 'Kannst du mir den Link ___? Dann schicke ich ihn meiner Schwester.', o: ['schicken', 'kündigen', 'aufladen'], why: '*einen Link schicken*' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'How do you use media?',
      about: 'Read what four people say about their media habits.',
      art: 'ghost',
      spreads: [
        [
          { t: 'reading', title: 'Umfrage: Wie nutzen Sie Medien?', md: 'Für unsere Stadtteilzeitung haben wir vier Menschen gefragt, wie sie Medien im Alltag nutzen.\n\n**Helga, 68, Rentnerin:** „Bei mir wird jeden Morgen die Zeitung gelesen, und zwar auf Papier. Abends sehe ich die Nachrichten im Fernsehen. Mein Enkel hat mir ein Tablet geschenkt, aber ich weiß noch nicht genau, wie alles funktioniert.“\n\n**Dario, 34, Krankenpfleger:** „Ich arbeite oft nachts, deshalb höre ich Podcasts in der Straßenbahn. Einen Fernseher habe ich gar nicht mehr. Filme und Serien streame ich am Wochenende. Meine Kollegen schicken mir oft lustige Videos, aber dafür habe ich selten Zeit.“\n\n**Yuki, 22, Studentin:** „Ich lese die Nachrichten fast nur in sozialen Netzwerken. Manchmal frage ich mich, ob die Informationen wirklich stimmen. Deshalb vergleiche ich wichtige Meldungen mit einer zweiten Quelle.“\n\n**Kwame, 45, Lehrer:** „Ich versuche, weniger Zeit am Handy zu verbringen. Seit einem Monat liegt es abends in der Küche, nicht im Schlafzimmer. Ich schlafe jetzt besser, obwohl ich am Anfang nervös war.“' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Helga liest die Zeitung am Morgen.', a: 't', why: '*Bei mir wird jeden Morgen die Zeitung gelesen.*' },
            { q: 'Helga kann ihr Tablet schon sehr gut benutzen.', a: 'f', why: 'She does not yet know exactly how everything works.' },
            { q: 'Dario hat einen Fernseher.', a: 'f', why: '*Einen Fernseher habe ich gar nicht mehr.*' },
            { q: 'Yuki prüft wichtige Meldungen mit einer zweiten Quelle.', a: 't', why: '*Deshalb vergleiche ich wichtige Meldungen mit einer zweiten Quelle.*' },
            { q: 'Yuki studiert Journalismus.', a: 'ng', why: 'The text says she is a student, but not what she studies.' },
            { q: 'Kwame schläft besser, seit das Handy in der Küche liegt.', a: 't', why: '*Ich schlafe jetzt besser.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language in the text.', items: [
            { q: '„Bei mir wird jeden Morgen die Zeitung gelesen“: what form is this?', o: ['The passive in the present.', 'The future.', 'The Präteritum.'], why: '*wird* + participle *gelesen*: passive, present.' },
            { q: '„Ich frage mich, ob die Informationen wirklich stimmen“: why ob?', o: ['It is an indirect yes or no question.', 'It is a condition.', 'It gives a reason.'], why: 'Is the information really correct? Yes or no: *ob*.' },
            { q: 'Who uses a podcast on the way to work?', o: ['Dario', 'Helga', 'Kwame'], why: 'Dario listens to podcasts on the tram.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the conjugated verb at the end of the indirect question.', items: [
            { s: 'Ich weiß noch nicht genau, wie alles [funktioniert].', why: '*funktioniert* closes the indirect question with *wie*.' },
            { s: 'Manchmal frage ich mich, ob die Informationen wirklich [stimmen].', why: '*stimmen* closes the indirect question with *ob*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Die Sendung ___ jeden Sonntag gezeigt.', o: ['wird', 'werden', 'wurden'], why: 'Singular, present: *wird*.' },
      { q: 'Das Buch wurde 2010 ___.', o: ['geschrieben', 'schreiben', 'schrieb'], why: 'Passive: *wurde* + past participle.' },
      { q: 'Weißt du, ___ der Supermarkt sonntags offen ist?', o: ['ob', 'wenn', 'was'], why: 'Is it open on Sundays? Yes or no: *ob*.' },
      { q: 'Ich habe mein Abo ___, weil es zu teuer war.', o: ['gekündigt', 'geteilt', 'gestreamt'], why: '*ein Abo kündigen*: cancel a subscription.' },
      { q: 'Die ___ in der Zeitung war sehr groß: „Neue Brücke eröffnet“.', o: ['Schlagzeile', 'Werbung', 'Sendung'], why: 'A headline: *die Schlagzeile*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Die Fotos ___ gestern von vielen Leuten geteilt. (werden, Präteritum)', a: ['wurden'], why: 'Plural, past: *wurden*.' },
      { q: 'Können Sie mir sagen, wo der Bahnhof ___? (sein)', a: ['ist'], why: 'Indirect question: the verb goes to the end.' },
      { q: 'Ich frage mich, ___ er die Nachricht schon gelesen hat. (yes or no question)', a: ['ob'], why: 'A yes or no question: *ob*.' },
      { q: 'Die Nachrichten werden jeden Abend live ___. (senden)', a: ['gesendet'], why: 'Passive: *werden* + past participle.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Weißt du, wie die App funktioniert?', why: 'Indirect question: *wie* + subject + verb at the end.' },
      { a: 'Der Film wurde in Berlin gedreht.', why: 'Passive: *wurde* in position 2, the participle at the end.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['Ich weiß nicht, wann der Film beginnt.', 'Ich weiß nicht, wann beginnt der Film.', 'Ich weiß nicht, ob wann der Film beginnt.'], why: 'Indirect question: the verb goes to the end.' },
      { q: '', o: ['Das Haus wurde 1920 gebaut.', 'Das Haus wurde 1920 bauen.', 'Das Haus wird 1920 gebaut worden.'], why: 'Passive in the Präteritum: *wurde* + participle.' },
    ] },
  ],
};
