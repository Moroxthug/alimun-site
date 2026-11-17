// The app's exercise engine against the website's: the cases in test/fixtures/marking.json were made by running
// js/app/exercises.js on exercises from the course books (node native/tool/marking-cases.js). Every answer must be
// marked the same way here.
import 'dart:convert';
import 'dart:io';
import 'package:alimun/book/engine.dart';
import 'package:alimun/book/marking.dart';
import 'package:flutter_test/flutter_test.dart';

void play(ExSession s, List a) {
  final name = a[0] as String, bi = a[1] as int, i = a.length > 2 ? a[2] as int? : null, arg = a.length > 3 ? a[3] : null;
  switch (name) {
    case 'pick': s.pick(bi, i!, arg as Object);
    case 'value': s.setValue(bi, i!, arg as String);
    case 'check': s.check(bi);
    case 'show': s.show(bi, i!);
    case 'place': s.place(bi, i!, arg as int, true);
    case 'unplace': s.place(bi, i!, arg as int, false);
    case 'reset': s.resetTiles(bi, i!);
    case 'spot': s.spot(bi, i!, arg as int);
    case 'toggle': s.toggle(bi, i!, arg as int);
    case 'fixtap': s.fixTap(bi, i!, arg as int);
    case 'fixok': s.fixOk(bi, i!);
    case 'mleft': s.matchLeft(bi, arg as int);
    case 'mright': s.matchRightTap(bi, arg as int);
    case 'gapsel': s.gapSel(bi, i!);
    case 'bankpick': s.bankPick(bi, arg as int);
    case 'sortpick': s.sortPick(bi, i!);
    case 'sortdrop': s.sortDrop(bi, arg as int);
    case 'flip': s.flip(bi, arg as int);
    case 'cell': s.cell(bi, (arg as List)[0] as int, arg[1] as int);
    default: throw StateError('unknown action $name');
  }
}

Map snap(ExSession s) {
  final f = s.firstTally();
  return {'first': [f.right, f.total], 'done': [for (var i = 0; i < s.blocks.length; i++) s.done(i)], 'ready': [for (var i = 0; i < s.blocks.length; i++) s.ready(i)], 'allDone': s.allDone, 'allReady': s.allReady};
}

void main() {
  final fx = jsonDecode(File('test/fixtures/marking.json').readAsStringSync()) as Map<String, dynamic>;

  test('answers are normalised as on the website', () {
    for (final c in fx['norm'] as List) { expect(norm(c[0]), c[1], reason: 'norm of "${c[0]}"'); }
  });

  test('typed answers: the same ones are accepted', () {
    var n = 0;
    for (final x in fx['typed'] as List) {
      final s = ExSession([x['block']], test: true, language: x['language'], level: x['level']);
      for (final tr in x['tries'] as List) {
        final i = tr[0] as int;
        s.state[0]!.items[i].value = tr[1] as String;
        expect(s.isRight(0, i), tr[2], reason: '${x['language']} ${x['level']} ${x['block']['kind']}: "${tr[1]}" for ${jsonEncode(s.item(0, i))}');
        n++;
      }
    }
    expect(n, greaterThan(5000));
  });

  test('crosswords are laid out the same', () {
    for (final c in fx['cross'] as List) {
      final g = crossGrid(List<String>.from(c['words']));
      expect([g.w, g.h], [c['w'], c['h']], reason: '${c['words']}');
      expect([for (final x in g.cells) [x.x, x.y, x.of]], c['cells'], reason: '${c['words']}');
      expect([for (final w in g.words) [w.x, w.y, w.down ? 1 : 0, w.len]], c['at'], reason: '${c['words']}');
    }
  });

  test('word searches are laid out the same', () {
    for (final c in fx['search'] as List) {
      final g = searchGrid(c['words'] as List);
      expect(g.size, c['size'], reason: '${c['words']}');
      expect([for (final r in g.cells) r.join()], c['cells'], reason: '${c['words']}');
      expect(g.at, c['at'], reason: '${c['words']}');
    }
  });

  test('speaking: the same sentences count as said', () {
    for (final c in fx['spoken'] as List) { expect(spokenRight(c[0], c[1]), c[2], reason: '"${c[1]}" for "${c[0]}"'); }
  });

  test('whole exercises: lessons and tests end the same', () {
    final kinds = <String>{};
    for (final r in fx['runs'] as List) {
      final kind = r['blocks'][0]['kind'] as String;
      kinds.add(kind);
      final events = <List>[];
      final s = ExSession(r['blocks'] as List, test: r['test'] as bool, language: r['language'], level: r['level'], onItem: (bi, i, ok, k) => events.add([bi, i, ok, k]));
      for (final a in r['actions'] as List) { play(s, a as List); }
      final why = '$kind ${r['language']} ${r['level']} ${r['test'] ? 'test' : 'lesson'}: ${jsonEncode(r['actions'])}';
      if (r['test'] == true) {
        expect(snap(s), r['before'], reason: why);
        expect(s.submit(), r['score'], reason: why);
        expect([for (final x in s.results()) [x.bi, x.i, x.ok]], r['results'], reason: why);
      } else {
        expect(events, r['events'], reason: why);
        expect(snap(s), r['end'], reason: why);
      }
    }
    expect(kinds.length, 21);
  });
}
