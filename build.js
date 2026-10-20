const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

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

// Helper to interpolate dynamic variables in translations (e.g. {name})
function interpolateVariables($, el, text, asHtml) {
  const matches = text.match(/\{[a-zA-Z0-9_]+\}/g);
  if (!matches) return text;
  let result = text;
  matches.forEach(match => {
    const varName = match.slice(1, -1);
    const attrVal = $(el).attr(`data-i18n-var-${varName}`);
    if (attrVal !== undefined && attrVal !== null) {
      // Variables are plain text; escape so data-i18n-html never re-parses them as markup.
      const safe = asHtml ? escapeHtml(attrVal) : attrVal;
      result = result.replace(match, () => safe);
    }
  });
  return result;
}

function escapeHtml(v) {
  return String(v == null ? '' : v).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// Helper to rewrite relative paths to point to the parent directory (../)
function rewriteRelativePath(val) {
  if (!val) return val;
  val = val.trim();
  
  // Exclude absolute URLs, root-relative paths, anchors, and protocols
  if (
    val.startsWith('http://') ||
    val.startsWith('https://') ||
    val.startsWith('/') ||
    val.startsWith('#') ||
    val.startsWith('mailto:') ||
    val.startsWith('tel:') ||
    val.startsWith('javascript:')
  ) {
    return val;
  }
  
  // Exclude links to other HTML pages since they exist inside the same localized folder
  const isHtml = /\.html\b/i.test(val) || val.endsWith('.html');
  if (isHtml) {
    return val;
  }
  
  // Otherwise, prefix with '../' to reach the root level assets
  return '../' + val;
}

// Helper to rewrite relative URLs inside inline CSS url() declarations
function rewriteStyleUrls(styleVal) {
  if (!styleVal) return styleVal;
  return styleVal.replace(/url\(['"]?([^'")]+)['"]?\)/gi, (match, url) => {
    const rewritten = rewriteRelativePath(url);
    return `url('${rewritten}')`;
  });
}

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
    
    const templatePath = path.join(__dirname, templateFile);
    const htmlContent = fs.readFileSync(templatePath, 'utf8');
    const $ = cheerio.load(htmlContent);

    // Each page ships English (fallback) plus its own language: add this folder's files
    // after the English ones (paths are made relative to the folder below).
    ['', '.app'].forEach(kind => {
      const en = $(`script[src="js/i18n/en${kind}.js"]`);
      if (en.length) en.after(`<script src="js/i18n/${lang}${kind}.js" defer></script>`);
    });
    
    // Set html attributes (lang & direction). 'ma' is not a BCP 47 tag; its content is French.
    const HTML_LANG = { ma: 'fr-MA' };
    $('html').attr('lang', HTML_LANG[lang] || lang);
    if (lang === 'ar') {
      $('html').attr('dir', 'rtl');
    } else {
      $('html').attr('dir', 'ltr');
    }
    
    // Perform translations
    
    // Translate text content
    $('[data-i18n]').each((_, el) => {
      const key = $(el).attr('data-i18n');
      let val = langDict[key];
      if (val !== undefined && val !== null) {
        val = interpolateVariables($, el, val);
        $(el).text(val);
      }
    });
    
    // Translate HTML content
    $('[data-i18n-html]').each((_, el) => {
      const key = $(el).attr('data-i18n-html');
      let val = langDict[key];
      if (val !== undefined && val !== null) {
        val = interpolateVariables($, el, val, true);
        $(el).html(val);
      }
    });
    
    // Translate placeholders
    $('[data-i18n-placeholder]').each((_, el) => {
      const key = $(el).attr('data-i18n-placeholder');
      const val = langDict[key];
      if (val !== undefined && val !== null) {
        $(el).attr('placeholder', val);
      }
    });
    
    // Translate values (such as buttons inputs)
    $('[data-i18n-value]').each((_, el) => {
      const key = $(el).attr('data-i18n-value');
      const val = langDict[key];
      if (val !== undefined && val !== null) {
        $(el).attr('value', val);
      }
    });
    
    // Translate the page's <title> and description tags (search results and link previews).
    const meta = (META_I18N[META_LANG[lang] || lang] || {})[templateFile.replace(/\.html$/, '')];
    if (meta) {
      if (meta.title) {
        $('title').text(meta.title);
        $('meta[property="og:title"], meta[property="twitter:title"], meta[name="twitter:title"]').attr('content', meta.title);
      }
      if (meta.desc) {
        $('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]').attr('content', meta.desc);
      }
    }

    // Translate title tooltips
    $('[data-i18n-title]').each((_, el) => {
      const key = $(el).attr('data-i18n-title');
      const val = langDict[key];
      if (val !== undefined && val !== null) {
        $(el).attr('title', val);
      }
    });
    
    // 5. Rewrite asset paths to reference parent directory
    
    // stylesheets link
    $('link[href]').each((_, el) => {
      const href = $(el).attr('href');
      $(el).attr('href', rewriteRelativePath(href));
    });
    
    // scripts src
    $('script[src]').each((_, el) => {
      const src = $(el).attr('src');
      $(el).attr('src', rewriteRelativePath(src));
    });
    
    // images src and srcset
    $('img[src]').each((_, el) => {
      const src = $(el).attr('src');
      $(el).attr('src', rewriteRelativePath(src));
    });
    $('img[srcset]').each((_, el) => {
      const srcset = $(el).attr('srcset');
      if (srcset) {
        const rewrittenSrcset = srcset.split(',').map(srcPart => {
          const parts = srcPart.trim().split(/\s+/);
          parts[0] = rewriteRelativePath(parts[0]);
          return parts.join(' ');
        }).join(', ');
        $(el).attr('srcset', rewrittenSrcset);
      }
    });
    
    // video sources src and poster
    $('source[src]').each((_, el) => {
      const src = $(el).attr('src');
      $(el).attr('src', rewriteRelativePath(src));
    });
    $('source[srcset]').each((_, el) => {
      const srcset = $(el).attr('srcset');
      if (srcset) {
        const rewrittenSrcset = srcset.split(',').map(srcPart => {
          const parts = srcPart.trim().split(/\s+/);
          parts[0] = rewriteRelativePath(parts[0]);
          return parts.join(' ');
        }).join(', ');
        $(el).attr('srcset', rewrittenSrcset);
      }
    });
    $('video[poster]').each((_, el) => {
      const poster = $(el).attr('poster');
      $(el).attr('poster', rewriteRelativePath(poster));
    });
    $('video[src]').each((_, el) => {
      const src = $(el).attr('src');
      $(el).attr('src', rewriteRelativePath(src));
    });
    
    // audio src
    $('audio[src]').each((_, el) => {
      const src = $(el).attr('src');
      $(el).attr('src', rewriteRelativePath(src));
    });
    
    // anchors href (only if not an HTML page link, mailto, tel, absolute URL, etc.)
    $('a[href]').each((_, el) => {
      const href = $(el).attr('href');
      $(el).attr('href', rewriteRelativePath(href));
    });
    
    // form actions
    $('form[action]').each((_, el) => {
      const action = $(el).attr('action');
      $(el).attr('action', rewriteRelativePath(action));
    });
    
    // inline style url() declarations
    $('[style]').each((_, el) => {
      const style = $(el).attr('style');
      $(el).attr('style', rewriteStyleUrls(style));
    });

    // 6. Localize SEO meta: each language page must canonicalize to ITSELF,
    // not to the English root page it was compiled from (clean URLs — vercel.json cleanUrls).
    const pageName = templateFile.replace(/\.html$/, '');
    const selfUrl = `https://alimun.com/${lang}/${pageName === 'index' ? '' : pageName}`;
    $('link[rel="canonical"]').attr('href', selfUrl);
    $('meta[property="og:url"]').attr('content', selfUrl);
    $('meta[name="twitter:url"]').attr('content', selfUrl);
    const OG_LOCALES = { it: 'it_IT', es: 'es_ES', fr: 'fr_FR', de: 'de_DE', pt: 'pt_PT', zh: 'zh_CN', ar: 'ar_AR', ma: 'fr_MA' };
    if (OG_LOCALES[lang]) {
      $('meta[property="og:locale"]').attr('content', OG_LOCALES[lang]);
    }

    // Save the compiled HTML file
    const outputPath = path.join(langDir, templateFile);
    fs.writeFileSync(outputPath, $.html(), 'utf8');
  });
});

console.log("\n🎉 STATIC SITE LOCALIZATION COMPILATION COMPLETE!");
