// The course book (docs/NATIVE_APP_PLAN.md step 2; the website's reader is js/app/reader.js): the cover with the
// units, a unit with its lessons, a lesson whose pages are turned by swipe, and the unit test. Progress goes to the
// same rows the website writes, so both stay in step.
import 'dart:async';
import 'package:flutter/services.dart';
import 'package:intl/intl.dart' show NumberFormat;
import 'package:material_ui/material_ui.dart';
import '../api.dart';
import '../book/audio.dart';
import '../book/blocks.dart';
import '../book/engine.dart';
import '../book/exercise_view.dart';
import '../book/speak.dart';
import '../book/store.dart';
import '../book/turner.dart';
import '../i18n.dart';
import '../theme.dart';
import '../ui/parts.dart';

BookStore get _store => BookStore.I;

String _pct(num n) => NumberFormat.percentPattern(i18n.locale).format(n / 100);
String bookName(Map b) => '${i18n.languageName('${b['language']}')} ${b['level']}'.trim();
String unitTitle(Map book, Map unit) => t('app_book_unit_title', {'n': unitNo(book, unit), 'title': unit['title']});
TextDirection explainDir(Map book) => book['explainLang'] == 'ar' ? TextDirection.rtl : TextDirection.ltr;

/// A book with what belongs to it, as the screens pass it along
class Opened {
  final Map<String, dynamic> book; final AudioPlan? audio; final HomeData data;
  const Opened(this.book, this.audio, this.data);
  String get id => '${book['id']}';
  String get student => data.id;
}

Future<Opened> _open(String id, HomeData data) async {
  final s = _store;
  await s.start();
  await s.loadIndex();
  final entry = s.entry(id) ?? {'id': id, 'language': id.split('-').first};
  final r = await Future.wait<dynamic>([s.loadBook(id, s.explainCode(entry, i18n.lang)), s.loadProgress(data.id, id), s.loadAudio(id).then<AudioPlan?>((a) => a, onError: (_) => null)]);
  s.useMemory(data.id);
  return Opened(r[0] as Map<String, dynamic>, r[2] as AudioPlan?, data);
}

/* ---------- The switch between explanations in my language and in the language being learned ---------- */
class ExplainSwitch extends StatelessWidget {
  final Map book; final bool compact;
  const ExplainSwitch(this.book, {super.key, this.compact = false});
  @override
  Widget build(BuildContext context) {
    final mine = _store.mineCode(i18n.lang), target = _store.targetCode(book);
    if (mine == target) return const SizedBox();
    Widget seg(String v, String label) {
      final on = _store.explain == v;
      return Semantics(button: true, selected: on, label: label, excludeSemantics: true, child: Pressable(scale: .95, onTap: on ? null : () => _store.setExplain(v),
          child: AnimatedContainer(duration: kFast, padding: EdgeInsets.symmetric(horizontal: compact ? 11 : 14, vertical: compact ? 7 : 9),
              decoration: BoxDecoration(color: on ? C.forest : Colors.transparent, borderRadius: BorderRadius.circular(20)),
              child: Text(label, style: T.s(compact ? 13 : 14, 700, color: on ? C.lime : C.forest, height: 1.2)))));
    }
    final control = Container(padding: const EdgeInsets.all(3), decoration: BoxDecoration(color: C.white, borderRadius: BorderRadius.circular(23), border: Border.all(color: C.line, width: 1.5)),
        child: Row(mainAxisSize: MainAxisSize.min, children: [seg('mine', kLangNames[mine] ?? mine), seg('target', i18n.languageName('${book['language']}'))]));
    if (compact) return Semantics(label: t('app_book_explain'), child: control);
    return Wrap(spacing: 10, runSpacing: 6, crossAxisAlignment: WrapCrossAlignment.center, children: [Text(t('app_book_explain'), style: T.s(14, 700, color: C.muted, height: 1.2)), control]);
  }
}

class _BackRow extends StatelessWidget {
  final String label; final VoidCallback onTap; final Widget? trailing; final TextDirection? dir;
  const _BackRow(this.label, this.onTap, {this.trailing, this.dir});
  @override
  Widget build(BuildContext context) => Row(children: [
        Expanded(child: Align(alignment: AlignmentDirectional.centerStart, child: Semantics(button: true, label: label, excludeSemantics: true, child: Pressable(onTap: onTap, child: Padding(padding: const EdgeInsets.symmetric(vertical: 8),
            child: Row(mainAxisSize: MainAxisSize.min, children: [
              Container(width: 40, height: 40, alignment: Alignment.center, decoration: const BoxDecoration(color: C.white, shape: BoxShape.circle), child: const LineIcon('back', size: 20, color: C.forest)),
              const SizedBox(width: 10),
              Flexible(child: Text(label, maxLines: 1, overflow: TextOverflow.ellipsis, textDirection: dir, style: T.s(15, 700, color: C.forest, height: 1.2)))])))))),
        if (trailing != null) ...[const SizedBox(width: 8), trailing!],
      ]);
}

Widget _art(String name, [double size = 64]) => SizedBox(width: size, height: size, child: Art(name, size: size, motion: Motion.none));

/* ---------- The Book section: the cover ---------- */
class BookScreen extends StatefulWidget {
  final HomeData data;
  const BookScreen({super.key, required this.data});
  @override
  State<BookScreen> createState() => _BookScreenState();
}

