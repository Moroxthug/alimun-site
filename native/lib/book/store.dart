// Where the course books come from and where progress goes (the website's js/app/reader.js and js/app/data.js):
// - the list of books and each book as a file per explanation language, kept on the phone once opened;
// - the free limit: the public file for free accounts, the complete file from /api/material for accounts with a plan;
// - progress in practice_progress (one row per finished lesson or unit test) and the practice memory in
//   practice_items, the same rows the website writes; what cannot be sent waits on the phone and goes out later;
// - the recordings plan of a book and the "Download for offline" of a whole book with its recordings.
import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:path_provider/path_provider.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import '../api.dart';

const kPass = 70;
const kAudioBase = 'https://dgaiasmefcbrtzqwdyri.supabase.co/storage/v1/object/public/course-audio/';
const kBookLangs = ['en', 'es', 'fr', 'de', 'pt', 'zh', 'ar', 'it'];
const kLangCodes = {'English': 'en', 'German': 'de', 'French': 'fr', 'Spanish': 'es', 'Italian': 'it', 'Portuguese': 'pt'};
const kGoalArt = {'relocation': 'suitcase', 'professional': 'mug', 'academic': 'owl', 'pleasure': 'sun'};

class Rec {
  final bool done; final int? score;
  const Rec(this.done, this.score);
  Map<String, dynamic> toJson() => {'done': done, 'score': score};
  static Rec fromJson(Map j) => Rec(j['done'] == true, (j['score'] as num?)?.round());
}

/// A book's recordings: the plan (which sentence has which file) and the files made so far
class AudioPlan {
  final String book; final Map<String, dynamic> items; final Map<String, dynamic> done; final String? dir;
  AudioPlan(this.book, this.items, this.done, this.dir);
  /// The recording of an item of a lesson: a file on the phone when downloaded, else its address; null when there is none
  String? src(String unit, String page, int block, int i) {
    final it = items['$unit:$page:$block:$i'];
    if (it is! List || it.isEmpty || !done.containsKey(it[0])) return null;
    return srcOf('${it[0]}');
  }
  String srcOf(String hash) {
    if (dir != null) { final f = File('$dir/$hash.mp3'); if (f.existsSync()) return f.path; }
    return '$kAudioBase${Uri.encodeComponent(book)}/$hash.mp3';
  }
}

/// Writes that could not be sent: kept in a file and sent in order when the connection is back
class Outbox {
  final File? file; final Future<void> Function(Map<String, dynamic> op) send;
  List<Map<String, dynamic>> ops = [];
  bool _busy = false;
  Outbox(this.file, this.send) {
    try { if (file != null && file!.existsSync()) ops = [for (final x in jsonDecode(file!.readAsStringSync()) as List) Map<String, dynamic>.from(x as Map)]; } catch (_) {}
  }
  void _keep() { try { file?.writeAsStringSync(jsonEncode(ops)); } catch (_) {} }
  /// Adds a write; a newer write of the same row takes the place of the one waiting
  void add(Map<String, dynamic> op) {
    ops.removeWhere((x) => x['table'] == op['table'] && x['key'] == op['key'] && x['uid'] == op['uid']);
    ops.add(op);
    _keep();
  }
  Iterable<Map<String, dynamic>> pending(String table, String uid) => ops.where((x) => x['table'] == table && x['uid'] == uid);
  /// Sends what is waiting for this account. Returns how many went out; stops at the first one the network refuses.
  Future<int> flush(String? uid) async {
    if (_busy || uid == null) return 0;
    _busy = true;
    var sent = 0;
    try {
      while (true) {
        final mine = ops.where((x) => x['uid'] == uid);
        if (mine.isEmpty) break;
        final op = mine.first;
        try { await send(op); }
        on PostgrestException catch (e) { debugPrint('[Alimun] Not saved, dropped: ${e.message}'); }
        catch (_) { break; }
        ops.remove(op);
        sent++;
        _keep();
      }
    } finally { _busy = false; }
    return sent;
  }
}

class BookStore extends ChangeNotifier {
  static BookStore I = BookStore();

