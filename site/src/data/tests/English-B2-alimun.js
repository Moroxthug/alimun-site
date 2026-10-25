// Alimun test, English B2: Alimun's own end-of-level test (docs/TESTS.md). Draft for native-teacher review.
// Topics follow the English B2 book: relationships, stories, work and careers, science and technology, regrets, media, deduction, cities.
import { PAPER as reading } from './English-B2-alimun/reading.js';
import { PAPER as language } from './English-B2-alimun/language.js';
import { PAPER as listening } from './English-B2-alimun/listening.js';
import { PAPER as writing } from './English-B2-alimun/writing.js';
import { PAPER as speaking } from './English-B2-alimun/speaking.js';

export const TEST = {
  id: 'English-B2-alimun', language: 'English', level: 'B2', format: 'alimun', review: 'draft',
  examiner: 'Kore',
  papers: [reading, language, listening, writing, speaking],
};
