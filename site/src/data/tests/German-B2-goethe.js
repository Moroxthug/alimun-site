// Mock test in the format of the Goethe-Zertifikat B2 (modular exam, format since 2019). docs/TESTS.md.
// Every text, recording script, question and model answer is written by Alimun; not official material.
// Draft for native-teacher review.
import { PAPER as lesen } from './German-B2-goethe/lesen.js';
import { PAPER as hoeren } from './German-B2-goethe/hoeren.js';
import { PAPER as schreiben } from './German-B2-goethe/schreiben.js';
import { PAPER as sprechen } from './German-B2-goethe/sprechen.js';

export const TEST = {
  id: 'German-B2-goethe', language: 'German', level: 'B2', format: 'goethe', review: 'draft',
  examiner: 'Charon',
  papers: [lesen, hoeren, schreiben, sprechen],
};
