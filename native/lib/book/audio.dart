// The recordings of the course books: plays one file or several in a row (a dialogue line by line, a reading
// paragraph by paragraph), from the phone when downloaded, else from the network. One sound at a time.
import 'dart:async';
import 'package:flutter/foundation.dart';
import 'package:just_audio/just_audio.dart';

class Sound extends ChangeNotifier {
  static final Sound I = Sound();
  AudioPlayer? _player;
  int _run = 0;
  /// Who is playing (the button that started it) and which of its files is being spoken
  Object? who;
  int at = -1;

  bool playing(Object w) => who == w;

  /// Plays the files one after another; tapping the same button again stops it
  Future<void> play(Object w, List<String> sources, {double rate = 1, void Function(int i)? onLine}) async {
    final same = who == w;
    await stop();
    if (same || sources.isEmpty) return;
    final run = ++_run;
    who = w; at = -1;
    notifyListeners();
    try {
      final p = _player ??= AudioPlayer();
      for (var i = 0; i < sources.length; i++) {
        if (run != _run) return;
        at = i;
        onLine?.call(i);
        notifyListeners();
        final s = sources[i];
        if (s.startsWith('http')) { await p.setUrl(s); } else { await p.setFilePath(s); }
        await p.setSpeed(rate);
        if (run != _run) return;
        await p.play();
        await p.stop();
        if (run != _run) return;
        await Future.delayed(const Duration(milliseconds: 250));
      }
    } catch (e) { debugPrint('[Alimun] Sound did not play: $e'); }
    if (run == _run) { who = null; at = -1; notifyListeners(); }
  }

  Future<void> stop() async {
    _run++;
    final was = who;
    who = null; at = -1;
    try { await _player?.stop(); } catch (_) {}
    if (was != null) notifyListeners();
  }
}
