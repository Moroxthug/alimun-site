// How every exercise kind looks and is answered (docs/BOOKS.md). The rules and the marking are in engine.dart;
// this file only draws the state and passes taps and typing on. In a lesson each answer gets the book character's
// reaction and the explanation; in a unit test nothing is marked until "Check my test".
import 'dart:math' as math;
import 'package:flutter/services.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:material_ui/material_ui.dart';
import '../i18n.dart';
import '../theme.dart';
import '../ui/parts.dart';
import 'blocks.dart';
import 'engine.dart';
import 'marking.dart';

/// What the exercise screens of one lesson or test share: the session, the typing fields, the recorder
class ExUi {
  final ExSession s;
  /// Records the learner and returns what was heard (`onWaiting` when the recording is over and being turned into
  /// text); throws a text key when it cannot (speak.dart)
  final Future<String> Function(VoidCallback onWaiting)? listen;
  final Future<void> Function()? stopListening;
  final _fields = <String, TextEditingController>{};
  String? recording;   // "bi:i" while the microphone is on
  ExUi(this.s, {this.listen, this.stopListening});
  TextEditingController field(int bi, int i) => _fields.putIfAbsent('$bi:$i', () => TextEditingController(text: s.state[bi]!.items[i].value));
  void dispose() { for (final c in _fields.values) { c.dispose(); } }
}

const _praise = ['app_book_right_1', 'app_book_right_2', 'app_book_right_3'];
String praise(int b, int i) => t(_praise[(b + i) % 3]);
String tfLabel(Object? v) => t(v == 't' ? 'app_book_true' : v == 'f' ? 'app_book_false' : 'app_book_ng');

final _q = T.s(17, 500, height: 1.5);

/* ---------- The character's word on an answer ---------- */
class Feedback extends StatelessWidget {
  final bool ok; final String text; final String? why, answer;
  const Feedback(this.ok, this.text, {super.key, this.why, this.answer});
  @override
  Widget build(BuildContext context) => TweenAnimationBuilder<double>(tween: Tween(begin: 0, end: 1), duration: kMid, curve: kEase,
      builder: (_, v, child) => Opacity(opacity: v, child: Transform.translate(offset: Offset(0, 8 * (1 - v)), child: child)),
      child: Semantics(liveRegion: true, child: Container(margin: const EdgeInsets.only(top: 10), padding: const EdgeInsets.fromLTRB(10, 10, 14, 10),
          decoration: BoxDecoration(color: ok ? C.tLime : C.tCoral, borderRadius: BorderRadius.circular(R.md)),
          child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
            BookFace(ok ? 'happy' : 'think', size: 36), const SizedBox(width: 10),
            Expanded(child: Padding(padding: const EdgeInsets.only(top: 6), child: Text.rich(TextSpan(children: [
              TextSpan(text: text, style: T.s(15, 700, height: 1.4)),
              if (answer != null && answer!.isNotEmpty) ...[const TextSpan(text: ' '), ...mdSpans(answer!, T.s(15, 700, color: C.forest, height: 1.4))],
              if (why != null && why!.isNotEmpty) ...[const TextSpan(text: ' '), ...mdSpans(why!, T.s(15, 400, height: 1.4))],
            ])))),
          ]))));
}

/* ---------- Small parts ---------- */
enum Look { idle, right, wrong, picked, sel, used, shown }

class Tile extends StatelessWidget {
  final String text; final Look look; final VoidCallback? onTap; final bool wide, md; final TextDirection? dir; final double size;
  const Tile(this.text, {super.key, this.look = Look.idle, this.onTap, this.wide = false, this.md = true, this.dir = ltr, this.size = 16});
  @override
  Widget build(BuildContext context) {
    final (bg, line, fg) = switch (look) {
      Look.right => (C.mint, C.forest, C.forest),
      Look.wrong => (C.tCoral, C.bad, C.bad),
      Look.picked => (C.lime, C.forest, C.forest),
      Look.sel => (C.tLime, C.forest, C.ink),
      Look.used => (Colors.transparent, C.line, Colors.transparent),
      Look.shown => (C.tSun, C.gold, C.ink),
      Look.idle => (C.white, C.line, C.ink),
    };
    final style = T.s(size, 600, color: fg, height: 1.3);
    final box = AnimatedContainer(duration: kFast, width: wide ? double.infinity : null, constraints: const BoxConstraints(minHeight: 46),
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10), alignment: wide ? AlignmentDirectional.centerStart : null,
        decoration: BoxDecoration(color: bg, borderRadius: BorderRadius.circular(R.sm), border: Border.all(color: line, width: 2)),
        child: md ? Md(text, style: style, dir: dir) : Text(text, style: style, textDirection: dir));
    final child = wide ? box : IntrinsicWidth(child: Center(child: box));
    return Semantics(button: true, enabled: onTap != null, selected: look == Look.picked || look == Look.sel, child: onTap == null ? child : Pressable(scale: .96, onTap: onTap, child: child));
  }
}

