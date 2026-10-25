// Mock test in the format of telc Deutsch B1 (Zertifikat Deutsch). docs/TESTS.md.
// Every text, recording script, question and model answer is written by Alimun; not official material.
// Draft for native-teacher review.
import { PAPER as lesen } from './German-B1-telc/lesen.js';
import { PAPER as hoeren } from './German-B1-telc/hoeren.js';
import { PAPER as schreiben } from './German-B1-telc/schreiben.js';
import { PAPER as sprechen } from './German-B1-telc/sprechen.js';

export const TEST = {
  id: 'German-B1-telc', language: 'German', level: 'B1', format: 'telc', review: 'draft',
  examiner: 'Orus',
  papers: [lesen, hoeren, schreiben, sprechen],
};
