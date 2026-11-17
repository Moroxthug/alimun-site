// The exercise engine: the state and the rules of every exercise kind, ported from the website's engine
// (js/app/exercises.js; the format is in docs/BOOKS.md). No drawing here: lib/book/exercise_view.dart draws it.
// Lesson mode: each answer is checked straight away; wrong answers can be tried again and "Show the answer"
// appears after two wrong tries. Test mode: nothing is checked until submit().
import 'dart:async';
import 'package:flutter/foundation.dart';
import 'marking.dart';

const kLessonOnly = {'memory', 'search', 'speak'};
const _blockKinds = {'match', 'bank', 'label', 'sort', 'memory', 'search'};
const _typedKinds = {'gap', 'wordform', 'transform', 'conjugate', 'crossword'};
const _knownKinds = {'choice', 'odd', 'picture', 'tf', 'select', 'gap', 'wordform', 'transform', 'conjugate', 'crossword', 'order', 'build', 'spot', 'colloc', 'fix', 'speak', ..._blockKinds};

/// The instruction line under the heading, by kind (a text key), where the website shows one
const kHints = {
  'order': 'app_book_order_hint_tap', 'build': 'app_ex_build_hint', 'spot': 'app_book_spot_hint', 'colloc': 'app_ex_colloc_hint', 'fix': 'app_ex_fix_hint',
  'speak': 'app_ex_speak_hint', 'match': 'app_book_match_hint', 'bank': 'app_ex_bank_hint_tap', 'label': 'app_ex_label_hint_tap', 'sort': 'app_ex_sort_hint_tap',
  'memory': 'app_ex_memory_hint', 'search': 'app_ex_search_hint',
};

class ItemState {
  bool done = false, shown = false, flash = false;
  bool? first;
  int tries = 0;
  final Set<Object> wrong = {};
  Object? picked;
  String value = '';
  // choice, odd, picture, select, colloc: the order the options are shown in
  List<int> order = const [];
  // order, build: the sentence's words, every tile, the tiles as shown and the tiles placed
  List<String> words = const [], all = const [];
  List<int> pool = const [], placed = [];
  // spot, fix: the pieces of the sentence; spot and colloc: what is selected
  List<Tok> tokens = const [];
  int targets = 0;
  final Set<int> found = {}, sel = {};
  int? bad, hit;
  // speak
  String heard = '', state = '', note = '';
}

class BlockState {
  List<ItemState> items = [];
  // match
  List<int> lo = const [], ro = const [];
  int? sel;
  final Set<int> got = {}, gotR = {}, err = {};
  final Map<int, int> link = {}, pairs = {};
  ({int l, int r})? flashPair;
  // bank, label, sort
  List<String> bank = const [];
  List<int> order = const [];
  int? bad, last;
  // memory
  List<int> cards = const [];
  List<int> open = [];
  final Set<int> miss = {};
  bool busy = false;
  // search
  final Set<int> foundWords = {};
  List<int>? start;
  bool flash = false;
  int misses = 0;
}

class Tally { final int right, total; const Tally(this.right, this.total); }

class ExSession extends ChangeNotifier {
  final bool test;
  /// Spanish: accents are marked; `accentsFree` up to B1, where a missing accent still counts as right
  final bool spanish, accentsFree;
  late final List<Map<String, dynamic>> blocks;
  late List<BlockState?> state;
  int? result;
  /// After each answer in a lesson (ok: true, false, or null when the answer was shown)
  void Function(int bi, bool? ok)? onAnswer;
  /// After any change in a test
  VoidCallback? onChange;
  /// Once per item answered; the first try counts
  void Function(int bi, int i, bool ok, String kind)? onItem;
  final double Function()? _rnd;
  bool _gone = false;

  ExSession(List blocks, {this.test = false, String language = '', String level = 'A1', this.onAnswer, this.onChange, this.onItem, double Function()? random})
      : spanish = language == 'Spanish', accentsFree = language == 'Spanish' && const ['A1', 'A2', 'B1'].contains(level.toUpperCase()), _rnd = random {
    this.blocks = [for (final b in blocks) _normalize(Map<String, dynamic>.from(b as Map))];
    state = [for (final b in this.blocks) b['t'] == 'ex' ? _prepare(b) : null];
  }

