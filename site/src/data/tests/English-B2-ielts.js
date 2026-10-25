// Practice test in the format of IELTS Academic, English B2 (docs/TESTS.md). Written by Alimun; not official material.
// Draft for native-teacher review.
import { PAPER as listening } from './English-B2-ielts/listening.js';
import { PAPER as reading } from './English-B2-ielts/reading.js';
import { PAPER as writing } from './English-B2-ielts/writing.js';
import { PAPER as speaking } from './English-B2-ielts/speaking.js';

export const TEST = {
  id: 'English-B2-ielts', language: 'English', level: 'B2', format: 'ielts', review: 'draft',
  examiner: 'Sulafat',
  papers: [listening, reading, writing, speaking],
};
