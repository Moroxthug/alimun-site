const fs = require('fs');
const path = require('path');

const translationsPath = path.join(__dirname, '..', '..', 'js', 'translations.js');
const translationsCode = fs.readFileSync(translationsPath, 'utf8');

const sandboxWindow = {};
try {
  global.window = sandboxWindow;
  eval(translationsCode);
} catch (e) {
  console.error("Error evaluating translations.js:", e);
  process.exit(1);
}

const translations = sandboxWindow.ALIMUN_TRANSLATIONS;
if (!translations) {
  console.error("Error: window.ALIMUN_TRANSLATIONS is not defined.");
  process.exit(1);
}

const contactKeys = [
  'contact_first_name',
  'contact_first_name_placeholder',
  'contact_last_name',
  'contact_last_name_placeholder',
  'contact_email',
  'contact_email_placeholder',
  'contact_phone',
  'contact_phone_placeholder',
  'contact_message',
  'contact_message_placeholder',
  'contact_submit'
];

Object.keys(translations).forEach(lang => {
  console.log(`Language: ${lang.toUpperCase()}`);
  const dict = translations[lang];
  contactKeys.forEach(key => {
    const val = dict[key];
    console.log(`  ${key}: ${val !== undefined ? JSON.stringify(val) : 'MISSING'}`);
  });
  console.log('--------------------------------------------------');
});
