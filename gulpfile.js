/*!
 * React Native Globalize
 *
 * Copyright 2015-2019 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

const gulp = require('gulp');
const filter = require('gulp-filter');
const merge = require('gulp-merge-json');
const path = require('path');
const Cldr = require('cldrjs');

const locales = [
  'am',           // Amharic
  'ar',           // Arabic
  'bg',           // Bulgarian
  'bn',           // Bengali
  'ca',           // Catalan
  'cs',           // Czech
  'da',           // Danish
  'de',           // German
  'el',           // Greek
  'en',           // English (United States)
  'en-GB',        // English (Great Britain)
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

const currencies = [
  'CAD',          // Canadian Dollar
  'EUR',          // Euro
  'GBP',          // British Pound
  'USD',          // US Dollar
];

const files = ['ca-gregorian', 'currencies', 'dateFields', 'numbers', 'timeZoneNames'];
const supplemental = ['currencyData', 'likelySubtags', 'numberingSystems', 'ordinals', 'plurals', 'timeData', 'weekData'];
const cldrs = locales.map(x => new Cldr(x));
const languages = cldrs.map(x => x.attributes.language);

function removeUnusedLanguages(dict) {
  if (dict) {
    Object.keys(dict).forEach((key) => {
      if (languages.indexOf(key) === -1) {
        delete dict[key];
      }
    });
  }
}

gulp.task('cldr', () => {
  const cldrFilter = filter(file => (
    (locales.indexOf(path.dirname(file.path).split(path.sep).pop()) > -1 && files.indexOf(path.basename(file.path, '.json')) > -1) || (path.dirname(file.path).split(path.sep).pop() === 'supplemental' && supplemental.indexOf(path.basename(file.path, '.json')) > -1)
  ));

  return gulp.src(['./node_modules/cldr-data/supplemental/*.json', './node_modules/cldr-data/main/**/*.json'])
    .pipe(cldrFilter)
    .pipe(merge('cldr.json', (obj) => {
      if (obj.main) {
        // For language files, grab the first language, and filter stuff out
        const key = Object.keys(obj.main)[0];
        const data = obj.main[key];

        // Cut out unused dates.timeZoneNames.zone and dates.timeZoneNames.metazone data
        if (data && data.dates && data.dates.timeZoneNames) {
          data.dates.timeZoneNames.zone = {};
          data.dates.timeZoneNames.metazone = {};
        }

        // Only include above currencies in each language
        if (data && data.numbers && data.numbers.currencies) {
          Object.keys(data.numbers.currencies).forEach((code) => {
            if (currencies.indexOf(code) === -1) {
              delete data.numbers.currencies[code];
            }
          });
        }
      }

      // Cut out unused languages from our supplemental files
      if (obj.supplemental) {
        const languageDictKeys = ['plurals-type-ordinal', 'plurals-type-cardinal'];

        languageDictKeys.forEach((languageDictKey) => {
          removeUnusedLanguages(obj.supplemental[languageDictKey]);
        });

        // Only include currencies above
        if (obj.supplemental.currencyData) {
          delete obj.supplemental.currencyData.region;

          Object.keys(obj.supplemental.currencyData.fractions).forEach((code) => {
            if (currencies.indexOf(code) === -1 && code.toLowerCase() !== 'default') {
              delete obj.supplemental.currencyData.fractions[code];
            }
          });
        }
      }

      return obj;
    }))
    .pipe(gulp.dest('lib'));
});