  /// The same exercises in another explanation language: the answers given so far come along
  void adopt(ExSession old) { if (old.state.length == state.length) { state = old.state; result = old.result; } }

  @override
  void dispose() { _gone = true; super.dispose(); }
  void _redraw() { if (!_gone) notifyListeners(); }

  static bool isBlockKind(String kind) => _blockKinds.contains(kind);
  static bool isTyped(String kind) => _typedKinds.contains(kind);
  String kindOf(int bi) => (blocks[bi]['kind'] ?? '').toString();
  List itemsOf(int bi) => (blocks[bi]['items'] as List?) ?? const [];
  Map item(int bi, int i) => itemsOf(bi)[i] as Map;
  List pairsOf(int bi) => (blocks[bi]['pairs'] as List?) ?? const [];
  CrossGrid crossOf(int bi) => blocks[bi]['_grid'] as CrossGrid;
  SearchGrid searchOf(int bi) => blocks[bi]['_grid'] as SearchGrid;

  /* Some kinds are written in a short form and turned into items here */
  Map<String, dynamic> _normalize(Map<String, dynamic> b) {
    if (b['t'] != 'ex') return b;
    if (b['kind'] == 'conjugate') {
      b['items'] = [for (final r in b['rows'] as List) {'q': r[0], 'a': '${r[1]}'.split('|'), 'why': (r as List).length > 2 ? (r[2] ?? '') : ''}];
    } else if (b['kind'] == 'crossword') {
      final words = b['words'] as List;
      b['items'] = [for (final w in words) {'q': w['clue'], 'a': [w['a']], 'why': w['why'] ?? ''}];
      b['_grid'] = crossGrid([for (final w in words) '${w['a']}']);
    } else if (b['kind'] == 'search') {
      b['_grid'] = searchGrid(b['words'] as List);
    }
    return b;
  }

  List<int> _shuffle(int n, [bool avoid = false]) => shuffle(n, avoidIdentity: avoid, rnd: _rnd);

  BlockState _prepare(Map<String, dynamic> b) {
    final s = BlockState();
    final kind = '${b['kind']}';
    if (!_knownKinds.contains(kind)) return s;
    final items = (b['items'] as List?) ?? const [];
    switch (kind) {
      case 'match':
        final n = (b['pairs'] as List).length;
        s.lo = _shuffle(n); s.ro = _shuffle(n, true);
      case 'bank' || 'label':
        s.bank = [for (final it in items) '${it['a']}', for (final e in (b['extra'] as List?) ?? const []) '$e'];
        s.order = _shuffle(s.bank.length, true);
        s.items = [for (final _ in items) ItemState()];
        s.sel = 0;
      case 'sort':
        s.order = _shuffle(items.length, true);
        s.items = [for (final _ in items) ItemState()];
      case 'memory':
        s.cards = _shuffle((b['pairs'] as List).length * 2);
      case 'search':
        break;
      default:
        s.items = [for (final it in items) _prepItem(kind, it as Map)];
    }
    return s;
  }

  ItemState _prepItem(String kind, Map it) {
    final x = ItemState();
    switch (kind) {
      case 'choice' || 'odd' || 'picture' || 'select': x.order = _shuffle((it['o'] as List).length, true);
      case 'colloc': x.order = _shuffle((it['o'] as List).length);
      case 'order' || 'build':
        final w = '${it['a']}'.split(RegExp(r'\s+'));
        x.words = w;
        x.all = kind == 'build' ? [...w, for (final e in (it['extra'] as List?) ?? const []) '$e'] : w;
        x.pool = _shuffle(x.all.length, true);
      case 'spot':
        x.tokens = spotTokens('${it['s']}');
        x.targets = x.tokens.where((k) => k.target > -1).length;
      case 'fix': x.tokens = spotTokens('${it['s']}');
    }
    return x;
  }