  List<Map<String, dynamic>>? index;
  final Map<String, Map<String, dynamic>> books = {};          // by "<id>.<explanation language>"
  final Map<String, Map<String, Rec>> progress = {};           // by book id: { "book:<book>:<unit>:<lesson>": Rec }
  final Map<String, AudioPlan> audio = {};
  final Map<String, Map<String, dynamic>> _mem = {};           // practice memory by item key
  final Set<String> _open = {};                                // files with nothing locked in them
  bool? fullAccess;                                            // null until the server has answered
  String explain = 'mine';                                     // explanations in my language, or 'target'
  Directory? dir;
  Outbox? outbox;
  http.Client client = http.Client();
  String? _memFor;
  Timer? _retry;
  bool started = false;

  /* ---------- Start: the folder on the phone, the choices kept there, what is waiting to be sent ---------- */
  Future<void> start() async {
    if (started) return;
    started = true;
    try {
      dir = Directory('${(await getApplicationSupportDirectory()).path}/alimun');
      dir!.createSync(recursive: true);
    } catch (_) { dir = null; }
    try { explain = (await SharedPreferences.getInstance()).getString('alimun-book-explain') == 'target' ? 'target' : 'mine'; } catch (_) {}
    outbox = Outbox(dir == null ? null : File('${dir!.path}/outbox.json'), _send);
    flush();
  }

  Future<void> _send(Map<String, dynamic> op) async {
    await sb.from(op['table'] as String).upsert(Map<String, dynamic>.from(op['row'] as Map), onConflict: op['conflict'] as String).timeout(const Duration(seconds: 15));
  }

  String? get _uid { try { return sb.auth.currentUser?.id; } catch (_) { return null; } }

  /// Sends the answers given offline; tries again later while some are still waiting
  Future<void> flush() async {
    final o = outbox;
    if (o == null) return;
    try { await o.flush(_uid); } catch (_) {}
    _retry?.cancel();
    if (o.ops.isNotEmpty) _retry = Timer(const Duration(seconds: 40), flush);
  }
  int get waiting => outbox?.ops.length ?? 0;

  Future<void> setExplain(String v) async {
    explain = v;
    notifyListeners();
    try { (await SharedPreferences.getInstance()).setString('alimun-book-explain', v); } catch (_) {}
  }

  /* ---------- Files on the phone ---------- */
  File? _file(String rel) => dir == null ? null : File('${dir!.path}/$rel');
  dynamic _readJson(String rel) {
    try { final f = _file(rel); return f != null && f.existsSync() ? jsonDecode(f.readAsStringSync()) : null; } catch (_) { return null; }
  }
  void _write(String rel, String text) {
    try { final f = _file(rel); if (f == null) return; f.parent.createSync(recursive: true); f.writeAsStringSync(text); } catch (_) {}
  }

  Future<String> _get(String url, {Map<String, String>? headers, int seconds = 20}) async {
    final r = await client.get(Uri.parse(url), headers: headers).timeout(Duration(seconds: seconds));
    if (r.statusCode != 200) throw HttpException('$url ${r.statusCode}');
    return utf8.decode(r.bodyBytes);
  }

  /// A public file of the site (/data/...): the copy on the phone at once when there is one (refreshed for next time)
  Future<dynamic> _public(String rel) async {
    final saved = _readJson('public/$rel');
    final net = _get('$kSite/data/$rel').then((txt) { final j = jsonDecode(txt); _write('public/$rel', txt); return j; });
    if (saved != null) { net.then((_) {}, onError: (_) {}); return saved; }
    return net;
  }

  /// The complete file for accounts with a plan (null: no plan, signed out, or nothing in the file is locked)
  Future<dynamic> _fromServer(String rel) async {
    String? token;
    try { token = sb.auth.currentSession?.accessToken; } catch (_) {}
    if (token == null) return null;
    final r = await client.get(Uri.parse('$kSite/api/material?path=${Uri.encodeQueryComponent(rel)}'), headers: {'Authorization': 'Bearer $token'}).timeout(const Duration(seconds: 25));
    if (r.statusCode == 404) { _open.add(rel); return null; }
    if (r.statusCode == 403) { setAccess(false); return null; }
    if (r.statusCode == 401) return null;
    if (r.statusCode != 200) throw HttpException('material ${r.statusCode}');
    final txt = utf8.decode(r.bodyBytes);
    fullAccess ??= true;
    _write('material/$rel', txt);
    return jsonDecode(txt);
  }

