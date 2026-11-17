// The app's frame once signed in: the top bar, the section on screen, and the floating bottom bar with More.
// The bar at first open adapts to the learner (owner, 14 Nov 2026): Home, Book, Practice, Flashcards, or Classes
// in place of Flashcards for learners in a class. Sections are built step by step (docs/NATIVE_APP_PLAN.md).
import 'package:material_ui/material_ui.dart';
import 'package:flutter/services.dart';
import 'package:flutter_svg/flutter_svg.dart';
import '../api.dart';
import '../i18n.dart';
import '../theme.dart';
import '../ui/parts.dart';
import '../book/store.dart';
import 'book.dart';
import 'home.dart';
import 'settings.dart';

class Section {
  final String id, label, icon; final String? short, art, text, bubble; final Color tint; final String group;
  const Section(this.id, this.label, this.icon, this.group, {this.short, this.art, this.text, this.bubble, this.tint = C.tMint});
}

const kSections = [
  Section('home', 'app_nav_home', 'home', 'learn'),
  Section('book', 'app_nav_book', 'book', 'learn', short: 'app_nav_book_short', art: 'owl', tint: C.tMint),
  Section('practice', 'app_nav_practice', 'practice', 'learn', art: 'dog', tint: C.tLime, text: 'app_soon_practice_text', bubble: 'app_soon_practice_bub'),
  Section('cards', 'app_nav_cards', 'cards', 'learn', art: 'ghost', tint: C.tSun),
  Section('tutor', 'app_nav_tutor', 'tutor', 'learn', art: 'parrot', tint: C.tSun),
  Section('tests', 'app_nav_tests', 'tests', 'learn', short: 'app_nav_tests_short', art: 'dragon', tint: C.tLime, text: 'app_soon_tests_text', bubble: 'app_soon_tests_bub'),
  Section('library', 'app_nav_library', 'library', 'learn', art: 'teacup', tint: C.tMint, text: 'app_soon_library_text', bubble: 'app_soon_library_bub'),
  Section('classes', 'app_nav_classes', 'classes', 'class', art: 'mug', tint: C.tLime, text: 'app_soon_classes_text', bubble: 'app_soon_classes_bub'),
  Section('homework', 'app_nav_homework', 'homework', 'class', art: 'monster', tint: C.tCoral, text: 'app_soon_homework_text', bubble: 'app_soon_homework_bub'),
  Section('progress', 'app_nav_progress', 'progress', 'class', art: 'snail', tint: C.tCoral, text: 'app_soon_progress_text', bubble: 'app_soon_progress_bub'),
  Section('messages', 'app_nav_messages', 'messages', 'class', art: 'alien', tint: C.tMint, text: 'app_soon_messages_text', bubble: 'app_soon_messages_bub'),
  Section('settings', 'app_nav_settings', 'settings', 'account'),
];
const _groups = {'learn': 'app_nav_group_learn', 'class': 'app_nav_group_class', 'account': 'app_nav_group_account'};
Section sectionOf(String id) => kSections.firstWhere((s) => s.id == id);

class Shell extends StatefulWidget {
  final HomeData data; final Future<void> Function() onRefresh; final VoidCallback onSignOut; final Future<void> Function() onProfileChanged;
  const Shell({super.key, required this.data, required this.onRefresh, required this.onSignOut, required this.onProfileChanged});
  @override
  State<Shell> createState() => _ShellState();
}

class _ShellState extends State<Shell> with WidgetsBindingObserver {
  String _at = 'home';

  // Answers given offline go out when the app starts and each time it comes back to the front
  @override
  void initState() { super.initState(); WidgetsBinding.instance.addObserver(this); BookStore.I.start().then((_) => BookStore.I.flush()); }
  @override
  void dispose() { WidgetsBinding.instance.removeObserver(this); super.dispose(); }
  @override
  void didChangeAppLifecycleState(AppLifecycleState state) { if (state == AppLifecycleState.resumed) BookStore.I.flush(); }

  List<String> get _bar => ['home', 'book', 'practice', widget.data.inClass ? 'classes' : 'cards'];

  void _go(String id) { if (id != _at) setState(() => _at = id); }

