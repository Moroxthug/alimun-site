// Practice test in the format of B2 First (docs/TESTS.md). Every text, script and model answer is original Alimun material, not official Cambridge material. Draft for native-teacher review.
import { PAPER as reading } from './English-B2-first/reading.js';
import { PAPER as writing } from './English-B2-first/writing.js';
import { PAPER as listening } from './English-B2-first/listening.js';
import { PAPER as speaking } from './English-B2-first/speaking.js';

export const TEST = {
  id: 'English-B2-first', language: 'English', level: 'B2', format: 'first', review: 'draft',
  examiner: 'Orus',
  papers: [reading, writing, listening, speaking],
};
