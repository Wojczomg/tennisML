module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/entries.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/entries */ "core-js/library/fn/object/entries");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "/home/wojcz/Desktop/tennisML/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

const axios = __webpack_require__(/*! axios */ "axios");

const brain = __webpack_require__(/*! brain.js */ "brain.js");

const math = __webpack_require__(/*! mathjs */ "mathjs");




const Index = props => {
  const sidepanel = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
  const panels = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);

  function sleep(ms) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(resolve => setTimeout(resolve, ms));
  }

  const clickPanel = async (id, event) => {
    console.log("CLICKED");

    if (event['oddsHome'] && event['oddsAway'] && event['set2']) {
      let st = sidepanel.current.state.events;
      st[id] = event;

      if (_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default()(st).length === 1) {
        const x = panels.current.state;
        x.shrink = true;
        await panels.current.setState(x);
      }

      await sidepanel.current.setState({
        events: st
      });
      sidepanel.current.openPanel(id);
    } else {}
  };

  const expand = () => {
    const x = panels.current.state;
    x.shrink = false;
    panels.current.setState(x);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    setInterval(() => {
      const wrap = async function () {
        await sleep(120000);
        const live = await axios.post('https://us-central1-tennisml.cloudfunctions.net/helloWorld', {
          ids: _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(panels.current.state.events).filter(id => panels.current.state.events[id].status !== 'finished')
        });
        let x = panels.current.state;
        x.events = live.data.finall;
        panels.current.setState(x);

        if (_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default()(sidepanel).length !== 0) {
          let y = sidepanel.current.state.events;

          for (let i of _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(sidepanel.current.state.events)) {
            if (y[i].status !== "finished") {
              y[i] = live.data.finall[i];
            } else {
              delete y[i];
            }
          }

          sidepanel.current.setState({
            events: y
          });
        }
      };

      wrap();
    }, 120000);
  });
  return __jsx("div", {
    className: "jsx-3903673614",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("link", {
    rel: "stylesheet",
    href: "https://www.w3schools.com/w3css/4/w3.css",
    className: "jsx-3903673614",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "3903673614",
    __self: undefined
  }, "body{background:#1a1a1a;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dvamN6L0Rlc2t0b3AvdGVubmlzTUwvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUV5QixBQUc4QixtQkFDbkIiLCJmaWxlIjoiL2hvbWUvd29qY3ovRGVza3RvcC90ZW5uaXNNTC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcclxuY29uc3QgYnJhaW4gPSByZXF1aXJlKCdicmFpbi5qcycpO1xyXG5jb25zdCBtYXRoID0gcmVxdWlyZSgnbWF0aGpzJyk7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmICB9IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcbmNvbnN0IEluZGV4ID0gcHJvcHMgPT57XHJcbiAgY29uc3Qgc2lkZXBhbmVsID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHBhbmVscyA9IHVzZVJlZihudWxsKTtcclxuXHJcblxyXG5cclxuICBmdW5jdGlvbiBzbGVlcChtcykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xpY2tQYW5lbCA9IGFzeW5jIChpZCxldmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJDTElDS0VEXCIpO1xyXG4gICAgaWYgKGV2ZW50WydvZGRzSG9tZSddICYmIGV2ZW50WydvZGRzQXdheSddICYmIGV2ZW50WydzZXQyJ10pe1xyXG4gICAgbGV0IHN0ID0gc2lkZXBhbmVsLmN1cnJlbnQuc3RhdGUuZXZlbnRzO1xyXG4gICAgc3RbaWRdID0gZXZlbnQ7XHJcbiAgICBpZiAoT2JqZWN0LmVudHJpZXMoc3QpLmxlbmd0aCA9PT0gMSl7XHJcbiAgICAgIGNvbnN0IHggPSBwYW5lbHMuY3VycmVudC5zdGF0ZTtcclxuICAgICAgeC5zaHJpbmsgPSB0cnVlO1xyXG4gICAgICBhd2FpdCBwYW5lbHMuY3VycmVudC5zZXRTdGF0ZSh4KVxyXG4gICAgfVxyXG4gICAgYXdhaXQgc2lkZXBhbmVsLmN1cnJlbnQuc2V0U3RhdGUoe2V2ZW50czpzdH0pO1xyXG4gICAgc2lkZXBhbmVsLmN1cnJlbnQub3BlblBhbmVsKGlkKTt9XHJcbiAgICBlbHNlIHt9XHJcbiAgfVxyXG5cclxuICBjb25zdCBleHBhbmQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB4ID0gcGFuZWxzLmN1cnJlbnQuc3RhdGU7XHJcbiAgICAgIHguc2hyaW5rID0gZmFsc2U7XHJcbiAgICAgIHBhbmVscy5jdXJyZW50LnNldFN0YXRlKHgpXHJcbiAgfVxyXG4gIFxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4geyBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICBjb25zdCB3cmFwID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICBhd2FpdCBzbGVlcCgxMjAwMDApO1xyXG4gICAgICBjb25zdCBsaXZlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cHM6Ly91cy1jZW50cmFsMS10ZW5uaXNtbC5jbG91ZGZ1bmN0aW9ucy5uZXQvaGVsbG9Xb3JsZCcsIHtcclxuICAgICAgICBpZHM6IE9iamVjdC5rZXlzKHBhbmVscy5jdXJyZW50LnN0YXRlLmV2ZW50cykuZmlsdGVyKGlkID0+IHBhbmVscy5jdXJyZW50LnN0YXRlLmV2ZW50c1tpZF0uc3RhdHVzICE9PSAnZmluaXNoZWQnKVxyXG4gICAgICB9KVxyXG4gICAgICBcclxuICAgICAgbGV0IHggPSBwYW5lbHMuY3VycmVudC5zdGF0ZTtcclxuICAgICAgeC5ldmVudHMgPSBsaXZlLmRhdGEuZmluYWxsXHJcbiAgICAgIHBhbmVscy5jdXJyZW50LnNldFN0YXRlKHgpO1xyXG4gIFxyXG4gICAgICBpZiAoT2JqZWN0LmVudHJpZXMoc2lkZXBhbmVsKS5sZW5ndGggIT09IDApe1xyXG4gICAgICAgIGxldCB5ID0gc2lkZXBhbmVsLmN1cnJlbnQuc3RhdGUuZXZlbnRzOyBcclxuICAgICAgICBmb3IgKGxldCBpIG9mIE9iamVjdC5rZXlzKHNpZGVwYW5lbC5jdXJyZW50LnN0YXRlLmV2ZW50cykpe1xyXG4gICAgICAgICAgaWYgKHlbaV0uc3RhdHVzICE9PSBcImZpbmlzaGVkXCIpe1xyXG4gICAgICAgICAgICB5W2ldID0gbGl2ZS5kYXRhLmZpbmFsbFtpXVxyXG4gICAgICAgICAgfSBlbHNlIHtkZWxldGUgeVtpXX1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2lkZXBhbmVsLmN1cnJlbnQuc2V0U3RhdGUoe2V2ZW50czp5fSlcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH1cclxuICAgICAgd3JhcCgpO1xyXG4gIH0sMTIwMDAwKVxyXG4gICAgXHJcblxyXG5cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS93M2Nzcy80L3czLmNzc1wiLz4gXHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBib2R5IHsgXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWExYTFhO1xyXG4gICAgICAgICAgfWB9XHJcbiAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ3My1yb3dcIn0+XHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8UGFuZWxzIGxpdmU9e3Byb3BzfSBjbGljaz17Y2xpY2tQYW5lbH0gcmVmPXtwYW5lbHN9Lz5cclxuICAgICAgICA8U2lkZVBhbmVsIHJlZj17c2lkZXBhbmVsfSBsaXZlPXtwcm9wc30gZXhwYW5kPXtleHBhbmR9Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmNsYXNzIFBhbmVscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGV2ZW50czpwcm9wcy5saXZlLmxpdmUsXHJcbiAgICAgIHNocmluazpmYWxzZVxyXG4gICAgfTtcclxuICB9XHJcbiAgXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgY2xzID0gKHRoaXMuc3RhdGUuc2hyaW5rID8gXCJ3My1jb250YWluZXIgdzMtY29sIGw4IFwiIDogXCJ3My1jb250YWluZXIgIFwiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOicjMWExYTFhJ319PlxyXG4gICAgICAgIFxyXG4gICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmV2ZW50cykubWFwKGlkID0+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYga2V5PXtpZH0gc3R5bGU9e3tkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCIsbWluV2lkdGg6XCI0MDBweFwiLHdpZHRoOlwiMjAlXCIsY29sb3I6XCIjMWExYTFhXCJ9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcInczLWNvbnRhaW5lciB3My1tYXJnaW4gdzMtcGFkZGluZyB3My1ob3Zlci1zZXBpYSB3My1jYXJkLTQgdzMtaGlkZS1zbWFsbCB3My1oaWRlLW1lZGl1bVwifSBcclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKT0+e3RoaXMucHJvcHMuY2xpY2soaWQsdGhpcy5zdGF0ZS5ldmVudHNbaWRdKX19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ3My1yb3VuZC14bGFyZ2VcIn0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjY2MyOTAwXCJ9fT4gIFxyXG4gICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcInczLW1hcmdpbi1sZWZ0IHczLWxhcmdlXCJ9Pnt0aGlzLnN0YXRlLmV2ZW50c1tpZF1bJ3RlYW1Ib21lJ119PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcInczLXJpZ2h0IHczLWxhcmdlIHczLW1hcmdpbi1yaWdodFwifT57dGhpcy5zdGF0ZS5ldmVudHNbaWRdWydjdXJyZW50SG9tZSddfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJ3My1tYXJnaW4tbGVmdCB3My1sYXJnZVwifT57dGhpcy5zdGF0ZS5ldmVudHNbaWRdWyd0ZWFtQXdheSddfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJ3My1yaWdodCB3My1sYXJnZSB3My1tYXJnaW4tcmlnaHRcIn0+e3RoaXMuc3RhdGUuZXZlbnRzW2lkXVsnY3VycmVudEF3YXknXX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ3My1jZW50ZXIgdzMtbWFyZ2luLXRvcCB3My10ZXh0LXdoaXRlXCJ9PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJ3My1tYXJnaW4tbGVmdCB3My1sYXJnZVwifT57dGhpcy5zdGF0ZS5ldmVudHNbaWRdWydwZXJpb2QxSG9tZSddfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1widzMtbWFyZ2luLWxlZnQgdzMtbGFyZ2VcIn0+e3RoaXMuc3RhdGUuZXZlbnRzW2lkXVsncGVyaW9kMkhvbWUnXX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcInczLW1hcmdpbi1sZWZ0IHczLWxhcmdlXCJ9Pnt0aGlzLnN0YXRlLmV2ZW50c1tpZF1bJ3BlcmlvZDNIb21lJ119PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widzMtY2VudGVyIHczLXRleHQtd2hpdGVcIn0+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcInczLW1hcmdpbi1sZWZ0IHczLWxhcmdlXCJ9Pnt0aGlzLnN0YXRlLmV2ZW50c1tpZF1bJ3BlcmlvZDFBd2F5J119PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJ3My1tYXJnaW4tbGVmdCB3My1sYXJnZVwifT57dGhpcy5zdGF0ZS5ldmVudHNbaWRdWydwZXJpb2QyQXdheSddfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1widzMtbWFyZ2luLWxlZnQgdzMtbGFyZ2VcIn0+e3RoaXMuc3RhdGUuZXZlbnRzW2lkXVsncGVyaW9kM0F3YXknXX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7KCh0aGlzLnN0YXRlLmV2ZW50c1tpZF1bJ3N0YXR1cyddICE9PSAnZmluaXNoZWQnKSA/ICg8c3BhbiBjbGFzc05hbWU9eyd3My1sZWZ0IHczLXRleHQtcmVkIHczLXhsYXJnZSd9PkxJVkU8L3NwYW4+KSA6ICcnKX1cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsndzMtcmlnaHQgdzMtdGV4dC1ncmVlbiB3My14bGFyZ2UnfT57cHJlZHNXcmFwKG5ldXJhbCh0aGlzLnN0YXRlLmV2ZW50c1tpZF0sdGhpcy5wcm9wcykpfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICApfVxyXG5cclxue09iamVjdC5rZXlzKHRoaXMuc3RhdGUuZXZlbnRzKS5tYXAoaWQgPT5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2lkfSBzdHlsZT17e2NvbG9yOlwiIzFhMWExYVwifX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17XCJ3My1jb250YWluZXIgdzMtbWFyZ2luIHczLXBhZGRpbmcgdzMtaGlkZS1sYXJnZSAgdzMtbW9iaWxlIHczLWhvdmVyLXNlcGlhIHczLWNhcmQtNFwifSBcclxuICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jIChlKT0+e2F3YWl0IHRoaXMucHJvcHMuY2xpY2soaWQsdGhpcy5zdGF0ZS5ldmVudHNbaWRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwyMDAwKX19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ3My1yb3VuZC14bGFyZ2VcIn0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjY2MyOTAwXCJ9fT4gIFxyXG4gICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcInczLW1hcmdpbi1sZWZ0IHczLWxhcmdlXCJ9Pnt0aGlzLnN0YXRlLmV2ZW50c1tpZF1bJ3RlYW1Ib21lJ119PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcInczLXJpZ2h0IHczLWxhcmdlIHczLW1hcmdpbi1yaWdodFwifT57dGhpcy5zdGF0ZS5ldmVudHNbaWRdWydjdXJyZW50SG9tZSddfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJ3My1tYXJnaW4tbGVmdCB3My1sYXJnZVwifT57dGhpcy5zdGF0ZS5ldmVudHNbaWRdWyd0ZWFtQXdheSddfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJ3My1yaWdodCB3My1sYXJnZSB3My1tYXJnaW4tcmlnaHRcIn0+e3RoaXMuc3RhdGUuZXZlbnRzW2lkXVsnY3VycmVudEF3YXknXX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ3My1jZW50ZXIgdzMtbWFyZ2luLXRvcCB3My10ZXh0LXdoaXRlXCJ9PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJ3My1tYXJnaW4tbGVmdCB3My1sYXJnZVwifT57dGhpcy5zdGF0ZS5ldmVudHNbaWRdWydwZXJpb2QxSG9tZSddfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1widzMtbWFyZ2luLWxlZnQgdzMtbGFyZ2VcIn0+e3RoaXMuc3RhdGUuZXZlbnRzW2lkXVsncGVyaW9kMkhvbWUnXX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcInczLW1hcmdpbi1sZWZ0IHczLWxhcmdlXCJ9Pnt0aGlzLnN0YXRlLmV2ZW50c1tpZF1bJ3BlcmlvZDNIb21lJ119PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widzMtY2VudGVyIHczLXRleHQtd2hpdGVcIn0+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcInczLW1hcmdpbi1sZWZ0IHczLWxhcmdlXCJ9Pnt0aGlzLnN0YXRlLmV2ZW50c1tpZF1bJ3BlcmlvZDFBd2F5J119PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJ3My1tYXJnaW4tbGVmdCB3My1sYXJnZVwifT57dGhpcy5zdGF0ZS5ldmVudHNbaWRdWydwZXJpb2QyQXdheSddfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1widzMtbWFyZ2luLWxlZnQgdzMtbGFyZ2VcIn0+e3RoaXMuc3RhdGUuZXZlbnRzW2lkXVsncGVyaW9kM0F3YXknXX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7KCh0aGlzLnN0YXRlLmV2ZW50c1tpZF1bJ3N0YXR1cyddID09PSAnZmluaXNoZWQnKSA/ICg8c3BhbiBjbGFzc05hbWU9eyd3My1sZWZ0IHczLXRleHQtcmVkIHczLXhsYXJnZSd9PkxJVkU8L3NwYW4+KSA6ICcnKX1cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsndzMtcmlnaHQgdzMtdGV4dC1ncmVlbiB3My14bGFyZ2UnfT57cHJlZHNXcmFwKG5ldXJhbCh0aGlzLnN0YXRlLmV2ZW50c1tpZF0sdGhpcy5wcm9wcykpfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICApfVxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG59XHJcblxyXG5jbGFzcyBTaWRlUGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBldmVudHM6e31cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAgb3BlblBhbmVsID0gKGlkKSA9PiB7XHJcbiAgICB2YXIgaTtcclxuICAgIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNpZGVQYW5lbFwiKTtcclxuICAgIHZhciB5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnRzJyk7XHJcbiAgICB2YXIgeiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpcnN0YnRuJyk7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xyXG4gICAgICB4W2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgeVtpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICAgIHpbaV0uY2xhc3NMaXN0ID0gXCJ3My1idXR0b24gZmlyc3RidG5cIjtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQrJ2J0bicpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2NjMjkwMFwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQrJ2ZpcnN0JykuY2xhc3NMaXN0ID0gXCJ3My1zaG93LWlubGluZS1ibG9jayBmaXJzdGJ0blwiO1xyXG4gIH1cclxuICBcclxuXHJcbiAgcmVuZGVyKCl7XHJcbiAgICBjb25zdCBzdHlsZSA9IHt9O1xyXG4gICAgY29uc3QgY2xhc3NlcyA9ICd3My1jb250YWluZXIgICcrKE9iamVjdC5lbnRyaWVzKHRoaXMuc3RhdGUuZXZlbnRzKS5sZW5ndGggPT09IDAgPyAnJzogJ3czLWNvbCBsNCcpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9IHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInczLWJhciB3My10ZXh0LXdoaXRlIHczLXBhZGRpbmctMzJcIiBzdHlsZT17KE9iamVjdC5lbnRyaWVzKHRoaXMuc3RhdGUuZXZlbnRzKS5sZW5ndGggPT09IDAgPyB7ZGlzcGxheTonbm9uZSd9OiB7fSl9PlxyXG4gICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmV2ZW50cykubWFwKGlkID0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidzMtYmFyLWl0ZW0gdzMtcm91bmQteHhsYXJnZSBidHNcIiBpZD17W2lkXSsnYnRuJ30+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3czLWJ1dHRvbiBmaXJzdGJ0bid9IGlkPXtbaWRdKydmaXJzdCd9IG9uQ2xpY2s9eygpPT50aGlzLm9wZW5QYW5lbChpZCl9PntpZH08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsndzMtYnV0dG9uJ30gb25DbGljaz17YXN5bmMgKGUpPT57XHJcbiAgICAgICAgICAgIGxldCB4ID0gdGhpcy5zdGF0ZS5ldmVudHM7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB4W2lkXTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXRTdGF0ZSh7ZXZlbnRzOnh9KTtcclxuICAgICAgICAgICAgKE9iamVjdC5lbnRyaWVzKHRoaXMuc3RhdGUuZXZlbnRzKS5sZW5ndGggPT09IDAgPyB0aGlzLnByb3BzLmV4cGFuZCgpIDogdGhpcy5vcGVuUGFuZWwoT2JqZWN0LmtleXModGhpcy5zdGF0ZS5ldmVudHMpWzBdKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9Plg8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2Pil9XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmV2ZW50cykubWFwKGlkID0+IFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInczLWNhcmQtNCB3My10ZXh0LXdoaXRlIHczLW1hcmdpbiB3My1wYWRkaW5nLTI0IHNpZGVQYW5lbFwifSBpZD17aWR9IHN0eWxlPXt7ZGlzcGxheTonbm9uZSd9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInczLXhsYXJnZSB3My1jZW50ZXJcIn0+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmV2ZW50c1tpZF0udGVhbUhvbWV9PHNwYW4gc3R5bGU9e3tjb2xvcjpcIiMxYTFhMWFcIn19Pi0tLS0tLS08L3NwYW4+e3RoaXMuc3RhdGUuZXZlbnRzW2lkXS50ZWFtQXdheX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widzMtcm93IHczLXBhZGRpbmdcIn0gPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInczLWhhbGYgdzMtY2VudGVyXCJ9ID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInczLXhsYXJnZSB3My1wYWRkaW5nLTQ4XCJ9PlNldCAxPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ3My1yb3cgdzMtcGFkZGluZyBcIn0gPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ3My1oYWxmIHczLWRpc3BsYXktY29udGFpbmVyXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmV2ZW50c1tpZF0uc2V0MS5tYXAoZ2VtPT4oPGRpdiA+e2dlbVswXX0uIDwvZGl2PikpLnJldmVyc2UoKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInczLWhhbGYgdzMtZGlzcGxheS1jb250YWluZXJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXZlbnRzW2lkXS5zZXQxLm1hcChnZW09Pig8ZGl2PntnZW1bMV19LXtnZW1bMl19PC9kaXY+KSkucmV2ZXJzZSgpfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInczLWhhbGYgdzMtY2VudGVyXCJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInczLXhsYXJnZSB3My1wYWRkaW5nLTQ4XCJ9PlNldCAyPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widzMtcm93IHczLXBhZGRpbmdcIn0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInczLWhhbGYgXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmV2ZW50c1tpZF0uc2V0Mi5tYXAoZ2VtPT4oPGRpdj57Z2VtWzBdfS4gPC9kaXY+KSkucmV2ZXJzZSgpfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widzMtaGFsZiBcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXZlbnRzW2lkXS5zZXQyLm1hcChnZW09Pig8ZGl2PntnZW1bMV19LXtnZW1bMl19PC9kaXY+KSkucmV2ZXJzZSgpfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ3My1wYWRkaW5nLWxhcmdlIHczLXJvd1wifT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widzMtaGFsZlwifT5cclxuICAgICAgICAgICAge25ldXJhbCh0aGlzLnN0YXRlLmV2ZW50c1tpZF0sdGhpcy5wcm9wcykubWFwKHByZWQ9Pig8ZGl2IGNsYXNzTmFtZT17XCJ3My1wYWRkaW5nXCJ9PntwcmVkWzFdfS4geyhwcmVkWzBdKjEwMCkudG9TdHJpbmcoKSsnJSd9PC9kaXY+KSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ3My1oYWxmIHczLXh4bGFyZ2VcIn0+XHJcbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXZlbnRzW2lkXS5zdGF0dXN9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxufVxyXG5cclxuXHJcbmNvbnN0IG5ldXJhbCA9IChtYXRjaCxwcm9wcykgPT4ge1xyXG4gIGlmIChtYXRjaFsnb2Rkc0hvbWUnXSAmJiBtYXRjaFsnb2Rkc0F3YXknXSAmJiBtYXRjaFsnc2V0MiddKXtcclxuICAgIGxldCBzYW1wbGUgPSBbbWF0Y2gucGVyaW9kMUhvbWUsbWF0Y2gucGVyaW9kMUF3YXksMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDBdO1xyXG4gICAgZm9yIChsZXQgZ2VtIG9mIG1hdGNoLnNldDEpe1xyXG4gICAgICBpZiAoZ2VtWzJdID09PSAnMCcgJiYgZ2VtWzNdID09PSAxKXtzYW1wbGVbMl0gPSBzYW1wbGVbMl0rMX1cclxuICAgICAgaWYgKGdlbVsyXSA9PT0gJzE1JyAmJiBnZW1bM10gPT09IDEpe3NhbXBsZVszXSA9IHNhbXBsZVszXSsxfVxyXG4gICAgICBpZiAoZ2VtWzJdID09PSAnMzAnICYmIGdlbVszXSA9PT0gMSl7c2FtcGxlWzRdID0gc2FtcGxlWzRdKzF9XHJcbiAgICAgIGlmIChnZW1bMl0gPT09ICc0MCcgJiYgZ2VtWzNdID09PSAxKXtzYW1wbGVbNV0gPSBzYW1wbGVbNV0rMX1cclxuXHJcbiAgICAgIGlmIChnZW1bMV0gPT09ICcwJyAmJiBnZW1bM10gPT09IDIpe3NhbXBsZVs2XSA9IHNhbXBsZVs2XSsxfVxyXG4gICAgICBpZiAoZ2VtWzFdID09PSAnMTUnICYmIGdlbVszXSA9PT0gMil7c2FtcGxlWzddID0gc2FtcGxlWzddKzF9XHJcbiAgICAgIGlmIChnZW1bMV0gPT09ICczMCcgJiYgZ2VtWzNdID09PSAyKXtzYW1wbGVbOF0gPSBzYW1wbGVbOF0rMX1cclxuICAgICAgaWYgKGdlbVsxXSA9PT0gJzQwJyAmJiBnZW1bM10gPT09IDIpe3NhbXBsZVs5XSA9IHNhbXBsZVs5XSsxfVxyXG5cclxuICAgICAgaWYgKGdlbVszXSAhPT0gZ2VtWzRdICYmIGdlbVs0XSA9PT0gMSl7c2FtcGxlWzEwXSA9IHNhbXBsZVsxMF0rMX1cclxuICAgICAgaWYgKGdlbVszXSAhPT0gZ2VtWzRdICYmIGdlbVs0XSA9PT0gMil7c2FtcGxlWzExXSA9IHNhbXBsZVsxMV0rMX1cclxuICAgIH1cclxuICAgIHNhbXBsZVsxMl0gPSBtYXRjaC5vZGRzSG9tZTtcclxuICAgIHNhbXBsZVsxM10gPSBtYXRjaC5vZGRzQXdheTtcclxuICAgIGNvbnN0IHNjYWxlID0gWzAuMTQyODU3MTQsIDAuMTQyODU3MTQsIDAuMiwgMC4yLCAwLjIsIDAuMTY2NjY2LCAwLjIsIFxyXG4gICAgICAwLjE2NjY2LCAwLjI1LCAwLjE2NjY2NiwgMC4yLCAwLjIsIDAuMDQsIDAuMDMwMzAzMDNdO1xyXG4gICAgY29uc3QgbWluXyA9IFswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwtMC4wNCwtMC4wMzAzMDMwM107XHJcbiAgICBjb25zdCBzYW1wbGVTY2FsZWQgPSBtYXRoLmFkZChtYXRoLmRvdE11bHRpcGx5KHNhbXBsZSxzY2FsZSksbWluXyk7XHJcbiAgICBjb25zdCBuZXQgPSBuZXcgYnJhaW4uTmV1cmFsTmV0d29yaygpO1xyXG4gICAgY29uc3QgcHJlZHMgPSBwcm9wcy5saXZlLm5ldHMubWFwKG15bmV0ID0+IHtcclxuICAgICAgY29uc3QgbmV0ID0gbmV3IGJyYWluLk5ldXJhbE5ldHdvcmsoKTtcclxuICAgICAgbXluZXRbMF0udHJhaW5PcHRzLnRpbWVvdXQgPSBJbmZpbml0eTtcclxuICAgICAgbmV0LmZyb21KU09OKG15bmV0WzBdKTtcclxuICAgICAgcmV0dXJuIFttYXRoLnJvdW5kKG5ldC5ydW4oc2FtcGxlU2NhbGVkKVswXSwyKSxteW5ldFsxXV07XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybihwcmVkcyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgcHJlZHNXcmFwID0gKHByZWRzKSA9PiB7XHJcbiAgaWYgKHByZWRzKSB7XHJcbiAgICBjb25zdCBtYXggPSBNYXRoLm1heCguLi5wcmVkcy5tYXAoaT0+aVswXSkpO1xyXG4gICAgY29uc3QgaW5kZXggPSBwcmVkcy5tYXAoaT0+aVswXSkuaW5kZXhPZihtYXgpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gKG1heCoxMDApLnRvU3RyaW5nKCkrJyUnKycgICcrcHJlZHMubWFwKGk9PmlbMV0pW2luZGV4XTtcclxuICAgIHJldHVybiggIHJlc3VsdCApXHJcbiAgfSBlbHNlIHtyZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtcInczLXRleHQtd2hpdGUgdzMtbGFyZ2VcIn0+Tm90IGVub3VnaCBkYXRhPC9zcGFuPn1cclxufSBcclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRFdmVudHMoKSB7XHJcblxyXG4gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly93d3cuc29mYXNjb3JlLmNvbS90ZW5uaXMvbGl2ZXNjb3JlL2pzb24nLHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdIb3N0JzogJ3d3dy5zb2Zhc2NvcmUuY29tJyxcclxuICAgICAgICAnVXNlci1BZ2VudCc6ICdNb3ppbGxhLzUuMCAoV2luZG93cyBOVCA2LjE7IFdpbjY0OyB4NjQ7IHJ2OjY3LjApIEdlY2tvLzIwMTAwMTAxIEZpcmVmb3gvNjcuMCcsXHJcbiAgICAgICAgJ0FjY2VwdCc6ICcqLyonLFxyXG4gICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiAncGwsZW4tVVM7cT0wLjcsZW47cT0wLjMnLFxyXG4gICAgICAgICdBY2NlcHQtRW5jb2RpbmcnOiAnZ3ppcCcsXHJcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnUmVmZXJlcic6ICdodHRwczovL3d3dy5zb2Zhc2NvcmUuY29tL3BsL3RlbmlzL2xpdmVzY29yZScsXHJcbiAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxyXG4gICAgICAgICdDb25uZWN0aW9uJzona2VlcC1hbGl2ZScsXHJcbiAgICAgICAgJ1RFJzogJ1RyYWlsZXJzJ1xyXG4gIFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgICAvLyBoYW5kbGUgc3VjY2Vzc1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgIGNvbnN0IGlkcyA9IHJlc3BvbnNlLmRhdGFbJ3Nwb3J0SXRlbSddWyd0b3VybmFtZW50cyddLm1hcCh4ID0+IHhbJ2V2ZW50cyddLm1hcCh5ID0+IHlbJ2lkJ10pKTtcclxuICAgIGNvbnNvbGUubG9nKGlkcy5yZWR1Y2UoKGlkcyxpZCkgPT4gaWRzLmNvbmNhdChpZCkpKTtcclxuICAgIGNvbnN0IGNvZGVzID0gaWRzLnJlZHVjZSgoaWRzLGlkKSA9PiBpZHMuY29uY2F0KGlkKSk7XHJcblxyXG4gICAgLy8gY29uc3QgY29kZXMgPSBbIDg0MTA4OTQsXHJcbiAgICAvLyAgIDg0MTAzNzEsXHJcbiAgICAvLyAgIDg0MTAzODAsXHJcbiAgICAvLyAgIDg0MTAyMjgsXHJcbiAgICAvLyAgIDg0MTE2ODYsXHJcbiAgICAvLyAgIDg0MTE2ODUsXHJcbiAgICAvLyAgIDg0MTIxNzgsXHJcbiAgICAvLyAgIDg0MTE0OTQsXHJcbiAgICAvLyAgIDg0MTE0OTUsXHJcbiAgICAvLyAgIDg0MTE1MDEgXTtcclxuXHJcbiAgICBsZXQgZmluYWxsID0ge307XHJcbiAgICBcclxuICAgIFxyXG4gICAgZm9yIChsZXQgaWQgb2YgY29kZXMpIHtcclxuICAgICAgY29uc3QgZXZlbnQgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vd3d3LnNvZmFzY29yZS5jb20vZXZlbnQvJHtpZH0vanNvbmAse1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnSG9zdCc6ICd3d3cuc29mYXNjb3JlLmNvbScsXHJcbiAgICAgICAgJ1VzZXItQWdlbnQnOiAnTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgNi4xOyBXaW42NDsgeDY0OyBydjo2Ny4wKSBHZWNrby8yMDEwMDEwMSBGaXJlZm94LzY3LjAnLFxyXG4gICAgICAgICdBY2NlcHQnOiAnKi8qJyxcclxuICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogJ3BsLGVuLVVTO3E9MC43LGVuO3E9MC4zJyxcclxuICAgICAgICAnQWNjZXB0LUVuY29kaW5nJzogJ2d6aXAnLFxyXG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxyXG4gICAgICAgICdDb25uZWN0aW9uJzona2VlcC1hbGl2ZScsXHJcbiAgICAgICAgJ1RFJzogJ1RyYWlsZXJzJ1xyXG4gICAgICAgIH19XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhldmVudC5zdGF0dXMpO1xyXG4gICAgICBjb25zdCByID0gZXZlbnQuZGF0YTtcclxuICAgICAgY29uc29sZS5sb2cocltcImV2ZW50XCJdW1wic3RhdHVzXCJdW1widHlwZVwiXSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJbXCJldmVudFwiXVtcImhvbWVUZWFtXCJdW1wibmFtZVwiXSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJbXCJldmVudFwiXVtcImF3YXlUZWFtXCJdW1wibmFtZVwiXSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJbXCJldmVudFwiXVtcImhvbWVTY29yZVwiXVtcImN1cnJlbnRcIl0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhyW1wiZXZlbnRcIl1bXCJhd2F5U2NvcmVcIl1bXCJjdXJyZW50XCJdKTtcclxuICAgICAgY29uc29sZS5sb2cocltcImV2ZW50XCJdW1wiaG9tZVNjb3JlXCJdW1wicGVyaW9kMVwiXSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJbXCJldmVudFwiXVtcImF3YXlTY29yZVwiXVtcInBlcmlvZDFcIl0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhyW1wiZXZlbnRcIl1bXCJob21lU2NvcmVcIl1bXCJwZXJpb2QyXCJdKTtcclxuICAgICAgY29uc29sZS5sb2cocltcImV2ZW50XCJdW1wiYXdheVNjb3JlXCJdW1wicGVyaW9kMlwiXSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJbXCJldmVudFwiXVtcImhvbWVTY29yZVwiXVtcInBlcmlvZDNcIl0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhyW1wiZXZlbnRcIl1bXCJhd2F5U2NvcmVcIl1bXCJwZXJpb2QzXCJdKTtcclxuICAgICAgaWYgKHJbJ3BvaW50QnlQb2ludCddLmxlbmd0aCAhPT0gMCl7XHJcbiAgICAgICAgZm9yIChsZXQgc2V0IG9mIHJbJ3BvaW50QnlQb2ludCddLnJldmVyc2UoKSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coc2V0WydzZXQnXSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhzZXRbJ2dhbWVzJ10ucmV2ZXJzZSgpLmZpbHRlcigoZ2FtZSkgPT4gZ2FtZVsnc2NvcmUnXSlcclxuICAgICAgICAgIC5tYXAoZ2FtZSA9PiBbXHJcbiAgICAgICAgICAgIGdhbWVbJ2dhbWUnXSxcclxuICAgICAgICAgICAgZ2FtZVsncG9pbnRzJ10uc2xpY2UoLTEpWzBdWydob21lUG9pbnQnXSxcclxuICAgICAgICAgICAgZ2FtZVsncG9pbnRzJ10uc2xpY2UoLTEpWzBdWydhd2F5UG9pbnQnXSxcclxuICAgICAgICAgICAgZ2FtZVsnc2NvcmUnXVsnc2VydmluZyddLFxyXG4gICAgICAgICAgICBnYW1lWydzY29yZSddWydzY29yaW5nJ11dXHJcbiAgICAgICAgICAgICkpO1xyXG4gICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7Y29uc29sZS5sb2coXCJCUkFLIC0tLS0tLS0tLS0tLS0tLS1cIil9XHJcblxyXG5cclxuICAgICAgY29uc3Qgb2RkcyA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkuc29mYXNjb3JlLmNvbS9hcGkvdjEvZXZlbnQvJHtpZH0vb2Rkcy8xL2FsbGAse1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgJ0hvc3QnOiAnYXBpLnNvZmFzY29yZS5jb20nLFxyXG4gICAgICAgICAgICAgICdVc2VyLUFnZW50JzogJ01vemlsbGEvNS4wIChXaW5kb3dzIE5UIDYuMTsgV2luNjQ7IHg2NDsgcnY6NjcuMCkgR2Vja28vMjAxMDAxMDEgRmlyZWZveC82Ny4wJyxcclxuICAgICAgICAgICAgICAnQWNjZXB0JzogJyovKicsXHJcbiAgICAgICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6ICdwbCxlbi1VUztxPTAuNyxlbjtxPTAuMycsXHJcbiAgICAgICAgICAgICAgJ0FjY2VwdC1FbmNvZGluZyc6ICdnemlwJyxcclxuICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyxcclxuICAgICAgICAgICAgICAnQ29ubmVjdGlvbic6J2tlZXAtYWxpdmUnLFxyXG4gICAgICAgICAgICAgICdURSc6ICdUcmFpbGVycydcclxuICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAvLyAgaWYgKG9kZHMuc3RhdHVzID09PSAyMDAgJiYgb2Rkcy5kYXRhWydtYXJrZXRzJ10ubGVuZ3RoICE9PSAwKSB7IGNvbnNvbGUubG9nKG9kZHMuc3RhdHVzKTtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyhldmFsKG9kZHMuZGF0YVsnbWFya2V0cyddWzBdWydjaG9pY2VzJ11bMF1bJ2ZyYWN0aW9uYWxWYWx1ZSddKSsxKTtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyhldmFsKG9kZHMuZGF0YVsnbWFya2V0cyddWzBdWydjaG9pY2VzJ11bMV1bJ2ZyYWN0aW9uYWxWYWx1ZSddKSsxKTt9XHJcblxyXG4gICAgICAgIGZpbmFsbFtgJHtpZH1gXSA9IHtcclxuICAgICAgICAgICdzdGF0dXMnOiByW1wiZXZlbnRcIl1bXCJzdGF0dXNcIl1bXCJ0eXBlXCJdLFxyXG4gICAgICAgICAgJ3RlYW1Ib21lJzogcltcImV2ZW50XCJdW1wiaG9tZVRlYW1cIl1bXCJuYW1lXCJdLFxyXG4gICAgICAgICAgJ3RlYW1Bd2F5JzogcltcImV2ZW50XCJdW1wiYXdheVRlYW1cIl1bXCJuYW1lXCJdLFxyXG4gICAgICAgICAgJ2N1cnJlbnRIb21lJzogcltcImV2ZW50XCJdW1wiaG9tZVNjb3JlXCJdW1wiY3VycmVudFwiXSxcclxuICAgICAgICAgICdjdXJyZW50QXdheSc6IHJbXCJldmVudFwiXVtcImF3YXlTY29yZVwiXVtcImN1cnJlbnRcIl0sXHJcbiAgICAgICAgICAncGVyaW9kMUhvbWUnOiByW1wiZXZlbnRcIl1bXCJob21lU2NvcmVcIl1bXCJwZXJpb2QxXCJdLFxyXG4gICAgICAgICAgJ3BlcmlvZDFBd2F5JzogcltcImV2ZW50XCJdW1wiYXdheVNjb3JlXCJdW1wicGVyaW9kMVwiXSxcclxuICAgICAgICAgICdwZXJpb2QySG9tZSc6IHJbXCJldmVudFwiXVtcImhvbWVTY29yZVwiXVtcInBlcmlvZDJcIl0sXHJcbiAgICAgICAgICAncGVyaW9kMkF3YXknOiByW1wiZXZlbnRcIl1bXCJhd2F5U2NvcmVcIl1bXCJwZXJpb2QyXCJdLFxyXG4gICAgICAgICAgJ3BlcmlvZDNIb21lJzogcltcImV2ZW50XCJdW1wiaG9tZVNjb3JlXCJdW1wicGVyaW9kM1wiXSxcclxuICAgICAgICAgICdwZXJpb2QzQXdheSc6IHJbXCJldmVudFwiXVtcImF3YXlTY29yZVwiXVtcInBlcmlvZDNcIl0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHJbJ3BvaW50QnlQb2ludCddLmxlbmd0aCAhPT0gMCl7XHJcbiAgICAgICAgICBmb3IgKGxldCBzZXQgb2YgclsncG9pbnRCeVBvaW50J10ucmV2ZXJzZSgpKSB7XHJcbiAgICAgICAgICAgIGZpbmFsbFtgJHtpZH1gXVsnc2V0Jysoc2V0WydzZXQnXSldID0gc2V0WydnYW1lcyddLnJldmVyc2UoKVxyXG4gICAgICAgICAgICAuZmlsdGVyKChnYW1lKSA9PiBnYW1lWydzY29yZSddKVxyXG4gICAgICAgICAgICAubWFwKGdhbWUgPT4gW1xyXG4gICAgICAgICAgICAgIGdhbWVbJ2dhbWUnXSxcclxuICAgICAgICAgICAgICBnYW1lWydwb2ludHMnXS5zbGljZSgtMSlbMF1bJ2hvbWVQb2ludCddLFxyXG4gICAgICAgICAgICAgIGdhbWVbJ3BvaW50cyddLnNsaWNlKC0xKVswXVsnYXdheVBvaW50J10sXHJcbiAgICAgICAgICAgICAgZ2FtZVsnc2NvcmUnXVsnc2VydmluZyddLFxyXG4gICAgICAgICAgICAgIGdhbWVbJ3Njb3JlJ11bJ3Njb3JpbmcnXV1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIGlmIChvZGRzLnN0YXR1cyA9PT0gMjAwICYmIG9kZHMuZGF0YVsnbWFya2V0cyddLmxlbmd0aCAhPT0gMCl7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBmaW5hbGxbYCR7aWR9YF1bJ29kZHNIb21lJ10gPSBldmFsKFxyXG4gICAgICAgICAgICAgIG9kZHMuZGF0YVsnbWFya2V0cyddWzBdWydjaG9pY2VzJ11bMF1bJ2ZyYWN0aW9uYWxWYWx1ZSddKSsxO1xyXG4gICAgICAgICAgICBmaW5hbGxbYCR7aWR9YF1bJ29kZHNBd2F5J10gPSBldmFsKFxyXG4gICAgICAgICAgICAgIG9kZHMuZGF0YVsnbWFya2V0cyddWzBdWydjaG9pY2VzJ11bMV1bJ2ZyYWN0aW9uYWxWYWx1ZSddKSsxO31cclxuICAgICAgICAgICAgICBjYXRjaCB7fVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgfTtcclxuICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhmaW5hbGwpO1xyXG4gICAgY29uc3QgZnMgPSBldmFsKFwicmVxdWlyZSgnZnMnKVwiKTtcclxuICAgIGxldCBuZXRzID0gW107XHJcbiAgICBmb3IgKGxldCBpIG9mIFtcclxuICAgICAgWycxMDAwMDAwMCcsJzQwOjAnXSxcclxuICAgICAgWycwMTAwMDAwMCcsJzQwOjE1J10sXHJcbiAgICAgIFsnMDAxMDAwMDAnLCc0MDozMCddLFxyXG4gICAgICBbJzAwMDEwMDAwJywnNDA6NDAnXSxcclxuICAgICAgWycwMDAwMTAwMCcsJzA6NDAnXSxcclxuICAgICAgWycwMDAwMDEwMCcsJzE1OjQwJ10sXHJcbiAgICAgIFsnMDAwMDAwMTAnLCczMDo0MCddLFxyXG4gICAgICBbJzAwMDAwMDAxJywnNDA6NDAnXV0pe1xyXG4gICAgICBsZXQgcmF3ZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhgbmV0cy9uZXQke2lbMF19Lmpzb25gKTtcclxuICAgICAgbGV0IG5ldDEgPSBKU09OLnBhcnNlKHJhd2RhdGEpO1xyXG4gICAgICBuZXQxLnRyYWluT3B0cy50aW1lb3V0ID0gSW5maW5pdHk7XHJcbiAgICAgIGNvbnNvbGUubG9nKG5ldDEudHJhaW5PcHRzLnRpbWVvdXQpXHJcbiAgICAgIG5ldHMucHVzaChbbmV0MSxpWzFdXSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbGl2ZTpmaW5hbGwsXHJcbiAgICAgIG5ldHM6bmV0c307XHJcbn1cclxuXHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBnZXRFdmVudHM7XHJcblxyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuICAiXX0= */\n/*@ sourceURL=/home/wojcz/Desktop/tennisML/pages/index.js */"), __jsx("div", {
    className: "jsx-3903673614" + " " + "w3-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx(Panels, {
    live: props,
    click: clickPanel,
    ref: panels,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }), __jsx(SidePanel, {
    ref: sidepanel,
    live: props,
    expand: expand,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  })));
};

