/*!
 * React Native Globalize
 *
 * Copyright 2015 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var path = require('path');
var replace = require('gulp-replace');

function localeFiles(locale) {
  return ['ca-gregorian.json', 'currencies.json', 'dateFields.json', 'numbers.json', 'timeZoneNames.json'].map(function(file) {
    return 'require("' + path.join('cldr-data/main', locale, file) + '")';
  });
}

gulp.task('build', function() {
  var locales = require('./node_modules/cldr-data/availableLocales.json').availableLocales;
  var loaderString = '';

  for (var i = 0, l = locales.length; i < l; i++) {
    loaderString += '"' + locales[i] + '": function() { return [' + localeFiles(locales[i]).join(', ') + ']; },\n';
  }

  gulp.src(['src/*.js', 'src/**/*.js'])
    .pipe(replace('// @@loaders', loaderString))
    .pipe(babel())
    .pipe(gulp.dest('lib'));
});

gulp.task('default', ['build']);
