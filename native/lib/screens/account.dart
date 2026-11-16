// Signing in, creating an account and the first set-up (the same rules and texts as the website's signin, signup
// and welcome pages; au_* keys). Each step is its own screen, moving forward and back like the rest of the app.
import 'package:flutter/gestures.dart';
import 'package:material_ui/material_ui.dart';
import 'package:flutter/services.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import '../api.dart';
import '../captcha.dart';
import '../countries.dart';
import '../i18n.dart';
import '../theme.dart';
import '../ui/parts.dart';

final _email = RegExp(r'^[^\s@]+@[^\s@]+\.[^\s@]+$');
bool _strong(String pw) => pw.length >= 8 && RegExp('[a-z]').hasMatch(pw) && RegExp('[A-Z]').hasMatch(pw) && RegExp('[0-9]').hasMatch(pw);

/// The frame of an account screen: the logo, a way back, a drawing, and the card with the form
class AccountPage extends StatelessWidget {
  final String art; final Color tint; final String? bubble; final String title; final String? lead; final List<Widget> children; final bool back;
  const AccountPage({super.key, required this.art, required this.tint, this.bubble, required this.title, this.lead, required this.children, this.back = false});
  @override
  Widget build(BuildContext context) => AnnotatedRegion<SystemUiOverlayStyle>(value: SystemUiOverlayStyle.dark.copyWith(statusBarColor: Colors.transparent, systemNavigationBarColor: C.bone),
      child: Scaffold(body: SafeArea(child: Center(child: ConstrainedBox(constraints: const BoxConstraints(maxWidth: 560), child: ListView(
          padding: const EdgeInsets.fromLTRB(16, 10, 16, 28), keyboardDismissBehavior: ScrollViewKeyboardDismissBehavior.onDrag, children: [
            SizedBox(height: 44, child: Row(children: [
              if (back) Pressable(onTap: () => Navigator.maybePop(context), child: const Padding(padding: EdgeInsetsDirectional.only(end: 12), child: LineIcon('back', color: C.forest))),
              SvgPicture.asset('assets/art/book.svg', width: 30, height: 32), const SizedBox(width: 8),
              SvgPicture.asset('assets/art/wordmark.svg', height: 19)])),
            const SizedBox(height: 10),
            ...risen([
              Stage(art: art, tint: tint, bubble: bubble),
              AppCard(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(title.toUpperCase(), style: T.h1),
                if (lead != null) ...[const SizedBox(height: 8), Text(lead!, style: T.bodyMuted)],
                const SizedBox(height: 20),
                ...children])),
            ]),
          ]))))));
}

Widget _gap([double h = 14]) => SizedBox(height: h);

/* ---------- Sign in ---------- */
class SignInScreen extends StatefulWidget {
  final void Function(User user) onSignedIn;
  const SignInScreen({super.key, required this.onSignedIn});
  @override
  State<SignInScreen> createState() => _SignInState();
}

class _SignInState extends State<SignInScreen> {
  final _mail = TextEditingController(), _pw = TextEditingController();
  String _msg = ''; bool _busy = false;

  Future<void> _go() async {
    final email = _mail.text.trim(), pw = _pw.text;
    if (email.isEmpty || pw.isEmpty) return setState(() => _msg = t('au_err_fill'));
    FocusScope.of(context).unfocus();
    setState(() { _busy = true; _msg = ''; });
    try {
      final token = await captchaToken(context);
      final res = await sb.auth.signInWithPassword(email: email, password: pw, captchaToken: token);
      if (!mounted) return;
      TextInput.finishAutofillContext();
      widget.onSignedIn(res.user!);
    } on AuthException catch (e) {
      final m = e.message;
      setState(() { _busy = false; _msg = RegExp('not confirmed', caseSensitive: false).hasMatch(m) ? t('au_err_unconfirmed') : RegExp('rate|too many', caseSensitive: false).hasMatch(m) ? t('au_err_rate') : RegExp('captcha', caseSensitive: false).hasMatch(m) ? t('au_err_generic') : t('au_err_login'); });
    } catch (_) {
      if (mounted) setState(() { _busy = false; _msg = t('au_err_generic'); });
    }
  }

