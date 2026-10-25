// Mock test in the format of telc Deutsch B2. docs/TESTS.md.
// Every text, recording script, question and model answer is written by Alimun; not official material.
// Draft for native-teacher review.
import { PAPER as lesen } from './German-B2-telc/lesen.js';
import { PAPER as hoeren } from './German-B2-telc/hoeren.js';
import { PAPER as schreiben } from './German-B2-telc/schreiben.js';
import { PAPER as sprechen } from './German-B2-telc/sprechen.js';

export const TEST = {
  id: 'German-B2-telc', language: 'German', level: 'B2', format: 'telc', review: 'draft',
  examiner: 'Kore',
  papers: [lesen, hoeren, schreiben, sprechen],
};