  /* ---------- Right or wrong ---------- */
  bool isRight(int bi, int i) {
    final it = item(bi, i), x = state[bi]!.items[i];
    switch (kindOf(bi)) {
      case 'choice' || 'odd' || 'picture' || 'select': return x.picked == 0;
      case 'tf': return x.picked == it['a'];
      case 'gap' || 'wordform' || 'conjugate' || 'crossword': return accepts(it['a'] as List, x.value, accentsFree: accentsFree);
      // The answer may be written with or without the words given at the start
      case 'transform':
        final cue = '${it['cue'] ?? ''}';
        return accepts(it['a'] as List, x.value, accentsFree: accentsFree) || (cue.isNotEmpty && it['gap'] == null && accepts(it['a'] as List, '$cue ${x.value}', accentsFree: accentsFree));
      case 'order' || 'build': return x.placed.length == x.words.length && x.placed.map((w) => x.all[w]).join(' ') == x.words.join(' ');
      case 'spot':
        for (var k = 0; k < x.tokens.length; k++) { final tk = x.tokens[k]; if (!tk.space && (tk.target > -1) != x.sel.contains(k)) return false; }
        return true;
      case 'colloc':
        final a = it['a'] as List;
        for (var k = 0; k < (it['o'] as List).length; k++) { if (x.sel.contains(k) != a.contains(k)) return false; }
        return true;
      case 'fix': return x.hit != null && x.tokens[x.hit!].target > -1 && accepts(it['a'] as List, x.value, accentsFree: accentsFree);
      case 'speak': return spokenRight('${it['a']}', x.heard);
      case 'bank' || 'label': return bankRight(bi, i);
      case 'sort': return x.picked == it['g'];
    }
    return false;
  }

  bool matchRight(int bi, int l, int? r) => r != null && pairsOf(bi)[r][1] == pairsOf(bi)[l][1];
  bool bankRight(int bi, int i) { final s = state[bi]!, x = s.items[i]; return x.picked != null && norm(s.bank[x.picked as int]) == norm(item(bi, i)['a']); }

  /// The right answer as text, for "The answer:" (tf answers are 't', 'f' or 'ng': the view gives them their words)
  String answerText(int bi, int i) {
    final it = item(bi, i), x = state[bi]!.items[i];
    switch (kindOf(bi)) {
      case 'choice' || 'odd' || 'picture' || 'select': return '${(it['o'] as List)[0]}';
      case 'tf': return '${it['a']}';
      case 'order' || 'build' || 'speak': return '${it['a']}';
      case 'spot': return x.tokens.where((k) => k.target > -1).map((k) => k.text).join(', ');
      case 'colloc': return (it['a'] as List).map((k) => (it['o'] as List)[k as int]).join(', ');
      case 'fix':
        final w = x.tokens.where((k) => k.target > -1);
        return '${w.isEmpty ? '' : '${w.first.text} → '}${(it['a'] as List)[0]}';
      case 'bank' || 'label': return '${it['a']}';
      case 'sort': return '${it['s']} ${(blocks[bi]['groups'] as List)[it['g'] as int]}';
    }
    return '${(it['a'] as List)[0]}';
  }

  /// Right but for the accents (typed answers in Spanish)
  bool accentSlip(int bi, int i) {
    final a = item(bi, i)['a'];
    return spanish && a is List && accentOnly(a, state[bi]!.items[i].value);
  }

  bool _itemReady(int bi, int i) {
    final x = state[bi]!.items[i];
    switch (kindOf(bi)) {
      case 'choice' || 'odd' || 'picture' || 'tf' || 'select': return x.picked != null;
      case 'order' || 'build': return x.placed.length == x.words.length;
      case 'spot' || 'colloc': return x.sel.isNotEmpty;
      case 'fix': return x.hit != null && norm(x.value) != '';
      case 'speak': return x.heard.isNotEmpty;
    }
    return norm(x.value) != '';
  }

  bool _known(int bi) => _knownKinds.contains(kindOf(bi));

