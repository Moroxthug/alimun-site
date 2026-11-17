// The teaching blocks of a lesson page (docs/BOOKS.md): text, examples with their notes, tables with "Test yourself",
// dialogues played line by line, tips with a drawing and a bubble, readings. Explanations are in the learner's
// language (or, by choice, the language being learned); sentences in the language being learned are always
// written left to right.
import 'dart:async';
import 'package:flutter/services.dart';
import 'package:material_ui/material_ui.dart';
import '../i18n.dart';
import '../theme.dart';
import '../ui/parts.dart';
import 'audio.dart';
import 'store.dart';

/// What a block needs to know about where it is
class PageCtx {
  final Map<String, dynamic> book; final String unit, page; final AudioPlan? audio;
  const PageCtx(this.book, this.unit, this.page, this.audio);
  String? src(int block, int i) => page.isEmpty ? null : audio?.src(unit, page, block, i);
}

const ltr = TextDirection.ltr;
final kText = T.s(17, 400, height: 1.55);
final kTarget = T.s(17, 600, height: 1.4);

List<String> paragraphs(Object? md) => '${md ?? ''}'.split(RegExp(r'\n\s*\n')).map((p) => p.trim()).where((p) => p.isNotEmpty).toList();

class TextBlock extends StatelessWidget {
  final Map b;
  const TextBlock(this.b, {super.key});
  @override
  Widget build(BuildContext context) => Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        for (final (i, p) in paragraphs(b['md']).indexed) Padding(padding: EdgeInsets.only(top: i == 0 ? 0 : 12), child: Md(p, style: kText))]);
}

/* ---------- Round play button for one sentence ---------- */
class SayBtn extends StatelessWidget {
  final String src;
  const SayBtn(this.src, {super.key});
  @override
  Widget build(BuildContext context) => ListenableBuilder(listenable: Sound.I, builder: (_, _) {
        final on = Sound.I.playing(src);
        return Semantics(button: true, label: t('app_book_play'), excludeSemantics: true, child: Pressable(scale: .9, onTap: () => Sound.I.play(src, [src]),
            child: AnimatedContainer(duration: kFast, width: 40, height: 40, alignment: Alignment.center,
                decoration: BoxDecoration(color: on ? C.lime : C.forest, shape: BoxShape.circle),
                child: LineIcon(on ? 'stop' : 'play', size: 18, color: on ? C.forest : C.lime))));
      });
}

/// "Listen" and "Slower" for a dialogue or a reading
class ListenRow extends StatelessWidget {
  final Object id; final List<String> sources; final void Function(int)? onLine;
  const ListenRow(this.id, this.sources, {super.key, this.onLine});
  @override
  Widget build(BuildContext context) => ListenableBuilder(listenable: Sound.I, builder: (_, _) {
        final slow = '$id-slow';
        return Wrap(spacing: 10, runSpacing: 8, children: [
          Btn(t('app_book_listen'), small: true, icon: Sound.I.playing(id) ? 'stop' : 'play', onTap: () => Sound.I.play(id, sources, onLine: onLine)),
          Btn(t('app_ex_slower'), small: true, ghost: true, icon: Sound.I.playing(slow) ? 'stop' : null, onTap: () => Sound.I.play(slow, sources, rate: .75, onLine: onLine)),
        ]);
      });
}

/* ---------- Examples: a sentence; tapping it opens its note ---------- */
class ExamplesBlock extends StatefulWidget {
  final Map b; final int gi; final PageCtx ctx;
  const ExamplesBlock(this.b, this.gi, this.ctx, {super.key});
  @override
  State<ExamplesBlock> createState() => _ExamplesState();
}

class _ExamplesState extends State<ExamplesBlock> {
  final _open = <int>{};
  @override
  Widget build(BuildContext context) {
    final items = widget.b['items'] as List? ?? const [];
    return Column(children: [
      for (final (k, x) in items.indexed) Padding(padding: EdgeInsets.only(top: k == 0 ? 0 : 8), child: _row(k, x as Map)),
    ]);
  }

