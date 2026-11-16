// The Alimun look (docs/DASHBOARD_PLAN.md section 1; CLAUDE.md design rules): the site and drawing palette,
// Coolvetica Condensed for display, Satoshi for everything read, large radii, soft shadows. Light only for now.
import 'package:cupertino_ui/cupertino_ui.dart' show CupertinoPageTransitionsBuilder;
import 'package:material_ui/material_ui.dart';

class C {
  static const ink = Color(0xFF080808);
  static const lime = Color(0xFFCEFF65);
  static const bone = Color(0xFFF0EFE9);
  static const white = Color(0xFFFFFFFF);
  static const forest = Color(0xFF1A443C);
  static const gold = Color(0xFFD5AF33);
  static const coral = Color(0xFFFF9F8A);
  static const mint = Color(0xFF9FD6C7);
  static const sun = Color(0xFFFFD166);
  static const tSun = Color(0xFFFFF4E0);
  static const tMint = Color(0xFFEAF6F2);
  static const tCoral = Color(0xFFFDEEE9);
  static const tLime = Color(0xFFF4FBE0);
  static const muted = Color(0x9E080808);
  static const line = Color(0x1A080808);
  static const onForest = Color(0xB8F0EFE9);
  static const bad = Color(0xFFB0472F);
}

class R {
  static const xl = 32.0, lg = 24.0, md = 16.0, sm = 12.0;
}

const _ease = Cubic(.2, .8, .2, 1);
const kEase = _ease;
const kSpring = Cubic(.3, 1.5, .5, 1);
const kFast = Duration(milliseconds: 160);
const kMid = Duration(milliseconds: 280);
const kSlow = Duration(milliseconds: 520);

TextStyle _satoshi(double size, double weight, {Color color = C.ink, double height = 1.5}) => TextStyle(
    fontFamily: 'Satoshi', fontSize: size, height: height, color: color,
    fontWeight: FontWeight.values[((weight / 100).round() - 1).clamp(0, 8)], fontVariations: [FontVariation('wght', weight)]);

class T {
  static TextStyle display(double size, {Color color = C.ink}) =>
      TextStyle(fontFamily: 'Coolvetica', fontSize: size, height: 1.0, color: color, letterSpacing: .2);
  static final h1 = display(38);
  static final h2 = display(29);
  static final h3 = display(24);
  static final lead = _satoshi(18, 400, color: C.muted);
  static final body = _satoshi(16, 400);
  static final bodyMuted = _satoshi(16, 400, color: C.muted);
  static final small = _satoshi(14, 400, color: C.muted, height: 1.45);
  static final tiny = _satoshi(12.5, 500, color: C.muted, height: 1.3);
  static final label = _satoshi(15, 700, height: 1.3);
  static final strong = _satoshi(17, 700, height: 1.3);
  static final button = _satoshi(16, 700, height: 1.2);
  static final num = display(46);
  static TextStyle s(double size, double weight, {Color color = C.ink, double height = 1.5}) => _satoshi(size, weight, color: color, height: height);
}

const kShadow = [BoxShadow(color: Color(0x14080808), blurRadius: 60, offset: Offset(0, 20))];
const kShadowLift = [BoxShadow(color: Color(0x21080808), blurRadius: 70, offset: Offset(0, 26))];

ThemeData alimunTheme() {
  final base = ThemeData(useMaterial3: true, brightness: Brightness.light, fontFamily: 'Satoshi',
      colorScheme: ColorScheme.fromSeed(seedColor: C.forest, brightness: Brightness.light).copyWith(
          primary: C.forest, onPrimary: C.lime, secondary: C.lime, onSecondary: C.forest, surface: C.white, onSurface: C.ink, error: C.bad));
  return base.copyWith(
    scaffoldBackgroundColor: C.bone,
    splashFactory: NoSplash.splashFactory,
    highlightColor: Colors.transparent,
    textSelectionTheme: const TextSelectionThemeData(cursorColor: C.forest, selectionColor: Color(0x559FD6C7), selectionHandleColor: C.forest),
    pageTransitionsTheme: const PageTransitionsTheme(builders: {
      TargetPlatform.android: CupertinoPageTransitionsBuilder(),
      TargetPlatform.iOS: CupertinoPageTransitionsBuilder(),
    }),
    textTheme: base.textTheme.apply(fontFamily: 'Satoshi', bodyColor: C.ink, displayColor: C.ink),
  );
}