  /// When a plan ends the complete files leave the phone and the free part is read again
  void setAccess(bool? full) {
    final was = fullAccess;
    fullAccess = full;
    if (full == false && was != false) {
      books.clear(); audio.clear();
      try { final d = Directory('${dir?.path}/material'); if (dir != null && d.existsSync()) d.deleteSync(recursive: true); } catch (_) {}
    }
  }

  /// Course material by its path under /data: complete with a plan, the free part otherwise (the free limit)
  Future<dynamic> material(String rel) async {
    if (fullAccess == false || _open.contains(rel)) return _public(rel);
    final hit = _readJson('material/$rel');
    final net = _fromServer(rel);
    if (hit != null) { net.then((_) {}, onError: (_) {}); return hit; }
    dynamic full;
    try { full = await net; } catch (_) {}
    return full ?? _public(rel);
  }

  /* ---------- Books ---------- */
  Future<List<Map<String, dynamic>>> loadIndex() async {
    if (index != null) return index!;
    final j = await _public('books/index.json');
    return index = [for (final b in (j['books'] as List? ?? const [])) Map<String, dynamic>.from(b as Map)];
  }

  Map<String, dynamic>? entry(String id) { for (final b in index ?? const <Map<String, dynamic>>[]) { if (b['id'] == id) return b; } return null; }

  String targetCode(Map book) => kLangCodes[book['language']] ?? 'en';
  String mineCode(String appLang) { final l = appLang == 'ma' ? 'fr' : appLang; return kBookLangs.contains(l) ? l : 'en'; }
  String explainCode(Map book, String appLang) => explain == 'target' ? targetCode(book) : mineCode(appLang);

  Future<Map<String, dynamic>> loadBook(String id, String lang) async {
    final k = '$id.$lang';
    return books[k] ??= Map<String, dynamic>.from(await material('books/$k.json') as Map);
  }

  /* ---------- Progress ---------- */
  static String keyOf(String book, String unit, String? page) => 'book:$book:$unit:${page ?? 'test'}';

  Future<Map<String, Rec>> loadProgress(String studentId, String bookId) async {
    if (progress[bookId] != null) return progress[bookId]!;
    final m = <String, Rec>{};
    final snap = 'progress/$studentId/$bookId.json';
    try {
      final rows = await sb.from('practice_progress').select('ex_key, done, graded_score').eq('student_id', studentId).like('ex_key', 'book:$bookId:%').limit(1000).timeout(const Duration(seconds: 12));
      for (final r in rows) { m['${r['ex_key']}'] = Rec(r['done'] == true, (r['graded_score'] as num?)?.round()); }
    } catch (_) {
      // No connection: progress as it was when last seen
      final saved = _readJson(snap);
      if (saved is Map) { for (final e in saved.entries) { m['${e.key}'] = Rec.fromJson(e.value as Map); } }
    }
    // Answers still waiting to be sent count as saved
    final uid = _uid;
    if (uid != null) {
      for (final x in outbox?.pending('practice_progress', uid) ?? const <Map<String, dynamic>>[]) {
        final row = x['row'] as Map;
        if ('${row['ex_key']}'.startsWith('book:$bookId:')) m['${row['ex_key']}'] = Rec(row['done'] == true, (row['graded_score'] as num?)?.round());
      }
    }
    _write(snap, jsonEncode({for (final e in m.entries) e.key: e.value.toJson()}));
    return progress[bookId] = m;
  }

  bool isDone(String book, String unit, String? page) => progress[book]?[keyOf(book, unit, page)]?.done == true;
  Rec? rec(String book, String unit, String? page) => progress[book]?[keyOf(book, unit, page)];

  /// Keeps the best score; a finished lesson or passed test stays finished
  void save(String studentId, String bookId, String key, {required bool done, int? score}) {
    final m = progress[bookId] ??= {};
    final old = m[key];
    var best = [old?.score ?? -1, score ?? -1].reduce((a, b) => a > b ? a : b);
    final next = Rec((old?.done ?? false) || done, best < 0 ? null : best);
    m[key] = next;
    _write('progress/$studentId/$bookId.json', jsonEncode({for (final e in m.entries) e.key: e.value.toJson()}));
    notifyListeners();
    final uid = _uid;
    if (uid == null || studentId.isEmpty) return;
    outbox?.add({'uid': uid, 'table': 'practice_progress', 'conflict': 'student_id,ex_key', 'key': key, 'row': {
      'student_id': studentId, 'ex_key': key, 'done': next.done, 'graded_score': next.score, 'user_answer': {'v': 1}, 'updated_at': DateTime.now().toUtc().toIso8601String()}});
    flush();
  }

