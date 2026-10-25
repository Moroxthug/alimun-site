// Mock test in the format of the Goethe-Zertifikat B1 (modular exam for adults). docs/TESTS.md.
// Every text, recording script, question and model answer is written by Alimun; not official material.
// Draft for native-teacher review.
import { PAPER as lesen } from './German-B1-goethe/lesen.js';
import { PAPER as hoeren } from './German-B1-goethe/hoeren.js';
import { PAPER as schreiben } from './German-B1-goethe/schreiben.js';
import { PAPER as sprechen } from './German-B1-goethe/sprechen.js';

export const TEST = {
  id: 'German-B1-goethe', language: 'German', level: 'B1', format: 'goethe', review: 'draft',
  examiner: 'Sulafat',
  papers: [lesen, hoeren, schreiben, sprechen],
};
