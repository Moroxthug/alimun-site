// The app's connection to Alimun: the same Supabase project, row rules and /api functions as the website
// (js/app/data.js). Home's data is kept on the phone so the app opens at once and without a connection.
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

const kSite = 'https://alimun.com';
// Publishable values, the same as in the website's pages (safe in an app)
const _url = 'https://dgaiasmefcbrtzqwdyri.supabase.co';
const _key = 'sb_publishable_6epxmytr0e38p6OI77U_NQ_8pFzrzlh';

const kLevels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const kCourses = ['English', 'German', 'French', 'Spanish', 'Italian', 'Portuguese'];
const kLive = ['English', 'German'];
const kGoals = ['relocation', 'professional', 'academic', 'pleasure', 'foundations'];
const kTimes = ['3_months', '6_months', '1_year', 'no_deadline'];
const kBuddies = {'English': 'teacup', 'German': 'pretzel', 'French': 'croissant', 'Spanish': 'churro', 'Italian': 'pizza', 'Portuguese': 'nata'};

SupabaseClient get sb => Supabase.instance.client;

Future<void> startApi() => Supabase.initialize(url: _url, publishableKey: _key);

String roleOf(User u) => (u.appMetadata['role'] ?? '').toString();

class Streak {
  final int days; final List<bool> week; final int todayIndex; final bool activeToday;
  Streak(this.days, this.week, this.todayIndex, this.activeToday);
  Map<String, dynamic> toJson() => {'days': days, 'week': week, 'todayIndex': todayIndex, 'activeToday': activeToday};
  static Streak fromJson(Map j) => Streak(j['days'] ?? 0, List<bool>.from(j['week'] ?? List.filled(7, false)), j['todayIndex'] ?? 0, j['activeToday'] ?? false);
}

String _dayKey(DateTime d) => '${d.year}-${d.month.toString().padLeft(2, '0')}-${d.day.toString().padLeft(2, '0')}';

/// Days in a row with any activity, ending today (or yesterday, so a streak is not lost before today's practice)
Streak streakFrom(Iterable<String?> stamps, [DateTime? now]) {
  final days = <String>{};
  for (final s in stamps) { final d = s == null ? null : DateTime.tryParse(s); if (d != null) days.add(_dayKey(d.toLocal())); }
  final n0 = now ?? DateTime.now();
  final today = DateTime(n0.year, n0.month, n0.day, 12);
  final activeToday = days.contains(_dayKey(today));
  var n = 0, d = activeToday ? today : today.subtract(const Duration(days: 1));
  while (days.contains(_dayKey(d))) { n++; d = d.subtract(const Duration(days: 1)); }
  final monday = today.subtract(Duration(days: (today.weekday + 6) % 7));
  return Streak(n, [for (var i = 0; i < 7; i++) days.contains(_dayKey(monday.add(Duration(days: i))))], (today.weekday + 6) % 7, activeToday);
}

class HomeData {
  final Map<String, dynamic> j;
  HomeData(this.j);
  Map<String, dynamic> get profile => Map<String, dynamic>.from(j['profile'] ?? {});
  String get id => profile['id'] ?? '';
  String get name => profile['name'] ?? '';
  String get firstName { final p = name.trim().split(RegExp(r'\s+')).first; return p.isEmpty ? '' : p[0].toUpperCase() + p.substring(1); }
  String get language => profile['language'] ?? '';
  String get level => profile['level'] ?? '';
  String get tier => profile['tier'] ?? 'free';
  bool get paying => profile['paying'] == true;
  bool get inClass => (profile['cohorts'] as List? ?? const []).isNotEmpty;
  Map<String, dynamic>? get nextClass => j['nextClass'] == null ? null : Map<String, dynamic>.from(j['nextClass']);
  int get flashcardsDue => j['flashcardsDue'] ?? 0;
  List get homework => j['homework'] ?? const [];
  Streak get streak => Streak.fromJson(j['streak'] ?? const {});
  List<String> get topics => List<String>.from(j['topics'] ?? const []);
  String? get placedLevel => (j['placement'] as Map?)?['level'];
  int get tutorSeconds => (j['tutor'] as Map?)?['seconds'] ?? 600;
  String get tutorNext => (j['tutor'] as Map?)?['next'] ?? '';
  bool offline = false;
}

