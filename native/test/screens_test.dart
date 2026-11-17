// Renders the app's screens to pictures (test/shots/*.png) at phone size, so they can be looked at without a phone:
//   flutter test --update-goldens test/screens_test.dart
import 'dart:io';
import 'package:alimun/api.dart';
import 'package:alimun/countries.dart';
import 'package:alimun/i18n.dart';
import 'package:alimun/main.dart';
import 'package:alimun/screens/account.dart';
import 'package:alimun/screens/delete_account.dart';
import 'package:alimun/screens/shell.dart';
import 'package:alimun/theme.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'package:material_ui/material_ui.dart';
import 'package:shared_preferences/shared_preferences.dart';

Future<void> _fonts() async {
  for (final f in {'Satoshi': 'assets/fonts/Satoshi-Variable.ttf', 'Coolvetica': 'assets/fonts/coolvetica-condensed-rg.otf'}.entries) {
    final l = FontLoader(f.key)..addFont(Future.value(ByteData.view(File(f.value).readAsBytesSync().buffer)));
    await l.load();
  }
}

HomeData sample({bool inClass = true}) => HomeData({
      'profile': {'id': 'p1', 'name': 'Sara Rossi', 'language': 'German', 'level': 'B1', 'tier': inClass ? 'community' : 'free', 'goal': 'professional', 'timeframe': '6_months', 'cohorts': inClass ? ['c1'] : [], 'paying': inClass},
      'nextClass': inClass ? {'id': 's1', 'at': DateTime.now().add(const Duration(hours: 3)).toUtc().toIso8601String(), 'live': false, 'language': 'German', 'level': 'B1', 'teacher': 'Jonas'} : null,
      'flashcardsDue': 12, 'homework': [{'id': 'h1', 'title': 'Write about your last weekend', 'due_date': '2026-11-20'}],
      'streak': {'days': 5, 'week': [true, true, false, true, false, false, false], 'todayIndex': 3, 'activeToday': true},
      'placement': {'level': 'B1', 'language': 'German'}, 'topics': ['Word order', 'Past tenses'],
      'tutor': {'seconds': 1500, 'next': ''},
    });

Widget frame(Widget child) => ListenableBuilder(listenable: i18n, builder: (_, _) => MaterialApp(debugShowCheckedModeBanner: false, theme: alimunTheme(), locale: i18n.flutterLocale,
    supportedLocales: const [Locale('en'), Locale('ar'), Locale('de')], localizationsDelegates: GlobalMaterialLocalizations.delegates, home: child));

void main() {
  setUpAll(() async {
    TestWidgetsFlutterBinding.ensureInitialized();
    SharedPreferences.setMockInitialValues({});
    await _fonts();
    // A stand-in for the phone's own Arabic font, which the build machine lacks
    final dejavu = File('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf');
    if (dejavu.existsSync()) {
      await (FontLoader('TestFallback')..addFont(Future.value(ByteData.view(dejavu.readAsBytesSync().buffer)))).load();
      testFontFallback = ['TestFallback'];
    }
    await i18n.start();
    await startCountries();
    await initializeDateFormatting();
  });

  Future<void> shot(WidgetTester t, String name, Widget w, {Future<void> Function()? then}) async {
    t.view.physicalSize = const Size(780, 1688);
    t.view.devicePixelRatio = 2;
    addTearDown(t.view.reset);
    await t.pumpWidget(frame(w));
    Future<void> settle() async { for (var i = 0; i < 16; i++) { await t.pump(const Duration(milliseconds: 100)); } }
    await settle();
    if (then != null) { await then(); await settle(); }
    await expectLater(find.byType(MaterialApp), matchesGoldenFile('shots/$name.png'));
    await t.pumpWidget(const SizedBox());
  }

  testWidgets('loading', (t) => shot(t, 'loading', const LoadingScreen()));
  testWidgets('sign in', (t) => shot(t, 'signin', SignInScreen(onSignedIn: (_) {})));
  testWidgets('create', (t) => shot(t, 'create', CreateScreen(onSignedIn: (_) {})));
  testWidgets('picker', (t) => shot(t, 'picker', CreateScreen(onSignedIn: (_) {}), then: () async { await t.tap(find.text(i18n.t('au_level_pick'))); }));
  testWidgets('home', (t) => shot(t, 'home', Shell(data: sample(), onRefresh: () async {}, onSignOut: () {}, onProfileChanged: () async {})));
  testWidgets('home free', (t) => shot(t, 'home-free', Shell(data: sample(inClass: false), onRefresh: () async {}, onSignOut: () {}, onProfileChanged: () async {}), then: () async {
        await t.drag(find.byType(ListView).first, const Offset(0, -900));
      }));
  testWidgets('more', (t) => shot(t, 'more', Shell(data: sample(), onRefresh: () async {}, onSignOut: () {}, onProfileChanged: () async {}), then: () async { await t.tap(find.text(i18n.t('app_nav_more'))); }));
  testWidgets('later', (t) => shot(t, 'practice', Shell(data: sample(), onRefresh: () async {}, onSignOut: () {}, onProfileChanged: () async {}), then: () async { await t.tap(find.text(i18n.t('app_nav_practice'))); }));
  const delInfo = DeleteInfo(can: true, email: 'sara@example.com', stripeSub: true);
  testWidgets('delete before', (t) => shot(t, 'delete-before', DeleteAccountScreen(onDeleted: () {}, info: delInfo)));
  testWidgets('delete confirm', (t) => shot(t, 'delete-confirm', DeleteAccountScreen(onDeleted: () {}, info: delInfo, step: 2), then: () async {
        await t.enterText(find.byType(TextField).last, 'sara@example.com');
      }));
  testWidgets('delete teacher', (t) => shot(t, 'delete-teacher', DeleteAccountScreen(onDeleted: () {}, info: const DeleteInfo(can: false, why: 'teacher', email: 'jonas@example.com'))));
  testWidgets('arabic', (t) async {
    await t.runAsync(() => i18n.choose('ar'));
    await shot(t, 'home-ar', Shell(data: sample(), onRefresh: () async {}, onSignOut: () {}, onProfileChanged: () async {}));
    await t.runAsync(() => i18n.choose('en'));
  });
}
