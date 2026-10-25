// Alimun test German B2: Alimun's own end-of-level test (docs/TESTS.md). Draft for native-teacher review.
import { PAPER as lesen } from './German-B2-alimun/lesen.js';
import { PAPER as sprache } from './German-B2-alimun/sprache.js';
import { PAPER as hoeren } from './German-B2-alimun/hoeren.js';
import { PAPER as schreiben } from './German-B2-alimun/schreiben.js';
import { PAPER as sprechen } from './German-B2-alimun/sprechen.js';

export const TEST = {
  id: 'German-B2-alimun', language: 'German', level: 'B2', format: 'alimun', review: 'draft',
  examiner: 'Aoede',
  papers: [lesen, sprache, hoeren, schreiben, sprechen],
};