List<Map<String, dynamic>> _rows(dynamic r) => r is List ? r.map((e) => Map<String, dynamic>.from(e as Map)).toList() : const [];

const _snapKey = 'alimun-home';

/// Home as it was at the last visit, for the signed-in learner (null when there is none)
Future<HomeData?> savedHome() async {
  try {
    final uid = sb.auth.currentUser?.id;
    final raw = (await SharedPreferences.getInstance()).getString(_snapKey);
    if (uid == null || raw == null) return null;
    final j = jsonDecode(raw) as Map<String, dynamic>;
    return j['uid'] == uid ? (HomeData(Map<String, dynamic>.from(j['data']))..offline = true) : null;
  } catch (_) { return null; }
}

Future<void> forgetHome() async { try { (await SharedPreferences.getInstance()).remove(_snapKey); } catch (_) {} }

/// The learner's profile row, or null when the account has none yet
Future<Map<String, dynamic>?> myProfile() async {
  final uid = sb.auth.currentUser?.id;
  if (uid == null) return null;
  return await sb.from('student_profiles')
      .select('id, full_name, language, level, tier, goal_track, goal_timeframe, placement, enrolled_cohort_id, timezone, stripe_subscription_status, plan_given_until, country')
      .eq('user_id', uid).maybeSingle();
}

Future<List<String>> _topicLabels(String language, List ids, String lang) async {
  if (ids.isEmpty) return [];
  try {
    final r = await http.get(Uri.parse('$kSite/data/level-test/${Uri.encodeComponent(language)}.json')).timeout(const Duration(seconds: 8));
    if (r.statusCode != 200) return ids.map((e) => '$e').toList();
    final bank = jsonDecode(utf8.decode(r.bodyBytes)) as Map<String, dynamic>;
    final ui = Map<String, dynamic>.from((bank['topicsI18n'] as Map?)?[lang == 'ma' ? 'fr' : lang] ?? {});
    final en = Map<String, dynamic>.from(bank['topics'] as Map? ?? {});
    return ids.map((id) => (ui[id] ?? en[id] ?? id).toString()).toList();
  } catch (_) { return ids.map((e) => '$e').toList(); }
}

