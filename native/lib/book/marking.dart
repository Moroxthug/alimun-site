// The marking rules of the exercise engine, ported from the website (js/app/exercises.js) so the app and the site
// accept the same answers: how answers are normalised, Spanish accents, the words to tap, word grids, crosswords,
// and words heard in a recording. Pure Dart, tested against the website's engine (test/marking_test.dart).
import 'dart:math' as math;

/// Case, spaces, curly or straight apostrophes and final punctuation are ignored
String norm(Object? s) => (s ?? '').toString().replaceAll(RegExp('[‘’ʼ`´]'), "'").replaceAll(RegExp(r'\s+'), ' ').trim()
    .replaceFirst(RegExp(r'[.!?]+$'), '').toLowerCase();

// Letters written with an acute accent or a diaeresis, and the letter without it (ñ stays a letter of its own)
const _plain = {
  'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ý': 'y', 'ć': 'c', 'ń': 'n', 'ś': 's', 'ź': 'z', 'ĺ': 'l', 'ŕ': 'r', 'ǵ': 'g', 'ḱ': 'k', 'ḿ': 'm', 'ṕ': 'p', 'ẃ': 'w',
  'ä': 'a', 'ë': 'e', 'ï': 'i', 'ö': 'o', 'ü': 'u', 'ÿ': 'y', 'ẅ': 'w', 'ẍ': 'x', 'ḧ': 'h', 'ǘ': 'u', 'ḯ': 'i',
};

/// Without Spanish written accents (á é í ó ú ü)
String bare(Object? s) {
  final b = StringBuffer();
  for (final r in norm(s).runes) {
    if (r == 0x301 || r == 0x308) continue;
    final c = String.fromCharCode(r);
    b.write(_plain[c] ?? c);
  }
  return b.toString();
}

/// Is `v` one of the accepted answers? `accentsFree`: Spanish up to B1, where a missing accent still counts
bool accepts(List list, Object? v, {bool accentsFree = false}) {
  final n = norm(v);
  if (list.any((a) => norm(a) == n)) return true;
  return accentsFree && list.any((a) => bare(a) == bare(n));
}

/// Right but for the accents (typed answers in Spanish)
bool accentOnly(List list, String value) {
  if (value.isEmpty) return false;
  final n = norm(value);
  return !list.any((a) => norm(a) == n) && list.any((a) => bare(a) == bare(n));
}

/// A small seeded random, so a generated grid is the same on every visit and on the website
double Function() seeded(String str) {
  var h = 2166136261;
  for (var i = 0; i < str.length; i++) { h ^= str.codeUnitAt(i); h = (h * 16777619) & 0xFFFFFFFF; }
  return () {
    h ^= (h << 13) & 0xFFFFFFFF;
    h ^= h >> 17;
    h ^= (h << 5) & 0xFFFFFFFF;
    return (h % 100000) / 100000;
  };
}

final _random = math.Random();
double _rnd() => _random.nextDouble();

/// The numbers 0..n-1 in a random order; with `avoidIdentity` never left in their own order
List<int> shuffle(int n, {bool avoidIdentity = false, double Function()? rnd}) {
  final r = rnd ?? _rnd;
  final a = [for (var i = 0; i < n; i++) i];
  for (var tries = 0; tries < 8; tries++) {
    for (var i = n - 1; i > 0; i--) { final j = (r() * (i + 1)).floor(); final x = a[i]; a[i] = a[j]; a[j] = x; }
    if (!avoidIdentity || n < 2) break;
    var moved = false;
    for (var k = 0; k < n; k++) { if (a[k] != k) { moved = true; break; } }
    if (moved) break;
  }
  return a;
}

/// A piece of a sentence whose words can be tapped: a word to find (target 0, 1, ...), another word, punctuation or a space
class Tok {
  final String text; final int target; final bool word, space;
  const Tok(this.text, {this.target = -1, this.word = false, this.space = false});
}

final _tokRe = RegExp(r'\[([^\]]+)\]|([^\s\[\]]+)|(\s+)');
final _letterRe = RegExp(r'[\p{L}\p{N}]', unicode: true);

/// "I [went] there" -> pieces; the words in brackets are the ones to find, numbered in order
List<Tok> spotTokens(String s) {
  final out = <Tok>[];
  var k = 0;
  for (final m in _tokRe.allMatches(s)) {
    if (m[1] != null) { out.add(Tok(m[1]!, target: k++)); }
    else if (m[2] != null) { out.add(Tok(m[2]!, word: _letterRe.hasMatch(m[2]!))); }
    else { out.add(const Tok(' ', space: true)); }
  }
  return out;
}

