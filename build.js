const fs = require('fs');
const path = require('path');
const { localizePage } = require('./scripts/localize-page');

// 1. Load the translations dictionary
const translationsPath = path.join(__dirname, 'js', 'translations.js');
if (!fs.existsSync(translationsPath)) {
  console.error("Error: Translations file not found at " + translationsPath);
  process.exit(1);
}

const translationsCode = fs.readFileSync(translationsPath, 'utf8');
const sandboxWindow = {};
// Evaluate the translations code to load window.ALIMUN_TRANSLATIONS
try {
  global.window = sandboxWindow;
  eval(translationsCode);
} catch (e) {
  console.error("Error evaluating translations.js:", e);
  process.exit(1);
}

const translations = sandboxWindow.ALIMUN_TRANSLATIONS;

// Translated <title> / description per page (scripts/meta-i18n.json); 'ma' is French.
const META_I18N = JSON.parse(fs.readFileSync(path.join(__dirname, 'scripts', 'meta-i18n.json'), 'utf8'));
const META_LANG = { ma: 'fr' };
if (!translations) {
  console.error("Error: window.ALIMUN_TRANSLATIONS is not defined.");
  process.exit(1);
}

// 1b. Per-language translation files that pages load (js/i18n/<lang>.js and <lang>.app.js)
require('./scripts/split-translations')(__dirname, translations);

// 2. Identify all languages to compile (excluding English since it is served at the root)
const languages = Object.keys(translations).filter(lang => lang !== 'en');
console.log("Languages to compile:", languages);

// 3. Scan the root directory for HTML templates
const rootFiles = fs.readdirSync(__dirname);
const htmlTemplates = rootFiles.filter(file => {
  const fullPath = path.join(__dirname, file);
  return fs.statSync(fullPath).isFile() && file.endsWith('.html');
});
console.log("HTML templates found in root:", htmlTemplates);

// 4. Compile templates for each language
languages.forEach(lang => {
  console.log(`\n--- Compiling language: ${lang.toUpperCase()} ---`);
  
  // Create subdirectory
  const langDir = path.join(__dirname, lang);
  if (!fs.existsSync(langDir)) {
    fs.mkdirSync(langDir, { recursive: true });
  }
  
  const langDict = translations[lang] || {};
  
  htmlTemplates.forEach(templateFile => {
    // Hand-maintained Italian pages (manual copy + SEO cross-links) — never regenerate.
    if (lang === 'it' && ['index.html', 'careers.html', 'careers-teachers-section.html', 'services.html'].includes(templateFile)) {
      console.log(`Skipping manual file for Italian: ${templateFile}`);
      return;
    }
    console.log(`Compiling: ${templateFile} -> ${lang}/${templateFile}`);
    
    const htmlContent = fs.readFileSync(path.join(__dirname, templateFile), 'utf8');
    const html = localizePage(htmlContent, { lang, templateFile, langDict, META_I18N, META_LANG });

    // Save the compiled HTML file
    const outputPath = path.join(langDir, templateFile);
    fs.writeFileSync(outputPath, html, 'utf8');
  });
});

console.log("\n🎉 STATIC SITE LOCALIZATION COMPILATION COMPLETE!");