class _BookScreenState extends State<BookScreen> {
  String? _other;        // a book other than the learner's own (a goal book, or one to look at)
  Opened? _o;
  bool _error = false, _none = false;
  int _load = 0;

  String get _myId => '${widget.data.language}-${widget.data.level}';
  String get _id => _other ?? _myId;

  @override
  void initState() { super.initState(); _store.addListener(_changed); _start(); }
  @override
  void dispose() { _store.removeListener(_changed); super.dispose(); }

  String _lastExplain = BookStore.I.explain;
  void _changed() {
    if (!mounted) return;
    if (_store.explain != _lastExplain) { _lastExplain = _store.explain; _start(quiet: true); } else { setState(() {}); }
  }

  Future<void> _start({bool quiet = false}) async {
    final my = ++_load;
    if (!quiet) setState(() { _o = null; _error = false; _none = false; });
    try {
      await _store.start();
      final list = await _store.loadIndex();
      if (!list.any((b) => b['id'] == _id)) { if (mounted && my == _load) setState(() => _none = true); return; }
      final o = await _open(_id, widget.data);
      if (mounted && my == _load) setState(() { _o = o; _error = false; });
    } catch (e) {
      debugPrint('[Alimun] Course book did not load: $e');
      _store.index = null;
      if (mounted && my == _load && _o == null) setState(() => _error = true);
    }
  }

  void _show(String? id) { _other = id == _myId ? null : id; _start(); }

  /// Opens a lesson, a test or a unit; "Next lesson" and "Next unit" hand back the screen to open next
  Future<void> _go(Widget screen) async {
    Object? next = screen;
    while (next is Widget && mounted) { next = await Navigator.of(context).push<Object?>(MaterialPageRoute(builder: (_) => next as Widget)); }
    if (mounted) setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    if (_error) return _ErrorView(onRetry: _start);
    if (_none) return _NoneView(data: widget.data, onOpen: _show);
    final o = _o;
    if (o == null) return Center(child: Column(mainAxisSize: MainAxisSize.min, children: [const Loader(size: 96), const SizedBox(height: 18), Text(t('app_book_loading'), style: T.s(15, 600, color: C.forest))]));
    return _Cover(o: o, mine: _other == null, onShow: _show, onGo: _go);
  }
}

class _ErrorView extends StatelessWidget {
  final VoidCallback onRetry;
  const _ErrorView({required this.onRetry});
  @override
  Widget build(BuildContext context) => ListView(padding: const EdgeInsets.fromLTRB(16, 8, 16, 120), children: risen([
        Text(t('app_nav_book').toUpperCase(), style: T.h1),
        Stage(art: 'cat', tint: C.tCoral, bubble: t('app_book_error_bub'), height: 220),
        AppCard(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Text(t('app_book_error'), style: T.body), const SizedBox(height: 16), Btn(t('app_retry'), onTap: onRetry)])),
      ]));
}

class _NoneView extends StatelessWidget {
  final HomeData data; final ValueChanged<String?> onOpen;
  const _NoneView({required this.data, required this.onOpen});
  @override
  Widget build(BuildContext context) {
    final list = (_store.index ?? const <Map<String, dynamic>>[]).where((b) => (b['written'] as num? ?? 0) > 0 && b['track'] == 'core').toList();
    final course = '${i18n.languageName(data.language)} ${data.level}'.trim();
    return ListView(padding: const EdgeInsets.fromLTRB(16, 8, 16, 120), children: risen([
      Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Text(t('app_book_none_h').toUpperCase(), style: T.h1), const SizedBox(height: 8), Text(t('app_book_none_p', {'course': course}), style: T.lead)]),
      Stage(art: 'owl', tint: C.tMint, bubble: t('app_book_none_bub'), height: 200),
      for (final b in list) AppCard(onTap: () => onOpen('${b['id']}'), child: Row(children: [
        _art(kBuddies[b['language']] ?? 'teacup', 56), const SizedBox(width: 14),
        Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Text(bookName(b).toUpperCase(), style: T.h3), const SizedBox(height: 4), Text(t('app_book_preview_p'), style: T.small)]))])),
    ], gap: 12));
  }
}

class _Cover extends StatelessWidget {
  final Opened o; final bool mine; final ValueChanged<String?> onShow; final Future<void> Function(Widget) onGo;
  const _Cover({required this.o, required this.mine, required this.onShow, required this.onGo});