  @override
  Widget build(BuildContext context) => AccountPage(art: 'owl', tint: C.tMint, title: t('au_signin_title'), lead: t('au_signin_lead'), children: [
        AutofillGroup(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          TextIn(t('au_email'), _mail, email: true, enabled: !_busy, autofill: const [AutofillHints.email]),
          _gap(),
          TextIn(t('au_password'), _pw, password: true, enabled: !_busy, showLabel: t('au_show'), hideLabel: t('au_hide'), action: TextInputAction.done, onSubmitted: (_) => _go(), autofill: const [AutofillHints.password]),
        ])),
        LinkBtn(t('au_forgot'), onTap: _busy ? null : () => Navigator.push(context, MaterialPageRoute(builder: (_) => ForgotScreen(email: _mail.text.trim())))),
        Msg(_msg), _gap(18),
        Btn(t('au_signin'), icon: 'arrow', wide: true, busy: _busy, onTap: _go),
        _gap(10),
        Center(child: Wrap(alignment: WrapAlignment.center, crossAxisAlignment: WrapCrossAlignment.center, spacing: 6, children: [
          Text(t('au_no_account'), style: T.bodyMuted),
          LinkBtn(t('au_direct_title'), onTap: _busy ? null : () => Navigator.push(context, MaterialPageRoute(builder: (_) => CreateScreen(onSignedIn: widget.onSignedIn, email: _mail.text.trim()))))])),
      ]);
}

/* ---------- Forgot password ---------- */
class ForgotScreen extends StatefulWidget {
  final String email;
  const ForgotScreen({super.key, this.email = ''});
  @override
  State<ForgotScreen> createState() => _ForgotState();
}

class _ForgotState extends State<ForgotScreen> {
  late final _mail = TextEditingController(text: widget.email);
  String _msg = ''; bool _busy = false, _sent = false;
  Future<void> _go() async {
    final email = _mail.text.trim();
    if (!_email.hasMatch(email)) return setState(() => _msg = t('au_err_email'));
    FocusScope.of(context).unfocus();
    setState(() { _busy = true; _msg = ''; });
    try {
      final token = await captchaToken(context);
      final status = await askPasswordEmail(email, i18n.lang, token);
      if (!mounted) return;
      setState(() { _busy = false; if (status == 429) { _msg = t('au_err_rate'); } else if (status == 400) { _msg = t('au_err_email'); } else if (status < 200 || status >= 300) { _msg = t('au_err_generic'); } else { _sent = true; } });
    } catch (_) { if (mounted) setState(() { _busy = false; _msg = t('au_err_generic'); }); }
  }
  @override
  Widget build(BuildContext context) => _sent
      ? AccountPage(art: 'dog', tint: C.tLime, title: t('au_check_title'), back: true, children: [
          Text.rich(TextSpan(style: T.body, children: [TextSpan(text: '${t('au_reset_sent')} '), TextSpan(text: _mail.text.trim(), style: T.strong), TextSpan(text: t('au_reset_sent2'))])),
          _gap(20), Btn(t('au_back_signin'), wide: true, onTap: () => Navigator.pop(context))])
      : AccountPage(art: 'cat', tint: C.tSun, title: t('au_forgot_title'), lead: t('au_forgot_lead'), back: true, children: [
          TextIn(t('au_email'), _mail, email: true, enabled: !_busy, action: TextInputAction.done, onSubmitted: (_) => _go()),
          Msg(_msg), _gap(18), Btn(t('au_send_link'), wide: true, busy: _busy, onTap: _go)]);
}

/* ---------- Create an account ---------- */
class CreateScreen extends StatefulWidget {
  final void Function(User user) onSignedIn; final String email;
  const CreateScreen({super.key, required this.onSignedIn, this.email = ''});
  @override
  State<CreateScreen> createState() => _CreateState();
}

class _CreateState extends State<CreateScreen> {
  final _name = TextEditingController(), _pw = TextEditingController();
  late final _mail = TextEditingController(text: widget.email);
  String? _language, _level; String _country = guessCountry();
  bool _adult = false, _news = false, _busy = false; String _msg = '';

  String _err(AuthException e) {
    final m = e.message;
    if (e.code == 'weak_password' || RegExp('should contain|weak', caseSensitive: false).hasMatch(m)) return t('au_err_pw');
    if (RegExp('already', caseSensitive: false).hasMatch(m)) return t('au_err_exists');
    if (RegExp('rate|too many|seconds', caseSensitive: false).hasMatch(m)) return t('au_err_rate');
    return t('au_err_generic');
  }