class _Typed extends StatelessWidget {
  final ExUi ui; final int bi, i; final double? width; final int? maxLength;
  const _Typed(this.ui, this.bi, this.i, {this.width, this.maxLength});
  @override
  Widget build(BuildContext context) {
    final s = ui.s, x = s.state[bi]!.items[i], review = s.result != null, locked = review || x.done;
    final right = review ? s.isRight(bi, i) : x.done && !x.shown, wrong = review ? !right : x.flash;
    final line = right ? C.forest : wrong ? C.bad : x.shown ? C.gold : C.line;
    final fill = right ? C.mint : wrong ? C.tCoral : x.shown ? C.tSun : C.white;
    final style = T.s(16.5, 600, height: 1.25);
    final Widget inner;
    if (locked) {
      final shown = x.done && x.shown ? '${(s.item(bi, i)['a'] as List)[0]}' : x.value;
      inner = Container(constraints: const BoxConstraints(minHeight: 44), alignment: AlignmentDirectional.centerStart, padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 9),
          decoration: BoxDecoration(color: fill, borderRadius: BorderRadius.circular(10), border: Border.all(color: line, width: 2)),
          child: Text(shown, style: style, textDirection: ltr));
    } else {
      OutlineInputBorder b(Color c) => OutlineInputBorder(borderRadius: BorderRadius.circular(10), borderSide: BorderSide(color: c, width: 2));
      inner = TextField(controller: ui.field(bi, i), style: style, cursorColor: C.forest, textDirection: ltr, maxLength: maxLength,
          autocorrect: false, enableSuggestions: false, textCapitalization: TextCapitalization.none, textInputAction: TextInputAction.done,
          scrollPadding: const EdgeInsets.only(bottom: 160),
          onChanged: (v) => s.setValue(bi, i, v),
          onSubmitted: (_) { if (s.test) return; if (s.kindOf(bi) == 'fix') { s.fixOk(bi, i); } else { s.check(bi); } },
          decoration: InputDecoration(isDense: true, filled: true, fillColor: fill, counterText: '', contentPadding: const EdgeInsets.symmetric(horizontal: 12, vertical: 11),
              enabledBorder: b(line), focusedBorder: b(wrong ? C.bad : C.forest)));
    }
    return Semantics(label: t('app_book_your_answer'), child: width == null ? inner : SizedBox(width: width, child: inner));
  }
}

double _gapWidth(Map it) {
  final longest = (it['a'] as List).fold<int>(0, (n, a) => math.max(n, '$a'.length));
  return ((longest + 2) * 10.5 + 26).clamp(84, 250).toDouble();
}

/// A sentence with a gap: the words before, something in the gap, the words after
Widget _sentence(String q, Widget gap) {
  final parts = q.split('___');
  if (parts.length < 2) return Md(q, style: _q, dir: ltr);
  return Text.rich(TextSpan(children: [
    ...mdSpans(parts[0], _q),
    WidgetSpan(alignment: PlaceholderAlignment.middle, child: Padding(padding: const EdgeInsets.symmetric(horizontal: 3, vertical: 3), child: gap)),
    ...mdSpans(parts.sublist(1).join('___'), _q),
  ]), textDirection: ltr);
}

Widget _blank(String fill) => fill.isEmpty
    ? Container(width: 64, height: 26, decoration: const BoxDecoration(border: Border(bottom: BorderSide(color: C.forest, width: 2.5))))
    : Container(padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2), decoration: BoxDecoration(color: C.mint, borderRadius: BorderRadius.circular(8)),
        child: Md(fill, style: T.s(17, 700, color: C.forest, height: 1.4), dir: ltr));

/* ---------- One exercise ---------- */
class ExBlock extends StatelessWidget {
  final ExUi ui; final int bi;
  const ExBlock(this.ui, this.bi, {super.key});

  ExSession get s => ui.s;
  bool get _review => s.test && s.result != null;

