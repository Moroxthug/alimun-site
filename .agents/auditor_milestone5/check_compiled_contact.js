const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const contactPath = path.join(__dirname, '..', '..', 'it', 'contact.html');
if (!fs.existsSync(contactPath)) {
  console.error("Compiled it/contact.html not found.");
  process.exit(1);
}

const html = fs.readFileSync(contactPath, 'utf8');
const $ = cheerio.load(html);

console.log("Analyzing compiled it/contact.html:");
console.log("HTML Lang:", $('html').attr('lang'));

const fields = [
  '#first_name',
  '#last_name',
  '#email-4',
  '#phone',
  '#message'
];

fields.forEach(selector => {
  const el = $(selector);
  if (el.length === 0) {
    console.log(`  Element ${selector} NOT found.`);
    return;
  }
  const label = $(`label[for="${el.attr('id')}"]`).text().trim();
  const placeholder = el.attr('placeholder');
  console.log(`  Field ${selector}:`);
  console.log(`    Label: "${label}"`);
  console.log(`    Placeholder: "${placeholder}"`);
});

const submitVal = $('input[type="submit"]').attr('value');
console.log(`  Submit Button Value: "${submitVal}"`);