  Future<void> _go() async {
    final name = _name.text.trim(), email = _mail.text.trim(), pw = _pw.text;
    String? bad;
    if (_language == null || _level == null) { bad = 'au_err_level'; }
    else if (name.isEmpty) { bad = 'au_err_name'; }
    else if (!_email.hasMatch(email)) { bad = 'au_err_email'; }
    else if (!_strong(pw)) { bad = 'au_err_pw'; }
    else if (_country.isEmpty) { bad = 'au_err_country'; }
    if (bad != null) return setState(() => _msg = t(bad!));
    FocusScope.of(context).unfocus();
    setState(() { _busy = true; _msg = ''; });
    try {
      final token = await captchaToken(context);
      final res = await sb.auth.signUp(email: email, password: pw, captchaToken: token, emailRedirectTo: '$kSite/signup.html', data: {
        'full_name': name.length > 100 ? name.substring(0, 100) : name, 'timezone': DateTime.now().timeZoneName.contains('/') ? DateTime.now().timeZoneName : null,
        'role': 'student', 'country': _country, 'ui_lang': i18n.lang,
        'onboarding': {'placement': {'language': _language, 'level': _level, 'self_reported': true, 'at': DateTime.now().toUtc().toIso8601String()}, 'intent': null},
        'marketing': {'opt_in': _adult && _news, 'age_16_plus': _adult, 'wording': 'v1'},
        'source': {'heard': null, 'heard_other': null, 'first_touch': {'app': 'android'}},
      });
      if (!mounted) return;
      final u = res.user;
      if (u != null && (u.identities?.isEmpty ?? false)) return setState(() { _busy = false; _msg = t('au_err_exists'); });
      if (res.session != null && u != null) { widget.onSignedIn(u); return; }
      setState(() => _busy = false);
      Navigator.pushReplacement(context, MaterialPageRoute(builder: (_) => CheckEmailScreen(email: email)));
    } on AuthException catch (e) {
      setState(() { _busy = false; _msg = _err(e); });
    } catch (_) { if (mounted) setState(() { _busy = false; _msg = t('au_err_generic'); }); }
  }

  @override
  Widget build(BuildContext context) => AccountPage(art: 'teacup', tint: C.tLime, title: t('au_direct_title'), back: true, children: [
        CoursePick(language: _language, level: _level, onLanguage: (v) => setState(() => _language = v), onLevel: (v) => setState(() => _level = v)),
        _gap(), TextIn(t('au_name'), _name, enabled: !_busy, autofill: const [AutofillHints.name]),
        _gap(), TextIn(t('au_email'), _mail, email: true, enabled: !_busy, autofill: const [AutofillHints.email]),
        _gap(), TextIn(t('au_password'), _pw, password: true, enabled: !_busy, showLabel: t('au_show'), hideLabel: t('au_hide'), action: TextInputAction.done, autofill: const [AutofillHints.newPassword]),
        _gap(6), Text(t('au_pw_hint'), style: T.small),
        _gap(), PickIn<String>(t('au_country'), hint: t('au_country_pick'), value: _country.isEmpty ? null : _country, options: countryOptions(i18n.code), onPick: (v) => setState(() => _country = v)),
        _gap(10),
        TickRow(t('au_age16'), value: _adult, onChanged: (v) => setState(() { _adult = v; if (!v) _news = false; })),
        TickRow(t('au_marketing'), value: _news, enabled: _adult, onChanged: (v) => setState(() => _news = v)),
        Msg(_msg), _gap(18),
        Btn(t('au_create_free'), wide: true, busy: _busy, onTap: _go),
        _gap(12), TermsNote(),
      ]);
}

/// "Language you are learning" and "Your level", chosen in the app's own sheets
class CoursePick extends StatelessWidget {
  final String? language, level; final ValueChanged<String> onLanguage, onLevel;
  const CoursePick({super.key, this.language, this.level, required this.onLanguage, required this.onLevel});
  @override
  Widget build(BuildContext context) => Column(children: [
        PickIn<String>(t('au_learn_lang'), hint: t('au_lang_pick'), value: language, options: [for (final l in kCourses) (l, i18n.languageName(l))], onPick: onLanguage),
        _gap(),
        PickIn<String>(t('au_level'), hint: t('au_level_pick'), value: level, options: [for (final l in kLevels) (l, '$l ${t('lt_name_$l')}')], onPick: onLevel),
      ]);
}

/// The terms sentence (au_terms_note) with its two links, which open the pages in the phone's browser
class TermsNote extends StatelessWidget {
  TermsNote({super.key});
  final _taps = <TapGestureRecognizer>[];
  @override
  Widget build(BuildContext context) {
    final spans = <InlineSpan>[];
    final re = RegExp(r'<a href="([^"]*)">(.*?)</a>');
    var at = 0; final s = t('au_terms_note');
    for (final m in re.allMatches(s)) {
      if (m.start > at) spans.add(TextSpan(text: s.substring(at, m.start)));
      final page = m[1]!.replaceAll(RegExp(r'^/'), '');
      final tap = TapGestureRecognizer()..onTap = () => openSite(page);
      _taps.add(tap);
      spans.add(TextSpan(text: m[2], style: T.s(14, 700, color: C.forest, height: 1.45).copyWith(decoration: TextDecoration.underline), recognizer: tap));
      at = m.end;
    }
    if (at < s.length) spans.add(TextSpan(text: s.substring(at)));
    return Text.rich(TextSpan(style: T.small, children: spans));
  }
}