  Future<void> _more() async {
    final id = await showModalBottomSheet<String>(context: context, isScrollControlled: true, backgroundColor: Colors.transparent, barrierColor: const Color(0x5C080808),
        builder: (ctx) => _MoreSheet(current: _at));
    if (id != null) _go(id);
  }

  Widget _body() {
    switch (_at) {
      case 'home': return HomeScreen(key: const ValueKey('home'), data: widget.data, onRefresh: widget.onRefresh, onOpen: _go);
      case 'settings': return SettingsScreen(key: const ValueKey('settings'), data: widget.data, onSignOut: widget.onSignOut, onProfileChanged: widget.onProfileChanged);
      case 'book': return BookScreen(key: const ValueKey('book'), data: widget.data);
      default: return LaterScreen(key: ValueKey(_at), section: sectionOf(_at));
    }
  }

  @override
  Widget build(BuildContext context) {
    final d = widget.data;
    final initials = d.name.trim().isEmpty ? 'A' : d.name.trim().split(RegExp(r'\s+')).map((p) => p[0]).take(2).join().toUpperCase();
    return AnnotatedRegion<SystemUiOverlayStyle>(value: SystemUiOverlayStyle.dark.copyWith(statusBarColor: Colors.transparent, systemNavigationBarColor: C.bone),
        // Back from another section goes Home first, then leaves the app
        child: PopScope(canPop: _at == 'home', onPopInvokedWithResult: (did, _) { if (!did) _go('home'); },
            child: Scaffold(extendBody: true,
                body: SafeArea(bottom: false, child: Column(children: [
                  Padding(padding: const EdgeInsets.fromLTRB(16, 8, 16, 8), child: Row(children: [
                    Pressable(onTap: () => _go('home'), child: Row(children: [
                      SvgPicture.asset('assets/art/book.svg', width: 30, height: 32), const SizedBox(width: 8),
                      SvgPicture.asset('assets/art/wordmark.svg', height: 19)])),
                    const Spacer(),
                    _Round(onTap: () => _go('book'), label: i18n.languageName(d.language), child: Art(kBuddies[d.language] ?? 'teacup', size: 30, motion: Motion.none)),
                    const SizedBox(width: 10),
                    _Round(onTap: () => _go('settings'), label: t('app_account'), color: C.mint, child: Text(initials, style: T.s(15, 700, color: C.forest, height: 1))),
                  ])),
                  Expanded(child: AnimatedSwitcher(duration: kMid, switchInCurve: kEase, switchOutCurve: kEase,
                      transitionBuilder: (child, a) => FadeTransition(opacity: a, child: SlideTransition(position: Tween(begin: const Offset(0, .025), end: Offset.zero).animate(a), child: child)),
                      layoutBuilder: (cur, prev) => Stack(alignment: Alignment.topCenter, children: [?cur]),
                      child: _body())),
                ])),
                bottomNavigationBar: _Bar(items: _bar, current: _at, onTap: _go, onMore: _more))));
  }
}

class _Round extends StatelessWidget {
  final Widget child; final VoidCallback onTap; final Color color; final String label;
  const _Round({required this.child, required this.onTap, required this.label, this.color = C.white});
  @override
  Widget build(BuildContext context) => Semantics(button: true, label: label, excludeSemantics: true, child: Pressable(onTap: onTap, scale: .92,
      child: Container(width: 44, height: 44, alignment: Alignment.center,
          decoration: BoxDecoration(color: color, shape: BoxShape.circle, boxShadow: const [BoxShadow(color: Color(0x0F080808), blurRadius: 14, offset: Offset(0, 4))]), child: child)));
}

/* ---------- The bottom bar: a forest pill, the section on screen in lime, icons that spring when chosen ---------- */
class _Bar extends StatelessWidget {
  final List<String> items; final String current; final ValueChanged<String> onTap; final VoidCallback onMore;
  const _Bar({required this.items, required this.current, required this.onTap, required this.onMore});
  @override
  Widget build(BuildContext context) => SafeArea(top: false, minimum: const EdgeInsets.only(bottom: 12), child: Padding(padding: const EdgeInsets.symmetric(horizontal: 12),
      child: Container(height: 70, padding: const EdgeInsets.symmetric(horizontal: 6),
          decoration: BoxDecoration(color: C.forest, borderRadius: BorderRadius.circular(26), boxShadow: const [BoxShadow(color: Color(0x38080808), blurRadius: 40, offset: Offset(0, 16))]),
          child: Row(children: [
            for (final id in items) Expanded(child: _BarItem(icon: sectionOf(id).icon, label: t(sectionOf(id).short ?? sectionOf(id).label), on: current == id, onTap: () => onTap(id))),
            Expanded(child: _BarItem(icon: 'more', label: t('app_nav_more'), on: !items.contains(current), onTap: onMore)),
          ]))));
}

