/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

const { omit, pick, zipObject } = require('lodash');
const CURRENCIES = require('./currencies');

const CURRENCY_CODES = Object.keys(CURRENCIES);
const UNIT_FORMS = ['long', 'short', 'narrow'];

exports.reduceLocale = ({ main }) => {
  const locale = Object.keys(main)[0];
  const { dates, numbers, units } = main[locale];
  const { defaultNumberingSystem } = numbers;

  return {
    main: {
      [locale]: {
        dates: {
          ...dates,
          timeZoneNames: omit(dates.timeZoneNames, ['metazone', 'zone']),
        },
        numbers: {
          ...pick(numbers, [
            'defaultNumberingSystem',
            'minimumGroupingDigits',
            `symbols-numberSystem-${defaultNumberingSystem}`,
            `currencyFormats-numberSystem-${defaultNumberingSystem}`,
            `decimalFormats-numberSystem-${defaultNumberingSystem}`,
            `percentFormats-numberSystem-${defaultNumberingSystem}`,
          ]),
          currencies: zipObject(
            CURRENCY_CODES,
            CURRENCY_CODES.map((code) => omit(numbers.currencies[code], ['displayName'])),
          ),
        },
        units: zipObject(UNIT_FORMS, UNIT_FORMS.map((form) => {
          const keys = Object.keys(units[form]);

          return zipObject(keys, keys.map((key) => omit(units[form][key], ['displayName'])));
        })),
      },
    },
  };
};

exports.reduceSupplemental = ({
  supplemental: {
    currencyData,
    version,
    ...rest
  },
}) => ({
  supplemental: {
    currencyData: {
      fractions: pick(currencyData.fractions, [
        'DEFAULT',
        ...CURRENCY_CODES,
      ]),
    },
    ...rest,
  },
});
