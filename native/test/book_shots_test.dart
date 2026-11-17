// Pictures of the Book section (test/shots/book-*.png), from real book files kept in test/fixtures:
//   flutter test --update-goldens test/book_shots_test.dart
import 'dart:convert';
import 'dart:io';
import 'package:alimun/api.dart';
import 'package:alimun/book/store.dart';
import 'package:alimun/countries.dart';
import 'package:alimun/i18n.dart';
import 'package:alimun/screens/book.dart';
import 'package:alimun/screens/shell.dart';
import 'package:alimun/theme.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'package:material_ui/material_ui.dart';
import 'package:shared_preferences/shared_preferences.dart';

Map<String, dynamic> fx(String name) => jsonDecode(File('test/fixtures/$name').readAsStringSync()) as Map<String, dynamic>;

HomeData learner({String goal = 'professional'}) => HomeData({
      'profile': {'id': 'p1', 'name': 'Sara Rossi', 'language': 'German', 'level': 'A1', 'tier': 'free', 'goal': goal, 'cohorts': [], 'paying': false},
      'flashcardsDue': 0, 'homework': [], 'streak': {'days': 2, 'week': [true, true, false, false, false, false, false], 'todayIndex': 1, 'activeToday': true}, 'tutor': {'seconds': 600, 'next': ''},
    });

Widget frame(Widget child) => ListenableBuilder(listenable: i18n, builder: (_, _) => MaterialApp(debugShowCheckedModeBanner: false, theme: alimunTheme(), locale: i18n.flutterLocale,
    supportedLocales: const [Locale('en'), Locale('ar'), Locale('de')], localizationsDelegates: GlobalMaterialLocalizations.delegates, home: child));

/// A lesson made of the given pages (lists of blocks), for a picture of each
Opened opened(Map<String, dynamic> book) => Opened(book, BookStore.I.audio['German-A1'], learner());
Map<String, dynamic> lesson(List<List> spreads, {String title = 'Im Café', String about = 'Order food and drink, and ask for the bill.'}) =>
    {'id': 'px', 'title': title, 'about': about, 'art': 'croissant', 'spreads': spreads};

