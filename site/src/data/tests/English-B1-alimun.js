// Alimun test, English B1: Alimun's own end-of-level test (docs/TESTS.md). Draft for native-teacher review.
// Topics follow the English B1 book: work and study, getting around, food and health, the environment, news, a new home abroad, the future.
import { PAPER as reading } from './English-B1-alimun/reading.js';
import { PAPER as language } from './English-B1-alimun/language.js';
import { PAPER as listening } from './English-B1-alimun/listening.js';
import { PAPER as writing } from './English-B1-alimun/writing.js';
import { PAPER as speaking } from './English-B1-alimun/speaking.js';

export const TEST = {
  id: 'English-B1-alimun', language: 'English', level: 'B1', format: 'alimun', review: 'draft',
  examiner: 'Orus',
  papers: [reading, language, listening, writing, speaking],
};