  @override
  Widget build(BuildContext context) {
    final b = s.blocks[bi], kind = s.kindOf(bi), hint = kHints[kind];
    final typedOpen = !s.test && ExSession.isTyped(kind) && !s.done(bi);
    return Container(width: double.infinity, padding: const EdgeInsets.fromLTRB(16, 16, 16, 18), decoration: BoxDecoration(color: C.bone, borderRadius: BorderRadius.circular(R.lg)),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Md('${b['h'] ?? ''}', style: T.s(18, 700, height: 1.3)),
          if (hint != null && !_review) Padding(padding: const EdgeInsets.only(top: 4), child: Text(t(hint), style: T.small)),
          const SizedBox(height: 12),
          ..._body(context, kind),
          if (typedOpen) Padding(padding: const EdgeInsets.only(top: 14), child: Btn(t('app_book_check'), small: true, onTap: () { FocusManager.instance.primaryFocus?.unfocus(); s.check(bi); })),
        ]));
  }

  List<Widget> _body(BuildContext context, String kind) {
    switch (kind) {
      case 'match': return [_MatchView(ui, bi)];
      case 'bank': return _bank(context);
      case 'label': return _label(context);
      case 'sort': return _sort(context);
      case 'memory': return _memory(context);
      case 'search': return _search(context);
    }
    final b = s.blocks[bi], st = s.state[bi]!;
    return [
      if (kind == 'conjugate') Padding(padding: const EdgeInsets.only(bottom: 10), child: Text.rich(TextSpan(children: [
        TextSpan(text: '${b['verb'] ?? ''}', style: T.s(19, 700, color: C.forest, height: 1.3)),
        if ('${b['tense'] ?? ''}'.isNotEmpty) ...[const TextSpan(text: '   '), ...mdSpans('${b['tense']}', T.small)]]))),
      if (kind == 'crossword') Padding(padding: const EdgeInsets.only(bottom: 14), child: _CrossGridView(s, bi)),
      if (kind == 'speak') Padding(padding: const EdgeInsets.only(bottom: 8), child: Center(child: SvgPicture.asset('assets/art/tutor-${b['tutor'] ?? 'lena'}.svg', width: 120, height: 120))),
      for (var i = 0; i < st.items.length; i++) Padding(padding: EdgeInsets.only(top: i == 0 ? 0 : (kind == 'conjugate' ? 8 : 18)),
          child: Shake(n: st.items[i].tries, child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            ..._item(context, kind, i),
            if (_showLink(kind, i)) LinkBtn(t(kind == 'speak' ? 'app_ex_skip' : 'app_book_show'), onTap: () => s.show(bi, i)),
            if (_fb(i) != null) _fb(i)!,
          ]))),
    ];
  }

  bool _showLink(String kind, int i) {
    final x = s.state[bi]!.items[i];
    if (s.test || x.done) return false;
    if (kind == 'order' || kind == 'build') return false;   // shown beside "Start again"
    if (kind == 'speak') return x.tries >= 2 || RegExp('signin|plan|mic|limit').hasMatch(x.note);
    if (kind == 'choice' || kind == 'odd' || kind == 'picture' || kind == 'tf') return false;
    return x.tries >= 2;
  }

  Widget? _fb(int i) {
    final x = s.state[bi]!.items[i], kind = s.kindOf(bi), why = '${s.item(bi, i)['why'] ?? ''}';
    String answer() => kind == 'tf' ? tfLabel(s.answerText(bi, i)) : s.answerText(bi, i);
    if (_review) return s.isRight(bi, i) ? Feedback(true, praise(bi, i), why: why) : Feedback(false, t('app_book_answer_is_label'), why: why, answer: answer());
    if (s.test) return null;
    if (x.done) {
      if (x.shown) return Feedback(false, t('app_book_answer_is_label'), why: why, answer: kind == 'speak' ? null : answer());
      if (s.accentSlip(bi, i)) return Feedback(true, '${praise(bi, i)} ${t('app_ex_accent_mind')}', why: why, answer: answer());
      return Feedback(true, praise(bi, i), why: why);
    }
    if (x.flash && kind == 'speak') return null;
    if (x.flash && s.accentSlip(bi, i)) return Feedback(false, t('app_ex_accent_almost'));
    if (x.flash) return Feedback(false, t('app_book_wrong'));
    return null;
  }

  /* ----- Item kinds ----- */
  List<Widget> _item(BuildContext context, String kind, int i) {
    final it = s.item(bi, i), x = s.state[bi]!.items[i], test = s.test, review = _review, locked = review || x.done;
    Widget options(List order, String Function(Object o) label, bool Function(Object o) isRight, {bool row = false, TextDirection? dir = ltr, bool md = true}) {
      final tiles = [for (final o in order) () {
        final right = isRight(o as Object);
        final look = review ? (right ? Look.right : x.picked == o ? Look.wrong : Look.idle)
            : test ? (x.picked == o ? Look.picked : Look.idle)
            : x.done ? (right ? Look.right : Look.idle) : x.wrong.contains(o) ? Look.wrong : Look.idle;
        final off = locked || (!test && x.wrong.contains(o));
        return Tile(label(o), look: look, wide: !row, dir: dir, md: md, onTap: off ? null : () => s.pick(bi, i, o));
      }()];
      if (row) return Row(children: [for (final (k, w) in tiles.indexed) ...[if (k > 0) const SizedBox(width: 8), Expanded(child: w)]]);
      return Column(children: [for (final (k, w) in tiles.indexed) Padding(padding: EdgeInsets.only(top: k == 0 ? 0 : 8), child: w)]);
    }
    switch (kind) {
      case 'choice':
        final q = '${it['q'] ?? ''}', o = it['o'] as List;
        final fill = (x.done && !test) || (review && x.picked == 0) ? '${o[0]}' : '';
        return [
          if (q.isNotEmpty) Padding(padding: const EdgeInsets.only(bottom: 10), child: _sentence(q, _blank(fill))),
          options(x.order, (k) => '${o[k as int]}', (k) => k == 0)];
      case 'odd':
        final o = it['o'] as List;
        return [options(x.order, (k) => '${o[k as int]}', (k) => k == 0)];
      case 'picture':
        final o = it['o'] as List;
        return [
          Center(child: Container(width: 150, height: 150, margin: const EdgeInsets.only(bottom: 10), padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(color: C.white, borderRadius: BorderRadius.circular(R.lg)), child: SvgPicture.asset('assets/art/obj-${it['pic']}.svg'))),
          options(x.order, (k) => '${o[k as int]}', (k) => k == 0)];
      case 'tf':
        final q = '${it['q'] ?? ''}';
        return [
          if (q.isNotEmpty) Padding(padding: const EdgeInsets.only(bottom: 10), child: Md(q, style: _q, dir: ltr)),
          options(s.blocks[bi]['ng'] == true ? const ['t', 'f', 'ng'] : const ['t', 'f'], tfLabel, (k) => k == it['a'], row: true, dir: null, md: false)];
      case 'select':
        final o = it['o'] as List, cur = x.done && x.shown ? 0 : x.picked as int?;
        final right = review ? x.picked == 0 : x.done, wrong = review ? x.picked != 0 : x.flash;
        final pill = Semantics(button: true, label: t('app_book_your_answer'), child: Pressable(scale: .96,
            onTap: locked ? null : () async {
              final v = await pickSheet<int>(context, title: t('app_book_your_answer'), options: [for (final k in x.order) (k, '${o[k]}')], value: cur,
                  disabled: test ? const {} : {for (final w in x.wrong) w as int}, optionsDirection: ltr);
              if (v != null) s.pick(bi, i, v);
            },
            child: Container(constraints: const BoxConstraints(minWidth: 76, minHeight: 40), padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 7),
                decoration: BoxDecoration(color: right ? C.mint : wrong ? C.tCoral : cur != null ? C.lime : C.white, borderRadius: BorderRadius.circular(10),
                    border: Border.all(color: right ? C.forest : wrong ? C.bad : cur != null ? C.forest : C.line, width: 2)),
                child: Row(mainAxisSize: MainAxisSize.min, mainAxisAlignment: MainAxisAlignment.center, children: [
                  Flexible(child: Text(cur == null ? '…' : '${o[cur]}', style: T.s(16.5, 600, height: 1.25), textDirection: ltr)),
                  if (!locked) ...[const SizedBox(width: 6), const LineIcon('down', size: 16, color: C.forest)]]))));
        return [_sentence('${it['q']}', pill)];
      case 'gap':
        return [_sentence('${it['q']}', _Typed(ui, bi, i, width: _gapWidth(it)))];
      case 'wordform':
        return [_sentence('${it['q']}', _Typed(ui, bi, i, width: _gapWidth(it))),
          Padding(padding: const EdgeInsets.only(top: 4), child: Text(upper(it['base']), style: T.s(15, 700, color: C.forest, height: 1.3), textDirection: ltr))];
      case 'transform':
        final cue = '${it['cue'] ?? ''}';
        if (it['gap'] != null) {
          return [Md('${it['q']}', style: _q, dir: ltr), Padding(padding: const EdgeInsets.symmetric(vertical: 6), child: Text(upper(cue), style: T.s(15, 700, color: C.forest, height: 1.3), textDirection: ltr)),
            _sentence('${it['gap']}', _Typed(ui, bi, i, width: _gapWidth(it)))];
        }
        return [Md('${it['q']}', style: _q, dir: ltr),
          if (cue.isNotEmpty) Padding(padding: const EdgeInsets.only(top: 6), child: Directionality(textDirection: ltr, child: Row(children: [
            const LineIcon('arrow', size: 18, color: C.forest), const SizedBox(width: 8), Expanded(child: Md(cue, style: T.s(16, 700, color: C.forest, height: 1.3)))]))),
          Padding(padding: const EdgeInsets.only(top: 8), child: _Typed(ui, bi, i))];
      case 'conjugate':
        return [Directionality(textDirection: ltr, child: Row(children: [
          SizedBox(width: 96, child: Md('${it['q']}', style: T.s(16.5, 600, height: 1.3))), Expanded(child: _Typed(ui, bi, i))]))];
      case 'crossword':
        final w = s.crossOf(bi).words[i];
        return [Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Padding(padding: const EdgeInsets.only(top: 3), child: Transform.rotate(angle: w.down ? 0 : -math.pi / 2, child: const LineIcon('down', size: 18, color: C.forest))), const SizedBox(width: 8),
          Expanded(child: Md('${it['q']} (${w.len})', style: T.s(16, 500, height: 1.4), dir: ltr))]),
          Padding(padding: const EdgeInsets.only(top: 6), child: _Typed(ui, bi, i, maxLength: w.len + 4))];
      case 'order' || 'build':
        final placed = x.done && x.shown ? [for (var k = 0; k < x.words.length; k++) k] : x.placed;
        return [
          AnimatedContainer(duration: kFast, width: double.infinity, constraints: const BoxConstraints(minHeight: 66), padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(color: x.done && !x.shown ? C.tLime : C.white, borderRadius: BorderRadius.circular(R.md), border: Border.all(color: x.flash ? C.bad : x.done ? C.forest : C.line, width: 2)),
              child: Directionality(textDirection: ltr, child: Wrap(spacing: 6, runSpacing: 6, children: [
                for (final w in placed) Tile(x.all[w], key: ValueKey('p$w'), md: false, look: x.done && !x.shown ? Look.right : review ? Look.picked : Look.idle, onTap: locked ? null : () => s.place(bi, i, w, false))]))),
          if (!locked) Padding(padding: const EdgeInsets.only(top: 10), child: Directionality(textDirection: ltr, child: Wrap(spacing: 6, runSpacing: 6, children: [
            for (final w in x.pool) x.placed.contains(w) ? Tile(x.all[w], md: false, look: Look.used) : Tile(x.all[w], key: ValueKey('t$w'), md: false, onTap: () => s.place(bi, i, w, true))]))),
          if (!locked && !test && x.flash) Wrap(spacing: 18, children: [
            LinkBtn(t('app_book_clear'), onTap: () => s.resetTiles(bi, i)),
            if (x.tries >= 2) LinkBtn(t('app_book_show'), onTap: () => s.show(bi, i))]),
        ];
      case 'spot':
        final showAll = review || (x.done && x.shown);
        return [_words(x.tokens, (ti, k) {
          if (showAll) return k.target > -1 ? (x.sel.contains(ti) || x.shown ? Look.right : Look.shown) : x.sel.contains(ti) ? Look.wrong : Look.idle;
          if (test) return x.sel.contains(ti) ? Look.picked : Look.idle;
          if (k.target > -1 && x.found.contains(k.target)) return Look.right;
          return x.bad == ti ? Look.wrong : Look.idle;
        }, locked ? null : (ti) => s.spot(bi, i, ti))];
      case 'colloc':
        final o = it['o'] as List, a = it['a'] as List;
        return [
          Directionality(textDirection: ltr, child: Align(alignment: Alignment.centerLeft, child: Md('${it['key']}', style: T.s(20, 700, color: C.forest, height: 1.3)))), const SizedBox(height: 8),
          Directionality(textDirection: ltr, child: Wrap(spacing: 8, runSpacing: 8, children: [for (final k in x.order) () {
            final right = a.contains(k);
            final look = review || (x.done && x.shown) ? (right ? (x.sel.contains(k) || x.shown ? Look.right : Look.shown) : x.sel.contains(k) ? Look.wrong : Look.idle)
                : test ? (x.sel.contains(k) ? Look.picked : Look.idle) : x.sel.contains(k) ? Look.right : x.bad == k ? Look.wrong : Look.idle;
            return Tile('${o[k]}', look: look, onTap: locked ? null : () => s.toggle(bi, i, k));
          }()]))];
      case 'fix':
        final showAll = review || (x.done && x.shown);
        final hitWord = x.hit != null ? x.tokens[x.hit!].text : '';
        return [
          _words(x.tokens, (ti, k) {
            if (showAll) return k.target > -1 ? Look.shown : x.hit == ti ? Look.wrong : Look.idle;
            if (x.hit == ti) return test ? Look.picked : Look.right;
            return x.bad == ti ? Look.wrong : Look.idle;
          }, locked || (!test && x.hit != null) ? null : (ti) => s.fixTap(bi, i, ti)),
          if (x.hit != null || showAll) Padding(padding: const EdgeInsets.only(top: 10), child: Directionality(textDirection: ltr, child: Row(children: [
            if (hitWord.isNotEmpty) Flexible(child: Text(hitWord, style: T.s(16.5, 600, color: C.muted, height: 1.3).copyWith(decoration: TextDecoration.lineThrough))),
            const Padding(padding: EdgeInsets.symmetric(horizontal: 8), child: LineIcon('arrow', size: 18, color: C.forest)),
            Expanded(flex: 2, child: _Typed(ui, bi, i)),
            if (!test && !locked) ...[const SizedBox(width: 8), Btn(t('app_book_check'), small: true, onTap: () { FocusManager.instance.primaryFocus?.unfocus(); s.fixOk(bi, i); })],
          ]))),
        ];
      case 'speak':
        return _speak(context, i);
    }
    return const [];
  }

  /// A sentence whose words can be tapped (spot, fix)
  Widget _words(List<Tok> tokens, Look Function(int ti, Tok k) look, void Function(int ti)? onTap) => Directionality(textDirection: ltr, child: Wrap(crossAxisAlignment: WrapCrossAlignment.center, runSpacing: 6, children: [
        for (final (ti, k) in tokens.indexed)
          if (k.space) const SizedBox(width: 5)
          else if (k.target == -1 && !k.word) Text(k.text, style: _q)
          else () {
            final l = look(ti, k);
            final (bg, fg) = switch (l) { Look.right => (C.mint, C.forest), Look.wrong => (C.tCoral, C.bad), Look.picked => (C.lime, C.forest), Look.shown => (C.sun, C.ink), _ => (C.white, C.ink) };
            final w = AnimatedContainer(duration: kFast, padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 5), decoration: BoxDecoration(color: bg, borderRadius: BorderRadius.circular(8)),
                child: Text(k.text, style: T.s(17, 600, color: fg, height: 1.3)));
            return onTap == null ? w : Pressable(scale: .94, onTap: () => onTap(ti), child: w);
          }(),
      ]));

  List<Widget> _speak(BuildContext context, int i) {
    final it = s.item(bi, i), x = s.state[bi]!.items[i], locked = x.done;
    final m = x.heard.isNotEmpty ? spokenMatch('${it['a']}', x.heard) : null;
    var k = 0;
    final key = '$bi:$i', recording = ui.recording == key;
    return [
      Directionality(textDirection: ltr, child: Wrap(spacing: 6, runSpacing: 4, alignment: WrapAlignment.center, children: [
        for (final w in '${it['a']}'.split(RegExp(r'\s+'))) () {
          final core = words2(w).length;
          final hit = m != null && core > 0 ? (k < m.hit.length && m.hit[k]) : null;
          if (core > 0) k += core;
          return Text(w, style: T.s(20, 700, color: hit == null ? C.ink : hit ? C.forest : C.bad, height: 1.35));
        }()])),
      if (!locked) Padding(padding: const EdgeInsets.only(top: 12), child: Center(child: Btn(t(recording ? 'app_ex_rec_stop' : x.state == 'wait' ? 'app_ex_rec_wait' : 'app_ex_rec'), small: true,
          icon: recording ? 'stop' : 'mic', busy: x.state == 'wait',
          onTap: x.state == 'wait' ? null : () async {
            if (recording) { await ui.stopListening?.call(); return; }
            if (ui.listen == null) { s.speakState(bi, i, note: 'app_ex_speak_error'); return; }
            ui.recording = key;
            s.speakState(bi, i, note: '');
            try {
              final text = await ui.listen!(() { ui.recording = null; s.speakState(bi, i, state: 'wait'); });
              ui.recording = null;
              s.speakHeard(bi, i, text);
            } catch (e) {
              ui.recording = null;
              s.speakState(bi, i, state: '', note: e is String ? e : 'app_ex_speak_error');
            }
          }))),
      if (x.heard.isNotEmpty) Padding(padding: const EdgeInsets.only(top: 8), child: Text.rich(TextSpan(children: [
        TextSpan(text: '${t('app_ex_speak_heard')} ', style: T.small), TextSpan(text: '“${x.heard}”', style: T.small.copyWith(color: C.ink))]), textAlign: TextAlign.center)),
      if (x.note.isNotEmpty) Padding(padding: const EdgeInsets.only(top: 6), child: Text(t(x.note), style: T.small.copyWith(color: C.bad), textAlign: TextAlign.center)),
    ];
  }

  /* ----- Word bank ----- */
  List<Widget> _bankTiles() {
    final st = s.state[bi]!, used = {for (final x in st.items) if (x.picked != null) x.picked as int};
    return [Directionality(textDirection: ltr, child: Wrap(spacing: 8, runSpacing: 8, children: [
      for (final w in st.order) Shake(n: st.bad == w ? st.items.fold<int>(0, (n, x) => n + x.tries) : 0,
          child: Tile(st.bank[w], md: false, look: st.bad == w ? Look.wrong : used.contains(w) ? (s.test ? Look.picked : Look.used) : Look.idle,
              onTap: used.contains(w) && !s.test ? null : () => s.bankPick(bi, w)))]))];
  }

  Widget? _bankFb(int i) {
    final x = s.state[bi]!.items[i], it = s.item(bi, i), why = '${it['why'] ?? ''}';
    if (_review) return s.bankRight(bi, i) ? Feedback(true, praise(bi, i), why: why) : Feedback(false, t('app_book_answer_is_label'), why: why, answer: '${it['a']}');
    if (s.test) return null;
    if (x.done) return x.shown ? Feedback(false, t('app_book_answer_is_label'), why: why, answer: '${it['a']}') : Feedback(true, praise(bi, i), why: why);
    if (x.flash) return Feedback(false, t('app_book_wrong'));
    return null;
  }

  List<Widget> _bank(BuildContext context) {
    final st = s.state[bi]!, review = _review;
    return [
      if (!review && !s.done(bi)) ..._bankTiles(),
      for (var i = 0; i < st.items.length; i++) () {
        final x = st.items[i], fill = x.picked != null ? st.bank[x.picked as int] : '';
        final ok = s.bankRight(bi, i), on = !review && !x.done && st.sel == i;
        final (bg, line) = review ? (ok ? (C.mint, C.forest) : (C.tCoral, C.bad)) : x.done ? (x.shown ? (C.tSun, C.gold) : (C.mint, C.forest)) : on ? (C.tLime, C.forest) : fill.isNotEmpty ? (C.lime, C.forest) : (C.white, C.line);
        final gap = Semantics(button: true, label: fill.isEmpty ? t('app_book_gap') : fill, child: Pressable(scale: .96, onTap: review || x.done ? null : () => s.gapSel(bi, i),
            child: AnimatedContainer(duration: kFast, constraints: const BoxConstraints(minWidth: 76, minHeight: 38), padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                decoration: BoxDecoration(color: bg, borderRadius: BorderRadius.circular(10), border: Border.all(color: line, width: on ? 2.5 : 2)),
                child: Text(fill, style: T.s(16.5, 600, height: 1.25), textAlign: TextAlign.center, textDirection: ltr))));
        return Padding(padding: const EdgeInsets.only(top: 16), child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          _sentence('${s.item(bi, i)['q']}', gap),
          if (!s.test && !x.done && x.tries >= 2) LinkBtn(t('app_book_show'), onTap: () => s.show(bi, i)),
          if (_bankFb(i) != null) _bankFb(i)!,
        ]));
      }(),
    ];
  }

  /* ----- Label the scene: a word bank on a picture ----- */
  List<Widget> _label(BuildContext context) {
    final st = s.state[bi]!, review = _review, items = s.itemsOf(bi);
    Widget? fb;
    if (review) {
      final wrong = [for (var i = 0; i < items.length; i++) if (!s.bankRight(bi, i)) '${(items[i] as Map)['a']}'];
      fb = wrong.isNotEmpty ? Feedback(false, t('app_book_answer_is_label'), answer: wrong.join(', ')) : Feedback(true, praise(bi, 0));
    } else if (!s.test && st.last != null) { fb = _bankFb(st.last!); }
    final last = st.last;
    return [
      ClipRRect(borderRadius: BorderRadius.circular(R.md), child: Container(color: C.white, child: AspectRatio(aspectRatio: 320 / 200, child: LayoutBuilder(builder: (context, box) => Stack(clipBehavior: Clip.none, children: [
        Positioned.fill(child: SvgPicture.asset('assets/art/scene-${s.blocks[bi]['scene']}.svg', fit: BoxFit.fill)),
        for (var i = 0; i < items.length; i++) () {
          final it = items[i] as Map, x = st.items[i], ok = s.bankRight(bi, i);
          final word = review && !ok ? '${it['a']}' : x.picked != null ? st.bank[x.picked as int] : '';
          final on = !review && !x.done && st.sel == i;
          final color = review ? (ok ? C.forest : C.bad) : x.done ? C.forest : x.flash ? C.bad : on ? C.forest : C.ink;
          final px = (it['x'] as num) / 320 * box.maxWidth, py = (it['y'] as num) / 200 * box.maxHeight, left = (it['x'] as num) > 220;
          final dot = AnimatedContainer(duration: kFast, width: on ? 26 : 20, height: on ? 26 : 20,
              decoration: BoxDecoration(color: on ? C.lime : x.done || review ? color : C.white, shape: BoxShape.circle, border: Border.all(color: color, width: 3)));
          final tag = word.isEmpty ? null : Container(padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 3), decoration: BoxDecoration(color: C.white, borderRadius: BorderRadius.circular(7), border: Border.all(color: color, width: 2)),
              child: Text(word, style: T.s(12.5, 700, color: color, height: 1.2), textDirection: ltr));
          return Positioned(left: left ? null : px - 22, right: left ? box.maxWidth - px - 22 : null, top: py - 22,
              child: Semantics(button: true, label: word.isEmpty ? t('app_book_gap') : word, child: GestureDetector(behavior: HitTestBehavior.opaque, onTap: review || x.done ? null : () { HapticFeedback.selectionClick(); s.gapSel(bi, i); },
                  child: Directionality(textDirection: ltr, child: Row(mainAxisSize: MainAxisSize.min, children: [
                    if (left && tag != null) tag,
                    SizedBox(width: 44, height: 44, child: Center(child: dot)),
                    if (!left && tag != null) tag])))));
        }(),
      ]))))),
      const SizedBox(height: 12),
      if (!review && !s.done(bi)) ..._bankTiles(),
      ?fb,
      if (!s.test && !review && last != null && !st.items[last].done && st.items[last].tries >= 2) LinkBtn(t('app_book_show'), onTap: () => s.show(bi, last)),
    ];
  }

  /* ----- Sort into groups ----- */
  List<Widget> _sort(BuildContext context) {
    final b = s.blocks[bi], st = s.state[bi]!, review = _review, groups = b['groups'] as List, items = s.itemsOf(bi);
    final explainGroups = (b['explain'] as List? ?? const []).contains('groups');
    Widget word(int i, bool inGroup) {
      final it = items[i] as Map, x = st.items[i];
      final look = review ? (x.picked == it['g'] ? Look.right : Look.wrong) : x.done ? (x.shown ? Look.shown : Look.right) : x.flash ? Look.wrong : st.sel == i ? Look.sel : Look.idle;
      final off = review || x.done || (!s.test && inGroup);
      return Shake(n: x.tries, child: Tile('${it['s']}', look: look, size: 15.5, onTap: off ? null : () => s.sortPick(bi, i)));
    }
    final pool = st.order.where((i) => st.items[i].picked == null).toList();
    Widget group(int gi) {
      final inside = st.order.where((i) => st.items[i].picked == gi).toList(), ready = st.sel != null && !review;
      return Semantics(button: true, child: GestureDetector(behavior: HitTestBehavior.opaque, onTap: review || st.sel == null ? null : () { HapticFeedback.selectionClick(); s.sortDrop(bi, gi); },
          child: AnimatedContainer(duration: kFast, constraints: const BoxConstraints(minHeight: 96), padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(color: ready ? C.tLime : C.white, borderRadius: BorderRadius.circular(R.md), border: Border.all(color: ready ? C.forest : C.line, width: 2)),
              child: Column(children: [
                Padding(padding: const EdgeInsets.fromLTRB(4, 2, 4, 8), child: Md('${groups[gi]}', style: T.s(15.5, 700, color: C.forest, height: 1.25), dir: explainGroups ? null : ltr, align: TextAlign.center)),
                Directionality(textDirection: ltr, child: Wrap(spacing: 6, runSpacing: 6, alignment: WrapAlignment.center, children: [for (final i in inside) word(i, true)])),
              ]))));
    }
    Widget? fb;
    if (review) {
      final wrong = [for (var i = 0; i < items.length; i++) if (st.items[i].picked != (items[i] as Map)['g']) s.answerText(bi, i)];
      fb = wrong.isNotEmpty ? Feedback(false, t('app_book_answer_is_label'), answer: wrong.join(', ')) : Feedback(true, praise(bi, 0));
    } else if (!s.test && st.last != null) {
      final lx = st.items[st.last!], why = '${(items[st.last!] as Map)['why'] ?? ''}';
      if (lx.done) { fb = lx.shown ? Feedback(false, t('app_book_answer_is_label'), why: why, answer: s.answerText(bi, st.last!)) : Feedback(true, praise(bi, st.last!), why: why); }
      else if (lx.flash) { fb = Feedback(false, t('app_book_wrong')); }
    }
    final perRow = groups.length <= 3 ? groups.length : 2;
    return [
      if (pool.isNotEmpty) Padding(padding: const EdgeInsets.only(bottom: 12), child: Directionality(textDirection: ltr, child: Wrap(spacing: 8, runSpacing: 8, children: [for (final i in pool) word(i, false)]))),
      for (var r = 0; r < groups.length; r += perRow) Padding(padding: EdgeInsets.only(top: r == 0 ? 0 : 8), child: IntrinsicHeight(child: Row(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        for (var g = r; g < r + perRow; g++) ...[if (g > r) const SizedBox(width: 8), Expanded(child: g < groups.length ? group(g) : const SizedBox())]]))),
      ?fb,
    ];
  }

  /* ----- Memory pairs ----- */
  List<Widget> _memory(BuildContext context) {
    final st = s.state[bi]!, pairs = s.pairsOf(bi);
    final cols = math.min(pairs.length * 2 <= 6 ? 3 : 4, math.sqrt(pairs.length * 2).ceil()).clamp(2, 4);
    return [
      Directionality(textDirection: ltr, child: LayoutBuilder(builder: (context, box) {
        final w = (box.maxWidth - 8 * (cols - 1)) / cols;
        return Wrap(spacing: 8, runSpacing: 8, children: [for (final c in st.cards) () {
          final l = c >> 1, side = c & 1, got = st.got.contains(l), up = got || st.open.contains(c);
          return Semantics(button: true, label: up ? '${pairs[l][side]}' : t('app_ex_card'), excludeSemantics: true, child: GestureDetector(
              onTap: got ? null : () { HapticFeedback.selectionClick(); s.flip(bi, c); },
              child: TweenAnimationBuilder<double>(tween: Tween(end: up ? 1 : 0), duration: const Duration(milliseconds: 380), curve: Curves.easeInOut, builder: (_, v, _) {
                final face = v > .5;
                return Transform(alignment: Alignment.center, transform: Matrix4.identity()..setEntry(3, 2, .0015)..rotateY(math.pi * (face ? v - 1 : v)),
                    child: Container(width: w, height: w * .86, alignment: Alignment.center, padding: const EdgeInsets.all(6),
                        decoration: BoxDecoration(color: !face ? C.tMint : got ? C.mint : side == 1 ? C.tSun : C.white, borderRadius: BorderRadius.circular(R.md),
                            border: Border.all(color: !face ? C.forest : got ? C.forest : C.line, width: 2)),
                        child: face ? Text('${pairs[l][side]}', textAlign: TextAlign.center, style: T.s(14.5, 700, height: 1.2)) : SvgPicture.asset('assets/art/book-idle.svg', width: w * .42)));
              })));
        }()]);
      })),
      if (s.done(bi)) Feedback(true, praise(bi, 0)),
    ];
  }

  /* ----- Word search ----- */
  List<Widget> _search(BuildContext context) {
    final st = s.state[bi]!, g = s.searchOf(bi), words = s.blocks[bi]['words'] as List;
    return [
      Shake(n: st.misses, child: Directionality(textDirection: ltr, child: LayoutBuilder(builder: (context, box) {
        final cell = (box.maxWidth / g.size).floorToDouble();
        return Container(decoration: BoxDecoration(color: C.white, borderRadius: BorderRadius.circular(R.sm)), clipBehavior: Clip.antiAlias,
            child: Column(mainAxisSize: MainAxisSize.min, children: [for (var y = 0; y < g.size; y++) Row(mainAxisSize: MainAxisSize.min, children: [for (var x = 0; x < g.size; x++) () {
              var found = false;
              for (var w = 0; w < g.at.length; w++) { if (st.foundWords.contains(w) && onLine(g.at[w], x, y)) { found = true; break; } }
              final start = st.start != null && st.start![0] == x && st.start![1] == y;
              return GestureDetector(behavior: HitTestBehavior.opaque, onTap: () { HapticFeedback.selectionClick(); s.cell(bi, x, y); },
                  child: AnimatedContainer(duration: kFast, width: cell, height: cell, alignment: Alignment.center,
                      decoration: BoxDecoration(color: start ? C.lime : found ? C.mint : Colors.transparent, borderRadius: BorderRadius.circular(start ? cell / 2 : 4)),
                      child: Text(g.cells[y][x], style: T.s(math.min(18, cell * .56), 700, color: found || start ? C.forest : C.ink, height: 1))));
            }()])]));
      }))),
      const SizedBox(height: 12),
      Directionality(textDirection: ltr, child: Wrap(spacing: 14, runSpacing: 6, children: [for (final (k, w) in words.indexed)
        Text('$w', style: T.s(15.5, 700, color: st.foundWords.contains(k) ? C.muted : C.ink, height: 1.3).copyWith(decoration: st.foundWords.contains(k) ? TextDecoration.lineThrough : null))])),
      if (s.done(bi)) Feedback(true, praise(bi, 0)) else if (st.flash) Feedback(false, t('app_book_wrong')),
    ];
  }
}

