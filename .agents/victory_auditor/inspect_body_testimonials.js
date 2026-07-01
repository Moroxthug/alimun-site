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

  // Let's count elements matching testimonials/reviews
  // Usually they are cards or blockquotes. Let's look for rating stars or names.
  // In our previous output we saw "testimonials-grid"
  // Let's look at the children of "testimonials-grid" or elements with class "testimonial"
  console.log(`Testimonials-grid children:`);
  $('.testimonials-grid').children().each((idx, el) => {
    console.log(`  Child [${idx+1}]:`);
    console.log(`    Class: ${$(el).attr('class')}`);
    // Find author name (often in h3, h4, or strong or specific class)
    const author = $(el).find('h3, h4, strong, .testimonial-author').text().trim().replace(/\s+/g, ' ');
    const text = $(el).find('p, .testimonial-text').text().trim().replace(/\s+/g, ' ');
    console.log(`    Author: ${author}`);
    console.log(`    Text: ${text.substring(0, 100)}...`);
  });

  // Let's also look for all other reviews in the body
  console.log(`Other potential testimonial card classes:`);
  $('[class*="testimonial"], [class*="review"]').each((idx, el) => {
    // only if it has a unique class and isn't the container
    const className = $(el).attr('class') || '';
    if (className !== 'testimonials-grid' && !className.includes('section')) {
      const text = $(el).text().trim().replace(/\s+/g, ' ');
      if (text.length > 20 && text.length < 300) {
        console.log(`  - Class: ${className} | Text: ${text.substring(0, 100)}...`);
      }
    }
  });
});