  @override
  Widget build(BuildContext context) {
    final book = o.book, s = _store, w = written(book), xd = explainDir(book);
    var done = 0, total = 0;
    for (final u in w) { final sh = unitShare(s, book, u); done += sh.done; total += sh.total; }
    final stop = nextStop(s, book), isGoal = book['track'] == 'goal';
    String h, lead; Widget? btn;
    if (w.isEmpty) { h = t('app_book_none_h'); lead = t('app_book_soon_p'); }
    // The free units are finished: the rest comes with a plan (no price and no link to buy in the app)
    else if (stop == null && hasLocked(book)) { h = t('app_lock_book_h'); lead = t('app_lock_book_p'); }
    else if (stop == null) { h = t('app_book_all_h'); lead = t('app_book_all_p'); }
    else {
      h = t(done > 0 ? 'app_book_continue_h' : 'app_book_start_h');
      lead = t('app_book_next_line', {'unit': unitTitle(book, stop.unit), 'page': stop.page == null ? t('app_book_test') : stop.page!['title']});
      btn = Btn(t(done > 0 ? 'app_book_continue' : 'app_book_start'), lime: true, icon: 'arrow',
          onTap: () => onGo(stop.page == null ? TestScreen(o: o, unit: stop.unit) : LessonScreen(o: o, unit: stop.unit, page: stop.page!)));
    }
    final core = isGoal ? (s.index ?? const <Map<String, dynamic>>[]).where((x) => x['track'] == 'core' && x['language'] == book['language'] && x['level'] == book['level']).firstOrNull : null;
    final units = unitsOf(book);
    return ListView(padding: const EdgeInsets.fromLTRB(16, 8, 16, 120), children: risen([
      Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        if (core != null) _BackRow(bookName(core), () => onShow('${core['id']}'))
        else if (!mine) _BackRow(t('app_book_mine'), () => onShow(null)),
        Text((isGoal ? '${book['title']}' : bookName(book)).toUpperCase(), style: T.h1, textDirection: isGoal ? xd : null), const SizedBox(height: 6),
        Text(isGoal ? t('app_book_goal_lead', {'course': bookName(book)}) : t('app_book_lead'), style: T.lead),
        const SizedBox(height: 14),
        ExplainSwitch(book),
        _Download(o),
      ]),
      AppCard(color: C.forest, child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text(h.toUpperCase(), style: T.display(34, color: C.bone)), const SizedBox(height: 10),
        Text(lead, textDirection: stop == null ? null : xd, style: T.s(17, 400, color: C.onForest)), const SizedBox(height: 20),
        Meter(total == 0 ? 0 : done / total, onForest: true, label: t('app_book_progress')),
        if (btn != null) ...[const SizedBox(height: 20), btn],
      ])),
      Stage(art: kBuddies[book['language']] ?? 'teacup', tint: C.tSun, bubble: t(done > 0 ? 'app_book_bub_back' : 'app_book_bub_start'), height: 190, motion: Motion.bob),
      if (s.waiting > 0) Container(width: double.infinity, padding: const EdgeInsets.all(16), decoration: BoxDecoration(color: C.tSun, borderRadius: BorderRadius.circular(R.md)), child: Text(t('app_off_banner'), style: T.small.copyWith(color: C.ink))),
      if (book['review'] == 'draft') AppCard(color: C.bone, padding: const EdgeInsets.all(18), child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text(t('app_book_draft_h').toUpperCase(), style: T.h3), const SizedBox(height: 6), Text(t('app_book_draft_p'), style: T.small)])),
      if (!isGoal) ..._goalShelf(),
      Padding(padding: const EdgeInsets.only(top: 8), child: Text(t('app_book_units').toUpperCase(), style: T.h2)),
      for (final u in units) _unitCard(u, xd),
    ], gap: 14));
  }

  /// Goal books: a second book for what the learner wants to do with the language, their own goal first
  List<Widget> _goalShelf() {
    final book = o.book, my = '${o.data.profile['goal'] ?? ''}';
    final list = (_store.index ?? const <Map<String, dynamic>>[]).where((x) => x['track'] == 'goal' && x['language'] == book['language'] && x['level'] == book['level'] && (x['written'] as num? ?? 0) > 0).toList();
    list.sort((a, b) => (b['goal'] == my ? 1 : 0) - (a['goal'] == my ? 1 : 0));
    final hasMine = list.any((x) => x['goal'] == my), planned = kGoalArt.containsKey(my) && !hasMine;
    if (list.isEmpty && !planned) return const [];
    Widget card(String goal, {String? id, required String line, bool own = false}) => AppCard(color: id == null ? C.bone : C.white, onTap: id == null ? null : () => onShow(id), child: Row(children: [
          _art(kGoalArt[goal] ?? 'sun', 60), const SizedBox(width: 14),
          Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(t('app_goal_$goal').toUpperCase(), style: T.h3), const SizedBox(height: 4), Text(line, style: T.small),
            if (own) Padding(padding: const EdgeInsets.only(top: 4), child: Text(t('app_book_your_goal'), style: T.tiny.copyWith(color: C.forest)))])),
        ]));
    return [
      Padding(padding: const EdgeInsets.only(top: 8), child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text(t('app_book_second_h').toUpperCase(), style: T.h2), const SizedBox(height: 6), Text(t('app_book_second_p'), style: T.body)])),
      for (final g in list) card('${g['goal']}', id: '${g['id']}', line: bookName(g), own: g['goal'] == my),
      if (planned) card(my, line: t('app_book_writing'), own: true),
    ];
  }

  Widget _unitCard(Map<String, dynamic> u, TextDirection xd) {
    final book = o.book, title = unitTitle(book, u), goal = '${u['goal'] ?? ''}';
    final head = Text(title.toUpperCase(), style: T.h3, textDirection: xd);
    if (u['locked'] == true) {
      return AppCard(color: C.bone, child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Opacity(opacity: .55, child: _art('${u['art'] ?? 'owl'}', 56)), const SizedBox(width: 14),
        Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          head, if (goal.isNotEmpty) ...[const SizedBox(height: 6), Text(goal, style: T.small, textDirection: xd)], const SizedBox(height: 10),
          Row(children: [const LineIcon('lock', size: 16, color: C.muted), const SizedBox(width: 6), Flexible(child: Text(t('app_lock_unit'), style: T.tiny))])]))]));
    }
    if (u['planned'] == true) {
      return AppCard(color: C.bone, child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [head, const SizedBox(height: 6), Text(t('app_book_writing'), style: T.small)]));
    }
    final sh = unitShare(_store, book, u);
    final state = t(sh.done == sh.total ? 'app_book_unit_done' : sh.done > 0 ? 'app_book_unit_going' : 'app_book_unit_new');
    return AppCard(onTap: () => onGo(UnitScreen(o: o, unit: u)), child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
      _art('${u['art'] ?? 'owl'}', 56), const SizedBox(width: 14),
      Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        head, if (goal.isNotEmpty) ...[const SizedBox(height: 6), Text(goal, style: T.small, textDirection: xd)], const SizedBox(height: 12),
        Meter(sh.done / sh.total, label: t('app_book_progress')), const SizedBox(height: 6), Text(state, style: T.tiny)]))]));
  }
}