  Widget _row(int k, Map x) {
    final note = '${x['n'] ?? ''}', src = widget.ctx.src(widget.gi, k), open = _open.contains(k);
    final body = Container(width: double.infinity, padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 13),
        decoration: BoxDecoration(color: open ? C.tLime : C.bone, borderRadius: BorderRadius.circular(R.md)),
        child: AnimatedSize(duration: kMid, curve: kEase, alignment: Alignment.topCenter, child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Directionality(textDirection: ltr, child: Align(alignment: Alignment.centerLeft, child: Md('${x['s']}', style: kTarget))),
          if (note.isNotEmpty && !open) Padding(padding: const EdgeInsets.only(top: 4), child: Text(t('app_book_why_tap'), style: T.tiny)),
          if (note.isNotEmpty && open) Padding(padding: const EdgeInsets.only(top: 6), child: Md(note, style: T.s(15, 400, height: 1.45))),
        ])));
    final tap = note.isEmpty ? body : Semantics(button: true, expanded: open, child: Pressable(scale: .985, onTap: () => setState(() { if (!_open.remove(k)) _open.add(k); }), child: body));
    if (src == null) return tap;
    return Row(crossAxisAlignment: CrossAxisAlignment.start, children: [Padding(padding: const EdgeInsets.only(top: 5), child: SayBtn(src)), const SizedBox(width: 10), Expanded(child: tap)]);
  }
}

/* ---------- Tables ---------- */
class TableBlock extends StatefulWidget {
  final Map b;
  const TableBlock(this.b, {super.key});
  @override
  State<TableBlock> createState() => _TableState();
}

class _TableState extends State<TableBlock> {
  bool _hidden = false;
  final _shown = <String>{};

  Map get b => widget.b;
  List get _explain => b['explain'] as List? ?? const [];
  bool get _quiz => b['quiz'] == true;
  // A cell is in the language being learned unless its column (or the heading row) is marked as an explanation
  TextDirection? _dirOf(int col, {bool head = false}) => _explain.contains(head ? 'head' : 'col$col') ? null : ltr;

  Widget _cell(String text, int r, int c, {bool head = false, double? maxWidth, double size = 15}) {
    final first = c == 0 && !head, key = '$r:$c';
    final hide = _quiz && _hidden && !head && c > 0 && !_shown.contains(key);
    final style = T.s(size, head || first ? 700 : 400, color: head ? C.forest : C.ink, height: 1.35);
    Widget w = Md(text, style: style, dir: _dirOf(c, head: head));
    if (hide) {
      w = Semantics(button: true, label: t('app_book_quiz_hint'), child: GestureDetector(behavior: HitTestBehavior.opaque,
          onTap: () { HapticFeedback.selectionClick(); setState(() => _shown.add(key)); },
          child: Stack(children: [Opacity(opacity: 0, child: w), Positioned.fill(child: Container(decoration: BoxDecoration(color: C.sun, borderRadius: BorderRadius.circular(6))))])));
    }
    return Container(constraints: maxWidth == null ? null : BoxConstraints(maxWidth: maxWidth), color: head ? C.tMint : null,
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 9), child: Align(alignment: AlignmentDirectional.centerStart, widthFactor: maxWidth == null ? null : 1, child: w));
  }

  Widget _table({required bool natural, double size = 15}) {
    final head = b['head'] as List? ?? const [], rows = b['rows'] as List? ?? const [];
    final n = [head.length, for (final r in rows) (r as List).length].fold<int>(0, (a, x) => x > a ? x : a);
    final w = natural ? 190.0 : null;
    return ClipRRect(borderRadius: BorderRadius.circular(R.sm), child: Container(
        foregroundDecoration: BoxDecoration(border: Border.all(color: C.line, width: 2), borderRadius: BorderRadius.circular(R.sm)),
        child: Table(defaultColumnWidth: natural ? const IntrinsicColumnWidth() : const FlexColumnWidth(), defaultVerticalAlignment: TableCellVerticalAlignment.middle,
            border: const TableBorder(horizontalInside: BorderSide(color: C.line, width: 1.5), verticalInside: BorderSide(color: C.line, width: 1.5)),
            children: [
              if (head.isNotEmpty) TableRow(children: [for (var c = 0; c < n; c++) _cell(c < head.length ? '${head[c]}' : '', -1, c, head: true, maxWidth: w, size: size)]),
              for (final (r, row) in rows.indexed) TableRow(children: [for (var c = 0; c < n; c++) _cell(c < (row as List).length ? '${row[c]}' : '', r, c, maxWidth: w, size: size)]),
            ])));
  }

  int get _cols { final head = b['head'] as List? ?? const [], rows = b['rows'] as List? ?? const []; return [head.length, for (final r in rows) (r as List).length].fold<int>(0, (a, x) => x > a ? x : a); }

  void _toggle() => setState(() { _hidden = !_hidden; _shown.clear(); });

  @override
  Widget build(BuildContext context) {
    final caption = '${b['caption'] ?? ''}', wide = _cols >= 4;
    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      if (caption.isNotEmpty || _quiz) Padding(padding: const EdgeInsets.only(bottom: 8), child: Row(crossAxisAlignment: CrossAxisAlignment.center, children: [
        Expanded(child: caption.isEmpty ? const SizedBox() : Md(caption, style: T.s(16, 700, height: 1.3))),
        if (_quiz) LinkBtn(t(_hidden ? 'app_book_quiz_show' : 'app_book_quiz'), onTap: _toggle),
      ])),
      if (_quiz && _hidden) Padding(padding: const EdgeInsets.only(bottom: 8), child: Text(t('app_book_quiz_hint'), style: T.small)),
      // A table of many columns is shrunk to the page and opens full screen, where it can be zoomed
      if (wide) Semantics(button: true, label: t('app_book_table_open'), child: GestureDetector(onTap: _hidden ? null : () => _openViewer(context),
          child: SizedBox(width: double.infinity, child: FittedBox(fit: BoxFit.scaleDown, alignment: AlignmentDirectional.topStart, child: _table(natural: true)))))
      else _table(natural: false),
      if (wide) Padding(padding: const EdgeInsets.only(top: 6), child: Pressable(onTap: () => _openViewer(context), child: Row(mainAxisSize: MainAxisSize.min, children: [
        const LineIcon('expand', size: 16, color: C.forest), const SizedBox(width: 6), Text(t('app_book_table_open'), style: T.s(13.5, 700, color: C.forest, height: 1.3))]))),
    ]);
  }

  void _openViewer(BuildContext context) {
    final dir = Directionality.of(context);
    Navigator.of(context).push(PageRouteBuilder(opaque: true, transitionDuration: kMid, reverseTransitionDuration: kFast,
        pageBuilder: (_, _, _) => Directionality(textDirection: dir, child: _TableViewer(title: '${b['caption'] ?? ''}', child: _table(natural: true, size: 16))),
        transitionsBuilder: (_, a, _, child) => FadeTransition(opacity: CurvedAnimation(parent: a, curve: kEase), child: child)));
  }
}

