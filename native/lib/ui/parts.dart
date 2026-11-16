// The shared parts of every screen: drawings, speech bubbles, the Alimun loader, buttons, cards, fields, the sheet
// for choosing from a list, line icons and the staggered arrival of a screen's parts.
import 'dart:math' as math;
import 'package:material_ui/material_ui.dart';
import 'package:flutter/services.dart';
import 'package:flutter_svg/flutter_svg.dart';
import '../theme.dart';

/* ---------- Line icons drawn for Alimun: 24px grid, 2px rounded strokes ---------- */
const _icons = {
  'home': '<path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z"/>',
  'book': '<path d="M12 6.5C10.4 5 8.2 4.5 4 4.8v13.4c4.2-.3 6.4.2 8 1.8 1.6-1.6 3.8-2.1 8-1.8V4.8c-4.2-.3-6.4.2-8 1.7z"/><path d="M12 6.5V20"/>',
  'practice': '<path d="M13 3 5.5 13.2H12L11 21l7.5-10.2H12z"/>',
  'tests': '<path d="M7 3.5h10M8.5 3.5v3.2a3.5 3.5 0 0 0 7 0V3.5"/><path d="M12 10.2v3.3"/><path d="M8 20.5h8M9.5 20.5l.8-7h3.4l.8 7"/>',
  'library': '<path d="M5 4v16M9.5 4v16"/><path d="m13.5 5.2 3.8-1 3.4 14.8-3.8 1z"/>',
  'classes': '<rect x="3" y="6" width="13" height="12" rx="3"/><path d="m16 10.5 5-3v9l-5-3"/>',
  'homework': '<path d="M14.5 4.5 19.5 9.5 9 20H4v-5z"/><path d="m12.5 6.5 5 5"/>',
  'progress': '<path d="M4 20V13M10 20V8M16 20v-5M20 20H3"/><path d="m14.5 6.5 3-3 3 3M17.5 3.5V11"/>',
  'messages': '<path d="M20 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.2A8 8 0 1 1 20 12z"/>',
  'tutor': '<rect x="3" y="4" width="18" height="12" rx="2.5"/><path d="M8 20h8M12 16v4M7.5 9.5h5M7.5 12h3"/>',
  'settings': '<circle cx="12" cy="12" r="3.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/>',
  'more': '<circle cx="5" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="19" cy="12" r="1.4"/>',
  'bell': '<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15z"/><path d="M10 21h4"/>',
  'arrow': '<path d="M5 12h14M13 6l6 6-6 6"/>',
  'cards': '<rect x="3.5" y="7" width="13" height="13" rx="2.5"/><path d="M8 4h10.5a2 2 0 0 1 2 2v10.5"/>',
  'back': '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  'check': '<path d="m5 12.5 4.5 4.5L19 7"/>',
  'close': '<path d="M6 6l12 12M18 6 6 18"/>',
  'down': '<path d="m6 9 6 6 6-6"/>',
  'eye': '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/>',
};
String _hex(Color c) => '#${(c.toARGB32() & 0xFFFFFF).toRadixString(16).padLeft(6, '0')}';

class LineIcon extends StatelessWidget {
  final String name; final double size; final Color color;
  const LineIcon(this.name, {super.key, this.size = 24, this.color = C.ink});
  @override
  Widget build(BuildContext context) {
    final flip = (name == 'arrow' || name == 'back') && Directionality.of(context) == TextDirection.rtl;
    final pic = SvgPicture.string(
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${_hex(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${_icons[name] ?? ''}</svg>',
        width: size, height: size);
    return flip ? Transform.flip(flipX: true, child: pic) : pic;
  }
}

/* ---------- Drawings from the approved cast, gently alive ---------- */
enum Motion { none, bob, sway, float, breathe }

class Art extends StatefulWidget {
  final String name; final double size; final Motion motion;
  const Art(this.name, {super.key, this.size = 132, this.motion = Motion.sway});
  @override
  State<Art> createState() => _ArtState();
}

class _ArtState extends State<Art> with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(vsync: this, duration: const Duration(milliseconds: 3000));
  @override
  void initState() { super.initState(); if (widget.motion != Motion.none) _c.repeat(reverse: true); }
  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (MediaQuery.of(context).disableAnimations) _c.stop();
  }
  @override
  void dispose() { _c.dispose(); super.dispose(); }
  @override
  Widget build(BuildContext context) {
    final pic = SvgPicture.asset('assets/art/${widget.name}.svg', width: widget.size, height: widget.size);
    if (widget.motion == Motion.none) return pic;
    return AnimatedBuilder(animation: _c, child: pic, builder: (_, child) {
      final v = Curves.easeInOut.transform(_c.value) * 2 - 1;
      switch (widget.motion) {
        case Motion.bob: return Transform.translate(offset: Offset(0, -4 * v - 4), child: child);
        case Motion.float: return Transform.translate(offset: Offset(0, -5 * v), child: child);
        case Motion.breathe: return Transform.scale(scaleY: 1 - .025 * (v + 1), alignment: Alignment.bottomCenter, child: child);
        default: return Transform.rotate(angle: v * .052, alignment: const Alignment(0, .9), child: child);
      }
    });
  }
}

