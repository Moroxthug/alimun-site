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
  if (!fs.existsSync(filePath)) {
    console.log(`\n========================================`);
    console.log(`Page: ${p} - DOES NOT EXIST`);
    console.log(`========================================`);
    return;
  }

  const html = fs.readFileSync(filePath, 'utf8');
  const $ = cheerio.load(html);
  
  console.log(`\n========================================`);
  console.log(`Page: ${p}`);
  console.log(`========================================`);

  // Extract H1
  console.log(`H1:`, $('h1').text().trim());

  // Extract Testimonials
  console.log(`--- Testimonials (Reviews in HTML) ---`);
  // Let's look for testimonials. They might be in elements with classes like "testimonial", "review", etc.
  // Or let's search for text containing quotes or student names.
  // Let's find divs containing star ratings or reviews.
  const reviews = [];
  $('*').each((_, el) => {
    const text = $(el).text().trim();
    const className = $(el).attr('class') || '';
    if (className.includes('testimonial') || className.includes('review') || className.includes('feedback')) {
      // Avoid printing duplicate nested text
      if (text && !reviews.some(r => r.text.includes(text) || text.includes(r.text))) {
        reviews.push({ class: className, text: text.substring(0, 150) + (text.length > 150 ? '...' : '') });
      }
    }
  });
  if (reviews.length > 0) {
    reviews.forEach((r, idx) => console.log(`  [${idx+1}] (${r.class}): ${r.text.replace(/\s+/g, ' ')}`));
  } else {
    console.log(`  No elements with testimonial/review/feedback class found.`);
  }

  // Schema-based reviews
  console.log(`--- Testimonials (Reviews in JSON-LD) ---`);
  $('script[type="application/ld+json"]').each((_, el) => {
    try {
      const data = JSON.parse($(el).html().trim());
      const checkReviews = (item) => {
        if (item.review) {
          const revs = Array.isArray(item.review) ? item.review : [item.review];
          revs.forEach((r, idx) => {
            console.log(`  [${idx+1}] Author: ${r.author?.name}, Rating: ${r.reviewRating?.ratingValue}, Body: ${r.reviewBody}`);
          });
        }
      };
      if (data['@graph']) {
        data['@graph'].forEach(checkReviews);
      } else {
        checkReviews(data);
      }
    } catch (e) {}
  });

  // Competitor Comparison
  console.log(`--- Competitor Comparison ---`);
  // Let's look for tables or comparison cards
  const tables = $('table');
  if (tables.length > 0) {
    tables.each((tIdx, tableEl) => {
      console.log(`  Table [${tIdx+1}]:`);
      $(tableEl).find('tr').each((rIdx, trEl) => {
        const rowText = [];
        $(trEl).find('th, td').each((_, cellEl) => {
          rowText.push($(cellEl).text().trim());
        });
        console.log(`    Row [${rIdx+1}]: ${rowText.join(' | ')}`);
      });
    });
  } else {
    // If no table element, let's search for comparison keywords in text
    console.log(`  No <table> elements. Searching for comparison text...`);
    const paragraphs = [];
    $('p, div').each((_, el) => {
      const text = $(el).text().trim();
      if ((text.includes('italki') || text.includes('Lingoda') || text.includes('Duolingo') || text.includes('Competitor')) && text.length < 500) {
        if (!paragraphs.some(p => p.includes(text) || text.includes(p))) {
          paragraphs.push(text);
        }
      }
    });
    paragraphs.forEach((pText, idx) => {
      console.log(`    [${idx+1}]: ${pText.replace(/\s+/g, ' ')}`);
    });
  }
});
