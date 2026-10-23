/**
 * Turns one English page into its copy for another site language: fills the
 * data-i18n texts, sets lang/dir, loads the language's translation files,
 * translates <title> and description, points assets one folder up and makes
 * canonical/og:url self-referencing. Used by build.js (the current site) and
 * site/scripts/localize.mjs (the Astro rebuild) so both make identical pages.
 */
const cheerio = require('cheerio');

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

function localizePage(htmlContent, { lang, templateFile, langDict, META_I18N, META_LANG }) {
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

  return $.html();
}

module.exports = { localizePage };