  /// Every question of the block has an answer (tests)
  bool ready(int bi) {
    if (blocks[bi]['t'] != 'ex' || !_known(bi)) return true;
    final s = state[bi]!;
    switch (kindOf(bi)) {
      case 'match': return s.pairs.length == pairsOf(bi).length;
      case 'bank' || 'label' || 'sort': return s.items.every((x) => x.picked != null);
      case 'memory': return s.got.length == pairsOf(bi).length;
      case 'search': return s.foundWords.length == (blocks[bi]['words'] as List).length;
    }
    for (var i = 0; i < s.items.length; i++) { if (!_itemReady(bi, i)) return false; }
    return true;
  }
  bool get allReady { for (var i = 0; i < blocks.length; i++) { if (!ready(i)) return false; } return true; }

  /// The block is finished (lessons)
  bool done(int bi) {
    if (blocks[bi]['t'] != 'ex' || !_known(bi)) return true;
    final s = state[bi]!;
    switch (kindOf(bi)) {
      case 'match' || 'memory': return s.got.length == pairsOf(bi).length;
      case 'search': return s.foundWords.length == (blocks[bi]['words'] as List).length;
    }
    return s.items.every((x) => x.done);
  }
  bool get allDone { for (var i = 0; i < blocks.length; i++) { if (!done(i)) return false; } return true; }

  /// Right first time (lessons)
  Tally firstTally() {
    var right = 0, total = 0;
    for (var bi = 0; bi < blocks.length; bi++) {
      if (blocks[bi]['t'] != 'ex' || !_known(bi)) continue;
      final s = state[bi]!;
      switch (kindOf(bi)) {
        case 'match': final n = pairsOf(bi).length; total += n; for (var l = 0; l < n; l++) { if (s.got.contains(l) && !s.err.contains(l)) right++; }
        case 'memory': final n = pairsOf(bi).length; total += n; for (var l = 0; l < n; l++) { if (!s.miss.contains(l)) right++; }
        case 'search': final n = (blocks[bi]['words'] as List).length; total += n; right += n - s.misses < 0 ? 0 : n - s.misses;
        default: total += s.items.length; right += s.items.where((x) => x.first == true).length;
      }
    }
    return Tally(right, total);
  }

  Tally _tally(int bi) {
    final s = state[bi]!;
    switch (kindOf(bi)) {
      case 'match': final n = pairsOf(bi).length; var r = 0; for (var l = 0; l < n; l++) { if (matchRight(bi, l, s.pairs[l])) r++; } return Tally(r, n);
      case 'memory': return Tally(s.got.length, pairsOf(bi).length);
      case 'search': return Tally(s.foundWords.length, (blocks[bi]['words'] as List).length);
    }
    var r = 0;
    for (var i = 0; i < s.items.length; i++) { if (isRight(bi, i)) r++; }
    return Tally(r, s.items.length);
  }

  /// Marks the test: the score out of 100. After it every block shows the right answers.
  int submit() {
    var right = 0, total = 0;
    for (var bi = 0; bi < blocks.length; bi++) {
      if (blocks[bi]['t'] != 'ex' || !_known(bi)) continue;
      final f = _tally(bi);
      right += f.right; total += f.total;
      state[bi]!.sel = null;
    }
    result = total == 0 ? 0 : (right / total * 100).round();
    _redraw();
    return result!;
  }

  /// After submit(): every item right or wrong (i: the item, or the pair for matching)
  List<({int bi, int i, bool ok})> results() {
    final out = <({int bi, int i, bool ok})>[];
    for (var bi = 0; bi < blocks.length; bi++) {
      if (blocks[bi]['t'] != 'ex' || !_known(bi)) continue;
      final s = state[bi]!, kind = kindOf(bi);
      if (kind == 'match') { for (var l = 0; l < pairsOf(bi).length; l++) { out.add((bi: bi, i: l, ok: matchRight(bi, l, s.pairs[l]))); } }
      else if (kind == 'memory' || kind == 'search') { continue; }
      else { for (var i = 0; i < s.items.length; i++) { out.add((bi: bi, i: i, ok: isRight(bi, i))); } }
    }
    return out;
  }

