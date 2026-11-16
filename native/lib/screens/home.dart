// Home: the greeting, the next class, the course buddy, today's plan, the streak, the focus topics and the tutor,
// from the learner's own data (the same cards and texts as the website's Home). Pull down to refresh.
import 'package:material_ui/material_ui.dart';
import 'package:intl/intl.dart';
import '../api.dart';
import '../i18n.dart';
import '../theme.dart';
import '../ui/parts.dart';

String _cap(String s) => s.isEmpty ? s : s[0].toUpperCase() + s.substring(1);

class HomeScreen extends StatelessWidget {
  final HomeData data; final Future<void> Function() onRefresh; final ValueChanged<String> onOpen;
  const HomeScreen({super.key, required this.data, required this.onRefresh, required this.onOpen});

  String _greeting() {
    final h = DateTime.now().hour;
    final g = t(h < 12 ? 'app_greet_morning' : h < 18 ? 'app_greet_afternoon' : 'app_greet_evening');
    return data.firstName.isEmpty ? g : t('app_greet_named', {'greeting': g, 'name': data.firstName});
  }

  @override
  Widget build(BuildContext context) {
    final d = data;
    final course = '${i18n.languageName(d.language)} ${d.level}'.trim();
    return RefreshIndicator(onRefresh: onRefresh, color: C.forest, backgroundColor: C.white, displacement: 24,
        child: ListView(physics: const AlwaysScrollableScrollPhysics(parent: BouncingScrollPhysics()), padding: const EdgeInsets.fromLTRB(16, 8, 16, 120), children: risen([
          Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(_greeting().toUpperCase(), style: T.h1), const SizedBox(height: 6),
            Text(_cap(DateFormat.MMMMEEEEd(i18n.locale).format(DateTime.now())), style: T.lead)]),
          _NextClass(d, course, onOpen),
          Stage(art: kBuddies[d.language] ?? 'teacup', tint: C.tSun, bubble: t('app_joke_${kBuddies[d.language] ?? 'teacup'}_${1 + DateTime.now().day % 3}'), motion: Motion.bob),
          _Today(d, onOpen),
          _StreakCard(d.streak),
          _Focus(d),
          _Tutor(d, onOpen),
        ])));
  }
}

class _NextClass extends StatelessWidget {
  final HomeData d; final String course; final ValueChanged<String> onOpen;
  const _NextClass(this.d, this.course, this.onOpen);
  @override
  Widget build(BuildContext context) {
    final c = d.nextClass;
    final small = T.small.copyWith(color: C.onForest), lead = T.s(17, 400, color: C.onForest);
    final h = T.display(34, color: C.bone);
    if (c != null) {
      final at = DateTime.parse(c['at']).toLocal(), now = DateTime.now();
      final name = t('app_home_class_name', {'course': '${i18n.languageName(c['language'] ?? '')} ${c['level'] ?? ''}'.trim()});
      final line = (c['teacher'] ?? '') != '' ? t('app_home_class_with', {'class': name, 'teacher': c['teacher']}) : name;
      final diff = at.difference(now);
      final when = c['live'] == true ? t('app_home_live_now') : diff.isNegative ? t('app_home_started')
          : diff.inMinutes < 60 ? i18n.tn('app_cl_in_min', diff.inMinutes < 1 ? 1 : diff.inMinutes) : diff.inHours < 24 ? i18n.tn('app_cl_in_h', diff.inHours) : i18n.tn('app_cl_in_days', diff.inDays);
      final far = at.difference(DateTime(now.year, now.month, now.day)).inDays >= 7;
      final day = _cap(far ? DateFormat.MMMMEEEEd(i18n.locale).format(at) : DateFormat.EEEE(i18n.locale).format(at));
      return AppCard(color: C.forest, onTap: () => onOpen('classes'), child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text(t('app_home_next'), style: small), const SizedBox(height: 10),
        Text(t('app_home_when', {'day': day, 'time': DateFormat.Hm(i18n.locale).format(at)}).toUpperCase(), style: h), const SizedBox(height: 12),
        Text(t('app_home_class_line', {'line': line, 'when': when}), style: lead)]));
    }
    final k = d.tier == 'waitlist' ? 'forming' : d.tier == 'free' ? 'free' : 'none';
    return AppCard(color: C.forest, child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text(t('app_home_next'), style: small), const SizedBox(height: 10),
        Text(t('app_home_${k}_h').toUpperCase(), style: h), const SizedBox(height: 12),
        Text(t('app_home_${k}_p', {'course': course}), style: lead)])),
      const SizedBox(width: 8),
      const Art('mug', size: 88, motion: Motion.breathe)]));
  }
}