  /* ---------- Practice memory: every item answered, so mistakes come back in practice rounds ---------- */
  static const _boxes = 6;
  Future<void> useMemory(String studentId) async {
    if (_memFor == studentId) return;
    _memFor = studentId;
    _mem.clear();
    final saved = _readJson('memory/$studentId.json');
    if (saved is Map) { for (final e in saved.entries) { _mem['${e.key}'] = Map<String, dynamic>.from(e.value as Map); } }
    try {
      final rows = await sb.from('practice_items').select('item_key, box, seen, wrong, last_at').eq('student_id', studentId).limit(5000).timeout(const Duration(seconds: 12));
      for (final x in rows) {
        final at = DateTime.tryParse('${x['last_at']}')?.millisecondsSinceEpoch ?? 0, mine = _mem['${x['item_key']}'];
        if (mine == null || (mine['at'] as num) < at) _mem['${x['item_key']}'] = {'b': x['box'], 'n': x['seen'], 'w': x['wrong'], 'at': at};
      }
      _write('memory/$studentId.json', jsonEncode(_mem));
    } catch (_) {}
  }

  /// One answer to one item (the first try counts), as js/app/practice.js records it
  void record(String studentId, String key, bool ok) {
    if (studentId.isEmpty) return;
    final r = Map<String, dynamic>.from(_mem[key] ?? {'b': 0, 'n': 0, 'w': 0});
    r['n'] = (r['n'] as num).toInt() + 1;
    r['at'] = DateTime.now().millisecondsSinceEpoch;
    // Right the first time it is seen: back in a week; right again after a mistake: one box up
    if (ok) { r['b'] = (r['n'] as int) > 1 || (r['w'] as num) > 0 ? ((r['b'] as num).toInt() + 1).clamp(0, _boxes - 1) : 3; }
    else { r['b'] = 0; r['w'] = (r['w'] as num).toInt() + 1; }
    _mem[key] = r;
    _write('memory/$studentId.json', jsonEncode(_mem));
    final uid = _uid;
    if (uid == null) return;
    outbox?.add({'uid': uid, 'table': 'practice_items', 'conflict': 'student_id,item_key', 'key': key, 'row': {
      'student_id': studentId, 'item_key': key, 'box': r['b'], 'seen': r['n'], 'wrong': r['w'], 'last_at': DateTime.fromMillisecondsSinceEpoch(r['at'] as int).toUtc().toIso8601String()}});
    flush();
  }
  Map<String, dynamic>? memory(String key) => _mem[key];

  /* ---------- Recordings ---------- */
  Future<AudioPlan> loadAudio(String id) async {
    if (audio[id] != null) return audio[id]!;
    Map<String, dynamic> items = {}, done = {};
    try { items = Map<String, dynamic>.from(((await material('audio/$id.json')) as Map)['items'] as Map? ?? {}); } catch (_) {}
    final rel = 'audio/$id/manifest.json';
    try {
      final txt = await _get('$kAudioBase${Uri.encodeComponent(id)}/manifest.json', seconds: 10);
      done = Map<String, dynamic>.from((jsonDecode(txt) as Map)['done'] as Map? ?? {});
      _write(rel, txt);
    } catch (_) {
      final saved = _readJson(rel);
      if (saved is Map) done = Map<String, dynamic>.from(saved['done'] as Map? ?? {});
    }
    final plan = AudioPlan(id, items, done, dir == null ? null : '${dir!.path}/audio/$id');
    // An empty answer while offline is not remembered, so the recordings appear once the connection is back
    if (items.isNotEmpty || done.isNotEmpty) audio[id] = plan;
    return plan;
  }

  /* ---------- Download for offline: the book in both explanation languages and its recordings ---------- */
  final Map<String, double> downloading = {};   // by book id: 0..1 while it runs
  final Set<String> downloadFailed = {};