const _channel = MethodChannel('alimun/phone');
/// Opens a page of alimun.com (terms, privacy) in the phone's browser; only pages of the site, by name
Future<void> openSite(String page) async {
  if (!RegExp(r'^[A-Za-z0-9._/-]*$').hasMatch(page)) return;
  try { await _channel.invokeMethod('open', {'url': '$kSite/$page'}); } catch (_) {}
}

/* ---------- Check your email ---------- */
class CheckEmailScreen extends StatefulWidget {
  final String email;
  const CheckEmailScreen({super.key, required this.email});
  @override
  State<CheckEmailScreen> createState() => _CheckEmailState();
}

class _CheckEmailState extends State<CheckEmailScreen> {
  String _msg = ''; bool _ok = false, _busy = false; int _wait = 0;
  Future<void> _resend() async {
    if (_wait > 0) return;
    setState(() { _busy = true; _msg = ''; });
    try {
      final token = await captchaToken(context);
      await sb.auth.resend(type: OtpType.signup, email: widget.email, emailRedirectTo: '$kSite/signup.html', captchaToken: token);
      if (!mounted) return;
      setState(() { _busy = false; _ok = true; _msg = t('au_resent'); _wait = 60; });
      _tick();
    } on AuthException catch (e) {
      setState(() { _busy = false; _ok = false; _msg = RegExp('rate|too many|seconds', caseSensitive: false).hasMatch(e.message) ? t('au_err_rate') : t('au_err_generic'); });
    } catch (_) { if (mounted) setState(() { _busy = false; _ok = false; _msg = t('au_err_generic'); }); }
  }
  void _tick() => Future.delayed(const Duration(seconds: 1), () {
        if (!mounted) return;
        setState(() { _wait--; _msg = _wait > 0 ? t('au_resend_wait', {'s': _wait}) : ''; });
        if (_wait > 0) _tick();
      });
  @override
  Widget build(BuildContext context) => AccountPage(art: 'parrot', tint: C.tSun, title: t('au_check_title'), children: [
        Text.rich(TextSpan(style: T.body, children: [TextSpan(text: '${t('au_check_lead')} '), TextSpan(text: widget.email, style: T.strong), TextSpan(text: '${t('au_full_stop')} ${t('au_check_lead2')}')])),
        Msg(_msg, ok: _ok), _gap(20),
        Btn(t('au_back_signin'), wide: true, onTap: () => Navigator.popUntil(context, (r) => r.isFirst)),
        _gap(10),
        Btn(t('au_resend'), ghost: true, wide: true, busy: _busy, onTap: _wait > 0 ? null : _resend),
      ]);
}

/* ---------- The first set-up: course (when not chosen yet), goal, timeframe ---------- */
class SetupScreen extends StatefulWidget {
  final User user; final VoidCallback onDone, onSignOut;
  const SetupScreen({super.key, required this.user, required this.onDone, required this.onSignOut});
  @override
  State<SetupScreen> createState() => _SetupState();
}

class _SetupState extends State<SetupScreen> {
  late final Map<String, dynamic> _meta = widget.user.userMetadata ?? {};
  Map<String, dynamic>? _placement;
  String? _language, _level, _goal, _time;
  int _step = 0; String _msg = ''; bool _busy = false;

  @override
  void initState() {
    super.initState();
    final p = (_meta['onboarding'] as Map?)?['placement'];
    if (p is Map && kCourses.contains(p['language'])) { _placement = Map<String, dynamic>.from(p); _step = 1; }
  }

  void _to(int s) => setState(() { _step = s; _msg = ''; });

  Future<void> _finish() async {
    final p = _placement;
    if (p == null || !kGoals.contains(_goal) || _time == null) return;
    setState(() { _busy = true; _msg = ''; });
    final name = (_meta['full_name'] ?? (widget.user.email ?? '').split('@').first).toString();
    final row = <String, dynamic>{
      'user_id': widget.user.id, 'full_name': name.length > 100 ? name.substring(0, 100) : name,
      'language': p['language'], 'level': kLevels.contains(p['level']) ? p['level'] : 'A1',
      'goal_track': _goal, 'goal_timeframe': _time,
      // A level chosen without the test sets the level only (as on the website's welcome page)
      'placement': p['level'] != null && p['self_reported'] != true ? p : null,
      'tier': kLive.contains(p['language']) ? 'free' : 'waitlist',
      if (_meta['timezone'] != null) 'timezone': _meta['timezone'],
    };
    try {
      try { await sb.from('student_profiles').insert(row); }
      on PostgrestException catch (e) {
        // An unknown time zone is refused by the database: keep the default instead. A row that exists is fine.
        if (e.code == '22023') { row.remove('timezone'); await sb.from('student_profiles').insert(row); }
        else if (e.code != '23505') { rethrow; }
      }
      if (mounted) widget.onDone();
    } catch (_) { if (mounted) setState(() { _busy = false; _msg = t('au_err_generic'); }); }
  }