class Panels extends react__WEBPACK_IMPORTED_MODULE_5___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: props.live.live,
      shrink: false
    };
  }

  render() {
    const cls = this.state.shrink ? "w3-container w3-col l8 " : "w3-container  ";
    return __jsx("div", {
      className: cls,
      style: {
        backgroundColor: '#1a1a1a'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(this.state.events).map(id => __jsx("div", {
      key: id,
      style: {
        display: "inline-block",
        minWidth: "400px",
        width: "20%",
        color: "#1a1a1a"
      },
      className: "w3-container w3-margin w3-padding w3-hover-sepia w3-card-4 w3-hide-small w3-hide-medium",
      onClick: e => {
        this.props.click(id, this.state.events[id]);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, __jsx("div", {
      className: "w3-round-xlarge",
      style: {
        backgroundColor: "#cc2900"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, __jsx("span", {
      className: "w3-margin-left w3-large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, this.state.events[id]['teamHome']), __jsx("span", {
      className: "w3-right w3-large w3-margin-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, this.state.events[id]['currentHome'])), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx("span", {
      className: "w3-margin-left w3-large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, this.state.events[id]['teamAway']), __jsx("span", {
      className: "w3-right w3-large w3-margin-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, this.state.events[id]['currentAway']))), __jsx("div", {
      className: "w3-center w3-margin-top w3-text-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, __jsx("span", {
      className: "w3-margin-left w3-large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, this.state.events[id]['period1Home']), __jsx("span", {
      className: "w3-margin-left w3-large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, this.state.events[id]['period2Home']), __jsx("span", {
      className: "w3-margin-left w3-large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, this.state.events[id]['period3Home'])), __jsx("div", {
      className: "w3-center w3-text-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, __jsx("span", {
      className: "w3-margin-left w3-large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, this.state.events[id]['period1Away']), __jsx("span", {
      className: "w3-margin-left w3-large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, this.state.events[id]['period2Away']), __jsx("span", {
      className: "w3-margin-left w3-large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, this.state.events[id]['period3Away'])), this.state.events[id]['status'] !== 'finished' ? __jsx("span", {
      className: 'w3-left w3-text-red w3-xlarge',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, "LIVE") : '', __jsx("span", {
      className: 'w3-right w3-text-green w3-xlarge',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, predsWrap(neural(this.state.events[id], this.props))))), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(this.state.events).map(id => __jsx("div", {
      key: id,
      style: {
        color: "#1a1a1a"
      },
      className: "w3-container w3-margin w3-padding w3-hide-large  w3-mobile w3-hover-sepia w3-card-4",
      onClick: async e => {
        await this.props.click(id, this.state.events[id]);
        window.scrollBy(0, 2000);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, __jsx("div", {
      className: "w3-round-xlarge",
      style: {
        backgroundColor: "#cc2900"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, __jsx("span", {
      className: "w3-margin-left w3-large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, this.state.events[id]['teamHome']), __jsx("span", {
      className: "w3-right w3-large w3-margin-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, this.state.events[id]['currentHome'])), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, __jsx("span", {
      className: "w3-margin-left w3-large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, this.state.events[id]['teamAway']), __jsx("span", {
      className: "w3-right w3-large w3-margin-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, this.state.events[id]['currentAway']))), __jsx("div", {
      className: "w3-center w3-margin-top w3-text-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, __jsx("span", {
      className: "w3-margin-left w3-large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, this.state.events[id]['period1Home']), __jsx("span", {
      className: "w3-margin-left w3-large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, this.state.events[id]['period2Home']), __jsx("span", {
      className: "w3-margin-left w3-large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, this.state.events[id]['period3Home'])), __jsx("div", {
      className: "w3-center w3-text-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, __jsx("span", {
      className: "w3-margin-left w3-large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, this.state.events[id]['period1Away']), __jsx("span", {
      className: "w3-margin-left w3-large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, this.state.events[id]['period2Away']), __jsx("span", {
      className: "w3-margin-left w3-large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, this.state.events[id]['period3Away'])), this.state.events[id]['status'] === 'finished' ? __jsx("span", {
      className: 'w3-left w3-text-red w3-xlarge',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, "LIVE") : '', __jsx("span", {
      className: 'w3-right w3-text-green w3-xlarge',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, predsWrap(neural(this.state.events[id], this.props))))));
  }

}

class SidePanel extends react__WEBPACK_IMPORTED_MODULE_5___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "openPanel", id => {
      var i;
      var x = document.getElementsByClassName("sidePanel");
      var y = document.getElementsByClassName('bts');
      var z = document.getElementsByClassName('firstbtn');

      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        y[i].style.backgroundColor = "transparent";
        z[i].classList = "w3-button firstbtn";
      }

      document.getElementById(id).style.display = "block";
      document.getElementById(id + 'btn').style.backgroundColor = "#cc2900";
      document.getElementById(id + 'first').classList = "w3-show-inline-block firstbtn";
    });

    this.state = {
      events: {}
    };
  }

  render() {
    const style = {};
    const classes = 'w3-container  ' + (_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default()(this.state.events).length === 0 ? '' : 'w3-col l4');
    return __jsx("div", {
      className: classes,
      style: style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: this
    }, __jsx("div", {
      class: "w3-bar w3-text-white w3-padding-32",
      style: _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default()(this.state.events).length === 0 ? {
        display: 'none'
      } : {},
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(this.state.events).map(id => __jsx("div", {
      class: "w3-bar-item w3-round-xxlarge bts",
      id: [id] + 'btn',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }, __jsx("div", {
      className: 'w3-button firstbtn',
      id: [id] + 'first',
      onClick: () => this.openPanel(id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    }, id), __jsx("div", {
      className: 'w3-button',
      onClick: async e => {
        let x = this.state.events;
        delete x[id];
        await this.setState({
          events: x
        });
        _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default()(this.state.events).length === 0 ? this.props.expand() : this.openPanel(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(this.state.events)[0]);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, "X")))), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(this.state.events).map(id => __jsx("div", {
      className: "w3-card-4 w3-text-white w3-margin w3-padding-24 sidePanel",
      id: id,
      style: {
        display: 'none'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }, __jsx("div", {
      className: "w3-xlarge w3-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, this.state.events[id].teamHome, __jsx("span", {
      style: {
        color: "#1a1a1a"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }, "-------"), this.state.events[id].teamAway), __jsx("div", {
      className: "w3-row w3-padding",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      },
      __self: this
    }, __jsx("div", {
      className: "w3-half w3-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226
      },
      __self: this
    }, __jsx("div", {
      className: "w3-xlarge w3-padding-48",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }, "Set 1"), __jsx("div", {
      className: "w3-row w3-padding ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    }, __jsx("div", {
      className: "w3-half w3-display-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }, this.state.events[id].set1.map(gem => __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    }, gem[0], ". ")).reverse()), __jsx("div", {
      className: "w3-half w3-display-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      },
      __self: this
    }, this.state.events[id].set1.map(gem => __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233
      },
      __self: this
    }, gem[1], "-", gem[2])).reverse()))), __jsx("div", {
      className: "w3-half w3-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    }, __jsx("div", {
      className: "w3-xlarge w3-padding-48",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    }, "Set 2"), __jsx("div", {
      className: "w3-row w3-padding",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      },
      __self: this
    }, __jsx("div", {
      className: "w3-half ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: this
    }, this.state.events[id].set2.map(gem => __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }, gem[0], ". ")).reverse()), __jsx("div", {
      className: "w3-half ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    }, this.state.events[id].set2.map(gem => __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      },
      __self: this
    }, gem[1], "-", gem[2])).reverse())))), __jsx("div", {
      className: "w3-padding-large w3-row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249
      },
      __self: this
    }, __jsx("div", {
      className: "w3-half",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250
      },
      __self: this
    }, neural(this.state.events[id], this.props).map(pred => __jsx("div", {
      className: "w3-padding",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251
      },
      __self: this
    }, pred[1], ". ", (pred[0] * 100).toString() + '%'))), __jsx("div", {
      className: "w3-half w3-xxlarge",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
      },
      __self: this
    }, this.state.events[id].status)))));
  }

}

