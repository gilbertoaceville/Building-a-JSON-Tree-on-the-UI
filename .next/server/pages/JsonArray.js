module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dp12");


/***/ }),

/***/ "dp12":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//Raw Array Data
const data = [{
  "id": "2QeLom4oUq",
  "plan": "gold",
  "amount": "5000",
  "transaction_id": "1neSok7joyD3c2SjTWzPu7MKXdjP9dBAJ",
  "confirmed": false,
  "is_paid": false,
  "withdraw": false,
  "owner": "uFAYP1_r-1",
  "date": "October 19, 2020 8:36 PM",
  "createdAt": "2020-10-20T00:38:23.000Z",
  "updatedAt": "2020-10-20T00:38:23.000Z"
}, {
  "id": "NvLcj4Ky7R",
  "plan": "representative",
  "amount": "1000000000",
  "transaction_id": "1neSok7joyD3c2SjTWzPu7MKXdjP9dBAJ",
  "confirmed": false,
  "is_paid": false,
  "withdraw": false,
  "owner": "ZR0wdg7-kc",
  "date": "October 19, 2020 2:30 PM",
  "createdAt": "2020-10-19T18:32:44.000Z",
  "updatedAt": "2020-10-19T18:32:44.000Z"
}, {
  "id": "6oecrbLcn6",
  "plan": "representative",
  "amount": "100000000",
  "transaction_id": "1neSok7joyD3c2SjTWzPu7MKXdjP9dBAJ",
  "confirmed": false,
  "is_paid": false,
  "withdraw": false,
  "owner": "M-VMpTrm02",
  "date": "October 19, 2020 7:29 AM",
  "createdAt": "2020-10-19T11:29:21.000Z",
  "updatedAt": "2020-10-19T11:29:21.000Z"
}, {
  "gender": "female",
  "name": {
    "title": "Mrs",
    "first": "Johanna",
    "last": "Leis"
  },
  "location": {
    "street": {
      "number": 1624,
      "name": "Tulpenweg"
    },
    "city": "Altötting",
    "state": "Berlin",
    "country": "Germany",
    "postcode": 22561,
    "coordinates": {
      "latitude": "-41.2231",
      "longitude": "131.2807"
    },
    "timezone": {
      "offset": "+6:00",
      "description": "Almaty, Dhaka, Colombo"
    }
  },
  "email": "johanna.leis@example.com",
  "login": {
    "uuid": "888c2e02-2c53-4774-9a72-84f8cff7d3ae",
    "username": "blackleopard348",
    "password": "junebug",
    "salt": "YvmBCrfN"
  },
  "dob": {
    "date": "1998-02-07T21:16:33.908Z",
    "age": 22
  },
  "registered": {
    "date": "2011-09-03T12:43:02.890Z",
    "age": 9
  },
  "phone": "0994-8268587",
  "cell": "0177-3596778"
}];
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ })

/******/ });