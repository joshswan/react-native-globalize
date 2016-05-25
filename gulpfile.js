/*!
 * React Native Globalize
 *
 * Copyright 2015-2016 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var filter = require('gulp-filter');
var merge = require('gulp-merge-json');
var path = require('path');
var Cldr = require('cldrjs');

var locales = [
  'am',           // Amharic
  'ar',           // Arabic
  'bg',           // Bulgarian
  'bn',           // Bengali
  'ca',           // Catalan
  'cs',           // Czech
  'da',           // Danish
  'de',           // German
  'el',           // Greek
  'en',           // English
  'en-GB',        // English (Great Britain)
  'en-US-POSIX',  // English (United States)
  'es',           // Spanish
  'es-419',       // Spanish (Latin America & Caribbean)
  'et',           // Estonian
  'fa',           // Persian
  'fi',           // Finnish
  'fil',          // Filipino
  'fr',           // French
  'gu',           // Gujarati
  'he',           // Hebrew
  'hi',           // Hindi
  'hr',           // Croatian
  'hu',           // Hungarian
  'id',           // Indonesian
  'it',           // Italian
  'ja',           // Japanese
  'kn',           // Kannada
  'ko',           // Korean
  'lt',           // Lithuanian
  'lv',           // Latvian
  'ml',           // Malayalam
  'mr',           // Marathi
  'ms',           // Malay
  'nb',           // Norwegian
  'nl',           // Dutch
  'pl',           // Polish
  'pt',           // Portuguese
  'pt-PT',        // Portuguese (Portugal)
  'ro',           // Romanian
  'ru',           // Russian
  'sk',           // Slovak
  'sl',           // Slovenian
  'sr',           // Serbian
  'sv',           // Swedish
  'sw',           // Swahili
  'ta',           // Tamil
  'te',           // Telugu
  'th',           // Thai
  'tr',           // Turkish
  'uk',           // Ukrainian
  'vi',           // Vietnamese
  'zh',           // Chinese
  'zh-Hans',      // Chinese (Simplified)
  'zh-Hant',      // Chinese (Traditional)
];

var files = ['ca-gregorian', 'currencies', 'dateFields', 'numbers', 'timeZoneNames'];
var supplemental = ['currencyData', 'likelySubtags', 'numberingSystems', 'ordinals', 'plurals', 'timeData', 'weekData'];
var cldrs = locales.map((x) => new Cldr(x));
var languages = cldrs.map((x) => x.attributes.language);
 

gulp.task('build', function() {
  gulp.src(['src/*.js', 'src/**/*.js'])
    .pipe(babel())
    .pipe(gulp.dest('lib'));

  gulp.src(['src/*.json'])
    .pipe(gulp.dest('lib'));
});

function removeUnusedLanguages(dict) {
  if (dict) {
    Object.keys(dict).forEach(function (key) {
      if (languages.indexOf(key) === -1) {
        delete dict[key];
      }
    });
  }
}

gulp.task('cldr', function() {
  var cldrFilter = filter(function(file) {
    return (locales.indexOf(path.dirname(file.path).split(path.sep).pop()) > -1 && files.indexOf(path.basename(file.path, '.json')) > -1) || (path.dirname(file.path).split(path.sep).pop() === 'supplemental' && supplemental.indexOf(path.basename(file.path, '.json')) > -1);
  });

  return gulp.src(['./node_modules/cldr-data/supplemental/*.json', './node_modules/cldr-data/main/**/*.json'])
    .pipe(cldrFilter)
    .pipe(merge('cldr.json', function(obj) {
      if (obj.main && obj.main['en-US-POSIX']) {
        obj.main['en-US'] = obj.main['en-US-POSIX'];
        delete obj.main['en-US-POSIX'];
        delete obj.main['en-US'].identity.variant;

        // Fix for en-US currency formatting
        if (obj.main['en-US'].numbers && obj.main['en-US'].numbers['currencyFormats-numberSystem-latn']) {
          obj.main['en-US'].numbers['currencyFormats-numberSystem-latn'].standard = '¤#,##0.00';
        }
      }

      // Cut out unused dates.timeZoneNames.zone and dates.timeZoneNames.metazone data
      if (obj.main) {
        // For language files, grab the first language, and filter stuff out
        var key = Object.keys(obj.main)[0];
        var data = obj.main[key];
        if (data && data.dates && data.dates.timeZoneNames) {
          data.dates.timeZoneNames.zone = {};
          data.dates.timeZoneNames.metazone = {};
        }
      }

      // Cut out unused languages from our supplemental files?
      if (obj.supplemental) {
        var languageDictKeys = ['plurals-type-ordinal', 'plurals-type-cardinal'];
        for (var key in languageDictKeys) {
          removeUnusedLanguages(obj.supplemental[languageDictKeys[key]]);
        }
      }

      return obj;
    }))
    .pipe(gulp.dest('src'));
});

gulp.task('default', ['build']);