const neural = (match, props) => {
  if (match['oddsHome'] && match['oddsAway'] && match['set2']) {
    let sample = [match.period1Home, match.period1Away, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let gem of match.set1) {
      if (gem[2] === '0' && gem[3] === 1) {
        sample[2] = sample[2] + 1;
      }

      if (gem[2] === '15' && gem[3] === 1) {
        sample[3] = sample[3] + 1;
      }

      if (gem[2] === '30' && gem[3] === 1) {
        sample[4] = sample[4] + 1;
      }

      if (gem[2] === '40' && gem[3] === 1) {
        sample[5] = sample[5] + 1;
      }

      if (gem[1] === '0' && gem[3] === 2) {
        sample[6] = sample[6] + 1;
      }

      if (gem[1] === '15' && gem[3] === 2) {
        sample[7] = sample[7] + 1;
      }

      if (gem[1] === '30' && gem[3] === 2) {
        sample[8] = sample[8] + 1;
      }

      if (gem[1] === '40' && gem[3] === 2) {
        sample[9] = sample[9] + 1;
      }

      if (gem[3] !== gem[4] && gem[4] === 1) {
        sample[10] = sample[10] + 1;
      }

      if (gem[3] !== gem[4] && gem[4] === 2) {
        sample[11] = sample[11] + 1;
      }
    }

    sample[12] = match.oddsHome;
    sample[13] = match.oddsAway;
    const scale = [0.14285714, 0.14285714, 0.2, 0.2, 0.2, 0.166666, 0.2, 0.16666, 0.25, 0.166666, 0.2, 0.2, 0.04, 0.03030303];
    const min_ = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.04, -0.03030303];
    const sampleScaled = math.add(math.dotMultiply(sample, scale), min_);
    const net = new brain.NeuralNetwork();
    const preds = props.live.nets.map(mynet => {
      const net = new brain.NeuralNetwork();
      mynet[0].trainOpts.timeout = Infinity;
      net.fromJSON(mynet[0]);
      return [math.round(net.run(sampleScaled)[0], 2), mynet[1]];
    });
    return preds;
  }
};