String upper(Object? s) => (s ?? '').toString().runes.map((r) { final c = String.fromCharCode(r); return c == 'ß' ? c : c.toUpperCase(); }).join();

/// The letters of a word for a grid: capitals, without spaces, apostrophes or hyphens
List<String> letters(Object? s) => upper((s ?? '').toString().replaceAll(RegExp(r"[\s'’\-]"), '')).runes.map(String.fromCharCode).toList();

/* ---------- Word search: words go right, down or diagonally down; the rest is filled with letters ---------- */
class SearchGrid {
  final int size; final List<List<String>> cells; final List<List<int>> at;
  SearchGrid(this.size, this.cells, this.at);
}

final _latinRe = RegExp('[A-ZÀ-ÖØ-Þß]');

SearchGrid searchGrid(List list) {
  final ws = [for (final w in list) letters(w)];
  final longest = ws.map((w) => w.length).reduce(math.max);
  final total = ws.fold<int>(0, (n, w) => n + w.length);
  var size = math.min(14, [longest + 1, math.sqrt(total * 2.4).ceil(), 8].reduce(math.max));
  final rnd = seeded(list.join('|'));
  const dirs = [[1, 0], [0, 1], [1, 1]];
  for (var attempt = 0; attempt < 40; attempt++) {
    final g = [for (var y = 0; y < size; y++) [for (var x = 0; x < size; x++) '']];
    final at = <List<int>>[];
    var ok = true;
    for (var w = 0; w < ws.length && ok; w++) {
      final word = ws[w];
      var placed = false;
      for (var tries = 0; tries < 200 && !placed; tries++) {
        final d = dirs[(rnd() * dirs.length).floor()];
        final x0 = (rnd() * (size - d[0] * (word.length - 1))).floor(), y0 = (rnd() * (size - d[1] * (word.length - 1))).floor();
        var fits = true;
        for (var k = 0; k < word.length; k++) { final v = g[y0 + d[1] * k][x0 + d[0] * k]; if (!(v == '' || v == word[k])) { fits = false; break; } }
        if (!fits) continue;
        for (var k = 0; k < word.length; k++) { g[y0 + d[1] * k][x0 + d[0] * k] = word[k]; }
        at.add([x0, y0, x0 + d[0] * (word.length - 1), y0 + d[1] * (word.length - 1)]);
        placed = true;
      }
      if (!placed) ok = false;
    }
    if (ok) {
      var pool = [for (final w in ws) ...w];
      if (pool.every(_latinRe.hasMatch)) pool = [...pool, ...'AEIOURSTNLMDCBGHPK'.split('')];
      for (var y = 0; y < size; y++) { for (var x = 0; x < size; x++) { if (g[y][x] == '') g[y][x] = pool[(rnd() * pool.length).floor()]; } }
      return SearchGrid(size, g, at);
    }
    if (attempt % 8 == 7) size++;
  }
  return SearchGrid(size, [], []);
}

/// Is the cell (x, y) on the line from (a0, a1) to (a2, a3)?
bool onLine(List<int> a, int x, int y) {
  final dx = (a[2] - a[0]).sign, dy = (a[3] - a[1]).sign, n = math.max((a[2] - a[0]).abs(), (a[3] - a[1]).abs());
  for (var k = 0; k <= n; k++) { if (a[0] + dx * k == x && a[1] + dy * k == y) return true; }
  return false;
}

/* ---------- Crossword: words cross where a letter is shared; a word that cannot cross goes below on its own ---------- */
class CrossCell { final int x, y; final List<int> of; CrossCell(this.x, this.y, this.of); }
class CrossWord { final int x, y, len; final bool down; CrossWord(this.x, this.y, this.down, this.len); }
class CrossGrid {
  final int w, h; final List<CrossCell> cells; final List<CrossWord> words;
  CrossGrid(this.w, this.h, this.cells, this.words);
}

class _Cell { final String ch; final int x, y; final List<int> of = []; bool a = false, d = false; _Cell(this.ch, this.x, this.y); }
class _Put { final int i, x, y, len; final bool down; _Put(this.i, this.x, this.y, this.down, this.len); }