void main() {
  late Map<String, dynamic> en, ar;
  late Map<String, Map> byKind;

  setUpAll(() async {
    TestWidgetsFlutterBinding.ensureInitialized();
    SharedPreferences.setMockInitialValues({});
    for (final f in {'Satoshi': 'assets/fonts/Satoshi-Variable.ttf', 'Coolvetica': 'assets/fonts/coolvetica-condensed-rg.otf'}.entries) {
      await (FontLoader(f.key)..addFont(Future.value(ByteData.view(File(f.value).readAsBytesSync().buffer)))).load();
    }
    final dejavu = File('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf');
    if (dejavu.existsSync()) {
      await (FontLoader('TestFallback')..addFont(Future.value(ByteData.view(dejavu.readAsBytesSync().buffer)))).load();
      testFontFallback = ['TestFallback'];
    }
    await i18n.start();
    await startCountries();
    await initializeDateFormatting();
    en = fx('German-A1.en.json'); ar = fx('German-A1.ar.json');
    byKind = {};
    for (final u in unitsOf(en)) { for (final p in pagesOf(u)) { for (final sp in p['spreads'] as List) { for (final b in sp as List) { if (b['t'] == 'ex') byKind.putIfAbsent('${b['kind']}', () => b as Map); } } } }
    byKind['wordform'] = {'t': 'ex', 'kind': 'wordform', 'h': 'Write the right form of the word.', 'items': [
      {'q': 'Das ist eine sehr ___ Stadt.', 'base': 'schön', 'a': ['schöne'], 'why': 'After *eine*, the adjective ends in *-e*.'}]};
    byKind['speak'] = {'t': 'ex', 'kind': 'speak', 'h': 'Say it like your tutor.', 'tutor': 'lena', 'items': [{'a': 'Guten Morgen, Frau Berg!'}, {'a': 'Ich hätte gern einen Kaffee.'}]};
  });

  setUp(() {
    final s = BookStore.I = BookStore()..started = true;
    s.index = [for (final b in fx('index.json')['books'] as List) Map<String, dynamic>.from(b as Map)];
    s.books['German-A1.en'] = en; s.books['German-A1.ar'] = ar;
    s.progress['German-A1'] = {'book:German-A1:u1:p1': const Rec(true, 90), 'book:German-A1:u1:p2': const Rec(true, 100)};
    final plan = fx('audio-German-A1.json')['items'] as Map<String, dynamic>;
    s.audio['German-A1'] = AudioPlan('German-A1', plan, {for (final v in plan.values) '${(v as List)[0]}': 1}, null);
  });

  Future<void> settle(WidgetTester t, [int ms = 1600]) async { for (var i = 0; i < ms ~/ 100; i++) { await t.pump(const Duration(milliseconds: 100)); } }

  Future<void> shot(WidgetTester t, String name, Widget w, {Future<void> Function()? then, int wait = 1600}) async {
    t.view.physicalSize = const Size(780, 1688);
    t.view.devicePixelRatio = 2;
    addTearDown(t.view.reset);
    await t.pumpWidget(frame(w));
    await settle(t, wait);
    if (then != null) { await then(); await settle(t); }
    await expectLater(find.byType(MaterialApp), matchesGoldenFile('shots/book-$name.png'));
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 2));
  }

  // The sample book with a unit test of one exercise, so a picture can show it marked
  Map<String, dynamic> shortTest() { final b = jsonDecode(jsonEncode(en)) as Map<String, dynamic>; b['units'][0]['test'] = [b['units'][0]['test'][0]]; return b; }
  Widget shell() => Shell(data: learner(), onRefresh: () async {}, onSignOut: () {}, onProfileChanged: () async {});
  Future<void> openBook(WidgetTester t) async { await t.tap(find.text(i18n.t('app_nav_book_short'))); }
  Widget one(List<String> kinds, {Map<String, dynamic>? book}) => LessonScreen(o: opened(book ?? en), unit: unitsOf(book ?? en)[2], page: lesson([[for (final k in kinds) byKind[k]!]]));

  testWidgets('cover', (t) => shot(t, 'cover', shell(), then: () => openBook(t)));
  testWidgets('cover units', (t) => shot(t, 'cover-units', shell(), then: () async { await openBook(t); await settle(t); await t.drag(find.byType(ListView).first, const Offset(0, -1150)); }));
  testWidgets('cover locked', (t) => shot(t, 'cover-locked', shell(), then: () async { await openBook(t); await settle(t); await t.drag(find.byType(ListView).first, const Offset(0, -2300)); }));
  testWidgets('unit', (t) => shot(t, 'unit', UnitScreen(o: opened(en), unit: unitsOf(en)[0])));
  testWidgets('lesson text table tip', (t) => shot(t, 'lesson-1', LessonScreen(o: opened(en), unit: unitsOf(en)[0], page: pagesOf(unitsOf(en)[0])[0])));
  testWidgets('lesson turning', (t) => shot(t, 'lesson-turning', LessonScreen(o: opened(en), unit: unitsOf(en)[0], page: pagesOf(unitsOf(en)[0])[0]), then: () async {
        final g = await t.startGesture(const Offset(330, 400));
        await g.moveBy(const Offset(-30, 0)); await t.pump(const Duration(milliseconds: 20));
        await g.moveBy(const Offset(-150, 0)); await t.pump(const Duration(milliseconds: 20));
        await expectLater(find.byType(MaterialApp), matchesGoldenFile('shots/book-lesson-turn-mid.png'));
        await g.up();
      }, wait: 800));
  testWidgets('lesson dialogue', (t) => shot(t, 'lesson-2', LessonScreen(o: opened(en), unit: unitsOf(en)[0], page: pagesOf(unitsOf(en)[0])[0]), then: () async {
        await t.tap(find.text(i18n.t('app_book_next'))); await settle(t, 9000);
        await expectLater(find.byType(MaterialApp), matchesGoldenFile('shots/book-lesson-2-top.png'));
        await t.drag(find.byType(ListView).first, const Offset(0, -520));
      }));
  testWidgets('lesson examples open', (t) => shot(t, 'lesson-examples', LessonScreen(o: opened(en), unit: unitsOf(en)[1], page: pagesOf(unitsOf(en)[1])[0]), then: () async {
        await t.drag(find.byType(ListView).first, const Offset(0, -420)); await settle(t, 400);
        await t.tap(find.text(i18n.t('app_book_why_tap')).first);
      }));
  testWidgets('lesson reading', (t) => shot(t, 'lesson-reading', LessonScreen(o: opened(en), unit: unitsOf(en)[0], page: pagesOf(unitsOf(en)[0])[3])));
  testWidgets('table quiz', (t) => shot(t, 'lesson-quiz', LessonScreen(o: opened(en), unit: unitsOf(en)[0], page: lesson([[
        {'t': 'table', 'caption': 'sein (to be)', 'explain': ['head'], 'quiz': true, 'head': ['Person', 'sein', 'Example'], 'rows': [['ich', 'bin', 'Ich bin Kenji.'], ['du', 'bist', 'Du bist nett.'], ['er, sie, es', 'ist', 'Sie ist Lehrerin.']]},
        {'t': 'table', 'caption': 'Articles in four cases', 'explain': ['head', 'col0'], 'head': ['Case', 'Masculine', 'Feminine', 'Neuter', 'Plural'],
          'rows': [['Nominative', 'der Mann', 'die Frau', 'das Kind', 'die Kinder'], ['Accusative', 'den Mann', 'die Frau', 'das Kind', 'die Kinder'], ['Dative', 'dem Mann', 'der Frau', 'dem Kind', 'den Kindern']]},
      ]])), then: () async { await t.tap(find.text(i18n.t('app_book_quiz'))); await settle(t, 300); await t.tap(find.bySemanticsLabel(i18n.t('app_book_quiz_hint')).first); }));
  testWidgets('end page', (t) => shot(t, 'lesson-end', LessonScreen(o: opened(en), unit: unitsOf(en)[0], page: lesson([[{'t': 'text', 'md': 'A short page.'}]])), then: () async { await t.tap(find.text(i18n.t('app_book_finish'))); }));

  // Every exercise kind, as it opens and after answers
  testWidgets('ex match choice', (t) => shot(t, 'ex-match', one(['match']), then: () async {
        final pairs = byKind['match']!['pairs'] as List;
        await t.tap(find.text('${pairs[0][0]}')); await settle(t, 200); await t.tap(find.text('${pairs[0][1]}')); await settle(t, 200);
        await t.tap(find.text('${pairs[1][0]}')); await settle(t, 200); await t.tap(find.text('${pairs[2][1]}'));
      }));
  testWidgets('ex choice', (t) => shot(t, 'ex-choice', one(['choice']), then: () async {
        final items = byKind['choice']!['items'] as List;
        await t.tap(find.text('${items[0]['o'][0]}').first); await settle(t, 300); await t.tap(find.text('${items[1]['o'][1]}').first);
      }));
  testWidgets('ex gap select', (t) => shot(t, 'ex-gap', one(['gap', 'select']), then: () async {
        final items = byKind['gap']!['items'] as List;
        await t.enterText(find.byType(TextField).at(0), '${items[0]['a'][0]}'); await t.enterText(find.byType(TextField).at(1), 'falsch');
        await t.tap(find.text(i18n.t('app_book_check')));
      }));
  testWidgets('ex order build', (t) => shot(t, 'ex-order', one(['order', 'build']), then: () async {
        final w = '${(byKind['order']!['items'] as List)[0]['a']}'.split(' ');
        for (final x in w) { await t.tap(find.text(x).last); await settle(t, 100); }
      }));
  testWidgets('ex sort', (t) => shot(t, 'ex-sort', one(['sort']), then: () async {
        final b = byKind['sort']!, it = (b['items'] as List)[0];
        await t.tap(find.text('${it['s']}')); await settle(t, 200); await t.tap(find.text('${(b['groups'] as List)[it['g'] as int]}').first);
        final it2 = (b['items'] as List)[1];
        await settle(t, 200); await t.tap(find.text('${it2['s']}')); await settle(t, 200); await t.tap(find.text('${(b['groups'] as List)[((it2['g'] as int) + 1) % (b['groups'] as List).length]}').first);
      }));
  testWidgets('ex conjugate tf', (t) => shot(t, 'ex-conjugate', one(['conjugate', 'tf'])));
  testWidgets('ex crossword', (t) => shot(t, 'ex-crossword', one(['crossword']), then: () async {
        final w = (byKind['crossword']!['words'] as List)[0];
        await t.enterText(find.byType(TextField).at(0), '${w['a']}'); await t.tap(find.text(i18n.t('app_book_check')));
      }));
  testWidgets('ex memory', (t) => shot(t, 'ex-memory', one(['memory']), then: () async { await t.tap(find.bySemanticsLabel(i18n.t('app_ex_card')).first); await settle(t, 600); await t.tap(find.bySemanticsLabel(i18n.t('app_ex_card')).at(1)); await settle(t, 300); }));
  testWidgets('ex search', (t) => shot(t, 'ex-search', one(['search'])));
  testWidgets('ex spot colloc', (t) => shot(t, 'ex-spot', one(['spot', 'colloc'])));
  testWidgets('ex fix transform', (t) => shot(t, 'ex-fix', one(['fix', 'transform'])));
  testWidgets('ex picture odd', (t) => shot(t, 'ex-picture', one(['picture', 'odd'])));
  testWidgets('ex label', (t) => shot(t, 'ex-label', one(['label'])));
  testWidgets('ex bank', (t) => shot(t, 'ex-bank', one(['bank', 'wordform'])));
  testWidgets('ex speak', (t) => shot(t, 'ex-speak', one(['speak'])));

  testWidgets('unit test', (t) => shot(t, 'test', TestScreen(o: opened(en), unit: unitsOf(en)[0])));
  testWidgets('unit test result', (t) => shot(t, 'test-result', TestScreen(o: opened(shortTest()), unit: unitsOf(en)[0]), then: () async {
        final items = (unitsOf(en)[0]['test'] as List)[0]['items'] as List;
        await t.drag(find.byType(ListView).first, const Offset(0, -420)); await settle(t, 300);
        for (final (i, it) in items.indexed) { await t.ensureVisible(find.text('${it['o'][i == 0 ? 1 : 0]}').first); await t.pump(); await t.tap(find.text('${it['o'][i == 0 ? 1 : 0]}').first); await t.pump(); }
        await t.scrollUntilVisible(find.text(i18n.t('app_book_test_submit')), 300, scrollable: find.byType(Scrollable).first); await t.pump();
        await expectLater(find.byType(MaterialApp), matchesGoldenFile('shots/book-test-end.png'));
        await t.tap(find.text(i18n.t('app_book_test_submit'))); await settle(t, 2500);
        await expectLater(find.byType(MaterialApp), matchesGoldenFile('shots/book-test-score.png'));
        await t.drag(find.byType(ListView).first, const Offset(0, -700));
      }));

  testWidgets('arabic explanations', (t) async {
    await t.runAsync(() => i18n.choose('ar'));
    await shot(t, 'lesson-ar', LessonScreen(o: opened(ar), unit: unitsOf(ar)[0], page: pagesOf(unitsOf(ar)[0])[0]));
    await shot(t, 'ex-ar', one(['choice'], book: ar));
    await t.runAsync(() => i18n.choose('en'));
  });
}
