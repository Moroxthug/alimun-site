// The app's texts in nine languages, exported from js/translations.js (native/tool/export.js). The language is
// the learner's choice in Settings, kept on the phone and applied at once; before any choice, the phone's language.
import 'dart:convert';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:intl/intl.dart';
import 'package:shared_preferences/shared_preferences.dart';

const kLangs = ['en', 'es', 'fr', 'de', 'pt', 'it', 'zh', 'ar', 'ma'];
const kLangNames = {'en': 'English', 'es': 'Español', 'fr': 'Français', 'de': 'Deutsch', 'pt': 'Português', 'it': 'Italiano', 'zh': '中文', 'ar': 'العربية', 'ma': 'Français (Maroc)'};
const _locales = {'en': 'en_GB', 'es': 'es_ES', 'fr': 'fr_FR', 'de': 'de_DE', 'pt': 'pt_PT', 'it': 'it_IT', 'zh': 'zh_CN', 'ar': 'ar', 'ma': 'fr_MA'};

class I18n extends ChangeNotifier {
  String lang = 'en';
  Map<String, dynamic> _en = {}, _cur = {};

  String get locale => _locales[lang] ?? 'en_GB';
  /// The language code for names of languages and dates (Moroccan pages are in French)
  String get code => lang == 'ma' ? 'fr' : lang;
  bool get rtl => lang == 'ar';
  Locale get flutterLocale => Locale(code);

  Future<Map<String, dynamic>> _read(String l) async => jsonDecode(await rootBundle.loadString('assets/i18n/$l.json')) as Map<String, dynamic>;

  Future<void> start() async {
    _en = await _read('en');
    String? saved;
    try { saved = (await SharedPreferences.getInstance()).getString('alimun-lang'); } catch (_) {}
    final device = WidgetsBinding.instance.platformDispatcher.locale.languageCode;
    await _use(kLangs.contains(saved) ? saved! : kLangs.contains(device) ? device : 'en');
  }

  Future<void> _use(String l) async {
    _cur = l == 'en' ? _en : await _read(l);
    lang = l;
    Intl.defaultLocale = locale;
  }

  Future<void> choose(String l) async {
    if (!kLangs.contains(l) || l == lang) return;
    await _use(l);
    notifyListeners();
    try { (await SharedPreferences.getInstance()).setString('alimun-lang', l); } catch (_) {}
  }

  String t(String key, [Map<String, Object?>? vars]) {
    var s = (_cur[key] ?? _en[key] ?? key).toString();
    if (vars != null) s = s.replaceAllMapped(RegExp(r'\{(\w+)\}'), (m) => vars[m[1]] != null ? '${vars[m[1]]}' : m[0]!);
    return s;
  }

  bool has(String key) => _cur.containsKey(key) || _en.containsKey(key);

  /// Plurals: the form for the language's plural category (key_zero, _one, _two, _few, _many), else key_other
  String tn(String key, num n) {
    String? f(String c) => has('${key}_$c') ? '${key}_$c' : null;
    final k = Intl.pluralLogic(n, locale: locale, zero: f('zero'), one: f('one'), two: f('two'), few: f('few'), many: f('many'), other: '${key}_other');
    return t(k, {'n': NumberFormat.decimalPattern(locale).format(n)});
  }

  String languageName(String english) {
    const keys = {'English': 'en', 'German': 'de', 'French': 'fr', 'Spanish': 'es', 'Italian': 'it', 'Portuguese': 'pt'};
    const names = {
      'en': {'en': 'English', 'de': 'German', 'fr': 'French', 'es': 'Spanish', 'it': 'Italian', 'pt': 'Portuguese'},
      'es': {'en': 'Inglés', 'de': 'Alemán', 'fr': 'Francés', 'es': 'Español', 'it': 'Italiano', 'pt': 'Portugués'},
      'fr': {'en': 'Anglais', 'de': 'Allemand', 'fr': 'Français', 'es': 'Espagnol', 'it': 'Italien', 'pt': 'Portugais'},
      'de': {'en': 'Englisch', 'de': 'Deutsch', 'fr': 'Französisch', 'es': 'Spanisch', 'it': 'Italienisch', 'pt': 'Portugiesisch'},
      'pt': {'en': 'Inglês', 'de': 'Alemão', 'fr': 'Francês', 'es': 'Espanhol', 'it': 'Italiano', 'pt': 'Português'},
      'it': {'en': 'Inglese', 'de': 'Tedesco', 'fr': 'Francese', 'es': 'Spagnolo', 'it': 'Italiano', 'pt': 'Portoghese'},
      'zh': {'en': '英语', 'de': '德语', 'fr': '法语', 'es': '西班牙语', 'it': '意大利语', 'pt': '葡萄牙语'},
      'ar': {'en': 'الإنجليزية', 'de': 'الألمانية', 'fr': 'الفرنسية', 'es': 'الإسبانية', 'it': 'الإيطالية', 'pt': 'البرتغالية'},
    };
    return names[code]?[keys[english]] ?? english;
  }
}

final i18n = I18n();
String t(String key, [Map<String, Object?>? vars]) => i18n.t(key, vars);