class _TableViewer extends StatefulWidget {
  final String title; final Widget child;
  const _TableViewer({required this.title, required this.child});
  @override
  State<_TableViewer> createState() => _TableViewerState();
}

class _TableViewerState extends State<_TableViewer> {
  final _tc = TransformationController();
  @override
  void dispose() { _tc.dispose(); super.dispose(); }
  void _zoom(double k) {
    final now = _tc.value.getMaxScaleOnAxis(), next = (now * k).clamp(.6, 3.0);
    setState(() => _tc.value = Matrix4.identity()..scaleByDouble(next, next, 1, 1));
  }
  Widget _round(String icon, String label, VoidCallback onTap) => Semantics(button: true, label: label, excludeSemantics: true, child: Pressable(scale: .9, onTap: onTap,
      child: Container(width: 44, height: 44, margin: const EdgeInsetsDirectional.only(start: 8), alignment: Alignment.center,
          decoration: const BoxDecoration(color: C.bone, shape: BoxShape.circle), child: LineIcon(icon, size: 20, color: C.forest))));
  @override
  Widget build(BuildContext context) => Scaffold(backgroundColor: C.white, body: SafeArea(child: Column(children: [
        Padding(padding: const EdgeInsets.fromLTRB(16, 10, 16, 4), child: Row(children: [
          Expanded(child: Md(widget.title, style: T.s(17, 700, height: 1.3))),
          _round('minus', t('app_book_zoom_out'), () => _zoom(.8)), _round('plus', t('app_book_zoom_in'), () => _zoom(1.25)),
          _round('close', t('app_book_table_close'), () => Navigator.of(context).pop())])),
        Padding(padding: const EdgeInsets.symmetric(horizontal: 16), child: Align(alignment: AlignmentDirectional.centerStart, child: Text(t('app_book_table_hint'), style: T.tiny))),
        Expanded(child: InteractiveViewer(transformationController: _tc, constrained: false, minScale: .6, maxScale: 3, boundaryMargin: const EdgeInsets.all(80),
            child: Padding(padding: const EdgeInsets.all(16), child: widget.child))),
      ])));
}

/* ---------- Dialogues: played line by line, like a chat ---------- */
class DialogueBlock extends StatefulWidget {
  final Map b; final int gi; final PageCtx ctx;
  /// The page is the one on screen: the lines start to arrive
  final bool active;
  const DialogueBlock(this.b, this.gi, this.ctx, {super.key, required this.active});
  @override
  State<DialogueBlock> createState() => _DialogueState();
}

