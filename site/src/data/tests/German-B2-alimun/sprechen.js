// Alimun test German B2, paper Sprechen (docs/TESTS.md). Draft for native-teacher review.
export const PAPER = {
  id: 'sprechen', title: 'Sprechen', minutes: 12,
  parts: [
    { id: 'p1', ref: 'Teil 1', title: 'Gespräch zur Person',
      about: 'Die Prüferin stellt Ihnen einige Fragen. Antworten Sie ausführlich und begründen Sie Ihre Meinung.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'alimun', h: 'Antworten Sie auf die Fragen.', items: [
          { q: 'Welche Rolle spielt Ihre Arbeit oder Ihr Studium in Ihrem Leben? Würden Sie gern etwas daran ändern?', secs: 60, prep: 0 },
          { q: 'Gibt es ein Buch oder einen Film, der Sie in letzter Zeit beeindruckt hat? Erzählen Sie davon.', secs: 60, prep: 0 },
          { q: 'Was hat sich in Ihrer Stadt oder Region in den letzten zehn Jahren verändert, und wie finden Sie diese Veränderungen?', secs: 75, prep: 0,
            model: 'In meiner Stadt hat sich vor allem der Verkehr verändert. Vor zehn Jahren gab es kaum Radwege, inzwischen wurde in der Innenstadt ein ganzes Netz angelegt, und einige Straßen sind sogar für Autos gesperrt worden. Anfangs haben sich viele Geschäftsleute darüber beschwert, weil sie befürchtet hatten, dass weniger Kunden kommen würden. Ich finde die Entwicklung trotzdem positiv: Die Luft ist besser, und man hält sich wieder gern im Zentrum auf. Weniger gut finde ich, dass die Mieten so stark gestiegen sind. Viele junge Familien können sich die Innenstadt kaum noch leisten.' },
        ] },
      ] },
    { id: 'p2', ref: 'Teil 2', title: 'Bilder vergleichen',
      about: 'Sie sehen zwei Bilder. Vergleichen Sie sie und sprechen Sie über das Thema.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'alimun', h: 'Vergleichen Sie die Bilder.', items: [
          { q: 'Sehen Sie sich die beiden Bilder an. Beschreiben und vergleichen Sie sie. Wo verbringen Sie Ihre freie Zeit lieber, und warum?', secs: 90, prep: 30, scenes: ['park', 'cafe'],
            model: 'Auf dem ersten Bild sieht man einen Park an einem sonnigen Tag. Es gibt einen großen Baum, eine Bank und einen kleinen Teich, und ein Vogel fliegt vorbei. Das zweite Bild zeigt dagegen ein gemütliches Café mit einem Tisch am Fenster, einer Tasse Kaffee, einem Croissant und einer Pflanze. Beide Orte eignen sich, um sich zu entspannen, allerdings auf ganz unterschiedliche Weise. Im Park ist man draußen an der frischen Luft und kann sich bewegen, während man im Café eher sitzt, liest oder sich mit Freunden unterhält. Außerdem kostet der Park nichts, im Café muss man dagegen etwas bestellen. Ich persönlich verbringe meine freie Zeit lieber im Park, zumindest im Sommer, weil ich bei der Arbeit den ganzen Tag drinnen sitze. Im Winter würde ich mich aber wahrscheinlich für das Café entscheiden.' },
        ] },
      ] },
    { id: 'p3', ref: 'Teil 3', title: 'Eine Meinung vertreten',
      about: 'Sprechen Sie über die Frage auf der Karte. Nennen Sie Argumente, gehen Sie auf die Punkte ein und sagen Sie am Ende Ihre Meinung.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'alimun', h: 'Nehmen Sie Stellung.', items: [
          { q: 'Manche fordern, dass Flüge auf kurzen Strecken, zum Beispiel unter 500 Kilometern, verboten werden, wenn es eine gute Zugverbindung gibt. Was halten Sie davon?', secs: 120, prep: 60,
            notes: ['Umwelt und Klima', 'Zeit und Kosten für Reisende', 'Folgen für Flughäfen und Arbeitsplätze', 'Alternativen zu einem Verbot', 'Ihre Meinung'],
            model: 'Ein solches Verbot hätte zunächst klare Vorteile für die Umwelt, denn gerade auf kurzen Strecken verbraucht ein Flugzeug im Verhältnis besonders viel Treibstoff. Wenn eine schnelle Zugverbindung existiert, ist der Zeitverlust oft geringer, als man denkt: Man muss nicht so früh am Flughafen sein, und der Bahnhof liegt meistens mitten in der Stadt. Andererseits sind Zugtickets häufig teurer als Billigflüge, was gerade für Familien ein Argument ist. Außerdem würden kleinere Flughäfen Verbindungen verlieren, und damit wären auch Arbeitsplätze in Gefahr. Statt eines Verbots könnte man auch die Bahn günstiger und zuverlässiger machen oder Flugtickets stärker besteuern. Ich persönlich bin trotzdem für ein Verbot, allerdings nur dort, wo der Zug nicht mehr als eine Stunde länger braucht. Freiwillig ändern die meisten ihr Verhalten nämlich erst, wenn es eine wirklich gute Alternative gibt.' },
        ] },
      ] },
  ],
};