/// "Download for offline": the whole book with its recordings, kept on the phone
class _Download extends StatelessWidget {
  final Opened o;
  const _Download(this.o);
  @override
  Widget build(BuildContext context) {
    final s = _store, id = o.id, p = s.downloading[id];
    if (s.dir == null) return const SizedBox();
    final Widget row;
    if (p != null) { row = Row(mainAxisSize: MainAxisSize.min, children: [
      const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2.4, color: C.forest)), const SizedBox(width: 10),
      Text(t('app_off_getting', {'pct': (p * 100).round()}), style: T.s(14, 700, color: C.forest, height: 1.2))]); }
    else if (s.isDownloaded(id)) {
      final mb = s.downloadedBytes(id) / 1e6;
      row = Wrap(spacing: 14, crossAxisAlignment: WrapCrossAlignment.center, children: [
        Row(mainAxisSize: MainAxisSize.min, children: [const LineIcon('check', size: 18, color: C.forest), const SizedBox(width: 6),
          Text('${t('app_off_cover_saved')} · ${NumberFormat.decimalPatternDigits(locale: i18n.locale, decimalDigits: mb < 10 ? 1 : 0).format(mb)} MB', style: T.s(14, 700, color: C.forest, height: 1.2))]),
        LinkBtn(t('app_off_remove'), size: 14, onTap: () => s.removeDownload(id))]);
    } else { row = Btn(t('app_off_cover_get'), small: true, ghost: true, icon: 'cloud', onTap: () => s.download(o.book, i18n.lang)); }
    return Padding(padding: const EdgeInsets.only(top: 12), child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      row, if (s.downloadFailed.contains(id)) Padding(padding: const EdgeInsets.only(top: 6), child: Text(t('app_off_failed'), style: T.small.copyWith(color: C.bad)))]));
  }
}

/* ---------- A screen over the app's frame, with the book's own top row ---------- */
class _Page extends StatelessWidget {
  final Widget child;
  const _Page({required this.child});
  @override
  Widget build(BuildContext context) => AnnotatedRegion<SystemUiOverlayStyle>(value: SystemUiOverlayStyle.dark.copyWith(statusBarColor: Colors.transparent, systemNavigationBarColor: C.bone),
      child: Scaffold(backgroundColor: C.bone, body: SafeArea(child: child)));
}

/// Follows the explanation-language switch: gives its child the book in the language now chosen
mixin _Explained<W extends StatefulWidget> on State<W> {
  late Opened o;
  String _lang = '';
  void explainChanged() {}
  void _explainListener() async {
    final entry = _store.entry(o.id) ?? o.book, lang = _store.explainCode(entry, i18n.lang);
    if (lang == _lang) return;
    _lang = lang;
    try {
      final b = await _store.loadBook(o.id, lang);
      if (!mounted || lang != _lang) return;
      setState(() { o = Opened(b, o.audio, o.data); explainChanged(); });
    } catch (_) { /* no connection: the page stays in the language it has */ }
  }
  void startExplained(Opened first) { o = first; _lang = '${first.book['explainLang'] ?? _store.explainCode(first.book, i18n.lang)}'; _store.addListener(_explainListener); }
  void stopExplained() => _store.removeListener(_explainListener);
  Map<String, dynamic> unitNow(Map unit) => unitsOf(o.book).firstWhere((u) => u['id'] == unit['id'], orElse: () => Map<String, dynamic>.from(unit));
}

/* ---------- A unit: its lessons and its test ---------- */
class UnitScreen extends StatefulWidget {
  final Opened o; final Map<String, dynamic> unit;
  const UnitScreen({super.key, required this.o, required this.unit});
  @override
  State<UnitScreen> createState() => _UnitScreenState();
}

class _UnitScreenState extends State<UnitScreen> with _Explained {
  @override
  void initState() { super.initState(); startExplained(widget.o); }
  @override
  void dispose() { stopExplained(); super.dispose(); }