  /* ---------- Answering ---------- */
  void _mark(int bi, int i, ItemState x, bool ok) {
    if (ok) { x.done = true; x.flash = false; if (x.first == null) { x.first = true; onItem?.call(bi, i, true, kindOf(bi)); } }
    else { x.tries++; if (x.first == null) onItem?.call(bi, i, false, kindOf(bi)); x.first = false; x.flash = true; }
  }
  void _after(int bi, [bool? ok]) { if (test) { onChange?.call(); } else { onAnswer?.call(bi, ok); } }

  void pick(int bi, int i, Object o) {
    final x = state[bi]!.items[i];
    if (result != null) return;
    if (test) { x.picked = o; _redraw(); _after(bi); return; }
    if (x.done) return;
    x.picked = o;
    final ok = isRight(bi, i);
    if (!ok) x.wrong.add(o);
    _mark(bi, i, x, ok);
    _redraw();
    _after(bi, ok);
  }

  /// What is typed in a field (no marking; a wrong mark is cleared as on the website)
  void setValue(int bi, int i, String v) {
    final x = state[bi]!.items[i];
    if (result != null || x.done) return;
    x.value = v;
    final wasFlash = x.flash;
    x.flash = false;
    if (wasFlash || kindOf(bi) == 'crossword') _redraw();
    if (test) onChange?.call();
  }

  /// "Check": marks every typed answer of the block that is filled in
  void check(int bi) {
    if (test) return;
    final s = state[bi]!;
    bool? any;
    for (var i = 0; i < s.items.length; i++) {
      final x = s.items[i];
      if (x.done || norm(x.value) == '') continue;
      final ok = isRight(bi, i);
      _mark(bi, i, x, ok);
      any = any == false ? false : ok;
    }
    _redraw();
    _after(bi, any);
  }

  /// "Show the answer" (or "Skip this one" for speaking)
  void show(int bi, int i) {
    final s = state[bi]!, x = s.items[i], kind = kindOf(bi);
    if (kind == 'bank' || kind == 'label') {
      final want = norm(item(bi, i)['a']);
      final free = [for (var k = 0; k < s.bank.length; k++) if (norm(s.bank[k]) == want && !s.items.any((y) => y.picked == k)) k];
      x.picked = free.isNotEmpty ? free.first : i;
      s.sel = _nextGap(s, i);
    }
    x.done = true; x.shown = true; x.first = false; x.flash = false;
    _redraw();
    _after(bi, null);
  }

  void place(int bi, int i, int w, bool add) {
    final x = state[bi]!.items[i];
    if (result != null || x.done) return;
    x.placed = x.placed.where((v) => v != w).toList();
    if (add) x.placed.add(w);
    x.flash = false;
    bool? ok;
    if (!test && x.placed.length == x.words.length) { ok = isRight(bi, i); _mark(bi, i, x, ok); }
    _redraw();
    if (test) { _after(bi); } else if (ok != null) { _after(bi, ok); }
  }

  void resetTiles(int bi, int i) { final x = state[bi]!.items[i]; x.placed = []; x.flash = false; _redraw(); }

  void spot(int bi, int i, int ti) {
    final x = state[bi]!.items[i], tok = x.tokens[ti];
    if (result != null || x.done) return;
    if (test) { if (!x.sel.remove(ti)) x.sel.add(ti); _redraw(); _after(bi); return; }
    bool ok;
    if (tok.target > -1) {
      x.found.add(tok.target); x.sel.add(ti); x.bad = null; ok = true;
      if (x.found.length == x.targets) { x.done = true; x.flash = false; if (x.first == null) { x.first = true; onItem?.call(bi, i, true, 'spot'); } }
    } else { x.bad = ti; if (x.first == null) onItem?.call(bi, i, false, 'spot'); x.first = false; x.tries++; x.flash = true; ok = false; }
    _redraw();
    _after(bi, ok);
  }