CrossGrid crossGrid(List<String> answers) {
  final ws = [for (var i = 0; i < answers.length; i++) (i: i, l: letters(answers[i]))];
  // Longest first, words of the same length in their own order (a stable sort, as in the browser)
  for (var i = 1; i < ws.length; i++) {
    final w = ws[i];
    var j = i - 1;
    while (j >= 0 && ws[j].l.length < w.l.length) { ws[j + 1] = ws[j]; j--; }
    ws[j + 1] = w;
  }
  final cells = <String, _Cell>{};
  final placed = <_Put>[];
  String key(int x, int y) => '$x,$y';
  int can(List<String> w, int x, int y, bool down) {
    final dx = down ? 0 : 1, dy = down ? 1 : 0;
    var cross = 0;
    if (cells.containsKey(key(x - dx, y - dy)) || cells.containsKey(key(x + dx * w.length, y + dy * w.length))) return -1;
    for (var k = 0; k < w.length; k++) {
      final cx = x + dx * k, cy = y + dy * k, c = cells[key(cx, cy)];
      if (c != null) { if (c.ch != w[k] || (down ? c.d : c.a)) return -1; cross++; continue; }
      if (cells.containsKey(key(cx + dy, cy + dx)) || cells.containsKey(key(cx - dy, cy - dx))) return -1;
    }
    return cross;
  }
  void put(List<String> w, int x, int y, bool down, int i) {
    final dx = down ? 0 : 1, dy = down ? 1 : 0;
    for (var k = 0; k < w.length; k++) {
      final c = cells.putIfAbsent(key(x + dx * k, y + dy * k), () => _Cell(w[k], x + dx * k, y + dy * k));
      if (down) { c.d = true; } else { c.a = true; }
      c.of.add(i);
    }
    placed.add(_Put(i, x, y, down, w.length));
  }
  for (var n = 0; n < ws.length; n++) {
    final w = ws[n];
    if (n == 0) { put(w.l, 0, 0, false, w.i); continue; }
    ({int x, int y, bool down, int c})? best;
    for (final p in List<_Put>.of(placed)) {
      for (var k = 0; k < p.len; k++) {
        final px = p.x + (p.down ? 0 : k), py = p.y + (p.down ? k : 0), ch = cells[key(px, py)]!.ch;
        for (var j = 0; j < w.l.length; j++) {
          if (w.l[j] != ch) continue;
          final down = !p.down, x = down ? px : px - j, y = down ? py - j : py;
          final c = can(w.l, x, y, down);
          if (c > 0 && (best == null || c > best.c)) best = (x: x, y: y, down: down, c: c);
        }
      }
    }
    if (best != null) { put(w.l, best.x, best.y, best.down, w.i); }
    else {
      final maxY = cells.values.map((c) => c.y).reduce(math.max), minX = cells.values.map((c) => c.x).reduce(math.min);
      put(w.l, minX, maxY + 2, false, w.i);
    }
  }
  final all = cells.values.toList();
  final x0 = all.map((c) => c.x).reduce(math.min), y0 = all.map((c) => c.y).reduce(math.min);
  var gw = 0, gh = 0;
  final out = <CrossCell>[];
  for (final c in all) { out.add(CrossCell(c.x - x0, c.y - y0, c.of)); gw = math.max(gw, c.x - x0 + 1); gh = math.max(gh, c.y - y0 + 1); }
  final words = List<CrossWord?>.filled(answers.length, null);
  for (final p in placed) { words[p.i] = CrossWord(p.x - x0, p.y - y0, p.down, p.len); }
  return CrossGrid(gw, gh, out, [for (final w in words) w!]);
}

/* ---------- Speaking: the words of the sentence heard in the transcript, in order ---------- */
final _notWord = RegExp(r"[^\p{L}\p{N}' ]+", unicode: true);
List<String> words2(Object? s) => norm(s).replaceAll(_notWord, ' ').split(RegExp(r'\s+')).where((w) => w.isNotEmpty).toList();

({List<bool> hit, int n, int total}) spokenMatch(String want, String got) {
  final a = words2(want), b = words2(got);
  final m = [for (var i = 0; i <= a.length; i++) List<int>.filled(b.length + 1, 0)];
  for (var i = a.length - 1; i >= 0; i--) { for (var j = b.length - 1; j >= 0; j--) { m[i][j] = a[i] == b[j] ? m[i + 1][j + 1] + 1 : math.max(m[i + 1][j], m[i][j + 1]); } }
  final hit = List<bool>.filled(a.length, false);
  var n = 0, i = 0, j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] == b[j]) { hit[i] = true; n++; i++; j++; }
    else if (m[i + 1][j] >= m[i][j + 1]) { i++; } else { j++; }
  }
  return (hit: hit, n: n, total: a.length);
}

/// Right when at least 80% of the words come through in order (all of them for four words or fewer)
bool spokenRight(String want, String got) {
  final r = spokenMatch(want, got);
  return r.total == 0 ? false : (r.total <= 4 ? r.n == r.total : r.n / r.total >= 0.8);
}