  Future<void> _go(Widget screen) async {
    final r = await Navigator.of(context).push<Object?>(MaterialPageRoute(builder: (_) => screen));
    if (!mounted) return;
    // "Next lesson" and "Next unit" close this screen's child and open the next one
    if (r is UnitScreen) { Navigator.of(context).pushReplacement(MaterialPageRoute(builder: (_) => r)); }
    else if (r is Widget) { _go(r); } else if (r == 'book') { Navigator.of(context).pop(); } else { setState(() {}); }
  }

  @override
  Widget build(BuildContext context) {
    final book = o.book, unit = unitNow(widget.unit), xd = explainDir(book), pages = pagesOf(unit), stop = nextStop(_store, book);
    final rec = _store.rec(o.id, '${unit['id']}', null);
    return _Page(child: ListView(padding: const EdgeInsets.fromLTRB(16, 4, 16, 40), children: risen([
      Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        _BackRow(book['track'] == 'goal' ? '${book['title']}' : bookName(book), () => Navigator.of(context).pop()), const SizedBox(height: 8),
        Text(unitTitle(book, unit).toUpperCase(), style: T.h1, textDirection: xd), const SizedBox(height: 6),
        Text('${unit['goal'] ?? ''}', style: T.lead, textDirection: xd), const SizedBox(height: 14),
        ExplainSwitch(book)]),
      Padding(padding: const EdgeInsets.only(top: 6), child: Text(t('app_book_pages').toUpperCase(), style: T.h2)),
      for (final p in pages) () {
        final done = _store.isDone(o.id, '${unit['id']}', '${p['id']}'), next = stop != null && stop.unit['id'] == unit['id'] && stop.page?['id'] == p['id'];
        return AppCard(color: done ? C.tLime : C.white, onTap: () => _go(LessonScreen(o: o, unit: unit, page: p)), child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Stack(clipBehavior: Clip.none, children: [
            _art('${p['art'] ?? 'owl'}', 56),
            PositionedDirectional(end: -6, bottom: -6, child: Container(width: 26, height: 26, alignment: Alignment.center,
                decoration: BoxDecoration(color: done ? C.forest : next ? C.lime : C.bone, shape: BoxShape.circle, border: Border.all(color: C.white, width: 2)),
                child: LineIcon(done ? 'check' : 'arrow', size: 14, color: done ? C.lime : C.forest)))]),
          const SizedBox(width: 16),
          Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text('${p['title']}'.toUpperCase(), style: T.h3, textDirection: xd),
            if ('${p['about'] ?? ''}'.isNotEmpty) ...[const SizedBox(height: 6), Text('${p['about']}', style: T.small, textDirection: xd)],
            if (done || next) ...[const SizedBox(height: 6), Text(t(done ? 'app_book_page_done' : 'app_book_up_next'), style: T.tiny.copyWith(color: C.forest))]]))]));
      }(),
      AppCard(color: C.tSun, onTap: () => _go(TestScreen(o: o, unit: unit)), child: Row(children: [
        _art('dragon', 72), const SizedBox(width: 14),
        Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(t('app_book_test').toUpperCase(), style: T.h2), const SizedBox(height: 6),
          Text(rec?.score != null ? t(rec!.done ? 'app_book_test_best_pass' : 'app_book_test_best', {'score': _pct(rec.score!)}) : t('app_book_test_p', {'pass': _pct(kPass)}), style: T.body)]))])),
    ], gap: 12)));
  }
}

/* ---------- A lesson: a few pages, turned one at a time ---------- */
class LessonScreen extends StatefulWidget {
  final Opened o; final Map<String, dynamic> unit, page;
  const LessonScreen({super.key, required this.o, required this.unit, required this.page});
  @override
  State<LessonScreen> createState() => _LessonState();
}

class _LessonState extends State<LessonScreen> with _Explained {
  late Map<String, dynamic> _unit, _page;
  late List<Map> _blocks;
  late List<List<int>> _spreads;
  late ExSession _ex;
  late ExUi _ui;
  late final SpeechListener _listener;
  int _at = 0, _seen = 0;
  bool _saved = false;
  String _mood = 'idle', _line = '';
  bool _pulse = false, _blocked = false;
  Timer? _blockedTimer;

  String get _key => BookStore.keyOf(o.id, '${_unit['id']}', '${_page['id']}');

  @override
  void initState() {
    super.initState();
    startExplained(widget.o);
    _listener = SpeechListener(_store.targetCode(o.book));
    _build(null);
    if (_store.isDone(o.id, '${_unit['id']}', '${_page['id']}')) _seen = _spreads.length;
  }

  void _build(ExSession? old) {
    _unit = unitNow(widget.unit);
    _page = pagesOf(_unit).firstWhere((p) => p['id'] == widget.page['id'], orElse: () => widget.page);
    _blocks = []; _spreads = [];
    for (final sp in _page['spreads'] as List? ?? const []) {
      _spreads.add([for (final b in sp as List) () { _blocks.add(b as Map); return _blocks.length - 1; }()]);
    }
    final base = '${o.id}:${_unit['id']}:${_page['id']}:';
    _ex = ExSession(_blocks, language: '${o.book['language']}', level: '${o.book['level']}', onAnswer: _afterAnswer,
        onItem: (bi, i, ok, kind) => _store.record(o.student, '$base$bi:$i', ok));
    if (old != null) { _ex.adopt(old); old.dispose(); }
    _ui = ExUi(_ex, listen: _listener.listen, stopListening: _listener.stop);
  }

