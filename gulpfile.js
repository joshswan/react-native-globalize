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

gulp.task('build', function() {
  gulp.src(['src/*.js', 'src/**/*.js'])
    .pipe(babel())
    .pipe(gulp.dest('lib'));
});

gulp.task('default', ['build']);
