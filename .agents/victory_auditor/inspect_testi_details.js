const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const workspaceDir = path.resolve(__dirname, '..', '..');
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
  
  console.log(`\n========================================`);
  console.log(`Page: ${p}`);
  console.log(`========================================`);

  $('.testi-card').each((idx, el) => {
    console.log(`  Testi Card [${idx+1}]:`);
    // Print all text nodes inside, or structured elements
    // Let's print children details
    $(el).find('*').each((cIdx, child) => {
      const tag = child.tagName;
      const text = $(child).text().trim().replace(/\s+/g, ' ');
      const className = $(child).attr('class') || '';
      if (text && !$(child).children().length) {
        console.log(`    ${tag}.${className}: "${text}"`);
      }
    });
  });
});