  @override
  void explainChanged() { final old = _ex, oldUi = _ui; _build(old); WidgetsBinding.instance.addPostFrameCallback((_) => oldUi.dispose()); }

  @override
  void dispose() { stopExplained(); _blockedTimer?.cancel(); Sound.I.stop(); _listener.dispose(); _ui.dispose(); _ex.dispose(); super.dispose(); }

  bool _open(int si) => _spreads[si].every(_ex.done);
  bool _canGo(int si) => si <= _seen || (si > 0 && si - 1 < _spreads.length && _open(si - 1));

  void _finish() {
    if (_saved) return;
    _saved = true;
    final f = _ex.firstTally();
    _store.save(o.student, o.id, _key, done: true, score: f.total > 0 ? (f.right / f.total * 100).round() : 100);
  }

  void _go(int si) {
    if (si < 0 || si > _spreads.length || si == _at) return;
    if (si > _at && !_canGo(si)) { _saidBlocked(); return; }
    Sound.I.stop();
    FocusManager.instance.primaryFocus?.unfocus();
    setState(() {
      _seen = si > _seen ? si : _seen;
      _at = si;
      _line = ''; if (_mood != 'wow') _mood = 'idle';
      _blocked = false;
    });
    if (si == _spreads.length) { _finish(); HapticFeedback.mediumImpact(); }
  }

  void _saidBlocked() {
    HapticFeedback.selectionClick();
    setState(() => _blocked = true);
    _blockedTimer?.cancel();
    _blockedTimer = Timer(const Duration(seconds: 3), () { if (mounted) setState(() => _blocked = false); });
  }

  /// The book character reacts to each answer; right and wrong are felt in the hand
  void _afterAnswer(int bi, bool? ok) {
    if (!mounted || _at >= _spreads.length) return;
    final open = _open(_at);
    if (ok == true) { HapticFeedback.lightImpact(); } else if (ok == false) { HapticFeedback.heavyImpact(); }
    setState(() {
      if (open) { _mood = 'wow'; _line = t('app_book_coach_done'); _blocked = false; }
      else if (ok == true) { _mood = 'happy'; _line = praise(bi, _at); }
      else if (ok == false) { _mood = 'think'; _line = t('app_book_wrong'); }
      if (open && !_pulse) { _pulse = true; Timer(const Duration(milliseconds: 1200), () { if (mounted) setState(() => _pulse = false); }); }
    });
    if (_ex.allDone) _finish();
  }

  @override
  Widget build(BuildContext context) {
    final book = o.book, n = _spreads.length, end = _at >= n, open = !end && (_open(_at) || _at < _seen);
    // The pop gesture of the route would fight the page turn: back is the button, or the phone's back
    return PopScope(canPop: false, onPopInvokedWithResult: (did, _) { if (!did) Navigator.of(context).pop(); },
        child: _Page(child: Column(children: [
          Padding(padding: const EdgeInsets.fromLTRB(16, 2, 16, 6), child: _BackRow(unitTitle(book, _unit), () => Navigator.of(context).pop(), trailing: ExplainSwitch(book, compact: true), dir: explainDir(book))),
          Padding(padding: const EdgeInsets.symmetric(horizontal: 20), child: Meter(n == 0 ? 1 : (_at.clamp(0, n)) / n, label: t('app_book_progress'))),
          const SizedBox(height: 8),
          Expanded(child: PageTurner(count: n + 1, index: _at, canGo: _canGo, onChanged: _go, onBlocked: _saidBlocked,
              builder: (context, i) => i >= n ? _endPage() : ListenableBuilder(listenable: _ex, builder: (_, _) => _spread(i)))),
          Padding(padding: const EdgeInsets.fromLTRB(16, 8, 16, 10), child: Row(children: [
            Semantics(button: true, label: t('app_book_prev'), excludeSemantics: true, child: Opacity(opacity: _at == 0 ? .35 : 1, child: Pressable(scale: .9, onTap: _at == 0 ? null : () => _go(_at - 1),
                child: Container(width: 52, height: 52, alignment: Alignment.center, decoration: const BoxDecoration(color: C.white, shape: BoxShape.circle), child: const LineIcon('back', color: C.forest))))),
            Expanded(child: Padding(padding: const EdgeInsets.symmetric(horizontal: 12), child: AnimatedOpacity(opacity: _blocked && !open && !end ? 1 : 0, duration: kFast,
                child: Text(t('app_book_locked'), style: T.tiny.copyWith(color: C.ink), maxLines: 3, textAlign: TextAlign.center)))),
            if (!end) AnimatedScale(scale: _pulse ? 1.08 : 1, duration: kMid, curve: kSpring, child: Opacity(opacity: open ? 1 : .45,
                child: Btn(t(_at == n - 1 ? 'app_book_finish' : 'app_book_next'), icon: 'arrow', lime: _pulse, onTap: () => _go(_at + 1)))),
          ])),
        ])));
  }

  Widget _sheet(Widget child) => Padding(padding: const EdgeInsets.fromLTRB(12, 2, 12, 2), child: Container(
      decoration: BoxDecoration(color: C.white, borderRadius: BorderRadius.circular(R.xl), boxShadow: const [BoxShadow(color: Color(0x14080808), blurRadius: 24, offset: Offset(0, 8))]),
      clipBehavior: Clip.antiAlias, child: child));