class _Today extends StatelessWidget {
  final HomeData d; final ValueChanged<String> onOpen;
  const _Today(this.d, this.onOpen);
  Widget _row(String icon, String title, String sub, VoidCallback tap) => Semantics(button: true, label: '$title. $sub', excludeSemantics: true, child: Pressable(scale: .985, onTap: tap,
      child: Container(margin: const EdgeInsets.only(top: 10), padding: const EdgeInsets.all(14), decoration: BoxDecoration(color: C.bone, borderRadius: BorderRadius.circular(R.md)),
          child: Row(children: [
            Container(width: 44, height: 44, alignment: Alignment.center, decoration: const BoxDecoration(color: C.lime, shape: BoxShape.circle), child: LineIcon(icon, color: C.forest)),
            const SizedBox(width: 14),
            Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Text(title, style: T.strong), Text(sub, style: T.small)])),
            const LineIcon('arrow', size: 20, color: C.forest)]))));
  @override
  Widget build(BuildContext context) {
    final rows = <Widget>[];
    if (d.flashcardsDue > 0) rows.add(_row('cards', i18n.tn('app_home_cards', d.flashcardsDue), t('app_home_cards_p'), () => onOpen('cards')));
    for (final a in d.homework.take(2)) {
      final due = DateTime.tryParse('${a['due_date'] ?? ''}');
      rows.add(_row('homework', '${a['title'] ?? ''}', due == null ? t('app_home_hw_nodate') : t('app_home_hw_due', {'date': DateFormat.MMMEd(i18n.locale).format(due)}), () => onOpen('homework')));
    }
    if (d.topics.isNotEmpty) rows.add(_row('practice', t('app_home_topic_h', {'topic': d.topics.first}), t('app_home_topic_p'), () => onOpen('practice')));
    return AppCard(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Text(t('app_home_today_h').toUpperCase(), style: T.h2),
      if (rows.isEmpty) ...[const SizedBox(height: 10), Text(t('app_home_clear_h'), style: T.strong), Text(t('app_home_clear_p'), style: T.small)] else ...rows]));
  }
}

class _StreakCard extends StatelessWidget {
  final Streak s;
  const _StreakCard(this.s);
  @override
  Widget build(BuildContext context) {
    final now = DateTime.now(), monday = DateTime(now.year, now.month, now.day).subtract(Duration(days: s.todayIndex));
    final line = s.days == 0 ? 'app_home_streak_zero' : s.activeToday ? 'app_home_streak_done' : 'app_home_streak_keep';
    return AppCard(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(t('app_home_streak'), style: T.small), const SizedBox(height: 6),
          Text(i18n.tn('app_home_days', s.days).toUpperCase(), style: T.num)])),
        const Art('snail', size: 84, motion: Motion.float)]),
      const SizedBox(height: 14),
      Semantics(label: t('app_home_week'), child: Row(children: [
        for (var i = 0; i < 7; i++) Expanded(child: Padding(padding: const EdgeInsets.symmetric(horizontal: 3), child: AspectRatio(aspectRatio: 1, child: TweenAnimationBuilder<double>(
            tween: Tween(begin: .6, end: 1), duration: Duration(milliseconds: 380 + 50 * i), curve: kSpring,
            builder: (_, v, child) => Transform.scale(scale: v, child: child),
            child: Container(alignment: Alignment.center,
                decoration: BoxDecoration(color: s.week[i] ? C.forest : C.bone, shape: BoxShape.circle, border: i == s.todayIndex ? Border.all(color: C.gold, width: 2.5) : null),
                child: ExcludeSemantics(child: Text(DateFormat.E(i18n.locale).format(monday.add(Duration(days: i))).characters.first.toUpperCase(), style: T.s(13, 700, color: s.week[i] ? C.lime : C.muted, height: 1))))))))])),
      const SizedBox(height: 14),
      Text(t(line), style: T.small)]));
  }
}

class _Focus extends StatelessWidget {
  final HomeData d;
  const _Focus(this.d);
  @override
  Widget build(BuildContext context) {
    final level = d.placedLevel;
    final body = level != null && d.topics.isNotEmpty ? t('app_home_focus_p', {'level': level, 'topics': d.topics.take(3).join(', ')})
        : level != null ? t('app_home_focus_top', {'level': level}) : null;
    if (body == null) return const SizedBox.shrink();
    return AppCard(color: C.tMint, child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text(t('app_home_focus_h').toUpperCase(), style: T.h2), const SizedBox(height: 10), Text(body, style: T.body)])),
      const SizedBox(width: 8), const Art('owl', size: 80)]));
  }
}

class _Tutor extends StatelessWidget {
  final HomeData d; final ValueChanged<String> onOpen;
  const _Tutor(this.d, this.onOpen);
  @override
  Widget build(BuildContext context) => AppCard(color: C.tMint, child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(t('app_home_tu_h').toUpperCase(), style: T.h2), const SizedBox(height: 10),
            Text(t('app_home_tu_left'), style: T.small), const SizedBox(height: 6),
            Text(i18n.tn('app_cl_minutes', d.tutorSeconds ~/ 60).toUpperCase(), style: T.num)])),
          Art(kBuddies[d.language] ?? 'teacup', size: 84, motion: Motion.bob)]),
        const SizedBox(height: 12),
        Text(d.tutorNext.isNotEmpty ? t('app_home_tu_next', {'next': d.tutorNext}) : t('app_home_tu_none'), style: T.body),
        const SizedBox(height: 16),
        Btn(t('app_home_tu_go'), icon: 'arrow', small: true, onTap: () => onOpen('tutor'))]));
}
