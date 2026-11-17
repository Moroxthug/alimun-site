// Turning the pages of a lesson: the page on top lifts from its outer edge and turns over its spine, showing the
// next page underneath; going back, the previous page comes down again. A swipe follows the finger; a short flick
// or half a page is enough. Pages that are not open yet give a little and spring back.
import 'dart:math' as math;
import 'package:flutter/services.dart';
import 'package:material_ui/material_ui.dart';
import '../theme.dart';

class PageTurner extends StatefulWidget {
  final int count, index;
  final Widget Function(BuildContext, int) builder;
  /// May the learner go on to this page (the exercises before it are done)?
  final bool Function(int to) canGo;
  final ValueChanged<int> onChanged;
  final VoidCallback? onBlocked;
  const PageTurner({super.key, required this.count, required this.index, required this.builder, required this.canGo, required this.onChanged, this.onBlocked});
  @override
  State<PageTurner> createState() => _PageTurnerState();
}

class _PageTurnerState extends State<PageTurner> with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController.unbounded(vsync: this, value: widget.index.toDouble());
  int _from = 0;
  double _width = 1;
  bool _dragging = false;

  @override
  void initState() { super.initState(); _from = widget.index; }

  @override
  void didUpdateWidget(PageTurner old) {
    super.didUpdateWidget(old);
    if (widget.index != old.index && !_dragging && (_c.value - widget.index).abs() > .001) _settle(widget.index, tell: false);
  }

  @override
  void dispose() { _c.dispose(); super.dispose(); }

  void _settle(int to, {bool tell = true}) {
    final far = (_c.value - to).abs();
    final still = MediaQuery.of(context).disableAnimations;
    _c.animateTo(to.toDouble(), duration: Duration(milliseconds: still ? 1 : (260 + 300 * far.clamp(0, 1)).round()), curve: Curves.easeOutCubic).whenCompleteOrCancel(() {
      if (!mounted) return;
      _from = to;
    });
    if (tell && to != widget.index) { HapticFeedback.selectionClick(); widget.onChanged(to); }
  }

  void _start(DragStartDetails d) { _dragging = true; _c.stop(); _from = widget.index; }

  void _update(DragUpdateDetails d) {
    final rtl = Directionality.of(context) == TextDirection.rtl;
    var p = _c.value - (rtl ? -1 : 1) * d.primaryDelta! / _width;
    final lo = _from - 1 < 0 ? 0.0 : _from - 1.0;
    final hi = _from + 1 > widget.count - 1 ? widget.count - 1.0 : _from + 1.0;
    p = p.clamp(lo, hi);
    // A page that is not open yet gives a little
    if (p > _from && !widget.canGo(_from + 1)) p = math.min(p, _from + .08);
    _c.value = p;
  }

  void _end(DragEndDetails d) {
    _dragging = false;
    final rtl = Directionality.of(context) == TextDirection.rtl;
    final v = (rtl ? 1 : -1) * (d.primaryVelocity ?? 0), moved = _c.value - _from;
    var to = _from;
    if (moved > .001 && (moved > .32 || v > 500)) { to = _from + 1; } else if (moved < -.001 && (moved < -.32 || v < -500)) { to = _from - 1; }
    to = to.clamp(0, widget.count - 1);
    if (to > _from && !widget.canGo(to)) to = _from;
    if (to == _from && moved > .02 && !widget.canGo(_from + 1)) widget.onBlocked?.call();
    _settle(to);
  }

  @override
  Widget build(BuildContext context) {
    final rtl = Directionality.of(context) == TextDirection.rtl;
    return LayoutBuilder(builder: (context, box) {
      _width = box.maxWidth;
      return GestureDetector(behavior: HitTestBehavior.translucent, onHorizontalDragStart: _start, onHorizontalDragUpdate: _update, onHorizontalDragEnd: _end,
          onHorizontalDragCancel: () { if (_dragging) { _dragging = false; _settle(_from); } },
          child: AnimatedBuilder(animation: _c, builder: (context, _) {
            final p = _c.value.clamp(0, widget.count - 1.0);
            final base = p.floor().clamp(0, widget.count - 1), f = p - base;
            Widget page(int i) => KeyedSubtree(key: ValueKey('page-$i'), child: RepaintBoundary(child: widget.builder(context, i)));
            if (f < .0005) return Stack(fit: StackFit.expand, children: [page(base)]);
            final angle = f * math.pi / 2 * (rtl ? -1 : 1);
            return Stack(fit: StackFit.expand, children: [
              // The page underneath comes out of the shade as the one above lifts
              Stack(fit: StackFit.expand, children: [
                page(base + 1),
                IgnorePointer(child: DecoratedBox(decoration: BoxDecoration(borderRadius: BorderRadius.circular(R.xl), color: C.ink.withValues(alpha: .16 * (1 - f))))),
              ]),
              Transform(alignment: rtl ? Alignment.centerRight : Alignment.centerLeft,
                  transform: Matrix4.identity()..setEntry(3, 2, .0005)..rotateY(angle),
                  child: Stack(fit: StackFit.expand, children: [
                    page(base),
                    // The turning page darkens a little as it turns away
                    IgnorePointer(child: DecoratedBox(decoration: BoxDecoration(borderRadius: BorderRadius.circular(R.xl), color: C.ink.withValues(alpha: .12 * f)))),
                  ])),
            ]);
          }));
    });
  }
}