/* ---------- The crossword grid, filled in as the learner types ---------- */
class _CrossGridView extends StatelessWidget {
  final ExSession s; final int bi;
  const _CrossGridView(this.s, this.bi);
  @override
  Widget build(BuildContext context) {
    final g = s.crossOf(bi);
    return Directionality(textDirection: ltr, child: LayoutBuilder(builder: (context, box) {
      final cell = math.min(38.0, (box.maxWidth / g.w).floorToDouble());
      return Center(child: SizedBox(width: cell * g.w, height: cell * g.h, child: Stack(children: [for (final c in g.cells) () {
        final l = s.crossLetter(bi, c);
        return Positioned(left: c.x * cell, top: c.y * cell, width: cell, height: cell, child: Container(margin: const EdgeInsets.all(1.5), alignment: Alignment.center,
            decoration: BoxDecoration(color: l.ok ? C.mint : C.white, borderRadius: BorderRadius.circular(6), border: Border.all(color: l.ok ? C.forest : C.line, width: 1.5)),
            child: Text(l.ch, style: T.s(cell * .5, 700, color: C.forest, height: 1))));
      }()])));
    }));
  }
}

/* ---------- Matching: two columns; matched pairs are joined by a drawn line ---------- */
class _MatchView extends StatefulWidget {
  final ExUi ui; final int bi;
  const _MatchView(this.ui, this.bi);
  @override
  State<_MatchView> createState() => _MatchState();
}

