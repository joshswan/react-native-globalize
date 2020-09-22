/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

const fs = require('fs');
const path = require('path');
const del = require('del');
const { dest, parallel, series, src } = require('gulp');
const merge = require('gulp-merge-json');
const jsonpack = require('jsonpack/main');
const through = require('through2');
const stream = require('merge-stream');
const { reduceLocale, reduceSupplemental } = require('./utils/cldr');

const DIR = 'locale-data';

const compress = () =>
  through.obj((file, _, cb) => {
    if (file.isBuffer()) {
      const content = file.contents.toString('utf8');
      // eslint-disable-next-line no-param-reassign
      file.contents = Buffer.from(
        `module.exports=require('jsonpack').unpack('${jsonpack
          .pack(content)
          .replace(/'/g, "\\'")}')`,
      );
    }

    cb(null, file);
  });

function clean() {
  return del([`${DIR}/**/*`]);
}

function supplemental() {
  const files = [
    'currencyData',
    'likelySubtags',
    'numberingSystems',
    'ordinals',
    'plurals',
    'timeData',
    'weekData',
  ];

  return src(files.map((file) => `node_modules/cldr-data/supplemental/${file}.json`))
    .pipe(
      merge({
        fileName: 'core.js',
        transform: reduceSupplemental,
      }),
    )
    .pipe(compress())
    .pipe(dest(DIR));
}

function locales() {
  const files = ['ca-gregorian', 'currencies', 'dateFields', 'numbers', 'timeZoneNames', 'units'];
  const dir = 'node_modules/cldr-data/main/';
  const ignore = ['en-US-POSIX', 'root'];
  const codes = fs
    .readdirSync(dir)
    .filter((file) => fs.statSync(path.join(dir, file)).isDirectory() && !ignore.includes(file));

  return stream(
    codes.map((locale) =>
      src(files.map((file) => `node_modules/cldr-data/main/${locale}/${file}.json`))
        .pipe(
          merge({
            fileName: `${locale}.js`,
            transform: reduceLocale,
            jsonSpace: '',
          }),
        )
        .pipe(compress())
        .pipe(dest(DIR)),
    ),
  );
}

exports.default = series(clean, parallel(supplemental, locales));
