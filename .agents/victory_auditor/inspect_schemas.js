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

  $('script[type="application/ld+json"]').each((index, el) => {
    try {
      const data = JSON.parse($(el).html().trim());
      const checkItems = (item) => {
        if (item['@type'] === 'Course') {
          console.log(`Course schema found!`);
          console.log(`  Name: ${item.name}`);
          console.log(`  AggregateRating:`, item.aggregateRating);
          console.log(`  Reviews (${item.review ? (Array.isArray(item.review) ? item.review.length : 1) : 0}):`);
          if (item.review) {
            const revs = Array.isArray(item.review) ? item.review : [item.review];
            revs.forEach((r, idx) => {
              console.log(`    [${idx+1}] Author: ${r.author?.name}, Rating: ${r.reviewRating?.ratingValue}, Body: "${r.reviewBody}"`);
            });
          }
        }
      };
      if (data['@graph']) {
        data['@graph'].forEach(checkItems);
      } else {
        checkItems(data);
      }
    } catch (e) {
      console.log(`Error parsing json-ld:`, e.message);
    }
  });
});
