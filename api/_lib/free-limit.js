/**
 * The free limit (docs/APP_PLAN.md, owner's decisions of 12 Nov 2026): what a free account may use, online and
 * offline. scripts/split-material.js cuts the public files to this at deploy time; api/material.js serves the rest
 * to learners with an active plan, approved teachers and admins.
 */
const FREE = {
  bookUnits: 3,       // the first 3 units of every course book
  libraryPieces: 2,   // the first 2 texts of every library shelf, with their recordings
  practiceBlocks: 3,  // the first 3 exercise kinds of every "Every kind of exercise" set
  testPapers: 1,      // the first paper (section) of every mock test
};

module.exports = { FREE };