const predsWrap = preds => {
  if (preds) {
    const max = Math.max(...preds.map(i => i[0]));
    const index = preds.map(i => i[0]).indexOf(max);
    const result = (max * 100).toString() + '%' + '  ' + preds.map(i => i[1])[index];
    return result;
  } else {
    return __jsx("span", {
      className: "w3-text-white w3-large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306
      },
      __self: undefined
    }, "Not enough data");
  }
};

async function getEvents() {
  const response = await axios.get('https://www.sofascore.com/tennis/livescore/json', {
    headers: {
      'Host': 'www.sofascore.com',
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:67.0) Gecko/20100101 Firefox/67.0',
      'Accept': '*/*',
      'Accept-Language': 'pl,en-US;q=0.7,en;q=0.3',
      'Accept-Encoding': 'gzip',
      'Content-type': 'application/json',
      'Referer': 'https://www.sofascore.com/pl/tenis/livescore',
      'X-Requested-With': 'XMLHttpRequest',
      'Connection': 'keep-alive',
      'TE': 'Trailers'
    }
  }); // handle success

  console.log(response.status);
  const ids = response.data['sportItem']['tournaments'].map(x => x['events'].map(y => y['id']));
  console.log(ids.reduce((ids, id) => ids.concat(id)));
  const codes = ids.reduce((ids, id) => ids.concat(id)); // const codes = [ 8410894,
  //   8410371,
  //   8410380,
  //   8410228,
  //   8411686,
  //   8411685,
  //   8412178,
  //   8411494,
  //   8411495,
  //   8411501 ];

  let finall = {};

  for (let id of codes) {
    const event = await axios.get(`https://www.sofascore.com/event/${id}/json`, {
      headers: {
        'Host': 'www.sofascore.com',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:67.0) Gecko/20100101 Firefox/67.0',
        'Accept': '*/*',
        'Accept-Language': 'pl,en-US;q=0.7,en;q=0.3',
        'Accept-Encoding': 'gzip',
        'Content-type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Connection': 'keep-alive',
        'TE': 'Trailers'
      }
    });
    console.log(event.status);
    const r = event.data;
    console.log(r["event"]["status"]["type"]);
    console.log(r["event"]["homeTeam"]["name"]);
    console.log(r["event"]["awayTeam"]["name"]);
    console.log(r["event"]["homeScore"]["current"]);
    console.log(r["event"]["awayScore"]["current"]);
    console.log(r["event"]["homeScore"]["period1"]);
    console.log(r["event"]["awayScore"]["period1"]);
    console.log(r["event"]["homeScore"]["period2"]);
    console.log(r["event"]["awayScore"]["period2"]);
    console.log(r["event"]["homeScore"]["period3"]);
    console.log(r["event"]["awayScore"]["period3"]);

    if (r['pointByPoint'].length !== 0) {
      for (let set of r['pointByPoint'].reverse()) {
        console.log(set['set']);
        console.log(set['games'].reverse().filter(game => game['score']).map(game => [game['game'], game['points'].slice(-1)[0]['homePoint'], game['points'].slice(-1)[0]['awayPoint'], game['score']['serving'], game['score']['scoring']]));
      }
    } else {
      console.log("BRAK ----------------");
    }

    const odds = await axios.get(`https://api.sofascore.com/api/v1/event/${id}/odds/1/all`, {
      headers: {
        'Host': 'api.sofascore.com',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:67.0) Gecko/20100101 Firefox/67.0',
        'Accept': '*/*',
        'Accept-Language': 'pl,en-US;q=0.7,en;q=0.3',
        'Accept-Encoding': 'gzip',
        'Content-type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Connection': 'keep-alive',
        'TE': 'Trailers'
      }
    }); //  if (odds.status === 200 && odds.data['markets'].length !== 0) { console.log(odds.status);
    //   console.log(eval(odds.data['markets'][0]['choices'][0]['fractionalValue'])+1);
    //   console.log(eval(odds.data['markets'][0]['choices'][1]['fractionalValue'])+1);}

    finall[`${id}`] = {
      'status': r["event"]["status"]["type"],
      'teamHome': r["event"]["homeTeam"]["name"],
      'teamAway': r["event"]["awayTeam"]["name"],
      'currentHome': r["event"]["homeScore"]["current"],
      'currentAway': r["event"]["awayScore"]["current"],
      'period1Home': r["event"]["homeScore"]["period1"],
      'period1Away': r["event"]["awayScore"]["period1"],
      'period2Home': r["event"]["homeScore"]["period2"],
      'period2Away': r["event"]["awayScore"]["period2"],
      'period3Home': r["event"]["homeScore"]["period3"],
      'period3Away': r["event"]["awayScore"]["period3"]
    };

    if (r['pointByPoint'].length !== 0) {
      for (let set of r['pointByPoint'].reverse()) {
        finall[`${id}`]['set' + set['set']] = set['games'].reverse().filter(game => game['score']).map(game => [game['game'], game['points'].slice(-1)[0]['homePoint'], game['points'].slice(-1)[0]['awayPoint'], game['score']['serving'], game['score']['scoring']]);
      }
    }

    ;

    if (odds.status === 200 && odds.data['markets'].length !== 0) {
      try {
        finall[`${id}`]['oddsHome'] = eval(odds.data['markets'][0]['choices'][0]['fractionalValue']) + 1;
        finall[`${id}`]['oddsAway'] = eval(odds.data['markets'][0]['choices'][1]['fractionalValue']) + 1;
      } catch {}
    }

    ;
  }

  console.log(finall);
  const fs = eval("require('fs')");
  let nets = [];

  for (let i of [['10000000', '40:0'], ['01000000', '40:15'], ['00100000', '40:30'], ['00010000', '40:40'], ['00001000', '0:40'], ['00000100', '15:40'], ['00000010', '30:40'], ['00000001', '40:40']]) {
    let rawdata = fs.readFileSync(`nets/net${i[0]}.json`);
    let net1 = JSON.parse(rawdata);
    net1.trainOpts.timeout = Infinity;
    console.log(net1.trainOpts.timeout);
    nets.push([net1, i[1]]);
  }

  return {
    live: finall,
    nets: nets
  };
}

Index.getInitialProps = getEvents;
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/wojcz/Desktop/tennisML/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "brain.js":
/*!***************************!*\
  !*** external "brain.js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("brain.js");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/entries":
/*!****************************************************!*\
  !*** external "core-js/library/fn/object/entries" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/entries");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "mathjs":
/*!*************************!*\
  !*** external "mathjs" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mathjs");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map