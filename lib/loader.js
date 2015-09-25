/*!
 * React Native Globalize
 *
 * Copyright 2015 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var loaders = {
  "af": function af() {
    return [require("cldr-data/main/af/ca-gregorian.json"), require("cldr-data/main/af/currencies.json"), require("cldr-data/main/af/dateFields.json"), require("cldr-data/main/af/numbers.json"), require("cldr-data/main/af/timeZoneNames.json")];
  },
  "af-NA": function afNA() {
    return [require("cldr-data/main/af-NA/ca-gregorian.json"), require("cldr-data/main/af-NA/currencies.json"), require("cldr-data/main/af-NA/dateFields.json"), require("cldr-data/main/af-NA/numbers.json"), require("cldr-data/main/af-NA/timeZoneNames.json")];
  },
  "am": function am() {
    return [require("cldr-data/main/am/ca-gregorian.json"), require("cldr-data/main/am/currencies.json"), require("cldr-data/main/am/dateFields.json"), require("cldr-data/main/am/numbers.json"), require("cldr-data/main/am/timeZoneNames.json")];
  },
  "ar": function ar() {
    return [require("cldr-data/main/ar/ca-gregorian.json"), require("cldr-data/main/ar/currencies.json"), require("cldr-data/main/ar/dateFields.json"), require("cldr-data/main/ar/numbers.json"), require("cldr-data/main/ar/timeZoneNames.json")];
  },
  "ar-AE": function arAE() {
    return [require("cldr-data/main/ar-AE/ca-gregorian.json"), require("cldr-data/main/ar-AE/currencies.json"), require("cldr-data/main/ar-AE/dateFields.json"), require("cldr-data/main/ar-AE/numbers.json"), require("cldr-data/main/ar-AE/timeZoneNames.json")];
  },
  "ar-BH": function arBH() {
    return [require("cldr-data/main/ar-BH/ca-gregorian.json"), require("cldr-data/main/ar-BH/currencies.json"), require("cldr-data/main/ar-BH/dateFields.json"), require("cldr-data/main/ar-BH/numbers.json"), require("cldr-data/main/ar-BH/timeZoneNames.json")];
  },
  "ar-DJ": function arDJ() {
    return [require("cldr-data/main/ar-DJ/ca-gregorian.json"), require("cldr-data/main/ar-DJ/currencies.json"), require("cldr-data/main/ar-DJ/dateFields.json"), require("cldr-data/main/ar-DJ/numbers.json"), require("cldr-data/main/ar-DJ/timeZoneNames.json")];
  },
  "ar-DZ": function arDZ() {
    return [require("cldr-data/main/ar-DZ/ca-gregorian.json"), require("cldr-data/main/ar-DZ/currencies.json"), require("cldr-data/main/ar-DZ/dateFields.json"), require("cldr-data/main/ar-DZ/numbers.json"), require("cldr-data/main/ar-DZ/timeZoneNames.json")];
  },
  "ar-EG": function arEG() {
    return [require("cldr-data/main/ar-EG/ca-gregorian.json"), require("cldr-data/main/ar-EG/currencies.json"), require("cldr-data/main/ar-EG/dateFields.json"), require("cldr-data/main/ar-EG/numbers.json"), require("cldr-data/main/ar-EG/timeZoneNames.json")];
  },
  "ar-EH": function arEH() {
    return [require("cldr-data/main/ar-EH/ca-gregorian.json"), require("cldr-data/main/ar-EH/currencies.json"), require("cldr-data/main/ar-EH/dateFields.json"), require("cldr-data/main/ar-EH/numbers.json"), require("cldr-data/main/ar-EH/timeZoneNames.json")];
  },
  "ar-ER": function arER() {
    return [require("cldr-data/main/ar-ER/ca-gregorian.json"), require("cldr-data/main/ar-ER/currencies.json"), require("cldr-data/main/ar-ER/dateFields.json"), require("cldr-data/main/ar-ER/numbers.json"), require("cldr-data/main/ar-ER/timeZoneNames.json")];
  },
  "ar-IL": function arIL() {
    return [require("cldr-data/main/ar-IL/ca-gregorian.json"), require("cldr-data/main/ar-IL/currencies.json"), require("cldr-data/main/ar-IL/dateFields.json"), require("cldr-data/main/ar-IL/numbers.json"), require("cldr-data/main/ar-IL/timeZoneNames.json")];
  },
  "ar-IQ": function arIQ() {
    return [require("cldr-data/main/ar-IQ/ca-gregorian.json"), require("cldr-data/main/ar-IQ/currencies.json"), require("cldr-data/main/ar-IQ/dateFields.json"), require("cldr-data/main/ar-IQ/numbers.json"), require("cldr-data/main/ar-IQ/timeZoneNames.json")];
  },
  "ar-JO": function arJO() {
    return [require("cldr-data/main/ar-JO/ca-gregorian.json"), require("cldr-data/main/ar-JO/currencies.json"), require("cldr-data/main/ar-JO/dateFields.json"), require("cldr-data/main/ar-JO/numbers.json"), require("cldr-data/main/ar-JO/timeZoneNames.json")];
  },
  "ar-KM": function arKM() {
    return [require("cldr-data/main/ar-KM/ca-gregorian.json"), require("cldr-data/main/ar-KM/currencies.json"), require("cldr-data/main/ar-KM/dateFields.json"), require("cldr-data/main/ar-KM/numbers.json"), require("cldr-data/main/ar-KM/timeZoneNames.json")];
  },
  "ar-KW": function arKW() {
    return [require("cldr-data/main/ar-KW/ca-gregorian.json"), require("cldr-data/main/ar-KW/currencies.json"), require("cldr-data/main/ar-KW/dateFields.json"), require("cldr-data/main/ar-KW/numbers.json"), require("cldr-data/main/ar-KW/timeZoneNames.json")];
  },
  "ar-LB": function arLB() {
    return [require("cldr-data/main/ar-LB/ca-gregorian.json"), require("cldr-data/main/ar-LB/currencies.json"), require("cldr-data/main/ar-LB/dateFields.json"), require("cldr-data/main/ar-LB/numbers.json"), require("cldr-data/main/ar-LB/timeZoneNames.json")];
  },
  "ar-LY": function arLY() {
    return [require("cldr-data/main/ar-LY/ca-gregorian.json"), require("cldr-data/main/ar-LY/currencies.json"), require("cldr-data/main/ar-LY/dateFields.json"), require("cldr-data/main/ar-LY/numbers.json"), require("cldr-data/main/ar-LY/timeZoneNames.json")];
  },
  "ar-MA": function arMA() {
    return [require("cldr-data/main/ar-MA/ca-gregorian.json"), require("cldr-data/main/ar-MA/currencies.json"), require("cldr-data/main/ar-MA/dateFields.json"), require("cldr-data/main/ar-MA/numbers.json"), require("cldr-data/main/ar-MA/timeZoneNames.json")];
  },
  "ar-MR": function arMR() {
    return [require("cldr-data/main/ar-MR/ca-gregorian.json"), require("cldr-data/main/ar-MR/currencies.json"), require("cldr-data/main/ar-MR/dateFields.json"), require("cldr-data/main/ar-MR/numbers.json"), require("cldr-data/main/ar-MR/timeZoneNames.json")];
  },
  "ar-OM": function arOM() {
    return [require("cldr-data/main/ar-OM/ca-gregorian.json"), require("cldr-data/main/ar-OM/currencies.json"), require("cldr-data/main/ar-OM/dateFields.json"), require("cldr-data/main/ar-OM/numbers.json"), require("cldr-data/main/ar-OM/timeZoneNames.json")];
  },
  "ar-PS": function arPS() {
    return [require("cldr-data/main/ar-PS/ca-gregorian.json"), require("cldr-data/main/ar-PS/currencies.json"), require("cldr-data/main/ar-PS/dateFields.json"), require("cldr-data/main/ar-PS/numbers.json"), require("cldr-data/main/ar-PS/timeZoneNames.json")];
  },
  "ar-QA": function arQA() {
    return [require("cldr-data/main/ar-QA/ca-gregorian.json"), require("cldr-data/main/ar-QA/currencies.json"), require("cldr-data/main/ar-QA/dateFields.json"), require("cldr-data/main/ar-QA/numbers.json"), require("cldr-data/main/ar-QA/timeZoneNames.json")];
  },
  "ar-SA": function arSA() {
    return [require("cldr-data/main/ar-SA/ca-gregorian.json"), require("cldr-data/main/ar-SA/currencies.json"), require("cldr-data/main/ar-SA/dateFields.json"), require("cldr-data/main/ar-SA/numbers.json"), require("cldr-data/main/ar-SA/timeZoneNames.json")];
  },
  "ar-SD": function arSD() {
    return [require("cldr-data/main/ar-SD/ca-gregorian.json"), require("cldr-data/main/ar-SD/currencies.json"), require("cldr-data/main/ar-SD/dateFields.json"), require("cldr-data/main/ar-SD/numbers.json"), require("cldr-data/main/ar-SD/timeZoneNames.json")];
  },
  "ar-SO": function arSO() {
    return [require("cldr-data/main/ar-SO/ca-gregorian.json"), require("cldr-data/main/ar-SO/currencies.json"), require("cldr-data/main/ar-SO/dateFields.json"), require("cldr-data/main/ar-SO/numbers.json"), require("cldr-data/main/ar-SO/timeZoneNames.json")];
  },
  "ar-SS": function arSS() {
    return [require("cldr-data/main/ar-SS/ca-gregorian.json"), require("cldr-data/main/ar-SS/currencies.json"), require("cldr-data/main/ar-SS/dateFields.json"), require("cldr-data/main/ar-SS/numbers.json"), require("cldr-data/main/ar-SS/timeZoneNames.json")];
  },
  "ar-SY": function arSY() {
    return [require("cldr-data/main/ar-SY/ca-gregorian.json"), require("cldr-data/main/ar-SY/currencies.json"), require("cldr-data/main/ar-SY/dateFields.json"), require("cldr-data/main/ar-SY/numbers.json"), require("cldr-data/main/ar-SY/timeZoneNames.json")];
  },
  "ar-TD": function arTD() {
    return [require("cldr-data/main/ar-TD/ca-gregorian.json"), require("cldr-data/main/ar-TD/currencies.json"), require("cldr-data/main/ar-TD/dateFields.json"), require("cldr-data/main/ar-TD/numbers.json"), require("cldr-data/main/ar-TD/timeZoneNames.json")];
  },
  "ar-TN": function arTN() {
    return [require("cldr-data/main/ar-TN/ca-gregorian.json"), require("cldr-data/main/ar-TN/currencies.json"), require("cldr-data/main/ar-TN/dateFields.json"), require("cldr-data/main/ar-TN/numbers.json"), require("cldr-data/main/ar-TN/timeZoneNames.json")];
  },
  "ar-YE": function arYE() {
    return [require("cldr-data/main/ar-YE/ca-gregorian.json"), require("cldr-data/main/ar-YE/currencies.json"), require("cldr-data/main/ar-YE/dateFields.json"), require("cldr-data/main/ar-YE/numbers.json"), require("cldr-data/main/ar-YE/timeZoneNames.json")];
  },
  "az": function az() {
    return [require("cldr-data/main/az/ca-gregorian.json"), require("cldr-data/main/az/currencies.json"), require("cldr-data/main/az/dateFields.json"), require("cldr-data/main/az/numbers.json"), require("cldr-data/main/az/timeZoneNames.json")];
  },
  "az-Latn": function azLatn() {
    return [require("cldr-data/main/az-Latn/ca-gregorian.json"), require("cldr-data/main/az-Latn/currencies.json"), require("cldr-data/main/az-Latn/dateFields.json"), require("cldr-data/main/az-Latn/numbers.json"), require("cldr-data/main/az-Latn/timeZoneNames.json")];
  },
  "be": function be() {
    return [require("cldr-data/main/be/ca-gregorian.json"), require("cldr-data/main/be/currencies.json"), require("cldr-data/main/be/dateFields.json"), require("cldr-data/main/be/numbers.json"), require("cldr-data/main/be/timeZoneNames.json")];
  },
  "bg": function bg() {
    return [require("cldr-data/main/bg/ca-gregorian.json"), require("cldr-data/main/bg/currencies.json"), require("cldr-data/main/bg/dateFields.json"), require("cldr-data/main/bg/numbers.json"), require("cldr-data/main/bg/timeZoneNames.json")];
  },
  "bn": function bn() {
    return [require("cldr-data/main/bn/ca-gregorian.json"), require("cldr-data/main/bn/currencies.json"), require("cldr-data/main/bn/dateFields.json"), require("cldr-data/main/bn/numbers.json"), require("cldr-data/main/bn/timeZoneNames.json")];
  },
  "bn-IN": function bnIN() {
    return [require("cldr-data/main/bn-IN/ca-gregorian.json"), require("cldr-data/main/bn-IN/currencies.json"), require("cldr-data/main/bn-IN/dateFields.json"), require("cldr-data/main/bn-IN/numbers.json"), require("cldr-data/main/bn-IN/timeZoneNames.json")];
  },
  "bs": function bs() {
    return [require("cldr-data/main/bs/ca-gregorian.json"), require("cldr-data/main/bs/currencies.json"), require("cldr-data/main/bs/dateFields.json"), require("cldr-data/main/bs/numbers.json"), require("cldr-data/main/bs/timeZoneNames.json")];
  },
  "bs-Latn": function bsLatn() {
    return [require("cldr-data/main/bs-Latn/ca-gregorian.json"), require("cldr-data/main/bs-Latn/currencies.json"), require("cldr-data/main/bs-Latn/dateFields.json"), require("cldr-data/main/bs-Latn/numbers.json"), require("cldr-data/main/bs-Latn/timeZoneNames.json")];
  },
  "ca": function ca() {
    return [require("cldr-data/main/ca/ca-gregorian.json"), require("cldr-data/main/ca/currencies.json"), require("cldr-data/main/ca/dateFields.json"), require("cldr-data/main/ca/numbers.json"), require("cldr-data/main/ca/timeZoneNames.json")];
  },
  "ca-AD": function caAD() {
    return [require("cldr-data/main/ca-AD/ca-gregorian.json"), require("cldr-data/main/ca-AD/currencies.json"), require("cldr-data/main/ca-AD/dateFields.json"), require("cldr-data/main/ca-AD/numbers.json"), require("cldr-data/main/ca-AD/timeZoneNames.json")];
  },
  "ca-ES-VALENCIA": function caESVALENCIA() {
    return [require("cldr-data/main/ca-ES-VALENCIA/ca-gregorian.json"), require("cldr-data/main/ca-ES-VALENCIA/currencies.json"), require("cldr-data/main/ca-ES-VALENCIA/dateFields.json"), require("cldr-data/main/ca-ES-VALENCIA/numbers.json"), require("cldr-data/main/ca-ES-VALENCIA/timeZoneNames.json")];
  },
  "ca-FR": function caFR() {
    return [require("cldr-data/main/ca-FR/ca-gregorian.json"), require("cldr-data/main/ca-FR/currencies.json"), require("cldr-data/main/ca-FR/dateFields.json"), require("cldr-data/main/ca-FR/numbers.json"), require("cldr-data/main/ca-FR/timeZoneNames.json")];
  },
  "ca-IT": function caIT() {
    return [require("cldr-data/main/ca-IT/ca-gregorian.json"), require("cldr-data/main/ca-IT/currencies.json"), require("cldr-data/main/ca-IT/dateFields.json"), require("cldr-data/main/ca-IT/numbers.json"), require("cldr-data/main/ca-IT/timeZoneNames.json")];
  },
  "cs": function cs() {
    return [require("cldr-data/main/cs/ca-gregorian.json"), require("cldr-data/main/cs/currencies.json"), require("cldr-data/main/cs/dateFields.json"), require("cldr-data/main/cs/numbers.json"), require("cldr-data/main/cs/timeZoneNames.json")];
  },
  "cy": function cy() {
    return [require("cldr-data/main/cy/ca-gregorian.json"), require("cldr-data/main/cy/currencies.json"), require("cldr-data/main/cy/dateFields.json"), require("cldr-data/main/cy/numbers.json"), require("cldr-data/main/cy/timeZoneNames.json")];
  },
  "da": function da() {
    return [require("cldr-data/main/da/ca-gregorian.json"), require("cldr-data/main/da/currencies.json"), require("cldr-data/main/da/dateFields.json"), require("cldr-data/main/da/numbers.json"), require("cldr-data/main/da/timeZoneNames.json")];
  },
  "da-GL": function daGL() {
    return [require("cldr-data/main/da-GL/ca-gregorian.json"), require("cldr-data/main/da-GL/currencies.json"), require("cldr-data/main/da-GL/dateFields.json"), require("cldr-data/main/da-GL/numbers.json"), require("cldr-data/main/da-GL/timeZoneNames.json")];
  },
  "de": function de() {
    return [require("cldr-data/main/de/ca-gregorian.json"), require("cldr-data/main/de/currencies.json"), require("cldr-data/main/de/dateFields.json"), require("cldr-data/main/de/numbers.json"), require("cldr-data/main/de/timeZoneNames.json")];
  },
  "de-AT": function deAT() {
    return [require("cldr-data/main/de-AT/ca-gregorian.json"), require("cldr-data/main/de-AT/currencies.json"), require("cldr-data/main/de-AT/dateFields.json"), require("cldr-data/main/de-AT/numbers.json"), require("cldr-data/main/de-AT/timeZoneNames.json")];
  },
  "de-BE": function deBE() {
    return [require("cldr-data/main/de-BE/ca-gregorian.json"), require("cldr-data/main/de-BE/currencies.json"), require("cldr-data/main/de-BE/dateFields.json"), require("cldr-data/main/de-BE/numbers.json"), require("cldr-data/main/de-BE/timeZoneNames.json")];
  },
  "de-CH": function deCH() {
    return [require("cldr-data/main/de-CH/ca-gregorian.json"), require("cldr-data/main/de-CH/currencies.json"), require("cldr-data/main/de-CH/dateFields.json"), require("cldr-data/main/de-CH/numbers.json"), require("cldr-data/main/de-CH/timeZoneNames.json")];
  },
  "de-LI": function deLI() {
    return [require("cldr-data/main/de-LI/ca-gregorian.json"), require("cldr-data/main/de-LI/currencies.json"), require("cldr-data/main/de-LI/dateFields.json"), require("cldr-data/main/de-LI/numbers.json"), require("cldr-data/main/de-LI/timeZoneNames.json")];
  },
  "de-LU": function deLU() {
    return [require("cldr-data/main/de-LU/ca-gregorian.json"), require("cldr-data/main/de-LU/currencies.json"), require("cldr-data/main/de-LU/dateFields.json"), require("cldr-data/main/de-LU/numbers.json"), require("cldr-data/main/de-LU/timeZoneNames.json")];
  },
  "el": function el() {
    return [require("cldr-data/main/el/ca-gregorian.json"), require("cldr-data/main/el/currencies.json"), require("cldr-data/main/el/dateFields.json"), require("cldr-data/main/el/numbers.json"), require("cldr-data/main/el/timeZoneNames.json")];
  },
  "el-CY": function elCY() {
    return [require("cldr-data/main/el-CY/ca-gregorian.json"), require("cldr-data/main/el-CY/currencies.json"), require("cldr-data/main/el-CY/dateFields.json"), require("cldr-data/main/el-CY/numbers.json"), require("cldr-data/main/el-CY/timeZoneNames.json")];
  },
  "en": function en() {
    return [require("cldr-data/main/en/ca-gregorian.json"), require("cldr-data/main/en/currencies.json"), require("cldr-data/main/en/dateFields.json"), require("cldr-data/main/en/numbers.json"), require("cldr-data/main/en/timeZoneNames.json")];
  },
  "en-001": function en001() {
    return [require("cldr-data/main/en-001/ca-gregorian.json"), require("cldr-data/main/en-001/currencies.json"), require("cldr-data/main/en-001/dateFields.json"), require("cldr-data/main/en-001/numbers.json"), require("cldr-data/main/en-001/timeZoneNames.json")];
  },
  "en-150": function en150() {
    return [require("cldr-data/main/en-150/ca-gregorian.json"), require("cldr-data/main/en-150/currencies.json"), require("cldr-data/main/en-150/dateFields.json"), require("cldr-data/main/en-150/numbers.json"), require("cldr-data/main/en-150/timeZoneNames.json")];
  },
  "en-AG": function enAG() {
    return [require("cldr-data/main/en-AG/ca-gregorian.json"), require("cldr-data/main/en-AG/currencies.json"), require("cldr-data/main/en-AG/dateFields.json"), require("cldr-data/main/en-AG/numbers.json"), require("cldr-data/main/en-AG/timeZoneNames.json")];
  },
  "en-AI": function enAI() {
    return [require("cldr-data/main/en-AI/ca-gregorian.json"), require("cldr-data/main/en-AI/currencies.json"), require("cldr-data/main/en-AI/dateFields.json"), require("cldr-data/main/en-AI/numbers.json"), require("cldr-data/main/en-AI/timeZoneNames.json")];
  },
  "en-AS": function enAS() {
    return [require("cldr-data/main/en-AS/ca-gregorian.json"), require("cldr-data/main/en-AS/currencies.json"), require("cldr-data/main/en-AS/dateFields.json"), require("cldr-data/main/en-AS/numbers.json"), require("cldr-data/main/en-AS/timeZoneNames.json")];
  },
  "en-AT": function enAT() {
    return [require("cldr-data/main/en-AT/ca-gregorian.json"), require("cldr-data/main/en-AT/currencies.json"), require("cldr-data/main/en-AT/dateFields.json"), require("cldr-data/main/en-AT/numbers.json"), require("cldr-data/main/en-AT/timeZoneNames.json")];
  },
  "en-AU": function enAU() {
    return [require("cldr-data/main/en-AU/ca-gregorian.json"), require("cldr-data/main/en-AU/currencies.json"), require("cldr-data/main/en-AU/dateFields.json"), require("cldr-data/main/en-AU/numbers.json"), require("cldr-data/main/en-AU/timeZoneNames.json")];
  },
  "en-BB": function enBB() {
    return [require("cldr-data/main/en-BB/ca-gregorian.json"), require("cldr-data/main/en-BB/currencies.json"), require("cldr-data/main/en-BB/dateFields.json"), require("cldr-data/main/en-BB/numbers.json"), require("cldr-data/main/en-BB/timeZoneNames.json")];
  },
  "en-BE": function enBE() {
    return [require("cldr-data/main/en-BE/ca-gregorian.json"), require("cldr-data/main/en-BE/currencies.json"), require("cldr-data/main/en-BE/dateFields.json"), require("cldr-data/main/en-BE/numbers.json"), require("cldr-data/main/en-BE/timeZoneNames.json")];
  },
  "en-BI": function enBI() {
    return [require("cldr-data/main/en-BI/ca-gregorian.json"), require("cldr-data/main/en-BI/currencies.json"), require("cldr-data/main/en-BI/dateFields.json"), require("cldr-data/main/en-BI/numbers.json"), require("cldr-data/main/en-BI/timeZoneNames.json")];
  },
  "en-BM": function enBM() {
    return [require("cldr-data/main/en-BM/ca-gregorian.json"), require("cldr-data/main/en-BM/currencies.json"), require("cldr-data/main/en-BM/dateFields.json"), require("cldr-data/main/en-BM/numbers.json"), require("cldr-data/main/en-BM/timeZoneNames.json")];
  },
  "en-BS": function enBS() {
    return [require("cldr-data/main/en-BS/ca-gregorian.json"), require("cldr-data/main/en-BS/currencies.json"), require("cldr-data/main/en-BS/dateFields.json"), require("cldr-data/main/en-BS/numbers.json"), require("cldr-data/main/en-BS/timeZoneNames.json")];
  },
  "en-BW": function enBW() {
    return [require("cldr-data/main/en-BW/ca-gregorian.json"), require("cldr-data/main/en-BW/currencies.json"), require("cldr-data/main/en-BW/dateFields.json"), require("cldr-data/main/en-BW/numbers.json"), require("cldr-data/main/en-BW/timeZoneNames.json")];
  },
  "en-BZ": function enBZ() {
    return [require("cldr-data/main/en-BZ/ca-gregorian.json"), require("cldr-data/main/en-BZ/currencies.json"), require("cldr-data/main/en-BZ/dateFields.json"), require("cldr-data/main/en-BZ/numbers.json"), require("cldr-data/main/en-BZ/timeZoneNames.json")];
  },
  "en-CA": function enCA() {
    return [require("cldr-data/main/en-CA/ca-gregorian.json"), require("cldr-data/main/en-CA/currencies.json"), require("cldr-data/main/en-CA/dateFields.json"), require("cldr-data/main/en-CA/numbers.json"), require("cldr-data/main/en-CA/timeZoneNames.json")];
  },
  "en-CC": function enCC() {
    return [require("cldr-data/main/en-CC/ca-gregorian.json"), require("cldr-data/main/en-CC/currencies.json"), require("cldr-data/main/en-CC/dateFields.json"), require("cldr-data/main/en-CC/numbers.json"), require("cldr-data/main/en-CC/timeZoneNames.json")];
  },
  "en-CH": function enCH() {
    return [require("cldr-data/main/en-CH/ca-gregorian.json"), require("cldr-data/main/en-CH/currencies.json"), require("cldr-data/main/en-CH/dateFields.json"), require("cldr-data/main/en-CH/numbers.json"), require("cldr-data/main/en-CH/timeZoneNames.json")];
  },
  "en-CK": function enCK() {
    return [require("cldr-data/main/en-CK/ca-gregorian.json"), require("cldr-data/main/en-CK/currencies.json"), require("cldr-data/main/en-CK/dateFields.json"), require("cldr-data/main/en-CK/numbers.json"), require("cldr-data/main/en-CK/timeZoneNames.json")];
  },
  "en-CM": function enCM() {
    return [require("cldr-data/main/en-CM/ca-gregorian.json"), require("cldr-data/main/en-CM/currencies.json"), require("cldr-data/main/en-CM/dateFields.json"), require("cldr-data/main/en-CM/numbers.json"), require("cldr-data/main/en-CM/timeZoneNames.json")];
  },
  "en-CX": function enCX() {
    return [require("cldr-data/main/en-CX/ca-gregorian.json"), require("cldr-data/main/en-CX/currencies.json"), require("cldr-data/main/en-CX/dateFields.json"), require("cldr-data/main/en-CX/numbers.json"), require("cldr-data/main/en-CX/timeZoneNames.json")];
  },
  "en-CY": function enCY() {
    return [require("cldr-data/main/en-CY/ca-gregorian.json"), require("cldr-data/main/en-CY/currencies.json"), require("cldr-data/main/en-CY/dateFields.json"), require("cldr-data/main/en-CY/numbers.json"), require("cldr-data/main/en-CY/timeZoneNames.json")];
  },
  "en-DE": function enDE() {
    return [require("cldr-data/main/en-DE/ca-gregorian.json"), require("cldr-data/main/en-DE/currencies.json"), require("cldr-data/main/en-DE/dateFields.json"), require("cldr-data/main/en-DE/numbers.json"), require("cldr-data/main/en-DE/timeZoneNames.json")];
  },
  "en-DG": function enDG() {
    return [require("cldr-data/main/en-DG/ca-gregorian.json"), require("cldr-data/main/en-DG/currencies.json"), require("cldr-data/main/en-DG/dateFields.json"), require("cldr-data/main/en-DG/numbers.json"), require("cldr-data/main/en-DG/timeZoneNames.json")];
  },
  "en-DK": function enDK() {
    return [require("cldr-data/main/en-DK/ca-gregorian.json"), require("cldr-data/main/en-DK/currencies.json"), require("cldr-data/main/en-DK/dateFields.json"), require("cldr-data/main/en-DK/numbers.json"), require("cldr-data/main/en-DK/timeZoneNames.json")];
  },
  "en-DM": function enDM() {
    return [require("cldr-data/main/en-DM/ca-gregorian.json"), require("cldr-data/main/en-DM/currencies.json"), require("cldr-data/main/en-DM/dateFields.json"), require("cldr-data/main/en-DM/numbers.json"), require("cldr-data/main/en-DM/timeZoneNames.json")];
  },
  "en-ER": function enER() {
    return [require("cldr-data/main/en-ER/ca-gregorian.json"), require("cldr-data/main/en-ER/currencies.json"), require("cldr-data/main/en-ER/dateFields.json"), require("cldr-data/main/en-ER/numbers.json"), require("cldr-data/main/en-ER/timeZoneNames.json")];
  },
  "en-FI": function enFI() {
    return [require("cldr-data/main/en-FI/ca-gregorian.json"), require("cldr-data/main/en-FI/currencies.json"), require("cldr-data/main/en-FI/dateFields.json"), require("cldr-data/main/en-FI/numbers.json"), require("cldr-data/main/en-FI/timeZoneNames.json")];
  },
  "en-FJ": function enFJ() {
    return [require("cldr-data/main/en-FJ/ca-gregorian.json"), require("cldr-data/main/en-FJ/currencies.json"), require("cldr-data/main/en-FJ/dateFields.json"), require("cldr-data/main/en-FJ/numbers.json"), require("cldr-data/main/en-FJ/timeZoneNames.json")];
  },
  "en-FK": function enFK() {
    return [require("cldr-data/main/en-FK/ca-gregorian.json"), require("cldr-data/main/en-FK/currencies.json"), require("cldr-data/main/en-FK/dateFields.json"), require("cldr-data/main/en-FK/numbers.json"), require("cldr-data/main/en-FK/timeZoneNames.json")];
  },
  "en-FM": function enFM() {
    return [require("cldr-data/main/en-FM/ca-gregorian.json"), require("cldr-data/main/en-FM/currencies.json"), require("cldr-data/main/en-FM/dateFields.json"), require("cldr-data/main/en-FM/numbers.json"), require("cldr-data/main/en-FM/timeZoneNames.json")];
  },
  "en-GB": function enGB() {
    return [require("cldr-data/main/en-GB/ca-gregorian.json"), require("cldr-data/main/en-GB/currencies.json"), require("cldr-data/main/en-GB/dateFields.json"), require("cldr-data/main/en-GB/numbers.json"), require("cldr-data/main/en-GB/timeZoneNames.json")];
  },
  "en-GD": function enGD() {
    return [require("cldr-data/main/en-GD/ca-gregorian.json"), require("cldr-data/main/en-GD/currencies.json"), require("cldr-data/main/en-GD/dateFields.json"), require("cldr-data/main/en-GD/numbers.json"), require("cldr-data/main/en-GD/timeZoneNames.json")];
  },
  "en-GG": function enGG() {
    return [require("cldr-data/main/en-GG/ca-gregorian.json"), require("cldr-data/main/en-GG/currencies.json"), require("cldr-data/main/en-GG/dateFields.json"), require("cldr-data/main/en-GG/numbers.json"), require("cldr-data/main/en-GG/timeZoneNames.json")];
  },
  "en-GH": function enGH() {
    return [require("cldr-data/main/en-GH/ca-gregorian.json"), require("cldr-data/main/en-GH/currencies.json"), require("cldr-data/main/en-GH/dateFields.json"), require("cldr-data/main/en-GH/numbers.json"), require("cldr-data/main/en-GH/timeZoneNames.json")];
  },
  "en-GI": function enGI() {
    return [require("cldr-data/main/en-GI/ca-gregorian.json"), require("cldr-data/main/en-GI/currencies.json"), require("cldr-data/main/en-GI/dateFields.json"), require("cldr-data/main/en-GI/numbers.json"), require("cldr-data/main/en-GI/timeZoneNames.json")];
  },
  "en-GM": function enGM() {
    return [require("cldr-data/main/en-GM/ca-gregorian.json"), require("cldr-data/main/en-GM/currencies.json"), require("cldr-data/main/en-GM/dateFields.json"), require("cldr-data/main/en-GM/numbers.json"), require("cldr-data/main/en-GM/timeZoneNames.json")];
  },
  "en-GU": function enGU() {
    return [require("cldr-data/main/en-GU/ca-gregorian.json"), require("cldr-data/main/en-GU/currencies.json"), require("cldr-data/main/en-GU/dateFields.json"), require("cldr-data/main/en-GU/numbers.json"), require("cldr-data/main/en-GU/timeZoneNames.json")];
  },
  "en-GY": function enGY() {
    return [require("cldr-data/main/en-GY/ca-gregorian.json"), require("cldr-data/main/en-GY/currencies.json"), require("cldr-data/main/en-GY/dateFields.json"), require("cldr-data/main/en-GY/numbers.json"), require("cldr-data/main/en-GY/timeZoneNames.json")];
  },
  "en-HK": function enHK() {
    return [require("cldr-data/main/en-HK/ca-gregorian.json"), require("cldr-data/main/en-HK/currencies.json"), require("cldr-data/main/en-HK/dateFields.json"), require("cldr-data/main/en-HK/numbers.json"), require("cldr-data/main/en-HK/timeZoneNames.json")];
  },
  "en-IE": function enIE() {
    return [require("cldr-data/main/en-IE/ca-gregorian.json"), require("cldr-data/main/en-IE/currencies.json"), require("cldr-data/main/en-IE/dateFields.json"), require("cldr-data/main/en-IE/numbers.json"), require("cldr-data/main/en-IE/timeZoneNames.json")];
  },
  "en-IL": function enIL() {
    return [require("cldr-data/main/en-IL/ca-gregorian.json"), require("cldr-data/main/en-IL/currencies.json"), require("cldr-data/main/en-IL/dateFields.json"), require("cldr-data/main/en-IL/numbers.json"), require("cldr-data/main/en-IL/timeZoneNames.json")];
  },
  "en-IM": function enIM() {
    return [require("cldr-data/main/en-IM/ca-gregorian.json"), require("cldr-data/main/en-IM/currencies.json"), require("cldr-data/main/en-IM/dateFields.json"), require("cldr-data/main/en-IM/numbers.json"), require("cldr-data/main/en-IM/timeZoneNames.json")];
  },
  "en-IN": function enIN() {
    return [require("cldr-data/main/en-IN/ca-gregorian.json"), require("cldr-data/main/en-IN/currencies.json"), require("cldr-data/main/en-IN/dateFields.json"), require("cldr-data/main/en-IN/numbers.json"), require("cldr-data/main/en-IN/timeZoneNames.json")];
  },
  "en-IO": function enIO() {
    return [require("cldr-data/main/en-IO/ca-gregorian.json"), require("cldr-data/main/en-IO/currencies.json"), require("cldr-data/main/en-IO/dateFields.json"), require("cldr-data/main/en-IO/numbers.json"), require("cldr-data/main/en-IO/timeZoneNames.json")];
  },
  "en-JE": function enJE() {
    return [require("cldr-data/main/en-JE/ca-gregorian.json"), require("cldr-data/main/en-JE/currencies.json"), require("cldr-data/main/en-JE/dateFields.json"), require("cldr-data/main/en-JE/numbers.json"), require("cldr-data/main/en-JE/timeZoneNames.json")];
  },
  "en-JM": function enJM() {
    return [require("cldr-data/main/en-JM/ca-gregorian.json"), require("cldr-data/main/en-JM/currencies.json"), require("cldr-data/main/en-JM/dateFields.json"), require("cldr-data/main/en-JM/numbers.json"), require("cldr-data/main/en-JM/timeZoneNames.json")];
  },
  "en-KE": function enKE() {
    return [require("cldr-data/main/en-KE/ca-gregorian.json"), require("cldr-data/main/en-KE/currencies.json"), require("cldr-data/main/en-KE/dateFields.json"), require("cldr-data/main/en-KE/numbers.json"), require("cldr-data/main/en-KE/timeZoneNames.json")];
  },
  "en-KI": function enKI() {
    return [require("cldr-data/main/en-KI/ca-gregorian.json"), require("cldr-data/main/en-KI/currencies.json"), require("cldr-data/main/en-KI/dateFields.json"), require("cldr-data/main/en-KI/numbers.json"), require("cldr-data/main/en-KI/timeZoneNames.json")];
  },
  "en-KN": function enKN() {
    return [require("cldr-data/main/en-KN/ca-gregorian.json"), require("cldr-data/main/en-KN/currencies.json"), require("cldr-data/main/en-KN/dateFields.json"), require("cldr-data/main/en-KN/numbers.json"), require("cldr-data/main/en-KN/timeZoneNames.json")];
  },
  "en-KY": function enKY() {
    return [require("cldr-data/main/en-KY/ca-gregorian.json"), require("cldr-data/main/en-KY/currencies.json"), require("cldr-data/main/en-KY/dateFields.json"), require("cldr-data/main/en-KY/numbers.json"), require("cldr-data/main/en-KY/timeZoneNames.json")];
  },
  "en-LC": function enLC() {
    return [require("cldr-data/main/en-LC/ca-gregorian.json"), require("cldr-data/main/en-LC/currencies.json"), require("cldr-data/main/en-LC/dateFields.json"), require("cldr-data/main/en-LC/numbers.json"), require("cldr-data/main/en-LC/timeZoneNames.json")];
  },
  "en-LR": function enLR() {
    return [require("cldr-data/main/en-LR/ca-gregorian.json"), require("cldr-data/main/en-LR/currencies.json"), require("cldr-data/main/en-LR/dateFields.json"), require("cldr-data/main/en-LR/numbers.json"), require("cldr-data/main/en-LR/timeZoneNames.json")];
  },
  "en-LS": function enLS() {
    return [require("cldr-data/main/en-LS/ca-gregorian.json"), require("cldr-data/main/en-LS/currencies.json"), require("cldr-data/main/en-LS/dateFields.json"), require("cldr-data/main/en-LS/numbers.json"), require("cldr-data/main/en-LS/timeZoneNames.json")];
  },
  "en-MG": function enMG() {
    return [require("cldr-data/main/en-MG/ca-gregorian.json"), require("cldr-data/main/en-MG/currencies.json"), require("cldr-data/main/en-MG/dateFields.json"), require("cldr-data/main/en-MG/numbers.json"), require("cldr-data/main/en-MG/timeZoneNames.json")];
  },
  "en-MH": function enMH() {
    return [require("cldr-data/main/en-MH/ca-gregorian.json"), require("cldr-data/main/en-MH/currencies.json"), require("cldr-data/main/en-MH/dateFields.json"), require("cldr-data/main/en-MH/numbers.json"), require("cldr-data/main/en-MH/timeZoneNames.json")];
  },
  "en-MO": function enMO() {
    return [require("cldr-data/main/en-MO/ca-gregorian.json"), require("cldr-data/main/en-MO/currencies.json"), require("cldr-data/main/en-MO/dateFields.json"), require("cldr-data/main/en-MO/numbers.json"), require("cldr-data/main/en-MO/timeZoneNames.json")];
  },
  "en-MP": function enMP() {
    return [require("cldr-data/main/en-MP/ca-gregorian.json"), require("cldr-data/main/en-MP/currencies.json"), require("cldr-data/main/en-MP/dateFields.json"), require("cldr-data/main/en-MP/numbers.json"), require("cldr-data/main/en-MP/timeZoneNames.json")];
  },
  "en-MS": function enMS() {
    return [require("cldr-data/main/en-MS/ca-gregorian.json"), require("cldr-data/main/en-MS/currencies.json"), require("cldr-data/main/en-MS/dateFields.json"), require("cldr-data/main/en-MS/numbers.json"), require("cldr-data/main/en-MS/timeZoneNames.json")];
  },
  "en-MT": function enMT() {
    return [require("cldr-data/main/en-MT/ca-gregorian.json"), require("cldr-data/main/en-MT/currencies.json"), require("cldr-data/main/en-MT/dateFields.json"), require("cldr-data/main/en-MT/numbers.json"), require("cldr-data/main/en-MT/timeZoneNames.json")];
  },
  "en-MU": function enMU() {
    return [require("cldr-data/main/en-MU/ca-gregorian.json"), require("cldr-data/main/en-MU/currencies.json"), require("cldr-data/main/en-MU/dateFields.json"), require("cldr-data/main/en-MU/numbers.json"), require("cldr-data/main/en-MU/timeZoneNames.json")];
  },
  "en-MW": function enMW() {
    return [require("cldr-data/main/en-MW/ca-gregorian.json"), require("cldr-data/main/en-MW/currencies.json"), require("cldr-data/main/en-MW/dateFields.json"), require("cldr-data/main/en-MW/numbers.json"), require("cldr-data/main/en-MW/timeZoneNames.json")];
  },
  "en-MY": function enMY() {
    return [require("cldr-data/main/en-MY/ca-gregorian.json"), require("cldr-data/main/en-MY/currencies.json"), require("cldr-data/main/en-MY/dateFields.json"), require("cldr-data/main/en-MY/numbers.json"), require("cldr-data/main/en-MY/timeZoneNames.json")];
  },
  "en-NA": function enNA() {
    return [require("cldr-data/main/en-NA/ca-gregorian.json"), require("cldr-data/main/en-NA/currencies.json"), require("cldr-data/main/en-NA/dateFields.json"), require("cldr-data/main/en-NA/numbers.json"), require("cldr-data/main/en-NA/timeZoneNames.json")];
  },
  "en-NF": function enNF() {
    return [require("cldr-data/main/en-NF/ca-gregorian.json"), require("cldr-data/main/en-NF/currencies.json"), require("cldr-data/main/en-NF/dateFields.json"), require("cldr-data/main/en-NF/numbers.json"), require("cldr-data/main/en-NF/timeZoneNames.json")];
  },
  "en-NG": function enNG() {
    return [require("cldr-data/main/en-NG/ca-gregorian.json"), require("cldr-data/main/en-NG/currencies.json"), require("cldr-data/main/en-NG/dateFields.json"), require("cldr-data/main/en-NG/numbers.json"), require("cldr-data/main/en-NG/timeZoneNames.json")];
  },
  "en-NL": function enNL() {
    return [require("cldr-data/main/en-NL/ca-gregorian.json"), require("cldr-data/main/en-NL/currencies.json"), require("cldr-data/main/en-NL/dateFields.json"), require("cldr-data/main/en-NL/numbers.json"), require("cldr-data/main/en-NL/timeZoneNames.json")];
  },
  "en-NR": function enNR() {
    return [require("cldr-data/main/en-NR/ca-gregorian.json"), require("cldr-data/main/en-NR/currencies.json"), require("cldr-data/main/en-NR/dateFields.json"), require("cldr-data/main/en-NR/numbers.json"), require("cldr-data/main/en-NR/timeZoneNames.json")];
  },
  "en-NU": function enNU() {
    return [require("cldr-data/main/en-NU/ca-gregorian.json"), require("cldr-data/main/en-NU/currencies.json"), require("cldr-data/main/en-NU/dateFields.json"), require("cldr-data/main/en-NU/numbers.json"), require("cldr-data/main/en-NU/timeZoneNames.json")];
  },
  "en-NZ": function enNZ() {
    return [require("cldr-data/main/en-NZ/ca-gregorian.json"), require("cldr-data/main/en-NZ/currencies.json"), require("cldr-data/main/en-NZ/dateFields.json"), require("cldr-data/main/en-NZ/numbers.json"), require("cldr-data/main/en-NZ/timeZoneNames.json")];
  },
  "en-PG": function enPG() {
    return [require("cldr-data/main/en-PG/ca-gregorian.json"), require("cldr-data/main/en-PG/currencies.json"), require("cldr-data/main/en-PG/dateFields.json"), require("cldr-data/main/en-PG/numbers.json"), require("cldr-data/main/en-PG/timeZoneNames.json")];
  },
  "en-PH": function enPH() {
    return [require("cldr-data/main/en-PH/ca-gregorian.json"), require("cldr-data/main/en-PH/currencies.json"), require("cldr-data/main/en-PH/dateFields.json"), require("cldr-data/main/en-PH/numbers.json"), require("cldr-data/main/en-PH/timeZoneNames.json")];
  },
  "en-PK": function enPK() {
    return [require("cldr-data/main/en-PK/ca-gregorian.json"), require("cldr-data/main/en-PK/currencies.json"), require("cldr-data/main/en-PK/dateFields.json"), require("cldr-data/main/en-PK/numbers.json"), require("cldr-data/main/en-PK/timeZoneNames.json")];
  },
  "en-PN": function enPN() {
    return [require("cldr-data/main/en-PN/ca-gregorian.json"), require("cldr-data/main/en-PN/currencies.json"), require("cldr-data/main/en-PN/dateFields.json"), require("cldr-data/main/en-PN/numbers.json"), require("cldr-data/main/en-PN/timeZoneNames.json")];
  },
  "en-PR": function enPR() {
    return [require("cldr-data/main/en-PR/ca-gregorian.json"), require("cldr-data/main/en-PR/currencies.json"), require("cldr-data/main/en-PR/dateFields.json"), require("cldr-data/main/en-PR/numbers.json"), require("cldr-data/main/en-PR/timeZoneNames.json")];
  },
  "en-PW": function enPW() {
    return [require("cldr-data/main/en-PW/ca-gregorian.json"), require("cldr-data/main/en-PW/currencies.json"), require("cldr-data/main/en-PW/dateFields.json"), require("cldr-data/main/en-PW/numbers.json"), require("cldr-data/main/en-PW/timeZoneNames.json")];
  },
  "en-RW": function enRW() {
    return [require("cldr-data/main/en-RW/ca-gregorian.json"), require("cldr-data/main/en-RW/currencies.json"), require("cldr-data/main/en-RW/dateFields.json"), require("cldr-data/main/en-RW/numbers.json"), require("cldr-data/main/en-RW/timeZoneNames.json")];
  },
  "en-SB": function enSB() {
    return [require("cldr-data/main/en-SB/ca-gregorian.json"), require("cldr-data/main/en-SB/currencies.json"), require("cldr-data/main/en-SB/dateFields.json"), require("cldr-data/main/en-SB/numbers.json"), require("cldr-data/main/en-SB/timeZoneNames.json")];
  },
  "en-SC": function enSC() {
    return [require("cldr-data/main/en-SC/ca-gregorian.json"), require("cldr-data/main/en-SC/currencies.json"), require("cldr-data/main/en-SC/dateFields.json"), require("cldr-data/main/en-SC/numbers.json"), require("cldr-data/main/en-SC/timeZoneNames.json")];
  },
  "en-SD": function enSD() {
    return [require("cldr-data/main/en-SD/ca-gregorian.json"), require("cldr-data/main/en-SD/currencies.json"), require("cldr-data/main/en-SD/dateFields.json"), require("cldr-data/main/en-SD/numbers.json"), require("cldr-data/main/en-SD/timeZoneNames.json")];
  },
  "en-SE": function enSE() {
    return [require("cldr-data/main/en-SE/ca-gregorian.json"), require("cldr-data/main/en-SE/currencies.json"), require("cldr-data/main/en-SE/dateFields.json"), require("cldr-data/main/en-SE/numbers.json"), require("cldr-data/main/en-SE/timeZoneNames.json")];
  },
  "en-SG": function enSG() {
    return [require("cldr-data/main/en-SG/ca-gregorian.json"), require("cldr-data/main/en-SG/currencies.json"), require("cldr-data/main/en-SG/dateFields.json"), require("cldr-data/main/en-SG/numbers.json"), require("cldr-data/main/en-SG/timeZoneNames.json")];
  },
  "en-SH": function enSH() {
    return [require("cldr-data/main/en-SH/ca-gregorian.json"), require("cldr-data/main/en-SH/currencies.json"), require("cldr-data/main/en-SH/dateFields.json"), require("cldr-data/main/en-SH/numbers.json"), require("cldr-data/main/en-SH/timeZoneNames.json")];
  },
  "en-SI": function enSI() {
    return [require("cldr-data/main/en-SI/ca-gregorian.json"), require("cldr-data/main/en-SI/currencies.json"), require("cldr-data/main/en-SI/dateFields.json"), require("cldr-data/main/en-SI/numbers.json"), require("cldr-data/main/en-SI/timeZoneNames.json")];
  },
  "en-SL": function enSL() {
    return [require("cldr-data/main/en-SL/ca-gregorian.json"), require("cldr-data/main/en-SL/currencies.json"), require("cldr-data/main/en-SL/dateFields.json"), require("cldr-data/main/en-SL/numbers.json"), require("cldr-data/main/en-SL/timeZoneNames.json")];
  },
  "en-SS": function enSS() {
    return [require("cldr-data/main/en-SS/ca-gregorian.json"), require("cldr-data/main/en-SS/currencies.json"), require("cldr-data/main/en-SS/dateFields.json"), require("cldr-data/main/en-SS/numbers.json"), require("cldr-data/main/en-SS/timeZoneNames.json")];
  },
  "en-SX": function enSX() {
    return [require("cldr-data/main/en-SX/ca-gregorian.json"), require("cldr-data/main/en-SX/currencies.json"), require("cldr-data/main/en-SX/dateFields.json"), require("cldr-data/main/en-SX/numbers.json"), require("cldr-data/main/en-SX/timeZoneNames.json")];
  },
  "en-SZ": function enSZ() {
    return [require("cldr-data/main/en-SZ/ca-gregorian.json"), require("cldr-data/main/en-SZ/currencies.json"), require("cldr-data/main/en-SZ/dateFields.json"), require("cldr-data/main/en-SZ/numbers.json"), require("cldr-data/main/en-SZ/timeZoneNames.json")];
  },
  "en-TC": function enTC() {
    return [require("cldr-data/main/en-TC/ca-gregorian.json"), require("cldr-data/main/en-TC/currencies.json"), require("cldr-data/main/en-TC/dateFields.json"), require("cldr-data/main/en-TC/numbers.json"), require("cldr-data/main/en-TC/timeZoneNames.json")];
  },
  "en-TK": function enTK() {
    return [require("cldr-data/main/en-TK/ca-gregorian.json"), require("cldr-data/main/en-TK/currencies.json"), require("cldr-data/main/en-TK/dateFields.json"), require("cldr-data/main/en-TK/numbers.json"), require("cldr-data/main/en-TK/timeZoneNames.json")];
  },
  "en-TO": function enTO() {
    return [require("cldr-data/main/en-TO/ca-gregorian.json"), require("cldr-data/main/en-TO/currencies.json"), require("cldr-data/main/en-TO/dateFields.json"), require("cldr-data/main/en-TO/numbers.json"), require("cldr-data/main/en-TO/timeZoneNames.json")];
  },
  "en-TT": function enTT() {
    return [require("cldr-data/main/en-TT/ca-gregorian.json"), require("cldr-data/main/en-TT/currencies.json"), require("cldr-data/main/en-TT/dateFields.json"), require("cldr-data/main/en-TT/numbers.json"), require("cldr-data/main/en-TT/timeZoneNames.json")];
  },
  "en-TV": function enTV() {
    return [require("cldr-data/main/en-TV/ca-gregorian.json"), require("cldr-data/main/en-TV/currencies.json"), require("cldr-data/main/en-TV/dateFields.json"), require("cldr-data/main/en-TV/numbers.json"), require("cldr-data/main/en-TV/timeZoneNames.json")];
  },
  "en-TZ": function enTZ() {
    return [require("cldr-data/main/en-TZ/ca-gregorian.json"), require("cldr-data/main/en-TZ/currencies.json"), require("cldr-data/main/en-TZ/dateFields.json"), require("cldr-data/main/en-TZ/numbers.json"), require("cldr-data/main/en-TZ/timeZoneNames.json")];
  },
  "en-UG": function enUG() {
    return [require("cldr-data/main/en-UG/ca-gregorian.json"), require("cldr-data/main/en-UG/currencies.json"), require("cldr-data/main/en-UG/dateFields.json"), require("cldr-data/main/en-UG/numbers.json"), require("cldr-data/main/en-UG/timeZoneNames.json")];
  },
  "en-UM": function enUM() {
    return [require("cldr-data/main/en-UM/ca-gregorian.json"), require("cldr-data/main/en-UM/currencies.json"), require("cldr-data/main/en-UM/dateFields.json"), require("cldr-data/main/en-UM/numbers.json"), require("cldr-data/main/en-UM/timeZoneNames.json")];
  },
  "en-US-POSIX": function enUSPOSIX() {
    return [require("cldr-data/main/en-US-POSIX/ca-gregorian.json"), require("cldr-data/main/en-US-POSIX/currencies.json"), require("cldr-data/main/en-US-POSIX/dateFields.json"), require("cldr-data/main/en-US-POSIX/numbers.json"), require("cldr-data/main/en-US-POSIX/timeZoneNames.json")];
  },
  "en-VC": function enVC() {
    return [require("cldr-data/main/en-VC/ca-gregorian.json"), require("cldr-data/main/en-VC/currencies.json"), require("cldr-data/main/en-VC/dateFields.json"), require("cldr-data/main/en-VC/numbers.json"), require("cldr-data/main/en-VC/timeZoneNames.json")];
  },
  "en-VG": function enVG() {
    return [require("cldr-data/main/en-VG/ca-gregorian.json"), require("cldr-data/main/en-VG/currencies.json"), require("cldr-data/main/en-VG/dateFields.json"), require("cldr-data/main/en-VG/numbers.json"), require("cldr-data/main/en-VG/timeZoneNames.json")];
  },
  "en-VI": function enVI() {
    return [require("cldr-data/main/en-VI/ca-gregorian.json"), require("cldr-data/main/en-VI/currencies.json"), require("cldr-data/main/en-VI/dateFields.json"), require("cldr-data/main/en-VI/numbers.json"), require("cldr-data/main/en-VI/timeZoneNames.json")];
  },
  "en-VU": function enVU() {
    return [require("cldr-data/main/en-VU/ca-gregorian.json"), require("cldr-data/main/en-VU/currencies.json"), require("cldr-data/main/en-VU/dateFields.json"), require("cldr-data/main/en-VU/numbers.json"), require("cldr-data/main/en-VU/timeZoneNames.json")];
  },
  "en-WS": function enWS() {
    return [require("cldr-data/main/en-WS/ca-gregorian.json"), require("cldr-data/main/en-WS/currencies.json"), require("cldr-data/main/en-WS/dateFields.json"), require("cldr-data/main/en-WS/numbers.json"), require("cldr-data/main/en-WS/timeZoneNames.json")];
  },
  "en-ZA": function enZA() {
    return [require("cldr-data/main/en-ZA/ca-gregorian.json"), require("cldr-data/main/en-ZA/currencies.json"), require("cldr-data/main/en-ZA/dateFields.json"), require("cldr-data/main/en-ZA/numbers.json"), require("cldr-data/main/en-ZA/timeZoneNames.json")];
  },
  "en-ZM": function enZM() {
    return [require("cldr-data/main/en-ZM/ca-gregorian.json"), require("cldr-data/main/en-ZM/currencies.json"), require("cldr-data/main/en-ZM/dateFields.json"), require("cldr-data/main/en-ZM/numbers.json"), require("cldr-data/main/en-ZM/timeZoneNames.json")];
  },
  "en-ZW": function enZW() {
    return [require("cldr-data/main/en-ZW/ca-gregorian.json"), require("cldr-data/main/en-ZW/currencies.json"), require("cldr-data/main/en-ZW/dateFields.json"), require("cldr-data/main/en-ZW/numbers.json"), require("cldr-data/main/en-ZW/timeZoneNames.json")];
  },
  "es": function es() {
    return [require("cldr-data/main/es/ca-gregorian.json"), require("cldr-data/main/es/currencies.json"), require("cldr-data/main/es/dateFields.json"), require("cldr-data/main/es/numbers.json"), require("cldr-data/main/es/timeZoneNames.json")];
  },
  "es-419": function es419() {
    return [require("cldr-data/main/es-419/ca-gregorian.json"), require("cldr-data/main/es-419/currencies.json"), require("cldr-data/main/es-419/dateFields.json"), require("cldr-data/main/es-419/numbers.json"), require("cldr-data/main/es-419/timeZoneNames.json")];
  },
  "es-AR": function esAR() {
    return [require("cldr-data/main/es-AR/ca-gregorian.json"), require("cldr-data/main/es-AR/currencies.json"), require("cldr-data/main/es-AR/dateFields.json"), require("cldr-data/main/es-AR/numbers.json"), require("cldr-data/main/es-AR/timeZoneNames.json")];
  },
  "es-BO": function esBO() {
    return [require("cldr-data/main/es-BO/ca-gregorian.json"), require("cldr-data/main/es-BO/currencies.json"), require("cldr-data/main/es-BO/dateFields.json"), require("cldr-data/main/es-BO/numbers.json"), require("cldr-data/main/es-BO/timeZoneNames.json")];
  },
  "es-CL": function esCL() {
    return [require("cldr-data/main/es-CL/ca-gregorian.json"), require("cldr-data/main/es-CL/currencies.json"), require("cldr-data/main/es-CL/dateFields.json"), require("cldr-data/main/es-CL/numbers.json"), require("cldr-data/main/es-CL/timeZoneNames.json")];
  },
  "es-CO": function esCO() {
    return [require("cldr-data/main/es-CO/ca-gregorian.json"), require("cldr-data/main/es-CO/currencies.json"), require("cldr-data/main/es-CO/dateFields.json"), require("cldr-data/main/es-CO/numbers.json"), require("cldr-data/main/es-CO/timeZoneNames.json")];
  },
  "es-CR": function esCR() {
    return [require("cldr-data/main/es-CR/ca-gregorian.json"), require("cldr-data/main/es-CR/currencies.json"), require("cldr-data/main/es-CR/dateFields.json"), require("cldr-data/main/es-CR/numbers.json"), require("cldr-data/main/es-CR/timeZoneNames.json")];
  },
  "es-CU": function esCU() {
    return [require("cldr-data/main/es-CU/ca-gregorian.json"), require("cldr-data/main/es-CU/currencies.json"), require("cldr-data/main/es-CU/dateFields.json"), require("cldr-data/main/es-CU/numbers.json"), require("cldr-data/main/es-CU/timeZoneNames.json")];
  },
  "es-DO": function esDO() {
    return [require("cldr-data/main/es-DO/ca-gregorian.json"), require("cldr-data/main/es-DO/currencies.json"), require("cldr-data/main/es-DO/dateFields.json"), require("cldr-data/main/es-DO/numbers.json"), require("cldr-data/main/es-DO/timeZoneNames.json")];
  },
  "es-EA": function esEA() {
    return [require("cldr-data/main/es-EA/ca-gregorian.json"), require("cldr-data/main/es-EA/currencies.json"), require("cldr-data/main/es-EA/dateFields.json"), require("cldr-data/main/es-EA/numbers.json"), require("cldr-data/main/es-EA/timeZoneNames.json")];
  },
  "es-EC": function esEC() {
    return [require("cldr-data/main/es-EC/ca-gregorian.json"), require("cldr-data/main/es-EC/currencies.json"), require("cldr-data/main/es-EC/dateFields.json"), require("cldr-data/main/es-EC/numbers.json"), require("cldr-data/main/es-EC/timeZoneNames.json")];
  },
  "es-GQ": function esGQ() {
    return [require("cldr-data/main/es-GQ/ca-gregorian.json"), require("cldr-data/main/es-GQ/currencies.json"), require("cldr-data/main/es-GQ/dateFields.json"), require("cldr-data/main/es-GQ/numbers.json"), require("cldr-data/main/es-GQ/timeZoneNames.json")];
  },
  "es-GT": function esGT() {
    return [require("cldr-data/main/es-GT/ca-gregorian.json"), require("cldr-data/main/es-GT/currencies.json"), require("cldr-data/main/es-GT/dateFields.json"), require("cldr-data/main/es-GT/numbers.json"), require("cldr-data/main/es-GT/timeZoneNames.json")];
  },
  "es-HN": function esHN() {
    return [require("cldr-data/main/es-HN/ca-gregorian.json"), require("cldr-data/main/es-HN/currencies.json"), require("cldr-data/main/es-HN/dateFields.json"), require("cldr-data/main/es-HN/numbers.json"), require("cldr-data/main/es-HN/timeZoneNames.json")];
  },
  "es-IC": function esIC() {
    return [require("cldr-data/main/es-IC/ca-gregorian.json"), require("cldr-data/main/es-IC/currencies.json"), require("cldr-data/main/es-IC/dateFields.json"), require("cldr-data/main/es-IC/numbers.json"), require("cldr-data/main/es-IC/timeZoneNames.json")];
  },
  "es-MX": function esMX() {
    return [require("cldr-data/main/es-MX/ca-gregorian.json"), require("cldr-data/main/es-MX/currencies.json"), require("cldr-data/main/es-MX/dateFields.json"), require("cldr-data/main/es-MX/numbers.json"), require("cldr-data/main/es-MX/timeZoneNames.json")];
  },
  "es-NI": function esNI() {
    return [require("cldr-data/main/es-NI/ca-gregorian.json"), require("cldr-data/main/es-NI/currencies.json"), require("cldr-data/main/es-NI/dateFields.json"), require("cldr-data/main/es-NI/numbers.json"), require("cldr-data/main/es-NI/timeZoneNames.json")];
  },
  "es-PA": function esPA() {
    return [require("cldr-data/main/es-PA/ca-gregorian.json"), require("cldr-data/main/es-PA/currencies.json"), require("cldr-data/main/es-PA/dateFields.json"), require("cldr-data/main/es-PA/numbers.json"), require("cldr-data/main/es-PA/timeZoneNames.json")];
  },
  "es-PE": function esPE() {
    return [require("cldr-data/main/es-PE/ca-gregorian.json"), require("cldr-data/main/es-PE/currencies.json"), require("cldr-data/main/es-PE/dateFields.json"), require("cldr-data/main/es-PE/numbers.json"), require("cldr-data/main/es-PE/timeZoneNames.json")];
  },
  "es-PH": function esPH() {
    return [require("cldr-data/main/es-PH/ca-gregorian.json"), require("cldr-data/main/es-PH/currencies.json"), require("cldr-data/main/es-PH/dateFields.json"), require("cldr-data/main/es-PH/numbers.json"), require("cldr-data/main/es-PH/timeZoneNames.json")];
  },
  "es-PR": function esPR() {
    return [require("cldr-data/main/es-PR/ca-gregorian.json"), require("cldr-data/main/es-PR/currencies.json"), require("cldr-data/main/es-PR/dateFields.json"), require("cldr-data/main/es-PR/numbers.json"), require("cldr-data/main/es-PR/timeZoneNames.json")];
  },
  "es-PY": function esPY() {
    return [require("cldr-data/main/es-PY/ca-gregorian.json"), require("cldr-data/main/es-PY/currencies.json"), require("cldr-data/main/es-PY/dateFields.json"), require("cldr-data/main/es-PY/numbers.json"), require("cldr-data/main/es-PY/timeZoneNames.json")];
  },
  "es-SV": function esSV() {
    return [require("cldr-data/main/es-SV/ca-gregorian.json"), require("cldr-data/main/es-SV/currencies.json"), require("cldr-data/main/es-SV/dateFields.json"), require("cldr-data/main/es-SV/numbers.json"), require("cldr-data/main/es-SV/timeZoneNames.json")];
  },
  "es-US": function esUS() {
    return [require("cldr-data/main/es-US/ca-gregorian.json"), require("cldr-data/main/es-US/currencies.json"), require("cldr-data/main/es-US/dateFields.json"), require("cldr-data/main/es-US/numbers.json"), require("cldr-data/main/es-US/timeZoneNames.json")];
  },
  "es-UY": function esUY() {
    return [require("cldr-data/main/es-UY/ca-gregorian.json"), require("cldr-data/main/es-UY/currencies.json"), require("cldr-data/main/es-UY/dateFields.json"), require("cldr-data/main/es-UY/numbers.json"), require("cldr-data/main/es-UY/timeZoneNames.json")];
  },
  "es-VE": function esVE() {
    return [require("cldr-data/main/es-VE/ca-gregorian.json"), require("cldr-data/main/es-VE/currencies.json"), require("cldr-data/main/es-VE/dateFields.json"), require("cldr-data/main/es-VE/numbers.json"), require("cldr-data/main/es-VE/timeZoneNames.json")];
  },
  "et": function et() {
    return [require("cldr-data/main/et/ca-gregorian.json"), require("cldr-data/main/et/currencies.json"), require("cldr-data/main/et/dateFields.json"), require("cldr-data/main/et/numbers.json"), require("cldr-data/main/et/timeZoneNames.json")];
  },
  "eu": function eu() {
    return [require("cldr-data/main/eu/ca-gregorian.json"), require("cldr-data/main/eu/currencies.json"), require("cldr-data/main/eu/dateFields.json"), require("cldr-data/main/eu/numbers.json"), require("cldr-data/main/eu/timeZoneNames.json")];
  },
  "fa": function fa() {
    return [require("cldr-data/main/fa/ca-gregorian.json"), require("cldr-data/main/fa/currencies.json"), require("cldr-data/main/fa/dateFields.json"), require("cldr-data/main/fa/numbers.json"), require("cldr-data/main/fa/timeZoneNames.json")];
  },
  "fa-AF": function faAF() {
    return [require("cldr-data/main/fa-AF/ca-gregorian.json"), require("cldr-data/main/fa-AF/currencies.json"), require("cldr-data/main/fa-AF/dateFields.json"), require("cldr-data/main/fa-AF/numbers.json"), require("cldr-data/main/fa-AF/timeZoneNames.json")];
  },
  "fi": function fi() {
    return [require("cldr-data/main/fi/ca-gregorian.json"), require("cldr-data/main/fi/currencies.json"), require("cldr-data/main/fi/dateFields.json"), require("cldr-data/main/fi/numbers.json"), require("cldr-data/main/fi/timeZoneNames.json")];
  },
  "fil": function fil() {
    return [require("cldr-data/main/fil/ca-gregorian.json"), require("cldr-data/main/fil/currencies.json"), require("cldr-data/main/fil/dateFields.json"), require("cldr-data/main/fil/numbers.json"), require("cldr-data/main/fil/timeZoneNames.json")];
  },
  "fo": function fo() {
    return [require("cldr-data/main/fo/ca-gregorian.json"), require("cldr-data/main/fo/currencies.json"), require("cldr-data/main/fo/dateFields.json"), require("cldr-data/main/fo/numbers.json"), require("cldr-data/main/fo/timeZoneNames.json")];
  },
  "fo-DK": function foDK() {
    return [require("cldr-data/main/fo-DK/ca-gregorian.json"), require("cldr-data/main/fo-DK/currencies.json"), require("cldr-data/main/fo-DK/dateFields.json"), require("cldr-data/main/fo-DK/numbers.json"), require("cldr-data/main/fo-DK/timeZoneNames.json")];
  },
  "fr": function fr() {
    return [require("cldr-data/main/fr/ca-gregorian.json"), require("cldr-data/main/fr/currencies.json"), require("cldr-data/main/fr/dateFields.json"), require("cldr-data/main/fr/numbers.json"), require("cldr-data/main/fr/timeZoneNames.json")];
  },
  "fr-BE": function frBE() {
    return [require("cldr-data/main/fr-BE/ca-gregorian.json"), require("cldr-data/main/fr-BE/currencies.json"), require("cldr-data/main/fr-BE/dateFields.json"), require("cldr-data/main/fr-BE/numbers.json"), require("cldr-data/main/fr-BE/timeZoneNames.json")];
  },
  "fr-BF": function frBF() {
    return [require("cldr-data/main/fr-BF/ca-gregorian.json"), require("cldr-data/main/fr-BF/currencies.json"), require("cldr-data/main/fr-BF/dateFields.json"), require("cldr-data/main/fr-BF/numbers.json"), require("cldr-data/main/fr-BF/timeZoneNames.json")];
  },
  "fr-BI": function frBI() {
    return [require("cldr-data/main/fr-BI/ca-gregorian.json"), require("cldr-data/main/fr-BI/currencies.json"), require("cldr-data/main/fr-BI/dateFields.json"), require("cldr-data/main/fr-BI/numbers.json"), require("cldr-data/main/fr-BI/timeZoneNames.json")];
  },
  "fr-BJ": function frBJ() {
    return [require("cldr-data/main/fr-BJ/ca-gregorian.json"), require("cldr-data/main/fr-BJ/currencies.json"), require("cldr-data/main/fr-BJ/dateFields.json"), require("cldr-data/main/fr-BJ/numbers.json"), require("cldr-data/main/fr-BJ/timeZoneNames.json")];
  },
  "fr-BL": function frBL() {
    return [require("cldr-data/main/fr-BL/ca-gregorian.json"), require("cldr-data/main/fr-BL/currencies.json"), require("cldr-data/main/fr-BL/dateFields.json"), require("cldr-data/main/fr-BL/numbers.json"), require("cldr-data/main/fr-BL/timeZoneNames.json")];
  },
  "fr-CA": function frCA() {
    return [require("cldr-data/main/fr-CA/ca-gregorian.json"), require("cldr-data/main/fr-CA/currencies.json"), require("cldr-data/main/fr-CA/dateFields.json"), require("cldr-data/main/fr-CA/numbers.json"), require("cldr-data/main/fr-CA/timeZoneNames.json")];
  },
  "fr-CD": function frCD() {
    return [require("cldr-data/main/fr-CD/ca-gregorian.json"), require("cldr-data/main/fr-CD/currencies.json"), require("cldr-data/main/fr-CD/dateFields.json"), require("cldr-data/main/fr-CD/numbers.json"), require("cldr-data/main/fr-CD/timeZoneNames.json")];
  },
  "fr-CF": function frCF() {
    return [require("cldr-data/main/fr-CF/ca-gregorian.json"), require("cldr-data/main/fr-CF/currencies.json"), require("cldr-data/main/fr-CF/dateFields.json"), require("cldr-data/main/fr-CF/numbers.json"), require("cldr-data/main/fr-CF/timeZoneNames.json")];
  },
  "fr-CG": function frCG() {
    return [require("cldr-data/main/fr-CG/ca-gregorian.json"), require("cldr-data/main/fr-CG/currencies.json"), require("cldr-data/main/fr-CG/dateFields.json"), require("cldr-data/main/fr-CG/numbers.json"), require("cldr-data/main/fr-CG/timeZoneNames.json")];
  },
  "fr-CH": function frCH() {
    return [require("cldr-data/main/fr-CH/ca-gregorian.json"), require("cldr-data/main/fr-CH/currencies.json"), require("cldr-data/main/fr-CH/dateFields.json"), require("cldr-data/main/fr-CH/numbers.json"), require("cldr-data/main/fr-CH/timeZoneNames.json")];
  },
  "fr-CI": function frCI() {
    return [require("cldr-data/main/fr-CI/ca-gregorian.json"), require("cldr-data/main/fr-CI/currencies.json"), require("cldr-data/main/fr-CI/dateFields.json"), require("cldr-data/main/fr-CI/numbers.json"), require("cldr-data/main/fr-CI/timeZoneNames.json")];
  },
  "fr-CM": function frCM() {
    return [require("cldr-data/main/fr-CM/ca-gregorian.json"), require("cldr-data/main/fr-CM/currencies.json"), require("cldr-data/main/fr-CM/dateFields.json"), require("cldr-data/main/fr-CM/numbers.json"), require("cldr-data/main/fr-CM/timeZoneNames.json")];
  },
  "fr-DJ": function frDJ() {
    return [require("cldr-data/main/fr-DJ/ca-gregorian.json"), require("cldr-data/main/fr-DJ/currencies.json"), require("cldr-data/main/fr-DJ/dateFields.json"), require("cldr-data/main/fr-DJ/numbers.json"), require("cldr-data/main/fr-DJ/timeZoneNames.json")];
  },
  "fr-DZ": function frDZ() {
    return [require("cldr-data/main/fr-DZ/ca-gregorian.json"), require("cldr-data/main/fr-DZ/currencies.json"), require("cldr-data/main/fr-DZ/dateFields.json"), require("cldr-data/main/fr-DZ/numbers.json"), require("cldr-data/main/fr-DZ/timeZoneNames.json")];
  },
  "fr-GA": function frGA() {
    return [require("cldr-data/main/fr-GA/ca-gregorian.json"), require("cldr-data/main/fr-GA/currencies.json"), require("cldr-data/main/fr-GA/dateFields.json"), require("cldr-data/main/fr-GA/numbers.json"), require("cldr-data/main/fr-GA/timeZoneNames.json")];
  },
  "fr-GF": function frGF() {
    return [require("cldr-data/main/fr-GF/ca-gregorian.json"), require("cldr-data/main/fr-GF/currencies.json"), require("cldr-data/main/fr-GF/dateFields.json"), require("cldr-data/main/fr-GF/numbers.json"), require("cldr-data/main/fr-GF/timeZoneNames.json")];
  },
  "fr-GN": function frGN() {
    return [require("cldr-data/main/fr-GN/ca-gregorian.json"), require("cldr-data/main/fr-GN/currencies.json"), require("cldr-data/main/fr-GN/dateFields.json"), require("cldr-data/main/fr-GN/numbers.json"), require("cldr-data/main/fr-GN/timeZoneNames.json")];
  },
  "fr-GP": function frGP() {
    return [require("cldr-data/main/fr-GP/ca-gregorian.json"), require("cldr-data/main/fr-GP/currencies.json"), require("cldr-data/main/fr-GP/dateFields.json"), require("cldr-data/main/fr-GP/numbers.json"), require("cldr-data/main/fr-GP/timeZoneNames.json")];
  },
  "fr-GQ": function frGQ() {
    return [require("cldr-data/main/fr-GQ/ca-gregorian.json"), require("cldr-data/main/fr-GQ/currencies.json"), require("cldr-data/main/fr-GQ/dateFields.json"), require("cldr-data/main/fr-GQ/numbers.json"), require("cldr-data/main/fr-GQ/timeZoneNames.json")];
  },
  "fr-HT": function frHT() {
    return [require("cldr-data/main/fr-HT/ca-gregorian.json"), require("cldr-data/main/fr-HT/currencies.json"), require("cldr-data/main/fr-HT/dateFields.json"), require("cldr-data/main/fr-HT/numbers.json"), require("cldr-data/main/fr-HT/timeZoneNames.json")];
  },
  "fr-KM": function frKM() {
    return [require("cldr-data/main/fr-KM/ca-gregorian.json"), require("cldr-data/main/fr-KM/currencies.json"), require("cldr-data/main/fr-KM/dateFields.json"), require("cldr-data/main/fr-KM/numbers.json"), require("cldr-data/main/fr-KM/timeZoneNames.json")];
  },
  "fr-LU": function frLU() {
    return [require("cldr-data/main/fr-LU/ca-gregorian.json"), require("cldr-data/main/fr-LU/currencies.json"), require("cldr-data/main/fr-LU/dateFields.json"), require("cldr-data/main/fr-LU/numbers.json"), require("cldr-data/main/fr-LU/timeZoneNames.json")];
  },
  "fr-MA": function frMA() {
    return [require("cldr-data/main/fr-MA/ca-gregorian.json"), require("cldr-data/main/fr-MA/currencies.json"), require("cldr-data/main/fr-MA/dateFields.json"), require("cldr-data/main/fr-MA/numbers.json"), require("cldr-data/main/fr-MA/timeZoneNames.json")];
  },
  "fr-MC": function frMC() {
    return [require("cldr-data/main/fr-MC/ca-gregorian.json"), require("cldr-data/main/fr-MC/currencies.json"), require("cldr-data/main/fr-MC/dateFields.json"), require("cldr-data/main/fr-MC/numbers.json"), require("cldr-data/main/fr-MC/timeZoneNames.json")];
  },
  "fr-MF": function frMF() {
    return [require("cldr-data/main/fr-MF/ca-gregorian.json"), require("cldr-data/main/fr-MF/currencies.json"), require("cldr-data/main/fr-MF/dateFields.json"), require("cldr-data/main/fr-MF/numbers.json"), require("cldr-data/main/fr-MF/timeZoneNames.json")];
  },
  "fr-MG": function frMG() {
    return [require("cldr-data/main/fr-MG/ca-gregorian.json"), require("cldr-data/main/fr-MG/currencies.json"), require("cldr-data/main/fr-MG/dateFields.json"), require("cldr-data/main/fr-MG/numbers.json"), require("cldr-data/main/fr-MG/timeZoneNames.json")];
  },
  "fr-ML": function frML() {
    return [require("cldr-data/main/fr-ML/ca-gregorian.json"), require("cldr-data/main/fr-ML/currencies.json"), require("cldr-data/main/fr-ML/dateFields.json"), require("cldr-data/main/fr-ML/numbers.json"), require("cldr-data/main/fr-ML/timeZoneNames.json")];
  },
  "fr-MQ": function frMQ() {
    return [require("cldr-data/main/fr-MQ/ca-gregorian.json"), require("cldr-data/main/fr-MQ/currencies.json"), require("cldr-data/main/fr-MQ/dateFields.json"), require("cldr-data/main/fr-MQ/numbers.json"), require("cldr-data/main/fr-MQ/timeZoneNames.json")];
  },
  "fr-MR": function frMR() {
    return [require("cldr-data/main/fr-MR/ca-gregorian.json"), require("cldr-data/main/fr-MR/currencies.json"), require("cldr-data/main/fr-MR/dateFields.json"), require("cldr-data/main/fr-MR/numbers.json"), require("cldr-data/main/fr-MR/timeZoneNames.json")];
  },
  "fr-MU": function frMU() {
    return [require("cldr-data/main/fr-MU/ca-gregorian.json"), require("cldr-data/main/fr-MU/currencies.json"), require("cldr-data/main/fr-MU/dateFields.json"), require("cldr-data/main/fr-MU/numbers.json"), require("cldr-data/main/fr-MU/timeZoneNames.json")];
  },
  "fr-NC": function frNC() {
    return [require("cldr-data/main/fr-NC/ca-gregorian.json"), require("cldr-data/main/fr-NC/currencies.json"), require("cldr-data/main/fr-NC/dateFields.json"), require("cldr-data/main/fr-NC/numbers.json"), require("cldr-data/main/fr-NC/timeZoneNames.json")];
  },
  "fr-NE": function frNE() {
    return [require("cldr-data/main/fr-NE/ca-gregorian.json"), require("cldr-data/main/fr-NE/currencies.json"), require("cldr-data/main/fr-NE/dateFields.json"), require("cldr-data/main/fr-NE/numbers.json"), require("cldr-data/main/fr-NE/timeZoneNames.json")];
  },
  "fr-PF": function frPF() {
    return [require("cldr-data/main/fr-PF/ca-gregorian.json"), require("cldr-data/main/fr-PF/currencies.json"), require("cldr-data/main/fr-PF/dateFields.json"), require("cldr-data/main/fr-PF/numbers.json"), require("cldr-data/main/fr-PF/timeZoneNames.json")];
  },
  "fr-PM": function frPM() {
    return [require("cldr-data/main/fr-PM/ca-gregorian.json"), require("cldr-data/main/fr-PM/currencies.json"), require("cldr-data/main/fr-PM/dateFields.json"), require("cldr-data/main/fr-PM/numbers.json"), require("cldr-data/main/fr-PM/timeZoneNames.json")];
  },
  "fr-RE": function frRE() {
    return [require("cldr-data/main/fr-RE/ca-gregorian.json"), require("cldr-data/main/fr-RE/currencies.json"), require("cldr-data/main/fr-RE/dateFields.json"), require("cldr-data/main/fr-RE/numbers.json"), require("cldr-data/main/fr-RE/timeZoneNames.json")];
  },
  "fr-RW": function frRW() {
    return [require("cldr-data/main/fr-RW/ca-gregorian.json"), require("cldr-data/main/fr-RW/currencies.json"), require("cldr-data/main/fr-RW/dateFields.json"), require("cldr-data/main/fr-RW/numbers.json"), require("cldr-data/main/fr-RW/timeZoneNames.json")];
  },
  "fr-SC": function frSC() {
    return [require("cldr-data/main/fr-SC/ca-gregorian.json"), require("cldr-data/main/fr-SC/currencies.json"), require("cldr-data/main/fr-SC/dateFields.json"), require("cldr-data/main/fr-SC/numbers.json"), require("cldr-data/main/fr-SC/timeZoneNames.json")];
  },
  "fr-SN": function frSN() {
    return [require("cldr-data/main/fr-SN/ca-gregorian.json"), require("cldr-data/main/fr-SN/currencies.json"), require("cldr-data/main/fr-SN/dateFields.json"), require("cldr-data/main/fr-SN/numbers.json"), require("cldr-data/main/fr-SN/timeZoneNames.json")];
  },
  "fr-SY": function frSY() {
    return [require("cldr-data/main/fr-SY/ca-gregorian.json"), require("cldr-data/main/fr-SY/currencies.json"), require("cldr-data/main/fr-SY/dateFields.json"), require("cldr-data/main/fr-SY/numbers.json"), require("cldr-data/main/fr-SY/timeZoneNames.json")];
  },
  "fr-TD": function frTD() {
    return [require("cldr-data/main/fr-TD/ca-gregorian.json"), require("cldr-data/main/fr-TD/currencies.json"), require("cldr-data/main/fr-TD/dateFields.json"), require("cldr-data/main/fr-TD/numbers.json"), require("cldr-data/main/fr-TD/timeZoneNames.json")];
  },
  "fr-TG": function frTG() {
    return [require("cldr-data/main/fr-TG/ca-gregorian.json"), require("cldr-data/main/fr-TG/currencies.json"), require("cldr-data/main/fr-TG/dateFields.json"), require("cldr-data/main/fr-TG/numbers.json"), require("cldr-data/main/fr-TG/timeZoneNames.json")];
  },
  "fr-TN": function frTN() {
    return [require("cldr-data/main/fr-TN/ca-gregorian.json"), require("cldr-data/main/fr-TN/currencies.json"), require("cldr-data/main/fr-TN/dateFields.json"), require("cldr-data/main/fr-TN/numbers.json"), require("cldr-data/main/fr-TN/timeZoneNames.json")];
  },
  "fr-VU": function frVU() {
    return [require("cldr-data/main/fr-VU/ca-gregorian.json"), require("cldr-data/main/fr-VU/currencies.json"), require("cldr-data/main/fr-VU/dateFields.json"), require("cldr-data/main/fr-VU/numbers.json"), require("cldr-data/main/fr-VU/timeZoneNames.json")];
  },
  "fr-WF": function frWF() {
    return [require("cldr-data/main/fr-WF/ca-gregorian.json"), require("cldr-data/main/fr-WF/currencies.json"), require("cldr-data/main/fr-WF/dateFields.json"), require("cldr-data/main/fr-WF/numbers.json"), require("cldr-data/main/fr-WF/timeZoneNames.json")];
  },
  "fr-YT": function frYT() {
    return [require("cldr-data/main/fr-YT/ca-gregorian.json"), require("cldr-data/main/fr-YT/currencies.json"), require("cldr-data/main/fr-YT/dateFields.json"), require("cldr-data/main/fr-YT/numbers.json"), require("cldr-data/main/fr-YT/timeZoneNames.json")];
  },
  "ga": function ga() {
    return [require("cldr-data/main/ga/ca-gregorian.json"), require("cldr-data/main/ga/currencies.json"), require("cldr-data/main/ga/dateFields.json"), require("cldr-data/main/ga/numbers.json"), require("cldr-data/main/ga/timeZoneNames.json")];
  },
  "gl": function gl() {
    return [require("cldr-data/main/gl/ca-gregorian.json"), require("cldr-data/main/gl/currencies.json"), require("cldr-data/main/gl/dateFields.json"), require("cldr-data/main/gl/numbers.json"), require("cldr-data/main/gl/timeZoneNames.json")];
  },
  "gu": function gu() {
    return [require("cldr-data/main/gu/ca-gregorian.json"), require("cldr-data/main/gu/currencies.json"), require("cldr-data/main/gu/dateFields.json"), require("cldr-data/main/gu/numbers.json"), require("cldr-data/main/gu/timeZoneNames.json")];
  },
  "he": function he() {
    return [require("cldr-data/main/he/ca-gregorian.json"), require("cldr-data/main/he/currencies.json"), require("cldr-data/main/he/dateFields.json"), require("cldr-data/main/he/numbers.json"), require("cldr-data/main/he/timeZoneNames.json")];
  },
  "hi": function hi() {
    return [require("cldr-data/main/hi/ca-gregorian.json"), require("cldr-data/main/hi/currencies.json"), require("cldr-data/main/hi/dateFields.json"), require("cldr-data/main/hi/numbers.json"), require("cldr-data/main/hi/timeZoneNames.json")];
  },
  "hr": function hr() {
    return [require("cldr-data/main/hr/ca-gregorian.json"), require("cldr-data/main/hr/currencies.json"), require("cldr-data/main/hr/dateFields.json"), require("cldr-data/main/hr/numbers.json"), require("cldr-data/main/hr/timeZoneNames.json")];
  },
  "hr-BA": function hrBA() {
    return [require("cldr-data/main/hr-BA/ca-gregorian.json"), require("cldr-data/main/hr-BA/currencies.json"), require("cldr-data/main/hr-BA/dateFields.json"), require("cldr-data/main/hr-BA/numbers.json"), require("cldr-data/main/hr-BA/timeZoneNames.json")];
  },
  "hu": function hu() {
    return [require("cldr-data/main/hu/ca-gregorian.json"), require("cldr-data/main/hu/currencies.json"), require("cldr-data/main/hu/dateFields.json"), require("cldr-data/main/hu/numbers.json"), require("cldr-data/main/hu/timeZoneNames.json")];
  },
  "hy": function hy() {
    return [require("cldr-data/main/hy/ca-gregorian.json"), require("cldr-data/main/hy/currencies.json"), require("cldr-data/main/hy/dateFields.json"), require("cldr-data/main/hy/numbers.json"), require("cldr-data/main/hy/timeZoneNames.json")];
  },
  "id": function id() {
    return [require("cldr-data/main/id/ca-gregorian.json"), require("cldr-data/main/id/currencies.json"), require("cldr-data/main/id/dateFields.json"), require("cldr-data/main/id/numbers.json"), require("cldr-data/main/id/timeZoneNames.json")];
  },
  "is": function is() {
    return [require("cldr-data/main/is/ca-gregorian.json"), require("cldr-data/main/is/currencies.json"), require("cldr-data/main/is/dateFields.json"), require("cldr-data/main/is/numbers.json"), require("cldr-data/main/is/timeZoneNames.json")];
  },
  "it": function it() {
    return [require("cldr-data/main/it/ca-gregorian.json"), require("cldr-data/main/it/currencies.json"), require("cldr-data/main/it/dateFields.json"), require("cldr-data/main/it/numbers.json"), require("cldr-data/main/it/timeZoneNames.json")];
  },
  "it-CH": function itCH() {
    return [require("cldr-data/main/it-CH/ca-gregorian.json"), require("cldr-data/main/it-CH/currencies.json"), require("cldr-data/main/it-CH/dateFields.json"), require("cldr-data/main/it-CH/numbers.json"), require("cldr-data/main/it-CH/timeZoneNames.json")];
  },
  "it-SM": function itSM() {
    return [require("cldr-data/main/it-SM/ca-gregorian.json"), require("cldr-data/main/it-SM/currencies.json"), require("cldr-data/main/it-SM/dateFields.json"), require("cldr-data/main/it-SM/numbers.json"), require("cldr-data/main/it-SM/timeZoneNames.json")];
  },
  "ja": function ja() {
    return [require("cldr-data/main/ja/ca-gregorian.json"), require("cldr-data/main/ja/currencies.json"), require("cldr-data/main/ja/dateFields.json"), require("cldr-data/main/ja/numbers.json"), require("cldr-data/main/ja/timeZoneNames.json")];
  },
  "ka": function ka() {
    return [require("cldr-data/main/ka/ca-gregorian.json"), require("cldr-data/main/ka/currencies.json"), require("cldr-data/main/ka/dateFields.json"), require("cldr-data/main/ka/numbers.json"), require("cldr-data/main/ka/timeZoneNames.json")];
  },
  "kk": function kk() {
    return [require("cldr-data/main/kk/ca-gregorian.json"), require("cldr-data/main/kk/currencies.json"), require("cldr-data/main/kk/dateFields.json"), require("cldr-data/main/kk/numbers.json"), require("cldr-data/main/kk/timeZoneNames.json")];
  },
  "km": function km() {
    return [require("cldr-data/main/km/ca-gregorian.json"), require("cldr-data/main/km/currencies.json"), require("cldr-data/main/km/dateFields.json"), require("cldr-data/main/km/numbers.json"), require("cldr-data/main/km/timeZoneNames.json")];
  },
  "kn": function kn() {
    return [require("cldr-data/main/kn/ca-gregorian.json"), require("cldr-data/main/kn/currencies.json"), require("cldr-data/main/kn/dateFields.json"), require("cldr-data/main/kn/numbers.json"), require("cldr-data/main/kn/timeZoneNames.json")];
  },
  "ko": function ko() {
    return [require("cldr-data/main/ko/ca-gregorian.json"), require("cldr-data/main/ko/currencies.json"), require("cldr-data/main/ko/dateFields.json"), require("cldr-data/main/ko/numbers.json"), require("cldr-data/main/ko/timeZoneNames.json")];
  },
  "ko-KP": function koKP() {
    return [require("cldr-data/main/ko-KP/ca-gregorian.json"), require("cldr-data/main/ko-KP/currencies.json"), require("cldr-data/main/ko-KP/dateFields.json"), require("cldr-data/main/ko-KP/numbers.json"), require("cldr-data/main/ko-KP/timeZoneNames.json")];
  },
  "ky": function ky() {
    return [require("cldr-data/main/ky/ca-gregorian.json"), require("cldr-data/main/ky/currencies.json"), require("cldr-data/main/ky/dateFields.json"), require("cldr-data/main/ky/numbers.json"), require("cldr-data/main/ky/timeZoneNames.json")];
  },
  "lo": function lo() {
    return [require("cldr-data/main/lo/ca-gregorian.json"), require("cldr-data/main/lo/currencies.json"), require("cldr-data/main/lo/dateFields.json"), require("cldr-data/main/lo/numbers.json"), require("cldr-data/main/lo/timeZoneNames.json")];
  },
  "lt": function lt() {
    return [require("cldr-data/main/lt/ca-gregorian.json"), require("cldr-data/main/lt/currencies.json"), require("cldr-data/main/lt/dateFields.json"), require("cldr-data/main/lt/numbers.json"), require("cldr-data/main/lt/timeZoneNames.json")];
  },
  "lv": function lv() {
    return [require("cldr-data/main/lv/ca-gregorian.json"), require("cldr-data/main/lv/currencies.json"), require("cldr-data/main/lv/dateFields.json"), require("cldr-data/main/lv/numbers.json"), require("cldr-data/main/lv/timeZoneNames.json")];
  },
  "mk": function mk() {
    return [require("cldr-data/main/mk/ca-gregorian.json"), require("cldr-data/main/mk/currencies.json"), require("cldr-data/main/mk/dateFields.json"), require("cldr-data/main/mk/numbers.json"), require("cldr-data/main/mk/timeZoneNames.json")];
  },
  "ml": function ml() {
    return [require("cldr-data/main/ml/ca-gregorian.json"), require("cldr-data/main/ml/currencies.json"), require("cldr-data/main/ml/dateFields.json"), require("cldr-data/main/ml/numbers.json"), require("cldr-data/main/ml/timeZoneNames.json")];
  },
  "mn": function mn() {
    return [require("cldr-data/main/mn/ca-gregorian.json"), require("cldr-data/main/mn/currencies.json"), require("cldr-data/main/mn/dateFields.json"), require("cldr-data/main/mn/numbers.json"), require("cldr-data/main/mn/timeZoneNames.json")];
  },
  "mr": function mr() {
    return [require("cldr-data/main/mr/ca-gregorian.json"), require("cldr-data/main/mr/currencies.json"), require("cldr-data/main/mr/dateFields.json"), require("cldr-data/main/mr/numbers.json"), require("cldr-data/main/mr/timeZoneNames.json")];
  },
  "ms": function ms() {
    return [require("cldr-data/main/ms/ca-gregorian.json"), require("cldr-data/main/ms/currencies.json"), require("cldr-data/main/ms/dateFields.json"), require("cldr-data/main/ms/numbers.json"), require("cldr-data/main/ms/timeZoneNames.json")];
  },
  "ms-BN": function msBN() {
    return [require("cldr-data/main/ms-BN/ca-gregorian.json"), require("cldr-data/main/ms-BN/currencies.json"), require("cldr-data/main/ms-BN/dateFields.json"), require("cldr-data/main/ms-BN/numbers.json"), require("cldr-data/main/ms-BN/timeZoneNames.json")];
  },
  "ms-SG": function msSG() {
    return [require("cldr-data/main/ms-SG/ca-gregorian.json"), require("cldr-data/main/ms-SG/currencies.json"), require("cldr-data/main/ms-SG/dateFields.json"), require("cldr-data/main/ms-SG/numbers.json"), require("cldr-data/main/ms-SG/timeZoneNames.json")];
  },
  "my": function my() {
    return [require("cldr-data/main/my/ca-gregorian.json"), require("cldr-data/main/my/currencies.json"), require("cldr-data/main/my/dateFields.json"), require("cldr-data/main/my/numbers.json"), require("cldr-data/main/my/timeZoneNames.json")];
  },
  "nb": function nb() {
    return [require("cldr-data/main/nb/ca-gregorian.json"), require("cldr-data/main/nb/currencies.json"), require("cldr-data/main/nb/dateFields.json"), require("cldr-data/main/nb/numbers.json"), require("cldr-data/main/nb/timeZoneNames.json")];
  },
  "nb-SJ": function nbSJ() {
    return [require("cldr-data/main/nb-SJ/ca-gregorian.json"), require("cldr-data/main/nb-SJ/currencies.json"), require("cldr-data/main/nb-SJ/dateFields.json"), require("cldr-data/main/nb-SJ/numbers.json"), require("cldr-data/main/nb-SJ/timeZoneNames.json")];
  },
  "ne": function ne() {
    return [require("cldr-data/main/ne/ca-gregorian.json"), require("cldr-data/main/ne/currencies.json"), require("cldr-data/main/ne/dateFields.json"), require("cldr-data/main/ne/numbers.json"), require("cldr-data/main/ne/timeZoneNames.json")];
  },
  "ne-IN": function neIN() {
    return [require("cldr-data/main/ne-IN/ca-gregorian.json"), require("cldr-data/main/ne-IN/currencies.json"), require("cldr-data/main/ne-IN/dateFields.json"), require("cldr-data/main/ne-IN/numbers.json"), require("cldr-data/main/ne-IN/timeZoneNames.json")];
  },
  "nl": function nl() {
    return [require("cldr-data/main/nl/ca-gregorian.json"), require("cldr-data/main/nl/currencies.json"), require("cldr-data/main/nl/dateFields.json"), require("cldr-data/main/nl/numbers.json"), require("cldr-data/main/nl/timeZoneNames.json")];
  },
  "nl-AW": function nlAW() {
    return [require("cldr-data/main/nl-AW/ca-gregorian.json"), require("cldr-data/main/nl-AW/currencies.json"), require("cldr-data/main/nl-AW/dateFields.json"), require("cldr-data/main/nl-AW/numbers.json"), require("cldr-data/main/nl-AW/timeZoneNames.json")];
  },
  "nl-BE": function nlBE() {
    return [require("cldr-data/main/nl-BE/ca-gregorian.json"), require("cldr-data/main/nl-BE/currencies.json"), require("cldr-data/main/nl-BE/dateFields.json"), require("cldr-data/main/nl-BE/numbers.json"), require("cldr-data/main/nl-BE/timeZoneNames.json")];
  },
  "nl-BQ": function nlBQ() {
    return [require("cldr-data/main/nl-BQ/ca-gregorian.json"), require("cldr-data/main/nl-BQ/currencies.json"), require("cldr-data/main/nl-BQ/dateFields.json"), require("cldr-data/main/nl-BQ/numbers.json"), require("cldr-data/main/nl-BQ/timeZoneNames.json")];
  },
  "nl-CW": function nlCW() {
    return [require("cldr-data/main/nl-CW/ca-gregorian.json"), require("cldr-data/main/nl-CW/currencies.json"), require("cldr-data/main/nl-CW/dateFields.json"), require("cldr-data/main/nl-CW/numbers.json"), require("cldr-data/main/nl-CW/timeZoneNames.json")];
  },
  "nl-SR": function nlSR() {
    return [require("cldr-data/main/nl-SR/ca-gregorian.json"), require("cldr-data/main/nl-SR/currencies.json"), require("cldr-data/main/nl-SR/dateFields.json"), require("cldr-data/main/nl-SR/numbers.json"), require("cldr-data/main/nl-SR/timeZoneNames.json")];
  },
  "nl-SX": function nlSX() {
    return [require("cldr-data/main/nl-SX/ca-gregorian.json"), require("cldr-data/main/nl-SX/currencies.json"), require("cldr-data/main/nl-SX/dateFields.json"), require("cldr-data/main/nl-SX/numbers.json"), require("cldr-data/main/nl-SX/timeZoneNames.json")];
  },
  "pa": function pa() {
    return [require("cldr-data/main/pa/ca-gregorian.json"), require("cldr-data/main/pa/currencies.json"), require("cldr-data/main/pa/dateFields.json"), require("cldr-data/main/pa/numbers.json"), require("cldr-data/main/pa/timeZoneNames.json")];
  },
  "pa-Guru": function paGuru() {
    return [require("cldr-data/main/pa-Guru/ca-gregorian.json"), require("cldr-data/main/pa-Guru/currencies.json"), require("cldr-data/main/pa-Guru/dateFields.json"), require("cldr-data/main/pa-Guru/numbers.json"), require("cldr-data/main/pa-Guru/timeZoneNames.json")];
  },
  "pl": function pl() {
    return [require("cldr-data/main/pl/ca-gregorian.json"), require("cldr-data/main/pl/currencies.json"), require("cldr-data/main/pl/dateFields.json"), require("cldr-data/main/pl/numbers.json"), require("cldr-data/main/pl/timeZoneNames.json")];
  },
  "pt": function pt() {
    return [require("cldr-data/main/pt/ca-gregorian.json"), require("cldr-data/main/pt/currencies.json"), require("cldr-data/main/pt/dateFields.json"), require("cldr-data/main/pt/numbers.json"), require("cldr-data/main/pt/timeZoneNames.json")];
  },
  "pt-AO": function ptAO() {
    return [require("cldr-data/main/pt-AO/ca-gregorian.json"), require("cldr-data/main/pt-AO/currencies.json"), require("cldr-data/main/pt-AO/dateFields.json"), require("cldr-data/main/pt-AO/numbers.json"), require("cldr-data/main/pt-AO/timeZoneNames.json")];
  },
  "pt-CV": function ptCV() {
    return [require("cldr-data/main/pt-CV/ca-gregorian.json"), require("cldr-data/main/pt-CV/currencies.json"), require("cldr-data/main/pt-CV/dateFields.json"), require("cldr-data/main/pt-CV/numbers.json"), require("cldr-data/main/pt-CV/timeZoneNames.json")];
  },
  "pt-GW": function ptGW() {
    return [require("cldr-data/main/pt-GW/ca-gregorian.json"), require("cldr-data/main/pt-GW/currencies.json"), require("cldr-data/main/pt-GW/dateFields.json"), require("cldr-data/main/pt-GW/numbers.json"), require("cldr-data/main/pt-GW/timeZoneNames.json")];
  },
  "pt-MO": function ptMO() {
    return [require("cldr-data/main/pt-MO/ca-gregorian.json"), require("cldr-data/main/pt-MO/currencies.json"), require("cldr-data/main/pt-MO/dateFields.json"), require("cldr-data/main/pt-MO/numbers.json"), require("cldr-data/main/pt-MO/timeZoneNames.json")];
  },
  "pt-MZ": function ptMZ() {
    return [require("cldr-data/main/pt-MZ/ca-gregorian.json"), require("cldr-data/main/pt-MZ/currencies.json"), require("cldr-data/main/pt-MZ/dateFields.json"), require("cldr-data/main/pt-MZ/numbers.json"), require("cldr-data/main/pt-MZ/timeZoneNames.json")];
  },
  "pt-PT": function ptPT() {
    return [require("cldr-data/main/pt-PT/ca-gregorian.json"), require("cldr-data/main/pt-PT/currencies.json"), require("cldr-data/main/pt-PT/dateFields.json"), require("cldr-data/main/pt-PT/numbers.json"), require("cldr-data/main/pt-PT/timeZoneNames.json")];
  },
  "pt-ST": function ptST() {
    return [require("cldr-data/main/pt-ST/ca-gregorian.json"), require("cldr-data/main/pt-ST/currencies.json"), require("cldr-data/main/pt-ST/dateFields.json"), require("cldr-data/main/pt-ST/numbers.json"), require("cldr-data/main/pt-ST/timeZoneNames.json")];
  },
  "pt-TL": function ptTL() {
    return [require("cldr-data/main/pt-TL/ca-gregorian.json"), require("cldr-data/main/pt-TL/currencies.json"), require("cldr-data/main/pt-TL/dateFields.json"), require("cldr-data/main/pt-TL/numbers.json"), require("cldr-data/main/pt-TL/timeZoneNames.json")];
  },
  "ro": function ro() {
    return [require("cldr-data/main/ro/ca-gregorian.json"), require("cldr-data/main/ro/currencies.json"), require("cldr-data/main/ro/dateFields.json"), require("cldr-data/main/ro/numbers.json"), require("cldr-data/main/ro/timeZoneNames.json")];
  },
  "ro-MD": function roMD() {
    return [require("cldr-data/main/ro-MD/ca-gregorian.json"), require("cldr-data/main/ro-MD/currencies.json"), require("cldr-data/main/ro-MD/dateFields.json"), require("cldr-data/main/ro-MD/numbers.json"), require("cldr-data/main/ro-MD/timeZoneNames.json")];
  },
  "root": function root() {
    return [require("cldr-data/main/root/ca-gregorian.json"), require("cldr-data/main/root/currencies.json"), require("cldr-data/main/root/dateFields.json"), require("cldr-data/main/root/numbers.json"), require("cldr-data/main/root/timeZoneNames.json")];
  },
  "ru": function ru() {
    return [require("cldr-data/main/ru/ca-gregorian.json"), require("cldr-data/main/ru/currencies.json"), require("cldr-data/main/ru/dateFields.json"), require("cldr-data/main/ru/numbers.json"), require("cldr-data/main/ru/timeZoneNames.json")];
  },
  "ru-BY": function ruBY() {
    return [require("cldr-data/main/ru-BY/ca-gregorian.json"), require("cldr-data/main/ru-BY/currencies.json"), require("cldr-data/main/ru-BY/dateFields.json"), require("cldr-data/main/ru-BY/numbers.json"), require("cldr-data/main/ru-BY/timeZoneNames.json")];
  },
  "ru-KG": function ruKG() {
    return [require("cldr-data/main/ru-KG/ca-gregorian.json"), require("cldr-data/main/ru-KG/currencies.json"), require("cldr-data/main/ru-KG/dateFields.json"), require("cldr-data/main/ru-KG/numbers.json"), require("cldr-data/main/ru-KG/timeZoneNames.json")];
  },
  "ru-KZ": function ruKZ() {
    return [require("cldr-data/main/ru-KZ/ca-gregorian.json"), require("cldr-data/main/ru-KZ/currencies.json"), require("cldr-data/main/ru-KZ/dateFields.json"), require("cldr-data/main/ru-KZ/numbers.json"), require("cldr-data/main/ru-KZ/timeZoneNames.json")];
  },
  "ru-MD": function ruMD() {
    return [require("cldr-data/main/ru-MD/ca-gregorian.json"), require("cldr-data/main/ru-MD/currencies.json"), require("cldr-data/main/ru-MD/dateFields.json"), require("cldr-data/main/ru-MD/numbers.json"), require("cldr-data/main/ru-MD/timeZoneNames.json")];
  },
  "ru-UA": function ruUA() {
    return [require("cldr-data/main/ru-UA/ca-gregorian.json"), require("cldr-data/main/ru-UA/currencies.json"), require("cldr-data/main/ru-UA/dateFields.json"), require("cldr-data/main/ru-UA/numbers.json"), require("cldr-data/main/ru-UA/timeZoneNames.json")];
  },
  "si": function si() {
    return [require("cldr-data/main/si/ca-gregorian.json"), require("cldr-data/main/si/currencies.json"), require("cldr-data/main/si/dateFields.json"), require("cldr-data/main/si/numbers.json"), require("cldr-data/main/si/timeZoneNames.json")];
  },
  "sk": function sk() {
    return [require("cldr-data/main/sk/ca-gregorian.json"), require("cldr-data/main/sk/currencies.json"), require("cldr-data/main/sk/dateFields.json"), require("cldr-data/main/sk/numbers.json"), require("cldr-data/main/sk/timeZoneNames.json")];
  },
  "sl": function sl() {
    return [require("cldr-data/main/sl/ca-gregorian.json"), require("cldr-data/main/sl/currencies.json"), require("cldr-data/main/sl/dateFields.json"), require("cldr-data/main/sl/numbers.json"), require("cldr-data/main/sl/timeZoneNames.json")];
  },
  "sq": function sq() {
    return [require("cldr-data/main/sq/ca-gregorian.json"), require("cldr-data/main/sq/currencies.json"), require("cldr-data/main/sq/dateFields.json"), require("cldr-data/main/sq/numbers.json"), require("cldr-data/main/sq/timeZoneNames.json")];
  },
  "sq-MK": function sqMK() {
    return [require("cldr-data/main/sq-MK/ca-gregorian.json"), require("cldr-data/main/sq-MK/currencies.json"), require("cldr-data/main/sq-MK/dateFields.json"), require("cldr-data/main/sq-MK/numbers.json"), require("cldr-data/main/sq-MK/timeZoneNames.json")];
  },
  "sq-XK": function sqXK() {
    return [require("cldr-data/main/sq-XK/ca-gregorian.json"), require("cldr-data/main/sq-XK/currencies.json"), require("cldr-data/main/sq-XK/dateFields.json"), require("cldr-data/main/sq-XK/numbers.json"), require("cldr-data/main/sq-XK/timeZoneNames.json")];
  },
  "sr": function sr() {
    return [require("cldr-data/main/sr/ca-gregorian.json"), require("cldr-data/main/sr/currencies.json"), require("cldr-data/main/sr/dateFields.json"), require("cldr-data/main/sr/numbers.json"), require("cldr-data/main/sr/timeZoneNames.json")];
  },
  "sr-Cyrl": function srCyrl() {
    return [require("cldr-data/main/sr-Cyrl/ca-gregorian.json"), require("cldr-data/main/sr-Cyrl/currencies.json"), require("cldr-data/main/sr-Cyrl/dateFields.json"), require("cldr-data/main/sr-Cyrl/numbers.json"), require("cldr-data/main/sr-Cyrl/timeZoneNames.json")];
  },
  "sr-Cyrl-BA": function srCyrlBA() {
    return [require("cldr-data/main/sr-Cyrl-BA/ca-gregorian.json"), require("cldr-data/main/sr-Cyrl-BA/currencies.json"), require("cldr-data/main/sr-Cyrl-BA/dateFields.json"), require("cldr-data/main/sr-Cyrl-BA/numbers.json"), require("cldr-data/main/sr-Cyrl-BA/timeZoneNames.json")];
  },
  "sr-Cyrl-ME": function srCyrlME() {
    return [require("cldr-data/main/sr-Cyrl-ME/ca-gregorian.json"), require("cldr-data/main/sr-Cyrl-ME/currencies.json"), require("cldr-data/main/sr-Cyrl-ME/dateFields.json"), require("cldr-data/main/sr-Cyrl-ME/numbers.json"), require("cldr-data/main/sr-Cyrl-ME/timeZoneNames.json")];
  },
  "sr-Cyrl-XK": function srCyrlXK() {
    return [require("cldr-data/main/sr-Cyrl-XK/ca-gregorian.json"), require("cldr-data/main/sr-Cyrl-XK/currencies.json"), require("cldr-data/main/sr-Cyrl-XK/dateFields.json"), require("cldr-data/main/sr-Cyrl-XK/numbers.json"), require("cldr-data/main/sr-Cyrl-XK/timeZoneNames.json")];
  },
  "sr-Latn": function srLatn() {
    return [require("cldr-data/main/sr-Latn/ca-gregorian.json"), require("cldr-data/main/sr-Latn/currencies.json"), require("cldr-data/main/sr-Latn/dateFields.json"), require("cldr-data/main/sr-Latn/numbers.json"), require("cldr-data/main/sr-Latn/timeZoneNames.json")];
  },
  "sr-Latn-BA": function srLatnBA() {
    return [require("cldr-data/main/sr-Latn-BA/ca-gregorian.json"), require("cldr-data/main/sr-Latn-BA/currencies.json"), require("cldr-data/main/sr-Latn-BA/dateFields.json"), require("cldr-data/main/sr-Latn-BA/numbers.json"), require("cldr-data/main/sr-Latn-BA/timeZoneNames.json")];
  },
  "sr-Latn-ME": function srLatnME() {
    return [require("cldr-data/main/sr-Latn-ME/ca-gregorian.json"), require("cldr-data/main/sr-Latn-ME/currencies.json"), require("cldr-data/main/sr-Latn-ME/dateFields.json"), require("cldr-data/main/sr-Latn-ME/numbers.json"), require("cldr-data/main/sr-Latn-ME/timeZoneNames.json")];
  },
  "sr-Latn-XK": function srLatnXK() {
    return [require("cldr-data/main/sr-Latn-XK/ca-gregorian.json"), require("cldr-data/main/sr-Latn-XK/currencies.json"), require("cldr-data/main/sr-Latn-XK/dateFields.json"), require("cldr-data/main/sr-Latn-XK/numbers.json"), require("cldr-data/main/sr-Latn-XK/timeZoneNames.json")];
  },
  "sv": function sv() {
    return [require("cldr-data/main/sv/ca-gregorian.json"), require("cldr-data/main/sv/currencies.json"), require("cldr-data/main/sv/dateFields.json"), require("cldr-data/main/sv/numbers.json"), require("cldr-data/main/sv/timeZoneNames.json")];
  },
  "sv-AX": function svAX() {
    return [require("cldr-data/main/sv-AX/ca-gregorian.json"), require("cldr-data/main/sv-AX/currencies.json"), require("cldr-data/main/sv-AX/dateFields.json"), require("cldr-data/main/sv-AX/numbers.json"), require("cldr-data/main/sv-AX/timeZoneNames.json")];
  },
  "sv-FI": function svFI() {
    return [require("cldr-data/main/sv-FI/ca-gregorian.json"), require("cldr-data/main/sv-FI/currencies.json"), require("cldr-data/main/sv-FI/dateFields.json"), require("cldr-data/main/sv-FI/numbers.json"), require("cldr-data/main/sv-FI/timeZoneNames.json")];
  },
  "sw": function sw() {
    return [require("cldr-data/main/sw/ca-gregorian.json"), require("cldr-data/main/sw/currencies.json"), require("cldr-data/main/sw/dateFields.json"), require("cldr-data/main/sw/numbers.json"), require("cldr-data/main/sw/timeZoneNames.json")];
  },
  "sw-CD": function swCD() {
    return [require("cldr-data/main/sw-CD/ca-gregorian.json"), require("cldr-data/main/sw-CD/currencies.json"), require("cldr-data/main/sw-CD/dateFields.json"), require("cldr-data/main/sw-CD/numbers.json"), require("cldr-data/main/sw-CD/timeZoneNames.json")];
  },
  "sw-KE": function swKE() {
    return [require("cldr-data/main/sw-KE/ca-gregorian.json"), require("cldr-data/main/sw-KE/currencies.json"), require("cldr-data/main/sw-KE/dateFields.json"), require("cldr-data/main/sw-KE/numbers.json"), require("cldr-data/main/sw-KE/timeZoneNames.json")];
  },
  "sw-UG": function swUG() {
    return [require("cldr-data/main/sw-UG/ca-gregorian.json"), require("cldr-data/main/sw-UG/currencies.json"), require("cldr-data/main/sw-UG/dateFields.json"), require("cldr-data/main/sw-UG/numbers.json"), require("cldr-data/main/sw-UG/timeZoneNames.json")];
  },
  "ta": function ta() {
    return [require("cldr-data/main/ta/ca-gregorian.json"), require("cldr-data/main/ta/currencies.json"), require("cldr-data/main/ta/dateFields.json"), require("cldr-data/main/ta/numbers.json"), require("cldr-data/main/ta/timeZoneNames.json")];
  },
  "ta-LK": function taLK() {
    return [require("cldr-data/main/ta-LK/ca-gregorian.json"), require("cldr-data/main/ta-LK/currencies.json"), require("cldr-data/main/ta-LK/dateFields.json"), require("cldr-data/main/ta-LK/numbers.json"), require("cldr-data/main/ta-LK/timeZoneNames.json")];
  },
  "ta-MY": function taMY() {
    return [require("cldr-data/main/ta-MY/ca-gregorian.json"), require("cldr-data/main/ta-MY/currencies.json"), require("cldr-data/main/ta-MY/dateFields.json"), require("cldr-data/main/ta-MY/numbers.json"), require("cldr-data/main/ta-MY/timeZoneNames.json")];
  },
  "ta-SG": function taSG() {
    return [require("cldr-data/main/ta-SG/ca-gregorian.json"), require("cldr-data/main/ta-SG/currencies.json"), require("cldr-data/main/ta-SG/dateFields.json"), require("cldr-data/main/ta-SG/numbers.json"), require("cldr-data/main/ta-SG/timeZoneNames.json")];
  },
  "te": function te() {
    return [require("cldr-data/main/te/ca-gregorian.json"), require("cldr-data/main/te/currencies.json"), require("cldr-data/main/te/dateFields.json"), require("cldr-data/main/te/numbers.json"), require("cldr-data/main/te/timeZoneNames.json")];
  },
  "th": function th() {
    return [require("cldr-data/main/th/ca-gregorian.json"), require("cldr-data/main/th/currencies.json"), require("cldr-data/main/th/dateFields.json"), require("cldr-data/main/th/numbers.json"), require("cldr-data/main/th/timeZoneNames.json")];
  },
  "to": function to() {
    return [require("cldr-data/main/to/ca-gregorian.json"), require("cldr-data/main/to/currencies.json"), require("cldr-data/main/to/dateFields.json"), require("cldr-data/main/to/numbers.json"), require("cldr-data/main/to/timeZoneNames.json")];
  },
  "tr": function tr() {
    return [require("cldr-data/main/tr/ca-gregorian.json"), require("cldr-data/main/tr/currencies.json"), require("cldr-data/main/tr/dateFields.json"), require("cldr-data/main/tr/numbers.json"), require("cldr-data/main/tr/timeZoneNames.json")];
  },
  "tr-CY": function trCY() {
    return [require("cldr-data/main/tr-CY/ca-gregorian.json"), require("cldr-data/main/tr-CY/currencies.json"), require("cldr-data/main/tr-CY/dateFields.json"), require("cldr-data/main/tr-CY/numbers.json"), require("cldr-data/main/tr-CY/timeZoneNames.json")];
  },
  "uk": function uk() {
    return [require("cldr-data/main/uk/ca-gregorian.json"), require("cldr-data/main/uk/currencies.json"), require("cldr-data/main/uk/dateFields.json"), require("cldr-data/main/uk/numbers.json"), require("cldr-data/main/uk/timeZoneNames.json")];
  },
  "ur": function ur() {
    return [require("cldr-data/main/ur/ca-gregorian.json"), require("cldr-data/main/ur/currencies.json"), require("cldr-data/main/ur/dateFields.json"), require("cldr-data/main/ur/numbers.json"), require("cldr-data/main/ur/timeZoneNames.json")];
  },
  "ur-IN": function urIN() {
    return [require("cldr-data/main/ur-IN/ca-gregorian.json"), require("cldr-data/main/ur-IN/currencies.json"), require("cldr-data/main/ur-IN/dateFields.json"), require("cldr-data/main/ur-IN/numbers.json"), require("cldr-data/main/ur-IN/timeZoneNames.json")];
  },
  "uz": function uz() {
    return [require("cldr-data/main/uz/ca-gregorian.json"), require("cldr-data/main/uz/currencies.json"), require("cldr-data/main/uz/dateFields.json"), require("cldr-data/main/uz/numbers.json"), require("cldr-data/main/uz/timeZoneNames.json")];
  },
  "uz-Latn": function uzLatn() {
    return [require("cldr-data/main/uz-Latn/ca-gregorian.json"), require("cldr-data/main/uz-Latn/currencies.json"), require("cldr-data/main/uz-Latn/dateFields.json"), require("cldr-data/main/uz-Latn/numbers.json"), require("cldr-data/main/uz-Latn/timeZoneNames.json")];
  },
  "vi": function vi() {
    return [require("cldr-data/main/vi/ca-gregorian.json"), require("cldr-data/main/vi/currencies.json"), require("cldr-data/main/vi/dateFields.json"), require("cldr-data/main/vi/numbers.json"), require("cldr-data/main/vi/timeZoneNames.json")];
  },
  "zh": function zh() {
    return [require("cldr-data/main/zh/ca-gregorian.json"), require("cldr-data/main/zh/currencies.json"), require("cldr-data/main/zh/dateFields.json"), require("cldr-data/main/zh/numbers.json"), require("cldr-data/main/zh/timeZoneNames.json")];
  },
  "zh-Hans": function zhHans() {
    return [require("cldr-data/main/zh-Hans/ca-gregorian.json"), require("cldr-data/main/zh-Hans/currencies.json"), require("cldr-data/main/zh-Hans/dateFields.json"), require("cldr-data/main/zh-Hans/numbers.json"), require("cldr-data/main/zh-Hans/timeZoneNames.json")];
  },
  "zh-Hans-HK": function zhHansHK() {
    return [require("cldr-data/main/zh-Hans-HK/ca-gregorian.json"), require("cldr-data/main/zh-Hans-HK/currencies.json"), require("cldr-data/main/zh-Hans-HK/dateFields.json"), require("cldr-data/main/zh-Hans-HK/numbers.json"), require("cldr-data/main/zh-Hans-HK/timeZoneNames.json")];
  },
  "zh-Hans-MO": function zhHansMO() {
    return [require("cldr-data/main/zh-Hans-MO/ca-gregorian.json"), require("cldr-data/main/zh-Hans-MO/currencies.json"), require("cldr-data/main/zh-Hans-MO/dateFields.json"), require("cldr-data/main/zh-Hans-MO/numbers.json"), require("cldr-data/main/zh-Hans-MO/timeZoneNames.json")];
  },
  "zh-Hans-SG": function zhHansSG() {
    return [require("cldr-data/main/zh-Hans-SG/ca-gregorian.json"), require("cldr-data/main/zh-Hans-SG/currencies.json"), require("cldr-data/main/zh-Hans-SG/dateFields.json"), require("cldr-data/main/zh-Hans-SG/numbers.json"), require("cldr-data/main/zh-Hans-SG/timeZoneNames.json")];
  },
  "zh-Hant": function zhHant() {
    return [require("cldr-data/main/zh-Hant/ca-gregorian.json"), require("cldr-data/main/zh-Hant/currencies.json"), require("cldr-data/main/zh-Hant/dateFields.json"), require("cldr-data/main/zh-Hant/numbers.json"), require("cldr-data/main/zh-Hant/timeZoneNames.json")];
  },
  "zh-Hant-HK": function zhHantHK() {
    return [require("cldr-data/main/zh-Hant-HK/ca-gregorian.json"), require("cldr-data/main/zh-Hant-HK/currencies.json"), require("cldr-data/main/zh-Hant-HK/dateFields.json"), require("cldr-data/main/zh-Hant-HK/numbers.json"), require("cldr-data/main/zh-Hant-HK/timeZoneNames.json")];
  },
  "zh-Hant-MO": function zhHantMO() {
    return [require("cldr-data/main/zh-Hant-MO/ca-gregorian.json"), require("cldr-data/main/zh-Hant-MO/currencies.json"), require("cldr-data/main/zh-Hant-MO/dateFields.json"), require("cldr-data/main/zh-Hant-MO/numbers.json"), require("cldr-data/main/zh-Hant-MO/timeZoneNames.json")];
  },
  "zu": function zu() {
    return [require("cldr-data/main/zu/ca-gregorian.json"), require("cldr-data/main/zu/currencies.json"), require("cldr-data/main/zu/dateFields.json"), require("cldr-data/main/zu/numbers.json"), require("cldr-data/main/zu/timeZoneNames.json")];
  }

};

exports["default"] = function (locale) {
  return loaders[locale] ? loaders[locale]() : [];
};

module.exports = exports["default"];