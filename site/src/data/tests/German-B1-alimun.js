// Alimun test German B1: Alimun's own end-of-level test (docs/TESTS.md). Draft for native-teacher review.
import { PAPER as lesen } from './German-B1-alimun/lesen.js';
import { PAPER as sprache } from './German-B1-alimun/sprache.js';
import { PAPER as hoeren } from './German-B1-alimun/hoeren.js';
import { PAPER as schreiben } from './German-B1-alimun/schreiben.js';
import { PAPER as sprechen } from './German-B1-alimun/sprechen.js';

export const TEST = {
  id: 'German-B1-alimun', language: 'German', level: 'B1', format: 'alimun', review: 'draft',
  examiner: 'Puck',
  papers: [lesen, sprache, hoeren, schreiben, sprechen],
};
