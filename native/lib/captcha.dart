// The check that a person is signing in. Supabase asks for a Cloudflare Turnstile token on sign-in, sign-up and
// password emails (docs/GROWTH_PLAN.md step 1). Turnstile only runs in a web view on alimun.com, so the app
// opens the small page /app/check.html out of sight, takes the token and closes it. When Cloudflare wants a tick,
// the check shows in an Alimun card ("One quick check"). This is the only web view in the app.
import 'dart:async';
import 'package:material_ui/material_ui.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'api.dart';
import 'i18n.dart';
import 'theme.dart';

const _texts = {
  'en': ['One quick check', 'Tick the box so we know you are a person. It only takes a second.'],
  'es': ['Una comprobación rápida', 'Marca la casilla para que sepamos que eres una persona. Solo lleva un segundo.'],
  'fr': ['Une petite vérification', 'Cochez la case pour nous montrer que vous êtes une personne. Cela ne prend qu’une seconde.'],
  'de': ['Eine kurze Prüfung', 'Setzen Sie das Häkchen, damit wir wissen, dass Sie ein Mensch sind. Es dauert nur eine Sekunde.'],
  'pt': ['Uma verificação rápida', 'Marque a caixa para sabermos que é uma pessoa. Demora só um segundo.'],
  'it': ['Un rapido controllo', 'Spunta la casella per farci sapere che sei una persona. Basta un secondo.'],
  'zh': ['快速验证', '请勾选方框，让我们确认您是真人。只需一秒钟。'],
  'ar': ['تحقق سريع', 'ضع علامة في المربع لنعرف أنك شخص حقيقي. لن يستغرق ذلك سوى ثانية.'],
};

/// A fresh token, or null when the check could not run (the server then refuses and the screen says so)
Future<String?> captchaToken(BuildContext context) =>
    showGeneralDialog<String>(context: context, barrierDismissible: false, barrierColor: Colors.transparent,
        transitionDuration: Duration.zero, pageBuilder: (_, _, _) => const _Check());

class _Check extends StatefulWidget {
  const _Check();
  @override
  State<_Check> createState() => _CheckState();
}

class _CheckState extends State<_Check> {
  late final WebViewController _web;
  bool _show = false, _done = false;
  Timer? _reveal, _giveUp;

  void _finish(String? token) {
    if (_done || !mounted) return;
    _done = true;
    Navigator.of(context).pop(token == null || token.isEmpty ? null : token);
  }

  @override
  void initState() {
    super.initState();
    _web = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setBackgroundColor(Colors.white)
      ..addJavaScriptChannel('AlimunCheck', onMessageReceived: (m) {
        if (m.message == 'show') { if (mounted) setState(() => _show = true); }
        else if (m.message.startsWith('token:')) { _finish(m.message.substring(6)); }
        else if (m.message == 'error') { _finish(null); }
      })
      ..setNavigationDelegate(NavigationDelegate(
          onNavigationRequest: (r) => r.url.startsWith('$kSite/app/check') || r.url.contains('challenges.cloudflare.com') || r.url.startsWith('about:')
              ? NavigationDecision.navigate : NavigationDecision.prevent,
          onWebResourceError: (e) { if (e.isForMainFrame ?? false) _finish(null); }))
      ..loadRequest(Uri.parse('$kSite/app/check.html?lang=${i18n.code}'));
    // If nothing has come back after a moment, Cloudflare is probably waiting for a tick: show the card
    _reveal = Timer(const Duration(seconds: 4), () { if (mounted && !_done) setState(() => _show = true); });
    _giveUp = Timer(const Duration(seconds: 60), () => _finish(null));
  }

  @override
  void dispose() { _reveal?.cancel(); _giveUp?.cancel(); super.dispose(); }

  @override
  Widget build(BuildContext context) {
    final tx = _texts[i18n.code] ?? _texts['en']!;
    return PopScope(canPop: false, onPopInvokedWithResult: (did, _) { if (!did) _finish(null); },
        child: IgnorePointer(ignoring: !_show, child: AnimatedOpacity(opacity: _show ? 1 : 0, duration: kMid,
            child: Container(color: const Color(0xD1F0EFE9), alignment: Alignment.center, padding: const EdgeInsets.all(16),
                child: Material(color: C.white, borderRadius: BorderRadius.circular(28), elevation: 0,
                    child: Container(constraints: const BoxConstraints(maxWidth: 380), padding: const EdgeInsets.fromLTRB(26, 28, 26, 24),
                        decoration: BoxDecoration(borderRadius: BorderRadius.circular(28), boxShadow: kShadowLift),
                        child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
                          Text(tx[0], style: T.display(34)), const SizedBox(height: 10),
                          Text(tx[1], style: T.s(15, 400, height: 1.55)), const SizedBox(height: 18),
                          SizedBox(height: 72, child: WebViewWidget(controller: _web)),
                        ])))))));
  }
}