  void toggle(int bi, int i, int k) {
    final a = item(bi, i)['a'] as List, x = state[bi]!.items[i];
    if (result != null || x.done) return;
    if (test) { if (!x.sel.remove(k)) x.sel.add(k); _redraw(); _after(bi); return; }
    bool ok;
    if (a.contains(k)) {
      x.sel.add(k); x.bad = null; ok = true; x.flash = false;
      if (a.every((r) => x.sel.contains(r))) { x.done = true; if (x.first == null) { x.first = true; onItem?.call(bi, i, true, 'colloc'); } }
    } else { x.bad = k; if (x.first == null) onItem?.call(bi, i, false, 'colloc'); x.first = false; x.tries++; x.flash = true; ok = false; }
    _redraw();
    _after(bi, ok);
  }

  void fixTap(int bi, int i, int ti) {
    final x = state[bi]!.items[i];
    if (result != null || x.done) return;
    if (test) { x.hit = x.hit == ti ? null : ti; _redraw(); _after(bi); return; }
    if (x.hit != null) return;
    if (x.tokens[ti].target > -1) { x.hit = ti; x.bad = null; x.flash = false; _redraw(); _after(bi, true); }
    else { x.bad = ti; if (x.first == null) onItem?.call(bi, i, false, 'fix'); x.first = false; x.tries++; x.flash = true; _redraw(); _after(bi, false); }
  }

  void fixOk(int bi, int i) {
    final x = state[bi]!.items[i];
    if (test || x.done || norm(x.value) == '') return;
    final ok = isRight(bi, i);
    _mark(bi, i, x, ok);
    _redraw();
    _after(bi, ok);
  }

  void matchLeft(int bi, int v) {
    final s = state[bi]!;
    if (result != null) return;
    if (!test && s.got.contains(v)) return;
    s.flashPair = null;
    if (test && s.pairs[v] != null && s.sel != v) s.pairs.remove(v);
    s.sel = s.sel == v ? null : v;
    _redraw();
    if (test) _after(bi);
  }

  void matchRightTap(int bi, int v) {
    final s = state[bi]!;
    if (result != null) return;
    if (!test && s.gotR.contains(v)) return;
    s.flashPair = null;
    if (s.sel == null) return;
    final l = s.sel!;
    if (test) {
      s.pairs.removeWhere((k, r) => r == v);
      s.pairs[l] = v; s.sel = null;
      _redraw(); _after(bi);
      return;
    }
    final ok = matchRight(bi, l, v) && !s.gotR.contains(v);
    if (!s.got.contains(l) && !s.err.contains(l)) onItem?.call(bi, l, ok, 'match');
    if (ok) { s.got.add(l); s.gotR.add(v); s.link[l] = v; s.sel = null; }
    else { s.err.add(l); s.flashPair = (l: l, r: v); s.sel = null; }
    _redraw();
    _after(bi, ok);
  }

  int? _nextGap(BlockState s, int from) {
    final n = s.items.length;
    for (var k = 1; k <= n; k++) { final j = (from + k) % n; if (!s.items[j].done && s.items[j].picked == null) return j; }
    for (var k = 1; k <= n; k++) { final j = (from + k) % n; if (!s.items[j].done) return j; }
    return null;
  }

  void gapSel(int bi, int i) {
    final s = state[bi]!;
    if (result != null || s.items[i].done) return;
    if (test && s.sel == i && s.items[i].picked != null) s.items[i].picked = null;
    s.sel = i; s.bad = null;
    _redraw();
    if (test) _after(bi);
  }

  void bankPick(int bi, int w) {
    final s = state[bi]!;
    if (result != null) return;
    final i = s.sel != null && !s.items[s.sel!].done ? s.sel : _nextGap(s, -1);
    if (i == null) return;
    final x = s.items[i];
    s.bad = null;
    if (test) {
      for (final y in s.items) { if (y.picked == w) y.picked = null; }
      x.picked = w; s.sel = _nextGap(s, i);
      _redraw(); _after(bi);
      return;
    }
    if (s.items.any((y) => y.picked == w)) return;
    final ok = norm(s.bank[w]) == norm(item(bi, i)['a']);
    s.last = i;
    if (ok) { x.picked = w; _mark(bi, i, x, true); s.sel = _nextGap(s, i); }
    else { _mark(bi, i, x, false); s.bad = w; }
    _redraw();
    _after(bi, ok);
  }