  bool isDownloaded(String id) => _file('offline/$id.json')?.existsSync() ?? false;
  int downloadedBytes(String id) { final j = _readJson('offline/$id.json'); return j is Map ? (j['bytes'] as num? ?? 0).toInt() : 0; }

  Future<void> download(Map<String, dynamic> book, String appLang) async {
    final id = '${book['id']}';
    if (downloading.containsKey(id) || dir == null) return;
    downloading[id] = 0; downloadFailed.remove(id);
    notifyListeners();
    try {
      var bytes = 0;
      for (final lang in {mineCode(appLang), targetCode(book)}) {
        books.remove('$id.$lang');
        final b = await loadBook(id, lang);
        bytes += utf8.encode(jsonEncode(b)).length;
      }
      audio.remove(id);
      final plan = await loadAudio(id);
      final hashes = <String>{for (final it in plan.items.values) if (it is List && it.isNotEmpty && plan.done.containsKey(it[0])) '${it[0]}'}.toList();
      final folder = Directory('${dir!.path}/audio/$id')..createSync(recursive: true);
      var n = 0;
      Future<void> one(String h) async {
        final f = File('${folder.path}/$h.mp3');
        if (!f.existsSync() || f.lengthSync() == 0) {
          final r = await client.get(Uri.parse('$kAudioBase${Uri.encodeComponent(id)}/$h.mp3')).timeout(const Duration(seconds: 40));
          if (r.statusCode != 200) throw HttpException('audio ${r.statusCode}');
          f.writeAsBytesSync(r.bodyBytes);
        }
        bytes += f.lengthSync();
        n++;
        downloading[id] = hashes.isEmpty ? 1 : n / hashes.length;
        notifyListeners();
      }
      // Four files at a time
      for (var i = 0; i < hashes.length; i += 4) { await Future.wait([for (final h in hashes.skip(i).take(4)) one(h)]); }
      _write('offline/$id.json', jsonEncode({'bytes': bytes, 'files': hashes.length, 'at': DateTime.now().toIso8601String()}));
    } catch (_) { downloadFailed.add(id); }
    downloading.remove(id);
    notifyListeners();
  }

  void removeDownload(String id) {
    try { _file('offline/$id.json')?.deleteSync(); } catch (_) {}
    try { final d = Directory('${dir?.path}/audio/$id'); if (dir != null && d.existsSync()) d.deleteSync(recursive: true); } catch (_) {}
    notifyListeners();
  }

  /// Signing out: nothing of this learner stays in memory (their files stay for the next sign-in)
  void forget() { progress.clear(); _mem.clear(); _memFor = null; fullAccess = null; books.clear(); audio.clear(); _open.clear(); }
}

/* ---------- The shape of a book ---------- */
List<Map<String, dynamic>> unitsOf(Map book) => [for (final u in (book['units'] as List? ?? const [])) Map<String, dynamic>.from(u as Map)];
List<Map<String, dynamic>> written(Map book) => unitsOf(book).where((u) => u['planned'] != true).toList();
bool hasLocked(Map book) => unitsOf(book).any((u) => u['locked'] == true);
List<Map<String, dynamic>> pagesOf(Map unit) => [for (final p in (unit['pages'] as List? ?? const [])) Map<String, dynamic>.from(p as Map)];
int unitNo(Map book, Map unit) => unitsOf(book).indexWhere((u) => u['id'] == unit['id']) + 1;

/// The first lesson not finished, or the first unit test not passed: (unit, lesson or null for the test)
({Map<String, dynamic> unit, Map<String, dynamic>? page})? nextStop(BookStore s, Map book) {
  final id = '${book['id']}';
  for (final u in written(book)) {
    for (final p in pagesOf(u)) { if (!s.isDone(id, '${u['id']}', '${p['id']}')) return (unit: u, page: p); }
    if (!s.isDone(id, '${u['id']}', null)) return (unit: u, page: null);
  }
  return null;
}

({int done, int total}) unitShare(BookStore s, Map book, Map unit) {
  final id = '${book['id']}', pages = pagesOf(unit);
  var d = s.isDone(id, '${unit['id']}', null) ? 1 : 0;
  for (final p in pages) { if (s.isDone(id, '${unit['id']}', '${p['id']}')) d++; }
  return (done: d, total: pages.length + 1);
}