class _DialogueState extends State<DialogueBlock> {
  int _on = 0;          // lines shown
  bool _typing = false; // the next line is being written
  Timer? _timer;
  bool _played = false;

  List get _lines => widget.b['lines'] as List? ?? const [];

  @override
  void initState() { super.initState(); if (widget.active) WidgetsBinding.instance.addPostFrameCallback((_) => _play()); }
  @override
  void didUpdateWidget(DialogueBlock old) { super.didUpdateWidget(old); if (widget.active && !old.active && !_played) _play(); }
  @override
  void dispose() { _timer?.cancel(); super.dispose(); }

  void _play() {
    if (!mounted) return;
    _timer?.cancel();
    _played = true;
    if (MediaQuery.of(context).disableAnimations) { setState(() { _on = _lines.length; _typing = false; }); return; }
    setState(() { _on = 0; _typing = false; });
    void step() {
      if (!mounted || _on >= _lines.length) return;
      setState(() => _typing = true);
      final len = '${(_lines[_on] as Map)['s']}'.length;
      _timer = Timer(Duration(milliseconds: 520 + (len * 14).clamp(0, 900)), () {
        if (!mounted) return;
        setState(() { _typing = false; _on++; });
        _timer = Timer(const Duration(milliseconds: 380), step);
      });
    }
    _timer = Timer(const Duration(milliseconds: 450), step);
  }

  // Listening: every line is there, each one marked while it is spoken
  void _spoken(int i) { _timer?.cancel(); if (mounted) setState(() { _typing = false; _on = _on > i + 1 ? _on : i + 1; }); }

  @override
  Widget build(BuildContext context) {
    final who = <String>[];
    for (final l in _lines) { if (!who.contains('${(l as Map)['who']}')) who.add('${l['who']}'); }
    final sources = [for (var k = 0; k < _lines.length; k++) widget.ctx.src(widget.gi, k)];
    final heard = sources.isNotEmpty && sources.every((s) => s != null);
    final title = '${widget.b['title'] ?? ''}';
    final id = 'dlg-${widget.ctx.unit}-${widget.ctx.page}-${widget.gi}';
    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      if (title.isNotEmpty) Padding(padding: const EdgeInsets.only(bottom: 10), child: Md(title, style: T.s(16, 700, height: 1.3), dir: ltr)),
      Directionality(textDirection: ltr, child: ListenableBuilder(listenable: Sound.I, builder: (_, _) => Column(children: [
        for (var k = 0; k < _lines.length; k++) if (k < _on || (k == _on && _typing))
          _Line(key: ValueKey(k), who: '${(_lines[k] as Map)['who']}', text: '${(_lines[k] as Map)['s']}', side: who.indexOf('${(_lines[k] as Map)['who']}') % 2, typing: k == _on,
              speaking: (Sound.I.playing(id) || Sound.I.playing('$id-slow')) && Sound.I.at == k),
      ]))),
      const SizedBox(height: 10),
      if (heard) ListenRow(id, [for (final s in sources) s!], onLine: _spoken)
      else LinkBtn(t('app_book_replay'), onTap: _play),
    ]);
  }
}

class _Line extends StatelessWidget {
  final String who, text; final int side; final bool typing, speaking;
  const _Line({super.key, required this.who, required this.text, required this.side, required this.typing, required this.speaking});
  @override
  Widget build(BuildContext context) {
    final right = side == 1;
    final face = Container(width: 34, height: 34, alignment: Alignment.center, decoration: BoxDecoration(color: right ? C.sun : C.mint, shape: BoxShape.circle),
        child: Text(who.isEmpty ? '' : who.characters.first.toUpperCase(), style: T.s(15, 700, color: C.forest, height: 1)));
    final bubble = Flexible(child: AnimatedContainer(duration: kFast, padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
        decoration: BoxDecoration(color: speaking ? C.lime : right ? C.tSun : C.tMint, borderRadius: BorderRadius.only(
            topLeft: const Radius.circular(18), topRight: const Radius.circular(18), bottomLeft: Radius.circular(right ? 18 : 4), bottomRight: Radius.circular(right ? 4 : 18))),
        child: typing ? const _Dots() : Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
          Text(who, style: T.s(13, 700, color: C.forest, height: 1.2)), const SizedBox(height: 2), Md(text, style: T.s(16.5, 500, height: 1.4))])));
    return TweenAnimationBuilder<double>(tween: Tween(begin: 0, end: 1), duration: kMid, curve: kEase,
        builder: (_, v, child) => Opacity(opacity: v, child: Transform.translate(offset: Offset(0, 10 * (1 - v)), child: child)),
        child: Padding(padding: const EdgeInsets.only(bottom: 8), child: Row(mainAxisAlignment: right ? MainAxisAlignment.end : MainAxisAlignment.start, crossAxisAlignment: CrossAxisAlignment.end,
            children: right ? [const SizedBox(width: 40), bubble, const SizedBox(width: 8), face] : [face, const SizedBox(width: 8), bubble, const SizedBox(width: 40)])));
  }
}