  Widget _choice(String title, String? sub, bool on, VoidCallback tap) => Padding(padding: const EdgeInsets.only(bottom: 10), child: Semantics(button: true, selected: on, label: title, excludeSemantics: true,
      child: Pressable(scale: .98, onTap: _busy ? null : tap, child: AnimatedContainer(duration: kFast, width: double.infinity, padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 16),
          decoration: BoxDecoration(color: on ? C.lime : C.bone, borderRadius: BorderRadius.circular(R.md), border: Border.all(color: on ? C.forest : Colors.transparent, width: 2)),
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(title, style: T.strong), if (sub != null) Text(sub, style: T.small)])))));

  @override
  Widget build(BuildContext context) {
    final first = (_meta['full_name'] ?? '').toString().trim().split(RegExp(r'\s+')).first;
    final Widget page;
    if (_step == 0) {
      page = AccountPage(key: const ValueKey(0), art: 'teacup', tint: C.tLime, title: t('au_learn_lang'), children: [
        CoursePick(language: _language, level: _level, onLanguage: (v) => setState(() => _language = v), onLevel: (v) => setState(() => _level = v)),
        Msg(_msg), _gap(18),
        Btn(t('au_continue'), icon: 'arrow', wide: true, onTap: () {
          if (_language == null || _level == null) return setState(() => _msg = t('au_err_level'));
          _placement = {'language': _language, 'level': _level, 'self_reported': true, 'at': DateTime.now().toUtc().toIso8601String()};
          _to(1);
        }),
        _gap(6), Center(child: LinkBtn(t('au_signout'), onTap: widget.onSignOut))]);
    } else if (_step == 1) {
      page = AccountPage(key: const ValueKey(1), art: 'suitcase', tint: C.tMint, title: first.isEmpty ? t('au_goal_title') : t('au_hello', {'name': first}), lead: t('au_goal_lead'), children: [
        for (final g in kGoals) _choice(t('au_goal_$g'), t('au_goal_${g}_d'), _goal == g, () { setState(() => _goal = g); Future.delayed(kFast, () { if (mounted) _to(2); }); }),
        Center(child: LinkBtn(t('au_signout'), onTap: widget.onSignOut))]);
    } else {
      const keys = {'3_months': 'au_time_3', '6_months': 'au_time_6', '1_year': 'au_time_12', 'no_deadline': 'au_time_none'};
      page = AccountPage(key: const ValueKey(2), art: 'snail', tint: C.tCoral, title: t('au_time_title'), lead: t('au_time_lead'), children: [
        for (final k in kTimes) _choice(t(keys[k]!), null, _time == k, () => setState(() => _time = k)),
        Msg(_msg), _gap(8),
        Btn(t('au_continue'), icon: 'arrow', wide: true, busy: _busy, onTap: _time == null ? null : _finish),
        _gap(6), Center(child: LinkBtn(t('au_back'), onTap: _busy ? null : () => _to(1)))]);
    }
    return PopScope(canPop: _step == 0 || (_step == 1 && (_meta['onboarding'] as Map?)?['placement'] != null),
        onPopInvokedWithResult: (did, _) { if (!did && !_busy) _to(_step - 1); },
        child: AnimatedSwitcher(duration: kMid, switchInCurve: kEase, switchOutCurve: kEase,
            transitionBuilder: (child, a) => FadeTransition(opacity: a, child: SlideTransition(position: Tween(begin: const Offset(.08, 0), end: Offset.zero).animate(a), child: child)),
            child: page));
  }
}

/* ---------- A teacher or admin account ---------- */
class RoleScreen extends StatelessWidget {
  final VoidCallback onSignOut;
  const RoleScreen({super.key, required this.onSignOut});
  @override
  Widget build(BuildContext context) => AccountPage(art: 'owl', tint: C.tMint, title: t('app_ac_learners_h'), lead: t('app_ac_learners_p'), children: [
        Btn(t('au_signout'), wide: true, onTap: onSignOut)]);
}