/// A drawing on a soft tint with an optional speech bubble
class Stage extends StatelessWidget {
  final String art; final Color tint; final String? bubble; final double height; final Motion motion;
  const Stage({super.key, required this.art, this.tint = C.tMint, this.bubble, this.height = 190, this.motion = Motion.sway});
  @override
  Widget build(BuildContext context) => Container(
      width: double.infinity, constraints: BoxConstraints(minHeight: height), padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(color: tint, borderRadius: BorderRadius.circular(R.xl)),
      child: Column(mainAxisAlignment: MainAxisAlignment.end, children: [
        if (bubble != null && bubble!.isNotEmpty) ...[Align(alignment: AlignmentDirectional.topStart, child: Bubble(bubble!)), const SizedBox(height: 14)],
        Art(art, size: height * .64, motion: motion),
      ]));
}

class Bubble extends StatelessWidget {
  final String text;
  const Bubble(this.text, {super.key});
  @override
  Widget build(BuildContext context) => TweenAnimationBuilder<double>(
      tween: Tween(begin: 0, end: 1), duration: const Duration(milliseconds: 420), curve: kSpring,
      builder: (_, v, child) => Opacity(opacity: v.clamp(0, 1), child: Transform.scale(scale: .6 + .4 * v, alignment: Alignment.bottomLeft, child: child)),
      child: Container(
          constraints: const BoxConstraints(maxWidth: 230),
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 11),
          decoration: BoxDecoration(color: C.white, border: Border.all(color: C.forest, width: 3), borderRadius: BorderRadius.circular(6),
              boxShadow: const [BoxShadow(color: C.forest, offset: Offset(5, 5))]),
          child: Text(text, style: T.s(15, 600, height: 1.3))));
}

/* ---------- The owner's Alimun loader: two whirls and a spark around the mark ---------- */
class Loader extends StatefulWidget {
  final double size;
  const Loader({super.key, this.size = 148});
  @override
  State<Loader> createState() => _LoaderState();
}

class _LoaderState extends State<Loader> with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(vsync: this, duration: const Duration(milliseconds: 7800))..repeat();
  @override
  void dispose() { _c.dispose(); super.dispose(); }
  @override
  Widget build(BuildContext context) => SizedBox(width: widget.size, height: widget.size, child: Stack(alignment: Alignment.center, children: [
        Positioned.fill(child: AnimatedBuilder(animation: _c, builder: (_, _) => CustomPaint(painter: _Whirls(_c.value)))),
        SvgPicture.asset('assets/art/mark.svg', width: widget.size * .68, height: widget.size * .68),
      ]));
}

class _Whirls extends CustomPainter {
  final double v;
  _Whirls(this.v);
  static const _curve = Cubic(.62, .04, .4, .96);
  @override
  void paint(Canvas canvas, Size size) {
    final c = size.center(Offset.zero), r = size.width / 2;
    // Outer whirl: one turn every 1.5 s, eased; inner: the other way every 2.6 s
    final outerTurn = (v * 7.8 / 1.5), o = outerTurn.floor() + _curve.transform(outerTurn - outerTurn.floor());
    final inner = -(v * 7.8 / 2.6);
    void ring(double radius, double width, double turns, List<Color> colors, List<double> stops, double from) {
      final rect = Rect.fromCircle(center: c, radius: radius);
      final p = Paint()
        ..style = PaintingStyle.stroke..strokeWidth = width
        ..shader = SweepGradient(colors: colors, stops: stops, transform: GradientRotation(turns * 2 * math.pi + from - math.pi / 2)).createShader(rect);
      canvas.drawCircle(c, radius - width / 2, p);
    }
    ring(r, 2.5, o, [const Color(0x001A443C), const Color(0x141A443C), const Color(0x731A443C), C.forest, const Color(0x001A443C)], const [0, .19, .56, .89, 1], 0);
    ring(r * .87, 1.5, inner, [const Color(0x00D5AF33), const Color(0x00D5AF33), const Color(0x80D5AF33), const Color(0x00D5AF33)], const [0, .61, .92, 1], math.pi);
    final a = o * 2 * math.pi - math.pi / 2;
    canvas.drawCircle(c + Offset(math.cos(a), math.sin(a)) * (r - 2.5), 2.5, Paint()..color = C.gold);
  }
  @override
  bool shouldRepaint(_Whirls old) => old.v != v;
}

