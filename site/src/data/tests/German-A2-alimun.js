// Alimun test German A2: Alimun's own end-of-level test (docs/TESTS.md). Draft for native-teacher review.
import { PAPER as lesen } from './German-A2-alimun/lesen.js';
import { PAPER as sprache } from './German-A2-alimun/sprache.js';
import { PAPER as hoeren } from './German-A2-alimun/hoeren.js';
import { PAPER as schreiben } from './German-A2-alimun/schreiben.js';
import { PAPER as sprechen } from './German-A2-alimun/sprechen.js';

export const TEST = {
  id: 'German-A2-alimun', language: 'German', level: 'A2', format: 'alimun', review: 'draft',
  examiner: 'Leda',
  papers: [lesen, sprache, hoeren, schreiben, sprechen],
};