  void sortPick(int bi, int i) {
    final s = state[bi]!;
    if (result != null || s.items[i].done) return;
    if (test && s.items[i].picked != null) { s.items[i].picked = null; s.sel = i; _redraw(); _after(bi); return; }
    s.sel = s.sel == i ? null : i;
    for (final y in s.items) { y.flash = false; }
    _redraw();
  }

  void sortDrop(int bi, int g) {
    final s = state[bi]!, i = s.sel;
    if (result != null || i == null) return;
    final x = s.items[i];
    if (test) { x.picked = g; s.sel = null; _redraw(); _after(bi); return; }
    final right = item(bi, i)['g'] as int, ok = right == g;
    s.last = i;
    if (ok) { x.picked = g; _mark(bi, i, x, true); s.sel = null; }
    else {
      _mark(bi, i, x, false);
      s.sel = null;
      // After a second wrong try the word goes to its group, with the explanation
      if (x.tries >= 2) { x.picked = right; x.done = true; x.shown = true; x.flash = false; }
    }
    _redraw();
    _after(bi, ok);
  }

  void flip(int bi, int c) {
    final s = state[bi]!;
    if (s.busy || s.got.contains(c >> 1) || s.open.contains(c)) return;
    s.open.add(c);
    if (s.open.length < 2) { _redraw(); return; }
    final p = s.open[0], ok = (p >> 1) == (c >> 1);
    if (ok) { s.got.add(c >> 1); s.open = []; _redraw(); onItem?.call(bi, c >> 1, true, 'memory'); _after(bi, true); return; }
    s.miss.add(p >> 1); s.miss.add(c >> 1);
    s.busy = true;
    _redraw();
    Timer(const Duration(milliseconds: 950), () { s.open = []; s.busy = false; _redraw(); });
    _after(bi, false);
  }

  void cell(int bi, int x, int y) {
    final s = state[bi]!;
    s.flash = false;
    if (s.start == null) { s.start = [x, y]; _redraw(); return; }
    final a = s.start!;
    s.start = null;
    var hit = -1;
    final at = searchOf(bi).at;
    for (var w = 0; w < at.length; w++) {
      if (s.foundWords.contains(w)) continue;
      final p = at[w];
      if ((p[0] == a[0] && p[1] == a[1] && p[2] == x && p[3] == y) || (p[2] == a[0] && p[3] == a[1] && p[0] == x && p[1] == y)) hit = w;
    }
    if (a[0] == x && a[1] == y) { _redraw(); return; }
    if (hit > -1) { s.foundWords.add(hit); _redraw(); _after(bi, true); }
    else { s.flash = true; s.misses++; _redraw(); _after(bi, false); }
  }

  /* ---------- Speaking: the host records and transcribes; the engine marks what was heard ---------- */
  void speakState(int bi, int i, {String? state, String? note}) {
    final x = this.state[bi]!.items[i];
    if (state != null) x.state = state;
    if (note != null) x.note = note;
    _redraw();
  }

  void speakHeard(int bi, int i, String text) {
    final x = state[bi]!.items[i];
    x.state = ''; x.heard = text.isEmpty ? '…' : text;
    final ok = spokenRight('${item(bi, i)['a']}', x.heard);
    x.note = ok ? '' : 'app_ex_speak_try';
    _mark(bi, i, x, ok);
    _redraw();
    _after(bi, ok);
  }

  /// The letter a crossword cell shows, from what is typed in the words that cross it
  ({String ch, bool ok}) crossLetter(int bi, CrossCell cell) {
    final g = crossOf(bi), s = state[bi]!;
    for (final i in cell.of) {
      final w = g.words[i], x = s.items[i];
      final k = w.down ? cell.y - w.y : cell.x - w.x;
      final v = x.done && x.shown ? letters((item(bi, i)['a'] as List)[0]) : letters(x.value);
      if (k < v.length) return (ch: v[k], ok: result != null ? isRight(bi, i) : x.done);
    }
    return (ch: '', ok: false);
  }
}