/* ---------- Something that presses under a finger ---------- */
class Pressable extends StatefulWidget {
  final Widget child; final VoidCallback? onTap; final double scale; final bool haptic;
  const Pressable({super.key, required this.child, this.onTap, this.scale = .97, this.haptic = true});
  @override
  State<Pressable> createState() => _PressableState();
}

class _PressableState extends State<Pressable> {
  bool _down = false;
  void _set(bool v) { if (mounted && _down != v) setState(() => _down = v); }
  @override
  Widget build(BuildContext context) => GestureDetector(
      behavior: HitTestBehavior.opaque,
      onTapDown: widget.onTap == null ? null : (_) => _set(true),
      onTapCancel: () => _set(false),
      onTapUp: (_) => _set(false),
      onTap: widget.onTap == null ? null : () { if (widget.haptic) HapticFeedback.selectionClick(); widget.onTap!(); },
      child: AnimatedScale(scale: _down ? widget.scale : 1, duration: kFast, curve: kEase, child: widget.child));
}

/* ---------- Buttons ---------- */
class Btn extends StatelessWidget {
  final String label; final VoidCallback? onTap; final bool ghost, busy, small, wide; final String? icon;
  const Btn(this.label, {super.key, this.onTap, this.ghost = false, this.busy = false, this.small = false, this.wide = false, this.icon});
  @override
  Widget build(BuildContext context) {
    final off = onTap == null || busy;
    final fg = ghost ? C.forest : C.lime;
    final h = small ? 44.0 : 54.0;
    return Semantics(button: true, enabled: !off, label: label, excludeSemantics: true, child: Opacity(opacity: onTap == null && !busy ? .45 : 1,
        child: Pressable(onTap: off ? null : onTap, child: AnimatedContainer(duration: kFast, height: h, width: wide ? double.infinity : null,
            padding: EdgeInsets.symmetric(horizontal: small ? 20 : 26),
            decoration: BoxDecoration(color: ghost ? Colors.transparent : C.forest, borderRadius: BorderRadius.circular(h / 2),
                border: ghost ? Border.all(color: C.forest, width: 2) : null),
            child: Row(mainAxisSize: wide ? MainAxisSize.max : MainAxisSize.min, mainAxisAlignment: MainAxisAlignment.center, children: [
              if (busy) SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2.4, color: fg)) else ...[
                Flexible(child: Text(label, style: T.button.copyWith(color: fg, fontSize: small ? 15 : 16), maxLines: 1, overflow: TextOverflow.ellipsis)),
                if (icon != null) ...[const SizedBox(width: 10), LineIcon(icon!, size: 20, color: fg)],
              ]
            ])))));
  }
}

class LinkBtn extends StatelessWidget {
  final String label; final VoidCallback? onTap; final double size;
  const LinkBtn(this.label, {super.key, this.onTap, this.size = 15});
  @override
  Widget build(BuildContext context) => Semantics(button: true, label: label, excludeSemantics: true, child: Pressable(onTap: onTap, child: Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Text(label, style: T.s(size, 700, color: C.forest, height: 1.3).copyWith(decoration: TextDecoration.underline, decorationColor: C.forest, decorationThickness: 1.5)))));
}

/* ---------- Cards ---------- */
class AppCard extends StatelessWidget {
  final Widget child; final Color color; final EdgeInsets padding; final VoidCallback? onTap;
  const AppCard({super.key, required this.child, this.color = C.white, this.padding = const EdgeInsets.all(22), this.onTap});
  @override
  Widget build(BuildContext context) {
    final box = Container(width: double.infinity, padding: padding,
        decoration: BoxDecoration(color: color, borderRadius: BorderRadius.circular(R.lg), boxShadow: kShadow), child: child);
    return onTap == null ? box : Pressable(onTap: onTap, scale: .985, child: box);
  }
}