class _BarItem extends StatelessWidget {
  final String icon, label; final bool on; final VoidCallback onTap;
  const _BarItem({required this.icon, required this.label, required this.on, required this.onTap});
  @override
  Widget build(BuildContext context) => Semantics(button: true, selected: on, label: label, excludeSemantics: true, child: Pressable(onTap: onTap, scale: .9,
      child: AnimatedContainer(duration: kMid, curve: kEase, height: 58, margin: const EdgeInsets.symmetric(horizontal: 2),
          decoration: BoxDecoration(color: on ? C.lime : Colors.transparent, borderRadius: BorderRadius.circular(20)),
          child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
            TweenAnimationBuilder<double>(key: ValueKey(on), tween: Tween(begin: on ? .7 : 1, end: on ? 1.08 : 1), duration: const Duration(milliseconds: 480), curve: kSpring,
                builder: (_, v, child) => Transform.translate(offset: Offset(0, on ? -1 : 0), child: Transform.scale(scale: v, child: child)),
                child: LineIcon(icon, size: 23, color: on ? C.forest : C.onForest)),
            const SizedBox(height: 3),
            Text(label, maxLines: 1, overflow: TextOverflow.ellipsis, style: T.s(11.5, 700, color: on ? C.forest : C.onForest, height: 1.1)),
          ]))));
}

class _MoreSheet extends StatelessWidget {
  final String current;
  const _MoreSheet({required this.current});
  @override
  Widget build(BuildContext context) => Container(
      decoration: const BoxDecoration(color: C.white, borderRadius: BorderRadius.vertical(top: Radius.circular(28))),
      padding: EdgeInsets.fromLTRB(16, 10, 16, 16 + MediaQuery.of(context).padding.bottom),
      constraints: BoxConstraints(maxHeight: MediaQuery.of(context).size.height * .86),
      child: Column(mainAxisSize: MainAxisSize.min, children: [
        Container(width: 44, height: 5, decoration: BoxDecoration(color: C.line, borderRadius: BorderRadius.circular(3))),
        const SizedBox(height: 8),
        Flexible(child: SingleChildScrollView(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          for (final (gi, g) in _groups.keys.indexed) Rise(i: gi, child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Padding(padding: const EdgeInsets.fromLTRB(14, 14, 14, 6), child: Text(t(_groups[g]!), style: T.s(13, 700, color: C.muted, height: 1.2))),
            for (final s in kSections.where((s) => s.group == g)) Semantics(button: true, selected: s.id == current, label: t(s.label), excludeSemantics: true,
                child: Pressable(scale: .98, onTap: () => Navigator.pop(context, s.id), child: Container(margin: const EdgeInsets.symmetric(vertical: 2), padding: const EdgeInsets.all(14),
                    decoration: BoxDecoration(color: s.id == current ? C.forest : Colors.transparent, borderRadius: BorderRadius.circular(R.md)),
                    child: Row(children: [
                      LineIcon(s.icon, color: s.id == current ? C.lime : C.ink), const SizedBox(width: 14),
                      Text(t(s.label), style: T.s(16, 600, color: s.id == current ? C.lime : C.ink, height: 1.2))])))),
          ])),
        ]))),
      ]));
}

/// A section that is built in a later step: its name and its character, nothing invented
class LaterScreen extends StatelessWidget {
  final Section section;
  const LaterScreen({super.key, required this.section});
  @override
  Widget build(BuildContext context) => ListView(padding: const EdgeInsets.fromLTRB(16, 8, 16, 120), children: risen([
        Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(t(section.label).toUpperCase(), style: T.h1),
          if (section.text != null) ...[const SizedBox(height: 8), Text(t(section.text!), style: T.lead)]]),
        Stage(art: section.art ?? 'owl', tint: section.tint, bubble: section.bubble == null ? null : t(section.bubble!), height: 240),
      ]));
}
