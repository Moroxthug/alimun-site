// Deleting the account (as js/app/delete-account.js on the site; Apple and Google ask for it inside store apps).
// Step 1 "Before you go": what is lost, and what the learner can do instead: cancel the plan on alimun.com and stay
// on the free plan (only with a plan paid on alimun.com; no link out of the app to the billing page), tell us on
// alimun.com/contact what went wrong. A store subscription is cancelled in the phone's store settings.
// Step 2: an optional reason, then the learner types their email address. /api/account?action=delete cancels the
// plan paid on alimun.com, deletes the account and everything it owns, and emails a confirmation. Teachers and
// admins are sent to alimun.com/contact. After "Close" the app signs out.
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:material_ui/material_ui.dart';
import '../api.dart';
import '../i18n.dart';
import '../theme.dart';
import '../ui/parts.dart';

const _reasons = ['price', 'not_using', 'other_way', 'problems', 'privacy', 'other'];

class DeleteInfo {
  final bool can, stripeSub, storeSub; final String why, email;
  const DeleteInfo({required this.can, this.why = '', required this.email, this.stripeSub = false, this.storeSub = false});
  factory DeleteInfo.from(Map j) => DeleteInfo(can: j['can'] == true, why: (j['why'] ?? '').toString(), email: (j['email'] ?? '').toString(),
      stripeSub: j['stripeSub'] == true, storeSub: j['storeSub'] == true);
}

String? _token() { try { return sb.auth.currentSession?.accessToken; } catch (_) { return null; } }

Future<DeleteInfo> deleteCheck() async {
  final r = await http.get(Uri.parse('$kSite/api/account?action=delete-check'), headers: {'Authorization': 'Bearer ${_token() ?? ''}'})
      .timeout(const Duration(seconds: 20));
  if (r.statusCode != 200) throw Exception('delete-check ${r.statusCode}');
  return DeleteInfo.from(jsonDecode(r.body) as Map);
}

/// Returns null when the account is deleted, else the server's error code
Future<String?> deleteAccount({required String confirm, String? reason, String? details, required String lang}) async {
  try {
    final r = await http.post(Uri.parse('$kSite/api/account?action=delete'),
        headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ${_token() ?? ''}'},
        body: jsonEncode({'confirm': confirm, 'reason': ?reason, 'details': ?details, 'locale': lang})).timeout(const Duration(seconds: 45));
    if (r.statusCode == 200) return null;
    try { return ((jsonDecode(r.body) as Map)['error'] ?? 'error').toString(); } catch (_) { return 'error'; }
  } catch (_) { return 'error'; }
}

class DeleteAccountScreen extends StatefulWidget {
  /// Called after the account is deleted and the learner closes the screen
  final VoidCallback onDeleted;
  /// For the pictures in test/screens_test.dart: no network
  final DeleteInfo? info; final int step;
  const DeleteAccountScreen({super.key, required this.onDeleted, this.info, this.step = 1});
  @override
  State<DeleteAccountScreen> createState() => _DeleteState();
}

class _DeleteState extends State<DeleteAccountScreen> {
  DeleteInfo? _info; bool _failed = false, _busy = false, _done = false; late int _step = widget.step;
  String? _reason; String _msg = '';
  final _details = TextEditingController(), _mail = TextEditingController();

  @override
  void initState() {
    super.initState();
    _mail.addListener(() => setState(() {}));
    if (widget.info != null) { _info = widget.info; } else { _load(); }
  }
  @override
  void dispose() { _details.dispose(); _mail.dispose(); super.dispose(); }

  Future<void> _load() async {
    setState(() { _failed = false; _info = null; });
    try { final i = await deleteCheck(); if (mounted) setState(() => _info = i); } catch (_) { if (mounted) setState(() => _failed = true); }
  }

  bool get _matches => _info != null && _info!.email.isNotEmpty && _mail.text.trim().toLowerCase() == _info!.email.trim().toLowerCase();

  Future<void> _delete() async {
    if (!_matches) return setState(() => _msg = t('app_dl_mismatch'));
    FocusScope.of(context).unfocus();
    setState(() { _busy = true; _msg = ''; });
    final d = _details.text.trim();
    final err = await deleteAccount(confirm: _mail.text.trim(), reason: _reason, details: d.isEmpty ? null : d, lang: i18n.lang);
    if (!mounted) return;
    if (err == null) return setState(() { _busy = false; _done = true; });
    setState(() { _busy = false; _msg = t(err == 'billing_failed' || err == 'billing_unavailable' ? 'app_dl_err_billing' : err == 'confirm_mismatch' ? 'app_dl_mismatch' : 'app_dl_error'); });
  }

  void _close() { Navigator.of(context).pop(); widget.onDeleted(); }

