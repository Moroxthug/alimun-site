const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const workspaceDir = path.join(__dirname, '..', '..');
const pages = [
  'it/corsi-inglese-online.html',
  'it/corsi-tedesco-online.html',
  'it/corsi-francese-online.html',
  'it/corsi-spagnolo-online.html',
  'it/corsi-portoghese-online.html'
];

pages.forEach(p => {
  const filePath = path.join(workspaceDir, p);
  const html = fs.readFileSync(filePath, 'utf8');
  const $ = cheerio.load(html);
  console.log(`=== Page: ${p} ===`);
  
  // Get H2 titles
  const h2s = [];
  $('h2').each((i, el) => {
    h2s.push($(el).text().trim().replace(/\s+/g, ' '));
  });
  console.log('H2s:', h2s);

  // Get specific highlights
  const highlights = [];
  $('.features-card, .feature-card, .perk-card, .advantage-card').each((i, el) => {
    highlights.push($(el).text().trim().replace(/\s+/g, ' '));
  });
  console.log('Features:', highlights.slice(0, 3));
  console.log('\n');
});