  Widget _spread(int si) {
    final book = o.book, ids = _spreads[si], ctx = PageCtx(book, '${_unit['id']}', '${_page['id']}', o.audio);
    final onlyEx = ids.isNotEmpty && ids.every((gi) => _blocks[gi]['t'] == 'ex');
    final wow = _open(si) && onlyEx;
    return _sheet(Directionality(textDirection: explainDir(book), child: ListView(key: PageStorageKey('spread-$si'), padding: const EdgeInsets.fromLTRB(18, 22, 18, 28), children: [
      if (si == 0) Padding(padding: const EdgeInsets.only(bottom: 20), child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text('${_page['title']}'.toUpperCase(), style: T.display(40)),
          if ('${_page['about'] ?? ''}'.isNotEmpty) Padding(padding: const EdgeInsets.only(top: 8), child: Text('${_page['about']}', style: T.lead))])),
        const SizedBox(width: 10), Art('${_page['art'] ?? 'owl'}', size: 84)])),
      // A page with only exercises: the book character watches and reacts to each answer
      if (onlyEx) Padding(padding: const EdgeInsets.only(bottom: 16), child: Row(crossAxisAlignment: CrossAxisAlignment.end, children: [
        BookFace(wow ? 'wow' : si == _at ? _mood : 'idle', size: 60), const SizedBox(width: 12),
        Flexible(child: Padding(padding: const EdgeInsets.only(bottom: 8, right: 6), child: Bubble(key: ValueKey(wow ? 'done' : si == _at ? _line : ''), wow ? t('app_book_coach_done') : si == _at && _line.isNotEmpty ? _line : t('app_book_coach_start'))))])),
      for (final (k, gi) in ids.indexed) Padding(padding: EdgeInsets.only(top: k == 0 ? 0 : 22), child: _block(_blocks[gi], gi, ctx, si == _at)),
    ])));
  }

  Widget _block(Map b, int gi, PageCtx ctx, bool active) {
    switch (b['t']) {
      case 'text': return TextBlock(b);
      case 'examples': return ExamplesBlock(b, gi, ctx);
      case 'table': return TableBlock(b, key: ValueKey('table-$gi'));
      case 'dialogue': return DialogueBlock(b, gi, ctx, key: ValueKey('dlg-$gi'), active: active);
      case 'tip': return TipBlock(b);
      case 'reading': return ReadingBlock(b, gi, ctx);
      case 'ex': return ExBlock(_ui, gi);
    }
    return const SizedBox();
  }

  Widget _endPage() {
    final pages = pagesOf(_unit), i = pages.indexWhere((p) => p['id'] == _page['id']), last = i == pages.length - 1;
    return _sheet(Directionality(textDirection: explainDir(o.book), child: Center(child: SingleChildScrollView(padding: const EdgeInsets.all(24), child: Column(mainAxisSize: MainAxisSize.min, children: [
      Stage(art: 'dog', tint: C.tLime, bubble: t(last ? 'app_book_unit_end_p' : 'app_book_page_end_p'), height: 210, motion: Motion.bob),
      const SizedBox(height: 22),
      Text(t('app_book_page_end_h').toUpperCase(), style: T.display(44), textAlign: TextAlign.center), const SizedBox(height: 8),
      Text('${_page['title']}', style: T.lead, textAlign: TextAlign.center), const SizedBox(height: 24),
      Btn(t(last ? 'app_book_to_test' : 'app_book_next_lesson'), wide: true, icon: 'arrow',
          onTap: () => Navigator.of(context).pop(last ? TestScreen(o: o, unit: _unit) : LessonScreen(o: o, unit: _unit, page: pages[i + 1]))),
      const SizedBox(height: 10),
      Btn(t('app_book_back_unit'), wide: true, ghost: true, onTap: () => Navigator.of(context).pop()),
    ])))));
  }
}

/* ---------- The unit test: nothing is marked until "Check my test"; 70% passes the unit ---------- */
class TestScreen extends StatefulWidget {
  final Opened o; final Map<String, dynamic> unit;
  const TestScreen({super.key, required this.o, required this.unit});
  @override
  State<TestScreen> createState() => _TestState();
}

class _TestState extends State<TestScreen> with _Explained {
  late Map<String, dynamic> _unit;
  late ExSession _ex;
  late ExUi _ui;
  final _scroll = ScrollController();
  int _round = 0;

  @override
  void initState() { super.initState(); startExplained(widget.o); _build(null); }

  void _build(ExSession? old) {
    _unit = unitNow(widget.unit);
    _ex = ExSession(_unit['test'] as List? ?? const [], test: true, language: '${o.book['language']}', level: '${o.book['level']}', onChange: () { if (mounted) setState(() {}); });
    if (old != null) { _ex.adopt(old); old.dispose(); }
    _ui = ExUi(_ex);
  }

  @override
  void explainChanged() { final old = _ex, oldUi = _ui; _build(old); WidgetsBinding.instance.addPostFrameCallback((_) => oldUi.dispose()); }

  @override
  void dispose() { stopExplained(); _scroll.dispose(); _ui.dispose(); _ex.dispose(); super.dispose(); }