/// Everything Home shows, read through the learner's own row rules (the same reads as js/app/data.js loadFor)
Future<HomeData> loadHome(Map<String, dynamic> p, String lang) async {
  final pid = p['id'] as String;
  final now = DateTime.now();
  final since = now.subtract(const Duration(days: 70)).toUtc().toIso8601String();
  final today = _dayKey(now);
  final enr = _rows(await sb.from('enrollments').select('cohort_id').eq('student_id', pid).eq('status', 'active'));
  final cohorts = <String>{for (final e in enr) e['cohort_id'] as String, if (p['enrolled_cohort_id'] != null) p['enrolled_cohort_id'] as String}.toList();

  Future<dynamic> safe(Future<dynamic> f) => f.then((v) => v, onError: (_) => null);
  final res = await Future.wait<dynamic>([
    cohorts.isEmpty ? Future.value(null) : safe(sb.from('sessions').select('id, scheduled_at, status, cohorts ( language, level, teacher_id )')
        .inFilter('cohort_id', cohorts).inFilter('status', ['scheduled', 'live'])
        .gte('scheduled_at', now.subtract(const Duration(minutes: 90)).toUtc().toIso8601String()).order('scheduled_at', ascending: true).limit(1)),
    cohorts.isEmpty ? Future.value(null) : safe(sb.from('assignments').select('id, title, due_date').inFilter('cohort_id', cohorts)
        .or('due_date.is.null,due_date.gte.$today').order('due_date', ascending: true, nullsFirst: false).limit(20)),
    safe(sb.from('assignment_submissions').select('assignment_id, submitted_at').eq('student_id', pid)),
    sb.from('vocab_reviews').select('id').eq('student_id', pid).lte('due_on', today).count(CountOption.exact),
    safe(sb.from('vocab_reviews').select('last_reviewed_at').eq('student_id', pid).gte('last_reviewed_at', since)),
    safe(sb.from('practice_progress').select('updated_at').eq('student_id', pid).gte('updated_at', since)),
    safe(sb.from('exercise_results').select('created_at').eq('student_id', pid).gte('created_at', since)),
    safe(sb.from('session_attendance').select('joined_at').eq('student_id', pid).gte('joined_at', since)),
    safe(sb.from('tutor_time').select('free_seconds, plan_seconds, credit_seconds').eq('student_id', pid).maybeSingle()),
    safe(sb.from('tutor_memory').select('notes').eq('student_id', pid).maybeSingle()),
  ]);

  final next = _rows(res[0]).isEmpty ? null : _rows(res[0]).first;
  var teacher = '';
  final tid = (next?['cohorts'] as Map?)?['teacher_id'];
  if (tid != null) {
    try { teacher = ((await sb.from('teachers_public').select('full_name').eq('id', tid).maybeSingle())?['full_name'] ?? '').toString(); } catch (_) {}
  }
  final subs = _rows(res[2]);
  final done = {for (final s in subs) s['assignment_id']};
  final stamps = <String?>[
    for (final s in subs) s['submitted_at'] as String?,
    for (final x in _rows(res[4])) x['last_reviewed_at'] as String?,
    for (final x in _rows(res[5])) x['updated_at'] as String?,
    for (final x in _rows(res[6])) x['created_at'] as String?,
    for (final x in _rows(res[7])) x['joined_at'] as String?,
  ];
  final placement = (p['placement'] is Map && (p['placement'] as Map)['level'] != null) ? Map<String, dynamic>.from(p['placement'] as Map) : null;
  final given = DateTime.tryParse('${p['plan_given_until'] ?? ''}');
  final givenActive = given != null && given.isAfter(now);
  final tt = res[8] as Map?;
  final co = Map<String, dynamic>.from(next?['cohorts'] as Map? ?? {});
  final data = <String, dynamic>{
    'profile': {
      'id': pid, 'name': p['full_name'] ?? '', 'language': p['language'] ?? placement?['language'] ?? '', 'level': p['level'] ?? placement?['level'] ?? '',
      'tier': p['tier'] ?? 'free', 'goal': p['goal_track'], 'timeframe': p['goal_timeframe'], 'timezone': p['timezone'], 'cohorts': cohorts,
      'paying': p['stripe_subscription_status'] == 'active' || givenActive, 'country': p['country'] ?? '',
    },
    'nextClass': next == null ? null : {'id': next['id'], 'at': next['scheduled_at'], 'live': next['status'] == 'live',
      'language': co['language'] ?? p['language'], 'level': co['level'] ?? p['level'], 'teacher': teacher},
    'flashcardsDue': (res[3] as PostgrestResponse).count,
    'homework': [for (final a in _rows(res[1])) if (!done.contains(a['id'])) a],
    'streak': streakFrom(stamps).toJson(),
    'placement': placement,
    'topics': placement == null ? [] : await _topicLabels('${placement['language'] ?? p['language']}', (placement['topics'] as List?) ?? const [], lang),
    'tutor': {
      'seconds': tt == null ? 600 : ((tt['free_seconds'] ?? 0) + (tt['plan_seconds'] ?? 0) + (tt['credit_seconds'] ?? 0)),
      'next': (((res[9] as Map?)?['notes'] as Map?)?['next'] ?? '').toString(),
    },
  };
  try { (await SharedPreferences.getInstance()).setString(_snapKey, jsonEncode({'uid': sb.auth.currentUser?.id, 'data': data})); } catch (_) {}
  return HomeData(data);
}

/// Asks for the password email through the site's own function (api/auth.js); the status says what happened
Future<int> askPasswordEmail(String email, String lang, String? captcha) async {
  final r = await http.post(Uri.parse('$kSite/api/auth?action=reset'),
      headers: {'Content-Type': 'application/json', 'X-Captcha-Token': captcha ?? ''},
      body: jsonEncode({'email': email, 'lang': lang == 'en' ? '' : lang, 'ui': lang})).timeout(const Duration(seconds: 20));
  return r.statusCode;
}
