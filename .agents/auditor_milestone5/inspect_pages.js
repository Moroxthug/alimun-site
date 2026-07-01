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
  if (!fs.existsSync(filePath)) {
    console.error(`Page not found: ${p}`);
    return;
  }
  const html = fs.readFileSync(filePath, 'utf8');
  const $ = cheerio.load(html);
  console.log(`Page: ${p}`);
  console.log(`Title: ${$('title').text()}`);
  console.log(`H1: ${$('h1').text().trim()}`);
  console.log(`Meta Desc: ${$('meta[name="description"]').attr('content')}`);
  
  // Find course structured data
  const jsonLdScripts = $('script[type="application/ld+json"]');
  console.log(`JSON-LD count: ${jsonLdScripts.length}`);
  
  jsonLdScripts.each((i, el) => {
    try {
      const data = JSON.parse($(el).html());
      if (data['@graph']) {
        const course = data['@graph'].find(item => item['@type'] === 'Course');
        if (course) {
          console.log(`  Course Name in JSON-LD: ${course.name}`);
          console.log(`  Course Provider: ${course.provider?.name}`);
        }
      }
    } catch (e) {
      console.log(`  JSON-LD Parse Error: ${e.message}`);
    }
  });

  console.log('--------------------------------------------------');
});