  void _submit() {
    FocusManager.instance.primaryFocus?.unfocus();
    final score = _ex.submit();
    _store.save(o.student, o.id, BookStore.keyOf(o.id, '${_unit['id']}', null), done: score >= kPass, score: score);
    if (score >= kPass) { HapticFeedback.mediumImpact(); } else { HapticFeedback.heavyImpact(); }
    setState(() {});
    _scroll.animateTo(0, duration: kSlow, curve: kEase);
  }

  void _retake() {
    final old = _ex, oldUi = _ui;
    setState(() { _round++; _build(null); });
    WidgetsBinding.instance.addPostFrameCallback((_) { oldUi.dispose(); old.dispose(); });
    _scroll.jumpTo(0);
  }

  @override
  Widget build(BuildContext context) {
    final book = o.book, xd = explainDir(book), rec = _store.rec(o.id, '${_unit['id']}', null), score = _ex.result, ready = _ex.allReady;
    final ctx = PageCtx(book, '${_unit['id']}', '', o.audio);
    return _Page(child: ListView(controller: _scroll, padding: const EdgeInsets.fromLTRB(16, 4, 16, 40), children: [
      _BackRow(unitTitle(book, _unit), () => Navigator.of(context).pop(), dir: xd), const SizedBox(height: 8),
      Text(t('app_book_test').toUpperCase(), style: T.h1), const SizedBox(height: 6),
      Text(unitTitle(book, _unit), style: T.lead, textDirection: xd), const SizedBox(height: 14),
      ExplainSwitch(book), const SizedBox(height: 14),
      if (score != null) Padding(padding: const EdgeInsets.only(bottom: 14), child: _result(score)),
      if (score == null) ...[
        AppCard(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(t('app_book_test_intro', {'pass': _pct(kPass)}), style: T.body),
          if (rec?.score != null) Padding(padding: const EdgeInsets.only(top: 10), child: Text(t('app_book_test_best', {'score': _pct(rec!.score!)}), style: T.small))])),
        const SizedBox(height: 14),
        Stage(art: 'dragon', tint: C.tLime, bubble: t('app_book_test_bub'), height: 190),
        const SizedBox(height: 14),
      ],
      Container(key: ValueKey('paper-$_round'), padding: const EdgeInsets.fromLTRB(14, 18, 14, 18), decoration: BoxDecoration(color: C.white, borderRadius: BorderRadius.circular(R.xl)),
          child: Directionality(textDirection: xd, child: ListenableBuilder(listenable: _ex, builder: (_, _) => Column(children: [
            for (var i = 0; i < _ex.blocks.length; i++) Padding(padding: EdgeInsets.only(top: i == 0 ? 0 : 18),
                child: _ex.blocks[i]['t'] == 'ex' ? ExBlock(_ui, i) : _ex.blocks[i]['t'] == 'reading' ? ReadingBlock(_ex.blocks[i], i, ctx) : _ex.blocks[i]['t'] == 'text' ? TextBlock(_ex.blocks[i]) : const SizedBox())])))),
      const SizedBox(height: 14),
      AppCard(color: C.bone, child: score != null
          ? Column(children: [Btn(t('app_book_test_retake'), wide: true, onTap: _retake), const SizedBox(height: 10), Btn(t('app_book_back_unit'), wide: true, ghost: true, onTap: () => Navigator.of(context).pop())])
          : Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              if (!ready) Padding(padding: const EdgeInsets.only(bottom: 12), child: Text(t('app_book_test_answer_all'), style: T.small)),
              Btn(t('app_book_test_submit'), wide: true, onTap: ready ? _submit : null)])),
    ]));
  }

  Widget _result(int score) {
    final pass = score >= kPass, w = written(o.book), ui = w.indexWhere((u) => u['id'] == _unit['id']);
    final next = pass && ui > -1 && ui + 1 < w.length ? w[ui + 1] : null;
    return AppCard(color: C.forest, child: Semantics(liveRegion: true, child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Row(children: [
        Container(width: 96, height: 96, alignment: Alignment.center, decoration: const BoxDecoration(color: C.bone, shape: BoxShape.circle), child: BookFace(score >= 90 ? 'wow' : pass ? 'happy' : 'think', size: 60)), const SizedBox(width: 16),
        TweenAnimationBuilder<double>(tween: Tween(begin: 0, end: score.toDouble()), duration: const Duration(milliseconds: 900), curve: Curves.easeOutCubic,
            builder: (_, v, _) => Text(_pct(v.round()), style: T.display(64, color: C.lime)))]),
      const SizedBox(height: 12),
      Text(t(pass ? 'app_book_test_passed_h' : 'app_book_test_failed_h').toUpperCase(), style: T.display(30, color: C.bone)), const SizedBox(height: 6),
      Text(t(pass ? 'app_book_test_passed_p' : 'app_book_test_failed_p'), style: T.s(16, 400, color: C.onForest)), const SizedBox(height: 18),
      if (next != null) Btn(t('app_book_next_unit'), wide: true, lime: true, icon: 'arrow', onTap: () => Navigator.of(context).pop(UnitScreen(o: o, unit: next)))
      else if (pass) Btn(t('app_book_back_book'), wide: true, lime: true, onTap: () => Navigator.of(context).pop('book')),
      const SizedBox(height: 10),
      Btn(t('app_book_test_retake'), wide: true, ghost: true, onForest: true, onTap: _retake),
    ])));
  }
}
