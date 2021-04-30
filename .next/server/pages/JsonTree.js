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

module.exports = __webpack_require__("LLV1");


/***/ }),

/***/ "LLV1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// Component returning JSON-string as a tree

/*
 *  default jsonRules for rendering basic types
 */

let jsonRules = [
/* null */
(name, value) => value === null ? __jsx(JsonString, {
  name: name,
  value: "null"
}) : null,
/* function */
(name, value) => typeof value === "function" ? __jsx(JsonFunc, {
  name: name,
  value: value
}) : null,
/* iso date-time */
(name, value) => typeof value === "string" && !isNaN(Date.parse(value)) ? __jsx(JsonDate, {
  name: name,
  value: value
}) : null, //

/* url */
(name, value) => typeof value === "string" && (value.indexOf("http://") === 0 || value.indexOf("https://") === 0 || value.indexOf("www.") === 0) ? __jsx(JsonLink, {
  name: name,
  value: value
}) : null,
/* string */
(name, value) => typeof value === "string" ? __jsx(JsonString, {
  name: name,
  value: value
}) : null,
/* integer */
(name, value) => typeof value === "number" ? __jsx(JsonInteger, {
  name: name,
  value: value
}) : null,
/* boolean */
(name, value) => typeof value === "boolean" ? __jsx(JsonBoolean, {
  name: name,
  value: value
}) : null,
/* iterator */
(name, value, depth) => typeof value === "object" && !Array.isArray(value) && typeof value[Symbol.iterator] === "function" ? __jsx(JsonArray, {
  value: Array.from(value),
  name: name + "[iterable]",
  depth: depth
}) : null,
/* array */
(name, value, depth) => typeof value === "object" && Array.isArray(value) ? __jsx(JsonArray, {
  depth: depth,
  value: value,
  name: name + " [ " + value.length + " ] "
}) : null,
/* object */
(name, value) => typeof value === "object" ? __jsx(JsonObject, {
  value: value,
  name: name + " { " + Object.keys(value).length + " } "
}) : null];
/*
 *   json tree
 */

class Json extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {}; // merge jsonRules with custom data

    jsonRules = Array.prototype.concat(this.props.jsonRules || [], jsonRules); // see if the parameter is json string or js obj

    if (typeof this.props.data === "string") {
      try {
        let obj = JSON.parse(this.props.data);
        this._dataObject = obj;
      } catch (err) {
        throw "Error: cannot convert json string to object. " + err;
        this._dataObject = {};
      }
    } else if (typeof this.props.data === "object") {
      this._dataObject = this.props.data;
    } else {
      throw "Error: Data is not in the expected format. provided data = " + JSON.stringify(this.props.data);
    }
  }

  render() {
    return __jsx("div", {
      className: "Json"
    }, __jsx(KeyValue, _extends({
      name: this.props.title || "",
      value: this._dataObject
    }, this.props)));
  }

}

Json.displayName = "JsonTree";
/*
 *   key-value pairs
 */

const KeyValue = props => {
  let ret;

  for (let i = 0; i < jsonRules.length; i++) {
    let processed = jsonRules[i](props.name, props.value, props.depth);

    if (processed) {
      ret = processed;
      break;
    }
  }

  return ret;
};

KeyValue.displayName = "KeyValue";
/*
 *  HideData panel component
 */

const HideData = props => {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const toggle = e => {
    e.preventDefault();
    setOpen(!open);
  };

  return __jsx("div", {
    className: "Json-Item"
  }, __jsx("div", {
    className: "Json-Key"
  }, __jsx("a", {
    href: "#",
    onClick: toggle,
    className: "HideData-Arrow" + (open ? " Open" : "")
  }, "\u25BC"), __jsx("a", {
    href: "#",
    onClick: toggle
  }, open ? props.title + ":" : props.title.includes("{") ? "{...}" : "[...]")), __jsx("div", {
    className: "HideData-Content Json-Value child-element" + (open ? "" : " Hidden")
  }, props.children));
};

