/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 64);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

/**
 * vee-validate v2.0.0-rc.2
 * (c) 2017 Abdelrahman Awad
 * @license MIT
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.VeeValidate = factory());
}(this, (function () { 'use strict';

/**
 * Some Alpha Regex helpers.
 * https://github.com/chriso/validator.js/blob/master/src/lib/alpha.js
 */

var alpha$1 = {
  en: /^[A-Z]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[A-ZÆØÅ]*$/i,
  de: /^[A-ZÄÖÜß]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ru: /^[А-ЯЁ]*$/i,
  sr: /^[A-ZČĆŽŠĐ]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[А-ЩЬЮЯЄIЇҐ]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/
};

var alphaSpaces = {
  en: /^[A-Z\s]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
  da: /^[A-ZÆØÅ\s]*$/i,
  de: /^[A-ZÄÖÜß\s]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
  ru: /^[А-ЯЁ\s]*$/i,
  sr: /^[A-ZČĆŽŠĐ\s]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
  uk: /^[А-ЩЬЮЯЄIЇҐ\s]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/
};

var alphanumeric = {
  en: /^[0-9A-Z]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[0-9A-ZÆØÅ]$/i,
  de: /^[0-9A-ZÄÖÜß]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ru: /^[0-9А-ЯЁ]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄIЇҐ]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/
};

var alphaDash = {
  en: /^[0-9A-Z_-]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
  da: /^[0-9A-ZÆØÅ_-]*$/i,
  de: /^[0-9A-ZÄÖÜß_-]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
  ru: /^[0-9А-ЯЁ_-]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄIЇҐ_-]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/
};

var alpha$$1 = function (value, ref) {
  if ( ref === void 0 ) ref = [null];
  var locale = ref[0];

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alpha$1).some(function (loc) { return alpha$1[loc].test(value); });
  }

  return (alpha$1[locale] || alpha$1.en).test(value);
};

var alpha_dash = function (value, ref) {
  if ( ref === void 0 ) ref = [null];
  var locale = ref[0];

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alphaDash).some(function (loc) { return alphaDash[loc].test(value); });
  }

  return (alphaDash[locale] || alphaDash.en).test(value);
};

var alpha_num = function (value, ref) {
  if ( ref === void 0 ) ref = [null];
  var locale = ref[0];

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alphanumeric).some(function (loc) { return alphanumeric[loc].test(value); });
  }

  return (alphanumeric[locale] || alphanumeric.en).test(value);
};

var alpha_spaces = function (value, ref) {
  if ( ref === void 0 ) ref = [null];
  var locale = ref[0];

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alphaSpaces).some(function (loc) { return alphaSpaces[loc].test(value); });
  }

  return (alphaSpaces[locale] || alphaSpaces.en).test(value);
};

var between = function (value, ref) {
	var min = ref[0];
	var max = ref[1];

	return Number(min) <= value && Number(max) >= value;
};

var confirmed = function (value, ref, validatingField) {
  var confirmedField = ref[0];

  var field = confirmedField
    ? document.querySelector(("input[name='" + confirmedField + "']"))
    : document.querySelector(("input[name='" + validatingField + "_confirmation']"));

  return !! (field && String(value) === field.value);
};

function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var assertString_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertString;
function assertString(input) {
  if (typeof input !== 'string') {
    throw new TypeError('This library (validator.js) validates strings only');
  }
}
module.exports = exports['default'];
});

var isCreditCard_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCreditCard;



var _assertString2 = _interopRequireDefault(assertString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})|62[0-9]{14}$/;
/* eslint-enable max-len */

function isCreditCard(str) {
  (0, _assertString2.default)(str);
  var sanitized = str.replace(/[^0-9]+/g, '');
  if (!creditCard.test(sanitized)) {
    return false;
  }
  var sum = 0;
  var digit = void 0;
  var tmpNum = void 0;
  var shouldDouble = void 0;
  for (var i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += tmpNum % 10 + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }
  return !!(sum % 10 === 0 ? sanitized : false);
}
module.exports = exports['default'];
});

var isCreditCard = unwrapExports(isCreditCard_1);

var credit_card = function (value) { return isCreditCard(String(value)); };

var decimal = function (value, params) {
  var decimals = Array.isArray(params) ? (params[0] || '*') : '*';
  if (Array.isArray(value)) {
    return false;
  }

  if (value === null || value === undefined || value === '') {
    return true;
  }

    // if is 0.
  if (Number(decimals) === 0) {
    return /^-?\d*$/.test(value);
  }

  var regexPart = decimals === '*' ? '+' : ("{1," + decimals + "}");
  var regex = new RegExp(("^-?\\d*(\\.\\d" + regexPart + ")?$"));

  if (! regex.test(value)) {
    return false;
  }

  var parsedValue = parseFloat(value);

    // eslint-disable-next-line
    return parsedValue === parsedValue;
};

var digits = function (value, ref) {
  var length = ref[0];

  var strVal = String(value);

  return /^[0-9]*$/.test(strVal) && strVal.length === Number(length);
};

var validateImage = function (file, width, height) {
  var URL = window.URL || window.webkitURL;
  return new Promise(function (resolve) {
    var image = new Image();
    image.onerror = function () { return resolve({ valid: false }); };
    image.onload = function () { return resolve({
      valid: image.width === Number(width) && image.height === Number(height)
    }); };

    image.src = URL.createObjectURL(file);
  });
};

var dimensions = function (files, ref) {
  var width = ref[0];
  var height = ref[1];

  var list = [];
  for (var i = 0; i < files.length; i++) {
        // if file is not an image, reject.
    if (! /\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
      return false;
    }

    list.push(files[i]);
  }

  return Promise.all(list.map(function (file) { return validateImage(file, width, height); }));
};

var merge_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;
function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments[1];

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}
module.exports = exports['default'];
});

var isByteLength_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isByteLength;



var _assertString2 = _interopRequireDefault(assertString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
  (0, _assertString2.default)(str);
  var min = void 0;
  var max = void 0;
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
module.exports = exports['default'];
});

var isFQDN = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFDQN;



var _assertString2 = _interopRequireDefault(assertString_1);



var _merge2 = _interopRequireDefault(merge_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false
};

function isFDQN(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_fqdn_options);

  /* Remove the optional trailing dot before checking validity */
  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }
  var parts = str.split('.');
  if (options.require_tld) {
    var tld = parts.pop();
    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    }
  }
  for (var part, i = 0; i < parts.length; i++) {
    part = parts[i];
    if (options.allow_underscores) {
      part = part.replace(/_/g, '');
    }
    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    }
    if (/[\uff01-\uff5e]/.test(part)) {
      // disallow full-width chars
      return false;
    }
    if (part[0] === '-' || part[part.length - 1] === '-') {
      return false;
    }
  }
  return true;
}
module.exports = exports['default'];
});

var isEmail_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmail;



var _assertString2 = _interopRequireDefault(assertString_1);



var _merge2 = _interopRequireDefault(merge_1);



var _isByteLength2 = _interopRequireDefault(isByteLength_1);



var _isFQDN2 = _interopRequireDefault(isFQDN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_email_options = {
  allow_display_name: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true
};

/* eslint-disable max-len */
/* eslint-disable no-control-regex */
var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
/* eslint-enable max-len */
/* eslint-enable no-control-regex */

function isEmail(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_email_options);

  if (options.require_display_name || options.allow_display_name) {
    var display_email = str.match(displayName);
    if (display_email) {
      str = display_email[1];
    } else if (options.require_display_name) {
      return false;
    }
  }

  var parts = str.split('@');
  var domain = parts.pop();
  var user = parts.join('@');

  var lower_domain = domain.toLowerCase();
  if (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com') {
    user = user.replace(/\./g, '').toLowerCase();
  }

  if (!(0, _isByteLength2.default)(user, { max: 64 }) || !(0, _isByteLength2.default)(domain, { max: 256 })) {
    return false;
  }

  if (!(0, _isFQDN2.default)(domain, { require_tld: options.require_tld })) {
    return false;
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }

  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;

  var user_parts = user.split('.');
  for (var i = 0; i < user_parts.length; i++) {
    if (!pattern.test(user_parts[i])) {
      return false;
    }
  }

  return true;
}
module.exports = exports['default'];
});

var isEmail = unwrapExports(isEmail_1);

var email = function (value) { return isEmail(String(value)); };

var ext = function (files, extensions) {
  var regex = new RegExp((".(" + (extensions.join('|')) + ")$"), 'i');

  return files.every(function (file) { return regex.test(file.name); });
};

var image = function (files) { return files.every(function (file) { return /\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(file.name); }
); };

var In = function (value, options) { return !! options.filter(function (option) { return option == value; }).length; }; // eslint-disable-line

var isIP_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIP;



var _assertString2 = _interopRequireDefault(assertString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
var ipv6Block = /^[0-9A-F]{1,4}$/i;

function isIP(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  (0, _assertString2.default)(str);
  version = String(version);
  if (!version) {
    return isIP(str, 4) || isIP(str, 6);
  } else if (version === '4') {
    if (!ipv4Maybe.test(str)) {
      return false;
    }
    var parts = str.split('.').sort(function (a, b) {
      return a - b;
    });
    return parts[3] <= 255;
  } else if (version === '6') {
    var blocks = str.split(':');
    var foundOmissionBlock = false; // marker to indicate ::

    // At least some OS accept the last 32 bits of an IPv6 address
    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
    // and '::a.b.c.d' is deprecated, but also valid.
    var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
    var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

    if (blocks.length > expectedNumberOfBlocks) {
      return false;
    }
    // initial or final ::
    if (str === '::') {
      return true;
    } else if (str.substr(0, 2) === '::') {
      blocks.shift();
      blocks.shift();
      foundOmissionBlock = true;
    } else if (str.substr(str.length - 2) === '::') {
      blocks.pop();
      blocks.pop();
      foundOmissionBlock = true;
    }

    for (var i = 0; i < blocks.length; ++i) {
      // test for a :: which can not be at the string start/end
      // since those cases have been handled above
      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
        if (foundOmissionBlock) {
          return false; // multiple :: in address
        }
        foundOmissionBlock = true;
      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {
        // it has been checked before that the last
        // block is a valid IPv4 address
      } else if (!ipv6Block.test(blocks[i])) {
        return false;
      }
    }
    if (foundOmissionBlock) {
      return blocks.length >= 1;
    }
    return blocks.length === expectedNumberOfBlocks;
  }
  return false;
}
module.exports = exports['default'];
});

var isIP = unwrapExports(isIP_1);

var ip = function (value, ref) {
	if ( ref === void 0 ) ref = [4];
	var version = ref[0];

	return isIP(value, version);
};

var max = function (value, ref) {
  var length = ref[0];

  if (value === undefined || value === null) {
    return length >= 0;
  }

  return String(value).length <= length;
};

var max_value = function (value, ref) {
  var max = ref[0];

  if (Array.isArray(value) || value === null || value === undefined || value === '') {
    return false;
  }

  return Number(value) <= max;
};

var mimes = function (files, mimes) {
  var regex = new RegExp(((mimes.join('|').replace('*', '.+')) + "$"), 'i');

  return files.every(function (file) { return regex.test(file.type); });
};

var min = function (value, ref) {
  var length = ref[0];

  if (value === undefined || value === null) {
    return false;
  }
  return String(value).length >= length;
};

var min_value = function (value, ref) {
  var min = ref[0];

  if (Array.isArray(value) || value === null || value === undefined || value === '') {
    return false;
  }

  return Number(value) >= min;
};

var not_in = function (value, options) { return ! options.filter(function (option) { return option == value; }).length; }; // eslint-disable-line

var numeric = function (value) { return /^[0-9]+$/.test(String(value)); };

var regex = function (value, ref) {
  var regex = ref[0];
  var flags = ref.slice(1);

  if (regex instanceof RegExp) {
    return regex.test(value);
  }

  return new RegExp(regex, flags).test(String(value));
};

var required = function (value) {
  if (Array.isArray(value)) {
    return !! value.length;
  }

  if (value === undefined || value === null) {
    return false;
  }

  return !! String(value).trim().length;
};

var size = function (files, ref) {
  var size = ref[0];

  if (isNaN(size)) {
    return false;
  }

  var nSize = Number(size) * 1024;
  for (var i = 0; i < files.length; i++) {
    if (files[i].size > nSize) {
      return false;
    }
  }

  return true;
};

var isURL_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isURL;



var _assertString2 = _interopRequireDefault(assertString_1);



var _isFQDN2 = _interopRequireDefault(isFQDN);



var _isIP2 = _interopRequireDefault(isIP_1);



var _merge2 = _interopRequireDefault(merge_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_url_options = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false
};

var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];
    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }
  return false;
}

function isURL(url, options) {
  (0, _assertString2.default)(url);
  if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
    return false;
  }
  if (url.indexOf('mailto:') === 0) {
    return false;
  }
  options = (0, _merge2.default)(options, default_url_options);
  var protocol = void 0,
      auth = void 0,
      host = void 0,
      hostname = void 0,
      port = void 0,
      port_str = void 0,
      split = void 0,
      ipv6 = void 0;

  split = url.split('#');
  url = split.shift();

  split = url.split('?');
  url = split.shift();

  split = url.split('://');
  if (split.length > 1) {
    protocol = split.shift();
    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if (options.require_protocol) {
    return false;
  } else if (options.allow_protocol_relative_urls && url.substr(0, 2) === '//') {
    split[0] = url.substr(2);
  }
  url = split.join('://');

  split = url.split('/');
  url = split.shift();

  if (url === '' && !options.require_host) {
    return true;
  }

  split = url.split('@');
  if (split.length > 1) {
    auth = split.shift();
    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }
  }
  hostname = split.join('@');

  port_str = ipv6 = null;
  var ipv6_match = hostname.match(wrapped_ipv6);
  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();
    if (split.length) {
      port_str = split.join(':');
    }
  }

  if (port_str !== null) {
    port = parseInt(port_str, 10);
    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  }

  if (!(0, _isIP2.default)(host) && !(0, _isFQDN2.default)(host, options) && (!ipv6 || !(0, _isIP2.default)(ipv6, 6)) && host !== 'localhost') {
    return false;
  }

  host = host || ipv6;

  if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
    return false;
  }
  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
    return false;
  }

  return true;
}
module.exports = exports['default'];
});

var isURL = unwrapExports(isURL_1);

var url = function (value, ref) {
        if ( ref === void 0 ) ref = [true];
        var requireProtocol = ref[0];

        return isURL(value, { require_protocol: !! requireProtocol });
};

/* eslint-disable camelcase */
var Rules = {
  alpha_dash: alpha_dash,
  alpha_num: alpha_num,
  alpha_spaces: alpha_spaces,
  alpha: alpha$$1,
  between: between,
  confirmed: confirmed,
  credit_card: credit_card,
  decimal: decimal,
  digits: digits,
  dimensions: dimensions,
  email: email,
  ext: ext,
  image: image,
  in: In,
  ip: ip,
  max: max,
  max_value: max_value,
  mimes: mimes,
  min: min,
  min_value: min_value,
  not_in: not_in,
  numeric: numeric,
  regex: regex,
  required: required,
  size: size,
  url: url
};

var ErrorBag = function ErrorBag() {
  this.errors = [];
};

  /**
   * Adds an error to the internal array.
   *
   * @param {string} field The field name.
   * @param {string} msg The error message.
   * @param {String} rule The rule that is responsible for the error.
   * @param {String} scope The Scope name, optional.
   */
ErrorBag.prototype.add = function add (field, msg, rule, scope) {
    if ( scope === void 0 ) scope = '__global__';

  this.errors.push({ field: field, msg: msg, rule: rule, scope: scope });
};

  /**
   * Gets all error messages from the internal array.
   *
   * @param {String} scope The Scope name, optional.
   * @return {Array} errors Array of all error messages.
   */
ErrorBag.prototype.all = function all (scope) {
  if (! scope) {
    return this.errors.map(function (e) { return e.msg; });
  }

  return this.errors.filter(function (e) { return e.scope === scope; }).map(function (e) { return e.msg; });
};

  /**
   * Checks if there are any errors in the internal array.
   * @param {String} scope The Scope name, optional.
   * @return {boolean} result True if there was at least one error, false otherwise.
   */
ErrorBag.prototype.any = function any (scope) {
  if (! scope) {
    return !! this.errors.length;
  }

  return !! this.errors.filter(function (e) { return e.scope === scope; }).length;
};

  /**
   * Removes all items from the internal array.
   *
   * @param {String} scope The Scope name, optional.
   */
ErrorBag.prototype.clear = function clear (scope) {
  if (! scope) {
    scope = '__global__';
  }

  this.errors = this.errors.filter(function (e) { return e.scope !== scope; });
};

  /**
   * Collects errors into groups or for a specific field.
   *
   * @param{string} field The field name.
   * @param{string} scope The scope name.
   * @param {Boolean} map If it should map the errors to strings instead of objects.
   * @return {Array} errors The errors for the specified field.
   */
ErrorBag.prototype.collect = function collect (field, scope, map) {
    if ( map === void 0 ) map = true;

  if (! field) {
    var collection = {};
    this.errors.forEach(function (e) {
      if (! collection[e.field]) {
        collection[e.field] = [];
      }

      collection[e.field].push(map ? e.msg : e);
    });

    return collection;
  }

  if (! scope) {
    return this.errors.filter(function (e) { return e.field === field; }).map(function (e) { return (map ? e.msg : e); });
  }

  return this.errors.filter(function (e) { return e.field === field && e.scope === scope; })
                    .map(function (e) { return (map ? e.msg : e); });
};
  /**
   * Gets the internal array length.
   *
   * @return {Number} length The internal array length.
   */
ErrorBag.prototype.count = function count () {
  return this.errors.length;
};

  /**
   * Gets the first error message for a specific field.
   *
   * @param{string} field The field name.
   * @return {string|null} message The error message.
   */
ErrorBag.prototype.first = function first (field, scope) {
    var this$1 = this;
    if ( scope === void 0 ) scope = '__global__';

  var selector = this._selector(field);
  var scoped = this._scope(field);

  if (scoped) {
    var result = this.first(scoped.name, scoped.scope);
    // if such result exist, return it. otherwise it could be a field.
    // with dot in its name.
    if (result) {
      return result;
    }
  }

  if (selector) {
    return this.firstByRule(selector.name, selector.rule, scope);
  }

  for (var i = 0; i < this.errors.length; i++) {
    if (this$1.errors[i].field === field && (this$1.errors[i].scope === scope)) {
      return this$1.errors[i].msg;
    }
  }

  return null;
};

  /**
   * Returns the first error rule for the specified field
   *
   * @param {string} field The specified field.
   * @return {string|null} First error rule on the specified field if one is found, otherwise null
   */
ErrorBag.prototype.firstRule = function firstRule (field, scope) {
  var errors = this.collect(field, scope, false);

  return (errors.length && errors[0].rule) || null;
};

  /**
   * Checks if the internal array has at least one error for the specified field.
   *
   * @param{string} field The specified field.
   * @return {Boolean} result True if at least one error is found, false otherwise.
   */
ErrorBag.prototype.has = function has (field, scope) {
    if ( scope === void 0 ) scope = '__global__';

  return !! this.first(field, scope);
};

  /**
   * Gets the first error message for a specific field and a rule.
   * @param {String} name The name of the field.
   * @param {String} rule The name of the rule.
   * @param {String} scope The name of the scope (optional).
   */
ErrorBag.prototype.firstByRule = function firstByRule (name, rule, scope) {
  var error = this.collect(name, scope, false).filter(function (e) { return e.rule === rule; })[0];

  return (error && error.msg) || null;
};

  /**
   * Removes all error messages associated with a specific field.
   *
   * @param{string} field The field which messages are to be removed.
   * @param {String} scope The Scope name, optional.
   */
ErrorBag.prototype.remove = function remove (field, scope) {
  if (scope) {
    this.errors = this.errors.filter(function (e) { return e.field !== field || e.scope !== scope; });

    return;
  }

  this.errors = this.errors.filter(function (e) { return e.field !== field || e.scope !== '__global__'; });
};


  /**
   * Get the field attributes if there's a rule selector.
   *
   * @param{string} field The specified field.
   * @return {Object|null}
   */
ErrorBag.prototype._selector = function _selector (field) {
  if (field.indexOf(':') > -1) {
    var ref = field.split(':');
      var name = ref[0];
      var rule = ref[1];

    return { name: name, rule: rule };
  }

  return null;
};

  /**
   * Get the field scope if specified using dot notation.
   *
   * @param {string} field the specifie field.
   * @return {Object|null}
   */
ErrorBag.prototype._scope = function _scope (field) {
  if (field.indexOf('.') > -1) {
    var ref = field.split('.');
      var scope = ref[0];
      var name = ref[1];

    return { name: name, scope: scope };
  }

  return null;
};

var ValidatorException = (function () {
  function anonymous(msg) {
    this.msg = "[vee-validate]: " + msg;
  }

  anonymous.prototype.toString = function toString () {
    return this.msg;
  };

  return anonymous;
}());

/**
 * Gets the data attribute. the name must be kebab-case.
 */
var getDataAttribute = function (el, name) { return el.getAttribute(("data-vv-" + name)); };

/**
 * Determines the input field scope.
 */
var getScope = function (el) {
  var scope = getDataAttribute(el, 'scope');
  if (! scope && el.form) {
    scope = getDataAttribute(el.form, 'scope');
  }

  return scope;
};

/**
 * Gets the value in an object safely.
 * @param {String} propPath
 * @param {Object} target
 * @param {*} def
 */
var getPath = function (propPath, target, def) {
  if ( def === void 0 ) def = undefined;

  if (!propPath || !target) { return def; }

  var value = target;
  propPath.split('.').every(function (prop) {
    if (! Object.prototype.hasOwnProperty.call(value, prop)) {
      value = def;

      return false;
    }

    value = value[prop];

    return true;
  });

  return value;
};

/**
 * Debounces a function.
 */
var debounce = function (callback, wait, immediate) {
  if ( wait === void 0 ) wait = 0;

  var timeout;

  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var later = function () {
      timeout = null;
      if (!immediate) { callback.apply(void 0, args); }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) { callback(args); }
  };
};

/**
 * Emits a warning to the console.
 */
var warn = function (message) {
  if (! console) {
    return;
  }

    console.warn(("[vee-validate]: " + message)); // eslint-disable-line
};

/**
 * Checks if the value is an object.
 */
var isObject = function (object) { return object !== null && object && typeof object === 'object' && ! Array.isArray(object); };

/**
 * Checks if a function is callable.
 */
var isCallable = function (func) { return typeof func === 'function'; };

/**
 * Check if element has the css class on it.
 */
var hasClass = function (el, className) {
  if (el.classList) {
    return el.classList.contains(className);
  }

  return !!el.className.match(new RegExp(("(\\s|^)" + className + "(\\s|$)")));
};

/**
 * Adds the provided css className to the element.
 */
var addClass = function (el, className) {
  if (el.classList) {
    el.classList.add(className);
    return;
  }

  if (!hasClass(el, className)) {
    el.className += " " + className;
  }
};

/**
 * Remove the provided css className from the element.
 */
var removeClass = function (el, className) {
  if (el.classList) {
    el.classList.remove(className);
    return;
  }

  if (hasClass(el, className)) {
    var reg = new RegExp(("(\\s|^)" + className + "(\\s|$)"));
    el.className = el.className.replace(reg, ' ');
  }
};

/**
 * Converts an array-like object to array.
 * Simple polyfill for Array.from
 */
var toArray = function (arrayLike) {
  if (Array.from) {
    return Array.from(arrayLike);
  }

  var array = [];
  var length = arrayLike.length;
  for (var i = 0; i < length; i++) {
    array.push(arrayLike[i]);
  }

  return array;
};

/**
 * Assign polyfill from the mdn.
 */
var assign = function (target) {
  var others = [], len = arguments.length - 1;
  while ( len-- > 0 ) others[ len ] = arguments[ len + 1 ];

  if (Object.assign) {
    return Object.assign.apply(Object, [ target ].concat( others ));
  }

  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var to = Object(target);
  others.forEach(function (arg) {
    // Skip over if undefined or null
    if (arg != null) {
      Object.keys(arg).forEach(function (key) {
        to[key] = arg[key];
      });
    }
  });

  return to;
};

/**
 * polyfills array.find
 * @param {Array} array
 * @param {Function} predicate
 */
var find = function (array, predicate) {
  if (array.find) {
    return array.find(predicate);
  }

  var result;
  array.some(function (item) {
    if (predicate(item)) {
      result = item;
      return true;
    }

    return false;
  });

  return result;
};

/**
 * Gets the rules from a binding value or the element dataset.
 *
 * @param {String} expression The binding expression.
 * @param {Object|String} value The binding value.
 * @param {element} el The element.
 * @returns {String|Object}
 */
var getRules = function (expression, value, el) {
  if (! expression) {
    return getDataAttribute(el, 'rules');
  }

  if (typeof value === 'string') {
    return value;
  }

  if (~['string', 'object'].indexOf(typeof value.rules)) {
    return value.rules;
  }

  return value;
};

/* eslint-disable prefer-rest-params */
var Dictionary = function Dictionary(dictionary) {
  if ( dictionary === void 0 ) dictionary = {};

  this.dictionary = {};
  this.merge(dictionary);
};

Dictionary.prototype.hasLocale = function hasLocale (locale) {
  return !! this.dictionary[locale];
};

Dictionary.prototype.getMessage = function getMessage (locale, key, fallback) {
  if (! this.hasMessage(locale, key)) {
    return fallback || this._getDefaultMessage(locale);
  }

  return this.dictionary[locale].messages[key];
};

Dictionary.prototype._getDefaultMessage = function _getDefaultMessage (locale) {
  if (this.hasMessage(locale, '_default')) {
    return this.dictionary[locale].messages._default;
  }

  return this.dictionary.en.messages._default;
};

Dictionary.prototype.getAttribute = function getAttribute (locale, key, fallback) {
    if ( fallback === void 0 ) fallback = '';

  if (! this.hasAttribute(locale, key)) {
    return fallback;
  }

  return this.dictionary[locale].attributes[key];
};

Dictionary.prototype.hasMessage = function hasMessage (locale, key) {
  return !! (
          this.hasLocale(locale) &&
          this.dictionary[locale].messages &&
          this.dictionary[locale].messages[key]
      );
};

Dictionary.prototype.hasAttribute = function hasAttribute (locale, key) {
  return !! (
          this.hasLocale(locale) &&
          this.dictionary[locale].attributes &&
          this.dictionary[locale].attributes[key]
      );
};

Dictionary.prototype.merge = function merge (dictionary) {
  this._merge(this.dictionary, dictionary);
};

Dictionary.prototype.setMessage = function setMessage (locale, key, message) {
  if (! this.hasLocale(locale)) {
    this.dictionary[locale] = {
      messages: {},
      attributes: {}
    };
  }

  this.dictionary[locale].messages[key] = message;
};

Dictionary.prototype.setAttribute = function setAttribute (locale, key, attribute) {
  if (! this.hasLocale(locale)) {
    this.dictionary[locale] = {
      messages: {},
      attributes: {}
    };
  }

  this.dictionary[locale].attributes[key] = attribute;
};

Dictionary.prototype._merge = function _merge (target, source) {
    var this$1 = this;

  if (! (isObject(target) && isObject(source))) {
    return target;
  }

  Object.keys(source).forEach(function (key) {
    if (isObject(source[key])) {
      if (! target[key]) {
        assign(target, ( obj = {}, obj[key] = {}, obj ));
          var obj;
      }

      this$1._merge(target[key], source[key]);
      return;
    }

    assign(target, ( obj$1 = {}, obj$1[key] = source[key], obj$1 ));
      var obj$1;
  });

  return target;
};

/* istanbul ignore next */
/* eslint-disable max-len */
var messages = {
  _default: function (field) { return ("The " + field + " value is not valid."); },
  alpha_dash: function (field) { return ("The " + field + " field may contain alpha-numeric characters as well as dashes and underscores."); },
  alpha_num: function (field) { return ("The " + field + " field may only contain alpha-numeric characters."); },
  alpha_spaces: function (field) { return ("The " + field + " field may only contain alphabetic characters as well as spaces."); },
  alpha: function (field) { return ("The " + field + " field may only contain alphabetic characters."); },
  between: function (field, ref) {
    var min = ref[0];
    var max = ref[1];

    return ("The " + field + " field must be between " + min + " and " + max + ".");
},
  confirmed: function (field) { return ("The " + field + " confirmation does not match."); },
  credit_card: function (field) { return ("The " + field + " field is invalid."); },
  decimal: function (field, ref) {
    if ( ref === void 0 ) ref = ['*'];
    var decimals = ref[0];

    return ("The " + field + " field must be numeric and may contain " + (decimals === '*' ? '' : decimals) + " decimal points.");
},
  digits: function (field, ref) {
    var length = ref[0];

    return ("The " + field + " field must be numeric and exactly contain " + length + " digits.");
},
  dimensions: function (field, ref) {
    var width = ref[0];
    var height = ref[1];

    return ("The " + field + " field must be " + width + " pixels by " + height + " pixels.");
},
  email: function (field) { return ("The " + field + " field must be a valid email."); },
  ext: function (field) { return ("The " + field + " field must be a valid file."); },
  image: function (field) { return ("The " + field + " field must be an image."); },
  in: function (field) { return ("The " + field + " field must be a valid value."); },
  ip: function (field) { return ("The " + field + " field must be a valid ip address."); },
  max: function (field, ref) {
    var length = ref[0];

    return ("The " + field + " field may not be greater than " + length + " characters.");
},
  max_value: function (field, ref) {
    var max = ref[0];

    return ("The " + field + " field must be " + max + " or less.");
},
  mimes: function (field) { return ("The " + field + " field must have a valid file type."); },
  min: function (field, ref) {
    var length = ref[0];

    return ("The " + field + " field must be at least " + length + " characters.");
},
  min_value: function (field, ref) {
    var min = ref[0];

    return ("The " + field + " field must be " + min + " or more.");
},
  not_in: function (field) { return ("The " + field + " field must be a valid value."); },
  numeric: function (field) { return ("The " + field + " field may only contain numeric characters."); },
  regex: function (field) { return ("The " + field + " field format is invalid."); },
  required: function (field) { return ("The " + field + " field is required."); },
  size: function (field, ref) {
    var size = ref[0];

    return ("The " + field + " field must be less than " + size + " KB.");
},
  url: function (field) { return ("The " + field + " field is not a valid URL."); }
};

var after = function (moment) { return function (value, ref) {
  var targetField = ref[0];
  var inclusion = ref[1];
  var format = ref[2];

  var field = document.querySelector(("input[name='" + targetField + "']"));
  if (typeof format === 'undefined') {
    format = inclusion;
    inclusion = false;
  }
  var dateValue = moment(value, format, true);
  var otherValue = moment(field ? field.value : targetField, format, true);

  // if either is not valid.
  if (! dateValue.isValid() || ! otherValue.isValid()) {
    return false;
  }

  return dateValue.isAfter(otherValue) || (inclusion && dateValue.isSame(otherValue));
}; };

var before = function (moment) { return function (value, ref) {
  var targetField = ref[0];
  var inclusion = ref[1];
  var format = ref[2];

  var field = document.querySelector(("input[name='" + targetField + "']"));
  if (typeof format === 'undefined') {
    format = inclusion;
    inclusion = false;
  }
  var dateValue = moment(value, format, true);
  var otherValue = moment(field ? field.value : targetField, format, true);

  // if either is not valid.
  if (! dateValue.isValid() || ! otherValue.isValid()) {
    return false;
  }

  return dateValue.isBefore(otherValue) || (inclusion && dateValue.isSame(otherValue));
}; };

var date_format = function (moment) { return function (value, ref) {
	var format = ref[0];

	return moment(value, format, true).isValid();
 }	};

var date_between = function (moment) { return function (value, params) {
  var min;
  var max;
  var format;
  var inclusivity = '()';

  if (params.length > 3) {
    var assign;
    (assign = params, min = assign[0], max = assign[1], inclusivity = assign[2], format = assign[3]);
  } else {
    var assign$1;
    (assign$1 = params, min = assign$1[0], max = assign$1[1], format = assign$1[2]);
  }

  var minDate = moment(min, format, true);
  var maxDate = moment(max, format, true);
  var dateVal = moment(value, format, true);

  if (! (minDate.isValid() && maxDate.isValid() && dateVal.isValid())) {
    return false;
  }

  return dateVal.isBetween(minDate, maxDate, 'days', inclusivity);
}; };

/* istanbul ignore next */
/* eslint-disable max-len */
var messages$1 = {
  after: function (field, ref) {
    var target = ref[0];

    return ("The " + field + " must be after " + target + ".");
},
  before: function (field, ref) {
    var target = ref[0];

    return ("The " + field + " must be before " + target + ".");
},
  date_between: function (field, ref) {
    var min = ref[0];
    var max = ref[1];

    return ("The " + field + " must be between " + min + " and " + max + ".");
},
  date_format: function (field, ref) {
    var format = ref[0];

    return ("The " + field + " must be in the format " + format + ".");
}
};

var date = {
  make: function (moment) { return ({
    date_format: date_format(moment),
    after: after(moment),
    before: before(moment),
    date_between: date_between(moment)
  }); },
  messages: messages$1,
  installed: false
};

var LOCALE = 'en';
var STRICT_MODE = true;
var DICTIONARY = new Dictionary({
  en: {
    messages: messages,
    attributes: {}
  }
});

var Validator = function Validator(validations, options) {
  if ( options === void 0 ) options = { init: true };

  this.strictMode = STRICT_MODE;
  this.$scopes = { __global__: {} };
  this._createFields(validations);
  this.errorBag = new ErrorBag();
  this.fieldBag = {};
  // Some fields will be later evaluated, because the vm isn't mounted yet
  // so it may register it under an inaccurate scope.
  this.$deferred = [];
  this.$ready = false;

  // if momentjs is present, install the validators.
  if (typeof moment === 'function') {
    // eslint-disable-next-line
    this.installDateTimeValidators(moment);
  }

  if (options.init) {
    this.init();
  }
};

var prototypeAccessors = { dictionary: {},locale: {},rules: {} };

/**
 * @return {Dictionary}
 */
prototypeAccessors.dictionary.get = function () {
  return DICTIONARY;
};

/**
 * @return {String}
 */
prototypeAccessors.locale.get = function () {
  return LOCALE;
};

/**
 * @return {Object}
 */
prototypeAccessors.rules.get = function () {
  return Rules;
};

/**
 * Merges a validator object into the Rules and Messages.
 *
 * @param{string} name The name of the validator.
 * @param{function|object} validator The validator object.
 */
Validator._merge = function _merge (name, validator) {
  if (isCallable(validator)) {
    Rules[name] = validator;
    return;
  }

  Rules[name] = validator.validate;
  if (isCallable(validator.getMessage)) {
    DICTIONARY.setMessage(LOCALE, name, validator.getMessage);
  }

  if (validator.messages) {
    DICTIONARY.merge(
      Object.keys(validator.messages).reduce(function (prev, curr) {
        var dict = prev;
        dict[curr] = {
          messages: ( obj = {}, obj[name] = validator.messages[curr], obj )
        };
          var obj;

        return dict;
      }, {})
    );
  }
};

/**
 * Guards from extnsion violations.
 *
 * @param{string} name name of the validation rule.
 * @param{object} validator a validation rule object.
 */
Validator._guardExtend = function _guardExtend (name, validator) {
  if (Rules[name]) {
    throw new ValidatorException(
      ("Extension Error: There is an existing validator with the same name '" + name + "'.")
    );
  }

  if (isCallable(validator)) {
    return;
  }

  if (! isCallable(validator.validate)) {
    throw new ValidatorException(
      // eslint-disable-next-line
      ("Extension Error: The validator '" + name + "' must be a function or have a 'validate' method.")
    );
  }

  if (! isCallable(validator.getMessage) && ! isObject(validator.messages)) {
    throw new ValidatorException(
      // eslint-disable-next-line
      ("Extension Error: The validator '" + name + "' must have a 'getMessage' method or have a 'messages' object.")
    );
  }
};

/**
 * Static constructor.
 *
 * @param{object} validations The validations object.
 * @return {Validator} validator A validator object.
 */
Validator.create = function create (validations, $vm, options) {
  return new Validator(validations, $vm, options);
};

/**
 * Adds a custom validator to the list of validation rules.
 *
 * @param{string} name The name of the validator.
 * @param{object|function} validator The validator object/function.
 */
Validator.extend = function extend (name, validator) {
  Validator._guardExtend(name, validator);
  Validator._merge(name, validator);
};

/**
 * Installs the datetime validators and the messages.
 */
Validator.installDateTimeValidators = function installDateTimeValidators (moment) {
  if (typeof moment !== 'function') {
    warn('To use the date-time validators you must provide moment reference.');

    return false;
  }

  if (date.installed) {
    return true;
  }

  var validators = date.make(moment);
  Object.keys(validators).forEach(function (name) {
    Validator.extend(name, validators[name]);
  });

  Validator.updateDictionary({
    en: {
      messages: date.messages
    }
  });
  date.installed = true;

  return true;
};

/**
 * Removes a rule from the list of validators.
 * @param {String} name The name of the validator/rule.
 */
Validator.remove = function remove (name) {
  delete Rules[name];
};

/**
 * Sets the default locale for all validators.
 *
 * @param {String} language The locale id.
 */
Validator.setLocale = function setLocale (language) {
    if ( language === void 0 ) language = 'en';

  /* istanbul ignore if */
  if (! DICTIONARY.hasLocale(language)) {
    // eslint-disable-next-line
    warn('You are setting the validator locale to a locale that is not defined in the dicitionary. English messages may still be generated.');
  }

  LOCALE = language;
};

/**
 * Sets the operating mode for all newly created validators.
 * strictMode = true: Values without a rule are invalid and cause failure.
 * strictMode = false: Values without a rule are valid and are skipped.
 * @param {Boolean} strictMode.
 */
Validator.setStrictMode = function setStrictMode (strictMode) {
    if ( strictMode === void 0 ) strictMode = true;

  STRICT_MODE = strictMode;
};

/**
 * Updates the dicitionary, overwriting existing values and adding new ones.
 *
 * @param{object} data The dictionary object.
 */
Validator.updateDictionary = function updateDictionary (data) {
  DICTIONARY.merge(data);
};

Validator.addLocale = function addLocale (locale) {
  if (! locale.name) {
    warn('Your locale must have a name property');
    return;
  }

  this.updateDictionary(( obj = {}, obj[locale.name] = locale, obj ));
    var obj;
};

Validator.prototype.addLocale = function addLocale (locale) {
  Validator.addLocale(locale);
};

/**
 * Resolves the scope value. Only strings and functions are allowed.
 * @param {Function|String} scope
 * @returns {String}
 */
Validator.prototype._resolveScope = function _resolveScope (scope) {
  if (typeof scope === 'string') {
    return scope;
  }

  // The resolved value should be string.
  if (isCallable(scope)) {
    var value = scope();
    return typeof value === 'string' ? value : '__global__';
  }

  return '__global__';
};

/**
 * Resolves the field values from the getter functions.
 */
Validator.prototype._resolveValuesFromGetters = function _resolveValuesFromGetters (scope) {
    var this$1 = this;
    if ( scope === void 0 ) scope = '__global__';

  if (! this.$scopes[scope]) {
    return {};
  }
  var values = {};
  Object.keys(this.$scopes[scope]).forEach(function (name) {
    var field = this$1.$scopes[scope][name];
    var getter = field.getter;
    var context = field.context;
    var fieldScope = this$1._resolveScope(field.scope);
    if (getter && context && (scope === '__global__' || fieldScope === scope)) {
      values[name] = {
        value: getter(context()),
        scope: fieldScope
      };
    }
  });

  return values;
};

/**
 * Creates the fields to be validated.
 *
 * @param{object} validations
 * @return {object} Normalized object.
 */
Validator.prototype._createFields = function _createFields (validations) {
    var this$1 = this;

  if (! validations) {
    return;
  }

  Object.keys(validations).forEach(function (field) {
    this$1._createField(field, validations[field]);
  });
};

/**
 * Creates a field entry in the fields object.
 * @param {String} name.
 * @param {String|Array} checks.
 */
Validator.prototype._createField = function _createField (name, checks, scope) {
    if ( scope === void 0 ) scope = '__global__';

  scope = this._resolveScope(scope);
  if (! this.$scopes[scope]) {
    this.$scopes[scope] = {};
  }

  if (! this.$scopes[scope][name]) {
    this.$scopes[scope][name] = {};
  }

  var field = this.$scopes[scope][name];
  field.validations = this._normalizeRules(name, checks, scope);
  field.required = this._isRequired(field);
};

/**
 * Normalizes rules.
 * @return {Object}
 */
Validator.prototype._normalizeRules = function _normalizeRules (name, checks, scope) {
  if (! checks) { return {}; }

  if (typeof checks === 'string') {
    return this._normalizeString(checks);
  }

  if (! isObject(checks)) {
    warn(("Your checks for '" + scope + "." + name + "' must be either a string or an object."));
    return {};
  }

  return this._normalizeObject(checks);
};

/**
 * Checks if a field has a required rule.
 */
Validator.prototype._isRequired = function _isRequired (field) {
  return field.validations && field.validations.required;
};

/**
 * Normalizes an object of rules.
 */
Validator.prototype._normalizeObject = function _normalizeObject (rules) {
    var this$1 = this;

  var validations = {};
  Object.keys(rules).forEach(function (rule) {
    var params = [];
    if (rules[rule] === true) {
      params = [];
    } else if (Array.isArray(rules[rule])) {
      params = rules[rule];
    } else {
      params = [rules[rule]];
    }

    if (rules[rule] === false) {
      delete validations[rule];
    } else {
      validations[rule] = params;
    }

    if (date.installed && this$1._isADateRule(rule)) {
      var dateFormat = this$1._getDateFormat(validations);

      if (! this$1._containsValidation(validations[rule], dateFormat)) {
        validations[rule].push(this$1._getDateFormat(validations));
      }
    }
  });

  return validations;
};

/**
 * Date rules need the existance of a format, so date_format must be supplied.
 * @param {String} name The rule name.
 * @param {Array} validations the field validations.
 */
Validator.prototype._getDateFormat = function _getDateFormat (validations) {
  if (validations.date_format && Array.isArray(validations.date_format)) {
    return validations.date_format[0];
  }

  return null;
};

/**
 * Checks if the passed rule is a date rule.
 */
Validator.prototype._isADateRule = function _isADateRule (rule) {
  return !! ~['after', 'before', 'date_between'].indexOf(rule);
};

/**
 * Checks if the passed validation appears inside the array.
 */
Validator.prototype._containsValidation = function _containsValidation (validations, validation) {
  return !! ~validations.indexOf(validation);
};

/**
 * Normalizes string rules.
 * @param {String} rules The rules that will be normalized.
 * @param {Object} field The field object that is being operated on.
 */
Validator.prototype._normalizeString = function _normalizeString (rules) {
    var this$1 = this;

  var validations = {};
  rules.split('|').forEach(function (rule) {
    var parsedRule = this$1._parseRule(rule);
    if (! parsedRule.name) {
      return;
    }

    if (parsedRule.name === 'required') {
      validations.required = true;
    }

    validations[parsedRule.name] = parsedRule.params;
    if (date.installed && this$1._isADateRule(parsedRule.name)) {
      var dateFormat = this$1._getDateFormat(validations);

      if (! this$1._containsValidation(validations[parsedRule.name], dateFormat)) {
        validations[parsedRule.name].push(this$1._getDateFormat(validations));
      }
    }
  });

  return validations;
};

/**
 * Normalizes a string rule.
 *
 * @param {string} rule The rule to be normalized.
 * @return {object} rule The normalized rule.
 */
Validator.prototype._parseRule = function _parseRule (rule) {
  var params = [];
  var name = rule.split(':')[0];

  if (~rule.indexOf(':')) {
    params = rule.split(':').slice(1).join(':').split(',');
  }

  return { name: name, params: params };
};

/**
 * Formats an error message for field and a rule.
 *
 * @param{string} field The field name.
 * @param{object} rule Normalized rule object.
 * @param {object} data Additional Information about the validation result.
 * @param {string} scope The field scope.
 * @return {string} Formatted error message.
 */
Validator.prototype._formatErrorMessage = function _formatErrorMessage (field, rule, data, scope) {
    if ( data === void 0 ) data = {};
    if ( scope === void 0 ) scope = '__global__';

  var name = this._getFieldDisplayName(field, scope);
  var params = this._getLocalizedParams(rule, scope);
  // Defaults to english message.
  if (! this.dictionary.hasLocale(LOCALE)) {
    return this.dictionary.getMessage('en', rule.name)(name, params, data);
  }

  return this.dictionary.getMessage(LOCALE, rule.name)(name, params, data);
};

/**
 * Translates the parameters passed to the rule (mainly for target fields).
 */
Validator.prototype._getLocalizedParams = function _getLocalizedParams (rule, scope) {
    if ( scope === void 0 ) scope = '__global__';

  if (~ ['after', 'before', 'confirmed'].indexOf(rule.name) &&
      rule.params && rule.params[0]) {
    var param = this.$scopes[scope][rule.params[0]];
    if (param && param.name) { return [param.name]; }
    return [this.dictionary.getAttribute(LOCALE, rule.params[0], rule.params[0])];
  }

  return rule.params;
};

/**
 * Resolves an appropiate display name, first checking 'data-as' or the registered 'prettyName'
 * Then the dictionary, then fallsback to field name.
 * @return {String} displayName The name to be used in the errors.
 */
Validator.prototype._getFieldDisplayName = function _getFieldDisplayName (field, scope) {
    if ( scope === void 0 ) scope = '__global__';

  return this.$scopes[scope][field].as || this.dictionary.getAttribute(LOCALE, field, field);
};

/**
 * Tests a single input value against a rule.
 *
 * @param{*} name The name of the field.
 * @param{*} valuethe value of the field.
 * @param{object} rule the rule object.
 * @param {scope} scope The field scope.
 * @return {boolean} Whether it passes the check.
 */
Validator.prototype._test = function _test (name, value, rule, scope) {
    var this$1 = this;
    if ( scope === void 0 ) scope = '__global__';

  var validator = Rules[rule.name];
  if (! validator || typeof validator !== 'function') {
    throw new ValidatorException(("No such validator '" + (rule.name) + "' exists."));
  }

  var result = validator(value, rule.params, name);

  // If it is a promise.
  if (isCallable(result.then)) {
    return result.then(function (values) {
      var allValid = true;
      var data = {};
      if (Array.isArray(values)) {
        allValid = values.every(function (t) { return t.valid; });
      } else { // Is a single object.
        allValid = values.valid;
        data = values.data;
      }

      if (! allValid) {
        this$1.errorBag.add(
                      name,
                      this$1._formatErrorMessage(name, rule, data, scope),
                      rule.name,
                      scope
                  );
      }

      return allValid;
    });
  }

  if (! isObject(result)) {
    result = { valid: result, data: {} };
  }

  if (! result.valid) {
    this.errorBag.add(
              name,
              this._formatErrorMessage(name, rule, result.data, scope),
              rule.name,
              scope
          );
  }

  return result.valid;
};

/**
 * Adds an event listener for a specific field.
 * @param {String} name
 * @param {String} fieldName
 * @param {Function} callback
 */
Validator.prototype.on = function on (name, fieldName, callback) {
  if (! fieldName) {
    throw new ValidatorException(("Cannot add a listener for non-existent field " + fieldName + "."));
  }

  if (! isCallable(callback)) {
    throw new ValidatorException(("The " + name + " callback for field " + fieldName + " is not callable."));
  }

  var scope = '__global__';
  if (fieldName.indexOf('.') > -1) {
    // if no such field, try the scope form.
    if (! this.$scopes.__global__[name]) {
      var assign$$1;
        (assign$$1 = fieldName.split('.'), scope = assign$$1[0], fieldName = assign$$1[1]);
    }
  }

  this.$scopes[scope][fieldName].events[name] = callback;
};

/**
 * Removes the event listener for a specific field.
 * @param {String} name
 * @param {String} fieldName
 */
Validator.prototype.off = function off (name, fieldName) {
  if (! fieldName) {
    warn(("Cannot remove a listener for non-existent field " + fieldName + "."));
  }

  var scope = '__global__';
  if (fieldName.indexOf('.') > -1) {
    // if no such field, try the scope form.
    if (! this.$scopes.__global__[name]) {
      var assign$$1;
        (assign$$1 = fieldName.split('.'), scope = assign$$1[0], fieldName = assign$$1[1]);
    }
  }
  this.$scopes[scope][fieldName].events[name] = undefined;
};

Validator.prototype._assignFlags = function _assignFlags (field) {
  field.flags = {
    untouched: true,
    touched: false,
    dirty: false,
    pristine: true,
    valid: false,
    invalid: false
  };

  var flagObj = {};
    flagObj[field.name] = field.flags;
  if (field.scope === '__global__') {
    this.fieldBag = assign({}, this.fieldBag, flagObj);
    return;
  }

  var scopeObj = assign({}, this.fieldBag[("$" + (field.scope))], flagObj);

  this.fieldBag = assign({}, this.fieldBag, ( obj = {}, obj[("$" + (field.scope))] = scopeObj, obj ));
    var obj;
};

/**
 * Registers a field to be validated.
 *
 * @param{string} name The field name.
 * @param{String|Array|Object} checks validations expression.
 * @param {string} prettyName Custom name to be used as field name in error messages.
 * @param {Function} getter A function used to retrive a fresh value for the field.
 */
Validator.prototype.attach = function attach (name, checks, options) {
    var this$1 = this;
    if ( options === void 0 ) options = {};

  var attach = function () {
    options.scope = this$1._resolveScope(options.scope);
    this$1.updateField(name, checks, options);
    var field = this$1.$scopes[options.scope][name];
    field.scope = options.scope;
    field.name = name;
    field.as = options.prettyName;
    field.getter = options.getter;
    field.context = options.context;
    field.listeners = options.listeners || { detach: function detach() {} };
    field.el = field.listeners.el;
    field.events = {};
    this$1._assignFlags(field);

    if (field.listeners.classes) {
      field.listeners.classes.attach(field);
    }
    this$1._setAriaRequiredAttribute(field);
    this$1._setAriaValidAttribute(field, true);
    // if initial modifier is applied, validate immediatly.
    if (options.initial) {
      this$1.validate(name, field.getter(field.context()), field.scope).catch(function () {});
    }
  };

  var scope = isCallable(options.scope) ? options.scope() : options.scope;
  if (! scope && ! this.$ready) {
    this.$deferred.push(attach);
    return;
  }

  attach();
};

/**
 * Initializes the non-scoped fields and any bootstrap logic.
 */
Validator.prototype.init = function init () {
  this.$ready = true;
  this.$deferred.forEach(function (attach) {
    attach();
  });
  this.$deferred = [];

  return this;
};

/**
 * Sets the flags on a field.
 *
 * @param {String} name
 * @param {Object} flags
 */
Validator.prototype.flag = function flag (name, flags) {
  var ref = name.split('.');
    var scope = ref[0];
    var fieldName = ref[1];
  if (!fieldName) {
    fieldName = scope;
    scope = null;
  }
  var field = scope ? getPath((scope + "." + fieldName), this.$scopes) : this.$scopes[fieldName];
  if (! field) {
    return;
  }

  Object.keys(field.flags).forEach(function (flag) {
    field.flags[flag] = flags[flag] !== undefined ? flags[flag] : field.flags[flag];
  });
  field.listeners.classes.sync();
};

/**
 * Append another validation to an existing field.
 *
 * @param{string} name The field name.
 * @param{string} checks validations expression.
 */
Validator.prototype.append = function append (name, checks, options) {
    if ( options === void 0 ) options = {};

  options.scope = this._resolveScope(options.scope);
  // No such field
  if (! this.$scopes[options.scope] || ! this.$scopes[options.scope][name]) {
    this.attach(name, checks, options);
  }

  var field = this.$scopes[options.scope][name];
  var newChecks = this._normalizeRules(name, checks, options.scope);
  Object.keys(newChecks).forEach(function (key) {
    field.validations[key] = newChecks[key];
  });
};

/**
 * Updates the field rules with new ones.
 */
Validator.prototype.updateField = function updateField (name, checks, options) {
    if ( options === void 0 ) options = {};

  var field = getPath(((options.scope) + "." + name), this.$scopes, null);
  var oldChecks = field ? JSON.stringify(field.validations) : '';
  this._createField(name, checks, options.scope);
  field = getPath(((options.scope) + "." + name), this.$scopes, null);
  var newChecks = field ? JSON.stringify(field.validations) : '';

  // compare both newChecks and oldChecks to make sure we don't trigger uneccessary directive
  // update by changing the errorBag (prevents infinite loops).
  if (newChecks !== oldChecks) {
    this.errorBag.remove(name, options.scope);
  }
};

/**
 * Removes a field from the validator.
 *
 * @param{String} name The name of the field.
 * @param {String} scope The name of the field scope.
 */
Validator.prototype.detach = function detach (name, scope) {
    if ( scope === void 0 ) scope = '__global__';

  // No such field.
  if (! this.$scopes[scope] || ! this.$scopes[scope][name]) {
    return;
  }

  this.$scopes[scope][name].listeners.detach();
  this.errorBag.remove(name, scope);
  delete this.$scopes[scope][name];
};

/**
 * Adds a custom validator to the list of validation rules.
 *
 * @param{string} name The name of the validator.
 * @param{object|function} validator The validator object/function.
 */
Validator.prototype.extend = function extend (name, validator) {
  Validator.extend(name, validator);
};

/**
 * Gets the internal errorBag instance.
 *
 * @return {ErrorBag} errorBag The internal error bag object.
 */
Validator.prototype.getErrors = function getErrors () {
  return this.errorBag;
};

/**
 * Just an alias to the static method for convienece.
 */
Validator.prototype.installDateTimeValidators = function installDateTimeValidators (moment) {
  Validator.installDateTimeValidators(moment);
};

/**
 * Removes a rule from the list of validators.
 * @param {String} name The name of the validator/rule.
 */
Validator.prototype.remove = function remove (name) {
  Validator.remove(name);
};

/**
 * Sets the validator current langauge.
 *
 * @param {string} language locale or language id.
 */
Validator.prototype.setLocale = function setLocale (language) {
  /* istanbul ignore if */
  if (! this.dictionary.hasLocale(language)) {
    // eslint-disable-next-line
    warn('You are setting the validator locale to a locale that is not defined in the dicitionary. English messages may still be generated.');
  }

  LOCALE = language;
};

/**
 * Sets the operating mode for this validator.
 * strictMode = true: Values without a rule are invalid and cause failure.
 * strictMode = false: Values without a rule are valid and are skipped.
 * @param {Boolean} strictMode.
 */
Validator.prototype.setStrictMode = function setStrictMode (strictMode) {
    if ( strictMode === void 0 ) strictMode = true;

  this.strictMode = strictMode;
};

/**
 * Updates the messages dicitionary, overwriting existing values and adding new ones.
 *
 * @param{object} data The messages object.
 */
Validator.prototype.updateDictionary = function updateDictionary (data) {
  Validator.updateDictionary(data);
};

/**
 * Adds a scope.
 */
Validator.prototype.addScope = function addScope (scope) {
  if (scope && ! this.$scopes[scope]) {
    this.$scopes[scope] = {};
  }
};

/**
 * Validates a value against a registered field validations.
 *
 * @param{string} name the field name.
 * @param{*} value The value to be validated.
 * @param {String} scope The scope of the field.
 * @param {Boolean} throws If it should throw.
 * @return {Promise}
 */
Validator.prototype.validate = function validate (name, value, scope, throws) {
    var this$1 = this;
    if ( scope === void 0 ) scope = '__global__';
    if ( throws === void 0 ) throws = true;

  if (name && name.indexOf('.') > -1) {
    // no such field, try the scope form.
    if (! this.$scopes.__global__[name]) {
      var assign$$1;
        (assign$$1 = name.split('.'), scope = assign$$1[0], name = assign$$1[1]);
    }
  }
  if (! scope) { scope = '__global__'; }
  if (! this.$scopes[scope] || ! this.$scopes[scope][name]) {
    if (! this.strictMode) { return Promise.resolve(true); }

    var fullName = scope === '__global__' ? name : (scope + "." + name);
    warn(("Validating a non-existant field: \"" + fullName + "\". Use \"attach()\" first."));

    throw new ValidatorException('Validation Failed');
  }

  var field = this.$scopes[scope][name];
  this.errorBag.remove(name, scope);
  // if its not required and is empty or null or undefined then it passes.
  if (! field.required && ~[null, undefined, ''].indexOf(value)) {
    this._setAriaValidAttribute(field, true);
    if (field.events && isCallable(field.events.after)) {
      field.events.after({ valid: true });
    }
    return Promise.resolve(true);
  }

  try {
    var promises = Object.keys(field.validations).map(function (rule) {
      var result = this$1._test(
        name,
        value,
        { name: rule, params: field.validations[rule] },
        scope
      );

      if (isCallable(result.then)) {
        return result;
      }

      // Early exit.
      if (! result) {
        if (field.events && isCallable(field.events.after)) {
          field.events.after({ valid: false });
        }
        throw new ValidatorException('Validation Aborted.');
      }

      if (field.events && isCallable(field.events.after)) {
        field.events.after({ valid: true });
      }
      return Promise.resolve(result);
    });

    return Promise.all(promises).then(function (values) {
      var valid = values.every(function (t) { return t; });
      this$1._setAriaValidAttribute(field, valid);

      if (! valid && throws) {
        if (field.events && isCallable(field.events.after)) {
          field.events.after({ valid: false });
        }
        throw new ValidatorException('Failed Validation');
      }
      return valid;
    });
  } catch (error) {
    if (error.msg === '[vee-validate]: Validation Aborted.') {
      if (field.events && isCallable(field.events.after)) {
        field.events.after({ valid: false });
      }
      return Promise.resolve(false);
    }

    throw error;
  }
};

/**
 * Sets the aria-invalid attribute on the element.
 */
Validator.prototype._setAriaValidAttribute = function _setAriaValidAttribute (field, valid) {
  if (! field.el || field.listeners.component) {
    return;
  }

  field.el.setAttribute('aria-invalid', !valid);
};

/**
 * Sets the aria-required attribute on the element.
 */
Validator.prototype._setAriaRequiredAttribute = function _setAriaRequiredAttribute (field) {
  if (! field.el || field.listeners.component) {
    return;
  }

  field.el.setAttribute('aria-required', !! field.required);
};

/**
 * Validates each value against the corresponding field validations.
 * @param{object} values The values to be validated.
 * @param{String} scope The scope to be applied on validation.
 * @return {Promise} Returns a promise with the validation result.
 */
Validator.prototype.validateAll = function validateAll (values, scope) {
    var this$1 = this;
    if ( scope === void 0 ) scope = '__global__';

  var normalizedValues;
  if (! values || typeof values === 'string') {
    this.errorBag.clear(values);
    normalizedValues = this._resolveValuesFromGetters(values);
  } else {
    normalizedValues = {};
    Object.keys(values).forEach(function (key) {
      normalizedValues[key] = {
        value: values[key],
        scope: scope
      };
    });
  }
  var promises = Object.keys(normalizedValues).map(function (property) { return this$1.validate(
    property,
    normalizedValues[property].value,
    normalizedValues[property].scope,
    false // do not throw
  ); });

  return Promise.all(promises).then(function (results) {
    var valid = results.every(function (t) { return t; });
    if (! valid) {
      throw new ValidatorException('Validation Failed');
    }

    return valid;
  });
};

/**
 * Validates all scopes.
 * @returns {Promise} All promises resulted from each scope.
 */
Validator.prototype.validateScopes = function validateScopes () {
    var this$1 = this;

  return Promise.all(
    Object.keys(this.$scopes).map(function (scope) { return this$1.validateAll(scope); })
  );
};

Object.defineProperties( Validator.prototype, prototypeAccessors );

var makeMixin = function (Vue, options) { return ({
  computed: ( obj = {}, obj[options.errorBagName] = {
      get: function get() {
        return this.$validator.errorBag;
      }
    }, obj[options.fieldsBagName] = {
      get: function get() {
        return this.$validator.fieldBag;
      }
    }, obj ),
  beforeCreate: function beforeCreate() {
    this.$validator = new Validator(null, { init: false });
    Vue.util.defineReactive(this.$validator, 'errorBag', this.$validator.errorBag);
    Vue.util.defineReactive(this.$validator, 'fieldBag', this.$validator.fieldBag);
  },
  mounted: function mounted() {
    this.$validator.init();
  }
})
  var obj; };

var DEFAULT_CLASS_NAMES = {
  touched: 'touched', // the control has been blurred
  untouched: 'untouched', // the control hasn't been blurred
  valid: 'valid', // model is valid
  invalid: 'invalid', // model is invalid
  pristine: 'pristine', // control has not been interacted with
  dirty: 'dirty' // control has been interacted with
};

var ClassListener = function ClassListener(el, validator, options) {
  if ( options === void 0 ) options = {};

  this.el = el;
  this.validator = validator;
  this.enabled = options.enableAutoClasses;
  this.classNames = assign({}, DEFAULT_CLASS_NAMES, options.classNames || {});
  this.component = options.component;
  this.listeners = {};
};

/**
 * Resets the classes state.
 */
ClassListener.prototype.reset = function reset () {
  // detach all listeners.
  this.detach();

  // remove classes
  this.remove(this.classNames.dirty);
  this.remove(this.classNames.touched);
  this.remove(this.classNames.valid);
  this.remove(this.classNames.invalid);

  // listen again.
  this.attach(this.field);
};

/**
 * Syncs the automatic classes.
 */
ClassListener.prototype.sync = function sync () {
  if (! this.enabled) { return; }

  this.toggle(this.classNames.dirty, this.field.flags.dirty);
  this.toggle(this.classNames.pristine, this.field.flags.pristine);
  this.toggle(this.classNames.valid, this.field.flags.valid);
  this.toggle(this.classNames.invalid, this.field.flags.invalid);
  this.toggle(this.classNames.touched, this.field.flags.touched);
  this.toggle(this.classNames.untouched, this.field.flags.untouched);
};

/**
 * Attach field with its listeners.
 * @param {*} field
 */
ClassListener.prototype.attach = function attach (field) {
    var this$1 = this;

  this.field = field;
  this.add(this.classNames.pristine);
  this.add(this.classNames.untouched);

  // listen for focus event.
  this.listeners.focus = function () {
    this$1.remove(this$1.classNames.untouched);
    this$1.add(this$1.classNames.touched);
    // only needed once.
    this$1.el.removeEventListener('focus', this$1.listeners.focus);
    this$1.field.flags.touched = true;
    this$1.field.flags.untouched = false;
  };

  // listen for input.
  this.listeners.input = function () {
    this$1.remove(this$1.classNames.pristine);
    this$1.add(this$1.classNames.dirty);
    // only needed once.
    this$1.el.removeEventListener('input', this$1.listeners.input);
    this$1.field.flags.dirty = true;
    this$1.field.flags.pristine = false;
  };

  this.listeners.after = function (e) {
    this$1.remove(e.valid ? this$1.classNames.invalid : this$1.classNames.valid);
    this$1.add(e.valid ? this$1.classNames.valid : this$1.classNames.invalid);
    this$1.field.flags.valid = e.valid;
    this$1.field.flags.invalid = ! e.valid;
  };

  if (this.component) {
    this.component.$on('input', this.listeners.input);
    this.component.$on('focus', this.listeners.focus);
  } else {
    this.el.addEventListener('focus', this.listeners.focus);
    this.el.addEventListener('input', this.listeners.input);
  }
  this.validator.on('after', ((this.field.scope) + "." + (this.field.name)), this.listeners.after);
};

/**
 * Detach all listeners.
 */
ClassListener.prototype.detach = function detach () {
  // TODO: Why could the field be undefined?
  if (! this.field) { return; }

  if (this.component) {
    this.component.$off('input', this.listeners.input);
    this.component.$off('focus', this.listeners.focus);
  } else {
    this.el.removeEventListener('focus', this.listeners.focus);
    this.el.removeEventListener('input', this.listeners.input);
  }
  this.validator.off('after', ((this.field.scope) + "." + (this.field.name)));
};

/**
 * Add a class.
 * @param {*} className
 */
ClassListener.prototype.add = function add (className) {
  if (! this.enabled || this.component) { return; }

  addClass(this.el, className);
};

/**
 * Remove a class.
 * @param {*} className
 */
ClassListener.prototype.remove = function remove (className) {
  if (! this.enabled || this.component) { return; }

  removeClass(this.el, className);
};

/**
 * Toggles the class name.
 *
 * @param {String} className
 * @param {Boolean} status
 */
ClassListener.prototype.toggle = function toggle (className, status) {
  if (status) {
    this.add(className);
    return;
  }

  this.remove(className);
};

var ListenerGenerator = function ListenerGenerator(el, binding, vnode, options) {
  this.unwatch = undefined;
  this.callbacks = [];
  this.el = el;
  this.scope = isObject(binding.value) ? binding.value.scope : getScope(el);
  this.binding = binding;
  this.vm = vnode.context;
  this.component = vnode.child;
  this.options = options;
  this.fieldName = this._resolveFieldName();
  this.model = this._resolveModel(vnode.data.directives);
  this.classes = new ClassListener(el, this.vm.$validator, {
    component: this.component,
    enableAutoClasses: options.enableAutoClasses,
    classNames: options.classNames
  });
};

/**
 * Checks if the node directives contains a v-model.
 */
ListenerGenerator.prototype._resolveModel = function _resolveModel (directives) {
  var expRegex = /^[a-z_]+[0-9]*(\w*\.[a-z_]\w*)*$/i;
  var model = find(directives, function (d) { return d.name === 'model' && expRegex.test(d.expression); });

  return model && this._isExistingPath(model.expression) && model.expression;
};

/**
 * @param {String} path
 */
ListenerGenerator.prototype._isExistingPath = function _isExistingPath (path) {
  var obj = this.vm;
  return path.split('.').every(function (prop) {
    if (! Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }

    obj = obj[prop];

    return true;
  });
};

  /**
   * Resolves the field name to trigger validations.
   * @return {String} The field name.
   */
ListenerGenerator.prototype._resolveFieldName = function _resolveFieldName () {
  if (this.component) {
    return getDataAttribute(this.el, 'name') || this.component.name;
  }

  return getDataAttribute(this.el, 'name') || this.el.name;
};

  /**
   * Determines if the validation rule requires additional listeners on target fields.
   */
ListenerGenerator.prototype._hasFieldDependency = function _hasFieldDependency (rules) {
    var this$1 = this;

  var fieldName = false;
  if (! rules) {
    return false;
  }

  if (isObject(rules)) {
    Object.keys(rules).forEach(function (r) { // eslint-disable-line
      if (/confirmed|after|before/.test(r)) {
        fieldName = rules[r];

        return false;
      }
    });

    return fieldName;
  }

  rules.split('|').every(function (r) {
    if (/\b(confirmed|after|before):/.test(r)) {
      fieldName = r.split(':')[1];
      return false;
    }

    if (/\b(confirmed)/.test(r)) {
      fieldName = (this$1.fieldName) + "_confirmation";
      return false;
    }

    return true;
  });

  return fieldName;
};

  /**
   * Validates input value, triggered by 'input' event.
   */
ListenerGenerator.prototype._inputListener = function _inputListener () {
  return this._validate(this.el.value);
};

  /**
   * Validates files, triggered by 'change' event.
   */
ListenerGenerator.prototype._fileListener = function _fileListener () {
    var this$1 = this;

  return this._validate(toArray(this.el.files)).then(function (isValid) {
    if (! isValid && this$1.binding.modifiers.reject) {
      this$1.el.value = '';
    }
  });
};

  /**
   * Validates radio buttons, triggered by 'change' event.
   */
ListenerGenerator.prototype._radioListener = function _radioListener () {
  var checked = document.querySelector(("input[name=\"" + (this.el.name) + "\"]:checked"));
  return this._validate(checked ? checked.value : null);
};

  /**
   * Validates checkboxes, triggered by change event.
   */
ListenerGenerator.prototype._checkboxListener = function _checkboxListener () {
    var this$1 = this;

  var checkedBoxes = document.querySelectorAll(("input[name=\"" + (this.el.name) + "\"]:checked"));
  if (! checkedBoxes || ! checkedBoxes.length) {
    this._validate(null);
    return;
  }

  toArray(checkedBoxes).forEach(function (box) {
    this$1._validate(box.value);
  });
};

  /**
   * Trigger the validation for a specific value.
   */
ListenerGenerator.prototype._validate = function _validate (value) {
  return this.vm.$validator.validate(
    this.fieldName, value, this.scope || getScope(this.el)
    ).catch(function (result) { return result; });
};

  /**
   * Returns a scoped callback, only runs if the el scope is the same as the recieved scope
   * From the event.
   */
ListenerGenerator.prototype._getScopedListener = function _getScopedListener (callback) {
    var this$1 = this;

  return function (scope) {
    if (! scope || scope === this$1.scope || scope instanceof window.Event) {
      callback();
    }
  };
};

  /**
   * Attaches validator event-triggered validation.
   */
ListenerGenerator.prototype._attachValidatorEvent = function _attachValidatorEvent () {
    var this$1 = this;

  var listener = this._getScopedListener(this._getSuitableListener().listener.bind(this));
  var fieldName = this._hasFieldDependency(
      getRules(this.binding.expression, this.binding.value, this.el)
    );
  if (fieldName) {
          // Wait for the validator ready triggered when vm is mounted because maybe
          // the element isn't mounted yet.
    this.vm.$nextTick(function () {
      var target = document.querySelector(("input[name='" + fieldName + "']"));
      if (! target) {
        warn('Cannot find target field, no additional listeners were attached.');
        return;
      }

      var events = getDataAttribute(this$1.el, 'validate-on') || 'input|blur';
      events.split('|').forEach(function (e) {
        target.addEventListener(e, listener, false);
        this$1.callbacks.push({ name: e, listener: listener, el: target });
      });
    });
  }
};

  /**
   * Determines a suitable listener for the element.
   */
ListenerGenerator.prototype._getSuitableListener = function _getSuitableListener () {
  var listener;

  if (this.el.tagName === 'SELECT') {
    return {
      names: ['change', 'blur'],
      listener: this._inputListener
    };
  }

      // determine the suitable listener and events to handle
  switch (this.el.type) {
  case 'file':
    listener = {
      names: ['change'],
      listener: this._fileListener
    };
    break;

  case 'radio':
    listener = {
      names: ['change'],
      listener: this._radioListener
    };
    break;

  case 'checkbox':
    listener = {
      names: ['change'],
      listener: this._checkboxListener
    };
    break;

  default:
    listener = {
      names: ['input', 'blur'],
      listener: this._inputListener
    };
    break;
  }

  // users are able to specify which events they want to validate on
  // pipe separated list of handler names to use
  var events = getDataAttribute(this.el, 'validate-on');
  if (events) {
    listener.names = events.split('|');
  }

  return listener;
};

/**
 * Attaches neccessary validation events for the component.
 */
ListenerGenerator.prototype._attachComponentListeners = function _attachComponentListeners () {
    var this$1 = this;

  this.componentListener = debounce(function (value) {
    this$1._validate(value);
  }, getDataAttribute(this.el, 'delay') || this.options.delay);

  this.component.$on('input', this.componentListener);
  this.componentPropUnwatch = this.component.$watch('value', this.componentListener);
};

/**
 * Attachs a suitable listener for the input.
 */
ListenerGenerator.prototype._attachFieldListeners = function _attachFieldListeners () {
    var this$1 = this;

  // If it is a component, use vue events instead.
  if (this.component) {
    this._attachComponentListeners();

    return;
  }

  var handler = this._getSuitableListener();
  var listener = debounce(
    handler.listener.bind(this),
    getDataAttribute(this.el, 'delay') || this.options.delay
  );

  if (~['radio', 'checkbox'].indexOf(this.el.type)) {
    this.vm.$nextTick(function () {
      var elms = document.querySelectorAll(("input[name=\"" + (this$1.el.name) + "\"]"));
      toArray(elms).forEach(function (input) {
        handler.names.forEach(function (handlerName) {
          input.addEventListener(handlerName, listener, false);
          this$1.callbacks.push({ name: handlerName, listener: listener, el: input });
        });
      });
    });

    return;
  }

  handler.names.forEach(function (handlerName) {
    this$1.el.addEventListener(handlerName, listener, false);
    this$1.callbacks.push({ name: handlerName, listener: listener, el: this$1.el });
  });
};

/**
 * Returns a context, getter factory pairs for each input type.
 */
ListenerGenerator.prototype._resolveValueGetter = function _resolveValueGetter () {
    var this$1 = this;

  if (this.component) {
    return {
      context: function () { return this$1.component; },
      getter: function getter(context) {
        return context.value;
      }
    };
  }

  switch (this.el.type) {
  case 'checkbox': return {
    context: function () { return document.querySelectorAll(("input[name=\"" + (this$1.el.name) + "\"]:checked")); },
    getter: function getter(context) {
      if (! context || ! context.length) {
        return null;
      }

      return toArray(context).map(function (checkbox) { return checkbox.value; });
    }
  };
  case 'radio': return {
    context: function () { return document.querySelector(("input[name=\"" + (this$1.el.name) + "\"]:checked")); },
    getter: function getter(context) {
      return context && context.value;
    }
  };
  case 'file': return {
    context: function () { return this$1.el; },
    getter: function getter(context) {
      return toArray(context.files);
    }
  };

  default: return {
    context: function () { return this$1.el; },
    getter: function getter(context) {
      return context.value;
    }
  };
  }
};

/*
* Gets the arg string value, either from the directive or the expression value.
*/
ListenerGenerator.prototype._getArg = function _getArg () {
  // Get it from the directive arg.
  if (this.binding.arg) {
    return this.binding.arg;
  }

  // Get it from v-model.
  if (this.model) {
    return this.model;
  }

  return isObject(this.binding.value) ? this.binding.value.arg : null;
};

/**
 * Attaches model watchers and extra listeners.
 */
ListenerGenerator.prototype._attachModelWatcher = function _attachModelWatcher (arg) {
    var this$1 = this;

  var events = getDataAttribute(this.el, 'validate-on') || 'input|blur';
  var listener = debounce(
    this._getSuitableListener().listener.bind(this),
    getDataAttribute(this.el, 'delay') || this.options.delay
  );
  events.split('|').forEach(function (name) {
    if (~['input', 'change'].indexOf(name)) {
      var debounced = debounce(function (value) {
        this$1.vm.$validator.validate(
          this$1.fieldName, value, this$1.scope || getScope(this$1.el)
        ).catch(function (result) { return result; });
      }, getDataAttribute(this$1.el, 'delay') || this$1.options.delay);
      this$1.unwatch = this$1.vm.$watch(arg, debounced, { deep: true });
      // No need to attach it on element as it will use the vue watcher.
      return;
    }

    this$1.el.addEventListener(name, listener, false);
    this$1.callbacks.push({ name: name, listener: listener, el: this$1.el });
  });
};

/**
 * Attaches the Event Listeners.
 */
ListenerGenerator.prototype.attach = function attach () {
    var this$1 = this;

  var ref = this._resolveValueGetter();
    var context = ref.context;
    var getter = ref.getter;
  this.vm.$validator.attach(
    this.fieldName,
    getRules(this.binding.expression, this.binding.value, this.el), {
      // eslint-disable-next-line
      scope: function () {
        return this$1.scope || getScope(this$1.el);
      },
      prettyName: getDataAttribute(this.el, 'as') || this.el.title,
      context: context,
      getter: getter,
      listeners: this,
      initial: this.binding.modifiers.initial
    }
  );

  if (this.binding.modifiers.disable) {
    return;
  }

  this._attachValidatorEvent();
  var arg = this._getArg();
  if (arg) {
    this._attachModelWatcher(arg);
    return;
  }

  this._attachFieldListeners();
};

  /**
   * Removes all attached event listeners.
   */
ListenerGenerator.prototype.detach = function detach () {
  if (this.component) {
    this.component.$off('input', this.componentListener);
    this.componentPropUnwatch();
  }

  if (this.unwatch) {
    this.unwatch();
  }

  this.classes.detach();

  this.callbacks.forEach(function (h) {
    h.el.removeEventListener(h.name, h.listener);
  });
  this.callbacks = [];
};

var listenersInstances = [];

var makeDirective = function (options) { return ({
  inserted: function inserted(el, binding, vnode) {
    var listener = new ListenerGenerator(el, binding, vnode, options);
    listener.attach();
    listenersInstances.push({ vm: vnode.context, el: el, instance: listener });
  },
  update: function update(el, ref, ref$1) {
    var expression = ref.expression;
    var value = ref.value;
    var context = ref$1.context;

    var ref$2 = find(listenersInstances, function (l) { return l.vm === context && l.el === el; });
    var instance = ref$2.instance;
    // make sure we don't do uneccessary work if no expression was passed
    // nor if the expression did not change.
    if (! expression || (instance.cachedExp === JSON.stringify(value))) { return; }

    instance.cachedExp = JSON.stringify(value);
    var scope = isObject(value) ? (value.scope || getScope(el)) : getScope(el);
    context.$validator.updateField(
      instance.fieldName,
      getRules(expression, value, el),
      { scope: scope || '__global__' }
    );
  },
  unbind: function unbind(el, ref, ref$1) {
    var value = ref.value;
    var context = ref$1.context;

    var holder = find(listenersInstances, function (l) { return l.vm === context && l.el === el; });
    if (typeof holder === 'undefined') {
      return;
    }

    var scope = isObject(value) ? value.scope : (getScope(el) || '__global__');
    context.$validator.detach(holder.instance.fieldName, scope);
    listenersInstances.splice(listenersInstances.indexOf(holder), 1);
  }
}); };

var defaultOptions = {
  locale: 'en',
  delay: 0,
  errorBagName: 'errors',
  dictionary: null,
  strict: true,
  fieldsBagName: 'fields',
  enableAutoClasses: false,
  classNames: {}
};

var normalize = function (fields) {
  if (Array.isArray(fields)) {
    return fields.reduce(function (prev, curr) {
      if (~curr.indexOf('.')) {
        prev[curr.split('.')[1]] = curr;
      } else {
        prev[curr] = curr;
      }

      return prev;
    }, {});
  }

  return fields;
};

/**
 * Maps fields to computed functions.
 *
 * @param {Array|Object} fields
 */
var mapFields = function (fields) {
  var normalized = normalize(fields);
  return Object.keys(normalized).reduce(function (prev, curr) {
    var field = normalized[curr];
    prev[curr] = function mappedField() {
      if (this.$validator.fieldBag[field]) {
        return this.$validator.fieldBag[field];
      }

      var index = field.indexOf('.');
      if (index <= 0) {
        return {};
      }
      var ref = field.split('.');
      var scope = ref[0];
      var name = ref[1];

      return getPath(("$" + scope + "." + name), this.$validator.fieldBag, {});
    };

    return prev;
  }, {});
};

// eslint-disable-next-line
var install = function (Vue, options) {
  var config = assign({}, defaultOptions, options);
  if (config.dictionary) {
    Validator.updateDictionary(config.dictionary);
  }

  Validator.setLocale(config.locale);
  Validator.setStrictMode(config.strict);

  Vue.mixin(makeMixin(Vue, config));
  Vue.directive('validate', makeDirective(config));
};

var index = {
  install: install,
  mapFields: mapFields,
  Validator: Validator,
  ErrorBag: ErrorBag,
  Rules: Rules,
  version: '2.0.0-rc.2'
};

return index;

})));


/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs_themes_prism_okaidia_css__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs_themes_prism_okaidia_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prismjs_themes_prism_okaidia_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vee_validate__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vee_validate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vee_validate__);


__webpack_require__(48);
__webpack_require__(40);

window.VuePrism = __webpack_require__(60);
window.VeeValidate = __webpack_require__(16);
Vue.use(VeeValidate);
Vue.use(VuePrism);
Vue.component('ltable', __webpack_require__(57));



Vue.config.productionTip = false;

var css = "text-shadow: -1px -1px hsl(0,100%,50%), 1px 1px hsl(5.4, 100%, 50%), 3px 2px hsl(10.8, 100%, 50%), 5px 3px hsl(16.2, 100%, 50%), 7px 4px hsl(21.6, 100%, 50%), 9px 5px hsl(27, 100%, 50%), 11px 6px hsl(32.4, 100%, 50%), 13px 7px hsl(37.8, 100%, 50%), 14px 8px hsl(43.2, 100%, 50%), 16px 9px hsl(48.6, 100%, 50%), 18px 10px hsl(54, 100%, 50%), 20px 11px hsl(59.4, 100%, 50%), 22px 12px hsl(64.8, 100%, 50%), 23px 13px hsl(70.2, 100%, 50%), 25px 14px hsl(75.6, 100%, 50%), 27px 15px hsl(81, 100%, 50%), 28px 16px hsl(86.4, 100%, 50%), 30px 17px hsl(91.8, 100%, 50%), 32px 18px hsl(97.2, 100%, 50%), 33px 19px hsl(102.6, 100%, 50%), 35px 20px hsl(108, 100%, 50%), 36px 21px hsl(113.4, 100%, 50%), 38px 22px hsl(118.8, 100%, 50%), 39px 23px hsl(124.2, 100%, 50%), 41px 24px hsl(129.6, 100%, 50%), 42px 25px hsl(135, 100%, 50%), 43px 26px hsl(140.4, 100%, 50%), 45px 27px hsl(145.8, 100%, 50%), 46px 28px hsl(151.2, 100%, 50%), 47px 29px hsl(156.6, 100%, 50%), 48px 30px hsl(162, 100%, 50%), 49px 31px hsl(167.4, 100%, 50%), 50px 32px hsl(172.8, 100%, 50%), 51px 33px hsl(178.2, 100%, 50%), 52px 34px hsl(183.6, 100%, 50%), 53px 35px hsl(189, 100%, 50%), 54px 36px hsl(194.4, 100%, 50%), 55px 37px hsl(199.8, 100%, 50%), 55px 38px hsl(205.2, 100%, 50%), 56px 39px hsl(210.6, 100%, 50%), 57px 40px hsl(216, 100%, 50%), 57px 41px hsl(221.4, 100%, 50%), 58px 42px hsl(226.8, 100%, 50%), 58px 43px hsl(232.2, 100%, 50%), 58px 44px hsl(237.6, 100%, 50%), 59px 45px hsl(243, 100%, 50%), 59px 46px hsl(248.4, 100%, 50%), 59px 47px hsl(253.8, 100%, 50%), 59px 48px hsl(259.2, 100%, 50%), 59px 49px hsl(264.6, 100%, 50%), 60px 50px hsl(270, 100%, 50%), 59px 51px hsl(275.4, 100%, 50%), 59px 52px hsl(280.8, 100%, 50%), 59px 53px hsl(286.2, 100%, 50%), 59px 54px hsl(291.6, 100%, 50%), 59px 55px hsl(297, 100%, 50%), 58px 56px hsl(302.4, 100%, 50%), 58px 57px hsl(307.8, 100%, 50%), 58px 58px hsl(313.2, 100%, 50%), 57px 59px hsl(318.6, 100%, 50%), 57px 60px hsl(324, 100%, 50%), 56px 61px hsl(329.4, 100%, 50%), 55px 62px hsl(334.8, 100%, 50%), 55px 63px hsl(340.2, 100%, 50%), 54px 64px hsl(345.6, 100%, 50%), 53px 65px hsl(351, 100%, 50%), 52px 66px hsl(356.4, 100%, 50%), 51px 67px hsl(361.8, 100%, 50%), 50px 68px hsl(367.2, 100%, 50%), 49px 69px hsl(372.6, 100%, 50%), 48px 70px hsl(378, 100%, 50%), 47px 71px hsl(383.4, 100%, 50%), 46px 72px hsl(388.8, 100%, 50%), 45px 73px hsl(394.2, 100%, 50%), 43px 74px hsl(399.6, 100%, 50%), 42px 75px hsl(405, 100%, 50%), 41px 76px hsl(410.4, 100%, 50%), 39px 77px hsl(415.8, 100%, 50%), 38px 78px hsl(421.2, 100%, 50%), 36px 79px hsl(426.6, 100%, 50%), 35px 80px hsl(432, 100%, 50%), 33px 81px hsl(437.4, 100%, 50%), 32px 82px hsl(442.8, 100%, 50%), 30px 83px hsl(448.2, 100%, 50%), 28px 84px hsl(453.6, 100%, 50%), 27px 85px hsl(459, 100%, 50%), 25px 86px hsl(464.4, 100%, 50%), 23px 87px hsl(469.8, 100%, 50%), 22px 88px hsl(475.2, 100%, 50%), 20px 89px hsl(480.6, 100%, 50%), 18px 90px hsl(486, 100%, 50%), 16px 91px hsl(491.4, 100%, 50%), 14px 92px hsl(496.8, 100%, 50%), 13px 93px hsl(502.2, 100%, 50%), 11px 94px hsl(507.6, 100%, 50%), 9px 95px hsl(513, 100%, 50%), 7px 96px hsl(518.4, 100%, 50%), 5px 97px hsl(523.8, 100%, 50%), 3px 98px hsl(529.2, 100%, 50%), 1px 99px hsl(534.6, 100%, 50%), 7px 100px hsl(540, 100%, 50%), -1px 101px hsl(545.4, 100%, 50%), -3px 102px hsl(550.8, 100%, 50%), -5px 103px hsl(556.2, 100%, 50%), -7px 104px hsl(561.6, 100%, 50%), -9px 105px hsl(567, 100%, 50%), -11px 106px hsl(572.4, 100%, 50%), -13px 107px hsl(577.8, 100%, 50%), -14px 108px hsl(583.2, 100%, 50%), -16px 109px hsl(588.6, 100%, 50%), -18px 110px hsl(594, 100%, 50%), -20px 111px hsl(599.4, 100%, 50%), -22px 112px hsl(604.8, 100%, 50%), -23px 113px hsl(610.2, 100%, 50%), -25px 114px hsl(615.6, 100%, 50%), -27px 115px hsl(621, 100%, 50%), -28px 116px hsl(626.4, 100%, 50%), -30px 117px hsl(631.8, 100%, 50%), -32px 118px hsl(637.2, 100%, 50%), -33px 119px hsl(642.6, 100%, 50%), -35px 120px hsl(648, 100%, 50%), -36px 121px hsl(653.4, 100%, 50%), -38px 122px hsl(658.8, 100%, 50%), -39px 123px hsl(664.2, 100%, 50%), -41px 124px hsl(669.6, 100%, 50%), -42px 125px hsl(675, 100%, 50%), -43px 126px hsl(680.4, 100%, 50%), -45px 127px hsl(685.8, 100%, 50%), -46px 128px hsl(691.2, 100%, 50%), -47px 129px hsl(696.6, 100%, 50%), -48px 130px hsl(702, 100%, 50%), -49px 131px hsl(707.4, 100%, 50%), -50px 132px hsl(712.8, 100%, 50%), -51px 133px hsl(718.2, 100%, 50%), -52px 134px hsl(723.6, 100%, 50%), -53px 135px hsl(729, 100%, 50%), -54px 136px hsl(734.4, 100%, 50%), -55px 137px hsl(739.8, 100%, 50%), -55px 138px hsl(745.2, 100%, 50%), -56px 139px hsl(750.6, 100%, 50%), -57px 140px hsl(756, 100%, 50%), -57px 141px hsl(761.4, 100%, 50%), -58px 142px hsl(766.8, 100%, 50%), -58px 143px hsl(772.2, 100%, 50%), -58px 144px hsl(777.6, 100%, 50%), -59px 145px hsl(783, 100%, 50%), -59px 146px hsl(788.4, 100%, 50%), -59px 147px hsl(793.8, 100%, 50%), -59px 148px hsl(799.2, 100%, 50%), -59px 149px hsl(804.6, 100%, 50%), -60px 150px hsl(810, 100%, 50%), -59px 151px hsl(815.4, 100%, 50%), -59px 152px hsl(820.8, 100%, 50%), -59px 153px hsl(826.2, 100%, 50%), -59px 154px hsl(831.6, 100%, 50%), -59px 155px hsl(837, 100%, 50%), -58px 156px hsl(842.4, 100%, 50%), -58px 157px hsl(847.8, 100%, 50%), -58px 158px hsl(853.2, 100%, 50%), -57px 159px hsl(858.6, 100%, 50%), -57px 160px hsl(864, 100%, 50%), -56px 161px hsl(869.4, 100%, 50%), -55px 162px hsl(874.8, 100%, 50%), -55px 163px hsl(880.2, 100%, 50%), -54px 164px hsl(885.6, 100%, 50%), -53px 165px hsl(891, 100%, 50%), -52px 166px hsl(896.4, 100%, 50%), -51px 167px hsl(901.8, 100%, 50%), -50px 168px hsl(907.2, 100%, 50%), -49px 169px hsl(912.6, 100%, 50%), -48px 170px hsl(918, 100%, 50%), -47px 171px hsl(923.4, 100%, 50%), -46px 172px hsl(928.8, 100%, 50%), -45px 173px hsl(934.2, 100%, 50%), -43px 174px hsl(939.6, 100%, 50%), -42px 175px hsl(945, 100%, 50%), -41px 176px hsl(950.4, 100%, 50%), -39px 177px hsl(955.8, 100%, 50%), -38px 178px hsl(961.2, 100%, 50%), -36px 179px hsl(966.6, 100%, 50%), -35px 180px hsl(972, 100%, 50%), -33px 181px hsl(977.4, 100%, 50%), -32px 182px hsl(982.8, 100%, 50%), -30px 183px hsl(988.2, 100%, 50%), -28px 184px hsl(993.6, 100%, 50%), -27px 185px hsl(999, 100%, 50%), -25px 186px hsl(1004.4, 100%, 50%), -23px 187px hsl(1009.8, 100%, 50%), -22px 188px hsl(1015.2, 100%, 50%), -20px 189px hsl(1020.6, 100%, 50%), -18px 190px hsl(1026, 100%, 50%), -16px 191px hsl(1031.4, 100%, 50%), -14px 192px hsl(1036.8, 100%, 50%), -13px 193px hsl(1042.2, 100%, 50%), -11px 194px hsl(1047.6, 100%, 50%), -9px 195px hsl(1053, 100%, 50%), -7px 196px hsl(1058.4, 100%, 50%), -5px 197px hsl(1063.8, 100%, 50%), -3px 198px hsl(1069.2, 100%, 50%), -1px 199px hsl(1074.6, 100%, 50%), -1px 200px hsl(1080, 100%, 50%), 1px 201px hsl(1085.4, 100%, 50%), 3px 202px hsl(1090.8, 100%, 50%), 5px 203px hsl(1096.2, 100%, 50%), 7px 204px hsl(1101.6, 100%, 50%), 9px 205px hsl(1107, 100%, 50%), 11px 206px hsl(1112.4, 100%, 50%), 13px 207px hsl(1117.8, 100%, 50%), 14px 208px hsl(1123.2, 100%, 50%), 16px 209px hsl(1128.6, 100%, 50%), 18px 210px hsl(1134, 100%, 50%), 20px 211px hsl(1139.4, 100%, 50%), 22px 212px hsl(1144.8, 100%, 50%), 23px 213px hsl(1150.2, 100%, 50%), 25px 214px hsl(1155.6, 100%, 50%), 27px 215px hsl(1161, 100%, 50%), 28px 216px hsl(1166.4, 100%, 50%), 30px 217px hsl(1171.8, 100%, 50%), 32px 218px hsl(1177.2, 100%, 50%), 33px 219px hsl(1182.6, 100%, 50%), 35px 220px hsl(1188, 100%, 50%), 36px 221px hsl(1193.4, 100%, 50%), 38px 222px hsl(1198.8, 100%, 50%), 39px 223px hsl(1204.2, 100%, 50%), 41px 224px hsl(1209.6, 100%, 50%), 42px 225px hsl(1215, 100%, 50%), 43px 226px hsl(1220.4, 100%, 50%), 45px 227px hsl(1225.8, 100%, 50%), 46px 228px hsl(1231.2, 100%, 50%), 47px 229px hsl(1236.6, 100%, 50%), 48px 230px hsl(1242, 100%, 50%), 49px 231px hsl(1247.4, 100%, 50%), 50px 232px hsl(1252.8, 100%, 50%), 51px 233px hsl(1258.2, 100%, 50%), 52px 234px hsl(1263.6, 100%, 50%), 53px 235px hsl(1269, 100%, 50%), 54px 236px hsl(1274.4, 100%, 50%), 55px 237px hsl(1279.8, 100%, 50%), 55px 238px hsl(1285.2, 100%, 50%), 56px 239px hsl(1290.6, 100%, 50%), 57px 240px hsl(1296, 100%, 50%), 57px 241px hsl(1301.4, 100%, 50%), 58px 242px hsl(1306.8, 100%, 50%), 58px 243px hsl(1312.2, 100%, 50%), 58px 244px hsl(1317.6, 100%, 50%), 59px 245px hsl(1323, 100%, 50%), 59px 246px hsl(1328.4, 100%, 50%), 59px 247px hsl(1333.8, 100%, 50%), 59px 248px hsl(1339.2, 100%, 50%), 59px 249px hsl(1344.6, 100%, 50%), 60px 250px hsl(1350, 100%, 50%), 59px 251px hsl(1355.4, 100%, 50%), 59px 252px hsl(1360.8, 100%, 50%), 59px 253px hsl(1366.2, 100%, 50%), 59px 254px hsl(1371.6, 100%, 50%), 59px 255px hsl(1377, 100%, 50%), 58px 256px hsl(1382.4, 100%, 50%), 58px 257px hsl(1387.8, 100%, 50%), 58px 258px hsl(1393.2, 100%, 50%), 57px 259px hsl(1398.6, 100%, 50%), 57px 260px hsl(1404, 100%, 50%), 56px 261px hsl(1409.4, 100%, 50%), 55px 262px hsl(1414.8, 100%, 50%), 55px 263px hsl(1420.2, 100%, 50%), 54px 264px hsl(1425.6, 100%, 50%), 53px 265px hsl(1431, 100%, 50%), 52px 266px hsl(1436.4, 100%, 50%), 51px 267px hsl(1441.8, 100%, 50%), 50px 268px hsl(1447.2, 100%, 50%), 49px 269px hsl(1452.6, 100%, 50%), 48px 270px hsl(1458, 100%, 50%), 47px 271px hsl(1463.4, 100%, 50%), 46px 272px hsl(1468.8, 100%, 50%), 45px 273px hsl(1474.2, 100%, 50%), 43px 274px hsl(1479.6, 100%, 50%), 42px 275px hsl(1485, 100%, 50%), 41px 276px hsl(1490.4, 100%, 50%), 39px 277px hsl(1495.8, 100%, 50%), 38px 278px hsl(1501.2, 100%, 50%), 36px 279px hsl(1506.6, 100%, 50%), 35px 280px hsl(1512, 100%, 50%), 33px 281px hsl(1517.4, 100%, 50%), 32px 282px hsl(1522.8, 100%, 50%), 30px 283px hsl(1528.2, 100%, 50%), 28px 284px hsl(1533.6, 100%, 50%), 27px 285px hsl(1539, 100%, 50%), 25px 286px hsl(1544.4, 100%, 50%), 23px 287px hsl(1549.8, 100%, 50%), 22px 288px hsl(1555.2, 100%, 50%), 20px 289px hsl(1560.6, 100%, 50%), 18px 290px hsl(1566, 100%, 50%), 16px 291px hsl(1571.4, 100%, 50%), 14px 292px hsl(1576.8, 100%, 50%), 13px 293px hsl(1582.2, 100%, 50%), 11px 294px hsl(1587.6, 100%, 50%), 9px 295px hsl(1593, 100%, 50%), 7px 296px hsl(1598.4, 100%, 50%), 5px 297px hsl(1603.8, 100%, 50%), 3px 298px hsl(1609.2, 100%, 50%), 1px 299px hsl(1614.6, 100%, 50%), 2px 300px hsl(1620, 100%, 50%), -1px 301px hsl(1625.4, 100%, 50%), -3px 302px hsl(1630.8, 100%, 50%), -5px 303px hsl(1636.2, 100%, 50%), -7px 304px hsl(1641.6, 100%, 50%), -9px 305px hsl(1647, 100%, 50%), -11px 306px hsl(1652.4, 100%, 50%), -13px 307px hsl(1657.8, 100%, 50%), -14px 308px hsl(1663.2, 100%, 50%), -16px 309px hsl(1668.6, 100%, 50%), -18px 310px hsl(1674, 100%, 50%), -20px 311px hsl(1679.4, 100%, 50%), -22px 312px hsl(1684.8, 100%, 50%), -23px 313px hsl(1690.2, 100%, 50%), -25px 314px hsl(1695.6, 100%, 50%), -27px 315px hsl(1701, 100%, 50%), -28px 316px hsl(1706.4, 100%, 50%), -30px 317px hsl(1711.8, 100%, 50%), -32px 318px hsl(1717.2, 100%, 50%), -33px 319px hsl(1722.6, 100%, 50%), -35px 320px hsl(1728, 100%, 50%), -36px 321px hsl(1733.4, 100%, 50%), -38px 322px hsl(1738.8, 100%, 50%), -39px 323px hsl(1744.2, 100%, 50%), -41px 324px hsl(1749.6, 100%, 50%), -42px 325px hsl(1755, 100%, 50%), -43px 326px hsl(1760.4, 100%, 50%), -45px 327px hsl(1765.8, 100%, 50%), -46px 328px hsl(1771.2, 100%, 50%), -47px 329px hsl(1776.6, 100%, 50%), -48px 330px hsl(1782, 100%, 50%), -49px 331px hsl(1787.4, 100%, 50%), -50px 332px hsl(1792.8, 100%, 50%), -51px 333px hsl(1798.2, 100%, 50%), -52px 334px hsl(1803.6, 100%, 50%), -53px 335px hsl(1809, 100%, 50%), -54px 336px hsl(1814.4, 100%, 50%), -55px 337px hsl(1819.8, 100%, 50%), -55px 338px hsl(1825.2, 100%, 50%), -56px 339px hsl(1830.6, 100%, 50%), -57px 340px hsl(1836, 100%, 50%), -57px 341px hsl(1841.4, 100%, 50%), -58px 342px hsl(1846.8, 100%, 50%), -58px 343px hsl(1852.2, 100%, 50%), -58px 344px hsl(1857.6, 100%, 50%), -59px 345px hsl(1863, 100%, 50%), -59px 346px hsl(1868.4, 100%, 50%), -59px 347px hsl(1873.8, 100%, 50%), -59px 348px hsl(1879.2, 100%, 50%), -59px 349px hsl(1884.6, 100%, 50%), -60px 350px hsl(1890, 100%, 50%), -59px 351px hsl(1895.4, 100%, 50%), -59px 352px hsl(1900.8, 100%, 50%), -59px 353px hsl(1906.2, 100%, 50%), -59px 354px hsl(1911.6, 100%, 50%), -59px 355px hsl(1917, 100%, 50%), -58px 356px hsl(1922.4, 100%, 50%), -58px 357px hsl(1927.8, 100%, 50%), -58px 358px hsl(1933.2, 100%, 50%), -57px 359px hsl(1938.6, 100%, 50%), -57px 360px hsl(1944, 100%, 50%), -56px 361px hsl(1949.4, 100%, 50%), -55px 362px hsl(1954.8, 100%, 50%), -55px 363px hsl(1960.2, 100%, 50%), -54px 364px hsl(1965.6, 100%, 50%), -53px 365px hsl(1971, 100%, 50%), -52px 366px hsl(1976.4, 100%, 50%), -51px 367px hsl(1981.8, 100%, 50%), -50px 368px hsl(1987.2, 100%, 50%), -49px 369px hsl(1992.6, 100%, 50%), -48px 370px hsl(1998, 100%, 50%), -47px 371px hsl(2003.4, 100%, 50%), -46px 372px hsl(2008.8, 100%, 50%), -45px 373px hsl(2014.2, 100%, 50%), -43px 374px hsl(2019.6, 100%, 50%), -42px 375px hsl(2025, 100%, 50%), -41px 376px hsl(2030.4, 100%, 50%), -39px 377px hsl(2035.8, 100%, 50%), -38px 378px hsl(2041.2, 100%, 50%), -36px 379px hsl(2046.6, 100%, 50%), -35px 380px hsl(2052, 100%, 50%), -33px 381px hsl(2057.4, 100%, 50%), -32px 382px hsl(2062.8, 100%, 50%), -30px 383px hsl(2068.2, 100%, 50%), -28px 384px hsl(2073.6, 100%, 50%), -27px 385px hsl(2079, 100%, 50%), -25px 386px hsl(2084.4, 100%, 50%), -23px 387px hsl(2089.8, 100%, 50%), -22px 388px hsl(2095.2, 100%, 50%), -20px 389px hsl(2100.6, 100%, 50%), -18px 390px hsl(2106, 100%, 50%), -16px 391px hsl(2111.4, 100%, 50%), -14px 392px hsl(2116.8, 100%, 50%), -13px 393px hsl(2122.2, 100%, 50%), -11px 394px hsl(2127.6, 100%, 50%), -9px 395px hsl(2133, 100%, 50%), -7px 396px hsl(2138.4, 100%, 50%), -5px 397px hsl(2143.8, 100%, 50%), -3px 398px hsl(2149.2, 100%, 50%), -1px 399px hsl(2154.6, 100%, 50%); font-size: 40px;";
console.log("%cDo You Really Want %s", css, 'to know how laradox work? how about send me an email?');
console.log("%cfrankyso.mail@gmail.com %s", css, '');

var laradox = new Vue({
    el: '.canvas',
    data: {
        schema: {
            uuid: null,
            readonly: false,
            namespace: null,
            tables: [],
            relationships: [
                // {
                //     primary:{
                //         table:'fa655-a5sf55-a5dfa88-adfa65',
                //         field:'1a'
                //     },
                //     foreign:{
                //         table:'fa655-a5sf55-a5dfa88-adaa65',
                //         field:'12a'
                //     },
                //     type:"belongsTo"
                // }
            ]
        },
        temporary: {
            createTable: {
                name: null,
                modelName: null,
                tableColorClass: null,
                schemaUuid: null,
                incrementalId: true,
                timestamps: true,
                softDeletes: false

            },
            editTable: {
                uuid: null,
                name: null,
                modelName: null,
                tableColorClass: null
            },
            addField: {
                tableUuid: null,
                tableName: null,
                name: null,
                type: null,
                typeDescription: null,
                length: null,
                decimal: null,
                default: null,
                enum: [""],
                options: {
                    autoIncrementCheck: false,
                    unsignedCheck: false,
                    primaryKeyCheck: false,
                    indexCheck: false,
                    nullableCheck: false,
                    fillableCheck: false,
                    guardedCheck: false,
                    visibleCheck: false,
                    hiddenCheck: false,
                    foreignKeyCheck: false,
                    uniqueCheck: false,

                    nameVisibility: false,
                    lengthVisibility: false,
                    lengthDecimalVisibility: false,
                    arrayVisibility: false,
                    defaultValueVisibility: false
                },
                optionValues: {
                    foreign: false,
                    foreignValue: {
                        fieldUuid: null,
                        tableUuid: null,
                        onUpdate: null,
                        onDelete: null
                    }
                }
            },
            editField: {
                tableUuid: null,
                tableName: null,
                uuid: null,
                name: null,
                type: null,
                typeDescription: null,
                length: null,
                decimal: null,
                default: null,
                enum: [""],
                options: {
                    autoIncrementCheck: false,
                    unsignedCheck: false,
                    primaryKeyCheck: false,
                    indexCheck: false,
                    nullableCheck: false,
                    fillableCheck: false,
                    guardedCheck: false,
                    visibleCheck: false,
                    hiddenCheck: false,
                    foreignKeyCheck: false,
                    uniqueCheck: false,

                    nameVisibility: false,
                    lengthVisibility: false,
                    lengthDecimalVisibility: false,
                    arrayVisibility: false,
                    defaultValueVisibility: false
                },
                optionValues: {
                    foreign: false
                }
            },
            relation: {
                id: "",
                tableName: "",
                function: "",
                sourceTable: "",
                tableKey: 0,
                foreignKey: "",
                relationType: "hasMany"
            },
            filteredRelation: []
        },
        options: {
            tableColor: [{
                name: "Laradox",
                class: "laradox"
            }, {
                name: "Aqua",
                class: "aqua"
            }, {
                name: "Mud",
                class: "mud"
            }, {
                name: "Grass",
                class: "grass"
            }],
            styleColor: {
                "laradox": "#812653",
                "aqua": "#0A4958",
                "mud": "#6F533D",
                "grass": "#35682D"
            },
            fieldType: []
        }
    },
    watch: {
        'temporary.addField.type': {
            handler: function handler(value) {
                // console.log(value + " Value");
                var position = this.helperSearchFieldtypeIndex(value);
                // console.log(position + " Position");
                if (position >= 0) {
                    // console.log("position Come In");
                    this.temporary.addField.typeDescription = this.options.fieldType[position].description;
                    this.temporary.addField.options = this.options.fieldType[position].options;
                    this.temporary.addField.optionValues = {
                        foreign: false,
                        foreignValue: {
                            fieldUuid: null,
                            tableUuid: null,
                            onUpdate: null,
                            onDelete: null
                        }
                    };

                    // console.log(this.temporary.addField.options);
                }
            }
        },
        'temporary.editField.type': {
            handler: function handler(value) {
                var position = this.helperSearchFieldtypeIndex(value);
                this.temporary.editField.typeDescription = this.options.fieldType[position].description;
                this.temporary.editField.options = this.options.fieldType[position].options;
            }
        }
    },
    computed: {
        fieldForeignAddField: function fieldForeignAddField() {
            if (this.temporary.addField.optionValues.foreignValue.tableUuid == null) {
                return [];
            }

            return this.schema.tables[this.temporary.addField.optionValues.foreignValue.tableUuid].fields;
        },
        // relationForeignFields: function () {
        //     if (this.schema.tables.length == 0) {
        //         return [];
        //     }

        //     if (!this.schema.tables[this.temporary.relation.foreignKey]) {
        //         return [];
        //     }

        //     return this.schema.tables[this.temporary.relation.foreignKey].fields
        // },
        relationForeignModelName: function relationForeignModelName() {
            if (this.schema.tables.length == 0) {
                return [];
            }

            // console.log(this.temporary.relation.foreignKey);
            // console.log(this.temporary.relation.foreignKey);
            return this.schema.tables[this.temporary.relation.tableKey].modelName;
        }
    },
    mounted: function mounted() {
        this.schema.uuid = $('meta[name=schema-uuid]').attr("content");
        this.schema.namespace = $('meta[name=schema-namespace]').attr("content");
        this.schema.readonly = $('meta[name=readonly]').attr("content");

        this.fetchLaravelMigrationTypes();
        this.fetchTables();
        // this.helperDrawConnection();


        // Dialog Auto
        $(document).ready(function () {
            // console.log("auto");
            if (window.location.href.indexOf('#editModal') != -1) {
                $('#editModal').modal('show');
            }
        });
    },
    methods: {
        fetchLaravelMigrationTypes: function fetchLaravelMigrationTypes() {
            axios.get('/api/v1/schemas/laravel/54').then(function (response) {
                if (response.data.responseCode == 200) {
                    laradox.options.fieldType = response.data.responseItem;
                    // self.schema.tables.push(response.data.responseItem);
                }
            }).catch(function (error) {
                console.log(error);
            });
        },
        fetchSchema: function fetchSchema(uuid) {
            var self = laradox;
            axios.get('/api/v1/schemas/' + this.schema.uuid).then(function (response) {}).catch(function (error) {
                console.log(error);
            });
        },
        fetchTables: function fetchTables() {
            // self = laradox;
            axios.get('/api/v1/schemas/' + this.schema.uuid + '/tables').then(function (response) {
                laradox.schema.tables = response.data.responseItem;
                laradox.fetchRelationships();

                // if tables is zero open create table
                if (response.data.responseItem.length == 0) {
                    laradox.createTable();
                }
            }).catch(function (error) {
                console.log(error);
            });
        },
        fetchRelationships: function fetchRelationships() {
            axios.get('/api/v1/schemas/' + this.schema.uuid + '/relationships').then(function (response) {
                laradox.schema.relationships = response.data.responseItem;
                laradox.helperDrawConnection();
            }).catch(function (error) {
                console.log(error);
            });
        },
        exportDialog: function exportDialog() {
            console.log("masuk");
            $('#exportModal').modal('show');
        },
        createTable: function createTable() {
            $('#createTableModal').modal('show');
            this.temporary.createTable.name = null;
            this.temporary.createTable.modelName = null;
            this.temporary.createTable.tableColorClass = 'laradox';
            this.temporary.createTable.schemaUuid = this.schema.uuid;
        },
        showRelation: function showRelation(tableUuid) {
            var position = laradox.helperSearchTableIndex(tableUuid);

            laradox.temporary.relation.tableName = laradox.schema.tables[position].name;
            laradox.temporary.relation.sourceTable = laradox.schema.tables[position];
            $('#relationModal').modal('show');

            laradox.temporary.filteredRelation = [];

            // Filtering Data depends on tableUuid
            laradox.schema.relationships.map(function (value) {
                console.log(value.primary.table == tableUuid);
                if (value.primary.table == tableUuid) {
                    laradox.temporary.filteredRelation.push(value);
                }
            });

            laradox.$forceUpdate();
        },
        createRelationship: function createRelationship() {
            $('#createRelationModal').on("hidden.bs.modal", function () {
                $('#relationModal').modal('show');
            }).modal('show');

            laradox.temporary.relation.id = "";
            laradox.temporary.relation.function = "";
            // laradox.temporary.relation.sourceTable = ""
            laradox.temporary.relation.tableKey = 0;
            laradox.temporary.relation.foreignKey = "";
            laradox.temporary.relation.relationType = "hasMany";

            $('#relationModal').modal('hide');
        },
        createRelationshipSubmit: function createRelationshipSubmit() {
            var self = this;

            // Validating
            this.$validator.attach('functionNameField', 'required|alpha_dash', { prettyName: 'Function Name' });
            this.$validator.validateAll({
                functionNameField: self.temporary.relation.function
            });

            if (self.errors.any()) {
                console.log("error");
                return;
            }

            var sourceTableUuid = self.temporary.relation.sourceTable.uuid;
            var targetTableUuid = self.schema.tables[self.temporary.relation.tableKey].uuid;

            // var targetFieldUuid = "";
            // if (self.temporary.relation.foreign.fieldKey !== "") {
            //     targetFieldUuid = self.schema.tables[self.temporary.relation.tableKey].fields[self.temporary.relation.foreign.fieldKey].uuid
            // }

            // Post to create relation
            axios.post('/api/v1/relationships', {
                functionName: self.temporary.relation.function,
                sourceTableUuid: sourceTableUuid,
                targetTableUuid: targetTableUuid,
                foreignKey: self.temporary.relation.foreignKey,
                relationType: self.temporary.relation.relationType
            }).then(function (response) {
                $('#createRelationModal').modal('hide');
                setTimeout(function () {
                    $('#relationModal').modal('hide');
                }, 400);

                laradox.fetchRelationships();
            });
        },
        editRelationship: function editRelationship(relation) {
            $('#editRelationModal').on("hidden.bs.modal", function () {
                $('#relationModal').modal('show');
            }).modal('show');

            laradox.temporary.relation.id = relation.id;
            laradox.temporary.relation.function = relation.functionName;
            laradox.temporary.relation.sourceTable = relation.primary.tableObject;
            laradox.temporary.relation.tableKey = laradox.helperSearchTableIndex(relation.foreign.table);
            laradox.temporary.relation.foreignKey = relation.foreign.foreignKey;
            laradox.temporary.relation.relationType = relation.type;

            $('#relationModal').modal('hide');
        },

        deleteRelationship: function deleteRelationship(id) {
            $.confirm({
                title: 'Delete Relationship',
                content: 'Are you sure want to delete this relationship?',
                theme: 'supervan',
                buttons: {
                    confirm: function confirm() {
                        axios.delete('/api/v1/relationships/' + id).then(function () {
                            laradox.fetchRelationships();
                            $('#relationModal').modal('hide');
                        }).catch(function (error) {
                            console.log(error);
                            $.toast({
                                text: "Something happen, cannot delete this relationship", // Text that is to be shown in the toast
                                heading: 'Error', // Optional heading to be shown on the toast
                                icon: 'error', // Type of toast icon
                                showHideTransition: 'fade', // fade, slide or plain
                                allowToastClose: true, // Boolean value true or false
                                hideAfter: 10000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                                stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                                position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                                loader: true });
                        });
                    },
                    cancel: function cancel() {}
                }
            });
        },
        deleteScheme: function deleteScheme() {
            $.confirm({
                title: 'Delete Schema',
                content: 'Are you sure want to delete this schema?',
                theme: 'supervan',
                buttons: {
                    confirm: function confirm() {
                        axios.delete('/api/v1/schemas/' + laradox.schema.uuid).then(function () {
                            window.location = "/";
                        }).catch(function (error) {
                            $.toast({
                                text: "Something happen, cannot delete this relationship", // Text that is to be shown in the toast
                                heading: 'Error', // Optional heading to be shown on the toast
                                icon: 'error', // Type of toast icon
                                showHideTransition: 'fade', // fade, slide or plain
                                allowToastClose: true, // Boolean value true or false
                                hideAfter: 10000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                                stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                                position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                                loader: true });
                        });
                    },
                    cancel: function cancel() {}
                }
            });
        },
        updateRelationshipSubmit: function updateRelationshipSubmit() {
            var self = this;

            // Validating
            this.$validator.attach('functionNameField', 'required|alpha_dash', { prettyName: 'Function Name' });
            this.$validator.validateAll({
                functionNameField: self.temporary.relation.function
            });

            if (self.errors.any()) {
                console.log("error");
                return;
            }

            var sourceTableUuid = self.temporary.relation.sourceTable.uuid;
            var targetTableUuid = self.schema.tables[self.temporary.relation.tableKey].uuid;

            // Post to create relation
            axios.patch('/api/v1/relationships/' + self.temporary.relation.id, {
                functionName: self.temporary.relation.function,
                sourceTableUuid: sourceTableUuid,
                targetTableUuid: targetTableUuid,
                foreignKey: self.temporary.relation.foreignKey,
                relationType: self.temporary.relation.relationType
            }).then(function (response) {
                $('#editRelationModal').modal('hide');
                setTimeout(function () {
                    $('#relationModal').modal('hide');
                }, 300);

                laradox.fetchRelationships();
            });
        },
        createTableSubmit: function createTableSubmit() {
            var self = this;

            /*Validating*/
            this.$validator.attach('createTableName', 'required|alpha_dash', { prettyName: 'Table Name' });
            this.$validator.attach('createTableModelName', 'required|alpha_dash', { prettyName: 'Model Name' });
            this.$validator.attach('createTableTableColorClass', 'required', { prettyName: 'Table Color' });

            this.$validator.validateAll({
                createTableName: self.temporary.createTable.name,
                createTableModelName: self.temporary.createTable.modelName,
                createTableTableColorClass: self.temporary.createTable.tableColorClass
            });

            if (self.errors.any()) {
                return;
            };

            // Post to saving
            axios.post('/api/v1/tables', self.temporary.createTable).then(function (response) {
                if (response.data.responseCode == 200) {
                    // console.log(this.schema.tables);
                    self.schema.tables.push(response.data.responseItem);

                    // If already submit show create fields
                    laradox.addField(self.schema.tables.length - 1);
                }
            }).catch(function (error) {
                console.log(error);
            });

            $('#createTableModal').modal('hide');
            self.$forceUpdate();
        },
        editTable: function editTable(key) {
            $('#editTableModal').modal('show');
            var self = laradox;
            self.temporary.editTable.uuid = self.schema.tables[key].uuid;
            self.temporary.editTable.name = self.schema.tables[key].name;
            self.temporary.editTable.modelName = self.schema.tables[key].modelName;
            self.temporary.editTable.tableColorClass = self.schema.tables[key].style.tableColorClass;
        },
        editTableSubmit: function editTableSubmit() {
            var self = laradox;

            /*Validating*/
            this.$validator.attach('editTableName', 'required|alpha_dash', { prettyName: 'Table Name' });
            this.$validator.attach('editTableModelName', 'required|alpha_dash', { prettyName: 'Model Name' });
            this.$validator.attach('editTableTableColorClass', 'required', { prettyName: 'Table Color' });

            this.$validator.validateAll({
                editTableName: self.temporary.editTable.name,
                editTableModelName: self.temporary.editTable.modelName,
                editTableTableColorClass: self.temporary.editTable.tableColorClass
            });

            if (self.errors.any()) {
                return;
            };

            // Post to saving
            axios.patch('/api/v1/tables/' + self.temporary.editTable.uuid, self.temporary.editTable).then(function (response) {
                if (response.data.responseCode == 200) {
                    var position = self.helperSearchTableIndex(self.temporary.editTable.uuid);

                    self.schema.tables[position].name = self.temporary.editTable.name;
                    self.schema.tables[position].modelName = self.temporary.editTable.modelName;
                    self.schema.tables[position].style.tableColorClass = self.temporary.editTable.tableColorClass;

                    $('#editTableModal').modal('hide');
                    self.$forceUpdate();
                    laradox.helperDrawConnection();
                }
            }).catch(function (error) {
                console.log(error);
            });
        },
        resetAddField: function resetAddField() {
            // laradox.temporary.addField.tableUuid = null;
            // laradox.temporary.addField.tableName = null;
            laradox.temporary.addField.name = "";
            // laradox.temporary.addField.type = "";
            laradox.temporary.addField.typeDescription = "";
            laradox.temporary.addField.length = "";
            laradox.temporary.addField.decimal = "";
            laradox.temporary.addField.defaults = "";
            laradox.temporary.addField.enum = [""];
            // laradox.temporary.addField.options.autoIncrementCheck = false;
            // laradox.temporary.addField.options.unsignedCheck = false;
            // laradox.temporary.addField.options.primaryKeyCheck = false;
            // laradox.temporary.addField.options.indexCheck = false;
            // laradox.temporary.addField.options.nullableCheck = false;
            // laradox.temporary.addField.options.fillableCheck = false;
            // laradox.temporary.addField.options.guardedCheck = false;
            // laradox.temporary.addField.options.visibleCheck = false;
            // laradox.temporary.addField.options.hiddenCheck = false;
            // laradox.temporary.addField.options.foreignKeyCheck = false;
            // laradox.temporary.addField.options.uniqueCheck = false;
            // laradox.temporary.addField.optionValues.foreign = false;
            // laradox.temporary.addField.optionValues.foreignValue.fieldUuid
            // laradox.temporary.addField.optionValues.foreignValue.tableUuid = "";
            // laradox.temporary.addField.optionValues.foreignValue.onUpdate = "";
            // laradox.temporary.addField.optionValues.foreignValue.onDelete = "";
        },
        addField: function addField(index) {
            var self = laradox;
            $('#addFieldModal').modal('show');
            self.temporary.addField.tableName = self.schema.tables[index].name;
            self.temporary.addField.tableUuid = self.schema.tables[index].uuid;
        },
        addFieldSubmit: function addFieldSubmit() {
            var self = this;
            var position = self.helperSearchTableIndex(self.temporary.addField.tableUuid);

            $(".addFieldSubmitButton").button('loading');

            // Post to saving
            axios.post('/api/v1/fields', self.temporary.addField).then(function (response) {
                $(".addFieldSubmitButton").button('reset');
                if (response.data.responseCode == 200) {
                    self.schema.tables[position].fields.push(response.data.responseItem);
                    // console.log(response);
                    // self.schema.tables.push(response.data.responseItem);
                    // 
                    $('#addFieldModal').modal('hide');

                    setTimeout(function () {
                        self.resetAddField();
                        laradox.addField(position);
                    }, 500);

                    $.toast({
                        text: "Field Successfuly Added", // Text that is to be shown in the toast
                        heading: 'Success', // Optional heading to be shown on the toast
                        icon: 'success', // Type of toast icon
                        showHideTransition: 'fade', // fade, slide or plain
                        allowToastClose: true, // Boolean value true or false
                        hideAfter: 5000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                        stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                        position: 'top-right', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                        loader: true });
                }
            }).catch(function (error) {
                $(".addFieldSubmitButton").button('reset');
                if (error.response.status == 422) {
                    var array = $.map(error.response.data, function (value, index) {
                        return [value];
                    });

                    $.toast({
                        text: array, // Text that is to be shown in the toast
                        heading: 'Error', // Optional heading to be shown on the toast
                        icon: 'error', // Type of toast icon
                        showHideTransition: 'fade', // fade, slide or plain
                        allowToastClose: true, // Boolean value true or false
                        hideAfter: 10000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                        stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                        position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                        loader: true });

                    // for (var key in error.response.data) {
                    //   if (error.response.data.hasOwnProperty(key)) {
                    //     console.log(key + " -> " + error.response.data[key]);
                    //   }
                    // }

                    // bag.add('email', 'Wrong Credentials');
                }
            });
        },
        editField: function editField(tableUuid, fieldIndex) {
            var self = laradox;

            var position = self.helperSearchTableIndex(tableUuid);
            self.temporary.editField.tableName = self.schema.tables[position].name;
            self.temporary.editField.tableUuid = tableUuid;
            self.temporary.editField.uuid = self.schema.tables[position].fields[fieldIndex].uuid;
            self.temporary.editField.name = self.schema.tables[position].fields[fieldIndex].name;
            self.temporary.editField.type = self.schema.tables[position].fields[fieldIndex].type;
            self.temporary.editField.length = self.schema.tables[position].fields[fieldIndex].length;
            self.temporary.editField.default = self.schema.tables[position].fields[fieldIndex].default;
            self.temporary.editField.optionValues = self.schema.tables[position].fields[fieldIndex].options;
            self.temporary.editField.enum = self.schema.tables[position].fields[fieldIndex].enum;

            $('#editFieldModal').modal('show');
        },
        editFieldSubmit: function editFieldSubmit() {
            var self = this;
            var tablePosition = self.helperSearchTableIndex(self.temporary.editField.tableUuid);
            var fieldPosition = self.helperSearchFieldIndex(self.temporary.editField.tableUuid, self.temporary.editField.uuid);

            // Post to saving
            axios.patch('/api/v1/fields/' + self.temporary.editField.uuid, self.temporary.editField).then(function (response) {
                if (response.data.responseCode == 200) {
                    Vue.set(self.schema.tables[tablePosition].fields, fieldPosition, response.data.responseItem);
                    $('#editFieldModal').modal('hide');
                }
            }).catch(function (error) {
                if (error.response.status == 422) {
                    var array = $.map(error.response.data, function (value, index) {
                        return [value];
                    });

                    $.toast({
                        text: array, // Text that is to be shown in the toast
                        heading: 'Error', // Optional heading to be shown on the toast
                        icon: 'error', // Type of toast icon
                        showHideTransition: 'fade', // fade, slide or plain
                        allowToastClose: true, // Boolean value true or false
                        hideAfter: 10000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                        stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                        position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                        loader: true });
                }

                $('#editFieldModal').modal('hide');
            });
        },
        UpdateFieldOrder: function UpdateFieldOrder(tableUuid, fieldArray) {
            axios.post('/api/v1/tables/' + tableUuid + '/sortfield', fieldArray).catch(function (error) {
                if (error.response.status == 422) {
                    var array = $.map(error.response.data, function (value, index) {
                        return [value];
                    });

                    $.toast({
                        text: array, // Text that is to be shown in the toast
                        heading: 'Error', // Optional heading to be shown on the toast
                        icon: 'error', // Type of toast icon
                        showHideTransition: 'fade', // fade, slide or plain
                        allowToastClose: true, // Boolean value true or false
                        hideAfter: 10000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                        stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                        position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                        loader: true });
                }
            });
        },

        deleteField: function deleteField(fieldUuid, tableUuid) {
            var self = laradox;
            var tablePosition = self.helperSearchTableIndex(tableUuid);
            var fieldPosition = self.helperSearchFieldIndex(tableUuid, self.temporary.editField.uuid);

            $.confirm({
                title: 'Delete Field',
                content: 'Are you sure want to delete this field?',
                theme: 'supervan',
                buttons: {
                    confirm: function confirm() {
                        axios.delete('/api/v1/fields/' + fieldUuid).then(function () {
                            Vue.delete(self.schema.tables[tablePosition].fields, fieldPosition);
                        }).catch(function (error) {
                            // console.log(error);
                            $.toast({
                                text: "Something happen, cannot delete this field", // Text that is to be shown in the toast
                                heading: 'Error', // Optional heading to be shown on the toast
                                icon: 'error', // Type of toast icon
                                showHideTransition: 'fade', // fade, slide or plain
                                allowToastClose: true, // Boolean value true or false
                                hideAfter: 10000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                                stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                                position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                                loader: true });
                        });
                    },
                    cancel: function cancel() {}
                }
            });
        },
        deleteTable: function deleteTable(tableUuid) {
            var tablePosition = self.helperSearchTableIndex(tableUuid);
            $.confirm({
                title: 'Delete Table',
                content: 'Are you sure want to delete this table?',
                theme: 'supervan',
                buttons: {
                    confirm: function confirm() {
                        axios.delete('/api/v1/tables/' + tableUuid).then(function () {
                            Vue.delete(self.schema.tables, tablePosition);
                        }).catch(function (error) {
                            $.toast({
                                text: "Something happen, cannot delete this field", // Text that is to be shown in the toast
                                heading: 'Error', // Optional heading to be shown on the toast
                                icon: 'error', // Type of toast icon
                                showHideTransition: 'fade', // fade, slide or plain
                                allowToastClose: true, // Boolean value true or false
                                hideAfter: 10000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                                stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                                position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                                loader: true });
                        });
                    },
                    cancel: function cancel() {}
                }
            });
        },
        helperRemoveConnection: function helperRemoveConnection(source, target) {
            var conn = jsPlumb.getConnections({
                source: source,
                target: target
            });
            if (conn[0]) {
                jsPlumb.detach(conn[0]);
            }
        },
        helperDrawConnection: function helperDrawConnection() {
            self = this;
            Vue.nextTick(function () {
                jsPlumb.ready(function () {
                    setInterval(function () {
                        jsPlumb.repaintEverything();
                    }, 10);

                    jsPlumb.setContainer($(".canvas"));
                    jsPlumb.Defaults.Connector = ["Flowchart", { cornerRadius: 6 }];
                    jsPlumb.Defaults.Anchor = "Continuous";
                    jsPlumb.Defaults.ConnectionsDetachable = false;
                    jsPlumb.Defaults.PaintStyle = { strokeWidth: 5, stroke: "#000" };
                    jsPlumb.Defaults.EndpointStyle = { fill: "#445566" };
                    jsPlumb.Defaults.HoverPaintStyle = { stroke: "#637b94", strokeWidth: 6 };
                    jsPlumb.Defaults.EndpointHoverStyle = { fill: "#637b94" };

                    // jsPlumb.detachEveryConnection();
                    jsPlumb.deleteEveryEndpoint();

                    jsPlumb.setSuspendDrawing(true);
                    laradox.schema.relationships.forEach(function (entry) {
                        var position = laradox.helperSearchTableIndex(entry.primary.table);
                        var color = laradox.schema.tables[position].style.tableColorClass;
                        var colorHex = laradox.options.styleColor[color];
                        jsPlumb.connect({
                            // source: entry.primary.table + '_' + entry.primary.field,
                            // target: entry.foreign.table + '_' + entry.foreign.field,
                            source: entry.primary.table,
                            target: entry.foreign.table,
                            paintStyle: { stroke: colorHex, strokeWidth: 5 },
                            endpointStyle: { fill: colorHex },
                            overlays: [["Label", { cssClass: "label label-" + color, label: entry.type, location: 0.3, id: "label" }]]
                        });
                    });
                    jsPlumb.setSuspendDrawing(false, true);

                    jsPlumb.bind("click", function (connection, originalEvent) {
                        console.log(connection.sourceId);
                        console.log(connection.targetId);
                    });
                });
            });
        },
        helperSearchTableIndex: function helperSearchTableIndex(uuid) {
            self = this;
            var elementPos = self.schema.tables.map(function (x) {
                return x.uuid;
            }).indexOf(uuid);
            return elementPos;
        },
        helperSearchFieldIndex: function helperSearchFieldIndex(tableUuid, uuid) {
            self = this;
            var tablePosition = self.schema.tables.map(function (x) {
                return x.uuid;
            }).indexOf(tableUuid);
            var fieldPosition = self.schema.tables[tablePosition].fields.map(function (x) {
                return x.uuid;
            }).indexOf(uuid);
            return fieldPosition;
        },
        helperSearchFieldtypeIndex: function helperSearchFieldtypeIndex(type) {
            self = this;
            var elementPos = self.options.fieldType.map(function (x) {
                return String(x.type);
            }).indexOf(String(type));
            return elementPos;
        }
    }
});

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var me = this;
    $("#" + this.table.uuid).css({
      top: this.table.style.position.top,
      left: this.table.style.position.left
    });

    if (this.readonly == '0') {

      $("#" + this.table.uuid).draggable({
        scroll: true,
        handle: ".panel-heading",
        drag: function drag(event, ui) {
          me.table.style.position.top = ui.position.top;
          me.table.style.position.left = ui.position.left;
          // console.log(me.table.style.position.left);
        }
      });

      $(".sortable").sortable({
        handle: ".handle",
        update: function update() {
          me.updateFieldOrder($(this).sortable("toArray"));
        }
      });
    }

    $('[data-toggle="tooltip"]').tooltip();
  },

  props: ["table", "index", "readonly"],
  watch: {
    "table.style.position": {
      handler: function handler() {
        this.updatePositionDebounce();
      },
      deep: true
    }
  },
  methods: {
    editTable: function editTable(key) {
      this.$parent.$options.methods.editTable(key);
    },
    deleteTable: function deleteTable(uuid) {
      this.$parent.$options.methods.deleteTable(uuid);
    },
    addField: function addField(key) {
      this.$parent.$options.methods.addField(key);
    },
    editField: function editField(tableUuid, fieldIndex) {
      this.$parent.$options.methods.editField(tableUuid, fieldIndex);
    },
    updateFieldOrder: function updateFieldOrder(fieldArray) {
      this.$parent.$options.methods.UpdateFieldOrder(this.table.uuid, fieldArray);
    },
    deleteField: function deleteField(key, tableuid) {
      this.$parent.$options.methods.deleteField(this.table.fields[key].uuid, tableuid);
    },
    showRelation: function showRelation(tableuid) {
      this.$parent.$options.methods.showRelation(tableuid);
    },
    updatePositionDebounce: _.debounce(function () {
      setTimeout(function () {
        this.updatePosition();
      }.bind(this), 1000);
    }, 500),
    updatePosition: function updatePosition() {
      var me = this;
      axios.post("/api/v1/tables/" + me.table.uuid + "/position", me.table.style.position).then(function (response) {
        // self.schema.tables=response.data.responseItem;
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * jquery-confirm v3.3.2 (http://craftpip.github.io/jquery-confirm/)
 * Author: Boniface Pereira
 * Website: www.craftpip.com
 * Contact: hey@craftpip.com
 *
 * Copyright 2013-2017 jquery-confirm
 * Licensed under MIT (https://github.com/craftpip/jquery-confirm/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') {
    throw new Error('jquery-confirm requires jQuery');
}

var _jconfirm, Jconfirm;
(function ($, window) {
    "use strict";

    $.fn.confirm = function (options, option2) {
        if (typeof options === 'undefined') options = {};
        if (typeof options === 'string') {
            options = {
                content: options,
                title: option2 ? option2 : false
            };
        }
        /*
         *  Alias of $.confirm to emulate native confirm()
         */
        $(this).each(function () {
            var $this = $(this);
            if ($this.attr('jc-attached')) {
                console.warn('jConfirm has already been attached to this element ', $this[0]);
                return;
            }

            $this.on('click', function (e) {
                e.preventDefault();
                var jcOption = $.extend({}, options);
                if ($this.attr('data-title')) jcOption['title'] = $this.attr('data-title');
                if ($this.attr('data-content')) jcOption['content'] = $this.attr('data-content');
                if (typeof jcOption['buttons'] == 'undefined') jcOption['buttons'] = {};

                jcOption['$target'] = $this;
                if ($this.attr('href') && Object.keys(jcOption['buttons']).length == 0) {
                    var buttons = $.extend(true, {}, _jconfirm.pluginDefaults.defaultButtons, (_jconfirm.defaults || {}).defaultButtons || {});
                    var firstBtn = Object.keys(buttons)[0];
                    jcOption['buttons'] = buttons;
                    jcOption.buttons[firstBtn].action = function () {
                        location.href = $this.attr('href');
                    };
                }
                jcOption['closeIcon'] = false;
                var instance = $.confirm(jcOption);
            });

            $this.attr('jc-attached', true);
        });
        return $(this);
    };
    $.confirm = function (options, option2) {
        if (typeof options === 'undefined') options = {};
        if (typeof options === 'string') {
            options = {
                content: options,
                title: option2 ? option2 : false
            };
        }

        var putDefaultButtons = !(options['buttons'] == false);

        if (_typeof(options['buttons']) != 'object') options['buttons'] = {};

        if (Object.keys(options['buttons']).length == 0 && putDefaultButtons) {
            var buttons = $.extend(true, {}, _jconfirm.pluginDefaults.defaultButtons, (_jconfirm.defaults || {}).defaultButtons || {});
            options['buttons'] = buttons;
        }

        /*
         *  Alias of jconfirm
         */
        return _jconfirm(options);
    };
    $.alert = function (options, option2) {
        if (typeof options === 'undefined') options = {};
        if (typeof options === 'string') {
            options = {
                content: options,
                title: option2 ? option2 : false
            };
        }

        var putDefaultButtons = !(options['buttons'] == false);

        if (_typeof(options.buttons) != 'object') options.buttons = {};

        if (Object.keys(options['buttons']).length == 0 && putDefaultButtons) {
            var buttons = $.extend(true, {}, _jconfirm.pluginDefaults.defaultButtons, (_jconfirm.defaults || {}).defaultButtons || {});
            var firstBtn = Object.keys(buttons)[0];
            options['buttons'][firstBtn] = buttons[firstBtn];
        }
        /*
         *  Alias of jconfirm
         */
        return _jconfirm(options);
    };
    $.dialog = function (options, option2) {
        if (typeof options === 'undefined') options = {};
        if (typeof options === 'string') {
            options = {
                content: options,
                title: option2 ? option2 : false,
                closeIcon: function closeIcon() {
                    // Just close the modal
                }
            };
        }

        options['buttons'] = {}; // purge buttons

        if (typeof options['closeIcon'] == 'undefined') {
            // Dialog must have a closeIcon.
            options['closeIcon'] = function () {};
        }
        /*
         *  Alias of jconfirm
         */
        options.confirmKeys = [13];
        return _jconfirm(options);
    };

    _jconfirm = function jconfirm(options) {
        if (typeof options === 'undefined') options = {};
        /*
         * initial function for calling.
         */
        var pluginOptions = $.extend(true, {}, _jconfirm.pluginDefaults);
        if (_jconfirm.defaults) {
            pluginOptions = $.extend(true, pluginOptions, _jconfirm.defaults);
        }

        /*
         * merge options with plugin defaults.
         */
        pluginOptions = $.extend(true, {}, pluginOptions, options);
        var instance = new Jconfirm(pluginOptions);
        _jconfirm.instances.push(instance);
        return instance;
    };
    Jconfirm = function Jconfirm(options) {
        /*
         * constructor function Jconfirm,
         * options = user options.
         */
        $.extend(this, options);
        this._init();
    };
    Jconfirm.prototype = {
        _init: function _init() {
            var that = this;

            if (!_jconfirm.instances.length) _jconfirm.lastFocused = $('body').find(':focus');

            this._id = Math.round(Math.random() * 99999);
            /**
             * contentParsed maintains the contents for $content, before it is put in DOM
             */
            this.contentParsed = $(document.createElement('div'));

            if (!this.lazyOpen) {
                setTimeout(function () {
                    that.open();
                }, 0);
            }
        },
        _buildHTML: function _buildHTML() {
            var that = this;

            // prefix the animation string and store in animationParsed
            this._parseAnimation(this.animation, 'o');
            this._parseAnimation(this.closeAnimation, 'c');
            this._parseBgDismissAnimation(this.backgroundDismissAnimation);
            this._parseColumnClass(this.columnClass);
            this._parseTheme(this.theme);
            this._parseType(this.type);

            /*
             * Append html.
             */
            var template = $(this.template);
            template.find('.jconfirm-box').addClass(this.animationParsed).addClass(this.backgroundDismissAnimationParsed).addClass(this.typeParsed);

            if (this.typeAnimated) template.find('.jconfirm-box').addClass('jconfirm-type-animated');

            if (this.useBootstrap) {
                template.find('.jc-bs3-row').addClass(this.bootstrapClasses.row);
                template.find('.jc-bs3-row').addClass('justify-content-md-center justify-content-sm-center justify-content-xs-center justify-content-lg-center');

                template.find('.jconfirm-box-container').addClass(this.columnClassParsed);

                if (this.containerFluid) template.find('.jc-bs3-container').addClass(this.bootstrapClasses.containerFluid);else template.find('.jc-bs3-container').addClass(this.bootstrapClasses.container);
            } else {
                template.find('.jconfirm-box').css('width', this.boxWidth);
            }

            if (this.titleClass) template.find('.jconfirm-title-c').addClass(this.titleClass);

            template.addClass(this.themeParsed);
            var ariaLabel = 'jconfirm-box' + this._id;
            template.find('.jconfirm-box').attr('aria-labelledby', ariaLabel).attr('tabindex', -1);
            template.find('.jconfirm-content').attr('id', ariaLabel);
            if (this.bgOpacity !== null) template.find('.jconfirm-bg').css('opacity', this.bgOpacity);
            if (this.rtl) template.addClass('jconfirm-rtl');

            this.$el = template.appendTo(this.container);
            this.$jconfirmBoxContainer = this.$el.find('.jconfirm-box-container');
            this.$jconfirmBox = this.$body = this.$el.find('.jconfirm-box');
            this.$jconfirmBg = this.$el.find('.jconfirm-bg');
            this.$title = this.$el.find('.jconfirm-title');
            this.$titleContainer = this.$el.find('.jconfirm-title-c');
            this.$content = this.$el.find('div.jconfirm-content');
            this.$contentPane = this.$el.find('.jconfirm-content-pane');
            this.$icon = this.$el.find('.jconfirm-icon-c');
            this.$closeIcon = this.$el.find('.jconfirm-closeIcon');
            this.$holder = this.$el.find('.jconfirm-holder');
            // this.$content.css(this._getCSS(this.animationSpeed, this.animationBounce));
            this.$btnc = this.$el.find('.jconfirm-buttons');
            this.$scrollPane = this.$el.find('.jconfirm-scrollpane');

            that.setStartingPoint();

            // for loading content via URL
            this._contentReady = $.Deferred();
            this._modalReady = $.Deferred();
            this.$holder.css({
                'padding-top': this.offsetTop,
                'padding-bottom': this.offsetBottom
            });

            this.setTitle();
            this.setIcon();
            this._setButtons();
            this._parseContent();
            this.initDraggable();

            if (this.isAjax) this.showLoading(false);

            $.when(this._contentReady, this._modalReady).then(function () {
                if (that.isAjaxLoading) setTimeout(function () {
                    that.isAjaxLoading = false;
                    that.setContent();
                    that.setTitle();
                    that.setIcon();
                    setTimeout(function () {
                        that.hideLoading(false);
                        that._updateContentMaxHeight();
                    }, 100);
                    if (typeof that.onContentReady === 'function') that.onContentReady();
                }, 50);else {
                    // that.setContent();
                    that._updateContentMaxHeight();
                    that.setTitle();
                    that.setIcon();
                    if (typeof that.onContentReady === 'function') that.onContentReady();
                }

                // start countdown after content has loaded.
                if (that.autoClose) that._startCountDown();
            });

            this._watchContent();

            if (this.animation === 'none') {
                this.animationSpeed = 1;
                this.animationBounce = 1;
            }

            this.$body.css(this._getCSS(this.animationSpeed, this.animationBounce));
            this.$contentPane.css(this._getCSS(this.animationSpeed, 1));
            this.$jconfirmBg.css(this._getCSS(this.animationSpeed, 1));
            this.$jconfirmBoxContainer.css(this._getCSS(this.animationSpeed, 1));
        },
        _typePrefix: 'jconfirm-type-',
        typeParsed: '',
        _parseType: function _parseType(type) {
            this.typeParsed = this._typePrefix + type;
        },
        setType: function setType(type) {
            var oldClass = this.typeParsed;
            this._parseType(type);
            this.$jconfirmBox.removeClass(oldClass).addClass(this.typeParsed);
        },
        themeParsed: '',
        _themePrefix: 'jconfirm-',
        setTheme: function setTheme(theme) {
            var previous = this.theme;
            this.theme = theme || this.theme;
            this._parseTheme(this.theme);
            if (previous) this.$el.removeClass(previous);
            this.$el.addClass(this.themeParsed);
            this.theme = theme;
        },
        _parseTheme: function _parseTheme(theme) {
            var that = this;
            theme = theme.split(',');
            $.each(theme, function (k, a) {
                if (a.indexOf(that._themePrefix) === -1) theme[k] = that._themePrefix + $.trim(a);
            });
            this.themeParsed = theme.join(' ').toLowerCase();
        },
        backgroundDismissAnimationParsed: '',
        _bgDismissPrefix: 'jconfirm-hilight-',
        _parseBgDismissAnimation: function _parseBgDismissAnimation(bgDismissAnimation) {
            var animation = bgDismissAnimation.split(',');
            var that = this;
            $.each(animation, function (k, a) {
                if (a.indexOf(that._bgDismissPrefix) === -1) animation[k] = that._bgDismissPrefix + $.trim(a);
            });
            this.backgroundDismissAnimationParsed = animation.join(' ').toLowerCase();
        },
        animationParsed: '',
        closeAnimationParsed: '',
        _animationPrefix: 'jconfirm-animation-',
        setAnimation: function setAnimation(animation) {
            this.animation = animation || this.animation;
            this._parseAnimation(this.animation, 'o');
        },
        _parseAnimation: function _parseAnimation(animation, which) {
            which = which || 'o'; // parse what animation and store where. open or close?
            var animations = animation.split(',');
            var that = this;
            $.each(animations, function (k, a) {
                if (a.indexOf(that._animationPrefix) === -1) animations[k] = that._animationPrefix + $.trim(a);
            });
            var a_string = animations.join(' ').toLowerCase();
            if (which === 'o') this.animationParsed = a_string;else this.closeAnimationParsed = a_string;

            return a_string;
        },
        setCloseAnimation: function setCloseAnimation(closeAnimation) {
            this.closeAnimation = closeAnimation || this.closeAnimation;
            this._parseAnimation(this.closeAnimation, 'c');
        },
        setAnimationSpeed: function setAnimationSpeed(speed) {
            this.animationSpeed = speed || this.animationSpeed;
            // this.$body.css(this._getCSS(this.animationSpeed, this.animationBounce));
        },
        columnClassParsed: '',
        setColumnClass: function setColumnClass(colClass) {
            if (!this.useBootstrap) {
                console.warn("cannot set columnClass, useBootstrap is set to false");
                return;
            }
            this.columnClass = colClass || this.columnClass;
            this._parseColumnClass(this.columnClass);
            this.$jconfirmBoxContainer.addClass(this.columnClassParsed);
        },
        _updateContentMaxHeight: function _updateContentMaxHeight() {
            var height = $(window).height() - (this.$jconfirmBox.outerHeight() - this.$contentPane.outerHeight()) - (this.offsetTop + this.offsetBottom);
            this.$contentPane.css({
                'max-height': height + 'px'
            });
        },
        setBoxWidth: function setBoxWidth(width) {
            if (this.useBootstrap) {
                console.warn("cannot set boxWidth, useBootstrap is set to true");
                return;
            }
            this.boxWidth = width;
            this.$jconfirmBox.css('width', width);
        },
        _parseColumnClass: function _parseColumnClass(colClass) {
            colClass = colClass.toLowerCase();
            var p;
            switch (colClass) {
                case 'xl':
                case 'xlarge':
                    p = 'col-md-12';
                    break;
                case 'l':
                case 'large':
                    p = 'col-md-8 col-md-offset-2';
                    break;
                case 'm':
                case 'medium':
                    p = 'col-md-6 col-md-offset-3';
                    break;
                case 's':
                case 'small':
                    p = 'col-md-4 col-md-offset-4';
                    break;
                case 'xs':
                case 'xsmall':
                    p = 'col-md-2 col-md-offset-5';
                    break;
                default:
                    p = colClass;
            }
            this.columnClassParsed = p;
        },
        initDraggable: function initDraggable() {
            var that = this;
            var $t = this.$titleContainer;

            this.resetDrag();
            if (this.draggable) {
                $t.on('mousedown', function (e) {
                    $t.addClass('jconfirm-hand');
                    that.mouseX = e.clientX;
                    that.mouseY = e.clientY;
                    that.isDrag = true;
                });
                $(window).on('mousemove.' + this._id, function (e) {
                    if (that.isDrag) {
                        that.movingX = e.clientX - that.mouseX + that.initialX;
                        that.movingY = e.clientY - that.mouseY + that.initialY;
                        that.setDrag();
                    }
                });

                $(window).on('mouseup.' + this._id, function () {
                    $t.removeClass('jconfirm-hand');
                    if (that.isDrag) {
                        that.isDrag = false;
                        that.initialX = that.movingX;
                        that.initialY = that.movingY;
                    }
                });
            }
        },
        resetDrag: function resetDrag() {
            this.isDrag = false;
            this.initialX = 0;
            this.initialY = 0;
            this.movingX = 0;
            this.movingY = 0;
            this.mouseX = 0;
            this.mouseY = 0;
            this.$jconfirmBoxContainer.css('transform', 'translate(' + 0 + 'px, ' + 0 + 'px)');
        },
        setDrag: function setDrag() {
            if (!this.draggable) return;

            this.alignMiddle = false;
            var boxWidth = this.$jconfirmBox.outerWidth();
            var boxHeight = this.$jconfirmBox.outerHeight();
            var windowWidth = $(window).width();
            var windowHeight = $(window).height();
            var that = this;
            var dragUpdate = 1;
            if (that.movingX % dragUpdate === 0 || that.movingY % dragUpdate === 0) {
                if (that.dragWindowBorder) {
                    var leftDistance = windowWidth / 2 - boxWidth / 2;
                    var topDistance = windowHeight / 2 - boxHeight / 2;
                    topDistance -= that.dragWindowGap;
                    leftDistance -= that.dragWindowGap;

                    if (leftDistance + that.movingX < 0) {
                        that.movingX = -leftDistance;
                    } else if (leftDistance - that.movingX < 0) {
                        that.movingX = leftDistance;
                    }

                    if (topDistance + that.movingY < 0) {
                        that.movingY = -topDistance;
                    } else if (topDistance - that.movingY < 0) {
                        that.movingY = topDistance;
                    }
                }

                that.$jconfirmBoxContainer.css('transform', 'translate(' + that.movingX + 'px, ' + that.movingY + 'px)');
            }
        },
        _scrollTop: function _scrollTop() {
            if (typeof pageYOffset !== 'undefined') {
                //most browsers except IE before #9
                return pageYOffset;
            } else {
                var B = document.body; //IE 'quirks'
                var D = document.documentElement; //IE with doctype
                D = D.clientHeight ? D : B;
                return D.scrollTop;
            }
        },
        _watchContent: function _watchContent() {
            var that = this;
            if (this._timer) clearInterval(this._timer);

            var prevContentHeight = 0;
            this._timer = setInterval(function () {
                if (that.smoothContent) {
                    var contentHeight = that.$content.outerHeight() || 0;
                    if (contentHeight !== prevContentHeight) {
                        that.$contentPane.css({
                            'height': contentHeight
                        }).scrollTop(0);
                        prevContentHeight = contentHeight;
                    }
                    var wh = $(window).height();
                    var total = that.offsetTop + that.offsetBottom + that.$jconfirmBox.height() - that.$contentPane.height() + that.$content.height();
                    if (total < wh) {
                        that.$contentPane.addClass('no-scroll');
                    } else {
                        that.$contentPane.removeClass('no-scroll');
                    }
                }
            }, this.watchInterval);
        },
        _overflowClass: 'jconfirm-overflow',
        _hilightAnimating: false,
        highlight: function highlight() {
            this.hiLightModal();
        },
        hiLightModal: function hiLightModal() {
            var that = this;
            if (this._hilightAnimating) return;

            that.$body.addClass('hilight');
            var duration = parseFloat(that.$body.css('animation-duration')) || 2;
            this._hilightAnimating = true;
            setTimeout(function () {
                that._hilightAnimating = false;
                that.$body.removeClass('hilight');
            }, duration * 1000);
        },
        _bindEvents: function _bindEvents() {
            var that = this;
            this.boxClicked = false;

            this.$scrollPane.click(function (e) {
                // Ignore propagated clicks
                if (!that.boxClicked) {
                    // Background clicked
                    /*
                     If backgroundDismiss is a function and its return value is truthy
                     proceed to close the modal.
                     */
                    var buttonName = false;
                    var shouldClose = false;
                    var str;

                    if (typeof that.backgroundDismiss == 'function') str = that.backgroundDismiss();else str = that.backgroundDismiss;

                    if (typeof str == 'string' && typeof that.buttons[str] != 'undefined') {
                        buttonName = str;
                        shouldClose = false;
                    } else if (typeof str == 'undefined' || !!str == true) {
                        shouldClose = true;
                    } else {
                        shouldClose = false;
                    }

                    if (buttonName) {
                        var btnResponse = that.buttons[buttonName].action.apply(that);
                        shouldClose = typeof btnResponse == 'undefined' || !!btnResponse;
                    }

                    if (shouldClose) that.close();else that.hiLightModal();
                }
                that.boxClicked = false;
            });

            this.$jconfirmBox.click(function (e) {
                that.boxClicked = true;
            });

            var isKeyDown = false;
            $(window).on('jcKeyDown.' + that._id, function (e) {
                if (!isKeyDown) {
                    isKeyDown = true;
                }
            });
            $(window).on('keyup.' + that._id, function (e) {
                if (isKeyDown) {
                    that.reactOnKey(e);
                    isKeyDown = false;
                }
            });

            $(window).on('resize.' + this._id, function () {
                that._updateContentMaxHeight();
                setTimeout(function () {
                    that.resetDrag();
                }, 100);
            });
        },
        _cubic_bezier: '0.36, 0.55, 0.19',
        _getCSS: function _getCSS(speed, bounce) {
            return {
                '-webkit-transition-duration': speed / 1000 + 's',
                'transition-duration': speed / 1000 + 's',
                '-webkit-transition-timing-function': 'cubic-bezier(' + this._cubic_bezier + ', ' + bounce + ')',
                'transition-timing-function': 'cubic-bezier(' + this._cubic_bezier + ', ' + bounce + ')'
            };
        },
        _setButtons: function _setButtons() {
            var that = this;
            /*
             * Settings up buttons
             */

            var total_buttons = 0;
            if (_typeof(this.buttons) !== 'object') this.buttons = {};

            $.each(this.buttons, function (key, button) {
                total_buttons += 1;
                if (typeof button === 'function') {
                    that.buttons[key] = button = {
                        action: button
                    };
                }

                that.buttons[key].text = button.text || key;
                that.buttons[key].btnClass = button.btnClass || 'btn-default';
                that.buttons[key].action = button.action || function () {};
                that.buttons[key].keys = button.keys || [];
                that.buttons[key].isHidden = button.isHidden || false;
                that.buttons[key].isDisabled = button.isDisabled || false;

                $.each(that.buttons[key].keys, function (i, a) {
                    that.buttons[key].keys[i] = a.toLowerCase();
                });

                var button_element = $('<button type="button" class="btn"></button>').html(that.buttons[key].text).addClass(that.buttons[key].btnClass).prop('disabled', that.buttons[key].isDisabled).css('display', that.buttons[key].isHidden ? 'none' : '').click(function (e) {
                    e.preventDefault();
                    var res = that.buttons[key].action.apply(that, [that.buttons[key]]);
                    that.onAction.apply(that, [key, that.buttons[key]]);
                    that._stopCountDown();
                    if (typeof res === 'undefined' || res) that.close();
                });

                that.buttons[key].el = button_element;
                that.buttons[key].setText = function (text) {
                    button_element.html(text);
                };
                that.buttons[key].addClass = function (className) {
                    button_element.addClass(className);
                };
                that.buttons[key].removeClass = function (className) {
                    button_element.removeClass(className);
                };
                that.buttons[key].disable = function () {
                    that.buttons[key].isDisabled = true;
                    button_element.prop('disabled', true);
                };
                that.buttons[key].enable = function () {
                    that.buttons[key].isDisabled = false;
                    button_element.prop('disabled', false);
                };
                that.buttons[key].show = function () {
                    that.buttons[key].isHidden = false;
                    button_element.css('display', '');
                };
                that.buttons[key].hide = function () {
                    that.buttons[key].isHidden = true;
                    button_element.css('display', 'none');
                };
                /*
                 Buttons are prefixed with $_ or $$ for quick access
                 */
                that['$_' + key] = that['$$' + key] = button_element;
                that.$btnc.append(button_element);
            });

            if (total_buttons === 0) this.$btnc.hide();
            if (this.closeIcon === null && total_buttons === 0) {
                /*
                 in case when no buttons are present & closeIcon is null, closeIcon is set to true,
                 set closeIcon to true to explicitly tell to hide the close icon
                 */
                this.closeIcon = true;
            }

            if (this.closeIcon) {
                if (this.closeIconClass) {
                    // user requires a custom class.
                    var closeHtml = '<i class="' + this.closeIconClass + '"></i>';
                    this.$closeIcon.html(closeHtml);
                }

                this.$closeIcon.click(function (e) {
                    e.preventDefault();

                    var buttonName = false;
                    var shouldClose = false;
                    var str;

                    if (typeof that.closeIcon == 'function') {
                        str = that.closeIcon();
                    } else {
                        str = that.closeIcon;
                    }

                    if (typeof str == 'string' && typeof that.buttons[str] != 'undefined') {
                        buttonName = str;
                        shouldClose = false;
                    } else if (typeof str == 'undefined' || !!str == true) {
                        shouldClose = true;
                    } else {
                        shouldClose = false;
                    }
                    if (buttonName) {
                        var btnResponse = that.buttons[buttonName].action.apply(that);
                        shouldClose = typeof btnResponse == 'undefined' || !!btnResponse;
                    }
                    if (shouldClose) {
                        that.close();
                    }
                });
                this.$closeIcon.show();
            } else {
                this.$closeIcon.hide();
            }
        },
        setTitle: function setTitle(string, force) {
            force = force || false;

            if (typeof string !== 'undefined') if (typeof string == 'string') this.title = string;else if (typeof string == 'function') {
                if (typeof string.promise == 'function') console.error('Promise was returned from title function, this is not supported.');

                var response = string();
                if (typeof response == 'string') this.title = response;else this.title = false;
            } else this.title = false;

            if (this.isAjaxLoading && !force) return;

            this.$title.html(this.title || '');
            this.updateTitleContainer();
        },
        setIcon: function setIcon(iconClass, force) {
            force = force || false;

            if (typeof iconClass !== 'undefined') if (typeof iconClass == 'string') this.icon = iconClass;else if (typeof iconClass === 'function') {
                var response = iconClass();
                if (typeof response == 'string') this.icon = response;else this.icon = false;
            } else this.icon = false;

            if (this.isAjaxLoading && !force) return;

            this.$icon.html(this.icon ? '<i class="' + this.icon + '"></i>' : '');
            this.updateTitleContainer();
        },
        updateTitleContainer: function updateTitleContainer() {
            if (!this.title && !this.icon) {
                this.$titleContainer.hide();
            } else {
                this.$titleContainer.show();
            }
        },
        setContentPrepend: function setContentPrepend(content, force) {
            if (!content) return;

            this.contentParsed.prepend(content);
        },
        setContentAppend: function setContentAppend(content) {
            if (!content) return;

            this.contentParsed.append(content);
        },
        setContent: function setContent(content, force) {
            force = !!force;
            var that = this;
            if (content) this.contentParsed.html('').append(content);
            if (this.isAjaxLoading && !force) return;

            this.$content.html('');
            this.$content.append(this.contentParsed);
            setTimeout(function () {
                that.$body.find('input[autofocus]:visible:first').focus();
            }, 100);
        },
        loadingSpinner: false,
        showLoading: function showLoading(disableButtons) {
            this.loadingSpinner = true;
            this.$jconfirmBox.addClass('loading');
            if (disableButtons) this.$btnc.find('button').prop('disabled', true);
        },
        hideLoading: function hideLoading(enableButtons) {
            this.loadingSpinner = false;
            this.$jconfirmBox.removeClass('loading');
            if (enableButtons) this.$btnc.find('button').prop('disabled', false);
        },
        ajaxResponse: false,
        contentParsed: '',
        isAjax: false,
        isAjaxLoading: false,
        _parseContent: function _parseContent() {
            var that = this;
            var e = '&nbsp;';

            if (typeof this.content == 'function') {
                var res = this.content.apply(this);
                if (typeof res == 'string') {
                    this.content = res;
                } else if ((typeof res === 'undefined' ? 'undefined' : _typeof(res)) == 'object' && typeof res.always == 'function') {
                    // this is ajax loading via promise
                    this.isAjax = true;
                    this.isAjaxLoading = true;
                    res.always(function (data, status, xhr) {
                        that.ajaxResponse = {
                            data: data,
                            status: status,
                            xhr: xhr
                        };
                        that._contentReady.resolve(data, status, xhr);
                        if (typeof that.contentLoaded == 'function') that.contentLoaded(data, status, xhr);
                    });
                    this.content = e;
                } else {
                    this.content = e;
                }
            }

            if (typeof this.content == 'string' && this.content.substr(0, 4).toLowerCase() === 'url:') {
                this.isAjax = true;
                this.isAjaxLoading = true;
                var u = this.content.substring(4, this.content.length);
                $.get(u).done(function (html) {
                    that.contentParsed.html(html);
                }).always(function (data, status, xhr) {
                    that.ajaxResponse = {
                        data: data,
                        status: status,
                        xhr: xhr
                    };
                    that._contentReady.resolve(data, status, xhr);
                    if (typeof that.contentLoaded == 'function') that.contentLoaded(data, status, xhr);
                });
            }

            if (!this.content) this.content = e;

            if (!this.isAjax) {
                this.contentParsed.html(this.content);
                this.setContent();
                that._contentReady.resolve();
            }
        },
        _stopCountDown: function _stopCountDown() {
            clearInterval(this.autoCloseInterval);
            if (this.$cd) this.$cd.remove();
        },
        _startCountDown: function _startCountDown() {
            var that = this;
            var opt = this.autoClose.split('|');
            if (opt.length !== 2) {
                console.error('Invalid option for autoClose. example \'close|10000\'');
                return false;
            }

            var button_key = opt[0];
            var time = parseInt(opt[1]);
            if (typeof this.buttons[button_key] === 'undefined') {
                console.error('Invalid button key \'' + button_key + '\' for autoClose');
                return false;
            }

            var seconds = Math.ceil(time / 1000);
            this.$cd = $('<span class="countdown"> (' + seconds + ')</span>').appendTo(this['$_' + button_key]);

            this.autoCloseInterval = setInterval(function () {
                that.$cd.html(' (' + (seconds -= 1) + ') ');
                if (seconds <= 0) {
                    that['$$' + button_key].trigger('click');
                    that._stopCountDown();
                }
            }, 1000);
        },
        _getKey: function _getKey(key) {
            // very necessary keys.
            switch (key) {
                case 192:
                    return 'tilde';
                case 13:
                    return 'enter';
                case 16:
                    return 'shift';
                case 9:
                    return 'tab';
                case 20:
                    return 'capslock';
                case 17:
                    return 'ctrl';
                case 91:
                    return 'win';
                case 18:
                    return 'alt';
                case 27:
                    return 'esc';
                case 32:
                    return 'space';
            }

            // only trust alphabets with this.
            var initial = String.fromCharCode(key);
            if (/^[A-z0-9]+$/.test(initial)) return initial.toLowerCase();else return false;
        },
        reactOnKey: function reactOnKey(e) {
            var that = this;

            /*
             Prevent keyup event if the dialog is not last!
             */
            var a = $('.jconfirm');
            if (a.eq(a.length - 1)[0] !== this.$el[0]) return false;

            var key = e.which;
            /*
             Do not react if Enter or Space is pressed on input elements
             */
            if (this.$content.find(':input').is(':focus') && /13|32/.test(key)) return false;

            var keyChar = this._getKey(key);

            // If esc is pressed
            if (keyChar === 'esc' && this.escapeKey) {
                if (this.escapeKey === true) {
                    this.$scrollPane.trigger('click');
                } else if (typeof this.escapeKey === 'string' || typeof this.escapeKey === 'function') {
                    var buttonKey;
                    if (typeof this.escapeKey === 'function') {
                        buttonKey = this.escapeKey();
                    } else {
                        buttonKey = this.escapeKey;
                    }

                    if (buttonKey) if (typeof this.buttons[buttonKey] === 'undefined') {
                        console.warn('Invalid escapeKey, no buttons found with key ' + buttonKey);
                    } else {
                        this['$_' + buttonKey].trigger('click');
                    }
                }
            }

            // check if any button is listening to this key.
            $.each(this.buttons, function (key, button) {
                if (button.keys.indexOf(keyChar) != -1) {
                    that['$_' + key].trigger('click');
                }
            });
        },
        setDialogCenter: function setDialogCenter() {
            console.info('setDialogCenter is deprecated, dialogs are centered with CSS3 tables');
        },
        _unwatchContent: function _unwatchContent() {
            clearInterval(this._timer);
        },
        close: function close(onClosePayload) {
            var that = this;

            if (typeof this.onClose === 'function') this.onClose(onClosePayload);

            this._unwatchContent();

            /*
             unbind the window resize & keyup event.
             */
            $(window).unbind('resize.' + this._id);
            $(window).unbind('keyup.' + this._id);
            $(window).unbind('jcKeyDown.' + this._id);

            if (this.draggable) {
                $(window).unbind('mousemove.' + this._id);
                $(window).unbind('mouseup.' + this._id);
                this.$titleContainer.unbind('mousedown');
            }

            that.$el.removeClass(that.loadedClass);
            $('body').removeClass('jconfirm-no-scroll-' + that._id);
            that.$jconfirmBoxContainer.removeClass('jconfirm-no-transition');

            setTimeout(function () {
                that.$body.addClass(that.closeAnimationParsed);
                that.$jconfirmBg.addClass('jconfirm-bg-h');
                var closeTimer = that.closeAnimation === 'none' ? 1 : that.animationSpeed;

                setTimeout(function () {
                    that.$el.remove();

                    var l = _jconfirm.instances;
                    var i = _jconfirm.instances.length - 1;
                    for (i; i >= 0; i--) {
                        if (_jconfirm.instances[i]._id === that._id) {
                            _jconfirm.instances.splice(i, 1);
                        }
                    }

                    // Focusing a element, scrolls automatically to that element.
                    // no instances should be open, lastFocused should be true, the lastFocused element must exists in DOM
                    if (!_jconfirm.instances.length) {
                        if (that.scrollToPreviousElement && _jconfirm.lastFocused && _jconfirm.lastFocused.length && $.contains(document, _jconfirm.lastFocused[0])) {
                            var $lf = _jconfirm.lastFocused;
                            if (that.scrollToPreviousElementAnimate) {
                                var st = $(window).scrollTop();
                                var ot = _jconfirm.lastFocused.offset().top;
                                var wh = $(window).height();
                                if (!(ot > st && ot < st + wh)) {
                                    var scrollTo = ot - Math.round(wh / 3);
                                    $('html, body').animate({
                                        scrollTop: scrollTo
                                    }, that.animationSpeed, 'swing', function () {
                                        // gracefully scroll and then focus.
                                        $lf.focus();
                                    });
                                } else {
                                    // the element to be focused is already in view.
                                    $lf.focus();
                                }
                            } else {
                                $lf.focus();
                            }
                            _jconfirm.lastFocused = false;
                        }
                    }

                    if (typeof that.onDestroy === 'function') that.onDestroy();
                }, closeTimer * 0.40);
            }, 50);

            return true;
        },
        open: function open() {
            if (this.isOpen()) return false;

            // var that = this;
            this._buildHTML();
            this._bindEvents();
            this._open();

            return true;
        },
        setStartingPoint: function setStartingPoint() {
            var el = false;

            if (this.animateFromElement !== true && this.animateFromElement) {
                el = this.animateFromElement;
                _jconfirm.lastClicked = false;
            } else if (_jconfirm.lastClicked && this.animateFromElement === true) {
                el = _jconfirm.lastClicked;
                _jconfirm.lastClicked = false;
            } else {
                return false;
            }

            if (!el) return false;

            var offset = el.offset();

            var iTop = el.outerHeight() / 2;
            var iLeft = el.outerWidth() / 2;

            // placing position of jconfirm modal in center of clicked element
            iTop -= this.$jconfirmBox.outerHeight() / 2;
            iLeft -= this.$jconfirmBox.outerWidth() / 2;

            // absolute position on screen
            var sourceTop = offset.top + iTop;
            sourceTop = sourceTop - this._scrollTop();
            var sourceLeft = offset.left + iLeft;

            // window halved
            var wh = $(window).height() / 2;
            var ww = $(window).width() / 2;

            var targetH = wh - this.$jconfirmBox.outerHeight() / 2;
            var targetW = ww - this.$jconfirmBox.outerWidth() / 2;

            sourceTop -= targetH;
            sourceLeft -= targetW;

            // Check if the element is inside the viewable window.
            if (Math.abs(sourceTop) > wh || Math.abs(sourceLeft) > ww) return false;

            this.$jconfirmBoxContainer.css('transform', 'translate(' + sourceLeft + 'px, ' + sourceTop + 'px)');
        },
        _open: function _open() {
            var that = this;
            if (typeof that.onOpenBefore === 'function') that.onOpenBefore();

            this.$body.removeClass(this.animationParsed);
            this.$jconfirmBg.removeClass('jconfirm-bg-h');
            this.$body.focus();

            that.$jconfirmBoxContainer.css('transform', 'translate(' + 0 + 'px, ' + 0 + 'px)');

            setTimeout(function () {
                that.$body.css(that._getCSS(that.animationSpeed, 1));
                that.$body.css({
                    'transition-property': that.$body.css('transition-property') + ', margin'
                });
                that.$jconfirmBoxContainer.addClass('jconfirm-no-transition');
                that._modalReady.resolve();
                if (typeof that.onOpen === 'function') that.onOpen();

                that.$el.addClass(that.loadedClass);
            }, this.animationSpeed);
        },
        loadedClass: 'jconfirm-open',
        isClosed: function isClosed() {
            return !this.$el || this.$el.css('display') === '';
        },
        isOpen: function isOpen() {
            return !this.isClosed();
        },
        toggle: function toggle() {
            if (!this.isOpen()) this.open();else this.close();
        }
    };

    _jconfirm.instances = [];
    _jconfirm.lastFocused = false;
    _jconfirm.pluginDefaults = {
        template: '' + '<div class="jconfirm">' + '<div class="jconfirm-bg jconfirm-bg-h"></div>' + '<div class="jconfirm-scrollpane">' + '<div class="jconfirm-row">' + '<div class="jconfirm-cell">' + '<div class="jconfirm-holder">' + '<div class="jc-bs3-container">' + '<div class="jc-bs3-row">' + '<div class="jconfirm-box-container jconfirm-animated">' + '<div class="jconfirm-box" role="dialog" aria-labelledby="labelled" tabindex="-1">' + '<div class="jconfirm-closeIcon">&times;</div>' + '<div class="jconfirm-title-c">' + '<span class="jconfirm-icon-c"></span>' + '<span class="jconfirm-title"></span>' + '</div>' + '<div class="jconfirm-content-pane">' + '<div class="jconfirm-content"></div>' + '</div>' + '<div class="jconfirm-buttons">' + '</div>' + '<div class="jconfirm-clear">' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div></div>',
        title: 'Hello',
        titleClass: '',
        type: 'default',
        typeAnimated: true,
        draggable: true,
        dragWindowGap: 15,
        dragWindowBorder: true,
        animateFromElement: true,
        /**
         * @deprecated
         */
        alignMiddle: true,
        smoothContent: true,
        content: 'Are you sure to continue?',
        buttons: {},
        defaultButtons: {
            ok: {
                action: function action() {}
            },
            close: {
                action: function action() {}
            }
        },
        contentLoaded: function contentLoaded() {},
        icon: '',
        lazyOpen: false,
        bgOpacity: null,
        theme: 'light',
        animation: 'scale',
        closeAnimation: 'scale',
        animationSpeed: 400,
        animationBounce: 1,
        escapeKey: true,
        rtl: false,
        container: 'body',
        containerFluid: false,
        backgroundDismiss: false,
        backgroundDismissAnimation: 'shake',
        autoClose: false,
        closeIcon: null,
        closeIconClass: false,
        watchInterval: 100,
        columnClass: 'col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1',
        boxWidth: '50%',
        scrollToPreviousElement: true,
        scrollToPreviousElementAnimate: true,
        useBootstrap: true,
        offsetTop: 40,
        offsetBottom: 40,
        bootstrapClasses: {
            container: 'container',
            containerFluid: 'container-fluid',
            row: 'row'
        },
        onContentReady: function onContentReady() {},
        onOpenBefore: function onOpenBefore() {},
        onOpen: function onOpen() {},
        onClose: function onClose() {},
        onDestroy: function onDestroy() {},
        onAction: function onAction() {}
    };

    /**
     * This refers to the issue #241 and #246
     *
     * Problem:
     * Button A is clicked (keydown) using the Keyboard ENTER key
     * A opens the jconfirm modal B,
     * B has registered ENTER key for one of its button C
     * A is released (keyup), B gets the keyup event and triggers C.
     *
     * Solution:
     * Register a global keydown event, that tells jconfirm if the keydown originated inside jconfirm
     */
    var keyDown = false;
    $(window).on('keydown', function (e) {
        if (!keyDown) {
            var $target = $(e.target);
            var pass = false;
            if ($target.closest('.jconfirm-box').length) pass = true;
            if (pass) $(window).trigger('jcKeyDown');

            keyDown = true;
        }
    });
    $(window).on('keyup', function () {
        keyDown = false;
    });
    _jconfirm.lastClicked = false;
    $(document).on('mousedown', 'button, a', function () {
        _jconfirm.lastClicked = $(this);
    });
})(jQuery, window);

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};/**
 * jsBezier
 *
 * Copyright (c) 2010 - 2017 jsPlumb (hello@jsplumbtoolkit.com)
 *
 * licensed under the MIT license.
 *
 * a set of Bezier curve functions that deal with Beziers, used by jsPlumb, and perhaps useful for other people.  These functions work with Bezier
 * curves of arbitrary degree.
 *
 * - functions are all in the 'jsBezier' namespace.
 *
 * - all input points should be in the format {x:.., y:..}. all output points are in this format too.
 *
 * - all input curves should be in the format [ {x:.., y:..}, {x:.., y:..}, {x:.., y:..}, {x:.., y:..} ]
 *
 * - 'location' as used as an input here refers to a decimal in the range 0-1 inclusive, which indicates a point some proportion along the length
 * of the curve.  location as output has the same format and meaning.
 *
 *
 * Function List:
 * --------------
 *
 * distanceFromCurve(point, curve)
 *
 * 	Calculates the distance that the given point lies from the given Bezier.  Note that it is computed relative to the center of the Bezier,
 * so if you have stroked the curve with a wide pen you may wish to take that into account!  The distance returned is relative to the values
 * of the curve and the point - it will most likely be pixels.
 *
 * gradientAtPoint(curve, location)
 *
 * 	Calculates the gradient to the curve at the given location, as a decimal between 0 and 1 inclusive.
 *
 * gradientAtPointAlongCurveFrom (curve, location)
 *
 *	Calculates the gradient at the point on the given curve that is 'distance' units from location.
 *
 * nearestPointOnCurve(point, curve)
 *
 *	Calculates the nearest point to the given point on the given curve.  The return value of this is a JS object literal, containing both the
 *point's coordinates and also the 'location' of the point (see above), for example:  { point:{x:551,y:150}, location:0.263365 }.
 *
 * pointOnCurve(curve, location)
 *
 * 	Calculates the coordinates of the point on the given Bezier curve at the given location.
 *
 * pointAlongCurveFrom(curve, location, distance)
 *
 * 	Calculates the coordinates of the point on the given curve that is 'distance' units from location.  'distance' should be in the same coordinate
 * space as that used to construct the Bezier curve.  For an HTML Canvas usage, for example, distance would be a measure of pixels.
 *
 * locationAlongCurveFrom(curve, location, distance)
 *
 * 	Calculates the location on the given curve that is 'distance' units from location.  'distance' should be in the same coordinate
 * space as that used to construct the Bezier curve.  For an HTML Canvas usage, for example, distance would be a measure of pixels.
 *
 * perpendicularToCurveAt(curve, location, length, distance)
 *
 * 	Calculates the perpendicular to the given curve at the given location.  length is the length of the line you wish for (it will be centered
 * on the point at 'location'). distance is optional, and allows you to specify a point along the path from the given location as the center of
 * the perpendicular returned.  The return value of this is an array of two points: [ {x:...,y:...}, {x:...,y:...} ].
 *
 *
 */(function(){var root=this;if(typeof Math.sgn=="undefined"){Math.sgn=function(x){return x==0?0:x>0?1:-1;};}var Vectors={subtract:function subtract(v1,v2){return{x:v1.x-v2.x,y:v1.y-v2.y};},dotProduct:function dotProduct(v1,v2){return v1.x*v2.x+v1.y*v2.y;},square:function square(v){return Math.sqrt(v.x*v.x+v.y*v.y);},scale:function scale(v,s){return{x:v.x*s,y:v.y*s};}},maxRecursion=64,flatnessTolerance=Math.pow(2.0,-maxRecursion-1);/**
     * Calculates the distance that the point lies from the curve.
     *
     * @param point a point in the form {x:567, y:3342}
     * @param curve a Bezier curve in the form [{x:..., y:...}, {x:..., y:...}, {x:..., y:...}, {x:..., y:...}].  note that this is currently
     * hardcoded to assume cubiz beziers, but would be better off supporting any degree.
     * @return a JS object literal containing location and distance, for example: {location:0.35, distance:10}.  Location is analogous to the location
     * argument you pass to the pointOnPath function: it is a ratio of distance travelled along the curve.  Distance is the distance in pixels from
     * the point to the curve.
     */var _distanceFromCurve=function _distanceFromCurve(point,curve){var candidates=[],w=_convertToBezier(point,curve),degree=curve.length-1,higherDegree=2*degree-1,numSolutions=_findRoots(w,higherDegree,candidates,0),v=Vectors.subtract(point,curve[0]),dist=Vectors.square(v),t=0.0;for(var i=0;i<numSolutions;i++){v=Vectors.subtract(point,_bezier(curve,degree,candidates[i],null,null));var newDist=Vectors.square(v);if(newDist<dist){dist=newDist;t=candidates[i];}}v=Vectors.subtract(point,curve[degree]);newDist=Vectors.square(v);if(newDist<dist){dist=newDist;t=1.0;}return{location:t,distance:dist};};/**
     * finds the nearest point on the curve to the given point.
     */var _nearestPointOnCurve=function _nearestPointOnCurve(point,curve){var td=_distanceFromCurve(point,curve);return{point:_bezier(curve,curve.length-1,td.location,null,null),location:td.location};};var _convertToBezier=function _convertToBezier(point,curve){var degree=curve.length-1,higherDegree=2*degree-1,c=[],d=[],cdTable=[],w=[],z=[[1.0,0.6,0.3,0.1],[0.4,0.6,0.6,0.4],[0.1,0.3,0.6,1.0]];for(var i=0;i<=degree;i++){c[i]=Vectors.subtract(curve[i],point);}for(var i=0;i<=degree-1;i++){d[i]=Vectors.subtract(curve[i+1],curve[i]);d[i]=Vectors.scale(d[i],3.0);}for(var row=0;row<=degree-1;row++){for(var column=0;column<=degree;column++){if(!cdTable[row])cdTable[row]=[];cdTable[row][column]=Vectors.dotProduct(d[row],c[column]);}}for(i=0;i<=higherDegree;i++){if(!w[i])w[i]=[];w[i].y=0.0;w[i].x=parseFloat(i)/higherDegree;}var n=degree,m=degree-1;for(var k=0;k<=n+m;k++){var lb=Math.max(0,k-m),ub=Math.min(k,n);for(i=lb;i<=ub;i++){j=k-i;w[i+j].y+=cdTable[j][i]*z[j][i];}}return w;};/**
     * counts how many roots there are.
     */var _findRoots=function _findRoots(w,degree,t,depth){var left=[],right=[],left_count,right_count,left_t=[],right_t=[];switch(_getCrossingCount(w,degree)){case 0:{return 0;}case 1:{if(depth>=maxRecursion){t[0]=(w[0].x+w[degree].x)/2.0;return 1;}if(_isFlatEnough(w,degree)){t[0]=_computeXIntercept(w,degree);return 1;}break;}}_bezier(w,degree,0.5,left,right);left_count=_findRoots(left,degree,left_t,depth+1);right_count=_findRoots(right,degree,right_t,depth+1);for(var i=0;i<left_count;i++){t[i]=left_t[i];}for(var i=0;i<right_count;i++){t[i+left_count]=right_t[i];}return left_count+right_count;};var _getCrossingCount=function _getCrossingCount(curve,degree){var n_crossings=0,sign,old_sign;sign=old_sign=Math.sgn(curve[0].y);for(var i=1;i<=degree;i++){sign=Math.sgn(curve[i].y);if(sign!=old_sign)n_crossings++;old_sign=sign;}return n_crossings;};var _isFlatEnough=function _isFlatEnough(curve,degree){var error,intercept_1,intercept_2,left_intercept,right_intercept,a,b,c,det,dInv,a1,b1,c1,a2,b2,c2;a=curve[0].y-curve[degree].y;b=curve[degree].x-curve[0].x;c=curve[0].x*curve[degree].y-curve[degree].x*curve[0].y;var max_distance_above=max_distance_below=0.0;for(var i=1;i<degree;i++){var value=a*curve[i].x+b*curve[i].y+c;if(value>max_distance_above)max_distance_above=value;else if(value<max_distance_below)max_distance_below=value;}a1=0.0;b1=1.0;c1=0.0;a2=a;b2=b;c2=c-max_distance_above;det=a1*b2-a2*b1;dInv=1.0/det;intercept_1=(b1*c2-b2*c1)*dInv;a2=a;b2=b;c2=c-max_distance_below;det=a1*b2-a2*b1;dInv=1.0/det;intercept_2=(b1*c2-b2*c1)*dInv;left_intercept=Math.min(intercept_1,intercept_2);right_intercept=Math.max(intercept_1,intercept_2);error=right_intercept-left_intercept;return error<flatnessTolerance?1:0;};var _computeXIntercept=function _computeXIntercept(curve,degree){var XLK=1.0,YLK=0.0,XNM=curve[degree].x-curve[0].x,YNM=curve[degree].y-curve[0].y,XMK=curve[0].x-0.0,YMK=curve[0].y-0.0,det=XNM*YLK-YNM*XLK,detInv=1.0/det,S=(XNM*YMK-YNM*XMK)*detInv;return 0.0+XLK*S;};var _bezier=function _bezier(curve,degree,t,left,right){var temp=[[]];for(var j=0;j<=degree;j++){temp[0][j]=curve[j];}for(var i=1;i<=degree;i++){for(var j=0;j<=degree-i;j++){if(!temp[i])temp[i]=[];if(!temp[i][j])temp[i][j]={};temp[i][j].x=(1.0-t)*temp[i-1][j].x+t*temp[i-1][j+1].x;temp[i][j].y=(1.0-t)*temp[i-1][j].y+t*temp[i-1][j+1].y;}}if(left!=null)for(j=0;j<=degree;j++){left[j]=temp[j][0];}if(right!=null)for(j=0;j<=degree;j++){right[j]=temp[degree-j][j];}return temp[degree][0];};var _curveFunctionCache={};var _getCurveFunctions=function _getCurveFunctions(order){var fns=_curveFunctionCache[order];if(!fns){fns=[];var f_term=function f_term(){return function(t){return Math.pow(t,order);};},l_term=function l_term(){return function(t){return Math.pow(1-t,order);};},c_term=function c_term(c){return function(t){return c;};},t_term=function t_term(){return function(t){return t;};},one_minus_t_term=function one_minus_t_term(){return function(t){return 1-t;};},_termFunc=function _termFunc(terms){return function(t){var p=1;for(var i=0;i<terms.length;i++){p=p*terms[i](t);}return p;};};fns.push(new f_term());// first is t to the power of the curve order
for(var i=1;i<order;i++){var terms=[new c_term(order)];for(var j=0;j<order-i;j++){terms.push(new t_term());}for(var j=0;j<i;j++){terms.push(new one_minus_t_term());}fns.push(new _termFunc(terms));}fns.push(new l_term());// last is (1-t) to the power of the curve order
_curveFunctionCache[order]=fns;}return fns;};/**
     * calculates a point on the curve, for a Bezier of arbitrary order.
     * @param curve an array of control points, eg [{x:10,y:20}, {x:50,y:50}, {x:100,y:100}, {x:120,y:100}].  For a cubic bezier this should have four points.
     * @param location a decimal indicating the distance along the curve the point should be located at.  this is the distance along the curve as it travels, taking the way it bends into account.  should be a number from 0 to 1, inclusive.
     */var _pointOnPath=function _pointOnPath(curve,location){var cc=_getCurveFunctions(curve.length-1),_x=0,_y=0;for(var i=0;i<curve.length;i++){_x=_x+curve[i].x*cc[i](location);_y=_y+curve[i].y*cc[i](location);}return{x:_x,y:_y};};var _dist=function _dist(p1,p2){return Math.sqrt(Math.pow(p1.x-p2.x,2)+Math.pow(p1.y-p2.y,2));};var _isPoint=function _isPoint(curve){return curve[0].x==curve[1].x&&curve[0].y==curve[1].y;};/**
     * finds the point that is 'distance' along the path from 'location'.  this method returns both the x,y location of the point and also
     * its 'location' (proportion of travel along the path); the method below - _pointAlongPathFrom - calls this method and just returns the
     * point.
     */var _pointAlongPath=function _pointAlongPath(curve,location,distance){if(_isPoint(curve)){return{point:curve[0],location:location};}var prev=_pointOnPath(curve,location),tally=0,curLoc=location,direction=distance>0?1:-1,cur=null;while(tally<Math.abs(distance)){curLoc+=0.005*direction;cur=_pointOnPath(curve,curLoc);tally+=_dist(cur,prev);prev=cur;}return{point:cur,location:curLoc};};var _length=function _length(curve){if(_isPoint(curve))return 0;var prev=_pointOnPath(curve,0),tally=0,curLoc=0,direction=1,cur=null;while(curLoc<1){curLoc+=0.005*direction;cur=_pointOnPath(curve,curLoc);tally+=_dist(cur,prev);prev=cur;}return tally;};/**
     * finds the point that is 'distance' along the path from 'location'.
     */var _pointAlongPathFrom=function _pointAlongPathFrom(curve,location,distance){return _pointAlongPath(curve,location,distance).point;};/**
     * finds the location that is 'distance' along the path from 'location'.
     */var _locationAlongPathFrom=function _locationAlongPathFrom(curve,location,distance){return _pointAlongPath(curve,location,distance).location;};/**
     * returns the gradient of the curve at the given location, which is a decimal between 0 and 1 inclusive.
     *
     * thanks // http://bimixual.org/AnimationLibrary/beziertangents.html
     */var _gradientAtPoint=function _gradientAtPoint(curve,location){var p1=_pointOnPath(curve,location),p2=_pointOnPath(curve.slice(0,curve.length-1),location),dy=p2.y-p1.y,dx=p2.x-p1.x;return dy==0?Infinity:Math.atan(dy/dx);};/**
     returns the gradient of the curve at the point which is 'distance' from the given location.
     if this point is greater than location 1, the gradient at location 1 is returned.
     if this point is less than location 0, the gradient at location 0 is returned.
     */var _gradientAtPointAlongPathFrom=function _gradientAtPointAlongPathFrom(curve,location,distance){var p=_pointAlongPath(curve,location,distance);if(p.location>1)p.location=1;if(p.location<0)p.location=0;return _gradientAtPoint(curve,p.location);};/**
     * calculates a line that is 'length' pixels long, perpendicular to, and centered on, the path at 'distance' pixels from the given location.
     * if distance is not supplied, the perpendicular for the given location is computed (ie. we set distance to zero).
     */var _perpendicularToPathAt=function _perpendicularToPathAt(curve,location,length,distance){distance=distance==null?0:distance;var p=_pointAlongPath(curve,location,distance),m=_gradientAtPoint(curve,p.location),_theta2=Math.atan(-1/m),y=length/2*Math.sin(_theta2),x=length/2*Math.cos(_theta2);return[{x:p.point.x+x,y:p.point.y+y},{x:p.point.x-x,y:p.point.y-y}];};var jsBezier=this.jsBezier={distanceFromCurve:_distanceFromCurve,gradientAtPoint:_gradientAtPoint,gradientAtPointAlongCurveFrom:_gradientAtPointAlongPathFrom,nearestPointOnCurve:_nearestPointOnCurve,pointOnCurve:_pointOnPath,pointAlongCurveFrom:_pointAlongPathFrom,perpendicularToCurveAt:_perpendicularToPathAt,locationAlongCurveFrom:_locationAlongPathFrom,getLength:_length,version:"0.9.0"};if(true){exports.jsBezier=jsBezier;}}).call(typeof window!=='undefined'?window:this);/**
 * Biltong v0.4.0
 *
 * Various geometry functions written as part of jsPlumb and perhaps useful for others.
 *
 * Copyright (c) 2017 jsPlumb
 * https://jsplumbtoolkit.com
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */;(function(){"use strict";var root=this;var Biltong=root.Biltong={version:"0.4.0"};if(true){exports.Biltong=Biltong;}var _isa=function _isa(a){return Object.prototype.toString.call(a)==="[object Array]";},_pointHelper=function _pointHelper(p1,p2,fn){p1=_isa(p1)?p1:[p1.x,p1.y];p2=_isa(p2)?p2:[p2.x,p2.y];return fn(p1,p2);},/**
         * @name Biltong.gradient
         * @function
         * @desc Calculates the gradient of a line between the two points.
         * @param {Point} p1 First point, either as a 2 entry array or object with `left` and `top` properties.
         * @param {Point} p2 Second point, either as a 2 entry array or object with `left` and `top` properties.
         * @return {Float} The gradient of a line between the two points.
         */_gradient=Biltong.gradient=function(p1,p2){return _pointHelper(p1,p2,function(_p1,_p2){if(_p2[0]==_p1[0])return _p2[1]>_p1[1]?Infinity:-Infinity;else if(_p2[1]==_p1[1])return _p2[0]>_p1[0]?0:-0;else return(_p2[1]-_p1[1])/(_p2[0]-_p1[0]);});},/**
         * @name Biltong.normal
         * @function
         * @desc Calculates the gradient of a normal to a line between the two points.
         * @param {Point} p1 First point, either as a 2 entry array or object with `left` and `top` properties.
         * @param {Point} p2 Second point, either as a 2 entry array or object with `left` and `top` properties.
         * @return {Float} The gradient of a normal to a line between the two points.
         */_normal=Biltong.normal=function(p1,p2){return-1/_gradient(p1,p2);},/**
         * @name Biltong.lineLength
         * @function
         * @desc Calculates the length of a line between the two points.
         * @param {Point} p1 First point, either as a 2 entry array or object with `left` and `top` properties.
         * @param {Point} p2 Second point, either as a 2 entry array or object with `left` and `top` properties.
         * @return {Float} The length of a line between the two points.
         */_lineLength=Biltong.lineLength=function(p1,p2){return _pointHelper(p1,p2,function(_p1,_p2){return Math.sqrt(Math.pow(_p2[1]-_p1[1],2)+Math.pow(_p2[0]-_p1[0],2));});},/**
         * @name Biltong.quadrant
         * @function
         * @desc Calculates the quadrant in which the angle between the two points lies.
         * @param {Point} p1 First point, either as a 2 entry array or object with `left` and `top` properties.
         * @param {Point} p2 Second point, either as a 2 entry array or object with `left` and `top` properties.
         * @return {Integer} The quadrant - 1 for upper right, 2 for lower right, 3 for lower left, 4 for upper left.
         */_quadrant=Biltong.quadrant=function(p1,p2){return _pointHelper(p1,p2,function(_p1,_p2){if(_p2[0]>_p1[0]){return _p2[1]>_p1[1]?2:1;}else if(_p2[0]==_p1[0]){return _p2[1]>_p1[1]?2:1;}else{return _p2[1]>_p1[1]?3:4;}});},/**
         * @name Biltong.theta
         * @function
         * @desc Calculates the angle between the two points.
         * @param {Point} p1 First point, either as a 2 entry array or object with `left` and `top` properties.
         * @param {Point} p2 Second point, either as a 2 entry array or object with `left` and `top` properties.
         * @return {Float} The angle between the two points.
         */_theta=Biltong.theta=function(p1,p2){return _pointHelper(p1,p2,function(_p1,_p2){var m=_gradient(_p1,_p2),t=Math.atan(m),s=_quadrant(_p1,_p2);if(s==4||s==3)t+=Math.PI;if(t<0)t+=2*Math.PI;return t;});},/**
         * @name Biltong.intersects
         * @function
         * @desc Calculates whether or not the two rectangles intersect.
         * @param {Rectangle} r1 First rectangle, as a js object in the form `{x:.., y:.., w:.., h:..}`
         * @param {Rectangle} r2 Second rectangle, as a js object in the form `{x:.., y:.., w:.., h:..}`
         * @return {Boolean} True if the rectangles intersect, false otherwise.
         */_intersects=Biltong.intersects=function(r1,r2){var x1=r1.x,x2=r1.x+r1.w,y1=r1.y,y2=r1.y+r1.h,a1=r2.x,a2=r2.x+r2.w,b1=r2.y,b2=r2.y+r2.h;return x1<=a1&&a1<=x2&&y1<=b1&&b1<=y2||x1<=a2&&a2<=x2&&y1<=b1&&b1<=y2||x1<=a1&&a1<=x2&&y1<=b2&&b2<=y2||x1<=a2&&a1<=x2&&y1<=b2&&b2<=y2||a1<=x1&&x1<=a2&&b1<=y1&&y1<=b2||a1<=x2&&x2<=a2&&b1<=y1&&y1<=b2||a1<=x1&&x1<=a2&&b1<=y2&&y2<=b2||a1<=x2&&x1<=a2&&b1<=y2&&y2<=b2;},/**
         * @name Biltong.encloses
         * @function
         * @desc Calculates whether or not r2 is completely enclosed by r1.
         * @param {Rectangle} r1 First rectangle, as a js object in the form `{x:.., y:.., w:.., h:..}`
         * @param {Rectangle} r2 Second rectangle, as a js object in the form `{x:.., y:.., w:.., h:..}`
         * @param {Boolean} [allowSharedEdges=false] If true, the concept of enclosure allows for one or more edges to be shared by the two rectangles.
         * @return {Boolean} True if r1 encloses r2, false otherwise.
         */_encloses=Biltong.encloses=function(r1,r2,allowSharedEdges){var x1=r1.x,x2=r1.x+r1.w,y1=r1.y,y2=r1.y+r1.h,a1=r2.x,a2=r2.x+r2.w,b1=r2.y,b2=r2.y+r2.h,c=function c(v1,v2,v3,v4){return allowSharedEdges?v1<=v2&&v3>=v4:v1<v2&&v3>v4;};return c(x1,a1,x2,a2)&&c(y1,b1,y2,b2);},_segmentMultipliers=[null,[1,-1],[1,1],[-1,1],[-1,-1]],_inverseSegmentMultipliers=[null,[-1,-1],[-1,1],[1,1],[1,-1]],/**
         * @name Biltong.pointOnLine
         * @function
         * @desc Calculates a point on the line from `fromPoint` to `toPoint` that is `distance` units along the length of the line.
         * @param {Point} p1 First point, either as a 2 entry array or object with `left` and `top` properties.
         * @param {Point} p2 Second point, either as a 2 entry array or object with `left` and `top` properties.
         * @return {Point} Point on the line, in the form `{ x:..., y:... }`.
         */_pointOnLine=Biltong.pointOnLine=function(fromPoint,toPoint,distance){var m=_gradient(fromPoint,toPoint),s=_quadrant(fromPoint,toPoint),segmentMultiplier=distance>0?_segmentMultipliers[s]:_inverseSegmentMultipliers[s],theta=Math.atan(m),y=Math.abs(distance*Math.sin(theta))*segmentMultiplier[1],x=Math.abs(distance*Math.cos(theta))*segmentMultiplier[0];return{x:fromPoint.x+x,y:fromPoint.y+y};},/**
         * @name Biltong.perpendicularLineTo
         * @function
         * @desc Calculates a line of length `length` that is perpendicular to the line from `fromPoint` to `toPoint` and passes through `toPoint`.
         * @param {Point} p1 First point, either as a 2 entry array or object with `left` and `top` properties.
         * @param {Point} p2 Second point, either as a 2 entry array or object with `left` and `top` properties.
         * @return {Line} Perpendicular line, in the form `[ { x:..., y:... }, { x:..., y:... } ]`.
         */_perpendicularLineTo=Biltong.perpendicularLineTo=function(fromPoint,toPoint,length){var m=_gradient(fromPoint,toPoint),theta2=Math.atan(-1/m),y=length/2*Math.sin(theta2),x=length/2*Math.cos(theta2);return[{x:toPoint.x+x,y:toPoint.y+y},{x:toPoint.x-x,y:toPoint.y-y}];};}).call(typeof window!=='undefined'?window:this);;(function(){"use strict";var root=this,Sniff={android:navigator.userAgent.toLowerCase().indexOf("android")>-1},matchesSelector=function matchesSelector(el,selector,ctx){ctx=ctx||el.parentNode;var possibles=ctx.querySelectorAll(selector);for(var i=0;i<possibles.length;i++){if(possibles[i]===el){return true;}}return false;},_gel=function _gel(el){return typeof el=="string"||el.constructor===String?document.getElementById(el):el;},_t=function _t(e){return e.srcElement||e.target;},//
// gets path info for the given event - the path from target to obj, in the event's bubble chain. if doCompute
// is false we just return target for the path.
//
_pi=function _pi(e,target,obj,doCompute){if(!doCompute)return{path:[target],end:1};else if(typeof e.path!=="undefined"&&e.path.indexOf){return{path:e.path,end:e.path.indexOf(obj)};}else{var out={path:[],end:-1},_one=function _one(el){out.path.push(el);if(el===obj){out.end=out.path.length-1;}else if(el.parentNode!=null){_one(el.parentNode);}};_one(target);return out;}},_d=function _d(l,fn){for(var i=0,j=l.length;i<j;i++){if(l[i]==fn)break;}if(i<l.length)l.splice(i,1);},guid=1,//
// this function generates a guid for every handler, sets it on the handler, then adds
// it to the associated object's map of handlers for the given event. this is what enables us
// to unbind all events of some type, or all events (the second of which can be requested by the user,
// but it also used by Mottle when an element is removed.)
_store=function _store(obj,event,fn){var g=guid++;obj.__ta=obj.__ta||{};obj.__ta[event]=obj.__ta[event]||{};// store each handler with a unique guid.
obj.__ta[event][g]=fn;// set the guid on the handler.
fn.__tauid=g;return g;},_unstore=function _unstore(obj,event,fn){obj.__ta&&obj.__ta[event]&&delete obj.__ta[event][fn.__tauid];// a handler might have attached extra functions, so we unbind those too.
if(fn.__taExtra){for(var i=0;i<fn.__taExtra.length;i++){_unbind(obj,fn.__taExtra[i][0],fn.__taExtra[i][1]);}fn.__taExtra.length=0;}// a handler might have attached an unstore callback
fn.__taUnstore&&fn.__taUnstore();},_curryChildFilter=function _curryChildFilter(children,obj,fn,evt){if(children==null)return fn;else{var c=children.split(","),_fn=function _fn(e){_fn.__tauid=fn.__tauid;var t=_t(e),target=t;// t is the target element on which the event occurred. it is the
// element we will wish to pass to any callbacks.
var pathInfo=_pi(e,t,obj,children!=null);if(pathInfo.end!=-1){for(var p=0;p<pathInfo.end;p++){target=pathInfo.path[p];for(var i=0;i<c.length;i++){if(matchesSelector(target,c[i],obj)){fn.apply(target,arguments);}}}}};registerExtraFunction(fn,evt,_fn);return _fn;}},//
// registers an 'extra' function on some event listener function we were given - a function that we
// created and bound to the element as part of our housekeeping, and which we want to unbind and remove
// whenever the given function is unbound.
registerExtraFunction=function registerExtraFunction(fn,evt,newFn){fn.__taExtra=fn.__taExtra||[];fn.__taExtra.push([evt,newFn]);},DefaultHandler=function DefaultHandler(obj,evt,fn,children){if(isTouchDevice&&touchMap[evt]){var tfn=_curryChildFilter(children,obj,fn,touchMap[evt]);_bind(obj,touchMap[evt],tfn,fn);}if(evt==="focus"&&obj.getAttribute("tabindex")==null){obj.setAttribute("tabindex","1");}_bind(obj,evt,_curryChildFilter(children,obj,fn,evt),fn);},SmartClickHandler=function SmartClickHandler(obj,evt,fn,children){if(obj.__taSmartClicks==null){var down=function down(e){obj.__tad=_pageLocation(e);},up=function up(e){obj.__tau=_pageLocation(e);},click=function click(e){if(obj.__tad&&obj.__tau&&obj.__tad[0]===obj.__tau[0]&&obj.__tad[1]===obj.__tau[1]){for(var i=0;i<obj.__taSmartClicks.length;i++){obj.__taSmartClicks[i].apply(_t(e),[e]);}}};DefaultHandler(obj,"mousedown",down,children);DefaultHandler(obj,"mouseup",up,children);DefaultHandler(obj,"click",click,children);obj.__taSmartClicks=[];}// store in the list of callbacks
obj.__taSmartClicks.push(fn);// the unstore function removes this function from the object's listener list for this type.
fn.__taUnstore=function(){_d(obj.__taSmartClicks,fn);};},_tapProfiles={"tap":{touches:1,taps:1},"dbltap":{touches:1,taps:2},"contextmenu":{touches:2,taps:1}},TapHandler=function TapHandler(clickThreshold,dblClickThreshold){return function(obj,evt,fn,children){// if event is contextmenu, for devices which are mouse only, we want to
// use the default bind.
if(evt=="contextmenu"&&isMouseDevice)DefaultHandler(obj,evt,fn,children);else{// the issue here is that this down handler gets registered only for the
// child nodes in the first registration. in fact it should be registered with
// no child selector and then on down we should cycle through the registered
// functions to see if one of them matches. on mouseup we should execute ALL of
// the functions whose children are either null or match the element.
if(obj.__taTapHandler==null){var tt=obj.__taTapHandler={tap:[],dbltap:[],contextmenu:[],down:false,taps:0,downSelectors:[]};var down=function down(e){var target=_t(e),pathInfo=_pi(e,target,obj,children!=null),finished=false;for(var p=0;p<pathInfo.end;p++){if(finished)return;target=pathInfo.path[p];for(var i=0;i<tt.downSelectors.length;i++){if(tt.downSelectors[i]==null||matchesSelector(target,tt.downSelectors[i],obj)){tt.down=true;setTimeout(clearSingle,clickThreshold);setTimeout(clearDouble,dblClickThreshold);finished=true;break;// we only need one match on mousedown
}}}},up=function up(e){if(tt.down){var target=_t(e),currentTarget,pathInfo;tt.taps++;var tc=_touchCount(e);for(var eventId in _tapProfiles){if(_tapProfiles.hasOwnProperty(eventId)){var p=_tapProfiles[eventId];if(p.touches===tc&&(p.taps===1||p.taps===tt.taps)){for(var i=0;i<tt[eventId].length;i++){pathInfo=_pi(e,target,obj,tt[eventId][i][1]!=null);for(var pLoop=0;pLoop<pathInfo.end;pLoop++){currentTarget=pathInfo.path[pLoop];// this is a single event registration handler.
if(tt[eventId][i][1]==null||matchesSelector(currentTarget,tt[eventId][i][1],obj)){tt[eventId][i][0].apply(currentTarget,[e]);break;}}}}}}}},clearSingle=function clearSingle(){tt.down=false;},clearDouble=function clearDouble(){tt.taps=0;};DefaultHandler(obj,"mousedown",down);DefaultHandler(obj,"mouseup",up);}// add this child selector (it can be null, that's fine).
obj.__taTapHandler.downSelectors.push(children);obj.__taTapHandler[evt].push([fn,children]);// the unstore function removes this function from the object's listener list for this type.
fn.__taUnstore=function(){_d(obj.__taTapHandler[evt],fn);};}};},meeHelper=function meeHelper(type,evt,obj,target){for(var i in obj.__tamee[type]){if(obj.__tamee[type].hasOwnProperty(i)){obj.__tamee[type][i].apply(target,[evt]);}}},MouseEnterExitHandler=function MouseEnterExitHandler(){var activeElements=[];return function(obj,evt,fn,children){if(!obj.__tamee){// __tamee holds a flag saying whether the mouse is currently "in" the element, and a list of
// both mouseenter and mouseexit functions.
obj.__tamee={over:false,mouseenter:[],mouseexit:[]};// register over and out functions
var over=function over(e){var t=_t(e);if(children==null&&t==obj&&!obj.__tamee.over||matchesSelector(t,children,obj)&&(t.__tamee==null||!t.__tamee.over)){meeHelper("mouseenter",e,obj,t);t.__tamee=t.__tamee||{};t.__tamee.over=true;activeElements.push(t);}},out=function out(e){var t=_t(e);// is the current target one of the activeElements? and is the
// related target NOT a descendant of it?
for(var i=0;i<activeElements.length;i++){if(t==activeElements[i]&&!matchesSelector(e.relatedTarget||e.toElement,"*",t)){t.__tamee.over=false;activeElements.splice(i,1);meeHelper("mouseexit",e,obj,t);}}};_bind(obj,"mouseover",_curryChildFilter(children,obj,over,"mouseover"),over);_bind(obj,"mouseout",_curryChildFilter(children,obj,out,"mouseout"),out);}fn.__taUnstore=function(){delete obj.__tamee[evt][fn.__tauid];};_store(obj,evt,fn);obj.__tamee[evt][fn.__tauid]=fn;};},isTouchDevice="ontouchstart"in document.documentElement,isMouseDevice="onmousedown"in document.documentElement,touchMap={"mousedown":"touchstart","mouseup":"touchend","mousemove":"touchmove"},touchstart="touchstart",touchend="touchend",touchmove="touchmove",iev=function(){var rv=-1;if(navigator.appName=='Microsoft Internet Explorer'){var ua=navigator.userAgent,re=new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");if(re.exec(ua)!=null)rv=parseFloat(RegExp.$1);}return rv;}(),isIELT9=iev>-1&&iev<9,_genLoc=function _genLoc(e,prefix){if(e==null)return[0,0];var ts=_touches(e),t=_getTouch(ts,0);return[t[prefix+"X"],t[prefix+"Y"]];},_pageLocation=function _pageLocation(e){if(e==null)return[0,0];if(isIELT9){return[e.clientX+document.documentElement.scrollLeft,e.clientY+document.documentElement.scrollTop];}else{return _genLoc(e,"page");}},_screenLocation=function _screenLocation(e){return _genLoc(e,"screen");},_clientLocation=function _clientLocation(e){return _genLoc(e,"client");},_getTouch=function _getTouch(touches,idx){return touches.item?touches.item(idx):touches[idx];},_touches=function _touches(e){return e.touches&&e.touches.length>0?e.touches:e.changedTouches&&e.changedTouches.length>0?e.changedTouches:e.targetTouches&&e.targetTouches.length>0?e.targetTouches:[e];},_touchCount=function _touchCount(e){return _touches(e).length;},//http://www.quirksmode.org/blog/archives/2005/10/_and_the_winner_1.html
_bind=function _bind(obj,type,fn,originalFn){_store(obj,type,fn);originalFn.__tauid=fn.__tauid;if(obj.addEventListener)obj.addEventListener(type,fn,false);else if(obj.attachEvent){var key=type+fn.__tauid;obj["e"+key]=fn;// TODO look at replacing with .call(..)
obj[key]=function(){obj["e"+key]&&obj["e"+key](window.event);};obj.attachEvent("on"+type,obj[key]);}},_unbind=function _unbind(obj,type,fn){if(fn==null)return;_each(obj,function(){var _el=_gel(this);_unstore(_el,type,fn);// it has been bound if there is a tauid. otherwise it was not bound and we can ignore it.
if(fn.__tauid!=null){if(_el.removeEventListener){_el.removeEventListener(type,fn,false);if(isTouchDevice&&touchMap[type])_el.removeEventListener(touchMap[type],fn,false);}else if(this.detachEvent){var key=type+fn.__tauid;_el[key]&&_el.detachEvent("on"+type,_el[key]);_el[key]=null;_el["e"+key]=null;}}// if a touch event was also registered, deregister now.
if(fn.__taTouchProxy){_unbind(obj,fn.__taTouchProxy[1],fn.__taTouchProxy[0]);}});},_each=function _each(obj,fn){if(obj==null)return;// if a list (or list-like), use it. if a string, get a list
// by running the string through querySelectorAll. else, assume
// it's an Element.
// obj.top is "unknown" in IE8.
obj=typeof Window!=="undefined"&&typeof obj.top!=="unknown"&&obj==obj.top?[obj]:typeof obj!=="string"&&obj.tagName==null&&obj.length!=null?obj:typeof obj==="string"?document.querySelectorAll(obj):[obj];for(var i=0;i<obj.length;i++){fn.apply(obj[i]);}};/**
     * Mottle offers support for abstracting out the differences
     * between touch and mouse devices, plus "smart click" functionality
     * (don't fire click if the mouse has moved between mousedown and mouseup),
     * and synthesized click/tap events.
     * @class Mottle
     * @constructor
     * @param {Object} params Constructor params
     * @param {Number} [params.clickThreshold=250] Threshold, in milliseconds beyond which a touchstart followed by a touchend is not considered to be a click.
     * @param {Number} [params.dblClickThreshold=450] Threshold, in milliseconds beyond which two successive tap events are not considered to be a click.
     * @param {Boolean} [params.smartClicks=false] If true, won't fire click events if the mouse has moved between mousedown and mouseup. Note that this functionality
     * requires that Mottle consume the mousedown event, and so may not be viable in all use cases.
     */root.Mottle=function(params){params=params||{};var clickThreshold=params.clickThreshold||250,dblClickThreshold=params.dblClickThreshold||450,mouseEnterExitHandler=new MouseEnterExitHandler(),tapHandler=new TapHandler(clickThreshold,dblClickThreshold),_smartClicks=params.smartClicks,_doBind=function _doBind(obj,evt,fn,children){if(fn==null)return;_each(obj,function(){var _el=_gel(this);if(_smartClicks&&evt==="click")SmartClickHandler(_el,evt,fn,children);else if(evt==="tap"||evt==="dbltap"||evt==="contextmenu"){tapHandler(_el,evt,fn,children);}else if(evt==="mouseenter"||evt=="mouseexit")mouseEnterExitHandler(_el,evt,fn,children);else DefaultHandler(_el,evt,fn,children);});};/**
         * Removes an element from the DOM, and deregisters all event handlers for it. You should use this
         * to ensure you don't leak memory.
         * @method remove
         * @param {String|Element} el Element, or id of the element, to remove.
         * @return {Mottle} The current Mottle instance; you can chain this method.
         */this.remove=function(el){_each(el,function(){var _el=_gel(this);if(_el.__ta){for(var evt in _el.__ta){if(_el.__ta.hasOwnProperty(evt)){for(var h in _el.__ta[evt]){if(_el.__ta[evt].hasOwnProperty(h))_unbind(_el,evt,_el.__ta[evt][h]);}}}}_el.parentNode&&_el.parentNode.removeChild(_el);});return this;};/**
         * Register an event handler, optionally as a delegate for some set of descendant elements. Note
         * that this method takes either 3 or 4 arguments - if you supply 3 arguments it is assumed you have
         * omitted the `children` parameter, and that the event handler should be bound directly to the given element.
         * @method on
         * @param {Element[]|Element|String} el Either an Element, or a CSS spec for a list of elements, or an array of Elements.
         * @param {String} [children] Comma-delimited list of selectors identifying allowed children.
         * @param {String} event Event ID.
         * @param {Function} fn Event handler function.
         * @return {Mottle} The current Mottle instance; you can chain this method.
         */this.on=function(el,event,children,fn){var _el=arguments[0],_c=arguments.length==4?arguments[2]:null,_e=arguments[1],_f=arguments[arguments.length-1];_doBind(_el,_e,_f,_c);return this;};/**
         * Cancel delegate event handling for the given function. Note that unlike with 'on' you do not supply
         * a list of child selectors here: it removes event delegation from all of the child selectors for which the
         * given function was registered (if any).
         * @method off
         * @param {Element[]|Element|String} el Element - or ID of element - from which to remove event listener.
         * @param {String} event Event ID.
         * @param {Function} fn Event handler function.
         * @return {Mottle} The current Mottle instance; you can chain this method.
         */this.off=function(el,event,fn){_unbind(el,event,fn);return this;};/**
         * Triggers some event for a given element.
         * @method trigger
         * @param {Element} el Element for which to trigger the event.
         * @param {String} event Event ID.
         * @param {Event} originalEvent The original event. Should be optional of course, but currently is not, due
         * to the jsPlumb use case that caused this method to be added.
         * @param {Object} [payload] Optional object to set as `payload` on the generated event; useful for message passing.
         * @return {Mottle} The current Mottle instance; you can chain this method.
         */this.trigger=function(el,event,originalEvent,payload){// MouseEvent undefined in old IE; that's how we know it's a mouse event.  A fine Microsoft paradox.
var originalIsMouse=isMouseDevice&&(typeof MouseEvent==="undefined"||originalEvent==null||originalEvent.constructor===MouseEvent);var eventToBind=isTouchDevice&&!isMouseDevice&&touchMap[event]?touchMap[event]:event,bindingAMouseEvent=!(isTouchDevice&&!isMouseDevice&&touchMap[event]);var pl=_pageLocation(originalEvent),sl=_screenLocation(originalEvent),cl=_clientLocation(originalEvent);_each(el,function(){var _el=_gel(this),evt;originalEvent=originalEvent||{screenX:sl[0],screenY:sl[1],clientX:cl[0],clientY:cl[1]};var _decorate=function _decorate(_evt){if(payload)_evt.payload=payload;};var eventGenerators={"TouchEvent":function TouchEvent(evt){var touch=document.createTouch(window,_el,0,pl[0],pl[1],sl[0],sl[1],cl[0],cl[1],0,0,0,0);// https://gist.github.com/sstephenson/448808
var touches=document.createTouchList(touch);var targetTouches=document.createTouchList(touch);var changedTouches=document.createTouchList(touch);evt.initTouchEvent(eventToBind,true,true,window,null,sl[0],sl[1],cl[0],cl[1],false,false,false,false,touches,targetTouches,changedTouches,1,0);},"MouseEvents":function MouseEvents(evt){evt.initMouseEvent(eventToBind,true,true,window,0,sl[0],sl[1],cl[0],cl[1],false,false,false,false,1,_el);if(Sniff.android){// Android's touch events are not standard.
var t=document.createTouch(window,_el,0,pl[0],pl[1],sl[0],sl[1],cl[0],cl[1],0,0,0,0);evt.touches=evt.targetTouches=evt.changedTouches=document.createTouchList(t);}}};if(document.createEvent){var ite=!bindingAMouseEvent&&!originalIsMouse&&isTouchDevice&&touchMap[event]&&!Sniff.android,evtName=ite?"TouchEvent":"MouseEvents";evt=document.createEvent(evtName);eventGenerators[evtName](evt);_decorate(evt);_el.dispatchEvent(evt);}else if(document.createEventObject){evt=document.createEventObject();evt.eventType=evt.eventName=eventToBind;evt.screenX=sl[0];evt.screenY=sl[1];evt.clientX=cl[0];evt.clientY=cl[1];_decorate(evt);_el.fireEvent('on'+eventToBind,evt);}});return this;};};/**
     * Static method to assist in 'consuming' an element: uses `stopPropagation` where available, or sets
     * `e.returnValue=false` where it is not.
     * @method Mottle.consume
     * @param {Event} e Event to consume
     * @param {Boolean} [doNotPreventDefault=false] If true, does not call `preventDefault()` on the event.
     */root.Mottle.consume=function(e,doNotPreventDefault){if(e.stopPropagation)e.stopPropagation();else e.returnValue=false;if(!doNotPreventDefault&&e.preventDefault)e.preventDefault();};/**
     * Gets the page location corresponding to the given event. For touch events this means get the page location of the first touch.
     * @method Mottle.pageLocation
     * @param {Event} e Event to get page location for.
     * @return {Number[]} [left, top] for the given event.
     */root.Mottle.pageLocation=_pageLocation;/**
     * Forces touch events to be turned "on". Useful for testing: even if you don't have a touch device, you can still
     * trigger a touch event when this is switched on and it will be captured and acted on.
     * @method setForceTouchEvents
     * @param {Boolean} value If true, force touch events to be on.
     */root.Mottle.setForceTouchEvents=function(value){isTouchDevice=value;};/**
     * Forces mouse events to be turned "on". Useful for testing: even if you don't have a mouse, you can still
     * trigger a mouse event when this is switched on and it will be captured and acted on.
     * @method setForceMouseEvents
     * @param {Boolean} value If true, force mouse events to be on.
     */root.Mottle.setForceMouseEvents=function(value){isMouseDevice=value;};root.Mottle.version="0.8.0";if(true){exports.Mottle=root.Mottle;}}).call(typeof window==="undefined"?this:window);/**
 drag/drop functionality for use with jsPlumb but with
 no knowledge of jsPlumb. supports multiple scopes (separated by whitespace), dragging
 multiple elements, constrain to parent, drop filters, drag start filters, custom
 css classes.

 a lot of the functionality of this script is expected to be plugged in:

 addClass
 removeClass

 addEvent
 removeEvent

 getPosition
 setPosition
 getSize

 indexOf
 intersects

 the name came from here:

 http://mrsharpoblunto.github.io/foswig.js/

 copyright 2016 jsPlumb
 */;(function(){"use strict";var root=this;var _suggest=function _suggest(list,item,head){if(list.indexOf(item)===-1){head?list.unshift(item):list.push(item);return true;}return false;};var _vanquish=function _vanquish(list,item){var idx=list.indexOf(item);if(idx!=-1)list.splice(idx,1);};var _difference=function _difference(l1,l2){var d=[];for(var i=0;i<l1.length;i++){if(l2.indexOf(l1[i])==-1)d.push(l1[i]);}return d;};var _isString=function _isString(f){return f==null?false:typeof f==="string"||f.constructor==String;};var getOffsetRect=function getOffsetRect(elem){// (1)
var box=elem.getBoundingClientRect(),body=document.body,docElem=document.documentElement,// (2)
scrollTop=window.pageYOffset||docElem.scrollTop||body.scrollTop,scrollLeft=window.pageXOffset||docElem.scrollLeft||body.scrollLeft,// (3)
clientTop=docElem.clientTop||body.clientTop||0,clientLeft=docElem.clientLeft||body.clientLeft||0,// (4)
top=box.top+scrollTop-clientTop,left=box.left+scrollLeft-clientLeft;return{top:Math.round(top),left:Math.round(left)};};var matchesSelector=function matchesSelector(el,selector,ctx){ctx=ctx||el.parentNode;var possibles=ctx.querySelectorAll(selector);for(var i=0;i<possibles.length;i++){if(possibles[i]===el)return true;}return false;};var iev=function(){var rv=-1;if(navigator.appName=='Microsoft Internet Explorer'){var ua=navigator.userAgent,re=new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");if(re.exec(ua)!=null)rv=parseFloat(RegExp.$1);}return rv;}(),DEFAULT_GRID_X=50,DEFAULT_GRID_Y=50,isIELT9=iev>-1&&iev<9,isIE9=iev==9,_pl=function _pl(e){if(isIELT9){return[e.clientX+document.documentElement.scrollLeft,e.clientY+document.documentElement.scrollTop];}else{var ts=_touches(e),t=_getTouch(ts,0);// for IE9 pageX might be null if the event was synthesized. We try for pageX/pageY first,
// falling back to clientX/clientY if necessary. In every other browser we want to use pageX/pageY.
return isIE9?[t.pageX||t.clientX,t.pageY||t.clientY]:[t.pageX,t.pageY];}},_getTouch=function _getTouch(touches,idx){return touches.item?touches.item(idx):touches[idx];},_touches=function _touches(e){return e.touches&&e.touches.length>0?e.touches:e.changedTouches&&e.changedTouches.length>0?e.changedTouches:e.targetTouches&&e.targetTouches.length>0?e.targetTouches:[e];},_classes={draggable:"katavorio-draggable",// draggable elements
droppable:"katavorio-droppable",// droppable elements
drag:"katavorio-drag",// elements currently being dragged
selected:"katavorio-drag-selected",// elements in current drag selection
active:"katavorio-drag-active",// droppables that are targets of a currently dragged element
hover:"katavorio-drag-hover",// droppables over which a matching drag element is hovering
noSelect:"katavorio-drag-no-select",// added to the body to provide a hook to suppress text selection
ghostProxy:"katavorio-ghost-proxy"// added to a ghost proxy element in use when a drag has exited the bounds of its parent.
},_defaultScope="katavorio-drag-scope",_events=["stop","start","drag","drop","over","out","beforeStart"],_devNull=function _devNull(){},_true=function _true(){return true;},_foreach=function _foreach(l,fn,from){for(var i=0;i<l.length;i++){if(l[i]!=from)fn(l[i]);}},_setDroppablesActive=function _setDroppablesActive(dd,val,andHover,drag){_foreach(dd,function(e){e.setActive(val);if(val)e.updatePosition();if(andHover)e.setHover(drag,val);});},_each=function _each(obj,fn){if(obj==null)return;obj=!_isString(obj)&&obj.tagName==null&&obj.length!=null?obj:[obj];for(var i=0;i<obj.length;i++){fn.apply(obj[i],[obj[i]]);}},_consume=function _consume(e){if(e.stopPropagation){e.stopPropagation();e.preventDefault();}else{e.returnValue=false;}},_defaultInputFilterSelector="input,textarea,select,button,option",//
// filters out events on all input elements, like textarea, checkbox, input, select.
_inputFilter=function _inputFilter(e,el,_katavorio){var t=e.srcElement||e.target;return!matchesSelector(t,_katavorio.getInputFilterSelector(),el);};var Super=function Super(el,params,css,scope){this.params=params||{};this.el=el;this.params.addClass(this.el,this._class);this.uuid=_uuid();var enabled=true;this.setEnabled=function(e){enabled=e;};this.isEnabled=function(){return enabled;};this.toggleEnabled=function(){enabled=!enabled;};this.setScope=function(scopes){this.scopes=scopes?scopes.split(/\s+/):[scope];};this.addScope=function(scopes){var m={};_each(this.scopes,function(s){m[s]=true;});_each(scopes?scopes.split(/\s+/):[],function(s){m[s]=true;});this.scopes=[];for(var i in m){this.scopes.push(i);}};this.removeScope=function(scopes){var m={};_each(this.scopes,function(s){m[s]=true;});_each(scopes?scopes.split(/\s+/):[],function(s){delete m[s];});this.scopes=[];for(var i in m){this.scopes.push(i);}};this.toggleScope=function(scopes){var m={};_each(this.scopes,function(s){m[s]=true;});_each(scopes?scopes.split(/\s+/):[],function(s){if(m[s])delete m[s];else m[s]=true;});this.scopes=[];for(var i in m){this.scopes.push(i);}};this.setScope(params.scope);this.k=params.katavorio;return params.katavorio;};var TRUE=function TRUE(){return true;};var FALSE=function FALSE(){return false;};var Drag=function Drag(el,params,css,scope){this._class=css.draggable;var k=Super.apply(this,arguments);this.rightButtonCanDrag=this.params.rightButtonCanDrag;var downAt=[0,0],posAtDown=null,pagePosAtDown=null,pageDelta=[0,0],moving=false,consumeStartEvent=this.params.consumeStartEvent!==false,dragEl=this.el,clone=this.params.clone,scroll=this.params.scroll,_multipleDrop=params.multipleDrop!==false,isConstrained=false,useGhostProxy=params.ghostProxy===true?TRUE:params.ghostProxy&&typeof params.ghostProxy==="function"?params.ghostProxy:FALSE,ghostProxy=function ghostProxy(el){return el.cloneNode(true);};var snapThreshold=params.snapThreshold||5,_snap=function _snap(pos,x,y,thresholdX,thresholdY){thresholdX=thresholdX||snapThreshold;thresholdY=thresholdY||snapThreshold;var _dx=Math.floor(pos[0]/x),_dxl=x*_dx,_dxt=_dxl+x,_x=Math.abs(pos[0]-_dxl)<=thresholdX?_dxl:Math.abs(_dxt-pos[0])<=thresholdX?_dxt:pos[0];var _dy=Math.floor(pos[1]/y),_dyl=y*_dy,_dyt=_dyl+y,_y=Math.abs(pos[1]-_dyl)<=thresholdY?_dyl:Math.abs(_dyt-pos[1])<=thresholdY?_dyt:pos[1];return[_x,_y];};this.posses=[];this.posseRoles={};this.toGrid=function(pos){if(this.params.grid==null){return pos;}else{return _snap(pos,this.params.grid[0],this.params.grid[1]);}};this.snap=function(x,y){if(dragEl==null)return;x=x||(this.params.grid?this.params.grid[0]:DEFAULT_GRID_X);y=y||(this.params.grid?this.params.grid[1]:DEFAULT_GRID_Y);var p=this.params.getPosition(dragEl);this.params.setPosition(dragEl,_snap(p,x,y,x,y));};this.setUseGhostProxy=function(val){useGhostProxy=val?TRUE:FALSE;};var constrain;var negativeFilter=function negativeFilter(pos){return params.allowNegative===false?[Math.max(0,pos[0]),Math.max(0,pos[1])]:pos;};var _setConstrain=function(value){constrain=typeof value==="function"?value:value?function(pos){return negativeFilter([Math.max(0,Math.min(constrainRect.w-this.size[0],pos[0])),Math.max(0,Math.min(constrainRect.h-this.size[1],pos[1]))]);}.bind(this):function(pos){return negativeFilter(pos);};}.bind(this);_setConstrain(typeof this.params.constrain==="function"?this.params.constrain:this.params.constrain||this.params.containment);/**
         * Sets whether or not the Drag is constrained. A value of 'true' means constrain to parent bounds; a function
         * will be executed and returns true if the position is allowed.
         * @param value
         */this.setConstrain=function(value){_setConstrain(value);};var revertFunction;/**
         * Sets a function to call on drag stop, which, if it returns true, indicates that the given element should
         * revert to its position before the previous drag.
         * @param fn
         */this.setRevert=function(fn){revertFunction=fn;};var _assignId=function _assignId(obj){if(typeof obj=="function"){obj._katavorioId=_uuid();return obj._katavorioId;}else{return obj;}},// a map of { spec -> [ fn, exclusion ] } entries.
_filters={},_testFilter=function _testFilter(e){for(var key in _filters){var f=_filters[key];var rv=f[0](e);if(f[1])rv=!rv;if(!rv)return false;}return true;},_setFilter=this.setFilter=function(f,_exclude){if(f){var key=_assignId(f);_filters[key]=[function(e){var t=e.srcElement||e.target,m;if(_isString(f)){m=matchesSelector(t,f,el);}else if(typeof f==="function"){m=f(e,el);}return m;},_exclude!==false];}},_addFilter=this.addFilter=_setFilter,_removeFilter=this.removeFilter=function(f){var key=typeof f=="function"?f._katavorioId:f;delete _filters[key];};this.clearAllFilters=function(){_filters={};};this.canDrag=this.params.canDrag||_true;var constrainRect,matchingDroppables=[],intersectingDroppables=[];this.downListener=function(e){var isNotRightClick=this.rightButtonCanDrag||e.which!==3&&e.button!==2;if(isNotRightClick&&this.isEnabled()&&this.canDrag()){var _f=_testFilter(e)&&_inputFilter(e,this.el,this.k);if(_f){if(!clone)dragEl=this.el;else{dragEl=this.el.cloneNode(true);dragEl.setAttribute("id",null);dragEl.style.position="absolute";// the clone node is added to the body; getOffsetRect gives us a value
// relative to the body.
var b=getOffsetRect(this.el);dragEl.style.left=b.left+"px";dragEl.style.top=b.top+"px";document.body.appendChild(dragEl);}consumeStartEvent&&_consume(e);downAt=_pl(e);//
this.params.bind(document,"mousemove",this.moveListener);this.params.bind(document,"mouseup",this.upListener);k.markSelection(this);k.markPosses(this);this.params.addClass(document.body,css.noSelect);_dispatch("beforeStart",{el:this.el,pos:posAtDown,e:e,drag:this});}else if(this.params.consumeFilteredEvents){_consume(e);}}}.bind(this);this.moveListener=function(e){if(downAt){if(!moving){var _continue=_dispatch("start",{el:this.el,pos:posAtDown,e:e,drag:this});if(_continue!==false){if(!downAt)return;this.mark(true);moving=true;}}// it is possible that the start event caused the drag to be aborted. So we check
// again that we are currently dragging.
if(downAt){intersectingDroppables.length=0;var pos=_pl(e),dx=pos[0]-downAt[0],dy=pos[1]-downAt[1],z=this.params.ignoreZoom?1:k.getZoom();dx/=z;dy/=z;this.moveBy(dx,dy,e);k.updateSelection(dx,dy,this);k.updatePosses(dx,dy,this);}}}.bind(this);this.upListener=function(e){if(downAt){downAt=null;this.params.unbind(document,"mousemove",this.moveListener);this.params.unbind(document,"mouseup",this.upListener);this.params.removeClass(document.body,css.noSelect);this.unmark(e);k.unmarkSelection(this,e);k.unmarkPosses(this,e);this.stop(e);k.notifySelectionDragStop(this,e);k.notifyPosseDragStop(this,e);moving=false;if(clone){dragEl&&dragEl.parentNode&&dragEl.parentNode.removeChild(dragEl);dragEl=null;}intersectingDroppables.length=0;if(revertFunction&&revertFunction(this.el,this.params.getPosition(this.el))===true){this.params.setPosition(this.el,posAtDown);_dispatch("revert",this.el);}}}.bind(this);this.getFilters=function(){return _filters;};this.abort=function(){if(downAt!=null)this.upListener();};this.getDragElement=function(){return dragEl||this.el;};var listeners={"start":[],"drag":[],"stop":[],"over":[],"out":[],"beforeStart":[],"revert":[]};if(params.events.start)listeners.start.push(params.events.start);if(params.events.beforeStart)listeners.beforeStart.push(params.events.beforeStart);if(params.events.stop)listeners.stop.push(params.events.stop);if(params.events.drag)listeners.drag.push(params.events.drag);if(params.events.revert)listeners.revert.push(params.events.revert);this.on=function(evt,fn){if(listeners[evt])listeners[evt].push(fn);};this.off=function(evt,fn){if(listeners[evt]){var l=[];for(var i=0;i<listeners[evt].length;i++){if(listeners[evt][i]!==fn)l.push(listeners[evt][i]);}listeners[evt]=l;}};var _dispatch=function _dispatch(evt,value){if(listeners[evt]){for(var i=0;i<listeners[evt].length;i++){try{listeners[evt][i](value);}catch(e){}}}};this.notifyStart=function(e){_dispatch("start",{el:this.el,pos:this.params.getPosition(dragEl),e:e,drag:this});};this.stop=function(e,force){if(force||moving){var positions=[],sel=k.getSelection(),dPos=this.params.getPosition(dragEl);if(sel.length>1){for(var i=0;i<sel.length;i++){var p=this.params.getPosition(sel[i].el);positions.push([sel[i].el,{left:p[0],top:p[1]},sel[i]]);}}else{positions.push([dragEl,{left:dPos[0],top:dPos[1]},this]);}_dispatch("stop",{el:dragEl,pos:ghostProxyOffsets||dPos,finalPos:dPos,e:e,drag:this,selection:positions});}};this.mark=function(andNotify){posAtDown=this.params.getPosition(dragEl);pagePosAtDown=this.params.getPosition(dragEl,true);pageDelta=[pagePosAtDown[0]-posAtDown[0],pagePosAtDown[1]-posAtDown[1]];this.size=this.params.getSize(dragEl);matchingDroppables=k.getMatchingDroppables(this);_setDroppablesActive(matchingDroppables,true,false,this);this.params.addClass(dragEl,this.params.dragClass||css.drag);//if (this.params.constrain || this.params.containment) {
var cs=this.params.getSize(dragEl.parentNode);constrainRect={w:cs[0],h:cs[1]};//}
if(andNotify){k.notifySelectionDragStart(this);}};var ghostProxyOffsets;this.unmark=function(e,doNotCheckDroppables){_setDroppablesActive(matchingDroppables,false,true,this);if(isConstrained&&useGhostProxy(this.el)){ghostProxyOffsets=[dragEl.offsetLeft,dragEl.offsetTop];this.el.parentNode.removeChild(dragEl);dragEl=this.el;}else{ghostProxyOffsets=null;}this.params.removeClass(dragEl,this.params.dragClass||css.drag);matchingDroppables.length=0;isConstrained=false;if(!doNotCheckDroppables){if(intersectingDroppables.length>0&&ghostProxyOffsets){params.setPosition(this.el,ghostProxyOffsets);}intersectingDroppables.sort(_rankSort);for(var i=0;i<intersectingDroppables.length;i++){var retVal=intersectingDroppables[i].drop(this,e);if(retVal===true)break;}}};this.moveBy=function(dx,dy,e){intersectingDroppables.length=0;var desiredLoc=this.toGrid([posAtDown[0]+dx,posAtDown[1]+dy]),cPos=constrain(desiredLoc,dragEl);if(useGhostProxy(this.el)){if(desiredLoc[0]!=cPos[0]||desiredLoc[1]!=cPos[1]){if(!isConstrained){var gp=ghostProxy(this.el);params.addClass(gp,_classes.ghostProxy);this.el.parentNode.appendChild(gp);dragEl=gp;isConstrained=true;}cPos=desiredLoc;}else{if(isConstrained){this.el.parentNode.removeChild(dragEl);dragEl=this.el;isConstrained=false;}}}var rect={x:cPos[0],y:cPos[1],w:this.size[0],h:this.size[1]},pageRect={x:rect.x+pageDelta[0],y:rect.y+pageDelta[1],w:rect.w,h:rect.h},focusDropElement=null;this.params.setPosition(dragEl,cPos);for(var i=0;i<matchingDroppables.length;i++){var r2={x:matchingDroppables[i].pagePosition[0],y:matchingDroppables[i].pagePosition[1],w:matchingDroppables[i].size[0],h:matchingDroppables[i].size[1]};if(this.params.intersects(pageRect,r2)&&(_multipleDrop||focusDropElement==null||focusDropElement==matchingDroppables[i].el)&&matchingDroppables[i].canDrop(this)){if(!focusDropElement)focusDropElement=matchingDroppables[i].el;intersectingDroppables.push(matchingDroppables[i]);matchingDroppables[i].setHover(this,true,e);}else if(matchingDroppables[i].isHover()){matchingDroppables[i].setHover(this,false,e);}}_dispatch("drag",{el:this.el,pos:cPos,e:e,drag:this});/* test to see if the parent needs to be scrolled (future)
             if (scroll) {
             var pnsl = dragEl.parentNode.scrollLeft, pnst = dragEl.parentNode.scrollTop;
             console.log("scroll!", pnsl, pnst);
             }*/};this.destroy=function(){this.params.unbind(this.el,"mousedown",this.downListener);this.params.unbind(document,"mousemove",this.moveListener);this.params.unbind(document,"mouseup",this.upListener);this.downListener=null;this.upListener=null;this.moveListener=null;};// init:register mousedown, and perhaps set a filter
this.params.bind(this.el,"mousedown",this.downListener);// if handle provded, use that.  otherwise, try to set a filter.
// note that a `handle` selector always results in filterExclude being set to false, ie.
// the selector defines the handle element(s).
if(this.params.handle)_setFilter(this.params.handle,false);else _setFilter(this.params.filter,this.params.filterExclude);};var Drop=function Drop(el,params,css,scope){this._class=css.droppable;this.params=params||{};this.rank=params.rank||0;this._activeClass=this.params.activeClass||css.active;this._hoverClass=this.params.hoverClass||css.hover;Super.apply(this,arguments);var hover=false;this.allowLoopback=this.params.allowLoopback!==false;this.setActive=function(val){this.params[val?"addClass":"removeClass"](this.el,this._activeClass);};this.updatePosition=function(){this.position=this.params.getPosition(this.el);this.pagePosition=this.params.getPosition(this.el,true);this.size=this.params.getSize(this.el);};this.canDrop=this.params.canDrop||function(drag){return true;};this.isHover=function(){return hover;};this.setHover=function(drag,val,e){// if turning off hover but this was not the drag that caused the hover, ignore.
if(val||this.el._katavorioDragHover==null||this.el._katavorioDragHover==drag.el._katavorio){this.params[val?"addClass":"removeClass"](this.el,this._hoverClass);//this.el._katavorioDragHover = val ? drag.el._katavorio : null;
this.el._katavorioDragHover=val?drag.el._katavorio:null;if(hover!==val)this.params.events[val?"over":"out"]({el:this.el,e:e,drag:drag,drop:this});hover=val;}};this.drop=function(drag,event){return this.params.events["drop"]({drag:drag,e:event,drop:this});};this.destroy=function(){this._class=null;this._activeClass=null;this._hoverClass=null;//this.params = null;
hover=null;//this.el = null;
};};var _uuid=function _uuid(){return'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){var r=Math.random()*16|0,v=c=='x'?r:r&0x3|0x8;return v.toString(16);});};var _rankSort=function _rankSort(a,b){return a.rank<b.rank?1:a.rank>b.rank?-1:0;};var _gel=function _gel(el){if(el==null)return null;el=typeof el==="string"||el.constructor==String?document.getElementById(el):el;if(el==null)return null;el._katavorio=el._katavorio||_uuid();return el;};root.Katavorio=function(katavorioParams){var _selection=[],_selectionMap={};this._dragsByScope={};this._dropsByScope={};var _zoom=1,_reg=function _reg(obj,map){_each(obj,function(_obj){for(var i=0;i<_obj.scopes.length;i++){map[_obj.scopes[i]]=map[_obj.scopes[i]]||[];map[_obj.scopes[i]].push(_obj);}});},_unreg=function _unreg(obj,map){var c=0;_each(obj,function(_obj){for(var i=0;i<_obj.scopes.length;i++){if(map[_obj.scopes[i]]){var idx=katavorioParams.indexOf(map[_obj.scopes[i]],_obj);if(idx!=-1){map[_obj.scopes[i]].splice(idx,1);c++;}}}});return c>0;},_getMatchingDroppables=this.getMatchingDroppables=function(drag){var dd=[],_m={};for(var i=0;i<drag.scopes.length;i++){var _dd=this._dropsByScope[drag.scopes[i]];if(_dd){for(var j=0;j<_dd.length;j++){if(_dd[j].canDrop(drag)&&!_m[_dd[j].uuid]&&(_dd[j].allowLoopback||_dd[j].el!==drag.el)){_m[_dd[j].uuid]=true;dd.push(_dd[j]);}}}}dd.sort(_rankSort);return dd;},_prepareParams=function(p){p=p||{};var _p={events:{}},i;for(i in katavorioParams){_p[i]=katavorioParams[i];}for(i in p){_p[i]=p[i];}// events
for(i=0;i<_events.length;i++){_p.events[_events[i]]=p[_events[i]]||_devNull;}_p.katavorio=this;return _p;}.bind(this),_mistletoe=function(existingDrag,params){for(var i=0;i<_events.length;i++){if(params[_events[i]]){existingDrag.on(_events[i],params[_events[i]]);}}}.bind(this),_css={},overrideCss=katavorioParams.css||{},_scope=katavorioParams.scope||_defaultScope;// prepare map of css classes based on defaults frst, then optional overrides
for(var i in _classes){_css[i]=_classes[i];}for(var i in overrideCss){_css[i]=overrideCss[i];}var inputFilterSelector=katavorioParams.inputFilterSelector||_defaultInputFilterSelector;/**
         * Gets the selector identifying which input elements to filter from drag events.
         * @method getInputFilterSelector
         * @return {String} Current input filter selector.
         */this.getInputFilterSelector=function(){return inputFilterSelector;};/**
         * Sets the selector identifying which input elements to filter from drag events.
         * @method setInputFilterSelector
         * @param {String} selector Input filter selector to set.
         * @return {Katavorio} Current instance; method may be chained.
         */this.setInputFilterSelector=function(selector){inputFilterSelector=selector;return this;};this.draggable=function(el,params){var o=[];_each(el,function(_el){_el=_gel(_el);if(_el!=null){if(_el._katavorioDrag==null){var p=_prepareParams(params);_el._katavorioDrag=new Drag(_el,p,_css,_scope);_reg(_el._katavorioDrag,this._dragsByScope);o.push(_el._katavorioDrag);katavorioParams.addClass(_el,_css.draggable);}else{_mistletoe(_el._katavorioDrag,params);}}}.bind(this));return o;};this.droppable=function(el,params){var o=[];_each(el,function(_el){_el=_gel(_el);if(_el!=null){var drop=new Drop(_el,_prepareParams(params),_css,_scope);_el._katavorioDrop=_el._katavorioDrop||[];_el._katavorioDrop.push(drop);_reg(drop,this._dropsByScope);o.push(drop);katavorioParams.addClass(_el,_css.droppable);}}.bind(this));return o;};/**
         * @name Katavorio#select
         * @function
         * @desc Adds an element to the current selection (for multiple node drag)
         * @param {Element|String} DOM element - or id of the element - to add.
         */this.select=function(el){_each(el,function(){var _el=_gel(this);if(_el&&_el._katavorioDrag){if(!_selectionMap[_el._katavorio]){_selection.push(_el._katavorioDrag);_selectionMap[_el._katavorio]=[_el,_selection.length-1];katavorioParams.addClass(_el,_css.selected);}}});return this;};/**
         * @name Katavorio#deselect
         * @function
         * @desc Removes an element from the current selection (for multiple node drag)
         * @param {Element|String} DOM element - or id of the element - to remove.
         */this.deselect=function(el){_each(el,function(){var _el=_gel(this);if(_el&&_el._katavorio){var e=_selectionMap[_el._katavorio];if(e){var _s=[];for(var i=0;i<_selection.length;i++){if(_selection[i].el!==_el)_s.push(_selection[i]);}_selection=_s;delete _selectionMap[_el._katavorio];katavorioParams.removeClass(_el,_css.selected);}}});return this;};this.deselectAll=function(){for(var i in _selectionMap){var d=_selectionMap[i];katavorioParams.removeClass(d[0],_css.selected);}_selection.length=0;_selectionMap={};};this.markSelection=function(drag){_foreach(_selection,function(e){e.mark();},drag);};this.markPosses=function(drag){if(drag.posses){_each(drag.posses,function(p){if(drag.posseRoles[p]&&_posses[p]){_foreach(_posses[p].members,function(d){d.mark();},drag);}});}};this.unmarkSelection=function(drag,event){_foreach(_selection,function(e){e.unmark(event);},drag);};this.unmarkPosses=function(drag,event){if(drag.posses){_each(drag.posses,function(p){if(drag.posseRoles[p]&&_posses[p]){_foreach(_posses[p].members,function(d){d.unmark(event,true);},drag);}});}};this.getSelection=function(){return _selection.slice(0);};this.updateSelection=function(dx,dy,drag){_foreach(_selection,function(e){e.moveBy(dx,dy);},drag);};var _posseAction=function _posseAction(fn,drag){if(drag.posses){_each(drag.posses,function(p){if(drag.posseRoles[p]&&_posses[p]){_foreach(_posses[p].members,function(e){fn(e);},drag);}});}};this.updatePosses=function(dx,dy,drag){_posseAction(function(e){e.moveBy(dx,dy);},drag);};this.notifyPosseDragStop=function(drag,evt){_posseAction(function(e){e.stop(evt,true);},drag);};this.notifySelectionDragStop=function(drag,evt){_foreach(_selection,function(e){e.stop(evt,true);},drag);};this.notifySelectionDragStart=function(drag,evt){_foreach(_selection,function(e){e.notifyStart(evt);},drag);};this.setZoom=function(z){_zoom=z;};this.getZoom=function(){return _zoom;};// does the work of changing scopes
var _scopeManip=function _scopeManip(kObj,scopes,map,fn){_each(kObj,function(_kObj){_unreg(_kObj,map);// deregister existing scopes
_kObj[fn](scopes);// set scopes
_reg(_kObj,map);// register new ones
});};_each(["set","add","remove","toggle"],function(v){this[v+"Scope"]=function(el,scopes){_scopeManip(el._katavorioDrag,scopes,this._dragsByScope,v+"Scope");_scopeManip(el._katavorioDrop,scopes,this._dropsByScope,v+"Scope");}.bind(this);this[v+"DragScope"]=function(el,scopes){_scopeManip(el.constructor===Drag?el:el._katavorioDrag,scopes,this._dragsByScope,v+"Scope");}.bind(this);this[v+"DropScope"]=function(el,scopes){_scopeManip(el.constructor===Drop?el:el._katavorioDrop,scopes,this._dropsByScope,v+"Scope");}.bind(this);}.bind(this));this.snapToGrid=function(x,y){for(var s in this._dragsByScope){_foreach(this._dragsByScope[s],function(d){d.snap(x,y);});}};this.getDragsForScope=function(s){return this._dragsByScope[s];};this.getDropsForScope=function(s){return this._dropsByScope[s];};var _destroy=function _destroy(el,type,map){el=_gel(el);if(el[type]){// remove from selection, if present.
var selIdx=_selection.indexOf(el[type]);if(selIdx>=0){_selection.splice(selIdx,1);}if(_unreg(el[type],map)){_each(el[type],function(kObj){kObj.destroy();});}delete el[type];}};this.elementRemoved=function(el){this.destroyDraggable(el);this.destroyDroppable(el);};this.destroyDraggable=function(el){_destroy(el,"_katavorioDrag",this._dragsByScope);};this.destroyDroppable=function(el){_destroy(el,"_katavorioDrop",this._dropsByScope);};this.reset=function(){this._dragsByScope={};this._dropsByScope={};_selection=[];_selectionMap={};_posses={};};// ----- groups
var _posses={};var _processOneSpec=function _processOneSpec(el,_spec,dontAddExisting){var posseId=_isString(_spec)?_spec:_spec.id;var active=_isString(_spec)?true:_spec.active!==false;var posse=_posses[posseId]||function(){var g={name:posseId,members:[]};_posses[posseId]=g;return g;}();_each(el,function(_el){if(_el._katavorioDrag){if(dontAddExisting&&_el._katavorioDrag.posseRoles[posse.name]!=null)return;_suggest(posse.members,_el._katavorioDrag);_suggest(_el._katavorioDrag.posses,posse.name);_el._katavorioDrag.posseRoles[posse.name]=active;}});return posse;};/**
         * Add the given element to the posse with the given id, creating the group if it at first does not exist.
         * @method addToPosse
         * @param {Element} el Element to add.
         * @param {String...|Object...} spec Variable args parameters. Each argument can be a either a String, indicating
         * the ID of a Posse to which the element should be added as an active participant, or an Object containing
         * `{ id:"posseId", active:false/true}`. In the latter case, if `active` is not provided it is assumed to be
         * true.
         * @returns {Posse|Posse[]} The Posse(s) to which the element(s) was/were added.
         */this.addToPosse=function(el,spec){var posses=[];for(var i=1;i<arguments.length;i++){posses.push(_processOneSpec(el,arguments[i]));}return posses.length==1?posses[0]:posses;};/**
         * Sets the posse(s) for the element with the given id, creating those that do not yet exist, and removing from
         * the element any current Posses that are not specified by this method call. This method will not change the
         * active/passive state if it is given a posse in which the element is already a member.
         * @method setPosse
         * @param {Element} el Element to set posse(s) on.
         * @param {String...|Object...} spec Variable args parameters. Each argument can be a either a String, indicating
         * the ID of a Posse to which the element should be added as an active participant, or an Object containing
         * `{ id:"posseId", active:false/true}`. In the latter case, if `active` is not provided it is assumed to be
         * true.
         * @returns {Posse|Posse[]} The Posse(s) to which the element(s) now belongs.
         */this.setPosse=function(el,spec){var posses=[];for(var i=1;i<arguments.length;i++){posses.push(_processOneSpec(el,arguments[i],true).name);}_each(el,function(_el){if(_el._katavorioDrag){var diff=_difference(_el._katavorioDrag.posses,posses);var p=[];Array.prototype.push.apply(p,_el._katavorioDrag.posses);for(var i=0;i<diff.length;i++){this.removeFromPosse(_el,diff[i]);}}}.bind(this));return posses.length==1?posses[0]:posses;};/**
         * Remove the given element from the given posse(s).
         * @method removeFromPosse
         * @param {Element} el Element to remove.
         * @param {String...} posseId Varargs parameter: one value for each posse to remove the element from.
         */this.removeFromPosse=function(el,posseId){if(arguments.length<2)throw new TypeError("No posse id provided for remove operation");for(var i=1;i<arguments.length;i++){posseId=arguments[i];_each(el,function(_el){if(_el._katavorioDrag&&_el._katavorioDrag.posses){var d=_el._katavorioDrag;_each(posseId,function(p){_vanquish(_posses[p].members,d);_vanquish(d.posses,p);delete d.posseRoles[p];});}});}};/**
         * Remove the given element from all Posses to which it belongs.
         * @method removeFromAllPosses
         * @param {Element|Element[]} el Element to remove from Posses.
         */this.removeFromAllPosses=function(el){_each(el,function(_el){if(_el._katavorioDrag&&_el._katavorioDrag.posses){var d=_el._katavorioDrag;_each(d.posses,function(p){_vanquish(_posses[p].members,d);});d.posses.length=0;d.posseRoles={};}});};/**
         * Changes the participation state for the element in the Posse with the given ID.
         * @param {Element|Element[]} el Element(s) to change state for.
         * @param {String} posseId ID of the Posse to change element state for.
         * @param {Boolean} state True to make active, false to make passive.
         */this.setPosseState=function(el,posseId,state){var posse=_posses[posseId];if(posse){_each(el,function(_el){if(_el._katavorioDrag&&_el._katavorioDrag.posses){_el._katavorioDrag.posseRoles[posse.name]=state;}});}};};root.Katavorio.version="0.19.2";if(true){exports.Katavorio=root.Katavorio;}}).call(typeof window!=='undefined'?window:this);/*
 * jsPlumb
 *
 * Title:jsPlumb 2.3.0
 *
 * Provides a way to visually connect elements on an HTML page, using SVG.
 *
 * This file contains utility functions that run in both browsers and headless.
 *
 * Copyright (c) 2010 - 2017 jsPlumb (hello@jsplumbtoolkit.com)
 *
 * http://jsplumbtoolkit.com
 * http://github.com/sporritt/jsplumb
 *
 * Dual licensed under the MIT and GPL2 licenses.
 */;(function(){var _isa=function _isa(a){return Object.prototype.toString.call(a)==="[object Array]";},_isnum=function _isnum(n){return Object.prototype.toString.call(n)==="[object Number]";},_iss=function _iss(s){return typeof s==="string";},_isb=function _isb(s){return typeof s==="boolean";},_isnull=function _isnull(s){return s==null;},_iso=function _iso(o){return o==null?false:Object.prototype.toString.call(o)==="[object Object]";},_isd=function _isd(o){return Object.prototype.toString.call(o)==="[object Date]";},_isf=function _isf(o){return Object.prototype.toString.call(o)==="[object Function]";},_isNamedFunction=function _isNamedFunction(o){return _isf(o)&&o.name!=null&&o.name.length>0;},_ise=function _ise(o){for(var i in o){if(o.hasOwnProperty(i))return false;}return true;};var root=this;root.jsPlumbUtil={isArray:_isa,isString:_iss,isBoolean:_isb,isNull:_isnull,isObject:_iso,isDate:_isd,isFunction:_isf,isEmpty:_ise,isNumber:_isnum,clone:function clone(a){if(_iss(a))return""+a;else if(_isb(a))return!!a;else if(_isd(a))return new Date(a.getTime());else if(_isf(a))return a;else if(_isa(a)){var b=[];for(var i=0;i<a.length;i++){b.push(this.clone(a[i]));}return b;}else if(_iso(a)){var c={};for(var j in a){c[j]=this.clone(a[j]);}return c;}else return a;},merge:function merge(a,b,collations){// first change the collations array - if present - into a lookup table, because its faster.
var cMap={},ar,i;collations=collations||[];for(i=0;i<collations.length;i++){cMap[collations[i]]=true;}var c=this.clone(a);for(i in b){if(c[i]==null){c[i]=b[i];}else if(_iss(b[i])||_isb(b[i])){if(!cMap[i]){c[i]=b[i];// if we dont want to collate, just copy it in.
}else{ar=[];// if c's object is also an array we can keep its values.
ar.push.apply(ar,_isa(c[i])?c[i]:[c[i]]);ar.push.apply(ar,_isa(b[i])?b[i]:[b[i]]);c[i]=ar;}}else{if(_isa(b[i])){ar=[];// if c's object is also an array we can keep its values.
if(_isa(c[i]))ar.push.apply(ar,c[i]);ar.push.apply(ar,b[i]);c[i]=ar;}else if(_iso(b[i])){// overwite c's value with an object if it is not already one.
if(!_iso(c[i]))c[i]={};for(var j in b[i]){c[i][j]=b[i][j];}}}}return c;},replace:function replace(inObj,path,value){if(inObj==null)return;var q=inObj,t=q;path.replace(/([^\.])+/g,function(term,lc,pos,str){var array=term.match(/([^\[0-9]+){1}(\[)([0-9+])/),last=pos+term.length>=str.length,_getArray=function _getArray(){return t[array[1]]||function(){t[array[1]]=[];return t[array[1]];}();};if(last){// set term = value on current t, creating term as array if necessary.
if(array)_getArray()[array[3]]=value;else t[term]=value;}else{// set to current t[term], creating t[term] if necessary.
if(array){var a=_getArray();t=a[array[3]]||function(){a[array[3]]={};return a[array[3]];}();}else t=t[term]||function(){t[term]={};return t[term];}();}});return inObj;},//
// chain a list of functions, supplied by [ object, method name, args ], and return on the first
// one that returns the failValue. if none return the failValue, return the successValue.
//
functionChain:function functionChain(successValue,failValue,fns){for(var i=0;i<fns.length;i++){var o=fns[i][0][fns[i][1]].apply(fns[i][0],fns[i][2]);if(o===failValue){return o;}}return successValue;},// take the given model and expand out any parameters.
// 'functionPrefix' is optional, and if present, helps jsplumb figure out what to do if a value is a Function.
// if you do not provide it, jsplumb will run the given values through any functions it finds, and use the function's
// output as the value in the result. if you do provide the prefix, only functions that are named and have this prefix
// will be executed; other functions will be passed as values to the output.
populate:function populate(model,values,functionPrefix){// for a string, see if it has parameter matches, and if so, try to make the substitutions.
var getValue=function getValue(fromString){var matches=fromString.match(/(\${.*?})/g);if(matches!=null){for(var i=0;i<matches.length;i++){var val=values[matches[i].substring(2,matches[i].length-1)]||"";if(val!=null){fromString=fromString.replace(matches[i],val);}}}return fromString;},// process one entry.
_one=function _one(d){if(d!=null){if(_iss(d)){return getValue(d);}else if(_isf(d)&&(functionPrefix==null||(d.name||"").indexOf(functionPrefix)===0)){return d(values);}else if(_isa(d)){var r=[];for(var i=0;i<d.length;i++){r.push(_one(d[i]));}return r;}else if(_iso(d)){var s={};for(var j in d){s[j]=_one(d[j]);}return s;}else{return d;}}};return _one(model);},findWithFunction:function findWithFunction(a,f){if(a)for(var i=0;i<a.length;i++){if(f(a[i]))return i;}return-1;},removeWithFunction:function removeWithFunction(a,f){var idx=root.jsPlumbUtil.findWithFunction(a,f);if(idx>-1)a.splice(idx,1);return idx!=-1;},remove:function remove(l,v){var idx=l.indexOf(v);if(idx>-1)l.splice(idx,1);return idx!=-1;},// TODO support insert index
addWithFunction:function addWithFunction(list,item,hashFunction){if(root.jsPlumbUtil.findWithFunction(list,hashFunction)==-1)list.push(item);},addToList:function addToList(map,key,value,insertAtStart){var l=map[key];if(l==null){l=[];map[key]=l;}l[insertAtStart?"unshift":"push"](value);return l;},suggest:function suggest(list,item,insertAtHead){if(list.indexOf(item)===-1){if(insertAtHead){list.unshift(item);}else{list.push(item);}return true;}return false;},//
// extends the given obj (which can be an array) with the given constructor function, prototype functions, and
// class members, any of which may be null.
//
extend:function extend(child,parent,_protoFn){var i;parent=_isa(parent)?parent:[parent];for(i=0;i<parent.length;i++){for(var j in parent[i].prototype){if(parent[i].prototype.hasOwnProperty(j)){child.prototype[j]=parent[i].prototype[j];}}}var _makeFn=function _makeFn(name,protoFn){return function(){for(i=0;i<parent.length;i++){if(parent[i].prototype[name])parent[i].prototype[name].apply(this,arguments);}return protoFn.apply(this,arguments);};};var _oneSet=function _oneSet(fns){for(var k in fns){child.prototype[k]=_makeFn(k,fns[k]);}};if(arguments.length>2){for(i=2;i<arguments.length;i++){_oneSet(arguments[i]);}}return child;},uuid:function uuid(){return'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){var r=Math.random()*16|0,v=c=='x'?r:r&0x3|0x8;return v.toString(16);});},logEnabled:true,log:function log(){if(root.jsPlumbUtil.logEnabled&&typeof console!="undefined"){try{var msg=arguments[arguments.length-1];console.log(msg);}catch(e){}}},/**
         * Wraps one function with another, creating a placeholder for the
         * wrapped function if it was null. this is used to wrap the various
         * drag/drop event functions - to allow jsPlumb to be notified of
         * important lifecycle events without imposing itself on the user's
         * drag/drop functionality.
         * @method jsPlumbUtil.wrap
         * @param {Function} wrappedFunction original function to wrap; may be null.
         * @param {Function} newFunction function to wrap the original with.
         * @param {Object} [returnOnThisValue] Optional. Indicates that the wrappedFunction should
         * not be executed if the newFunction returns a value matching 'returnOnThisValue'.
         * note that this is a simple comparison and only works for primitives right now.
         */wrap:function wrap(wrappedFunction,newFunction,returnOnThisValue){wrappedFunction=wrappedFunction||function(){};newFunction=newFunction||function(){};return function(){var r=null;try{r=newFunction.apply(this,arguments);}catch(e){root.jsPlumbUtil.log("jsPlumb function failed : "+e);}if(returnOnThisValue==null||r!==returnOnThisValue){try{r=wrappedFunction.apply(this,arguments);}catch(e){root.jsPlumbUtil.log("wrapped function failed : "+e);}}return r;};}};root.jsPlumbUtil.EventGenerator=function(){var _listeners={},eventsSuspended=false,// this is a list of events that should re-throw any errors that occur during their dispatch. it is current private.
eventsToDieOn={"ready":true};this.bind=function(event,listener,insertAtStart){var _one=function _one(evt){root.jsPlumbUtil.addToList(_listeners,evt,listener,insertAtStart);listener.__jsPlumb=listener.__jsPlumb||{};listener.__jsPlumb[root.jsPlumbUtil.uuid()]=evt;};if(typeof event==="string")_one(event);else if(event.length!=null){for(var i=0;i<event.length;i++){_one(event[i]);}}return this;};this.fire=function(event,value,originalEvent){if(!eventsSuspended&&_listeners[event]){var l=_listeners[event].length,i=0,_gone=false,ret=null;if(!this.shouldFireEvent||this.shouldFireEvent(event,value,originalEvent)){while(!_gone&&i<l&&ret!==false){// doing it this way rather than catching and then possibly re-throwing means that an error propagated by this
// method will have the whole call stack available in the debugger.
if(eventsToDieOn[event])_listeners[event][i].apply(this,[value,originalEvent]);else{try{ret=_listeners[event][i].apply(this,[value,originalEvent]);}catch(e){root.jsPlumbUtil.log("jsPlumb: fire failed for event "+event+" : "+e);}}i++;if(_listeners==null||_listeners[event]==null)_gone=true;}}}return this;};this.unbind=function(eventOrListener,listener){if(arguments.length===0){_listeners={};}else if(arguments.length===1){if(typeof eventOrListener==="string")delete _listeners[eventOrListener];else if(eventOrListener.__jsPlumb){var evt;for(var i in eventOrListener.__jsPlumb){evt=eventOrListener.__jsPlumb[i];root.jsPlumbUtil.remove(_listeners[evt]||[],eventOrListener);}}}else if(arguments.length===2){root.jsPlumbUtil.remove(_listeners[eventOrListener]||[],listener);}return this;};this.getListener=function(forEvent){return _listeners[forEvent];};this.setSuspendEvents=function(val){eventsSuspended=val;};this.isSuspendEvents=function(){return eventsSuspended;};this.silently=function(fn){this.setSuspendEvents(true);try{fn();}catch(e){root.jsPlumbUtil.log("Cannot execute silent function "+e);}this.setSuspendEvents(false);};this.cleanupListeners=function(){for(var i in _listeners){_listeners[i]=null;}};};root.jsPlumbUtil.EventGenerator.prototype={cleanup:function cleanup(){this.cleanupListeners();}};if(true){exports.jsPlumbUtil=root.jsPlumbUtil;}}).call(typeof window!=='undefined'?window:this);/*
 * jsPlumb
 *
 * Title:jsPlumb 2.3.0
 *
 * Provides a way to visually connect elements on an HTML page, using SVG.
 *
 * This file contains utility functions that run in browsers only.
 *
 * Copyright (c) 2010 - 2017 jsPlumb (hello@jsplumbtoolkit.com)
 *
 * http://jsplumbtoolkit.com
 * http://github.com/sporritt/jsplumb
 *
 * Dual licensed under the MIT and GPL2 licenses.
 */;(function(){"use strict";var root=this;root.jsPlumbUtil.matchesSelector=function(el,selector,ctx){ctx=ctx||el.parentNode;var possibles=ctx.querySelectorAll(selector);for(var i=0;i<possibles.length;i++){if(possibles[i]===el)return true;}return false;};root.jsPlumbUtil.consume=function(e,doNotPreventDefault){if(e.stopPropagation)e.stopPropagation();else e.returnValue=false;if(!doNotPreventDefault&&e.preventDefault)e.preventDefault();};/*
    * Function: sizeElement
    * Helper to size and position an element. You would typically use
    * this when writing your own Connector or Endpoint implementation.
    *
    * Parameters:
    *  x - [int] x position for the element origin
    *  y - [int] y position for the element origin
    *  w - [int] width of the element
    *  h - [int] height of the element
    *
    */root.jsPlumbUtil.sizeElement=function(el,x,y,w,h){if(el){el.style.height=h+"px";el.height=h;el.style.width=w+"px";el.width=w;el.style.left=x+"px";el.style.top=y+"px";}};}).call(typeof window!=='undefined'?window:this);/*
 * jsPlumb
 * 
 * Title:jsPlumb 2.3.0
 * 
 * Provides a way to visually connect elements on an HTML page, using SVG.
 * 
 * This file contains the core code.
 *
 * Copyright (c) 2010 - 2017 jsPlumb (hello@jsplumbtoolkit.com)
 * 
 * http://jsplumbtoolkit.com
 * http://github.com/sporritt/jsplumb
 * 
 * Dual licensed under the MIT and GPL2 licenses.
 */(function(){"use strict";var root=this;var connectorTypes=[],rendererTypes;var _ju=root.jsPlumbUtil,/**
         * creates a timestamp, using milliseconds since 1970, but as a string.
         */_timestamp=function _timestamp(){return""+new Date().getTime();},// helper method to update the hover style whenever it, or paintStyle, changes.
// we use paintStyle as the foundation and merge hoverPaintStyle over the
// top.
_updateHoverStyle=function _updateHoverStyle(component){if(component._jsPlumb.paintStyle&&component._jsPlumb.hoverPaintStyle){var mergedHoverStyle={};jsPlumb.extend(mergedHoverStyle,component._jsPlumb.paintStyle);jsPlumb.extend(mergedHoverStyle,component._jsPlumb.hoverPaintStyle);delete component._jsPlumb.hoverPaintStyle;// we want the fill of paintStyle to override a gradient, if possible.
if(mergedHoverStyle.gradient&&component._jsPlumb.paintStyle.fill)delete mergedHoverStyle.gradient;component._jsPlumb.hoverPaintStyle=mergedHoverStyle;}},events=["tap","dbltap","click","dblclick","mouseover","mouseout","mousemove","mousedown","mouseup","contextmenu"],eventFilters={"mouseout":"mouseleave","mouseexit":"mouseleave"},_updateAttachedElements=function _updateAttachedElements(component,state,timestamp,sourceElement){var affectedElements=component.getAttachedElements();if(affectedElements){for(var i=0,j=affectedElements.length;i<j;i++){if(!sourceElement||sourceElement!=affectedElements[i])affectedElements[i].setHover(state,true,timestamp);// tell the attached elements not to inform their own attached elements.
}}},_splitType=function _splitType(t){return t==null?null:t.split(" ");},_mapType=function _mapType(map,obj,typeId){for(var i in obj){map[i]=typeId;}},_each=function _each(fn,obj){obj=_ju.isArray(obj)||obj.length!=null&&!_ju.isString(obj)?obj:[obj];for(var i=0;i<obj.length;i++){try{fn.apply(obj[i],[obj[i]]);}catch(e){_ju.log(".each iteration failed : "+e);}}},_applyTypes=function _applyTypes(component,params,doNotRepaint){if(component.getDefaultType){var td=component.getTypeDescriptor(),map={};var defType=component.getDefaultType();var o=_ju.merge({},defType);_mapType(map,defType,"__default");for(var i=0,j=component._jsPlumb.types.length;i<j;i++){var tid=component._jsPlumb.types[i];if(tid!=="__default"){var _t=component._jsPlumb.instance.getType(tid,td);if(_t!=null){o=_ju.merge(o,_t,["cssClass"]);_mapType(map,_t,tid);}}}if(params){o=_ju.populate(o,params,"_");}component.applyType(o,doNotRepaint,map);if(!doNotRepaint)component.repaint();}},// ------------------------------ BEGIN jsPlumbUIComponent --------------------------------------------
jsPlumbUIComponent=root.jsPlumbUIComponent=function(params){_ju.EventGenerator.apply(this,arguments);var self=this,a=arguments,idPrefix=self.idPrefix,id=idPrefix+new Date().getTime();this._jsPlumb={instance:params._jsPlumb,parameters:params.parameters||{},paintStyle:null,hoverPaintStyle:null,paintStyleInUse:null,hover:false,beforeDetach:params.beforeDetach,beforeDrop:params.beforeDrop,overlayPlacements:[],hoverClass:params.hoverClass||params._jsPlumb.Defaults.HoverClass,types:[],typeCache:{}};this.cacheTypeItem=function(key,item,typeId){this._jsPlumb.typeCache[typeId]=this._jsPlumb.typeCache[typeId]||{};this._jsPlumb.typeCache[typeId][key]=item;};this.getCachedTypeItem=function(key,typeId){return this._jsPlumb.typeCache[typeId]?this._jsPlumb.typeCache[typeId][key]:null;};this.getId=function(){return id;};// ----------------------------- default type --------------------------------------------
var o=params.overlays||[],oo={};if(this.defaultOverlayKeys){for(var i=0;i<this.defaultOverlayKeys.length;i++){Array.prototype.push.apply(o,this._jsPlumb.instance.Defaults[this.defaultOverlayKeys[i]]||[]);}for(i=0;i<o.length;i++){// if a string, convert to object representation so that we can store the typeid on it.
// also assign an id.
var fo=jsPlumb.convertToFullOverlaySpec(o[i]);oo[fo[1].id]=fo;}}var _defaultType={overlays:oo,parameters:params.parameters||{},scope:params.scope||this._jsPlumb.instance.getDefaultScope()};this.getDefaultType=function(){return _defaultType;};this.appendToDefaultType=function(obj){for(var i in obj){_defaultType[i]=obj[i];}};// ----------------------------- end default type --------------------------------------------
// all components can generate events
if(params.events){for(i in params.events){self.bind(i,params.events[i]);}}// all components get this clone function.
// TODO issue 116 showed a problem with this - it seems 'a' that is in
// the clone function's scope is shared by all invocations of it, the classic
// JS closure problem.  for now, jsPlumb does a version of this inline where
// it used to call clone.  but it would be nice to find some time to look
// further at this.
this.clone=function(){var o=Object.create(this.constructor.prototype);this.constructor.apply(o,a);return o;}.bind(this);// user can supply a beforeDetach callback, which will be executed before a detach
// is performed; returning false prevents the detach.
this.isDetachAllowed=function(connection){var r=true;if(this._jsPlumb.beforeDetach){try{r=this._jsPlumb.beforeDetach(connection);}catch(e){_ju.log("jsPlumb: beforeDetach callback failed",e);}}return r;};// user can supply a beforeDrop callback, which will be executed before a dropped
// connection is confirmed. user can return false to reject connection.
this.isDropAllowed=function(sourceId,targetId,scope,connection,dropEndpoint,source,target){var r=this._jsPlumb.instance.checkCondition("beforeDrop",{sourceId:sourceId,targetId:targetId,scope:scope,connection:connection,dropEndpoint:dropEndpoint,source:source,target:target});if(this._jsPlumb.beforeDrop){try{r=this._jsPlumb.beforeDrop({sourceId:sourceId,targetId:targetId,scope:scope,connection:connection,dropEndpoint:dropEndpoint,source:source,target:target});}catch(e){_ju.log("jsPlumb: beforeDrop callback failed",e);}}return r;};var domListeners=[];// sets the component associated with listener events. for instance, an overlay delegates
// its events back to a connector. but if the connector is swapped on the underlying connection,
// then this component must be changed. This is called by setConnector in the Connection class.
this.setListenerComponent=function(c){for(var i=0;i<domListeners.length;i++){domListeners[i][3]=c;}};};var _removeTypeCssHelper=function _removeTypeCssHelper(component,typeIndex){var typeId=component._jsPlumb.types[typeIndex],type=component._jsPlumb.instance.getType(typeId,component.getTypeDescriptor());if(type!=null){if(type.cssClass&&component.canvas)component._jsPlumb.instance.removeClass(component.canvas,type.cssClass);}};_ju.extend(root.jsPlumbUIComponent,_ju.EventGenerator,{getParameter:function getParameter(name){return this._jsPlumb.parameters[name];},setParameter:function setParameter(name,value){this._jsPlumb.parameters[name]=value;},getParameters:function getParameters(){return this._jsPlumb.parameters;},setParameters:function setParameters(p){this._jsPlumb.parameters=p;},getClass:function getClass(){return jsPlumb.getClass(this.canvas);},hasClass:function hasClass(clazz){return jsPlumb.hasClass(this.canvas,clazz);},addClass:function addClass(clazz){jsPlumb.addClass(this.canvas,clazz);},removeClass:function removeClass(clazz){jsPlumb.removeClass(this.canvas,clazz);},updateClasses:function updateClasses(classesToAdd,classesToRemove){jsPlumb.updateClasses(this.canvas,classesToAdd,classesToRemove);},setType:function setType(typeId,params,doNotRepaint){this.clearTypes();this._jsPlumb.types=_splitType(typeId)||[];_applyTypes(this,params,doNotRepaint);},getType:function getType(){return this._jsPlumb.types;},reapplyTypes:function reapplyTypes(params,doNotRepaint){_applyTypes(this,params,doNotRepaint);},hasType:function hasType(typeId){return this._jsPlumb.types.indexOf(typeId)!=-1;},addType:function addType(typeId,params,doNotRepaint){var t=_splitType(typeId),_cont=false;if(t!=null){for(var i=0,j=t.length;i<j;i++){if(!this.hasType(t[i])){this._jsPlumb.types.push(t[i]);_cont=true;}}if(_cont)_applyTypes(this,params,doNotRepaint);}},removeType:function removeType(typeId,params,doNotRepaint){var t=_splitType(typeId),_cont=false,_one=function(tt){var idx=this._jsPlumb.types.indexOf(tt);if(idx!=-1){// remove css class if necessary
_removeTypeCssHelper(this,idx);this._jsPlumb.types.splice(idx,1);return true;}return false;}.bind(this);if(t!=null){for(var i=0,j=t.length;i<j;i++){_cont=_one(t[i])||_cont;}if(_cont)_applyTypes(this,params,doNotRepaint);}},clearTypes:function clearTypes(params,doNotRepaint){var i=this._jsPlumb.types.length;for(var j=0;j<i;j++){_removeTypeCssHelper(this,0);this._jsPlumb.types.splice(0,1);}_applyTypes(this,params,doNotRepaint);},toggleType:function toggleType(typeId,params,doNotRepaint){var t=_splitType(typeId);if(t!=null){for(var i=0,j=t.length;i<j;i++){var idx=this._jsPlumb.types.indexOf(t[i]);if(idx!=-1){_removeTypeCssHelper(this,idx);this._jsPlumb.types.splice(idx,1);}else this._jsPlumb.types.push(t[i]);}_applyTypes(this,params,doNotRepaint);}},applyType:function applyType(t,doNotRepaint){this.setPaintStyle(t.paintStyle,doNotRepaint);this.setHoverPaintStyle(t.hoverPaintStyle,doNotRepaint);if(t.parameters){for(var i in t.parameters){this.setParameter(i,t.parameters[i]);}}this._jsPlumb.paintStyleInUse=this.getPaintStyle();},setPaintStyle:function setPaintStyle(style,doNotRepaint){//		    	this._jsPlumb.paintStyle = jsPlumb.extend({}, style);
// TODO figure out if we want components to clone paintStyle so as not to share it.
this._jsPlumb.paintStyle=style;this._jsPlumb.paintStyleInUse=this._jsPlumb.paintStyle;_updateHoverStyle(this);if(!doNotRepaint)this.repaint();},getPaintStyle:function getPaintStyle(){return this._jsPlumb.paintStyle;},setHoverPaintStyle:function setHoverPaintStyle(style,doNotRepaint){//this._jsPlumb.hoverPaintStyle = jsPlumb.extend({}, style);
// TODO figure out if we want components to clone paintStyle so as not to share it.		    	
this._jsPlumb.hoverPaintStyle=style;_updateHoverStyle(this);if(!doNotRepaint)this.repaint();},getHoverPaintStyle:function getHoverPaintStyle(){return this._jsPlumb.hoverPaintStyle;},destroy:function destroy(force){if(force||this.typeId==null){this.cleanupListeners();// this is on EventGenerator
this.clone=null;this._jsPlumb=null;}},isHover:function isHover(){return this._jsPlumb.hover;},setHover:function setHover(hover,ignoreAttachedElements,timestamp){// while dragging, we ignore these events.  this keeps the UI from flashing and
// swishing and whatevering.
if(this._jsPlumb&&!this._jsPlumb.instance.currentlyDragging&&!this._jsPlumb.instance.isHoverSuspended()){this._jsPlumb.hover=hover;if(this.canvas!=null){if(this._jsPlumb.instance.hoverClass!=null){var method=hover?"addClass":"removeClass";this._jsPlumb.instance[method](this.canvas,this._jsPlumb.instance.hoverClass);}if(this._jsPlumb.hoverClass!=null){this._jsPlumb.instance[method](this.canvas,this._jsPlumb.hoverClass);}}if(this._jsPlumb.hoverPaintStyle!=null){this._jsPlumb.paintStyleInUse=hover?this._jsPlumb.hoverPaintStyle:this._jsPlumb.paintStyle;if(!this._jsPlumb.instance.isSuspendDrawing()){timestamp=timestamp||_timestamp();this.repaint({timestamp:timestamp,recalc:false});}}// get the list of other affected elements, if supported by this component.
// for a connection, its the endpoints.  for an endpoint, its the connections! surprise.
if(this.getAttachedElements&&!ignoreAttachedElements)_updateAttachedElements(this,hover,_timestamp(),this);}}});// ------------------------------ END jsPlumbUIComponent --------------------------------------------
var _jsPlumbInstanceIndex=0,getInstanceIndex=function getInstanceIndex(){var i=_jsPlumbInstanceIndex+1;_jsPlumbInstanceIndex++;return i;};var jsPlumbInstance=root.jsPlumbInstance=function(_defaults){this.version="2.4.0";if(_defaults)jsPlumb.extend(this.Defaults,_defaults);this.logEnabled=this.Defaults.LogEnabled;this._connectionTypes={};this._endpointTypes={};_ju.EventGenerator.apply(this);var _currentInstance=this,_instanceIndex=getInstanceIndex(),_bb=_currentInstance.bind,_initialDefaults={},_zoom=1,_info=function _info(el){if(el==null)return null;else if(el.nodeType==3||el.nodeType==8){return{el:el,text:true};}else{var _el=_currentInstance.getElement(el);return{el:_el,id:_ju.isString(el)&&_el==null?el:_getId(_el)};}};this.getInstanceIndex=function(){return _instanceIndex;};this.setZoom=function(z,repaintEverything){_zoom=z;_currentInstance.fire("zoom",_zoom);if(repaintEverything)_currentInstance.repaintEverything();return true;};this.getZoom=function(){return _zoom;};for(var i in this.Defaults){_initialDefaults[i]=this.Defaults[i];}var _container,_containerDelegations=[];this.unbindContainer=function(){if(_container!=null&&_containerDelegations.length>0){for(var i=0;i<_containerDelegations.length;i++){_currentInstance.off(_container,_containerDelegations[i][0],_containerDelegations[i][1]);}}};this.setContainer=function(c){this.unbindContainer();// get container as dom element.
c=this.getElement(c);// move existing connections and endpoints, if any.
this.select().each(function(conn){conn.moveParent(c);});this.selectEndpoints().each(function(ep){ep.moveParent(c);});// set container.
var previousContainer=_container;_container=c;_containerDelegations.length=0;var eventAliases={"endpointclick":"endpointClick","endpointdblclick":"endpointDblClick"};var _oneDelegateHandler=function _oneDelegateHandler(id,e,componentType){var t=e.srcElement||e.target,jp=(t&&t.parentNode?t.parentNode._jsPlumb:null)||(t?t._jsPlumb:null)||(t&&t.parentNode&&t.parentNode.parentNode?t.parentNode.parentNode._jsPlumb:null);if(jp){jp.fire(id,jp,e);var alias=componentType?eventAliases[componentType+id]||id:id;// jsplumb also fires every event coming from components/overlays. That's what the test for `jp.component` is for.
_currentInstance.fire(alias,jp.component||jp,e);}};var _addOneDelegate=function _addOneDelegate(eventId,selector,fn){_containerDelegations.push([eventId,fn]);_currentInstance.on(_container,eventId,selector,fn);};// delegate one event on the container to jsplumb elements. it might be possible to
// abstract this out: each of endpoint, connection and overlay could register themselves with
// jsplumb as "component types" or whatever, and provide a suitable selector. this would be
// done by the renderer (although admittedly from 2.0 onwards we're not supporting vml anymore)
var _oneDelegate=function _oneDelegate(id){// connections.
_addOneDelegate(id,".jtk-connector",function(e){_oneDelegateHandler(id,e);});// endpoints. note they can have an enclosing div, or not.
_addOneDelegate(id,".jtk-endpoint",function(e){_oneDelegateHandler(id,e,"endpoint");});// overlays
_addOneDelegate(id,".jtk-overlay",function(e){_oneDelegateHandler(id,e);});};for(var i=0;i<events.length;i++){_oneDelegate(events[i]);}// managed elements
for(var elId in managedElements){var el=managedElements[elId].el;if(el.parentNode===previousContainer){previousContainer.removeChild(el);_container.appendChild(el);}}};this.getContainer=function(){return _container;};this.bind=function(event,fn){if("ready"===event&&initialized)fn();else _bb.apply(_currentInstance,[event,fn]);};_currentInstance.importDefaults=function(d){for(var i in d){_currentInstance.Defaults[i]=d[i];}if(d.Container)_currentInstance.setContainer(d.Container);return _currentInstance;};_currentInstance.restoreDefaults=function(){_currentInstance.Defaults=jsPlumb.extend({},_initialDefaults);return _currentInstance;};var log=null,initialized=false,// TODO remove from window scope
connections=[],// map of element id -> endpoint lists. an element can have an arbitrary
// number of endpoints on it, and not all of them have to be connected
// to anything.
endpointsByElement={},endpointsByUUID={},managedElements={},offsets={},offsetTimestamps={},draggableStates={},connectionBeingDragged=false,sizes=[],_suspendDrawing=false,_suspendedAt=null,DEFAULT_SCOPE=this.Defaults.Scope,_curIdStamp=1,_idstamp=function _idstamp(){return""+_curIdStamp++;},//
// appends an element to some other element, which is calculated as follows:
//
// 1. if Container exists, use that element.
// 2. if the 'parent' parameter exists, use that.
// 3. otherwise just use the root element.
//
//
_appendElement=function(el,parent){if(_container)_container.appendChild(el);else if(!parent)this.appendToRoot(el);else this.getElement(parent).appendChild(el);}.bind(this),//
// Draws an endpoint and its connections. this is the main entry point into drawing connections as well
// as endpoints, since jsPlumb is endpoint-centric under the hood.
//
// @param element element to draw (of type library specific element object)
// @param ui UI object from current library's event system. optional.
// @param timestamp timestamp for this paint cycle. used to speed things up a little by cutting down the amount of offset calculations we do.
// @param clearEdits defaults to false; indicates that mouse edits for connectors should be cleared
///
_draw=function _draw(element,ui,timestamp,clearEdits){if(!_suspendDrawing){var id=_getId(element),repaintEls,dm=_currentInstance.getDragManager();if(dm)repaintEls=dm.getElementsForDraggable(id);if(timestamp==null)timestamp=_timestamp();// update the offset of everything _before_ we try to draw anything.
var o=_updateOffset({elId:id,offset:ui,recalc:false,timestamp:timestamp});if(repaintEls&&o&&o.o){for(var i in repaintEls){_updateOffset({elId:repaintEls[i].id,offset:{left:o.o.left+repaintEls[i].offset.left,top:o.o.top+repaintEls[i].offset.top},recalc:false,timestamp:timestamp});}}_currentInstance.anchorManager.redraw(id,ui,timestamp,null,clearEdits);if(repaintEls){for(var j in repaintEls){_currentInstance.anchorManager.redraw(repaintEls[j].id,ui,timestamp,repaintEls[j].offset,clearEdits,true);}}}},//
// gets an Endpoint by uuid.
//
_getEndpoint=function _getEndpoint(uuid){return endpointsByUUID[uuid];},/**
             * inits a draggable if it's not already initialised.
             * TODO: somehow abstract this to the adapter, because the concept of "draggable" has no
             * place on the server.
             */_initDraggableIfNecessary=function _initDraggableIfNecessary(element,isDraggable,dragOptions,id,fireEvent){// move to DragManager?
if(!jsPlumb.headless){var _draggable=isDraggable==null?false:isDraggable;if(_draggable){if(jsPlumb.isDragSupported(element,_currentInstance)){var options=dragOptions||_currentInstance.Defaults.DragOptions;options=jsPlumb.extend({},options);// make a copy.
if(!jsPlumb.isAlreadyDraggable(element,_currentInstance)){var dragEvent=jsPlumb.dragEvents.drag,stopEvent=jsPlumb.dragEvents.stop,startEvent=jsPlumb.dragEvents.start,_started=false;_manage(id,element);options[startEvent]=_ju.wrap(options[startEvent],function(){_currentInstance.setHoverSuspended(true);_currentInstance.select({source:element}).addClass(_currentInstance.elementDraggingClass+" "+_currentInstance.sourceElementDraggingClass,true);_currentInstance.select({target:element}).addClass(_currentInstance.elementDraggingClass+" "+_currentInstance.targetElementDraggingClass,true);_currentInstance.setConnectionBeingDragged(true);if(options.canDrag)return dragOptions.canDrag();},false);options[dragEvent]=_ju.wrap(options[dragEvent],function(){// TODO: here we could actually use getDragObject, and then compute it ourselves,
// since every adapter does the same thing. but i'm not sure why YUI's getDragObject
// differs from getUIPosition so much
var ui=_currentInstance.getUIPosition(arguments,_currentInstance.getZoom());if(ui!=null){_draw(element,ui,null,true);if(_started)_currentInstance.addClass(element,"jtk-dragged");_started=true;}});options[stopEvent]=_ju.wrap(options[stopEvent],function(){var elements=arguments[0].selection,uip;var _one=function _one(_e){if(_e[1]!=null){// run the reported offset through the code that takes parent containers
// into account, to adjust if necessary (issue 554)
uip=_currentInstance.getUIPosition([{el:_e[2].el,pos:[_e[1].left,_e[1].top]}]);_draw(_e[2].el,uip);}_currentInstance.removeClass(_e[0],"jtk-dragged");_currentInstance.select({source:_e[2].el}).removeClass(_currentInstance.elementDraggingClass+" "+_currentInstance.sourceElementDraggingClass,true);_currentInstance.select({target:_e[2].el}).removeClass(_currentInstance.elementDraggingClass+" "+_currentInstance.targetElementDraggingClass,true);_currentInstance.getDragManager().dragEnded(_e[2].el);};for(var i=0;i<elements.length;i++){_one(elements[i]);}_started=false;_currentInstance.setHoverSuspended(false);_currentInstance.setConnectionBeingDragged(false);});var elId=_getId(element);// need ID
draggableStates[elId]=true;var draggable=draggableStates[elId];options.disabled=draggable==null?false:!draggable;_currentInstance.initDraggable(element,options);_currentInstance.getDragManager().register(element);if(fireEvent)_currentInstance.fire("elementDraggable",{el:element,options:options});}else{// already draggable. attach any start, drag or stop listeners to the current Drag.
if(dragOptions.force){_currentInstance.initDraggable(element,options);}}}}}},_scopeMatch=function _scopeMatch(e1,e2){var s1=e1.scope.split(/\s/),s2=e2.scope.split(/\s/);for(var i=0;i<s1.length;i++){for(var j=0;j<s2.length;j++){if(s2[j]==s1[i])return true;}}return false;},/*
         * prepares a final params object that can be passed to _newConnection, taking into account defaults, events, etc.
         */_prepareConnectionParams=function(params,referenceParams){var _p=jsPlumb.extend({},params);if(referenceParams)jsPlumb.extend(_p,referenceParams);// hotwire endpoints passed as source or target to sourceEndpoint/targetEndpoint, respectively.
if(_p.source){if(_p.source.endpoint)_p.sourceEndpoint=_p.source;else _p.source=_currentInstance.getElement(_p.source);}if(_p.target){if(_p.target.endpoint)_p.targetEndpoint=_p.target;else _p.target=_currentInstance.getElement(_p.target);}// test for endpoint uuids to connect
if(params.uuids){_p.sourceEndpoint=_getEndpoint(params.uuids[0]);_p.targetEndpoint=_getEndpoint(params.uuids[1]);}// now ensure that if we do have Endpoints already, they're not full.
// source:
if(_p.sourceEndpoint&&_p.sourceEndpoint.isFull()){_ju.log(_currentInstance,"could not add connection; source endpoint is full");return;}// target:
if(_p.targetEndpoint&&_p.targetEndpoint.isFull()){_ju.log(_currentInstance,"could not add connection; target endpoint is full");return;}// if source endpoint mandates connection type and nothing specified in our params, use it.
if(!_p.type&&_p.sourceEndpoint)_p.type=_p.sourceEndpoint.connectionType;// copy in any connectorOverlays that were specified on the source endpoint.
// it doesnt copy target endpoint overlays.  i'm not sure if we want it to or not.
if(_p.sourceEndpoint&&_p.sourceEndpoint.connectorOverlays){_p.overlays=_p.overlays||[];for(var i=0,j=_p.sourceEndpoint.connectorOverlays.length;i<j;i++){_p.overlays.push(_p.sourceEndpoint.connectorOverlays[i]);}}// scope
if(_p.sourceEndpoint&&_p.sourceEndpoint.scope){_p.scope=_p.sourceEndpoint.scope;}// pointer events
if(!_p["pointer-events"]&&_p.sourceEndpoint&&_p.sourceEndpoint.connectorPointerEvents)_p["pointer-events"]=_p.sourceEndpoint.connectorPointerEvents;var _mergeOverrides=function _mergeOverrides(def,values){var m=jsPlumb.extend({},def);for(var i in values){if(values[i])m[i]=values[i];}return m;};var _addEndpoint=function _addEndpoint(el,def,idx){return _currentInstance.addEndpoint(el,_mergeOverrides(def,{anchor:_p.anchors?_p.anchors[idx]:_p.anchor,endpoint:_p.endpoints?_p.endpoints[idx]:_p.endpoint,paintStyle:_p.endpointStyles?_p.endpointStyles[idx]:_p.endpointStyle,hoverPaintStyle:_p.endpointHoverStyles?_p.endpointHoverStyles[idx]:_p.endpointHoverStyle}));};// check for makeSource/makeTarget specs.
var _oneElementDef=function _oneElementDef(type,idx,defs,matchType){if(_p[type]&&!_p[type].endpoint&&!_p[type+"Endpoint"]&&!_p.newConnection){var tid=_getId(_p[type]),tep=defs[tid];tep=tep?tep[matchType]:null;if(tep){// if not enabled, return.
if(!tep.enabled)return false;var newEndpoint=tep.endpoint!=null&&tep.endpoint._jsPlumb?tep.endpoint:_addEndpoint(_p[type],tep.def,idx);if(newEndpoint.isFull())return false;_p[type+"Endpoint"]=newEndpoint;if(!_p.scope&&tep.def.scope)_p.scope=tep.def.scope;// provide scope if not already provided and endpoint def has one.
newEndpoint.setDeleteOnEmpty(true);if(tep.uniqueEndpoint){if(!tep.endpoint){tep.endpoint=newEndpoint;newEndpoint.setDeleteOnEmpty(false);}else newEndpoint.finalEndpoint=tep.endpoint;}}}};if(_oneElementDef("source",0,this.sourceEndpointDefinitions,_p.type||"default")===false)return;if(_oneElementDef("target",1,this.targetEndpointDefinitions,_p.type||"default")===false)return;// last, ensure scopes match
if(_p.sourceEndpoint&&_p.targetEndpoint)if(!_scopeMatch(_p.sourceEndpoint,_p.targetEndpoint))_p=null;return _p;}.bind(_currentInstance),_newConnection=function _newConnection(params){var connectionFunc=_currentInstance.Defaults.ConnectionType||_currentInstance.getDefaultConnectionType();params._jsPlumb=_currentInstance;params.newConnection=_newConnection;params.newEndpoint=_newEndpoint;params.endpointsByUUID=endpointsByUUID;params.endpointsByElement=endpointsByElement;params.finaliseConnection=_finaliseConnection;params.id="con_"+_idstamp();var con=new connectionFunc(params);// if the connection is draggable, then maybe we need to tell the target endpoint to init the
// dragging code. it won't run again if it already configured to be draggable.
if(con.isDetachable()){con.endpoints[0].initDraggable("_jsPlumbSource");con.endpoints[1].initDraggable("_jsPlumbTarget");}return con;},//
// adds the connection to the backing model, fires an event if necessary and then redraws
//
_finaliseConnection=_currentInstance.finaliseConnection=function(jpc,params,originalEvent,doInformAnchorManager){params=params||{};// add to list of connections (by scope).
if(!jpc.suspendedEndpoint)connections.push(jpc);jpc.pending=null;// turn off isTemporarySource on the source endpoint (only viable on first draw)
jpc.endpoints[0].isTemporarySource=false;// always inform the anchor manager
// except that if jpc has a suspended endpoint it's not true to say the
// connection is new; it has just (possibly) moved. the question is whether
// to make that call here or in the anchor manager.  i think perhaps here.
if(doInformAnchorManager!==false)_currentInstance.anchorManager.newConnection(jpc);// force a paint
_draw(jpc.source);// fire an event
if(!params.doNotFireConnectionEvent&&params.fireEvent!==false){var eventArgs={connection:jpc,source:jpc.source,target:jpc.target,sourceId:jpc.sourceId,targetId:jpc.targetId,sourceEndpoint:jpc.endpoints[0],targetEndpoint:jpc.endpoints[1]};_currentInstance.fire("connection",eventArgs,originalEvent);}},/*
         factory method to prepare a new endpoint.  this should always be used instead of creating Endpoints
         manually, since this method attaches event listeners and an id.
         */_newEndpoint=function _newEndpoint(params,id){var endpointFunc=_currentInstance.Defaults.EndpointType||jsPlumb.Endpoint;var _p=jsPlumb.extend({},params);_p._jsPlumb=_currentInstance;_p.newConnection=_newConnection;_p.newEndpoint=_newEndpoint;_p.endpointsByUUID=endpointsByUUID;_p.endpointsByElement=endpointsByElement;_p.fireDetachEvent=fireDetachEvent;_p.elementId=id||_getId(_p.source);var ep=new endpointFunc(_p);ep.id="ep_"+_idstamp();_manage(_p.elementId,_p.source);if(!jsPlumb.headless)_currentInstance.getDragManager().endpointAdded(_p.source,id);return ep;},/*
         * performs the given function operation on all the connections found
         * for the given element id; this means we find all the endpoints for
         * the given element, and then for each endpoint find the connectors
         * connected to it. then we pass each connection in to the given
         * function.
         */_operation=function _operation(elId,func,endpointFunc){var endpoints=endpointsByElement[elId];if(endpoints&&endpoints.length){for(var i=0,ii=endpoints.length;i<ii;i++){for(var j=0,jj=endpoints[i].connections.length;j<jj;j++){var retVal=func(endpoints[i].connections[j]);// if the function passed in returns true, we exit.
// most functions return false.
if(retVal)return;}if(endpointFunc)endpointFunc(endpoints[i]);}}},_setDraggable=function _setDraggable(element,draggable){return jsPlumb.each(element,function(el){if(_currentInstance.isDragSupported(el)){draggableStates[_currentInstance.getAttribute(el,"id")]=draggable;_currentInstance.setElementDraggable(el,draggable);}});},/*
         * private method to do the business of hiding/showing.
         *
         * @param el
         *            either Id of the element in question or a library specific
         *            object for the element.
         * @param state
         *            String specifying a value for the css 'display' property
         *            ('block' or 'none').
         */_setVisible=function _setVisible(el,state,alsoChangeEndpoints){state=state==="block";var endpointFunc=null;if(alsoChangeEndpoints){endpointFunc=function endpointFunc(ep){ep.setVisible(state,true,true);};}var info=_info(el);_operation(info.id,function(jpc){if(state&&alsoChangeEndpoints){// this test is necessary because this functionality is new, and i wanted to maintain backwards compatibility.
// this block will only set a connection to be visible if the other endpoint in the connection is also visible.
var oidx=jpc.sourceId===info.id?1:0;if(jpc.endpoints[oidx].isVisible())jpc.setVisible(true);}else// the default behaviour for show, and what always happens for hide, is to just set the visibility without getting clever.
jpc.setVisible(state);},endpointFunc);},/*
         * toggles the draggable state of the given element(s).
         * el is either an id, or an element object, or a list of ids/element objects.
         */_toggleDraggable=function _toggleDraggable(el){var state;jsPlumb.each(el,function(el){var elId=_currentInstance.getAttribute(el,"id");state=draggableStates[elId]==null?false:draggableStates[elId];state=!state;draggableStates[elId]=state;_currentInstance.setDraggable(el,state);return state;}.bind(this));return state;},/**
             * private method to do the business of toggling hiding/showing.
             */_toggleVisible=function _toggleVisible(elId,changeEndpoints){var endpointFunc=null;if(changeEndpoints){endpointFunc=function endpointFunc(ep){var state=ep.isVisible();ep.setVisible(!state);};}_operation(elId,function(jpc){var state=jpc.isVisible();jpc.setVisible(!state);},endpointFunc);},// TODO comparison performance
_getCachedData=function _getCachedData(elId){var o=offsets[elId];if(!o)return _updateOffset({elId:elId});else return{o:o,s:sizes[elId]};},/**
             * gets an id for the given element, creating and setting one if
             * necessary.  the id is of the form
             *
             *    jsPlumb_<instance index>_<index in instance>
             *
             * where "index in instance" is a monotonically increasing integer that starts at 0,
             * for each instance.  this method is used not only to assign ids to elements that do not
             * have them but also to connections and endpoints.
             */_getId=function _getId(element,uuid,doNotCreateIfNotFound){if(_ju.isString(element))return element;if(element==null)return null;var id=_currentInstance.getAttribute(element,"id");if(!id||id==="undefined"){// check if fixed uuid parameter is given
if(arguments.length==2&&arguments[1]!==undefined)id=uuid;else if(arguments.length==1||arguments.length==3&&!arguments[2])id="jsPlumb_"+_instanceIndex+"_"+_idstamp();if(!doNotCreateIfNotFound)_currentInstance.setAttribute(element,"id",id);}return id;};this.setConnectionBeingDragged=function(v){connectionBeingDragged=v;};this.isConnectionBeingDragged=function(){return connectionBeingDragged;};/**
         * Returns a map of all the elements this jsPlumbInstance is currently managing.
         * @returns {Object} Map of [id-> {el, endpoint[], connection, position}] information.
         */this.getManagedElements=function(){return managedElements;};this.connectorClass="jtk-connector";this.connectorOutlineClass="jtk-connector-outline";this.editableConnectorClass="jtk-connector-editable";this.connectedClass="jtk-connected";this.hoverClass="jtk-hover";this.endpointClass="jtk-endpoint";this.endpointConnectedClass="jtk-endpoint-connected";this.endpointFullClass="jtk-endpoint-full";this.endpointDropAllowedClass="jtk-endpoint-drop-allowed";this.endpointDropForbiddenClass="jtk-endpoint-drop-forbidden";this.overlayClass="jtk-overlay";this.draggingClass="jtk-dragging";this.elementDraggingClass="jtk-element-dragging";this.sourceElementDraggingClass="jtk-source-element-dragging";this.targetElementDraggingClass="jtk-target-element-dragging";this.endpointAnchorClassPrefix="jtk-endpoint-anchor";this.hoverSourceClass="jtk-source-hover";this.hoverTargetClass="jtk-target-hover";this.dragSelectClass="jtk-drag-select";this.Anchors={};this.Connectors={"svg":{}};this.Endpoints={"svg":{}};this.Overlays={"svg":{}};this.ConnectorRenderers={};this.SVG="svg";// --------------------------- jsPlumbInstance public API ---------------------------------------------------------
this.addEndpoint=function(el,params,referenceParams){referenceParams=referenceParams||{};var p=jsPlumb.extend({},referenceParams);jsPlumb.extend(p,params);p.endpoint=p.endpoint||_currentInstance.Defaults.Endpoint;p.paintStyle=p.paintStyle||_currentInstance.Defaults.EndpointStyle;var results=[],inputs=_ju.isArray(el)||el.length!=null&&!_ju.isString(el)?el:[el];for(var i=0,j=inputs.length;i<j;i++){p.source=_currentInstance.getElement(inputs[i]);_ensureContainer(p.source);var id=_getId(p.source),e=_newEndpoint(p,id);// ensure element is managed.
var myOffset=_manage(id,p.source).info.o;_ju.addToList(endpointsByElement,id,e);if(!_suspendDrawing){e.paint({anchorLoc:e.anchor.compute({xy:[myOffset.left,myOffset.top],wh:sizes[id],element:e,timestamp:_suspendedAt}),timestamp:_suspendedAt});}results.push(e);}return results.length==1?results[0]:results;};this.addEndpoints=function(el,endpoints,referenceParams){var results=[];for(var i=0,j=endpoints.length;i<j;i++){var e=_currentInstance.addEndpoint(el,endpoints[i],referenceParams);if(_ju.isArray(e))Array.prototype.push.apply(results,e);else results.push(e);}return results;};this.animate=function(el,properties,options){if(!this.animationSupported)return false;options=options||{};var del=_currentInstance.getElement(el),id=_getId(del),stepFunction=jsPlumb.animEvents.step,completeFunction=jsPlumb.animEvents.complete;options[stepFunction]=_ju.wrap(options[stepFunction],function(){_currentInstance.revalidate(id);});// onComplete repaints, just to make sure everything looks good at the end of the animation.
options[completeFunction]=_ju.wrap(options[completeFunction],function(){_currentInstance.revalidate(id);});_currentInstance.doAnimate(del,properties,options);};/**
         * checks for a listener for the given condition, executing it if found, passing in the given value.
         * condition listeners would have been attached using "bind" (which is, you could argue, now overloaded, since
         * firing click events etc is a bit different to what this does).  i thought about adding a "bindCondition"
         * or something, but decided against it, for the sake of simplicity. jsPlumb will never fire one of these
         * condition events anyway.
         */this.checkCondition=function(conditionName,args){var l=_currentInstance.getListener(conditionName),r=true;if(l&&l.length>0){var values=Array.prototype.slice.call(arguments,1);try{for(var i=0,j=l.length;i<j;i++){r=r&&l[i].apply(l[i],values);}}catch(e){_ju.log(_currentInstance,"cannot check condition ["+conditionName+"]"+e);}}return r;};this.connect=function(params,referenceParams){// prepare a final set of parameters to create connection with
var _p=_prepareConnectionParams(params,referenceParams),jpc;// TODO probably a nicer return value if the connection was not made.  _prepareConnectionParams
// will return null (and log something) if either endpoint was full.  what would be nicer is to
// create a dedicated 'error' object.
if(_p){if(_p.source==null&&_p.sourceEndpoint==null){_ju.log("Cannot establish connection - source does not exist");return;}if(_p.target==null&&_p.targetEndpoint==null){_ju.log("Cannot establish connection - target does not exist");return;}_ensureContainer(_p.source);// create the connection.  it is not yet registered
jpc=_newConnection(_p);// now add it the model, fire an event, and redraw
_finaliseConnection(jpc,_p);}return jpc;};var stTypes=[{el:"source",elId:"sourceId",epDefs:"sourceEndpointDefinitions"},{el:"target",elId:"targetId",epDefs:"targetEndpointDefinitions"}];var _set=function(c,el,idx,doNotRepaint){var ep,_st=stTypes[idx],cId=c[_st.elId],cEl=c[_st.el],sid,sep,oldEndpoint=c.endpoints[idx];var evtParams={index:idx,originalSourceId:idx===0?cId:c.sourceId,newSourceId:c.sourceId,originalTargetId:idx==1?cId:c.targetId,newTargetId:c.targetId,connection:c};if(el.constructor==jsPlumb.Endpoint){ep=el;ep.addConnection(c);el=ep.element;}else{sid=_getId(el);sep=this[_st.epDefs][sid];if(sid===c[_st.elId])ep=null;// dont change source/target if the element is already the one given.
else if(sep){for(var t in sep){if(!sep[t].enabled)return;ep=sep[t].endpoint!=null&&sep[t].endpoint._jsPlumb?sep[t].endpoint:this.addEndpoint(el,sep[t].def);if(sep[t].uniqueEndpoint){sep[t].endpoint=ep;}ep.addConnection(c);}}else{ep=c.makeEndpoint(idx===0,el,sid);}}if(ep!=null){oldEndpoint.detachFromConnection(c);c.endpoints[idx]=ep;c[_st.el]=ep.element;c[_st.elId]=ep.elementId;evtParams[idx===0?"newSourceId":"newTargetId"]=ep.elementId;fireMoveEvent(evtParams);if(!doNotRepaint){c.repaint();}}evtParams.element=el;return evtParams;}.bind(this);this.setSource=function(connection,el,doNotRepaint){var p=_set(connection,el,0,doNotRepaint);this.anchorManager.sourceChanged(p.originalSourceId,p.newSourceId,connection,p.el);};this.setTarget=function(connection,el,doNotRepaint){var p=_set(connection,el,1,doNotRepaint);this.anchorManager.updateOtherEndpoint(p.originalSourceId,p.originalTargetId,p.newTargetId,connection);};this.deleteEndpoint=function(object,dontUpdateHover,deleteAttachedObjects){var endpoint=typeof object==="string"?endpointsByUUID[object]:object;if(endpoint){_currentInstance.deleteObject({endpoint:endpoint,dontUpdateHover:dontUpdateHover,deleteAttachedObjects:deleteAttachedObjects});}return _currentInstance;};this.deleteEveryEndpoint=function(){var _is=_currentInstance.setSuspendDrawing(true);for(var id in endpointsByElement){var endpoints=endpointsByElement[id];if(endpoints&&endpoints.length){for(var i=0,j=endpoints.length;i<j;i++){_currentInstance.deleteEndpoint(endpoints[i],true);}}}endpointsByElement={};managedElements={};endpointsByUUID={};offsets={};offsetTimestamps={};_currentInstance.anchorManager.reset();_currentInstance.getDragManager().reset();if(!_is){_currentInstance.setSuspendDrawing(false);}return _currentInstance;};var fireDetachEvent=function fireDetachEvent(jpc,doFireEvent,originalEvent){// may have been given a connection, or in special cases, an object
var connType=_currentInstance.Defaults.ConnectionType||_currentInstance.getDefaultConnectionType(),argIsConnection=jpc.constructor==connType,params=argIsConnection?{connection:jpc,source:jpc.source,target:jpc.target,sourceId:jpc.sourceId,targetId:jpc.targetId,sourceEndpoint:jpc.endpoints[0],targetEndpoint:jpc.endpoints[1]}:jpc;if(doFireEvent){_currentInstance.fire("connectionDetached",params,originalEvent);}// always fire this. used by internal jsplumb stuff.
_currentInstance.fire("internal.connectionDetached",params,originalEvent);_currentInstance.anchorManager.connectionDetached(params);};var fireMoveEvent=_currentInstance.fireMoveEvent=function(params,evt){_currentInstance.fire("connectionMoved",params,evt);};this.unregisterEndpoint=function(endpoint){if(endpoint._jsPlumb.uuid){endpointsByUUID[endpoint._jsPlumb.uuid]=null;}_currentInstance.anchorManager.deleteEndpoint(endpoint);// TODO at least replace this with a removeWithFunction call.
for(var e in endpointsByElement){var endpoints=endpointsByElement[e];if(endpoints){var newEndpoints=[];for(var i=0,j=endpoints.length;i<j;i++){if(endpoints[i]!=endpoint)newEndpoints.push(endpoints[i]);}endpointsByElement[e]=newEndpoints;}if(endpointsByElement[e].length<1){delete endpointsByElement[e];}}};var IS_DETACH_ALLOWED="isDetachAllowed";var BEFORE_DETACH="beforeDetach";var CHECK_CONDITION="checkCondition";/**
         * Deletes a Connection.
         * @method deleteConnection
         * @param connection Connection to delete
         * @param {Object} [params] Optional delete parameters
         * @param {Boolean} [params.doNotFireEvent=false] If true, a connection detached event will not be fired. Otherwise one will.
         * @param {Boolean} [params.force=false] If true, the connection will be deleted even if a beforeDetach interceptor tries to stop the deletion.
         * @returns {Boolean} True if the connection was deleted, false otherwise.
         */this.deleteConnection=function(connection,params){if(connection!=null){params=params||{};if(params.force||_ju.functionChain(true,false,[[connection.endpoints[0],IS_DETACH_ALLOWED,[connection]],[connection.endpoints[1],IS_DETACH_ALLOWED,[connection]],[connection,IS_DETACH_ALLOWED,[connection]],[_currentInstance,CHECK_CONDITION,[BEFORE_DETACH,connection]]])){connection.setHover(false);fireDetachEvent(connection,!connection.pending&&params.fireEvent!==false,params.originalEvent);connection.endpoints[0].detachFromConnection(connection);connection.endpoints[1].detachFromConnection(connection);_ju.removeWithFunction(connections,function(_c){return connection.id==_c.id;});connection.cleanup();connection.destroy();return true;}}return false;};/**
         * Remove all Connections from all elements, but leaves Endpoints in place ((unless a connection is set to auto delete its Endpoints).
         * @method deleteEveryConnection
         * @param {Object} [params] optional params object for the call
         * @param {Boolean} [params.fireEvent=true] Whether or not to fire detach events
         * @param {Boolean} [params.forceDetach=false] If true, this call will ignore any `beforeDetach` interceptors.
         * @returns {Number} The number of connections that were deleted.
         */this.deleteEveryConnection=function(params){params=params||{};var count=connections.length,deletedCount=0;_currentInstance.batch(function(){for(var i=0;i<count;i++){deletedCount+=_currentInstance.deleteConnection(connections[0],params)?1:0;}});return deletedCount;};/**
         * Removes all an element's Connections.
         * @method deleteConnectionsForElement
         * @param {Object} el Either the id of the element, or a selector for the element.
         * @param {Object} [params] Optional parameters.
         * @param {Boolean} [params.fireEvent=true] Whether or not to fire the detach event.
         * @param {Boolean} [params.forceDetach=false] If true, this call will ignore any `beforeDetach` interceptors.
         * @return {jsPlumbInstance} The current jsPlumb instance.
         */this.deleteConnectionsForElement=function(el,params){params=params||{};el=_currentInstance.getElement(el);var id=_getId(el),endpoints=endpointsByElement[id];if(endpoints&&endpoints.length){for(var i=0,j=endpoints.length;i<j;i++){endpoints[i].deleteEveryConnection(params);}}return _currentInstance;};/// not public.  but of course its exposed. how to change this.
this.deleteObject=function(params){var result={endpoints:{},connections:{},endpointCount:0,connectionCount:0},deleteAttachedObjects=params.deleteAttachedObjects!==false;var unravelConnection=function unravelConnection(connection){if(connection!=null&&result.connections[connection.id]==null){if(!params.dontUpdateHover&&connection._jsPlumb!=null)connection.setHover(false);result.connections[connection.id]=connection;result.connectionCount++;if(deleteAttachedObjects){for(var j=0;j<connection.endpoints.length;j++){//                            if (connection.endpoints[j]._deleteOnDetach)
//                                unravelEndpoint(connection.endpoints[j]);
}}}};var unravelEndpoint=function unravelEndpoint(endpoint){if(endpoint!=null&&result.endpoints[endpoint.id]==null){if(!params.dontUpdateHover&&endpoint._jsPlumb!=null)endpoint.setHover(false);result.endpoints[endpoint.id]=endpoint;result.endpointCount++;if(deleteAttachedObjects){for(var i=0;i<endpoint.connections.length;i++){var c=endpoint.connections[i];unravelConnection(c);}}}};if(params.connection)unravelConnection(params.connection);else unravelEndpoint(params.endpoint);// loop through connections
for(var i in result.connections){var c=result.connections[i];if(c._jsPlumb){_ju.removeWithFunction(connections,function(_c){return c.id==_c.id;});fireDetachEvent(c,params.fireEvent===false?false:!c.pending,params.originalEvent);var doNotCleanup=params.deleteAttachedObjects==null?null:!params.deleteAttachedObjects;c.endpoints[0].detachFromConnection(c,null,doNotCleanup);c.endpoints[1].detachFromConnection(c,null,doNotCleanup);c.cleanup(true);c.destroy(true);}}// loop through endpoints
for(var j in result.endpoints){var e=result.endpoints[j];if(e._jsPlumb){_currentInstance.unregisterEndpoint(e);// FIRE some endpoint deleted event?
e.cleanup(true);e.destroy(true);}}return result;};this.draggable=function(el,options){var info;_each(function(_el){info=_info(_el);if(info.el)_initDraggableIfNecessary(info.el,true,options,info.id,true);},el);return _currentInstance;};this.droppable=function(el,options){var info;options=options||{};options.allowLoopback=false;_each(function(_el){info=_info(_el);if(info.el)_currentInstance.initDroppable(info.el,options);},el);return _currentInstance;};// helpers for select/selectEndpoints
var _setOperation=function _setOperation(list,func,args,selector){for(var i=0,j=list.length;i<j;i++){list[i][func].apply(list[i],args);}return selector(list);},_getOperation=function _getOperation(list,func,args){var out=[];for(var i=0,j=list.length;i<j;i++){out.push([list[i][func].apply(list[i],args),list[i]]);}return out;},setter=function setter(list,func,selector){return function(){return _setOperation(list,func,arguments,selector);};},getter=function getter(list,func){return function(){return _getOperation(list,func,arguments);};},prepareList=function prepareList(input,doNotGetIds){var r=[];if(input){if(typeof input=='string'){if(input==="*")return input;r.push(input);}else{if(doNotGetIds)r=input;else{if(input.length){for(var i=0,j=input.length;i<j;i++){r.push(_info(input[i]).id);}}else r.push(_info(input).id);}}}return r;},filterList=function filterList(list,value,missingIsFalse){if(list==="*")return true;return list.length>0?list.indexOf(value)!=-1:!missingIsFalse;};// get some connections, specifying source/target/scope
this.getConnections=function(options,flat){if(!options){options={};}else if(options.constructor==String){options={"scope":options};}var scope=options.scope||_currentInstance.getDefaultScope(),scopes=prepareList(scope,true),sources=prepareList(options.source),targets=prepareList(options.target),results=!flat&&scopes.length>1?{}:[],_addOne=function _addOne(scope,obj){if(!flat&&scopes.length>1){var ss=results[scope];if(ss==null){ss=results[scope]=[];}ss.push(obj);}else results.push(obj);};for(var j=0,jj=connections.length;j<jj;j++){var c=connections[j],sourceId=c.proxies&&c.proxies[0]?c.proxies[0].originalEp.elementId:c.sourceId,targetId=c.proxies&&c.proxies[1]?c.proxies[1].originalEp.elementId:c.targetId;if(filterList(scopes,c.scope)&&filterList(sources,sourceId)&&filterList(targets,targetId))_addOne(c.scope,c);}return results;};var _curryEach=function _curryEach(list,executor){return function(f){for(var i=0,ii=list.length;i<ii;i++){f(list[i]);}return executor(list);};},_curryGet=function _curryGet(list){return function(idx){return list[idx];};};var _makeCommonSelectHandler=function _makeCommonSelectHandler(list,executor){var out={length:list.length,each:_curryEach(list,executor),get:_curryGet(list)},setters=["setHover","removeAllOverlays","setLabel","addClass","addOverlay","removeOverlay","removeOverlays","showOverlay","hideOverlay","showOverlays","hideOverlays","setPaintStyle","setHoverPaintStyle","setSuspendEvents","setParameter","setParameters","setVisible","repaint","addType","toggleType","removeType","removeClass","setType","bind","unbind"],getters=["getLabel","getOverlay","isHover","getParameter","getParameters","getPaintStyle","getHoverPaintStyle","isVisible","hasType","getType","isSuspendEvents"],i,ii;for(i=0,ii=setters.length;i<ii;i++){out[setters[i]]=setter(list,setters[i],executor);}for(i=0,ii=getters.length;i<ii;i++){out[getters[i]]=getter(list,getters[i]);}return out;};var _makeConnectionSelectHandler=function _makeConnectionSelectHandler(list){var common=_makeCommonSelectHandler(list,_makeConnectionSelectHandler);return jsPlumb.extend(common,{// setters
setDetachable:setter(list,"setDetachable",_makeConnectionSelectHandler),setReattach:setter(list,"setReattach",_makeConnectionSelectHandler),setConnector:setter(list,"setConnector",_makeConnectionSelectHandler),delete:function _delete(){for(var i=0,ii=list.length;i<ii;i++){_currentInstance.deleteConnection(list[i]);}},// getters
isDetachable:getter(list,"isDetachable"),isReattach:getter(list,"isReattach")});};var _makeEndpointSelectHandler=function _makeEndpointSelectHandler(list){var common=_makeCommonSelectHandler(list,_makeEndpointSelectHandler);return jsPlumb.extend(common,{setEnabled:setter(list,"setEnabled",_makeEndpointSelectHandler),setAnchor:setter(list,"setAnchor",_makeEndpointSelectHandler),isEnabled:getter(list,"isEnabled"),deleteEveryConnection:function deleteEveryConnection(){for(var i=0,ii=list.length;i<ii;i++){list[i].deleteEveryConnection();}},"delete":function _delete(){for(var i=0,ii=list.length;i<ii;i++){_currentInstance.deleteEndpoint(list[i]);}}});};this.select=function(params){params=params||{};params.scope=params.scope||"*";return _makeConnectionSelectHandler(params.connections||_currentInstance.getConnections(params,true));};this.selectEndpoints=function(params){params=params||{};params.scope=params.scope||"*";var noElementFilters=!params.element&&!params.source&&!params.target,elements=noElementFilters?"*":prepareList(params.element),sources=noElementFilters?"*":prepareList(params.source),targets=noElementFilters?"*":prepareList(params.target),scopes=prepareList(params.scope,true);var ep=[];for(var el in endpointsByElement){var either=filterList(elements,el,true),source=filterList(sources,el,true),sourceMatchExact=sources!="*",target=filterList(targets,el,true),targetMatchExact=targets!="*";// if they requested 'either' then just match scope. otherwise if they requested 'source' (not as a wildcard) then we have to match only endpoints that have isSource set to to true, and the same thing with isTarget.
if(either||source||target){inner:for(var i=0,ii=endpointsByElement[el].length;i<ii;i++){var _ep=endpointsByElement[el][i];if(filterList(scopes,_ep.scope,true)){var noMatchSource=sourceMatchExact&&sources.length>0&&!_ep.isSource,noMatchTarget=targetMatchExact&&targets.length>0&&!_ep.isTarget;if(noMatchSource||noMatchTarget)continue inner;ep.push(_ep);}}}}return _makeEndpointSelectHandler(ep);};// get all connections managed by the instance of jsplumb.
this.getAllConnections=function(){return connections;};this.getDefaultScope=function(){return DEFAULT_SCOPE;};// get an endpoint by uuid.
this.getEndpoint=_getEndpoint;/**
         * Gets the list of Endpoints for a given element.
         * @method getEndpoints
         * @param {String|Element|Selector} el The element to get endpoints for.
         * @return {Endpoint[]} An array of Endpoints for the specified element.
         */this.getEndpoints=function(el){return endpointsByElement[_info(el).id]||[];};// gets the default endpoint type. used when subclassing. see wiki.
this.getDefaultEndpointType=function(){return jsPlumb.Endpoint;};// gets the default connection type. used when subclassing.  see wiki.
this.getDefaultConnectionType=function(){return jsPlumb.Connection;};/*
         * Gets an element's id, creating one if necessary. really only exposed
         * for the lib-specific functionality to access; would be better to pass
         * the current instance into the lib-specific code (even though this is
         * a static call. i just don't want to expose it to the public API).
         */this.getId=_getId;this.appendElement=_appendElement;var _hoverSuspended=false;this.isHoverSuspended=function(){return _hoverSuspended;};this.setHoverSuspended=function(s){_hoverSuspended=s;};// set an element's connections to be hidden
this.hide=function(el,changeEndpoints){_setVisible(el,"none",changeEndpoints);return _currentInstance;};// exposed for other objects to use to get a unique id.
this.idstamp=_idstamp;this.connectorsInitialized=false;this.registerConnectorType=function(connector,name){connectorTypes.push([connector,name]);};// ensure that, if the current container exists, it is a DOM element and not a selector.
// if it does not exist and `candidate` is supplied, the offset parent of that element will be set as the Container.
// this is used to do a better default behaviour for the case that the user has not set a container:
// addEndpoint, makeSource, makeTarget and connect all call this method with the offsetParent of the
// element in question (for connect it is the source element). So if no container is set, it is inferred
// to be the offsetParent of the first element the user tries to connect.
var _ensureContainer=function _ensureContainer(candidate){if(!_container&&candidate){var can=_currentInstance.getElement(candidate);if(can.offsetParent)_currentInstance.setContainer(can.offsetParent);}};var _getContainerFromDefaults=function _getContainerFromDefaults(){if(_currentInstance.Defaults.Container)_currentInstance.setContainer(_currentInstance.Defaults.Container);};// check if a given element is managed or not. if not, add to our map. if drawing is not suspended then
// we'll also stash its dimensions; otherwise we'll do this in a lazy way through updateOffset.
var _manage=_currentInstance.manage=function(id,element,_transient){if(!managedElements[id]){managedElements[id]={el:element,endpoints:[],connections:[]};managedElements[id].info=_updateOffset({elId:id,timestamp:_suspendedAt});if(!_transient){_currentInstance.fire("manageElement",{id:id,info:managedElements[id].info,el:element});}}return managedElements[id];};var _unmanage=function _unmanage(id){if(managedElements[id]){delete managedElements[id];_currentInstance.fire("unmanageElement",id);}};/**
         * updates the offset and size for a given element, and stores the
         * values. if 'offset' is not null we use that (it would have been
         * passed in from a drag call) because it's faster; but if it is null,
         * or if 'recalc' is true in order to force a recalculation, we get the current values.
         */var _updateOffset=this.updateOffset=function(params){var timestamp=params.timestamp,recalc=params.recalc,offset=params.offset,elId=params.elId,s;if(_suspendDrawing&&!timestamp)timestamp=_suspendedAt;if(!recalc){if(timestamp&&timestamp===offsetTimestamps[elId]){return{o:params.offset||offsets[elId],s:sizes[elId]};}}if(recalc||!offset&&offsets[elId]==null){// if forced repaint or no offset available, we recalculate.
// get the current size and offset, and store them
s=managedElements[elId]?managedElements[elId].el:null;if(s!=null){sizes[elId]=_currentInstance.getSize(s);offsets[elId]=_currentInstance.getOffset(s);offsetTimestamps[elId]=timestamp;}}else{offsets[elId]=offset||offsets[elId];if(sizes[elId]==null){s=managedElements[elId].el;if(s!=null)sizes[elId]=_currentInstance.getSize(s);}offsetTimestamps[elId]=timestamp;}if(offsets[elId]&&!offsets[elId].right){offsets[elId].right=offsets[elId].left+sizes[elId][0];offsets[elId].bottom=offsets[elId].top+sizes[elId][1];offsets[elId].width=sizes[elId][0];offsets[elId].height=sizes[elId][1];offsets[elId].centerx=offsets[elId].left+offsets[elId].width/2;offsets[elId].centery=offsets[elId].top+offsets[elId].height/2;}return{o:offsets[elId],s:sizes[elId]};};/**
         * callback from the current library to tell us to prepare ourselves (attach
         * mouse listeners etc; can't do that until the library has provided a bind method)
         */this.init=function(){rendererTypes=root.jsPlumb.getRenderModes();var _oneType=function _oneType(renderer,name,fn){root.jsPlumb.Connectors[renderer][name]=function(){fn.apply(this,arguments);root.jsPlumb.ConnectorRenderers[renderer].apply(this,arguments);};_ju.extend(root.jsPlumb.Connectors[renderer][name],[fn,root.jsPlumb.ConnectorRenderers[renderer]]);};if(!root.jsPlumb.connectorsInitialized){for(var i=0;i<connectorTypes.length;i++){for(var j=0;j<rendererTypes.length;j++){_oneType(rendererTypes[j],connectorTypes[i][1],connectorTypes[i][0]);}}root.jsPlumb.connectorsInitialized=true;}if(!initialized){_getContainerFromDefaults();_currentInstance.anchorManager=new root.jsPlumb.AnchorManager({jsPlumbInstance:_currentInstance});initialized=true;_currentInstance.fire("ready",_currentInstance);}}.bind(this);this.log=log;this.jsPlumbUIComponent=jsPlumbUIComponent;/*
         * Creates an anchor with the given params.
         *
         *
         * Returns: The newly created Anchor.
         * Throws: an error if a named anchor was not found.
         */this.makeAnchor=function(){var pp,_a=function _a(t,p){if(root.jsPlumb.Anchors[t])return new root.jsPlumb.Anchors[t](p);if(!_currentInstance.Defaults.DoNotThrowErrors)throw{msg:"jsPlumb: unknown anchor type '"+t+"'"};};if(arguments.length===0)return null;var specimen=arguments[0],elementId=arguments[1],jsPlumbInstance=arguments[2],newAnchor=null;// if it appears to be an anchor already...
if(specimen.compute&&specimen.getOrientation)return specimen;//TODO hazy here about whether it should be added or is already added somehow.
// is it the name of an anchor type?
else if(typeof specimen=="string"){newAnchor=_a(arguments[0],{elementId:elementId,jsPlumbInstance:_currentInstance});}// is it an array? it will be one of:
// 		an array of [spec, params] - this defines a single anchor, which may be dynamic, but has parameters.
//		an array of arrays - this defines some dynamic anchors
//		an array of numbers - this defines a single anchor.
else if(_ju.isArray(specimen)){if(_ju.isArray(specimen[0])||_ju.isString(specimen[0])){// if [spec, params] format
if(specimen.length==2&&_ju.isObject(specimen[1])){// if first arg is a string, its a named anchor with params
if(_ju.isString(specimen[0])){pp=root.jsPlumb.extend({elementId:elementId,jsPlumbInstance:_currentInstance},specimen[1]);newAnchor=_a(specimen[0],pp);}// otherwise first arg is array, second is params. we treat as a dynamic anchor, which is fine
// even if the first arg has only one entry. you could argue all anchors should be implicitly dynamic in fact.
else{pp=root.jsPlumb.extend({elementId:elementId,jsPlumbInstance:_currentInstance,anchors:specimen[0]},specimen[1]);newAnchor=new root.jsPlumb.DynamicAnchor(pp);}}else newAnchor=new jsPlumb.DynamicAnchor({anchors:specimen,selector:null,elementId:elementId,jsPlumbInstance:_currentInstance});}else{var anchorParams={x:specimen[0],y:specimen[1],orientation:specimen.length>=4?[specimen[2],specimen[3]]:[0,0],offsets:specimen.length>=6?[specimen[4],specimen[5]]:[0,0],elementId:elementId,jsPlumbInstance:_currentInstance,cssClass:specimen.length==7?specimen[6]:null};newAnchor=new root.jsPlumb.Anchor(anchorParams);newAnchor.clone=function(){return new root.jsPlumb.Anchor(anchorParams);};}}if(!newAnchor.id)newAnchor.id="anchor_"+_idstamp();return newAnchor;};/**
         * makes a list of anchors from the given list of types or coords, eg
         * ["TopCenter", "RightMiddle", "BottomCenter", [0, 1, -1, -1] ]
         */this.makeAnchors=function(types,elementId,jsPlumbInstance){var r=[];for(var i=0,ii=types.length;i<ii;i++){if(typeof types[i]=="string")r.push(root.jsPlumb.Anchors[types[i]]({elementId:elementId,jsPlumbInstance:jsPlumbInstance}));else if(_ju.isArray(types[i]))r.push(_currentInstance.makeAnchor(types[i],elementId,jsPlumbInstance));}return r;};/**
         * Makes a dynamic anchor from the given list of anchors (which may be in shorthand notation as strings or dimension arrays, or Anchor
         * objects themselves) and the given, optional, anchorSelector function (jsPlumb uses a default if this is not provided; most people will
         * not need to provide this - i think).
         */this.makeDynamicAnchor=function(anchors,anchorSelector){return new root.jsPlumb.DynamicAnchor({anchors:anchors,selector:anchorSelector,elementId:null,jsPlumbInstance:_currentInstance});};// --------------------- makeSource/makeTarget ---------------------------------------------- 
this.targetEndpointDefinitions={};this.sourceEndpointDefinitions={};var selectorFilter=function selectorFilter(evt,_el,selector,_instance,negate){var t=evt.target||evt.srcElement,ok=false,sel=_instance.getSelector(_el,selector);for(var j=0;j<sel.length;j++){if(sel[j]==t){ok=true;break;}}return negate?!ok:ok;};var _makeElementDropHandler=function _makeElementDropHandler(elInfo,p,dropOptions,isSource,isTarget){var proxyComponent=new jsPlumbUIComponent(p);var _drop=p._jsPlumb.EndpointDropHandler({jsPlumb:_currentInstance,enabled:function enabled(){return elInfo.def.enabled;},isFull:function isFull(){var targetCount=_currentInstance.select({target:elInfo.id}).length;return elInfo.def.maxConnections>0&&targetCount>=elInfo.def.maxConnections;},element:elInfo.el,elementId:elInfo.id,isSource:isSource,isTarget:isTarget,addClass:function addClass(clazz){_currentInstance.addClass(elInfo.el,clazz);},removeClass:function removeClass(clazz){_currentInstance.removeClass(elInfo.el,clazz);},onDrop:function onDrop(jpc){var source=jpc.endpoints[0];source.anchor.locked=false;},isDropAllowed:function isDropAllowed(){return proxyComponent.isDropAllowed.apply(proxyComponent,arguments);},isRedrop:function isRedrop(jpc){return jpc.suspendedElement!=null&&jpc.suspendedEndpoint!=null&&jpc.suspendedEndpoint.element===elInfo.el;},getEndpoint:function getEndpoint(jpc){// make a new Endpoint for the target, or get it from the cache if uniqueEndpoint
// is set. if its a redrop the new endpoint will be immediately cleaned up.
var newEndpoint=elInfo.def.endpoint;// if no cached endpoint, or there was one but it has been cleaned up
// (ie. detached), create a new one
if(newEndpoint==null||newEndpoint._jsPlumb==null){var eps=_currentInstance.deriveEndpointAndAnchorSpec(jpc.getType().join(" "),true);var pp=eps.endpoints?root.jsPlumb.extend(p,{endpoint:elInfo.def.def.endpoint||eps.endpoints[1]}):p;if(eps.anchors){pp=root.jsPlumb.extend(pp,{anchor:elInfo.def.def.anchor||eps.anchors[1]});}newEndpoint=_currentInstance.addEndpoint(elInfo.el,pp);newEndpoint._mtNew=true;}if(p.uniqueEndpoint){elInfo.def.endpoint=newEndpoint;}newEndpoint.setDeleteOnEmpty(true);// if connection is detachable, init the new endpoint to be draggable, to support that happening.
if(jpc.isDetachable())newEndpoint.initDraggable();// if the anchor has a 'positionFinder' set, then delegate to that function to find
// out where to locate the anchor.
if(newEndpoint.anchor.positionFinder!=null){var dropPosition=_currentInstance.getUIPosition(arguments,_currentInstance.getZoom()),elPosition=_currentInstance.getOffset(elInfo.el),elSize=_currentInstance.getSize(elInfo.el),ap=dropPosition==null?[0,0]:newEndpoint.anchor.positionFinder(dropPosition,elPosition,elSize,newEndpoint.anchor.constructorParams);newEndpoint.anchor.x=ap[0];newEndpoint.anchor.y=ap[1];// now figure an orientation for it..kind of hard to know what to do actually. probably the best thing i can do is to
// support specifying an orientation in the anchor's spec. if one is not supplied then i will make the orientation
// be what will cause the most natural link to the source: it will be pointing at the source, but it needs to be
// specified in one axis only, and so how to make that choice? i think i will use whichever axis is the one in which
// the target is furthest away from the source.
}return newEndpoint;},maybeCleanup:function maybeCleanup(ep){if(ep._mtNew&&ep.connections.length===0){_currentInstance.deleteObject({endpoint:ep});}else delete ep._mtNew;}});// wrap drop events as needed and initialise droppable
var dropEvent=root.jsPlumb.dragEvents.drop;dropOptions.scope=dropOptions.scope||p.scope||_currentInstance.Defaults.Scope;dropOptions[dropEvent]=_ju.wrap(dropOptions[dropEvent],_drop,true);// if target, return true from the over event. this will cause katavorio to stop setting drops to hover
// if multipleDrop is set to false.
if(isTarget){dropOptions[root.jsPlumb.dragEvents.over]=function(){return true;};}// vanilla jsplumb only
if(p.allowLoopback===false){dropOptions.canDrop=function(_drag){var de=_drag.getDragElement()._jsPlumbRelatedElement;return de!=elInfo.el;};}_currentInstance.initDroppable(elInfo.el,dropOptions,"internal");return _drop;};// see API docs
this.makeTarget=function(el,params,referenceParams){// put jsplumb ref into params without altering the params passed in
var p=root.jsPlumb.extend({_jsPlumb:this},referenceParams);root.jsPlumb.extend(p,params);var maxConnections=p.maxConnections||-1,_doOne=function(el){// get the element's id and store the endpoint definition for it.  jsPlumb.connect calls will look for one of these,
// and use the endpoint definition if found.
// decode the info for this element (id and element)
var elInfo=_info(el),elid=elInfo.id,dropOptions=root.jsPlumb.extend({},p.dropOptions||{}),type=p.connectionType||"default";this.targetEndpointDefinitions[elid]=this.targetEndpointDefinitions[elid]||{};_ensureContainer(elid);// if this is a group and the user has not mandated a rank, set to -1 so that Nodes takes
// precedence.
if(elInfo.el._isJsPlumbGroup&&dropOptions.rank==null){dropOptions.rank=-1;}// store the definition
var _def={def:root.jsPlumb.extend({},p),uniqueEndpoint:p.uniqueEndpoint,maxConnections:maxConnections,enabled:true};elInfo.def=_def;this.targetEndpointDefinitions[elid][type]=_def;_makeElementDropHandler(elInfo,p,dropOptions,p.isSource===true,true);// stash the definition on the drop
elInfo.el._katavorioDrop[elInfo.el._katavorioDrop.length-1].targetDef=_def;}.bind(this);// make an array if only given one element
var inputs=el.length&&el.constructor!=String?el:[el];// register each one in the list.
for(var i=0,ii=inputs.length;i<ii;i++){_doOne(inputs[i]);}return this;};// see api docs
this.unmakeTarget=function(el,doNotClearArrays){var info=_info(el);_currentInstance.destroyDroppable(info.el,"internal");if(!doNotClearArrays){delete this.targetEndpointDefinitions[info.id];}return this;};// see api docs
this.makeSource=function(el,params,referenceParams){var p=root.jsPlumb.extend({_jsPlumb:this},referenceParams);root.jsPlumb.extend(p,params);var type=p.connectionType||"default";var aae=_currentInstance.deriveEndpointAndAnchorSpec(type);p.endpoint=p.endpoint||aae.endpoints[0];p.anchor=p.anchor||aae.anchors[0];var maxConnections=p.maxConnections||-1,onMaxConnections=p.onMaxConnections,_doOne=function(elInfo){// get the element's id and store the endpoint definition for it.  jsPlumb.connect calls will look for one of these,
// and use the endpoint definition if found.
var elid=elInfo.id,_del=this.getElement(elInfo.el);this.sourceEndpointDefinitions[elid]=this.sourceEndpointDefinitions[elid]||{};_ensureContainer(elid);var _def={def:root.jsPlumb.extend({},p),uniqueEndpoint:p.uniqueEndpoint,maxConnections:maxConnections,enabled:true};this.sourceEndpointDefinitions[elid][type]=_def;elInfo.def=_def;var stopEvent=root.jsPlumb.dragEvents.stop,dragEvent=root.jsPlumb.dragEvents.drag,dragOptions=root.jsPlumb.extend({},p.dragOptions||{}),existingDrag=dragOptions.drag,existingStop=dragOptions.stop,ep=null,endpointAddedButNoDragYet=false;// set scope if its not set in dragOptions but was passed in in params
dragOptions.scope=dragOptions.scope||p.scope;dragOptions[dragEvent]=_ju.wrap(dragOptions[dragEvent],function(){if(existingDrag)existingDrag.apply(this,arguments);endpointAddedButNoDragYet=false;});dragOptions[stopEvent]=_ju.wrap(dragOptions[stopEvent],function(){if(existingStop)existingStop.apply(this,arguments);this.currentlyDragging=false;if(ep._jsPlumb!=null){// if not cleaned up...
// reset the anchor to the anchor that was initially provided. the one we were using to drag
// the connection was just a placeholder that was located at the place the user pressed the
// mouse button to initiate the drag.
var anchorDef=p.anchor||this.Defaults.Anchor,oldAnchor=ep.anchor,oldConnection=ep.connections[0];var newAnchor=this.makeAnchor(anchorDef,elid,this),_el=ep.element;// if the anchor has a 'positionFinder' set, then delegate to that function to find
// out where to locate the anchor. issue 117.
if(newAnchor.positionFinder!=null){var elPosition=_currentInstance.getOffset(_el),elSize=this.getSize(_el),dropPosition={left:elPosition.left+oldAnchor.x*elSize[0],top:elPosition.top+oldAnchor.y*elSize[1]},ap=newAnchor.positionFinder(dropPosition,elPosition,elSize,newAnchor.constructorParams);newAnchor.x=ap[0];newAnchor.y=ap[1];}ep.setAnchor(newAnchor,true);ep.repaint();this.repaint(ep.elementId);if(oldConnection!=null)this.repaint(oldConnection.targetId);}}.bind(this));// when the user presses the mouse, add an Endpoint, if we are enabled.
var mouseDownListener=function(e){// on right mouse button, abort.
if(e.which===3||e.button===2)return;// TODO store def on element.
var def=this.sourceEndpointDefinitions[elid][type];// if disabled, return.
if(!def.enabled)return;elid=this.getId(this.getElement(elInfo.el));// elid might have changed since this method was called to configure the element.
// if a filter was given, run it, and return if it says no.
if(p.filter){var r=_ju.isString(p.filter)?selectorFilter(e,elInfo.el,p.filter,this,p.filterExclude):p.filter(e,elInfo.el);if(r===false)return;}// if maxConnections reached
var sourceCount=this.select({source:elid}).length;if(def.maxConnections>=0&&sourceCount>=def.maxConnections){if(onMaxConnections){onMaxConnections({element:elInfo.el,maxConnections:maxConnections},e);}return false;}// find the position on the element at which the mouse was pressed; this is where the endpoint
// will be located.
var elxy=root.jsPlumb.getPositionOnElement(e,_del,_zoom);// we need to override the anchor in here, and force 'isSource', but we don't want to mess with
// the params passed in, because after a connection is established we're going to reset the endpoint
// to have the anchor we were given.
var tempEndpointParams={};root.jsPlumb.extend(tempEndpointParams,p);tempEndpointParams.isTemporarySource=true;tempEndpointParams.anchor=[elxy[0],elxy[1],0,0];tempEndpointParams.dragOptions=dragOptions;if(def.def.scope)tempEndpointParams.scope=def.def.scope;ep=this.addEndpoint(elid,tempEndpointParams);endpointAddedButNoDragYet=true;ep.setDeleteOnEmpty(true);// if unique endpoint and it's already been created, push it onto the endpoint we create. at the end
// of a successful connection we'll switch to that endpoint.
// TODO this is the same code as the programmatic endpoints create on line 1050 ish
if(def.uniqueEndpoint){if(!def.endpoint){def.endpoint=ep;ep.setDeleteOnEmpty(false);}else ep.finalEndpoint=def.endpoint;}var _delTempEndpoint=function _delTempEndpoint(){// this mouseup event is fired only if no dragging occurred, by jquery and yui, but for mootools
// it is fired even if dragging has occurred, in which case we would blow away a perfectly
// legitimate endpoint, were it not for this check.  the flag is set after adding an
// endpoint and cleared in a drag listener we set in the dragOptions above.
_currentInstance.off(ep.canvas,"mouseup",_delTempEndpoint);_currentInstance.off(elInfo.el,"mouseup",_delTempEndpoint);if(endpointAddedButNoDragYet){endpointAddedButNoDragYet=false;_currentInstance.deleteEndpoint(ep);}};_currentInstance.on(ep.canvas,"mouseup",_delTempEndpoint);_currentInstance.on(elInfo.el,"mouseup",_delTempEndpoint);// optionally check for attributes to extract from the source element
var payload={};if(def.def.extract){for(var att in def.def.extract){var v=(e.srcElement||e.target).getAttribute(att);if(v){payload[def.def.extract[att]]=v;}}}// and then trigger its mousedown event, which will kick off a drag, which will start dragging
// a new connection from this endpoint.
_currentInstance.trigger(ep.canvas,"mousedown",e,payload);_ju.consume(e);}.bind(this);this.on(elInfo.el,"mousedown",mouseDownListener);_def.trigger=mouseDownListener;// if a filter was provided, set it as a dragFilter on the element,
// to prevent the element drag function from kicking in when we want to
// drag a new connection
if(p.filter&&(_ju.isString(p.filter)||_ju.isFunction(p.filter))){_currentInstance.setDragFilter(elInfo.el,p.filter);}var dropOptions=root.jsPlumb.extend({},p.dropOptions||{});_makeElementDropHandler(elInfo,p,dropOptions,true,p.isTarget===true);}.bind(this);var inputs=el.length&&el.constructor!=String?el:[el];for(var i=0,ii=inputs.length;i<ii;i++){_doOne(_info(inputs[i]));}return this;};// see api docs
this.unmakeSource=function(el,connectionType,doNotClearArrays){var info=_info(el);_currentInstance.destroyDroppable(info.el,"internal");var eldefs=this.sourceEndpointDefinitions[info.id];if(eldefs){for(var def in eldefs){if(connectionType==null||connectionType===def){var mouseDownListener=eldefs[def].trigger;if(mouseDownListener)_currentInstance.off(info.el,"mousedown",mouseDownListener);if(!doNotClearArrays){delete this.sourceEndpointDefinitions[info.id][def];}}}}return this;};// see api docs
this.unmakeEverySource=function(){for(var i in this.sourceEndpointDefinitions){_currentInstance.unmakeSource(i,null,true);}this.sourceEndpointDefinitions={};return this;};var _getScope=function(el,types,connectionType){types=_ju.isArray(types)?types:[types];var id=_getId(el);connectionType=connectionType||"default";for(var i=0;i<types.length;i++){var eldefs=this[types[i]][id];if(eldefs&&eldefs[connectionType])return eldefs[connectionType].def.scope||this.Defaults.Scope;}}.bind(this);var _setScope=function(el,scope,types,connectionType){types=_ju.isArray(types)?types:[types];var id=_getId(el);connectionType=connectionType||"default";for(var i=0;i<types.length;i++){var eldefs=this[types[i]][id];if(eldefs&&eldefs[connectionType]){eldefs[connectionType].def.scope=scope;}}}.bind(this);this.getScope=function(el,scope){return _getScope(el,["sourceEndpointDefinitions","targetEndpointDefinitions"]);};this.getSourceScope=function(el){return _getScope(el,"sourceEndpointDefinitions");};this.getTargetScope=function(el){return _getScope(el,"targetEndpointDefinitions");};this.setScope=function(el,scope,connectionType){this.setSourceScope(el,scope,connectionType);this.setTargetScope(el,scope,connectionType);};this.setSourceScope=function(el,scope,connectionType){_setScope(el,scope,"sourceEndpointDefinitions",connectionType);// we get the source scope during the mousedown event, but we also want to set this.
this.setDragScope(el,scope);};this.setTargetScope=function(el,scope,connectionType){_setScope(el,scope,"targetEndpointDefinitions",connectionType);this.setDropScope(el,scope);};// see api docs
this.unmakeEveryTarget=function(){for(var i in this.targetEndpointDefinitions){_currentInstance.unmakeTarget(i,true);}this.targetEndpointDefinitions={};return this;};// does the work of setting a source enabled or disabled.
var _setEnabled=function(type,el,state,toggle,connectionType){var a=type=="source"?this.sourceEndpointDefinitions:this.targetEndpointDefinitions,originalState,info,newState;connectionType=connectionType||"default";// a selector or an array
if(el.length&&!_ju.isString(el)){originalState=[];for(var i=0,ii=el.length;i<ii;i++){info=_info(el[i]);if(a[info.id]&&a[info.id][connectionType]){originalState[i]=a[info.id][connectionType].enabled;newState=toggle?!originalState[i]:state;a[info.id][connectionType].enabled=newState;_currentInstance[newState?"removeClass":"addClass"](info.el,"jtk-"+type+"-disabled");}}}// otherwise a DOM element or a String ID.
else{info=_info(el);var id=info.id;if(a[id]&&a[id][connectionType]){originalState=a[id][connectionType].enabled;newState=toggle?!originalState:state;a[id][connectionType].enabled=newState;_currentInstance[newState?"removeClass":"addClass"](info.el,"jtk-"+type+"-disabled");}}return originalState;}.bind(this);var _first=function(el,fn){if(_ju.isString(el)||!el.length)return fn.apply(this,[el]);else if(el.length)return fn.apply(this,[el[0]]);}.bind(this);this.toggleSourceEnabled=function(el,connectionType){_setEnabled("source",el,null,true,connectionType);return this.isSourceEnabled(el,connectionType);};this.setSourceEnabled=function(el,state,connectionType){return _setEnabled("source",el,state,null,connectionType);};this.isSource=function(el,connectionType){connectionType=connectionType||"default";return _first(el,function(_el){var eldefs=this.sourceEndpointDefinitions[_info(_el).id];return eldefs!=null&&eldefs[connectionType]!=null;}.bind(this));};this.isSourceEnabled=function(el,connectionType){connectionType=connectionType||"default";return _first(el,function(_el){var sep=this.sourceEndpointDefinitions[_info(_el).id];return sep&&sep[connectionType]&&sep[connectionType].enabled===true;}.bind(this));};this.toggleTargetEnabled=function(el,connectionType){_setEnabled("target",el,null,true,connectionType);return this.isTargetEnabled(el,connectionType);};this.isTarget=function(el,connectionType){connectionType=connectionType||"default";return _first(el,function(_el){var eldefs=this.targetEndpointDefinitions[_info(_el).id];return eldefs!=null&&eldefs[connectionType]!=null;}.bind(this));};this.isTargetEnabled=function(el,connectionType){connectionType=connectionType||"default";return _first(el,function(_el){var tep=this.targetEndpointDefinitions[_info(_el).id];return tep&&tep[connectionType]&&tep[connectionType].enabled===true;}.bind(this));};this.setTargetEnabled=function(el,state,connectionType){return _setEnabled("target",el,state,null,connectionType);};// --------------------- end makeSource/makeTarget ---------------------------------------------- 				
this.ready=function(fn){_currentInstance.bind("ready",fn);};var _elEach=function _elEach(el,fn){// support both lists...
if((typeof el==="undefined"?"undefined":_typeof(el))=='object'&&el.length)for(var i=0,ii=el.length;i<ii;i++){fn(el[i]);}else// ...and single strings or elements.
fn(el);return _currentInstance;};// repaint some element's endpoints and connections
this.repaint=function(el,ui,timestamp){return _elEach(el,function(_el){_draw(_el,ui,timestamp);});};this.revalidate=function(el,timestamp,isIdAlready){return _elEach(el,function(_el){var elId=isIdAlready?_el:_currentInstance.getId(_el);_currentInstance.updateOffset({elId:elId,recalc:true,timestamp:timestamp});_currentInstance.getDragManager().updateOffsets(elId);_currentInstance.repaint(_el);});};// repaint every endpoint and connection.
this.repaintEverything=function(){// TODO this timestamp causes continuous anchors to not repaint properly.
// fix this. do not just take out the timestamp. it runs a lot faster with
// the timestamp included.
var timestamp=_timestamp(),elId;for(elId in endpointsByElement){_currentInstance.updateOffset({elId:elId,recalc:true,timestamp:timestamp});}for(elId in endpointsByElement){_draw(elId,null,timestamp);}return this;};this.removeAllEndpoints=function(el,recurse,affectedElements){affectedElements=affectedElements||[];var _one=function _one(_el){var info=_info(_el),ebe=endpointsByElement[info.id],i,ii;if(ebe){affectedElements.push(info);for(i=0,ii=ebe.length;i<ii;i++){_currentInstance.deleteEndpoint(ebe[i],false);}}delete endpointsByElement[info.id];if(recurse){if(info.el&&info.el.nodeType!=3&&info.el.nodeType!=8){for(i=0,ii=info.el.childNodes.length;i<ii;i++){_one(info.el.childNodes[i]);}}}};_one(el);return this;};var _doRemove=function _doRemove(info,affectedElements){_currentInstance.removeAllEndpoints(info.id,true,affectedElements);var _one=function _one(_info){_currentInstance.getDragManager().elementRemoved(_info.id);_currentInstance.anchorManager.clearFor(_info.id);_currentInstance.anchorManager.removeFloatingConnection(_info.id);if(_currentInstance.isSource(_info.el))_currentInstance.unmakeSource(_info.el);if(_currentInstance.isTarget(_info.el))_currentInstance.unmakeTarget(_info.el);_currentInstance.destroyDraggable(_info.el);_currentInstance.destroyDroppable(_info.el);delete _currentInstance.floatingConnections[_info.id];delete managedElements[_info.id];delete offsets[_info.id];if(_info.el){_currentInstance.removeElement(_info.el);_info.el._jsPlumb=null;}};// remove all affected child elements
for(var ae=1;ae<affectedElements.length;ae++){_one(affectedElements[ae]);}// and always remove the requested one from the dom.
_one(info);};/**
         * Remove the given element, including cleaning up all endpoints registered for it.
         * This is exposed in the public API but also used internally by jsPlumb when removing the
         * element associated with a connection drag.
         */this.remove=function(el,doNotRepaint){var info=_info(el),affectedElements=[];if(info.text){info.el.parentNode.removeChild(info.el);}else if(info.id){_currentInstance.batch(function(){_doRemove(info,affectedElements);},doNotRepaint===false);}return _currentInstance;};this.empty=function(el,doNotRepaint){var affectedElements=[];var _one=function _one(el,dontRemoveFocus){var info=_info(el);if(info.text){info.el.parentNode.removeChild(info.el);}else if(info.el){while(info.el.childNodes.length>0){_one(info.el.childNodes[0]);}if(!dontRemoveFocus)_doRemove(info,affectedElements);}};_currentInstance.batch(function(){_one(el,true);},doNotRepaint===false);return _currentInstance;};this.reset=function(){_currentInstance.silently(function(){_hoverSuspended=false;_currentInstance.removeAllGroups();_currentInstance.removeGroupManager();_currentInstance.deleteEveryEndpoint();_currentInstance.unbind();this.targetEndpointDefinitions={};this.sourceEndpointDefinitions={};connections.length=0;if(this.doReset)this.doReset();}.bind(this));};var _clearObject=function _clearObject(obj){if(obj.canvas&&obj.canvas.parentNode)obj.canvas.parentNode.removeChild(obj.canvas);obj.cleanup();obj.destroy();};this.clear=function(){_currentInstance.select().each(_clearObject);_currentInstance.selectEndpoints().each(_clearObject);endpointsByElement={};endpointsByUUID={};};this.setDefaultScope=function(scope){DEFAULT_SCOPE=scope;return _currentInstance;};// sets whether or not some element should be currently draggable.
this.setDraggable=_setDraggable;this.deriveEndpointAndAnchorSpec=function(type,dontPrependDefault){var bits=((dontPrependDefault?"":"default ")+type).split(/[\s]/),eps=null,ep=null,a=null,as=null;for(var i=0;i<bits.length;i++){var _t=_currentInstance.getType(bits[i],"connection");if(_t){if(_t.endpoints)eps=_t.endpoints;if(_t.endpoint)ep=_t.endpoint;if(_t.anchors)as=_t.anchors;if(_t.anchor)a=_t.anchor;}}return{endpoints:eps?eps:[ep,ep],anchors:as?as:[a,a]};};// sets the id of some element, changing whatever we need to to keep track.
this.setId=function(el,newId,doNotSetAttribute){//
var id;if(_ju.isString(el)){id=el;}else{el=this.getElement(el);id=this.getId(el);}var sConns=this.getConnections({source:id,scope:'*'},true),tConns=this.getConnections({target:id,scope:'*'},true);newId=""+newId;if(!doNotSetAttribute){el=this.getElement(id);this.setAttribute(el,"id",newId);}else el=this.getElement(newId);endpointsByElement[newId]=endpointsByElement[id]||[];for(var i=0,ii=endpointsByElement[newId].length;i<ii;i++){endpointsByElement[newId][i].setElementId(newId);endpointsByElement[newId][i].setReferenceElement(el);}delete endpointsByElement[id];this.sourceEndpointDefinitions[newId]=this.sourceEndpointDefinitions[id];delete this.sourceEndpointDefinitions[id];this.targetEndpointDefinitions[newId]=this.targetEndpointDefinitions[id];delete this.targetEndpointDefinitions[id];this.anchorManager.changeId(id,newId);this.getDragManager().changeId(id,newId);managedElements[newId]=managedElements[id];delete managedElements[id];var _conns=function _conns(list,epIdx,type){for(var i=0,ii=list.length;i<ii;i++){list[i].endpoints[epIdx].setElementId(newId);list[i].endpoints[epIdx].setReferenceElement(el);list[i][type+"Id"]=newId;list[i][type]=el;}};_conns(sConns,0,"source");_conns(tConns,1,"target");this.repaint(newId);};this.setDebugLog=function(debugLog){log=debugLog;};this.setSuspendDrawing=function(val,repaintAfterwards){var curVal=_suspendDrawing;_suspendDrawing=val;if(val)_suspendedAt=new Date().getTime();else _suspendedAt=null;if(repaintAfterwards)this.repaintEverything();return curVal;};// returns whether or not drawing is currently suspended.
this.isSuspendDrawing=function(){return _suspendDrawing;};// return timestamp for when drawing was suspended.
this.getSuspendedAt=function(){return _suspendedAt;};this.batch=function(fn,doNotRepaintAfterwards){var _wasSuspended=this.isSuspendDrawing();if(!_wasSuspended)this.setSuspendDrawing(true);try{fn();}catch(e){_ju.log("Function run while suspended failed",e);}if(!_wasSuspended)this.setSuspendDrawing(false,!doNotRepaintAfterwards);};this.doWhileSuspended=this.batch;this.getCachedData=_getCachedData;this.timestamp=_timestamp;this.show=function(el,changeEndpoints){_setVisible(el,"block",changeEndpoints);return _currentInstance;};// TODO: update this method to return the current state.
this.toggleVisible=_toggleVisible;this.toggleDraggable=_toggleDraggable;this.addListener=this.bind;};_ju.extend(root.jsPlumbInstance,_ju.EventGenerator,{setAttribute:function setAttribute(el,a,v){this.setAttribute(el,a,v);},getAttribute:function getAttribute(el,a){return this.getAttribute(root.jsPlumb.getElement(el),a);},convertToFullOverlaySpec:function convertToFullOverlaySpec(spec){if(_ju.isString(spec)){spec=[spec,{}];}spec[1].id=spec[1].id||_ju.uuid();return spec;},registerConnectionType:function registerConnectionType(id,type){this._connectionTypes[id]=root.jsPlumb.extend({},type);if(type.overlays){var to={};for(var i=0;i<type.overlays.length;i++){// if a string, convert to object representation so that we can store the typeid on it.
// also assign an id.
var fo=this.convertToFullOverlaySpec(type.overlays[i]);to[fo[1].id]=fo;}this._connectionTypes[id].overlays=to;}},registerConnectionTypes:function registerConnectionTypes(types){for(var i in types){this.registerConnectionType(i,types[i]);}},registerEndpointType:function registerEndpointType(id,type){this._endpointTypes[id]=root.jsPlumb.extend({},type);if(type.overlays){var to={};for(var i=0;i<type.overlays.length;i++){// if a string, convert to object representation so that we can store the typeid on it.
// also assign an id.
var fo=this.convertToFullOverlaySpec(type.overlays[i]);to[fo[1].id]=fo;}this._endpointTypes[id].overlays=to;}},registerEndpointTypes:function registerEndpointTypes(types){for(var i in types){//this._endpointTypes[i] = jsPlumb.extend({}, types[i]);
this.registerEndpointType(i,types[i]);}},getType:function getType(id,typeDescriptor){return typeDescriptor==="connection"?this._connectionTypes[id]:this._endpointTypes[id];},setIdChanged:function setIdChanged(oldId,newId){this.setId(oldId,newId,true);},// set parent: change the parent for some node and update all the registrations we need to.
setParent:function setParent(el,newParent){var _dom=this.getElement(el),_id=this.getId(_dom),_pdom=this.getElement(newParent),_pid=this.getId(_pdom);_dom.parentNode.removeChild(_dom);_pdom.appendChild(_dom);this.getDragManager().setParent(_dom,_id,_pdom,_pid);},extend:function extend(o1,o2,names){var i;if(names){for(i=0;i<names.length;i++){o1[names[i]]=o2[names[i]];}}else for(i in o2){o1[i]=o2[i];}return o1;},floatingConnections:{},getFloatingAnchorIndex:function getFloatingAnchorIndex(jpc){return jpc.endpoints[0].isFloating()?0:jpc.endpoints[1].isFloating()?1:-1;}});jsPlumbInstance.prototype.Defaults={Anchor:"Bottom",Anchors:[null,null],ConnectionsDetachable:true,ConnectionOverlays:[],Connector:"Bezier",Container:null,DoNotThrowErrors:false,DragOptions:{},DropOptions:{},Endpoint:"Dot",EndpointOverlays:[],Endpoints:[null,null],EndpointStyle:{fill:"#456"},EndpointStyles:[null,null],EndpointHoverStyle:null,EndpointHoverStyles:[null,null],HoverPaintStyle:null,LabelStyle:{color:"black"},LogEnabled:false,Overlays:[],MaxConnections:1,PaintStyle:{"stroke-width":4,stroke:"#456"},ReattachConnections:false,RenderMode:"svg",Scope:"jsPlumb_DefaultScope"};// --------------------- static instance + module registration -------------------------------------------
// create static instance and assign to window if window exists.	
var jsPlumb=new jsPlumbInstance();// register on 'root' (lets us run on server or browser)
root.jsPlumb=jsPlumb;// add 'getInstance' method to static instance
jsPlumb.getInstance=function(_defaults,overrideFns){var j=new jsPlumbInstance(_defaults);if(overrideFns){for(var ovf in overrideFns){j[ovf]=overrideFns[ovf];}}j.init();return j;};jsPlumb.each=function(spec,fn){if(spec==null)return;if(typeof spec==="string")fn(jsPlumb.getElement(spec));else if(spec.length!=null){for(var i=0;i<spec.length;i++){fn(jsPlumb.getElement(spec[i]));}}else fn(spec);// assume it's an element.
};// CommonJS
if(true){exports.jsPlumb=jsPlumb;}// --------------------- end static instance + AMD registration -------------------------------------------		
}).call(typeof window!=='undefined'?window:this);/*
 * jsPlumb
 *
 * Title:jsPlumb 2.3.0
 *
 * Provides a way to visually connect elements on an HTML page, using SVG.
 *
 * This file contains the base functionality for DOM type adapters.
 *
 * Copyright (c) 2010 - 2017 jsPlumb (hello@jsplumbtoolkit.com)
 *
 * http://jsplumbtoolkit.com
 * http://github.com/sporritt/jsplumb
 *
 * Dual licensed under the MIT and GPL2 licenses.
 */;(function(){var root=this,_ju=root.jsPlumbUtil;var _genLoc=function _genLoc(prefix,e){if(e==null)return[0,0];var ts=_touches(e),t=_getTouch(ts,0);return[t[prefix+"X"],t[prefix+"Y"]];},_pageLocation=_genLoc.bind(this,"page"),_screenLocation=_genLoc.bind(this,"screen"),_clientLocation=_genLoc.bind(this,"client"),_getTouch=function _getTouch(touches,idx){return touches.item?touches.item(idx):touches[idx];},_touches=function _touches(e){return e.touches&&e.touches.length>0?e.touches:e.changedTouches&&e.changedTouches.length>0?e.changedTouches:e.targetTouches&&e.targetTouches.length>0?e.targetTouches:[e];};/**
     Manages dragging for some instance of jsPlumb.

     TODO instead of this being accessed directly, it should subscribe to events on the jsPlumb instance: every method
     in here is called directly by jsPlumb. But what should happen is that we have unpublished events that this listens
     to.  The only trick is getting one of these instantiated with every jsPlumb instance: it needs to have a hook somehow.
     Basically the general idea is to pull ALL the drag code out (prototype method registrations plus this) into a
     dedicated drag script), that does not necessarily need to be included.


     */var DragManager=function DragManager(_currentInstance){var _draggables={},_dlist=[],_delements={},_elementsWithEndpoints={},// elementids mapped to the draggable to which they belong.
_draggablesForElements={};/**
         register some element as draggable.  right now the drag init stuff is done elsewhere, and it is
         possible that will continue to be the case.
         */this.register=function(el){var id=_currentInstance.getId(el),parentOffset=_currentInstance.getOffset(el);if(!_draggables[id]){_draggables[id]=el;_dlist.push(el);_delements[id]={};}// look for child elements that have endpoints and register them against this draggable.
var _oneLevel=function _oneLevel(p){if(p){for(var i=0;i<p.childNodes.length;i++){if(p.childNodes[i].nodeType!=3&&p.childNodes[i].nodeType!=8){var cEl=jsPlumb.getElement(p.childNodes[i]),cid=_currentInstance.getId(p.childNodes[i],null,true);if(cid&&_elementsWithEndpoints[cid]&&_elementsWithEndpoints[cid]>0){var cOff=_currentInstance.getOffset(cEl);_delements[id][cid]={id:cid,offset:{left:cOff.left-parentOffset.left,top:cOff.top-parentOffset.top}};_draggablesForElements[cid]=id;}_oneLevel(p.childNodes[i]);}}}};_oneLevel(el);};// refresh the offsets for child elements of this element.
this.updateOffsets=function(elId,childOffsetOverrides){if(elId!=null){childOffsetOverrides=childOffsetOverrides||{};var domEl=jsPlumb.getElement(elId),id=_currentInstance.getId(domEl),children=_delements[id],parentOffset=_currentInstance.getOffset(domEl);if(children){for(var i in children){if(children.hasOwnProperty(i)){var cel=jsPlumb.getElement(i),cOff=childOffsetOverrides[i]||_currentInstance.getOffset(cel);// do not update if we have a value already and we'd just be writing 0,0
if(cel.offsetParent==null&&_delements[id][i]!=null)continue;_delements[id][i]={id:i,offset:{left:cOff.left-parentOffset.left,top:cOff.top-parentOffset.top}};_draggablesForElements[i]=id;}}}}};/**
         notification that an endpoint was added to the given el.  we go up from that el's parent
         node, looking for a parent that has been registered as a draggable. if we find one, we add this
         el to that parent's list of elements to update on drag (if it is not there already)
         */this.endpointAdded=function(el,id){id=id||_currentInstance.getId(el);var b=document.body,p=el.parentNode;_elementsWithEndpoints[id]=_elementsWithEndpoints[id]?_elementsWithEndpoints[id]+1:1;while(p!=null&&p!=b){var pid=_currentInstance.getId(p,null,true);if(pid&&_draggables[pid]){var pLoc=_currentInstance.getOffset(p);if(_delements[pid][id]==null){var cLoc=_currentInstance.getOffset(el);_delements[pid][id]={id:id,offset:{left:cLoc.left-pLoc.left,top:cLoc.top-pLoc.top}};_draggablesForElements[id]=pid;}break;}p=p.parentNode;}};this.endpointDeleted=function(endpoint){if(_elementsWithEndpoints[endpoint.elementId]){_elementsWithEndpoints[endpoint.elementId]--;if(_elementsWithEndpoints[endpoint.elementId]<=0){for(var i in _delements){if(_delements.hasOwnProperty(i)&&_delements[i]){delete _delements[i][endpoint.elementId];delete _draggablesForElements[endpoint.elementId];}}}}};this.changeId=function(oldId,newId){_delements[newId]=_delements[oldId];_delements[oldId]={};_draggablesForElements[newId]=_draggablesForElements[oldId];_draggablesForElements[oldId]=null;};this.getElementsForDraggable=function(id){return _delements[id];};this.elementRemoved=function(elementId){var elId=_draggablesForElements[elementId];if(elId){delete _delements[elId][elementId];delete _draggablesForElements[elementId];}};this.reset=function(){_draggables={};_dlist=[];_delements={};_elementsWithEndpoints={};};//
// notification drag ended. We check automatically if need to update some
// ancestor's offsets.
//
this.dragEnded=function(el){if(el.offsetParent!=null){var id=_currentInstance.getId(el),ancestor=_draggablesForElements[id];if(ancestor)this.updateOffsets(ancestor);}};this.setParent=function(el,elId,p,pId,currentChildLocation){var current=_draggablesForElements[elId];if(!_delements[pId]){_delements[pId]={};}var pLoc=_currentInstance.getOffset(p),cLoc=currentChildLocation||_currentInstance.getOffset(el);if(current&&_delements[current]){delete _delements[current][elId];}_delements[pId][elId]={id:elId,offset:{left:cLoc.left-pLoc.left,top:cLoc.top-pLoc.top}};_draggablesForElements[elId]=pId;};this.clearParent=function(el,elId){var current=_draggablesForElements[elId];if(current){delete _delements[current][elId];delete _draggablesForElements[elId];}};this.revalidateParent=function(el,elId,childOffset){var current=_draggablesForElements[elId];if(current){var co={};co[elId]=childOffset;this.updateOffsets(current,co);_currentInstance.revalidate(current);}};this.getDragAncestor=function(el){var de=jsPlumb.getElement(el),id=_currentInstance.getId(de),aid=_draggablesForElements[id];if(aid)return jsPlumb.getElement(aid);else return null;};};var trim=function trim(str){return str==null?null:str.replace(/^\s\s*/,'').replace(/\s\s*$/,'');},_setClassName=function _setClassName(el,cn){cn=trim(cn);if(typeof el.className.baseVal!="undefined")// SVG
el.className.baseVal=cn;else el.className=cn;},_getClassName=function _getClassName(el){return typeof el.className.baseVal=="undefined"?el.className:el.className.baseVal;},_classManip=function _classManip(el,classesToAdd,classesToRemove){classesToAdd=classesToAdd==null?[]:_ju.isArray(classesToAdd)?classesToAdd:classesToAdd.split(/\s+/);classesToRemove=classesToRemove==null?[]:_ju.isArray(classesToRemove)?classesToRemove:classesToRemove.split(/\s+/);var className=_getClassName(el),curClasses=className.split(/\s+/);var _oneSet=function _oneSet(add,classes){for(var i=0;i<classes.length;i++){if(add){if(curClasses.indexOf(classes[i])==-1)curClasses.push(classes[i]);}else{var idx=curClasses.indexOf(classes[i]);if(idx!=-1)curClasses.splice(idx,1);}}};_oneSet(true,classesToAdd);_oneSet(false,classesToRemove);_setClassName(el,curClasses.join(" "));};root.jsPlumb.extend(root.jsPlumbInstance.prototype,{headless:false,pageLocation:_pageLocation,screenLocation:_screenLocation,clientLocation:_clientLocation,getDragManager:function getDragManager(){if(this.dragManager==null)this.dragManager=new DragManager(this);return this.dragManager;},recalculateOffsets:function recalculateOffsets(elId){this.getDragManager().updateOffsets(elId);},createElement:function createElement(tag,style,clazz,atts){return this.createElementNS(null,tag,style,clazz,atts);},createElementNS:function createElementNS(ns,tag,style,clazz,atts){var e=ns==null?document.createElement(tag):document.createElementNS(ns,tag);var i;style=style||{};for(i in style){e.style[i]=style[i];}if(clazz)e.className=clazz;atts=atts||{};for(i in atts){e.setAttribute(i,""+atts[i]);}return e;},getAttribute:function getAttribute(el,attName){return el.getAttribute!=null?el.getAttribute(attName):null;},setAttribute:function setAttribute(el,a,v){if(el.setAttribute!=null)el.setAttribute(a,v);},setAttributes:function setAttributes(el,atts){for(var i in atts){if(atts.hasOwnProperty(i))el.setAttribute(i,atts[i]);}},appendToRoot:function appendToRoot(node){document.body.appendChild(node);},getRenderModes:function getRenderModes(){return["svg"];},getClass:_getClassName,addClass:function addClass(el,clazz){jsPlumb.each(el,function(e){_classManip(e,clazz);});},hasClass:function hasClass(el,clazz){el=jsPlumb.getElement(el);if(el.classList)return el.classList.contains(clazz);else{return _getClassName(el).indexOf(clazz)!=-1;}},removeClass:function removeClass(el,clazz){jsPlumb.each(el,function(e){_classManip(e,null,clazz);});},updateClasses:function updateClasses(el,toAdd,toRemove){jsPlumb.each(el,function(e){_classManip(e,toAdd,toRemove);});},setClass:function setClass(el,clazz){jsPlumb.each(el,function(e){_setClassName(e,clazz);});},setPosition:function setPosition(el,p){el.style.left=p.left+"px";el.style.top=p.top+"px";},getPosition:function getPosition(el){var _one=function _one(prop){var v=el.style[prop];return v?v.substring(0,v.length-2):0;};return{left:_one("left"),top:_one("top")};},getStyle:function getStyle(el,prop){if(typeof window.getComputedStyle!=='undefined'){return getComputedStyle(el,null).getPropertyValue(prop);}else{return el.currentStyle[prop];}},getSelector:function getSelector(ctx,spec){var sel=null;if(arguments.length==1){sel=ctx.nodeType!=null?ctx:document.querySelectorAll(ctx);}else sel=ctx.querySelectorAll(spec);return sel;},getOffset:function getOffset(el,relativeToRoot,container){el=jsPlumb.getElement(el);container=container||this.getContainer();var out={left:el.offsetLeft,top:el.offsetTop},op=relativeToRoot||container!=null&&el!=container&&el.offsetParent!=container?el.offsetParent:null,_maybeAdjustScroll=function(offsetParent){if(offsetParent!=null&&offsetParent!==document.body&&(offsetParent.scrollTop>0||offsetParent.scrollLeft>0)){out.left-=offsetParent.scrollLeft;out.top-=offsetParent.scrollTop;}}.bind(this);while(op!=null){out.left+=op.offsetLeft;out.top+=op.offsetTop;_maybeAdjustScroll(op);op=relativeToRoot?op.offsetParent:op.offsetParent==container?null:op.offsetParent;}// if container is scrolled and the element (or its offset parent) is not absolute or fixed, adjust accordingly.
if(container!=null&&!relativeToRoot&&(container.scrollTop>0||container.scrollLeft>0)){var pp=el.offsetParent!=null?this.getStyle(el.offsetParent,"position"):"static",p=this.getStyle(el,"position");if(p!=="absolute"&&p!=="fixed"&&pp!=="absolute"&&pp!="fixed"){out.left-=container.scrollLeft;out.top-=container.scrollTop;}}return out;},//
// return x+y proportion of the given element's size corresponding to the location of the given event.
//
getPositionOnElement:function getPositionOnElement(evt,el,zoom){var box=typeof el.getBoundingClientRect!=="undefined"?el.getBoundingClientRect():{left:0,top:0,width:0,height:0},body=document.body,docElem=document.documentElement,scrollTop=window.pageYOffset||docElem.scrollTop||body.scrollTop,scrollLeft=window.pageXOffset||docElem.scrollLeft||body.scrollLeft,clientTop=docElem.clientTop||body.clientTop||0,clientLeft=docElem.clientLeft||body.clientLeft||0,pst=0,psl=0,top=box.top+scrollTop-clientTop+pst*zoom,left=box.left+scrollLeft-clientLeft+psl*zoom,cl=jsPlumb.pageLocation(evt),w=box.width||el.offsetWidth*zoom,h=box.height||el.offsetHeight*zoom,x=(cl[0]-left)/w,y=(cl[1]-top)/h;return[x,y];},/**
         * Gets the absolute position of some element as read from the left/top properties in its style.
         * @method getAbsolutePosition
         * @param {Element} el The element to retrieve the absolute coordinates from. **Note** this is a DOM element, not a selector from the underlying library.
         * @return {Number[]} [left, top] pixel values.
         */getAbsolutePosition:function getAbsolutePosition(el){var _one=function _one(s){var ss=el.style[s];if(ss)return parseFloat(ss.substring(0,ss.length-2));};return[_one("left"),_one("top")];},/**
         * Sets the absolute position of some element by setting the left/top properties in its style.
         * @method setAbsolutePosition
         * @param {Element} el The element to set the absolute coordinates on. **Note** this is a DOM element, not a selector from the underlying library.
         * @param {Number[]} xy x and y coordinates
         * @param {Number[]} [animateFrom] Optional previous xy to animate from.
         * @param {Object} [animateOptions] Options for the animation.
         */setAbsolutePosition:function setAbsolutePosition(el,xy,animateFrom,animateOptions){if(animateFrom){this.animate(el,{left:"+="+(xy[0]-animateFrom[0]),top:"+="+(xy[1]-animateFrom[1])},animateOptions);}else{el.style.left=xy[0]+"px";el.style.top=xy[1]+"px";}},/**
         * gets the size for the element, in an array : [ width, height ].
         */getSize:function getSize(el){return[el.offsetWidth,el.offsetHeight];},getWidth:function getWidth(el){return el.offsetWidth;},getHeight:function getHeight(el){return el.offsetHeight;},getRenderMode:function getRenderMode(){return"svg";}});}).call(typeof window!=='undefined'?window:this);/*
 * jsPlumb
 *
 * Title:jsPlumb 2.3.0
 *
 * Provides a way to visually connect elements on an HTML page, using SVG.
 *
 * This file contains code for components that support overlays.
 *
 * Copyright (c) 2010 - 2017 jsPlumb (hello@jsplumbtoolkit.com)
 *
 * http://jsplumbtoolkit.com
 * http://github.com/sporritt/jsplumb
 *
 * Dual licensed under the MIT and GPL2 licenses.
 */;(function(){"use strict";var root=this,_jp=root.jsPlumb,_ju=root.jsPlumbUtil;// ------------------------------ BEGIN OverlayCapablejsPlumbUIComponent --------------------------------------------
var _internalLabelOverlayId="__label",// this is a shortcut helper method to let people add a label as
// overlay.
_makeLabelOverlay=function _makeLabelOverlay(component,params){var _params={cssClass:params.cssClass,labelStyle:component.labelStyle,id:_internalLabelOverlayId,component:component,_jsPlumb:component._jsPlumb.instance// TODO not necessary, since the instance can be accessed through the component.
},mergedParams=_jp.extend(_params,params);return new _jp.Overlays[component._jsPlumb.instance.getRenderMode()].Label(mergedParams);},_processOverlay=function _processOverlay(component,o){var _newOverlay=null;if(_ju.isArray(o)){// this is for the shorthand ["Arrow", { width:50 }] syntax
// there's also a three arg version:
// ["Arrow", { width:50 }, {location:0.7}]
// which merges the 3rd arg into the 2nd.
var type=o[0],// make a copy of the object so as not to mess up anyone else's reference...
p=_jp.extend({component:component,_jsPlumb:component._jsPlumb.instance},o[1]);if(o.length==3)_jp.extend(p,o[2]);_newOverlay=new _jp.Overlays[component._jsPlumb.instance.getRenderMode()][type](p);}else if(o.constructor==String){_newOverlay=new _jp.Overlays[component._jsPlumb.instance.getRenderMode()][o]({component:component,_jsPlumb:component._jsPlumb.instance});}else{_newOverlay=o;}_newOverlay.id=_newOverlay.id||_ju.uuid();component.cacheTypeItem("overlay",_newOverlay,_newOverlay.id);//component._jsPlumb.overlays.push(_newOverlay);
component._jsPlumb.overlays[_newOverlay.id]=_newOverlay;return _newOverlay;};_jp.OverlayCapableJsPlumbUIComponent=function(params){root.jsPlumbUIComponent.apply(this,arguments);this._jsPlumb.overlays={};this._jsPlumb.overlayPositions={};if(params.label){this.getDefaultType().overlays[_internalLabelOverlayId]=["Label",{label:params.label,location:params.labelLocation||this.defaultLabelLocation||0.5,labelStyle:params.labelStyle||this._jsPlumb.instance.Defaults.LabelStyle,id:_internalLabelOverlayId}];}this.setListenerComponent=function(c){if(this._jsPlumb){for(var i in this._jsPlumb.overlays){this._jsPlumb.overlays[i].setListenerComponent(c);}}};};_jp.OverlayCapableJsPlumbUIComponent.applyType=function(component,t){if(t.overlays){// loop through the ones in the type. if already present on the component,
// dont remove or re-add.
var keep={},i;for(i in t.overlays){var existing=component._jsPlumb.overlays[t.overlays[i][1].id];if(existing){// maybe update from data, if there were parameterised values for instance.
existing.updateFrom(t.overlays[i][1]);keep[t.overlays[i][1].id]=true;}else{var c=component.getCachedTypeItem("overlay",t.overlays[i][1].id);if(c!=null){c.reattach(component._jsPlumb.instance);c.setVisible(true);// maybe update from data, if there were parameterised values for instance.
c.updateFrom(t.overlays[i][1]);component._jsPlumb.overlays[c.id]=c;}else{c=component.addOverlay(t.overlays[i],true);}keep[c.id]=true;}}// now loop through the full overlays and remove those that we dont want to keep
for(i in component._jsPlumb.overlays){if(keep[component._jsPlumb.overlays[i].id]==null)component.removeOverlay(component._jsPlumb.overlays[i].id,true);// remove overlay but dont clean it up.
// that would remove event listeners etc; overlays are never discarded by the types stuff, they are
// just detached/reattached.
}}};_ju.extend(_jp.OverlayCapableJsPlumbUIComponent,root.jsPlumbUIComponent,{setHover:function setHover(hover,ignoreAttachedElements){if(this._jsPlumb&&!this._jsPlumb.instance.isConnectionBeingDragged()){for(var i in this._jsPlumb.overlays){this._jsPlumb.overlays[i][hover?"addClass":"removeClass"](this._jsPlumb.instance.hoverClass);}}},addOverlay:function addOverlay(overlay,doNotRepaint){var o=_processOverlay(this,overlay);if(!doNotRepaint)this.repaint();return o;},getOverlay:function getOverlay(id){return this._jsPlumb.overlays[id];},getOverlays:function getOverlays(){return this._jsPlumb.overlays;},hideOverlay:function hideOverlay(id){var o=this.getOverlay(id);if(o)o.hide();},hideOverlays:function hideOverlays(){for(var i in this._jsPlumb.overlays){this._jsPlumb.overlays[i].hide();}},showOverlay:function showOverlay(id){var o=this.getOverlay(id);if(o)o.show();},showOverlays:function showOverlays(){for(var i in this._jsPlumb.overlays){this._jsPlumb.overlays[i].show();}},removeAllOverlays:function removeAllOverlays(doNotRepaint){for(var i in this._jsPlumb.overlays){if(this._jsPlumb.overlays[i].cleanup)this._jsPlumb.overlays[i].cleanup();}this._jsPlumb.overlays={};this._jsPlumb.overlayPositions=null;if(!doNotRepaint)this.repaint();},removeOverlay:function removeOverlay(overlayId,dontCleanup){var o=this._jsPlumb.overlays[overlayId];if(o){o.setVisible(false);if(!dontCleanup&&o.cleanup)o.cleanup();delete this._jsPlumb.overlays[overlayId];if(this._jsPlumb.overlayPositions)delete this._jsPlumb.overlayPositions[overlayId];}},removeOverlays:function removeOverlays(){for(var i=0,j=arguments.length;i<j;i++){this.removeOverlay(arguments[i]);}},moveParent:function moveParent(newParent){if(this.bgCanvas){this.bgCanvas.parentNode.removeChild(this.bgCanvas);newParent.appendChild(this.bgCanvas);}if(this.canvas&&this.canvas.parentNode){this.canvas.parentNode.removeChild(this.canvas);newParent.appendChild(this.canvas);for(var i in this._jsPlumb.overlays){if(this._jsPlumb.overlays[i].isAppendedAtTopLevel){var el=this._jsPlumb.overlays[i].getElement();el.parentNode.removeChild(el);newParent.appendChild(el);}}}},getLabel:function getLabel(){var lo=this.getOverlay(_internalLabelOverlayId);return lo!=null?lo.getLabel():null;},getLabelOverlay:function getLabelOverlay(){return this.getOverlay(_internalLabelOverlayId);},setLabel:function setLabel(l){var lo=this.getOverlay(_internalLabelOverlayId);if(!lo){var params=l.constructor==String||l.constructor==Function?{label:l}:l;lo=_makeLabelOverlay(this,params);this._jsPlumb.overlays[_internalLabelOverlayId]=lo;}else{if(l.constructor==String||l.constructor==Function)lo.setLabel(l);else{if(l.label)lo.setLabel(l.label);if(l.location)lo.setLocation(l.location);}}if(!this._jsPlumb.instance.isSuspendDrawing())this.repaint();},cleanup:function cleanup(force){for(var i in this._jsPlumb.overlays){this._jsPlumb.overlays[i].cleanup(force);this._jsPlumb.overlays[i].destroy(force);}if(force){this._jsPlumb.overlays={};this._jsPlumb.overlayPositions=null;}},setVisible:function setVisible(v){this[v?"showOverlays":"hideOverlays"]();},setAbsoluteOverlayPosition:function setAbsoluteOverlayPosition(overlay,xy){this._jsPlumb.overlayPositions[overlay.id]=xy;},getAbsoluteOverlayPosition:function getAbsoluteOverlayPosition(overlay){return this._jsPlumb.overlayPositions?this._jsPlumb.overlayPositions[overlay.id]:null;},_clazzManip:function _clazzManip(action,clazz,dontUpdateOverlays){if(!dontUpdateOverlays){for(var i in this._jsPlumb.overlays){this._jsPlumb.overlays[i][action+"Class"](clazz);}}},addClass:function addClass(clazz,dontUpdateOverlays){this._clazzManip("add",clazz,dontUpdateOverlays);},removeClass:function removeClass(clazz,dontUpdateOverlays){this._clazzManip("remove",clazz,dontUpdateOverlays);}});// ------------------------------ END OverlayCapablejsPlumbUIComponent --------------------------------------------
}).call(typeof window!=='undefined'?window:this);/*
 * jsPlumb
 * 
 * Title:jsPlumb 2.3.0
 * 
 * Provides a way to visually connect elements on an HTML page, using SVG.
 * 
 * This file contains the code for Endpoints.
 *
 * Copyright (c) 2010 - 2017 jsPlumb (hello@jsplumbtoolkit.com)
 * 
 * http://jsplumbtoolkit.com
 * http://github.com/sporritt/jsplumb
 * 
 * Dual licensed under the MIT and GPL2 licenses.
 */(function(){"use strict";var root=this,_jp=root.jsPlumb,_ju=root.jsPlumbUtil;// create the drag handler for a connection
var _makeConnectionDragHandler=function _makeConnectionDragHandler(endpoint,placeholder,_jsPlumb){var stopped=false;return{drag:function drag(){if(stopped){stopped=false;return true;}if(placeholder.element){var _ui=_jsPlumb.getUIPosition(arguments,_jsPlumb.getZoom());if(_ui!=null)jsPlumb.setPosition(placeholder.element,_ui);_jsPlumb.repaint(placeholder.element,_ui);// always repaint the source endpoint, because only continuous/dynamic anchors cause the endpoint
// to be repainted, so static anchors need to be told (or the endpoint gets dragged around)
endpoint.paint({anchorPoint:endpoint.anchor.getCurrentLocation({element:endpoint})});}},stopDrag:function stopDrag(){stopped=true;}};};// creates a placeholder div for dragging purposes, adds it, and pre-computes its offset.
var _makeDraggablePlaceholder=function _makeDraggablePlaceholder(placeholder,_jsPlumb,ipco,ips){var n=jsPlumb.createElement("div",{position:"absolute"});_jsPlumb.appendElement(n);var id=_jsPlumb.getId(n);jsPlumb.setPosition(n,ipco);n.style.width=ips[0]+"px";n.style.height=ips[1]+"px";_jsPlumb.manage(id,n,true);// TRANSIENT MANAGE
// create and assign an id, and initialize the offset.
placeholder.id=id;placeholder.element=n;};// create a floating endpoint (for drag connections)
var _makeFloatingEndpoint=function _makeFloatingEndpoint(paintStyle,referenceAnchor,endpoint,referenceCanvas,sourceElement,_jsPlumb,_newEndpoint,scope){var floatingAnchor=new _jp.FloatingAnchor({reference:referenceAnchor,referenceCanvas:referenceCanvas,jsPlumbInstance:_jsPlumb});//setting the scope here should not be the way to fix that mootools issue.  it should be fixed by not
// adding the floating endpoint as a droppable.  that makes more sense anyway!
// TRANSIENT MANAGE
return _newEndpoint({paintStyle:paintStyle,endpoint:endpoint,anchor:floatingAnchor,source:sourceElement,scope:scope});};var typeParameters=["connectorStyle","connectorHoverStyle","connectorOverlays","connector","connectionType","connectorClass","connectorHoverClass"];// a helper function that tries to find a connection to the given element, and returns it if so. if elementWithPrecedence is null,
// or no connection to it is found, we return the first connection in our list.
var findConnectionToUseForDynamicAnchor=function findConnectionToUseForDynamicAnchor(ep,elementWithPrecedence){var idx=0;if(elementWithPrecedence!=null){for(var i=0;i<ep.connections.length;i++){if(ep.connections[i].sourceId==elementWithPrecedence||ep.connections[i].targetId==elementWithPrecedence){idx=i;break;}}}return ep.connections[idx];};_jp.Endpoint=function(params){var _jsPlumb=params._jsPlumb,_newConnection=params.newConnection,_newEndpoint=params.newEndpoint;this.idPrefix="_jsplumb_e_";this.defaultLabelLocation=[0.5,0.5];this.defaultOverlayKeys=["Overlays","EndpointOverlays"];_jp.OverlayCapableJsPlumbUIComponent.apply(this,arguments);// TYPE
this.appendToDefaultType({connectionType:params.connectionType,maxConnections:params.maxConnections==null?this._jsPlumb.instance.Defaults.MaxConnections:params.maxConnections,// maximum number of connections this endpoint can be the source of.,
paintStyle:params.endpointStyle||params.paintStyle||params.style||this._jsPlumb.instance.Defaults.EndpointStyle||_jp.Defaults.EndpointStyle,hoverPaintStyle:params.endpointHoverStyle||params.hoverPaintStyle||this._jsPlumb.instance.Defaults.EndpointHoverStyle||_jp.Defaults.EndpointHoverStyle,connectorStyle:params.connectorStyle,connectorHoverStyle:params.connectorHoverStyle,connectorClass:params.connectorClass,connectorHoverClass:params.connectorHoverClass,connectorOverlays:params.connectorOverlays,connector:params.connector,connectorTooltip:params.connectorTooltip});// END TYPE
this._jsPlumb.enabled=!(params.enabled===false);this._jsPlumb.visible=true;this.element=_jp.getElement(params.source);this._jsPlumb.uuid=params.uuid;this._jsPlumb.floatingEndpoint=null;var inPlaceCopy=null;if(this._jsPlumb.uuid)params.endpointsByUUID[this._jsPlumb.uuid]=this;this.elementId=params.elementId;this.dragProxy=params.dragProxy;this._jsPlumb.connectionCost=params.connectionCost;this._jsPlumb.connectionsDirected=params.connectionsDirected;this._jsPlumb.currentAnchorClass="";this._jsPlumb.events={};var deleteOnEmpty=params.deleteOnEmpty===true;this.setDeleteOnEmpty=function(d){deleteOnEmpty=d;};var _updateAnchorClass=function(){// stash old, get new
var oldAnchorClass=_jsPlumb.endpointAnchorClassPrefix+"-"+this._jsPlumb.currentAnchorClass;this._jsPlumb.currentAnchorClass=this.anchor.getCssClass();var anchorClass=_jsPlumb.endpointAnchorClassPrefix+(this._jsPlumb.currentAnchorClass?"-"+this._jsPlumb.currentAnchorClass:"");this.removeClass(oldAnchorClass);this.addClass(anchorClass);// add and remove at the same time to reduce the number of reflows.
_jp.updateClasses(this.element,anchorClass,oldAnchorClass);}.bind(this);this.prepareAnchor=function(anchorParams){var a=this._jsPlumb.instance.makeAnchor(anchorParams,this.elementId,_jsPlumb);a.bind("anchorChanged",function(currentAnchor){this.fire("anchorChanged",{endpoint:this,anchor:currentAnchor});_updateAnchorClass();}.bind(this));return a;};this.setPreparedAnchor=function(anchor,doNotRepaint){this._jsPlumb.instance.continuousAnchorFactory.clear(this.elementId);this.anchor=anchor;_updateAnchorClass();if(!doNotRepaint)this._jsPlumb.instance.repaint(this.elementId);return this;};this.setAnchor=function(anchorParams,doNotRepaint){var a=this.prepareAnchor(anchorParams);this.setPreparedAnchor(a,doNotRepaint);return this;};var internalHover=function(state){if(this.connections.length>0){for(var i=0;i<this.connections.length;i++){this.connections[i].setHover(state,false);}}else this.setHover(state);}.bind(this);this.bind("mouseover",function(){internalHover(true);});this.bind("mouseout",function(){internalHover(false);});// ANCHOR MANAGER
if(!params._transient)// in place copies, for example, are transient.  they will never need to be retrieved during a paint cycle, because they dont move, and then they are deleted.
this._jsPlumb.instance.anchorManager.add(this,this.elementId);this.prepareEndpoint=function(ep,typeId){var _e=function _e(t,p){var rm=_jsPlumb.getRenderMode();if(_jp.Endpoints[rm][t])return new _jp.Endpoints[rm][t](p);if(!_jsPlumb.Defaults.DoNotThrowErrors)throw{msg:"jsPlumb: unknown endpoint type '"+t+"'"};};var endpointArgs={_jsPlumb:this._jsPlumb.instance,cssClass:params.cssClass,container:params.container,tooltip:params.tooltip,connectorTooltip:params.connectorTooltip,endpoint:this};var endpoint;if(_ju.isString(ep))endpoint=_e(ep,endpointArgs);else if(_ju.isArray(ep)){endpointArgs=_ju.merge(ep[1],endpointArgs);endpoint=_e(ep[0],endpointArgs);}else{endpoint=ep.clone();}// assign a clone function using a copy of endpointArgs. this is used when a drag starts: the endpoint that was dragged is cloned,
// and the clone is left in its place while the original one goes off on a magical journey.
// the copy is to get around a closure problem, in which endpointArgs ends up getting shared by
// the whole world.
//var argsForClone = jsPlumb.extend({}, endpointArgs);
endpoint.clone=function(){// TODO this, and the code above, can be refactored to be more dry.
if(_ju.isString(ep))return _e(ep,endpointArgs);else if(_ju.isArray(ep)){endpointArgs=_ju.merge(ep[1],endpointArgs);return _e(ep[0],endpointArgs);}}.bind(this);endpoint.typeId=typeId;return endpoint;};this.setEndpoint=function(ep,doNotRepaint){var _ep=this.prepareEndpoint(ep);this.setPreparedEndpoint(_ep,true);};this.setPreparedEndpoint=function(ep,doNotRepaint){if(this.endpoint!=null){this.endpoint.cleanup();this.endpoint.destroy();}this.endpoint=ep;this.type=this.endpoint.type;this.canvas=this.endpoint.canvas;};_jp.extend(this,params,typeParameters);this.isSource=params.isSource||false;this.isTemporarySource=params.isTemporarySource||false;this.isTarget=params.isTarget||false;this.connections=params.connections||[];this.connectorPointerEvents=params["connector-pointer-events"];this.scope=params.scope||_jsPlumb.getDefaultScope();this.timestamp=null;this.reattachConnections=params.reattach||_jsPlumb.Defaults.ReattachConnections;this.connectionsDetachable=_jsPlumb.Defaults.ConnectionsDetachable;if(params.connectionsDetachable===false||params.detachable===false)this.connectionsDetachable=false;this.dragAllowedWhenFull=params.dragAllowedWhenFull!==false;if(params.onMaxConnections)this.bind("maxConnections",params.onMaxConnections);//
// add a connection. not part of public API.
//
this.addConnection=function(connection){this.connections.push(connection);this[(this.connections.length>0?"add":"remove")+"Class"](_jsPlumb.endpointConnectedClass);this[(this.isFull()?"add":"remove")+"Class"](_jsPlumb.endpointFullClass);};this.detachFromConnection=function(connection,idx,doNotCleanup){idx=idx==null?this.connections.indexOf(connection):idx;if(idx>=0){this.connections.splice(idx,1);this[(this.connections.length>0?"add":"remove")+"Class"](_jsPlumb.endpointConnectedClass);this[(this.isFull()?"add":"remove")+"Class"](_jsPlumb.endpointFullClass);}//if ((this._forceDeleteOnDetach || (!doNotCleanup && this._deleteOnDetach)) && this.connections.length === 0) {
if(!doNotCleanup&&deleteOnEmpty&&this.connections.length===0){_jsPlumb.deleteObject({endpoint:this,fireEvent:false,deleteAttachedObjects:doNotCleanup!==true});}};this.deleteEveryConnection=function(params){var c=this.connections.length;for(var i=0;i<c;i++){_jsPlumb.deleteConnection(this.connections[0],params);}};//this.detach = function (connection, ignoreTarget, forceDetach, fireEvent, originalEvent, endpointBeingDeleted, connectionIndex) {
//        this.detach = function (params) {
//            var connectionIndex = params.connectionIndex,
//                connection = params.connection,
//                ignoreTarget = params.ignoreTarget,
//                fireEvent = params.fireEvent,
//                originalEvent = params.originalEvent,
//                endpointBeingDeleted = params.endpointBeingDeleted,
//                forceDetach = params.forceDetach;
//
//            var idx = connectionIndex == null ? this.connections.indexOf(connection) : connectionIndex,
//                actuallyDetached = false;
//            fireEvent = (fireEvent !== false);
//
//            if (idx >= 0) {
//
//                if (forceDetach || connection._forceDetach || (connection.isDetachable() && connection.isDetachAllowed(connection) && this.isDetachAllowed(connection) && _jsPlumb.checkCondition("beforeDetach", connection, endpointBeingDeleted) )) {
//
//                    _jsPlumb.deleteObject({
//                        connection: connection,
//                        fireEvent: (!ignoreTarget && fireEvent),
//                        originalEvent: originalEvent,
//                        deleteAttachedObjects:params.deleteAttachedObjects
//                        //deleteAttachedObjects:null
//                    });
//                    actuallyDetached = true;
//                }
//            }
//            return actuallyDetached;
//        };
//        this.detachAll = function (fireEvent, forceDetach) {
//            var unaffectedConns = [];
//            while (this.connections.length > 0) {
//                // TODO this could pass the index in to the detach method to save some time (index will always be zero in this while loop)
//                var actuallyDetached = _jsPlumb.detach({
//                    connection:this.connections[0],
//                    ignoreTarget:false,
//                    forceDetach:forceDetach === true,
//                    fireEvent:fireEvent !== false,
//                    originalEvent:null,
//                    endpointBeingDeleted:this,
//                    connectionIndex:0
//                });
//                if (!actuallyDetached) {
//                    unaffectedConns.push(this.connections[0]);
//                    this.connections.splice(0, 1);
//                }
//            }
//            this.connections = unaffectedConns;
//            return this;
//        };
this.detachFrom=function(targetEndpoint,fireEvent,originalEvent){var c=[];for(var i=0;i<this.connections.length;i++){if(this.connections[i].endpoints[1]==targetEndpoint||this.connections[i].endpoints[0]==targetEndpoint){c.push(this.connections[i]);}}var count=c.length;for(var j=0;j<count;j++){//                this.detach({
//                    connection:c[j],
//                    ignoreTarget:false,
//                    forceDetach:true,
//                    fireEvent:fireEvent,
//                    originalEvent:originalEvent
//                });
_jsPlumb.deleteConnection(c[0]);}return this;};this.getElement=function(){return this.element;};this.setElement=function(el){var parentId=this._jsPlumb.instance.getId(el),curId=this.elementId;// remove the endpoint from the list for the current endpoint's element
_ju.removeWithFunction(params.endpointsByElement[this.elementId],function(e){return e.id==this.id;}.bind(this));this.element=_jp.getElement(el);this.elementId=_jsPlumb.getId(this.element);_jsPlumb.anchorManager.rehomeEndpoint(this,curId,this.element);_jsPlumb.dragManager.endpointAdded(this.element);_ju.addToList(params.endpointsByElement,parentId,this);return this;};/**
         * private but must be exposed.
         */this.makeInPlaceCopy=function(){var loc=this.anchor.getCurrentLocation({element:this}),o=this.anchor.getOrientation(this),acc=this.anchor.getCssClass(),inPlaceAnchor={bind:function bind(){},compute:function compute(){return[loc[0],loc[1]];},getCurrentLocation:function getCurrentLocation(){return[loc[0],loc[1]];},getOrientation:function getOrientation(){return o;},getCssClass:function getCssClass(){return acc;}};return _newEndpoint({dropOptions:params.dropOptions,anchor:inPlaceAnchor,source:this.element,paintStyle:this.getPaintStyle(),endpoint:params.hideOnDrag?"Blank":this.endpoint,_transient:true,scope:this.scope,reference:this});};/**
         * returns a connection from the pool; used when dragging starts.  just gets the head of the array if it can.
         */this.connectorSelector=function(){var candidate=this.connections[0];// SP target source refactor
if(/*this.isTarget && */candidate)return candidate;else{return this.connections.length<this._jsPlumb.maxConnections||this._jsPlumb.maxConnections==-1?null:candidate;}};this.setStyle=this.setPaintStyle;this.paint=function(params){params=params||{};var timestamp=params.timestamp,recalc=!(params.recalc===false);if(!timestamp||this.timestamp!==timestamp){var info=_jsPlumb.updateOffset({elId:this.elementId,timestamp:timestamp});var xy=params.offset?params.offset.o:info.o;if(xy!=null){var ap=params.anchorPoint,connectorPaintStyle=params.connectorPaintStyle;if(ap==null){var wh=params.dimensions||info.s,anchorParams={xy:[xy.left,xy.top],wh:wh,element:this,timestamp:timestamp};if(recalc&&this.anchor.isDynamic&&this.connections.length>0){var c=findConnectionToUseForDynamicAnchor(this,params.elementWithPrecedence),oIdx=c.endpoints[0]==this?1:0,oId=oIdx===0?c.sourceId:c.targetId,oInfo=_jsPlumb.getCachedData(oId),oOffset=oInfo.o,oWH=oInfo.s;anchorParams.txy=[oOffset.left,oOffset.top];anchorParams.twh=oWH;anchorParams.tElement=c.endpoints[oIdx];}ap=this.anchor.compute(anchorParams);}this.endpoint.compute(ap,this.anchor.getOrientation(this),this._jsPlumb.paintStyleInUse,connectorPaintStyle||this.paintStyleInUse);this.endpoint.paint(this._jsPlumb.paintStyleInUse,this.anchor);this.timestamp=timestamp;// paint overlays
for(var i in this._jsPlumb.overlays){if(this._jsPlumb.overlays.hasOwnProperty(i)){var o=this._jsPlumb.overlays[i];if(o.isVisible()){this._jsPlumb.overlayPlacements[i]=o.draw(this.endpoint,this._jsPlumb.paintStyleInUse);o.paint(this._jsPlumb.overlayPlacements[i]);}}}}}};this.getTypeDescriptor=function(){return"endpoint";};this.isVisible=function(){return this._jsPlumb.visible;};this.repaint=this.paint;var draggingInitialised=false;this.initDraggable=function(){// is this a connection source? we make it draggable and have the
// drag listener maintain a connection with a floating endpoint.
if(!draggingInitialised&&_jp.isDragSupported(this.element)){var placeholderInfo={id:null,element:null},jpc=null,existingJpc=false,existingJpcParams=null,_dragHandler=_makeConnectionDragHandler(this,placeholderInfo,_jsPlumb),dragOptions=params.dragOptions||{},defaultOpts={},startEvent=_jp.dragEvents.start,stopEvent=_jp.dragEvents.stop,dragEvent=_jp.dragEvents.drag,beforeStartEvent=_jp.dragEvents.beforeStart,payload;// respond to beforeStart from katavorio; this will have, optionally, a payload of attribute values
// that were placed there by the makeSource mousedown listener.
var beforeStart=function beforeStart(beforeStartParams){payload=beforeStartParams.e.payload||{};};var start=function(startParams){// -------------   first, get a connection to drag. this may be null, in which case we are dragging a new one.
jpc=this.connectorSelector();// -------------------------------- now a bunch of tests about whether or not to proceed -------------------------
var _continue=true;// if not enabled, return
if(!this.isEnabled())_continue=false;// if no connection and we're not a source - or temporarily a source, as is the case with makeSource - return.
if(jpc==null&&!this.isSource&&!this.isTemporarySource)_continue=false;// otherwise if we're full and not allowed to drag, also return false.
if(this.isSource&&this.isFull()&&!(jpc!=null&&this.dragAllowedWhenFull))_continue=false;// if the connection was setup as not detachable or one of its endpoints
// was setup as connectionsDetachable = false, or Defaults.ConnectionsDetachable
// is set to false...
if(jpc!=null&&!jpc.isDetachable(this))_continue=false;var beforeDrag=_jsPlumb.checkCondition(jpc==null?"beforeDrag":"beforeStartDetach",{endpoint:this,source:this.element,sourceId:this.elementId,connection:jpc});if(beforeDrag===false)_continue=false;// else we might have been given some data. we'll pass it in to a new connection as 'data'.
// here we also merge in the optional payload we were given on mousedown.
else if((typeof beforeDrag==="undefined"?"undefined":_typeof(beforeDrag))==="object"){_jp.extend(beforeDrag,payload||{});}else// or if no beforeDrag data, maybe use the payload on its own.
beforeDrag=payload||{};if(_continue===false){// this is for mootools and yui. returning false from this causes jquery to stop drag.
// the events are wrapped in both mootools and yui anyway, but i don't think returning
// false from the start callback would stop a drag.
if(_jsPlumb.stopDrag)_jsPlumb.stopDrag(this.canvas);_dragHandler.stopDrag();return false;}// ---------------------------------------------------------------------------------------------------------------------
// ok to proceed.
// clear hover for all connections for this endpoint before continuing.
for(var i=0;i<this.connections.length;i++){this.connections[i].setHover(false);}this.addClass("endpointDrag");_jsPlumb.setConnectionBeingDragged(true);// if we're not full but there was a connection, make it null. we'll create a new one.
if(jpc&&!this.isFull()&&this.isSource)jpc=null;_jsPlumb.updateOffset({elId:this.elementId});// ----------------    make the element we will drag around, and position it -----------------------------
var ipco=this._jsPlumb.instance.getOffset(this.canvas),canvasElement=this.canvas,ips=this._jsPlumb.instance.getSize(this.canvas);_makeDraggablePlaceholder(placeholderInfo,_jsPlumb,ipco,ips);// store the id of the dragging div and the source element. the drop function will pick these up.                   
_jsPlumb.setAttributes(this.canvas,{"dragId":placeholderInfo.id,"elId":this.elementId});// ------------------- create an endpoint that will be our floating endpoint ------------------------------------
var endpointToFloat=this.dragProxy||this.endpoint;if(this.dragProxy==null&&this.connectionType!=null){var aae=this._jsPlumb.instance.deriveEndpointAndAnchorSpec(this.connectionType);if(aae.endpoints[1])endpointToFloat=aae.endpoints[1];}var centerAnchor=this._jsPlumb.instance.makeAnchor("Center");centerAnchor.isFloating=true;this._jsPlumb.floatingEndpoint=_makeFloatingEndpoint(this.getPaintStyle(),centerAnchor,endpointToFloat,this.canvas,placeholderInfo.element,_jsPlumb,_newEndpoint,this.scope);var _savedAnchor=this._jsPlumb.floatingEndpoint.anchor;if(jpc==null){this.setHover(false,false);// create a connection. one end is this endpoint, the other is a floating endpoint.                    
jpc=_newConnection({sourceEndpoint:this,targetEndpoint:this._jsPlumb.floatingEndpoint,source:this.element,// for makeSource with parent option.  ensure source element is represented correctly.
target:placeholderInfo.element,anchors:[this.anchor,this._jsPlumb.floatingEndpoint.anchor],paintStyle:params.connectorStyle,// this can be null. Connection will use the default.
hoverPaintStyle:params.connectorHoverStyle,connector:params.connector,// this can also be null. Connection will use the default.
overlays:params.connectorOverlays,type:this.connectionType,cssClass:this.connectorClass,hoverClass:this.connectorHoverClass,scope:params.scope,data:beforeDrag});jpc.pending=true;jpc.addClass(_jsPlumb.draggingClass);this._jsPlumb.floatingEndpoint.addClass(_jsPlumb.draggingClass);this._jsPlumb.floatingEndpoint.anchor=_savedAnchor;// fire an event that informs that a connection is being dragged
_jsPlumb.fire("connectionDrag",jpc);// register the new connection on the drag manager. This connection, at this point, is 'pending',
// and has as its target a temporary element (the 'placeholder'). If the connection subsequently
// becomes established, the anchor manager is informed that the target of the connection has
// changed.
_jsPlumb.anchorManager.newConnection(jpc);}else{existingJpc=true;jpc.setHover(false);// new anchor idx
var anchorIdx=jpc.endpoints[0].id==this.id?0:1;this.detachFromConnection(jpc,null,true);// detach from the connection while dragging is occurring. but dont cleanup automatically.
// store the original scope (issue 57)
var dragScope=_jsPlumb.getDragScope(canvasElement);_jsPlumb.setAttribute(this.canvas,"originalScope",dragScope);// fire an event that informs that a connection is being dragged. we do this before
// replacing the original target with the floating element info.
_jsPlumb.fire("connectionDrag",jpc);// now we replace ourselves with the temporary div we created above:
if(anchorIdx===0){existingJpcParams=[jpc.source,jpc.sourceId,canvasElement,dragScope];_jsPlumb.anchorManager.sourceChanged(jpc.endpoints[anchorIdx].elementId,placeholderInfo.id,jpc,placeholderInfo.element);}else{existingJpcParams=[jpc.target,jpc.targetId,canvasElement,dragScope];jpc.target=placeholderInfo.element;jpc.targetId=placeholderInfo.id;_jsPlumb.anchorManager.updateOtherEndpoint(jpc.sourceId,jpc.endpoints[anchorIdx].elementId,jpc.targetId,jpc);}// store the original endpoint and assign the new floating endpoint for the drag.
jpc.suspendedEndpoint=jpc.endpoints[anchorIdx];// PROVIDE THE SUSPENDED ELEMENT, BE IT A SOURCE OR TARGET (ISSUE 39)
jpc.suspendedElement=jpc.endpoints[anchorIdx].getElement();jpc.suspendedElementId=jpc.endpoints[anchorIdx].elementId;jpc.suspendedElementType=anchorIdx===0?"source":"target";jpc.suspendedEndpoint.setHover(false);this._jsPlumb.floatingEndpoint.referenceEndpoint=jpc.suspendedEndpoint;jpc.endpoints[anchorIdx]=this._jsPlumb.floatingEndpoint;jpc.addClass(_jsPlumb.draggingClass);this._jsPlumb.floatingEndpoint.addClass(_jsPlumb.draggingClass);}// register it and register connection on it.
_jsPlumb.floatingConnections[placeholderInfo.id]=jpc;// only register for the target endpoint; we will not be dragging the source at any time
// before this connection is either discarded or made into a permanent connection.
_ju.addToList(params.endpointsByElement,placeholderInfo.id,this._jsPlumb.floatingEndpoint);// tell jsplumb about it
_jsPlumb.currentlyDragging=true;}.bind(this);var stop=function(){_jsPlumb.setConnectionBeingDragged(false);if(jpc&&jpc.endpoints!=null){// get the actual drop event (decode from library args to stop function)
var originalEvent=_jsPlumb.getDropEvent(arguments);// unlock the other endpoint (if it is dynamic, it would have been locked at drag start)
var idx=_jsPlumb.getFloatingAnchorIndex(jpc);jpc.endpoints[idx===0?1:0].anchor.locked=false;// TODO: Dont want to know about css classes inside jsplumb, ideally.
jpc.removeClass(_jsPlumb.draggingClass);// if we have the floating endpoint then the connection has not been dropped
// on another endpoint.  If it is a new connection we throw it away. If it is an
// existing connection we check to see if we should reattach it, throwing it away
// if not.
if(this._jsPlumb&&(jpc.deleteConnectionNow||jpc.endpoints[idx]==this._jsPlumb.floatingEndpoint)){// 6a. if the connection was an existing one...
if(existingJpc&&jpc.suspendedEndpoint){// fix for issue35, thanks Sylvain Gizard: when firing the detach event make sure the
// floating endpoint has been replaced.
if(idx===0){jpc.floatingElement=jpc.source;jpc.floatingId=jpc.sourceId;jpc.floatingEndpoint=jpc.endpoints[0];jpc.floatingIndex=0;jpc.source=existingJpcParams[0];jpc.sourceId=existingJpcParams[1];}else{// keep a copy of the floating element; the anchor manager will want to clean up.
jpc.floatingElement=jpc.target;jpc.floatingId=jpc.targetId;jpc.floatingEndpoint=jpc.endpoints[1];jpc.floatingIndex=1;jpc.target=existingJpcParams[0];jpc.targetId=existingJpcParams[1];}var fe=this._jsPlumb.floatingEndpoint;// store for later removal.
// restore the original scope (issue 57)
_jsPlumb.setDragScope(existingJpcParams[2],existingJpcParams[3]);jpc.endpoints[idx]=jpc.suspendedEndpoint;// IF the connection should be reattached, or the other endpoint refuses detach, then
// reset the connection to its original state
//if (jpc.isReattach() || jpc._forceReattach || jpc._forceDetach || !jpc.endpoints[idx === 0 ? 1 : 0].detach({connection:jpc, ignoreTarget:false, forceDetach:false, fireEvent:true, originalEvent:originalEvent, endpointBeingDeleted:true})) {
if(jpc.isReattach()||jpc._forceReattach||jpc._forceDetach||!_jsPlumb.deleteConnection(jpc)){jpc.setHover(false);jpc._forceDetach=null;jpc._forceReattach=null;this._jsPlumb.floatingEndpoint.detachFromConnection(jpc);jpc.suspendedEndpoint.addConnection(jpc);// TODO this code is duplicated in lots of places...and there is nothing external
// in the code; it all refers to the connection itself. we could add a
// `checkSanity(connection)` method to anchorManager that did this.
if(idx==1){_jsPlumb.anchorManager.updateOtherEndpoint(jpc.sourceId,jpc.floatingId,jpc.targetId,jpc);}else{_jsPlumb.anchorManager.sourceChanged(jpc.floatingId,jpc.sourceId,jpc,jpc.source);}_jsPlumb.repaint(existingJpcParams[1]);}else{_jsPlumb.deleteObject({endpoint:fe});}}}// makeTargets sets this flag, to tell us we have been replaced and should delete this object.
if(this.deleteAfterDragStop){_jsPlumb.deleteObject({endpoint:this});}else{if(this._jsPlumb){this.paint({recalc:false});}}// although the connection is no longer valid, there are use cases where this is useful.
_jsPlumb.fire("connectionDragStop",jpc,originalEvent);// fire this event to give people more fine-grained control (connectionDragStop fires a lot)
if(jpc.pending){_jsPlumb.fire("connectionAborted",jpc,originalEvent);}// tell jsplumb that dragging is finished.
_jsPlumb.currentlyDragging=false;jpc.suspendedElement=null;jpc.suspendedEndpoint=null;jpc=null;}// if no endpoints, jpc already cleaned up. but still we want to ensure we're reset properly.
// remove the element associated with the floating endpoint
// (and its associated floating endpoint and visual artefacts)
if(placeholderInfo&&placeholderInfo.element){_jsPlumb.remove(placeholderInfo.element,false,false);}// remove the inplace copy
if(inPlaceCopy){_jsPlumb.deleteObject({endpoint:inPlaceCopy});}if(this._jsPlumb){// make our canvas visible (TODO: hand off to library; we should not know about DOM)
this.canvas.style.visibility="visible";// unlock our anchor
this.anchor.locked=false;// clear floating anchor.
this._jsPlumb.floatingEndpoint=null;}}.bind(this);dragOptions=_jp.extend(defaultOpts,dragOptions);dragOptions.scope=this.scope||dragOptions.scope;dragOptions[beforeStartEvent]=_ju.wrap(dragOptions[beforeStartEvent],beforeStart,false);dragOptions[startEvent]=_ju.wrap(dragOptions[startEvent],start,false);// extracted drag handler function so can be used by makeSource
dragOptions[dragEvent]=_ju.wrap(dragOptions[dragEvent],_dragHandler.drag);dragOptions[stopEvent]=_ju.wrap(dragOptions[stopEvent],stop);dragOptions.multipleDrop=false;dragOptions.canDrag=function(){return this.isSource||this.isTemporarySource||/*(this.isTarget && */this.connections.length>0/*)*/;}.bind(this);_jsPlumb.initDraggable(this.canvas,dragOptions,"internal");this.canvas._jsPlumbRelatedElement=this.element;draggingInitialised=true;}};var ep=params.endpoint||this._jsPlumb.instance.Defaults.Endpoint||_jp.Defaults.Endpoint;this.setEndpoint(ep,true);var anchorParamsToUse=params.anchor?params.anchor:params.anchors?params.anchors:_jsPlumb.Defaults.Anchor||"Top";this.setAnchor(anchorParamsToUse,true);// finally, set type if it was provided
var type=["default",params.type||""].join(" ");this.addType(type,params.data,true);this.canvas=this.endpoint.canvas;this.canvas._jsPlumb=this;this.initDraggable();// pulled this out into a function so we can reuse it for the inPlaceCopy canvas; you can now drop detached connections
// back onto the endpoint you detached it from.
var _initDropTarget=function(canvas,isTransient,endpoint,referenceEndpoint){if(_jp.isDropSupported(this.element)){var dropOptions=params.dropOptions||_jsPlumb.Defaults.DropOptions||_jp.Defaults.DropOptions;dropOptions=_jp.extend({},dropOptions);dropOptions.scope=dropOptions.scope||this.scope;var dropEvent=_jp.dragEvents.drop,overEvent=_jp.dragEvents.over,outEvent=_jp.dragEvents.out,_ep=this,drop=_jsPlumb.EndpointDropHandler({getEndpoint:function getEndpoint(){return _ep;},jsPlumb:_jsPlumb,enabled:function enabled(){return endpoint!=null?endpoint.isEnabled():true;},isFull:function isFull(){return endpoint.isFull();},element:this.element,elementId:this.elementId,isSource:this.isSource,isTarget:this.isTarget,addClass:function addClass(clazz){_ep.addClass(clazz);},removeClass:function removeClass(clazz){_ep.removeClass(clazz);},isDropAllowed:function isDropAllowed(){return _ep.isDropAllowed.apply(_ep,arguments);},reference:referenceEndpoint,isRedrop:function isRedrop(jpc,dhParams){return jpc.suspendedEndpoint&&dhParams.reference&&jpc.suspendedEndpoint.id===dhParams.reference.id;}});dropOptions[dropEvent]=_ju.wrap(dropOptions[dropEvent],drop,true);dropOptions[overEvent]=_ju.wrap(dropOptions[overEvent],function(){var draggable=_jp.getDragObject(arguments),id=_jsPlumb.getAttribute(_jp.getElement(draggable),"dragId"),_jpc=_jsPlumb.floatingConnections[id];if(_jpc!=null){var idx=_jsPlumb.getFloatingAnchorIndex(_jpc);// here we should fire the 'over' event if we are a target and this is a new connection,
// or we are the same as the floating endpoint.
var _cont=this.isTarget&&idx!==0||_jpc.suspendedEndpoint&&this.referenceEndpoint&&this.referenceEndpoint.id==_jpc.suspendedEndpoint.id;if(_cont){var bb=_jsPlumb.checkCondition("checkDropAllowed",{sourceEndpoint:_jpc.endpoints[idx],targetEndpoint:this,connection:_jpc});this[(bb?"add":"remove")+"Class"](_jsPlumb.endpointDropAllowedClass);this[(bb?"remove":"add")+"Class"](_jsPlumb.endpointDropForbiddenClass);_jpc.endpoints[idx].anchor.over(this.anchor,this);}}}.bind(this));dropOptions[outEvent]=_ju.wrap(dropOptions[outEvent],function(){var draggable=_jp.getDragObject(arguments),id=draggable==null?null:_jsPlumb.getAttribute(_jp.getElement(draggable),"dragId"),_jpc=id?_jsPlumb.floatingConnections[id]:null;if(_jpc!=null){var idx=_jsPlumb.getFloatingAnchorIndex(_jpc);var _cont=this.isTarget&&idx!==0||_jpc.suspendedEndpoint&&this.referenceEndpoint&&this.referenceEndpoint.id==_jpc.suspendedEndpoint.id;if(_cont){this.removeClass(_jsPlumb.endpointDropAllowedClass);this.removeClass(_jsPlumb.endpointDropForbiddenClass);_jpc.endpoints[idx].anchor.out();}}}.bind(this));_jsPlumb.initDroppable(canvas,dropOptions,"internal",isTransient);}}.bind(this);// Initialise the endpoint's canvas as a drop target. The drop handler will take care of the logic of whether
// something can actually be dropped.
if(!this.anchor.isFloating)_initDropTarget(this.canvas,!(params._transient||this.anchor.isFloating),this,params.reference);return this;};_ju.extend(_jp.Endpoint,_jp.OverlayCapableJsPlumbUIComponent,{setVisible:function setVisible(v,doNotChangeConnections,doNotNotifyOtherEndpoint){this._jsPlumb.visible=v;if(this.canvas)this.canvas.style.display=v?"block":"none";this[v?"showOverlays":"hideOverlays"]();if(!doNotChangeConnections){for(var i=0;i<this.connections.length;i++){this.connections[i].setVisible(v);if(!doNotNotifyOtherEndpoint){var oIdx=this===this.connections[i].endpoints[0]?1:0;// only change the other endpoint if this is its only connection.
if(this.connections[i].endpoints[oIdx].connections.length==1)this.connections[i].endpoints[oIdx].setVisible(v,true,true);}}}},getAttachedElements:function getAttachedElements(){return this.connections;},applyType:function applyType(t,doNotRepaint){this.setPaintStyle(t.endpointStyle||t.paintStyle,doNotRepaint);this.setHoverPaintStyle(t.endpointHoverStyle||t.hoverPaintStyle,doNotRepaint);if(t.maxConnections!=null)this._jsPlumb.maxConnections=t.maxConnections;if(t.scope)this.scope=t.scope;_jp.extend(this,t,typeParameters);if(t.cssClass!=null&&this.canvas)this._jsPlumb.instance.addClass(this.canvas,t.cssClass);_jp.OverlayCapableJsPlumbUIComponent.applyType(this,t);},isEnabled:function isEnabled(){return this._jsPlumb.enabled;},setEnabled:function setEnabled(e){this._jsPlumb.enabled=e;},cleanup:function cleanup(){var anchorClass=this._jsPlumb.instance.endpointAnchorClassPrefix+(this._jsPlumb.currentAnchorClass?"-"+this._jsPlumb.currentAnchorClass:"");_jp.removeClass(this.element,anchorClass);this.anchor=null;this.endpoint.cleanup(true);this.endpoint.destroy();this.endpoint=null;// drag/drop
this._jsPlumb.instance.destroyDraggable(this.canvas,"internal");this._jsPlumb.instance.destroyDroppable(this.canvas,"internal");},setHover:function setHover(h){if(this.endpoint&&this._jsPlumb&&!this._jsPlumb.instance.isConnectionBeingDragged())this.endpoint.setHover(h);},isFull:function isFull(){return this._jsPlumb.maxConnections===0?true:!(this.isFloating()||this._jsPlumb.maxConnections<0||this.connections.length<this._jsPlumb.maxConnections);},/**
         * private but needs to be exposed.
         */isFloating:function isFloating(){return this.anchor!=null&&this.anchor.isFloating;},isConnectedTo:function isConnectedTo(endpoint){var found=false;if(endpoint){for(var i=0;i<this.connections.length;i++){if(this.connections[i].endpoints[1]==endpoint||this.connections[i].endpoints[0]==endpoint){found=true;break;}}}return found;},getConnectionCost:function getConnectionCost(){return this._jsPlumb.connectionCost;},setConnectionCost:function setConnectionCost(c){this._jsPlumb.connectionCost=c;},areConnectionsDirected:function areConnectionsDirected(){return this._jsPlumb.connectionsDirected;},setConnectionsDirected:function setConnectionsDirected(b){this._jsPlumb.connectionsDirected=b;},setElementId:function setElementId(_elId){this.elementId=_elId;this.anchor.elementId=_elId;},setReferenceElement:function setReferenceElement(_el){this.element=_jp.getElement(_el);},setDragAllowedWhenFull:function setDragAllowedWhenFull(allowed){this.dragAllowedWhenFull=allowed;},equals:function equals(endpoint){return this.anchor.equals(endpoint.anchor);},getUuid:function getUuid(){return this._jsPlumb.uuid;},computeAnchor:function computeAnchor(params){return this.anchor.compute(params);}});root.jsPlumbInstance.prototype.EndpointDropHandler=function(dhParams){return function(e){var _jsPlumb=dhParams.jsPlumb;// remove the classes that are added dynamically. drop is neither forbidden nor allowed now that
// the drop is finishing.
dhParams.removeClass(_jsPlumb.endpointDropAllowedClass);dhParams.removeClass(_jsPlumb.endpointDropForbiddenClass);var originalEvent=_jsPlumb.getDropEvent(arguments),draggable=_jsPlumb.getDragObject(arguments),id=_jsPlumb.getAttribute(draggable,"dragId"),elId=_jsPlumb.getAttribute(draggable,"elId"),scope=_jsPlumb.getAttribute(draggable,"originalScope"),jpc=_jsPlumb.floatingConnections[id];// if no active connection, bail.
if(jpc==null)return;// calculate if this is an existing connection.
var existingConnection=jpc.suspendedEndpoint!=null;// if suspended endpoint exists but has been cleaned up, bail. This means it's an existing connection
// that has been detached and will shortly be discarded.
if(existingConnection&&jpc.suspendedEndpoint._jsPlumb==null)return;// get the drop endpoint. for a normal connection this is just the one that would replace the currently
// floating endpoint. for a makeTarget this is a new endpoint that is created on drop. But we leave that to
// the handler to figure out.
var _ep=dhParams.getEndpoint(jpc);// If we're not given an endpoint to use, bail.
if(_ep==null)return;// if this is a drop back where the connection came from, mark it force reattach and
// return; the stop handler will reattach. without firing an event.
if(dhParams.isRedrop(jpc,dhParams)){jpc._forceReattach=true;jpc.setHover(false);if(dhParams.maybeCleanup)dhParams.maybeCleanup(_ep);return;}// ensure we dont bother trying to drop sources on non-source eps, and same for target.
var idx=_jsPlumb.getFloatingAnchorIndex(jpc);if(idx===0&&!dhParams.isSource||idx===1&&!dhParams.isTarget){if(dhParams.maybeCleanup)dhParams.maybeCleanup(_ep);return;}if(dhParams.onDrop)dhParams.onDrop(jpc);// restore the original scope if necessary (issue 57)
if(scope)_jsPlumb.setDragScope(draggable,scope);// if the target of the drop is full, fire an event (we abort below)
// makeTarget: keep.
var isFull=dhParams.isFull(e);if(isFull){_ep.fire("maxConnections",{endpoint:this,connection:jpc,maxConnections:_ep._jsPlumb.maxConnections},originalEvent);}//
// if endpoint enabled, not full, and matches the index of the floating endpoint...
if(!isFull&&dhParams.enabled()){var _doContinue=true;// before testing for beforeDrop, reset the connection's source/target to be the actual DOM elements
// involved (that is, stash any temporary stuff used for dragging. but we need to keep it around in
// order that the anchor manager can clean things up properly).
if(idx===0){jpc.floatingElement=jpc.source;jpc.floatingId=jpc.sourceId;jpc.floatingEndpoint=jpc.endpoints[0];jpc.floatingIndex=0;jpc.source=dhParams.element;jpc.sourceId=dhParams.elementId;}else{jpc.floatingElement=jpc.target;jpc.floatingId=jpc.targetId;jpc.floatingEndpoint=jpc.endpoints[1];jpc.floatingIndex=1;jpc.target=dhParams.element;jpc.targetId=dhParams.elementId;}// if this is an existing connection and detach is not allowed we won't continue. The connection's
// endpoints have been reinstated; everything is back to how it was.
if(existingConnection&&jpc.suspendedEndpoint.id!=_ep.id){if(!jpc.isDetachAllowed(jpc)||!jpc.endpoints[idx].isDetachAllowed(jpc)||!jpc.suspendedEndpoint.isDetachAllowed(jpc)||!_jsPlumb.checkCondition("beforeDetach",jpc))_doContinue=false;}// ------------ wrap the execution path in a function so we can support asynchronous beforeDrop
var continueFunction=function(optionalData){// remove this jpc from the current endpoint, which is a floating endpoint that we will
// subsequently discard.
jpc.endpoints[idx].detachFromConnection(jpc);// if there's a suspended endpoint, detach it from the connection.
if(jpc.suspendedEndpoint)jpc.suspendedEndpoint.detachFromConnection(jpc);jpc.endpoints[idx]=_ep;_ep.addConnection(jpc);// copy our parameters in to the connection:
var params=_ep.getParameters();for(var aParam in params){jpc.setParameter(aParam,params[aParam]);}if(!existingConnection){// if not an existing connection and
if(params.draggable)_jsPlumb.initDraggable(this.element,dragOptions,"internal",_jsPlumb);}else{var suspendedElementId=jpc.suspendedEndpoint.elementId;_jsPlumb.fireMoveEvent({index:idx,originalSourceId:idx===0?suspendedElementId:jpc.sourceId,newSourceId:idx===0?_ep.elementId:jpc.sourceId,originalTargetId:idx==1?suspendedElementId:jpc.targetId,newTargetId:idx==1?_ep.elementId:jpc.targetId,originalSourceEndpoint:idx===0?jpc.suspendedEndpoint:jpc.endpoints[0],newSourceEndpoint:idx===0?_ep:jpc.endpoints[0],originalTargetEndpoint:idx==1?jpc.suspendedEndpoint:jpc.endpoints[1],newTargetEndpoint:idx==1?_ep:jpc.endpoints[1],connection:jpc},originalEvent);}if(idx==1){_jsPlumb.anchorManager.updateOtherEndpoint(jpc.sourceId,jpc.floatingId,jpc.targetId,jpc);}else{_jsPlumb.anchorManager.sourceChanged(jpc.floatingId,jpc.sourceId,jpc,jpc.source);}// when makeSource has uniqueEndpoint:true, we want to create connections with new endpoints
// that are subsequently deleted. So makeSource sets `finalEndpoint`, which is the Endpoint to
// which the connection should be attached. The `detachFromConnection` call below results in the
// temporary endpoint being cleaned up.
if(jpc.endpoints[0].finalEndpoint){var _toDelete=jpc.endpoints[0];_toDelete.detachFromConnection(jpc);jpc.endpoints[0]=jpc.endpoints[0].finalEndpoint;jpc.endpoints[0].addConnection(jpc);}// if optionalData was given, merge it onto the connection's data.
if(_ju.isObject(optionalData)){jpc.mergeData(optionalData);}// finalise will inform the anchor manager and also add to
// connectionsByScope if necessary.
_jsPlumb.finaliseConnection(jpc,null,originalEvent,false);jpc.setHover(false);}.bind(this);var dontContinueFunction=function dontContinueFunction(){// otherwise just put it back on the endpoint it was on before the drag.
if(jpc.suspendedEndpoint){jpc.endpoints[idx]=jpc.suspendedEndpoint;jpc.setHover(false);jpc._forceDetach=true;if(idx===0){jpc.source=jpc.suspendedEndpoint.element;jpc.sourceId=jpc.suspendedEndpoint.elementId;}else{jpc.target=jpc.suspendedEndpoint.element;jpc.targetId=jpc.suspendedEndpoint.elementId;}jpc.suspendedEndpoint.addConnection(jpc);// TODO checkSanity
if(idx==1){_jsPlumb.anchorManager.updateOtherEndpoint(jpc.sourceId,jpc.floatingId,jpc.targetId,jpc);}else{_jsPlumb.anchorManager.sourceChanged(jpc.floatingId,jpc.sourceId,jpc,jpc.source);}_jsPlumb.repaint(jpc.sourceId);jpc._forceDetach=false;}};// --------------------------------------
// now check beforeDrop.  this will be available only on Endpoints that are setup to
// have a beforeDrop condition (although, secretly, under the hood all Endpoints and
// the Connection have them, because they are on jsPlumbUIComponent.  shhh!), because
// it only makes sense to have it on a target endpoint.
_doContinue=_doContinue&&dhParams.isDropAllowed(jpc.sourceId,jpc.targetId,jpc.scope,jpc,_ep);// && jpc.pending;
if(_doContinue){continueFunction(_doContinue);return true;}else{dontContinueFunction();}}if(dhParams.maybeCleanup)dhParams.maybeCleanup(_ep);_jsPlumb.currentlyDragging=false;};};}).call(typeof window!=='undefined'?window:this);/*
 * jsPlumb
 * 
 * Title:jsPlumb 2.3.0
 * 
 * Provides a way to visually connect elements on an HTML page, using SVG.
 * 
 * This file contains the code for Connections.
 *
 * Copyright (c) 2010 - 2017 jsPlumb (hello@jsplumbtoolkit.com)
 * 
 * https://jsplumbtoolkit.com
 * http://github.com/sporritt/jsplumb
 * 
 * Dual licensed under the MIT and GPL2 licenses.
 */;(function(){"use strict";var root=this,_jp=root.jsPlumb,_ju=root.jsPlumbUtil;var makeConnector=function makeConnector(_jsPlumb,renderMode,connectorName,connectorArgs,forComponent){if(!_jsPlumb.Defaults.DoNotThrowErrors&&_jp.Connectors[renderMode][connectorName]==null)throw{msg:"jsPlumb: unknown connector type '"+connectorName+"'"};return new _jp.Connectors[renderMode][connectorName](connectorArgs,forComponent);},_makeAnchor=function _makeAnchor(anchorParams,elementId,_jsPlumb){return anchorParams?_jsPlumb.makeAnchor(anchorParams,elementId,_jsPlumb):null;},_updateConnectedClass=function _updateConnectedClass(conn,element,_jsPlumb,remove){if(element!=null){element._jsPlumbConnections=element._jsPlumbConnections||{};if(remove)delete element._jsPlumbConnections[conn.id];else element._jsPlumbConnections[conn.id]=true;if(_ju.isEmpty(element._jsPlumbConnections)){_jsPlumb.removeClass(element,_jsPlumb.connectedClass);}else _jsPlumb.addClass(element,_jsPlumb.connectedClass);}};_jp.Connection=function(params){var _newEndpoint=params.newEndpoint;this.id=params.id;this.connector=null;this.idPrefix="_jsplumb_c_";this.defaultLabelLocation=0.5;this.defaultOverlayKeys=["Overlays","ConnectionOverlays"];// if a new connection is the result of moving some existing connection, params.previousConnection
// will have that Connection in it. listeners for the jsPlumbConnection event can look for that
// member and take action if they need to.
this.previousConnection=params.previousConnection;this.source=_jp.getElement(params.source);this.target=_jp.getElement(params.target);// sourceEndpoint and targetEndpoint override source/target, if they are present. but 
// source is not overridden if the Endpoint has declared it is not the final target of a connection;
// instead we use the source that the Endpoint declares will be the final source element.
if(params.sourceEndpoint)this.source=params.sourceEndpoint.getElement();if(params.targetEndpoint)this.target=params.targetEndpoint.getElement();_jp.OverlayCapableJsPlumbUIComponent.apply(this,arguments);this.sourceId=this._jsPlumb.instance.getId(this.source);this.targetId=this._jsPlumb.instance.getId(this.target);this.scope=params.scope;// scope may have been passed in to the connect call. if it wasn't, we will pull it from the source endpoint, after having initialised the endpoints.            
this.endpoints=[];this.endpointStyles=[];var _jsPlumb=this._jsPlumb.instance;_jsPlumb.manage(this.sourceId,this.source);_jsPlumb.manage(this.targetId,this.target);this._jsPlumb.visible=true;this._jsPlumb.editable=params.editable===true;this._jsPlumb.params={cssClass:params.cssClass,container:params.container,"pointer-events":params["pointer-events"],editorParams:params.editorParams,overlays:params.overlays};this._jsPlumb.lastPaintedAt=null;// listen to mouseover and mouseout events passed from the container delegate.
this.bind("mouseover",function(){this.setHover(true);}.bind(this));this.bind("mouseout",function(){this.setHover(false);}.bind(this));this.editableRequested=params.editable!==false;this.setEditable=function(e){return this.connector?this.connector.setEditable(e):false;};this.isEditable=function(){return this.connector?this.connector.isEditable():false;};this.isEditing=function(){return this.connector?this.connector.isEditing():false;};// INITIALISATION CODE
this.makeEndpoint=function(isSource,el,elId,ep){elId=elId||this._jsPlumb.instance.getId(el);return this.prepareEndpoint(_jsPlumb,_newEndpoint,this,ep,isSource?0:1,params,el,elId);};// if type given, get the endpoint definitions mapping to that type from the jsplumb instance, and use those.
// we apply types at the end of this constructor but endpoints are only honoured in a type definition at
// create time.
if(params.type){params.endpoints=params.endpoints||this._jsPlumb.instance.deriveEndpointAndAnchorSpec(params.type).endpoints;}var eS=this.makeEndpoint(true,this.source,this.sourceId,params.sourceEndpoint),eT=this.makeEndpoint(false,this.target,this.targetId,params.targetEndpoint);if(eS)_ju.addToList(params.endpointsByElement,this.sourceId,eS);if(eT)_ju.addToList(params.endpointsByElement,this.targetId,eT);// if scope not set, set it to be the scope for the source endpoint.
if(!this.scope)this.scope=this.endpoints[0].scope;// if explicitly told to (or not to) delete endpoints when empty, override endpoint's preferences
if(params.deleteEndpointsOnEmpty!=null){this.endpoints[0].setDeleteOnEmpty(params.deleteEndpointsOnEmpty);this.endpoints[1].setDeleteOnEmpty(params.deleteEndpointsOnEmpty);}//        else {
//            // otherwise, unless the endpoints say otherwise, mark them for deletion.
//            if (!this.endpoints[0]._doNotDeleteOnDetach) this.endpoints[0]._deleteOnDetach = true;
//            if (!this.endpoints[1]._doNotDeleteOnDetach) this.endpoints[1]._deleteOnDetach = true;
//        }
// -------------------------- DEFAULT TYPE ---------------------------------------------
// DETACHABLE
var _detachable=_jsPlumb.Defaults.ConnectionsDetachable;if(params.detachable===false)_detachable=false;if(this.endpoints[0].connectionsDetachable===false)_detachable=false;if(this.endpoints[1].connectionsDetachable===false)_detachable=false;// REATTACH
var _reattach=params.reattach||this.endpoints[0].reattachConnections||this.endpoints[1].reattachConnections||_jsPlumb.Defaults.ReattachConnections;this.appendToDefaultType({detachable:_detachable,reattach:_reattach,paintStyle:this.endpoints[0].connectorStyle||this.endpoints[1].connectorStyle||params.paintStyle||_jsPlumb.Defaults.PaintStyle||_jp.Defaults.PaintStyle,hoverPaintStyle:this.endpoints[0].connectorHoverStyle||this.endpoints[1].connectorHoverStyle||params.hoverPaintStyle||_jsPlumb.Defaults.HoverPaintStyle||_jp.Defaults.HoverPaintStyle});var _suspendedAt=_jsPlumb.getSuspendedAt();if(!_jsPlumb.isSuspendDrawing()){// paint the endpoints
var myInfo=_jsPlumb.getCachedData(this.sourceId),myOffset=myInfo.o,myWH=myInfo.s,otherInfo=_jsPlumb.getCachedData(this.targetId),otherOffset=otherInfo.o,otherWH=otherInfo.s,initialTimestamp=_suspendedAt||_jsPlumb.timestamp(),anchorLoc=this.endpoints[0].anchor.compute({xy:[myOffset.left,myOffset.top],wh:myWH,element:this.endpoints[0],elementId:this.endpoints[0].elementId,txy:[otherOffset.left,otherOffset.top],twh:otherWH,tElement:this.endpoints[1],timestamp:initialTimestamp});this.endpoints[0].paint({anchorLoc:anchorLoc,timestamp:initialTimestamp});anchorLoc=this.endpoints[1].anchor.compute({xy:[otherOffset.left,otherOffset.top],wh:otherWH,element:this.endpoints[1],elementId:this.endpoints[1].elementId,txy:[myOffset.left,myOffset.top],twh:myWH,tElement:this.endpoints[0],timestamp:initialTimestamp});this.endpoints[1].paint({anchorLoc:anchorLoc,timestamp:initialTimestamp});}this.getTypeDescriptor=function(){return"connection";};this.getAttachedElements=function(){return this.endpoints;};this.isDetachable=function(){return this._jsPlumb.detachable===true;};this.setDetachable=function(detachable){this._jsPlumb.detachable=detachable===true;};this.isReattach=function(){return this._jsPlumb.reattach===true||this.endpoints[0].reattachConnections===true||this.endpoints[1].reattachConnections===true;};this.setReattach=function(reattach){this._jsPlumb.reattach=reattach===true;};//        this["delete"] = function() {
//            this.endpoints[0].detachFromConnection(this);
//            this.endpoints[1].detachFromConnection(this);
//            params.deleteConnection(this);
//        };
// END INITIALISATION CODE
// COST + DIRECTIONALITY
// if cost not supplied, try to inherit from source endpoint
this._jsPlumb.cost=params.cost||this.endpoints[0].getConnectionCost();this._jsPlumb.directed=params.directed;// inherit directed flag if set no source endpoint
if(params.directed==null)this._jsPlumb.directed=this.endpoints[0].areConnectionsDirected();// END COST + DIRECTIONALITY
// PARAMETERS
// merge all the parameters objects into the connection.  parameters set
// on the connection take precedence; then source endpoint params, then
// finally target endpoint params.
var _p=_jp.extend({},this.endpoints[1].getParameters());_jp.extend(_p,this.endpoints[0].getParameters());_jp.extend(_p,this.getParameters());this.setParameters(_p);// END PARAMETERS
// PAINTING
this.setConnector(this.endpoints[0].connector||this.endpoints[1].connector||params.connector||_jsPlumb.Defaults.Connector||_jp.Defaults.Connector,true);if(params.geometry){this.connector.setGeometry(params.geometry);}var data=params.data==null||!_ju.isObject(params.data)?{}:params.data;this.getData=function(){return data;};this.setData=function(d){data=d||{};};this.mergeData=function(d){data=_jp.extend(data,d);};// the very last thing we do is apply types, if there are any.
var _types=["default",this.endpoints[0].connectionType,this.endpoints[1].connectionType,params.type].join(" ");if(/[^\s]/.test(_types))this.addType(_types,params.data,true);this.updateConnectedClass();// END PAINTING    
};_ju.extend(_jp.Connection,_jp.OverlayCapableJsPlumbUIComponent,{applyType:function applyType(t,doNotRepaint,typeMap){// none of these things result in the creation of objects so can be ignored.
if(t.detachable!=null)this.setDetachable(t.detachable);if(t.reattach!=null)this.setReattach(t.reattach);if(t.scope)this.scope=t.scope;if(t.cssClass!=null&&this.canvas)this._jsPlumb.instance.addClass(this.canvas,t.cssClass);var _anchors=null;// this also results in the creation of objects.
if(t.anchor){// note that even if the param was anchor, we store `anchors`.
_anchors=this.getCachedTypeItem("anchors",typeMap.anchor);if(_anchors==null){_anchors=[this._jsPlumb.instance.makeAnchor(t.anchor),this._jsPlumb.instance.makeAnchor(t.anchor)];this.cacheTypeItem("anchors",_anchors,typeMap.anchor);}}else if(t.anchors){_anchors=this.getCachedTypeItem("anchors",typeMap.anchors);if(_anchors==null){_anchors=[this._jsPlumb.instance.makeAnchor(t.anchors[0]),this._jsPlumb.instance.makeAnchor(t.anchors[1])];this.cacheTypeItem("anchors",_anchors,typeMap.anchors);}}if(_anchors!=null){this.endpoints[0].anchor=_anchors[0];this.endpoints[1].anchor=_anchors[1];if(this.endpoints[1].anchor.isDynamic)this._jsPlumb.instance.repaint(this.endpoints[1].elementId);}_jp.OverlayCapableJsPlumbUIComponent.applyType(this,t);},addClass:function addClass(c,informEndpoints){if(informEndpoints){this.endpoints[0].addClass(c);this.endpoints[1].addClass(c);if(this.suspendedEndpoint)this.suspendedEndpoint.addClass(c);}if(this.connector){this.connector.addClass(c);}},removeClass:function removeClass(c,informEndpoints){if(informEndpoints){this.endpoints[0].removeClass(c);this.endpoints[1].removeClass(c);if(this.suspendedEndpoint)this.suspendedEndpoint.removeClass(c);}if(this.connector){this.connector.removeClass(c);}},isVisible:function isVisible(){return this._jsPlumb.visible;},setVisible:function setVisible(v){this._jsPlumb.visible=v;if(this.connector)this.connector.setVisible(v);this.repaint();},cleanup:function cleanup(){this.updateConnectedClass(true);this.endpoints=null;this.source=null;this.target=null;if(this.connector!=null){this.connector.cleanup(true);this.connector.destroy(true);}this.connector=null;},updateConnectedClass:function updateConnectedClass(remove){if(this._jsPlumb){_updateConnectedClass(this,this.source,this._jsPlumb.instance,remove);_updateConnectedClass(this,this.target,this._jsPlumb.instance,remove);}},setHover:function setHover(state){if(this.connector&&this._jsPlumb&&!this._jsPlumb.instance.isConnectionBeingDragged()){this.connector.setHover(state);root.jsPlumb[state?"addClass":"removeClass"](this.source,this._jsPlumb.instance.hoverSourceClass);root.jsPlumb[state?"addClass":"removeClass"](this.target,this._jsPlumb.instance.hoverTargetClass);}},getUuids:function getUuids(){return[this.endpoints[0].getUuid(),this.endpoints[1].getUuid()];},getCost:function getCost(){return this._jsPlumb?this._jsPlumb.cost:-Infinity;},setCost:function setCost(c){this._jsPlumb.cost=c;},isDirected:function isDirected(){return this._jsPlumb.directed===true;},getConnector:function getConnector(){return this.connector;},getGeometry:function getGeometry(){return this.connector?this.connector.getGeometry():null;},setGeometry:function setGeometry(g){if(this.connector)this.connector.setGeometry(g);},prepareConnector:function prepareConnector(connectorSpec,typeId){var connectorArgs={_jsPlumb:this._jsPlumb.instance,cssClass:(this._jsPlumb.params.cssClass||"")+(this.isEditable()?this._jsPlumb.instance.editableConnectorClass:""),container:this._jsPlumb.params.container,"pointer-events":this._jsPlumb.params["pointer-events"],editable:this.editableRequested},renderMode=this._jsPlumb.instance.getRenderMode(),connector;if(_ju.isString(connectorSpec))connector=makeConnector(this._jsPlumb.instance,renderMode,connectorSpec,connectorArgs,this);// lets you use a string as shorthand.
else if(_ju.isArray(connectorSpec)){if(connectorSpec.length==1)connector=makeConnector(this._jsPlumb.instance,renderMode,connectorSpec[0],connectorArgs,this);else connector=makeConnector(this._jsPlumb.instance,renderMode,connectorSpec[0],_ju.merge(connectorSpec[1],connectorArgs),this);}if(typeId!=null)connector.typeId=typeId;return connector;},setPreparedConnector:function setPreparedConnector(connector,doNotRepaint,doNotChangeListenerComponent,typeId){var previous,previousClasses="";// the connector will not be cleaned up if it was set as part of a type, because `typeId` will be set on it
// and we havent passed in `true` for "force" here.
if(this.connector!=null){previous=this.connector;previousClasses=previous.getClass();this.connector.cleanup();this.connector.destroy();}this.connector=connector;if(typeId){this.cacheTypeItem("connector",connector,typeId);}this.canvas=this.connector.canvas;this.bgCanvas=this.connector.bgCanvas;// put classes from prior connector onto the canvas
this.addClass(previousClasses);// new: instead of binding listeners per connector, we now just have one delegate on the container.
// so for that handler we set the connection as the '_jsPlumb' member of the canvas element, and
// bgCanvas, if it exists, which it does right now in the VML renderer, so it won't from v 2.0.0 onwards.
if(this.canvas)this.canvas._jsPlumb=this;if(this.bgCanvas)this.bgCanvas._jsPlumb=this;if(previous!=null){var o=this.getOverlays();for(var i=0;i<o.length;i++){if(o[i].transfer)o[i].transfer(this.connector);}}if(!doNotChangeListenerComponent)this.setListenerComponent(this.connector);if(!doNotRepaint)this.repaint();},setConnector:function setConnector(connectorSpec,doNotRepaint,doNotChangeListenerComponent,typeId){var connector=this.prepareConnector(connectorSpec,typeId);this.setPreparedConnector(connector,doNotRepaint,doNotChangeListenerComponent,typeId);},paint:function paint(params){if(!this._jsPlumb.instance.isSuspendDrawing()&&this._jsPlumb.visible){params=params||{};var timestamp=params.timestamp,// if the moving object is not the source we must transpose the two references.
swap=false,tId=swap?this.sourceId:this.targetId,sId=swap?this.targetId:this.sourceId,tIdx=swap?0:1,sIdx=swap?1:0;if(timestamp==null||timestamp!=this._jsPlumb.lastPaintedAt){var sourceInfo=this._jsPlumb.instance.updateOffset({elId:sId}).o,targetInfo=this._jsPlumb.instance.updateOffset({elId:tId}).o,sE=this.endpoints[sIdx],tE=this.endpoints[tIdx];var sAnchorP=sE.anchor.getCurrentLocation({xy:[sourceInfo.left,sourceInfo.top],wh:[sourceInfo.width,sourceInfo.height],element:sE,timestamp:timestamp}),tAnchorP=tE.anchor.getCurrentLocation({xy:[targetInfo.left,targetInfo.top],wh:[targetInfo.width,targetInfo.height],element:tE,timestamp:timestamp});this.connector.resetBounds();this.connector.compute({sourcePos:sAnchorP,targetPos:tAnchorP,sourceEndpoint:this.endpoints[sIdx],targetEndpoint:this.endpoints[tIdx],"stroke-width":this._jsPlumb.paintStyleInUse.strokeWidth,sourceInfo:sourceInfo,targetInfo:targetInfo});var overlayExtents={minX:Infinity,minY:Infinity,maxX:-Infinity,maxY:-Infinity};// compute overlays. we do this first so we can get their placements, and adjust the
// container if needs be (if an overlay would be clipped)
for(var i in this._jsPlumb.overlays){if(this._jsPlumb.overlays.hasOwnProperty(i)){var o=this._jsPlumb.overlays[i];if(o.isVisible()){this._jsPlumb.overlayPlacements[i]=o.draw(this.connector,this._jsPlumb.paintStyleInUse,this.getAbsoluteOverlayPosition(o));overlayExtents.minX=Math.min(overlayExtents.minX,this._jsPlumb.overlayPlacements[i].minX);overlayExtents.maxX=Math.max(overlayExtents.maxX,this._jsPlumb.overlayPlacements[i].maxX);overlayExtents.minY=Math.min(overlayExtents.minY,this._jsPlumb.overlayPlacements[i].minY);overlayExtents.maxY=Math.max(overlayExtents.maxY,this._jsPlumb.overlayPlacements[i].maxY);}}}var lineWidth=parseFloat(this._jsPlumb.paintStyleInUse.strokeWidth||1)/2,outlineWidth=parseFloat(this._jsPlumb.paintStyleInUse.strokeWidth||0),extents={xmin:Math.min(this.connector.bounds.minX-(lineWidth+outlineWidth),overlayExtents.minX),ymin:Math.min(this.connector.bounds.minY-(lineWidth+outlineWidth),overlayExtents.minY),xmax:Math.max(this.connector.bounds.maxX+(lineWidth+outlineWidth),overlayExtents.maxX),ymax:Math.max(this.connector.bounds.maxY+(lineWidth+outlineWidth),overlayExtents.maxY)};// paint the connector.
this.connector.paint(this._jsPlumb.paintStyleInUse,null,extents);// and then the overlays
for(var j in this._jsPlumb.overlays){if(this._jsPlumb.overlays.hasOwnProperty(j)){var p=this._jsPlumb.overlays[j];if(p.isVisible()){p.paint(this._jsPlumb.overlayPlacements[j],extents);}}}}this._jsPlumb.lastPaintedAt=timestamp;}},repaint:function repaint(params){params=params||{};this.paint({elId:this.sourceId,recalc:!(params.recalc===false),timestamp:params.timestamp});},prepareEndpoint:function prepareEndpoint(_jsPlumb,_newEndpoint,conn,existing,index,params,element,elementId){var e;if(existing){conn.endpoints[index]=existing;existing.addConnection(conn);}else{if(!params.endpoints)params.endpoints=[null,null];var ep=params.endpoints[index]||params.endpoint||_jsPlumb.Defaults.Endpoints[index]||_jp.Defaults.Endpoints[index]||_jsPlumb.Defaults.Endpoint||_jp.Defaults.Endpoint;if(!params.endpointStyles)params.endpointStyles=[null,null];if(!params.endpointHoverStyles)params.endpointHoverStyles=[null,null];var es=params.endpointStyles[index]||params.endpointStyle||_jsPlumb.Defaults.EndpointStyles[index]||_jp.Defaults.EndpointStyles[index]||_jsPlumb.Defaults.EndpointStyle||_jp.Defaults.EndpointStyle;// Endpoints derive their fill from the connector's stroke, if no fill was specified.
if(es.fill==null&&params.paintStyle!=null)es.fill=params.paintStyle.stroke;if(es.outlineStroke==null&&params.paintStyle!=null)es.outlineStroke=params.paintStyle.outlineStroke;if(es.outlineWidth==null&&params.paintStyle!=null)es.outlineWidth=params.paintStyle.outlineWidth;var ehs=params.endpointHoverStyles[index]||params.endpointHoverStyle||_jsPlumb.Defaults.EndpointHoverStyles[index]||_jp.Defaults.EndpointHoverStyles[index]||_jsPlumb.Defaults.EndpointHoverStyle||_jp.Defaults.EndpointHoverStyle;// endpoint hover fill style is derived from connector's hover stroke style
if(params.hoverPaintStyle!=null){if(ehs==null)ehs={};if(ehs.fill==null){ehs.fill=params.hoverPaintStyle.stroke;}}var a=params.anchors?params.anchors[index]:params.anchor?params.anchor:_makeAnchor(_jsPlumb.Defaults.Anchors[index],elementId,_jsPlumb)||_makeAnchor(_jp.Defaults.Anchors[index],elementId,_jsPlumb)||_makeAnchor(_jsPlumb.Defaults.Anchor,elementId,_jsPlumb)||_makeAnchor(_jp.Defaults.Anchor,elementId,_jsPlumb),u=params.uuids?params.uuids[index]:null;e=_newEndpoint({paintStyle:es,hoverPaintStyle:ehs,endpoint:ep,connections:[conn],uuid:u,anchor:a,source:element,scope:params.scope,reattach:params.reattach||_jsPlumb.Defaults.ReattachConnections,detachable:params.detachable||_jsPlumb.Defaults.ConnectionsDetachable});if(existing==null){e.setDeleteOnEmpty(true);}conn.endpoints[index]=e;if(params.drawEndpoints===false)e.setVisible(false,true,true);}return e;}});// END Connection class            
}).call(typeof window!=='undefined'?window:this);/*
 * jsPlumb
 * 
 * Title:jsPlumb 2.3.0
 * 
 * Provides a way to visually connect elements on an HTML page, using SVG.
 * 
 * This file contains the code for creating and manipulating anchors.
 *
 * Copyright (c) 2010 - 2017 jsPlumb (hello@jsplumbtoolkit.com)
 * 
 * http://jsplumbtoolkit.com
 * http://github.com/sporritt/jsplumb
 * 
 * Dual licensed under the MIT and GPL2 licenses.
 */;(function(){"use strict";var root=this,_ju=root.jsPlumbUtil,_jp=root.jsPlumb;//
// manages anchors for all elements.
//
_jp.AnchorManager=function(params){var _amEndpoints={},continuousAnchorLocations={},userDefinedContinuousAnchorLocations={},continuousAnchorOrientations={},Orientation={HORIZONTAL:"horizontal",VERTICAL:"vertical",DIAGONAL:"diagonal",IDENTITY:"identity"},axes=["left","top","right","bottom"],connectionsByElementId={},self=this,anchorLists={},jsPlumbInstance=params.jsPlumbInstance,floatingConnections={},calculateOrientation=function calculateOrientation(sourceId,targetId,sd,td,sourceAnchor,targetAnchor){if(sourceId===targetId)return{orientation:Orientation.IDENTITY,a:["top","top"]};var theta=Math.atan2(td.centery-sd.centery,td.centerx-sd.centerx),theta2=Math.atan2(sd.centery-td.centery,sd.centerx-td.centerx);// --------------------------------------------------------------------------------------
// improved face calculation. get midpoints of each face for source and target, then put in an array with all combinations of
// source/target faces. sort this array by distance between midpoints. the entry at index 0 is our preferred option. we can
// go through the array one by one until we find an entry in which each requested face is supported.
var candidates=[],midpoints={};(function(types,dim){for(var i=0;i<types.length;i++){midpoints[types[i]]={"left":[dim[i].left,dim[i].centery],"right":[dim[i].right,dim[i].centery],"top":[dim[i].centerx,dim[i].top],"bottom":[dim[i].centerx,dim[i].bottom]};}})(["source","target"],[sd,td]);for(var sf=0;sf<axes.length;sf++){for(var tf=0;tf<axes.length;tf++){candidates.push({source:axes[sf],target:axes[tf],dist:Biltong.lineLength(midpoints.source[axes[sf]],midpoints.target[axes[tf]])});}}candidates.sort(function(a,b){return a.dist<b.dist?-1:a.dist>b.dist?1:0;});// now go through this list and try to get an entry that satisfies both (there will be one, unless one of the anchors
// declares no available faces)
var sourceEdge=candidates[0].source,targetEdge=candidates[0].target;for(var i=0;i<candidates.length;i++){if(!sourceAnchor.isContinuous||sourceAnchor.isEdgeSupported(candidates[i].source))sourceEdge=candidates[i].source;else sourceEdge=null;if(!targetAnchor.isContinuous||targetAnchor.isEdgeSupported(candidates[i].target))targetEdge=candidates[i].target;else{targetEdge=null;}if(sourceEdge!=null&&targetEdge!=null)break;}// --------------------------------------------------------------------------------------
return{a:[sourceEdge,targetEdge],theta:theta,theta2:theta2};},// used by placeAnchors function
placeAnchorsOnLine=function placeAnchorsOnLine(desc,elementDimensions,elementPosition,connections,horizontal,otherMultiplier,reverse){var a=[],step=elementDimensions[horizontal?0:1]/(connections.length+1);for(var i=0;i<connections.length;i++){var val=(i+1)*step,other=otherMultiplier*elementDimensions[horizontal?1:0];if(reverse)val=elementDimensions[horizontal?0:1]-val;var dx=horizontal?val:other,x=elementPosition[0]+dx,xp=dx/elementDimensions[0],dy=horizontal?other:val,y=elementPosition[1]+dy,yp=dy/elementDimensions[1];a.push([x,y,xp,yp,connections[i][1],connections[i][2]]);}return a;},// used by edgeSortFunctions
currySort=function currySort(reverseAngles){return function(a,b){var r=true;if(reverseAngles){r=a[0][0]<b[0][0];}else{r=a[0][0]>b[0][0];}return r===false?-1:1;};},// used by edgeSortFunctions
leftSort=function leftSort(a,b){// first get adjusted values
var p1=a[0][0]<0?-Math.PI-a[0][0]:Math.PI-a[0][0],p2=b[0][0]<0?-Math.PI-b[0][0]:Math.PI-b[0][0];if(p1>p2)return 1;else return-1;},// used by placeAnchors
edgeSortFunctions={"top":function top(a,b){return a[0]>b[0]?1:-1;},"right":currySort(true),"bottom":currySort(true),"left":leftSort},// used by placeAnchors
_sortHelper=function _sortHelper(_array,_fn){return _array.sort(_fn);},// used by AnchorManager.redraw
placeAnchors=function placeAnchors(elementId,_anchorLists){var cd=jsPlumbInstance.getCachedData(elementId),sS=cd.s,sO=cd.o,placeSomeAnchors=function placeSomeAnchors(desc,elementDimensions,elementPosition,unsortedConnections,isHorizontal,otherMultiplier,orientation){if(unsortedConnections.length>0){var sc=_sortHelper(unsortedConnections,edgeSortFunctions[desc]),// puts them in order based on the target element's pos on screen
reverse=desc==="right"||desc==="top",anchors=placeAnchorsOnLine(desc,elementDimensions,elementPosition,sc,isHorizontal,otherMultiplier,reverse);// takes a computed anchor position and adjusts it for parent offset and scroll, then stores it.
var _setAnchorLocation=function _setAnchorLocation(endpoint,anchorPos){continuousAnchorLocations[endpoint.id]=[anchorPos[0],anchorPos[1],anchorPos[2],anchorPos[3]];continuousAnchorOrientations[endpoint.id]=orientation;};for(var i=0;i<anchors.length;i++){var c=anchors[i][4],weAreSource=c.endpoints[0].elementId===elementId,weAreTarget=c.endpoints[1].elementId===elementId;if(weAreSource)_setAnchorLocation(c.endpoints[0],anchors[i]);if(weAreTarget)_setAnchorLocation(c.endpoints[1],anchors[i]);}}};placeSomeAnchors("bottom",sS,[sO.left,sO.top],_anchorLists.bottom,true,1,[0,1]);placeSomeAnchors("top",sS,[sO.left,sO.top],_anchorLists.top,true,0,[0,-1]);placeSomeAnchors("left",sS,[sO.left,sO.top],_anchorLists.left,false,0,[-1,0]);placeSomeAnchors("right",sS,[sO.left,sO.top],_anchorLists.right,false,1,[1,0]);};this.reset=function(){_amEndpoints={};connectionsByElementId={};anchorLists={};};this.addFloatingConnection=function(key,conn){floatingConnections[key]=conn;};this.removeFloatingConnection=function(key){delete floatingConnections[key];};this.newConnection=function(conn){var sourceId=conn.sourceId,targetId=conn.targetId,ep=conn.endpoints,doRegisterTarget=true,registerConnection=function registerConnection(otherIndex,otherEndpoint,otherAnchor,elId,c){if(sourceId==targetId&&otherAnchor.isContinuous){// remove the target endpoint's canvas.  we dont need it.
conn._jsPlumb.instance.removeElement(ep[1].canvas);doRegisterTarget=false;}_ju.addToList(connectionsByElementId,elId,[c,otherEndpoint,otherAnchor.constructor==_jp.DynamicAnchor]);};registerConnection(0,ep[0],ep[0].anchor,targetId,conn);if(doRegisterTarget)registerConnection(1,ep[1],ep[1].anchor,sourceId,conn);};var removeEndpointFromAnchorLists=function removeEndpointFromAnchorLists(endpoint){(function(list,eId){if(list){// transient anchors dont get entries in this list.
var f=function f(e){return e[4]==eId;};_ju.removeWithFunction(list.top,f);_ju.removeWithFunction(list.left,f);_ju.removeWithFunction(list.bottom,f);_ju.removeWithFunction(list.right,f);}})(anchorLists[endpoint.elementId],endpoint.id);};this.connectionDetached=function(connInfo,doNotRedraw){var connection=connInfo.connection||connInfo,sourceId=connInfo.sourceId,targetId=connInfo.targetId,ep=connection.endpoints,removeConnection=function removeConnection(otherIndex,otherEndpoint,otherAnchor,elId,c){_ju.removeWithFunction(connectionsByElementId[elId],function(_c){return _c[0].id==c.id;});};removeConnection(1,ep[1],ep[1].anchor,sourceId,connection);removeConnection(0,ep[0],ep[0].anchor,targetId,connection);if(connection.floatingId){removeConnection(connection.floatingIndex,connection.floatingEndpoint,connection.floatingEndpoint.anchor,connection.floatingId,connection);removeEndpointFromAnchorLists(connection.floatingEndpoint);}// remove from anchorLists            
removeEndpointFromAnchorLists(connection.endpoints[0]);removeEndpointFromAnchorLists(connection.endpoints[1]);if(!doNotRedraw){self.redraw(connection.sourceId);if(connection.targetId!==connection.sourceId)self.redraw(connection.targetId);}};this.add=function(endpoint,elementId){_ju.addToList(_amEndpoints,elementId,endpoint);};this.changeId=function(oldId,newId){connectionsByElementId[newId]=connectionsByElementId[oldId];_amEndpoints[newId]=_amEndpoints[oldId];delete connectionsByElementId[oldId];delete _amEndpoints[oldId];};this.getConnectionsFor=function(elementId){return connectionsByElementId[elementId]||[];};this.getEndpointsFor=function(elementId){return _amEndpoints[elementId]||[];};this.deleteEndpoint=function(endpoint){_ju.removeWithFunction(_amEndpoints[endpoint.elementId],function(e){return e.id==endpoint.id;});removeEndpointFromAnchorLists(endpoint);};this.clearFor=function(elementId){delete _amEndpoints[elementId];_amEndpoints[elementId]=[];};// updates the given anchor list by either updating an existing anchor's info, or adding it. this function
// also removes the anchor from its previous list, if the edge it is on has changed.
// all connections found along the way (those that are connected to one of the faces this function
// operates on) are added to the connsToPaint list, as are their endpoints. in this way we know to repaint
// them wthout having to calculate anything else about them.
var _updateAnchorList=function _updateAnchorList(lists,theta,order,conn,aBoolean,otherElId,idx,reverse,edgeId,elId,connsToPaint,endpointsToPaint){// first try to find the exact match, but keep track of the first index of a matching element id along the way.s
var exactIdx=-1,firstMatchingElIdx=-1,endpoint=conn.endpoints[idx],endpointId=endpoint.id,oIdx=[1,0][idx],values=[[theta,order],conn,aBoolean,otherElId,endpointId],listToAddTo=lists[edgeId],listToRemoveFrom=endpoint._continuousAnchorEdge?lists[endpoint._continuousAnchorEdge]:null,i,candidate;if(listToRemoveFrom){var rIdx=_ju.findWithFunction(listToRemoveFrom,function(e){return e[4]==endpointId;});if(rIdx!=-1){listToRemoveFrom.splice(rIdx,1);// get all connections from this list
for(i=0;i<listToRemoveFrom.length;i++){candidate=listToRemoveFrom[i][1];_ju.addWithFunction(connsToPaint,candidate,function(c){return c.id==candidate.id;});_ju.addWithFunction(endpointsToPaint,listToRemoveFrom[i][1].endpoints[idx],function(e){return e.id==candidate.endpoints[idx].id;});_ju.addWithFunction(endpointsToPaint,listToRemoveFrom[i][1].endpoints[oIdx],function(e){return e.id==candidate.endpoints[oIdx].id;});}}}for(i=0;i<listToAddTo.length;i++){candidate=listToAddTo[i][1];if(params.idx==1&&listToAddTo[i][3]===otherElId&&firstMatchingElIdx==-1)firstMatchingElIdx=i;_ju.addWithFunction(connsToPaint,candidate,function(c){return c.id==candidate.id;});_ju.addWithFunction(endpointsToPaint,listToAddTo[i][1].endpoints[idx],function(e){return e.id==candidate.endpoints[idx].id;});_ju.addWithFunction(endpointsToPaint,listToAddTo[i][1].endpoints[oIdx],function(e){return e.id==candidate.endpoints[oIdx].id;});}if(exactIdx!=-1){listToAddTo[exactIdx]=values;}else{var insertIdx=reverse?firstMatchingElIdx!=-1?firstMatchingElIdx:0:listToAddTo.length;// of course we will get this from having looked through the array shortly.
listToAddTo.splice(insertIdx,0,values);}// store this for next time.
endpoint._continuousAnchorEdge=edgeId;};//
// find the entry in an endpoint's list for this connection and update its target endpoint
// with the current target in the connection.
// This method and sourceChanged need to be folder into one.
//
this.updateOtherEndpoint=function(sourceElId,oldTargetId,newTargetId,connection){var sIndex=_ju.findWithFunction(connectionsByElementId[sourceElId],function(i){return i[0].id===connection.id;}),tIndex=_ju.findWithFunction(connectionsByElementId[oldTargetId],function(i){return i[0].id===connection.id;});// update or add data for source
if(sIndex!=-1){connectionsByElementId[sourceElId][sIndex][0]=connection;connectionsByElementId[sourceElId][sIndex][1]=connection.endpoints[1];connectionsByElementId[sourceElId][sIndex][2]=connection.endpoints[1].anchor.constructor==_jp.DynamicAnchor;}// remove entry for previous target (if there)
if(tIndex>-1){connectionsByElementId[oldTargetId].splice(tIndex,1);// add entry for new target
_ju.addToList(connectionsByElementId,newTargetId,[connection,connection.endpoints[0],connection.endpoints[0].anchor.constructor==_jp.DynamicAnchor]);}connection.updateConnectedClass();};//
// notification that the connection given has changed source from the originalId to the newId.
// This involves:
// 1. removing the connection from the list of connections stored for the originalId
// 2. updating the source information for the target of the connection
// 3. re-registering the connection in connectionsByElementId with the newId
//
this.sourceChanged=function(originalId,newId,connection,newElement){if(originalId!==newId){connection.sourceId=newId;connection.source=newElement;// remove the entry that points from the old source to the target
_ju.removeWithFunction(connectionsByElementId[originalId],function(info){return info[0].id===connection.id;});// find entry for target and update it
var tIdx=_ju.findWithFunction(connectionsByElementId[connection.targetId],function(i){return i[0].id===connection.id;});if(tIdx>-1){connectionsByElementId[connection.targetId][tIdx][0]=connection;connectionsByElementId[connection.targetId][tIdx][1]=connection.endpoints[0];connectionsByElementId[connection.targetId][tIdx][2]=connection.endpoints[0].anchor.constructor==_jp.DynamicAnchor;}// add entry for new source
_ju.addToList(connectionsByElementId,newId,[connection,connection.endpoints[1],connection.endpoints[1].anchor.constructor==_jp.DynamicAnchor]);// TODO SP not final on this yet. when a user drags an existing connection and it turns into a self
// loop, then this code hides the target endpoint (by removing it from the DOM) But I think this should
// occur only if the anchor is Continuous
if(connection.endpoints[1].anchor.isContinuous){if(connection.source===connection.target){connection._jsPlumb.instance.removeElement(connection.endpoints[1].canvas);}else{if(connection.endpoints[1].canvas.parentNode==null){connection._jsPlumb.instance.appendElement(connection.endpoints[1].canvas);}}}connection.updateConnectedClass();}};//
// moves the given endpoint from `currentId` to `element`.
// This involves:
//
// 1. changing the key in _amEndpoints under which the endpoint is stored
// 2. changing the source or target values in all of the endpoint's connections
// 3. changing the array in connectionsByElementId in which the endpoint's connections
//    are stored (done by either sourceChanged or updateOtherEndpoint)
//
this.rehomeEndpoint=function(ep,currentId,element){var eps=_amEndpoints[currentId]||[],elementId=jsPlumbInstance.getId(element);if(elementId!==currentId){var idx=eps.indexOf(ep);if(idx>-1){var _ep=eps.splice(idx,1)[0];self.add(_ep,elementId);}}for(var i=0;i<ep.connections.length;i++){if(ep.connections[i].sourceId==currentId){//ep.connections[i].sourceId = ep.elementId;
//ep.connections[i].source = ep.element;
self.sourceChanged(currentId,ep.elementId,ep.connections[i],ep.element);}else if(ep.connections[i].targetId==currentId){ep.connections[i].targetId=ep.elementId;ep.connections[i].target=ep.element;self.updateOtherEndpoint(ep.connections[i].sourceId,currentId,ep.elementId,ep.connections[i]);}}};this.redraw=function(elementId,ui,timestamp,offsetToUI,clearEdits,doNotRecalcEndpoint){if(!jsPlumbInstance.isSuspendDrawing()){// get all the endpoints for this element
var ep=_amEndpoints[elementId]||[],endpointConnections=connectionsByElementId[elementId]||[],connectionsToPaint=[],endpointsToPaint=[],anchorsToUpdate=[];timestamp=timestamp||jsPlumbInstance.timestamp();// offsetToUI are values that would have been calculated in the dragManager when registering
// an endpoint for an element that had a parent (somewhere in the hierarchy) that had been
// registered as draggable.
offsetToUI=offsetToUI||{left:0,top:0};if(ui){ui={left:ui.left+offsetToUI.left,top:ui.top+offsetToUI.top};}// valid for one paint cycle.
var myOffset=jsPlumbInstance.updateOffset({elId:elementId,offset:ui,recalc:false,timestamp:timestamp}),orientationCache={};// actually, first we should compute the orientation of this element to all other elements to which
// this element is connected with a continuous anchor (whether both ends of the connection have
// a continuous anchor or just one)
for(var i=0;i<endpointConnections.length;i++){var conn=endpointConnections[i][0],sourceId=conn.sourceId,targetId=conn.targetId,sourceContinuous=conn.endpoints[0].anchor.isContinuous,targetContinuous=conn.endpoints[1].anchor.isContinuous;if(sourceContinuous||targetContinuous){var oKey=sourceId+"_"+targetId,o=orientationCache[oKey],oIdx=conn.sourceId==elementId?1:0;if(sourceContinuous&&!anchorLists[sourceId])anchorLists[sourceId]={top:[],right:[],bottom:[],left:[]};if(targetContinuous&&!anchorLists[targetId])anchorLists[targetId]={top:[],right:[],bottom:[],left:[]};if(elementId!=targetId)jsPlumbInstance.updateOffset({elId:targetId,timestamp:timestamp});if(elementId!=sourceId)jsPlumbInstance.updateOffset({elId:sourceId,timestamp:timestamp});var td=jsPlumbInstance.getCachedData(targetId),sd=jsPlumbInstance.getCachedData(sourceId);if(targetId==sourceId&&(sourceContinuous||targetContinuous)){// here we may want to improve this by somehow determining the face we'd like
// to put the connector on.  ideally, when drawing, the face should be calculated
// by determining which face is closest to the point at which the mouse button
// was released.  for now, we're putting it on the top face.
_updateAnchorList(anchorLists[sourceId],-Math.PI/2,0,conn,false,targetId,0,false,"top",sourceId,connectionsToPaint,endpointsToPaint);_updateAnchorList(anchorLists[targetId],-Math.PI/2,0,conn,false,sourceId,1,false,"top",targetId,connectionsToPaint,endpointsToPaint);}else{if(!o){o=calculateOrientation(sourceId,targetId,sd.o,td.o,conn.endpoints[0].anchor,conn.endpoints[1].anchor);orientationCache[oKey]=o;// this would be a performance enhancement, but the computed angles need to be clamped to
//the (-PI/2 -> PI/2) range in order for the sorting to work properly.
/*  orientationCache[oKey2] = {
                                 orientation:o.orientation,
                                 a:[o.a[1], o.a[0]],
                                 theta:o.theta + Math.PI,
                                 theta2:o.theta2 + Math.PI
                                 };*/}if(sourceContinuous)_updateAnchorList(anchorLists[sourceId],o.theta,0,conn,false,targetId,0,false,o.a[0],sourceId,connectionsToPaint,endpointsToPaint);if(targetContinuous)_updateAnchorList(anchorLists[targetId],o.theta2,-1,conn,true,sourceId,1,true,o.a[1],targetId,connectionsToPaint,endpointsToPaint);}if(sourceContinuous)_ju.addWithFunction(anchorsToUpdate,sourceId,function(a){return a===sourceId;});if(targetContinuous)_ju.addWithFunction(anchorsToUpdate,targetId,function(a){return a===targetId;});_ju.addWithFunction(connectionsToPaint,conn,function(c){return c.id==conn.id;});if(sourceContinuous&&oIdx===0||targetContinuous&&oIdx===1)_ju.addWithFunction(endpointsToPaint,conn.endpoints[oIdx],function(e){return e.id==conn.endpoints[oIdx].id;});}}// place Endpoints whose anchors are continuous but have no Connections
for(i=0;i<ep.length;i++){if(ep[i].connections.length===0&&ep[i].anchor.isContinuous){if(!anchorLists[elementId])anchorLists[elementId]={top:[],right:[],bottom:[],left:[]};_updateAnchorList(anchorLists[elementId],-Math.PI/2,0,{endpoints:[ep[i],ep[i]],paint:function paint(){}},false,elementId,0,false,ep[i].anchor.getDefaultFace(),elementId,connectionsToPaint,endpointsToPaint);_ju.addWithFunction(anchorsToUpdate,elementId,function(a){return a===elementId;});}}// now place all the continuous anchors we need to;
for(i=0;i<anchorsToUpdate.length;i++){placeAnchors(anchorsToUpdate[i],anchorLists[anchorsToUpdate[i]]);}// now that continuous anchors have been placed, paint all the endpoints for this element
// TODO performance: add the endpoint ids to a temp array, and then when iterating in the next
// loop, check that we didn't just paint that endpoint. we can probably shave off a few more milliseconds this way.
for(i=0;i<ep.length;i++){ep[i].paint({timestamp:timestamp,offset:myOffset,dimensions:myOffset.s,recalc:doNotRecalcEndpoint!==true});}// ... and any other endpoints we came across as a result of the continuous anchors.
for(i=0;i<endpointsToPaint.length;i++){var cd=jsPlumbInstance.getCachedData(endpointsToPaint[i].elementId);endpointsToPaint[i].paint({timestamp:timestamp,offset:cd,dimensions:cd.s});}// paint all the standard and "dynamic connections", which are connections whose other anchor is
// static and therefore does need to be recomputed; we make sure that happens only one time.
// TODO we could have compiled a list of these in the first pass through connections; might save some time.
for(i=0;i<endpointConnections.length;i++){var otherEndpoint=endpointConnections[i][1];if(otherEndpoint.anchor.constructor==_jp.DynamicAnchor){otherEndpoint.paint({elementWithPrecedence:elementId,timestamp:timestamp});_ju.addWithFunction(connectionsToPaint,endpointConnections[i][0],function(c){return c.id==endpointConnections[i][0].id;});// all the connections for the other endpoint now need to be repainted
for(var k=0;k<otherEndpoint.connections.length;k++){if(otherEndpoint.connections[k]!==endpointConnections[i][0])_ju.addWithFunction(connectionsToPaint,otherEndpoint.connections[k],function(c){return c.id==otherEndpoint.connections[k].id;});}}else if(otherEndpoint.anchor.constructor==_jp.Anchor){_ju.addWithFunction(connectionsToPaint,endpointConnections[i][0],function(c){return c.id==endpointConnections[i][0].id;});}}// paint current floating connection for this element, if there is one.
var fc=floatingConnections[elementId];if(fc)fc.paint({timestamp:timestamp,recalc:false,elId:elementId});// paint all the connections
for(i=0;i<connectionsToPaint.length;i++){connectionsToPaint[i].paint({elId:elementId,timestamp:timestamp,recalc:false,clearEdits:clearEdits});}}};var ContinuousAnchor=function ContinuousAnchor(anchorParams){_ju.EventGenerator.apply(this);this.type="Continuous";this.isDynamic=true;this.isContinuous=true;var faces=anchorParams.faces||["top","right","bottom","left"],clockwise=!(anchorParams.clockwise===false),availableFaces={},opposites={"top":"bottom","right":"left","left":"right","bottom":"top"},clockwiseOptions={"top":"right","right":"bottom","left":"top","bottom":"left"},antiClockwiseOptions={"top":"left","right":"top","left":"bottom","bottom":"right"},secondBest=clockwise?clockwiseOptions:antiClockwiseOptions,lastChoice=clockwise?antiClockwiseOptions:clockwiseOptions,cssClass=anchorParams.cssClass||"";for(var i=0;i<faces.length;i++){availableFaces[faces[i]]=true;}this.getDefaultFace=function(){return faces.length===0?"top":faces[0];};// if the given edge is supported, returns it. otherwise looks for a substitute that _is_
// supported. if none supported we also return the request edge.
this.verifyEdge=function(edge){if(availableFaces[edge])return edge;else if(availableFaces[opposites[edge]])return opposites[edge];else if(availableFaces[secondBest[edge]])return secondBest[edge];else if(availableFaces[lastChoice[edge]])return lastChoice[edge];return edge;// we have to give them something.
};this.isEdgeSupported=function(edge){return availableFaces[edge]===true;};this.compute=function(params){return userDefinedContinuousAnchorLocations[params.element.id]||continuousAnchorLocations[params.element.id]||[0,0];};this.getCurrentLocation=function(params){return userDefinedContinuousAnchorLocations[params.element.id]||continuousAnchorLocations[params.element.id]||[0,0];};this.getOrientation=function(endpoint){return continuousAnchorOrientations[endpoint.id]||[0,0];};this.clearUserDefinedLocation=function(){delete userDefinedContinuousAnchorLocations[anchorParams.elementId];};this.setUserDefinedLocation=function(loc){userDefinedContinuousAnchorLocations[anchorParams.elementId]=loc;};this.getCssClass=function(){return cssClass;};};// continuous anchors
jsPlumbInstance.continuousAnchorFactory={get:function get(params){return new ContinuousAnchor(params);},clear:function clear(elementId){delete userDefinedContinuousAnchorLocations[elementId];delete continuousAnchorLocations[elementId];}};};/**
     * Anchors model a position on some element at which an Endpoint may be located.  They began as a first class citizen of jsPlumb, ie. a user
     * was required to create these themselves, but over time this has been replaced by the concept of referring to them either by name (eg. "TopMiddle"),
     * or by an array describing their coordinates (eg. [ 0, 0.5, 0, -1 ], which is the same as "TopMiddle").  jsPlumb now handles all of the
     * creation of Anchors without user intervention.
     */_jp.Anchor=function(params){this.x=params.x||0;this.y=params.y||0;this.elementId=params.elementId;this.cssClass=params.cssClass||"";this.userDefinedLocation=null;this.orientation=params.orientation||[0,0];this.lastReturnValue=null;this.offsets=params.offsets||[0,0];this.timestamp=null;_ju.EventGenerator.apply(this);this.compute=function(params){var xy=params.xy,wh=params.wh,timestamp=params.timestamp;if(params.clearUserDefinedLocation)this.userDefinedLocation=null;if(timestamp&&timestamp===this.timestamp)return this.lastReturnValue;if(this.userDefinedLocation!=null){this.lastReturnValue=this.userDefinedLocation;}else{this.lastReturnValue=[xy[0]+this.x*wh[0]+this.offsets[0],xy[1]+this.y*wh[1]+this.offsets[1]];}this.timestamp=timestamp;return this.lastReturnValue;};this.getCurrentLocation=function(params){params=params||{};return this.lastReturnValue==null||params.timestamp!=null&&this.timestamp!=params.timestamp?this.compute(params):this.lastReturnValue;};};_ju.extend(_jp.Anchor,_ju.EventGenerator,{equals:function equals(anchor){if(!anchor)return false;var ao=anchor.getOrientation(),o=this.getOrientation();return this.x==anchor.x&&this.y==anchor.y&&this.offsets[0]==anchor.offsets[0]&&this.offsets[1]==anchor.offsets[1]&&o[0]==ao[0]&&o[1]==ao[1];},getUserDefinedLocation:function getUserDefinedLocation(){return this.userDefinedLocation;},setUserDefinedLocation:function setUserDefinedLocation(l){this.userDefinedLocation=l;},clearUserDefinedLocation:function clearUserDefinedLocation(){this.userDefinedLocation=null;},getOrientation:function getOrientation(){return this.orientation;},getCssClass:function getCssClass(){return this.cssClass;}});/**
     * An Anchor that floats. its orientation is computed dynamically from
     * its position relative to the anchor it is floating relative to.  It is used when creating
     * a connection through drag and drop.
     *
     * TODO FloatingAnchor could totally be refactored to extend Anchor just slightly.
     */_jp.FloatingAnchor=function(params){_jp.Anchor.apply(this,arguments);// this is the anchor that this floating anchor is referenced to for
// purposes of calculating the orientation.
var ref=params.reference,// the canvas this refers to.
refCanvas=params.referenceCanvas,size=_jp.getSize(refCanvas),// these are used to store the current relative position of our
// anchor wrt the reference anchor. they only indicate
// direction, so have a value of 1 or -1 (or, very rarely, 0). these
// values are written by the compute method, and read
// by the getOrientation method.
xDir=0,yDir=0,// temporary member used to store an orientation when the floating
// anchor is hovering over another anchor.
orientation=null,_lastResult=null;// clear from parent. we want floating anchor orientation to always be computed.
this.orientation=null;// set these to 0 each; they are used by certain types of connectors in the loopback case,
// when the connector is trying to clear the element it is on. but for floating anchor it's not
// very important.
this.x=0;this.y=0;this.isFloating=true;this.compute=function(params){var xy=params.xy,result=[xy[0]+size[0]/2,xy[1]+size[1]/2];// return origin of the element. we may wish to improve this so that any object can be the drag proxy.
_lastResult=result;return result;};this.getOrientation=function(_endpoint){if(orientation)return orientation;else{var o=ref.getOrientation(_endpoint);// here we take into account the orientation of the other
// anchor: if it declares zero for some direction, we declare zero too. this might not be the most awesome. perhaps we can come
// up with a better way. it's just so that the line we draw looks like it makes sense. maybe this wont make sense.
return[Math.abs(o[0])*xDir*-1,Math.abs(o[1])*yDir*-1];}};/**
         * notification the endpoint associated with this anchor is hovering
         * over another anchor; we want to assume that anchor's orientation
         * for the duration of the hover.
         */this.over=function(anchor,endpoint){orientation=anchor.getOrientation(endpoint);};/**
         * notification the endpoint associated with this anchor is no
         * longer hovering over another anchor; we should resume calculating
         * orientation as we normally do.
         */this.out=function(){orientation=null;};this.getCurrentLocation=function(params){return _lastResult==null?this.compute(params):_lastResult;};};_ju.extend(_jp.FloatingAnchor,_jp.Anchor);var _convertAnchor=function _convertAnchor(anchor,jsPlumbInstance,elementId){return anchor.constructor==_jp.Anchor?anchor:jsPlumbInstance.makeAnchor(anchor,elementId,jsPlumbInstance);};/* 
     * A DynamicAnchor is an Anchor that contains a list of other Anchors, which it cycles
     * through at compute time to find the one that is located closest to
     * the center of the target element, and returns that Anchor's compute
     * method result. this causes endpoints to follow each other with
     * respect to the orientation of their target elements, which is a useful
     * feature for some applications.
     * 
     */_jp.DynamicAnchor=function(params){_jp.Anchor.apply(this,arguments);this.isDynamic=true;this.anchors=[];this.elementId=params.elementId;this.jsPlumbInstance=params.jsPlumbInstance;for(var i=0;i<params.anchors.length;i++){this.anchors[i]=_convertAnchor(params.anchors[i],this.jsPlumbInstance,this.elementId);}this.getAnchors=function(){return this.anchors;};this.locked=false;var _curAnchor=this.anchors.length>0?this.anchors[0]:null,_lastAnchor=_curAnchor,self=this,// helper method to calculate the distance between the centers of the two elements.
_distance=function _distance(anchor,cx,cy,xy,wh){var ax=xy[0]+anchor.x*wh[0],ay=xy[1]+anchor.y*wh[1],acx=xy[0]+wh[0]/2,acy=xy[1]+wh[1]/2;return Math.sqrt(Math.pow(cx-ax,2)+Math.pow(cy-ay,2))+Math.sqrt(Math.pow(acx-ax,2)+Math.pow(acy-ay,2));},// default method uses distance between element centers.  you can provide your own method in the dynamic anchor
// constructor (and also to jsPlumb.makeDynamicAnchor). the arguments to it are four arrays:
// xy - xy loc of the anchor's element
// wh - anchor's element's dimensions
// txy - xy loc of the element of the other anchor in the connection
// twh - dimensions of the element of the other anchor in the connection.
// anchors - the list of selectable anchors
_anchorSelector=params.selector||function(xy,wh,txy,twh,anchors){var cx=txy[0]+twh[0]/2,cy=txy[1]+twh[1]/2;var minIdx=-1,minDist=Infinity;for(var i=0;i<anchors.length;i++){var d=_distance(anchors[i],cx,cy,xy,wh);if(d<minDist){minIdx=i+0;minDist=d;}}return anchors[minIdx];};this.compute=function(params){var xy=params.xy,wh=params.wh,txy=params.txy,twh=params.twh;this.timestamp=params.timestamp;var udl=self.getUserDefinedLocation();if(udl!=null){return udl;}// if anchor is locked or an opposite element was not given, we
// maintain our state. anchor will be locked
// if it is the source of a drag and drop.
if(this.locked||txy==null||twh==null)return _curAnchor.compute(params);else params.timestamp=null;// otherwise clear this, i think. we want the anchor to compute.
_curAnchor=_anchorSelector(xy,wh,txy,twh,this.anchors);this.x=_curAnchor.x;this.y=_curAnchor.y;if(_curAnchor!=_lastAnchor)this.fire("anchorChanged",_curAnchor);_lastAnchor=_curAnchor;return _curAnchor.compute(params);};this.getCurrentLocation=function(params){return this.getUserDefinedLocation()||(_curAnchor!=null?_curAnchor.getCurrentLocation(params):null);};this.getOrientation=function(_endpoint){return _curAnchor!=null?_curAnchor.getOrientation(_endpoint):[0,0];};this.over=function(anchor,endpoint){if(_curAnchor!=null)_curAnchor.over(anchor,endpoint);};this.out=function(){if(_curAnchor!=null)_curAnchor.out();};this.getCssClass=function(){return _curAnchor&&_curAnchor.getCssClass()||"";};};_ju.extend(_jp.DynamicAnchor,_jp.Anchor);// -------- basic anchors ------------------    
var _curryAnchor=function _curryAnchor(x,y,ox,oy,type,fnInit){_jp.Anchors[type]=function(params){var a=params.jsPlumbInstance.makeAnchor([x,y,ox,oy,0,0],params.elementId,params.jsPlumbInstance);a.type=type;if(fnInit)fnInit(a,params);return a;};};_curryAnchor(0.5,0,0,-1,"TopCenter");_curryAnchor(0.5,1,0,1,"BottomCenter");_curryAnchor(0,0.5,-1,0,"LeftMiddle");_curryAnchor(1,0.5,1,0,"RightMiddle");_curryAnchor(0.5,0,0,-1,"Top");_curryAnchor(0.5,1,0,1,"Bottom");_curryAnchor(0,0.5,-1,0,"Left");_curryAnchor(1,0.5,1,0,"Right");_curryAnchor(0.5,0.5,0,0,"Center");_curryAnchor(1,0,0,-1,"TopRight");_curryAnchor(1,1,0,1,"BottomRight");_curryAnchor(0,0,0,-1,"TopLeft");_curryAnchor(0,1,0,1,"BottomLeft");// ------- dynamic anchors -------------------    
// default dynamic anchors chooses from Top, Right, Bottom, Left
_jp.Defaults.DynamicAnchors=function(params){return params.jsPlumbInstance.makeAnchors(["TopCenter","RightMiddle","BottomCenter","LeftMiddle"],params.elementId,params.jsPlumbInstance);};// default dynamic anchors bound to name 'AutoDefault'
_jp.Anchors.AutoDefault=function(params){var a=params.jsPlumbInstance.makeDynamicAnchor(_jp.Defaults.DynamicAnchors(params));a.type="AutoDefault";return a;};// ------- continuous anchors -------------------    
var _curryContinuousAnchor=function _curryContinuousAnchor(type,faces){_jp.Anchors[type]=function(params){var a=params.jsPlumbInstance.makeAnchor(["Continuous",{faces:faces}],params.elementId,params.jsPlumbInstance);a.type=type;return a;};};_jp.Anchors.Continuous=function(params){return params.jsPlumbInstance.continuousAnchorFactory.get(params);};_curryContinuousAnchor("ContinuousLeft",["left"]);_curryContinuousAnchor("ContinuousTop",["top"]);_curryContinuousAnchor("ContinuousBottom",["bottom"]);_curryContinuousAnchor("ContinuousRight",["right"]);// ------- position assign anchors -------------------    
// this anchor type lets you assign the position at connection time.
_curryAnchor(0,0,0,0,"Assign",function(anchor,params){// find what to use as the "position finder". the user may have supplied a String which represents
// the id of a position finder in jsPlumb.AnchorPositionFinders, or the user may have supplied the
// position finder as a function.  we find out what to use and then set it on the anchor.
var pf=params.position||"Fixed";anchor.positionFinder=pf.constructor==String?params.jsPlumbInstance.AnchorPositionFinders[pf]:pf;// always set the constructor params; the position finder might need them later (the Grid one does,
// for example)
anchor.constructorParams=params;});// these are the default anchor positions finders, which are used by the makeTarget function.  supplying
// a position finder argument to that function allows you to specify where the resulting anchor will
// be located
root.jsPlumbInstance.prototype.AnchorPositionFinders={"Fixed":function Fixed(dp,ep,es){return[(dp.left-ep.left)/es[0],(dp.top-ep.top)/es[1]];},"Grid":function Grid(dp,ep,es,params){var dx=dp.left-ep.left,dy=dp.top-ep.top,gx=es[0]/params.grid[0],gy=es[1]/params.grid[1],mx=Math.floor(dx/gx),my=Math.floor(dy/gy);return[(mx*gx+gx/2)/es[0],(my*gy+gy/2)/es[1]];}};// ------- perimeter anchors -------------------    
_jp.Anchors.Perimeter=function(params){params=params||{};var anchorCount=params.anchorCount||60,shape=params.shape;if(!shape)throw new Error("no shape supplied to Perimeter Anchor type");var _circle=function _circle(){var r=0.5,step=Math.PI*2/anchorCount,current=0,a=[];for(var i=0;i<anchorCount;i++){var x=r+r*Math.sin(current),y=r+r*Math.cos(current);a.push([x,y,0,0]);current+=step;}return a;},_path=function _path(segments){var anchorsPerFace=anchorCount/segments.length,a=[],_computeFace=function _computeFace(x1,y1,x2,y2,fractionalLength){anchorsPerFace=anchorCount*fractionalLength;var dx=(x2-x1)/anchorsPerFace,dy=(y2-y1)/anchorsPerFace;for(var i=0;i<anchorsPerFace;i++){a.push([x1+dx*i,y1+dy*i,0,0]);}};for(var i=0;i<segments.length;i++){_computeFace.apply(null,segments[i]);}return a;},_shape=function _shape(faces){var s=[];for(var i=0;i<faces.length;i++){s.push([faces[i][0],faces[i][1],faces[i][2],faces[i][3],1/faces.length]);}return _path(s);},_rectangle=function _rectangle(){return _shape([[0,0,1,0],[1,0,1,1],[1,1,0,1],[0,1,0,0]]);};var _shapes={"Circle":_circle,"Ellipse":_circle,"Diamond":function Diamond(){return _shape([[0.5,0,1,0.5],[1,0.5,0.5,1],[0.5,1,0,0.5],[0,0.5,0.5,0]]);},"Rectangle":_rectangle,"Square":_rectangle,"Triangle":function Triangle(){return _shape([[0.5,0,1,1],[1,1,0,1],[0,1,0.5,0]]);},"Path":function Path(params){var points=params.points,p=[],tl=0;for(var i=0;i<points.length-1;i++){var l=Math.sqrt(Math.pow(points[i][2]-points[i][0])+Math.pow(points[i][3]-points[i][1]));tl+=l;p.push([points[i][0],points[i][1],points[i+1][0],points[i+1][1],l]);}for(var j=0;j<p.length;j++){p[j][4]=p[j][4]/tl;}return _path(p);}},_rotate=function _rotate(points,amountInDegrees){var o=[],theta=amountInDegrees/180*Math.PI;for(var i=0;i<points.length;i++){var _x=points[i][0]-0.5,_y=points[i][1]-0.5;o.push([0.5+(_x*Math.cos(theta)-_y*Math.sin(theta)),0.5+(_x*Math.sin(theta)+_y*Math.cos(theta)),points[i][2],points[i][3]]);}return o;};if(!_shapes[shape])throw new Error("Shape ["+shape+"] is unknown by Perimeter Anchor type");var da=_shapes[shape](params);if(params.rotation)da=_rotate(da,params.rotation);var a=params.jsPlumbInstance.makeDynamicAnchor(da);a.type="Perimeter";return a;};}).call(typeof window!=='undefined'?window:this);/*
 * jsPlumb
 * 
 * Title:jsPlumb 2.3.0
 * 
 * Provides a way to visually connect elements on an HTML page, using SVG.
 * 
 * This file contains the default Connectors, Endpoint and Overlay definitions.
 *
 * Copyright (c) 2010 - 2017 jsPlumb (hello@jsplumbtoolkit.com)
 * 
 * http://jsplumbtoolkit.com
 * http://github.com/sporritt/jsplumb
 * 
 * Dual licensed under the MIT and GPL2 licenses.
 */;(function(){"use strict";var root=this,_jp=root.jsPlumb,_ju=root.jsPlumbUtil,_jg=root.Biltong;_jp.Segments={/*
         * Class: AbstractSegment
         * A Connector is made up of 1..N Segments, each of which has a Type, such as 'Straight', 'Arc',
         * 'Bezier'. This is new from 1.4.2, and gives us a lot more flexibility when drawing connections: things such
         * as rounded corners for flowchart connectors, for example, or a straight line stub for Bezier connections, are
         * much easier to do now.
         *
         * A Segment is responsible for providing coordinates for painting it, and also must be able to report its length.
         * 
         */AbstractSegment:function AbstractSegment(params){this.params=params;/**
             * Function: findClosestPointOnPath
             * Finds the closest point on this segment to the given [x, y],
             * returning both the x and y of the point plus its distance from
             * the supplied point, and its location along the length of the
             * path inscribed by the segment.  This implementation returns
             * Infinity for distance and null values for everything else;
             * subclasses are expected to override.
             */this.findClosestPointOnPath=function(x,y){return{d:Infinity,x:null,y:null,l:null};};this.getBounds=function(){return{minX:Math.min(params.x1,params.x2),minY:Math.min(params.y1,params.y2),maxX:Math.max(params.x1,params.x2),maxY:Math.max(params.y1,params.y2)};};},Straight:function Straight(params){var _super=_jp.Segments.AbstractSegment.apply(this,arguments),length,m,m2,x1,x2,y1,y2,_recalc=function _recalc(){length=Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));m=_jg.gradient({x:x1,y:y1},{x:x2,y:y2});m2=-1/m;};this.type="Straight";this.getLength=function(){return length;};this.getGradient=function(){return m;};this.getCoordinates=function(){return{x1:x1,y1:y1,x2:x2,y2:y2};};this.setCoordinates=function(coords){x1=coords.x1;y1=coords.y1;x2=coords.x2;y2=coords.y2;_recalc();};this.setCoordinates({x1:params.x1,y1:params.y1,x2:params.x2,y2:params.y2});this.getBounds=function(){return{minX:Math.min(x1,x2),minY:Math.min(y1,y2),maxX:Math.max(x1,x2),maxY:Math.max(y1,y2)};};/**
             * returns the point on the segment's path that is 'location' along the length of the path, where 'location' is a decimal from
             * 0 to 1 inclusive. for the straight line segment this is simple maths.
             */this.pointOnPath=function(location,absolute){if(location===0&&!absolute)return{x:x1,y:y1};else if(location==1&&!absolute)return{x:x2,y:y2};else{var l=absolute?location>0?location:length+location:location*length;return _jg.pointOnLine({x:x1,y:y1},{x:x2,y:y2},l);}};/**
             * returns the gradient of the segment at the given point - which for us is constant.
             */this.gradientAtPoint=function(_){return m;};/**
             * returns the point on the segment's path that is 'distance' along the length of the path from 'location', where
             * 'location' is a decimal from 0 to 1 inclusive, and 'distance' is a number of pixels.
             * this hands off to jsPlumbUtil to do the maths, supplying two points and the distance.
             */this.pointAlongPathFrom=function(location,distance,absolute){var p=this.pointOnPath(location,absolute),farAwayPoint=distance<=0?{x:x1,y:y1}:{x:x2,y:y2};/*
                 location == 1 ? {
                 x:x1 + ((x2 - x1) * 10),
                 y:y1 + ((y1 - y2) * 10)
                 } :
                 */if(distance<=0&&Math.abs(distance)>1)distance*=-1;return _jg.pointOnLine(p,farAwayPoint,distance);};// is c between a and b?
var within=function within(a,b,c){return c>=Math.min(a,b)&&c<=Math.max(a,b);};// find which of a and b is closest to c
var closest=function closest(a,b,c){return Math.abs(c-a)<Math.abs(c-b)?a:b;};/**
             Function: findClosestPointOnPath
             Finds the closest point on this segment to [x,y]. See
             notes on this method in AbstractSegment.
             */this.findClosestPointOnPath=function(x,y){var out={d:Infinity,x:null,y:null,l:null,x1:x1,x2:x2,y1:y1,y2:y2};if(m===0){out.y=y1;out.x=within(x1,x2,x)?x:closest(x1,x2,x);}else if(m==Infinity||m==-Infinity){out.x=x1;out.y=within(y1,y2,y)?y:closest(y1,y2,y);}else{// closest point lies on normal from given point to this line.  
var b=y1-m*x1,b2=y-m2*x,// y1 = m.x1 + b and y1 = m2.x1 + b2
// so m.x1 + b = m2.x1 + b2
// x1(m - m2) = b2 - b
// x1 = (b2 - b) / (m - m2)
_x1=(b2-b)/(m-m2),_y1=m*_x1+b;out.x=within(x1,x2,_x1)?_x1:closest(x1,x2,_x1);//_x1;
out.y=within(y1,y2,_y1)?_y1:closest(y1,y2,_y1);//_y1;
}var fractionInSegment=_jg.lineLength([out.x,out.y],[x1,y1]);out.d=_jg.lineLength([x,y],[out.x,out.y]);out.l=fractionInSegment/length;return out;};},/*
         Arc Segment. You need to supply:

         r   -   radius
         cx  -   center x for the arc
         cy  -   center y for the arc
         ac  -   whether the arc is anticlockwise or not. default is clockwise.

         and then either:

         startAngle  -   startAngle for the arc.
         endAngle    -   endAngle for the arc.

         or:

         x1          -   x for start point
         y1          -   y for start point
         x2          -   x for end point
         y2          -   y for end point

         */Arc:function Arc(params){var _super=_jp.Segments.AbstractSegment.apply(this,arguments),_calcAngle=function _calcAngle(_x,_y){return _jg.theta([params.cx,params.cy],[_x,_y]);},_calcAngleForLocation=function _calcAngleForLocation(segment,location){if(segment.anticlockwise){var sa=segment.startAngle<segment.endAngle?segment.startAngle+TWO_PI:segment.startAngle,s=Math.abs(sa-segment.endAngle);return sa-s*location;}else{var ea=segment.endAngle<segment.startAngle?segment.endAngle+TWO_PI:segment.endAngle,ss=Math.abs(ea-segment.startAngle);return segment.startAngle+ss*location;}},TWO_PI=2*Math.PI;this.radius=params.r;this.anticlockwise=params.ac;this.type="Arc";if(params.startAngle&&params.endAngle){this.startAngle=params.startAngle;this.endAngle=params.endAngle;this.x1=params.cx+this.radius*Math.cos(params.startAngle);this.y1=params.cy+this.radius*Math.sin(params.startAngle);this.x2=params.cx+this.radius*Math.cos(params.endAngle);this.y2=params.cy+this.radius*Math.sin(params.endAngle);}else{this.startAngle=_calcAngle(params.x1,params.y1);this.endAngle=_calcAngle(params.x2,params.y2);this.x1=params.x1;this.y1=params.y1;this.x2=params.x2;this.y2=params.y2;}if(this.endAngle<0)this.endAngle+=TWO_PI;if(this.startAngle<0)this.startAngle+=TWO_PI;// segment is used by vml     
//this.segment = _jg.quadrant([this.x1, this.y1], [this.x2, this.y2]);
// we now have startAngle and endAngle as positive numbers, meaning the
// absolute difference (|d|) between them is the sweep (s) of this arc, unless the
// arc is 'anticlockwise' in which case 's' is given by 2PI - |d|.
var ea=this.endAngle<this.startAngle?this.endAngle+TWO_PI:this.endAngle;this.sweep=Math.abs(ea-this.startAngle);if(this.anticlockwise)this.sweep=TWO_PI-this.sweep;var circumference=2*Math.PI*this.radius,frac=this.sweep/TWO_PI,length=circumference*frac;this.getLength=function(){return length;};this.getBounds=function(){return{minX:params.cx-params.r,maxX:params.cx+params.r,minY:params.cy-params.r,maxY:params.cy+params.r};};var VERY_SMALL_VALUE=0.0000000001,gentleRound=function gentleRound(n){var f=Math.floor(n),r=Math.ceil(n);if(n-f<VERY_SMALL_VALUE)return f;else if(r-n<VERY_SMALL_VALUE)return r;return n;};/**
             * returns the point on the segment's path that is 'location' along the length of the path, where 'location' is a decimal from
             * 0 to 1 inclusive.
             */this.pointOnPath=function(location,absolute){if(location===0){return{x:this.x1,y:this.y1,theta:this.startAngle};}else if(location==1){return{x:this.x2,y:this.y2,theta:this.endAngle};}if(absolute){location=location/length;}var angle=_calcAngleForLocation(this,location),_x=params.cx+params.r*Math.cos(angle),_y=params.cy+params.r*Math.sin(angle);return{x:gentleRound(_x),y:gentleRound(_y),theta:angle};};/**
             * returns the gradient of the segment at the given point.
             */this.gradientAtPoint=function(location,absolute){var p=this.pointOnPath(location,absolute);var m=_jg.normal([params.cx,params.cy],[p.x,p.y]);if(!this.anticlockwise&&(m==Infinity||m==-Infinity))m*=-1;return m;};this.pointAlongPathFrom=function(location,distance,absolute){var p=this.pointOnPath(location,absolute),arcSpan=distance/circumference*2*Math.PI,dir=this.anticlockwise?-1:1,startAngle=p.theta+dir*arcSpan,startX=params.cx+this.radius*Math.cos(startAngle),startY=params.cy+this.radius*Math.sin(startAngle);return{x:startX,y:startY};};},Bezier:function Bezier(params){this.curve=[{x:params.x1,y:params.y1},{x:params.cp1x,y:params.cp1y},{x:params.cp2x,y:params.cp2y},{x:params.x2,y:params.y2}];var _super=_jp.Segments.AbstractSegment.apply(this,arguments);// although this is not a strictly rigorous determination of bounds
// of a bezier curve, it works for the types of curves that this segment
// type produces.
this.bounds={minX:Math.min(params.x1,params.x2,params.cp1x,params.cp2x),minY:Math.min(params.y1,params.y2,params.cp1y,params.cp2y),maxX:Math.max(params.x1,params.x2,params.cp1x,params.cp2x),maxY:Math.max(params.y1,params.y2,params.cp1y,params.cp2y)};this.type="Bezier";var _translateLocation=function _translateLocation(_curve,location,absolute){if(absolute)location=root.jsBezier.locationAlongCurveFrom(_curve,location>0?0:1,location);return location;};/**
             * returns the point on the segment's path that is 'location' along the length of the path, where 'location' is a decimal from
             * 0 to 1 inclusive.
             */this.pointOnPath=function(location,absolute){location=_translateLocation(this.curve,location,absolute);return root.jsBezier.pointOnCurve(this.curve,location);};/**
             * returns the gradient of the segment at the given point.
             */this.gradientAtPoint=function(location,absolute){location=_translateLocation(this.curve,location,absolute);return root.jsBezier.gradientAtPoint(this.curve,location);};this.pointAlongPathFrom=function(location,distance,absolute){location=_translateLocation(this.curve,location,absolute);return root.jsBezier.pointAlongCurveFrom(this.curve,location,distance);};this.getLength=function(){return root.jsBezier.getLength(this.curve);};this.getBounds=function(){return this.bounds;};}};_jp.SegmentRenderer={getPath:function getPath(segment){return{"Straight":function Straight(){var d=segment.getCoordinates();return"M "+d.x1+" "+d.y1+" L "+d.x2+" "+d.y2;},"Bezier":function Bezier(){var d=segment.params;return"M "+d.x1+" "+d.y1+" C "+d.cp1x+" "+d.cp1y+" "+d.cp2x+" "+d.cp2y+" "+d.x2+" "+d.y2;},"Arc":function Arc(){var d=segment.params,laf=segment.sweep>Math.PI?1:0,sf=segment.anticlockwise?0:1;return"M"+segment.x1+" "+segment.y1+" A "+segment.radius+" "+d.r+" 0 "+laf+","+sf+" "+segment.x2+" "+segment.y2;}}[segment.type]();}};/*
     Class: AbstractComponent
     Superclass for AbstractConnector and AbstractEndpoint.
     */var AbstractComponent=function AbstractComponent(){this.resetBounds=function(){this.bounds={minX:Infinity,minY:Infinity,maxX:-Infinity,maxY:-Infinity};};this.resetBounds();};/*
     * Class: AbstractConnector
     * Superclass for all Connectors; here is where Segments are managed.  This is exposed on jsPlumb just so it
     * can be accessed from other files. You should not try to instantiate one of these directly.
     *
     * When this class is asked for a pointOnPath, or gradient etc, it must first figure out which segment to dispatch
     * that request to. This is done by keeping track of the total connector length as segments are added, and also
     * their cumulative ratios to the total length.  Then when the right segment is found it is a simple case of dispatching
     * the request to it (and adjusting 'location' so that it is relative to the beginning of that segment.)
     */_jp.Connectors.AbstractConnector=function(params){AbstractComponent.apply(this,arguments);var segments=[],totalLength=0,segmentProportions=[],segmentProportionalLengths=[],stub=params.stub||0,sourceStub=_ju.isArray(stub)?stub[0]:stub,targetStub=_ju.isArray(stub)?stub[1]:stub,gap=params.gap||0,sourceGap=_ju.isArray(gap)?gap[0]:gap,targetGap=_ju.isArray(gap)?gap[1]:gap,userProvidedSegments=null,edited=false,paintInfo=null,geometry=null,editable=params.editable!==false&&_jp.ConnectorEditors!=null&&_jp.ConnectorEditors[this.type]!=null;var _setGeometry=this.setGeometry=function(g,internallyComputed){edited=!internallyComputed;geometry=g;};var _getGeometry=this.getGeometry=function(){return geometry;};this.getPathData=function(){var p="";for(var i=0;i<segments.length;i++){p+=_jp.SegmentRenderer.getPath(segments[i]);p+=" ";}return p;};this.hasBeenEdited=function(){return edited;};this.isEditing=function(){return this.editor!=null&&this.editor.isActive();};this.setEditable=function(e){// if this connector has an editor already, or
// if an editor for this connector's type is available, or
// if the child declares an overrideSetEditable and it does not return false, editable is true.
if(e&&_jp.ConnectorEditors!=null&&_jp.ConnectorEditors[this.type]!=null&&(this.overrideSetEditable==null||this.overrideSetEditable())){editable=e;}else{editable=false;}return editable;};this.isEditable=function(){return editable;};/**
         * Function: findSegmentForPoint
         * Returns the segment that is closest to the given [x,y],
         * null if nothing found.  This function returns a JS
         * object with:
         *
         *   d   -   distance from segment
         *   l   -   proportional location in segment
         *   x   -   x point on the segment
         *   y   -   y point on the segment
         *   s   -   the segment itself.
         */this.findSegmentForPoint=function(x,y){var out={d:Infinity,s:null,x:null,y:null,l:null};for(var i=0;i<segments.length;i++){var _s=segments[i].findClosestPointOnPath(x,y);if(_s.d<out.d){out.d=_s.d;out.l=_s.l;out.x=_s.x;out.y=_s.y;out.s=segments[i];out.x1=_s.x1;out.x2=_s.x2;out.y1=_s.y1;out.y2=_s.y2;out.index=i;}}return out;};var _updateSegmentProportions=function _updateSegmentProportions(){var curLoc=0;for(var i=0;i<segments.length;i++){var sl=segments[i].getLength();segmentProportionalLengths[i]=sl/totalLength;segmentProportions[i]=[curLoc,curLoc+=sl/totalLength];}},/**
             * returns [segment, proportion of travel in segment, segment index] for the segment
             * that contains the point which is 'location' distance along the entire path, where
             * 'location' is a decimal between 0 and 1 inclusive. in this connector type, paths
             * are made up of a list of segments, each of which contributes some fraction to
             * the total length.
             * From 1.3.10 this also supports the 'absolute' property, which lets us specify a location
             * as the absolute distance in pixels, rather than a proportion of the total path.
             */_findSegmentForLocation=function _findSegmentForLocation(location,absolute){if(absolute){location=location>0?location/totalLength:(totalLength+location)/totalLength;}var idx=segmentProportions.length-1,inSegmentProportion=1;for(var i=0;i<segmentProportions.length;i++){if(segmentProportions[i][1]>=location){idx=i;// todo is this correct for all connector path types?
inSegmentProportion=location==1?1:location===0?0:(location-segmentProportions[i][0])/segmentProportionalLengths[i];break;}}return{segment:segments[idx],proportion:inSegmentProportion,index:idx};},_addSegment=function _addSegment(conn,type,params){if(params.x1==params.x2&&params.y1==params.y2)return;var s=new _jp.Segments[type](params);segments.push(s);totalLength+=s.getLength();conn.updateBounds(s);},_clearSegments=function _clearSegments(){totalLength=segments.length=segmentProportions.length=segmentProportionalLengths.length=0;};this.setSegments=function(_segs){userProvidedSegments=[];totalLength=0;for(var i=0;i<_segs.length;i++){userProvidedSegments.push(_segs[i]);totalLength+=_segs[i].getLength();}};this.getLength=function(){return totalLength;};var _prepareCompute=function _prepareCompute(params){this.strokeWidth=params.strokeWidth;var segment=_jg.quadrant(params.sourcePos,params.targetPos),swapX=params.targetPos[0]<params.sourcePos[0],swapY=params.targetPos[1]<params.sourcePos[1],lw=params.strokeWidth||1,so=params.sourceEndpoint.anchor.getOrientation(params.sourceEndpoint),to=params.targetEndpoint.anchor.getOrientation(params.targetEndpoint),x=swapX?params.targetPos[0]:params.sourcePos[0],y=swapY?params.targetPos[1]:params.sourcePos[1],w=Math.abs(params.targetPos[0]-params.sourcePos[0]),h=Math.abs(params.targetPos[1]-params.sourcePos[1]);// if either anchor does not have an orientation set, we derive one from their relative
// positions.  we fix the axis to be the one in which the two elements are further apart, and
// point each anchor at the other element.  this is also used when dragging a new connection.
if(so[0]===0&&so[1]===0||to[0]===0&&to[1]===0){var index=w>h?0:1,oIndex=[1,0][index];so=[];to=[];so[index]=params.sourcePos[index]>params.targetPos[index]?-1:1;to[index]=params.sourcePos[index]>params.targetPos[index]?1:-1;so[oIndex]=0;to[oIndex]=0;}var sx=swapX?w+sourceGap*so[0]:sourceGap*so[0],sy=swapY?h+sourceGap*so[1]:sourceGap*so[1],tx=swapX?targetGap*to[0]:w+targetGap*to[0],ty=swapY?targetGap*to[1]:h+targetGap*to[1],oProduct=so[0]*to[0]+so[1]*to[1];var result={sx:sx,sy:sy,tx:tx,ty:ty,lw:lw,xSpan:Math.abs(tx-sx),ySpan:Math.abs(ty-sy),mx:(sx+tx)/2,my:(sy+ty)/2,so:so,to:to,x:x,y:y,w:w,h:h,segment:segment,startStubX:sx+so[0]*sourceStub,startStubY:sy+so[1]*sourceStub,endStubX:tx+to[0]*targetStub,endStubY:ty+to[1]*targetStub,isXGreaterThanStubTimes2:Math.abs(sx-tx)>sourceStub+targetStub,isYGreaterThanStubTimes2:Math.abs(sy-ty)>sourceStub+targetStub,opposite:oProduct==-1,perpendicular:oProduct===0,orthogonal:oProduct==1,sourceAxis:so[0]===0?"y":"x",points:[x,y,w,h,sx,sy,tx,ty]};result.anchorOrientation=result.opposite?"opposite":result.orthogonal?"orthogonal":"perpendicular";return result;};this.getSegments=function(){return segments;};this.updateBounds=function(segment){var segBounds=segment.getBounds();this.bounds.minX=Math.min(this.bounds.minX,segBounds.minX);this.bounds.maxX=Math.max(this.bounds.maxX,segBounds.maxX);this.bounds.minY=Math.min(this.bounds.minY,segBounds.minY);this.bounds.maxY=Math.max(this.bounds.maxY,segBounds.maxY);};var dumpSegmentsToConsole=function dumpSegmentsToConsole(){console.log("SEGMENTS:");for(var i=0;i<segments.length;i++){console.log(segments[i].type,segments[i].getLength(),segmentProportions[i]);}};this.pointOnPath=function(location,absolute){var seg=_findSegmentForLocation(location,absolute);return seg.segment&&seg.segment.pointOnPath(seg.proportion,false)||[0,0];};this.gradientAtPoint=function(location,absolute){var seg=_findSegmentForLocation(location,absolute);return seg.segment&&seg.segment.gradientAtPoint(seg.proportion,false)||0;};this.pointAlongPathFrom=function(location,distance,absolute){var seg=_findSegmentForLocation(location,absolute);// TODO what happens if this crosses to the next segment?
return seg.segment&&seg.segment.pointAlongPathFrom(seg.proportion,distance,false)||[0,0];};this.compute=function(params){paintInfo=_prepareCompute.call(this,params);_clearSegments();this._compute(paintInfo,params);this.x=paintInfo.points[0];this.y=paintInfo.points[1];this.w=paintInfo.points[2];this.h=paintInfo.points[3];this.segment=paintInfo.segment;_updateSegmentProportions();};return{addSegment:_addSegment,prepareCompute:_prepareCompute,sourceStub:sourceStub,targetStub:targetStub,maxStub:Math.max(sourceStub,targetStub),sourceGap:sourceGap,targetGap:targetGap,maxGap:Math.max(sourceGap,targetGap),setGeometry:_setGeometry,getGeometry:_getGeometry};};_ju.extend(_jp.Connectors.AbstractConnector,AbstractComponent);// ********************************* END OF CONNECTOR TYPES *******************************************************************
// ********************************* ENDPOINT TYPES *******************************************************************
_jp.Endpoints.AbstractEndpoint=function(params){AbstractComponent.apply(this,arguments);var compute=this.compute=function(anchorPoint,orientation,endpointStyle,connectorPaintStyle){var out=this._compute.apply(this,arguments);this.x=out[0];this.y=out[1];this.w=out[2];this.h=out[3];this.bounds.minX=this.x;this.bounds.minY=this.y;this.bounds.maxX=this.x+this.w;this.bounds.maxY=this.y+this.h;return out;};return{compute:compute,cssClass:params.cssClass};};_ju.extend(_jp.Endpoints.AbstractEndpoint,AbstractComponent);/**
     * Class: Endpoints.Dot
     * A round endpoint, with default radius 10 pixels.
     *//**
     * Function: Constructor
     *
     * Parameters:
     *
     *    radius    -    radius of the endpoint.  defaults to 10 pixels.
     */_jp.Endpoints.Dot=function(params){this.type="Dot";var _super=_jp.Endpoints.AbstractEndpoint.apply(this,arguments);params=params||{};this.radius=params.radius||10;this.defaultOffset=0.5*this.radius;this.defaultInnerRadius=this.radius/3;this._compute=function(anchorPoint,orientation,endpointStyle,connectorPaintStyle){this.radius=endpointStyle.radius||this.radius;var x=anchorPoint[0]-this.radius,y=anchorPoint[1]-this.radius,w=this.radius*2,h=this.radius*2;if(endpointStyle.stroke){var lw=endpointStyle.strokeWidth||1;x-=lw;y-=lw;w+=lw*2;h+=lw*2;}return[x,y,w,h,this.radius];};};_ju.extend(_jp.Endpoints.Dot,_jp.Endpoints.AbstractEndpoint);_jp.Endpoints.Rectangle=function(params){this.type="Rectangle";var _super=_jp.Endpoints.AbstractEndpoint.apply(this,arguments);params=params||{};this.width=params.width||20;this.height=params.height||20;this._compute=function(anchorPoint,orientation,endpointStyle,connectorPaintStyle){var width=endpointStyle.width||this.width,height=endpointStyle.height||this.height,x=anchorPoint[0]-width/2,y=anchorPoint[1]-height/2;return[x,y,width,height];};};_ju.extend(_jp.Endpoints.Rectangle,_jp.Endpoints.AbstractEndpoint);var DOMElementEndpoint=function DOMElementEndpoint(params){_jp.jsPlumbUIComponent.apply(this,arguments);this._jsPlumb.displayElements=[];};_ju.extend(DOMElementEndpoint,_jp.jsPlumbUIComponent,{getDisplayElements:function getDisplayElements(){return this._jsPlumb.displayElements;},appendDisplayElement:function appendDisplayElement(el){this._jsPlumb.displayElements.push(el);}});/**
     * Class: Endpoints.Image
     * Draws an image as the Endpoint.
     *//**
     * Function: Constructor
     *
     * Parameters:
     *
     *    src    -    location of the image to use.

     TODO: multiple references to self. not sure quite how to get rid of them entirely. perhaps self = null in the cleanup
     function will suffice

     TODO this class still might leak memory.

     */_jp.Endpoints.Image=function(params){this.type="Image";DOMElementEndpoint.apply(this,arguments);_jp.Endpoints.AbstractEndpoint.apply(this,arguments);var _onload=params.onload,src=params.src||params.url,clazz=params.cssClass?" "+params.cssClass:"";this._jsPlumb.img=new Image();this._jsPlumb.ready=false;this._jsPlumb.initialized=false;this._jsPlumb.deleted=false;this._jsPlumb.widthToUse=params.width;this._jsPlumb.heightToUse=params.height;this._jsPlumb.endpoint=params.endpoint;this._jsPlumb.img.onload=function(){if(this._jsPlumb!=null){this._jsPlumb.ready=true;this._jsPlumb.widthToUse=this._jsPlumb.widthToUse||this._jsPlumb.img.width;this._jsPlumb.heightToUse=this._jsPlumb.heightToUse||this._jsPlumb.img.height;if(_onload){_onload(this);}}}.bind(this);/*
         Function: setImage
         Sets the Image to use in this Endpoint.

         Parameters:
         img         -   may be a URL or an Image object
         onload      -   optional; a callback to execute once the image has loaded.
         */this._jsPlumb.endpoint.setImage=function(_img,onload){var s=_img.constructor==String?_img:_img.src;_onload=onload;this._jsPlumb.img.src=s;if(this.canvas!=null)this.canvas.setAttribute("src",this._jsPlumb.img.src);}.bind(this);this._jsPlumb.endpoint.setImage(src,_onload);this._compute=function(anchorPoint,orientation,endpointStyle,connectorPaintStyle){this.anchorPoint=anchorPoint;if(this._jsPlumb.ready)return[anchorPoint[0]-this._jsPlumb.widthToUse/2,anchorPoint[1]-this._jsPlumb.heightToUse/2,this._jsPlumb.widthToUse,this._jsPlumb.heightToUse];else return[0,0,0,0];};this.canvas=_jp.createElement("img",{position:"absolute",margin:0,padding:0,outline:0},this._jsPlumb.instance.endpointClass+clazz);if(this._jsPlumb.widthToUse)this.canvas.setAttribute("width",this._jsPlumb.widthToUse);if(this._jsPlumb.heightToUse)this.canvas.setAttribute("height",this._jsPlumb.heightToUse);this._jsPlumb.instance.appendElement(this.canvas);this.actuallyPaint=function(d,style,anchor){if(!this._jsPlumb.deleted){if(!this._jsPlumb.initialized){this.canvas.setAttribute("src",this._jsPlumb.img.src);this.appendDisplayElement(this.canvas);this._jsPlumb.initialized=true;}var x=this.anchorPoint[0]-this._jsPlumb.widthToUse/2,y=this.anchorPoint[1]-this._jsPlumb.heightToUse/2;_ju.sizeElement(this.canvas,x,y,this._jsPlumb.widthToUse,this._jsPlumb.heightToUse);}};this.paint=function(style,anchor){if(this._jsPlumb!=null){// may have been deleted
if(this._jsPlumb.ready){this.actuallyPaint(style,anchor);}else{root.setTimeout(function(){this.paint(style,anchor);}.bind(this),200);}}};};_ju.extend(_jp.Endpoints.Image,[DOMElementEndpoint,_jp.Endpoints.AbstractEndpoint],{cleanup:function cleanup(force){if(force){this._jsPlumb.deleted=true;if(this.canvas)this.canvas.parentNode.removeChild(this.canvas);this.canvas=null;}}});/*
     * Class: Endpoints.Blank
     * An Endpoint that paints nothing (visible) on the screen.  Supports cssClass and hoverClass parameters like all Endpoints.
     */_jp.Endpoints.Blank=function(params){var _super=_jp.Endpoints.AbstractEndpoint.apply(this,arguments);this.type="Blank";DOMElementEndpoint.apply(this,arguments);this._compute=function(anchorPoint,orientation,endpointStyle,connectorPaintStyle){return[anchorPoint[0],anchorPoint[1],10,0];};var clazz=params.cssClass?" "+params.cssClass:"";this.canvas=_jp.createElement("div",{display:"block",width:"1px",height:"1px",background:"transparent",position:"absolute"},this._jsPlumb.instance.endpointClass+clazz);this._jsPlumb.instance.appendElement(this.canvas);this.paint=function(style,anchor){_ju.sizeElement(this.canvas,this.x,this.y,this.w,this.h);};};_ju.extend(_jp.Endpoints.Blank,[_jp.Endpoints.AbstractEndpoint,DOMElementEndpoint],{cleanup:function cleanup(){if(this.canvas&&this.canvas.parentNode){this.canvas.parentNode.removeChild(this.canvas);}}});/*
     * Class: Endpoints.Triangle
     * A triangular Endpoint.
     *//*
     * Function: Constructor
     *
     * Parameters:
     *
     * 	width	-	width of the triangle's base.  defaults to 55 pixels.
     * 	height	-	height of the triangle from base to apex.  defaults to 55 pixels.
     */_jp.Endpoints.Triangle=function(params){this.type="Triangle";_jp.Endpoints.AbstractEndpoint.apply(this,arguments);params=params||{};params.width=params.width||55;params.height=params.height||55;this.width=params.width;this.height=params.height;this._compute=function(anchorPoint,orientation,endpointStyle,connectorPaintStyle){var width=endpointStyle.width||self.width,height=endpointStyle.height||self.height,x=anchorPoint[0]-width/2,y=anchorPoint[1]-height/2;return[x,y,width,height];};};// ********************************* END OF ENDPOINT TYPES *******************************************************************
// ********************************* OVERLAY DEFINITIONS ***********************************************************************    
var AbstractOverlay=_jp.Overlays.AbstractOverlay=function(params){this.visible=true;this.isAppendedAtTopLevel=true;this.component=params.component;this.loc=params.location==null?0.5:params.location;this.endpointLoc=params.endpointLocation==null?[0.5,0.5]:params.endpointLocation;this.visible=params.visible!==false;};AbstractOverlay.prototype={cleanup:function cleanup(force){if(force){this.component=null;this.canvas=null;this.endpointLoc=null;}},reattach:function reattach(instance){},setVisible:function setVisible(val){this.visible=val;this.component.repaint();},isVisible:function isVisible(){return this.visible;},hide:function hide(){this.setVisible(false);},show:function show(){this.setVisible(true);},incrementLocation:function incrementLocation(amount){this.loc+=amount;this.component.repaint();},setLocation:function setLocation(l){this.loc=l;this.component.repaint();},getLocation:function getLocation(){return this.loc;},updateFrom:function updateFrom(){}};/*
     * Class: Overlays.Arrow
     *
     * An arrow overlay, defined by four points: the head, the two sides of the tail, and a 'foldback' point at some distance along the length
     * of the arrow that lines from each tail point converge into.  The foldback point is defined using a decimal that indicates some fraction
     * of the length of the arrow and has a default value of 0.623.  A foldback point value of 1 would mean that the arrow had a straight line
     * across the tail.
     *//*
     * @constructor
     *
     * @param {Object} params Constructor params.
     * @param {Number} [params.length] Distance in pixels from head to tail baseline. default 20.
     * @param {Number} [params.width] Width in pixels of the tail baseline. default 20.
     * @param {String} [params.fill] Style to use when filling the arrow.  defaults to "black".
     * @param {String} [params.stroke] Style to use when stroking the arrow. defaults to null, which means the arrow is not stroked.
     * @param {Number} [params.stroke-width] Line width to use when stroking the arrow. defaults to 1, but only used if stroke is not null.
     * @param {Number} [params.foldback] Distance (as a decimal from 0 to 1 inclusive) along the length of the arrow marking the point the tail points should fold back to.  defaults to 0.623.
     * @param {Number} [params.location] Distance (as a decimal from 0 to 1 inclusive) marking where the arrow should sit on the connector. defaults to 0.5.
     * @param {NUmber} [params.direction] Indicates the direction the arrow points in. valid values are -1 and 1; 1 is default.
     */_jp.Overlays.Arrow=function(params){this.type="Arrow";AbstractOverlay.apply(this,arguments);this.isAppendedAtTopLevel=false;params=params||{};this.length=params.length||20;this.width=params.width||20;this.id=params.id;var direction=(params.direction||1)<0?-1:1,paintStyle=params.paintStyle||{"stroke-width":1},// how far along the arrow the lines folding back in come to. default is 62.3%.
foldback=params.foldback||0.623;this.computeMaxSize=function(){return self.width*1.5;};this.elementCreated=function(p,component){this.path=p;if(params.events){for(var i in params.events){_jp.on(p,i,params.events[i]);}}};this.draw=function(component,currentConnectionPaintStyle){var hxy,mid,txy,tail,cxy;if(component.pointAlongPathFrom){if(_ju.isString(this.loc)||this.loc>1||this.loc<0){var l=parseInt(this.loc,10),fromLoc=this.loc<0?1:0;hxy=component.pointAlongPathFrom(fromLoc,l,false);mid=component.pointAlongPathFrom(fromLoc,l-direction*this.length/2,false);txy=_jg.pointOnLine(hxy,mid,this.length);}else if(this.loc==1){hxy=component.pointOnPath(this.loc);mid=component.pointAlongPathFrom(this.loc,-this.length);txy=_jg.pointOnLine(hxy,mid,this.length);if(direction==-1){var _=txy;txy=hxy;hxy=_;}}else if(this.loc===0){txy=component.pointOnPath(this.loc);mid=component.pointAlongPathFrom(this.loc,this.length);hxy=_jg.pointOnLine(txy,mid,this.length);if(direction==-1){var __=txy;txy=hxy;hxy=__;}}else{hxy=component.pointAlongPathFrom(this.loc,direction*this.length/2);mid=component.pointOnPath(this.loc);txy=_jg.pointOnLine(hxy,mid,this.length);}tail=_jg.perpendicularLineTo(hxy,txy,this.width);cxy=_jg.pointOnLine(hxy,txy,foldback*this.length);var d={hxy:hxy,tail:tail,cxy:cxy},stroke=paintStyle.stroke||currentConnectionPaintStyle.stroke,fill=paintStyle.fill||currentConnectionPaintStyle.stroke,lineWidth=paintStyle.strokeWidth||currentConnectionPaintStyle.strokeWidth;return{component:component,d:d,"stroke-width":lineWidth,stroke:stroke,fill:fill,minX:Math.min(hxy.x,tail[0].x,tail[1].x),maxX:Math.max(hxy.x,tail[0].x,tail[1].x),minY:Math.min(hxy.y,tail[0].y,tail[1].y),maxY:Math.max(hxy.y,tail[0].y,tail[1].y)};}else return{component:component,minX:0,maxX:0,minY:0,maxY:0};};};_ju.extend(_jp.Overlays.Arrow,AbstractOverlay,{updateFrom:function updateFrom(d){this.length=d.length||this.length;this.width=d.width||this.width;this.direction=d.direction!=null?d.direction:this.direction;this.foldback=d.foldback||this.foldback;}});/*
     * Class: Overlays.PlainArrow
     *
     * A basic arrow.  This is in fact just one instance of the more generic case in which the tail folds back on itself to some
     * point along the length of the arrow: in this case, that foldback point is the full length of the arrow.  so it just does
     * a 'call' to Arrow with foldback set appropriately.
     *//*
     * Function: Constructor
     * See <Overlays.Arrow> for allowed parameters for this overlay.
     */_jp.Overlays.PlainArrow=function(params){params=params||{};var p=_jp.extend(params,{foldback:1});_jp.Overlays.Arrow.call(this,p);this.type="PlainArrow";};_ju.extend(_jp.Overlays.PlainArrow,_jp.Overlays.Arrow);/*
     * Class: Overlays.Diamond
     * 
     * A diamond. Like PlainArrow, this is a concrete case of the more generic case of the tail points converging on some point...it just
     * happens that in this case, that point is greater than the length of the the arrow.
     *
     *      this could probably do with some help with positioning...due to the way it reuses the Arrow paint code, what Arrow thinks is the
     *      center is actually 1/4 of the way along for this guy.  but we don't have any knowledge of pixels at this point, so we're kind of
     *      stuck when it comes to helping out the Arrow class. possibly we could pass in a 'transpose' parameter or something. the value
     *      would be -l/4 in this case - move along one quarter of the total length.
     *//*
     * Function: Constructor
     * See <Overlays.Arrow> for allowed parameters for this overlay.
     */_jp.Overlays.Diamond=function(params){params=params||{};var l=params.length||40,p=_jp.extend(params,{length:l/2,foldback:2});_jp.Overlays.Arrow.call(this,p);this.type="Diamond";};_ju.extend(_jp.Overlays.Diamond,_jp.Overlays.Arrow);var _getDimensions=function _getDimensions(component,forceRefresh){if(component._jsPlumb.cachedDimensions==null||forceRefresh)component._jsPlumb.cachedDimensions=component.getDimensions();return component._jsPlumb.cachedDimensions;};// abstract superclass for overlays that add an element to the DOM.
var AbstractDOMOverlay=function AbstractDOMOverlay(params){_jp.jsPlumbUIComponent.apply(this,arguments);AbstractOverlay.apply(this,arguments);// hand off fired events to associated component.
var _f=this.fire;this.fire=function(){_f.apply(this,arguments);if(this.component)this.component.fire.apply(this.component,arguments);};this.detached=false;this.id=params.id;this._jsPlumb.div=null;this._jsPlumb.initialised=false;this._jsPlumb.component=params.component;this._jsPlumb.cachedDimensions=null;this._jsPlumb.create=params.create;this._jsPlumb.initiallyInvisible=params.visible===false;this.getElement=function(){if(this._jsPlumb.div==null){var div=this._jsPlumb.div=_jp.getElement(this._jsPlumb.create(this._jsPlumb.component));div.style.position="absolute";div.className=this._jsPlumb.instance.overlayClass+" "+(this.cssClass?this.cssClass:params.cssClass?params.cssClass:"");this._jsPlumb.instance.appendElement(div);this._jsPlumb.instance.getId(div);this.canvas=div;// in IE the top left corner is what it placed at the desired location.  This will not
// be fixed. IE8 is not going to be supported for much longer.
var ts="translate(-50%, -50%)";div.style.webkitTransform=ts;div.style.mozTransform=ts;div.style.msTransform=ts;div.style.oTransform=ts;div.style.transform=ts;// write the related component into the created element
div._jsPlumb=this;if(params.visible===false)div.style.display="none";}return this._jsPlumb.div;};this.draw=function(component,currentConnectionPaintStyle,absolutePosition){var td=_getDimensions(this);if(td!=null&&td.length==2){var cxy={x:0,y:0};// absolutePosition would have been set by a call to connection.setAbsoluteOverlayPosition.
if(absolutePosition){cxy={x:absolutePosition[0],y:absolutePosition[1]};}else if(component.pointOnPath){var loc=this.loc,absolute=false;if(_ju.isString(this.loc)||this.loc<0||this.loc>1){loc=parseInt(this.loc,10);absolute=true;}cxy=component.pointOnPath(loc,absolute);// a connection
}else{var locToUse=this.loc.constructor==Array?this.loc:this.endpointLoc;cxy={x:locToUse[0]*component.w,y:locToUse[1]*component.h};}var minx=cxy.x-td[0]/2,miny=cxy.y-td[1]/2;return{component:component,d:{minx:minx,miny:miny,td:td,cxy:cxy},minX:minx,maxX:minx+td[0],minY:miny,maxY:miny+td[1]};}else return{minX:0,maxX:0,minY:0,maxY:0};};};_ju.extend(AbstractDOMOverlay,[_jp.jsPlumbUIComponent,AbstractOverlay],{getDimensions:function getDimensions(){return[1,1];},setVisible:function setVisible(state){if(this._jsPlumb.div){this._jsPlumb.div.style.display=state?"block":"none";// if initially invisible, dimensions are 0,0 and never get updated
if(state&&this._jsPlumb.initiallyInvisible){_getDimensions(this,true);this.component.repaint();this._jsPlumb.initiallyInvisible=false;}}},/*
         * Function: clearCachedDimensions
         * Clears the cached dimensions for the label. As a performance enhancement, label dimensions are
         * cached from 1.3.12 onwards. The cache is cleared when you change the label text, of course, but
         * there are other reasons why the text dimensions might change - if you make a change through CSS, for
         * example, you might change the font size.  in that case you should explicitly call this method.
         */clearCachedDimensions:function clearCachedDimensions(){this._jsPlumb.cachedDimensions=null;},cleanup:function cleanup(force){if(force){if(this._jsPlumb.div!=null){this._jsPlumb.div._jsPlumb=null;this._jsPlumb.instance.removeElement(this._jsPlumb.div);}}else{// if not a forced cleanup, just detach child from parent for now.
if(this._jsPlumb&&this._jsPlumb.div&&this._jsPlumb.div.parentNode)this._jsPlumb.div.parentNode.removeChild(this._jsPlumb.div);this.detached=true;}},reattach:function reattach(instance){if(this._jsPlumb.div!=null)instance.getContainer().appendChild(this._jsPlumb.div);this.detached=false;},computeMaxSize:function computeMaxSize(){var td=_getDimensions(this);return Math.max(td[0],td[1]);},paint:function paint(p,containerExtents){if(!this._jsPlumb.initialised){this.getElement();p.component.appendDisplayElement(this._jsPlumb.div);this._jsPlumb.initialised=true;if(this.detached)this._jsPlumb.div.parentNode.removeChild(this._jsPlumb.div);}this._jsPlumb.div.style.left=p.component.x+p.d.minx+"px";this._jsPlumb.div.style.top=p.component.y+p.d.miny+"px";}});/*
     * Class: Overlays.Custom
     * A Custom overlay. You supply a 'create' function which returns some DOM element, and jsPlumb positions it.
     * The 'create' function is passed a Connection or Endpoint.
     *//*
     * Function: Constructor
     * 
     * Parameters:
     * 	create - function for jsPlumb to call that returns a DOM element.
     * 	location - distance (as a decimal from 0 to 1 inclusive) marking where the label should sit on the connector. defaults to 0.5.
     * 	id - optional id to use for later retrieval of this overlay.
     * 	
     */_jp.Overlays.Custom=function(params){this.type="Custom";AbstractDOMOverlay.apply(this,arguments);};_ju.extend(_jp.Overlays.Custom,AbstractDOMOverlay);_jp.Overlays.GuideLines=function(){var self=this;self.length=50;self.strokeWidth=5;this.type="GuideLines";AbstractOverlay.apply(this,arguments);_jp.jsPlumbUIComponent.apply(this,arguments);this.draw=function(connector,currentConnectionPaintStyle){var head=connector.pointAlongPathFrom(self.loc,self.length/2),mid=connector.pointOnPath(self.loc),tail=_jg.pointOnLine(head,mid,self.length),tailLine=_jg.perpendicularLineTo(head,tail,40),headLine=_jg.perpendicularLineTo(tail,head,20);return{connector:connector,head:head,tail:tail,headLine:headLine,tailLine:tailLine,minX:Math.min(head.x,tail.x,headLine[0].x,headLine[1].x),minY:Math.min(head.y,tail.y,headLine[0].y,headLine[1].y),maxX:Math.max(head.x,tail.x,headLine[0].x,headLine[1].x),maxY:Math.max(head.y,tail.y,headLine[0].y,headLine[1].y)};};// this.cleanup = function() { };  // nothing to clean up for GuideLines
};/*
     * Class: Overlays.Label

     *//*
     * Function: Constructor
     * 
     * Parameters:
     * 	cssClass - optional css class string to append to css class. This string is appended "as-is", so you can of course have multiple classes
     *             defined.  This parameter is preferred to using labelStyle, borderWidth and borderStyle.
     * 	label - the label to paint.  May be a string or a function that returns a string.  Nothing will be painted if your label is null or your
     *         label function returns null.  empty strings _will_ be painted.
     * 	location - distance (as a decimal from 0 to 1 inclusive) marking where the label should sit on the connector. defaults to 0.5.
     * 	id - optional id to use for later retrieval of this overlay.
     * 
     * 	
     */_jp.Overlays.Label=function(params){this.labelStyle=params.labelStyle;var labelWidth=null,labelHeight=null,labelText=null,labelPadding=null;this.cssClass=this.labelStyle!=null?this.labelStyle.cssClass:null;var p=_jp.extend({create:function create(){return _jp.createElement("div");}},params);_jp.Overlays.Custom.call(this,p);this.type="Label";this.label=params.label||"";this.labelText=null;if(this.labelStyle){var el=this.getElement();this.labelStyle.font=this.labelStyle.font||"12px sans-serif";el.style.font=this.labelStyle.font;el.style.color=this.labelStyle.color||"black";if(this.labelStyle.fill)el.style.background=this.labelStyle.fill;if(this.labelStyle.borderWidth>0){var dStyle=this.labelStyle.borderStyle?this.labelStyle.borderStyle:"black";el.style.border=this.labelStyle.borderWidth+"px solid "+dStyle;}if(this.labelStyle.padding)el.style.padding=this.labelStyle.padding;}};_ju.extend(_jp.Overlays.Label,_jp.Overlays.Custom,{cleanup:function cleanup(force){if(force){this.div=null;this.label=null;this.labelText=null;this.cssClass=null;this.labelStyle=null;}},getLabel:function getLabel(){return this.label;},/*
         * Function: setLabel
         * sets the label's, um, label.  you would think i'd call this function
         * 'setText', but you can pass either a Function or a String to this, so
         * it makes more sense as 'setLabel'. This uses innerHTML on the label div, so keep
         * that in mind if you need escaped HTML.
         */setLabel:function setLabel(l){this.label=l;this.labelText=null;this.clearCachedDimensions();this.update();this.component.repaint();},getDimensions:function getDimensions(){this.update();return AbstractDOMOverlay.prototype.getDimensions.apply(this,arguments);},update:function update(){if(typeof this.label=="function"){var lt=this.label(this);this.getElement().innerHTML=lt.replace(/\r\n/g,"<br/>");}else{if(this.labelText==null){this.labelText=this.label;this.getElement().innerHTML=this.labelText.replace(/\r\n/g,"<br/>");}}},updateFrom:function updateFrom(d){if(d.label!=null){this.setLabel(d.label);}}});// ********************************* END OF OVERLAY DEFINITIONS ***********************************************************************
}).call(typeof window!=='undefined'?window:this);/*
 * jsPlumb
 *
 * Title:jsPlumb 2.3.0
 *
 * Provides a way to visually connect elements on an HTML page, using SVG.
 *
 * This file contains the base class for library adapters.
 *
 * Copyright (c) 2010 - 2017 jsPlumb (hello@jsplumbtoolkit.com)
 *
 * http://jsplumbtoolkit.com
 * http://github.com/sporritt/jsplumb
 *
 * Dual licensed under the MIT and GPL2 licenses.
 */;(function(){"use strict";var root=this,_jp=root.jsPlumb;var _getEventManager=function _getEventManager(instance){var e=instance._mottle;if(!e){e=instance._mottle=new root.Mottle();}return e;};_jp.extend(root.jsPlumbInstance.prototype,{getEventManager:function getEventManager(){return _getEventManager(this);},on:function on(el,event,callback){// TODO: here we would like to map the tap event if we know its
// an internal bind to a click. we have to know its internal because only
// then can we be sure that the UP event wont be consumed (tap is a synthesized
// event from a mousedown followed by a mouseup).
//event = { "click":"tap", "dblclick":"dbltap"}[event] || event;
this.getEventManager().on.apply(this,arguments);return this;},off:function off(el,event,callback){this.getEventManager().off.apply(this,arguments);return this;}});}).call(typeof window!=='undefined'?window:this);/*
 * jsPlumb
 *
 * Title:jsPlumb 2.3.0
 *
 * Provides a way to visually connect elements on an HTML page, using SVG.
 *
 * This file contains the code for working with Groups.
 *
 * Copyright (c) 2010 - 2017 jsPlumb (hello@jsplumbtoolkit.com)
 *
 * http://jsplumbtoolkit.com
 * http://github.com/sporritt/jsplumb
 *
 * Dual licensed under the MIT and GPL2 licenses.
 */;(function(){"use strict";var root=this,_ju=root.jsPlumbUtil,_jpi=root.jsPlumbInstance;var GROUP_COLLAPSED_CLASS="jtk-group-collapsed";var GROUP_EXPANDED_CLASS="jtk-group-expanded";var GROUP_CONTAINER_SELECTOR="[jtk-group-content]";var ELEMENT_DRAGGABLE_EVENT="elementDraggable";var STOP="stop";var REVERT="revert";var GROUP_MANAGER="_groupManager";var GROUP="_jsPlumbGroup";var GROUP_DRAG_SCOPE="_jsPlumbGroupDrag";var EVT_CHILD_ADDED="group:addMember";var EVT_CHILD_REMOVED="group:removeMember";var EVT_GROUP_ADDED="group:add";var EVT_GROUP_REMOVED="group:remove";var EVT_EXPAND="group:expand";var EVT_COLLAPSE="group:collapse";var EVT_GROUP_DRAG_STOP="groupDragStop";var EVT_CONNECTION_MOVED="connectionMoved";var EVT_INTERNAL_CONNECTION_DETACHED="internal.connectionDetached";var CMD_REMOVE_ALL="removeAll";var CMD_ORPHAN_ALL="orphanAll";var CMD_SHOW="show";var CMD_HIDE="hide";var GroupManager=function GroupManager(_jsPlumb){var _managedGroups={},_connectionSourceMap={},_connectionTargetMap={},self=this;_jsPlumb.bind("connection",function(p){if(p.source[GROUP]!=null&&p.target[GROUP]!=null&&p.source[GROUP]===p.target[GROUP]){_connectionSourceMap[p.connection.id]=p.source[GROUP];_connectionTargetMap[p.connection.id]=p.source[GROUP];}else{if(p.source[GROUP]!=null){_ju.suggest(p.source[GROUP].connections.source,p.connection);_connectionSourceMap[p.connection.id]=p.source[GROUP];}if(p.target[GROUP]!=null){_ju.suggest(p.target[GROUP].connections.target,p.connection);_connectionTargetMap[p.connection.id]=p.target[GROUP];}}});function _cleanupDetachedConnection(conn){delete conn.proxies;var group=_connectionSourceMap[conn.id],f;if(group!=null){f=function f(c){return c.id===conn.id;};_ju.removeWithFunction(group.connections.source,f);_ju.removeWithFunction(group.connections.target,f);delete _connectionSourceMap[conn.id];}group=_connectionTargetMap[conn.id];if(group!=null){f=function f(c){return c.id===conn.id;};_ju.removeWithFunction(group.connections.source,f);_ju.removeWithFunction(group.connections.target,f);delete _connectionTargetMap[conn.id];}}_jsPlumb.bind(EVT_INTERNAL_CONNECTION_DETACHED,function(p){_cleanupDetachedConnection(p.connection);});_jsPlumb.bind(EVT_CONNECTION_MOVED,function(p){var connMap=p.index===0?_connectionSourceMap:_connectionTargetMap;var group=connMap[p.connection.id];if(group){var list=group.connections[p.index===0?"source":"target"];var idx=list.indexOf(p.connection);if(idx!=-1){list.splice(idx,1);}}});this.addGroup=function(group){_jsPlumb.addClass(group.getEl(),GROUP_EXPANDED_CLASS);_managedGroups[group.id]=group;group.manager=this;_updateConnectionsForGroup(group);_jsPlumb.fire(EVT_GROUP_ADDED,{group:group});};this.addToGroup=function(group,el,doNotFireEvent){group=this.getGroup(group);if(group){//group.add(el, doNotFireEvent);
var groupEl=group.getEl();if(el._isJsPlumbGroup)return;var currentGroup=el._jsPlumbGroup;// if already a member of this group, do nothing
if(currentGroup!==group){var elpos=_jsPlumb.getOffset(el,true);var cpos=group.collapsed?_jsPlumb.getOffset(groupEl,true):_jsPlumb.getOffset(group.getDragArea(),true);// otherwise, transfer to this group.
if(currentGroup!=null){currentGroup.remove(el,doNotFireEvent);self.updateConnectionsForGroup(currentGroup);}group.add(el,doNotFireEvent);var handleDroppedConnections=function handleDroppedConnections(list,index){var oidx=index==0?1:0;list.each(function(c){c.setVisible(false);if(c.endpoints[oidx].element._jsPlumbGroup===group){c.endpoints[oidx].setVisible(false);self.expandConnection(c,oidx,group);}else{c.endpoints[index].setVisible(false);self.collapseConnection(c,index,group);}});};if(group.collapsed){handleDroppedConnections(_jsPlumb.select({source:el}),0);handleDroppedConnections(_jsPlumb.select({target:el}),1);}var elId=_jsPlumb.getId(el);_jsPlumb.dragManager.setParent(el,elId,groupEl,_jsPlumb.getId(groupEl),elpos);var newPosition={left:elpos.left-cpos.left,top:elpos.top-cpos.top};_jsPlumb.setPosition(el,newPosition);_jsPlumb.dragManager.revalidateParent(el,elId,elpos);self.updateConnectionsForGroup(group);_jsPlumb.revalidate(elId);setTimeout(function(){_jsPlumb.fire(EVT_CHILD_ADDED,{group:group,el:el});},0);}}};this.removeFromGroup=function(group,el,doNotFireEvent){group=this.getGroup(group);if(group){group.remove(el,null,doNotFireEvent);}};this.getGroup=function(groupId){var group=groupId;if(_ju.isString(groupId)){group=_managedGroups[groupId];if(group==null)throw new TypeError("No such group ["+groupId+"]");}return group;};this.getGroups=function(){var o=[];for(var g in _managedGroups){o.push(_managedGroups[g]);}return o;};this.removeGroup=function(group,deleteMembers,manipulateDOM,doNotFireEvent){group=this.getGroup(group);this.expandGroup(group,true);// this reinstates any original connections and removes all proxies, but does not fire an event.
group[deleteMembers?CMD_REMOVE_ALL:CMD_ORPHAN_ALL](manipulateDOM,doNotFireEvent);_jsPlumb.remove(group.getEl());delete _managedGroups[group.id];delete _jsPlumb._groups[group.id];_jsPlumb.fire(EVT_GROUP_REMOVED,{group:group});};this.removeAllGroups=function(deleteMembers,manipulateDOM,doNotFireEvent){for(var g in _managedGroups){this.removeGroup(_managedGroups[g],deleteMembers,manipulateDOM,doNotFireEvent);}};function _setVisible(group,state){var m=group.getMembers();for(var i=0;i<m.length;i++){_jsPlumb[state?CMD_SHOW:CMD_HIDE](m[i],true);}}var _collapseConnection=this.collapseConnection=function(c,index,group){var proxyEp,groupEl=group.getEl(),groupElId=_jsPlumb.getId(groupEl),originalElementId=c.endpoints[index].elementId;var otherEl=c.endpoints[index===0?1:0].element;if(otherEl[GROUP]&&!otherEl[GROUP].shouldProxy()&&otherEl[GROUP].collapsed){return;}c.proxies=c.proxies||[];if(c.proxies[index]){proxyEp=c.proxies[index].ep;}else{proxyEp=_jsPlumb.addEndpoint(groupEl,{endpoint:group.getEndpoint(c,index),anchor:group.getAnchor(c,index),parameters:{isProxyEndpoint:true}});}proxyEp.setDeleteOnEmpty(true);// for this index, stash proxy info: the new EP, the original EP.
c.proxies[index]={ep:proxyEp,originalEp:c.endpoints[index]};// and advise the anchor manager
if(index===0){// TODO why are there two differently named methods? Why is there not one method that says "some end of this
// connection changed (you give the index), and here's the new element and element id."
_jsPlumb.anchorManager.sourceChanged(originalElementId,groupElId,c,groupEl);}else{_jsPlumb.anchorManager.updateOtherEndpoint(c.endpoints[0].elementId,originalElementId,groupElId,c);c.target=groupEl;c.targetId=groupElId;}// detach the original EP from the connection.
c.proxies[index].originalEp.detachFromConnection(c,null,true);// set the proxy as the new ep
proxyEp.connections=[c];c.endpoints[index]=proxyEp;c.setVisible(true);};this.collapseGroup=function(group){group=this.getGroup(group);if(group==null||group.collapsed)return;var groupEl=group.getEl();// todo remove old proxy endpoints first, just in case?
//group.proxies.length = 0;
// hide all connections
_setVisible(group,false);if(group.shouldProxy()){// collapses all connections in a group.
var _collapseSet=function _collapseSet(conns,index){for(var i=0;i<conns.length;i++){var c=conns[i];_collapseConnection(c,index,group);}};// setup proxies for sources and targets
_collapseSet(group.connections.source,0);_collapseSet(group.connections.target,1);}group.collapsed=true;_jsPlumb.removeClass(groupEl,GROUP_EXPANDED_CLASS);_jsPlumb.addClass(groupEl,GROUP_COLLAPSED_CLASS);_jsPlumb.revalidate(groupEl);_jsPlumb.fire(EVT_COLLAPSE,{group:group});};var _expandConnection=this.expandConnection=function(c,index,group){// if no proxies or none for this end of the connection, abort.
if(c.proxies==null||c.proxies[index]==null)return;var groupElId=_jsPlumb.getId(group.getEl()),originalElement=c.proxies[index].originalEp.element,originalElementId=c.proxies[index].originalEp.elementId;c.endpoints[index]=c.proxies[index].originalEp;// and advise the anchor manager
if(index===0){// TODO why are there two differently named methods? Why is there not one method that says "some end of this
// connection changed (you give the index), and here's the new element and element id."
_jsPlumb.anchorManager.sourceChanged(groupElId,originalElementId,c,originalElement);}else{_jsPlumb.anchorManager.updateOtherEndpoint(c.endpoints[0].elementId,groupElId,originalElementId,c);c.target=originalElement;c.targetId=originalElementId;}// detach the proxy EP from the connection (which will cause it to be removed as we no longer need it)
c.proxies[index].ep.detachFromConnection(c,null);c.proxies[index].originalEp.addConnection(c);// cleanup
delete c.proxies[index];};this.expandGroup=function(group,doNotFireEvent){group=this.getGroup(group);if(group==null||!group.collapsed)return;var groupEl=group.getEl();_setVisible(group,true);if(group.shouldProxy()){// collapses all connections in a group.
var _expandSet=function _expandSet(conns,index){for(var i=0;i<conns.length;i++){var c=conns[i];_expandConnection(c,index,group);}};// setup proxies for sources and targets
_expandSet(group.connections.source,0);_expandSet(group.connections.target,1);}group.collapsed=false;_jsPlumb.addClass(groupEl,GROUP_EXPANDED_CLASS);_jsPlumb.removeClass(groupEl,GROUP_COLLAPSED_CLASS);_jsPlumb.revalidate(groupEl);this.repaintGroup(group);if(!doNotFireEvent){_jsPlumb.fire(EVT_EXPAND,{group:group});}};this.repaintGroup=function(group){group=this.getGroup(group);var m=group.getMembers();for(var i=0;i<m.length;i++){_jsPlumb.revalidate(m[i]);}};// TODO refactor this with the code that responds to `connection` events.
function _updateConnectionsForGroup(group){var members=group.getMembers();var c1=_jsPlumb.getConnections({source:members},true);var c2=_jsPlumb.getConnections({target:members},true);var processed={};group.connections.source.length=0;group.connections.target.length=0;var oneSet=function oneSet(c){for(var i=0;i<c.length;i++){if(processed[c[i].id])continue;processed[c[i].id]=true;if(c[i].source._jsPlumbGroup===group){if(c[i].target._jsPlumbGroup!==group){group.connections.source.push(c[i]);}_connectionSourceMap[c[i].id]=group;}else if(c[i].target._jsPlumbGroup===group){group.connections.target.push(c[i]);_connectionTargetMap[c[i].id]=group;}}};oneSet(c1);oneSet(c2);}this.updateConnectionsForGroup=_updateConnectionsForGroup;this.refreshAllGroups=function(){for(var g in _managedGroups){_updateConnectionsForGroup(_managedGroups[g]);_jsPlumb.dragManager.updateOffsets(_jsPlumb.getId(_managedGroups[g].getEl()));}};};/**
     *
     * @param {jsPlumbInstance} _jsPlumb Associated jsPlumb instance.
     * @param {Object} params
     * @param {Element} params.el The DOM element representing the Group.
     * @param {String} [params.id] Optional ID for the Group. A UUID will be assigned as the Group's ID if you do not provide one.
     * @param {Boolean} [params.constrain=false] If true, child elements will not be able to be dragged outside of the Group container.
     * @param {Boolean} [params.revert=true] By default, child elements revert to the container if dragged outside. You can change this by setting `revert:false`. This behaviour is also overridden if you set `orphan` or `prune`.
     * @param {Boolean} [params.orphan=false] If true, child elements dropped outside of the Group container will be removed from the Group (but not from the DOM).
     * @param {Boolean} [params.prune=false] If true, child elements dropped outside of the Group container will be removed from the Group and also from the DOM.
     * @param {Boolean} [params.dropOverride=false] If true, a child element that has been dropped onto some other Group will not be subject to the controls imposed by `prune`, `revert` or `orphan`.
     * @constructor
     */var Group=function Group(_jsPlumb,params){var self=this;var el=params.el;this.getEl=function(){return el;};this.id=params.id||_ju.uuid();el._isJsPlumbGroup=true;var getDragArea=this.getDragArea=function(){var da=_jsPlumb.getSelector(el,GROUP_CONTAINER_SELECTOR);return da&&da.length>0?da[0]:el;};var ghost=params.ghost===true;var constrain=ghost||params.constrain===true;var revert=params.revert!==false;var orphan=params.orphan===true;var prune=params.prune===true;var dropOverride=params.dropOverride===true;var proxied=params.proxied!==false;var elements=[];this.connections={source:[],target:[],internal:[]};// this function, and getEndpoint below, are stubs for a future setup in which we can choose endpoint
// and anchor based upon the connection and the index (source/target) of the endpoint to be proxied.
this.getAnchor=function(conn,endpointIndex){return params.anchor||"Continuous";};this.getEndpoint=function(conn,endpointIndex){return params.endpoint||["Dot",{radius:10}];};this.collapsed=false;if(params.draggable!==false){var opts={stop:function stop(params){_jsPlumb.fire(EVT_GROUP_DRAG_STOP,jsPlumb.extend(params,{group:self}));},scope:GROUP_DRAG_SCOPE};if(params.dragOptions){root.jsPlumb.extend(opts,params.dragOptions);}_jsPlumb.draggable(params.el,opts);}if(params.droppable!==false){_jsPlumb.droppable(params.el,{drop:function drop(p){var el=p.drag.el;if(el._isJsPlumbGroup)return;var currentGroup=el._jsPlumbGroup;if(currentGroup!==self){if(currentGroup!=null){if(currentGroup.overrideDrop(el,self)){return;}}_jsPlumb.getGroupManager().addToGroup(self,el,false);}}});}var _each=function _each(_el,fn){var els=_el.nodeType==null?_el:[_el];for(var i=0;i<els.length;i++){fn(els[i]);}};this.overrideDrop=function(_el,targetGroup){return dropOverride&&(revert||prune||orphan);};this.add=function(_el,doNotFireEvent){var dragArea=getDragArea();_each(_el,function(__el){if(__el._jsPlumbGroup!=null){if(__el._jsPlumbGroup===self){return;}else{__el._jsPlumbGroup.remove(__el,true,doNotFireEvent,false);}}__el._jsPlumbGroup=self;elements.push(__el);// test if draggable and add handlers if so.
if(_jsPlumb.isAlreadyDraggable(__el)){_bindDragHandlers(__el);}if(__el.parentNode!=dragArea){dragArea.appendChild(__el);}if(!doNotFireEvent){_jsPlumb.fire(EVT_CHILD_ADDED,{group:self,el:__el});}});_jsPlumb.getGroupManager().updateConnectionsForGroup(self);};this.remove=function(el,manipulateDOM,doNotFireEvent,doNotUpdateConnections){_each(el,function(__el){delete __el._jsPlumbGroup;_ju.removeWithFunction(elements,function(e){return e===__el;});if(manipulateDOM){try{self.getDragArea().removeChild(__el);}catch(e){jsPlumbUtil.log("Could not remove element from Group "+e);}}_unbindDragHandlers(__el);if(!doNotFireEvent){_jsPlumb.fire(EVT_CHILD_REMOVED,{group:self,el:__el});}});if(!doNotUpdateConnections){_jsPlumb.getGroupManager().updateConnectionsForGroup(self);}};this.removeAll=function(manipulateDOM,doNotFireEvent){for(var i=0,l=elements.length;i<l;i++){self.remove(elements[0],manipulateDOM,doNotFireEvent,true);}elements.length=0;_jsPlumb.getGroupManager().updateConnectionsForGroup(self);};this.orphanAll=function(){for(var i=0;i<elements.length;i++){_orphan(elements[i]);}elements.length=0;};this.getMembers=function(){return elements;};el[GROUP]=this;_jsPlumb.bind(ELEMENT_DRAGGABLE_EVENT,function(dragParams){// if its for the current group,
if(dragParams.el._jsPlumbGroup==this){_bindDragHandlers(dragParams.el);}}.bind(this));function _findParent(_el){return _el.offsetParent;}function _isInsideParent(_el,pos){var p=_findParent(_el),s=_jsPlumb.getSize(p),ss=_jsPlumb.getSize(_el),leftEdge=pos[0],rightEdge=leftEdge+ss[0],topEdge=pos[1],bottomEdge=topEdge+ss[1];return rightEdge>0&&leftEdge<s[0]&&bottomEdge>0&&topEdge<s[1];}//
// orphaning an element means taking it out of the group and adding it to the main jsplumb container.
//
function _orphan(_el){var id=_jsPlumb.getId(_el);var pos=_jsPlumb.getOffset(_el);_el.parentNode.removeChild(_el);_jsPlumb.getContainer().appendChild(_el);_jsPlumb.setPosition(_el,pos);delete _el._jsPlumbGroup;_unbindDragHandlers(_el);_jsPlumb.dragManager.clearParent(_el,id);}//
// remove an element from the group, then either prune it from the jsplumb instance, or just orphan it.
//
function _pruneOrOrphan(p){if(!_isInsideParent(p.el,p.pos)){var group=p.el._jsPlumbGroup;if(prune){_jsPlumb.remove(p.el);}else{_orphan(p.el);}group.remove(p.el);}}//
// redraws the element
//
function _revalidate(_el){var id=_jsPlumb.getId(_el);_jsPlumb.revalidate(_el);_jsPlumb.dragManager.revalidateParent(_el,id);}//
// unbind the group specific drag/revert handlers.
//
function _unbindDragHandlers(_el){if(!_el._katavorioDrag)return;if(prune||orphan){_el._katavorioDrag.off(STOP,_pruneOrOrphan);}if(!prune&&!orphan&&revert){_el._katavorioDrag.off(REVERT,_revalidate);_el._katavorioDrag.setRevert(null);}}function _bindDragHandlers(_el){if(!_el._katavorioDrag)return;if(prune||orphan){_el._katavorioDrag.on(STOP,_pruneOrOrphan);}if(constrain){_el._katavorioDrag.setConstrain(true);}if(ghost){_el._katavorioDrag.setUseGhostProxy(true);}if(!prune&&!orphan&&revert){_el._katavorioDrag.on(REVERT,_revalidate);_el._katavorioDrag.setRevert(function(__el,pos){return!_isInsideParent(__el,pos);});}}this.shouldProxy=function(){return proxied;};_jsPlumb.getGroupManager().addGroup(this);};/**
     * Adds a group to the jsPlumb instance.
     * @method addGroup
     * @param {Object} params
     * @return {Group} The newly created Group.
     */_jpi.prototype.addGroup=function(params){var j=this;j._groups=j._groups||{};if(j._groups[params.id]!=null){throw new TypeError("cannot create Group ["+params.id+"]; a Group with that ID exists");}if(params.el[GROUP]!=null){throw new TypeError("cannot create Group ["+params.id+"]; the given element is already a Group");}var group=new Group(j,params);j._groups[group.id]=group;return group;};/**
     * Add an element to a group.
     * @method addToGroup
     * @param {String} group Group, or ID of the group, to add the element to.
     * @param {Element} el Element to add to the group.
     */_jpi.prototype.addToGroup=function(group,el,doNotFireEvent){var _one=function(_el){var id=this.getId(_el);this.manage(id,_el);this.getGroupManager().addToGroup(group,_el,doNotFireEvent);}.bind(this);if(Array.isArray(el)){for(var i=0;i<el.length;i++){_one(el[i]);}}else{_one(el);}};/**
     * Remove an element from a group.
     * @method removeFromGroup
     * @param {String} group Group, or ID of the group, to remove the element from.
     * @param {Element} el Element to add to the group.
     */_jpi.prototype.removeFromGroup=function(group,el,doNotFireEvent){this.getGroupManager().removeFromGroup(group,el,doNotFireEvent);};/**
     * Remove a group, and optionally remove its members from the jsPlumb instance.
     * @method removeGroup
     * @param {String|Group} group Group to delete, or ID of Group to delete.
     * @param {Boolean} [deleteMembers=false] If true, group members will be removed along with the group. Otherwise they will
     * just be 'orphaned' (returned to the main container).
     */_jpi.prototype.removeGroup=function(group,deleteMembers,manipulateDOM,doNotFireEvent){this.getGroupManager().removeGroup(group,deleteMembers,manipulateDOM,doNotFireEvent);};/**
     * Remove all groups, and optionally remove their members from the jsPlumb instance.
     * @method removeAllGroup
     * @param {Boolean} [deleteMembers=false] If true, group members will be removed along with the groups. Otherwise they will
     * just be 'orphaned' (returned to the main container).
     */_jpi.prototype.removeAllGroups=function(deleteMembers,manipulateDOM,doNotFireEvent){this.getGroupManager().removeAllGroups(deleteMembers,manipulateDOM,doNotFireEvent);};/**
     * Get a Group
     * @method getGroup
     * @param {String} groupId ID of the group to get
     * @return {Group} Group with the given ID, null if not found.
     */_jpi.prototype.getGroup=function(groupId){return this.getGroupManager().getGroup(groupId);};/**
     * Gets all the Groups managed by the jsPlumb instance.
     * @returns {Group[]} List of Groups. Empty if none.
     */_jpi.prototype.getGroups=function(){return this.getGroupManager().getGroups();};/**
     * Expands a group element. jsPlumb doesn't do "everything" for you here, because what it means to expand a Group
     * will vary from application to application. jsPlumb does these things:
     *
     * - Hides any connections that are internal to the group (connections between members, and connections from member of
     * the group to the group itself)
     * - Proxies all connections for which the source or target is a member of the group.
     * - Hides the proxied connections.
     * - Adds the jtk-group-expanded class to the group's element
     * - Removes the jtk-group-collapsed class from the group's element.
     *
     * @method expandGroup
     * @param {String|Group} group Group to expand, or ID of Group to expand.
     */_jpi.prototype.expandGroup=function(group){this.getGroupManager().expandGroup(group);};/**
     * Collapses a group element. jsPlumb doesn't do "everything" for you here, because what it means to collapse a Group
     * will vary from application to application. jsPlumb does these things:
     *
     * - Shows any connections that are internal to the group (connections between members, and connections from member of
     * the group to the group itself)
     * - Removes proxies for all connections for which the source or target is a member of the group.
     * - Shows the previously proxied connections.
     * - Adds the jtk-group-collapsed class to the group's element
     * - Removes the jtk-group-expanded class from the group's element.
     *
     * @method expandGroup
     * @param {String|Group} group Group to expand, or ID of Group to expand.
     */_jpi.prototype.collapseGroup=function(groupId){this.getGroupManager().collapseGroup(groupId);};_jpi.prototype.repaintGroup=function(group){this.getGroupManager().repaintGroup(group);};/**
     * Collapses or expands a group element depending on its current state. See notes in the collapseGroup and expandGroup method.
     *
     * @method toggleGroup
     * @param {String|Group} group Group to expand/collapse, or ID of Group to expand/collapse.
     */_jpi.prototype.toggleGroup=function(group){group=this.getGroupManager().getGroup(group);if(group!=null){this.getGroupManager()[group.collapsed?"expandGroup":"collapseGroup"](group);}};//
// lazy init a group manager for the given jsplumb instance.
//
_jpi.prototype.getGroupManager=function(){var mgr=this[GROUP_MANAGER];if(mgr==null){mgr=this[GROUP_MANAGER]=new GroupManager(this);}return mgr;};_jpi.prototype.removeGroupManager=function(){delete this[GROUP_MANAGER];};/**
     * Gets the Group that the given element belongs to, null if none.
     * @method getGroupFor
     * @param {String|Element} el Element, or element ID.
     * @returns {Group} A Group, if found, or null.
     */_jpi.prototype.getGroupFor=function(el){el=this.getElement(el);if(el){return el[GROUP];}};}).call(typeof window!=='undefined'?window:this);/*
 * jsPlumb
 * 
 * Title:jsPlumb 2.3.0
 * 
 * Provides a way to visually connect elements on an HTML page, using SVG.
 * 
 * This file contains the 'flowchart' connectors, consisting of vertical and horizontal line segments.
 *
 * Copyright (c) 2010 - 2017 jsPlumb (hello@jsplumbtoolkit.com)
 * 
 * http://jsplumbtoolkit.com
 * http://github.com/sporritt/jsplumb
 * 
 * Dual licensed under the MIT and GPL2 licenses.
 */;(function(){"use strict";var root=this,_jp=root.jsPlumb,_ju=root.jsPlumbUtil;var Flowchart=function Flowchart(params){this.type="Flowchart";params=params||{};params.stub=params.stub==null?30:params.stub;var segments,_super=_jp.Connectors.AbstractConnector.apply(this,arguments),midpoint=params.midpoint==null?0.5:params.midpoint,alwaysRespectStubs=params.alwaysRespectStubs===true,lastx=null,lasty=null,lastOrientation,cornerRadius=params.cornerRadius!=null?params.cornerRadius:0,// TODO now common between this and AbstractBezierEditor; refactor into superclass?
loopbackRadius=params.loopbackRadius||25,isLoopbackCurrently=false,sgn=function sgn(n){return n<0?-1:n===0?0:1;},/**
             * helper method to add a segment.
             */addSegment=function addSegment(segments,x,y,paintInfo){if(lastx==x&&lasty==y)return;var lx=lastx==null?paintInfo.sx:lastx,ly=lasty==null?paintInfo.sy:lasty,o=lx==x?"v":"h",sgnx=sgn(x-lx),sgny=sgn(y-ly);lastx=x;lasty=y;segments.push([lx,ly,x,y,o,sgnx,sgny]);},segLength=function segLength(s){return Math.sqrt(Math.pow(s[0]-s[2],2)+Math.pow(s[1]-s[3],2));},_cloneArray=function _cloneArray(a){var _a=[];_a.push.apply(_a,a);return _a;},writeSegments=function writeSegments(conn,segments,paintInfo){var current=null,next;for(var i=0;i<segments.length-1;i++){current=current||_cloneArray(segments[i]);next=_cloneArray(segments[i+1]);if(cornerRadius>0&&current[4]!=next[4]){var radiusToUse=Math.min(cornerRadius,segLength(current),segLength(next));// right angle. adjust current segment's end point, and next segment's start point.
current[2]-=current[5]*radiusToUse;current[3]-=current[6]*radiusToUse;next[0]+=next[5]*radiusToUse;next[1]+=next[6]*radiusToUse;var ac=current[6]==next[5]&&next[5]==1||current[6]==next[5]&&next[5]===0&&current[5]!=next[6]||current[6]==next[5]&&next[5]==-1,sgny=next[1]>current[3]?1:-1,sgnx=next[0]>current[2]?1:-1,sgnEqual=sgny==sgnx,cx=sgnEqual&&ac||!sgnEqual&&!ac?next[0]:current[2],cy=sgnEqual&&ac||!sgnEqual&&!ac?current[3]:next[1];_super.addSegment(conn,"Straight",{x1:current[0],y1:current[1],x2:current[2],y2:current[3]});_super.addSegment(conn,"Arc",{r:radiusToUse,x1:current[2],y1:current[3],x2:next[0],y2:next[1],cx:cx,cy:cy,ac:ac});}else{// dx + dy are used to adjust for line width.
var dx=current[2]==current[0]?0:current[2]>current[0]?paintInfo.lw/2:-(paintInfo.lw/2),dy=current[3]==current[1]?0:current[3]>current[1]?paintInfo.lw/2:-(paintInfo.lw/2);_super.addSegment(conn,"Straight",{x1:current[0]-dx,y1:current[1]-dy,x2:current[2]+dx,y2:current[3]+dy});}current=next;}if(next!=null){// last segment
_super.addSegment(conn,"Straight",{x1:next[0],y1:next[1],x2:next[2],y2:next[3]});}};this._compute=function(paintInfo,params){segments=[];lastx=null;lasty=null;lastOrientation=null;var commonStubCalculator=function commonStubCalculator(){return[paintInfo.startStubX,paintInfo.startStubY,paintInfo.endStubX,paintInfo.endStubY];},stubCalculators={perpendicular:commonStubCalculator,orthogonal:commonStubCalculator,opposite:function opposite(axis){var pi=paintInfo,idx=axis=="x"?0:1,areInProximity={"x":function x(){return pi.so[idx]==1&&(pi.startStubX>pi.endStubX&&pi.tx>pi.startStubX||pi.sx>pi.endStubX&&pi.tx>pi.sx)||pi.so[idx]==-1&&(pi.startStubX<pi.endStubX&&pi.tx<pi.startStubX||pi.sx<pi.endStubX&&pi.tx<pi.sx);},"y":function y(){return pi.so[idx]==1&&(pi.startStubY>pi.endStubY&&pi.ty>pi.startStubY||pi.sy>pi.endStubY&&pi.ty>pi.sy)||pi.so[idx]==-1&&(pi.startStubY<pi.endStubY&&pi.ty<pi.startStubY||pi.sy<pi.endStubY&&pi.ty<pi.sy);}};if(!alwaysRespectStubs&&areInProximity[axis]()){return{"x":[(paintInfo.sx+paintInfo.tx)/2,paintInfo.startStubY,(paintInfo.sx+paintInfo.tx)/2,paintInfo.endStubY],"y":[paintInfo.startStubX,(paintInfo.sy+paintInfo.ty)/2,paintInfo.endStubX,(paintInfo.sy+paintInfo.ty)/2]}[axis];}else{return[paintInfo.startStubX,paintInfo.startStubY,paintInfo.endStubX,paintInfo.endStubY];}}};// calculate Stubs.
var stubs=stubCalculators[paintInfo.anchorOrientation](paintInfo.sourceAxis),idx=paintInfo.sourceAxis=="x"?0:1,oidx=paintInfo.sourceAxis=="x"?1:0,ss=stubs[idx],oss=stubs[oidx],es=stubs[idx+2],oes=stubs[oidx+2];// add the start stub segment. use stubs for loopback as it will look better, with the loop spaced
// away from the element.
addSegment(segments,stubs[0],stubs[1],paintInfo);// if its a loopback and we should treat it differently.
if(false){// we use loopbackRadius here, as statemachine connectors do.
// so we go radius to the left from stubs[0], then upwards by 2*radius, to the right by 2*radius,
// down by 2*radius, left by radius.
addSegment(segments,stubs[0]-loopbackRadius,stubs[1],paintInfo);addSegment(segments,stubs[0]-loopbackRadius,stubs[1]-2*loopbackRadius,paintInfo);addSegment(segments,stubs[0]+loopbackRadius,stubs[1]-2*loopbackRadius,paintInfo);addSegment(segments,stubs[0]+loopbackRadius,stubs[1],paintInfo);addSegment(segments,stubs[0],stubs[1],paintInfo);}else{var midx=paintInfo.startStubX+(paintInfo.endStubX-paintInfo.startStubX)*midpoint,midy=paintInfo.startStubY+(paintInfo.endStubY-paintInfo.startStubY)*midpoint;var orientations={x:[0,1],y:[1,0]},lineCalculators={perpendicular:function perpendicular(axis){var pi=paintInfo,sis={x:[[[1,2,3,4],null,[2,1,4,3]],null,[[4,3,2,1],null,[3,4,1,2]]],y:[[[3,2,1,4],null,[2,3,4,1]],null,[[4,1,2,3],null,[1,4,3,2]]]},stubs={x:[[pi.startStubX,pi.endStubX],null,[pi.endStubX,pi.startStubX]],y:[[pi.startStubY,pi.endStubY],null,[pi.endStubY,pi.startStubY]]},midLines={x:[[midx,pi.startStubY],[midx,pi.endStubY]],y:[[pi.startStubX,midy],[pi.endStubX,midy]]},linesToEnd={x:[[pi.endStubX,pi.startStubY]],y:[[pi.startStubX,pi.endStubY]]},startToEnd={x:[[pi.startStubX,pi.endStubY],[pi.endStubX,pi.endStubY]],y:[[pi.endStubX,pi.startStubY],[pi.endStubX,pi.endStubY]]},startToMidToEnd={x:[[pi.startStubX,midy],[pi.endStubX,midy],[pi.endStubX,pi.endStubY]],y:[[midx,pi.startStubY],[midx,pi.endStubY],[pi.endStubX,pi.endStubY]]},otherStubs={x:[pi.startStubY,pi.endStubY],y:[pi.startStubX,pi.endStubX]},soIdx=orientations[axis][0],toIdx=orientations[axis][1],_so=pi.so[soIdx]+1,_to=pi.to[toIdx]+1,otherFlipped=pi.to[toIdx]==-1&&otherStubs[axis][1]<otherStubs[axis][0]||pi.to[toIdx]==1&&otherStubs[axis][1]>otherStubs[axis][0],stub1=stubs[axis][_so][0],stub2=stubs[axis][_so][1],segmentIndexes=sis[axis][_so][_to];if(pi.segment==segmentIndexes[3]||pi.segment==segmentIndexes[2]&&otherFlipped){return midLines[axis];}else if(pi.segment==segmentIndexes[2]&&stub2<stub1){return linesToEnd[axis];}else if(pi.segment==segmentIndexes[2]&&stub2>=stub1||pi.segment==segmentIndexes[1]&&!otherFlipped){return startToMidToEnd[axis];}else if(pi.segment==segmentIndexes[0]||pi.segment==segmentIndexes[1]&&otherFlipped){return startToEnd[axis];}},orthogonal:function orthogonal(axis,startStub,otherStartStub,endStub,otherEndStub){var pi=paintInfo,extent={"x":pi.so[0]==-1?Math.min(startStub,endStub):Math.max(startStub,endStub),"y":pi.so[1]==-1?Math.min(startStub,endStub):Math.max(startStub,endStub)}[axis];return{"x":[[extent,otherStartStub],[extent,otherEndStub],[endStub,otherEndStub]],"y":[[otherStartStub,extent],[otherEndStub,extent],[otherEndStub,endStub]]}[axis];},opposite:function opposite(axis,ss,oss,es){var pi=paintInfo,otherAxis={"x":"y","y":"x"}[axis],dim={"x":"height","y":"width"}[axis],comparator=pi["is"+axis.toUpperCase()+"GreaterThanStubTimes2"];if(params.sourceEndpoint.elementId==params.targetEndpoint.elementId){var _val=oss+(1-params.sourceEndpoint.anchor[otherAxis])*params.sourceInfo[dim]+_super.maxStub;return{"x":[[ss,_val],[es,_val]],"y":[[_val,ss],[_val,es]]}[axis];}else if(!comparator||pi.so[idx]==1&&ss>es||pi.so[idx]==-1&&ss<es){return{"x":[[ss,midy],[es,midy]],"y":[[midx,ss],[midx,es]]}[axis];}else if(pi.so[idx]==1&&ss<es||pi.so[idx]==-1&&ss>es){return{"x":[[midx,pi.sy],[midx,pi.ty]],"y":[[pi.sx,midy],[pi.tx,midy]]}[axis];}}};// compute the rest of the line
var p=lineCalculators[paintInfo.anchorOrientation](paintInfo.sourceAxis,ss,oss,es,oes);if(p){for(var i=0;i<p.length;i++){addSegment(segments,p[i][0],p[i][1],paintInfo);}}// line to end stub
addSegment(segments,stubs[2],stubs[3],paintInfo);}// end stub to end (common)
addSegment(segments,paintInfo.tx,paintInfo.ty,paintInfo);// write out the segments.
writeSegments(this,segments,paintInfo);};/*this.getPath = function () {
            var _last = null, _lastAxis = null, s = [], segs = segments;
            for (var i = 0; i < segs.length; i++) {
                var seg = segs[i], axis = seg[4], axisIndex = (axis == "v" ? 3 : 2);
                if (_last != null && _lastAxis === axis) {
                    _last[axisIndex] = seg[axisIndex];
                }
                else {
                    if (seg[0] != seg[2] || seg[1] != seg[3]) {
                        s.push({
                            start: [ seg[0], seg[1] ],
                            end: [ seg[2], seg[3] ]
                        });
                        _last = seg;
                        _lastAxis = seg[4];
                    }
                }
            }
            return s;
        };*/};_ju.extend(Flowchart,_jp.Connectors.AbstractConnector);_jp.registerConnectorType(Flowchart,"Flowchart");}).call(typeof window!=='undefined'?window:this);/*
 * jsPlumb
 *
 * Title:jsPlumb 2.3.0
 *
 * Provides a way to visually connect elements on an HTML page, using SVG.
 *
 * This file contains the code for the Bezier connector type.
 *
 * Copyright (c) 2010 - 2017 jsPlumb (hello@jsplumbtoolkit.com)
 *
 * http://jsplumbtoolkit.com
 * http://github.com/sporritt/jsplumb
 * 
 * Dual licensed under the MIT and GPL2 licenses.
 */;(function(){"use strict";var root=this,_jp=root.jsPlumb,_ju=root.jsPlumbUtil;_jp.Connectors.AbstractBezierConnector=function(params){params=params||{};var showLoopback=params.showLoopback!==false,curviness=params.curviness||10,margin=params.margin||5,proximityLimit=params.proximityLimit||80,clockwise=params.orientation&&params.orientation==="clockwise",loopbackRadius=params.loopbackRadius||25,isLoopbackCurrently=false,_super;this.overrideSetEditable=function(){return!isLoopbackCurrently;};this._compute=function(paintInfo,p){var sp=p.sourcePos,tp=p.targetPos,_w=Math.abs(sp[0]-tp[0]),_h=Math.abs(sp[1]-tp[1]);if(!showLoopback||p.sourceEndpoint.elementId!==p.targetEndpoint.elementId){isLoopbackCurrently=false;this._computeBezier(paintInfo,p,sp,tp,_w,_h);}else{isLoopbackCurrently=true;// a loopback connector.  draw an arc from one anchor to the other.
var x1=p.sourcePos[0],y1=p.sourcePos[1]-margin,cx=x1,cy=y1-loopbackRadius,// canvas sizing stuff, to ensure the whole painted area is visible.
_x=cx-loopbackRadius,_y=cy-loopbackRadius;_w=2*loopbackRadius;_h=2*loopbackRadius;paintInfo.points[0]=_x;paintInfo.points[1]=_y;paintInfo.points[2]=_w;paintInfo.points[3]=_h;// ADD AN ARC SEGMENT.
_super.addSegment(this,"Arc",{loopback:true,x1:x1-_x+4,y1:y1-_y,startAngle:0,endAngle:2*Math.PI,r:loopbackRadius,ac:!clockwise,x2:x1-_x-4,y2:y1-_y,cx:cx-_x,cy:cy-_y});}};_super=_jp.Connectors.AbstractConnector.apply(this,arguments);return _super;};_ju.extend(_jp.Connectors.AbstractBezierConnector,_jp.Connectors.AbstractConnector);var Bezier=function Bezier(params){params=params||{};this.type="Bezier";var _super=_jp.Connectors.AbstractBezierConnector.apply(this,arguments),majorAnchor=params.curviness||150,minorAnchor=10;this.getCurviness=function(){return majorAnchor;};this._findControlPoint=function(point,sourceAnchorPosition,targetAnchorPosition,sourceEndpoint,targetEndpoint,soo,too){// determine if the two anchors are perpendicular to each other in their orientation.  we swap the control
// points around if so (code could be tightened up)
var perpendicular=soo[0]!=too[0]||soo[1]==too[1],p=[];if(!perpendicular){if(soo[0]===0)// X
p.push(sourceAnchorPosition[0]<targetAnchorPosition[0]?point[0]+minorAnchor:point[0]-minorAnchor);else p.push(point[0]-majorAnchor*soo[0]);if(soo[1]===0)// Y
p.push(sourceAnchorPosition[1]<targetAnchorPosition[1]?point[1]+minorAnchor:point[1]-minorAnchor);else p.push(point[1]+majorAnchor*too[1]);}else{if(too[0]===0)// X
p.push(targetAnchorPosition[0]<sourceAnchorPosition[0]?point[0]+minorAnchor:point[0]-minorAnchor);else p.push(point[0]+majorAnchor*too[0]);if(too[1]===0)// Y
p.push(targetAnchorPosition[1]<sourceAnchorPosition[1]?point[1]+minorAnchor:point[1]-minorAnchor);else p.push(point[1]+majorAnchor*soo[1]);}return p;};this._computeBezier=function(paintInfo,p,sp,tp,_w,_h){var geometry=this.getGeometry(),_CP,_CP2,_sx=sp[0]<tp[0]?_w:0,_sy=sp[1]<tp[1]?_h:0,_tx=sp[0]<tp[0]?0:_w,_ty=sp[1]<tp[1]?0:_h;if((this.hasBeenEdited()||this.isEditing())&&geometry!=null&&geometry.controlPoints!=null&&geometry.controlPoints[0]!=null&&geometry.controlPoints[1]!=null){_CP=geometry.controlPoints[0];_CP2=geometry.controlPoints[1];}else{_CP=this._findControlPoint([_sx,_sy],sp,tp,p.sourceEndpoint,p.targetEndpoint,paintInfo.so,paintInfo.to);_CP2=this._findControlPoint([_tx,_ty],tp,sp,p.targetEndpoint,p.sourceEndpoint,paintInfo.to,paintInfo.so);}_super.setGeometry({controlPoints:[_CP,_CP2]},true);_super.addSegment(this,"Bezier",{x1:_sx,y1:_sy,x2:_tx,y2:_ty,cp1x:_CP[0],cp1y:_CP[1],cp2x:_CP2[0],cp2y:_CP2[1]});};};_ju.extend(Bezier,_jp.Connectors.AbstractBezierConnector);_jp.registerConnectorType(Bezier,"Bezier");}).call(typeof window!=='undefined'?window:this);/*
 * jsPlumb
 *
 * Title:jsPlumb 2.3.0
 *
 * Provides a way to visually connect elements on an HTML page, using SVG.
 *
 * This file contains the state machine connectors, which extend AbstractBezierConnector.
 *
 * Copyright (c) 2010 - 2017 jsPlumb (hello@jsplumbtoolkit.com)
 *
 * http://jsplumbtoolkit.com
 * http://github.com/sporritt/jsplumb
 * 
 * Dual licensed under the MIT and GPL2 licenses.
 */;(function(){"use strict";var root=this,_jp=root.jsPlumb,_ju=root.jsPlumbUtil;var _segment=function _segment(x1,y1,x2,y2){if(x1<=x2&&y2<=y1)return 1;else if(x1<=x2&&y1<=y2)return 2;else if(x2<=x1&&y2>=y1)return 3;return 4;},// the control point we will use depends on the faces to which each end of the connection is assigned, specifically whether or not the
// two faces are parallel or perpendicular.  if they are parallel then the control point lies on the midpoint of the axis in which they
// are parellel and varies only in the other axis; this variation is proportional to the distance that the anchor points lie from the
// center of that face.  if the two faces are perpendicular then the control point is at some distance from both the midpoints; the amount and
// direction are dependent on the orientation of the two elements. 'seg', passed in to this method, tells you which segment the target element
// lies in with respect to the source: 1 is top right, 2 is bottom right, 3 is bottom left, 4 is top left.
//
// sourcePos and targetPos are arrays of info about where on the source and target each anchor is located.  their contents are:
//
// 0 - absolute x
// 1 - absolute y
// 2 - proportional x in element (0 is left edge, 1 is right edge)
// 3 - proportional y in element (0 is top edge, 1 is bottom edge)
//
_findControlPoint=function _findControlPoint(midx,midy,segment,sourceEdge,targetEdge,dx,dy,distance,proximityLimit){// TODO (maybe)
// - if anchor pos is 0.5, make the control point take into account the relative position of the elements.
if(distance<=proximityLimit)return[midx,midy];if(segment===1){if(sourceEdge[3]<=0&&targetEdge[3]>=1)return[midx+(sourceEdge[2]<0.5?-1*dx:dx),midy];else if(sourceEdge[2]>=1&&targetEdge[2]<=0)return[midx,midy+(sourceEdge[3]<0.5?-1*dy:dy)];else return[midx+-1*dx,midy+-1*dy];}else if(segment===2){if(sourceEdge[3]>=1&&targetEdge[3]<=0)return[midx+(sourceEdge[2]<0.5?-1*dx:dx),midy];else if(sourceEdge[2]>=1&&targetEdge[2]<=0)return[midx,midy+(sourceEdge[3]<0.5?-1*dy:dy)];else return[midx+dx,midy+-1*dy];}else if(segment===3){if(sourceEdge[3]>=1&&targetEdge[3]<=0)return[midx+(sourceEdge[2]<0.5?-1*dx:dx),midy];else if(sourceEdge[2]<=0&&targetEdge[2]>=1)return[midx,midy+(sourceEdge[3]<0.5?-1*dy:dy)];else return[midx+-1*dx,midy+-1*dy];}else if(segment===4){if(sourceEdge[3]<=0&&targetEdge[3]>=1)return[midx+(sourceEdge[2]<0.5?-1*dx:dx),midy];else if(sourceEdge[2]<=0&&targetEdge[2]>=1)return[midx,midy+(sourceEdge[3]<0.5?-1*dy:dy)];else return[midx+dx,midy+-1*dy];}};var StateMachine=function StateMachine(params){params=params||{};this.type="StateMachine";var _super=_jp.Connectors.AbstractBezierConnector.apply(this,arguments),curviness=params.curviness||10,margin=params.margin||5,proximityLimit=params.proximityLimit||80,clockwise=params.orientation&&params.orientation==="clockwise",_controlPoint;this._computeBezier=function(paintInfo,params,sp,tp,w,h){var _sx=params.sourcePos[0]<params.targetPos[0]?0:w,_sy=params.sourcePos[1]<params.targetPos[1]?0:h,_tx=params.sourcePos[0]<params.targetPos[0]?w:0,_ty=params.sourcePos[1]<params.targetPos[1]?h:0;// now adjust for the margin
if(params.sourcePos[2]===0)_sx-=margin;if(params.sourcePos[2]===1)_sx+=margin;if(params.sourcePos[3]===0)_sy-=margin;if(params.sourcePos[3]===1)_sy+=margin;if(params.targetPos[2]===0)_tx-=margin;if(params.targetPos[2]===1)_tx+=margin;if(params.targetPos[3]===0)_ty-=margin;if(params.targetPos[3]===1)_ty+=margin;//
// these connectors are quadratic bezier curves, having a single control point. if both anchors
// are located at 0.5 on their respective faces, the control point is set to the midpoint and you
// get a straight line.  this is also the case if the two anchors are within 'proximityLimit', since
// it seems to make good aesthetic sense to do that. outside of that, the control point is positioned
// at 'curviness' pixels away along the normal to the straight line connecting the two anchors.
//
// there may be two improvements to this.  firstly, we might actually support the notion of avoiding nodes
// in the UI, or at least making a good effort at doing so.  if a connection would pass underneath some node,
// for example, we might increase the distance the control point is away from the midpoint in a bid to
// steer it around that node.  this will work within limits, but i think those limits would also be the likely
// limits for, once again, aesthetic good sense in the layout of a chart using these connectors.
//
// the second possible change is actually two possible changes: firstly, it is possible we should gradually
// decrease the 'curviness' as the distance between the anchors decreases; start tailing it off to 0 at some
// point (which should be configurable).  secondly, we might slightly increase the 'curviness' for connectors
// with respect to how far their anchor is from the center of its respective face. this could either look cool,
// or stupid, and may indeed work only in a way that is so subtle as to have been a waste of time.
//
var _midx=(_sx+_tx)/2,_midy=(_sy+_ty)/2,segment=_segment(_sx,_sy,_tx,_ty),distance=Math.sqrt(Math.pow(_tx-_sx,2)+Math.pow(_ty-_sy,2)),cp1x,cp2x,cp1y,cp2y,geometry=_super.getGeometry();if((this.hasBeenEdited()||this.isEditing())&&geometry!=null){cp1x=geometry.controlPoints[0][0];cp1y=geometry.controlPoints[0][1];cp2x=geometry.controlPoints[1][0];cp2y=geometry.controlPoints[1][1];}else{// calculate the control point.  this code will be where we'll put in a rudimentary element avoidance scheme; it
// will work by extending the control point to force the curve to be, um, curvier.
_controlPoint=_findControlPoint(_midx,_midy,segment,params.sourcePos,params.targetPos,curviness,curviness,distance,proximityLimit);cp1x=_controlPoint[0];cp2x=_controlPoint[0];cp1y=_controlPoint[1];cp2y=_controlPoint[1];_super.setGeometry({controlPoints:[_controlPoint,_controlPoint]},true);}_super.addSegment(this,"Bezier",{x1:_tx,y1:_ty,x2:_sx,y2:_sy,cp1x:cp1x,cp1y:cp1y,cp2x:cp2x,cp2y:cp2y});};};_ju.extend(StateMachine,_jp.Connectors.AbstractBezierConnector);_jp.registerConnectorType(StateMachine,"StateMachine");}).call(typeof window!=='undefined'?window:this);/*
 * jsPlumb
 *
 * Title:jsPlumb 2.3.0
 *
 * Provides a way to visually connect elements on an HTML page, using SVG.
 *
 * This file contains the 'flowchart' connectors, consisting of vertical and horizontal line segments.
 *
 * Copyright (c) 2010 - 2017 jsPlumb (hello@jsplumbtoolkit.com)
 *
 * http://jsplumbtoolkit.com
 * http://github.com/sporritt/jsplumb
 *
 * Dual licensed under the MIT and GPL2 licenses.
 */;(function(){"use strict";var root=this,_jp=root.jsPlumb,_ju=root.jsPlumbUtil;var STRAIGHT="Straight";var Straight=function Straight(params){this.type=STRAIGHT;var _super=_jp.Connectors.AbstractConnector.apply(this,arguments);this._compute=function(paintInfo,_){_super.addSegment(this,STRAIGHT,{x1:paintInfo.sx,y1:paintInfo.sy,x2:paintInfo.startStubX,y2:paintInfo.startStubY});_super.addSegment(this,STRAIGHT,{x1:paintInfo.startStubX,y1:paintInfo.startStubY,x2:paintInfo.endStubX,y2:paintInfo.endStubY});_super.addSegment(this,STRAIGHT,{x1:paintInfo.endStubX,y1:paintInfo.endStubY,x2:paintInfo.tx,y2:paintInfo.ty});};};_ju.extend(Straight,_jp.Connectors.AbstractConnector);_jp.registerConnectorType(Straight,STRAIGHT);}).call(typeof window!=='undefined'?window:this);/*
 * jsPlumb
 * 
 * Title:jsPlumb 2.3.0
 * 
 * Provides a way to visually connect elements on an HTML page, using SVG.
 * 
 * This file contains the SVG renderers.
 *
 * Copyright (c) 2010 - 2017 jsPlumb (hello@jsplumbtoolkit.com)
 * 
 * http://jsplumbtoolkit.com
 * http://github.com/sporritt/jsplumb
 * 
 * Dual licensed under the MIT and GPL2 licenses.
 */;(function(){// ************************** SVG utility methods ********************************************	
"use strict";var root=this,_jp=root.jsPlumb,_ju=root.jsPlumbUtil;var svgAttributeMap={"stroke-linejoin":"stroke-linejoin","stroke-dashoffset":"stroke-dashoffset","stroke-linecap":"stroke-linecap"},STROKE_DASHARRAY="stroke-dasharray",DASHSTYLE="dashstyle",LINEAR_GRADIENT="linearGradient",RADIAL_GRADIENT="radialGradient",DEFS="defs",FILL="fill",STOP="stop",STROKE="stroke",STROKE_WIDTH="stroke-width",STYLE="style",NONE="none",JSPLUMB_GRADIENT="jsplumb_gradient_",LINE_WIDTH="strokeWidth",ns={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml"},_attr=function _attr(node,attributes){for(var i in attributes){node.setAttribute(i,""+attributes[i]);}},_node=function _node(name,attributes){attributes=attributes||{};attributes.version="1.1";attributes.xmlns=ns.xhtml;return _jp.createElementNS(ns.svg,name,null,null,attributes);},_pos=function _pos(d){return"position:absolute;left:"+d[0]+"px;top:"+d[1]+"px";},_clearGradient=function _clearGradient(parent){var els=parent.querySelectorAll(" defs,linearGradient,radialGradient");for(var i=0;i<els.length;i++){els[i].parentNode.removeChild(els[i]);}},_updateGradient=function _updateGradient(parent,node,style,dimensions,uiComponent){var id=JSPLUMB_GRADIENT+uiComponent._jsPlumb.instance.idstamp();// first clear out any existing gradient
_clearGradient(parent);// this checks for an 'offset' property in the gradient, and in the absence of it, assumes
// we want a linear gradient. if it's there, we create a radial gradient.
// it is possible that a more explicit means of defining the gradient type would be
// better. relying on 'offset' means that we can never have a radial gradient that uses
// some default offset, for instance.
// issue 244 suggested the 'gradientUnits' attribute; without this, straight/flowchart connectors with gradients would
// not show gradients when the line was perfectly horizontal or vertical.
var g;if(!style.gradient.offset)g=_node(LINEAR_GRADIENT,{id:id,gradientUnits:"userSpaceOnUse"});else g=_node(RADIAL_GRADIENT,{id:id});var defs=_node(DEFS);parent.appendChild(defs);defs.appendChild(g);// the svg radial gradient seems to treat stops in the reverse
// order to how canvas does it.  so we want to keep all the maths the same, but
// iterate the actual style declarations in reverse order, if the x indexes are not in order.
for(var i=0;i<style.gradient.stops.length;i++){var styleToUse=uiComponent.segment==1||uiComponent.segment==2?i:style.gradient.stops.length-1-i,//stopColor = _ju.convertStyle(style.gradient.stops[styleToUse][1], true),
stopColor=style.gradient.stops[styleToUse][1],s=_node(STOP,{"offset":Math.floor(style.gradient.stops[i][0]*100)+"%","stop-color":stopColor});g.appendChild(s);}var applyGradientTo=style.stroke?STROKE:FILL;node.setAttribute(applyGradientTo,"url(#"+id+")");},_applyStyles=function _applyStyles(parent,node,style,dimensions,uiComponent){node.setAttribute(FILL,style.fill?style.fill:NONE);node.setAttribute(STROKE,style.stroke?style.stroke:NONE);if(style.gradient){_updateGradient(parent,node,style,dimensions,uiComponent);}else{// make sure we clear any existing gradient
_clearGradient(parent);node.setAttribute(STYLE,"");}if(style.strokeWidth){node.setAttribute(STROKE_WIDTH,style.strokeWidth);}// in SVG there is a stroke-dasharray attribute we can set, and its syntax looks like
// the syntax in VML but is actually kind of nasty: values are given in the pixel
// coordinate space, whereas in VML they are multiples of the width of the stroked
// line, which makes a lot more sense.  for that reason, jsPlumb is supporting both
// the native svg 'stroke-dasharray' attribute, and also the 'dashstyle' concept from
// VML, which will be the preferred method.  the code below this converts a dashstyle
// attribute given in terms of stroke width into a pixel representation, by using the
// stroke's lineWidth.
if(style[DASHSTYLE]&&style[LINE_WIDTH]&&!style[STROKE_DASHARRAY]){var sep=style[DASHSTYLE].indexOf(",")==-1?" ":",",parts=style[DASHSTYLE].split(sep),styleToUse="";parts.forEach(function(p){styleToUse+=Math.floor(p*style.strokeWidth)+sep;});node.setAttribute(STROKE_DASHARRAY,styleToUse);}else if(style[STROKE_DASHARRAY]){node.setAttribute(STROKE_DASHARRAY,style[STROKE_DASHARRAY]);}// extra attributes such as join type, dash offset.
for(var i in svgAttributeMap){if(style[i]){node.setAttribute(svgAttributeMap[i],style[i]);}}},_appendAtIndex=function _appendAtIndex(svg,path,idx){if(svg.childNodes.length>idx){svg.insertBefore(path,svg.childNodes[idx]);}else svg.appendChild(path);};/**
     utility methods for other objects to use.
     */_ju.svg={node:_node,attr:_attr,pos:_pos};// ************************** / SVG utility methods ********************************************
/*
     * Base class for SVG components.
     */var SvgComponent=function SvgComponent(params){var pointerEventsSpec=params.pointerEventsSpec||"all",renderer={};_jp.jsPlumbUIComponent.apply(this,params.originalArgs);this.canvas=null;this.path=null;this.svg=null;this.bgCanvas=null;var clazz=params.cssClass+" "+(params.originalArgs[0].cssClass||""),svgParams={"style":"","width":0,"height":0,"pointer-events":pointerEventsSpec,"position":"absolute"};this.svg=_node("svg",svgParams);if(params.useDivWrapper){this.canvas=_jp.createElement("div",{position:"absolute"});_ju.sizeElement(this.canvas,0,0,1,1);this.canvas.className=clazz;}else{_attr(this.svg,{"class":clazz});this.canvas=this.svg;}params._jsPlumb.appendElement(this.canvas,params.originalArgs[0].parent);if(params.useDivWrapper)this.canvas.appendChild(this.svg);var displayElements=[this.canvas];this.getDisplayElements=function(){return displayElements;};this.appendDisplayElement=function(el){displayElements.push(el);};this.paint=function(style,anchor,extents){if(style!=null){var xy=[this.x,this.y],wh=[this.w,this.h],p;if(extents!=null){if(extents.xmin<0)xy[0]+=extents.xmin;if(extents.ymin<0)xy[1]+=extents.ymin;wh[0]=extents.xmax+(extents.xmin<0?-extents.xmin:0);wh[1]=extents.ymax+(extents.ymin<0?-extents.ymin:0);}if(params.useDivWrapper){_ju.sizeElement(this.canvas,xy[0],xy[1],wh[0],wh[1]);xy[0]=0;xy[1]=0;p=_pos([0,0]);}else p=_pos([xy[0],xy[1]]);renderer.paint.apply(this,arguments);_attr(this.svg,{"style":p,"width":wh[0]||0,"height":wh[1]||0});}};return{renderer:renderer};};_ju.extend(SvgComponent,_jp.jsPlumbUIComponent,{cleanup:function cleanup(force){if(force||this.typeId==null){if(this.canvas)this.canvas._jsPlumb=null;if(this.svg)this.svg._jsPlumb=null;if(this.bgCanvas)this.bgCanvas._jsPlumb=null;if(this.canvas&&this.canvas.parentNode)this.canvas.parentNode.removeChild(this.canvas);if(this.bgCanvas&&this.bgCanvas.parentNode)this.canvas.parentNode.removeChild(this.canvas);this.svg=null;this.canvas=null;this.path=null;this.group=null;}else{// if not a forced cleanup, just detach from DOM for now.
if(this.canvas&&this.canvas.parentNode)this.canvas.parentNode.removeChild(this.canvas);if(this.bgCanvas&&this.bgCanvas.parentNode)this.bgCanvas.parentNode.removeChild(this.bgCanvas);}},reattach:function reattach(instance){var c=instance.getContainer();if(this.canvas&&this.canvas.parentNode==null)c.appendChild(this.canvas);if(this.bgCanvas&&this.bgCanvas.parentNode==null)c.appendChild(this.bgCanvas);},setVisible:function setVisible(v){if(this.canvas){this.canvas.style.display=v?"block":"none";}}});/*
     * Base class for SVG connectors.
     */_jp.ConnectorRenderers.svg=function(params){var self=this,_super=SvgComponent.apply(this,[{cssClass:params._jsPlumb.connectorClass+(this.isEditable()?" "+params._jsPlumb.editableConnectorClass:""),originalArgs:arguments,pointerEventsSpec:"none",_jsPlumb:params._jsPlumb}]);var _superSetEditable=this.setEditable;this.setEditable=function(e){var result=_superSetEditable.apply(this,[e]);_jp[result?"addClass":"removeClass"](this.canvas,this._jsPlumb.instance.editableConnectorClass);};_super.renderer.paint=function(style,anchor,extents){var segments=self.getSegments(),p="",offset=[0,0];if(extents.xmin<0)offset[0]=-extents.xmin;if(extents.ymin<0)offset[1]=-extents.ymin;if(segments.length>0){p=self.getPathData();var a={d:p,transform:"translate("+offset[0]+","+offset[1]+")","pointer-events":params["pointer-events"]||"visibleStroke"},outlineStyle=null,d=[self.x,self.y,self.w,self.h];// outline style.  actually means drawing an svg object underneath the main one.
if(style.outlineStroke){var outlineWidth=style.outlineWidth||1,outlineStrokeWidth=style.strokeWidth+2*outlineWidth;outlineStyle=_jp.extend({},style);delete outlineStyle.gradient;outlineStyle.stroke=style.outlineStroke;outlineStyle.strokeWidth=outlineStrokeWidth;if(self.bgPath==null){self.bgPath=_node("path",a);_jp.addClass(self.bgPath,_jp.connectorOutlineClass);_appendAtIndex(self.svg,self.bgPath,0);}else{_attr(self.bgPath,a);}_applyStyles(self.svg,self.bgPath,outlineStyle,d,self);}if(self.path==null){self.path=_node("path",a);_appendAtIndex(self.svg,self.path,style.outlineStroke?1:0);}else{_attr(self.path,a);}_applyStyles(self.svg,self.path,style,d,self);}};};_ju.extend(_jp.ConnectorRenderers.svg,SvgComponent);// ******************************* svg segment renderer *****************************************************	
// ******************************* /svg segments *****************************************************
/*
     * Base class for SVG endpoints.
     */var SvgEndpoint=_jp.SvgEndpoint=function(params){var _super=SvgComponent.apply(this,[{cssClass:params._jsPlumb.endpointClass,originalArgs:arguments,pointerEventsSpec:"all",useDivWrapper:true,_jsPlumb:params._jsPlumb}]);_super.renderer.paint=function(style){var s=_jp.extend({},style);if(s.outlineStroke){s.strokeWidth=s.strokeWidth;s.stroke=s.outlineStroke;}if(this.node==null){this.node=this.makeNode(s);this.svg.appendChild(this.node);}else if(this.updateNode!=null){this.updateNode(this.node);}_applyStyles(this.svg,this.node,s,[this.x,this.y,this.w,this.h],this);_pos(this.node,[this.x,this.y]);}.bind(this);};_ju.extend(SvgEndpoint,SvgComponent);/*
     * SVG Dot Endpoint
     */_jp.Endpoints.svg.Dot=function(){_jp.Endpoints.Dot.apply(this,arguments);SvgEndpoint.apply(this,arguments);this.makeNode=function(style){return _node("circle",{"cx":this.w/2,"cy":this.h/2,"r":this.radius});};this.updateNode=function(node){_attr(node,{"cx":this.w/2,"cy":this.h/2,"r":this.radius});};};_ju.extend(_jp.Endpoints.svg.Dot,[_jp.Endpoints.Dot,SvgEndpoint]);/*
     * SVG Rectangle Endpoint
     */_jp.Endpoints.svg.Rectangle=function(){_jp.Endpoints.Rectangle.apply(this,arguments);SvgEndpoint.apply(this,arguments);this.makeNode=function(style){return _node("rect",{"width":this.w,"height":this.h});};this.updateNode=function(node){_attr(node,{"width":this.w,"height":this.h});};};_ju.extend(_jp.Endpoints.svg.Rectangle,[_jp.Endpoints.Rectangle,SvgEndpoint]);/*
     * SVG Image Endpoint is the default image endpoint.
     */_jp.Endpoints.svg.Image=_jp.Endpoints.Image;/*
     * Blank endpoint in svg renderer is the default Blank endpoint.
     */_jp.Endpoints.svg.Blank=_jp.Endpoints.Blank;/*
     * Label overlay in svg renderer is the default Label overlay.
     */_jp.Overlays.svg.Label=_jp.Overlays.Label;/*
     * Custom overlay in svg renderer is the default Custom overlay.
     */_jp.Overlays.svg.Custom=_jp.Overlays.Custom;var AbstractSvgArrowOverlay=function AbstractSvgArrowOverlay(superclass,originalArgs){superclass.apply(this,originalArgs);_jp.jsPlumbUIComponent.apply(this,originalArgs);this.isAppendedAtTopLevel=false;var self=this;this.path=null;this.paint=function(params,containerExtents){// only draws on connections, not endpoints.
if(params.component.svg&&containerExtents){if(this.path==null){this.path=_node("path",{"pointer-events":"all"});params.component.svg.appendChild(this.path);if(this.elementCreated){this.elementCreated(this.path,params.component);}this.canvas=params.component.svg;// for the sake of completeness; this behaves the same as other overlays
}var clazz=originalArgs&&originalArgs.length==1?originalArgs[0].cssClass||"":"",offset=[0,0];if(containerExtents.xmin<0)offset[0]=-containerExtents.xmin;if(containerExtents.ymin<0)offset[1]=-containerExtents.ymin;_attr(this.path,{"d":makePath(params.d),"class":clazz,stroke:params.stroke?params.stroke:null,fill:params.fill?params.fill:null,transform:"translate("+offset[0]+","+offset[1]+")"});}};var makePath=function makePath(d){return isNaN(d.cxy.x)||isNaN(d.cxy.y)?"":"M"+d.hxy.x+","+d.hxy.y+" L"+d.tail[0].x+","+d.tail[0].y+" L"+d.cxy.x+","+d.cxy.y+" L"+d.tail[1].x+","+d.tail[1].y+" L"+d.hxy.x+","+d.hxy.y;};this.transfer=function(target){if(target.canvas&&this.path&&this.path.parentNode){this.path.parentNode.removeChild(this.path);target.canvas.appendChild(this.path);}};};_ju.extend(AbstractSvgArrowOverlay,[_jp.jsPlumbUIComponent,_jp.Overlays.AbstractOverlay],{cleanup:function cleanup(force){if(this.path!=null){if(force)this._jsPlumb.instance.removeElement(this.path);else if(this.path.parentNode)this.path.parentNode.removeChild(this.path);}},reattach:function reattach(instance){if(this.path&&this.canvas&&this.path.parentNode==null)this.canvas.appendChild(this.path);},setVisible:function setVisible(v){if(this.path!=null)this.path.style.display=v?"block":"none";}});_jp.Overlays.svg.Arrow=function(){AbstractSvgArrowOverlay.apply(this,[_jp.Overlays.Arrow,arguments]);};_ju.extend(_jp.Overlays.svg.Arrow,[_jp.Overlays.Arrow,AbstractSvgArrowOverlay]);_jp.Overlays.svg.PlainArrow=function(){AbstractSvgArrowOverlay.apply(this,[_jp.Overlays.PlainArrow,arguments]);};_ju.extend(_jp.Overlays.svg.PlainArrow,[_jp.Overlays.PlainArrow,AbstractSvgArrowOverlay]);_jp.Overlays.svg.Diamond=function(){AbstractSvgArrowOverlay.apply(this,[_jp.Overlays.Diamond,arguments]);};_ju.extend(_jp.Overlays.svg.Diamond,[_jp.Overlays.Diamond,AbstractSvgArrowOverlay]);// a test
_jp.Overlays.svg.GuideLines=function(){var path=null,self=this,p1_1,p1_2;_jp.Overlays.GuideLines.apply(this,arguments);this.paint=function(params,containerExtents){if(path==null){path=_node("path");params.connector.svg.appendChild(path);self.attachListeners(path,params.connector);self.attachListeners(path,self);p1_1=_node("path");params.connector.svg.appendChild(p1_1);self.attachListeners(p1_1,params.connector);self.attachListeners(p1_1,self);p1_2=_node("path");params.connector.svg.appendChild(p1_2);self.attachListeners(p1_2,params.connector);self.attachListeners(p1_2,self);}var offset=[0,0];if(containerExtents.xmin<0)offset[0]=-containerExtents.xmin;if(containerExtents.ymin<0)offset[1]=-containerExtents.ymin;_attr(path,{"d":makePath(params.head,params.tail),stroke:"red",fill:null,transform:"translate("+offset[0]+","+offset[1]+")"});_attr(p1_1,{"d":makePath(params.tailLine[0],params.tailLine[1]),stroke:"blue",fill:null,transform:"translate("+offset[0]+","+offset[1]+")"});_attr(p1_2,{"d":makePath(params.headLine[0],params.headLine[1]),stroke:"green",fill:null,transform:"translate("+offset[0]+","+offset[1]+")"});};var makePath=function makePath(d1,d2){return"M "+d1.x+","+d1.y+" L"+d2.x+","+d2.y;};};_ju.extend(_jp.Overlays.svg.GuideLines,_jp.Overlays.GuideLines);}).call(typeof window!=='undefined'?window:this);/*
 * jsPlumb
 * 
 * Title:jsPlumb 2.3.0
 * 
 * Provides a way to visually connect elements on an HTML page, using SVG.
 * 
 * This file contains the 'vanilla' adapter - having no external dependencies other than bundled libs.
 *
 * Copyright (c) 2010 - 2017 jsPlumb (hello@jsplumbtoolkit.com)
 * 
 * http://jsplumbtoolkit.com
 * http://github.com/sporritt/jsplumb
 * 
 * Dual licensed under the MIT and GPL2 licenses.
 */;(function(){"use strict";var root=this,_jp=root.jsPlumb,_ju=root.jsPlumbUtil,_jk=root.Katavorio,_jg=root.Biltong;var _getDragManager=function _getDragManager(instance,category){category=category||"main";var key="_katavorio_"+category;var k=instance[key],e=instance.getEventManager();if(!k){k=new _jk({bind:e.on,unbind:e.off,getSize:_jp.getSize,getPosition:function getPosition(el,relativeToRoot){// if this is a nested draggable then compute the offset against its own offsetParent, otherwise
// compute against the Container's origin. see also the getUIPosition method below.
var o=instance.getOffset(el,relativeToRoot,el._katavorioDrag?el.offsetParent:null);return[o.left,o.top];},setPosition:function setPosition(el,xy){el.style.left=xy[0]+"px";el.style.top=xy[1]+"px";},addClass:_jp.addClass,removeClass:_jp.removeClass,intersects:_jg.intersects,indexOf:function indexOf(l,i){return l.indexOf(i);},scope:instance.getDefaultScope(),css:{noSelect:instance.dragSelectClass,droppable:"jtk-droppable",draggable:"jtk-draggable",drag:"jtk-drag",selected:"jtk-drag-selected",active:"jtk-drag-active",hover:"jtk-drag-hover",ghostProxy:"jtk-ghost-proxy"}});k.setZoom(instance.getZoom());instance[key]=k;instance.bind("zoom",k.setZoom);}return k;};var _animProps=function _animProps(o,p){var _one=function _one(pName){if(p[pName]!=null){if(_ju.isString(p[pName])){var m=p[pName].match(/-=/)?-1:1,v=p[pName].substring(2);return o[pName]+m*v;}else return p[pName];}else return o[pName];};return[_one("left"),_one("top")];};_jp.extend(root.jsPlumbInstance.prototype,{animationSupported:true,getElement:function getElement(el){if(el==null)return null;// here we pluck the first entry if el was a list of entries.
// this is not my favourite thing to do, but previous versions of
// jsplumb supported jquery selectors, and it is possible a selector
// will be passed in here.
el=typeof el==="string"?el:el.length!=null&&el.enctype==null?el[0]:el;return typeof el==="string"?document.getElementById(el):el;},removeElement:function removeElement(element){_getDragManager(this).elementRemoved(element);this.getEventManager().remove(element);},//
// this adapter supports a rudimentary animation function. no easing is supported.  only
// left/top properties are supported. property delta args are expected to be in the form
//
// +=x.xxxx
//
// or
//
// -=x.xxxx
//
doAnimate:function doAnimate(el,properties,options){options=options||{};var o=this.getOffset(el),ap=_animProps(o,properties),ldist=ap[0]-o.left,tdist=ap[1]-o.top,d=options.duration||250,step=15,steps=d/step,linc=step/d*ldist,tinc=step/d*tdist,idx=0,_int=setInterval(function(){_jp.setPosition(el,{left:o.left+linc*(idx+1),top:o.top+tinc*(idx+1)});if(options.step!=null)options.step(idx,Math.ceil(steps));idx++;if(idx>=steps){window.clearInterval(_int);if(options.complete!=null)options.complete();}},step);},// DRAG/DROP
destroyDraggable:function destroyDraggable(el,category){_getDragManager(this,category).destroyDraggable(el);},destroyDroppable:function destroyDroppable(el,category){_getDragManager(this,category).destroyDroppable(el);},initDraggable:function initDraggable(el,options,category){_getDragManager(this,category).draggable(el,options);},initDroppable:function initDroppable(el,options,category){_getDragManager(this,category).droppable(el,options);},isAlreadyDraggable:function isAlreadyDraggable(el){return el._katavorioDrag!=null;},isDragSupported:function isDragSupported(el,options){return true;},isDropSupported:function isDropSupported(el,options){return true;},isElementDraggable:function isElementDraggable(el){el=_jp.getElement(el);return el._katavorioDrag&&el._katavorioDrag.isEnabled();},getDragObject:function getDragObject(eventArgs){return eventArgs[0].drag.getDragElement();},getDragScope:function getDragScope(el){return el._katavorioDrag&&el._katavorioDrag.scopes.join(" ")||"";},getDropEvent:function getDropEvent(args){return args[0].e;},getUIPosition:function getUIPosition(eventArgs,zoom){// here the position reported to us by Katavorio is relative to the element's offsetParent. For top
// level nodes that is fine, but if we have a nested draggable then its offsetParent is actually
// not going to be the jsplumb container; it's going to be some child of that element. In that case
// we want to adjust the UI position to account for the offsetParent's position relative to the Container
// origin.
var el=eventArgs[0].el;if(el.offsetParent==null){return null;}var finalPos=eventArgs[0].finalPos||eventArgs[0].pos;var p={left:finalPos[0],top:finalPos[1]};if(el._katavorioDrag&&el.offsetParent!==this.getContainer()){var oc=this.getOffset(el.offsetParent);p.left+=oc.left;p.top+=oc.top;}return p;},setDragFilter:function setDragFilter(el,filter,_exclude){if(el._katavorioDrag){el._katavorioDrag.setFilter(filter,_exclude);}},setElementDraggable:function setElementDraggable(el,draggable){el=_jp.getElement(el);if(el._katavorioDrag)el._katavorioDrag.setEnabled(draggable);},setDragScope:function setDragScope(el,scope){if(el._katavorioDrag)el._katavorioDrag.k.setDragScope(el,scope);},setDropScope:function setDropScope(el,scope){if(el._katavorioDrop&&el._katavorioDrop.length>0){el._katavorioDrop[0].k.setDropScope(el,scope);}},addToPosse:function addToPosse(el,spec){var specs=Array.prototype.slice.call(arguments,1);var dm=_getDragManager(this);_jp.each(el,function(_el){_el=[_jp.getElement(_el)];_el.push.apply(_el,specs);dm.addToPosse.apply(dm,_el);});},setPosse:function setPosse(el,spec){var specs=Array.prototype.slice.call(arguments,1);var dm=_getDragManager(this);_jp.each(el,function(_el){_el=[_jp.getElement(_el)];_el.push.apply(_el,specs);dm.setPosse.apply(dm,_el);});},removeFromPosse:function removeFromPosse(el,posseId){var specs=Array.prototype.slice.call(arguments,1);var dm=_getDragManager(this);_jp.each(el,function(_el){_el=[_jp.getElement(_el)];_el.push.apply(_el,specs);dm.removeFromPosse.apply(dm,_el);});},removeFromAllPosses:function removeFromAllPosses(el){var dm=_getDragManager(this);_jp.each(el,function(_el){dm.removeFromAllPosses(_jp.getElement(_el));});},setPosseState:function setPosseState(el,posseId,state){var dm=_getDragManager(this);_jp.each(el,function(_el){dm.setPosseState(_jp.getElement(_el),posseId,state);});},dragEvents:{'start':'start','stop':'stop','drag':'drag','step':'step','over':'over','out':'out','drop':'drop','complete':'complete','beforeStart':'beforeStart'},animEvents:{'step':"step",'complete':'complete'},stopDrag:function stopDrag(el){if(el._katavorioDrag)el._katavorioDrag.abort();},addToDragSelection:function addToDragSelection(spec){_getDragManager(this).select(spec);},removeFromDragSelection:function removeFromDragSelection(spec){_getDragManager(this).deselect(spec);},clearDragSelection:function clearDragSelection(){_getDragManager(this).deselectAll();},trigger:function trigger(el,event,originalEvent,payload){this.getEventManager().trigger(el,event,originalEvent,payload);},doReset:function doReset(){// look for katavorio instances and reset each one if found.
for(var key in this){if(key.indexOf("_katavorio_")===0){this[key].reset();}}}});var ready=function ready(f){var _do=function _do(){if(/complete|loaded|interactive/.test(document.readyState)&&typeof document.body!="undefined"&&document.body!=null)f();else setTimeout(_do,9);};_do();};ready(_jp.init);}).call(typeof window!=='undefined'?window:this);

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)();
exports.push([module.i, "/**\n * okaidia theme for JavaScript, CSS and HTML\n * Loosely based on Monokai textmate theme by http://www.monokai.nl/\n * @author ocodia\n */\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tcolor: #f8f8f2;\n\tbackground: none;\n\ttext-shadow: 0 1px rgba(0, 0, 0, 0.3);\n\tfont-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-moz-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n}\n\n/* Code blocks */\npre[class*=\"language-\"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n\tborder-radius: 0.3em;\n}\n\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tbackground: #272822;\n}\n\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n\tpadding: .1em;\n\tborder-radius: .3em;\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: slategray;\n}\n\n.token.punctuation {\n\tcolor: #f8f8f2;\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: #f92672;\n}\n\n.token.boolean,\n.token.number {\n\tcolor: #ae81ff;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: #a6e22e;\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n\tcolor: #f8f8f2;\n}\n\n.token.atrule,\n.token.attr-value,\n.token.function {\n\tcolor: #e6db74;\n}\n\n.token.keyword {\n\tcolor: #66d9ef;\n}\n\n.token.regex,\n.token.important {\n\tcolor: #fd971f;\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n", ""]);

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/* **********************************************
     Begin prism-core.js
********************************************** */

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function(){

// Private helper vars
var lang = /\blang(?:uage)?-(\w+)\b/i;
var uniqueId = 0;

var _ = _self.Prism = {
	manual: _self.Prism && _self.Prism.manual,
	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
	util: {
		encode: function (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (_.util.type(tokens) === 'Array') {
				return tokens.map(_.util.encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function (o) {
			var type = _.util.type(o);

			switch (type) {
				case 'Object':
					var clone = {};

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = _.util.clone(o[key]);
						}
					}

					return clone;

				case 'Array':
					return o.map(function(v) { return _.util.clone(v); });
			}

			return o;
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need anobject and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before. If not provided, the function appends instead.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];

			if (arguments.length == 2) {
				insert = arguments[1];

				for (var newToken in insert) {
					if (insert.hasOwnProperty(newToken)) {
						grammar[newToken] = insert[newToken];
					}
				}

				return grammar;
			}

			var ret = {};

			for (var token in grammar) {

				if (grammar.hasOwnProperty(token)) {

					if (token == before) {

						for (var newToken in insert) {

							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					ret[token] = grammar[token];
				}
			}

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === root[inside] && key != inside) {
					this[key] = ret;
				}
			});

			return root[inside] = ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function(o, callback, type, visited) {
			visited = visited || {};
			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, null, visited);
					}
					else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, i, visited);
					}
				}
			}
		}
	},
	plugins: {},

	highlightAll: function(async, callback) {
		_.highlightAllUnder(document, async, callback);
	},

	highlightAllUnder: function(container, async, callback) {
		var env = {
			callback: callback,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run("before-highlightall", env);

		var elements = env.elements || container.querySelectorAll(env.selector);

		for (var i=0, element; element = elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language, grammar, parent = element;

		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (parent.className.match(lang) || [,''])[1].toLowerCase();
			grammar = _.languages[language];
		}

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		if (element.parentNode) {
			// Set language on the parent, for styling
			parent = element.parentNode;

			if (/pre/i.test(parent.nodeName)) {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		_.hooks.run('before-sanity-check', env);

		if (!env.code || !env.grammar) {
			if (env.code) {
				_.hooks.run('before-highlight', env);
				env.element.textContent = env.code;
				_.hooks.run('after-highlight', env);
			}
			_.hooks.run('complete', env);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				env.highlightedCode = evt.data;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				callback && callback.call(env.element);
				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			callback && callback.call(element);

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
		}
	},

	highlight: function (text, grammar, language) {
		var tokens = _.tokenize(text, grammar);
		return Token.stringify(_.util.encode(tokens), language);
	},

	matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
		var Token = _.Token;

		for (var token in grammar) {
			if(!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			if (token == target) {
				return;
			}

			var patterns = grammar[token];
			patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					greedy = !!pattern.greedy,
					lookbehindLength = 0,
					alias = pattern.alias;

				if (greedy && !pattern.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
					pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
				}

				pattern = pattern.pattern || pattern;

				// Don’t cache length as it changes during the loop
				for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {

					var str = strarr[i];

					if (strarr.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					pattern.lastIndex = 0;

					var match = pattern.exec(str),
					    delNum = 1;

					// Greedy patterns can override/remove up to two previously matched tokens
					if (!match && greedy && i != strarr.length - 1) {
						pattern.lastIndex = pos;
						match = pattern.exec(text);
						if (!match) {
							break;
						}

						var from = match.index + (lookbehind ? match[1].length : 0),
						    to = match.index + match[0].length,
						    k = i,
						    p = pos;

						for (var len = strarr.length; k < len && (p < to || (!strarr[k].type && !strarr[k - 1].greedy)); ++k) {
							p += strarr[k].length;
							// Move the index i to the element in strarr that is closest to from
							if (from >= p) {
								++i;
								pos = p;
							}
						}

						/*
						 * If strarr[i] is a Token, then the match starts inside another Token, which is invalid
						 * If strarr[k - 1] is greedy we are in conflict with another greedy pattern
						 */
						if (strarr[i] instanceof Token || strarr[k - 1].greedy) {
							continue;
						}

						// Number of tokens to delete and replace with the new match
						delNum = k - i;
						str = text.slice(pos, p);
						match.index -= pos;
					}

					if (!match) {
						if (oneshot) {
							break;
						}

						continue;
					}

					if(lookbehind) {
						lookbehindLength = match[1].length;
					}

					var from = match.index + lookbehindLength,
					    match = match[0].slice(lookbehindLength),
					    to = from + match.length,
					    before = str.slice(0, from),
					    after = str.slice(to);

					var args = [i, delNum];

					if (before) {
						++i;
						pos += before.length;
						args.push(before);
					}

					var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

					args.push(wrapped);

					if (after) {
						args.push(after);
					}

					Array.prototype.splice.apply(strarr, args);

					if (delNum != 1)
						_.matchGrammar(text, strarr, grammar, i, pos, true, token);

					if (oneshot)
						break;
				}
			}
		}
	},

	tokenize: function(text, grammar, language) {
		var strarr = [text];

		var rest = grammar.rest;

		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		_.matchGrammar(text, strarr, grammar, 0, 0, false);

		return strarr;
	},

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	}
};

var Token = _.Token = function(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || "").length|0;
	this.greedy = !!greedy;
};

Token.stringify = function(o, language, parent) {
	if (typeof o == 'string') {
		return o;
	}

	if (_.util.type(o) === 'Array') {
		return o.map(function(element) {
			return Token.stringify(element, language, o);
		}).join('');
	}

	var env = {
		type: o.type,
		content: Token.stringify(o.content, language, parent),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language,
		parent: parent
	};

	if (o.alias) {
		var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
		Array.prototype.push.apply(env.classes, aliases);
	}

	_.hooks.run('wrap', env);

	var attributes = Object.keys(env.attributes).map(function(name) {
		return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}).join(' ');

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';

};

if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _self.Prism;
	}

	if (!_.disableWorkerMessageHandler) {
		// In worker
		_self.addEventListener('message', function (evt) {
			var message = JSON.parse(evt.data),
				lang = message.language,
				code = message.code,
				immediateClose = message.immediateClose;

			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	}

	return _self.Prism;
}

//Get current script and highlight
var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

if (script) {
	_.filename = script.src;

	if (!_.manual && !script.hasAttribute('data-manual')) {
		if(document.readyState !== "loading") {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(_.highlightAll);
			} else {
				window.setTimeout(_.highlightAll, 16);
			}
		}
		else {
			document.addEventListener('DOMContentLoaded', _.highlightAll);
		}
	}
}

return _self.Prism;

})();

if (typeof module !== 'undefined' && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': /<!--[\s\S]*?-->/,
	'prolog': /<\?[\s\S]+?\?>/,
	'doctype': /<!DOCTYPE[\s\S]+?>/i,
	'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/i,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
				inside: {
					'punctuation': [
						/^=/,
						{
							pattern: /(^|[^\\])["']/,
							lookbehind: true
						}
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': /&#?[\da-z]{1,8};/i
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Prism.languages.xml = Prism.languages.markup;
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;


/* **********************************************
     Begin prism-css.js
********************************************** */

Prism.languages.css = {
	'comment': /\/\*[\s\S]*?\*\//,
	'atrule': {
		pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
		inside: {
			'rule': /@[\w-]+/
			// See rest below
		}
	},
	'url': /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
	'selector': /[^{}\s][^{};]*?(?=\s*\{)/,
	'string': {
		pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
	'important': /\B!important\b/i,
	'function': /[-a-z0-9]+(?=\()/i,
	'punctuation': /[(){};:]/
};

Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'style': {
			pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
			lookbehind: true,
			inside: Prism.languages.css,
			alias: 'language-css',
			greedy: true
		}
	});

	Prism.languages.insertBefore('inside', 'attr-value', {
		'style-attr': {
			pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
			inside: {
				'attr-name': {
					pattern: /^\s*style/i,
					inside: Prism.languages.markup.tag.inside
				},
				'punctuation': /^\s*=\s*['"]|['"]\s*$/,
				'attr-value': {
					pattern: /.+/i,
					inside: Prism.languages.css
				}
			},
			alias: 'language-css'
		}
	}, Prism.languages.markup.tag);
}

/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
		lookbehind: true,
		inside: {
			punctuation: /[.\\]/
		}
	},
	'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(?:true|false)\b/,
	'function': /[a-z0-9_]+(?=\()/i,
	'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'keyword': /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
	'number': /\b-?(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+(?:[Ee][+-]?\d+)?|NaN|Infinity)\b/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
	'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
});

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /(^|[^/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
		lookbehind: true,
		greedy: true
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
		alias: 'function'
	}
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\[\s\S]|[^\\`])*`/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /\$\{[^}]+\}/,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'script': {
			pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript,
			alias: 'language-javascript',
			greedy: true
		}
	});
}

Prism.languages.js = Prism.languages.javascript;


/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {
	if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
		return;
	}

	self.Prism.fileHighlight = function() {

		var Extensions = {
			'js': 'javascript',
			'py': 'python',
			'rb': 'ruby',
			'ps1': 'powershell',
			'psm1': 'powershell',
			'sh': 'bash',
			'bat': 'batch',
			'h': 'c',
			'tex': 'latex'
		};

		Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (pre) {
			var src = pre.getAttribute('data-src');

			var language, parent = pre;
			var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
			while (parent && !lang.test(parent.className)) {
				parent = parent.parentNode;
			}

			if (parent) {
				language = (pre.className.match(lang) || [, ''])[1];
			}

			if (!language) {
				var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
				language = Extensions[extension] || extension;
			}

			var code = document.createElement('code');
			code.className = 'language-' + language;

			pre.textContent = '';

			code.textContent = 'Loading…';

			pre.appendChild(code);

			var xhr = new XMLHttpRequest();

			xhr.open('GET', src, true);

			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {

					if (xhr.status < 400 && xhr.responseText) {
						code.textContent = xhr.responseText;

						Prism.highlightElement(code);
					}
					else if (xhr.status >= 400) {
						code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
					}
					else {
						code.textContent = '✖ Error: File does not exist or is empty';
					}
				}
			};

			xhr.send(null);
		});

	};

	document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);

})();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(55)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./prism-okaidia.css", function() {
			var newContent = require("!!../../css-loader/index.js!./prism-okaidia.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(58)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(59),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\laradox\\resources\\assets\\js\\components\\ltable.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ltable.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e0b0293", Component.options)
  } else {
    hotAPI.reload("data-v-5e0b0293", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 58:
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel laradox-table",
    class: 'panel-' + _vm.table.style.tableColorClass,
    attrs: {
      "id": _vm.table.uuid
    }
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("\n        " + _vm._s(_vm.table.name) + "\n        "), (_vm.readonly == '0') ? _c('div', {
    staticClass: "pull-right m-l-md"
  }, [_c('span', {
    staticClass: "ti ti-plug pointer m-r-xs",
    attrs: {
      "data-toggle": "tooltip",
      "data-placement": "top",
      "title": "Relationships"
    },
    on: {
      "click": function($event) {
        _vm.showRelation(_vm.table.uuid)
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "ti ti-pencil m-r-xs",
    attrs: {
      "data-toggle": "tooltip",
      "data-placement": "top",
      "title": "Edit table"
    },
    on: {
      "click": function($event) {
        _vm.editTable(_vm.index)
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "ti ti-trash",
    attrs: {
      "data-toggle": "tooltip",
      "data-placement": "top",
      "title": "Delete table"
    },
    on: {
      "click": function($event) {
        _vm.deleteTable(_vm.table.uuid)
      }
    }
  })]) : _vm._e()]), _vm._v(" "), _c('ul', {
    staticClass: "list-group sortable laradox-list"
  }, _vm._l((_vm.table.fields), function(field, index) {
    return _c('li', {
      key: index,
      staticClass: "list-group-item",
      attrs: {
        "id": _vm.table.uuid + '_' + field.uuid
      }
    }, [_c('strong', [_vm._v(_vm._s(field.name))]), _vm._v(" "), _c('i', [_vm._v(_vm._s(field.type))]), _vm._v(" "), (_vm.readonly == '0') ? _c('div', {
      staticClass: "tool pull-right"
    }, [_c('span', {
      staticClass: "ti ti-pencil pointer",
      attrs: {
        "data-toggle": "tooltip",
        "data-placement": "top",
        "title": "Edit field"
      },
      on: {
        "click": function($event) {
          _vm.editField(_vm.table.uuid, index)
        }
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "ti ti-arrows-vertical handle",
      attrs: {
        "data-toggle": "tooltip",
        "data-placement": "top",
        "title": "Sort"
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "ti ti-trash pointer",
      attrs: {
        "data-toggle": "tooltip",
        "data-placement": "top",
        "title": "Delete field"
      },
      on: {
        "click": function($event) {
          _vm.deleteField(index, _vm.table.uuid)
        }
      }
    })]) : _vm._e()])
  })), _vm._v(" "), (_vm.readonly == '0') ? _c('div', {
    staticClass: "panel-footer"
  }, [_c('a', {
    staticClass: "btn btn-block btn-xs btn-primary",
    attrs: {
      "href": "javascript:void(0);"
    },
    on: {
      "click": function($event) {
        _vm.addField(_vm.index)
      }
    }
  }, [_vm._v("Add Field")])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5e0b0293", module.exports)
  }
}

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prismjs__);


const VuePrism = {

    install : function (Vue, options) {

        Vue.mixin({
            mounted:function () {
                __WEBPACK_IMPORTED_MODULE_0_prismjs___default.a.highlightAll();
            }
        })
    }
}

/* harmony default export */ __webpack_exports__["default"] = (VuePrism);

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ })

/******/ });