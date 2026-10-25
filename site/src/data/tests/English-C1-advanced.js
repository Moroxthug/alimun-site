// Practice test in the format of C1 Advanced (docs/TESTS.md). Every text, recording script, question and model
// answer is written by Alimun; nothing is copied or adapted from official papers. Draft for native-teacher review.
import { PAPER as reading } from './English-C1-advanced/reading.js';
import { PAPER as writing } from './English-C1-advanced/writing.js';
import { PAPER as listening } from './English-C1-advanced/listening.js';
import { PAPER as speaking } from './English-C1-advanced/speaking.js';

export const TEST = {
  id: 'English-C1-advanced', language: 'English', level: 'C1', format: 'advanced', review: 'draft',
  examiner: 'Charon',
  papers: [reading, writing, listening, speaking],
};
