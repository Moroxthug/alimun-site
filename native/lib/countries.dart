// The countries a learner can choose (the site's list, js/country.js), named in the app's language.
import 'dart:convert';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

Map<String, dynamic> _all = {};
Future<void> startCountries() async { _all = jsonDecode(await rootBundle.loadString('assets/countries.json')) as Map<String, dynamic>; }

List<(String, String)> countryOptions(String lang) =>
    [for (final c in (_all[lang] ?? _all['en'] ?? const []) as List) ((c as List)[0] as String, c[1] as String)];

/// The country of the phone's region setting, when it is one of the list
String guessCountry() {
  final c = (WidgetsBinding.instance.platformDispatcher.locale.countryCode ?? '').toUpperCase();
  return countryOptions('en').any((o) => o.$1 == c) ? c : '';
}
