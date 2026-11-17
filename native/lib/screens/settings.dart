// Settings: about you (name, course, why and by when), the app's language, a new password, signing out, deleting the
// account (delete_account.dart).
// The learner changes only the columns the database lets a learner change (guard_student_profile_columns).
import 'package:material_ui/material_ui.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import '../api.dart';
import '../i18n.dart';
import '../theme.dart';
import '../ui/parts.dart';
import 'delete_account.dart';

class SettingsScreen extends StatefulWidget {
  final HomeData data; final VoidCallback onSignOut; final Future<void> Function() onProfileChanged;
  const SettingsScreen({super.key, required this.data, required this.onSignOut, required this.onProfileChanged});
  @override
  State<SettingsScreen> createState() => _SettingsState();
}

class _SettingsState extends State<SettingsScreen> {
  late final _name = TextEditingController(text: widget.data.name);
  final _pw = TextEditingController();
  late String _language = widget.data.language, _level = widget.data.level;
  late String? _goal = widget.data.profile['goal'], _time = widget.data.profile['timeframe'];
  String _msg = '', _pwMsg = ''; bool _ok = false, _pwOk = false, _busy = false, _pwBusy = false;

  Future<void> _save() async {
    final name = _name.text.trim();
    if (name.isEmpty || name.contains('<') || name.contains('>')) return setState(() { _ok = false; _msg = t('app_st_name_needed'); });
    FocusScope.of(context).unfocus();
    setState(() { _busy = true; _msg = ''; });
    try {
      await sb.from('student_profiles').update({
        'full_name': name.length > 100 ? name.substring(0, 100) : name, 'language': _language, 'level': _level,
        if (_goal != null) 'goal_track': _goal, if (_time != null) 'goal_timeframe': _time,
      }).eq('id', widget.data.id);
      await widget.onProfileChanged();
      if (mounted) setState(() { _busy = false; _ok = true; _msg = t('app_st_saved'); });
    } catch (_) { if (mounted) setState(() { _busy = false; _ok = false; _msg = t('app_st_error'); }); }
  }

  Future<void> _password() async {
    final pw = _pw.text;
    final strong = pw.length >= 8 && RegExp('[a-z]').hasMatch(pw) && RegExp('[A-Z]').hasMatch(pw) && RegExp('[0-9]').hasMatch(pw);
    if (!strong) return setState(() { _pwOk = false; _pwMsg = t('app_st_pw_short'); });
    FocusScope.of(context).unfocus();
    setState(() { _pwBusy = true; _pwMsg = ''; });
    try {
      await sb.auth.updateUser(UserAttributes(password: pw));
      _pw.clear();
      if (mounted) setState(() { _pwBusy = false; _pwOk = true; _pwMsg = t('app_st_pw_done'); });
    } catch (_) { if (mounted) setState(() { _pwBusy = false; _pwOk = false; _pwMsg = t('app_st_pw_error'); }); }
  }

  @override
  Widget build(BuildContext context) {
    const goals = {'foundations': 'app_st_goal_foundations', 'relocation': 'app_st_goal_relocation', 'professional': 'app_st_goal_professional', 'academic': 'app_st_goal_academic', 'pleasure': 'app_st_goal_pleasure'};
    const times = {'3_months': 'app_st_tf_3', '6_months': 'app_st_tf_6', '1_year': 'app_st_tf_12', 'no_deadline': 'app_st_tf_none'};
    const gap = SizedBox(height: 14);
    return ListView(padding: const EdgeInsets.fromLTRB(16, 8, 16, 120), keyboardDismissBehavior: ScrollViewKeyboardDismissBehavior.onDrag, children: risen([
      Text(t('app_nav_settings').toUpperCase(), style: T.h1),
      AppCard(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text(t('app_st_applang_h').toUpperCase(), style: T.h2), const SizedBox(height: 8),
        Text(t('app_st_applang_p'), style: T.bodyMuted), gap,
        PickIn<String>(t('app_st_applang_h'), hint: '', value: i18n.lang, options: [for (final l in kLangs) (l, kLangNames[l]!)], onPick: (l) => i18n.choose(l)),
      ])),
      AppCard(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text(t('app_st_me_h').toUpperCase(), style: T.h2), gap,
        TextIn(t('app_st_name'), _name, enabled: !_busy, action: TextInputAction.done), gap,
        Labeled(t('app_st_email'), Text(sb.auth.currentUser?.email ?? '', style: T.body)), gap,
        PickIn<String>(t('app_st_course'), hint: '', value: _language, options: [for (final l in kCourses) (l, i18n.languageName(l))], onPick: (v) => setState(() => _language = v)), gap,
        PickIn<String>(t('app_st_level'), hint: '', value: _level, options: [for (final l in kLevels) (l, '$l ${t('lt_name_$l')}')], onPick: (v) => setState(() => _level = v)),
        const SizedBox(height: 6), Text(t('app_st_course_p'), style: T.small), gap,
        PickIn<String>(t('app_st_goal'), hint: '', value: _goal, options: [for (final g in goals.entries) (g.key, t(g.value))], onPick: (v) => setState(() => _goal = v)), gap,
        PickIn<String>(t('app_st_timeframe'), hint: '', value: _time, options: [for (final g in times.entries) (g.key, t(g.value))], onPick: (v) => setState(() => _time = v)),
        Msg(_msg, ok: _ok), const SizedBox(height: 18),
        Btn(t('app_st_save'), wide: true, busy: _busy, onTap: _save),
      ])),
      AppCard(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text(t('app_st_acc_h').toUpperCase(), style: T.h2), gap,
        TextIn(t('app_st_pw'), _pw, password: true, enabled: !_pwBusy, showLabel: t('au_show'), hideLabel: t('au_hide'), action: TextInputAction.done),
        Msg(_pwMsg, ok: _pwOk), const SizedBox(height: 18),
        Btn(t('app_st_pw_save'), wide: true, ghost: true, busy: _pwBusy, onTap: _password), gap,
        Btn(t('app_st_signout'), wide: true, ghost: true, onTap: widget.onSignOut),
        const SizedBox(height: 6),
        Center(child: LinkBtn(t('app_st_delete'), onTap: () => Navigator.of(context).push(MaterialPageRoute(builder: (_) => DeleteAccountScreen(onDeleted: widget.onSignOut))))),
      ])),
    ]));
  }
}