const _pairColors = [C.forest, C.gold, C.coral, C.mint, C.sun, C.muted];

class _MatchState extends State<_MatchView> {
  final _stack = GlobalKey();
  final _l = <int, GlobalKey>{}, _r = <int, GlobalKey>{};
  final _lines = ValueNotifier<List<(Offset, Offset, Color)>>(const []);

  ExSession get s => widget.ui.s;
  int get bi => widget.bi;

  @override
  void dispose() { _lines.dispose(); super.dispose(); }

  void _measure() {
    final box = _stack.currentContext?.findRenderObject() as RenderBox?;
    if (box == null || !box.hasSize) return;
    final st = s.state[bi]!, review = s.result != null;
    final pairs = s.test ? st.pairs : st.link;
    final out = <(Offset, Offset, Color)>[];
    for (final e in pairs.entries) {
      final a = _l[e.key]?.currentContext?.findRenderObject() as RenderBox?, b = _r[e.value]?.currentContext?.findRenderObject() as RenderBox?;
      if (a == null || b == null || !a.hasSize || !b.hasSize) continue;
      final p = box.globalToLocal(a.localToGlobal(Offset(a.size.width, a.size.height / 2))), q = box.globalToLocal(b.localToGlobal(Offset(0, b.size.height / 2)));
      final color = review ? (s.matchRight(bi, e.key, e.value) ? C.forest : C.bad) : s.test ? _pairColors[st.lo.indexOf(e.key) % 6] : C.forest;
      out.add((p, q, color));
    }
    _lines.value = out;
  }

