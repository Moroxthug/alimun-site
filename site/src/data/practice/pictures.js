// Words for the picture exercises (step 5): the sticker objects and the ink-and-wash scenes of the third cast
// (js/app/cast3.js), in each course language. Nouns with their article where the language has gender.
// Scenes: where each labelled thing is, in the scene's 320 × 200 drawing. Drafts for native-teacher review.
const W = (en, de, fr, es, it, pt) => ({ English: en, German: de, French: fr, Spanish: es, Italian: it, Portuguese: pt });

export const OBJECTS = {
  apple: W('apple', 'der Apfel', 'la pomme', 'la manzana', 'la mela', 'a maçã'),
  bread: W('bread', 'das Brot', 'le pain', 'el pan', 'il pane', 'o pão'),
  cheese: W('cheese', 'der Käse', 'le fromage', 'el queso', 'il formaggio', 'o queijo'),
  train: W('train', 'der Zug', 'le train', 'el tren', 'il treno', 'o comboio'),
  bus: W('bus', 'der Bus', 'le bus', 'el autobús', 'l’autobus', 'o autocarro'),
  bicycle: W('bicycle', 'das Fahrrad', 'le vélo', 'la bicicleta', 'la bicicletta', 'a bicicleta'),
  house: W('house', 'das Haus', 'la maison', 'la casa', 'la casa', 'a casa'),
  key: W('key', 'der Schlüssel', 'la clé', 'la llave', 'la chiave', 'a chave'),
  phone: W('phone', 'das Handy', 'le portable', 'el móvil', 'il cellulare', 'o telemóvel'),
  umbrella: W('umbrella', 'der Regenschirm', 'le parapluie', 'el paraguas', 'l’ombrello', 'o guarda-chuva'),
  clock: W('alarm clock', 'der Wecker', 'le réveil', 'el despertador', 'la sveglia', 'o despertador'),
  ticket: W('ticket', 'die Fahrkarte', 'le billet', 'el billete', 'il biglietto', 'o bilhete'),
};

export const SCENES = {
  cafe: [
    { x: 95, y: 68, w: W('window', 'das Fenster', 'la fenêtre', 'la ventana', 'la finestra', 'a janela') },
    { x: 250, y: 42, w: W('lamp', 'die Lampe', 'la lampe', 'la lámpara', 'la lampada', 'o candeeiro') },
    { x: 222, y: 96, w: W('plant', 'die Pflanze', 'la plante', 'la planta', 'la pianta', 'a planta') },
    { x: 125, y: 137, w: W('cup', 'die Tasse', 'la tasse', 'la taza', 'la tazza', 'a chávena') },
    { x: 188, y: 132, w: W('croissant', 'das Croissant', 'le croissant', 'el cruasán', 'il cornetto', 'o croissant') },
    { x: 66, y: 152, w: W('table', 'der Tisch', 'la table', 'la mesa', 'il tavolo', 'a mesa') },
  ],
  station: [
    { x: 110, y: 90, w: W('train', 'der Zug', 'le train', 'el tren', 'il treno', 'o comboio') },
    { x: 260, y: 52, w: W('clock', 'die Uhr', 'l’horloge', 'el reloj', 'l’orologio', 'o relógio') },
    { x: 262, y: 116, w: W('bench', 'die Bank', 'le banc', 'el banco', 'la panchina', 'o banco') },
    { x: 290, y: 140, w: W('suitcase', 'der Koffer', 'la valise', 'la maleta', 'la valigia', 'a mala') },
    { x: 150, y: 160, w: W('platform', 'der Bahnsteig', 'le quai', 'el andén', 'il binario', 'a plataforma') },
  ],
  kitchen: [
    { x: 160, y: 50, w: W('window', 'das Fenster', 'la fenêtre', 'la ventana', 'la finestra', 'a janela') },
    { x: 260, y: 70, w: W('fridge', 'der Kühlschrank', 'le frigo', 'la nevera', 'il frigorifero', 'o frigorífico') },
    { x: 71, y: 100, w: W('pot', 'der Topf', 'la casserole', 'la olla', 'la pentola', 'a panela') },
    { x: 156, y: 100, w: W('kettle', 'der Wasserkocher', 'la bouilloire', 'el hervidor', 'il bollitore', 'a chaleira') },
    { x: 160, y: 165, w: W('cupboard', 'der Schrank', 'le placard', 'el armario', 'l’armadio', 'o armário') },
  ],
  park: [
    { x: 82, y: 70, w: W('tree', 'der Baum', 'l’arbre', 'el árbol', 'l’albero', 'a árvore') },
    { x: 262, y: 42, w: W('sun', 'die Sonne', 'le soleil', 'el sol', 'il sole', 'o sol') },
    { x: 220, y: 128, w: W('bench', 'die Bank', 'le banc', 'el banco', 'la panchina', 'o banco') },
    { x: 204, y: 66, w: W('bird', 'der Vogel', 'l’oiseau', 'el pájaro', 'l’uccello', 'o pássaro') },
    { x: 245, y: 180, w: W('pond', 'der Teich', 'l’étang', 'el estanque', 'lo stagno', 'o lago') },
  ],
};
