// Alimun test, English A2: Alimun's own end-of-level test (docs/TESTS.md). Draft for native-teacher review.
// Topics follow the English A2 book: routines, the past, food and cafés, homes and towns, plans, health, travel, experiences.
import { PAPER as reading } from './English-A2-alimun/reading.js';
import { PAPER as language } from './English-A2-alimun/language.js';
import { PAPER as listening } from './English-A2-alimun/listening.js';
import { PAPER as writing } from './English-A2-alimun/writing.js';
import { PAPER as speaking } from './English-A2-alimun/speaking.js';

export const TEST = {
  id: 'English-A2-alimun', language: 'English', level: 'A2', format: 'alimun', review: 'draft',
  examiner: 'Sulafat',
  papers: [reading, language, listening, writing, speaking],
};