class _Dots extends StatefulWidget {
  const _Dots();
  @override
  State<_Dots> createState() => _DotsState();
}

class _DotsState extends State<_Dots> with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(vsync: this, duration: const Duration(milliseconds: 900))..repeat();
  @override
  void dispose() { _c.dispose(); super.dispose(); }
  @override
  Widget build(BuildContext context) => SizedBox(height: 22, child: AnimatedBuilder(animation: _c, builder: (_, _) => Row(mainAxisSize: MainAxisSize.min, children: [
        for (var i = 0; i < 3; i++) Container(width: 7, height: 7, margin: const EdgeInsets.symmetric(horizontal: 2.5),
            transform: Matrix4.translationValues(0, -3 * (((_c.value * 3 - i) % 3) < 1 ? 1.0 - ((_c.value * 3 - i) % 3 - .5).abs() * 2 : 0.0), 0),
            decoration: const BoxDecoration(color: C.forest, shape: BoxShape.circle))])));
}

/* ---------- Tips: a drawing with a speech bubble ---------- */
class TipBlock extends StatelessWidget {
  final Map b;
  const TipBlock(this.b, {super.key});
  @override
  Widget build(BuildContext context) => Row(crossAxisAlignment: CrossAxisAlignment.end, children: [
        Art('${b['art'] ?? 'owl'}', size: 72, motion: Motion.sway), const SizedBox(width: 12),
        Expanded(child: Padding(padding: const EdgeInsetsDirectional.only(end: 5, bottom: 5), child: Container(padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
            decoration: BoxDecoration(color: C.white, border: Border.all(color: C.forest, width: 3), borderRadius: BorderRadius.circular(6), boxShadow: const [BoxShadow(color: C.forest, offset: Offset(5, 5))]),
            child: Md('${b['md'] ?? ''}', style: T.s(15.5, 500, height: 1.45))))),
      ]);
}

/* ---------- Readings ---------- */
class ReadingBlock extends StatelessWidget {
  final Map b; final int gi; final PageCtx ctx;
  const ReadingBlock(this.b, this.gi, this.ctx, {super.key});
  @override
  Widget build(BuildContext context) {
    // Paragraphs keep their place in the text, so each one finds its recording
    final ps = '${b['md'] ?? ''}'.split(RegExp(r'\n\s*\n'));
    final sources = [for (var k = 0; k < ps.length; k++) ps[k].trim().isEmpty ? '' : ctx.src(gi, k)];
    final heard = sources.every((s) => s != null) && sources.any((s) => s != null && s.isNotEmpty);
    final title = '${b['title'] ?? ''}', id = 'read-${ctx.unit}-${ctx.page}-$gi';
    final spoken = [for (var k = 0; k < ps.length; k++) if (ps[k].trim().isNotEmpty) k];
    return Directionality(textDirection: ltr, child: Container(width: double.infinity, padding: const EdgeInsets.all(18),
        decoration: BoxDecoration(color: C.bone, borderRadius: BorderRadius.circular(R.lg)),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          if (title.isNotEmpty) Padding(padding: const EdgeInsets.only(bottom: 10), child: Text(title.toUpperCase(), style: T.h3)),
          if (heard) Padding(padding: const EdgeInsets.only(bottom: 12), child: ListenRow(id, [for (final k in spoken) sources[k]!])),
          ListenableBuilder(listenable: Sound.I, builder: (_, _) => Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            for (final (n, k) in spoken.indexed) AnimatedContainer(duration: kFast, margin: EdgeInsets.only(top: n == 0 ? 0 : 10),
                padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 3),
                decoration: BoxDecoration(color: heard && (Sound.I.playing(id) || Sound.I.playing('$id-slow')) && Sound.I.at == n ? C.lime : Colors.transparent, borderRadius: BorderRadius.circular(8)),
                child: Md(ps[k].trim(), style: T.s(17, 400, height: 1.6))),
          ])),
        ])));
  }
}
