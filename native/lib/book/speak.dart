// Speaking exercises: the phone records the learner saying the sentence, and the site's function turns the
// recording into text (/api/ai?action=transcribe, the same one the website uses); the engine compares the words.
// The recording is sent and not kept.
import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:path_provider/path_provider.dart';
import 'package:record/record.dart';
import '../api.dart';

class SpeechListener {
  final String code;   // the language being learned: en, de, fr, es, it, pt
  SpeechListener(this.code);
  AudioRecorder? _rec;
  Completer<void>? _over;
  Timer? _limit;

  /// Stops the recording (the learner tapped Stop, or fifteen seconds have passed)
  Future<void> stop() async { _limit?.cancel(); if (_over != null && !_over!.isCompleted) _over!.complete(); }

  /// Records until stop(), then returns what was heard. Throws the key of the text to show when it cannot.
  Future<String> listen(VoidCallback onWaiting) async {
    String? token;
    try { token = sb.auth.currentSession?.accessToken; } catch (_) {}
    if (token == null) throw 'app_ex_speak_signin';
    final rec = _rec ??= AudioRecorder();
    String path;
    try {
      if (!await rec.hasPermission()) throw 'app_ex_speak_mic_app';
      path = '${(await getTemporaryDirectory()).path}/alimun-say.m4a';
      await rec.start(const RecordConfig(encoder: AudioEncoder.aacLc, bitRate: 48000, sampleRate: 16000, numChannels: 1), path: path);
    } catch (e) {
      if (e is String) rethrow;
      debugPrint('[Alimun] Recording did not start: $e');
      throw 'app_ex_speak_mic_app';
    }
    _over = Completer<void>();
    _limit = Timer(const Duration(seconds: 15), stop);
    await _over!.future;
    onWaiting();
    try {
      final out = await rec.stop();
      final file = File(out ?? path);
      final bytes = await file.readAsBytes();
      try { file.deleteSync(); } catch (_) {}
      final r = await http.post(Uri.parse('$kSite/api/ai?action=transcribe'), headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer $token'},
          body: jsonEncode({'audio': base64Encode(bytes), 'mime': 'audio/mp4', 'language': code})).timeout(const Duration(seconds: 40));
      if (r.statusCode == 403) throw 'app_ex_speak_plan';
      if (r.statusCode == 429) throw 'app_ex_speak_limit';
      if (r.statusCode != 200) throw 'app_ex_speak_error';
      return ((jsonDecode(utf8.decode(r.bodyBytes)) as Map)['text'] ?? '').toString();
    } catch (e) {
      if (e is String) rethrow;
      throw 'app_ex_speak_error';
    }
  }

  void dispose() { _limit?.cancel(); try { _rec?.dispose(); } catch (_) {} }
}