/* ---------- Fields ---------- */
InputDecoration _fieldDeco({Widget? suffix}) => InputDecoration(
    filled: true, fillColor: C.white, isDense: true, suffixIcon: suffix,
    contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 15),
    enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(R.sm), borderSide: const BorderSide(color: C.line, width: 2)),
    focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(R.sm), borderSide: const BorderSide(color: C.forest, width: 2)),
    disabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(R.sm), borderSide: const BorderSide(color: C.line, width: 2)));

class Labeled extends StatelessWidget {
  final String label; final Widget child;
  const Labeled(this.label, this.child, {super.key});
  @override
  Widget build(BuildContext context) => Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text(label, style: T.label), const SizedBox(height: 6), child]);
}

class TextIn extends StatefulWidget {
  final String label; final TextEditingController controller; final bool password, email, enabled; final String? showLabel, hideLabel;
  final TextInputAction action; final ValueChanged<String>? onSubmitted; final Iterable<String>? autofill;
  const TextIn(this.label, this.controller, {super.key, this.password = false, this.email = false, this.enabled = true, this.showLabel, this.hideLabel,
      this.action = TextInputAction.next, this.onSubmitted, this.autofill});
  @override
  State<TextIn> createState() => _TextInState();
}

class _TextInState extends State<TextIn> {
  bool _hidden = true;
  @override
  Widget build(BuildContext context) => Labeled(widget.label, TextField(
      controller: widget.controller, enabled: widget.enabled, obscureText: widget.password && _hidden, style: T.body, cursorColor: C.forest,
      keyboardType: widget.email ? TextInputType.emailAddress : TextInputType.text,
      textCapitalization: widget.email || widget.password ? TextCapitalization.none : TextCapitalization.words,
      autocorrect: !widget.email && !widget.password, enableSuggestions: !widget.password,
      textInputAction: widget.action, onSubmitted: widget.onSubmitted, autofillHints: widget.autofill,
      scrollPadding: const EdgeInsets.only(bottom: 140),
      decoration: _fieldDeco(suffix: widget.password && widget.showLabel != null
          ? Padding(padding: const EdgeInsetsDirectional.only(end: 12), child: LinkBtn(_hidden ? widget.showLabel! : widget.hideLabel!, size: 14, onTap: () => setState(() => _hidden = !_hidden)))
          : null).copyWith(suffixIconConstraints: const BoxConstraints(minHeight: 0, minWidth: 0))));
}

/// A field that opens the app's own sheet to choose from a list
class PickIn<V> extends StatelessWidget {
  final String label, hint; final V? value; final List<(V, String)> options; final ValueChanged<V> onPick;
  const PickIn(this.label, {super.key, required this.hint, required this.value, required this.options, required this.onPick});
  @override
  Widget build(BuildContext context) {
    final cur = options.where((o) => o.$1 == value).toList();
    return Labeled(label, Semantics(button: true, label: '$label, ${cur.isEmpty ? hint : cur.first.$2}', excludeSemantics: true, child: Pressable(scale: .99,
        onTap: () async { FocusScope.of(context).unfocus(); final v = await pickSheet<V>(context, title: label, options: options, value: value); if (v != null) onPick(v); },
        child: Container(constraints: const BoxConstraints(minHeight: 52), padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 13),
            decoration: BoxDecoration(color: C.white, borderRadius: BorderRadius.circular(R.sm), border: Border.all(color: C.line, width: 2)),
            child: Row(children: [
              Expanded(child: Text(cur.isEmpty ? hint : cur.first.$2, style: cur.isEmpty ? T.bodyMuted : T.body)),
              const LineIcon('down', size: 20, color: C.forest)])))));
  }
}