class JsonString extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      show: true,
      hide: false,
      text: null
    });

    _defineProperty(this, "_input", /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])());

    _defineProperty(this, "click", () => {
      this.setState({
        show: false
      });
    });

    _defineProperty(this, "submitHandler", e => {
      e.preventDefault();
      localStorage.setItem("text", JSON.stringify(this._input.current.value));
      this.setState(prevState => ({
        hide: !prevState.hide,
        text: JSON.parse(localStorage.getItem("text"))
      }));
    });

    _defineProperty(this, "inputTag", __jsx("form", {
      onSubmit: this.submitHandler
    }, __jsx("input", {
      ref: this._input,
      type: "text"
    })));
  }

  showText() {
    return this.state.show ? __jsx("span", {
      style: {
        cursor: "pointer"
      },
      className: "Json-String"
    }, '"' + this.props.value + '"', ",") : this.inputTag;
  }

  render() {
    return __jsx("div", {
      className: "Json-Item"
    }, __jsx("div", {
      className: "Json-Key"
    }, this.props.name, " : "), __jsx("div", {
      onClick: this.click,
      className: "Json-Value"
    }, this.state.hide ? __jsx("span", {
      style: {
        color: "green"
      }
    }, "\"", this.state.text, "\"") : this.showText()));
  }

}

JsonString.displayName = "JsonString";

class JsonLink extends JsonString {
  showText() {
    return __jsx("span", {
      className: "Json-String"
    }, "\"", __jsx("a", {
      href: this.props.value,
      target: "_blank"
    }, this.props.value), "\"");
  }

}

JsonLink.displayName = "JsonLink";

class JsonInteger extends JsonString {
  showText() {
    return __jsx("span", {
      className: "Json-Number"
    }, this.props.value);
  }

}

JsonInteger.displayName = "JsonInteger";

class JsonBoolean extends JsonString {
  showText() {
    return __jsx("span", {
      className: "Json-Number"
    }, JSON.stringify(this.props.value));
  }

}

JsonString.displayName = "JsonBoolean";

class JsonDate extends JsonString {
  formatDate(dates) {
    const today = new Date(dates);
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    if (day < 10) return day = "0" + day;
    if (month < 10) return month = "0" + month;
    return day + "." + month + "." + year;
  }

  showText() {
    return __jsx("span", {
      className: "Json-Number"
    }, this.formatDate(this.props.value));
  }

}

JsonDate.displayName = "JsonDate";

class JsonArray extends JsonString {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      depth: this.props.depth,
      color: "#000"
    });

    _defineProperty(this, "handleVisibility", () => this.setState({
      depth: this.state.depth + (this.props.value.length - 1),
      color: "#00f"
    }));
  }

  render() {
    return __jsx(HideData, _extends({}, this.props, {
      title: this.props.name
    }), __jsx("span", {
      className: "array"
    }, "["), this.props.value.slice(0, this.state.depth).map((item, index) => {
      return __jsx(KeyValue, {
        name: index,
        value: item,
        key: item + "-" + index
      });
    }), this.state.depth < this.props.value.length && __jsx("span", {
      className: "more-btn",
      onClick: this.handleVisibility,
      style: {
        color: this.state.color
      },
      title: "Click to expand"
    }, "..."), __jsx("span", {
      className: "array"
    }, "]"));
  }

}

JsonArray.displayName = "JsonArray";

class JsonObject extends JsonString {
  render() {
    return __jsx(HideData, _extends({}, this.props, {
      title: this.props.name
    }), __jsx("span", {
      className: "array"
    }, "{"), Object.keys(this.props.value).map((item, index) => __jsx(KeyValue, {
      name: item,
      value: this.props.value[item],
      key: item + "_" + index
    })), __jsx("span", {
      className: "array"
    }, "}"));
  }

}

JsonObject.displayName = "JsonObject";

class JsonFunc extends JsonString {
  nameHandler() {
    let regExpress = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
    let regName = /([^\s,]+)/g;
    let endPoint = this.props.value.toString().replace(regExpress, "");
    let result = endPoint.slice(endPoint.indexOf("(") + 1, endPoint.indexOf(")")).match(regName);
    if (result === null) result = [];
    return result;
  }

  render() {
    let code = this.props.value.toString().split("\n");
    return __jsx(HideData, _extends({}, this.props, {
      title: this.props.value.name + "(" + this.nameHandler() + ")"
    }), __jsx("div", {
      className: "Json-Item Json-Func"
    }, code.map((each, index) => {
      return __jsx("div", {
        className: "Json-Func-Line",
        key: "each_" + index
      }, each);
    })));
  }

}

JsonFunc.displayName = "JsonFunc";
/* harmony default export */ __webpack_exports__["default"] = (Json);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });