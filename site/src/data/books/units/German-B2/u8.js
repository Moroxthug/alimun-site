// German B2, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Making your case',
  goal: 'Argue for and against an idea in speaking and in writing: link your arguments, sound natural in conversation and write a formal opinion piece.',
  art: 'dog',
  tags: { skills: ['grammar', 'vocabulary', 'writing', 'reading'], topics: ['argument-connectors', 'modal-particles', 'stellungnahme', 'forum-discussion'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Connectors for arguments',
      about: 'Add points, show a contrast and draw a conclusion.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'In an argument, you add points, show a contrast and draw a conclusion. Many of these connectors are **adverbs**: they can take position 1, and then the verb comes straight after them. They can also stand after the verb, in the middle of the clause.' },
          { t: 'table', caption: 'Connectors for arguments', explain: ['head', 'col1'], quiz: true, head: ['Connector', 'Function', 'Example'], rows: [
            ['außerdem / zudem', 'adds a point', 'Außerdem ist das Angebot günstig.'],
            ['trotzdem / dennoch', 'a contrast: it happens anyway', 'Es regnete. Trotzdem gingen wir spazieren.'],
            ['folglich / deshalb', 'a result', 'Die Mieten steigen. Folglich ziehen viele Familien weg.'],
            ['einerseits … andererseits', 'two sides of a question', 'Einerseits ist Homeoffice bequem, andererseits fehlen die Kollegen.'],
          ] },
        ],
        [
          { t: 'text', md: '*Trotzdem* and *obwohl* express the same idea, but they work differently. **Obwohl** starts a subordinate clause, so the verb goes to the end. **Trotzdem** is an adverb in a main clause.' },
          { t: 'examples', items: [
            { s: '**Obwohl** das Ticket teuer **war**, sind wir mitgefahren.', n: 'A subordinate clause: the verb goes to the end.' },
            { s: 'Das Ticket war teuer. **Trotzdem sind** wir mitgefahren.', n: 'An adverb in position 1: the verb comes next.' },
            { s: 'Wir sind **trotzdem** mitgefahren.', n: '*Trotzdem* can also stand after the verb.' },
          ] },
          { t: 'tip', art: 'owl', md: '*Dennoch* means the same as *trotzdem*, but it sounds more formal. *Folglich* is more formal than *deshalb*. In a written argument, the formal words are a good choice.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the connector.', items: [
            { q: 'Das Auto ist alt und braucht viel Benzin. ___ ist es oft kaputt.', o: ['Außerdem', 'Trotzdem', 'Folglich'], why: 'Another negative point is added: *außerdem*.' },
            { q: 'Die Wohnung ist klein und laut. ___ haben wir sie genommen, weil sie zentral liegt.', o: ['Trotzdem', 'Außerdem', 'Folglich'], why: 'They took it anyway: *trotzdem*.' },
            { q: 'Immer mehr Menschen arbeiten von zu Hause. ___ brauchen viele Firmen weniger Büros.', o: ['Folglich', 'Dennoch', 'Andererseits'], why: 'A result: *folglich*.' },
            { q: '___ spart man mit dem Zug Zeit, andererseits ist er oft teurer.', o: ['Einerseits', 'Außerdem', 'Folglich'], why: '*Andererseits* needs *einerseits* in the first part.' },
            { q: 'Er hatte kaum geschlafen. ___ hielt er eine ausgezeichnete Rede.', o: ['Dennoch', 'Folglich', 'Außerdem'], why: 'A good speech after almost no sleep is a contrast: *dennoch*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write obwohl or trotzdem.', items: [
            { q: '___ es spät war, haben wir weiterdiskutiert.', a: ['Obwohl'], why: 'The verb *war* is at the end, so this is a subordinate clause: *obwohl*.' },
            { q: 'Es war spät. ___ haben wir weiterdiskutiert.', a: ['Trotzdem', 'Dennoch'], why: 'The verb comes straight after the gap, so you need the adverb *trotzdem*.' },
            { q: 'Sie hat die Stelle angenommen, ___ das Gehalt niedrig ist.', a: ['obwohl'], why: 'The verb *ist* is at the end: *obwohl*.' },
            { q: 'Das Gehalt ist niedrig. Sie hat die Stelle ___ angenommen.', a: ['trotzdem', 'dennoch'], why: 'An adverb after the verb, in a main clause: *trotzdem*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Trotzdem hat sie die Stelle angenommen.', why: '*Trotzdem* in position 1, then the verb.' },
            { a: 'Folglich müssen wir die Preise erhöhen.', why: '*Folglich* in position 1, then the verb.' },
            { a: 'Einerseits ist die Stadt teuer, andererseits bietet sie viel.', why: 'After *einerseits* and *andererseits*, the verb comes next.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Modal particles: ja, doch, mal, eben, halt',
      about: 'Sound natural and friendly in conversation.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: '**Modal particles** are small words that show the speaker’s attitude. They do not change the facts, but they make spoken German sound natural and friendly. They usually stand in the middle of the sentence, after the verb and often after pronouns.' },
          { t: 'table', caption: 'Modal particles', explain: ['head', 'col1'], head: ['Particle', 'What it shows', 'Example'], rows: [
            ['ja', 'a fact both people know, or surprise', 'Das weißt du ja. / Das ist ja toll!'],
            ['doch', 'a reminder or a contradiction; in a request, it encourages', 'Das habe ich doch gesagt! / Komm doch mit!'],
            ['mal', 'makes a request softer and more casual', 'Kannst du mal kurz kommen?'],
            ['eben / halt', 'something cannot be changed', 'Das ist halt so. / Dann warten wir eben.'],
          ] },
          { t: 'tip', art: 'owl', md: '*Halt* is more common in the south of Germany and in Austria; *eben* is used everywhere. In questions, *denn* makes you sound interested: *Was ist denn los?* Particles belong to speech, so formal texts use them very rarely.' },
        ],
        [
          { t: 'dialogue', title: 'In der WG-Küche', lines: [
            { who: 'Jana', s: 'Hast du mal kurz Zeit? Wir müssen über die Küche reden.' },
            { who: 'Emre', s: 'Ja, klar. Was ist denn los?' },
            { who: 'Jana', s: 'Der Müll steht schon seit drei Tagen hier. Du warst doch diese Woche dran!' },
            { who: 'Emre', s: 'Stimmt, tut mir leid. Ich hatte ja so viel mit meinen Prüfungen zu tun.' },
            { who: 'Jana', s: 'Das verstehe ich ja. Aber wir haben eben alle viel zu tun.' },
            { who: 'Emre', s: 'Du hast recht. Ich bringe ihn gleich runter. Komm doch nachher auf einen Tee vorbei!' },
            { who: 'Jana', s: 'Na gut. Das ist halt das Problem mit dir: Man kann dir nicht lange böse sein.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the particle that fits.', items: [
            { q: 'Kannst du mir ___ kurz helfen?', o: ['mal', 'ja', 'eben'], why: 'A casual, friendly request: *mal*.' },
            { q: 'Du weißt ___, dass ich keinen Fisch esse. Warum kochst du dann Fisch?', o: ['doch', 'mal', 'halt'], why: 'A reminder of something the other person knows: *doch*.' },
            { q: 'Oh, du hast ___ eine neue Brille! Steht dir gut.', o: ['ja', 'mal', 'eben'], why: 'Surprise: *ja*.' },
            { q: 'Der letzte Bus ist weg. Dann gehen wir ___ zu Fuß.', o: ['eben', 'ja', 'denn'], why: 'It cannot be changed, so we accept it: *eben*.' },
            { q: '„Ich komme heute nicht mit.“ „Komm ___ mit! Es wird bestimmt lustig.“', o: ['doch', 'denn', 'ja'], why: 'You encourage someone and contradict their *nicht*: *doch*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What does the speaker want to show?', pairs: [
            ['Das ist ja interessant!', 'Ich bin überrascht.'],
            ['Das ist halt so.', 'Man kann es nicht ändern.'],
            ['Komm doch mit!', 'Ich möchte dich überreden.'],
            ['Du weißt doch, dass ich keine Zeit habe.', 'Ich erinnere dich an etwas, das du schon weißt.'],
            ['Hilf mir mal kurz.', 'Ich bitte locker um etwas.'],
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the modal particle.', items: [
            { s: 'Das habe ich dir [doch] gestern gesagt!', why: '*Doch*: a reminder, with a little reproach.' },
            { s: 'Gib mir [mal] bitte das Salz.', why: '*Mal* makes the request casual. *Bitte* is not a particle.' },
            { s: 'Das ist [halt] so, da kann man nichts machen.', why: '*Halt*: it cannot be changed.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Writing a Stellungnahme',
      about: 'Write a clear, formal opinion piece.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'A **Stellungnahme** is a formal text in which you give your opinion on a question and support it with arguments. It usually has four parts: an introduction to the topic, the arguments for and against, your own opinion, and a conclusion.' },
          { t: 'table', caption: 'Useful phrases', explain: ['head', 'col0'], head: ['Part', 'Useful phrases'], rows: [
            ['introduction', 'In der Diskussion um … geht es um die Frage, ob … / Immer häufiger wird darüber diskutiert, ob …'],
            ['arguments for', 'Für … spricht, dass … / Ein wichtiges Argument dafür ist …'],
            ['arguments against', 'Dagegen spricht, dass … / Kritiker wenden ein, dass …'],
            ['adding a point', 'Hinzu kommt, dass … / Darüber hinaus …'],
            ['your opinion', 'Ich bin der Ansicht, dass … / Meiner Auffassung nach …'],
            ['conclusion', 'Zusammenfassend lässt sich sagen, dass … / Abschließend möchte ich betonen, dass …'],
          ] },
          { t: 'tip', art: 'owl', md: 'Formal texts avoid modal particles and casual words. Write *Ich bin der Ansicht* rather than *Ich finde halt*, and *sehr* rather than *total* or *mega*. *Man* and the passive make a text sound neutral.' },
        ],
        [
          { t: 'text', md: 'Here is a short model. Look for the phrases from the table.' },
          { t: 'reading', title: 'Sollten Museen kostenlos sein?', md: 'In der Diskussion um Kultur in der Stadt geht es immer wieder um die Frage, ob Museen kostenlos sein sollten.\n\nFür freien Eintritt spricht, dass auch Menschen mit wenig Geld Kunst und Geschichte erleben könnten. Hinzu kommt, dass mehr junge Leute den Weg ins Museum finden würden. Kritiker wenden jedoch ein, dass den Museen dann Geld für Ausstellungen und Personal fehlen würde.\n\nIch bin der Ansicht, dass die Vorteile überwiegen. Kultur gehört allen, und eine Stadt profitiert von neugierigen, gut informierten Bürgerinnen und Bürgern. Die fehlenden Einnahmen könnte die Stadt zumindest teilweise ausgleichen.\n\nZusammenfassend lässt sich sagen, dass freier Eintritt eine Investition in die Zukunft ist.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which sentence fits a formal Stellungnahme?', items: [
            { q: '', o: ['Ich bin der Ansicht, dass Homeoffice viele Vorteile hat.', 'Ich finde halt, Homeoffice ist super.', 'Homeoffice ist doch mega praktisch!'], why: '*Ich bin der Ansicht, dass …* is formal. *Halt*, *doch*, *super* and *mega* belong to speech.' },
            { q: '', o: ['Kritiker wenden ein, dass die Kosten zu hoch sind.', 'Manche Leute meckern, dass das zu teuer ist.', 'Das kostet ja total viel.'], why: '*Kritiker wenden ein* is formal. *Meckern* and *total* are casual.' },
            { q: '', o: ['Zusammenfassend lässt sich sagen, dass beide Seiten gute Argumente haben.', 'Na ja, am Ende haben beide irgendwie recht.', 'Also, beide haben halt gute Argumente.'], why: 'A formal conclusion: *Zusammenfassend lässt sich sagen, dass …*' },
            { q: '', o: ['Hinzu kommt, dass der Verkehr in der Innenstadt abnehmen würde.', 'Und dann gibt’s auch noch weniger Autos in der Stadt.', 'Außerdem gibt es dann eben weniger Autos.'], why: '*Hinzu kommt, dass …* adds a point formally. *Gibt’s* and *eben* are spoken German.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Complete the phrases.', pairs: [
            ['Zusammenfassend', 'lässt sich sagen, dass …'],
            ['Ich bin der', 'Ansicht, dass …'],
            ['Hinzu', 'kommt, dass …'],
            ['Kritiker wenden', 'ein, dass …'],
            ['Meiner Auffassung', 'nach …'],
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Für das Verbot spricht, dass die Luft sauberer wird.', why: '*Für … spricht, dass …*: the verb *wird* goes to the end of the *dass* clause.' },
            { a: 'Zusammenfassend lässt sich sagen, dass beide Seiten recht haben.', why: 'A fixed phrase for the conclusion.' },
            { a: 'Ich bin der Ansicht, dass Bildung kostenlos sein sollte.', why: 'In the *dass* clause, the modal verb *sollte* goes to the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A forum discussion',
      about: 'Read a forum discussion and follow the arguments.',
      art: 'churro',
      spreads: [
        [
          { t: 'reading', title: 'Forum: Vier-Tage-Woche – gute Idee oder unrealistisch?', md: '**Malik_88:** In meiner Firma wird gerade diskutiert, ob wir bei gleichem Gehalt nur noch vier Tage pro Woche arbeiten sollen. Ich finde die Idee super. Man hätte mehr Zeit für Familie, Sport und Ehrenamt. Außerdem wären die Leute ausgeruhter und folglich auch produktiver. Was meint ihr?\n\n**Ruth_K:** Einerseits verstehe ich das, andererseits frage ich mich, wer das bezahlen soll. Ich arbeite in der Pflege, und bei uns fehlt jetzt schon Personal. Wenn bei uns alle nur noch vier Tage arbeiten würden, müssten wir an diesen Tagen noch länger bleiben. Das ist halt die Realität in vielen Berufen.\n\n**Teamleiterin_SV:** Wir haben die Vier-Tage-Woche vor einem Jahr in unserem Büro eingeführt. Am Anfang war ich skeptisch, dennoch bin ich inzwischen überzeugt. Die Besprechungen sind kürzer, und es wird weniger Zeit verschwendet. Allerdings passt das Modell nicht zu jedem Team. Wir mussten zum Beispiel einen Plan machen, damit der Kundenservice jeden Tag erreichbar ist.\n\n**J_Novak:** Ich bin selbstständig, für mich ist das sowieso kein Thema. Trotzdem finde ich die Diskussion wichtig. Es geht doch eigentlich um die Frage, wie wir in Zukunft leben wollen. Sollte die Arbeit wirklich den größten Teil unserer Zeit bestimmen?\n\n**Ruth_K:** Da hast du ja recht. Ich wäre auch nicht dagegen, wenn es in meinem Beruf funktionieren würde. Man müsste eben zuerst mehr Leute einstellen.\n\n**Malik_88:** Gute Punkte! Vielleicht ist die Lösung also nicht eine Regel für alle, sondern flexible Modelle für verschiedene Branchen.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Malik glaubt, dass die Mitarbeiter mit einer Vier-Tage-Woche produktiver wären.', a: 't', why: '*Die Leute wären ausgeruhter und folglich auch produktiver.*' },
            { q: 'Ruth arbeitet in einem Büro.', a: 'f', why: 'She works *in der Pflege*, in care.' },
            { q: 'In Ruths Beruf gibt es schon jetzt zu wenig Personal.', a: 't', why: '*Bei uns fehlt jetzt schon Personal.*' },
            { q: 'Die Teamleiterin war von Anfang an von der Idee begeistert.', a: 'f', why: '*Am Anfang war ich skeptisch.*' },
            { q: 'J_Novak arbeitet nur vier Tage pro Woche.', a: 'ng', why: 'J_Novak is self-employed, but the post does not say how many days a week.' },
            { q: 'Am Ende schlägt Malik eine Regel für alle Branchen vor.', a: 'f', why: 'He suggests *nicht eine Regel für alle, sondern flexible Modelle*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language of the forum.', items: [
            { q: '„Das ist halt die Realität in vielen Berufen.“ What does halt show?', o: ['Ruth thinks this cannot easily be changed.', 'Ruth is surprised.', 'Ruth is asking for help.'], why: '*Halt*: something cannot be changed.' },
            { q: '„Am Anfang war ich skeptisch, dennoch bin ich inzwischen überzeugt.“ Which word could replace dennoch?', o: ['trotzdem', 'deshalb', 'außerdem'], why: '*Dennoch* and *trotzdem* both show a contrast.' },
            { q: 'Why did the team leader’s team need a plan?', o: ['So that customer service could be reached every day.', 'Because the meetings became longer.', 'Because the staff wanted to work five days.'], why: '*…, damit der Kundenservice jeden Tag erreichbar ist.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Die Mieten sind hoch. ___ ziehen viele Studierende aufs Land.', o: ['Folglich', 'Trotzdem', 'Andererseits'], why: 'A result: *folglich*.' },
      { q: '___ der Kurs teuer ist, melde ich mich an.', o: ['Obwohl', 'Trotzdem', 'Dennoch'], why: 'The verb *ist* is at the end, so you need *obwohl*.' },
      { q: 'Kannst du ___ das Fenster aufmachen?', o: ['mal', 'halt', 'ja'], why: 'A casual request: *mal*.' },
      { q: 'Which sentence fits a formal text?', o: ['Meiner Auffassung nach sollte das Rauchen in Parks verboten werden.', 'Rauchen im Park finde ich halt total doof.', 'Rauchen im Park geht doch gar nicht!'], why: '*Meiner Auffassung nach* is formal. *Halt*, *total*, *doof* and *doch* are spoken German.' },
      { q: 'Einerseits ist das Auto bequem, ___ ist es schlecht für die Umwelt.', o: ['andererseits', 'außerdem', 'folglich'], why: '*Einerseits … andererseits*: two sides.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Es hat stark geregnet. ___ sind wir wandern gegangen. (= obwohl es geregnet hat)', a: ['Trotzdem', 'Dennoch'], why: 'A contrast in a main clause: *trotzdem* or *dennoch*.' },
      { q: 'Für ein Tempolimit ___, dass es weniger Unfälle gäbe.', a: ['spricht'], why: 'The fixed phrase is *Für … spricht, dass …*' },
      { q: 'Das habe ich dir ___ schon dreimal erklärt! (Erinnerung)', a: ['doch', 'ja'], why: 'A reminder with a little reproach: *doch* (or *ja*).' },
      { q: 'Zusammenfassend lässt sich ___, dass beide Modelle Vorteile haben.', a: ['sagen'], why: 'The fixed phrase is *Zusammenfassend lässt sich sagen, dass …*' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Dennoch halte ich das Verbot für falsch.', why: '*Dennoch* in position 1, then the verb.' },
      { a: 'Außerdem wären die Straßen sicherer.', why: '*Außerdem* in position 1, then the verb.' },
      { a: 'Ich bin der Ansicht, dass das Projekt sinnvoll ist.', why: 'In the *dass* clause, the verb goes to the end.' },
    ] },
    { t: 'ex', kind: 'spot', h: 'Tap the word that does not fit a formal text.', items: [
      { s: 'Ich bin der Ansicht, dass die Stadt [halt] mehr Radwege braucht.', why: '*Halt* is a modal particle of spoken German.' },
      { s: 'Kritiker wenden ein, dass das Projekt [total] teuer ist.', why: '*Total* is casual; write *sehr* or *äußerst*.' },
    ] },
  ],
};