/// The app's sheet for choosing one of a list: rises from the bottom, the chosen row in lime
Future<V?> pickSheet<V>(BuildContext context, {required String title, required List<(V, String)> options, V? value}) =>
    showModalBottomSheet<V>(context: context, isScrollControlled: true, backgroundColor: Colors.transparent, barrierColor: const Color(0x5C080808),
        builder: (ctx) => Container(
            constraints: BoxConstraints(maxHeight: MediaQuery.of(ctx).size.height * .78),
            decoration: const BoxDecoration(color: C.white, borderRadius: BorderRadius.vertical(top: Radius.circular(28))),
            child: Column(mainAxisSize: MainAxisSize.min, children: [
              const SizedBox(height: 10),
              Container(width: 44, height: 5, decoration: BoxDecoration(color: C.line, borderRadius: BorderRadius.circular(3))),
              Padding(padding: const EdgeInsets.fromLTRB(22, 16, 22, 8), child: Align(alignment: AlignmentDirectional.centerStart, child: Text(title.toUpperCase(), style: T.h3))),
              Flexible(child: ListView.builder(shrinkWrap: true, padding: EdgeInsets.fromLTRB(12, 0, 12, 16 + MediaQuery.of(ctx).padding.bottom), itemCount: options.length,
                  itemBuilder: (_, i) {
                    final o = options[i], on = o.$1 == value;
                    return Semantics(button: true, selected: on, label: o.$2, excludeSemantics: true, child: Pressable(scale: .985, onTap: () => Navigator.pop(ctx, o.$1),
                        child: Container(margin: const EdgeInsets.symmetric(vertical: 3), padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 15),
                            decoration: BoxDecoration(color: on ? C.lime : Colors.transparent, borderRadius: BorderRadius.circular(R.md)),
                            child: Row(children: [
                              Expanded(child: Text(o.$2, style: T.s(17, on ? 700 : 500, color: on ? C.forest : C.ink, height: 1.3))),
                              if (on) const LineIcon('check', size: 22, color: C.forest)]))));
                  })),
            ])));

class TickRow extends StatelessWidget {
  final String label; final bool value, enabled; final ValueChanged<bool> onChanged;
  const TickRow(this.label, {super.key, required this.value, required this.onChanged, this.enabled = true});
  @override
  Widget build(BuildContext context) => Semantics(checked: value, enabled: enabled, label: label, excludeSemantics: true, child: Pressable(scale: .99,
      onTap: enabled ? () => onChanged(!value) : null,
      child: Padding(padding: const EdgeInsets.symmetric(vertical: 6), child: Row(children: [
        AnimatedContainer(duration: kFast, width: 24, height: 24,
            decoration: BoxDecoration(color: value ? C.forest : C.white, borderRadius: BorderRadius.circular(7), border: Border.all(color: enabled ? C.forest : C.line, width: 2)),
            child: value ? const LineIcon('check', size: 16, color: C.lime) : null),
        const SizedBox(width: 12),
        Expanded(child: Text(label, style: enabled ? T.body : T.bodyMuted))]))));
}

/* ---------- The parts of a screen arrive one after another ---------- */
class Rise extends StatefulWidget {
  final int i; final Widget child;
  const Rise({super.key, this.i = 0, required this.child});
  @override
  State<Rise> createState() => _RiseState();
}

class _RiseState extends State<Rise> with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(vsync: this, duration: kSlow);
  @override
  void initState() {
    super.initState();
    Future.delayed(Duration(milliseconds: 60 * widget.i), () { if (mounted) _c.forward(); });
  }
  @override
  void dispose() { _c.dispose(); super.dispose(); }
  @override
  Widget build(BuildContext context) {
    if (MediaQuery.of(context).disableAnimations) return widget.child;
    final a = CurvedAnimation(parent: _c, curve: kEase);
    return FadeTransition(opacity: a, child: SlideTransition(position: Tween(begin: const Offset(0, .06), end: Offset.zero).animate(a), child: widget.child));
  }
}

List<Widget> risen(List<Widget> items, {double gap = 16}) => [
      for (var i = 0; i < items.length; i++) ...[if (i > 0) SizedBox(height: gap), Rise(i: i, child: items[i])]
    ];

class Msg extends StatelessWidget {
  final String text; final bool ok;
  const Msg(this.text, {super.key, this.ok = false});
  @override
  Widget build(BuildContext context) => AnimatedSize(duration: kFast, alignment: Alignment.topCenter, child: text.isEmpty
      ? const SizedBox(width: double.infinity)
      : Padding(padding: const EdgeInsets.only(top: 2), child: Semantics(liveRegion: true, child: Text(text, style: T.s(15, 600, color: ok ? C.forest : C.bad, height: 1.4)))));
}