  Widget _offer(String title, String body) => Container(width: double.infinity, padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(color: C.tLime, borderRadius: BorderRadius.circular(R.md)),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text(title.toUpperCase(), style: T.h3), const SizedBox(height: 8), Text(body, style: T.body)]));

  List<Widget> _before(DeleteInfo i) => [
        Text(t('app_dl_before_h').toUpperCase(), style: T.h1), const SizedBox(height: 10),
        Text(t('app_dl_p'), style: T.lead), const SizedBox(height: 20),
        if (i.stripeSub) ...[_offer(t('app_dl_o_plan_h'), t('app_dl_o_plan_app')), const SizedBox(height: 12)],
        _offer(t('app_dl_o_talk_h'), t('app_dl_o_talk_app')),
        if (i.storeSub) ...[const SizedBox(height: 12), Container(width: double.infinity, padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(color: C.tSun, borderRadius: BorderRadius.circular(R.sm)), child: Text(t('app_dl_store'), style: T.body))],
        const SizedBox(height: 24),
        Btn(t('app_dl_keep'), wide: true, onTap: () => Navigator.of(context).pop()), const SizedBox(height: 10),
        Btn(t('app_dl_continue'), wide: true, ghost: true, onTap: () => setState(() => _step = 2)),
      ];

  List<Widget> _confirm(DeleteInfo i) => [
        Text(t('app_dl_confirm_h').toUpperCase(), style: T.h1), const SizedBox(height: 10),
        Text(t(i.stripeSub ? 'app_dl_confirm_p_sub' : 'app_dl_confirm_p'), style: T.body), const SizedBox(height: 18),
        PickIn<String>(t('app_dl_reason'), hint: t('app_dl_reason_none'), value: _reason,
            options: [('', t('app_dl_reason_none')), for (final r in _reasons) (r, t('app_dl_r_$r'))],
            onPick: (v) => setState(() => _reason = v.isEmpty ? null : v)),
        const SizedBox(height: 14),
        TextIn(t('app_dl_details'), _details, enabled: !_busy), const SizedBox(height: 14),
        TextIn(t('app_dl_type', {'email': i.email}), _mail, email: true, enabled: !_busy, action: TextInputAction.done, onSubmitted: (_) { if (_matches) _delete(); }),
        Msg(_msg), const SizedBox(height: 18),
        Btn(t('app_dl_delete'), wide: true, busy: _busy, onTap: _matches ? _delete : null), const SizedBox(height: 10),
        Btn(t('app_dl_keep'), wide: true, ghost: true, onTap: _busy ? null : () => Navigator.of(context).pop()),
      ];

  List<Widget> _blocked(DeleteInfo i) => [
        Text(t('app_dl_h').toUpperCase(), style: T.h1), const SizedBox(height: 10),
        Text(t(i.why == 'admin' ? 'app_dl_admin' : 'app_dl_teacher'), style: T.lead), const SizedBox(height: 8),
        SelectableText('alimun.com/contact', style: T.strong), const SizedBox(height: 22),
        Btn(t('app_dl_back'), wide: true, ghost: true, onTap: () => Navigator.of(context).pop()),
      ];

  List<Widget> _finished(DeleteInfo i) => [
        Text(t('app_dl_done_h').toUpperCase(), style: T.h1), const SizedBox(height: 10),
        Text(t('app_dl_done_p', {'email': i.email}), style: T.lead), const SizedBox(height: 22),
        Btn(t('app_dl_close'), wide: true, onTap: _close),
      ];

  @override
  Widget build(BuildContext context) {
    final i = _info;
    final Widget body;
    if (i == null) {
      body = Center(child: _failed
          ? Padding(padding: const EdgeInsets.all(24), child: Column(mainAxisSize: MainAxisSize.min, children: [
              Text(t('app_book_error'), style: T.body, textAlign: TextAlign.center), const SizedBox(height: 16),
              Btn(t('au_try_again'), onTap: _load)]))
          : const Loader());
    } else {
      final items = _done ? _finished(i) : !i.can ? _blocked(i) : _step == 2 ? _confirm(i) : _before(i);
      body = ListView(padding: const EdgeInsets.fromLTRB(16, 8, 16, 40), keyboardDismissBehavior: ScrollViewKeyboardDismissBehavior.onDrag,
          children: [AppCard(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: items))]);
    }
    // Once the account is gone, back leaves through Close (which signs out), not into the old dashboard
    return PopScope(canPop: !_done && !_busy, onPopInvokedWithResult: (did, _) { if (!did && _done) _close(); },
        child: Scaffold(backgroundColor: C.bone, body: SafeArea(child: Column(children: [
          if (!_done) Align(alignment: AlignmentDirectional.centerStart, child: Padding(padding: const EdgeInsets.fromLTRB(8, 4, 8, 0),
              child: LinkBtn(t('app_dl_back'), onTap: _busy ? null : () => Navigator.of(context).pop()))),
          Expanded(child: AnimatedSwitcher(duration: kMid, child: KeyedSubtree(key: ValueKey('$_done$_step${i != null}'), child: body))),
        ]))));
  }
}
