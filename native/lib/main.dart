// The Alimun app (docs/NATIVE_APP_PLAN.md). Opens on the Alimun loader, then on Home as it was at the last visit
// while fresh data loads; signed out, on the app's own sign-in.
import 'dart:async';
import 'package:material_ui/material_ui.dart';
import 'package:flutter/services.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'api.dart';
import 'book/store.dart';
import 'countries.dart';
import 'i18n.dart';
import 'screens/account.dart';
import 'screens/shell.dart';
import 'theme.dart';
import 'ui/parts.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]);
  SystemChrome.setEnabledSystemUIMode(SystemUiMode.edgeToEdge);
  await Future.wait([i18n.start(), startCountries(), initializeDateFormatting(), startApi()]);
  runApp(const AlimunApp());
}

class AlimunApp extends StatelessWidget {
  const AlimunApp({super.key});
  @override
  Widget build(BuildContext context) => ListenableBuilder(listenable: i18n, builder: (_, _) => MaterialApp(
      title: 'Alimun', debugShowCheckedModeBanner: false, theme: alimunTheme(),
      locale: i18n.flutterLocale, supportedLocales: const [Locale('en'), Locale('es'), Locale('fr'), Locale('de'), Locale('pt'), Locale('it'), Locale('zh'), Locale('ar')],
      localizationsDelegates: GlobalMaterialLocalizations.delegates,
      builder: (context, child) => MediaQuery(
          // The design holds up to a third larger text; beyond that the layout breaks before it helps
          data: MediaQuery.of(context).copyWith(textScaler: MediaQuery.of(context).textScaler.clamp(minScaleFactor: .9, maxScaleFactor: 1.3)), child: child!),
      home: const Root()));
}

enum _At { loading, signin, setup, role, app, error }

class Root extends StatefulWidget {
  const Root({super.key});
  @override
  State<Root> createState() => _RootState();
}

class _RootState extends State<Root> {
  _At _at = _At.loading;
  HomeData? _data;
  User? _user;

  @override
  void initState() { super.initState(); _start(); }

  Future<void> _start() async {
    final user = sb.auth.currentUser;
    if (user == null) return _set(_At.signin);
    await _enter(user, quick: true);
  }

  void _set(_At at) { if (mounted) setState(() => _at = at); }

  /// Where a signed-in account goes: learners to Home (or the first set-up), teachers and admins to a note
  Future<void> _enter(User user, {bool quick = false}) async {
    _user = user;
    final role = roleOf(user);
    if (role == 'teacher' || role == 'admin') return _set(_At.role);
    if (quick) {
      final snap = await savedHome();
      if (snap != null && mounted) setState(() { _data = snap; _at = _At.app; });
    }
    try {
      final p = await myProfile();
      if (p == null) return _set(_At.setup);
      final d = await loadHome(p, i18n.lang);
      if (mounted) setState(() { _data = d; _at = _At.app; });
    } catch (_) {
      // No connection: Home stays as it was at the last visit; with nothing saved, say so
      if (_data == null) _set(_At.error);
    }
  }

  Future<void> _refresh() async { final u = sb.auth.currentUser; if (u != null) await _enter(u); }

  Future<void> _signOut() async {
    try { await sb.auth.signOut(); } catch (_) {}
    await forgetHome();
    BookStore.I.forget();
    if (!mounted) return;
    Navigator.of(context).popUntil((r) => r.isFirst);
    setState(() { _data = null; _user = null; _at = _At.signin; });
  }

  void _signedIn(User user) {
    Navigator.of(context).popUntil((r) => r.isFirst);
    setState(() => _at = _At.loading);
    _enter(user);
  }

  @override
  Widget build(BuildContext context) {
    final Widget page;
    switch (_at) {
      case _At.loading: page = const LoadingScreen(key: ValueKey('loading'));
      case _At.signin: page = SignInScreen(key: const ValueKey('signin'), onSignedIn: _signedIn);
      case _At.setup: page = SetupScreen(key: const ValueKey('setup'), user: _user!, onSignOut: _signOut, onDone: () { setState(() => _at = _At.loading); _enter(_user!); });
      case _At.role: page = RoleScreen(key: const ValueKey('role'), onSignOut: _signOut);
      case _At.error: page = ErrorScreen(key: const ValueKey('error'), onRetry: () { _set(_At.loading); _start(); }, onSignOut: _signOut);
      case _At.app: page = Shell(key: const ValueKey('app'), data: _data!, onRefresh: _refresh, onSignOut: _signOut, onProfileChanged: _refresh);
    }
    return AnimatedSwitcher(duration: kSlow, switchInCurve: kEase, switchOutCurve: kEase, child: page);
  }
}

class LoadingScreen extends StatelessWidget {
  const LoadingScreen({super.key});
  @override
  Widget build(BuildContext context) => Scaffold(backgroundColor: const Color(0xFFF4F2EC), body: Center(child: Column(mainAxisSize: MainAxisSize.min, children: [
        const Loader(), const SizedBox(height: 26), Text(t('au_loading'), style: T.s(16, 600, color: C.forest))])));
}

class ErrorScreen extends StatelessWidget {
  final VoidCallback onRetry, onSignOut;
  const ErrorScreen({super.key, required this.onRetry, required this.onSignOut});
  @override
  Widget build(BuildContext context) => AccountPage(art: 'cat', tint: C.tCoral, title: t('au_err_title'), lead: t('au_err_generic'), children: [
        Btn(t('au_try_again'), wide: true, onTap: onRetry), const SizedBox(height: 10), Btn(t('au_signout'), wide: true, ghost: true, onTap: onSignOut)]);
}