  @override
  Widget build(BuildContext context) {
    final st = s.state[bi]!, pairs = s.pairsOf(bi), test = s.test, review = test && s.result != null;
    WidgetsBinding.instance.addPostFrameCallback((_) { if (mounted) _measure(); });
    Widget left(int l) {
      var look = Look.idle;
      if (review) { look = s.matchRight(bi, l, st.pairs[l]) ? Look.right : Look.wrong; }
      else if (test) { if (st.pairs[l] != null) look = Look.picked; }
      else if (st.got.contains(l)) { look = Look.right; }
      if (!review && st.sel == l) look = Look.sel;
      if (st.flashPair?.l == l) look = Look.wrong;
      final off = review || (!test && st.got.contains(l));
      return Padding(key: _l.putIfAbsent(l, GlobalKey.new), padding: const EdgeInsets.only(bottom: 8), child: Tile('${pairs[l][0]}', look: look, wide: true, md: false, size: 15, onTap: off ? null : () => s.matchLeft(bi, l)));
    }
    Widget right(int r) {
      int? owner;
      st.pairs.forEach((l, v) { if (v == r) owner = l; });
      var look = Look.idle;
      if (review) { if (owner != null) look = s.matchRight(bi, owner!, r) ? Look.right : Look.wrong; }
      else if (test) { if (owner != null) look = Look.picked; }
      else if (st.gotR.contains(r)) { look = Look.right; }
      if (st.flashPair?.r == r) look = Look.wrong;
      final off = review || (!test && st.gotR.contains(r));
      return Padding(key: _r.putIfAbsent(r, GlobalKey.new), padding: const EdgeInsets.only(bottom: 8), child: Tile('${pairs[r][1]}', look: look, wide: true, md: false, size: 15, onTap: off ? null : () => s.matchRightTap(bi, r)));
    }
    Widget? fb;
    String all(Iterable<int> ls) => ls.map((l) => '${pairs[l][0]} ${pairs[l][1]}').join(', ');
    if (review) {
      final wrong = [for (var l = 0; l < pairs.length; l++) if (!s.matchRight(bi, l, st.pairs[l])) l];
      fb = wrong.isNotEmpty ? Feedback(false, t('app_book_answer_is_label'), answer: all(wrong)) : Feedback(true, praise(bi, 0));
    } else if (!test && s.done(bi)) { fb = Feedback(true, praise(bi, 0)); }
    else if (!test && st.flashPair != null) { fb = Feedback(false, t('app_book_wrong')); }
    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Shake(n: st.err.length, child: Directionality(textDirection: ltr, child: Stack(key: _stack, children: [
        Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Expanded(child: Column(children: [for (final l in st.lo) left(l)])),
          const SizedBox(width: 30),
          Expanded(child: Column(children: [for (final r in st.ro) right(r)])),
        ]),
        Positioned.fill(child: IgnorePointer(child: ValueListenableBuilder(valueListenable: _lines, builder: (_, lines, _) => CustomPaint(painter: _Lines(lines))))),
      ]))),
      ?fb,
    ]);
  }
}

class _Lines extends CustomPainter {
  final List<(Offset, Offset, Color)> lines;
  _Lines(this.lines);
  @override
  void paint(Canvas canvas, Size size) {
    for (final (p, q, color) in lines) {
      final mid = (p.dx + q.dx) / 2;
      canvas.drawPath(Path()..moveTo(p.dx, p.dy)..cubicTo(mid, p.dy, mid, q.dy, q.dx, q.dy), Paint()..color = color..style = PaintingStyle.stroke..strokeWidth = 3..strokeCap = StrokeCap.round);
      canvas.drawCircle(p, 4.5, Paint()..color = color);
      canvas.drawCircle(q, 4.5, Paint()..color = color);
    }
  }
  @override
  bool shouldRepaint(_Lines old) => old.lines != lines;
}
